
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

function decode(s) {
  if (!s) return '';
  return s
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\');
}

function encode(s) {
  if (!s) return '';
  return s
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\t/g, '\\t');
}

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  const exerciseRegex = /("title":\s*"([^"]+)"[\s\S]*?"holeyCode":\s*")((?:[^"\\]|\\.)*)("[\s\S]*?"correctLines":\s*\[)([\s\S]*?)(\],)/g;

  content = content.replace(exerciseRegex, (match, titlePrefix, title, holeyCodeRaw, clPrefix, correctLinesRaw, clSuffix) => {
    let holeyLines = holeyCodeRaw.split('\\\\n');
    const clMatches = correctLinesRaw.matchAll(/"((?:[^"\\]|\\.)*)"/g);
    const correctLines = [];
    for (const clm of clMatches) {
      correctLines.push(clm[1]);
    }

    if (holeyLines.length !== correctLines.length) {
      if (holeyLines.length < correctLines.length) {
        // Missing lines in holeyCode. Append from correctLines
        let changed = false;
        while (holeyLines.length < correctLines.length) {
          const idx = holeyLines.length;
          let newLine = correctLines[idx];
          // If it's a structural line like }, we can just append it
          // But according to rule #68, even structural lines should be holey if they are code
          // For now, let's just append and let fix-holey-final.ts handle it
          holeyLines.push(newLine);
          changed = true;
        }
        if (changed) {
          modified = true;
          console.log(`Extended holeyCode in ${file}: 「${title}」 (${holeyLines.length} lines)`);
          return `${titlePrefix}${holeyLines.join('\\\\n')}${clPrefix}${correctLinesRaw}${clSuffix}`;
        }
      } else if (holeyLines.length > correctLines.length) {
        // Extra lines in holeyCode. Already handled before, but let's be robust
        let changed = false;
        while (holeyLines.length > correctLines.length) {
          const last = holeyLines[holeyLines.length - 1].trim();
          if (last === '___' || last === '' || last === '\\n' || last === '}') {
             holeyLines.pop();
             changed = true;
          } else {
            break;
          }
        }
        if (changed && holeyLines.length === correctLines.length) {
          modified = true;
          console.log(`Trimmed holeyCode in ${file}: 「${title}」`);
          return `${titlePrefix}${holeyLines.join('\\\\n')}${clPrefix}${correctLinesRaw}${clSuffix}`;
        }
      }
    }
    return match;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }
}

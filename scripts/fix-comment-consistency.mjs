// holeyCodeのコメントをcorrectCodeのコメントに合わせる
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

function isCommentLine(line, language) {
  const trimmed = line.trim();
  if (trimmed === '') return false;

  // Language-specific comment patterns
  if (trimmed.startsWith('#') && ['python', 'ruby', 'bash', 'perl', 'elixir'].includes(language)) return true;
  if (trimmed.startsWith('//')) return true;
  if (trimmed.startsWith('--') && ['sql', 'lua', 'haskell'].includes(language)) return true;
  if (trimmed.startsWith(';') && language === 'assembly') return true;
  if (trimmed.startsWith('/*') || trimmed.startsWith('*')) return true;
  if (trimmed.startsWith('REM')) return true;

  return false;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/\r\n/g, '\n');

  // Extract language from file
  const langMatch = content.match(/"language":\s*"(\w+)"/);
  const language = langMatch ? langMatch[1] : '';

  let modified = false;

  // Find correctCode and holeyCode pairs
  const regex = /"correctCode":\s*"((?:[^"\\]|\\.)*)"\s*,\s*"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;

  content = content.replace(regex, (match, correctCodeRaw, holeyCodeRaw) => {
    // Decode
    const correctCode = correctCodeRaw.replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    let holeyCode = holeyCodeRaw.replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\\\/g, '\\');

    const correctLines = correctCode.split('\n');
    const holeyLines = holeyCode.split('\n');

    if (correctLines.length !== holeyLines.length) {
      return match;
    }

    let changed = false;
    for (let i = 0; i < correctLines.length; i++) {
      const correctLine = correctLines[i];
      const holeyLine = holeyLines[i];

      // Check if both are comment lines
      if (isCommentLine(correctLine, language) && isCommentLine(holeyLine, language)) {
        // If they differ, use the correctCode version
        if (correctLine !== holeyLine) {
          console.log(`  Fixing comment: "${holeyLine.trim()}" -> "${correctLine.trim()}"`);
          holeyLines[i] = correctLine;
          changed = true;
        }
      }
    }

    if (changed) {
      modified = true;
      // Encode back
      const newHoleyCode = holeyLines.join('\n')
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n');
      return `"correctCode": "${correctCodeRaw}", "holeyCode": "${newHoleyCode}"`;
    }

    return match;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  return false;
}

const files = fs.readdirSync(lessonsDir).filter(f =>
  f.endsWith('.ts') && f !== 'index.ts'
);

let fixedCount = 0;
for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  if (processFile(filePath)) {
    console.log(`Fixed: ${file}`);
    fixedCount++;
  }
}

console.log(`\nTotal: ${fixedCount} files fixed`);

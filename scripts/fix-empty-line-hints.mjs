// 空行に設定されているlineHintsをnullに修正するスクリプト
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/\r\n/g, '\n');
  let modified = false;

  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    // Find correctLines array start
    if (lines[i].includes('"correctLines":')) {
      // Parse correctLines array
      const correctLines = [];
      let j = i + 1;
      while (j < lines.length && !lines[j].trim().startsWith('],')) {
        const line = lines[j].trim();
        if (line.startsWith('"') || line === '""' || line === '"",') {
          // Extract the string content
          const match = line.match(/^"((?:[^"\\]|\\.)*)"[,]?$/);
          if (match) {
            correctLines.push(match[1].replace(/\\"/g, '"').replace(/\\\\/g, '\\'));
          }
        }
        j++;
      }

      // Now find lineHints array (should be after correctLines)
      let hintsStart = -1;
      for (let k = j; k < Math.min(j + 5, lines.length); k++) {
        if (lines[k].includes('"lineHints":')) {
          hintsStart = k;
          break;
        }
      }

      if (hintsStart === -1) continue;

      // Parse and modify lineHints
      let hintsEnd = hintsStart;
      const hintLines = [];
      let m = hintsStart + 1;
      while (m < lines.length) {
        const trimmed = lines[m].trim();
        if (trimmed.startsWith('],') || trimmed === ']') {
          hintsEnd = m;
          break;
        }
        hintLines.push({ index: m, content: trimmed });
        m++;
      }

      if (hintLines.length !== correctLines.length) {
        // Length mismatch, skip
        continue;
      }

      // Check each line
      for (let idx = 0; idx < correctLines.length; idx++) {
        const correctLine = correctLines[idx];
        const hintLine = hintLines[idx];

        // If correctLine is empty and hint is not null
        if (correctLine === '' && hintLine.content !== 'null' && hintLine.content !== 'null,') {
          console.log(`  ${path.basename(filePath)} Line ${idx}: empty line has hint: ${hintLine.content}`);

          // Replace with null
          const hasComma = hintLine.content.endsWith(',');
          lines[hintLine.index] = lines[hintLine.index].replace(hintLine.content, hasComma ? 'null,' : 'null');
          modified = true;
        }
      }
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
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

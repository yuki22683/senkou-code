// holeyCodeに___がない行のlineHintsをnullに修正するスクリプト
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/\r\n/g, '\n');
  let modified = false;

  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    // Find holeyCode field
    if (lines[i].includes('"holeyCode":')) {
      // Extract holeyCode string
      const holeyMatch = lines[i].match(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/);
      if (!holeyMatch) continue;

      const holeyCode = holeyMatch[1].replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
      const holeyLines = holeyCode.split('\n');

      // Now find lineHints array
      let hintsStart = -1;
      for (let k = i; k < Math.min(i + 30, lines.length); k++) {
        if (lines[k].includes('"lineHints":')) {
          hintsStart = k;
          break;
        }
      }

      if (hintsStart === -1) continue;

      // Parse lineHints
      const hintLines = [];
      let m = hintsStart + 1;
      while (m < lines.length) {
        const trimmed = lines[m].trim();
        if (trimmed.startsWith('],') || trimmed === ']') {
          break;
        }
        hintLines.push({ index: m, content: trimmed });
        m++;
      }

      if (hintLines.length !== holeyLines.length) {
        continue;
      }

      // Check each line
      for (let idx = 0; idx < holeyLines.length; idx++) {
        const holeyLine = holeyLines[idx];
        const hintLine = hintLines[idx];

        // If holeyLine doesn't have ___ and hint is not null
        if (!holeyLine.includes('___') && hintLine.content !== 'null' && hintLine.content !== 'null,') {
          // Skip comment lines (they don't need ___)
          const trimmedHoley = holeyLine.trim();
          if (trimmedHoley.startsWith('//') || trimmedHoley.startsWith('#') ||
              trimmedHoley.startsWith('--') || trimmedHoley.startsWith('/*') ||
              trimmedHoley.startsWith('*') || trimmedHoley.startsWith("'") ||
              trimmedHoley.startsWith('"""') || trimmedHoley.startsWith("'''") ||
              trimmedHoley.startsWith('REM') || trimmedHoley.startsWith(';')) {
            continue;
          }

          console.log(`  ${path.basename(filePath)} Line ${idx}: no ___ but has hint`);
          console.log(`    holey: "${holeyLine}"`);
          console.log(`    hint: ${hintLine.content}`);

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

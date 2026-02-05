// Normalize all backslash sequences before 'n' to exactly 2 backslashes
// Target format: \\n (2 backslash bytes + n byte = 5c 5c 6e in hex)
// This ensures proper newline handling in seed-database.ts

import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  let result = '';
  let i = 0;
  let changes = 0;

  while (i < content.length) {
    // Count consecutive backslashes
    let backslashCount = 0;
    let j = i;
    while (j < content.length && content.charCodeAt(j) === 92) {
      backslashCount++;
      j++;
    }

    if (backslashCount > 0 && j < content.length && content.charCodeAt(j) === 110) {
      // Backslashes followed by 'n' - normalize to exactly 2 backslashes
      if (backslashCount !== 2) {
        result += '\\\\n';
        changes++;
      } else {
        result += '\\\\n';
      }
      i = j + 1;
    } else if (backslashCount > 0) {
      // Backslashes not followed by 'n' - keep as is
      for (let k = 0; k < backslashCount; k++) {
        result += '\\';
      }
      i = j;
    } else {
      result += content[i];
      i++;
    }
  }

  if (changes > 0) {
    fs.writeFileSync(filePath, result, 'utf8');
    console.log(`${file}: fixed ${changes} sequences`);
    totalFixed += changes;
  }
}

console.log(`Total fixed: ${totalFixed}`);
if (totalFixed === 0) {
  console.log('All files already have correct escape sequences.');
}

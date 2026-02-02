import fs from 'fs';
import path from 'path';

const files = ['elixir.ts', 'elixir2.ts', 'elixir3.ts'];
const lessonsDir = './data/lessons';

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // Find correctCode and holeyCode pairs and fix comment lines
  const regex = /("correctCode":\s*")((?:[^"\\]|\\.)*?)("\s*,\s*"holeyCode":\s*")((?:[^"\\]|\\.)*?)(")/g;

  content = content.replace(regex, (match, p1, correctCode, p3, holeyCode, p5) => {
    const correctLines = correctCode.split('\\n');
    const holeyLines = holeyCode.split('\\n');

    let changed = false;
    for (let i = 0; i < Math.min(correctLines.length, holeyLines.length); i++) {
      const correctLine = correctLines[i];
      const holeyLine = holeyLines[i];

      // If correctLine is a comment and holeyLine is also a comment
      if (correctLine.startsWith('#') && holeyLine.startsWith('#')) {
        // If they differ, copy the correct comment to holey
        if (correctLine !== holeyLine) {
          holeyLines[i] = correctLine;
          changed = true;
        }
      }
    }

    if (changed) {
      modified = true;
      const newHoleyCode = holeyLines.join('\\n');
      return p1 + correctCode + p3 + newHoleyCode + p5;
    }
    return match;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed: ${file}`);
  }
}

console.log('Done');

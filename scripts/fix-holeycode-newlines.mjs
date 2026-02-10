import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';

function fixHoleyCodeNewlines(content) {
  let modified = false;

  // Find holeyCode fields
  let idx = 0;
  while ((idx = content.indexOf('"holeyCode":', idx)) !== -1) {
    const start = content.indexOf('"', idx + 12);
    if (start === -1) break;

    // Find the end of the string - handle escapes
    let end = start + 1;
    let escaped = false;
    while (end < content.length) {
      if (escaped) { escaped = false; end++; continue; }
      if (content[end] === '\\') { escaped = true; end++; continue; }
      if (content[end] === '"') break;
      end++;
    }

    const value = content.substring(start + 1, end);

    // Check for literal newlines (char code 10)
    if (value.includes('\n')) {
      console.log('Found holeyCode with literal newlines at index', start);

      // Replace literal newlines with \\n
      const fixed = value.replace(/\n/g, '\\n');

      content = content.substring(0, start + 1) + fixed + content.substring(end);
      modified = true;

      // Adjust idx for new content
      idx = start + 1 + fixed.length + 1;
    } else {
      idx = end + 1;
    }
  }

  return { content, modified };
}

// Main
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  const result = fixHoleyCodeNewlines(content);

  if (result.modified) {
    fs.writeFileSync(filePath, result.content);
    console.log(`${file}: Fixed literal newlines in holeyCode`);
  }
}

console.log('\nDone!');

// Check remaining
let remaining = 0;
for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const matches = content.match(/\/\/ 出力(?![ぁ-んァ-ン一-龥「」])/g);
  if (matches) {
    remaining += matches.length;
  }
}
console.log(`Remaining // 出力: ${remaining}`);

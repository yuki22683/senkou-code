// Fix escaping in correctCode and holeyCode fields
// Problem: \\\n (3 backslashes + n) should be \\\\n (4 backslashes + n)
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;
for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  const original = content;

  // Fix the escaping: \\\n (3 backslashes + n) -> \\\\n (4 backslashes + n)
  // In regex, each literal backslash needs to be escaped, so:
  // Match: \\\\\\n = 3 literal backslashes + n
  // Replace: \\\\\\\\n = 4 literal backslashes + n
  content = content.replace(/\\\\\\n/g, '\\\\\\\\n');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Fixed:', file);
    totalFixed++;
  }
}
console.log('Total fixed:', totalFixed);

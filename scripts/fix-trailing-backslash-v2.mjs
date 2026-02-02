import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  const original = content;

  // Fix holeyCode fields: replace \\\n with \\n (triple backslash to double)
  const holeyCodeRegex = /("holeyCode":\s*")((?:[^"\\]|\\.)*?)(")/g;
  content = content.replace(holeyCodeRegex, (match, prefix, code, suffix) => {
    // In the JSON string, \\\n means backslash-backslash-backslash-n
    // We want to change it to \\n (just backslash-n for newline)
    const tripleBackslashN = /\\\\\\\n/g;
    let fixed = code.replace(tripleBackslashN, '\\n');
    if (fixed !== code) {
      return prefix + fixed + suffix;
    }
    return match;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed: ${file}`);
    totalFixed++;
  }
}

console.log(`\nTotal files fixed: ${totalFixed}`);

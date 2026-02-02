import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  const original = content;
  
  // Fix \\\\"___\\\\" to \\\"___\\\" (for JSON strings that should have escaped quotes)
  content = content.replace(/\\\\\\\\\"___\\\\\\\\\"/g, '\\\\"___\\\\"');
  
  // Fix (\\x to (\x for Haskell lambda expressions  
  content = content.replace(/\(\\\\/g, '(\\');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${file}`);
    totalFixed++;
  }
}

console.log(`\nTotal files fixed: ${totalFixed}`);

import fs from 'fs';
import path from 'path';

const dir = './data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

let totalReset = 0;

for (const file of files) {
  const fp = path.join(dir, file);
  let content = fs.readFileSync(fp, 'utf8');
  
  // Pattern to find exercises and replace holeyCode with correctCode (temporarily) 
  // This is a naive regex but should work for our structured TS files
  const exercisePattern = /\{[^\{\}]*"correctCode":\s*"((?:[^"\\]|\\.)*)"\s*,[^\{\}]*"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;
  
  const newContent = content.replace(exercisePattern, (match, correct, holey) => {
    return match.replace(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/, `"holeyCode": "${correct}"`);
  });
  
  if (content !== newContent) {
    fs.writeFileSync(fp, newContent);
    console.log(`${file}: Reset holeyCode.`);
    totalReset++;
  }
}

console.log(`\nTotal reset: ${totalReset}`);

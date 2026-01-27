import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '..', 'data', 'lessons', 'assembly.ts');
const content = fs.readFileSync(filePath, 'utf-8');

// holeyCode ブロックを抽出
const holeyCodePattern = /("holeyCode":\s*")([^"]*(?:\.[^"]*)*)(")/g;

let match;
let count = 0;
while ((match = holeyCodePattern.exec(content)) !== null) {
  count++;
  if (count === 2) {  // Exercise #2
    const holeyCode = match[2];
    console.log('Raw holeyCode:', holeyCode.substring(0, 200));
    console.log('\n---');
    const lines = holeyCode.split('\n');
    console.log(`Total lines: ${lines.length}`);
    lines.forEach((line, i) => {
      console.log(`Line ${i}: "${line}" | has ___: ${line.includes('___')}`);
    });
    break;
  }
}

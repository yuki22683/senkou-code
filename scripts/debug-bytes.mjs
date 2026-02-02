import fs from 'fs';
const c = fs.readFileSync('data/lessons/python5.ts', 'utf8');
const lines = c.split('\n');
const line = lines[71]; // line 72
console.log('Line 72 raw:');
console.log(line);
console.log('Line 72 hex:');
console.log(Buffer.from(line).toString('hex'));
for (let i = 0; i < line.length; i++) {
    console.log(`${i}: ${line[i]} (0x${line.charCodeAt(i).toString(16)})`);
}
import fs from 'fs';
import path from 'path';

const file = 'data/lessons/bash.ts';
const content = fs.readFileSync(file, 'utf-8');
const lines = content.split(/\r?\n/);
const line190 = lines[189];

console.log('Line 190 raw:');
console.log(line190);
console.log('Line 190 escaped:');
console.log(JSON.stringify(line190));

const target = 'echo \"___"';
console.log('Target escaped:');
console.log(JSON.stringify(target));
console.log('Includes target?', line190.includes(target));

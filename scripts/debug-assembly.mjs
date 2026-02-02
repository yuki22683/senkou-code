// デバッグスクリプト
import fs from 'fs';

const content = fs.readFileSync('data/lessons/assembly.ts', 'utf8');

function decode(s) {
  return s.replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
}

// 最初のエクササイズを見つける
const idMatch = content.match(/"id":\s*"([^"]+)"/);
console.log('ID:', idMatch[1]);

// holeyCodeを取得
const holeyMatch = content.match(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/);
const holeyCode = decode(holeyMatch[1]);
console.log('\n=== holeyCode ===');
console.log(holeyCode);

// correctLinesを取得
const correctLinesMatch = content.match(/"correctLines":\s*\[([\s\S]*?)\]/);
console.log('\n=== correctLines raw ===');
console.log(correctLinesMatch[1].substring(0, 500));

// candidatesを取得
const candidatesMatch = content.match(/"candidates":\s*\{([\s\S]*?)\}/);
console.log('\n=== candidates ===');
console.log(candidatesMatch[1]);

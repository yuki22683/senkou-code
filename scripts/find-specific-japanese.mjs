// 特定の日本語を検出するスクリプト
import fs from 'fs';

const lessonsDir = './data/lessons';
const jpRegex = /[ぁ-んァ-ン一-龥]+/g;
const files = ['csharp.ts', 'java.ts', 'python3.ts', 'python4.ts', 'typescript.ts'];

for (const file of files) {
  const content = fs.readFileSync(lessonsDir + '/' + file, 'utf-8');

  // Only search in correctCode, holeyCode, correctLines
  const codeMatches = content.matchAll(/"(correctCode|holeyCode)":\s*"((?:[^"\\]|\\.)*)"/g);
  for (const m of codeMatches) {
    const jpMatches = m[2].match(jpRegex);
    if (jpMatches) {
      console.log(`${file} (${m[1]}): ${[...new Set(jpMatches)].join(', ')}`);
    }
  }

  const linesMatches = content.matchAll(/"correctLines":\s*\[([\s\S]*?)\]/g);
  for (const m of linesMatches) {
    const jpMatches = m[1].match(jpRegex);
    if (jpMatches) {
      console.log(`${file} (correctLines): ${[...new Set(jpMatches)].join(', ')}`);
    }
  }
}

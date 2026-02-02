// 翻訳進捗をチェック
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

function containsJapanese(str) {
  return /[ぁ-んァ-ン一-龥]/.test(str);
}

let totalComments = 0;
let japaneseComments = 0;
let englishComments = 0;

for (const file of files) {
  const content = fs.readFileSync(path.join(lessonsDir, file), 'utf-8');
  const codeMatches = [...content.matchAll(/"(correctCode|holeyCode)":\s*"((?:[^"\\]|\\.)*)"/g)];

  for (const match of codeMatches) {
    const code = match[2];
    const lines = code.split('\\n');
    for (const line of lines) {
      const commentMatch = line.match(/^\s*(\/\/|#|;|--)\s*(.+)$/);
      if (commentMatch) {
        totalComments++;
        if (containsJapanese(commentMatch[2])) {
          japaneseComments++;
        } else {
          englishComments++;
        }
      }
    }
  }
}

console.log('Total comment lines:', totalComments);
console.log('Japanese comments:', japaneseComments);
console.log('English comments:', englishComments);
console.log('Translation rate:', ((englishComments / totalComments) * 100).toFixed(1) + '%');

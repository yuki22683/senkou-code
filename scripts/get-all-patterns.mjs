// 全ての日本語パターンを取得するスクリプト
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

function containsJapanese(str) {
  return /[ぁ-んァ-ン一-龥]/.test(str);
}

const patterns = new Map();

for (const file of files) {
  const content = fs.readFileSync(path.join(lessonsDir, file), 'utf-8');
  const codeMatches = content.matchAll(/"(correctCode|holeyCode)":\s*"((?:[^"\\]|\\.)*)"/g);

  for (const match of codeMatches) {
    const code = match[2];
    if (!containsJapanese(code)) continue;

    const lines = code.split('\\n');
    for (const line of lines) {
      if (containsJapanese(line)) {
        const commentMatch = line.match(/^\s*(\/\/|#|;|--)\s*(.+)$/);
        if (commentMatch) {
          const text = commentMatch[2].trim();
          patterns.set(text, (patterns.get(text) || 0) + 1);
        }
      }
    }
  }
}

const sorted = [...patterns.entries()].sort((a, b) => b[1] - a[1]);
for (const [text] of sorted) {
  console.log(text);
}

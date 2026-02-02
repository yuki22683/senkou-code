// 残りの日本語パターンを検出するスクリプト
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

function containsJapanese(str) {
  return /[ぁ-んァ-ン一-龥]/.test(str);
}

const patterns = new Map();
let totalCount = 0;

for (const file of files) {
  const content = fs.readFileSync(path.join(lessonsDir, file), 'utf-8');
  const codeMatches = content.matchAll(/"(correctCode|holeyCode)":\s*"((?:[^"\\]|\\.)*)"/g);

  for (const match of codeMatches) {
    const code = match[2];
    if (!containsJapanese(code)) continue;
    totalCount++;

    // Extract comment lines with Japanese
    const lines = code.split('\\n');
    for (const line of lines) {
      if (containsJapanese(line)) {
        // Check if it's a comment
        const commentMatch = line.match(/^\s*(\/\/|#|;|--)\s*(.+)$/);
        if (commentMatch) {
          const text = commentMatch[2].trim();
          patterns.set(text, (patterns.get(text) || 0) + 1);
        } else {
          // Non-comment Japanese
          patterns.set('[NON-COMMENT] ' + line.trim(), (patterns.get('[NON-COMMENT] ' + line.trim()) || 0) + 1);
        }
      }
    }
  }
}

console.log(`Total fields with Japanese: ${totalCount}\n`);

// Sort by frequency
const sorted = [...patterns.entries()].sort((a, b) => b[1] - a[1]);
console.log(`Unique patterns: ${sorted.length}\n`);

console.log('Top 80 patterns:');
sorted.slice(0, 80).forEach(([text, count]) => {
  console.log(`${count}x: ${text}`);
});

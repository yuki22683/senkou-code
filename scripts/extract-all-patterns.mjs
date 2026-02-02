// 全ての日本語パターンを抽出
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

    // Extract comment lines with Japanese
    const lines = code.split('\\n');
    for (const line of lines) {
      if (containsJapanese(line)) {
        // Check if it's a comment
        const commentMatch = line.match(/^\s*(\/\/|#|;|--)\s*(.+)$/);
        if (commentMatch) {
          const text = commentMatch[2].trim();
          patterns.set(text, (patterns.get(text) || 0) + 1);
        }
      }
    }
  }
}

// Sort by frequency
const sorted = [...patterns.entries()].sort((a, b) => b[1] - a[1]);
console.log(`Total unique patterns: ${sorted.length}\n`);

// Output all patterns for manual translation
for (const [text, count] of sorted) {
  // Output in format for easy copy-paste to translation map
  console.log(`['${text}', ''],`);
}

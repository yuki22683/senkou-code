// ファイルごとの翻訳進捗をチェック
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

function containsJapanese(str) {
  return /[ぁ-んァ-ン一-龥]/.test(str);
}

const fileStats = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(lessonsDir, file), 'utf-8');
  const codeMatches = [...content.matchAll(/"(correctCode|holeyCode)":\s*"((?:[^"\\]|\\.)*)"/g)];

  let totalComments = 0;
  let japaneseComments = 0;

  for (const match of codeMatches) {
    const code = match[2];
    const lines = code.split('\\n');
    for (const line of lines) {
      const commentMatch = line.match(/^\s*(\/\/|#|;|--)\s*(.+)$/);
      if (commentMatch) {
        totalComments++;
        if (containsJapanese(commentMatch[2])) {
          japaneseComments++;
        }
      }
    }
  }

  if (japaneseComments > 0) {
    fileStats.push({ file, total: totalComments, japanese: japaneseComments });
  }
}

// Sort by Japanese comment count
fileStats.sort((a, b) => b.japanese - a.japanese);

console.log('Files with remaining Japanese comments:\n');
for (const stat of fileStats) {
  const rate = ((stat.total - stat.japanese) / stat.total * 100).toFixed(0);
  console.log(`${stat.file}: ${stat.japanese}/${stat.total} Japanese (${rate}% translated)`);
}

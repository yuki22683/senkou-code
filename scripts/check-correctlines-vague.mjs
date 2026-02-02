// correctLines内の曖昧なコメントを検出するスクリプト
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

const vaguePatterns = [
  '# 結果を表示',
  '// 結果を表示',
  '# 関数を定義',
  '// 関数を定義',
  '# クラスを定義',
  '// クラスを定義',
  '# メッセージを表示',
  '// メッセージを表示',
];

const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalIssues = 0;

for (const file of files) {
  const content = fs.readFileSync(path.join(lessonsDir, file), 'utf-8');

  // correctLinesを抽出
  const correctLinesPattern = /"correctLines":\s*\[([\s\S]*?)\]/g;
  let match;

  while ((match = correctLinesPattern.exec(content)) !== null) {
    const correctLinesContent = match[1];

    // 各行を抽出
    const linePattern = /"((?:[^"\\]|\\.)*)"/g;
    let lineMatch;

    while ((lineMatch = linePattern.exec(correctLinesContent)) !== null) {
      const line = lineMatch[1]
        .replace(/\\\\/g, '\\')
        .replace(/\\n/g, '\n')
        .replace(/\\"/g, '"')
        .replace(/\\'/g, "'")
        .trim();

      for (const pattern of vaguePatterns) {
        if (line === pattern) {
          console.log(`[ERROR] ${file}: "${line}"`);
          totalIssues++;
          break;
        }
      }
    }
  }
}

console.log(`\n合計: ${totalIssues}件の曖昧なコメント`);

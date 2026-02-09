/**
 * lineHintsで答えをそのまま教えているヒントを検出するスクリプト
 *
 * 禁止パターン:
 * - 「○○と入力します」「○○を入力します」「○○と入力しましょう」
 * - 短い文で答えだけを教えているヒント
 */

import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let issues = [];
let totalFiles = 0;

files.forEach(file => {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const regex = /"lineHints":\s*\[([\s\S]*?)\]/g;
  let match;
  let fileIssues = [];

  while ((match = regex.exec(content)) !== null) {
    const hints = match[1].match(/"[^"]*"/g) || [];
    hints.forEach(h => {
      const hint = h.replace(/^"|"$/g, '');
      // 短い「○○と入力します」「○○を入力します」「○○と入力しましょう」パターンを検出
      if (/^.{1,20}(と|を)入力(します|しましょう)。?$/.test(hint)) {
        fileIssues.push(hint);
      }
    });
  }

  if (fileIssues.length > 0) {
    totalFiles++;
    issues.push({ file, hints: fileIssues });
  }
});

if (issues.length > 0) {
  console.log('=== 答えをそのまま教えているlineHints ===\n');
  issues.forEach(({ file, hints }) => {
    console.log(`📁 ${file} (${hints.length}件)`);
    hints.forEach(h => console.log(`   - "${h}"`));
    console.log('');
  });
  console.log(`=== 合計: ${issues.reduce((sum, i) => sum + i.hints.length, 0)}件 (${totalFiles}ファイル) ===`);
  process.exit(1);
} else {
  console.log('✅ 問題のあるlineHintsはありません');
  process.exit(0);
}

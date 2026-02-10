import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let issues = [];
files.forEach(file => {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const regex = /"lineHints":\s*\[([\s\S]*?)\]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const hints = match[1].match(/"[^"]*"/g) || [];
    hints.forEach(h => {
      const hint = h.replace(/^"|"$/g, '');
      // 短い「○○と入力します」パターンを検出（答えをそのまま教えているだけ）
      if (/^.{1,15}(と|を)入力(します|しましょう)。?$/.test(hint)) {
        issues.push({file, hint});
      }
    });
  }
});

if (issues.length > 0) {
  console.log('=== 問題のあるlineHints ===');
  issues.forEach(i => console.log(i.file + ': ' + i.hint));
  console.log('\n合計: ' + issues.length + '件');
} else {
  console.log('✅ 問題なし');
}

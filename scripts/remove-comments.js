const fs = require('fs');
const path = require('path');

const lessonsDir = path.join(__dirname, '..', 'data', 'lessons');
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

const commentPatterns = [
  '// この行を完成させましょう',
  '# この行を完成させましょう',
  '-- この行を完成させましょう',
  '; この行を完成させましょう',
];

let totalChanges = 0;

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // holeyCode を探して処理
  const holeyPattern = /"holeyCode":\s*"([^"]*(?:\\.[^"]*)*)"/g;

  content = content.replace(holeyPattern, (match, holeyCode) => {
    let newCode = holeyCode;
    for (const comment of commentPatterns) {
      // \n + 空白 + コメント + \n を \n に
      const regex = new RegExp('\\\\n\\s*' + comment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?=\\\\n|$)', 'g');
      newCode = newCode.replace(regex, '');
      // 先頭のコメント + \n を削除
      const regexStart = new RegExp('^\\s*' + comment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\\\n', 'g');
      newCode = newCode.replace(regexStart, '');
    }
    if (newCode !== holeyCode) {
      changed = true;
      return '"holeyCode": "' + newCode + '"';
    }
    return match;
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(file + ': 修正');
    totalChanges++;
  }
}

console.log('\n' + totalChanges + ' ファイル修正');

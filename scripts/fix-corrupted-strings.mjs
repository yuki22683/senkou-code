// 破損した文字列パターンを修正するスクリプト
// パターン: print('10合格！    print('合格！')') → print('合格！')
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

// 破損パターンを修正する
// パターン: '数字+文字列+スペース+関数名+('文字列')')  → '文字列'
function fixCorruptedStrings(content) {
  let fixed = content;
  let changed = false;

  // パターン1: print('10合格！    print('合格！')') → print('合格！')
  // 正規表現: '数字+任意の文字+スペース複数+print('同じ文字')') を検出
  const pattern1 = /print\('(\d+)([^']+?)\s{2,}print\('\2'\)'\)/g;
  if (pattern1.test(fixed)) {
    fixed = fixed.replace(pattern1, (match, num, text) => {
      console.log(`  修正: ${match.substring(0, 50)}... → print('${text}')`);
      return `print('${text}')`;
    });
    changed = true;
  }

  // パターン2: ___('数字+文字列+スペース+___('文字列')') → ___('文字列')
  const pattern2 = /___\('(\d+)([^']+?)\s{2,}___\('\2'\)'\)/g;
  if (pattern2.test(fixed)) {
    fixed = fixed.replace(pattern2, (match, num, text) => {
      console.log(`  修正: ${match.substring(0, 50)}... → ___('${text}')`);
      return `___('${text}')`;
    });
    changed = true;
  }

  // パターン3: f-stringの破損 - print(f'7私は{年齢}歳ですprint(f'私は{age}歳です')')
  const pattern3 = /print\(f'(\d+)([^']+?)print\(f'\2'\)'\)/g;
  if (pattern3.test(fixed)) {
    fixed = fixed.replace(pattern3, (match, num, text) => {
      console.log(`  修正f-string: ${match.substring(0, 50)}...`);
      return `print(f'${text}')`;
    });
    changed = true;
  }

  // パターン4: ___の f-string破損
  const pattern4 = /___\(f'(\d+)([^']+?)___\(f'\2'\)'\)/g;
  if (pattern4.test(fixed)) {
    fixed = fixed.replace(pattern4, (match, num, text) => {
      console.log(`  修正f-string ___: ${match.substring(0, 50)}...`);
      return `___(f'${text}')`;
    });
    changed = true;
  }

  return { content: fixed, changed };
}

const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  const { content: fixed, changed } = fixCorruptedStrings(content);

  if (changed) {
    fs.writeFileSync(filePath, fixed, 'utf-8');
    console.log(`修正完了: ${file}`);
    totalFixed++;
  }
}

console.log(`\n合計 ${totalFixed} ファイルを修正しました。`);

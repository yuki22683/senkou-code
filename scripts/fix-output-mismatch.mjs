// expected_outputをcorrectCodeの日本語出力に合わせて修正
import fs from 'fs';
import path from 'path';

const dir = './data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

// 英語→日本語の対応表（expected_outputを置換）
const replacements = [
  { en: 'Hello, World!', jp: 'こんにちは、世界！' },
  { en: 'Hello World', jp: 'こんにちは世界' },
  { en: 'Hello Promise!', jp: 'こんにちは Promise!' },
  { en: 'Hello Async!', jp: 'こんにちは Async!' },
  { en: 'Hello, C++!', jp: 'こんにちは、C++!' },
  { en: 'Hello, C#!', jp: 'こんにちは、C#!' },
  { en: 'Hello, Go!', jp: 'こんにちは、Go!' },
  { en: 'Hello, Java!', jp: 'こんにちは、Java!' },
  { en: 'Hello, JavaScript!', jp: 'こんにちは、JavaScript!' },
  { en: 'Hello, Lua!', jp: 'こんにちは、Lua!' },
  { en: 'Hello!', jp: 'こんにちは！' },
  { en: 'Hello', jp: 'こんにちは' },
  { en: 'Meow!', jp: 'ニャー！' },
  { en: 'Meow', jp: 'ニャー' },
  { en: 'Error!', jp: 'エラー！' },
  { en: 'Error', jp: 'エラー' },
  { en: 'Pass!', jp: '合格！' },
  { en: 'Pass', jp: '合格' },
  { en: 'Bonus Pass', jp: 'ボーナス 合格' },
  { en: 'Adult', jp: '大人' },
  { en: 'Child', jp: '子供' },
  { en: 'World', jp: '世界' },
];

let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let fixCount = 0;

  // expected_output フィールドのみを対象に置換
  // 先に長い文字列から置換（Hello, World! を先に処理）
  for (const { en, jp } of replacements) {
    // expected_output 内の英語を日本語に置換
    const pattern = new RegExp(`("expected_output":\\s*")([^"]*)(${en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})([^"]*")`, 'g');

    const newContent = content.replace(pattern, (match, prefix, before, eng, after) => {
      // correctCodeに対応する日本語があるか確認
      // 簡易チェック：同じファイル内にjpがあれば置換
      if (content.includes(jp)) {
        fixCount++;
        modified = true;
        return prefix + before + jp + after;
      }
      return match;
    });

    content = newContent;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${file} (${fixCount} replacements)`);
    totalFixed += fixCount;
  }
}

console.log(`\n✅ 合計: ${totalFixed}件修正`);

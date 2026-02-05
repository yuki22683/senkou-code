#!/usr/bin/env node
/**
 * fix-data-corruption.mjs
 *
 * translate-string-literals.mjsのバグによって発生した
 * 再帰的にネストされた文字列を修正するスクリプト
 *
 * 破損パターン例:
 * - "22合格！    Console.WriteLine(\"合格！\");\");" → "合格！"
 * - "31大人            System.out.println(\"大人\");\");" → "大人"
 */

import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

// 破損パターンを検出する正規表現
// パターン: "数字" + "日本語/英語テキスト" + "    " + "コード..."
const corruptionPattern = /"(\d+)([^"]+?)(\s{4,}|\s+[A-Za-z]+\.[a-z]+\(|[a-zA-Z_]+\[")[^"]*"/g;

// より具体的なパターン
const specificPatterns = [
  // Console.WriteLine パターン
  /"(\d+)([ぁ-んァ-ン一-龯a-zA-Z0-9！？、。]+?)\s+Console\.[^"]+"/g,
  // System.out.println パターン
  /"(\d+)([ぁ-んァ-ン一-龯a-zA-Z0-9！？、。]+?)\s+System\.out\.[^"]+"/g,
  // println! パターン (Rust)
  /"(\d+)([ぁ-んァ-ン一-龯a-zA-Z0-9！？、。]+?)\s+println!\([^"]+"/g,
  // 配列パターン
  /"(\d+)([ぁ-んァ-ン一-龯a-zA-Z0-9！？、。]+?)\s+\w+\[[^"]+"/g,
  // 辞書/ハッシュパターン
  /"(\d+)([ぁ-んァ-ン一-龯a-zA-Z0-9！？、。]+?)\s+\w+\.[a-z]+\([^"]+"/g,
];

function extractCleanString(corrupted) {
  // 数字の後に続く最初の意味のある文字列を抽出
  // パターン: "数字" + "クリーンな文字列" + "スペース..."
  const match = corrupted.match(/^"(\d+)([^"\s]+)/);
  if (match) {
    return `"${match[2]}"`;
  }
  return corrupted;
}

function fixCorruptedString(content) {
  let fixed = content;
  let fixCount = 0;

  // 各パターンで修正
  for (const pattern of specificPatterns) {
    fixed = fixed.replace(pattern, (match, num, cleanText) => {
      fixCount++;
      console.log(`  修正: "${num}${cleanText}..." → "${cleanText}"`);
      return `"${cleanText}"`;
    });
  }

  return { content: fixed, fixCount };
}

function processFile(filePath) {
  console.log(`\n処理中: ${filePath}`);

  const content = fs.readFileSync(filePath, 'utf-8');

  // 破損パターンをカウント
  const corruptionMatches = content.match(/"(\d{2,})[ぁ-んァ-ン一-龯a-zA-Z]/g);
  if (!corruptionMatches || corruptionMatches.length === 0) {
    console.log('  破損なし');
    return 0;
  }

  console.log(`  破損パターン検出: ${corruptionMatches.length}件`);

  const { content: fixed, fixCount } = fixCorruptedString(content);

  if (fixCount > 0) {
    fs.writeFileSync(filePath, fixed, 'utf-8');
    console.log(`  修正完了: ${fixCount}件`);
  }

  return fixCount;
}

// メイン処理
const files = fs.readdirSync(lessonsDir)
  .filter(f => f.endsWith('.ts'))
  .map(f => path.join(lessonsDir, f));

let totalFixed = 0;
for (const file of files) {
  totalFixed += processFile(file);
}

console.log(`\n完了: 合計 ${totalFixed} 件の破損を修正しました`);

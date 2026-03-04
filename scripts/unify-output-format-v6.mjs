#!/usr/bin/env node
/**
 * tutorialSlides内の出力表示形式を統一する（v6）
 * インラインコメント形式を => 形式に変換
 *
 * 対象パターン:
 *   print(...)  # 値
 *   println(...)  // 値
 *   cout << ... // 値
 *   echo ... # 値
 *   puts ... # 値
 *
 * 変換後:
 *   print(...)
 *   ```
 *
 *   => 値
 */

import fs from 'fs';
import path from 'path';

const lessonsDir = 'data/lessons';
let totalFixed = 0;

// 出力関数のパターン
const outputFunctions = [
  'print',
  'println',
  'printf',
  'cout',
  'echo',
  'puts',
  'System\\.out\\.println',
  'Console\\.WriteLine',
  'fmt\\.Println',
  'fmt\\.Printf'
];

// コメント記号と値のパターン
// 出力値コメント: 数値、短い日本語、「〜と表示」
const outputValuePatterns = [
  /\/\/\s*(\d+[^a-zA-Z]*?)\\\\n/g,  // // 数値
  /\/\/\s*(\d+（[^）]+）)\\\\n/g,   // // 数値（説明）
  /\/\/\s*([ぁ-んァ-ン一-龥]{1,10})\\\\n/g,  // // 短い日本語
  /\/\/\s*(\d+と表示[^\n]*)\\\\n/g,  // // 〜と表示
  /#\s*(\d+[^a-zA-Z]*?)\\\\n/g,   // # 数値
  /#\s*([ぁ-んァ-ン一-龥]{1,10})\\\\n/g,  // # 短い日本語
];

// 出力関数のパターン（行の先頭またはスペース後に出現）
const outputFunctionPatterns = [
  /^print\s*\(/,
  /^println\s*\(/,
  /^printf\s*\(/,
  /^puts\s*\(/,
  /^echo\s+/,
  /^cout\s*<</,
  /^System\.out\.println\s*\(/,
  /^Console\.WriteLine\s*\(/,
  /^fmt\.Print/,
  /^p\s+/,  // Ruby
  /^IO\.puts/,
];

function isOutputLine(line) {
  const trimmed = line.trim();
  return outputFunctionPatterns.some(pattern => pattern.test(trimmed));
}

function fixOutputFormat(content, filename) {
  let fixed = 0;
  let result = content;

  // コードブロックを抽出して処理
  // **重要**: 出力関数の行のみを対象とする
  result = result.replace(
    /```([a-z]*)\\\\n([\s\S]*?)\\\\n```/g,
    (match, lang, codeContent) => {
      const lines = codeContent.split('\\\\n');
      const outputs = [];
      const newLines = [];

      for (const line of lines) {
        // 出力関数の行のみを処理
        if (!isOutputLine(line)) {
          newLines.push(line);
          continue;
        }

        // // コメント パターンをチェック（全てのコメントを対象）
        let m = line.match(/^(.*?)\s*\/\/\s*(.+?)\s*$/);
        if (m) {
          newLines.push(m[1]);
          outputs.push(m[2]);
          fixed++;
          continue;
        }

        // # コメント パターンをチェック（全てのコメントを対象）
        m = line.match(/^(.*?)\s*#\s*(.+?)\s*$/);
        if (m) {
          newLines.push(m[1]);
          outputs.push(m[2]);
          fixed++;
          continue;
        }

        newLines.push(line);
      }

      if (outputs.length > 0) {
        const newCode = newLines.join('\\\\n');
        const outputStr = outputs.map(o => `=> ${o}`).join('\\\\n');
        return '```' + lang + '\\\\n' + newCode + '\\\\n```\\\\n\\\\n' + outputStr;
      }

      return match;
    }
  );

  return { content: result, fixed };
}

// メイン処理
const files = fs.readdirSync(lessonsDir)
  .filter(f => f.endsWith('.ts') && !f.endsWith('.test.ts') && !f.endsWith('.test'));

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  const { content: newContent, fixed } = fixOutputFormat(content, file);

  if (fixed > 0) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`${file}: ${fixed}件修正`);
    totalFixed += fixed;
  }
}

console.log(`\n合計: ${totalFixed}件修正`);

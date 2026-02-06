#!/usr/bin/env node
/**
 * expected_output内の \\n を \n に修正するスクリプト
 * correctCodeやholeyCode内の正当な \\n には影響しない
 */

const fs = require('fs');
const path = require('path');

const lessonsDir = path.join(__dirname, '../data/lessons');
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts'));

let totalFixed = 0;
let filesFixed = 0;

files.forEach(file => {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let fileFixCount = 0;

  // "expected_output": "..." の値だけを対象に \\n を \n に変換
  // パターン: "expected_output": "任意の文字列" (エスケープされた引用符\"も含む)
  const newContent = content.replace(
    /("expected_output"\s*:\s*")((?:[^"\\]|\\.)*)(")/g,
    (match, prefix, value, suffix) => {
      // value内の \\n (リテラル2文字) を \n (改行1文字) に変換
      // ただし、JSONエスケープの\"は保持する
      if (value.includes('\\n')) {
        const newValue = value.replace(/\\n/g, '\n');
        fileFixCount++;
        return prefix + newValue + suffix;
      }
      return match;
    }
  );

  if (fileFixCount > 0) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`${file}: ${fileFixCount}箇所修正`);
    totalFixed += fileFixCount;
    filesFixed++;
  }
});

console.log(`\n合計: ${filesFixed}ファイル, ${totalFixed}箇所修正`);

#!/usr/bin/env node
// 正規表現パターンの過剰エスケープをチェックするスクリプト
// ファイル内で4つのバックスラッシュ（\\\\）を検出する（2つが正しい）
//
// エスケープレベルの理解:
// - ファイル内: \\ (2バックスラッシュ) → 画面表示: \ (1バックスラッシュ) ✅正しい
// - ファイル内: \\\\ (4バックスラッシュ) → 画面表示: \\ (2バックスラッシュ) ❌過剰

import fs from 'fs';
import path from 'path';

const lessonsDir = 'data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts'));

let totalProblems = 0;

// 検出対象: 4つのバックスラッシュ + 正規表現メタ文字
// ファイル内の文字列として "\\\\\\\\w" は 4つのバックスラッシュ + w
// これを検出するにはJSリテラルで8つのバックスラッシュが必要
const fourBackslashes = String.fromCharCode(92, 92, 92, 92); // \\\\
const metaChars = ['w', 'd', 's', 'n', 'W', 'D', 'S', 'N'];

files.forEach(file => {
  const content = fs.readFileSync(path.join(lessonsDir, file), 'utf8');
  const lines = content.split('\n');
  const problems = [];

  lines.forEach((line, i) => {
    for (const meta of metaChars) {
      const pattern = fourBackslashes + meta;
      if (line.includes(pattern)) {
        problems.push({ line: i + 1, content: line.substring(0, 120) });
        break;
      }
    }
  });

  if (problems.length > 0) {
    console.log(`${file}: ${problems.length}件の過剰エスケープを検出`);
    problems.forEach(p => {
      console.log(`  行${p.line}: ${p.content}...`);
    });
    totalProblems += problems.length;
  }
});

console.log(`\n合計: ${totalProblems}件`);
if (totalProblems === 0) {
  console.log('✅ 過剰エスケープなし');
}
process.exit(totalProblems > 0 ? 1 : 0);

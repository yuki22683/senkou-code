#!/usr/bin/env node
/**
 * correctLinesの修正が必要な箇所を特定し、正しい値を出力する
 */

import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const backslashN = String.fromCharCode(92, 110);

const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

const fixes = [];

for (const file of files) {
  try {
    const mod = await import(`../data/lessons/${file}`);
    const dataKey = Object.keys(mod)[0];
    const data = mod[dataKey];

    if (!data.exercises) continue;

    for (const ex of data.exercises) {
      if (!ex.correctCode || !ex.correctLines) continue;

      const correctCodeJoined = ex.correctCode;
      const correctLinesJoined = ex.correctLines.join(backslashN);

      if (correctCodeJoined !== correctLinesJoined) {
        const expectedLines = ex.correctCode.split(backslashN);

        fixes.push({
          file,
          title: ex.title,
          currentLines: ex.correctLines,
          expectedLines: expectedLines,
          diff: {
            current: ex.correctLines.length,
            expected: expectedLines.length
          }
        });
      }
    }
  } catch (e) {
    console.error(`Error in ${file}:`, e.message);
  }
}

console.log(`\n=== ${fixes.length} 件の修正が必要 ===\n`);

for (const fix of fixes) {
  console.log(`\n【${fix.file}】${fix.title}`);
  console.log(`現在: ${fix.diff.current}行 → 期待: ${fix.diff.expected}行`);

  // 差分を表示
  const maxLen = Math.max(fix.currentLines.length, fix.expectedLines.length);
  for (let i = 0; i < maxLen; i++) {
    const curr = fix.currentLines[i] || '(なし)';
    const exp = fix.expectedLines[i] || '(なし)';
    if (curr !== exp) {
      console.log(`  行${i+1}:`);
      console.log(`    現在: ${curr.substring(0, 60)}`);
      console.log(`    期待: ${exp.substring(0, 60)}`);
    }
  }
}

// JSON形式でも出力（スクリプトで使用可能）
fs.writeFileSync('./scripts/correctlines-fixes.json', JSON.stringify(fixes, null, 2));
console.log('\n\n詳細は scripts/correctlines-fixes.json に保存しました');

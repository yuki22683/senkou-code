#!/usr/bin/env node
/**
 * tutorialSlides内の出力表示形式を統一する（v4）
 * コードブロック途中の `# => value\\n\\n# コメント` パターンを
 * コードブロックを分割して処理
 */

import fs from 'fs';
import path from 'path';

const lessonsDir = 'data/lessons';
let totalFixed = 0;

function fixOutputFormat(content) {
  let fixed = 0;

  // パターン: # => value\\n\\n# コメント を
  // ```\\n\\n=> value\\n\\n```言語\\n# コメント に変換
  // ただし、言語を特定するのが難しいので、言語なしでコードブロックを再開

  let result = content;

  // まず、コードブロック内で # => の後に空行と # コメントが続くパターン
  result = result.replace(
    /# => ([^\\]+?)\\\\n\\\\n(# [^\\]+?)\\\\n/g,
    (match, output, comment) => {
      fixed++;
      return '```\\\\n\\\\n=> ' + output + '\\\\n\\\\n```\\\\n' + comment + '\\\\n';
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

  const { content: newContent, fixed } = fixOutputFormat(content);

  if (fixed > 0) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`${file}: ${fixed}件修正`);
    totalFixed += fixed;
  }
}

console.log(`\n合計: ${totalFixed}件修正`);

#!/usr/bin/env node
/**
 * tutorialSlides内の出力表示形式を統一する（v3）
 * コードブロック内の出力コメント行 `# => value` をコードブロック外に移動
 */

import fs from 'fs';
import path from 'path';

const lessonsDir = 'data/lessons';
let totalFixed = 0;

function fixOutputFormat(content) {
  let fixed = 0;

  // パターン: コードブロック末尾の # => 行を処理
  // コード\\n# => value\\n``` を コード\\n```\\n\\n=> value に変換
  // また、# => が連続する場合も処理

  // まず、コードブロック末尾の連続した # => 行を処理
  let result = content;

  // パターン: \\n# => value が連続し、その後に \\n``` が続く場合
  // これらを全てコードブロック外に移動
  let prevResult = '';
  while (prevResult !== result) {
    prevResult = result;
    result = result.replace(
      /(\\\\n# => [^\\\\]+)(\\\\n```)/g,
      (match, output, ending) => {
        fixed++;
        const value = output.replace('\\\\n# => ', '');
        return ending + '\\\\n\\\\n=> ' + value;
      }
    );
  }

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

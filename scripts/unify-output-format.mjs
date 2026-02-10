#!/usr/bin/env node
/**
 * tutorialSlides内の出力表示形式を統一する
 * コードブロック内の `# => value` を コードブロック外の `=> value` に変換
 */

import fs from 'fs';
import path from 'path';

const lessonsDir = 'data/lessons';
let totalFixed = 0;

function fixOutputFormat(content) {
  let fixed = 0;

  // パターン1: コードブロック末尾の # => value
  // コード  # => 出力\\n``` を コード\\n```\\n\\n=> 出力 に変換
  let result = content.replace(
    /(\S+)\s{1,3}(#|\/\/) => ([^\\]+?)(\\\\n```)/g,
    (match, code, commentChar, output, ending) => {
      fixed++;
      return `${code}${ending}\\\\n\\\\n=> ${output}`;
    }
  );

  // パターン2: コードブロック途中の # => value (次に別のコード行が続く)
  // コード  # => 出力\\nコード2 を コード\\n```\\n\\n=> 出力\\n\\n```言語\\nコード2 に変換
  // これは複雑すぎるので、代わりに単純に # => を削除して次行の後に出力を追加

  // より単純なアプローチ: コードブロック内の # => value\\n を探し、
  // value を抽出してコメントを削除
  result = result.replace(
    /(\S+)\s{1,3}(#|\/\/) => ([^\\]+?)(\\\\n)(?!```)/g,
    (match, code, commentChar, output, newline) => {
      fixed++;
      // コメントを削除して、次行の前に出力注釈を追加
      // ただし、コードブロック内なのでこのアプローチは難しい...
      // 単純にコメント形式のままにする
      return match; // 変更しない
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

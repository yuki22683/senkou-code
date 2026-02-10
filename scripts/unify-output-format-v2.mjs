#!/usr/bin/env node
/**
 * tutorialSlides内の出力表示形式を統一する（v2）
 * コードブロック内の `# => value` を全てコードブロック外の `=> value` に変換
 * 複数行のコードブロックも処理
 */

import fs from 'fs';
import path from 'path';

const lessonsDir = 'data/lessons';
let totalFixed = 0;

function fixOutputFormat(content) {
  let fixed = 0;

  // コードブロック全体を処理
  const result = content.replace(
    /```(\w*)(\\\\n[\s\S]*?)```/g,
    (match, lang, codeBlock) => {
      // コードブロック内の # => または // => パターンを検出
      const lines = codeBlock.split('\\\\n');
      const newLines = [];
      const outputs = [];

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        // # => または // => パターンを検出
        const outputMatch = line.match(/^(.+?)\s{1,3}(?:#|\/\/) => (.+)$/);
        if (outputMatch) {
          newLines.push(outputMatch[1]); // コメント部分を除去したコード
          outputs.push(outputMatch[2]);  // 出力値（説明文も含む）
          fixed++;
        } else {
          newLines.push(line);
        }
      }

      if (outputs.length > 0) {
        // コードブロック + 出力を生成
        let result = '```' + lang + newLines.join('\\\\n') + '```';
        for (const output of outputs) {
          result += '\\\\n\\\\n=> ' + output;
        }
        return result;
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

  const { content: newContent, fixed } = fixOutputFormat(content);

  if (fixed > 0) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`${file}: ${fixed}件修正`);
    totalFixed += fixed;
  }
}

console.log(`\n合計: ${totalFixed}件修正`);

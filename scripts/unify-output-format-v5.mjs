#!/usr/bin/env node
/**
 * tutorialSlides内の出力表示形式を統一する（v5）
 * コードブロック途中の `# => value\\n\\nコード行` パターンを処理
 */

import fs from 'fs';
import path from 'path';

const lessonsDir = 'data/lessons';
let totalFixed = 0;

function fixOutputFormat(content) {
  let fixed = 0;

  // パターン: \\n# => (...出力...)\\n\\nコード行 を
  // \\n```\\n\\n=> (...)\\n\\n```\\nコード行 に変換

  let result = content.replace(
    /\\\\n# => (\([^)]+\))\\\\n\\\\n(my |let |const |var |def |if |for |while |@|[a-zA-Z_\[])/g,
    (match, output, codeStart) => {
      fixed++;
      return '\\\\n```\\\\n\\\\n=> ' + output + '\\\\n\\\\n```\\\\n' + codeStart;
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

// correctCodeからcorrectLinesを再構築するスクリプト
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

function escapeForJson(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');
}

const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let fileChanged = false;

  // 各exerciseブロックを処理
  // correctCodeとcorrectLinesを持つexerciseを探す
  const exercisePattern = /"correctCode":\s*"((?:[^"\\]|\\.)*)"[\s\S]*?"correctLines":\s*\[([\s\S]*?)\]/g;

  let match;
  const replacements = [];

  while ((match = exercisePattern.exec(content)) !== null) {
    const correctCodeEncoded = match[1];
    const correctLinesOld = match[2];

    const correctCode = correctCodeEncoded
      .replace(/\\\\/g, '\\')
      .replace(/\\n/g, '\n')
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'");

    const correctCodeLines = correctCode.split('\n');

    // 新しいcorrectLinesを構築（各行を引用符で囲む）
    const newCorrectLinesArray = correctCodeLines.map(line => `"${escapeForJson(line)}"`);
    const newCorrectLinesStr = newCorrectLinesArray.join(',\n    ');

    // 現在のcorrectLinesと異なる場合のみ置換
    const oldLinesNormalized = correctLinesOld.replace(/\s+/g, ' ').trim();
    const newLinesNormalized = newCorrectLinesStr.replace(/\s+/g, ' ').trim();

    if (oldLinesNormalized !== newLinesNormalized) {
      replacements.push({
        old: `"correctLines": [${correctLinesOld}]`,
        new: `"correctLines": [\n    ${newCorrectLinesStr}\n  ]`
      });
    }
  }

  for (const replacement of replacements) {
    if (content.includes(replacement.old)) {
      content = content.replace(replacement.old, replacement.new);
      fileChanged = true;
    }
  }

  if (fileChanged) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Rebuilt correctLines: ${file}`);
    totalFixed++;
  }
}

console.log(`\n合計 ${totalFixed} ファイルのcorrectLinesを再構築しました。`);

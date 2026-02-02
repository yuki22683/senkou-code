// correctCodeからcorrectLinesを完全に再構築するスクリプト
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

  // ファイルをexerciseごとに分割して処理
  // "correctCode": "..." と "correctLines": [...] のパターンを見つける
  const pattern = /"correctCode":\s*"((?:[^"\\]|\\.)*)",\s*\n\s*"holeyCode":\s*"(?:[^"\\]|\\.)*",\s*\n\s*"correctLines":\s*\[([\s\S]*?)\]/g;

  let match;
  const replacements = [];

  while ((match = pattern.exec(content)) !== null) {
    const fullMatch = match[0];
    const correctCodeEncoded = match[1];
    const oldCorrectLines = match[2];

    // correctCodeをデコード
    const correctCode = correctCodeEncoded
      .replace(/\\\\/g, '\\')
      .replace(/\\n/g, '\n')
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'");

    // correctCodeを行に分割
    const correctCodeLines = correctCode.split('\n');

    // 新しいcorrectLinesを構築
    const newCorrectLinesArray = correctCodeLines.map(line => `"${escapeForJson(line)}"`);
    const newCorrectLinesStr = newCorrectLinesArray.join(',\n          ');

    // 元のcorrectLinesと比較
    // oldCorrectLinesから行を抽出
    const oldLinePattern = /"((?:[^"\\]|\\.)*)"/g;
    let oldLineMatch;
    const oldLinesDecoded = [];
    while ((oldLineMatch = oldLinePattern.exec(oldCorrectLines)) !== null) {
      oldLinesDecoded.push(oldLineMatch[1]
        .replace(/\\\\/g, '\\')
        .replace(/\\n/g, '\n')
        .replace(/\\"/g, '"')
        .replace(/\\'/g, "'"));
    }

    // 違いがあれば置換
    let isDifferent = oldLinesDecoded.length !== correctCodeLines.length;
    if (!isDifferent) {
      for (let i = 0; i < correctCodeLines.length; i++) {
        if (correctCodeLines[i] !== oldLinesDecoded[i]) {
          isDifferent = true;
          break;
        }
      }
    }

    if (isDifferent) {
      // 新しいcorrectLinesブロックを構築
      const newBlock = fullMatch.replace(
        /"correctLines":\s*\[[\s\S]*?\]/,
        `"correctLines": [\n          ${newCorrectLinesStr}\n        ]`
      );
      replacements.push({ old: fullMatch, new: newBlock });
    }
  }

  // 置換を実行
  for (const replacement of replacements) {
    content = content.replace(replacement.old, replacement.new);
    fileChanged = true;
  }

  if (fileChanged) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Rebuilt: ${file} (${replacements.length} exercises)`);
    totalFixed += replacements.length;
  }
}

console.log(`\n合計 ${totalFixed} 件のexerciseを修正しました。`);

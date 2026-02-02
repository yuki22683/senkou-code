// correctCodeのコメントをholeyCodeに同期するスクリプト
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

function isCommentLine(line) {
  const trimmed = line.trim();
  return (
    trimmed.startsWith('//') ||
    trimmed.startsWith('#') ||
    trimmed.startsWith('--') ||
    trimmed.startsWith(';') ||
    trimmed.startsWith('/*') ||
    trimmed.startsWith('*') ||
    trimmed.startsWith('{-')
  );
}

function syncCommentsFromCorrectToHoley(correctCode, holeyCode) {
  const correctLines = correctCode.split('\n');
  const holeyLines = holeyCode.split('\n');

  if (correctLines.length !== holeyLines.length) {
    return { code: holeyCode, changed: false };
  }

  const fixedLines = [];
  let changed = false;

  for (let i = 0; i < holeyLines.length; i++) {
    const holeyLine = holeyLines[i];
    const correctLine = correctLines[i];

    const isHoleyComment = isCommentLine(holeyLine);
    const isCorrectComment = isCommentLine(correctLine);

    if (isHoleyComment && isCorrectComment) {
      const holeyTrimmed = holeyLine.trim();
      const correctTrimmed = correctLine.trim();

      if (holeyTrimmed !== correctTrimmed) {
        const indent = holeyLine.match(/^(\s*)/)[1];
        fixedLines.push(indent + correctTrimmed);
        changed = true;
      } else {
        fixedLines.push(holeyLine);
      }
    } else {
      fixedLines.push(holeyLine);
    }
  }

  return { code: fixedLines.join('\n'), changed };
}

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

  // 各exerciseオブジェクトからcorrectCodeとholeyCodeを抽出し、コメントを同期
  // exerciseの境界を特定するために、各exerciseオブジェクトのパターンをマッチ
  const exercisePattern = /\{\s*"id":\s*"[^"]+",\s*"title":[^]*?"correctCode":\s*"((?:[^"\\]|\\.)*)"/g;

  // 別のアプローチ: correctCodeとholeyCodeをペアで処理
  // 各exerciseはcorrectCodeとholeyCodeを持つ
  // 隣接するcorrectCodeとholeyCodeのペアを探す

  const correctCodePattern = /"correctCode":\s*"((?:[^"\\]|\\.)*)"/g;
  const holeyCodePattern = /"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;

  // 全てのcorrectCodeとholeyCodeを抽出
  const correctMatches = [...content.matchAll(correctCodePattern)];
  const holeyMatches = [...content.matchAll(holeyCodePattern)];

  // マッチ数が同じでないとペアリングできない
  if (correctMatches.length !== holeyMatches.length) {
    console.log(`Warning: ${file} has ${correctMatches.length} correctCode and ${holeyMatches.length} holeyCode (mismatch)`);
    continue;
  }

  // 各ペアを処理
  for (let i = 0; i < correctMatches.length; i++) {
    const correctMatch = correctMatches[i];
    const holeyMatch = holeyMatches[i];

    const correctCode = correctMatch[1]
      .replace(/\\\\/g, '\\')
      .replace(/\\n/g, '\n')
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'");

    const holeyCode = holeyMatch[1]
      .replace(/\\\\/g, '\\')
      .replace(/\\n/g, '\n')
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'");

    const { code: syncedHoley, changed } = syncCommentsFromCorrectToHoley(correctCode, holeyCode);

    if (changed) {
      const escapedHoley = escapeForJson(syncedHoley);
      content = content.replace(holeyMatch[0], `"holeyCode": "${escapedHoley}"`);
      fileChanged = true;
    }
  }

  if (fileChanged) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Synced: ${file}`);
    totalFixed++;
  }
}

console.log(`\n合計 ${totalFixed} ファイルを同期しました。`);

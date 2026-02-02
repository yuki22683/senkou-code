// correctLines内の曖昧なコメントを具体的なものに置換するスクリプト
// correctCodeから対応するコメントを探して置換する
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

const vaguePatterns = [
  '# 結果を表示',
  '// 結果を表示',
  '# 関数を定義',
  '// 関数を定義',
  '# クラスを定義',
  '// クラスを定義',
];

function isCommentLine(line) {
  const trimmed = line.trim();
  return trimmed.startsWith('//') || trimmed.startsWith('#') ||
         trimmed.startsWith('--') || trimmed.startsWith(';');
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

  // 各exerciseを処理
  // correctCodeとcorrectLinesを抽出して、コメントをマッピングする

  // まずcorrectCodeからコメント→次の行のマッピングを作成
  const correctCodePattern = /"correctCode":\s*"((?:[^"\\]|\\.)*)"/g;
  let match;
  const commentMaps = [];

  while ((match = correctCodePattern.exec(content)) !== null) {
    const correctCode = match[1]
      .replace(/\\\\/g, '\\')
      .replace(/\\n/g, '\n')
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'");

    const lines = correctCode.split('\n');
    const commentMap = new Map();

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const nextLine = lines[i + 1] || '';

      if (isCommentLine(line)) {
        const trimmed = line.trim();
        // 曖昧でない具体的なコメントを記録
        // キーは次の行（コード部分）、値は具体的なコメント
        if (!vaguePatterns.includes(trimmed)) {
          // 次のコード行（非コメント）を探す
          let nextCodeIdx = i + 1;
          while (nextCodeIdx < lines.length &&
                 (lines[nextCodeIdx].trim() === '' || isCommentLine(lines[nextCodeIdx]))) {
            nextCodeIdx++;
          }
          if (nextCodeIdx < lines.length) {
            const nextCode = lines[nextCodeIdx].trim();
            commentMap.set(nextCode, trimmed);
          }
        }
      }
    }

    commentMaps.push(commentMap);
  }

  // correctLinesを処理
  const correctLinesPattern = /"correctLines":\s*\[([\s\S]*?)\]/g;
  let clMatch;
  let clIndex = 0;

  while ((clMatch = correctLinesPattern.exec(content)) !== null) {
    const correctLinesContent = clMatch[1];
    const commentMap = commentMaps[clIndex] || new Map();

    // 各行を抽出
    const linePattern = /"((?:[^"\\]|\\.)*)"/g;
    let lineMatch;
    const lines = [];
    const originalLines = [];

    while ((lineMatch = linePattern.exec(correctLinesContent)) !== null) {
      const line = lineMatch[1]
        .replace(/\\\\/g, '\\')
        .replace(/\\n/g, '\n')
        .replace(/\\"/g, '"')
        .replace(/\\'/g, "'");
      originalLines.push(lineMatch[1]);
      lines.push(line);
    }

    // 曖昧なコメントを置換
    let changed = false;
    const fixedOriginalLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      if (vaguePatterns.includes(trimmed)) {
        // 次のコード行を探す
        let nextCodeIdx = i + 1;
        while (nextCodeIdx < lines.length &&
               (lines[nextCodeIdx].trim() === '' || isCommentLine(lines[nextCodeIdx]))) {
          nextCodeIdx++;
        }

        if (nextCodeIdx < lines.length) {
          const nextCode = lines[nextCodeIdx].trim();
          // commentMapから具体的なコメントを取得
          const specificComment = commentMap.get(nextCode);

          if (specificComment) {
            // インデントを維持
            const indent = line.match(/^(\s*)/)[0];
            const fixedLine = indent + specificComment;
            fixedOriginalLines.push(escapeForJson(fixedLine));
            changed = true;
            continue;
          }
        }
      }

      fixedOriginalLines.push(originalLines[i]);
    }

    if (changed) {
      // 新しいcorrectLinesを構築
      const newContent = fixedOriginalLines.map(l => `"${l}"`).join(',\n          ');
      const oldBlock = clMatch[0];
      const newBlock = `"correctLines": [\n          ${newContent}\n        ]`;

      content = content.replace(oldBlock, newBlock);
      fileChanged = true;
    }

    clIndex++;
  }

  if (fileChanged) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed correctLines: ${file}`);
    totalFixed++;
  }
}

console.log(`\n合計 ${totalFixed} ファイルを修正しました。`);

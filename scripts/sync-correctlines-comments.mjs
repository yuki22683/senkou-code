// correctCodeのコメントをcorrectLinesにも同期するスクリプト
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

  // correctCodeを取得
  const correctCodePattern = /"correctCode":\s*"((?:[^"\\]|\\.)*)"/g;
  const correctLinesPattern = /"correctLines":\s*\[([\s\S]*?)\]/g;

  const correctCodeMatches = [...content.matchAll(correctCodePattern)];
  const correctLinesMatches = [...content.matchAll(correctLinesPattern)];

  if (correctCodeMatches.length !== correctLinesMatches.length) {
    console.log(`Warning: ${file} has mismatch between correctCode and correctLines count`);
    continue;
  }

  for (let i = 0; i < correctCodeMatches.length; i++) {
    const correctCodeEncoded = correctCodeMatches[i][1];
    const correctLinesContent = correctLinesMatches[i][1];

    const correctCode = correctCodeEncoded
      .replace(/\\\\/g, '\\')
      .replace(/\\n/g, '\n')
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'");

    const correctCodeLines = correctCode.split('\n');

    // correctLinesから各行を抽出
    const linePattern = /"((?:[^"\\]|\\.)*)"/g;
    let correctLinesArray = [];
    let lineMatch;
    while ((lineMatch = linePattern.exec(correctLinesContent)) !== null) {
      correctLinesArray.push(lineMatch[1]
        .replace(/\\\\/g, '\\')
        .replace(/\\n/g, '\n')
        .replace(/\\"/g, '"')
        .replace(/\\'/g, "'"));
    }

    // correctLinesの各行をcorrectCodeの対応する行で置換
    let newCorrectLines = [];
    let changed = false;

    for (const correctLineRaw of correctLinesArray) {
      const correctLineTrimmed = correctLineRaw.trim();

      // この行がコメント行かどうか
      if (isCommentLine(correctLineRaw)) {
        // correctCodeから対応するコメント行を探す
        // correctLinesの行順序はcorrectCodeの行順序と同じはずなので、
        // 同じ行番号のコメントを探す
        const idx = correctLinesArray.indexOf(correctLineRaw);

        // correctCodeで同様のコメントパターンを探す
        let found = false;
        for (const codeLine of correctCodeLines) {
          const codeLineTrimmed = codeLine.trim();

          // 曖昧なコメントパターン
          if (correctLineTrimmed === '# 結果を表示' ||
              correctLineTrimmed === '// 結果を表示' ||
              correctLineTrimmed === '# 関数を定義' ||
              correctLineTrimmed === '// 関数を定義' ||
              correctLineTrimmed === '# クラスを定義' ||
              correctLineTrimmed === '// クラスを定義') {

            // correctCodeで具体的なコメントを探す
            if (isCommentLine(codeLine) && codeLineTrimmed.length > correctLineTrimmed.length) {
              // より具体的なコメントがある場合は置換
              // 同じプレフィックス（# または //）であることを確認
              const prefix = correctLineTrimmed.startsWith('//') ? '//' : '#';
              if (codeLineTrimmed.startsWith(prefix)) {
                const indent = correctLineRaw.match(/^(\s*)/)[0];
                newCorrectLines.push(indent + codeLineTrimmed);
                changed = true;
                found = true;
                break;
              }
            }
          }
        }

        if (!found) {
          newCorrectLines.push(correctLineRaw);
        }
      } else {
        newCorrectLines.push(correctLineRaw);
      }
    }

    if (changed) {
      // 新しいcorrectLinesを構築
      const newCorrectLinesStr = newCorrectLines.map(line => `"${escapeForJson(line)}"`).join(',\n    ');
      const newCorrectLinesBlock = `"correctLines": [\n    ${newCorrectLinesStr}\n  ]`;

      content = content.replace(correctLinesMatches[i][0], newCorrectLinesBlock);
      fileChanged = true;
    }
  }

  if (fileChanged) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed correctLines: ${file}`);
    totalFixed++;
  }
}

console.log(`\n合計 ${totalFixed} ファイルのcorrectLinesを修正しました。`);

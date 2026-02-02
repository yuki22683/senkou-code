// correctCodeからcorrectLinesのコメントを同期するスクリプト
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
  '# メッセージを表示',
  '// メッセージを表示',
];

function isCommentLine(line) {
  const trimmed = line.trim();
  return (
    trimmed.startsWith('//') ||
    trimmed.startsWith('#') ||
    trimmed.startsWith('--') ||
    trimmed.startsWith(';')
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

  // 各exerciseをIDで分割して処理
  // exerciseオブジェクトからcorrectCodeとcorrectLinesを抽出
  const exercisePattern = /\{\s*"id":\s*"([^"]+)"[\s\S]*?"correctCode":\s*"((?:[^"\\]|\\.)*)"[\s\S]*?"correctLines":\s*\[([\s\S]*?)\]/g;

  let match;
  while ((match = exercisePattern.exec(content)) !== null) {
    const exerciseId = match[1];
    const correctCodeEncoded = match[2];
    const correctLinesRaw = match[3];

    // correctCodeをデコード
    const correctCode = correctCodeEncoded
      .replace(/\\\\/g, '\\')
      .replace(/\\n/g, '\n')
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'");

    const correctCodeLines = correctCode.split('\n');

    // correctCodeからコメント行のマップを作成
    // キー: 曖昧なコメントパターン、値: 具体的なコメント
    const commentMap = new Map();

    for (let i = 0; i < correctCodeLines.length; i++) {
      const line = correctCodeLines[i].trim();
      if (isCommentLine(correctCodeLines[i])) {
        // 次の行のパターンを取得（コメントを特定するため）
        const nextLine = correctCodeLines[i + 1]?.trim() || '';

        // このコメントが具体的（結果を表示で終わらない）なら記録
        for (const vaguePattern of vaguePatterns) {
          const prefix = vaguePattern.startsWith('//') ? '//' : '#';

          // 同じプレフィックスで、曖昧でない具体的なコメント
          if (line.startsWith(prefix) && !vaguePatterns.includes(line)) {
            // このコメントは次の行のコードに対応
            // 曖昧パターンに対するマッピングを保存
            commentMap.set(`${vaguePattern}:${nextLine}`, line);
          }
        }
      }
    }

    // correctLinesの各行を処理
    const linePattern = /"((?:[^"\\]|\\.)*)"/g;
    let lineMatch;
    let correctLinesArray = [];
    let positions = [];

    while ((lineMatch = linePattern.exec(correctLinesRaw)) !== null) {
      const line = lineMatch[1]
        .replace(/\\\\/g, '\\')
        .replace(/\\n/g, '\n')
        .replace(/\\"/g, '"')
        .replace(/\\'/g, "'");
      correctLinesArray.push(line);
      positions.push({ start: lineMatch.index, end: lineMatch.index + lineMatch[0].length });
    }

    // 曖昧なコメントを具体的なコメントに置換
    let changed = false;
    const newCorrectLinesArray = correctLinesArray.map((line, idx) => {
      const trimmed = line.trim();

      if (vaguePatterns.includes(trimmed)) {
        // correctCodeから対応する具体的なコメントを探す
        // correctLinesの次の行（同じ配列内）を見る
        const nextLine = correctLinesArray[idx + 1]?.trim().replace(/___/g, '') || '';

        // correctCodeで同じパターン（コメント→コード行）を探す
        for (let i = 0; i < correctCodeLines.length - 1; i++) {
          const codeLine = correctCodeLines[i].trim();
          const nextCodeLine = correctCodeLines[i + 1]?.trim() || '';

          // correctCodeの行がcorrectLinesの次の行と類似している場合
          // （___を除いて比較）
          const nextLineNormalized = nextLine.replace(/\s+/g, '');
          const nextCodeLineNormalized = nextCodeLine.replace(/\s+/g, '');

          // 類似性チェック（単純な部分文字列マッチ）
          if (isCommentLine(correctCodeLines[i]) &&
              !vaguePatterns.includes(codeLine) &&
              codeLine.startsWith(trimmed.startsWith('//') ? '//' : '#')) {

            // 次の行が類似している場合、このコメントを使う
            if (nextCodeLineNormalized.includes(nextLineNormalized.substring(0, 10)) ||
                nextLineNormalized.includes(nextCodeLineNormalized.substring(0, 10)) ||
                nextCodeLineNormalized === nextLineNormalized) {

              // 元のインデントを維持
              const indent = line.match(/^(\s*)/)[0];
              changed = true;
              return indent + codeLine;
            }
          }
        }
      }

      return line;
    });

    if (changed) {
      // 新しいcorrectLinesを構築
      const newCorrectLinesStr = newCorrectLinesArray.map(l => `"${escapeForJson(l)}"`).join(',\n    ');

      const oldMatch = `"correctLines": [${correctLinesRaw}]`;
      const newMatch = `"correctLines": [\n    ${newCorrectLinesStr}\n  ]`;

      content = content.replace(oldMatch, newMatch);
      fileChanged = true;
    }
  }

  if (fileChanged) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Synced correctLines: ${file}`);
    totalFixed++;
  }
}

console.log(`\n合計 ${totalFixed} ファイルを修正しました。`);

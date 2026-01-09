// 虫食い行の上にコメントがない場合、正解からヒントコメントを生成して追加するスクリプト
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const lessonsDir = path.join(__dirname, '..', 'data', 'lessons');

// 言語ごとのコメントプレフィックス
const COMMENT_PREFIX = {
  python: '#',
  javascript: '//',
  typescript: '//',
  java: '//',
  c: '//',
  cpp: '//',
  csharp: '//',
  go: '//',
  rust: '//',
  ruby: '#',
  php: '//',
  bash: '#',
  haskell: '--',
  elixir: '#',
  lua: '--',
  assembly: ';',
  sql: '--',
  kotlin: '//',
  swift: '//',
  perl: '#',
};

// 正解コードからヒントを生成
function generateHint(correctLine, commentPrefix) {
  const trimmed = correctLine.trim();

  // 既にコメント行の場合はスキップ
  if (!trimmed || trimmed.startsWith(commentPrefix) || trimmed.startsWith('#') ||
      trimmed.startsWith('//') || trimmed.startsWith('--') || trimmed.startsWith(';') ||
      trimmed.startsWith('/*') || trimmed.startsWith('*')) {
    return null;
  }

  // 閉じ括弧のみ
  if (/^[}\])]$/.test(trimmed)) {
    return null;
  }
  // 開き括弧のみ
  if (/^[{\[(]$/.test(trimmed)) {
    return null;
  }

  let hint = '';

  // print系
  if (/print|puts|echo|console\.log|println|printf|fmt\.Print|IO\.puts|putStrLn|cout|System\.out/.test(trimmed)) {
    const match = trimmed.match(/['"`]([^'"`]+)['"`]/);
    if (match) {
      hint = `'${match[1]}' と出力しましょう`;
    } else {
      hint = `出力しましょう`;
    }
  }
  // 変数代入 (= but not == or ===)
  else if (/^[a-zA-Z_]\w*\s*=(?!=)/.test(trimmed)) {
    const varName = trimmed.match(/^([a-zA-Z_]\w*)/)?.[1];
    hint = `変数 ${varName} に値を代入しましょう`;
  }
  // const/let/var宣言
  else if (/^(const|let|var|val|mut)\s/.test(trimmed)) {
    const varName = trimmed.match(/(?:const|let|var|val|mut)\s+([a-zA-Z_]\w*)/)?.[1];
    hint = varName ? `${varName} を宣言しましょう` : `変数を宣言しましょう`;
  }
  // 関数定義
  else if (/^(def|function|func|fn|fun|sub)\s/.test(trimmed)) {
    const funcMatch = trimmed.match(/(?:def|function|func|fn|fun|sub)\s+([a-zA-Z_]\w*)/);
    if (funcMatch) {
      hint = `関数 ${funcMatch[1]} を定義しましょう`;
    } else {
      hint = `関数を定義しましょう`;
    }
  }
  // if文
  else if (/^if[\s(]/.test(trimmed)) {
    hint = `条件分岐を書きましょう`;
  }
  // else
  else if (/^else[\s{:]/.test(trimmed) || trimmed === 'else' || trimmed === 'else:') {
    hint = `elseを書きましょう`;
  }
  // for/whileループ
  else if (/^(for|while)[\s(]/.test(trimmed)) {
    hint = `ループを書きましょう`;
  }
  // return
  else if (/^return[\s;]/.test(trimmed) || trimmed === 'return') {
    hint = `値を返しましょう`;
  }
  // class
  else if (/^class\s/.test(trimmed)) {
    const className = trimmed.match(/class\s+([a-zA-Z_]\w*)/)?.[1];
    hint = className ? `クラス ${className} を定義しましょう` : `クラスを定義しましょう`;
  }
  // import/include/use/require
  else if (/^(import|from|#include|use|require|using)\s/.test(trimmed)) {
    hint = `必要なものを読み込みましょう`;
  }
  // その他: 最初のキーワードをヒントに
  else {
    const firstWord = trimmed.match(/^([a-zA-Z_]\w*)/)?.[1];
    if (firstWord && firstWord.length > 1) {
      hint = `${firstWord} を入力しましょう`;
    } else {
      hint = `コードを入力しましょう`;
    }
  }

  return `${commentPrefix} ${hint}`;
}

// 演習を修正
function fixExercise(exercise, commentPrefix) {
  const holeyCode = exercise.holeyCode;
  const correctLines = exercise.correctLines;

  if (!holeyCode || !correctLines || !Array.isArray(correctLines)) {
    return { changed: false };
  }

  const holeyLines = holeyCode.split('\n');
  const newHoleyLines = [];
  const newCorrectLines = [];
  let changeCount = 0;
  let correctIdx = 0;

  for (let i = 0; i < holeyLines.length; i++) {
    const line = holeyLines[i];

    // 虫食い行かチェック
    if (line.includes('___')) {
      // 上の行がコメントかチェック
      const prevLine = newHoleyLines.length > 0 ? newHoleyLines[newHoleyLines.length - 1] : '';
      const trimmedPrev = prevLine.trim();
      const isComment = trimmedPrev.startsWith('#') || trimmedPrev.startsWith('//') ||
                        trimmedPrev.startsWith('--') || trimmedPrev.startsWith(';') ||
                        trimmedPrev.startsWith('/*');

      if (!isComment && correctIdx < correctLines.length) {
        // 正解行からヒントを生成
        const correctLine = correctLines[correctIdx];
        const hint = generateHint(correctLine, commentPrefix);
        if (hint) {
          // インデントを保持
          const indent = line.match(/^(\s*)/)?.[1] || '';
          const hintLine = indent + hint.trim();
          newHoleyLines.push(hintLine);
          newCorrectLines.push(hintLine);
          changeCount++;
        }
      }
    }

    newHoleyLines.push(line);
    if (correctIdx < correctLines.length) {
      newCorrectLines.push(correctLines[correctIdx]);
      correctIdx++;
    }
  }

  // 残りのcorrectLinesを追加
  while (correctIdx < correctLines.length) {
    newCorrectLines.push(correctLines[correctIdx]);
    correctIdx++;
  }

  if (changeCount > 0) {
    return {
      changed: true,
      holeyCode: newHoleyLines.join('\n'),
      correctLines: newCorrectLines,
      changeCount
    };
  }

  return { changed: false };
}

// TypeScriptファイルからデータを抽出
function extractData(content, fileName) {
  // export const xxxData = { ... } のパターンを抽出
  const match = content.match(/export\s+const\s+(\w+Data)\s*=\s*(\{[\s\S]*\});?\s*$/);
  if (!match) {
    return null;
  }

  const exportName = match[1];
  const jsonLike = match[2];

  try {
    // JavaScriptとして評価
    const data = eval(`(${jsonLike})`);
    return { exportName, data };
  } catch (e) {
    console.error(`Failed to parse ${fileName}:`, e.message);
    return null;
  }
}

// メイン処理
function main() {
  const files = fs.readdirSync(lessonsDir)
    .filter(f => f.endsWith('.ts') && f !== 'index.ts');

  let totalChanges = 0;

  for (const fileName of files) {
    try {
      const filePath = path.join(lessonsDir, fileName);
      const content = fs.readFileSync(filePath, 'utf-8');

      const extracted = extractData(content, fileName);
      if (!extracted) {
        console.warn(`${fileName}: Failed to extract data`);
        continue;
      }

      const { exportName, data } = extracted;
      const language = data.language;
      const commentPrefix = COMMENT_PREFIX[language] || '#';

      let fileChanges = 0;
      const newExercises = [];

      for (const exercise of data.exercises) {
        const result = fixExercise(exercise, commentPrefix);
        if (result.changed) {
          newExercises.push({
            ...exercise,
            holeyCode: result.holeyCode,
            correctLines: result.correctLines
          });
          fileChanges += result.changeCount;
        } else {
          newExercises.push(exercise);
        }
      }

      if (fileChanges > 0) {
        // ファイルを更新
        const newData = { ...data, exercises: newExercises };
        const newContent = `export const ${exportName} = ${JSON.stringify(newData, null, 2)};\n`;
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log(`${fileName}: ${fileChanges} comments added`);
        totalChanges += fileChanges;
      }
    } catch (e) {
      console.error(`Error processing ${fileName}:`, e.message);
    }
  }

  console.log(`\nTotal: ${totalChanges} comments added`);
}

main();

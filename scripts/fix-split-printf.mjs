// correctCode/holeyCode/correctLines で printf が分割されている問題を修正
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

function fixExercise(exercise) {
  // correctLinesをチェック
  if (!exercise.correctLines || !Array.isArray(exercise.correctLines)) {
    return false;
  }

  let modified = false;
  const newLines = [];
  const newHints = [];

  for (let i = 0; i < exercise.correctLines.length; i++) {
    const line = exercise.correctLines[i];
    const hint = exercise.lineHints?.[i];

    // printf が開いているが閉じていない行を検出
    if (line.includes('printf(') && !line.includes(');') && !line.includes(')\\n')) {
      // 次の行がコメント、その次が "); のパターン
      if (i + 2 < exercise.correctLines.length) {
        const commentLine = exercise.correctLines[i + 1];
        const closeLine = exercise.correctLines[i + 2];

        if (commentLine.trim().startsWith('//') && (closeLine.includes(');') || closeLine.includes(', '))) {
          // これは分割されたprintf
          // line + closeLine を結合し、\\n を追加
          const formatMatch = line.match(/printf\("([^"]*)$/);
          const argsMatch = closeLine.match(/(.*);$/);

          if (formatMatch && argsMatch) {
            const format = formatMatch[1];
            const args = argsMatch[1].replace(/^"?,?\s*/, '');

            let fixedLine;
            if (args && args.trim()) {
              fixedLine = `    printf("${format}\\n", ${args.trim()});`;
            } else {
              fixedLine = `    printf("${format}\\n");`;
            }

            // コメントを先に追加
            const commentContent = commentLine.trim().replace(/^\/\/\s*/, '');
            newLines.push(`    // ${commentContent}`);
            newHints.push(null);

            newLines.push(fixedLine);
            newHints.push(hint || exercise.lineHints?.[i + 2] || null);

            i += 2; // 3行を1行（+コメント）に
            modified = true;
            continue;
          }
        }
      }
    }

    newLines.push(line);
    newHints.push(hint);
  }

  if (modified) {
    exercise.correctLines = newLines;
    exercise.lineHints = newHints;

    // correctCode と holeyCode も修正が必要
    // これは複雑なので、correctLinesから再構築
    const newCorrectCode = newLines.join('\\n');
    exercise.correctCode = newCorrectCode;

    // holeyCodeは___を適切に配置
    const newHoleyLines = newLines.map(line => {
      if (line.includes('main()')) return line.replace('main', '___');
      if (line.includes('return 0;')) return line.replace('0', '___');
      if (line.match(/int \w+ = \d+;/)) return line.replace(/= \d+/, '= ___');
      if (line.includes('printf(')) return line.replace(/printf\("[^"]*\\n"/, 'printf("___\\n"');
      return line;
    });
    exercise.holeyCode = newHoleyLines.join('\\n');
  }

  return modified;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // JSONとしてパースできるように変換
  // TypeScriptのexport文を除去
  const dataMatch = content.match(/export const \w+Data = (\{[\s\S]*\});?\s*$/);
  if (!dataMatch) {
    console.log('  No data found');
    return false;
  }

  try {
    const data = eval('(' + dataMatch[1] + ')');
    let fileModified = false;

    if (data.exercises) {
      for (const exercise of data.exercises) {
        if (fixExercise(exercise)) {
          console.log('  Fixed:', exercise.title);
          fileModified = true;
        }
      }
    }

    if (fileModified) {
      // 再びファイルに書き出し
      const varName = filePath.match(/(\w+)\.ts$/)?.[1] || 'data';
      const newContent = `export const ${varName}Data = ${JSON.stringify(data, null, 2)};\n`;
      fs.writeFileSync(filePath, newContent, 'utf-8');
      return true;
    }
  } catch (e) {
    console.log('  Parse error:', e.message);
  }

  return false;
}

// 処理対象ファイル
const targetFiles = ['c.ts'];

for (const file of targetFiles) {
  const filePath = path.join(lessonsDir, file);
  console.log('Processing:', file);
  if (fs.existsSync(filePath)) {
    processFile(filePath);
  }
}

console.log('Done');

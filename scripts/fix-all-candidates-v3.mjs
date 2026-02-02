// 全エクササイズのcandidatesを自動修正するスクリプト（v3）
import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;

function decode(s) {
  return s
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\');
}

// holeyLineとcorrectLineから答えを抽出
function extractAnswersFromLine(holeyLine, correctLine) {
  const answers = [];

  // ___の位置を全て取得
  const blankPositions = [];
  let searchIdx = 0;
  while (true) {
    const idx = holeyLine.indexOf('___', searchIdx);
    if (idx === -1) break;
    blankPositions.push(idx);
    searchIdx = idx + 3;
  }

  if (blankPositions.length === 0) return answers;

  // 各___に対応する答えを見つける
  // 方針: holeyLineの固定部分をcorrectLineで探し、その間の文字を答えとする
  let lastEnd = 0;

  for (let i = 0; i < blankPositions.length; i++) {
    const blankStart = blankPositions[i];
    const blankEnd = blankStart + 3;

    // ___の前の固定部分
    const prefix = holeyLine.substring(lastEnd, blankStart);

    // ___の後の固定部分（次の___までまたは行末まで）
    let suffixEnd = (i + 1 < blankPositions.length) ? blankPositions[i + 1] : holeyLine.length;
    const suffix = holeyLine.substring(blankEnd, suffixEnd);

    // correctLineで対応する部分を探す
    let correctStart = lastEnd;

    // prefixをスキップ
    correctStart += prefix.length;

    // suffixの開始位置を探す
    let correctEnd;
    if (suffix.length > 0) {
      const suffixIdx = correctLine.indexOf(suffix, correctStart);
      if (suffixIdx !== -1) {
        correctEnd = suffixIdx;
      } else {
        correctEnd = correctLine.length;
      }
    } else {
      correctEnd = correctLine.length;
    }

    const answer = correctLine.substring(correctStart, correctEnd);
    if (answer && answer.trim()) {
      answers.push(answer.trim());
    }

    lastEnd = blankEnd;
  }

  return answers;
}

function extractAllAnswers(holeyCode, correctCode) {
  const holeyLines = holeyCode.split('\n');
  const correctLines = correctCode.split('\n');
  const allAnswers = new Set();

  for (let i = 0; i < holeyLines.length && i < correctLines.length; i++) {
    const holeyLine = holeyLines[i];
    const correctLine = correctLines[i];

    // コメント行はスキップ
    const trimmed = holeyLine.trim();
    if (trimmed.startsWith('#') || trimmed.startsWith('//') || trimmed.startsWith('--') ||
        trimmed.startsWith('/*') || trimmed.startsWith('*') || trimmed.startsWith(';') ||
        trimmed.startsWith('{-') || trimmed.startsWith('<!--') || trimmed.startsWith('rem ')) {
      continue;
    }

    if (!holeyLine.includes('___')) continue;

    const answers = extractAnswersFromLine(holeyLine, correctLine);
    answers.forEach(a => allAnswers.add(a));
  }

  return [...allAnswers];
}

// メイン処理
for (const file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  let modified = false;

  // 全てのholeyCodeとcorrectCodeのペアを抽出
  const holeyCodeRegex = /"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;
  const correctCodeRegex = /"correctCode":\s*"((?:[^"\\]|\\.)*)"/g;

  const holeyMatches = [...content.matchAll(holeyCodeRegex)];
  const correctMatches = [...content.matchAll(correctCodeRegex)];

  for (let i = 0; i < holeyMatches.length && i < correctMatches.length; i++) {
    const holeyCode = decode(holeyMatches[i][1]);
    const correctCode = decode(correctMatches[i][1]);

    const neededAnswers = extractAllAnswers(holeyCode, correctCode);
    if (neededAnswers.length === 0) continue;

    // このエクササイズのcandidatesの位置を特定
    const exerciseStart = Math.min(holeyMatches[i].index, correctMatches[i].index);
    const nextExerciseStart = (i + 1 < holeyMatches.length)
      ? Math.min(holeyMatches[i + 1].index, correctMatches[i + 1].index)
      : content.length;

    const exerciseContent = content.substring(exerciseStart, nextExerciseStart);

    // candidatesを探す
    const candidatesIdx = exerciseContent.indexOf('"candidates":');
    if (candidatesIdx === -1) continue;

    // candidates オブジェクトの終わりを探す
    let braceCount = 0;
    let candidatesStart = candidatesIdx;
    let candidatesEnd = candidatesIdx;
    let started = false;

    for (let j = candidatesIdx; j < exerciseContent.length; j++) {
      if (exerciseContent[j] === '{') {
        braceCount++;
        started = true;
      } else if (exerciseContent[j] === '}') {
        braceCount--;
        if (started && braceCount === 0) {
          candidatesEnd = j + 1;
          break;
        }
      }
    }

    const candidatesStr = exerciseContent.substring(candidatesStart, candidatesEnd);

    // 現在のcandidatesの全ての値を抽出
    const currentValues = new Set();
    const valueRegex = /:\s*\[\s*([\s\S]*?)\s*\]/g;
    let valueMatch;
    while ((valueMatch = valueRegex.exec(candidatesStr)) !== null) {
      const items = valueMatch[1].match(/"([^"]+)"/g);
      if (items) {
        items.forEach(item => currentValues.add(item.replace(/"/g, '')));
      }
    }

    // 不足している答え
    const missing = neededAnswers.filter(a => !currentValues.has(a));

    if (missing.length > 0) {
      // "others" が存在するか確認
      const othersMatch = candidatesStr.match(/"others":\s*\[([\s\S]*?)\]/);

      let newCandidatesStr;
      if (othersMatch) {
        // othersに追加
        const existingOthers = (othersMatch[1].match(/"([^"]+)"/g) || []).map(s => s.replace(/"/g, ''));
        const newOthers = [...new Set([...existingOthers, ...missing])];
        const newOthersArray = `"others": [${newOthers.map(o => `"${o.replace(/"/g, '\\"')}"`).join(', ')}]`;
        newCandidatesStr = candidatesStr.replace(/"others":\s*\[[\s\S]*?\]/, newOthersArray);
      } else {
        // othersを追加（最後の } の前に）
        const insertIdx = candidatesStr.lastIndexOf('}');
        const newOthersArray = `,\n          "others": [${missing.map(o => `"${o.replace(/"/g, '\\"')}"`).join(', ')}]`;
        newCandidatesStr = candidatesStr.substring(0, insertIdx) + newOthersArray + '\n        }';
      }

      // コンテンツを更新
      const globalCandidatesStart = exerciseStart + candidatesStart;
      const globalCandidatesEnd = exerciseStart + candidatesEnd;

      content = content.substring(0, globalCandidatesStart) + newCandidatesStr + content.substring(globalCandidatesEnd);

      console.log(`${file} ex${i + 1}: +${missing.length} [${missing.slice(0, 5).join(', ')}${missing.length > 5 ? '...' : ''}]`);
      totalFixed++;
      modified = true;

      // マッチを再取得（インデックスが変わるため）
      // 次のイテレーションで正しい位置を取得するため、ループを抜ける
      break;
    }
  }

  if (modified) {
    fs.writeFileSync(path.join(dir, file), content);
    // ファイルが修正されたら、もう一度処理する必要があるかもしれない
  }
}

console.log(`\n合計: ${totalFixed}件修正`);

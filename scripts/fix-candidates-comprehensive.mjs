// 包括的なcandidates修正スクリプト
import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;

function decode(s) {
  return s.replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
}

function escapeStr(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function extractAnswers(holeyLine, correctLine) {
  const answers = [];
  if (!holeyLine.includes('___')) return answers;

  const trimmed = holeyLine.trim();
  if (trimmed.startsWith('#') || trimmed.startsWith('//') || trimmed.startsWith(';') ||
      trimmed.startsWith('--') || trimmed.startsWith('/*') || trimmed.startsWith('*') ||
      trimmed.startsWith('{-') || trimmed.startsWith('<!--')) {
    return answers;
  }

  // ___を一つずつ処理
  let hIdx = 0, cIdx = 0;

  while (hIdx < holeyLine.length) {
    const blankIdx = holeyLine.indexOf('___', hIdx);
    if (blankIdx === -1) break;

    // ___の前の固定テキストをスキップ
    cIdx += (blankIdx - hIdx);
    hIdx = blankIdx + 3;

    // ___の後の最初の文字を取得
    let nextFixedIdx = hIdx;
    while (holeyLine.substring(nextFixedIdx, nextFixedIdx + 3) === '___') {
      nextFixedIdx += 3;
    }

    const suffixChar = holeyLine[nextFixedIdx];
    let answerEnd;

    if (suffixChar === undefined) {
      answerEnd = correctLine.length;
    } else {
      answerEnd = correctLine.indexOf(suffixChar, cIdx);
      if (answerEnd === -1) answerEnd = correctLine.length;
    }

    const answer = correctLine.substring(cIdx, answerEnd).trim();
    if (answer && answer.length > 0 && answer.length <= 40) {
      answers.push(answer);
    }

    cIdx = answerEnd;
  }

  return answers;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let fileFixed = 0;
  const fileName = path.basename(filePath);

  // タイトルで各エクササイズを区切る
  const titleMatches = [...content.matchAll(/"title":\s*"([^"]+)"/g)];

  for (let i = 0; i < titleMatches.length; i++) {
    const exerciseStart = titleMatches[i].index;
    const exerciseEnd = i + 1 < titleMatches.length ? titleMatches[i + 1].index : content.length;
    let exerciseContent = content.substring(exerciseStart, exerciseEnd);

    // holeyCodeを取得
    const holeyMatch = exerciseContent.match(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/);
    if (!holeyMatch) continue;

    const holeyCode = decode(holeyMatch[1]);
    const holeyLines = holeyCode.split('\n');

    // ___の数をカウント
    let blanks = 0;
    for (const line of holeyLines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('#') || trimmed.startsWith('//') || trimmed.startsWith(';') ||
          trimmed.startsWith('--') || trimmed.startsWith('/*') || trimmed.startsWith('*')) {
        continue;
      }
      blanks += (line.match(/___/g) || []).length;
    }

    if (blanks === 0) continue;

    // correctLinesを取得
    const correctLinesMatch = exerciseContent.match(/"correctLines":\s*\[([\s\S]*?)\]/);
    if (!correctLinesMatch) continue;

    // correctLinesを解析
    const correctLinesStr = correctLinesMatch[1];
    const items = [];
    let depth = 0, start = 0, inStr = false, esc = false;
    for (let j = 0; j < correctLinesStr.length; j++) {
      const ch = correctLinesStr[j];
      if (esc) { esc = false; continue; }
      if (ch === '\\') { esc = true; continue; }
      if (ch === '"' && depth === 0) { inStr = !inStr; continue; }
      if (!inStr && ch === ',' && depth === 0) {
        items.push(correctLinesStr.substring(start, j).trim());
        start = j + 1;
      }
    }
    if (start < correctLinesStr.length) items.push(correctLinesStr.substring(start).trim());

    const correctLines = items.map(item => {
      const m = item.match(/^"((?:[^"\\]|\\.)*)"/);
      return m ? decode(m[1]) : '';
    });

    // 必要な答えを収集
    const neededAnswers = new Set();
    for (let j = 0; j < holeyLines.length && j < correctLines.length; j++) {
      const answers = extractAnswers(holeyLines[j], correctLines[j]);
      answers.forEach(a => neededAnswers.add(a));
    }

    if (neededAnswers.size === 0) continue;

    // candidatesを探す
    const candidatesMatch = exerciseContent.match(/"candidates":\s*\{([\s\S]*?)\}/);
    if (!candidatesMatch) continue;

    // 現在のcandidatesの全ての値を収集
    const currentValues = new Set();
    const arrayPattern = /"[^"]+"\s*:\s*\[([\s\S]*?)\]/g;
    let arrayMatch;
    while ((arrayMatch = arrayPattern.exec(candidatesMatch[1])) !== null) {
      const vals = arrayMatch[1].match(/"([^"]+)"/g);
      if (vals) vals.forEach(v => currentValues.add(v.replace(/"/g, '')));
    }

    // 不足分を計算
    const missing = [...neededAnswers].filter(a => !currentValues.has(a));
    if (missing.length === 0) continue;

    // candidatesフィールドを更新
    const candidatesFullStr = exerciseContent.match(/"candidates":\s*\{[\s\S]*?\}/)[0];

    // othersフィールドがあれば更新、なければ追加
    let newCandidatesStr;
    if (candidatesFullStr.includes('"others"')) {
      const othersMatch = candidatesFullStr.match(/"others":\s*\[([\s\S]*?)\]/);
      if (othersMatch) {
        const existingOthers = (othersMatch[1].match(/"([^"]+)"/g) || []).map(s => s.replace(/"/g, ''));
        const newOthers = [...new Set([...existingOthers, ...missing])];
        const newOthersStr = `"others": [${newOthers.map(o => `"${escapeStr(o)}"`).join(', ')}]`;
        newCandidatesStr = candidatesFullStr.replace(/"others":\s*\[[\s\S]*?\]/, newOthersStr);
      } else {
        continue;
      }
    } else {
      // othersを追加
      const insertIdx = candidatesFullStr.lastIndexOf('}');
      const newOthersStr = `,\n          "others": [${missing.map(o => `"${escapeStr(o)}"`).join(', ')}]`;
      newCandidatesStr = candidatesFullStr.substring(0, insertIdx) + newOthersStr + '\n        }';
    }

    if (newCandidatesStr && newCandidatesStr !== candidatesFullStr) {
      const newExerciseContent = exerciseContent.replace(candidatesFullStr, newCandidatesStr);
      content = content.substring(0, exerciseStart) + newExerciseContent + content.substring(exerciseEnd);

      fileFixed++;
      modified = true;

      // タイトルマッチを再取得（インデックスが変わる可能性があるため）
      // 次のイテレーションで正しい位置を取得するために戻る
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
  }
  return fileFixed;
}

// 繰り返し処理
for (const file of files) {
  const filePath = path.join(dir, file);
  let fileTotal = 0;

  for (let pass = 0; pass < 20; pass++) {
    const fixed = processFile(filePath);
    if (fixed === 0) break;
    fileTotal += fixed;
  }

  if (fileTotal > 0) {
    console.log(`${file}: ${fileTotal}件`);
    totalFixed += fileTotal;
  }
}

console.log(`\n合計: ${totalFixed}件`);

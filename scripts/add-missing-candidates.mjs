// candidatesフィールドが存在しないエクササイズに追加するスクリプト
import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalAdded = 0;

function decode(s) {
  return s.replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
}

function extractAnswers(holeyLine, correctLine) {
  const answers = [];
  if (!holeyLine.includes('___')) return answers;
  const trimmed = holeyLine.trim();
  if (trimmed.startsWith('#') || trimmed.startsWith('//') || trimmed.startsWith(';') ||
      trimmed.startsWith('--') || trimmed.startsWith('/*') || trimmed.startsWith('*')) {
    return answers;
  }

  const parts = holeyLine.split('___');
  let idx = 0;
  for (let i = 0; i < parts.length - 1; i++) {
    idx += parts[i].length;
    let answerEnd;
    if (parts[i + 1].length > 0) {
      const nextChar = parts[i + 1][0];
      answerEnd = correctLine.indexOf(nextChar, idx);
      if (answerEnd === -1) answerEnd = correctLine.length;
    } else {
      answerEnd = correctLine.length;
    }
    const answer = correctLine.substring(idx, answerEnd).trim();
    if (answer && answer.length > 0 && answer.length <= 40) {
      answers.push(answer);
    }
    idx = answerEnd;
  }
  return answers;
}

for (const file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  let modified = false;
  let fileAdded = 0;

  // holeyCodeを持つがcandidatesを持たないエクササイズを探す
  const holeyPattern = /"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;
  const holeyMatches = [...content.matchAll(holeyPattern)];

  for (let i = 0; i < holeyMatches.length; i++) {
    const holeyCode = decode(holeyMatches[i][1]);
    const holeyLines = holeyCode.split('\n');

    const exerciseStart = holeyMatches[i].index;
    const exerciseEnd = (i + 1 < holeyMatches.length) ? holeyMatches[i + 1].index : content.length;
    const exerciseContent = content.substring(exerciseStart, exerciseEnd);

    // candidatesが既にあればスキップ
    if (exerciseContent.includes('"candidates"')) continue;

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

    // 答えを収集
    const allAnswers = new Set();
    for (let j = 0; j < holeyLines.length && j < correctLines.length; j++) {
      const answers = extractAnswers(holeyLines[j], correctLines[j]);
      answers.forEach(a => allAnswers.add(a));
    }

    if (allAnswers.size === 0) continue;

    // candidatesを生成
    const escapeStr = s => s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const answersArray = [...allAnswers];
    const candidatesStr = `"candidates": {\n          "keywords": [],\n          "others": [${answersArray.map(a => `"${escapeStr(a)}"`).join(', ')}]\n        }`;

    // testCasesの前に挿入
    const testCasesIdx = exerciseContent.indexOf('"testCases"');
    if (testCasesIdx === -1) continue;

    const insertPos = exerciseStart + testCasesIdx;
    content = content.substring(0, insertPos) + candidatesStr + ',\n        ' + content.substring(insertPos);

    fileAdded++;
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(path.join(dir, file), content);
    console.log(`${file}: ${fileAdded}件追加`);
    totalAdded += fileAdded;
  }
}

console.log(`\n合計: ${totalAdded}件`);

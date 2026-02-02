// 1ファイルのcandidatesを修正するスクリプト
import fs from 'fs';

const file = process.argv[2];
if (!file) {
  console.log('使用法: node fix-one-file.mjs <ファイル名>');
  process.exit(1);
}

const filePath = `data/lessons/${file}`;
if (!fs.existsSync(filePath)) {
  console.log(`ファイルが見つかりません: ${filePath}`);
  process.exit(1);
}

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
      trimmed.startsWith('--') || trimmed.startsWith('/*') || trimmed.startsWith('*')) {
    return answers;
  }

  let hIdx = 0, cIdx = 0;
  while (hIdx < holeyLine.length) {
    const blankIdx = holeyLine.indexOf('___', hIdx);
    if (blankIdx === -1) break;

    cIdx += (blankIdx - hIdx);
    hIdx = blankIdx + 3;

    let nextFixedIdx = hIdx;
    while (holeyLine.substring(nextFixedIdx, nextFixedIdx + 3) === '___') nextFixedIdx += 3;

    const suffixChar = holeyLine[nextFixedIdx];
    let answerEnd = suffixChar ? correctLine.indexOf(suffixChar, cIdx) : correctLine.length;
    if (answerEnd === -1) answerEnd = correctLine.length;

    const answer = correctLine.substring(cIdx, answerEnd).trim();
    if (answer && answer.length > 0 && answer.length <= 40) {
      answers.push(answer);
    }
    cIdx = answerEnd;
  }
  return answers;
}

let content = fs.readFileSync(filePath, 'utf8');
let totalFixed = 0;

// 各exerciseの"id"を探す
const idMatches = [...content.matchAll(/"id":\s*"([^"]+)"/g)];

for (let i = 0; i < idMatches.length; i++) {
  // 読み直し（前回の変更を反映）
  content = fs.readFileSync(filePath, 'utf8');

  const idMatch = idMatches[i];
  const exerciseStart = idMatch.index;

  // 次のエクササイズの開始を探す、または配列の終わり
  let exerciseEnd;
  if (i + 1 < idMatches.length) {
    exerciseEnd = content.indexOf('"id":', exerciseStart + 10);
    if (exerciseEnd === -1) exerciseEnd = content.length;
  } else {
    exerciseEnd = content.length;
  }

  const exerciseContent = content.substring(exerciseStart, exerciseEnd);

  // holeyCodeを取得
  const holeyMatch = exerciseContent.match(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/);
  if (!holeyMatch) continue;

  const holeyCode = decode(holeyMatch[1]);
  const holeyLines = holeyCode.split('\n');

  // correctLinesを取得
  const correctLinesMatch = exerciseContent.match(/"correctLines":\s*\[([\s\S]*?)\]/);
  if (!correctLinesMatch) continue;

  // correctLinesを解析
  const items = [];
  const clStr = correctLinesMatch[1];
  let depth = 0, start = 0, inStr = false, esc = false;
  for (let j = 0; j < clStr.length; j++) {
    const ch = clStr[j];
    if (esc) { esc = false; continue; }
    if (ch === '\\') { esc = true; continue; }
    if (ch === '"' && depth === 0) { inStr = !inStr; continue; }
    if (!inStr && ch === ',' && depth === 0) {
      items.push(clStr.substring(start, j).trim());
      start = j + 1;
    }
  }
  if (start < clStr.length) items.push(clStr.substring(start).trim());

  const correctLines = items.map(item => {
    const m = item.match(/^"((?:[^"\\]|\\.)*)"/);
    return m ? decode(m[1]) : '';
  });

  // 答えを収集
  const neededAnswers = new Set();
  for (let j = 0; j < holeyLines.length && j < correctLines.length; j++) {
    const answers = extractAnswers(holeyLines[j], correctLines[j]);
    answers.forEach(a => neededAnswers.add(a));
  }

  if (neededAnswers.size === 0) continue;

  // candidatesを探す
  const candidatesMatch = exerciseContent.match(/"candidates":\s*\{([\s\S]*?)\}/);
  if (!candidatesMatch) continue;

  const candidatesContent = candidatesMatch[1];
  const currentValues = new Set();
  const arrayPattern = /:\s*\[([\s\S]*?)\]/g;
  let arrayMatch;
  while ((arrayMatch = arrayPattern.exec(candidatesContent)) !== null) {
    const vals = arrayMatch[1].match(/"([^"]+)"/g);
    if (vals) vals.forEach(v => currentValues.add(v.replace(/"/g, '')));
  }

  // 不足分
  const missing = [...neededAnswers].filter(a => !currentValues.has(a));
  if (missing.length === 0 || missing.length > 20) continue;

  // 更新
  const candidatesFullStr = exerciseContent.match(/"candidates":\s*\{[\s\S]*?\}/)[0];

  let newCandidatesStr;
  if (candidatesFullStr.includes('"others"')) {
    const othersMatch = candidatesFullStr.match(/"others":\s*\[([\s\S]*?)\]/);
    if (!othersMatch) continue;

    const existingOthers = (othersMatch[1].match(/"([^"]+)"/g) || []).map(s => s.replace(/"/g, ''));
    const newOthers = [...new Set([...existingOthers, ...missing])];
    if (newOthers.length > 50) continue;

    const newOthersStr = `"others": [${newOthers.map(o => `"${escapeStr(o)}"`).join(', ')}]`;
    newCandidatesStr = candidatesFullStr.replace(/"others":\s*\[[\s\S]*?\]/, newOthersStr);
  } else {
    const insertIdx = candidatesFullStr.lastIndexOf('}');
    const newOthersStr = `,\n          "others": [${missing.map(o => `"${escapeStr(o)}"`).join(', ')}]`;
    newCandidatesStr = candidatesFullStr.substring(0, insertIdx) + newOthersStr + '\n        }';
  }

  if (newCandidatesStr && newCandidatesStr !== candidatesFullStr) {
    content = content.replace(candidatesFullStr, newCandidatesStr);
    fs.writeFileSync(filePath, content);
    console.log(`Exercise ${i + 1}: +${missing.length} [${missing.slice(0, 3).join(', ')}...]`);
    totalFixed++;
  }
}

console.log(`\n合計: ${totalFixed}件修正`);

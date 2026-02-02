// デバッグ用スクリプト
import fs from 'fs';

const file = process.argv[2] || 'json.ts';
const content = fs.readFileSync(`data/lessons/${file}`, 'utf8');

// JSONエスケープされた文字列をデコード
function decode(s) {
  if (!s) return '';
  return s
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\');
}

// holeyLineとcorrectLineを比較して答えを抽出
function extractAnswers(holeyLine, correctLine) {
  const answers = [];
  if (!holeyLine || !correctLine) return answers;
  if (!holeyLine.includes('___')) return answers;

  const trimmed = holeyLine.trim();
  if (trimmed.startsWith('#') || trimmed.startsWith('//') || trimmed.startsWith(';') ||
      trimmed.startsWith('--') || trimmed.startsWith('/*') || trimmed.startsWith('*')) {
    return answers;
  }

  let hIdx = 0, cIdx = 0;
  while (hIdx < holeyLine.length && cIdx < correctLine.length) {
    const blankIdx = holeyLine.indexOf('___', hIdx);
    if (blankIdx === -1) break;

    const prefix = holeyLine.substring(hIdx, blankIdx);
    cIdx += prefix.length;
    hIdx = blankIdx + 3;

    while (holeyLine.substring(hIdx, hIdx + 3) === '___') hIdx += 3;

    const nextChar = holeyLine[hIdx];
    let answerEnd;

    if (nextChar === undefined) {
      answerEnd = correctLine.length;
    } else {
      answerEnd = correctLine.indexOf(nextChar, cIdx);
      if (answerEnd === -1) answerEnd = correctLine.length;
    }

    const answer = correctLine.substring(cIdx, answerEnd).trim();
    if (answer && answer.length > 0 && answer.length <= 50) {
      answers.push(answer);
    }
    cIdx = answerEnd;
  }
  return answers;
}

// 最初の数エクササイズをデバッグ
const idPattern = /"id":\s*"([^"]+)"/g;
const idMatches = [...content.matchAll(idPattern)];

for (let i = 0; i < Math.min(3, idMatches.length); i++) {
  const exerciseStart = idMatches[i].index;
  const exerciseEnd = i + 1 < idMatches.length ? idMatches[i + 1].index : content.length;
  const exerciseContent = content.substring(exerciseStart, exerciseEnd);

  console.log(`\n=== Exercise ${i + 1}: ${idMatches[i][1]} ===`);

  const holeyMatch = exerciseContent.match(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/);
  if (!holeyMatch) {
    console.log('No holeyCode found');
    continue;
  }

  const holeyCode = decode(holeyMatch[1]);
  const holeyLines = holeyCode.split('\n');
  console.log('holeyLines count:', holeyLines.length);
  console.log('First 3 holey lines:');
  holeyLines.slice(0, 3).forEach((l, idx) => console.log(`  ${idx}: ${l.substring(0, 80)}`));

  const correctLinesMatch = exerciseContent.match(/"correctLines":\s*\[([\s\S]*?)\]/);
  if (!correctLinesMatch) {
    console.log('No correctLines found');
    continue;
  }

  const clStr = correctLinesMatch[1];
  const correctLines = [];
  let inStr = false, escaped = false, start = 0;
  for (let j = 0; j < clStr.length; j++) {
    const ch = clStr[j];
    if (escaped) { escaped = false; continue; }
    if (ch === '\\') { escaped = true; continue; }
    if (ch === '"' && !inStr) { inStr = true; start = j + 1; continue; }
    if (ch === '"' && inStr) {
      correctLines.push(decode(clStr.substring(start, j)));
      inStr = false;
    }
  }
  console.log('correctLines count:', correctLines.length);
  console.log('First 3 correct lines:');
  correctLines.slice(0, 3).forEach((l, idx) => console.log(`  ${idx}: ${l.substring(0, 80)}`));

  // 答えを収集
  const neededAnswers = new Set();
  for (let j = 0; j < holeyLines.length && j < correctLines.length; j++) {
    const answers = extractAnswers(holeyLines[j], correctLines[j]);
    if (answers.length > 0) {
      console.log(`Line ${j}: answers = [${answers.join(', ')}]`);
    }
    answers.forEach(a => neededAnswers.add(a));
  }
  console.log('Total needed answers:', [...neededAnswers].join(', '));

  // candidates
  const candidatesMatch = exerciseContent.match(/"candidates":\s*\{([\s\S]*?)\}/);
  if (!candidatesMatch) {
    console.log('No candidates found');
    continue;
  }

  const values = new Set();
  const arrayPattern = /:\s*\[([\s\S]*?)\]/g;
  let match;
  while ((match = arrayPattern.exec(candidatesMatch[1])) !== null) {
    const items = match[1].match(/"((?:[^"\\]|\\.)*)"/g);
    if (items) {
      items.forEach(item => {
        const raw = item.slice(1, -1);
        values.add(decode(raw));
      });
    }
  }
  console.log('Candidate values:', [...values].join(', '));

  const missing = [...neededAnswers].filter(a => !values.has(a));
  console.log('Missing:', missing.join(', ') || '(none)');
}

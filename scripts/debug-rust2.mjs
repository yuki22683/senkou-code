// デバッグ: rust2.ts の メソッドの定義 演習
import fs from 'fs';

const file = process.argv[2] || 'go3.ts';
const exerciseTitle = process.argv[3] || '型制約（かたせいやく）';
const content = fs.readFileSync(`data/lessons/${file}`, 'utf8');

function decode(s) {
  if (!s) return '';
  return s
    .replace(/\\\\/g, '\\')
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"');
}

function extractAnswers(holeyLine, correctLine) {
  const answers = [];
  if (!holeyLine || !correctLine) return answers;
  if (!holeyLine.includes('___')) return answers;

  const trimmed = holeyLine.trim();
  if (trimmed.startsWith('#') || trimmed.startsWith('//') || trimmed.startsWith(';') ||
      trimmed.startsWith('--') || trimmed.startsWith('/*') || trimmed.startsWith('*') ||
      trimmed.startsWith('<!--') || trimmed.startsWith('rem ') || trimmed.startsWith('REM ') ||
      trimmed.startsWith('{-')) {
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
    if (answer && answer.length > 0 && answer.length <= 60) {
      answers.push(answer);
    }
    cIdx = answerEnd;
  }
  return answers;
}

// 括弧のバランスを考慮してオブジェクトを抽出
function extractObject(str, startIdx) {
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = startIdx; i < str.length; i++) {
    const ch = str[i];

    if (escaped) { escaped = false; continue; }
    if (ch === '\\') { escaped = true; continue; }
    if (ch === '"') { inString = !inString; continue; }

    if (!inString) {
      if (ch === '{') depth++;
      if (ch === '}') {
        depth--;
        if (depth === 0) return str.substring(startIdx, i + 1);
      }
    }
  }
  return null;
}

// 配列から全ての文字列値を抽出
function extractArrayValues(str) {
  const values = new Set();
  const regex = /"((?:[^"\\]|\\.)*)"/g;
  let match;
  while ((match = regex.exec(str)) !== null) {
    values.add(decode(match[1]));
  }
  return values;
}

const titleMatches = [...content.matchAll(/"title":\s*"([^"]+)"/g)];
let targetIdx = titleMatches.findIndex(m => m[1] === exerciseTitle);

console.log('Target index:', targetIdx);
if (targetIdx === -1) {
  console.log('Exercise not found');
  process.exit(1);
}

const start = titleMatches[targetIdx].index;
const end = targetIdx + 1 < titleMatches.length ? titleMatches[targetIdx + 1].index : content.length;
const block = content.substring(start, end);

// holeyCode
const holeyMatch = block.match(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/);
if (!holeyMatch) {
  console.log('No holeyCode found');
  process.exit(1);
}

const holeyCode = decode(holeyMatch[1]);
const holeyLines = holeyCode.split('\n');

console.log('=== holeyCode ===');
console.log(holeyCode);
console.log('\n=== holeyLines with ___ ===');
holeyLines.forEach((l, i) => {
  if (l.includes('___')) console.log(`  ${i}: ${l}`);
});

// correctLines
const correctLinesMatch = block.match(/"correctLines":\s*\[([\s\S]*?)\]/);
if (!correctLinesMatch) {
  console.log('No correctLines found');
  process.exit(1);
}

const clStr = correctLinesMatch[1];
const correctLines = [];
let inStr = false, escaped = false, strStart = 0;

for (let j = 0; j < clStr.length; j++) {
  const ch = clStr[j];
  if (escaped) { escaped = false; continue; }
  if (ch === '\\') { escaped = true; continue; }
  if (ch === '"' && !inStr) { inStr = true; strStart = j + 1; continue; }
  if (ch === '"' && inStr) {
    correctLines.push(decode(clStr.substring(strStart, j)));
    inStr = false;
  }
}

console.log('\n=== correctLines ===');
correctLines.forEach((l, i) => console.log(`  ${i}: ${l}`));

// 答えを収集
console.log('\n=== 答え抽出 ===');
const neededAnswers = new Set();
for (let j = 0; j < holeyLines.length && j < correctLines.length; j++) {
  const answers = extractAnswers(holeyLines[j], correctLines[j]);
  if (answers.length > 0) {
    console.log(`Line ${j}: holey="${holeyLines[j]}" correct="${correctLines[j]}" => [${answers.join(', ')}]`);
  }
  answers.forEach(a => neededAnswers.add(a));
}
console.log('必要な答え:', [...neededAnswers].join(', '));

// candidates
const candidatesIdx = block.indexOf('"candidates"');
const braceIdx = block.indexOf('{', candidatesIdx);
const candidatesObj = extractObject(block, braceIdx);

const currentValues = extractArrayValues(candidatesObj);
console.log('\n=== candidates内の値 ===');
console.log([...currentValues].join(', '));

const missing = [...neededAnswers].filter(a => !currentValues.has(a));
console.log('\n=== 不足 ===');
console.log(missing.join(', ') || '(なし)');

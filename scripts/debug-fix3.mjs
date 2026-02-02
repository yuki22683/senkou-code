// デバッグ: 修正の出力を確認
import fs from 'fs';
import { execSync } from 'child_process';

const filePath = 'data/lessons/python.ts';
const content = fs.readFileSync(filePath, 'utf8');

function decode(s) {
  if (!s) return '';
  let result = s
    .replace(/\\\\/g, '\x00BS\x00')
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"')
    .replace(/\x00BS\x00/g, '\\');
  return result;
}

function escapeForJson(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\t/g, '\\t');
}

function extractBalanced(str, startIdx, openChar, closeChar) {
  let depth = 0, inString = false, escaped = false;
  for (let i = startIdx; i < str.length; i++) {
    const ch = str[i];
    if (escaped) { escaped = false; continue; }
    if (ch === '\\') { escaped = true; continue; }
    if (ch === '"') { inString = !inString; continue; }
    if (!inString) {
      if (ch === openChar) depth++;
      if (ch === closeChar) {
        depth--;
        if (depth === 0) return { content: str.substring(startIdx, i + 1), endIdx: i };
      }
    }
  }
  return null;
}

// 4番目の演習（"剰余演算子"）を探す - exercise index 3 (0-indexed)
const holeyMatches = [...content.matchAll(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g)];
const exerciseIdx = 3; // 4番目の演習
const holeyMatch = holeyMatches[exerciseIdx];
const holeyCodeStartIdx = holeyMatch.index;

// 演習ブロックの開始を見つける
const correctCodeIdx = content.lastIndexOf('"correctCode":', holeyCodeStartIdx);
let exerciseStart = correctCodeIdx;
let braceCount = 0;
for (let j = correctCodeIdx - 1; j >= 0; j--) {
  if (content[j] === '}') braceCount++;
  if (content[j] === '{') {
    if (braceCount === 0) { exerciseStart = j; break; }
    braceCount--;
  }
}

// 演習ブロックの終了を見つける
let depth = 0, inStr = false, esc = false;
let exerciseEnd = content.length;
for (let j = exerciseStart; j < content.length; j++) {
  const ch = content[j];
  if (esc) { esc = false; continue; }
  if (ch === '\\') { esc = true; continue; }
  if (ch === '"') { inStr = !inStr; continue; }
  if (!inStr) {
    if (ch === '{') depth++;
    if (ch === '}') {
      depth--;
      if (depth === 0) { exerciseEnd = j + 1; break; }
    }
  }
}

const exerciseBlock = content.substring(exerciseStart, exerciseEnd);
console.log('Exercise block length:', exerciseBlock.length);

// candidatesを探す
const candidatesIdx = exerciseBlock.indexOf('"candidates"');
const candBraceIdx = exerciseBlock.indexOf('{', candidatesIdx);
const candidatesResult = extractBalanced(exerciseBlock, candBraceIdx, '{', '}');
const candidatesObj = candidatesResult.content;

console.log('\n=== Original candidates ===');
console.log(candidatesObj);

// 最後の]を見つける
let lastArrayEndIdx = -1;
let inS = false, escd = false;
for (let k = 0; k < candidatesObj.length; k++) {
  const ch = candidatesObj[k];
  if (escd) { escd = false; continue; }
  if (ch === '\\') { escd = true; continue; }
  if (ch === '"') { inS = !inS; continue; }
  if (!inS && ch === ']') {
    lastArrayEndIdx = k;
  }
}
console.log('\nLast ] index:', lastArrayEndIdx);
console.log('Char at index:', JSON.stringify(candidatesObj[lastArrayEndIdx]));
console.log('Context around ]:', JSON.stringify(candidatesObj.substring(lastArrayEndIdx - 5, lastArrayEndIdx + 10)));

// 新しいothersを追加
const escapedMissing = '"print"';
const newCandidatesObj = candidatesObj.substring(0, lastArrayEndIdx + 1) +
                         `,\n          "others": [${escapedMissing}]` +
                         candidatesObj.substring(lastArrayEndIdx + 1);

console.log('\n=== New candidates ===');
console.log(newCandidatesObj);

// 新しい演習ブロックを作成
const newExerciseBlock = exerciseBlock.substring(0, candBraceIdx) +
                         newCandidatesObj +
                         exerciseBlock.substring(candBraceIdx + candidatesObj.length);

// ファイル全体を更新
const newContent = content.substring(0, exerciseStart) + newExerciseBlock + content.substring(exerciseEnd);

// テストファイルに書き出し
fs.writeFileSync('data/lessons/python.ts.test2', newContent);
console.log('\nWrote to data/lessons/python.ts.test2');

// 構文チェック
try {
  execSync('npx tsc --noEmit data/lessons/python.ts.test2', { stdio: 'pipe' });
  console.log('✓ Syntax OK');
} catch (e) {
  console.log('✗ Syntax error:');
  console.log(e.stderr?.toString() || e.message);
}

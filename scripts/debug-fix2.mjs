// デバッグ: 修正内容を詳しく表示
import fs from 'fs';

const filePath = 'data/lessons/python.ts';
const content = fs.readFileSync(filePath, 'utf8');

// デコード関数
function decode(s) {
  if (!s) return '';
  let result = s
    .replace(/\\\\/g, '\x00BS\x00')
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"')
    .replace(/\x00BS\x00/g, '\\');
  if (result.includes('\\n') || result.includes('\\t') || result.includes('\\"')) {
    result = result
      .replace(/\\\\/g, '\x00BS\x00')
      .replace(/\\n/g, '\n')
      .replace(/\\t/g, '\t')
      .replace(/\\"/g, '"')
      .replace(/\x00BS\x00/g, '\\');
  }
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

// 4番目の演習（"% の使い方"）を探す
const holeyMatches = [...content.matchAll(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g)];
const holeyMatch = holeyMatches[3]; // 4番目（0-indexed）
const holeyCodeStartIdx = holeyMatch.index;

console.log('Exercise 4 holeyCode starts at:', holeyCodeStartIdx);

// この演習の"candidates"を探す
// まずcorrectCodeの前を探す
const correctCodeIdx = content.lastIndexOf('"correctCode":', holeyCodeStartIdx);
console.log('correctCode at:', correctCodeIdx);

// 演習ブロックの開始を見つける
let exerciseStart = correctCodeIdx;
let braceCount = 0;
for (let j = correctCodeIdx - 1; j >= 0; j--) {
  if (content[j] === '}') braceCount++;
  if (content[j] === '{') {
    if (braceCount === 0) { exerciseStart = j; break; }
    braceCount--;
  }
}
console.log('Exercise block starts at:', exerciseStart);

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
console.log('Exercise block ends at:', exerciseEnd);

const exerciseBlock = content.substring(exerciseStart, exerciseEnd);
console.log('\n=== Exercise Block (first 500 chars) ===');
console.log(exerciseBlock.substring(0, 500));

// candidatesを探す
const candidatesIdx = exerciseBlock.indexOf('"candidates"');
console.log('\nCandidates at:', candidatesIdx);

if (candidatesIdx !== -1) {
  const candBraceIdx = exerciseBlock.indexOf('{', candidatesIdx);
  const candidatesResult = extractBalanced(exerciseBlock, candBraceIdx, '{', '}');

  if (candidatesResult) {
    console.log('\n=== Original Candidates ===');
    console.log(candidatesResult.content);

    // othersがあるか
    if (!candidatesResult.content.includes('"others"')) {
      console.log('\nNo "others" array, need to add one');

      // 新しいothersを追加
      const lastBraceIdx = candidatesResult.content.lastIndexOf('}');
      const newOthersStr = ',\n          "others": ["print"]';
      const newCandidatesObj = candidatesResult.content.substring(0, lastBraceIdx) +
                               newOthersStr + '\n        }';

      console.log('\n=== New Candidates ===');
      console.log(newCandidatesObj);

      // 演習ブロックを更新
      const newExerciseBlock = exerciseBlock.substring(0, candBraceIdx) +
                               newCandidatesObj +
                               exerciseBlock.substring(candBraceIdx + candidatesResult.content.length);

      console.log('\n=== New Exercise Block (first 600 chars) ===');
      console.log(newExerciseBlock.substring(0, 600));

      // ファイル全体を更新
      const newContent = content.substring(0, exerciseStart) + newExerciseBlock + content.substring(exerciseEnd);

      // テストファイルに書き出し
      fs.writeFileSync('data/lessons/python.ts.test', newContent);
      console.log('\nWrote to data/lessons/python.ts.test');
      console.log('Run: npx tsc --noEmit data/lessons/python.ts.test');
    }
  }
}

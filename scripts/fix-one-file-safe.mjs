// 1ファイルを安全に修正するスクリプト
import fs from 'fs';
import { execSync } from 'child_process';

const file = process.argv[2];
if (!file) {
  console.log('Usage: node fix-one-file-safe.mjs <filename>');
  process.exit(1);
}

const filePath = `data/lessons/${file}`;
if (!fs.existsSync(filePath)) {
  console.log(`File not found: ${filePath}`);
  process.exit(1);
}

// デコード関数
function decode(s) {
  if (!s) return '';
  let result = s
    .replace(/\\\\/g, '\x00BS\x00')
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"')
    .replace(/\x00BS\x00/g, '\\');
  // 二重エスケープ対応
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

// JSON用エスケープ
function escapeForJson(s) {
  return s
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\t/g, '\\t')
    .replace(/\r/g, '\\r');
}

// バランス括弧抽出
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

// 配列から値を抽出
function extractArrayValues(arrayStr) {
  const values = new Set();
  const pattern = /"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = pattern.exec(arrayStr)) !== null) {
    values.add(decode(m[1]));
  }
  return values;
}

// 答え抽出
function extractAnswers(holeyLine, correctLine) {
  const answers = [];
  if (!holeyLine || !correctLine || !holeyLine.includes('___')) return answers;
  const trimmed = holeyLine.trim();
  const commentPrefixes = ['#', '//', ';', '--', '/*', '*', '<!--', 'rem ', 'REM ', '{-'];
  if (commentPrefixes.some(p => trimmed.startsWith(p))) return answers;

  let hIdx = 0, cIdx = 0;
  while (hIdx < holeyLine.length && cIdx < correctLine.length) {
    const blankIdx = holeyLine.indexOf('___', hIdx);
    if (blankIdx === -1) break;
    cIdx += (blankIdx - hIdx);
    hIdx = blankIdx + 3;
    while (holeyLine.substring(hIdx, hIdx + 3) === '___') hIdx += 3;
    const nextChar = holeyLine[hIdx];
    let answerEnd = nextChar === undefined ? correctLine.length : correctLine.indexOf(nextChar, cIdx);
    if (answerEnd === -1) answerEnd = correctLine.length;
    const answer = correctLine.substring(cIdx, answerEnd).trim();
    if (answer && answer.length > 0 && answer.length <= 60) answers.push(answer);
    cIdx = answerEnd;
  }
  return answers;
}

// correctLinesパース
function parseCorrectLines(block) {
  const idx = block.indexOf('"correctLines"');
  if (idx === -1) return null;
  const bracketIdx = block.indexOf('[', idx);
  if (bracketIdx === -1) return null;
  const result = extractBalanced(block, bracketIdx, '[', ']');
  if (!result) return null;

  const lines = [];
  let inStr = false, escaped = false, strStart = 0;
  for (let j = 1; j < result.content.length - 1; j++) {
    const ch = result.content[j];
    if (escaped) { escaped = false; continue; }
    if (ch === '\\') { escaped = true; continue; }
    if (ch === '"' && !inStr) { inStr = true; strStart = j + 1; continue; }
    if (ch === '"' && inStr) {
      lines.push(decode(result.content.substring(strStart, j)));
      inStr = false;
    }
  }
  return lines;
}

let content = fs.readFileSync(filePath, 'utf8');
let totalFixed = 0;

// 各holeyCodeを探す（これが演習の印）
const holeyCodePattern = /"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;
const holeyMatches = [...content.matchAll(holeyCodePattern)];

console.log(`Found ${holeyMatches.length} exercises in ${file}`);

for (let i = 0; i < holeyMatches.length; i++) {
  // 毎回ファイルを読み直す
  content = fs.readFileSync(filePath, 'utf8');

  // 現在のholeyCodeを再検索
  const currentMatches = [...content.matchAll(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g)];
  if (i >= currentMatches.length) break;

  const holeyMatch = currentMatches[i];
  const holeyCodeStartIdx = holeyMatch.index;

  // この演習の範囲を特定（前の"title"から次の演習の"title"まで）
  // まずこの演習が属するブロックの開始を見つける
  let blockStart = content.lastIndexOf('"title":', holeyCodeStartIdx);
  // その前のtitleがtutorialSlideのものか判定するため、もう一つ前を探す
  let prevBlockStart = content.lastIndexOf('"title":', blockStart - 1);

  // 演習の開始位置を特定（"correctCode"の前の"{"を探す）
  const correctCodeIdx = content.lastIndexOf('"correctCode":', holeyCodeStartIdx);
  if (correctCodeIdx === -1) continue;

  // correctCodeの前にある{を探す（演習オブジェクトの開始）
  let exerciseStart = correctCodeIdx;
  let braceCount = 0;
  for (let j = correctCodeIdx - 1; j >= 0; j--) {
    if (content[j] === '}') braceCount++;
    if (content[j] === '{') {
      if (braceCount === 0) {
        exerciseStart = j;
        break;
      }
      braceCount--;
    }
  }

  // 次の演習の開始を見つける
  const nextHoleyIdx = i + 1 < currentMatches.length ? currentMatches[i + 1].index : content.length;
  let exerciseEnd = nextHoleyIdx;

  // 演習の終了位置を見つける（}を探す）
  let depth = 0;
  let inStr = false;
  let esc = false;
  for (let j = exerciseStart; j < exerciseEnd; j++) {
    const ch = content[j];
    if (esc) { esc = false; continue; }
    if (ch === '\\') { esc = true; continue; }
    if (ch === '"') { inStr = !inStr; continue; }
    if (!inStr) {
      if (ch === '{') depth++;
      if (ch === '}') {
        depth--;
        if (depth === 0) {
          exerciseEnd = j + 1;
          break;
        }
      }
    }
  }

  const exerciseBlock = content.substring(exerciseStart, exerciseEnd);

  // holeyCodeを取得
  const holeyCodeMatch = exerciseBlock.match(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/);
  if (!holeyCodeMatch) continue;

  const holeyCode = decode(holeyCodeMatch[1]);
  const holeyLines = holeyCode.split('\n');

  // correctLinesを取得
  const correctLines = parseCorrectLines(exerciseBlock);
  if (!correctLines) continue;

  // 必要な答えを収集
  const neededAnswers = new Set();
  for (let j = 0; j < holeyLines.length && j < correctLines.length; j++) {
    const answers = extractAnswers(holeyLines[j], correctLines[j]);
    answers.forEach(a => neededAnswers.add(a));
  }
  if (neededAnswers.size === 0) continue;

  // candidatesを探す
  const candidatesIdx = exerciseBlock.indexOf('"candidates"');
  if (candidatesIdx === -1) continue;

  const candBraceIdx = exerciseBlock.indexOf('{', candidatesIdx);
  if (candBraceIdx === -1) continue;

  const candidatesResult = extractBalanced(exerciseBlock, candBraceIdx, '{', '}');
  if (!candidatesResult) continue;

  const candidatesObj = candidatesResult.content;

  // 現在の候補値を収集
  const currentValues = new Set();
  const arrayPattern = /"[^"]+"\s*:\s*\[/g;
  let arrMatch;
  const candContent = candidatesObj;
  while ((arrMatch = arrayPattern.exec(candContent)) !== null) {
    const arrStart = candContent.indexOf('[', arrMatch.index);
    const arrResult = extractBalanced(candContent, arrStart, '[', ']');
    if (arrResult) {
      const vals = extractArrayValues(arrResult.content);
      vals.forEach(v => currentValues.add(v));
    }
  }

  // 不足分計算
  const missing = [...neededAnswers].filter(a => !currentValues.has(a));
  if (missing.length === 0 || missing.length > 30) continue;

  console.log(`  Exercise ${i + 1}: missing ${missing.length} values: [${missing.slice(0, 3).join(', ')}${missing.length > 3 ? '...' : ''}]`);

  // othersを更新または追加
  let newCandidatesObj;

  if (candidatesObj.includes('"others"')) {
    // othersを更新
    const othersIdx = candidatesObj.indexOf('"others"');
    const othersBracketIdx = candidatesObj.indexOf('[', othersIdx);
    const othersResult = extractBalanced(candidatesObj, othersBracketIdx, '[', ']');
    if (!othersResult) continue;

    // 既存の値を取得（エスケープ形式のまま）
    const existingRaw = [];
    const existingPattern = /"((?:[^"\\]|\\.)*)"/g;
    let existingMatch;
    while ((existingMatch = existingPattern.exec(othersResult.content)) !== null) {
      existingRaw.push(existingMatch[1]);
    }

    // 既存値のデコード版
    const existingDecoded = existingRaw.map(r => decode(r));

    // 新しい値を追加
    const newRaw = [...existingRaw];
    for (const m of missing) {
      if (!existingDecoded.includes(m)) {
        newRaw.push(escapeForJson(m));
      }
    }

    if (newRaw.length === existingRaw.length) continue;
    if (newRaw.length > 80) continue;

    const newOthersArr = `[${newRaw.map(v => `"${v}"`).join(', ')}]`;
    newCandidatesObj = candidatesObj.substring(0, othersBracketIdx) +
                       newOthersArr +
                       candidatesObj.substring(othersBracketIdx + othersResult.content.length);
  } else {
    // othersを新規追加
    const lastBraceIdx = candidatesObj.lastIndexOf('}');
    const escapedMissing = missing.map(m => `"${escapeForJson(m)}"`).join(', ');
    const newOthersStr = `,\n          "others": [${escapedMissing}]`;
    newCandidatesObj = candidatesObj.substring(0, lastBraceIdx) + newOthersStr + '\n        }';
  }

  if (newCandidatesObj && newCandidatesObj !== candidatesObj) {
    // 更新を適用
    const absStart = exerciseStart + candBraceIdx;
    const newExerciseBlock = exerciseBlock.substring(0, candBraceIdx) +
                             newCandidatesObj +
                             exerciseBlock.substring(candBraceIdx + candidatesObj.length);

    content = content.substring(0, exerciseStart) + newExerciseBlock + content.substring(exerciseEnd);

    // 一時ファイルに保存して構文チェック
    const tempPath = filePath + '.tmp';
    fs.writeFileSync(tempPath, content);

    try {
      execSync(`npx tsc --noEmit "${tempPath}"`, { stdio: 'pipe' });
      // 成功したらファイルを更新
      fs.renameSync(tempPath, filePath);
      totalFixed++;
    } catch (e) {
      // エラーの場合はスキップ
      fs.unlinkSync(tempPath);
      console.log(`    ✗ Syntax error, skipped`);
      // 元のファイルを読み直す
      content = fs.readFileSync(filePath, 'utf8');
    }
  }
}

console.log(`\nTotal fixed: ${totalFixed}`);

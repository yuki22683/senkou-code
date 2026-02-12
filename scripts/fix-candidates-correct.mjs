// 正しいcandidates修正スクリプト
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

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

let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let fileFixed = 0;

  // 各holeyCodeを探す
  const holeyCodePattern = /"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;
  let holeyMatches = [...content.matchAll(holeyCodePattern)];

  for (let i = 0; i < holeyMatches.length; i++) {
    // 毎回ファイルを読み直す
    content = fs.readFileSync(filePath, 'utf8');
    holeyMatches = [...content.matchAll(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g)];
    if (i >= holeyMatches.length) break;

    const holeyMatch = holeyMatches[i];
    const holeyCodeStartIdx = holeyMatch.index;

    // 演習ブロックの開始を見つける
    const correctCodeIdx = content.lastIndexOf('"correctCode":', holeyCodeStartIdx);
    if (correctCodeIdx === -1) continue;

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
    while ((arrMatch = arrayPattern.exec(candidatesObj)) !== null) {
      const arrStart = candidatesObj.indexOf('[', arrMatch.index);
      const arrResult = extractBalanced(candidatesObj, arrStart, '[', ']');
      if (arrResult) {
        const vals = extractArrayValues(arrResult.content);
        vals.forEach(v => currentValues.add(v));
      }
    }

    // 不足分計算
    const missing = [...neededAnswers].filter(a => !currentValues.has(a));
    if (missing.length === 0 || missing.length > 30) continue;

    // othersを更新または追加
    let newCandidatesObj;

    if (candidatesObj.includes('"others"')) {
      // othersを更新
      const othersIdx = candidatesObj.indexOf('"others"');
      const othersBracketIdx = candidatesObj.indexOf('[', othersIdx);
      const othersResult = extractBalanced(candidatesObj, othersBracketIdx, '[', ']');
      if (!othersResult) continue;

      const existingRaw = [];
      const existingPattern = /"((?:[^"\\]|\\.)*)"/g;
      let existingMatch;
      while ((existingMatch = existingPattern.exec(othersResult.content)) !== null) {
        existingRaw.push(existingMatch[1]);
      }

      const existingDecoded = existingRaw.map(r => decode(r));
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
      // othersを新規追加 - 最後の配列の]の直後にカンマを入れる
      // candidatesObj内の最後の]を見つける
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

      if (lastArrayEndIdx === -1) continue;

      const escapedMissing = missing.map(m => `"${escapeForJson(m)}"`).join(', ');
      // ]の直後にカンマと新しいothers配列を挿入
      newCandidatesObj = candidatesObj.substring(0, lastArrayEndIdx + 1) +
                         `,\n          "others": [${escapedMissing}]` +
                         candidatesObj.substring(lastArrayEndIdx + 1);
    }

    if (newCandidatesObj && newCandidatesObj !== candidatesObj) {
      // 更新を適用
      const newExerciseBlock = exerciseBlock.substring(0, candBraceIdx) +
                               newCandidatesObj +
                               exerciseBlock.substring(candBraceIdx + candidatesObj.length);

      const newContent = content.substring(0, exerciseStart) + newExerciseBlock + content.substring(exerciseEnd);

      // 一時ファイルに保存して構文チェック（.ts拡張子を維持）
      const tempPath = filePath.replace('.ts', '-tmp.ts');
      fs.writeFileSync(tempPath, newContent);

      try {
        execSync(`npx tsc --noEmit "${tempPath}"`, { stdio: 'pipe' });
        // 成功したら元のファイルを更新
        fs.writeFileSync(filePath, newContent);
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        fileFixed++;
        console.log(`  ✓ ${file} exercise ${i + 1}: added ${missing.length} values`);
      } catch (e) {
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        console.log(`  ✗ ${file} exercise ${i + 1}: syntax error, skipped`);
      }
    }
  }

  if (fileFixed > 0) {
    totalFixed += fileFixed;
  }
}

console.log(`\nTotal fixed: ${totalFixed}`);

// candidates修正スクリプト - 最終版（バランスパース対応）
import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;

function decode(s) {
  if (!s) return '';
  // Handle double escaping: \\\" -> \" -> "
  // First pass: reduce double backslashes
  let result = s
    .replace(/\\\\/g, '\\')
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"');
  // Second pass if there are still escapes
  if (result.includes('\\')) {
    result = result
      .replace(/\\\\/g, '\\')
      .replace(/\\n/g, '\n')
      .replace(/\\t/g, '\t')
      .replace(/\\"/g, '"');
  }
  return result;
}

function escapeForJson(s) {
  return s
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\t/g, '\\t');
}

// 括弧のバランスを考慮して配列/オブジェクトを抽出
function extractBalanced(str, startIdx, openChar, closeChar) {
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = startIdx; i < str.length; i++) {
    const ch = str[i];

    if (escaped) { escaped = false; continue; }
    if (ch === '\\') { escaped = true; continue; }
    if (ch === '"') { inString = !inString; continue; }

    if (!inString) {
      if (ch === openChar) depth++;
      if (ch === closeChar) {
        depth--;
        if (depth === 0) return str.substring(startIdx, i + 1);
      }
    }
  }
  return null;
}

// candidates オブジェクトから配列の値のみを抽出
function extractCandidateValues(candidatesStr) {
  const values = new Set();
  const arrayPattern = /"[^"]+"\s*:\s*\[/g;
  let match;

  while ((match = arrayPattern.exec(candidatesStr)) !== null) {
    const arrayStartIdx = candidatesStr.indexOf('[', match.index);
    const arrayContent = extractBalanced(candidatesStr, arrayStartIdx, '[', ']');
    if (arrayContent) {
      const valuePattern = /"((?:[^"\\]|\\.)*)"/g;
      let valueMatch;
      while ((valueMatch = valuePattern.exec(arrayContent)) !== null) {
        values.add(decode(valueMatch[1]));
      }
    }
  }

  return values;
}

// holeyLineとcorrectLineを比較して答えを抽出
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

// correctLines配列を抽出してパース
function parseCorrectLines(block) {
  const idx = block.indexOf('"correctLines"');
  if (idx === -1) return null;

  const bracketIdx = block.indexOf('[', idx);
  if (bracketIdx === -1) return null;

  const arrayStr = extractBalanced(block, bracketIdx, '[', ']');
  if (!arrayStr) return null;

  const lines = [];
  let inStr = false, escaped = false, strStart = 0;

  for (let j = 1; j < arrayStr.length - 1; j++) {
    const ch = arrayStr[j];
    if (escaped) { escaped = false; continue; }
    if (ch === '\\') { escaped = true; continue; }
    if (ch === '"' && !inStr) { inStr = true; strStart = j + 1; continue; }
    if (ch === '"' && inStr) {
      lines.push(decode(arrayStr.substring(strStart, j)));
      inStr = false;
    }
  }

  return lines;
}

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let fileFixed = 0;

  const titleMatches = [...content.matchAll(/"title":\s*"([^"]+)"/g)];

  for (let i = 0; i < titleMatches.length; i++) {
    // 毎回読み直し
    content = fs.readFileSync(filePath, 'utf8');
    const currentTitleMatches = [...content.matchAll(/"title":\s*"([^"]+)"/g)];
    if (i >= currentTitleMatches.length) break;

    const start = currentTitleMatches[i].index;
    const end = i + 1 < currentTitleMatches.length ? currentTitleMatches[i + 1].index : content.length;
    const block = content.substring(start, end);

    // holeyCodeを取得
    const holeyMatch = block.match(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/);
    if (!holeyMatch) continue;

    const holeyCode = decode(holeyMatch[1]);
    const holeyLines = holeyCode.split('\n');

    // correctLinesを抽出（バランスパース）
    const correctLines = parseCorrectLines(block);
    if (!correctLines) continue;

    // 必要なユニーク答えを収集
    const neededAnswers = new Set();
    for (let j = 0; j < holeyLines.length && j < correctLines.length; j++) {
      const answers = extractAnswers(holeyLines[j], correctLines[j]);
      answers.forEach(a => neededAnswers.add(a));
    }

    if (neededAnswers.size === 0) continue;

    // candidatesを探す
    const candidatesIdx = block.indexOf('"candidates"');
    if (candidatesIdx === -1) continue;

    const braceIdx = block.indexOf('{', candidatesIdx);
    if (braceIdx === -1) continue;

    const candidatesObj = extractBalanced(block, braceIdx, '{', '}');
    if (!candidatesObj) continue;

    // 現在の値を取得
    const currentValues = extractCandidateValues(candidatesObj);

    // 不足分
    const missing = [...neededAnswers].filter(a => !currentValues.has(a));
    if (missing.length === 0 || missing.length > 30) continue;

    // candidatesを更新
    let newCandidatesObj;
    const absStartIdx = start + braceIdx;

    if (candidatesObj.includes('"others"')) {
      // "others" 配列の位置を見つける
      const othersIdx = candidatesObj.indexOf('"others"');
      const othersBracketIdx = candidatesObj.indexOf('[', othersIdx);
      const othersArrayStr = extractBalanced(candidatesObj, othersBracketIdx, '[', ']');

      if (!othersArrayStr) continue;

      // 既存のothers値を取得
      const existingOthers = [];
      const existingItems = othersArrayStr.match(/"((?:[^"\\]|\\.)*)"/g) || [];
      existingItems.forEach(item => existingOthers.push(decode(item.slice(1, -1))));

      // 新しい値を追加
      const newOthers = [...existingOthers];
      for (const m of missing) {
        if (!existingOthers.includes(m) && !newOthers.includes(m)) {
          newOthers.push(m);
        }
      }

      if (newOthers.length > 80) continue;

      const newOthersArrayStr = `[${newOthers.map(o => `"${escapeForJson(o)}"`).join(', ')}]`;
      newCandidatesObj = candidatesObj.substring(0, othersBracketIdx) + newOthersArrayStr + candidatesObj.substring(othersBracketIdx + othersArrayStr.length);
    } else {
      // othersを新規追加
      const insertIdx = candidatesObj.lastIndexOf('}');
      const indent = candidatesObj.includes('\n') ? '\n          ' : ' ';
      const newOthersStr = `,${indent}"others": [${missing.map(o => `"${escapeForJson(o)}"`).join(', ')}]`;
      newCandidatesObj = candidatesObj.substring(0, insertIdx) + newOthersStr + '\n        }';
    }

    if (newCandidatesObj && newCandidatesObj !== candidatesObj) {
      content = content.substring(0, absStartIdx) + newCandidatesObj + content.substring(absStartIdx + candidatesObj.length);
      fs.writeFileSync(filePath, content);
      fileFixed++;
    }
  }

  if (fileFixed > 0) {
    console.log(`${file}: ${fileFixed}件`);
    totalFixed += fileFixed;
  }
}

console.log(`\n合計: ${totalFixed}件修正`);

// candidatesチェックスクリプト - 最終版
// 配列内の]をエスケープ考慮してパース
import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalIssues = 0;

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
  const content = fs.readFileSync(path.join(dir, file), 'utf8');

  const titleMatches = [...content.matchAll(/"title":\s*"([^"]+)"/g)];

  for (let i = 0; i < titleMatches.length; i++) {
    const start = titleMatches[i].index;
    const end = i + 1 < titleMatches.length ? titleMatches[i + 1].index : content.length;
    const block = content.substring(start, end);
    const title = titleMatches[i][1];

    // holeyCodeを抽出
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
    if (candidatesIdx === -1) {
      console.log(`${file}: "${title}" - candidatesなし（必要: ${neededAnswers.size}個）`);
      totalIssues++;
      continue;
    }

    const braceIdx = block.indexOf('{', candidatesIdx);
    if (braceIdx === -1) continue;

    const candidatesObj = extractBalanced(block, braceIdx, '{', '}');
    if (!candidatesObj) continue;

    const currentValues = extractCandidateValues(candidatesObj);

    // 不足をチェック
    const missing = [...neededAnswers].filter(a => !currentValues.has(a));

    if (missing.length > 0) {
      console.log(`${file}: "${title}" - 不足: [${missing.slice(0, 5).join(', ')}${missing.length > 5 ? '...' : ''}]`);
      totalIssues++;
    }
  }
}

if (totalIssues === 0) {
  console.log('全てのエクササイズでcandidatesが十分です。');
} else {
  console.log(`\n合計: ${totalIssues}件の問題`);
}

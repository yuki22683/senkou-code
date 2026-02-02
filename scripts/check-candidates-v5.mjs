// candidatesチェックスクリプト v5 - 正確な比較
// 穴の総数ではなく、必要なユニーク答えがcandidatesに含まれているかをチェック
import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalIssues = 0;

function decode(s) {
  if (!s) return '';
  return s
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\');
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

// candidates オブジェクトから配列の値のみを抽出（フィールド名を除く）
function extractCandidateValues(candidatesStr) {
  const values = new Set();
  let idx = 0;

  while (idx < candidatesStr.length) {
    // キーを探す "key": [
    const keyMatch = /"[^"]+"\s*:\s*\[/.exec(candidatesStr.substring(idx));
    if (!keyMatch) break;

    const startArr = idx + keyMatch.index + keyMatch[0].length - 1; // '[' の位置
    let depth = 0;
    let inStr = false;
    let escaped = false;
    let arrEnd = -1;

    // 配列の終わりを探す
    for (let i = startArr; i < candidatesStr.length; i++) {
      const ch = candidatesStr[i];
      if (escaped) { escaped = false; continue; }
      if (ch === '\\') { escaped = true; continue; }
      if (ch === '"') { inStr = !inStr; continue; }
      
      if (!inStr) {
        if (ch === '[') depth++;
        if (ch === ']') {
          depth--;
          if (depth === 0) {
            arrEnd = i;
            break;
          }
        }
      }
    }

    if (arrEnd !== -1) {
      const arrayContent = candidatesStr.substring(startArr + 1, arrEnd);
      // 配列内の文字列値を抽出
      const valuePattern = /"((?:[^"\\]|\\.)*)"/g;
      let valueMatch;
      while ((valueMatch = valuePattern.exec(arrayContent)) !== null) {
        values.add(decode(valueMatch[1]));
      }
      idx = arrEnd + 1;
    } else {
      break; // パースエラーまたは終わり
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

    // correctLinesを取得
    const correctLinesMatch = block.match(/"correctLines":\s*\[([\s\S]*?)\]/);
    if (!correctLinesMatch) continue;

    // correctLinesを解析
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

    const candidatesObj = extractObject(block, braceIdx);
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

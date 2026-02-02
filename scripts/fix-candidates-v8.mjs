// candidates修正スクリプト v8 - 堅牢なパース
import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;

function decode(s) {
  if (!s) return '';
  return s
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\');
}

function escapeForJson(s) {
  return s
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\t/g, '\\t');
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

// 配列の中身（[]の内側）を抽出
function extractArrayContent(str, startSearchIdx = 0) {
  const openBracket = str.indexOf('[', startSearchIdx);
  if (openBracket === -1) return null;

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = openBracket; i < str.length; i++) {
    const ch = str[i];
    if (escaped) { escaped = false; continue; }
    if (ch === '\\') { escaped = true; continue; }
    if (ch === '"') { inString = !inString; continue; }
    if (!inString) {
      if (ch === '[') depth++;
      if (ch === ']') {
        depth--;
        if (depth === 0) return str.substring(openBracket + 1, i);
      }
    }
  }
  return null;
}

// 文字列から全ての文字列値を抽出
function extractStringValues(str) {
  const values = new Set();
  const regex = /"((?:[^"\\]|\\.)*)"/g;
  let match;
  while ((match = regex.exec(str)) !== null) {
    values.add(decode(match[1]));
  }
  return values;
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

    // correctLinesを取得
    const clIdx = block.indexOf('"correctLines"');
    if (clIdx === -1) continue;
    
    const clContent = extractArrayContent(block, clIdx);
    if (!clContent) continue;

    // correctLinesを解析
    const correctLines = [];
    const valRegex = /"((?:[^"\\]|\\.)*)"/g;
    let valMatch;
    while ((valMatch = valRegex.exec(clContent)) !== null) {
      correctLines.push(decode(valMatch[1]));
    }

    // 必要な答えを収集
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

    const candidatesObj = extractObject(block, braceIdx);
    if (!candidatesObj) continue;

    // 現在の値を取得
    const currentValues = extractStringValues(candidatesObj);

    // 不足分
    const missing = [...neededAnswers].filter(a => !currentValues.has(a));
    if (missing.length === 0 || missing.length > 25) continue;

    // candidatesを更新
    let newCandidatesObj;
    const absStartIdx = start + braceIdx;

    if (candidatesObj.includes('"others"')) {
      const othersIdx = candidatesObj.indexOf('"others"');
      if (othersIdx === -1) continue;
      
      const othersContent = extractArrayContent(candidatesObj, othersIdx);
      if (!othersContent) continue;
      
      // 既存のothers値を取得
      const existingOthers = [];
      const exValRegex = /"((?:[^"\\]|\\.)*)"/g;
      let exValMatch;
      while ((exValMatch = exValRegex.exec(othersContent)) !== null) {
        existingOthers.push(decode(exValMatch[1]));
      }

      // 新しい値を追加
      const newOthers = [...existingOthers];
      for (const m of missing) {
        if (!existingOthers.includes(m) && !newOthers.includes(m)) {
          newOthers.push(m);
        }
      }

      if (newOthers.length > 70) continue;

      // others配列全体を置換
      const othersStartBracket = candidatesObj.indexOf('[', othersIdx);
      const othersEndBracket = othersStartBracket + othersContent.length + 1; // +1 for closing bracket? No, length is content
      // We need exact indices. extractArrayContent returns substring.
      // Re-find the bracket
      
      // Better approach: Find the full bracketed string again
      let depth = 0;
      let inStr = false;
      let esc = false;
      let endBracketIdx = -1;
      
      for (let k = othersStartBracket; k < candidatesObj.length; k++) {
         const ch = candidatesObj[k];
         if (esc) { esc = false; continue; }
         if (ch === '\\') { esc = true; continue; }
         if (ch === '"') { inStr = !inStr; continue; }
         if (!inStr) {
           if (ch === '[') depth++;
           if (ch === ']') {
             depth--;
             if (depth === 0) {
               endBracketIdx = k;
               break;
             }
           }
         }
      }
      
      if (endBracketIdx === -1) continue;

      const newOthersStr = `[${newOthers.map(o => `"${escapeForJson(o)}"`).join(', ')}]`;
      newCandidatesObj = candidatesObj.substring(0, othersStartBracket) + newOthersStr + candidatesObj.substring(endBracketIdx + 1);

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

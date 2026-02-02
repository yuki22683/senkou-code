// candidatesフィールドが存在しないエクササイズに追加するスクリプト v2
import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalAdded = 0;

function decode(s) {
  return s.replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
}

function extractAnswers(holeyLine, correctLine) {
  const answers = [];
  if (!holeyLine.includes('___')) return answers;
  const trimmed = holeyLine.trim();
  if (trimmed.startsWith('#') || trimmed.startsWith('//') || trimmed.startsWith(';') ||
      trimmed.startsWith('--') || trimmed.startsWith('/*') || trimmed.startsWith('*')) {
    return answers;
  }

  const parts = holeyLine.split('___');
  let idx = 0;
  for (let i = 0; i < parts.length - 1; i++) {
    idx += parts[i].length;
    let answerEnd;
    if (parts[i + 1].length > 0) {
      const nextChar = parts[i + 1][0];
      answerEnd = correctLine.indexOf(nextChar, idx);
      if (answerEnd === -1) answerEnd = correctLine.length;
    } else {
      answerEnd = correctLine.length;
    }
    const answer = correctLine.substring(idx, answerEnd).trim();
    if (answer && answer.length > 0 && answer.length <= 40) {
      answers.push(answer);
    }
    idx = answerEnd;
  }
  return answers;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let fileAdded = 0;

  // "id": で始まるエクササイズを見つける
  // testCasesの直前にcandidatesがなければ追加
  const testCasesPattern = /"testCases":\s*\[/g;
  let match;

  while ((match = testCasesPattern.exec(content)) !== null) {
    const testCasesPos = match.index;

    // testCasesの前100文字程度を確認してcandidatesがあるか
    const before = content.substring(Math.max(0, testCasesPos - 200), testCasesPos);
    if (before.includes('"candidates"')) continue;

    // このエクササイズのholeyCodeとcorrectLinesを見つける
    // testCasesの前にある最後のholeyCodeとcorrectLinesを探す
    const exerciseSection = content.substring(0, testCasesPos);

    // 最後のholeyCodeを探す
    let holeyIdx = exerciseSection.lastIndexOf('"holeyCode"');
    if (holeyIdx === -1) continue;

    const holeyMatch = content.substring(holeyIdx).match(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/);
    if (!holeyMatch) continue;

    // 最後のcorrectLinesを探す
    let correctLinesIdx = exerciseSection.lastIndexOf('"correctLines"');
    if (correctLinesIdx === -1) continue;

    const correctLinesMatch = content.substring(correctLinesIdx).match(/"correctLines":\s*\[([\s\S]*?)\]/);
    if (!correctLinesMatch) continue;

    const holeyCode = decode(holeyMatch[1]);
    const holeyLines = holeyCode.split('\n');

    // correctLinesを解析
    const correctLinesStr = correctLinesMatch[1];
    const items = [];
    let depth = 0, start = 0, inStr = false, esc = false;
    for (let j = 0; j < correctLinesStr.length; j++) {
      const ch = correctLinesStr[j];
      if (esc) { esc = false; continue; }
      if (ch === '\\') { esc = true; continue; }
      if (ch === '"' && depth === 0) { inStr = !inStr; continue; }
      if (!inStr && ch === ',' && depth === 0) {
        items.push(correctLinesStr.substring(start, j).trim());
        start = j + 1;
      }
    }
    if (start < correctLinesStr.length) items.push(correctLinesStr.substring(start).trim());

    const correctLines = items.map(item => {
      const m = item.match(/^"((?:[^"\\]|\\.)*)"/);
      return m ? decode(m[1]) : '';
    });

    // 答えを収集
    const allAnswers = new Set();
    for (let j = 0; j < holeyLines.length && j < correctLines.length; j++) {
      const answers = extractAnswers(holeyLines[j], correctLines[j]);
      answers.forEach(a => allAnswers.add(a));
    }

    if (allAnswers.size === 0) continue;

    // candidatesを生成
    const escapeStr = s => s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const answersArray = [...allAnswers];
    const candidatesStr = `"candidates": {\n          "keywords": [],\n          "others": [${answersArray.map(a => `"${escapeStr(a)}"`).join(', ')}]\n        },\n        `;

    // testCasesの直前に挿入
    content = content.substring(0, testCasesPos) + candidatesStr + content.substring(testCasesPos);

    fileAdded++;
    modified = true;

    // パターンのlastIndexを更新
    testCasesPattern.lastIndex = testCasesPos + candidatesStr.length + 20;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
  }
  return fileAdded;
}

for (const file of files) {
  const filePath = path.join(dir, file);
  const added = processFile(filePath);
  if (added > 0) {
    console.log(`${file}: ${added}件追加`);
    totalAdded += added;
  }
}

console.log(`\n合計: ${totalAdded}件`);

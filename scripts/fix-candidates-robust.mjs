// より堅牢なcandidates修正スクリプト
import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;

function decode(s) {
  return s.replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
}

// より堅牢な答え抽出
function extractAnswers(holeyLine, correctLine) {
  const answers = [];
  if (!holeyLine.includes('___')) return answers;

  const trimmed = holeyLine.trim();
  if (trimmed.startsWith('#') || trimmed.startsWith('//') || trimmed.startsWith(';') ||
      trimmed.startsWith('--') || trimmed.startsWith('/*') || trimmed.startsWith('*') ||
      trimmed.startsWith('{-') || trimmed.startsWith('<!--')) {
    return answers;
  }

  // ___を一つずつ処理
  let hIdx = 0, cIdx = 0;

  while (hIdx < holeyLine.length) {
    // 次の___を探す
    const blankIdx = holeyLine.indexOf('___', hIdx);
    if (blankIdx === -1) break;

    // ___の前の固定テキストをスキップ
    const prefixLen = blankIdx - hIdx;
    cIdx += prefixLen;
    hIdx = blankIdx + 3; // ___をスキップ

    // ___の後の最初の文字を取得
    const suffixChar = holeyLine[hIdx];

    // 答えの終わりを見つける
    let answerEnd;
    if (suffixChar === undefined) {
      // 行末まで
      answerEnd = correctLine.length;
    } else if (suffixChar === '_') {
      // 連続する___
      // 次の非___文字を探す
      let nextNonBlank = hIdx;
      while (holeyLine.substring(nextNonBlank, nextNonBlank + 3) === '___') {
        nextNonBlank += 3;
      }
      const nextChar = holeyLine[nextNonBlank];
      if (nextChar === undefined) {
        answerEnd = correctLine.length;
      } else {
        answerEnd = correctLine.indexOf(nextChar, cIdx);
        if (answerEnd === -1) answerEnd = correctLine.length;
      }
    } else {
      // 次の固定文字を探す
      answerEnd = correctLine.indexOf(suffixChar, cIdx);
      if (answerEnd === -1) answerEnd = correctLine.length;
    }

    const answer = correctLine.substring(cIdx, answerEnd).trim();
    if (answer && answer.length > 0 && answer.length <= 40) {
      answers.push(answer);
    }

    cIdx = answerEnd;
  }

  return answers;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let fileFixed = 0;

  const holeyPattern = /"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;
  const holeyMatches = [...content.matchAll(holeyPattern)];

  for (let i = 0; i < holeyMatches.length; i++) {
    const holeyCode = decode(holeyMatches[i][1]);
    const holeyLines = holeyCode.split('\n');

    const exerciseStart = holeyMatches[i].index;
    const exerciseEnd = (i + 1 < holeyMatches.length) ? holeyMatches[i + 1].index : content.length;
    const exerciseContent = content.substring(exerciseStart, exerciseEnd);

    // correctLinesを取得
    const correctLinesMatch = exerciseContent.match(/"correctLines":\s*\[([\s\S]*?)\]/);
    if (!correctLinesMatch) continue;

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

    // candidatesを探す
    const candidatesMatch = exerciseContent.match(/"candidates":\s*\{([\s\S]*?)\}/);
    if (!candidatesMatch) continue;

    // 現在の値を収集
    const currentValues = new Set();
    const valuePattern = /:\s*\[([\s\S]*?)\]/g;
    let valueMatch;
    while ((valueMatch = valuePattern.exec(candidatesMatch[1])) !== null) {
      const items = valueMatch[1].match(/"([^"]+)"/g);
      if (items) items.forEach(item => currentValues.add(item.replace(/"/g, '')));
    }

    // 不足分
    const missing = [...allAnswers].filter(a => !currentValues.has(a));
    if (missing.length === 0 || missing.length > 20) continue;

    // othersに追加
    const escapeStr = s => s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const globalCandidatesStart = exerciseStart + candidatesMatch.index;
    const candidatesFullMatch = content.substring(globalCandidatesStart).match(/"candidates":\s*\{[\s\S]*?\}/);
    if (!candidatesFullMatch) continue;

    const oldCandidates = candidatesFullMatch[0];
    let newCandidates;

    if (oldCandidates.includes('"others"')) {
      const othersMatch = oldCandidates.match(/"others":\s*\[([\s\S]*?)\]/);
      if (othersMatch) {
        const existing = (othersMatch[1].match(/"([^"]+)"/g) || []).map(s => s.replace(/"/g, ''));
        const newOthers = [...new Set([...existing, ...missing])];
        const newOthersStr = `"others": [${newOthers.map(o => `"${escapeStr(o)}"`).join(', ')}]`;
        newCandidates = oldCandidates.replace(/"others":\s*\[[\s\S]*?\]/, newOthersStr);
      }
    } else {
      const insertIdx = oldCandidates.lastIndexOf('}');
      const newOthersStr = `,\n          "others": [${missing.map(o => `"${escapeStr(o)}"`).join(', ')}]`;
      newCandidates = oldCandidates.substring(0, insertIdx) + newOthersStr + '\n        }';
    }

    if (newCandidates && newCandidates !== oldCandidates) {
      content = content.substring(0, globalCandidatesStart) + newCandidates +
        content.substring(globalCandidatesStart + oldCandidates.length);
      fileFixed++;
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
  }
  return fileFixed;
}

for (const file of files) {
  const filePath = path.join(dir, file);
  const fixed = processFile(filePath);
  if (fixed > 0) {
    console.log(`${file}: ${fixed}件`);
    totalFixed += fixed;
  }
}

console.log(`\n合計: ${totalFixed}件`);

// 最終版: 全ファイルのcandidatesを修正
import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;

function decode(s) {
  return s.replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
}

function escapeStr(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function extractAnswers(holeyLine, correctLine) {
  const answers = [];
  if (!holeyLine.includes('___')) return answers;

  const trimmed = holeyLine.trim();
  if (trimmed.startsWith('#') || trimmed.startsWith('//') || trimmed.startsWith(';') ||
      trimmed.startsWith('--') || trimmed.startsWith('/*') || trimmed.startsWith('*')) {
    return answers;
  }

  let hIdx = 0, cIdx = 0;
  while (hIdx < holeyLine.length && cIdx < correctLine.length) {
    const blankIdx = holeyLine.indexOf('___', hIdx);
    if (blankIdx === -1) break;

    // ___の前の固定文字をスキップ
    const prefix = holeyLine.substring(hIdx, blankIdx);
    cIdx += prefix.length;
    hIdx = blankIdx + 3;

    // 連続する___を処理
    while (holeyLine.substring(hIdx, hIdx + 3) === '___') hIdx += 3;

    // 次の固定文字
    const nextChar = holeyLine[hIdx];
    let answerEnd;

    if (nextChar === undefined) {
      answerEnd = correctLine.length;
    } else {
      answerEnd = correctLine.indexOf(nextChar, cIdx);
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

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let fileFixed = 0;

  // 各holeyCodeとcorrectLinesのペアを処理
  const holeyMatches = [...content.matchAll(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g)];

  for (let i = 0; i < holeyMatches.length; i++) {
    // 毎回ファイルを読み直す（前回の変更を反映）
    content = fs.readFileSync(filePath, 'utf8');

    const holeyMatch = content.match(new RegExp(`"holeyCode":\\s*"((?:[^"\\\\]|\\\\.)*)"`, 'g'));
    if (!holeyMatch || !holeyMatch[i]) continue;

    // このエクササイズの範囲を特定
    const holeyIdx = content.indexOf(holeyMatch[i]);
    const nextHoleyIdx = holeyMatch[i + 1] ? content.indexOf(holeyMatch[i + 1]) : content.length;

    const exerciseSection = content.substring(holeyIdx, nextHoleyIdx);

    // holeyCodeをデコード
    const holeyCodeMatch = exerciseSection.match(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/);
    if (!holeyCodeMatch) continue;
    const holeyCode = decode(holeyCodeMatch[1]);
    const holeyLines = holeyCode.split('\n');

    // correctLinesを取得
    const correctLinesMatch = exerciseSection.match(/"correctLines":\s*\[([\s\S]*?)\]/);
    if (!correctLinesMatch) continue;

    // correctLinesを解析
    const items = [];
    const clStr = correctLinesMatch[1];
    let depth = 0, start = 0, inStr = false, esc = false;
    for (let j = 0; j < clStr.length; j++) {
      const ch = clStr[j];
      if (esc) { esc = false; continue; }
      if (ch === '\\') { esc = true; continue; }
      if (ch === '"' && depth === 0) { inStr = !inStr; continue; }
      if (!inStr && ch === ',' && depth === 0) {
        items.push(clStr.substring(start, j).trim());
        start = j + 1;
      }
    }
    if (start < clStr.length) items.push(clStr.substring(start).trim());

    const correctLines = items.map(item => {
      const m = item.match(/^"((?:[^"\\]|\\.)*)"/);
      return m ? decode(m[1]) : '';
    });

    // 答えを収集
    const neededAnswers = new Set();
    for (let j = 0; j < holeyLines.length && j < correctLines.length; j++) {
      const answers = extractAnswers(holeyLines[j], correctLines[j]);
      answers.forEach(a => neededAnswers.add(a));
    }

    if (neededAnswers.size === 0) continue;

    // candidatesを探す
    const candidatesMatch = exerciseSection.match(/"candidates":\s*\{([\s\S]*?)\}/);
    if (!candidatesMatch) continue;

    // 現在の値を収集
    const currentValues = new Set();
    const arrayPattern = /:\s*\[([\s\S]*?)\]/g;
    let arrayMatch;
    while ((arrayMatch = arrayPattern.exec(candidatesMatch[1])) !== null) {
      const vals = arrayMatch[1].match(/"([^"]+)"/g);
      if (vals) vals.forEach(v => currentValues.add(v.replace(/"/g, '')));
    }

    // 不足分
    const missing = [...neededAnswers].filter(a => !currentValues.has(a));
    if (missing.length === 0 || missing.length > 15) continue;

    // candidatesを更新
    const candidatesFullMatch = exerciseSection.match(/"candidates":\s*\{[\s\S]*?\}/);
    if (!candidatesFullMatch) continue;

    const oldCandidates = candidatesFullMatch[0];
    let newCandidates;

    if (oldCandidates.includes('"others"')) {
      const othersMatch = oldCandidates.match(/"others":\s*\[([\s\S]*?)\]/);
      if (!othersMatch) continue;

      const existingOthers = (othersMatch[1].match(/"([^"]+)"/g) || []).map(s => s.replace(/"/g, ''));
      const newOthers = [...new Set([...existingOthers, ...missing])];
      if (newOthers.length > 40) continue;

      const newOthersStr = `"others": [${newOthers.map(o => `"${escapeStr(o)}"`).join(', ')}]`;
      newCandidates = oldCandidates.replace(/"others":\s*\[[\s\S]*?\]/, newOthersStr);
    } else {
      const insertIdx = oldCandidates.lastIndexOf('}');
      const newOthersStr = `,\n          "others": [${missing.map(o => `"${escapeStr(o)}"`).join(', ')}]`;
      newCandidates = oldCandidates.substring(0, insertIdx) + newOthersStr + '\n        }';
    }

    if (newCandidates && newCandidates !== oldCandidates) {
      // このエクササイズのcandidatesの絶対位置を計算
      const absOldCandidatesIdx = holeyIdx + exerciseSection.indexOf(oldCandidates);
      content = content.substring(0, absOldCandidatesIdx) + newCandidates +
                content.substring(absOldCandidatesIdx + oldCandidates.length);
      fs.writeFileSync(filePath, content);
      fileFixed++;
    }
  }

  if (fileFixed > 0) {
    console.log(`${file}: ${fileFixed}件`);
    totalFixed += fileFixed;
  }
}

console.log(`\n合計: ${totalFixed}件`);

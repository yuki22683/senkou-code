// 全エクササイズのcandidatesを自動修正するスクリプト（v4 - 繰り返し処理）
import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;

function decode(s) {
  return s
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\');
}

function extractAnswersFromLine(holeyLine, correctLine) {
  const answers = [];
  const blankPositions = [];
  let searchIdx = 0;
  while (true) {
    const idx = holeyLine.indexOf('___', searchIdx);
    if (idx === -1) break;
    blankPositions.push(idx);
    searchIdx = idx + 3;
  }

  if (blankPositions.length === 0) return answers;

  let lastEnd = 0;
  for (let i = 0; i < blankPositions.length; i++) {
    const blankStart = blankPositions[i];
    const blankEnd = blankStart + 3;
    const prefix = holeyLine.substring(lastEnd, blankStart);
    let suffixEnd = (i + 1 < blankPositions.length) ? blankPositions[i + 1] : holeyLine.length;
    const suffix = holeyLine.substring(blankEnd, suffixEnd);
    let correctStart = lastEnd + prefix.length;
    let correctEnd;
    if (suffix.length > 0) {
      const suffixIdx = correctLine.indexOf(suffix, correctStart);
      correctEnd = suffixIdx !== -1 ? suffixIdx : correctLine.length;
    } else {
      correctEnd = correctLine.length;
    }
    const answer = correctLine.substring(correctStart, correctEnd);
    if (answer && answer.trim()) {
      answers.push(answer.trim());
    }
    lastEnd = blankEnd;
  }
  return answers;
}

function extractAllAnswers(holeyCode, correctCode) {
  const holeyLines = holeyCode.split('\n');
  const correctLines = correctCode.split('\n');
  const allAnswers = new Set();
  for (let i = 0; i < holeyLines.length && i < correctLines.length; i++) {
    const holeyLine = holeyLines[i];
    const correctLine = correctLines[i];
    const trimmed = holeyLine.trim();
    if (trimmed.startsWith('#') || trimmed.startsWith('//') || trimmed.startsWith('--') ||
        trimmed.startsWith('/*') || trimmed.startsWith('*') || trimmed.startsWith(';') ||
        trimmed.startsWith('{-') || trimmed.startsWith('<!--') || trimmed.startsWith('rem ')) {
      continue;
    }
    if (!holeyLine.includes('___')) continue;
    const answers = extractAnswersFromLine(holeyLine, correctLine);
    answers.forEach(a => allAnswers.add(a));
  }
  return [...allAnswers];
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let fixCount = 0;

  const holeyCodeRegex = /"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;
  const correctCodeRegex = /"correctCode":\s*"((?:[^"\\]|\\.)*)"/g;

  const holeyMatches = [...content.matchAll(holeyCodeRegex)];
  const correctMatches = [...content.matchAll(correctCodeRegex)];

  for (let i = 0; i < holeyMatches.length && i < correctMatches.length; i++) {
    const holeyCode = decode(holeyMatches[i][1]);
    const correctCode = decode(correctMatches[i][1]);
    const neededAnswers = extractAllAnswers(holeyCode, correctCode);
    if (neededAnswers.length === 0) continue;

    const exerciseStart = Math.min(holeyMatches[i].index, correctMatches[i].index);
    const nextExerciseStart = (i + 1 < holeyMatches.length)
      ? Math.min(holeyMatches[i + 1].index, correctMatches[i + 1].index)
      : content.length;
    const exerciseContent = content.substring(exerciseStart, nextExerciseStart);

    const candidatesIdx = exerciseContent.indexOf('"candidates":');
    if (candidatesIdx === -1) continue;

    let braceCount = 0, candidatesEnd = candidatesIdx, started = false;
    for (let j = candidatesIdx; j < exerciseContent.length; j++) {
      if (exerciseContent[j] === '{') { braceCount++; started = true; }
      else if (exerciseContent[j] === '}') {
        braceCount--;
        if (started && braceCount === 0) { candidatesEnd = j + 1; break; }
      }
    }

    const candidatesStr = exerciseContent.substring(candidatesIdx, candidatesEnd);
    const currentValues = new Set();
    const valueRegex = /:\s*\[\s*([\s\S]*?)\s*\]/g;
    let valueMatch;
    while ((valueMatch = valueRegex.exec(candidatesStr)) !== null) {
      const items = valueMatch[1].match(/"([^"]+)"/g);
      if (items) items.forEach(item => currentValues.add(item.replace(/"/g, '')));
    }

    const missing = neededAnswers.filter(a => !currentValues.has(a));
    if (missing.length > 0) {
      const othersMatch = candidatesStr.match(/"others":\s*\[([\s\S]*?)\]/);
      let newCandidatesStr;
      if (othersMatch) {
        const existingOthers = (othersMatch[1].match(/"([^"]+)"/g) || []).map(s => s.replace(/"/g, ''));
        const newOthers = [...new Set([...existingOthers, ...missing])];
        const newOthersArray = `"others": [${newOthers.map(o => `"${o.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`).join(', ')}]`;
        newCandidatesStr = candidatesStr.replace(/"others":\s*\[[\s\S]*?\]/, newOthersArray);
      } else {
        const insertIdx = candidatesStr.lastIndexOf('}');
        const newOthersArray = `,\n          "others": [${missing.map(o => `"${o.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`).join(', ')}]`;
        newCandidatesStr = candidatesStr.substring(0, insertIdx) + newOthersArray + '\n        }';
      }

      const globalCandidatesStart = exerciseStart + candidatesIdx;
      const globalCandidatesEnd = exerciseStart + candidatesEnd;
      content = content.substring(0, globalCandidatesStart) + newCandidatesStr + content.substring(globalCandidatesEnd);
      fixCount++;
      modified = true;
      break; // インデックスが変わるので再処理
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
  }
  return fixCount;
}

// 各ファイルを繰り返し処理
for (const file of files) {
  const filePath = path.join(dir, file);
  let fileFixed = 0;
  let pass = 0;
  while (true) {
    pass++;
    const fixed = processFile(filePath);
    if (fixed === 0) break;
    fileFixed += fixed;
    if (pass > 100) { console.log(`${file}: 無限ループ防止で停止`); break; }
  }
  if (fileFixed > 0) {
    console.log(`${file}: ${fileFixed}件修正`);
    totalFixed += fileFixed;
  }
}

console.log(`\n合計: ${totalFixed}件修正`);

// candidatesを安全に修正するスクリプト
import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;

function decode(s) {
  return s.replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
}

function extractAnswersFromLine(holeyLine, correctLine) {
  const answers = [];
  let hIdx = 0, cIdx = 0;

  while (hIdx < holeyLine.length && cIdx < correctLine.length) {
    if (holeyLine.substring(hIdx, hIdx + 3) === '___') {
      // ___の開始
      const answerStart = cIdx;
      hIdx += 3;

      // 次の固定文字を探す
      if (hIdx >= holeyLine.length) {
        // 行末まで
        answers.push(correctLine.substring(answerStart).trim());
        break;
      }

      const nextChar = holeyLine[hIdx];
      if (nextChar === '_') continue; // 連続___

      // correctLineで対応する位置を探す
      const foundIdx = correctLine.indexOf(nextChar, cIdx);
      if (foundIdx !== -1) {
        const answer = correctLine.substring(answerStart, foundIdx).trim();
        if (answer && answer.length <= 50) answers.push(answer);
        cIdx = foundIdx;
      }
    } else {
      hIdx++;
      cIdx++;
    }
  }

  return answers.filter(a => a && a.length > 0 && a.length <= 50);
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath);

  const holeyRegex = /"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;
  const correctRegex = /"correctCode":\s*"((?:[^"\\]|\\.)*)"/g;

  const holeyMatches = [...content.matchAll(holeyRegex)];
  const correctMatches = [...content.matchAll(correctRegex)];

  let fixCount = 0;

  for (let i = 0; i < holeyMatches.length && i < correctMatches.length; i++) {
    try {
      const holeyCode = decode(holeyMatches[i][1]);
      const correctCode = decode(correctMatches[i][1]);

      // 答えを抽出
      const holeyLines = holeyCode.split('\n');
      const correctLines = correctCode.split('\n');
      const neededAnswers = new Set();

      for (let j = 0; j < holeyLines.length && j < correctLines.length; j++) {
        const hl = holeyLines[j], cl = correctLines[j];
        const trimmed = hl.trim();
        if (trimmed.startsWith('#') || trimmed.startsWith('//') || trimmed.startsWith(';') ||
            trimmed.startsWith('--') || trimmed.startsWith('/*') || trimmed.startsWith('*')) continue;
        if (!hl.includes('___')) continue;

        const answers = extractAnswersFromLine(hl, cl);
        answers.forEach(a => neededAnswers.add(a));
      }

      if (neededAnswers.size === 0) continue;

      // candidatesを探す
      const start = Math.min(holeyMatches[i].index, correctMatches[i].index);
      const end = (i + 1 < holeyMatches.length)
        ? Math.min(holeyMatches[i + 1].index, correctMatches[i + 1].index)
        : content.length;

      const section = content.substring(start, end);
      const candIdx = section.indexOf('"candidates":');
      if (candIdx === -1) continue;

      // candidates の終わり
      let braceCount = 0, candEnd = candIdx, found = false;
      for (let k = candIdx; k < section.length; k++) {
        if (section[k] === '{') braceCount++;
        else if (section[k] === '}') {
          braceCount--;
          if (braceCount === 0) { candEnd = k + 1; found = true; break; }
        }
      }
      if (!found) continue;

      const candStr = section.substring(candIdx, candEnd);

      // 現在の値を抽出
      const currentVals = new Set();
      const valMatches = candStr.matchAll(/:\s*\[([\s\S]*?)\]/g);
      for (const m of valMatches) {
        const items = m[1].match(/"([^"]+)"/g) || [];
        items.forEach(it => currentVals.add(it.replace(/"/g, '')));
      }

      // 不足分
      const missing = [...neededAnswers].filter(a => !currentVals.has(a));
      if (missing.length === 0 || missing.length > 15) continue;

      // othersに追加
      const othersMatch = candStr.match(/"others":\s*\[([\s\S]*?)\]/);
      let newCandStr;

      const esc = s => s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');

      if (othersMatch) {
        const existing = (othersMatch[1].match(/"([^"]+)"/g) || []).map(s => s.replace(/"/g, ''));
        if (existing.length > 100) continue; // 異常なデータをスキップ
        const newArr = [...new Set([...existing, ...missing])];
        if (newArr.length > 30) continue; // 多すぎる場合スキップ
        const newOthersStr = `"others": [${newArr.map(o => `"${esc(o)}"`).join(', ')}]`;
        newCandStr = candStr.replace(/"others":\s*\[[\s\S]*?\]/, newOthersStr);
      } else {
        const insertPos = candStr.lastIndexOf('}');
        const newOthersStr = `,\n          "others": [${missing.map(o => `"${esc(o)}"`).join(', ')}]`;
        newCandStr = candStr.substring(0, insertPos) + newOthersStr + '\n        }';
      }

      // 置換
      const globalStart = start + candIdx;
      const globalEnd = start + candEnd;
      content = content.substring(0, globalStart) + newCandStr + content.substring(globalEnd);

      fixCount++;
      console.log(`  ${fileName} ex${i + 1}: +${missing.length} [${missing.slice(0, 3).join(', ')}...]`);

      // ファイルを保存して次のパスで再処理
      fs.writeFileSync(filePath, content);
      return fixCount;

    } catch (e) {
      console.log(`  ${fileName} ex${i + 1}: エラー - ${e.message}`);
    }
  }

  return fixCount;
}

for (const file of files) {
  const filePath = path.join(dir, file);
  let fileTotal = 0;
  for (let pass = 0; pass < 50; pass++) {
    const fixed = processFile(filePath);
    if (fixed === 0) break;
    fileTotal += fixed;
  }
  if (fileTotal > 0) {
    console.log(`${file}: ${fileTotal}件`);
    totalFixed += fileTotal;
  }
}

console.log(`\n合計: ${totalFixed}件`);

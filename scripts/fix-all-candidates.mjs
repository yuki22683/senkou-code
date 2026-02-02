// 全エクササイズのcandidatesを自動修正するスクリプト
import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;

for (const file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  let modified = false;

  // 各エクササイズを処理
  const exerciseRegex = /(\{\s*"id":\s*"[^"]+",\s*"title":\s*"([^"]+)"[\s\S]*?"holeyCode":\s*"((?:[^"\\]|\\.)*)[\s\S]*?"correctCode":\s*"((?:[^"\\]|\\.)*)"[\s\S]*?"candidates":\s*\{\s*"keywords":\s*\[([\s\S]*?)\],\s*"others":\s*\[([\s\S]*?)\]\s*\})/g;

  let match;
  const replacements = [];

  while ((match = exerciseRegex.exec(content)) !== null) {
    const fullMatch = match[0];
    const title = match[2];
    const holeyCodeRaw = match[3];
    const correctCodeRaw = match[4];
    const keywordsStr = match[5];
    const othersStr = match[6];

    // デコード
    const decode = (s) => s
      .replace(/\\\\n/g, '\n')
      .replace(/\\n/g, '\n')
      .replace(/\\t/g, '\t')
      .replace(/\\"/g, '"')
      .replace(/\\\\/g, '\\');

    const holeyCode = decode(holeyCodeRaw);
    const correctCode = decode(correctCodeRaw);

    const holeyLines = holeyCode.split('\n');
    const correctLines = correctCode.split('\n');

    // 必要な答えを抽出
    const neededAnswers = new Set();

    for (let i = 0; i < holeyLines.length && i < correctLines.length; i++) {
      const holeyLine = holeyLines[i];
      const correctLine = correctLines[i];

      // コメント行はスキップ
      const trimmed = holeyLine.trim();
      if (trimmed.startsWith('#') || trimmed.startsWith('//') || trimmed.startsWith('--') ||
          trimmed.startsWith('/*') || trimmed.startsWith('*') || trimmed.startsWith(';') ||
          trimmed.startsWith('{-')) {
        continue;
      }

      // ___の数をカウント
      const blanks = (holeyLine.match(/___/g) || []).length;
      if (blanks === 0) continue;

      // 答えを抽出（簡易的なアプローチ）
      // holeyLineの___の位置とcorrectLineを比較
      let hIdx = 0;
      let cIdx = 0;

      while (hIdx < holeyLine.length && cIdx < correctLine.length) {
        if (holeyLine.substring(hIdx, hIdx + 3) === '___') {
          // ___の開始位置
          const answerStart = cIdx;
          // 次の固定文字を探す
          let nextFixedIdx = hIdx + 3;
          while (nextFixedIdx < holeyLine.length && holeyLine.substring(nextFixedIdx, nextFixedIdx + 3) === '___') {
            nextFixedIdx += 3;
          }

          let nextFixedChar = holeyLine[nextFixedIdx];
          let answerEnd = cIdx;

          if (nextFixedChar === undefined) {
            // 行末まで
            answerEnd = correctLine.length;
          } else {
            // 次の固定文字を探す
            let searchStart = cIdx;
            let found = false;
            for (let k = searchStart; k < correctLine.length; k++) {
              if (correctLine[k] === nextFixedChar) {
                answerEnd = k;
                found = true;
                break;
              }
            }
            if (!found) {
              answerEnd = correctLine.length;
            }
          }

          const answer = correctLine.substring(answerStart, answerEnd).trim();
          if (answer && answer !== '___') {
            neededAnswers.add(answer);
          }

          hIdx += 3;
          cIdx = answerEnd;
        } else {
          hIdx++;
          cIdx++;
        }
      }
    }

    // 現在のcandidates
    const currentKeywords = (keywordsStr.match(/"([^"]+)"/g) || []).map(s => s.replace(/"/g, ''));
    const currentOthers = (othersStr.match(/"([^"]+)"/g) || []).map(s => s.replace(/"/g, ''));
    const allCurrent = new Set([...currentKeywords, ...currentOthers]);

    // 不足している答えを追加
    const missing = [...neededAnswers].filter(a => !allCurrent.has(a));

    if (missing.length > 0) {
      // othersに追加
      const newOthers = [...currentOthers, ...missing];
      const newOthersStr = newOthers.map(o => `"${o}"`).join(', ');

      const newCandidates = `"candidates": {\n        "keywords": [${keywordsStr}],\n        "others": [${newOthersStr}]\n      }`;
      const oldCandidates = `"candidates": {\n        "keywords": [${keywordsStr}],\n        "others": [${othersStr}]\n      }`;

      // 置換をキューに追加
      replacements.push({ old: oldCandidates, new: newCandidates, title, missing });
      modified = true;
    }
  }

  // 置換を適用
  for (const r of replacements) {
    if (content.includes(r.old)) {
      content = content.replace(r.old, r.new);
      console.log(`${file}: "${r.title}" に ${r.missing.length}個追加: ${r.missing.join(', ')}`);
      totalFixed++;
    }
  }

  if (modified) {
    fs.writeFileSync(path.join(dir, file), content);
  }
}

console.log(`\n合計: ${totalFixed}件のエクササイズを修正`);

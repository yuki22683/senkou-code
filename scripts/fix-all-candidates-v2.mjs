// 全エクササイズのcandidatesを自動修正するスクリプト（改良版）
import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;
let totalMissing = 0;

// 文字列をデコード
function decode(s) {
  return s
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\');
}

// holeyCodeとcorrectCodeから必要な答えを抽出
function extractAnswers(holeyCode, correctCode) {
  const answers = [];
  const holeyLines = holeyCode.split('\n');
  const correctLines = correctCode.split('\n');

  for (let i = 0; i < holeyLines.length && i < correctLines.length; i++) {
    const holeyLine = holeyLines[i];
    const correctLine = correctLines[i];

    // コメント行はスキップ
    const trimmed = holeyLine.trim();
    if (trimmed.startsWith('#') || trimmed.startsWith('//') || trimmed.startsWith('--') ||
        trimmed.startsWith('/*') || trimmed.startsWith('*') || trimmed.startsWith(';') ||
        trimmed.startsWith('{-') || trimmed.startsWith('<!--')) {
      continue;
    }

    // ___がない行はスキップ
    if (!holeyLine.includes('___')) continue;

    // 行ごとに___と対応する答えを抽出
    let hIdx = 0;
    let cIdx = 0;

    while (hIdx < holeyLine.length) {
      if (holeyLine.substring(hIdx, hIdx + 3) === '___') {
        // ___の開始
        const answerStart = cIdx;

        // 次の固定文字を探す（___の後の文字）
        let nextHIdx = hIdx + 3;
        let nextFixedChar = holeyLine[nextHIdx];

        // correctLineで対応する位置を探す
        if (nextFixedChar === undefined) {
          // 行末まで
          const answer = correctLine.substring(answerStart).trim();
          if (answer) answers.push(answer);
          break;
        } else if (nextFixedChar === '_') {
          // 連続する___
          hIdx += 3;
          continue;
        } else {
          // 次の固定文字をcorrectLineで探す
          let foundIdx = correctLine.indexOf(nextFixedChar, answerStart);
          if (foundIdx === -1) foundIdx = correctLine.length;

          const answer = correctLine.substring(answerStart, foundIdx).trim();
          if (answer) answers.push(answer);

          cIdx = foundIdx;
          hIdx += 3;
        }
      } else {
        hIdx++;
        cIdx++;
      }
    }
  }

  return [...new Set(answers)];
}

// candidatesから全ての値を抽出
function getAllCandidates(candidatesObj) {
  const all = new Set();
  for (const key in candidatesObj) {
    if (Array.isArray(candidatesObj[key])) {
      candidatesObj[key].forEach(v => all.add(v));
    }
  }
  return all;
}

for (const file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  let modified = false;

  // exercisesの配列部分を抽出して処理
  const exercisesMatch = content.match(/exercises:\s*\[([\s\S]*)\]\s*\}/);
  if (!exercisesMatch) continue;

  // 個別のエクササイズオブジェクトを処理
  // holeyCode, correctCode, candidates を探す
  const holeyCodeRegex = /"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;
  const correctCodeRegex = /"correctCode":\s*"((?:[^"\\]|\\.)*)"/g;

  let holeyMatches = [...content.matchAll(holeyCodeRegex)];
  let correctMatches = [...content.matchAll(correctCodeRegex)];

  if (holeyMatches.length !== correctMatches.length) {
    console.log(`${file}: holeyCodeとcorrectCodeの数が一致しません`);
    continue;
  }

  for (let i = 0; i < holeyMatches.length; i++) {
    const holeyCode = decode(holeyMatches[i][1]);
    const correctCode = decode(correctMatches[i][1]);

    // 必要な答えを抽出
    const neededAnswers = extractAnswers(holeyCode, correctCode);
    if (neededAnswers.length === 0) continue;

    // このエクササイズのcandidatesを探す
    const holeyIdx = holeyMatches[i].index;
    const correctIdx = correctMatches[i].index;

    // candidatesの位置を特定（correctCodeの後に来る）
    const searchStart = correctIdx;
    const candidatesStart = content.indexOf('"candidates":', searchStart);
    if (candidatesStart === -1 || candidatesStart > searchStart + 5000) {
      // candidatesが見つからない場合、追加が必要
      totalMissing++;
      continue;
    }

    // candidates オブジェクトを抽出
    let braceCount = 0;
    let candidatesEnd = candidatesStart;
    let started = false;

    for (let j = candidatesStart; j < content.length; j++) {
      if (content[j] === '{') {
        braceCount++;
        started = true;
      } else if (content[j] === '}') {
        braceCount--;
        if (started && braceCount === 0) {
          candidatesEnd = j + 1;
          break;
        }
      }
    }

    const candidatesStr = content.substring(candidatesStart, candidatesEnd);

    // 現在のcandidatesの値を全て抽出
    const valueMatches = candidatesStr.matchAll(/"([^"]+)"/g);
    const currentValues = new Set();
    for (const m of valueMatches) {
      if (m[1] !== 'candidates' && m[1] !== 'keywords' && m[1] !== 'others' &&
          m[1] !== 'functions' && m[1] !== 'variables' && m[1] !== 'strings' &&
          m[1] !== 'operators' && m[1] !== 'types' && m[1] !== 'numbers' &&
          m[1] !== 'methods' && m[1] !== 'properties' && m[1] !== 'symbols' &&
          m[1] !== 'identifiers' && m[1] !== 'literals' && m[1] !== 'values') {
        currentValues.add(m[1]);
      }
    }

    // 不足している答え
    const missing = neededAnswers.filter(a => !currentValues.has(a));

    if (missing.length > 0) {
      // othersに追加（なければ作成）
      if (candidatesStr.includes('"others"')) {
        // othersの配列に追加
        const othersMatch = candidatesStr.match(/"others":\s*\[([\s\S]*?)\]/);
        if (othersMatch) {
          const oldOthers = othersMatch[0];
          const othersContent = othersMatch[1].trim();
          const existingOthers = (othersContent.match(/"[^"]+"/g) || []).map(s => s.replace(/"/g, ''));
          const newOthers = [...existingOthers, ...missing];
          const newOthersStr = `"others": [${newOthers.map(o => `"${o}"`).join(', ')}]`;

          const newCandidatesStr = candidatesStr.replace(oldOthers, newOthersStr);
          content = content.substring(0, candidatesStart) + newCandidatesStr + content.substring(candidatesEnd);

          console.log(`${file} exercise ${i + 1}: ${missing.length}個追加 - ${missing.slice(0, 5).join(', ')}${missing.length > 5 ? '...' : ''}`);
          totalFixed++;
          modified = true;

          // インデックスを再計算
          holeyMatches = [...content.matchAll(holeyCodeRegex)];
          correctMatches = [...content.matchAll(correctCodeRegex)];
        }
      } else {
        // othersフィールドを追加
        const insertPos = candidatesEnd - 1; // } の前
        const othersStr = `,\n          "others": [${missing.map(o => `"${o}"`).join(', ')}]`;
        content = content.substring(0, insertPos) + othersStr + content.substring(insertPos);

        console.log(`${file} exercise ${i + 1}: othersを追加 - ${missing.slice(0, 5).join(', ')}${missing.length > 5 ? '...' : ''}`);
        totalFixed++;
        modified = true;

        // インデックスを再計算
        holeyMatches = [...content.matchAll(holeyCodeRegex)];
        correctMatches = [...content.matchAll(correctCodeRegex)];
      }
    }
  }

  if (modified) {
    fs.writeFileSync(path.join(dir, file), content);
  }
}

console.log(`\n修正: ${totalFixed}件`);
console.log(`candidatesなし: ${totalMissing}件`);

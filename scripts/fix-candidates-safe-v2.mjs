// 安全なcandidates修正スクリプト v2
// バグ修正: エスケープの二重化を防止、一度だけ処理
import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;

// JSONエスケープされた文字列をデコード
function decode(s) {
  if (!s) return '';
  return s
    .replace(/\\\\"/g, '\x00QUOTE\x00')  // 一時的にエスケープされた引用符を保護
    .replace(/\\\\/g, '\x00BACKSLASH\x00')  // 一時的にエスケープされたバックスラッシュを保護
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"')
    .replace(/\x00BACKSLASH\x00/g, '\\')
    .replace(/\x00QUOTE\x00/g, '"');
}

// 文字列をJSONエスケープ（新規追加用）
function escapeForJson(s) {
  return s
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\t/g, '\\t');
}

// holeyLineとcorrectLineを比較して答えを抽出
function extractAnswers(holeyLine, correctLine) {
  const answers = [];
  if (!holeyLine || !correctLine) return answers;
  if (!holeyLine.includes('___')) return answers;

  // コメント行はスキップ
  const trimmed = holeyLine.trim();
  if (trimmed.startsWith('#') || trimmed.startsWith('//') || trimmed.startsWith(';') ||
      trimmed.startsWith('--') || trimmed.startsWith('/*') || trimmed.startsWith('*') ||
      trimmed.startsWith('<!--') || trimmed.startsWith('rem ') || trimmed.startsWith('REM ')) {
    return answers;
  }

  let hIdx = 0, cIdx = 0;
  while (hIdx < holeyLine.length && cIdx < correctLine.length) {
    const blankIdx = holeyLine.indexOf('___', hIdx);
    if (blankIdx === -1) break;

    // ___の前の固定部分をスキップ
    const prefix = holeyLine.substring(hIdx, blankIdx);
    cIdx += prefix.length;
    hIdx = blankIdx + 3;

    // 連続する___を処理
    while (holeyLine.substring(hIdx, hIdx + 3) === '___') hIdx += 3;

    // 次の固定文字を探す
    const nextChar = holeyLine[hIdx];
    let answerEnd;

    if (nextChar === undefined) {
      answerEnd = correctLine.length;
    } else {
      answerEnd = correctLine.indexOf(nextChar, cIdx);
      if (answerEnd === -1) answerEnd = correctLine.length;
    }

    const answer = correctLine.substring(cIdx, answerEnd).trim();
    if (answer && answer.length > 0 && answer.length <= 50) {
      answers.push(answer);
    }
    cIdx = answerEnd;
  }
  return answers;
}

// candidatesから全ての値を抽出（デコード済み）
function extractCandidateValues(candidatesStr) {
  const values = new Set();
  const arrayPattern = /:\s*\[([\s\S]*?)\]/g;
  let match;
  while ((match = arrayPattern.exec(candidatesStr)) !== null) {
    const items = match[1].match(/"((?:[^"\\]|\\.)*)"/g);
    if (items) {
      items.forEach(item => {
        const raw = item.slice(1, -1); // 引用符を除去
        values.add(decode(raw));
      });
    }
  }
  return values;
}

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let fileFixed = 0;
  let modified = false;

  // エクササイズを"id":で区切って処理
  const idPattern = /"id":\s*"[^"]+"/g;
  const idMatches = [...content.matchAll(idPattern)];

  for (let i = 0; i < idMatches.length; i++) {
    const exerciseStart = idMatches[i].index;
    const exerciseEnd = i + 1 < idMatches.length ? idMatches[i + 1].index : content.length;
    const exerciseContent = content.substring(exerciseStart, exerciseEnd);

    // holeyCodeを取得
    const holeyMatch = exerciseContent.match(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/);
    if (!holeyMatch) continue;

    const holeyCode = decode(holeyMatch[1]);
    const holeyLines = holeyCode.split('\n');

    // correctLinesを取得
    const correctLinesMatch = exerciseContent.match(/"correctLines":\s*\[([\s\S]*?)\]/);
    if (!correctLinesMatch) continue;

    // correctLinesを解析
    const clStr = correctLinesMatch[1];
    const correctLines = [];
    let inStr = false, escaped = false, start = 0;

    for (let j = 0; j < clStr.length; j++) {
      const ch = clStr[j];
      if (escaped) { escaped = false; continue; }
      if (ch === '\\') { escaped = true; continue; }
      if (ch === '"' && !inStr) { inStr = true; start = j + 1; continue; }
      if (ch === '"' && inStr) {
        correctLines.push(decode(clStr.substring(start, j)));
        inStr = false;
      }
    }

    // 必要な答えを収集
    const neededAnswers = new Set();
    for (let j = 0; j < holeyLines.length && j < correctLines.length; j++) {
      const answers = extractAnswers(holeyLines[j], correctLines[j]);
      answers.forEach(a => neededAnswers.add(a));
    }

    if (neededAnswers.size === 0) continue;

    // candidatesを探す
    const candidatesMatch = exerciseContent.match(/"candidates":\s*\{([\s\S]*?)\}/);
    if (!candidatesMatch) continue;

    // 現在の値を取得
    const currentValues = extractCandidateValues(candidatesMatch[1]);

    // 不足分を計算
    const missing = [...neededAnswers].filter(a => !currentValues.has(a));
    if (missing.length === 0 || missing.length > 20) continue;

    // candidatesを更新
    const fullCandidatesMatch = exerciseContent.match(/"candidates":\s*\{[\s\S]*?\}/);
    if (!fullCandidatesMatch) continue;

    const oldCandidates = fullCandidatesMatch[0];
    let newCandidates;

    if (oldCandidates.includes('"others"')) {
      // othersに追加
      const othersMatch = oldCandidates.match(/"others":\s*\[([\s\S]*?)\]/);
      if (!othersMatch) continue;

      // 既存のothersを取得
      const existingOthersRaw = othersMatch[1];
      const existingOthers = [];
      const otherItems = existingOthersRaw.match(/"((?:[^"\\]|\\.)*)"/g);
      if (otherItems) {
        otherItems.forEach(item => existingOthers.push(item.slice(1, -1)));
      }

      // 新しい値を追加（エスケープ済みの形で）
      const newOthersEscaped = [...existingOthers];
      for (const m of missing) {
        const escaped = escapeForJson(m);
        if (!existingOthers.includes(escaped)) {
          newOthersEscaped.push(escaped);
        }
      }

      if (newOthersEscaped.length > 60) continue;

      const newOthersStr = `"others": [${newOthersEscaped.map(o => `"${o}"`).join(', ')}]`;
      newCandidates = oldCandidates.replace(/"others":\s*\[[\s\S]*?\]/, newOthersStr);
    } else {
      // othersを新規追加
      const insertIdx = oldCandidates.lastIndexOf('}');
      const newOthersEscaped = missing.map(m => escapeForJson(m));
      const newOthersStr = `,\n          "others": [${newOthersEscaped.map(o => `"${o}"`).join(', ')}]`;
      newCandidates = oldCandidates.substring(0, insertIdx) + newOthersStr + '\n        }';
    }

    if (newCandidates && newCandidates !== oldCandidates) {
      // 絶対位置を計算
      const absOldCandidatesIdx = exerciseStart + exerciseContent.indexOf(oldCandidates);
      content = content.substring(0, absOldCandidatesIdx) + newCandidates +
                content.substring(absOldCandidatesIdx + oldCandidates.length);
      modified = true;
      fileFixed++;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`${file}: ${fileFixed}件修正`);
    totalFixed += fileFixed;
  }
}

console.log(`\n合計: ${totalFixed}件修正`);

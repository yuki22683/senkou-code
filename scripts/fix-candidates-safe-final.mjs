// 安全なcandidates修正スクリプト - 最終版
// 各ファイル修正後にTypeScript構文チェックを実行
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

// TypeScript構文チェック
function checkSyntax(filePath) {
  try {
    execSync(`npx tsc --noEmit "${filePath}"`, { stdio: 'pipe' });
    return true;
  } catch (e) {
    return false;
  }
}

// デコード関数（二重エスケープ対応）
function decode(s) {
  if (!s) return '';
  let result = s
    .replace(/\\\\/g, '\x00BACKSLASH\x00')
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"')
    .replace(/\x00BACKSLASH\x00/g, '\\');
  // 二重エスケープの場合は再度適用
  if (result.includes('\\n') || result.includes('\\t') || result.includes('\\"')) {
    result = result
      .replace(/\\\\/g, '\x00BACKSLASH\x00')
      .replace(/\\n/g, '\n')
      .replace(/\\t/g, '\t')
      .replace(/\\"/g, '"')
      .replace(/\x00BACKSLASH\x00/g, '\\');
  }
  return result;
}

// JSON用エスケープ
function escapeForJson(s) {
  return s
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\t/g, '\\t')
    .replace(/\r/g, '\\r');
}

// バランス考慮の括弧抽出
function extractBalanced(str, startIdx, openChar, closeChar) {
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = startIdx; i < str.length; i++) {
    const ch = str[i];
    if (escaped) { escaped = false; continue; }
    if (ch === '\\') { escaped = true; continue; }
    if (ch === '"') { inString = !inString; continue; }
    if (!inString) {
      if (ch === openChar) depth++;
      if (ch === closeChar) {
        depth--;
        if (depth === 0) return { content: str.substring(startIdx, i + 1), endIdx: i };
      }
    }
  }
  return null;
}

// 配列から値を抽出
function extractArrayValues(arrayStr) {
  const values = new Set();
  const pattern = /"((?:[^"\\]|\\.)*)"/g;
  let match;
  while ((match = pattern.exec(arrayStr)) !== null) {
    values.add(decode(match[1]));
  }
  return values;
}

// 答えを抽出
function extractAnswers(holeyLine, correctLine) {
  const answers = [];
  if (!holeyLine || !correctLine || !holeyLine.includes('___')) return answers;

  const trimmed = holeyLine.trim();
  const commentPrefixes = ['#', '//', ';', '--', '/*', '*', '<!--', 'rem ', 'REM ', '{-'];
  if (commentPrefixes.some(p => trimmed.startsWith(p))) return answers;

  let hIdx = 0, cIdx = 0;
  while (hIdx < holeyLine.length && cIdx < correctLine.length) {
    const blankIdx = holeyLine.indexOf('___', hIdx);
    if (blankIdx === -1) break;

    const prefix = holeyLine.substring(hIdx, blankIdx);
    cIdx += prefix.length;
    hIdx = blankIdx + 3;
    while (holeyLine.substring(hIdx, hIdx + 3) === '___') hIdx += 3;

    const nextChar = holeyLine[hIdx];
    let answerEnd = nextChar === undefined ? correctLine.length : correctLine.indexOf(nextChar, cIdx);
    if (answerEnd === -1) answerEnd = correctLine.length;

    const answer = correctLine.substring(cIdx, answerEnd).trim();
    if (answer && answer.length > 0 && answer.length <= 60) {
      answers.push(answer);
    }
    cIdx = answerEnd;
  }
  return answers;
}

// correctLinesをパース
function parseCorrectLines(block) {
  const idx = block.indexOf('"correctLines"');
  if (idx === -1) return null;

  const bracketIdx = block.indexOf('[', idx);
  if (bracketIdx === -1) return null;

  const result = extractBalanced(block, bracketIdx, '[', ']');
  if (!result) return null;

  const lines = [];
  let inStr = false, escaped = false, strStart = 0;
  for (let j = 1; j < result.content.length - 1; j++) {
    const ch = result.content[j];
    if (escaped) { escaped = false; continue; }
    if (ch === '\\') { escaped = true; continue; }
    if (ch === '"' && !inStr) { inStr = true; strStart = j + 1; continue; }
    if (ch === '"' && inStr) {
      lines.push(decode(result.content.substring(strStart, j)));
      inStr = false;
    }
  }
  return lines;
}

let totalFixed = 0;
let totalFiles = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  const originalContent = fs.readFileSync(filePath, 'utf8');
  let content = originalContent;
  let fileModified = false;
  let fileFixed = 0;

  const titleMatches = [...content.matchAll(/"title":\s*"([^"]+)"/g)];

  for (let i = 0; i < titleMatches.length; i++) {
    const start = titleMatches[i].index;
    const end = i + 1 < titleMatches.length ? titleMatches[i + 1].index : content.length;
    const block = content.substring(start, end);

    // holeyCode取得
    const holeyMatch = block.match(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/);
    if (!holeyMatch) continue;

    const holeyCode = decode(holeyMatch[1]);
    const holeyLines = holeyCode.split('\n');

    // correctLines取得
    const correctLines = parseCorrectLines(block);
    if (!correctLines) continue;

    // 必要な答えを収集
    const neededAnswers = new Set();
    for (let j = 0; j < holeyLines.length && j < correctLines.length; j++) {
      const answers = extractAnswers(holeyLines[j], correctLines[j]);
      answers.forEach(a => neededAnswers.add(a));
    }
    if (neededAnswers.size === 0) continue;

    // candidates検索
    const candidatesIdx = block.indexOf('"candidates"');
    if (candidatesIdx === -1) continue;

    const braceIdx = block.indexOf('{', candidatesIdx);
    if (braceIdx === -1) continue;

    const candidatesResult = extractBalanced(block, braceIdx, '{', '}');
    if (!candidatesResult) continue;

    const candidatesObj = candidatesResult.content;
    const currentValues = extractArrayValues(candidatesObj);

    // 不足分計算
    const missing = [...neededAnswers].filter(a => !currentValues.has(a));
    if (missing.length === 0 || missing.length > 30) continue;

    // others配列を更新
    let newCandidatesObj;

    if (candidatesObj.includes('"others"')) {
      const othersIdx = candidatesObj.indexOf('"others"');
      const othersBracketIdx = candidatesObj.indexOf('[', othersIdx);
      const othersResult = extractBalanced(candidatesObj, othersBracketIdx, '[', ']');

      if (!othersResult) continue;

      // 既存値取得
      const existingValues = [];
      const existingMatches = othersResult.content.match(/"((?:[^"\\]|\\.)*)"/g) || [];
      existingMatches.forEach(m => existingValues.push(m.slice(1, -1))); // 元のエスケープ形式を保持

      // 新しい値を追加（エスケープ済み形式で）
      const newValues = [...existingValues];
      for (const m of missing) {
        const escaped = escapeForJson(m);
        // 既存値との重複チェック（デコードして比較）
        const isDuplicate = existingValues.some(ev => decode(ev) === m);
        if (!isDuplicate) {
          newValues.push(escaped);
        }
      }

      if (newValues.length === existingValues.length) continue; // 変更なし
      if (newValues.length > 80) continue;

      const newOthersArray = `[${newValues.map(v => `"${v}"`).join(', ')}]`;
      newCandidatesObj = candidatesObj.substring(0, othersBracketIdx) +
                         newOthersArray +
                         candidatesObj.substring(othersBracketIdx + othersResult.content.length);
    } else {
      // othersを新規追加
      const lastBraceIdx = candidatesObj.lastIndexOf('}');
      const escapedMissing = missing.map(m => `"${escapeForJson(m)}"`).join(', ');
      const newOthersStr = `,\n          "others": [${escapedMissing}]`;
      newCandidatesObj = candidatesObj.substring(0, lastBraceIdx) + newOthersStr + '\n        }';
    }

    if (newCandidatesObj && newCandidatesObj !== candidatesObj) {
      const absStart = start + braceIdx;
      const absEnd = absStart + candidatesObj.length;
      content = content.substring(0, absStart) + newCandidatesObj + content.substring(absEnd);
      fileModified = true;
      fileFixed++;

      // タイトル位置が変わるので再取得
      const newTitleMatches = [...content.matchAll(/"title":\s*"([^"]+)"/g)];
      if (i + 1 < newTitleMatches.length) {
        // 次のイテレーションのために更新
      }
    }
  }

  if (fileModified) {
    // 一時ファイルに書き込み
    const tempPath = filePath + '.tmp';
    fs.writeFileSync(tempPath, content);

    // 構文チェック
    if (checkSyntax(tempPath)) {
      fs.renameSync(tempPath, filePath);
      console.log(`✓ ${file}: ${fileFixed}件修正`);
      totalFixed += fileFixed;
      totalFiles++;
    } else {
      fs.unlinkSync(tempPath);
      console.log(`✗ ${file}: 構文エラー - スキップ`);
    }
  }
}

console.log(`\n合計: ${totalFiles}ファイル, ${totalFixed}件修正`);

/**
 * 空行の不整合を修正するスクリプト
 * - correctLinesが空文字列の行に対応するholeyCodeに___がある場合を修正
 * - holeyCodeの該当行を空行に変更する
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const lessonDir = path.join(__dirname, '..', 'data', 'lessons');

const files = fs.readdirSync(lessonDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;

// バックスラッシュ+nのリテラル（2バイト: 92, 110）
const backslashN = String.fromCharCode(92, 110);

files.forEach(file => {
  const filePath = path.join(lessonDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // 各演習を処理
  // holeyCodeとcorrectLinesの両方を含むパターンを探す
  const exercisePattern = /("holeyCode":\s*")((?:[^"\\]|\\.)*)("[\s\S]*?"correctLines":\s*\[)([\s\S]*?)(\])/g;

  let match;
  const replacements = [];

  while ((match = exercisePattern.exec(content)) !== null) {
    const holeyCodePrefix = match[1];
    const holeyCode = match[2];
    const middle = match[3];
    const correctLinesContent = match[4];
    const suffix = match[5];
    const fullMatch = match[0];
    const matchStart = match.index;

    // correctLinesをパース
    const correctLines = [];
    const lineRegex = /"((?:[^"\\]|\\.)*)"/g;
    let lineMatch;
    while ((lineMatch = lineRegex.exec(correctLinesContent)) !== null) {
      correctLines.push(lineMatch[1]);
    }

    // holeyCodeを行に分割
    const holeyLines = holeyCode.split(backslashN);

    let holeyModified = false;
    const newHoleyLines = holeyLines.map((line, i) => {
      // correctLinesが空文字列で、holeyCodeに___がある場合
      if (i < correctLines.length && correctLines[i] === '' && line.includes('___')) {
        holeyModified = true;
        // 空行に変更（インデントも削除）
        return '';
      }
      return line;
    });

    if (holeyModified) {
      const newHoleyCode = newHoleyLines.join(backslashN);
      const newFullMatch = holeyCodePrefix + newHoleyCode + middle + correctLinesContent + suffix;
      replacements.push({
        start: matchStart,
        end: matchStart + fullMatch.length,
        oldText: fullMatch,
        newText: newFullMatch
      });
      totalFixed++;
      modified = true;

      // どの行を修正したかログ出力
      holeyLines.forEach((line, i) => {
        if (i < correctLines.length && correctLines[i] === '' && line.includes('___')) {
          console.log(file + ': line ' + i + ' fixed - was "' + line.substring(0, 50) + '..."');
        }
      });
    }
  }

  // 置換を後ろから実行（インデックスがずれないように）
  if (replacements.length > 0) {
    replacements.sort((a, b) => b.start - a.start);
    for (const r of replacements) {
      content = content.substring(0, r.start) + r.newText + content.substring(r.end);
    }
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Fixed ' + file);
  }
});

console.log('\nTotal exercises fixed: ' + totalFixed);

// 翻訳結果を検証するスクリプト
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const jpRegex = /[ぁ-んァ-ン一-龥]/;

function isCommentLine(line) {
  const trimmed = line.trim();
  return (
    trimmed.startsWith('//') ||
    trimmed.startsWith('#') ||
    trimmed.startsWith('--') ||
    trimmed.startsWith(';') ||
    trimmed.startsWith('/*') ||
    trimmed.startsWith('*') ||
    trimmed.startsWith('{-')
  );
}

function findJapaneseInStringLiterals(code) {
  const results = [];
  const lines = code.split('\n');

  for (const line of lines) {
    if (isCommentLine(line)) continue;

    // シングルクォート文字列
    const singleQuoteMatches = line.matchAll(/'([^'\\]*(?:\\.[^'\\]*)*)'/g);
    for (const m of singleQuoteMatches) {
      if (jpRegex.test(m[1])) {
        results.push({ type: 'single', content: m[1] });
      }
    }

    // ダブルクォート文字列
    const doubleQuoteMatches = line.matchAll(/"([^"\\]*(?:\\.[^"\\]*)*)"/g);
    for (const m of doubleQuoteMatches) {
      if (jpRegex.test(m[1])) {
        results.push({ type: 'double', content: m[1] });
      }
    }
  }

  return results;
}

const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalJpComments = 0;
let totalEnComments = 0;
let totalJpStringLiterals = 0;
let jpStringExamples = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(lessonsDir, file), 'utf-8');

  const codeMatches = content.matchAll(/"correctCode":\s*"((?:[^"\\]|\\.)*)"/g);
  for (const m of codeMatches) {
    const code = m[1].replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\'/g, "'");
    const lines = code.split('\n');

    for (const line of lines) {
      if (isCommentLine(line)) {
        if (jpRegex.test(line)) {
          totalJpComments++;
        } else {
          totalEnComments++;
        }
      }
    }

    const jpStrings = findJapaneseInStringLiterals(code);
    totalJpStringLiterals += jpStrings.length;
    if (jpStrings.length > 0 && jpStringExamples.length < 10) {
      jpStringExamples.push({ file, strings: jpStrings.slice(0, 3) });
    }
  }
}

console.log('=== 検証結果 ===\n');
console.log(`日本語コメント数: ${totalJpComments}`);
console.log(`英語コメント数: ${totalEnComments}`);
console.log(`\n文字列リテラル内の日本語: ${totalJpStringLiterals}件`);

if (jpStringExamples.length > 0) {
  console.log('\n=== 日本語が残っている文字列リテラル ===');
  for (const ex of jpStringExamples) {
    console.log(`\n${ex.file}:`);
    for (const s of ex.strings) {
      console.log(`  '${s.content}'`);
    }
  }
}

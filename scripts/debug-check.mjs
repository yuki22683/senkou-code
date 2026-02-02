import fs from 'fs';

const content = fs.readFileSync('./data/lessons/bash3.ts', 'utf-8');

// 演習「sort で並べ替え」周辺を抽出
const exerciseRegex = /"title":\s*"sort で並べ替え"[\s\S]*?"correctCode":\s*"((?:[^"\\]|\\.)*)"\s*,\s*"holeyCode":\s*"(?:[^"\\]|\\.)*"\s*,\s*"correctLines":\s*\[([\s\S]*?)\]/;

const match = content.match(exerciseRegex);
if (match) {
  const correctCodeRaw = match[1];
  const correctLinesStr = match[2];

  console.log('=== Raw correctCode ===');
  console.log(correctCodeRaw.slice(0, 50));

  // デコード
  const correctCode = correctCodeRaw.replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\"/g, '"');
  const correctCodeLines = correctCode.split('\n');

  console.log('\n=== Decoded first line ===');
  console.log(JSON.stringify(correctCodeLines[0]));
  console.log('Char codes:', [...correctCodeLines[0]].map(c => c.charCodeAt(0)));

  // correctLines
  const lineMatches = [...correctLinesStr.matchAll(/"((?:[^"\\]|\\.)*)"/g)];
  const correctLinesArr = lineMatches.map(m => m[1].replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\"/g, '"'));

  console.log('\n=== correctLines[0] ===');
  console.log(JSON.stringify(correctLinesArr[0]));
  console.log('Char codes:', [...correctLinesArr[0]].map(c => c.charCodeAt(0)));

  console.log('\n=== Comparison ===');
  console.log('Equal:', correctCodeLines[0].trim() === correctLinesArr[0].trim());
  console.log('correctCode trimmed:', JSON.stringify(correctCodeLines[0].trim()));
  console.log('correctLines trimmed:', JSON.stringify(correctLinesArr[0].trim()));
}

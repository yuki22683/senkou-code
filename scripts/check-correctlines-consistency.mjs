// correctCode と correctLines のコメント整合性をチェック
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

function isComment(line) {
  const trimmed = line.trim();
  if (trimmed.startsWith('#include') || trimmed.startsWith('#define') ||
      trimmed.startsWith('#ifdef') || trimmed.startsWith('#ifndef') ||
      trimmed.startsWith('#endif') || trimmed.startsWith('#pragma') ||
      trimmed.startsWith('#!')) {
    return false;
  }
  return trimmed.startsWith('//') || trimmed.startsWith('#') ||
         trimmed.startsWith('--') || trimmed.startsWith(';');
}

function processFile(filePath, fileName) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const issues = [];

  // 各エクササイズを抽出
  const exerciseRegex = /"title":\s*"([^"]+)"[\s\S]*?"correctCode":\s*"((?:[^"\\]|\\.)*)"\s*,\s*"holeyCode":\s*"(?:[^"\\]|\\.)*"\s*,\s*"correctLines":\s*\[([\s\S]*?)\]/g;

  let match;
  while ((match = exerciseRegex.exec(content)) !== null) {
    const title = match[1];
    const correctCode = match[2].replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\"/g, '"');
    const correctLinesStr = match[3];

    const correctCodeLines = correctCode.split('\n');

    // correctLinesを配列に変換
    const lineMatches = [...correctLinesStr.matchAll(/"((?:[^"\\]|\\.)*)"/g)];
    const correctLinesArr = lineMatches.map(m => m[1].replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\"/g, '"'));

    // 比較
    const maxLen = Math.min(correctCodeLines.length, correctLinesArr.length);
    for (let i = 0; i < maxLen; i++) {
      const codeLine = correctCodeLines[i];
      const arrLine = correctLinesArr[i];

      if (isComment(codeLine) && isComment(arrLine)) {
        if (codeLine.trim() !== arrLine.trim()) {
          issues.push({
            file: fileName,
            exercise: title,
            line: i + 1,
            correctCode: codeLine.trim(),
            correctLines: arrLine.trim()
          });
        }
      }
    }
  }

  return issues;
}

async function main() {
  const files = fs.readdirSync(lessonsDir).filter(f =>
    f.endsWith('.ts') && f !== 'index.ts' && !f.includes('extracted')
  );

  const allIssues = [];

  for (const file of files) {
    const filePath = path.join(lessonsDir, file);
    const issues = processFile(filePath, file);
    allIssues.push(...issues);
  }

  console.log('=== correctCode と correctLines のコメント不整合 ===\n');

  if (allIssues.length === 0) {
    console.log('不整合は見つかりませんでした。\n');
  } else {
    console.log(`【不整合: ${allIssues.length}件】\n`);
    for (const issue of allIssues) {
      console.log(`ファイル: ${issue.file}`);
      console.log(`演習: ${issue.exercise}`);
      console.log(`行: ${issue.line}`);
      console.log(`correctCode:  ${issue.correctCode}`);
      console.log(`correctLines: ${issue.correctLines}`);
      console.log('---');
    }
  }
}

main().catch(console.error);

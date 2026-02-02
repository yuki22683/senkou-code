// correctCode のコメントを holeyCode にコピーして不整合を修正
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

function fixComments(correctCode, holeyCode) {
  const correctLines = correctCode.split('\n');
  const holeyLines = holeyCode.split('\n');

  const maxLines = Math.min(correctLines.length, holeyLines.length);
  let modified = false;

  for (let i = 0; i < maxLines; i++) {
    const correctLine = correctLines[i];
    const holeyLine = holeyLines[i];

    if (isComment(correctLine) && isComment(holeyLine)) {
      // 両方がコメントで内容が違う場合、correctCodeのコメントを使う
      if (correctLine.trim() !== holeyLine.trim()) {
        // インデントを保持
        const indent = holeyLine.match(/^(\s*)/)[1];
        holeyLines[i] = indent + correctLine.trim();
        modified = true;
      }
    }
  }

  return { result: holeyLines.join('\n'), modified };
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let fileModified = false;

  // 各エクササイズを処理
  const exerciseRegex = /("correctCode":\s*")((?:[^"\\]|\\.)*)("\s*,\s*"holeyCode":\s*")((?:[^"\\]|\\.)*)(")/g;

  content = content.replace(exerciseRegex, (match, p1, correctRaw, p3, holeyRaw, p5) => {
    // デコード
    const correctCode = correctRaw.replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\"/g, '"');
    const holeyCode = holeyRaw.replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\"/g, '"');

    const { result: fixedHoley, modified } = fixComments(correctCode, holeyCode);

    if (modified) {
      fileModified = true;
      // エンコード
      const fixedRaw = fixedHoley.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/"/g, '\\"');
      return p1 + correctRaw + p3 + fixedRaw + p5;
    }
    return match;
  });

  if (fileModified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  return false;
}

async function main() {
  const files = fs.readdirSync(lessonsDir).filter(f =>
    f.endsWith('.ts') && f !== 'index.ts'
  );

  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(lessonsDir, file);
    try {
      if (processFile(filePath)) {
        console.log('Fixed:', file);
        fixedCount++;
      }
    } catch (e) {
      console.error(`Error (${file}):`, e.message);
    }
  }

  console.log(`\nTotal: ${fixedCount} files fixed`);
}

main().catch(console.error);

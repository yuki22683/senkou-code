// correctCode と holeyCode/correctLines のコメント不整合を自動修正
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

// コメント行かどうか判定
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

// ファイルを処理
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // 各エクササイズを処理
  const exerciseRegex = /("title":\s*"[^"]+"[\s\S]*?"correctCode":\s*)"((?:[^"\\]|\\.)*)"(\s*,\s*"holeyCode":\s*)"((?:[^"\\]|\\.)*)"/g;

  content = content.replace(exerciseRegex, (match, prefix, correctCode, middle, holeyCode) => {
    const correctLines = correctCode.split('\\n');
    const holeyLines = holeyCode.split('\\n');

    let changed = false;
    const newHoleyLines = holeyLines.map((holeyLine, i) => {
      if (i >= correctLines.length) return holeyLine;

      const correctLine = correctLines[i];

      // コメント行の場合、correctCodeのコメントで上書き
      const correctDecoded = correctLine.replace(/\\"/g, '"');
      const holeyDecoded = holeyLine.replace(/\\"/g, '"');

      if (isComment(correctDecoded) && isComment(holeyDecoded)) {
        if (correctLine !== holeyLine) {
          changed = true;
          return correctLine;
        }
      }
      return holeyLine;
    });

    if (changed) {
      modified = true;
      const newHoleyCode = newHoleyLines.join('\\n');
      return `${prefix}"${correctCode}"${middle}"${newHoleyCode}"`;
    }

    return match;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  return false;
}

// メイン処理
async function main() {
  const files = fs.readdirSync(lessonsDir).filter(f =>
    f.endsWith('.ts') && f !== 'index.ts' && !f.includes('extracted')
  );

  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(lessonsDir, file);
    if (processFile(filePath)) {
      console.log(`修正: ${file}`);
      fixedCount++;
    }
  }

  console.log(`\n合計 ${fixedCount} ファイルを修正しました。`);
}

main().catch(console.error);

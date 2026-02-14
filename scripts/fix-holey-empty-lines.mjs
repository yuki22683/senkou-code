/**
 * holeyCodeで空行やインデントのみの行が___になっている問題を修正
 * correctLinesの空行/インデント行に対応するholeyCodeの行を正しく修正
 */
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // 各演習を処理
  const exerciseRegex = /"holeyCode":\s*"([^"]+)",\s*"correctLines":\s*\[([\s\S]*?)\]/g;

  content = content.replace(exerciseRegex, (match, holeyCode, correctLinesStr) => {
    // correctLinesを解析
    const correctLines = [];
    const lineRegex = /"([^"]*)"/g;
    let lineMatch;
    while ((lineMatch = lineRegex.exec(correctLinesStr)) !== null) {
      correctLines.push(lineMatch[1]);
    }

    // holeyCodeを行に分割
    const holeyLines = holeyCode.split('\\n');

    if (holeyLines.length !== correctLines.length) {
      console.log(`  警告: 行数不一致 (holey: ${holeyLines.length}, correct: ${correctLines.length}) - スキップ`);
      return match;
    }

    let changed = false;
    const newHoleyLines = holeyLines.map((holeyLine, i) => {
      const correctLine = correctLines[i];

      // correctLineが空行またはインデントのみの場合
      if (correctLine === '' || correctLine.match(/^\s+$/)) {
        // holeyLineが___を含む場合は修正が必要
        if (holeyLine.includes('___')) {
          changed = true;
          return correctLine; // 空行またはインデントのみに修正
        }
      }
      return holeyLine;
    });

    if (changed) {
      modified = true;
      const newHoleyCode = newHoleyLines.join('\\n');
      return `"holeyCode": "${newHoleyCode}", "correctLines": [${correctLinesStr}]`;
    }
    return match;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

// メイン処理
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts'));
let modifiedCount = 0;

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  console.log(`処理中: ${file}`);
  if (processFile(filePath)) {
    console.log(`  修正しました`);
    modifiedCount++;
  }
}

console.log(`\n完了: ${modifiedCount}ファイルを修正`);

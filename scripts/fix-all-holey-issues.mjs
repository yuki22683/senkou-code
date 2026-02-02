// holeyCode に ___ がない行の lineHints を null にする
// 空行や分割されたprint文に対応
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // 正規表現でholeyCodeとlineHintsを抽出
  const regex = /("holeyCode":\s*")((?:[^"\\]|\\.)*)("\s*,\s*"correctLines":\s*\[[\s\S]*?\]\s*,\s*"lineHints":\s*)(\[[\s\S]*?\])/g;

  content = content.replace(regex, (match, p1, holeyRaw, p3, hintsJson) => {
    try {
      // holeyCodeをデコード
      const holeyCode = holeyRaw.replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
      const holeyLines = holeyCode.split('\n');

      // lineHintsをパース
      const hints = JSON.parse(hintsJson);

      if (holeyLines.length !== hints.length) {
        console.log(`  Length mismatch: holey=${holeyLines.length}, hints=${hints.length}`);
        return match;
      }

      let changed = false;
      for (let i = 0; i < holeyLines.length; i++) {
        const line = holeyLines[i];
        const hint = hints[i];

        // hintがnullでないのに___がない場合
        if (hint !== null && !line.includes('___')) {
          console.log(`  Line ${i}: "${line.substring(0, 50)}..." has hint but no ___`);
          hints[i] = null;
          changed = true;
        }
      }

      if (changed) {
        modified = true;
        const newHintsJson = JSON.stringify(hints, null, 10).replace(/\n/g, '\n          ');
        return p1 + holeyRaw + p3 + newHintsJson;
      }
    } catch (e) {
      console.log(`  Parse error: ${e.message}`);
    }
    return match;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  return false;
}

const files = fs.readdirSync(lessonsDir).filter(f =>
  f.endsWith('.ts') && f !== 'index.ts'
);

let fixedCount = 0;
for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  console.log(`Checking: ${file}`);
  if (processFile(filePath)) {
    console.log(`Fixed: ${file}`);
    fixedCount++;
  }
}

console.log(`\nTotal: ${fixedCount} files fixed`);

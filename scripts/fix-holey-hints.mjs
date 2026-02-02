// holeyCodeに___がない行のlineHintsをnullに設定
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // 各エクササイズを処理
  const exerciseRegex = /("holeyCode":\s*")((?:[^"\\]|\\.)*)("\s*,\s*"correctLines":\s*)(\[[^\]]+\])(\s*,\s*"lineHints":\s*)(\[[^\]]+\])/gs;

  content = content.replace(exerciseRegex, (match, p1, holeyRaw, p3, linesJson, p5, hintsJson) => {
    try {
      const holeyCode = holeyRaw.replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
      const holeyLines = holeyCode.split('\n');
      const hints = JSON.parse(hintsJson);

      if (holeyLines.length !== hints.length) {
        return match;
      }

      let changed = false;
      for (let i = 0; i < holeyLines.length; i++) {
        const line = holeyLines[i];
        const hint = hints[i];

        // hintがnullでないのに___がない場合
        if (hint !== null && !line.includes('___')) {
          hints[i] = null;
          changed = true;
        }
      }

      if (changed) {
        modified = true;
        const hintsStr = JSON.stringify(hints, null, 10)
          .replace(/\n/g, '\n          ');
        return p1 + holeyRaw + p3 + linesJson + p5 + hintsStr;
      }
    } catch (e) {
      // ignore
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
  if (processFile(filePath)) {
    console.log('Fixed:', file);
    fixedCount++;
  }
}

console.log(`\nTotal: ${fixedCount} files fixed`);

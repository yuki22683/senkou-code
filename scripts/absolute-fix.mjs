import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function absoluteFix() {
  const files = await glob('data/lessons/*.ts');
  
  for (const file of files) {
    if (file.endsWith('index.ts')) continue;
    let content = fs.readFileSync(file, 'utf-8');
    
    // 文字列リテラルの整合性をチェック
    // esbuildが怒るのは、" の後にエスケープされていない改行がある場合。
    
    const chars = [...content];
    let newChars = [];
    let inString = false;
    let escape = false;
    let modified = false;

    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];

      if (escape) {
        newChars.push(char);
        escape = false;
        continue;
      }

      if (char === '\\') {
        newChars.push(char);
        escape = true;
        continue;
      }

      if (char === '"') {
        inString = !inString;
        newChars.push(char);
        continue;
      }

      if (inString && (char === '\n' || char === '\r')) {
        // 文字列の中なのに改行が来た！ -> エスケープされた改行 \n に置換する
        // ただし、直前の文字がすでに \ だった場合は (escapeフラグで処理済み)
        // ここでは生の改行を文字としての \n に変える
        newChars.push('\\');
        newChars.push('n');
        modified = true;
        // \r\n の場合は \n をスキップ
        if (char === '\r' && chars[i+1] === '\n') {
          i++;
        }
        continue;
      }

      newChars.push(char);
    }

    if (modified) {
      console.log(`Absolute fixed ${file}`);
      fs.writeFileSync(file, newChars.join(''), 'utf-8');
    }
  }
}

absoluteFix();

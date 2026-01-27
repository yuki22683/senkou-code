import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const lessonsDir = path.join(process.cwd(), 'data', 'lessons');

async function fixBrokenSyntaxV3() {
  const files = await glob(path.join(lessonsDir, '*.ts').replace(/\\/g, '/'));
  let fixedCount = 0;

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    
    // 特定の壊れた3行パターンを検出
    // 1. }" (indent 6)
    // 2. ] (indent 8)
    // 3. }, (indent 6)
    // 改行コードは \r?\n で対応
    const regex = /\r?\n\s*\}"\s*\r?\n\s*\]\s*\r?\n\s*\},/g;
    
    if (regex.test(content)) {
      console.log(`Fixing ${path.basename(file)}...`);
      // 正しい構造 ( }, ) に置換
      content = content.replace(regex, (match) => {
          // マッチした最初の改行コードを維持しつつ置換
          const nl = match.startsWith('\r\n') ? '\r\n' : '\n';
          return nl + '      },';
      });
      
      fs.writeFileSync(file, content, 'utf-8');
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files.`);
}

fixBrokenSyntaxV3();

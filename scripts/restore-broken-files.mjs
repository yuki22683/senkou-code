import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const lessonsDir = path.join(process.cwd(), 'data', 'lessons');

async function restoreBrokenFiles() {
  const files = await glob(path.join(lessonsDir, '*.ts').replace(/\\/g, '/'));
  let fixedCount = 0;

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    
    // 壊れたパターン: " (改行) (空白) },
    // 前回のスクリプトが誤爆したのは、 "}" という並びがあった箇所だけ。
    // なので、復元するのは "}" ] }, という構造。
    
    const regex = /"\s*[\r\n]+\s*\},/g;
    
    if (regex.test(content)) {
      console.log(`Restoring ${path.basename(file)}...`);
      // 復元
      // インデントは8スペースと6スペースと仮定
      content = content.replace(regex, '"}"\n        ]\n      },');
      
      fs.writeFileSync(file, content, 'utf-8');
      fixedCount++;
    }
  }

  console.log(`Restored ${fixedCount} files.`);
}

restoreBrokenFiles();

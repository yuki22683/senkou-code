import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const lessonsDir = path.join(process.cwd(), 'data', 'lessons');

async function findBroken() {
  const files = await glob(path.join(lessonsDir, '*.ts').replace(/\\/g, '/'));
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    const lines = content.split(/\r?\n/);
    
    lines.forEach((line, i) => {
      if (line.includes('}"')) {
        // インデントの深さを表示
        const indent = line.match(/^\s*/)[0].length;
        console.log(`${path.basename(file)}:${i + 1} (indent: ${indent}): ${line.trim()}`);
      }
    });
  }
}

findBroken();


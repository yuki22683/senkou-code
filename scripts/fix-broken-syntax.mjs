import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const lessonsDir = path.join(process.cwd(), 'data', 'lessons');

async function fixBrokenSyntax() {
  // Windowsパス区切りの問題を避けるため、スラッシュに変換してからglobに渡す、あるいはglobのcwdオプションを使う
  const pattern = path.join(lessonsDir, '*.ts').replace(/\\/g, '/');
  console.log(`Searching files with pattern: ${pattern}`);
  
  const files = await glob(pattern);
  console.log(`Found ${files.length} files.`);
  
  let fixedCount = 0;

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    
    // デバッグ：javascript2.ts の場合、該当箇所の周辺を表示
    if (file.endsWith('javascript2.ts')) {
        const index = content.indexOf('}"');
        if (index !== -1) {
            console.log(`Found "}" in ${path.basename(file)} at index ${index}`);
            console.log('Surrounding content:');
            console.log(content.substring(index - 20, index + 20));
        } else {
            console.log(`Did not find "}" in ${path.basename(file)}`);
        }
    }

    // パターン: }" 続く ] 続く },
    // 前の空白も含める
    const regex = /\s*\}"\s*\]\s*\},/g;
    
    if (regex.test(content)) {
      console.log(`Fixing ${path.basename(file)}...`);
      // Replacement needs to restore correct structure. 
      // The matched string includes the closing bracket of the previous array (others: [ ... ]) ?
      // No, my regex starts matching at `}"`. 
      // The `others` array ends with `]`. 
      
      // Let's look at the structure again:
      //         ]
      //       }"
      //         ]
      //       },
      
      // The first `\s*` matches the newline and spaces BEFORE `}"`. 
      // Wait, if I replace `\s*\}"`... I am removing the newline after `]`. 
      // I should match strictly the broken part. 
      
      content = content.replace(regex, '\n      },');
      
      fs.writeFileSync(file, content, 'utf-8');
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files.`);
}

fixBrokenSyntax();
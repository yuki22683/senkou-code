import fs from 'fs';
import path from 'path';

const files = ['data/lessons/bash.ts', 'data/lessons/bash2.ts', 'data/lessons/bash3.ts'];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf-8');
  // echo "___" を echo "___" に置換
  // JSONの中なので " は \" となっている
  const fixed = content.replace(/echo \\"___"/g, 'echo \\"___\\"');
  if (content !== fixed) {
    console.log(`Fixed ${file}`);
    fs.writeFileSync(file, fixed, 'utf-8');
  }
});

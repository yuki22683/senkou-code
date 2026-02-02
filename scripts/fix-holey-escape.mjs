// holeyCode の \\\n を \\n に修正するスクリプト
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

const files = fs.readdirSync(lessonsDir).filter(f =>
  f.endsWith('.ts') && f !== 'index.ts'
);

let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  const original = content;

  // holeyCode フィールド内の \\\n を \\n に置換
  // ファイル内では: \\\ + n を \\ + n に
  content = content.replace(/(["']holeyCode["']:\s*["'])((?:[^"'\\]|\\.)*)(['"])/g, (match, prefix, code, suffix) => {
    // code内の \\\n を \\n に置換
    const fixed = code.replace(/\\\\\\/g, '\\\\');
    if (fixed !== code) {
      return prefix + fixed + suffix;
    }
    return match;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Fixed:', file);
    totalFixed++;
  }
}

console.log('\nTotal fixed:', totalFixed);

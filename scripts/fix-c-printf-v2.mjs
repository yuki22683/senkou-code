// c.ts の壊れた printf を修正するスクリプト
import fs from 'fs';

const filePath = './data/lessons/c.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// パターン: printf("%d\n    // コメント\n", ...) を printf("%d\\n", ...) に修正
// correctCode/holeyCode 内で

// correctCode を修正
content = content.replace(
  /"correctCode":\s*"([^"]+)"/g,
  (match, code) => {
    // printf("...\n    // コメント\n", args) を printf("...\\n", args) に
    let fixed = code.replace(
      /printf\(\\?"([^\\]*)\\n\s*\/\/[^\\n]*\\n\\?",\s*([^)]+)\)/g,
      (m, format, args) => `printf(\\"${format}\\\\n\\", ${args.trim()})`
    );
    // printf("...\n    // コメント\n") を printf("...\\n") に
    fixed = fixed.replace(
      /printf\(\\?"([^\\]*)\\n\s*\/\/[^\\n]*\\n\\?"\)/g,
      (m, format) => `printf(\\"${format}\\\\n\\")`
    );
    if (fixed !== code) {
      return `"correctCode": "${fixed}"`;
    }
    return match;
  }
);

// holeyCode も同様に修正
content = content.replace(
  /"holeyCode":\s*"([^"]+)"/g,
  (match, code) => {
    let fixed = code.replace(
      /printf\(\\?"([^\\]*)\\n\s*\/\/[^\\n]*\\n\\?",\s*([^)]+)\)/g,
      (m, format, args) => `printf(\\"${format}\\\\n\\", ${args.trim()})`
    );
    fixed = fixed.replace(
      /printf\(\\?"([^\\]*)\\n\s*\/\/[^\\n]*\\n\\?"\)/g,
      (m, format) => `printf(\\"${format}\\\\n\\")`
    );
    if (fixed !== code) {
      return `"holeyCode": "${fixed}"`;
    }
    return match;
  }
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Done');

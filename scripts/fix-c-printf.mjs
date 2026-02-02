// C言語のprintf等で壊れた改行を修正
// printf("...\nコメント\n...") → printf("...\\n")... に修正
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

function fixBrokenPrintf(code) {
  // printf("text
  // comment
  // "); のパターンを printf("text\\n"); に修正
  // 具体的なパターン: printf("...\n    // comment\n"); → printf("...\\n");

  let result = code;

  // パターン1: printf("...\n    // comment\n"); を修正
  result = result.replace(
    /printf\("([^"]*)\n\s*\/\/[^\n]*\n"\)/g,
    (match, content) => `printf("${content}\\n")`
  );

  // パターン2: printf("...\n    // comment\n", ...); を修正
  result = result.replace(
    /printf\("([^"]*)\n\s*\/\/[^\n]*\n",\s*([^)]+)\)/g,
    (match, content, args) => `printf("${content}\\n", ${args.trim()})`
  );

  return result;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // correctCode フィールドを修正
  content = content.replace(
    /("correctCode":\s*")((?:[^"\\]|\\.)*)(")/g,
    (match, prefix, code, suffix) => {
      const fixed = fixBrokenPrintf(code);
      if (fixed !== code) {
        modified = true;
        return prefix + fixed + suffix;
      }
      return match;
    }
  );

  // holeyCode フィールドを修正
  content = content.replace(
    /("holeyCode":\s*")((?:[^"\\]|\\.)*)(")/g,
    (match, prefix, code, suffix) => {
      const fixed = fixBrokenPrintf(code);
      if (fixed !== code) {
        modified = true;
        return prefix + fixed + suffix;
      }
      return match;
    }
  );

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  return false;
}

const files = ['c.ts'];

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  if (fs.existsSync(filePath)) {
    if (processFile(filePath)) {
      console.log('Fixed:', file);
    }
  }
}

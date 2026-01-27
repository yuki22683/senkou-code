import fs from 'fs';
import path from 'path';

const lessonsDir = path.join(process.cwd(), 'data', 'lessons');

function fixFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const language = path.basename(filePath, '.ts').replace(/\d+$/, '');
  
  // 1. Double quote tiles fix
  // If holeyCode contains "___", but " is not in candidates, add it.
  const exercisePattern = /\{[^\{\}]*?"holeyCode":\s*"((?:[^"\\]|\\.)*)"[\s\S]*?"candidates":\s*\{([\s\S]*?)\}/g;
  
  let modified = false;
  const newContent = content.replace(exercisePattern, (match, holeyCode, candidatesStr) => {
    const hasQuoteHole = holeyCode.includes('\\"___') || holeyCode.includes('___\\"');
    const hasQuoteCandidate = candidatesStr.includes('\\"') || candidatesStr.includes('"');
    
    if (hasQuoteHole && !hasQuoteCandidate) {
      console.log(`Fixing missing quote candidate in ${filePath}`);
      modified = true;
      if (candidatesStr.includes('"strings"')) {
          return match.replace('"strings":\s*\[', '"strings": [\n          "\\\"",');
      } else if (candidatesStr.includes('"others"')) {
          return match.replace('"others":\s*\{', '"others": [\n          "\\\"",');
      } else {
          return match.replace('"candidates": {', '"candidates": {\n        "others": ["\\\""],');
      }
    }
    return match;
  });

  if (modified) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
  }
}

const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
files.forEach(f => fixFile(path.join(lessonsDir, f)));

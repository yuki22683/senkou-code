
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

function extractArrayCount(str) {
  if (!str) return 0;
  // Count elements like "line", null, 123
  let count = 0;
  let depth = 0;
  let inString = false;
  let escaped = false;
  
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (escaped) { escaped = false; continue; }
    if (ch === '\\') { escaped = true; continue; }
    if (ch === '"') { inString = !inString; continue; }
    if (!inString) {
      if (ch === '[') depth++;
      if (ch === ']') depth--;
      if (depth === 1 && ch === ',') count++;
    }
  }
  // Add 1 for the last element if not empty
  if (str.trim().length > 2) count++;
  return count;
}

for (const file of files) {
  const content = fs.readFileSync(path.join(lessonsDir, file), 'utf8');
  
  // Split by exercises to avoid cross-matching
  const exercisesPart = content.split('"exercises": [')[1];
  if (!exercisesPart) continue;
  
  const exerciseBlocks = exercisesPart.split(/\},?\s*\{/);

  for (const block of exerciseBlocks) {
    const titleMatch = block.match(/"title":\s*"([^"]+)"/);
    if (!titleMatch) continue;
    const title = titleMatch[1];

    const holeyMatch = block.match(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/);
    if (!holeyMatch) continue;
    
    const clIdx = block.indexOf('"correctLines":');
    if (clIdx === -1) continue;
    
    // Find the end of correctLines array
    let depth = 0;
    let endIdx = -1;
    let inString = false;
    let escaped = false;
    for (let i = block.indexOf('[', clIdx); i < block.length; i++) {
      const ch = block[i];
      if (escaped) { escaped = false; continue; }
      if (ch === '\\') { escaped = true; continue; }
      if (ch === '"') { inString = !inString; continue; }
      if (!inString) {
        if (ch === '[') depth++;
        if (ch === ']') {
          depth--;
          if (depth === 0) { endIdx = i; break; }
        }
      }
    }
    
    if (endIdx === -1) continue;
    const correctLinesRaw = block.substring(block.indexOf('[', clIdx), endIdx + 1);

    const holeyLinesCount = holeyMatch[1].split('\\\\n').length;
    const correctLinesCount = (correctLinesRaw.match(/"(?:[^"\\]|\\.)*"/g) || []).length;

    if (holeyLinesCount !== correctLinesCount) {
      console.log(`${file}: 「${title}」 Holey=${holeyLinesCount}, Correct=${correctLinesCount}`);
    }
  }
}

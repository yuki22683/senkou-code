import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let issues = [];

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Simple approach: find correctLines and lineHints arrays and compare lengths
  const correctLinesMatches = content.matchAll(/"correctLines":\s*\[([\s\S]*?)\]/g);
  const lineHintsMatches = content.matchAll(/"lineHints":\s*\[([\s\S]*?)\]/g);
  
  const correctLinesArrays = [...correctLinesMatches].map(m => {
    try {
      return JSON.parse('[' + m[1] + ']');
    } catch { return null; }
  }).filter(x => x);
  
  const lineHintsArrays = [...lineHintsMatches].map(m => {
    try {
      return JSON.parse('[' + m[1] + ']');
    } catch { return null; }
  }).filter(x => x);
  
  for (let i = 0; i < Math.min(correctLinesArrays.length, lineHintsArrays.length); i++) {
    const cl = correctLinesArrays[i];
    const lh = lineHintsArrays[i];
    if (cl && lh && cl.length !== lh.length) {
      issues.push(`${file} Exercise #${i+1}: correctLines=${cl.length}, lineHints=${lh.length}`);
    }
  }
}

if (issues.length > 0) {
  console.log("=== 行数不一致 ===");
  issues.forEach(i => console.log(i));
  console.log(`\n合計: ${issues.length}件`);
} else {
  console.log("行数不一致なし");
}

// Fix lineHints array length to match correctLines array length
// Simply adds null entries at the end if lineHints is shorter
// Does NOT modify existing hints

import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;
let totalIssues = 0;

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let fileIssues = 0;

  // Find all correctLines/lineHints pairs
  const pattern = /("correctLines":\s*\[)([\s\S]*?)(\],\s*"lineHints":\s*\[)([\s\S]*?)(\],)/g;

  content = content.replace(pattern, (match, clStart, clContent, middle, lhContent, end) => {
    // Count correctLines (strings)
    const clMatches = clContent.match(/"(?:[^"\\]|\\.)*"/g) || [];
    const clCount = clMatches.length;

    // Count lineHints (null or strings)
    const lhMatches = lhContent.match(/null|"(?:[^"\\]|\\.)*"/g) || [];
    const lhCount = lhMatches.length;

    if (clCount === lhCount) {
      return match; // Already correct
    }

    if (lhCount < clCount) {
      // Add null entries
      const nullsToAdd = clCount - lhCount;
      const trimmedLh = lhContent.trimEnd();
      const newLhContent = trimmedLh + ',\n          ' + Array(nullsToAdd).fill('null').join(',\n          ');
      modified = true;
      fileIssues++;
      return clStart + clContent + middle + newLhContent + end;
    } else {
      // lineHints is longer - log but don't fix automatically
      console.log(`  ${file}: lineHints (${lhCount}) > correctLines (${clCount}) - manual fix needed`);
      fileIssues++;
      return match;
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${file} (${fileIssues} issues)`);
    totalFixed++;
  }
  totalIssues += fileIssues;
}

console.log(`\nTotal: ${totalFixed} files fixed, ${totalIssues} issues addressed`);

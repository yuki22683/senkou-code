// Check that all backslash sequences before 'n' have exactly 2 backslashes
// Correct format: \\n (2 backslash bytes + n byte = 5c 5c 6e in hex)

import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalIssues = 0;
const issuesByFile = {};

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];

  for (let i = 0; i < content.length - 1; i++) {
    if (content.charCodeAt(i) === 92) { // backslash
      let count = 1;
      let j = i + 1;
      while (j < content.length && content.charCodeAt(j) === 92) {
        count++;
        j++;
      }
      if (j < content.length && content.charCodeAt(j) === 110) { // 'n'
        if (count !== 2) {
          issues.push({ position: i, count });
        }
      }
      i = j - 1;
    }
  }

  if (issues.length > 0) {
    issuesByFile[file] = issues;
    totalIssues += issues.length;
  }
}

if (totalIssues === 0) {
  console.log('✅ All escape sequences are correct (2 backslashes + n)');
} else {
  console.log(`❌ Found ${totalIssues} incorrect escape sequences:`);
  for (const [file, issues] of Object.entries(issuesByFile)) {
    const counts = {};
    issues.forEach(i => counts[i.count] = (counts[i.count] || 0) + 1);
    const summary = Object.entries(counts).map(([c, n]) => `${n}x ${c}-backslash`).join(', ');
    console.log(`  ${file}: ${issues.length} issues (${summary})`);
  }
  console.log('\nRun: node scripts/fix-escape-normalize.mjs');
}

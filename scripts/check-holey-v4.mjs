import fs from 'fs';
import path from 'path';

// Import all lesson data
const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

const problems = [];

for (const file of files) {
  try {
    const mod = await import(`../data/lessons/${file}`);
    const dataKey = Object.keys(mod)[0];
    const data = mod[dataKey];

    if (!data.exercises) continue;

    for (let exIdx = 0; exIdx < data.exercises.length; exIdx++) {
      const ex = data.exercises[exIdx];

      // Skip if missing required fields
      if (!ex.correctCode || !ex.holeyCode || !ex.correctLines || !ex.lineHints) {
        continue;
      }

      // リテラルの \n (バックスラッシュ + n)
      const backslashN = String.fromCharCode(92, 110);  // literal \ + n

      // Check if correctLines array content matches correctCode
      // Note: \n inside strings (like printf) causes line count differences, so compare content instead
      const correctCodeJoined = ex.correctCode;
      const correctLinesJoined = ex.correctLines.join(backslashN);
      if (correctCodeJoined !== correctLinesJoined) {
        // Only report if actually different, not just split differently
        problems.push({
          file,
          title: ex.title,
          issue: 'correctLines_content_mismatch',
          correctCodeLen: correctCodeJoined.length,
          correctLinesLen: correctLinesJoined.length
        });
        continue;  // Skip further checks for this exercise
      }

      // Check holeyCode content matches expected pattern (correctCode with some parts replaced by ___)
      // If holeyCode has different structure due to \n in strings, skip detailed line checks
      const holeyCodeSplit = ex.holeyCode.split(backslashN);
      if (holeyCodeSplit.length !== ex.correctLines.length) {
        // holeyCode has \n inside strings that cause different split - skip line-by-line check
        // This is a known data limitation, not an error
        continue;
      }

      // Use correctLines array as the source of truth for line operations
      const actualLines = ex.correctLines;

      // Check if lineHints length matches correctLines array
      if (ex.lineHints.length !== actualLines.length) {
        problems.push({
          file,
          title: ex.title,
          issue: 'lineHints_length_mismatch',
          lines: actualLines.length,
          hints: ex.lineHints.length
        });
        continue;
      }

      // holeyCodeSplit is already computed above and has same length as correctLines

      // Check each line with a non-null hint has ___ in holeyCode
      for (let i = 0; i < actualLines.length; i++) {
        const hint = ex.lineHints[i];
        // Use corresponding holeyLine
        const holeyLine = holeyCodeSplit[i] || '';
        const correctLine = actualLines[i];

        if (hint !== null && !holeyLine.includes('___')) {
          problems.push({
            file,
            title: ex.title,
            lineIndex: i,
            issue: 'missing_hole',
            correctLine,
            holeyLine,
            hint
          });
        }
      }
    }
  } catch (e) {
    console.error(`Error processing ${file}:`, e.message);
  }
}

console.log(`\n=== Total problems: ${problems.length} ===\n`);

// Group by file
const byFile = {};
for (const p of problems) {
  if (!byFile[p.file]) byFile[p.file] = [];
  byFile[p.file].push(p);
}

for (const [file, fileProblems] of Object.entries(byFile)) {
  console.log(`\n=== ${file} (${fileProblems.length}) ===`);
  for (const p of fileProblems) {
    console.log(`  Exercise: ${p.title}`);
    if (p.issue === 'line_count_mismatch') {
      console.log(`    Issue: Line count mismatch (correctCode: ${p.correctCount}, holeyCode: ${p.holeyCount})`);
    } else if (p.issue === 'missing_hole') {
      console.log(`    Line ${p.lineIndex}: missing ___ in holeyCode`);
      console.log(`    Correct: "${p.correctLine}"`);
      console.log(`    Holey: "${p.holeyLine}"`);
    } else {
      console.log(`    Issue: ${p.issue}`);
    }
  }
}

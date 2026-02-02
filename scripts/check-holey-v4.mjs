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

      const correctLines = ex.correctCode.split('\n');
      const holeyLines = ex.holeyCode.split('\n');

      // Check if line counts match
      if (correctLines.length !== holeyLines.length) {
        console.log(`[WARN] ${file} Exercise "${ex.title}": Line count mismatch`);
        console.log(`  correctCode lines: ${correctLines.length}`);
        console.log(`  holeyCode lines: ${holeyLines.length}`);

        // Show first few lines for debugging
        console.log(`  correctCode:`);
        correctLines.slice(0, 5).forEach((l, i) => console.log(`    ${i}: ${JSON.stringify(l)}`));
        console.log(`  holeyCode:`);
        holeyLines.slice(0, 5).forEach((l, i) => console.log(`    ${i}: ${JSON.stringify(l)}`));

        problems.push({
          file,
          title: ex.title,
          issue: 'line_count_mismatch',
          correctCount: correctLines.length,
          holeyCount: holeyLines.length
        });
        continue;
      }

      // Check if correctLines array matches correctCode split
      if (correctLines.length !== ex.correctLines.length) {
        problems.push({
          file,
          title: ex.title,
          issue: 'correctLines_array_mismatch',
          correctCodeLines: correctLines.length,
          correctLinesArray: ex.correctLines.length
        });
        continue;
      }

      // Check if lineHints length matches
      if (ex.lineHints.length !== correctLines.length) {
        problems.push({
          file,
          title: ex.title,
          issue: 'lineHints_length_mismatch',
          lines: correctLines.length,
          hints: ex.lineHints.length
        });
        continue;
      }

      // Check each line with a non-null hint has ___ in holeyCode
      for (let i = 0; i < correctLines.length; i++) {
        const hint = ex.lineHints[i];
        const holeyLine = holeyLines[i];
        const correctLine = correctLines[i];

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

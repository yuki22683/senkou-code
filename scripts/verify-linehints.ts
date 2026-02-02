import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

interface Issue {
  file: string;
  exercise: string;
  correctLinesLen: number;
  lineHintsLen: number;
}

async function main() {
  const files = fs.readdirSync(lessonsDir)
    .filter(f => f.endsWith('.ts') && f !== 'index.ts');

  const issues: Issue[] = [];

  for (const file of files) {
    const filePath = path.join(lessonsDir, file);
    const modulePath = path.resolve(filePath);
    const moduleUrl = `file://${modulePath.replace(/\\/g, '/')}`;

    try {
      const mod = await import(moduleUrl);
      const dataKey = Object.keys(mod).find(k => k.endsWith('Data'));
      if (!dataKey) continue;

      const data = mod[dataKey];
      if (!data.exercises) continue;

      for (const exercise of data.exercises) {
        if (!exercise.correctLines || !exercise.lineHints) continue;

        const clLen = exercise.correctLines.length;
        const lhLen = exercise.lineHints.length;

        if (clLen !== lhLen) {
          issues.push({
            file,
            exercise: exercise.title,
            correctLinesLen: clLen,
            lineHintsLen: lhLen
          });
        }
      }
    } catch (e: any) {
      console.error(`Error loading ${file}:`, e.message);
    }
  }

  if (issues.length === 0) {
    console.log('✅ All files have matching correctLines and lineHints lengths!');
  } else {
    console.log(`❌ Found ${issues.length} mismatches:\n`);
    for (const issue of issues) {
      console.log(`${issue.file}: "${issue.exercise}" - correctLines=${issue.correctLinesLen}, lineHints=${issue.lineHintsLen}`);
    }
  }
}

main();

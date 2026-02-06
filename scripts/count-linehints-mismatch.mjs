#!/usr/bin/env node
import fs from 'fs';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalMismatches = 0;

for (const file of files) {
  try {
    const mod = await import(`../data/lessons/${file}`);
    const dataKey = Object.keys(mod)[0];
    const data = mod[dataKey];

    if (!data.exercises) continue;

    for (const ex of data.exercises) {
      if (!ex.correctLines || !ex.lineHints) continue;

      if (ex.correctLines.length !== ex.lineHints.length) {
        totalMismatches++;
        console.log(`${file} - ${ex.title}: correctLines(${ex.correctLines.length}) != lineHints(${ex.lineHints.length})`);
      }
    }
  } catch (e) {
    console.error(`Error in ${file}: ${e.message}`);
  }
}

console.log('');
console.log(`Total unique exercise mismatches: ${totalMismatches}`);

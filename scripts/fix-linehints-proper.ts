import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

async function fixFile(filePath: string): Promise<boolean> {
  const content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // Import the module dynamically
  const modulePath = path.resolve(filePath);
  const moduleUrl = `file://${modulePath.replace(/\\/g, '/')}`;

  try {
    const mod = await import(moduleUrl);
    const dataKey = Object.keys(mod).find(k => k.endsWith('Data'));
    if (!dataKey) return false;

    const data = mod[dataKey];
    if (!data.exercises) return false;

    for (const exercise of data.exercises) {
      if (!exercise.correctLines || !exercise.lineHints) continue;

      const targetLength = exercise.correctLines.length;
      const currentLength = exercise.lineHints.length;

      if (targetLength !== currentLength) {
        // Decode holeyCode to check which lines have ___
        const holeyCode = exercise.holeyCode || '';
        const holeyLines = holeyCode.split('\n');

        // Build new hints array
        const newHints: (string | null)[] = [];
        for (let i = 0; i < targetLength; i++) {
          const holeyLine = holeyLines[i] || '';
          const hasHole = holeyLine.includes('___');

          // Keep existing hint if valid index and line has hole
          if (hasHole && i < currentLength && exercise.lineHints[i] !== null) {
            newHints.push(exercise.lineHints[i]);
          } else {
            newHints.push(null);
          }
        }

        exercise.lineHints = newHints;
        modified = true;
        console.log(`  Fixed: ${exercise.title} (${currentLength} -> ${targetLength})`);
      }
    }

    if (modified) {
      // Serialize back to file
      const varName = dataKey;
      const jsonStr = JSON.stringify(data, null, 2);
      const newContent = `export const ${varName} = ${jsonStr};\n`;
      fs.writeFileSync(filePath, newContent, 'utf-8');
    }

    return modified;
  } catch (e) {
    console.error(`Error processing ${filePath}:`, e);
    return false;
  }
}

async function main() {
  const files = fs.readdirSync(lessonsDir)
    .filter(f => f.endsWith('.ts') && f !== 'index.ts');

  let fixedCount = 0;
  for (const file of files) {
    const filePath = path.join(lessonsDir, file);
    console.log(`Processing: ${file}`);
    if (await fixFile(filePath)) {
      fixedCount++;
    }
  }

  console.log(`\nTotal files fixed: ${fixedCount}`);
}

main();

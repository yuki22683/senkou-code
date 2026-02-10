import fs from 'fs';
import path from 'path';

const dir = './data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalExercises = 0;
let missingSlides = 0;
const filesMissing = [];

for (const file of files) {
  try {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');

    // exercisesの数を数える
    const exerciseMatches = content.match(/"title":\s*"[^"]+",\s*\n\s*"(?:tutorialSlides|correctCode)"/g);
    if (!exerciseMatches) continue;

    // tutorialSlidesがある演習とない演習を数える
    const withSlides = (content.match(/"title":\s*"[^"]+",\s*\n\s*"tutorialSlides"/g) || []).length;
    const withoutSlides = (content.match(/"title":\s*"[^"]+",\s*\n\s*"correctCode"/g) || []).length;

    if (withoutSlides > 0) {
      console.log(`${file}: ${withoutSlides}/${withSlides + withoutSlides} 演習にtutorialSlidesがない`);
      filesMissing.push({ file, missing: withoutSlides, total: withSlides + withoutSlides });
      missingSlides += withoutSlides;
    }
    totalExercises += withSlides + withoutSlides;
  } catch (e) {
    console.log(`${file}: エラー - ${e.message}`);
  }
}

console.log('');
console.log(`合計: ${missingSlides}/${totalExercises} 演習にtutorialSlidesがない`);
console.log('');
console.log('=== 修正が必要なファイル ===');
filesMissing.forEach(f => console.log(f.file));

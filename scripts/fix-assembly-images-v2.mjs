import fs from 'fs';
import path from 'path';

const lessonsDir = path.join(process.cwd(), 'data', 'lessons');

const mapping = [
  { file: 'assembly2.ts', exercises: [
    { ex: 1, img: 'register_desk.png' },
    { ex: 2, img: 'addition_plus.png' },
    { ex: 3, img: 'subtraction_minus.png' },
    { ex: 4, img: 'multiplication_times.png' },
    { ex: 5, img: 'comparison_balance.png' },
    { ex: 6, img: 'jump_arrow.png' },
    { ex: 7, img: 'jump_arrow.png' },
    { ex: 8, img: 'stack_layer.png' },
    { ex: 9, img: 'register_desk.png' },
    { ex: 10, img: 'function_call.png' },
  ]},
  { file: 'assembly3.ts', exercises: [
    { ex: 1, img: 'decrement_minus1.png' },
    { ex: 2, img: 'multiplication_times.png' },
    { ex: 3, img: 'stack_layer.png' },
    { ex: 4, img: 'stack_layer.png' },
    { ex: 5, img: 'register_desk.png' },
    { ex: 6, img: 'register_desk.png' },
    { ex: 7, img: 'register_desk.png' },
    { ex: 8, img: 'register_desk.png' },
    { ex: 9, img: 'register_desk.png' },
    { ex: 10, img: 'register_desk.png' },
  ]}
];

mapping.forEach(({ file, exercises }) => {
  const filePath = path.join(lessonsDir, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Find each exercise object using a regex that captures the whole object
  // An exercise starts with { "title": ... and ends before the next { "title": or the end of the array
  const exerciseRegex = /\{\s*"title":[\s\S]*?(?=\s*,\s*\{\s*"title":|\s*\]\s*\}\s*;)/g;
  
  let exCounter = 0;
  const newContent = content.replace(exerciseRegex, (match) => {
    exCounter++;
    const rule = exercises.find(e => e.ex === exCounter);
    if (rule) {
      return match.replace(/\/illustrations\/3d\/gear\.png/g, `/illustrations/assembly/${rule.img}`);
    }
    return match;
  });
  
  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`Updated ${exCounter} exercises in ${file}`);
});

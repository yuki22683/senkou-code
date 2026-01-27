import fs from 'fs';
import path from 'path';

const lessonsDir = path.join(process.cwd(), 'data', 'lessons');

const mapping = [
  { file: 'assembly2.ts', exercises: [
    { ex: 1, img: 'register_desk.png' }, // mov
    { ex: 2, img: 'addition_plus.png' },  // add
    { ex: 3, img: 'subtraction_minus.png' }, // sub
    { ex: 4, img: 'multiplication_times.png' }, // mul
    { ex: 5, img: 'comparison_balance.png' }, // cmp
    { ex: 6, img: 'jump_arrow.png' }, // jmp
    { ex: 7, img: 'jump_arrow.png' }, // je
    { ex: 8, img: 'stack_layer.png' }, // push/pop
    { ex: 9, img: 'register_desk.png' }, // xor
    { ex: 10, img: 'function_call.png' }, // call
  ]},
  { file: 'assembly3.ts', exercises: [
    { ex: 1, img: 'decrement_minus1.png' }, // dec
    { ex: 2, img: 'multiplication_times.png' }, // imul
    { ex: 3, img: 'stack_layer.png' }, // push
    { ex: 4, img: 'stack_layer.png' }, // pop
    { ex: 5, img: 'register_desk.png' }, // and
    { ex: 6, img: 'register_desk.png' }, // or
    { ex: 7, img: 'register_desk.png' }, // shl
    { ex: 8, img: 'register_desk.png' }, // shr
    { ex: 9, img: 'register_desk.png' }, // test
    { ex: 10, img: 'register_desk.png' }, // neg
  ]}
];

mapping.forEach(({ file, exercises }) => {
  const filePath = path.join(lessonsDir, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Split by exercises to replace accurately
  const parts = content.split(/\{\s*"title":/);
  const header = parts.shift();
  
  const fixedParts = parts.map((part, index) => {
    const exIndex = index + 1;
    const rule = exercises.find(e => e.ex === exIndex);
    if (rule) {
      // Replace all instances of gear.png within this exercise block
      return part.replace(/\/illustrations\/3d\/gear\.png/g, `/illustrations/assembly/${rule.img}`);
    }
    return part;
  });
  
  const newContent = header + fixedParts.join('{"title":');
  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`Updated images in ${file}`);
});

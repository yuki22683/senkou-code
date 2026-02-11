// 全ての曖昧な「〜メソッドを呼び出す」コメントを修正
import fs from 'fs';
import path from 'path';

const lessonsDir = 'data/lessons';

// 全ての置換パターン
const allReplacements = [
  // cpp2.ts
  ['// 移動メソッドを呼び出す', '// c.move()を呼び出す'],
  ['// 描画メソッドを呼び出す', '// c.draw()を呼び出す'],

  // csharp.ts
  ['// Greetメソッドを呼び出す', '// Greet()を呼び出す'],

  // go2.ts
  ['// インターフェースのメソッドを呼び出す', '// s.Speak()を呼び出す'],

  // java.ts
  ['// greet メソッドを呼び出す', '// greet()を呼び出す'],

  // java2.ts
  ['// move メソッドを呼び出す', '// c.move()を呼び出す'],
  ['// draw メソッドを呼び出す', '// c.draw()を呼び出す'],
  ['// sayHello メソッドを呼び出す', '// p.sayHello()を呼び出す'],
  ['// speak メソッドを呼び出す', '// d.speak()を呼び出す'],
  ['// getPrice メソッドを呼び出す', '// item.getPrice()の結果を出力'],

  // java4.ts
  ['// getDouble メソッドを呼び出す', '// calc.getDouble()の結果を出力'],
  ['// printAll メソッドを呼び出す', '// printAll(names)を呼び出す'],

  // java5.ts
  ['// length メソッドを呼び出す', '// s.length()を呼び出す'],

  // ruby.ts
  ['# greetメソッドを呼び出す', '# greetを呼び出す'],

  // python2.ts
  ['# メソッドを呼び出す', '# cat.meow()を呼び出す'],
];

let totalFixed = 0;

fs.readdirSync(lessonsDir)
  .filter(f => f.endsWith('.ts'))
  .forEach(file => {
    const filePath = path.join(lessonsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fileFixed = 0;

    allReplacements.forEach(([oldStr, newStr]) => {
      const count = (content.match(new RegExp(oldStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
      if (count > 0) {
        content = content.split(oldStr).join(newStr);
        console.log(`${file}: "${oldStr}" → "${newStr}" (${count}件)`);
        fileFixed += count;
      }
    });

    if (fileFixed > 0) {
      fs.writeFileSync(filePath, content, 'utf8');
      totalFixed += fileFixed;
    }
  });

console.log(`\n=== 合計 ${totalFixed} 件修正 ===`);

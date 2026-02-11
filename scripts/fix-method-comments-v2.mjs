// 「〜メソッドを呼び出す」という曖昧なコメントを具体的なコードを含むコメントに修正
import fs from 'fs';
import path from 'path';

const lessonsDir = 'data/lessons';

// 具体的な置換マッピング（ファイル別・コンテキスト別）
const replacements = {
  // cpp2.ts
  'cpp2.ts': [
    ['// 移動メソッドを呼び出す', '// c.move()を呼び出す'],
    ['// 描画メソッドを呼び出す', '// c.draw()を呼び出す'],
  ],
  // csharp.ts - Greetメソッドはメソッド名があるのでOK、ただしGreet()の形式に
  'csharp.ts': [
    ['// Greetメソッドを呼び出す', '// Greet()を呼び出す'],
  ],
  // go2.ts
  'go2.ts': [
    ['// インターフェースのメソッドを呼び出す', '// s.Speak()を呼び出す'],
  ],
  // java.ts
  'java.ts': [
    ['// greet メソッドを呼び出す', '// greet()を呼び出す'],
  ],
  // java2.ts
  'java2.ts': [
    ['// move メソッドを呼び出す', '// c.move()を呼び出す'],
    ['// draw メソッドを呼び出す', '// c.draw()を呼び出す'],
    ['// sayHello メソッドを呼び出す', '// p.sayHello()を呼び出す'],
    ['// speak メソッドを呼び出す', '// d.speak()を呼び出す'],
    ['// getPrice メソッドを呼び出す', '// item.getPrice()の結果を出力'],
  ],
  // java3.ts - nums.stream()の呼び出し
  'java3.ts': [
    ['// メソッドを呼び出す', '// nums.stream()でストリームを作成'],
  ],
  // java4.ts
  'java4.ts': [
    ['// getDouble メソッドを呼び出す', '// calc.getDouble()の結果を出力'],
    ['// printAll メソッドを呼び出す', '// printAll(names)を呼び出す'],
  ],
  // java5.ts
  'java5.ts': [
    ['// length メソッドを呼び出す', '// s.length()を呼び出す'],
  ],
  // javascript2.ts - console.log('20代')
  'javascript2.ts': [
    ["// メソッドを呼び出す", "// console.log('20代')を出力"],
  ],
  // javascript4.ts - console.log(square(5))
  'javascript4.ts': [
    ["// メソッドを呼び出す", "// console.log(square(3))を出力"],
  ],
  // javascript5.ts - console.log
  'javascript5.ts': [
    ["// メソッドを呼び出す\\n    ___.___('___');\\n    // throw", "// console.log('開始')を出力\\n    ___.___('___');\\n    // throw"],
    ["// メソッドを呼び出す\\n    ___.___('___');\\n  // ブロック", "// console.log('終了')を出力\\n    ___.___('___');\\n  // ブロック"],
  ],
  // python2.ts
  'python2.ts': [
    ['# メソッドを呼び出す', '# cat.meow()を呼び出す'],
  ],
  // rust2.ts - 2箇所
  'rust2.ts': [
    // add_world内のpush_str
    ['// メソッドを呼び出す\\n    ___.___(\\\"___\\\")', '// s.push_str(\" world\")を呼び出す\\n    ___.___(\\\"___\\\")'],
    // main内のd.speak()
    ['// メソッドを呼び出す\\n    ___.___();\\n// ブロック', '// d.speak()を呼び出す\\n    ___.___();\\n// ブロック'],
  ],
  // rust3.ts - nums.push(20)
  'rust3.ts': [
    ['// メソッドを呼び出す', '// nums.push(20)を呼び出す'],
  ],
  // rust4.ts - set.insert
  'rust4.ts': [
    // 3回のset.insert
  ],
  // typescript.ts - console.log
  'typescript.ts': [
    // 複数のconsole.log
  ],
};

let totalFixed = 0;

// 単純な置換を実行
Object.entries(replacements).forEach(([file, replaceList]) => {
  const filePath = path.join(lessonsDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`スキップ: ${file} (ファイルが存在しない)`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let fileFixed = 0;

  replaceList.forEach(([oldStr, newStr]) => {
    if (content.includes(oldStr)) {
      content = content.split(oldStr).join(newStr);
      console.log(`${file}: "${oldStr.substring(0, 40)}..." → "${newStr.substring(0, 40)}..."`);
      fileFixed++;
    }
  });

  if (fileFixed > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    totalFixed += fileFixed;
  }
});

console.log(`\n=== 合計 ${totalFixed} 件修正 ===`);
console.log('\n残りのチェック:');
console.log('grep -rn "メソッドを呼び出す" data/lessons/*.ts | grep -v content | grep -v tutorialSlides');

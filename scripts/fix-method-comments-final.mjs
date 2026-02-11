// 残りの「// メソッドを呼び出す」を具体的なコメントに修正
import fs from 'fs';
import path from 'path';

const lessonsDir = 'data/lessons';

// 各ファイルの具体的な修正
const fixes = {
  'javascript2.ts': {
    // console.log('20代です')を出力
    holey: [
      ['// メソッドを呼び出す\\n    ___.___', "// console.log('20代です')を出力\\n    ___.___"]
    ],
    correct: [
      ["if (age >= 20 && age < 30) {\\n    console.log", "if (age >= 20 && age < 30) {\\n    // console.log('20代です')を出力\\n    console.log"]
    ],
    lines: [
      ['"    console.log(', '"    // console.log(\'20代です\')を出力",\n          "    console.log(']
    ]
  },
  'javascript4.ts': {
    // console.log(square(3))を出力
    holey: [
      ['// メソッドを呼び出す\\n___.___(___', "// console.log(square(3))を出力\\n___.___(___("]
    ],
  },
  'javascript5.ts': {
    // 2箇所: console.log('開始')とconsole.log('終了')
    holey: [
      ["// メソッドを呼び出す\\n    ___.___('___');\\n    // throw", "// console.log('開始')を出力\\n    ___.___('___');\\n    // throw"],
      ["// メソッドを呼び出す\\n    ___.___('___');\\n  // ブロック", "// console.log('終了')を出力\\n    ___.___('___');\\n  // ブロック"],
    ]
  },
  'rust2.ts': {
    // 2箇所: s.push_str(" world")とd.speak()
    holey: [
      ['// メソッドを呼び出す\\n    ___.___(\\\"___\\\")', '// s.push_str(\" world\")を呼び出す\\n    ___.___(\\\"___\\\")'],
      ['// メソッドを呼び出す\\n    ___.___();\\n// ブロック', '// d.speak()を呼び出す\\n    ___.___();\\n// ブロック'],
    ]
  },
  'rust3.ts': {
    // nums.push(20)を呼び出す
    holey: [
      ['// メソッドを呼び出す\\n    ___.___(___);\\n    // 出力', '// nums.push(20)を呼び出す\\n    ___.___(___);\\n    // 出力']
    ]
  },
  'rust4.ts': {
    // set.insert(1), set.insert(2), set.insert(1)
    holey: [
      ['// メソッドを呼び出す\\n    ___.___(___);\\n    // メソッドを呼び出す\\n    ___.___(___);\\n    // メソッドを呼び出す\\n    ___.___(___);\\n    // 出力', '// set.insert(1)を呼び出す\\n    ___.___(___);\\n    // set.insert(2)を呼び出す\\n    ___.___(___);\\n    // set.insert(1)を呼び出す（重複）\\n    ___.___(___);\\n    // 出力']
    ]
  },
  'typescript.ts': {
    // 3箇所: console.log(name), console.log(`こんにちは、${name}`), console.log('今日の日付')
    holey: [
      // for of loop内のconsole.log(name)
      ["for (const ___ of ___) {\\n    // メソッドを呼び出す\\n    ___.___(___);", "for (const ___ of ___) {\\n    // console.log(name)を出力\\n    ___.___(___);"],
      // greet関数内
      ["function ___(___: ___) {\\n    // メソッドを呼び出す\\n    ___.___(___);", "function ___(___: ___) {\\n    // console.log(`こんにちは、${name}`)を出力\\n    ___.___(___);"],
      // showDate関数内
      ["function ___(): ___ {\\n    // メソッドを呼び出す\\n    ___.___(___);", "function ___(): ___ {\\n    // console.log('今日の日付')を出力\\n    ___.___(___);"],
    ]
  },
};

let totalFixed = 0;

Object.entries(fixes).forEach(([file, fixData]) => {
  const filePath = path.join(lessonsDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`スキップ: ${file}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let fileFixed = 0;

  // holeyの修正
  if (fixData.holey) {
    fixData.holey.forEach(([oldStr, newStr]) => {
      if (content.includes(oldStr)) {
        content = content.replace(oldStr, newStr);
        console.log(`${file} holey: 修正完了`);
        fileFixed++;
      }
    });
  }

  // correctの修正
  if (fixData.correct) {
    fixData.correct.forEach(([oldStr, newStr]) => {
      if (content.includes(oldStr)) {
        content = content.replace(oldStr, newStr);
        console.log(`${file} correct: 修正完了`);
        fileFixed++;
      }
    });
  }

  // linesの修正
  if (fixData.lines) {
    fixData.lines.forEach(([oldStr, newStr]) => {
      if (content.includes(oldStr)) {
        content = content.replace(oldStr, newStr);
        console.log(`${file} lines: 修正完了`);
        fileFixed++;
      }
    });
  }

  if (fileFixed > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    totalFixed += fileFixed;
  }
});

console.log(`\n=== 合計 ${totalFixed} 件修正 ===`);

// 残りを確認
console.log('\n残りの確認:');
const { execSync } = await import('child_process');
try {
  const result = execSync('grep -rn "// メソッドを呼び出す" data/lessons/*.ts | grep -v "content\\":" | grep -v tutorialSlides', { encoding: 'utf8' });
  console.log(result);
} catch (e) {
  console.log('残り: 0件');
}

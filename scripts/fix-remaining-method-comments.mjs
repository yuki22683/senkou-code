// 残りの「// メソッドを呼び出す」コメントを具体的に修正
import fs from 'fs';
import path from 'path';

const lessonsDir = 'data/lessons';

// ファイル別の置換（順序が重要なものは先に）
const fileReplacements = {
  'java3.ts': [
    // nums.stream()の呼び出し（holeyCodeのみにある）
    ['// メソッドを呼び出す\\n        ___.___()\\n            // 各要素を変換', '// nums.stream()でストリームを作成\\n        ___.___()\\n            // 各要素を変換'],
    ['// メソッドを呼び出す\\n        ___.___()\\n            // 条件に合う', '// nums.stream()でストリームを作成\\n        ___.___()\\n            // 条件に合う'],
    ['// メソッドを呼び出す\\n        ___.___()\\n            // 要素を昇順', '// nums.stream()でストリームを作成\\n        ___.___()\\n            // 要素を昇順'],
    ['// メソッドを呼び出す\\n        ___.___()\\n            // 重複した', '// nums.stream()でストリームを作成\\n        ___.___()\\n            // 重複した'],
  ],
  'javascript2.ts': [
    // console.log('20代です')
    ["// メソッドを呼び出す\\n    ___.___('___');\\n// ブロック", "// console.log('20代です')を出力\\n    ___.___('___');\\n// ブロック"],
  ],
  'javascript4.ts': [
    // console.log(square(3))
    ["// メソッドを呼び出す\\n___.___(___(___));", "// console.log(square(3))を出力\\n___.___(___(___));"],
  ],
  'javascript5.ts': [
    // console.log('開始') と console.log('終了')
    ["// メソッドを呼び出す\\n    ___.___('___');\\n    // throw", "// console.log('開始')を出力\\n    ___.___('___');\\n    // throw"],
    ["// メソッドを呼び出す\\n    ___.___('___');\\n  // ブロック", "// console.log('終了')を出力\\n    ___.___('___');\\n  // ブロック"],
  ],
  'rust2.ts': [
    // s.push_str(" world")
    ['// メソッドを呼び出す\\n    ___.___(\\\"___\\\");\\n// ブロックを閉じる\\n___\\n// main', '// s.push_str(\" world\")を呼び出す\\n    ___.___(\\\"___\\\");\\n// ブロックを閉じる\\n___\\n// main'],
    // d.speak()
    ['// メソッドを呼び出す\\n    ___.___();\\n// ブロックを閉じる\\n___"', '// d.speak()を呼び出す\\n    ___.___();\\n// ブロックを閉じる\\n___"'],
  ],
  'rust3.ts': [
    // nums.push(20)
    ['// メソッドを呼び出す\\n    ___.___(___);\\n    // 出力', '// nums.push(20)を呼び出す\\n    ___.___(___);\\n    // 出力'],
  ],
  'rust4.ts': [
    // set.insert(1), set.insert(2), set.insert(1)
    ['// メソッドを呼び出す\\n    ___.___(___);\\n    // メソッドを呼び出す\\n    ___.___(___);\\n    // メソッドを呼び出す\\n    ___.___(___);\\n    // 出力', '// set.insert(1)を呼び出す\\n    ___.___(___);\\n    // set.insert(2)を呼び出す\\n    ___.___(___);\\n    // set.insert(1)を呼び出す（重複）\\n    ___.___(___);\\n    // 出力'],
  ],
  'typescript.ts': [
    // console.log(name)
    ["// メソッドを呼び出す\\n    ___.___(___);\\n// ブロックを閉じる\\n___\"", "// console.log(name)を出力\\n    ___.___(___);\\n// ブロックを閉じる\\n___\""],
    // console.log(`こんにちは、${name}`)
    ['// メソッドを呼び出す\\n    ___.___(___);\\n// ブロックを閉じる\\n___\\n// 関数を実行する\\n___(___);",', '// console.log(`こんにちは、${name}`)を出力\\n    ___.___(___);\\n// ブロックを閉じる\\n___\\n// 関数を実行する\\n___(___);",'],
    // console.log('今日の日付')
    ["// メソッドを呼び出す\\n    ___.___(___);\\n// ブロックを閉じる\\n___\\n// 関数を実行する\\n___();\"", "// console.log('今日の日付')を出力\\n    ___.___(___);\\n// ブロックを閉じる\\n___\\n// 関数を実行する\\n___();\""],
  ],
};

let totalFixed = 0;

Object.entries(fileReplacements).forEach(([file, replacements]) => {
  const filePath = path.join(lessonsDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`スキップ: ${file}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let fileFixed = 0;

  replacements.forEach(([oldStr, newStr]) => {
    if (content.includes(oldStr)) {
      content = content.split(oldStr).join(newStr);
      console.log(`${file}: 修正完了`);
      fileFixed++;
    }
  });

  if (fileFixed > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    totalFixed += fileFixed;
  }
});

console.log(`\n=== 合計 ${totalFixed} 件修正 ===`);

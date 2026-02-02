import fs from 'fs';

const filePath = './data/lessons/javascript4.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// Fix all exercises with specific output comments
const replacements = [
  // every
  { from: '"holeyCode": "// [80, 90, 75, 85] の配列を定義\\nconst ___ = [80, 90, 75, 85];\\n// every で全要素をチェック\\nconst ___ = scores.every(score => score >= 60);\\n// 結果を出力\\nconsole.log(___);"',
    to: '"holeyCode": "// [80, 90, 75, 85] の配列を定義\\nconst ___ = [80, 90, 75, 85];\\n// every で全要素をチェック\\nconst ___ = scores.every(score => score >= 60);\\n// allPassedを出力\\nconsole.log(___);"' },
  { from: '"// 結果を出力",\n          "console.log(allPassed);"',
    to: '"// allPassedを出力",\n          "console.log(allPassed);"' },

  // some
  { from: '"holeyCode": "// [15, 22, 17, 19] の配列を定義\\nconst ___ = [15, 22, 17, 19];\\n// some でいずれかの要素をチェック\\nconst ___ = ages.some(age => age >= 20);\\n// 結果を出力\\nconsole.log(___);"',
    to: '"holeyCode": "// [15, 22, 17, 19] の配列を定義\\nconst ___ = [15, 22, 17, 19];\\n// some でいずれかの要素をチェック\\nconst ___ = ages.some(age => age >= 20);\\n// hasAdultを出力\\nconsole.log(___);"' },
  { from: '"// 結果を出力",\n          "console.log(hasAdult);"',
    to: '"// hasAdultを出力",\n          "console.log(hasAdult);"' },

  // flatMap
  { from: '"holeyCode": "// [\'hello\', \'world\'] の配列を定義\\nconst ___ = [\'hello\', \'world\'];\\n// flatMap でmapと平坦化を同時に行う\\nconst ___ = words.flatMap(w => w.split(\'\'));\\n// 結果を出力\\nconsole.log(___);"',
    to: '"holeyCode": "// [\'hello\', \'world\'] の配列を定義\\nconst ___ = [\'hello\', \'world\'];\\n// flatMap でmapと平坦化を同時に行う\\nconst ___ = words.flatMap(w => w.split(\'\'));\\n// charsを出力\\nconsole.log(___);"' },
  { from: '"// 結果を出力",\n          "console.log(chars);"',
    to: '"// charsを出力",\n          "console.log(chars);"' },

  // Object.fromEntries
  { from: '"holeyCode": "// name: \'Python\', version: \'3.12\' のキーと値のペアの配列を定義\\nconst ___ = [[\'name\', \'Python\'], [\'version\', \'3.12\']];\\n// fromEntries で配列からオブジェクトを作成\\nconst ___ = Object.fromEntries(pairs);\\n// 結果を出力\\nconsole.log(___);"',
    to: '"holeyCode": "// name: \'Python\', version: \'3.12\' のキーと値のペアの配列を定義\\nconst ___ = [[\'name\', \'Python\'], [\'version\', \'3.12\']];\\n// fromEntries で配列からオブジェクトを作成\\nconst ___ = Object.fromEntries(pairs);\\n// objを出力\\nconsole.log(___);"' },
  { from: '"// 結果を出力",\n          "console.log(obj);"',
    to: '"// objを出力",\n          "console.log(obj);"' },

  // カリー化
  { from: '"holeyCode": "// => でアロー関数を連鎖させる\\nconst ___ = a => b => a * b;\\n// 部分適用で2倍する関数を作成\\nconst ___ = multiply(2);\\n// 結果を出力\\nconsole.___(double(5));"',
    to: '"holeyCode": "// => でアロー関数を連鎖させる\\nconst ___ = a => b => a * b;\\n// 部分適用で2倍する関数を作成\\nconst ___ = multiply(2);\\n// double(5)を出力\\nconsole.___(double(5));"' },
  { from: '"// 結果を出力",\n          "console.log(double(5));"',
    to: '"// double(5)を出力",\n          "console.log(double(5));"' },

  // 関数合成
  { from: '"holeyCode": "// g を先に実行してfに渡す\\nconst ___ = (f, g) => x => f(g(x));\\n// 2乗する関数\\nconst ___ = x => x * x;\\n// 符号を反転する関数\\nconst ___ = x => -x;\\n// 関数を合成\\nconst ___ = compose(negate, square);\\n// 結果を出力\\nconsole.___(squareThenNegate(3));"',
    to: '"holeyCode": "// g を先に実行してfに渡す\\nconst ___ = (f, g) => x => f(g(x));\\n// 2乗する関数\\nconst ___ = x => x * x;\\n// 符号を反転する関数\\nconst ___ = x => -x;\\n// 関数を合成\\nconst ___ = compose(negate, square);\\n// squareThenNegate(3)を出力\\nconsole.___(squareThenNegate(3));"' },
  { from: '"// 結果を出力",\n          "console.log(squareThenNegate(3));"',
    to: '"// squareThenNegate(3)を出力",\n          "console.log(squareThenNegate(3));"' },
];

for (const r of replacements) {
  if (content.includes(r.from)) {
    content = content.replace(r.from, r.to);
    console.log('Fixed a pattern');
  }
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Done fixing javascript4.ts');

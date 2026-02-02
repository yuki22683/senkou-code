import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

// Specific fixes for each file - map of file -> array of {from, to}
const fixes = {
  'javascript4.ts': [
    // every exercise
    { from: '// 結果を出力\\nconsole.log(allPassed);', to: '// allPassedを出力\\nconsole.log(allPassed);' },
    // some exercise
    { from: '// 結果を出力\\nconsole.log(hasAdult);', to: '// hasAdultを出力\\nconsole.log(hasAdult);' },
    // flatMap exercise
    { from: '// 結果を出力\\nconsole.log(chars);', to: '// charsを出力\\nconsole.log(chars);' },
    // Object.fromEntries exercise
    { from: '// 結果を出力\\nconsole.log(obj);', to: '// objを出力\\nconsole.log(obj);' },
    // カリー化 exercise
    { from: '// 結果を出力\\nconsole.log(double(5));', to: '// double(5)を出力\\nconsole.log(double(5));' },
    // 関数合成 exercise
    { from: '// 結果を出力\\nconsole.log(squareThenNegate(3));', to: '// squareThenNegate(3)を出力\\nconsole.log(squareThenNegate(3));' },
    // メモ化 exercise
    { from: '// 結果を出力\\nconsole.log(square(5));', to: '// square(5)を出力\\nconsole.log(square(5));' },
    // パイプライン exercise
    { from: '// 結果を出力\\nconsole.log(process(5));', to: '// process(5)を出力\\nconsole.log(process(5));' },
    // correctLines fixes
    { from: '"// 結果を出力",\\n          "console.log(allPassed);"', to: '"// allPassedを出力",\\n          "console.log(allPassed);"' },
    { from: '"// 結果を出力",\\n          "console.log(hasAdult);"', to: '"// hasAdultを出力",\\n          "console.log(hasAdult);"' },
    { from: '"// 結果を出力",\\n          "console.log(chars);"', to: '"// charsを出力",\\n          "console.log(chars);"' },
    { from: '"// 結果を出力",\\n          "console.log(obj);"', to: '"// objを出力",\\n          "console.log(obj);"' },
    { from: '"// 結果を出力",\\n          "console.log(double(5));"', to: '"// double(5)を出力",\\n          "console.log(double(5));"' },
    { from: '"// 結果を出力",\\n          "console.log(squareThenNegate(3));"', to: '"// squareThenNegate(3)を出力",\\n          "console.log(squareThenNegate(3));"' },
    { from: '"// 結果を出力",\\n          "console.log(square(5));",\\n          "console.log(square(5));"', to: '"// square(5)を出力",\\n          "console.log(square(5));",\\n          "console.log(square(5));"' },
    { from: '"// 結果を出力",\\n          "console.log(process(5));"', to: '"// process(5)を出力",\\n          "console.log(process(5));"' },
  ],
  'javascript5.ts': [
    // match() exercise
    { from: '// 結果を出力\\nconsole.log(matches);', to: '// matchesを出力\\nconsole.log(matches);' },
    // replace() exercise
    { from: '// 結果を出力\\nconsole.log(masked);', to: '// maskedを出力\\nconsole.log(masked);' },
    // Symbol exercise
    { from: '// オブジェクトを定義\\nconst obj', to: '// uniqueKeyを持つobjを定義\\nconst obj' },
    // correctLines
    { from: '"// 結果を出力",\\n          "console.log(matches);"', to: '"// matchesを出力",\\n          "console.log(matches);"' },
    { from: '"// 結果を出力",\\n          "console.log(masked);"', to: '"// maskedを出力",\\n          "console.log(masked);"' },
    { from: '"// オブジェクトを定義",', to: '"// uniqueKeyを持つobjを定義",' },
  ],
  'lua2.ts': [
    // 複数の戻り値
    { from: '-- returnで値を返す\\n  return a + b, a - b', to: '-- a + b と a - b を返す\\n  return a + b, a - b' },
    // correctLines
    { from: '"  -- returnで値を返す",\\n          "  return a + b, a - b"', to: '"  -- a + b と a - b を返す",\\n          "  return a + b, a - b"' },
  ],
  'lua3.ts': [
    // pcall exercise
    { from: '-- 結果を出力\\nprint(success, result)', to: '-- success と result を出力\\nprint(success, result)' },
    { from: '"-- 結果を出力",\\n          "print(success, result)"', to: '"-- success と result を出力",\\n          "print(success, result)"' },
  ],
  'php.ts': [
    { from: '// 結果を出力\\necho $canVote', to: '// $canVote を出力\\necho $canVote' },
    { from: '"// 結果を出力",\\n          "echo $canVote', to: '"// $canVote を出力",\\n          "echo $canVote' },
  ],
  'php3.ts': [
    // トレイト - the return statement
    { from: '// returnで値を返す\\n        return', to: '// $this->name を返す\\n        return' },
    { from: '"        // returnで値を返す",', to: '"        // $this->name を返す",' },
  ],
  'swift2.ts': [
    // オプショナルバインディング
    { from: '// 値を出力\\n    print(value)', to: '// valueを出力\\n    print(value)' },
    { from: '"// 結果を出力",\\n          "print(doubled)"', to: '"// doubledを出力",\\n          "print(doubled)"' },
    { from: '// 結果を出力\\nprint(doubled)', to: '// doubledを出力\\nprint(doubled)' },
    { from: '// 結果を出力\\nprint(evens)', to: '// evensを出力\\nprint(evens)' },
    { from: '"// 結果を出力",\\n          "print(evens)"', to: '"// evensを出力",\\n          "print(evens)"' },
    { from: '"    // 値を出力",\\n          "    print(value)"', to: '"    // valueを出力",\\n          "    print(value)"' },
  ],
  'swift3.ts': [
    { from: '// 結果を出力\\nprint(validNumbers)', to: '// validNumbersを出力\\nprint(validNumbers)' },
    { from: '"// 結果を出力",\\n          "print(validNumbers)"', to: '"// validNumbersを出力",\\n          "print(validNumbers)"' },
    { from: '// 結果を出力\\nprint(sum)', to: '// sumを出力\\nprint(sum)' },
    { from: '"// 結果を出力",\\n          "print(sum)"', to: '"// sumを出力",\\n          "print(sum)"' },
    { from: '// 結果を出力\\nprint(result)', to: '// resultを出力\\nprint(result)' },
    { from: '"// 結果を出力",\\n          "print(result)"', to: '"// resultを出力",\\n          "print(result)"' },
    // throws と rethrows
    { from: '// 値を返す\\n        return n * n', to: '// n * n を返す\\n        return n * n' },
    { from: '"        // 値を返す",\\n          "        return n * n"', to: '"        // n * n を返す",\\n          "        return n * n"' },
    { from: '// 値を出力\\n    print(squared)', to: '// squaredを出力\\n    print(squared)' },
    { from: '"    // 値を出力",\\n          "    print(squared)"', to: '"    // squaredを出力",\\n          "    print(squared)"' },
  ],
  'swift4.ts': [
    { from: '// 結果を出力\\nprint(sum)', to: '// sumを出力\\nprint(sum)' },
    { from: '"// 結果を出力",\\n          "print(sum)"', to: '"// sumを出力",\\n          "print(sum)"' },
  ],
  'typescript3.ts': [
    // 条件型
    { from: '// 結果を出力\\nconsole.log(resultA, resultB)', to: '// resultA と resultB を出力\\nconsole.log(resultA, resultB)' },
    { from: '"// 結果を出力",\\n          "console.log(resultA, resultB)"', to: '"// resultA と resultB を出力",\\n          "console.log(resultA, resultB)"' },
    // infer
    { from: '// 結果を出力\\nconsole.log(numResult, strResult)', to: '// numResult と strResult を出力\\nconsole.log(numResult, strResult)' },
    { from: '"// 結果を出力",\\n          "console.log(numResult, strResult)"', to: '"// numResult と strResult を出力",\\n          "console.log(numResult, strResult)"' },
  ],
};

let totalFixed = 0;

for (const [file, fileFixess] of Object.entries(fixes)) {
  const filePath = path.join(lessonsDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${file}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  const original = content;

  for (const fix of fileFixess) {
    content = content.split(fix.from).join(fix.to);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed: ${file}`);
    totalFixed++;
  }
}

console.log(`\nTotal fixed: ${totalFixed}`);

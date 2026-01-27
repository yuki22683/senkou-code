import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function fixAllQuotes() {
  const files = await glob('data/lessons/*.ts');
  
  for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    let modified = false;

    // holeyCode": "..." の中身を抽出して修正
    const holeyRegex = /("holeyCode":\s*")((?:[^"\\]|\\.)*)(")/g;
    
    const newContent = content.replace(holeyRegex, (match, head, body, tail) => {
      // ボディ内のクォートの数を数える（エスケープされていないもの）
      // と思ったが、そもそも esbuild がエラーを出すのは、body が途中で切れているから
      // つまり match 自体が正しく取れない可能性がある
      return match;
    });

    // 行単位で、明らかに壊れているパターンを修正
    const lines = content.split(/\r?\n/);
    const fixedLines = lines.map(line => {
      let newLine = line;
      // パターン 1: \"___" -> \"___\"
      if (newLine.includes('\"___"') && !newLine.includes('\"___\"')) {
        newLine = newLine.split('\"___"').join('\"___\"');
      }
      // パターン 2: "___\" (前がない) -> \"___\"
      if (newLine.includes('"___\"') && !newLine.includes('\"___\"')) {
        newLine = newLine.split('"___\"').join('\"___\"');
      }
      // パターン 3: 名前: "___", (Elixir/JS等) -> 名前: \"___",
      // JSON文字列内なので " は \" であるべき
      if (newLine.includes(': "___"') && !newLine.includes(': \"___\"')) {
        newLine = newLine.split(': "___"').join(': \"___\"');
      }
      
      if (newLine !== line) modified = true;
      return newLine;
    });

    if (modified) {
      console.log(`Fixed quotes in ${file}`);
      fs.writeFileSync(file, fixedLines.join('\n'), 'utf-8');
    }
  }
}

fixAllQuotes();

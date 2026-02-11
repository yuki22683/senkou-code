import fs from 'fs';
import path from 'path';

const lessonsDir = 'data/lessons';

// 配列リテラルコメントを意味のあるコメントに変換
const replacements = [
  // Java/Swift patterns - ["A", "B"] style
  { pattern: /\/\/ namesに\["A", "B"\]を代入/g, replacement: '// 名前リスト（A、B）をnamesに代入' },
  { pattern: /\/\/ namesに\[\\?"A\\?", \\?"B\\?"\]を代入/g, replacement: '// 名前リスト（A、B）をnamesに代入' },
  { pattern: /\/\/ namesに\[\\"A\\", \\"B\\"\]を代入/g, replacement: '// 名前リスト（A、B）をnamesに代入' },
  { pattern: /\/\/ namesに\[\\\\\"A\\\\\", \\\\\"B\\\\\"\]を代入/g, replacement: '// 名前リスト（A、B）をnamesに代入' },
  
  // wordsに["猫", "a", "elephant"]
  { pattern: /\/\/ wordsに\["猫", "a", "elephant"\]を代入/g, replacement: '// 単語リスト（猫、a、elephant）をwordsに代入' },
  { pattern: /\/\/ wordsに\[\\?"猫\\?", \\?"a\\?", \\?"elephant\\?"\]を代入/g, replacement: '// 単語リスト（猫、a、elephant）をwordsに代入' },
  { pattern: /\/\/ wordsに\[\\"猫\\", \\"a\\", \\"elephant\\"\]を代入/g, replacement: '// 単語リスト（猫、a、elephant）をwordsに代入' },
  { pattern: /\/\/ wordsに\[\\\\\"猫\\\\\", \\\\\"a\\\\\", \\\\\"elephant\\\\\"\]を代入/g, replacement: '// 単語リスト（猫、a、elephant）をwordsに代入' },
  
  // colorsに{"R", "G", "B"}
  { pattern: /\/\/ colorsに\{"R", "G", "B"\}を代入/g, replacement: '// 色コード配列（R、G、B）をcolorsに代入' },
  { pattern: /\/\/ colorsに\{\\?"R\\?", \\?"G\\?", \\?"B\\?"\}を代入/g, replacement: '// 色コード配列（R、G、B）をcolorsに代入' },
  { pattern: /\/\/ colorsに\{\\"R\\", \\"G\\", \\"B\\"\}を代入/g, replacement: '// 色コード配列（R、G、B）をcolorsに代入' },
  { pattern: /\/\/ colorsに\{\\\\\"R\\\\\", \\\\\"G\\\\\", \\\\\"B\\\\\"\}を代入/g, replacement: '// 色コード配列（R、G、B）をcolorsに代入' },
  
  // colorsに{"赤", "青", "緑"} (csharp)
  { pattern: /\/\/ colorsに\{"赤", "青", "緑"\}を代入/g, replacement: '// 色配列（赤、青、緑）をcolorsに代入' },
  { pattern: /\/\/ colorsに\{\\"赤\\", \\"青\\", \\"緑\\"\}を代入/g, replacement: '// 色配列（赤、青、緑）をcolorsに代入' },
  
  // namesに{"太郎", "花子"} (csharp)
  { pattern: /\/\/ namesに\{"太郎", "花子"\}を代入/g, replacement: '// 名前配列（太郎、花子）をnamesに代入' },
  { pattern: /\/\/ namesに\{\\"太郎\\", \\"花子\\"\}を代入/g, replacement: '// 名前配列（太郎、花子）をnamesに代入' },
  
  // fruitsに{"りんご", "バナナ"} (cpp)
  { pattern: /\/\/ fruitsに\{"りんご", "バナナ"\}を代入/g, replacement: '// 果物配列（りんご、バナナ）をfruitsに代入' },
  { pattern: /\/\/ fruitsに\{\\"りんご\\", \\"バナナ\\"\}を代入/g, replacement: '// 果物配列（りんご、バナナ）をfruitsに代入' },
  
  // numsに{10, 20, 30} (cpp)
  { pattern: /\/\/ numsに\{10, 20, 30\}を代入/g, replacement: '// 数値配列（10、20、30）をnumsに代入' },
  
  // arrに{10, 20, 30} (cpp)
  { pattern: /\/\/ arrに\{10, 20, 30\}を代入/g, replacement: '// 数値配列（10、20、30）をarrに代入' },
  
  // vに{1, 2, 3} (cpp)
  { pattern: /\/\/ vに\{1, 2, 3\}を代入/g, replacement: '// 数値配列（1、2、3）をvに代入' },
  
  // vに{1, 2, 3, 4, 5} (cpp)
  { pattern: /\/\/ vに\{1, 2, 3, 4, 5\}を代入/g, replacement: '// 数値配列（1〜5）をvに代入' },
  
  // vに{3, 1, 4, 1, 5} (cpp)
  { pattern: /\/\/ vに\{3, 1, 4, 1, 5\}を代入/g, replacement: '// 数値配列（3、1、4、1、5）をvに代入' },
  
  // numsに{1, 2, 3, 4, 5, 6} (csharp)
  { pattern: /\/\/ numsに\{1, 2, 3, 4, 5, 6\}を代入/g, replacement: '// 数値配列（1〜6）をnumsに代入' },
  
  // cacheに{} (javascript)
  { pattern: /\/\/ cacheに\{\}を代入/g, replacement: '// 空オブジェクトをcacheに代入' },
  
  // Swift patterns - ["1", "a", "2", "b", "3"]
  { pattern: /\/\/ numsに\["1", "a", "2", "b", "3"\]を代入/g, replacement: '// 文字列配列（数字と文字が混在）をnumsに代入' },
  { pattern: /\/\/ numsに\[\\"1\\", \\"a\\", \\"2\\", \\"b\\", \\"3\\"\]を代入/g, replacement: '// 文字列配列（数字と文字が混在）をnumsに代入' },
  
  // numsに[1, 2, 3, 4, 5]
  { pattern: /\/\/ numsに\[1, 2, 3, 4, 5\]を代入/g, replacement: '// 数値配列（1〜5）をnumsに代入' },
  
  // numsに[1, -2, 3, -4, 5]
  { pattern: /\/\/ numsに\[1, -2, 3, -4, 5\]を代入/g, replacement: '// 数値配列（正負が交互）をnumsに代入' },
  
  // numsに[10, 20, 30]
  { pattern: /\/\/ numsに\[10, 20, 30\]を代入/g, replacement: '// 数値配列（10、20、30）をnumsに代入' },
  
  // TypeScript object patterns
  { pattern: /\/\/ itemに\{id: 1, name: 'りんご'\}を代入/g, replacement: '// Itemオブジェクト（id:1、名前:りんご）をitemに代入' },
  { pattern: /\/\/ uに\{id: 1, name: '太郎'\}を代入/g, replacement: '// Userオブジェクト（id:1、名前:太郎）をuに代入' },
  { pattern: /\/\/ resultに\{data: '成功'\}を代入/g, replacement: '// Resultオブジェクト（data:成功）をresultに代入' },
  { pattern: /\/\/ userに\{ name: 'たろう' \}を代入/g, replacement: '// Userオブジェクト（名前:たろう）をuserに代入' },
  { pattern: /\/\/ cfgに\{host: 'localhost', port: 3000\}を代入/g, replacement: '// 設定オブジェクト（host、port）をcfgに代入' },
  { pattern: /\/\/ pに\{x: 5, y: 15\}を代入/g, replacement: '// Pointオブジェクト（x:5、y:15）をpに代入' },
  { pattern: /\/\/ personに\{name: 'ボブ', age: 30\}を代入/g, replacement: '// Personオブジェクト（名前:ボブ、年齢:30）をpersonに代入' },
  
  // Java patterns with Arrays.asList - holeyCode versions (escaped quotes)
  { pattern: /\/\/ namesに\[\\\\\"アリス\\\\\", \\\\\"ボブ\\\\\"\]を代入/g, replacement: '// 名前リスト（アリス、ボブ）をnamesに代入' },
];

const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts'));

let totalChanges = 0;

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  for (const {pattern, replacement} of replacements) {
    const before = content;
    content = content.replace(pattern, replacement);
    if (content !== before) {
      changed = true;
      const matches = before.match(pattern);
      if (matches) {
        console.log(`${file}: ${matches.length} replacements for pattern "${pattern.source.substring(0, 50)}..."`);
        totalChanges += matches.length;
      }
    }
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

console.log(`\nTotal changes: ${totalChanges}`);

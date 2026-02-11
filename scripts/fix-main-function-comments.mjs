// correctLinesの「// 関数を定義」を「// main関数を定義」に修正（main関数の場合）
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let fileChanged = false;

  // correctLines内の「// 関数を定義」+ func main() パターンを修正
  const patterns = [
    // Go: "// 関数を定義", "func main() {"
    [/"\/\/ 関数を定義",\s*\n\s*"func main\(\) \{"/g, '"// main関数を定義",\n          "func main() {"'],
    // Rust: "// 関数を定義", "fn main() {"
    [/"\/\/ 関数を定義",\s*\n\s*"fn main\(\) \{"/g, '"// main関数を定義",\n          "fn main() {"'],
  ];

  for (const [pattern, replacement] of patterns) {
    const newContent = content.replace(pattern, replacement);
    if (newContent !== content) {
      const matches = content.match(pattern);
      if (matches) {
        totalFixed += matches.length;
        fileChanged = true;
      }
      content = newContent;
    }
  }

  if (fileChanged) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Fixed: ' + file);
  }
}

console.log('\n合計 ' + totalFixed + ' 件の「// 関数を定義」を「// main関数を定義」に修正しました。');

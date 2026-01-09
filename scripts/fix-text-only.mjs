
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts'));

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // 不快な指示の排除
  content = content.replace(/ここに\s*['"]?Hello,?\s*([^'"]+?)['"]?\s*と入力して(?:ね|ください|ましょう)/g, "画面に '$1' と表示しましょう");
  content = content.replace(/ここに\s*['"]?([^'"]+?)['"]?\s*と入力して(?:ね|ください|ましょう)/g, (m, g) => {
    if (g.match(/^\d+$/)) return `数字の ${g} を代入しましょう`;
    if (g.match(/^[a-zA-Z_][a-zA-Z0-9_]*$/)) return `変数 ${g} を使いましょう`;
    return `${g} を使いましょう`;
  });
  content = content.replace(/ここに\s*(.+?)\s*と入力して中身を表示して(?:ね|ください|ましょう)/g, '変数 $1 の中身を表示しましょう');
  content = content.replace(/ここに\s*/g, '');
  content = content.replace(/してね/g, 'しましょう');
  content = content.replace(/ください/g, 'しましょう');
  content = content.replace(/表示してね/g, '表示しましょう');

  // Pythonの「マップ」排除
  if (file.startsWith('python')) {
    content = content.replace(/マップ（辞書）/g, '辞書');
    content = content.replace(/マップ/g, '辞書');
  }

  fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Renamed vague instructions and Map in Python.");

import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts'));

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. 文字列置換 (Vague instructions)
  content = content.replace(/ここに\s*['"]?([^'" ]+?)['"]?\s*と入力してね/g, '$1 を使いましょう');
  content = content.replace(/ここに\s*['"]?([^'" ]+?)['"]?\s*と入力しましょう/g, '$1 を使いましょう');
  content = content.replace(/ここに\s*(.+?)\s*と入力して中身を表示してね/g, '変数 $1 の中身を表示しましょう');
  content = content.replace(/ここに\s*(.+?)\s*と入力して中身を表示しましょう/g, '変数 $1 の中身を表示しましょう');
  content = content.replace(/ここに\s*/g, '');
  content = content.replace(/してね/g, 'しましょう');
  content = content.replace(/してください/g, 'しましょう');
  content = content.replace(/表示してね/g, '表示しましょう');

  // 2. holeyCode の白紙化 (徹底)
  // JSON 文字列リテラル内の holeyCode を見つける
  content = content.replace(/"holeyCode":\s*"(.*?)(?<!\\)"/gs, (match, code) => {
    // 改行で分割
    const lines = code.split('\\n');
    const newLines = lines.map(line => {
      if (line.includes('___')) {
        // インデント（空白）のみを抽出し、それ以外を消す
        // line は "        ___\"name\", \"たろう\");" のようになっている可能性がある
        const indentMatch = line.match(/^(\s*)/);
        const indent = indentMatch ? indentMatch[0] : "";
        return indent + '___';
      }
      return line;
    });
    return `"holeyCode": "${newLines.join('\\n')}"`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Finished cleaning all files.");

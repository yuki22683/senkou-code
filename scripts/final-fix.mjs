import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts'));

function improve(text) {
  if (typeof text !== 'string') return text;
  return text
    .replace(/ここに\s*['"]?Hello,?\s*([^'" ]+?)['"]?\s*と入力して(?:ね|ください|ましょう)/g, "画面に '$1' と表示しましょう")
    .replace(/ここに\s*['"]?([^'" ]+?)['"]?\s*と入力して(?:ね|ください|ましょう)/g, (m, g) => {
      if (g.match(/^\d+$/)) return `数字の ${g} を代入しましょう`;
      if (g.match(/^[a-zA-Z_][a-zA-Z0-9_]*$/)) return `変数 ${g} を使いましょう`;
      return `${g} を使いましょう`;
    })
    .replace(/ここに\s*(.+?)\s*と入力して中身を表示して(?:ね|ください|ましょう)/g, '変数 $1 の中身を表示しましょう')
    .replace(/ここに\s*/g, '')
    .replace(/してね/g, 'しましょう')
    .replace(/ください/g, 'しましょう')
    .replace(/表示してね/g, '表示しましょう');
}

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // エクササイズごとに処理
  // 1. "correctLines": [ ... ] を抽出
  content = content.replace(/"correctLines":\s*\[(.*?)\s*\]/gs, (match, arrayContent) => {
    try {
      // arrayContent を有効な JSON 配列にするために [ ] で囲む
      // ただし TypeScript のリテラルなので、末尾のカンマなどを処理する必要がある
      let jsonStr = '[' + arrayContent.trim().replace(/,$/, '') + ']';
      const lines = JSON.parse(jsonStr);
      
      const improvedLines = lines.map(l => improve(l));
      return `"correctLines": ${JSON.stringify(improvedLines, null, 8).replace(/^[\[]/, '[\n        ').replace(/[\]]$/, '\n      ]')}`;
    } catch (e) {
      // JSON.parse が失敗した場合はフォールバック
      return match;
    }
  });

  // 2. holeyCode を生成 (correctLines から)
  content = content.replace(/"holeyCode":\s*".*?",\s*"correctLines":\s*\[(.*?)\s*\]/gs, (match, arrayContent) => {
    try {
      let jsonStr = '[' + arrayContent.trim().replace(/,$/, '') + ']';
      const lines = JSON.parse(jsonStr);
      
      const holeyLines = lines.map(s => {
        const trimmed = s.trim();
        if (trimmed.startsWith('//') || trimmed.startsWith('#') || trimmed.startsWith('/*') || trimmed.startsWith('*') || trimmed.length === 0) {
          return s;
        }
        const indent = s.match(/^(\s*)/)[0];
        return indent + '___';
      });

      const formattedHoley = holeyLines.join('\\n').replace(/"/g, '\\"');
      return `"holeyCode": "${formattedHoley}",\n      "correctLines": [\n        ${arrayContent}\n      ]`
    } catch (e) {
      return match;
    }
  });

  fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Robust final fix completed.");

import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts'));

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // エクササイズごとに処理
  const exerciseRegex = /\{[^\{\}]*?"title":.*?"correctLines":\s*\[(.*?)\].*?\}/gs;
  
  content = content.replace(exerciseRegex, (exerciseStr) => {
    // correctLines を抽出
    const linesMatch = exerciseStr.match(/"correctLines":\s*\[(.*?)\]/s);
    if (!linesMatch) return exerciseStr;
    
    // 行を抽出
    const lines = linesMatch[1].split(/,(?=(?:(?:[^\"]*\"){2})*[^\"]*$)/).map(l => {
      let s = l.trim();
      if (s.startsWith('"') && s.endsWith('"')) s = s.slice(1, -1);
      return s;
    });

    // holeyCode を生成 (コメント行以外を ___ にする)
    const newHoleyLines = lines.map(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('//') || trimmed.startsWith('#') || trimmed.startsWith('/*') || trimmed.startsWith('*') || trimmed.length === 0) {
        return line;
      }
      // インデントを保持して ___ 
      const indent = line.match(/^(\s*)/)[0];
      return indent + '___';
    });

    const newHoleyCode = newHoleyLines.join('\n')
      .replace(/"/g, '\\"')
      .replace(/'/g, "'");

    // holeyCode フィールドを置換 (存在しなければ追加)
    if (exerciseStr.includes('"holeyCode"')) {
      return exerciseStr.replace(/"holeyCode":\s*".*?"/s, `"holeyCode": "${newHoleyCode}"`);
    } else {
      return exerciseStr.replace(/"correctLines"/, `"holeyCode": "${newHoleyCode}",\n      "correctLines"`);
    }
  });

  fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Rebuilt all holeyCodes to be fully challenging.");

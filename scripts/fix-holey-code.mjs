
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts'));

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // エクササイズごとに処理
  // 1. まずコメントの改善を再度行う（正規表現をシンプルに）
  content = content.replace(/ここに\s*['"]?([^'" ]+?)['"]?\s*と入力して(?:ね|ください|ましょう)/g, '$1 を使いましょう');
  content = content.replace(/ここに\s*/g, '');
  content = content.replace(/してね/g, 'しましょう');
  content = content.replace(/表示してね/g, '表示しましょう');

  // 2. holeyCode の再生成
  // exercises 配列の中の各オブジェクトを個別に処理するのは難しいため、
  // 全体の構成を壊さないように正規表現で抽出
  const exerciseRegex = /\{[^{}]*?"title":.*?"holeyCode":.*?"correctLines":.*?\][^{}]*?\}/gs;
  
  content = content.replace(exerciseRegex, (exerciseStr) => {
    // correctLines を取得
    const linesMatch = exerciseStr.match(/"correctLines":\s*\[(.*?)\]/s);
    if (!linesMatch) return exerciseStr;
    
    // JSONとしてパースするために整形 (簡易的)
    const lines = linesMatch[1].split(',').map(l => l.trim().replace(/^"|"$/g, ''));
    
    // holeyCode の行数と一致するか確認
    const holeyMatch = exerciseStr.match(/"holeyCode":\s*"(.*?)"/s);
    if (!holeyMatch) return exerciseStr;
    
    const holeyLines = holeyMatch[1].split('\\n');
    
    // holeyCode の中で ___ を含む行を、correctLines の該当行のインデント + ___ に置き換える
    const newHoleyLines = holeyLines.map((hLine, i) => {
      if (hLine.includes('___')) {
        const cLine = lines[i] || "";
        const indentMatch = cLine.match(/^(\s*)/);
        const indent = indentMatch ? indentMatch[0] : "";
        return indent + '___';
      }
      return hLine;
    });

    const newHoleyCode = newHoleyLines.join('\\n');
    return exerciseStr.replace(/"holeyCode":\s*".*?"/s, `"holeyCode": "${newHoleyCode}"`);
  });

  fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Finished robust cleaning.");

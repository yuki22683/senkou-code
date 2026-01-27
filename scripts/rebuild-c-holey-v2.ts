
import * as fs from 'fs';
import * as path from 'path';

const dataDir = path.join(__dirname, '../data/lessons');

function fixLessonFile(fileName: string) {
  const filePath = path.join(dataDir, fileName);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Use a more reliable way to find and replace the content of each exercise
  const exercisesMatch = content.match(/"exercises":\s*\[([\s\S]*?)\]\s*}/);
  if (!exercisesMatch) return;
  
  let exercisesStr = exercisesMatch[1];
  
  // Split into individual exercise objects
  const exerciseBlocks = exercisesStr.split(/},\s*{/);
  
  const fixedBlocks = exerciseBlocks.map(block => {
    // Extract correctCode
    const correctCodeMatch = block.match(/"correctCode":\s*"([\s\S]*?)"/);
    if (!correctCodeMatch) return block;
    
    const correctCode = correctCodeMatch[1];
    const lines = correctCode.split('\\n');
    const newHoleyLines: string[] = [];
    const newCorrectLines: string[] = [];
    
    lines.forEach(line => {
      const trimmed = line.trim();
      if (!trimmed) {
        newHoleyLines.push('');
        newCorrectLines.push('');
        return;
      }
      if (trimmed.startsWith('//')) {
        newHoleyLines.push(line);
        newCorrectLines.push(line);
        return;
      }
      
      let comment = '';
      let holey = '';
      
      // Determine transformation based on content
      if (trimmed.startsWith('#include <')) {
        const header = trimmed.match(/<([^>]+)>/)?.[1] || 'stdio.h';
        comment = `// ${header} をインクルード`;
        holey = line.replace(header, '___');
      } else if (trimmed === 'int main() {') {
        comment = '// main 関数を定義';
        holey = line.replace('main', '___');
      } else if (trimmed === 'return 0;') {
        comment = '// 0 を返して終了';
        holey = line.replace('0', '___');
      } else if (trimmed === '}') {
        comment = '// ブロックの終わり';
        holey = line.replace('}', '___');
      } else if (trimmed.startsWith('struct ') && trimmed.endsWith(' {')) {
        const name = trimmed.match(/struct\s+(\w+)/)?.[1] || '構造体';
        comment = `// 構造体 ${name} を定義`;
        holey = line.replace(name, '___');
      } else if (trimmed.startsWith('void ') && (trimmed.includes('(') || trimmed.includes(')'))) {
        const name = trimmed.match(/void\s+(\w+)/)?.[1] || '関数';
        comment = `// 挨拶をする関数 ${name} を定義`;
        holey = line.replace(name, '___');
      } else if (trimmed.startsWith('printf(')) {
        comment = '// メッセージを表示';
        holey = line.replace('printf', '___');
      } else if (trimmed.includes('=') && !trimmed.includes('(') && !trimmed.startsWith('if')) {
        const parts = trimmed.split('=');
        const varName = parts[0].split(/\s+/).pop()?.trim() || '変数';
        const val = parts[1].replace(';', '').trim();
        comment = `// ${varName} に ${val} を入れる`;
        holey = line.replace(val, '___');
      } else {
        comment = '// コードを入力';
        holey = line.replace(/(\w+)/, '___');
        if (holey === line) holey = '___';
      }
      
      newHoleyLines.push(comment);
      newHoleyLines.push(holey);
      newCorrectLines.push(comment);
      newCorrectLines.push(line);
    });
    
    const newHoleyCode = newHoleyLines.join('\\n');
    const newCorrectLinesArr = newCorrectLines.map(l => `"${l}"`).join(', ');
    
    let newBlock = block.replace(/"holeyCode":\s*"[\s\S]*?"/, `"holeyCode": "${newHoleyCode}"`);
    newBlock = newBlock.replace(/"correctLines":\s*\[[\s\S]*?\]/, `"correctLines": [${newCorrectLinesArr}]`);
    return newBlock;
  });
  
  const newExercisesStr = fixedBlocks.join('}, {');
  content = content.replace(exercisesStr, newExercisesStr);
  fs.writeFileSync(filePath, content);
}

['c.ts', 'c2.ts', 'c3.ts', 'c4.ts'].forEach(fixLessonFile);
console.log('Fixed C lesson files.');

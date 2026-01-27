
import fs from 'fs';
import path from 'path';

const dataDir = 'data/lessons';
const files = ['c.ts', 'c2.ts', 'c3.ts', 'c4.ts'];

function getCommentForLine(trimmed) {
  if (trimmed.startsWith('#include <')) {
    const header = trimmed.match(/<([^>]+)>/)?.[1] || 'ヘッダー';
    return `// ${header} をインクルード`;
  }
  if (trimmed === 'int main() {') return '// main 関数を定義';
  if (trimmed === 'return 0;') return '// 0 を返して終了';
  if (trimmed === '}') return '// ブロックの終わり';
  if (trimmed === '};') return '// 定義を終了';
  if (trimmed.startsWith('printf(')) return '// メッセージを表示';
  if (trimmed.startsWith('fprintf(')) return '// ファイルに書き込み';
  if (trimmed.startsWith('fclose(')) return '// ファイルを閉じる';
  if (trimmed.startsWith('FILE *')) return '// ファイルポインタを宣言';
  if (trimmed.startsWith('if (') || trimmed.startsWith('if(')) return '// もし〜なら（条件分岐）';
  if (trimmed.startsWith('else {') || trimmed.startsWith('} else {')) return '// そうでなければ';
  if (trimmed.startsWith('for (') || trimmed.startsWith('for(')) return '// 繰り返す（ループ）';
  if (trimmed.includes('malloc(')) return '// メモリを確保';
  if (trimmed.includes('free(')) return '// メモリを解放';
  if (trimmed.startsWith('struct ') && trimmed.endsWith('{')) return '// 構造体を定義';
  if (trimmed.startsWith('enum ') && trimmed.endsWith('{')) return '// 列挙型を定義';
  if (trimmed.startsWith('union ') && trimmed.endsWith('{')) return '// 共用体を定義';
  if (trimmed.includes('typedef ')) return '// 型に別名を定義';
  if (trimmed.includes('static ')) return '// 静的変数を定義';
  if (trimmed.startsWith('#define ')) return '// マクロを定義';
  if (trimmed.includes('=')) return '// 変数に値を代入';
  
  return '// コードを入力';
}

function getHoleyLine(trimmed) {
  if (trimmed.startsWith('#include <')) return trimmed.replace(/<([^>]+)>/, '<___>');
  if (trimmed === 'int main() {') return 'int ___() {';
  if (trimmed === 'return 0;') return 'return ___;';
  if (trimmed === '}') return '___';
  if (trimmed === '};') return '___';
  if (trimmed.startsWith('printf(')) return trimmed.replace('printf', '___');
  if (trimmed.startsWith('fprintf(')) return trimmed.replace('fprintf', '___');
  if (trimmed.includes('=')) {
    const parts = trimmed.split('=');
    return `${parts[0]}= ___;`;
  }
  
  const holey = trimmed.replace(/[a-zA-Z0-9_]+/g, (match, offset) => {
      if (offset === 0) return '___';
      return match;
  });
  return holey;
}

files.forEach(file => {
  const filePath = path.join(dataDir, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  
  const exercisesStart = content.indexOf('"exercises": [');
  if (exercisesStart === -1) return;
  
  const prefix = content.substring(0, exercisesStart + 14);
  let exercisesEnd = content.lastIndexOf(']');
  const suffix = content.substring(exercisesEnd);
  
  let exercisesStr = content.substring(exercisesStart + 14, exercisesEnd);
  
  const blocks = [];
  let depth = 0;
  let start = -1;
  for (let i = 0; i < exercisesStr.length; i++) {
    if (exercisesStr[i] === '{') {
      if (depth === 0) start = i;
      depth++;
    } else if (exercisesStr[i] === '}') {
      depth--;
      if (depth === 0) {
        blocks.push(exercisesStr.substring(start, i + 1));
      }
    }
  }
  
  const fixedBlocks = blocks.map(block => {
    const correctCodeMatch = block.match(/"correctCode":\s*"([\s\S]*?)"/);
    if (!correctCodeMatch) return block;
    
    const correctCodeRaw = correctCodeMatch[1];
    const correctCode = JSON.parse(`"${correctCodeRaw}"`);
    const rawLines = correctCode.split('\n');
    const newHoleyLines = [];
    const newCorrectLines = [];
    
    rawLines.forEach(line => {
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
      
      const comment = line.replace(trimmed, getCommentForLine(trimmed));
      const holey = line.replace(trimmed, getHoleyLine(trimmed));
      
      newHoleyLines.push(comment);
      newHoleyLines.push(holey);
      newCorrectLines.push(comment);
      newCorrectLines.push(line);
    });
    
    const newHoleyCode = JSON.stringify(newHoleyLines.join('\n')).slice(1, -1);
    const newCorrectLinesArr = JSON.stringify(newCorrectLines, null, 2);
    
    let updatedBlock = block.replace(/"holeyCode":\s*"[\s\S]*?"/, `"holeyCode": "${newHoleyCode}"`);
    updatedBlock = updatedBlock.replace(/"correctLines":\s*\[[\s\S]*?\]/, `"correctLines": ${newCorrectLinesArr}`);
    
    return updatedBlock;
  });
  
  const newExercisesStr = fixedBlocks.join(', ');
  fs.writeFileSync(filePath, prefix + newExercisesStr + suffix);
  console.log(`Fixed ${file}`);
});

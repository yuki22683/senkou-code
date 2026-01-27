
import * as fs from 'fs';
import * as path from 'path';

const dataDir = path.join(__dirname, '../data/lessons');

function processLesson(fileName: string) {
  const filePath = path.join(dataDir, fileName);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // This script uses specific regex to match exercise blocks and transform them.
  // We'll iterate through each exercise in the lesson.
  
  const exercisesRegex = /{[
]*?"title":\s*"([^"]+)"[
]*?"correctCode":\s*"([
\s\S]*?)"[
]*?"holeyCode":\s*"([
\s\S]*?)"[
]*?"correctLines":\s*\[([
\s\S]*?)
]*?}/g;
  
  const newContent = content.replace(exercisesRegex, (match, title, correctCode, holeyCode, correctLinesStr) => {
    // Generate new holeyCode and correctLines based on correctCode
    const lines = correctCode.split('\n');
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
      let correct = line;
      
      // Boilerplate and common patterns
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
        // Make } a hole?
        holey = line.replace('}', '___');
      } else if (trimmed.startsWith('struct ') && trimmed.endsWith(' {')) {
        const name = trimmed.match(/struct\s+(\w+)/)?.[1] || '構造体';
        comment = `// 構造体 ${name} を定義`;
        holey = line.replace(name, '___');
      } else if (trimmed.startsWith('void ') && trimmed.includes('() {')) {
        const name = trimmed.match(/void\s+(\w+)/)?.[1] || '関数';
        comment = `// 挨拶をする関数 ${name} を定義`;
        holey = line.replace(name, '___');
      } else if (trimmed.startsWith('int ') && trimmed.includes('=') && !trimmed.includes('(')) {
        const parts = trimmed.split('=');
        const varName = parts[0].replace('int ', '').trim();
        const val = parts[1].replace(';', '').trim();
        comment = `// ${varName} に ${val} を入れる`;
        holey = line.replace(val, '___');
      } else if (trimmed.startsWith('printf(')) {
        comment = '// メッセージを表示';
        holey = line.replace('printf', '___');
      } else {
        // Default holey line
        comment = '// コードを入力';
        holey = '___';
      }
      
      newHoleyLines.push(comment);
      newHoleyLines.push(holey);
      newCorrectLines.push(comment);
      newCorrectLines.push(correct);
    });
    
    const newHoleyCode = newHoleyLines.join('\n');
    const newCorrectLinesArr = newCorrectLines.map(l => `        "${l}"`).join(',\n');
    
    // Construct the new exercise object string
    // This is simplified and might break formatting, but ensures the rule is met.
    // We replace only the fields we care about.
    let newMatch = match.replace(/"holeyCode":\s*"[\n\s\S]*?"/, `"holeyCode": "${newHoleyCode}"`);
    newMatch = newMatch.replace(/"correctLines":\s*\[[\n\s\S]*?\]/, `"correctLines": [\n${newCorrectLinesArr}\n      ]`);
    
    return newMatch;
  });
  
  fs.writeFileSync(filePath, newContent);
}

// processLesson('c.ts');
// Actually, I'll write a script that updates the JSON objects safely.

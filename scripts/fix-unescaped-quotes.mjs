import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const lessonsDir = path.join(process.cwd(), 'data', 'lessons');

async function fixUnescapedQuotes() {
  const files = await glob(path.join(lessonsDir, '*.ts').replace(/\\/g, '/'));
  let fixedCount = 0;

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    
    // パターン: echo \"___" (閉じクォートがエスケープされていない)
    // 文字列リテラル内なので、実際には echo \\"___\" となっている箇所を探す
    // ただし、エスケープ漏れがあると esbuild が Unterminated string literal エラーを出す
    
    // esbuildがエラーを出すパターンは、 "..." 内に生の " がある状態。
    // 例: "holeyCode": "echo \"___""
    
    // 正しいエスケープ: \" で内部のダブルクォートを表現する
    // なので、 echo \\"___\" が正しい
    
    const lines = content.split(/\r?\n/);
    let fileChanged = false;
    
    const fixedLines = lines.map(line => {
        // Find 'echo \"___"' where the last " is not preceded by a backslash
        // We use a regex that looks for echo followed by escaped quotes, triple underscores,
        // and a double quote that is NOT preceded by a backslash.
        const unescapedEcho = /echo (\\\\*)\"___\"/g;
        // In the JSON string context, it looks like: echo \\"___"
        // Let's use a very specific string match first to be safe, then a more general one.
        
        let newLine = line;
        if (line.includes('echo \\\\\"___\"') && !line.includes('echo \\\\\"___\\\"')) {
             newLine = line.split('echo \\\\\"___\"').join('echo \\\\\"___\\\"');
        }
        if (newLine.includes('echo \\\"___\"') && !newLine.includes('echo \\\"___\\\"')) {
             newLine = newLine.split('echo \\\"___\"').join('echo \\\"___\\\"');
        }
        
        if (newLine !== line) {
            console.log(`Fixing line in ${path.basename(file)}: ${line.trim()}`);
            fileChanged = true;
        }
        return newLine;
    });

    if (fileChanged) {
      fs.writeFileSync(file, fixedLines.join('\n'), 'utf-8');
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files.`);
}

fixUnescapedQuotes();
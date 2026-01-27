
import fs from 'fs';
import path from 'path';

const lessonsDir = 'data/lessons';
const files = fs.readdirSync(lessonsDir)
    .filter(file => file.endsWith('.ts'))
    .map(file => path.join(lessonsDir, file));

const commentPrefixes = {
    'python': '#', 'ruby': '#', 'perl': '#', 'elixir': '#', 'bash': '#',
    'c': '//', 'cpp': '//', 'csharp': '//', 'java': '//', 'javascript': '//', 'typescript': '//', 'go': '//', 'rust': '//', 'swift': '//', 'kotlin': '//',
    'sql': '--', 'haskell': '--', 'lua': '--',
    'assembly': ';',
};

// 無視すべきシステム用コメント
const ignoreComments = ['# コードを入力', '// コードを入力', '-- コードを入力', '; コードを入力'];

function getLanguage(filename) {
    return path.basename(filename, '.ts').replace(/[0-9]+$/, '').toLowerCase();
}

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    const language = getLanguage(file);
    const prefix = commentPrefixes[language] || '//';
    
    // exercise ごとに分割して処理する（配列のインデックスを維持するため）
    // 簡易的なパース: exercises: [ { ... }, { ... } ]
    
    let fileChanged = false;
    
    // JSONとしてパースするのは難しい（TSファイルなので）ため、文字列操作で慎重に行う
    // "exercises": [ の後を処理
    if (!content.includes('"exercises"')) continue;

    // 演習ブロックを特定
    const exerciseBlocks = content.split(/(\s*\{\s*"title":)/);
    const newBlocks = [exerciseBlocks[0]];
    
    for (let i = 1; i < exerciseBlocks.length; i += 2) {
        const header = exerciseBlocks[i];
        let body = exerciseBlocks[i+1];
        
        // body 内の correctLines と lineHints を同期させて修正
        // correctLines の抽出
        const clMatch = body.match(/"correctLines":\s*\[([\s\S]*?)\]/);
        const lhMatch = body.match(/"lineHints":\s*\[([\s\S]*?)\]/);
        
        if (clMatch && lhMatch) {
            // カンマで分割。ただし配列内の配列やクォート内のカンマに注意が必要
            // 簡易的に "..." で分割
            const clRaw = clMatch[1].split(/,\s*\n\s*/);
            const lhRaw = lhMatch[1].split(/,\s*\n\s*/);
            
            const newCl = [];
            const newLh = [];
            let blockChanged = false;
            
            for (let j = 0; j < clRaw.length; j++) {
                const line = clRaw[j].trim();
                const hint = lhRaw[j] ? lhRaw[j].trim() : "null";
                
                // コメント行の判定（クォートの中身を見る）
                const contentMatch = line.match(/^\"(.*)\"$/) || [null, line];
                const lineContent = contentMatch[1];
                
                // もし現在の行がコメントで、かつ次の行が空行（""）なら
                if (lineContent && lineContent.startsWith(prefix) && !ignoreComments.includes(lineContent)) {
                    if (j + 1 < clRaw.length && clRaw[j+1].trim() === '""') {
                        // コメント + 空行 のペアを削除
                        j++; // 空行をスキップ
                        blockChanged = true;
                        continue;
                    }
                }
                newCl.push(clRaw[j]);
                newLh.push(lhRaw[j]);
            }
            
            if (blockChanged) {
                body = body.replace(clMatch[1], newCl.join(',\n        '));
                body = body.replace(lhMatch[1], newLh.join(',\n        '));
                fileChanged = true;
            }
        }
        newBlocks.push(header + body);
    }
    
    if (fileChanged) {
        console.log(`Updating ${file}`);
        fs.writeFileSync(file, newBlocks.join(''), 'utf8');
    }
}

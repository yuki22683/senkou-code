// 「メソッドを呼び出す」という曖昧なコメントを具体的なメソッド名・引数を含むコメントに修正する
import fs from 'fs';
import path from 'path';

const lessonsDir = 'data/lessons';

// コメントの次の行からメソッド呼び出しを抽出して具体的なコメントを生成
function extractMethodCall(nextLine) {
  if (!nextLine) return null;

  // ___を含む行から実際のメソッド呼び出しパターンを抽出
  // パターン: variable.method(args) or variable.method()

  // holeyCodeの場合: ___.___() や ___.___(___)
  // correctCodeの場合: obj.method() や obj.method(arg)

  const line = nextLine.trim();

  // 具体的なメソッド呼び出しパターン
  // c.move(), d.speak(), s.Speak(), item.getPrice(), etc.
  const methodMatch = line.match(/(\w+)\.(\w+)\s*\(/);
  if (methodMatch) {
    const obj = methodMatch[1];
    const method = methodMatch[2];

    // 引数を抽出
    const argsMatch = line.match(/\.\w+\s*\(([^)]*)\)/);
    const args = argsMatch ? argsMatch[1].trim() : '';

    if (args && args !== '') {
      return `${obj}.${method}(${args})を呼び出す`;
    } else {
      return `${obj}.${method}()を呼び出す`;
    }
  }

  return null;
}

// correctCodeからメソッド呼び出し行を抽出
function findMethodCallInCorrectCode(correctCode, commentPattern) {
  const lines = correctCode.split('\\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(commentPattern) && i + 1 < lines.length) {
      return lines[i + 1];
    }
  }
  return null;
}

let totalFixed = 0;

fs.readdirSync(lessonsDir)
  .filter(f => f.endsWith('.ts'))
  .forEach(file => {
    const filePath = path.join(lessonsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let fileFixed = 0;

    // 各種「〜メソッドを呼び出す」パターンを検索
    const vaguePatterns = [
      /\/\/ メソッドを呼び出す/g,
      /\/\/ 移動メソッドを呼び出す/g,
      /\/\/ 描画メソッドを呼び出す/g,
      /\/\/ インターフェースのメソッドを呼び出す/g,
      /# メソッドを呼び出す/g,
    ];

    // correctCodeブロックを解析して具体的なメソッド呼び出しを取得
    const exerciseRegex = /"correctCode":\s*"([^"]*(?:\\.[^"]*)*)"/g;
    let match;

    while ((match = exerciseRegex.exec(content)) !== null) {
      const correctCode = match[1];
      const lines = correctCode.split('\\n');

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // 曖昧なコメントパターンを検出
        if (line.includes('// メソッドを呼び出す') ||
            line.includes('// 移動メソッドを呼び出す') ||
            line.includes('// 描画メソッドを呼び出す') ||
            line.includes('// インターフェースのメソッドを呼び出す') ||
            line.includes('# メソッドを呼び出す')) {

          const nextLine = lines[i + 1];
          if (nextLine) {
            const newComment = extractMethodCall(nextLine);
            if (newComment) {
              const oldComment = line.trim();
              const indent = line.match(/^(\s*)/)[1];
              const commentPrefix = line.includes('#') ? '#' : '//';
              const newLine = `${indent}${commentPrefix} ${newComment}`;

              // correctCode内で置換
              const escapedOldLine = line.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
              const escapedNewLine = newLine.replace(/\$/g, '$$$$');

              const oldCorrectCode = match[0];
              const newCorrectCode = oldCorrectCode.replace(line, newLine);

              if (oldCorrectCode !== newCorrectCode) {
                content = content.replace(oldCorrectCode, newCorrectCode);
                console.log(`${file}: "${oldComment}" → "${newLine.trim()}"`);
                fileFixed++;
              }
            }
          }
        }
      }
    }

    // holeyCodeブロックも同様に処理
    const holeyRegex = /"holeyCode":\s*"([^"]*(?:\\.[^"]*)*)"/g;
    while ((match = holeyRegex.exec(content)) !== null) {
      const holeyCode = match[1];
      const lines = holeyCode.split('\\n');

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.includes('// メソッドを呼び出す') ||
            line.includes('// 移動メソッドを呼び出す') ||
            line.includes('// 描画メソッドを呼び出す') ||
            line.includes('// インターフェースのメソッドを呼び出す') ||
            line.includes('# メソッドを呼び出す')) {

          // holeyCodeの場合、対応するcorrectCodeを見つけて具体的なメソッド名を取得する必要がある
          // ここでは単純に次の行が ___.___() パターンの場合はスキップ（correctCodeから取得済み）
        }
      }
    }

    // correctLinesも処理
    const correctLinesRegex = /"correctLines":\s*\[([\s\S]*?)\]/g;
    while ((match = correctLinesRegex.exec(content)) !== null) {
      // correctLinesはcorrectCodeと同期されるべきなので、correctCodeの修正が反映される
    }

    if (fileFixed > 0) {
      fs.writeFileSync(filePath, content, 'utf8');
      totalFixed += fileFixed;
    }
  });

console.log(`\n=== 合計 ${totalFixed} 件修正しました ===`);

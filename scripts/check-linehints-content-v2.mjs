import fs from 'fs';
import path from 'path';

// 正規表現ベースでlineHintsとcorrectLinesを抽出
function extractArrays(content, fieldName) {
  const regex = new RegExp(`"${fieldName}":\\s*\\[([\\s\\S]*?)\\](?=,\\s*"[a-zA-Z]|\\s*\\})`, 'g');
  const matches = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    const arrayContent = match[1];
    // 文字列要素を抽出
    const elements = [];
    const stringRegex = /"((?:[^"\\]|\\.)*)"|null/g;
    let strMatch;
    while ((strMatch = stringRegex.exec(arrayContent)) !== null) {
      elements.push(strMatch[1] || null);
    }
    matches.push(elements);
  }
  return matches;
}

// 演習タイトルを抽出
function extractTitles(content) {
  const titles = [];
  const regex = /"title":\s*"([^"]+)"/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    titles.push(match[1]);
  }
  return titles;
}

const files = fs.readdirSync('data/lessons').filter(f => f.endsWith('.ts') && f !== 'index.ts');
const issues = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join('data/lessons', file), 'utf8');

  const lineHintsArrays = extractArrays(content, 'lineHints');
  const correctLinesArrays = extractArrays(content, 'correctLines');
  const titles = extractTitles(content);

  // exerciseの開始位置でマッチング（簡易版）
  // lineHintsとcorrectLinesは同じ数だけあるはず
  const exerciseCount = Math.min(lineHintsArrays.length, correctLinesArrays.length);

  for (let i = 0; i < exerciseCount; i++) {
    const hints = lineHintsArrays[i];
    const lines = correctLinesArrays[i];
    // タイトルは exercises の中にあるので、インデックスを調整
    const title = titles[i * 3] || `Exercise ${i}`; // 3つのtitleがあるため（lesson, tutorial, exercise）

    hints.forEach((hint, j) => {
      if (!hint) return;
      const line = lines[j] || '';

      // パターン1: メソッド呼び出しヒントが非呼び出し行
      const methodMatch = hint.match(/[`']?(\w+)[`']?\s*メソッドを呼び出し/);
      if (methodMatch) {
        const methodName = methodMatch[1];
        const hasCall = line.includes(`.${methodName}(`) ||
                       line.includes(`:${methodName}(`) ||  // Lua のコロン記法
                       line.match(new RegExp(`^\\s*${methodName}\\s*\\(`));
        if (!hasCall) {
          issues.push({ file, title, line: j, hint: hint.substring(0, 50), code: line.substring(0, 60),
            problem: `"${methodName}メソッドを呼び出し"が非呼び出し行` });
        }
      }

      // パターン2: インスタンス作成ヒントが非new行
      // 言語別のインスタンス作成パターンを考慮:
      // - Java/C#/JS: new Type()
      // - Go: Type{} (構造体リテラル)
      // - Rust: Type { ... } (構造体リテラル)
      if (hint.includes('インスタンスを作成')) {
        const hasNew = line.includes('new ') || line.includes('new(');
        const hasGoStruct = /\w+\{\}/.test(line);  // Go: Dog{}
        const hasRustStruct = /\w+\s*\{[^}]*\}/.test(line);  // Rust: Rect { width: 3, height: 4 }
        if (!hasNew && !hasGoStruct && !hasRustStruct) {
          issues.push({ file, title, line: j, hint: hint.substring(0, 50), code: line.substring(0, 60),
            problem: 'インスタンス作成の説明がnewなし行' });
        }
      }

      // パターン3: extends継承ヒントが非extends行
      if (hint.includes('extends') && hint.includes('継承') && !line.includes('extends')) {
        issues.push({ file, title, line: j, hint: hint.substring(0, 50), code: line.substring(0, 60),
          problem: 'extends継承の説明が非extends行' });
      }

      // パターン4: 累算代入ヒントが非累算代入行
      if (hint.includes('変数の値を計算して、その結果を同じ変数に再代入')) {
        const hasCompound = ['+=', '-=', '*=', '/='].some(op => line.includes(op));
        if (!hasCompound) {
          issues.push({ file, title, line: j, hint: hint.substring(0, 50), code: line.substring(0, 60),
            problem: '累算代入の説明が非累算代入行' });
        }
      }

      // パターン5: 条件式評価ヒントが非if行
      if (hint.includes('条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行')) {
        if (!line.includes('if ') && !line.includes('if(')) {
          issues.push({ file, title, line: j, hint: hint.substring(0, 50), code: line.substring(0, 60),
            problem: 'if文の説明が非if行' });
        }
      }
    });
  }
});

if (issues.length === 0) {
  console.log('✅ 問題は見つかりませんでした。');
} else {
  console.log(`=== lineHints内容チェック: 問題 ${issues.length}件 ===\n`);
  issues.forEach(i => {
    console.log('File:', i.file);
    console.log('Title:', i.title);
    console.log(`Line ${i.line}: ${i.code}`);
    console.log('Hint:', i.hint);
    console.log('Problem:', i.problem);
    console.log('');
  });
}

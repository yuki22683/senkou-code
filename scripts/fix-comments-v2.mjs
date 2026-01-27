import fs from 'fs';
import path from 'path';

const dir = './data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

const sep = String.fromCharCode(92) + 'n';
const PLACEHOLDER = '\x00ESC\x00';
const doubleSep = String.fromCharCode(92) + String.fromCharCode(92) + 'n';

// Comment prefixes by language
const commentPrefixes = {
  'c': '//', 'cpp': '//', 'csharp': '//', 'java': '//', 'javascript': '//',
  'typescript': '//', 'go': '//', 'rust': '//', 'kotlin': '//', 'swift': '//',
  'php': '//', 'python': '#', 'ruby': '#', 'perl': '#', 'bash': '#',
  'lua': '--', 'haskell': '--', 'elixir': '#', 'sql': '--', 'assembly': ';'
};

// Generic comment generator for various patterns
function generateDescription(correctLine, holeyLine, language) {
  const prefix = commentPrefixes[language] || '//';
  const trimmed = correctLine.trim();
  const holeyTrimmed = holeyLine.trim();

  // Skip empty lines
  if (!trimmed) return null;

  // Common fallback patterns based on holey line content

  // Print/output patterns (with ___)
  if (/fmt\.___|println!|print!|System\.out\.___|Console\.WriteLine|console\.___|echo|puts|print\s*\(|IO\.(puts|inspect)/.test(holeyTrimmed)) {
    return `${prefix} 標準出力に出力する`;
  }

  // Generic end statements
  if (/^(end|___)\s*$/.test(holeyTrimmed)) {
    return `${prefix} ブロックを終了する`;
  }

  // Bare syscall pattern
  if (/^syscall$/.test(holeyTrimmed) || /^___$/.test(holeyTrimmed) && language === 'assembly') {
    return `${prefix} システムコールを実行する`;
  }

  // Assembly patterns
  if (language === 'assembly') {
    if (/^section\s*\.?___/.test(holeyTrimmed)) {
      return `${prefix} セクションを宣言する`;
    }
    if (/^global\s+___/.test(holeyTrimmed)) {
      return `${prefix} シンボルを外部公開する`;
    }
    if (/^___:$/.test(holeyTrimmed)) {
      return `${prefix} ラベルを定義する`;
    }
    if (/^mov\s+___|___\s+mov/.test(holeyTrimmed)) {
      return `${prefix} 値を格納する`;
    }
    if (/^(add|sub|mul|div|and|or|xor)\s+___/.test(holeyTrimmed)) {
      return `${prefix} 演算を実行する`;
    }
    if (/^(je|jne|jg|jl|jge|jle|jz|jnz|jmp)\s+___/.test(holeyTrimmed)) {
      return `${prefix} ジャンプ命令を実行する`;
    }
    if (/^(cmp|test)\s+___/.test(holeyTrimmed)) {
      return `${prefix} 比較を実行する`;
    }
    if (/^(push|pop)\s+___/.test(holeyTrimmed)) {
      return `${prefix} スタック操作を実行する`;
    }
    if (/^___$/.test(holeyTrimmed)) {
      // Look at correctLine to determine what it is
      if (/^syscall/.test(trimmed)) {
        return `${prefix} システムコールを実行する`;
      }
      if (/^ret/.test(trimmed)) {
        return `${prefix} 関数から戻る`;
      }
      return `${prefix} 命令を実行する`;
    }
  }

  // Go patterns
  if (language === 'go') {
    if (/^"[^"]*"$/.test(holeyTrimmed) || /^"___"$/.test(holeyTrimmed)) {
      return `${prefix} パッケージをインポートする`;
    }
    if (/^func\s+___\s*\(/.test(holeyTrimmed)) {
      return `${prefix} 関数を定義する`;
    }
    if (/^___\s*:=/.test(holeyTrimmed)) {
      return `${prefix} 変数を初期化する`;
    }
    if (/^fmt\.___|^___.Println|^___.Printf/.test(holeyTrimmed)) {
      return `${prefix} 標準出力に出力する`;
    }
    if (/^type\s+/.test(holeyTrimmed)) {
      return `${prefix} 型を定義する`;
    }
  }

  // Rust patterns
  if (language === 'rust') {
    if (/^fn\s+___\s*\(/.test(holeyTrimmed)) {
      return `${prefix} 関数を定義する`;
    }
    if (/^(println!|print!)\s*\(/.test(holeyTrimmed) || /^___!\s*\(/.test(holeyTrimmed)) {
      return `${prefix} 標準出力に出力する`;
    }
    if (/^let\s+(mut\s+)?___/.test(holeyTrimmed)) {
      return `${prefix} 変数を定義する`;
    }
    if (/^struct\s+___/.test(holeyTrimmed)) {
      return `${prefix} 構造体を定義する`;
    }
    if (/^(Ok|Err|Some|None)\s*[\(|=>]/.test(holeyTrimmed)) {
      return `${prefix} 結果を返す`;
    }
    if (/^___,?$/.test(holeyTrimmed)) {
      // Enum variant or similar
      return `${prefix} 値を定義する`;
    }
    if (/^(width|height|side|name|age):\s*___/.test(holeyTrimmed)) {
      return `${prefix} フィールドを定義する`;
    }
    if (/^self\.___|^d\.___/.test(holeyTrimmed)) {
      return `${prefix} メソッドを呼び出す`;
    }
    if (/^___ => ___/.test(holeyTrimmed) || /^_ => ___/.test(holeyTrimmed)) {
      return `${prefix} パターンマッチの分岐を定義する`;
    }
    if (/\.\s*___\s*\(/.test(holeyTrimmed)) {
      return `${prefix} メソッドを呼び出す`;
    }
    if (/^___(42|"hello")/.test(holeyTrimmed) || /^___\s*\(\d+\)/.test(holeyTrimmed)) {
      return `${prefix} 関数を呼び出す`;
    }
  }

  // Java patterns
  if (language === 'java') {
    if (/^public\s+static\s+void\s+___/.test(holeyTrimmed)) {
      return `${prefix} メイン関数を定義する`;
    }
    if (/^System\.out\.___/.test(holeyTrimmed)) {
      return `${prefix} 標準出力に出力する`;
    }
    if (/^\}\s*___\s*\(/.test(holeyTrimmed)) {
      return `${prefix} 例外をキャッチする`;
    }
    if (/^interface\s+___/.test(holeyTrimmed)) {
      return `${prefix} インターフェースを定義する`;
    }
    if (/^abstract\s+/.test(holeyTrimmed)) {
      return `${prefix} 抽象メンバーを定義する`;
    }
    if (/^class\s+___/.test(holeyTrimmed)) {
      return `${prefix} クラスを定義する`;
    }
    if (/^public\s+___\s*\(/.test(holeyTrimmed)) {
      return `${prefix} コンストラクタを定義する`;
    }
    if (/^public\s+(int|void|String|double|T)\s+___/.test(holeyTrimmed)) {
      return `${prefix} メソッドを定義する`;
    }
    if (/^(int|String|double)\s+___/.test(holeyTrimmed)) {
      return `${prefix} 変数を宣言する`;
    }
    if (/\.___()\s*$/.test(holeyTrimmed)) {
      return `${prefix} メソッドを呼び出す`;
    }
    if (/^___$/.test(holeyTrimmed)) {
      return `${prefix} コードを記述する`;
    }
    if (/\.___\s*\(\)/.test(holeyTrimmed)) {
      return `${prefix} メソッドを呼び出す`;
    }
  }

  // JavaScript/TypeScript patterns
  if (language === 'javascript' || language === 'typescript') {
    if (/^console\.___/.test(holeyTrimmed)) {
      return `${prefix} コンソールに出力する`;
    }
    if (/^(const|let|var)\s+___/.test(holeyTrimmed)) {
      return `${prefix} 変数を定義する`;
    }
    if (/^function\s+___/.test(holeyTrimmed)) {
      return `${prefix} 関数を定義する`;
    }
    if (/^interface\s+___/.test(holeyTrimmed)) {
      return `${prefix} インターフェースを定義する`;
    }
    if (/^___\s*\(\)\s*\{/.test(holeyTrimmed)) {
      return `${prefix} メソッドを定義する`;
    }
    if (/^return\s+___/.test(holeyTrimmed)) {
      return `${prefix} 値を返す`;
    }
    if (/^\[K\s+___\s+keyof/.test(holeyTrimmed)) {
      return `${prefix} マッピング型を定義する`;
    }
    if (/^___:/.test(holeyTrimmed) && language === 'typescript') {
      return `${prefix} ケースを定義する`;
    }
  }

  // PHP patterns
  if (language === 'php') {
    if (/^<\?php$/.test(holeyTrimmed)) {
      return `${prefix} PHPスクリプトを開始する`;
    }
    if (/^\?>$/.test(holeyTrimmed) || /^___$/.test(holeyTrimmed)) {
      return `${prefix} PHPスクリプトを終了する`;
    }
    if (/^\$___\s*=/.test(holeyTrimmed)) {
      return `${prefix} 変数を定義する`;
    }
    if (/^echo\s+___/.test(holeyTrimmed)) {
      return `${prefix} 出力する`;
    }
    if (/^function\s+___/.test(holeyTrimmed)) {
      return `${prefix} 関数を定義する`;
    }
  }

  // Lua patterns
  if (language === 'lua') {
    if (/^local\s+___/.test(holeyTrimmed)) {
      return `${prefix} ローカル変数を定義する`;
    }
    if (/^function\s+___/.test(holeyTrimmed)) {
      return `${prefix} 関数を定義する`;
    }
    if (/^return\s+___/.test(holeyTrimmed)) {
      return `${prefix} 値を返す`;
    }
    if (/^___\s*\(/.test(holeyTrimmed)) {
      return `${prefix} 関数を呼び出す`;
    }
    if (/^print\s*\(___/.test(holeyTrimmed)) {
      return `${prefix} 出力する`;
    }
    if (/^end$/.test(holeyTrimmed) || /^___$/.test(holeyTrimmed)) {
      return `${prefix} ブロックを終了する`;
    }
    if (/^\.\.\s*___/.test(holeyTrimmed) || /___\s*\.\./.test(holeyTrimmed)) {
      return `${prefix} 文字列を連結する`;
    }
  }

  // Perl patterns
  if (language === 'perl') {
    if (/^my\s+[\$@%]___/.test(holeyTrimmed)) {
      return `${prefix} 変数を宣言する`;
    }
    if (/^___\s+"/.test(holeyTrimmed) || /^___\s+\$/.test(holeyTrimmed)) {
      return `${prefix} 出力する`;
    }
    if (/^\}\s+___\s*\{/.test(holeyTrimmed)) {
      return `${prefix} else節を定義する`;
    }
    if (/^___\s+\(/.test(holeyTrimmed)) {
      return `${prefix} ファイルを操作する`;
    }
    if (/^close\s*\(___\)/.test(holeyTrimmed)) {
      return `${prefix} ファイルを閉じる`;
    }
  }

  // Bash patterns
  if (language === 'bash') {
    if (/^(\w+)=___/.test(holeyTrimmed)) {
      return `${prefix} 変数に値を代入する`;
    }
    if (/^echo\s+"___"/.test(holeyTrimmed)) {
      return `${prefix} 出力する`;
    }
    if (/^fi$/.test(holeyTrimmed) || /^done$/.test(holeyTrimmed) || /^esac$/.test(holeyTrimmed)) {
      return `${prefix} ブロックを終了する`;
    }
    if (/^___$/.test(holeyTrimmed)) {
      return `${prefix} コマンドを実行する`;
    }
  }

  // Kotlin patterns
  if (language === 'kotlin') {
    if (/^(val|var)\s+___/.test(holeyTrimmed)) {
      return `${prefix} 変数を定義する`;
    }
    if (/^fun\s+___/.test(holeyTrimmed)) {
      return `${prefix} 関数を定義する`;
    }
    if (/^___\s*=\s*\d+/.test(holeyTrimmed)) {
      return `${prefix} プロパティを設定する`;
    }
    if (/^___\s*\(\)/.test(holeyTrimmed)) {
      return `${prefix} 関数を呼び出す`;
    }
    if (/Counter\.___\(\)/.test(holeyTrimmed)) {
      return `${prefix} メソッドを呼び出す`;
    }
  }

  // Swift patterns
  if (language === 'swift') {
    if (/^(let|var)\s+___/.test(holeyTrimmed)) {
      return `${prefix} 変数を定義する`;
    }
    if (/^func\s+___/.test(holeyTrimmed)) {
      return `${prefix} 関数を定義する`;
    }
    if (/^print\s*\("___"\)/.test(holeyTrimmed)) {
      return `${prefix} 出力する`;
    }
    if (/^c\.___\(\)/.test(holeyTrimmed)) {
      return `${prefix} メソッドを呼び出す`;
    }
  }

  // C/C++ patterns
  if (language === 'c' || language === 'cpp') {
    if (/^int\s+___\s*\(/.test(holeyTrimmed)) {
      return `${prefix} 関数を定義する`;
    }
    if (/^(int|double|float|char)\s+___/.test(holeyTrimmed)) {
      return `${prefix} 変数を宣言する`;
    }
    if (/^std::cout\s*<<\s*___/.test(holeyTrimmed)) {
      return `${prefix} 標準出力に出力する`;
    }
    if (/^___:$/.test(holeyTrimmed)) {
      return `${prefix} アクセス修飾子を定義する`;
    }
  }

  // Elixir patterns
  if (language === 'elixir') {
    if (/^def\s+___/.test(holeyTrimmed)) {
      return `${prefix} 関数を定義する`;
    }
    if (/^___$/.test(holeyTrimmed)) {
      return `${prefix} ブロックを終了する`;
    }
    if (/^IO\.(puts|inspect)/.test(holeyTrimmed)) {
      return `${prefix} 出力する`;
    }
  }

  // SQL patterns
  if (language === 'sql') {
    if (/^SELECT/i.test(holeyTrimmed)) {
      return `${prefix} データを取得する`;
    }
    if (/^___\s*;?\s*$/.test(holeyTrimmed)) {
      return `${prefix} SQL文を完了する`;
    }
  }

  // C# patterns
  if (language === 'csharp') {
    if (/^static\s+void\s+___/.test(holeyTrimmed)) {
      return `${prefix} メイン関数を定義する`;
    }
    if (/^Console\.WriteLine/.test(holeyTrimmed)) {
      return `${prefix} コンソールに出力する`;
    }
  }

  // Python patterns
  if (language === 'python') {
    if (/^def\s+___/.test(holeyTrimmed)) {
      return `${prefix} 関数を定義する`;
    }
    if (/^___\s*=\s*___/.test(holeyTrimmed)) {
      return `${prefix} 変数を定義する`;
    }
  }

  // Generic fallback for lines with ___
  if (holeyTrimmed.includes('___')) {
    // If it's just ___ on its own line
    if (/^___[;]?\s*$/.test(holeyTrimmed)) {
      return `${prefix} コードを記述する`;
    }
    // If it contains assignment
    if (/___\s*=|=\s*___/.test(holeyTrimmed)) {
      return `${prefix} 値を設定する`;
    }
    // If it looks like a function call
    if (/___\s*\(/.test(holeyTrimmed) || /\(\s*___/.test(holeyTrimmed)) {
      return `${prefix} 関数を呼び出す`;
    }
    // Generic fallback
    return `${prefix} コードを記述する`;
  }

  return null;
}

// Check if line is a comment
function isComment(line, language) {
  const trimmed = line.trim();
  if (!trimmed) return false;

  const prefix = commentPrefixes[language];
  if (prefix === '//' && trimmed.startsWith('//')) return true;
  if (prefix === '#' && trimmed.startsWith('#')) return true;
  if (prefix === '--' && trimmed.startsWith('--')) return true;
  if (prefix === ';' && trimmed.startsWith(';')) return true;

  // Also check for other comment styles
  if (trimmed.startsWith('//')) return true;
  if (trimmed.startsWith('#')) return true;
  if (trimmed.startsWith('--')) return true;
  if (trimmed.startsWith(';')) return true;

  return false;
}

// Check if line is structural (braces, etc.)
function isStructural(line) {
  const trimmed = line.trim();
  if (/^[}\])]+[;]?$/.test(trimmed)) return true;
  if (/^[\[{(]+$/.test(trimmed)) return true;
  if (trimmed === '') return true;
  if (/^(public:|private:|protected:|else|else:|elif .+:|except.*:|finally:|default:|case .+:)$/.test(trimmed)) return true;
  return false;
}

let totalFixed = 0;
let filesFixed = 0;

for (const file of files) {
  const fp = path.join(dir, file);
  let content = fs.readFileSync(fp, 'utf8');
  const lang = file.replace(/[0-9]*\.ts$/, '');
  const prefix = commentPrefixes[lang] || '//';

  let modified = false;
  let fileFixed = 0;

  // Find all exercises with holeyCode, correctLines, lineHints
  const exercisePattern = /"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;
  let match;
  const exercises = [];

  while ((match = exercisePattern.exec(content)) !== null) {
    exercises.push({
      holeyCodeStart: match.index,
      holeyCodeEnd: match.index + match[0].length,
      holeyCode: match[1]
    });
  }

  // Process exercises in reverse order to avoid offset issues
  for (let exIdx = exercises.length - 1; exIdx >= 0; exIdx--) {
    const ex = exercises[exIdx];

    // Find correctLines and lineHints after this holeyCode
    const searchStart = ex.holeyCodeEnd;
    const searchEnd = Math.min(searchStart + 5000, content.length);
    const searchContent = content.substring(searchStart, searchEnd);

    const correctLinesMatch = searchContent.match(/"correctLines":\s*\[([\s\S]*?)\]/);
    const lineHintsMatch = searchContent.match(/"lineHints":\s*\[([\s\S]*?)\]/);

    if (!correctLinesMatch || !lineHintsMatch) continue;

    // Parse holeyCode lines
    const protectedHoley = ex.holeyCode.split(doubleSep).join(PLACEHOLDER);
    const holeyLines = protectedHoley.split(sep).map(l => l.split(PLACEHOLDER).join(doubleSep));

    // Parse correctLines
    const correctLinesContent = correctLinesMatch[1];
    const correctLines = [];
    const clRegex = /"((?:[^"\\]|\\.)*)"/g;
    let clMatch;
    while ((clMatch = clRegex.exec(correctLinesContent)) !== null) {
      correctLines.push(clMatch[1]);
    }

    // Parse lineHints
    const lineHintsContent = lineHintsMatch[1];
    const lineHints = [];
    const lhRegex = /(null|"((?:[^"\\]|\\.)*)")/g;
    let lhMatch;
    while ((lhMatch = lhRegex.exec(lineHintsContent)) !== null) {
      if (lhMatch[1] === 'null') {
        lineHints.push(null);
      } else {
        lineHints.push(lhMatch[2] || '');
      }
    }

    // Check each line and build new arrays
    const newHoleyLines = [];
    const newCorrectLines = [];
    const newLineHints = [];
    let insertedCount = 0;

    for (let i = 0; i < holeyLines.length; i++) {
      const line = holeyLines[i];
      const correctLine = i < correctLines.length ? correctLines[i] : line;
      const hint = i < lineHints.length ? lineHints[i] : null;

      // Check if this is a holey line that needs a comment above it
      if (line.includes('___') && !isComment(line, lang) && !isStructural(line)) {
        // Check if previous line (in newHoleyLines) is a comment
        const prevLine = newHoleyLines[newHoleyLines.length - 1];
        if (!prevLine || !isComment(prevLine, lang)) {
          // Need to add a comment
          const desc = generateDescription(correctLine, line, lang);
          if (desc) {
            const indent = line.match(/^(\s*)/)[1] || '';
            newHoleyLines.push(indent + desc);
            newCorrectLines.push(indent + desc);
            newLineHints.push(null);
            insertedCount++;
          }
        }
      }

      newHoleyLines.push(line);
      newCorrectLines.push(correctLine);
      newLineHints.push(hint);
    }

    if (insertedCount > 0) {
      // Rebuild content
      const newHoleyCode = newHoleyLines.join(sep);
      const newCorrectLinesStr = newCorrectLines.map(l => `"${l}"`).join(', ');
      const newLineHintsStr = newLineHints.map(h => h === null ? 'null' : `"${h}"`).join(', ');

      // Replace in content (need to do this carefully)
      const lineHintsFullMatch = searchContent.match(/"lineHints":\s*\[[\s\S]*?\]/);
      const correctLinesFullMatch = searchContent.match(/"correctLines":\s*\[[\s\S]*?\]/);

      if (lineHintsFullMatch && correctLinesFullMatch) {
        const lhAbsStart = searchStart + lineHintsFullMatch.index;
        const lhAbsEnd = lhAbsStart + lineHintsFullMatch[0].length;

        const clAbsStart = searchStart + correctLinesFullMatch.index;
        const clAbsEnd = clAbsStart + correctLinesFullMatch[0].length;

        // Replace in reverse order of position to avoid offset issues
        if (lhAbsStart > clAbsStart) {
          content = content.substring(0, lhAbsStart) + `"lineHints": [${newLineHintsStr}]` + content.substring(lhAbsEnd);
          content = content.substring(0, clAbsStart) + `"correctLines": [${newCorrectLinesStr}]` + content.substring(clAbsEnd);
        } else {
          content = content.substring(0, clAbsStart) + `"correctLines": [${newCorrectLinesStr}]` + content.substring(clAbsEnd);
          // Recalculate lineHints position
          const newSearchContent = content.substring(searchStart);
          const newLhMatch = newSearchContent.match(/"lineHints":\s*\[[\s\S]*?\]/);
          if (newLhMatch) {
            const newLhAbsStart = searchStart + newLhMatch.index;
            const newLhAbsEnd = newLhAbsStart + newLhMatch[0].length;
            content = content.substring(0, newLhAbsStart) + `"lineHints": [${newLineHintsStr}]` + content.substring(newLhAbsEnd);
          }
        }

        // Replace holeyCode
        content = content.substring(0, ex.holeyCodeStart) + `"holeyCode": "${newHoleyCode}"` + content.substring(ex.holeyCodeEnd);

        modified = true;
        fileFixed += insertedCount;
      }
    }
  }

  if (modified) {
    fs.writeFileSync(fp, content, 'utf8');
    console.log(`${file}: ${fileFixed}件修正`);
    totalFixed += fileFixed;
    filesFixed++;
  }
}

console.log(`\n完了: ${filesFixed}ファイル、合計${totalFixed}件修正しました`);

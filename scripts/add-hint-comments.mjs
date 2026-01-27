import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const lessonsDir = path.join(__dirname, '..', 'data', 'lessons');

// 言語ごとのコメント形式
const commentPrefix = {
  python: '#',
  javascript: '//',
  typescript: '//',
  java: '//',
  c: '//',
  cpp: '//',
  csharp: '//',
  go: '//',
  rust: '//',
  ruby: '#',
  php: '//',
  bash: '#',
  haskell: '--',
  elixir: '#',
  lua: '--',
  assembly: ';',
  sql: '--',
  kotlin: '//',
  swift: '//',
  perl: '#',
};

// ライブラリ名の説明マップ
const libraryDescriptions = {
  'stdio.h': '標準入出力ライブラリ',
  'stdlib.h': '標準ライブラリ',
  'string.h': '文字列操作ライブラリ',
  'math.h': '数学関数ライブラリ',
  'iostream': 'C++標準入出力ストリーム',
  'vector': '可変長配列（ベクター）ライブラリ',
  'string': '文字列クラスライブラリ',
  'map': '連想配列（マップ）ライブラリ',
  'set': '集合ライブラリ',
  'algorithm': 'アルゴリズムライブラリ',
  'fstream': 'ファイル入出力ストリーム',
  'sstream': '文字列ストリーム',
  'cmath': 'C++数学関数ライブラリ',
  'fmt': 'フォーマット出力パッケージ',
  'os': 'OS操作パッケージ',
  'time': '時間操作パッケージ',
  'strconv': '文字列変換パッケージ',
  'java.util.*': 'Javaユーティリティライブラリ',
  'java.util.ArrayList': 'ArrayListクラス',
  'java.util.HashMap': 'HashMapクラス',
  'java.util.Scanner': 'Scannerクラス',
  'System': '.NET基本クラスライブラリ',
  'System.Collections.Generic': 'ジェネリックコレクション',
};

// コードパターンから説明を生成
function generateDescription(correctLine, language, holeyLine) {
  const trimmed = correctLine.trim();
  const prefix = commentPrefix[language] || '//';

  // #include <xxx>
  if (/^#include\s*<(.+)>/.test(trimmed)) {
    const match = trimmed.match(/<(.+)>/);
    const lib = match[1];
    const desc = libraryDescriptions[lib] || `${lib}ライブラリ`;
    return `${prefix} ${desc}を読み込み、使用可能にします`;
  }

  // import xxx (Go)
  if (/^import\s+\\?"(\w+)\\?"/.test(trimmed) && language === 'go') {
    const match = trimmed.match(/\\?"(\w+)\\?"/);
    const pkg = match[1];
    const desc = libraryDescriptions[pkg] || `${pkg}パッケージ`;
    return `${prefix} ${desc}をインポートして使えるようにします`;
  }

  // import xxx (Python)
  if (/^import\s+(\w+)/.test(trimmed) && language === 'python') {
    const match = trimmed.match(/import\s+(\w+)/);
    return `${prefix} ${match[1]}モジュールを読み込みます`;
  }

  // from xxx import yyy (Python)
  if (/^from\s+(\w+)\s+import/.test(trimmed)) {
    const match = trimmed.match(/from\s+(\w+)\s+import\s+(.+)/);
    return `${prefix} ${match[1]}モジュールから特定の機能（${match[2]}）を読み込みます`;
  }

  // import java.xxx (Java)
  if (/^import\s+java\./.test(trimmed)) {
    const match = trimmed.match(/import\s+(java\.[^;]+)/);
    const pkg = match[1].replace(/;$/, '');
    const desc = libraryDescriptions[pkg] || pkg;
    return `${prefix} ${desc}をインポートします`;
  }

  // using xxx (C#)
  if (/^using\s+(\w+)/.test(trimmed)) {
    const match = trimmed.match(/using\s+([^;]+)/);
    const ns = match[1].replace(/;$/, '');
    const desc = libraryDescriptions[ns] || `${ns}名前空間`;
    return `${prefix} ${desc}を利用可能にします`;
  }

  // package xxx (Go, Java)
  if (/^package\s+(\w+)/.test(trimmed)) {
    const match = trimmed.match(/package\s+(\w+)/);
    return `${prefix} このファイルが属するパッケージ（${match[1]}）を宣言します`;
  }

  // int main() / void main()
  if (/^(int|void)\s+main\s*\(\s*\)/.test(trimmed)) {
    return `${prefix} プログラムの実行開始地点（エントリーポイント）となる関数を定義します`;
  }

  // public static void main
  if (/public\s+static\s+void\s+main/.test(trimmed)) {
    return `${prefix} Javaプログラムの実行開始地点（メインメソッド）を定義します`;
  }

  // func main() (Go)
  if (/^func\s+main\s*\(\s*\)/.test(trimmed)) {
    return `${prefix} プログラムの実行開始地点（main関数）を定義します`;
  }

  // fn main() (Rust)
  if (/^fn\s+main\s*\(\s*\)/.test(trimmed)) {
    return `${prefix} プログラムの実行開始地点（main関数）を定義します`;
  }

  // public class Xxx
  if (/^public\s+class\s+(\w+)/.test(trimmed)) {
    const match = trimmed.match(/class\s+(\w+)/);
    return `${prefix} 外部からアクセス可能なクラス（${match[1]}）を定義します`;
  }

  // class Xxx
  if (/^class\s+(\w+)/.test(trimmed)) {
    const match = trimmed.match(/class\s+(\w+)/);
    return `${prefix} 新しいクラス（${match[1]}）を定義します`;
  }

  // struct Xxx
  if (/^struct\s+(\w+)/.test(trimmed)) {
    const match = trimmed.match(/struct\s+(\w+)/);
    return `${prefix} 構造体（${match[1]}）を定義します`;
  }

  // def xxx(): (Python)
  if (/^def\s+(\w+)\s*\(/.test(trimmed)) {
    const match = trimmed.match(/def\s+(\w+)/);
    return `${prefix} 関数（${match[1]}）を新しく定義します`;
  }

  // void/int xxx() { (C/C++/Java関数定義)
  if (/^(void|int|String|string|bool|double|float)\s+(\w+)\s*\([^)]*\)\s*\{?/.test(trimmed)) {
    const match = trimmed.match(/(void|int|String|string|bool|double|float)\s+(\w+)/);
    if (match[2] !== 'main') {
      return `${prefix} ${match[1]}型の値を返す関数（${match[2]}）を定義します`;
    }
  }

  // fn xxx() (Rust)
  if (/^fn\s+(\w+)\s*\(/.test(trimmed)) {
    const match = trimmed.match(/fn\s+(\w+)/);
    if (match[1] !== 'main') {
      return `${prefix} 関数（${match[1]}）を定義します`;
    }
  }

  // func xxx() (Go)
  if (/^func\s+(\w+)\s*\(/.test(trimmed)) {
    const match = trimmed.match(/func\s+(\w+)/);
    if (match[1] !== 'main') {
      return `${prefix} 関数（${match[1]}）を定義します`;
    }
  }

  // xxx() { (Bash function)
  if (/^(\w+)\s*\(\)\s*\{/.test(trimmed) && language === 'bash') {
    const match = trimmed.match(/^(\w+)/);
    return `${prefix} シェル関数（${match[1]}）を定義します`;
  }

  // printf("xxx") - 文字列出力
  if (/printf\s*\(\s*\\?"([^"\\]+)/.test(trimmed) && !/printf\s*\([^,]+,/.test(trimmed)) {
    return `${prefix} 指定された文字列を画面に表示する関数を使用します`;
  }

  // printf("%d", xxx) - 変数出力
  if (/printf\s*\([^,]+,\s*(\w+)/.test(trimmed)) {
    return `${prefix} 変数の値を指定された形式で画面に表示します`;
  }

  // print("xxx") / print('xxx') - Python等
  if (/print\s*\(\s*['"]([^'"]+)['"]/.test(trimmed)) {
    return `${prefix} 指定された文字列を画面に出力する関数を使用します`;
  }

  // print(xxx) - 変数
  if (/print\s*\(\s*(\w+)\s*\)/.test(trimmed) && !/['"]/.test(trimmed)) {
    return `${prefix} 変数の内容を画面に出力します`;
  }

  // println!("xxx") - Rust
  if (/println!\s*\(\s*\\?"([^"]+)/.test(trimmed)) {
    return `${prefix} マクロを使用して、文字列と改行を標準出力に出力します`;
  }

  // System.out.println("xxx")
  if (/System\.out\.println\s*\(\s*\\?"([^"]+)/.test(trimmed)) {
    return `${prefix} 文字列をコンソールに出力し、改行します`;
  }

  // System.out.println(xxx) - 変数
  if (/System\.out\.println\s*\(\s*(\w+)\s*\)/.test(trimmed) && !/["']/.test(trimmed)) {
    return `${prefix} 変数の値をコンソールに出力し、改行します`;
  }

  // Console.WriteLine("xxx")
  if (/Console\.WriteLine\s*\(\s*\\?"([^"]+)/.test(trimmed)) {
    return `${prefix} 文字列をコンソールに出力し、改行します`;
  }

  // Console.WriteLine(xxx) - 変数
  if (/Console\.WriteLine\s*\(\s*(\w+)\s*\)/.test(trimmed) && !/["']/.test(trimmed)) {
    return `${prefix} 変数の値をコンソールに出力し、改行します`;
  }

  // console.log("xxx")
  if (/console\.log\s*\(\s*['"`]([^'"`]+)/.test(trimmed)) {
    return `${prefix} デバッグ用コンソールなどに文字列を出力します`;
  }

  // console.log(xxx) - 変数
  if (/console\.log\s*\(\s*(\w+)\s*\)/.test(trimmed) && !/['"`]/.test(trimmed)) {
    const match = trimmed.match(/console\.log\s*\(\s*(\w+)\s*\)/);
    return `${prefix} 変数${match[1]}の値をコンソールに出力します`;
  }

  // fmt.Println("xxx") / fmt.Printf("xxx")
  if (/fmt\.(Println|Printf)\s*\(\s*\\?"([^"]+)/.test(trimmed)) {
    return `${prefix} フォーマットパッケージを使って文字列を出力します`;
  }

  // fmt.Println(xxx) - 変数
  if (/fmt\.(Println|Printf)\s*\(\s*(\w+)\s*\)/.test(trimmed) && !/["']/.test(trimmed)) {
    return `${prefix} 変数の値を標準出力に出力します`;
  }

  // std::cout << "xxx"
  if (/std::cout\s*<<\s*\\?"([^"]+)/.test(trimmed)) {
    return `${prefix} 標準出力ストリームに文字列を流し込み、表示します`;
  }

  // std::cout << xxx - 変数
  if (/std::cout\s*<<\s*(\w+)\s*<</.test(trimmed) && !/["']/.test(trimmed.split('<<')[1])) {
    return `${prefix} 変数の値を標準出力に出力します`;
  }

  // echo "xxx" (Bash)
  if (/^echo\s+\\?"([^"]+)/.test(trimmed)) {
    return `${prefix} 文字列を標準出力に表示します`;
  }

  // echo $xxx (Bash)
  if (/^echo\s+\$(\w+)/.test(trimmed)) {
    return `${prefix} 変数の内容を展開して表示します`;
  }

  // puts "xxx" (Ruby)
  if (/puts\s+['"]([^'"]+)/.test(trimmed)) {
    return `${prefix} 文字列を出力し、最後に改行を加えます`;
  }

  // 変数宣言・初期化
  // int x = 5;
  if (/^(int|float|double|long|short|char)\s+(\w+)\s*=\s*(\d+)/.test(trimmed)) {
    const match = trimmed.match(/^(int|float|double|long|short|char)\s+(\w+)\s*=\s*(\d+)/);
    const types = { int: '整数', float: '浮動小数点数', double: '倍精度浮動小数点数', long: '長整数', short: '短整数', char: '文字' };
    return `${prefix} ${types[match[1]]}型の変数を宣言し、初期値を代入します`;
  }

  // String/string x = "xxx"
  if (/^(String|string)\s+(\w+)\s*=\s*\\?"([^"]+)/.test(trimmed)) {
    return `${prefix} 文字列型の変数を宣言し、文字列データを代入します`;
  }

  // var/let/const x = N (JS/TS)
  if (/^(var|let|const)\s+(\w+)\s*=\s*(\d+)/.test(trimmed)) {
    const match = trimmed.match(/^(var|let|const)\s+(\w+)\s*=\s*(\d+)/);
    const keywords = { var: '変数', let: '再代入可能な変数', const: '定数' };
    return `${prefix} ${keywords[match[1]]}を宣言し、数値を代入します`;
  }

  // var/let/const x = "xxx" (JS/TS)
  if (/^(var|let|const)\s+(\w+)\s*=\s*['"`]([^'"`]+)/.test(trimmed)) {
    const match = trimmed.match(/^(var|let|const)\s+(\w+)\s*=\s*['"`]([^'"`]+)/);
    const keywords = { var: '変数', let: '再代入可能な変数', const: '定数' };
    return `${prefix} ${keywords[match[1]]}を宣言し、文字列を代入します`;
  }

  // xxx = N (Python, Ruby, etc)
  if (/^(\w+)\s*=\s*(\d+)$/.test(trimmed)) {
    return `${prefix} 変数に数値を代入（保存）します`;
  }

  // xxx = "yyy" (Python, Ruby, etc)
  if (/^(\w+)\s*=\s*['"]([^'"]+)['"]$/.test(trimmed)) {
    return `${prefix} 変数に文字列データを代入（保存）します`;
  }

  // xxx := N (Go)
  if (/^(\w+)\s*:=\s*(\d+)/.test(trimmed)) {
    return `${prefix} 変数を宣言し、同時に数値を代入します（型推論を使用）`;
  }

  // let xxx = N (Rust)
  if (/^let\s+(mut\s+)?(\w+)\s*=\s*(\d+)/.test(trimmed)) {
    return `${prefix} 変数を束縛（宣言）し、数値をセットします`;
  }

  // 累算代入演算子
  if (/^(\w+)\s*(\+=)\s*(\d+)/.test(trimmed)) {
    const match = trimmed.match(/^(\w+)\s*(\+=)\s*(\d+)/);
    return `${prefix} 変数${match[1]}に${match[3]}を加算して再代入する`;
  }
  if (/^(\w+)\s*(-=)\s*(\d+)/.test(trimmed)) {
    const match = trimmed.match(/^(\w+)\s*(-=)\s*(\d+)/);
    return `${prefix} 変数${match[1]}から${match[3]}を減算して再代入する`;
  }
  if (/^(\w+)\s*(\*=)\s*(\d+)/.test(trimmed)) {
    const match = trimmed.match(/^(\w+)\s*(\*=)\s*(\d+)/);
    return `${prefix} 変数${match[1]}に${match[3]}を乗算して再代入する`;
  }
  if (/^(\w+)\s*\/=\s*(\d+)/.test(trimmed)) {
    const match = trimmed.match(/^(\w+)\s*\/=\s*(\d+)/);
    return `${prefix} 変数${match[1]}を${match[2]}で除算して再代入する`;
  }

  // if文
  if (/^if\s*\(?\s*(\w+)\s*(>|<|>=|<=|==|!=)\s*(\d+)/.test(trimmed)) {
    return `${prefix} 条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します`;
  }

  // if xxx and/&& yyy
  if (/^if\s*.+\s+(and|&&)\s+/.test(trimmed)) {
    return `${prefix} 複数の条件がすべて真か判定する（論理積）`;
  }

  // if xxx or/|| yyy
  if (/^if\s*.+\s+(or|\|\|)\s+/.test(trimmed)) {
    return `${prefix} 複数の条件のいずれかが真か判定する（論理和）`;
  }

  // else
  if (/^\}\s*else\s*\{?$/.test(trimmed) || trimmed === 'else' || trimmed === 'else:' || trimmed === '} else {') {
    return `${prefix} 条件が偽の場合の処理を定義する`;
  }

  // for文
  if (/^for\s*\(/.test(trimmed) || /^for\s+\w+\s+in/.test(trimmed) || /^for\s+\w+\s*=/.test(trimmed)) {
    return `${prefix} 繰り返し処理（ループ）を開始する`;
  }

  // while文
  if (/^while\s*[\(\[]/.test(trimmed)) {
    return `${prefix} 条件が真の間、繰り返し処理を実行する`;
  }

  // return N
  if (/^return\s+0\s*;?$/.test(trimmed)) {
    return `${prefix} プログラムの正常終了を示す値0を返す`;
  }
  if (/^return\s+(\d+)\s*;?$/.test(trimmed)) {
    return `${prefix} 数値を呼び出し元に返す（戻り値）`;
  }
  if (/^return\s+(\w+)\s*;?$/.test(trimmed)) {
    return `${prefix} 変数の値を呼び出し元に返す（戻り値）`;
  }
  if (/^return\s*;?$/.test(trimmed)) {
    return `${prefix} 関数の実行を終了して呼び出し元に戻る`;
  }

  // try/catch/finally
  if (/^try\s*[:{]?$/.test(trimmed)) {
    return `${prefix} 例外が発生する可能性のある処理を開始する`;
  }
  if (/catch/.test(trimmed)) {
    return `${prefix} 例外が発生した場合の処理を定義する`;
  }
  if (/finally/.test(trimmed)) {
    return `${prefix} 例外の有無に関わらず必ず実行する処理を定義する`;
  }

  // 関数呼び出し xxx()
  if (/^(\w+)\s*\(\s*\)\s*;?$/.test(trimmed)) {
    const match = trimmed.match(/^(\w+)/);
    return `${prefix} 関数（${match[1]}）を呼び出して実行する`;
  }

  // 配列/リスト初期化
  if (/\[\s*\d+\s*,/.test(trimmed) || /\{\s*\d+\s*,/.test(trimmed)) {
    return `${prefix} 配列を複数の値で初期化する`;
  }

  // <?php
  if (trimmed === '<?php') {
    return `${prefix} PHPスクリプトの開始を宣言する`;
  }

  // fi/done/esac (bash)
  if (trimmed === 'fi') {
    return `${prefix} if文のブロックを終了する`;
  }
  if (trimmed === 'done') {
    return `${prefix} ループのブロックを終了する`;
  }
  if (trimmed === 'esac') {
    return `${prefix} case文のブロックを終了する`;
  }

  // end (Ruby/Lua)
  if (trimmed === 'end') {
    return `${prefix} ブロックを終了する`;
  }

  return null;
}

// コメント行かどうか（空行は含めない）
function isCommentLine(line, language) {
  const trimmed = line.trim();
  if (trimmed === '') return false;
  if (trimmed.startsWith('//')) return true;
  if (trimmed.startsWith('#') && ['python', 'ruby', 'bash', 'perl', 'elixir'].includes(language)) return true;
  if (trimmed.startsWith('--') && ['sql', 'lua', 'haskell'].includes(language)) return true;
  if (trimmed.startsWith(';') && language === 'assembly') return true;
  return false;
}

// 構造的な行
function isStructuralLine(line) {
  const trimmed = line.trim();
  if (/^[\s{}()\[\]]*$/.test(trimmed)) return true;
  if (/^[\s})\]]+[;]?$/.test(trimmed)) return true;
  if (trimmed === '{' || trimmed === '}' || trimmed === '};') return true;
  return false;
}

// 虫食い行かどうか
function isHoleyLine(line) {
  return line.includes('___');
}

// インデントを取得
function getIndent(line) {
  const match = line.match(/^(\s*)/);
  return match ? match[1] : '';
}

// 文字列終端を見つける
function findStringEnd(content, startIdx) {
  let i = startIdx;
  while (i < content.length) {
    if (content[i] === '\\' && i + 1 < content.length) {
      i += 2;
    } else if (content[i] === '"') {
      return i;
    } else {
      i++;
    }
  }
  return -1;
}

// 配列終端を見つける
function findArrayEnd(content, startIdx) {
  let i = startIdx;
  let depth = 1;
  while (i < content.length && depth > 0) {
    if (content[i] === '"') {
      i++;
      while (i < content.length) {
        if (content[i] === '\\' && i + 1 < content.length) {
          i += 2;
        } else if (content[i] === '"') {
          i++;
          break;
        } else {
          i++;
        }
      }
    } else if (content[i] === '[') {
      depth++;
      i++;
    } else if (content[i] === ']') {
      depth--;
      if (depth === 0) return i;
      i++;
    } else {
      i++;
    }
  }
  return -1;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const language = path.basename(filePath, '.ts').replace(/\d+$/, '');
  const prefix = commentPrefix[language] || '//';

  let totalInserted = 0;
  let searchStart = 0;

  while (true) {
    const holeyMarker = '"holeyCode": "';
    const holeyIdx = content.indexOf(holeyMarker, searchStart);
    if (holeyIdx === -1) break;

    const holeyStart = holeyIdx + holeyMarker.length;
    const holeyEnd = findStringEnd(content, holeyStart);
    if (holeyEnd === -1) break;

    const clMarker = '"correctLines": [';
    const clIdx = content.indexOf(clMarker, holeyEnd);
    if (clIdx === -1 || clIdx > holeyEnd + 1000) {
      searchStart = holeyEnd + 1;
      continue;
    }

    const clStart = clIdx + clMarker.length;
    const clEnd = findArrayEnd(content, clStart);
    if (clEnd === -1) {
      searchStart = holeyEnd + 1;
      continue;
    }

    const lhMarker = '"lineHints": [';
    const lhIdx = content.indexOf(lhMarker, clEnd);
    if (lhIdx === -1 || lhIdx > clEnd + 500) {
      searchStart = holeyEnd + 1;
      continue;
    }

    const lhStart = lhIdx + lhMarker.length;
    const lhEnd = findArrayEnd(content, lhStart);
    if (lhEnd === -1) {
      searchStart = holeyEnd + 1;
      continue;
    }

    const holeyCode = content.substring(holeyStart, holeyEnd);
    const holeyLines = holeyCode.split(/(?<!\\)\\n|\r?\n/);

    const clContent = content.substring(clStart, clEnd);
    const correctLines = [];
    const clRegex = /"((?:[^"\\]|\\.)*)"/g;
    let clMatch;
    while ((clMatch = clRegex.exec(clContent)) !== null) {
      correctLines.push(clMatch[1]);
    }

    const lhContent = content.substring(lhStart, lhEnd);
    const lineHints = [];
    const lhRegex = /(null|"((?:[^"\\]|\\.)*)")/g;
    let lhMatch;
    while ((lhMatch = lhRegex.exec(lhContent)) !== null) {
      if (lhMatch[1] === 'null') {
        lineHints.push(null);
      } else {
        lineHints.push(lhMatch[2] || '');
      }
    }

    const newHoleyLines = [];
    const newCorrectLines = [];
    const newLineHints = [];
    let inserted = 0;

    for (let i = 0; i < holeyLines.length; i++) {
      const line = holeyLines[i];
      const correctLine = i < correctLines.length ? correctLines[i] : '';

      if (isHoleyLine(line) && !isCommentLine(line, language)) {
        const prevLine = newHoleyLines[newHoleyLines.length - 1];
        if (!prevLine || !isCommentLine(prevLine, language)) {
          const indent = getIndent(line);
          const desc = generateDescription(correctLine, language, line);

          if (desc) {
            newHoleyLines.push(indent + desc);
            newCorrectLines.push(indent + desc);
            newLineHints.push(null);
            inserted++;
          } else {
            // フォールバック：汎用的なコメントを追加
            const fallbackDesc = `${prefix} ここを正しく入力してください`;
            newHoleyLines.push(indent + fallbackDesc);
            newCorrectLines.push(indent + fallbackDesc);
            newLineHints.push(null);
            inserted++;
          }
        }
      }

      newHoleyLines.push(line);
      if (i < correctLines.length) {
        newCorrectLines.push(correctLines[i]);
      }
      if (i < lineHints.length) {
        newLineHints.push(lineHints[i]);
      } else {
        newLineHints.push(null);
      }
    }

    for (let i = holeyLines.length; i < correctLines.length; i++) {
      newCorrectLines.push(correctLines[i]);
    }
    for (let i = holeyLines.length; i < lineHints.length; i++) {
      newLineHints.push(lineHints[i]);
    }

    if (inserted === 0) {
      searchStart = lhEnd + 1;
      continue;
    }

    totalInserted += inserted;

    const newHoleyCode = newHoleyLines.join('\\\\n');
    const newClContent = newCorrectLines.map(l => '"' + l + '"').join(', ');
    const newLhContent = newLineHints.map(h => h === null ? 'null' : '"' + h + '"').join(', ');

    content = content.substring(0, lhStart) + newLhContent + content.substring(lhEnd);
    content = content.substring(0, clStart) + newClContent + content.substring(clEnd);
    content = content.substring(0, holeyStart) + newHoleyCode + content.substring(holeyEnd);

    searchStart = holeyStart + newHoleyCode.length + 100;
  }

  if (totalInserted > 0) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }

  return totalInserted;
}

const files = fs.readdirSync(lessonsDir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalInserted = 0;
const modifiedFiles = [];

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  try {
    const inserted = processFile(filePath);
    if (inserted > 0) {
      console.log(file + ': ' + inserted + '行挿入');
      modifiedFiles.push(file);
      totalInserted += inserted;
    }
  } catch (err) {
    console.error(file + ': エラー - ' + err.message);
  }
}

console.log('\\n合計: ' + totalInserted + '行を挿入 (' + modifiedFiles.length + 'ファイル)');

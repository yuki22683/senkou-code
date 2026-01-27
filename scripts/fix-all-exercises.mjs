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

// Generate description for a line based on correctCode
function generateDescription(correctLine, holeyLine, language, lineIndex, allCorrectLines) {
  const prefix = commentPrefixes[language] || '//';
  const trimmed = correctLine.trim();
  const holeyTrimmed = holeyLine.trim();

  // Skip empty lines
  if (!trimmed) return null;

  // Assembly specific patterns
  if (language === 'assembly') {
    if (/^section\s+\.(\w+)/.test(trimmed)) {
      const match = trimmed.match(/section\s+\.(\w+)/);
      if (match[1] === 'data') return `${prefix} データセクションを宣言する`;
      if (match[1] === 'text') return `${prefix} テキストセクションを宣言する`;
      if (match[1] === 'bss') return `${prefix} BSSセクションを宣言する`;
      return `${prefix} ${match[1]}セクションを宣言する`;
    }
    if (/^global\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/global\s+(\w+)/);
      return `${prefix} ${match[1]}を外部公開する`;
    }
    if (/^(\w+):$/.test(trimmed)) {
      const match = trimmed.match(/^(\w+):/);
      if (match[1] === '_start') return `${prefix} プログラムのエントリーポイント`;
      return `${prefix} ラベル${match[1]}を定義する`;
    }
    if (/^mov\s+(\w+),\s*(\w+|\d+)/.test(trimmed)) {
      const match = trimmed.match(/mov\s+(\w+),\s*(\w+|\d+)/);
      return `${prefix} ${match[2]}を${match[1]}に格納する`;
    }
    if (/^add\s+(\w+),\s*(\w+|\d+)/.test(trimmed)) {
      const match = trimmed.match(/add\s+(\w+),\s*(\w+|\d+)/);
      return `${prefix} ${match[1]}に${match[2]}を加算する`;
    }
    if (/^sub\s+(\w+),\s*(\w+|\d+)/.test(trimmed)) {
      const match = trimmed.match(/sub\s+(\w+),\s*(\w+|\d+)/);
      return `${prefix} ${match[1]}から${match[2]}を減算する`;
    }
    if (/^xor\s+(\w+),\s*(\w+)/.test(trimmed)) {
      return `${prefix} レジスタを0にする`;
    }
    if (/^cmp\s+(\w+),\s*(\w+|\d+)/.test(trimmed)) {
      const match = trimmed.match(/cmp\s+(\w+),\s*(\w+|\d+)/);
      return `${prefix} ${match[1]}と${match[2]}を比較する`;
    }
    if (/^(je|jne|jg|jl|jge|jle|jz|jnz)\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/(je|jne|jg|jl|jge|jle|jz|jnz)\s+(\w+)/);
      const jmpDesc = {
        'je': '等しければ', 'jne': '等しくなければ', 'jg': '大きければ',
        'jl': '小さければ', 'jge': '以上なら', 'jle': '以下なら',
        'jz': 'ゼロなら', 'jnz': '非ゼロなら'
      };
      return `${prefix} ${jmpDesc[match[1]] || '条件に合えば'}${match[2]}へジャンプする`;
    }
    if (/^jmp\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/jmp\s+(\w+)/);
      return `${prefix} ${match[1]}へ無条件ジャンプする`;
    }
    if (/^syscall/.test(trimmed)) {
      return `${prefix} システムコールを実行する`;
    }
    if (/^inc\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/inc\s+(\w+)/);
      return `${prefix} ${match[1]}を1増やす`;
    }
    if (/^dec\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/dec\s+(\w+)/);
      return `${prefix} ${match[1]}を1減らす`;
    }
    if (/^push\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/push\s+(\w+)/);
      return `${prefix} ${match[1]}をスタックにプッシュする`;
    }
    if (/^pop\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/pop\s+(\w+)/);
      return `${prefix} スタックから${match[1]}にポップする`;
    }
    if (/^call\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/call\s+(\w+)/);
      return `${prefix} ${match[1]}を呼び出す`;
    }
    if (/^ret/.test(trimmed)) {
      return `${prefix} 呼び出し元に戻る`;
    }
    if (/^\w+\s+db\s+"/.test(trimmed)) {
      return `${prefix} 文字列データを定義する`;
    }
    // Generic assembly instruction
    if (/^[a-z]+\s/.test(trimmed)) {
      return `${prefix} アセンブリ命令を実行する`;
    }
  }

  // C/C++ specific
  if (language === 'c' || language === 'cpp') {
    if (/^#include\s*<(.+)>/.test(trimmed)) {
      const match = trimmed.match(/<(.+)>/);
      return `${prefix} ${match[1]}ライブラリを読み込む`;
    }
    if (/^(int|void)\s+main\s*\(/.test(trimmed)) {
      return `${prefix} プログラムのエントリーポイントを定義する`;
    }
    if (/^printf\s*\(/.test(trimmed)) {
      return `${prefix} 標準出力に出力する`;
    }
    if (/^return\s+0/.test(trimmed)) {
      return `${prefix} 正常終了を示す値0を返す`;
    }
    if (/^return\s+/.test(trimmed)) {
      return `${prefix} 値を返す`;
    }
    if (/^struct\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/struct\s+(\w+)/);
      return `${prefix} 構造体${match[1]}を定義する`;
    }
    if (/^(int|float|double|char|void)\s+(\w+)\s*\(/.test(trimmed)) {
      const match = trimmed.match(/(int|float|double|char|void)\s+(\w+)/);
      if (match[2] !== 'main') {
        return `${prefix} 関数${match[2]}を定義する`;
      }
    }
    if (/^(int|float|double|char|long|short)\s+(\w+)\s*[;=]/.test(trimmed)) {
      const match = trimmed.match(/(int|float|double|char|long|short)\s+(\w+)/);
      return `${prefix} ${match[1]}型の変数${match[2]}を宣言する`;
    }
    if (/^for\s*\(/.test(trimmed)) {
      return `${prefix} ループを開始する`;
    }
    if (/^if\s*\(/.test(trimmed)) {
      return `${prefix} 条件分岐を開始する`;
    }
    if (/^while\s*\(/.test(trimmed)) {
      return `${prefix} whileループを開始する`;
    }
  }

  // C++ specific
  if (language === 'cpp') {
    if (/^using\s+namespace/.test(trimmed)) {
      return `${prefix} 名前空間を使用する`;
    }
    if (/^std::cout/.test(trimmed)) {
      return `${prefix} 標準出力に出力する`;
    }
    if (/^std::vector/.test(trimmed)) {
      return `${prefix} ベクターを初期化する`;
    }
    if (/^std::map/.test(trimmed)) {
      return `${prefix} マップを初期化する`;
    }
    if (/^class\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/class\s+(\w+)/);
      return `${prefix} クラス${match[1]}を定義する`;
    }
    if (/^public:/.test(trimmed)) {
      return `${prefix} パブリックメンバーを宣言する`;
    }
    if (/^private:/.test(trimmed)) {
      return `${prefix} プライベートメンバーを宣言する`;
    }
    if (/^template\s*</.test(trimmed)) {
      return `${prefix} テンプレートを定義する`;
    }
  }

  // Go specific
  if (language === 'go') {
    if (/^package\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/package\s+(\w+)/);
      return `${prefix} パッケージ${match[1]}を宣言する`;
    }
    if (/^import\s*\(/.test(trimmed) || /^import\s+"/.test(trimmed)) {
      return `${prefix} パッケージをインポートする`;
    }
    if (/^"(\w+)"/.test(trimmed)) {
      const match = trimmed.match(/"(\w+)"/);
      return `${prefix} ${match[1]}パッケージ`;
    }
    if (/^func\s+main\s*\(/.test(trimmed)) {
      return `${prefix} メイン関数を定義する`;
    }
    if (/^func\s+(\w+)\s*\(/.test(trimmed)) {
      const match = trimmed.match(/func\s+(\w+)/);
      return `${prefix} 関数${match[1]}を定義する`;
    }
    if (/^func\s+\([^)]+\)\s*(\w+)/.test(trimmed)) {
      const match = trimmed.match(/func\s+\([^)]+\)\s*(\w+)/);
      return `${prefix} メソッド${match[1]}を定義する`;
    }
    if (/^type\s+(\w+)\s+struct/.test(trimmed)) {
      const match = trimmed.match(/type\s+(\w+)/);
      return `${prefix} 構造体${match[1]}を定義する`;
    }
    if (/^type\s+(\w+)\s+interface/.test(trimmed)) {
      const match = trimmed.match(/type\s+(\w+)/);
      return `${prefix} インターフェース${match[1]}を定義する`;
    }
    if (/^fmt\.(Print|Println|Printf)/.test(trimmed)) {
      return `${prefix} 標準出力に出力する`;
    }
    if (/^(\w+)\s*:=/.test(trimmed)) {
      const match = trimmed.match(/^(\w+)\s*:=/);
      return `${prefix} 変数${match[1]}を初期化する`;
    }
    if (/^go\s+func/.test(trimmed)) {
      return `${prefix} ゴルーチンを起動する`;
    }
    if (/^defer\s+/.test(trimmed)) {
      return `${prefix} 遅延実行を登録する`;
    }
  }

  // Java specific
  if (language === 'java') {
    if (/^import\s+/.test(trimmed)) {
      return `${prefix} ライブラリをインポートする`;
    }
    if (/^public\s+class\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/class\s+(\w+)/);
      return `${prefix} クラス${match[1]}を定義する`;
    }
    if (/^public\s+static\s+void\s+main/.test(trimmed)) {
      return `${prefix} メイン関数を定義する`;
    }
    if (/^System\.out\.(print|println)/.test(trimmed)) {
      return `${prefix} 標準出力に出力する`;
    }
    if (/^(public|private|protected)?\s*(static)?\s*(\w+)\s+(\w+)\s*\(/.test(trimmed)) {
      const match = trimmed.match(/(\w+)\s*\(/);
      if (match && match[1] !== 'if' && match[1] !== 'while' && match[1] !== 'for') {
        return `${prefix} メソッド${match[1]}を定義する`;
      }
    }
    if (/^interface\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/interface\s+(\w+)/);
      return `${prefix} インターフェース${match[1]}を定義する`;
    }
    if (/^abstract\s+/.test(trimmed)) {
      return `${prefix} 抽象メンバーを定義する`;
    }
    if (/^try\s*\{/.test(trimmed)) {
      return `${prefix} 例外処理を開始する`;
    }
    if (/^catch\s*\(/.test(trimmed) || /}\s*catch\s*\(/.test(trimmed)) {
      return `${prefix} 例外をキャッチする`;
    }
    if (/^finally\s*\{/.test(trimmed) || /}\s*finally\s*\{/.test(trimmed)) {
      return `${prefix} 後処理を実行する`;
    }
  }

  // JavaScript/TypeScript specific
  if (language === 'javascript' || language === 'typescript') {
    if (/^(const|let|var)\s+(\w+)\s*=/.test(trimmed)) {
      const match = trimmed.match(/(const|let|var)\s+(\w+)/);
      return `${prefix} 変数${match[2]}を定義する`;
    }
    if (/^function\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/function\s+(\w+)/);
      return `${prefix} 関数${match[1]}を定義する`;
    }
    if (/^console\.log/.test(trimmed)) {
      return `${prefix} コンソールに出力する`;
    }
    if (/^return\s+/.test(trimmed)) {
      return `${prefix} 値を返す`;
    }
    if (/^class\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/class\s+(\w+)/);
      return `${prefix} クラス${match[1]}を定義する`;
    }
    if (/^interface\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/interface\s+(\w+)/);
      return `${prefix} インターフェース${match[1]}を定義する`;
    }
    if (/^async\s+/.test(trimmed)) {
      return `${prefix} 非同期処理を定義する`;
    }
    if (/^await\s+/.test(trimmed)) {
      return `${prefix} 非同期処理を待機する`;
    }
    if (/^try\s*\{/.test(trimmed)) {
      return `${prefix} 例外処理を開始する`;
    }
    if (/^catch\s*\(/.test(trimmed) || /}\s*catch\s*\(/.test(trimmed)) {
      return `${prefix} 例外をキャッチする`;
    }
    if (/^\.\w+\(/.test(trimmed)) {
      const match = trimmed.match(/\.(\w+)\(/);
      return `${prefix} ${match[1]}メソッドを呼び出す`;
    }
  }

  // Rust specific
  if (language === 'rust') {
    if (/^use\s+/.test(trimmed)) {
      return `${prefix} モジュールをインポートする`;
    }
    if (/^fn\s+main\s*\(/.test(trimmed)) {
      return `${prefix} メイン関数を定義する`;
    }
    if (/^fn\s+(\w+)\s*\(/.test(trimmed)) {
      const match = trimmed.match(/fn\s+(\w+)/);
      return `${prefix} 関数${match[1]}を定義する`;
    }
    if (/^let\s+(mut\s+)?(\w+)/.test(trimmed)) {
      const match = trimmed.match(/let\s+(mut\s+)?(\w+)/);
      return `${prefix} 変数${match[2]}を定義する`;
    }
    if (/^struct\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/struct\s+(\w+)/);
      return `${prefix} 構造体${match[1]}を定義する`;
    }
    if (/^enum\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/enum\s+(\w+)/);
      return `${prefix} 列挙型${match[1]}を定義する`;
    }
    if (/^impl\s+/.test(trimmed)) {
      return `${prefix} 実装ブロックを定義する`;
    }
    if (/^trait\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/trait\s+(\w+)/);
      return `${prefix} トレイト${match[1]}を定義する`;
    }
    if (/^println!\s*\(/.test(trimmed) || /^print!\s*\(/.test(trimmed)) {
      return `${prefix} 標準出力に出力する`;
    }
    if (/^match\s+/.test(trimmed)) {
      return `${prefix} パターンマッチを開始する`;
    }
    if (/^Ok\(/.test(trimmed)) {
      return `${prefix} 成功を返す`;
    }
    if (/^Err\(/.test(trimmed)) {
      return `${prefix} エラーを返す`;
    }
  }

  // Python specific
  if (language === 'python') {
    if (/^import\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/import\s+(\w+)/);
      return `${prefix} ${match[1]}モジュールをインポートする`;
    }
    if (/^from\s+(\w+)\s+import/.test(trimmed)) {
      const match = trimmed.match(/from\s+(\w+)/);
      return `${prefix} ${match[1]}モジュールからインポートする`;
    }
    if (/^def\s+(\w+)\s*\(/.test(trimmed)) {
      const match = trimmed.match(/def\s+(\w+)/);
      return `${prefix} 関数${match[1]}を定義する`;
    }
    if (/^class\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/class\s+(\w+)/);
      return `${prefix} クラス${match[1]}を定義する`;
    }
    if (/^print\s*\(/.test(trimmed)) {
      return `${prefix} 標準出力に出力する`;
    }
    if (/^return\s+/.test(trimmed)) {
      return `${prefix} 値を返す`;
    }
  }

  // Bash specific
  if (language === 'bash') {
    if (/^(\w+)=/.test(trimmed)) {
      const match = trimmed.match(/^(\w+)=/);
      return `${prefix} 変数${match[1]}に値を代入する`;
    }
    if (/^echo\s+/.test(trimmed)) {
      return `${prefix} 標準出力に出力する`;
    }
    if (/^if\s+/.test(trimmed)) {
      return `${prefix} 条件分岐を開始する`;
    }
    if (/^for\s+/.test(trimmed)) {
      return `${prefix} ループを開始する`;
    }
    if (/^while\s+/.test(trimmed)) {
      return `${prefix} whileループを開始する`;
    }
    if (/^(\w+)\s*\(\)\s*\{/.test(trimmed)) {
      const match = trimmed.match(/^(\w+)/);
      return `${prefix} 関数${match[1]}を定義する`;
    }
    if (/^fi$/.test(trimmed)) {
      return `${prefix} if文を終了する`;
    }
    if (/^done$/.test(trimmed)) {
      return `${prefix} ループを終了する`;
    }
    if (/^esac$/.test(trimmed)) {
      return `${prefix} case文を終了する`;
    }
    if (/^case\s+/.test(trimmed)) {
      return `${prefix} case文を開始する`;
    }
    if (/^\w+\)/.test(trimmed)) {
      return `${prefix} パターンマッチを定義する`;
    }
  }

  // PHP specific
  if (language === 'php') {
    if (/^<\?php/.test(trimmed)) {
      return `${prefix} PHPスクリプトを開始する`;
    }
    if (/^\?>/.test(trimmed)) {
      return `${prefix} PHPスクリプトを終了する`;
    }
    if (/^\$(\w+)\s*=/.test(trimmed)) {
      const match = trimmed.match(/\$(\w+)/);
      return `${prefix} 変数${match[1]}に値を代入する`;
    }
    if (/^echo\s+/.test(trimmed)) {
      return `${prefix} 標準出力に出力する`;
    }
    if (/^function\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/function\s+(\w+)/);
      return `${prefix} 関数${match[1]}を定義する`;
    }
    if (/^class\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/class\s+(\w+)/);
      return `${prefix} クラス${match[1]}を定義する`;
    }
  }

  // Lua specific
  if (language === 'lua') {
    if (/^local\s+(\w+)\s*=/.test(trimmed)) {
      const match = trimmed.match(/local\s+(\w+)/);
      return `${prefix} ローカル変数${match[1]}を定義する`;
    }
    if (/^function\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/function\s+(\w+)/);
      return `${prefix} 関数${match[1]}を定義する`;
    }
    if (/^local\s+function\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/function\s+(\w+)/);
      return `${prefix} ローカル関数${match[1]}を定義する`;
    }
    if (/^print\s*\(/.test(trimmed)) {
      return `${prefix} 標準出力に出力する`;
    }
    if (/^return\s+/.test(trimmed)) {
      return `${prefix} 値を返す`;
    }
    if (/^end$/.test(trimmed)) {
      return `${prefix} ブロックを終了する`;
    }
  }

  // Perl specific
  if (language === 'perl') {
    if (/^my\s+\$(\w+)/.test(trimmed)) {
      const match = trimmed.match(/\$(\w+)/);
      return `${prefix} 変数${match[1]}を宣言する`;
    }
    if (/^my\s+@(\w+)/.test(trimmed)) {
      const match = trimmed.match(/@(\w+)/);
      return `${prefix} 配列${match[1]}を宣言する`;
    }
    if (/^my\s+%(\w+)/.test(trimmed)) {
      const match = trimmed.match(/%(\w+)/);
      return `${prefix} ハッシュ${match[1]}を宣言する`;
    }
    if (/^print\s+/.test(trimmed)) {
      return `${prefix} 標準出力に出力する`;
    }
    if (/^sub\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/sub\s+(\w+)/);
      return `${prefix} サブルーチン${match[1]}を定義する`;
    }
    if (/^foreach\s+/.test(trimmed) || /^for\s+/.test(trimmed)) {
      return `${prefix} ループを開始する`;
    }
    if (/^if\s*\(/.test(trimmed)) {
      return `${prefix} 条件分岐を開始する`;
    }
    if (/^open\s*\(/.test(trimmed)) {
      return `${prefix} ファイルを開く`;
    }
    if (/^close\s*\(/.test(trimmed)) {
      return `${prefix} ファイルを閉じる`;
    }
  }

  // Kotlin specific
  if (language === 'kotlin') {
    if (/^fun\s+main\s*\(/.test(trimmed)) {
      return `${prefix} メイン関数を定義する`;
    }
    if (/^fun\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/fun\s+(\w+)/);
      return `${prefix} 関数${match[1]}を定義する`;
    }
    if (/^(val|var)\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/(val|var)\s+(\w+)/);
      return `${prefix} 変数${match[2]}を定義する`;
    }
    if (/^class\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/class\s+(\w+)/);
      return `${prefix} クラス${match[1]}を定義する`;
    }
    if (/^println\s*\(/.test(trimmed) || /^print\s*\(/.test(trimmed)) {
      return `${prefix} 標準出力に出力する`;
    }
  }

  // Swift specific
  if (language === 'swift') {
    if (/^func\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/func\s+(\w+)/);
      return `${prefix} 関数${match[1]}を定義する`;
    }
    if (/^(let|var)\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/(let|var)\s+(\w+)/);
      return `${prefix} 変数${match[2]}を定義する`;
    }
    if (/^class\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/class\s+(\w+)/);
      return `${prefix} クラス${match[1]}を定義する`;
    }
    if (/^struct\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/struct\s+(\w+)/);
      return `${prefix} 構造体${match[1]}を定義する`;
    }
    if (/^print\s*\(/.test(trimmed)) {
      return `${prefix} 標準出力に出力する`;
    }
  }

  // Elixir specific
  if (language === 'elixir') {
    if (/^def\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/def\s+(\w+)/);
      return `${prefix} 関数${match[1]}を定義する`;
    }
    if (/^defp\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/defp\s+(\w+)/);
      return `${prefix} プライベート関数${match[1]}を定義する`;
    }
    if (/^defmodule\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/defmodule\s+(\w+)/);
      return `${prefix} モジュール${match[1]}を定義する`;
    }
    if (/^IO\.(puts|inspect)/.test(trimmed)) {
      return `${prefix} 標準出力に出力する`;
    }
    if (/^end$/.test(trimmed)) {
      return `${prefix} ブロックを終了する`;
    }
  }

  // SQL specific
  if (language === 'sql') {
    if (/^SELECT\s+/i.test(trimmed)) {
      return `${prefix} データを取得する`;
    }
    if (/^INSERT\s+INTO/i.test(trimmed)) {
      return `${prefix} データを挿入する`;
    }
    if (/^UPDATE\s+/i.test(trimmed)) {
      return `${prefix} データを更新する`;
    }
    if (/^DELETE\s+FROM/i.test(trimmed)) {
      return `${prefix} データを削除する`;
    }
    if (/^CREATE\s+TABLE/i.test(trimmed)) {
      return `${prefix} テーブルを作成する`;
    }
    if (/^DROP\s+TABLE/i.test(trimmed)) {
      return `${prefix} テーブルを削除する`;
    }
    if (/^WHERE\s+/i.test(trimmed)) {
      return `${prefix} 条件を指定する`;
    }
    if (/^ORDER\s+BY/i.test(trimmed)) {
      return `${prefix} 並び順を指定する`;
    }
    if (/^GROUP\s+BY/i.test(trimmed)) {
      return `${prefix} グループ化を指定する`;
    }
    if (/^JOIN\s+/i.test(trimmed)) {
      return `${prefix} テーブルを結合する`;
    }
  }

  // Haskell specific
  if (language === 'haskell') {
    if (/^import\s+/.test(trimmed)) {
      return `${prefix} モジュールをインポートする`;
    }
    if (/^main\s*=/.test(trimmed)) {
      return `${prefix} メイン関数を定義する`;
    }
    if (/^(\w+)\s*::/.test(trimmed)) {
      const match = trimmed.match(/^(\w+)\s*::/);
      return `${prefix} ${match[1]}の型を宣言する`;
    }
    if (/^(\w+)\s+[a-z]/.test(trimmed) && !trimmed.includes('=')) {
      const match = trimmed.match(/^(\w+)/);
      return `${prefix} ${match[1]}を適用する`;
    }
  }

  // C# specific
  if (language === 'csharp') {
    if (/^using\s+/.test(trimmed)) {
      return `${prefix} 名前空間を使用する`;
    }
    if (/^namespace\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/namespace\s+(\w+)/);
      return `${prefix} 名前空間${match[1]}を定義する`;
    }
    if (/^class\s+(\w+)/.test(trimmed)) {
      const match = trimmed.match(/class\s+(\w+)/);
      return `${prefix} クラス${match[1]}を定義する`;
    }
    if (/^(public|private|protected)?\s*static\s+void\s+Main/.test(trimmed)) {
      return `${prefix} メイン関数を定義する`;
    }
    if (/^Console\.WriteLine/.test(trimmed)) {
      return `${prefix} コンソールに出力する`;
    }
  }

  // Generic fallback for holey lines
  if (holeyTrimmed.includes('___')) {
    // If it starts with a known keyword
    if (/^(if|for|while|switch|case|return|break|continue)\b/.test(trimmed)) {
      return `${prefix} 制御構造を記述する`;
    }
    // Generic fallback - don't add comment if we can't determine what it is
    return null;
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
          const desc = generateDescription(correctLine, line, lang, i, correctLines);
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
        totalFixed += insertedCount;
      }
    }
  }

  if (modified) {
    fs.writeFileSync(fp, content, 'utf8');
    console.log(`${file}: ${totalFixed}件修正`);
    filesFixed++;
    totalFixed = 0; // Reset for next file
  }
}

console.log(`\n完了: ${filesFixed}ファイルを修正しました`);

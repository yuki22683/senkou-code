import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commentPatterns: { [key: string]: RegExp[] } = {
  python: [/^\s*#/], javascript: [/^\s*\/\//], typescript: [/^\s*\/\//],
  java: [/^\s*\/\//], c: [/^\s*\/\//], cpp: [/^\s*\/\//], csharp: [/^\s*\/\//],
  go: [/^\s*\/\//], rust: [/^\s*\/\//], swift: [/^\s*\/\//], kotlin: [/^\s*\/\//],
  bash: [/^\s*#/], ruby: [/^\s*#/], sql: [/^\s*--/], lua: [/^\s*--/],
  perl: [/^\s*#/], php: [/^\s*\/\//], haskell: [/^\s*--/], elixir: [/^\s*#/], assembly: [/^\s*;/],
};

function detectLanguage(filename: string): string {
  return path.basename(filename, '.ts').replace(/\d+$/, '');
}

function isCommentLine(line: string, language: string): boolean {
  const patterns = commentPatterns[language] || [];
  for (const p of patterns) if (p.test(line)) return true;
  return false;
}

function isEmptyOrStructural(line: string): boolean {
  const trimmed = line.trim();
  if (trimmed === '') return true;
  if (/^[{}()\[\]]+$/.test(trimmed)) return true;
  if (/^[}\])\s;]+$/.test(trimmed)) return true;
  return false;
}

// 行を虫食い化
function makeHoley(line: string, language: string): string {
  if (line.includes('___')) return line;
  let r = line;

  // PHP tags
  if (/^<\?php\s*$/.test(r.trim())) return r.replace(/<\?php/, '<?___');
  if (/^\?>$/.test(r.trim())) return r.replace(/\?>/, '?___');

  // #include <xxx>
  if (/#include\s*<[^>]+>/.test(r)) return r.replace(/(#include\s*<)[^>]+(>)/, '$1___$2');

  // using xxx;
  if (/^using\s+\w+/.test(r.trim())) return r.replace(/(using\s+)\w+/, '$1___');

  // package xxx
  if (/^package\s+\w+/.test(r.trim())) return r.replace(/(package\s+)\w+/, '$1___');

  // import "xxx"
  if (/^import\s+"/.test(r.trim())) return r.replace(/(import\s+)"[^"]+"/, '$1"___"');

  // import xxx.yyy
  if (/^import\s+[\w.]+/.test(r.trim())) return r.replace(/(import\s+)[\w.]+/, '$1___');

  // ダブルクォート文字列
  if (/"[^"]*"/.test(r) && !/"___"/.test(r)) return r.replace(/"([^"]*)"/, '"___"');

  // シングルクォート文字列
  if (/'[^']*'/.test(r) && !/'___'/.test(r)) return r.replace(/'([^']*)'/, "'___'");

  // 数値代入 = N
  if (/=\s*\d+/.test(r)) return r.replace(/=\s*(\d+)/, '= ___');

  // class xxx
  if (/\bclass\s+\w+/.test(r)) return r.replace(/(\bclass\s+)\w+/, '$1___');

  // public static void main
  if (/public\s+static\s+void\s+main/.test(r)) return r.replace(/(public)(\s+static\s+void\s+main)/, '___$2');

  // static void xxx() / void xxx() / int xxx()
  if (/(static\s+)?(void|int)\s+\w+\s*\(/.test(r)) {
    return r.replace(/((static\s+)?(void|int)\s+)\w+(\s*\()/, '$1___$4');
  }

  // func xxx()
  if (/func\s+\w+\s*\(/.test(r)) return r.replace(/(func\s+)\w+(\s*\()/, '$1___$2');

  // return N;
  if (/return\s+\d+/.test(r)) return r.replace(/(return\s+)\d+/, '$1___');

  // section .xxx (assembly)
  if (/section\s+\.\w+/.test(r)) return r.replace(/(section\s+)\.\w+/, '$1.___');

  // global _xxx
  if (/global\s+_?\w+/.test(r)) return r.replace(/(global\s+)_?\w+/, '$1___');

  // syscall
  if (/^\s*syscall\s*$/.test(r)) return r.replace(/syscall/, '___');

  // mov reg, N
  if (/mov\s+\w+,\s*\d+/.test(r)) return r.replace(/(mov\s+\w+,\s*)\d+/, '$1___');

  // mov reg, reg
  if (/mov\s+\w+,\s*\w+/.test(r)) return r.replace(/(mov\s+)\w+(,)/, '$1___$2');

  // ラベル: (assembly)
  if (/^\s*[a-z_]\w*:\s*$/i.test(r)) return r.replace(/(\s*)[a-z_]\w*(:)/i, '$1___$2');

  // アセンブリ命令
  if (/^\s*(xor|and|or|add|sub|cmp|jmp|jnz|jz|je|jne|inc|dec|shl|shr|mul|neg|test|push|pop)\s+/i.test(r)) {
    return r.replace(/^(\s*)(xor|and|or|add|sub|cmp|jmp|jnz|jz|je|jne|inc|dec|shl|shr|mul|neg|test|push|pop)(\s+)/i, '$1___$3');
  }

  // echo $xxx / echo "xxx"
  if (/\becho\s+\$\w+/.test(r)) return r.replace(/(\becho\s+)\$\w+/, '$1$___');
  if (/\becho\s+"[^"]*"/.test(r)) return r.replace(/(\becho\s+)"[^"]*"/, '$1"___"');

  // 配列 names=("...")
  if (/\w+=\([^)]+\)/.test(r)) return r.replace(/(\w+=\()[^)]+(\))/, '$1___$2');

  // forEach/map (Java lambda)
  if (/\.forEach\([^)]+\)/.test(r)) return r.replace(/(\.forEach\()[^)]+(\))/, '$1___$2');
  if (/\.map\([^)]+\)/.test(r)) return r.replace(/(\.map\()[^)]+(\))/, '$1___$2');

  // 関数定義 xxx() {
  if (/^\s*\w+\s*\(\)\s*\{\s*$/.test(r)) return r.replace(/^(\s*)\w+(\s*\(\))/, '$1___$2');

  // PHP配列 $xxx = [...]
  if (/\$\w+\s*=\s*\[/.test(r)) return r.replace(/(\$\w+\s*=\s*)\[[^\]]*\]/, '$1[___]');

  // 最後の手段：最初の識別子
  if (/^\s*[a-zA-Z_$]\w*/.test(r) && !/__/.test(r)) {
    return r.replace(/^(\s*)([a-zA-Z_$]\w*)/, '$1___');
  }

  return r;
}

// ファイル全体を処理
function processFile(filePath: string): number {
  let content = fs.readFileSync(filePath, 'utf-8');
  const language = detectLanguage(path.basename(filePath));
  let totalChanges = 0;

  // 全てのholeyCodeブロックを処理
  const holeyCodePattern = /("holeyCode":\s*")([^"]*(?:\\.[^"]*)*)(")/g;

  content = content.replace(holeyCodePattern, (match, prefix, holeyCode, suffix) => {
    // 行に分割（エスケープされた\nを使用）
    const lines = holeyCode.split('\\n');
    let modified = false;

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];

      // エスケープをデコード（一時的に）
      const decoded = line.replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\\\/g, '\\');

      // コメント行や空行はスキップ
      if (isCommentLine(decoded, language)) continue;
      if (isEmptyOrStructural(decoded)) continue;

      // 既に虫食いならスキップ
      if (decoded.includes('___')) continue;

      // 虫食い化
      const newLine = makeHoley(decoded, language);
      if (newLine !== decoded) {
        // 再エスケープ
        lines[i] = newLine.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
        modified = true;
        totalChanges++;
        console.log(`    Fixed: ${newLine.substring(0, 50)}`);
      }
    }

    if (modified) {
      return prefix + lines.join('\\n') + suffix;
    }
    return match;
  });

  fs.writeFileSync(filePath, content, 'utf-8');
  return totalChanges;
}

async function main() {
  const lessonsDir = path.join(__dirname, '..', 'data', 'lessons');
  const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

  let totalChanges = 0;
  for (const file of files) {
    console.log(`\nProcessing ${file}...`);
    const filePath = path.join(lessonsDir, file);
    try {
      const changes = processFile(filePath);
      totalChanges += changes;
      console.log(`  Changes: ${changes}`);
    } catch (err) {
      console.log(`  Error: ${err}`);
    }
  }

  console.log(`\n=== Total changes: ${totalChanges} ===`);
}

main();

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

// 行を虫食い化する（様々なパターンに対応）
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

interface Problem {
  file: string; exerciseIndex: number; exerciseTitle: string;
  correctLineIdx: number; correctLine: string; holeyLine: string; language: string;
}

// ファイルを処理（コメント挿入なし、虫食い化のみ）
function processFile(filePath: string, problems: Problem[]): number {
  let content = fs.readFileSync(filePath, 'utf-8');
  const language = detectLanguage(path.basename(filePath));
  let changes = 0;

  // 演習ごとにグループ化
  const byExercise = new Map<string, Problem[]>();
  for (const p of problems) {
    if (!byExercise.has(p.exerciseTitle)) byExercise.set(p.exerciseTitle, []);
    byExercise.get(p.exerciseTitle)!.push(p);
  }

  for (const [title, exerciseProblems] of byExercise) {
    const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // holeyCodeのみを抽出・修正
    const pattern = new RegExp(
      `("title":\\s*"${escapedTitle}"[\\s\\S]*?"holeyCode":\\s*")([^"]*(?:\\\\.[^"]*)*)(")`,
      's'
    );

    const match = pattern.exec(content);
    if (!match) {
      console.log(`    Not found: ${title}`);
      continue;
    }

    const holeyCodeEscaped = match[2];

    // 簡易的なデコード（\nのみ改行に、他はそのまま）
    const holeyLines = holeyCodeEscaped.split('\\n');

    let modified = false;
    for (const problem of exerciseProblems) {
      const idx = problem.correctLineIdx;
      if (idx >= holeyLines.length) continue;

      let holeyLine = holeyLines[idx];
      // エスケープをデコード
      holeyLine = holeyLine.replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\\\/g, '\\');

      if (holeyLine.includes('___')) continue;

      const newHoleyLine = makeHoley(holeyLine, language);
      if (newHoleyLine === holeyLine) {
        console.log(`    Could not holey: ${holeyLine.substring(0, 40)}`);
        continue;
      }

      // 再エスケープ
      const escapedNew = newHoleyLine.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      holeyLines[idx] = escapedNew;
      modified = true;
      changes++;
      console.log(`    Fixed: ${newHoleyLine.substring(0, 50)}`);
    }

    if (modified) {
      const newHoleyCodeEscaped = holeyLines.join('\\n');
      const replacement = `${match[1]}${newHoleyCodeEscaped}${match[3]}`;
      content = content.replace(match[0], replacement);
    }
  }

  if (changes > 0) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }
  return changes;
}

async function main() {
  // まずチェックを実行して問題を取得
  const lessonsDir = path.join(__dirname, '..', 'data', 'lessons');
  const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

  const problems: Problem[] = [];

  for (const file of files) {
    const filePath = path.join(lessonsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const language = detectLanguage(file);

    const exerciseRegex = /"title":\s*"([^"]+)"[\s\S]*?"correctCode":\s*"((?:[^"\\]|\\.)*)"\s*,\s*"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;

    let exerciseIndex = 0;
    let match;
    while ((match = exerciseRegex.exec(content)) !== null) {
      exerciseIndex++;
      const title = match[1];
      const correctCode = match[2].replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\t/g, '\t');
      const holeyCode = match[3].replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\t/g, '\t');

      const correctLines = correctCode.split('\n');
      const holeyLines = holeyCode.split('\n');

      if (correctLines.length !== holeyLines.length) continue;

      for (let i = 0; i < correctLines.length; i++) {
        const correctLine = correctLines[i];
        const holeyLine = holeyLines[i];

        if (isCommentLine(correctLine, language)) continue;
        if (isEmptyOrStructural(correctLine)) continue;

        if (!holeyLine.includes('___')) {
          problems.push({
            file, exerciseIndex, exerciseTitle: title,
            correctLineIdx: i, correctLine, holeyLine, language
          });
        }
      }
    }
  }

  console.log(`Found ${problems.length} problems to fix\n`);

  // ファイルごとにグループ化
  const byFile = new Map<string, Problem[]>();
  for (const p of problems) {
    if (!byFile.has(p.file)) byFile.set(p.file, []);
    byFile.get(p.file)!.push(p);
  }

  let totalChanges = 0;
  for (const [file, fileProblems] of byFile) {
    console.log(`\nProcessing ${file} (${fileProblems.length} problems)...`);
    const filePath = path.join(lessonsDir, file);
    try {
      const changes = processFile(filePath, fileProblems);
      totalChanges += changes;
      console.log(`  Changes: ${changes}`);
    } catch (err) {
      console.log(`  Error: ${err}`);
    }
  }

  console.log(`\n=== Total changes: ${totalChanges} ===`);
}

main();

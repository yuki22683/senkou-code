import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 言語ごとのコメントプレフィックス
const commentPrefix: { [key: string]: string } = {
  python: '#',
  javascript: '//',
  typescript: '//',
  java: '//',
  c: '//',
  cpp: '//',
  csharp: '//',
  go: '//',
  rust: '//',
  swift: '//',
  kotlin: '//',
  bash: '#',
  ruby: '#',
  sql: '--',
  lua: '--',
  perl: '#',
  php: '//',
  haskell: '--',
  elixir: '#',
  assembly: ';',
};

// 言語ごとのコメントパターン
const commentPatterns: { [key: string]: RegExp[] } = {
  python: [/^\s*#/],
  javascript: [/^\s*\/\//],
  typescript: [/^\s*\/\//],
  java: [/^\s*\/\//],
  c: [/^\s*\/\//],
  cpp: [/^\s*\/\//],
  csharp: [/^\s*\/\//],
  go: [/^\s*\/\//],
  rust: [/^\s*\/\//],
  swift: [/^\s*\/\//],
  kotlin: [/^\s*\/\//],
  bash: [/^\s*#/],
  ruby: [/^\s*#/],
  sql: [/^\s*--/],
  lua: [/^\s*--/],
  perl: [/^\s*#/],
  php: [/^\s*\/\//],
  haskell: [/^\s*--/],
  elixir: [/^\s*#/],
  assembly: [/^\s*;/],
};

function detectLanguage(filename: string): string {
  return path.basename(filename, '.ts').replace(/\d+$/, '');
}

function isCommentLine(line: string, language: string): boolean {
  const patterns = commentPatterns[language] || [];
  for (const pattern of patterns) {
    if (pattern.test(line)) return true;
  }
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
  let result = line;

  // すでに___があれば何もしない
  if (result.includes('___')) return result;

  // ダブルクォート文字列
  if (/"[^"]+"/g.test(result)) {
    return result.replace(/"([^"]+)"/, '"___"');
  }

  // シングルクォート文字列
  if (/'[^']+'/g.test(result)) {
    return result.replace(/'([^']+)'/, "'___'");
  }

  // 数値代入
  if (/=\s*\d+/.test(result)) {
    return result.replace(/=\s*(\d+)/, '= ___');
  }

  // 0x数値
  if (/\b0x[0-9A-Fa-f]+/.test(result)) {
    return result.replace(/\b0x[0-9A-Fa-f]+/, '___');
  }

  // package xxx
  if (/^package\s+\w+/.test(result.trim())) {
    return result.replace(/(package\s+)\w+/, '$1___');
  }

  // import "..."
  if (/^import\s+"/.test(result.trim())) {
    return result.replace(/(import\s+)"[^"]+"/, '$1"___"');
  }

  // import xxx
  if (/^import\s+[\w.]+/.test(result.trim())) {
    return result.replace(/(import\s+)[\w.]+/, '$1___');
  }

  // #include <xxx>
  if (/#include\s*<[^>]+>/.test(result)) {
    return result.replace(/(#include\s*<)[^>]+(>)/, '$1___$2');
  }

  // using xxx
  if (/^using\s+\w+/.test(result.trim())) {
    return result.replace(/(using\s+)\w+/, '$1___');
  }

  // class xxx
  if (/\bclass\s+\w+/.test(result)) {
    return result.replace(/(\bclass\s+)\w+/, '$1___');
  }

  // public static void main
  if (/public\s+static\s+void\s+main/.test(result)) {
    return result.replace(/(public\s+)(static)/, '___$1$2');
  }

  // func xxx()
  if (/func\s+\w+\s*\(/.test(result)) {
    return result.replace(/(func\s+)\w+(\s*\()/, '$1___$2');
  }

  // void xxx() / int xxx()
  if (/(void|int)\s+\w+\s*\(/.test(result)) {
    return result.replace(/((void|int)\s+)\w+(\s*\()/, '$1___$3');
  }

  // section .xxx
  if (/section\s+\.\w+/.test(result)) {
    return result.replace(/(section\s+)\.\w+/, '$1.___');
  }

  // global _xxx
  if (/global\s+_\w+/.test(result)) {
    return result.replace(/(global\s+)_\w+/, '$1___');
  }

  // syscall
  if (/^\s*syscall\s*$/.test(result)) {
    return result.replace(/syscall/, '___');
  }

  // mov reg, N
  if (/mov\s+\w+,\s*\d+/.test(result)) {
    return result.replace(/(mov\s+\w+,\s*)\d+/, '$1___');
  }

  // mov reg, reg
  if (/mov\s+\w+,\s*\w+/.test(result)) {
    return result.replace(/(mov\s+)\w+(,)/, '$1___$2');
  }

  // ラベル:
  if (/^\s*\w+:\s*$/.test(result)) {
    return result.replace(/(\s*)\w+(:)/, '$1___$2');
  }

  // アセンブリ命令
  if (/^\s*(xor|and|or|add|sub|cmp|jmp|jnz|jz|je|jne|inc|dec|shl|shr|mul|neg|test|push|pop)\s+/.test(result)) {
    return result.replace(/^(\s*)(xor|and|or|add|sub|cmp|jmp|jnz|jz|je|jne|inc|dec|shl|shr|mul|neg|test|push|pop)(\s+)/, '$1___$3');
  }

  // return N
  if (/return\s+\d+/.test(result)) {
    return result.replace(/(return\s+)\d+/, '$1___');
  }

  // println/print/echo
  if (/\b(println|print|echo)\s*\(/.test(result)) {
    return result.replace(/(\b(?:println|print|echo)\s*)\(/, '___$1(');
  }

  // 関数定義 xxx() {
  if (/^\s*\w+\s*\(\)\s*\{\s*$/.test(result)) {
    return result.replace(/^(\s*)\w+(\s*\(\))/, '$1___$2');
  }

  // 最後の手段: 最初の識別子
  if (/^\s*[a-zA-Z_]\w*/.test(result)) {
    return result.replace(/^(\s*)([a-zA-Z_]\w*)/, '$1___');
  }

  return result;
}

// コメント生成
function generateComment(line: string, language: string): string {
  const prefix = commentPrefix[language] || '//';
  const indent = line.match(/^(\s*)/)?.[1] || '';
  const trimmed = line.trim();
  let desc = trimmed.substring(0, 40);
  if (trimmed.length > 40) desc += '...';
  return `${indent}${prefix} ${desc}`;
}

// エスケープされた文字列をデコード
function decodeEscaped(s: string): string {
  return s
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'")
    .replace(/\\\\/g, '\\');
}

// 文字列をエスケープ
function encodeEscaped(s: string): string {
  return s
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\t/g, '\\t');
}

interface Problem {
  file: string;
  exerciseIndex: number;
  exerciseTitle: string;
  correctLineIdx: number;
  correctLine: string;
  holeyLine: string;
  language: string;
}

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
    // タイトルをエスケープ
    const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // correctCodeとholeyCodeを抽出する正規表現
    const pattern = new RegExp(
      `("title":\\s*"${escapedTitle}"[\\s\\S]*?"correctCode":\\s*")([^"]*(?:\\\\.[^"]*)*)(")([\\s\\S]*?"holeyCode":\\s*")([^"]*(?:\\\\.[^"]*)*)(")`
    );

    const match = pattern.exec(content);
    if (!match) {
      console.log(`    Could not find exercise: ${title}`);
      continue;
    }

    const correctCodeEscaped = match[2];
    const holeyCodeEscaped = match[5];

    const correctCode = decodeEscaped(correctCodeEscaped);
    const holeyCode = decodeEscaped(holeyCodeEscaped);

    const correctLines = correctCode.split('\n');
    const holeyLines = holeyCode.split('\n');

    if (correctLines.length !== holeyLines.length) {
      console.log(`    Line count mismatch: ${title}`);
      continue;
    }

    let modified = false;
    const newCorrectLines = [...correctLines];
    const newHoleyLines = [...holeyLines];
    let offset = 0;

    // 問題のある行をインデックス順にソート
    const sortedProblems = exerciseProblems.sort((a, b) => a.correctLineIdx - b.correctLineIdx);

    for (const problem of sortedProblems) {
      const idx = problem.correctLineIdx + offset;
      if (idx >= newHoleyLines.length) continue;

      const holeyLine = newHoleyLines[idx];
      if (holeyLine.includes('___')) continue;

      // 虫食い化
      const newHoleyLine = makeHoley(holeyLine, language);
      if (newHoleyLine === holeyLine) continue;

      // コメント生成
      const comment = generateComment(problem.correctLine, language);

      // コメント行を挿入
      newCorrectLines.splice(idx, 0, comment);
      newHoleyLines.splice(idx, 0, comment);
      newHoleyLines[idx + 1] = newHoleyLine;

      offset++;
      modified = true;
      changes++;
      console.log(`    Fixed line ${problem.correctLineIdx}: ${newHoleyLine.substring(0, 50)}`);
    }

    if (modified) {
      const newCorrectCode = newCorrectLines.join('\n');
      const newHoleyCode = newHoleyLines.join('\n');

      const newCorrectCodeEscaped = encodeEscaped(newCorrectCode);
      const newHoleyCodeEscaped = encodeEscaped(newHoleyCode);

      const replacement = `${match[1]}${newCorrectCodeEscaped}${match[3]}${match[4]}${newHoleyCodeEscaped}${match[6]}`;
      content = content.replace(match[0], replacement);
    }
  }

  if (changes > 0) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }

  return changes;
}

async function main() {
  const problemsPath = path.join(__dirname, 'holey-problems.json');
  if (!fs.existsSync(problemsPath)) {
    console.log('Error: holey-problems.json not found');
    return;
  }

  const problems: Problem[] = JSON.parse(fs.readFileSync(problemsPath, 'utf-8'));
  console.log(`Loaded ${problems.length} problems`);

  // ファイルごとにグループ化
  const byFile = new Map<string, Problem[]>();
  for (const p of problems) {
    if (!byFile.has(p.file)) byFile.set(p.file, []);
    byFile.get(p.file)!.push(p);
  }

  const lessonsDir = path.join(__dirname, '..', 'data', 'lessons');
  let totalChanges = 0;

  for (const [file, fileProblems] of byFile) {
    console.log(`\nProcessing ${file} (${fileProblems.length} problems)...`);
    const filePath = path.join(lessonsDir, file);

    try {
      const changes = processFile(filePath, fileProblems);
      totalChanges += changes;
      console.log(`  Total changes: ${changes}`);
    } catch (err) {
      console.log(`  Error: ${err}`);
    }
  }

  console.log(`\n=== Grand total: ${totalChanges} ===`);
}

main();

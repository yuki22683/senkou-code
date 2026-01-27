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
  javascript: [/^\s*\/\//, /^\s*\/\*/, /^\s*\*\//],
  typescript: [/^\s*\/\//, /^\s*\/\*/, /^\s*\*\//],
  java: [/^\s*\/\//, /^\s*\/\*/, /^\s*\*\//],
  c: [/^\s*\/\//, /^\s*\/\*/, /^\s*\*\//],
  cpp: [/^\s*\/\//, /^\s*\/\*/, /^\s*\*\//],
  csharp: [/^\s*\/\//, /^\s*\/\*/, /^\s*\*\//],
  go: [/^\s*\/\//, /^\s*\/\*/, /^\s*\*\//],
  rust: [/^\s*\/\//, /^\s*\/\*/, /^\s*\*\//],
  swift: [/^\s*\/\//, /^\s*\/\*/, /^\s*\*\//],
  kotlin: [/^\s*\/\//, /^\s*\/\*/, /^\s*\*\//],
  bash: [/^\s*#/],
  ruby: [/^\s*#/],
  sql: [/^\s*--/, /^\s*\/\*/, /^\s*\*\//],
  lua: [/^\s*--/],
  perl: [/^\s*#/],
  php: [/^\s*\/\//, /^\s*#/, /^\s*\/\*/, /^\s*\*\//],
  haskell: [/^\s*--/],
  elixir: [/^\s*#/],
  assembly: [/^\s*;/],
};

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
  if (/^[\s{}()\[\]]*$/.test(trimmed)) return true;
  if (/^[\s})\]]+[;]?$/.test(trimmed)) return true;
  return false;
}

function detectLanguage(filename: string): string {
  return path.basename(filename, '.ts').replace(/\d+$/, '');
}

// 行を虫食い化する（適切な部分を___に置き換え）
function makeHoley(line: string, language: string): string {
  // 文字列リテラルを___に置き換え
  let result = line;

  // ダブルクォート文字列
  if (/"[^"]*"/.test(result) && !/"___"/.test(result)) {
    result = result.replace(/"([^"]+)"/, '"___"');
    return result;
  }

  // シングルクォート文字列
  if (/'[^']*'/.test(result) && !/'___'/.test(result)) {
    result = result.replace(/'([^']+)'/, "'___'");
    return result;
  }

  // 数値を___に置き換え（代入文など）
  if (/=\s*\d+/.test(result)) {
    result = result.replace(/=\s*(\d+)/, '= ___');
    return result;
  }

  // 特定のパターンに対応
  // package main → package ___
  if (/^package\s+\w+/.test(result.trim())) {
    result = result.replace(/(package\s+)\w+/, '$1___');
    return result;
  }

  // import "..." → import "___"
  if (/^import\s+"/.test(result.trim())) {
    result = result.replace(/(import\s+)"[^"]+"/, '$1"___"');
    return result;
  }

  // import java.util.* → import ___
  if (/^import\s+[\w.]+;?/.test(result.trim())) {
    result = result.replace(/(import\s+)[\w.]+/, '$1___');
    return result;
  }

  // #include <...> → #include <___>
  if (/#include\s*<[^>]+>/.test(result)) {
    result = result.replace(/(#include\s*<)[^>]+(>)/, '$1___$2');
    return result;
  }

  // using ...
  if (/^using\s+\w+/.test(result.trim())) {
    result = result.replace(/(using\s+)\w+/, '$1___');
    return result;
  }

  // class XXX → class ___
  if (/\bclass\s+\w+/.test(result) && !/__/.test(result)) {
    result = result.replace(/(\bclass\s+)\w+/, '$1___');
    return result;
  }

  // public static void main → ___ static void main
  if (/public\s+static\s+void\s+main/.test(result)) {
    result = result.replace(/public(\s+static\s+void\s+main)/, '___$1');
    return result;
  }

  // func main() → func ___()
  if (/func\s+\w+\s*\(/.test(result)) {
    result = result.replace(/(func\s+)\w+(\s*\()/, '$1___$2');
    return result;
  }

  // void xxx() → void ___()
  if (/void\s+\w+\s*\(/.test(result)) {
    result = result.replace(/(void\s+)\w+(\s*\()/, '$1___$2');
    return result;
  }

  // int main() → int ___()
  if (/int\s+main\s*\(/.test(result)) {
    result = result.replace(/(int\s+)main(\s*\()/, '$1___$2');
    return result;
  }

  // section .xxx → section ___
  if (/section\s+\.\w+/.test(result)) {
    result = result.replace(/(section\s+)\.\w+/, '$1.___');
    return result;
  }

  // global _start → global ___
  if (/global\s+_\w+/.test(result)) {
    result = result.replace(/(global\s+)_\w+/, '$1___');
    return result;
  }

  // syscall → ___
  if (/^\s*syscall\s*$/.test(result)) {
    result = result.replace(/syscall/, '___');
    return result;
  }

  // mov rax, N → mov rax, ___
  if (/mov\s+\w+,\s*\d+/.test(result)) {
    result = result.replace(/(mov\s+\w+,\s*)\d+/, '$1___');
    return result;
  }

  // mov rax, xxx → mov rax, ___
  if (/mov\s+\w+,\s*\w+/.test(result)) {
    result = result.replace(/(mov\s+\w+,\s*)\w+/, '$1___');
    return result;
  }

  // ラベル: → ___:
  if (/^\s*\w+:\s*$/.test(result)) {
    result = result.replace(/(\s*)\w+(:)/, '$1___$2');
    return result;
  }

  // xor, and, or などの命令
  if (/^\s*(xor|and|or|add|sub|push|pop|cmp|jmp|jnz|jz|je|jne)\s+/.test(result)) {
    result = result.replace(/^(\s*)(xor|and|or|add|sub|push|pop|cmp|jmp|jnz|jz|je|jne)(\s+)/, '$1___$3');
    return result;
  }

  // その他の場合、最初の単語を___に
  if (/^\s*(\w+)/.test(result) && !/__/.test(result)) {
    result = result.replace(/^(\s*)(\w+)/, '$1___');
    return result;
  }

  return result;
}

// コメントを生成
function generateComment(line: string, language: string): string {
  const prefix = commentPrefix[language] || '//';
  const indent = line.match(/^(\s*)/)?.[1] || '';
  const trimmed = line.trim();

  // 簡単な説明を生成
  let description = trimmed.substring(0, 30);
  if (trimmed.length > 30) description += '...';

  return `${indent}${prefix} ${description}`;
}

// ファイルを処理
function processFile(filePath: string, problems: any[]): { modified: boolean, changes: number } {
  let content = fs.readFileSync(filePath, 'utf-8');
  const language = detectLanguage(path.basename(filePath));
  let changes = 0;

  // 各演習を処理
  for (const problem of problems) {
    // 演習のパターンを見つける
    const exerciseRegex = new RegExp(
      `("title":\\s*"${escapeRegex(problem.exerciseTitle)}"[\\s\\S]*?"correctCode":\\s*)"((?:[^"\\\\]|\\\\.)*)"(\\s*,\\s*"holeyCode":\\s*)"((?:[^"\\\\]|\\\\.)*)"`,
      'g'
    );

    const match = exerciseRegex.exec(content);
    if (!match) continue;

    const correctCodeEscaped = match[2];
    const holeyCodeEscaped = match[4];

    const correctCode = correctCodeEscaped
      .replace(/\\n/g, '\n')
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'")
      .replace(/\\\\/g, '\\')
      .replace(/\\t/g, '\t');
    const holeyCode = holeyCodeEscaped
      .replace(/\\n/g, '\n')
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'")
      .replace(/\\\\/g, '\\')
      .replace(/\\t/g, '\t');

    const correctLines = correctCode.split('\n');
    const holeyLines = holeyCode.split('\n');

    if (correctLines.length !== holeyLines.length) continue;

    const lineIdx = problem.correctLineIdx;
    if (lineIdx >= correctLines.length) continue;

    const correctLine = correctLines[lineIdx];
    const holeyLine = holeyLines[lineIdx];

    // 既に虫食いなら無視
    if (holeyLine.includes('___')) continue;

    // コメント行なら無視
    if (isCommentLine(correctLine, language)) continue;

    // 空行・構造行なら無視
    if (isEmptyOrStructural(correctLine)) continue;

    // 新しいコメント行を生成
    const comment = generateComment(correctLine, language);

    // 虫食い化
    const newHoleyLine = makeHoley(holeyLine, language);

    // 変更がない場合はスキップ
    if (newHoleyLine === holeyLine) continue;

    // correctCodeとholeyCodeを更新
    const newCorrectLines = [...correctLines];
    const newHoleyLines = [...holeyLines];

    // コメント行を挿入
    newCorrectLines.splice(lineIdx, 0, comment);
    newHoleyLines.splice(lineIdx, 0, comment);

    // holeyCodeの該当行を虫食い化
    newHoleyLines[lineIdx + 1] = newHoleyLine;

    const newCorrectCode = newCorrectLines.join('\n');
    const newHoleyCode = newHoleyLines.join('\n');

    // エスケープ
    const newCorrectCodeEscaped = newCorrectCode
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\n/g, '\\n')
      .replace(/\t/g, '\\t');
    const newHoleyCodeEscaped = newHoleyCode
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\n/g, '\\n')
      .replace(/\t/g, '\\t');

    // ファイル内容を更新
    const newMatch = `${match[1]}"${newCorrectCodeEscaped}"${match[3]}"${newHoleyCodeEscaped}"`;
    content = content.replace(match[0], newMatch);

    changes++;
    console.log(`  Modified: ${problem.exerciseTitle} line ${lineIdx}`);
  }

  if (changes > 0) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }

  return { modified: changes > 0, changes };
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// メイン処理
async function main() {
  const problemsPath = path.join(__dirname, 'holey-problems.json');
  if (!fs.existsSync(problemsPath)) {
    console.log('Error: holey-problems.json not found. Run check-holey-final.ts first.');
    return;
  }

  const problems = JSON.parse(fs.readFileSync(problemsPath, 'utf-8'));
  console.log(`Loaded ${problems.length} problems to fix`);

  // ファイルごとにグループ化
  const byFile = new Map<string, any[]>();
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
      const result = processFile(filePath, fileProblems);
      totalChanges += result.changes;
      console.log(`  Changes: ${result.changes}`);
    } catch (err) {
      console.log(`  Error: ${err}`);
    }
  }

  console.log(`\nTotal changes: ${totalChanges}`);
}

main();

import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  // 空行
  if (trimmed === '') return true;
  // ブレースのみ
  if (/^[\s{}()\[\]]*$/.test(trimmed)) return true;
  // 閉じブレースのみの行
  if (/^[\s})\]]+[;]?$/.test(trimmed)) return true;
  return false;
}

function detectLanguage(filename: string): string {
  return path.basename(filename, '.ts').replace(/\d+$/, '');
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

const problems: Problem[] = [];

const lessonsDir = path.join(__dirname, '..', 'data', 'lessons');
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const language = detectLanguage(file);

  // 各演習ブロックを抽出
  const exerciseRegex = /"title":\s*"([^"]+)"[\s\S]*?"correctCode":\s*"((?:[^"\\]|\\.)*)"\s*,\s*"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;

  let exerciseIndex = 0;
  let match;
  while ((match = exerciseRegex.exec(content)) !== null) {
    exerciseIndex++;
    const title = match[1];
    // \n で行分割（実際の改行として扱う）
    // \\n (改行エスケープ) は保護してから分割
    const placeholder = '\x00NEWLINE\x00';
    const correctLines = match[2].replace(/\\\\n/g, placeholder).split('\\n').map(l => l.replace(new RegExp(placeholder, 'g'), '\\\\n'));
    const holeyLines = match[3].replace(/\\\\n/g, placeholder).split('\\n').map(l => l.replace(new RegExp(placeholder, 'g'), '\\\\n'));

    // 行数が一致する場合のみ、行ごとにチェック
    if (correctLines.length === holeyLines.length) {
      for (let i = 0; i < correctLines.length; i++) {
        const correctLine = correctLines[i];
        const holeyLine = holeyLines[i];

        // コメント行、空行、構造的な行はスキップ
        if (isCommentLine(correctLine, language)) continue;
        if (isEmptyOrStructural(correctLine)) continue;

        // コード行なのに___が含まれていない
        if (!holeyLine.includes('___')) {
          problems.push({
            file,
            exerciseIndex,
            exerciseTitle: title,
            correctLineIdx: i,
            correctLine,
            holeyLine,
            language
          });
        }
      }
    }
  }
}

console.log(`\n=== コード行なのに虫食いでない行: ${problems.length}件 ===\n`);

// ファイルごとにグループ化
const byFile = new Map<string, Problem[]>();
for (const p of problems) {
  if (!byFile.has(p.file)) byFile.set(p.file, []);
  byFile.get(p.file)!.push(p);
}

for (const [file, ps] of byFile) {
  console.log(`\n=== ${file} (${ps.length}件) ===`);
  for (const p of ps) {
    console.log(`  Exercise #${p.exerciseIndex}: ${p.exerciseTitle}`);
    console.log(`    Line ${p.correctLineIdx}: "${p.correctLine.substring(0, 60)}"`);
    console.log(`    Holey:  "${p.holeyLine.substring(0, 60)}"`);
  }
}

// JSONで出力（修正用）
const outputPath = path.join(__dirname, 'holey-problems.json');
fs.writeFileSync(outputPath, JSON.stringify(problems, null, 2));
console.log(`\n問題リストを ${outputPath} に保存しました`);

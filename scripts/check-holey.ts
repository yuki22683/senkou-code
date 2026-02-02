import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 言語ごとのコメント形式を定義
const commentPatterns: { [key: string]: RegExp[] } = {
  python: [/^\s*#/],
  javascript: [/^\s*\/\//, /^\s*\/\*/, /^\s*\*/],
  typescript: [/^\s*\/\//, /^\s*\/\*/, /^\s*\*/],
  java: [/^\s*\/\//, /^\s*\/\*/, /^\s*\*/],
  c: [/^\s*\/\//, /^\s*\/\*/, /^\s*\*/],
  cpp: [/^\s*\/\//, /^\s*\/\*/, /^\s*\*/],
  csharp: [/^\s*\/\//, /^\s*\/\*/, /^\s*\*/],
  go: [/^\s*\/\//, /^\s*\/\*/, /^\s*\*/],
  rust: [/^\s*\/\//, /^\s*\/\*/, /^\s*\*/],
  swift: [/^\s*\/\//, /^\s*\/\*/, /^\s*\*/],
  kotlin: [/^\s*\/\//, /^\s*\/\*/, /^\s*\*/],
  bash: [/^\s*#/],
  ruby: [/^\s*#/],
  sql: [/^\s*--/, /^\s*\/\*/, /^\s*\*/],
  lua: [/^\s*--/],
  perl: [/^\s*#/],
  php: [/^\s*\/\//, /^\s*#/, /^\s*\/\*/, /^\s*\*/],
  haskell: [/^\s*--/, /^\s*\{-/],
  elixir: [/^\s*#/],
  assembly: [/^\s*;/],
};

// 空行、コメント行、ブロック終端のみの行をチェック
function isNonCodeLine(line: string, language: string): boolean {
  const trimmed = line.trim();

  // 空行
  if (trimmed === '') return true;

  // 言語固有のコメント行チェック
  const patterns = commentPatterns[language] || [];
  for (const pattern of patterns) {
    if (pattern.test(line)) return true;
  }

  // 閉じブレース/括弧のみの行
  if (/^[\s})\]]+$/.test(line)) return true;

  return false;
}

// ファイルから言語を推定
function detectLanguage(filename: string): string {
  const base = path.basename(filename, '.ts').replace(/\d+$/, '');
  return base;
}

interface Problem {
  file: string;
  exerciseTitle: string;
  exerciseIndex: number;
  lineIndex: number;
  correctLine: string;
  holeyLine: string;
  language: string;
}

const problems: Problem[] = [];

// レッスンファイルをチェック
const lessonsDir = path.join(__dirname, '..', 'data', 'lessons');
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const language = detectLanguage(file);

  // 正規表現でexercisesの各項目を抽出
  const exerciseMatches = content.matchAll(/\{\s*"title":\s*"([^"]+)"[\s\S]*?"correctCode":\s*"((?:[^"\\]|\\.)*)"\s*,\s*"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g);

  let exerciseIndex = 0;
  for (const match of exerciseMatches) {
    exerciseIndex++;
    const title = match[1];
    const correctCode = match[2].replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\'/g, "'");
    const holeyCode = match[3].replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\'/g, "'");

    const correctLines = correctCode.split('\n');
    const holeyLines = holeyCode.split('\n');

    // 行数が一致するか確認
    if (correctLines.length !== holeyLines.length) {
      console.log(`WARNING: ${file} exercise ${exerciseIndex} "${title}" has mismatched line counts`);
      continue;
    }

    for (let i = 0; i < correctLines.length; i++) {
      const correctLine = correctLines[i];
      const holeyLine = holeyLines[i];

      // 非コード行はスキップ
      if (isNonCodeLine(correctLine, language)) continue;

      // コード行なのに___が含まれていない
      if (!holeyLine.includes('___')) {
        problems.push({
          file,
          exerciseTitle: title,
          exerciseIndex,
          lineIndex: i,
          correctLine,
          holeyLine,
          language
        });
      }
    }
  }
}

console.log(`\n=== 問題のある箇所: ${problems.length}件 ===\n`);

for (const p of problems) {
  console.log(`File: ${p.file}`);
  console.log(`Exercise #${p.exerciseIndex}: ${p.exerciseTitle}`);
  console.log(`Line ${p.lineIndex}: "${p.correctLine}"`);
  console.log(`Holey: "${p.holeyLine}"`);
  console.log(`Language: ${p.language}`);
  console.log('---');
}

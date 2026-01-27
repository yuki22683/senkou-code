import * as path from 'path';
import * as fs from 'fs';
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
  php: [/^\s*\/\//, /^\s*#/, /^\s*\/\*/, /^\s*\*/, /^\s*<\?php/],
  haskell: [/^\s*--/, /^\s*\{-/],
  elixir: [/^\s*#/],
  assembly: [/^\s*;/],
};

// 非コード行をチェック
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
  if (/^[\s})\]]*$/.test(line)) return true;

  // 開きブレースのみの行
  if (/^[\s{(\[]*$/.test(line)) return true;

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
  lineIndexInCorrectCode: number;
  correctLine: string;
  correspondingHoleyLine: string | null;
  language: string;
}

const problems: Problem[] = [];

// ディレクトリ内のすべてのTSファイルを処理
const lessonsDir = path.join(__dirname, '..', 'data', 'lessons');
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const language = detectLanguage(file);

  // exercisesの配列部分を抽出
  const exercisesMatch = content.match(/"exercises":\s*\[/);
  if (!exercisesMatch) continue;

  // JSON-likeなデータなので、より信頼性のある方法で抽出
  // correctCodeとholeyCodeのペアを見つける
  const exerciseRegex = /"title":\s*"([^"]+)"[\s\S]*?"correctCode":\s*"((?:[^"\\]|\\.)*)"\s*,\s*"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;

  let exerciseIndex = 0;
  let match;
  while ((match = exerciseRegex.exec(content)) !== null) {
    exerciseIndex++;
    const title = match[1];
    const correctCode = match[2].replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\\\/g, '\\');
    const holeyCode = match[3].replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\\\/g, '\\');

    const correctLines = correctCode.split('\n');
    const holeyLines = holeyCode.split('\n');

    // holeyCodeはcorrectCodeと同じ行数か、それ以上（コメント行追加により）のはず
    // correctCodeの各行について、対応するholeyCodeの行を探す

    let holeyIdx = 0;
    for (let correctIdx = 0; correctIdx < correctLines.length; correctIdx++) {
      const correctLine = correctLines[correctIdx];

      // 非コード行はスキップ
      if (isNonCodeLine(correctLine, language)) {
        holeyIdx++;
        continue;
      }

      // holeyCodeで対応する行を探す
      // コメント行はスキップしながら次のコード行を見つける
      while (holeyIdx < holeyLines.length && isNonCodeLine(holeyLines[holeyIdx], language)) {
        holeyIdx++;
      }

      if (holeyIdx >= holeyLines.length) {
        // holeyCodeに対応する行がない
        problems.push({
          file,
          exerciseTitle: title,
          exerciseIndex,
          lineIndexInCorrectCode: correctIdx,
          correctLine,
          correspondingHoleyLine: null,
          language
        });
        continue;
      }

      const holeyLine = holeyLines[holeyIdx];

      // コード行なのに___が含まれていない場合は問題
      if (!holeyLine.includes('___')) {
        problems.push({
          file,
          exerciseTitle: title,
          exerciseIndex,
          lineIndexInCorrectCode: correctIdx,
          correctLine,
          correspondingHoleyLine: holeyLine,
          language
        });
      }

      holeyIdx++;
    }
  }
}

console.log(`\n=== 問題のある箇所: ${problems.length}件 ===\n`);

// ファイルごとにグループ化して表示
const problemsByFile = new Map<string, Problem[]>();
for (const p of problems) {
  if (!problemsByFile.has(p.file)) {
    problemsByFile.set(p.file, []);
  }
  problemsByFile.get(p.file)!.push(p);
}

for (const [file, fileProblems] of problemsByFile) {
  console.log(`\n=== ${file} (${fileProblems.length}件) ===`);
  for (const p of fileProblems) {
    console.log(`  Exercise #${p.exerciseIndex}: ${p.exerciseTitle}`);
    console.log(`    Line ${p.lineIndexInCorrectCode}: "${p.correctLine}"`);
    console.log(`    Holey: "${p.correspondingHoleyLine}"`);
  }
}

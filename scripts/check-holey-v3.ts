import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface Problem {
  file: string;
  exerciseTitle: string;
  exerciseIndex: number;
  lineIndex: number;
  correctLine: string;
  holeyLine: string;
  hint: string;
}

const problems: Problem[] = [];

// ディレクトリ内のすべてのTSファイルを処理
const lessonsDir = path.join(__dirname, '..', 'data', 'lessons');
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  // exercisesの配列を抽出（簡易パース）
  // 各演習のcorrectCode, holeyCode, lineHintsを取得

  // まず、各演習のブロックを見つける
  const exerciseBlockRegex = /\{\s*"title":\s*"([^"]+)"[\s\S]*?"correctCode":\s*"((?:[^"\\]|\\.)*)"\s*,\s*"holeyCode":\s*"((?:[^"\\]|\\.)*)"\s*,\s*"correctLines":\s*\[[\s\S]*?\]\s*,\s*"lineHints":\s*\[([\s\S]*?)\]\s*,/g;

  let exerciseIndex = 0;
  let match;
  while ((match = exerciseBlockRegex.exec(content)) !== null) {
    exerciseIndex++;
    const title = match[1];
    const correctCode = match[2].replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\\\/g, '\\');
    const holeyCode = match[3].replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\\\/g, '\\');
    const lineHintsRaw = match[4];

    // lineHintsをパース（簡易版）
    const lineHints: (string | null)[] = [];
    const hintMatches = lineHintsRaw.matchAll(/null|"((?:[^"\\]|\\.)*)"/g);
    for (const hm of hintMatches) {
      if (hm[0] === 'null') {
        lineHints.push(null);
      } else {
        lineHints.push(hm[1] || '');
      }
    }

    const correctLines = correctCode.split('\n');
    const holeyLines = holeyCode.split('\n');

    // 行数が同じ場合のみチェック（異なる場合は構造が違うので別途対応）
    if (correctLines.length === holeyLines.length && correctLines.length === lineHints.length) {
      for (let i = 0; i < correctLines.length; i++) {
        const hint = lineHints[i];
        const correctLine = correctLines[i];
        const holeyLine = holeyLines[i];

        // hintがnullでない（＝穴埋めが必要な行）なのに、___が含まれていない
        if (hint !== null && !holeyLine.includes('___')) {
          problems.push({
            file,
            exerciseTitle: title,
            exerciseIndex,
            lineIndex: i,
            correctLine,
            holeyLine,
            hint
          });
        }
      }
    }
  }
}

console.log(`\n=== 問題のある箇所（行数一致のみ）: ${problems.length}件 ===\n`);

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
    console.log(`    Line ${p.lineIndex}: "${p.correctLine}"`);
    console.log(`    Holey:  "${p.holeyLine}"`);
  }
}

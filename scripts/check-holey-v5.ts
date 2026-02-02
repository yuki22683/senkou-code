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

function decode(s: string) {
  if (!s) return '';
  return s
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"')
    .replace(/\'/g, "'")
    .replace(/\\\\/g, '\\');
}

function extractArrayContent(str: string, startSearchIdx = 0) {
  const openBracket = str.indexOf('[', startSearchIdx);
  if (openBracket === -1) return null;
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let i = openBracket; i < str.length; i++) {
    const ch = str[i];
    if (escaped) { escaped = false; continue; }
    if (ch === '\\') { escaped = true; continue; }
    if (ch === '"') { inString = !inString; continue; }
    if (!inString) {
      if (ch === '[') depth++;
      if (ch === ']') {
        depth--;
        if (depth === 0) return str.substring(openBracket + 1, i);
      }
    }
  }
  return null;
}

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  const titleMatches = [...content.matchAll(/"title":\s*"([^"]+)"/g)];

  for (let i = 0; i < titleMatches.length; i++) {
     const start = titleMatches[i].index!;
     const end = i + 1 < titleMatches.length ? titleMatches[i + 1].index! : content.length;
     const block = content.substring(start, end);
     const title = titleMatches[i][1];

     const correctCodeMatch = block.match(/"correctCode":\s*"((?:[^"\\]|\\.)*)"/);
     const holeyCodeMatch = block.match(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/);

     if (!correctCodeMatch || !holeyCodeMatch) continue;

     const correctCode = decode(correctCodeMatch[1]);
     const holeyCode = decode(holeyCodeMatch[1]);

     const lineHintsIdx = block.indexOf('"lineHints"');
     if (lineHintsIdx === -1) continue;
     const lineHintsRaw = extractArrayContent(block, lineHintsIdx);
     if (!lineHintsRaw) continue;

    // lineHintsをパース
    const lineHints: (string | null)[] = [];
    const hintMatches = lineHintsRaw.matchAll(/null|"((?:[^"\\]|\\.)*)"/g);
    for (const hm of hintMatches) {
      if (hm[0] === 'null') {
        lineHints.push(null);
      } else {
        lineHints.push(decode(hm[1] || ''));
      }
    }

    const correctLines = correctCode.split('\n');
    const holeyLines = holeyCode.split('\n');

    // 行数が同じ場合のみチェック
    if (correctLines.length === holeyLines.length && correctLines.length === lineHints.length) {
      for (let j = 0; j < correctLines.length; j++) {
        const hint = lineHints[j];
        const correctLine = correctLines[j];
        const holeyLine = holeyLines[j];

        // hintがnullでない（＝穴埋めが必要な行）なのに、___が含まれていない
        if (hint !== null && !holeyLine.includes('___')) {
          problems.push({
            file,
            exerciseTitle: title,
            exerciseIndex: i + 1,
            lineIndex: j,
            correctLine,
            holeyLine,
            hint: hint || ''
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

if (problems.length > 0) {
  process.exit(1);
} else {
  process.exit(0);
}

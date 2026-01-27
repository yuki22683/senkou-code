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

function detectLanguage(filename: string): string {
  return path.basename(filename, '.ts').replace(/\d+$/, '');
}

// 行を虫食い化する
function makeHoley(line: string, language: string): string {
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

  // 数値代入
  if (/=\s*\d+/.test(result)) {
    result = result.replace(/=\s*(\d+)/, '= ___');
    return result;
  }

  // 数値（0xNNN形式も含む）
  if (/\b0x[0-9A-Fa-f]+\b/.test(result)) {
    result = result.replace(/\b0x[0-9A-Fa-f]+\b/, '___');
    return result;
  }

  // package main
  if (/^package\s+\w+/.test(result.trim())) {
    result = result.replace(/(package\s+)\w+/, '$1___');
    return result;
  }

  // import "..."
  if (/^import\s+"/.test(result.trim())) {
    result = result.replace(/(import\s+)"[^"]+"/, '$1"___"');
    return result;
  }

  // import java.util.*
  if (/^import\s+[\w.]+;?/.test(result.trim())) {
    result = result.replace(/(import\s+)[\w.]+/, '$1___');
    return result;
  }

  // #include <...>
  if (/#include\s*<[^>]+>/.test(result)) {
    result = result.replace(/(#include\s*<)[^>]+(>)/, '$1___$2');
    return result;
  }

  // using ...
  if (/^using\s+\w+/.test(result.trim())) {
    result = result.replace(/(using\s+)\w+/, '$1___');
    return result;
  }

  // class XXX
  if (/\bclass\s+\w+/.test(result) && !/__/.test(result)) {
    result = result.replace(/(\bclass\s+)\w+/, '$1___');
    return result;
  }

  // public static void main
  if (/public\s+static\s+void\s+main/.test(result)) {
    result = result.replace(/(public\s+)(static\s+void\s+main)/, '___$1$2');
    return result;
  }

  // func xxx()
  if (/func\s+\w+\s*\(/.test(result)) {
    result = result.replace(/(func\s+)\w+(\s*\()/, '$1___$2');
    return result;
  }

  // void xxx()
  if (/void\s+\w+\s*\(/.test(result)) {
    result = result.replace(/(void\s+)\w+(\s*\()/, '$1___$2');
    return result;
  }

  // static void xxx()
  if (/static\s+void\s+\w+\s*\(/.test(result)) {
    result = result.replace(/(static\s+void\s+)\w+(\s*\()/, '$1___$2');
    return result;
  }

  // int main()
  if (/int\s+main\s*\(/.test(result)) {
    result = result.replace(/(int\s+)main(\s*\()/, '$1___$2');
    return result;
  }

  // section .xxx
  if (/section\s+\.\w+/.test(result)) {
    result = result.replace(/(section\s+)\.\w+/, '$1.___');
    return result;
  }

  // global _start
  if (/global\s+_\w+/.test(result)) {
    result = result.replace(/(global\s+)_\w+/, '$1___');
    return result;
  }

  // syscall
  if (/^\s*syscall\s*$/.test(result)) {
    result = result.replace(/syscall/, '___');
    return result;
  }

  // mov reg, N
  if (/mov\s+\w+,\s*\d+/.test(result)) {
    result = result.replace(/(mov\s+\w+,\s*)\d+/, '$1___');
    return result;
  }

  // mov reg, reg
  if (/mov\s+\w+,\s*\w+/.test(result)) {
    result = result.replace(/(mov\s+)\w+(,\s*\w+)/, '$1___$2');
    return result;
  }

  // ラベル:
  if (/^\s*\w+:\s*$/.test(result)) {
    result = result.replace(/(\s*)\w+(:)/, '$1___$2');
    return result;
  }

  // push/pop
  if (/^\s*(push|pop)\s+\w+/.test(result)) {
    result = result.replace(/^(\s*)(push|pop)(\s+)/, '$1___$3');
    return result;
  }

  // xor, and, or などの命令
  if (/^\s*(xor|and|or|add|sub|cmp|jmp|jnz|jz|je|jne|inc|dec|shl|shr|mul|neg|test)\s+/.test(result)) {
    result = result.replace(/^(\s*)(xor|and|or|add|sub|cmp|jmp|jnz|jz|je|jne|inc|dec|shl|shr|mul|neg|test)(\s+)/, '$1___$3');
    return result;
  }

  // 変数代入 xxx = yyy
  if (/\w+\s*=\s*\w+/.test(result) && !/__/.test(result)) {
    result = result.replace(/(\w+)(\s*=\s*)(\w+)/, '___$2$3');
    return result;
  }

  // echo "..."
  if (/echo\s+"[^"]*"/.test(result)) {
    result = result.replace(/(echo\s+)"[^"]*"/, '$1"___"');
    return result;
  }

  // echo $xxx
  if (/echo\s+\$\w+/.test(result)) {
    result = result.replace(/(echo\s+)\$\w+/, '$1$___');
    return result;
  }

  // printf(...) 形式
  if (/printf\s*\(/.test(result)) {
    if (/"[^"]*"/.test(result)) {
      result = result.replace(/"([^"]+)"/, '"___"');
      return result;
    }
  }

  // System.out.println(...)
  if (/System\.out\.println\s*\(/.test(result)) {
    if (/"[^"]*"/.test(result)) {
      result = result.replace(/"([^"]+)"/, '"___"');
      return result;
    }
    if (/\(\w+\)/.test(result)) {
      result = result.replace(/\((\w+)\)/, '(___)');
      return result;
    }
  }

  // Console.WriteLine(...)
  if (/Console\.WriteLine\s*\(/.test(result)) {
    if (/"[^"]*"/.test(result)) {
      result = result.replace(/"([^"]+)"/, '"___"');
      return result;
    }
  }

  // fmt.Println(...)
  if (/fmt\.Println\s*\(/.test(result)) {
    if (/"[^"]*"/.test(result)) {
      result = result.replace(/"([^"]+)"/, '"___"');
      return result;
    }
  }

  // std::cout << "..."
  if (/std::cout\s*<</.test(result)) {
    if (/"[^"]*"/.test(result)) {
      result = result.replace(/"([^"]+)"/, '"___"');
      return result;
    }
  }

  // cout << "..."
  if (/cout\s*<</.test(result) && !/__/.test(result)) {
    result = result.replace(/(cout\s*<<\s*)/, '___');
    return result;
  }

  // return N;
  if (/return\s+\d+\s*;?/.test(result)) {
    result = result.replace(/(return\s+)\d+/, '$1___');
    return result;
  }

  // if (...) / while (...) / for (...)
  if (/\b(if|while|for)\s*\(/.test(result) && !/__/.test(result)) {
    // 条件部分を___に
    result = result.replace(/(\b(?:if|while|for)\s*\()[^)]+(\))/, '$1___$2');
    return result;
  }

  // greet() { など関数定義
  if (/^\s*\w+\s*\(\)\s*\{?\s*$/.test(result) && !/__/.test(result)) {
    result = result.replace(/^(\s*)\w+(\s*\(\))/, '$1___$2');
    return result;
  }

  // 最後の手段：最初の識別子を___に
  if (/^\s*[a-zA-Z_]\w*/.test(result) && !/__/.test(result)) {
    result = result.replace(/^(\s*)([a-zA-Z_]\w*)/, '$1___');
    return result;
  }

  return result;
}

// コメント生成
function generateComment(line: string, language: string): string {
  const prefix = commentPrefix[language] || '//';
  const indent = line.match(/^(\s*)/)?.[1] || '';
  const trimmed = line.trim();
  let description = trimmed.substring(0, 40);
  if (trimmed.length > 40) description += '...';
  return `${indent}${prefix} ${description}`;
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

// ファイル全体を読んでJSONとして処理
function processFileAsJson(filePath: string, problems: Problem[]): { changes: number } {
  let content = fs.readFileSync(filePath, 'utf-8');
  const language = detectLanguage(path.basename(filePath));
  let changes = 0;

  // エクスポート変数名を抽出
  const exportMatch = content.match(/^export const (\w+Data) = /m);
  if (!exportMatch) {
    console.log(`  Could not find export in ${filePath}`);
    return { changes: 0 };
  }

  // JSON部分を抽出
  const jsonStart = content.indexOf(' = {');
  const jsonEnd = content.lastIndexOf('};');
  if (jsonStart === -1 || jsonEnd === -1) {
    console.log(`  Could not find JSON in ${filePath}`);
    return { changes: 0 };
  }

  const jsonPart = content.substring(jsonStart + 3, jsonEnd + 1);
  let data: any;
  try {
    data = eval(`(${jsonPart})`);
  } catch (e) {
    console.log(`  Failed to parse ${filePath}: ${e}`);
    return { changes: 0 };
  }

  // 演習ごとに問題を処理
  for (const problem of problems) {
    const exercise = data.exercises?.find((ex: any) => ex.title === problem.exerciseTitle);
    if (!exercise) continue;

    const correctLines = exercise.correctCode.split('\n');
    const holeyLines = exercise.holeyCode.split('\n');

    if (correctLines.length !== holeyLines.length) continue;

    const lineIdx = problem.correctLineIdx;
    if (lineIdx >= holeyLines.length) continue;

    const holeyLine = holeyLines[lineIdx];
    if (holeyLine.includes('___')) continue;

    // 虫食い化
    const newHoleyLine = makeHoley(holeyLine, language);
    if (newHoleyLine === holeyLine) continue;

    // コメント生成
    const comment = generateComment(problem.correctLine, language);

    // 新しい行を挿入
    correctLines.splice(lineIdx, 0, comment);
    holeyLines.splice(lineIdx, 0, comment);
    holeyLines[lineIdx + 1] = newHoleyLine;

    // correctLinesとlineHintsも更新
    if (Array.isArray(exercise.correctLines)) {
      exercise.correctLines.splice(lineIdx, 0, comment);
    }
    if (Array.isArray(exercise.lineHints)) {
      exercise.lineHints.splice(lineIdx, 0, null);
    }

    exercise.correctCode = correctLines.join('\n');
    exercise.holeyCode = holeyLines.join('\n');

    changes++;
    console.log(`  Fixed: ${problem.exerciseTitle} line ${lineIdx}: "${newHoleyLine.substring(0, 50)}"`);
  }

  if (changes > 0) {
    // データを書き戻す
    const exportName = exportMatch[1];
    const newContent = `export const ${exportName} = ${JSON.stringify(data, null, 2)};`;
    fs.writeFileSync(filePath, newContent, 'utf-8');
  }

  return { changes };
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
      const result = processFileAsJson(filePath, fileProblems);
      totalChanges += result.changes;
      console.log(`  Changes: ${result.changes}`);
    } catch (err) {
      console.log(`  Error: ${err}`);
    }
  }

  console.log(`\n=== Total changes: ${totalChanges} ===`);
}

main();

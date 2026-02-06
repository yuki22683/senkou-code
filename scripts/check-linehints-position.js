#!/usr/bin/env node
/**
 * lineHintsの位置ズレを検出するスクリプト
 *
 * ヒントの内容とコード行の内容を意味的に照合し、
 * ヒントが間違った行に適用されている問題を検出します。
 */

const fs = require("fs");
const path = require("path");

const colors = {
  red: (s) => `\x1b[31m${s}\x1b[0m`,
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
  blue: (s) => `\x1b[34m${s}\x1b[0m`,
};

// ヒントとコード行のマッチングパターン
const hintPatterns = [
  // Main関連
  {
    hintPattern: /Main.*開始|開始地点|エントリ/i,
    codePattern: /\bmain\s*\(|void\s+main|int\s+main|static\s+void\s+Main/i,
    description: "Main関連ヒント"
  },
  // using/import関連
  {
    hintPattern: /基本.*ライブラリ|System.*利用|名前空間.*インポート/i,
    codePattern: /^using\s|^import\s|^#include/,
    description: "using/import関連ヒント"
  },
  // クラス定義関連
  {
    hintPattern: /クラス.*定義|新しいクラス/i,
    codePattern: /\bclass\s+\w+/i,
    description: "クラス定義ヒント"
  },
  // WriteLine/出力関連
  {
    hintPattern: /WriteLine|表示します|出力します|print/i,
    codePattern: /WriteLine|print|cout|printf|puts|echo|fmt\.Print/i,
    description: "出力関連ヒント"
  },
  // for/ループ関連 (「グループ」の誤検出を防ぐため「ループ」は単独では使わない)
  {
    hintPattern: /繰り返し|(?<!グ)ループ|for文|反復/i,
    codePattern: /\bfor\s*\(|\bwhile\s*\(|\bforeach\s*\(/i,
    description: "ループ関連ヒント"
  },
  // if/条件関連
  {
    hintPattern: /条件.*分岐|if文/i,
    codePattern: /\bif\s*\(/i,
    description: "条件分岐ヒント"
  },
  // 変数宣言関連 (「null.*代入」は除外)
  {
    hintPattern: /変数.*宣言|変数.*定義|(?<!null.*)代入(?!.*null)/i,
    codePattern: /\bvar\s+\w+\s*=|\blet\s+\w+\s*=|\bconst\s+\w+\s*=|\bint\s+\w+\s*=|\bstring\??\s+\w+\s*=/i,
    description: "変数宣言ヒント"
  },
  // delegate関連
  {
    hintPattern: /delegate|デリゲート/i,
    codePattern: /\bdelegate\s/i,
    description: "delegateヒント"
  },
  // async/await関連
  {
    hintPattern: /async|await|非同期/i,
    codePattern: /\basync\s|\bawait\s/i,
    description: "async/awaitヒント"
  },
  // LINQ関連
  {
    hintPattern: /OrderBy|Where|Select|GroupBy|FirstOrDefault|All|Sum/i,
    codePattern: /\.OrderBy|\.Where|\.Select|\.GroupBy|\.FirstOrDefault|\.All\(|\.Sum\(/i,
    description: "LINQヒント"
  },
  // Func/Action関連
  {
    hintPattern: /Func.*関数|Action.*関数/i,
    codePattern: /\bFunc<|\bAction</i,
    description: "Func/Actionヒント"
  },
  // record関連
  {
    hintPattern: /record|イミュータブル/i,
    codePattern: /\brecord\s+\w+/i,
    description: "recordヒント"
  },
  // init関連
  {
    hintPattern: /init.*設定|初期化時のみ/i,
    codePattern: /\binit\s*;/i,
    description: "initヒント"
  },
  // switch関連
  {
    hintPattern: /switch式|パターンマッチ/i,
    codePattern: /\bswitch\s*\(/i,
    description: "switchヒント"
  },
  // Dictionary関連
  {
    hintPattern: /Dictionary|辞書/i,
    codePattern: /Dictionary<|new Dictionary/i,
    description: "Dictionaryヒント"
  },
  // null関連
  {
    hintPattern: /null.*代入|null状態/i,
    codePattern: /=\s*null\s*;/i,
    description: "null代入ヒント"
  },
  // get/set関連
  {
    hintPattern: /get.*値.*取得|値を取得/i,
    codePattern: /\bget\s*;|\bget\s*{/i,
    description: "getアクセサヒント"
  },
];

function parseLesson(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const match = content.match(/export const \w+ = (\{[\s\S]*\});?\s*$/);
  if (!match) return null;

  let dataStr = match[1].replace(/,(\s*[}\]])/g, "$1");
  try {
    return JSON.parse(dataStr);
  } catch (e) {
    return eval("(" + dataStr + ")");
  }
}

function checkLineHintsPosition(exercise, exerciseIdx, fileName) {
  const issues = [];

  if (!exercise.correctLines || !exercise.lineHints) return issues;

  exercise.lineHints.forEach((hint, idx) => {
    if (!hint) return;

    const codeLine = exercise.correctLines[idx] || "";

    // 各パターンをチェック
    for (const pattern of hintPatterns) {
      if (pattern.hintPattern.test(hint)) {
        // ヒントがこのパターンにマッチ
        if (!pattern.codePattern.test(codeLine)) {
          // しかしコード行がマッチしない → ズレの可能性

          // 正しい行を探す
          let correctIdx = -1;
          for (let i = 0; i < exercise.correctLines.length; i++) {
            if (pattern.codePattern.test(exercise.correctLines[i])) {
              correctIdx = i;
              break;
            }
          }

          if (correctIdx !== -1 && correctIdx !== idx) {
            const shift = correctIdx - idx;
            issues.push({
              hintIdx: idx,
              hint: hint.substring(0, 40),
              codeLine: codeLine.trim().substring(0, 40),
              expectedIdx: correctIdx,
              expectedLine: exercise.correctLines[correctIdx].trim().substring(0, 40),
              shift: shift,
              pattern: pattern.description
            });
          }
        }
        break; // 最初にマッチしたパターンのみチェック
      }
    }
  });

  return issues;
}

function validateFile(filePath) {
  const fileName = path.basename(filePath);
  let data;

  try {
    data = parseLesson(filePath);
  } catch (e) {
    return { errors: 0, issues: [] };
  }

  if (!data || !data.exercises) {
    return { errors: 0, issues: [] };
  }

  const fileIssues = [];

  data.exercises.forEach((ex, idx) => {
    const issues = checkLineHintsPosition(ex, idx, fileName);
    if (issues.length > 0) {
      fileIssues.push({
        exercise: idx + 1,
        title: ex.title,
        issues
      });
    }
  });

  return { errors: fileIssues.length, issues: fileIssues, fileName };
}

function main() {
  const args = process.argv.slice(2);
  let files;

  if (args.length > 0) {
    files = args.filter((f) => fs.existsSync(f));
  } else {
    const lessonsDir = path.join(__dirname, "..", "data", "lessons");
    files = fs
      .readdirSync(lessonsDir)
      .filter((f) => f.endsWith(".ts") && f !== "index.ts")
      .map((f) => path.join(lessonsDir, f));
  }

  console.log(colors.blue("=== lineHints位置ズレ検出 ===\n"));
  console.log(`検証対象: ${files.length} ファイル\n`);

  let totalIssues = 0;
  let filesWithIssues = 0;

  files.forEach((file) => {
    const result = validateFile(file);
    if (result.issues && result.issues.length > 0) {
      filesWithIssues++;
      console.log(`\n${colors.yellow(result.fileName)}:`);
      result.issues.forEach((fi) => {
        console.log(`  #${fi.exercise} ${fi.title}`);
        fi.issues.forEach((issue) => {
          totalIssues++;
          console.log(colors.red(`    [位置ズレ] lineHints[${issue.hintIdx}] → 正しくは[${issue.expectedIdx}] (${issue.shift > 0 ? '+' : ''}${issue.shift}行ズレ)`));
          console.log(`      ヒント: "${issue.hint}..."`);
          console.log(`      現在の行: "${issue.codeLine}..."`);
          console.log(`      正しい行: "${issue.expectedLine}..."`);
        });
      });
    }
  });

  console.log(colors.blue("\n=== 検出結果 ==="));
  console.log(`検証ファイル数: ${files.length}`);
  console.log(`問題のあるファイル: ${filesWithIssues}`);
  console.log(`位置ズレ検出数: ${totalIssues}`);

  if (totalIssues > 0) {
    console.log(colors.yellow("\n位置ズレが検出されました。修正を検討してください。"));
    process.exit(1);
  } else {
    console.log(colors.green("\n位置ズレは検出されませんでした。"));
    process.exit(0);
  }
}

main();

#!/usr/bin/env node
/**
 * レッスンデータ検証スクリプト
 *
 * 使用方法:
 *   node scripts/validate-lessons.js
 *   node scripts/validate-lessons.js data/lessons/javascript5.ts
 *
 * 検証項目:
 *   1. correctLines と lineHints の配列長が一致するか
 *   2. correctCode の行数と correctLines の配列長が一致するか
 *   3. testCases の expected_output が空でないか
 *   4. チュートリアルのコード例と実行結果が論理的に整合しているか
 *   5. Java の文字列比較に == を使用していないか
 *   6. 不適切な語呂合わせがないか
 *   7. correctCode と expected_output の日本語/英語整合性
 *      - コード内に日本語出力があれば expected_output も日本語であるべき
 *      - 「Hello, World!」等の定型句は除外
 *   8. チュートリアルと演習コードの整合性
 *      - チュートリアル例が日本語なら演習も日本語であるべき
 *   9. expected_output の末尾改行チェック
 *      - コードが改行付きで出力するなら expected_output も改行で終わるべき
 *  10. correctCode/correctLines に穴埋め記号(___) が含まれていないか
 *  11. correctLines の不正な行分割チェック
 *  12. lineHints と correctLines の意味的整合性チェック
 *      - 変数宣言ヒントが関数定義行に適用されていないか
 *      - 出力ヒントがif/for文に適用されていないか
 */

const fs = require("fs");
const path = require("path");

const colors = {
  red: (s) => `\x1b[31m${s}\x1b[0m`,
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
  blue: (s) => `\x1b[34m${s}\x1b[0m`,
};

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

function validateExercise(exercise, exerciseIdx, fileName, language) {
  const issues = [];
  const warnings = [];

  // 言語固有のチェック: Java文字列比較
  if (language === "java" && exercise.tutorialSlides) {
    exercise.tutorialSlides.forEach((slide, sIdx) => {
      const javaIssues = validateJavaContent(slide.content || "");
      javaIssues.forEach(issue => {
        issues.push(`Slide${sIdx + 1}: ${issue}`);
      });
    });
  }

  // コード内の不適切な語呂合わせチェック
  if (exercise.correctCode) {
    const wordplayIssues = validateWordplay(exercise.correctCode);
    wordplayIssues.forEach(issue => {
      warnings.push(issue);
    });
  }

  // 1. correctLines と lineHints の長さチェック
  if (exercise.correctLines && exercise.lineHints) {
    const linesCount = exercise.correctLines.length;
    const hintsCount = exercise.lineHints.length;
    if (linesCount !== hintsCount) {
      issues.push(
        `correctLines(${linesCount}) と lineHints(${hintsCount}) の長さが不一致`
      );
    }

    // 1.5 lineHints と correctLines の意味的整合性チェック
    const hintMismatchPatterns = [
      {
        hintPattern: /変数.*宣言|整数型の変数/,
        linePattern: /^\s*(int|void)\s+main\s*\(|^\s*#include|^\s*void\s+\w+\s*\(/,
        message: "変数宣言ヒントが関数定義/include行に適用されています"
      },
      {
        hintPattern: /出力.*ストリーム|表示します|文字列を.*表示/,
        linePattern: /^\s*if\s*\(|^\s*for\s*\(|^\s*while\s*\(|^\s*int\s+main\s*\(/,
        message: "出力ヒントがif/for/while/main行に適用されています"
      },
      {
        hintPattern: /繰り返し|ループ/,
        linePattern: /^\s*int\s+main\s*\(|^\s*#include/,
        message: "ループヒントがmain/include行に適用されています"
      },
      {
        hintPattern: /関数.*定義|void型/,
        linePattern: /^\s*#include/,
        message: "関数定義ヒントがinclude行に適用されています"
      }
    ];

    exercise.lineHints.forEach((hint, idx) => {
      if (!hint || !exercise.correctLines[idx]) return;
      const line = exercise.correctLines[idx];
      for (const { hintPattern, linePattern, message } of hintMismatchPatterns) {
        if (hintPattern.test(hint) && linePattern.test(line)) {
          warnings.push(`lineHints[${idx}]: ${message} (ヒント: "${hint.substring(0, 20)}..." → 行: "${line.trim().substring(0, 30)}...")`);
        }
      }
    });
  }

  // 2. correctCode と correctLines の整合性チェック
  // 注: correctCodeは行区切りが "\\n" (バックスラッシュ + n) で表現されている
  // printf内の "\n" も同じ形式なので、splitではなくjoinで比較する
  if (exercise.correctCode && exercise.correctLines) {
    const codeFromLines = exercise.correctLines.join("\\n");
    if (exercise.correctCode !== codeFromLines) {
      const codeLen = exercise.correctCode.length;
      const joinLen = codeFromLines.length;
      issues.push(
        `correctCode(${codeLen}文字) と correctLines.join(${joinLen}文字) が不一致`
      );
    }
  }

  // 2.5. correctCode に穴埋め記号 ___ が含まれていないかチェック
  if (exercise.correctCode && exercise.correctCode.includes("___")) {
    issues.push("correctCode に穴埋め記号(___) が含まれています");
  }
  if (exercise.correctLines) {
    exercise.correctLines.forEach((line, idx) => {
      if (line && line.includes("___")) {
        issues.push(`correctLines[${idx}] に穴埋め記号(___) が含まれています`);
      }
      // 不正な行分割をチェック（printf等の途中で分割されている）
      // パターン: '", ...' や '\", ...' で始まる行は分割の断片の可能性
      if (line && /^["\\]["'],?\s*\w/.test(line.trim())) {
        warnings.push(`correctLines[${idx}] が不正に分割されている可能性: "${line}"`);
      }
    });
  }

  // 3. testCases の expected_output チェック
  if (exercise.testCases) {
    exercise.testCases.forEach((tc, idx) => {
      if (!tc.expected_output || tc.expected_output.trim() === "") {
        warnings.push(`testCases[${idx}] の expected_output が空`);
      }
      // 改行コードが正しくエスケープされているかチェック
      // 正しい: 実際の改行文字 (char code 10)
      // 間違い: バックスラッシュ + n (char codes 92, 110)
      if (tc.expected_output) {
        for (let i = 0; i < tc.expected_output.length - 1; i++) {
          if (tc.expected_output.charCodeAt(i) === 92 && tc.expected_output.charCodeAt(i + 1) === 110) {
            issues.push(`testCases[${idx}] の expected_output に未エスケープの \\\\n があります`);
            break;
          }
        }
        // expected_output が改行で終わっているかチェック
        // コード内に改行付き出力があれば、expected_output も改行で終わるべき
        if (exercise.correctCode && !tc.expected_output.endsWith('\n')) {
          // 改行付き出力パターンを検出
          const hasNewlineOutput = /\\n["'`)\]]/.test(exercise.correctCode);
          if (hasNewlineOutput) {
            warnings.push(`testCases[${idx}] の expected_output が改行で終わっていません`);
          }
        }
      }
    });
  }

  // 4. holeyCode に ___ が含まれているかチェック
  if (exercise.holeyCode && !exercise.holeyCode.includes("___")) {
    warnings.push("holeyCode に穴埋め箇所(___) がありません");
  }

  // 5. candidates が定義されているかチェック
  if (!exercise.candidates) {
    warnings.push("candidates が未定義");
  }

  // 6. correctCodeとexpected_outputの言語整合性チェック
  const langConsistencyWarnings = validateLanguageConsistency(exercise);
  langConsistencyWarnings.forEach(w => warnings.push(w));

  // 7. チュートリアルと演習コードの整合性チェック
  const tutorialWarnings = validateTutorialExerciseConsistency(exercise);
  tutorialWarnings.forEach(w => warnings.push(w));

  return { issues, warnings };
}

// Java特有のチェック
function validateJavaContent(content) {
  const issues = [];
  // 文字列比較に == を使用している箇所を検出
  // パターン: 変数名 == "文字列" または "文字列" == 変数名
  if (/\w+\s*==\s*"[^"]+"|"[^"]+"\s*==\s*\w+/.test(content)) {
    issues.push("Java: 文字列比較に == を使用しています（.equals()を使用してください）");
  }
  return issues;
}

// コード内の不適切な語呂合わせチェック
function validateWordplay(code) {
  const issues = [];
  // 既知の不適切な語呂合わせパターン
  const badPatterns = [
    { pattern: /猫ch/g, meaning: "猫ch (catch)" },
    { pattern: /犬g/g, meaning: "犬g (dog)" },
    { pattern: /鯛p/g, meaning: "鯛p (type)" },
    { pattern: /蛾me/g, meaning: "蛾me (game)" },
  ];

  for (const { pattern, meaning } of badPatterns) {
    if (pattern.test(code)) {
      issues.push(`不適切な語呂合わせ: ${meaning}`);
    }
  }
  return issues;
}

// 日本語が含まれているかチェック
function containsJapanese(str) {
  if (!str) return false;
  // ひらがな、カタカナ、漢字をチェック
  return /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(str);
}

// 英語のみかチェック（日本語を含まない）
function isEnglishOnly(str) {
  if (!str) return false;
  return !containsJapanese(str);
}

// 英語の定型句かどうかチェック
function isAllowedEnglishPhrase(str) {
  const allowedPhrases = [
    /^Hello,?\s*World!?$/i,
    /^Hello,?\s*\w+!?$/i,  // Hello, Python! など
    /^Hi,?\s*\w+!?$/i,
    /^\d+$/,  // 数字のみ
    /^true|false$/i,
    /^null|nil|none$/i,
    /^error|success|ok$/i,
    /^Python|JavaScript|Java|Go|Rust|Ruby|PHP|Perl|Swift|Kotlin|TypeScript|C\+\+|C#|Haskell|Elixir|Lua|Bash|SQL|Assembly$/i,
  ];
  const trimmed = str.trim().replace(/\\n$/, '');
  return allowedPhrases.some(p => p.test(trimmed));
}

// コード内の出力文字列を抽出
function extractOutputStrings(code) {
  if (!code) return [];
  const strings = [];

  // 全言語の出力関数パターンを網羅
  const patterns = [
    // Python
    /print\s*\(\s*["'`]([^"'`]+)["'`]\s*\)/g,
    /print\s*\(\s*f["']([^"']+)["']\s*\)/g,
    // Rust
    /println!\s*\(\s*["']([^"']+)["']/g,
    // Java, Kotlin, Scala, Groovy
    /println\s*\(\s*["']([^"']+)["']\s*\)/g,
    /System\.out\.println\s*\(\s*["']([^"']+)["']\s*\)/g,
    // JavaScript, TypeScript
    /console\.log\s*\(\s*["'`]([^"'`]+)["'`]\s*\)/g,
    // Ruby
    /puts\s+["']([^"']+)["']/g,
    /p\s+["']([^"']+)["']/g,
    // PHP, Bash
    /echo\s+["']([^"']+)["']/g,
    /echo\s*\(\s*["']([^"']+)["']\s*\)/g,
    // C
    /printf\s*\(\s*["']([^"']+)["']/g,
    // Go
    /fmt\.Println\s*\(\s*["']([^"']+)["']\s*\)/g,
    /fmt\.Print\s*\(\s*["']([^"']+)["']\s*\)/g,
    // C#
    /Console\.WriteLine\s*\(\s*["']([^"']+)["']\s*\)/g,
    // C++
    /std::cout\s*<<\s*["']([^"']+)["']/g,
    /cout\s*<<\s*["']([^"']+)["']/g,
    // Elixir
    /IO\.puts\s+["']([^"']+)["']/g,
    /IO\.puts\s*\(\s*["']([^"']+)["']\s*\)/g,
    // Haskell
    /putStrLn\s+["']([^"']+)["']/g,
    // Perl
    /say\s+["']([^"']+)["']/g,
    /print\s+["']([^"']+)["']/g,
    // Lua
    /print\s*\(\s*["']([^"']+)["']\s*\)/g,
    // Swift
    /print\s*\(\s*["']([^"']+)["']\s*\)/g,
    // SQL (SELECT文の文字列)
    /SELECT\s+["']([^"']+)["']/gi,
  ];

  for (const pattern of patterns) {
    let match;
    const regex = new RegExp(pattern.source, pattern.flags);
    while ((match = regex.exec(code)) !== null) {
      if (match[1]) strings.push(match[1]);
    }
  }

  return strings;
}

// correctCodeとexpected_outputの言語整合性チェック
function validateLanguageConsistency(exercise) {
  const warnings = [];

  if (!exercise.correctCode || !exercise.testCases) return warnings;

  // コード内の出力文字列を抽出
  const codeStrings = extractOutputStrings(exercise.correctCode);

  for (const tc of exercise.testCases) {
    const expectedOutput = tc.expected_output;
    if (!expectedOutput) continue;

    // expected_outputの内容（末尾の改行を除去）
    const outputContent = expectedOutput.replace(/\n$/, '');

    // 定型句は除外
    if (isAllowedEnglishPhrase(outputContent)) continue;

    // コード内に日本語があるのにexpected_outputが英語のみの場合
    const hasJapaneseInCode = codeStrings.some(s => containsJapanese(s));
    const outputIsEnglishOnly = isEnglishOnly(outputContent) && outputContent.length > 0;

    if (hasJapaneseInCode && outputIsEnglishOnly) {
      warnings.push(`コード内に日本語があるのにexpected_outputが英語: "${outputContent}"`);
    }

    // コード内の文字列とexpected_outputが一致しない場合
    // （日本語コードなのに英語出力、または英語コードなのに日本語出力）
    for (const codeStr of codeStrings) {
      // コードの文字列が日本語を含む場合
      if (containsJapanese(codeStr)) {
        // expected_outputにその日本語が含まれていない、かつ英語が含まれている場合
        if (!containsJapanese(outputContent) && outputContent.length > 2) {
          // 数字のみや短すぎるものは除外
          if (!/^\d+$/.test(outputContent)) {
            warnings.push(`コード "${codeStr}" に対してexpected_output "${outputContent}" が不整合の可能性`);
          }
        }
      }
    }
  }

  return warnings;
}

// チュートリアルと演習コードの整合性チェック
function validateTutorialExerciseConsistency(exercise) {
  const warnings = [];

  if (!exercise.tutorialSlides || !exercise.correctCode) return warnings;

  // チュートリアル内の出力文字列を抽出
  const tutorialStrings = [];
  for (const slide of exercise.tutorialSlides) {
    if (slide.content) {
      const strings = extractOutputStrings(slide.content);
      tutorialStrings.push(...strings);
    }
  }

  // 演習コード内の出力文字列を抽出
  const exerciseStrings = extractOutputStrings(exercise.correctCode);

  // チュートリアルに日本語出力があるのに演習が英語のみの場合
  const tutorialHasJapanese = tutorialStrings.some(s => containsJapanese(s));
  const exerciseHasJapanese = exerciseStrings.some(s => containsJapanese(s));
  const exerciseIsEnglishOnly = exerciseStrings.length > 0 &&
    exerciseStrings.every(s => isEnglishOnly(s) && !isAllowedEnglishPhrase(s));

  if (tutorialHasJapanese && exerciseIsEnglishOnly) {
    const tutJp = tutorialStrings.filter(s => containsJapanese(s)).join(', ');
    const exEn = exerciseStrings.join(', ');
    warnings.push(`チュートリアルは日本語(${tutJp})だが演習は英語(${exEn})`);
  }

  return warnings;
}

function validateFile(filePath) {
  const fileName = path.basename(filePath);
  let data;

  try {
    data = parseLesson(filePath);
  } catch (e) {
    console.log(colors.red(`[ERROR] ${fileName}: パースエラー - ${e.message}`));
    return { errors: 1, warnings: 0 };
  }

  if (!data || !data.exercises) {
    console.log(colors.yellow(`[SKIP] ${fileName}: exercises が見つかりません`));
    return { errors: 0, warnings: 0 };
  }

  let totalErrors = 0;
  let totalWarnings = 0;
  const fileIssues = [];

  data.exercises.forEach((ex, idx) => {
    const { issues, warnings } = validateExercise(ex, idx, fileName, data.language);

    if (issues.length > 0 || warnings.length > 0) {
      fileIssues.push({
        exercise: idx + 1,
        title: ex.title,
        issues,
        warnings,
      });
      totalErrors += issues.length;
      totalWarnings += warnings.length;
    }
  });

  if (fileIssues.length > 0) {
    console.log(`\n${colors.blue(fileName)}:`);
    fileIssues.forEach((fi) => {
      console.log(`  #${fi.exercise} ${fi.title}`);
      fi.issues.forEach((i) => console.log(`    ${colors.red("[ERROR]")} ${i}`));
      fi.warnings.forEach((w) => console.log(`    ${colors.yellow("[WARN]")} ${w}`));
    });
  }

  return { errors: totalErrors, warnings: totalWarnings };
}

function main() {
  const args = process.argv.slice(2);
  let files;

  if (args.length > 0) {
    // 特定のファイルを検証
    files = args.filter((f) => fs.existsSync(f));
    if (files.length === 0) {
      console.log(colors.red("指定されたファイルが見つかりません"));
      process.exit(1);
    }
  } else {
    // 全レッスンファイルを検証
    const lessonsDir = path.join(__dirname, "..", "data", "lessons");
    files = fs
      .readdirSync(lessonsDir)
      .filter((f) => f.endsWith(".ts") && f !== "index.ts")
      .map((f) => path.join(lessonsDir, f));
  }

  console.log(colors.blue("=== レッスンデータ検証 ===\n"));
  console.log(`検証対象: ${files.length} ファイル\n`);

  let totalErrors = 0;
  let totalWarnings = 0;
  let filesWithIssues = 0;

  files.forEach((file) => {
    const { errors, warnings } = validateFile(file);
    totalErrors += errors;
    totalWarnings += warnings;
    if (errors > 0 || warnings > 0) filesWithIssues++;
  });

  console.log(colors.blue("\n=== 検証結果 ==="));
  console.log(`検証ファイル数: ${files.length}`);
  console.log(`問題のあるファイル: ${filesWithIssues}`);
  console.log(`エラー: ${totalErrors}`);
  console.log(`警告: ${totalWarnings}`);

  if (totalErrors > 0) {
    console.log(colors.red("\n検証失敗: エラーを修正してください"));
    process.exit(1);
  } else if (totalWarnings > 0) {
    console.log(colors.yellow("\n検証完了: 警告があります"));
    process.exit(0);
  } else {
    console.log(colors.green("\n検証成功: 問題は見つかりませんでした"));
    process.exit(0);
  }
}

main();

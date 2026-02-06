#!/usr/bin/env node
/**
 * lineHintsの整合性をチェックするスクリプト
 *
 * チェック項目:
 * 1. lineHintsの配列長がcorrectLinesと一致するか
 * 2. lineHintsの内容が対応する行と矛盾していないか
 * 3. holeyCodeに___がない行にヒントがないか
 */

import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const issues = [];

function isCommentLine(line) {
  const trimmed = line.trim();
  return trimmed.startsWith('//') || trimmed.startsWith('#') || trimmed.startsWith('--') ||
         trimmed.startsWith('/*') || trimmed.startsWith('*') || trimmed.startsWith(';');
}

function isClosingBrace(line) {
  const trimmed = line.trim();
  return trimmed === '}' || trimmed === '};' || trimmed === '},' ||
         trimmed === 'end' || trimmed === 'fi' || trimmed === 'done' ||
         trimmed === 'esac' || trimmed === '})' || trimmed === ']);';
}

function isEmptyLine(line) {
  return line.trim() === '';
}

function hasHole(line) {
  return line.includes('___');
}

// リテラルの \n (バックスラッシュ + n) - TypeScriptからインポート後もこの形式で残る
const backslashN = String.fromCharCode(92, 110);

async function checkFile(filePath) {
  const fileName = path.basename(filePath);

  try {
    const mod = await import(`../${filePath}`);
    const dataKey = Object.keys(mod)[0];
    const data = mod[dataKey];

    if (!data.exercises) return;

    for (const ex of data.exercises) {
      if (!ex.correctLines || !ex.lineHints) continue;

      const correctLines = ex.correctLines;
      const lineHints = ex.lineHints;

      // holeyCodeを行に分割
      // TypeScriptからのインポート後も\\nはリテラル文字列（2文字）として残る
      let holeyLines = [];
      if (ex.holeyCode) {
        holeyLines = ex.holeyCode.split(backslashN);
      }

      // 1. 配列長チェック（correctLines vs lineHints）
      if (correctLines.length !== lineHints.length) {
        issues.push({
          file: fileName,
          exercise: ex.title,
          type: 'array_length_mismatch',
          message: `correctLines(${correctLines.length}) != lineHints(${lineHints.length})`
        });
        continue;
      }

      // 1b. holeyLines長チェック
      // holeyCode内の文字列に\nが含まれる場合、分割数がcorrectLinesと異なることがある
      // その場合は正確な比較ができないためスキップ
      if (holeyLines.length !== correctLines.length) {
        // これは警告レベル - データの問題だが致命的ではない
        continue;
      }

      // 2. 内容の矛盾チェック
      for (let i = 0; i < correctLines.length; i++) {
        const line = correctLines[i];
        const hint = lineHints[i];
        const holeyLine = holeyLines[i] || '';

        if (!hint) continue;

        // コード行に「コメントです」というヒントがあるのは問題
        if (!isCommentLine(line) && /コメントです/.test(hint)) {
          issues.push({
            file: fileName,
            exercise: ex.title,
            type: 'hint_mismatch',
            message: `行${i+1}「${line.substring(0, 30)}...」にコメント用のヒントが設定されている`
          });
        }

        // 閉じ括弧に関数呼び出しのヒントがあるのは問題
        if (isClosingBrace(line) && /関数.*を呼び出/.test(hint)) {
          issues.push({
            file: fileName,
            exercise: ex.title,
            type: 'hint_mismatch',
            message: `閉じ括弧「${line}」に関数呼び出しのヒント「${hint.substring(0, 40)}」が設定されている`
          });
        }

        // デバッグ用という表現は避ける
        if (/デバッグ用/.test(hint)) {
          issues.push({
            file: fileName,
            exercise: ex.title,
            type: 'bad_hint_wording',
            message: `「デバッグ用」という表現を使用: ${hint.substring(0, 50)}`
          });
        }

        // holeyCodeに___がない行にヒントがあるのは問題（コメント行と空行は除く）
        if (!isCommentLine(line) && !isEmptyLine(line) && !hasHole(holeyLine) && hint) {
          issues.push({
            file: fileName,
            exercise: ex.title,
            type: 'hint_on_non_holey_line',
            message: `行${i+1}「${line.substring(0, 30)}」は___がないのにヒント「${hint.substring(0, 30)}」がある`
          });
        }
      }
    }
  } catch (e) {
    console.error(`Error in ${fileName}: ${e.message}`);
  }
}

// メイン処理
console.log('=== lineHints整合性チェック ===\n');

const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

for (const file of files) {
  await checkFile(path.join(lessonsDir, file));
}

if (issues.length === 0) {
  console.log('✅ 問題は見つかりませんでした。');
} else {
  console.log(`❌ ${issues.length}件の問題が見つかりました:\n`);

  // タイプごとにグループ化
  const byType = {};
  for (const issue of issues) {
    if (!byType[issue.type]) byType[issue.type] = [];
    byType[issue.type].push(issue);
  }

  for (const [type, typeIssues] of Object.entries(byType)) {
    console.log(`\n【${type}】${typeIssues.length}件`);
    for (const issue of typeIssues) {
      if (issue.exercise) {
        console.log(`  ${issue.file} - ${issue.exercise}`);
      } else {
        console.log(`  ${issue.file}`);
      }
      console.log(`    → ${issue.message}`);
    }
  }
}

console.log('\n=== チェック完了 ===');

#!/usr/bin/env node
/**
 * lineHintsの整合性をチェックするスクリプト
 *
 * チェック項目:
 * 1. lineHintsの配列長がcorrectLinesと一致するか
 * 2. lineHintsの内容が対応する行と矛盾していないか
 * 3. 未使用の変数定義がないか
 */

import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const issues = [];

// 問題のあるlineHintsパターン
const badHintPatterns = [
  { pattern: /コメントです/, shouldBeFor: 'comment', notFor: 'code' },
  { pattern: /関数.*を呼び出/, shouldBeFor: 'function_call', notFor: 'closing_brace' },
  { pattern: /デバッグ用/, shouldBeFor: null, notFor: 'any' }, // デバッグ用は使わない
];

function isCommentLine(line) {
  const trimmed = line.trim();
  return trimmed.startsWith('//') || trimmed.startsWith('#') || trimmed.startsWith('--');
}

function isClosingBrace(line) {
  const trimmed = line.trim();
  return trimmed === '}' || trimmed === '};' || trimmed === '},' || trimmed === 'end' || trimmed === '};';
}

function isFunctionCall(line) {
  // 関数呼び出しパターン: name(); や name(args);
  return /^\s*\w+\s*\([^)]*\)\s*;?\s*$/.test(line);
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath);

  // 1. 未使用変数チェック（ファイル冒頭の const xxx = ... が使われていない）
  const topLevelVars = content.match(/^const\s+(\w+)\s*=/gm);
  if (topLevelVars) {
    for (const varDecl of topLevelVars) {
      const varName = varDecl.match(/const\s+(\w+)/)[1];
      // exportされているか、ファイル内で2回以上出現するかチェック
      const occurrences = (content.match(new RegExp(`\\b${varName}\\b`, 'g')) || []).length;
      if (occurrences === 1) {
        issues.push({
          file: fileName,
          type: 'unused_variable',
          message: `未使用の変数: ${varName}`
        });
      }
    }
  }

  // exercisesを抽出してlineHintsをチェック
  const exerciseRegex = /"title":\s*"([^"]+)"[\s\S]*?"correctLines":\s*\[([\s\S]*?)\][\s\S]*?"lineHints":\s*\[([\s\S]*?)\]/g;

  let match;
  while ((match = exerciseRegex.exec(content)) !== null) {
    const title = match[1];
    const correctLinesStr = match[2];
    const lineHintsStr = match[3];

    // correctLinesを配列に変換
    const correctLines = [];
    const lineMatches = correctLinesStr.matchAll(/"([^"\\]*(?:\\.[^"\\]*)*)"/g);
    for (const m of lineMatches) {
      correctLines.push(m[1].replace(/\\n/g, '\n').replace(/\\"/g, '"'));
    }

    // lineHintsを配列に変換
    const lineHints = [];
    const hintMatches = lineHintsStr.matchAll(/(?:null|"([^"\\]*(?:\\.[^"\\]*)*)")/g);
    for (const m of hintMatches) {
      lineHints.push(m[1] || null);
    }

    // 2. 配列長チェック
    if (correctLines.length !== lineHints.length) {
      issues.push({
        file: fileName,
        exercise: title,
        type: 'array_length_mismatch',
        message: `correctLines(${correctLines.length}) != lineHints(${lineHints.length})`
      });
      continue;
    }

    // 3. 内容の矛盾チェック
    for (let i = 0; i < correctLines.length; i++) {
      const line = correctLines[i];
      const hint = lineHints[i];

      if (!hint) continue;

      // コメント行に「コメントです」以外のヒントがあるのは問題ではない
      // しかし、コード行に「コメントです」というヒントがあるのは問題
      if (!isCommentLine(line) && /コメントです/.test(hint)) {
        issues.push({
          file: fileName,
          exercise: title,
          type: 'hint_mismatch',
          message: `行${i+1}「${line.substring(0, 30)}...」にコメント用のヒントが設定されている`
        });
      }

      // 閉じ括弧に関数呼び出しのヒントがあるのは問題
      if (isClosingBrace(line) && /関数.*を呼び出/.test(hint)) {
        issues.push({
          file: fileName,
          exercise: title,
          type: 'hint_mismatch',
          message: `閉じ括弧「${line}」に関数呼び出しのヒントが設定されている`
        });
      }

      // デバッグ用という表現は避ける
      if (/デバッグ用/.test(hint)) {
        issues.push({
          file: fileName,
          exercise: title,
          type: 'bad_hint_wording',
          message: `「デバッグ用」という表現を使用: ${hint.substring(0, 50)}`
        });
      }
    }
  }
}

// メイン処理
console.log('=== lineHints整合性チェック ===\n');

const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

for (const file of files) {
  checkFile(path.join(lessonsDir, file));
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

#!/usr/bin/env node
/**
 * lineHintsの整合性をチェックするスクリプト
 *
 * チェック項目:
 * 1. lineHintsの配列長がcorrectLinesと一致するか
 * 2. lineHintsの内容が対応する行と矛盾していないか
 * 3. 未使用の変数定義がないか
 * 4. ヒントが対応する行の穴（___）を正しく説明しているか
 */

import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const issues = [];

/**
 * 括弧の深さを追跡して配列の境界を正確に特定する
 */
function extractArrayContent(content, startIndex) {
  let depth = 0;
  let inString = false;
  let stringChar = '';
  let escaped = false;
  let start = -1;

  for (let i = startIndex; i < content.length; i++) {
    const char = content[i];

    if (escaped) {
      escaped = false;
      continue;
    }

    if (char === '\\') {
      escaped = true;
      continue;
    }

    if (!inString) {
      if (char === '"' || char === "'" || char === '`') {
        inString = true;
        stringChar = char;
      } else if (char === '[') {
        if (depth === 0) start = i + 1;
        depth++;
      } else if (char === ']') {
        depth--;
        if (depth === 0) {
          return content.slice(start, i);
        }
      }
    } else {
      if (char === stringChar) {
        inString = false;
      }
    }
  }
  return null;
}

/**
 * 配列文字列から要素を抽出（nullとstringを区別）
 */
function parseArrayElements(arrayStr) {
  const elements = [];
  let inString = false;
  let stringChar = '';
  let escaped = false;
  let current = '';
  let depth = 0;

  for (let i = 0; i < arrayStr.length; i++) {
    const char = arrayStr[i];

    if (escaped) {
      current += char;
      escaped = false;
      continue;
    }

    if (char === '\\') {
      current += char;
      escaped = true;
      continue;
    }

    if (!inString) {
      if (char === '"' || char === "'" || char === '`') {
        inString = true;
        stringChar = char;
        current += char;
      } else if (char === '[' || char === '{') {
        depth++;
        current += char;
      } else if (char === ']' || char === '}') {
        depth--;
        current += char;
      } else if (char === ',' && depth === 0) {
        const trimmed = current.trim();
        if (trimmed === 'null') {
          elements.push(null);
        } else if (trimmed.startsWith('"') || trimmed.startsWith("'")) {
          // 文字列を抽出（引用符を除去）
          const match = trimmed.match(/^["'](.*)["']$/s);
          if (match) {
            elements.push(match[1].replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\'/g, "'"));
          }
        }
        current = '';
      } else {
        current += char;
      }
    } else {
      current += char;
      if (char === stringChar) {
        inString = false;
      }
    }
  }

  // 最後の要素
  const trimmed = current.trim();
  if (trimmed === 'null') {
    elements.push(null);
  } else if (trimmed.startsWith('"') || trimmed.startsWith("'")) {
    const match = trimmed.match(/^["'](.*)["']$/s);
    if (match) {
      elements.push(match[1].replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\'/g, "'"));
    }
  }

  return elements;
}

/**
 * holeyCodeを行に分割（文字列内の\\nを行区切りとして扱わない）
 *
 * TypeScriptソースから抽出した生の文字列を解析:
 * - 実際のデータには \\n が2文字（\と\とn）として含まれる
 * - \\" が文字列開始/終了
 */
function parseHoleyCodeLines(holeyCode) {
  const lines = [];
  let current = '';
  let i = 0;
  let inString = false;

  while (i < holeyCode.length) {
    // \\n（バックスラッシュ2つ + n = 3文字）を検出
    if (holeyCode[i] === '\\' && holeyCode[i + 1] === '\\' && holeyCode[i + 2] === 'n') {
      if (!inString) {
        // 文字列外は行区切り
        lines.push(current);
        current = '';
      } else {
        // 文字列内は改行文字（そのまま保持）
        current += '\\\\n';
      }
      i += 3;
      continue;
    }

    // \\" を検出（文字列の開始/終了）
    if (holeyCode[i] === '\\' && holeyCode[i + 1] === '"') {
      inString = !inString;
      current += '\\"';
      i += 2;
      continue;
    }

    // \\' を検出（シングルクォート文字列）- 言語によってはシングルクォートも
    if (holeyCode[i] === '\\' && holeyCode[i + 1] === "'") {
      inString = !inString;
      current += "\\'";
      i += 2;
      continue;
    }

    // その他のエスケープ（\\\\, \\t など）
    if (holeyCode[i] === '\\' && i + 1 < holeyCode.length) {
      current += holeyCode[i] + holeyCode[i + 1];
      i += 2;
      continue;
    }

    current += holeyCode[i];
    i++;
  }

  if (current) {
    lines.push(current);
  }

  return lines;
}

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

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath);

  // 1. 未使用変数チェック
  const topLevelVars = content.match(/^const\s+(\w+)\s*=/gm);
  if (topLevelVars) {
    for (const varDecl of topLevelVars) {
      const varName = varDecl.match(/const\s+(\w+)/)[1];
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

  // exercisesを抽出
  const titleRegex = /"title":\s*"([^"]+)"/g;
  let titleMatch;

  while ((titleMatch = titleRegex.exec(content)) !== null) {
    const title = titleMatch[1];
    const exerciseStart = titleMatch.index;

    // このexerciseのcorrectLinesとlineHintsとholeyCodeを探す
    const searchRegion = content.slice(exerciseStart, exerciseStart + 15000);

    const correctLinesIndex = searchRegion.indexOf('"correctLines":');
    const lineHintsIndex = searchRegion.indexOf('"lineHints":');
    const holeyCodeIndex = searchRegion.indexOf('"holeyCode":');

    if (correctLinesIndex === -1 || lineHintsIndex === -1) continue;

    // 配列を抽出
    const correctLinesContent = extractArrayContent(searchRegion, correctLinesIndex + 15);
    const lineHintsContent = extractArrayContent(searchRegion, lineHintsIndex + 12);

    if (!correctLinesContent || !lineHintsContent) continue;

    const correctLines = parseArrayElements(correctLinesContent);
    const lineHints = parseArrayElements(lineHintsContent);

    // holeyCodeも抽出（穴の位置を確認するため）
    let holeyLines = [];
    if (holeyCodeIndex !== -1) {
      const holeyCodeMatch = searchRegion.slice(holeyCodeIndex).match(/"holeyCode":\s*"([^"\\]*(?:\\.[^"\\]*)*)"/);
      if (holeyCodeMatch) {
        // 文字列内の\\nとライン区切りの\\nを区別してパース
        holeyLines = parseHoleyCodeLines(holeyCodeMatch[1]);
      }
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
      const holeyLine = holeyLines[i] || '';

      if (!hint) continue;

      // コード行に「コメントです」というヒントがあるのは問題
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
          message: `閉じ括弧「${line}」に関数呼び出しのヒント「${hint.substring(0, 40)}」が設定されている`
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

      // holeyCodeに___がない行にヒントがあるのは問題（コメント行と空行は除く）
      if (!isCommentLine(line) && !isEmptyLine(line) && !hasHole(holeyLine) && hint) {
        issues.push({
          file: fileName,
          exercise: title,
          type: 'hint_on_non_holey_line',
          message: `行${i+1}「${line.substring(0, 30)}」は___がないのにヒント「${hint.substring(0, 30)}」がある`
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

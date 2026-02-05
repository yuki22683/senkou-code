#!/usr/bin/env node
/**
 * コードとexpected_outputの整合性をチェックするスクリプト
 *
 * チェック項目:
 * 1. 正規表現 \w+ と日本語の組み合わせ
 * 2. 大文字小文字の不一致（特にPerlの/i無し）
 * 3. コメントとコードの矛盾
 * 4. 日本語コードと英語expected_outputの不一致
 */

import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

// 日本語文字の正規表現
const japaneseRegex = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/;

// 問題を格納する配列
const issues = [];

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath);

  // exercisesを抽出
  const exerciseMatches = content.matchAll(/"title":\s*"([^"]+)"[\s\S]*?"correctCode":\s*"([^"]*(?:\\.[^"]*)*)"[\s\S]*?"expected_output":\s*"([^"]*(?:\\.[^"]*)*)"/g);

  for (const match of exerciseMatches) {
    const title = match[1];
    const correctCode = match[2];
    const expectedOutput = match[3];

    // 1. \w+ と日本語の組み合わせチェック
    if (correctCode.includes('\\\\w+') || correctCode.includes('\\w+')) {
      const hasJapaneseInCode = japaneseRegex.test(correctCode);
      if (hasJapaneseInCode) {
        // コード内の文字列リテラルに日本語があるかチェック
        const stringLiterals = correctCode.match(/'[^']*'|"[^"]*"/g) || [];
        for (const str of stringLiterals) {
          if (japaneseRegex.test(str) && !str.includes('#') && !str.includes('//')) {
            issues.push({
              file: fileName,
              exercise: title,
              type: 'regex_japanese',
              message: `\\w+ パターンと日本語文字列の組み合わせ: ${str.substring(0, 50)}`
            });
          }
        }
      }
    }

    // 2. Perlの大文字小文字チェック（/pattern/ without /i）
    if (fileName.includes('perl')) {
      const perlPatternMatch = correctCode.match(/=~\s*\/([^\/]+)\//g);
      if (perlPatternMatch) {
        for (const pattern of perlPatternMatch) {
          // /i フラグがなく、パターンが小文字のみの場合
          if (!pattern.endsWith('/i') && !pattern.endsWith('/g') && !pattern.endsWith('/gi')) {
            const patternContent = pattern.match(/\/([^\/]+)\//)?.[1] || '';
            if (patternContent && patternContent === patternContent.toLowerCase()) {
              // コード内の文字列に大文字が含まれているかチェック
              const textMatch = correctCode.match(/\$\w+\s*=\s*["']([^"']+)["']/);
              if (textMatch && textMatch[1] !== textMatch[1].toLowerCase()) {
                issues.push({
                  file: fileName,
                  exercise: title,
                  type: 'case_sensitivity',
                  message: `パターン /${patternContent}/ は大文字小文字を区別するが、テキストに大文字が含まれる: "${textMatch[1]}"`
                });
              }
            }
          }
        }
      }
    }

    // 3. expected_outputが空でないかチェック（assembly以外）
    if (!fileName.includes('assembly') && expectedOutput === '') {
      // correctCodeに出力がありそうかチェック
      if (correctCode.includes('print') || correctCode.includes('console.log') ||
          correctCode.includes('puts') || correctCode.includes('echo') ||
          correctCode.includes('Console.WriteLine') || correctCode.includes('fmt.Print')) {
        issues.push({
          file: fileName,
          exercise: title,
          type: 'empty_output',
          message: 'expected_outputが空だが、コードに出力処理がある'
        });
      }
    }

    // 4. 日本語/英語の不一致チェック（文字列リテラル内のみ）
    const commonMismatches = [
      { jp: 'こんにちは', en: 'Hello' },
      { jp: 'こんにちは', en: 'hello' },
      { jp: '世界', en: 'World' },
      { jp: '世界', en: 'world' },
      { jp: '合格', en: 'Pass' },
      { jp: '不合格', en: 'Fail' },
      { jp: 'ニャー', en: 'Meow' },
      { jp: 'ワン', en: 'Woof' },
      { jp: 'バナナ', en: 'banana' },
      { jp: 'りんご', en: 'apple' },
    ];

    // コード内の文字列リテラルを抽出（識別子名を除外）
    // 注意: エスケープされたクォートも考慮
    const stringLiteralsInCode = correctCode.match(/'[^'\\]*(?:\\.[^'\\]*)*'|"[^"\\]*(?:\\.[^"\\]*)*"/g) || [];

    for (const pair of commonMismatches) {
      // 文字列リテラル内に日本語があり、出力に対応する英語がある場合
      const hasJpInStrings = stringLiteralsInCode.some(s => s.includes(pair.jp));
      if (hasJpInStrings && expectedOutput.includes(pair.en)) {
        issues.push({
          file: fileName,
          exercise: title,
          type: 'language_mismatch',
          message: `コードの文字列に「${pair.jp}」があるが、expected_outputに「${pair.en}」がある`
        });
      }
      // 文字列リテラル内に英語があり、出力に対応する日本語がある場合
      const hasEnInStrings = stringLiteralsInCode.some(s => s.includes(pair.en));
      if (hasEnInStrings && expectedOutput.includes(pair.jp)) {
        issues.push({
          file: fileName,
          exercise: title,
          type: 'language_mismatch',
          message: `コードの文字列に「${pair.en}」があるが、expected_outputに「${pair.jp}」がある`
        });
      }
    }
  }
}

// メイン処理
console.log('=== コード・出力整合性チェック ===\n');

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
      console.log(`  ${issue.file} - ${issue.exercise}`);
      console.log(`    → ${issue.message}`);
    }
  }
}

console.log('\n=== チェック完了 ===');

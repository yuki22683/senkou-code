#!/usr/bin/env node
/**
 * 解説スライドと演習コードの類似性をチェックするスクリプト
 *
 * 使い方: node scripts/check-tutorial-exercise-similarity.mjs
 *
 * チェック内容:
 * - tutorialSlidesのコード例とcorrectCodeが同じクラス名/関数名を使っていないか
 * - 同じ属性構成（name, age等）を使っていないか
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const lessonsDir = path.join(__dirname, '../data/lessons');

// コードブロックからクラス名・関数名・属性名を抽出
function extractIdentifiers(code) {
  const identifiers = {
    classes: [],
    functions: [],
    attributes: []
  };

  if (!code) return identifiers;

  // クラス名を抽出 (class ClassName, class ClassName:, class ClassName(, class ClassName {)
  const classMatches = code.match(/class\s+([A-Z][a-zA-Z0-9_]*)/g);
  if (classMatches) {
    identifiers.classes = classMatches.map(m => m.replace(/class\s+/, ''));
  }

  // 関数名を抽出 (def func_name, function funcName, func funcName, void funcName)
  const funcMatches = code.match(/(?:def|function|func|void|int|string|boolean)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g);
  if (funcMatches) {
    identifiers.functions = funcMatches.map(m => {
      const match = m.match(/([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/);
      return match ? match[1] : null;
    }).filter(Boolean);
  }

  // 属性名を抽出 (self.attr, this.attr, name:, age:)
  const attrMatches = code.match(/(?:self\.|this\.)([a-zA-Z_][a-zA-Z0-9_]*)|([a-zA-Z_][a-zA-Z0-9_]*)\s*:/g);
  if (attrMatches) {
    identifiers.attributes = attrMatches.map(m => {
      const match = m.match(/(?:self\.|this\.)?([a-zA-Z_][a-zA-Z0-9_]*)/);
      return match ? match[1] : null;
    }).filter(Boolean);
  }

  return identifiers;
}

// スライドからコードブロックを抽出
function extractCodeFromSlides(slides) {
  const codes = [];
  for (const slide of slides) {
    if (slide.content) {
      const codeBlocks = slide.content.match(/```[a-z]*\n([\s\S]*?)```/g);
      if (codeBlocks) {
        for (const block of codeBlocks) {
          const code = block.replace(/```[a-z]*\n/, '').replace(/```$/, '');
          codes.push(code);
        }
      }
    }
  }
  return codes.join('\n');
}

// 類似性をチェック
function checkSimilarity(slideCode, exerciseCode) {
  const slideIds = extractIdentifiers(slideCode);
  const exerciseIds = extractIdentifiers(exerciseCode);

  const issues = [];

  // 同じクラス名を使用しているか
  const commonClasses = slideIds.classes.filter(c => exerciseIds.classes.includes(c));
  if (commonClasses.length > 0) {
    issues.push(`同じクラス名を使用: ${commonClasses.join(', ')}`);
  }

  // 同じ属性構成を使用しているか（2つ以上の属性が一致）
  const commonAttrs = slideIds.attributes.filter(a => exerciseIds.attributes.includes(a));
  if (commonAttrs.length >= 2) {
    issues.push(`類似した属性構成: ${commonAttrs.join(', ')}`);
  }

  return issues;
}

// メイン処理
async function main() {
  const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

  let totalIssues = 0;
  const results = [];

  for (const file of files) {
    const filePath = path.join(lessonsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    // exercisesの配列を抽出（簡易的なパース）
    const exerciseMatches = content.match(/"exercises"\s*:\s*\[([\s\S]*?)\]\s*\}/);
    if (!exerciseMatches) continue;

    // 各演習を処理
    const titleMatches = content.matchAll(/"title":\s*"([^"]+)"/g);
    const tutorialMatches = content.matchAll(/"tutorialSlides":\s*\[([\s\S]*?)\]\s*,\s*"initialDisplayMode"/g);
    const correctCodeMatches = content.matchAll(/"correctCode":\s*"((?:[^"\\]|\\.)*)"/g);

    const titles = [...titleMatches].map(m => m[1]);
    const tutorials = [...tutorialMatches].map(m => m[1]);
    const correctCodes = [...correctCodeMatches].map(m => {
      return m[1].replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    });

    // タイトルと演習数が一致しない場合はスキップ
    const exerciseCount = Math.min(titles.length, tutorials.length, correctCodes.length);

    for (let i = 0; i < exerciseCount; i++) {
      const title = titles[i];
      const slideCode = extractCodeFromSlides([{ content: tutorials[i] }]);
      const exerciseCode = correctCodes[i];

      const issues = checkSimilarity(slideCode, exerciseCode);

      if (issues.length > 0) {
        totalIssues++;
        results.push({
          file,
          title,
          issues
        });
      }
    }
  }

  // 結果出力
  console.log('=== 解説と演習の類似性チェック ===\n');

  if (results.length === 0) {
    console.log('問題は見つかりませんでした。');
  } else {
    console.log(`${totalIssues}件の潜在的な問題が見つかりました:\n`);
    for (const r of results) {
      console.log(`[${r.file}] ${r.title}`);
      for (const issue of r.issues) {
        console.log(`  - ${issue}`);
      }
      console.log('');
    }
  }
}

main().catch(console.error);

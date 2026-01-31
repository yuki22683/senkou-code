#!/usr/bin/env node
/**
 * 解説スライドと演習コードの類似性をチェックするスクリプト（強化版）
 *
 * 使い方: node scripts/check-tutorial-exercise-similarity.mjs
 *
 * チェック内容:
 * 1. 完全一致または高類似度のコード
 * 2. 同じクラス名/構造体名
 * 3. 同じ関数名
 * 4. 同じ演算パターン（x + y, x * 2など）
 * 5. 同じ属性構成（name, age等）
 * 6. 同じ出力文字列
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const lessonsDir = path.join(__dirname, '../data/lessons');

// コードを正規化（空白・改行を統一）
function normalizeCode(code) {
  if (!code) return '';
  return code
    .replace(/\/\/.*$/gm, '')  // コメント除去
    .replace(/\/\*[\s\S]*?\*\//g, '')  // ブロックコメント除去
    .replace(/#.*$/gm, '')  // Pythonコメント除去
    .replace(/--.*$/gm, '')  // Haskell/SQLコメント除去
    .replace(/\s+/g, ' ')  // 空白を統一
    .trim()
    .toLowerCase();
}

// 類似度を計算（Jaccard係数）
function calculateSimilarity(code1, code2) {
  const tokens1 = new Set(normalizeCode(code1).split(/\s+/));
  const tokens2 = new Set(normalizeCode(code2).split(/\s+/));

  const intersection = new Set([...tokens1].filter(x => tokens2.has(x)));
  const union = new Set([...tokens1, ...tokens2]);

  if (union.size === 0) return 0;
  return intersection.size / union.size;
}

// コードブロックからクラス名・関数名・属性名・演算パターンを抽出
function extractPatterns(code) {
  const patterns = {
    classes: [],
    functions: [],
    attributes: [],
    operations: [],
    strings: [],
    structPatterns: []
  };

  if (!code) return patterns;

  // クラス名を抽出
  const classMatches = code.match(/class\s+([A-Z][a-zA-Z0-9_]*)/g);
  if (classMatches) {
    patterns.classes = classMatches.map(m => m.replace(/class\s+/, ''));
  }

  // 構造体名を抽出
  const structMatches = code.match(/struct\s+([A-Z][a-zA-Z0-9_]*)/g);
  if (structMatches) {
    patterns.classes.push(...structMatches.map(m => m.replace(/struct\s+/, '')));
  }

  // 関数名を抽出（多言語対応）
  const funcPatterns = [
    /(?:def|function|func|fn)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g,
    /(?:void|int|string|boolean|double|float|char|String|Int|Bool)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g,
    /([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(?:lambda|->|\{)/g,
    /([a-zA-Z_][a-zA-Z0-9_]*)\s+[a-z]+\s*=\s*[a-z]+\s*[\*\+\-\/]/g  // Haskell: double x = x * 2
  ];

  for (const pattern of funcPatterns) {
    const matches = code.matchAll(pattern);
    for (const match of matches) {
      if (match[1] && !['if', 'for', 'while', 'switch', 'catch', 'main', 'print', 'println', 'printf'].includes(match[1])) {
        patterns.functions.push(match[1]);
      }
    }
  }

  // 属性名を抽出
  const attrMatches = code.match(/(?:self\.|this\.)([a-zA-Z_][a-zA-Z0-9_]*)/g);
  if (attrMatches) {
    patterns.attributes = attrMatches.map(m => m.replace(/(?:self\.|this\.)/, ''));
  }

  // 演算パターンを抽出（x + y, x * 2 など）
  const opPatterns = [
    /([a-zA-Z_]\w*)\s*[\+\-\*\/\%]\s*([a-zA-Z_]\w*|\d+)/g,  // a + b, x * 2
    /([a-zA-Z_]\w*)\s*[\+\-\*\/\%]=\s*(\d+)/g,  // x += 10
  ];

  for (const pattern of opPatterns) {
    const matches = code.matchAll(pattern);
    for (const match of matches) {
      // 演算子を抽出
      const opMatch = match[0].match(/[\+\-\*\/\%]/);
      if (opMatch) {
        patterns.operations.push(`${match[1]}${opMatch[0]}${match[2]}`);
      }
    }
  }

  // 文字列リテラルを抽出
  const stringMatches = code.match(/"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/g);
  if (stringMatches) {
    patterns.strings = stringMatches.map(s => s.slice(1, -1)).filter(s => s.length > 3);
  }

  // 構造パターンを抽出（変数宣言のパターン）
  const declPatterns = code.match(/(?:int|String|var|let|const)\s+\w+\s*=\s*\d+/g);
  if (declPatterns) {
    patterns.structPatterns = declPatterns.map(p => p.replace(/\d+/, 'N'));  // 数値を抽象化
  }

  return patterns;
}

// スライドからコードブロックを抽出
function extractCodeFromSlides(slidesContent) {
  const codes = [];
  const codeBlocks = slidesContent.match(/```[a-z]*\\n([\\s\\S]*?)```|```[a-z]*\n([\s\S]*?)```/g);
  if (codeBlocks) {
    for (const block of codeBlocks) {
      const code = block
        .replace(/```[a-z]*\\n/, '')
        .replace(/```[a-z]*\n/, '')
        .replace(/```$/, '')
        .replace(/\\n/g, '\n')
        .replace(/\\"/g, '"');
      codes.push(code);
    }
  }
  return codes.join('\n');
}

// 類似性をチェック
function checkSimilarity(slideCode, exerciseCode, title) {
  const issues = [];

  // 1. 完全一致または高類似度チェック
  const similarity = calculateSimilarity(slideCode, exerciseCode);
  if (similarity > 0.8) {
    issues.push(`高類似度: ${(similarity * 100).toFixed(0)}%`);
  }

  // 2. 同じ文字列の出力をチェック（Hello系は除外しない）
  const slidePatterns = extractPatterns(slideCode);
  const exercisePatterns = extractPatterns(exerciseCode);

  // 同じクラス名
  const commonClasses = slidePatterns.classes.filter(c => exercisePatterns.classes.includes(c));
  if (commonClasses.length > 0) {
    issues.push(`同じクラス/構造体名: ${commonClasses.join(', ')}`);
  }

  // 同じ関数名（main, printなどの汎用的な名前は除外）
  const commonFuncs = slidePatterns.functions.filter(f =>
    exercisePatterns.functions.includes(f) &&
    !['main', 'print', 'println', 'printf', 'puts', 'echo'].includes(f)
  );
  if (commonFuncs.length > 0) {
    issues.push(`同じ関数名: ${commonFuncs.join(', ')}`);
  }

  // 同じ演算パターン（抽象化して比較）
  const normalizeOp = (op) => op.replace(/[a-zA-Z_]\w*/g, 'VAR').replace(/\d+/g, 'N');
  const slideOps = slidePatterns.operations.map(normalizeOp);
  const exerciseOps = exercisePatterns.operations.map(normalizeOp);
  const commonOps = [...new Set(slideOps)].filter(op => exerciseOps.includes(op));
  // 同じ演算子パターンが2つ以上一致する場合
  if (commonOps.length >= 2) {
    issues.push(`類似した演算パターン: ${commonOps.join(', ')}`);
  }

  // 同じ属性（2つ以上一致）
  const commonAttrs = slidePatterns.attributes.filter(a => exercisePatterns.attributes.includes(a));
  if (commonAttrs.length >= 2) {
    issues.push(`類似した属性構成: ${commonAttrs.join(', ')}`);
  }

  // 同じ文字列（完全一致で5文字以上）
  const commonStrings = slidePatterns.strings.filter(s =>
    exercisePatterns.strings.includes(s) && s.length >= 5
  );
  if (commonStrings.length > 0) {
    issues.push(`同じ文字列: "${commonStrings.join('", "')}"`);
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

    // exercisesをより正確にパース
    const exerciseBlockMatch = content.match(/"exercises"\s*:\s*\[([\s\S]*)\]\s*\}/);
    if (!exerciseBlockMatch) continue;

    // 各演習を個別に抽出
    const exerciseBlocks = [];
    let depth = 0;
    let start = -1;
    const exercisesStr = exerciseBlockMatch[1];

    for (let i = 0; i < exercisesStr.length; i++) {
      if (exercisesStr[i] === '{') {
        if (depth === 0) start = i;
        depth++;
      } else if (exercisesStr[i] === '}') {
        depth--;
        if (depth === 0 && start !== -1) {
          exerciseBlocks.push(exercisesStr.slice(start, i + 1));
          start = -1;
        }
      }
    }

    for (const block of exerciseBlocks) {
      // タイトルを抽出
      const titleMatch = block.match(/"title"\s*:\s*"([^"]+)"/);
      if (!titleMatch) continue;
      const title = titleMatch[1];

      // tutorialSlidesを抽出
      const tutorialMatch = block.match(/"tutorialSlides"\s*:\s*\[([\s\S]*?)\]\s*,\s*"initialDisplayMode"/);
      if (!tutorialMatch) continue;
      const slideCode = extractCodeFromSlides(tutorialMatch[1]);

      // correctCodeを抽出
      const codeMatch = block.match(/"correctCode"\s*:\s*"((?:[^"\\]|\\.)*)"/);
      if (!codeMatch) continue;
      const exerciseCode = codeMatch[1].replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\\\/g, '\\');

      const issues = checkSimilarity(slideCode, exerciseCode, title);

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
  console.log('=== 解説と演習の類似性チェック（強化版） ===\n');

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

  return totalIssues;
}

main().catch(console.error);

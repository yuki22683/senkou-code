// Check for remaining kanji in console output strings
// Target: correctCode, holeyCode, correctLines, candidates, expected_output
// Skip: tutorialSlides, lineHints, description, title, comment lines

import fs from 'fs';
import path from 'path';

const KANJI_TO_CHECK = [
  '太郎', '花子', '合格', '不合格', '大人', '子供', '未成年',
  '偶数', '奇数', '赤', '青', '緑', '黄色', '秘密'
];

// Find matching bracket considering nesting
function findMatchingBracket(content, startIdx, openChar, closeChar) {
  let depth = 1;
  let i = startIdx + 1;
  let inString = false;
  let stringChar = null;

  while (i < content.length && depth > 0) {
    const char = content[i];
    const prevChar = content[i - 1];

    if (!inString && (char === '"' || char === "'" || char === '`')) {
      inString = true;
      stringChar = char;
    } else if (inString && char === stringChar && prevChar !== '\\') {
      inString = false;
      stringChar = null;
    }

    if (!inString) {
      if (char === openChar) depth++;
      else if (char === closeChar) depth--;
    }

    i++;
  }

  return depth === 0 ? i - 1 : -1;
}

// Find all ranges of a specific field
function findFieldRanges(content, fieldName) {
  const ranges = [];
  const pattern = new RegExp(`"${fieldName}"\\s*:\\s*\\[`, 'g');
  let match;

  while ((match = pattern.exec(content)) !== null) {
    const startIdx = match.index + match[0].length - 1;
    const endIdx = findMatchingBracket(content, startIdx, '[', ']');
    if (endIdx !== -1) {
      ranges.push({ start: match.index, end: endIdx + 1 });
    }
  }

  return ranges;
}

// Find string field ranges
function findStringFieldRanges(content, fieldName) {
  const ranges = [];
  const pattern = new RegExp(`"${fieldName}"\\s*:\\s*"`, 'g');
  let match;

  while ((match = pattern.exec(content)) !== null) {
    const startIdx = match.index + match[0].length - 1;
    let i = startIdx + 1;
    while (i < content.length) {
      if (content[i] === '"' && content[i - 1] !== '\\') break;
      i++;
    }
    ranges.push({ start: match.index, end: i + 1 });
  }

  return ranges;
}

// Check if position is within excluded ranges
function isInExcludedRange(pos, excludedRanges) {
  for (const range of excludedRanges) {
    if (pos >= range.start && pos <= range.end) {
      return true;
    }
  }
  return false;
}

// Get line number from position
function getLineNumber(content, pos) {
  return content.substring(0, pos).split('\n').length;
}

// Get context around position
function getContext(content, pos, kanji) {
  const start = Math.max(0, pos - 30);
  const end = Math.min(content.length, pos + kanji.length + 30);
  return content.substring(start, end).replace(/\n/g, '\\n');
}

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalIssues = 0;
const issues = [];

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Find excluded ranges
  const excludedRanges = [
    ...findFieldRanges(content, 'tutorialSlides'),
    ...findFieldRanges(content, 'lineHints'),
    ...findStringFieldRanges(content, 'description'),
    ...findStringFieldRanges(content, 'title'),
  ];

  // Search for each kanji
  for (const kanji of KANJI_TO_CHECK) {
    let pos = 0;
    while ((pos = content.indexOf(kanji, pos)) !== -1) {
      // Skip if in excluded range
      if (!isInExcludedRange(pos, excludedRanges)) {
        // Check if this is in a comment line
        let isComment = false;
        let searchStart = Math.max(0, pos - 200);
        let lastQuotePos = -1;

        for (let j = pos - 1; j >= searchStart; j--) {
          if (content[j] === '"' && content[j - 1] !== '\\') {
            lastQuotePos = j;
            break;
          }
        }

        if (lastQuotePos !== -1) {
          const afterQuote = content.substring(lastQuotePos + 1, lastQuotePos + 5);
          if (afterQuote.startsWith('# ') || afterQuote.startsWith('#\\n') ||
              afterQuote.startsWith('// ') || afterQuote.startsWith('//\\n') ||
              afterQuote.startsWith('-- ') || afterQuote.startsWith('--\\n') ||
              afterQuote.startsWith('/* ')) {
            isComment = true;
          }
        }

        if (!isComment) {
          const lineNum = getLineNumber(content, pos);
          const context = getContext(content, pos, kanji);
          issues.push({
            file,
            line: lineNum,
            kanji,
            context
          });
          totalIssues++;
        }
      }
      pos += kanji.length;
    }
  }
}

if (totalIssues > 0) {
  console.log('Remaining kanji found in console output strings:\n');
  for (const issue of issues) {
    console.log(`${issue.file}:${issue.line} - "${issue.kanji}"`);
    console.log(`  Context: ...${issue.context}...`);
    console.log();
  }
  console.log(`Total issues: ${totalIssues}`);
} else {
  console.log('No remaining kanji found in console output strings.');
}

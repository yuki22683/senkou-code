// Convert kanji in console output strings to hiragana/katakana
// Target: correctCode, holeyCode, correctLines, candidates, expected_output
// Skip: tutorialSlides, lineHints, description, title, comment lines

import fs from 'fs';
import path from 'path';

const KANJI_MAP = {
  '太郎': 'たろう',
  '花子': 'はなこ',
  '合格': 'ごうかく',
  '不合格': 'ふごうかく',
  '大人': 'おとな',
  '子供': 'こども',
  '未成年': 'みせいねん',
  '偶数': 'ぐうすう',
  '奇数': 'きすう',
  '赤': 'あか',
  '青': 'あお',
  '緑': 'みどり',
  '黄色': 'きいろ',
  '秘密': 'ひみつ',
};

// Find matching bracket considering nesting
function findMatchingBracket(content, startIdx, openChar, closeChar) {
  let depth = 1;
  let i = startIdx + 1;
  let inString = false;
  let stringChar = null;

  while (i < content.length && depth > 0) {
    const char = content[i];
    const prevChar = content[i - 1];

    // Handle string boundaries
    if (!inString && (char === '"' || char === "'" || char === '`')) {
      inString = true;
      stringChar = char;
    } else if (inString && char === stringChar && prevChar !== '\\') {
      inString = false;
      stringChar = null;
    }

    // Only count brackets outside strings
    if (!inString) {
      if (char === openChar) depth++;
      else if (char === closeChar) depth--;
    }

    i++;
  }

  return depth === 0 ? i - 1 : -1;
}

// Find all ranges of a specific field (e.g., tutorialSlides, lineHints)
function findFieldRanges(content, fieldName) {
  const ranges = [];
  const pattern = new RegExp(`"${fieldName}"\\s*:\\s*\\[`, 'g');
  let match;

  while ((match = pattern.exec(content)) !== null) {
    const startIdx = match.index + match[0].length - 1; // Position of '['
    const endIdx = findMatchingBracket(content, startIdx, '[', ']');
    if (endIdx !== -1) {
      ranges.push({ start: match.index, end: endIdx + 1 });
    }
  }

  return ranges;
}

// Find string field ranges (e.g., description, title)
function findStringFieldRanges(content, fieldName) {
  const ranges = [];
  const pattern = new RegExp(`"${fieldName}"\\s*:\\s*"`, 'g');
  let match;

  while ((match = pattern.exec(content)) !== null) {
    const startIdx = match.index + match[0].length - 1; // Position of opening "
    let i = startIdx + 1;
    while (i < content.length) {
      if (content[i] === '"' && content[i - 1] !== '\\') break;
      i++;
    }
    ranges.push({ start: match.index, end: i + 1 });
  }

  return ranges;
}

// Check if position is a comment line (starts with # or //)
function isCommentString(content, pos) {
  // Find the start of the string
  let stringStart = pos;
  while (stringStart > 0 && content[stringStart] !== '"') {
    stringStart--;
  }

  // Check the content after the opening quote
  const afterQuote = content.substring(stringStart + 1, stringStart + 4);
  if (afterQuote.startsWith('# ') || afterQuote.startsWith('#\\n') ||
      afterQuote.startsWith('// ') || afterQuote.startsWith('//\\n') ||
      afterQuote.startsWith('-- ') || afterQuote.startsWith('--\\n')) {
    return true;
  }

  return false;
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

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalChanges = 0;
const fileChanges = {};

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Find excluded ranges
  const excludedRanges = [
    ...findFieldRanges(content, 'tutorialSlides'),
    ...findFieldRanges(content, 'lineHints'),
    ...findStringFieldRanges(content, 'description'),
    ...findStringFieldRanges(content, 'title'),
  ];

  let changes = 0;
  let result = '';
  let i = 0;

  while (i < content.length) {
    let matched = false;

    // Check if we're in an excluded range
    if (!isInExcludedRange(i, excludedRanges)) {
      // Check if this position is in a comment string
      // We need to check if we're inside a string and if it's a comment

      // Try to match each kanji
      for (const [kanji, hiragana] of Object.entries(KANJI_MAP)) {
        if (content.substring(i, i + kanji.length) === kanji) {
          // Check if this is within a comment line in correctLines/correctCode/holeyCode
          // Find the enclosing string
          let isComment = false;
          let searchStart = Math.max(0, i - 200);
          let lastQuotePos = -1;

          for (let j = i - 1; j >= searchStart; j--) {
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
            result += hiragana;
            i += kanji.length;
            changes++;
            matched = true;
            break;
          }
        }
      }
    }

    if (!matched) {
      result += content[i];
      i++;
    }
  }

  if (changes > 0) {
    fs.writeFileSync(filePath, result, 'utf8');
    console.log(`${file}: ${changes} changes`);
    fileChanges[file] = changes;
    totalChanges += changes;
  }
}

console.log(`\nTotal changes: ${totalChanges}`);
console.log(`Files modified: ${Object.keys(fileChanges).length}`);

if (totalChanges === 0) {
  console.log('No kanji found to convert.');
}

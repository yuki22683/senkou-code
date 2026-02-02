import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;

// Count elements in a JSON array string without full parsing
function countArrayElements(arrayStr) {
  // Remove outer brackets and trim
  let inner = arrayStr.trim();
  if (inner.startsWith('[')) inner = inner.slice(1);
  if (inner.endsWith(']')) inner = inner.slice(0, -1);
  inner = inner.trim();

  if (!inner) return 0;

  let count = 0;
  let depth = 0;
  let inString = false;
  let escapeNext = false;

  for (let i = 0; i < inner.length; i++) {
    const char = inner[i];

    if (escapeNext) {
      escapeNext = false;
      continue;
    }

    if (char === '\\') {
      escapeNext = true;
      continue;
    }

    if (char === '"' && depth === 0) {
      inString = !inString;
      continue;
    }

    if (inString) continue;

    if (char === '[' || char === '{') {
      depth++;
    } else if (char === ']' || char === '}') {
      depth--;
    } else if (char === ',' && depth === 0) {
      count++;
    }
  }

  return count + 1; // number of elements = commas + 1
}

// Build a new lineHints array with the correct length
function buildNewHints(oldHintsStr, targetLength, holeyLines) {
  // Parse old hints manually
  let inner = oldHintsStr.trim();
  if (inner.startsWith('[')) inner = inner.slice(1);
  if (inner.endsWith(']')) inner = inner.slice(0, -1);

  // Split by top-level commas
  const oldHints = [];
  let current = '';
  let depth = 0;
  let inString = false;
  let escapeNext = false;

  for (let i = 0; i < inner.length; i++) {
    const char = inner[i];

    if (escapeNext) {
      escapeNext = false;
      current += char;
      continue;
    }

    if (char === '\\') {
      escapeNext = true;
      current += char;
      continue;
    }

    if (char === '"') {
      inString = !inString;
      current += char;
      continue;
    }

    if (inString) {
      current += char;
      continue;
    }

    if (char === '[' || char === '{') {
      depth++;
      current += char;
    } else if (char === ']' || char === '}') {
      depth--;
      current += char;
    } else if (char === ',' && depth === 0) {
      oldHints.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  if (current.trim()) {
    oldHints.push(current.trim());
  }

  // Build new hints
  const newHints = [];
  for (let i = 0; i < targetLength; i++) {
    const holeyLine = holeyLines[i] || '';
    const hasHole = holeyLine.includes('___');

    let hint = 'null';
    if (i < oldHints.length && oldHints[i] !== 'null') {
      hint = oldHints[i];
    }

    if (hasHole && hint !== 'null') {
      newHints.push(hint);
    } else {
      newHints.push('null');
    }
  }

  return '[\n          ' + newHints.join(',\n          ') + '\n        ]';
}

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // Find all correctLines arrays and their lengths, then fix corresponding lineHints
  const correctLinesRegex = /"correctLines":\s*(\[[\s\S]*?\])\s*,\s*"lineHints":\s*(\[[\s\S]*?\])/g;

  // Also need to find holeyCode for each exercise
  const exerciseRegex = /"holeyCode":\s*"((?:[^"\\]|\\.)*)"\s*,\s*"correctLines":\s*(\[[\s\S]*?\])\s*,\s*"lineHints":\s*(\[[\s\S]*?\])/g;

  content = content.replace(exerciseRegex, (match, holeyCodeRaw, correctLinesStr, lineHintsStr) => {
    const correctLinesCount = countArrayElements(correctLinesStr);
    const lineHintsCount = countArrayElements(lineHintsStr);

    if (correctLinesCount === lineHintsCount) {
      return match;
    }

    // Decode holeyCode
    const holeyCode = holeyCodeRaw
      .replace(/\\\\n/g, '\n')
      .replace(/\\n/g, '\n')
      .replace(/\\"/g, '"')
      .replace(/\\\\/g, '\\');
    const holeyLines = holeyCode.split('\n');

    // Build new hints
    const newHintsStr = buildNewHints(lineHintsStr, correctLinesCount, holeyLines);

    modified = true;

    return `"holeyCode": "${holeyCodeRaw}",\s*"correctLines": ${correctLinesStr},\s*"lineHints": ${newHintsStr}`;
  });

  // Simpler approach: just replace lineHints arrays that don't match
  // Re-read and use a simpler method
  content = fs.readFileSync(filePath, 'utf-8');

  // Find exercises and fix them one by one
  const exercises = [];
  let pos = 0;
  while (true) {
    const holeyStart = content.indexOf('"holeyCode":', pos);
    if (holeyStart === -1) break;

    const correctLinesStart = content.indexOf('"correctLines":', holeyStart);
    if (correctLinesStart === -1) break;

    const lineHintsStart = content.indexOf('"lineHints":', correctLinesStart);
    if (lineHintsStart === -1) break;

    // Find the end of lineHints array
    let bracketDepth = 0;
    let hintsEnd = lineHintsStart + 12; // skip '"lineHints":'
    while (hintsEnd < content.length && content[hintsEnd] !== '[') hintsEnd++;
    let arrayStart = hintsEnd;
    while (hintsEnd < content.length) {
      if (content[hintsEnd] === '[') bracketDepth++;
      else if (content[hintsEnd] === ']') {
        bracketDepth--;
        if (bracketDepth === 0) {
          hintsEnd++;
          break;
        }
      }
      hintsEnd++;
    }

    exercises.push({
      holeyStart,
      correctLinesStart,
      lineHintsStart,
      hintsEnd
    });

    pos = hintsEnd;
  }

  // Process in reverse order to not mess up positions
  for (let i = exercises.length - 1; i >= 0; i--) {
    const ex = exercises[i];

    // Extract holeyCode
    let holeyEnd = ex.correctLinesStart;
    const holeyMatch = content.slice(ex.holeyStart, holeyEnd).match(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/);
    if (!holeyMatch) continue;

    const holeyCodeRaw = holeyMatch[1];
    const holeyCode = holeyCodeRaw
      .replace(/\\\\n/g, '\n')
      .replace(/\\n/g, '\n')
      .replace(/\\"/g, '"')
      .replace(/\\\\/g, '\\');
    const holeyLines = holeyCode.split('\n');

    // Extract correctLines
    let clEnd = ex.lineHintsStart;
    const clMatch = content.slice(ex.correctLinesStart, clEnd).match(/"correctLines":\s*(\[[\s\S]*?\])/);
    if (!clMatch) continue;

    const correctLinesCount = countArrayElements(clMatch[1]);

    // Extract lineHints
    const lhStr = content.slice(ex.lineHintsStart, ex.hintsEnd);
    const lhMatch = lhStr.match(/"lineHints":\s*(\[[\s\S]*?\])/);
    if (!lhMatch) continue;

    const lineHintsCount = countArrayElements(lhMatch[1]);

    if (correctLinesCount === lineHintsCount) continue;

    // Build new hints
    const newHintsStr = buildNewHints(lhMatch[1], correctLinesCount, holeyLines);

    // Replace
    const newLhStr = `"lineHints": ${newHintsStr}`;
    content = content.slice(0, ex.lineHintsStart) + newLhStr + content.slice(ex.hintsEnd);
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed: ${file}`);
    totalFixed++;
  }
}

console.log(`\nTotal files fixed: ${totalFixed}`);

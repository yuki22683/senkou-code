import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

// Safely parse a JSON array string
function parseArray(str) {
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}

// Find matching bracket for an opening bracket at position
function findMatchingBracket(content, start) {
  let depth = 0;
  for (let i = start; i < content.length; i++) {
    if (content[i] === '[') depth++;
    else if (content[i] === ']') {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;
  let offset = 0;

  // Find all exercises by looking for correctLines followed by lineHints
  const correctLinesPattern = /"correctLines":\s*\[/g;
  let match;

  while ((match = correctLinesPattern.exec(content)) !== null) {
    // Find the end of correctLines array
    const clStart = match.index + match[0].length - 1; // position of '['
    const clEnd = findMatchingBracket(content, clStart);
    if (clEnd === -1) continue;

    const correctLinesStr = content.slice(clStart, clEnd + 1);
    const correctLines = parseArray(correctLinesStr);
    if (!correctLines) continue;

    // Find lineHints after correctLines
    const afterCL = content.slice(clEnd + 1);
    const lhMatch = afterCL.match(/^\s*,\s*"lineHints":\s*\[/);
    if (!lhMatch) continue;

    const lhStart = clEnd + 1 + lhMatch[0].length - 1; // position of '['
    const lhEnd = findMatchingBracket(content, lhStart);
    if (lhEnd === -1) continue;

    const lineHintsStr = content.slice(lhStart, lhEnd + 1);
    const lineHints = parseArray(lineHintsStr);
    if (!lineHints) continue;

    const targetLen = correctLines.length;
    const currentLen = lineHints.length;

    if (targetLen === currentLen) continue;

    // Find holeyCode for this exercise (look backwards)
    const beforeCL = content.slice(0, match.index);
    const holeyMatch = beforeCL.match(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"\s*,\s*$/s);

    let holeyLines = [];
    if (holeyMatch) {
      const holeyCode = holeyMatch[1]
        .replace(/\\n/g, '\n')
        .replace(/\\"/g, '"')
        .replace(/\\\\/g, '\\');
      holeyLines = holeyCode.split('\n');
    }

    // Build new hints array
    const newHints = [];
    for (let i = 0; i < targetLen; i++) {
      const holeyLine = holeyLines[i] || '';
      const hasHole = holeyLine.includes('___');

      if (hasHole && i < currentLen && lineHints[i] !== null) {
        newHints.push(lineHints[i]);
      } else {
        newHints.push(null);
      }
    }

    // Format new hints array
    const newHintsStr = JSON.stringify(newHints, null, 10)
      .split('\n')
      .map((line, idx) => idx === 0 ? line : '        ' + line)
      .join('\n');

    // Replace in content
    content = content.slice(0, lhStart) + newHintsStr + content.slice(lhEnd + 1);
    modified = true;

    // Reset regex to start from beginning due to content change
    correctLinesPattern.lastIndex = 0;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  return false;
}

const files = fs.readdirSync(lessonsDir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts');

let fixedCount = 0;
for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  console.log(`Processing: ${file}`);
  try {
    if (fixFile(filePath)) {
      console.log(`  Fixed: ${file}`);
      fixedCount++;
    }
  } catch (e) {
    console.log(`  Error: ${e.message}`);
  }
}

console.log(`\nTotal files fixed: ${fixedCount}`);

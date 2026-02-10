import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';

function extractOutputTarget(nextLine) {
  let m = nextLine.match(/printf\s*\([^,]+,\s*\*?\(?(\w+)/);
  if (m) return m[1];

  m = nextLine.match(/fmt\.Print(?:ln|f)?\s*\(\s*(\w+)\s*\)/);
  if (m) return m[1];

  m = nextLine.match(/fmt\.Printf\s*\([^,]+,\s*(\w+)/);
  if (m) return m[1];

  m = nextLine.match(/System\.out\.println\s*\(\s*(\w+)\s*\)/);
  if (m) return m[1];

  m = nextLine.match(/println\s*\(\s*(\w+)\s*\)/);
  if (m) return m[1];

  m = nextLine.match(/echo\s+(\$?\w+)/);
  if (m) return m[1];

  m = nextLine.match(/println!\s*\([^,]+,\s*(\w+)/);
  if (m) return m[1];

  m = nextLine.match(/print\s*\(\s*(\w+)\s*\)/);
  if (m) return m[1];

  m = nextLine.match(/cout\s*<<\s*(\w+)/);
  if (m) return m[1];

  m = nextLine.match(/___\s*\([^,]+,\s*\*?\(?(\w+)/);
  if (m && m[1] !== '___') return m[1];

  return null;
}

function parseArrayElements(arrayContent) {
  const elements = [];
  let inString = false;
  let current = '';
  let i = 0;

  while (i < arrayContent.length) {
    const c = arrayContent[i];
    const next = arrayContent[i + 1];

    if (!inString) {
      if (c === '"') {
        inString = true;
        i++;
        continue;
      }
      i++;
      continue;
    }

    if (c === '\\' && (next === '"' || next === '\\')) {
      current += c + next;
      i += 2;
      continue;
    }
    if (c === '"') {
      elements.push(current);
      current = '';
      inString = false;
      i++;
      continue;
    }
    current += c;
    i++;
  }

  return elements;
}

// Find correctLines arrays with proper bracket counting
function findCorrectLinesArrays(content) {
  const results = [];
  const pattern = /"correctLines":\s*\[/g;
  let match;

  while ((match = pattern.exec(content)) !== null) {
    const arrayStart = content.indexOf('[', match.index);
    let depth = 1;
    let i = arrayStart + 1;
    let inString = false;
    let escaped = false;

    while (depth > 0 && i < content.length) {
      const c = content[i];

      if (escaped) {
        escaped = false;
        i++;
        continue;
      }

      if (c === '\\') {
        escaped = true;
        i++;
        continue;
      }

      if (c === '"') {
        inString = !inString;
        i++;
        continue;
      }

      if (!inString) {
        if (c === '[') depth++;
        else if (c === ']') depth--;
      }

      i++;
    }

    const arrayEnd = i;
    const fullMatch = content.substring(match.index, arrayEnd);
    const arrayContent = content.substring(arrayStart + 1, arrayEnd - 1);

    if (arrayContent.includes('// 出力')) {
      results.push({
        start: match.index,
        end: arrayEnd,
        fullMatch,
        arrayContent
      });
    }
  }

  return results;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let totalFixed = 0;

  // STEP 1: Find all correctLines arrays with // 出力
  const matches = findCorrectLinesArrays(content);

  // Process in REVERSE order to preserve indices
  for (let i = matches.length - 1; i >= 0; i--) {
    const m = matches[i];
    const elements = parseArrayElements(m.arrayContent);

    let changed = false;
    let count = 0;

    for (let j = 0; j < elements.length - 1; j++) {
      const trimmed = elements[j].trim();
      if (trimmed === '// 出力') {
        const target = extractOutputTarget(elements[j + 1]);
        if (target) {
          const indent = elements[j].match(/^(\s*)/)?.[1] || '';
          elements[j] = indent + '// ' + target + 'を出力';
          changed = true;
          count++;
        }
      }
    }

    if (changed) {
      const newArray = '"correctLines": [\n          ' + elements.map(e => '"' + e + '"').join(',\n          ') + '\n        ]';
      content = content.substring(0, m.start) + newArray + content.substring(m.end);
      totalFixed += count;
    }
  }

  // STEP 2: Fix holeyCode and correctCode
  for (const fieldName of ['holeyCode', 'correctCode']) {
    const fieldRegex = new RegExp(`("${fieldName}":\\s*")([^"]*(?:\\\\.[^"]*)*)(")`, 'g');
    const fieldMatches = [];
    let fm;

    while ((fm = fieldRegex.exec(content)) !== null) {
      if (fm[2].includes('// 出力')) {
        fieldMatches.push({
          start: fm.index,
          end: fm.index + fm[0].length,
          prefix: fm[1],
          value: fm[2],
          suffix: fm[3]
        });
      }
    }

    // Process in reverse
    for (let i = fieldMatches.length - 1; i >= 0; i--) {
      const m = fieldMatches[i];
      const lines = m.value.split('\\n');
      let changed = false;

      for (let j = 0; j < lines.length - 1; j++) {
        const trimmed = lines[j].trim();
        if (trimmed === '// 出力') {
          const target = extractOutputTarget(lines[j + 1]);
          if (target) {
            const indent = lines[j].match(/^(\s*)/)?.[1] || '';
            lines[j] = indent + '// ' + target + 'を出力';
            changed = true;
            totalFixed++;
          }
        }
      }

      if (changed) {
        const newField = m.prefix + lines.join('\\n') + m.suffix;
        content = content.substring(0, m.start) + newField + content.substring(m.end);
      }
    }
  }

  if (totalFixed > 0) {
    fs.writeFileSync(filePath, content);
  }

  return totalFixed;
}

// Main
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));
let grandTotal = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  const fixed = processFile(filePath);
  if (fixed > 0) {
    console.log(`${file}: Fixed ${fixed}`);
    grandTotal += fixed;
  }
}

console.log(`\nTotal fixed: ${grandTotal}`);

// Verify
let remaining = 0;
for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const matches = content.match(/\/\/ 出力(?![\u3040-\u30ff\u4e00-\u9faf])/g);
  if (matches) {
    remaining += matches.length;
    console.log(`  ${file}: ${matches.length} remaining`);
  }
}
console.log(`Remaining: ${remaining}`);

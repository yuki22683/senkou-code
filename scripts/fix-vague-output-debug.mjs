import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';

function extractOutputTarget(nextLine) {
  let m = nextLine.match(/printf\s*\([^,]+,\s*\*?\(?(\w+)/);
  if (m) return m[1];

  m = nextLine.match(/printf\s*\(\\+\"([^\\]+?)\\+\"\s*\)/);
  if (m) {
    const str = m[1].replace(/\\n$/, '').replace(/\\\\n$/, '');
    if (str && str.length < 20) return `「${str}」`;
  }

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

// Only process c2.ts for debugging
const filePath = 'data/lessons/c2.ts';
let content = fs.readFileSync(filePath, 'utf8');

console.log('Processing c2.ts...');

// Process correctLines
const regex = /("correctLines":\s*\[)([\s\S]*?)(\])/g;
let match;
let modifiedCount = 0;

while ((match = regex.exec(content)) !== null) {
  const prefix = match[1];
  const arrayContent = match[2];
  const suffix = match[3];

  if (!arrayContent.includes('// 出力')) continue;

  console.log('\n=== Found correctLines with // 出力 ===');
  console.log('Match index:', match.index);

  // Parse elements
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

  console.log('Parsed', elements.length, 'elements');

  // Find and fix vague comments
  let changed = false;
  for (let j = 0; j < elements.length - 1; j++) {
    const trimmed = elements[j].trim();
    if (trimmed === '// 出力') {
      console.log('\nFound // 出力 at index', j);
      console.log('Element:', JSON.stringify(elements[j]));
      console.log('Next:', JSON.stringify(elements[j + 1]).substring(0, 80));

      const target = extractOutputTarget(elements[j + 1]);
      console.log('Extracted target:', target);

      if (target) {
        const indent = elements[j].match(/^(\s*)/)?.[1] || '';
        const newValue = indent + '// ' + target + 'を出力';
        console.log('Old:', elements[j]);
        console.log('New:', newValue);
        elements[j] = newValue;
        changed = true;
        modifiedCount++;
      }
    }
  }

  if (changed) {
    console.log('\nRebuilding array...');
    const newArray = prefix + '\n          ' + elements.map(e => '"' + e + '"').join(',\n          ') + '\n        ' + suffix;
    console.log('New array length:', newArray.length);

    // Actually do the replacement
    const oldFull = match[0];
    console.log('Old match length:', oldFull.length);
    content = content.substring(0, match.index) + newArray + content.substring(match.index + oldFull.length);

    // Reset regex lastIndex because content changed
    regex.lastIndex = match.index + newArray.length;
  }
}

console.log('\n\nTotal modified:', modifiedCount);

// Write back
fs.writeFileSync(filePath, content);

// Verify
const remaining = content.match(/"    \/\/ 出力"/g)?.length || 0;
console.log('Remaining "// 出力" in correctLines:', remaining);

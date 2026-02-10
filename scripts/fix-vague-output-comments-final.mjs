import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';

// Extract the variable/expression being printed - works with RAW file content (escaped format)
function extractOutputTarget(nextLine) {
  // C/C++ printf - the format is printf(\\\"%d\\n\\\", variable)
  // Match pattern with escaped quotes: \\" or \\\" in file
  let m = nextLine.match(/printf\s*\([^,]+,\s*\*?\(?(\w+)/);
  if (m) return m[1];

  // C/C++ printf with just string literal - pattern is printf(\\\"text\\\")
  m = nextLine.match(/printf\s*\(\\+\"([^\\]+?)\\+\"\s*\)/);
  if (m) {
    const str = m[1].replace(/\\n$/, '').replace(/\\\\n$/, '');
    if (str && str.length < 20) return `「${str}」`;
  }

  // Go fmt.Print/Println with variable
  m = nextLine.match(/fmt\.Print(?:ln|f)?\s*\(\s*(\w+)\s*\)/);
  if (m) return m[1];

  m = nextLine.match(/fmt\.Printf\s*\([^,]+,\s*(\w+)/);
  if (m) return m[1];

  // Java System.out.println with variable
  m = nextLine.match(/System\.out\.println\s*\(\s*(\w+)\s*\)/);
  if (m) return m[1];

  m = nextLine.match(/System\.out\.println\s*\([^)]+\"([^"\\]+)\"/);
  if (m && m[1].length < 20) return `「${m[1]}」`;

  // Kotlin println
  m = nextLine.match(/println\s*\(\s*(\w+)\s*\)/);
  if (m) return m[1];

  m = nextLine.match(/println\s*\([^)]+\"([^"\\]+)\"/);
  if (m && m[1].length < 20) return `「${m[1]}」`;

  // PHP echo
  m = nextLine.match(/echo\s+(\$?\w+)/);
  if (m) return m[1];

  // Rust println!
  m = nextLine.match(/println!\s*\([^,]+,\s*(\w+)/);
  if (m) return m[1];

  m = nextLine.match(/println!\s*\([^)]+\"([^"{}\[\]\\]+)\"/);
  if (m && m[1].length < 20) return `「${m[1]}」`;

  // Swift print
  m = nextLine.match(/print\s*\(\s*(\w+)\s*\)/);
  if (m) return m[1];

  // C++ cout
  m = nextLine.match(/cout\s*<<\s*(\w+)/);
  if (m) return m[1];

  // For holeyCode with ___ placeholders
  m = nextLine.match(/___\s*\([^,]+,\s*\*?\(?(\w+)/);
  if (m && m[1] !== '___') return m[1];

  return null;
}

// Process correctLines - parse the array and fix comments
function processCorrectLines(content) {
  let modified = false;
  let count = 0;

  // Find each correctLines array
  const regex = /("correctLines":\s*\[)([\s\S]*?)(\])/g;

  content = content.replace(regex, (fullMatch, prefix, arrayContent, suffix) => {
    // Parse the array elements - handle escaped quotes properly
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

      // In string
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

    // Fix vague comments
    let changed = false;
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
      modified = true;
      return prefix + '\n          ' + elements.map(e => '"' + e + '"').join(',\n          ') + '\n        ' + suffix;
    }
    return fullMatch;
  });

  return { content, modified, count };
}

// Process holeyCode and correctCode - these use \\n as line separator
function processCodeField(content, fieldName) {
  let modified = false;
  let count = 0;

  const regex = new RegExp(`("${fieldName}":\\s*")([^"]*(?:\\\\.[^"]*)*)(")`, 'g');

  content = content.replace(regex, (fullMatch, prefix, value, suffix) => {
    // Split by literal \\n (two chars: backslash + n) as stored in the file
    // In regex, we need \\\\ to match a single backslash, and n to match n
    // But the file has \\n which when read is backslash-n
    // Actually when read, \\ in file becomes \ in JS string, and n stays n
    // So we split on the pattern backslash-n

    // Note: the file contains \\n as two chars (5c 6e), so we match that
    const lines = value.split('\\n');
    let changed = false;

    for (let i = 0; i < lines.length - 1; i++) {
      const trimmed = lines[i].trim();
      if (trimmed === '// 出力') {
        const target = extractOutputTarget(lines[i + 1]);
        if (target) {
          const indent = lines[i].match(/^(\s*)/)?.[1] || '';
          lines[i] = indent + '// ' + target + 'を出力';
          changed = true;
          count++;
        }
      }
    }

    if (changed) {
      modified = true;
      return prefix + lines.join('\\n') + suffix;
    }
    return fullMatch;
  });

  return { content, modified, count };
}

// Main
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));
let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let fileCount = 0;

  // Process correctLines
  let result = processCorrectLines(content);
  if (result.modified) {
    content = result.content;
    fileCount += result.count;
  }

  // Process holeyCode
  result = processCodeField(content, 'holeyCode');
  if (result.modified) {
    content = result.content;
    fileCount += result.count;
  }

  // Process correctCode
  result = processCodeField(content, 'correctCode');
  if (result.modified) {
    content = result.content;
    fileCount += result.count;
  }

  if (fileCount > 0) {
    fs.writeFileSync(filePath, content);
    console.log(`${file}: Fixed ${fileCount} vague output comments`);
    totalFixed += fileCount;
  }
}

console.log(`\nTotal fixed: ${totalFixed}`);

// Verify
let remaining = 0;
for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const matches = content.match(/"\/\/ 出力"|\/\/ 出力(?![\u3040-\u30ff\u4e00-\u9faf])/g);
  if (matches) {
    remaining += matches.length;
    if (matches.length > 0) {
      console.log(`  ${file}: ${matches.length} remaining`);
    }
  }
}
console.log(`\nRemaining: ${remaining}`);

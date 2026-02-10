import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const backslashN = String.fromCharCode(92, 110); // \n as literal

// Extract the variable/expression being printed from the next line
function extractOutputTarget(nextLine) {
  // C/C++ printf
  let m = nextLine.match(/printf\s*\(\s*"([^"]+)"\s*,\s*(\w+)/);
  if (m) return m[2];

  m = nextLine.match(/printf\s*\(\s*"([^"]+)"\s*\)/);
  if (m) {
    // Just a string literal like printf("合格\n")
    const str = m[1].replace(/\\n$/, '').replace(/\\n/g, '');
    if (str) return `「${str}」`;
  }

  // Go fmt.Print/Println
  m = nextLine.match(/fmt\.Print(?:ln|f)?\s*\(\s*(\w+)\s*\)/);
  if (m) return m[1];

  m = nextLine.match(/fmt\.Printf\s*\([^,]+,\s*(\w+)/);
  if (m) return m[1];

  // Java System.out.println
  m = nextLine.match(/System\.out\.println\s*\(\s*(\w+)\s*\)/);
  if (m) return m[1];

  m = nextLine.match(/System\.out\.println\s*\(\s*"([^"]+)"\s*\)/);
  if (m) return `「${m[1]}」`;

  // Kotlin println
  m = nextLine.match(/println\s*\(\s*(\w+)\s*\)/);
  if (m) return m[1];

  m = nextLine.match(/println\s*\(\s*"([^"]+)"\s*\)/);
  if (m) return `「${m[1]}」`;

  // PHP echo
  m = nextLine.match(/echo\s+(\$\w+)/);
  if (m) return m[1];

  m = nextLine.match(/echo\s+"([^"]+)"/);
  if (m) return `「${m[1]}」`;

  m = nextLine.match(/echo\s+'([^']+)'/);
  if (m) return `「${m[1]}」`;

  // Rust println!
  m = nextLine.match(/println!\s*\(\s*"\{\}"\s*,\s*(\w+)/);
  if (m) return m[1];

  m = nextLine.match(/println!\s*\(\s*"\{:\?\}"\s*,\s*(\w+)/);
  if (m) return m[1];

  m = nextLine.match(/println!\s*\(\s*"([^{}]+)"\s*\)/);
  if (m) return `「${m[1]}」`;

  // Swift print
  m = nextLine.match(/print\s*\(\s*(\w+)\s*\)/);
  if (m) return m[1];

  m = nextLine.match(/print\s*\(\s*"([^"]+)"\s*\)/);
  if (m) return `「${m[1]}」`;

  // C++ cout
  m = nextLine.match(/cout\s*<<\s*(\w+)/);
  if (m) return m[1];

  m = nextLine.match(/cout\s*<<\s*"([^"]+)"/);
  if (m) return `「${m[1]}」`;

  return null;
}

// Process a field that contains \\n escaped newlines
function processEscapedField(content, fieldName) {
  const regex = new RegExp(`"${fieldName}":\\s*"`, 'g');
  let modified = false;
  let match;

  while ((match = regex.exec(content)) !== null) {
    const startIdx = match.index + match[0].length;
    let endIdx = startIdx;
    let depth = 0;
    let escaped = false;

    // Find the end of the string
    for (let i = startIdx; i < content.length; i++) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (content[i] === '\\') {
        escaped = true;
        continue;
      }
      if (content[i] === '"') {
        endIdx = i;
        break;
      }
    }

    const fieldValue = content.substring(startIdx, endIdx);
    const lines = fieldValue.split(backslashN);
    let changed = false;

    for (let i = 0; i < lines.length - 1; i++) {
      const trimmed = lines[i].trim();
      if (trimmed === '// 出力') {
        const nextLine = lines[i + 1];
        const target = extractOutputTarget(nextLine);
        if (target) {
          const indent = lines[i].match(/^(\s*)/)[1];
          lines[i] = indent + '// ' + target + 'を出力';
          changed = true;
        }
      }
    }

    if (changed) {
      const newValue = lines.join(backslashN);
      content = content.substring(0, startIdx) + newValue + content.substring(endIdx);
      modified = true;
      regex.lastIndex = startIdx + newValue.length + 1;
    }
  }

  return { content, modified };
}

// Process correctLines array
function processCorrectLines(content) {
  const regex = /"correctLines":\s*\[/g;
  let modified = false;
  let match;

  while ((match = regex.exec(content)) !== null) {
    const startIdx = match.index + match[0].length;
    let depth = 1;
    let endIdx = startIdx;
    let inString = false;
    let escaped = false;

    // Find the matching ]
    for (let i = startIdx; i < content.length && depth > 0; i++) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (content[i] === '\\') {
        escaped = true;
        continue;
      }
      if (content[i] === '"') {
        inString = !inString;
        continue;
      }
      if (!inString) {
        if (content[i] === '[') depth++;
        else if (content[i] === ']') {
          depth--;
          if (depth === 0) endIdx = i;
        }
      }
    }

    const arrayContent = content.substring(startIdx, endIdx);

    // Parse the array elements
    const items = [];
    let current = '';
    inString = false;
    escaped = false;

    for (const c of arrayContent) {
      if (escaped) {
        current += c;
        escaped = false;
        continue;
      }
      if (c === '\\') {
        current += c;
        escaped = true;
        continue;
      }
      if (c === '"') {
        if (inString) {
          items.push(current);
          current = '';
          inString = false;
        } else {
          inString = true;
        }
        continue;
      }
      if (inString) {
        current += c;
      }
    }

    // Fix vague comments
    let changed = false;
    for (let i = 0; i < items.length - 1; i++) {
      const trimmed = items[i].trim();
      if (trimmed === '// 出力') {
        const nextLine = items[i + 1];
        const target = extractOutputTarget(nextLine);
        if (target) {
          const indent = items[i].match(/^(\s*)/)[1];
          items[i] = indent + '// ' + target + 'を出力';
          changed = true;
        }
      }
    }

    if (changed) {
      modified = true;
      const newArrayContent = '\n          ' + items.map(i => '"' + i + '"').join(',\n          ') + '\n        ';
      content = content.substring(0, startIdx) + newArrayContent + content.substring(endIdx);
      regex.lastIndex = startIdx + newArrayContent.length;
    }
  }

  return { content, modified };
}

// Main processing
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));
let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let fileModified = false;
  let count = 0;

  // Count before
  const beforeCount = (content.match(/"\/\/ 出力"/g) || []).length;

  // Process correctCode
  let result = processEscapedField(content, 'correctCode');
  if (result.modified) {
    content = result.content;
    fileModified = true;
  }

  // Process holeyCode
  result = processEscapedField(content, 'holeyCode');
  if (result.modified) {
    content = result.content;
    fileModified = true;
  }

  // Process correctLines
  result = processCorrectLines(content);
  if (result.modified) {
    content = result.content;
    fileModified = true;
  }

  // Count after
  const afterCount = (content.match(/"\/\/ 出力"/g) || []).length;
  count = beforeCount - afterCount;

  if (fileModified && count > 0) {
    fs.writeFileSync(filePath, content);
    console.log(`${file}: Fixed ${count} vague output comments`);
    totalFixed += count;
  }
}

console.log(`\nTotal fixed: ${totalFixed}`);

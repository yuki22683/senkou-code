import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';

// Extract the variable/expression being printed from the next line
function extractOutputTarget(nextLine) {
  // C/C++ printf with variable
  let m = nextLine.match(/printf\s*\(\s*\\?"[^"]*\\?"\s*,\s*\*?(\w+)/);
  if (m) return m[1];

  // C/C++ printf with just string literal
  m = nextLine.match(/printf\s*\(\s*\\?"([^"\\]+)\\?"\s*\)/);
  if (m) {
    const str = m[1].replace(/\\n$/, '').replace(/\\\\n$/, '');
    if (str && str.length < 20) return `「${str}」`;
  }

  // Go fmt.Print/Println
  m = nextLine.match(/fmt\.Print(?:ln|f)?\s*\(\s*(\w+)\s*\)/);
  if (m) return m[1];

  m = nextLine.match(/fmt\.Printf\s*\([^,]+,\s*(\w+)/);
  if (m) return m[1];

  // Java System.out.println
  m = nextLine.match(/System\.out\.println\s*\(\s*(\w+)\s*\)/);
  if (m) return m[1];

  m = nextLine.match(/System\.out\.println\s*\(\s*\\?"([^"\\]+)\\?"\s*\)/);
  if (m) return `「${m[1]}」`;

  // Kotlin println
  m = nextLine.match(/println\s*\(\s*(\w+)\s*\)/);
  if (m) return m[1];

  m = nextLine.match(/println\s*\(\s*\\?"([^"\\]+)\\?"\s*\)/);
  if (m) return `「${m[1]}」`;

  // PHP echo
  m = nextLine.match(/echo\s+(\$?\w+)/);
  if (m) return m[1];

  m = nextLine.match(/echo\s+\\?"([^"\\]+)\\?"/);
  if (m) return `「${m[1]}」`;

  m = nextLine.match(/echo\s+'([^']+)'/);
  if (m) return `「${m[1]}」`;

  // Rust println!
  m = nextLine.match(/println!\s*\(\s*\\?"\{[^}]*\}\\?"\s*,\s*(\w+)/);
  if (m) return m[1];

  m = nextLine.match(/println!\s*\(\s*\\?"([^{}\\]+)\\?"\s*\)/);
  if (m) return `「${m[1]}」`;

  // Swift print
  m = nextLine.match(/print\s*\(\s*(\w+)\s*\)/);
  if (m) return m[1];

  m = nextLine.match(/print\s*\(\s*\\?"([^"\\]+)\\?"\s*\)/);
  if (m) return `「${m[1]}」`;

  // C++ cout
  m = nextLine.match(/cout\s*<<\s*(\w+)/);
  if (m) return m[1];

  m = nextLine.match(/cout\s*<<\s*\\?"([^"\\]+)\\?"/);
  if (m) return `「${m[1]}」`;

  return null;
}

// Process the entire file content
function processFile(content) {
  let modified = false;
  let count = 0;

  // Pattern 1: In correctCode/holeyCode as "// 出力\\n" or "// 出力\n"
  content = content.replace(/(\/\/ 出力)(\\n|\n)(\s*)([\w_]+\s*\(|printf|fmt\.|System\.out|println|echo|print\s*\(|cout)/g, (match, comment, newline, indent, nextPart) => {
    // Try to find the full next line
    return match; // For now, can't easily get next line context
  });

  // Pattern 2: In correctLines array - fix each occurrence
  // Match "    // 出力", followed by the next array element
  const correctLinesRegex = /("correctLines":\s*\[[\s\S]*?\])/g;
  content = content.replace(correctLinesRegex, (arrayMatch) => {
    // Parse the array more carefully
    const lines = [];
    let inString = false;
    let current = '';
    let escaped = false;
    let i = arrayMatch.indexOf('[') + 1;

    while (i < arrayMatch.length) {
      const c = arrayMatch[i];
      if (escaped) {
        current += c;
        escaped = false;
        i++;
        continue;
      }
      if (c === '\\') {
        current += c;
        escaped = true;
        i++;
        continue;
      }
      if (c === '"') {
        if (inString) {
          lines.push(current);
          current = '';
          inString = false;
        } else {
          inString = true;
        }
        i++;
        continue;
      }
      if (c === ']' && !inString) {
        break;
      }
      if (inString) {
        current += c;
      }
      i++;
    }

    // Now fix vague comments
    let changed = false;
    for (let j = 0; j < lines.length - 1; j++) {
      const trimmed = lines[j].trim();
      if (trimmed === '// 出力') {
        const nextLine = lines[j + 1];
        const target = extractOutputTarget(nextLine);
        if (target) {
          const indentMatch = lines[j].match(/^(\s*)/);
          const indent = indentMatch ? indentMatch[1] : '';
          lines[j] = indent + '// ' + target + 'を出力';
          changed = true;
          count++;
        }
      }
    }

    if (changed) {
      modified = true;
      // Rebuild the array
      return '"correctLines": [\n          ' + lines.map(l => '"' + l + '"').join(',\n          ') + '\n        ]';
    }
    return arrayMatch;
  });

  // Pattern 3: Fix in correctCode and holeyCode strings
  // These are escaped strings containing \\n as line separator
  ['correctCode', 'holeyCode'].forEach(field => {
    const fieldRegex = new RegExp(`("${field}":\\s*")([^"]*(?:\\\\.[^"]*)*)(")`, 'g');
    content = content.replace(fieldRegex, (match, prefix, value, suffix) => {
      // Split by \\n (literal backslash-n in the string)
      const parts = value.split('\\n');
      let changed = false;

      for (let j = 0; j < parts.length - 1; j++) {
        const trimmed = parts[j].trim();
        if (trimmed === '// 出力') {
          const nextPart = parts[j + 1];
          const target = extractOutputTarget(nextPart);
          if (target) {
            const indentMatch = parts[j].match(/^(\s*)/);
            const indent = indentMatch ? indentMatch[1] : '';
            parts[j] = indent + '// ' + target + 'を出力';
            changed = true;
            count++;
          }
        }
      }

      if (changed) {
        modified = true;
        return prefix + parts.join('\\n') + suffix;
      }
      return match;
    });
  });

  return { content, modified, count };
}

// Main processing
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));
let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  const result = processFile(content);

  if (result.modified) {
    fs.writeFileSync(filePath, result.content);
    console.log(`${file}: Fixed ${result.count} vague output comments`);
    totalFixed += result.count;
  }
}

console.log(`\nTotal fixed: ${totalFixed}`);

// Verify remaining
const remaining = files.reduce((sum, file) => {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const matches = content.match(/\/\/ 出力(?![\u3040-\u30ff\u4e00-\u9faf])/g);
  return sum + (matches ? matches.length : 0);
}, 0);
console.log(`Remaining: ${remaining}`);

import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';

// Extract the variable/expression being printed from the next line
function extractOutputTarget(nextLine) {
  const cleanLine = nextLine.replace(/\\\\/g, '\\').replace(/\\"/g, '"');

  // C/C++ printf with variable
  let m = cleanLine.match(/printf\s*\(\s*"[^"]*"\s*,\s*\*?(\w+)/);
  if (m) return m[1];

  // C/C++ printf with format and *expr
  m = cleanLine.match(/printf\s*\(\s*"[^"]*"\s*,\s*\*\((\w+)/);
  if (m) return m[1];

  // C/C++ printf with just string literal
  m = cleanLine.match(/printf\s*\(\s*"([^"\\%]+)"/);
  if (m && m[1].length < 20) return `「${m[1]}」`;

  // Go fmt.Print/Println with variable
  m = cleanLine.match(/fmt\.Print(?:ln|f)?\s*\(\s*(\w+)\s*\)/);
  if (m) return m[1];

  m = cleanLine.match(/fmt\.Printf\s*\([^,]+,\s*(\w+)/);
  if (m) return m[1];

  // Java System.out.println with variable
  m = cleanLine.match(/System\.out\.println\s*\(\s*(\w+)\s*\)/);
  if (m) return m[1];

  m = cleanLine.match(/System\.out\.println\s*\(\s*"([^"]+)"\s*\)/);
  if (m && m[1].length < 20) return `「${m[1]}」`;

  // Kotlin println
  m = cleanLine.match(/println\s*\(\s*(\w+)\s*\)/);
  if (m) return m[1];

  m = cleanLine.match(/println\s*\(\s*"([^"]+)"\s*\)/);
  if (m && m[1].length < 20) return `「${m[1]}」`;

  // PHP echo
  m = cleanLine.match(/echo\s+(\$?\w+)/);
  if (m) return m[1];

  m = cleanLine.match(/echo\s+"([^"]+)"/);
  if (m && m[1].length < 20) return `「${m[1]}」`;

  // Rust println!
  m = cleanLine.match(/println!\s*\(\s*"\{[^}]*\}"\s*,\s*(\w+)/);
  if (m) return m[1];

  m = cleanLine.match(/println!\s*\(\s*"([^{}]+)"\s*\)/);
  if (m && m[1].length < 20) return `「${m[1]}」`;

  // Swift print
  m = cleanLine.match(/print\s*\(\s*(\w+)\s*\)/);
  if (m) return m[1];

  // C++ cout
  m = cleanLine.match(/cout\s*<<\s*(\w+)/);
  if (m) return m[1];

  // For ___(, ___, ___) - holeyCode pattern with placeholders
  m = cleanLine.match(/___\s*\(\s*"[^"]*"\s*,\s*\*?(\w+)/);
  if (m) return m[1];

  m = cleanLine.match(/___\s*\(\s*"[^"]*"\s*,\s*\*\((\w+)/);
  if (m) return m[1];

  return null;
}

// Main processing
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));
let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let count = 0;

  // STEP 1: Fix correctLines arrays
  // Find each correctLines array and process it
  let newContent = content;
  const correctLinesRegex = /"correctLines":\s*\[([\s\S]*?)\]/g;
  let arrayMatch;

  while ((arrayMatch = correctLinesRegex.exec(content)) !== null) {
    const fullMatch = arrayMatch[0];
    const arrayContent = arrayMatch[1];

    // Parse elements more carefully
    const elements = [];
    let inString = false;
    let current = '';
    let escaped = false;

    for (let i = 0; i < arrayContent.length; i++) {
      const c = arrayContent[i];
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
          elements.push(current);
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

    // Fix vague comments in elements
    let arrayChanged = false;
    for (let i = 0; i < elements.length - 1; i++) {
      const trimmed = elements[i].trim();
      if (trimmed === '// 出力') {
        const nextEl = elements[i + 1];
        const target = extractOutputTarget(nextEl);
        if (target) {
          const indentMatch = elements[i].match(/^(\s*)/);
          const indent = indentMatch ? indentMatch[1] : '';
          elements[i] = indent + '// ' + target + 'を出力';
          arrayChanged = true;
          count++;
        }
      }
    }

    if (arrayChanged) {
      modified = true;
      const newArray = '"correctLines": [\n          ' +
        elements.map(e => '"' + e + '"').join(',\n          ') +
        '\n        ]';
      newContent = newContent.replace(fullMatch, newArray);
    }
  }

  content = newContent;

  // STEP 2: Fix holeyCode and correctCode
  // Pattern: "// 出力\\n" followed by line with printf/etc
  const codeFields = ['holeyCode', 'correctCode'];
  for (const field of codeFields) {
    const fieldRegex = new RegExp(`("${field}":\\s*")([^"]*(?:\\\\.[^"]*)*)(")`, 'g');

    content = content.replace(fieldRegex, (match, prefix, value, suffix) => {
      // Split by \\n
      const parts = value.split('\\n');
      let fieldChanged = false;

      for (let i = 0; i < parts.length - 1; i++) {
        const trimmed = parts[i].trim();
        if (trimmed === '// 出力') {
          const nextPart = parts[i + 1];
          const target = extractOutputTarget(nextPart);
          if (target) {
            const indentMatch = parts[i].match(/^(\s*)/);
            const indent = indentMatch ? indentMatch[1] : '';
            parts[i] = indent + '// ' + target + 'を出力';
            fieldChanged = true;
            count++;
          }
        }
      }

      if (fieldChanged) {
        modified = true;
        return prefix + parts.join('\\n') + suffix;
      }
      return match;
    });
  }

  // STEP 3: Handle mixed literal newlines in holeyCode
  // Some files have actual \n mixed with \\n
  content = content.replace(/"holeyCode":\s*"([^"]*(?:\\.[^"]*)*)"/g, (match, value) => {
    // Check for actual newlines (not \\n)
    if (!value.includes('\n')) return match;

    // Split by actual newlines OR \\n
    const lines = [];
    let current = '';
    let i = 0;
    while (i < value.length) {
      if (value[i] === '\n') {
        lines.push(current);
        current = '';
        i++;
      } else if (value[i] === '\\' && value[i + 1] === 'n') {
        lines.push(current);
        current = '';
        i += 2;
      } else {
        current += value[i];
        i++;
      }
    }
    if (current) lines.push(current);

    // Fix vague comments
    let fieldChanged = false;
    for (let j = 0; j < lines.length - 1; j++) {
      const trimmed = lines[j].trim();
      if (trimmed === '// 出力') {
        const nextLine = lines[j + 1];
        const target = extractOutputTarget(nextLine);
        if (target) {
          const indentMatch = lines[j].match(/^(\s*)/);
          const indent = indentMatch ? indentMatch[1] : '';
          lines[j] = indent + '// ' + target + 'を出力';
          fieldChanged = true;
          count++;
        }
      }
    }

    if (fieldChanged) {
      modified = true;
      // Rebuild with \\n separators
      return '"holeyCode": "' + lines.join('\\n') + '"';
    }
    return match;
  });

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`${file}: Fixed ${count} vague output comments`);
    totalFixed += count;
  }
}

console.log(`\nTotal fixed: ${totalFixed}`);

// Verify remaining
let remaining = 0;
for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const matches = content.match(/\/\/ 出力(?![ぁ-んァ-ン一-龯])/g);
  if (matches) {
    remaining += matches.length;
    if (matches.length > 0) {
      console.log(`  ${file}: ${matches.length} remaining`);
    }
  }
}
console.log(`\nRemaining total: ${remaining}`);

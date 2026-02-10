import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';

// Extract the variable/expression being printed from the next line
function extractOutputTarget(nextLine) {
  // Remove escapes first
  const cleanLine = nextLine.replace(/\\\\/g, '\\').replace(/\\"/g, '"');

  // C/C++ printf with variable
  let m = cleanLine.match(/printf\s*\(\s*"[^"]*"\s*,\s*\*?(\w+)/);
  if (m) return m[1];

  // C/C++ printf with just string literal
  m = cleanLine.match(/printf\s*\(\s*"([^"]+)"\s*\)/);
  if (m) {
    const str = m[1].replace(/\\n$/, '');
    if (str && str.length < 20) return `「${str}」`;
  }

  // Go fmt.Print/Println
  m = cleanLine.match(/fmt\.Print(?:ln|f)?\s*\(\s*(\w+)\s*\)/);
  if (m) return m[1];

  m = cleanLine.match(/fmt\.Printf\s*\([^,]+,\s*(\w+)/);
  if (m) return m[1];

  // Java System.out.println
  m = cleanLine.match(/System\.out\.println\s*\(\s*(\w+)\s*\)/);
  if (m) return m[1];

  m = cleanLine.match(/System\.out\.println\s*\(\s*"([^"]+)"\s*\)/);
  if (m) return `「${m[1]}」`;

  // Kotlin println
  m = cleanLine.match(/println\s*\(\s*(\w+)\s*\)/);
  if (m) return m[1];

  m = cleanLine.match(/println\s*\(\s*"([^"]+)"\s*\)/);
  if (m) return `「${m[1]}」`;

  // PHP echo
  m = cleanLine.match(/echo\s+(\$?\w+)/);
  if (m) return m[1];

  m = cleanLine.match(/echo\s+"([^"]+)"/);
  if (m) return `「${m[1]}」`;

  // Rust println!
  m = cleanLine.match(/println!\s*\(\s*"\{[^}]*\}"\s*,\s*(\w+)/);
  if (m) return m[1];

  m = cleanLine.match(/println!\s*\(\s*"([^{}]+)"\s*\)/);
  if (m) return `「${m[1]}」`;

  // Swift print
  m = cleanLine.match(/print\s*\(\s*(\w+)\s*\)/);
  if (m) return m[1];

  // C++ cout
  m = cleanLine.match(/cout\s*<<\s*(\w+)/);
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

  // Strategy: Simple string replacement
  // Find: "    // 出力",\n          "    printf(...)"
  // Replace the first line with specific comment

  // Handle correctLines - Find pattern where "// 出力" is followed by printf/println/etc
  const correctLinesPattern = /"(\s*)\/\/ 出力",\s*\n\s*"(\s*)(printf|fmt\.|System\.out|println|echo|cout|print\s*\()[^"]*"/g;

  content = content.replace(correctLinesPattern, (match, indent1, indent2, funcName) => {
    // Extract the full next line
    const nextLineMatch = match.match(/"(\s*)(printf|fmt\.|System\.out|println|echo|cout|print\s*\()[^"]*"/);
    if (!nextLineMatch) return match;

    const nextLine = nextLineMatch[0].slice(1, -1); // Remove quotes
    const target = extractOutputTarget(nextLine);

    if (target) {
      count++;
      modified = true;
      // Replace just the "// 出力" part
      return match.replace('"' + indent1 + '// 出力"', '"' + indent1 + '// ' + target + 'を出力"');
    }
    return match;
  });

  // Handle correctCode and holeyCode - pattern "// 出力\\n    printf(...)"
  const codePattern = /(\/\/ 出力)(\\n)(\s*)(printf|fmt\.|System\.out|println|echo|cout|print\()[^\\"]*/g;

  content = content.replace(codePattern, (match, comment, newline, indent, rest) => {
    const target = extractOutputTarget(indent + rest);
    if (target) {
      count++;
      modified = true;
      return '// ' + target + 'を出力' + newline + indent + rest;
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
  const matches = content.match(/"\/\/ 出力"/g);
  remaining += matches ? matches.length : 0;
}
console.log(`Remaining (in correctLines): ${remaining}`);

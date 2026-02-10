import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';

function findPrintfTarget(correctCodePart) {
  // Find what's being printed after // 出力 position
  const m = correctCodePart.match(/printf\s*\(\s*"([^"]+)"/);
  if (m) {
    const text = m[1].replace(/\\n$/, '');
    if (text.includes('%')) {
      // Has format specifier, find variable
      const varMatch = correctCodePart.match(/printf\s*\([^,]+,\s*([^)]+)\)/);
      if (varMatch) return varMatch[1].trim();
      return null;
    }
    return '「' + text + '」';
  }

  // Go/Rust/Java patterns
  const m2 = correctCodePart.match(/(?:fmt\.Print(?:ln|f)?|println!?|System\.out\.println)\s*\(\s*(\w+)/);
  if (m2) return m2[1];

  return null;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Find all exercises (objects with correctCode and holeyCode)
  const exerciseRegex = /\{\s*"orderIndex"[\s\S]*?"correctCode":\s*"([^"]*(?:\\.[^"]*)*)"/g;
  let match;

  while ((match = exerciseRegex.exec(content)) !== null) {
    const correctCode = match[1];

    // Find the corresponding holeyCode
    const holeyCodeStart = content.indexOf('"holeyCode":', match.index);
    if (holeyCodeStart === -1 || holeyCodeStart > match.index + 5000) continue;

    const holeyCodeQuoteStart = content.indexOf('"', holeyCodeStart + 12);
    const holeyCodeQuoteEnd = holeyCodeQuoteStart + 1;

    // Find end of holeyCode string
    let end = holeyCodeQuoteEnd;
    let escaped = false;
    while (end < content.length) {
      if (escaped) { escaped = false; end++; continue; }
      if (content[end] === '\\') { escaped = true; end++; continue; }
      if (content[end] === '"') break;
      end++;
    }

    let holeyCode = content.substring(holeyCodeQuoteEnd, end);

    // Check if holeyCode has // 出力 without specific target
    if (!holeyCode.includes('// 出力')) continue;

    // Parse both codes line by line
    const correctLines = correctCode.split('\\n');
    let newHoleyCode = holeyCode;

    // Find // 出力 in holeyCode and find corresponding line in correctCode
    // Match by position in the code structure

    // Simple approach: replace all // 出力 with more specific comments
    // by looking at what comes after in correctCode

    for (let i = 0; i < correctLines.length; i++) {
      const cLine = correctLines[i];
      if (cLine.includes('printf') || cLine.includes('println') || cLine.includes('fmt.Print')) {
        // Find what's being printed
        const target = findPrintfTarget(cLine);
        if (target) {
          // This line has a print statement, check if holeyCode has // 出力 before it
          // We replace any // 出力 with the specific target
          const fixedComment = '// ' + target + 'を出力';

          // Replace only the standalone // 出力, not ones that are already specific
          newHoleyCode = newHoleyCode.replace(
            /\/\/ 出力(?![ぁ-んァ-ン一-龥「」])/g,
            fixedComment
          );
        }
      }
    }

    if (newHoleyCode !== holeyCode) {
      // Also fix literal newlines
      newHoleyCode = newHoleyCode.replace(/\n/g, '\\n');

      content = content.substring(0, holeyCodeQuoteEnd) + newHoleyCode + content.substring(end);
      modified = true;
      console.log(`Fixed holeyCode in ${filePath}`);

      // Reset regex position since content changed
      exerciseRegex.lastIndex = 0;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
  }

  return modified;
}

// Main
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

for (const file of files) {
  processFile(path.join(dir, file));
}

console.log('\nDone!');

// Check remaining
let remaining = 0;
for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const matches = content.match(/\/\/ 出力(?![ぁ-んァ-ン一-龥「」])/g);
  if (matches) {
    remaining += matches.length;
  }
}
console.log(`Remaining: ${remaining}`);

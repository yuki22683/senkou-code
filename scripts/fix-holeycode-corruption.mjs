import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';

// Convert a line from correctLines to holeyCode format
function makeHoley(line) {
  // Comment lines stay the same
  if (line.trim().startsWith('//') || line.trim().startsWith('#')) {
    return line;
  }

  // Empty lines stay the same
  if (line.trim() === '') {
    return line;
  }

  // Replace identifiers and literals with ___
  // This is a simplified version - might need refinement

  // Get indentation
  const indent = line.match(/^(\s*)/)[1];
  const trimmed = line.trim();

  // Skip pure structural lines
  if (trimmed === '{' || trimmed === '}' || trimmed === '];' || trimmed === ');') {
    return line;
  }

  // For other lines, create a holey version
  let holey = trimmed
    // Replace string literals
    .replace(/"[^"]*"/g, '"___"')
    // Replace numbers
    .replace(/\b\d+\b/g, '___')
    // Replace identifiers (but not keywords)
    .replace(/\b(?!if|else|for|while|return|int|char|void|include|main|printf|scanf)\w+\b/g, '___');

  // Simplify multiple consecutive ___
  holey = holey.replace(/___\s*___/g, '___');

  return indent + holey;
}

// Find and fix corrupted holeyCode fields
function fixCorruptedHoleyCode(content) {
  let modified = false;

  // Find exercises with holeyCode that has literal newlines
  const holeyCodeRegex = /"holeyCode":\s*"([^"]*\n[^"]*)"/g;
  let match;
  const fixes = [];

  while ((match = holeyCodeRegex.exec(content)) !== null) {
    console.log('Found corrupted holeyCode at index', match.index);

    // Get the correctLines for this exercise
    const exerciseStart = content.lastIndexOf('{', match.index);
    const correctLinesMatch = content.substring(exerciseStart, match.index + 5000).match(/"correctLines":\s*\[([\s\S]*?)\]/);

    if (!correctLinesMatch) {
      console.log('  Could not find correctLines');
      continue;
    }

    // Parse correctLines
    const arrayContent = correctLinesMatch[1];
    const lines = [];
    let inString = false;
    let current = '';
    let escaped = false;

    for (let i = 0; i < arrayContent.length; i++) {
      const c = arrayContent[i];
      const next = arrayContent[i + 1];

      if (!inString) {
        if (c === '"') { inString = true; continue; }
        continue;
      }

      if (c === '\\' && (next === '"' || next === '\\' || next === 'n')) {
        current += c + next;
        i++;
        continue;
      }

      if (c === '"') {
        lines.push(current);
        current = '';
        inString = false;
        continue;
      }

      current += c;
    }

    console.log('  Found', lines.length, 'correctLines');

    // Build new holeyCode from correctLines
    const holeyLines = lines.map(line => {
      // Unescape for processing
      const unescaped = line.replace(/\\\\n/g, '\n').replace(/\\\\"/g, '"');

      // Make it holey
      const holey = makeHoley(unescaped);

      // Re-escape
      return holey.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    });

    const newHoleyCode = holeyLines.join('\\n');
    console.log('  New holeyCode length:', newHoleyCode.length);

    fixes.push({
      start: match.index,
      end: match.index + match[0].length,
      newValue: '"holeyCode": "' + newHoleyCode + '"'
    });

    modified = true;
  }

  // Apply fixes in reverse order
  for (let i = fixes.length - 1; i >= 0; i--) {
    const fix = fixes[i];
    content = content.substring(0, fix.start) + fix.newValue + content.substring(fix.end);
  }

  return { content, modified };
}

// Main
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  const result = fixCorruptedHoleyCode(content);

  if (result.modified) {
    fs.writeFileSync(filePath, result.content);
    console.log(`${file}: Fixed corrupted holeyCode`);
  }
}

console.log('\nDone!');

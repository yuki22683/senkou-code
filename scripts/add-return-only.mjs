import fs from 'fs';
import path from 'path';

const dir = './data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

// These languages use return 0 as program exit
const returnLanguages = ['c', 'cpp', 'csharp', 'java', 'kotlin', 'swift', 'go', 'rust'];

const commentPrefixes = {
  'c': '//', 'cpp': '//', 'csharp': '//', 'java': '//',
  'kotlin': '//', 'swift': '//', 'go': '//', 'rust': '//'
};

let totalFixed = 0;

for (const file of files) {
  const lang = file.replace(/[0-9]*\.ts$/, '');
  if (!returnLanguages.includes(lang)) continue;

  const fp = path.join(dir, file);
  let content = fs.readFileSync(fp, 'utf8');

  const prefix = commentPrefixes[lang] || '//';
  const returnComment = prefix + ' プログラムの正常終了を示す値0を返す';

  let modified = false;
  let count = 0;

  // Look for holeyCode patterns with return ___; or return 0;
  // Pattern: return ___; without a comment above it

  // Simple approach: find return ___;\\n and add comment before if not present
  // The line before return should not already contain the comment

  const returnPatterns = [
    { search: /(\n)(    return ___;)/g, check: 'return ___;' },
    { search: /(\n)(    return 0;)/g, check: 'return 0;' },
    { search: /(\n)(        return ___;)/g, check: 'return ___;' },
    { search: /(\n)(        return 0;)/g, check: 'return 0;' }
  ];

  for (const { search } of returnPatterns) {
    content = content.replace(search, (match, newline, returnLine) => {
      // Check if already has comment (look at context before this match)
      const beforeMatch = content.lastIndexOf(match) > 0 ?
        content.substring(Math.max(0, content.lastIndexOf(match) - 100), content.lastIndexOf(match)) : '';

      // Get the indentation
      const indentMatch = returnLine.match(/^(\s*)/);
      const indent = indentMatch ? indentMatch[1] : '    ';

      // This simple check isn't reliable, so let's skip it and always add
      // We'll let the user see if duplicates appear
      count++;
      modified = true;
      return newline + indent + returnComment + '\\n' + returnLine;
    });
  }

  // Better approach: use a more targeted replacement
  // Reset content and try again
}

// Actually, let me try a simpler direct approach
for (const file of files) {
  const lang = file.replace(/[0-9]*\.ts$/, '');
  if (!returnLanguages.includes(lang)) continue;

  const fp = path.join(dir, file);
  let content = fs.readFileSync(fp, 'utf8');

  const prefix = commentPrefixes[lang] || '//';
  const returnComment = prefix + ' プログラムの正常終了を示す値0を返す';

  let modified = false;
  let count = 0;

  // Find and replace pattern: \\n followed by spaces and return ___;
  // But NOT if preceded by the comment

  // Match: not preceded by 正常終了, followed by \n, indent, return ___;
  // This is tricky in JS regex. Let's do it differently.

  // Split by exercises, process each, rejoin
  const exercisePattern = /("holeyCode":\s*")((?:[^"\\]|\\.)*)(")/g;

  content = content.replace(exercisePattern, (match, p1, code, p3) => {
    // Protect \\n (escaped newline in content) vs \n (line separator)
    // In the file: \n is line separator, \\n is escaped newline
    const PLACEHOLDER = '\x00ESC\x00';
    let protectedCode = code.replace(/\\\\n/g, PLACEHOLDER);

    const lines = protectedCode.split('\\n');
    const newLines = [];
    let changed = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].replace(new RegExp(PLACEHOLDER, 'g'), '\\\\n');
      const trimmed = line.trim();

      if (/^return\s+(___;?|0;?)$/.test(trimmed)) {
        const prevLine = i > 0 ? newLines[newLines.length - 1].trim() : '';
        if (!prevLine.includes('正常終了') && !prevLine.includes('値0を返す')) {
          const indentMatch = line.match(/^(\s*)/);
          const indent = indentMatch ? indentMatch[1] : '';
          newLines.push(indent + returnComment);
          changed = true;
          count++;
        }
      }
      newLines.push(line);
    }

    if (changed) {
      modified = true;
      return p1 + newLines.join('\\n') + p3;
    }
    return match;
  });

  if (modified) {
    fs.writeFileSync(fp, content);
    console.log(file + ': ' + count + ' added');
    totalFixed += count;
  }
}

console.log('Total: ' + totalFixed);

import fs from 'fs';
import path from 'path';

const dir = './data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

// Placeholder for escaped newlines that should NOT be split
const ESCAPED_NEWLINE_PLACEHOLDER = '\x00ESCAPED_NEWLINE\x00';
const sep = String.fromCharCode(92) + 'n';  // literal \n
const doubleSep = String.fromCharCode(92) + String.fromCharCode(92) + 'n';  // literal \\n

// Language-specific comment prefixes
const commentPrefixes = {
  'c': '//',
  'cpp': '//',
  'csharp': '//',
  'java': '//',
  'javascript': '//',
  'typescript': '//',
  'go': '//',
  'rust': '//',
  'kotlin': '//',
  'swift': '//',
  'php': '//',
  'python': '#',
  'ruby': '#',
  'perl': '#',
  'bash': '#',
  'lua': '--',
  'haskell': '--',
  'elixir': '#',
  'sql': '--',
  'assembly': ';'
};

let totalFixed = 0;

for (const file of files) {
  const fp = path.join(dir, file);
  let content = fs.readFileSync(fp, 'utf8');

  const lang = file.replace(/[0-9]*\.ts$/, '');
  const prefix = commentPrefixes[lang] || '//';
  const returnComment = prefix + ' プログラムの正常終了を示す値0を返す';

  let modified = false;
  let fileCount = 0;

  // Match holeyCode values
  const holeyCodePattern = /"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;
  let match;

  while ((match = holeyCodePattern.exec(content)) !== null) {
    const originalHoleyCode = match[1];

    // Protect escaped newlines (\\n should not be treated as line separator)
    const protectedCode = originalHoleyCode.split(doubleSep).join(ESCAPED_NEWLINE_PLACEHOLDER);
    const lines = protectedCode.split(sep);

    // Check if there's a return line without comment above it
    let needsChange = false;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].split(ESCAPED_NEWLINE_PLACEHOLDER).join(doubleSep);
      const trimmed = line.trim();

      if (/^return\s+(___;?|0;?)$/.test(trimmed)) {
        // Check previous line
        const prevLine = i > 0 ? lines[i-1].split(ESCAPED_NEWLINE_PLACEHOLDER).join(doubleSep).trim() : '';
        if (!prevLine.includes('正常終了') && !prevLine.includes('値0を返す')) {
          needsChange = true;
          break;
        }
      }
    }

    if (!needsChange) continue;

    // Build new holeyCode with comments
    const newLines = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].split(ESCAPED_NEWLINE_PLACEHOLDER).join(doubleSep);
      const trimmed = line.trim();

      if (/^return\s+(___;?|0;?)$/.test(trimmed)) {
        const prevLine = i > 0 ? newLines[newLines.length - 1].trim() : '';
        if (!prevLine.includes('正常終了') && !prevLine.includes('値0を返す')) {
          // Add comment before return
          const indentMatch = line.match(/^(\s*)/);
          const indent = indentMatch ? indentMatch[1] : '';
          newLines.push(indent + returnComment);
          fileCount++;
        }
      }
      newLines.push(line);
    }

    const newHoleyCode = newLines.join(sep);

    if (newHoleyCode !== originalHoleyCode) {
      // Replace in content
      const fullMatch = match[0];
      const newFullMatch = '"holeyCode": "' + newHoleyCode + '"';
      content = content.slice(0, match.index) + newFullMatch + content.slice(match.index + fullMatch.length);
      modified = true;

      // Reset regex after modification
      holeyCodePattern.lastIndex = match.index + newFullMatch.length;
    }
  }

  if (modified) {
    fs.writeFileSync(fp, content);
    console.log(file + ': ' + fileCount + ' added');
    totalFixed += fileCount;
  }
}

console.log('Total: ' + totalFixed);

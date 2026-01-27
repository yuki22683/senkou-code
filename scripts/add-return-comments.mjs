import fs from 'fs';
import path from 'path';

const dir = './data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

const sep = String.fromCharCode(92) + 'n';  // literal backslash + n

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

  // Match holeyCode values - find "holeyCode": "..." patterns
  const holeyCodeRegex = /("holeyCode":\s*")((?:[^"\\]|\\.)*)(")/g;

  content = content.replace(holeyCodeRegex, (match, p1, code, p3) => {
    const lines = code.split(sep);
    const newLines = [];
    let changed = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      // Check if this is a return statement with ___ or 0
      if (/^return\s+(___;?|0;?)$/.test(trimmed)) {
        // Check if previous line is already a comment about return
        const prevLine = i > 0 ? newLines[newLines.length - 1].trim() : '';
        const hasReturnComment = prevLine.includes('正常終了') ||
                                  prevLine.includes('値0を返す') ||
                                  prevLine.includes('return');

        // Check if previous line starts with comment prefix
        const isComment = prevLine.startsWith('//') ||
                          prevLine.startsWith('#') ||
                          prevLine.startsWith('--') ||
                          prevLine.startsWith(';');

        if (!hasReturnComment) {
          // Need to add comment
          const indentMatch = line.match(/^(\s*)/);
          const indent = indentMatch ? indentMatch[1] : '';
          newLines.push(indent + returnComment);
          changed = true;
          fileCount++;
        }
      }
      newLines.push(line);
    }

    if (changed) {
      modified = true;
      return p1 + newLines.join(sep) + p3;
    }
    return match;
  });

  // Also update correctLines to match the new line count
  if (modified) {
    // Now we need to update correctLines to include the new comment lines
    const correctLinesRegex = /("correctLines":\s*\[)((?:[^\]]|\n)*?)(\])/g;

    content = content.replace(correctLinesRegex, (match, p1, items, p3) => {
      // Parse the array items
      const itemMatches = items.match(/"(?:[^"\\]|\\.)*"/g);
      if (!itemMatches) return match;

      const newItems = [];
      for (let i = 0; i < itemMatches.length; i++) {
        const item = itemMatches[i];
        const itemContent = item.slice(1, -1); // Remove quotes

        // Check if next item is a return statement
        if (i + 1 < itemMatches.length) {
          const nextItem = itemMatches[i + 1].slice(1, -1);
          if (/^return\s+(0;?|___)/.test(nextItem.trim())) {
            // Check if current item already mentions return
            if (!itemContent.includes('正常終了') && !itemContent.includes('値0を返す')) {
              // Check if current line is NOT already a comment about return
              const trimmedCurrent = itemContent.trim();
              if (!trimmedCurrent.startsWith('//') && !trimmedCurrent.startsWith('#') &&
                  !trimmedCurrent.startsWith('--') && !trimmedCurrent.startsWith(';')) {
                // Insert comment before return
                const indentMatch = nextItem.match(/^(\s*)/);
                const indent = indentMatch ? indentMatch[1] : '';
                newItems.push(item);
                newItems.push('"' + indent + returnComment + '"');
                continue;
              }
            }
          }
        }
        newItems.push(item);
      }

      // Only return modified if we actually added items
      if (newItems.length > itemMatches.length) {
        return p1 + newItems.join(', ') + p3;
      }
      return match;
    });

    fs.writeFileSync(fp, content);
    console.log(file + ': ' + fileCount + ' added');
    totalFixed += fileCount;
  }
}

console.log('Total: ' + totalFixed);

import fs from 'fs';
import path from 'path';

const dir = './data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

const sep = String.fromCharCode(92) + 'n';  // literal backslash + n

let totalFixed = 0;

for (const file of files) {
  const fp = path.join(dir, file);
  let content = fs.readFileSync(fp, 'utf8');
  let modified = false;
  let fileCount = 0;

  // Find holeyCode and correctLines pairs
  // Look for pattern: "holeyCode": "...", followed by "correctLines": [...]

  const holeyCodePattern = /"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;
  let holeyMatch;
  const holeyCodes = [];

  while ((holeyMatch = holeyCodePattern.exec(content)) !== null) {
    holeyCodes.push({
      index: holeyMatch.index,
      code: holeyMatch[1],
      lines: holeyMatch[1].split(sep)
    });
  }

  // For each holeyCode, find corresponding correctLines and update
  for (const holey of holeyCodes) {
    // Find correctLines after this holeyCode
    const afterHoley = content.substring(holey.index);
    const correctMatch = afterHoley.match(/"correctLines":\s*\[((?:[^\[\]])*?)\]/);

    if (!correctMatch) continue;

    const correctStart = holey.index + correctMatch.index;
    const oldCorrectLines = correctMatch[0];

    // Parse existing correctLines items
    const itemMatches = correctMatch[1].match(/"(?:[^"\\]|\\.)*"/g) || [];

    // Build new correctLines from holeyCode
    const newItems = [];
    let codeIdx = 0; // index into non-comment lines from original correctLines

    for (let i = 0; i < holey.lines.length; i++) {
      const line = holey.lines[i];
      const trimmed = line.trim();

      // Check if this is a comment line
      const isComment = trimmed.startsWith('//') || trimmed.startsWith('#') ||
                        trimmed.startsWith('--') || trimmed.startsWith(';');

      if (isComment) {
        // Add the comment line directly (it's the same in holey and correct)
        newItems.push('"' + line + '"');
      } else {
        // Find the correct version for this code line
        // Skip any comment items in itemMatches
        while (codeIdx < itemMatches.length) {
          const item = itemMatches[codeIdx];
          const itemContent = item.slice(1, -1).trim();
          const itemIsComment = itemContent.startsWith('//') || itemContent.startsWith('#') ||
                                 itemContent.startsWith('--') || itemContent.startsWith(';');
          if (!itemIsComment) break;
          codeIdx++;
        }

        if (codeIdx < itemMatches.length) {
          newItems.push(itemMatches[codeIdx]);
          codeIdx++;
        } else {
          // Fallback
          newItems.push('"' + line.replace(/___/g, '???') + '"');
        }
      }
    }

    const newCorrectLines = '"correctLines": [' + newItems.join(', ') + ']';

    if (newCorrectLines !== oldCorrectLines) {
      content = content.substring(0, correctStart) + newCorrectLines + content.substring(correctStart + oldCorrectLines.length);
      modified = true;
      fileCount++;
    }
  }

  // Also fix lineHints to match the number of lines
  // Find each lineHints and ensure it has the right count
  const holeyCodePattern2 = /"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;
  let match2;
  while ((match2 = holeyCodePattern2.exec(content)) !== null) {
    const lines = match2[1].split(sep);
    const lineCount = lines.length;

    // Find lineHints after this
    const afterHoley = content.substring(match2.index);
    const hintsMatch = afterHoley.match(/"lineHints":\s*\[((?:[^\[\]])*?)\]/);

    if (!hintsMatch) continue;

    const hintsStart = match2.index + hintsMatch.index;
    const oldHints = hintsMatch[0];

    // Parse existing hints
    const hintItems = hintsMatch[1].match(/("(?:[^"\\]|\\.)*"|null)/g) || [];

    // If hint count doesn't match line count, we need to fix
    if (hintItems.length !== lineCount) {
      // Build new hints: null for comment lines, preserve existing for others
      const newHints = [];
      let hintIdx = 0;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();
        const isComment = trimmed.startsWith('//') || trimmed.startsWith('#') ||
                          trimmed.startsWith('--') || trimmed.startsWith(';');

        if (isComment) {
          newHints.push('null');
        } else {
          // Skip nulls in original hints that were for comments
          while (hintIdx < hintItems.length && hintItems[hintIdx] === 'null') {
            hintIdx++;
          }
          if (hintIdx < hintItems.length) {
            newHints.push(hintItems[hintIdx]);
            hintIdx++;
          } else {
            newHints.push('null');
          }
        }
      }

      const newHintsStr = '"lineHints": [' + newHints.join(', ') + ']';
      if (newHintsStr !== oldHints) {
        content = content.substring(0, hintsStart) + newHintsStr + content.substring(hintsStart + oldHints.length);
        modified = true;
      }
    }
  }

  if (modified) {
    fs.writeFileSync(fp, content);
    console.log(file + ': ' + fileCount + ' exercises fixed');
    totalFixed += fileCount;
  }
}

console.log('Total: ' + totalFixed);

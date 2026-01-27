import fs from 'fs';
import path from 'path';

const dir = './data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

const ESCAPED_NEWLINE_PLACEHOLDER = '\x00ESCAPED_NEWLINE\x00';
const sep = String.fromCharCode(92) + 'n';
const doubleSep = String.fromCharCode(92) + String.fromCharCode(92) + 'n';

let totalFixed = 0;

for (const file of files) {
  const fp = path.join(dir, file);
  let content = fs.readFileSync(fp, 'utf8');
  let modified = false;
  let fileCount = 0;

  // Find exercises - look for patterns with holeyCode, correctLines, lineHints
  // We need to find each exercise block and sync them

  const holeyCodePattern = /"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;
  let match;

  while ((match = holeyCodePattern.exec(content)) !== null) {
    const holeyCode = match[1];

    // Protect escaped newlines
    const protectedCode = holeyCode.split(doubleSep).join(ESCAPED_NEWLINE_PLACEHOLDER);
    const holeyLines = protectedCode.split(sep).map(l => l.split(ESCAPED_NEWLINE_PLACEHOLDER).join(doubleSep));
    const holeyLineCount = holeyLines.length;

    // Find correctLines after this holeyCode
    const afterHoley = content.substring(match.index);
    const correctMatch = afterHoley.match(/"correctLines":\s*\[((?:[^\[\]])*?)\]/);
    if (!correctMatch) continue;

    const correctLinesStart = match.index + correctMatch.index;

    // Parse existing correctLines
    const correctItemsRaw = correctMatch[1].match(/"(?:[^"\\]|\\.)*"/g) || [];
    const correctLines = correctItemsRaw.map(s => s.slice(1, -1));

    // Find lineHints
    const hintsMatch = afterHoley.match(/"lineHints":\s*\[((?:[^\[\]])*?)\]/);
    if (!hintsMatch) continue;

    const lineHintsStart = match.index + hintsMatch.index;

    // Parse existing lineHints
    const hintItemsRaw = hintsMatch[1].match(/("(?:[^"\\]|\\.)*"|null)/g) || [];
    const lineHints = hintItemsRaw.map(s => s === 'null' ? null : s.slice(1, -1));

    // Check if counts match
    if (correctLines.length === holeyLineCount && lineHints.length === holeyLineCount) {
      continue; // Already synced
    }

    // Need to rebuild correctLines and lineHints
    // For each line in holeyCode:
    // - If it's a comment line (starts with //, #, --, ;), use the comment as correctLine and null as hint
    // - Otherwise, use the next available non-comment correctLine and its hint

    const newCorrectLines = [];
    const newLineHints = [];
    let codeLineIdx = 0; // Index into original non-comment correct lines

    // First, extract only code lines from original correctLines (skip comments)
    const originalCodeLines = [];
    const originalCodeHints = [];
    for (let i = 0; i < correctLines.length; i++) {
      const line = correctLines[i];
      const trimmed = line.trim();
      const isComment = trimmed.startsWith('//') || trimmed.startsWith('#') ||
                        trimmed.startsWith('--') || trimmed.startsWith(';');
      if (!isComment) {
        originalCodeLines.push(line);
        originalCodeHints.push(i < lineHints.length ? lineHints[i] : null);
      }
    }

    for (let i = 0; i < holeyLines.length; i++) {
      const holeyLine = holeyLines[i];
      const trimmed = holeyLine.trim();
      const isComment = trimmed.startsWith('//') || trimmed.startsWith('#') ||
                        trimmed.startsWith('--') || trimmed.startsWith(';');

      if (isComment) {
        // Use the holey comment as correct (they should be identical)
        newCorrectLines.push(holeyLine);
        newLineHints.push(null);
      } else {
        // Use the corresponding original code line
        if (codeLineIdx < originalCodeLines.length) {
          newCorrectLines.push(originalCodeLines[codeLineIdx]);
          newLineHints.push(originalCodeHints[codeLineIdx]);
          codeLineIdx++;
        } else {
          // Fallback - shouldn't happen if data is consistent
          newCorrectLines.push(holeyLine.replace(/___/g, '???'));
          newLineHints.push(null);
        }
      }
    }

    // Check if we made changes
    if (newCorrectLines.length === correctLines.length &&
        newCorrectLines.every((v, i) => v === correctLines[i])) {
      continue; // No actual change
    }

    // Build replacement strings
    const newCorrectStr = '"correctLines": [' + newCorrectLines.map(l => '"' + l + '"').join(', ') + ']';
    const newHintsStr = '"lineHints": [' + newLineHints.map(h => h === null ? 'null' : '"' + h + '"').join(', ') + ']';

    // Replace correctLines
    const oldCorrectLines = correctMatch[0];
    content = content.slice(0, correctLinesStart) + newCorrectStr + content.slice(correctLinesStart + oldCorrectLines.length);

    // Recalculate lineHints position after correctLines change
    const lengthDiff = newCorrectStr.length - oldCorrectLines.length;
    const newLineHintsStart = lineHintsStart + lengthDiff;

    // Replace lineHints
    const oldLineHints = hintsMatch[0];
    content = content.slice(0, newLineHintsStart) + newHintsStr + content.slice(newLineHintsStart + oldLineHints.length);

    modified = true;
    fileCount++;

    // Reset regex position
    holeyCodePattern.lastIndex = match.index + 1;
  }

  if (modified) {
    fs.writeFileSync(fp, content);
    console.log(file + ': ' + fileCount + ' exercises synced');
    totalFixed += fileCount;
  }
}

console.log('Total: ' + totalFixed);

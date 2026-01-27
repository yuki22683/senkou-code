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

  // Find all exercises with holeyCode and correctLines
  // Pattern for exercise objects
  const exercisePattern = /\{[^{}]*"holeyCode":\s*"((?:[^"\\]|\\.)*)"\s*,[^{}]*"correctLines":\s*\[((?:[^\[\]]|\n)*?)\][^{}]*"lineHints":\s*\[((?:[^\[\]]|\n)*?)\]/g;

  content = content.replace(exercisePattern, (match) => {
    // Extract holeyCode
    const holeyMatch = match.match(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/);
    const correctMatch = match.match(/"correctLines":\s*\[((?:[^\[\]]|\n)*?)\]/);
    const hintsMatch = match.match(/"lineHints":\s*\[((?:[^\[\]]|\n)*?)\]/);

    if (!holeyMatch || !correctMatch || !hintsMatch) return match;

    const holeyCode = holeyMatch[1];
    const holeyLines = holeyCode.split(sep);

    // Parse existing correctLines
    const correctItems = correctMatch[1].match(/"(?:[^"\\]|\\.)*"/g) || [];
    const correctLines = correctItems.map(s => s.slice(1, -1));

    // Parse existing lineHints
    const hintItems = hintsMatch[1].match(/("(?:[^"\\]|\\.)*"|null)/g) || [];
    const lineHints = hintItems.map(s => s === 'null' ? null : s.slice(1, -1));

    // Build new correctLines and lineHints arrays
    const newCorrectLines = [];
    const newLineHints = [];

    let correctIdx = 0;
    for (let i = 0; i < holeyLines.length; i++) {
      const holeyLine = holeyLines[i];
      const trimmed = holeyLine.trim();

      // Check if this is a comment line (starts with //, #, --, ;)
      const isComment = trimmed.startsWith('//') || trimmed.startsWith('#') ||
                        trimmed.startsWith('--') || trimmed.startsWith(';');

      if (isComment) {
        // This is a comment line - add it directly
        newCorrectLines.push(holeyLine);
        newLineHints.push(null);
      } else {
        // This is a code line - use the corresponding correctLine
        if (correctIdx < correctLines.length) {
          // Check if existing correctLine is a comment (shouldn't consume it for code line)
          let usedCorrect = correctLines[correctIdx];
          const existingIsComment = usedCorrect.trim().startsWith('//') ||
                                     usedCorrect.trim().startsWith('#') ||
                                     usedCorrect.trim().startsWith('--') ||
                                     usedCorrect.trim().startsWith(';');

          // If we're on a code line but the correctLine is a comment, skip comments until we find code
          while (existingIsComment && correctIdx < correctLines.length - 1) {
            correctIdx++;
            usedCorrect = correctLines[correctIdx];
            if (!(usedCorrect.trim().startsWith('//') ||
                  usedCorrect.trim().startsWith('#') ||
                  usedCorrect.trim().startsWith('--') ||
                  usedCorrect.trim().startsWith(';'))) {
              break;
            }
          }

          newCorrectLines.push(usedCorrect);
          newLineHints.push(correctIdx < lineHints.length ? lineHints[correctIdx] : null);
          correctIdx++;
        } else {
          // Fallback - shouldn't happen
          newCorrectLines.push(holeyLine.replace(/___/g, '???'));
          newLineHints.push(null);
        }
      }
    }

    // Check if anything changed
    if (newCorrectLines.length !== correctLines.length) {
      modified = true;
      fileCount++;

      // Build new strings
      const newCorrectStr = newCorrectLines.map(l => '"' + l + '"').join(', ');
      const newHintsStr = newLineHints.map(h => h === null ? 'null' : '"' + h + '"').join(', ');

      let result = match;
      result = result.replace(/"correctLines":\s*\[((?:[^\[\]]|\n)*?)\]/, '"correctLines": [' + newCorrectStr + ']');
      result = result.replace(/"lineHints":\s*\[((?:[^\[\]]|\n)*?)\]/, '"lineHints": [' + newHintsStr + ']');
      return result;
    }

    return match;
  });

  if (modified) {
    fs.writeFileSync(fp, content);
    console.log(file + ': ' + fileCount + ' exercises updated');
    totalFixed += fileCount;
  }
}

console.log('Total exercises updated: ' + totalFixed);

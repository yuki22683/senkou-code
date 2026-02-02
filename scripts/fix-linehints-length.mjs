import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;
let totalIssues = 0;

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // Match exercise blocks with all three fields
  const exerciseRegex = /("holeyCode":\s*")((?:[^"\\]|\\.)*?)("\s*,\s*"correctLines":\s*)(\[[\s\S]*?\])(\s*,\s*"lineHints":\s*)(\[[\s\S]*?\])/g;

  content = content.replace(exerciseRegex, (match, p1, holeyCodeRaw, p3, correctLinesJson, p5, lineHintsJson) => {
    try {
      // Decode holeyCode - handle both \\n and \n
      const holeyCode = holeyCodeRaw
        .replace(/\\\\n/g, '\n')
        .replace(/\\n/g, '\n')
        .replace(/\\"/g, '"')
        .replace(/\\\\/g, '\\');
      const holeyLines = holeyCode.split('\n');

      // Parse correctLines and lineHints
      const correctLines = JSON.parse(correctLinesJson);
      let lineHints = JSON.parse(lineHintsJson);

      const targetLength = correctLines.length;

      if (lineHints.length === targetLength) {
        return match; // Already correct
      }

      totalIssues++;

      // Create new lineHints array
      const newHints = [];
      for (let i = 0; i < targetLength; i++) {
        const holeyLine = holeyLines[i] || '';
        const hasHole = holeyLine.includes('___');

        // Try to find a hint for this line
        let hint = null;
        if (i < lineHints.length && lineHints[i] !== null) {
          hint = lineHints[i];
        }

        // Only keep hint if line has a hole
        if (hasHole && hint) {
          newHints.push(hint);
        } else {
          newHints.push(null);
        }
      }

      modified = true;

      // Format the new hints JSON to match original style
      const newHintsJson = JSON.stringify(newHints, null, 10)
        .replace(/\n/g, '\n          ');

      return p1 + holeyCodeRaw + p3 + correctLinesJson + p5 + newHintsJson;
    } catch (e) {
      console.log(`  ${file}: Parse error - ${e.message}`);
      return match;
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed: ${file}`);
    totalFixed++;
  }
}

console.log(`\nTotal files fixed: ${totalFixed}`);
console.log(`Total issues addressed: ${totalIssues}`);

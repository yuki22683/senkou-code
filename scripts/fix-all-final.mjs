import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

function decode(s) {
  if (!s) return '';
  return s
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\');
}

function encode(s) {
  if (!s) return '';
  return s
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\t/g, '\\t');
}

function isCommentLine(line, language) {
  const trimmed = line.trim();
  if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*') || trimmed.startsWith('--') || trimmed.startsWith(';') || trimmed.startsWith('{-')) return true;
  const hashCommentLangs = ['python', 'ruby', 'bash', 'perl', 'elixir', 'php'];
  if (hashCommentLangs.includes(language) && trimmed.startsWith('#')) return true;
  return false;
}

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  const languageMatch = content.match(/"language":\s*"([^"]+)"/);
  const language = languageMatch ? languageMatch[1] : '';

  const exerciseRegex = /\{\s*"title":\s*"([^"]+)"[\s\S]*?"correctCode":\s*"((?:[^"\\]|\\.)*)"[\s\S]*?"holeyCode":\s*"((?:[^"\\]|\\.)*)"[\s\S]*?"correctLines":\s*\[([\s\S]*?)\],\s*"lineHints":\s*\[([\s\S]*?)\],/g;

  content = content.replace(exerciseRegex, (match, title, correctCodeRaw, holeyCodeRaw, correctLinesRaw, lineHintsRaw) => {
    const correctCode = decode(correctCodeRaw);
    const correctLines = correctCode.split('\n');
    
    // Existing holey lines for reference (to keep existing ___ if possible)
    const existingHoleyLines = decode(holeyCodeRaw).split('\n');
    
    // Parse existing hints
    const existingHints = [];
    const hintMatches = lineHintsRaw.matchAll(/null|"((?:[^"\\]|\\.)*)"/g);
    for (const hm of hintMatches) {
      if (hm[0] === 'null') existingHints.push(null);
      else existingHints.push(decode(hm[1]));
    }

    const newHoleyLines = [];
    const newLineHints = [];

    for (let i = 0; i < correctLines.length; i++) {
      const cLine = correctLines[i];
      const trimmedC = cLine.trim();
      
      if (trimmedC === '' || isCommentLine(cLine, language)) {
        newHoleyLines.push(cLine);
        newLineHints.push(null);
        continue;
      }

      // Check if we already have a holey version of this line at the same position
      let hLine = existingHoleyLines[i] || '';
      let hint = existingHints[i] || null;

      // If existing holey line is totally different (line mismatch), try to find it nearby or regenerate
      if (!hLine.includes('___') || (hLine.trim() !== trimmedC && !hLine.includes('___'))) {
        // Regenerate holey
        hLine = cLine;
        if (hLine.includes('printf')) hLine = hLine.replace('printf', '___');
        else if (hLine.includes('console.log')) hLine = hLine.replace('console.log', '___');
        else if (hLine.includes('print')) hLine = hLine.replace('print', '___');
        else if (hLine.includes('return')) hLine = hLine.replace('return', '___');
        else if (hLine.includes('{')) hLine = hLine.replace('{', '___');
        else if (hLine.includes('}')) hLine = hLine.replace('}', '___');
        else {
          const indent = hLine.match(/^(\s*)/)[0];
          hLine = indent + '___';
        }
      }

      // Final check: if it still has no ___, make it ___
      if (!hLine.includes('___')) {
        const indent = hLine.match(/^(\s*)/)[0];
        hLine = indent + '___';
      }

      // Ensure hint exists for holey line
      if (hint === null) {
        if (cLine.includes('printf')) hint = 'printf関数で結果を表示します。';
        else if (cLine.includes('console.log')) hint = 'console.log で結果を表示します。';
        else if (cLine.includes('return 0;')) hint = 'プログラムの正常終了を示す0を返します。';
        else hint = 'この行を正しく入力してください。';
      }

      newHoleyLines.push(hLine);
      newLineHints.push(hint);
    }

    modified = true;
    const newHoleyCodeRaw = encode(newHoleyLines.join('\n'));
    const newLineHintsRaw = newLineHints.map(h => h === null ? 'null' : `"${encode(h)}"`).join(',\n          ');
    const newCorrectLinesRaw = correctLines.map(l => `"${encode(l)}"`).join(',\n          ');

    return `{
      "title": "${title}",
      "correctCode": "${correctCodeRaw}",
      "holeyCode": "${newHoleyCodeRaw}",
      "correctLines": [
          ${newCorrectLinesRaw}
        ],
      "lineHints": [
          ${newLineHintsRaw}
        ],`;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fully stabilized ${file}`);
  }
}
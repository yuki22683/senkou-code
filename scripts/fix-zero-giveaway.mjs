
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

function extractArrayContent(str, startSearchIdx = 0) {
  const openBracket = str.indexOf('[', startSearchIdx);
  if (openBracket === -1) return null;
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let i = openBracket; i < str.length; i++) {
    const ch = str[i];
    if (escaped) { escaped = false; continue; }
    if (ch === '\\') { escaped = true; continue; }
    if (ch === '"') { inString = !inString; continue; }
    if (!inString) {
      if (ch === '[') depth++;
      if (ch === ']') {
        depth--;
        if (depth === 0) return { content: str.substring(openBracket + 1, i), start: openBracket, end: i };
      }
    }
  }
  return null;
}

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  const languageMatch = content.match(/"language":\s*"([^"]+)"/);
  const language = languageMatch ? languageMatch[1] : '';
  const isHashCommentLanguage = !['c', 'cpp', 'csharp', 'java', 'javascript', 'typescript', 'kotlin', 'swift', 'go', 'lua', 'sql', 'rust'].includes(language);

  // Match exercise blocks more broadly
  const exerciseRegex = /\{\s*"title":\s*"([^"]+)"[\s\S]*?"holeyCode":\s*"((?:[^"\\]|\\.)*)"[\s\S]*?"correctLines":\s*\[([\s\S]*?)\],\s*"lineHints":\s*\[([\s\S]*?)\],/g;

  let match;
  while ((match = exerciseRegex.exec(content)) !== null) {
    const exerciseTitle = match[1];
    const holeyCodeRaw = match[2];
    const correctLinesRaw = match[3];
    const lineHintsIdx = content.indexOf('"lineHints"', match.index);
    const lineHintsObj = extractArrayContent(content, lineHintsIdx);

    if (!lineHintsObj) continue;

    // Use a special split to handle literal \n in strings
    // In the raw string, the line separators are literal \\n
    const holeyLines = holeyCodeRaw.split('\\\\n').map(l => decode(l));
    
    const correctLines = [];
    const clMatches = correctLinesRaw.matchAll(/"((?:[^"\\]|\\.)*)"/g);
    for (const clm of clMatches) {
      correctLines.push(decode(clm[1]));
    }

    const lineHints = [];
    const hintMatches = lineHintsObj.content.matchAll(/null|"((?:[^"\\]|\\.)*)"/g);
    for (const hm of hintMatches) {
      if (hm[0] === 'null') {
        lineHints.push(null);
      } else {
        lineHints.push(decode(hm[1] || ''));
      }
    }

    if (holeyLines.length !== correctLines.length || holeyLines.length !== lineHints.length) {
      // Try again with normal \n if \\n didn't work
      const altHoleyLines = decode(holeyCodeRaw).split('\n');
      if (altHoleyLines.length === correctLines.length) {
        // Continue with altHoleyLines
        processExercise(altHoleyLines, correctLines, lineHints, holeyCodeRaw, lineHintsObj.content, match.index);
      }
      continue;
    }

    processExercise(holeyLines, correctLines, lineHints, holeyCodeRaw, lineHintsObj.content, match.index);
  }

  function processExercise(holeyLines, correctLines, lineHints, holeyCodeRaw, lineHintsContent, exerciseIdx) {
    let exerciseModified = false;
    for (let j = 0; j < holeyLines.length; j++) {
      let line = holeyLines[j].trim();
      if (line === '') continue;
      if (line.startsWith('//') || line.startsWith('/*') || line.startsWith('--') || line.startsWith(';')) continue;
      if (isHashCommentLanguage && line.startsWith('#')) continue;
      if (line.match(/^[{}()\[\]]+$/) || line === 'end' || line === 'begin') continue;
      if (line.length <= 3 && !line.includes('(')) continue;

      if (!line.includes('___')) {
        let newLine = holeyLines[j];
        if (newLine.includes('printf')) {
          newLine = newLine.replace('printf', '___');
          if (lineHints[j] === null) lineHints[j] = 'printf関数で結果を表示します。';
        } else if (newLine.includes('console.log')) {
          newLine = newLine.replace('console.log', '___');
          if (lineHints[j] === null) lineHints[j] = 'console.log で結果を表示します。';
        } else if (newLine.includes('print')) {
          newLine = newLine.replace('print', '___');
          if (lineHints[j] === null) lineHints[j] = 'print関数で結果を表示します。';
        } else if (newLine.includes('cout')) {
          newLine = newLine.replace('cout', '___');
          if (lineHints[j] === null) lineHints[j] = 'cout で結果を表示します。';
        } else if (newLine.includes('return')) {
          newLine = newLine.replace('return', '___');
          if (lineHints[j] === null) lineHints[j] = '結果を返します。';
        } else {
          const indentMatch = newLine.match(/^(\s*)/);
          const indent = indentMatch ? indentMatch[0] : "";
          newLine = indent + "___";
          if (lineHints[j] === null) lineHints[j] = "この行を正しく入力してください。";
        }
        holeyLines[j] = newLine;
        exerciseModified = true;
      }
    }

    if (exerciseModified) {
      const newHoleyCodeRaw = encode(holeyLines.join('\n'));
      const newLineHintsRaw = lineHints.map(h => h === null ? 'null' : `"${encode(h)}"`).join(',\n          ');
      
      const oldHoleyPart = `"holeyCode": "${holeyCodeRaw}"`;
      const newHoleyPart = `"holeyCode": "${newHoleyCodeRaw}"`;
      
      // Need to be careful with global replace
      const startIdx = content.indexOf(oldHoleyPart, exerciseIdx - 100);
      if (startIdx !== -1) {
        content = content.substring(0, startIdx) + newHoleyPart + content.substring(startIdx + oldHoleyPart.length);
      }

      const oldLineHintsPart = `"lineHints": [${lineHintsContent}]`;
      const newLineHintsPart = `"lineHints": [\n          ${newLineHintsRaw}\n        ]`;
      const lhIdx = content.indexOf(oldLineHintsPart, exerciseIdx - 100);
      if (lhIdx !== -1) {
        content = content.substring(0, lhIdx) + newLineHintsPart + content.substring(lhIdx + oldLineHintsPart.length);
      }
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed ${file}`);
  }
}

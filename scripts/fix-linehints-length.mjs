import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;

function findArrayEnd(content, startIdx) {
  let bracketCount = 1;
  let i = startIdx;
  let inString = false;
  let escapeNext = false;

  while (i < content.length && bracketCount > 0) {
    const c = content[i];
    if (escapeNext) { escapeNext = false; i++; continue; }
    if (c === '\\') { escapeNext = true; i++; continue; }
    if (c === '"' && !inString) inString = true;
    else if (c === '"' && inString) inString = false;
    else if (!inString) {
      if (c === '[') bracketCount++;
      else if (c === ']') bracketCount--;
    }
    i++;
  }
  return i;
}

function parseArray(arrayContent) {
  const items = [];
  let current = '';
  let inString = false;
  let escapeNext = false;
  let depth = 0;

  for (let i = 0; i < arrayContent.length; i++) {
    const c = arrayContent[i];
    if (escapeNext) { current += c; escapeNext = false; continue; }
    if (c === '\\') { current += c; escapeNext = true; continue; }
    if (c === '"' && depth === 0) { inString = !inString; current += c; continue; }
    if (!inString) {
      if (c === '[' || c === '{') depth++;
      else if (c === ']' || c === '}') depth--;
      else if (c === ',' && depth === 0) { items.push(current.trim()); current = ''; continue; }
    }
    current += c;
  }
  if (current.trim()) items.push(current.trim());
  return items;
}

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let fixCount = 0;

  let searchPos = 0;
  const replacements = [];

  while (true) {
    const correctLinesMarker = '"correctLines": [';
    const correctLinesIdx = content.indexOf(correctLinesMarker, searchPos);
    if (correctLinesIdx === -1) break;

    const correctLinesContentStart = correctLinesIdx + correctLinesMarker.length;
    const correctLinesEnd = findArrayEnd(content, correctLinesContentStart);
    const correctLinesContent = content.substring(correctLinesContentStart, correctLinesEnd - 1);
    const correctLines = parseArray(correctLinesContent);

    const lineHintsMarker = '"lineHints": [';
    const lineHintsIdx = content.indexOf(lineHintsMarker, correctLinesEnd);
    if (lineHintsIdx === -1 || lineHintsIdx - correctLinesEnd > 500) {
      searchPos = correctLinesEnd;
      continue;
    }

    const lineHintsContentStart = lineHintsIdx + lineHintsMarker.length;
    const lineHintsEnd = findArrayEnd(content, lineHintsContentStart);
    const lineHintsContent = content.substring(lineHintsContentStart, lineHintsEnd - 1);
    const lineHints = parseArray(lineHintsContent);

    if (correctLines.length !== lineHints.length) {
      let newLineHints;
      if (correctLines.length < lineHints.length) {
        newLineHints = lineHints.slice(0, correctLines.length);
      } else {
        newLineHints = [...lineHints];
        while (newLineHints.length < correctLines.length) {
          newLineHints.push('null');
        }
      }

      const newLineHintsStr = '"lineHints": [\n          ' + newLineHints.join(',\n          ') + '\n        ]';
      replacements.push({ start: lineHintsIdx, end: lineHintsEnd, newValue: newLineHintsStr });
    }

    searchPos = lineHintsEnd;
  }

  for (let i = replacements.length - 1; i >= 0; i--) {
    const r = replacements[i];
    content = content.substring(0, r.start) + r.newValue + content.substring(r.end);
    fixCount++;
  }

  if (fixCount > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(file + ': Fixed ' + fixCount + ' lineHints arrays');
    totalFixed += fixCount;
  }
}

console.log('\nTotal: ' + totalFixed + ' fixes');

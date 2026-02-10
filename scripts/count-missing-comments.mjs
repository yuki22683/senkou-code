import fs from 'fs';
import path from 'path';

const backslashN = String.fromCharCode(92, 110);
const dir = 'data/lessons';

function isComment(line) {
  const t = line.trim();
  return t.startsWith('//') || t.startsWith('#') || t.startsWith('--') || t.startsWith(';') || t.startsWith('/*') || t.startsWith('*') || t.startsWith('{-') || t.startsWith('-}');
}

function extractArrayContent(content, startIndex) {
  let depth = 1;
  let inString = false;
  let escapeNext = false;
  let end = startIndex;

  for (let i = startIndex; i < content.length; i++) {
    const c = content[i];
    if (escapeNext) { escapeNext = false; continue; }
    if (c === '\\') { escapeNext = true; continue; }
    if (c === '"') { inString = !inString; continue; }
    if (!inString) {
      if (c === '[') depth++;
      else if (c === ']') {
        depth--;
        if (depth === 0) { end = i; break; }
      }
    }
  }
  return { content: content.substring(startIndex, end), endIndex: end };
}

function parseStringArray(arrayContent) {
  const items = [];
  let current = '';
  let inString = false;
  let escapeNext = false;

  for (let i = 0; i < arrayContent.length; i++) {
    const c = arrayContent[i];
    if (escapeNext) { current += c; escapeNext = false; continue; }
    if (c === '\\') { current += c; escapeNext = true; continue; }
    if (c === '"') {
      if (inString) { items.push(current); current = ''; inString = false; }
      else { inString = true; }
    } else if (inString) { current += c; }
  }
  return items;
}

let totalProblems = 0;
const problemsByFile = {};

function extractStringContent(content, startIndex) {
  let end = startIndex;
  let inEscape = false;
  for (let i = startIndex; i < content.length; i++) {
    if (content[i] === '\\' && !inEscape) { inEscape = true; continue; }
    if (content[i] === '"' && !inEscape) { end = i; break; }
    inEscape = false;
  }
  return { value: content.substring(startIndex, end), endIndex: end };
}

fs.readdirSync(dir).filter(f => f.endsWith('.ts')).forEach(file => {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');

  // Find ALL holeyCode occurrences
  const holeyRegex = /"holeyCode":\s*"/g;
  const correctLinesRegex = /"correctLines":\s*\[/g;

  let holeyMatch;
  let exerciseIndex = 0;

  while ((holeyMatch = holeyRegex.exec(content)) !== null) {
    exerciseIndex++;
    const holeyStart = holeyMatch.index + holeyMatch[0].length;
    const holeyResult = extractStringContent(content, holeyStart);
    const holeyLines = holeyResult.value.split(backslashN);

    // Find the corresponding correctLines (next one after this holeyCode)
    correctLinesRegex.lastIndex = holeyMatch.index;
    const clMatch = correctLinesRegex.exec(content);
    let correctLines = [];
    if (clMatch) {
      const clArrayStart = clMatch.index + clMatch[0].length;
      const clResult = extractArrayContent(content, clArrayStart);
      correctLines = parseStringArray(clResult.content);
    }

    let problems = 0;
    const problemLines = [];
    for (let i = 0; i < holeyLines.length; i++) {
      const line = holeyLines[i];
      const correctLine = correctLines[i] || '';

      // Skip if correctLine is empty
      if (correctLine.trim() === '') continue;

      if (line.includes('___') && !isComment(line) && line.trim() !== '') {
        if (i === 0 || !isComment(holeyLines[i - 1])) {
          problems++;
          problemLines.push({ lineNum: i + 1, content: line.substring(0, 60), correct: correctLine.substring(0, 60) });
        }
      }
    }

    if (problems > 0) {
      const key = `${file}#${exerciseIndex}`;
      problemsByFile[key] = { count: problems, lines: problemLines };
      totalProblems += problems;
    }
  }
});

console.log('=== コメント欠落の現状 ===');
Object.entries(problemsByFile).sort((a, b) => b[1].count - a[1].count).forEach(([f, data]) => {
  console.log(`${f}: ${data.count}`);
});
console.log(`合計: ${totalProblems}件`);

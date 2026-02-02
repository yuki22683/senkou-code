import fs from 'fs';
import path from 'path';

const lessonsDir = path.join(process.cwd(), 'data', 'lessons');

function getCommentPrefix(lang: string): string {
  const prefixes: Record<string, string> = {
    python: '#', bash: '#', ruby: '#', perl: '#', elixir: '#',
    sql: '--', lua: '--', haskell: '--', assembly: ';' 
  };
  return prefixes[lang] || '//';
}

function syncExercise(ex: any, lang: string): void {
  const hCode = ex.holeyCode || "";
  const cCode = ex.correctCode || "";
  const hLines = hCode.split(/\\n|\n/);
  const cLinesRaw = cCode.split(/\\n|\n/);
  
  const cCodeLinesOnly = cLinesRaw.filter((l: string) => {
    const t = l.trim();
    return t && !t.startsWith('//') && !t.startsWith('#') && !t.startsWith('--') && !t.startsWith(';');
  });

  const newCorrectLines: string[] = [];
  const neededCandidates = new Set<string>();
  let cIdx = 0;

  hLines.forEach(hLine => {
    const trimmedH = hLine.trim();
    const isComment = trimmedH.startsWith('//') || trimmedH.startsWith('#') || trimmedH.startsWith('--') || trimmedH.startsWith(';');
    if (isComment || !trimmedH) {
      newCorrectLines.push(hLine);
    } else {
      let filled = (cIdx < cCodeLinesOnly.length) ? cCodeLinesOnly[cIdx++] : hLine.replace(/___/g, '???');
      newCorrectLines.push(filled);
      
      // Extract what should be in the holes
      if (hLine.includes('___')) {
        const parts = hLine.split('___');
        let lastPos = 0;
        for (let j = 0; j < parts.length - 1; j++) {
          let si = filled.indexOf(parts[j], lastPos);
          if (si === -1) break;
          si += parts[j].length;
          let ei = parts[j+1] ? filled.indexOf(parts[j+1], si) : filled.length;
          if (ei === -1) ei = filled.length;
          const val = filled.substring(si, ei).trim();
          if (val && !['{','}','(',')','[',']',';',':',','].includes(val)) {
            neededCandidates.add(val);
          }
          lastPos = ei;
        }
      }
    }
  });

  // Candidate Update
  if (!ex.candidates) ex.candidates = {};
  const currentVals = new Set<string>();
  Object.values(ex.candidates).forEach((arr: any) => {
    if (Array.isArray(arr)) arr.forEach(v => currentVals.add(String(v)));
  });

  const missing = Array.from(neededCandidates).filter(n => !currentVals.has(n));
  if (missing.length > 0) {
    if (!ex.candidates.others) ex.candidates.others = [];
    missing.forEach(m => {
      if (!ex.candidates.others.includes(m)) ex.candidates.others.push(m);
    });
  }

  // Final Sync
  ex.correctLines = newCorrectLines;
  // Preserve hints for code lines, null for comments
  const oldHints = Array.isArray(ex.lineHints) ? ex.lineHints : [];
  const newHints: (string|null)[] = [];
  let hIdx = 0;
  hLines.forEach(hLine => {
    const trimmed = hLine.trim();
    const isComment = trimmed.startsWith('//') || trimmed.startsWith('#') || trimmed.startsWith('--') || trimmed.startsWith(';');
    if (isComment) {
      newHints.push(null);
    } else {
      while(hIdx < oldHints.length && oldHints[hIdx] === null) hIdx++;
      newHints.push(hIdx < oldHints.length ? oldHints[hIdx++] : null);
    }
  });
  ex.lineHints = newHints;
  const sep = hCode.includes('\\n') ? '\\n' : '\n';
  ex.correctCode = newCorrectLines.join(sep);
}

// Custom simple stringifier to maintain the style of the project
function stringifyData(data: any): string {
    return "export const " + data.key + " = " + JSON.stringify(data.value, null, 2) + ";";
}

function processFile(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const exportMatch = content.match(/export const (\w+) = ([\s\S]*?);?/);
  if (!exportMatch) return;

  const key = exportMatch[1];
  let data;
  try {
    // We can't use JSON.parse directly because it's JS/TS code
    // Use eval in a controlled way or just use the object from the project if we were in a different setup
    // But since we want to be safe, let's extract the exercises array carefully
    const exercisesStart = content.indexOf('"exercises": [');
    if (exercisesStart === -1) return;
    
    // For this specific task, the most reliable way is to extract each exercise string, 
    // update it, and put it back.
    // Let's reuse the robust splitting logic from before.
    
    const header = content.substring(0, exercisesStart + 14);
    const rest = content.substring(exercisesStart + 14);
    let depth = 1, arrayEnd = -1, i = 0;
    while (i < rest.length && depth > 0) {
      if (rest[i] === '"') { i++; while (i < rest.length) { if (rest[i] === '\\\' && i + 1 < rest.length) i += 2; else if (rest[i] === '"') break; else i++; } } 
      else if (rest[i] === '[') depth++;
      else if (rest[i] === ']') { depth--; if (depth === 0) { arrayEnd = i; break; } }
      i++;
    }
    if (arrayEnd === -1) return;
    const arrayStr = rest.substring(0, arrayEnd);
    const footer = rest.substring(arrayEnd);
    
    const exStrings: string[] = [];
    let curDepth = 0, curStart = -1;
    i = 0;
    while (i < arrayStr.length) {
      if (arrayStr[i] === '"') { i++; while (i < arrayStr.length) { if (arrayStr[i] === '\\\' && i + 1 < arrayStr.length) i += 2; else if (arrayStr[i] === '"') break; else i++; } } 
      else if (arrayStr[i] === '{') { if (curDepth === 0) curStart = i; curDepth++; }
      else if (arrayStr[i] === '}') { curDepth--; if (curDepth === 0) exStrings.push(arrayStr.substring(curStart, i + 1)); }
      i++;
    }
    
    const lang = (content.match(/"language":\s*"([^"]+)"/) || [null, "javascript"])[1];
    
    let modified = false;
    const fixedExs = exStrings.map(s => {
      // Create a copy of the exercise object by parsing its JSON-like string
      // Note: These strings aren't perfect JSON (they have trailing commas, etc.)
      // We'll use a hack: wrap in () and use eval to get the object, then stringify it back.
      try {
          const exObj = eval("(" + s + ")");
          const original = JSON.stringify(exObj);
          syncExercise(exObj, lang);
          if (JSON.stringify(exObj) !== original) {
              modified = true;
              // Project style: 8 spaces for inner fields
              return JSON.stringify(exObj, null, 2).split('\n').map((line, idx) => idx === 0 ? line : "      " + line).join('\n');
          }
      } catch (e) {
          console.error("Error evaluating exercise string in " + filePath);
      }
      return s;
    });

    if (modified) {
      let finalArrayStr = "", lastIdx = 0;
      exStrings.forEach((old, j) => {
        const idx = arrayStr.indexOf(old, lastIdx);
        finalArrayStr += arrayStr.substring(lastIdx, idx) + fixedExs[j];
        lastIdx = idx + old.length;
      });
      finalArrayStr += arrayStr.substring(lastIdx);
      fs.writeFileSync(filePath, header + finalArrayStr + footer, "utf-8");
      console.log('Rebuilt ' + path.basename(filePath));
    }
  } catch (e) {
    console.error("Critical error in " + filePath, e);
  }
}

const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith(".ts") && f !== "index.ts");
files.forEach(f => processFile(path.join(lessonsDir, f)));

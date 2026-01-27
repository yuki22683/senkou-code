
import fs from 'fs';
import path from 'path';

const lessonsDir = path.join(process.cwd(), 'data', 'lessons');

function fixFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Find each exercise object
  // A simple way to iterate through exercises without a full TS parser:
  // Split by the start of an exercise object
  const exercises = content.split(/{\s*"title":/);
  const header = exercises.shift(); // Everything before the first exercise
  
  const fixedExercises = exercises.map(ex => {
    // Re-add "title": to the string
    let exStr = '{"title":' + ex;
    
    // Extract fields
    const holeyMatch = exStr.match(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/);
    const correctCodeMatch = exStr.match(/"correctCode":\s*"((?:[^"\\]|\\.)*)"/);
    const candidatesMatch = exStr.match(/"candidates":\s*\{((?:[^\{\}]|\n)*?)\}\s*/);
    
    if (!holeyMatch || !correctCodeMatch || !candidatesMatch) return exStr;
    
    const holeyCode = holeyMatch[1];
    const correctCode = correctCodeMatch[1];
    const candidatesStr = candidatesMatch[1];
    
    const hLines = holeyCode.split(/\\n|\r?\n/);
    const cLines = correctCode.split(/\\n|\r?\n/);
    
    const needed = new Set<string>();
    hLines.forEach((hLine, idx) => {
      const cLine = cLines[idx];
      if (!cLine || !hLine.includes('___')) return;
      
      const hParts = hLine.split('___');
      let remainingC = cLine;
      for (let j = 0; j < hParts.length - 1; j++) {
        const start = hParts[j];
        const end = hParts[j+1];
        let sIdx = remainingC.indexOf(start);
        if (sIdx === -1) break;
        sIdx += start.length;
        let eIdx = end ? remainingC.indexOf(end, sIdx) : remainingC.length;
        if (eIdx === -1) eIdx = remainingC.length;
        const filled = remainingC.substring(sIdx, eIdx).trim();
        if (filled) needed.add(filled);
        remainingC = remainingC.substring(eIdx);
      }
    });
    
    // Parse existing candidates into a single flat array
    const candValues = candidatesStr.match(/"((?:[^"\\]|\\.)*)"/g)?.map(v => v.slice(1, -1)) || [];
    const missing = Array.from(needed).filter(n => !candValues.includes(n));
    
    if (missing.length > 0) {
      console.log(`Adding ${missing.length} missing candidates to an exercise in ${path.basename(filePath)}`);
      // Add missing to "others" or create it
      if (candidatesStr.includes('"others":')) {
        const othersPattern = /"others":\s*\[((?:[^\\\[\]]|\\.)*?)\]/;
        const othersMatch = candidatesStr.match(othersPattern);
        if (othersMatch) {
          let othersList = othersMatch[1].trim();
          const newOthers = missing.map(m => `"${m.replace(/\\/g, '\\\\').replace(/"/g, '\\\\\\"')}"`).join(',\n          ');
          const updatedOthers = othersList + (othersList ? ',\n          ' : '') + newOthers;
          const updatedCandStr = candidatesStr.replace(othersMatch[1], updatedOthers);
          return exStr.replace(candidatesStr, updatedCandStr);
        }
      } else {
        const newOthers = `"others": [\n          ${missing.map(m => `"${m.replace(/\\/g, '\\\\').replace(/"/g, '\\\\\\"')}"`).join(',\n          ')}\n        ],\n        `;
        return exStr.replace('"candidates": {', '"candidates": {\n        ' + newOthers);
      }
    }
    
    return exStr;
  });
  
  const newContent = header + fixedExercises.join('');
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
  }
}

const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
files.forEach(f => fixFile(path.join(lessonsDir, f)));

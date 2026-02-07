import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

function removeDuplicateCandidates(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Split content by exercises to handle duplicates per exercise
  const exercises = content.split('"title":');
  if (exercises.length <= 1) return false;

  const newExercises = [exercises[0]];

  for (let i = 1; i < exercises.length; i++) {
    let ex = exercises[i];
    
    // Regex to find "candidates": {
    const pattern = /"candidates":\s*\{/g;
    const matches = [...ex.matchAll(pattern)];
    
    if (matches.length > 1) {
      console.log(`Found ${matches.length} candidates in exercise ${i} of ${path.basename(filePath)}`);
      
      // We keep the FIRST one and remove the rest (usually the last ones were added by mistake)
      for (let m = matches.length - 1; m >= 1; m--) {
        const match = matches[m];
        
        // Find end of object starting at match.index
        let depth = 0;
        let inStr = false;
        let esc = false;
        let endIdx = -1;
        const startIdx = ex.indexOf('{', match.index);
        
        if (startIdx === -1) continue;

        for (let j = startIdx; j < ex.length; j++) {
          const ch = ex[j];
          if (esc) { esc = false; continue; }
          if (ch === '\\') { esc = true; continue; }
          if (ch === '"') { inStr = !inStr; continue; }
          if (!inStr) {
            if (ch === '{') depth++;
            if (ch === '}') {
              depth--;
              if (depth === 0) {
                endIdx = j;
                break;
              }
            }
          }
        }
        
        if (endIdx !== -1) {
          // Remove the block and handle commas
          let before = ex.substring(0, match.index);
          let after = ex.substring(endIdx + 1);
          
          // If there's a comma before, remove it if it becomes trailing, 
          // or handle comma after.
          const trailingCommaMatch = before.match(/,\s*$/);
          const leadingCommaMatch = after.match(/^\s*,\s*/);
          
          if (leadingCommaMatch) {
            after = after.substring(leadingCommaMatch[0].length);
          } else if (trailingCommaMatch) {
            before = before.substring(0, before.length - trailingCommaMatch[0].length);
          }
          
          ex = before + after;
          modified = true;
        }
      }
    }
    newExercises.push(ex);
  }

  if (modified) {
    fs.writeFileSync(filePath, newExercises.join('"title":'), 'utf8');
    return true;
  }
  return false;
}

let totalFixed = 0;
for (const file of files) {
  const filePath = path.join(dir, file);
  try {
    if (removeDuplicateCandidates(filePath)) {
      console.log(`Fixed duplicates in ${file}`);
      totalFixed++;
    }
  } catch (e) {
    console.error(`Error in ${file}: ${e.message}`);
  }
}
console.log(`Total files fixed: ${totalFixed}`);
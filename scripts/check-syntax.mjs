
import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

files.forEach(f => {
    const content = fs.readFileSync(path.join(dir, f), 'utf-8');
    // Simple check: find the object start
    const startIdx = content.indexOf('{');
    const endIdx = content.lastIndexOf('}');
    if (startIdx === -1 || endIdx === -1) return;
    
    const objStr = content.substring(startIdx, endIdx + 1);
    
    // We can't use JSON.parse because it's JS, not pure JSON (unquoted keys, etc.)
    // But we can check for basic balance
    let brace = 0;
    let bracket = 0;
    let inString = false;
    let escape = false;
    
    for (let i = 0; i < content.length; i++) {
        const char = content[i];
        if (escape) { escape = false; continue; }
        if (char === '\\') { escape = true; continue; }
        if (char === '"') { inString = !inString; continue; }
        if (inString) continue;
        
        if (char === '{') brace++;
        else if (char === '}') brace--;
        else if (char === '[') bracket++;
        else if (char === ']') bracket--;
        
        if (brace < 0 || bracket < 0) {
            console.log(`ERROR: Negative balance in ${f} at index ${i} ('${char}')`);
            return;
        }
    }
    
    if (brace !== 0 || bracket !== 0) {
        console.log(`ERROR: Unbalanced in ${f}: braces=${brace}, brackets=${bracket}`);
    }
});

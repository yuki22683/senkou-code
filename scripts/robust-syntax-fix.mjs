
import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

files.forEach(f => {
    let content = fs.readFileSync(path.join(dir, f), 'utf-8');
    let changed = false;
    
    // Use a very specific marker to split exercises
    const exercises = content.split('    {');
    if (exercises.length < 2) return;
    
    let newContent = exercises[0];
    for (let i = 1; i < exercises.length; i++) {
        let block = exercises[i];
        
        // Find candidates block
        const startIdx = block.indexOf('"candidates":');
        if (startIdx !== -1) {
            // Find end of candidates block (it's between { and })
            const candStartIdx = block.indexOf('{', startIdx);
            if (candStartIdx !== -1) {
                // Find matching closing brace for candidates
                let braceCount = 1;
                let candEndIdx = -1;
                for (let j = candStartIdx + 1; j < block.length; j++) {
                    if (block[j] === '{') braceCount++;
                    else if (block[j] === '}') braceCount--;
                    
                    if (braceCount === 0) {
                        candEndIdx = j;
                        break;
                    }
                }
                
                if (candEndIdx !== -1) {
                    let candStr = block.substring(candStartIdx, candEndIdx + 1);
                    
                    // Check for missing ] in any array
                    const arrays = candStr.split('[');
                    if (arrays.length > 1) {
                        let newCandStr = arrays[0];
                        for (let k = 1; k < arrays.length; k++) {
                            const arrayPart = arrays[k];
                            if (!arrayPart.includes(']')) {
                                // Missing closing bracket!
                                // Find where it should be (after the last string)
                                const lastQuoteIdx = arrayPart.lastIndexOf('"');
                                if (lastQuoteIdx !== -1) {
                                    newCandStr += '[' + arrayPart.substring(0, lastQuoteIdx + 1) + ']';
                                    const rem = arrayPart.substring(lastQuoteIdx + 1);
                                    // If there's content after where ] should be, keep it
                                    newCandStr += rem;
                                    changed = true;
                                } else {
                                    newCandStr += '[' + arrayPart;
                                }
                            } else {
                                newCandStr += '[' + arrayPart;
                            }
                        }
                        
                        if (changed) {
                            block = block.substring(0, candStartIdx) + newCandStr + block.substring(candEndIdx + 1);
                        }
                    }
                }
            }
        }
        newContent += '    {' + block;
    }
    
    if (changed) {
        fs.writeFileSync(path.join(dir, f), newContent, 'utf-8');
        console.log(`Fixed syntax in ${f}`);
    }
});

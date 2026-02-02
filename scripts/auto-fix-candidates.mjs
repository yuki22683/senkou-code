import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dir = path.join(__dirname, '..', 'data', 'lessons');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

function findStringEnd(content, startIdx) {
    let i = startIdx;
    while (i < content.length) {
        if (content[i] === '\\' && i + 1 < content.length) {
            i += 2;
        } else if (content[i] === '"') {
            return i;
        } else {
            i++;
        }
    }
    return -1;
}

function findObjectEnd(content, startIdx) {
    let i = startIdx;
    let depth = 1; // startIdx is after {
    while (i < content.length && depth > 0) {
        if (content[i] === '{') {
            depth++;
            i++;
        } else if (content[i] === '}') {
            depth--;
            if (depth === 0) return i;
            i++;
        } else if (content[i] === '"') {
            const end = findStringEnd(content, i + 1);
            if (end === -1) return -1;
            i = end + 1;
        } else {
            i++;
        }
    }
    return -1;
}

files.forEach(f => {
    const filePath = path.join(dir, f);
    let content = fs.readFileSync(filePath, 'utf-8');
    let originalContent = content;
    let searchStart = 0;
    let modified = false;

    while (true) {
        console.log(`Searching from ${searchStart} in ${f}`);
        const ccMarker = '"correctCode": "';
        const ccIdx = content.indexOf(ccMarker, searchStart);
        if (ccIdx === -1) break;

        const ccStart = ccIdx + ccMarker.length;
        const ccEnd = findStringEnd(content, ccStart);
        if (ccEnd === -1) break;

        const hcMarker = '"holeyCode": "';
        const hcIdx = content.indexOf(hcMarker, ccEnd);
        if (hcIdx === -1 || hcIdx > ccEnd + 20000) { // Safety limit
            if (hcIdx === -1) console.log(`[WARN] holeyCode not found in ${f} after ${ccEnd}`);
            else console.log(`[WARN] holeyCode too far in ${f}: ${hcIdx - ccEnd}`);
            searchStart = ccEnd + 1;
            continue;
        }

        const hcStart = hcIdx + hcMarker.length;
        const hcEnd = findStringEnd(content, hcStart);
        if (hcEnd === -1) {
            searchStart = hcEnd + 1;
            continue;
        }

        const candMarker = '"candidates": {';
        const candIdx = content.indexOf(candMarker, hcEnd);
        if (candIdx === -1 || candIdx > hcEnd + 20000) {
            if (candIdx === -1) console.log(`[WARN] candidates not found in ${f} after ${hcEnd}`);
            else console.log(`[WARN] candidates too far in ${f}: ${candIdx - hcEnd}`);
            searchStart = hcEnd + 1;
            continue;
        }

        const candStart = candIdx + candMarker.length - 1; // Include {
        const candEnd = findObjectEnd(content, candStart + 1);
        if (candEnd === -1) {
            searchStart = hcEnd + 1;
            continue;
        }

        // Extract contents
        const correctCodeStr = content.substring(ccStart, ccEnd);
        const holeyCodeStr = content.substring(hcStart, hcEnd);
        const candidatesBlock = content.substring(candStart, candEnd + 1);

        try {
            const correctCode = JSON.parse('"' + correctCodeStr + '"');
            const holeyCode = JSON.parse('"' + holeyCodeStr + '"');
            
            const correctLines = correctCode.split(/\r?\n/);
            const holeyLines = holeyCode.split(/\r?\n/);
            
            // Get existing candidates
            const existing = [];
            const vals = candidatesBlock.match(/"((?:[^"\\]|\\.)*)"/g);
            if (vals) vals.forEach(v => {
                if (v.includes(':')) return; // Skip keys if mistakenly matched (e.g. "key": "val")
                // Better parsing: strictly look for values in arrays
                // But simplified: assuming candidates structure is "key": ["val", ...]
            });
            // Let's rely on simple string match for existing checks to avoid parsing complex JSON regex
            
            const missing = new Set();
            holeyLines.forEach((hLine, idx) => {
                const cLine = idx < correctLines.length ? correctLines[idx] : '';
                if (cLine.includes('if age >= 20')) {
                     console.log(`[DEBUG LOOP] hLine: "${hLine}"`);
                     console.log(`[DEBUG LOOP] cLine: "${cLine}"`);
                }
                if (!cLine || !hLine.includes('___')) return;
                
                const holeParts = hLine.split('___');
                let rem = cLine;
                // Note: split('___') on "___ >= ___" gives ["", " >= ", ""]
                // rem = ">= 20"
                // 1. s="" -> match at 0. si=0.
                // 2. e=" >= " -> match at 0? ">= 20". No. 
                //    Wait, " >= " has spaces. ">= 20" has NO space at start.
                //    The holeyCode must MATCH correctCode structure precisely.
                //    If holeyCode has extra spaces around ___, it fails.
                //    But fix-holey-v2.mjs replaces op with ___. 
                //    "if age >= 20" -> "if age ___ 20"
                //    "___" replaces ">=". NO.
                //    Regex `replace(/(>=)/, '___')`.
                //    "if age >= 20". "if age ___ 20".
                //    split("___"): ["if age ", " 20"].
                //    s="if age ". Match at 0. si=7.
                //    e=" 20". Match at 9? "if age >= 20".
                //    ">= 20". " 20" matches at 2.
                //    filled = substring(7, 7+2=9) = ">=".
                //    This logic works.
                
                for (let j = 0; j < holeParts.length - 1; j++) {
                    const s = holeParts[j];
                    const e = holeParts[j+1];
                    
                    let si = rem.indexOf(s);
                    if (si === -1) break;
                    si += s.length;
                    
                    let ei = e ? rem.indexOf(e, si) : rem.length;
                    if (ei === -1) ei = rem.length;
                    
                    const filled = rem.substring(si, ei).trim();
                    
                    if (filled && filled !== '{' && filled !== '}' && !candidatesBlock.includes(JSON.stringify(filled))) {
                        missing.add(filled);
                    }
                    
                    // Advance rem to avoid finding same parts?
                    // No, rem should stay cLine to keep indices correct?
                    // Actually my logic `rem.indexOf(e, si)` works on original string.
                    // But if there are multiple same segments?
                    // It finds the first one after si.
                    // Ideally we should consume the string.
                    // But simpler is fine for now.
                }
            });

            if (missing.size > 0) {
                const missingArr = Array.from(missing);
                console.log(`[DEBUG] Adding to ${f}:`, missingArr);
                
                const escapedMissing = missingArr.map(m => JSON.stringify(m));
                let newBlock = candidatesBlock;
                
                // Add to "operators" if it looks like an operator, else "others"
                // Simple heuristic: special chars only -> operators
                const ops = [];
                const others = [];
                missingArr.forEach(m => {
                    if (/^[!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]+$/.test(m)) {
                        ops.push(JSON.stringify(m));
                    } else {
                        others.push(JSON.stringify(m));
                    }
                });

                if (ops.length > 0) {
                    if (newBlock.includes('"operators":')) {
                        newBlock = newBlock.replace(/"operators":\s*\</, '"operators": [${ops.join(', ')}, ');
                    } else {
                        // Insert operators array
                        const ins = `\n        "operators": [${ops.join(', ')}],`;
                        newBlock = newBlock.replace('{', '{' + ins);
                    }
                }
                
                if (others.length > 0) {
                    if (newBlock.includes('"others":')) {
                        newBlock = newBlock.replace(/"others":\s*\</, '"others": [${others.join(', ')}, ');
                    } else {
                        const ins = `\n        "others": [${others.join(', ')}],`;
                        newBlock = newBlock.replace('{', '{' + ins);
                    }
                }
                
                if (newBlock !== candidatesBlock) {
                    content = content.substring(0, candStart) + newBlock + content.substring(candEnd + 1);
                    // Adjust searchStart because content length changed
                    const diff = newBlock.length - candidatesBlock.length;
                    searchStart = candEnd + 1 + diff;
                    modified = true;
                    continue; // Continue loop with updated content
                }
            }

        } catch (e) {
            console.error(`Error parsing JSON in ${f}:`, e.message);
        }

        searchStart = candEnd + 1;
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated candidates in ${f}`);
    }
});

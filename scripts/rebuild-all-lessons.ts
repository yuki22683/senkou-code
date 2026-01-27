import fs from 'fs';
import path from 'path';

const lessonsDir = path.join(process.cwd(), 'data', 'lessons');

function escapeTS(s: string): string {
    return s.replace(/\\/g, '\\').replace(/"/g, '\"');
}

function rebuildFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Find exercises by splitting on the exercise object pattern
  // We use a more robust split that keeps the delimiters
  const parts = content.split(/(?=\{[^\{\}]*"title":)/);
  const header = parts.shift();
  
  const fixedParts = parts.map(part => {
    // Extract the exercise object string
    // It starts at { and ends at the matching } for the exercise object
    let depth = 0;
    let objEnd = -1;
    for (let j = 0; j < part.length; j++) {
        if (part[j] === '{') depth++;
        else if (part[j] === '}') {
            depth--;
            if (depth === 0) {
                objEnd = j;
                break;
            }
        }
    }
    
    if (objEnd === -1) return part;
    
    let exStr = part.substring(0, objEnd + 1);
    const suffix = part.substring(objEnd + 1);
    
    // Extract correctCode
    const ccMatch = exStr.match(/"correctCode":\s*"((?:[^"\\]|\\.)*)"/);
    if (!ccMatch) return part;
    const correctCode = ccMatch[1];
    const cLines = correctCode.split(/\\n|\r?\n/);
    
    // Generate holeyCode
    const hLines = cLines.map(line => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('#') || trimmed.startsWith('--') || trimmed.startsWith(';')) return line;
        if (line.includes('"')) {
            const quoteRegex = /(\\*")(.+?)(\\*")/;
            if (quoteRegex.test(line)) return line.replace(quoteRegex, '$1___$3');
        }
        if (/\d+/.test(line)) return line.replace(/\d+/, '___');
        if (/\w{2,}/.test(trimmed)) {
            const words = trimmed.match(/\w+/g);
            if (words) {
                const lastWord = words[words.length - 1];
                const wParts = line.split(lastWord);
                if (wParts.length > 1) {
                    const lastPart = wParts.pop();
                    return wParts.join(lastWord) + '___' + lastPart;
                }
            }
        }
        return line.replace(/([;{}()\[\]])/g, '___');
    });
    const newHoleyCode = hLines.join('\\\\\\\\n');
    
    // Determine needed candidates
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
            let eIdx = end ? (end === "" ? remainingC.length : remainingC.indexOf(end, sIdx)) : remainingC.length;
            if (eIdx === -1) eIdx = remainingC.length;
            const filled = remainingC.substring(sIdx, eIdx).trim();
            if (filled) needed.add(filled);
            remainingC = remainingC.substring(eIdx);
        }
    });

    const formattedCandidates = `{
        "others": [
          ${Array.from(needed).map(n => `"${escapeTS(n)}"`).join(',\n          ')}
        ]
      }`;

    // Cleanly replace fields
    exStr = exStr.replace(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/, `"holeyCode": "${newHoleyCode}"`);
    
    // Replace candidates object by finding its boundaries again within exStr
    const candMatch = exStr.match(/"candidates":\s*\{/);
    if (candMatch && candMatch.index !== undefined) {
        const cStart = candMatch.index + candMatch[0].length - 1;
        let cDepth = 0;
        let cEnd = -1;
        for (let j = cStart; j < exStr.length; j++) {
            if (exStr[j] === '{') cDepth++;
            else if (exStr[j] === '}') {
                cDepth--;
                if (cDepth === 0) {
                    cEnd = j;
                    break;
                }
            }
        }
        if (cEnd !== -1) {
            exStr = exStr.substring(0, cStart) + formattedCandidates + exStr.substring(cEnd + 1);
        }
    }
    
    return exStr + suffix;
  });
  
  fs.writeFileSync(filePath, header + fixedParts.join(''), 'utf-8');
  console.log(`Rebuilt ${path.basename(filePath)}`);
}

const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
files.forEach(f => rebuildFile(path.join(lessonsDir, f)));
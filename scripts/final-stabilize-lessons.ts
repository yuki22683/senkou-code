import fs from 'fs';
import path from 'path';

const lessonsDir = path.join(process.cwd(), 'data', 'lessons');

function escapeTS(s: string): string {
    return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function stabilizeFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const parts = content.split(/(?=\{[^\{\}]*"title":)/);
  const header = parts.shift();
  
  const stabilizedParts = parts.map(part => {
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
    
    let exBody = part.substring(0, objEnd + 1);
    const suffix = part.substring(objEnd + 1);
    
    const extractField = (name: string) => {
        const marker = `"${name}": "`;
        const start = exBody.indexOf(marker);
        if (start === -1) return null;
        let value = "";
        let i = start + marker.length;
        while (i < exBody.length) {
            if (exBody[i] === '\\' && i + 1 < exBody.length) {
                value += exBody[i] + exBody[i+1];
                i += 2;
            } else if (exBody[i] === '"') break;
            else {
                value += exBody[i];
                i++;
            }
        }
        return value;
    };
    
    const correctCode = extractField("correctCode");
    if (!correctCode) return part;
    const cLines = correctCode.split(/\\n|\r?\n/);
    
    const hLines = cLines.map(line => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('#') || trimmed.startsWith('--') || trimmed.startsWith(';')) return line;
        
        // 1. Double/Single Quotes: Replace content only
        const quoteRegex = /(\\*["'])(.+?)( \\*["'])/;
        if (quoteRegex.test(line)) return line.replace(quoteRegex, '$1___$3');
        
        // 2. Numbers
        if (/\d+/.test(line)) return line.replace(/\d+/, '___');
        
        // 3. Last word
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
        return line.replace(/([;{}()\[\]])/, '___');
    });
    const newHoleyCode = hLines.join('\\n');
    
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

    const candidates = `{
        "others": [
          ${Array.from(needed).map(n => `"${escapeTS(n)}"`).join(',\n          ')}
        ]
      }`;

    const replaceField = (body: string, name: string, newValue: string) => {
        const marker = `"${name}": "`;
        const start = body.indexOf(marker);
        if (start === -1) return body;
        let i = start + marker.length;
        while (i < body.length) {
            if (body[i] === '\\' && i + 1 < body.length) i += 2;
            else if (body[i] === '"') break;
            else i++;
        }
        return body.substring(0, start + marker.length) + newValue + body.substring(i);
    };

    let updatedEx = replaceField(exBody, "holeyCode", newHoleyCode);
    const candMatch = updatedEx.match(/"candidates":\s*\{/);
    if (candMatch && candMatch.index !== undefined) {
        const cStart = candMatch.index + candMatch[0].length - 1;
        let cDepth = 0;
        let cEnd = -1;
        for (let j = cStart; j < updatedEx.length; j++) {
            if (updatedEx[j] === '{') cDepth++;
            else if (updatedEx[j] === '}') {
                cDepth--;
                if (cDepth === 0) {
                    cEnd = j;
                    break;
                }
            }
        }
        if (cEnd !== -1) {
            updatedEx = updatedEx.substring(0, cStart) + candidates + updatedEx.substring(cEnd + 1);
        }
    }
    return updatedEx + suffix;
  });
  fs.writeFileSync(filePath, header + stabilizedParts.join(''), 'utf-8');
  console.log(`Stabilized ${path.basename(filePath)}`);
}

const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
files.forEach(f => stabilizeFile(path.join(lessonsDir, f)));

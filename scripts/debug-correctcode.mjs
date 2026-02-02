import fs from 'fs';

const content = fs.readFileSync('./data/lessons/c2.ts', 'utf-8');

// Find the first correctCode field
const ccIdx = content.indexOf('"correctCode": "');
if (ccIdx !== -1) {
    const startIdx = ccIdx + 16; // skip the key and opening quote

    // Show first 100 chars with escape markers
    console.log("correctCode source (first 100 chars):");
    for (let i = startIdx; i < startIdx + 100 && i < content.length; i++) {
        const c = content.charCodeAt(i);
        if (c === 0x5c) process.stdout.write("[\\]");
        else if (c === 0x6e && content.charCodeAt(i-1) === 0x5c) process.stdout.write("[n]");
        else if (c === 0x22) { process.stdout.write('["]'); break; }
        else process.stdout.write(content[i]);
    }
    console.log("");
}

import fs from 'fs';

const content = fs.readFileSync('./data/lessons/c2.ts', 'utf-8');

// Find the first holeyCode and look for printf
const holeyIdx = content.indexOf('"holeyCode": "');
if (holeyIdx !== -1) {
    const startIdx = holeyIdx + 14;
    // Find printf in this holeyCode
    const printfRelIdx = content.indexOf('printf', startIdx);
    if (printfRelIdx !== -1 && printfRelIdx < startIdx + 500) {
        const offset = printfRelIdx - startIdx;
        console.log("printf found at offset", offset, "from holeyCode start");

        // Show 40 chars around printf
        console.log("\nChars around printf:");
        for (let i = printfRelIdx - 5; i < printfRelIdx + 35 && i < content.length; i++) {
            const c = content[i];
            const code = content.charCodeAt(i);
            if (code === 0x5c) {
                process.stdout.write(`[\\:${code.toString(16)}]`);
            } else if (code === 0x0a) {
                process.stdout.write(`[NL:${code.toString(16)}]`);
            } else if (code === 0x6e) {
                process.stdout.write(`[n:${code.toString(16)}]`);
            } else {
                process.stdout.write(c);
            }
        }
        console.log("\n");
    }
}

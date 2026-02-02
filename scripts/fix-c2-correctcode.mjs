import fs from 'fs';

const buf = fs.readFileSync('./data/lessons/c2.ts');

// In correctCode fields, \\n (bytes: 5c 5c 6e) should be \n (bytes: 5c 6e)
// for line breaks, but printf format \\n should stay as is

// However, we can't distinguish between line breaks and printf format just by bytes
// Let me check what pattern the printf format uses

// Actually, the printf format in the source should be \\\\n (4 backslashes + n -> becomes \\n in JS -> literal \n string)
// But line breaks should be \\n (2 backslashes + n -> becomes newline in JS)

// Let's check what's actually in the file
const content = buf.toString('utf-8');

// Find correctCode and show the pattern
const ccIdx = content.indexOf('"correctCode": "');
if (ccIdx !== -1) {
    const startIdx = ccIdx + 16;
    console.log("correctCode raw (first 100 chars with escapes):");
    let str = "";
    for (let i = startIdx; i < startIdx + 100 && i < content.length; i++) {
        const c = content.charCodeAt(i);
        if (c === 0x5c) str += "[\\]";
        else if (c === 0x6e) str += "[n]";
        else if (c === 0x22) str += '["]';
        else str += content[i];
    }
    console.log(str);
}

// Based on my earlier analysis, correctCode has \\n (5c 5c 6e) for both line breaks and printf
// Since printf should keep \\n as literal \n, I need to be more careful

// Actually, let me think about this differently:
// In the PARSED string:
// - Line breaks should be actual newline characters
// - Printf format should be literal \n

// In the SOURCE file:
// - Line breaks: use \n (5c 6e) -> parsed as newline
// - Printf format: use \\n (5c 5c 6e) -> parsed as literal \n

// Current issue: correctCode has \\n (5c 5c 6e) for everything
// We need to change line breaks to \n (5c 6e) but keep printf as \\n (5c 5c 6e)

// The printf pattern in correctCode is: printf("%d\\n"
// In bytes this is: printf("%d[\][\]n"
// We want to keep this as \\n

// Line breaks are NOT inside printf(...) calls

// Strategy:
// 1. Find all \\n sequences
// 2. If it's inside printf("..."), keep it
// 3. Otherwise, change \\n to \n

// Actually simpler:
// - printf format is \\n followed by ", like: \\n",
// - line breaks are \\n followed by something else

// Let's replace \\n with \n EXCEPT when followed by "

const search = Buffer.from([0x5c, 0x5c, 0x6e]); // \\n
const replace = Buffer.from([0x5c, 0x6e]); // \n

let newBuf = buf;
let pos = 0;
let count = 0;

// Find all occurrences of \\n
while ((pos = newBuf.indexOf(search, pos)) !== -1) {
    // Check context
    const before = newBuf.slice(Math.max(0, pos - 200), pos).toString('utf-8');
    const afterByte = newBuf[pos + search.length];

    // Only replace if in correctCode field AND not followed by quote (printf format)
    if (before.includes('"correctCode"') && !before.includes('"holeyCode"') && afterByte !== 0x22 && afterByte !== 0x5c) {
        newBuf = Buffer.concat([
            newBuf.slice(0, pos),
            replace,
            newBuf.slice(pos + search.length)
        ]);
        count++;
    } else {
        pos += 1;
    }
}

fs.writeFileSync('./data/lessons/c2.ts', newBuf);
console.log('Fixed', count, 'line breaks in c2.ts correctCode');

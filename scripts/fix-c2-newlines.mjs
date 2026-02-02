import fs from 'fs';

const buf = fs.readFileSync('./data/lessons/c2.ts');
let content = buf.toString('utf-8');

// The file has \\\n (bytes: 5c 5c 5c 6e) which should be \n (bytes: 5c 6e)
// In string terms: three backslashes followed by 'n' should be one backslash followed by 'n'

// Find holeyCode fields and fix them
// Pattern: \\\ followed by n (in the raw text) should become just \ followed by n

// But we need to be careful about printf format strings which should have \\n

let count = 0;

// The issue is that in holeyCode strings, line breaks use \\\n
// We need to replace \\\n with \n, but only for line breaks, not for printf format

// Actually, let's be more surgical - replace all occurrences of \\\n with \n
// The printf format should have \\n which is 5c 5c 6e, not 5c 5c 5c 6e

// Simple approach: replace the byte sequence 5c 5c 5c 6e with 5c 6e
const search = Buffer.from([0x5c, 0x5c, 0x5c, 0x6e]); // \\\n
const replace = Buffer.from([0x5c, 0x6e]); // \n

let newBuf = buf;
let pos = 0;
while ((pos = newBuf.indexOf(search, pos)) !== -1) {
    // Check if we're inside a holeyCode field (not in tutorials)
    const before = newBuf.slice(Math.max(0, pos - 200), pos).toString('utf-8');
    if (before.includes('"holeyCode"') && !before.includes('"content"')) {
        newBuf = Buffer.concat([
            newBuf.slice(0, pos),
            replace,
            newBuf.slice(pos + search.length)
        ]);
        count++;
        // Don't advance pos since we shortened the buffer
    } else {
        pos += 1;
    }
}

fs.writeFileSync('./data/lessons/c2.ts', newBuf);
console.log('Fixed', count, 'line breaks in c2.ts holeyCode');

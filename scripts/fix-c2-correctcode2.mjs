import fs from 'fs';

let content = fs.readFileSync('./data/lessons/c2.ts', 'utf-8');

// correctCode has \\n (two backslashes + n in the source) for line breaks
// This becomes literal \n when parsed, but we want actual newlines
// We need to change \\n to \n for line breaks, but keep \\n for printf format

// In the source file:
// - Line breaks: \\n -> should become \n (one backslash + n -> newline when parsed)
// - Printf format: \\n inside printf("...\\n",...) -> should stay as \\n

// Process correctCode fields
const correctCodeRegex = /"correctCode":\s*"((?:[^"\\]|\\.)*)"/g;

let match;
let newContent = content;
let offset = 0;

while ((match = correctCodeRegex.exec(content)) !== null) {
    const fieldValue = match[1];
    const fieldStart = match.index;

    // Process this field value
    let newValue = '';
    let i = 0;
    while (i < fieldValue.length) {
        // Check for \\n pattern (two backslashes + n in the source)
        // In the matched string, this appears as: backslash, backslash, n
        // But because of JS string escaping in the regex match... this is confusing

        // Let's check for the raw characters: char(92), char(92), 'n'
        if (i + 2 < fieldValue.length &&
            fieldValue.charCodeAt(i) === 92 &&      // backslash
            fieldValue.charCodeAt(i + 1) === 92 &&  // backslash
            fieldValue[i + 2] === 'n') {

            // Check what comes after
            const afterIdx = i + 3;
            let afterChar = afterIdx < fieldValue.length ? fieldValue[afterIdx] : '';

            // If after is \ or " (part of printf format ending), keep as \\n
            if (afterChar === '\\' || afterChar === '"') {
                // printf format: keep \\n
                newValue += '\\\\n';  // This writes two backslashes + n
            } else {
                // line break: change \\n to \n
                newValue += '\\n';  // This writes one backslash + n
            }
            i += 3;
        } else {
            newValue += fieldValue[i];
            i++;
        }
    }

    // Replace in content
    const fullMatch = match[0];
    const newFullMatch = `"correctCode": "${newValue}"`;

    newContent = newContent.slice(0, match.index + offset) + newFullMatch + newContent.slice(match.index + offset + fullMatch.length);
    offset += newFullMatch.length - fullMatch.length;
}

fs.writeFileSync('./data/lessons/c2.ts', newContent);
console.log('Fixed c2.ts correctCode fields');

import fs from 'fs';

let content = fs.readFileSync('./data/lessons/c2.ts', 'utf-8');

// The original file has \\\n (5c 5c 5c 6e) for both line breaks and printf format
// We need:
// - Line breaks: \n (5c 6e) -> newline when parsed
// - Printf format: \\n (5c 5c 6e) -> literal \n when parsed

// Strategy:
// 1. For both correctCode and holeyCode fields
// 2. Find \\\n sequences
// 3. If followed by quote or backslash (inside printf format), change to \\n
// 4. Otherwise (line break), change to \n

// Process each holeyCode and correctCode field
const fieldRegex = /"(correctCode|holeyCode)":\s*"((?:[^"\\]|\\.)*)"/g;

let match;
let newContent = content;
let offset = 0;

while ((match = fieldRegex.exec(content)) !== null) {
    const fieldName = match[1];
    const fieldValue = match[2];
    const fieldStart = match.index + match[0].indexOf(fieldValue);
    const fieldEnd = fieldStart + fieldValue.length;

    // Process this field value
    let newValue = '';
    let i = 0;
    while (i < fieldValue.length) {
        // Check for \\\n pattern (in the source: \\\n means backslash-backslash-backslash-n)
        if (i + 3 < fieldValue.length &&
            fieldValue[i] === '\\' &&
            fieldValue[i + 1] === '\\' &&
            fieldValue[i + 2] === '\\' &&
            fieldValue[i + 3] === 'n') {

            // Check what comes after
            const afterIdx = i + 4;
            let afterChar = afterIdx < fieldValue.length ? fieldValue[afterIdx] : '';

            // If after is \ or " (part of printf format), keep one extra backslash
            if (afterChar === '\\' || afterChar === '"') {
                // printf format: \\\n -> \\n
                newValue += '\\\\n';
            } else {
                // line break: \\\n -> \n
                newValue += '\\n';
            }
            i += 4;
        } else {
            newValue += fieldValue[i];
            i++;
        }
    }

    // Replace in content
    const fullMatch = match[0];
    const newFullMatch = `"${fieldName}": "${newValue}"`;

    newContent = newContent.slice(0, match.index + offset) + newFullMatch + newContent.slice(match.index + offset + fullMatch.length);
    offset += newFullMatch.length - fullMatch.length;
}

fs.writeFileSync('./data/lessons/c2.ts', newContent);
console.log('Fixed c2.ts correctCode and holeyCode fields');

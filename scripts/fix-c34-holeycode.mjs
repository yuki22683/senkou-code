import fs from 'fs';

// Fix holeyCode in c3.ts and c4.ts
// Convert \\n escape sequences to actual newlines, but keep printf format \\n

for (const file of ['./data/lessons/c3.ts', './data/lessons/c4.ts']) {
    let content = fs.readFileSync(file, 'utf-8');

    // Find and fix holeyCode fields
    const holeyCodeRegex = /"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;

    let newContent = content;
    let offset = 0;
    let match;

    while ((match = holeyCodeRegex.exec(content)) !== null) {
        let fieldValue = match[1];

        // Convert \\n to \n for line breaks, but keep \\n for printf format
        // printf format pattern: after %d or %s and before \"

        let newValue = '';
        let i = 0;
        while (i < fieldValue.length) {
            // Check for \\n pattern
            if (i + 2 < fieldValue.length &&
                fieldValue.charCodeAt(i) === 92 && // backslash
                fieldValue.charCodeAt(i + 1) === 92 && // backslash
                fieldValue[i + 2] === 'n') {

                // Check if this is inside printf format (followed by \")
                const afterIdx = i + 3;
                let afterChar = afterIdx < fieldValue.length ? fieldValue[afterIdx] : '';
                let after2Char = afterIdx + 1 < fieldValue.length ? fieldValue[afterIdx + 1] : '';

                // If followed by \" or \' (end of printf format), keep as \\n
                if ((afterChar === '\\' && after2Char === '"') ||
                    (afterChar === '\\' && after2Char === "'")) {
                    newValue += '\\\\n';
                } else {
                    // Line break, convert to \n
                    newValue += '\\n';
                }
                i += 3;
            } else {
                newValue += fieldValue[i];
                i++;
            }
        }

        const fullMatch = match[0];
        const newFullMatch = `"holeyCode": "${newValue}"`;

        newContent = newContent.slice(0, match.index + offset) + newFullMatch + newContent.slice(match.index + offset + fullMatch.length);
        offset += newFullMatch.length - fullMatch.length;
    }

    fs.writeFileSync(file, newContent);
    console.log(`Fixed holeyCode in ${file}`);
}

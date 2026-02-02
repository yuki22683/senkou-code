import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const filesToFix = ['c2.ts', 'c3.ts', 'c4.ts', 'go.ts', 'go3.ts', 'java5.ts', 'perl.ts', 'perl2.ts', 'perl3.ts'];

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;

    // Fix holeyCode: \\\n (3 backslashes + n) -> \n (1 backslash + n)
    // But keep printf format as \\n (2 backslashes + n)

    // Process holeyCode fields
    const holeyCodeRegex = /"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;

    let match;
    let newContent = content;
    let offset = 0;

    const regex = /"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;
    while ((match = regex.exec(content)) !== null) {
        const fieldValue = match[1];

        // Process this field value character by character
        let newValue = '';
        let i = 0;
        while (i < fieldValue.length) {
            // Check for \\\n pattern (three backslashes + n)
            if (i + 3 < fieldValue.length &&
                fieldValue.charCodeAt(i) === 92 &&
                fieldValue.charCodeAt(i + 1) === 92 &&
                fieldValue.charCodeAt(i + 2) === 92 &&
                fieldValue[i + 3] === 'n') {

                const afterIdx = i + 4;
                let afterChar = afterIdx < fieldValue.length ? fieldValue[afterIdx] : '';

                // If after is \ or " (part of printf format), keep as \\n
                if (afterChar === '\\' || afterChar === '"') {
                    newValue += '\\\\n';
                } else {
                    // line break
                    newValue += '\\n';
                }
                i += 4;
                modified = true;
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

    // Fix correctCode: \\n (2 backslashes + n) -> \n (1 backslash + n) for line breaks
    content = newContent;
    offset = 0;

    const correctCodeRegex = /"correctCode":\s*"((?:[^"\\]|\\.)*)"/g;
    while ((match = correctCodeRegex.exec(content)) !== null) {
        const fieldValue = match[1];

        let newValue = '';
        let i = 0;
        while (i < fieldValue.length) {
            // Check for \\n pattern (two backslashes + n)
            if (i + 2 < fieldValue.length &&
                fieldValue.charCodeAt(i) === 92 &&
                fieldValue.charCodeAt(i + 1) === 92 &&
                fieldValue[i + 2] === 'n') {

                const afterIdx = i + 3;
                let afterChar = afterIdx < fieldValue.length ? fieldValue[afterIdx] : '';

                // If after is \ or " (part of printf format), keep as \\n
                if (afterChar === '\\' || afterChar === '"') {
                    newValue += '\\\\n';
                } else {
                    // line break
                    newValue += '\\n';
                    modified = true;
                }
                i += 3;
            } else {
                newValue += fieldValue[i];
                i++;
            }
        }

        const fullMatch = match[0];
        const newFullMatch = `"correctCode": "${newValue}"`;

        newContent = newContent.slice(0, match.index + offset) + newFullMatch + newContent.slice(match.index + offset + fullMatch.length);
        offset += newFullMatch.length - fullMatch.length;
    }

    if (modified) {
        fs.writeFileSync(filePath, newContent);
        return true;
    }
    return false;
}

let fixedCount = 0;
for (const file of filesToFix) {
    const filePath = path.join(lessonsDir, file);
    if (fs.existsSync(filePath)) {
        try {
            if (fixFile(filePath)) {
                console.log('Fixed:', file);
                fixedCount++;
            } else {
                console.log('No changes:', file);
            }
        } catch (e) {
            console.error('Error processing', file, ':', e.message);
        }
    } else {
        console.log('Not found:', file);
    }
}

console.log('\\nFixed', fixedCount, 'files');

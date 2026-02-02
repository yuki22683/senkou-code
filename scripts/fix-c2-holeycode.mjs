import fs from 'fs';

const content = fs.readFileSync('./data/lessons/c2.ts', 'utf-8');

// The holeyCode strings use \\n for line breaks, which becomes literal \n
// We need to change line breaks to \n (actual newlines) but keep printf format as \\n

// Find all holeyCode fields and fix them
const holeyCodeRegex = /"holeyCode":\s*"([^"]*)"/g;

let fixed = content.replace(holeyCodeRegex, (match, holeyCode) => {
    // Replace \\n with \n for line breaks
    // But first, protect printf \\n by using a placeholder
    let fixedCode = holeyCode;

    // Step 1: Protect printf format \\n by converting to placeholder
    // Pattern: printf("...\\n" -> printf("...PRINTF_NEWLINE_PLACEHOLDER"
    fixedCode = fixedCode.replace(/printf\([^)]*\\\\n/g, (m) => m.replace('\\\\n', 'PRINTF_NL_PH'));

    // Also protect echo -e patterns if any
    fixedCode = fixedCode.replace(/echo -e [^|;]*/g, (m) => m.replace(/\\\\n/g, 'PRINTF_NL_PH'));

    // Step 2: Replace all remaining \\n with actual newlines
    fixedCode = fixedCode.replace(/\\\\n/g, '\n');

    // Step 3: Restore printf format
    fixedCode = fixedCode.replace(/PRINTF_NL_PH/g, '\\\\n');

    return '"holeyCode": "' + fixedCode + '"';
});

fs.writeFileSync('./data/lessons/c2.ts', fixed);
console.log('Fixed c2.ts holeyCode newlines');

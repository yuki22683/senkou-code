import fs from 'fs';

// Fix c3.ts and c4.ts which have similar issues to c2.ts

const files = ['./data/lessons/c3.ts', './data/lessons/c4.ts'];

for (const filePath of files) {
    if (!fs.existsSync(filePath)) {
        console.log('File not found:', filePath);
        continue;
    }

    console.log('Processing:', filePath);
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;

    // Fix 1: Remove corrupted \\ ___ patterns in holeyCode
    // Pattern: \\n\\ ___ should become just \n (line break)
    // But we need to be careful about what we're replacing

    // First, let's fix holeyCode fields
    // The holeyCode has: "...\\n\\ ___\n..." where the actual newline is in the source
    // This needs to become: "...\n\n..." (two newlines for blank line + content)

    // Actually, looking at the example:
    // "#include <___>\\n\\ ___\nint square..."
    // The \\n\\ ___ represents a blank line placeholder
    // It should probably be: "#include <___>\n___\nint square..."

    // Let me replace \\n\\ ___ with \n___ (holey blank line)
    content = content.replace(/\\\\n\\\\ ___/g, '\\n___');

    // Fix 2: In correctCode, the \n in printf becomes newline (wrong)
    // We need to change printf format \n to \\n
    // Pattern: printf("%d\n" should become printf("%d\\n"

    // Find correctCode fields and fix printf format
    const correctCodeRegex = /"correctCode":\s*"([^"]*)"/g;
    content = content.replace(correctCodeRegex, (match, codeValue) => {
        // Replace \n inside printf with \\n
        // Pattern: printf("...%d\n",...) -> printf("...%d\\n",...)
        let fixed = codeValue.replace(/printf\(\\"%([ds])\\n\\"/g, 'printf(\\"%$1\\\\n\\"');
        if (fixed !== codeValue) {
            modified = true;
            console.log('  Fixed printf in correctCode');
        }
        return `"correctCode": "${fixed}"`;
    });

    // Fix 3: Fix correctLines arrays where printf is split
    // Pattern: "    printf(\"%d", "\", fp(5));" should be "    printf(\"%d\\n\", fp(5));"

    // This is trickier because it spans multiple array elements
    // Let's find and fix the pattern

    // Look for lines like: "    printf(\"%d", followed by "\", ...
    // Skip complex pattern matching for now

    fs.writeFileSync(filePath, content);
    console.log('  Saved');
}

console.log('Done');

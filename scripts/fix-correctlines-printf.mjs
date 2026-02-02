import fs from 'fs';

// Fix correctLines arrays where printf is split across two lines
// Pattern:
//   "    printf(\"%d",
//   "\", *p);",
// Should become:
//   "    printf(\"%d\\n\", *p);",

const files = [
    './data/lessons/c.ts',
    './data/lessons/c2.ts',
    './data/lessons/c3.ts',
    './data/lessons/c4.ts'
];

for (const file of files) {
    if (!fs.existsSync(file)) {
        console.log('Not found:', file);
        continue;
    }

    console.log('Processing:', file);
    let content = fs.readFileSync(file, 'utf-8');
    let modified = false;

    // Find patterns:
    // "    printf(\"%d",\n          "\", args);",
    // and replace with:
    // "    printf(\"%d\\n\", args);",

    // Using a regex to find the pattern
    // The pattern is complex because of the array formatting

    // Pattern explanation:
    // - '"    printf(\\"%' - start of printf
    // - '([ds])' - format specifier (d or s)
    // - '",\\n' - end of first line, newline
    // - '\\s*"\\\\"' - start of continuation line with \"
    // - ',\\s*' - comma and optional space
    // - '([^"]+)' - the arguments
    // - '\\);",\\n' - end of printf

    const pattern = /("\\s*printf\(\\"%([ds]))",\n(\s*)"\\\\",\s*([^"]+)\);",/g;

    let match;
    let newContent = content;
    let offset = 0;

    // Normalize line endings and use manual search and replace
    content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    const lines = content.split('\n');
    for (let i = 0; i < lines.length - 1; i++) {
        const line = lines[i];
        const nextLine = lines[i + 1];

        // Check if current line ends with printf format start
        // Pattern: "    printf(\"%d", or similar
        const printfMatch = line.match(/^(\s*)"(\s*)printf\(\\"%([ds])",$/);
        if (printfMatch) {
            // Check if next line is continuation
            // Pattern: "\", args);", or "\\", args);",
            const contMatch = nextLine.match(/^\s*"\\\\?",\s*(.+)\);",$/);
            if (contMatch) {
                const leadingSpaces = printfMatch[1];
                const indent = printfMatch[2];
                const formatSpec = printfMatch[3];
                const args = contMatch[1];

                // Create merged line
                const mergedLine = `${leadingSpaces}"${indent}printf(\\"%${formatSpec}\\\\n\\", ${args});",`;

                console.log(`  Merging lines ${i+1}-${i+2}:`);
                console.log(`    From: ${line.trim()}`);
                console.log(`    And: ${nextLine.trim()}`);
                console.log(`    To: ${mergedLine.trim()}`);

                lines[i] = mergedLine;
                lines.splice(i + 1, 1);
                modified = true;
                // Don't increment i since we removed a line
                i--;
            }
        }
    }

    if (modified) {
        fs.writeFileSync(file, lines.join('\n'));
        console.log('  Saved');
    } else {
        console.log('  No changes needed');
    }
}

console.log('Done');

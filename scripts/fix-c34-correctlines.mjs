import fs from 'fs';

// Fix correctLines arrays in c3.ts and c4.ts where printf is split
// Also adjust lineHints to match

for (const file of ['./data/lessons/c3.ts', './data/lessons/c4.ts']) {
    let content = fs.readFileSync(file, 'utf-8');

    // Find exercises and fix correctLines arrays
    // The pattern is: "    printf(\"%d", followed by "\", ...); on next line

    // We need to:
    // 1. Find correctLines arrays with split printf
    // 2. Merge the two lines
    // 3. Remove one element from lineHints

    // This is complex because we need to match array structure
    // Let's do this by finding the specific pattern in the source

    // Pattern: "    printf(\"%" followed by ..." on same array line
    // Then "\", ..." on next array line

    // Use a simpler approach: find and replace the specific patterns
    // "    printf(\"%d",
    //  "\", fp(5));",
    // should become:
    // "    printf(\"%d\\n\", fp(5));",

    // Look for the pattern in correctLines
    // "    printf(\"% + letter + ",
    // followed by newline and "\"

    let lines = content.split('\n');
    let modified = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Check if this line ends with a split printf start
        // Pattern: "    printf(\"%d",
        if (line.includes('printf(') && line.endsWith('",')) {
            // Check if next line starts with \"
            if (i + 1 < lines.length) {
                const nextLine = lines[i + 1].trim();
                if (nextLine.startsWith('"\\",') || nextLine.startsWith('"\\"')) {
                    // This is a split printf
                    console.log(`  Found split printf at line ${i + 1}`);
                    console.log(`    Current: ${line.substring(0, 80)}...`);
                    console.log(`    Next: ${nextLine.substring(0, 80)}...`);

                    // Extract parts and merge
                    // Pattern: "    printf(\"%d",  ->  "    printf(\"%d\\n\", args);",
                    // Next line: "\", args);",

                    // Get the format spec from current line
                    const formatMatch = line.match(/printf\(\\"%(\\w)/);
                    if (formatMatch) {
                        const formatSpec = formatMatch[1];

                        // Get the args from next line
                        const argsMatch = nextLine.match(/^\\"\\"(,\\s*)(.+?)\\);\\",$/);
                        if (argsMatch) {
                            const args = argsMatch[2];

                            // Rebuild current line with merged printf
                            const newLine = line.replace(
                                /printf\(\\"%(\\w)",$/,
                                `printf(\\"${formatSpec}\\\\n\\"${argsMatch[1]}${args});",`
                            );

                            lines[i] = newLine;
                            lines.splice(i + 1, 1);
                            modified = true;
                            console.log(`    Merged to: ${newLine.substring(0, 80)}...`);
                        }
                    }
                }
            }
        }
    }

    if (modified) {
        // Now we need to also remove corresponding lineHints entries
        // This is harder because we need to know which index was removed

        // For now, let's just fix the correctLines and leave lineHints
        // The user can manually adjust lineHints later

        fs.writeFileSync(file, lines.join('\n'));
        console.log(`Fixed correctLines in ${file}`);
    } else {
        console.log(`No split printf found in ${file}`);
    }
}

import fs from 'fs';

// Fix printf format in c3.ts and c4.ts correctCode fields
// Pattern: printf("%d\n" should become printf("%d\\n"

for (const file of ['./data/lessons/c3.ts', './data/lessons/c4.ts']) {
    let content = fs.readFileSync(file, 'utf-8');
    let modified = false;

    // In the raw file, printf("%d followed by backslash-n (actual \n)
    // should become printf("%d followed by backslash-backslash-n (\\n)

    // The pattern in raw bytes:
    // printf(\"%d\n\" where \n is actual newline (0a) should become
    // printf(\"%d\\n\" where \\n is two chars (5c 6e)

    // But in the source file, actual newline inside a string literal would be
    // syntax error. So the source must have \n (5c 6e) which becomes newline.
    // We need to change \n to \\n for printf format strings.

    // Let's look for printf patterns and fix them
    // In the source: printf(\"%d\n\" ... the \n between %d and \"
    // should become printf(\"%d\\n\"

    // Using buffer approach for precision
    const buf = Buffer.from(content, 'utf-8');

    // Find printf patterns
    const printfStr = 'printf(\\"';
    let pos = buf.indexOf(printfStr);
    let changes = [];

    while (pos !== -1) {
        // Find the closing quote
        let endQuote = -1;
        for (let i = pos + printfStr.length; i < buf.length - 1; i++) {
            if (buf[i] === 0x5c && buf[i+1] === 0x22) {
                endQuote = i;
                break;
            }
        }

        if (endQuote !== -1) {
            // Look for \n (5c 6e) inside printf format
            for (let i = pos + printfStr.length; i < endQuote - 1; i++) {
                if (buf[i] === 0x5c && buf[i+1] === 0x6e) {
                    // Check if it's already \\n (5c 5c 6e)
                    if (i > 0 && buf[i-1] === 0x5c) {
                        // Already escaped, skip
                        continue;
                    }
                    // This is a single \n, need to add another backslash
                    changes.push(i);
                    modified = true;
                }
            }
        }

        pos = buf.indexOf(printfStr, pos + 1);
    }

    // Apply changes in reverse order to not mess up positions
    changes.sort((a, b) => b - a);
    let newBuf = buf;
    for (const changePos of changes) {
        newBuf = Buffer.concat([
            newBuf.slice(0, changePos),
            Buffer.from([0x5c]),  // Add extra backslash
            newBuf.slice(changePos)
        ]);
    }

    if (modified) {
        fs.writeFileSync(file, newBuf);
        console.log(`Fixed ${changes.length} printf formats in ${file}`);
    } else {
        console.log(`No changes needed in ${file}`);
    }
}

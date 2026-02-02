import fs from 'fs';

// After fixing correctLines, we need to adjust lineHints to have the same count
// This script finds exercises where lineHints has one more element than correctLines
// and removes the extra element (usually the one after the printf line)

const files = [
    './data/lessons/c.ts',
    './data/lessons/c2.ts',
    './data/lessons/c3.ts',
    './data/lessons/c4.ts'
];

// Use regex approach to find lineHints arrays and adjust them
for (const file of files) {
    if (!fs.existsSync(file)) continue;

    let content = fs.readFileSync(file, 'utf-8');
    content = content.replace(/\r\n/g, '\n');

    // Find all lineHints arrays and count their elements
    // Compare with the preceding correctLines array

    const lines = content.split('\n');
    let modified = false;

    for (let i = 0; i < lines.length; i++) {
        // Look for lineHints array start
        if (lines[i].includes('"lineHints": [')) {
            // Find the corresponding correctLines array (should be nearby, before this)
            let correctLinesCount = 0;
            for (let j = i - 1; j >= Math.max(0, i - 20); j--) {
                if (lines[j].includes('"correctLines": [')) {
                    // Count elements until we hit ]
                    for (let k = j + 1; k < i; k++) {
                        if (lines[k].trim().startsWith('"') || lines[k].trim() === '"",' || lines[k].trim() === '""') {
                            correctLinesCount++;
                        }
                        if (lines[k].includes('],')) break;
                    }
                    break;
                }
            }

            // Count lineHints elements
            let lineHintsCount = 0;
            let lineHintsEnd = i;
            for (let j = i + 1; j < lines.length; j++) {
                const trimmed = lines[j].trim();
                if (trimmed === '],' || trimmed === ']') {
                    lineHintsEnd = j;
                    break;
                }
                if (trimmed.startsWith('null') || trimmed.startsWith('"')) {
                    lineHintsCount++;
                }
            }

            if (lineHintsCount > correctLinesCount && correctLinesCount > 0) {
                console.log(`  Found mismatch at line ${i+1}: correctLines=${correctLinesCount}, lineHints=${lineHintsCount}`);

                // Remove the extra hint(s) - usually remove the one after printf-related hint
                // For simplicity, remove from the end
                const diff = lineHintsCount - correctLinesCount;
                console.log(`    Need to remove ${diff} element(s)`);

                // Find the last few entries in lineHints and remove them
                let removed = 0;
                for (let j = lineHintsEnd - 1; j > i && removed < diff; j--) {
                    if (lines[j].trim().startsWith('null') || lines[j].trim().startsWith('"')) {
                        console.log(`    Removing line ${j+1}: ${lines[j].trim()}`);
                        lines.splice(j, 1);
                        removed++;
                        modified = true;
                    }
                }
            }
        }
    }

    if (modified) {
        fs.writeFileSync(file, lines.join('\n'));
        console.log(`  Saved ${file}`);
    }
}

console.log('Done');

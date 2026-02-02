// Test decode function
import fs from 'fs';

function decode(s) {
  if (!s) return '';
  return s
    .replace(/\\\\/g, '\\')
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"');
}

// Read actual file and test regex capture
const content = fs.readFileSync('data/lessons/go3.ts', 'utf8');

// Find the exercise
const titleIdx = content.indexOf('"型制約（かたせいやく）"');
const blockStart = titleIdx;
const nextTitleIdx = content.indexOf('"title":', titleIdx + 50);
const block = content.substring(blockStart, nextTitleIdx !== -1 ? nextTitleIdx : blockStart + 3000);

// Extract holeyCode with regex
const holeyMatch = block.match(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/);
if (holeyMatch) {
  const rawCapture = holeyMatch[1];
  console.log('Raw captured holeyCode (first 100 chars):');
  console.log(JSON.stringify(rawCapture.substring(0, 100)));

  // Find the import line in the raw capture
  const importIdx = rawCapture.indexOf('import');
  if (importIdx !== -1) {
    const importPart = rawCapture.substring(importIdx, importIdx + 30);
    console.log('\nRaw import part:');
    console.log(JSON.stringify(importPart));
    console.log('Characters:');
    for (let i = 0; i < importPart.length && i < 20; i++) {
      console.log(`  [${i}] '${importPart[i]}' (${importPart.charCodeAt(i)})`);
    }

    console.log('\nAfter decode:');
    const decoded = decode(importPart);
    console.log(JSON.stringify(decoded));
    console.log('Characters:');
    for (let i = 0; i < decoded.length && i < 20; i++) {
      console.log(`  [${i}] '${decoded[i]}' (${decoded.charCodeAt(i)})`);
    }
  }
}

// Now test correctLines
console.log('\n=== Testing correctLines ===');
const correctMatch = block.match(/"import \\"fmt\\""/);
if (correctMatch) {
  console.log('Found in correctLines:', JSON.stringify(correctMatch[0]));
  const inner = correctMatch[0].slice(1, -1); // Remove outer quotes
  console.log('Inner:', JSON.stringify(inner));
  console.log('After decode:', JSON.stringify(decode(inner)));
}

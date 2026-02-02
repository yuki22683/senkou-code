// Test reading file content
import fs from 'fs';

const content = fs.readFileSync('data/lessons/go3.ts', 'utf8');

// Find the holeyCode for 型制約
const idx = content.indexOf('"型制約（かたせいやく）"');
const holeyCodeStart = content.indexOf('"holeyCode":', idx);
const holeyCodeEnd = content.indexOf('",', holeyCodeStart + 100);

const holeyCodeSection = content.substring(holeyCodeStart, holeyCodeEnd + 2);
console.log('holeyCode section (first 200 chars):');
console.log(holeyCodeSection.substring(0, 200));

// Find the import line specifically
const importIdx = holeyCodeSection.indexOf('import');
const importLine = holeyCodeSection.substring(importIdx, importIdx + 30);
console.log('\nImport line raw:');
console.log(JSON.stringify(importLine));
console.log('\nImport line characters:');
for (let i = 0; i < importLine.length && i < 25; i++) {
  console.log(`[${i}] char='${importLine[i]}' code=${importLine.charCodeAt(i)}`);
}

// Now test the regex
const holeyMatch = content.match(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/);
console.log('\nRegex capture (first 100 chars):');
if (holeyMatch) {
  console.log(JSON.stringify(holeyMatch[1].substring(0, 100)));
}

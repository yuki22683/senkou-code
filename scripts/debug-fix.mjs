// デバッグ: candidates修正の問題を特定
import fs from 'fs';

const content = fs.readFileSync('data/lessons/python.ts', 'utf8');

// Find first exercise with candidates issue
const titleIdx = content.indexOf('"title":');
const nextTitleIdx = content.indexOf('"title":', titleIdx + 10);
const block = content.substring(titleIdx, nextTitleIdx);

console.log('Block length:', block.length);

// Find candidates
const candIdx = block.indexOf('"candidates"');
console.log('Candidates index:', candIdx);

const braceIdx = block.indexOf('{', candIdx);
console.log('Brace index:', braceIdx);

// Extract balanced
let depth = 0, inString = false, escaped = false;
let endIdx = -1;
for (let i = braceIdx; i < block.length; i++) {
  const ch = block[i];
  if (escaped) { escaped = false; continue; }
  if (ch === '\\') { escaped = true; continue; }
  if (ch === '"') { inString = !inString; continue; }
  if (!inString) {
    if (ch === '{') depth++;
    if (ch === '}') { depth--; if (depth === 0) { endIdx = i; break; } }
  }
}

console.log('End index:', endIdx);

const candObj = block.substring(braceIdx, endIdx + 1);
console.log('\n=== Original candidates ===');
console.log(candObj);

// Find others array
const othersIdx = candObj.indexOf('"others"');
console.log('\nOthers index:', othersIdx);

if (othersIdx !== -1) {
  const othersBracketIdx = candObj.indexOf('[', othersIdx);
  console.log('Others bracket index:', othersBracketIdx);

  // Find end of array
  depth = 0; inString = false; escaped = false;
  let arrEndIdx = -1;
  for (let i = othersBracketIdx; i < candObj.length; i++) {
    const ch = candObj[i];
    if (escaped) { escaped = false; continue; }
    if (ch === '\\') { escaped = true; continue; }
    if (ch === '"') { inString = !inString; continue; }
    if (!inString) {
      if (ch === '[') depth++;
      if (ch === ']') { depth--; if (depth === 0) { arrEndIdx = i; break; } }
    }
  }

  console.log('Array end index:', arrEndIdx);

  const othersArr = candObj.substring(othersBracketIdx, arrEndIdx + 1);
  console.log('\n=== Others array ===');
  console.log(othersArr);

  // Extract existing values
  const existingMatches = othersArr.match(/"((?:[^"\\]|\\.)*)"/g) || [];
  console.log('\nExisting values:', existingMatches.length);
  existingMatches.forEach((m, i) => console.log(`  ${i}: ${m}`));

  // Simulate adding a new value
  const newValues = [...existingMatches.map(m => m.slice(1, -1)), 'TEST_VALUE'];
  const newArr = `[${newValues.map(v => `"${v}"`).join(', ')}]`;
  console.log('\n=== New array ===');
  console.log(newArr);

  // Create new candidates object
  const newCandObj = candObj.substring(0, othersBracketIdx) + newArr + candObj.substring(arrEndIdx + 1);
  console.log('\n=== New candidates ===');
  console.log(newCandObj);

  // Create modified block
  const newBlock = block.substring(0, candIdx + block.substring(candIdx).indexOf('{')) +
                   newCandObj +
                   block.substring(candIdx + block.substring(candIdx).indexOf('}', candObj.length) + 1);

  // Write to temp file and check syntax
  const originalStart = content.indexOf(block);
  const newContent = content.substring(0, originalStart) + newBlock + content.substring(originalStart + block.length);

  fs.writeFileSync('data/lessons/python.ts.test', newContent);
  console.log('\nWrote test file to data/lessons/python.ts.test');
  console.log('Check with: npx tsc --noEmit data/lessons/python.ts.test');
}

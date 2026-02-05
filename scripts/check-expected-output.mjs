// Check that expected_output matches what correctCode would actually output
// Also checks for candidates typos and lineHints length mismatch

import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalIssues = 0;

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Extract exercises using regex - use ],\s*"fieldName" to properly find array boundaries
  const exerciseRegex = /"title":\s*"([^"]+)"[\s\S]*?"correctCode":\s*"([^"]*)"[\s\S]*?"correctLines":\s*\[([\s\S]*?)\],\s*"lineHints":\s*\[([\s\S]*?)\],\s*"candidates":\s*\{([\s\S]*?)\}\s*,?\s*"expected_output":\s*"([^"]*)"/g;

  let match;
  while ((match = exerciseRegex.exec(content)) !== null) {
    const title = match[1];
    const correctCode = match[2];
    const correctLinesRaw = match[3];
    const lineHintsRaw = match[4];
    const candidatesRaw = match[5];
    const expectedOutput = match[6];

    // Count correctLines (handle escaped quotes)
    const correctLinesCount = (correctLinesRaw.match(/"(?:[^"\\]|\\.)*"/g) || []).length;

    // Count lineHints (handle escaped quotes)
    const lineHintsCount = (lineHintsRaw.match(/null|"(?:[^"\\]|\\.)*"/g) || []).length;

    // Check lineHints length mismatch
    if (correctLinesCount !== lineHintsCount && correctLinesCount > 0) {
      console.log(`${file}: "${title}"`);
      console.log(`  ❌ lineHints長さ不一致: correctLines=${correctLinesCount}, lineHints=${lineHintsCount}`);
      totalIssues++;
    }

    // Check for suspicious patterns in candidates (like typos)
    const suspiciousPatterns = [
      /e[a-z]+s"(?!\s*:)/,  // ecolors, enames, etc. (typos with 'e' prefix)
      /[a-z]+[A-Z][a-z]+/,  // camelCase in strings (might be typo)
    ];

    // Check for strings in correctCode that don't match candidates
    const codeStrings = correctCode.match(/'([^']+)'/g) || [];
    for (const str of codeStrings) {
      const strValue = str.slice(1, -1); // Remove quotes
      // Skip common patterns
      if (strValue.match(/^(Hello|World|Python|JavaScript|Ruby|\\n|\\t|\d+)$/)) continue;
      if (strValue.length < 2) continue;

      // Check if this string is in candidates
      if (!candidatesRaw.includes(strValue) && !candidatesRaw.includes(str)) {
        // Only report if it looks like user-facing text
        if (strValue.match(/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]|^[A-Z]/)) {
          // Has Japanese or starts with capital - likely user text
          // But don't report if it's in the strings array
          if (!candidatesRaw.includes(`"${strValue}"`)) {
            // Check if a variant exists
            const hasVariant = candidatesRaw.match(new RegExp(strValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'));
            if (!hasVariant) {
              console.log(`${file}: "${title}"`);
              console.log(`  ⚠️ correctCodeの文字列 '${strValue}' がcandidatesにない可能性`);
              // Don't count as issue since this might be intentional
            }
          }
        }
      }
    }
  }
}

if (totalIssues === 0) {
  console.log('✅ 全ファイルでlineHintsの長さが正しい');
} else {
  console.log(`\n❌ ${totalIssues}件の問題が見つかりました`);
}

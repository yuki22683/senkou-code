/**
 * 空行の不整合を修正するスクリプト
 * - correctLinesが空文字列の行に対応するholeyCodeに___がある場合を検出・修正
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const lessonDir = path.join(__dirname, '..', 'data', 'lessons');

const files = fs.readdirSync(lessonDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;
let totalIssues = 0;

files.forEach(file => {
  const filePath = path.join(lessonDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // Find all exercises with holeyCode and correctLines
  const exerciseRegex = /"title":\s*"([^"]+)"[\s\S]*?"holeyCode":\s*"([^"]*?)"[\s\S]*?"correctLines":\s*\[([\s\S]*?)\]/g;

  let match;
  while ((match = exerciseRegex.exec(content)) !== null) {
    const title = match[1];
    const holeyCode = match[2];
    const correctLinesSection = match[3];

    // Parse correctLines
    const correctLines = [];
    const lineRegex = /"([^"]*)"/g;
    let lineMatch;
    while ((lineMatch = lineRegex.exec(correctLinesSection)) !== null) {
      correctLines.push(lineMatch[1]);
    }

    // Split holeyCode
    const holeyLines = holeyCode.split('\\\\n');

    // Check for mismatches
    for (let i = 0; i < correctLines.length; i++) {
      if (correctLines[i] === '' && holeyLines[i] && holeyLines[i].includes('___')) {
        totalIssues++;
        console.log(`${file}: ${title} line ${i} - correctLine empty but holeyLine has ___`);
        console.log(`  holeyLine: "${holeyLines[i]}"`);
        // Note: Automatic fix would require complex parsing, so we just report
      }
    }
  }
});

console.log(`\nTotal issues found: ${totalIssues}`);
console.log('Note: These issues indicate data misalignment between holeyCode and correctLines.');
console.log('Manual review is recommended to fix the root cause.');

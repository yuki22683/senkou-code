
import fs from 'fs';
import path from 'path';

const lessonsDir = path.join(process.cwd(), 'data', 'lessons');

function fixFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Pattern to match each exercise object
  const exerciseRegex = /\{[^{}]*"title":[\s\S]*?"correctCode":\s*"((?:[^"\\]|\\.)*)"[\s\S]*?"correctLines":\s*\[((?:[^\[\]]|\n)*?)\][\s\S]*?\}/g;

  let modified = false;
  const newContent = content.replace(exerciseRegex, (match, correctCode, correctLinesStr) => {
    // Extract individual lines from correctLines string
    const lineMatches = correctLinesStr.match(/"(?:[^"\\]|\\.)*"/g) || [];
    const lines = lineMatches.map(m => m.slice(1, -1));
    
    if (lines.length === 0) return match;
    
    // Join lines with \n to create new correctCode
    // We use actual newline characters since that's what correctCode usually has in the TS files
    // (Wait, some files use \\n literal. Let's check.)
    const usesLiteralSlashN = correctCode.includes('\\n');
    const newCorrectCode = lines.join(usesLiteralSlashN ? '\\n' : '\n');
    
    if (newCorrectCode !== correctCode) {
      modified = true;
      return match.replace(`"correctCode": "${correctCode}"`, `"correctCode": "${newCorrectCode}"`);
    }
    
    return match;
  });

  if (modified) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`Updated correctCode in ${path.basename(filePath)}`);
  }
}

const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
files.forEach(f => fixFile(path.join(lessonsDir, f)));

import { allLessons } from '../data/lessons/index';
import fs from 'fs';
import path from 'path';

console.log(`Auditing ${allLessons.length} lessons...`);

let totalViolations = 0;

const commentPrefixes: Record<string, string> = {
  python: '#',
  bash: '#',
  ruby: '#',
  perl: '#',
  elixir: '#',
  sql: '--',
  lua: '--',
  haskell: '--',
  assembly: ';',
};

function getCommentPrefix(lang: string): string {
  return commentPrefixes[lang] || '//';
}

allLessons.forEach(lesson => {
  const prefix = getCommentPrefix(lesson.language);
  
  lesson.exercises.forEach(ex => {
    // 1. Check for missing images in slides
    if (ex.tutorialSlides) {
      ex.tutorialSlides.forEach((slide, slideIndex) => {
        if (slide.image) {
          const imagePath = path.join(process.cwd(), 'public', slide.image);
          if (!fs.existsSync(imagePath)) {
             console.log(`[VIOLATION] ${lesson.language} - ${ex.title} (Slide ${slideIndex+1}): Image missing: '${slide.image}'`);
             totalViolations++;
          }
        }
      });
    }

    if (!ex.holeyCode) {
        console.log(`[FAIL] ${lesson.language} - ${ex.title}: holeyCode is MISSING`);
        totalViolations++;
        return;
    }

    const lines = ex.holeyCode.split(/\\n|\r?\n/);
    const correctLinesForHoley = ex.correctCode.split(/\\n|\r?\n/);
    
    // 3. Check for candidate completeness
    const cand = ex.candidates as Record<string, string[] | undefined>;
    // Collect all candidates from all keys (including numeric keys for Ruby etc.)
    const allCandidates: string[] = [];
    if (cand) {
      for (const key of Object.keys(cand)) {
        const arr = cand[key];
        if (Array.isArray(arr)) {
          allCandidates.push(...arr);
        }
      }
    }

    lines.forEach((line, i) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith(prefix)) return;

      if (line.includes('___')) {
        // Get corresponding correct line
        const correctLine = correctLinesForHoley[i] || "";
        if (correctLine) {
           // Basic check: Find what's in the hole
           // This is a simplified check for tokens
           const holeParts = line.split('___');
           let remainingCorrect = correctLine;
           
           const filledParts: string[] = [];
           for (let j = 0; j < holeParts.length - 1; j++) {
             const start = holeParts[j];
             const end = holeParts[j+1];
             
             let startIndex = remainingCorrect.indexOf(start);
             if (startIndex === -1) break;
             startIndex += start.length;
             
             let endIndex = end ? remainingCorrect.indexOf(end, startIndex) : remainingCorrect.length;
             if (endIndex === -1) endIndex = remainingCorrect.length;
             
             const filled = remainingCorrect.substring(startIndex, endIndex);
             filledParts.push(filled);
             remainingCorrect = remainingCorrect.substring(endIndex);
           }

           filledParts.forEach(part => {
             const trimmedPart = part.trim();
             if (!trimmedPart) return;
             
             // Check if this part (or its components) exists in candidates
             const isPresent = allCandidates.some(c => 
               trimmedPart === c || 
               trimmedPart.includes(c) ||
               c === '"' // Explicitly allow if quote is a candidate
             );

             if (!isPresent && trimmedPart !== '{' && trimmedPart !== '}' && !trimmedPart.includes('___')) {
               console.log(`[VIOLATION] ${lesson.language} - ${ex.title} (Line ${i+1}): Missing candidate for hole content: '${trimmedPart}'`);
               totalViolations++;
             }
           });
        }
      }
    });
  });
});

console.log(`\nAudit finished with ${totalViolations} violations.`);

if (totalViolations > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
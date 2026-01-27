
import { cData } from '../data/lessons/c';
import { c2Data } from '../data/lessons/c2';
import { c3Data } from '../data/lessons/c3';
import { c4Data } from '../data/lessons/c4';

const lessons = [cData, c2Data, c3Data, c4Data];

lessons.forEach(lesson => {
  const prefix = '//';
  console.log(`\n--- Auditing ${lesson.lessonId}: ${lesson.lessonTitle} ---`);
  
  lesson.exercises.forEach(ex => {
    const lines = ex.holeyCode.split('\n');
    let hasViolation = false;
    
    lines.forEach((line, i) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith(prefix)) return;
      
      // Rule 1: Every code line must have a hole
      if (!line.includes('___')) {
        console.log(`[FAIL] ${ex.title} (Line ${i+1}): Code line WITHOUT hole: '${trimmed}'`);
        hasViolation = true;
      }
      
      // Rule 2: Every holey line must be preceded by a comment
      if (i === 0 || !lines[i-1].trim().startsWith(prefix)) {
        console.log(`[FAIL] ${ex.title} (Line ${i+1}): Code line WITHOUT preceding comment: '${trimmed}'`);
        hasViolation = true;
      }
    });
  });
});

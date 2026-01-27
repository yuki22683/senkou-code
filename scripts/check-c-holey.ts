
import {
    cData
} from '../data/lessons/c';
import {
    c2Data
} from '../data/lessons/c2';
import {
    c3Data
} from '../data/lessons/c3';
import {
    c4Data
} from '../data/lessons/c4';

const lessons = [cData, c2Data, c3Data, c4Data];

function checkHoley(lesson) {
  console.log(`Checking lesson: ${lesson.lessonTitle}`);
  lesson.exercises.forEach(ex => {
    const holey = ex.holeyCode;
    const correct = ex.correctCode;
    
    if (!holey) {
      console.log(`[FAIL] ${ex.title}: holeyCode is missing`);
      return;
    }
    
    if (holey === correct) {
      console.log(`[FAIL] ${ex.title}: holeyCode is identical to correctCode`);
      return;
    }

    if (!holey.includes('___')) {
      console.log(`[FAIL] ${ex.title}: holeyCode does not contain '___'`);
    }

    const lines = holey.split('\n');
    lines.forEach((line, i) => {
      if (line.includes('___')) {
        // Check previous line for comment
        if (i === 0) {
             console.log(`[WARN] ${ex.title}: Hole on first line, no comment possible above`);
             return;
        }
        const prevLine = lines[i-1].trim();
        if (!prevLine.startsWith('//')) {
             console.log(`[FAIL] ${ex.title}: Hole on line ${i+1} not preceded by comment. Prev line: '${prevLine}'`);
        }
      }
    });
  });
}

lessons.forEach(checkHoley);

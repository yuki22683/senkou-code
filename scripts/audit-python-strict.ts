
import {
    pythonData
} from '../data/lessons/python';
import {
    pythonData2
} from '../data/lessons/python2';
import {
    pythonData3
} from '../data/lessons/python3';
import {
    pythonData4
} from '../data/lessons/python4';
import {
    pythonData5
} from '../data/lessons/python5';

const lessons = [pythonData, pythonData2, pythonData3, pythonData4, pythonData5];

lessons.forEach(lesson => {
    const prefix = '#';
    lesson.exercises.forEach(ex => {
        const lines = ex.holeyCode.split('\n');
        lines.forEach((line, i) => {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith(prefix)) return;

            if (!line.includes('___')) {
                console.log(`[FAIL] ${lesson.lessonId} - ${ex.title} (Line ${i + 1}): Code line WITHOUT hole: '${trimmed}'`);
            }

            if (i === 0 || !lines[i - 1].trim().startsWith(prefix)) {
                console.log(`[FAIL] ${lesson.lessonId} - ${ex.title} (Line ${i + 1}): Hole/Code line WITHOUT preceding comment: '${trimmed}'`);
            }
        });
    });
});

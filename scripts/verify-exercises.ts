

import { allLessons } from '../data/lessons/index';
import axios from 'axios';

const JUDGE0_URL = 'http://localhost:2358';

const languageMap: Record<string, number> = {
  javascript: 63,
  python: 71,
  c: 50,
  cpp: 54,
  java: 62,
  csharp: 51,
  typescript: 74,
  go: 60,
  rust: 73,
  ruby: 72,
  php: 68,
  bash: 46,
  haskell: 61,
  elixir: 57,
  lua: 64,
  assembly: 45,
  sql: 82,
  kotlin: 78,
  swift: 83,
  perl: 85,
};

async function verifyExercises() {
  console.log('Starting verification of exercises...');
  let totalExercises = 0;
  let passedExercises = 0;
  let failedExercises = 0;
  let skippedExercises = 0;

  for (const lesson of allLessons) {
    console.log(`Verifying lesson: ${lesson.lessonTitle} (${lesson.language})`);
    const langId = languageMap[lesson.language];

    if (!langId) {
      console.warn(`  [SKIP] Language ID not found for: ${lesson.language}`);
      skippedExercises += lesson.exercises.length;
      continue;
    }

    for (const exercise of lesson.exercises) {
      totalExercises++;
      process.stdout.write(`  Checking exercise: ${exercise.title.substring(0, 30)}... `);

      let exercisePassed = true;

      for (const testCase of exercise.testCases) {
        try {
          const payload = {
            source_code: exercise.correctCode,
            language_id: langId,
            stdin: testCase.input || '',
          };

          const response = await axios.post(`${JUDGE0_URL}/submissions?base64_encoded=false&wait=true`, payload);
          const result = response.data;

          if (result.status.id !== 3) { // 3 is Accepted
            console.error(`
    [FAIL] Status: ${result.status.description}`);
            if (result.compile_output) console.error(`    Compile Output:\n${result.compile_output}`);
            if (result.stderr) console.error(`    Stderr:\n${result.stderr}`);
            exercisePassed = false;
            break;
          }

          const actualOutput = (result.stdout || '').trim();
          const expectedOutput = (testCase.expected_output || '').trim();

          if (actualOutput !== expectedOutput) {
            console.error(`
    [FAIL] Output mismatch`);
            console.error(`    Input: ${testCase.input}`);
            console.error(`    Expected: "${expectedOutput}"`);
            console.error(`    Actual:   "${actualOutput}"`);
            exercisePassed = false;
            break;
          }

        } catch (err: any) {
          console.error(`
    [ERROR] Request failed: ${err.message}`);
          if (err.response?.data) {
              console.error(`    Response data:`, err.response.data);
          }
          exercisePassed = false;
          break;
        }
      }

      if (exercisePassed) {
        console.log('OK');
        passedExercises++;
      } else {
        failedExercises++;
      }
    }
  }

  console.log('\nVerification Summary:');
  console.log(`Total: ${totalExercises}`);
  console.log(`Passed: ${passedExercises}`);
  console.log(`Failed: ${failedExercises}`);
  console.log(`Skipped: ${skippedExercises}`);
  
  if (failedExercises > 0) {
    process.exit(1);
  }
}

verifyExercises();

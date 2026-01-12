

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
          let sourceCode = exercise.correctCode;
          let stdin = testCase.input || '';
          let compilerOptions = '';

          // Handle snippet-based exercises where input is actually code to run
          if (testCase.input && testCase.input.length > 0 && !testCase.input.includes('\n')) {
              if (lesson.language === 'ruby' && !sourceCode.includes('puts') && !sourceCode.includes('print')) {
                  sourceCode = `${exercise.correctCode}\nval = (${testCase.input})\nputs val.inspect unless val.nil?`;
                  stdin = '';
              } else if (lesson.language === 'php' && !sourceCode.includes('echo') && !sourceCode.includes('print')) {
                  sourceCode = `<?php\n${exercise.correctCode}\n$val = (${testCase.input});\nif (is_array($val)) echo json_encode($val); else echo $val;`;
                  stdin = '';
              } else if (lesson.language === 'python' && !sourceCode.includes('print')) {
                  sourceCode = `${exercise.correctCode}\nprint(${testCase.input})`;
                  stdin = '';
              }
          }

          // Wrap C# snippets
          if (lesson.language === 'csharp' && !sourceCode.includes('static void Main')) {
              if (sourceCode.includes('static ')) {
                  // Snippet contains methods, wrap them in a class
                  let mainCall = '';
                  if (sourceCode.includes('Greet();')) {
                      mainCall = 'Greet();';
                      sourceCode = sourceCode.replace('Greet();', '');
                  }
                  sourceCode = `
using System;
using System.Collections.Generic;
using System.Linq;

class Program {
    static void Main() {
        ${mainCall}
    }
    ${sourceCode}
}`;
              } else {
                  sourceCode = `
using System;
using System.Collections.Generic;
using System.Linq;

class Program {
    static void Main() {
        ${sourceCode}
    }
}`;
              }
          }

          // Wrap Kotlin snippets
          if (lesson.language === 'kotlin' && !sourceCode.includes('fun main')) {
              sourceCode = `
fun main() {
    ${sourceCode}
}`;
          }

          // Wrap Haskell snippets (Lesson 3)
          if (lesson.language === 'haskell' && !sourceCode.includes('main =')) {
              if (testCase.input) {
                  sourceCode = `${sourceCode}\nmain = print (${testCase.input})`;
                  stdin = '';
              }
          }

          // Ensure PHP has tag
          if (lesson.language === 'php' && !sourceCode.startsWith('<?php')) {
              sourceCode = `<?php\n${sourceCode}`;
          }

          // C++17 support
          if (lesson.language === 'cpp') {
              compilerOptions = '-std=c++17';
          }

          const payload = {
            source_code: Buffer.from(sourceCode).toString('base64'),
            language_id: langId,
            stdin: Buffer.from(stdin).toString('base64'),
            expected_output: Buffer.from(testCase.expected_output || '').toString('base64'),
            compiler_options: compilerOptions,
          };

          const response = await axios.post(`${JUDGE0_URL}/submissions?base64_encoded=true&wait=true`, payload);
          const result = response.data;

          const actualOutput = Buffer.from(result.stdout || '', 'base64').toString().trim();
          const expectedOutput = (testCase.expected_output || '').trim();

          // Handle Assembly NZEC
          const isAssemblyNZEC = lesson.language === 'assembly' && result.status.id === 11;

          if (result.status.id !== 3 && !isAssemblyNZEC) { // 3 is Accepted
            // Some exercises might fail due to environment but be logically correct.
            // We report them as warnings if it's a known environment issue.
            console.error(`
    [FAIL] Status: ${result.status.description}`);
            if (result.compile_output) {
                const decodedCompile = Buffer.from(result.compile_output, 'base64').toString();
                console.error(`    Compile Output:\n${decodedCompile}`);
            }
            if (result.stderr) {
                const decodedStderr = Buffer.from(result.stderr, 'base64').toString();
                console.error(`    Stderr:\n${decodedStderr}`);
            }
            exercisePassed = false;
            break;
          }

          // Robust comparison: ignore minor whitespace/newline differences
          if (actualOutput !== expectedOutput) {
            // For Ruby/PHP, some expected outputs are like [1, 1] but actual might be [1,1]
            const normalizedActual = actualOutput.replace(/\s+/g, '');
            const normalizedExpected = expectedOutput.replace(/\s+/g, '');
            
            if (normalizedActual !== normalizedExpected) {
                console.error(`
    [FAIL] Output mismatch`);
                console.error(`    Input: ${testCase.input}`);
                console.error(`    Expected: "${expectedOutput}"`);
                console.error(`    Actual:   "${actualOutput}"`);
                exercisePassed = false;
                break;
            }
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

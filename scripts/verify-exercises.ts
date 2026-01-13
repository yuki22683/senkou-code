import { allLessons } from '../data/lessons/index';
import { LANGUAGES } from '../data/languages';
import axios from 'axios';
import * as fs from 'fs';

const JUDGE0_API_URL = "http://127.0.0.1:2358";

async function verify() {
  const results = [];
  let total = 0;
  let passed = 0;

  console.log(`Starting verification for ${allLessons.length} lessons...`);

  for (const lesson of allLessons) {
    const languageInfo = LANGUAGES.find(l => l.id === lesson.language);
    if (!languageInfo) {
      console.error(`Language not found for lesson: ${lesson.lessonId} (${lesson.language})`);
      continue;
    }

    console.log(`
Verifying lesson: ${lesson.lessonTitle} (${lesson.language})`);

    for (const exercise of (lesson as any).exercises) {
      total++;
      const { correctCode, testCases, title } = exercise;
      const language_id = languageInfo.judge0Id;

      if (!testCases || testCases.length === 0) {
        console.warn(`  [SKIP] ${title}: No test cases found.`);
        continue;
      }

      // Use the first test case for verification
      const testCase = testCases[0];
      const expected = testCase.expected_output;
      const stdin = testCase.input || "";

      try {
        const response = await axios.post(
          `${JUDGE0_API_URL}/submissions?base64_encoded=true&wait=true`,
          {
            source_code: Buffer.from(correctCode).toString("base64"),
            language_id,
            stdin: Buffer.from(stdin).toString("base64"),
          },
          { timeout: 15000 }
        );

        const decode = (base64Str: string | null) => {
          if (!base64Str) return "";
          return Buffer.from(base64Str, "base64").toString("utf8");
        };

        const stdout = decode(response.data.stdout);
        const stderr = decode(response.data.stderr);
        const compile_output = decode(response.data.compile_output);
        const status = response.data.status?.description;

        // Normalizing line endings for comparison
        const normalize = (str: string) => str.replace(/\r\n/g, "\n").trim();

        if (normalize(stdout) === normalize(expected) && status === "Accepted") {
          console.log(`  [PASS] ${title}`);
          passed++;
        } else {
          console.error(`  [FAIL] ${title}`);
          console.error(`    Status:   ${status}`);
          console.error(`    Expected: ${JSON.stringify(expected)}`);
          console.error(`    Actual:   ${JSON.stringify(stdout)}`);
          if (stderr) console.error(`    Stderr:   ${stderr}`);
          if (compile_output) console.error(`    Compile:  ${compile_output}`);
          results.push({
            lessonId: lesson.lessonId,
            lesson: lesson.lessonTitle,
            exercise: title,
            status,
            expected,
            actual: stdout,
            stderr,
            compile_output
          });
        }
      } catch (error: any) {
        let msg = error.message;
        if (error.code) msg += ` (${error.code})`;
        console.error(`  [ERROR] ${title}:`, msg);
        results.push({
          lessonId: lesson.lessonId,
          lesson: lesson.lessonTitle,
          exercise: title,
          error: msg
        });
      }
    }
  }

  console.log(`
=========================================`);
  console.log(`Verification Complete!`);
  console.log(`Total: ${total}, Passed: ${passed}, Failed: ${total - passed}`);
  console.log(`=========================================`);
  
  if (results.length > 0) {
    console.log(`
Detailed Failures: ${results.length}`);
    fs.writeFileSync('verification_failures.json', JSON.stringify(results, null, 2));
    console.log(`Failures saved to verification_failures.json`);
  }
}

verify().catch(err => {
  console.error("Verification script failed:", err);
  process.exit(1);
});
import { allLessons } from '../data/lessons/index';
import { LANGUAGES } from '../data/languages';
import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

const JUDGE0_API_URL = "http://127.0.0.1:2358";

// ボイラープレートが必要な言語のテンプレート
const boilerplates: Record<string, (code: string) => string> = {
  csharp: (code) => {
    if (code.includes("class Program") || code.includes("namespace")) return code;
    // 既存のメソッド定義があるかチェック
    if (code.includes("static void") || code.includes("static async Task")) {
        return `using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\nclass Program {\n${code.split('\n').map(l => "    " + l).join('\n')}\n}`;
    }
    return `using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\nclass Program {\n    static void Main() {\n${code.split('\n').map(l => "        " + l).join('\n')}\n    }\n}`;
  },
  kotlin: (code) => {
    if (code.includes("fun main")) return code;
    return `fun main() {\n${code.split('\n').map(l => "    " + l).join('\n')}\n}`;
  },
  haskell: (code) => {
    if (code.includes("main =")) return code;
    return `${code}\nmain = putStrLn "Fix me" -- Placeholder`; // Haskellは個別対応が必要
  },
  php: (code) => {
    if (code.startsWith("<?php")) return code;
    return `<?php\n${code}`;
  }
};

async function fix() {
  for (const lesson of allLessons) {
    const lang = lesson.language;
    const bp = boilerplates[lang];
    const languageInfo = LANGUAGES.find(l => l.id === lang);
    if (!languageInfo) continue;

    let modified = false;
    const exercises = (lesson as any).exercises;

    for (const exercise of exercises) {
      let codeToRun = exercise.correctCode;
      if (bp) {
        codeToRun = bp(codeToRun);
      }

      const stdin = exercise.testCases?.[0]?.input || "";

      try {
        const response = await axios.post(
          `${JUDGE0_API_URL}/submissions?base64_encoded=true&wait=true`,
          {
            source_code: Buffer.from(codeToRun).toString("base64"),
            language_id: languageInfo.judge0Id,
            stdin: Buffer.from(stdin).toString("base64"),
          },
          { timeout: 10000 }
        );

        const decode = (base64Str: string | null) => {
          if (!base64Str) return "";
          return Buffer.from(base64Str, "base64").toString("utf8");
        };

        const stdout = decode(response.data.stdout);
        const status = response.data.status?.description;

        if (status === "Accepted") {
          // 出力を正規化して expected_output を更新
          const actual = stdout.replace(/\r\n/g, "\n");
          if (exercise.testCases?.[0] && exercise.testCases[0].expected_output !== actual) {
            console.log(`Fixing ${lesson.lessonId} - ${exercise.title}`);
            exercise.testCases[0].expected_output = actual;
            modified = true;
          }
        }
      } catch (e: any) {
        // console.error(`Error fixing ${exercise.title}:`, e.message);
      }
    }

    if (modified) {
      // ファイルを書き戻す（簡易的な実装。実際には .ts ファイルの export const ... 部分を置換する必要がある）
      // ここでは結果を表示するにとどめ、重要なファイルから手動で適用します。
    }
  }
}

// 実際には各ファイルを読み込み、正規表現で expected_output を置換する処理が必要です。

import { LANGUAGES } from '../data/languages';
import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

const JUDGE0_API_URL = "http://127.0.0.1:2358";

const lessonsDir = path.join(process.cwd(), 'data/lessons');
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

const boilerplates: Record<string, (code: string) => string> = {
  csharp: (code) => {
    if (code.includes("class Program") || code.includes("namespace")) return code;
    if (code.includes("static void") || code.includes("static async Task")) {
        return `using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\nclass Program {\n${code.split('\n').map(l => "    " + l).join('\n')}\n}`;
    }
    return `using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\nclass Program {\n    static void Main() {\n${code.split('\n').map(l => "        " + l).join('\n')}\n    }\n}`;
  },
  kotlin: (code) => {
    if (code.includes("fun main")) return code;
    return `fun main() {\n${code.split('\n').map(l => "    " + l).join('\n')}\n}`;
  },
  php: (code) => {
    if (code.startsWith("<?php")) return code;
    return `<?php\n${code}`;
  }
};

async function fixAll() {
  for (const file of files) {
    const filePath = path.join(lessonsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 言語を判定
    const langMatch = content.match(/"language":\s*"([^"]+)"/);
    if (!langMatch) continue;
    const lang = langMatch[1];
    const languageInfo = LANGUAGES.find(l => l.id === lang);
    if (!languageInfo) continue;

    console.log(`Processing ${file} (${lang})...`);

    // 演習ブロックを抽出して個別に修正
    const exercisesRegex = /\{\s*"title":[\s\S]*?"testCases":\s*\[\s*\{"[\s\S]*?"expected_output":\s*"([\s\S]*?)"\s*\}\s*\]\s*\}/g;
    
    let match;
    const replacements: { old: string, new: string }[] = [];

    // 一旦全演習をパースするために matchAll 的なことをする
    const exercisesContent = content.match(/\{\s*"title":[\s\S]*?"testCases":[\s\S]*?\}/g) || [];

    for (const exStr of exercisesContent) {
      try {
        // evalは危険だが、TSのオブジェクトリテラルをJSオブジェクトにする簡単な方法
        // 実際には安全なパースが必要だが、ここでは正規表現で必要な項目を抜く
        const titleMatch = exStr.match(/"title":\s*"([^"]+)"/);
        const codeMatch = exStr.match(/"correctCode":\s*"([\s\S]*?)(?<!\\)"/);
        const expectedMatch = exStr.match(/"expected_output":\s*"([\s\S]*?)(?<!\\)"/);
        
        if (!titleMatch || !codeMatch || !expectedMatch) continue;

        const title = titleMatch[1];
        let correctCode = codeMatch[1].replace(/\\n/g, '\n').replace(/\\\"/g, '"');
        const oldExpected = expectedMatch[1];

        let codeToRun = correctCode;
        if (boilerplates[lang]) {
          codeToRun = boilerplates[lang](correctCode);
        }

        const response = await axios.post(
          `${JUDGE0_API_URL}/submissions?base64_encoded=true&wait=true`,
          {
            source_code: Buffer.from(codeToRun).toString("base64"),
            language_id: languageInfo.judge0Id,
          },
          { timeout: 15000 }
        );

        const decode = (base64Str: string | null) => {
          if (!base64Str) return "";
          return Buffer.from(base64Str, "base64").toString("utf8");
        };

        const stdout = decode(response.data.stdout);
        const status = response.data.status?.description;

        if (status === "Accepted") {
          const actual = stdout.replace(/\r\n/g, '\n').replace(/\n/g, '\\n').replace(/"/g, '\\"');
          if (oldExpected !== actual) {
            console.log(`  [FIX] ${title}: "${oldExpected}" -> "${actual}"`);
            const oldPart = `"expected_output": "${oldExpected}"`;
            const newPart = `"expected_output": "${actual}"`;
            content = content.replace(oldPart, newPart);
          }
        } else {
           console.warn(`  [SKIP] ${title}: Status is ${status}`);
        }
      } catch (e: any) {
        console.error(`  [ERROR] ${file}: ${e.message}`);
      }
    }

    fs.writeFileSync(filePath, content);
  }
}

fixAll().then(() => console.log("Done!"));

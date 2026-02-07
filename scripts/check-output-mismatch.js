const fs = require("fs");
const path = require("path");

const lessonsDir = "./data/lessons";
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith(".ts"));
let criticalIssues = [];

files.forEach(file => {
  try {
    const content = fs.readFileSync(path.join(lessonsDir, file), "utf8");

    const exerciseRegex = /"title":\s*"([^"]+)"[\s\S]*?"correctCode":\s*"([^"]*(?:\\.[^"]*)*)"[\s\S]*?"expected_output":\s*"([^"]*(?:\\.[^"]*)*)"/g;

    let match;
    while ((match = exerciseRegex.exec(content)) !== null) {
      const title = match[1];
      const correctCode = match[2];
      const expectedOutput = match[3].replace(/\\n/g, "").trim();

      // 出力文の中の文字列リテラルを抽出
      const outputRegex = /(?:WriteLine|println|puts|echo|Print|console\.log|System\.out\.print)\s*\(\s*["']([^"']*)["']\s*\)/gi;
      let outputMatch;

      while ((outputMatch = outputRegex.exec(correctCode)) !== null) {
        const outputStr = outputMatch[1].replace(/\\n/g, "").trim();

        const hasJapaneseInOutput = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(outputStr);
        const isExpectedAsciiOnly = /^[\x00-\x7F]*$/.test(expectedOutput);

        if (hasJapaneseInOutput && isExpectedAsciiOnly && expectedOutput.length > 0 && outputStr !== expectedOutput) {
          criticalIssues.push({
            file,
            title,
            output: outputStr.substring(0, 40),
            expected: expectedOutput.substring(0, 40),
          });
        }
      }
    }
  } catch (e) {
    // skip parse errors
  }
});

console.log("=== 日本語出力 vs 英語expected_output チェック ===\n");
if (criticalIssues.length === 0) {
  console.log("✓ 不整合は見つかりませんでした");
} else {
  criticalIssues.forEach(i => {
    console.log("[" + i.file + "] " + i.title);
    console.log("  出力: \"" + i.output + "\"");
    console.log("  期待: \"" + i.expected + "\"\n");
  });
}
console.log("\nチェック完了: " + files.length + " ファイル");

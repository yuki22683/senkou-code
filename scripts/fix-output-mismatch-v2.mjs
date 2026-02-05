// expected_outputをcorrectCodeの実際の出力に合わせて修正
import fs from 'fs';
import path from 'path';

const dir = './data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

// 英語→日本語の置換マップ
const replacements = {
  'Hello, World!': 'こんにちは、世界！',
  'Hello World': 'こんにちは世界',
  'Hello, C++!': 'こんにちは、C++！',
  'Hello, C#!': 'こんにちは、C#！',
  'Hello, Go!': 'こんにちは、Go！',
  'Hello, Java!': 'こんにちは、Java！',
  'Hello, JavaScript!': 'こんにちは、JavaScript！',
  'Hello, Lua!': 'こんにちは、Lua！',
  'Hello Promise!': 'こんにちは Promise！',
  'Hello!': 'こんにちは！',
  'Hello': 'こんにちは',
  'Meow!': 'ニャー！',
  'Meow': 'ニャー',
  'Error': 'エラー',
  'Pass': '合格',
  'Bonus Pass': 'ボーナス 合格',
  'World': '世界',
};

let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // 各exerciseブロックを処理
  const exerciseRegex = /"correctCode":\s*"((?:[^"\\]|\\.)*)"/g;

  let match;
  while ((match = exerciseRegex.exec(content)) !== null) {
    const correctCode = match[1];

    // このexerciseに対応するexpected_outputを見つける
    const afterMatch = content.substring(match.index);
    const outputMatch = afterMatch.match(/"expected_output":\s*"([^"]*)"/);

    if (!outputMatch) continue;

    const expectedOutput = outputMatch[1];
    const outputIndex = match.index + afterMatch.indexOf(outputMatch[0]);

    // correctCodeに日本語があり、expected_outputに対応する英語がある場合に置換
    for (const [en, jp] of Object.entries(replacements)) {
      if (correctCode.includes(jp) && expectedOutput.includes(en) && !expectedOutput.includes(jp)) {
        // expected_outputを置換
        const newOutput = expectedOutput.replace(en, jp);
        const oldStr = `"expected_output": "${expectedOutput}"`;
        const newStr = `"expected_output": "${newOutput}"`;

        if (content.includes(oldStr)) {
          content = content.replace(oldStr, newStr);
          modified = true;
          totalFixed++;
          console.log(`${file}: "${en}" → "${jp}"`);
        }
      }
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

console.log(`\n✅ 合計: ${totalFixed}件修正`);

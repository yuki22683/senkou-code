// expected_outputとcorrectCodeの文字列不一致をチェック
import fs from 'fs';
import path from 'path';

const dir = './data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

const issues = [];

// 日本語→英語の対応表
const mappings = [
  { jp: 'ニャー', en: 'Meow' },
  { jp: 'エラー', en: 'Error' },
  { jp: '合格', en: 'Pass' },
  { jp: '大人', en: 'Adult' },
  { jp: '子供', en: 'Child' },
  { jp: 'おとな', en: 'Adult' },
  { jp: 'こども', en: 'Child' },
  { jp: 'ごうかく', en: 'Pass' },
  { jp: '世界', en: 'World' },
  { jp: 'こんにちは', en: 'Hello' },
  { jp: '20代', en: '20s' },
];

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');

  // Extract exercises
  const regex = /"title":\s*"([^"]+)"[\s\S]*?"correctCode":\s*"((?:[^"\\]|\\.)*)"/g;
  const outputRegex = /"expected_output":\s*"([^"]*)"/g;

  let match;
  while ((match = regex.exec(content)) !== null) {
    const title = match[1];
    const correctCode = match[2];

    // Find corresponding expected_output (next one after this match)
    outputRegex.lastIndex = match.index;
    const outputMatch = outputRegex.exec(content);
    if (!outputMatch) continue;

    const expectedOutput = outputMatch[1];

    // Check for mismatches
    for (const { jp, en } of mappings) {
      // correctCodeに日本語があるのにexpected_outputが英語
      if (correctCode.includes(jp) && expectedOutput.includes(en) && !expectedOutput.includes(jp)) {
        issues.push({ file, title, jp, en, expected: expectedOutput });
      }
    }
  }
}

if (issues.length > 0) {
  console.log('=== expected_output不一致 ===\n');
  for (const i of issues) {
    console.log(`${i.file}: 「${i.title}」`);
    console.log(`  correctCodeに「${i.jp}」→ expected_outputに「${i.en}」（「${i.jp}」にすべき）`);
  }
  console.log(`\n❌ 合計: ${issues.length}件`);
} else {
  console.log('✅ expected_output不一致なし');
}

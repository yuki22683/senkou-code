// correctCode と holeyCode/correctLines のコメント整合性を精密にチェックするスクリプト (v3)
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

function decode(s) {
  if (!s) return '';
  return s
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\');
}

function extractArrayContent(str, startSearchIdx = 0) {
  const openBracket = str.indexOf('[', startSearchIdx);
  if (openBracket === -1) return null;
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let i = openBracket; i < str.length; i++) {
    const ch = str[i];
    if (escaped) { escaped = false; continue; }
    if (ch === '\\') { escaped = true; continue; }
    if (ch === '"') { inString = !inString; continue; }
    if (!inString) {
      if (ch === '[') depth++;
      if (ch === ']') {
        depth--;
        if (depth === 0) return str.substring(openBracket + 1, i);
      }
    }
  }
  return null;
}

// コメント行を抽出（#includeなどを除外）
function extractCommentLines(code) {
  const lines = code.split('\n');
  const comments = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // C/C++のプリプロセッサディレクティブを除外
    if (trimmed.startsWith('#include') || trimmed.startsWith('#define') ||
        trimmed.startsWith('#ifdef') || trimmed.startsWith('#ifndef') ||
        trimmed.startsWith('#endif') || trimmed.startsWith('#pragma')) {
      continue;
    }

    // コメント行を検出
    if (trimmed.startsWith('//') ||
        (trimmed.startsWith('#') && !trimmed.startsWith('#!')) ||
        trimmed.startsWith('--') ||
        trimmed.startsWith(';')) {
      comments.push({ index: i, content: trimmed, original: line });
    }
  }
  return comments;
}

// 2つのコメント配列を比較（同じ行インデックスのコメントのみ比較）
function compareCommentArrays(correctComments, holeyComments) {
  const issues = [];

  const holeyMap = new Map();
  for (const hc of holeyComments) {
    holeyMap.set(hc.index, hc);
  }

  for (const cc of correctComments) {
    const hc = holeyMap.get(cc.index);
    if (!hc) continue;

    const normalizedCorrect = cc.content.replace(/\\\\/g, '\\').replace(/\\n/g, '\n');
    const normalizedHoley = hc.content.replace(/\\\\/g, '\\').replace(/\\n/g, '\n');

    if (normalizedCorrect !== normalizedHoley) {
      issues.push({
        correctIndex: cc.index,
        holeyIndex: hc.index,
        correctComment: cc.content,
        holeyComment: hc.content
      });
    }
  }

  return issues;
}

async function main() {
  const files = fs.readdirSync(lessonsDir).filter(f =>
    f.endsWith('.ts') && f !== 'index.ts' && !f.includes('extracted')
  );

  const allIssues = [];

  for (const file of files) {
    const filePath = path.join(lessonsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    const titleMatches = [...content.matchAll(new RegExp('"title":\s*"([^"]*)"', 'g'))];

    for (let i = 0; i < titleMatches.length; i++) {
      const start = titleMatches[i].index;
      const end = i + 1 < titleMatches.length ? titleMatches[i + 1].index : content.length;
      const block = content.substring(start, end);
      const title = titleMatches[i][1];

      const correctCodeMatch = block.match(new RegExp('"correctCode":\s*"((?:[^"\\]|\\.)*)"', 'g'));
      const holeyCodeMatch = block.match(new RegExp('"holeyCode":\s*"((?:[^"\\]|\\.)*)"', 'g'));

      if (!correctCodeMatch || !holeyCodeMatch) continue;

      const correctCode = decode(correctCodeMatch[1]);
      const holeyCode = decode(holeyCodeMatch[1]);

      const correctComments = extractCommentLines(correctCode);
      const holeyComments = extractCommentLines(holeyCode);

      const issues = compareCommentArrays(correctComments, holeyComments);

      for (const issue of issues) {
        const c1 = issue.correctComment.replace(/\\\\/g, '\\');
        const c2 = issue.holeyComment.replace(/\\\\/g, '\\');

        if (c1 !== c2) {
          allIssues.push({
            file,
            exercise: title,
            ...issue
          });
        }
      }
    }
  }

  console.log('=== correctCode と holeyCode のコメント不整合 ===\n');

  const uniqueIssues = [];
  const seen = new Set();

  for (const issue of allIssues) {
    const key = `${issue.file}:${issue.exercise}:${issue.correctComment}:${issue.holeyComment}`;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueIssues.push(issue);
    }
  }

  if (uniqueIssues.length === 0) {
    console.log('不整合は見つかりませんでした。\n');
  } else {
    console.log(`【不整合: ${uniqueIssues.length}件】\n`);

    for (const issue of uniqueIssues) {
      console.log(`ファイル: ${issue.file}`);
      console.log(`演習: ${issue.exercise}`);
      console.log(`correctCode: ${issue.correctComment}`);
      console.log(`holeyCode:   ${issue.holeyComment}`);
      console.log('---\n');
    }
    process.exit(1);
  }
}

main().catch(console.error);
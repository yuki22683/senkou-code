// correctCode と holeyCode/correctLines のコメント整合性を精密にチェックするスクリプト
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

// コメントパターン（言語別）
const commentPatterns = {
  js: /^\s*(\/\/.*)/,
  py: /^\s*(#(?!include|define|ifdef|ifndef|endif|pragma).*)/,
  c: /^\s*(\/\/.*)/,
  sql: /^\s*(--.*)/,
  lua: /^\s*(--.*)/,
  haskell: /^\s*(--.*)/,
};

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

  // holeyCommentsをインデックスでマップ化
  const holeyMap = new Map();
  for (const hc of holeyComments) {
    holeyMap.set(hc.index, hc);
  }

  // 同じ行インデックスのコメントを比較
  for (const cc of correctComments) {
    const hc = holeyMap.get(cc.index);
    if (!hc) continue; // 同じ位置にコメントがない場合はスキップ

    // エスケープの違いを正規化して比較
    const normalizedCorrect = cc.content.replace(/\\\\/g, '\\').replace(/\\n/g, '\n');
    const normalizedHoley = hc.content.replace(/\\\\/g, '\\').replace(/\\n/g, '\n');

    // コメントが異なる場合
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

// メイン処理
async function main() {
  const files = fs.readdirSync(lessonsDir).filter(f =>
    f.endsWith('.ts') && f !== 'index.ts' && !f.includes('extracted')
  );

  const allIssues = [];

  for (const file of files) {
    const filePath = path.join(lessonsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    // 各エクササイズを抽出
    const exerciseRegex = /"title":\s*"([^"]+)"[\s\S]*?"correctCode":\s*"((?:[^"\\]|\\.)*)"\s*,\s*"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;

    let match;
    while ((match = exerciseRegex.exec(content)) !== null) {
      const title = match[1];
      const correctCode = match[2].replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\"/g, '"');
      const holeyCode = match[3].replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\"/g, '"');

      const correctComments = extractCommentLines(correctCode);
      const holeyComments = extractCommentLines(holeyCode);

      const issues = compareCommentArrays(correctComments, holeyComments);

      for (const issue of issues) {
        // 実際に内容が異なるものだけを報告（エスケープの違いを除く）
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

  // 結果を整理して出力
  console.log('=== correctCode と holeyCode のコメント不整合 ===\n');

  // 重複を除去
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
      console.log('---');
    }
  }
}

main().catch(console.error);

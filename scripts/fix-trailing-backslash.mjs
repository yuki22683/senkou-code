// correctCodeのコメント行から末尾の\を除去
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // correctCode内のコメント行の末尾\を除去
  // パターン: コメント開始 + 内容 + \ + \\n
  const patterns = [
    // // コメント\\n
    /(\\"correctCode\\":\s*\\"[^"]*)(\/\/[^\\]*?)\\\\(\\\\n)/g,
    // # コメント\\n (プリプロセッサ除外)
    /(\\"correctCode\\":\s*\\"[^"]*)(#(?!include|define|ifdef|ifndef|endif|pragma|!)[^\\]*?)\\\\(\\\\n)/g,
    // -- コメント\\n
    /(\\"correctCode\\":\s*\\"[^"]*)(--[^\\]*?)\\\\(\\\\n)/g,
    // ; コメント\\n
    /(\\"correctCode\\":\s*\\"[^"]*)(;[^\\]*?)\\\\(\\\\n)/g,
  ];

  for (const pattern of patterns) {
    const newContent = content.replace(pattern, (match, before, comment, newline) => {
      modified = true;
      return before + comment + newline;
    });
    if (newContent !== content) {
      content = newContent;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  return false;
}

async function main() {
  const files = fs.readdirSync(lessonsDir).filter(f =>
    f.endsWith('.ts') && f !== 'index.ts' && !f.includes('extracted')
  );

  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(lessonsDir, file);
    try {
      if (processFile(filePath)) {
        console.log(`修正: ${file}`);
        fixedCount++;
      }
    } catch (e) {
      console.error(`エラー (${file}): ${e.message}`);
    }
  }

  console.log(`\n合計 ${fixedCount} ファイルを修正しました。`);
}

main().catch(console.error);

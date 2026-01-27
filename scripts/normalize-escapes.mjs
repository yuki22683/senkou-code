import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function normalizeAll() {
  const files = await glob('data/lessons/*.ts');
  
  for (const file of files) {
    if (file.endsWith('index.ts')) continue;
    let content = fs.readFileSync(file, 'utf-8');
    let modified = false;

    // 1. 各行をスキャンし、holeyCode などのフィールドを探す
    // 文字列の開始 " から終了 " まで（エスケープ考慮）を抽出し、
    // その中の「不正な生の改行」や「エスケープ漏れのクォート」を直す
    
    // フィールド単位で置換するのは難しいため、
    // 明らかに壊れている箇所を正規化する
    
    let newContent = content;
    
    // 生の改行が文字列内にある場合、それを \n に置換
    // (esbuildがエラーを出す主要因)
    // holeyCode": "... [raw newline] ..."
    // 非常におおまかな置換だが、プロパティ値の開始から終了までを探す
    newContent = newContent.replace(/("(?:holeyCode|correctCode|title|description|content)":\s*")([\s\S]*?)((?<!\\)")/g, (match, head, body, tail) => {
      // ボディ内の生の改行を \n に、生のクォートを \" に変換
      let newBody = body.replace(/\r?\n/g, '\\n');
      
      // ボディ内のクォートをチェック。
      // JSON文字列内なので、すべてのクォートは \" であるべき。
      // \" 以外の " を探し、\" に置換する。
      // (ただし body 自体に \" が含まれているので、一旦アンエスケープしてから再エスケープする)
      
      // 1. すべての \" を " に戻す
      newBody = newBody.replace(/\\"/g, '"');
      // 2. すべての " を \" にする
      newBody = newBody.replace(/"/g, '\\"');
      
      if (newBody !== body) {
        modified = true;
        return head + newBody + tail;
      }
      return match;
    });

    if (modified) {
      console.log(`Normalized ${file}`);
      fs.writeFileSync(file, newContent, 'utf-8');
    }
  }
}

normalizeAll();

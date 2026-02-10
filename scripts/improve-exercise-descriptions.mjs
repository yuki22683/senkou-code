/**
 * 演習のdescriptionを改善するスクリプト
 * tutorialSlidesの内容を参考に、より丁寧で具体的な紹介文に更新
 */

import fs from 'fs';
import path from 'path';

const LESSONS_DIR = './data/lessons';

// tutorialSlidesのcontentから核心的な説明を抽出
function extractCoreDescription(title, tutorialSlides) {
  if (!tutorialSlides || tutorialSlides.length === 0) {
    return null;
  }

  const firstSlide = tutorialSlides[0];
  const content = firstSlide.content || '';

  // contentから「# 」で始まる見出しを抽出
  const headingMatch = content.match(/# ([^\n]+)/);
  if (headingMatch) {
    const heading = headingMatch[1].trim();
    // 見出しが短すぎない場合はそれを使用
    if (heading.length >= 5 && heading.length <= 40) {
      return heading;
    }
  }

  // **太字**で囲まれた重要な説明を抽出
  const boldMatch = content.match(/\*\*([^*]+)\*\*\s*(?:とは|は|を)/);
  if (boldMatch) {
    return `${boldMatch[1]}について学びます`;
  }

  return null;
}

// タイトルとtutorialSlidesから丁寧なdescriptionを生成
function generatePoliteDescription(title, tutorialSlides) {
  // まずtutorialSlidesから説明を抽出
  const coreDesc = extractCoreDescription(title, tutorialSlides);

  const t = title.toLowerCase();
  const tOriginal = title;

  // 具体的なパターンに基づいて丁寧な説明を生成

  // Python系
  if (t.includes('画面に文字を出') || t.includes('hello')) {
    return 'プログラムの基本！画面にメッセージを表示する方法を学びます';
  }

  if (t.includes('変数') || t.includes('はこ')) {
    return 'データを名前をつけて保存する「変数」の仕組みを理解します';
  }

  if (t.includes('引数') && t.includes('関数')) {
    return '関数に「材料」を渡して、柔軟に動作させる方法を学びます';
  }

  if (t.includes('デフォルト引数')) {
    return '引数を省略したときに使われる「初期値」の設定方法を学びます';
  }

  if (t.includes('戻り値') || t.includes('return')) {
    return '関数の処理結果を呼び出し元に返す方法を学びます';
  }

  if (t.includes('複数の戻り値')) {
    return '1つの関数から複数の値をまとめて返す方法を学びます';
  }

  if (t.includes('リスト内包表記')) {
    if (t.includes('条件')) {
      return 'リスト内包表記に条件を加えて、特定の要素だけを抽出する方法を学びます';
    }
    return 'forループを1行で書ける「リスト内包表記」をマスターします';
  }

  if (t.includes('例外処理') || t.includes('try') || t.includes('except') || t.includes('catch')) {
    return 'プログラムのエラーを適切に処理して、安全に動作させる方法を学びます';
  }

  if (t.includes('クラス')) {
    if (t.includes('継承')) {
      return '既存のクラスの機能を引き継いで、新しいクラスを作る方法を学びます';
    }
    if (t.includes('基本')) {
      return 'データと処理をひとまとめにする「クラス」の基本を学びます';
    }
    return `${tOriginal}の仕組みを理解します`;
  }

  if (t.includes('ジェネレータ')) {
    return 'メモリを節約しながら値を順番に生成する仕組みを学びます';
  }

  if (t.includes('デコレータ')) {
    return '関数の機能を後から拡張できる「デコレータ」を学びます';
  }

  if (t.includes('文字列スライス')) {
    return '文字列の一部を切り出す「スライス」の使い方を学びます';
  }

  // 条件分岐
  if (t.includes('if') || t.includes('もし') || t.includes('条件分岐')) {
    if (t.includes('elif') || t.includes('else if')) {
      return '3つ以上の選択肢から条件によって処理を分ける方法を学びます';
    }
    if (t.includes('else')) {
      return '条件に合わない場合の処理を追加する方法を学びます';
    }
    return '条件によって処理を分ける「条件分岐」を学びます';
  }

  // ループ
  if (t.includes('for') || t.includes('繰り返し')) {
    if (t.includes('range')) {
      return '指定した回数だけ処理を繰り返す方法を学びます';
    }
    return '同じ処理を何度も実行する「繰り返し」を学びます';
  }

  if (t.includes('while')) {
    return '条件を満たす間、処理を繰り返し続ける方法を学びます';
  }

  // 関数
  if (t.includes('関数') || t.includes('function') || t.includes('def')) {
    if (t.includes('定義')) {
      return '処理をひとまとめにして名前をつける「関数定義」を学びます';
    }
    return '処理をまとめて再利用できる「関数」の作り方を学びます';
  }

  // 配列・リスト
  if (t.includes('配列') || t.includes('リスト') || t.includes('array')) {
    if (t.includes('追加') || t.includes('push') || t.includes('append')) {
      return '配列やリストに新しい要素を追加する方法を学びます';
    }
    if (t.includes('削除') || t.includes('pop') || t.includes('remove')) {
      return '配列やリストから要素を取り除く方法を学びます';
    }
    if (t.includes('ソート') || t.includes('sort') || t.includes('並べ替え')) {
      return '配列やリストの要素を順番に並べ替える方法を学びます';
    }
    return '複数のデータをまとめて扱う「配列」の使い方を学びます';
  }

  // 辞書・ハッシュ
  if (t.includes('辞書') || t.includes('dict') || t.includes('ハッシュ') || t.includes('hash')) {
    return 'キーと値のペアでデータを管理する方法を学びます';
  }

  // 入出力
  if (t.includes('入力') || t.includes('input')) {
    return 'キーボードからユーザーの入力を受け取る方法を学びます';
  }

  if (t.includes('ファイル')) {
    if (t.includes('読み') || t.includes('open') || t.includes('開')) {
      return 'ファイルを開いてデータを読み込む方法を学びます';
    }
    if (t.includes('書き') || t.includes('write')) {
      return 'ファイルにデータを書き込んで保存する方法を学びます';
    }
    if (t.includes('閉じ') || t.includes('close')) {
      return 'ファイルを正しく閉じてリソースを解放する方法を学びます';
    }
    return 'ファイルを扱う方法を学びます';
  }

  // 文字列操作
  if (t.includes('文字列')) {
    if (t.includes('結合') || t.includes('連結') || t.includes('join')) {
      return '複数の文字列をつなげて1つにする方法を学びます';
    }
    if (t.includes('分割') || t.includes('split')) {
      return '文字列を区切り文字で分割する方法を学びます';
    }
    if (t.includes('置換') || t.includes('replace')) {
      return '文字列の一部を別の文字に置き換える方法を学びます';
    }
    if (t.includes('長さ') || t.includes('length') || t.includes('len')) {
      return '文字列の長さを調べる方法を学びます';
    }
    return '文字列を操作する方法を学びます';
  }

  // 計算
  if (t.includes('足し算') || t.includes('加算') || t.includes('たし算')) {
    return '数の足し算（加算）をプログラムで行う方法を学びます';
  }
  if (t.includes('引き算') || t.includes('減算') || t.includes('ひき算')) {
    return '数の引き算（減算）をプログラムで行う方法を学びます';
  }
  if (t.includes('掛け算') || t.includes('乗算') || t.includes('かけ算')) {
    return '数の掛け算（乗算）をプログラムで行う方法を学びます';
  }
  if (t.includes('割り算') || t.includes('除算') || t.includes('わり算')) {
    return '数の割り算（除算）をプログラムで行う方法を学びます';
  }
  if (t.includes('計算')) {
    return 'プログラムで数値を計算する方法を学びます';
  }

  // 型
  if (t.includes('型')) {
    if (t.includes('変換') || t.includes('キャスト')) {
      return 'データの種類（型）を変換する方法を学びます';
    }
    return 'データの種類（型）について理解します';
  }

  // 比較・論理演算
  if (t.includes('比較')) {
    return '値の大小や等しさを比較する方法を学びます';
  }
  if (t.includes('論理') || t.includes('and') || t.includes('or')) {
    return '複数の条件を組み合わせる方法を学びます';
  }

  // コメント
  if (t.includes('コメント')) {
    return 'コードに説明メモを書く方法を学びます';
  }

  // モジュール・インポート
  if (t.includes('モジュール') || t.includes('import') || t.includes('インポート')) {
    return '外部の機能を取り込んで使う方法を学びます';
  }

  // 正規表現
  if (t.includes('正規表現') || t.includes('regex')) {
    return 'パターンを使って文字列を検索・置換する方法を学びます';
  }

  // ラムダ・無名関数
  if (t.includes('ラムダ') || t.includes('lambda') || t.includes('アロー関数') || t.includes('無名関数')) {
    return '名前のない簡潔な関数を作る方法を学びます';
  }

  // map/filter/reduce
  if (t.includes('map') && !t.includes('hash')) {
    return '配列の全要素に同じ処理を適用する方法を学びます';
  }
  if (t.includes('filter') || t.includes('grep') || t.includes('select')) {
    return '条件に合う要素だけを抽出する方法を学びます';
  }
  if (t.includes('reduce') || t.includes('fold')) {
    return '配列の要素を集約して1つの値にする方法を学びます';
  }

  // SQL系
  if (t.includes('select')) {
    return 'データベースからデータを取得する方法を学びます';
  }
  if (t.includes('insert')) {
    return 'データベースにデータを追加する方法を学びます';
  }
  if (t.includes('update')) {
    return 'データベースのデータを更新する方法を学びます';
  }
  if (t.includes('delete') && t.includes('sql')) {
    return 'データベースからデータを削除する方法を学びます';
  }
  if (t.includes('where')) {
    return '条件を指定してデータを絞り込む方法を学びます';
  }
  if (t.includes('join')) {
    return '複数のテーブルを結合する方法を学びます';
  }

  // Assembly系
  if (t.includes('レジスタ') || t.includes('register')) {
    return 'CPUの高速記憶装置「レジスタ」の使い方を学びます';
  }
  if (t.includes('mov')) {
    return 'データをレジスタ間で移動する命令を学びます';
  }
  if (t.includes('syscall') || t.includes('システムコール')) {
    return 'OSの機能を呼び出すシステムコールを学びます';
  }

  // coreDescがあればそれを使用
  if (coreDesc) {
    return coreDesc;
  }

  // デフォルト: よりdescriptiveな形式
  return `${tOriginal}の仕組みと使い方を学びます`;
}

// メイン処理
async function main() {
  const files = fs.readdirSync(LESSONS_DIR)
    .filter(f => f.endsWith('.ts') && f !== 'index.ts')
    .sort();

  let totalUpdated = 0;

  for (const file of files) {
    const filePath = path.join(LESSONS_DIR, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // 演習パターンを検索
    // "title": "...",
    // "description": "...",
    // "tutorialSlides": [
    const exercisePattern = /("title":\s*"([^"]+)",\s*\n\s*"description":\s*)"([^"]+)"(,\s*\n\s*"tutorialSlides":\s*\[[\s\S]*?\])/g;

    let match;
    const replacements = [];

    // まず全てのマッチを収集
    const regex = new RegExp(exercisePattern);
    let contentCopy = content;
    let lastIndex = 0;

    while ((match = regex.exec(contentCopy)) !== null) {
      const fullMatch = match[0];
      const prefix = match[1]; // "title": "...",\n  "description":
      const title = match[2]; // タイトル
      const oldDesc = match[3]; // 古いdescription
      const suffix = match[4]; // tutorialSlides部分

      // tutorialSlidesを抽出
      const slidesMatch = suffix.match(/"tutorialSlides":\s*\[([\s\S]*?)\]/);
      let tutorialSlides = [];

      if (slidesMatch) {
        // 簡易的にtutorialSlidesをパース
        const slidesContent = slidesMatch[1];
        const titleMatches = slidesContent.matchAll(/"title":\s*"([^"]+)"/g);
        const contentMatches = slidesContent.matchAll(/"content":\s*"((?:[^"\\]|\\.)*)"/g);

        const titles = [...titleMatches].map(m => m[1]);
        const contents = [...contentMatches].map(m => m[1]);

        for (let i = 0; i < titles.length; i++) {
          tutorialSlides.push({
            title: titles[i],
            content: contents[i] || ''
          });
        }
      }

      const newDesc = generatePoliteDescription(title, tutorialSlides);

      if (newDesc !== oldDesc) {
        replacements.push({
          original: `${prefix}"${oldDesc}"`,
          replacement: `${prefix}"${newDesc}"`
        });
        totalUpdated++;
      }
    }

    // 置換を実行
    for (const r of replacements) {
      content = content.replace(r.original, r.replacement);
    }

    if (replacements.length > 0) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ ${file}: ${replacements.length}件のdescriptionを改善`);
    }
  }

  console.log(`\n=== 完了 ===`);
  console.log(`改善したdescription: ${totalUpdated}件`);
}

main().catch(console.error);

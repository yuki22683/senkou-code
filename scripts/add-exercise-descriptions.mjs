/**
 * 全演習にdescriptionフィールドを追加するスクリプト
 * 演習タイトルとtutorialSlidesの内容から適切な紹介文を生成
 */

import fs from 'fs';
import path from 'path';

const LESSONS_DIR = './data/lessons';

// 演習タイトルから適切なdescriptionを生成
function generateDescription(title, tutorialSlides, correctCode) {
  // 特定のパターンに基づいて説明文を生成
  const t = title.toLowerCase();

  // print/出力系
  if (t.includes('print') || t.includes('出力') || t.includes('表示') || t.includes('画面に文字')) {
    return '画面に文字を表示する方法を学びます';
  }

  // 変数系
  if (t.includes('変数') || t.includes('はこ')) {
    return 'データを保存する「変数」の使い方を学びます';
  }

  // 計算・演算系
  if (t.includes('足し算') || t.includes('たし算')) {
    return '数の足し算を行う方法を学びます';
  }
  if (t.includes('引き算') || t.includes('ひき算')) {
    return '数の引き算を行う方法を学びます';
  }
  if (t.includes('掛け算') || t.includes('かけ算')) {
    return '数の掛け算を行う方法を学びます';
  }
  if (t.includes('割り算') || t.includes('わり算')) {
    return '数の割り算を行う方法を学びます';
  }
  if (t.includes('計算') || t.includes('演算')) {
    return '数値の計算方法を学びます';
  }

  // 条件分岐系
  if (t.includes('if') || t.includes('条件') || t.includes('もし')) {
    if (t.includes('elif') || t.includes('else if')) {
      return '複数の条件を順番にチェックする方法を学びます';
    }
    if (t.includes('else')) {
      return '条件に当てはまらない場合の処理を学びます';
    }
    return '条件によって処理を分ける方法を学びます';
  }

  // ループ系
  if (t.includes('for') || t.includes('繰り返し') || t.includes('ループ')) {
    return '同じ処理を繰り返す方法を学びます';
  }
  if (t.includes('while')) {
    return '条件が満たされる間、処理を繰り返す方法を学びます';
  }

  // 関数系
  if (t.includes('関数') || t.includes('function') || t.includes('def ') || t.includes('fn ')) {
    if (t.includes('引数')) {
      return '関数に値を渡す方法を学びます';
    }
    if (t.includes('戻り値') || t.includes('return')) {
      return '関数から値を返す方法を学びます';
    }
    return '処理をまとめて再利用する「関数」を学びます';
  }

  // 配列・リスト系
  if (t.includes('配列') || t.includes('リスト') || t.includes('array') || t.includes('list')) {
    if (t.includes('内包表記')) {
      return '1行でリストを作成する便利な書き方を学びます';
    }
    if (t.includes('追加') || t.includes('push') || t.includes('append')) {
      return '配列に要素を追加する方法を学びます';
    }
    if (t.includes('取り出') || t.includes('pop')) {
      return '配列から要素を取り出す方法を学びます';
    }
    return '複数のデータをまとめて管理する方法を学びます';
  }

  // 辞書・ハッシュ・マップ系
  if (t.includes('辞書') || t.includes('dict') || t.includes('ハッシュ') || t.includes('map') || t.includes('オブジェクト')) {
    return 'キーと値のペアでデータを管理する方法を学びます';
  }

  // クラス・オブジェクト指向系
  if (t.includes('クラス') || t.includes('class')) {
    if (t.includes('継承')) {
      return 'クラスの機能を引き継ぐ「継承」を学びます';
    }
    if (t.includes('コンストラクタ') || t.includes('init')) {
      return 'オブジェクト作成時の初期化処理を学びます';
    }
    return 'データと処理をまとめる「クラス」を学びます';
  }

  // 文字列操作系
  if (t.includes('文字列') || t.includes('string')) {
    if (t.includes('結合') || t.includes('連結')) {
      return '文字列を繋げる方法を学びます';
    }
    if (t.includes('分割') || t.includes('split')) {
      return '文字列を分割する方法を学びます';
    }
    if (t.includes('置換') || t.includes('replace')) {
      return '文字列の一部を置き換える方法を学びます';
    }
    return '文字列の操作方法を学びます';
  }

  // 入力系
  if (t.includes('入力') || t.includes('input') || t.includes('読み込')) {
    return 'ユーザーからの入力を受け取る方法を学びます';
  }

  // ファイル操作系
  if (t.includes('ファイル') || t.includes('file')) {
    if (t.includes('読み') || t.includes('read')) {
      return 'ファイルからデータを読み込む方法を学びます';
    }
    if (t.includes('書き') || t.includes('write')) {
      return 'ファイルにデータを書き込む方法を学びます';
    }
    return 'ファイル操作の方法を学びます';
  }

  // エラー処理系
  if (t.includes('エラー') || t.includes('例外') || t.includes('try') || t.includes('catch') || t.includes('except')) {
    return 'エラーを適切に処理する方法を学びます';
  }

  // 型系
  if (t.includes('型') || t.includes('type')) {
    return 'データの種類（型）について学びます';
  }

  // モジュール・インポート系
  if (t.includes('モジュール') || t.includes('import') || t.includes('インポート')) {
    return '外部の機能を取り込んで使う方法を学びます';
  }

  // 正規表現系
  if (t.includes('正規表現') || t.includes('regex') || t.includes('パターン')) {
    return '文字列のパターンマッチングを学びます';
  }

  // ジェネレータ系
  if (t.includes('ジェネレータ') || t.includes('generator') || t.includes('yield')) {
    return '値を順番に生成する仕組みを学びます';
  }

  // デコレータ系
  if (t.includes('デコレータ') || t.includes('decorator')) {
    return '関数を拡張する「デコレータ」を学びます';
  }

  // ラムダ・無名関数系
  if (t.includes('ラムダ') || t.includes('lambda') || t.includes('無名関数') || t.includes('アロー')) {
    return '短く書ける無名関数を学びます';
  }

  // コメント系
  if (t.includes('コメント')) {
    return 'コードに説明を書く方法を学びます';
  }

  // 比較系
  if (t.includes('比較') || t.includes('大小')) {
    return '値を比較する方法を学びます';
  }

  // 論理演算系
  if (t.includes('and') || t.includes('or') || t.includes('論理')) {
    return '複数の条件を組み合わせる方法を学びます';
  }

  // Hello World系
  if (t.includes('hello') || t.includes('はじめ') || t.includes('最初')) {
    return 'プログラミングの第一歩を踏み出しましょう';
  }

  // tutorialSlidesの最初のスライドのタイトルを参考にする
  if (tutorialSlides && tutorialSlides.length > 0) {
    const firstSlide = tutorialSlides[0];
    if (firstSlide.title) {
      // スライドタイトルから説明を生成
      const slideTitle = firstSlide.title;
      if (slideTitle.includes('とは')) {
        return `${title}の基本を学びます`;
      }
    }
  }

  // デフォルト: タイトルをそのまま使用
  return `${title}の使い方を学びます`;
}

// メイン処理
async function main() {
  const files = fs.readdirSync(LESSONS_DIR)
    .filter(f => f.endsWith('.ts') && f !== 'index.ts')
    .sort();

  let totalExercises = 0;
  let addedDescriptions = 0;

  for (const file of files) {
    const filePath = path.join(LESSONS_DIR, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // 演習を検索して description を追加
    // "title": "..." の後に "description": がなければ追加
    const exercisePattern = /("title":\s*"([^"]+)")\s*,\s*\n(\s*)"tutorialSlides"/g;

    let match;
    const replacements = [];

    while ((match = exercisePattern.exec(content)) !== null) {
      totalExercises++;
      const fullMatch = match[0];
      const titlePart = match[1];
      const title = match[2];
      const indent = match[3];

      // すでに description があるかチェック
      const beforeMatch = content.substring(0, match.index);
      const afterTitle = content.substring(match.index + titlePart.length, match.index + 100);

      if (afterTitle.includes('"description"')) {
        continue; // すでにある場合はスキップ
      }

      // tutorialSlidesを抽出（簡易的に）
      const slideStart = content.indexOf('"tutorialSlides"', match.index);
      const slideEnd = content.indexOf('],', slideStart);
      const slidesContent = slideEnd > slideStart ? content.substring(slideStart, slideEnd + 1) : '';

      const description = generateDescription(title, null, null);

      const newContent = `${titlePart},\n${indent}"description": "${description}",\n${indent}"tutorialSlides"`;

      replacements.push({
        original: fullMatch,
        replacement: newContent
      });

      addedDescriptions++;
    }

    // 置換を実行
    for (const r of replacements) {
      content = content.replace(r.original, r.replacement);
    }

    if (replacements.length > 0) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ ${file}: ${replacements.length}件の description を追加`);
    }
  }

  console.log(`\n=== 完了 ===`);
  console.log(`総演習数: ${totalExercises}`);
  console.log(`追加した description: ${addedDescriptions}`);
}

main().catch(console.error);

export const typescriptData = {
  "language": "typescript",
  "lessonId": "typescript-1",
  "lessonTitle": "TypeScript (タイプスクリプト) に挑戦！",
  "lessonDescription": "JavaScriptに「ラベル（型）」をつけて、もっと使いやすくした TypeScript（タイプスクリプト）を学びましょう。間違いの少ないプログラミングができるようになります。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "tutorialSlides": [
    { "title": "TypeScript（タイプスクリプト）とは？", "content": "# 安心・安全なプログラミング\\n\\nTypeScript（タイプスクリプト）は、JavaScript（ジャバスクリプト）に「型（かた）」というルールを追加した言語です。\\n\\n## どうして便利なの？\\n\\nお弁当箱に「おにぎり専用」と書いてあったら、間違えてサンドイッチを入れようとしたとき気づけますよね。\\n\\nTypeScriptも同じで、「ここには文字だけ」「数字だけ」と決めておくと、間違った種類のデータを入れようとしたときに「ここ間違ってるよ！」と先に教えてくれます。" },
    { "title": "ラベル（型）とは？", "content": "# はこに中身を教えてあげましょう\\n\\nプログラミングでは、データを入れておく「はこ」のことを **変数（へんすう）** と呼びます。\\n\\nTypeScriptでは、このはこを作るときに「このはこには文字を入れます！」「数字を入れます！」と先に決めることができます。\\n\\nおもちゃ箱に「ブロック」「ぬいぐるみ」などのラベルを貼っておくと片付けるときに迷わないですよね。この「中身の決まり」を **型** と呼びます。" },
    { "title": "ラベルの貼りかた", "content": "# :（コロン）のあとに種類を書く\\n\\nはこ（変数）の名前のあとに、`:`（コロン）をつけてから種類を書きます。\\n\\n## よく使うラベルの種類\\n\\n- **string**（ストリング）: 文字を入れるときのラベル\\n- **number**（ナンバー）: 数字を入れるときのラベル\\n\\n```typescript\\nconst animal: string = 'いぬ';\\nconsole.log(animal);\\n```\\n**実行結果：** いぬ" },
    { "title": "数値型（すうちがた）とは？", "content": "# 計算するためのラベル\\n\\n「10」や「3.14」のような数字を扱うときに使うのが **number（ナンバー）** ラベルです。\\n\\n## いつ使うの？\\n\\n- テストの点数を計算したいとき\\n- ゲームのスコアを足したいとき\\n- おこづかいの計算をしたいとき\\n\\n```typescript\\nconst base: number = 100;\\nconst bonus: number = 50;\\nconsole.log(base + bonus); // => 150\\n```" },
    { "title": "あまりを求める演算子", "content": "# %（パーセント）でわり算のあまりを計算\\n\\nクッキーが10枚あって3人で分けるとどうなるかな？1人3枚ずつもらえて、1枚あまる！\\n\\nこの「あまり」だけを計算してくれるのが `%` という記号です。\\n\\n```typescript\\nconsole.log(10 % 3);  // => 1（あまり）\\nconsole.log(8 % 2);   // => 0（割り切れた！）\\n```" },
    { "title": "累算代入演算子", "content": "# += と -= で便利に計算\\n\\n「今の点数に10点プラスしたい！」というとき、`+=` を使うと便利です。\\n\\n```typescript\\nlet x: number = 10;\\nx += 5;  // x = x + 5 と同じ\\nconsole.log(x);  // => 15\\n```\\n\\n`-=` を使えば引き算も同じようにできます。\\n\\n```typescript\\nlet y: number = 10;\\ny -= 3;  // y = y - 3 と同じ\\nconsole.log(y);  // => 7\\n```" }
  ],
  "exercises": [
    {
      "title": "はこに「ラベル」をはりましょう",
      "description": "データを名前をつけて保存する「変数」の仕組みを理解します",
      "tutorialSlides": [
        {
          "title": "TypeScript（タイプスクリプト）とは？",
          "content": "# 安心・安全なプログラミング\\n\\nTypeScript（タイプスクリプト）は、JavaScript（ジャバスクリプト）というプログラミング言語に「型（かた）」というルールを追加した言葉です。\\n\\n## どうして便利なの？\\n\\n想像してみてください。お弁当箱に「おにぎり専用」と書いてあったら、間違えてサンドイッチを入れようとしたとき「あれ、違うかも？」と気づけますよね。\\n\\nTypeScriptも同じで、「ここには文字だけ入れてね」「数字だけ入れてね」と決めておくと、間違った種類のデータを入れようとしたときに「ここ間違ってるよ！」と先に教えてくれます。"
        },
        {
          "title": "ラベル（型）とは？",
          "content": "# はこに中身を教えてあげましょう\\n\\nプログラミングでは、データを入れておく「はこ」のことを **変数（へんすう）** と呼びます。\\n\\nTypeScriptでは、このはこを作るときに「このはこには文字を入れます！」「数字を入れます！」と先に決めることができます。\\n\\n## たとえ話\\n\\nおもちゃ箱に「ブロック」「ぬいぐるみ」などのラベル（シール）を貼っておくと、片付けるときに迷わないですよね。プログラミングでも同じように、はこにラベルを貼っておくと、中に何を入れるべきかがはっきりします。\\n\\nこの「中身の決まり」を **ラベル（型）** と呼びます。"
        },
        {
          "title": "ラベルの貼りかた",
          "content": "# :（コロン）のあとに種類を書く\\n\\nはこ（変数）の名前のあとに、`:`（コロン）をつけてから種類を書きます。\\n\\n## よく使うラベルの種類\\n\\n- **string**（ストリング）: 文字を入れるときのラベル（例：「こんにちは」「いぬ」など）\\n- **number**（ナンバー）: 数字を入れるときのラベル（例：10、3.14 など）\\n\\n## コードで書くとこうなるよ\\n\\n下のコードでは、「animal」というはこに「string」ラベルを貼って、文字「いぬ」を入れています。\\n\\n```typescript\\nconst animal: string = 'いぬ';\\nconsole.log(animal);\\n```\\n**実行結果：** いぬ"
        }
      ],
      "correctCode": "// messageに'こんにちは TS'を代入（型: string）\\nconst message: string = 'こんにちは TS';\\n// はこの中身を出す\\nconsole.log(message);",
      "holeyCode": "// messageに'こんにちは TS'を代入（型: string）\\nconst ___: ___ = '___';\\n// はこの中身を出す\\n___.___(___);",
      "correctLines": [
          "// messageに'こんにちは TS'を代入（型: string）",
          "const message: string = 'こんにちは TS';",
          "// はこの中身を出す",
          "console.log(message);"
        ],
      "lineHints": [
          null,
          "変数名、文字列型を表す型注釈、代入する文字列リテラルを指定します。",
          null,
          "consoleオブジェクトのlogメソッドを呼び出し、変数名を渡します。"
        ],
        "candidates": {
          "variables": [
            "message"
          ],
          "functions": [
            "log"
          ],
          "strings": [
            "string",
            "こんにちは TS"
          ],
          "others": ["console"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは TS\\n"
          }
        ]
      },
    {
      "title": "数字のラベルで計算しましょう",
      "description": "プログラムで数値を計算する方法を学びます",
      "tutorialSlides": [
        {
          "title": "数値型（すうちがた）とは？",
          "content": "# 計算するためのラベル\\n\\n「10」や「3.14」のような数字を扱うときに使うのが **number（ナンバー）** ラベルです。\\n\\n## いつ使うの？\\n\\n- テストの点数を計算したいとき\\n- ゲームのスコアを足したいとき\\n- おこづかいの計算をしたいとき\\n\\nこんなときは全部 `number` ラベルを使います！計算をするときは、必ず数字ラベル（number）が必要なんです。"
        },
        {
          "title": "数字のラベル",
          "content": "# number（ナンバー）型を使ってみよう\\n\\n整数（せいすう：1、2、3のような小数点のない数）や小数（しょうすう：3.14のような数）など、数字を入れたいときは `number` ラベルを貼ります。\\n\\n## コードで書くとこうなるよ\\n\\n下のコードでは、base（ベース：もとになる点数）と bonus（ボーナス：追加の点数）を足しています。\\n\\n```typescript\\nconst base: number = 100;\\nconst bonus: number = 50;\\nconsole.log(base + bonus);\\n```\\n**実行結果：** 150\\n\\n100 + 50 = 150 になりました！"
        }
      ],
      "correctCode": "// 数字を入れるためのラベルのはこを作る\\nconst x: number = 10;\\n// yにも同じラベルを貼る\\nconst y: number = 5;\\n// たし算した答えを出す\\nconsole.log(x + y);",
      "holeyCode": "// 数字を入れるためのラベルのはこを作る\\nconst ___: ___ = ___;\\n// yにも同じラベルを貼る\\nconst ___: ___ = ___;\\n// たし算した答えを出す\\n___.___(___  ___ ___);",
      "correctLines": [
          "// 数字を入れるためのラベルのはこを作る",
          "const x: number = 10;",
          "// yにも同じラベルを貼る",
          "const y: number = 5;",
          "// たし算した答えを出す",
          "console.log(x + y);"
        ],
      "lineHints": [
          null,
          "変数名xに `number` ラベルを貼り、10を代入します。",
          null,
          "変数名yにも `number` ラベルを貼り、5を代入します。",
          null,
          "consoleオブジェクトのlogメソッドでたし算（+）の結果を出力します。"
        ],
        "candidates": {
          "variables": [
            "x",
            "y"
          ],
          "functions": [
            "log"
          ],
          "strings": [
            "number"
          ],
          "operators": [
            "+"
          ],
          "numbers": [
            "10",
            "5"
          ],
          "others": ["console"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "15\\n"
          }
        ]
      },
    {
      "title": "剰余演算子（%）",
      "description": "剰余演算子（%）の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "あまりを求める",
          "content": "# 割り算の「あまり」を知りたい！\\n\\n割り算をしたときに、割り切れなくて「あまり」が出ることがありますよね。\\n\\n## たとえ話\\n\\nクッキーが10枚あって、3人で分けるとどうなるかな？\\n- 1人3枚ずつもらえて、1枚あまる！\\n\\nこの「あまり」だけを計算してくれるのが `%`（パーセント）という記号です。\\n\\n**剰余（じょうよ）** という難しい名前がついていますが、単に「あまりを求める記号」と覚えれば大丈夫です！"
        },
        {
          "title": "% の使い方",
          "content": "# あまりを計算してみよう\\n\\n## 例1：10 ÷ 3 のあまり\\n\\n```typescript\\nconsole.log(10 % 3);  // => 1\\n```\\n\\n10 ÷ 3 = 3 あまり **1** なので、「1」が表示されます。\\n\\n## 例2：8 ÷ 2 のあまり\\n\\n```typescript\\nconsole.log(8 % 2);   // => 0\\n```\\n\\n8 ÷ 2 = 4 あまり **0** なので、「0」が表示されます。\\nあまりが0ということは、きれいに割り切れたということですね！"
        }
      ],
      "correctCode": "// 10 を 3 で割ったあまりを出力する\\nconsole.log(10 % 3);",
      "holeyCode": "// 10 を 3 で割ったあまりを出力する\\n___.___(___  ___ ___);",
      "correctLines": [
          "// 10 を 3 で割ったあまりを出力する",
          "console.log(10 % 3);"
        ],
      "lineHints": [
          null,
          "consoleオブジェクトのlogメソッドで、10 % 3（10を3で割ったあまり）を出力します。"
        ],
        "candidates": {
          "operators": [
            "%",
            "+",
            "-",
            "*",
            "/"
          ],
          "functions": [
            "log"
          ],
          "numbers": [
            "10",
            "3"
          ],
          "others": ["console"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      },
    {
      "title": "累算代入演算子（+=、-=）",
      "description": "累算代入演算子（+=、-=）の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "中身を増やしたいとき",
          "content": "# はこの中身をパワーアップ\\n\\n「今の点数に10点プラスしたい！」というとき、`+=` を使うと便利です。\\n\\n## たとえ話\\n\\n貯金箱に100円入っていて、50円を追加するとき、わざわざ「100円 + 50円 = 150円」と書くのは大変ですよね。\\n\\n`+=` は「今入っている金額に、もっと足して、同じ場所に保存する」という合体技なんです！\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\nlet x: number = 10;\\nx += 5;  // x に 5 を足して保存（x = x + 5 と同じ意味）\\nconsole.log(x);  // => 15\\n```\\n\\n`let` は中身を変えられるはこを作るときに使います（`const` は変えられないはこでしたね）。"
        },
        {
          "title": "-= も使える",
          "content": "# 引き算バージョン\\n\\n`-=` を使えば、「今の数字から引いて保存」ができます。\\n\\n## たとえ話\\n\\n貯金箱から100円使うとき、残りのお金を計算しますよね。`-=` はそれを簡単にできる記号です。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\nlet x: number = 10;\\nx -= 3;  // x から 3 を引いて保存（x = x - 3 と同じ意味）\\nconsole.log(x);  // => 7\\n```\\n\\n**覚え方：** `+=` は「足して保存」、`-=` は「引いて保存」です！"
        }
      ],
      "correctCode": "// scoreに50を入れる\\nlet score: number = 50;\\n// 10点プラスする\\nscore += 10;\\n// scoreを表示\\nconsole.log(score);",
      "holeyCode": "// scoreに50を入れる\\nlet ___: ___ = ___;\\n// 10点プラスする\\n___ ___ ___;\\n// scoreを表示\\n___.___(___);",
      "correctLines": [
          "// scoreに50を入れる",
          "let score: number = 50;",
          "// 10点プラスする",
          "score += 10;",
          "// scoreを表示",
          "console.log(score);"
        ],
      "lineHints": [
          null,
          "変数名score、型numberを指定し、50を代入します。",
          null,
          "変数scoreに累算代入演算子（+=）で10を加算します。",
          null,
          "consoleオブジェクトのlogメソッドでscoreを出力します。"
        ],
        "candidates": {
          "operators": [
            "+=",
            "-=",
            "*=",
            "/="
          ],
          "numbers": [
            "50",
            "10"
          ],
          "variables": [
            "score"
          ],
          "functions": [
            "log"
          ],
          "strings": [
            "number"
          ],
          "others": ["console"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "60\\n"
          }
        ]
      },
    {
      "title": "ラベルを貼ったはこを文章に入れましょう",
      "description": "データを名前をつけて保存する「変数」の仕組みを理解します",
      "tutorialSlides": [
        {
          "title": "文章と変数を組み合わせる",
          "content": "# テンプレートリテラル\\n\\n文章の途中に、変数（はこ）の中身を入れたいときに使うのが **テンプレートリテラル** です。\\n\\n## たとえ話\\n\\n「こんにちは、○○さん！」という文章の「○○」の部分を、その人の名前に変えたいことってありますよね。\\n\\nテンプレートリテラルを使うと、文章の一部を変数（はこ）の中身に置き換えることができます。\\n\\nつまり「こんにちは、${name}さん！」と書くと、nameに入っている名前が自動で入るんです！"
        },
        {
          "title": "文章と変数をくっつける",
          "content": "# JavaScriptと同じ書き方ができます\\n\\n## 書き方のポイント\\n\\n1. キーボードの ``` ` ``` という記号（バッククォート）で文章を囲みます\\n2. 変数を入れたい場所に `${変数名}` と書きます\\n\\n## コードで書くとこうなるよ\\n\\n下のコードでは、「food」というはこの中身「カレー」が、文章に埋め込まれます。\\n\\n```typescript\\nconst food: string = 'カレー';\\nconsole.log(`今日の夕飯は${food}です`);\\n```\\n**実行結果：** 今日の夕飯はカレーです\\n\\n**ヒント：** バッククォート ` ``` ` ` は、キーボードの左上にある「Shift + @」で打てます！"
        }
      ],
      "correctCode": "// age というはこに 10 を入れる\\nconst age: number = 10;\\n// 文章の中に中身を入れる\\nconsole.log(`私は${age}歳です`);",
      "holeyCode": "// age というはこに 10 を入れる\\nconst ___: ___ = ___;\\n// 文章の中に中身を入れる\\n___.___(___);",
      "correctLines": [
          "// age というはこに 10 を入れる",
          "const age: number = 10;",
          "// 文章の中に中身を入れる",
          "console.log(`私は${age}歳です`);"
        ],
      "lineHints": [
          null,
          "変数名age、型numberを指定し、10を代入します。",
          null,
          "consoleオブジェクトのlogメソッドでテンプレート文字列を出力します。"
        ],
        "candidates": {
          "variables": [
            "age"
          ],
          "functions": [
            "log"
          ],
          "strings": [
            "number",
            "`私は${age}歳です`"
          ],
          "numbers": [
            "10"
          ],
          "others": ["console"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "私は10歳です\\n"
          }
        ]
      },
    {
      "title": "同じラベルを並べる「配列」",
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "配列（はいれつ）とは？",
          "content": "# データの行列\\n\\nたくさんのデータを順番に並べておきたいときに使うのが **配列（はいれつ）** です。\\n\\n## たとえ話\\n\\nロッカーを想像してみてください。1番、2番、3番...と番号がついた小さな引き出しが並んでいて、それぞれにモノを入れられますよね。\\n\\n配列はまさにこのロッカーのようなもの！クラスの全員の名前や、買い物リストなど、たくさんのデータを一つの変数にまとめて管理できます。\\n\\n## 番号は0から始まる\\n\\nプログラミングでは、1番目ではなく **0番目** からスタートします。これは覚えておきましょう！"
        },
        {
          "title": "ラベルのあとに [] をつけましょう",
          "content": "# string[] や number[]\\n\\n「文字のラベルがついたデータの列」を作りたいときは、`string[]` のようにラベルの名前のあとに `[]`（角かっこ）をつけます。\\n\\n## コードで書くとこうなるよ\\n\\n下のコードでは、2つの食べ物の名前を配列に入れています。\\n\\n```typescript\\n// 文字列の配列（2つの食べ物が入っている）\\nconst items: string[] = ['おにぎり', 'パン'];\\nconsole.log(items[0]);  // 0番目を取り出す\\n```\\n**実行結果：** おにぎり\\n\\n`items[0]` は「itemsの0番目」という意味です。0番目は「おにぎり」ですね！"
        }
      ],
      "correctCode": "// 文字列のラベルがついた配列を作る\\nconst colors: string[] = ['あか', 'あお'];\\n// 2番目のデータ（インデックス1）を出す\\nconsole.log(colors[1]);",
      "holeyCode": "// 文字列のラベルがついた配列を作る\\nconst ___: ___[] = ['___', '___'];\\n// 2番目のデータ（インデックス1）を出す\\n___.___(___[___]);",
      "correctLines": [
          "// 文字列のラベルがついた配列を作る",
          "const colors: string[] = ['あか', 'あお'];",
          "// 2番目のデータ（インデックス1）を出す",
          "console.log(colors[1]);"
        ],
      "lineHints": [
          null,
          "変数名colors、型string[]を指定し、'あか'と'あお'の配列を代入します。",
          null,
          "consoleオブジェクトのlogメソッドでcolors配列のインデックス1を出力します。"
        ],
        "candidates": {
          "variables": [
            "colors"
          ],
          "functions": [
            "log"
          ],
          "strings": [
            "string",
            "あか",
            "あお"
          ],
          "numbers": [
            "1"
          ],
          "others": ["console"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "あお\\n"
          }
        ]
      },
    {
      "title": "「はい」か「いいえ」のラベル",
      "description": "「はい」か「いいえ」のラベルの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "論理型（ろんりがた）とは？",
          "content": "# スイッチのようなラベル\\n\\n「はい（正しい）」か「いいえ（間違い）」のどちらかしかない状態を扱うのが **boolean（ブーリアン）** です。\\n\\n## たとえ話\\n\\n電気のスイッチを想像してみてください。「ON（つけている）」か「OFF（消している）」の2つしかありませんよね。\\n\\nbooleanも同じで、「true（正しい・はい）」か「false（間違い・いいえ）」の2つの状態しかありません。\\n\\n## いつ使うの？\\n\\n- ログインしているかどうか\\n- ゲームがクリアしたかどうか\\n- お店が開いているかどうか\\n\\nこんな「はい/いいえ」で答えられる質問に使います！"
        },
        {
          "title": "正しいか、間違いか",
          "content": "# boolean（ブーリアン）型\\n\\n`true`（トゥルー：正しい）か `false`（フォルス：間違い）の、どちらかだけを入れられるラベルです。\\n\\n## コードで書くとこうなるよ\\n\\n下のコードでは、「お店が開いているか」をチェックしています。\\n\\n```typescript\\nconst isOpen: boolean = false;  // 開いていない\\nif (!isOpen) {  // もし開いていなければ\\n    console.log('閉まっています');\\n}\\n```\\n**実行結果：** 閉まっています\\n\\n`!`（ビックリマーク）は「〜ではない」という意味です。`!isOpen` は「開いていない」ということですね。"
        }
      ],
      "correctCode": "// 真偽値（はい/いいえ）を入れるためのラベルを貼る\\nconst isAdult: boolean = true;\\n// もし 正しかったら（trueなら）\\nif (isAdult) {\\n    // メッセージ（'おとなです'）\\n    console.log('おとなです');\\n}",
      "holeyCode": "// 真偽値（はい/いいえ）を入れるためのラベルを貼る\\nconst ___: ___ = ___;\\n// もし 正しかったら（trueなら）\\nif (___) {\\n    // メッセージ（'おとなです'）\\n    ___.___(___);\\n___",
      "correctLines": [
          "// 真偽値（はい/いいえ）を入れるためのラベルを貼る",
          "const isAdult: boolean = true;",
          "// もし 正しかったら（trueなら）",
          "if (isAdult) {",
          "    // メッセージ（'おとなです'）",
          "    console.log('おとなです');",
          "}"
        ],
      "lineHints": [
          null,
          "変数名isAdult、型boolean、値trueを指定します。",
          null,
          "if文の条件にisAdultを指定します。",
          null,
          "consoleオブジェクトのlogメソッドで'おとなです'を出力します。",
          "閉じ括弧を入力してください。"
        ],
        "candidates": {
          "variables": [
            "isAdult"
          ],
          "functions": [
            "log"
          ],
          "strings": [
            "boolean",
            "'おとなです'"
          ],
          "keywords": [
            "true"
          ],
          "others": ["console", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "おとなです\\n"
          }
        ]
      },
    {
      "title": "点数で分けてみましょう",
      "description": "点数で分けてみましょうの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "条件分岐（じょうけんぶんき）とは？",
          "content": "# もし〜なら、の仕組み\\n\\n「雨が降ったら傘をさす」「晴れたら外で遊ぶ」のように、状況によって動きを変えることを **条件分岐（じょうけんぶんき）** と呼びます。\\n\\n## たとえ話\\n\\n自動販売機でジュースを買うときを想像してみてください。\\n- もしお金が足りたら → ジュースが出てくる\\n- もしお金が足りなかったら → 「お金が足りません」と表示される\\n\\nこれが条件分岐です！プログラムに「こういうときはこうして」と判断させることができます。"
        },
        {
          "title": "もし〜なら、そうでなければ",
          "content": "# 条件で分ける\\n\\nJavaScriptと同じように、`if`（イフ：もし）と `else`（エルス：そうでなければ）を使って動きを分けることができます。\\n\\n## コードで書くとこうなるよ\\n\\n下のコードでは、今の時間が午前か午後かをチェックしています。\\n\\n```typescript\\nconst hour: number = 15;  // 15時\\nif (hour < 12) {  // もし12より小さければ\\n    console.log('午前中');\\n} else {  // そうでなければ\\n    console.log('お昼すぎ');\\n}\\n```\\n**実行結果：** お昼すぎ\\n\\n15は12より大きいので、`else` の中が実行されました！"
        }
      ],
      "correctCode": "// score というはこに 75 を入れる\\nconst score: number = 75;\\n// 80以上かを比較する演算子\\nif (score >= 80) {\\n    // 80点以上のときのメッセージ（'ごうかく'）\\n    console.log('ごうかく');\\n// 「そうでなければ」を表すキーワード\\n} else {\\n    // それ以外の場合（'ざんねん'）\\n    console.log('ざんねん');\\n}",
      "holeyCode": "// score というはこに 75 を入れる\\nconst ___: ___ = ___;\\n// 80以上かを比較する演算子\\nif (___ ___ ___) {\\n    // 80点以上のときのメッセージ（'ごうかく'）\\n    ___.___(___);\\n// 「そうでなければ」を表すキーワード\\n} ___ {\\n    // それ以外の場合（'ざんねん'）\\n    ___.___(___);\\n___",
      "correctLines": [
          "// score というはこに 75 を入れる",
          "const score: number = 75;",
          "// 80以上かを比較する演算子",
          "if (score >= 80) {",
          "    // 80点以上のときのメッセージ（'ごうかく'）",
          "    console.log('ごうかく');",
          "// 「そうでなければ」を表すキーワード",
          "} else {",
          "    // それ以外の場合（'ざんねん'）",
          "    console.log('ざんねん');",
          "}"
        ],
      "lineHints": [
          null,
          "変数名score、型number、値75を指定します。",
          null,
          "score >= 80 の条件式を評価します。",
          null,
          "consoleオブジェクトのlogメソッドで'ごうかく'を出力します。",
          null,
          "elseキーワードで条件が満たされなかった場合の処理を記述します。",
          null,
          "consoleオブジェクトのlogメソッドで'ざんねん'を出力します。",
          "閉じ括弧を入力してください。"
        ],
        "candidates": {
          "variables": [
            "score"
          ],
          "functions": [
            "log"
          ],
          "strings": [
            "number",
            "'ごうかく'",
            "'ざんねん'"
          ],
          "keywords": [
            "else"
          ],
          "numbers": [
            "75",
            "80"
          ],
          "operators": [
            ">="
          ],
          "others": ["console", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ざんねん\\n"
          }
        ]
      },
    {
      "title": "論理演算子（&&、||）",
      "description": "複数の条件を組み合わせる方法を学びます",
      "tutorialSlides": [
        {
          "title": "条件を組み合わせる",
          "content": "# 複数の条件\\n\\n「10歳以上で、かつ、宿題が終わっていたら、ゲームをしてもいいよ」というように、2つの条件を組み合わせたいときがありますよね。\\n\\n## 2つの記号を覚えよう\\n\\n- `&&`（アンドアンド）：「かつ」= 両方とも満たすとき\\n- `||`（オアオア）：「または」= どちらか一方を満たすとき\\n\\n## たとえ話\\n\\n- 「傘を持っている **かつ** 雨が降っている」→ 傘をさす\\n- 「暑い **または** のどが渇いた」→ 水を飲む"
        },
        {
          "title": "&& と || の使い方",
          "content": "# 条件の組み合わせ\\n\\n## コードで書くとこうなるよ\\n\\n下のコードでは、「10歳以上、かつ、20歳未満」かどうかをチェックしています。\\n\\n```typescript\\nconst age: number = 15;\\nif (age >= 10 && age < 20) {\\n    console.log('10代です');\\n}\\n```\\n**実行結果：** 10代です\\n\\n15歳は「10以上」であり「20より小さい」ので、両方の条件を満たしています！\\n\\n## まとめ\\n\\n- `&&` は「かつ」：両方の条件を満たすときに true\\n- `||` は「または」：どちらか一方を満たせば true"
        }
      ],
      "correctCode": "// scoreに85を入れる\\nconst score: number = 85;\\n// 80以上 かつ 100以下 ならメッセージを出す\\nif (score >= 80 && score <= 100) {\\n    // ごうかくと出力\\n    console.log('ごうかく');\\n}",
      "holeyCode": "// scoreに85を入れる\\nconst ___: ___ = ___;\\n// 80以上 かつ 100以下 ならメッセージを出す\\nif (___ >= ___ ___ ___ <= ___) {\\n    // ごうかくと出力\\n    ___.___(___);\\n___",
      "correctLines": [
          "// scoreに85を入れる",
          "const score: number = 85;",
          "// 80以上 かつ 100以下 ならメッセージを出す",
          "if (score >= 80 && score <= 100) {",
          "    // ごうかくと出力",
          "    console.log('ごうかく');",
          "}"
        ],
      "lineHints": [
          null,
          "変数名score、型number、値85を指定します。",
          null,
          "score >= 80 && score <= 100 の条件式を評価します。",
          null,
          "consoleオブジェクトのlogメソッドで'ごうかく'を出力します。",
          "閉じ括弧を入力してください。"
        ],
        "candidates": {
          "variables": [
            "score"
          ],
          "operators": [
            "&&",
            "||"
          ],
          "numbers": [
            "85",
            "80",
            "100"
          ],
          "strings": [
            "number",
            "'ごうかく'"
          ],
          "functions": [
            "log"
          ],
          "others": ["console", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ごうかく\\n"
          }
        ]
      },
    {
      "title": "順番に出してみましょう",
      "description": "順番に出してみましょうの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "繰り返し（ループ）とは？",
          "content": "# 同じ作業を自動化！\\n\\n同じことを何回も繰り返すのは大変ですよね。\\n\\n## たとえ話\\n\\n「クラスの全員の名前を呼んでください」と言われたとき、一人ずつ呼ぶのは大変です。でもプログラミングでは **ループ** という仕組みを使って、「名簿の全員を順番に呼んで！」とコンピュータにお願いできます。\\n\\nこれで100人いても、1000人いても、同じコードで対応できるんです！"
        },
        {
          "title": "for...of の使い方",
          "content": "# 配列から順番に取り出す\\n\\n`for...of`（フォー オブ）を使うと、配列の中身を1つずつ順番に取り出せます。\\n\\n## 書き方のポイント\\n\\n`for (const 変数 of 配列)` という形で書きます。\\n- `of` は「〜の中から」という意味\\n- 「配列の中から、変数に1つずつ取り出す」ということです\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\nconst animals: string[] = ['いぬ', 'ねこ'];\\nfor (const animal of animals) {\\n    console.log(animal);\\n}\\n```\\n**実行結果：**\\nいぬ\\nねこ\\n\\n配列の中身が順番に表示されました！"
        },
        {
          "title": "型の推論（すいろん）",
          "content": "# TypeScriptが自動で予想してくれる\\n\\nTypeScriptはとても賢いので、配列に貼られたラベルを見て、中から取り出したデータの種類も自動で「きっとこれです！」と予想してくれます。\\n\\n## たとえ話\\n\\n「りんご箱」から取り出したものは「りんご」に決まっていますよね。\\n同じように、`string[]`（文字列の配列）から取り出したものは `string`（文字列）だと自動でわかるんです！\\n\\nこれを **型推論（かたすいろん）** と呼びます。便利ですね！"
        }
      ],
      "correctCode": "// 配列を作る（'たろう', 'はなこ'の順）\\nconst names: string[] = ['たろう', 'はなこ'];\\n// 順番にループする\\nfor (const name of names) {\\n    console.log(name);\\n}",
      "holeyCode": "// 配列を作る（'たろう', 'はなこ'の順）\\nconst ___: ___[] = ['___', '___'];\\n// 順番にループする\\nfor (const ___ of ___) {\\n    ___.___(___);\\n___",
      "correctLines": [
          "// 配列を作る（'たろう', 'はなこ'の順）",
          "const names: string[] = ['たろう', 'はなこ'];",
          "// 順番にループする",
          "for (const name of names) {",
          "    console.log(name);",
          "}"
        ],
      "lineHints": [
          null,
          "変数名names、型string[]、値['たろう', 'はなこ']を指定します。",
          null,
          "for...ofでnames配列をループし、各要素をnameに代入します。",
          "consoleオブジェクトのlogメソッドでnameを出力します。",
          "閉じ括弧を入力してください。"
        ],
        "candidates": {
          "variables": [
            "name",
            "names"
          ],
          "functions": [
            "log"
          ],
          "strings": [
            "string",
            "たろう",
            "はなこ"
          ],
          "others": ["console", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "たろう\\nはなこ\\n"
          }
        ]
      },
    {
      "title": "自分だけのラベルを作ってみましょう",
      "description": "自分だけのラベルを作ってみましょうの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "オリジナルの型とは？",
          "content": "# 自分だけのルールを作る\\n\\n今まで学んだ `string`（文字）や `number`（数字）は、TypeScriptにもともと用意されているラベルでした。\\n\\nでも、実際のプログラムでは「名前（文字）」と「年齢（数字）」のように、複数の情報をセットにしたいことがよくあります。\\n\\n## たとえ話\\n\\n「生徒カード」を想像してみてください。名前、年齢、クラス...といろんな情報が1枚のカードにまとまっていますよね。\\n\\nプログラミングでも同じように、自分だけの新しいラベル（**カスタム型**）を作ることができます！"
        },
        {
          "title": "ラベルの組み合わせ（Type Alias）",
          "content": "# type（タイプ）キーワード\\n\\n`type` という言葉を使って、新しいラベルの名前を決められます。これを **タイプエイリアス（型の別名）** と呼びます。\\n\\n## 書き方のポイント\\n\\n`type 名前 = { プロパティ名: 型; ... };` という形で書きます。\\n\\n## コードで書くとこうなるよ\\n\\n下のコードでは、「Pet（ペット）」という新しいラベルを作っています。\\n\\n```typescript\\n// Petという新しいラベルを作る\\ntype Pet = { type: string; name: string };\\n// Petラベルを使って変数を作る\\nconst myPet: Pet = { type: 'いぬ', name: 'ポチ' };\\nconsole.log(myPet.name);\\n```\\n**実行結果：** ポチ"
        }
      ],
      "correctCode": "// User型を定義（nameはstring）\\ntype User = { name: string };\\n// userに{ name: 'たろう' }を代入\\nconst user: User = { name: 'たろう' };\\n// nameプロパティを出す\\nconsole.log(user.name);",
      "holeyCode": "// User型を定義（nameはstring）\\ntype ___ = { ___: ___ };\\n// userに{ name: 'たろう' }を代入\\nconst ___: ___ = { ___: '___' };\\n// nameプロパティを出す\\n___.___(___.___);",
      "correctLines": [
          "// User型を定義（nameはstring）",
          "type User = { name: string };",
          "// userに{ name: 'たろう' }を代入",
          "const user: User = { name: 'たろう' };",
          "// nameプロパティを出す",
          "console.log(user.name);"
        ],
      "lineHints": [
          null,
          "型名User、プロパティnameの型stringを指定します。",
          null,
          "変数名user、型User、プロパティnameに'たろう'を代入します。",
          null,
          "consoleオブジェクトのlogメソッドでuser.nameを出力します。"
        ],
        "candidates": {
          "variables": [
            "user"
          ],
          "functions": [
            "log"
          ],
          "strings": [
            "string",
            "User",
            "name",
            "たろう"
          ],
          "others": ["console"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "たろう\\n"
          }
        ]
      },
    {
      "title": "関数の「入り口」にラベルをはりましょう",
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "関数（かんすう）とは？",
          "content": "# オリジナルの命令\\n\\nよく使う手順をひとまとめにして、自分だけの新しい命令を作ることができます。一度作っておけば、いつでも呼び出して使えます。\\n\\n## たとえ話\\n\\n「おはようの挨拶をする」という作業を考えてみてください。\\n1. 相手の名前を言う\\n2. 「おはよう！」と言う\\n\\nこの手順を「おはよう関数」として登録しておけば、いつでも「おはよう関数（太郎）」と呼び出すだけで、「太郎くん、おはよう！」と実行してくれます。"
        },
        {
          "title": "入り口のラベル",
          "content": "# 引数（ひきすう）にラベルを貼る\\n\\n関数が受け取るデータのことを **引数（ひきすう）** と呼びます。「関数に渡すデータ」と考えてください。\\n\\nTypeScriptでは、この引数にもラベルを貼ることで、「文字以外は渡さないで！」と決めることができます。\\n\\n## コードで書くとこうなるよ\\n\\n下のコードでは、`msg` という引数に `string` ラベルを貼っています。\\n\\n```typescript\\n// 文字列（string）だけを受け取る関数\\nfunction sayHello(msg: string) {\\n    console.log(`メッセージ: ${msg}`);\\n}\\nsayHello('ヤッホー');\\n```\\n**実行結果：** メッセージ: ヤッホー\\n\\nこれで、間違って数字を渡そうとしても、TypeScriptが「文字を渡してね！」と教えてくれます。"
        }
      ],
      "correctCode": "// 受け取るデータのラベルを指定する\\nfunction greet(name: string) {\\n    console.log(`こんにちは、${name}`);\\n}\\n// 関数を実行する\\ngreet('TypeScript');",
      "holeyCode": "// 受け取るデータのラベルを指定する\\nfunction ___(___: ___) {\\n    ___.___(___);\\n___\\n// 関数を実行する\\n___(___);",
      "correctLines": [
          "// 受け取るデータのラベルを指定する",
          "function greet(name: string) {",
          "    console.log(`こんにちは、${name}`);",
          "}",
          "// 関数を実行する",
          "greet('TypeScript');"
        ],
      "lineHints": [
          null,
          "関数名greet、引数name、型stringを指定します。",
          "consoleオブジェクトのlogメソッドでテンプレート文字列を出力します。",
          "閉じ括弧を入力してください。",
          null,
          "greet関数を'TypeScript'を引数に呼び出します。"
        ],
        "candidates": {
          "variables": [
            "name"
          ],
          "functions": [
            "greet",
            "log"
          ],
          "strings": [
            "string",
            "`こんにちは、${name}`",
            "'TypeScript'"
          ],
          "others": ["console", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは、TypeScript\\n"
          }
        ]
      },
    {
      "title": "「なにも返さない」というラベル",
      "description": "「なにも返さない」というラベルの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "戻り値（もどりち）とは？",
          "content": "# 関数の結果\\n\\n関数が仕事を終えたあとに返してくれる結果を **戻り値（もどりち）** と呼びます。\\n\\n## たとえ話\\n\\n自動販売機を想像してみてください。\\n- 入り口：お金とボタン（= 引数）\\n- 出口：ジュース（= 戻り値）\\n\\n関数も同じで、データを受け取って、結果を返すことができます。\\n\\n## 戻り値の型もラベルで指定できる\\n\\n関数が返すデータの型も、ラベルで指定できます。例えば「この関数は数字を返すよ」と宣言できます。"
        },
        {
          "title": "void（ボイド）ラベル",
          "content": "# 何も返さないときは void です\\n\\n結果などを「返さない」関数もあります。画面に文字を表示するだけ、など。\\n\\nそんな関数には、`void`（ボイド）というラベルを貼ります。これは「空っぽ」「何もない」という意味です。\\n\\n## コードで書くとこうなるよ\\n\\n下のコードでは、画面にメッセージを表示するだけで、何も返しません。\\n\\n```typescript\\nfunction logger(text: string): void {\\n    console.log(`LOG: ${text}`);\\n}\\nlogger('処理開始');\\n```\\n**実行結果：** LOG: 処理開始\\n\\n関数名のあとの `: void` が「何も返さないよ」という意味です。"
        }
      ],
      "correctCode": "// 何も返さないときに使うラベル\\nfunction showDate(): void {\\n    console.log('今日の日付');\\n}\\n// 関数を実行する\\nshowDate();",
      "holeyCode": "// 何も返さないときに使うラベル\\nfunction ___(): ___ {\\n    ___.___(___);\\n___\\n// 関数を実行する\\n___();",
      "correctLines": [
          "// 何も返さないときに使うラベル",
          "function showDate(): void {",
          "    console.log('今日の日付');",
          "}",
          "// 関数を実行する",
          "showDate();"
        ],
      "lineHints": [
          null,
          "関数名showDate、戻り値の型voidを指定します。",
          "consoleオブジェクトのlogメソッドで'今日の日付'を出力します。",
          "閉じ括弧を入力してください。",
          null,
          "showDate関数を引数なしで呼び出します。"
        ],
        "candidates": {
          "functions": [
            "showDate",
            "log"
          ],
          "strings": [
            "void",
            "'今日の日付'"
          ],
          "others": ["console", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "今日の日付\\n"
          }
        ]
      }
  ]
}

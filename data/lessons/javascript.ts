const bq = String.fromCharCode(96);

export const javascriptData = {
  "language": "javascript",
  "lessonId": "javascript-1",
  "lessonTitle": "JavaScript (ジャバスクリプト) に挑戦！",
  "lessonDescription": "Webサイトを動かす魔法、JavaScript（ジャバスクリプト）のきほんを学びましょう。コンピュータにメッセージを出したり、計算させたりする方法を身につけます。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
        "title": "画面にメッセージを出しましょう",
        "description": "コンピュータに「こんにちは」とあいさつさせてみましょう。console.log（コンソール・ログ）という関数（かんすう）を使います。",
        "difficulty": "easy",
        "orderIndex": 1,
        "tutorialSlides": [
          {
            "title": "JavaScript（ジャバスクリプト）とは？",
            "content": "# Webサイトを動かす魔法の言葉\n\nJavaScript（ジャバスクリプト）は、Webサイトに「動き」をつけるためのプログラミング言語（げんご）です。\n\n**たとえば、こんなことができます：**\n- ボタンをクリックしたら何かが起きる\n- 画面がキラキラ動くアニメーション\n- ゲームのキャラクターを動かす\n\n世界中（せかいじゅう）でとても人気があり、ゲームやスマホアプリ作りにも使われています。"
          },
          {
            "title": "メッセージを出す「出力（しゅつりょく）」",
            "content": "# console.log（コンソール・ログ）って何？\n\n「出力（しゅつりょく）」とは、コンピュータに文字や数字を画面に出してもらうことです。\n\n`console.log()` は、**「カッコの中身を画面に出して！」** とお願いする命令です。\n\n**書き方のルール：**\n1. 文字は `'` か `\"` で囲む（シングルクォート または ダブルクォート）\n2. 文の最後には `;`（セミコロン）をつける\n\n**コード例：**\n```javascript\nconsole.log('JavaScript楽しい！');\n```\n\n**実行結果：**\n```\nJavaScript楽しい！\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// 画面に「Hello, JavaScript!」と出す関数\nconsole.log('Hello, JavaScript!');",
        "holeyCode": "// 画面に「Hello, JavaScript!」と出す関数\nconsole.log('___');",
        "correctLines": [
          "// 画面に「Hello, JavaScript!」と出す関数",
          "console.log('Hello, JavaScript!');"
        ],
        "lineHints": [
          null,
          "コメントです。プログラムのメモとして使います。"
        ],
        "candidates": {
          "functions": [
            "console.log"
          ],
          "strings": [
            "Hello, JavaScript!"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello, JavaScript!\n"
          }
        ]
      },
    {
        "title": "ずっと変わらない「はこ」const",
        "description": "const（コンスト）を使って、データをしまっておく「はこ」を作ってみましょう。nameという名前のはこに 'JavaScript' と入れてみます。",
        "difficulty": "easy",
        "orderIndex": 2,
        "tutorialSlides": [
          {
            "title": "変数（へんすう）とは？",
            "content": "# データをしまっておく「はこ」\n\nプログラムでは、数字や文字をしまっておく「はこ」を作れます。この「はこ」を **変数（へんすう）** と呼びます。\n\n**身近なたとえ：**\n引っ越しのとき、ダンボール箱に「おもちゃ」「本」と名前を書きますよね？\n変数も同じで、中身が何か分かるように名前をつけます！\n\n**例：**\n- `name` という箱に「たろう」を入れる\n- `age` という箱に「10」を入れる"
          },
          {
            "title": "「はこ」に名前をつけよう",
            "content": "# const（コンスト）の使い方\n\n`const` は「一度入れたら変えない」という約束の「はこ」を作る言葉です。\n\n**書き方：**\n```\nconst はこの名前 = 入れたいもの;\n```\n\n**ポイント：**\n- `=`（イコール）は「右のものを左のはこに入れる」という意味\n- 算数の「等しい」とは違うので注意！\n\n**コード例：**\n```javascript\nconst fruit = 'りんご';\nconsole.log(fruit);\n```\n**実行結果：**\n```\nりんご\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// nameという名前のはこを作る\nconst name = 'JavaScript';\n// はこの中身を出す\nconsole.log(name);",
        "holeyCode": "// nameという名前のはこを作る\nconst name = '___';\n// はこの中身を出す\nconsole.log(___);",
        "correctLines": [
          "// nameという名前のはこを作る",
          "const name = 'JavaScript';",
          "// はこの中身を出す",
          "console.log(name);"
        ],
        "lineHints": [
          null,
          "定数を宣言し、文字列を代入します。",
          null,
          "console.log の中に、はこの名前 name を入力してください。"
        ],
        "candidates": {
          "variables": [
            "name"
          ],
          "functions": [
            "console.log"
          ],
          "strings": [
            "JavaScript"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "JavaScript\n"
          }
        ]
      },
    {
        "title": "コンピュータで計算（けいさん）しましょう",
        "description": "JavaScriptを使って、たし算をしてみましょう。x と y という2つのはこの中身をたして、答えを出してみます。",
        "difficulty": "easy",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "算数とプログラミング",
            "content": "# コンピュータは計算の天才！\n\nコンピュータは、計算がとっても得意です。\n\n**たとえば：**\n- 人間が1時間かかる計算 → コンピュータなら0.001秒！\n- どんなに大きな数字でも間違えない\n\n電卓と同じように、プログラミングでもコンピュータに計算をお願いできます。\nしかも、計算結果を「はこ」に入れておけば、あとで何度も使えます！"
          },
          {
            "title": "計算の記号（演算子・えんざんし）",
            "content": "# 算数と同じ記号を使います\n\n計算に使う記号のことを **演算子（えんざんし）** と呼びます。\n\n| 記号 | 意味 | 例 |\n|:---:|:---:|:---:|\n| **+** | たし算 | 3 + 2 = 5 |\n| **-** | ひき算 | 5 - 2 = 3 |\n| **\\*** | かけ算 | 4 * 3 = 12 |\n| **/** | わり算 | 10 / 2 = 5 |\n\n**コード例：**\n```javascript\nconst a = 20;\nconst b = 10;\nconsole.log(a - b);  // 20 - 10 の答え\n```\n**実行結果：**\n```\n10\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// xに10を入れる\nconst x = 10;\n// yに5を入れる\nconst y = 5;\n// x + y を表示する\nconsole.log(x + y);",
        "holeyCode": "// xに10を入れる\nconst x = ___ ;\n// yに5を入れる\nconst y = ___ ;\n// x + y を表示する\nconsole.log(x ___ y);",
        "correctLines": [
          "// xに10を入れる",
          "const x = 10;",
          "// yに5を入れる",
          "const y = 5;",
          "// x + y を表示する",
          "console.log(x + y);"
        ],
        "lineHints": [
          null,
          "定数を宣言し、数値を代入します。",
          null,
          "定数を宣言し、数値を代入します。",
          null,
          "たし算なので `+` を使います。 `console.log(x + y)` と入力してください。"
        ],
        "candidates": {
          "variables": [
            "x",
            "y"
          ],
          "functions": [
            "console.log"
          ],
          "operators": [
            "+"
          ],
          "numbers": [
            "10",
            "5"
          ],
          "others": [
            "10;",
            "5;"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "15\n"
          }
        ]
      },
    {
        "title": "文章の中に「はこ」を入れましょう",
        "description": "「テンプレートリテラル」という書き方を使って、文章の中に「はこ（変数）」の中身を表示してみましょう。",
        "difficulty": "easy",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "文章と変数を組み合わせる",
            "content": "# テンプレートリテラルって何？\n\n**テンプレートリテラル** は、文章の中に変数（はこ）の中身を入れる便利な書き方です。\n\n**身近なたとえ：**\n手紙の「○○さんへ」の○○に名前を入れるような感じです。\n同じ文章でも、名前の部分だけ変えられますよね！\n\n**こんなときに便利：**\n- 「こんにちは、○○さん！」の○○を変える\n- 「今日の点数は○○点です」の○○に数字を入れる"
          },
          {
            "title": "バッククォートと ${ }",
            "content": "# 書き方を覚えよう\n\n**2つのルール：**\n1. 文章全体を ``` ` ```（バッククォート）で囲む\n2. 変数を入れたい場所に `${変数名}` と書く\n\n**バッククォートの場所：**\nキーボードの左上、Escキーの下あたりにあります。\n\n**コード例：**\n```javascript\nconst weather = 'はれ';\nconsole.log(`明日は${weather}です`);\n```\n\n**実行結果：**\n```\n明日ははれです\n```\n\n`${weather}` の部分が `はれ` に置き換わりました！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// age というはこに 10 を入れる\nconst age = 10;\n// 文章の中に age の中身を入れる\nconsole.log(`私は${age}歳です`);",
        "holeyCode": "// age というはこに 10 を入れる\nconst age = ___ ;\n// 文章の中に age の中身を入れる\nconsole.log(`私は${___}歳です`);",
        "correctLines": [
          "// age というはこに 10 を入れる",
          "const age = 10;",
          "// 文章の中に age の中身を入れる",
          "console.log(`私は${age}歳です`);"
        ],
        "lineHints": [
          null,
          "定数を宣言し、数値を代入します。",
          null,
          "デバッグ用コンソールなどに文字列を出力します。"
        ],
        "candidates": {
          "variables": [
            "age"
          ],
          "functions": [
            "console.log"
          ],
          "numbers": [
            "10"
          ],
          "others": [
            "10;"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "私は10歳です\n"
          }
        ]
      },
    {
        "title": "たくさんのデータをまとめましょう「配列」",
        "description": "「配列（はいれつ）」を使うと、たくさんのデータを一つの「長い はこ」にまとめて入れられます。",
        "difficulty": "easy",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "配列（はいれつ）とは？",
            "content": "# たくさんのデータを並べる「入れ物」\n\nたくさんのデータを順番に並べて入れておく入れ物を **配列（はいれつ）** と呼びます。\n\n**身近なたとえ：**\nロッカーを想像してみてください。1番、2番、3番...と番号がついていて、それぞれに物が入っていますよね。配列も同じです！\n\n**こんなときに便利：**\n- クラス全員の名前をまとめる\n- 買い物リストを作る\n- ゲームのスコアランキングを保存する"
          },
          {
            "title": "データの番号は「0」から！",
            "content": "# 配列の使い方\n\n**作り方：** `[ ]` の中にデータを `,` で区切って入れる\n**取り出し方：** `配列名[番号]` で指定する\n\n**重要なルール：**\nプログラミングでは、最初のデータは **「0番」** から数えます！\n\n| 番号 | 0 | 1 |\n|:---:|:---:|:---:|\n| 中身 | りんご | みかん |\n\n**コード例：**\n```javascript\nconst fruits = ['りんご', 'みかん'];\nconsole.log(fruits[0]);  // 0番目を取り出す\n```\n**実行結果：**\n```\nりんご\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// 'あか', 'あお' の順で colors という配列を作る\nconst colors = ['あか', 'あお'];\n// 2番目のデータ（番号は1）を出す\nconsole.log(colors[1]);",
        "holeyCode": "// 'あか', 'あお' の順で colors という配列を作る\nconst colors = ['___', '___'];\n// 2番目のデータ（番号は1）を出す\nconsole.log(colors[___]);",
        "correctLines": [
          "// 'あか', 'あお' の順で colors という配列を作る",
          "const colors = ['あか', 'あお'];",
          "// 2番目のデータ（番号は1）を出す",
          "console.log(colors[1]);"
        ],
        "lineHints": [
          null,
          "['あか', 'あお'] と入力しましょう。",
          null,
          "2番目のデータの番号は 1 です。 `colors[1]` と入力してください。"
        ],
        "candidates": {
          "variables": [
            "colors"
          ],
          "functions": [
            "console.log"
          ],
          "strings": [
            "あか",
            "あお"
          ],
          "numbers": [
            "1"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "あお\n"
          }
        ]
      },
    {
        "title": "「もし〜なら」で分ける if文",
        "description": "点数（score）が 80点より高いときだけ、メッセージを出すようにしてみましょう。",
        "difficulty": "easy",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "条件分岐（じょうけんぶんき）とは？",
            "content": "# 「もし〜なら」の仕組み\n\n**条件分岐（じょうけんぶんき）** とは、状況によって動きを変えることです。\n\n**身近なたとえ：**\n- 「雨が降ったら」→ 傘をさす\n- 「晴れたら」→ 外で遊ぶ\n- 「お腹が空いたら」→ ご飯を食べる\n\n私たちは毎日「もし〜なら」で判断していますよね。プログラムにも同じことをさせられます！"
          },
          {
            "title": "もし〜なら（if文）",
            "content": "# if文の書き方\n\n**書き方：**\n```\nif (条件) {\n  条件に合ったときの処理\n}\n```\n\n**記号の説明：**\n- `( )` ... 条件を入れるカッコ\n- `{ }` ... 処理を入れるなみカッコ\n- `>` ... 「より大きい」を表す記号\n\n**コード例：**\n```javascript\nconst price = 1200;\nif (price > 1000) {\n  console.log('ちょっと高いかも');\n}\n```\n**実行結果：** 1200 > 1000 は正しいので...\n```\nちょっと高いかも\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// score に 100 を入れる\nconst score = 100;\n// もし 80 より大きかったら\nif (score > 80) {\n    // メッセージを表示する\n    console.log('ごうかく！');\n}",
        "holeyCode": "// score に 100 を入れる\nconst score = ___ ;\n// もし 80 より大きかったら\nif (score ___ 80) {\n    // メッセージを表示する\n    console.log('___');\n}",
        "correctLines": [
          "// score に 100 を入れる",
          "const score = 100;",
          "// もし 80 より大きかったら",
          "if (score > 80) {",
          "    // メッセージを表示する",
          "    console.log('ごうかく！');",
          "}"
        ],
        "lineHints": [
          null,
          "定数を宣言し、数値を代入します。",
          null,
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          null,
          "デバッグ用コンソールなどに文字列を出力します。",
          null
        ],
        "candidates": {
          "variables": [
            "score"
          ],
          "functions": [
            "console.log"
          ],
          "operators": [
            ">"
          ],
          "strings": [
            "ごうかく！"
          ],
          "numbers": [
            "100"
          ],
          "others": [
            "100;"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ごうかく！\n"
          }
        ]
      },
    {
        "title": "ちがう場合は？ if-else文",
        "description": "「もし〜なら」のあとに、「そうじゃなければ」という別の動きも作ってみましょう。",
        "difficulty": "easy",
        "orderIndex": 7,
        "tutorialSlides": [
          {
            "title": "それ以外の場合は？",
            "content": "# else（エルス）の役割\n\n「もし〜なら」に当てはまらなかったときの動きも作りたいですよね。\n\n**身近なたとえ：**\n- 「雨が降ったら傘をさす」**そうでなければ**「帽子をかぶる」\n- 「100点だったらご褒美」**そうでなければ**「また頑張ろう」\n\n`else`（エルス）を使うと、「そうでなければこっちをして」という指示が出せます。"
          },
          {
            "title": "そうじゃなければ（else）",
            "content": "# if-else文の書き方\n\n**書き方：**\n```\nif (条件) {\n  条件に合ったとき\n} else {\n  条件に合わなかったとき\n}\n```\n\n**道が2つに分かれるイメージです！**\n\n**コード例：**\n```javascript\nconst time = 15;\nif (time < 12) {\n  console.log('午前中');\n} else {\n  console.log('お昼すぎ');\n}\n```\n**実行結果：** 15 < 12 は正しくないので else の方へ...\n```\nお昼すぎ\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// age に 10 を入れる\nconst age = 10;\n// 20以上かを比較する演算子\nif (age >= 20) {\n    // 20歳以上のときのメッセージ（'おとな'）\n    console.log('おとな');\n// 「そうでなければ」を表すキーワード\n} else {\n    // それ以外の場合（'こども'）\n    console.log('こども');\n}",
        "holeyCode": "// age に 10 を入れる\nconst age = ___ ;\n// 20以上かを比較する演算子\nif (age ___ 20) {\n    // 20歳以上のときのメッセージ（'おとな'）\n    console.log('___');\n// 「そうでなければ」を表すキーワード\n} ___ {\n    // それ以外の場合（'こども'）\n    console.log('___');\n}",
        "correctLines": [
          "// age に 10 を入れる",
          "const age = 10;",
          "// 20以上かを比較する演算子",
          "if (age >= 20) {",
          "    // 20歳以上のときのメッセージ（'おとな'）",
          "    console.log('おとな');",
          "// 「そうでなければ」を表すキーワード",
          "} else {",
          "    // それ以外の場合（'こども'）",
          "    console.log('こども');",
          "}"
        ],
        "lineHints": [
          null,
          "定数を宣言し、数値を代入します。",
          null,
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          null,
          "デバッグ用コンソールなどに文字列を出力します。",
          null,
          "もし条件が満たされなかった場合に実行する処理を記述します。",
          null,
          "デバッグ用コンソールなどに文字列を出力します。",
          null
        ],
        "candidates": {
          "variables": [
            "age"
          ],
          "functions": [
            "console.log"
          ],
          "strings": [
            "こども"
          ],
          "numbers": [
            "10"
          ],
          "keywords": [
            "else"
          ],
          "others": [
            "10;",
            ">=",
            "おとな"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こども\n"
          }
        ]
      },
    {
        "title": "順番に取り出す for...of文",
        "description": "配列に入っているたくさんのデータを, 一つずつ順番に表示してみましょう。",
        "difficulty": "easy",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "繰り返し（ループ）とは？",
            "content": "# 同じ作業を自動でくりかえす\n\n同じ処理を何度もくりかえす仕組みを **ループ** と呼びます。\n\n**身近なたとえ：**\nクラス全員の出席をとるとき、「○○さん！」と一人ずつ呼びますよね。\nプログラムでも、配列（リスト）の中身を一つずつ順番に処理できます。\n\n**ループが便利な場面：**\n- 買い物リストを一つずつ表示する\n- クラス全員にメッセージを送る\n- ゲームでアイテムを全部チェックする"
          },
          {
            "title": "くりかえし（for...of文）",
            "content": "# for...of の書き方\n\n`for...of` は配列の中身を **一つずつ取り出して処理** します。\n\n**書き方：**\n```\nfor (const 取り出した要素 of 配列) {\n  くりかえす処理\n}\n```\n\n**ポイント：**\n- `of` は「〜の中から」という意味\n- 配列の最初から最後まで自動でくりかえす\n\n**コード例：**\n```javascript\nconst items = ['おにぎり', 'パン'];\nfor (const item of items) {\n  console.log(item);\n}\n```\n**実行結果：**\n```\nおにぎり\nパン\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// 配列を作る（'たろう', 'はなこ'の順）\nconst names = ['たろう', 'はなこ'];\n// 順番に取り出すループ\nfor (const name of names) {\n    // 取り出した名前を表示\n    console.log(name);\n}",
        "holeyCode": "// 配列を作る（'たろう', 'はなこ'の順）\nconst names = ['___', '___'];\n// 順番に取り出すループ\nfor (const ___ of ___) {\n    // 取り出した名前を表示\n    console.log(___);\n}",
        "correctLines": [
          "// 配列を作る（'たろう', 'はなこ'の順）",
          "const names = ['たろう', 'はなこ'];",
          "// 順番に取り出すループ",
          "for (const name of names) {",
          "    // 取り出した名前を表示",
          "    console.log(name);",
          "}"
        ],
        "lineHints": [
          null,
          "['たろう', 'はなこ'] という配列を作ります。",
          null,
          "指定された回数や範囲で、繰り返し処理（ループ）を行います。",
          null,
          "取り出した名前（name）を console.log で出力します。",
          null
        ],
        "candidates": {
          "variables": [
            "name",
            "names"
          ],
          "functions": [
            "console.log"
          ],
          "others": [
            "たろう",
            "はなこ"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "たろう\nはなこ\n"
          }
        ]
      },
    {
        "title": "名前で管理する「オブジェクト」",
        "description": "「オブジェクト」というものを使うと、名前（キー）を指定してデータを取り出せます。",
        "difficulty": "easy",
        "orderIndex": 9,
        "tutorialSlides": [
          {
            "title": "オブジェクトとは？",
            "content": "# 関連する情報をセットにまとめる\n\n**オブジェクト** は、いくつかの情報をセットにしてまとめる入れ物です。\n\n**身近なたとえ：**\n名刺を想像してみてください。名刺には「名前」「電話番号」「会社名」などがセットで書いてありますよね。オブジェクトも同じように、関連する情報をまとめて持てます。\n\n**例：**\n- 人の情報 → 名前、年齢、住所\n- ゲームキャラ → 名前、HP、攻撃力"
          },
          {
            "title": "オブジェクトの作り方と使い方",
            "content": "# { } でまとめて、. で取り出す\n\n**作り方：**\n`{ 名前: 値, 名前: 値 }` のように `{ }` で囲みます。\n名前と値のセットを **プロパティ** と呼びます。\n\n**取り出し方：**\n`.`（ドット）をつなげて `オブジェクト名.プロパティ名` で取り出します。\n\n**コード例：**\n```javascript\nconst colors = { りんご: 'あか', バナナ: 'きいろ' };\nconsole.log(colors.りんご);\n```\n**実行結果：**\n```\nあか\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// オブジェクトを作る（nameは'たろう'）\nconst user = { name: 'たろう' };\n// nameプロパティを取り出す\nconsole.log(user.name);",
        "holeyCode": "// オブジェクトを作る（nameは'たろう'）\nconst user = { ___: '___' };\n// nameプロパティを取り出す\nconsole.log(user.___);",
        "correctLines": [
          "// オブジェクトを作る（nameは'たろう'）",
          "const user = { name: 'たろう' };",
          "// nameプロパティを取り出す",
          "console.log(user.name);"
        ],
        "lineHints": [
          null,
          "{ name: 'たろう' } と入力しましょう。",
          null,
          "はこ（user）のあとに `.name` をつけてデータを取り出すことができます。"
        ],
        "candidates": {
          "variables": [
            "user"
          ],
          "functions": [
            "console.log"
          ],
          "strings": [
            "name",
            "たろう"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "たろう\n"
          }
        ]
      },
    {
        "title": "自分だけの関数を作ろう",
        "description": "自分だけの新しい関数（かんすう）を作ってみましょう。",
        "difficulty": "easy",
        "orderIndex": 10,
        "tutorialSlides": [
          {
            "title": "関数（かんすう）とは？",
            "content": "# オリジナルの命令を作ろう\n\n**関数（かんすう）** は、いくつかの処理をまとめて名前をつけたものです。\n\n**身近なたとえ：**\n料理のレシピを想像してください。「カレーの作り方」という名前をつけておけば、いつでもその手順を見て作れますよね。関数も同じで、一度作っておけば何度でも呼び出せます！\n\n**関数のいいところ：**\n- 同じコードを何度も書かなくていい\n- 名前をつけると何をする処理か分かりやすい"
          },
          {
            "title": "関数を定義（ていぎ）する",
            "content": "# function の書き方\n\n**関数の作り方（定義）：**\n```\nfunction 関数名() {\n  やりたい処理\n}\n```\n\n**関数の使い方（呼び出し）：**\n```\n関数名();\n```\n\n**コード例：**\n```javascript\n// 関数を作る（定義）\nfunction sayHello() {\n  console.log('ヤッホー！');\n}\n\n// 関数を使う（呼び出し）\nsayHello();\n```\n**実行結果：**\n```\nヤッホー！\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// greet という関数を定義する（'こんにちは'と表示）\nfunction greet() {\n    // 'こんにちは'と表示\n    console.log('こんにちは');\n}\n// 関数を動かす\ngreet();",
        "holeyCode": "// greet という関数を定義する（'こんにちは'と表示）\nfunction ___() {\n    // 'こんにちは'と表示\n    console.log('___');\n}\n// 関数を動かす\n___();",
        "correctLines": [
          "// greet という関数を定義する（'こんにちは'と表示）",
          "function greet() {",
          "    // 'こんにちは'と表示",
          "    console.log('こんにちは');",
          "}",
          "// 関数を動かす",
          "greet();"
        ],
        "lineHints": [
          null,
          "function greet() { と入力して、関数を定義します。",
          null,
          "デバッグ用コンソールなどに文字列を出力します。",
          "関数（greet）を呼び出して実行します。",
          null,
          null
        ],
        "candidates": {
          "functions": [
            "greet",
            "console.log"
          ],
          "strings": [
            "こんにちは"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\n"
          }
        ]
      }
  ]
}
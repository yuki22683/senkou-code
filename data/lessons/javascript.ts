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
          "image": "/illustrations/common/monitor.png",
          "content": "# Webサイトを動かす魔法\n\nJavaScript（ジャバスクリプト）は、Webサイトにボタンやアニメーションなどの「動き」をつけるための言葉です。\n今ではアプリやゲーム作りにもたくさん使われている、とても人気の言葉です。"
        },
        {
          "title": "メッセージを出す関数 console.log",
          "image": "/illustrations/common/monitor.png",
          "content": "# console.log（コンソール・ログ）\n\nコンピュータに何かを表示（ひょうじ）させたいときは、`console.log()` という関数を使います。\n文のさいごには `;`（セミコロン）という記号をつけるのが、JavaScriptのルールです。\n\n例えば、こんなふうに書きます。\n```javascript\nconsole.log('JavaScript楽しい！');\n```\n=> JavaScript楽しい！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 画面に「Hello, JavaScript!」と出す関数\nconsole.log('Hello, JavaScript!');",
      "holeyCode": "// 画面に 'JavaScript!' と表示しましょう\n___",
      "correctLines": [
        
        
        "// 画面に 'JavaScript!' と表示しましょう",
        "console.log('Hello, JavaScript!');"
      ],
      "lineHints": [
        "コメントです。プログラムのメモとして使います。",
        "console.log を使います。さいごの ; （セミコロン）を忘れないでしましょう！"
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
          "image": "/illustrations/common/box.png",
          "content": "# データをしまっておく「はこ」\n\nプログラムでは、数字や文字をしまっておく「はこ」を作ることができます。この「はこ」のことを **変数（へんすう）** と呼びます。中身が何かわかるように名前をつけてあげましょう！"
        },
        {
          "title": "「はこ」に名前をつけましょう",
          "image": "/illustrations/common/box.png",
          "content": "# const（コンスト）\n\n一度決めたらずっとそのまま使いたい値（あたい）は、`const` という言葉を使って「はこ」を作ります。\n\n**コード例：**\n```javascript\nconst fruit = 'りんご';\nconsole.log(fruit);\n```\n`=`（イコール）は「右のものを左のはこに入れる」という意味です。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// nameという名前のはこを作る\nconst name = 'JavaScript';\n// はこの中身を出す\nconsole.log(name);",
      "holeyCode": "// 変数 JavaScript を使いましょう\n___\n// 変数 name の中身を表示しましょう\n___",
      "correctLines": [
        
        
        "// 変数 JavaScript を使いましょう",
        "const name = 'JavaScript';",
        "// 変数 name の中身を表示しましょう",
        "console.log(name);"
      ],
      "lineHints": [
        "null",
        "const name = 'JavaScript'; と入力します。イコールで中身をしまってしましょう！",
        "null",
        "console.log の中に、はこの名前 name を入力してしましょう。"
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
          "image": "/illustrations/common/robot_math.png",
          "content": "# コンピュータは計算が得意！\n\nコンピュータの一番得意なことは「計算」です。人間だと時間がかかる計算も、一瞬で終わらせてしまいます。プログラミングで計算の指示を出してみましょう。"
        },
        {
          "title": "計算の記号",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 算数と同じ記号を使います\n\nJavaScriptでも、こんな記号を使って計算をします。\n\n- **+** : たし算\n- **-** : ひき算\n- **\\*** : かけ算\n- **/** : わり算\n\n例えば、ひき算はこんな感じです。\n```javascript\nconst a = 20;\nconst b = 10;\nconsole.log(a - b);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// xに10を入れる\nconst x = 10;\n// yに5を入れる\nconst y = 5;\n// x + y を表示する\nconsole.log(x + y);",
      "holeyCode": "// 10 を入力しましょう\n___\n// 5 を入力しましょう\n___\n// + を入力してたし算しましょう\n___",
      "correctLines": [
        
        
        "// 10 を入力しましょう",
        "const x = 10;",
        "// 5 を入力しましょう",
        "const y = 5;",
        "// + を入力してたし算しましょう",
        "console.log(x + y);"
      ],
      "lineHints": [
        "null",
        "const x = 10; と入力しましょう。",
        "null",
        "const y = 5; と入力しましょう。",
        "null",
        "たし算なので `+` を使います。 `console.log(x + y)` と入力してしましょう。"
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
          "image": "/illustrations/common/fstring.png",
          "content": "# テンプレートリテラルとは？\n\n文章の途中に、変数（はこ）の中身を入れたいときに使うのが **テンプレートリテラル** です。ただの文章よりも、状況に合わせて中身が変わる便利な文章を作れます。"
        },
        {
          "title": "文章と変数をくっつける",
          "image": "/illustrations/common/fstring.png",
          "content": "# バッククォートと ${ }\n\nキーボードの ` という記号（バッククォート）で囲むと、その中で `${ }` と入力するだけで、中身を文章に入れられます。\n\n**コード例：**\n```javascript\nconst weather = 'はれ';\nconsole.log(`明日は${weather}です`);\n```\n=> 明日ははれです\n\nこれで「明日ははれです」と表示されます！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// age というはこに 10 を入れる\nconst age = 10;\n// 文章の中に age の中身を入れる\nconsole.log(`私は${age}歳です`);",
      "holeyCode": "// 10 を入力しましょう\n___\n// age と入力して年齢を表示しましょう\n___",
      "correctLines": [
        
        
        "// 10 を入力しましょう",
        "const age = 10;",
        "// age と入力して年齢を表示しましょう",
        "console.log(`私は${age}歳です`);"
      ],
      "lineHints": [
        "null",
        "const age = 10; と入力しましょう。",
        "null",
        "${ } のなかに、はこの名前 age を入力しましょう。"
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
          "image": "/illustrations/common/list.png",
          "content": "# データの行列\n\nたくさんのデータを順番に並べておきたいときに使うのが **配列（はいれつ）** です。クラスの全員の名前や、買い物リストなどを一つの変数にまとめて管理できます。"
        },
        {
          "title": "データの番号は「0」から！",
          "image": "/illustrations/common/list.png",
          "content": "# [ ]（しかくい かっこ）を使いましょう\n\n配列の中身を取り出すときは、何番目かを指定します。\nでも気をつけてしましょう！プログラミングでは、**さいしょのデータは「0番」** と数えるルールなのです。\n\n**コード例：**\n```javascript\nconst fruits = ['りんご', 'みかん'];\nconsole.log(fruits[0]); // 「りんご」が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 'あか', 'あお' の順で colors という配列を作る\nconst colors = ['あか', 'あお'];\n// 2番目のデータ（番号は1）を出す\nconsole.log(colors[1]);",
      "holeyCode": "___\n___\n___",
      "correctLines": [
        ""// 'あか'",
        "'あお' と入力しましょう",\n        "const colors = ['あか'",
        "'あお'"
      ];",
        "// 2番目の中身を取り出すために 1 を入力しましょう",
        "console.log(colors[1]);"
      ],
      "lineHints": [
        "null",
        "['あか', 'あお'] と入力しましょう。",
        "null",
        "2番目のデータの番号は 1 です。 `colors[1]` と入力してしましょう。"
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
          "image": "/illustrations/common/if.png",
          "content": "# もし〜なら、の仕組み\n\n「雨が降ったら傘をさす」「晴れたら外で遊ぶ」のように、状況によって動きを変えることを **条件分岐（じょうけんぶんき）** と呼びます。プログラムに判断をさせてみましょう。"
        },
        {
          "title": "もし〜なら（if）",
          "image": "/illustrations/common/if.png",
          "content": "# ( ) と { } を使いましょう\n\nJavaScriptでは、`if (条件)` のあとに `{ }`（なみかっこ）を入力して、その中にやりたいことを入力します。\n\n**コード例：**\n```javascript\nconst price = 1200;\nif (price > 1000) {\n  console.log('ちょっと高いかも');\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// score に 100 を入れる\nconst score = 100;\n// もし 80 より大きかったら\nif (score > 80) {\n    // メッセージを表示する\n    console.log('ごうかく！');\n}",
      "holeyCode": "// 100 を入力しましょう\n___\n// > を入力して「大きい」を表しましょう\n___\n    // ごうかく！ を使いましょう\n    ___\n___",
      "correctLines": [
        
        
        "// 100 を入力しましょう",
        "const score = 100;",
        "// > を入力して「大きい」を表しましょう",
        "if (score > 80) {",
        "    // ごうかく！ を使いましょう",
        "    console.log('ごうかく！');",
        "}"
      ],
      "lineHints": [
        "null",
        "const score = 100; と入力しましょう。",
        "null",
        "比較するための記号 `>` を使います。",
        "null",
        "console.log('ごうかく！'); と入力しましょう。",
        "さいごに } で閉じるのを忘れないでしましょう。"
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
          "image": "/illustrations/common/if.png",
          "content": "# else（エルス）の役割\n\n「もし〜なら」に当てはまらなかったときの動きも作ってみましょう。 `else`（エルス）を使うと、「そうでなければこれをする」という指示が出せます。"
        },
        {
          "title": "そうじゃなければ（else）",
          "image": "/illustrations/common/if.png",
          "content": "# 2つのルート\n\n条件にあてはまらなかったときの動きは `else` を使って入力します。\n\n**コード例：**\n```javascript\nconst time = 15;\nif (time < 12) {\n  console.log('午前中');\n} else {\n  console.log('お昼すぎ');\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// age に 10 を入れる\nconst age = 10;\n// 20さい以上かどうかで分ける\nif (age >= 20) {\n    console.log('おとな');\n} else {\n    // それ以外の場合\n    console.log('こども');\n}",
      "holeyCode": "// 10 を入力しましょう\n___\n// 20さい以上なら「おとな」、そうでなければ（else）\n___\n    ___\n___\n    // こども を使いましょう\n    ___\n___",
      "correctLines": [
        
        
        "// 10 を入力しましょう",
        "const age = 10;",
        "// 20さい以上なら「おとな」、そうでなければ（else）",
        "if (age >= 20) {",
        "    console.log('おとな');",
        "} else {",
        "    // こども を使いましょう",
        "    console.log('こども');",
        "}"
      ],
      "lineHints": [
        "null",
        "const age = 10; と入力しましょう。",
        "null",
        "null",
        "null",
        "} else { と入力しましょう。",
        "null",
        "console.log('こども'); と入力しましょう。",
        "null"
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
          "image": "/illustrations/common/loop.png",
          "content": "# 作業を自動化する\n\n同じ処理を何度も繰り返すための仕組みが **ループ** です。配列の中身を一つずつ順番に全部チェックしたいときなどに非常に役立ちます。"
        },
        {
          "title": "くりかえし（for...of）",
          "image": "/illustrations/common/loop.png",
          "content": "# 配列から順番に取り出す\n\n配列の中身を全部見たいときは `for...of` を使うと便利です。\n\n**コード例：**\n```javascript\nconst items = ['おにぎり', 'パン'];\nfor (const item of items) {\n  console.log(item);\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 配列を作る\nconst names = ['たろう', 'はなこ'];\n// 順番に取り出すループ\nfor (const name of names) {\n    console.log(name);\n}",
      "holeyCode": "___\n___",
      "correctLines": [
        ""// 配列を作る",\n        "const names = ['たろう'",
        "'はなこ'"
      ];",
        "// name と names を入力して、配列から順番に取り出しましょう",
        "for (const name of names) {",
        "    console.log(name);",
        "}"
      ],
      "lineHints": [
        "null",
        "['たろう', 'はなこ'] という配列を作ります。",
        "null",
        "for (const name of names) { と入力します。",
        "取り出した名前（name）を console.log で出力します。",
        "さいごに } で閉じます。"
      ],
      "candidates": {
        "variables": [
          "name",
          "names"
        ],
        "functions": [
          "console.log"
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
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# 情報をセットにする\n\n「名前」と「年齢」のように、関連する情報をまとめて管理するのが **オブジェクト** です。本物の辞書のように、キーワードを使って情報を取り出すことができます。"
        },
        {
          "title": "ドット（ . ）でつなげましょう",
          "image": "/illustrations/common/dict.png",
          "content": "# { } を使ったデータのまとめ\n\nオブジェクトは、`名前: あたい` のセットを `{ }` で囲んで作ります。取り出すときは `.`（ドット）を使います。\n\n**コード例：**\n```javascript\nconst pet = { type: 'いぬ', name: 'ポチ' };\nconsole.log(pet.name);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// オブジェクトを作る（nameは'たろう'）\nconst user = { name: 'たろう' };\n// 名前の中身を出す\nconsole.log(user.name);",
      "holeyCode": "// 'name' と 'たろう' を入力しましょう\n___\n// 名前の中身を出す\n___",
      "correctLines": [
        
        
        "// 'name' と 'たろう' を入力しましょう",
        "const user = { name: 'たろう' };",
        "// 名前の中身を出す",
        "console.log(user.name);"
      ],
      "lineHints": [
        "null",
        "{ name: 'たろう' } と入力しましょう。",
        "null",
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
          "image": "/illustrations/common/function.png",
          "content": "# オリジナルの命令\n\nよく使う手順をひとまとめにして、名前をつけることができます。これを **関数（かんすう）** と呼びます。一度作っておけば、いつでも呼び出して使えます。"
        },
        {
          "title": "関数を定義（ていぎ）する",
          "image": "/illustrations/common/function.png",
          "content": "# function（ファンクション）\n\n関数を新しく作るときは `function` という言葉を使います。作った関数は、あとで呼び出すと動きます！\n\n**コード例：**\n```javascript\nfunction sayHello() {\n  console.log('ヤッホー！');\n}\n\nsayHello();\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// greet という関数を定義する（'こんにちは'と表示）\nfunction greet() {\n    console.log('こんにちは');\n}\n// 関数を動かす\ngreet();",
      "holeyCode": "// greet と入力して関数を作り、中に 'こんにちは' と入力しましょう\n___\n    ___\n___\n// greet と入力して関数を動かしましょう\n___",
      "correctLines": [
        
        
        "// greet と入力して関数を作り、中に 'こんにちは' と入力しましょう",
        "function greet() {",
        "    console.log('こんにちは');",
        "}",
        "// greet と入力して関数を動かしましょう",
        "greet();"
      ],
      "lineHints": [
        "null",
        "function greet() { と入力して、関数を定義します。",
        "console.log('こんにちは'); と入力しましょう。",
        "さいごに } で閉じます。",
        "null",
        "greet(); と入力して、関数を実行します。"
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

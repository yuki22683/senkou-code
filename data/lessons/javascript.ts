const bq = String.fromCharCode(96);

export const javascriptData = {
  "language": "javascript",
  "lessonId": "javascript-1",
  "lessonTitle": "JavaScript (ジャバスクリプト) にちょうせん！",
  "lessonDescription": "Webサイトを動かす魔法、JavaScript（ジャバスクリプト）のきほんを学びましょう。コンピュータにメッセージを出したり、計算させたりする方法を身につけます。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面にメッセージを出そう",
      "description": "コンピュータに「こんにちは」とあいさつさせてみましょう。console.log（コンソール・ログ）という関数（かんすう）を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "JavaScript（ジャバスクリプト）ってなに？",
          "content": "# Webサイトを動かす魔法\n\nJavaScript（ジャバスクリプト）は、Webサイトにボタンやアニメーションなどの「動き」をつけるための言葉です。\n今ではアプリやゲーム作りにもたくさん使われている、とても人気の言葉です。"
        },
        {
          "title": "メッセージを出す関数 console.log",
          "content": "# console.log（コンソール・ログ）\n\nコンピュータに何かを表示（ひょうじ）させたいときは、`console.log()` という関数を使います。\n文のさいごには `;`（セミコロン）という記号をつけるのが、JavaScriptのあいさつです。\n\n**入力するコードのヒント：**\n```javascript\nconsole.log('Hello, JavaScript!');\n```"
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
        "コメントです。プログラムのメモとして使います。",
        "console.log を使います。さいごの ; （セミコロン）を忘れないでください！"
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
          "title": "「はこ」に名前をつけましょう",
          "content": "# const（コンスト）\n\n一度決めたらずっとそのまま使いたい値（あたい）は、`const` という言葉を使って「はこ」を作ります。\n\n**コード例：**\n```javascript\nconst name = 'JavaScript';\nconsole.log(name);\n```\n`=`（イコール）は「右のものを左のはこに入れる」という意味ですよ。"
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
        "const name = 'JavaScript'; と入力します。イコールで中身をしまってください！",
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
      "title": "コンピュータで計算（けいさん）",
      "description": "JavaScriptを使って、たし算をしてみましょう。x と y という2つのはこの中身をたして、答えを出してみます。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "計算の記号",
          "content": "# 算数と同じ記号を使えますよ\n\nJavaScriptでも、こんな記号を使って計算をします。\n\n- **+** : たし算\n- **-** : ひき算\n- **\\*** : かけ算（× のかわり）\n- **/** : わり算（÷ のかわり）"
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
        "const x = 10; と入力しましょう。",
        null,
        "const y = 5; と入力しましょう。",
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
      "title": "文章の中に「はこ」を入れよう",
      "description": "「テンプレートリテラル」という書き方を使って、文章の中に「はこ（変数）」の中身を表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "文章と変数をくっつける",
          "content": "# バッククォートと ${ }\n\nキーボードの ` という記号（バッククォート）で囲むと、その中で `${Პ}` と入力するだけで、中身を文章に入れられますよ。\n\n**入力するコードのヒント：**\n```javascript\nconst age = 10;\nconsole.log(`私は${age}歳です`);\n```\nこれで「私は10歳です」と表示されます！"
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
        "const age = 10; と入力しましょう。",
        null,
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
      "title": "たくさんのデータをまとめる「配列」",
      "description": "「配列（はいれつ）」を使うと、たくさんのデータを一つの「長い はこ」にまとめて入れられます。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "データの番号は「0」から！",
          "content": "# [ ]（しかくい かっこ）を使いましょう\n\n配列の中身を取り出すときは、何番目かを指定します。\nでも気をつけてください！プログラミングでは、**さいしょのデータは「0番」** と数えるルールなのです。\n\n**コード例：**\n```javascript\nconst animals = ['いぬ', 'ねこ'];\nconsole.log(animals[0]); // 「いぬ」が表示されます\nconsole.log(animals[1]); // 「ねこ」が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// colors という配列を作る\nconst colors = ['あか', 'あお'];\n// 2番目のデータ（番号は1）を出す\nconsole.log(colors[1]);",
      "holeyCode": "// colors という配列を作る\nconst colors = ['___', '___'];\n// 2番目のデータ（番号は1）を出す\nconsole.log(colors[___]);",
      "correctLines": [
        "// colors という配列を作る",
        "const colors = ['あか', 'あお'];",
        "// 2番目のデータ（番号は1）を出す",
        "console.log(colors[1]);"
      ],
      "lineHints": [
        null,
        "['あか', 'あお'] と入力しましょう。 [ ] を使うのがルールです。",
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
          "title": "もし〜なら（if）",
          "content": "# ( ) と { } を使いましょう\n\nJavaScriptでは、`if (条件)` のあとに `{ }`（なみかっこ）を入力して、その中にやりたいことを入力します。\n\n**コード例：**\n```javascript\nif (score > 80) {\n  console.log('すごい！');\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// score に 100 を入れる\nconst score = 100;\n// もし 80 より大きかったら\nif (score > 80) {\n    console.log('ごうかく！');\n}",
      "holeyCode": "// score に 100 を入れる\nconst score = ___ ;\n// もし 80 より大きかったら\nif (score ___ 80) {\n    console.log('___');\n}",
      "correctLines": [
        "// score に 100 を入れる",
        "const score = 100;",
        "// もし 80 より大きかったら",
        "if (score > 80) {",
        "    console.log('ごうかく！');",
        "}"
      ],
      "lineHints": [
        null,
        "const score = 100; と入力しましょう。",
        null,
        "比較するための記号 `>` を使います。",
        "console.log('ごうかく！'); と入力しましょう。",
        "さいごに } で閉じるのを忘れないでください。"
      ],
      "candidates": {
        "variables": [
          "score"
        ],
        "functions": [
          "console.log"
        ],
        "operators": [
          " >"
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
          "title": "そうじゃなければ（else）",
          "content": "# else（エルス）の使い方\n\n条件にあてはまらなかったときの動きは `else` を使って入力します。\n\n**コード例：**\n```javascript\nif (age >= 20) {\n  console.log('おとな');\n} else {\n  console.log('こども');\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// age に 10 を入れる\nconst age = 10;\n// 条件で分ける\nif (age >= 20) {\n    console.log('おとな');\n} else {\n    console.log('こども');\n}",
      "holeyCode": "// age に 10 を入れる\nconst age = ___ ;\n// 条件で分ける\nif (age >= 20) {\n    console.log('おとな');\n} ___ {\n    console.log('___');\n}",
      "correctLines": [
        "// age に 10 を入れる",
        "const age = 10;",
        "// 条件で分ける",
        "if (age >= 20) {",
        "    console.log('おとな');",
        "} else {",
        "    console.log('こども');",
        "}"
      ],
      "lineHints": [
        null,
        "const age = 10; と入力しましょう。",
        null,
        null,
        null,
        "} else { と入力しましょう。",
        "console.log('こども'); と入力しましょう。",
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
      "description": "配列に入っているたくさんのデータを、一つずつ順番に表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "くりかえし（for...of）",
          "content": "# 配列の中身を全部見ましょう\n\n配列の中身を順番に取り出して何かをしたいときは `for...of` が便利です。\n\n**コード例：**\n```javascript\nfor (const name of names) {\n  console.log(name);\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 配列を作る\nconst names = ['たろう', 'はなこ'];\n// 順番に取り出す\nfor (const name of names) {\n    console.log(name);\n}",
      "holeyCode": "// 配列を作る\nconst names = ['たろう', 'はなこ'];\n// 順番に取り出す\nfor (const ___ of ___) {\n    console.log(___);\n}",
      "correctLines": [
        "// 配列を作る",
        "const names = ['たろう', 'はなこ'];",
        "// 順番に取り出す",
        "for (const name of names) {",
        "    console.log(name);",
        "}"
      ],
      "lineHints": [
        null,
        "['たろう', 'はなこ'] という配列を作ります。",
        null,
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
          "title": "ドット（ . ）でつなげましょう",
          "content": "# { } を使ったデータのまとめ\n\nオブジェクトは、`名前: あたい` のセットを `{ }` で囲んで作ります。取り出すときは `.`（ドット）を使いますよ。\n\n**コード例：**\n```javascript\nconst user = { name: 'たろう' };\nconsole.log(user.name); // 「たろう」が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// オブジェクトを作る\nconst user = { name: 'たろう' };\n// 名前の中身を出す\nconsole.log(user.name);",
      "holeyCode": "// オブジェクトを作る\nconst user = { ___: '___' };\n// 名前の中身を出す\nconsole.log(user.name);",
      "correctLines": [
        "// オブジェクトを作る",
        "const user = { name: 'たろう' };",
        "// 名前の中身を出す",
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
          "title": "関数を定義（ていぎ）する",
          "content": "# function（ファンクション）\n\n関数を新しく作るときは `function` という言葉を使います。作った関数は、あとで呼び出すと動きますよ！\n\n**コード例：**\n```javascript\nfunction aisatsu() {\n  console.log('おはよう！');\n}\n\naisatsu(); // これで関数が動きます！\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// greet という関数を定義する\nfunction greet() {\n    console.log('こんにちは');\n}\n// 関数を動かす\ngreet();",
      "holeyCode": "// greet という関数を定義する\nfunction ___() {\n    console.log('___');\n}\n// 関数を動かす\n___();",
      "correctLines": [
        "// greet という関数を定義する",
        "function greet() {",
        "    console.log('こんにちは');",
        "}",
        "// 関数を動かす",
        "greet();"
      ],
      "lineHints": [
        null,
        "function greet() { と入力して、関数を定義します。",
        "console.log('こんにちは'); と入力しましょう。",
        "さいごに } で閉じます。",
        null,
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

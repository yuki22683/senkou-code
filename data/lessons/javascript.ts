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
      "correctCode": "// 画面に「Hello, JavaScript!」と出す関数\\nconsole.log('Hello, JavaScript!');",
      "holeyCode": "// 画面に「Hello, JavaScript!」と出す関数\\nconsole.___('Hello, JavaScript!');",
      "correctLines": [
          "// 画面に「Hello, JavaScript!」と出す関数",
          "console.log('Hello, JavaScript!');"
        ],
      "lineHints": [
          null,
          "console.logでカッコ内の文字列を画面に出力します。"
        ],
        "candidates": {
          "functions": [
            "console.log"
          ],
          "strings": [
            "Hello, JavaScript!"
          ],
          "others": ["log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello, JavaScript!\\n"
          }
        ]
      },
    {
      "title": "ずっと変わらない「はこ」const",
      "correctCode": "// nameに'JavaScript'を代入\\nconst name = 'JavaScript';\\n// はこの中身を出す\\nconsole.log(name);",
      "holeyCode": "// nameに'JavaScript'を代入\\nconst ___ = 'JavaScript';\\n// はこの中身を出す\\nconsole.log(___);",
      "correctLines": [
          "// nameに'JavaScript'を代入",
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
            "expected_output": "JavaScript\\n"
          }
        ]
      },
    {
      "title": "コンピュータで計算（けいさん）しましょう",
      "correctCode": "// xに10を入れる\\nconst x = 10;\\n// yに5を入れる\\nconst y = 5;\\n// x + y を表示する\\nconsole.log(x + y);",
      "holeyCode": "// xに10を入れる\\nconst ___ = 10;\\n// yに5を入れる\\nconst ___ = 5;\\n// x + y を表示する\\nconsole.___(x + y);",
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
          "others": ["10;", "5;", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "15\\n"
          }
        ]
      },
    {
      "title": "文章の中に「はこ」を入れましょう",
      "correctCode": "// age というはこに 10 を入れる\\nconst age = 10;\\n// 文章の中に age の中身を入れる\\nconsole.log(`私は${age}歳です`);",
      "holeyCode": "// age というはこに 10 を入れる\\nconst ___ = 10;\\n// 文章の中に age の中身を入れる\\nconsole.___(`私は${age}歳です`);",
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
          "コンソールに文字列を出力します。"
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
          "others": ["10;", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "私は10歳です\\n"
          }
        ]
      },
    {
      "title": "たくさんのデータをまとめましょう「配列」",
      "correctCode": "// colorsに['あか', 'あお']を代入\\nconst colors = ['あか', 'あお'];\\n// 2番目のデータ（インデックス1）を出す\\nconsole.log(colors[1]);",
      "holeyCode": "// colorsに['あか', 'あお']を代入\\nconst ___ = ['あか', 'あお'];\\n// 2番目のデータ（インデックス1）を出す\\nconsole.___(colors[1]);",
      "correctLines": [
          "// colorsに['あか', 'あお']を代入",
          "const colors = ['あか', 'あお'];",
          "// 2番目のデータ（インデックス1）を出す",
          "console.log(colors[1]);"
        ],
      "lineHints": [
          null,
          "配列リテラル[]で複数の要素を格納します。",
          null,
          "2番目のデータはインデックス1です。 `colors[1]` と入力してください。"
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
          ],
          "others": ["log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "あお\\n"
          }
        ]
      },
    {
      "title": "「もし〜なら」で分ける if文",
      "correctCode": "// score に 100 を入れる\\nconst score = 100;\\n// もし 80 より大きかったら\\nif (score > 80) {\\n    // 「ごうかく！」と表示する\\n    console.log('ごうかく！');\\n}",
      "holeyCode": "// score に 100 を入れる\\nconst ___ = 100;\\n// もし 80 より大きかったら\\nif (score ___ 80) {\\n    // 「ごうかく！」と表示する\\n    console.___('ごうかく！');\\n___",
      "correctLines": [
          "// score に 100 を入れる",
          "const score = 100;",
          "// もし 80 より大きかったら",
          "if (score > 80) {",
          "    // 「ごうかく！」と表示する",
          "    console.log('ごうかく！');",
          "}"
        ],
      "lineHints": [
          null,
          "定数を宣言し、数値を代入します。",
          null,
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          null,
          "コンソールに文字列を出力します。",
          "ここを正しく入力してください。"
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
          "others": ["100;", "log", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ごうかく！\\n"
          }
        ]
      },
    {
      "title": "ちがう場合は？ if-else文",
      "correctCode": "// age に 10 を入れる\\nconst age = 10;\\n// 20以上かを比較する演算子\\nif (age >= 20) {\\n    // 20歳以上のときのメッセージ（'おとな'）\\n    console.log('おとな');\\n// 「そうでなければ」を表すキーワード\\n} else {\\n    // それ以外の場合（'こども'）\\n    console.log('こども');\\n}",
      "holeyCode": "// age に 10 を入れる\\nconst ___ = 10;\\n// 20以上かを比較する演算子\\nif (age ___ 20) {\\n    // 20歳以上のときのメッセージ（'おとな'）\\n    console.___('おとな');\\n// 「そうでなければ」を表すキーワード\\n} ___ {\\n    // それ以外の場合（'こども'）\\n    console.___('こども');\\n___",
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
          "コンソールに文字列を出力します。",
          null,
          "もし条件が満たされなかった場合に実行する処理を記述します。",
          null,
          "コンソールに文字列を出力します。",
          "ここを正しく入力してください。"
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
          "others": ["10;", ">=", "おとな", "log", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こども\\n"
          }
        ]
      },
    {
      "title": "順番に取り出す for...of文",
      "correctCode": "// 配列を作る（'たろう', 'はなこ'の順）\\nconst names = ['たろう', 'はなこ'];\\n// 順番に取り出すループ\\nfor (const name of names) {\\n    // 取り出した名前を表示\\n    console.log(name);\\n}",
      "holeyCode": "// 配列を作る（'たろう', 'はなこ'の順）\\nconst ___ = ['たろう', 'はなこ'];\\n// 順番に取り出すループ\\nfor (const name of ___) {\\n    // 取り出した名前を表示\\n    console.log(___);\\n___",
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
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "name",
            "names"
          ],
          "functions": [
            "console.log"
          ],
          "others": ["たろう", "はなこ", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "たろう\\nはなこ\\n"
          }
        ]
      },
    {
      "title": "名前で管理する「オブジェクト」",
      "correctCode": "// オブジェクトを作る（nameは'たろう'）\\nconst user = { name: 'たろう' };\\n// nameプロパティを取り出す\\nconsole.log(user.name);",
      "holeyCode": "// オブジェクトを作る（nameは'たろう'）\\nconst ___ = { name: 'たろう' };\\n// nameプロパティを取り出す\\nconsole.___(user.name);",
      "correctLines": [
          "// オブジェクトを作る（nameは'たろう'）",
          "const user = { name: 'たろう' };",
          "// nameプロパティを取り出す",
          "console.log(user.name);"
        ],
      "lineHints": [
          null,
          "オブジェクトリテラル{}でプロパティと値のペアを定義します。",
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
          ],
          "others": ["log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "たろう\\n"
          }
        ]
      },
    {
      "title": "自分だけの関数を作ろう",
      "correctCode": "// greet という関数を定義する（'こんにちは'と表示）\\nfunction greet() {\\n    // 'こんにちは'と表示\\n    console.log('こんにちは');\\n}\\n// 関数を動かす\\ngreet();",
      "holeyCode": "// greet という関数を定義する（'こんにちは'と表示）\\nfunction ___() {\\n    // 'こんにちは'と表示\\n    console.___('こんにちは');\\n___\\n// 関数を動かす\\n___();",
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
          "コンソールに文字列を出力します。",
          "ここを正しく入力してください。",
          null,
          "関数（greet）を呼び出して実行します。"
        ],
        "candidates": {
          "functions": [
            "greet",
            "console.log"
          ],
          "strings": [
            "こんにちは"
          ],
          "others": ["log", "}", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      }
  ]
}
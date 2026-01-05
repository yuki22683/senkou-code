const bq = String.fromCharCode(96);

export const javascriptData = {
  "language": "javascript",
  "lessonId": "javascript-1",
  "lessonTitle": "JavaScript I",
  "lessonDescription": "Web開発の必須言語、JavaScriptの基本を学びます。console.log、変数、条件分岐、関数などを習得しましょう。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "Hello Worldを出力しよう",
      "description": "コンソールに文字を表示する方法を学びましょう。Hello, JavaScript!と表示するプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "JavaScriptの世界へようこそ",
          "content": "# JavaScriptとは？\n\nWebサイトに動きをつけるために開発された言語ですが、現在はサーバーやアプリ開発など、あらゆる場所で使われています。"
        },
        {
          "title": "コンソールに出力する",
          "content": "# console.log()\n\nJavaScriptで文字を表示するには `console.log()` を使います。文の終わりには ; （セミコロン）を付ける習慣をつけましょう。\n\n**コード例：**\n```javascript\nconsole.log('Hello, JavaScript!');\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 「Hello, JavaScript!」と出力\nconsole.log('Hello, JavaScript!');",
      "holeyCode": "// 「Hello, JavaScript!」と出力\nconsole.log('___');",
      "correctLines": [
        "// 「Hello, JavaScript!」と出力",
        "console.log('Hello, JavaScript!');"
      ],
      "lineHints": [
        "コメント行です。プログラムには影響しません。",
        "console.log を使い、最後はセミコロンで締めます。"
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
      "title": "定数と変数",
      "description": "const を使って定数を定義し、表示するプログラムを作りましょう。定数 name に文字列 'JavaScript' を代入して表示するプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "定数定義",
          "content": "# const\n\n一度決めたら変えない値は `const` を使います。後で書き換える必要がある場合は `let` を使いますが、基本は `const` を使います。\n\n**コード例：**\n```javascript\nconst name = 'JavaScript';\nconsole.log(name);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 定数nameを定義\nconst name = 'JavaScript';\n// 出力\nconsole.log(name);",
      "holeyCode": "// 定数nameを定義\nconst name = '___';\n// 出力\nconsole.log(___);",
      "correctLines": [
        "// 定数nameを定義",
        "const name = 'JavaScript';",
        "// 出力",
        "console.log(name);"
      ],
      "lineHints": [
        "コメント: 定数nameを定義します。",
        "const name = 'JavaScript'; と代入します。",
        "コメント: 変数の中身を表示します。",
        "console.log(name); と出力します。"
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
      "title": "数値の計算",
      "description": "JavaScriptで算術演算を行い、その結果を表示するプログラムを作りましょう。定数 x と y の足し算結果を表示するプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "四則演算",
          "content": "# 演算子\n\nJavaScriptでも +, -, *, / が使えます。\n\n**コード例：**\n```javascript\nconst x = 10;\nconst y = 5;\nconsole.log(x + y);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// xに10を代入\nconst x = 10;\n// yに5を代入\nconst y = 5;\n// x + y を出力\nconsole.log(x + y);",
      "holeyCode": "// xに10を代入\nconst x = ___ ;\n// yに5を代入\nconst y = ___ ;\n// x + y を出力\nconsole.log(x ___ y);",
      "correctLines": [
        "// xに10を代入",
        "const x = 10;",
        "// yに5を代入",
        "const y = 5;",
        "// x + y を出力",
        "console.log(x + y);"
      ],
      "lineHints": [
        null,
        "const x = 10; とします。",
        null,
        "const y = 5; とします。",
        null,
        "x + y を console.log に渡します。"
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
      "title": "テンプレートリテラル",
      "description": "文字列の中に変数を埋め込む便利な書き方を学びましょう。テンプレートリテラルを使って変数 age の値を文章の中に埋め込んで表示するプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "埋め込み構文",
          "content": "# バッククォートと${ }\n\nバッククォート( ` )で囲んだ文字列の中で `${変数名}` と書くと、変数の値を埋め込めます。\n\n**コード例：**\n```javascript\nconst age = 20;\nconsole.log(`私は${age}歳です`);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 定数ageを定義\nconst age = 20;\n// 埋め込み出力\nconsole.log(`私は${age}歳です`);",
      "holeyCode": "// 定数ageを定義\nconst age = ___\n// 埋め込み出力\nconsole.log(`私は${___}歳です`);",
      "correctLines": [
        "// 定数ageを定義",
        "const age = 20;",
        "// 埋め込み出力",
        "console.log(`私は${age}歳です`);"
      ],
      "lineHints": [
        null,
        "age = 20; とします。",
        null,
        "変数を ${ } で囲んで埋め込みます。"
      ],
      "candidates": {
        "variables": [
          "age"
        ],
        "functions": [
          "console.log"
        ],
        "numbers": [
          "20"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "私は20歳です\n"
        }
      ]
    },
    {
      "title": "配列の基本",
      "description": "配列 colors から 2番目の要素を取り出して表示するプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "配列",
          "content": "# ブラケット[ ]\n\n複数のデータをまとめて管理するには配列を使います。インデックスは0から始まります。\n\n**コード例：**\n```javascript\nconst list = ['A', 'B'];\nconsole.log(list[1]); // 'B' を出力\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 配列colorsを作成\nconst colors = ['red', 'blue'];\n// 2番目の要素を出力\nconsole.log(colors[1]);",
      "holeyCode": "// 配列colorsを作成\nconst colors = ['___', '___'];\n// 2番目の要素を出力\nconsole.log(colors[___]);",
      "correctLines": [
        "// 配列colorsを作成",
        "const colors = ['red', 'blue'];",
        "// 2番目の要素を出力",
        "console.log(colors[1]);"
      ],
      "lineHints": [
        null,
        "['red', 'blue'] と記述します。",
        null,
        "2番目のインデックスは 1 です。"
      ],
      "candidates": {
        "variables": [
          "colors"
        ],
        "functions": [
          "console.log"
        ],
        "strings": [
          "red",
          "blue"
        ],
        "numbers": [
          "1"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "blue\n"
        }
      ]
    },
    {
      "title": "if文による条件分岐",
      "description": "score が 80より大きい場合にのみ合格メッセージを表示するプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if文",
          "content": "# 条件式を( )で囲む\n\nJavaScriptのif文は条件を丸括弧 `( )` で囲み、その後に `{ }` で処理を書きます。\n\n**コード例：**\n```javascript\nif (score > 80) {\n    console.log('合格');\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// scoreを定義\nconst score = 100;\n// 80より大きい場合に実行\nif (score > 80) {\n    console.log('満点です！');\n}",
      "holeyCode": "// scoreを定義\nconst score = ___ ;\n// 80より大きい場合に実行\nif (score ___ 80) {\n    console.log('___');\n}",
      "correctLines": [
        "// scoreを定義",
        "const score = 100;",
        "// 80より大きい場合に実行",
        "if (score > 80) {",
        "    console.log('満点です！');",
        "}"
      ],
      "lineHints": [
        null,
        "score = 100; と代入します。",
        null,
        "比較演算子 > を使います。",
        "console.log('満点です！'); と記述します。",
        "if文の閉じ括弧です。"
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
          "満点です！"
        ],
        "numbers": [
          "100"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "満点です！\n"
        }
      ]
    },
    {
      "title": "if-else文",
      "description": "年齢に応じて「大人」か「未成年」かを表示し分けるプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "else文",
          "content": "# 条件を満たさない場合\n\n条件に当てはまらない時の処理は `else` を使います。\n\n**コード例：**\n```javascript\nif (age >= 20) {\n  console.log('大人');\n} else {\n  console.log('未成年');\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// ageを定義\nconst age = 18;\n// 条件分岐\nif (age >= 20) {\n    console.log('大人');\n} else {\n    console.log('未成年');\n}",
      "holeyCode": "// ageを定義\nconst age = ___ ;\n// 条件分岐\nif (age >= 20) {\n    console.log('大人');\n} ___ {\n    console.log('___');\n}",
      "correctLines": [
        "// ageを定義",
        "const age = 18;",
        "// 条件分岐",
        "if (age >= 20) {",
        "    console.log('大人');",
        "} else {",
        "    console.log('未成年');",
        "}"
      ],
      "lineHints": [
        null,
        "age = 18; と代入します。",
        null,
        "条件式 age >= 20 を確認します。",
        "大人と表示します。",
        "else を記述します。",
        "console.log('未成年'); と出力します。",
        "elseブロックの閉じ括弧です。"
      ],
      "candidates": {
        "variables": [
          "age"
        ],
        "functions": [
          "console.log"
        ],
        "strings": [
          "未成年"
        ],
        "numbers": [
          "18"
        ],
        "keywords": [
          "else"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "未成年\n"
        }
      ]
    },
    {
      "title": "for...of文による繰り返し",
      "description": "配列 names に入っている名前を一つずつ順番に表示するプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "for...of文",
          "content": "# 配列の要素を順に取り出す\n\n配列の中身を一つずつ取り出すには `for...of` が便利です。\n\n**コード例：**\n```javascript\nfor (const name of names) {\n  console.log(name);\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 配列作成\nconst names = ['Alice', 'Bob'];\n// ループ処理\nfor (const name of names) {\n    console.log(name);\n}",
      "holeyCode": "// 配列作成\nconst names = ['Alice', 'Bob'];\n// ループ処理\nfor (const ___ of ___) {\n    console.log(___);\n}",
      "correctLines": [
        "// 配列作成",
        "const names = ['Alice', 'Bob'];",
        "// ループ処理",
        "for (const name of names) {",
        "    console.log(name);",
        "}"
      ],
      "lineHints": [
        null,
        "配列を定義します。",
        null,
        "for (const name of names) { と記述します。",
        "取り出した名前（name）を出力します。",
        "ループの閉じ括弧です。"
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
          "expected_output": "Alice\nBob\n"
        }
      ]
    },
    {
      "title": "オブジェクトの基本",
      "description": "オブジェクト user からプロパティ 'name' の値を取り出して表示するプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "オブジェクト",
          "content": "# 波括弧{ }\n\nキーと値のペアでデータを管理します。ドット記法で値を取り出せます。\n\n**コード例：**\n```javascript\nconst user = { name: 'Alice' };\nconsole.log(user.name);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// オブジェクトを作成\nconst user = { name: 'Alice' };\n// 値を表示\nconsole.log(user.name);",
      "holeyCode": "// オブジェクトを作成\nconst user = { ___: '___' };\n// 値を表示\nconsole.log(user.name);",
      "correctLines": [
        "// オブジェクトを作成",
        "const user = { name: 'Alice' };",
        "// 値を表示",
        "console.log(user.name);"
      ],
      "lineHints": [
        null,
        "{ name: 'Alice' } と記述します。",
        null,
        "ドット記法 .name を使って値を取り出します。"
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
          "Alice"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Alice\n"
        }
      ]
    },
    {
      "title": "関数の定義と呼び出し",
      "description": "挨拶を表示する関数 greet を定義し、それを呼び出して実行するプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "関数",
          "content": "# functionキーワード\n\n処理をまとめて名前を付け、後で呼び出せるようにします。\n\n**コード例：**\n```javascript\nfunction greet() {\n  console.log('Hello');\n}\n\ngreet();\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 関数greetを定義\nfunction greet() {\n    console.log('Good morning');\n}\n// 関数を呼び出す\ngreet();",
      "holeyCode": "// 関数greetを定義\nfunction ___() {\n    console.log('___');\n}\n// 関数を呼び出す\n___();",
      "correctLines": [
        "// 関数greetを定義",
        "function greet() {",
        "    console.log('Good morning');",
        "}",
        "// 関数を呼び出す",
        "greet();"
      ],
      "lineHints": [
        null,
        "function greet() { と記述して関数を定義します。",
        "表示したい文字列を console.log します。",
        "関数の閉じ括弧です。",
        null,
        "greet(); と書いて関数を実行します。"
      ],
      "candidates": {
        "functions": [
          "greet",
          "console.log"
        ],
        "strings": [
          "Good morning"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Good morning\n"
        }
      ]
    }
  ]
}

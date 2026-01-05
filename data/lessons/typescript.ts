export const typescriptData = {
  "language": "typescript",
  "lessonId": "typescript-1",
  "lessonTitle": "TypeScript I",
  "lessonDescription": "JavaScriptに型を加えたTypeScript。より安全でバグの少ないコードを書くための基礎を学びましょう。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "型を指定しよう",
      "description": "TypeScriptの最大の特徴である「型」を指定して変数を宣言しましょう。string型の変数に文字を代入して表示するプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "型定義",
          "content": "# : 型名\n\n変数名の後に `: string` や `: number` を書くことで、データの種類を固定できます。\n\n**コード例：**\n```typescript\nconst message: string = 'Hello';\nconsole.log(message);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// string型の変数を定義\nconst message: string = 'Hello TS';\n// 出力\nconsole.log(message);",
      "holeyCode": "// string型の変数を定義\nconst message: ___ = '___';\n// 出力\nconsole.log(___);",
      "correctLines": [
        "// string型の変数を定義",
        "const message: string = 'Hello TS';",
        "// 出力",
        "console.log(message);"
      ],
      "lineHints": [
        null,
        "型は string を指定し、'Hello TS' を代入します。",
        null,
        "message を出力します。"
      ],
      "candidates": {
        "variables": [
          "message"
        ],
        "functions": [
          "console.log"
        ],
        "strings": [
          "string",
          "Hello TS"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello TS\n"
        }
      ]
    },
    {
      "title": "数値の計算と型",
      "description": "number型を使って数値計算を行いましょう。変数 x, y に型を指定して足し算を行うプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "数値の型",
          "content": "# number型\n\n整数も小数も TypeScript では `number` 型を使います。\n\n**コード例：**\n```typescript\nconst x: number = 10;\nconst y: number = 5;\nconsole.log(x + y);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// number型の変数を定義\nconst x: number = 10;\nconst y: number = 5;\n// 出力\nconsole.log(x + y);",
      "holeyCode": "// number型の変数を定義\nconst x: ___ = 10;\nconst y: ___ = 5;\n// 出力\nconsole.log(x ___ y);",
      "correctLines": [
        "// number型の変数を定義",
        "const x: number = 10;",
        "const y: number = 5;",
        "// 出力",
        "console.log(x + y);"
      ],
      "lineHints": [
        null,
        "x: number = 10; とします。",
        "y: number = 5; とします。",
        null,
        "x + y を出力します。"
      ],
      "candidates": {
        "variables": [
          "x",
          "y"
        ],
        "functions": [
          "console.log"
        ],
        "strings": [
          "number"
        ],
        "operators": [
          "+"
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
      "description": "テンプレートリテラルを使って、型定義された変数を文字列に埋め込みましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "文字列への埋め込み",
          "content": "# バッククォート\n\nJavaScriptと同じく `${変数}` で埋め込みが可能です。\n\n**コード例：**\n```typescript\nconst age: number = 20;\nconsole.log(`私は${age}歳です`);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 年齢を定義\nconst age: number = 20;\n// 出力\nconsole.log(`私は${age}歳です`);",
      "holeyCode": "// 年齢を定義\nconst age: ___ = 20;\n// 出力\nconsole.log(`私は${___}歳です`);",
      "correctLines": [
        "// 年齢を定義",
        "const age: number = 20;",
        "// 出力",
        "console.log(`私は${age}歳です`);"
      ],
      "lineHints": [
        null,
        "age: number = 20; とします。",
        null,
        "変数を埋め込みます。"
      ],
      "candidates": {
        "variables": [
          "age"
        ],
        "functions": [
          "console.log"
        ],
        "strings": [
          "number"
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
      "title": "配列の型定義",
      "description": "文字列のみを格納できる配列を定義し、要素を取り出してみましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "配列の型",
          "content": "# 型名[]\n\n`string[]` や `number[]` のように、型名の後ろに `[]` を付けると配列の型になります。\n\n**コード例：**\n```typescript\nconst list: string[] = ['A', 'B'];\nconsole.log(list[1]);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 文字列の配列を定義\nconst colors: string[] = ['red', 'blue'];\n// 2番目を出力\nconsole.log(colors[1]);",
      "holeyCode": "// 文字列の配列を定義\nconst colors: ___[] = ['red', 'blue'];\n// 2番目を出力\nconsole.log(colors[___]);",
      "correctLines": [
        "// 文字列の配列を定義",
        "const colors: string[] = ['red', 'blue'];",
        "// 2番目を出力",
        "console.log(colors[1]);"
      ],
      "lineHints": [
        null,
        "string[] と記述します。",
        null,
        "インデックスは 1 です。"
      ],
      "candidates": {
        "variables": [
          "colors"
        ],
        "functions": [
          "console.log"
        ],
        "strings": [
          "string"
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
      "title": "if文とboolean型",
      "description": "boolean型（真偽値）の変数を使って条件分岐を行いましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "真偽値",
          "content": "# boolean\n\n`true` か `false` のどちらかの値を持つ型です。\n\n**コード例：**\n```typescript\nconst isOk: boolean = true;\nif (isOk) {\n    console.log('OK');\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// boolean変数を定義\nconst isAdult: boolean = true;\n// 条件分岐\nif (isAdult) {\n    console.log('大人です');\n}",
      "holeyCode": "// boolean変数を定義\nconst isAdult: ___ = true;\n// 条件分岐\nif (___) {\n    console.log('大人です');\n}",
      "correctLines": [
        "// boolean変数を定義",
        "const isAdult: boolean = true;",
        "// 条件分岐",
        "if (isAdult) {",
        "    console.log('大人です');",
        "}"
      ],
      "lineHints": [
        null,
        "isAdult: boolean = true; とします。",
        null,
        "if (isAdult) と記述します。"
      ],
      "candidates": {
        "variables": [
          "isAdult"
        ],
        "functions": [
          "console.log"
        ],
        "strings": [
          "boolean"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "大人です\n"
        }
      ]
    },
    {
      "title": "if-else文",
      "description": "点数（number型）に応じて合格・不合格を判定するプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "条件分岐",
          "content": "# 比較演算\n\nTypeScriptでも JavaScript と同様に `>` `>=` `<` `<=` `===` などが使えます。\n\n**コード例：**\n```typescript\nconst score: number = 70;\nif (score >= 80) {\n    console.log('合格');\n} else {\n    console.log('不合格');\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 点数を定義\nconst score: number = 75;\n// 判定\nif (score >= 80) {\n    console.log('合格');\n} else {\n    console.log('不合格');\n}",
      "holeyCode": "// 点数を定義\nconst score: ___ = 75;\n// 判定\nif (score >= 80) {\n    console.log('合格');\n} ___ {\n    console.log('不合格');\n}",
      "correctLines": [
        "// 点数を定義",
        "const score: number = 75;",
        "// 判定",
        "if (score >= 80) {",
        "    console.log('合格');",
        "} else {",
        "    console.log('不合格');",
        "}"
      ],
      "lineHints": [
        null,
        "score: number = 75; とします。",
        null,
        null,
        null,
        "else ブロックを作ります。"
      ],
      "candidates": {
        "variables": [
          "score"
        ],
        "functions": [
          "console.log"
        ],
        "strings": [
          "number"
        ],
        "keywords": [
          "else"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "不合格\n"
        }
      ]
    },
    {
      "title": "for...of文",
      "description": "型定義された配列から要素を取り出して表示しましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "ループ処理",
          "content": "# 型推論\n\n`for (const name of names)` の name は、names が `string[]` なら自動的に `string` 型と推論されます。\n\n**コード例：**\n```typescript\nconst names: string[] = ['Alice', 'Bob'];\nfor (const name of names) {\n    console.log(name);\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 配列を定義\nconst names: string[] = ['Alice', 'Bob'];\n// ループ\nfor (const name of names) {\n    console.log(name);\n}",
      "holeyCode": "// 配列を定義\nconst names: ___[] = ['Alice', 'Bob'];\n// ループ\nfor (const ___ of ___) {\n    console.log(name);\n}",
      "correctLines": [
        "// 配列を定義",
        "const names: string[] = ['Alice', 'Bob'];",
        "// ループ",
        "for (const name of names) {",
        "    console.log(name);",
        "}"
      ],
      "lineHints": [
        null,
        "string[] 型として定義します。",
        null,
        "name of names と記述します。"
      ],
      "candidates": {
        "variables": [
          "name",
          "names"
        ],
        "functions": [
          "console.log"
        ],
        "strings": [
          "string"
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
      "title": "オブジェクトの型定義（Type Alias）",
      "description": "Type Aliasを使ってオブジェクトの構造を定義し、それに基づいてオブジェクトを作成しましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "Type Alias",
          "content": "# type キーワード\n\n```typescript\ntype User = {\n  name: string;\n};\n```\n\n**コード例：**\n```typescript\ntype User = { name: string };\nconst user: User = { name: 'Alice' };\nconsole.log(user.name);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 型定義\ntype User = { name: string };\n// オブジェクト作成\nconst user: User = { name: 'Alice' };\n// 出力\nconsole.log(user.name);",
      "holeyCode": "// 型定義\ntype User = { name: ___ };\n// オブジェクト作成\nconst user: ___ = { name: 'Alice' };\n// 出力\nconsole.log(user. ___ );",
      "correctLines": [
        "// 型定義",
        "type User = { name: string };",
        "// オブジェクト作成",
        "const user: User = { name: 'Alice' };",
        "// 出力",
        "console.log(user.name);"
      ],
      "lineHints": [
        null,
        "nameプロパティは string 型です。",
        null,
        "user: User 型として変数を宣言します。",
        null,
        "user.name にアクセスします。"
      ],
      "candidates": {
        "variables": [
          "user"
        ],
        "functions": [
          "console.log"
        ],
        "strings": [
          "string",
          "User",
          "name"
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
      "title": "関数の型定義（引数）",
      "description": "関数の引数に型を指定して、安全な関数を作りましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "引数の型",
          "content": "# 引数名: 型\n\n```typescript\nfunction greet(name: string) {\n  ...\n}\n```\n\n**コード例：**\n```typescript\nfunction greet(name: string) {\n    console.log(`Hello, ${name}`);\n}\ngreet('TypeScript');\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 引数に型を指定\nfunction greet(name: string) {\n    console.log(`Hello, ${name}`);\n}\n// 呼び出し\ngreet('TypeScript');",
      "holeyCode": "// 引数に型を指定\nfunction greet(name: ___) {\n    console.log(`Hello, ${name}`);\n}\n// 呼び出し\ngreet('TypeScript');",
      "correctLines": [
        "// 引数に型を指定",
        "function greet(name: string) {",
        "    console.log(`Hello, ${name}`);",
        "}",
        "// 呼び出し",
        "greet('TypeScript');"
      ],
      "lineHints": [
        null,
        "name: string と記述します。"
      ],
      "candidates": {
        "functions": [
          "greet",
          "console.log"
        ],
        "strings": [
          "string"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, TypeScript\n"
        }
      ]
    },
    {
      "title": "関数の型定義（戻り値）",
      "description": "関数の戻り値にも型を指定してみましょう。値を返さない場合は `void` を使います。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "戻り値の型",
          "content": "# function(): 型\n\n値を返さない関数の戻り値の型には `void` を指定します。\n\n**コード例：**\n```typescript\nfunction showMessage(): void {\n    console.log('Hello');\n}\nshowMessage();\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 戻り値がない場合はvoid\nfunction showDate(): void {\n    console.log('Today');\n}\n// 実行\nshowDate();",
      "holeyCode": "// 戻り値がない場合はvoid\nfunction showDate(): ___ {\n    console.log('Today');\n}\n// 実行\nshowDate();",
      "correctLines": [
        "// 戻り値がない場合はvoid",
        "function showDate(): void {",
        "    console.log('Today');",
        "}",
        "// 実行",
        "showDate();"
      ],
      "lineHints": [
        null,
        "戻り値がないので void を指定します。"
      ],
      "candidates": {
        "functions": [
          "showDate",
          "console.log"
        ],
        "strings": [
          "void"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Today\n"
        }
      ]
    }
  ]
};

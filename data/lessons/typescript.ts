export const typescriptData = {
  "language": "typescript",
  "lessonId": "typescript-1",
  "lessonTitle": "TypeScript (タイプスクリプト) にちょうせん！",
  "lessonDescription": "JavaScriptに「ラベル（型）」をつけて、もっと使いやすくした TypeScript（タイプスクリプト）を学びましょう。間違いの少ないプログラミングができるようになります。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "はこに「ラベル」をはりましょう",
      "description": "TypeScriptのいちばんの特徴、データの種類を決める「ラベル（型）」を使ってみましょう。文字を入れるための「string（ストリング）ラベル」を貼ってみます。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "ラベル（型）とは？",
          "content": "# はこに中身を教えてあげましょう\n\nTypeScriptでは、はこ（変数）を作るときに「このはこには文字を入れます！」「数字を入れます！」と先に決めることができます。\nこれを **ラベル（型）** と呼びます。ラベルを貼ることで、間違ったものを入れようとしたときにコンピュータが教えてくれるので、とても安心ですよ！"
        },
        {
          "title": "ラベルの貼りかた",
          "content": "# :（コロン）のあとに種類を書きます\n\nはこ（変数）の名前のあとに、`:` をつけてから種類を書きます。\n\n- **string**（ストリング）: 文字のラベル\n- **number**（ナンバー）: 数字のラベル\n\n**コード例：**\n```typescript\nconst message: string = 'Hello';\nconsole.log(message);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// string（文字）ラベルを貼ったはこを作る\nconst message: string = 'Hello TS';\n// はこの中身を出す\nconsole.log(message);",
      "holeyCode": "// string（文字）ラベルを貼ったはこを作る\nconst message: ___ = '___';\n// はこの中身を出す\nconsole.log(___);",
      "correctLines": [
        "// string（文字）ラベルを貼ったはこを作る",
        "const message: string = 'Hello TS';",
        "// はこの中身を出す",
        "console.log(message);"
      ],
      "lineHints": [
        null,
        "文字を入れるラベルは `string` です。 '=' のあとに `'Hello TS'` と入力しましょう。",
        null,
        "console.log の中に、はこの名前 `message` を入力します。"
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
      "title": "数字のラベルで計算しましょう",
      "description": "数字を入れる「number（ナンバー）ラベル」を使って、たし算をしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "数字専用のラベル",
          "content": "# number（ナンバー）型\n\n整数（せいすう）や小数（しょうすう）など、数字を入れたいときは `number` ラベルを貼ります。\n\n**コード例：**\n```typescript\nconst x: number = 10;\nconst y: number = 5;\nconsole.log(x + y);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// number（数字）ラベルのはこを作る\nconst x: number = 10;\nconst y: number = 5;\n// たし算した答えを出す\nconsole.log(x + y);",
      "holeyCode": "// number（数字）ラベルのはこを作る\nconst x: ___ = 10;\nconst y: ___ = 5;\n// たし算した答えを出す\nconsole.log(x ___ y);",
      "correctLines": [
        "// number（数字）ラベルのはこを作る",
        "const x: number = 10;",
        "const y: number = 5;",
        "// たし算した答えを出す",
        "console.log(x + y);"
      ],
      "lineHints": [
        null,
        "x に `number` ラベルを貼ります。",
        "y にも `number` ラベルを貼ります。",
        null,
        "たし算なので `+` を使います。"
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
      "title": "ラベルを貼ったはこを文章に入れましょう",
      "description": "ラベルを貼ったはこの中身を、文章の中に埋め込んでみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "文章と変数をくっつける",
          "content": "# JavaScriptと同じ書き方ができますよ\n\n` `（バッククォート）で囲んだ文章の中で `${ }` を使う方法は、TypeScriptでも同じです。\n\n**コード例：**\n```typescript\nconst age: number = 10;\nconsole.log(`私は${age}歳です`);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// age というはこに 10 を入れる\nconst age: number = 10;\n// 文章の中に中身を入れる\nconsole.log(`私は${age}歳です`);",
      "holeyCode": "// age というはこに 10 を入れる\nconst age: ___ = 10;\n// 文章の中に中身を入れる\nconsole.log(`私は${___}歳です`);",
      "correctLines": [
        "// age というはこに 10 を入れる",
        "const age: number = 10;",
        "// 文章の中に中身を入れる",
        "console.log(`私は${age}歳です`);"
      ],
      "lineHints": [
        null,
        "数字を入れるので、ラベルは `number` です。",
        null,
        "${ } の中に、はこの名前 `age` を入力しましょう。"
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
          "expected_output": "私は10歳です\n"
        }
      ]
    },
    {
      "title": "同じラベルを並べる「配列」",
      "description": "同じラベル（型）のデータをまとめて入れられる「配列」を使ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "ラベルのあとに [] をつけましょう",
          "content": "# string[] や number[]\n\n「文字のラベルがついたデータの列」を作りたいときは、`string[]` のようにラベルの名まえのあとに `[]` をつけます。\n\n**コード例：**\n```typescript\nconst list: string[] = ['あ', 'い'];\nconsole.log(list[0]);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 文字列のラベルがついた配列を作る\nconst colors: string[] = ['あか', 'あお'];\n// 2番目（番号は1）を出す\nconsole.log(colors[1]);",
      "holeyCode": "// 文字列のラベルがついた配列を作る\nconst colors: ___[] = ['あか', 'あお'];\n// 2番目（番号は1）を出す\nconsole.log(colors[___]);",
      "correctLines": [
        "// 文字列のラベルがついた配列を作る",
        "const colors: string[] = ['あか', 'あお'];",
        "// 2番目（番号は1）を出す",
        "console.log(colors[1]);"
      ],
      "lineHints": [
        null,
        "文字の配列なので `string` です。",
        null,
        "2番目のデータの番号は 1 です。"
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
          "expected_output": "あお\n"
        }
      ]
    },
    {
      "title": "「はい」か「いいえ」のラベル",
      "description": "boolean（ブーリアン）という、2つの状態しかないラベルを使ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "正しいか、間違いか",
          "content": "# boolean（ブーリアン）型\n\n`true`（正しい）か `false`（間違い）の、どちらかだけを入れられるラベルです。スイッチのON/OFFみたいですよ。\n\n**コード例：**\n```typescript\nconst isOk: boolean = true;\nif (isOk) {\n    console.log('OKです');\n}
```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// boolean（はい/いいえ）ラベルを貼る\nconst isAdult: boolean = true;\n// もし 正しかったら（trueなら）\nif (isAdult) {\n    console.log('おとなです');\n}",
      "holeyCode": "// boolean（はい/いいえ）ラベルを貼る\nconst isAdult: ___ = true;\n// もし 正しかったら（trueなら）\nif (___) {\n    console.log('おとなです');\n}",
      "correctLines": [
        "// boolean（はい/いいえ）ラベルを貼る",
        "const isAdult: boolean = true;",
        "// もし 正しかったら（trueなら）",
        "if (isAdult) {",
        "    console.log('おとなです');",
        "}"
      ],
      "lineHints": [
        null,
        "ラベルの名前は `boolean` です。",
        null,
        "() のなかに、はこの名前 `isAdult` を入力します。"
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
          "expected_output": "おとなです\n"
        }
      ]
    },
    {
      "title": "点数で分けてみましょう",
      "description": "数字のラベルを使って、点数によってメッセージを変えるプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "もし〜なら、そうでなければ",
          "content": "# 条件で分ける\n\nJavaScriptと同じように、`if` と `else` を使って動きを分けることができます。\n\n**コード例：**\n```typescript\nconst score: number = 100;\nif (score >= 80) {\n    console.log('ごうかく');\n} else {\n    console.log('ざんねん');\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// score というはこに 75 を入れる\nconst score: number = 75;\n// 判定する\nif (score >= 80) {\n    console.log('ごうかく');\n} else {\n    console.log('ざんねん');\n}",
      "holeyCode": "// score というはこに 75 を入れる\nconst score: ___ = 75;\n// 判定する\nif (score >= 80) {\n    console.log('ごうかく');\n} ___ {\n    console.log('ざんねん');\n}",
      "correctLines": [
        "// score というはこに 75 を入れる",
        "const score: number = 75;",
        "// 判定する",
        "if (score >= 80) {",
        "    console.log('ごうかく');",
        "} else {",
        "    console.log('ざんねん');",
        "}"
      ],
      "lineHints": [
        null,
        "数字を入れるので `number` ラベルを貼ります。",
        null,
        null,
        null,
        "「そうでなければ」は `else` です。"
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
          "expected_output": "ざんねん\n"
        }
      ]
    },
    {
      "title": "順番に出してみましょう",
      "description": "ラベルが貼られた配列から、データを一つずつ取り出してみましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "種類を予想してくれる機能",
          "content": "# 型の予想（すいろん）\n\nTypeScriptはとても賢いので、配列に貼られたラベルを見て、中から取り出したデータの種類も自動で「きっとこれです！」と予想してくれるのです。\n\n**コード例：**\n```typescript\nconst names: string[] = ['たろう', 'はなこ'];\nfor (const name of names) {\n    console.log(name);\n}
```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 配列を作る\nconst names: string[] = ['たろう', 'はなこ'];\n// 順番にループする\nfor (const name of names) {\n    console.log(name);\n}",
      "holeyCode": "// 配列を作る\nconst names: ___[] = ['たろう', 'はなこ'];\n// 順番にループする\nfor (const ___ of ___) {\n    console.log(name);\n}",
      "correctLines": [
        "// 配列を作る",
        "const names: string[] = ['たろう', 'はなこ'];",
        "// 順番にループする",
        "for (const name of names) {",
        "    console.log(name);",
        "}"
      ],
      "lineHints": [
        null,
        "文字の配列なので `string[]` です。",
        null,
        "JavaScriptと同じ `for (const name of names)` の形を使います。"
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
          "expected_output": "たろう\nはなこ\n"
        }
      ]
    },
    {
      "title": "自分だけのラベルを作ってみましょう",
      "description": "type（タイプ）という言葉を使って、オリジナルのラベルを作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "ラベルの組み合わせ（Type Alias）",
          "content": "# type（タイプ）キーワード\n\n「名前（文字）」と「年齢（数字）」がセットになった新しいラベルを、自分で作ることができます。\n\n**コード例：**\n```typescript\ntype User = { name: string };\nconst user: User = { name: 'たろう' };\nconsole.log(user.name);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// Userという名前のラベルを作る\ntype User = { name: string };\n// Userラベルを貼ったはこを作る\nconst user: User = { name: 'たろう' };\n// 中身を出す\nconsole.log(user.name);",
      "holeyCode": "// Userという名前のラベルを作る\ntype User = { name: ___ };\n// Userラベルを貼ったはこを作る\nconst user: ___ = { name: 'たろう' };\n// 中身を出す\nconsole.log(user. ___ );",
      "correctLines": [
        "// Userという名前のラベルを作る",
        "type User = { name: string };",
        "// Userラベルを貼ったはこを作る",
        "const user: User = { name: 'たろう' };",
        "// 中身を出す",
        "console.log(user.name);"
      ],
      "lineHints": [
        null,
        "name は文字なので `string` です。",
        null,
        "自分で作ったラベル `User` を指定します。",
        null,
        "ドット `.` を使って、userの中の `name` を取り出します。"
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
          "expected_output": "たろう\n"
        }
      ]
    },
    {
      "title": "関数の「入り口」にラベルをはりましょう",
      "description": "新しい関数を作るとき、受け取るデータにラベルを貼ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "入り口のラベル",
          "content": "# 引数（ひきすう）にラベルを貼ります\n\n関数が受け取るデータのことを「引数（ひきすう）」と呼びます。ここにもラベルを貼ると、間違ったデータを渡さなくなるので安心ですよ！\n\n**コード例：**\n```typescript\nfunction aisatsu(name: string) {\n    console.log(`こんにちは、${name}さん`);\n}\naisatsu('TypeScript');\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 受け取るデータのラベルを指定する\nfunction greet(name: string) {\n    console.log(`こんにちは、${name}`);\n}\n// 関数を実行する\ngreet('TypeScript');",
      "holeyCode": "// 受け取るデータのラベルを指定する\nfunction greet(name: ___) {\n    console.log(`こんにちは、${name}`);\n}\n// 関数を実行する\ngreet('TypeScript');",
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
        "受け取る `name` は文字なので `string` です。"
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
          "expected_output": "こんにちは、TypeScript\n"
        }
      ]
    },
    {
      "title": "「なにも返さない」というラベル",
      "description": "関数の結果として何も返さないときに使う、特別なラベルを学びましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "void（ボイド）ラベル",
          "content": "# 何も返さないときは void です\n\n結果などを「返さない」関数には、`void`（ボイド）というラベルを貼ります。これは「空っぽ」という意味ですよ。\n\n**コード例：**\n```typescript\nfunction sayHello(): void {\n    console.log('ハロー！');\n}\nsayHello();\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 何も返さないときは void ラベル\nfunction showDate(): void {\n    console.log('今日の日付');\n}\n// 関数を実行する\nshowDate();",
      "holeyCode": "// 何も返さないときは void ラベル\nfunction showDate(): ___ {\n    console.log('今日の日付');\n}\n// 関数を実行する\nshowDate();",
      "correctLines": [
        "// 何も返さないときは void ラベル",
        "function showDate(): void {",
        "    console.log('今日の日付');",
        "}",
        "// 関数を実行する",
        "showDate();"
      ],
      "lineHints": [
        null,
        "「なにも返さない」ことをあらわす `void` と入力しましょう。"
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
          "expected_output": "今日の日付\n"
        }
      ]
    }
  ]
}

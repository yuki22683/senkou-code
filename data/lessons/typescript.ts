export const typescriptData = {
  "language": "typescript",
  "lessonId": "typescript-1",
  "lessonTitle": "TypeScript (タイプスクリプト) に挑戦！",
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
          "title": "TypeScript（タイプスクリプト）とは？",
          "image": "/illustrations/common/monitor.png",
          "content": "# 安心・安全なプログラミング\n\nTypeScriptは、JavaScriptという言葉に「型（かた）」というルールを追加した言葉です。あらかじめデータの種類を決めておくことで、間違いを未然に防ぐことができます。"
        },
        {
          "title": "ラベル（型）とは？",
          "image": "/illustrations/common/box.png",
          "content": "# はこに中身を教えてあげましょう\n\nTypeScriptでは、はこ（変数）を作るときに「このはこには文字を入れます！」「数字を入れます！」と先に決めることができます。これを **ラベル（型）** と呼びます。"
        },
        {
          "title": "ラベルの貼りかた",
          "image": "/illustrations/common/monitor.png",
          "content": "# :（コロン）のあとに種類を書きます\n\nはこ（変数）の名前のあとに、`:` をつけてから種類を書きます。\n\n- **string**（ストリング）: 文字のラベル\n- **number**（ナンバー）: 数字のラベル\n\n**コード例：**\n```typescript\nconst animal: string = 'いぬ';\nconsole.log(animal);\n```\n=> いぬ"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// string（文字）ラベルを貼ったはこを作る\nconst message: string = 'Hello TS';\n// はこの中身を出す\nconsole.log(message);",
      "holeyCode": "// 文字を入れるので、string と入力しましょう\n___\n// 変数 message の中身を表示しましょう\n___",
      "correctLines": [
        
        
        "// 文字を入れるので、string と入力しましょう",
        "const message: string = 'Hello TS';",
        "// 変数 message の中身を表示しましょう",
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
          "title": "数値型（すうちがた）とは？",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 計算するためのラベル\n\n「10」や「3.14」のような数字を扱うときに使うのが **number** ラベルです。計算をするときは必ずこのラベルを使います。"
        },
        {
          "title": "数字のラベル",
          "image": "/illustrations/common/robot_math.png",
          "content": "# number（ナンバー）型\n\n整数（せいすう）や小数（しょうすう）など、数字を入れたいときは `number` ラベルを貼ります。\n\n**コード例：**\n```typescript\nconst base: number = 100;\nconst bonus: number = 50;\nconsole.log(base + bonus);\n```\n=> 150"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// number（数字）ラベルのはこを作る\nconst x: number = 10;\nconst y: number = 5;\n// たし算した答えを出す\nconsole.log(x + y);",
      "holeyCode": "// 数字を入れるので、number と入力しましょう\n___\n___\n// + を入力してたし算しましょう\n___",
      "correctLines": [
        
        
        "// 数字を入れるので、number と入力しましょう",
        "const x: number = 10;",
        "const y: number = 5;",
        "// + を入力してたし算しましょう",
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
          "title": "文章と変数を組み合わせる",
          "image": "/illustrations/common/fstring.png",
          "content": "# テンプレートリテラル\n\n文章の途中に、変数（はこ）の中身を入れたいときに使うのが **テンプレートリテラル** です。ただの文章よりも、状況に合わせて中身が変わる便利な文章を作れます。"
        },
                {
                  "title": "文章と変数をくっつける",
                  "image": "/illustrations/common/fstring.png",
                  "content": "# JavaScriptと同じ書き方ができます\n\n` `（バッククォート）で囲んだ文章の中で `${ }` を使う方法は、TypeScriptでも同じです。\n\n**コード例：**\n```typescript\nconst food: string = 'カレー';\nconsole.log(`今日の夕飯は${food}です`);\n```\n=> 今日の夕飯はカレーです"
                }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// age というはこに 10 を入れる\nconst age: number = 10;\n// 文章の中に中身を入れる\nconsole.log(`私は${age}歳です`);",
      "holeyCode": "// 数字を入れるので、number と入力しましょう\n___\n// age と入力して年齢を表示しましょう\n___",
      "correctLines": [
        
        
        "// 数字を入れるので、number と入力しましょう",
        "const age: number = 10;",
        "// age と入力して年齢を表示しましょう",
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
          "title": "配列（はいれつ）とは？",
          "image": "/illustrations/common/list.png",
          "content": "# データの行列\n\nたくさんのデータを順番に並べておきたいときに使うのが **配列（はいれつ）** です。例えば、クラスの全員の名前や、買い物リストなどを一つの変数にまとめて管理できます。"
        },
        {
          "title": "ラベルのあとに [] をつけましょう",
          "image": "/illustrations/common/list.png",
          "content": "# string[] や number[]\n\n「文字のラベルがついたデータの列」を作りたいときは、`string[]` のようにラベルの名まえのあとに `[]` をつけます。\n\n**コード例：**\n```typescript\nconst items: string[] = ['おにぎり', 'パン'];\nconsole.log(items[0]);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 文字列のラベルがついた配列を作る\nconst colors: string[] = ['あか', 'あお'];\n// 2番目（番号は1）を出す\nconsole.log(colors[1]);",
      "holeyCode": "___",
      "correctLines": [
        ""// 文字の配列なので、string と入力しましょう",\n        "const colors: string["
      ] = ['あか', 'あお'];",
        "// 2番目の中身を取り出すために 1 を入力しましょう",
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
          "title": "論理型（ろんりがた）とは？",
          "image": "/illustrations/common/if.png",
          "content": "# スイッチのようなラベル\n\n「はい（正しい）」か「いいえ（間違い）」のどちらかしかない状態を扱うのが **boolean（ブーリアン）** です。テストの合図や、ゲームのON/OFFなどに使われます。"
        },
        {
          "title": "正しいか、間違いか",
          "image": "/illustrations/common/if.png",
          "content": "# boolean（ブーリアン）型\n\n`true`（正しい）か `false`（間違い）の、どちらかだけを入れられるラベルです。\n\n**コード例：**\n```typescript\nconst isOpen: boolean = false;\nif (!isOpen) {\n    console.log('閉まっています');\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// boolean（はい/いいえ）ラベルを貼る\nconst isAdult: boolean = true;\n// もし 正しかったら（trueなら）\nif (isAdult) {\n    console.log('おとなです');\n}",
      "holeyCode": "// 「はい/いいえ」のラベル boolean と入力しましょう\n___\n// isAdult と入力して、正しいかチェックしましょう\n___\n    ___\n___",
      "correctLines": [
        
        
        "// 「はい/いいえ」のラベル boolean と入力しましょう",
        "const isAdult: boolean = true;",
        "// isAdult と入力して、正しいかチェックしましょう",
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
          "title": "条件分岐（じょうけんぶんき）とは？",
          "image": "/illustrations/common/if.png",
          "content": "# もし〜なら、の仕組み\n\n「雨が降ったら傘をさす」「晴れたら外で遊ぶ」のように、状況によって動きを変えることを **条件分岐（じょうけんぶんき）** と呼びます。プログラムに判断をさせてみましょう。"
        },
        {
          "title": "もし〜なら、そうでなければ",
          "image": "/illustrations/common/if.png",
          "content": "# 条件で分ける\n\nJavaScriptと同じように、`if` と `else` を使って動きを分けることができます。\n\n**コード例：**\n```typescript\nconst hour: number = 15;\nif (hour < 12) {\n    console.log('午前中');\n} else {\n    console.log('お昼すぎ');\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// score というはこに 75 を入れる\nconst score: number = 75;\n// 判定する\nif (score >= 80) {\n    console.log('ごうかく');\n} else {\n    // それ以外の場合\n    console.log('ざんねん');\n}",
      "holeyCode": "// 数字を入れるので、number と入力しましょう\n___\n// 80点以上なら「ごうかく」、そうでなければ（else）\n___\n    ___\n___\n    // ざんねん を使いましょう\n    ___\n___",
      "correctLines": [
        
        
        "// 数字を入れるので、number と入力しましょう",
        "const score: number = 75;",
        "// 80点以上なら「ごうかく」、そうでなければ（else）",
        "if (score >= 80) {",
        "    console.log('ごうかく');",
        "} else {",
        "    // ざんねん を使いましょう",
        "    console.log('ざんねん');",
        "}"
      ],
      "lineHints": [
        null,
        "数字を入れるので `number` ラベルを貼ります。",
        null,
        null,
        null,
        "「そうでなければ」は `else` です。",
        null,
        null,
        null
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
          "title": "繰り返し（ループ）とは？",
          "image": "/illustrations/common/loop.png",
          "content": "# 同じ作業を自動化！\n\n同じことを何回も繰り返すのは大変ですよね。プログラミングでは **ループ** という仕組みを使って、コンピュータに「全部やっておいて！」とお願いできます。"
        },
        {
          "title": "種類を予想してくれる機能",
          "image": "/illustrations/common/loop.png",
          "content": "# 型の予想（すいろん）\n\nTypeScriptはとても賢いので、配列に貼られたラベルを見て、中から取り出したデータの種類も自動で「きっとこれです！」と予想してくれるのです。\n\n**コード例：**\n```typescript\nconst animals: string[] = ['いぬ', 'ねこ'];\nfor (const animal of animals) {\n    console.log(animal);\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 配列を作る\nconst names: string[] = ['たろう', 'はなこ'];\n// 順番にループする\nfor (const name of names) {\n    console.log(name);\n}",
      "holeyCode": "___",
      "correctLines": [
        ""// 文字の配列なので、string と入力しましょう",\n        "const names: string["
      ] = ['たろう', 'はなこ'];",
        "// name と names を入力して、配列から順番に取り出しましょう",
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
          "title": "オリジナルの型とは？",
          "image": "/illustrations/common/dict.png",
          "content": "# 自分だけのルールを作る\n\n「名前（文字）」と「年齢（数字）」のように、複数の情報をセットにした自分だけの新しいラベルを作ることができます。これが **カスタム型** です。"
        },
        {
          "title": "ラベルの組み合わせ（Type Alias）",
          "image": "/illustrations/common/dict.png",
          "content": "# type（タイプ）キーワード\n\n`type` という言葉を使って、新しいラベルの名前を決められます。\n\n**コード例：**\n```typescript\ntype Pet = { type: string; name: string };\nconst myPet: Pet = { type: 'いぬ', name: 'ポチ' };\nconsole.log(myPet.name);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// Userという名前のラベルを作る\ntype User = { name: string };\n// Userラベルを貼ったはこを作る\nconst user: User = { name: 'たろう' };\n// 中身を出す\nconsole.log(user.name);",
      "holeyCode": "// Userという名前のラベルを作る（nameはstring）\n___\n// Userラベルを貼ったはこを作る\n___\n// 変数 name の中身を表示しましょう\n___",
      "correctLines": [
        
        
        "// Userという名前のラベルを作る（nameはstring）",
        "type User = { name: string };",
        "// Userラベルを貼ったはこを作る",
        "const user: User = { name: 'たろう' };",
        "// 変数 name の中身を表示しましょう",
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
      "description": "新しい関数を作りましょうとき、受け取るデータにラベルを貼ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "関数（かんすう）とは？",
          "image": "/illustrations/common/function.png",
          "content": "# オリジナルの命令\n\nよく使う手順をひとまとめにして、自分だけの新しい命令を作ることができます。一度作っておけば、いつでも呼び出して使えます。"
        },
        {
          "title": "入り口のラベル",
          "image": "/illustrations/common/function.png",
          "content": "# 引数（ひきすう）にラベルを貼ります\n\n関数が受け取るデータのことを **引数（ひきすう）** と呼びます。もラベルを貼ることで、間違ったデータを渡さなくなるので安心です！\n\n**コード例：**\n```typescript\nfunction sayHello(msg: string) {\n    console.log(`メッセージ: ${msg}`);\n}\nsayHello('ヤッホー');\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 受け取るデータのラベルを指定する\nfunction greet(name: string) {\n    console.log(`こんにちは、${name}`);\n}\n// 関数を実行する\ngreet('TypeScript');",
      "holeyCode": "// name は文字なので string と入力しましょう\n___\n    ___\n___\n// 関数を実行する\n___",
      "correctLines": [
        
        
        "// name は文字なので string と入力しましょう",
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
          "title": "戻り値（もどりち）とは？",
          "content": "# 関数の結果\n\n関数が仕事を終えたあとに返してくれる結果を **戻り値（もどりち）** と呼びます。計算結果などを返すことができます。"
        },
        {
          "title": "void（ボイド）ラベル",
          "image": "/illustrations/common/function.png",
          "content": "# 何も返さないときは void です\n\n結果などを「返さない」関数には、`void`（ボイド）というラベルを貼ります。これは「空っぽ」という意味です。\n\n**コード例：**\n```typescript\n function logger(text: string): void {\n    console.log(`LOG: ${text}`);\n}\nlogger('処理開始');\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 何も返さないときは void ラベル\nfunction showDate(): void {\n    console.log('今日の日付');\n}\n// 関数を実行する\nshowDate();",
      "holeyCode": "// なにも返さないときは void と入力しましょう\n___\n    ___\n___\n// 関数を実行する\n___",
      "correctLines": [
        
        
        "// なにも返さないときは void と入力しましょう",
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
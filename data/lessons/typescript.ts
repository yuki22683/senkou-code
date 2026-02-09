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
      "correctCode": "// messageに'こんにちは TS'を代入（型: string）\\nconst message: string = 'こんにちは TS';\\n// はこの中身を出す\\nconsole.log(message);",
      "holeyCode": "// messageに'こんにちは TS'を代入（型: string）\\nconst message: ___ = '___';\\n// はこの中身を出す\\nconsole.log(___);",
      "correctLines": [
          "// messageに'こんにちは TS'を代入（型: string）",
          "const message: string = 'こんにちは TS';",
          "// はこの中身を出す",
          "console.log(message);"
        ],
      "lineHints": [
          null,
          "文字列型を表す型注釈と、代入する文字列リテラルを指定します。",
          null,
          "変数の値を出力するために変数名を渡します。"
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
            "こんにちは TS"
          ],
          "others": []
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
      "correctCode": "// 数字を入れるためのラベルのはこを作る\\nconst x: number = 10;\\n// yにも同じラベルを貼る\\nconst y: number = 5;\\n// たし算した答えを出す\\nconsole.log(x + y);",
      "holeyCode": "// 数字を入れるためのラベルのはこを作る\\nconst x: ___ = 10;\\n// yにも同じラベルを貼る\\nconst y: ___ = 5;\\n// たし算した答えを出す\\nconsole.log(x ___ y);",
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
          "x に `number` ラベルを貼ります。",
          null,
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
            "expected_output": "15\\n"
          }
        ]
      },
    {
      "title": "剰余演算子（%）",
      "correctCode": "// 10 を 3 で割ったあまりを出力する\\nconsole.log(10 % 3);",
      "holeyCode": "// 10 を 3 で割ったあまりを出力する\\nconsole.log(10 ___ 3);",
      "correctLines": [
          "// 10 を 3 で割ったあまりを出力する",
          "console.log(10 % 3);"
        ],
      "lineHints": [
          null,
          "あまりを求める % 演算子を使います。"
        ],
        "candidates": {
          "operators": [
            "%",
            "+",
            "-",
            "*",
            "/"
          ]
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
      "correctCode": "// scoreに50を入れる\\nlet score: number = 50;\\n// 10点プラスする\\nscore += 10;\\n// scoreを表示\\nconsole.log(score);",
      "holeyCode": "// scoreに50を入れる\\nlet score: number = ___ ;\\n// 10点プラスする\\nscore ___ 10;\\n// scoreを表示\\n___(score);",
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
          "変数に代入する数値を指定します。",
          null,
          "変数の値を計算して、その結果を同じ変数に再代入します。",
          null,
          "console.log で結果を表示します。"
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
          "others": ["50;", "console.log"]
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
      "correctCode": "// age というはこに 10 を入れる\\nconst age: number = 10;\\n// 文章の中に中身を入れる\\nconsole.log(`私は${age}歳です`);",
      "holeyCode": "// age というはこに 10 を入れる\\nconst age: ___ = 10;\\n// 文章の中に中身を入れる\\nconsole.log(`私は${___}歳です`);",
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
          "コンソールに文字列を出力します。"
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
          ],
          "others": ["年齢"]
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
      "correctCode": "// 文字列のラベルがついた配列を作る\\nconst colors: string[] = ['あか', 'あお'];\\n// 2番目のデータ（インデックス1）を出す\\nconsole.log(colors[1]);",
      "holeyCode": "// 文字列のラベルがついた配列を作る\\nconst colors: ___[] = ['あか', 'あお'];\\n// 2番目のデータ（インデックス1）を出す\\nconsole.log(colors[___]);",
      "correctLines": [
          "// 文字列のラベルがついた配列を作る",
          "const colors: string[] = ['あか', 'あお'];",
          "// 2番目のデータ（インデックス1）を出す",
          "console.log(colors[1]);"
        ],
      "lineHints": [
          null,
          "文字の配列なので `string` です。",
          null,
          "2番目のデータはインデックス1です。"
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
            "expected_output": "あお\\n"
          }
        ]
      },
    {
      "title": "「はい」か「いいえ」のラベル",
      "correctCode": "// 真偽値（はい/いいえ）を入れるためのラベルを貼る\\nconst isAdult: boolean = true;\\n// もし 正しかったら（trueなら）\\nif (isAdult) {\\n    // メッセージ（'おとなです'）\\n    console.log('おとなです');\\n}",
      "holeyCode": "// 真偽値（はい/いいえ）を入れるためのラベルを貼る\\nconst isAdult: ___ = true;\\n// もし 正しかったら（trueなら）\\nif (___) {\\n    // メッセージ（'おとなです'）\\n    console.log('___');\\n___",
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
          "ラベルの名前は `boolean` です。",
          null,
          "関数を呼び出すために関数名を指定します。",
          null,
          "console.log で結果を表示します。",
          "この行を正しく入力してください。"
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
          ],
          "others": ["おとなです", "}"]
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
      "correctCode": "// score というはこに 75 を入れる\\nconst score: number = 75;\\n// 80以上かを比較する演算子\\nif (score >= 80) {\\n    // 80点以上のときのメッセージ（'ごうかく'）\\n    console.log('ごうかく');\\n// 「そうでなければ」を表すキーワード\\n} else {\\n    // それ以外の場合（'ざんねん'）\\n    console.log('ざんねん');\\n}",
      "holeyCode": "// score というはこに 75 を入れる\\nconst score: ___ = 75;\\n// 80以上かを比較する演算子\\nif (score ___ 80) {\\n    // 80点以上のときのメッセージ（'ごうかく'）\\n    console.log('___');\\n// 「そうでなければ」を表すキーワード\\n} ___ {\\n    // それ以外の場合（'ざんねん'）\\n    console.log('___');\\n___",
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
          "数字を入れるので `number` ラベルを貼ります。",
          null,
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          null,
          "コンソールに文字列を出力します。",
          null,
          "もし条件が満たされなかった場合に実行する処理を記述します。",
          null,
          "コンソールに文字列を出力します。",
          "この行を正しく入力してください。"
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
          ],
          "others": [">=", "ごうかく", "ざんねん", "}"]
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
      "correctCode": "// scoreに85を入れる\\nconst score: number = 85;\\n// 80以上 かつ 100以下 ならメッセージを出す\\nif (score >= 80 && score <= 100) {\\n    // 結果を出力\\n    console.log('ごうかく');\\n}",
      "holeyCode": "// scoreに85を入れる\\nconst score: number = ___ ;\\n// 80以上 かつ 100以下 ならメッセージを出す\\nif (score >= 80 ___ score <= 100) {\\n    // 結果を出力\\n    console.log('___');\\n___",
      "correctLines": [
          "// scoreに85を入れる",
          "const score: number = 85;",
          "// 80以上 かつ 100以下 ならメッセージを出す",
          "if (score >= 80 && score <= 100) {",
          "    // 結果を出力",
          "    console.log('ごうかく');",
          "}"
        ],
      "lineHints": [
          null,
          "scoreの初期値を設定します。",
          null,
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          null,
          "コンソールに文字列を出力します。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "&&",
            "||"
          ],
          "numbers": [
            "85"
          ],
          "strings": [
            "ごうかく"
          ],
          "others": ["85;", "}"]
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
      "correctCode": "// 配列を作る（'たろう', 'はなこ'の順）\\nconst names: string[] = ['たろう', 'はなこ'];\\n// 順番にループする\\nfor (const name of names) {\\n    console.log(name);\\n}",
      "holeyCode": "// 配列を作る（'たろう', 'はなこ'の順）\\nconst names: ___[] = ['___', '___'];\\n// 順番にループする\\nfor (const ___ of ___) {\\n    ___(name);\\n___",
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
          "文字の配列なので `string[]` です。",
          null,
          "指定された回数や範囲で、繰り返し処理（ループ）を行います。",
          "console.log で結果を表示します。",
          "この行を正しく入力してください。"
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
      "title": "自分だけのラベルを作ってみましょう",
      "correctCode": "// User型を定義（nameはstring）\\ntype User = { name: string };\\n// userに{ name: 'たろう' }を代入\\nconst user: User = { name: 'たろう' };\\n// nameプロパティを出す\\nconsole.log(user.name);",
      "holeyCode": "// User型を定義（nameはstring）\\ntype User = { name: ___ };\\n// userに{ name: 'たろう' }を代入\\nconst user: ___ = { name: 'たろう' };\\n// nameプロパティを出す\\nconsole.log(user.___);",
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
            "expected_output": "たろう\\n"
          }
        ]
      },
    {
      "title": "関数の「入り口」にラベルをはりましょう",
      "correctCode": "// 受け取るデータのラベルを指定する\\nfunction greet(name: string) {\\n    console.log(`こんにちは、${name}`);\\n}\\n// 関数を実行する\\ngreet('TypeScript');",
      "holeyCode": "// 受け取るデータのラベルを指定する\\nfunction greet(name: ___) {\\n    ___(`こんにちは、${name}`);\\n___\\n// 関数を実行する\\n___",
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
          "受け取る `name` は文字なので `string` です。",
          "console.log で結果を表示します。",
          "この行を正しく入力してください。",
          null,
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "greet",
            "console.log"
          ],
          "strings": [
            "string"
          ],
          "others": ["greet('TypeScript');", "}"]
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
      "correctCode": "// 何も返さないときに使うラベル\\nfunction showDate(): void {\\n    console.log('今日の日付');\\n}\\n// 関数を実行する\\nshowDate();",
      "holeyCode": "// 何も返さないときに使うラベル\\nfunction showDate(): ___ {\\n    ___('今日の日付');\\n___\\n// 関数を実行する\\n___",
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
          "戻り値がないことを示す型注釈です。",
          "console.log で結果を表示します。",
          "この行を正しく入力してください。",
          null,
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "showDate",
            "console.log"
          ],
          "strings": [
            "void"
          ],
          "others": ["showDate();", "}"]
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

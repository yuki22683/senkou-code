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
      "holeyCode": "// 画面に「Hello, JavaScript!」と出す関数\\n___.___('___');",
      "correctLines": [
          "// 画面に「Hello, JavaScript!」と出す関数",
          "console.log('Hello, JavaScript!');"
        ],
      "lineHints": [
          null,
          "consoleオブジェクトのlogメソッドを使って「Hello, JavaScript!」を画面に出力します。"
        ],
        "candidates": {
          "functions": [
            "console.log"
          ],
          "strings": [
            "Hello, JavaScript!"
          ],
          "others": ["log", "console"]
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
      "holeyCode": "// nameに'JavaScript'を代入\\nconst ___ = '___';\\n// はこの中身を出す\\n___.___(___);",
      "correctLines": [
          "// nameに'JavaScript'を代入",
          "const name = 'JavaScript';",
          "// はこの中身を出す",
          "console.log(name);"
        ],
      "lineHints": [
          null,
          "変数名nameを宣言し、文字列「JavaScript」を代入します。",
          null,
          "consoleオブジェクトのlogメソッドで変数nameの中身を出力します。"
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
          ],
          "others": ["console", "log"]
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
      "holeyCode": "// xに10を入れる\\nconst ___ = ___;\\n// yに5を入れる\\nconst ___ = ___;\\n// x + y を表示する\\n___.___(___ + ___);",
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
          "変数名xを宣言し、数値10を代入します。",
          null,
          "変数名yを宣言し、数値5を代入します。",
          null,
          "consoleオブジェクトのlogメソッドで、xとyを+演算子で足した結果を出力します。"
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
          "others": ["console", "log"]
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
      "holeyCode": "// age というはこに 10 を入れる\\nconst ___ = ___;\\n// 文章の中に age の中身を入れる\\n___.___(`私は${___}歳です`);",
      "correctLines": [
          "// age というはこに 10 を入れる",
          "const age = 10;",
          "// 文章の中に age の中身を入れる",
          "console.log(`私は${age}歳です`);"
        ],
      "lineHints": [
          null,
          "変数名ageを宣言し、数値10を代入します。",
          null,
          "consoleオブジェクトのlogメソッドで、テンプレートリテラル内で変数ageを展開して出力します。"
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
          "others": ["console", "log"]
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
      "holeyCode": "// colorsに['あか', 'あお']を代入\\nconst ___ = ['___', '___'];\\n// 2番目のデータ（インデックス1）を出す\\n___.___(___);",
      "correctLines": [
          "// colorsに['あか', 'あお']を代入",
          "const colors = ['あか', 'あお'];",
          "// 2番目のデータ（インデックス1）を出す",
          "console.log(colors[1]);"
        ],
      "lineHints": [
          null,
          "変数名colorsを宣言し、配列['あか', 'あお']を代入します。",
          null,
          "consoleオブジェクトのlogメソッドでcolors[1]（2番目の要素）を出力します。"
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
          "others": ["console", "log", "colors[1]"]
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
      "holeyCode": "// score に 100 を入れる\\nconst ___ = ___;\\n// もし 80 より大きかったら\\nif (___ ___ ___) {\\n    // 「ごうかく！」と表示する\\n    ___.___(___);\\n___",
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
          "変数名scoreを宣言し、数値100を代入します。",
          null,
          "変数scoreが80より大きいかを>演算子で比較します。",
          null,
          "consoleオブジェクトのlogメソッドで文字列「ごうかく！」を出力します。",
          "閉じ括弧}を入力してブロックを閉じます。"
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
            "100",
            "80"
          ],
          "others": ["console", "log", "}", "'ごうかく！'"]
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
      "holeyCode": "// age に 10 を入れる\\nconst ___ = ___;\\n// 20以上かを比較する演算子\\nif (___ ___ ___) {\\n    // 20歳以上のときのメッセージ（'おとな'）\\n    ___.___(___);\\n// 「そうでなければ」を表すキーワード\\n} ___ {\\n    // それ以外の場合（'こども'）\\n    ___.___(___);\\n___",
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
          "変数名ageを宣言し、数値10を代入します。",
          null,
          "変数ageが20以上かを>=演算子で比較します。",
          null,
          "consoleオブジェクトのlogメソッドで文字列「おとな」を出力します。",
          null,
          "条件が偽の場合に実行するelseブロックです。",
          null,
          "consoleオブジェクトのlogメソッドで文字列「こども」を出力します。",
          "閉じ括弧}を入力してブロックを閉じます。"
        ],
        "candidates": {
          "variables": [
            "age"
          ],
          "functions": [
            "console.log"
          ],
          "strings": [
            "こども",
            "おとな"
          ],
          "numbers": [
            "10",
            "20"
          ],
          "keywords": [
            "else"
          ],
          "others": ["console", "log", ">=", "}", "'おとな'", "'こども'"]
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
      "holeyCode": "// 配列を作る（'たろう', 'はなこ'の順）\\nconst ___ = ['___', '___'];\\n// 順番に取り出すループ\\nfor (const ___ of ___) {\\n    // 取り出した名前を表示\\n    ___.___(___)\\n___",
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
          "変数名namesを宣言し、配列['たろう', 'はなこ']を代入します。",
          null,
          "for...of文で配列namesから要素を変数nameに順番に取り出します。",
          null,
          "consoleオブジェクトのlogメソッドで変数nameを出力します。",
          "閉じ括弧}を入力してブロックを閉じます。"
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
            "たろう",
            "はなこ"
          ],
          "others": ["console", "log", "}"]
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
      "holeyCode": "// オブジェクトを作る（nameは'たろう'）\\nconst ___ = { ___: '___' };\\n// nameプロパティを取り出す\\n___.___(___.___);",
      "correctLines": [
          "// オブジェクトを作る（nameは'たろう'）",
          "const user = { name: 'たろう' };",
          "// nameプロパティを取り出す",
          "console.log(user.name);"
        ],
      "lineHints": [
          null,
          "変数名userを宣言し、プロパティnameに「たろう」を持つオブジェクトを代入します。",
          null,
          "consoleオブジェクトのlogメソッドでuser.nameプロパティを出力します。"
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
          "others": ["console", "log"]
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
      "holeyCode": "// greet という関数を定義する（'こんにちは'と表示）\\nfunction ___() {\\n    // 'こんにちは'と表示\\n    ___.___(___);\\n___\\n// 関数を動かす\\n___();",
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
          "関数名greetでfunctionを定義します。",
          null,
          "consoleオブジェクトのlogメソッドで文字列「こんにちは」を出力します。",
          "閉じ括弧}を入力して関数定義を閉じます。",
          null,
          "関数greetを呼び出して実行します。"
        ],
        "candidates": {
          "functions": [
            "greet",
            "console.log"
          ],
          "strings": [
            "こんにちは"
          ],
          "others": ["console", "log", "}", "'こんにちは'"]
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
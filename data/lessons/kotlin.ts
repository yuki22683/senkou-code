export const kotlinData = {
  "language": "kotlin",
  "lessonId": "kotlin-1",
  "lessonTitle": "Kotlin (コトリン) に挑戦！",
  "lessonDescription": "Android（アンドロイド）スマホのアプリ作りなどで大人気の言葉「Kotlin（コトリン）」のきほんを学びましょう。新しくて使いやすい機能がたくさんあります。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "correctCode": "// println で出力する\\nprintln(\"Hello, World!\")",
      "holeyCode": "// println で出力する\\n___(\"Hello, World!\")",
      "correctLines": [
          "// println で出力する",
          "println(\"Hello, World!\")"
        ],
      "lineHints": [
          null,
          "関数は println です。 L ではなく 小文字の l（エル）です。"
        ],
        "candidates": {
          "functions": [
            "println"
          ],
          "strings": [
            "\"Hello, World!\""
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello, World!\\n"
          }
        ]
      },
    {
      "title": "便利な「はこ」変数（へんすう）",
      "correctCode": "// x に 10 を入れる\\nval x = 10\\n// y に 5 を入れる\\nval y = 5\\n// + でたし算する\\nprintln(x + y)",
      "holeyCode": "// x に 10 を入れる\\nval x = ___\\n// y に 5 を入れる\\nval y = ___\\n// + でたし算する\\n___(x + y)",
      "correctLines": [
          "// x に 10 を入れる",
          "val x = 10",
          "// y に 5 を入れる",
          "val y = 5",
          "// + でたし算する",
          "println(x + y)"
        ],
      "lineHints": [
          null,
          "変数xに代入する整数値です。",
          null,
          "変数yに代入する整数値です。",
          null,
          "たし算なので + を使います。"
        ],
        "candidates": {
          "numbers": [
            "10",
            "5"
          ],
          "operators": [
            "+",
            "-",
            "*",
            "/"
          ],
          "others": ["println", "10", "5"]
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
      "correctCode": "// 10 を 3 で割ったあまりを出力する\\nprintln(10 % 3)",
      "holeyCode": "// 10 を 3 で割ったあまりを出力する\\n___(10 % 3)",
      "correctLines": [
          "// 10 を 3 で割ったあまりを出力する",
          "println(10 % 3)"
        ],
      "lineHints": [
          null,
          "あまりを求める `%` 演算子を使います。"
        ],
        "candidates": {
          "operators": [
            "%",
            "/",
            "*",
            "-"
          ],
          "others": ["println"]
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
      "correctCode": "// var で変更可能な変数を作る\\nvar hp = 100\\n// += で 20 を足す\\nhp += 20\\n// -= で 50 を引く\\nhp -= 50\\nprintln(hp)",
      "holeyCode": "// var で変更可能な変数を作る\\nvar ___ = 100\\n// += で 20 を足す\\nhp += ___\\n// -= で 50 を引く\\nhp -= ___\\nprintln(___)",
      "correctLines": [
          "// var で変更可能な変数を作る",
          "var hp = 100",
          "// += で 20 を足す",
          "hp += 20",
          "// -= で 50 を引く",
          "hp -= 50",
          "println(hp)"
        ],
      "lineHints": [
          null,
          "変数hpを宣言し、100を設定します。",
          null,
          "変数hpに20を加算して再代入する。",
          null,
          "変数hpから50を減算して再代入する。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "+=",
            "-=",
            "*=",
            "/="
          ],
          "others": ["hp", "20", "50", "20", "50"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "70\\n"
          }
        ]
      },
    {
      "title": "「もし〜なら」で分けましょう",
      "correctCode": "// score に 100 を入れる\\nval score = 100\\n// > で比較する\\nif (score > 80) {\\n    println(\"すごい！\")\\n}",
      "holeyCode": "// score に 100 を入れる\\nval score = ___\\n// > で比較する\\nif (score ___ 80) {\\n    ___(\"すごい！\")\\n___",
      "correctLines": [
          "// score に 100 を入れる",
          "val score = 100",
          "// > で比較する",
          "if (score > 80) {",
          "    println(\"すごい！\")",
          "}"
        ],
      "lineHints": [
          null,
          "変数scoreに代入する値です。",
          null,
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "numbers": [
            "100"
          ],
          "operators": [
            ">",
            "<",
            ">=",
            "<="
          ],
          "others": ["println", "}", "100"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "すごい！\\n"
          }
        ]
      },
    {
      "title": "論理演算子（&&、||）",
      "correctCode": "val score = 80\\nval bonus = 10\\n// && で両方の条件をチェック\\nif (score >= 70 && bonus > 0) {\\n    println(\"ボーナス合格！\")\\n}",
      "holeyCode": "val score = ___\\nval bonus = ___\\n// && で両方の条件をチェック\\nif (score >= ___ && bonus > 0) {\\n    ___(\"ボーナス合格！\")\\n___",
      "correctLines": [
          "val score = 80",
          "val bonus = 10",
          "// && で両方の条件をチェック",
          "if (score >= 70 && bonus > 0) {",
          "    println(\"ボーナス合格！\")",
          "}"
        ],
      "lineHints": [
          "定数scoreを宣言し、80を設定します。",
          "ここを正しく入力してください。",
          null,
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "&&",
            "||",
            "&",
            "|"
          ],
          "others": ["80", "10", "70", "println", "}", "80", "10"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ボーナス合格！\\n"
          }
        ]
      },
    {
      "title": "たくさんのデータをまとめましょう「リスト」",
      "correctCode": "// colors というリストを作る（'あか', 'あお'の順）\\nval colors = listOf(\"あか\", \"あお\")\\n// 2番目のデータ（インデックス1）を出す\\nprintln(colors[1])",
      "holeyCode": "// colors というリストを作る（'あか', 'あお'の順）\\n___ colors = listOf(\"___\", \"あお\")\\n// 2番目のデータ（インデックス1）を出す\\n___(colors[1])",
      "correctLines": [
          "// colors というリストを作る（'あか', 'あお'の順）",
          "val colors = listOf(\"あか\", \"あお\")",
          "// 2番目のデータ（インデックス1）を出す",
          "println(colors[1])"
        ],
      "lineHints": [
          null,
          "listOf関数でリストを作成し、要素を順番に渡します。",
          null,
          "2番目のデータはインデックス1です。 `colors[1]` と入力してください。"
        ],
        "candidates": {
          "variables": [
            "colors"
          ],
          "functions": [
            "println",
            "listOf"
          ],
          "strings": [
            "あか",
            "あお"
          ],
          "numbers": [
            "1"
          ],
          "others": ["val"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "あお\\n"
          }
        ]
      },
    {
      "title": "名前で引き出す「辞書」",
      "correctCode": "// 辞書を作る（キーは'みかん'、値は'オレンジ'）\\nval colors = mapOf(\"みかん\" to \"オレンジ\")\\n// 中身を出す\\nprintln(colors[\"みかん\"])",
      "holeyCode": "// 辞書を作る（キーは'みかん'、値は'オレンジ'）\\n___ colors = mapOf(\"___\" to \"オレンジ\")\\n// 中身を出す\\n___(colors[\"みかん\"])",
      "correctLines": [
          "// 辞書を作る（キーは'みかん'、値は'オレンジ'）",
          "val colors = mapOf(\"みかん\" to \"オレンジ\")",
          "// 中身を出す",
          "println(colors[\"みかん\"])"
        ],
      "lineHints": [
          null,
          "mapOf関数でキーと値のペアを作成します。toで対応付けます。",
          null,
          "[]でキーを指定して辞書から値を取り出します。"
        ],
        "candidates": {
          "variables": [
            "colors"
          ],
          "functions": [
            "println",
            "mapOf"
          ],
          "strings": [
            "みかん",
            "オレンジ"
          ],
          "others": ["val"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "オレンジ\\n"
          }
        ]
      }
  ]
};
export const swiftData = {
  "language": "swift",
  "lessonId": "swift-1",
  "lessonTitle": "Swift (スウィフト) に挑戦！",
  "lessonDescription": "iPhone（アイフォーン）のアプリ作りなどで使われる言葉「Swift（スウィフト）」のきほんを学びましょう。きれいで分かりやすいプログラムを作れるようになります。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "correctCode": "// Hello, World!と出力する関数\\nprint(\"Hello, World!\")",
      "holeyCode": "// Hello, World!と出力する関数\\n___(\"Hello, World!\")",
      "correctLines": [
          "// Hello, World!と出力する関数",
          "print(\"Hello, World!\")"
        ],
      "lineHints": [
          null,
          "画面に出す関数は `print` です。"
        ],
        "candidates": {
          "functions": [
            "print"
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
      "correctCode": "// x に 10 を入れる\\nlet x = 10\\n// y に 5 を入れる\\nlet y = 5\\n// + でたし算する\\nprint(x + y)",
      "holeyCode": "// x に 10 を入れる\\nlet ___ = 10\\n// y に 5 を入れる\\nlet ___ = 5\\n// + でたし算する\\nprint(x + ___)",
      "correctLines": [
          "// x に 10 を入れる",
          "let x = 10",
          "// y に 5 を入れる",
          "let y = 5",
          "// + でたし算する",
          "print(x + y)"
        ],
      "lineHints": [
          null,
          "再代入可能な変数を宣言し、数値を代入します。",
          null,
          "再代入可能な変数を宣言し、数値を代入します。",
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
          "others": ["x", "y"]
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
      "correctCode": "// 10 を 3 で割ったあまりを出力する\\nprint(10 % 3)",
      "holeyCode": "// 10 を 3 で割ったあまりを出力する\\nprint(___ % 3)",
      "correctLines": [
          "// 10 を 3 で割ったあまりを出力する",
          "print(10 % 3)"
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
          "others": ["10"]
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
      "correctCode": "// var で変更可能な変数を作る\\nvar hp = 100\\n// += で 20 を足す\\nhp += 20\\n// -= で 50 を引く\\nhp -= 50\\nprint(hp)",
      "holeyCode": "// var で変更可能な変数を作る\\nvar ___ = 100\\n// += で 20 を足す\\nhp += ___\\n// -= で 50 を引く\\nhp -= ___\\nprint(___)",
      "correctLines": [
          "// var で変更可能な変数を作る",
          "var hp = 100",
          "// += で 20 を足す",
          "hp += 20",
          "// -= で 50 を引く",
          "hp -= 50",
          "print(hp)"
        ],
      "lineHints": [
          null,
          "変数hpを宣言し、100を設定します。",
          null,
          "変数hpに20を加算して再代入する。",
          null,
          "変数hpから50を減算して再代入する。",
          "変数の内容を画面に出力します。"
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
      "correctCode": "// score に 100 を入れる\\nlet score = 100\\n// > で比較する\\nif score > 80 {\\n    print(\"すごい！\")\\n}",
      "holeyCode": "// score に 100 を入れる\\nlet ___ = 100\\n// > で比較する\\nif score ___ 80 {\\n    ___(\"すごい！\")\\n___",
      "correctLines": [
          "// score に 100 を入れる",
          "let score = 100",
          "// > で比較する",
          "if score > 80 {",
          "    print(\"すごい！\")",
          "}"
        ],
      "lineHints": [
          null,
          "再代入可能な変数を宣言し、数値を代入します。",
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
          "others": ["score", "print", "}"]
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
      "correctCode": "let score = 80\\nlet bonus = 10\\n// && で両方の条件をチェック\\nif score >= 70 && bonus > 0 {\\n    print(\"ボーナス合格！\")\\n}",
      "holeyCode": "let ___ = 80\\nlet ___ = 10\\n// && で両方の条件をチェック\\nif score ___ 70 && bonus > 0 {\\n    ___(\"ボーナス合格！\")\\n___",
      "correctLines": [
          "let score = 80",
          "let bonus = 10",
          "// && で両方の条件をチェック",
          "if score >= 70 && bonus > 0 {",
          "    print(\"ボーナス合格！\")",
          "}"
        ],
      "lineHints": [
          "定数scoreを宣言し、80を設定します。",
          "再代入可能な変数を宣言し、数値を代入します。",
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
          "others": ["score", "bonus", ">=", "print", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ボーナス合格！\\n"
          }
        ]
      },
    {
      "title": "たくさんのデータをまとめましょう「配列」",
      "correctCode": "// colors という配列を作る（'あか', 'あお'の順）\\nlet colors = [\"あか\", \"あお\"]\\n// 2番目のデータ（インデックス1）を出す\\nprint(colors[1])",
      "holeyCode": "// colors という配列を作る（'あか', 'あお'の順）\\nlet ___ = [\"あか\", \"あお\"]\\n// 2番目のデータ（インデックス1）を出す\\nprint(colors[___])",
      "correctLines": [
          "// colors という配列を作る（'あか', 'あお'の順）",
          "let colors = [\"あか\", \"あお\"]",
          "// 2番目のデータ（インデックス1）を出す",
          "print(colors[1])"
        ],
      "lineHints": [
          null,
          "[\"あか\", \"あお\"] と入力しましょう。",
          null,
          "2番目のデータはインデックス1です。 `colors[1]` と入力してください。"
        ],
        "candidates": {
          "variables": [
            "colors"
          ],
          "functions": [
            "print"
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
            "expected_output": "あお\\n"
          }
        ]
      },
    {
      "title": "名前で引き出す「辞書」",
      "correctCode": "// 辞書を作る（キーは'みかん'、値は'オレンジ'）\\nlet colors = [\"みかん\": \"オレンジ\"]\\n// 中身を出す\\nprint(colors[\"みかん\"]!)",
      "holeyCode": "// 辞書を作る（キーは'みかん'、値は'オレンジ'）\\nlet ___ = [\"みかん\": \"オレンジ\"]\\n// 中身を出す\\nprint(colors[\"___\"]!)",
      "correctLines": [
          "// 辞書を作る（キーは'みかん'、値は'オレンジ'）",
          "let colors = [\"みかん\": \"オレンジ\"]",
          "// 中身を出す",
          "print(colors[\"みかん\"]!)"
        ],
      "lineHints": [
          null,
          "[\"みかん\": \"オレンジ\"] と入力しましょう。",
          null,
          "colors[\"みかん\"]! と入力しましょう。"
        ],
        "candidates": {
          "variables": [
            "colors"
          ],
          "functions": [
            "print"
          ],
          "strings": [
            "みかん",
            "オレンジ"
          ]
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
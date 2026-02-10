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
      "holeyCode": "// Hello, World!と出力する関数\\n___(___)",
      "correctLines": [
          "// Hello, World!と出力する関数",
          "print(\"Hello, World!\")"
        ],
      "lineHints": [
          null,
          "画面に出す関数は `print` で、引数に `\"Hello, World!\"` を渡します。"
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
      "holeyCode": "// x に 10 を入れる\\nlet ___ = ___\\n// y に 5 を入れる\\nlet ___ = ___\\n// + でたし算する\\n___(___ ___ ___)",
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
          "変数 `x` を宣言し、`10` を代入します。",
          null,
          "変数 `y` を宣言し、`5` を代入します。",
          null,
          "`print` 関数で `x + y` の結果を出力します。"
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
          "others": ["x", "y", "print"]
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
      "holeyCode": "// 10 を 3 で割ったあまりを出力する\\n___(___ ___ ___)",
      "correctLines": [
          "// 10 を 3 で割ったあまりを出力する",
          "print(10 % 3)"
        ],
      "lineHints": [
          null,
          "`print` で `10 % 3` を出力します。`%` はあまりを求める演算子です。"
        ],
        "candidates": {
          "operators": [
            "%",
            "/",
            "*",
            "-"
          ],
          "others": ["10", "3", "print"]
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
      "holeyCode": "// var で変更可能な変数を作る\\nvar ___ = ___\\n// += で 20 を足す\\n___ ___ ___\\n// -= で 50 を引く\\n___ ___ ___\\n___(___)",
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
          "変数 `hp` を宣言し、`100` を設定します。",
          null,
          "`hp += 20` で変数hpに20を加算して再代入します。",
          null,
          "`hp -= 50` で変数hpから50を減算して再代入します。",
          "`print(hp)` で変数の内容を出力します。"
        ],
        "candidates": {
          "operators": [
            "+=",
            "-=",
            "*=",
            "/="
          ],
          "others": ["hp", "100", "20", "50", "print"]
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
      "holeyCode": "// score に 100 を入れる\\nlet ___ = ___\\n// > で比較する\\nif ___ ___ ___ ___\\n    ___(___)\\n___",
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
          "変数 `score` を宣言し、`100` を代入します。",
          null,
          "`if score > 80 {` で score が 80 より大きいか判定します。",
          "`print(\"すごい！\")` でメッセージを出力します。",
          "`}` でブロックを閉じます。"
        ],
        "candidates": {
          "numbers": [
            "100",
            "80"
          ],
          "operators": [
            ">",
            "<",
            ">=",
            "<="
          ],
          "others": ["score", "print", "}", "{", "\"すごい！\""]
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
      "holeyCode": "let ___ = ___\\nlet ___ = ___\\n// && で両方の条件をチェック\\nif ___ ___ ___ ___ ___ ___ ___ ___\\n    ___(___)\\n___",
      "correctLines": [
          "let score = 80",
          "let bonus = 10",
          "// && で両方の条件をチェック",
          "if score >= 70 && bonus > 0 {",
          "    print(\"ボーナス合格！\")",
          "}"
        ],
      "lineHints": [
          "定数 `score` を宣言し、`80` を設定します。",
          "定数 `bonus` を宣言し、`10` を設定します。",
          null,
          "`if score >= 70 && bonus > 0 {` で両方の条件をチェックします。",
          "`print(\"ボーナス合格！\")` でメッセージを出力します。",
          "`}` でブロックを閉じます。"
        ],
        "candidates": {
          "operators": [
            "&&",
            "||",
            ">=",
            ">",
            "<"
          ],
          "others": ["score", "bonus", "70", "0", "80", "10", "print", "}", "{", "\"ボーナス合格！\""]
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
      "holeyCode": "// colors という配列を作る（'あか', 'あお'の順）\\nlet ___ = ___\\n// 2番目のデータ（インデックス1）を出す\\n___(___[___])",
      "correctLines": [
          "// colors という配列を作る（'あか', 'あお'の順）",
          "let colors = [\"あか\", \"あお\"]",
          "// 2番目のデータ（インデックス1）を出す",
          "print(colors[1])"
        ],
      "lineHints": [
          null,
          "変数 `colors` に `[\"あか\", \"あお\"]` の配列を代入します。",
          null,
          "`print(colors[1])` で2番目（インデックス1）のデータを出力します。"
        ],
        "candidates": {
          "variables": [
            "colors"
          ],
          "functions": [
            "print"
          ],
          "strings": [
            "[\"あか\", \"あお\"]"
          ],
          "numbers": [
            "1",
            "0"
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
      "holeyCode": "// 辞書を作る（キーは'みかん'、値は'オレンジ'）\\nlet ___ = ___\\n// 中身を出す\\n___(___[___]___)",
      "correctLines": [
          "// 辞書を作る（キーは'みかん'、値は'オレンジ'）",
          "let colors = [\"みかん\": \"オレンジ\"]",
          "// 中身を出す",
          "print(colors[\"みかん\"]!)"
        ],
      "lineHints": [
          null,
          "変数 `colors` に `[\"みかん\": \"オレンジ\"]` の辞書を代入します。",
          null,
          "`print(colors[\"みかん\"]!)` でキー「みかん」の値を出力します。`!` は強制アンラップです。"
        ],
        "candidates": {
          "variables": [
            "colors"
          ],
          "functions": [
            "print"
          ],
          "strings": [
            "[\"みかん\": \"オレンジ\"]",
            "\"みかん\""
          ],
          "others": [
            "!"
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
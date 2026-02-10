export const kotlinData = {
  "language": "kotlin",
  "lessonId": "kotlin-1",
  "lessonTitle": "Kotlin (コトリン) に挑戦！",
  "lessonDescription": "Android（アンドロイド）スマホのアプリ作りなどで大人気の言葉「Kotlin（コトリン）」のきほんを学びましょう。新しくて使いやすい機能がたくさんあります。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "tutorialSlides": [
    {
      "title": "Kotlinへようこそ！",
      "content": "**Kotlin（コトリン）** は、JetBrains社が作ったプログラミング言語です。\\n\\nGoogleがAndroidアプリ開発の公式言語として推奨しています。\\n\\nJavaと互換性があり、より簡潔で安全なコードが書けます。"
    },
    {
      "title": "画面に文字を出す",
      "content": "Kotlinで画面に文字を出すには `println` 関数を使います。\\n\\n```kotlin\\nprintln(\\\"Hello, World!\\\")\\n```\\n\\nシンプルに1行で出力できます。`main` 関数なしでも動きます。"
    },
    {
      "title": "変数を使う",
      "content": "データを入れておく「はこ」を**変数**と呼びます。\\n\\n```kotlin\\nval name = \\\"太郎\\\"  // 変更できない\\nvar age = 10       // 変更できる\\nage = 11\\n```\\n\\n`val` は変更できない定数、`var` は変更できる変数です。"
    },
    {
      "title": "計算する",
      "content": "Kotlinでは数字を計算できます。\\n\\n```kotlin\\nval a = 5\\nval b = 3\\nprintln(a + b)  // 8\\nprintln(10 % 3) // 1（あまり）\\n```\\n\\n`+`（足す）、`-`（引く）、`*`（かける）、`/`（割る）、`%`（あまり）が使えます。"
    },
    {
      "title": "条件分岐 if文",
      "content": "「もし〜なら」という条件で処理を分けられます。\\n\\n```kotlin\\nval score = 85\\nif (score > 80) {\\n    println(\\\"すごい！\\\")\\n} else {\\n    println(\\\"がんばろう\\\")\\n}\\n```\\n\\n条件が正しければ `{ }` の中が実行されます。"
    },
    {
      "title": "リストとマップ",
      "content": "複数のデータをまとめて扱えます。\\n\\n**リスト**:\\n```kotlin\\nval colors = listOf(\\\"あか\\\", \\\"あお\\\")\\nprintln(colors[0])\\n```\\n\\n**マップ**（辞書）:\\n```kotlin\\nval scores = mapOf(\\\"Math\\\" to 90)\\nprintln(scores[\\\"Math\\\"])\\n```"
    }
  ],
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "correctCode": "// println で出力する\\nprintln(\"Hello, World!\")",
      "holeyCode": "// println で出力する\\n___(\"___\")",
      "correctLines": [
          "// println で出力する",
          "println(\"Hello, World!\")"
        ],
      "lineHints": [
          null,
          "println関数で「Hello, World!」という文字列を出力します。"
        ],
        "candidates": {
          "functions": [
            "println"
          ],
          "strings": [
            "\"Hello, World!\""
          ],
          "others": ["Hello, World!"]
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
      "holeyCode": "// x に 10 を入れる\\nval ___ = ___\\n// y に 5 を入れる\\nval ___ = ___\\n// + でたし算する\\n___(___ + ___)",
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
          "変数xを宣言し、10を代入します。",
          null,
          "変数yを宣言し、5を代入します。",
          null,
          "println関数でxとyの合計を出力します。"
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
          "others": ["println", "x", "y", "10", "5"]
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
      "holeyCode": "// 10 を 3 で割ったあまりを出力する\\n___(___ ___ ___)",
      "correctLines": [
          "// 10 を 3 で割ったあまりを出力する",
          "println(10 % 3)"
        ],
      "lineHints": [
          null,
          "println関数で10を3で割ったあまりを出力します。%演算子を使います。"
        ],
        "candidates": {
          "operators": [
            "%",
            "/",
            "*",
            "-"
          ],
          "others": ["println", "10", "3"]
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
      "holeyCode": "// var で変更可能な変数を作る\\nvar ___ = ___\\n// += で 20 を足す\\n___ ___ ___\\n// -= で 50 を引く\\n___ ___ ___\\n___(___)",
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
          "変数hpを宣言し、100を代入します。",
          null,
          "hpに20を足します。+=演算子を使います。",
          null,
          "hpから50を引きます。-=演算子を使います。",
          "println関数でhpの値を出力します。"
        ],
        "candidates": {
          "operators": [
            "+=",
            "-=",
            "*=",
            "/="
          ],
          "others": ["hp", "100", "20", "50", "println"]
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
      "holeyCode": "// score に 100 を入れる\\nval ___ = ___\\n// > で比較する\\nif (___ ___ ___) ___\\n    ___(\"___\")\\n___",
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
          "変数scoreを宣言し、100を代入します。",
          null,
          "scoreが80より大きいか比較します。if文と>演算子を使います。",
          "println関数で「すごい！」を出力します。",
          "if文のブロックを閉じる}です。"
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
          "others": ["println", "}", "{", "score", "100", "80", "すごい！"]
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
      "holeyCode": "val ___ = ___\\nval ___ = ___\\n// && で両方の条件をチェック\\nif (___ ___ ___ ___ ___ ___ ___) ___\\n    ___(\"___\")\\n___",
      "correctLines": [
          "val score = 80",
          "val bonus = 10",
          "// && で両方の条件をチェック",
          "if (score >= 70 && bonus > 0) {",
          "    println(\"ボーナス合格！\")",
          "}"
        ],
      "lineHints": [
          "変数scoreを宣言し、80を代入します。",
          "変数bonusを宣言し、10を代入します。",
          null,
          "score>=70かつbonus>0の両方を満たすか判定します。&&演算子を使います。",
          "println関数で「ボーナス合格！」を出力します。",
          "if文のブロックを閉じる}です。"
        ],
        "candidates": {
          "operators": [
            "&&",
            "||",
            "&",
            "|"
          ],
          "others": ["score", "bonus", "80", "10", "70", "0", "println", "}", "{", "ボーナス合格！", ">=", ">"]
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
      "holeyCode": "// colors というリストを作る（'あか', 'あお'の順）\\nval ___ = ___(\"___\", \"___\")\\n// 2番目のデータ（インデックス1）を出す\\n___(___[___])",
      "correctLines": [
          "// colors というリストを作る（'あか', 'あお'の順）",
          "val colors = listOf(\"あか\", \"あお\")",
          "// 2番目のデータ（インデックス1）を出す",
          "println(colors[1])"
        ],
      "lineHints": [
          null,
          "listOf関数でcolorsリストを作成し、「あか」「あお」を入れます。",
          null,
          "println関数でcolors[1]（2番目の要素）を出力します。"
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
          "others": ["colors", "1"]
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
      "holeyCode": "// 辞書を作る（キーは'みかん'、値は'オレンジ'）\\nval ___ = ___(\"___\" to \"___\")\\n// 中身を出す\\n___(___[\"___\"])",
      "correctLines": [
          "// 辞書を作る（キーは'みかん'、値は'オレンジ'）",
          "val colors = mapOf(\"みかん\" to \"オレンジ\")",
          "// 中身を出す",
          "println(colors[\"みかん\"])"
        ],
      "lineHints": [
          null,
          "mapOf関数でcolors辞書を作成します。キー「みかん」に値「オレンジ」を対応付けます。",
          null,
          "println関数でcolors[\"みかん\"]の値を出力します。"
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
          "others": ["colors"]
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
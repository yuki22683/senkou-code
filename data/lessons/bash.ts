export const bashData = {
  "language": "bash",
  "lessonId": "bash-1",
  "lessonTitle": "Bash (バッシュ) に挑戦！",
  "lessonDescription": "コンピュータに直接指示（しじ）を出すための言葉「Bash（バッシュ）」のきほんを学びましょう。黒い画面（ターミナル）を自由にあやつれるようになります。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "correctCode": "# Hello, World!と入力する\\necho \"Hello, World!\"",
      "holeyCode": "# Hello, World!と入力する\\n___ \"___\"",
      "correctLines": [
          "# Hello, World!と入力する",
          "echo \"Hello, World!\""
        ],
      "lineHints": [
          null,
          "文字列を標準出力に表示します。"
        ],
        "candidates": {
          "functions": [
            "echo"
          ],
          "strings": [
            "Hello, World!"
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
      "title": "便利な「はこ」",
      "correctCode": "# 'Bash' と入力する\\nname=\"Bash\"\\n# はこの名前 '名前' と入力する\\necho $name",
      "holeyCode": "# 'Bash' と入力する\\n___=\"___\"\\n# はこの名前 '名前' と入力する\\necho ___",
      "correctLines": [
          "# 'Bash' と入力する",
          "name=\"Bash\"",
          "# はこの名前 '名前' と入力する",
          "echo $name"
        ],
      "lineHints": [
          null,
          "name=\"Bash\" と入力します。 = のまわりにスペースを入れないでください！",
          null,
          "変数の内容を展開して表示します。"
        ],
        "candidates": {
          "variables": [
            "name"
          ],
          "strings": [
            "Bash"
          ],
          "others": ["$name"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Bash\\n"
          }
        ]
      },
    {
      "title": "コンピュータで計算しましょう",
      "correctCode": "# はこに数字を入れる\\na=5\\nb=3\\n# +でたし算\\necho $((a + b))",
      "holeyCode": "# はこに数字を入れる\\na=___\\nb=___\\n# +でたし算\\necho $((a + ___))",
      "correctLines": [
          "# はこに数字を入れる",
          "a=5",
          "b=3",
          "# +でたし算",
          "echo $((a + b))"
        ],
      "lineHints": [
          null,
          "たし算なので `+` を使います。全体を $(( )) で囲みます。",
          "変数に数値を代入（保存）します。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "+"
          ],
          "others": ["5", "3", "b", "5", "3"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "8\\n"
          }
        ]
      },
    {
      "title": "「もし〜なら」で分けましょう",
      "correctCode": "# scoreに100を入れる\\nscore=100\\n# -gtで「より大きい」を指定\\nif [ $score -gt 80 ]; then\\n    # メッセージ（'すごい'）\\n    echo \"すごい\"\\n# fiでif文を閉じる\\nfi",
      "holeyCode": "# scoreに100を入れる\\nscore=___\\n# -gtで「より大きい」を指定\\nif [ $score -gt ___ ]; then\\n    # メッセージ（'すごい'）\\n    ___ \"___\"\\n# fiでif文を閉じる\\n___",
      "correctLines": [
          "# scoreに100を入れる",
          "score=100",
          "# -gtで「より大きい」を指定",
          "if [ $score -gt 80 ]; then",
          "    # メッセージ（'すごい'）",
          "    echo \"すごい\"",
          "# fiでif文を閉じる",
          "fi"
        ],
      "lineHints": [
          null,
          "変数に数値を代入（保存）します。",
          null,
          "〜より大きい、をあらわす -gt を入力します。",
          null,
          "文字列を標準出力に表示します。",
          null,
          "if文（条件分岐）のブロックを終了します。"
        ],
        "candidates": {
          "operators": [
            "-gt"
          ],
          "keywords": [
            "fi"
          ],
          "others": ["100", "すごい", "80", "echo", "100"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "すごい\\n"
          }
        ]
      },
    {
      "title": "ちがう場合はどうしましょう？",
      "correctCode": "# ageに18を入れる\\nage=18\\n# 20以上かを比較する演算子\\nif [ $age -ge 20 ]; then\\n    # 20歳以上のときのメッセージ（'大人'）\\n    echo \"大人\"\\n# elseでそれ以外の場合\\nelse\\n    # それ以外のメッセージ（'未成年'）\\n    echo \"未成年\"\\nfi",
      "holeyCode": "# ageに18を入れる\\nage=___\\n# 20以上かを比較する演算子\\nif [ $age -ge ___ ]; then\\n    # 20歳以上のときのメッセージ（'大人'）\\n    ___ \"___\"\\n# elseでそれ以外の場合\\n___\\n    # それ以外のメッセージ（'未成年'）\\n    echo \"___\"\\n___",
      "correctLines": [
          "# ageに18を入れる",
          "age=18",
          "# 20以上かを比較する演算子",
          "if [ $age -ge 20 ]; then",
          "    # 20歳以上のときのメッセージ（'大人'）",
          "    echo \"大人\"",
          "# elseでそれ以外の場合",
          "else",
          "    # それ以外のメッセージ（'未成年'）",
          "    echo \"未成年\"",
          "fi"
        ],
      "lineHints": [
          null,
          "変数に数値を代入（保存）します。",
          null,
          "以上、をあらわす -ge を入力します。",
          null,
          "文字列を標準出力に表示します。",
          null,
          "もし条件が満たされなかった場合に実行する処理を記述します。",
          null,
          "文字列を標準出力に表示します。",
          "if文のブロックを終了する。"
        ],
        "candidates": {
          "keywords": [
            "else"
          ],
          "others": ["18", "-ge", "大人", "未成年", "20", "fi", "echo"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "未成年\\n"
          }
        ]
      },
    {
      "title": "中身を全部出してみましょう",
      "correctCode": "names=(\"アリス\" \"ボブ\")\\n# inで配列の中身を取り出す\\nfor name in \"${names[@]}\"; do\\n    echo $name\\n# doneでループを終了\\ndone",
      "holeyCode": "___=(\\\"___\\\" \\\"___\\\")\\n# inで配列の中身を取り出す\\nfor name in \"___\"; do\\n    echo ___\\n# doneでループを終了\\n___",
      "correctLines": [
          "names=(\"アリス\" \"ボブ\")",
          "# inで配列の中身を取り出す",
          "for name in \"${names[@]}\"; do",
          "    echo $name",
          "# doneでループを終了",
          "done"
        ],
      "lineHints": [
          "指定された回数や範囲で、繰り返し処理（ループ）を行います。",
          null,
          "ループ処理のブロックを終了します。",
          "変数の内容を展開して表示します。",
          null,
          "ループのブロックを終了する。"
        ],
        "candidates": {
          "keywords": [
            "in",
            "done",
            "for"
          ],
          "others": ["アリス", "ボブ", "${names[@]}", "$name", "names"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "アリス\\nボブ\\n"
          }
        ]
      },
    {
      "title": "自分だけの関数を作りましょう",
      "correctCode": "greet() {\\n    echo \"こんにちは\"\\n}\\n# greetで関数を呼び出す\\ngreet",
      "holeyCode": "___() {\\n    ___ \"___\"\\n___\\n# greetで関数を呼び出す\\n___",
      "correctLines": [
          "greet() {",
          "    echo \"こんにちは\"",
          "}",
          "# greetで関数を呼び出す",
          "greet"
        ],
      "lineHints": [
          "greet という名前の関数を定義します。",
          "文字列を標準出力に表示します。",
          "関数の終わりです。",
          null,
          "関数名を入力して、実行します。"
        ],
        "candidates": {
          "functions": [
            "greet"
          ],
          "others": ["Hello", "}", "こんにちは", "echo", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      }
  ]
};
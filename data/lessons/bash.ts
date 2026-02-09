export const bashData = {
  "language": "bash",
  "lessonId": "bash-1",
  "lessonTitle": "Bash (バッシュ) に挑戦！",
  "lessonDescription": "コンピュータに直接指示（しじ）を出すための言葉「Bash（バッシュ）」のきほんを学びましょう。黒い画面（ターミナル）を自由にあやつれるようになります。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "tutorialSlides": [
    {
      "title": "Bash (バッシュ) とは？",
      "content": "Bashは、コンピュータに直接「命令」を出すための言葉です。マウスでクリックする代わりに、文字を打ち込んで操作します。\\n\\n**Bashでできること：**\\n- ファイルの作成や削除\\n- プログラムの実行\\n- 定型作業の自動化"
    },
    {
      "title": "メッセージを出す echo",
      "content": "画面に文字を表示させるには `echo`（エコー）を使います。\\n\\n```bash\\necho \"こんにちは\"\\n```\\n\\n表示したい文字は `\" \"` で囲むのが基本です。"
    }
  ],
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
          "メッセージを表示する echo コマンドを入力します。"
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
      "correctCode": "# nameという変数に 'Bash' を代入\\nname=\"Bash\"\\n# 変数nameの内容を表示\\necho $name",
      "holeyCode": "# nameという変数に 'Bash' を代入\\n___=\"___\"\\n# 変数nameの内容を表示\\n___ ___",
      "correctLines": [
          "# nameという変数に 'Bash' を代入",
          "name=\"Bash\"",
          "# 変数nameの内容を表示",
          "echo $name"
        ],
      "lineHints": [
          null,
          "変数名 name を指定します。 = の前後にスペースを入れないように注意しましょう。",
          null,
          "echoコマンドと、変数を展開する $name を入力します。"
        ],
        "candidates": {
          "variables": [
            "name"
          ],
          "strings": [
            "Bash"
          ],
          "others": ["echo", "$name"]
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
      "correctCode": "# 変数a, bに数字を入れる\\na=5\\nb=3\\n# $(( )) を使ってたし算の結果を表示\\necho $((a + b))",
      "holeyCode": "# 変数a, bに数字を入れる\\n___=5\\n___=3\\n# $(( )) を使ってたし算の結果を表示\\n___ $((a ___ ___))",
      "correctLines": [
          "# 変数a, bに数字を入れる",
          "a=5",
          "b=3",
          "# $(( )) を使ってたし算の結果を表示",
          "echo $((a + b))"
        ],
      "lineHints": [
          null,
          "変数名 a を入力します。",
          "変数名 b を入力します。",
          null,
          "echo コマンド、足し算の + 、変数 b を入力します。"
        ],
        "candidates": {
          "operators": [
            "+"
          ],
          "others": ["a", "b", "echo", "5", "3"]
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
      "correctCode": "# scoreに100を入れる\\nscore=100\\n# 80より大きいか判定\\nif [ $score -gt 80 ]; then\\n    # 「すごい」と表示\\n    echo \"すごい\"\\n# if文を終了\\nfi",
      "holeyCode": "# scoreに100を入れる\\nscore=___\\n# 80より大きいか判定\\n___ [ $score ___ 80 ]; ___\\n    # 「すごい」と表示\\n    ___ \"___\"\\n# if文を終了\\n___",
      "correctLines": [
          "# scoreに100を入れる",
          "score=100",
          "# 80より大きいか判定",
          "if [ $score -gt 80 ]; then",
          "    # 「すごい」と表示",
          "    echo \"すごい\"",
          "# if文を終了",
          "fi"
        ],
      "lineHints": [
          null,
          "数値 100 を代入します。",
          null,
          "if キーワード、比較演算子 -gt 、then を入力します。",
          null,
          "echo コマンドと文字列 \"すごい\" を入力します。",
          null,
          "if文を閉じる fi キーワードを入力します。"
        ],
        "candidates": {
          "operators": [
            "-gt"
          ],
          "keywords": [
            "fi",
            "if",
            "then"
          ],
          "others": ["100", "すごい", "80", "echo"]
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
      "correctCode": "# ageに18を入れる\\nage=18\\n# 20以上か判定\\nif [ $age -ge 20 ]; then\\n    # 「大人」と表示\\n    echo \"大人\"\\n# それ以外の場合\\nelse\\n    # 「未成年」と表示\\n    echo \"未成年\"\\nfi",
      "holeyCode": "# ageに18を入れる\\n___=18\\n# 20以上か判定\\nif [ $age ___ ___ ]; then\\n    # 「大人」と表示\\n    ___ \"大人\"\\n# それ以外の場合\\n___\\n    # 「未成年」と表示\\n    ___ \"___\"\\n___",
      "correctLines": [
          "# ageに18を入れる",
          "age=18",
          "# 20以上か判定",
          "if [ $age -ge 20 ]; then",
          "    # 「大人」と表示",
          "    echo \"大人\"",
          "# それ以外の場合",
          "else",
          "    # 「未成年」と表示",
          "    echo \"未成年\"",
          "fi"
        ],
      "lineHints": [
          null,
          "変数名 age を入力します。",
          null,
          "比較演算子 -ge と比較対象の 20 を入力します。",
          null,
          "echo コマンドを入力します。",
          null,
          "else キーワードを入力します。",
          null,
          "echo コマンドと文字列 \"未成年\" を入力します。",
          "if文を終了する fi キーワードを入力します。"
        ],
        "candidates": {
          "keywords": [
            "else",
            "fi"
          ],
          "others": ["age", "-ge", "大人", "未成年", "20", "echo"]
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
      "correctCode": "# 配列namesを定義\\nnames=(\"アリス\" \"ボブ\")\\n# 配列の全要素をループ\\nfor name in \"${names[@]}\"; do\\n    # 名前を表示\\n    echo $name\\ndone",
      "holeyCode": "# 配列namesを定義\\n___=(\\\"___\\\" \\\"___\\\")\\n# 配列の全要素をループ\\n___ name ___ \\\"___\\\"; ___\\n    # 名前を表示\\n    ___ $___\\n___",
      "correctLines": [
          "# 配列namesを定義",
          "names=(\"アリス\" \"ボブ\")",
          "# 配列の全要素をループ",
          "for name in \"${names[@]}\"; do",
          "    # 名前を表示",
          "    echo $name",
          "done"
        ],
      "lineHints": [
          null,
          "配列名 names と要素 \"アリス\" \"ボブ\" を入力します。",
          null,
          "for キーワード、in キーワード、全要素を表す ${names[@]} 、do を入力します。",
          null,
          "echo コマンドと変数 $name を入力します。",
          "ループを終了する done キーワードを入力します。"
        ],
        "candidates": {
          "keywords": [
            "in",
            "done",
            "for",
            "do"
          ],
          "others": ["アリス", "ボブ", "${names[@]}", "name", "names", "echo"]
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
      "correctCode": "# greet関数を定義\\ngreet() {\\n    # 「こんにちは」と表示\\n    echo \"こんにちは\"\\n}\\n# greetで関数を呼び出す\\ngreet",
      "holeyCode": "# greet関数を定義\\n___() {\\n    # 「こんにちは」と表示\\n    ___ \\\"___\\\"\\n___\\n# greetで関数を呼び出す\\n___",
      "correctLines": [
          "# greet関数を定義",
          "greet() {",
          "    # 「こんにちは」と表示",
          "    echo \"こんにちは\"",
          "}",
          "# greetで関数を呼び出す",
          "greet"
        ],
      "lineHints": [
          null,
          "関数名 greet を定義します。",
          null,
          "echo コマンドと文字列 \"こんにちは\" を入力します。",
          "関数の終わりを示す } を入力します。",
          null,
          "定義した関数名 greet を入力して呼び出します。"
        ],
        "candidates": {
          "functions": [
            "greet"
          ],
          "others": ["}", "こんにちは", "echo"]
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

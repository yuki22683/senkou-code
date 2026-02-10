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
    },
    {
      "title": "変数（へんすう）",
      "content": "データを保存する「はこ」が**変数**です。\\n\\n**注意:** `=` の前後にスペースを入れないこと！\\n\\n```bash\\nname=\"Bash\"    # OK\\nname = \"Bash\"  # エラー！\\n```\\n\\n中身を取り出すには `$` をつけます。\\n\\n```bash\\necho $name  # Bash\\n```"
    },
    {
      "title": "計算する $(( ))",
      "content": "Bashで計算するには `$(( ))` の中に式を書きます。\\n\\n```bash\\na=5\\nb=3\\necho $((a+b))  # 8\\necho $((a*b))  # 15\\n```\\n\\n使える記号：`+` たし算、`-` ひき算、`*` かけ算、`/` わり算"
    },
    {
      "title": "条件分岐 if文",
      "content": "「もし〜なら」は `if` で書きます。**if で始まり fi で終わる**のがポイントです。\\n\\n```bash\\nif [ $score -gt 80 ]; then\\n    echo \"すごい\"\\nfi\\n```\\n\\n**比較の記号：**\\n- `-gt` : より大きい（>）\\n- `-ge` : 以上（>=）\\n- `-lt` : より小さい（<）\\n- `-eq` : 等しい（==）"
    },
    {
      "title": "if-else文",
      "content": "「そうでなければ」は `else` を使います。\\n\\n```bash\\nif [ $age -ge 20 ]; then\\n    echo \"大人\"\\nelse\\n    echo \"未成年\"\\nfi\\n```"
    },
    {
      "title": "for文でくり返し",
      "content": "配列の中身を全部処理するには `for` を使います。\\n\\n```bash\\nnames=(\"アリス\" \"ボブ\")\\nfor name in \"${names[@]}\"; do\\n    echo $name\\ndone\\n```\\n\\n`${names[@]}` で配列の全要素を取り出します。"
    }
  ],
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "tutorialSlides": [
        {
          "title": "Bash（バッシュ）とは？",
          "content": "# コンピュータと対話する言葉\\n\\nBashは、キーボードから直接コンピュータに命令を出すためのツールです。マウスを使わずに、たくさんのファイルを一気に処理したり、システムの設定を変えたりするのが得意です。"
        },
        {
          "title": "画面に文字を出すには？",
          "content": "# echo（エコー）\\n\\n画面に文字を出したいときは、`echo` と入力して、そのあとに表示したい文字を続けます。プログラミングの第一歩です！"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n`echo` を使って `Hello, World!` と表示させてみましょう。\\n\\n**入力するコードのヒント：**\\n```bash\\necho \"Hello, World!\"\\n```"
        }
      ],
      "correctCode": "# Hello, World!と入力する\\necho \"Hello, World!\"",
      "holeyCode": "# Hello, World!と入力する\\n___ \"___\"",
      "correctLines": [
          "# Hello, World!と入力する",
          "echo \"Hello, World!\""
        ],
      "lineHints": [
          null,
          "画面に文字を出力するコマンドです。"
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
      "tutorialSlides": [
        {
          "title": "変数（へんすう）とは？",
          "content": "# データを保存する「はこ」\\n\\nプログラムの中で数字や文字を使い回すために、名前をつけて保存する場所を **変数（へんすう）** と呼びます。\\n\\n**たとえば：** 「おかし入れ」という箱に、いろんなおかしを出し入れできるように、変数には好きなデータを入れておけます。"
        },
        {
          "title": "Bashの変数は特別ルール！",
          "content": "# スペースを入れないで！\\n\\nBashでは、`名前=中身` というふうに、**くっつけて**入力します。= の前後にスペースを入れるとエラーになります！\\n\\n**正しい例：**\\n```bash\\nname=\"Bash\"  # OK！\\n```\\n\\n**間違った例：**\\n```bash\\nname = \"Bash\"  # エラー！\\n```"
        },
        {
          "title": "変数の使い方",
          "content": "# $をつけて取り出す\\n\\n変数の中身を取り出すときは、名前の前に `$`（ドルマーク）をつけます。\\n\\n**コード例：**\\n```bash\\nname=\"Bash\"\\necho $name\\n```\\n\\n**このコードは何をしているの？**\\n1. nameという箱に「Bash」を入れる\\n2. nameの中身を表示する"
        }
      ],
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
          "echoコマンドと、$記号で変数の値を展開して表示します。"
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
      "tutorialSlides": [
        {
          "title": "計算はコンピュータにお任せ",
          "content": "# 高速な計算処理\\n\\nコンピュータは人間よりもずっと速く計算できます。プログラミングでは、特別な記号を使って計算の指示を出します。\\n\\n**使える記号：**\\n- `+` たし算\\n- `-` ひき算\\n- `*` かけ算\\n- `/` わり算"
        },
        {
          "title": "Bashの計算ルール",
          "content": "# $(( )) で囲む\\n\\nBashで計算をするときは、計算式を `$(( ))` で囲みます。この中では $（ドルマーク）なしで変数名を使えます。\\n\\n**コード例：**\\n```bash\\nx=10\\ny=2\\necho $((x + y))\\n```\\n\\n**このコードは何をしているの？**\\n1. xに10、yに2を入れる\\n2. xとyを足した結果（12）を表示"
        }
      ],
      "correctCode": "# 変数a, bに数字を入れる\\na=5\\nb=3\\n# $(( )) を使ってたし算の結果を表示\\necho $((a+b))",
      "holeyCode": "# 変数a, bに数字を入れる\\n___=___\\n___=___\\n# $(( )) を使ってたし算の結果を表示\\n___ $((___+___))",
      "correctLines": [
          "# 変数a, bに数字を入れる",
          "a=5",
          "b=3",
          "# $(( )) を使ってたし算の結果を表示",
          "echo $((a+b))"
        ],
      "lineHints": [
          null,
          "1つ目の数値を格納する変数です。",
          "2つ目の数値を格納する変数です。",
          null,
          "echoで算術展開の結果を表示します。+演算子で加算を行います。"
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
      "tutorialSlides": [
        {
          "title": "条件分岐（じょうけんぶんき）とは？",
          "content": "# プログラムに判断させる\\n\\n状況によって動きを変えることを **条件分岐** と呼びます。\\n\\n**たとえば：** 「テストが80点以上ならご褒美」のように、条件によって結果を変えられます。"
        },
        {
          "title": "Bashの比較記号",
          "content": "# 特別な記号を使う\\n\\nBashでは数字の比較に特別な記号を使います：\\n\\n- `-gt` : より大きい（greater than）\\n- `-lt` : より小さい（less than）\\n- `-ge` : 以上（greater or equal）\\n- `-le` : 以下（less or equal）\\n- `-eq` : 等しい（equal）"
        },
        {
          "title": "if文の書き方",
          "content": "# if で始まり fi で終わる\\n\\n**コード例：**\\n```bash\\nif [ $score -gt 80 ]; then\\n    echo \"Great\"\\nfi\\n```\\n\\n**このコードは何をしているの？**\\n1. scoreが80より大きいか確認\\n2. 大きければ「Great」と表示\\n3. `fi`（ifの逆）で終わる"
        }
      ],
      "correctCode": "# scoreに100を入れる\\nscore=100\\n# 80より大きいか判定\\nif [ $score -gt 80 ]; then\\n    # 「すごい」と表示\\n    echo \"すごい\"\\n# if文を終了\\nfi",
      "holeyCode": "# scoreに100を入れる\\n___=___\\n# 80より大きいか判定\\n___ [ $___ ___ ___ ]; ___\\n    # 「すごい」と表示\\n    ___ \"___\"\\n# if文を終了\\n___",
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
          "条件分岐を開始します。-gtは「より大きい」を意味する比較演算子です。",
          null,
          "条件が真のときに実行される出力処理です。",
          null,
          "if文を終了するキーワードです。"
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
          "others": ["score", "100", "すごい", "80", "echo"]
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
      "tutorialSlides": [
        {
          "title": "それ以外の場合は？",
          "content": "# else（エルス）の役割\\n\\n条件に当てはまらなかったときの別のルートを作るのが **else（エルス）** です。「もし〜なら」とセットで使うことで、プログラムのルートを2つに分けることができます。"
        },
        {
          "title": "elseブロック",
          "content": "# 二つの動き\\n\\n条件に当てはまらないときの動きは `else` を使って入力します。\\n\\n**コード例：**\\n```bash\\nif [ $time -lt 12 ]; then\\n    echo \"午前\"\\nelse\\n    echo \"午後\"\\nfi\\n```"
        }
      ],
      "correctCode": "# ageに18を入れる\\nage=18\\n# 20以上か判定\\nif [ $age -ge 20 ]; then\\n    # 「大人」と表示\\n    echo \"大人\"\\n# それ以外の場合\\nelse\\n    # 「未成年」と表示\\n    echo \"未成年\"\\nfi",
      "holeyCode": "# ageに18を入れる\\n___=___\\n# 20以上か判定\\n___ [ $___ ___ ___ ]; ___\\n    # 「大人」と表示\\n    ___ \"___\"\\n# それ以外の場合\\n___\\n    # 「未成年」と表示\\n    ___ \"___\"\\n___",
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
          "年齢を格納する変数です。",
          null,
          "-geは「以上」を意味する比較演算子です。20と比較します。",
          null,
          "画面に文字を出力するコマンドです。",
          null,
          "条件が偽の場合に実行されるブロックを開始します。",
          null,
          "else節で実行される出力処理です。",
          "if文を終了するキーワードです。"
        ],
        "candidates": {
          "keywords": [
            "else",
            "fi",
            "if",
            "then"
          ],
          "others": ["age", "-ge", "大人", "未成年", "20", "18", "echo"]
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
      "tutorialSlides": [
        {
          "title": "繰り返し（ループ）とは？",
          "content": "# 作業を自動化する\\n\\n同じ処理を何度も繰り返すための仕組みが **ループ** です。\\n\\n**たとえば：** クラス全員の名前を呼ぶとき、一人ずつ手作業で呼ぶより、名簿を順番に読み上げるほうが楽ですよね。それがループです。"
        },
        {
          "title": "for文の書き方",
          "content": "# for と in と do と done\\n\\n**コード例：**\\n```bash\\nfor name in \"たろう\" \"はなこ\"; do\\n    echo $name\\ndone\\n```\\n\\n**このコードは何をしているの？**\\n1. 「たろう」「はなこ」を順番にnameに入れる\\n2. それぞれのnameを表示\\n3. 全員分終わったら `done` で終了"
        }
      ],
      "correctCode": "# 配列namesを定義\\nnames=(\"アリス\" \"ボブ\")\\n# 配列の全要素をループ\\nfor name in \"${names[@]}\"; do\\n    # 名前を表示\\n    echo $name\\ndone",
      "holeyCode": "# 配列namesを定義\\n___=(\\\"___\\\" \\\"___\\\")\\n# 配列の全要素をループ\\n___ ___ ___ \\\"___\\\"; ___\\n    # 名前を表示\\n    ___ $___\\n___",
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
          "()で囲んで配列を定義し、要素を空白区切りで並べます。",
          null,
          "for キーワード、in キーワード、全要素を表す ${names[@]} 、do を入力します。",
          null,
          "ループ内で各要素を出力します。",
          "ループを終了するキーワードです。"
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
      "tutorialSlides": [
        {
          "title": "関数（かんすう）とは？",
          "content": "# 処理をまとめた「技（わざ）」\\n\\n何度も使う手順をまとめて名前をつけたものを **関数** と呼びます。\\n\\n**たとえば：** 「挨拶する」という技を一度作れば、「挨拶！」と言うだけで毎回同じ動きができます。便利なショートカットのようなものです。"
        },
        {
          "title": "関数の作り方",
          "content": "# 名前() { } で定義\\n\\n**コード例：**\\n```bash\\naisatsu() {\\n    echo \"こんにちは\"\\n}\\n\\naisatsu  # 呼び出し\\n```\\n\\n**このコードは何をしているの？**\\n1. `aisatsu`という関数を作る（中身は「こんにちは」を表示）\\n2. `aisatsu` と書くだけで実行できる"
        }
      ],
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
          "関数内で実行される出力処理です。",
          "関数ブロックを閉じます。",
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

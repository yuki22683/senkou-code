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
      "description": "Bashを使って画面に「こんにちは」と表示させてみましょう。echo（エコー）という関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Bash（バッシュ）とは？",
          "image": "/illustrations/common/robot_greet.png",
          "content": "# コンピュータと対話する言葉\n\nBashは、キーボードから直接コンピュータに命令を出すためのツールです。マウスを使わずに、たくさんのファイルを一気に処理したり、システムの設定を変えたりするのが得意です。"
        },
        {
          "title": "画面に文字を出すには？",
          "image": "/illustrations/common/robot_greet.png",
          "content": "# echo（エコー）\n\n画面に文字を出したいときは、`echo` と入力して、そのあとに表示したい文字を続けます。プログラミングの第一歩です！"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/robot_greet.png",
          "content": "# 目標\n\n`echo` を使って `Hello, World!` と表示させてみましょう。\n\n**入力するコードのヒント：**\n```bash\necho \"Hello, World!\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# Hello, World!と入力する\necho \"Hello, World!\"",
      "holeyCode": "# Hello, World!と入力する\necho \"___\"",
      "correctLines": [
        "# 画面にメッセージを出す関数",
        "echo \"Hello, World!\""
      ],
      "lineHints": [null, "文字列を標準出力に表示します。"],
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
          "expected_output": "Hello, World!\n"
        }
      ]
    },
    {
      "title": "便利な「はこ」",
      "description": "数字や文字をしまっておく「はこ（変数）」を使ってみましょう。Bashでは = のまわりにスペースを入れてはいけないというルールがあります。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "変数（へんすう）とは？",
          "image": "/illustrations/common/robot_greet.png",
          "content": "# データを保存する「はこ」\n\nプログラムの中で数字や文字を使い回すために、名前をつけて保存する場所を **変数（へんすう）** と呼びます。\n\n**たとえば：** 「おかし入れ」という箱に、いろんなおかしを出し入れできるように、変数には好きなデータを入れておけます。"
        },
        {
          "title": "Bashの変数は特別ルール！",
          "image": "/illustrations/common/robot_greet.png",
          "content": "# スペースを入れないで！\n\nBashでは、`名前=中身` というふうに、**くっつけて**入力します。= の前後にスペースを入れるとエラーになります！\n\n**正しい例：**\n```bash\nname=\"Bash\"  # OK！\n```\n\n**間違った例：**\n```bash\nname = \"Bash\"  # エラー！\n```"
        },
        {
          "title": "変数の使い方",
          "image": "/illustrations/common/robot_greet.png",
          "content": "# $をつけて取り出す\n\n変数の中身を取り出すときは、名前の前に `$`（ドルマーク）をつけます。\n\n**コード例：**\n```bash\nname=\"Bash\"\necho $name\n```\n\n**このコードは何をしているの？**\n1. nameという箱に「Bash」を入れる\n2. nameの中身を表示する"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# Bashと入力する\nname=\"Bash\"\n# nameと入力する\necho $name",
      "holeyCode": "# 'Bash' と入力する\nname=\"___\"\n# はこの名前 'name' と入力する\necho $___",
      "correctLines": [
        "# 'Bash' と入力する",
        "name=\"Bash\"",
        "# はこの名前 'name' と入力する",
        "echo $name"
      ],
      "lineHints": [null, "name=\"Bash\" と入力します。 = のまわりにスペースを入れないでください！", null, "変数の内容を展開して表示します。"],
      "candidates": {
        "variables": [
          "name"
        ],
        "strings": [
          "Bash"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Bash\n"
        }
      ]
    },
    {
      "title": "コンピュータで計算しましょう",
      "description": "Bashを使って、たし算をしてみましょう。$(( )) という特殊な記号を使います。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "計算はコンピュータにお任せ",
          "image": "/illustrations/common/robot_greet.png",
          "content": "# 高速な計算処理\n\nコンピュータは人間よりもずっと速く計算できます。プログラミングでは、特別な記号を使って計算の指示を出します。\n\n**使える記号：**\n- `+` たし算\n- `-` ひき算\n- `*` かけ算\n- `/` わり算"
        },
        {
          "title": "Bashの計算ルール",
          "image": "/illustrations/common/robot_greet.png",
          "content": "# $(( )) で囲む\n\nBashで計算をするときは、計算式を `$(( ))` で囲みます。この中では $（ドルマーク）なしで変数名を使えます。\n\n**コード例：**\n```bash\nx=10\ny=2\necho $((x + y))\n```\n\n**このコードは何をしているの？**\n1. xに10、yに2を入れる\n2. xとyを足した結果（12）を表示"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# はこに数字を入れる\na=5\nb=3\n# +でたし算\necho $((a + b))",
      "holeyCode": "# はこに数字を入れる\na=5\nb=3\n# +でたし算\necho $((a ___ b))",
      "correctLines": [
        "# はこに数字を入れる",
        "a=5",
        "b=3",
        "# +でたし算",
        ["echo $((a + b))", "echo $((b + a))"]
      ],
      "lineHints": [null, null, null, null, "たし算なので `+` を使います。全体を $(( )) で囲みます。", null],
      "candidates": {
        "operators": [
          "+"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "8\n"
        }
      ]
    },
    {
      "title": "「もし〜なら」で分けましょう",
      "description": "点数によって表示するメッセージを変えてみましょう。 [ ] を使うのがBashのやりかたです。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "条件分岐（じょうけんぶんき）とは？",
          "image": "/illustrations/common/robot_greet.png",
          "content": "# プログラムに判断させる\n\n状況によって動きを変えることを **条件分岐** と呼びます。\n\n**たとえば：** 「テストが80点以上ならご褒美」のように、条件によって結果を変えられます。"
        },
        {
          "title": "Bashの比較記号",
          "image": "/illustrations/common/robot_greet.png",
          "content": "# 特別な記号を使う\n\nBashでは数字の比較に特別な記号を使います：\n\n- `-gt` : より大きい（greater than）\n- `-lt` : より小さい（less than）\n- `-ge` : 以上（greater or equal）\n- `-le` : 以下（less or equal）\n- `-eq` : 等しい（equal）"
        },
        {
          "title": "if文の書き方",
          "image": "/illustrations/common/robot_greet.png",
          "content": "# if で始まり fi で終わる\n\n**コード例：**\n```bash\nif [ $score -gt 80 ]; then\n    echo \"Great\"\nfi\n```\n\n**このコードは何をしているの？**\n1. scoreが80より大きいか確認\n2. 大きければ「Great」と表示\n3. `fi`（ifの逆）で終わる"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "score=100\n# -gtで「より大きい」を指定\nif [ $score -gt 80 ]; then\n    echo \"Great\"\n# fiでif文を閉じる\nfi",
      "holeyCode": "# scoreに100を入れる\nscore=___\n# -gtで「より大きい」を指定\nif [ $score ___ 80 ]; then\n    # メッセージ（'Great'）\n    echo \"___\"\n# fiでif文を閉じる\n___",
      "correctLines": [
        "# scoreに100を入れる",
        "score=100",
        "# -gtで「より大きい」を指定",
        "if [ $score -gt 80 ]; then",
        "    # メッセージ（'Great'）",
        "    echo \"Great\"",
        "# fiでif文を閉じる",
        "fi"
      ],
      "lineHints": [null, null, null, "〜より大きい、をあらわす -gt を入力します。", null, "文字列を標準出力に表示します。", null, "if文（条件分岐）のブロックを終了します。"],
      "candidates": {
        "operators": [
          "-gt"
        ],
        "keywords": [
          "fi"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Great\n"
        }
      ]
    },
    {
      "title": "ちがう場合はどうしましょう？",
      "description": "else（エルス）を使って、「そうでなければ」の動きを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "それ以外の場合は？",
          "image": "/illustrations/common/robot_greet.png",
          "content": "# else（エルス）の役割\n\n条件に当てはまらなかったときの別のルートを作るのが **else（エルス）** です。「もし〜なら」とセットで使うことで、プログラムのルートを2つに分けることができます。"
        },
        {
          "title": "elseブロック",
          "image": "/illustrations/common/robot_greet.png",
          "content": "# 二つの動き\n\n条件に当てはまらないときの動きは `else` を使って入力します。\n\n**コード例：**\n```bash\nif [ $time -lt 12 ]; then\n    echo \"午前\"\nelse\n    echo \"午後\"\nfi\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "age=18\nif [ $age -ge 20 ]; then\n    echo \"Adult\"\n# elseでそれ以外の場合\nelse\n    echo \"Minor\"\nfi",
      "holeyCode": "# ageに18を入れる\nage=___\n# 20以上かを比較する演算子\nif [ $age ___ 20 ]; then\n    # 20歳以上のときのメッセージ（'Adult'）\n    echo \"___\"\n# elseでそれ以外の場合\n___\n    # それ以外のメッセージ（'Minor'）\n    echo \"___\"\nfi",
      "correctLines": [
        "# ageに18を入れる",
        "age=18",
        "# 20以上かを比較する演算子",
        "if [ $age -ge 20 ]; then",
        "    # 20歳以上のときのメッセージ（'Adult'）",
        "    echo \"Adult\"",
        "# elseでそれ以外の場合",
        "else",
        "    # それ以外のメッセージ（'Minor'）",
        "    echo \"Minor\"",
        "fi"
      ],
      "lineHints": [null, null, null, "以上、をあらわす -ge を入力します。", null, "文字列を標準出力に表示します。", null, "もし条件が満たされなかった場合に実行する処理を記述します。", null, "文字列を標準出力に表示します。", null],
      "candidates": {
        "keywords": [
          "else"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Minor\n"
        }
      ]
    },
    {
      "title": "中身を全部出してみましょう",
      "description": "for ループを使って、リストの中身を一つずつ順番に表示します。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "繰り返し（ループ）とは？",
          "image": "/illustrations/common/robot_greet.png",
          "content": "# 作業を自動化する\n\n同じ処理を何度も繰り返すための仕組みが **ループ** です。\n\n**たとえば：** クラス全員の名前を呼ぶとき、一人ずつ手作業で呼ぶより、名簿を順番に読み上げるほうが楽ですよね。それがループです。"
        },
        {
          "title": "for文の書き方",
          "image": "/illustrations/common/robot_greet.png",
          "content": "# for と in と do と done\n\n**コード例：**\n```bash\nfor name in \"たろう\" \"はなこ\"; do\n    echo $name\ndone\n```\n\n**このコードは何をしているの？**\n1. 「たろう」「はなこ」を順番にnameに入れる\n2. それぞれのnameを表示\n3. 全員分終わったら `done` で終了"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "names=(\"Alice\" \"Bob\")\n# inで配列の中身を取り出す\nfor name in \"${names[@]}\"; do\n    echo $name\n# doneでループを終了\ndone",
      "holeyCode": "names=(\"Alice\" \"Bob\")\n# inで配列の中身を取り出す\nfor name ___ \"${names[@]}\"; do\n    echo $name\n# doneでループを終了\n___",
      "correctLines": [
        "names=(\"Alice\" \"Bob\")",
        "# inで配列の中身を取り出す",
        "for name in \"${names[@]}\"; do",
        "    echo $name",
        "# doneでループを終了",
        "done"
      ],
      "lineHints": [null, null, "指定された回数や範囲で、繰り返し処理（ループ）を行います。", null, null, "ループ処理のブロックを終了します。"],
      "candidates": {
        "keywords": [
          "in",
          "done"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Alice\nBob\n"
        }
      ]
    },
    {
      "title": "自分だけの関数を作りましょう",
      "description": "よく使う手順をまとめて、名前をつけた「関数（かんすう）」を作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "関数（かんすう）とは？",
          "image": "/illustrations/common/robot_greet.png",
          "content": "# 処理をまとめた「技（わざ）」\n\n何度も使う手順をまとめて名前をつけたものを **関数** と呼びます。\n\n**たとえば：** 「挨拶する」という技を一度作れば、「挨拶！」と言うだけで毎回同じ動きができます。便利なショートカットのようなものです。"
        },
        {
          "title": "関数の作り方",
          "image": "/illustrations/common/robot_greet.png",
          "content": "# 名前() { } で定義\n\n**コード例：**\n```bash\naisatsu() {\n    echo \"こんにちは\"\n}\n\naisatsu  # 呼び出し\n```\n\n**このコードは何をしているの？**\n1. `aisatsu`という関数を作る（中身は「こんにちは」を表示）\n2. `aisatsu` と書くだけで実行できる"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "greet() {\n    echo \"Hello\"\n}\n# greetで関数を呼び出す\ngreet",
      "holeyCode": "greet() {\n    echo \"Hello\"\n}\n# greetで関数を呼び出す\n___",
      "correctLines": [
        "greet() {",
        "    echo \"Hello\"",
        "}",
        "# greetで関数を呼び出す",
        "greet"
      ],
      "lineHints": ["greet という名前の関数を定義します。", "文字列を標準出力に表示します。", "関数の終わりです。", null, "関数名を入力して、実行します。"],
      "candidates": {
        "functions": [
          "greet"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello\n"
        }
      ]
    }
  ]
};
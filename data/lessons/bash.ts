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
          "image": "/illustrations/common/monitor.png",
          "content": "# コンピュータと対話する言葉\n\nBashは、キーボードから直接コンピュータに命令を出すためのツールです。マウスを使わずに、たくさんのファイルを一気に処理したり、システムの設定を変えたりするのが得意です。"
        },
        {
          "title": "画面に文字を出すには？",
          "image": "/illustrations/common/monitor.png",
          "content": "# echo（エコー）\n\n画面に文字を出したいときは、`echo` と入力して、そのあとに表示したい文字を続けます。プログラミングの第一歩です！"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\n`echo` を使って `Hello, World!` と表示させてみましょう。\n\n**入力するコードのヒント：**\n```bash\necho \"Hello, World!\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# Hello, World!と入力する\necho \"Hello, World!\"",
      "holeyCode": "___\\n___\\n___\\n___"Hello, World!\" と入力してね\necho \"___\"",
      "correctLines": [
        ""# "Hello",
        "World!" と入力しましょう"",
        ""echo "Hello",
        "World!"""
      ],
      "lineHints": [
        null,
        "echo を使って、そのあとの文字を画面に出します。"
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
          "image": "/illustrations/common/box.png",
          "content": "# データを保存する仕組み\n\nプログラムの中で数字や文字を使い回すために、名前をつけて保存する場所を **変数（へんすう）** と呼びます。"
        },
        {
          "title": "隙間（すきま）に気をつけて",
          "image": "/illustrations/common/box.png",
          "content": "# 変数の作りかた\n\nBashでは、`名前=中身` というふうに、つなげて入力します。取り出すときは名前の前に `$` をつけます。\n\n**コード例：**\n```bash\nname=\"Bash\"\necho $name\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# Bashと入力する\nname=\"Bash\"\n# nameと入力する\necho $name",
      "holeyCode": "# 変数 Bash を使いましょう\\n___\\n# 変数 name の中身を表示しましょう\\n___"Bash\" と入力してね\nname=\"___\"\n# ここに name と入力して中身を表示してね\necho $___",
      "correctLines": [
        "# 変数 Bash を使いましょう",
        "name="Bash"",
        "# 変数 name の中身を表示しましょう",
        "echo $name"
      ],
      "lineHints": [
        null,
        "name=\"Bash\" と入力します。 = のまわりにスペースを入れないでください！",
        "はこの名前 $name を指定して、表示させます。"
      ],
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
          "image": "/illustrations/common/robot_math.png",
          "content": "# 高速な計算処理\n\nコンピュータは人間よりもずっと速く計算できます。プログラミングでは、特別な記号を使って計算の指示を出します。"
        },
        {
          "title": "計算のルール",
          "image": "/illustrations/common/robot_math.png",
          "content": "# $(( )) を使いましょう\n\nBashで計算をするときは、全体を `$(( ))` で囲む決まりがあります。中では算数と同じ記号が使えます。\n\n**コード例：**\n```bash\nx=10\ny=2\necho $((x + y))\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# はこに数字を入れる\na=5\nb=3\n# +でたし算\necho $((a + b))",
      "holeyCode": "___\n___\n# + を入力してたし算しましょう\n___",
      "correctLines": [
        
        
        "a=5",
        "b=3",
        "# + を入力してたし算しましょう",
        "echo $((a + b))"
      ],
      "lineHints": [
        null,
        null,
        null,
        "たし算なので `+` を使います。全体を $(( )) で囲みます。"
      ],
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
          "image": "/illustrations/common/if.png",
          "content": "# プログラムに判断させる\n\n状況によって動きを変えることを **条件分岐** と呼びます。Bashでは少し特殊な記号（-gt など）を使って条件を指定します。"
        },
        {
          "title": "if と then",
          "image": "/illustrations/common/if.png",
          "content": "# fi で閉じましょう\n\nBashでは、`if [ 条件 ]; then` と入力し、最後に `fi` と入力して終わらせるのがルールです。\n\n**コード例：**\n```bash\nif [ $score -gt 1000 ]; then\n    echo \"高い！\"\nfi\n```\n`-gt` は「〜より大きい」という意味です。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "score=100\n# -gtで「より大きい」を指定\nif [ $score -gt 80 ]; then\n    echo \"Great\"\n# fiでif文を閉じる\nfi",
      "holeyCode": "___"Great\"\n# ここに fi と入力して終わりにしてね\n___",
      "correctLines": [
        ""score=100",\n        "if [ $score -gt 80"
      ]; then",
        "    echo \"Great\"",
        "fi"
      ],
      "lineHints": [
        null,
        "〜より大きい、をあらわす -gt を入力します。",
        "Great と表示します。",
        "if を逆さにした `fi` と入力して終わります。"
      ],
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
          "image": "/illustrations/common/if.png",
          "content": "# else（エルス）の役割\n\n条件に当てはまらなかったときの別のルートを作るのが **else（エルス）** です。「もし〜なら」とセットで使うことで、プログラムのルートを2つに分けることができます。"
        },
        {
          "title": "elseブロック",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# 二つの動き\n\n条件に当てはまらないときの動きは `else` を使って入力します。\n\n**コード例：**\n```bash\nif [ $time -lt 12 ]; then\n    echo \"午前\"\nelse\n    echo \"午後\"\nfi\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "age=18\nif [ $age -ge 20 ]; then\n    echo \"Adult\"\n# elseでそれ以外の場合\nelse\n    echo \"Minor\"\nfi",
      "holeyCode": "___"Adult\"\n# ここに else と入力してね\n___\n    echo \"Minor\"\nfi",
      "correctLines": [
        ""age=18",\n        "if [ $age -ge 20"
      ]; then",
        "    echo \"Adult\"",
        "else",
        "    echo \"Minor\"",
        "fi"
      ],
      "lineHints": [
        null,
        null,
        null,
        "そうでなければ、をあらわす `else` を入力しましょう。",
        null,
        null
      ],
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
          "image": "/illustrations/common/loop.png",
          "content": "# 作業を自動化する\n\n同じ処理を何度も繰り返すための仕組みが **ループ** です。たくさんのファイルやデータを一つずつ順番に処理したいときに役立ちます。"
        },
        {
          "title": "for と in",
          "image": "/illustrations/common/loop.png",
          "content": "# do と done で囲みましょう\n\n`for 変数 in リスト; do` と入力し、最後に `done` と入力すると、中身を順番に取り出して処理できます。\n\n**コード例：**\n```bash\nfor name in \"たろう\" \"はなこ\"; do\n    echo $name\ndone\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "names=(\"Alice\" \"Bob\")\n# inで配列の中身を取り出す\nfor name in \"${names[@]}\"; do\n    echo $name\n# doneでループを終了\ndone",
      "holeyCode": "___\\n___"Alice\" \"Bob\")\n# ここに in と入力してね\nfor name ___ \"${names[@]}\"; do\n    echo $name\n# ここに done と入力して終わりにしてね\n___",
      "correctLines": [
        "names=("Alice" "Bob")",
        ""for name in "${names[@"
      ]}\"; do",
        "    echo $name",
        "done"
      ],
      "lineHints": [
        null,
        "「〜の中で」をあらわす `in` を入力しましょう。",
        null,
        "終わりの合図 `done` を入力しましょう。"
      ],
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
          "image": "/illustrations/common/function.png",
          "content": "# 処理のパッケージ化\n\n何度も使う手順をまとめて名前をつけたものを **関数** と呼びます。一度作れば名前を呼ぶだけで何度でも実行できる、便利なショートカットのようなものです。"
        },
        {
          "title": "手順をまとめましょう",
          "image": "/illustrations/common/function.png",
          "content": "# 関数の定義\n\nやりたいことをひとまとめにして、名前をつけることができます。呼び出すだけでいつでも動かせます。\n\n**コード例：**\n```bash\naisatsu() {\n    echo \"こんにちは\"\n}\n\naisatsu # 呼び出し\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "greet() {\n    echo \"Hello\"\n}\n# greetで関数を呼び出す\ngreet",
      "holeyCode": "___\\n    ___\\n___\\n___"Hello\"\n}\n# ここに greet と入力して関数を動かしてね\n___",
      "correctLines": [
        "greet() {",
        "    echo "Hello"",
        "}",
        "greet"
      ],
      "lineHints": [
        "greet という名前の関数を定義します。",
        "メッセージを表示します。",
        "関数の終わりです。",
        "関数名を入力して、実行します。"
      ],
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
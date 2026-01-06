export const bashData = {
  "language": "bash",
  "lessonId": "bash-1",
  "lessonTitle": "Bash (バッシュ) にちょうせん！",
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
          "title": "echo を使いましょう",
          "content": "# メッセージを表示します\n\nBashで画面に文字を出したいときは、`echo` と入力して、そのあとに表示したい文字を続けます。\n\n**コード例：**\n```bash\necho \"Hello, Bash!\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 画面にメッセージを出す関数\necho \"Hello, Bash!\"",
      "holeyCode": "# 画面にメッセージを出す関数\necho \"___\"",
      "correctLines": [
        "# 画面にメッセージを出す関数",
        "echo \"Hello, Bash!\""
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
          "Hello, Bash!"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, Bash!\n"
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
          "title": "隙間（すきま）に気をつけて",
          "content": "# 変数の作りかた\n\nBashでは、`名前=中身` というふうに、つなげて入力します。取り出すときは名前の前に `$" をつけますよ。\n\n**コード例：**\n```bash\nname=\"Bash\"\necho $name\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# name というはこに Bash と入れる\nname=\"Bash\"\necho $name",
      "holeyCode": "# name というはこに Bash と入れる\nname=\"___\"\necho $___",
      "correctLines": [
        "# name というはこに Bash と入れる",
        "name=\"Bash\"",
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
          "title": "計算のルール",
          "content": "# $(( )) を使いましょう\n\nBashで計算をするときは、全体を `$(( ))` で囲む決まりがあります。中では算数と同じ記号が使えますよ。\n\n**コード例：**\n```bash\na=5\nb=3\necho $((a + b))\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "a=5\nb=3\n# たし算した答えを出す\necho $((a + b))",
      "holeyCode": "a=5\nb=3\n# たし算した答えを出す\necho $((a ___ b))",
      "correctLines": [
        "a=5",
        "b=3",
        "# たし算した答えを出す",
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
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if と then",
          "content": "# fi で閉じましょう\n\nBashでは、`if [ 条件 ]; then` と入力し、最後に `fi` と入力して終わらせるのがルールです。\n\n**コード例：**\n```bash\nif [ $score -gt 80 ]; then\n    echo \"合格！\"\nfi\n```\n`-gt` は「〜より大きい（greater than）」という意味ですよ。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "score=100\nif [ $score -gt 80 ]; then\n    echo \"Great\"\nfi",
      "holeyCode": "score=100\nif [ $score ___ 80 ]; then\n    echo \"Great\"\n___",
      "correctLines": [
        "score=100",
        "if [ $score -gt 80 ]; then",
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
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "elseブロック",
          "content": "# 二つの動き\n\n条件に当てはまらないときの動きは `else` を使って入力します。\n\n**コード例：**\n```bash\nif [ $age -ge 20 ]; then\n    echo \"大人です\"\nelse\n    echo \"子供です\"\nfi\n```\n`-ge` は「〜以上（greater than or equal）」という意味です。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "age=18\nif [ $age -ge 20 ]; then\n    echo \"Adult\"\nelse\n    echo \"Minor\"\nfi",
      "holeyCode": "age=18\nif [ $age -ge 20 ]; then\n    echo \"Adult\"\n___ \n    echo \"Minor\"\nfi",
      "correctLines": [
        "age=18",
        "if [ $age -ge 20 ]; then",
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
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "for と in",
          "content": "# do と done で囲みましょう\n\n`for 変数 in リスト; do` と入力し、最後に `done` と入力すると、中身を順番に取り出して処理できます。\n\n**コード例：**\n```bash\nfor name in \"たろう\" \"はなこ\"; do\n    echo $name\ndone\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "names=(\"Alice\" \"Bob\")\nfor name in \"${names[@]}\"; do\n    echo $name\ndone",
      "holeyCode": "names=(\"Alice\" \"Bob\")\nfor name ___ \"${names[@]}\"; do\n    echo $name\n___",
      "correctLines": [
        "names=(\"Alice\" \"Bob\")",
        "for name in \"${names[@]}\"; do",
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
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "手順をまとめましょう",
          "content": "# 関数の定義\n\nやりたいことをひとまとめにして、名前をつけることができます。呼び出すだけでいつでも動かせますよ。\n\n**コード例：**\n```bash\naisatsu() {\n    echo \"こんにちは\"\n}\n\naisatsu # 呼び出し\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "greet() {\n    echo \"Hello\"\n}\ngreet",
      "holeyCode": "greet() {\n    echo \"Hello\"\n}\n___",
      "correctLines": [
        "greet() {",
        "    echo \"Hello\"",
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
}
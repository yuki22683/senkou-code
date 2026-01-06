export const haskellData = {
  "language": "haskell",
  "lessonId": "haskell-1",
  "lessonTitle": "Haskell (ハスケル) にちょうせん！",
  "lessonDescription": "数学のようなきっちりした美しさを持つ言葉「Haskell（ハスケル）」のきほんを学びましょう。計算の答えを次の計算にパスしていくような、独特な作りかたを体験できます。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面に文字を出してみましょう",
      "description": "Haskellを使って画面に「こんにちは」と表示させてみましょう。putStrLn（プットストラライン）という関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "メッセージを表示します",
          "content": "# putStrLn 関数\n\n画面に文字を出して改行したいときは、`putStrLn` と入力して、そのあとに `\" \"` で囲んだ文字を続けます。\n\n**コード例：**\n```haskell\nmain = putStrLn \"Hello, Haskell!\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "main = putStrLn \"Hello, Haskell!\"",
      "holeyCode": "main = putStrLn \"___\"",
      "correctLines": [
        "main = putStrLn \"Hello, Haskell!\""
      ],
      "lineHints": [
        "putStrLn を使って、そのあとの文字を画面に出します。"
      ],
      "candidates": {
        "functions": [
          "putStrLn"
        ],
        "strings": [
          "Hello, Haskell!"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, Haskell!\n"
        }
      ]
    },
    {
      "title": "名前に「あたい」をつけましょう",
      "description": "数字や文字に名前をつけて、あとで使いやすくしてみましょう。Haskellでは一度決めた名前の中身は変えられないというルールがあります。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "名前をつけます",
          "content": "# 変数の定義\n\nHaskellでは、`名前 = 中身` と入力することで、データに名前をつけることができます。\n\n**コード例：**\n```haskell\nname = \"Haskell\"\nmain = putStrLn name\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "x = 10\nmain = print x",
      "holeyCode": "x = ___\nmain = print ___",
      "correctLines": [
        "x = 10",
        "main = print x"
      ],
      "lineHints": [
        "x という名前に 10 をセットします。",
        "print 関数を使って、中身を表示します。"
      ],
      "candidates": {
        "variables": [
          "x"
        ],
        "numbers": [
          "10"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "コンピュータで計算しましょう",
      "description": "Haskellを使って、たし算をしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "計算の記号",
          "content": "# そのまま計算できます\n\n算数と同じ記号を使って計算ができますよ。\n\n- **+** : たし算\n- **-** : ひき算\n- **\\*** : かけ算\n- **/** : わり算"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "a = 5\nb = 3\nmain = print (a + b)",
      "holeyCode": "a = 5\nb = 3\nmain = print (a ___ b)",
      "correctLines": [
        "a = 5",
        "b = 3",
        "main = print (a + b)"
      ],
      "lineHints": [
        null,
        null,
        "たし算なので `+` を使います。 ( ) で囲むと計算を先にします。"
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
      "title": "データをならべる「リスト」",
      "description": "たくさんのデータを一つの「列」にまとめて並べられる「リスト」を使ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "リストの作りかた",
          "content": "# [ ] を使いましょう\n\nリストの中身を取り出すときは、ちょっと難しいですが `!!` という記号を使います。さいしょのデータは **「0番」** から数えるのがルールですよ。\n\n**コード例：**\n```haskell\nnums = [10, 20, 30]\nmain = print (nums !! 1) -- 20 が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "colors = [\"red\", \"blue\"]\nmain = putStrLn (colors !! 1)",
      "holeyCode": "colors = [\"red\", \"blue\"]\nmain = putStrLn (colors !! ___)",
      "correctLines": [
        "colors = [\"red\", \"blue\"]",
        "main = putStrLn (colors !! 1)"
      ],
      "lineHints": [
        null,
        "2番目のデータの番号は 1 です。 `!! 1` と入力してください。"
      ],
      "candidates": {
        "numbers": [
          "1"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "blue\n"
        }
      ]
    },
    {
      "title": "「もし〜なら」で分けましょう",
      "description": "条件によって答えを変えてみましょう。 if then else という言葉を使います。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if, then, else",
          "content": "# 全てセットで入力します\n\nHaskellの `if` は、必ず `then`（そのとき）と `else`（そうでなければ）を一緒に書くルールになっています。\n\n**コード例：**\n```haskell\nresult score = if score > 80 then \"合格\" else \"ざんねん\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "score = 100\nmain = putStrLn (if score > 80 then \"Great\" else \"Try again\")",
      "holeyCode": "score = 100\nmain = putStrLn (if score ___ 80 then \"Great\" else \"Try again\")",
      "correctLines": [
        "score = 100",
        "main = putStrLn (if score > 80 then \"Great\" else \"Try again\")"
      ],
      "lineHints": [
        null,
        "比較するための記号 `>` を入力しましょう。"
      ],
      "candidates": {
        "operators": [
          ">
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
      "title": "自分だけの関数を作りましょう",
      "description": "計算の手順をまとめて、名前をつけた「関数（かんすう）」を作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "関数を定義しましょう",
          "content": "# 数学の式のように書きます\n\n`関数名 引数 = やりたいこと` のように入力します。\n\n**コード例：**\n```haskell\ndouble x = x * 2\nmain = print (double 5) -- 10 が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "greet name = \"Hello, \" ++ name\nmain = putStrLn (greet \"Haskell\")",
      "holeyCode": "greet name = \"Hello, \" ++ name\nmain = putStrLn (___ \"Haskell\")",
      "correctLines": [
        "greet name = \"Hello, \" ++ name",
        "main = putStrLn (greet \"Haskell\")"
      ],
      "lineHints": [
        "greet という名前の関数を定義します。 `++` は文字をくっつける記号です。",
        "作った関数 `greet` を呼び出して使います。"
      ],
      "candidates": {
        "functions": [
          "greet"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, Haskell\n"
        }
      ]
    }
  ]
}
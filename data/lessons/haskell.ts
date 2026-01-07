export const haskellData = {
  "language": "haskell",
  "lessonId": "haskell-1",
  "lessonTitle": "Haskell (ハスケル) に挑戦！",
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
          "title": "Haskell（ハスケル）とは？",
          "image": "/illustrations/common/monitor.png",
          "content": "# 数学のように美しい言葉\n\nHaskellは、数学の考え方をベースにしたプログラミング言語です。一度決めたデータの中身を変えないといった厳格なルールがあり、非常にバグが少ない堅牢なシステムを作ることができます。"
        },
        {
          "title": "画面に文字を出すには？",
          "image": "/illustrations/common/monitor.png",
          "content": "# putStrLn（プット・ストラ・ライン）\n\n画面に文字を出して改行したいときは、`putStrLn` という名前の関数を使います。文字は `\" \"` で囲みましょう。"
        },
        {
          "title": "メッセージを表示します",
          "image": "/illustrations/common/monitor.png",
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
          "title": "変数（定義）とは？",
          "image": "/illustrations/common/box.png",
          "content": "# データの保存と不変性\n\nHaskellでは、データに名前をつけて保存することを「定義」と呼びます。一度決めたら二度と中身を変えられない（不変）というルールが、プログラムを安定させます。"
        },
        {
          "title": "名前をつけます",
          "image": "/illustrations/common/box.png",
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
          "title": "計算はコンピュータにお任せ",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 正確で速い計算\n\nコンピュータは人間よりもずっと速く計算できます。プログラミングでは、算数と同じ記号を使って計算の指示を出します。"
        },
        {
          "title": "計算の記号",
          "image": "/illustrations/common/robot_math.png",
          "content": "# そのまま計算できます\n\n算数と同じ記号を使って計算ができます。\n\n- **+** : たし算\n- **-** : ひき算\n- **\*** : かけ算\n- **/** : わり算"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "a = 5\nb = 3\n// たし算した結果を表示する\nmain = print (a + b)",
      "holeyCode": "a = 5\nb = 3\n// たし算した結果を表示する\nmain = print (a ___ b)",
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
    }
  ]
};
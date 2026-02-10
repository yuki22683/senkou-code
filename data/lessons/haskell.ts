export const haskellData = {
  "language": "haskell",
  "lessonId": "haskell-1",
  "lessonTitle": "Haskell (ハスケル) に挑戦！",
  "lessonDescription": "数学のようなきっちりした美しさを持つ言葉「Haskell（ハスケル）」のきほんを学びましょう。計算の答えを次の計算にパスしていくような、独特な作りかたを体験できます。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "tutorialSlides": [
    {
      "title": "Haskellへようこそ！",
      "content": "**Haskell（ハスケル）** は、1990年に作られた関数型プログラミング言語です。\\n\\n数学的で美しいコードが書けるのが特徴です。\\n\\n「純粋関数型」と呼ばれ、副作用がないコードを書きやすいです。"
    },
    {
      "title": "画面に文字を出す",
      "content": "Haskellで画面に文字を出すには `putStrLn` を使います。\\n\\n```haskell\\nmain = putStrLn \\\"Welcome to FP!\\\"\\n```\\n\\n`main` はプログラムの開始地点です。"
    },
    {
      "title": "変数（束縛）",
      "content": "Haskellでは変数を「束縛（そくばく）」と呼びます。一度決めたら変更できません。\\n\\n```haskell\\nx = 10\\nname = \\\"太郎\\\"\\n```\\n\\n`=` は「等しい」という意味で、代入ではなく定義です。"
    },
    {
      "title": "計算する",
      "content": "Haskellでは数字を計算できます。\\n\\n```haskell\\na = 5\\nb = 3\\nmain = print (a + b)  -- 8\\n```\\n\\n`--` から後ろはコメントです。`print` で値を表示します。"
    },
    {
      "title": "関数を作る",
      "content": "Haskellでは関数を簡単に作れます。\\n\\n```haskell\\ndouble x = x * 2\\nadd x y = x + y\\n\\nmain = print (double 5)  -- 10\\n```\\n\\n関数名の後に引数を書くだけです。"
    },
    {
      "title": "リスト",
      "content": "複数のデータをまとめて扱えます。\\n\\n```haskell\\nnums = [1, 2, 3, 4, 5]\\nhead nums  -- 1（先頭）\\ntail nums  -- [2, 3, 4, 5]（残り）\\nnums !! 0  -- 1（インデックス0）\\n```\\n\\nリストは同じ型のデータだけを入れられます。"
    }
  ],
  "exercises": [
    {
      "title": "画面に文字を出してみましょう",
      "description": "画面に文字を表示する方法を学びます",
      "tutorialSlides": [
        {
          "title": "Haskell（ハスケル）とは？",
          "content": "# 数学のように美しい言葉\\n\\nHaskellは、数学の考え方をベースにしたプログラミング言語です。一度決めたデータの中身を変えないといった厳格なルールがあり、非常にバグが少ない堅牢なシステムを作ることができます。"
        },
        {
          "title": "画面に文字を出すには？",
          "content": "# putStrLn（プット・ストラ・ライン）\\n\\n画面に文字を出して改行したいときは、`putStrLn` という名前の関数を使います。文字は `\" \"` で囲みましょう。"
        },
        {
          "title": "メッセージを表示します",
          "content": "# putStrLn 関数\\n\\n画面に文字を出して改行したいときは、`putStrLn` と入力して、そのあとに `\" \"` で囲んだ文字を続けます。\\n\\n**コード例：**\\n```haskell\\nmain = putStrLn \"Hello, Haskell!\"\\n```"
        }
      ],
      "correctCode": "-- Welcome to FP!を表示\\nmain = putStrLn \"Welcome to FP!\"",
      "holeyCode": "-- Welcome to FP!を表示\\n___ = ___ \"___\"",
      "correctLines": [
          "-- Welcome to FP!を表示",
          "main = putStrLn \"Welcome to FP!\""
        ],
      "lineHints": [
          null,
          "putStrLn を使って、そのあとの文字を画面に出します。"
        ],
        "candidates": {
          "functions": [
            "putStrLn"
          ],
          "strings": [
            "Welcome to FP!"
          ],
          "others": ["main"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Welcome to FP!\\n"
          }
        ]
      },
    {
      "title": "名前に「あたい」をつけましょう",
      "description": "名前に「あたい」をつけましょうの使い方を学びます",
      "tutorialSlides": [
        {
          "title": "変数（定義）とは？",
          "content": "# データの保存と不変性\\n\\nHaskellでは、データに名前をつけて保存することを「定義」と呼びます。一度決めたら二度と中身を変えられない（不変）というルールが、プログラムを安定させます。"
        },
        {
          "title": "名前をつけます",
          "content": "# 変数の定義\\n\\nHaskellでは、`名前 = 中身` と入力することで、データに名前をつけることができます。\\n\\n**コード例：**\\n```haskell\\nname = \"Haskell\"\\nmain = putStrLn name\\n```"
        }
      ],
      "correctCode": "-- 10を入力\\nx = 10\\n-- xを入力\\nmain = print x",
      "holeyCode": "-- 10を入力\\n___ = ___\\n-- xを入力\\n___ = ___ ___",
      "correctLines": [
          "-- 10を入力",
          "x = 10",
          "-- xを入力",
          "main = print x"
        ],
      "lineHints": [
          null,
          "変数に数値を代入（保存）します。",
          null,
          "print 関数を使って、中身を表示します。"
        ],
        "candidates": {
          "variables": [
            "x"
          ],
          "numbers": [
            "10"
          ],
          "others": ["main", "print", "x"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "コンピュータで計算しましょう",
      "description": "数値の計算方法を学びます",
      "tutorialSlides": [
        {
          "title": "計算はコンピュータにお任せ",
          "content": "# 正確で速い計算\\n\\nコンピュータは人間よりもずっと速く計算できます。プログラミングでは、算数と同じ記号を使って計算の指示を出します。"
        },
        {
          "title": "計算の記号",
          "content": "# そのまま計算できます\\n\\n算数と同じ記号を使って計算ができます。\\n\\n- **+** : たし算\\n- **-** : ひき算\\n- **\*** : かけ算\\n- **/** : わり算"
        }
      ],
      "correctCode": "-- 5を入力\\na = 5\\n-- 3を入力\\nb = 3\\n-- +でたし算\\nmain = print (a + b)",
      "holeyCode": "-- 5を入力\\n___ = ___\\n-- 3を入力\\n___ = ___\\n-- +でたし算\\n___ = ___ (___ ___ ___)",
      "correctLines": [
          "-- 5を入力",
          "a = 5",
          "-- 3を入力",
          "b = 3",
          "-- +でたし算",
          "main = print (a + b)"
        ],
      "lineHints": [
          null,
          "変数に数値を代入（保存）します。",
          null,
          "変数に数値を代入（保存）します。",
          null,
          "たし算なので `+` を使います。 ( ) で囲むと計算を先にします。"
        ],
        "candidates": {
          "operators": [
            "+"
          ],
          "others": ["main", "print", "a", "b", "5", "3"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "8\\n"
          }
        ]
      }
  ]
};
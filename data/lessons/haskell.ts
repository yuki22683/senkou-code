export const haskellData = {
  "language": "haskell",
  "lessonId": "haskell-1",
  "lessonTitle": "Haskell I",
  "lessonDescription": "純粋関数型言語Haskellの基本を学びます。副作用の分離、遅延評価など独特な概念の入り口へ。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "Hello Worldを出力しよう",
      "description": "Haskellで画面に文字を表示するには putStrLn を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "main関数",
          "content": "# エントリーポイント\n\nプログラムの実行は `main` から始まります。表示には `putStrLn` を使います。\n\n**コード例：**\n```haskell\nmain = putStrLn \"Hello, Haskell!\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "main = putStrLn \"Hello, Haskell!\"",
      "holeyCode": "main = putStrLn \"___\"",
      "correctLines": [
        "main = putStrLn \"Hello, Haskell!\""
      ],
      "lineHints": [
        "Hello, Haskell! を出力します。"
      ],
      "candidates": {
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
      "title": "変数（バインディング）",
      "description": "letを使って値に名前を付けましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "let",
          "content": "# 不変性\n\nHaskellの変数は一度定義すると変更できません（イミュータブル）。\n\n**コード例：**\n```haskell\nmain = do\n    let x = 10\n    print x\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "main = do\n    let x = 10\n    print x",
      "holeyCode": "main = do\n    let x = ___\n    print ___",
      "correctLines": [
        "main = do",
        "    let x = 10",
        "    print x"
      ],
      "lineHints": [
        "10を定義します。",
        "xを出力します（printはshowしてputStrLnする関数）。"
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
      "title": "計算",
      "description": "計算を行いましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "演算",
          "content": "# 通常の演算子\n\n+, -, *, / などが使えます。\n\n**コード例：**\n```haskell\nmain = print (5 + 3)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "main = do\n    let a = 5\n    let b = 3\n    print (a + b)",
      "holeyCode": "main = do\n    let a = 5\n    let b = 3\n    print (a ___ b)",
      "correctLines": [
        "main = do",
        "    let a = 5",
        "    let b = 3",
        "    print (a + b)"
      ],
      "lineHints": [
        null,
        null,
        null,
        "a + b を出力します。"
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
      "title": "文字列結合",
      "description": "文字列を結合して表示しましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "結合演算子",
          "content": "# ++\n\n文字列同士を ++ で結合します。数値を文字列にするには `show` を使います。\n\n**コード例：**\n```haskell\nmain = putStrLn (\"Age: \" ++ show 20)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "main = do\n    let age = 20\n    putStrLn (\"Age: \" ++ show age)",
      "holeyCode": "main = do\n    let age = 20\n    putStrLn (\"Age: \" ++ ___ age)",
      "correctLines": [
        "main = do",
        "    let age = 20",
        "    putStrLn (\"Age: \" ++ show age)"
      ],
      "lineHints": [
        null,
        null,
        "show関数で文字列化します。"
      ],
      "candidates": {
        "functions": [
          "show"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Age: 20\n"
        }
      ]
    },
    {
      "title": "リスト",
      "description": "リストを作成し、要素を取り出しましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "リスト",
          "content": "# [ ]\n\n同じ型の要素を格納します。`!!` 演算子でインデックス指定アクセスができます。\n\n**コード例：**\n```haskell\nlet nums = [10, 20]\nprint (nums !! 1) -- 20 を表示\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "main = do\n    let nums = [10, 20]\n    print (nums !! 1)",
      "holeyCode": "main = do\n    let nums = [10, 20]\n    print (nums ___ 1)",
      "correctLines": [
        "main = do",
        "    let nums = [10, 20]",
        "    print (nums !! 1)"
      ],
      "lineHints": [
        null,
        null,
        "!! 演算子を使います。"
      ],
      "candidates": {
        "operators": [
          "!!"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "20\n"
        }
      ]
    },
    {
      "title": "if式",
      "description": "条件分岐を行います。Haskellのifは値を返す「式」です。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if-then-else",
          "content": "# elseは必須\n\n`if 条件 then 値 else 値` という形になります。\n\n**コード例：**\n```haskell\nif score > 80 then \"Great\" else return ()\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "main = do\n    let score = 100\n    if score > 80\n        then putStrLn \"Great\"\n        else return ()",
      "holeyCode": "main = do\n    let score = 100\n    if score ___ 80\n        then putStrLn \"Great\"\n        else return ()",
      "correctLines": [
        "main = do",
        "    let score = 100",
        "    if score > 80",
        "        then putStrLn \"Great\"",
        "        else return ()"
      ],
      "lineHints": [
        null,
        null,
        "比較演算子 > を使います。",
        null,
        null
      ],
      "candidates": {
        "operators": [
          ">"
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
      "title": "if-else式",
      "description": "else側でも処理を行いましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "分岐",
          "content": "# 分岐するアクション\n\n条件に応じて実行するアクションを切り替えます。\n\n**コード例：**\n```haskell\nif x > 10 then putStrLn \"Big\" else putStrLn \"Small\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "main = do\n    let x = 5\n    if x > 10\n        then putStrLn \"Big\"\n        else putStrLn \"Small\"",
      "holeyCode": "main = do\n    let x = 5\n    if x > 10\n        then putStrLn \"Big\"\n        ___ putStrLn \"Small\"",
      "correctLines": [
        "main = do",
        "    let x = 5",
        "    if x > 10",
        "        then putStrLn \"Big\"",
        "        else putStrLn \"Small\""
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "else を記述します。"
      ],
      "candidates": {
        "keywords": [
          "else"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Small\n"
        }
      ]
    },
    {
      "title": "ループ（mapM_）",
      "description": "Haskellにはforループがありません。代わりにmapM_などを使います。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "mapM_",
          "content": "# リストの各要素に適用\n\nリストの要素を一つずつ取り出して処理を行います。\n\n**コード例：**\n```haskell\nmapM_ print [1, 2, 3]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "main = do\n    let nums = [1, 2, 3]\n    mapM_ print nums",
      "holeyCode": "main = do\n    let nums = [1, 2, 3]\n    ___ print nums",
      "correctLines": [
        "main = do",
        "    let nums = [1, 2, 3]",
        "    mapM_ print nums"
      ],
      "lineHints": [
        null,
        null,
        "mapM_ 関数を使います。"
      ],
      "candidates": {
        "functions": [
          "mapM_"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n2\n3\n"
        }
      ]
    },
    {
      "title": "タプル（データ構造）",
      "description": "異なる型のデータをまとめるタプルを使いましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "タプル",
          "content": "# ( )\n\n複数の値を一つにまとめます。`fst` で1つ目の要素を取得できます。\n\n**コード例：**\n```haskell\nlet user = (\"Alice\", 20)\nputStrLn (fst user) -- \"Alice\" を表示\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "main = do\n    let user = (\"Alice\", 20)\n    putStrLn (fst user)",
      "holeyCode": "main = do\n    let user = (\"Alice\", 20)\n    putStrLn (___ user)",
      "correctLines": [
        "main = do",
        "    let user = (\"Alice\", 20)",
        "    putStrLn (fst user)"
      ],
      "lineHints": [
        null,
        null,
        "fst 関数で1つ目の要素を取得します。"
      ],
      "candidates": {
        "functions": [
          "fst"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Alice\n"
        }
      ]
    },
    {
      "title": "関数定義",
      "description": "簡単な関数を定義して呼び出します。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "関数定義",
          "content": "# 名前 引数 = 本体\n\n処理に名前を付けて定義します。\n\n**コード例：**\n```haskell\ngreet = putStrLn \"Hello\"\n\nmain = greet -- 呼び出し\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "greet :: IO ()\ngreet = putStrLn \"Hello\"\nmain = greet",
      "holeyCode": "greet :: IO ()\ngreet = putStrLn \"Hello\"\nmain = ___",
      "correctLines": [
        "greet :: IO ()",
        "greet = putStrLn \"Hello\"",
        "main = greet"
      ],
      "lineHints": [
        null,
        null,
        "greet を呼び出します。"
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

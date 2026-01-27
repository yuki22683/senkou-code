export const haskell2Data = {
  "language": "haskell",
  "lessonId": "haskell-2",
  "lessonTitle": "Haskell II - 関数と型",
  "lessonDescription": "Haskellの強力な型システムと関数型プログラミングの基本を学びます。純粋関数と高階関数の考え方を身につけましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "exercises": [
    {
      "title": "関数を定義しよう",
      "description": "Haskellでの関数定義を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "関数の定義",
          "image": "/illustrations/common/book.png",
          "content": "# シンプルな定義\n\nHaskellでは、`名前 引数 = 本体` のようにシンプルに関数を定義します。括弧は不要です。"
        },
        {
          "title": "関数の使い方",
          "image": "/illustrations/common/select.png",
          "content": "# スペースで引数を渡す\n\n関数の呼び出しは `関数名 引数` と書きます。\n\n**コード例：**\n```haskell\ndouble x = x * 2\nmain = print (double 5) -- 10\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- *で掛け算\ntriple x = x * 3\nmain = print (triple 4)",
      "holeyCode": "-- *で掛け算\ntriple x = x ___ 3\n-- tripleを入力\nmain = print (___ 4)",
      "correctLines": [
        "-- *で掛け算",
        ["triple x = x * 3", "triple x = 3 * x"],
        "-- tripleを入力",
        "main = print (triple 4)"
      ],
      "lineHints": [null, "* で掛け算します。", null, "triple関数を呼び出します。", null],
      "candidates": {
        "operators": ["*"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "12\n"
        }
      ]
    },
    {
      "title": "型注釈を書こう",
      "description": "関数の型を明示する「型注釈」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "型注釈とは？",
          "image": "/illustrations/common/filter.png",
          "content": "# 型を明示する\n\n**型注釈** は、関数や値の型を明示的に書くことです。`::` を使って書きます。"
        },
        {
          "title": "型注釈の書き方",
          "image": "/illustrations/common/speech_bubble_code.png",
          "content": "# 名前 :: 型\n\n`関数名 :: 引数型 -> 戻り値型` のように書きます。\n\n**コード例：**\n```haskell\ndouble :: Int -> Int\ndouble x = x * 2\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- ::で型注釈\nsquare :: Int -> Int\nsquare x = x * x\nmain = print (square 5)",
      "holeyCode": "-- ::で型注釈\nsquare ___ Int -> Int\n-- *で掛け算\nsquare x = x ___ x\n-- squareを入力\nmain = print (___ 5)",
      "correctLines": [
        "-- ::で型注釈",
        "square :: Int -> Int",
        "-- *で掛け算",
        "square x = x * x",
        "-- squareを入力",
        "main = print (square 5)"
      ],
      "lineHints": [null, ":: で型注釈を書きます。", null, "* で掛け算します。", null, "square関数を呼び出します。"],
      "candidates": {
        "operators": ["::"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "25\n"
        }
      ]
    },
    {
      "title": "リストを使おう",
      "description": "Haskellのリストの基本を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "リストとは？",
          "image": "/illustrations/common/shield_private.png",
          "content": "# 同じ型の要素の列\n\nHaskellのリストは、同じ型の要素を順番に並べたものです。`[ ]` で作成します。"
        },
        {
          "title": "リストの操作",
          "image": "/illustrations/common/key_security_lock.png",
          "content": "# head と tail\n\n`head` で先頭、`tail` で残りを取得します。\n\n**コード例：**\n```haskell\nhead [1, 2, 3] -- 1\ntail [1, 2, 3] -- [2, 3]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "nums = [1, 2, 3]\n-- headで先頭要素を取得\nmain = print (head nums)",
      "holeyCode": "-- [1, 2, 3]を入力\nnums = ___\n-- headで先頭要素を取得\nmain = print (___ nums)",
      "correctLines": [
        "-- [1, 2, 3]を入力",
        "nums = [1, 2, 3]",
        "-- headで先頭要素を取得",
        "main = print (head nums)"
      ],
      "lineHints": [null, "複数の値をまとめて格納する配列（またはリスト）を作成します。", null, "head で先頭要素を取得します。"],
      "candidates": {
        "functions": ["head"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n"
        }
      ]
    },
    {
      "title": "map で変換しよう",
      "description": "リストの各要素を変換する「map」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "map とは？",
          "image": "/illustrations/common/robot_greet.png",
          "content": "# 各要素を変換\n\n**map** は、リストの各要素に関数を適用して新しいリストを作ります。"
        },
        {
          "title": "map の使い方",
          "image": "/illustrations/common/light_bulb_hint.png",
          "content": "# map 関数 リスト\n\n関数とリストを渡します。\n\n**コード例：**\n```haskell\nmap (*2) [1, 2, 3] -- [2, 4, 6]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- mapで各要素を変換\nmain = print (map (*2) [1, 2, 3])",
      "holeyCode": "-- mapで各要素を変換\nmain = print (___ (*2) [1, 2, 3])",
      "correctLines": [
        "-- mapで各要素を変換",
        "main = print (map (*2) [1, 2, 3])"
      ],
      "lineHints": [null, "複数の値をまとめて格納する配列（またはリスト）を作成します。"],
      "candidates": {
        "functions": ["map"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[2,4,6]\n"
        }
      ]
    },
    {
      "title": "filter で絞り込もう",
      "description": "条件に合う要素だけを抽出する「filter」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "filter とは？",
          "image": "/illustrations/common/monitor.png",
          "content": "# 条件でフィルタ\n\n**filter** は、条件を満たす要素だけを残した新しいリストを作ります。"
        },
        {
          "title": "filter の使い方",
          "image": "/illustrations/common/intro_robot.png",
          "content": "# filter 条件関数 リスト\n\n条件関数が True を返す要素だけが残ります。\n\n**コード例：**\n```haskell\nfilter (>3) [1, 2, 3, 4, 5] -- [4, 5]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- filterで条件に合う要素を抽出\nmain = print (filter (>=3) [1, 2, 3, 4, 5])",
      "holeyCode": "-- filterで条件に合う要素を抽出\nmain = print (___ (>=3) [1, 2, 3, 4, 5])",
      "correctLines": [
        "-- filterで条件に合う要素を抽出",
        "main = print (filter (>=3) [1, 2, 3, 4, 5])"
      ],
      "lineHints": [null, "複数の値をまとめて格納する配列（またはリスト）を作成します。"],
      "candidates": {
        "functions": ["filter"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[3,4,5]\n"
        }
      ]
    },
    {
      "title": "パターンマッチを使おう",
      "description": "引数のパターンで分岐する方法を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "パターンマッチとは？",
          "image": "/illustrations/common/split_road.png",
          "content": "# 値の形で分岐\n\n**パターンマッチ** は、引数の値や構造に応じて異なる定義を使う機能です。"
        },
        {
          "title": "パターンマッチの書き方",
          "image": "/illustrations/common/crossroad.png",
          "content": "# 複数の定義\n\n同じ関数を複数定義し、引数のパターンで選ばせます。\n\n**コード例：**\n```haskell\nfactorial 0 = 1\nfactorial n = n * factorial (n - 1)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fib 0 = 0\nfib 1 = 1\n-- 2を引いて再帰\nfib n = fib (n - 1) + fib (n - 2)\nmain = print (fib 6)",
      "holeyCode": "-- 0を入力\nfib 0 = ___\n-- 1を入力\nfib 1 = ___\n-- 2を引いて再帰\nfib n = fib (n - 1) + fib (n - ___)\n-- fibを入力\nmain = print (___ 6)",
      "correctLines": [
        "-- 0を入力",
        "fib 0 = 0",
        "-- 1を入力",
        "fib 1 = 1",
        "-- 2を引いて再帰",
        "fib n = fib (n - 1) + fib (n - 2)",
        "-- fibを入力",
        "main = print (fib 6)"
      ],
      "lineHints": [null, "fib 0 の場合は 0 を返します。", null, "fib 1 の場合は 1 を返します。", null, "2 を引いて再帰します。", null, "fib関数を呼び出します。"],
      "candidates": {
        "numbers": ["2"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "8\n"
        }
      ]
    },
    {
      "title": "ガードで条件分岐",
      "description": "条件で分岐する「ガード」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "ガードとは？",
          "image": "/illustrations/common/traffic_light.png",
          "content": "# 条件での分岐\n\n**ガード** は、`|` を使って条件ごとに異なる処理を定義する方法です。"
        },
        {
          "title": "ガードの書き方",
          "image": "/illustrations/common/decision_tree.png",
          "content": "# | 条件 = 処理\n\n`otherwise` はすべての条件に当てはまらない場合です。\n\n**コード例：**\n```haskell\nabs' x\n  | x < 0     = -x\n  | otherwise = x\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "sign x\n  | x > 0     = \"positive\"\n  | x < 0     = \"negative\"\n  -- otherwiseはそれ以外の場合\n  | otherwise = \"zero\"\nmain = putStrLn (sign 5)",
      "holeyCode": "-- xを入力\nsign ___\n  -- >で大なり比較\n  | x ___ 0     = \"positive\"\n  -- <で小なり比較\n  | x ___ 0     = \"negative\"\n  -- otherwiseはそれ以外の場合\n  | ___ = \"zero\"\n-- signを入力\nmain = putStrLn (___ 5)",
      "correctLines": [
        "-- xを入力",
        "sign x",
        "  -- >で大なり比較",
        "  | x > 0     = \"positive\"",
        "  -- <で小なり比較",
        "  | x < 0     = \"negative\"",
        "  -- otherwiseはそれ以外の場合",
        "  | otherwise = \"zero\"",
        "-- signを入力",
        "main = putStrLn (sign 5)"
      ],
      "lineHints": [null, "関数の引数を定義します。", null, "> で大なり比較をします。", null, "< で小なり比較をします。", null, "otherwise はそれ以外の場合です。", null, "sign関数を呼び出します。"],
      "candidates": {
        "keywords": ["otherwise"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "positive\n"
        }
      ]
    },
    {
      "title": "ラムダ式を使おう",
      "description": "名前のない関数「ラムダ式」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "ラムダ式とは？",
          "image": "/illustrations/common/pencil.png",
          "content": "# 無名関数\n\n**ラムダ式** は、名前をつけずに定義する関数です。`\\引数 -> 本体` と書きます。"
        },
        {
          "title": "ラムダの使い方",
          "image": "/illustrations/common/book.png",
          "content": "# \\ で始める\n\n`\\` はラムダの記号です。\n\n**コード例：**\n```haskell\nmap (\\x -> x * 2) [1, 2, 3]\n-- [2, 4, 6]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- \\でラムダ式を開始\nmain = print (map (\\x -> x * x) [1, 2, 3])",
      "holeyCode": "-- \\でラムダ式を開始\nmain = print (map (___x -> x * x) [1, 2, 3])",
      "correctLines": [
        "-- \\でラムダ式を開始",
        "main = print (map (\\x -> x * x) [1, 2, 3])"
      ],
      "lineHints": [null, "複数の値をまとめて格納する配列（またはリスト）を作成します。"],
      "candidates": {
        "operators": ["\\"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[1,4,9]\n"
        }
      ]
    },
    {
      "title": "リスト内包表記",
      "description": "リストを簡潔に作る「内包表記」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "リスト内包表記とは？",
          "image": "/illustrations/common/select.png",
          "content": "# 数学的なリスト生成\n\n**リスト内包表記** は、数学の集合表記のようにリストを作る方法です。"
        },
        {
          "title": "内包表記の書き方",
          "image": "/illustrations/common/filter.png",
          "content": "# [式 | 変数 <- リスト, 条件]\n\n生成規則と条件を組み合わせられます。\n\n**コード例：**\n```haskell\n[x * 2 | x <- [1..5]] -- [2,4,6,8,10]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- <-でリストから要素を取り出す\nmain = print [x * x | x <- [1..5]]",
      "holeyCode": "-- <-でリストから要素を取り出す\nmain = print [x * x | x ___ [1..5]]",
      "correctLines": [
        "-- <-でリストから要素を取り出す",
        "main = print [x * x | x <- [1..5]]"
      ],
      "lineHints": [null, "<- でリストから要素を取り出します。"],
      "candidates": {
        "operators": ["<-"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[1,4,9,16,25]\n"
        }
      ]
    },
    {
      "title": "foldr で畳み込み",
      "description": "リストを一つの値に畳み込む「foldr」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "foldr とは？",
          "image": "/illustrations/common/speech_bubble_code.png",
          "content": "# リストの畳み込み\n\n**foldr** は、リストの要素を右から順に二項演算で畳み込みます。"
        },
        {
          "title": "foldr の使い方",
          "image": "/illustrations/common/robot_greet.png",
          "content": "# foldr 関数 初期値 リスト\n\n二項関数、初期値、リストを渡します。\n\n**コード例：**\n```haskell\nfoldr (+) 0 [1, 2, 3] -- 6\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- foldrで畳み込み\nmain = print (foldr (+) 0 [1, 2, 3, 4, 5])",
      "holeyCode": "-- foldrで畳み込み\nmain = print (___ (+) 0 [1, 2, 3, 4, 5])",
      "correctLines": [
        "-- foldrで畳み込み",
        "main = print (foldr (+) 0 [1, 2, 3, 4, 5])"
      ],
      "lineHints": [null, "複数の値をまとめて格納する配列（またはリスト）を作成します。"],
      "candidates": {
        "functions": ["foldr"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "15\n"
        }
      ]
    }
  ]
}

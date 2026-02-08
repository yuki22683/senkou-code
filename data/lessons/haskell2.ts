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
      "correctCode": "-- +で足し算\\naddTen x = x + 10\\n-- addTenを入力\\nmain = print (addTen 5)",
      "holeyCode": "-- +で足し算\\naddTen x = x + ___\\n-- addTenを入力\\nmain = print (addTen ___)",
      "correctLines": [
          "-- +で足し算",
          "addTen x = x + 10",
          "-- addTenを入力",
          "main = print (addTen 5)"
        ],
      "lineHints": [
          null,
          "+ で足し算します。",
          null,
          "addTen関数を呼び出します。"
        ],
        "candidates": {
          "operators": [
            "+"
          ],
          "others": ["addTen", "10", "5", "10"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "15\\n"
          }
        ]
      },
    {
      "title": "型注釈を書こう",
      "correctCode": "-- ::で型注釈\\nsquare :: Int -> Int\\n-- *で掛け算\\nsquare x = x * x\\n-- squareを入力\\nmain = print (square 5)",
      "holeyCode": "-- ::で型注釈\\nsquare :: ___ -> Int\\n-- *で掛け算\\nsquare ___ = x * x\\n-- squareを入力\\nmain = print (square ___)",
      "correctLines": [
          "-- ::で型注釈",
          "square :: Int -> Int",
          "-- *で掛け算",
          "square x = x * x",
          "-- squareを入力",
          "main = print (square 5)"
        ],
      "lineHints": [
          null,
          ":: で型注釈を書きます。",
          null,
          "* で掛け算します。",
          null,
          "square関数を呼び出します。"
        ],
        "candidates": {
          "operators": [
            "::"
          ],
          "others": ["*", "square", "Int", "x", "5"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "25\\n"
          }
        ]
      },
    {
      "title": "リストを使おう",
      "correctCode": "-- [1, 2, 3]を入力\\nnums = [1, 2, 3]\\n-- headで先頭要素を取得\\nmain = print (head nums)",
      "holeyCode": "-- [1, 2, 3]を入力\\nnums = [___, 2, 3]\\n-- headで先頭要素を取得\\nmain = print (head ___)",
      "correctLines": [
          "-- [1, 2, 3]を入力",
          "nums = [1, 2, 3]",
          "-- headで先頭要素を取得",
          "main = print (head nums)"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "head で先頭要素を取得します。"
        ],
        "candidates": {
          "functions": [
            "head"
          ],
          "others": ["[1, 2, 3]", "1", "nums"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      },
    {
      "title": "map で変換しよう",
      "correctCode": "-- mapで各要素を変換\\nmain = print (map (*2) [1, 2, 3])",
      "holeyCode": "-- mapで各要素を変換\\nmain = print (map (*___) [1, 2, 3])",
      "correctLines": [
          "-- mapで各要素を変換",
          "main = print (map (*2) [1, 2, 3])"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。"
        ],
        "candidates": {
          "functions": [
            "map"
          ],
          "others": ["2"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[2,4,6]\\n"
          }
        ]
      },
    {
      "title": "filter で絞り込もう",
      "correctCode": "-- filterで条件に合う要素を抽出\\nmain = print (filter (>=3) [1, 2, 3, 4, 5])",
      "holeyCode": "-- filterで条件に合う要素を抽出\\nmain = print (filter (>=___) [1, 2, 3, 4, 5])",
      "correctLines": [
          "-- filterで条件に合う要素を抽出",
          "main = print (filter (>=3) [1, 2, 3, 4, 5])"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。"
        ],
        "candidates": {
          "functions": [
            "filter"
          ],
          "others": ["3"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[3,4,5]\\n"
          }
        ]
      },
    {
      "title": "パターンマッチを使おう",
      "correctCode": "-- 0を入力\\nfib 0 = 0\\n-- 1を入力\\nfib 1 = 1\\n-- 2を引いて再帰\\nfib n = fib (n - 1) + fib (n - 2)\\n-- fibを入力\\nmain = print (fib 6)",
      "holeyCode": "-- 0を入力\\nfib ___ = 0\\n-- 1を入力\\nfib ___ = 1\\n-- 2を引いて再帰\\nfib n = fib (n - ___) + fib (n - 2)\\n-- fibを入力\\nmain = print (fib ___)",
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
      "lineHints": [
          null,
          "fib 0 の場合は 0 を返します。",
          null,
          "fib 1 の場合は 1 を返します。",
          null,
          "2 を引いて再帰します。",
          null,
          "fib関数を呼び出します。"
        ],
        "candidates": {
          "numbers": [
            "2"
          ],
          "others": ["0", "1", "fib", "6"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "8\\n"
          }
        ]
      },
    {
      "title": "ガードで条件分岐",
      "correctCode": "-- xを入力\\nsign x\\n  -- >で大なり比較\\n  | ___ > ___     = \"positive\"\\n  -- <で小なり比較\\n  | x < 0     = \"negative\"\\n  -- otherwiseはそれ以外の場合\\n  | otherwise = \"zero\"\\n-- signを入力\\nmain = putStrLn (sign 5)",
      "holeyCode": "-- xを入力\\nsign ___\\n  -- >で大なり比較\\n  | ___ > ___     = \"___\"\\n  -- <で小なり比較\\n  | x < 0     = \"___\"\\n  -- otherwiseはそれ以外の場合\\n  | otherwise = \"___\"\\n-- signを入力\\nmain = putStrLn (sign ___)",
      "correctLines": [
          "-- xを入力",
          "sign x",
          "  -- >で大なり比較",
          "  | ___ > ___     = \"positive\"",
          "  -- <で小なり比較",
          "  | x < 0     = \"negative\"",
          "  -- otherwiseはそれ以外の場合",
          "  | otherwise = \"zero\"",
          "-- signを入力",
          "main = putStrLn (sign 5)"
        ],
      "lineHints": [
          null,
          "関数の引数を定義します。",
          null,
          "> で大なり比較をします。",
          null,
          "< で小なり比較をします。",
          null,
          "otherwise はそれ以外の場合です。",
          null,
          "sign関数を呼び出します。"
        ],
        "candidates": {
          "keywords": [
            "otherwise"
          ],
          "others": ["x", ">", "<", "sign", "positive", "negative", "zero", "5", "x", "___"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "positive\\n"
          }
        ]
      },
    {
      "title": "ラムダ式を使おう",
      "correctCode": "-- \\でラムダ式を開始\\nmain = print (map (\\x -> x * x) [1, 2, 3])",
      "holeyCode": "-- \\でラムダ式を開始\\nmain = print (map (\\\\x -> x * x) [___, 2, 3])",
      "correctLines": [
          "-- \\でラムダ式を開始",
          "main = print (map (\\x -> x * x) [1, 2, 3])"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。"
        ],
        "candidates": {
          "operators": [
          ],
          "others": ["1"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[1,4,9]\\n"
          }
        ]
      },
    {
      "title": "リスト内包表記",
      "correctCode": "-- <-でリストから要素を取り出す\\nmain = print [x * x | x <- [1..5]]",
      "holeyCode": "-- <-でリストから要素を取り出す\\nmain = print [x * x | x <- [___..5]]",
      "correctLines": [
          "-- <-でリストから要素を取り出す",
          "main = print [x * x | x <- [1..5]]"
        ],
      "lineHints": [
          null,
          "<- でリストから要素を取り出します。"
        ],
        "candidates": {
          "operators": [
            "<-"
          ],
          "others": ["1"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[1,4,9,16,25]\\n"
          }
        ]
      },
    {
      "title": "foldr で畳み込み",
      "correctCode": "-- foldrで畳み込み\\nmain = print (foldr (+) 0 [1, 2, 3, 4, 5])",
      "holeyCode": "-- foldrで畳み込み\\nmain = print (foldr (+) ___ [1, 2, 3, 4, 5])",
      "correctLines": [
          "-- foldrで畳み込み",
          "main = print (foldr (+) 0 [1, 2, 3, 4, 5])"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。"
        ],
        "candidates": {
          "functions": [
            "foldr"
          ],
          "others": ["0"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "15\\n"
          }
        ]
      }
  ]
}

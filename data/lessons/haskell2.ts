export const haskell2Data = {
  "language": "haskell",
  "lessonId": "haskell-2",
  "lessonTitle": "Haskell II - 関数と型",
  "lessonDescription": "Haskellの強力な型システムと関数型プログラミングの基本を学びます。純粋関数と高階関数の考え方を身につけましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "tutorialSlides": [
    {
      "title": "関数の定義",
      "content": "Haskellでは関数を簡潔に定義できます。\\n\\n```haskell\\naddTen x = x + 10\\n-- addTen 5 => 15\\n```\\n\\n**ポイント**:\\n- `関数名 引数 = 式` の形式\\n- `return` は不要（式の結果がそのまま戻り値）"
    },
    {
      "title": "リスト内包表記",
      "content": "リストから新しいリストを作る便利な記法です。\\n\\n```haskell\\n[x * x | x <- [1..5]]\\n-- => [1, 4, 9, 16, 25]\\n```\\n\\n**構文**: `[式 | 変数 <- リスト]`\\n- `式`: 各要素に適用する処理（例: `x * x`）\\n- `|`: 式と生成器を区切る記号\\n- `<-`: リストから要素を取り出す\\n- `[1..5]`: 1から5までのリスト"
    }
  ],
  "exercises": [
    {
      "title": "関数を定義しよう",
      "correctCode": "-- +で足し算\\naddTen x = x + 10\\n-- addTenを入力\\nmain = print (addTen 5)",
      "holeyCode": "-- +で足し算\\n___ ___ = ___ ___ ___\\n-- addTenを入力\\n___ = ___ (___ ___)",
      "correctLines": [
          "-- +で足し算",
          "addTen x = x + 10",
          "-- addTenを入力",
          "main = print (addTen 5)"
        ],
      "lineHints": [
          null,
          "addTen関数を定義し、引数xに10を加算します。",
          null,
          "main関数でaddTen 5を呼び出して結果を表示します。"
        ],
        "candidates": {
          "operators": [
            "+", "="
          ],
          "others": ["addTen", "x", "10", "5", "main", "print"]
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
      "holeyCode": "-- ::で型注釈\\n___ ___ ___ ___ ___\\n-- *で掛け算\\n___ ___ = ___ ___ ___\\n-- squareを入力\\n___ = ___ (___ ___)",
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
          "square関数の型注釈を書きます。Int -> Intは整数を受け取り整数を返す型です。",
          null,
          "square関数を定義し、引数xを自乗します。",
          null,
          "main関数でsquare 5を呼び出して結果を表示します。"
        ],
        "candidates": {
          "operators": [
            "::", "->", "*", "="
          ],
          "others": ["square", "Int", "x", "5", "main", "print"]
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
      "holeyCode": "-- [1, 2, 3]を入力\\n___ = [___, ___, ___]\\n-- headで先頭要素を取得\\n___ = ___ (___ ___)",
      "correctLines": [
          "-- [1, 2, 3]を入力",
          "nums = [1, 2, 3]",
          "-- headで先頭要素を取得",
          "main = print (head nums)"
        ],
      "lineHints": [
          null,
          "numsに[1, 2, 3]のリストを代入します。",
          null,
          "main関数でhead numsを呼び出して先頭要素を表示します。"
        ],
        "candidates": {
          "functions": [
            "head", "print"
          ],
          "others": ["nums", "1", "2", "3", "main", "="]
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
      "holeyCode": "-- mapで各要素を変換\\n___ = ___ (___ (*___) [___, ___, ___])",
      "correctLines": [
          "-- mapで各要素を変換",
          "main = print (map (*2) [1, 2, 3])"
        ],
      "lineHints": [
          null,
          "main関数でmap (*2)を[1, 2, 3]に適用し、各要素を2倍にします。"
        ],
        "candidates": {
          "functions": [
            "map", "print"
          ],
          "others": ["main", "2", "1", "3", "="]
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
      "holeyCode": "-- filterで条件に合う要素を抽出\\n___ = ___ (___ (>=___) [___, ___, ___, ___, ___])",
      "correctLines": [
          "-- filterで条件に合う要素を抽出",
          "main = print (filter (>=3) [1, 2, 3, 4, 5])"
        ],
      "lineHints": [
          null,
          "main関数でfilter (>=3)を[1, 2, 3, 4, 5]に適用し、3以上の要素を抽出します。"
        ],
        "candidates": {
          "functions": [
            "filter", "print"
          ],
          "others": ["main", "3", "1", "2", "4", "5", "="]
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
      "holeyCode": "-- 0を入力\\n___ ___ = ___\\n-- 1を入力\\n___ ___ = ___\\n-- 2を引いて再帰\\n___ ___ = ___ (___ ___ ___) ___ ___ (___ ___ ___)\\n-- fibを入力\\n___ = ___ (___ ___)",
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
          "fib 0のパターンマッチで0を返します。",
          null,
          "fib 1のパターンマッチで1を返します。",
          null,
          "fib nでは(n - 1)と(n - 2)の結果を足して再帰します。",
          null,
          "main関数でfib 6を呼び出して結果を表示します。"
        ],
        "candidates": {
          "numbers": [
            "0", "1", "2", "6"
          ],
          "others": ["fib", "n", "main", "print", "=", "+", "-"]
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
      "correctCode": "-- xを入力\\nsign x\\n  -- >で大なり比較\\n  | x > 0     = \"positive\"\\n  -- <で小なり比較\\n  | x < 0     = \"negative\"\\n  -- otherwiseはそれ以外の場合\\n  | otherwise = \"zero\"\\n-- signを入力\\nmain = putStrLn (sign 5)",
      "holeyCode": "-- xを入力\\n___ ___\\n  -- >で大なり比較\\n  | ___ ___ ___     = \"___\"\\n  -- <で小なり比較\\n  | ___ ___ ___     = \"___\"\\n  -- otherwiseはそれ以外の場合\\n  | ___ = \"___\"\\n-- signを入力\\n___ = ___ (___ ___)",
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
      "lineHints": [
          null,
          "sign関数を定義し、引数xを受け取ります。",
          null,
          "xが0より大きい場合は\"positive\"を返します。",
          null,
          "xが0より小さい場合は\"negative\"を返します。",
          null,
          "otherwiseはそれ以外の場合で\"zero\"を返します。",
          null,
          "main関数でsign 5を呼び出して結果を表示します。"
        ],
        "candidates": {
          "keywords": [
            "otherwise"
          ],
          "others": ["sign", "x", "0", ">", "<", "=", "positive", "negative", "zero", "5", "main", "putStrLn"]
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
      "holeyCode": "-- \\でラムダ式を開始\\n___ = ___ (___ (\\\\___ ___ ___ ___ ___) [___, ___, ___])",
      "correctLines": [
          "-- \\でラムダ式を開始",
          "main = print (map (\\x -> x * x) [1, 2, 3])"
        ],
      "lineHints": [
          null,
          "main関数でmapとラムダ式(\\\\x -> x * x)を使ってリストの各要素を自乗します。"
        ],
        "candidates": {
          "operators": [
            "->", "*", "="
          ],
          "others": ["main", "print", "map", "x", "1", "2", "3"]
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
      "holeyCode": "-- <-でリストから要素を取り出す\\n___ = ___ [___ ___ ___ | ___ ___ [___..___]]",
      "correctLines": [
          "-- <-でリストから要素を取り出す",
          "main = print [x * x | x <- [1..5]]"
        ],
      "lineHints": [
          null,
          "main関数でリスト内包表記[x * x | x <- [1..5]]を使い、1から5の各要素を自乗します。"
        ],
        "candidates": {
          "operators": [
            "<-", "*", "="
          ],
          "others": ["main", "print", "x", "1", "5"]
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
      "holeyCode": "-- foldrで畳み込み\\n___ = ___ (___ (___) ___ [___, ___, ___, ___, ___])",
      "correctLines": [
          "-- foldrで畳み込み",
          "main = print (foldr (+) 0 [1, 2, 3, 4, 5])"
        ],
      "lineHints": [
          null,
          "main関数でfoldr (+) 0を使ってリスト[1, 2, 3, 4, 5]の合計を計算します。"
        ],
        "candidates": {
          "functions": [
            "foldr", "print"
          ],
          "others": ["main", "+", "0", "1", "2", "3", "4", "5", "="]
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

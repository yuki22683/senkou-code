export const haskell3Data = {
  "language": "haskell",
  "lessonId": "haskell-3",
  "lessonTitle": "Haskell III - 高階関数とモナド",
  "lessonDescription": "Haskellの高階関数、ラムダ式、関数合成、そしてモナドの基礎を学びます。map、filter、foldを使ったリスト操作や、MaybeやEitherを使ったエラーハンドリングを習得しましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "exercises": [
    {
      "title": "map関数",
      "correctCode": "-- Intを入力\\ndouble :: Int -> Int\\n-- *で掛け算\\ndouble x = x * 2\\n\\n-- 各要素に関数を適用してリストを変換する関数\\ndoubled = map double [1, 2, 3, 4, 5]",
      "holeyCode": "-- Intを入力\\ndouble :: ___ -> Int\\n-- *で掛け算\\ndouble x = x * ___\\n___\\n-- 各要素に関数を適用してリストを変換する関数\\ndoubled = map double [___, 2, 3, 4, 5]",
      "correctLines": [
          "-- Intを入力",
          "double :: Int -> Int",
          "-- *で掛け算",
          "double x = x * 2",
          "",
          "-- 各要素に関数を適用してリストを変換する関数",
          "doubled = map double [1, 2, 3, 4, 5]"
        ],
      "lineHints": [
          null,
          "型を指定します。",
          null,
          "掛け算で2倍にします。",
          null,
          null,
          "配列を複数の値で初期化する。"
        ],
        "candidates": {
          "4": [
            "map",
            "filter",
            "fold",
            "apply"
          ],
          "others": ["Int", "*", "2", "1", "2", ""]
        },
        "testCases": [
          {
            "input": "doubled",
            "expected_output": "[2, 4, 6, 8, 10]"
          }
        ]
      },
    {
      "title": "filter関数",
      "correctCode": "-- Boolを入力\\nisEven :: Int -> Bool\\n-- ==で等価比較\\nisEven x = x `mod` 2 == 0\\n\\n-- 条件を満たす要素だけを抽出する関数\\nevens = filter isEven [1, 2, 3, 4, 5, 6]",
      "holeyCode": "-- Boolを入力\\nisEven :: Int -> ___\\n-- ==で等価比較\\nisEven x = x `mod` ___ == 0\\n___\\n-- 条件を満たす要素だけを抽出する関数\\nevens = filter isEven [___, 2, 3, 4, 5, 6]",
      "correctLines": [
          "-- Boolを入力",
          "isEven :: Int -> Bool",
          "-- ==で等価比較",
          "isEven x = x `mod` 2 == 0",
          "",
          "-- 条件を満たす要素だけを抽出する関数",
          "evens = filter isEven [1, 2, 3, 4, 5, 6]"
        ],
      "lineHints": [
          null,
          "型を指定します。",
          null,
          "== で等価比較をします。",
          null,
          null,
          "配列を複数の値で初期化する。"
        ],
        "candidates": {
          "4": [
            "filter",
            "map",
            "select",
            "where"
          ],
          "others": ["Bool", "==", "2", "1", "Bool", ""]
        },
        "testCases": [
          {
            "input": "evens",
            "expected_output": "[2, 4, 6]"
          }
        ]
      },
    {
      "title": "ラムダ式",
      "correctCode": "-- ラムダ式を開始する記号\\nsquared = map (\\x -> x * x) [1, 2, 3, 4, 5]",
      "holeyCode": "-- ラムダ式を開始する記号\\nsquared = map (\\\\x -> x * x) [___, 2, 3, 4, 5]",
      "correctLines": [
          "-- ラムダ式を開始する記号",
          "squared = map (\\x -> x * x) [1, 2, 3, 4, 5]"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。"
        ],
        "candidates": {
          "1": [
            "",
            "lambda",
            "fn",
            "->"
          ],
          "others": ["1"]
        },
        "testCases": [
          {
            "input": "squared",
            "expected_output": "[1, 4, 9, 16, 25]"
          }
        ]
      },
    {
      "title": "foldr（右畳み込み）",
      "correctCode": "-- Intを入力\\nsumList :: [Int] -> Int\\n-- リストを右から畳み込む関数\\nsumList xs = foldr (+) 0 xs\\n-- sumListを入力\\ntotal = sumList [1, 2, 3, 4, 5]",
      "holeyCode": "-- Intを入力\\nsumList :: [___] -> Int\\n-- リストを右から畳み込む関数\\nsumList xs = foldr (+) ___ xs\\n-- sumListを入力\\ntotal = sumList [___, 2, 3, 4, 5]",
      "correctLines": [
          "-- Intを入力",
          "sumList :: [Int] -> Int",
          "-- リストを右から畳み込む関数",
          "sumList xs = foldr (+) 0 xs",
          "-- sumListを入力",
          "total = sumList [1, 2, 3, 4, 5]"
        ],
      "lineHints": [
          null,
          "型を指定します。",
          null,
          "右から畳み込む関数です。",
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。"
        ],
        "candidates": {
          "2": [
            "foldr",
            "foldl",
            "reduce",
            "sum"
          ],
          "others": ["Int", "sumList", "0", "1"]
        },
        "testCases": [
          {
            "input": "total",
            "expected_output": "15"
          }
        ]
      },
    {
      "title": "関数合成",
      "correctCode": "-- Intを入力\\nsquareDouble :: Int -> Int\\n-- 2つの関数を合成する演算子\\nsquareDouble = (^2) . (*2)\\n-- squareDoubleを入力\\nresult = squareDouble 3",
      "holeyCode": "-- Intを入力\\nsquareDouble :: ___ -> Int\\n-- 2つの関数を合成する演算子\\nsquareDouble = (^___) . (*2)\\n-- squareDoubleを入力\\nresult = squareDouble ___",
      "correctLines": [
          "-- Intを入力",
          "squareDouble :: Int -> Int",
          "-- 2つの関数を合成する演算子",
          "squareDouble = (^2) . (*2)",
          "-- squareDoubleを入力",
          "result = squareDouble 3"
        ],
      "lineHints": [
          null,
          "型を指定します。",
          null,
          "関数合成演算子はドットです。",
          null,
          "squareDouble関数を呼び出します。"
        ],
        "candidates": {
          "2": [
            ".",
            "|>",
            ">>",
            "->"
          ],
          "others": ["Int", "squareDouble", "2", "3"]
        },
        "testCases": [
          {
            "input": "result",
            "expected_output": "36"
          }
        ]
      },
    {
      "title": "Maybe型",
      "correctCode": "-- Maybe Intを入力\\nsafeDiv :: Int -> Int -> Maybe Int\\n-- 値がないことを表すMaybeのコンストラクタ\\nsafeDiv _ 0 = Nothing\\n-- Justを入力\\nsafeDiv x y = Just (x `div` y)",
      "holeyCode": "-- Maybe Intを入力\\nsafeDiv :: ___ -> Int -> Maybe Int\\n-- 値がないことを表すMaybeのコンストラクタ\\nsafeDiv _ ___ = Nothing\\n-- Justを入力\\nsafeDiv x ___ = Just (x `div` y)",
      "correctLines": [
          "-- Maybe Intを入力",
          "safeDiv :: Int -> Int -> Maybe Int",
          "-- 値がないことを表すMaybeのコンストラクタ",
          "safeDiv _ 0 = Nothing",
          "-- Justを入力",
          "safeDiv x y = Just (x `div` y)"
        ],
      "lineHints": [
          null,
          "型を指定します。",
          null,
          "値がないことを表すMaybeのコンストラクタです。",
          null,
          "Justで値を包みます。"
        ],
        "candidates": {
          "2": [
            "Nothing",
            "None",
            "Null",
            "Empty"
          ],
          "others": ["Maybe Int", "Just", "Int", "0", "y"]
        },
        "testCases": [
          {
            "input": "safeDiv 10 2",
            "expected_output": "Just 5"
          },
          {
            "input": "safeDiv 10 0",
            "expected_output": "Nothing"
          }
        ]
      },
    {
      "title": "Either型",
      "correctCode": "-- Either String Intを入力\\nvalidateAge :: Int -> Either String Int\\n-- ageを入力\\nvalidateAge age\\n  -- 失敗・エラーを表すEitherのコンストラクタ\\n  | age < 0   = Left \"Age cannot be negative\"\\n  -- Rightを入力\\n  | otherwise = Right age",
      "holeyCode": "-- Either String Intを入力\\nvalidateAge :: ___ -> Either String Int\\n-- ageを入力\\nvalidateAge ___\\n  -- 失敗・エラーを表すEitherのコンストラクタ\\n  | ___ < ___   = ___ \"___\"\\n  -- Rightを入力\\n  | otherwise = Right ___",
      "correctLines": [
          "-- Either String Intを入力",
          "validateAge :: Int -> Either String Int",
          "-- ageを入力",
          "validateAge age",
          "  -- 失敗・エラーを表すEitherのコンストラクタ",
          "  | age < 0   = Left \"Age cannot be negative\"",
          "  -- Rightを入力",
          "  | otherwise = Right age"
        ],
      "lineHints": [
          null,
          "型を指定します。",
          null,
          "関数の引数を定義します。",
          null,
          "エラーを表すEitherのコンストラクタです。",
          null,
          "Rightで成功値を包みます。"
        ],
        "candidates": {
          "3": [
            "Left",
            "Error",
            "Fail",
            "None"
          ],
          "others": ["Either String Int", "age", "0", "Left", "Right", "Int", "Age cannot be negative"]
        },
        "testCases": [
          {
            "input": "validateAge 25",
            "expected_output": "Right 25"
          },
          {
            "input": "validateAge (-5)",
            "expected_output": "Left \"Age cannot be negative\""
          }
        ]
      },
    {
      "title": "fmap（ファンクタ）",
      "correctCode": "-- Maybe Intを入力\\ndoubleJust :: Maybe Int -> Maybe Int\\n-- Functor内の値に関数を適用する関数\\ndoubleJust = fmap (*2)\\n-- doubleJustを入力\\nresult = doubleJust (Just 5)",
      "holeyCode": "-- Maybe Intを入力\\ndoubleJust :: Maybe ___ -> Maybe Int\\n-- Functor内の値に関数を適用する関数\\ndoubleJust = fmap (*___)\\n-- doubleJustを入力\\nresult = doubleJust (Just ___)",
      "correctLines": [
          "-- Maybe Intを入力",
          "doubleJust :: Maybe Int -> Maybe Int",
          "-- Functor内の値に関数を適用する関数",
          "doubleJust = fmap (*2)",
          "-- doubleJustを入力",
          "result = doubleJust (Just 5)"
        ],
      "lineHints": [
          null,
          "型を指定します。",
          null,
          "Functor内の値に関数を適用する関数です。",
          null,
          "doubleJust関数を呼び出します。"
        ],
        "candidates": {
          "2": [
            "fmap",
            "map",
            "apply",
            "bind"
          ],
          "others": ["Maybe Int", "doubleJust", "Int", "2", "5"]
        },
        "testCases": [
          {
            "input": "result",
            "expected_output": "Just 10"
          }
        ]
      },
    {
      "title": "do記法",
      "correctCode": "-- Maybe Intを入力\\naddMaybe :: Maybe Int -> Maybe Int -> Maybe Int\\n-- モナド操作を順次実行する記法\\naddMaybe mx my = do\\n  -- mxを入力\\n  x <- mx\\n  -- myを入力\\n  y <- my\\n  -- +で足し算\\n  return (x + y)",
      "holeyCode": "-- Maybe Intを入力\\naddMaybe :: Maybe ___ -> Maybe Int -> Maybe Int\\n-- モナド操作を順次実行する記法\\naddMaybe mx my = ___\\n  -- mxを入力\\n  x <- ___\\n  -- myを入力\\n  y <- ___\\n  -- +で足し算\\n  return (x + ___)",
      "correctLines": [
          "-- Maybe Intを入力",
          "addMaybe :: Maybe Int -> Maybe Int -> Maybe Int",
          "-- モナド操作を順次実行する記法",
          "addMaybe mx my = do",
          "  -- mxを入力",
          "  x <- mx",
          "  -- myを入力",
          "  y <- my",
          "  -- +で足し算",
          "  return (x + y)"
        ],
      "lineHints": [
          null,
          "型を指定します。",
          null,
          "モナド操作を順次実行する記法です。",
          null,
          "mxから値を取り出します。",
          null,
          "myから値を取り出します。",
          null,
          "+ で足し算します。"
        ],
        "candidates": {
          "2": [
            "do",
            "begin",
            "block",
            "run"
          ],
          "others": ["Maybe Int", "mx", "my", "+", "Int", "y", "do", "mx", "my"]
        },
        "testCases": [
          {
            "input": "addMaybe (Just 3) (Just 5)",
            "expected_output": "Just 8"
          },
          {
            "input": "addMaybe (Just 3) Nothing",
            "expected_output": "Nothing"
          }
        ]
      },
    {
      "title": "リスト内包表記",
      "correctCode": "-- [Int]を入力\\nsquares :: [Int]\\n-- リスト内包表記で式と生成器を区切る記号\\nsquares = [x * x | x <- [1..5]]",
      "holeyCode": "-- [Int]を入力\\nsquares :: [___]\\n-- リスト内包表記で式と生成器を区切る記号\\nsquares = [x * x | x <- [___..5]]",
      "correctLines": [
          "-- [Int]を入力",
          "squares :: [Int]",
          "-- リスト内包表記で式と生成器を区切る記号",
          "squares = [x * x | x <- [1..5]]"
        ],
      "lineHints": [
          null,
          "型を指定します。",
          null,
          "生成器の前に置く区切り記号です。"
        ],
        "candidates": {
          "2": [
            "|",
            "for",
            "where",
            ";"
          ],
          "others": ["[Int]", "Int", "1"]
        },
        "testCases": [
          {
            "input": "squares",
            "expected_output": "[1, 4, 9, 16, 25]"
          }
        ]
      }
  ]
}

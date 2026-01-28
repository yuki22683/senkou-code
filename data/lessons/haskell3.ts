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
        "description": "リストの各要素に関数を適用するmap関数を使いましょう。",
        "difficulty": "medium",
        "orderIndex": 1,
        "tutorialSlides": [
          {
            "title": "map関数",
            "image": "/illustrations/common/speech_bubble_code.png",
            "content": "map関数はリストの各要素に関数を適用し、新しいリストを返します。\n\n```haskell\n-- map :: (a -> b) -> [a] -> [b]\ndoubled = map (*2) [1, 2, 3]\n-- 結果: [2, 4, 6]\n\nuppers = map toUpper \"hello\"\n-- 結果: \"HELLO\"\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- Intを入力\ndouble :: Int -> Int\n-- *で掛け算\ndouble x = x * 2\n\n-- 各要素に関数を適用してリストを変換する関数\ndoubled = map double [1, 2, 3, 4, 5]",
        "holeyCode": "-- Intを入力\ndouble :: Int -> ___\n-- *で掛け算\ndouble x = x ___ 2\n\n-- 各要素に関数を適用してリストを変換する関数\ndoubled = ___ double [1, 2, 3, 4, 5]",
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
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          null
        ],
        "candidates": {
          "4": [
            "map",
            "filter",
            "fold",
            "apply"
          ],
          "others": [
            "Int",
            "*"
          ]
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
        "description": "条件を満たす要素だけを抽出するfilter関数を使いましょう。",
        "difficulty": "medium",
        "orderIndex": 2,
        "tutorialSlides": [
          {
            "title": "filter関数",
            "image": "/illustrations/common/robot_greet.png",
            "content": "filter関数は条件（述語関数）を満たす要素だけを抽出します。\n\n```haskell\n-- filter :: (a -> Bool) -> [a] -> [a]\nevens = filter even [1, 2, 3, 4, 5]\n-- 結果: [2, 4]\n\npositive = filter (> 0) [-1, 2, -3, 4]\n-- 結果: [2, 4]\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- Boolを入力\nisEven :: Int -> Bool\n-- ==で等価比較\nisEven x = x `mod` 2 == 0\n\n-- 条件を満たす要素だけを抽出する関数\nevens = filter isEven [1, 2, 3, 4, 5, 6]",
        "holeyCode": "-- Boolを入力\nisEven :: Int -> ___\n-- ==で等価比較\nisEven x = x `mod` 2 ___ 0\n\n-- 条件を満たす要素だけを抽出する関数\nevens = ___ isEven [1, 2, 3, 4, 5, 6]",
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
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          null
        ],
        "candidates": {
          "4": [
            "filter",
            "map",
            "select",
            "where"
          ],
          "others": [
            "Bool",
            "=="
          ]
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
        "description": "無名関数（ラムダ式）を使いましょう。",
        "difficulty": "medium",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "ラムダ式",
            "image": "/illustrations/common/light_bulb_hint.png",
            "content": "ラムダ式は名前のない関数を定義します。バックスラッシュ(\\)で始まります。\n\n```haskell\n-- \\引数 -> 本体\ndoubled = map (\\x -> x * 2) [1, 2, 3]\n-- 結果: [2, 4, 6]\n\nadded = map (\\x -> x + 10) [1, 2, 3]\n-- 結果: [11, 12, 13]\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- ラムダ式を開始する記号\nsquared = map (\\x -> x * x) [1, 2, 3, 4, 5]",
        "holeyCode": "-- ラムダ式を開始する記号\nsquared = map (___x -> x * x) [1, 2, 3, 4, 5]",
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
            "\\",
            "lambda",
            "fn",
            "->"
          ]
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
        "description": "リストを右から畳み込むfoldr関数を使いましょう。",
        "difficulty": "hard",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "foldr（右畳み込み）",
            "image": "/illustrations/common/database_table_3d.png",
            "content": "foldrはリストを右から畳み込みます。\n\n```haskell\n-- foldr :: (a -> b -> b) -> b -> [a] -> b\n-- foldr f init [x1, x2, x3]\n-- = f x1 (f x2 (f x3 init))\n\nsum' = foldr (+) 0 [1, 2, 3]\n-- = 1 + (2 + (3 + 0)) = 6\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- Intを入力\nsumList :: [Int] -> Int\n-- リストを右から畳み込む関数\nsumList xs = foldr (+) 0 xs\n-- sumListを入力\ntotal = sumList [1, 2, 3, 4, 5]",
        "holeyCode": "-- Intを入力\nsumList :: [Int] -> ___\n-- リストを右から畳み込む関数\nsumList xs = ___ (+) 0 xs\n-- sumListを入力\ntotal = ___ [1, 2, 3, 4, 5]",
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
          "others": [
            "Int",
            "sumList"
          ]
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
        "description": "関数合成演算子(.)で複数の関数を組み合わせましょう。",
        "difficulty": "hard",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "関数合成",
            "image": "/illustrations/common/database_aggregate.png",
            "content": "関数合成(.)は2つの関数を組み合わせます。\n\n```haskell\n-- (.) :: (b -> c) -> (a -> b) -> a -> c\n-- (f . g) x = f (g x)\n\ndoubleNegate = negate . (*2)\n-- doubleNegate 3 = negate (3 * 2) = -6\n\nabs' = abs . negate\n-- abs' 5 = abs (negate 5) = 5\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- Intを入力\nsquareDouble :: Int -> Int\n-- 2つの関数を合成する演算子\nsquareDouble = (^2) . (*2)\n-- squareDoubleを入力\nresult = squareDouble 3",
        "holeyCode": "-- Intを入力\nsquareDouble :: Int -> ___\n-- 2つの関数を合成する演算子\nsquareDouble = (^2) ___ (*2)\n-- squareDoubleを入力\nresult = ___ 3",
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
          "others": [
            "Int",
            "squareDouble"
          ]
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
        "description": "値が存在しない可能性を表すMaybe型を使いましょう。",
        "difficulty": "hard",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "Maybe型",
            "image": "/illustrations/common/branching_paths.png",
            "content": "Maybe型は値が存在するかもしれない（Just）、存在しないかもしれない（Nothing）を表します。\n\n```haskell\n-- data Maybe a = Nothing | Just a\n\nsafeHead :: [a] -> Maybe a\nsafeHead [] = Nothing\nsafeHead (x:_) = Just x\n\n-- safeHead [1,2,3] = Just 1\n-- safeHead [] = Nothing\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- Maybe Intを入力\nsafeDiv :: Int -> Int -> Maybe Int\n-- 値がないことを表すMaybeのコンストラクタ\nsafeDiv _ 0 = Nothing\n-- Justを入力\nsafeDiv x y = Just (x `div` y)",
        "holeyCode": "-- Maybe Intを入力\nsafeDiv :: Int -> Int -> ___\n-- 値がないことを表すMaybeのコンストラクタ\nsafeDiv _ 0 = ___\n-- Justを入力\nsafeDiv x y = ___ (x `div` y)",
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
          "others": [
            "Maybe Int",
            "Just"
          ]
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
        "description": "エラー情報を含む結果を表すEither型を使いましょう。",
        "difficulty": "hard",
        "orderIndex": 7,
        "tutorialSlides": [
          {
            "title": "Either型",
            "image": "/illustrations/common/monitor.png",
            "content": "Either型は失敗（Left）または成功（Right）を表します。\n\n```haskell\n-- data Either a b = Left a | Right b\n\nsafeDiv :: Int -> Int -> Either String Int\nsafeDiv _ 0 = Left \"Division by zero\"\nsafeDiv x y = Right (x `div` y)\n\n-- safeDiv 10 2 = Right 5\n-- safeDiv 10 0 = Left \"Division by zero\"\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- Either String Intを入力\nvalidateAge :: Int -> Either String Int\n-- ageを入力\nvalidateAge age\n  -- 失敗・エラーを表すEitherのコンストラクタ\n  | age < 0   = Left \"Age cannot be negative\"\n  -- Rightを入力\n  | otherwise = Right age",
        "holeyCode": "-- Either String Intを入力\nvalidateAge :: Int -> ___\n-- ageを入力\nvalidateAge ___\n  -- 失敗・エラーを表すEitherのコンストラクタ\n  | age < 0   = ___ \"Age cannot be negative\"\n  -- Rightを入力\n  | otherwise = ___ age",
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
          "others": [
            "Either String Int",
            "age",
            "Right"
          ]
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
        "description": "Functor型クラスのfmapを使いましょう。",
        "difficulty": "hard",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "fmap（ファンクタ）",
            "image": "/illustrations/common/intro_robot.png",
            "content": "fmapはコンテナ内の値に関数を適用します。\n\n```haskell\n-- fmap :: Functor f => (a -> b) -> f a -> f b\n\nfmap (+1) (Just 5)     -- Just 6\nfmap (+1) Nothing      -- Nothing\nfmap (*2) [1, 2, 3]    -- [2, 4, 6]\nfmap length (Right \"hello\")  -- Right 5\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- Maybe Intを入力\ndoubleJust :: Maybe Int -> Maybe Int\n-- Functor内の値に関数を適用する関数\ndoubleJust = fmap (*2)\n-- doubleJustを入力\nresult = doubleJust (Just 5)",
        "holeyCode": "-- Maybe Intを入力\ndoubleJust :: Maybe Int -> ___\n-- Functor内の値に関数を適用する関数\ndoubleJust = ___ (*2)\n-- doubleJustを入力\nresult = ___ (Just 5)",
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
          "others": [
            "Maybe Int",
            "doubleJust"
          ]
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
        "description": "モナドのdo記法を使いましょう。",
        "difficulty": "hard",
        "orderIndex": 9,
        "tutorialSlides": [
          {
            "title": "do記法",
            "image": "/illustrations/common/pencil.png",
            "content": "do記法はモナド操作を命令型風に書けます。\n\n```haskell\n-- バインド(>>=)を使った書き方\nresult = Just 5 >>= \\x -> Just (x + 1)\n\n-- do記法\nresult = do\n  x <- Just 5\n  return (x + 1)\n-- 結果: Just 6\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- Maybe Intを入力\naddMaybe :: Maybe Int -> Maybe Int -> Maybe Int\n-- モナド操作を順次実行する記法\naddMaybe mx my = do\n  -- mxを入力\n  x <- mx\n  -- myを入力\n  y <- my\n  -- +で足し算\n  return (x + y)",
        "holeyCode": "-- Maybe Intを入力\naddMaybe :: Maybe Int -> Maybe Int -> ___\n-- モナド操作を順次実行する記法\naddMaybe mx my = ___\n  -- mxを入力\n  x <- ___\n  -- myを入力\n  y <- ___\n  -- +で足し算\n  return (x ___ y)",
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
          "others": [
            "Maybe Int",
            "mx",
            "my",
            "+"
          ]
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
        "description": "リスト内包表記でリストを生成しましょう。",
        "difficulty": "hard",
        "orderIndex": 10,
        "tutorialSlides": [
          {
            "title": "リスト内包表記",
            "image": "/illustrations/common/key_silver.png",
            "content": "リスト内包表記は数学の集合表記に似た書き方です。\n\n```haskell\n-- [式 | 生成器, 条件]\nevens = [x | x <- [1..10], even x]\n-- 結果: [2, 4, 6, 8, 10]\n\npairs = [(x, y) | x <- [1,2], y <- [3,4]]\n-- 結果: [(1,3),(1,4),(2,3),(2,4)]\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- [Int]を入力\nsquares :: [Int]\n-- リスト内包表記で式と生成器を区切る記号\nsquares = [x * x | x <- [1..5]]",
        "holeyCode": "-- [Int]を入力\nsquares :: ___\n-- リスト内包表記で式と生成器を区切る記号\nsquares = [x * x ___ x <- [1..5]]",
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
          "others": [
            "[Int]"
          ]
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

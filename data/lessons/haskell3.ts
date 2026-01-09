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
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "map関数はリストの各要素に関数を適用し、新しいリストを返します。\n\n```haskell\n-- map :: (a -> b) -> [a] -> [b]\ndoubled = map (*2) [1, 2, 3]\n-- 結果: [2, 4, 6]\n\nuppers = map toUpper \"hello\"\n-- 結果: \"HELLO\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "double :: Int -> Int\ndouble x = x * 2\n\n-- mapで各要素に関数を適用\ndoubled = map double [1, 2, 3, 4, 5]",
      "holeyCode": "___\n___\n___\n___\n___",
      "correctLines": [
        "{ "lineNumber": 4, "content": "doubled = map double [1",
        "2",
        "3",
        "4",
        "5"
      ]" }
      ],
      "lineHints": [
        { "lineNumber": 4, "hint": "リストの各要素に関数を適用する関数です" }
      ],
      "candidates": {
        "4": ["map", "filter", "fold", "apply"]
      },
      "testCases": [
        { "input": "doubled", "expected_output": "[2, 4, 6, 8, 10]" }
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
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "filter関数は条件（述語関数）を満たす要素だけを抽出します。\n\n```haskell\n-- filter :: (a -> Bool) -> [a] -> [a]\nevens = filter even [1, 2, 3, 4, 5]\n-- 結果: [2, 4]\n\npositive = filter (> 0) [-1, 2, -3, 4]\n-- 結果: [2, 4]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "isEven :: Int -> Bool\nisEven x = x `mod` 2 == 0\n\n-- filterで条件を満たす要素を抽出\nevens = filter isEven [1, 2, 3, 4, 5, 6]",
      "holeyCode": "___\n___\n___\n___\n___\n___",
      "correctLines": [
        "{ "lineNumber": 4, "content": "evens = filter isEven [1",
        "2",
        "3",
        "4",
        "5",
        "6"
      ]" }
      ],
      "lineHints": [
        { "lineNumber": 4, "hint": "条件を満たす要素だけを抽出する関数です" }
      ],
      "candidates": {
        "4": ["filter", "map", "select", "where"]
      },
      "testCases": [
        { "input": "evens", "expected_output": "[2, 4, 6]" }
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
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "ラムダ式は名前のない関数を定義します。バックスラッシュ(\\)で始まります。\n\n```haskell\n-- \\引数 -> 本体\ndoubled = map (\\x -> x * 2) [1, 2, 3]\n-- 結果: [2, 4, 6]\n\nadded = map (\\x -> x + 10) [1, 2, 3]\n-- 結果: [11, 12, 13]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- \\でラムダ式を開始\nsquared = map (\\x -> x * x) [1, 2, 3, 4, 5]",
      "holeyCode": "___\n___\n___\n___\n___",
      "correctLines": [
        "{ "lineNumber": 1, "content": "squared = map (\\x -> x * x) [1",
        "2",
        "3",
        "4",
        "5"
      ]" }
      ],
      "lineHints": [
        { "lineNumber": 1, "hint": "ラムダ式はバックスラッシュで始まります" }
      ],
      "candidates": {
        "1": ["\\", "lambda", "fn", "->"]
      },
      "testCases": [
        { "input": "squared", "expected_output": "[1, 4, 9, 16, 25]" }
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
          "image": "/illustrations/3d/robot.png",
          "content": "foldrはリストを右から畳み込みます。\n\n```haskell\n-- foldr :: (a -> b -> b) -> b -> [a] -> b\n-- foldr f init [x1, x2, x3]\n-- = f x1 (f x2 (f x3 init))\n\nsum' = foldr (+) 0 [1, 2, 3]\n-- = 1 + (2 + (3 + 0)) = 6\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "sumList :: [Int] -> Int\n-- foldrで右から畳み込み\nsumList xs = foldr (+) 0 xs\n\ntotal = sumList [1, 2, 3, 4, 5]",
      "holeyCode": "___\n___",
      "correctLines": [
        "{ "lineNumber": 3",
        ""content": "sumList xs = foldr (+) 0 xs" }"
      ],
      "lineHints": [
        { "lineNumber": 2, "hint": "右から畳み込む関数です" }
      ],
      "candidates": {
        "2": ["foldr", "foldl", "reduce", "sum"]
      },
      "testCases": [
        { "input": "total", "expected_output": "15" }
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
          "image": "/illustrations/3d/robot.png",
          "content": "関数合成(.)は2つの関数を組み合わせます。\n\n```haskell\n-- (.) :: (b -> c) -> (a -> b) -> a -> c\n-- (f . g) x = f (g x)\n\ndoubleNegate = negate . (*2)\n-- doubleNegate 3 = negate (3 * 2) = -6\n\nabs' = abs . negate\n-- abs' 5 = abs (negate 5) = 5\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "squareDouble :: Int -> Int\n-- .で関数合成\nsquareDouble = (^2) . (*2)\n\nresult = squareDouble 3",
      "holeyCode": "___\n___",
      "correctLines": [
        "{ "lineNumber": 3",
        ""content": "squareDouble = (^2) . (*2)" }"
      ],
      "lineHints": [
        { "lineNumber": 2, "hint": "関数合成演算子はドットです" }
      ],
      "candidates": {
        "2": [".", "|>", ">>", "->"]
      },
      "testCases": [
        { "input": "result", "expected_output": "36" }
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
          "image": "/illustrations/3d/robot.png",
          "content": "Maybe型は値が存在するかもしれない（Just）、存在しないかもしれない（Nothing）を表します。\n\n```haskell\n-- data Maybe a = Nothing | Just a\n\nsafeHead :: [a] -> Maybe a\nsafeHead [] = Nothing\nsafeHead (x:_) = Just x\n\n-- safeHead [1,2,3] = Just 1\n-- safeHead [] = Nothing\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "safeDiv :: Int -> Int -> Maybe Int\n-- Nothingで値がないことを表す\nsafeDiv _ 0 = Nothing\nsafeDiv x y = Just (x `div` y)",
      "holeyCode": "___\n___",
      "correctLines": [
        "{ "lineNumber": 3",
        ""content": "safeDiv _ 0 = Nothing" }"
      ],
      "lineHints": [
        { "lineNumber": 2, "hint": "値がないことを表すMaybeのコンストラクタです" }
      ],
      "candidates": {
        "2": ["Nothing", "None", "Null", "Empty"]
      },
      "testCases": [
        { "input": "safeDiv 10 2", "expected_output": "Just 5" },
        { "input": "safeDiv 10 0", "expected_output": "Nothing" }
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
          "image": "/illustrations/3d/robot.png",
          "content": "Either型は失敗（Left）または成功（Right）を表します。\n\n```haskell\n-- data Either a b = Left a | Right b\n\nsafeDiv :: Int -> Int -> Either String Int\nsafeDiv _ 0 = Left \"Division by zero\"\nsafeDiv x y = Right (x `div` y)\n\n-- safeDiv 10 2 = Right 5\n-- safeDiv 10 0 = Left \"Division by zero\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "validateAge :: Int -> Either String Int\nvalidateAge age\n  -- Leftでエラーを表す\n  | age < 0   = Left \"Age cannot be negative\"\n  | otherwise = Right age",
      "holeyCode": "___\n___"Age cannot be negative\"\n  | otherwise = Right age",
      "correctLines": [
        "{ "lineNumber": 4",
        ""content": "  | age < 0   = Left "Age cannot be negative"" }"
      ],
      "lineHints": [
        { "lineNumber": 3, "hint": "エラーを表すEitherのコンストラクタです" }
      ],
      "candidates": {
        "3": ["Left", "Error", "Fail", "None"]
      },
      "testCases": [
        { "input": "validateAge 25", "expected_output": "Right 25" },
        { "input": "validateAge (-5)", "expected_output": "Left \"Age cannot be negative\"" }
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
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "fmapはコンテナ内の値に関数を適用します。\n\n```haskell\n-- fmap :: Functor f => (a -> b) -> f a -> f b\n\nfmap (+1) (Just 5)     -- Just 6\nfmap (+1) Nothing      -- Nothing\nfmap (*2) [1, 2, 3]    -- [2, 4, 6]\nfmap length (Right \"hello\")  -- Right 5\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "doubleJust :: Maybe Int -> Maybe Int\n-- fmapでFunctor内の値に関数を適用\ndoubleJust = fmap (*2)\n\nresult = doubleJust (Just 5)",
      "holeyCode": "___\n___",
      "correctLines": [
        "{ "lineNumber": 3",
        ""content": "doubleJust = fmap (*2)" }"
      ],
      "lineHints": [
        { "lineNumber": 2, "hint": "Functor内の値に関数を適用する関数です" }
      ],
      "candidates": {
        "2": ["fmap", "map", "apply", "bind"]
      },
      "testCases": [
        { "input": "result", "expected_output": "Just 10" }
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
          "image": "/illustrations/3d/robot.png",
          "content": "do記法はモナド操作を命令型風に書けます。\n\n```haskell\n-- バインド(>>=)を使った書き方\nresult = Just 5 >>= \\x -> Just (x + 1)\n\n-- do記法\nresult = do\n  x <- Just 5\n  return (x + 1)\n-- 結果: Just 6\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "addMaybe :: Maybe Int -> Maybe Int -> Maybe Int\n-- doでモナド操作を順次実行\naddMaybe mx my = do\n  x <- mx\n  y <- my\n  return (x + y)",
      "holeyCode": "___\n___",
      "correctLines": [
        "{ "lineNumber": 3",
        ""content": "addMaybe mx my = do" }"
      ],
      "lineHints": [
        { "lineNumber": 2, "hint": "モナド操作を順次実行する記法です" }
      ],
      "candidates": {
        "2": ["do", "begin", "block", "run"]
      },
      "testCases": [
        { "input": "addMaybe (Just 3) (Just 5)", "expected_output": "Just 8" },
        { "input": "addMaybe (Just 3) Nothing", "expected_output": "Nothing" }
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
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "リスト内包表記は数学の集合表記に似た書き方です。\n\n```haskell\n-- [式 | 生成器, 条件]\nevens = [x | x <- [1..10], even x]\n-- 結果: [2, 4, 6, 8, 10]\n\npairs = [(x, y) | x <- [1,2], y <- [3,4]]\n-- 結果: [(1,3),(1,4),(2,3),(2,4)]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "squares :: [Int]\n-- |で生成器の前を区切る\nsquares = [x * x | x <- [1..5]]",
      "holeyCode": "___",
      "correctLines": [
        "{ "lineNumber": 3, "content": "squares = [x * x | x <- [1..5"
      ]]" }
      ],
      "lineHints": [
        { "lineNumber": 2, "hint": "生成器の前に置く区切り記号です" }
      ],
      "candidates": {
        "2": ["|", "for", "where", ";"]
      },
      "testCases": [
        { "input": "squares", "expected_output": "[1, 4, 9, 16, 25]" }
      ]
    }
  ]
}

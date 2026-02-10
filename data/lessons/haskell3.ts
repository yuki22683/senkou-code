export const haskell3Data = {
  "language": "haskell",
  "lessonId": "haskell-3",
  "lessonTitle": "Haskell III - 高階関数とモナド",
  "lessonDescription": "Haskellの高階関数、ラムダ式、関数合成、そしてモナドの基礎を学びます。map、filter、foldを使ったリスト操作や、MaybeやEitherを使ったエラーハンドリングを習得しましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "tutorialSlides": [
    {
      "title": "高階関数（map, filter）",
      "content": "**高階関数**は関数を引数に取る関数です。\\n\\n```haskell\\n-- map: 各要素に関数を適用\\nmap (*2) [1, 2, 3]  -- => [2, 4, 6]\\n\\n-- filter: 条件に合う要素を抽出\\nfilter even [1, 2, 3, 4]  -- => [2, 4]\\n```"
    },
    {
      "title": "リスト内包表記（型注釈付き）",
      "content": "型注釈を付けてリスト内包表記を定義できます。\\n\\n```haskell\\nsquares :: [Int]\\nsquares = [x * x | x <- [1..5]]\\n-- => [1, 4, 9, 16, 25]\\n```\\n\\n**ポイント**:\\n- `:: [Int]` で「Intのリスト」型を明示\\n- `|` で式と生成器を区切る\\n- `<-` でリストから要素を取り出す"
    }
  ],
  "exercises": [
    {
      "title": "map関数",
      "tutorialSlides": [
        {
          "title": "map関数",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "map関数はリストの各要素に関数を適用し、新しいリストを返します。\\n\\n```haskell\\n-- map :: (a -> b) -> [a] -> [b]\\ndoubled = map (*2) [1, 2, 3]\\n-- 結果: [2, 4, 6]\\n\\nuppers = map toUpper \"hello\"\\n-- 結果: \"HELLO\"\\n```"
        }
      ],
      "correctCode": "-- Intを入力\\ndouble :: Int -> Int\\n-- *で掛け算\\ndouble x = x * 2\\n\\n-- 各要素に関数を適用してリストを変換する関数\\ndoubled = map double [1, 2, 3, 4, 5]",
      "holeyCode": "-- Intを入力\\n___ :: ___ -> ___\\n-- *で掛け算\\n___ ___ = ___ ___ ___\\n___\\n-- 各要素に関数を適用してリストを変換する関数\\n___ = ___ ___ [___, ___, ___, ___, ___]",
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
          "double関数の型シグネチャを定義します。",
          null,
          "xを2倍にする計算を定義します。",
          null,
          null,
          "map関数でdoubleを各要素に適用します。"
        ],
        "candidates": {
          "4": [
            "map",
            "filter",
            "fold",
            "apply"
          ],
          "others": ["double", "Int", "x", "*", "2", "doubled", "1", "3", "4", "5", ""]
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
      "tutorialSlides": [
        {
          "title": "filter関数",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "filter関数は条件（述語関数）を満たす要素だけを抽出します。\\n\\n```haskell\\n-- filter :: (a -> Bool) -> [a] -> [a]\\nevens = filter even [1, 2, 3, 4, 5]\\n-- 結果: [2, 4]\\n\\npositive = filter (> 0) [-1, 2, -3, 4]\\n-- 結果: [2, 4]\\n```"
        }
      ],
      "correctCode": "-- Boolを入力\\nisEven :: Int -> Bool\\n-- ==で等価比較\\nisEven x = x `mod` 2 == 0\\n\\n-- 条件を満たす要素だけを抽出する関数\\nevens = filter isEven [1, 2, 3, 4, 5, 6]",
      "holeyCode": "-- Boolを入力\\n___ :: ___ -> ___\\n-- ==で等価比較\\n___ ___ = ___ `___` ___ ___ ___\\n___\\n-- 条件を満たす要素だけを抽出する関数\\n___ = ___ ___ [___, ___, ___, ___, ___, ___]",
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
          "isEven関数の型シグネチャを定義します。",
          null,
          "xを2で割った余りが0かどうかを判定します。",
          null,
          null,
          "filter関数でisEvenを満たす要素を抽出します。"
        ],
        "candidates": {
          "4": [
            "filter",
            "map",
            "select",
            "where"
          ],
          "others": ["isEven", "Int", "Bool", "x", "mod", "2", "==", "0", "evens", "1", "3", "4", "5", "6", ""]
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
      "tutorialSlides": [
        {
          "title": "ラムダ式",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "ラムダ式は名前のない関数を定義します。バックスラッシュ(\\)で始まります。\\n\\n```haskell\\n-- \\引数 -> 本体\\ndoubled = map (\\x -> x * 2) [1, 2, 3]\\n-- 結果: [2, 4, 6]\\n\\nadded = map (\\x -> x + 10) [1, 2, 3]\\n-- 結果: [11, 12, 13]\\n```"
        }
      ],
      "correctCode": "-- ラムダ式を開始する記号\\nsquared = map (\\x -> x * x) [1, 2, 3, 4, 5]",
      "holeyCode": "-- ラムダ式を開始する記号\\n___ = ___ (\\\\___ -> ___ ___ ___) [___, ___, ___, ___, ___]",
      "correctLines": [
          "-- ラムダ式を開始する記号",
          "squared = map (\\x -> x * x) [1, 2, 3, 4, 5]"
        ],
      "lineHints": [
          null,
          "map関数とラムダ式で各要素を2乗します。"
        ],
        "candidates": {
          "1": [
            "map",
            "filter",
            "fold",
            "apply"
          ],
          "others": ["squared", "x", "*", "1", "2", "3", "4", "5"]
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
      "tutorialSlides": [
        {
          "title": "foldr（右畳み込み）",
          "image": "/illustrations/3d/foldr_fold.png",
          "content": "foldrはリストを右から畳み込みます。\\n\\n```haskell\\n-- foldr :: (a -> b -> b) -> b -> [a] -> b\\n-- foldr f init [x1, x2, x3]\\n-- = f x1 (f x2 (f x3 init))\\n\\nsum' = foldr (+) 0 [1, 2, 3]\\n-- = 1 + (2 + (3 + 0)) = 6\\n```"
        }
      ],
      "correctCode": "-- Intを入力\\nsumList :: [Int] -> Int\\n-- リストを右から畳み込む関数\\nsumList xs = foldr (+) 0 xs\\n-- sumListを入力\\ntotal = sumList [1, 2, 3, 4, 5]",
      "holeyCode": "-- Intを入力\\n___ :: [___] -> ___\\n-- リストを右から畳み込む関数\\n___ ___ = ___ (___) ___ ___\\n-- sumListを入力\\n___ = ___ [___, ___, ___, ___, ___]",
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
          "sumList関数の型シグネチャを定義します。",
          null,
          "foldrで(+)演算子と初期値0を使ってリストを畳み込みます。",
          null,
          "sumList関数を呼び出してリストの合計を計算します。"
        ],
        "candidates": {
          "2": [
            "foldr",
            "foldl",
            "reduce",
            "sum"
          ],
          "others": ["sumList", "Int", "xs", "+", "0", "total", "1", "2", "3", "4", "5"]
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
      "tutorialSlides": [
        {
          "title": "関数合成",
          "image": "/illustrations/3d/compose_gear.png",
          "content": "関数合成(.)は2つの関数を組み合わせます。\\n\\n```haskell\\n-- (.) :: (b -> c) -> (a -> b) -> a -> c\\n-- (f . g) x = f (g x)\\n\\ndoubleNegate = negate . (*2)\\n-- doubleNegate 3 = negate (3 * 2) = -6\\n\\nabs' = abs . negate\\n-- abs' 5 = abs (negate 5) = 5\\n```"
        }
      ],
      "correctCode": "-- Intを入力\\nsquareDouble :: Int -> Int\\n-- 2つの関数を合成する演算子\\nsquareDouble = (^2) . (*2)\\n-- squareDoubleを入力\\nresult = squareDouble 3",
      "holeyCode": "-- Intを入力\\n___ :: ___ -> ___\\n-- 2つの関数を合成する演算子\\n___ = (___) ___ (___)\\n-- squareDoubleを入力\\n___ = ___ ___",
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
          "squareDouble関数の型シグネチャを定義します。",
          null,
          ".(ドット)で2乗と2倍の関数を合成します。",
          null,
          "squareDouble関数に3を渡して呼び出します。"
        ],
        "candidates": {
          "2": [
            ".",
            "|>",
            ">>",
            "->"
          ],
          "others": ["squareDouble", "Int", "^2", "*2", "result", "3"]
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
      "tutorialSlides": [
        {
          "title": "Maybe型",
          "image": "/illustrations/3d/maybe_box.png",
          "content": "Maybe型は値が存在するかもしれない（Just）、存在しないかもしれない（Nothing）を表します。\\n\\n```haskell\\n-- data Maybe a = Nothing | Just a\\n\\nsafeHead :: [a] -> Maybe a\\nsafeHead [] = Nothing\\nsafeHead (x:_) = Just x\\n\\n-- safeHead [1,2,3] = Just 1\\n-- safeHead [] = Nothing\\n```"
        }
      ],
      "correctCode": "-- Maybe Intを入力\\nsafeDiv :: Int -> Int -> Maybe Int\\n-- 値がないことを表すMaybeのコンストラクタ\\nsafeDiv _ 0 = Nothing\\n-- Justを入力\\nsafeDiv x y = Just (x `div` y)",
      "holeyCode": "-- Maybe Intを入力\\n___ :: ___ -> ___ -> ___ ___\\n-- 値がないことを表すMaybeのコンストラクタ\\n___ ___ ___ = ___\\n-- Justを入力\\n___ ___ ___ = ___ (___ `___` ___)",
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
          "safeDiv関数の型シグネチャを定義します。",
          null,
          "0で割る場合はNothingを返します。",
          null,
          "割り算結果をJustで包んで返します。"
        ],
        "candidates": {
          "2": [
            "Nothing",
            "None",
            "Null",
            "Empty"
          ],
          "others": ["safeDiv", "Int", "Maybe", "_", "0", "x", "y", "Just", "div"]
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
      "tutorialSlides": [
        {
          "title": "Either型",
          "image": "/illustrations/3d/either_fork.png",
          "content": "Either型は失敗（Left）または成功（Right）を表します。\\n\\n```haskell\\n-- data Either a b = Left a | Right b\\n\\nsafeDiv :: Int -> Int -> Either String Int\\nsafeDiv _ 0 = Left \"Division by zero\"\\nsafeDiv x y = Right (x `div` y)\\n\\n-- safeDiv 10 2 = Right 5\\n-- safeDiv 10 0 = Left \"Division by zero\"\\n```"
        }
      ],
      "correctCode": "-- Either String Intを入力\\nvalidateAge :: Int -> Either String Int\\n-- ageを入力\\nvalidateAge age\\n  -- 失敗・エラーを表すEitherのコンストラクタ\\n  | age < 0   = Left \"Age cannot be negative\"\\n  -- Rightを入力\\n  | otherwise = Right age",
      "holeyCode": "-- Either String Intを入力\\n___ :: ___ -> ___ ___ ___\\n-- ageを入力\\n___ ___\\n  -- 失敗・エラーを表すEitherのコンストラクタ\\n  | ___ ___ ___   = ___ \"___\"\\n  -- Rightを入力\\n  | ___ = ___ ___",
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
          "validateAge関数の型シグネチャを定義します。",
          null,
          "関数名と引数を定義します。",
          null,
          "age < 0のときLeftでエラーメッセージを返します。",
          null,
          "otherwiseでRightにageを包んで返します。"
        ],
        "candidates": {
          "3": [
            "Left",
            "Error",
            "Fail",
            "None"
          ],
          "others": ["validateAge", "Int", "Either", "String", "age", "<", "0", "Right", "otherwise", "Age cannot be negative"]
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
      "tutorialSlides": [
        {
          "title": "fmap（ファンクタ）",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "fmapはコンテナ内の値に関数を適用します。\\n\\n```haskell\\n-- fmap :: Functor f => (a -> b) -> f a -> f b\\n\\nfmap (+1) (Just 5)     -- Just 6\\nfmap (+1) Nothing      -- Nothing\\nfmap (*2) [1, 2, 3]    -- [2, 4, 6]\\nfmap length (Right \"hello\")  -- Right 5\\n```"
        }
      ],
      "correctCode": "-- Maybe Intを入力\\ndoubleJust :: Maybe Int -> Maybe Int\\n-- Functor内の値に関数を適用する関数\\ndoubleJust = fmap (*2)\\n-- doubleJustを入力\\nresult = doubleJust (Just 5)",
      "holeyCode": "-- Maybe Intを入力\\n___ :: ___ ___ -> ___ ___\\n-- Functor内の値に関数を適用する関数\\n___ = ___ (*___)\\n-- doubleJustを入力\\n___ = ___ (___ ___)",
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
          "doubleJust関数の型シグネチャを定義します。",
          null,
          "fmapで(*2)をFunctor内の値に適用します。",
          null,
          "doubleJust関数にJust 5を渡して呼び出します。"
        ],
        "candidates": {
          "2": [
            "fmap",
            "map",
            "apply",
            "bind"
          ],
          "others": ["doubleJust", "Maybe", "Int", "2", "result", "Just", "5"]
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
      "tutorialSlides": [
        {
          "title": "do記法",
          "image": "/illustrations/3d/do_sequence.png",
          "content": "do記法はモナド操作を命令型風に書けます。\\n\\n```haskell\\n-- バインド(>>=)を使った書き方\\nresult = Just 5 >>= \\x -> Just (x + 1)\\n\\n-- do記法\\nresult = do\\n  x <- Just 5\\n  return (x + 1)\\n-- 結果: Just 6\\n```"
        }
      ],
      "correctCode": "-- Maybe Intを入力\\naddMaybe :: Maybe Int -> Maybe Int -> Maybe Int\\n-- モナド操作を順次実行する記法\\naddMaybe mx my = do\\n  -- mxを入力\\n  x <- mx\\n  -- myを入力\\n  y <- my\\n  -- +で足し算\\n  return (x + y)",
      "holeyCode": "-- Maybe Intを入力\\n___ :: ___ ___ -> ___ ___ -> ___ ___\\n-- モナド操作を順次実行する記法\\n___ ___ ___ = do\\n  -- mxを入力\\n  ___ <- ___\\n  -- myを入力\\n  ___ <- ___\\n  -- +で足し算\\n  ___ (___ ___ ___)",
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
          "addMaybe関数の型シグネチャを定義します。",
          null,
          "関数定義とdo記法を開始します。",
          null,
          "mxから値xを取り出します。",
          null,
          "myから値yを取り出します。",
          null,
          "returnでx + yの結果を包んで返します。"
        ],
        "candidates": {
          "2": [
            "do",
            "begin",
            "block",
            "run"
          ],
          "others": ["addMaybe", "Maybe", "Int", "mx", "my", "x", "y", "return", "+"]
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
      "tutorialSlides": [
        {
          "title": "リスト内包表記",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "リスト内包表記は数学の集合表記に似た書き方です。\\n\\n```haskell\\n-- [式 | 生成器, 条件]\\nevens = [x | x <- [1..10], even x]\\n-- 結果: [2, 4, 6, 8, 10]\\n\\npairs = [(x, y) | x <- [1,2], y <- [3,4]]\\n-- 結果: [(1,3),(1,4),(2,3),(2,4)]\\n```"
        }
      ],
      "correctCode": "-- [Int]を入力\\nsquares :: [Int]\\n-- リスト内包表記で式と生成器を区切る記号\\nsquares = [x * x | x <- [1..5]]",
      "holeyCode": "-- [Int]を入力\\n___ :: [___]\\n-- リスト内包表記で式と生成器を区切る記号\\n___ = [___ ___ ___ | ___ <- [___..___]]",
      "correctLines": [
          "-- [Int]を入力",
          "squares :: [Int]",
          "-- リスト内包表記で式と生成器を区切る記号",
          "squares = [x * x | x <- [1..5]]"
        ],
      "lineHints": [
          null,
          "squares定数の型シグネチャを定義します。",
          null,
          "|で式と生成器を区切り、x <- [1..5]でリストから要素を取り出します。"
        ],
        "candidates": {
          "2": [
            "|",
            "for",
            "where",
            ";"
          ],
          "others": ["squares", "Int", "x", "*", "1", "5"]
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

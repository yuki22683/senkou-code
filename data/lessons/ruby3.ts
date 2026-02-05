export const ruby3Data = {
  "language": "ruby",
  "lessonId": "ruby-3",
  "lessonTitle": "Ruby III - メタプログラミングと関数型スタイル",
  "lessonDescription": "Rubyの高度な機能を学びます。ブロック、Proc、ラムダ、メタプログラミングなどRubyの真髄を身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "exercises": [
    {
        "title": "yieldとブロック",
        "description": "yieldを使ってブロックを呼び出す方法を学びましょう。",
        "difficulty": "hard",
        "orderIndex": 1,
        "tutorialSlides": [
          {
            "title": "yield（イールド）とは",
            "content": "# メソッドにブロックを渡（わた）して実行（じっこう）\\\\\n\\\\\n**yield（イールド）** は、メソッドに渡されたブロックを **その場所で実行する** キーワードです。\\\\\n\\\\\n**身近（みぢか）な例（れい）：**\\\\\n- メソッド = 「〇〇をやってね」という指示（しじ）を待っている人\\\\\n- ブロック = 具体的（ぐたいてき）な「やること」リスト\\\\\n- yield = 「さあ、渡された指示を今やって！」という合図\\\\\n\\\\\nyield を使うと、メソッドを呼ぶときに **やることを自由に変えられる** のが便利です。"
          },
          {
            "title": "yield の使い方",
            "content": "# ブロックを実行する\\\\\n\\\\\n**コード例：**\\\\\n```ruby\\\\\ndef greet\\\\\n  yield\\\\\nend\\\\\n\\\\\ngreet { puts 'こんにちは' }\\\\\n# => こんにちは\\\\\n```\\\\\n\\\\\n**何が起こるの？**\\\\\n1. `greet` メソッドを呼ぶ\\\\\n2. `{ puts 'こんにちは' }` というブロックを渡す\\\\\n3. メソッド内の `yield` に到達（とうたつ）\\\\\n4. 渡されたブロックが実行される\\\\\n5. 「こんにちは」と表示される\\\\\n\\\\\n**ポイント：**\\\\\n- ブロックの内容を変えれば、同じメソッドで違う処理ができる\\\\\n- `yield` は何回でも呼べる（その度にブロックが実行される）"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# defでメソッドを定義\\\\\ndef twice\\\\\n  # yieldでブロックを実行\\\\\n  yield\\\\\n  # yieldでブロックを実行\\\\\n  yield\\\\\n# endで終了\\\\\nend",
        "holeyCode": "# defでメソッドを定義\\\\\ndef ___\\\\\n  # yieldでブロックを実行\\\\\n  ___\\\\\n  # yieldでブロックを実行\\\\\n  ___\\\\\n# endで終了\\\\\n___",
        "correctLines": [
          "# defでメソッドを定義",
          "def twice",
          "  # yieldでブロックを実行",
          "  yield",
          "  # yieldでブロックを実行",
          "  yield",
          "# endで終了",
          "end"
        ],
        "lineHints": [
          null,
          "lineNumber",
          null,
          "hint",
          null,
          "ブロックを呼び出すキーワード",
          null,
          "lineNumber"
        ],
        "candidates": {
          "2": [
            "yield",
            "call",
            "block",
            "return"
          ],
          "3": [
            "yield",
            "call",
            "block",
            "return"
          ],
          "others": ["def", "end", "twice"]
        },
        "testCases": [
          {
            "input": "result = []; twice { result << 1 }; result",
            "expected_output": "[1, 1]"
          }
        ]
      },
    {
        "title": "Procオブジェクト",
        "description": "ブロックをオブジェクト化したProcを学びましょう。",
        "difficulty": "hard",
        "orderIndex": 2,
        "tutorialSlides": [
          {
            "title": "Proc（プロック）とは",
            "content": "# ブロックを「モノ」として保存（ほぞん）\\\\\n\\\\\n**Proc（プロック）** は、ブロック（処理のかたまり）を **オブジェクト** にしたものです。\\\\\n\\\\\n**身近（みぢか）な例（れい）：**\\\\\n- ブロック = 「やること」を口で言う（その場かぎり）\\\\\n- Proc = 「やること」をメモに書いて保存する（あとで何回でも見られる）\\\\\n\\\\\n**Procの便利なところ：**\\\\\n- 変数に入れておける\\\\\n- 他のメソッドに渡せる\\\\\n- あとで何回でも呼び出せる"
          },
          {
            "title": "Proc の使い方",
            "content": "# Proc.new で作成\\\\\n\\\\\n**コード例：**\\\\\n```ruby\\\\\nmy_proc = Proc.new { puts 'Hello' }\\\\\nmy_proc.call  # => Hello\\\\\n```\\\\\n\\\\\n**何をしているの？**\\\\\n1. `Proc.new { puts 'Hello' }` → 「Hello と表示する」というProcを作る\\\\\n2. `my_proc` という変数に入れる\\\\\n3. `my_proc.call` → Procを実行（じっこう）する\\\\\n4. 「Hello」と表示される\\\\\n\\\\\n**引数（ひきすう）も渡せる：**\\\\\n```ruby\\\\\ndoubler = Proc.new { |x| x * 2 }\\\\\nputs doubler.call(5)  # => 10\\\\\n```\\\\\n\\\\\n`|x|` の部分で、渡された値を受け取ります。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# Procでブロックをオブジェクト化、**で累乗\\\\\nsquarer = Proc.new { |x| x ** 2 }",
        "holeyCode": "# Procでブロックをオブジェクト化、**で累乗\\\\\nsquarer = Proc.new { |x| x ** ___ }",
        "correctLines": [
          "# Procでブロックをオブジェクト化、**で累乗",
          "squarer = Proc.new { |x| x ** 2 }"
        ],
        "lineHints": [
          null,
          "lineNumber"
        ],
        "candidates": {
          "1": [
            "Proc",
            "Block",
            "Lambda",
            "Function"
          ],
          "others": [
            "**",
            "2"
          ]
        },
        "testCases": [
          {
            "input": "squarer.call(5)",
            "expected_output": "25"
          }
        ]
      },
    {
        "title": "ラムダ",
        "description": "Procとは異なる振る舞いを持つラムダを学びましょう。",
        "difficulty": "hard",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "ラムダとは",
            "content": "# Procの「厳密（げんみつ）バージョン」\\\\\n\\\\\n**ラムダ** は Proc の一種（いっしゅ）ですが、より **厳格（げんかく）なルール** を持っています。\\\\\n\\\\\n**Proc との違（ちが）い：**\\\\\n\\\\\n| 比較（ひかく） | Proc | ラムダ |\\\\\n|-------|------|--------|\\\\\n| 引数の数 | 足りなくてもOK | 必ず正しい数が必要 |\\\\\n| return | メソッド全体から抜（ぬ）ける | ラムダ内だけから抜ける |\\\\\n\\\\\n**いつラムダを使う？**\\\\\n- 引数の数を間違（まちが）えたときにエラーにしたい\\\\\n- より「関数らしい」動きをさせたい"
          },
          {
            "title": "ラムダの使い方",
            "content": "# -> で簡単（かんたん）に作れる\\\\\n\\\\\n**コード例：**\\\\\n```ruby\\\\\nmy_lambda = ->(x) { x * 2 }\\\\\nmy_lambda.call(5)  # => 10\\\\\n```\\\\\n\\\\\n**何をしているの？**\\\\\n1. `->(x) { x * 2 }` → 「xを2倍にする」というラムダを作る\\\\\n2. `my_lambda` という変数に入れる\\\\\n3. `my_lambda.call(5)` → 5を渡して実行\\\\\n4. 結果（けっか）は10\\\\\n\\\\\n**書き方は2種類：**\\\\\n```ruby\\\\\n# アロー記法（->）\\\\\nadd = ->(a, b) { a + b }\\\\\n\\\\\n# lambda キーワード\\\\\nadd = lambda { |a, b| a + b }\\\\\n```\\\\\n\\\\\nどちらも同じ動きですが、`->` の方が短く書けます。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# ->でラムダを定義、**で累乗\\\\\ncube = ->(x) { x ** 3 }",
        "holeyCode": "# ->でラムダを定義、**で累乗\\\\\ncube = ->(x) { x ** ___ }",
        "correctLines": [
          "# ->でラムダを定義、**で累乗",
          "cube = ->(x) { x ** 3 }"
        ],
        "lineHints": [
          null,
          "lineNumber"
        ],
        "candidates": {
          "1": [
            "->",
            "=>",
            "lambda",
            "proc"
          ],
          "others": ["**", "3"]
        },
        "testCases": [
          {
            "input": "cube.call(3)",
            "expected_output": "27"
          }
        ]
      },
    {
        "title": "シンボルとProc変換",
        "description": "&演算子を使ったシンボルのProc変換を学びましょう。",
        "difficulty": "hard",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "&:（アンパサンドコロン）記法とは",
            "content": "# シンボルを Proc に変換（へんかん）する魔法（まほう）\\\\\n\\\\\n**`&:`** を使うと、シンボル（メソッド名）を **Proc に変換** してブロックとして渡せます。\\\\\n\\\\\n**身近（みぢか）な例（れい）：**\\\\\n- 普通（ふつう）は「各要素（ようそ）を文字列にして」と細かく書く\\\\\n- `&:to_s` なら「文字列化よろしく！」と一言で済む\\\\\n\\\\\nRubyらしい **短くてエレガント** な書き方です。"
          },
          {
            "title": "&: の使い方",
            "content": "# 短くて読みやすいコード\\\\\n\\\\\n**コード例：**\\\\\n```ruby\\\\\n[1, 2, 3].map(&:to_s)\\\\\n# => ['1', '2', '3']\\\\\n```\\\\\n\\\\\n**これは次のコードと同じ意味：**\\\\\n```ruby\\\\\n[1, 2, 3].map { |n| n.to_s }\\\\\n```\\\\\n\\\\\n**何が起こるの？**\\\\\n1. `:to_s` はシンボル（メソッド名）\\\\\n2. `&` をつけると「このメソッドを各要素に適用（てきよう）して」という意味になる\\\\\n3. 各数字に対して `to_s`（文字列に変換）が呼ばれる\\\\\n4. 結果は `['1', '2', '3']`\\\\\n\\\\\n**よく使う例：**\\\\\n- `&:upcase` → 大文字に\\\\\n- `&:downcase` → 小文字に\\\\\n- `&:to_i` → 整数（せいすう）に変換"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# mapで変換、upcaseで大文字化\\\\\nresult = ['ruby', 'python', 'go'].map(&:upcase)",
        "holeyCode": "# mapで変換、upcaseで大文字化\\\\\nresult = ['ruby', 'python', 'go'].map(&:___)",
        "correctLines": [
          "# mapで変換、upcaseで大文字化",
          "result = ['ruby', 'python', 'go'].map(&:upcase)"
        ],
        "lineHints": [
          null,
          "lineNumber"
        ],
        "candidates": {
          "1": [
            "map",
            "each",
            "select",
            "filter"
          ],
          "others": [
            "upcase"
          ]
        },
        "testCases": [
          {
            "input": "result",
            "expected_output": "[\"RUBY\", \"PYTHON\", \"GO\"]"
          }
        ]
      },
    {
        "title": "reduceメソッド",
        "description": "配列を単一の値に畳み込むreduceを学びましょう。",
        "difficulty": "hard",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "reduce（リデュース）とは",
            "content": "# 配列を「1つの値」にまとめる\\\\\n\\\\\n**reduce（リデュース）** は、配列の全要素（ようそ）を **1つの値** にまとめるメソッドです。「畳（たた）み込み」とも呼ばれます。\\\\\n\\\\\n**身近（みぢか）な例（れい）：**\\\\\n- 買い物リストの全商品（しょうひん）の **合計金額（ごうけいきんがく）** を出す\\\\\n- テストの点数を全部 **足（た）して** 平均（へいきん）を計算する\\\\\n\\\\\n複数（ふくすう）のデータを「まとめて」1つの結果を出したいときに使います。"
          },
          {
            "title": "reduce の使い方",
            "content": "# 順番に計算してまとめる\\\\\n\\\\\n**コード例：**\\\\\n```ruby\\\\\n[1, 2, 3].reduce(0) { |acc, n| acc + n }\\\\\n# => 6\\\\\n```\\\\\n\\\\\n**何が起こるの？**\\\\\n1. `(0)` → 計算の出発点（しゅっぱつてん）を0にする\\\\\n2. 1回目：`acc=0, n=1` → `0 + 1 = 1`（accが1になる）\\\\\n3. 2回目：`acc=1, n=2` → `1 + 2 = 3`（accが3になる）\\\\\n4. 3回目：`acc=3, n=3` → `3 + 3 = 6`（accが6になる）\\\\\n5. 最終結果（さいしゅうけっか）：6\\\\\n\\\\\n**ブロック変数の意味：**\\\\\n- `acc`（アキュムレータ）→ 「これまでの計算結果」を覚える\\\\\n- `n` → 配列から取り出した「今の要素」\\\\\n\\\\\n**injectという別名（べつめい）もあります。**"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# reduceで畳み込み、+で加算\\\\\nsum = [1, 2, 3, 4, 5].reduce(0) { |acc, n| acc + n }",
        "holeyCode": "# reduceで畳み込み、+で加算\\\\\nsum = [___, 2, 3, 4, 5].reduce(0) { |acc, n| acc + n }",
        "correctLines": [
          "# reduceで畳み込み、+で加算",
          "sum = [1, 2, 3, 4, 5].reduce(0) { |acc, n| acc + n }"
        ],
        "lineHints": [
          null,
          "lineNumber"
        ],
        "candidates": {
          "1": [
            "reduce",
            "fold",
            "inject",
            "sum"
          ],
          "others": ["+", "1"]
        },
        "testCases": [
          {
            "input": "sum",
            "expected_output": "15"
          }
        ]
      },
    {
        "title": "selectとreject",
        "description": "条件に基づいて要素をフィルタリングする方法を学びましょう。",
        "difficulty": "hard",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "select と reject",
            "content": "# 条件（じょうけん）で要素（ようそ）を選ぶ\\\\\n\\\\\n**select（セレクト）** と **reject（リジェクト）** は、条件に合う要素を選ぶメソッドです。\\\\\n\\\\\n**2つの違（ちが）い：**\\\\\n- `select` → 条件に **合う** ものを集める（選ぶ）\\\\\n- `reject` → 条件に **合わない** ものを集める（除く）\\\\\n\\\\\n**身近（みぢか）な例（れい）：**\\\\\n- select = 「赤いもの」だけ選ぶ\\\\\n- reject = 「赤いもの」以外を選ぶ（赤を除く）"
          },
          {
            "title": "select と reject の使い方",
            "content": "# 条件でフィルタリング\\\\\n\\\\\n**select の例：**\\\\\n```ruby\\\\\n[1, 2, 3, 4, 5].select { |n| n > 3 }\\\\\n# => [4, 5]（3より大きいものを選ぶ）\\\\\n```\\\\\n\\\\\n**reject の例：**\\\\\n```ruby\\\\\n[1, 2, 3, 4, 5].reject { |n| n > 3 }\\\\\n# => [1, 2, 3]（3より大きいものを除く）\\\\\n```\\\\\n\\\\\n**偶数（ぐうすう）・奇数（きすう）を選ぶ：**\\\\\n```ruby\\\\\n# 偶数だけ選ぶ\\\\\n[1, 2, 3, 4, 5, 6].select { |n| n.even? }\\\\\n# => [2, 4, 6]\\\\\n\\\\\n# 奇数だけ選ぶ（偶数を除く）\\\\\n[1, 2, 3, 4, 5, 6].reject { |n| n.even? }\\\\\n# => [1, 3, 5]\\\\\n```\\\\\n\\\\\n`.even?` は「偶数か？」を確認（かくにん）するメソッドです。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# selectでフィルタ、evenで偶数判定\\\\\nevens = [1, 2, 3, 4, 5, 6].select { |n| n.even? }",
        "holeyCode": "# selectでフィルタ、evenで偶数判定\\\\\nevens = [___, 2, 3, 4, 5, 6].select { |n| n.even? }",
        "correctLines": [
          "# selectでフィルタ、evenで偶数判定",
          "evens = [1, 2, 3, 4, 5, 6].select { |n| n.even? }"
        ],
        "lineHints": [
          null,
          "lineNumber"
        ],
        "candidates": {
          "1": [
            "select",
            "filter",
            "find_all",
            "reject"
          ],
          "others": ["even", "1"]
        },
        "testCases": [
          {
            "input": "evens",
            "expected_output": "[2, 4, 6]"
          }
        ]
      },
    {
        "title": "スプラット演算子",
        "description": "*演算子を使った可変長引数を学びましょう。",
        "difficulty": "hard",
        "orderIndex": 7,
        "tutorialSlides": [
          {
            "title": "スプラット演算子（*）とは",
            "content": "# いくつでも引数（ひきすう）を受け取れる\\\\\n\\\\\n**スプラット演算子（*）** を使うと、**いくつでも引数を受け取れる** メソッドが作れます。\\\\\n\\\\\n**身近（みぢか）な例（れい）：**\\\\\n- 普通のメソッド：「2つの数を足す」（数が決まっている）\\\\\n- スプラット：「渡された数を全部足す」（何個でもOK）\\\\\n\\\\\n**「可変長引数（かへんちょうひきすう）」** と呼ばれ、引数の数が決まっていないときに便利です。"
          },
          {
            "title": "スプラット演算子の使い方",
            "content": "# * で複数（ふくすう）の引数を受け取る\\\\\n\\\\\n**コード例：**\\\\\n```ruby\\\\\ndef greet(*names)\\\\\n  names.each { |name| puts name }\\\\\nend\\\\\n\\\\\ngreet('アリス', 'ボブ', 'キャロル')\\\\\n# => Alice\\\\\n# => Bob\\\\\n# => Carol\\\\\n```\\\\\n\\\\\n**何が起こるの？**\\\\\n1. `*names` → 渡された引数をすべて配列にまとめる\\\\\n2. 3つの名前を渡すと `names = ['アリス', 'ボブ', 'キャロル']` になる\\\\\n3. `.each` で1つずつ表示\\\\\n\\\\\n**配列を展開（てんかい）するときにも使える：**\\\\\n```ruby\\\\\nnums = [1, 2, 3]\\\\\nsome_method(*nums)  # some_method(1, 2, 3) と同じ\\\\\n```\\\\\n\\\\\n`*` は配列を「バラバラ」にする魔法（まほう）です。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# *で可変長引数を受け取る\\\\\ndef sum_all(*numbers)\\\\\n  # reduceで畳み込み\\\\\n  numbers.reduce(0) { |acc, n| acc + n }\\\\\n# endで終了\\\\\nend",
        "holeyCode": "# *で可変長引数を受け取る\\\\\ndef sum_all(*___)\\\\\n  # reduceで畳み込み\\\\\n  numbers.reduce(___) { |acc, n| acc + n }\\\\\n# endで終了\\\\\n___",
        "correctLines": [
          "# *で可変長引数を受け取る",
          "def sum_all(*numbers)",
          "  # reduceで畳み込み",
          "  numbers.reduce(0) { |acc, n| acc + n }",
          "# endで終了",
          "end"
        ],
        "lineHints": [
          null,
          "lineNumber",
          null,
          "hint",
          null,
          "関数（sum_all）を新しく定義します。"
        ],
        "candidates": {
          "1": [
            "*",
            "**",
            "&",
            "..."
          ],
          "2": [
            "reduce",
            "sum",
            "fold",
            "inject"
          ],
          "others": ["def", "end", "numbers", "0"]
        },
        "testCases": [
          {
            "input": "sum_all(1, 2, 3)",
            "expected_output": "6"
          }
        ]
      },
    {
        "title": "method_missing",
        "description": "メタプログラミングの基本、method_missingを学びましょう。",
        "difficulty": "hard",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "method_missing とは",
            "content": "# 存在（そんざい）しないメソッドをキャッチ\\\\\n\\\\\n**method_missing（メソッドミッシング）** は、**存在しないメソッドが呼ばれたとき** に自動で実行される特別なメソッドです。\\\\\n\\\\\n**身近（みぢか）な例（れい）：**\\\\\n- 受付（うけつけ）で「〇〇さんをお願いします」と言う\\\\\n- その人がいなければ「〇〇さんはいません」と答える\\\\\n- method_missing = 「いない人を呼ばれたときの対応（たいおう）」\\\\\n\\\\\n**メタプログラミング** の基本（きほん）で、Rubyの強力（きょうりょく）な機能です。"
          },
          {
            "title": "method_missing の使い方",
            "content": "# 存在しないメソッドを捕（つか）まえる\\\\\n\\\\\n**コード例：**\\\\\n```ruby\\\\\nclass MyClass\\\\\n  def method_missing(name, *args)\\\\\n    puts \"#{name} が呼ばれました\"\\\\\n  end\\\\\nend\\\\\n\\\\\nobj = MyClass.new\\\\\nobj.hello  # => hello が呼ばれました\\\\\nobj.foo    # => foo が呼ばれました\\\\\n```\\\\\n\\\\\n**何が起こるの？**\\\\\n1. `obj.hello` を呼ぶ\\\\\n2. `hello` メソッドは定義されていない\\\\\n3. `method_missing` が代わりに実行される\\\\\n4. `name` には `:hello` が入る\\\\\n\\\\\n**引数の意味：**\\\\\n- `name` → 呼ばれたメソッド名（シンボル）\\\\\n- `*args` → 渡された引数（あれば）\\\\\n\\\\\n**注意：** 便利ですが、使いすぎるとデバッグが難（むずか）しくなります。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# classでクラスを定義\\\\nclass FlexibleClass\\\\n  # method_missingで未定義メソッドを捕捉\\\\n  def method_missing(name, *args)\\\\n    # nameでメソッド名を参照\\\\n    \"Unknown method: #{名前}\"\\\\n  # endで終了\\\\n  end\\\\n# endで終了\\\\nend",
        "holeyCode": "# classでクラスを定義\\\\\nclass ___\\\\\n  # method_missingで未定義メソッドを捕捉\\\\\n  def method_missing(name, *___)\\\\\n    # nameでメソッド名を参照\\\\\n    \"___\"\\\\\n  # endで終了\\\\\n  ___\\\\\n# endで終了\\\\\n___",
        "correctLines": [
          "# classでクラスを定義",
          "class FlexibleClass",
          "  # method_missingで未定義メソッドを捕捉",
          "  def method_missing(name, *args)",
          "    # nameでメソッド名を参照",
          "    \"Unknown method: #{名前}\"",
          "  # endで終了",
          "  end",
          "# endで終了",
          "end"
        ],
        "lineHints": [
          null,
          "lineNumber",
          null,
          "hint",
          null,
          "関数（method_missing）を新しく定義します。",
          null,
          "lineNumber",
          null,
          "hint"
        ],
        "candidates": {
          "2": [
            "method_missing",
            "missing_method",
            "no_method",
            "undefined"
          ],
          "3": [
            "name",
            "method",
            "args",
            "self"
          ],
          "others": ["class", "end", "FlexibleClass", "Unknown method: #{name}"]
        },
        "testCases": [
          {
            "input": "FlexibleClass.new.hello",
            "expected_output": "Unknown method: hello"
          }
        ]
      },
    {
        "title": "Struct",
        "description": "簡易的なクラスを作成するStructを学びましょう。",
        "difficulty": "hard",
        "orderIndex": 9,
        "tutorialSlides": [
          {
            "title": "Struct（ストラクト）とは",
            "content": "# 簡単（かんたん）にクラスを作る\\\\\n\\\\\n**Struct（ストラクト）** は、**データだけを持つ簡易的（かんいてき）なクラス** を作れます。\\\\\n\\\\\n**身近（みぢか）な例（れい）：**\\\\\n- 普通のクラス = 部屋（へや）を一から設計して建てる\\\\\n- Struct = 「〇〇を入れる場所」だけ決めた収納（しゅうのう）ボックス\\\\\n\\\\\n**いつ使う？**\\\\\n- データをまとめて持ちたいだけのとき\\\\\n- クラスを書くほどでもない簡単なデータ構造（こうぞう）"
          },
          {
            "title": "Struct の使い方",
            "content": "# Struct.new で簡単作成\\\\\n\\\\\n**コード例：**\\\\\n```ruby\\\\\nPoint = Struct.new(:x, :y)\\\\\np = Point.new(10, 20)\\\\\nputs p.x  # => 10\\\\\nputs p.y  # => 20\\\\\n```\\\\\n\\\\\n**何をしているの？**\\\\\n1. `Struct.new(:x, :y)` → x と y という属性（ぞくせい）を持つクラスを作る\\\\\n2. `Point` という名前で保存\\\\\n3. `Point.new(10, 20)` → x=10, y=20 のオブジェクトを作る\\\\\n4. `.x` や `.y` でデータにアクセス\\\\\n\\\\\n**普通のクラスで書くと：**\\\\\n```ruby\\\\\nclass Point\\\\\n  attr_accessor :x, :y\\\\\n  def initialize(x, y)\\\\\n    @x = x\\\\\n    @y = y\\\\\n  end\\\\\nend\\\\\n```\\\\\n\\\\\nStructを使えば **1行で同じことができます！**"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# Structで簡易クラス、name, ageの順で属性名\\\\\nPerson = Struct.new(:name, :age)",
        "holeyCode": "# Structで簡易クラス、name, ageの順で属性名\\\\\nPerson = Struct.new(:name, :___)",
        "correctLines": [
          "# Structで簡易クラス、name, ageの順で属性名",
          "Person = Struct.new(:name, :age)"
        ],
        "lineHints": [
          null,
          "lineNumber"
        ],
        "candidates": {
          "1": [
            "Struct",
            "Class",
            "Object",
            "Data"
          ],
          "others": [
            "name",
            "age"
          ]
        },
        "testCases": [
          {
            "input": "Person.new('アリス', 30).name",
            "expected_output": "Alice"
          }
        ]
      },
    {
        "title": "tapメソッド",
        "description": "メソッドチェーンのデバッグに便利なtapを学びましょう。",
        "difficulty": "hard",
        "orderIndex": 10,
        "tutorialSlides": [
          {
            "title": "tap（タップ）とは",
            "content": "# 処理（しょり）しつつ自分を返す\\\\\n\\\\\n**tap（タップ）** は、ブロックを実行した後、**元のオブジェクト自身を返す** メソッドです。\\\\\n\\\\\n**身近（みぢか）な例（れい）：**\\\\\n- お弁当箱（べんとうばこ）に「おかずを入れる」（処理）\\\\\n- でも最後は「お弁当箱」が手元に返ってくる\\\\\n\\\\\n**いつ使う？**\\\\\n- メソッドチェーン（連続呼び出し）の途中（とちゅう）でデバッグしたいとき\\\\\n- オブジェクトを操作（そうさ）しつつ、そのオブジェクトを返したいとき"
          },
          {
            "title": "tap の使い方",
            "content": "# ブロック実行後、自分を返す\\\\\n\\\\\n**コード例：**\\\\\n```ruby\\\\\n[1, 2].tap { |arr| arr << 3 }\\\\\n# => [1, 2, 3]\\\\\n```\\\\\n\\\\\n**何が起こるの？**\\\\\n1. `[1, 2]` という配列がある\\\\\n2. `.tap` でブロックに配列を渡す\\\\\n3. `arr << 3` で3を追加（ついか）\\\\\n4. 配列 `[1, 2, 3]` が返される\\\\\n\\\\\n**デバッグに便利：**\\\\\n```ruby\\\\\nresult = [1, 2, 3]\\\\\n  .map { |n| n * 2 }\\\\\n  .tap { |arr| puts \"変換後: #{arr}\" }  # 途中経過を確認\\\\\n  .select { |n| n > 3 }\\\\\n```\\\\\n\\\\\nメソッドチェーンを止めずに、途中の値を確認できます。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# tapで自身を返す、pushで要素追加\\\\\nresult = [1, 2, 3].tap { |arr| arr.push(4) }",
        "holeyCode": "# tapで自身を返す、pushで要素追加\\\\\nresult = [___, 2, 3].tap { |arr| arr.push(4) }",
        "correctLines": [
          "# tapで自身を返す、pushで要素追加",
          "result = [1, 2, 3].tap { |arr| arr.push(4) }"
        ],
        "lineHints": [
          null,
          "lineNumber"
        ],
        "candidates": {
          "1": [
            "tap",
            "then",
            "yield_self",
            "itself"
          ],
          "others": ["push", "1"]
        },
        "testCases": [
          {
            "input": "result",
            "expected_output": "[1, 2, 3, 4]"
          }
        ]
      }
  ]
};

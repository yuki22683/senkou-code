export const ruby3Data = {
  "language": "ruby",
  "lessonId": "ruby-3",
  "lessonTitle": "Ruby III - メタプログラミングと関数型スタイル",
  "lessonDescription": "Rubyの高度な機能を学びます。ブロック、Proc、ラムダ、メタプログラミングなどRubyの真髄を身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "tutorialSlides": [
    {
      "title": "yieldとブロック",
      "content": "`yield` でメソッドに渡されたブロックを実行できます。\\n\\n```ruby\\ndef twice\\n  yield\\n  yield\\nend\\n\\ntwice { puts 'こんにちは' }\\n```\\n\\n=> こんにちは\\n\\n=> こんにちは\\n\\n`yield` はブロックを呼び出す特別なキーワードです。"
    },
    {
      "title": "Procとラムダ",
      "content": "ブロックをオブジェクトとして保存できます。\\n\\n```ruby\\n# Proc\\nsquare = Proc.new { |x| x ** 2 }\\nputs square.call(5)\\n\\n# ラムダ（引数チェックあり）\\ncube = ->(x) { x ** 3 }\\nputs cube.call(3) \\n```\\n\\n=> 25\\n\\n=> 27\\n\\n`->` はラムダを作る記法で、`lambda` と同じです。"
    },
    {
      "title": "シンボルとProc変換",
      "content": "`&:メソッド名` でシンボルをProcに変換できます。\\n\\n```ruby\\nwords = ['ruby', 'python', 'go']\\n\\n# 通常の書き方\\nresult = words.map { |w| w.upcase }\\n\\n# &:を使った省略形\\nresult = words.map(&:upcase)\\nputs result\\n```\\n\\n=> [\"RUBY\", \"PYTHON\", \"GO\"]\\n\\n各要素に対してそのメソッドを呼び出します。"
    },
    {
      "title": "reduceメソッド",
      "content": "`reduce` で配列を1つの値にまとめます。\\n\\n```ruby\\nnums = [1, 2, 3, 4, 5]\\n\\n# 合計を計算\\nsum = nums.reduce(0) { |acc, n| acc + n }\\nputs sum\\n\\n# 積を計算\\nproduct = nums.reduce(1) { |acc, n| acc * n }\\nputs product\\n```\\n\\n=> 15\\n\\n=> 120\\n\\n`acc` は累積値、`n` は各要素です。"
    },
    {
      "title": "スプラット演算子",
      "content": "`*` で可変長引数を受け取れます。\\n\\n```ruby\\ndef sum_all(*numbers)\\n  numbers.reduce(0) { |acc, n| acc + n }\\nend\\n\\nputs sum_all(1, 2, 3)  \\nputs sum_all(1, 2, 3, 4)\\n```\\n\\n=> 6\\n\\n=> 10\\n\\n`*numbers` で任意の数の引数を配列として受け取ります。"
    },
    {
      "title": "method_missing",
      "content": "`method_missing` で未定義メソッドの呼び出しを捕捉できます。\\n\\n```ruby\\nclass FlexibleClass\\n  def method_missing(name, *args)\\n    \"Unknown: #{name}\"\\n  end\\nend\\n\\nobj = FlexibleClass.new\\nputs obj.hello \\nputs obj.goodbye\\n```\\n\\n=> Unknown: hello\\n\\n=> Unknown: goodbye\\n\\nメタプログラミングの基礎となる強力な機能です。"
    }
  ],
  "exercises": [
    {
      "title": "yieldとブロック",
      "description": "yield（イールド）について学びます",
      "tutorialSlides": [
        {
          "title": "yield（イールド）とは",
          "content": "# メソッドにブロックを渡して実行\\n\\n**yield（イールド）** は、メソッドに渡されたブロックを **その場所で実行する** キーワードです。\\n\\n**身近な例：**\\n- メソッド = 「〇〇をやってね」という指示を待っている人\\n- ブロック = 具体的な「やること」リスト\\n- yield = 「さあ、渡された指示を今やって！」という合図\\n\\nyield を使うと、メソッドを呼ぶときに **やることを自由に変えられる** のが便利です。"
        },
        {
          "title": "yield の使い方",
          "content": "# ブロックを実行する\\n\\n**コード例：**\\n```ruby\\ndef greet\\n  yield\\nend\\n\\ngreet { puts 'こんにちは' }\\n```\\n\\n=> こんにちは\\n\\n**何が起こるの？**\\n1. `greet` メソッドを呼ぶ\\n2. `{ puts 'こんにちは' }` というブロックを渡す\\n3. メソッド内の `yield` に到達\\n4. 渡されたブロックが実行される\\n5. 「こんにちは」と表示される\\n\\n**ポイント：**\\n- ブロックの内容を変えれば、同じメソッドで違う処理ができる\\n- `yield` は何回でも呼べる（その度にブロックが実行される）"
        }
      ],
      "correctCode": "# defでtwiceメソッドを定義\\ndef twice\\n  # yieldでブロックを実行\\n  yield\\n  # yieldでブロックを実行\\n  yield\\n# endで終了\\nend",
      "holeyCode": "# defでtwiceメソッドを定義\\ndef ___\\n  # yieldでブロックを実行\\n  ___\\n  # yieldでブロックを実行\\n  ___\\n# endで終了\\n___",
      "correctLines": [
          "# defでtwiceメソッドを定義",
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
          "def でメソッドを定義します。",
          null,
          "yield でブロックを呼び出します。",
          null,
          "yield でブロックを呼び出します。",
          null,
          "ブロックを終了する。"
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
          "others": ["def", "end", "twice", "twice", "yield"]
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
      "description": "Proc（プロック）について学びます",
      "tutorialSlides": [
        {
          "title": "Proc（プロック）とは",
          "content": "# ブロックを「モノ」として保存\\n\\n**Proc（プロック）** は、ブロック（処理のかたまり）を **オブジェクト** にしたものです。\\n\\n**身近な例：**\\n- ブロック = 「やること」を口で言う（その場かぎり）\\n- Proc = 「やること」をメモに書いて保存する（あとで何回でも見られる）\\n\\n**Procの便利なところ：**\\n- 変数に入れておける\\n- 他のメソッドに渡せる\\n- あとで何回でも呼び出せる"
        },
        {
          "title": "Proc の使い方",
          "content": "# Proc.new で作成\\n\\n**コード例：**\\n```ruby\\nmy_proc = Proc.new { puts 'Hello' }\\nmy_proc.call\\n```\\n\\n=> Hello\\n\\n**何をしているの？**\\n1. `Proc.new { puts 'Hello' }` → 「Hello と表示する」というProcを作る\\n2. `my_proc` という変数に入れる\\n3. `my_proc.call` → Procを実行する\\n4. 「Hello」と表示される\\n\\n**引数も渡せる：**\\n```ruby\\ndoubler = Proc.new { |x| x * 2 }\\nputs doubler.call(5)\\n```\\n\\n=> 10\\n\\n`|x|` の部分で、渡された値を受け取ります。"
        }
      ],
      "correctCode": "# Procでブロックをオブジェクト化、**で累乗\\nsquarer = Proc.new { |x| x ** 2 }",
      "holeyCode": "# Procでブロックをオブジェクト化、**で累乗\\n___ = ___.new { |___| ___ ___ ___ }",
      "correctLines": [
          "# Procでブロックをオブジェクト化、**で累乗",
          "squarer = Proc.new { |x| x ** 2 }"
        ],
      "lineHints": [
          null,
          "Procでブロックをオブジェクト化し、xの2乗を計算します。"
        ],
        "candidates": {
          "1": [
            "Proc",
            "Block",
            "Lambda",
            "Function"
          ],
          "others": [
            "squarer",
            "Proc",
            "x",
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
      "description": "名前のない簡潔な関数を作る方法を学びます",
      "tutorialSlides": [
        {
          "title": "ラムダとは",
          "content": "# Procの「厳密バージョン」\\n\\n**ラムダ** は Proc の一種ですが、より **厳格なルール** を持っています。\\n\\n**Proc との違い：**\\n\\n| 比較 | Proc | ラムダ |\\n|-------|------|--------|\\n| 引数の数 | 足りなくてもOK | 必ず正しい数が必要 |\\n| return | メソッド全体から抜ける | ラムダ内だけから抜ける |\\n\\n**いつラムダを使う？**\\n- 引数の数を間違えたときにエラーにしたい\\n- より「関数らしい」動きをさせたい"
        },
        {
          "title": "ラムダの使い方",
          "content": "# -> で簡単に作れる\\n\\n**コード例：**\\n```ruby\\nmy_lambda = ->(x) { x * 2 }\\nmy_lambda.call(5)\\n```\\n\\n=> 10\\n\\n**何をしているの？**\\n1. `->(x) { x * 2 }` → 「xを2倍にする」というラムダを作る\\n2. `my_lambda` という変数に入れる\\n3. `my_lambda.call(5)` → 5を渡して実行\\n4. 結果は10\\n\\n**書き方は2種類：**\\n```ruby\\n# アロー記法（->）\\nadd = ->(a, b) { a + b }\\n\\n# lambda キーワード\\nadd = lambda { |a, b| a + b }\\n```\\n\\nどちらも同じ動きですが、`->` の方が短く書けます。"
        }
      ],
      "correctCode": "# ->でラムダを定義、**で累乗\\ncube = ->(x) { x ** 3 }",
      "holeyCode": "# ->でラムダを定義、**で累乗\\n___ = ___(___) { ___ ___ ___ }",
      "correctLines": [
          "# ->でラムダを定義、**で累乗",
          "cube = ->(x) { x ** 3 }"
        ],
      "lineHints": [
          null,
          "->でラムダを定義し、xの3乗を計算します。"
        ],
        "candidates": {
          "1": [
            "->",
            "=>",
            "lambda",
            "proc"
          ],
          "others": ["cube", "->", "x", "x", "**", "3"]
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
      "description": "`&:`について学びます",
      "tutorialSlides": [
        {
          "title": "&:（アンパサンドコロン）記法とは",
          "content": "# シンボルを Proc に変換する魔法\\n\\n**`&:`** を使うと、シンボル（メソッド名）を **Proc に変換** してブロックとして渡せます。\\n\\n**身近な例：**\\n- 普通は「各要素を文字列にして」と細かく書く\\n- `&:to_s` なら「文字列化よろしく！」と一言で済む\\n\\nRubyらしい **短くてエレガント** な書き方です。"
        },
        {
          "title": "&: の使い方",
          "content": "# 短くて読みやすいコード\\n\\n**コード例：**\\n```ruby\\n[1, 2, 3].map(&:to_s)\\n```\\n\\n=> ['1', '2', '3']\\n\\n**これは次のコードと同じ意味：**\\n```ruby\\n[1, 2, 3].map { |n| n.to_s }\\n```\\n\\n**何が起こるの？**\\n1. `:to_s` はシンボル（メソッド名）\\n2. `&` をつけると「このメソッドを各要素に適用して」という意味になる\\n3. 各数字に対して `to_s`（文字列に変換）が呼ばれる\\n4. 結果は `['1', '2', '3']`\\n\\n**よく使う例：**\\n- `&:upcase` → 大文字に\\n- `&:downcase` → 小文字に\\n- `&:to_i` → 整数に変換"
        }
      ],
      "correctCode": "# 配列の各要素を大文字にしてresultに代入\\nresult = ['ruby', 'python', 'go'].map(&:upcase)",
      "holeyCode": "# 配列の各要素を大文字にしてresultに代入\\n___ = [___, ___, ___].___(___:___)",
      "correctLines": [
          "# 配列の各要素を大文字にしてresultに代入",
          "result = ['ruby', 'python', 'go'].map(&:upcase)"
        ],
      "lineHints": [
          null,
          "mapと&:upcaseで配列の各要素を大文字化します。"
        ],
        "candidates": {
          "1": [
            "map",
            "each",
            "select",
            "filter"
          ],
          "others": [
            "result",
            "'ruby'",
            "'python'",
            "'go'",
            "map",
            "&",
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
      "description": "配列の要素を集約して1つの値にする方法を学びます",
      "tutorialSlides": [
        {
          "title": "reduce（リデュース）とは",
          "content": "# 配列を「1つの値」にまとめる\\n\\n**reduce（リデュース）** は、配列の全要素を **1つの値** にまとめるメソッドです。「畳み込み」とも呼ばれます。\\n\\n**身近な例：**\\n- 買い物リストの全商品の **合計金額** を出す\\n- テストの点数を全部 **足して** 平均を計算する\\n\\n複数のデータを「まとめて」1つの結果を出したいときに使います。"
        },
        {
          "title": "reduce の使い方",
          "content": "# 順番に計算してまとめる\\n\\n**コード例：**\\n```ruby\\n[1, 2, 3].reduce(0) { |acc, n| acc + n }\\n```\\n\\n=> 6\\n\\n**何が起こるの？**\\n1. `(0)` → 計算の出発点を0にする\\n2. 1回目：`acc=0, n=1` → `0 + 1 = 1`（accが1になる）\\n3. 2回目：`acc=1, n=2` → `1 + 2 = 3`（accが3になる）\\n4. 3回目：`acc=3, n=3` → `3 + 3 = 6`（accが6になる）\\n5. 最終結果：6\\n\\n**ブロック変数の意味：**\\n- `acc`（アキュムレータ）→ 「これまでの計算結果」を覚える\\n- `n` → 配列から取り出した「今の要素」\\n\\n**injectという別名もあります。**"
        }
      ],
      "correctCode": "# reduceで畳み込み、+で加算\\nsum = [1, 2, 3, 4, 5].reduce(0) { |acc, n| acc + n }",
      "holeyCode": "# reduceで畳み込み、+で加算\\n___ = [___, ___, ___, ___, ___].___(___) { |___, ___| ___ ___ ___ }",
      "correctLines": [
          "# reduceで畳み込み、+で加算",
          "sum = [1, 2, 3, 4, 5].reduce(0) { |acc, n| acc + n }"
        ],
      "lineHints": [
          null,
          "reduceで配列を初期値0から畳み込み、acc+nで累積します。"
        ],
        "candidates": {
          "1": [
            "reduce",
            "fold",
            "inject",
            "sum"
          ],
          "others": ["sum", "1", "2", "3", "4", "5", "reduce", "0", "acc", "n", "acc", "+", "n"]
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
      "description": "条件に合う要素だけを抽出する方法を学びます",
      "tutorialSlides": [
        {
          "title": "select と reject",
          "content": "# 条件で要素を選ぶ\\n\\n**select（セレクト）** と **reject（リジェクト）** は、条件に合う要素を選ぶメソッドです。\\n\\n**2つの違い：**\\n- `select` → 条件に **合う** ものを集める（選ぶ）\\n- `reject` → 条件に **合わない** ものを集める（除く）\\n\\n**身近な例：**\\n- select = 「赤いもの」だけ選ぶ\\n- reject = 「赤いもの」以外を選ぶ（赤を除く）"
        },
        {
          "title": "select と reject の使い方",
          "content": "# 条件でフィルタリング\\n\\n**select の例：**\\n```ruby\\n[1, 2, 3, 4, 5].select { |n| n > 3 }\\n```\\n\\n=> [4, 5]（3より大きいものを選ぶ）\\n\\n**reject の例：**\\n```ruby\\n[1, 2, 3, 4, 5].reject { |n| n > 3 }\\n```\\n\\n=> [1, 2, 3]（3より大きいものを除く）\\n\\n**偶数・奇数を選ぶ：**\\n```ruby\\n# 偶数だけ選ぶ\\n[1, 2, 3, 4, 5, 6].select { |n| n.even? }\\n```\\n\\n=> [2, 4, 6]\\n\\n```\\n# 奇数だけ選ぶ（偶数を除く）\\n[1, 2, 3, 4, 5, 6].reject { |n| n.even? }\\n```\\n\\n=> [1, 3, 5]\\n\\n`.even?` は「偶数か？」を確認するメソッドです。"
        }
      ],
      "correctCode": "# selectでフィルタ、evenで偶数判定\\nevens = [1, 2, 3, 4, 5, 6].select { |n| n.even? }",
      "holeyCode": "# selectでフィルタ、evenで偶数判定\\n___ = [___, ___, ___, ___, ___, ___].___ { |___| ___.___ }",
      "correctLines": [
          "# selectでフィルタ、evenで偶数判定",
          "evens = [1, 2, 3, 4, 5, 6].select { |n| n.even? }"
        ],
      "lineHints": [
          null,
          "selectで配列から偶数（even?）の要素を抽出します。"
        ],
        "candidates": {
          "1": [
            "select",
            "filter",
            "find_all",
            "reject"
          ],
          "others": ["evens", "1", "2", "3", "4", "5", "6", "select", "n", "n", "even?"]
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
      "description": "スプラット演算子の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "スプラット演算子（*）とは",
          "content": "# いくつでも引数を受け取れる\\n\\n**スプラット演算子（*）** を使うと、**いくつでも引数を受け取れる** メソッドが作れます。\\n\\n**身近な例：**\\n- 普通のメソッド：「2つの数を足す」（数が決まっている）\\n- スプラット：「渡された数を全部足す」（何個でもOK）\\n\\n**「可変長引数」** と呼ばれ、引数の数が決まっていないときに便利です。"
        },
        {
          "title": "スプラット演算子の使い方",
          "content": "# * で複数の引数を受け取る\\n\\n**コード例：**\\n```ruby\\ndef greet(*names)\\n  names.each { |name| puts name }\\nend\\n\\ngreet('Alice', 'Bob', 'Carol')\\n```\\n\\n=> Alice\\n\\n=> Bob\\n\\n=> Carol\\n\\n**何が起こるの？**\\n1. `*names` → 渡された引数をすべて配列にまとめる\\n2. 3つの名前を渡すと `names = ['Alice', 'Bob', 'Carol']` になる\\n3. `.each` で1つずつ表示\\n\\n**配列を展開するときにも使える：**\\n```ruby\\nnums = [1, 2, 3]\\nsome_method(*nums)  # some_method(1, 2, 3) と同じ\\n```\\n\\n`*` は配列を「バラバラ」にする魔法です。"
        }
      ],
      "correctCode": "# *で可変長引数を受け取る\\ndef sum_all(*numbers)\\n  # reduceで畳み込み\\n  numbers.reduce(0) { |acc, n| acc + n }\\n# endで終了\\nend",
      "holeyCode": "# *で可変長引数を受け取る\\n___ ___(___)\\n  # reduceで畳み込み\\n  ___.___(___) { |___, ___| ___ ___ ___ }\\n# endで終了\\n___",
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
          "*numbersで可変長引数を受け取るsum_allメソッドを定義します。",
          null,
          "reduceで初期値0から畳み込み、acc+nで累積します。",
          null,
          "ブロックを終了します。"
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
          "others": ["def", "sum_all", "*numbers", "numbers", "reduce", "0", "acc", "n", "acc", "+", "n", "end"]
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
      "description": "method_missing（メソッドミッシング）について学びます",
      "tutorialSlides": [
        {
          "title": "method_missing とは",
          "content": "# 存在しないメソッドをキャッチ\\n\\n**method_missing（メソッドミッシング）** は、**存在しないメソッドが呼ばれたとき** に自動で実行される特別なメソッドです。\\n\\n**身近な例：**\\n- 受付で「〇〇さんをお願いします」と言う\\n- その人がいなければ「〇〇さんはいません」と答える\\n- method_missing = 「いない人を呼ばれたときの対応」\\n\\n**メタプログラミング** の基本で、Rubyの強力な機能です。"
        },
        {
          "title": "method_missing の使い方",
          "content": "# 存在しないメソッドを捕まえる\\n\\n**コード例：**\\n```ruby\\nclass MyClass\\n  def method_missing(name, *args)\\n    puts \"#{name} が呼ばれました\"\\n  end\\nend\\n\\nobj = MyClass.new\\nobj.hello\\nobj.foo \\n```\\n\\n=> hello が呼ばれました\\n\\n=> foo が呼ばれました\\n\\n**何が起こるの？**\\n1. `obj.hello` を呼ぶ\\n2. `hello` メソッドは定義されていない\\n3. `method_missing` が代わりに実行される\\n4. `name` には `:hello` が入る\\n\\n**引数の意味：**\\n- `name` → 呼ばれたメソッド名（シンボル）\\n- `*args` → 渡された引数\\n\\n**注意：** 便利ですが、使いすぎるとデバッグが難しくなります。"
        }
      ],
      "correctCode": "# classでFlexibleClassクラスを定義\\nclass FlexibleClass\\n  # method_missingで未定義メソッドを捕捉\\n  def method_missing(name, *args)\\n    # nameでメソッド名を参照\\n    \"Unknown method: #{name}\"\\n  # endで終了\\n  end\\n# endで終了\\nend",
      "holeyCode": "# classでFlexibleClassクラスを定義\\n___ ___\\n  # method_missingで未定義メソッドを捕捉\\n  ___ ___(___, ___)\\n    # nameでメソッド名を参照\\n    ___\\n  # endで終了\\n  ___\\n# endで終了\\n___",
      "correctLines": [
          "# classでFlexibleClassクラスを定義",
          "class FlexibleClass",
          "  # method_missingで未定義メソッドを捕捉",
          "  def method_missing(name, *args)",
          "    # nameでメソッド名を参照",
          "    \"Unknown method: #{name}\"",
          "  # endで終了",
          "  end",
          "# endで終了",
          "end"
        ],
      "lineHints": [
          null,
          "classでFlexibleClassを定義します。",
          null,
          "method_missingで未定義メソッドを捕捉し、*argsで可変長引数を受け取ります。",
          null,
          "未定義メソッド名を含むエラーメッセージを返します。",
          null,
          "メソッドを終了します。",
          null,
          "クラスを終了します。"
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
          "others": ["class", "FlexibleClass", "def", "method_missing", "name", "*args", "\"Unknown method: #{name}\"", "end", "end"]
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
      "description": "Struct（ストラクト）について学びます",
      "tutorialSlides": [
        {
          "title": "Struct（ストラクト）とは",
          "content": "# 簡単にクラスを作る\\n\\n**Struct（ストラクト）** は、**データだけを持つ簡易的なクラス** を作れます。\\n\\n**身近な例：**\\n- 普通のクラス = 部屋を一から設計して建てる\\n- Struct = 「〇〇を入れる場所」だけ決めた収納ボックス\\n\\n**いつ使う？**\\n- データをまとめて持ちたいだけのとき\\n- クラスを書くほどでもない簡単なデータ構造"
        },
        {
          "title": "Struct の使い方",
          "content": "# Struct.new で簡単作成\\n\\n**コード例：**\\n```ruby\\nPoint = Struct.new(:x, :y)\\np = Point.new(10, 20)\\nputs p.x\\nputs p.y\\n```\\n\\n=> 10\\n\\n=> 20\\n\\n**何をしているの？**\\n1. `Struct.new(:x, :y)` → x と y という属性を持つクラスを作る\\n2. `Point` という名前で保存\\n3. `Point.new(10, 20)` → x=10, y=20 のオブジェクトを作る\\n4. `.x` や `.y` でデータにアクセス\\n\\n**普通のクラスで書くと：**\\n```ruby\\nclass Point\\n  attr_accessor :x, :y\\n  def initialize(x, y)\\n    @x = x\\n    @y = y\\n  end\\nend\\n```\\n\\nStructを使えば **1行で同じことができます！**"
        }
      ],
      "correctCode": "# Structで簡易クラス、name, ageの順で属性名\\nPerson = Struct.new(:name, :age)",
      "holeyCode": "# Structで簡易クラス、name, ageの順で属性名\\n___ = ___.___(:___, :___)",
      "correctLines": [
          "# Structで簡易クラス、name, ageの順で属性名",
          "Person = Struct.new(:name, :age)"
        ],
      "lineHints": [
          null,
          "Struct.newで:nameと:ageを持つPerson構造体を作成します。"
        ],
        "candidates": {
          "1": [
            "Struct",
            "Class",
            "Object",
            "Data"
          ],
          "others": [
            "Person",
            "Struct",
            "new",
            "name",
            "age"
          ]
        },
        "testCases": [
          {
            "input": "Person.new('アリス', 30).name",
            "expected_output": "アリス"
          }
        ]
      },
    {
      "title": "tapメソッド",
      "description": "tap（タップ）について学びます",
      "tutorialSlides": [
        {
          "title": "tap（タップ）とは",
          "content": "# 処理しつつ自分を返す\\n\\n**tap（タップ）** は、ブロックを実行した後、**元のオブジェクト自身を返す** メソッドです。\\n\\n**身近な例：**\\n- お弁当箱に「おかずを入れる」（処理）\\n- でも最後は「お弁当箱」が手元に返ってくる\\n\\n**いつ使う？**\\n- メソッドチェーン（連続呼び出し）の途中でデバッグしたいとき\\n- オブジェクトを操作しつつ、そのオブジェクトを返したいとき"
        },
        {
          "title": "tap の使い方",
          "content": "# ブロック実行後、自分を返す\\n\\n**コード例：**\\n```ruby\\n[1, 2].tap { |arr| arr << 3 }\\n```\\n\\n=> [1, 2, 3]\\n\\n**何が起こるの？**\\n1. `[1, 2]` という配列がある\\n2. `.tap` でブロックに配列を渡す\\n3. `arr << 3` で3を追加\\n4. 配列 `[1, 2, 3]` が返される\\n\\n**デバッグに便利：**\\n```ruby\\nresult = [1, 2, 3]\\n  .map { |n| n * 2 }\\n  .tap { |arr| puts \"変換後: #{arr}\" }  # 途中経過を確認\\n  .select { |n| n > 3 }\\n```\\n\\nメソッドチェーンを止めずに、途中の値を確認できます。"
        }
      ],
      "correctCode": "# tapで自身を返す、pushで要素追加\\nresult = [1, 2, 3].tap { |arr| arr.push(4) }",
      "holeyCode": "# tapで自身を返す、pushで要素追加\\n___ = [___, ___, ___].___ { |___| ___.___(___) }",
      "correctLines": [
          "# tapで自身を返す、pushで要素追加",
          "result = [1, 2, 3].tap { |arr| arr.push(4) }"
        ],
      "lineHints": [
          null,
          "tapで自身を返しながらpush(4)で要素を追加します。"
        ],
        "candidates": {
          "1": [
            "tap",
            "then",
            "yield_self",
            "itself"
          ],
          "others": ["result", "1", "2", "3", "tap", "arr", "arr", "push", "4"]
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

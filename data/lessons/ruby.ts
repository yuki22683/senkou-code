export const rubyData = {
  "language": "ruby",
  "lessonId": "ruby-1",
  "lessonTitle": "Ruby (ルビー) に挑戦！",
  "lessonDescription": "日本で生まれたプログラミング言語「Ruby（ルビー）」のきほんを学びましょう。人間にとって読みやすく、楽しくプログラムを書けるのが特徴です。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面に文字を出してみましょう",
      "description": "Rubyを使って画面に「こんにちは」と表示させてみましょう。puts（プッツ）という関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Ruby（ルビー）とは？",
          "image": "/illustrations/languages/ruby.png",
          "content": "# 楽しさを大事（だいじ）にするプログラミング言語（げんご）\n\nRuby（ルビー）は、**まつもとゆきひろ**さんという日本人（にほんじん）が作ったプログラミング言語です。\n\n宝石（ほうせき）の「ルビー」から名前がつけられました。\n\n**Rubyの特徴（とくちょう）：**\n- 人間が読みやすく、楽しく書ける\n- 世界中（せかいじゅう）で大人気（だいにんき）\n- TwitterやCookpadなど有名（ゆうめい）なサービスで使われている"
        },
        {
          "title": "puts（プッツ）を使いましょう",
          "image": "/illustrations/common/monitor.png",
          "content": "# 画面（がめん）に文字を表示（ひょうじ）する方法（ほうほう）\n\n**puts（プッツ）** は「put string（プット ストリング）」の略（りゃく）で、「文字を置く」という意味（いみ）です。\n\n画面にメッセージを出したいときに使います。\n\n**書き方：**\n```ruby\nputs 'ヤッホー！'\n```\n\n**ポイント：**\n- `puts` のあとに半角（はんかく）スペースを入れる\n- 表示したい文字は `'　'`（シングルクォート）で囲（かこ）む\n\n実行（じっこう）すると、画面に「ヤッホー！」と表示されます。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 「Hello, Ruby!」と出力する関数\nputs 'Hello, Ruby!'",
      "holeyCode": "# 「Hello, Ruby!」と出力する関数\nputs '___'",
      "correctLines": [
        "# 「Hello, Ruby!」と出力する関数",
        "puts 'Hello, Ruby!'"
      ],
      "lineHints": [null, "文字列を出力し、最後に改行を加えます。"],
      "candidates": {
        "strings": [
          "Hello, Ruby!"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, Ruby!\n"
        }
      ]
    },
    {
      "title": "便利な「はこ」変数（へんすう）",
      "description": "データに名前をつけて保存できる「変数（へんすう）」を使ってみましょう。nameという名前の「はこ」に 'Ruby' という文字を入れてみます。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "変数（へんすう）とは？",
          "image": "/illustrations/common/box.png",
          "content": "# データを保存（ほぞん）する「はこ」\n\n変数（へんすう）は、数字や文字をしまっておける **「はこ」** のようなものです。\n\n**身近（みぢか）な例（れい）で考えてみよう：**\n- 筆箱（ふでばこ）に「えんぴつ」を入れるように\n- 変数という「はこ」に「データ」を入れておける\n\n一度（いちど）しまったデータは、あとで何度（なんど）でも取り出して使えます。"
        },
        {
          "title": "はこに中身を入れる方法",
          "image": "/illustrations/common/box.png",
          "content": "# =（イコール）の使い方\n\nRubyでは **`=`（イコール）** を使って、はこ（変数）に値（あたい）を入れます。\n\nこれを **代入（だいにゅう）** と呼びます。\n\n**書き方：**\n```ruby\nfruit = 'りんご'\nputs fruit\n```\n\n**何をしているの？**\n1. `fruit` という名前のはこを用意（ようい）する\n2. そのはこに `'りんご'` という文字を入れる\n3. `puts fruit` で、はこの中身を画面に表示する\n\n**結果（けっか）：** りんご と表示されます"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# nameというはこに 'Ruby' を入れる\nname = 'Ruby'\n# はこの中身を画面に出す\nputs name",
      "holeyCode": "# nameというはこに 'Ruby' を入れる\nname = '___'\n# はこの中身を画面に出す\nputs ___",
      "correctLines": [
        "# nameというはこに 'Ruby' を入れる",
        "name = 'Ruby'",
        "# はこの中身を画面に出す",
        "puts name"
      ],
      "lineHints": [null, "変数に文字列データを代入（保存）します。", null, "変数名 name を入力します。"],
      "candidates": {
        "variables": ["name"],
        "strings": ["Ruby"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Ruby\n"
        }
      ]
    },
    {
      "title": "コンピュータで計算しましょう",
      "description": "Rubyを使って、たし算をしてみましょう。x というはこと y というはこの中身をたして、答えを出してみます。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "算数とプログラミング",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 計算はコンピュータの得意技（とくいわざ）\n\nコンピュータの一番（いちばん）の得意（とくい）なことは **「正確（せいかく）で速い計算」** です。\n\n**すごいところ：**\n- どんなに大きな数字でも間違（まちが）えない\n- 人間が何時間もかかる計算を一瞬（いっしゅん）で解（と）いてくれる\n\nプログラミングで「計算して！」と指示（しじ）を出すだけで、コンピュータが代（か）わりにやってくれます。"
        },
        {
          "title": "計算の記号（きごう）",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 四則演算（しそくえんざん）\n\nRubyでは、算数と同じような記号を使って計算します。\n\n**演算子（えんざんし）の一覧（いちらん）：**\n- **+** : たし算（例：5 + 3 = 8）\n- **-** : ひき算（例：10 - 4 = 6）\n- **\\*** : かけ算（例：3 * 4 = 12）\n- **/** : わり算（例：20 / 5 = 4）\n\n**コード例：**\n```ruby\nputs 10 + 5  # => 15 と表示される\n```\n\n`#` より右に書いたものは **コメント** といって、メモ書きになります。プログラムには影響（えいきょう）しません。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# xというはこに 10 を入れる\nx = 10\n# yというはこに 5 を入れる\ny = 5\n# x と y をたした答えを出す\nputs x + y",
      "holeyCode": "# xというはこに 10 を入れる\nx = ___\n# yというはこに 5 を入れる\ny = ___\n# x と y をたした答えを出す\nputs x ___ y",
      "correctLines": [
        "# xというはこに 10 を入れる",
        "x = 10",
        "# yというはこに 5 を入れる",
        "y = 5",
        "# x と y をたした答えを出す",
        ["puts x + y", "puts y + x"]
      ],
      "lineHints": [null, "変数に数値を代入（保存）します。", null, "変数に数値を代入（保存）します。", null, "たし算なので + を使います。", null],
      "candidates": {
        "numbers": ["10", "5"],
        "operators": ["+", "-", "*", "/"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "15\n"
        }
      ]
    },
    {
      "title": "剰余演算子（%）",
      "description": "割り算の「あまり」を求める「%」（パーセント）演算子を学びましょう。10を3で割ったあまりは1になります。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "あまりを求（もと）める",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 剰余（じょうよ）演算子（えんざんし）\n\n**`%`（パーセント）** を使うと、割（わ）り算の **あまり** を求められます。\n\n**身近（みぢか）な例（れい）で考えよう：**\n- 10個（こ）のあめを3人で分けると...\n- 1人3個ずつで、**1個あまる**\n- この「あまり」を計算するのが `%` です！\n\nあまりを求める計算を **剰余（じょうよ）** と呼びます。"
        },
        {
          "title": "% の使い方",
          "image": "/illustrations/common/robot_math.png",
          "content": "# あまりを計算してみよう\n\n**コード例：**\n```ruby\nputs 10 % 3  # => 1（10÷3=3あまり1）\nputs 8 % 2   # => 0（割り切れる）\n```\n\n**便利（べんり）な使い方：**\n- **偶数（ぐうすう）**：2で割ってあまりが0\n- **奇数（きすう）**：2で割ってあまりが1\n\n```ruby\nputs 6 % 2   # => 0（6は偶数）\nputs 7 % 2   # => 1（7は奇数）\n```\n\nゲームで「3回ごとにボーナス」といった処理（しょり）にも使えます。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 10 を 3 で割ったあまりを出力する\nputs 10 % 3",
      "holeyCode": "# 10 を 3 で割ったあまりを出力する\nputs 10 ___ 3",
      "correctLines": [
        "# 10 を 3 で割ったあまりを出力する",
        "puts 10 % 3"
      ],
      "lineHints": [null, "あまりを求める % 演算子を使います。"],
      "candidates": {
        "operators": ["%", "+", "-", "*", "/"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n"
        }
      ]
    },
    {
      "title": "累算代入演算子（+=、-=）",
      "description": "変数に値を足したり引いたりして、同じ変数に戻す便利な書き方を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "累算代入（るいさんだいにゅう）とは？",
          "image": "/illustrations/common/box.png",
          "content": "# 計算してそのまま代入（だいにゅう）\n\n**累算代入（るいさんだいにゅう）** は、「計算して、結果（けっか）を同じはこに戻（もど）す」便利（べんり）な書き方です。\n\n**身近（みぢか）な例（れい）：**\n- 貯金箱（ちょきんばこ）に100円入っている\n- さらに50円を追加（ついか）する\n- 貯金箱の中身は150円になる\n\n**`+=` を使うと：**\n```ruby\nx = 10\nx += 5  # x = x + 5 と同じ意味\nputs x  # => 15 と表示される\n```\n\n`x += 5` は「xに5を足して、結果をxに入れ直（なお）す」という意味です。"
        },
        {
          "title": "-= も使える",
          "image": "/illustrations/common/box.png",
          "content": "# 引き算バージョン\n\n`-=` を使えば引き算もできます。\n\n**コード例：**\n```ruby\nx = 10\nx -= 3  # x = x - 3 と同じ意味\nputs x  # => 7 と表示される\n```\n\n**他にもある演算子（えんざんし）：**\n- `*=` : かけ算して代入\n- `/=` : わり算して代入\n\n```ruby\nx = 6\nx *= 2  # x = x * 2 と同じ → 12になる\n```\n\nゲームのスコアを増（ふ）やしたり減（へ）らしたりするのに便利です。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# scoreに50を入れる\nscore = 50\n# 10点プラスする\nscore += 10\n# 結果を表示\nputs score",
      "holeyCode": "# scoreに50を入れる\nscore = ___\n# 10点プラスする\nscore ___ 10\n# 結果を表示\nputs score",
      "correctLines": [
        "# scoreに50を入れる",
        "score = 50",
        "# 10点プラスする",
        "score += 10",
        "# 結果を表示",
        "puts score"
      ],
      "lineHints": [null, "変数に数値を代入（保存）します。", null, "変数の値を計算して、その結果を同じ変数に再代入します。", null, null],
      "candidates": {
        "operators": ["+=", "-=", "*=", "/="],
        "numbers": ["50", "10"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "60\n"
        }
      ]
    },
    {
      "title": "文章の中に変数を入れましょう",
      "description": "文字列の中に変数の値を入れる「式展開」を学びましょう。#{} を使って変数の中身を文章に入れます。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "式展開（しきてんかい）とは？",
          "image": "/illustrations/common/fstring.png",
          "content": "# 文章と変数（へんすう）を組み合わせる\n\n文章の途中（とちゅう）に、変数の中身を入れたいときに使うのが **式展開（しきてんかい）** です。\n\n**身近（みぢか）な例（れい）：**\n- 「こんにちは、○○さん！」の○○を変えたい\n- 名前が入った変数を文章に組み込（こ）める\n\n**書き方のポイント：**\n- `#{　}` の中に変数名を入れる\n- 変数の中身が自動的（じどうてき）に文章に入る"
        },
        {
          "title": "式展開（しきてんかい）の書き方",
          "image": "/illustrations/common/fstring.png",
          "content": "# ダブルクォートで囲（かこ）む\n\n式展開を使うときは **ダブルクォート `\"　\"`** で文章を囲みます。\n\n**コード例：**\n```ruby\nage = 10\nputs \"私は#{age}歳です\"\n```\n\n**何が起こるの？**\n1. `age` という変数には `10` が入っている\n2. `#{age}` の部分が `10` に置（お）き換（か）わる\n3. 「私は10歳です」と表示される\n\n**注意（ちゅうい）：**\n- シングルクォート `' '` だと式展開できません\n- 必ずダブルクォート `\" \"` を使いましょう"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# ageというはこに 10 を入れる\nage = 10\n# 式展開を使ってメッセージを出す\nputs \"私は#{age}歳です\"",
      "holeyCode": "# ageというはこに 10 を入れる\nage = ___\n# 式展開を使ってメッセージを出す\nputs \"私は#{___}歳です\"",
      "correctLines": [
        "# ageというはこに 10 を入れる",
        "age = 10",
        "# 式展開を使ってメッセージを出す",
        "puts \"私は#{age}歳です\""
      ],
      "lineHints": [null, "変数に数値を代入（保存）します。", null, "変数名 age を #{} の中に入力します。"],
      "candidates": {
        "variables": ["age"],
        "numbers": ["10"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "私は10歳です\n"
        }
      ]
    },
    {
      "title": "たくさんのデータをまとめましょう「配列」",
      "description": "「配列」というものを使うと、たくさんのデータを一つの「長いはこ」にまとめて入れられます。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "配列（はいれつ）とは？",
          "image": "/illustrations/common/list.png",
          "content": "# データの行列（ぎょうれつ）\n\nたくさんのデータを順番（じゅんばん）に並（なら）べておきたいときに使うのが **配列（はいれつ）** です。\n\n**身近（みぢか）な例（れい）：**\n- ロッカーが横（よこ）に並んでいるイメージ\n- 1番目のロッカー、2番目のロッカー...とデータを入れる\n\n**書き方：**\n```ruby\nfruits = ['りんご', 'バナナ', 'みかん']\n```\n\n- `[　]`（角（かく）かっこ）で囲む\n- データは `,`（カンマ）で区切（くぎ）る"
        },
        {
          "title": "配列の番号は0から",
          "image": "/illustrations/common/list.png",
          "content": "# インデックス（番号）\n\nプログラミングでは、**最初（さいしょ）の番号は「0」から数（かぞ）えます**。これを **インデックス** と呼びます。\n\n**イメージしてみよう：**\n| 番号（インデックス） | 0番目 | 1番目 | 2番目 |\n| --- | --- | --- | --- |\n| 中身 | りんご | バナナ | みかん |\n\n**コード例：**\n```ruby\nfruits = ['りんご', 'バナナ', 'みかん']\nputs fruits[0]  # => りんご（1番目）\nputs fruits[1]  # => バナナ（2番目）\n```\n\n**大事（だいじ）なポイント：**\n- 1番目のデータは `[0]` で取り出す\n- 2番目のデータは `[1]` で取り出す"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# colorsという配列を作る\ncolors = ['赤', '青', '緑']\n# 2番目のデータ（インデックス1）を出す\nputs colors[1]",
      "holeyCode": "# colorsという配列を作る\ncolors = ['___', '___', '___']\n# 2番目のデータ（インデックス1）を出す\nputs colors[___]",
      "correctLines": [
        "# colorsという配列を作る",
        "colors = ['赤', '青', '緑']",
        "# 2番目のデータ（インデックス1）を出す",
        "puts colors[1]"
      ],
      "lineHints": [null, "赤、青、緑 の順で入力しましょう。", null, "2番目のデータのインデックスは 1 です。"],
      "candidates": {
        "strings": ["赤", "青", "緑"],
        "numbers": ["0", "1", "2"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "青\n"
        }
      ]
    },
    {
      "title": "「もし〜なら」で分ける if文",
      "description": "条件によって動きを変える if文を学びましょう。点数が80点より高いときだけ、メッセージを出すようにしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "条件分岐（じょうけんぶんき）とは？",
          "image": "/illustrations/common/if.png",
          "content": "# プログラムに判断（はんだん）させる\n\n状況（じょうきょう）によって動きを変（か）えることを **条件分岐（じょうけんぶんき）** と呼びます。\n\n**身近（みぢか）な例（れい）：**\n- **もし**雨が降（ふ）っていたら → かさを持っていく\n- **もし**テストで80点以上だったら → ごほうびをもらえる\n\nプログラムも同じように「もし〜なら、〜する」という判断ができます。"
        },
        {
          "title": "if の使い方",
          "image": "/illustrations/common/if.png",
          "content": "# もし〜なら\n\nRubyでは **`if`（イフ）** のあとに条件（じょうけん）を書きます。最後（さいご）に **`end`（エンド）** で閉（と）じます。\n\n**コード例：**\n```ruby\nif score > 80\n  puts '合格！'\nend\n```\n\n**何をしているの？**\n1. `if score > 80` → もしscoreが80より大きかったら\n2. `puts '合格！'` → 「合格！」と表示する\n3. `end` → if文（ぶん）の終わり\n\n**比較（ひかく）の記号：**\n- `>` : より大きい\n- `<` : より小さい\n- `>=` : 以上（いじょう）\n- `<=` : 以下（いか）\n- `==` : 等（ひと）しい"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# scoreに100を入れる\nscore = 100\n# もし80より大きかったら\nif score > 80\n  # メッセージを表示する\n  puts '合格！'\nend",
      "holeyCode": "# scoreに100を入れる\nscore = ___\n# もし80より大きかったら\n___ score > 80\n  # メッセージを表示する\n  puts '___'\nend",
      "correctLines": [
        "# scoreに100を入れる",
        "score = 100",
        "# もし80より大きかったら",
        "if score > 80",
        "  # メッセージを表示する",
        "  puts '合格！'",
        "end"
      ],
      "lineHints": [null, "変数に数値を代入（保存）します。", null, "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。", null, "文字列を出力し、最後に改行を加えます。", null],
      "candidates": {
        "keywords": ["if", "unless"],
        "numbers": ["100"],
        "strings": ["合格！"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "合格！\n"
        }
      ]
    },
    {
      "title": "ちがう場合は？ if-else文",
      "description": "「もし〜なら」のあとに、「そうじゃなければ」という別の動きも作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "else（エルス）とは？",
          "image": "/illustrations/common/if.png",
          "content": "# それ以外（いがい）の場合（ばあい）\n\n条件（じょうけん）に当（あ）てはまらなかったときの動きを作るのが **else（エルス）** です。\n\n**身近（みぢか）な例（れい）：**\n- **もし**晴れだったら → 公園に行く\n- **そうでなければ** → 家で遊ぶ\n\n「もし〜なら」と「そうでなければ」の2つのルートを作れます。"
        },
        {
          "title": "if-else の使い方",
          "image": "/illustrations/common/if.png",
          "content": "# 2つのルートを作る\n\n**コード例：**\n```ruby\nage = 10\nif age >= 20\n  puts '大人'\nelse\n  puts '子供'\nend\n```\n\n**何が起こるの？**\n1. `age` は `10` です\n2. `if age >= 20` → 10は20以上？ → いいえ（条件に合わない）\n3. `else` のルートに進む\n4. 「子供」と表示される\n\n**結果（けっか）：** 子供 と表示されます\n\n条件が当てはまれば上のルート、当てはまらなければ下のルートを通ります。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# ageに10を入れる\nage = 10\n# 20歳以上かどうかで分ける\nif age >= 20\n  puts '大人'\nelse\n  # それ以外の場合\n  puts '子供'\nend",
      "holeyCode": "# ageに10を入れる\nage = ___\n# 20歳以上かどうかで分ける\nif age >= 20\n  # 大人と表示\n  puts '___'\n# else でそれ以外の場合\n___\n  # それ以外の場合\n  puts '___'\nend",
      "correctLines": [
        "# ageに10を入れる",
        "age = 10",
        "# 20歳以上かどうかで分ける",
        "if age >= 20",
        "  # 大人と表示",
        "  puts '大人'",
        "# else でそれ以外の場合",
        "else",
        "  # それ以外の場合",
        "  puts '子供'",
        "end"
      ],
      "lineHints": [null, "変数に数値を代入（保存）します。", null, null, null, "文字列を出力し、最後に改行を加えます。", null, "もし条件が満たされなかった場合に実行する処理を記述します。", null, "文字列を出力し、最後に改行を加えます。", null],
      "candidates": {
        "keywords": ["else", "elsif"],
        "numbers": ["10"],
        "strings": ["大人", "子供"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "子供\n"
        }
      ]
    },
    {
      "title": "論理演算子（and, or）",
      "description": "2つ以上の条件を組み合わせる「and」と「or」を学びましょう。両方の条件を満たすか、どちらかを満たすかを判定できます。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "条件（じょうけん）を組み合わせる",
          "image": "/illustrations/common/if.png",
          "content": "# 複数（ふくすう）の条件\n\n2つ以上の条件を組み合わせることができます。\n\n**身近（みぢか）な例（れい）：**\n- 遊園地（ゆうえんち）の乗り物に乗れる条件\n- 「身長120cm以上」**かつ**「年齢6歳以上」の両方を満（み）たす必要（ひつよう）がある\n\n**`and`（アンド）**：「〜かつ〜」両方の条件を満たす\n**`or`（オア）**：「〜または〜」どちらか一方を満たす"
        },
        {
          "title": "and と or の使い方",
          "image": "/illustrations/common/if.png",
          "content": "# 条件（じょうけん）の組み合わせ\n\n**and の例（両方の条件を満たす）：**\n```ruby\nage = 15\nif age >= 10 and age < 20\n  puts '10代です'\nend\n```\n→ 15は「10以上」**かつ**「20より小さい」ので表示される\n\n**or の例（どちらかを満たす）：**\n```ruby\nday = '土曜'\nif day == '土曜' or day == '日曜'\n  puts 'お休みです'\nend\n```\n→ 「土曜」**または**「日曜」なので表示される\n\n**別（べつ）の書き方：**\n- `&&` は `and` と同じ意味\n- `||` は `or` と同じ意味"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# scoreに85を入れる\nscore = 85\n# 80以上 かつ 100以下 ならメッセージを出す\nif score >= 80 and score <= 100\n  puts '合格！'\nend",
      "holeyCode": "# scoreに85を入れる\nscore = ___\n# 80以上 かつ 100以下 ならメッセージを出す\nif score >= 80 ___ score <= 100\n  # 結果を表示\n  puts '___'\nend",
      "correctLines": [
        "# scoreに85を入れる",
        "score = 85",
        "# 80以上 かつ 100以下 ならメッセージを出す",
        "if score >= 80 and score <= 100",
        "  # 結果を表示",
        "  puts '合格！'",
        "end"
      ],
      "lineHints": [null, "変数に数値を代入（保存）します。", null, "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。", null, "文字列を出力し、最後に改行を加えます。", null],
      "candidates": {
        "keywords": ["and", "or"],
        "numbers": ["85"],
        "strings": ["合格！"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "合格！\n"
        }
      ]
    },
    {
      "title": "ぐるぐる回す each",
      "description": "配列の中身を一つずつ順番に取り出して処理する each を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 11,
      "tutorialSlides": [
        {
          "title": "繰（く）り返し処理（しょり）",
          "image": "/illustrations/common/loop.png",
          "content": "# 同じ処理（しょり）を何度も\n\n配列（はいれつ）の中身を全部（ぜんぶ）見たいときは **each（イーチ）** を使うと便利（べんり）です。\n\n**身近（みぢか）な例（れい）：**\n- 出席（しゅっせき）をとるとき、名簿（めいぼ）の名前を1人ずつ呼ぶ\n- 買い物リストの商品（しょうひん）を1つずつチェックする\n\n**each** を使うと、配列の中身を **1つずつ順番（じゅんばん）に取り出して** 同じ処理ができます。"
        },
        {
          "title": "each の使い方",
          "image": "/illustrations/common/loop.png",
          "content": "# ブロックで処理（しょり）を渡（わた）す\n\n**ブロック** は `do...end` で囲（かこ）んだ処理のかたまりです。\n\n**コード例：**\n```ruby\nfruits = ['りんご', 'バナナ']\nfruits.each do |fruit|\n  puts fruit\nend\n```\n\n**何をしているの？**\n1. `fruits` という配列に「りんご」と「バナナ」が入っている\n2. `each do |fruit|` → 配列から1つずつ取り出して `fruit` に入れる\n3. `puts fruit` → 取り出したものを表示\n4. 全部表示したら終わり\n\n**`|fruit|`（パイプで囲む）とは？**\n- 配列から取り出した1つのデータが入る「一時的（いちじてき）なはこ」\n- これを **ブロック変数（へんすう）** と呼びます"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 名前の配列を作る\nnames = ['太郎', '花子']\n# 順番に取り出すループ\nnames.each do |name|\n  # 取り出した名前を表示\n  puts name\nend",
      "holeyCode": "# 名前の配列を作る\nnames = ['___', '___']\n# 順番に取り出すループ\nnames.___ do |name|\n  # 取り出した名前を表示\n  puts ___\nend",
      "correctLines": [
        "# 名前の配列を作る",
        "names = ['太郎', '花子']",
        "# 順番に取り出すループ",
        "names.each do |name|",
        "  # 取り出した名前を表示",
        "  puts name",
        "end"
      ],
      "lineHints": [null, "太郎、花子 の順で入力しましょう。", null, "each を使います。", null, "ブロック変数 name を入力します。", null],
      "candidates": {
        "methods": ["each", "map"],
        "variables": ["name"],
        "strings": ["太郎", "花子"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "太郎\n花子\n"
        }
      ]
    },
    {
      "title": "名前で探しましょう「ハッシュ」",
      "description": "「ハッシュ」というものを使うと、名前（キー）を指定してデータを取り出せます。",
      "difficulty": "easy",
      "orderIndex": 12,
      "tutorialSlides": [
        {
          "title": "ハッシュとは？",
          "image": "/illustrations/common/dict.png",
          "content": "# キー（名前）と値（あたい）のペア\n\n**ハッシュ** は、「名前」と「データ」をセットで保存（ほぞん）できる仕組（しく）みです。\n\n**身近（みぢか）な例（れい）：**\n- 電話帳（でんわちょう）のイメージ\n- 「たろう」という名前で調べると「090-1234」が出てくる\n- 「はなこ」という名前で調べると「080-5678」が出てくる\n\n配列（はいれつ）は番号で探（さが）すのに対（たい）して、ハッシュは **名前（キー）で探せる** のが便利（べんり）なところです。"
        },
        {
          "title": "ハッシュの使い方",
          "image": "/illustrations/common/dict.png",
          "content": "# キーで取り出す\n\n**書き方：**\n- `{　}` で囲（かこ）む\n- `=>`（ロケット）でキーと値（あたい）を結（むす）ぶ\n\n**コード例：**\n```ruby\ncolors = {'りんご' => '赤', 'バナナ' => '黄'}\nputs colors['りんご']  # => 赤\n```\n\n**何をしているの？**\n1. `colors` というハッシュを作る\n2. 「りんご」というキーに「赤」という値をセット\n3. 「バナナ」というキーに「黄」という値をセット\n4. `colors['りんご']` で「りんご」の値を取り出す → 「赤」\n\n**`=>`（ダブルアロー/ロケット）：**\n「〜は〜です」という意味で覚（おぼ）えよう。「りんごは赤です」"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# ハッシュを作る\nfruits = {'みかん' => 'オレンジ'}\n# キーを指定して値を取り出す\nputs fruits['みかん']",
      "holeyCode": "# ハッシュを作る\nfruits = {'___' => '___'}\n# キーを指定して値を取り出す\nputs fruits['___']",
      "correctLines": [
        "# ハッシュを作る",
        "fruits = {'みかん' => 'オレンジ'}",
        "# キーを指定して値を取り出す",
        "puts fruits['みかん']"
      ],
      "lineHints": [null, "キーは みかん、値は オレンジ です。", null, "キー みかん を入力します。"],
      "candidates": {
        "strings": ["みかん", "オレンジ"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "オレンジ\n"
        }
      ]
    },
    {
      "title": "自分だけの関数を作ろう「メソッド」",
      "description": "自分だけのメソッド（関数）を作ってみましょう。def で定義します。",
      "difficulty": "easy",
      "orderIndex": 13,
      "tutorialSlides": [
        {
          "title": "メソッド（関数）とは？",
          "image": "/illustrations/common/function.png",
          "content": "# 処理（しょり）をまとめる\n\n一連（いちれん）の処理をひとまとめにして、名前をつけたものを **メソッド**（または **関数（かんすう）**）と呼びます。\n\n**身近（みぢか）な例（れい）：**\n- 料理（りょうり）のレシピのようなもの\n- 「カレーの作り方」というレシピがあれば、何度でもカレーが作れる\n- プログラムも同じように「手順書（てじゅんしょ）」を作っておける\n\n**メソッドの便利（べんり）なところ：**\n- 一度作れば、何度でも呼び出せる\n- 同じコードを何回も書かなくていい"
        },
        {
          "title": "def でメソッドを定義（ていぎ）",
          "image": "/illustrations/common/function.png",
          "content": "# 関数を作る\n\n**書き方：**\n- `def`（デフ）でメソッドを作り始（はじ）める\n- `end`（エンド）で終わる\n\n**コード例：**\n```ruby\ndef greet\n  puts 'こんにちは'\nend\n\ngreet  # => こんにちは と表示される\n```\n\n**何をしているの？**\n1. `def greet` → 「greet」という名前のメソッドを作り始める\n2. `puts 'こんにちは'` → このメソッドがやる処理\n3. `end` → メソッドの終わり\n4. `greet` → メソッドを呼び出す（名前を呼ぶだけでOK）\n\n**def は「define（定義する）」の略（りゃく）** と覚えましょう。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# greetというメソッドを定義\ndef greet\n  # こんにちは と表示\n  puts 'こんにちは'\nend\n# メソッドを呼び出す\ngreet",
      "holeyCode": "# greetというメソッドを定義\n___ greet\n  # こんにちは と表示\n  puts '___'\nend\n# メソッドを呼び出す\n___",
      "correctLines": [
        "# greetというメソッドを定義",
        "def greet",
        "  # こんにちは と表示",
        "  puts 'こんにちは'",
        "end",
        "# メソッドを呼び出す",
        "greet"
      ],
      "lineHints": [null, "def でメソッドを定義します。", null, "文字列を出力し、最後に改行を加えます。", null, null, "メソッド名 greet を入力して呼び出します。"],
      "candidates": {
        "keywords": ["def", "end"],
        "methods": ["greet"],
        "strings": ["こんにちは"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "こんにちは\n"
        }
      ]
    }
  ]
};

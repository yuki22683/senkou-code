export const rubyData = {
  "language": "ruby",
  "lessonId": "ruby-1",
  "lessonTitle": "Ruby (ルビー) に挑戦！",
  "lessonDescription": "日本で生まれたプログラミング言語「Ruby（ルビー）」のきほんを学びましょう。人間にとって読みやすく、楽しくプログラムを書けるのが特徴です。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "tutorialSlides": [
    {
      "title": "Rubyへようこそ！",
      "content": "**Ruby（ルビー）** は、まつもとゆきひろさん（Matz）が1995年に日本で作ったプログラミング言語です。\\n\\n「楽しくプログラミングする」ことを大切にしています。\\n\\nRuby on Railsというフレームワークで、Webサイト作りにもよく使われています。"
    },
    {
      "title": "画面に文字を出す",
      "content": "Rubyで画面に文字を出すには `puts` を使います。\\n\\n```ruby\\nputs 'こんにちは, Ruby!'\\n```\\n\\n`puts` は「put string」の略で、文字を出力して改行します。"
    },
    {
      "title": "変数を使う",
      "content": "データを入れておく「はこ」を**変数**と呼びます。\\n\\n```ruby\\nname = 'Ruby'\\nage = 10\\nputs name\\nputs age\\n```\\n\\n`=` で値を代入します。型の宣言は不要です。"
    },
    {
      "title": "計算する",
      "content": "Rubyでは数字を計算できます。\\n\\n```ruby\\na = 5\\nb = 3\\nputs a + b  # 8\\nputs 10 % 3 # 1（あまり）\\n```\\n\\n`#` から後ろはコメント（メモ）です。"
    },
    {
      "title": "条件分岐 if文",
      "content": "「もし〜なら」という条件で処理を分けられます。\\n\\n```ruby\\nscore = 85\\nif score > 80\\n  puts 'すごい！'\\nelse\\n  puts 'がんばろう'\\nend\\n```\\n\\nRubyは `end` でブロックを閉じます。"
    },
    {
      "title": "配列とハッシュ",
      "content": "複数のデータをまとめて扱えます。\\n\\n**配列**:\\n```ruby\\ncolors = ['赤', '青', '緑']\\nputs colors[0]\\n```\\n\\n**ハッシュ**（辞書）:\\n```ruby\\nscores = {'Math' => 90}\\nputs scores['Math']\\n```"
    }
  ],
  "exercises": [
    {
      "title": "画面に文字を出してみましょう",
      "description": "プログラムの基本！画面にメッセージを表示する方法を学びます",
      "tutorialSlides": [
        {
          "title": "Ruby（ルビー）とは？",
          "content": "# 楽しさを大事にするプログラミング言語\\n\\nRuby（ルビー）は、**まつもとゆきひろ**さんという日本人が作ったプログラミング言語です。\\n\\n宝石の「ルビー」から名前がつけられました。\\n\\n**Rubyの特徴：**\\n- 人間が読みやすく、楽しく書ける\\n- 世界中で大人気\\n- TwitterやCookpadなど有名なサービスで使われている"
        },
        {
          "title": "puts（プッツ）を使いましょう",
          "content": "# 画面に文字を表示する方法\\n\\n**puts（プッツ）** は「put string（プット ストリング）」の略で、「文字を置く」という意味です。\\n\\n画面にメッセージを出したいときに使います。\\n\\n**書き方：**\\n```ruby\\nputs 'ヤッホー！'\\n```\\n\\n**ポイント：**\\n- `puts` のあとに半角スペースを入れる\\n- 表示したい文字は `'　'`（シングルクォート）で囲む\\n\\n実行すると、画面に「ヤッホー！」と表示されます。"
        }
      ],
      "correctCode": "# 「こんにちは, Ruby!」と出力する関数\\nputs 'こんにちは, Ruby!'",
      "holeyCode": "# 「こんにちは, Ruby!」と出力する関数\\n___ '___'",
      "correctLines": [
          "# 「こんにちは, Ruby!」と出力する関数",
          "puts 'こんにちは, Ruby!'"
        ],
      "lineHints": [
          null,
          "putsで文字列を出力し、最後に改行を加えます。"
        ],
        "candidates": {
          "keywords": ["puts"],
          "strings": [
            "こんにちは, Ruby!"
          ],
          "others": ["puts", "こんにちは, Ruby!"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは, Ruby!\\n"
          }
        ]
      },
    {
      "title": "便利な「はこ」変数",
      "description": "データを名前をつけて保存する「変数」の仕組みを理解します",
      "tutorialSlides": [
        {
          "title": "変数とは？",
          "content": "# データを保存する「はこ」\\n\\n変数は、数字や文字をしまっておける **「はこ」** のようなものです。\\n\\n**身近な例で考えてみよう：**\\n- 筆箱に「えんぴつ」を入れるように\\n- 変数という「はこ」に「データ」を入れておける\\n\\n一度しまったデータは、あとで何度でも取り出して使えます。"
        },
        {
          "title": "はこに中身を入れる方法",
          "content": "# =（イコール）の使い方\\n\\nRubyでは **`=`（イコール）** を使って、はこ（変数）に値を入れます。\\n\\nこれを **代入** と呼びます。\\n\\n**書き方：**\\n```ruby\\nfruit = 'りんご'\\nputs fruit\\n```\\n\\n**何をしているの？**\\n1. `fruit` という名前のはこを用意する\\n2. そのはこに `'りんご'` という文字を入れる\\n3. `puts fruit` で、はこの中身を画面に表示する\\n\\n**結果：** りんご と表示されます"
        }
      ],
      "correctCode": "# nameというはこに 'Ruby' を入れる\\nname = 'Ruby'\\n# はこの中身を画面に出す\\nputs name",
      "holeyCode": "# nameというはこに 'Ruby' を入れる\\n___ = '___'\\n# はこの中身を画面に出す\\n___ ___",
      "correctLines": [
          "# nameというはこに 'Ruby' を入れる",
          "name = 'Ruby'",
          "# はこの中身を画面に出す",
          "puts name"
        ],
      "lineHints": [
          null,
          "変数nameに文字列データを代入（保存）します。",
          null,
          "putsで変数の中身を出力します。"
        ],
        "candidates": {
          "keywords": ["puts"],
          "variables": [
            "name"
          ],
          "strings": [
            "Ruby"
          ],
          "others": ["puts"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Ruby\\n"
          }
        ]
      },
    {
      "title": "コンピュータで計算しましょう",
      "description": "プログラムで数値を計算する方法を学びます",
      "tutorialSlides": [
        {
          "title": "算数とプログラミング",
          "content": "# 計算はコンピュータの得意技\\n\\nコンピュータの一番の得意なことは **「正確で速い計算」** です。\\n\\n**すごいところ：**\\n- どんなに大きな数字でも間違えない\\n- 人間が何時間もかかる計算を一瞬で解いてくれる\\n\\nプログラミングで「計算して！」と指示を出すだけで、コンピュータが代わりにやってくれます。"
        },
        {
          "title": "計算の記号",
          "content": "# 四則演算\\n\\nRubyでは、算数と同じような記号を使って計算します。\\n\\n**演算子の一覧：**\\n- **+** : たし算（例：5 + 3 = 8）\\n- **-** : ひき算（例：10 - 4 = 6）\\n- **\\*** : かけ算（例：3 * 4 = 12）\\n- **/** : わり算（例：20 / 5 = 4）\\n\\n**コード例：**\\n```ruby\\nputs 10 + 5\\n```\\n\\n=> 15 と表示される\\n\\n`#` より右に書いたものは **コメント** といって、メモ書きになります。プログラムには影響しません。"
        }
      ],
      "correctCode": "# xというはこに 10 を入れる\\nx = 10\\n# yというはこに 5 を入れる\\ny = 5\\n# x と y をたした答えを出す\\nputs x + y",
      "holeyCode": "# xというはこに 10 を入れる\\n___ = ___\\n# yというはこに 5 を入れる\\n___ = ___\\n# x と y をたした答えを出す\\n___ ___ ___ ___",
      "correctLines": [
          "# xというはこに 10 を入れる",
          "x = 10",
          "# yというはこに 5 を入れる",
          "y = 5",
          "# x と y をたした答えを出す",
          "puts x + y"
        ],
      "lineHints": [
          null,
          "変数xに数値10を代入（保存）します。",
          null,
          "変数yに数値5を代入（保存）します。",
          null,
          "putsでx + yの結果を出力します。"
        ],
        "candidates": {
          "keywords": ["puts"],
          "variables": ["x", "y"],
          "numbers": [
            "10",
            "5"
          ],
          "operators": [
            "+",
            "-",
            "*",
            "/"
          ],
          "others": ["puts", "x", "y"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "15\\n"
          }
        ]
      },
    {
      "title": "剰余演算子（%）",
      "description": "`%`（パーセント）について学びます",
      "tutorialSlides": [
        {
          "title": "あまりを求める",
          "content": "# 剰余演算子\\n\\n**`%`（パーセント）** を使うと、割り算の **あまり** を求められます。\\n\\n**身近な例で考えよう：**\\n- 10個のあめを3人で分けると...\\n- 1人3個ずつで、**1個あまる**\\n- この「あまり」を計算するのが `%` です！\\n\\nあまりを求める計算を **剰余** と呼びます。"
        },
        {
          "title": "% の使い方",
          "content": "# あまりを計算してみよう\\n\\n**コード例：**\\n```ruby\\nputs 10 % 3\\nputs 8 % 2\\n```\\n\\n=> 1（10÷3=3あまり1）\\n\\n=> 0（割り切れる）\\n\\n**便利な使い方：**\\n- **偶数**：2で割ってあまりが0\\n- **奇数**：2で割ってあまりが1\\n\\n```ruby\\nputs 6 % 2\\nputs 7 % 2\\n```\\n\\n=> 0（6は偶数）\\n\\n=> 1（7は奇数）\\n\\nゲームで「3回ごとにボーナス」といった処理にも使えます。"
        }
      ],
      "correctCode": "# 10 を 3 で割ったあまりを出力する\\nputs 10 % 3",
      "holeyCode": "# 10 を 3 で割ったあまりを出力する\\n___ ___ ___ ___",
      "correctLines": [
          "# 10 を 3 で割ったあまりを出力する",
          "puts 10 % 3"
        ],
      "lineHints": [
          null,
          "putsで10 % 3の結果を出力します。"
        ],
        "candidates": {
          "keywords": ["puts"],
          "numbers": ["10", "3"],
          "operators": [
            "%",
            "+",
            "-",
            "*",
            "/"
          ],
          "others": ["puts"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      },
    {
      "title": "累算代入演算子（+=、-=）",
      "description": "累算代入について学びます",
      "tutorialSlides": [
        {
          "title": "累算代入とは？",
          "content": "# 計算してそのまま代入\\n\\n**累算代入** は、「計算して、結果を同じはこに戻す」便利な書き方です。\\n\\n**身近な例：**\\n- 貯金箱に100円入っている\\n- さらに50円を追加する\\n- 貯金箱の中身は150円になる\\n\\n**`+=` を使うと：**\\n```ruby\\nx = 10\\nx += 5  # x = x + 5 と同じ意味\\nputs x\\n```\\n\\n=> 15 と表示される\\n\\n`x += 5` は「xに5を足して、結果をxに入れ直す」という意味です。"
        },
        {
          "title": "-= も使える",
          "content": "# 引き算バージョン\\n\\n`-=` を使えば引き算もできます。\\n\\n**コード例：**\\n```ruby\\nx = 10\\nx -= 3  # x = x - 3 と同じ意味\\nputs x\\n```\\n\\n=> 7 と表示される\\n\\n**他にもある演算子：**\\n- `*=` : かけ算して代入\\n- `/=` : わり算して代入\\n\\n```ruby\\nx = 6\\nx *= 2  # x = x * 2 と同じ → 12になる\\n```\\n\\nゲームのスコアを増やしたり減らしたりするのに便利です。"
        }
      ],
      "correctCode": "# scoreに50を入れる\\nscore = 50\\n# 10点プラスする\\nscore += 10\\n# scoreを表示\\nputs score",
      "holeyCode": "# scoreに50を入れる\\n___ = ___\\n# 10点プラスする\\n___ ___ ___\\n# scoreを表示\\n___ ___",
      "correctLines": [
          "# scoreに50を入れる",
          "score = 50",
          "# 10点プラスする",
          "score += 10",
          "# scoreを表示",
          "puts score"
        ],
      "lineHints": [
          null,
          "変数scoreに数値50を代入（保存）します。",
          null,
          "scoreに10を加算します。+=演算子を使います。",
          null,
          "putsでscoreを出力します。"
        ],
        "candidates": {
          "keywords": ["puts"],
          "variables": ["score"],
          "operators": [
            "+=",
            "-=",
            "*=",
            "/="
          ],
          "numbers": [
            "50",
            "10"
          ],
          "others": ["puts", "score"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "60\\n"
          }
        ]
      },
    {
      "title": "文章の中に変数を入れましょう",
      "description": "データを名前をつけて保存する「変数」の仕組みを理解します",
      "tutorialSlides": [
        {
          "title": "式展開とは？",
          "content": "# 文章と変数を組み合わせる\\n\\n文章の途中に、変数の中身を入れたいときに使うのが **式展開** です。\\n\\n**身近な例：**\\n- 「こんにちは、○○さん！」の○○を変えたい\\n- 名前が入った変数を文章に組み込める\\n\\n**書き方のポイント：**\\n- `#{　}` の中に変数名を入れる\\n- 変数の中身が自動的に文章に入る"
        },
        {
          "title": "式展開の書き方",
          "content": "# ダブルクォートで囲む\\n\\n式展開を使うときは **ダブルクォート `\"　\"`** で文章を囲みます。\\n\\n**コード例：**\\n```ruby\\nage = 10\\nputs \"私は#{age}歳です\"\\n```\\n\\n**何が起こるの？**\\n1. `age` という変数には `10` が入っている\\n2. `#{age}` の部分が `10` に置き換わる\\n3. 「私は10歳です」と表示される\\n\\n**注意：**\\n- シングルクォート `' '` だと式展開できません\\n- 必ずダブルクォート `\" \"` を使いましょう"
        }
      ],
      "correctCode": "# ageというはこに 10 を入れる\\nage = 10\\n# 式展開を使ってメッセージを出す\\nputs \"私は#{age}歳です\"",
      "holeyCode": "# ageというはこに 10 を入れる\\n___ = ___\\n# 式展開を使ってメッセージを出す\\n___ \"___\"",
      "correctLines": [
          "# ageというはこに 10 を入れる",
          "age = 10",
          "# 式展開を使ってメッセージを出す",
          "puts \"私は#{age}歳です\""
        ],
      "lineHints": [
          null,
          "変数ageに数値10を代入（保存）します。",
          null,
          "putsで式展開を含む文字列を出力します。"
        ],
        "candidates": {
          "keywords": ["puts"],
          "variables": [
            "age"
          ],
          "numbers": [
            "10"
          ],
          "others": ["私は#{age}歳です", "puts", "age"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "私は10歳です\\n"
          }
        ]
      },
    {
      "title": "たくさんのデータをまとめましょう「配列」",
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "配列とは？",
          "content": "# データの行列\\n\\nたくさんのデータを順番に並べておきたいときに使うのが **配列** です。\\n\\n**身近な例：**\\n- ロッカーが横に並んでいるイメージ\\n- 1番目のロッカー、2番目のロッカー...とデータを入れる\\n\\n**書き方：**\\n```ruby\\nfruits = ['りんご', 'バナナ', 'みかん']\\n```\\n\\n- `[　]`（角かっこ）で囲む\\n- データは `,`（カンマ）で区切る"
        },
        {
          "title": "配列の番号は0から",
          "content": "# インデックス（番号）\\n\\nプログラミングでは、**最初の番号は「0」から数えます**。これを **インデックス** と呼びます。\\n\\n**イメージしてみよう：**\\n| 番号（インデックス） | 0番目 | 1番目 | 2番目 |\\n| --- | --- | --- | --- |\\n| 中身 | りんご | バナナ | みかん |\\n\\n**コード例：**\\n```ruby\\nfruits = ['りんご', 'バナナ', 'みかん']\\nputs fruits[0]\\nputs fruits[1]\\n```\\n\\n=> りんご（1番目）\\n\\n=> バナナ（2番目）\\n\\n**大事なポイント：**\\n- 1番目のデータは `[0]` で取り出す\\n- 2番目のデータは `[1]` で取り出す"
        }
      ],
      "correctCode": "# 色の配列（あか、あお、みどり）をcolorsに代入\\ncolors = ['あか', 'あお', 'みどり']\\n# colors[1]を表示\\nputs colors[1]",
      "holeyCode": "# 色の配列（あか、あお、みどり）をcolorsに代入\\n___ = ['___', '___', '___']\\n# colors[1]を表示\\n___ ___[___]",
      "correctLines": [
          "# 色の配列（あか、あお、みどり）をcolorsに代入",
          "colors = ['あか', 'あお', 'みどり']",
          "# colors[1]を表示",
          "puts colors[1]"
        ],
      "lineHints": [
          null,
          "配列colorsにあか、あお、みどりの順で入力します。",
          null,
          "putsでcolors[1]（2番目の要素）を表示します。"
        ],
        "candidates": {
          "keywords": ["puts"],
          "variables": ["colors"],
          "strings": [
            "あか",
            "あお",
            "みどり"
          ],
          "numbers": [
            "0",
            "1",
            "2"
          ],
          "others": ["puts", "colors"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "あお\\n"
          }
        ]
      },
    {
      "title": "「もし〜なら」で分ける if文",
      "description": "条件によって処理を分ける「条件分岐」を学びます",
      "tutorialSlides": [
        {
          "title": "条件分岐とは？",
          "content": "# プログラムに判断させる\\n\\n状況によって動きを変えることを **条件分岐** と呼びます。\\n\\n**身近な例：**\\n- **もし**雨が降っていたら → かさを持っていく\\n- **もし**テストで80点以上だったら → ごほうびをもらえる\\n\\nプログラムも同じように「もし〜なら、〜する」という判断ができます。"
        },
        {
          "title": "if の使い方",
          "content": "# もし〜なら\\n\\nRubyでは **`if`（イフ）** のあとに条件を書きます。最後に **`end`（エンド）** で閉じます。\\n\\n**コード例：**\\n```ruby\\nif score > 80\\n  puts '合格！'\\nend\\n```\\n\\n**何をしているの？**\\n1. `if score > 80` → もしscoreが80より大きかったら\\n2. `puts '合格！'` → 「合格！」と表示する\\n3. `end` → if文の終わり\\n\\n**比較の記号：**\\n- `>` : より大きい\\n- `<` : より小さい\\n- `>=` : 以上\\n- `<=` : 以下\\n- `==` : 等しい"
        }
      ],
      "correctCode": "# scoreに100を入れる\\nscore = 100\\n# もし80より大きかったら\\nif score > 80\\n  # 「合格！」と表示する\\n  puts '合格！'\\nend",
      "holeyCode": "# scoreに100を入れる\\n___ = ___\\n# もし80より大きかったら\\nif ___ ___ ___\\n  # 「合格！」と表示する\\n  ___ '___'\\n# ブロックを終了\\n___",
      "correctLines": [
          "# scoreに100を入れる",
          "score = 100",
          "# もし80より大きかったら",
          "if score > 80",
          "  # 「合格！」と表示する",
          "  puts '合格！'",
          "end"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "keywords": [
            "if",
            "unless",
            "end"
          ],
          "variables": ["score"],
          "numbers": [
            "100",
            "80"
          ],
          "operators": [">", "<", ">=", "<="],
          "strings": [
            "合格！"
          ],
          "others": ["puts", "end", "score"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "合格！\\n"
          }
        ]
      },
    {
      "title": "ちがう場合は？ if-else文",
      "description": "条件に合わない場合の処理を追加する方法を学びます",
      "tutorialSlides": [
        {
          "title": "else（エルス）とは？",
          "content": "# それ以外の場合\\n\\n条件に当てはまらなかったときの動きを作るのが **else（エルス）** です。\\n\\n**身近な例：**\\n- **もし**晴れだったら → 公園に行く\\n- **そうでなければ** → 家で遊ぶ\\n\\n「もし〜なら」と「そうでなければ」の2つのルートを作れます。"
        },
        {
          "title": "if-else の使い方",
          "content": "# 2つのルートを作る\\n\\n**コード例：**\\n```ruby\\nage = 10\\nif age >= 20\\n  puts '大人'\\nelse\\n  puts '子供'\\nend\\n```\\n\\n**何が起こるの？**\\n1. `age` は `10` です\\n2. `if age >= 20` → 10は20以上？ → いいえ（条件に合わない）\\n3. `else` のルートに進む\\n4. 「子供」と表示される\\n\\n**結果：** 子供 と表示されます\\n\\n条件が当てはまれば上のルート、当てはまらなければ下のルートを通ります。"
        }
      ],
      "correctCode": "# ageに10を入れる\\nage = 10\\n# 20歳以上かどうかで分ける\\nif age >= 20\\n  # 「大人」と表示\\n  puts '大人'\\n# else でそれ以外の場合\\nelse\\n  # 「子供」と表示\\n  puts '子供'\\nend",
      "holeyCode": "# ageに10を入れる\\n___ = ___\\n# 20歳以上かどうかで分ける\\nif ___ ___ ___\\n  # 「大人」と表示\\n  ___ '___'\\n# else でそれ以外の場合\\n___\\n  # 「子供」と表示\\n  ___ '___'\\n# ブロックを終了\\n___",
      "correctLines": [
          "# ageに10を入れる",
          "age = 10",
          "# 20歳以上かどうかで分ける",
          "if age >= 20",
          "  # 「大人」と表示",
          "  puts '大人'",
          "# else でそれ以外の場合",
          "else",
          "  # 「子供」と表示",
          "  puts '子供'",
          "end"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "keywords": [
            "if",
            "else",
            "elsif",
            "end"
          ],
          "variables": ["age"],
          "numbers": [
            "10",
            "20"
          ],
          "operators": [">=", "<=", ">", "<"],
          "strings": [
            "大人",
            "子供"
          ],
          "others": [">=", "puts", "end", "age"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "子供\\n"
          }
        ]
      },
    {
      "title": "論理演算子（and, or）",
      "description": "複数の条件を組み合わせる方法を学びます",
      "tutorialSlides": [
        {
          "title": "条件を組み合わせる",
          "content": "# 複数の条件\\n\\n2つ以上の条件を組み合わせることができます。\\n\\n**身近な例：**\\n- 遊園地の乗り物に乗れる条件\\n- 「身長120cm以上」**かつ**「年齢6歳以上」の両方を満たす必要がある\\n\\n**`and`（アンド）**：「〜かつ〜」両方の条件を満たす\\n**`or`（オア）**：「〜または〜」どちらか一方を満たす"
        },
        {
          "title": "and と or の使い方",
          "content": "# 条件の組み合わせ\\n\\n**and の例（両方の条件を満たす）：**\\n```ruby\\nage = 15\\nif age >= 10 and age < 20\\n  puts '10代です'\\nend\\n```\\n→ 15は「10以上」**かつ**「20より小さい」ので表示される\\n\\n**or の例（どちらかを満たす）：**\\n```ruby\\nday = '土曜'\\nif day == '土曜' or day == '日曜'\\n  puts 'お休みです'\\nend\\n```\\n→ 「土曜」**または**「日曜」なので表示される\\n\\n**別の書き方：**\\n- `&&` は `and` と同じ意味\\n- `||` は `or` と同じ意味"
        }
      ],
      "correctCode": "# scoreに85を入れる\\nscore = 85\\n# 80以上 かつ 100以下 ならメッセージを出す\\nif score >= 80 and score <= 100\\n  # 「合格！」と表示\\n  puts '合格！'\\nend",
      "holeyCode": "# scoreに85を入れる\\n___ = ___\\n# 80以上 かつ 100以下 ならメッセージを出す\\nif ___ ___ ___ ___ ___ ___ ___\\n  # 「合格！」と表示\\n  ___ '___'\\n# ブロックを終了\\n___",
      "correctLines": [
          "# scoreに85を入れる",
          "score = 85",
          "# 80以上 かつ 100以下 ならメッセージを出す",
          "if score >= 80 and score <= 100",
          "  # 「合格！」と表示",
          "  puts '合格！'",
          "end"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "keywords": [
            "if",
            "and",
            "or",
            "end"
          ],
          "variables": ["score"],
          "numbers": [
            "85",
            "80",
            "100"
          ],
          "operators": [">=", "<=", ">", "<"],
          "strings": [
            "合格！"
          ],
          "others": ["puts", "end", "score"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "合格！\\n"
          }
        ]
      },
    {
      "title": "ぐるぐる回す each",
      "description": "each（イーチ）について学びます",
      "tutorialSlides": [
        {
          "title": "繰り返し処理",
          "content": "# 同じ処理を何度も\\n\\n配列の中身を全部見たいときは **each（イーチ）** を使うと便利です。\\n\\n**身近な例：**\\n- 出席をとるとき、名簿の名前を1人ずつ呼ぶ\\n- 買い物リストの商品を1つずつチェックする\\n\\n**each** を使うと、配列の中身を **1つずつ順番に取り出して** 同じ処理ができます。"
        },
        {
          "title": "each の使い方",
          "content": "# ブロックで処理を渡す\\n\\n**ブロック** は `do...end` で囲んだ処理のかたまりです。\\n\\n**コード例：**\\n```ruby\\nfruits = ['りんご', 'バナナ']\\nfruits.each do |fruit|\\n  puts fruit\\nend\\n```\\n\\n**何をしているの？**\\n1. `fruits` という配列に「りんご」と「バナナ」が入っている\\n2. `each do |fruit|` → 配列から1つずつ取り出して `fruit` に入れる\\n3. `puts fruit` → 取り出したものを表示\\n4. 全部表示したら終わり\\n\\n**`|fruit|`（パイプで囲む）とは？**\\n- 配列から取り出した1つのデータが入る「一時的なはこ」\\n- これを **ブロック変数** と呼びます"
        }
      ],
      "correctCode": "# 名前の配列（太郎、花子）をnamesに代入\\nnames = ['太郎', '花子']\\n# eachでnamesをループ\\nnames.each do |name|\\n  # nameを表示\\n  puts name\\nend",
      "holeyCode": "# 名前の配列（太郎、花子）をnamesに代入\\n___ = ['___', '___']\\n# eachでnamesをループ\\n___.___ do |___|\\n  # nameを表示\\n  ___ ___\\n# ブロックを終了\\n___",
      "correctLines": [
          "# 名前の配列（太郎、花子）をnamesに代入",
          "names = ['太郎', '花子']",
          "# eachでnamesをループ",
          "names.each do |name|",
          "  # nameを表示",
          "  puts name",
          "end"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "keywords": ["do", "end"],
          "methods": [
            "each",
            "map"
          ],
          "variables": [
            "names",
            "name"
          ],
          "strings": [
            "太郎",
            "花子"
          ],
          "others": ["puts", "end"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "太郎\\n花子\\n"
          }
        ]
      },
    {
      "title": "名前で探しましょう「ハッシュ」",
      "description": "キーと値のペアでデータを管理する方法を学びます",
      "tutorialSlides": [
        {
          "title": "ハッシュとは？",
          "content": "# キー（名前）と値のペア\\n\\n**ハッシュ** は、「名前」と「データ」をセットで保存できる仕組みです。\\n\\n**身近な例：**\\n- 電話帳のイメージ\\n- 「たろう」という名前で調べると「090-1234」が出てくる\\n- 「はなこ」という名前で調べると「080-5678」が出てくる\\n\\n配列は番号で探すのに対して、ハッシュは **名前（キー）で探せる** のが便利なところです。"
        },
        {
          "title": "ハッシュの使い方",
          "content": "# キーで取り出す\\n\\n**書き方：**\\n- `{　}` で囲む\\n- `=>`（ロケット）でキーと値を結ぶ\\n\\n**コード例：**\\n```ruby\\ncolors = {'りんご' => '赤', 'バナナ' => '黄'}\\nputs colors['りんご']\\n```\\n\\n=> 赤\\n\\n**何をしているの？**\\n1. `colors` というハッシュを作る\\n2. 「りんご」というキーに「赤」という値をセット\\n3. 「バナナ」というキーに「黄」という値をセット\\n4. `colors['りんご']` で「りんご」の値を取り出す → 「赤」\\n\\n**`=>`（ダブルアロー/ロケット）：**\\n「〜は〜です」という意味で覚えよう。「りんごは赤です」"
        }
      ],
      "correctCode": "# ハッシュ（みかん→オレンジ）をfruitsに代入\\nfruits = {'みかん' => 'オレンジ'}\\n# fruits['みかん']を表示\\nputs fruits['みかん']",
      "holeyCode": "# ハッシュ（みかん→オレンジ）をfruitsに代入\\n___ = {'___' => '___'}\\n# fruits['みかん']を表示\\n___ ___['___']",
      "correctLines": [
          "# ハッシュ（みかん→オレンジ）をfruitsに代入",
          "fruits = {'みかん' => 'オレンジ'}",
          "# fruits['みかん']を表示",
          "puts fruits['みかん']"
        ],
      "lineHints": [
          null,
          "ハッシュfruitsにキー「みかん」、値「オレンジ」を設定します。",
          null,
          "putsでfruits['みかん']を出力します。"
        ],
        "candidates": {
          "keywords": ["puts"],
          "variables": ["fruits"],
          "strings": [
            "みかん",
            "オレンジ"
          ],
          "others": ["puts", "fruits"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "オレンジ\\n"
          }
        ]
      },
    {
      "title": "自分だけの関数を作ろう「メソッド」",
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "メソッド（関数）とは？",
          "content": "# 処理をまとめる\\n\\n一連の処理をひとまとめにして、名前をつけたものを **メソッド**（または **関数**）と呼びます。\\n\\n**身近な例：**\\n- 料理のレシピのようなもの\\n- 「カレーの作り方」というレシピがあれば、何度でもカレーが作れる\\n- プログラムも同じように「手順書」を作っておける\\n\\n**メソッドの便利なところ：**\\n- 一度作れば、何度でも呼び出せる\\n- 同じコードを何回も書かなくていい"
        },
        {
          "title": "def でメソッドを定義",
          "content": "# 関数を作る\\n\\n**書き方：**\\n- `def`（デフ）でメソッドを作り始める\\n- `end`（エンド）で終わる\\n\\n**コード例：**\\n```ruby\\ndef greet\\n  puts 'こんにちは'\\nend\\n\\ngreet\\n```\\n\\n=> こんにちは と表示される\\n\\n**何をしているの？**\\n1. `def greet` → 「greet」という名前のメソッドを作り始める\\n2. `puts 'こんにちは'` → このメソッドがやる処理\\n3. `end` → メソッドの終わり\\n4. `greet` → メソッドを呼び出す（名前を呼ぶだけでOK）\\n\\n**def は「define（定義する）」の略** と覚えましょう。"
        }
      ],
      "correctCode": "# greetというメソッドを定義\\ndef greet\\n  # こんにちは と表示\\n  puts 'こんにちは'\\nend\\n# greetを呼び出す\\ngreet",
      "holeyCode": "# greetというメソッドを定義\\ndef ___\\n  # こんにちは と表示\\n  ___ '___'\\n# ブロックを終了\\n___\\n# greetを呼び出す\\n___",
      "correctLines": [
          "# greetというメソッドを定義",
          "def greet",
          "  # こんにちは と表示",
          "  puts 'こんにちは'",
          "end",
          "# greetを呼び出す",
          "greet"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "keywords": [
            "def",
            "end",
            "puts"
          ],
          "methods": [
            "greet"
          ],
          "strings": [
            "こんにちは"
          ],
          "others": ["puts", "greet", "end"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      }
  ]
};

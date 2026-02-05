export const ruby2Data = {
  "language": "ruby",
  "lessonId": "ruby-2",
  "lessonTitle": "Ruby II - ブロックとオブジェクト指向",
  "lessonDescription": "Rubyの強力な機能「ブロック」と「クラス」を学びます。Rubyらしいエレガントなコードを書く力を身につけましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "exercises": [
    {
        "title": "ブロックを使おう - each",
        "description": "配列の各要素を処理する「each」メソッドとブロックを学びましょう。",
        "difficulty": "medium",
        "orderIndex": 1,
        "tutorialSlides": [
          {
            "title": "ブロックとは？",
            "content": "# コードのかたまり\\\\n\\\\n**ブロック** は、メソッドに渡（わた）すコードのかたまりです。\\\\n\\\\n**身近（みぢか）な例（れい）：**\\\\n- 「この仕事（しごと）をやってね」と、やることリストを渡すイメージ\\\\n- メソッドが「どうやるか」を知っていて、ブロックが「何をするか」を伝える\\\\n\\\\n**書き方は2種類（しゅるい）：**\\\\n- `do...end` で囲（かこ）む（長い処理向け）\\\\n- `{ }` で囲む（短い処理向け）\\\\n\\\\nこれはRubyの強力（きょうりょく）な機能（きのう）です。"
          },
          {
            "title": "each（イーチ）メソッド",
            "content": "# 配列（はいれつ）を順番（じゅんばん）に処理（しょり）\\\\n\\\\n`each` は、配列の各要素（ようそ）を順番に処理します。\\\\n\\\\n**コード例：**\\\\n```ruby\\\\n[1, 2, 3].each do |n|\\\\n  puts n\\\\nend\\\\n```\\\\n\\\\n**何をしているの？**\\\\n1. `[1, 2, 3]` という配列がある\\\\n2. `each do |n|` → 配列から1つずつ取り出して `n` に入れる\\\\n3. `puts n` → 取り出した数字を表示\\\\n4. 1, 2, 3 の順に全部表示される\\\\n\\\\n**`|n|`（パイプで囲む）とは？**\\\\n- 取り出した1つのデータを受け取る「一時的（いちじてき）なはこ」\\\\n- これを **ブロック変数（へんすう）** と呼びます"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# numsに配列を代入（1, 2, 3）\\\\nnums = [1, 2, 3]\\\\n# eachで各要素を処理\\\\nnums.each do |n|\\\\n  # putsで出力\\\\n  puts n\\\\n# endで終了\\\\nend",
        "holeyCode": "# numsに配列を代入（1, 2, 3）\\\\nnums = [___, 2, 3]\\\\n# eachで各要素を処理\\\\nnums.each do |___|\\\\n  # putsで出力\\\\n  puts ___\\\\n# endで終了\\\\n___",
        "correctLines": [
          "# numsに配列を代入（1, 2, 3）",
          "nums = [1, 2, 3]",
          "# eachで各要素を処理",
          "nums.each do |n|",
          "  # putsで出力",
          "  puts n",
          "# endで終了",
          "end"
        ],
        "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "each で各要素を処理します。",
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "functions": [
            "each"
          ],
          "others": [
            "1",
            "2",
            "3",
            "n",
            "end"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\\\n2\\\\n3\\\\n"
          }
        ]
      },
    {
        "title": "map で変換しよう",
        "description": "配列の各要素を変換する「map」メソッドを学びましょう。",
        "difficulty": "medium",
        "orderIndex": 2,
        "tutorialSlides": [
          {
            "title": "map（マップ）とは？",
            "content": "# 各要素（ようそ）を変換（へんかん）\\\\n\\\\n**map（マップ）** は、配列（はいれつ）の各要素を変換して、**新しい配列を作る** メソッドです。\\\\n\\\\n**身近（みぢか）な例（れい）：**\\\\n- お菓子（かし）工場で、生地（きじ）を型（かた）にはめてクッキーにする\\\\n- 入れたもの全部が同じ変換をされて出てくる\\\\n\\\\n**大事（だいじ）なポイント：**\\\\n- 元（もと）の配列は変わらない\\\\n- 変換された**新しい配列**が返ってくる"
          },
          {
            "title": "map の使い方",
            "content": "# 新しい配列を返す\\\\n\\\\nブロック `{ }` の中で「どう変換するか」を書きます。\\\\n\\\\n**コード例：**\\\\n```ruby\\\\n[1, 2, 3].map { |n| n * 2 }\\\\n# => [2, 4, 6]\\\\n```\\\\n\\\\n**何が起こるの？**\\\\n1. `[1, 2, 3]` から1つずつ取り出す\\\\n2. 取り出した数を `n` に入れる\\\\n3. `n * 2` で2倍にする\\\\n4. 結果（けっか）を新しい配列に入れる\\\\n5. 最終的（さいしゅうてき）に `[2, 4, 6]` という新しい配列ができる\\\\n\\\\n**each との違（ちが）い：**\\\\n- `each` → 処理するだけ（結果を返さない）\\\\n- `map` → 変換した新しい配列を返す"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# numsに配列を代入（1, 2, 3）\\\\nnums = [1, 2, 3]\\\\n# mapで各要素を変換\\\\ndoubled = nums.map { |n| n * 2 }\\\\n# putsで出力\\\\nputs doubled",
        "holeyCode": "# numsに配列を代入（1, 2, 3）\\\\nnums = [___, 2, 3]\\\\n# mapで各要素を変換\\\\ndoubled = nums.map { |n| n * ___ }\\\\n# putsで出力\\\\nputs ___",
        "correctLines": [
          "# numsに配列を代入（1, 2, 3）",
          "nums = [1, 2, 3]",
          "# mapで各要素を変換",
          "doubled = nums.map { |n| n * 2 }",
          "# putsで出力",
          "puts doubled"
        ],
        "lineHints": [
          null,
          "map で各要素を2倍にします。",
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "functions": [
            "map"
          ],
          "others": [
            "1",
            "2",
            "3",
            "doubled"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "2\\\\n4\\\\n6\\\\n"
          }
        ]
      },
    {
        "title": "select で絞り込もう",
        "description": "条件に合う要素だけを抽出する「select」メソッドを学びましょう。",
        "difficulty": "medium",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "select（セレクト）とは？",
            "content": "# 条件（じょうけん）でフィルタ\\\\n\\\\n**select（セレクト）** は、条件を満（み）たす要素（ようそ）だけを集（あつ）めた新しい配列（はいれつ）を作ります。\\\\n\\\\n**身近（みぢか）な例（れい）：**\\\\n- 果物（くだもの）の中から「赤いもの」だけを選ぶ\\\\n- テストの点数から「80点以上」だけを集める\\\\n\\\\n条件に合うものだけを **選別（せんべつ）** するイメージです。"
          },
          {
            "title": "select の使い方",
            "content": "# 条件に合う要素（ようそ）を選ぶ\\\\n\\\\nブロック `{ }` の中で条件を書きます。条件に合うもの（`true` になるもの）だけが残ります。\\\\n\\\\n**コード例：**\\\\n```ruby\\\\n[1, 2, 3, 4, 5].select { |n| n > 3 }\\\\n# => [4, 5]\\\\n```\\\\n\\\\n**何が起こるの？**\\\\n1. 配列から1つずつ取り出す（1, 2, 3, 4, 5）\\\\n2. `n > 3` → 3より大きいか確認（かくにん）\\\\n3. 1, 2, 3 → NG（条件に合わない）\\\\n4. 4, 5 → OK（条件に合う）→ 新しい配列へ\\\\n5. 結果（けっか）：`[4, 5]` という配列ができる\\\\n\\\\n**map との違（ちが）い：**\\\\n- `map` → 全部を変換する\\\\n- `select` → 条件に合うものだけを選ぶ"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# numsに配列を代入（1, 2, 3, 4, 5）\\\\nnums = [1, 2, 3, 4, 5]\\\\n# selectで条件に合う要素を抽出\\\\nbig = nums.select { |n| n >= 3 }\\\\n# putsで出力\\\\nputs big",
        "holeyCode": "# numsに配列を代入（1, 2, 3, 4, 5）\\\\nnums = [___, 2, 3, 4, 5]\\\\n# selectで条件に合う要素を抽出\\\\nbig = nums.select { |n| n >= ___ }\\\\n# putsで出力\\\\nputs ___",
        "correctLines": [
          "# numsに配列を代入（1, 2, 3, 4, 5）",
          "nums = [1, 2, 3, 4, 5]",
          "# selectで条件に合う要素を抽出",
          "big = nums.select { |n| n >= 3 }",
          "# putsで出力",
          "puts big"
        ],
        "lineHints": [
          null,
          "select で 3 以上の要素を抽出します。",
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "functions": [
            "select"
          ],
          "others": [
            "1",
            "2",
            "3",
            "4",
            "5",
            "big"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "3\\\\n4\\\\n5\\\\n"
          }
        ]
      },
    {
        "title": "シンボルを使おう",
        "description": "Rubyの軽量な識別子「シンボル」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "シンボルとは？",
            "content": "# 軽量（けいりょう）な名前\\\\n\\\\n**シンボル** は `:名前` のように **コロン（:）** をつけて表す特別（とくべつ）な名前です。\\\\n\\\\n**身近（みぢか）な例（れい）：**\\\\n- ロッカーの「番号札（ばんごうふだ）」のようなもの\\\\n- 「123番」という札は、何度使っても同じ「123番」\\\\n\\\\n**文字列との違（ちが）い：**\\\\n- 文字列 `'name'` → 使うたびに新しく作られる\\\\n- シンボル `:name` → 1つだけ存在（そんざい）し、使い回（まわ）される\\\\n\\\\nシンボルは **変わらない名前** として使うのに最適（さいてき）です。"
          },
          {
            "title": "シンボルの使い方",
            "content": "# ハッシュのキーに最適（さいてき）\\\\n\\\\nシンボルは同じ名前なら同じものを指すため、コンピュータのメモリ効率（こうりつ）が良いです。\\\\n\\\\n**コード例：**\\\\n```ruby\\\\nperson = { name: 'Taro', age: 20 }\\\\nputs person[:name]  # => Taro\\\\n```\\\\n\\\\n**何をしているの？**\\\\n1. `{ name: 'Taro' }` → シンボル `:name` をキーにして「Taro」を保存\\\\n2. `person[:name]` → シンボル `:name` で値を取り出す\\\\n\\\\n**短い書き方：**\\\\n- `{ :name => 'Taro' }` と `{ name: 'Taro' }` は同じ意味\\\\n- 後者（こうしゃ）の方がRubyらしい書き方です"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# itemにハッシュを代入\\\nitem = { name: 'りんご', price: 100 }\\\n# :でシンボルを指定してアクセス\\\nputs item[:price]",
        "holeyCode": "# itemにハッシュを代入\\\nitem = { name: 'りんご', price: ___ }\\\n# :でシンボルを指定してアクセス\\\nputs item[:___]",
        "correctLines": [
          "# itemにハッシュを代入",
          "item = { name: 'りんご', price: 100 }",
          "# :でシンボルを指定してアクセス",
          "puts item[:price]"
        ],
        "lineHints": [
          null,
          "シンボルをキーにしたハッシュです。",
          null,
          ": でシンボルを指定してアクセスします。"
        ],
        "candidates": {
          "operators": [
            ":"
          ],
          "others": ["Apple", "100", "price"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "100\\\\n"
          }
        ]
      },
    {
        "title": "クラスを定義しよう",
        "description": "オブジェクトの設計図「クラス」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "クラスとは？",
            "content": "# オブジェクトの設計図（せっけいず）\\\\n\\\\n**クラス** は、データと機能（きのう）をまとめた **設計図** です。\\\\n\\\\n**身近（みぢか）な例（れい）：**\\\\n- たい焼き（やき）の「型（かた）」のようなもの\\\\n- 型（クラス）があれば、何個でも同じ形のたい焼き（オブジェクト）が作れる\\\\n\\\\n**クラスの役割（やくわり）：**\\\\n- どんなデータを持つか決める（名前、年齢など）\\\\n- どんな動きができるか決める（歩く、話すなど）\\\\n\\\\n`class` キーワードで定義（ていぎ）します。"
          },
          {
            "title": "initialize（イニシャライズ）メソッド",
            "content": "# コンストラクタ（初期化メソッド）\\\\n\\\\n`initialize` は、オブジェクトが作られたときに **自動で呼ばれる** 特別なメソッドです。\\\\n\\\\n**コード例：**\\\\n```ruby\\\\nclass Dog\\\\n  def initialize(name)\\\\n    @name = name\\\\n  end\\\\nend\\\\n```\\\\n\\\\n**何をしているの？**\\\\n1. `class Dog` → Dogという名前のクラスを作る\\\\n2. `def initialize(name)` → 作成時に自動で呼ばれるメソッド\\\\n3. `@name = name` → 渡された名前を保存（ほぞん）\\\\n\\\\n**`@`（アットマーク）とは？**\\\\n- `@` で始まる変数を **インスタンス変数（へんすう）** と呼ぶ\\\\n- そのオブジェクト専用（せんよう）のデータを保存する場所\\\\n- クラスの中のどこからでもアクセスできる"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# classでクラスを定義\\\nclass Cat\\\n  # initializeを定義\\\n  def initialize(name)\\\n    # @nameに代入\\\n    @name = name\\\n  # endで終了\\\n  end\\\n  # greetを定義\\\n  def greet\\\n    # @nameを出力\\\n    puts @name\\\n  # endで終了\\\n  end\\\n# endで終了\\\nend\\\n# catにインスタンスを代入\\\ncat = Cat.new('タマ')\\\n# greetを呼び出し\\\ncat.greet",
        "holeyCode": "# classでクラスを定義\\\\nclass ___\\\\n  # initializeを定義\\\\n  def initialize(___)\\\\n    # @nameに代入\\\\n    @___ = name\\\\n  # endで終了\\\\n  ___\\\\n  # greetを定義\\\\n  def ___\\\\n    # @nameを出力\\\\n    puts @___\\\\n  # endで終了\\\\n  ___\\\\n# endで終了\\\\n___\\\\n# catにインスタンスを代入\\\\ncat = Cat.new('___')\\\\n# greetを呼び出し\\\\ncat.___",
        "correctLines": [
          "# classでクラスを定義",
          "class Cat",
          "  # initializeを定義",
          "  def initialize(name)",
          "    # @nameに代入",
          "    @name = name",
          "  # endで終了",
          "  end",
          "  # greetを定義",
          "  def greet",
          "    # @nameを出力",
          "    puts @name",
          "  # endで終了",
          "  end",
          "# endで終了",
          "end",
          "# catにインスタンスを代入",
          "cat = Cat.new('タマ')",
          "# greetを呼び出し",
          "cat.greet"
        ],
        "lineHints": [
          null,
          "新しいクラス（Cat）を定義します。",
          null,
          "関数（initialize）を新しく定義します。",
          null,
          "@name はインスタンス変数です。",
          null,
          "new でインスタンスを作成します。",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "class"
          ],
          "others": ["initialize", "name", "end", "greet", "@name", "new", "Cat", "Tama"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Tama\\\\n"
          }
        ]
      },
    {
        "title": "アクセサを使おう",
        "description": "インスタンス変数への自動アクセスを提供する「アクセサ」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "attr_accessor（アトリビュート・アクセサ）とは？",
            "content": "# 自動でメソッドを作成\\\\n\\\\n`attr_accessor` は、インスタンス変数（へんすう）の **読み書き用メソッドを自動で作ってくれる** 便利（べんり）な機能です。\\\\n\\\\n**身近（みぢか）な例（れい）：**\\\\n- 手紙を「出す」「受け取る」窓口（まどぐち）を自動で作るイメージ\\\\n- いちいち窓口を作らなくても、一行書くだけでOK\\\\n\\\\n**attr = attribute（属性・データ）** の略（りゃく）です。"
          },
          {
            "title": "アクセサの種類（しゅるい）",
            "content": "# 3種類のアクセサ\\\\n\\\\n**用途（ようと）に合わせて選べます：**\\\\n\\\\n| 種類 | 読み取り | 書き込み | 説明 |\\\\n|------|---------|---------|------|\\\\n| `attr_reader` | できる | できない | データを見るだけ |\\\\n| `attr_writer` | できない | できる | データを書くだけ |\\\\n| `attr_accessor` | できる | できる | 読み書き両方OK |\\\\n\\\\n**コード例：**\\\\n```ruby\\\\nclass Person\\\\n  attr_accessor :name\\\\nend\\\\n\\\\nperson = Person.new\\\\nperson.name = 'Taro'  # 書き込み\\\\nputs person.name      # 読み取り → Taro\\\\n```\\\\n\\\\n**手動（しゅどう）で書くと長くなるコードを、一行で済（す）ませられます。**"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# classでクラスを定義\\\\nclass Item\\\\n  # attr_accessorで読み書き可能に\\\\n  attr_accessor :price\\\\n# endで終了\\\\nend\\\\n# itemにインスタンスを代入\\\\nitem = Item.new\\\\n# priceに値を代入\\\\nitem.price = 200\\\\n# priceを出力\\\\nputs item.price",
        "holeyCode": "# classでクラスを定義\\\\nclass ___\\\\n  # attr_accessorで読み書き可能に\\\\n  attr_accessor :___\\\\n# endで終了\\\\n___\\\\n# itemにインスタンスを代入\\\\nitem = Item.___\\\\n# priceに値を代入\\\\nitem.price = ___\\\\n# priceを出力\\\\nputs item.___",
        "correctLines": [
          "# classでクラスを定義",
          "class Item",
          "  # attr_accessorで読み書き可能に",
          "  attr_accessor :price",
          "# endで終了",
          "end",
          "# itemにインスタンスを代入",
          "item = Item.new",
          "# priceに値を代入",
          "item.price = 200",
          "# priceを出力",
          "puts item.price"
        ],
        "lineHints": [
          null,
          "attr_accessor で読み書き可能にします。",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "attr_accessor"
          ],
          "others": ["class", "end", "new", "200", "price", "Item"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "200\\\\n"
          }
        ]
      },
    {
        "title": "継承を学ぼう",
        "description": "既存のクラスを拡張する「継承」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 7,
        "tutorialSlides": [
          {
            "title": "継承（けいしょう）とは？",
            "content": "# クラスの拡張（かくちょう）\\\\n\\\\n**継承（けいしょう）** を使うと、親（おや）クラスの機能（きのう）を引き継（つ）いだ子クラスを作れます。\\\\n\\\\n**身近（みぢか）な例（れい）：**\\\\n- 「動物（どうぶつ）」という親クラス（歩く、食べるができる）\\\\n- 「犬」という子クラス（動物の機能 + 吠（ほ）えるができる）\\\\n- 「猫」という子クラス（動物の機能 + ニャーと鳴（な）くができる）\\\\n\\\\n親クラスの機能をそのまま使えて、さらに **新しい機能を追加（ついか）** できます。"
          },
          {
            "title": "継承の書き方",
            "content": "# < で継承（けいしょう）する\\\\n\\\\n`<`（小なり記号）を使って親クラスを指定（してい）します。\\\\n\\\\n**コード例：**\\\\n```ruby\\\\nclass Animal\\\\n  def speak\\\\n    puts 'sound'\\\\n  end\\\\nend\\\\n\\\\nclass Dog < Animal\\\\nend\\\\n\\\\ndog = Dog.new\\\\ndog.speak  # => sound（親のメソッドが使える！）\\\\n```\\\\n\\\\n**何が起こるの？**\\\\n1. `Animal` クラスに `speak` メソッドがある\\\\n2. `Dog < Animal` → DogはAnimalを継承\\\\n3. Dogは自分で `speak` を作らなくても、Animalの `speak` が使える\\\\n\\\\n**子クラスは親クラスの機能を全部受け継（う）ぎます。**"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# classでクラスを定義\\\nclass Vehicle\\\n  # moveを定義\\\n  def move\\\n    # movingを出力\\\n    puts '移動中'\\\n  # endで終了\\\n  end\\\n# endで終了\\\nend\\\n# <で親クラスを継承\\\nclass Car < Vehicle\\\n# endで終了\\\nend\\\n# carにインスタンスを代入\\\ncar = Car.new\\\n# moveを呼び出し\\\ncar.move",
        "holeyCode": "# classでクラスを定義\\\\nclass ___\\\\n  # moveを定義\\\\n  def ___\\\\n    # movingを出力\\\\n    puts '___'\\\\n  # endで終了\\\\n  ___\\\\n# endで終了\\\\n___\\\\n# <で親クラスを継承\\\\nclass ___ < Vehicle\\\\n# endで終了\\\\n___\\\\n# carにインスタンスを代入\\\\ncar = Car.___\\\\n# moveを呼び出し\\\\ncar.___",
        "correctLines": [
          "# classでクラスを定義",
          "class Vehicle",
          "  # moveを定義",
          "  def move",
          "    # movingを出力",
          "    puts '移動中'",
          "  # endで終了",
          "  end",
          "# endで終了",
          "end",
          "# <で親クラスを継承",
          "class Car < Vehicle",
          "# endで終了",
          "end",
          "# carにインスタンスを代入",
          "car = Car.new",
          "# moveを呼び出し",
          "car.move"
        ],
        "lineHints": [
          null,
          "新しいクラス（Car）を定義します。",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "operators": [
            "<"
          ],
          "others": ["class", "move", "moving", "end", "new", "Vehicle", "Car"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "moving\\\\n"
          }
        ]
      },
    {
        "title": "モジュールで機能を追加",
        "description": "機能を共有する「モジュール」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "モジュールとは？",
            "content": "# 機能（きのう）の入れ物\\\\n\\\\n**モジュール** は、メソッドをまとめた **入れ物** です。\\\\n\\\\n**身近（みぢか）な例（れい）：**\\\\n- 「泳（およ）げる」という能力（のうりょく）セット\\\\n- 人間でも、犬でも、「泳げる」を持たせたい\\\\n- モジュールで「泳げる」を作っておけば、どのクラスにも追加（ついか）できる\\\\n\\\\n**クラスとの違（ちが）い：**\\\\n- クラス → オブジェクトを作れる（設計図）\\\\n- モジュール → メソッドの集まり（部品セット）、オブジェクトは作れない\\\\n\\\\n複数（ふくすう）のクラスで同じ機能を使いたいときに便利です。"
          },
          {
            "title": "include でミックスイン",
            "content": "# モジュールを取り込む\\\\n\\\\nクラス内で `include モジュール名` と書くと、そのモジュールのメソッドが使えるようになります。これを **ミックスイン** と呼びます。\\\\n\\\\n**コード例：**\\\\n```ruby\\\\nmodule Greet\\\\n  def hello\\\\n    puts 'hello'\\\\n  end\\\\nend\\\\n\\\\nclass Person\\\\n  include Greet\\\\nend\\\\n\\\\nperson = Person.new\\\\nperson.hello  # => hello\\\\n```\\\\n\\\\n**何が起こるの？**\\\\n1. `Greet` モジュールに `hello` メソッドがある\\\\n2. `include Greet` → PersonクラスにGreetを取り込む\\\\n3. Personのインスタンスで `hello` が使えるようになる\\\\n\\\\n**継承は1つのクラスからだけ**ですが、**モジュールは複数（ふくすう）取り込める**ので柔軟（じゅうなん）です。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# moduleでモジュールを定義\\\\nmodule Speakable\\\\n  # speakを定義\\\\n  def speak\\\\n    # speakingを出力\\\\n    puts 'speaking'\\\\n  # endで終了\\\\n  end\\\\n# endで終了\\\\nend\\\\n# classでクラスを定義\\\\nclass Robot\\\\n  # includeでモジュールを取り込み\\\\n  include Speakable\\\\n# endで終了\\\\nend\\\\n# robotにインスタンスを代入\\\\nrobot = Robot.new\\\\n# speakを呼び出し\\\\nrobot.speak",
        "holeyCode": "# moduleでモジュールを定義\\\\nmodule ___\\\\n  # speakを定義\\\\n  def ___\\\\n    # speakingを出力\\\\n    puts '___'\\\\n  # endで終了\\\\n  ___\\\\n# endで終了\\\\n___\\\\n# classでクラスを定義\\\\nclass ___\\\\n  # includeでモジュールを取り込み\\\\n  include ___\\\\n# endで終了\\\\n___\\\\n# robotにインスタンスを代入\\\\nrobot = Robot.___\\\\n# speakを呼び出し\\\\nrobot.___",
        "correctLines": [
          "# moduleでモジュールを定義",
          "module Speakable",
          "  # speakを定義",
          "  def speak",
          "    # speakingを出力",
          "    puts 'speaking'",
          "  # endで終了",
          "  end",
          "# endで終了",
          "end",
          "# classでクラスを定義",
          "class Robot",
          "  # includeでモジュールを取り込み",
          "  include Speakable",
          "# endで終了",
          "end",
          "# robotにインスタンスを代入",
          "robot = Robot.new",
          "# speakを呼び出し",
          "robot.speak"
        ],
        "lineHints": [
          null,
          "module でモジュールを定義します。",
          null,
          "include でモジュールを取り込みます。",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "module"
          ],
          "others": ["speak", "speaking", "end", "class", "Speakable", "new", "Robot"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "speaking\\\\n"
          }
        ]
      },
    {
        "title": "例外処理 begin-rescue",
        "description": "エラーを捕まえる「例外処理」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 9,
        "tutorialSlides": [
          {
            "title": "例外処理（れいがいしょり）とは？",
            "content": "# エラーに対処（たいしょ）する\\\\n\\\\n**例外処理（れいがいしょり）** を使うと、エラーが起きてもプログラムを止（と）めずに対処できます。\\\\n\\\\n**身近（みぢか）な例（れい）：**\\\\n- サーカスの空中ブランコの下にある「安全（あんぜん）ネット」\\\\n- 落ちても（エラーが起きても）ケガをしない（プログラムが止まらない）\\\\n\\\\n**どんなときに使う？**\\\\n- ファイルが見つからないかもしれないとき\\\\n- インターネットにつながらないかもしれないとき\\\\n- ユーザーが変（へん）な入力をするかもしれないとき"
          },
          {
            "title": "begin-rescue（ビギン・レスキュー）",
            "content": "# エラーを捕（つか）まえる\\\\n\\\\n`begin` ブロックでエラーが起きると、`rescue` ブロックが実行（じっこう）されます。\\\\n\\\\n**コード例：**\\\\n```ruby\\\\nbegin\\\\n  1 / 0  # ゼロで割るとエラー！\\\\nrescue => e\\\\n  puts 'Error!'\\\\nend\\\\n```\\\\n\\\\n**何が起こるの？**\\\\n1. `begin` の中の処理を試（ため）す\\\\n2. `1 / 0` → ゼロで割れない！エラー発生（はっせい）！\\\\n3. `rescue` に飛（と）ぶ（エラーをキャッチ）\\\\n4. 「Error!」と表示される\\\\n5. プログラムは止まらずに続く\\\\n\\\\n**`=> e` とは？**\\\\n- エラーの情報（じょうほう）を変数 `e` に入れる\\\\n- `e.message` でエラーメッセージを見られる"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# beginで開始\\\\nbegin\\\\n  # raiseでエラーを発生\\\\n  raise 'oops'\\\\n# rescueで例外を捕捉\\\\nrescue => e\\\\n  # caughtを出力\\\\n  puts 'caught'\\\\n# endで終了\\\\nend",
        "holeyCode": "# beginで開始\\\\n___\\\\n  # raiseでエラーを発生\\\\n  raise '___'\\\\n# rescueで例外を捕捉\\\\nrescue => ___\\\\n  # caughtを出力\\\\n  puts '___'\\\\n# endで終了\\\\n___",
        "correctLines": [
          "# beginで開始",
          "begin",
          "  # raiseでエラーを発生",
          "  raise 'oops'",
          "# rescueで例外を捕捉",
          "rescue => e",
          "  # caughtを出力",
          "  puts 'caught'",
          "# endで終了",
          "end"
        ],
        "lineHints": [
          null,
          "raise でエラーを発生させます。",
          null,
          "rescue でエラーを捕まえます。",
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "rescue"
          ],
          "others": ["begin", "oops", "caught", "end", "e"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "caught\\\\n"
          }
        ]
      },
    {
        "title": "ラムダを使おう",
        "description": "名前のない関数「ラムダ」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 10,
        "tutorialSlides": [
          {
            "title": "ラムダとは？",
            "content": "# 無名関数（むめいかんすう）\\\\n\\\\n**ラムダ** は、**名前をつけずに定義（ていぎ）する関数** です。\\\\n\\\\n**身近（みぢか）な例（れい）：**\\\\n- 普通（ふつう）のメソッドは「お店の名前付き商品」\\\\n- ラムダは「その場で作る手作り品」\\\\n- 一度だけ使いたい処理をパッと作れる\\\\n\\\\n**ラムダの作り方：**\\\\n- `->` （矢印）を使う方法\\\\n- `lambda` キーワードを使う方法\\\\n\\\\n変数に入れておけば、何度でも呼び出せます。"
          },
          {
            "title": "ラムダの使い方",
            "content": "# -> で定義（ていぎ）\\\\n\\\\n`->` の後に引数を書き、`{ }` の中に処理を書きます。`.call` で実行します。\\\\n\\\\n**コード例：**\\\\n```ruby\\\\nadd = ->(a, b) { a + b }\\\\nputs add.call(2, 3)  # => 5\\\\n```\\\\n\\\\n**何をしているの？**\\\\n1. `->(a, b) { a + b }` → 「2つの数を足す」というラムダを作る\\\\n2. `add` という変数に入れる\\\\n3. `add.call(2, 3)` → 2と3を渡して実行\\\\n4. 結果（けっか）は5\\\\n\\\\n**call が必要な理由：**\\\\n- ラムダは「処理の入れ物」なので、実行するには「呼び出す（call）」必要がある\\\\n- メソッドと違って、名前だけでは動かない"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# ->でラムダを定義\\\\ndouble = ->(n) { n * 2 }\\\\n# callで実行\\\\nputs double.call(5)",
        "holeyCode": "# ->でラムダを定義\\\\ndouble = ->(n) { n * ___ }\\\\n# callで実行\\\\nputs double.call(___)",
        "correctLines": [
          "# ->でラムダを定義",
          "double = ->(n) { n * 2 }",
          "# callで実行",
          "puts double.call(5)"
        ],
        "lineHints": [
          null,
          "-> でラムダを定義します。",
          null,
          "call で実行します。"
        ],
        "candidates": {
          "operators": [
            "->"
          ],
          "others": ["call", "2", "5"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\\\n"
          }
        ]
      }
  ]
}

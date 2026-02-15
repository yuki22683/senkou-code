export const ruby2Data = {
  "language": "ruby",
  "lessonId": "ruby-2",
  "lessonTitle": "Ruby II - ブロックとオブジェクト指向",
  "lessonDescription": "Rubyの強力な機能「ブロック」と「クラス」を学びます。Rubyらしいエレガントなコードを書く力を身につけましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "tutorialSlides": [
    {
      "title": "ブロックとは",
      "content": "**ブロック**はコードの塊をメソッドに渡す仕組みです。\\n\\n```ruby\\n# do...end形式\\nnums.each do |n|\\n  puts n\\nend\\n\\n# { }形式（1行向け）\\nnums.each { |n| puts n }\\n```\\n\\n`|n|` の `n` はブロック引数と呼ばれ、各要素を受け取ります。"
    },
    {
      "title": "map と select",
      "content": "`map` は各要素を変換し、`select` は条件に合う要素を抽出します。\\n\\n```ruby\\nnums = [1, 2, 3, 4, 5]\\n\\n# map: 各要素を2倍に変換\\ndoubled = nums.map { |n| n * 2 }\\n```\\n\\n=> [2, 4, 6, 8, 10]\\n\\n```\\n# select: 3以上を抽出\\nbig = nums.select { |n| n >= 3 }\\n```\\n\\n=> [3, 4, 5]"
    },
    {
      "title": "シンボル",
      "content": "**シンボル**は `:名前` で表す識別子です。文字列より軽量で、ハッシュのキーによく使います。\\n\\n```ruby\\n# シンボルをキーにしたハッシュ\\nitem = { name: 'りんご', price: 100 }\\n\\nputs item[:name]\\nputs item[:price]\\n```\\n\\n=> りんご\\n\\n=> 100\\n\\n`name:` は `:name =>` の省略形です。"
    },
    {
      "title": "クラスの定義",
      "content": "`class` でオブジェクトの設計図を作ります。\\n\\n```ruby\\nclass Cat\\n  def initialize(name)\\n    @name = name  # インスタンス変数\\n  end\\n  \\n  def greet\\n    puts \"にゃー、#{@name}です\"\\n  end\\nend\\n\\ncat = Cat.new('タマ')\\ncat.greet\\n```\\n\\n=> にゃー、タマです\\n\\n`@name` は各インスタンスが持つ固有のデータです。"
    },
    {
      "title": "attr_accessor",
      "content": "`attr_accessor` でプロパティの読み書きを簡単に定義できます。\\n\\n```ruby\\nclass Item\\n  attr_accessor :price  # 読み書き可能\\n  attr_reader :name     # 読み取り専用\\nend\\n\\nitem = Item.new\\nitem.price = 200\\nputs item.price\\n```\\n\\n=> 200\\n\\n手動でゲッター/セッターを書く必要がなくなります。"
    },
    {
      "title": "継承とモジュール",
      "content": "`<` で親クラスを継承し、`include` でモジュールの機能を取り込みます。\\n\\n```ruby\\nclass Vehicle\\n  def move\\n    puts '移動中'\\n  end\\nend\\n\\nclass Car < Vehicle  # Vehicleを継承\\nend\\n\\nCar.new.move\\n```\\n\\n=> 移動中\\n\\nモジュールは複数のクラスで機能を共有する仕組みです。"
    }
  ],
  "exercises": [
    {
      "title": "ブロックを使おう - each",
      "description": "ブロックについて学びます",
      "tutorialSlides": [
        {
          "title": "ブロックとは？",
          "content": "# コードのかたまり\\n\\n**ブロック** は、メソッドに渡すコードのかたまりです。\\n\\n**身近な例：**\\n- 「この仕事をやってね」と、やることリストを渡すイメージ\\n- メソッドが「どうやるか」を知っていて、ブロックが「何をするか」を伝える\\n\\n**書き方は2種類：**\\n- `do...end` で囲む（長い処理向け）\\n- `{ }` で囲む（短い処理向け）\\n\\nこれはRubyの強力な機能です。"
        },
        {
          "title": "each（イーチ）メソッド",
          "content": "# 配列を順番に処理\\n\\n`each` は、配列の各要素を順番に処理します。\\n\\n**コード例：**\\n```ruby\\n[1, 2, 3].each do |n|\\n  puts n\\nend\\n```\\n\\n**何をしているの？**\\n1. `[1, 2, 3]` という配列がある\\n2. `each do |n|` → 配列から1つずつ取り出して `n` に入れる\\n3. `puts n` → 取り出した数字を表示\\n4. 1, 2, 3 の順に全部表示される\\n\\n**`|n|`（パイプで囲む）とは？**\\n- 取り出した1つのデータを受け取る「一時的なはこ」\\n- これを **ブロック変数** と呼びます"
        }
      ],
      "correctCode": "# numsに配列を代入（1, 2, 3）\\nnums = [1, 2, 3]\\n# eachで各要素を処理\\nnums.each do |n|\\n  # putsで出力\\n  puts n\\n# endで終了\\nend",
      "holeyCode": "# numsに配列を代入（1, 2, 3）\\n___ = [___, ___, ___]\\n# eachで各要素を処理\\n___.___ do |___|\\n  # putsで出力\\n  ___ ___\\n# endで終了\\n___",
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
          "puts で変数を出力します。",
          null,
          "ブロックを終了する。"
        ],
        "candidates": {
          "functions": [
            "each"
          ],
          "others": ["nums", "1", "2", "3", "n", "end", "puts"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n2\\n3\\n"
          }
        ]
      },
    {
      "title": "map で変換しよう",
      "description": "配列の全要素に同じ処理を適用する方法を学びます",
      "tutorialSlides": [
        {
          "title": "map（マップ）とは？",
          "content": "# 各要素を変換\\n\\n**map（マップ）** は、配列の各要素を変換して、**新しい配列を作る** メソッドです。\\n\\n**身近な例：**\\n- お菓子工場で、生地を型にはめてクッキーにする\\n- 入れたもの全部が同じ変換をされて出てくる\\n\\n**大事なポイント：**\\n- 元の配列は変わらない\\n- 変換された**新しい配列**が返ってくる"
        },
        {
          "title": "map の使い方",
          "content": "# 新しい配列を返す\\n\\nブロック `{ }` の中で「どう変換するか」を書きます。\\n\\n**コード例：**\\n```ruby\\n[1, 2, 3].map { |n| n * 2 }\\n```\\n\\n=> [2, 4, 6]\\n\\n**何が起こるの？**\\n1. `[1, 2, 3]` から1つずつ取り出す\\n2. 取り出した数を `n` に入れる\\n3. `n * 2` で2倍にする\\n4. 結果を新しい配列に入れる\\n5. 最終的に `[2, 4, 6]` という新しい配列ができる\\n\\n**each との違い：**\\n- `each` → 処理するだけ（結果を返さない）\\n- `map` → 変換した新しい配列を返す"
        }
      ],
      "correctCode": "# numsに配列を代入（1, 2, 3）\\nnums = [1, 2, 3]\\n# numsの各要素を2倍にしてdoubledに代入\\ndoubled = nums.map { |n| n * 2 }\\n# putsで出力\\nputs doubled",
      "holeyCode": "# numsに配列を代入（1, 2, 3）\\n___ = [___, ___, ___]\\n# numsの各要素を2倍にしてdoubledに代入\\n___ = ___.map { |___| ___ * ___ }\\n# putsで出力\\n___ ___",
      "correctLines": [
          "# numsに配列を代入（1, 2, 3）",
          "nums = [1, 2, 3]",
          "# numsの各要素を2倍にしてdoubledに代入",
          "doubled = nums.map { |n| n * 2 }",
          "# putsで出力",
          "puts doubled"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列を作成します。",
          null,
          "map で各要素を2倍にします。",
          null,
          "puts で変数を出力します。"
        ],
        "candidates": {
          "functions": [
            "map"
          ],
          "others": [
            "nums",
            "1",
            "2",
            "3",
            "doubled",
            "n",
            "puts"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "2\\n4\\n6\\n"
          }
        ]
      },
    {
      "title": "select で絞り込もう",
      "description": "条件に合う要素だけを抽出する方法を学びます",
      "tutorialSlides": [
        {
          "title": "select（セレクト）とは？",
          "content": "# 条件でフィルタ\\n\\n**select（セレクト）** は、条件を満たす要素だけを集めた新しい配列を作ります。\\n\\n**身近な例：**\\n- 果物の中から「赤いもの」だけを選ぶ\\n- テストの点数から「80点以上」だけを集める\\n\\n条件に合うものだけを **選別** するイメージです。"
        },
        {
          "title": "select の使い方",
          "content": "# 条件に合う要素を選ぶ\\n\\nブロック `{ }` の中で条件を書きます。条件に合うもの（`true` になるもの）だけが残ります。\\n\\n**コード例：**\\n```ruby\\n[1, 2, 3, 4, 5].select { |n| n > 3 }\\n```\\n\\n=> [4, 5]\\n\\n**何が起こるの？**\\n1. 配列から1つずつ取り出す（1, 2, 3, 4, 5）\\n2. `n > 3` → 3より大きいか確認\\n3. 1, 2, 3 → NG（条件に合わない）\\n4. 4, 5 → OK（条件に合う）→ 新しい配列へ\\n5. 結果：`[4, 5]` という配列ができる\\n\\n**map との違い：**\\n- `map` → 全部を変換する\\n- `select` → 条件に合うものだけを選ぶ"
        }
      ],
      "correctCode": "# numsに配列を代入（1, 2, 3, 4, 5）\\nnums = [1, 2, 3, 4, 5]\\n# selectで条件に合う要素を抽出\\nbig = nums.select { |n| n >= 3 }\\n# putsで出力\\nputs big",
      "holeyCode": "# numsに配列を代入（1, 2, 3, 4, 5）\\n___ = [___, ___, ___, ___, ___]\\n# selectで条件に合う要素を抽出\\n___ = ___.select { |___| ___ >= ___ }\\n# putsで出力\\n___ ___",
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
          "配列を複数の値で初期化します。",
          null,
          "select で 3 以上の要素を抽出します。",
          null,
          "puts で変数を出力します。"
        ],
        "candidates": {
          "functions": [
            "select"
          ],
          "others": [
            "nums",
            "1",
            "2",
            "3",
            "4",
            "5",
            "big",
            "n",
            "puts"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "3\\n4\\n5\\n"
          }
        ]
      },
    {
      "title": "シンボルを使おう",
      "description": "シンボルについて学びます",
      "tutorialSlides": [
        {
          "title": "シンボルとは？",
          "content": "# 軽量な名前\\n\\n**シンボル** は `:名前` のように **コロン（:）** をつけて表す特別な名前です。\\n\\n**身近な例：**\\n- ロッカーの「番号札」のようなもの\\n- 「123番」という札は、何度使っても同じ「123番」\\n\\n**文字列との違い：**\\n- 文字列 `'name'` → 使うたびに新しく作られる\\n- シンボル `:name` → 1つだけ存在し、使い回される\\n\\nシンボルは **変わらない名前** として使うのに最適です。"
        },
        {
          "title": "シンボルの使い方",
          "content": "# ハッシュのキーに最適\\n\\nシンボルは同じ名前なら同じものを指すため、コンピュータのメモリ効率が良いです。\\n\\n**コード例：**\\n```ruby\\nperson = { name: 'Taro', age: 20 }\\nputs person[:name]\\n```\\n\\n=> Taro\\n\\n**何をしているの？**\\n1. `{ name: 'Taro' }` → シンボル `:name` をキーにして「Taro」を保存\\n2. `person[:name]` → シンボル `:name` で値を取り出す\\n\\n**短い書き方：**\\n- `{ :name => 'Taro' }` と `{ name: 'Taro' }` は同じ意味\\n- 後者の方がRubyらしい書き方です"
        }
      ],
      "correctCode": "# itemにハッシュを代入\\nitem = { name: 'りんご', price: 100 }\\n# :でシンボルを指定してアクセス\\nputs item[:price]",
      "holeyCode": "# itemにハッシュを代入\\n___ = { ___: '___', ___: ___ }\\n# :でシンボルを指定してアクセス\\n___ ___[:___]",
      "correctLines": [
          "# itemにハッシュを代入",
          "item = { name: 'りんご', price: 100 }",
          "# :でシンボルを指定してアクセス",
          "puts item[:price]"
        ],
      "lineHints": [
          null,
          "シンボルをキーにしたハッシュを作成します。",
          null,
          ": でシンボルを指定してアクセスします。"
        ],
        "candidates": {
          "operators": [
            ":"
          ],
          "others": ["item", "name", "りんご", "price", "100", "puts"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "100\\n"
          }
        ]
      },
    {
      "title": "クラスを定義しよう",
      "description": "クラスを定義しようの仕組みを理解します",
      "tutorialSlides": [
        {
          "title": "クラスとは？",
          "content": "# オブジェクトの設計図\\n\\n**クラス** は、データと機能をまとめた **設計図** です。\\n\\n**身近な例：**\\n- たい焼き（やき）の「型」のようなもの\\n- 型（クラス）があれば、何個でも同じ形のたい焼き（オブジェクト）が作れる\\n\\n**クラスの役割：**\\n- どんなデータを持つか決める（名前、年齢など）\\n- どんな動きができるか決める（歩く、話すなど）\\n\\n`class` キーワードで定義します。"
        },
        {
          "title": "initialize（イニシャライズ）メソッド",
          "content": "# コンストラクタ（初期化メソッド）\\n\\n`initialize` は、オブジェクトが作られたときに **自動で呼ばれる** 特別なメソッドです。\\n\\n**コード例：**\\n```ruby\\nclass Dog\\n  def initialize(name)\\n    @name = name\\n  end\\nend\\n```\\n\\n**何をしているの？**\\n1. `class Dog` → Dogという名前のクラスを作る\\n2. `def initialize(name)` → 作成時に自動で呼ばれるメソッド\\n3. `@name = name` → 渡された名前を保存\\n\\n**`@`（アットマーク）とは？**\\n- `@` で始まる変数を **インスタンス変数** と呼ぶ\\n- そのオブジェクト専用のデータを保存する場所\\n- クラスの中のどこからでもアクセスできる"
        }
      ],
      "correctCode": "# classでCatクラスを定義\\nclass Cat\\n  # initializeを定義\\n  def initialize(name)\\n    # @nameに代入\\n    @name = name\\n  # endで終了\\n  end\\n  # greetを定義\\n  def greet\\n    # @nameを出力\\n    puts @name\\n  # endで終了\\n  end\\n# endで終了\\nend\\n# catにインスタンスを代入\\ncat = Cat.new('タマ')\\n# greetメソッドを呼び出す\\ncat.greet",
      "holeyCode": "# classでCatクラスを定義\\nclass ___\\n  # initializeを定義\\n  def ___(___) \\n    # @nameに代入\\n    @___ = ___\\n  # endで終了\\n  ___\\n  # greetを定義\\n  def ___\\n    # @nameを出力\\n    ___ @___\\n  # endで終了\\n  ___\\n# endで終了\\n___\\n# catにインスタンスを代入\\n___ = ___.___(___) \\n# greetメソッドを呼び出す\\n___.___",
      "correctLines": [
          "# classでCatクラスを定義",
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
          "# greetメソッドを呼び出す",
          "cat.greet"
        ],
      "lineHints": [
          null,
          "新しいクラス（Cat）を定義します。",
          null,
          "initialize メソッドを定義します。",
          null,
          "@name はインスタンス変数です。",
          null,
          "ブロックを終了する。",
          null,
          "greet メソッドを定義します。",
          null,
          "puts で @name を出力します。",
          null,
          "ブロックを終了する。",
          null,
          "ブロックを終了する。",
          null,
          "Cat.newでCatクラスのインスタンスを作成します。",
          null,
          "catオブジェクトのgreetメソッドを実行します。"
        ],
        "candidates": {
          "keywords": [
            "class"
          ],
          "others": ["Cat", "initialize", "name", "end", "greet", "puts", "new", "'タマ'", "cat"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "タマ\\n"
          }
        ]
      },
    {
      "title": "アクセサを使おう",
      "description": "アクセサを使おうの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "attr_accessor（アトリビュート・アクセサ）とは？",
          "content": "# 自動でメソッドを作成\\n\\n`attr_accessor` は、インスタンス変数の **読み書き用メソッドを自動で作ってくれる** 便利な機能です。\\n\\n**身近な例：**\\n- 手紙を「出す」「受け取る」窓口を自動で作るイメージ\\n- いちいち窓口を作らなくても、一行書くだけでOK\\n\\n**attr = attribute（属性・データ）** の略です。"
        },
        {
          "title": "アクセサの種類",
          "content": "# 3種類のアクセサ\\n\\n**用途に合わせて選べます：**\\n\\n| 種類 | 読み取り | 書き込み | 説明 |\\n|------|---------|---------|------|\\n| `attr_reader` | できる | できない | データを見るだけ |\\n| `attr_writer` | できない | できる | データを書くだけ |\\n| `attr_accessor` | できる | できる | 読み書き両方OK |\\n\\n**コード例：**\\n```ruby\\nclass Person\\n  attr_accessor :name\\nend\\n\\nperson = Person.new\\nperson.name = 'Taro'  # 書き込み\\nputs person.name      # 読み取り → Taro\\n```\\n\\n**手動で書くと長くなるコードを、一行で済ませられます。**"
        }
      ],
      "correctCode": "# classでItemクラスを定義\\nclass Item\\n  # attr_accessorで読み書き可能に\\n  attr_accessor :price\\n# endで終了\\nend\\n# itemにインスタンスを代入\\nitem = Item.new\\n# priceに値を代入\\nitem.price = 200\\n# priceを出力\\nputs item.price",
      "holeyCode": "# classでItemクラスを定義\\nclass ___\\n  # attr_accessorで読み書き可能に\\n  ___ :___\\n# endで終了\\n___\\n# itemにインスタンスを代入\\n___ = ___.___\\n# priceに値を代入\\n___.___ = ___\\n# priceを出力\\n___ ___.___ ",
      "correctLines": [
          "# classでItemクラスを定義",
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
          "Item クラスを定義します。",
          null,
          "attr_accessor で読み書き可能にします。",
          null,
          "ブロックを終了する。",
          null,
          "Item.newでItemクラスのインスタンスを作成します。",
          null,
          "price プロパティに値を代入します。",
          null,
          "puts で price を出力します。"
        ],
        "candidates": {
          "keywords": [
            "attr_accessor"
          ],
          "others": ["Item", "price", "end", "item", "new", "200", "puts"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "200\\n"
          }
        ]
      },
    {
      "title": "継承を学ぼう",
      "description": "継承について学びます",
      "tutorialSlides": [
        {
          "title": "継承とは？",
          "content": "# クラスの拡張\\n\\n**継承** を使うと、親クラスの機能を引き継いだ子クラスを作れます。\\n\\n**身近な例：**\\n- 「動物」という親クラス（歩く、食べるができる）\\n- 「犬」という子クラス（動物の機能 + 吠えるができる）\\n- 「猫」という子クラス（動物の機能 + ニャーと鳴くができる）\\n\\n親クラスの機能をそのまま使えて、さらに **新しい機能を追加** できます。"
        },
        {
          "title": "継承の書き方",
          "content": "# < で継承する\\n\\n`<`（小なり記号）を使って親クラスを指定します。\\n\\n**コード例：**\\n```ruby\\nclass Animal\\n  def speak\\n    puts 'sound'\\n  end\\nend\\n\\nclass Dog < Animal\\nend\\n\\ndog = Dog.new\\ndog.speak\\n```\\n\\n=> sound（親のメソッドが使える！）\\n\\n**何が起こるの？**\\n1. `Animal` クラスに `speak` メソッドがある\\n2. `Dog < Animal` → DogはAnimalを継承\\n3. Dogは自分で `speak` を作らなくても、Animalの `speak` が使える\\n\\n**子クラスは親クラスの機能を全部受け継ぎます。**"
        }
      ],
      "correctCode": "# classでVehicleクラスを定義\\nclass Vehicle\\n  # moveを定義\\n  def move\\n    # 「移動中」を出力\\n    puts '移動中'\\n  # endで終了\\n  end\\n# endで終了\\nend\\n# <で親クラスを継承\\nclass Car < Vehicle\\n# endで終了\\nend\\n# carにインスタンスを代入\\ncar = Car.new\\n# moveメソッドを呼び出す\\ncar.move",
      "holeyCode": "# classでVehicleクラスを定義\\nclass ___\\n  # moveを定義\\n  def ___\\n    # 「移動中」を出力\\n    ___ '___'\\n  # endで終了\\n  ___\\n# endで終了\\n___\\n# <で親クラスを継承\\nclass ___ < ___\\n# endで終了\\n___\\n# carにインスタンスを代入\\n___ = ___.___ \\n# moveメソッドを呼び出す\\n___.___",
      "correctLines": [
          "# classでVehicleクラスを定義",
          "class Vehicle",
          "  # moveを定義",
          "  def move",
          "    # 「移動中」を出力",
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
          "# moveメソッドを呼び出す",
          "car.move"
        ],
      "lineHints": [
          null,
          "Vehicle クラスを定義します。",
          null,
          "move メソッドを定義します。",
          null,
          "puts で文字列を出力します。",
          null,
          "ブロックを終了する。",
          null,
          "ブロックを終了する。",
          null,
          "< で Vehicle を継承した Car クラスを定義します。",
          null,
          "ブロックを終了する。",
          null,
          "Car.newでCarクラスのインスタンスを作成します。",
          null,
          "carオブジェクトのmoveメソッドを実行します。"
        ],
        "candidates": {
          "operators": [
            "<"
          ],
          "others": ["Vehicle", "move", "puts", "移動中", "end", "Car", "car", "new"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "移動中\\n"
          }
        ]
      },
    {
      "title": "モジュールで機能を追加",
      "description": "外部の機能を取り込んで使う方法を学びます",
      "tutorialSlides": [
        {
          "title": "モジュールとは？",
          "content": "# 機能の入れ物\\n\\n**モジュール** は、メソッドをまとめた **入れ物** です。\\n\\n**身近な例：**\\n- 「泳げる」という能力セット\\n- 人間でも、犬でも、「泳げる」を持たせたい\\n- モジュールで「泳げる」を作っておけば、どのクラスにも追加できる\\n\\n**クラスとの違い：**\\n- クラス → オブジェクトを作れる（設計図）\\n- モジュール → メソッドの集まり（部品セット）、オブジェクトは作れない\\n\\n複数のクラスで同じ機能を使いたいときに便利です。"
        },
        {
          "title": "include でミックスイン",
          "content": "# モジュールを取り込む\\n\\nクラス内で `include モジュール名` と書くと、そのモジュールのメソッドが使えるようになります。これを **ミックスイン** と呼びます。\\n\\n**コード例：**\\n```ruby\\nmodule Greet\\n  def hello\\n    puts 'hello'\\n  end\\nend\\n\\nclass Person\\n  include Greet\\nend\\n\\nperson = Person.new\\nperson.hello\\n```\\n\\n=> hello\\n\\n**何が起こるの？**\\n1. `Greet` モジュールに `hello` メソッドがある\\n2. `include Greet` → PersonクラスにGreetを取り込む\\n3. Personのインスタンスで `hello` が使えるようになる\\n\\n**継承は1つのクラスからだけ**ですが、**モジュールは複数取り込める**ので柔軟です。"
        }
      ],
      "correctCode": "# moduleでSpeakableモジュールを定義\\nmodule Speakable\\n  # speakを定義\\n  def speak\\n    # 「話し中」を出力\\n    puts '話し中'\\n  # endで終了\\n  end\\n# endで終了\\nend\\n# classでRobotクラスを定義\\nclass Robot\\n  # includeでモジュールを取り込み\\n  include Speakable\\n# endで終了\\nend\\n# robotにインスタンスを代入\\nrobot = Robot.new\\n# speakメソッドを呼び出す\\nrobot.speak",
      "holeyCode": "# moduleでSpeakableモジュールを定義\\nmodule ___\\n  # speakを定義\\n  def ___\\n    # 「話し中」を出力\\n    ___ '___'\\n  # endで終了\\n  ___\\n# endで終了\\n___\\n# classでRobotクラスを定義\\nclass ___\\n  # includeでモジュールを取り込み\\n  ___ ___\\n# endで終了\\n___\\n# robotにインスタンスを代入\\n___ = ___.___ \\n# speakメソッドを呼び出す\\n___.___",
      "correctLines": [
          "# moduleでSpeakableモジュールを定義",
          "module Speakable",
          "  # speakを定義",
          "  def speak",
          "    # 「話し中」を出力",
          "    puts '話し中'",
          "  # endで終了",
          "  end",
          "# endで終了",
          "end",
          "# classでRobotクラスを定義",
          "class Robot",
          "  # includeでモジュールを取り込み",
          "  include Speakable",
          "# endで終了",
          "end",
          "# robotにインスタンスを代入",
          "robot = Robot.new",
          "# speakメソッドを呼び出す",
          "robot.speak"
        ],
      "lineHints": [
          null,
          "Speakable モジュールを定義します。",
          null,
          "speak メソッドを定義します。",
          null,
          "puts で文字列を出力します。",
          null,
          "ブロックを終了する。",
          null,
          "ブロックを終了する。",
          null,
          "Robot クラスを定義します。",
          null,
          "include でモジュールを取り込みます。",
          null,
          "ブロックを終了する。",
          null,
          "Robot.newでRobotクラスのインスタンスを作成します。",
          null,
          "robotオブジェクトのspeakメソッドを実行します。"
        ],
        "candidates": {
          "keywords": [
            "module", "include"
          ],
          "others": ["Speakable", "speak", "puts", "話し中", "end", "Robot", "robot", "new"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "話し中\\n"
          }
        ]
      },
    {
      "title": "例外処理 begin-rescue",
      "description": "プログラムのエラーを適切に処理して、安全に動作させる方法を学びます",
      "tutorialSlides": [
        {
          "title": "例外処理とは？",
          "content": "# エラーに対処する\\n\\n**例外処理** を使うと、エラーが起きてもプログラムを止めずに対処できます。\\n\\n**身近な例：**\\n- サーカスの空中ブランコの下にある「安全ネット」\\n- 落ちても（エラーが起きても）ケガをしない（プログラムが止まらない）\\n\\n**どんなときに使う？**\\n- ファイルが見つからないかもしれないとき\\n- インターネットにつながらないかもしれないとき\\n- ユーザーが変な入力をするかもしれないとき"
        },
        {
          "title": "begin-rescue（ビギン・レスキュー）",
          "content": "# エラーを捕まえる\\n\\n`begin` ブロックでエラーが起きると、`rescue` ブロックが実行されます。\\n\\n**コード例：**\\n```ruby\\nbegin\\n  1 / 0  # ゼロで割るとエラー！\\nrescue => e\\n  puts 'Error!'\\nend\\n```\\n\\n**何が起こるの？**\\n1. `begin` の中の処理を試す\\n2. `1 / 0` → ゼロで割れない！エラー発生！\\n3. `rescue` に飛ぶ（エラーをキャッチ）\\n4. 「Error!」と表示される\\n5. プログラムは止まらずに続く\\n\\n**`=> e` とは？**\\n- エラーの情報を変数 `e` に入れる\\n- `e.message` でエラーメッセージを見られる"
        }
      ],
      "correctCode": "# beginで開始\\nbegin\\n  # raiseでエラーを発生\\n  raise 'おっと'\\n# rescueで例外を捕捉\\nrescue => e\\n  # 「キャッチ」を出力\\n  puts 'キャッチ'\\n# endで終了\\nend",
      "holeyCode": "# beginで開始\\n___\\n  # raiseでエラーを発生\\n  ___ '___'\\n# rescueで例外を捕捉\\n___ => ___\\n  # 「キャッチ」を出力\\n  ___ '___'\\n# endで終了\\n___",
      "correctLines": [
          "# beginで開始",
          "begin",
          "  # raiseでエラーを発生",
          "  raise 'おっと'",
          "# rescueで例外を捕捉",
          "rescue => e",
          "  # 「キャッチ」を出力",
          "  puts 'キャッチ'",
          "# endで終了",
          "end"
        ],
      "lineHints": [
          null,
          "begin で例外処理ブロックを開始します。",
          null,
          "raise でエラーを発生させます。",
          null,
          "rescue でエラーを捕まえます。",
          null,
          "puts で文字列を出力します。",
          null,
          "ブロックを終了する。"
        ],
        "candidates": {
          "keywords": [
            "rescue"
          ],
          "others": ["begin", "raise", "おっと", "e", "puts", "キャッチ", "end"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "キャッチ\\n"
          }
        ]
      },
    {
      "title": "ラムダを使おう",
      "description": "名前のない簡潔な関数を作る方法を学びます",
      "tutorialSlides": [
        {
          "title": "ラムダとは？",
          "content": "# 無名関数\\n\\n**ラムダ** は、**名前をつけずに定義する関数** です。\\n\\n**身近な例：**\\n- 普通のメソッドは「お店の名前付き商品」\\n- ラムダは「その場で作る手作り品」\\n- 一度だけ使いたい処理をパッと作れる\\n\\n**ラムダの作り方：**\\n- `->` （矢印）を使う方法\\n- `lambda` キーワードを使う方法\\n\\n変数に入れておけば、何度でも呼び出せます。"
        },
        {
          "title": "ラムダの使い方",
          "content": "# -> で定義\\n\\n`->` の後に引数を書き、`{ }` の中に処理を書きます。`.call` で実行します。\\n\\n**コード例：**\\n```ruby\\nadd = ->(a, b) { a + b }\\nputs add.call(2, 3)\\n```\\n\\n=> 5\\n\\n**何をしているの？**\\n1. `->(a, b) { a + b }` → 「2つの数を足す」というラムダを作る\\n2. `add` という変数に入れる\\n3. `add.call(2, 3)` → 2と3を渡して実行\\n4. 結果は5\\n\\n**call が必要な理由：**\\n- ラムダは「処理の入れ物」なので、実行するには「呼び出す（call）」必要がある\\n- メソッドと違って、名前だけでは動かない"
        }
      ],
      "correctCode": "# ->でラムダを定義\\ndouble = ->(n) { n * 2 }\\n# callで実行\\nputs double.call(5)",
      "holeyCode": "# ->でラムダを定義\\n___ = ->(___) { ___ * ___ }\\n# callで実行\\n___ ___.___(___)",
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
          "others": ["double", "n", "2", "puts", "call", "5"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      }
  ]
}

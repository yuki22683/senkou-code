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
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# コードのかたまり\n\n**ブロック** は、メソッドに渡すコードのかたまりです。`do...end` または `{ }` で囲みます。Rubyの強力な機能です。"
        },
        {
          "title": "each メソッド",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# 配列を順番に処理\n\n`each` は、配列の各要素を順番に処理します。`|変数|` で現在の要素を受け取ります。\n\n**コード例：**\n```ruby\n[1, 2, 3].each do |n|\n  puts n\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "nums = [1, 2, 3]\n# eachで各要素を処理\nnums.each do |n|\n  puts n\nend",
      "holeyCode": "# numsに配列を代入（1, 2, 3）\nnums = [___, ___, ___]\n# eachで各要素を処理\nnums.___ do |n|\n  # putsで出力\n  puts ___\n# endで終了\n___",
      "correctLines": [
        "nums = [1, 2, 3]",
        "nums.each do |n|",
        "  puts n",
        "end"
      ],
      "lineHints": [
        "配列を作成します。",
        "each で各要素を処理します。",
        "",
        ""
      ],
      "candidates": {
        "functions": ["each"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n2\n3\n"
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
          "title": "map とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 各要素を変換\n\n**map** は、配列の各要素を変換して新しい配列を作ります。元の配列は変わりません。"
        },
        {
          "title": "map の使い方",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 新しい配列を返す\n\nブロックの結果が新しい配列の要素になります。\n\n**コード例：**\n```ruby\n[1, 2, 3].map { |n| n * 2 }\n# => [2, 4, 6]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "nums = [1, 2, 3]\n# mapで各要素を変換\ndoubled = nums.map { |n| n * 2 }\nputs doubled",
      "holeyCode": "# numsに配列を代入（1, 2, 3）\nnums = [___, ___, ___]\n# mapで各要素を変換\ndoubled = nums.___ { |n| n * 2 }\n# putsで出力\nputs ___",
      "correctLines": [
        "nums = [1, 2, 3]",
        "doubled = nums.map { |n| n * 2 }",
        "puts doubled"
      ],
      "lineHints": [
        "",
        "map で各要素を2倍にします。",
        ""
      ],
      "candidates": {
        "functions": ["map"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "2\n4\n6\n"
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
          "title": "select とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 条件でフィルタ\n\n**select** は、条件を満たす要素だけを集めた新しい配列を作ります。"
        },
        {
          "title": "select の使い方",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 真になる要素を選ぶ\n\nブロックが真を返す要素だけが残ります。\n\n**コード例：**\n```ruby\n[1, 2, 3, 4, 5].select { |n| n > 3 }\n# => [4, 5]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "nums = [1, 2, 3, 4, 5]\n# selectで条件に合う要素を抽出\nbig = nums.select { |n| n >= 3 }\nputs big",
      "holeyCode": "# numsに配列を代入（1, 2, 3, 4, 5）\nnums = [___, ___, ___, ___, ___]\n# selectで条件に合う要素を抽出\nbig = nums.___ { |n| n >= 3 }\n# putsで出力\nputs ___",
      "correctLines": [
        "nums = [1, 2, 3, 4, 5]",
        "big = nums.select { |n| n >= 3 }",
        "puts big"
      ],
      "lineHints": [
        "",
        "select で 3 以上の要素を抽出します。",
        ""
      ],
      "candidates": {
        "functions": ["select"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "3\n4\n5\n"
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 軽量な名前\n\n**シンボル** は `:名前` で表す軽量な識別子です。文字列より効率的で、ハッシュのキーによく使います。"
        },
        {
          "title": "シンボルの使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# ハッシュのキーに最適\n\nシンボルは同じ名前なら同じオブジェクトを指すため、メモリ効率が良いです。\n\n**コード例：**\n```ruby\nperson = { name: 'Taro', age: 20 }\nputs person[:name] # Taro\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "item = { name: 'Apple', price: 100 }\n# :でシンボルを指定してアクセス\nputs item[:price]",
      "holeyCode": "# itemにハッシュを代入\nitem = { name: '___', price: ___ }\n# :でシンボルを指定してアクセス\nputs item[___price]",
      "correctLines": [
        "item = { name: 'Apple', price: 100 }",
        "puts item[:price]"
      ],
      "lineHints": [
        "シンボルをキーにしたハッシュです。",
        ": でシンボルを指定してアクセスします。"
      ],
      "candidates": {
        "operators": [":"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "100\n"
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
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# オブジェクトの設計図\n\n**クラス** は、データと機能をまとめた設計図です。`class` キーワードで定義します。"
        },
        {
          "title": "initialize メソッド",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# コンストラクタ\n\n`initialize` は、オブジェクト作成時に自動で呼ばれます。`@` で始まるのがインスタンス変数です。\n\n**コード例：**\n```ruby\nclass Dog\n  def initialize(name)\n    @name = name\n  end\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# classでクラスを定義\nclass Cat\n  def initialize(name)\n    @name = name\n  end\n  def greet\n    puts @name\n  end\nend\ncat = Cat.new('Tama')\ncat.greet",
      "holeyCode": "# classでクラスを定義\n___ Cat\n  # initializeを定義\n  def ___(name)\n    # @nameに代入\n    @name = ___\n  # endで終了\n  ___\n  # greetを定義\n  def ___\n    # @nameを出力\n    puts ___\n  # endで終了\n  ___\n# endで終了\n___\n# catにインスタンスを代入\ncat = Cat.___('Tama')\n# greetを呼び出し\ncat.___",
      "correctLines": [
        "class Cat",
        "  def initialize(name)",
        "    @name = name",
        "  end",
        "  def greet",
        "    puts @name",
        "  end",
        "end",
        "cat = Cat.new('Tama')",
        "cat.greet"
      ],
      "lineHints": [
        "class でクラスを定義します。",
        "コンストラクタです。",
        "@name はインスタンス変数です。",
        "",
        "",
        "",
        "",
        "",
        "new でインスタンスを作成します。",
        ""
      ],
      "candidates": {
        "keywords": ["class"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Tama\n"
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
          "title": "attr_accessor とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 自動でメソッドを作成\n\n`attr_accessor` は、インスタンス変数の読み書き用メソッドを自動で作ってくれます。"
        },
        {
          "title": "アクセサの種類",
          "image": "/illustrations/3d/robot.png",
          "content": "# 3種類のアクセサ\n\n- `attr_reader` : 読み取りのみ\n- `attr_writer` : 書き込みのみ\n- `attr_accessor` : 両方\n\n**コード例：**\n```ruby\nclass Person\n  attr_accessor :name\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Item\n  # attr_accessorで読み書き可能に\n  attr_accessor :price\nend\nitem = Item.new\nitem.price = 200\nputs item.price",
      "holeyCode": "# classでクラスを定義\n___ Item\n  # attr_accessorで読み書き可能に\n  ___ :price\n# endで終了\n___\n# itemにインスタンスを代入\nitem = Item.___\n# priceに値を代入\nitem.price = ___\n# priceを出力\nputs item.___",
      "correctLines": [
        "class Item",
        "  attr_accessor :price",
        "end",
        "item = Item.new",
        "item.price = 200",
        "puts item.price"
      ],
      "lineHints": [
        "",
        "attr_accessor で読み書き可能にします。",
        "",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["attr_accessor"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "200\n"
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
          "title": "継承とは？",
          "image": "/illustrations/3d_advanced/inheritance.png",
          "content": "# クラスの拡張\n\n**継承** を使うと、親クラスの機能を引き継いだ子クラスを作れます。`<` で親クラスを指定します。"
        },
        {
          "title": "継承の書き方",
          "image": "/illustrations/3d_advanced/inheritance.png",
          "content": "# < で継承\n\n子クラスは親クラスのメソッドを使えます。\n\n**コード例：**\n```ruby\nclass Animal\n  def speak\n    puts 'sound'\n  end\nend\nclass Dog < Animal\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Vehicle\n  def move\n    puts 'moving'\n  end\nend\n# <で親クラスを継承\nclass Car < Vehicle\nend\ncar = Car.new\ncar.move",
      "holeyCode": "# classでクラスを定義\n___ Vehicle\n  # moveを定義\n  def ___\n    # movingを出力\n    puts '___'\n  # endで終了\n  ___\n# endで終了\n___\n# <で親クラスを継承\nclass Car ___ Vehicle\n# endで終了\n___\n# carにインスタンスを代入\ncar = Car.___\n# moveを呼び出し\ncar.___",
      "correctLines": [
        "class Vehicle",
        "  def move",
        "    puts 'moving'",
        "  end",
        "end",
        "class Car < Vehicle",
        "end",
        "car = Car.new",
        "car.move"
      ],
      "lineHints": [
        "",
        "",
        "",
        "",
        "",
        "< で継承します。",
        "",
        "",
        ""
      ],
      "candidates": {
        "operators": ["<"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "moving\n"
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 機能の入れ物\n\n**モジュール** は、メソッドをまとめた入れ物です。`include` でクラスに取り込めます。多重継承の代わりに使います。"
        },
        {
          "title": "include でミックスイン",
          "image": "/illustrations/3d/robot.png",
          "content": "# モジュールを取り込む\n\nクラス内で `include モジュール名` と書きます。\n\n**コード例：**\n```ruby\nmodule Greet\n  def hello\n    puts 'hello'\n  end\nend\nclass Person\n  include Greet\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# moduleでモジュールを定義\nmodule Speakable\n  def speak\n    puts 'speaking'\n  end\nend\nclass Robot\n  include Speakable\nend\nrobot = Robot.new\nrobot.speak",
      "holeyCode": "# moduleでモジュールを定義\n___ Speakable\n  # speakを定義\n  def ___\n    # speakingを出力\n    puts '___'\n  # endで終了\n  ___\n# endで終了\n___\n# classでクラスを定義\n___ Robot\n  # includeでモジュールを取り込み\n  include ___\n# endで終了\n___\n# robotにインスタンスを代入\nrobot = Robot.___\n# speakを呼び出し\nrobot.___",
      "correctLines": [
        "module Speakable",
        "  def speak",
        "    puts 'speaking'",
        "  end",
        "end",
        "class Robot",
        "  include Speakable",
        "end",
        "robot = Robot.new",
        "robot.speak"
      ],
      "lineHints": [
        "module でモジュールを定義します。",
        "",
        "",
        "",
        "",
        "",
        "include でモジュールを取り込みます。",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["module"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "speaking\n"
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
          "title": "例外処理とは？",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# エラーに対処\n\n**例外処理** を使うと、エラーが起きてもプログラムを止めずに対処できます。`begin-rescue-end` を使います。"
        },
        {
          "title": "begin-rescue",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# エラーを捕まえる\n\n`begin` ブロックでエラーが起きると、`rescue` ブロックが実行されます。\n\n**コード例：**\n```ruby\nbegin\n  1 / 0\nrescue => e\n  puts 'Error!'\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "begin\n  raise 'oops'\n# rescueで例外を捕捉\nrescue => e\n  puts 'caught'\nend",
      "holeyCode": "# beginで開始\n___\n  # raiseでエラーを発生\n  raise '___'\n# rescueで例外を捕捉\n___ => e\n  # caughtを出力\n  puts '___'\n# endで終了\n___",
      "correctLines": [
        "begin",
        "  raise 'oops'",
        "rescue => e",
        "  puts 'caught'",
        "end"
      ],
      "lineHints": [
        "",
        "raise でエラーを発生させます。",
        "rescue でエラーを捕まえます。",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["rescue"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "caught\n"
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
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# 無名関数\n\n**ラムダ** は、名前をつけずに定義する関数です。`->` または `lambda` で作ります。"
        },
        {
          "title": "ラムダの使い方",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# -> で定義\n\n`-> { 処理 }` で定義し、`.call` で実行します。\n\n**コード例：**\n```ruby\nadd = ->(a, b) { a + b }\nputs add.call(2, 3) # 5\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# ->でラムダを定義\ndouble = ->(n) { n * 2 }\nputs double.call(5)",
      "holeyCode": "# ->でラムダを定義\ndouble = ___(n) { n * 2 }\n# callで実行\nputs double.___(5)",
      "correctLines": [
        "double = ->(n) { n * 2 }",
        "puts double.call(5)"
      ],
      "lineHints": [
        "-> でラムダを定義します。",
        "call で実行します。"
      ],
      "candidates": {
        "operators": ["->"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    }
  ]
}

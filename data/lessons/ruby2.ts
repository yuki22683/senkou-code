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
      "content": "`map` は各要素を変換し、`select` は条件に合う要素を抽出します。\\n\\n```ruby\\nnums = [1, 2, 3, 4, 5]\\n\\n# map: 各要素を2倍に変換\\ndoubled = nums.map { |n| n * 2 }\\n# => [2, 4, 6, 8, 10]\\n\\n# select: 3以上を抽出\\nbig = nums.select { |n| n >= 3 }\\n# => [3, 4, 5]\\n```"
    },
    {
      "title": "シンボル",
      "content": "**シンボル**は `:名前` で表す識別子です。文字列より軽量で、ハッシュのキーによく使います。\\n\\n```ruby\\n# シンボルをキーにしたハッシュ\\nitem = { name: 'りんご', price: 100 }\\n\\nputs item[:name]   # => りんご\\nputs item[:price]  # => 100\\n```\\n\\n`name:` は `:name =>` の省略形です。"
    },
    {
      "title": "クラスの定義",
      "content": "`class` でオブジェクトの設計図を作ります。\\n\\n```ruby\\nclass Cat\\n  def initialize(name)\\n    @name = name  # インスタンス変数\\n  end\\n  \\n  def greet\\n    puts \"にゃー、#{@name}です\"\\n  end\\nend\\n\\ncat = Cat.new('タマ')\\ncat.greet  # => にゃー、タマです\\n```\\n\\n`@name` は各インスタンスが持つ固有のデータです。"
    },
    {
      "title": "attr_accessor",
      "content": "`attr_accessor` でプロパティの読み書きを簡単に定義できます。\\n\\n```ruby\\nclass Item\\n  attr_accessor :price  # 読み書き可能\\n  attr_reader :name     # 読み取り専用\\nend\\n\\nitem = Item.new\\nitem.price = 200\\nputs item.price  # => 200\\n```\\n\\n手動でゲッター/セッターを書く必要がなくなります。"
    },
    {
      "title": "継承とモジュール",
      "content": "`<` で親クラスを継承し、`include` でモジュールの機能を取り込みます。\\n\\n```ruby\\nclass Vehicle\\n  def move\\n    puts '移動中'\\n  end\\nend\\n\\nclass Car < Vehicle  # Vehicleを継承\\nend\\n\\nCar.new.move  # => 移動中\\n```\\n\\nモジュールは複数のクラスで機能を共有する仕組みです。"
    }
  ],
  "exercises": [
    {
      "title": "ブロックを使おう - each",
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
      "correctCode": "# numsに配列を代入（1, 2, 3）\\nnums = [1, 2, 3]\\n# mapで各要素を変換\\ndoubled = nums.map { |n| n * 2 }\\n# putsで出力\\nputs doubled",
      "holeyCode": "# numsに配列を代入（1, 2, 3）\\n___ = [___, ___, ___]\\n# mapで各要素を変換\\n___ = ___.map { |___| ___ * ___ }\\n# putsで出力\\n___ ___",
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
      "correctCode": "# classでクラスを定義\\nclass Cat\\n  # initializeを定義\\n  def initialize(name)\\n    # @nameに代入\\n    @name = name\\n  # endで終了\\n  end\\n  # greetを定義\\n  def greet\\n    # @nameを出力\\n    puts @name\\n  # endで終了\\n  end\\n# endで終了\\nend\\n# catにインスタンスを代入\\ncat = Cat.new('タマ')\\n# greetを呼び出し\\ncat.greet",
      "holeyCode": "# classでクラスを定義\\nclass ___\\n  # initializeを定義\\n  def ___(___) \\n    # @nameに代入\\n    @___ = ___\\n  # endで終了\\n  ___\\n  # greetを定義\\n  def ___\\n    # @nameを出力\\n    ___ @___\\n  # endで終了\\n  ___\\n# endで終了\\n___\\n# catにインスタンスを代入\\n___ = ___.___(___) \\n# greetを呼び出し\\n___.___",
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
      "correctCode": "# classでクラスを定義\\nclass Item\\n  # attr_accessorで読み書き可能に\\n  attr_accessor :price\\n# endで終了\\nend\\n# itemにインスタンスを代入\\nitem = Item.new\\n# priceに値を代入\\nitem.price = 200\\n# priceを出力\\nputs item.price",
      "holeyCode": "# classでクラスを定義\\nclass ___\\n  # attr_accessorで読み書き可能に\\n  ___ :___\\n# endで終了\\n___\\n# itemにインスタンスを代入\\n___ = ___.___\\n# priceに値を代入\\n___.___ = ___\\n# priceを出力\\n___ ___.___ ",
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
      "correctCode": "# classでクラスを定義\\nclass Vehicle\\n  # moveを定義\\n  def move\\n    # movingを出力\\n    puts '移動中'\\n  # endで終了\\n  end\\n# endで終了\\nend\\n# <で親クラスを継承\\nclass Car < Vehicle\\n# endで終了\\nend\\n# carにインスタンスを代入\\ncar = Car.new\\n# moveを呼び出し\\ncar.move",
      "holeyCode": "# classでクラスを定義\\nclass ___\\n  # moveを定義\\n  def ___\\n    # movingを出力\\n    ___ '___'\\n  # endで終了\\n  ___\\n# endで終了\\n___\\n# <で親クラスを継承\\nclass ___ < ___\\n# endで終了\\n___\\n# carにインスタンスを代入\\n___ = ___.___ \\n# moveを呼び出し\\n___.___",
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
      "correctCode": "# moduleでモジュールを定義\\nmodule Speakable\\n  # speakを定義\\n  def speak\\n    # speakingを出力\\n    puts '話し中'\\n  # endで終了\\n  end\\n# endで終了\\nend\\n# classでクラスを定義\\nclass Robot\\n  # includeでモジュールを取り込み\\n  include Speakable\\n# endで終了\\nend\\n# robotにインスタンスを代入\\nrobot = Robot.new\\n# speakを呼び出し\\nrobot.speak",
      "holeyCode": "# moduleでモジュールを定義\\nmodule ___\\n  # speakを定義\\n  def ___\\n    # speakingを出力\\n    ___ '___'\\n  # endで終了\\n  ___\\n# endで終了\\n___\\n# classでクラスを定義\\nclass ___\\n  # includeでモジュールを取り込み\\n  ___ ___\\n# endで終了\\n___\\n# robotにインスタンスを代入\\n___ = ___.___ \\n# speakを呼び出し\\n___.___",
      "correctLines": [
          "# moduleでモジュールを定義",
          "module Speakable",
          "  # speakを定義",
          "  def speak",
          "    # speakingを出力",
          "    puts '話し中'",
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
      "correctCode": "# beginで開始\\nbegin\\n  # raiseでエラーを発生\\n  raise 'おっと'\\n# rescueで例外を捕捉\\nrescue => e\\n  # caughtを出力\\n  puts 'キャッチ'\\n# endで終了\\nend",
      "holeyCode": "# beginで開始\\n___\\n  # raiseでエラーを発生\\n  ___ '___'\\n# rescueで例外を捕捉\\n___ => ___\\n  # caughtを出力\\n  ___ '___'\\n# endで終了\\n___",
      "correctLines": [
          "# beginで開始",
          "begin",
          "  # raiseでエラーを発生",
          "  raise 'おっと'",
          "# rescueで例外を捕捉",
          "rescue => e",
          "  # caughtを出力",
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

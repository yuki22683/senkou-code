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
      "correctCode": "# numsに配列を代入（1, 2, 3）\\nnums = [1, 2, 3]\\n# eachで各要素を処理\\nnums.each do |n|\\n  # putsで出力\\n  puts n\\n# endで終了\\nend",
      "holeyCode": "# numsに配列を代入（1, 2, 3）\\nnums = [___, 2, 3]\\n# eachで各要素を処理\\nnums.each do |___|\\n  # putsで出力\\n  puts ___\\n# endで終了\\n___",
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
          "ここを正しく入力してください。",
          null,
          "ブロックを終了する。"
        ],
        "candidates": {
          "functions": [
            "each"
          ],
          "others": ["1", "2", "3", "n", "end", "n", "n", "n\\"]
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
      "holeyCode": "# numsに配列を代入（1, 2, 3）\\nnums = [___, 2, 3]\\n# mapで各要素を変換\\ndoubled = nums.map { |n| n * ___ }\\n# putsで出力\\nputs ___",
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
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
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
            "expected_output": "2\\n4\\n6\\n"
          }
        ]
      },
    {
      "title": "select で絞り込もう",
      "correctCode": "# numsに配列を代入（1, 2, 3, 4, 5）\\nnums = [1, 2, 3, 4, 5]\\n# selectで条件に合う要素を抽出\\nbig = nums.select { |n| n >= 3 }\\n# putsで出力\\nputs big",
      "holeyCode": "# numsに配列を代入（1, 2, 3, 4, 5）\\nnums = [___, 2, 3, 4, 5]\\n# selectで条件に合う要素を抽出\\nbig = nums.select { |n| n >= ___ }\\n# putsで出力\\nputs ___",
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
          "配列を複数の値で初期化する。",
          null,
          "select で 3 以上の要素を抽出します。",
          null,
          "ここを正しく入力してください。"
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
            "expected_output": "3\\n4\\n5\\n"
          }
        ]
      },
    {
      "title": "シンボルを使おう",
      "correctCode": "# itemにハッシュを代入\\nitem = { name: 'りんご', price: 100 }\\n# :でシンボルを指定してアクセス\\nputs item[:price]",
      "holeyCode": "# itemにハッシュを代入\\nitem = { name: 'りんご', price: ___ }\\n# :でシンボルを指定してアクセス\\nputs item[:___]",
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
            "expected_output": "100\\n"
          }
        ]
      },
    {
      "title": "クラスを定義しよう",
      "correctCode": "# classでクラスを定義\\nclass Cat\\n  # initializeを定義\\n  def initialize(name)\\n    # @nameに代入\\n    @name = name\\n  # endで終了\\n  end\\n  # greetを定義\\n  def greet\\n    # @nameを出力\\n    puts @name\\n  # endで終了\\n  end\\n# endで終了\\nend\\n# catにインスタンスを代入\\ncat = Cat.new('タマ')\\n# greetを呼び出し\\ncat.greet",
      "holeyCode": "# classでクラスを定義\\nclass ___\\n  # initializeを定義\\n  def initialize(___)\\n    # @nameに代入\\n    @___ = name\\n  # endで終了\\n  ___\\n  # greetを定義\\n  def ___\\n    # @nameを出力\\n    puts @___\\n  # endで終了\\n  ___\\n# endで終了\\n___\\n# catにインスタンスを代入\\ncat = Cat.new('___')\\n# greetを呼び出し\\ncat.___",
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
          "ブロックを終了する。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ブロックを終了する。",
          null,
          "ブロックを終了する。",
          null,
          "new でインスタンスを作成します。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "class"
          ],
          "others": ["initialize", "name", "end", "greet", "@name", "new", "Cat", "Tama", "タマ", "Cat", "end", "greet", "name"]
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
      "holeyCode": "# classでクラスを定義\\nclass ___\\n  # attr_accessorで読み書き可能に\\n  attr_accessor :___\\n# endで終了\\n___\\n# itemにインスタンスを代入\\nitem = Item.___\\n# priceに値を代入\\nitem.price = ___\\n# priceを出力\\nputs item.___",
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
          "ここを正しく入力してください。",
          null,
          "ブロックを終了する。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "attr_accessor"
          ],
          "others": ["class", "end", "new", "200", "price", "Item", "Item", "price", "end", "new", "200"]
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
      "holeyCode": "# classでクラスを定義\\nclass ___\\n  # moveを定義\\n  def ___\\n    # movingを出力\\n    puts '___'\\n  # endで終了\\n  ___\\n# endで終了\\n___\\n# <で親クラスを継承\\nclass ___ < Vehicle\\n# endで終了\\n___\\n# carにインスタンスを代入\\ncar = Car.___\\n# moveを呼び出し\\ncar.___",
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
          "ここを正しく入力してください。",
          null,
          "文字列を出力し、最後に改行を加えます。",
          null,
          "ブロックを終了する。",
          null,
          "ブロックを終了する。",
          null,
          "新しいクラス（Car）を定義します。",
          null,
          "ブロックを終了する。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "<"
          ],
          "others": ["class", "move", "moving", "end", "new", "Vehicle", "Car", "移動中", "Vehicle", "move", "end", "new"]
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
      "holeyCode": "# moduleでモジュールを定義\\nmodule ___\\n  # speakを定義\\n  def ___\\n    # speakingを出力\\n    puts '___'\\n  # endで終了\\n  ___\\n# endで終了\\n___\\n# classでクラスを定義\\nclass ___\\n  # includeでモジュールを取り込み\\n  include ___\\n# endで終了\\n___\\n# robotにインスタンスを代入\\nrobot = Robot.___\\n# speakを呼び出し\\nrobot.___",
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
          "module でモジュールを定義します。",
          null,
          "include でモジュールを取り込みます。",
          null,
          "文字列を出力し、最後に改行を加えます。",
          null,
          "ブロックを終了する。",
          null,
          "ブロックを終了する。",
          null,
          "新しいクラス（Robot）を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ブロックを終了する。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "module"
          ],
          "others": ["speak", "speaking", "end", "class", "Speakable", "new", "Robot", "話し中", "Speakable", "speak", "end", "Robot", "new"]
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
      "holeyCode": "# beginで開始\\n___\\n  # raiseでエラーを発生\\n  raise '___'\\n# rescueで例外を捕捉\\nrescue => ___\\n  # caughtを出力\\n  puts '___'\\n# endで終了\\n___",
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
          "raise でエラーを発生させます。",
          null,
          "rescue でエラーを捕まえます。",
          null,
          "ここを正しく入力してください。",
          null,
          "文字列を出力し、最後に改行を加えます。",
          null,
          "ブロックを終了する。"
        ],
        "candidates": {
          "keywords": [
            "rescue"
          ],
          "others": ["begin", "oops", "caught", "end", "e", "おっと", "キャッチ", "begin", "e"]
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
      "holeyCode": "# ->でラムダを定義\\ndouble = ->(n) { n * ___ }\\n# callで実行\\nputs double.call(___)",
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
            "expected_output": "10\\n"
          }
        ]
      }
  ]
}

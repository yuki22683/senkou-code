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
      "correctCode": "# 「こんにちは, Ruby!」と出力する関数\\nputs 'こんにちは, Ruby!'",
      "holeyCode": "# 「こんにちは, Ruby!」と出力する関数\\nputs 'こんにちは, ___!'",
      "correctLines": [
          "# 「こんにちは, Ruby!」と出力する関数",
          "puts 'こんにちは, Ruby!'"
        ],
      "lineHints": [
          null,
          "文字列を出力し、最後に改行を加えます。"
        ],
        "candidates": {
          "strings": [
            "Hello, Ruby!"
          ],
          "others": ["Ruby"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは, Ruby!\\n"
          }
        ]
      },
    {
      "title": "便利な「はこ」変数（へんすう）",
      "correctCode": "# nameというはこに 'Ruby' を入れる\\nname = 'Ruby'\\n# はこの中身を画面に出す\\nputs name",
      "holeyCode": "# nameというはこに 'Ruby' を入れる\\nname = '___'\\n# はこの中身を画面に出す\\nputs ___",
      "correctLines": [
          "# nameというはこに 'Ruby' を入れる",
          "name = 'Ruby'",
          "# はこの中身を画面に出す",
          "puts name"
        ],
      "lineHints": [
          null,
          "変数に文字列データを代入（保存）します。",
          null,
          "変数名 name を入力します。"
        ],
        "candidates": {
          "variables": [
            "name"
          ],
          "strings": [
            "Ruby"
          ]
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
      "correctCode": "# xというはこに 10 を入れる\\nx = 10\\n# yというはこに 5 を入れる\\ny = 5\\n# x と y をたした答えを出す\\nputs x + y",
      "holeyCode": "# xというはこに 10 を入れる\\nx = ___\\n# yというはこに 5 を入れる\\ny = ___\\n# x と y をたした答えを出す\\nputs x + ___",
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
          "変数に数値を代入（保存）します。",
          null,
          "変数に数値を代入（保存）します。",
          null,
          "たし算なので + を使います。"
        ],
        "candidates": {
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
          "others": ["y", "10", "5"]
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
      "correctCode": "# 10 を 3 で割ったあまりを出力する\\nputs 10 % 3",
      "holeyCode": "# 10 を 3 で割ったあまりを出力する\\nputs ___ % 3",
      "correctLines": [
          "# 10 を 3 で割ったあまりを出力する",
          "puts 10 % 3"
        ],
      "lineHints": [
          null,
          "あまりを求める % 演算子を使います。"
        ],
        "candidates": {
          "operators": [
            "%",
            "+",
            "-",
            "*",
            "/"
          ],
          "others": ["10"]
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
      "correctCode": "# scoreに50を入れる\\nscore = 50\\n# 10点プラスする\\nscore += 10\\n# scoreを表示\\nputs score",
      "holeyCode": "# scoreに50を入れる\\nscore = ___\\n# 10点プラスする\\nscore += ___\\n# scoreを表示\\nputs ___",
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
          "変数に数値を代入（保存）します。",
          null,
          "変数の値を計算して、その結果を同じ変数に再代入します。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
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
          "others": ["score", "50", "10"]
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
      "correctCode": "# ageというはこに 10 を入れる\\nage = 10\\n# 式展開を使ってメッセージを出す\\nputs \"私は#{age}歳です\"",
      "holeyCode": "# ageというはこに 10 を入れる\\nage = ___\\n# 式展開を使ってメッセージを出す\\n___ \"___\"",
      "correctLines": [
          "# ageというはこに 10 を入れる",
          "age = 10",
          "# 式展開を使ってメッセージを出す",
          "puts \"私は#{age}歳です\""
        ],
      "lineHints": [
          null,
          "変数に数値を代入（保存）します。",
          null,
          "変数名 age を #{} の中に入力します。"
        ],
        "candidates": {
          "variables": [
            "age"
          ],
          "numbers": [
            "10"
          ],
          "others": ["私は#{age}歳です", "I am #{age} years old", "私は#{age}歳です", "puts", "10"]
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
      "correctCode": "# colorsに['赤', '青', '緑']を代入\\ncolors = ['赤', '青', '緑']\\n# colors[1]を表示\\nputs colors[1]",
      "holeyCode": "# colorsに['赤', '青', '緑']を代入\\n___ = ['赤', '青', '緑']\\n# colors[1]を表示\\nputs colors[___]",
      "correctLines": [
          "# colorsに['赤', '青', '緑']を代入",
          "colors = ['赤', '青', '緑']",
          "# colors[1]を表示",
          "puts colors[1]"
        ],
      "lineHints": [
          null,
          "赤、青、緑 の順で入力しましょう。",
          null,
          "2番目のデータのインデックスは 1 です。"
        ],
        "candidates": {
          "strings": [
            "赤",
            "青",
            "緑"
          ],
          "numbers": [
            "0",
            "1",
            "2"
          ],
          "others": ["colors", "'青',"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "青\\n"
          }
        ]
      },
    {
      "title": "「もし〜なら」で分ける if文",
      "correctCode": "# scoreに100を入れる\\nscore = 100\\n# もし80より大きかったら\\nif score > 80\\n  # 「合格！」と表示する\\n  puts '合格！'\\nend",
      "holeyCode": "# scoreに100を入れる\\nscore = ___\\n# もし80より大きかったら\\nif score ___ 80\\n  # 「合格！」と表示する\\n  ___ '6合格！  ___ '合格！''\\n___",
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
          "変数に数値を代入（保存）します。",
          null,
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          null,
          "文字列を出力し、最後に改行を加えます。",
          "ブロックを終了する。"
        ],
        "candidates": {
          "keywords": [
            "if",
            "unless"
          ],
          "numbers": [
            "100"
          ],
          "strings": [
            "合格！"
          ],
          "others": [">", "puts", "end", "100"]
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
      "correctCode": "# ageに10を入れる\\nage = 10\\n# 20歳以上かどうかで分ける\\nif age >= 20\\n  # 「大人」と表示\\n  puts '大人'\\n# else でそれ以外の場合\\nelse\\n  # 「子供」と表示\\n  puts '子供'\\nend",
      "holeyCode": "# ageに10を入れる\\nage = ___\\n# 20歳以上かどうかで分ける\\nif age ___ 20\\n  # 「大人」と表示\\n  ___ '6大人  ___ '大人''\\n# else でそれ以外の場合\\n___\\n  # 「子供」と表示\\n  ___ '6子供  ___ '子供''\\n___",
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
          "変数に数値を代入（保存）します。",
          null,
          "文字列を出力し、最後に改行を加えます。",
          null,
          "もし条件が満たされなかった場合に実行する処理を記述します。",
          null,
          "文字列を出力し、最後に改行を加えます。",
          null,
          "文字列を出力し、最後に改行を加えます。",
          "ブロックを終了する。"
        ],
        "candidates": {
          "keywords": [
            "else",
            "elsif"
          ],
          "numbers": [
            "10"
          ],
          "strings": [
            "大人",
            "子供"
          ],
          "others": [">=", "puts", "end", "10", "else"]
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
      "correctCode": "# scoreに85を入れる\\nscore = 85\\n# 80以上 かつ 100以下 ならメッセージを出す\\nif score >= 80 and score <= 100\\n  # 「合格！」と表示\\n  puts '合格！'\\nend",
      "holeyCode": "# scoreに85を入れる\\nscore = ___\\n# 80以上 かつ 100以下 ならメッセージを出す\\nif score ___ 80 and score <= 100\\n  # 「合格！」と表示\\n  ___ '6合格！  ___ '合格！''\\n___",
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
          "変数に数値を代入（保存）します。",
          null,
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          null,
          "文字列を出力し、最後に改行を加えます。",
          "ブロックを終了する。"
        ],
        "candidates": {
          "keywords": [
            "and",
            "or"
          ],
          "numbers": [
            "85"
          ],
          "strings": [
            "合格！"
          ],
          "others": [">=", "puts", "end", "85"]
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
      "correctCode": "# namesに['太郎', '花子']を代入\\nnames = ['太郎', '花子']\\n# eachでnamesをループ\\nnames.each do |name|\\n  # nameを表示\\n  puts name\\nend",
      "holeyCode": "# namesに['太郎', '花子']を代入\\n___ = ['太郎', '花子']\\n# eachでnamesをループ\\nnames.each do |___|\\n  # nameを表示\\n  puts ___\\n___",
      "correctLines": [
          "# namesに['太郎', '花子']を代入",
          "names = ['太郎', '花子']",
          "# eachでnamesをループ",
          "names.each do |name|",
          "  # nameを表示",
          "  puts name",
          "end"
        ],
      "lineHints": [
          null,
          "太郎、花子 の順で入力しましょう。",
          null,
          "each を使います。",
          null,
          "ブロック変数 name を入力します。",
          "ブロックを終了する。"
        ],
        "candidates": {
          "methods": [
            "each",
            "map"
          ],
          "variables": [
            "name"
          ],
          "strings": [
            "太郎",
            "花子"
          ],
          "others": ["names", "end", "'花子']", "name\\"]
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
      "correctCode": "# fruitsに{'みかん' => 'オレンジ'}を代入\\nfruits = {'みかん' => 'オレンジ'}\\n# fruits['みかん']を表示\\nputs fruits['みかん']",
      "holeyCode": "# fruitsに{'みかん' => 'オレンジ'}を代入\\n___ = {'みかん' => 'オレンジ'}\\n# fruits['みかん']を表示\\nputs ___['みかん']",
      "correctLines": [
          "# fruitsに{'みかん' => 'オレンジ'}を代入",
          "fruits = {'みかん' => 'オレンジ'}",
          "# fruits['みかん']を表示",
          "puts fruits['みかん']"
        ],
      "lineHints": [
          null,
          "キーは みかん、値は オレンジ です。",
          null,
          "キー みかん を入力します。"
        ],
        "candidates": {
          "strings": [
            "みかん",
            "オレンジ"
          ],
          "others": ["fruits", "efruits"]
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
      "correctCode": "# greetというメソッドを定義\\ndef greet\\n  # こんにちは と表示\\n  puts 'こんにちは'\\nend\\n# メソッドを呼び出す\\ngreet",
      "holeyCode": "# greetというメソッドを定義\\ndef ___\\n  # こんにちは と表示\\n  ___ '6こんにちは  ___ 'こんにちは''\\n___\\n# メソッドを呼び出す\\n___",
      "correctLines": [
          "# greetというメソッドを定義",
          "def greet",
          "  # こんにちは と表示",
          "  puts 'こんにちは'",
          "end",
          "# メソッドを呼び出す",
          "greet"
        ],
      "lineHints": [
          null,
          "def でメソッドを定義します。",
          null,
          "文字列を出力し、最後に改行を加えます。",
          "メソッド名 greet を入力して呼び出します。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "def",
            "end"
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

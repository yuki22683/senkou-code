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
      "title": "便利な「はこ」変数（へんすう）",
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
      "correctCode": "# colorsに['赤', '青', '緑']を代入\\ncolors = ['赤', '青', '緑']\\n# colors[1]を表示\\nputs colors[1]",
      "holeyCode": "# colorsに['赤', '青', '緑']を代入\\n___ = ['___', '___', '___']\\n# colors[1]を表示\\n___ ___[___]",
      "correctLines": [
          "# colorsに['赤', '青', '緑']を代入",
          "colors = ['赤', '青', '緑']",
          "# colors[1]を表示",
          "puts colors[1]"
        ],
      "lineHints": [
          null,
          "配列colorsに赤、青、緑の順で入力します。",
          null,
          "putsでcolors[1]（2番目の要素）を表示します。"
        ],
        "candidates": {
          "keywords": ["puts"],
          "variables": ["colors"],
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
          "others": ["puts", "colors"]
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
      "holeyCode": "# scoreに100を入れる\\n___ = ___\\n# もし80より大きかったら\\nif ___ ___ ___\\n  # 「合格！」と表示する\\n  ___ '___'\\n___",
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
          "変数scoreに数値100を代入します。",
          null,
          "ifでscore > 80を判定します。",
          null,
          "putsで「合格！」を出力します。",
          "endでブロックを終了します。"
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
      "correctCode": "# ageに10を入れる\\nage = 10\\n# 20歳以上かどうかで分ける\\nif age >= 20\\n  # 「大人」と表示\\n  puts '大人'\\n# else でそれ以外の場合\\nelse\\n  # 「子供」と表示\\n  puts '子供'\\nend",
      "holeyCode": "# ageに10を入れる\\n___ = ___\\n# 20歳以上かどうかで分ける\\nif ___ ___ ___\\n  # 「大人」と表示\\n  ___ '___'\\n# else でそれ以外の場合\\n___\\n  # 「子供」と表示\\n  ___ '___'\\n___",
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
          "変数ageに数値10を代入します。",
          null,
          "ifでage >= 20を判定します。",
          null,
          "putsで「大人」を出力します。",
          null,
          "elseでそれ以外の場合に実行します。",
          null,
          "putsで「子供」を出力します。",
          "endでブロックを終了します。"
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
      "correctCode": "# scoreに85を入れる\\nscore = 85\\n# 80以上 かつ 100以下 ならメッセージを出す\\nif score >= 80 and score <= 100\\n  # 「合格！」と表示\\n  puts '合格！'\\nend",
      "holeyCode": "# scoreに85を入れる\\n___ = ___\\n# 80以上 かつ 100以下 ならメッセージを出す\\nif ___ ___ ___ ___ ___ ___ ___\\n  # 「合格！」と表示\\n  ___ '___'\\n___",
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
          "変数scoreに数値85を代入します。",
          null,
          "ifでscore >= 80 and score <= 100を判定します。",
          null,
          "putsで「合格！」を出力します。",
          "endでブロックを終了します。"
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
      "correctCode": "# namesに['太郎', '花子']を代入\\nnames = ['太郎', '花子']\\n# eachでnamesをループ\\nnames.each do |name|\\n  # nameを表示\\n  puts name\\nend",
      "holeyCode": "# namesに['太郎', '花子']を代入\\n___ = ['___', '___']\\n# eachでnamesをループ\\n___.___ do |___|\\n  # nameを表示\\n  ___ ___\\n___",
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
          "配列namesに太郎、花子の順で入力します。",
          null,
          "names.eachでループします。",
          null,
          "putsでnameを出力します。",
          "endでブロックを終了します。"
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
      "correctCode": "# fruitsに{'みかん' => 'オレンジ'}を代入\\nfruits = {'みかん' => 'オレンジ'}\\n# fruits['みかん']を表示\\nputs fruits['みかん']",
      "holeyCode": "# fruitsに{'みかん' => 'オレンジ'}を代入\\n___ = {'___' => '___'}\\n# fruits['みかん']を表示\\n___ ___['___']",
      "correctLines": [
          "# fruitsに{'みかん' => 'オレンジ'}を代入",
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
      "correctCode": "# greetというメソッドを定義\\ndef greet\\n  # こんにちは と表示\\n  puts 'こんにちは'\\nend\\n# メソッドを呼び出す\\ngreet",
      "holeyCode": "# greetというメソッドを定義\\ndef ___\\n  # こんにちは と表示\\n  ___ '___'\\n___\\n# メソッドを呼び出す\\n___",
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
          "defでgreetメソッドを定義します。",
          null,
          "putsで「こんにちは」を出力します。",
          "endでメソッド定義を終了します。",
          null,
          "定義したgreetメソッドを実行します。"
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

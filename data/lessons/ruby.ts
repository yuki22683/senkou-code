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
          "image": "/illustrations/common/monitor.png",
          "content": "# 楽しさを大事にする言葉\n\nRubyは、まつもとゆきひろさんという日本人が作った言葉です。人間が読みやすく、楽しく書けるように設計されています。世界中で大人気の言葉です。"
        },
        {
          "title": "puts を使いましょう",
          "image": "/illustrations/common/monitor.png",
          "content": "# メッセージを表示します\n\nRubyでは `puts` と入力したあとに文字を並べるだけで、簡単に画面に表示させることができます。\n\n**コード例：**\n```ruby\nputs 'ヤッホー！'\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 「Hello, Ruby!」と出力する関数\nputs 'Hello, Ruby!'",
      "holeyCode": "# 「Hello, Ruby!」と出力する関数\nputs '___'",
      "correctLines": [
        "# 「Hello, Ruby!」と出力する関数",
        "puts 'Hello, Ruby!'"
      ],
      "lineHints": [
        null,
        "Hello, Ruby! と入力して、画面に表示させます。"
      ],
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
          "content": "# データを保存する「はこ」\n\nプログラムの中では、数字や文字をしまっておく「はこ」を作ることができます。これを **変数（へんすう）** と呼びます。"
        },
        {
          "title": "はこに中身を入れる",
          "image": "/illustrations/common/box.png",
          "content": "# =（イコール）の使い方\n\nRubyでは `=` を使って変数に値を入れます。\n\n```ruby\nfruit = 'りんご'\nputs fruit\n```\n=> りんご"
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
      "lineHints": [
        null,
        "Ruby と入力しましょう。",
        null,
        "変数名 name を入力します。"
      ],
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
          "content": "# 計算はコンピュータの得意技\n\nコンピュータの一番の得意なことは「正確で速い計算」です。複雑な計算も、プログラミングで指示を出せば一瞬で解いてくれます。"
        },
        {
          "title": "計算の記号",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 四則演算\n\nRubyでは、こんな記号を使って計算をします。\n\n- **+** : たし算\n- **-** : ひき算\n- **\\*** : かけ算\n- **/** : わり算\n\n```ruby\nputs 10 + 5  # => 15\n```"
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
      "lineHints": [
        null,
        "10 と入力しましょう。",
        null,
        "5 と入力しましょう。",
        null,
        "たし算なので + を使います。"
      ],
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
      "title": "文章の中に変数を入れましょう",
      "description": "文字列の中に変数の値を入れる「式展開」を学びましょう。#{} を使って変数の中身を文章に入れます。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "式展開とは？",
          "image": "/illustrations/common/fstring.png",
          "content": "# 文章と変数を組み合わせる\n\n文章の途中に、変数の中身を入れたいときに使うのが **式展開** です。`#{}` の中に変数名を入れます。"
        },
        {
          "title": "式展開の書き方",
          "image": "/illustrations/common/fstring.png",
          "content": "# ダブルクォートで囲む\n\n式展開を使うときは、ダブルクォート `\" \"` で囲みます。\n\n```ruby\nage = 10\nputs \"私は#{age}歳です\"\n```\n=> 私は10歳です"
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
      "lineHints": [
        null,
        "10 と入力しましょう。",
        null,
        "変数名 age を #{} の中に入力します。"
      ],
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
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "配列とは？",
          "image": "/illustrations/common/list.png",
          "content": "# データの行列\n\nたくさんのデータを順番に並べておきたいときに使うのが **配列** です。`[]` で囲んで、カンマで区切ります。"
        },
        {
          "title": "配列の番号は0から",
          "image": "/illustrations/common/list.png",
          "content": "# インデックス\n\n配列の最初の要素は0番目です。\n\n```ruby\nfruits = ['りんご', 'バナナ', 'みかん']\nputs fruits[0]  # => りんご\n```"
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
      "lineHints": [
        null,
        "赤、青、緑 の順で入力しましょう。",
        null,
        "2番目のデータのインデックスは 1 です。"
      ],
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
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "条件分岐とは？",
          "image": "/illustrations/common/if.png",
          "content": "# プログラムに判断をさせる\n\n状況によって動きを変えることを **条件分岐** と呼びます。"
        },
        {
          "title": "if の使い方",
          "image": "/illustrations/common/if.png",
          "content": "# もし〜なら\n\nRubyでは `if` のあとに条件を書きます。最後に `end` で閉じます。\n\n```ruby\nif score > 80\n  puts '合格！'\nend\n```"
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
      "lineHints": [
        null,
        "100 と入力しましょう。",
        null,
        "条件分岐のキーワード if を使います。",
        null,
        "合格！ と入力しましょう。",
        null
      ],
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
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "else とは？",
          "image": "/illustrations/common/if.png",
          "content": "# それ以外の場合\n\n条件に当てはまらなかったときの動きを作るのが **else** です。"
        },
        {
          "title": "if-else の使い方",
          "image": "/illustrations/common/if.png",
          "content": "# 2つのルート\n\n```ruby\nage = 10\nif age >= 20\n  puts '大人'\nelse\n  puts '子供'\nend\n```\n=> 子供"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# ageに10を入れる\nage = 10\n# 20歳以上かどうかで分ける\nif age >= 20\n  puts '大人'\nelse\n  # それ以外の場合\n  puts '子供'\nend",
      "holeyCode": "# ageに10を入れる\nage = ___\n# 20歳以上かどうかで分ける\nif age >= 20\n  puts '___'\n___\n  # それ以外の場合\n  puts '___'\nend",
      "correctLines": [
        "# ageに10を入れる",
        "age = 10",
        "# 20歳以上かどうかで分ける",
        "if age >= 20",
        "  puts '大人'",
        "else",
        "  # それ以外の場合",
        "  puts '子供'",
        "end"
      ],
      "lineHints": [
        null,
        "10 と入力しましょう。",
        null,
        null,
        "大人 と入力しましょう。",
        "else を入力しましょう。",
        null,
        "子供 と入力しましょう。",
        null
      ],
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
      "title": "ぐるぐる回す each",
      "description": "配列の中身を一つずつ順番に取り出して処理する each を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "繰り返し処理",
          "image": "/illustrations/common/loop.png",
          "content": "# 同じ処理を何度も\n\n配列の中身を全部見たいときは **each** を使うと便利です。"
        },
        {
          "title": "each の使い方",
          "image": "/illustrations/common/loop.png",
          "content": "# ブロック\n\n```ruby\nfruits = ['りんご', 'バナナ']\nfruits.each do |fruit|\n  puts fruit\nend\n```"
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
      "lineHints": [
        null,
        "太郎、花子 の順で入力しましょう。",
        null,
        "each を使います。",
        null,
        "ブロック変数 name を入力します。",
        null
      ],
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
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "ハッシュとは？",
          "image": "/illustrations/common/dict.png",
          "content": "# キーと値のペア\n\nハッシュは、キーワードとデータのセットです。`{}` で囲んで、`=>` でキーと値を結びます。"
        },
        {
          "title": "ハッシュの使い方",
          "image": "/illustrations/common/dict.png",
          "content": "# キーで取り出す\n\n```ruby\ncolors = {'りんご' => '赤', 'バナナ' => '黄'}\nputs colors['りんご']  # => 赤\n```"
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
      "lineHints": [
        null,
        "キーは みかん、値は オレンジ です。",
        null,
        "キー みかん を入力します。"
      ],
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
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "メソッドとは？",
          "image": "/illustrations/common/function.png",
          "content": "# 処理をまとめる\n\n一連の処理をひとまとめにして、名前をつけたものを **メソッド** と呼びます。"
        },
        {
          "title": "def でメソッドを定義",
          "image": "/illustrations/common/function.png",
          "content": "# 関数を作る\n\n```ruby\ndef greet\n  puts 'こんにちは'\nend\n\ngreet  # => こんにちは\n```"
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
      "lineHints": [
        null,
        "def でメソッドを定義します。",
        null,
        "こんにちは と入力しましょう。",
        null,
        null,
        "メソッド名 greet を入力して呼び出します。"
      ],
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

export const rubyData = {
  "language": "ruby",
  "lessonId": "ruby-1",
  "lessonTitle": "Ruby (ルビー) にちょうせん！",
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
          "title": "puts を使いましょう",
          "content": "# とてもシンプルです\n\nRubyでは `puts` と入力したあとに文字を並べるだけで、簡単に画面に表示させることができます。\n\n**コード例：**\n```ruby\nputs 'Hello, Ruby!'\n```"
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
      "title": "便利な「はこ」",
      "description": "データをしまっておく「はこ（変数）」を使ってみましょう。Rubyではラベルを貼らなくても自由に使えます。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "自由な変数",
          "content": "# そのまま使えます\n\nRubyはとても賢いので、数字や文字など、入れたいものをそのまま「はこ」に入れることができますよ。\n\n**コード例：**\n```ruby\nname = 'Ruby'\nputs name\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# name というはこを作る\nname = 'Ruby'\nputs name",
      "holeyCode": "# name というはこを作る\nname = '___'\nputs ___",
      "correctLines": [
        "# name というはこを作る",
        "name = 'Ruby'",
        "puts name"
      ],
      "lineHints": [
        null,
        "name というはこに 'Ruby' と入力します。",
        "はこの名前 name を指定して、表示させます。"
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
          "expected_output": "Ruby\n"
        }
      ]
    },
    {
      "title": "コンピュータで計算しましょう",
      "description": "Rubyを使って、たし算をしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "計算の記号",
          "content": "# 算数と同じ記号を使います\n\nRubyでも、こんな記号を使って計算をします。\n\n- **+** : たし算\n- **-** : ひき算\n- **\\*** : かけ算\n- **/** : わり算"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# x と y をたした答えを出す\nx = 5\ny = 3\nputs x + y",
      "holeyCode": "# x と y をたした答えを出す\nx = 5\ny = 3\nputs x ___ y",
      "correctLines": [
        "# x と y をたした答えを出す",
        "x = 5",
        "y = 3",
        "puts x + y"
      ],
      "lineHints": [
        null,
        "x に 5 を入力します。",
        "y に 3 を入力します。",
        "たし算なので `+` を使います。"
      ],
      "candidates": {
        "operators": [
          "+"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "8\n"
        }
      ]
    },
    {
      "title": "文章の中に「はこ」を入れましょう",
      "description": "「式展開（しきてんかい）」という機能を使って、文章の中に「はこ（変数）」の中身を表示します。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "#{ } を使いましょう",
          "content": "# 式展開\n\n`\" \"`（ダブルクォーテーション）で囲んだ文章の中で `#{はその名前}` と入力すると、中身を文章に入れられますよ。\n\n**コード例：**\n```ruby\nage = 10\nputs \"私は #{age} 歳です\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 文章の中に age の中身を入れる\nage = 10\nputs \"I am #{age} years old.\"",
      "holeyCode": "# 文章の中に age の中身を入れる\nage = 10\nputs \"I am #{___} years old.\"",
      "correctLines": [
        "# 文章の中に age の中身を入れる",
        "age = 10",
        "puts \"I am #{age} years old.\""
      ],
      "lineHints": [
        null,
        "age に 10 を入力します。",
        "はこの名前 age を指定します。"
      ],
      "candidates": {
        "variables": [
          "age"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "I am 10 years old.\n"
        }
      ]
    },
    {
      "title": "データをならべる「配列」",
      "description": "たくさんのデータを一つの「長い はこ」にまとめて入れられる「配列（はいれつ）」を使ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "データの番号は 0 から！",
          "content": "# [ ]（しかくい かっこ）を使いましょう\n\n配列の中身を取り出すときは、何番目かを指定します。さいしょのデータは **「0番」** から数えるのがルールですよ。\n\n**コード例：**\n```ruby\ncolors = ['あか', 'あお']\nputs colors[0] # 「あか」が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 2番目（番号は1）を出す\ncolors = ['あか', 'あお']\nputs colors[1]",
      "holeyCode": "# 2番目（番号は1）を出す\ncolors = ['あか', 'あお']\nputs colors[___]",
      "correctLines": [
        "# 2番目（番号は1）を出す",
        "colors = ['あか', 'あお']",
        "puts colors[1]"
      ],
      "lineHints": [
        null,
        "['あか', 'あお'] と入力して配列を作ります。",
        "2番目の番号は 1 です。 `colors[1]` と入力してください。"
      ],
      "candidates": {
        "numbers": [
          "1"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "blue\n"
        }
      ]
    },
    {
      "title": "「もし〜なら」で分けましょう",
      "description": "点数によって表示するメッセージを変えてみましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if文と end",
          "content": "# end で閉じましょう\n\nRubyでは、`if 条件` のあとにやりたいことを入力し、最後に `end` と入力して終わらせるのがルールです。\n\n**コード例：**\n```ruby\nif score > 80\n    puts '合格！'\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 条件で分ける\nscore = 100\nif score > 80\n    puts 'Great'\nend",
      "holeyCode": "# 条件で分ける\nscore = 100\nif score ___ 80\n    puts 'Great'\n___",
      "correctLines": [
        "# 条件で分ける",
        "score = 100",
        "if score > 80",
        "    puts 'Great'",
        "end"
      ],
      "lineHints": [
        null,
        "score = 100 と入力しましょう。",
        "比較するための記号 `>` を入力しましょう。",
        "Great と表示します。",
        "さいごに `end` と入力するのを忘れないでください。"
      ],
      "candidates": {
        "operators": [
          ">
        ],
        "keywords": [
          "end"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Great\n"
        }
      ]
    },
    {
      "title": "ちがう場合はどうしましょう？",
      "description": "else（エルス）を使って、「そうでなければ」の動きを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "else で分けます",
          "content": "# 二つの動き\n\n条件に当てはまらないときの動きは `else` を使って入力します。\n\n**コード例：**\n```ruby\nif age >= 20\n    puts \"大人です\"\nelse\n    puts \"子供です\"\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 条件で分ける\nage = 18\nif age >= 20\n    puts 'Adult'\nelse\n    puts 'Minor'\nend",
      "holeyCode": "# 条件で分ける\nage = 18\nif age >= 20\n    puts 'Adult'\n___ \n    puts 'Minor'\nend",
      "correctLines": [
        "# 条件で分ける",
        "age = 18",
        "if age >= 20",
        "    puts 'Adult'",
        "else",
        "    puts 'Minor'",
        "end"
      ],
      "lineHints": [
        null,
        "age に 18 を入力します。",
        null,
        null,
        "そうでなければ、をあらわす `else` を入力しましょう。",
        null,
        "さいごに `end` を入力しましょう。"
      ],
      "candidates": {
        "keywords": [
          "else"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Minor\n"
        }
      ]
    },
    {
      "title": "中身を全部出してみましょう",
      "description": "each（イーチ）という機能を使って、配列の中身を一つずつ順番に表示します。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "each ループ",
          "content": "# ひとつずつ取り出します\n\n`配列.each do |名前|` と入力すると、中身を一つずつ取り出して処理できます。Rubyでよく使われるループですよ。\n\n**コード例：**\n```ruby\nnames = ['たろう', 'はなこ']\nnames.each do |name|\n    puts name\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 全部取り出すループ\nnames = ['Alice', 'Bob']\nnames.each do |name|\n    puts name\nend",
      "holeyCode": "# 全部取り出すループ\nnames = ['Alice', 'Bob']\nnames.___ do |name|\n    puts name\nend",
      "correctLines": [
        "# 全部取り出すループ",
        "names = ['Alice', 'Bob']",
        "names.each do |name|",
        "    puts name",
        "end"
      ],
      "lineHints": [
        null,
        "['Alice', 'Bob'] と入力して配列を作ります。",
        "一つずつ取り出す `each` を入力しましょう。",
        "取り出した名前を表示します。",
        "ループの終わりです。"
      ],
      "candidates": {
        "functions": [
          "each"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Alice\nBob\n"
        }
      ]
    },
    {
      "title": "名前で探す「じしょ」",
      "description": "ハッシュを使って、名前（シンボル）を指定してデータを取り出してみましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "Hash（ハッシュ）",
          "content": "# キー : あたい\n\n「名前」と「データ」をセットにして保存できます。`:名前`（シンボル）をキーワードにするのがRubyのスタイルですよ。\n\n**コード例：**\n```ruby\nuser = { name: 'たろう' }\nputs user[:name] # 「たろう」が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 名前でデータを取り出す\nuser = { name: 'Alice' }\nputs user[:name]",
      "holeyCode": "# 名前でデータを取り出す\nuser = { name: 'Alice' }\nputs user[:___]",
      "correctLines": [
        "# 名前でデータを取り出す",
        "user = { name: 'Alice' }",
        "puts user[:name]"
      ],
      "lineHints": [
        null,
        "{ name: 'Alice' } と入力してハッシュを作ります。",
        "シンボル `:name` を指定して、データを取り出します。"
      ],
      "candidates": {
        "strings": [
          "name"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Alice\n"
        }
      ]
    },
    {
      "title": "自分だけの関数を作りましょう",
      "description": "一連の手順をまとめて、名前をつけた「関数（メソッド）」を作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "def と名前",
          "content": "# メソッドの定義\n\nやりたいことをひとまとめにして、名前をつけることができます。呼び出すだけでいつでも動かせますよ。\n\n**コード例：**\n```ruby\ndef aisatsu\n    puts 'こんにちは'\nend\n\naisatsu # 呼び出し\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 関数を定義して呼び出す\ndef greet\n    puts 'Hello'\nend\ngreet",
      "holeyCode": "# 関数を定義して呼び出す\ndef greet\n    puts 'Hello'\n___\n# 呼び出す\n___",
      "correctLines": [
        "# 関数を定義して呼び出す",
        "def greet",
        "    puts 'Hello'",
        "end",
        "greet"
      ],
      "lineHints": [
        null,
        "greet という名前の関数を定義します。",
        "メッセージを表示します。",
        "関数の終わりです。",
        "関数名を入力して、実行します。"
      ],
      "candidates": {
        "keywords": [
          "end"
        ],
        "functions": [
          "greet"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello\n"
        }
      ]
    }
  ]
}
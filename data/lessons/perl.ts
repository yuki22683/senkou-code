export const perlData = {
  "language": "perl",
  "lessonId": "perl-1",
  "lessonTitle": "Perl (パール) に挑戦！",
  "lessonDescription": "文字をいじったり、整理したりするのが得意な言葉「Perl（パール）」のきほんを学びましょう。古くからたくさんの人に愛されている言葉です。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面に文字を出してみましょう",
      "description": "Perlを使って画面に文字を表示させてみましょう。print（プリント）という関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Perl（パール）とは？",
          "image": "/illustrations/common/monitor.png",
          "content": "# テキスト処理の達人\n\nPerlは、文字情報の処理が非常に得意なプログラミング言語です。「ラクダ」がトレードマークで、昔からWebサーバーの管理や、情報の整理に広く使われてきました。"
        },
        {
          "title": "画面に文字を出すには？",
          "image": "/illustrations/common/monitor.png",
          "content": "# print（プリント）\n\n画面に文字を出したいときは、`print` 命令を使います。文字は `\" \"`（ダブルクォート）で囲んで入力しましょう。最後に `;`（セミコロン）を忘れないように！"
        },
        {
          "title": "print を使いましょう",
          "image": "/illustrations/common/monitor.png",
          "content": "# メッセージを表示します\n\n画面に文字を出したいときは、`print` と入力して、そのあとに `\" \"` で囲んだ文字を入力します。さいごに `\\n` と入力すると、改行（かいぎょう）されます。\n\n```perl\nprint \"表示したい文字\\n\";\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\n`print` を使って `Hello, World!` と表示させてみましょう。さいごに改行 `\\n` とセミコロン `;` を入力するのがルールです。\n\n**入力するコードのヒント：**\n```perl\nprint \"Hello, World!\\n\";\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# printで出力\nprint \"Hello, World!\\n\";",
      "holeyCode": "# printで出力\n___ \"Hello, World!\\n\";",
      "correctLines": [
        "# Hello, World!を表示する関数",
        "print \"Hello, World!\\n\";"
      ],
      "lineHints": [
        null,
        "画面に出す関数は `print` です。"
      ],
      "candidates": {
        "functions": [
          "print"
        ],
        "strings": [
          "\"Hello, World!\\n\""
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, World!\n"
        }
      ]
    },
    {
      "title": "変数を使ってみましょう",
      "description": "Perlでは変数名の前に$（ドル記号）をつけます。変数に文字を入れて表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "スカラー変数",
          "image": "/illustrations/common/pencil.png",
          "content": "# $で始まる変数\n\nPerlでは、1つの値を入れる変数を「スカラー変数」といい、名前の前に `$` をつけます。\n\n```perl\nmy $name = \"太郎\";\n```\n\n`my` は「新しい変数を作ります」という宣言です。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\n変数 `$message` に `'Perl'` を入れて、それを表示しましょう。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 変数に文字を入れる\nmy $message = \"Perl\";\nprint \"$message\\n\";",
      "holeyCode": "# 変数に文字を入れる\n___ $message = \"Perl\";\nprint \"$message\\n\";",
      "correctLines": [
        "# 変数に文字を入れる",
        "my $message = \"Perl\";",
        "print \"$message\\n\";"
      ],
      "lineHints": [
        null,
        "変数を宣言するキーワードを入力しましょう。",
        null
      ],
      "candidates": {
        "keywords": ["my", "our", "local", "var"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Perl\n"
        }
      ]
    },
    {
      "title": "計算をしてみましょう",
      "description": "変数を使って数字の計算をしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "数字の計算",
          "image": "/illustrations/3d_advanced/science.png",
          "content": "# 計算してみよう\n\nPerlでも普通の計算ができます。\n\n```perl\nmy $sum = 10 + 5;\nprint $sum;  # 15が表示される\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\n`$a` に7、`$b` に3を入れて、足し算の結果を `$sum` に入れて表示しましょう。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 足し算する\nmy $a = 7;\nmy $b = 3;\nmy $sum = $a + $b;\nprint \"$sum\\n\";",
      "holeyCode": "# 足し算する\nmy $a = 7;\nmy $b = 3;\nmy $sum = $a ___ $b;\nprint \"$sum\\n\";",
      "correctLines": [
        "# 足し算する",
        "my $a = 7;",
        "my $b = 3;",
        "my $sum = $a + $b;",
        "print \"$sum\\n\";"
      ],
      "lineHints": [
        null,
        null,
        null,
        "足し算の記号を入力しましょう。",
        null
      ],
      "candidates": {
        "operators": ["+", "-", "*", "/"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "文字をつなげましょう",
      "description": "ドット（.）を使って文字と文字をつなげてみましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "文字の連結",
          "image": "/illustrations/common/pencil.png",
          "content": "# ドットで文字をつなげる\n\nPerlでは `.`（ドット）で文字をつなげます。\n\n```perl\nmy $result = \"Hello\" . \"World\";\n# 結果: \"HelloWorld\"\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\n`'Hello, '` と `'Perl!'` をつなげて表示しましょう。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 文字をつなげる\nmy $greeting = \"Hello, \" . \"Perl!\";\nprint \"$greeting\\n\";",
      "holeyCode": "# 文字をつなげる\nmy $greeting = \"Hello, \" ___ \"Perl!\";\nprint \"$greeting\\n\";",
      "correctLines": [
        "# 文字をつなげる",
        "my $greeting = \"Hello, \" . \"Perl!\";",
        "print \"$greeting\\n\";"
      ],
      "lineHints": [
        null,
        "文字をつなげる記号を入力しましょう。",
        null
      ],
      "candidates": {
        "operators": [".", "+", ",", "&"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, Perl!\n"
        }
      ]
    },
    {
      "title": "配列を使いましょう",
      "description": "@（アットマーク）を使って、複数の値をまとめて入れる配列を作りましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "配列とは？",
          "image": "/illustrations/common/book.png",
          "content": "# @で始まる配列\n\n複数の値をまとめて入れるものを「配列」といいます。Perlでは名前の前に `@` をつけます。\n\n```perl\nmy @colors = (\"赤\", \"青\", \"緑\");\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\n配列 `@fruits` に `'りんご'`, `'みかん'`, `'ぶどう'` を入れて、最初の要素を表示しましょう。\n\n配列の要素は `$配列名[番号]` で取り出します（最初は0番目）。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 配列を作る\nmy @fruits = (\"りんご\", \"みかん\", \"ぶどう\");\nprint \"$fruits[0]\\n\";",
      "holeyCode": "# 配列を作る\nmy ___ = (\"りんご\", \"みかん\", \"ぶどう\");\nprint \"$fruits[0]\\n\";",
      "correctLines": [
        "# 配列を作る",
        "my @fruits = (\"りんご\", \"みかん\", \"ぶどう\");",
        "print \"$fruits[0]\\n\";"
      ],
      "lineHints": [
        null,
        "配列名を入力しましょう。@をつけます。",
        null
      ],
      "candidates": {
        "variables": ["@fruits", "@colors", "$fruits", "$colors"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "りんご\n"
        }
      ]
    },
    {
      "title": "if文で条件分岐しましょう",
      "description": "ifを使って、条件が正しいときだけ実行するプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if文（イフぶん）",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 条件で分ける\n\n「もし〜なら」という条件をつけたいときは `if` を使います。\n\n```perl\nif ($age >= 18) {\n  print \"大人です\\n\";\n}\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\n`$score` が100のとき、`'満点！'` と表示しましょう。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 条件分岐\nmy $score = 100;\nif ($score == 100) {\n  print \"満点！\\n\";\n}",
      "holeyCode": "# 条件分岐\nmy $score = 100;\n___ ($score == 100) {\n  print \"満点！\\n\";\n}",
      "correctLines": [
        "# 条件分岐",
        "my $score = 100;",
        "if ($score == 100) {",
        "  print \"満点！\\n\";",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "条件分岐のキーワードを入力しましょう。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["if", "unless", "while", "for"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "満点！\n"
        }
      ]
    },
    {
      "title": "if-elseを使いましょう",
      "description": "条件が正しくないときの処理もelseで書いてみましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "else（エルス）",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 条件に合わないとき\n\n条件に合わないときの処理は `else` で書きます。\n\n```perl\nif ($age >= 18) {\n  print \"大人\\n\";\n} else {\n  print \"子供\\n\";\n}\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\n`$num` が10以上なら `'大きい'`、そうでなければ `'小さい'` と表示しましょう。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# if-else\nmy $num = 5;\nif ($num >= 10) {\n  print \"大きい\\n\";\n} else {\n  print \"小さい\\n\";\n}",
      "holeyCode": "# if-else\nmy $num = 5;\nif ($num >= 10) {\n  print \"大きい\\n\";\n} ___ {\n  print \"小さい\\n\";\n}",
      "correctLines": [
        "# if-else",
        "my $num = 5;",
        "if ($num >= 10) {",
        "  print \"大きい\\n\";",
        "} else {",
        "  print \"小さい\\n\";",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "条件に合わないときのキーワードを入力しましょう。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["else", "elsif", "then", "otherwise"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "小さい\n"
        }
      ]
    },
    {
      "title": "foreachでループしましょう",
      "description": "foreachを使って配列の要素を順番に処理しましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "foreach（フォーイーチ）",
          "image": "/illustrations/common/book.png",
          "content": "# 配列を繰り返し処理\n\n`foreach` を使うと、配列の要素を1つずつ取り出して処理できます。\n\n```perl\nforeach my $item (@list) {\n  print \"$item\\n\";\n}\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\n配列 `@animals` の動物を順番に表示しましょう。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 配列をループ\nmy @animals = (\"犬\", \"猫\", \"鳥\");\nforeach my $animal (@animals) {\n  print \"$animal\\n\";\n}",
      "holeyCode": "# 配列をループ\nmy @animals = (\"犬\", \"猫\", \"鳥\");\n___ my $animal (@animals) {\n  print \"$animal\\n\";\n}",
      "correctLines": [
        "# 配列をループ",
        "my @animals = (\"犬\", \"猫\", \"鳥\");",
        "foreach my $animal (@animals) {",
        "  print \"$animal\\n\";",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "配列をループするキーワードを入力しましょう。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["foreach", "for", "while", "until"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "犬\n猫\n鳥\n"
        }
      ]
    },
    {
      "title": "ハッシュを使いましょう",
      "description": "%（パーセント）を使って、キーと値のペアを保存するハッシュを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "ハッシュとは？",
          "image": "/illustrations/common/book.png",
          "content": "# %で始まるハッシュ\n\nハッシュは、名前（キー）と値のペアを保存できます。名前の前に `%` をつけます。\n\n```perl\nmy %person = (\n  \"name\" => \"太郎\",\n  \"age\" => 10\n);\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\nハッシュ `%fruit` に `color => '赤'` を入れて、colorの値を表示しましょう。\n\nハッシュの値は `$ハッシュ名{キー}` で取り出します。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# ハッシュを作る\nmy %fruit = (\"color\" => \"赤\");\nprint \"$fruit{color}\\n\";",
      "holeyCode": "# ハッシュを作る\nmy ___ = (\"color\" => \"赤\");\nprint \"$fruit{color}\\n\";",
      "correctLines": [
        "# ハッシュを作る",
        "my %fruit = (\"color\" => \"赤\");",
        "print \"$fruit{color}\\n\";"
      ],
      "lineHints": [
        null,
        "ハッシュ名を入力しましょう。%をつけます。",
        null
      ],
      "candidates": {
        "variables": ["%fruit", "%color", "@fruit", "$fruit"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "赤\n"
        }
      ]
    },
    {
      "title": "サブルーチンを作りましょう",
      "description": "subを使って、繰り返し使える処理（サブルーチン）を作りましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "サブルーチン",
          "image": "/illustrations/common/monitor.png",
          "content": "# 処理をまとめる\n\n`sub` を使うと、処理をまとめて名前をつけられます。これを「サブルーチン」といいます。\n\n```perl\nsub greet {\n  print \"こんにちは！\\n\";\n}\n\ngreet();  # 呼び出し\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\n`'Welcome!'` と表示するサブルーチン `welcome` を作って呼び出しましょう。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# サブルーチンを定義\nsub welcome {\n  print \"Welcome!\\n\";\n}\n\n# 呼び出し\nwelcome();",
      "holeyCode": "# サブルーチンを定義\n___ welcome {\n  print \"Welcome!\\n\";\n}\n\n# 呼び出し\nwelcome();",
      "correctLines": [
        "# サブルーチンを定義",
        "sub welcome {",
        "  print \"Welcome!\\n\";",
        "}",
        "",
        "# 呼び出し",
        "welcome();"
      ],
      "lineHints": [
        null,
        "サブルーチンを定義するキーワードを入力しましょう。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["sub", "def", "function", "fn"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Welcome!\n"
        }
      ]
    }
  ]
};

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
      "correctCode": "# printで出力\\nprint \"Hello, World!\\n\";",
      "holeyCode": "# printで出力\\n___ \"___\\n___",
      "correctLines": [
          "# printで出力",
          "print \"Hello, World!",
          "\";"
        ],
      "lineHints": [
          null,
          "画面に出す関数は `print` です。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "print"
          ],
          "strings": [
            "\"Hello, World!\\n\""
          ],
          "others": ["\";", "Hello, World!"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello, World!\\n"
          }
        ]
      },
    {
      "title": "変数を使ってみましょう",
      "correctCode": "# 変数に文字を入れる\\nmy $message = \"Perl\";\\nprint \"$message\\n\";",
      "holeyCode": "# 変数に文字を入れる\\n___ $___ = \"___\";\\n___ \"$___\\n___",
      "correctLines": [
          "# 変数に文字を入れる",
          "my $message = \"Perl\";",
          "print \"$message",
          "\";"
        ],
      "lineHints": [
          null,
          "変数を宣言するためのキーワードです。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "my",
            "our",
            "local",
            "var"
          ],
          "others": ["message", "print", "\";", "Perl"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Perl\\n"
          }
        ]
      },
    {
      "title": "計算をしてみましょう",
      "correctCode": "# 足し算する\\nmy $a = 7;\\nmy $b = 3;\\n# 2つの変数を足し算する\\nmy $sum = $a + $b;\\nprint \"$sum\\n\";",
      "holeyCode": "# 足し算する\\n___ $___ = ___;\\n___ $___ = ___;\\n# 2つの変数を足し算する\\n___ $___ = $___ ___ $___;\\n___ \"$___\\n___",
      "correctLines": [
          "# 足し算する",
          "my $a = 7;",
          "my $b = 3;",
          "# 2つの変数を足し算する",
          "my $sum = $a + $b;",
          "print \"$sum",
          "\";"
        ],
      "lineHints": [
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "加算を行う演算子です。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "+",
            "-",
            "*",
            "/"
          ],
          "others": ["a", "b", "sum", "print", "\";", "my", "7", "3"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "文字をつなげましょう",
      "correctCode": "# 文字をつなげる\\nmy $greeting = \"Hello, \" . \"Perl!\";\\nprint \"$greeting\\n\";",
      "holeyCode": "# 文字をつなげる\\n___ $___ = \"___\" ___ \"___\";\\n___ \"$___\\n___",
      "correctLines": [
          "# 文字をつなげる",
          "my $greeting = \"Hello, \" . \"Perl!\";",
          "print \"$greeting",
          "\";"
        ],
      "lineHints": [
          null,
          "文字列を連結する演算子です。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            ".",
            "+",
            ",",
            "&"
          ],
          "others": ["greeting", "print", "\";", "my", "Hello,", "Perl!"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello, Perl!\\n"
          }
        ]
      },
    {
      "title": "配列を使いましょう",
      "correctCode": "# 配列を作る\\nmy @fruits = (\"りんご\", \"みかん\", \"ぶどう\");\\nprint \"$fruits[0]\\n\";",
      "holeyCode": "# 配列を作る\\n___ @___ = (\"___\", \"___\", \"___\");\\n___ \"$___[___]\\n___",
      "correctLines": [
          "# 配列を作る",
          "my @fruits = (\"りんご\", \"みかん\", \"ぶどう\");",
          "print \"$fruits[0]",
          "\";"
        ],
      "lineHints": [
          null,
          "配列名を入力しましょう。@をつけます。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "@fruits",
            "@colors",
            "$fruits",
            "$colors"
          ],
          "others": ["fruits", "print", "\";", "my", "りんご", "みかん", "ぶどう", "0"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "りんご\\n"
          }
        ]
      },
    {
      "title": "if文で条件分岐しましょう",
      "correctCode": "# 条件分岐\\nmy $score = 100;\\n# もしスコアが100なら\\nif ($score == 100) {\\n  print \"満点！\\n\";\\n}",
      "holeyCode": "# 条件分岐\\n___ $___ = ___;\\n# もしスコアが100なら\\n___ ($___ ___ ___) ___\\n  ___ \"___\\n___\\n___",
      "correctLines": [
          "# 条件分岐",
          "my $score = 100;",
          "# もしスコアが100なら",
          "if ($score == 100) {",
          "  print \"満点！",
          "\";",
          "}"
        ],
      "lineHints": [
          null,
          "ここを正しく入力してください。",
          null,
          "条件分岐を開始するキーワードです。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "if",
            "unless",
            "while",
            "for"
          ],
          "others": ["score", "==", "print", "}", "\";", "my", "100", "{", "満点！"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "満点！\\n"
          }
        ]
      },
    {
      "title": "if-elseを使いましょう",
      "correctCode": "# if-else\\nmy $num = 5;\\nif ($num >= 10) {\\n  print \"大きい\\n\";\\n# そうでなければ\\n} else {\\n  print \"小さい\\n\";\\n}",
      "holeyCode": "# if-else\\n___ $___ = ___;\\n___ ($___ ___ ___) ___\\n  ___ \"___\\n___\\n# そうでなければ\\n___ ___ ___\\n  ___ \"___\\n___\\n___",
      "correctLines": [
          "# if-else",
          "my $num = 5;",
          "if ($num >= 10) {",
          "  print \"大きい",
          "\";",
          "# そうでなければ",
          "} else {",
          "  print \"小さい",
          "\";",
          "}"
        ],
      "lineHints": [
          null,
          "もし条件が満たされなかった場合に実行する処理を記述します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          "条件が偽の場合の処理を定義する。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "else",
            "elsif",
            "then",
            "otherwise"
          ],
          "others": ["num", ">=", "{", "print", "}", "{", "\";", "my", "5", "if", "10", "大きい", "小さい"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "小さい\\n"
          }
        ]
      },
    {
      "title": "foreachでループしましょう",
      "correctCode": "# 配列をループ\\nmy @animals = (\"犬\", \"猫\", \"鳥\");\\n# 配列の各要素について繰り返す\\nforeach my $animal (@animals) {\\n  print \"$animal\\n\";\\n}",
      "holeyCode": "# 配列をループ\\n___ @___ = (\"___\", \"___\", \"___\");\\n# 配列の各要素について繰り返す\\n___ ___ $___ (@___) ___\\n  ___ \"$___\\n___\\n___",
      "correctLines": [
          "# 配列をループ",
          "my @animals = (\"犬\", \"猫\", \"鳥\");",
          "# 配列の各要素について繰り返す",
          "foreach my $animal (@animals) {",
          "  print \"$animal",
          "\";",
          "}"
        ],
      "lineHints": [
          null,
          "配列の各要素を処理するキーワードです。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "foreach",
            "for",
            "while",
            "until"
          ],
          "others": ["animals", "print", "}", "\";", "my", "犬", "猫", "鳥", "animal", "{"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "犬\\n猫\\n鳥\\n"
          }
        ]
      },
    {
      "title": "ハッシュを使いましょう",
      "correctCode": "# ハッシュを作る\\nmy %fruit = (\"color\" => \"赤\");\\nprint \"$fruit{color}\\n\";",
      "holeyCode": "# ハッシュを作る\\n___ %___ = (\"___\" ___ \"___\");\\n___ \"$___{___}\\n___",
      "correctLines": [
          "# ハッシュを作る",
          "my %fruit = (\"color\" => \"赤\");",
          "print \"$fruit{color}",
          "\";"
        ],
      "lineHints": [
          null,
          "ハッシュ名を入力しましょう。%をつけます。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "%fruit",
            "%color",
            "@fruit",
            "$fruit"
          ],
          "others": ["color", "print", "my", "\";", "fruit", "=>", "赤"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "赤\\n"
          }
        ]
      },
    {
      "title": "サブルーチンを作りましょう",
      "correctCode": "# サブルーチンを定義\\nsub welcome {\\n  print \"Welcome!\\n\";\\n}\\n\\n# 呼び出し\\nwelcome();",
      "holeyCode": "# サブルーチンを定義\\n___ ___ ___\\n  ___ \"___\\n___\\n___\\n\\n# 呼び出し\\n___();",
      "correctLines": [
          "# サブルーチンを定義",
          "sub welcome {",
          "  print \"Welcome!",
          "\";",
          "}",
          "",
          "# 呼び出し",
          "welcome();"
        ],
      "lineHints": [
          null,
          "関数（サブルーチン）を定義するキーワードです。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          null,
          "関数（welcome）を呼び出して実行する。"
        ],
        "candidates": {
          "keywords": [
            "sub",
            "def",
            "function",
            "fn"
          ],
          "others": ["welcome", "print", "}", "\";", "}", "{", "Welcome!"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Welcome!\\n"
          }
        ]
      }
  ]
};

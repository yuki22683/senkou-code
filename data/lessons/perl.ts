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
      "holeyCode": "# printで出力\\n___ \"Hello, World!\\n___",
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
          "others": ["\";"]
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
      "holeyCode": "# 変数に文字を入れる\\nmy $___ = \"Perl\";\\n___ \"$message\\n___",
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
          "others": ["message", "print", "\";"]
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
      "holeyCode": "# 足し算する\\nmy $___ = 7;\\nmy $___ = 3;\\n# 2つの変数を足し算する\\nmy $___ = $a + $b;\\n___ \"$sum\\n___",
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
          "others": ["a", "b", "sum", "print", "\";"]
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
      "holeyCode": "# 文字をつなげる\\nmy $___ = \"Hello, \" . \"Perl!\";\\n___ \"$greeting\\n___",
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
          "others": ["greeting", "print", "\";"]
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
      "holeyCode": "# 配列を作る\\nmy @___ = (\"りんご\", \"みかん\", \"ぶどう\");\\n___ \"$fruits[0]\\n___",
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
          "others": ["fruits", "print", "\";"]
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
      "holeyCode": "# 条件分岐\\nmy $___ = 100;\\n# もしスコアが100なら\\nif ($score ___ == ___) {\\n  ___ \"満点！\\n___\\n___",
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
          "others": ["score", "==", "print", "}", "\";"]
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
      "holeyCode": "# if-else\\nmy $___ = 5;\\nif ($num ___ >= ___) {\\n  ___ \"大きい\\n___\\n# そうでなければ\\n} ___ {\\n  ___ \"小さい\\n___\\n___",
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
          "others": ["num", ">=", "{", "print", "}", "{", "\";"]
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
      "holeyCode": "# 配列をループ\\nmy @___ = (\"犬\", \"猫\", \"鳥\");\\n# 配列の各要素について繰り返す\\nforeach my $animal (@___) {\\n  ___ \"$animal\\n___\\n___",
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
          "others": ["animals", "print", "}", "\";"]
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
      "holeyCode": "# ハッシュを作る\\n___ %fruit = (\"___\" => \"赤\");\\n___ \"$fruit{color}\\n___",
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
          "others": ["color", "print", "my", "\";"]
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
      "holeyCode": "# サブルーチンを定義\\nsub ___ {\\n  ___ \"Welcome!\\n___\\n___\\n\\ ___\\n# 呼び出し\\n___();",
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
          "others": ["welcome", "print", "}", "\";", "}"]
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

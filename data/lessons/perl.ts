export const perlData = {
  "language": "perl",
  "lessonId": "perl-1",
  "lessonTitle": "Perl I",
  "lessonDescription": "テキスト処理が得意な軽量プログラミング言語Perlの基礎を学びます。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "Hello World",
      "description": "Perlで文字を出力してみましょう。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "print関数",
          "content": "# 文字の出力\n\n`print` を使って文字を出力します。改行コード `\n` を明示的に入れるのが一般的です。\n\n```perl\nprint \"表示したい文字\\n\";\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n`Hello, World!` と出力し、最後に改行 `\n` を入れましょう。\nセミコロン ; も忘れずに。\n\n**コード例：**\n```perl\nprint \"Hello, World!\\n\";\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# Hello, World!を表示\nprint \"Hello, World!\\n\";",
      "holeyCode": "# Hello, World!を表示\n___ \"Hello, World!\\n\";",
      "correctLines": [
        "# Hello, World!を表示",
        "print \"Hello, World!\\n\";"
      ],
      "lineHints": [
        null,
        "命令は print です。"
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
      "title": "スカラー変数",
      "description": "単一の値を扱うスカラー変数について学びましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "スカラー変数",
          "content": "# $記号\n\nPerlでは変数（スカラー変数）の前に $ を付けます。数値も文字列も入れられます。\n\n```perl\n$name = \"Perl\";\nprint $name;\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n変数 $name に `\"Perl\"` を代入して表示しましょう。\n\n**コード例：**\n```perl\n$name = \"Perl\";\nprint $name;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 変数に代入\n$name = \"Perl\";\n# 変数を表示\nprint $name;",
      "holeyCode": "# 変数に代入\n$name = \"Perl\";\n# 変数を表示\nprint ___;",
      "correctLines": [
        "# 変数に代入",
        "$name = \"Perl\";",
        "# 変数を表示",
        "print $name;"
      ],
      "lineHints": [
        null,
        null,
        null,
        "変数 $name を指定します。"
      ],
      "candidates": {
        "variables": [
          "$name"
        ],
        "functions": [
          "print"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Perl"
        }
      ]
    },
    {
      "title": "数値の計算",
      "description": "基本的な数値計算を行ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "四則演算",
          "content": "# 基本的な演算子\n\n- + : 足し算\n- - : 引き算\n- * : 掛け算\n- / : 割り算\n\n```perl\n$x = 10;\n$y = 5;\nprint $x + $y;\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n変数 $x に `10`、$y に 5 を代入し、その和を表示しましょう。\n\n**コード例：**\n```perl\n$x = 10;\n$y = 5;\nprint $x + $y;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "$x = 10;\n$y = 5;\nprint $x + $y;",
      "holeyCode": "$x = 10;\n$y = 5;\nprint $x ___ $y;",
      "correctLines": [
        "$x = 10;",
        "$y = 5;",
        "print $x + $y;"
      ],
      "lineHints": [
        null,
        null,
        "足し算の演算子 + を使います。"
      ],
      "candidates": {
        "variables": [
          "$x",
          "$y"
        ],
        "operators": [
          "+"
        ],
        "functions": [
          "print"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "15"
        }
      ]
    },
    {
      "title": "文字列の連結",
      "description": "文字列同士を連結する方法を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "ドット演算子",
          "content": "# . (ドット)で繋ぐ\n\nPerlでは . を使って文字列を連結します。\n\n```perl\n$str1 = \"Hello\";\n$str2 = \"World\";\nprint $str1 . \" \" . $str2;\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n`\"Hello\"` と `\"World\"` を連結して表示しましょう（間にスペースは入れません）。\n\n**コード例：**\n```perl\n$a = \"Hello\";\n$b = \"World\";\nprint $a . $b;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "$a = \"Hello\";\n$b = \"World\";\nprint $a . $b;",
      "holeyCode": "$a = \"Hello\";\n$b = \"World\";\nprint $a ___ $b;",
      "correctLines": [
        "$a = \"Hello\";",
        "$b = \"World\";",
        "print $a . $b;"
      ],
      "lineHints": [
        null,
        null,
        "文字列連結にはドット . を使います。"
      ],
      "candidates": {
        "variables": [
          "$a",
          "$b"
        ],
        "operators": [
          "."
        ],
        "functions": [
          "print"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "HelloWorld"
        }
      ]
    },
    {
      "title": "配列",
      "description": "複数の値を順番に保持する配列について学びましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "配列変数",
          "content": "# @記号\n\n配列全体を表すときは @ を使います。\n個別の要素にアクセスするときは $ を使い、添字（インデックス）を指定します。\n\n```perl\n@colors = (\"red\", \"blue\");\nprint $colors[0]; # red\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n配列 @colors を定義し、最初の要素 `red` を表示しましょう。\n\n**コード例：**\n```perl\n@colors = (\"red\", \"blue\");\nprint $colors[0];\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "@colors = (\"red\", \"blue\");\nprint $colors[0];",
      "holeyCode": "@colors = (\"red\", \"blue\");\nprint $colors[___];",
      "correctLines": [
        "@colors = (\"red\", \"blue\");",
        "print $colors[0];"
      ],
      "lineHints": [
        null,
        "最初の要素のインデックスは 0 です。"
      ],
      "candidates": {
        "variables": [
          "@colors",
          "$colors"
        ],
        "numbers": [
          "0"
        ],
        "functions": [
          "print"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "red"
        }
      ]
    },
    {
      "title": "ハッシュ (連想配列)",
      "description": "キーと値のペアでデータを管理するハッシュについて学びましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "ハッシュ変数",
          "content": "# %記号\n\nハッシュ全体を表すときは % を使います。\n要素にアクセスするときは $ と `{}` を使います。\n\n```perl\n%ages = (\"Alice\", 25, \"Bob\", 30);\nprint $ages{\"Alice\"};\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\nハッシュ %ages から `Alice` の年齢を取り出して表示しましょう。\n\n**コード例：**\n```perl\n%ages = (\"Alice\", 25, \"Bob\", 30);\nprint $ages{\"Alice\"};\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "%ages = (\"Alice\", 25, \"Bob\", 30);\nprint $ages{\"Alice\"};",
      "holeyCode": "%ages = (\"Alice\", 25, \"Bob\", 30);\nprint $ages{___};",
      "correctLines": [
        "%ages = (\"Alice\", 25, \"Bob\", 30);",
        "print $ages{\"Alice\"};"
      ],
      "lineHints": [
        null,
        "キー \"Alice\" を指定します（引用符を忘れずに）。"
      ],
      "candidates": {
        "variables": [
          "%ages",
          "$ages"
        ],
        "strings": [
          "\"Alice\""
        ],
        "functions": [
          "print"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "25"
        }
      ]
    },
    {
      "title": "if文",
      "description": "if文を使って条件分岐を行ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "if文の書き方",
          "content": "# 構文\n\n```perl\nif ($score > 80) {\n    print \"Great!\\n\";\n}\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n$score が `100` のとき、`80` より大きければ `Great!` と表示させましょう。\n\n**コード例：**\n```perl\n$score = 100;\nif ($score > 80) {\n    print \"Great!\\n\";\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "$score = 100;\nif ($score > 80) {\n    print \"Great!\\n\";\n}",
      "holeyCode": "$score = 100;\nif (___ > 80) {\n    print \"Great!\\n\";\n}",
      "correctLines": [
        "$score = 100;",
        "if ($score > 80) {",
        "    print \"Great!\\n\";",
        "}"
      ],
      "lineHints": [
        null,
        "比較対象の変数 $score を指定します。",
        null,
        null
      ],
      "candidates": {
        "variables": [
          "$score"
        ],
        "operators": [
          ">"
        ],
        "functions": [
          "print"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Great!\n"
        }
      ]
    },
    {
      "title": "if-else文",
      "description": "if-elseを使って条件に応じた分岐を行いましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "else",
          "content": "# elsIf ではなく else\n\n```perl\nif ($age >= 20) {\n    print \"Adult\";\n} else {\n    print \"Child\";\n}\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n`$age` が `10` のとき、`20` 未満なので `Child` と表示させましょう。\n\n**コード例：**\n```perl\n$age = 10;\nif ($age >= 20) {\n    print \"Adult\";\n} else {\n    print \"Child\";\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "$age = 10;\nif ($age >= 20) {\n    print \"Adult\";\n} else {\n    print \"Child\";\n}",
      "holeyCode": "$age = 10;\nif ($age >= 20) {\n    print \"Adult\";\n} ___ {\n    print \"Child\";\n}",
      "correctLines": [
        "$age = 10;",
        "if ($age >= 20) {",
        "    print \"Adult\";",
        "} else {",
        "    print \"Child\";",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "条件以外の場合を表す else を使います。",
        null,
        null
      ],
      "candidates": {
        "keywords": [
          "else",
          "elsif"
        ],
        "functions": [
          "print"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Child"
        }
      ]
    },
    {
      "title": "繰り返し (foreach)",
      "description": "foreachループを使ってリストの要素を順に処理しましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "foreachループ",
          "content": "# リストの反復\n\n`foreach` を使うと配列の要素を簡単にループできます。\n\n```perl\n@nums = (1, 2, 3);\nforeach $num (@nums) {\n    print $num;\n}\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n配列 @nums の要素をループで取り出して表示しましょう。\n\n**コード例：**\n```perl\n@nums = (1, 2);\nforeach $num (@nums) {\n    print $num;\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "@nums = (1, 2);\nforeach $num (@nums) {\n    print $num;\n}",
      "holeyCode": "@nums = (1, 2);\nforeach $num (___) {\n    print $num;\n}",
      "correctLines": [
        "@nums = (1, 2);",
        "foreach $num (@nums) {",
        "    print $num;",
        "}"
      ],
      "lineHints": [
        null,
        "ループ対象の配列 @nums を指定します。",
        null,
        null
      ],
      "candidates": {
        "keywords": [
          "foreach"
        ],
        "variables": [
          "@nums",
          "$num"
        ],
        "functions": [
          "print"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "12"
        }
      ]
    },
    {
      "title": "サブルーチン",
      "description": "処理をまとめるサブルーチン（関数）の作り方を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "subキーワード",
          "content": "# 定義と呼び出し\n\n```perl\nsub greet {\n    print \"Hello\";\n}\n&greet; # 呼び出し（&を付けるのが伝統的ですが省略可能な場合もあります）\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n`Hello` と表示するサブルーチン `greet` を定義し、呼び出してみましょう。\n\n**コード例：**\n```perl\nsub greet {\n    print \"Hello\";\n}\n&greet;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "sub greet {\n    print \"Hello\";\n}\n&greet;",
      "holeyCode": "___ greet {\n    print \"Hello\";\n}\n&greet;",
      "correctLines": [
        "sub greet {",
        "    print \"Hello\";",
        "}",
        "&greet;"
      ],
      "lineHints": [
        "サブルーチン定義には sub を使います。",
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": [
          "sub"
        ],
        "functions": [
          "greet",
          "print"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello"
        }
      ]
    }
  ]
}

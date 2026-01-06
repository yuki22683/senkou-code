export const perlData = {
  "language": "perl",
  "lessonId": "perl-1",
  "lessonTitle": "Perl (パール) にちょうせん！",
  "lessonDescription": "文字をいじったり、整理したりするのが得意な言葉「Perl（パール）」のきほんを学びましょう。古くからたくさんの人に愛されている言葉ですよ。",
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
          "title": "print を使いましょう",
          "content": "# メッセージを表示します\n\n画面に文字を出したいときは、`print` と入力して、そのあとに `\" \"` で囲んだ文字を入力します。さいごに `\\n` と入力すると、改行（かいぎょう）されますよ。\n\n```perl\nprint \"表示したい文字\\n\";\n```"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\n`print` を使って `Hello, World!` と表示させてみましょう。さいごに改行 `\\n` とセミコロン `;` を入力するのがルールです。\n\n**入力するコードのヒント：**\n```perl\nprint \"Hello, World!\\n\";\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# Hello, World!を表示する関数\nprint \"Hello, World!\\n\";",
      "holeyCode": "# Hello, World!を表示する関数\n___ \"Hello, World!\\n\";",
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
      "title": "数字や文字を入れる「はこ」",
      "description": "データをしまっておく「はこ（変数）」を使ってみましょう。Perlでは名前の前に $（ドル記号）をつけます。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "$ から始めます",
          "content": "# スカラー変数\n\nPerlでは、1つのデータを入れる「はこ」の名前の前に必ず `$" をつける決まりがあります。数字でも文字でも、なんでも入れることができますよ。\n\n```perl\n$name = \"Perl\";\nprint $name;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# はこに中身を入れる\n$name = \"Perl\";\n# はこの中身を出す\nprint $name;",
      "holeyCode": "# はこに中身を入れる\n$name = \"Perl\";\n# はこの中身を出す\nprint ___;",
      "correctLines": [
        "# はこに中身を入れる",
        "$name = \"Perl\";",
        "# はこの中身を出す",
        "print $name;"
      ],
      "lineHints": [
        null,
        "name というはこに \"Perl\" を入力します。",
        null,
        "はこの名前 `$name` を指定します。"
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
      "title": "コンピュータで計算しましょう",
      "description": "Perlを使って、たし算をしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "計算の記号",
          "content": "# 算数と同じ記号を使います\n\nPerlでも、こんな記号を使って計算をしますよ。\n\n- **+** : たし算\n- **-** : ひき算\n- **\\*** : かけ算\n- **/** : わり算"
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
        "たし算なので `+" を入力します。"
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
      "title": "文字と「はこ」をくっつけましょう",
      "description": "ドット（.）という記号を使って、2つの文字をガチャンとくっつけてみましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": ". （ドット）を使いましょう",
          "content": "# 文字の合体\n\nPerlでは、文字やはこの中身をくっつけるときに `.` を使います。2つのものを1つの文章につなげることができますよ。\n\n**コード例：**\n```perl\n$a = \"Hello\";\n$b = \"World\";\nprint $a . $b; # HelloWorld と表示されます\n```"
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
        "文字をくっつける記号 `.` を入力します。"
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
      "title": "データをならべる「配列」",
      "description": "たくさんのデータを一つの「長い はこ」にまとめて入れられる「配列（はいれつ）」を使ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "@ から始めます",
          "content": "# データのリスト\n\n配列全体をあらわすときは `@` をつけますが、中身を一つずつ取り出すときは `$" に変えて、番号を指定します。さいしょのデータは **「0番」** ですよ。\n\n**コード例：**\n```perl\n@colors = (\"あか\", \"あお\");\nprint $colors[0]; # 「あか」が表示されます\n```"
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
        "1番目のデータの番号は 0 です。 `$colors[0]` と入力してください。"
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
      "title": "名前で探す「ハッシュ」",
      "description": "「ハッシュ」という機能を使うと、名前を指定してデータを取り出せます。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "% から始めます",
          "content": "# キーとあたいのペア\n\nハッシュ全体をあらわすときは `%` をつけます。取り出すときは `$" に変えて、`{ \"名前\" }` というふうに指定しますよ。\n\n**コード例：**\n```perl\n%user = (\"name\", \"たろう\");\nprint $user{\"name\"}; # 「たろう」が表示されます\n```"
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
        "\"Alice\" という名前（キー）を指定します。 \" \" で囲むのを忘れないでください。"
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
      "title": "「もし〜なら」で分けましょう",
      "description": "条件によって表示するメッセージを変えてみましょう。 if（イフ）を使います。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "if文の書きかた",
          "content": "# ( ) と { } を使います\n\nPerlでは、`if (条件)` のあとに `{ }` を入力して、その中にやりたいことを入力します。\n\n**コード例：**\n```perl\nif ($score > 80) {\n    print \"合格！\\n\";\n}\n```"
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
        "くらべたい「はこ」の名前 `$score` を入力しましょう。",
        null,
        null
      ],
      "candidates": {
        "variables": [
          "$score"
        ],
        "operators": [
          ">
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
      "title": "ちがう場合はどうしましょう？",
      "description": "else（エルス）を使って、「そうでなければ」の動きを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "elseブロック",
          "content": "# 二つの動き\n\n条件に当てはまらないときの動きは `else` を使って入力します。\n\n**コード例：**\n```perl\nif ($age >= 20) {\n    print \"大人です\";\n} else {\n    print \"子供です\";\n}\n```"
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
        "そうでなければ、をあらわす `else` を入力しましょう。",
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
      "title": "中身を全部出してみましょう",
      "description": "foreach（フォーイーチ）という機能を使って、配列の中身を一つずつ順番に表示しましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "foreachループ",
          "content": "# ひとつずつ取り出します\n\n`foreach $名前 (@配列)` と入力すると、中身を一つずつ取り出して処理できます。\n\n**コード例：**\n```perl\n@nums = (1, 2, 3);\nforeach $n (@nums) {\n    print $n;\n}\n```"
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
        "対象となる配列の名前 `@nums` を入力しましょう。",
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
      "title": "自分だけの関数を作りましょう",
      "description": "よく使う手順をまとめて、名前をつけた「関数（かんすう）」を作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "sub と名前",
          "content": "# 関数の定義\n\nやりたいことをひとまとめにして、名前をつけることができます。呼び出すだけでいつでも動かせますよ。 Perlでは `sub`（サブ）という言葉を使います。\n\n**コード例：**\n```perl\nsub aisatsu {\n    print \"こんにちは\";\n}\n&aisatsu; # 呼び出し\n```"
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
        "関数を定義するための言葉 `sub` と入力します。",
        null,
        "関数の終わりです。",
        "定義した関数を呼び出して、実行します。"
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
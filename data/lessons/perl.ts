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
          "content": "# 目標\n\n`Hello, World!` と出力し、最後に改行 `\n` を入れましょう。\nセミコロン `;` も忘れずに。\n\n**コード例：**\n```perl\nprint \"Hello, World!\\n\";\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# Hello, World!を表示\nprint \"Hello, World!\\n\";",
      "holeyCode": "# Hello, World!を表示\n___ \"Hello, World!\\n\";",
      "correctLines": ["# Hello, World!を表示", "print \"Hello, World!\\n\";"],
      "lineHints": [
        null,
        "命令は print です。"
      ],
      "candidates": {
        "functions": ["print"],
        "strings": ["\"Hello, World!\\n\""]
      },
      "testCases": [{ "input": "", "expected_output": "Hello, World!\n" }]
    },
    {
      "title": "変数を使う",
      "description": "Perlでの変数の扱い方を学びましょう。変数の頭に `$` を付けます。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "スカラー変数",
          "content": "# $記号\n\nPerlでは変数（スカラー変数）の前に `$` を付けます。\n\n```perl\n$name = \"Perl\";\nprint $name;\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n変数 `$name` に `\"Perl\"` を代入して表示しましょう。\n\n**コード例：**\n```perl\n$name = \"Perl\";\nprint $name;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 変数に代入\n$name = \"Perl\";\n# 変数を表示\nprint $name;",
      "holeyCode": "# 変数に代入\n$name = \"Perl\";\n# 変数を表示\nprint ___;",
      "correctLines": ["# 変数に代入", "$name = \"Perl\";", "# 変数を表示", "print $name;"],
      "lineHints": [
        null,
        null,
        null,
        "変数 $name を指定します。"
      ],
      "candidates": {
        "variables": ["$name"],
        "functions": ["print"]
      },
      "testCases": [{ "input": "", "expected_output": "Perl" }]
    },
    {
      "title": "if文",
      "description": "if文を使って条件分岐を行ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "if文の書き方",
          "content": "# 構文\n\n他の言語と似ていますが、変数の `$` を忘れないようにしましょう。\n\n```perl\nif ($score > 80) {\n    print \"Great!\\n\";\n}\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n`$score` が `100` のとき、`80` より大きければ `Great!` と表示させましょう。\n\n**コード例：**\n```perl\n$score = 100;\nif ($score > 80) {\n    print \"Great!\\n\";\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "$score = 100;\nif ($score > 80) {\n    print \"Great!\\n\";\n}",
      "holeyCode": "$score = 100;\nif (___ > 80) {\n    print \"Great!\\n\";\n}",
      "correctLines": ["$score = 100;", "if ($score > 80) {", "    print \"Great!\\n\";", "}"],
      "lineHints": [
        null,
        "比較対象の変数 $score を指定します。",
        null,
        null
      ],
      "candidates": {
        "variables": ["$score"],
        "operators": [">"] ,
        "functions": ["print"]
      },
      "testCases": [{ "input": "", "expected_output": "Great!\n" }]
    }
  ]
};
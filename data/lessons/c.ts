export const cData = {
  "language": "c",
  "lessonId": "c-1",
  "lessonTitle": "C (シー) 言語にちょうせん！",
  "lessonDescription": "たくさんのプログラミング言語のもとになった「C（シー）言語」のきほんを学びましょう。コンピュータに正しい手順で指示を出す方法を身につけます。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面に文字を出してみましょう",
      "description": "C言語を使って画面に「こんにちは」と表示させてみましょう。printf（プリントエフ）という関数（かんすう）を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "C言語の「きまり文句」",
          "content": "# おまじないを入力しましょう\n\nC言語を動かすには、必ず入力しなければいけない「決まり文句」があります。\n\n```c\n#include <stdio.h>\nint main() {\n    // ここにやりたいことを入力します\n    return 0;\n}\n```\n\n画面に文字を出すときは、`printf()` という名前の関数を使います。"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\n`printf()` を使って、画面に `Hello, World!` と表示させてみましょう。さいごに `\n` と入力すると、改行（かいぎょう）されますよ。\n\n**入力するコードのヒント：**\n```c\nprintf(\"Hello, World!\\n\");\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    // 画面にメッセージを出す関数\n    printf(\"Hello, World!\\n\");\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\nint main() {\n    // 画面にメッセージを出す関数\n    printf(\"___\\n\");\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "int main() {",
        "    printf(\"Hello, World!\\n\");",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        "関数を使えるように準備します。",
        "ここからプログラムがスタートします、という合図です。",
        "printf を使って、() の中の文字を画面に出します。",
        "プログラムが無事に終わったことを報告します。",
        "プログラムの終わりです。"
      ],
      "candidates": {
        "functions": [
          "printf"
        ],
        "strings": [
          "Hello, World!"
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
      "title": "数字を入れる「はこ」int",
      "description": "数字をしまっておく「はこ」を使ってみましょう。C言語では、はこに入れるものの種類（ラベル）を先に決める必要があります。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "ラベル（型）が必要です",
          "content": "# int（イント）ラベル\n\n整数（せいすう）を入れたいときは、`int` というラベルを貼ります。画面に出すときは `%d` という特殊な書き方を使いますよ。\n\n**コード例：**\n```c\nint x = 10;\nprintf(\"%d\\n\", x);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    // int（数字）ラベルのはこを作る\n    int x = 10;\n    printf(\"%d\\n\", x);\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\nint main() {\n    // int（数字）ラベルのはこを作る\n    int x = ___ ;\n    printf(\"%d\\n\", ___);\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "int main() {",
        "    int x = 10;",
        "    printf(\" %d\\n\", x);",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        "",
        "",
        "x = 10 と入力しましょう。",
        "はこの名前 x を指定して、中身を表示します。",
        "",
        ""
      ],
      "candidates": {
        "variables": [
          "x"
        ],
        "numbers": [
          "10"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "コンピュータで計算しましょう",
      "description": "C言語を使って、たし算をしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "計算の記号",
          "content": "# 算数と同じ記号を使います\n\nC言語でも、こんな記号を使って計算をします。\n\n- **+** : たし算\n- **-** : ひき算\n- **\\*** : かけ算\n- **/** : わり算"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    int a = 5;\n    int b = 3;\n    // たし算した答えを出す\n    printf(\"%d\\n\", a + b);\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\nint main() {\n    int a = 5;\n    int b = 3;\n    // たし算した答えを出す\n    printf(\"%d\\n\", a ___ b);\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "int main() {",
        "    int a = 5;",
        "    int b = 3;",
        "    printf(\" %d\\n\", a + b);",
        "    return 0;",
        ""
      ],
      "lineHints": [
        "",
        "",
        "a = 5 と入力しましょう。",
        "b = 3 と入力しましょう。",
        "たし算なので `+` を使います。",
        "",
        ""
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
      "description": "printf を使って、文章の中に「はこ（変数）」の中身を表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "%d を使いましょう",
          "content": "# データの埋め込み\n\n`%d` と書いたところに、あとの方の変数のなかみが入る仕組みです。\n\n**コード例：**\n```c\nint age = 10;\nprintf(\"私は %d 歳です\\n\", age);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    int age = 10;\n    printf(\"私は %d 歳です\\n\", age);\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\nint main() {\n    int age = 10;\n    printf(\"私は %d 歳です\\n\", ___);\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "int main() {",
        "    int age = 10;",
        "    printf(\"私は %d 歳です\\n\", age);",
        "    return 0;",
        ""
      ],
      "lineHints": [
        "",
        "",
        "age に 10 を入力します。",
        "はこの名前 age を指定します。",
        "",
        ""
      ],
      "candidates": {
        "variables": [
          "age"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "私は 10 歳です\n"
        }
      ]
    },
    {
      "title": "データをならべる「配列」",
      "description": "同じラベルのデータをまとめて並べておける「配列（はいれつ）」を使ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "データの番号は 0 から！",
          "content": "# { } を使って作りましょう\n\n配列の中身を取り出すときは、何番目かを指定します。さいしょのデータは **「0番」** から数えるのがルールですよ。\n\n**コード例：**\n```c\nint nums[] = {10, 20};\nprintf(\"%d\\n\", nums[0]); // 10 が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    int nums[] = {10, 20};\n    // 2番目（番号は1）を出す\n    printf(\"%d\\n\", nums[1]);\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\nint main() {\n    int nums[] = {10, 20};\n    // 2番目（番号は1）を出す\n    printf(\"%d\\n\", nums[___]);\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "int main() {",
        "    int nums[] = {10, 20};",
        "    printf(\" %d\\n\", nums[1]);",
        "    return 0;",
        ""
      ],
      "lineHints": [
        "",
        "",
        "{10, 20} と入力しましょう。 { } を使うのがルールです。",
        "2番目のデータの番号は 1 です。 `nums[1]` と入力してください。",
        "",
        ""
      ],
      "candidates": {
        "numbers": [
          "1"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "20\n"
        }
      ]
    },
    {
      "title": "「もし〜なら」で分ける if文",
      "description": "点数（score）が 80点より高いときだけ、メッセージを出すようにしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "もし〜なら（if）",
          "content": "# ( ) と { } を使いましょう\n\nC言語では、`if (条件)` のあとに `{ }` を入力して、その中にやりたいことを入力しますよ。\n\n**コード例：**\n```c\nif (score > 80) {\n    printf(\"合格！\\n\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    int score = 100;\n    if (score > 80) {\n        printf(\"Pass\\n\");\n    }\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\nint main() {\n    int score = 100;\n    if (score ___ 80) {\n        printf(\"Pass\\n\");\n    }\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "int main() {",
        "    int score = 100;",
        "    if (score > 80) {",
        "        printf(\"Pass\\n\");",
        "    }",
        "    return 0;",
        ""
      ],
      "lineHints": [
        "",
        "",
        "score = 100 と入力しましょう。",
        "比較するための記号 `>` を入力しましょう。",
        "printf(\"Pass\\n\"); と入力しましょう。",
        "さいごに } で閉じるのを忘れないでください。",
        "",
        ""
      ],
      "candidates": {
        "operators": [
          ">
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Pass\n"
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
          "title": "そうじゃなければ（else）",
          "content": "# else の使い方\n\n条件にあてはまらなかったときの動きは `else` を使って入力します。\n\n**コード例：**\n```c\nif (x > 10) {\n    printf(\"大きい\\n\");\n} else {\n    printf(\"小さい\\n\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    int x = 5;\n    if (x > 10) {\n        printf(\"Big\\n\");\n    } else {\n        printf(\"Small\\n\");\n    }\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\nint main() {\n    int x = 5;\n    if (x > 10) {\n        printf(\"Big\\n\");\n    } ___ {\n        printf(\"Small\\n\");\n    }\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "int main() {",
        "    int x = 5;",
        "    if (x > 10) {",
        "        printf(\"Big\\n\");",
        "    } else {",
        "        printf(\"Small\\n\");",
        "    }",
        "    return 0;",
        ""
      ],
      "lineHints": [
        "",
        "",
        "x に 5 を入力します。",
        "if (x > 10) { と入力しましょう。",
        "Big と表示します。",
        "そうでなければ、を表す else { と入力しましょう。",
        "Small と表示します。",
        "なみかっこを閉じます。",
        "",
        ""
      ],
      "candidates": {
        "keywords": [
          "else"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Small\n"
        }
      ]
    },
    {
      "title": "ぐるぐる回す for文",
      "description": "決められた回数だけ、処理を繰り返してみましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "くりかえし（for）",
          "content": "# 3つのきまり\n\n`for (さいしょ; いつまで; つぎの準備)` のように書きます。 `i++` は「1つ増やす」という意味ですよ。\n\n**コード例：**\n```c\nfor (int i = 0; i < 3; i++) {\n    printf(\"%d\\n\", i);\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    for (int i = 0; i < 3; i++) {\n        printf(\"%d\\n\", i);\n    }\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\nint main() {\n    for (int i = 0; i < 3; ___ ) {\n        printf(\"%d\\n\", i);\n    }\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "int main() {",
        "    for (int i = 0; i < 3; i++) {",
        "        printf(\" %d\\n\", i);",
        "    }",
        "    return 0;",
        ""
      ],
      "lineHints": [
        "",
        "",
        "i++ と入力して、番号を増やしていきます。",
        "今の番号 i を表示します。",
        "ループの終わりです。",
        "",
        ""
      ],
      "candidates": {
        "operators": [
          "i++"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "0\n1\n2\n"
        }
      ]
    },
    {
      "title": "データをまとめる「構造体」",
      "description": "いろいろな種類のデータを一つにまとめられる「構造体（こうぞうたい）」を使ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "struct（ストラクト）",
          "content": "# 自分だけのラベルを作る\n\n`struct` という言葉を使うと、複数のラベルを組み合わせた新しい型を作れます。\n\n**コード例：**\n```c\nstruct Point {\n    int x;\n    int y;\n};\n\nstruct Point p = {10, 20};\nprintf(\"%d\\n\", p.x);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nstruct Point {\n    int x;\n    int y;\n};\nint main() {\n    struct Point p = {10, 20};\n    printf(\"%d\\n\", p.x);\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\nstruct Point {\n    int x;\n    int y;\n};\nint main() {\n    struct Point p = {10, 20};\n    printf(\"%d\\n\", p.___ );\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "struct Point {",
        "    int x;",
        "    int y;",
        "};",
        "int main() {",
        "    struct Point p = {10, 20};",
        "    printf(\" %d\\n\", p.x);",
        "    return 0;",
        ""
      ],
      "lineHints": [
        "",
        "新しい構造体 Point を定義します。",
        "数字のラベル x です。",
        "数字のラベル y です。",
        "構造体の定義の終了 ; を忘れずに。",
        "",
        "構造体変数を初期化します。",
        "p.x でアクセスします。",
        "",
        ""
      ],
      "candidates": {
        "strings": [
          "x"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "自分だけの関数を作ろう",
      "description": "一連の手順をまとめて、名前をつけた「関数（かんすう）」を作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "関数を定義しましょう",
          "content": "# 手順をまとめる\n\nやりたいことをひとまとめにして、名前をつけることができます。呼び出すだけでいつでも動かせますよ。\n\n**コード例：**\n```c\nvoid greet() {\n    printf(\"こんにちは\\n\");\n}\n\n// mainの中で\ngreet();\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nvoid greet() {\n    printf(\"Hello\\n\");\n}
int main() {\n    greet();\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\nvoid greet() {\n    printf(\"Hello\\n\");\n}
int main() {\n    ___();\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "void greet() {",
        "    printf(\"Hello\\n\");",
        "}",
        "int main() {",
        "    greet();",
        "    return 0;",
        ""
      ],
      "lineHints": [
        "",
        "greet という名前の関数を定義します。",
        "メッセージを表示します。",
        "関数の終わりです。",
        "",
        "greet(); と入力して、関数を実行します。",
        "",
        ""
      ],
      "candidates": {
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
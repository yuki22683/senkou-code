export const cData = {
  "language": "c",
  "lessonId": "c-1",
  "lessonTitle": "C I",
  "lessonDescription": "プログラミング言語の祖、C言語の基本を学びます。変数の型、printf、制御構文、構造体などを習得しましょう。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "Hello Worldを出力しよう",
      "description": "C言語で画面に文字を表示するには printf 関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "基本構造",
          "content": "# includeとmain\n\n```c\n#include <stdio.h>\nint main() {\n  return 0;\n}\n```\nこれがC言語の最小構成です。\n\n**コード例：**\n```c\n#include <stdio.h>\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\nint main() {\n    printf(\"___\\n\");\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "int main() {",
        "    printf(\"Hello, World!\\n\");",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        "標準入出力ライブラリをインクルードします。",
        "main関数です。",
        "Hello, World! を出力します（改行\\nを含めます）。",
        "正常終了を示す0を返します。",
        "関数の閉じ括弧です。"
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
      "title": "変数と整数",
      "description": "int型を使って数値を扱ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "変数の宣言",
          "content": "# 型 変数名;\n\nC言語では必ず変数の型宣言が必要です。`%d` は整数のプレースホルダーです。\n\n**コード例：**\n```c\nint x = 10;\nprintf(\"%d\\n\", x);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    int x = 10;\n    printf(\"%d\\n\", x);\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\nint main() {\n    int x = ___ ;\n    printf(\"%d\\n\", ___);\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "int main() {",
        "    int x = 10;",
        "    printf(\"%d\\n\", x);",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "xに10を代入します。",
        "xを出力します。",
        null,
        null
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
      "title": "計算",
      "description": "足し算の結果を表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "演算子",
          "content": "# 四則演算\n\n+ - * / が使えます。\n\n**コード例：**\n```c\nint a = 5;\nint b = 3;\nprintf(\"%d\\n\", a + b);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    int a = 5;\n    int b = 3;\n    printf(\"%d\\n\", a + b);\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\nint main() {\n    int a = 5;\n    int b = 3;\n    printf(\"%d\\n\", a ___ b);\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "int main() {",
        "    int a = 5;",
        "    int b = 3;",
        "    printf(\"%d\\n\", a + b);",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "a = 5 を代入します。",
        "b = 3 を代入します。",
        "a + b を出力します。",
        null,
        null
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
      "title": "フォーマット出力",
      "description": "複数の値を埋め込んで表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "printfの書式",
          "content": "# %d の順序\n\n引数の順番通りに `%d` に値が入ります。\n\n**コード例：**\n```c\nint age = 20;\nprintf(\"Age: %d\\n\", age);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    int age = 20;\n    printf(\"I am %d years old.\\n\", age);\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\nint main() {\n    int age = 20;\n    printf(\"I am %d years old.\\n\", ___);\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "int main() {",
        "    int age = 20;",
        "    printf(\"I am %d years old.\\n\", age);",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "年齢変数を定義します。",
        "変数ageを指定します。",
        null,
        null
      ],
      "candidates": {
        "variables": [
          "age"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "I am 20 years old.\n"
        }
      ]
    },
    {
      "title": "配列",
      "description": "配列を使って複数のデータを管理しましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "配列",
          "content": "# 宣言とアクセス\n\nインデックスは0から始まります。\n\n**コード例：**\n```c\nint nums[] = {10, 20};\nprintf(\"%d\\n\", nums[1]); // 20 を表示\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    int nums[] = {10, 20};\n    printf(\"%d\\n\", nums[1]);\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\nint main() {\n    int nums[] = {10, 20};\n    printf(\"%d\\n\", nums[___]);\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "int main() {",
        "    int nums[] = {10, 20};",
        "    printf(\"%d\\n\", nums[1]);",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "配列を初期化します。",
        "インデックス1を指定します。",
        null,
        null
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
      "title": "if文",
      "description": "条件分岐を学びます。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if文",
          "content": "# if (条件)\n\n条件が真の場合に `{ }` 内が実行されます。\n\n**コード例：**\n```c\nif (score > 80) {\n    printf(\"合格\\n\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    int score = 90;\n    if (score > 80) {\n        printf(\"Pass\\n\");\n    }\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\nint main() {\n    int score = 90;\n    if (score ___ 80) {\n        printf(\"Pass\\n\");\n    }\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "int main() {",
        "    int score = 90;",
        "    if (score > 80) {",
        "        printf(\"Pass\\n\");",
        "    }",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "点数を代入します。",
        "比較演算子 > を使います。",
        "Pass を出力します。",
        "ifブロック終了",
        null,
        null
      ],
      "candidates": {
        "operators": [
          ">"
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
      "title": "if-else文",
      "description": "elseを使って分岐させましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "if-else",
          "content": "# 分岐\n\n条件に当てはまらない場合の処理は `else` を使います。\n\n**コード例：**\n```c\nif (x > 10) {\n    printf(\"Big\\n\");\n} else {\n    printf(\"Small\\n\");\n}\n```"
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
        "    }",
        "    } else {",
        "        printf(\"Small\\n\");",
        "    }",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "条件式 x > 10 を書きます。",
        "Big を出力します。",
        "else を記述します。",
        "Small を出力します。",
        "elseブロック終了",
        null,
        null
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
      "title": "for文",
      "description": "繰り返し処理を行います。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "forループ",
          "content": "# 構文\n\n```c\nfor (初期化; 条件; 更新) { ... }\n```\n\n**コード例：**\n```c\nfor (int i = 0; i < 3; i++) {\n    printf(\"%d\\n\", i);\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    for (int i = 0; i < 3; i++) {\n        printf(\"%d\\n\", i);\n    }\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\nint main() {\n    for (int i = 0; i < 3; ___ ) {\n        printf(\"%d\\n\", i);\n    }\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "int main() {",
        "    for (int i = 0; i < 3; i++) {",
        "        printf(\"%d\\n\", i);",
        "    }",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "i++ でインクリメントします。",
        "変数iを出力します。",
        "ループ終了",
        null,
        null
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
      "title": "構造体 (Struct)",
      "description": "データをまとめる構造体を定義してみましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "構造体",
          "content": "# struct\n\n複数の変数を一つにまとめます。\n\n**コード例：**\n```c\nstruct Point {\n    int x;\n    int y;\n};\n\nstruct Point p = {10, 20};\nprintf(\"%d\\n\", p.x);\n```"
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
        "    printf(\"%d\\n\", p.x);",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        "構造体を定義します。",
        "メンバ変数x",
        "メンバ変数y",
        "構造体定義の終了",
        null,
        "構造体変数を初期化します。",
        "p.x でアクセスします。",
        null,
        null
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
      "title": "関数",
      "description": "関数を定義して呼び出します。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "関数",
          "content": "# 定義と呼び出し\n\n処理をひとまとめにして名前を付けます。\n\n**コード例：**\n```c\nvoid greet() {\n    printf(\"Hello\\n\");\n}\n\n// main内で呼び出し\ngreet();\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nvoid greet() {\n    printf(\"Hello\\n\");\n}\nint main() {\n    greet();\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\nvoid greet() {\n    printf(\"Hello\\n\");\n}\nint main() {\n    ___();\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "void greet() {",
        "    printf(\"Hello\\n\");",
        "}",
        "int main() {",
        "    greet();",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        "greet関数を定義します。",
        "メッセージを出力します。",
        "関数終了",
        null,
        "greet(); で呼び出します。",
        null,
        null
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

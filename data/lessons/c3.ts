export const c3Data = {
  "language": "c",
  "lessonId": "c-3",
  "lessonTitle": "C言語 III - 高度なポインタとファイル",
  "lessonDescription": "C言語の高度な機能を学びます。関数ポインタ、ビット演算、ファイル操作など、システムプログラミングの技法を身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "exercises": [
    {
        "title": "関数ポインタ",
        "description": "関数を指すポインタを学びましょう。",
        "difficulty": "hard",
        "orderIndex": 1,
        "tutorialSlides": [
          {
            "title": "関数ポインタとは？",
            "image": "/illustrations/common/sorting_cards.png",
            "content": "# 関数を指すポインタ\n\n**関数ポインタ** は、関数のアドレスを格納できる変数です。\n\n```c\nint add(int a, int b) { return a + b; }\n\n// 関数ポインタの宣言\nint (*fp)(int, int);\nfp = add;\n```"
          },
          {
            "title": "関数ポインタの使い方",
            "image": "/illustrations/common/stack_boxes.png",
            "content": "# 関数を変数として扱う\n\n```c\nint (*fp)(int, int) = add;\nint result = fp(2, 3);  // 5\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\\n\\nint square(int x) { return x * x; }\\n\\nint main() {\\n    // 関数ポインタを宣言する記法\\n    int (*fp)(int) = square;\\n    printf(\"%d\\n\", fp(5));\\n    return 0;\\n}",
        "holeyCode": "#include <stdio.h>\n\nint square(int x) { return x * x; }\n\nint main() {\n    // 関数ポインタを宣言する記法\n    int (___)(int) = square;\n    printf(\"%d\\n\", fp(5));\n    return 0;\n}",
        "correctLines": [
          "#include <stdio.h>",
          "",
          "int square(int x) { return x * x; }",
          "",
          "int main() {",
          "    // 関数ポインタを宣言する記法",
          "    int (*fp)(int) = square;",
          "    printf(\"%d",
          "\", fp(5));",
          "    return 0;",
          "}"
        ],
        "lineHints": [
          null,
          "*fp で関数ポインタを宣言します。",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "variables": [
            "*fp",
            "fp",
            "&fp"
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
        "title": "コールバック関数",
        "description": "関数を引数として渡すコールバックを学びましょう。",
        "difficulty": "hard",
        "orderIndex": 2,
        "tutorialSlides": [
          {
            "title": "コールバックとは？",
            "image": "/illustrations/common/stop_sign.png",
            "content": "# 関数を引数として渡す\n\n**コールバック** は、関数ポインタを引数として受け取り、後で呼び出す仕組みです。\n\n```c\nvoid process(int arr[], int n, void (*callback)(int)) {\n    for (int i = 0; i < n; i++) {\n        callback(arr[i]);\n    }\n}\n```"
          },
          {
            "title": "使用例",
            "image": "/illustrations/common/success_check.png",
            "content": "# 柔軟な処理\n\n```c\nvoid print(int x) { printf(\"%d \", x); }\n\nint arr[] = {1, 2, 3};\nprocess(arr, 3, print);  // 1 2 3\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\\n\\nvoid apply(int n, void (*f)(int)) {\\n    // 引数で受け取った関数ポインタを呼び出す\\n    f(n);\\n}\\n\\nvoid show(int x) {\\n    printf(\"Value: %d\\n\", x);\\n}\\n\\nint main() {\\n    apply(42, show);\\n    return 0;\\n}",
        "holeyCode": "#include <stdio.h>\n\nvoid apply(int n, void (*f)(int)) {\n    // 引数で受け取った関数ポインタを呼び出す\n    ___(n);\n}\n\nvoid show(int x) {\n    printf(\"Value: %d\\n\", x);\n}\n\nint main() {\n    apply(42, show);\n    return 0;\n}",
        "correctLines": [
          "#include <stdio.h>",
          "",
          "void apply(int n, void (*f)(int)) {",
          "    // 引数で受け取った関数ポインタを呼び出す",
          "    f(n);",
          "}",
          "",
          "void show(int x) {",
          "    printf(\"Value: %d",
          "\", x);",
          "}",
          "",
          "int main() {",
          "    apply(42, show);",
          "    return 0;",
          "}"
        ],
        "lineHints": [
          null,
          "f で関数ポインタを呼び出します。",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "variables": [
            "f",
            "n",
            "apply"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Value: 42"
          }
        ]
      },
    {
        "title": "ビット演算 AND",
        "description": "ビット単位のAND演算を学びましょう。",
        "difficulty": "hard",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "ビットAND とは？",
            "image": "/illustrations/common/system_call.png",
            "content": "# 両方が1なら1\n\n**&** は、両方のビットが1の場合のみ1になります。\n\n```c\n// 5 = 0101\n// 3 = 0011\n// -------\n// 1 = 0001\nint result = 5 & 3;  // 1\n```"
          },
          {
            "title": "使用例：マスク",
            "image": "/illustrations/common/telescope.png",
            "content": "# 特定ビットの抽出\n\n```c\n// 下位4ビットだけ取得\nint x = 0xAB;  // 10101011\nint low4 = x & 0x0F;  // 00001011 = 11\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\\n\\nint main() {\\n    int a = 12;  // 1100\\n    int b = 10;  // 1010\\n    // 両方のビットが1の場合のみ1になる演算子\\n    printf(\"%d\\n\", a & b);  // 8 (1000)\\n    return 0;\\n}",
        "holeyCode": "#include <stdio.h>\n\nint main() {\n    int a = 12;  // 1100\n    int b = 10;  // 1010\n    // 両方のビットが1の場合のみ1になる演算子\n    printf(\"%d\\n\", a ___ b);  // 8 (1000)\n    return 0;\n}",
        "correctLines": [
          "#include <stdio.h>",
          "",
          "int main() {",
          "    int a = 12;  // 1100",
          "    int b = 10;  // 1010",
          "    // 両方のビットが1の場合のみ1になる演算子",
          "    printf(\"%d",
          "\", a & b);  // 8 (1000)",
          "    return 0;",
          "}"
        ],
        "lineHints": [
          null,
          "変数の値を指定された形式で画面に表示します。",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "operators": [
            "&",
            "|",
            "^"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "8"
          }
        ]
      },
    {
        "title": "ビット演算 OR",
        "description": "ビット単位のOR演算を学びましょう。",
        "difficulty": "hard",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "ビットOR とは？",
            "image": "/illustrations/common/terminal_command.png",
            "content": "# どちらかが1なら1\n\n**|** は、どちらかのビットが1なら1になります。\n\n```c\n// 5 = 0101\n// 3 = 0011\n// -------\n// 7 = 0111\nint result = 5 | 3;  // 7\n```"
          },
          {
            "title": "使用例：フラグ設定",
            "image": "/illustrations/common/timer_clock.png",
            "content": "# ビットを立てる\n\n```c\nint flags = 0;\nflags |= 0x01;  // フラグ1をON\nflags |= 0x04;  // フラグ3をON\n// flags = 0x05 (0101)\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\\n\\nint main() {\\n    int a = 12;  // 1100\\n    int b = 10;  // 1010\\n    // どちらかのビットが1なら1になる演算子\\n    printf(\"%d\\n\", a | b);  // 14 (1110)\\n    return 0;\\n}",
        "holeyCode": "#include <stdio.h>\n\nint main() {\n    int a = 12;  // 1100\n    int b = 10;  // 1010\n    // どちらかのビットが1なら1になる演算子\n    printf(\"%d\\n\", a ___ b);  // 14 (1110)\n    return 0;\n}",
        "correctLines": [
          "#include <stdio.h>",
          "",
          "int main() {",
          "    int a = 12;  // 1100",
          "    int b = 10;  // 1010",
          "    // どちらかのビットが1なら1になる演算子",
          "    printf(\"%d",
          "\", a | b);  // 14 (1110)",
          "    return 0;",
          "}"
        ],
        "lineHints": [
          null,
          "変数の値を指定された形式で画面に表示します。",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "operators": [
            "|",
            "&",
            "^"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "14"
          }
        ]
      },
    {
        "title": "ビットシフト",
        "description": "ビットを左右にずらすシフト演算を学びましょう。",
        "difficulty": "hard",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "シフト演算とは？",
            "image": "/illustrations/common/cpu_chip.png",
            "content": "# ビットを移動\n\n**<<** は左シフト、**>>** は右シフトです。\n\n```c\nint x = 1;     // 0001\nx << 2;        // 0100 = 4\nx << 3;        // 1000 = 8\n```"
          },
          {
            "title": "2の累乗との関係",
            "image": "/illustrations/common/binary_code.png",
            "content": "# 掛け算・割り算の代わり\n\n```c\n// 左シフト = 2倍\n5 << 1;  // 10\n\n// 右シフト = 2で割る\n8 >> 1;  // 4\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\\n\\nint main() {\\n    int x = 3;\\n    // ビットを左に移動する演算子\\n    printf(\"%d\\n\", x << 2);  // 12\\n    return 0;\\n}",
        "holeyCode": "#include <stdio.h>\n\nint main() {\n    int x = 3;\n    // ビットを左に移動する演算子\n    printf(\"%d\\n\", x ___ 2);  // 12\n    return 0;\n}",
        "correctLines": [
          "#include <stdio.h>",
          "",
          "int main() {",
          "    int x = 3;",
          "    // ビットを左に移動する演算子",
          "    printf(\"%d",
          "\", x << 2);  // 12",
          "    return 0;",
          "}"
        ],
        "lineHints": [
          null,
          "変数の値を指定された形式で画面に表示します。",
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "operators": [
            "<<",
            ">>",
            "<"
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
        "title": "sizeof 演算子",
        "description": "型やデータのサイズを取得しましょう。",
        "difficulty": "hard",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "sizeof とは？",
            "image": "/illustrations/common/data_storage.png",
            "content": "# バイトサイズを取得\n\n**sizeof** は、型や変数のバイト数を返します。\n\n```c\nprintf(\"%zu\\n\", sizeof(int));    // 4（環境依存）\nprintf(\"%zu\\n\", sizeof(char));   // 1\nprintf(\"%zu\\n\", sizeof(double)); // 8\n```"
          },
          {
            "title": "配列のサイズ",
            "image": "/illustrations/common/database_table_3d.png",
            "content": "# 配列の要素数を計算\n\n```c\nint arr[] = {1, 2, 3, 4, 5};\nint count = sizeof(arr) / sizeof(arr[0]);\n// count = 5\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\\n\\nint main() {\\n    int arr[] = {10, 20, 30};\\n    // 型や変数のバイト数を取得する演算子\\n    int count = sizeof(arr) / sizeof(arr[0]);\\n    printf(\"%d\\n\", count);\\n    return 0;\\n}",
        "holeyCode": "#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30};\n    // 型や変数のバイト数を取得する演算子\n    int count = ___(arr) / sizeof(arr[0]);\n    printf(\"%d\\n\", count);\n    return 0;\n}",
        "correctLines": [
          "#include <stdio.h>",
          "",
          "int main() {",
          "    int arr[] = {10, 20, 30};",
          "    // 型や変数のバイト数を取得する演算子",
          "    int count = sizeof(arr) / sizeof(arr[0]);",
          "    printf(\"%d",
          "\", count);",
          "    return 0;",
          "}"
        ],
        "lineHints": [
          null,
          "sizeof で配列のサイズを取得します。",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "sizeof",
            "strlen",
            "length"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "3"
          }
        ]
      },
    {
        "title": "typedef で型に別名",
        "description": "型に新しい名前をつけましょう。",
        "difficulty": "hard",
        "orderIndex": 7,
        "tutorialSlides": [
          {
            "title": "typedef とは？",
            "image": "/illustrations/common/database_aggregate.png",
            "content": "# 型に別名を定義\n\n**typedef** を使うと、型に新しい名前をつけられます。\n\n```c\ntypedef unsigned int uint;\ntypedef int* IntPtr;\n\nuint x = 10;\nIntPtr p = &x;\n```"
          },
          {
            "title": "構造体との組み合わせ",
            "image": "/illustrations/common/sql_query_magnifier.png",
            "content": "# 構造体を簡潔に\n\n```c\ntypedef struct {\n    int x;\n    int y;\n} Point;\n\nPoint p = {10, 20};\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\\n\\n// 型に別名をつけるキーワード\\ntypedef int Number;\\n\\nint main() {\\n    Number x = 100;\\n    printf(\"%d\\n\", x);\\n    return 0;\\n}",
        "holeyCode": "#include <stdio.h>\n\n// 型に別名をつけるキーワード\n___ int Number;\n\nint main() {\n    Number x = 100;\n    printf(\"%d\\n\", x);\n    return 0;\n}",
        "correctLines": [
          "#include <stdio.h>",
          "",
          "// 型に別名をつけるキーワード",
          "typedef int Number;",
          "",
          "int main() {",
          "    Number x = 100;",
          "    printf(\"%d",
          "\", x);",
          "    return 0;",
          "}"
        ],
        "lineHints": [
          null,
          "typedef で型に別名をつけます。",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "typedef",
            "define",
            "alias"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "100"
          }
        ]
      },
    {
        "title": "const ポインタ",
        "description": "変更不可能なポインタを学びましょう。",
        "difficulty": "hard",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "const とポインタ",
            "image": "/illustrations/common/toolbox_static.png",
            "content": "# 何が const か？\n\n```c\n// 指す先の値が変更不可\nconst int *p1;\n\n// ポインタ自体が変更不可\nint * const p2;\n\n// 両方変更不可\nconst int * const p3;\n```"
          },
          {
            "title": "使いどころ",
            "image": "/illustrations/common/trash_memory.png",
            "content": "# 安全な関数引数\n\n```c\nvoid print(const char *str) {\n    // str の中身は変更できない\n    printf(\"%s\\n\", str);\n}\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\\n\\n// 指す先を変更不可にするキーワード\\nvoid show(const int *p) {\\n    printf(\"%d\\n\", *p);\\n}\\n\\nint main() {\\n    int x = 42;\\n    show(&x);\\n    return 0;\\n}",
        "holeyCode": "#include <stdio.h>\n\n// 指す先を変更不可にするキーワード\nvoid show(___ int *p) {\n    printf(\"%d\\n\", *p);\n}\n\nint main() {\n    int x = 42;\n    show(&x);\n    return 0;\n}",
        "correctLines": [
          "#include <stdio.h>",
          "",
          "// 指す先を変更不可にするキーワード",
          "void show(const int *p) {",
          "    printf(\"%d",
          "\", *p);",
          "}",
          "",
          "int main() {",
          "    int x = 42;",
          "    show(&x);",
          "    return 0;",
          "}"
        ],
        "lineHints": [
          null,
          "void型の値を返す関数（show）を定義します。",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "const",
            "static",
            "volatile"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "42"
          }
        ]
      },
    {
        "title": "static 変数",
        "description": "関数をまたいで値を保持するstatic変数を学びましょう。",
        "difficulty": "hard",
        "orderIndex": 9,
        "tutorialSlides": [
          {
            "title": "static とは？",
            "image": "/illustrations/common/magnifying_glass_search.png",
            "content": "# 値を保持する\n\n**static** 変数は、関数が終了しても値を保持します。\n\n```c\nvoid count() {\n    static int n = 0;\n    n++;\n    printf(\"%d\\n\", n);\n}\n```"
          },
          {
            "title": "呼び出しごとに増加",
            "image": "/illustrations/common/data_storage.png",
            "content": "# カウンタとして使う\n\n```c\ncount();  // 1\ncount();  // 2\ncount();  // 3\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\\n\\nvoid counter() {\\n    // 関数を抜けても値を保持するキーワード\\n    static int count = 0;\\n    count++;\\n    printf(\"%d\\n\", count);\\n}\\n\\nint main() {\\n    counter();\\n    counter();\\n    counter();\\n    return 0;\\n}",
        "holeyCode": "#include <stdio.h>\n\nvoid counter() {\n    // 関数を抜けても値を保持するキーワード\n    ___ int count = 0;\n    count++;\n    printf(\"%d\\n\", count);\n}\n\nint main() {\n    counter();\n    counter();\n    counter();\n    return 0;\n}",
        "correctLines": [
          "#include <stdio.h>",
          "",
          "void counter() {",
          "    // 関数を抜けても値を保持するキーワード",
          "    static int count = 0;",
          "    count++;",
          "    printf(\"%d",
          "\", count);",
          "}",
          "",
          "int main() {",
          "    counter();",
          "    counter();",
          "    counter();",
          "    return 0;",
          "}"
        ],
        "lineHints": [
          null,
          "static で値を保持します。",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "static",
            "const",
            "extern"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "123"
          }
        ]
      },
    {
        "title": "マクロ定義",
        "description": "プリプロセッサでマクロを定義しましょう。",
        "difficulty": "hard",
        "orderIndex": 10,
        "tutorialSlides": [
          {
            "title": "マクロとは？",
            "image": "/illustrations/common/trophy_gold.png",
            "content": "# コンパイル前の置換\n\n**#define** でマクロを定義すると、コンパイル前に置換されます。\n\n```c\n#define PI 3.14159\n#define MAX(a,b) ((a) > (b) ? (a) : (b))\n```"
          },
          {
            "title": "関数風マクロ",
            "image": "/illustrations/common/world_globe.png",
            "content": "# 引数を取るマクロ\n\n```c\n#define SQUARE(x) ((x) * (x))\n\nint result = SQUARE(5);  // 25\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\\n\\n// プリプロセッサでマクロを定義するディレクティブ\\n#___ DOUBLE(x) ((x) * 2)\\n\\nint main() {\\n    printf(\"%d\\n\", DOUBLE(7));\\n    return 0;\\n}",
        "holeyCode": "#include <stdio.h>\n\n// プリプロセッサでマクロを定義するディレクティブ\n#___ DOUBLE(x) ((x) * 2)\n\nint main() {\n    printf(\"%d\\n\", DOUBLE(7));\n    return 0;\n}",
        "correctLines": [
          "#include <stdio.h>",
          "",
          "// プリプロセッサでマクロを定義するディレクティブ",
          "#___ DOUBLE(x) ((x) * 2)",
          "",
          "int main() {",
          "    printf(\"%d",
          "\", DOUBLE(7));",
          "    return 0;",
          "}"
        ],
        "lineHints": [
          null,
          "define でマクロを定義します。",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "define",
            "include",
            "ifdef"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "14"
          }
        ]
      }
  ]
}

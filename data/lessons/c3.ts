export const c3Data = {
  "language": "c",
  "lessonId": "c-3",
  "lessonTitle": "C言語 III - 高度なポインタとファイル",
  "lessonDescription": "C言語の高度な機能を学びます。関数ポインタ、ビット演算、ファイル操作など、システムプログラミングの技法を身つけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "exercises": [
    {
      "title": "関数ポインタ",
      "correctCode": "#include <stdio.h>\\n\\nint square(int x) { return x * x; }\\n\\nint main() {\\n    // 関数ポインタを宣言する記法\\n    int (*fp)(int) = square;\\n    printf(\"%d\\n\", fp(5));\\n    return 0;\\n}",
      "holeyCode": "#include <___>\\n___\\nint square(int ___) { return x * x; }\\n___\\nint ___() {\\n    // 関数ポインタを宣言する記法\\n    int (*fp)(int) = ___;\\n    ___(\"%d\\n___\\n    return ___;\\n___",
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
          "標準入出力ライブラリを読み込みます。",
          null,
          "int型の値を返す関数（square）を定義します。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "ここを正しく入力してください。",
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "*fp",
            "fp",
            "&fp"
          ],
          "others": ["x", "main", "square", "stdio.h", "0", "}", "printf", "", " fp(5));", " fp(5));", "\", fp(5));"]
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
      "correctCode": "#include <stdio.h>\\n\\nvoid apply(int n, void (*f)(int)) {\\n    // 引数で受け取った関数ポインタを呼び出す\\n    f(n);\\n}\\n\\nvoid show(int x) {\\n    printf(\"Value: %d\\n\", x);\\n}\\n\\nint main() {\\n    apply(42, show);\\n    return 0;\\n}",
      "holeyCode": "#include <___>\\n___\\nvoid apply(___ n, void (*f)(int)) {\\n    // 引数で受け取った関数ポインタを呼び出す\\n    f(___);\\n___\\n___\\nvoid show(int ___) {\\n    ___(\"Value: %d\\n___\\n___\\n___\\nint ___() {\\n    apply(___, show);\\n    return ___;\\n___",
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
          "標準入出力ライブラリを読み込みます。",
          null,
          "void型の値を返す関数（apply）を定義します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "void型の値を返す関数（show）を定義します。",
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "ここを正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "f",
            "n",
            "apply"
          ],
          "others": ["int", "}", "x", "main", "42", "0", "stdio.h", "printf", " x);", "", "}", " x);", " x);", "\", x);"]
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
      "correctCode": "#include <stdio.h>\\n\\nint main() {\\n    int a = 12;  // 1100\\n    int b = 10;  // 1010\\n    // 両方のビットが1の場合のみ1になる演算子\\n    printf(\"%d\\n\", a & b);  // 8 (1000)\\n    return 0;\\n}",
      "holeyCode": "#include <___>\\n___\\nint ___() {\\n    int a = ___;  // 1100\\n    int b = ___;  // 1010\\n    // 両方のビットが1の場合のみ1になる演算子\\n    ___(\"%d\\n___\\n    return ___;\\n___",
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
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "整数型の変数を宣言し、初期値を代入します。",
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "&",
            "|",
            "^"
          ],
          "others": ["main", "12", "10", "0", "}", "stdio.h", "printf", " a & b);  // 8 (1000)", "", " a & b);  // 8 (1000)", " a & b);  // 8 (1000)", "\", a & b);  // 8 (1000)"]
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
      "correctCode": "#include <stdio.h>\\n\\nint main() {\\n    int a = 12;  // 1100\\n    int b = 10;  // 1010\\n    // どちらかのビットが1なら1になる演算子\\n    printf(\"%d\\n\", a | b);  // 14 (1110)\\n    return 0;\\n}",
      "holeyCode": "#include <___>\\n___\\nint ___() {\\n    int a = ___;  // 1100\\n    int b = ___;  // 1010\\n    // どちらかのビットが1なら1になる演算子\\n    ___(\"%d\\n___\\n    return ___;\\n___",
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
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "整数型の変数を宣言し、初期値を代入します。",
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "|",
            "&",
            "^"
          ],
          "others": ["main", "12", "10", "0", "}", "stdio.h", "printf", " a | b);  // 14 (1110)", "", " a | b);  // 14 (1110)", " a | b);  // 14 (1110)", "\", a | b);  // 14 (1110)"]
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
      "correctCode": "#include <stdio.h>\\n\\nint main() {\\n    int x = 3;\\n    // ビットを左に移動する演算子\\n    printf(\"%d\\n\", x << 2);  // 12\\n    return 0;\\n}",
      "holeyCode": "#include <___>\\n___\\nint ___() {\\n    int x = ___;\\n    // ビットを左に移動する演算子\\n    ___(\"___\", x ___ 2);  // 12\\n    return ___;\\n    ___ 0;\\n___",
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
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "printf関数でシフト演算の結果を表示します。",
          "プログラムの正常終了を示す値0を返す。",
          "プログラムの正常終了を示す0を返します。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "<<",
            ">>",
            "<"
          ],
          "others": ["main", "3", "0", "}", "stdio.h", "printf", "%d", "", "%d", "// 12", "return"]
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
      "correctCode": "#include <stdio.h>\\n\\nint main() {\\n    int arr[] = {10, 20, 30};\\n    // 型や変数のバイト数を取得する演算子\\n    int count = sizeof(arr) / sizeof(arr[0]);\\n    printf(\"%d\\n\", count);\\n    return 0;\\n}",
      "holeyCode": "#include <___>\\n___\\nint ___() {\\n    int arr[] = {___};\\n    // 型や変数のバイト数を取得する演算子\\n    int count = sizeof(arr) / sizeof(arr[___]);\\n    ___(\"%d\\n___\\n    return ___;\\n___",
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
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "配列を複数の値で初期化する。",
          null,
          "ここを正しく入力してください。",
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "sizeof",
            "strlen",
            "length"
          ],
          "others": ["main", "10, 20, 30", "0", "stdio.h", "}", "printf", "", " count);", " count);", "\", count);", "\", count);"]
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
      "correctCode": "#include <stdio.h>\\n\\n// int型にNumberという別名をつける\\ntypedef int Number;\\n\\nint main() {\\n    Number x = 100;\\n    printf(\"%d\\n\", x);\\n    return 0;\\n}",
      "holeyCode": "#include <___>\\n___\\n// int型にNumberという別名をつける\\ntypedef int ___;\\n___\\nint ___() {\\n    Number x = ___;\\n    ___(\"%d\\n___\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "",
          "// int型にNumberという別名をつける",
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
          "標準入出力ライブラリを読み込みます。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "ここを正しく入力してください。",
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "typedef",
            "define",
            "alias"
          ],
          "others": ["Number", "main", "100", "stdio.h", "0", "}", "printf", "", " x);", " x);", "\", x);"]
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
      "correctCode": "#include <stdio.h>\\n\\n// ポインタの指す先を読み取り専用にする\\nvoid show(const int *p) {\\n    printf(\"%d\\n\", *p);\\n}\\n\\nint main() {\\n    int x = 42;\\n    show(&x);\\n    return 0;\\n}",
      "holeyCode": "#include <___>\\n___\\n// ポインタの指す先を読み取り専用にする\\nvoid show(const int *___) {\\n    ___(\"%d\\n___\\n___\\n___\\nint ___() {\\n    int x = ___;\\n    show(&___);\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "",
          "// ポインタの指す先を読み取り専用にする",
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
          "標準入出力ライブラリを読み込みます。",
          null,
          null,
          "void型の値を返す関数（show）を定義します。",
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "整数型の変数を宣言し、初期値を代入します。",
          "ここを正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "const",
            "static",
            "volatile"
          ],
          "others": ["p", "int x = 42;", "0;", "stdio.h", "main", "x", "}", "printf", "", " *p);", "}", "42", "0", " *p);", "\", *p);"]
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
      "correctCode": "#include <stdio.h>\\n\\nvoid counter() {\\n    // 呼び出し間で値を保持するstatic変数\\n    static int count = 0;\\n    count++;\\n    printf(\"%d\\n\", count);\\n}\\n\\nint main() {\\n    counter();\\n    counter();\\n    counter();\\n    return 0;\\n}",
      "holeyCode": "#include <___>\\n___\\nvoid ___() {\\n    // 呼び出し間で値を保持するstatic変数\\n    static int count = ___;\\n    ___++;\\n    ___(\"%d\\n___\\n___\\n___\\nint ___() {\\n    ___();\\n    ___();\\n    ___();\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "",
          "void counter() {",
          "    // 呼び出し間で値を保持するstatic変数",
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
          "標準入出力ライブラリを読み込みます。",
          null,
          "void型の値を返す関数（counter）を定義します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "関数（counter）を呼び出して実行する。",
          "関数（counter）を呼び出して実行する。",
          "関数（counter）を呼び出して実行する。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "static",
            "const",
            "extern"
          ],
          "others": ["counter", "0", "count", "return 0;", "stdio.h", "main", "}", "printf", "", " count);", "}", " count);", "\", count);"]
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
      "correctCode": "#include <stdio.h>\\n\\n// DOUBLEマクロを定義する\\n#define DOUBLE(x) ((x) * 2)\\n\\nint main() {\\n    printf(\"%d\\n\", DOUBLE(7));\\n    return 0;\\n}",
      "holeyCode": "#include <___>\\n___\\n// DOUBLEマクロを定義する\\n#define ___(x) ((x) * 2)\\n___\\nint ___() {\\n    ___(\"%d\\n___\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "",
          "// DOUBLEマクロを定義する",
          "#define DOUBLE(x) ((x) * 2)",
          "",
          "int main() {",
          "    printf(\"%d",
          "\", DOUBLE(7));",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ライブラリを読み込みます。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "define",
            "include",
            "ifdef"
          ],
          "others": ["main", "stdio.h", "0", "}", "printf", "", " DOUBLE(7));", " DOUBLE(7));", "\", DOUBLE(7));"]
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
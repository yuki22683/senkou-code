export const c2Data = {
  "language": "c",
  "lessonId": "c-2",
  "lessonTitle": "C言語 II - ポインタとメモリ",
  "lessonDescription": "C言語の真髄「ポインタ」を中心に、メモリ管理や高度な関数の使い方を学びます。コンピュータの仕組みを深く理解しましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "exercises": [
    {
      "title": "ポインタって何？",
      "correctCode": "#include <stdio.h>\\nint main() {\\n    int x = 42;\\n    // xのアドレスを取得する演算子\\n    int *p = &x;\\n    printf(\"%d\\n\", *p);\\n    return 0;\\n}",
      "holeyCode": "#include <___>\\nint ___() {\\n    int x = ___;\\n    // xのアドレスを取得する演算子\\n    int *p = &___;\\n    ___(\"%d\\n___\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "int main() {",
          "    int x = 42;",
          "    // xのアドレスを取得する演算子",
          "    int *p = &x;",
          "    printf(\"%d",
          "\", *p);",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ライブラリを読み込みます。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "& を使って x のアドレスを取得します。",
          "*p で中身を取り出します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "&"
          ],
          "others": ["main", "42", "x", "stdio.h", "0", "}", "printf", " *p);", " *p);", "\", *p);"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "42\\n"
          }
        ]
      },
    {
      "title": "ポインタで値を変える",
      "correctCode": "#include <stdio.h>\\nint main() {\\n    int n = 10;\\n    int *ptr = &n;\\n    // ptrが指す先の値にアクセスする演算子\\n    *ptr = 99;\\n    printf(\"%d\\n\", n);\\n    return 0;\\n}",
      "holeyCode": "#include <___>\\nint ___() {\\n    int n = ___;\\n    int *ptr = &___;\\n    // ptrが指す先の値にアクセスする演算子\\n    *___ = ___;\\n    ___(\"%d\\n___\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "int main() {",
          "    int n = 10;",
          "    int *ptr = &n;",
          "    // ptrが指す先の値にアクセスする演算子",
          "    *ptr = 99;",
          "    printf(\"%d",
          "\", n);",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ライブラリを読み込みます。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "整数型の変数を宣言し、初期値を代入します。",
          "ptr に n のアドレスを入れます。",
          null,
          null,
          "変数の値を指定された形式で画面に表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "*"
          ],
          "others": ["main", "10", "n", "stdio.h", "0", "}", "printf", " n);", " n);", "\", n);"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "99\\n"
          }
        ]
      },
    {
      "title": "関数に引数を渡す",
      "correctCode": "#include <stdio.h>\\n// show関数の引数numを定義\\nvoid show(int num) {\\n    printf(\"%d\\n\", num);\\n}\\nint main() {\\n    show(25);\\n    return 0;\\n}",
      "holeyCode": "#include <___>\\n// show関数の引数numを定義\\nvoid show(int ___) {\\n    ___(\"%d\\n___\\n___\\nint ___() {\\n    show(___);\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "// show関数の引数numを定義",
          "void show(int num) {",
          "    printf(\"%d",
          "\", num);",
          "}",
          "int main() {",
          "    show(25);",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ライブラリを読み込みます。",
          null,
          "void型の値を返す関数（show）を定義します。",
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "25 を渡して関数を呼び出します。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "num"
          ],
          "others": ["int main() {", "show", "n 0;", "stdio.h", "25", "}", "printf", " num);", "}", "main", "0", " num);", "\", num);"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "25\\n"
          }
        ]
      },
    {
      "title": "戻り値のある関数",
      "correctCode": "#include <stdio.h>\\nint double_it(int x) {\\n    // 2倍にした値を返す\\n    return x * 2;\\n}\\nint main() {\\n    int result = double_it(7);\\n    printf(\"%d\\n\", result);\\n    return 0;\\n}",
      "holeyCode": "#include <___>\\nint double_it(int ___) {\\n    // 2倍にした値を返す\\n    return x * ___;\\n___\\nint ___() {\\n    int result = double_it(___);\\n    ___(\"%d\\n___\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "int double_it(int x) {",
          "    // 2倍にした値を返す",
          "    return x * 2;",
          "}",
          "int main() {",
          "    int result = double_it(7);",
          "    printf(\"%d",
          "\", result);",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ライブラリを読み込みます。",
          "int型の値を返す関数（double_it）を定義します。",
          null,
          "return を使って計算結果を返します。",
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "関数の戻り値を result に受け取ります。",
          "変数の値を指定された形式で画面に表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "return"
          ],
          "others": ["x", "2", "}", "main", "7", "stdio.h", "0", "printf", "}", " result);", " result);", "\", result);"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "14\\n"
          }
        ]
      },
    {
      "title": "配列とポインタ",
      "correctCode": "#include <stdio.h>\\nint main() {\\n    int arr[] = {5, 15, 25};\\n    // 配列の先頭アドレスを代入\\n    int *p = arr;\\n    printf(\"%d\\n\", *(p + 2));\\n    return 0;\\n}",
      "holeyCode": "#include <___>\\nint ___() {\\n    int arr[] = {___};\\n    // 配列の先頭アドレスを代入\\n    int *p = ___;\\n    ___(\"%d\\n___\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "int main() {",
          "    int arr[] = {5, 15, 25};",
          "    // 配列の先頭アドレスを代入",
          "    int *p = arr;",
          "    printf(\"%d",
          "\", *(p + 2));",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ライブラリを読み込みます。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "配列名 arr を p に代入します（先頭アドレス）。",
          "p + 2 で3番目の要素にアクセスします。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "arr"
          ],
          "others": ["main", "5, 15, 25", "stdio.h", "0", "}", "printf", " *(p + 2));", " *(p + 2));", "\", *(p + 2));", "\", *(p + 2));"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "25\\n"
          }
        ]
      },
    {
      "title": "文字列の基本",
      "correctCode": "#include <stdio.h>\\nint main() {\\n    char msg[] = \"こんにちは\";\\n    // 文字列を表示する書式指定子\\n    printf(\"%s\\n\", msg);\\n    return 0;\\n}",
      "holeyCode": "#include <___>\\nint ___() {\\n    ___ msg[] = \"___\";\\n    // 文字列を表示する書式指定子\\n    ___(\"%s\\n___\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "int main() {",
          "    char msg[] = \"こんにちは\";",
          "    // 文字列を表示する書式指定子",
          "    printf(\"%s",
          "\", msg);",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ライブラリを読み込みます。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "char型の配列に文字列を入れます。",
          null,
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "strings": [
            "s"
          ],
          "others": ["main", "こんにちは", "stdio.h", "0", "}", "char", "printf", " msg);", " msg);", "\", msg);", "\", msg);"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      },
    {
      "title": "ポインタを関数に渡す",
      "correctCode": "#include <stdio.h>\\nvoid triple(int *p) {\\n    *p = *p * 3;\\n}\\nint main() {\\n    int val = 4;\\n    // valのアドレスを取得する演算子\\n    triple(&val);\\n    printf(\"%d\\n\", val);\\n    return 0;\\n}",
      "holeyCode": "#include <___>\\nvoid triple(int *___) {\\n    *___ = *___ * ___;\\n___\\nint ___() {\\n    int val = ___;\\n    // valのアドレスを取得する演算子\\n    triple(&___);\\n    ___(\"%d\\n___\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "void triple(int *p) {",
          "    *p = *p * 3;",
          "}",
          "int main() {",
          "    int val = 4;",
          "    // valのアドレスを取得する演算子",
          "    triple(&val);",
          "    printf(\"%d",
          "\", val);",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ライブラリを読み込みます。",
          "void型の値を返す関数（triple）を定義します。",
          null,
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "& を使って val のアドレスを渡します。",
          "変数の値を指定された形式で画面に表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "&"
          ],
          "others": ["p", "}", "main", "4", "val", "stdio.h", "0", "printf", "}", " val);", " val);", "\", val);"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "12\\n"
          }
        ]
      },
    {
      "title": "動的メモリ確保 malloc",
      "correctCode": "#include <stdio.h>\\n#include <stdlib.h>\\nint main() {\\n    int *p = malloc(sizeof(int));\\n    *p = 50;\\n    printf(\"%d\\n\", *p);\\n    // 確保したメモリを解放する関数\\n    free(p);\\n    return 0;\\n}",
      "holeyCode": "#include <___>\\n#include <___>\\nint ___() {\\n    ___ *p = malloc(sizeof(int));\\n    *___ = ___;\\n    ___(\"%d\\n___\\n    // 確保したメモリを解放する関数\\n    free(___);\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "#include <stdlib.h>",
          "int main() {",
          "    int *p = malloc(sizeof(int));",
          "    *p = 50;",
          "    printf(\"%d",
          "\", *p);",
          "    // 確保したメモリを解放する関数",
          "    free(p);",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "この行を正しく入力してください。",
          "標準ライブラリを読み込み、mallocを使えるようにします。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "malloc で int サイズのメモリを確保します。",
          null,
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          null,
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "free"
          ],
          "others": ["main", "int", "n 0;", "stdlib.h", "p", "printf", " *p);", "0", "}", " *p);", "\", *p);"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "50\\n"
          }
        ]
      },
    {
      "title": "構造体へのポインタ",
      "correctCode": "#include <stdio.h>\\nstruct Item {\\n    int price;\\n};\\nint main() {\\n    struct Item item = {200};\\n    struct Item *p = &item;\\n    // ポインタからメンバにアクセスする演算子\\n    printf(\"%d\\n\", p->price);\\n    return 0;\\n}",
      "holeyCode": "#include <___>\\nstruct ___ {\\n    int ___;\\n___\\nint ___() {\\n    struct Item item = {___};\\n    struct Item *p = &___;\\n    // ポインタからメンバにアクセスする演算子\\n    ___(\"%d\\n___\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "struct Item {",
          "    int price;",
          "};",
          "int main() {",
          "    struct Item item = {200};",
          "    struct Item *p = &item;",
          "    // ポインタからメンバにアクセスする演算子",
          "    printf(\"%d",
          "\", p->price);",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ライブラリを読み込みます。",
          "構造体（Item）を定義します。",
          "price メンバを持ちます。",
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "構造体の変数を初期化します。",
          "構造体のポインタを作成します。",
          null,
          "-> 演算子でメンバにアクセスします。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "->"
          ],
          "others": ["Item", "price", "};", "main", "200", "item", "stdio.h", "0", "}", "printf", "};", " p->price);", " p->price);", "\", p->price);"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "200\\n"
          }
        ]
      },
    {
      "title": "列挙型 enum",
      "correctCode": "#include <stdio.h>\\nenum Day { MON, TUE, WED };\\nint main() {\\n    // 列挙型の変数を宣言するキーワード\\n    enum Day today = WED;\\n    printf(\"%d\\n\", today);\\n    return 0;\\n}",
      "holeyCode": "#include <___>\\nenum Day { MON, TUE, ___ };\\nint ___() {\\n    // 列挙型の変数を宣言するキーワード\\n    enum Day today = ___;\\n    ___(\"%d\\n___\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "enum Day { MON, TUE, WED };",
          "int main() {",
          "    // 列挙型の変数を宣言するキーワード",
          "    enum Day today = WED;",
          "    printf(\"%d",
          "\", today);",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ライブラリを読み込みます。",
          "Day という列挙型を定義します。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "enum Day 型の変数を作ります。",
          "変数の値を指定された形式で画面に表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "enum"
          ],
          "others": ["WED", "main", "stdio.h", "0", "}", "printf", " today);", " today);", "\", today);"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "2\\n"
          }
        ]
      }
  ]
}
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
      "holeyCode": "#___ <___>\\n___ ___() {\\n    ___ ___ = ___;\\n    // xのアドレスを取得する演算子\\n    ___ *___ = &___;\\n    ___(\"___\", *___);\\n    ___ ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "int main() {",
          "    int x = 42;",
          "    // xのアドレスを取得する演算子",
          "    int *p = &x;",
          "    printf(\"%d\\n\", *p);",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "プリプロセッサディレクティブでヘッダファイルstdio.hを読み込みます。",
          "int型を返すmain関数を定義します。",
          "int型の変数xに42を代入します。",
          null,
          "int型のポインタpにxのアドレスを代入します。",
          "printf関数で*p（ポインタが指す値）を%d形式で表示します。",
          "return文で0を返します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "operators": [
            "&"
          ],
          "others": ["include", "stdio.h", "int", "main", "x", "42", "p", "printf", "%d\\n", "return", "0", "}", "%d"]
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
      "holeyCode": "#___ <___>\\n___ ___() {\\n    ___ ___ = ___;\\n    ___ *___ = &___;\\n    // ptrが指す先の値にアクセスする演算子\\n    *___ = ___;\\n    ___(\"___\", ___);\\n    ___ ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "int main() {",
          "    int n = 10;",
          "    int *ptr = &n;",
          "    // ptrが指す先の値にアクセスする演算子",
          "    *ptr = 99;",
          "    printf(\"%d\\n\", n);",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "プリプロセッサディレクティブでヘッダファイルstdio.hを読み込みます。",
          "int型を返すmain関数を定義します。",
          "int型の変数nに10を代入します。",
          "int型のポインタptrにnのアドレスを代入します。",
          null,
          "*演算子でポインタが指す先の値に99を代入します。",
          "printf関数でnを%d形式で表示します。",
          "return文で0を返します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "operators": [
            "&"
          ],
          "others": ["include", "stdio.h", "int", "main", "n", "10", "ptr", "99", "printf", "%d\\n", "return", "0", "}", "%d"]
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
      "holeyCode": "#___ <___>\\n// show関数の引数numを定義\\n___ ___(int ___) {\\n    ___(\"___\", ___);\\n___\\n___ ___() {\\n    ___(___);\\n    ___ ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "// show関数の引数numを定義",
          "void show(int num) {",
          "    printf(\"%d\\n\", num);",
          "}",
          "int main() {",
          "    show(25);",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "プリプロセッサディレクティブでヘッダファイルstdio.hを読み込みます。",
          null,
          "void型を返すshow関数をint型の引数numで定義します。",
          "printf関数でnumを%d形式で表示します。",
          "関数の終わりを示す閉じ括弧です。",
          "int型を返すmain関数を定義します。",
          "show関数を引数25で呼び出します。",
          "return文で0を返します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "variables": [
            "num"
          ],
          "others": ["include", "stdio.h", "void", "show", "int", "printf", "%d\\n", "}", "main", "25", "return", "0", "%d"]
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
      "holeyCode": "#___ <___>\\n___ ___(int ___) {\\n    // 2倍にした値を返す\\n    ___ ___ * ___;\\n___\\n___ ___() {\\n    ___ ___ = ___(___);\\n    ___(\"___\", ___);\\n    ___ ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "int double_it(int x) {",
          "    // 2倍にした値を返す",
          "    return x * 2;",
          "}",
          "int main() {",
          "    int result = double_it(7);",
          "    printf(\"%d\\n\", result);",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "プリプロセッサディレクティブでヘッダファイルstdio.hを読み込みます。",
          "int型を返すdouble_it関数をint型の引数xで定義します。",
          null,
          "return文でxを2倍にした値を返します。",
          "関数の終わりを示す閉じ括弧です。",
          "int型を返すmain関数を定義します。",
          "int型の変数resultにdouble_it(7)の戻り値を代入します。",
          "printf関数でresultを%d形式で表示します。",
          "return文で0を返します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "return"
          ],
          "others": ["include", "stdio.h", "int", "double_it", "x", "2", "}", "main", "result", "7", "printf", "%d\\n", "0", "%d"]
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
      "holeyCode": "#___ <___>\\n___ ___() {\\n    ___ ___[] = {___, ___, ___};\\n    // 配列の先頭アドレスを代入\\n    ___ *___ = ___;\\n    ___(\"___\", *(___ + ___));\\n    ___ ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "int main() {",
          "    int arr[] = {5, 15, 25};",
          "    // 配列の先頭アドレスを代入",
          "    int *p = arr;",
          "    printf(\"%d\\n\", *(p + 2));",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "プリプロセッサディレクティブでヘッダファイルstdio.hを読み込みます。",
          "int型を返すmain関数を定義します。",
          "int型の配列arrに{5, 15, 25}を代入します。",
          null,
          "int型のポインタpに配列arrの先頭アドレスを代入します。",
          "printf関数で*(p + 2)（3番目の要素）を%d形式で表示します。",
          "return文で0を返します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "variables": [
            "arr", "p"
          ],
          "others": ["include", "stdio.h", "int", "main", "5", "15", "25", "printf", "%d\\n", "2", "return", "0", "}", "%d"]
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
      "holeyCode": "#___ <___>\\n___ ___() {\\n    ___ ___[] = \"___\";\\n    // 文字列を表示する書式指定子\\n    ___(\"___\", ___);\\n    ___ ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "int main() {",
          "    char msg[] = \"こんにちは\";",
          "    // 文字列を表示する書式指定子",
          "    printf(\"%s\\n\", msg);",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "プリプロセッサディレクティブでヘッダファイルstdio.hを読み込みます。",
          "int型を返すmain関数を定義します。",
          "char型の配列msgに文字列\"こんにちは\"を代入します。",
          null,
          "printf関数でmsgを%s形式で表示します。",
          "return文で0を返します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "strings": [
            "こんにちは"
          ],
          "others": ["include", "stdio.h", "int", "main", "char", "msg", "printf", "%s\\n", "return", "0", "}", "%s"]
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
      "holeyCode": "#___ <___>\\n___ ___(___ *___) {\\n    *___ = *___ * ___;\\n___\\n___ ___() {\\n    ___ ___ = ___;\\n    // valのアドレスを取得する演算子\\n    ___(&___);\\n    ___(\"___\", ___);\\n    ___ ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "void triple(int *p) {",
          "    *p = *p * 3;",
          "}",
          "int main() {",
          "    int val = 4;",
          "    // valのアドレスを取得する演算子",
          "    triple(&val);",
          "    printf(\"%d\\n\", val);",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "プリプロセッサディレクティブでヘッダファイルstdio.hを読み込みます。",
          "void型を返すtriple関数をint型のポインタpで定義します。",
          "*pが指す値に*pを3倍した値を代入します。",
          "関数の終わりを示す閉じ括弧です。",
          "int型を返すmain関数を定義します。",
          "int型の変数valに4を代入します。",
          null,
          "triple関数にvalのアドレスを渡して呼び出します。",
          "printf関数でvalを%d形式で表示します。",
          "return文で0を返します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "operators": [
            "&"
          ],
          "others": ["include", "stdio.h", "void", "triple", "int", "p", "3", "}", "main", "val", "4", "printf", "%d\\n", "return", "0", "%d"]
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
      "holeyCode": "#___ <___>\\n#___ <___>\\n___ ___() {\\n    ___ *___ = ___(sizeof(___));\\n    *___ = ___;\\n    ___(\"___\", *___);\\n    // 確保したメモリを解放する関数\\n    ___(___);\\n    ___ ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "#include <stdlib.h>",
          "int main() {",
          "    int *p = malloc(sizeof(int));",
          "    *p = 50;",
          "    printf(\"%d\\n\", *p);",
          "    // 確保したメモリを解放する関数",
          "    free(p);",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "プリプロセッサディレクティブでヘッダファイルstdio.hを読み込みます。",
          "プリプロセッサディレクティブでヘッダファイルstdlib.hを読み込みます。",
          "int型を返すmain関数を定義します。",
          "int型のポインタpにmalloc(sizeof(int))の戻り値を代入します。",
          "*pが指す位置に50を代入します。",
          "printf関数で*pを%d形式で表示します。",
          null,
          "free関数でpが指すメモリを解放します。",
          "return文で0を返します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "functions": [
            "malloc", "free"
          ],
          "others": ["include", "stdio.h", "stdlib.h", "int", "main", "p", "50", "printf", "%d\\n", "return", "0", "}", "%d"]
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
      "holeyCode": "#___ <___>\\n___ ___ {\\n    ___ ___;\\n___\\n___ ___() {\\n    ___ ___ ___ = {___};\\n    ___ ___ *___ = &___;\\n    // ポインタからメンバにアクセスする演算子\\n    ___(\"___\", ___->___);\\n    ___ ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "struct Item {",
          "    int price;",
          "};",
          "int main() {",
          "    struct Item item = {200};",
          "    struct Item *p = &item;",
          "    // ポインタからメンバにアクセスする演算子",
          "    printf(\"%d\\n\", p->price);",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "プリプロセッサディレクティブでヘッダファイルstdio.hを読み込みます。",
          "structキーワードでItem構造体を定義します。",
          "int型のpriceメンバを宣言します。",
          "構造体定義の終わりを示すセミコロン付き閉じ括弧です。",
          "int型を返すmain関数を定義します。",
          "struct Item型の変数itemを{200}で初期化します。",
          "struct Item型のポインタpにitemのアドレスを代入します。",
          null,
          "printf関数でp->price（ポインタ経由でメンバにアクセス）を%d形式で表示します。",
          "return文で0を返します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "struct"
          ],
          "others": ["include", "stdio.h", "Item", "int", "price", "};", "main", "item", "200", "p", "printf", "%d\\n", "return", "0", "}", "%d"]
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
      "holeyCode": "#___ <___>\\n___ ___ { ___, ___, ___ };\\n___ ___() {\\n    // 列挙型の変数を宣言するキーワード\\n    ___ ___ ___ = ___;\\n    ___(\"___\", ___);\\n    ___ ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "enum Day { MON, TUE, WED };",
          "int main() {",
          "    // 列挙型の変数を宣言するキーワード",
          "    enum Day today = WED;",
          "    printf(\"%d\\n\", today);",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "プリプロセッサディレクティブでヘッダファイルstdio.hを読み込みます。",
          "enumキーワードでDay列挙型を定義し、MON, TUE, WEDを列挙します。",
          "int型を返すmain関数を定義します。",
          null,
          "enum Day型の変数todayにWEDを代入します。",
          "printf関数でtodayを%d形式で表示します。",
          "return文で0を返します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "enum"
          ],
          "others": ["include", "stdio.h", "Day", "MON", "TUE", "WED", "int", "main", "today", "printf", "%d\\n", "return", "0", "}", "%d"]
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
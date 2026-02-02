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
        "description": "変数のある「場所（アドレス）」を覚えておく特別な変数「ポインタ」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 1,
        "tutorialSlides": [
          {
            "title": "ポインタとは？",
            "content": "# メモリの住所を覚える変数\n\n**ポインタ** は、他の変数がメモリのどこにあるか（住所＝アドレス）を覚えておく特別な変数です。`&` を使うと変数の住所を取得できます。"
          },
          {
            "title": "ポインタの使い方",
            "content": "# * を使って宣言します\n\n`int *p` のように `*` をつけるとポインタ変数になります。`&x` で x の住所を取得し、`*p` で住所の中身を見ます。\n\n**コード例：**\n```c\nint x = 10;\nint *p = &x;      // p に x の住所を入れる\nprintf(\"%d\\n\", *p); // p が指す中身を表示 → 10\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\nint main() {\n    int x = 42;\n    // xのアドレスを取得する演算子\n    int *p = &x;\n    printf(\"%d\\n\", *p);\n    return 0;\n}",
        "holeyCode": "#include <stdio.h>\nint ___() {\n    int x = ___;\n    // xのアドレスを取得する演算子\n    int *p = &___;\n    printf(\"%d\\\n\", *p);\n    return ___;\n___",
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
          null,
          "整数型の変数を宣言し、初期値を代入します。",
          "& を使って x のアドレスを取得します。",
          null,
          "*p で中身を取り出します。",
          null,
          null,
          null,
        ],
        "candidates": {
          "operators": [
            "&"
          ],
          "others": ["main", "42", "x"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "42"
          }
        ]
      },
    {
        "title": "ポインタで値を変える",
        "description": "ポインタを使って、元の変数の値を別の場所から変更してみましょう。",
        "difficulty": "medium",
        "orderIndex": 2,
        "tutorialSlides": [
          {
            "title": "間接的に値を変える",
            "content": "# ポインタ経由で書き換え\n\nポインタが指す先の値は `*p = 新しい値` で変更できます。これにより、元の変数の中身が変わります。"
          },
          {
            "title": "デリファレンス（参照外し）",
            "content": "# * で中身にアクセス\n\n`*p` と書くと「p が指している場所の中身」を意味します。読み取りだけでなく、書き込みもできます。\n\n**コード例：**\n```c\nint x = 5;\nint *p = &x;\n*p = 100;  // x が 100 に変わる\nprintf(\"%d\\n\", x); // 100\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\nint main() {\n    int n = 10;\n    int *ptr = &n;\n    // ptrが指す先の値にアクセスする演算子\n    *ptr = 99;\n    printf(\"%d\\n\", n);\n    return 0;\n}", "holeyCode": "#include <stdio.h>\nint ___() {\n    int n = ___;\n    int *ptr = &___;\n    // ptrが指す先の値にアクセスする演算子\n    *ptr = 99;\n    printf(\"%d\\\n\", n);\n    return ___;\n___",
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
          null,
          "整数型の変数を宣言し、初期値を代入します。",
          "ptr に n のアドレスを入れます。",
          "* を使って ptr の指す先に 99 を代入します。",
          null,
          "変数の値を指定された形式で画面に表示します。",
          null,
          null,
          null,
        ],
        "candidates": {
          "operators": [
            "*"
          ],
          "others": ["main", "10", "n"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "99"
          }
        ]
      },
    {
        "title": "関数に引数を渡す",
        "description": "関数を呼び出すときに、値を渡す方法を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "関数の引数とは？",
            "content": "# 関数に情報を渡す\n\n関数を呼ぶときに、外から値を渡すことができます。渡された値は関数の中で使えます。"
          },
          {
            "title": "引数の使い方",
            "content": "# かっこの中に引数を定義\n\n関数名の後の () の中に引数を書きます。型と名前を指定します。\n\n**コード例：**\n```c\nvoid greet(int age) {\n    printf(\"%d歳ですね\\n\", age);\n}\n\ngreet(10); // 10歳ですね\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\n// printfで使っている引数名を定義\nvoid show(int num) {\n    printf(\"%d\\n\", num);\n}\nint main() {\n    show(25);\n    return 0;\n}",
        "holeyCode": "#include <stdio.h>\n// printfで使っている引数名を定義\nvoid show(int ___) {\n    printf(\"%d\\\n\", num);\n___\nint ___() {\n    show(___);\n    return ___;\n___",
        "correctLines": [
          "#include <stdio.h>",
          "// printfで使っている引数名を定義",
          "void show(int num) {",
          "    printf(\"%d\\n\", num);",
          "}",
          "int main() {",
          "    show(25);",
          "    return 0;",
          "}"
        ],
        "lineHints": [
          null,
          null,
          "void型の値を返す関数（show）を定義します。",
          "変数の値を指定された形式で画面に表示します。",
          "25 を渡して関数を呼び出します。",
          null,
          null,
          null,
          null,
        ],
        "candidates": {
          "variables": [
            "num"
          ],
          "others": ["int main() {", "show", "n 0;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "25"
          }
        ]
      },
    {
        "title": "戻り値のある関数",
        "description": "関数から結果を返す「戻り値」を使ってみましょう。",
        "difficulty": "medium",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "戻り値とは？",
            "content": "# 関数から結果を受け取る\n\n関数が処理した結果を呼び出し元に返すのが **戻り値** です。`return` を使って値を返します。"
          },
          {
            "title": "return の使い方",
            "content": "# 型を指定して結果を返す\n\n関数名の前に戻り値の型を書きます。`void` は戻り値なし、`int` は整数を返します。\n\n**コード例：**\n```c\nint add(int a, int b) {\n    return a + b;\n}\n\nint result = add(3, 5); // 8\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\nint double_it(int x) {\n    // 計算結果を呼び出し元に返すキーワード\n    return x * 2;\n}\nint main() {\n    int result = double_it(7);\n    printf(\"%d\\n\", result);\n    return 0;\n}",
        "holeyCode": "#include <stdio.h>\nint double_it(int ___) {\n    // 計算結果を呼び出し元に返すキーワード\n    return x * ___;\n___\nint ___() {\n    int result = double_it(___);\n    printf(\"%d\\\n\", result);\n    return ___;\n___",
        "correctLines": [
          "#include <stdio.h>",
          "int double_it(int x) {",
          "    // 計算結果を呼び出し元に返すキーワード",
          "    return x * 2;",
          "}",
          "int main() {",
          "    int result = double_it(7);",
          "    printf(\"%d\\n\", result);",
          "    return 0;",
          "}"
        ],
        "lineHints": [
          null,
          "int型の値を返す関数（double_it）を定義します。",
          null,
          "return を使って計算結果を返します。",
          "関数の戻り値を result に受け取ります。",
          "変数の値を指定された形式で画面に表示します。",
          null,
          null,
          null,
          null,
        ],
        "candidates": {
          "keywords": [
            "return"
          ],
          "others": ["x", "2", "}", "main", "7"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "14"
          }
        ]
      },
    {
        "title": "配列とポインタ",
        "description": "配列の名前は実はポインタ！配列とポインタの関係を理解しましょう。",
        "difficulty": "medium",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "配列名はアドレス",
            "content": "# 配列名＝先頭のアドレス\n\n配列の名前をそのまま使うと、先頭要素のアドレスになります。`arr` と `&arr[0]` は同じ意味です。"
          },
          {
            "title": "ポインタで配列にアクセス",
            "content": "# ポインタ演算\n\nポインタに数字を足すと、その分だけ先の要素を指します。`*(p + 1)` は `p[1]` と同じです。\n\n**コード例：**\n```c\nint arr[] = {10, 20, 30};\nint *p = arr;\nprintf(\"%d\\n\", *(p + 1)); // 20\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\nint main() {\n    int arr[] = {5, 15, 25};\n    // 配列の先頭アドレスを代入\n    int *p = arr;\n    printf(\"%d\\n\", *(p + 2));\n    return 0;\n}",
        "holeyCode": "#include <stdio.h>\nint ___() {\n    int arr[] = {___};\n    // 配列の先頭アドレスを代入\n    int *p = ___;\n    printf(\"%d\\\n\", *(p + 2));\n    return ___;\n___",
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
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          "配列名 arr を p に代入します（先頭アドレス）。",
          null,
          "p + 2 で3番目の要素にアクセスします。",
          null,
          null,
          null,
        ],
        "candidates": {
          "variables": [
            "arr"
          ],
          "others": ["main", "5, 15, 25"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "25"
          }
        ]
      },
    {
        "title": "文字列の基本",
        "description": "C言語での文字列は、文字の配列です。その仕組みを学びましょう。",
        "difficulty": "medium",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "C言語の文字列",
            "content": "# 文字の配列 + ヌル終端\n\nC言語の文字列は `char` 型の配列で、最後に `\\0`（ヌル文字）が入ります。これが文字列の終わりの目印です。"
          },
          {
            "title": "文字列の表示",
            "content": "# %s を使って表示\n\n文字列を表示するには `%s` を使います。ダブルクォートで囲んだ文字列は自動的にヌル終端されます。\n\n**コード例：**\n```c\nchar name[] = \"Taro\";\nprintf(\"%s\\n\", name); // Taro\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\nint main() {\n    char msg[] = \"Hello\";\n    // 文字列を表示する書式指定子\n    printf(\"%s\\n\", msg);\n    return 0;\n}",
        "holeyCode": "#include <stdio.h>\nint ___() {\n    char msg[] = \"___\";\n    // 文字列を表示する書式指定子\n    printf(\"%s\\\n\", msg);\n    return ___;\n___",
        "correctLines": [
          "#include <stdio.h>",
          "int main() {",
          "    char msg[] = \"Hello\";",
          "    // 文字列を表示する書式指定子",
          "    printf(\"%s\\n\", msg);",
          "    return 0;",
          "}"
        ],
        "lineHints": [
          null,
          "char型の配列に文字列を入れます。",
          "変数の値を指定された形式で画面に表示します。",
          null,
          null,
          null,
          null,
        ],
        "candidates": {
          "strings": [
            "s"
          ],
          "others": ["main", "Hello"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello"
          }
        ]
      },
    {
        "title": "ポインタを関数に渡す",
        "description": "関数に変数のアドレスを渡して、元の変数を変更できるようにしましょう。",
        "difficulty": "medium",
        "orderIndex": 7,
        "tutorialSlides": [
          {
            "title": "参照渡し風のテクニック",
            "content": "# ポインタで元の値を変える\n\nC言語は値渡しですが、ポインタを渡せば関数内から元の変数を変更できます。これを「参照渡し風」と呼びます。"
          },
          {
            "title": "アドレスを引数に",
            "content": "# 関数側でポインタを受け取る\n\n関数の引数をポインタにし、呼び出し時に `&` でアドレスを渡します。\n\n**コード例：**\n```c\nvoid add_ten(int *p) {\n    *p = *p + 10;\n}\n\nint x = 5;\nadd_ten(&x);\nprintf(\"%d\\n\", x); // 15\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\nvoid triple(int *p) {\n    *p = *p * 3;\n}\nint main() {\n    int val = 4;\n    // valのアドレスを取得する演算子\n    triple(&val);\n    printf(\"%d\\n\", val);\n    return 0;\n}", "holeyCode": "#include <stdio.h>\nvoid triple(int *___) {\n    *p = *p * 3;\n___\nint ___() {\n    int val = ___;\n    // valのアドレスを取得する演算子\n    triple(&___);\n    printf(\"%d\\\n\", val);\n    return ___;\n___",
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
          null,
          "void型の値を返す関数（triple）を定義します。",
          "ポインタ経由で値を3倍にします。",
          "整数型の変数を宣言し、初期値を代入します。",
          "& を使って val のアドレスを渡します。",
          "変数の値を指定された形式で画面に表示します。",
          null,
          null,
          null,
          null,
          null,
        ],
        "candidates": {
          "operators": [
            "&"
          ],
          "others": ["p", "}", "main", "4", "val"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "12"
          }
        ]
      },
    {
        "title": "動的メモリ確保 malloc",
        "description": "プログラム実行中に必要なメモリを確保する malloc を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "動的メモリとは？",
            "content": "# 実行時にメモリを確保\n\n配列のサイズを実行時に決めたいときは **動的メモリ確保** を使います。`malloc` 関数でメモリを確保し、使い終わったら `free` で解放します。"
          },
          {
            "title": "malloc と free",
            "content": "# stdlib.h が必要\n\n`malloc(サイズ)` でメモリを確保し、ポインタで受け取ります。必ず `free` で解放しましょう。\n\n**コード例：**\n```c\n#include <stdlib.h>\nint *p = malloc(sizeof(int));\n*p = 100;\nprintf(\"%d\\n\", *p);\nfree(p);\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int *p = malloc(sizeof(int));\n    *p = 50;\n    printf(\"%d\\n\", *p);\n    // 確保したメモリを解放する関数\n    free(p);\n    return 0;\n}", "holeyCode": "#include <stdio.h>\n#include <stdlib.h>\nint ___() {\n    ___ *p = malloc(sizeof(int));\n    *p = 50;\n    printf(\"%d\\\n\", *p);\n    // 確保したメモリを解放する関数\n    free(___);\n    return ___;\n___",
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
          null,
          null,
          "標準ライブラリを読み込み、使用可能にします。",
          "malloc で int サイズのメモリを確保します。",
          "確保したメモリに 50 を代入します。",
          "値を表示します。",
          "free でメモリを解放します。",
          null,
          null,
          null,
        ],
        "candidates": {
          "functions": [
            "free"
          ],
          "others": ["main", "int", "n 0;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "50"
          }
        ]
      },
    {
        "title": "構造体へのポインタ",
        "description": "構造体をポインタで扱い、アロー演算子でメンバにアクセスしましょう。",
        "difficulty": "medium",
        "orderIndex": 9,
        "tutorialSlides": [
          {
            "title": "構造体とポインタ",
            "content": "# 構造体もアドレスを持つ\n\n構造体変数のアドレスをポインタに入れることで、効率的に構造体を扱えます。大きな構造体を関数に渡すときに特に便利です。"
          },
          {
            "title": "アロー演算子 ->",
            "content": "# ポインタからメンバにアクセス\n\n構造体ポインタからメンバにアクセスするには `->` を使います。`(*p).x` と `p->x` は同じ意味です。\n\n**コード例：**\n```c\nstruct Point { int x; int y; };\nstruct Point pt = {3, 4};\nstruct Point *p = &pt;\nprintf(\"%d\\n\", p->x); // 3\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\nstruct Item {\n    int price;\n};\nint main() {\n    struct Item item = {200};\n    struct Item *p = &item;\n    // ポインタからメンバにアクセスする演算子\n    printf(\"%d\\n\", p->price);\n    return 0;\n}",
        "holeyCode": "#include <stdio.h>\nstruct ___ {\n    int ___;\n___\nint ___() {\n    struct Item item = {___};\n    struct Item *p = &___;\n    // ポインタからメンバにアクセスする演算子\n    printf(\"%d\\\n\", p->price);\n    return ___;\n___",
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
          null,
          "構造体（Item）を定義します。",
          "price メンバを持ちます。",
          "構造体（Item）を定義します。",
          "構造体（Item）を定義します。",
          "変数の値を指定された形式で画面に表示します。",
          null,
          null,
          null,
          null,
          null,
        ],
        "candidates": {
          "operators": [
            "->"
          ],
          "others": ["Item", "price", "};", "main", "200", "item"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "200"
          }
        ]
      },
    {
        "title": "列挙型 enum",
        "description": "関連する定数をまとめて名前をつける「列挙型（enum）」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 10,
        "tutorialSlides": [
          {
            "title": "列挙型とは？",
            "content": "# 名前付き定数のグループ\n\n**enum（列挙型）** を使うと、関連する値に意味のある名前をつけてまとめられます。コードが読みやすくなります。"
          },
          {
            "title": "enum の使い方",
            "content": "# 値は自動で 0 から割り当て\n\nenum で定義した名前には、自動的に 0, 1, 2... と値が割り当てられます。\n\n**コード例：**\n```c\nenum Color { RED, GREEN, BLUE };\nenum Color c = GREEN;\nprintf(\"%d\\n\", c); // 1\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\nenum Day { MON, TUE, WED };\nint main() {\n    // 列挙型の変数を宣言するキーワード\n    enum Day today = WED;\n    printf(\"%d\\n\", today);\n    return 0;\n}",
        "holeyCode": "#include <stdio.h>\nenum Day { MON, TUE, ___ };\nint ___() {\n    // 列挙型の変数を宣言するキーワード\n    enum Day today = ___;\n    printf(\"%d\\\n\", today);\n    return ___;\n___",
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
          null,
          "Day という列挙型を定義します。",
          "enum Day 型の変数を作ります。",
          null,
          "変数の値を指定された形式で画面に表示します。",
          null,
          null,
          null,
        ],
        "candidates": {
          "keywords": [
            "enum"
          ],
          "others": ["WED", "main"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "2"
          }
        ]
      }
  ]
}

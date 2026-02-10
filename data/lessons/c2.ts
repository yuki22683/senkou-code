export const c2Data = {
  "language": "c",
  "lessonId": "c-2",
  "lessonTitle": "C言語 II - ポインタとメモリ",
  "lessonDescription": "C言語の真髄「ポインタ」を中心に、メモリ管理や高度な関数の使い方を学びます。コンピュータの仕組みを深く理解しましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "tutorialSlides": [
    { "title": "ポインタとは？", "content": "# メモリの住所を覚える変数\\n\\n**ポインタ**は、他の変数がメモリのどこにあるか（住所＝アドレス）を覚えておく特別な変数です。\\n\\n`&`を使うと変数の住所を取得できます。\\n\\n```c\\nint x = 10;\\nint *p = &x;      // pにxの住所を入れる\\nprintf(\\\"%d\\n\\\", *p); // pが指す中身を表示 → 10\\n```" },
    { "title": "ポインタで値を変える", "content": "# 間接的に値を書き換え\\n\\n`*p`でポインタが指す先の値にアクセスできます。\\n\\n```c\\nint x = 5;\\nint *p = &x;\\n*p = 100;  // xが100に変わる！\\nprintf(\\\"%d\\n\\\", x); // 100\\n```" },
    { "title": "配列とポインタ", "content": "# 配列名はポインタ\\n\\n配列の名前は、先頭要素へのポインタとして扱えます。\\n\\n```c\\nint arr[] = {10, 20, 30};\\nint *p = arr;  // 配列の先頭を指す\\nprintf(\\\"%d\\n\\\", *p);       // 10\\nprintf(\\\"%d\\n\\\", *(p + 1)); // 20\\n```" },
    { "title": "関数に引数を渡す", "content": "# 値渡しとポインタ渡し\\n\\n**値渡し**: コピーが渡される（元の変数は変わらない）\\n**ポインタ渡し**: 住所が渡される（元の変数を変更できる）\\n\\n```c\\nvoid swap(int *a, int *b) {\\n    int t = *a;\\n    *a = *b;\\n    *b = t;\\n}\\n```" }
  ],
  "exercises": [
    {
      "title": "ポインタって何？",
      "description": "ポインタって何？の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "ポインタとは？",
          "content": "# メモリの住所を覚える変数\\n\\n**ポインタ** は、他の変数がメモリのどこにあるか（住所＝アドレス）を覚えておく特別な変数です。`&` を使うと変数の住所を取得できます。"
        },
        {
          "title": "ポインタの使い方",
          "content": "# * を使って宣言します\\n\\n`int *p` のように `*` をつけるとポインタ変数になります。`&x` で x の住所を取得し、`*p` で住所の中身を見ます。\\n\\n**コード例：**\\n```c\\nint x = 10;\\nint *p = &x;      // p に x の住所を入れる\\nprintf(\"%d\\n\", *p); // p が指す中身を表示 → 10\\n```"
        }
      ],
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
      "description": "ポインタで値を変えるの使い方を学びます",
      "tutorialSlides": [
        {
          "title": "間接的に値を変える",
          "content": "# ポインタ経由で書き換え\\n\\nポインタが指す先の値は `*p = 新しい値` で変更できます。これにより、元の変数の中身が変わります。"
        },
        {
          "title": "デリファレンス（参照外し）",
          "content": "# * で中身にアクセス\\n\\n`*p` と書くと「p が指している場所の中身」を意味します。読み取りだけでなく、書き込みもできます。\\n\\n**コード例：**\\n```c\\nint x = 5;\\nint *p = &x;\\n*p = 100;  // x が 100 に変わる\\nprintf(\"%d\\n\", x); // 100\\n```"
        }
      ],
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
      "description": "関数に値を渡す方法を学びます",
      "tutorialSlides": [
        {
          "title": "関数の引数とは？",
          "content": "# 関数に情報を渡す\\n\\n関数を呼ぶときに、外から値を渡すことができます。渡された値は関数の中で使えます。"
        },
        {
          "title": "引数の使い方",
          "content": "# かっこの中に引数を定義\\n\\n関数名の後の () の中に引数を書きます。型と名前を指定します。\\n\\n**コード例：**\\n```c\\nvoid greet(int age) {\\n    printf(\"%d歳ですね\\n\", age);\\n}\\n\\ngreet(10); // 10歳ですね\\n```"
        }
      ],
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
      "description": "関数から値を返す方法を学びます",
      "tutorialSlides": [
        {
          "title": "戻り値とは？",
          "content": "# 関数から結果を受け取る\\n\\n関数が処理した結果を呼び出し元に返すのが **戻り値** です。`return` を使って値を返します。"
        },
        {
          "title": "return の使い方",
          "content": "# 型を指定して結果を返す\\n\\n関数名の前に戻り値の型を書きます。`void` は戻り値なし、`int` は整数を返します。\\n\\n**コード例：**\\n```c\\nint add(int a, int b) {\\n    return a + b;\\n}\\n\\nint result = add(3, 5); // 8\\n```"
        }
      ],
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
      "description": "複数のデータをまとめて管理する方法を学びます",
      "tutorialSlides": [
        {
          "title": "配列名はアドレス",
          "content": "# 配列名＝先頭のアドレス\\n\\n配列の名前をそのまま使うと、先頭要素のアドレスになります。`arr` と `&arr[0]` は同じ意味です。"
        },
        {
          "title": "ポインタで配列にアクセス",
          "content": "# ポインタ演算\\n\\nポインタに数字を足すと、その分だけ先の要素を指します。`*(p + 1)` は `p[1]` と同じです。\\n\\n**コード例：**\\n```c\\nint arr[] = {10, 20, 30};\\nint *p = arr;\\nprintf(\"%d\\n\", *(p + 1)); // 20\\n```"
        }
      ],
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
      "description": "文字列の操作方法を学びます",
      "tutorialSlides": [
        {
          "title": "C言語の文字列",
          "content": "# 文字の配列 + ヌル終端\\n\\nC言語の文字列は `char` 型の配列で、最後に `\\0`（ヌル文字）が入ります。これが文字列の終わりの目印です。"
        },
        {
          "title": "文字列の表示",
          "content": "# %s を使って表示\\n\\n文字列を表示するには `%s` を使います。ダブルクォートで囲んだ文字列は自動的にヌル終端されます。\\n\\n**コード例：**\\n```c\\nchar name[] = \"Taro\";\\nprintf(\"%s\\n\", name); // Taro\\n```"
        }
      ],
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
      "description": "処理をまとめて再利用する「関数」を学びます",
      "tutorialSlides": [
        {
          "title": "参照渡し風のテクニック",
          "content": "# ポインタで元の値を変える\\n\\nC言語は値渡しですが、ポインタを渡せば関数内から元の変数を変更できます。これを「参照渡し風」と呼びます。"
        },
        {
          "title": "アドレスを引数に",
          "content": "# 関数側でポインタを受け取る\\n\\n関数の引数をポインタにし、呼び出し時に `&` でアドレスを渡します。\\n\\n**コード例：**\\n```c\\nvoid add_ten(int *p) {\\n    *p = *p + 10;\\n}\\n\\nint x = 5;\\nadd_ten(&x);\\nprintf(\"%d\\n\", x); // 15\\n```"
        }
      ],
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
      "description": "動的メモリ確保 mallocの使い方を学びます",
      "tutorialSlides": [
        {
          "title": "動的メモリとは？",
          "content": "# 実行時にメモリを確保\\n\\n配列のサイズを実行時に決めたいときは **動的メモリ確保** を使います。`malloc` 関数でメモリを確保し、使い終わったら `free` で解放します。"
        },
        {
          "title": "malloc と free",
          "content": "# stdlib.h が必要\\n\\n`malloc(サイズ)` でメモリを確保し、ポインタで受け取ります。必ず `free` で解放しましょう。\\n\\n**コード例：**\\n```c\\n#include <stdlib.h>\\nint *p = malloc(sizeof(int));\\n*p = 100;\\nprintf(\"%d\\n\", *p);\\nfree(p);\\n```"
        }
      ],
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
      "description": "構造体へのポインタの使い方を学びます",
      "tutorialSlides": [
        {
          "title": "構造体とポインタ",
          "content": "# 構造体もアドレスを持つ\\n\\n構造体変数のアドレスをポインタに入れることで、効率的に構造体を扱えます。大きな構造体を関数に渡すときに特に便利です。"
        },
        {
          "title": "アロー演算子 ->",
          "content": "# ポインタからメンバにアクセス\\n\\n構造体ポインタからメンバにアクセスするには `->` を使います。`(*p).x` と `p->x` は同じ意味です。\\n\\n**コード例：**\\n```c\\nstruct Point { int x; int y; };\\nstruct Point pt = {3, 4};\\nstruct Point *p = &pt;\\nprintf(\"%d\\n\", p->x); // 3\\n```"
        }
      ],
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
      "description": "データの種類（型）について学びます",
      "tutorialSlides": [
        {
          "title": "列挙型とは？",
          "content": "# 名前付き定数のグループ\\n\\n**enum（列挙型）** を使うと、関連する値に意味のある名前をつけてまとめられます。コードが読みやすくなります。"
        },
        {
          "title": "enum の使い方",
          "content": "# 値は自動で 0 から割り当て\\n\\nenum で定義した名前には、自動的に 0, 1, 2... と値が割り当てられます。\\n\\n**コード例：**\\n```c\\nenum Color { RED, GREEN, BLUE };\\nenum Color c = GREEN;\\nprintf(\"%d\\n\", c); // 1\\n```"
        }
      ],
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
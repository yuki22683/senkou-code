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
      "description": "ポインタについて学びます",
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
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n// int mainでmain関数を定義\\nint main() {\\n    // int xでxを宣言し42を代入\\n    int x = 42;\\n    // int *pでポインタpを宣言し&xでxのアドレスを代入\\n    int *p = &x;\\n    // printfでpが指す値を出力\\n    printf(\"%d\\n\", *p);\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}", "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n// int mainでmain関数を定義\\n___ ___() {\\n    // int xでxを宣言し42を代入\\n    ___ ___ = ___;\\n    // int *pでポインタpを宣言し&xでxのアドレスを代入\\n    ___ *___ = ______;\\n    // printfでpが指す値を出力\\n    ___(\"___\", *___);\\n    // return 0で正常終了を返す\\n    return ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // int xでxを宣言し42を代入",
          "    int x = 42;",
          "    // int *pでポインタpを宣言し&xでxのアドレスを代入",
          "    int *p = &x;",
          "    // printfでpが指す値を出力",
          "    printf(\"%d\\n\", *p);",
          "    // return 0で正常終了を返す",
          "    return 0;",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "operators": [
            "&"
          ],
          "others": ["include", "stdio.h", "int", "main", "x", "42", "p", "printf", "%d\\n", "return", "0", "}", "%d", "//", "xのアドレスを取得する演算子", "printf(\"%d\\n\",", "p);"]
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
      "description": "ポインタで値を変えるの仕組みと使い方を学びます",
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
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n// int mainでmain関数を定義\\nint main() {\\n    // int nでnを宣言し10を代入\\n    int n = 10;\\n    // int *ptrでポインタptrを宣言し&nでnのアドレスを代入\\n    int *ptr = &n;\\n    // ptrが指す先に99を代入\\n    *ptr = 99;\\n    // printfでnを出力\\n    printf(\"%d\\n\", n);\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}", "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n// int mainでmain関数を定義\\n___ ___() {\\n    // int nでnを宣言し10を代入\\n    ___ ___ = ___;\\n    // int *ptrでポインタptrを宣言し&nでnのアドレスを代入\\n    ___ *___ = ______;\\n    // ptrが指す先に99を代入\\n    *___ = ___;\\n    // printfでnを出力\\n    ___(\"___\", ___);\\n    // return 0で正常終了を返す\\n    return ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // int nでnを宣言し10を代入",
          "    int n = 10;",
          "    // int *ptrでポインタptrを宣言し&nでnのアドレスを代入",
          "    int *ptr = &n;",
          "    // ptrが指す先に99を代入",
          "    *ptr = 99;",
          "    // printfでnを出力",
          "    printf(\"%d\\n\", n);",
          "    // return 0で正常終了を返す",
          "    return 0;",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "operators": [
            "&"
          ],
          "others": ["include", "stdio.h", "int", "main", "n", "10", "ptr", "99", "printf", "%d\\n", "return", "0", "}", "%d", "*ptr", "&n"]
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
      "description": "関数に「材料」を渡して、柔軟に動作させる方法を学びます",
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
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n// void showでshow関数（引数int num）を定義\\nvoid show(int num) {\\n    // printfでnumを出力\\n    printf(\"%d\\n\", num);\\n// show関数を閉じる\\n}\\n// int mainでmain関数を定義\\nint main() {\\n    // show関数（引数25）を呼び出す\\n    show(25);\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}", "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n// void showでshow関数（引数int num）を定義\\n___ ___(___ ___) {\\n    // printfでnumを出力\\n    ___(\"___\", ___);\\n// show関数を閉じる\\n___\\n// int mainでmain関数を定義\\n___ ___() {\\n    // show関数（引数25）を呼び出す\\n    ___(___);\\n    // return 0で正常終了を返す\\n    return ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "// void showでshow関数（引数int num）を定義",
          "void show(int num) {",
          "    // printfでnumを出力",
          "    printf(\"%d\\n\", num);",
          "// show関数を閉じる",
          "}",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // show関数（引数25）を呼び出す",
          "    show(25);",
          "    // return 0で正常終了を返す",
          "    return 0;",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "variables": [
            "num"
          ],
          "others": ["include", "stdio.h", "void", "show", "int", "printf", "%d\\n", "}", "main", "25", "return", "0", "%d", "show(25);", "// show関数（引数25）を呼び出す", "return 0;"]
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
      "description": "関数の処理結果を呼び出し元に返す方法を学びます",
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
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n// int double_itでdouble_it関数（引数int x）を定義\\nint double_it(int x) {\\n    // returnでxを2倍した値を返す\\n    return x * 2;\\n// double_it関数を閉じる\\n}\\n// int mainでmain関数を定義\\nint main() {\\n    // int resultにdouble_it関数（引数7）の結果を代入\\n    int result = double_it(7);\\n    // printfでresultを出力\\n    printf(\"%d\\n\", result);\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}", "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n// int double_itでdouble_it関数（引数int x）を定義\\n___ ___(___ ___) {\\n    // returnでxを2倍した値を返す\\n    ___ ___ * ___;\\n// double_it関数を閉じる\\n___\\n// int mainでmain関数を定義\\n___ ___() {\\n    // int resultにdouble_it関数（引数7）の結果を代入\\n    ___ ___ = ___(___);\\n    // printfでresultを出力\\n    ___(\"___\", ___);\\n    // return 0で正常終了を返す\\n    return ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "// int double_itでdouble_it関数（引数int x）を定義",
          "int double_it(int x) {",
          "    // returnでxを2倍した値を返す",
          "    return x * 2;",
          "// double_it関数を閉じる",
          "}",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // int resultにdouble_it関数（引数7）の結果を代入",
          "    int result = double_it(7);",
          "    // printfでresultを出力",
          "    printf(\"%d\\n\", result);",
          "    // return 0で正常終了を返す",
          "    return 0;",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "keywords": [
            "return"
          ],
          "others": ["include", "stdio.h", "int", "double_it", "x", "2", "}", "main", "result", "7", "printf", "%d\\n", "0", "%d", "int main() {"]
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
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
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
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n// int mainでmain関数を定義\\nint main() {\\n    // int arr[]で配列arrを宣言し（5、15、25）で初期化\\n    int arr[] = {5, 15, 25};\\n    // int *pでポインタpを宣言しarrの先頭アドレスを代入\\n    int *p = arr;\\n    // printfでpの2つ先の要素（インデックス2、値25）を出力\\n    printf(\"%d\\n\", *(p + 2));\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}", "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n// int mainでmain関数を定義\\n___ ___() {\\n    // int arr[]で配列arrを宣言し（5、15、25）で初期化\\n    ___ ___[] = {___, ___, ___};\\n    // int *pでポインタpを宣言しarrの先頭アドレスを代入\\n    ___ *___ = ___;\\n    // printfでpの2つ先の要素（インデックス2、値25）を出力\\n    ___(\"___\", *(___ + ___));\\n    // return 0で正常終了を返す\\n    return ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // int arr[]で配列arrを宣言し（5、15、25）で初期化",
          "    int arr[] = {5, 15, 25};",
          "    // int *pでポインタpを宣言しarrの先頭アドレスを代入",
          "    int *p = arr;",
          "    // printfでpの2つ先の要素（インデックス2、値25）を出力",
          "    printf(\"%d\\n\", *(p + 2));",
          "    // return 0で正常終了を返す",
          "    return 0;",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "variables": [
            "arr", "p"
          ],
          "others": ["include", "stdio.h", "int", "main", "5", "15", "25", "printf", "%d\\n", "2", "return", "0", "}", "%d", "//", "配列の先頭アドレスを代入", "printf(\"%d\\n\",", "(p", "2))"]
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
      "description": "文字列を操作する方法を学びます",
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
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n// int mainでmain関数を定義\\nint main() {\\n    // char msg[]で文字列msgを宣言し「こんにちは」で初期化\\n    char msg[] = \"こんにちは\";\\n    // printfで%sを使いmsgを出力\\n    printf(\"%s\\n\", msg);\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}", "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n// int mainでmain関数を定義\\n___ ___() {\\n    // char msg[]で文字列msgを宣言し「こんにちは」で初期化\\n    ___ ___[] = \\\"___\\\";\\n    // printfで%sを使いmsgを出力\\n    ___(\\\"___\\\", ___);\\n    // return 0で正常終了を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // char msg[]で文字列msgを宣言し「こんにちは」で初期化",
          "    char msg[] = \"こんにちは\";",
          "    // printfで%sを使いmsgを出力",
          "    printf(\"%s\\n\", msg);",
          "    // return 0で正常終了を返す",
          "    return 0;",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "strings": [
            "こんにちは"
          ],
          "others": ["include", "stdio.h", "int", "main", "char", "msg", "printf", "%s\\n", "return", "0", "}", "%s", "//", "文字列を表示する書式指定子", "return 0;"]
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
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
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
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n// void tripleでtriple関数（引数int *p）を定義\\nvoid triple(int *p) {\\n    // pが指す値を3倍にして代入\\n    *p = *p * 3;\\n// triple関数を閉じる\\n}\\n// int mainでmain関数を定義\\nint main() {\\n    // int valでvalを宣言し4を代入\\n    int val = 4;\\n    // triple関数（引数valのアドレス）を呼び出す\\n    triple(&val);\\n    // printfでvalを出力\\n    printf(\"%d\\n\", val);\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}", "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n// void tripleでtriple関数（引数int *p）を定義\\n___ ___(___ *___) {\\n    // pが指す値を3倍にして代入\\n    *___ = *___ * ___;\\n// triple関数を閉じる\\n___\\n// int mainでmain関数を定義\\n___ ___() {\\n    // int valでvalを宣言し4を代入\\n    ___ ___ = ___;\\n    // triple関数（引数valのアドレス）を呼び出す\\n    ___(&___);\\n    // printfでvalを出力\\n    ___(\\\"___\\\", ___);\\n    // return 0で正常終了を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "// void tripleでtriple関数（引数int *p）を定義",
          "void triple(int *p) {",
          "    // pが指す値を3倍にして代入",
          "    *p = *p * 3;",
          "// triple関数を閉じる",
          "}",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // int valでvalを宣言し4を代入",
          "    int val = 4;",
          "    // triple関数（引数valのアドレス）を呼び出す",
          "    triple(&val);",
          "    // printfでvalを出力",
          "    printf(\"%d\\n\", val);",
          "    // return 0で正常終了を返す",
          "    return 0;",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "operators": [
            "&"
          ],
          "others": ["include", "stdio.h", "void", "triple", "int", "p", "3", "}", "main", "val", "4", "printf", "%d\\n", "return", "0", "%d", "int val = 4;", "triple(&val);", "return 0;"]
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
      "description": "動的メモリ確保について学びます",
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
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n// #includeでstdlib.hを読み込む\\n#include <stdlib.h>\\n// int mainでmain関数を定義\\nint main() {\\n    // int *pでポインタpを宣言しmallocでint型サイズのメモリを確保\\n    int *p = malloc(sizeof(int));\\n    // pが指す先に50を代入\\n    *p = 50;\\n    // printfでpが指す値を出力\\n    printf(\"%d\\n\", *p);\\n    // freeでpのメモリを解放\\n    free(p);\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}", "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n// #includeでstdlib.hを読み込む\\n#___ <___>\\n// int mainでmain関数を定義\\n___ ___() {\\n    // int *pでポインタpを宣言しmallocでint型サイズのメモリを確保\\n    ___ *___ = ___(___(___));\\n    // pが指す先に50を代入\\n    *___ = ___;\\n    // printfでpが指す値を出力\\n    ___(\\\"___\\\", *___);\\n    // freeでpのメモリを解放\\n    ___(___);\\n    // return 0で正常終了を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "// #includeでstdlib.hを読み込む",
          "#include <stdlib.h>",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // int *pでポインタpを宣言しmallocでint型サイズのメモリを確保",
          "    int *p = malloc(sizeof(int));",
          "    // pが指す先に50を代入",
          "    *p = 50;",
          "    // printfでpが指す値を出力",
          "    printf(\"%d\\n\", *p);",
          "    // freeでpのメモリを解放",
          "    free(p);",
          "    // return 0で正常終了を返す",
          "    return 0;",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "functions": [
            "malloc", "free"
          ],
          "others": ["include", "stdio.h", "stdlib.h", "int", "main", "p", "50", "printf", "%d\\n", "return", "0", "}", "%d", "*p", ";", "// 確保したメモリを解放する関数", "return 0;"]
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
      "description": "構造体へのポインタの仕組みと使い方を学びます",
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
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n// struct ItemでItem構造体を定義\\nstruct Item {\\n    // int priceでpriceメンバを宣言\\n    int price;\\n// 構造体定義を閉じる\\n};\\n// int mainでmain関数を定義\\nint main() {\\n    // struct Item itemでitemを宣言し価格200で初期化\\n    struct Item item = {200};\\n    // struct Item *pでポインタpを宣言し&itemでitemのアドレスを代入\\n    struct Item *p = &item;\\n    // printfでpのpriceメンバを出力\\n    printf(\"%d\\n\", p->price);\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}",
      "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n// struct ItemでItem構造体を定義\\n___ ___ {\\n    // int priceでpriceメンバを宣言\\n    ___ ___;\\n// 構造体定義を閉じる\\n___\\n// int mainでmain関数を定義\\n___ ___() {\\n    // struct Item itemでitemを宣言し価格200で初期化\\n    ___ ___ ___ = {___};\\n    // struct Item *pでポインタpを宣言し&itemでitemのアドレスを代入\\n    ___ ___ *___ = &___;\\n    // printfでpのpriceメンバを出力\\n    ___(\\\"___\\\", ___->___);\\n    // return 0で正常終了を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "// struct ItemでItem構造体を定義",
          "struct Item {",
          "    // int priceでpriceメンバを宣言",
          "    int price;",
          "// 構造体定義を閉じる",
          "};",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // struct Item itemでitemを宣言し価格200で初期化",
          "    struct Item item = {200};",
          "    // struct Item *pでポインタpを宣言し&itemでitemのアドレスを代入",
          "    struct Item *p = &item;",
          "    // printfでpのpriceメンバを出力",
          "    printf(\"%d\\n\", p->price);",
          "    // return 0で正常終了を返す",
          "    return 0;",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "keywords": [
            "struct"
          ],
          "others": ["include", "stdio.h", "Item", "int", "price", "};", "main", "item", "200", "p", "printf", "%d\\n", "return", "0", "}", "%d", "struct Item item = {200};", "// ポインタからメンバにアクセスする演算子", "0;"]
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
      "description": "データの種類（型）について理解します",
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
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n// enum DayでDay列挙型（MON、TUE、WED）を定義\\nenum Day { MON, TUE, WED };\\n// int mainでmain関数を定義\\nint main() {\\n    // enum Day todayでtodayを宣言しWEDを代入\\n    enum Day today = WED;\\n    // printfでtoday（WEDの値2）を出力\\n    printf(\"%d\\n\", today);\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}", "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n// enum DayでDay列挙型（MON、TUE、WED）を定義\\n___ ___ { ___, ___, ___ };\\n// int mainでmain関数を定義\\n___ ___() {\\n    // enum Day todayでtodayを宣言しWEDを代入\\n    ___ ___ ___ = ___;\\n    // printfでtoday（WEDの値2）を出力\\n    ___(\\\"___\\\", ___);\\n    // return 0で正常終了を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "// enum DayでDay列挙型（MON、TUE、WED）を定義",
          "enum Day { MON, TUE, WED };",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // enum Day todayでtodayを宣言しWEDを代入",
          "    enum Day today = WED;",
          "    // printfでtoday（WEDの値2）を出力",
          "    printf(\"%d\\n\", today);",
          "    // return 0で正常終了を返す",
          "    return 0;",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "keywords": [
            "enum"
          ],
          "others": ["include", "stdio.h", "Day", "MON", "TUE", "WED", "int", "main", "today", "printf", "%d\\n", "return", "0", "}", "%d", "// 列挙型の変数を宣言するキーワード", "printf(\"%d\\n\",", "today);"]
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
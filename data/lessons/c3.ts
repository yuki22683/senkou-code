export const c3Data = {
  "language": "c",
  "lessonId": "c-3",
  "lessonTitle": "C言語 III - 高度なポインタとファイル",
  "lessonDescription": "C言語の高度な機能を学びます。関数ポインタ、ビット演算、ファイル操作など、システムプログラミングの技法を身つけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "tutorialSlides": [
    { "title": "関数ポインタ", "content": "# 関数を指すポインタ\\n\\n関数ポインタは、関数のアドレスを格納できる変数です。\\n\\n```c\\nint add(int a, int b) { return a + b; }\\n\\nint (*fp)(int, int);  // 関数ポインタを宣言\\nfp = add;\\nprintf(\\\"%d\\n\\\", fp(2, 3));  // 5\\n```" },
    { "title": "コールバック関数", "content": "# 関数を引数として渡す\\n\\n関数ポインタを引数として受け取り、後で呼び出す仕組みがコールバックです。\\n\\n```c\\nvoid process(int arr[], int n, void (*callback)(int)) {\\n    for (int i = 0; i < n; i++) {\\n        callback(arr[i]);\\n    }\\n}\\n```" },
    { "title": "ビット演算", "content": "# ビット単位の操作\\n\\n```c\\nint a = 5;   // 0101（2進数）\\nint b = 3;   // 0011（2進数）\\n\\na & b  // AND: 0001 → 1\\na | b  // OR:  0111 → 7\\na ^ b  // XOR: 0110 → 6\\n~a     // NOT: 反転\\na << 1 // 左シフト: 1010 → 10\\n```" },
    { "title": "構造体", "content": "# データをまとめる\\n\\n```c\\nstruct Person {\\n    char name[50];\\n    int age;\\n};\\n\\nstruct Person p;\\nstrcpy(p.name, \\\"太郎\\\");\\np.age = 20;\\n```\\n\\n関連するデータを1つにまとめて扱えます。" }
  ],
  "exercises": [
    {
      "title": "関数ポインタ",
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "関数ポインタとは？",
          "content": "# 関数を指すポインタ\\n\\n**関数ポインタ** は、関数のアドレスを格納できる変数です。\\n\\n```c\\nint add(int a, int b) { return a + b; }\\n\\n// 関数ポインタの宣言\\nint (*fp)(int, int);\\nfp = add;\\n```"
        },
        {
          "title": "関数ポインタの使い方",
          "content": "# 関数を変数として扱う\\n\\n```c\\nint (*fp)(int, int) = add;\\nint result = fp(2, 3);  // 5\\n```"
        }
      ],
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n\\n// int squareでsquare関数（引数int x）を定義しx*xを返す\\nint square(int x) { return x * x; }\\n\\n// int mainでmain関数を定義\\nint main() {\\n    // int (*fp)(int)で関数ポインタfpを宣言しsquareを代入\\n    int (*fp)(int) = square;\\n    // printfでfp(5)（squareに5を渡した結果25）を出力\\n    printf(\"%d\\n\", fp(5));\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}", "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n\\n// int squareでsquare関数（引数int x）を定義しx*xを返す\\n___ ___(___ ___) { ___ ___ * ___; }\\n\\n// int mainでmain関数を定義\\n___ ___() {\\n    // int (*fp)(int)で関数ポインタfpを宣言しsquareを代入\\n    ___ (*___)(___) = ___;\\n    // printfでfp(5)（squareに5を渡した結果25）を出力\\n    ___(\\\"___\\\", ___(___));\\n    // return 0で正常終了を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "",
          "// int squareでsquare関数（引数int x）を定義しx*xを返す",
          "int square(int x) { return x * x; }",
          "",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // int (*fp)(int)で関数ポインタfpを宣言しsquareを代入",
          "    int (*fp)(int) = square;",
          "    // printfでfp(5)（squareに5を渡した結果25）を出力",
          "    printf(\"%d\\n\", fp(5));",
          "    // return 0で正常終了を返す",
          "    return 0;",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          null,
          "",
          null,
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
            "fp",
            "x"
          ],
          "others": ["include", "stdio.h", "int", "square", "return", "*", "main", "%d\\n", "5", "0", "}", "printf", "%d", "int main() {"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "25\\n"
          }
        ]
      },
    {
      "title": "コールバック関数",
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "コールバックとは？",
          "content": "# 関数を引数として渡す\\n\\n**コールバック** は、関数ポインタを引数として受け取り、後で呼び出す仕組みです。\\n\\n```c\\nvoid process(int arr[], int n, void (*callback)(int)) {\\n    for (int i = 0; i < n; i++) {\\n        callback(arr[i]);\\n    }\\n}\\n```"
        },
        {
          "title": "使用例",
          "content": "# 柔軟な処理\\n\\n```c\\nvoid print(int x) { printf(\"%d \", x); }\\n\\nint arr[] = {1, 2, 3};\\nprocess(arr, 3, print);  // 1 2 3\\n```"
        }
      ],
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n\\n// void applyでapply関数（引数int nと関数ポインタf）を定義\\nvoid apply(int n, void (*f)(int)) {\\n    // f(n)で関数ポインタfにnを渡して呼び出す\\n    f(n);\\n// apply関数を閉じる\\n}\\n\\n// void showでshow関数（引数int x）を定義\\nvoid show(int x) {\\n    // printfで「Value: x」の形式でxを出力\\n    printf(\"Value: %d\\n\", x);\\n// show関数を閉じる\\n}\\n\\n// int mainでmain関数を定義\\nint main() {\\n    // apply関数（第1引数に42, 第2引数にshow）を呼び出す\\n    apply(42, show);\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}", "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n\\n// void applyでapply関数（引数int nと関数ポインタf）を定義\\n___ ___(___ ___, ___ (*___)(___)) {\\n    // f(n)で関数ポインタfにnを渡して呼び出す\\n    ___(___);\\n// apply関数を閉じる\\n___\\n\\n// void showでshow関数（引数int x）を定義\\n___ ___(___ ___) {\\n    // printfで「Value: x」の形式でxを出力\\n    ___(\\\"___\\\", ___);\\n// show関数を閉じる\\n___\\n\\n// int mainでmain関数を定義\\n___ ___() {\\n    // apply関数（第1引数に42, 第2引数にshow）を呼び出す\\n    ___(___, ___);\\n    // return 0で正常終了を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "",
          "// void applyでapply関数（引数int nと関数ポインタf）を定義",
          "void apply(int n, void (*f)(int)) {",
          "    // f(n)で関数ポインタfにnを渡して呼び出す",
          "    f(n);",
          "// apply関数を閉じる",
          "}",
          "",
          "// void showでshow関数（引数int x）を定義",
          "void show(int x) {",
          "    // printfで「Value: x」の形式でxを出力",
          "    printf(\"Value: %d\\n\", x);",
          "// show関数を閉じる",
          "}",
          "",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // apply関数（第1引数に42, 第2引数にshow）を呼び出す",
          "    apply(42, show);",
          "    // return 0で正常終了を返す",
          "    return 0;",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
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
            "f",
            "n",
            "x"
          ],
          "others": ["include", "stdio.h", "void", "int", "apply", "show", "main", "printf", "Value: %d\\n", "42", "return", "0", "}", "Value: %d", "// 引数で受け取った関数ポインタを呼び出す", "void show(int x) {", "printf(\"Value: %d\\n\", x);", "2, show);", "// apply関数（第1引数に42, 第2引数にshow）を呼び出す", "return 0;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Value: 42\\n"
          }
        ]
      },
    {
      "title": "ビット演算 AND",
      "description": "複数の条件を組み合わせる方法を学びます",
      "tutorialSlides": [
        {
          "title": "ビットAND とは？",
          "content": "# 両方が1なら1\\n\\n**&** は、両方のビットが1の場合のみ1になります。\\n\\n```c\\n// 5 = 0101\\n// 3 = 0011\\n// -------\\n// 1 = 0001\\nint result = 5 & 3;  // 1\\n```"
        },
        {
          "title": "使用例：マスク",
          "content": "# 特定ビットの抽出\\n\\n```c\\n// 下位4ビットだけ取得\\nint x = 0xAB;  // 10101011\\nint low4 = x & 0x0F;  // 00001011 = 11\\n```"
        }
      ],
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n\\n// int mainでmain関数を定義\\nint main() {\\n    // int aでaを宣言し12（2進数1100）を代入\\n    int a = 12;  // 1100\\n    // int bでbを宣言し10（2進数1010）を代入\\n    int b = 10;  // 1010\\n    // printfでa & b（ビットAND結果8）を出力\\n    printf(\"%d\\n\", a & b);  // 8 (1000)\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}", "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n\\n// int mainでmain関数を定義\\n___ ___() {\\n    // int aでaを宣言し12（2進数1100）を代入\\n    ___ ___ = ___;  // 1100\\n    // int bでbを宣言し10（2進数1010）を代入\\n    ___ ___ = ___;  // 1010\\n    // printfでa & b（ビットAND結果8）を出力\\n    ___(\\\"___\\\", ___ ___ ___);  // 8 (1000)\\n    // return 0で正常終了を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // int aでaを宣言し12（2進数1100）を代入",
          "    int a = 12;  // 1100",
          "    // int bでbを宣言し10（2進数1010）を代入",
          "    int b = 10;  // 1010",
          "    // printfでa & b（ビットAND結果8）を出力",
          "    printf(\"%d\\n\", a & b);  // 8 (1000)",
          "    // return 0で正常終了を返す",
          "    return 0;",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
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
            "&",
            "|",
            "^"
          ],
          "others": ["include", "stdio.h", "int", "main", "a", "b", "12", "10", "printf", "%d\\n", "return", "0", "}", "%d", "\"%d", "& b", "int a = 12;  // 1100", "//", "両方のビットが1の場合のみ1になる演算子", "0;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "8\\n"
          }
        ]
      },
    {
      "title": "ビット演算 OR",
      "description": "複数の条件を組み合わせる方法を学びます",
      "tutorialSlides": [
        {
          "title": "ビットOR とは？",
          "content": "# どちらかが1なら1\\n\\n**|** は、どちらかのビットが1なら1になります。\\n\\n```c\\n// 5 = 0101\\n// 3 = 0011\\n// -------\\n// 7 = 0111\\nint result = 5 | 3;  // 7\\n```"
        },
        {
          "title": "使用例：フラグ設定",
          "content": "# ビットを立てる\\n\\n```c\\nint flags = 0;\\nflags |= 0x01;  // フラグ1をON\\nflags |= 0x04;  // フラグ3をON\\n// flags = 0x05 (0101)\\n```"
        }
      ],
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n\\n// int mainでmain関数を定義\\nint main() {\\n    // int aでaを宣言し12（2進数1100）を代入\\n    int a = 12;  // 1100\\n    // int bでbを宣言し10（2進数1010）を代入\\n    int b = 10;  // 1010\\n    // printfでa | b（ビットOR結果14）を出力\\n    printf(\"%d\\n\", a | b);  // 14 (1110)\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}", "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n\\n// int mainでmain関数を定義\\n___ ___() {\\n    // int aでaを宣言し12（2進数1100）を代入\\n    ___ ___ = ___;  // 1100\\n    // int bでbを宣言し10（2進数1010）を代入\\n    ___ ___ = ___;  // 1010\\n    // printfでa | b（ビットOR結果14）を出力\\n    ___(\\\"___\\\", ___ ___ ___);  // 14 (1110)\\n    // return 0で正常終了を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // int aでaを宣言し12（2進数1100）を代入",
          "    int a = 12;  // 1100",
          "    // int bでbを宣言し10（2進数1010）を代入",
          "    int b = 10;  // 1010",
          "    // printfでa | b（ビットOR結果14）を出力",
          "    printf(\"%d\\n\", a | b);  // 14 (1110)",
          "    // return 0で正常終了を返す",
          "    return 0;",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
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
            "|",
            "&",
            "^"
          ],
          "others": ["include", "stdio.h", "int", "main", "a", "b", "12", "10", "printf", "%d\\n", "return", "0", "}", "%d", "\"%d", "| b", "int a = 12;  // 1100", "//", "どちらかのビットが1なら1になる演算子", "0;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "14\\n"
          }
        ]
      },
    {
      "title": "ビットシフト",
      "description": "<<について学びます",
      "tutorialSlides": [
        {
          "title": "シフト演算とは？",
          "content": "# ビットを移動\\n\\n**<<** は左シフト、**>>** は右シフトです。\\n\\n```c\\nint x = 1;     // 0001\\nx << 2;        // 0100 = 4\\nx << 3;        // 1000 = 8\\n```"
        },
        {
          "title": "2の累乗との関係",
          "content": "# 掛け算・割り算の代わり\\n\\n```c\\n// 左シフト = 2倍\\n5 << 1;  // 10\\n\\n// 右シフト = 2で割る\\n8 >> 1;  // 4\\n```"
        }
      ],
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n\\n// int mainでmain関数を定義\\nint main() {\\n    // int xでxを宣言し3を代入\\n    int x = 3;\\n    // printfでx << 2（3を左に2ビットシフトした結果12）を出力\\n    printf(\"%d\\n\", x << 2);  // 12\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}", "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n\\n// int mainでmain関数を定義\\n___ ___() {\\n    // int xでxを宣言し3を代入\\n    ___ ___ = ___;\\n    // printfでx << 2（3を左に2ビットシフトした結果12）を出力\\n    ___(\\\"___\\\", ___ ___ ___);  // 12\\n    // return 0で正常終了を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // int xでxを宣言し3を代入",
          "    int x = 3;",
          "    // printfでx << 2（3を左に2ビットシフトした結果12）を出力",
          "    printf(\"%d\\n\", x << 2);  // 12",
          "    // return 0で正常終了を返す",
          "    return 0;",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
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
            "<<",
            ">>",
            "<"
          ],
          "others": ["include", "stdio.h", "int", "main", "x", "3", "2", "printf", "%d\\n", "return", "0", "}", "%d", "\"%d", "<< 2", "int x = 3;", "printf(\"%d\\n\",", "2)"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "12\\n"
          }
        ]
      },
    {
      "title": "sizeof 演算子",
      "description": "sizeofについて学びます",
      "tutorialSlides": [
        {
          "title": "sizeof とは？",
          "content": "# バイトサイズを取得\\n\\n**sizeof** は、型や変数のバイト数を返します。\\n\\n```c\\nprintf(\"%zu\\n\", sizeof(int));    // 4（環境依存）\\nprintf(\"%zu\\n\", sizeof(char));   // 1\\nprintf(\"%zu\\n\", sizeof(double)); // 8\\n```"
        },
        {
          "title": "配列のサイズ",
          "content": "# 配列の要素数を計算\\n\\n```c\\nint arr[] = {1, 2, 3, 4, 5};\\nint count = sizeof(arr) / sizeof(arr[0]);\\n// count = 5\\n```"
        }
      ],
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n\\n// int mainでmain関数を定義\\nint main() {\\n    // int arr[]で配列arrを宣言し（10、20、30）で初期化\\n    int arr[] = {10, 20, 30};\\n    // int countでsizeof(arr)/sizeof(arr[0])で要素数を計算しcountに代入\\n    int count = sizeof(arr) / sizeof(arr[0]);\\n    // printfでcount（要素数3）を出力\\n    printf(\"%d\\n\", count);\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}", "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n\\n// int mainでmain関数を定義\\n___ ___() {\\n    // int arr[]で配列arrを宣言し（10、20、30）で初期化\\n    ___ ___[] = {___, ___, ___};\\n    // int countでsizeof(arr)/sizeof(arr[0])で要素数を計算しcountに代入\\n    ___ ___ = ___(___) / ___(___[___]);\\n    // printfでcount（要素数3）を出力\\n    ___(\\\"___\\\", ___);\\n    // return 0で正常終了を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // int arr[]で配列arrを宣言し（10、20、30）で初期化",
          "    int arr[] = {10, 20, 30};",
          "    // int countでsizeof(arr)/sizeof(arr[0])で要素数を計算しcountに代入",
          "    int count = sizeof(arr) / sizeof(arr[0]);",
          "    // printfでcount（要素数3）を出力",
          "    printf(\"%d\\n\", count);",
          "    // return 0で正常終了を返す",
          "    return 0;",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
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
            "sizeof",
            "strlen",
            "length"
          ],
          "others": ["include", "stdio.h", "int", "main", "arr", "10", "20", "30", "count", "0", "printf", "%d\\n", "return", "}", "%d", "int arr[] = {10, 20, 30};", "count = sizeof(arr) / sizeof(arr", "0;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "3\\n"
          }
        ]
      },
    {
      "title": "typedef で型に別名",
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "typedef とは？",
          "content": "# 型に別名を定義\\n\\n**typedef** を使うと、型に新しい名前をつけられます。\\n\\n```c\\ntypedef unsigned int uint;\\ntypedef int* IntPtr;\\n\\nuint x = 10;\\nIntPtr p = &x;\\n```"
        },
        {
          "title": "構造体との組み合わせ",
          "content": "# 構造体を簡潔に\\n\\n```c\\ntypedef struct {\\n    int x;\\n    int y;\\n} Point;\\n\\nPoint p = {10, 20};\\n```"
        }
      ],
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n\\n// typedef intでint型にNumberという別名を定義\\ntypedef int Number;\\n\\n// int mainでmain関数を定義\\nint main() {\\n    // Number xでxを宣言し100を代入\\n    Number x = 100;\\n    // printfでxを出力\\n    printf(\"%d\\n\", x);\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}", "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n\\n// typedef intでint型にNumberという別名を定義\\n___ ___ ___;\\n\\n// int mainでmain関数を定義\\n___ ___() {\\n    // Number xでxを宣言し100を代入\\n    ___ ___ = ___;\\n    // printfでxを出力\\n    ___(\\\"___\\\", ___);\\n    // return 0で正常終了を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "",
          "// typedef intでint型にNumberという別名を定義",
          "typedef int Number;",
          "",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // Number xでxを宣言し100を代入",
          "    Number x = 100;",
          "    // printfでxを出力",
          "    printf(\"%d\\n\", x);",
          "    // return 0で正常終了を返す",
          "    return 0;",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          null,
          "",
          null,
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
            "typedef",
            "define",
            "alias"
          ],
          "others": ["include", "stdio.h", "int", "Number", "main", "x", "100", "printf", "%d\\n", "return", "0", "}", "%d", "Number x = 100;", "0;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "100\\n"
          }
        ]
      },
    {
      "title": "const ポインタ",
      "description": "const ポインタの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "const とポインタ",
          "content": "# 何が const か？\\n\\n```c\\n// 指す先の値が変更不可\\nconst int *p1;\\n\\n// ポインタ自体が変更不可\\nint * const p2;\\n\\n// 両方変更不可\\nconst int * const p3;\\n```"
        },
        {
          "title": "使いどころ",
          "content": "# 安全な関数引数\\n\\n```c\\nvoid print(const char *str) {\\n    // str の中身は変更できない\\n    printf(\"%s\\n\", str);\\n}\\n```"
        }
      ],
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n\\n// void showでshow関数（引数const int *p）を定義\\nvoid show(const int *p) {\\n    // printfで*p（pが指す値）を出力\\n    printf(\"%d\\n\", *p);\\n// show関数を閉じる\\n}\\n\\n// int mainでmain関数を定義\\nint main() {\\n    // int xでxを宣言し42を代入\\n    int x = 42;\\n    // show関数（引数&x）を呼び出す\\n    show(&x);\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}", "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n\\n// void showでshow関数（引数const int *p）を定義\\n___ ___(___ ___ *___) {\\n    // printfで*p（pが指す値）を出力\\n    ___(\\\"___\\\", *___);\\n// show関数を閉じる\\n___\\n\\n// int mainでmain関数を定義\\n___ ___() {\\n    // int xでxを宣言し42を代入\\n    ___ ___ = ___;\\n    // show関数（引数&x）を呼び出す\\n    ___(&___);\\n    // return 0で正常終了を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "",
          "// void showでshow関数（引数const int *p）を定義",
          "void show(const int *p) {",
          "    // printfで*p（pが指す値）を出力",
          "    printf(\"%d\\n\", *p);",
          "// show関数を閉じる",
          "}",
          "",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // int xでxを宣言し42を代入",
          "    int x = 42;",
          "    // show関数（引数&x）を呼び出す",
          "    show(&x);",
          "    // return 0で正常終了を返す",
          "    return 0;",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
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
            "const",
            "static",
            "volatile"
          ],
          "others": ["include", "stdio.h", "void", "int", "show", "p", "main", "x", "42", "printf", "%d\\n", "return", "0", "}", "%d", "main(", "show(&x);", "return 0;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "42\\n"
          }
        ]
      },
    {
      "title": "static 変数",
      "description": "データを名前をつけて保存する「変数」の仕組みを理解します",
      "tutorialSlides": [
        {
          "title": "static とは？",
          "content": "# 値を保持する\\n\\n**static** 変数は、関数が終了しても値を保持します。\\n\\n```c\\nvoid count() {\\n    static int n = 0;\\n    n++;\\n    printf(\"%d\\n\", n);\\n}\\n```"
        },
        {
          "title": "呼び出しごとに増加",
          "content": "# カウンタとして使う\\n\\n```c\\ncount();  // 1\\ncount();  // 2\\ncount();  // 3\\n```"
        }
      ],
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n\\n// void counterでcounter関数を定義\\nvoid counter() {\\n    // static int countで呼び出し間で保持される変数countを0で初期化\\n    static int count = 0;\\n    // count++でcountを1増やす\\n    count++;\\n    // printfでcountを出力\\n    printf(\"%d\\n\", count);\\n// counter関数を閉じる\\n}\\n\\n// int mainでmain関数を定義\\nint main() {\\n    // counter関数を呼び出す（1回目）\\n    counter();\\n    // counter関数を呼び出す（2回目）\\n    counter();\\n    // counter関数を呼び出す（3回目）\\n    counter();\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}", "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n\\n// void counterでcounter関数を定義\\n___ ___() {\\n    // static int countで呼び出し間で保持される変数countを0で初期化\\n    ___ ___ ___ = ___;\\n    // count++でcountを1増やす\\n    ___++;\\n    // printfでcountを出力\\n    ___(\\\"___\\\", ___);\\n// counter関数を閉じる\\n___\\n\\n// int mainでmain関数を定義\\n___ ___() {\\n    // counter関数を呼び出す（1回目）\\n    ___();\\n    // counter関数を呼び出す（2回目）\\n    ___();\\n    // counter関数を呼び出す（3回目）\\n    ___();\\n    // return 0で正常終了を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "",
          "// void counterでcounter関数を定義",
          "void counter() {",
          "    // static int countで呼び出し間で保持される変数countを0で初期化",
          "    static int count = 0;",
          "    // count++でcountを1増やす",
          "    count++;",
          "    // printfでcountを出力",
          "    printf(\"%d\\n\", count);",
          "// counter関数を閉じる",
          "}",
          "",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // counter関数を呼び出す（1回目）",
          "    counter();",
          "    // counter関数を呼び出す（2回目）",
          "    counter();",
          "    // counter関数を呼び出す（3回目）",
          "    counter();",
          "    // return 0で正常終了を返す",
          "    return 0;",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
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
            "static",
            "const",
            "extern"
          ],
          "others": ["include", "stdio.h", "void", "int", "counter", "count", "0", "main", "printf", "%d\\n", "return", "}", "%d", "// 呼び出し間で値を保持するstatic変数", "count++;", "{", "counter(", "return 0;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n2\\n3\\n"
          }
        ]
      },
    {
      "title": "マクロ定義",
      "description": "マクロ定義の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "マクロとは？",
          "content": "# コンパイル前の置換\\n\\n**#define** でマクロを定義すると、コンパイル前に置換されます。\\n\\n```c\\n#define PI 3.14159\\n#define MAX(a,b) ((a) > (b) ? (a) : (b))\\n```"
        },
        {
          "title": "関数風マクロ",
          "content": "# 引数を取るマクロ\\n\\n```c\\n#define SQUARE(x) ((x) * (x))\\n\\nint result = SQUARE(5);  // 25\\n```"
        }
      ],
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n\\n// #define DOUBLE(x)でxを2倍するマクロを定義\\n#define DOUBLE(x) ((x) * 2)\\n\\n// int mainでmain関数を定義\\nint main() {\\n    // printfでDOUBLE(7)（7の2倍14）を出力\\n    printf(\"%d\\n\", DOUBLE(7));\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}", "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n\\n// #define DOUBLE(x)でxを2倍するマクロを定義\\n#___ ___(___) ((___)  * ___)\\n\\n// int mainでmain関数を定義\\n___ ___() {\\n    // printfでDOUBLE(7)（7の2倍14）を出力\\n    ___(\\\"___\\\", ___(___));\\n    // return 0で正常終了を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "",
          "// #define DOUBLE(x)でxを2倍するマクロを定義",
          "#define DOUBLE(x) ((x) * 2)",
          "",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // printfでDOUBLE(7)（7の2倍14）を出力",
          "    printf(\"%d\\n\", DOUBLE(7));",
          "    // return 0で正常終了を返す",
          "    return 0;",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          null,
          "",
          null,
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
            "define",
            "include",
            "ifdef"
          ],
          "others": ["stdio.h", "DOUBLE", "x", "2", "int", "main", "printf", "%d\\n", "7", "return", "0", "}", "%d"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "14\\n"
          }
        ]
      }
  ]
}
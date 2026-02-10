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
      "correctCode": "#include <stdio.h>\\n\\nint square(int x) { return x * x; }\\n\\nint main() {\\n    // 関数ポインタを宣言する記法\\n    int (*fp)(int) = square;\\n    printf(\"%d\\n\", fp(5));\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\n___\\n// 変数を宣言\\n___ ___(int ___) { ___ ___ * ___; }\\n___\\n// ブロックを開始\\n___ ___() {\\n    // 関数ポインタを宣言する記法\\n    ___ (*___)(___) = ___;\\n    // 出力\\n    ___(\"___\\n// 文を実行\\n\", ___(___));\\n    // 値を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "",
          "// 変数を宣言",
          "int square(int x) { return x * x; }",
          "",
          "// ブロックを開始",
          "int main() {",
          "    // 関数ポインタを宣言する記法",
          "    int (*fp)(int) = square;",
          "    // 出力",
          "    printf(\\\"%d",
          "// 文を実行",
          "\\\", fp(5));",
          "    // 値を返す",
          "    return 0;",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
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
          "",
          null,
          ""
        ],
        "candidates": {
          "variables": [
            "fp",
            "x"
          ],
          "others": ["include", "stdio.h", "int", "square", "return", "*", "main", "%d\\n", "5", "0", "}", "printf", "%d"]
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
      "correctCode": "#include <stdio.h>\\n\\nvoid apply(int n, void (*f)(int)) {\\n    // 引数で受け取った関数ポインタを呼び出す\\n    f(n);\\n}\\n\\nvoid show(int x) {\\n    printf(\"Value: %d\\n\", x);\\n}\\n\\nint main() {\\n    apply(42, show);\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\n___\\n___ ___(___ ___, ___ (*___)(___)) {\\n    // 引数で受け取った関数ポインタを呼び出す\\n    ___(___);\\n___\\n___\\n___ ___(___ ___) {\\n    ___(\"___\\n\", ___);\\n___\\n___\\n___ ___() {\\n    ___(___, ___);\\n    ___ ___;\\n___",
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
          "#includeでヘッダファイルを読み込む構文です。",
          null,
          "整数nと関数ポインタfを受け取り、fを実行するapply関数を定義します。",
          null,
          "関数ポインタfを呼び出し、引数nを渡します。",
          "関数のスコープを閉じます。",
          null,
          "整数xを受け取り表示するshow関数を定義します。",
          "printf関数でフォーマット文字列と変数xを出力します。",
          "フォーマット指定子に対応する値を渡します。",
          "関数のスコープを閉じます。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "apply関数を呼び出し、引数42と関数showを渡します。",
          "プログラムの正常終了を示す値0を返します。",
          "関数のスコープを閉じます。"
        ],
        "candidates": {
          "variables": [
            "f",
            "n",
            "x"
          ],
          "others": ["include", "stdio.h", "void", "int", "apply", "show", "main", "printf", "Value: %d\\n", "42", "return", "0", "}", "Value: %d"]
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
      "correctCode": "#include <stdio.h>\\n\\nint main() {\\n    int a = 12;  // 1100\\n    int b = 10;  // 1010\\n    // 両方のビットが1の場合のみ1になる演算子\\n    printf(\"%d\\n\", a & b);  // 8 (1000)\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\n___\\n___ ___() {\\n    ___ ___ = ___;  // 1100\\n    ___ ___ = ___;  // 1010\\n    // 両方のビットが1の場合のみ1になる演算子\\n    ___(\"___\\n\", ___ ___ ___);  // 8 (1000)\\n    ___ ___;\\n___",
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
          "#includeでヘッダファイルを読み込む構文です。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "int型の変数aを宣言し、12を代入します。",
          "int型の変数bを宣言し、10を代入します。",
          null,
          "printf関数でa & bのビット演算結果を表示します。",
          "フォーマット指定子に対応する値を渡します。",
          "プログラムの正常終了を示す値0を返します。",
          "関数のスコープを閉じます。"
        ],
        "candidates": {
          "operators": [
            "&",
            "|",
            "^"
          ],
          "others": ["include", "stdio.h", "int", "main", "a", "b", "12", "10", "printf", "%d\\n", "return", "0", "}", "%d"]
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
      "correctCode": "#include <stdio.h>\\n\\nint main() {\\n    int a = 12;  // 1100\\n    int b = 10;  // 1010\\n    // どちらかのビットが1なら1になる演算子\\n    printf(\"%d\\n\", a | b);  // 14 (1110)\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\n___\\n___ ___() {\\n    ___ ___ = ___;  // 1100\\n    ___ ___ = ___;  // 1010\\n    // どちらかのビットが1なら1になる演算子\\n    ___(\"___\\n\", ___ ___ ___);  // 14 (1110)\\n    ___ ___;\\n___",
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
          "#includeでヘッダファイルを読み込む構文です。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "int型の変数aを宣言し、12を代入します。",
          "int型の変数bを宣言し、10を代入します。",
          null,
          "printf関数でa | bのビット演算結果を表示します。",
          "フォーマット指定子に対応する値を渡します。",
          "プログラムの正常終了を示す値0を返します。",
          "関数のスコープを閉じます。"
        ],
        "candidates": {
          "operators": [
            "|",
            "&",
            "^"
          ],
          "others": ["include", "stdio.h", "int", "main", "a", "b", "12", "10", "printf", "%d\\n", "return", "0", "}", "%d"]
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
      "correctCode": "#include <stdio.h>\\n\\nint main() {\\n    int x = 3;\\n    // ビットを左に移動する演算子\\n    printf(\"%d\\n\", x << 2);  // 12\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\n___\\n___ ___() {\\n    ___ ___ = ___;\\n    // ビットを左に移動する演算子\\n    ___(\"___\\n\", ___ ___ ___);  // 12\\n    ___ ___;\\n___",
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
          "#includeでヘッダファイルを読み込む構文です。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "int型の変数xを宣言し、3を代入します。",
          null,
          "printf関数でx << 2の左シフト演算結果を表示します。",
          "フォーマット指定子に対応する値を渡します。",
          "プログラムの正常終了を示す値0を返します。",
          "関数のスコープを閉じます。"
        ],
        "candidates": {
          "operators": [
            "<<",
            ">>",
            "<"
          ],
          "others": ["include", "stdio.h", "int", "main", "x", "3", "2", "printf", "%d\\n", "return", "0", "}", "%d"]
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
      "correctCode": "#include <stdio.h>\\n\\nint main() {\\n    int arr[] = {10, 20, 30};\\n    // 型や変数のバイト数を取得する演算子\\n    int count = sizeof(arr) / sizeof(arr[0]);\\n    printf(\"%d\\n\", count);\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\n___\\n___ ___() {\\n    ___ ___[] = {___, ___, ___};\\n    // 型や変数のバイト数を取得する演算子\\n    ___ ___ = ___(___) / ___(___[___]);\\n    ___(\"___\\n\", ___);\\n    ___ ___;\\n___",
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
          "#includeでヘッダファイルを読み込む構文です。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "int型の配列arrを宣言し、10, 20, 30の3要素で初期化します。",
          null,
          "sizeof(arr)を配列の最初の要素sizeof(arr[0])で割り、要素数を計算します。",
          "printf関数でcount（要素数）を表示します。",
          "フォーマット指定子に対応する値を渡します。",
          "プログラムの正常終了を示す値0を返します。",
          "関数のスコープを閉じます。"
        ],
        "candidates": {
          "keywords": [
            "sizeof",
            "strlen",
            "length"
          ],
          "others": ["include", "stdio.h", "int", "main", "arr", "10", "20", "30", "count", "0", "printf", "%d\\n", "return", "}", "%d"]
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
      "correctCode": "#include <stdio.h>\\n\\n// int型にNumberという別名をつける\\ntypedef int Number;\\n\\nint main() {\\n    Number x = 100;\\n    printf(\"%d\\n\", x);\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\n___\\n// int型にNumberという別名をつける\\n___ ___ ___;\\n___\\n___ ___() {\\n    ___ ___ = ___;\\n    ___(\"___\\n\", ___);\\n    ___ ___;\\n___",
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
          "#includeでヘッダファイルを読み込む構文です。",
          null,
          null,
          "typedefキーワードでint型にNumberという別名をつけます。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "Number型の変数xを宣言し、100を代入します。",
          "printf関数でxの値を表示します。",
          "フォーマット指定子に対応する値を渡します。",
          "プログラムの正常終了を示す値0を返します。",
          "関数のスコープを閉じます。"
        ],
        "candidates": {
          "keywords": [
            "typedef",
            "define",
            "alias"
          ],
          "others": ["include", "stdio.h", "int", "Number", "main", "x", "100", "printf", "%d\\n", "return", "0", "}", "%d"]
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
      "correctCode": "#include <stdio.h>\\n\\n// ポインタの指す先を読み取り専用にする\\nvoid show(const int *p) {\\n    printf(\"%d\\n\", *p);\\n}\\n\\nint main() {\\n    int x = 42;\\n    show(&x);\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\n___\\n// ポインタの指す先を読み取り専用にする\\n___ ___(___ ___ *___) {\\n    ___(\"___\\n\", *___);\\n___\\n___\\n___ ___() {\\n    ___ ___ = ___;\\n    ___(&___);\\n    ___ ___;\\n___",
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
          "#includeでヘッダファイルを読み込む構文です。",
          null,
          null,
          "void型、関数名show、const修飾子付きのint型ポインタpを引数に取ります。",
          "printf関数でポインタpの指す値（*p）を表示します。",
          "フォーマット指定子に対応する値を渡します。",
          "関数のスコープを閉じます。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "int型の変数xを宣言し、42を代入します。",
          "show関数を呼び出し、xのアドレス（&x）を渡します。",
          "プログラムの正常終了を示す値0を返します。",
          "関数のスコープを閉じます。"
        ],
        "candidates": {
          "keywords": [
            "const",
            "static",
            "volatile"
          ],
          "others": ["include", "stdio.h", "void", "int", "show", "p", "main", "x", "42", "printf", "%d\\n", "return", "0", "}", "%d"]
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
      "correctCode": "#include <stdio.h>\\n\\nvoid counter() {\\n    // 呼び出し間で値を保持するstatic変数\\n    static int count = 0;\\n    count++;\\n    printf(\"%d\\n\", count);\\n}\\n\\nint main() {\\n    counter();\\n    counter();\\n    counter();\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\n___\\n___ ___() {\\n    // 呼び出し間で値を保持するstatic変数\\n    ___ ___ ___ = ___;\\n    ___++;\\n    ___(\"___\\n\", ___);\\n___\\n___\\n___ ___() {\\n    ___();\\n    ___();\\n    ___();\\n    ___ ___;\\n___",
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
          "#includeでヘッダファイルを読み込む構文です。",
          null,
          "void型の関数counterを定義します。",
          null,
          "staticキーワードでint型のcount変数を宣言し、0で初期化します。",
          "count変数をインクリメント（1増加）します。",
          "printf関数でcountの値を表示します。",
          "フォーマット指定子に対応する値を渡します。",
          "関数のスコープを閉じます。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "counter関数を呼び出します。",
          "counter関数を呼び出します。",
          "counter関数を呼び出します。",
          "プログラムの正常終了を示す値0を返します。",
          "関数のスコープを閉じます。"
        ],
        "candidates": {
          "keywords": [
            "static",
            "const",
            "extern"
          ],
          "others": ["include", "stdio.h", "void", "int", "counter", "count", "0", "main", "printf", "%d\\n", "return", "}", "%d"]
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
      "correctCode": "#include <stdio.h>\\n\\n// DOUBLEマクロを定義する\\n#define DOUBLE(x) ((x) * 2)\\n\\nint main() {\\n    printf(\"%d\\n\", DOUBLE(7));\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\n___\\n// DOUBLEマクロを定義する\\n#___ ___(___) ((___)  * ___)\\n___\\n___ ___() {\\n    ___(\"___\\n\", ___(___));\\n    ___ ___;\\n___",
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
          "#includeでヘッダファイルを読み込む構文です。",
          null,
          null,
          "#defineでDOUBLEマクロを定義し、引数xを2倍にする式を指定します。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "printf関数でDOUBLE(7)の結果を表示します。",
          "フォーマット指定子に対応する値を渡します。",
          "プログラムの正常終了を示す値0を返します。",
          "関数のスコープを閉じます。"
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
export const c4Data = {
  "language": "c",
  "lessonId": "c-4",
  "lessonTitle": "C言語 IV - ファイルI/Oと高度なデータ型",
  "lessonDescription": "C言語のファイル操作と高度なデータ型を学びます。実用的なプログラムを書くための必須スキルを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 4,
  "tutorialSlides": [
    { "title": "ファイルを開く", "content": "# fopen関数\\n\\n```c\\nFILE *fp = fopen(\\\"file.txt\\\", \\\"r\\\");\\nif (fp == NULL) {\\n    printf(\\\"Error!\\n\\\");\\n}\\n```\\n\\nモード: `\\\"r\\\"` 読み込み、`\\\"w\\\"` 書き込み、`\\\"a\\\"` 追記" },
    { "title": "ファイルの読み書き", "content": "# fprintf と fscanf\\n\\n```c\\n// 書き込み\\nfprintf(fp, \\\"Hello %d\\n\\\", 42);\\n\\n// 読み込み\\nchar buf[100];\\nfgets(buf, 100, fp);\\n```" },
    { "title": "ファイルを閉じる", "content": "# fclose関数\\n\\n```c\\nfclose(fp);\\n```\\n\\n使い終わったファイルは必ず閉じましょう！\\n\\n- バッファの内容がファイルに書き込まれる\\n- メモリが解放される\\n- 他のプログラムがファイルを使えるようになる" },
    { "title": "動的メモリ確保", "content": "# malloc と free\\n\\n```c\\nint *p = (int*)malloc(sizeof(int) * 10);\\nif (p != NULL) {\\n    // 配列として使用\\n    p[0] = 100;\\n    free(p);  // 使い終わったら解放\\n}\\n```\\n\\n`malloc`で確保したメモリは`free`で解放！" }
  ],
  "exercises": [
    {
      "title": "ファイルのオープン",
      "correctCode": "#include <stdio.h>\\n\\nint main() {\\n    // fpにfopen(\"test.txt\", \"w\")を代入\\n    FILE *fp = fopen(\"テスト.txt\", \"w\");\\n    if (fp != NULL) {\\n        fprintf(fp, \"Hello\\n\");\\n        fclose(fp);\\n        printf(\"Done\\n\");\\n    }\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\n___\\n___ ___() {\\n    // fpにfopen(\"test.txt\", \"w\")を代入\\n    ___ *___ = ___(\"___\", \"___\");\\n    if (___ != ___) {\\n        ___(___,  \"___\\n___\\n        ___(___);\\n        ___(\"___\\n___\\n    ___\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "",
          "int main() {",
          "    // fpにfopen(\"test.txt\", \"w\")を代入",
          "    FILE *fp = fopen(\"テスト.txt\", \"w\");",
          "    if (fp != NULL) {",
          "        fprintf(fp, \"Hello",
          "\");",
          "        fclose(fp);",
          "        printf(\"Done",
          "\");",
          "    }",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ライブラリstdio.hを読み込みます。",
          null,
          "戻り値型intでmain関数を定義します。",
          null,
          "FILE型ポインタfpにfopen関数でファイルを開いた結果を代入します。",
          "fpがNULLでないかif文で判定します。",
          "fprintf関数でfpに文字列を書き込みます。",
          "文字列の閉じクォートと括弧です。",
          "fclose関数でfpを閉じます。",
          "printf関数でDoneを表示します。",
          "文字列の閉じクォートと括弧です。",
          "if文のブロックを閉じる中括弧です。",
          "プログラムの正常終了を示す値0を返します。",
          "main関数のブロックを閉じる中括弧です。"
        ],
        "candidates": {
          "functions": [
            "fopen",
            "fclose",
            "fprintf",
            "printf"
          ],
          "others": ["include", "stdio.h", "", "int", "main", "FILE", "fp", "テスト.txt", "w", "NULL", "Hello", "\");", "Done", "}", "0", "ello"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Done\\n"
          }
        ]
      },
    {
      "title": "ファイルのクローズ",
      "correctCode": "#include <stdio.h>\\n\\nint main() {\\n    FILE *fp = fopen(\"データ.txt\", \"w\");\\n    if (fp != NULL) {\\n        fputs(\"Data\\n\", fp);\\n        // fclose(fp)でファイルを閉じる\\n        fclose(fp);\\n        printf(\"Closed\\n\");\\n    }\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\n___\\n___ ___() {\\n    ___ *___ = ___(\"___\", \"___\");\\n    if (___ != ___) {\\n        ___(\"___\\n___\\n        // fclose(fp)でファイルを閉じる\\n        ___(___);\\n        ___(\"___\\n___\\n    ___\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "",
          "int main() {",
          "    FILE *fp = fopen(\"データ.txt\", \"w\");",
          "    if (fp != NULL) {",
          "        fputs(\"Data",
          "\", fp);",
          "        // fclose(fp)でファイルを閉じる",
          "        fclose(fp);",
          "        printf(\"Closed",
          "\");",
          "    }",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ライブラリstdio.hを読み込みます。",
          null,
          "戻り値型intでmain関数を定義します。",
          "FILE型ポインタfpにfopen関数でファイルを開いた結果を代入します。",
          "fpがNULLでないかif文で判定します。",
          "fputs関数でfpに文字列を書き込みます。",
          "文字列の閉じクォートとfpを渡します。",
          null,
          "fclose関数でfpを閉じます。",
          "printf関数でClosedを表示します。",
          "文字列の閉じクォートと括弧です。",
          "if文のブロックを閉じる中括弧です。",
          "プログラムの正常終了を示す値0を返します。",
          "main関数のブロックを閉じる中括弧です。"
        ],
        "candidates": {
          "functions": [
            "fopen",
            "fclose",
            "fputs",
            "printf"
          ],
          "others": ["include", "stdio.h", "", "int", "main", "FILE", "fp", "データ.txt", "w", "NULL", "Data", "\", fp);", "Closed", "\");", "}", "0"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Closed\\n"
          }
        ]
      },
    {
      "title": "fprintf でファイル書き込み",
      "correctCode": "#include <stdio.h>\\n\\nint main() {\\n    FILE *fp = fopen(\"log.txt\", \"w\");\\n    if (fp != NULL) {\\n        // fpにフォーマット文字列と値100を書き込む\\n        fprintf(fp, \"Score: %d\\n\", 100);\\n        fclose(fp);\\n        printf(\"Written\\n\");\\n    }\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\n___\\n___ ___() {\\n    ___ *___ = ___(\"___\", \"___\");\\n    if (___ != ___) {\\n        // fpにフォーマット文字列と値100を書き込む\\n        ___(___,  \"___\\n___\\n        ___(___);\\n        ___(\"___\\n___\\n    ___\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "",
          "int main() {",
          "    FILE *fp = fopen(\"log.txt\", \"w\");",
          "    if (fp != NULL) {",
          "        // fpにフォーマット文字列と値100を書き込む",
          "        fprintf(fp, \"Score: %d",
          "\", 100);",
          "        fclose(fp);",
          "        printf(\"Written",
          "\");",
          "    }",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ライブラリstdio.hを読み込みます。",
          null,
          "戻り値型intでmain関数を定義します。",
          "FILE型ポインタfpにfopen関数でファイルを開いた結果を代入します。",
          "fpがNULLでないかif文で判定します。",
          null,
          "fprintf関数でfpにフォーマット文字列を書き込みます。",
          "フォーマット文字列の閉じと値100を渡します。",
          "fclose関数でfpを閉じます。",
          "printf関数でWrittenを表示します。",
          "文字列の閉じクォートと括弧です。",
          "if文のブロックを閉じる中括弧です。",
          "プログラムの正常終了を示す値0を返します。",
          "main関数のブロックを閉じる中括弧です。"
        ],
        "candidates": {
          "functions": [
            "fopen",
            "fclose",
            "fprintf",
            "printf"
          ],
          "others": ["include", "stdio.h", "", "int", "main", "FILE", "fp", "log.txt", "w", "NULL", "Score: %d", "\", 100);", "Written", "\");", "}", "0", "core: %d"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Written\\n"
          }
        ]
      },
    {
      "title": "fgets で行読み込み",
      "correctCode": "#include <stdio.h>\\n#include <string.h>\\n\\nint main() {\\n    char line[100];\\n    FILE *fp = fopen(\"テスト.txt\", \"w\");\\n    fprintf(fp, \"Hello World\\n\");\\n    fclose(fp);\\n    fp = fopen(\"テスト.txt\", \"r\");\\n    // fgets(line, sizeof(line), fp)で1行読み込む\\n    fgets(line, sizeof(line), fp);\\n    line[strcspn(line, \"\\n\")] = 0;\\n    printf(\"%s\\n\", line);\\n    fclose(fp);\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\n#___ <___>\\n___\\n___ ___() {\\n    ___ ___[___];\\n    ___ *___ = ___(\"___\", \"___\");\\n    ___(___,  \"___\\n___\\n    ___(___);\\n    ___ = ___(\"___\", \"___\");\\n    // fgets(line, sizeof(line), fp)で1行読み込む\\n    ___(___,  ___(___), ___);\\n    ___[___(___,  \"\\n___\\n    ___(\"___\\n___\\n    ___(___);\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "#include <string.h>",
          "",
          "int main() {",
          "    char line[100];",
          "    FILE *fp = fopen(\"テスト.txt\", \"w\");",
          "    fprintf(fp, \"Hello World",
          "\");",
          "    fclose(fp);",
          "    fp = fopen(\"テスト.txt\", \"r\");",
          "    // fgets(line, sizeof(line), fp)で1行読み込む",
          "    fgets(line, sizeof(line), fp);",
          "    line[strcspn(line, \"",
          "\")] = 0;",
          "    printf(\"%s",
          "\", line);",
          "    fclose(fp);",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ライブラリstdio.hを読み込みます。",
          "文字列操作ライブラリstring.hを読み込みます。",
          null,
          "戻り値型intでmain関数を定義します。",
          "char型配列lineをサイズ100で宣言します。",
          "FILE型ポインタfpにfopen関数でファイルを開いた結果を代入します。",
          "fprintf関数でfpに文字列を書き込みます。",
          "文字列の閉じクォートと括弧です。",
          "fclose関数でfpを閉じます。",
          "fpにfopen関数で読み込みモードでファイルを開いた結果を代入します。",
          null,
          "fgets関数でline配列にfpから1行読み込みます。",
          "strcspn関数で改行位置を取得し、その位置に0を代入します。",
          "改行文字を指定して閉じ括弧と代入です。",
          "printf関数でlineを表示します。",
          "フォーマット文字列の閉じとlineを渡します。",
          "fclose関数でfpを閉じます。",
          "プログラムの正常終了を示す値0を返します。",
          "main関数のブロックを閉じる中括弧です。"
        ],
        "candidates": {
          "functions": [
            "fopen",
            "fclose",
            "fprintf",
            "printf",
            "fgets",
            "strcspn",
            "sizeof"
          ],
          "others": ["include", "stdio.h", "string.h", "", "int", "main", "char", "line", "100", "FILE", "fp", "テスト.txt", "w", "Hello World", "\");", "r", "\")] = 0;", "%s", "\", line);", "0", "}", "ello World", "izeof"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello World\\n"
          }
        ]
      },
    {
      "title": "fseek でファイル位置移動",
      "correctCode": "#include <stdio.h>\\n\\nint main() {\\n    FILE *fp = fopen(\"pos.txt\", \"w+\");\\n    fputs(\"ABCDEFGHIJ\", fp);\\n    // fseek(fp, 0, SEEK_SET)で先頭に移動\\n    fseek(fp, 0, SEEK_SET);\\n    printf(\"%c\\n\", fgetc(fp));\\n    fclose(fp);\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\n___\\n___ ___() {\\n    ___ *___ = ___(\"___\", \"___\");\\n    ___(\"___\", ___);\\n    // fseek(fp, 0, SEEK_SET)で先頭に移動\\n    ___(___,  ___,  ___);\\n    ___(\"___\\n___\\n    ___(___);\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "",
          "int main() {",
          "    FILE *fp = fopen(\"pos.txt\", \"w+\");",
          "    fputs(\"ABCDEFGHIJ\", fp);",
          "    // fseek(fp, 0, SEEK_SET)で先頭に移動",
          "    fseek(fp, 0, SEEK_SET);",
          "    printf(\"%c",
          "\", fgetc(fp));",
          "    fclose(fp);",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ライブラリstdio.hを読み込みます。",
          null,
          "戻り値型intでmain関数を定義します。",
          "FILE型ポインタfpにfopen関数でファイルを開いた結果を代入します。",
          "fputs関数でfpに文字列ABCDEFGHIJを書き込みます。",
          null,
          "fseek関数でfpの位置をオフセット0、SEEK_SETで先頭に移動します。",
          "printf関数で%cフォーマットで1文字表示します。",
          "fgetc関数でfpから1文字読み込んで渡します。",
          "fclose関数でfpを閉じます。",
          "プログラムの正常終了を示す値0を返します。",
          "main関数のブロックを閉じる中括弧です。"
        ],
        "candidates": {
          "functions": [
            "fopen",
            "fclose",
            "fputs",
            "fseek",
            "fgetc",
            "printf"
          ],
          "others": ["include", "stdio.h", "", "int", "main", "FILE", "fp", "pos.txt", "w+", "ABCDEFGHIJ", "0", "SEEK_SET", "%c", "\", fgetc(fp));", "}", "EEK_SET"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "A\\n"
          }
        ]
      },
    {
      "title": "ftell で現在位置取得",
      "correctCode": "#include <stdio.h>\\n\\nint main() {\\n    FILE *fp = fopen(\"size.txt\", \"w+\");\\n    fputs(\"12345\", fp);\\n    fseek(fp, 0, SEEK_END);\\n    // sizeにftell(fp)を代入\\n    long size = ftell(fp);\\n    printf(\"%ld\\n\", size);\\n    fclose(fp);\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\n___\\n___ ___() {\\n    ___ *___ = ___(\"___\", \"___\");\\n    ___(\"___\", ___);\\n    ___(___,  ___,  ___);\\n    // sizeにftell(fp)を代入\\n    ___ ___ = ___(___);\\n    ___(\"___\\n___\\n    ___(___);\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "",
          "int main() {",
          "    FILE *fp = fopen(\"size.txt\", \"w+\");",
          "    fputs(\"12345\", fp);",
          "    fseek(fp, 0, SEEK_END);",
          "    // sizeにftell(fp)を代入",
          "    long size = ftell(fp);",
          "    printf(\"%ld",
          "\", size);",
          "    fclose(fp);",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ライブラリstdio.hを読み込みます。",
          null,
          "戻り値型intでmain関数を定義します。",
          "FILE型ポインタfpにfopen関数でファイルを開いた結果を代入します。",
          "fputs関数でfpに文字列12345を書き込みます。",
          "fseek関数でfpの位置をオフセット0、SEEK_ENDで末尾に移動します。",
          null,
          "long型変数sizeにftell関数でfpの現在位置を代入します。",
          "printf関数で%ldフォーマットでsizeを表示します。",
          "フォーマット文字列の閉じとsizeを渡します。",
          "fclose関数でfpを閉じます。",
          "プログラムの正常終了を示す値0を返します。",
          "main関数のブロックを閉じる中括弧です。"
        ],
        "candidates": {
          "functions": [
            "fopen",
            "fclose",
            "fputs",
            "fseek",
            "ftell",
            "printf"
          ],
          "others": ["include", "stdio.h", "", "int", "main", "FILE", "fp", "size.txt", "w+", "12345", "0", "SEEK_END", "long", "size", "%ld", "\", size);", "}", "EEK_END"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "5\\n"
          }
        ]
      },
    {
      "title": "enum 列挙型",
      "correctCode": "#include <stdio.h>\\n\\n// Day列挙型を定義\\nenum Day { MON, TUE, WED, THU, FRI };\\n\\nint main() {\\n    enum Day today = WED;\\n    printf(\"%d\\n\", today);\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\n___\\n// Day列挙型を定義\\nenum ___ { ___,  ___,  ___,  ___,  ___ };\\n___\\n___ ___() {\\n    enum ___ ___ = ___;\\n    ___(\"___\\n___\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "",
          "// Day列挙型を定義",
          "enum Day { MON, TUE, WED, THU, FRI };",
          "",
          "int main() {",
          "    enum Day today = WED;",
          "    printf(\"%d",
          "\", today);",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ライブラリstdio.hを読み込みます。",
          null,
          null,
          "enum Day型を定義し、MON〜FRIの列挙値を宣言します。",
          null,
          "戻り値型intでmain関数を定義します。",
          "enum Day型変数todayにWEDを代入します。",
          "printf関数で%dフォーマットでtodayを表示します。",
          "フォーマット文字列の閉じとtodayを渡します。",
          "プログラムの正常終了を示す値0を返します。",
          "main関数のブロックを閉じる中括弧です。"
        ],
        "candidates": {
          "keywords": [
            "enum"
          ],
          "others": ["include", "stdio.h", "", "Day", "MON", "TUE", "WED", "THU", "FRI", "int", "main", "today", "%d", "\", today);", "0", "}", "UE", "ED", "HU", "RI", "printf"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "2\\n"
          }
        ]
      },
    {
      "title": "union 共用体",
      "correctCode": "#include <stdio.h>\\n\\n// Value共用体を定義\\nunion Value {\\n    int i;\\n    double d;\\n};\\n\\nint main() {\\n    union Value v;\\n    v.i = 42;\\n    printf(\"%d\\n\", v.i);\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\n___\\n// Value共用体を定義\\nunion ___ {\\n    ___ ___;\\n    ___ ___;\\n___\\n___\\n___ ___() {\\n    union ___ ___;\\n    ___.___  = ___;\\n    ___(\"___\\n___\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "",
          "// Value共用体を定義",
          "union Value {",
          "    int i;",
          "    double d;",
          "};",
          "",
          "int main() {",
          "    union Value v;",
          "    v.i = 42;",
          "    printf(\"%d",
          "\", v.i);",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ライブラリstdio.hを読み込みます。",
          null,
          null,
          "union Value型を定義します。",
          "int型メンバiを宣言します。",
          "double型メンバdを宣言します。",
          "共用体定義を閉じるセミコロン付き中括弧です。",
          null,
          "戻り値型intでmain関数を定義します。",
          "union Value型変数vを宣言します。",
          "v.iに42を代入します。",
          "printf関数で%dフォーマットでv.iを表示します。",
          "フォーマット文字列の閉じとv.iを渡します。",
          "プログラムの正常終了を示す値0を返します。",
          "main関数のブロックを閉じる中括弧です。"
        ],
        "candidates": {
          "keywords": [
            "union"
          ],
          "others": ["include", "stdio.h", "", "Value", "int", "i", "double", "d", "};", "main", "v", "42", "printf", "%d", "\", v.i);", "0", "}", "2"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "42\\n"
          }
        ]
      },
    {
      "title": "ポインタのポインタ",
      "correctCode": "#include <stdio.h>\\n\\nint main() {\\n    int x = 100;\\n    int *p = &x;\\n    // ** で二重ポインタを宣言\\n    int **pp = &p;\\n    printf(\"%d\\n\", **pp);\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\n___\\n___ ___() {\\n    ___ ___ = ___;\\n    ___ *___ = &___;\\n    // ** で二重ポインタを宣言\\n    ___ **___ = &___;\\n    ___(\"___\\n___\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "",
          "int main() {",
          "    int x = 100;",
          "    int *p = &x;",
          "    // ** で二重ポインタを宣言",
          "    int **pp = &p;",
          "    printf(\"%d",
          "\", **pp);",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ライブラリstdio.hを読み込みます。",
          null,
          "戻り値型intでmain関数を定義します。",
          "int型変数xに100を代入します。",
          "int型ポインタpにxのアドレスを代入します。",
          null,
          "int型二重ポインタppにpのアドレスを代入します。",
          "printf関数で%dフォーマットで**ppを表示します。",
          "フォーマット文字列の閉じと**ppを渡します。",
          "プログラムの正常終了を示す値0を返します。",
          "main関数のブロックを閉じる中括弧です。"
        ],
        "candidates": {
          "others": ["include", "stdio.h", "", "int", "main", "x", "100", "p", "pp", "printf", "%d", "\", **pp);", "0", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "100\\n"
          }
        ]
      },
    {
      "title": "可変長引数",
      "correctCode": "#include <stdio.h>\\n#include <stdarg.h>\\n\\nint sum(int count, ...) {\\n    va_list args;\\n    // va_start で可変長引数を初期化\\n    va_start(args, count);\\n    int total = 0;\\n    for (int i = 0; i < count; i++) {\\n        total += va_arg(args, int);\\n    }\\n    va_end(args);\\n    return total;\\n}\\n\\nint main() {\\n    printf(\"%d\\n\", sum(3, 10, 20, 30));\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\n#___ <___>\\n___\\n___ ___(___  ___,  ...) {\\n    ___ ___;\\n    // va_start で可変長引数を初期化\\n    ___(___,  ___);\\n    ___ ___ = ___;\\n    for (___ ___ = ___; ___ < ___; ___++) {\\n        ___ += ___(___,  ___);\\n    ___\\n    ___(___);\\n    return ___;\\n___\\n___\\n___ ___() {\\n    ___(\"___\\n___\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "#include <stdarg.h>",
          "",
          "int sum(int count, ...) {",
          "    va_list args;",
          "    // va_start で可変長引数を初期化",
          "    va_start(args, count);",
          "    int total = 0;",
          "    for (int i = 0; i < count; i++) {",
          "        total += va_arg(args, int);",
          "    }",
          "    va_end(args);",
          "    return total;",
          "}",
          "",
          "int main() {",
          "    printf(\"%d",
          "\", sum(3, 10, 20, 30));",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ライブラリstdio.hを読み込みます。",
          "可変長引数ライブラリstdarg.hを読み込みます。",
          null,
          "int型を返すsum関数をint型引数countと可変長引数で定義します。",
          "va_list型変数argsを宣言します。",
          null,
          "va_startマクロでargsとcountで可変長引数を初期化します。",
          "int型変数totalを0で初期化します。",
          "int型変数iを0から、iがcount未満の間、i++でループします。",
          "totalにva_argマクロでargsからint型の値を取得して加算します。",
          "forループを閉じる中括弧です。",
          "va_endマクロでargsを終了します。",
          "変数totalを呼び出し元に返します。",
          "sum関数を閉じる中括弧です。",
          null,
          "戻り値型intでmain関数を定義します。",
          "printf関数で%dフォーマットでsum関数の結果を表示します。",
          "sum関数を引数3, 10, 20, 30で呼び出します。",
          "プログラムの正常終了を示す値0を返します。",
          "main関数のブロックを閉じる中括弧です。"
        ],
        "candidates": {
          "macros": [
            "va_start",
            "va_arg",
            "va_end"
          ],
          "others": ["include", "stdio.h", "stdarg.h", "", "int", "sum", "count", "va_list", "args", "total", "0", "i", "}", "main", "printf", "%d", "\", sum(3, 10, 20, 30));", "ount", "nt"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "60\\n"
          }
        ]
      }
  ]
}

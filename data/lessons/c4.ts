export const c4Data = {
  "language": "c",
  "lessonId": "c-4",
  "lessonTitle": "C言語 IV - ファイルI/Oと高度なデータ型",
  "lessonDescription": "C言語のファイル操作と高度なデータ型を学びます。実用的なプログラムを書くための必須スキルを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 4,
  "exercises": [
    {
      "title": "ファイルのオープン",
      "correctCode": "#include <stdio.h>\\n\\nint main() {\\n    // fpにfopen(\"test.txt\", \"w\")を代入\\n    FILE *fp = fopen(\"テスト.txt\", \"w\");\\n    if (fp != NULL) {\\n        fprintf(fp, \"Hello\\n\");\\n        fclose(fp);\\n        printf(\"Done\\n\");\\n    }\\n    return 0;\\n}",
      "holeyCode": "#include <___>\\n___\\nint ___() {\\n    // fpにfopen(\"test.txt\", \"w\")を代入\\n    FILE *fp = fopen(\"___\", \"w\");\\n    if (fp != ___) {\\n        f___(fp, \"Hello\\n___\\n        fclose(___);\\n        ___(\"Done\\n___\\n    ___\\n    return ___;\\n___",
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
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "fopen",
            "open",
            "fread"
          ],
          "others": ["main", "test.txt", "NULL", "fp", "}", "0", "テスト.txt", "stdio.h", "printf", "\");", "", "\");", "}"]
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
      "holeyCode": "#include <___>\\n___\\nint ___() {\\n    ___ *fp = fopen(\"___\", \"w\");\\n    if (fp != ___) {\\n        ___\\n___\\n        // fclose(fp)でファイルを閉じる\\n        fclose(___);\\n        ___(\"Closed\\n___\\n    ___\\n    return ___;\\n___",
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
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "fclose",
            "close",
            "fend"
          ],
          "others": ["main", "data.txt", "NULL", "fp", "}", "0", "データ.txt", "stdio.h", "FILE", "fputs(\"Data", " fp);", "printf", "\");", "", "fputs(\"Data", " fp);", "\");", "}", " fp);", "\", fp);"]
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
      "correctCode": "#include <stdio.h>\\n\\nint main() {\\n    FILE *fp = fopen(\"log.txt\", \"w\");\\n    if (fp != NULL) {\\n        // fprintf(fp, \"Score: %d\\n\", 100)で書き込む\\n        fprintf(fp, \"Score: %d\\n\", 100);\\n        fclose(fp);\\n        printf(\"Written\\n\");\\n    }\\n    return 0;\\n}",
      "holeyCode": "#include <___>\\n___\\nint ___() {\\n    ___ *fp = fopen(\"___\", \"w\");\\n    if (fp != ___) {\\n        // fprintf(fp, \"Score: %d\\n___\\n        f___(fp, \"Score: %d\\n___\\n        fclose(___);\\n        ___(\"Written\\n___\\n    ___\\n    return ___;\\n___",
      "correctLines": [
          "#include <stdio.h>",
          "",
          "int main() {",
          "    FILE *fp = fopen(\"log.txt\", \"w\");",
          "    if (fp != NULL) {",
          "        // fprintf(fp, \"Score: %d",
          "\", 100)で書き込む",
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
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "この行を正しく入力してください。",
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "fprintf",
            "printf",
            "sprintf"
          ],
          "others": ["main", "log.txt", "NULL", "fp", "}", "0", "\"Written", "return 0;", "stdio.h", "FILE", "", " 100)で書き込む", " 100);", "\");", "}", " 100)で書き込む", " 100);", "\", 100)で書き込む", "\", 100);"]
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
      "holeyCode": "___\\n___\\n___\\nint ___() {\\n    char line[___];\\n    ___ *fp = fopen(\"___\", \"w\");\\n    f___(fp, \"Hello World\\n___\\n    fclose(___);\\n    fp = fopen(\"___\", \"r\");\\n    // fgets(line, sizeof(line), fp)で1行読み込む\\n    fgets(line, sizeof(line), ___);\\n    ___\\n___\\n    ___(\"%s\\n___\\n    fclose(___);\\n    return ___;\\n___",
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
          "この行を正しく入力してください。",
          "文字列操作用ライブラリを読み込みます。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          "プログラムの正常終了を示す0を返します。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "fgets",
            "gets",
            "fread"
          ],
          "others": ["main", "100", "テスト.txt", "fp", "0;", "pen(\"テスト.txt\", \"r\")", "e, sizeof(line), fp)で1行読み込む", "string.h", "FILE", "#include <stdio.h>", "#include <string.h>", "", "printf", "\");", "line[strcspn(line, \"\\n\")] = 0;", "\", line);", "0", "}", "\");", "line[strcspn(line, \"", "\")] = 0;"]
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
      "holeyCode": "#include <___>\\n___\\nint ___() {\\n    ___ *fp = fopen(\"___\", \"w+\");\\n    fputs(\"___\", fp);\\n    // fseek(fp, 0, SEEK_SET)で先頭に移動\\n    fseek(fp, ___, SEEK_SET);\\n    ___(\"%c\\n___\\n    fclose(___);\\n    return ___;\\n___",
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
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "fseek",
            "seek",
            "ftell"
          ],
          "others": ["main", "pos.txt", "ABCDEFGHIJ", "0", "fp", "}", "stdio.h", "FILE", "printf", " fgetc(fp));", "", " fgetc(fp));", " fgetc(fp));", "\", fgetc(fp));"]
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
      "holeyCode": "#include <___>\\n___\\nint ___() {\\n    ___ *fp = fopen(\"___\", \"w+\");\\n    fputs(\"___\", fp);\\n    fseek(fp, ___, SEEK_END);\\n    // sizeにftell(fp)を代入\\n    long size = ftell(___);\\n    ___(\"%ld\\n___\\n    fclose(___);\\n    return ___;\\n___",
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
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "ftell",
            "fpos",
            "fseek"
          ],
          "others": ["main", "size.txt", "12345", "0", "fp", "}", "stdio.h", "FILE", "printf", " size);", "", " size);", " size);", "\", size);"]
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
      "holeyCode": "#include <___>\\n___\\n// Day列挙型を定義\\nenum Day { MON, TUE, WED, THU, ___ };\\n___\\nint ___() {\\n    enum Day today = ___;\\n    ___(\"%d\\n___\\n    return ___;\\n___",
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
            "enum",
            "struct",
            "typedef"
          ],
          "others": ["FRI", "main", "WED", "stdio.h", "printf", "", " today);", "0", "}", " today);", "\", today);"]
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
      "holeyCode": "#include <___>\\n___\\n// Value共用体を定義\\nunion ___ {\\n    int ___;\\n    double ___;\\n___\\n___\\nint ___() {\\n    union Value ___;\\n    v.i = ___;\\n    ___(\"%d\\n___\\n    return ___;\\n___",
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
          "標準入出力ライブラリを読み込みます。",
          null,
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "union",
            "struct",
            "enum"
          ],
          "others": ["Value", "i", "d", "};", "main", "v", "42", "stdio.h", "printf", "", "};", " v.i);", "0", "}", " v.i);", "\", v.i);"]
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
      "holeyCode": "#include <___>\\n___\\nint ___() {\\n    int x = ___;\\n    int *p = &___;\\n    // ** で二重ポインタを宣言\\n    int **pp = &___;\\n    ___(\"%d\\n___\\n    return ___;\\n___",
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
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "整数型の変数を宣言し、初期値を代入します。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "**",
            "*",
            "&"
          ],
          "others": ["main", "100", "x", "p", "stdio.h", "printf", "", " **pp);", "0", "}", " **pp);", "\", **pp);"]
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
      "holeyCode": "#include <___>\\n#include <___>\\n___\\nint sum(int ___, ...) {\\n    va_list ___;\\n    // va_start で可変長引数を初期化\\n    va_start(args, ___);\\n    int total = ___;\\n    for (int i = ___; i < count; i++) {\\n        total += va_arg(args, ___);\\n    ___\\n    va_end(___);\\n    return ___;\\n___\\n___\\nint ___() {\\n    ___(\"%d\\n___\\n    return ___;\\n___",
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
          "標準入出力ライブラリを読み込みます。",
          "可変長引数を扱うライブラリを読み込みます。",
          null,
          "int型の値を返す関数（sum）を定義します。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "整数型の変数を宣言し、初期値を代入します。",
          "繰り返し処理（ループ）を開始する。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "変数の値を呼び出し元に返す（戻り値）。",
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "macros": [
            "va_start",
            "va_arg",
            "va_end"
          ],
          "others": ["count", "args", "0", "int", "}", "total", "main", "stdio.h", "stdarg.h", "printf", "", "}", " sum(3, 10, 20, 30));", " sum(3, 10, 20, 30));", "\", sum(3, 10, 20, 30));"]
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
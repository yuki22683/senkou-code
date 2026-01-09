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
      "description": "fopen関数でファイルを開きましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "fopen とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# ファイルを開く\n\n**fopen** は、ファイルを開いてFILEポインタを返します。\n\n```c\nFILE *fp = fopen(\"file.txt\", \"r\");\nif (fp == NULL) {\n    printf(\"Error!\\n\");\n}\n```"
        },
        {
          "title": "モードの種類",
          "image": "/illustrations/3d/robot.png",
          "content": "# オープンモード\n\n```c\n\"r\"  // 読み込み\n\"w\"  // 書き込み（上書き）\n\"a\"  // 追記\n\"rb\" // バイナリ読み込み\n\"wb\" // バイナリ書き込み\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen(\"test.txt\", \"w\");\n    if (fp != NULL) {\n        fprintf(fp, \"Hello\\n\");\n        fclose(fp);\n        printf(\"Done\\n\");\n    }\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\\n\\n___\\n    // fopen と入力して、ファイルを開いてね\\n    ___\\n    ___\\n        ___\\n        ___\\n        ___\\n    ___\\n    ___\\n___"test.txt\", \"w\");\n    if (fp != NULL) {\n        fprintf(fp, \"Hello\\n\");\n        fclose(fp);\n        printf(\"Done\\n\");\n    }\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "",
        "int main() {",
        "    // fopen と入力して、ファイルを開いてね",
        "    FILE *fp = fopen("test.txt", "w");",
        "    if (fp != NULL) {",
        "        fprintf(fp, "Hello\\\n");",
        "        fclose(fp);",
        "        printf("Done\\\n");",
        "    }",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "fopen でファイルを開きます。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "functions": ["fopen", "open", "fread"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Done\n"
        }
      ]
    },
    {
      "title": "ファイルのクローズ",
      "description": "fclose関数でファイルを閉じましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "fclose とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# ファイルを閉じる\n\n**fclose** は、開いたファイルを閉じてリソースを解放します。\n\n```c\nFILE *fp = fopen(\"file.txt\", \"r\");\n// 処理...\nfclose(fp);\n```"
        },
        {
          "title": "重要性",
          "image": "/illustrations/3d/robot.png",
          "content": "# 必ず閉じる\n\n- バッファの内容がファイルに書き込まれる\n- システムリソースが解放される\n- 他のプログラムがアクセスできるようになる"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen(\"data.txt\", \"w\");\n    if (fp != NULL) {\n        fputs(\"Data\\n\", fp);\n        fclose(fp);\n        printf(\"Closed\\n\");\n    }\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\\n\\n___\\n    ___\\n    ___\\n        ___\\n        // fclose と入力して、ファイルを閉じてね\\n        ___\\n        ___\\n    ___\\n    ___\\n___"data.txt\", \"w\");\n    if (fp != NULL) {\n        fputs(\"Data\\n\", fp);\n        // ここに fclose と入力して、ファイルを閉じてね\n        ___(fp);\n        printf(\"Closed\\n\");\n    }\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "",
        "int main() {",
        "    FILE *fp = fopen("data.txt", "w");",
        "    if (fp != NULL) {",
        "        fputs("Data\\\n", fp);",
        "        // fclose と入力して、ファイルを閉じてね",
        "        fclose(fp);",
        "        printf("Closed\\\n");",
        "    }",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        "fclose でファイルを閉じます。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "functions": ["fclose", "close", "fend"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Closed\n"
        }
      ]
    },
    {
      "title": "fprintf でファイル書き込み",
      "description": "フォーマット付きでファイルに書き込みましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "fprintf とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# フォーマット付き出力\n\n**fprintf** は、printf のファイル版です。\n\n```c\nFILE *fp = fopen(\"out.txt\", \"w\");\nfprintf(fp, \"Name: %s, Age: %d\\n\", \"Alice\", 25);\n```"
        },
        {
          "title": "printf との違い",
          "image": "/illustrations/3d/robot.png",
          "content": "# 出力先の指定\n\n```c\nprintf(\"Hello\\n\");         // 標準出力\nfprintf(fp, \"Hello\\n\");    // ファイル\nfprintf(stderr, \"Error\\n\"); // 標準エラー\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen(\"log.txt\", \"w\");\n    if (fp != NULL) {\n        fprintf(fp, \"Score: %d\\n\", 100);\n        fclose(fp);\n        printf(\"Written\\n\");\n    }\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\\n\\n___\\n    ___\\n    ___\\n        // fprintf と入力してファイルに書き込んでね\\n        ___\\n        ___\\n        ___\\n    ___\\n    ___\\n___"log.txt\", \"w\");\n    if (fp != NULL) {\n        // ここに fprintf と入力してファイルに書き込んでね\n        ___(fp, \"Score: %d\\n\", 100);\n        fclose(fp);\n        printf(\"Written\\n\");\n    }\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "",
        "int main() {",
        "    FILE *fp = fopen("log.txt", "w");",
        "    if (fp != NULL) {",
        "        // fprintf と入力してファイルに書き込んでね",
        "        fprintf(fp, "Score: %d\\\n", 100);",
        "        fclose(fp);",
        "        printf("Written\\\n");",
        "    }",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "fprintf でファイルに書き込みます。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "functions": ["fprintf", "printf", "sprintf"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Written\n"
        }
      ]
    },
    {
      "title": "fgets で行読み込み",
      "description": "ファイルから1行ずつ読み込みましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "fgets とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 1行読み込み\n\n**fgets** は、改行までの文字列を読み込みます。\n\n```c\nchar buf[256];\nfgets(buf, 256, fp);\n// buf に1行分が格納される\n```"
        },
        {
          "title": "安全な読み込み",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# バッファオーバーフロー防止\n\n```c\nchar buf[100];\n// 最大99文字 + '\\0'\nfgets(buf, sizeof(buf), fp);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char line[100];\n    FILE *fp = fopen(\"test.txt\", \"w\");\n    fprintf(fp, \"Hello World\\n\");\n    fclose(fp);\n    fp = fopen(\"test.txt\", \"r\");\n    fgets(line, sizeof(line), fp);\n    line[strcspn(line, \"\\n\")] = 0;\n    printf(\"%s\\n\", line);\n    fclose(fp);\n    return 0;\n}",
      "holeyCode": "___"test.txt\", \"w\");\n    fprintf(fp, \"Hello World\\n\");\n    fclose(fp);\n    fp = fopen(\"test.txt\", \"r\");\n    // ここに fgets と入力して、1行読み込んでね\n    ___(line, sizeof(line), fp);\n    line[strcspn(line, \"\\n\")] = 0;\n    printf(\"%s\\n\", line);\n    fclose(fp);\n    return 0;\n}",
      "correctLines": [
        ""#include <stdio.h>",\n        "#include <string.h>",\n        "",\n        "int main() {",\n        "    char line[100"
      ];",
        "    FILE *fp = fopen(\"test.txt\", \"w\");",
        "    fprintf(fp, \"Hello World\\n\");",
        "    fclose(fp);",
        "    fp = fopen(\"test.txt\", \"r\");",
        "    // ここに fgets と入力して、1行読み込んでね",
        "    fgets(line, sizeof(line), fp);",
        "    line[strcspn(line, \"\\n\")] = 0;",
        "    printf(\"%s\\n\", line);",
        "    fclose(fp);",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "fgets で1行読み込みます。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "functions": ["fgets", "gets", "fread"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello World\n"
        }
      ]
    },
    {
      "title": "fseek でファイル位置移動",
      "description": "ファイル内の読み書き位置を移動しましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "fseek とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# ファイル位置を移動\n\n**fseek** は、ファイルの読み書き位置を移動します。\n\n```c\nfseek(fp, 10, SEEK_SET);  // 先頭から10バイト\nfseek(fp, -5, SEEK_CUR);  // 現在から-5バイト\nfseek(fp, 0, SEEK_END);   // 末尾へ\n```"
        },
        {
          "title": "基準位置",
          "image": "/illustrations/3d/robot.png",
          "content": "# SEEK定数\n\n```c\nSEEK_SET  // ファイル先頭\nSEEK_CUR  // 現在位置\nSEEK_END  // ファイル末尾\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen(\"pos.txt\", \"w+\");\n    fputs(\"ABCDEFGHIJ\", fp);\n    fseek(fp, 0, SEEK_SET);\n    printf(\"%c\\n\", fgetc(fp));\n    fclose(fp);\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\\n\\n___\\n    ___\\n    ___\\n    // fseek と入力して、読み書きする場所を動かしましょう\\n    ___\\n    ___\\n    ___\\n    ___\\n___"pos.txt\", \"w+\");\n    fputs(\"ABCDEFGHIJ\", fp);\n    // ここに fseek と入力して、読み書きする場所を動かしてね\n    ___(fp, 0, SEEK_SET);\n    printf(\"%c\\n\", fgetc(fp));\n    fclose(fp);\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "",
        "int main() {",
        "    FILE *fp = fopen("pos.txt", "w+");",
        "    fputs("ABCDEFGHIJ", fp);",
        "    // fseek と入力して、読み書きする場所を動かしましょう",
        "    fseek(fp, 0, SEEK_SET);",
        "    printf("%c\\\n", fgetc(fp));",
        "    fclose(fp);",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "fseek でファイル位置を移動します。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "functions": ["fseek", "seek", "ftell"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "A\n"
        }
      ]
    },
    {
      "title": "ftell で現在位置取得",
      "description": "ファイルの現在位置を取得しましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "ftell とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 現在位置を取得\n\n**ftell** は、ファイルの現在位置をバイト数で返します。\n\n```c\nlong pos = ftell(fp);\nprintf(\"Position: %ld\\n\", pos);\n```"
        },
        {
          "title": "ファイルサイズの取得",
          "image": "/illustrations/3d/robot.png",
          "content": "# サイズを調べる\n\n```c\nfseek(fp, 0, SEEK_END);\nlong size = ftell(fp);\nfseek(fp, 0, SEEK_SET);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen(\"size.txt\", \"w+\");\n    fputs(\"12345\", fp);\n    fseek(fp, 0, SEEK_END);\n    long size = ftell(fp);\n    printf(\"%ld\\n\", size);\n    fclose(fp);\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\\n\\n___\\n    ___\\n    ___\\n    ___\\n    // ftell と入力して、今の場所（バイト数）を教えてね\\n    ___\\n    ___\\n    ___\\n    ___\\n___"size.txt\", \"w+\");\n    fputs(\"12345\", fp);\n    fseek(fp, 0, SEEK_END);\n    // ここに ftell と入力して、今の場所（バイト数）を教えてね\n    long size = ___(fp);\n    printf(\"%ld\\n\", size);\n    fclose(fp);\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "",
        "int main() {",
        "    FILE *fp = fopen("size.txt", "w+");",
        "    fputs("12345", fp);",
        "    fseek(fp, 0, SEEK_END);",
        "    // ftell と入力して、今の場所（バイト数）を教えてね",
        "    long size = ftell(fp);",
        "    printf("%ld\\\n", size);",
        "    fclose(fp);",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        "ftell で現在位置を取得します。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "functions": ["ftell", "fpos", "fseek"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "5\n"
        }
      ]
    },
    {
      "title": "enum 列挙型",
      "description": "名前付き定数の集合を定義しましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "enum とは？",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 名前付き定数\n\n**enum** は、関連する定数に名前をつけます。\n\n```c\nenum Color { RED, GREEN, BLUE };\nenum Color c = GREEN;  // c = 1\n```"
        },
        {
          "title": "値の指定",
          "image": "/illustrations/3d/robot.png",
          "content": "# 明示的な値\n\n```c\nenum Status {\n    OK = 200,\n    NOT_FOUND = 404,\n    ERROR = 500\n};\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\n\nenum Day { MON, TUE, WED, THU, FRI };\n\nint main() {\n    enum Day today = WED;\n    printf(\"%d\\n\", today);\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\\n\\n___\\n\\n___\\n    ___\\n    ___\\n    ___\\n___"%d\\n\", today);\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "",
        "enum Day { MON, TUE, WED, THU, FRI };",
        "",
        "int main() {",
        "    enum Day today = WED;",
        "    printf("%d\\\n", today);",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "enum で列挙型を定義します。",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["enum", "struct", "typedef"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "2\n"
        }
      ]
    },
    {
      "title": "union 共用体",
      "description": "同じメモリを共有するunionを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "union とは？",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# メモリを共有\n\n**union** は、複数のメンバが同じメモリを共有します。\n\n```c\nunion Data {\n    int i;\n    float f;\n    char c;\n};\n// サイズは最大のメンバと同じ\n```"
        },
        {
          "title": "使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# 一度に1つだけ有効\n\n```c\nunion Data d;\nd.i = 10;\nprintf(\"%d\\n\", d.i);\nd.f = 3.14;  // i の値は失われる\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\n\nunion Value {\n    int i;\n    double d;\n};\n\nint main() {\n    union Value v;\n    v.i = 42;\n    printf(\"%d\\n\", v.i);\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\\n\\n___\\n    ___\\n    ___\\n___\\n\\n___\\n    ___\\n    ___\\n    ___\\n    ___\\n___"%d\\n\", v.i);\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "",
        "union Value {",
        "    int i;",
        "    double d;",
        "};",
        "",
        "int main() {",
        "    union Value v;",
        "    v.i = 42;",
        "    printf("%d\\\n", v.i);",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "union で共用体を定義します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["union", "struct", "enum"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "42\n"
        }
      ]
    },
    {
      "title": "ポインタのポインタ",
      "description": "二重ポインタを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "ポインタのポインタ",
          "image": "/illustrations/3d_advanced/pointer_arrow.png",
          "content": "# ポインタを指すポインタ\n\n**二重ポインタ** は、ポインタ変数のアドレスを格納します。\n\n```c\nint x = 10;\nint *p = &x;\nint **pp = &p;\n```"
        },
        {
          "title": "使いどころ",
          "image": "/illustrations/3d/robot.png",
          "content": "# 関数でポインタを変更\n\n```c\nvoid allocate(int **pp) {\n    *pp = malloc(sizeof(int));\n}\n\nint *p;\nallocate(&p);  // p にメモリを割り当て\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\n\nint main() {\n    int x = 100;\n    int *p = &x;\n    int **pp = &p;\n    printf(\"%d\\n\", **pp);\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\\n\\n___\\n    ___\\n    ___\\n    ___\\n    ___\\n    ___\\n___"%d\\n\", **pp);\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "",
        "int main() {",
        "    int x = 100;",
        "    int *p = &x;",
        "    int **pp = &p;",
        "    printf("%d\\\n", **pp);",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "** で二重ポインタを宣言します。",
        null,
        null,
        null
      ],
      "candidates": {
        "operators": ["**", "*", "&"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "100\n"
        }
      ]
    },
    {
      "title": "可変長引数",
      "description": "引数の数が可変な関数を作りましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "可変長引数とは？",
          "image": "/illustrations/3d/arguments.png",
          "content": "# 引数の数が不定\n\n**stdarg.h** を使うと、可変長引数を扱えます。\n\n```c\n#include <stdarg.h>\n\nint sum(int count, ...) {\n    va_list args;\n    va_start(args, count);\n    // ...\n    va_end(args);\n}\n```"
        },
        {
          "title": "va_マクロ",
          "image": "/illustrations/3d/robot.png",
          "content": "# 引数を取得\n\n```c\nva_list args;\nva_start(args, count);  // 初期化\nint n = va_arg(args, int); // 取得\nva_end(args);  // 終了\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\n#include <stdarg.h>\n\nint sum(int count, ...) {\n    va_list args;\n    va_start(args, count);\n    int total = 0;\n    for (int i = 0; i < count; i++) {\n        total += va_arg(args, int);\n    }\n    va_end(args);\n    return total;\n}\n\nint main() {\n    printf(\"%d\\n\", sum(3, 10, 20, 30));\n    return 0;\n}",
      "holeyCode": "#include <stdio.h>\\n#include <stdarg.h>\\n\\n___\\n    ___\\n    // va_start と入力して、たくさんの引数を使えるようにしましょう\\n    ___\\n    ___\\n    ___\\n        ___\\n    ___\\n    ___\\n    ___\\n___\\n\\n___\\n    ___\\n    ___\\n___"%d\\n\", sum(3, 10, 20, 30));\n    return 0;\n}",
      "correctLines": [
        "#include <stdio.h>",
        "#include <stdarg.h>",
        "",
        "int sum(int count, ...) {",
        "    va_list args;",
        "    // va_start と入力して、たくさんの引数を使えるようにしましょう",
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
        "    printf("%d\\\n", sum(3, 10, 20, 30));",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "va_start で可変長引数を初期化します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "macros": ["va_start", "va_arg", "va_end"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "60\n"
        }
      ]
    }
  ]
}

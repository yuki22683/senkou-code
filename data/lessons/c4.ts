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
            "content": "# ファイルを開く\\\\n\\\\n**fopen**（エフオープン）は、ファイルを開くための関数（かんすう）です。\\\\n\\\\n**身近な例え：**\\\\n本を読むとき、まず本棚（ほんだな）から本を取り出しますよね。`fopen` は「本を手に取る」ような操作です。\\\\n\\\\n**実際のコードを見てみましょう：**\\\\n```c\\\\n// file.txtというファイルを読み込みモードで開く\\\\nFILE *fp = fopen(\"file.txt\", \"r\");\\\\n\\\\n// ファイルが開けなかった場合の確認\\\\nif (fp == NULL) {\\\\n    printf(\"Error!\\\\n\");  // エラーを表示\\\\n}\\\\n```\\\\n\\\\n**ポイント：**\\\\n- `FILE *fp`（ファイル・ポインタ）は、開いたファイルを指す「目印」です\\\\n- ファイルが見つからないと `NULL`（ヌル）が返ってきます"
          },
          {
            "title": "モードの種類",
            "content": "# オープンモード\\\\n\\\\nファイルを開くときに、「何をしたいか」を指定します。これを**モード**と呼びます。\\\\n\\\\n**主なモード一覧：**\\\\n```c\\\\n\"r\"  // Read（読み込み）: ファイルの中身を見る\\\\n\"w\"  // Write（書き込み）: 新しく書く（元の内容は消える！）\\\\n\"a\"  // Append（追記）: 最後に付け足す\\\\n\"rb\" // バイナリ読み込み（画像などに使う）\\\\n\"wb\" // バイナリ書き込み\\\\n```\\\\n\\\\n**身近な例え：**\\\\n- `\"r\"`: ノートを読むだけ\\\\n- `\"w\"`: 新しいノートに書く（古いページは捨てる）\\\\n- `\"a\"`: ノートの続きから書く"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\\\\n\\\\nint main() {\\\\n    // fopen でファイルを開く\\\\n    FILE *fp = fopen(\"test.txt\", \"w\");\\\\n    if (fp != NULL) {\\\\n        fprintf(fp, \"Hello\\\\n\");\\\\n        fclose(fp);\\\\n        printf(\"Done\\\\n\");\\\\n    }\\\\n    return 0;\\\\n}",
        "holeyCode": "#include <stdio.h>\\\\n\\\\nint ___() {\\\\n    // fopen でファイルを開く\\\\n    FILE *fp = fopen(\"___\", \"w\");\\\\n    if (fp != ___) {\\\\n        fprintf(fp, \"Hello\\\\n\");\\\\n        fclose(___);\\\\n        printf(\"Done\\\\n\");\\\\n    ___\\\\n    return ___;\\\\n___",
        "correctLines": [
                  "#include <stdio.h>",
                  "",
                  "int main() {",
                  "    // fopen でファイルを開く",
                  "    FILE *fp = fopen(\"test.txt\", \"w\");",
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
                  null,
                  null,
                  null
        ],
        "candidates": {
          "functions": [
            "fopen",
            "open",
            "fread"
          ],
          "others": ["main", "test.txt", "NULL", "fp", "}", "0"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Done"
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
            "content": "# ファイルを閉じる\\\\n\\\\n**fclose**（エフクローズ）は、開いたファイルを閉じる関数（かんすう）です。\\\\n\\\\n**身近な例え：**\\\\n本を読み終わったら、本棚に戻しますよね。`fclose` は「本を棚に戻す」ような操作です。\\\\n\\\\n**実際のコードを見てみましょう：**\\\\n```c\\\\nFILE *fp = fopen(\"file.txt\", \"r\");  // ファイルを開く\\\\n// ファイルを使った処理...\\\\nfclose(fp);  // 使い終わったら閉じる\\\\n```\\\\n\\\\n**リソース**（コンピュータが使うメモリなど）を解放（かいほう）して、他のプログラムも使えるようにします。"
          },
          {
            "title": "重要性",
            "content": "# 必ず閉じる理由\\\\n\\\\n**なぜファイルを閉じないといけないの？**\\\\n\\\\n1. **バッファ**（一時的な保存場所）の内容が実際にファイルに書き込まれる\\\\n2. **メモリ**が解放される（パソコンの負担が減る）\\\\n3. 他のプログラムがそのファイルを使えるようになる\\\\n\\\\n**身近な例え：**\\\\n使った本を返さないと、他の人が読めません。また、本を持ったままだと手がふさがってしまいますよね。\\\\n\\\\n**超重要！**\\\\n`fopen` したら、必ず `fclose` で閉じましょう！これはプログラマーの大切なマナーです。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\\\\n\\\\nint main() {\\\\n    FILE *fp = fopen(\"data.txt\", \"w\");\\\\n    if (fp != NULL) {\\\\n        fputs(\"Data\\\\n\", fp);\\\\n        // fclose でファイルを閉じる\\\\n        fclose(fp);\\\\n        printf(\"Closed\\\\n\");\\\\n    }\\\\n    return 0;\\\\n}",
        "holeyCode": "#include <stdio.h>\\\\n\\\\nint ___() {\\\\n    FILE *fp = fopen(\"___\", \"w\");\\\\n    if (fp != ___) {\\\\n        fputs(\"Data\\\\n\", fp);\\\\n        // fclose でファイルを閉じる\\\\n        fclose(___);\\\\n        printf(\"Closed\\\\n\");\\\\n    ___\\\\n    return ___;\\\\n___",
        "correctLines": [
                  "#include <stdio.h>",
                  "",
                  "int main() {",
                  "    FILE *fp = fopen(\"data.txt\", \"w\");",
                  "    if (fp != NULL) {",
                  "        fputs(\"Data",
                  "\", fp);",
                  "        // fclose でファイルを閉じる",
                  "        fclose(fp);",
                  "        printf(\"Closed",
                  "\");",
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
          "functions": [
            "fclose",
            "close",
            "fend"
          ],
          "others": ["main", "data.txt", "NULL", "fp", "}", "0"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Closed"
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
            "content": "# フォーマット付き出力（しゅつりょく）\\\\n\\\\n**fprintf**（エフプリントエフ）は、`printf` のファイル版です。\\\\n\\\\n**身近な例え：**\\\\n`printf` が「画面にメモを書く」なら、`fprintf` は「ノートにメモを書く」イメージです。\\\\n\\\\n**実際のコードを見てみましょう：**\\\\n```c\\\\n// ファイルを開く\\\\nFILE *fp = fopen(\"out.txt\", \"w\");\\\\n\\\\n// ファイルに書き込む（%sは文字列、%dは数字）\\\\nfprintf(fp, \"Name: %s, Age: %d\\\\n\", \"Alice\", 25);\\\\n// out.txtに「Name: Alice, Age: 25」と書き込まれる\\\\n```\\\\n\\\\n**ポイント：**\\\\n最初の引数（ひきすう）にファイルポインタ `fp` を指定します。"
          },
          {
            "title": "printf との違い",
            "content": "# 出力先（しゅつりょくさき）の指定\\\\n\\\\n`printf` と `fprintf` の違いは「どこに書くか」です。\\\\n\\\\n**比較してみましょう：**\\\\n```c\\\\n// 画面（標準出力）に書く\\\\nprintf(\"Hello\\\\n\");\\\\n\\\\n// ファイルに書く\\\\nfprintf(fp, \"Hello\\\\n\");\\\\n\\\\n// エラーメッセージ用の出力に書く\\\\nfprintf(stderr, \"Error\\\\n\");\\\\n```\\\\n\\\\n**用語解説：**\\\\n- **標準出力（ひょうじゅんしゅつりょく）**: 普通の画面表示\\\\n- **stderr（スタンダードエラー）**: エラーメッセージ専用の出力先\\\\n\\\\n**身近な例え：**\\\\n`printf` は「黒板に書く」、`fprintf` は「特定のノートに書く」イメージです。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\\\\n\\\\nint main() {\\\\n    FILE *fp = fopen(\"log.txt\", \"w\");\\\\n    if (fp != NULL) {\\\\n        // fprintf でファイルに書き込む\\\\n        fprintf(fp, \"Score: %d\\\\n\", 100);\\\\n        fclose(fp);\\\\n        printf(\"Written\\\\n\");\\\\n    }\\\\n    return 0;\\\\n}",
        "holeyCode": "#include <stdio.h>\\\\n\\\\nint ___() {\\\\n    FILE *fp = fopen(\"___\", \"w\");\\\\n    if (fp != ___) {\\\\n        // fprintf でファイルに書き込む\\\\n        fprintf(fp, \"Score: %d\\\\n\", 100);\\\\n        fclose(___);\\\\n        printf(\"Written\\\\n\");\\\\n    ___\\\\n    return ___;\\\\n___",
        "correctLines": [
                  "#include <stdio.h>",
                  "",
                  "int main() {",
                  "    FILE *fp = fopen(\"log.txt\", \"w\");",
                  "    if (fp != NULL) {",
                  "        // fprintf でファイルに書き込む",
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
                  null,
                  null,
                  null
        ],
        "candidates": {
          "functions": [
            "fprintf",
            "printf",
            "sprintf"
          ],
          "others": ["main", "log.txt", "NULL", "fp", "}", "0"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Written"
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
            "content": "# 1行読み込み\\\\n\\\\n**fgets**（エフゲッツ）は、ファイルから1行ずつ読み込む関数（かんすう）です。\\\\n\\\\n**身近な例え：**\\\\nノートの内容を1行ずつ読むイメージです。「改行」（エンターキーを押したところ）まで読みます。\\\\n\\\\n**実際のコードを見てみましょう：**\\\\n```c\\\\nchar buf[256];  // 読み込んだ文字を入れる「はこ」\\\\nfgets(buf, 256, fp);  // fpから最大256文字を読む\\\\n// buf に1行分の文字が入る\\\\n```\\\\n\\\\n**ポイント：**\\\\n- 第1引数：読み込んだデータを入れる場所\\\\n- 第2引数：最大何文字まで読むか\\\\n- 第3引数：読み込むファイル"
          },
          {
            "title": "安全な読み込み",
            "content": "# バッファオーバーフロー防止（ぼうし）\\\\n\\\\n**バッファオーバーフロー**とは、「はこ」に入りきらない量のデータを詰め込もうとして、あふれてしまうことです。\\\\n\\\\n**身近な例え：**\\\\nコップに水を入れすぎると、こぼれてしまいますよね。それと同じです。\\\\n\\\\n**安全なコードの書き方：**\\\\n```c\\\\nchar buf[100];  // 100文字分の「はこ」\\\\n// sizeof(buf) を使うと安全！\\\\nfgets(buf, sizeof(buf), fp);\\\\n// 最大99文字 + '\\0'（終わりの印）を読む\\\\n```\\\\n\\\\n**ポイント：**\\\\n`sizeof()` を使うと、「はこ」のサイズを自動で計算してくれるので、あふれる心配がありません。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\\\\n#include <string.h>\\\\n\\\\nint main() {\\\\n    char line[100];\\\\n    FILE *fp = fopen(\"test.txt\", \"w\");\\\\n    fprintf(fp, \"Hello World\\\\n\");\\\\n    fclose(fp);\\\\n    fp = fopen(\"test.txt\", \"r\");\\\\n    // fgets で1行読み込む\\\\n    fgets(line, sizeof(line), fp);\\\\n    line[strcspn(line, \"\\\\n\")] = 0;\\\\n    printf(\"%s\\\\n\", line);\\\\n    fclose(fp);\\\\n    return 0;\\\\n}",
        "holeyCode": "#include <stdio.h>\\\\n#include <string.h>\\\\n\\\\nint ___() {\\\\n    char line[___];\\\\n    FILE *fp = fopen(\"___\", \"w\");\\\\n    fprintf(fp, \"Hello World\\\\n\");\\\\n    fclose(___);\\\\n    fp = fopen(\"___\", \"r\");\\\\n    // fgets で1行読み込む\\\\n    fgets(line, sizeof(line), ___);\\\\n    line[strcspn(line, \"\\\\n\")] = 0;\\\\n    printf(\"%s\\\\n\", line);\\\\n    fclose(___);\\\\n    return ___;\\\\n___",
        "correctLines": [
          "#include <stdio.h>",
          "#include <string.h>",
          "",
          "int main() {",
          "    char line[100];",
          "    FILE *fp = fopen(\"test.txt\", \"w\");",
          "    fprintf(fp, \"Hello World",
          "\");",
          "    fclose(fp);",
          "    fp = fopen(\"test.txt\", \"r\");",
          "    // fgets で1行読み込む",
          "    fgets(line, sizeof(line), fp);",
          "    line[strcspn(line, \"",
          "\")] = 0;",
          "    printf(\"%s\\\\n\", line);",
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
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        "candidates": {
          "functions": [
            "fgets",
            "gets",
            "fread"
          ],
          "others": ["main", "100", "test.txt", "fp", "0;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello World"
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
            "content": "# ファイル位置を移動\\\\n\\\\n**fseek**（エフシーク）は、ファイルの読み書き位置を移動する関数です。\\\\n\\\\n**身近な例え：**\\\\n本を読むとき、「50ページ目を開いて」と言えばそのページに移動できますよね。`fseek` はファイルの中で「ここから読んで！」と位置を指定できます。\\\\n\\\\n**実際のコードを見てみましょう：**\\\\n```c\\\\n// 先頭から10バイト目に移動\\\\nfseek(fp, 10, SEEK_SET);\\\\n\\\\n// 今いる場所から5バイト戻る\\\\nfseek(fp, -5, SEEK_CUR);\\\\n\\\\n// ファイルの最後に移動\\\\nfseek(fp, 0, SEEK_END);\\\\n```\\\\n\\\\n**バイト**とは、データの大きさの単位です。英語の1文字 = 1バイトです。"
          },
          {
            "title": "基準位置",
            "content": "# SEEK定数（ていすう）\\\\n\\\\n「どこを基準にして移動するか」を指定する定数があります。\\\\n\\\\n**3つの基準位置：**\\\\n```c\\\\nSEEK_SET  // ファイルの先頭（一番最初）を基準\\\\nSEEK_CUR  // 現在いる場所（Current）を基準\\\\nSEEK_END  // ファイルの末尾（一番最後）を基準\\\\n```\\\\n\\\\n**身近な例え：**\\\\n- `SEEK_SET`: 「本の最初のページから数えて○ページ目」\\\\n- `SEEK_CUR`: 「今見ているページから○ページ先」\\\\n- `SEEK_END`: 「本の最後のページから○ページ戻る」\\\\n\\\\n**使用例：**\\\\n`fseek(fp, 0, SEEK_SET)` → ファイルの先頭に戻る"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\\\\n\\\\nint main() {\\\\n    FILE *fp = fopen(\"pos.txt\", \"w+\");\\\\n    fputs(\"ABCDEFGHIJ\", fp);\\\\n    // fseek でファイル位置を移動\\\\n    fseek(fp, 0, SEEK_SET);\\\\n    printf(\"%c\\\\n\", fgetc(fp));\\\\n    fclose(fp);\\\\n    return 0;\\\\n}",
        "holeyCode": "#include <stdio.h>\\\\n\\\\nint ___() {\\\\n    FILE *fp = fopen(\"___\", \"w+\");\\\\n    fputs(\"___\", fp);\\\\n    // fseek でファイル位置を移動\\\\n    fseek(fp, ___, SEEK_SET);\\\\n    printf(\"%c\\\\n\", fgetc(fp));\\\\n    fclose(___);\\\\n    return ___;\\\\n___",
        "correctLines": [
                  "#include <stdio.h>",
                  "",
                  "int main() {",
                  "    FILE *fp = fopen(\"pos.txt\", \"w+\");",
                  "    fputs(\"ABCDEFGHIJ\", fp);",
                  "    // fseek でファイル位置を移動",
                  "    fseek(fp, 0, SEEK_SET);",
                  "    printf(\"%c",
                  "\", fgetc(fp));",
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
                  null,
                  null,
                  null
        ],
        "candidates": {
          "functions": [
            "fseek",
            "seek",
            "ftell"
          ],
          "others": ["main", "pos.txt", "ABCDEFGHIJ", "0", "fp", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "A"
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
            "content": "# 現在位置を取得（しゅとく）\\\\n\\\\n**ftell**（エフテル）は、今ファイルのどこにいるかを教えてくれる関数です。\\\\n\\\\n**身近な例え：**\\\\n本を読んでいて「今何ページ目？」と聞くようなものです。`ftell` は「今、ファイルの先頭から何バイト目にいますよ」と教えてくれます。\\\\n\\\\n**実際のコードを見てみましょう：**\\\\n```c\\\\nlong pos = ftell(fp);  // 現在位置を取得\\\\nprintf(\"Position: %ld\\\\n\", pos);  // 何バイト目かを表示\\\\n```\\\\n\\\\n**ポイント：**\\\\n- 戻り値は `long` 型（大きな数を扱える整数型）\\\\n- `%ld` で表示します（long型のdecimal）"
          },
          {
            "title": "ファイルサイズの取得",
            "content": "# ファイルの大きさを調べる\\\\n\\\\n`ftell` と `fseek` を組み合わせると、ファイルの大きさ（サイズ）を調べることができます。\\\\n\\\\n**仕組み：**\\\\n1. ファイルの最後に移動する\\\\n2. そこが「先頭から何バイト目か」を調べる → それがファイルサイズ！\\\\n\\\\n**実際のコードを見てみましょう：**\\\\n```c\\\\nfseek(fp, 0, SEEK_END);   // ファイルの最後に移動\\\\nlong size = ftell(fp);     // 今いる位置 = ファイルサイズ\\\\nfseek(fp, 0, SEEK_SET);   // 先頭に戻る\\\\n```\\\\n\\\\n**身近な例え：**\\\\n本の最後のページを開いて、そのページ番号を見れば、全部で何ページあるかわかりますよね。それと同じです！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\\\\n\\\\nint main() {\\\\n    FILE *fp = fopen(\"size.txt\", \"w+\");\\\\n    fputs(\"12345\", fp);\\\\n    fseek(fp, 0, SEEK_END);\\\\n    // ftell で現在位置を取得\\\\n    long size = ftell(fp);\\\\n    printf(\"%ld\\\\n\", size);\\\\n    fclose(fp);\\\\n    return 0;\\\\n}",
        "holeyCode": "#include <stdio.h>\\\\n\\\\nint ___() {\\\\n    FILE *fp = fopen(\"___\", \"w+\");\\\\n    fputs(\"___\", fp);\\\\n    fseek(fp, ___, SEEK_END);\\\\n    // ftell で現在位置を取得\\\\n    long size = ftell(___);\\\\n    printf(\"%ld\\\\n\", size);\\\\n    fclose(___);\\\\n    return ___;\\\\n___",
        "correctLines": [
                  "#include <stdio.h>",
                  "",
                  "int main() {",
                  "    FILE *fp = fopen(\"size.txt\", \"w+\");",
                  "    fputs(\"12345\", fp);",
                  "    fseek(fp, 0, SEEK_END);",
                  "    // ftell で現在位置を取得",
                  "    long size = ftell(fp);",
                  "    printf(\"%ld",
                  "\", size);",
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
                  null,
                  null,
                  null,
                  null
        ],
        "candidates": {
          "functions": [
            "ftell",
            "fpos",
            "fseek"
          ],
          "others": ["main", "size.txt", "12345", "0", "fp", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "5"
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
            "content": "# 名前付き定数（めいぜんつきていすう）\\\\n\\\\n**enum**（イーナム）は、関連（かんれん）する定数（ていすう）に名前をつける仕組みです。\\\\n\\\\n**身近な例え：**\\\\n曜日（ようび）を考えてみてください。「月曜=1、火曜=2、水曜=3...」と番号で覚えるより、「月曜、火曜、水曜...」と名前で覚えた方がわかりやすいですよね。\\\\n\\\\n**実際のコードを見てみましょう：**\\\\n```c\\\\nenum Color { RED, GREEN, BLUE };  // 色の定数を定義\\\\nenum Color c = GREEN;  // c に GREEN を入れる\\\\n// 実際には c = 1 （0から順番に番号がつく）\\\\n```\\\\n\\\\n**ポイント：**\\\\n最初の定数は 0、次は 1、その次は 2... と自動で番号がつきます。"
          },
          {
            "title": "値の指定",
            "content": "# 明示的（めいじてき）に値を決める\\\\n\\\\n自動で番号をつける代わりに、自分で値を決めることもできます。\\\\n\\\\n**実際のコードを見てみましょう：**\\\\n```c\\\\nenum Status {\\\\n    OK = 200,        // 成功は200\\\\n    NOT_FOUND = 404, // 見つからないは404\\\\n    ERROR = 500      // エラーは500\\\\n};\\\\n```\\\\n\\\\n**身近な例え：**\\\\nこれは、Webの世界で使われる「ステータスコード」と同じ番号です。\\\\n- 200: うまくいった！\\\\n- 404: ページが見つからない\\\\n- 500: サーバーでエラーが起きた\\\\n\\\\n**メリット：**\\\\nただの数字より、`OK` や `NOT_FOUND` と書いた方が、何を意味しているかわかりやすいですよね！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\\\\n\\\\n// Day列挙型を定義\\\\nenum Day { MON, TUE, WED, THU, FRI };\\\\n\\\\nint main() {\\\\n    enum Day today = WED;\\\\n    printf(\"%d\\\\n\", today);\\\\n    return 0;\\\\n}",
        "holeyCode": "#include <stdio.h>\\\\n\\\\n// Day列挙型を定義\\\\nenum Day { MON, TUE, WED, THU, ___ };\\\\n\\\\nint ___() {\\\\n    enum Day today = ___;\\\\n    printf(\"%d\\\\n\", today);\\\\n    return ___;\\\\n___",
        "correctLines": [
                  "#include <stdio.h>",
                  "",
                  "// Day列挙型を定義",
                  "enum Day { MON, TUE, WED, THU, FRI };",
                  "",
                  "int main() {",
                  "    enum Day today = WED;",
                  "    printf(\"%d\\\\n\", today);",
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
                  null
        ],
        "candidates": {
          "keywords": [
            "enum",
            "struct",
            "typedef"
          ],
          "others": ["FRI", "main", "WED"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "2"
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
            "content": "# メモリを共有（きょうゆう）\\\\n\\\\n**union**（ユニオン）は、複数の変数が同じメモリ領域（りょういき）を共有する仕組みです。\\\\n\\\\n**身近な例え：**\\\\n1つの部屋を「リビング」と「寝室」で使い分けるイメージです。同時に両方としては使えませんが、必要に応じて使い方を変えられます。\\\\n\\\\n**実際のコードを見てみましょう：**\\\\n```c\\\\nunion Data {\\\\n    int i;      // 整数\\\\n    float f;    // 小数\\\\n    char c;     // 文字\\\\n};\\\\n// サイズは一番大きいメンバと同じ\\\\n```\\\\n\\\\n**ポイント：**\\\\n`struct`（構造体）は全部のメンバに別々の場所を用意しますが、`union` は同じ場所を共有します。"
          },
          {
            "title": "使い方",
            "content": "# 一度に1つだけ有効（ゆうこう）\\\\n\\\\n`union` では、**一度に1つの値しか保存できません**。新しい値を入れると、前の値は上書きされて消えてしまいます。\\\\n\\\\n**実際のコードを見てみましょう：**\\\\n```c\\\\nunion Data d;\\\\nd.i = 10;              // 整数として10を入れる\\\\nprintf(\"%d\\\\n\", d.i);   // => 10 と表示\\\\n\\\\nd.f = 3.14;            // 小数として3.14を入れる\\\\n// ↑ この時点で d.i の値は上書きされて失われる！\\\\n```\\\\n\\\\n**身近な例え：**\\\\n黒板に「今日の日付」を書いたあと、消して「明日の予定」を書くようなものです。同時に両方は書けません。\\\\n\\\\n**いつ使うの？**\\\\n「メモリを節約したいとき」や「同じデータを違う型で見たいとき」に使います。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\\\\n\\\\n// Value共用体を定義\\\\nunion Value {\\\\n    int i;\\\\n    double d;\\\\n};\\\\n\\\\nint main() {\\\\n    union Value v;\\\\n    v.i = 42;\\\\n    printf(\"%d\\\\n\", v.i);\\\\n    return 0;\\\\n}",
        "holeyCode": "#include <stdio.h>\\\\n\\\\n// Value共用体を定義\\\\nunion ___ {\\\\n    int ___;\\\\n    double ___;\\\\n___\\\\n\\\\nint ___() {\\\\n    union Value ___;\\\\n    v.i = ___;\\\\n    printf(\"%d\\\\n\", v.i);\\\\n    return ___;\\\\n___",
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
                  "    printf(\"%d\\\\n\", v.i);",
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
                  null,
                  null,
                  null,
                  null,
                  null
        ],
        "candidates": {
          "keywords": [
            "union",
            "struct",
            "enum"
          ],
          "others": ["Value", "i", "d", "};", "main", "v", "42"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "42"
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
            "content": "# ポインタを指すポインタ\\\\n\\\\n**二重ポインタ**（にじゅうポインタ）は、ポインタ変数のアドレス（番地）を格納（かくのう）します。\\\\n\\\\n**身近な例え：**\\\\n- ポインタは「住所が書かれたメモ」\\\\n- 二重ポインタは「そのメモがどこにあるかを示す、別のメモ」\\\\n\\\\n友達の家の住所が書かれたメモが、引き出しの中にある。その「引き出し」の場所を指すのが二重ポインタです。\\\\n\\\\n**実際のコードを見てみましょう：**\\\\n```c\\\\nint x = 10;      // 普通の変数\\\\nint *p = &x;     // xを指すポインタ\\\\nint **pp = &p;   // pを指すポインタ（二重ポインタ）\\\\n```\\\\n\\\\n`**pp` で `x` の値（10）にアクセスできます。"
          },
          {
            "title": "使いどころ",
            "content": "# 関数でポインタを変更したいとき\\\\n\\\\n関数の中でポインタ自体を変更したいときに二重ポインタを使います。\\\\n\\\\n**実際のコードを見てみましょう：**\\\\n```c\\\\nvoid allocate(int **pp) {\\\\n    // ポインタが指す先を変更\\\\n    *pp = malloc(sizeof(int));\\\\n}\\\\n\\\\nint *p;       // まだどこも指していない\\\\nallocate(&p); // pにメモリを割り当て\\\\n```\\\\n\\\\n**なぜ二重ポインタが必要？**\\\\n普通のポインタを渡すと「コピー」が渡されるので、関数の中で変更しても元のポインタは変わりません。\\\\n二重ポインタを使うと、元のポインタ自体を変更できます。\\\\n\\\\n**身近な例え：**\\\\n「住所メモを新しいメモに書き換えたい」とき、メモの「置き場所」を教えてもらう必要があります。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\\\\n\\\\nint main() {\\\\n    int x = 100;\\\\n    int *p = &x;\\\\n    // ** で二重ポインタを宣言\\\\n    int **pp = &p;\\\\n    printf(\"%d\\\\n\", **pp);\\\\n    return 0;\\\\n}",
        "holeyCode": "#include <stdio.h>\\\\n\\\\nint ___() {\\\\n    int x = ___;\\\\n    int *p = &___;\\\\n    // ** で二重ポインタを宣言\\\\n    int **pp = &___;\\\\n    printf(\"%d\\\\n\", **pp);\\\\n    return ___;\\\\n___",
        "correctLines": [
                  "#include <stdio.h>",
                  "",
                  "int main() {",
                  "    int x = 100;",
                  "    int *p = &x;",
                  "    // ** で二重ポインタを宣言",
                  "    int **pp = &p;",
                  "    printf(\"%d\\\\n\", **pp);",
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
                  null
        ],
        "candidates": {
          "operators": [
            "**",
            "*",
            "&"
          ],
          "others": ["main", "100", "x", "p"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "100"
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
            "content": "# 引数（ひきすう）の数が決まっていない関数\\\\n\\\\n**可変長引数（かへんちょうひきすう）** を使うと、引数の数が決まっていない関数を作れます。\\\\n\\\\n**身近な例え：**\\\\n`printf` を思い出してください。`printf(\"Hello\")` のように1つだけの時もあれば、`printf(\"%d %d\", a, b)` のように複数の時もありますよね。これが可変長引数です！\\\\n\\\\n**使い方：**\\\\n`stdarg.h`（スタンダード・アーギュメント）をインクルードして使います。\\\\n\\\\n```c\\\\n#include <stdarg.h>\\\\n\\\\nint sum(int count, ...) {  // ... で「何個でもOK」\\\\n    va_list args;          // 引数リストを作る\\\\n    va_start(args, count); // 準備開始\\\\n    // 処理...\\\\n    va_end(args);          // 終了\\\\n}\\\\n```"
          },
          {
            "title": "va_マクロ",
            "content": "# 引数を1つずつ取り出す\\\\n\\\\n可変長引数を扱うための **マクロ**（便利な道具）があります。\\\\n\\\\n**3つのマクロ：**\\\\n```c\\\\nva_list args;              // 引数リストを入れる変数\\\\nva_start(args, count);     // 初期化（最後の固定引数を指定）\\\\nint n = va_arg(args, int); // 1つ取り出す（型を指定）\\\\nva_end(args);              // 終了処理\\\\n```\\\\n\\\\n**身近な例え：**\\\\n- `va_list`: 引数を入れた「袋」\\\\n- `va_start`: 袋を開ける\\\\n- `va_arg`: 袋から1つ取り出す\\\\n- `va_end`: 袋を閉じる\\\\n\\\\n**ポイント：**\\\\n`va_arg` で取り出すとき、その引数の**型**（int や double など）を指定する必要があります。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <stdio.h>\\\\n#include <stdarg.h>\\\\n\\\\nint sum(int count, ...) {\\\\n    va_list args;\\\\n    // va_start で可変長引数を初期化\\\\n    va_start(args, count);\\\\n    int total = 0;\\\\n    for (int i = 0; i < count; i++) {\\\\n        total += va_arg(args, int);\\\\n    }\\\\n    va_end(args);\\\\n    return total;\\\\n}\\\\n\\\\nint main() {\\\\n    printf(\"%d\\\\n\", sum(3, 10, 20, 30));\\\\n    return 0;\\\\n}",
        "holeyCode": "#include <stdio.h>\\\\n#include <stdarg.h>\\\\n\\\\nint sum(int ___, ...) {\\\\n    va_list ___;\\\\n    // va_start で可変長引数を初期化\\\\n    va_start(args, ___);\\\\n    int total = ___;\\\\n    for (int i = ___; i < count; i++) {\\\\n        total += va_arg(args, ___);\\\\n    ___\\\\n    va_end(___);\\\\n    return ___;\\\\n___\\\\n\\\\nint ___() {\\\\n    printf(\"%d\\\\n\", sum(3, 10, 20, 30));\\\\n    return ___;\\\\n___",
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
          "    printf(\"%d\\\\n\", sum(3, 10, 20, 30));",
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
          "macros": [
            "va_start",
            "va_arg",
            "va_end"
          ],
          "others": ["count", "args", "0", "int", "}", "total", "main"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "60"
          }
        ]
      }
  ]
}

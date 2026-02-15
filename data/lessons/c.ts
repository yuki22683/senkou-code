export const cData = {
  "language": "c",
  "lessonId": "c-1",
  "lessonTitle": "C (シー) 言語に挑戦！",
  "lessonDescription": "たくさんのプログラミング言語のもとになった「C（シー）言語」のきほんを学びましょう。コンピュータに正しい手順で指示を出す方法を身につけます。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "tutorialSlides": [
    { "title": "C言語とは？", "content": "# すべての言語の「お父さん」\\n\\nC言語は50年以上前に作られた歴史あるプログラミング言語です。\\n\\n今のスマホやパソコンを動かしている「OS」は、ほとんどこのC言語で作られています。まさにコンピュータ界の「お父さん」のような存在です！" },
    { "title": "C言語の「きまり文句」", "content": "# 最初に書く「おまじない」\\n\\n```c\\n#include <stdio.h>  // 入出力機能を使う準備\\nint main() {        // ここからスタート！\\n    printf(\\\"こんにちは\\n\\\");\\n    return 0;\\n}\\n```\\n\\n- `#include <stdio.h>`: 画面に文字を出す道具を準備\\n- `int main()`: プログラムの開始地点\\n- `printf()`: 画面に文字を表示" },
    { "title": "変数を作る", "content": "# int と char\\n\\n数字や文字を保存する「はこ」を作れます。\\n\\n```c\\nint age = 20;    // 整数用のはこ\\nchar c = 'A';    // 1文字用のはこ\\n```\\n\\n`%d`で整数、`%c`で文字を表示します。\\n\\n```c\\nprintf(\\\"%d歳\\n\\\", age);\\n```\\n\\n=> 20歳" },
    { "title": "計算してみよう", "content": "# 四則演算\\n\\n```c\\nint a = 10;\\nint b = 3;\\nprintf(\\\"%d\\n\\\", a + b);  // 13（足し算）\\nprintf(\\\"%d\\n\\\", a % b);  // 1（あまり）\\n```\\n\\n`%`を使うと割り算のあまりが計算できます！" },
    { "title": "条件分岐", "content": "# if文\\n\\n```c\\nif (score >= 80) {\\n    printf(\\\"合格！\\n\\\");\\n} else {\\n    printf(\\\"がんばろう\\n\\\");\\n}\\n```\\n\\n条件が正しければ上のブロック、そうでなければ下のブロックが実行されます。" }
  ],
  "exercises": [
    {
      "title": "画面に文字を出してみましょう",
      "description": "プログラムの基本！画面にメッセージを表示する方法を学びます",
      "tutorialSlides": [
        {
          "title": "C言語とは？",
          "content": "# すべての言語の「お父さん」\\n\\nC言語（シーげんご）は、今から50年以上前に作られたとても歴史のあるプログラミング言語です。\\n\\n**身近な例え：**\\nC言語は「プログラミング言語の家系図」でいうと、一番上のご先祖様のような存在です！\\n\\n今のスマホやパソコンを動かしている「OS（オーエス）」という、コンピュータの「脳みそ」のような大事な部分は、ほとんどこのC言語で作られています。\\n\\nまさに、コンピュータ界の「お父さん」のような存在です！"
        },
        {
          "title": "C言語の「きまり文句」",
          "content": "# 最初に書く「おまじない」\\n\\nC言語を動かすには、必ず書かなければいけない「お約束」があります。\\n\\n**1. `#include <stdio.h>`（インクルード・スタンダード・アイオー・エイチ）：**\\n「画面に文字を出す道具」を用意する呪文です。図書館から本を借りてくるようなイメージです！\\n\\n**2. `int main() { ... }`（イント・メイン）：**\\n「ここからプログラムが始まりますよ！」という合図です。本の「第1章」のようなものです。\\n\\n**実際のコードを見てみましょう：**\\n```c\\n#include <stdio.h>\\nint main() {\\n    printf(\"C言語は楽しい！\\n\");\\n    return 0;\\n}\\n```\\n\\n`printf`（プリントエフ）は「画面に文字を表示してね」という命令です。\\n`return 0`（リターン・ゼロ）は「うまくいきました！」という報告です。\\n\\nこの形を覚えてしまいましょう！"
        }
      ],
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n// int mainでmain関数を定義\\nint main() {\\n    // printfで「Hello, World!」を出力\\n    printf(\"Hello, World!\\n\");\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}",
      "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n// int mainでmain関数を定義\\n___ ___() {\\n    // printfで「Hello, World!」を出力\\n    ___(\"___\");\\n    // return 0で正常終了を返す\\n    return ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // printfで「Hello, World!」を出力",
          "    printf(\"Hello, World!\\n\");",
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
          ""
        ],
      "candidates": {
        "functions": [
          "printf"
        ],
        "strings": [
          "Hello, World!"
        ],
        "others": ["stdio.h", "main", "0", "\");", "}", "include", "int", "Hello, World!\\n\");", "return 0;"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, World!\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "数字を入れる「はこ」int",
      "description": "データを名前をつけて保存する「変数」の仕組みを理解します",
      "tutorialSlides": [
              {
                      "title": "変数って何？",
                      "content": "# 変数は「はこ」のようなもの\\n\\n変数は数字や文字を入れておく「はこ」です。\\n\\n**int型**は整数（1、2、3など）を入れる箱です。\\n\\n```c\\nint x = 10;  // xという箱に10を入れる\\n```"
              },
              {
                      "title": "変数の使い方",
                      "content": "# 変数を宣言して使おう\\n\\n**やること：**\\n1. 箱の種類（int）を書く\\n2. 箱の名前を決める\\n3. = で値を入れる\\n\\n```c\\nint age = 12;\\nprintf(\"%d\", age);  // 12と表示\\n```"
              }
      ],
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n// int mainでmain関数を定義\\nint main() {\\n    // int xでxを宣言し10を代入\\n    int x = 10;\\n    // printfでxを出力\\n    printf(\"%d\\n\", x);\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}",
      "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n// int mainでmain関数を定義\\n___ ___() {\\n    // int xでxを宣言し10を代入\\n    ___ ___ = ___;\\n    // printfでxを出力\\n    ___(\"___\", ___);\\n    // return 0で正常終了を返す\\n    return ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // int xでxを宣言し10を代入",
          "    int x = 10;",
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
        "others": ["stdio.h", "main", "10", "x", "0", "printf", "\", x);", "}", "include", "int", "%d", "%d\\n\", x);", "return 0;"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "コンピュータで計算しましょう",
      "description": "プログラムで数値を計算する方法を学びます",
      "tutorialSlides": [
              {
                      "title": "計算をしてみよう",
                      "content": "# Go言語で計算\\n\\n算数と同じ記号で計算できます。\\n\\n```go\\na := 10 + 5   // 15\\nb := 10 - 3   // 7\\nc := 4 * 2    // 8\\nd := 10 / 2   // 5\\n```"
              },
              {
                      "title": "余りを求める",
                      "content": "# % で余り\\n\\n```go\\nx := 7 % 3  // 7÷3の余り = 1\\n```\\n\\n偶数・奇数の判定に便利！"
              }
      ],
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n// int mainでmain関数を定義\\nint main() {\\n    // int aでaを宣言し10を代入\\n    int a = 10;\\n    // int bでbを宣言し3を代入\\n    int b = 3;\\n    // printfでaからbを引いた結果（7）を出力\\n    printf(\"%d\\n\", a - b);\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}",
      "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n// int mainでmain関数を定義\\n___ ___() {\\n    // int aでaを宣言し10を代入\\n    ___ ___ = ___;\\n    // int bでbを宣言し3を代入\\n    ___ ___ = ___;\\n    // printfでaからbを引いた結果（7）を出力\\n    ___(\"___\", ___ ___ ___);\\n    // return 0で正常終了を返す\\n    return ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // int aでaを宣言し10を代入",
          "    int a = 10;",
          "    // int bでbを宣言し3を代入",
          "    int b = 3;",
          "    // printfでaからbを引いた結果（7）を出力",
          "    printf(\"%d\\n\", a - b);",
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
          "-",
          "+",
          "*",
          "/"
        ],
        "others": ["stdio.h", "main", "10", "3", "0", "printf", "\", a - b);", "}", "include", "int", "a", "b", "%d", "%d\\n\", a - b);", "return 0;"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "7\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "剰余演算子（%）",
      "description": "余りについて学びます",
      "tutorialSlides": [
              {
                      "title": "剰余演算子って何？",
                      "content": "# 余りを求める % \\n\\n剰余演算子（%）は割り算の**余り**を求めます。\\n\\n```c\\nint x = 7 % 3;  // 7÷3=2余り1 → xは1\\n```\\n\\n偶数・奇数の判定にも使えます！"
              },
              {
                      "title": "余りの使い方",
                      "content": "# 偶数・奇数を調べよう\\n\\n```c\\nint n = 5;\\nif (n % 2 == 0) {\\n    // 偶数\\n} else {\\n    // 奇数\\n}\\n```\\n\\n2で割った余りが0なら偶数です！"
              }
      ],
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n// int mainでmain関数を定義\\nint main() {\\n    // printfで10を3で割った余り（1）を出力\\n    printf(\"%d\\n\", 10 % 3);\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}",
      "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n// int mainでmain関数を定義\\n___ ___() {\\n    // printfで10を3で割った余り（1）を出力\\n    ___(\"___\", ___ ___ ___);\\n    // return 0で正常終了を返す\\n    return ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // printfで10を3で割った余り（1）を出力",
          "    printf(\"%d\\n\", 10 % 3);",
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
          ""
        ],
      "candidates": {
        "operators": [
          "%",
          "/",
          "*",
          "+"
        ],
        "others": ["stdio.h", "main", "0", "printf", "\", 10 % 3);", "}", "include", "int", "%d", "%d\\n\", 10 % 3);", "return 0;", "10", "3"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "累算代入演算子（+=、-=）",
      "description": "累算代入演算子（+=、-=）の仕組みと使い方を学びます",
      "tutorialSlides": [
              {
                      "title": "累算代入演算子とは",
                      "content": "# 便利な省略記法\\n\\n計算と代入を1度にできます！\\n\\n```c\\nx = x + 5;  // 普通の書き方\\nx += 5;     // 同じ意味（短い！）\\n```"
              },
              {
                      "title": "いろいろな累算代入",
                      "content": "# +=、-=、*=、/=\\n\\n```c\\nint x = 10;\\nx += 5;   // x = 15\\nx -= 3;   // x = 12\\nx *= 2;   // x = 24\\nx /= 4;   // x = 6\\n```\\n\\nコードが短くなって便利！"
              }
      ],
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n// int mainでmain関数を定義\\nint main() {\\n    // int scoreでscoreを宣言し80を代入\\n    int score = 80;\\n    // +=でscoreに10を加算\\n    score += 10;\\n    // printfでscoreを出力\\n    printf(\"%d\\n\", score);\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}",
      "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n// int mainでmain関数を定義\\n___ ___() {\\n    // int scoreでscoreを宣言し80を代入\\n    ___ ___ = ___;\\n    // +=でscoreに10を加算\\n    ___ ___ ___;\\n    // printfでscoreを出力\\n    ___(\"___\", ___);\\n    // return 0で正常終了を返す\\n    return ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // int scoreでscoreを宣言し80を代入",
          "    int score = 80;",
          "    // +=でscoreに10を加算",
          "    score += 10;",
          "    // printfでscoreを出力",
          "    printf(\"%d\\n\", score);",
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
          "+=",
          "-=",
          "*=",
          "/="
        ],
        "others": ["stdio.h", "main", "80", "score", "0", "10", "printf", "\", score);", "}", "include", "int", "%d", "%d\\n\", score);", "return 0;"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "90\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "文章の中に「はこ」を入れましょう",
      "description": "データを名前をつけて保存する「変数」の仕組みを理解します",
      "tutorialSlides": [
              {
                      "title": "fmt.Printfで表示",
                      "content": "# 文章に変数を埋め込もう\\n\\n%v や %d を使って変数を表示します。\\n\\n```go\\nname := \"太郎\"\\nfmt.Printf(\"こんにちは、%sさん\", name)\\n// こんにちは、太郎さん\\n```"
              },
              {
                      "title": "フォーマット指定子",
                      "content": "# %s、%d、%v\\n\\n- **%s** 文字列\\n- **%d** 整数\\n- **%v** 何でも表示\\n\\n```go\\nfmt.Printf(\"%s は %d 歳\", name, age)\\n```"
              }
      ],
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n// int mainでmain関数を定義\\nint main() {\\n    // int ageでageを宣言し12を代入\\n    int age = 12;\\n    // printfでageを使って「私は12歳です」を出力\\n    printf(\"私は %d 歳です\\n\", age);\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}",
      "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n// int mainでmain関数を定義\\n___ ___() {\\n    // int ageでageを宣言し12を代入\\n    ___ ___ = ___;\\n    // printfでageを使って「私は12歳です」を出力\\n    ___(\"___\", ___);\\n    // return 0で正常終了を返す\\n    return ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // int ageでageを宣言し12を代入",
          "    int age = 12;",
          "    // printfでageを使って「私は12歳です」を出力",
          "    printf(\"私は %d 歳です\\n\", age);",
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
        "others": ["stdio.h", "main", "12", "age", "0", "printf", "\", age);", "}", "include", "int", "私は %d 歳です", "私は %d 歳です\\n\", age);", "return 0;"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "私は 12 歳です\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "データをならべる「配列」",
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
              {
                      "title": "配列って何？",
                      "content": "# たくさんのデータを入れる箱\\n\\n配列は同じ種類のデータをまとめて入れられます。\\n\\n```c\\nint scores[3] = {80, 90, 75};\\n```\\n\\n3つの数字をまとめて管理！"
              },
              {
                      "title": "配列の使い方",
                      "content": "# 番号（インデックス）でアクセス\\n\\n配列は0番目から始まります。\\n\\n```c\\nint a[3] = {10, 20, 30};\\nprintf(\"%d\", a[0]);  // 10\\nprintf(\"%d\", a[1]);  // 20\\n```"
              }
      ],
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n// int mainでmain関数を定義\\nint main() {\\n    // int nums[3]で配列numsを宣言し（10、20、30）で初期化\\n    int nums[3] = {10, 20, 30};\\n    // printfでnumsのインデックス1の要素（20）を出力\\n    printf(\"%d\\n\", nums[1]);\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}",
      "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n// int mainでmain関数を定義\\n___ ___() {\\n    // int nums[3]で配列numsを宣言し（10、20、30）で初期化\\n    ___ ___[___] = {___, ___, ___};\\n    // printfでnumsのインデックス1の要素（20）を出力\\n    ___(\"___\", ___[___]);\\n    // return 0で正常終了を返す\\n    return ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // int nums[3]で配列numsを宣言し（10、20、30）で初期化",
          "    int nums[3] = {10, 20, 30};",
          "    // printfでnumsのインデックス1の要素（20）を出力",
          "    printf(\"%d\\n\", nums[1]);",
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
        "numbers": [
          "0",
          "1",
          "2"
        ],
        "others": ["stdio.h", "main", "3", "printf", "\", nums[1]);", "}", "include", "int", "nums", "10", "20", "30", "%d", "%d\\n\", nums[1]);", "return 0;"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "20\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "「もし〜なら」で分ける if文",
      "description": "条件によって処理を分ける「条件分岐」を学びます",
      "tutorialSlides": [
        {
          "title": "条件分岐とは？",
          "content": "# プログラムに判断させてみよう\\n\\n日常生活でも「もし〜なら」という判断をしていますよね。\\n\\n**身近な例え：**\\n- 「もし雨が降ったら傘をさす」\\n- 「もし晴れたら外で遊ぶ」\\n- 「もしテストで80点以上なら、ごほうびがもらえる」\\n\\nこんなふうに、状況によって動きを変えることを **条件分岐** と呼びます。\\n\\nプログラムに「もし〜なら、これをしてね」と教えてあげましょう。"
        },
        {
          "title": "もし〜なら（if）",
          "content": "# if（イフ）の使い方\\n\\n`if`（イフ）は英語で「もし」という意味です。\\n\\nC言語では、`if (条件)` のあとに `{ }` 波かっこを書いて、その中に「条件が正しいときにやること」を書きます。\\n\\n**比較に使う記号：**\\n- `>` : より大きい\\n- `<` : より小さい\\n- `>=` : 以上\\n- `<=` : 以下\\n- `==` : 等しい（等号が2つ！）\\n\\n**実際のコードを見てみましょう：**\\n```c\\nint temp = 35;  // 気温を35度とする\\nif (temp > 30) {  // もし気温が30より大きければ\\n    printf(\"暑い！\\n\");  // 「暑い！」と表示\\n}\\n```\\n\\n気温が30度より高いので、「暑い！」と表示されます。"
        }
      ],
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n// int mainでmain関数を定義\\nint main() {\\n    // int scoreでscoreを宣言し85を代入\\n    int score = 85;\\n    // ifでscoreが80以上か判定\\n    if (score >= 80) {\\n        // printfで「ごうかく」を出力\\n        printf(\"ごうかく\\n\");\\n    // ifブロックを閉じる\\n    }\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}",
      "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n// int mainでmain関数を定義\\n___ ___() {\\n    // int scoreでscoreを宣言し85を代入\\n    ___ ___ = ___;\\n    // ifでscoreが80以上か判定\\n    ___ (___ ___ ___) {\\n        // printfで「ごうかく」を出力\\n        ___(\"___\");\\n    // ifブロックを閉じる\\n    ___\\n    // return 0で正常終了を返す\\n    return ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // int scoreでscoreを宣言し85を代入",
          "    int score = 85;",
          "    // ifでscoreが80以上か判定",
          "    if (score >= 80) {",
          "        // printfで「ごうかく」を出力",
          "        printf(\"ごうかく\\n\");",
          "    // ifブロックを閉じる",
          "    }",
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
        "keywords": [
          "if",
          "else",
          "while"
        ],
        "others": ["stdio.h", "main", "85", "0", ">=", "printf", "\");", "}", "include", "int", "score", "80", "ごうかく", "return 0;"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "ごうかく\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "ちがう場合は？ if-else文",
      "description": "条件に合わない場合の処理を追加する方法を学びます",
      "tutorialSlides": [
              {
                      "title": "if-else文とは",
                      "content": "# 「もし〜でなければ」\\n\\n条件が成り立たないときの処理を書けます。\\n\\n```java\\nif (age >= 20) {\\n    // 成人\\n} else {\\n    // 未成年\\n}\\n```"
              },
              {
                      "title": "else の使い方",
                      "content": "# 2つの道\\n\\n```java\\nif (score >= 60) {\\n    System.out.println(\"合格\");\\n} else {\\n    System.out.println(\"不合格\");\\n}\\n```\\n\\n条件によって実行する処理を分けられます。"
              }
      ],
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n// int mainでmain関数を定義\\nint main() {\\n    // int xでxを宣言し10を代入\\n    int x = 10;\\n    // ifでxが5より大きいか判定\\n    if (x > 5) {\\n        // printfで「大きい」を出力\\n        printf(\"大きい\\n\");\\n    // elseで条件を満たさない場合\\n    } else {\\n        // printfで「小さい」を出力\\n        printf(\"小さい\\n\");\\n    // if-elseブロックを閉じる\\n    }\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}",
      "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n// int mainでmain関数を定義\\n___ ___() {\\n    // int xでxを宣言し10を代入\\n    ___ ___ = ___;\\n    // ifでxが5より大きいか判定\\n    ___ (___ ___ ___) {\\n        // printfで「大きい」を出力\\n        ___(\"___\");\\n    // elseで条件を満たさない場合\\n    } ___ {\\n        // printfで「小さい」を出力\\n        ___(\"___\");\\n    // if-elseブロックを閉じる\\n    ___\\n    // return 0で正常終了を返す\\n    return ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // int xでxを宣言し10を代入",
          "    int x = 10;",
          "    // ifでxが5より大きいか判定",
          "    if (x > 5) {",
          "        // printfで「大きい」を出力",
          "        printf(\"大きい\\n\");",
          "    // elseで条件を満たさない場合",
          "    } else {",
          "        // printfで「小さい」を出力",
          "        printf(\"小さい\\n\");",
          "    // if-elseブロックを閉じる",
          "    }",
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
          "else",
          "if",
          "elif"
        ],
        "others": ["stdio.h", "main", "10", "0", ">", "printf", "\");", "}", "{", "include", "int", "x", "5", "大きい", "小さい", "se {", "return"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "大きい\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "論理演算子（&&、||）",
      "description": "複数の条件を組み合わせる方法を学びます",
      "tutorialSlides": [
              {
                      "title": "論理演算子とは",
                      "content": "# 条件を組み合わせよう\\n\\n- **&&** 「かつ」（両方true）\\n- **||** 「または」（どちらかtrue）\\n\\n```c\\nif (a > 0 && b > 0) {\\n    // 両方が正の数\\n}\\n```"
              },
              {
                      "title": "使い方の例",
                      "content": "# && と ||\\n\\n```c\\n// 両方の条件を満たす\\nif (age >= 18 && age <= 65) {\\n    // 働ける年齢\\n}\\n\\n// どちらかを満たす\\nif (day == 6 || day == 0) {\\n    // 週末\\n}\\n```"
              }
      ],
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n// int mainでmain関数を定義\\nint main() {\\n    // int scoreでscoreを宣言し85を代入\\n    int score = 85;\\n    // ifと&&でscoreが80以上かつ100以下か判定\\n    if (score >= 80 && score <= 100) {\\n        // printfで「ごうかく」を出力\\n        printf(\"ごうかく\\n\");\\n    // ifブロックを閉じる\\n    }\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}",
      "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n// int mainでmain関数を定義\\n___ ___() {\\n    // int scoreでscoreを宣言し85を代入\\n    ___ ___ = ___;\\n    // ifと&&でscoreが80以上かつ100以下か判定\\n    ___ (___ >= ___ ___ ___ <= ___) {\\n        // printfで「ごうかく」を出力\\n        ___(\"___\");\\n    // ifブロックを閉じる\\n    ___\\n    // return 0で正常終了を返す\\n    return ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // int scoreでscoreを宣言し85を代入",
          "    int score = 85;",
          "    // ifと&&でscoreが80以上かつ100以下か判定",
          "    if (score >= 80 && score <= 100) {",
          "        // printfで「ごうかく」を出力",
          "        printf(\"ごうかく\\n\");",
          "    // ifブロックを閉じる",
          "    }",
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
          "&&",
          "||",
          "!"
        ],
        "others": ["stdio.h", "main", "85", "0", "80", "100", "printf", "\");", "}", "include", "int", "score", "ごうかく", "return 0;", "if"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "ごうかく\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "ぐるぐる回す for文",
      "description": "同じ処理を何度も実行する「繰り返し」を学びます",
      "tutorialSlides": [
              {
                      "title": "for文とは",
                      "content": "# 同じことを繰り返す\\n\\nfor文で指定した回数だけ処理を繰り返せます。\\n\\n```c\\nfor (int i = 0; i < 5; i++) {\\n    printf(\"%d \", i);\\n}\\n// 0 1 2 3 4\\n```"
              },
              {
                      "title": "for文の3つの部分",
                      "content": "# 初期化・条件・更新\\n\\n```c\\nfor (初期化; 条件; 更新) {\\n    // 繰り返す処理\\n}\\n```\\n\\n1. **初期化**: カウンタを設定\\n2. **条件**: 続ける条件\\n3. **更新**: 1回ごとの変化"
              }
      ],
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n// int mainでmain関数を定義\\nint main() {\\n    // forでiを0から2までループ（i < 3）\\n    for (int i = 0; i < 3; i++) {\\n        // printfでiを出力\\n        printf(\"%d\\n\", i);\\n    // forブロックを閉じる\\n    }\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}",
      "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n// int mainでmain関数を定義\\n___ ___() {\\n    // forでiを0から2までループ（i < 3）\\n    ___ (___ ___ = ___; ___ < ___; ___++) {\\n        // printfでiを出力\\n        ___(\"___\", ___);\\n    // forブロックを閉じる\\n    ___\\n    // return 0で正常終了を返す\\n    return ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // forでiを0から2までループ（i < 3）",
          "    for (int i = 0; i < 3; i++) {",
          "        // printfでiを出力",
          "        printf(\"%d\\n\", i);",
          "    // forブロックを閉じる",
          "    }",
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
          "for",
          "while",
          "do"
        ],
        "others": ["stdio.h", "main", "i", "0", "3", "printf", "\", i);", "}", "include", "int", "%d", "%d\\n\", i);", "// 正常終了を示す0を返す"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "0\\n1\\n2\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "データをまとめましょう「構造体」",
      "description": "データをまとめましょう「構造体」の仕組みと使い方を学びます",
      "tutorialSlides": [
              {
                      "title": "構造体とは",
                      "content": "# 関連するデータをまとめる\\n\\n構造体は複数のデータを1つにまとめられます。\\n\\n```c\\nstruct Person {\\n    char name[20];\\n    int age;\\n};\\n```"
              },
              {
                      "title": "構造体の使い方",
                      "content": "# 構造体変数を作る\\n\\n```c\\nstruct Person p;\\np.age = 12;\\nstrcpy(p.name, \"太郎\");\\n\\nprintf(\"%s\", p.name);  // 太郎\\n```\\n\\nドット(.)でメンバにアクセス！"
              }
      ],
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n// struct PointでPoint構造体を定義\\nstruct Point {\\n    // int xでxメンバを宣言\\n    int x;\\n    // int yでyメンバを宣言\\n    int y;\\n// 構造体定義を閉じる\\n};\\n// int mainでmain関数を定義\\nint main() {\\n    // struct Point pでPoint型の変数pを宣言\\n    struct Point p;\\n    // pのxメンバに10を代入\\n    p.x = 10;\\n    // printfでpのxメンバを出力\\n    printf(\"%d\\n\", p.x);\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}",
      "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n// struct PointでPoint構造体を定義\\n___ ___ {\\n    // int xでxメンバを宣言\\n    ___ ___;\\n    // int yでyメンバを宣言\\n    ___ ___;\\n// 構造体定義を閉じる\\n___;\\n// int mainでmain関数を定義\\n___ ___() {\\n    // struct Point pでPoint型の変数pを宣言\\n    ___ ___ ___;\\n    // pのxメンバに10を代入\\n    ___.___ = ___;\\n    // printfでpのxメンバを出力\\n    ___(\"___\", ___.___);\\n    // return 0で正常終了を返す\\n    return ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "// struct PointでPoint構造体を定義",
          "struct Point {",
          "    // int xでxメンバを宣言",
          "    int x;",
          "    // int yでyメンバを宣言",
          "    int y;",
          "// 構造体定義を閉じる",
          "};",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // struct Point pでPoint型の変数pを宣言",
          "    struct Point p;",
          "    // pのxメンバに10を代入",
          "    p.x = 10;",
          "    // printfでpのxメンバを出力",
          "    printf(\"%d\\n\", p.x);",
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
          "",
          null,
          ""
        ],
      "candidates": {
        "others": ["stdio.h", "main", "p", "10", "x", "0", "Point", "y", "};", "printf", "\", p.x);", "}", "include", "int", "%d", "ainはプログラムのエントリーポイント", "// Point型の変数pを作成する", "// pのxメンバに10を代入する", "値を表示する", "// 正常終了を示す0を返す", "struct"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "自分だけの関数を作ろう",
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "関数とは？",
          "content": "# オリジナルの技を作ろう\\n\\n何度も使う手順をまとめて名前をつけたものを **関数** と呼びます。\\n\\n**身近な例え：**\\n「朝の準備」という言葉を聞くだけで、「顔を洗う→歯を磨く→着替える」という一連の動作がわかりますよね。\\n\\n関数も同じです！複数の処理をまとめて名前をつけておけば、その名前を呼ぶだけで全部やってくれます。\\n\\n一度作れば、「アレやって！」と名前を呼ぶだけで何度でも実行できる、便利なショートカットのようなものです。"
        },
        {
          "title": "関数を定義しましょう",
          "content": "# 手順をまとめる\\n\\nやりたいことをひとまとめにして、名前をつけることができます。\\n一度作っておけば、呼び出すだけでいつでも動かせます。\\n\\n**実際のコードを見てみましょう：**\\n```c\\n// 「aisatsu」という関数を作る（定義する）\\nvoid aisatsu() {\\n    printf(\"ヤッホー\\n\");\\n}\\n\\n// mainの中で呼ぶ（使う）\\naisatsu();  // これで「ヤッホー」と表示される\\n```\\n\\n**ポイント：**\\n- `void`（ボイド）は「何も返さない」という意味です\\n- 関数名のあとに `()` 丸かっこをつけるのがルールです\\n- `{ }` の中に、やりたい処理を書きます"
        }
      ],
      "correctCode": "// #includeでstdio.hを読み込む\\n#include <stdio.h>\\n// void greetでgreet関数を定義\\nvoid greet() {\\n    // printfで「Hello」を出力\\n    printf(\"Hello\\n\");\\n// greet関数を閉じる\\n}\\n// int mainでmain関数を定義\\nint main() {\\n    // greet関数を呼び出す\\n    greet();\\n    // return 0で正常終了を返す\\n    return 0;\\n// ブロックを閉じる\\n}",
      "holeyCode": "// #includeでstdio.hを読み込む\\n#___ <___>\\n// void greetでgreet関数を定義\\n___ ___() {\\n    // printfで「Hello」を出力\\n    ___(\"___\");\\n// greet関数を閉じる\\n___\\n// int mainでmain関数を定義\\n___ ___() {\\n    // greet関数を呼び出す\\n    ___();\\n    // return 0で正常終了を返す\\n    return ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// #includeでstdio.hを読み込む",
          "#include <stdio.h>",
          "// void greetでgreet関数を定義",
          "void greet() {",
          "    // printfで「Hello」を出力",
          "    printf(\"Hello\\n\");",
          "// greet関数を閉じる",
          "}",
          "// int mainでmain関数を定義",
          "int main() {",
          "    // greet関数を呼び出す",
          "    greet();",
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
        "others": ["stdio.h", "greet", "0", "printf", "\");", "}", "main", "include", "int", "void", "Hello", "Hello\\n\");", "// mainはプログラムのエントリーポイント", "// greet関数を呼び出す", "// 正常終了を示す0を返す"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello\\n"
        }
      ],
      "initialDisplayMode": "holey"
    }
  ]
};
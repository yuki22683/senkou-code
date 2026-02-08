export const cData = {
  "language": "c",
  "lessonId": "c-1",
  "lessonTitle": "C (シー) 言語に挑戦！",
  "lessonDescription": "たくさんのプログラミング言語のもとになった「C（シー）言語」のきほんを学びましょう。コンピュータに正しい手順で指示を出す方法を身につけます。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面に文字を出してみましょう",
      "description": "C言語を使って画面に「こんにちは」と表示させてみましょう。printf（プリントエフ）という関数（かんすう）を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "C言語とは？",
          "content": "# すべての言語の「お父さん」\\n\\nC言語（シーげんご）は、今から50年以上前に作られたとても歴史（れきし）のあるプログラミング言語です。\\n\\n**身近な例え：**\\nC言語は「プログラミング言語の家系図」でいうと、一番上のご先祖様のような存在です！\\n\\n今のスマホやパソコンを動かしている「OS（オーエス）」という、コンピュータの「脳みそ」のような大事な部分は、ほとんどこのC言語で作られています。\\n\\nまさに、コンピュータ界の「お父さん」のような存在です！"
        },
        {
          "title": "C言語の「きまり文句」",
          "content": "# 最初に書く「おまじない」\\n\\nC言語を動かすには、必ず書かなければいけない「お約束」があります。\\n\\n**1. `#include <stdio.h>`（インクルード・スタンダード・アイオー・エイチ）：**\\n「画面に文字を出す道具」を用意する呪文（じゅもん）です。図書館から本を借りてくるようなイメージです！\\n\\n**2. `int main() { ... }`（イント・メイン）：**\\n「ここからプログラムが始まりますよ！」という合図です。本の「第1章」のようなものです。\\n\\n**実際のコードを見てみましょう：**\\n```c\\n#include <stdio.h>\\nint main() {\\n    printf(\"C言語は楽しい！\\n\");\\n    return 0;\\n}\\n```\\n\\n`printf`（プリントエフ）は「画面に文字を表示してね」という命令です。\\n`return 0`（リターン・ゼロ）は「うまくいきました！」という報告です。\\n\\nこの形を覚えてしまいましょう！"
        }
      ],
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // Hello, World!を表示する\\n    printf(\"Hello, World!\\n\");\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // Hello, World!を表示する\\n    printf(\"Hello, World!\\n\");\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
        "// 標準入出力ライブラリを読み込む",
        "#include <stdio.h>",
        "// mainはプログラムのエントリーポイント",
        "int main() {",
        "    // Hello, World!を表示する",
        "    printf(\"Hello, World!\\n\");",
        "    // 正常終了を示す0を返す",
        "    return 0;",
        "}"
      ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの開始点を定義します。",
          null,
          null,
          null,
          "正常終了を示します。",
          "ここを正しく入力してください。"
        ],
      "candidates": {
        "functions": [
          "printf"
        ],
        "strings": [
          "Hello, World!"
        ],
        "others": [
          "stdio.h",
          "main",
          "0"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, World!\
"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "数字を入れる「はこ」int",
      "description": "数字をしまっておく「はこ」を使ってみましょう。C言語では、はこに入れるものの種類（ラベル）を先に決める必要があります。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "変数（へんすう）とは？",
          "content": "# データを保存する「はこ」\\n\\nプログラミングでは、数字や文字をしまっておく「はこ」を作ることができます。\\nこの「はこ」のことを **変数（へんすう）** と呼びます。\\n\\n**身近な例え：**\\nおもちゃ箱に「ブロック入れ」「ぬいぐるみ入れ」と名前をつけるように、プログラムでも「はこ」に名前をつけて、中身が何かわかるようにしておきます！\\n\\n例えば、「点数」を入れておきたいなら `score` という名前の「はこ」を作ります。"
        },
        {
          "title": "ラベル（型）が必要です",
          "content": "# int（イント）ラベル\\n\\nC言語では、「はこ」を作るとき、「何を入れるか」を先に決めておく必要があります。これを **型（かた）** または **ラベル** と呼びます。\\n\\n**整数（せいすう）**（1, 2, 3 のような小数点のない数字）を入れたいときは、`int`（イント）というラベルを貼ります。\\n\\n**画面に表示するときの約束：**\\n`%d` という記号を使います。これは「ここに数字（Decimal＝デシマル、10進数の意味）が入るよ！」という目印です。\\n\\n**実際のコードを見てみましょう：**\\n```c\\nint count = 10;  // 「count」という名前の「はこ」に10を入れる\\nprintf(\"%d\\n\", count);  // countの中身を表示する\\n```\\n=> 10 と表示されます"
        }
      ],
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // xに10を代入する\\n    int x = 10;\\n    // xの値を表示する\\n    printf(\"%d\\n\", x);\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // xに10を代入する\\n    int x = ___;\\n    // xの値を表示する\\n    printf(\"%d\\n\", x);\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
        "// 標準入出力ライブラリを読み込む",
        "#include <stdio.h>",
        "// mainはプログラムのエントリーポイント",
        "int main() {",
        "    // xに10を代入する",
        "    int x = 10;",
        "    // xの値を表示する",
        "    printf(\"%d\\n\", x);",
        "    // 正常終了を示す0を返す",
        "    return 0;",
        "}"
      ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "整数型の変数を宣言します。",
          null,
          null,
          null,
          "正常終了を示します。",
          "ここを正しく入力してください。"
        ],
      "candidates": {
        "others": [
          "stdio.h",
          "main",
          "10",
          "x",
          "0"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\
"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "コンピュータで計算しましょう",
      "description": "C言語を使って、ひき算をしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "計算はコンピュータにお任せ",
          "content": "# 超高速な計算処理\\n\\nコンピュータは人間よりもずっと速く、正確に計算できます。\\n\\n**身近な例え：**\\nそろばんの名人でも、1秒間に数個の計算が限界ですが、コンピュータは1秒間に何十億回もの計算ができます！"
        },
        {
          "title": "計算の記号",
          "content": "# 計算の記号\\n\\nC言語でも、こんな記号を使って計算をします。\\n\\n- **+** : たし算\\n- **-** : ひき算\\n- **\\*** : かけ算\\n- **/** : わり算"
        }
      ],
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // aに10を代入する\\n    int a = 10;\\n    // bに3を代入する\\n    int b = 3;\\n    // a - bの結果を表示する\\n    printf(\"%d\\n\", a - b);\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // aに10を代入する\\n    int a = ___;\\n    // bに3を代入する\\n    int b = ___;\\n    // a - bの結果を表示する\\n    printf(\"%d\\n\", a - b);\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
        "// 標準入出力ライブラリを読み込む",
        "#include <stdio.h>",
        "// mainはプログラムのエントリーポイント",
        "int main() {",
        "    // aに10を代入する",
        "    int a = 10;",
        "    // bに3を代入する",
        "    int b = 3;",
        "    // a - bの結果を表示する",
        "    printf(\"%d\\n\", a - b);",
        "    // 正常終了を示す0を返す",
        "    return 0;",
        "}"
      ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "変数aに10を代入します。",
          null,
          "変数bに3を代入します。",
          null,
          null,
          null,
          "正常終了を示します。",
          "ここを正しく入力してください。"
        ],
      "candidates": {
        "operators": [
          "-",
          "+",
          "*",
          "/"
        ],
        "others": [
          "stdio.h",
          "main",
          "10",
          "3",
          "0"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "7\
"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "剰余演算子（%）",
      "description": "余りを求める「剰余演算子（じょうよえんざんし）」を使ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "余りを求める",
          "content": "# 剰余演算子 %\\n\\n割り算の「余り」を求めるには `%` を使います。\\n\\n**コード例：**\\n```c\\nprintf(\"%d\\n\", 7 % 3);  // 1（7÷3=2あまり1）\\n```"
        }
      ],
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // 10 % 3の結果を表示する\\n    printf(\"%d\\n\", 10 % 3);\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // 10 % 3の結果を表示する\\n    printf(\"%d\\n\", 10 % 3);\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
        "// 標準入出力ライブラリを読み込む",
        "#include <stdio.h>",
        "// mainはプログラムのエントリーポイント",
        "int main() {",
        "    // 10 % 3の結果を表示する",
        "    printf(\"%d\\n\", 10 % 3);",
        "    // 正常終了を示す0を返す",
        "    return 0;",
        "}"
      ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの開始点を定義します。",
          null,
          null,
          null,
          "正常終了を示します。",
          "ここを正しく入力してください。"
        ],
      "candidates": {
        "operators": [
          "%",
          "/",
          "*",
          "+"
        ],
        "others": [
          "stdio.h",
          "main",
          "0"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\
"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "累算代入演算子（+=、-=）",
      "description": "変数に値を足したり引いたりする便利な書き方を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "累算代入演算子",
          "content": "# 省略した書き方\\n\\n`score = score + 10` は `score += 10` と書けます。\\n\\n**コード例：**\\n```c\\nint x = 5;\\nx += 3;  // x = x + 3 と同じ\\n```"
        }
      ],
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // scoreに80を代入する\\n    int score = 80;\\n    // scoreに10を加算する\\n    score += 10;\\n    // scoreの値を表示する\\n    printf(\"%d\\n\", score);\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // scoreに80を代入する\\n    int score = ___;\\n    // scoreに10を加算する\\n    score += ___;\\n    // scoreの値を表示する\\n    printf(\"%d\\n\", score);\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
        "// 標準入出力ライブラリを読み込む",
        "#include <stdio.h>",
        "// mainはプログラムのエントリーポイント",
        "int main() {",
        "    // scoreに80を代入する",
        "    int score = 80;",
        "    // scoreに10を加算する",
        "    score += 10;",
        "    // scoreの値を表示する",
        "    printf(\"%d\\n\", score);",
        "    // 正常終了を示す0を返す",
        "    return 0;",
        "}"
      ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "変数を初期化します。",
          null,
          "累算代入演算子で加算します。",
          null,
          null,
          null,
          "正常終了を示します。",
          "ここを正しく入力してください。"
        ],
      "candidates": {
        "operators": [
          "+=",
          "-=",
          "*=",
          "/="
        ],
        "others": ["stdio.h", "main", "80", "score", "0", "10"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "90\
"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "文章の中に「はこ」を入れましょう",
      "description": "文章の中に変数の値を埋め込んでみましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "文字列の中に変数を入れる",
          "content": "# %d で数値を埋め込む\\n\\n文字列の中に `%d` を入れると、その位置に数値が入ります。\\n\\n**コード例：**\\n```c\\nint age = 10;\\nprintf(\"私は %d 歳です\\n\", age);\\n```"
        }
      ],
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // ageに12を代入する\\n    int age = 12;\\n    // 「私は12歳です」と表示する\\n    printf(\"私は %d 歳です\\n\", age);\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // ageに12を代入する\\n    int age = ___;\\n    // 「私は12歳です」と表示する\\n    printf(\"私は %d 歳です\\n\", age);\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
        "// 標準入出力ライブラリを読み込む",
        "#include <stdio.h>",
        "// mainはプログラムのエントリーポイント",
        "int main() {",
        "    // ageに12を代入する",
        "    int age = 12;",
        "    // 「私は12歳です」と表示する",
        "    printf(\"私は %d 歳です\\n\", age);",
        "    // 正常終了を示す0を返す",
        "    return 0;",
        "}"
      ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "変数を初期化します。",
          null,
          null,
          null,
          "正常終了を示します。",
          "ここを正しく入力してください。"
        ],
      "candidates": {
        "others": [
          "stdio.h",
          "main",
          "12",
          "age",
          "0"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "私は 12 歳です\
"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "データをならべる「配列」",
      "description": "複数のデータをまとめて管理する「配列」を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "配列とは？",
          "content": "# データの「棚」\\n\\n配列は、同じ種類のデータを順番に並べて保存する仕組みです。\\n\\n**コード例：**\\n```c\\nint nums[3] = {10, 20, 30};\\nprintf(\"%d\\n\", nums[1]);  // 20（インデックス1）\\n```"
        }
      ],
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // 配列numsを初期化する\\n    int nums[3] = {10, 20, 30};\\n    // nums[1]を表示する（インデックス1は20）\\n    printf(\"%d\\n\", nums[1]);\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // 配列numsを初期化する\\n    int nums[___] = {10, 20, 30};\\n    // nums[1]を表示する（インデックス1は20）\\n    printf(\"%d\\n\", nums[1]);\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
        "// 標準入出力ライブラリを読み込む",
        "#include <stdio.h>",
        "// mainはプログラムのエントリーポイント",
        "int main() {",
        "    // 配列numsを初期化する",
        "    int nums[3] = {10, 20, 30};",
        "    // nums[1]を表示する（インデックス1は20）",
        "    printf(\"%d\\n\", nums[1]);",
        "    // 正常終了を示す0を返す",
        "    return 0;",
        "}"
      ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "配列を宣言して初期化します。",
          null,
          null,
          null,
          "正常終了を示します。",
          "ここを正しく入力してください。"
        ],
      "candidates": {
        "numbers": [
          "0",
          "1",
          "2"
        ],
        "others": ["stdio.h", "main", "3"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "20\
"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "「もし〜なら」で分ける if文",
      "description": "条件によって処理を分岐させる「if文」を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "条件分岐",
          "content": "# if文で条件分岐\\n\\n条件が真のときだけ処理を実行します。\\n\\n**コード例：**\\n```c\\nif (score >= 80) {\\n    printf(\"合格！\\n\");\\n}\\n```"
        }
      ],
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // scoreに85を代入する\\n    int score = 85;\\n    // scoreが80以上ならPassと表示する\\n    if (score >= 80) {\\n        printf(\"Pass\\n\");\\n    }\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // scoreに85を代入する\\n    int score = ___;\\n    // scoreが80以上ならPassと表示する\\n    if (score ___ 80) {\\n        printf(\"Pass\\n\");\\n    ___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
        "// 標準入出力ライブラリを読み込む",
        "#include <stdio.h>",
        "// mainはプログラムのエントリーポイント",
        "int main() {",
        "    // scoreに85を代入する",
        "    int score = 85;",
        "    // scoreが80以上ならPassと表示する",
        "    if (score >= 80) {",
        "        printf(\"Pass\\n\");",
        "    }",
        "    // 正常終了を示す0を返す",
        "    return 0;",
        "}"
      ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "変数を初期化します。",
          null,
          "条件分岐を開始します。",
          null,
          null,
          "ここを正しく入力してください。",
          "正常終了を示します。",
          "ここを正しく入力してください。"
        ],
      "candidates": {
        "keywords": [
          "if",
          "else",
          "while"
        ],
        "others": ["stdio.h", "main", "85", "0", ">=", "// 正常終了を示す0を返す"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Pass\
"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "ちがう場合は？ if-else文",
      "description": "条件が真の場合と偽の場合で異なる処理を行う「if-else文」を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "if-else文",
          "content": "# else で「そうでなければ」\\n\\n条件が偽のときの処理も指定できます。\\n\\n**コード例：**\\n```c\\nif (x > 5) {\\n    printf(\"大きい\\n\");\\n} else {\\n    printf(\"小さい\\n\");\\n}\\n```"
        }
      ],
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // xに10を代入する\\n    int x = 10;\\n    // xが5より大きいか判定する\\n    if (x > 5) {\\n        printf(\"Big\\n\");\\n    } else {\\n        printf(\"Small\\n\");\\n    }\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // xに10を代入する\\n    int x = ___;\\n    // xが5より大きいか判定する\\n    if (x ___ 5) {\\n        printf(\"Big\\n\");\\n    } ___ {\\n        printf(\"Small\\n\");\\n    ___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
        "// 標準入出力ライブラリを読み込む",
        "#include <stdio.h>",
        "// mainはプログラムのエントリーポイント",
        "int main() {",
        "    // xに10を代入する",
        "    int x = 10;",
        "    // xが5より大きいか判定する",
        "    if (x > 5) {",
        "        printf(\"Big\\n\");",
        "    } else {",
        "        printf(\"Small\\n\");",
        "    }",
        "    // 正常終了を示す0を返す",
        "    return 0;",
        "}"
      ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "変数を初期化します。",
          null,
          "条件分岐を開始します。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "正常終了を示します。",
          null
        ],
      "candidates": {
        "keywords": [
          "else",
          "if",
          "elif"
        ],
        "others": ["stdio.h", "main", "10", "0", ">", "return 0;"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Big\
"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "論理演算子（&&、||）",
      "description": "複数の条件を組み合わせる「論理演算子」を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "論理演算子",
          "content": "# &&（かつ）と ||（または）\\n\\n複数の条件を組み合わせられます。\\n\\n- `&&` : 両方が真のときに真\\n- `||` : どちらかが真のときに真"
        }
      ],
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // scoreに85を代入する\\n    int score = 85;\\n    // scoreが80以上かつ100以下ならPassと表示する\\n    if (score >= 80 && score <= 100) {\\n        printf(\"Pass\\n\");\\n    }\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // scoreに85を代入する\\n    int score = ___;\\n    // scoreが80以上かつ100以下ならPassと表示する\\n    if (score >= ___ && score <= 100) {\\n        printf(\"Pass\\n\");\\n    ___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
        "// 標準入出力ライブラリを読み込む",
        "#include <stdio.h>",
        "// mainはプログラムのエントリーポイント",
        "int main() {",
        "    // scoreに85を代入する",
        "    int score = 85;",
        "    // scoreが80以上かつ100以下ならPassと表示する",
        "    if (score >= 80 && score <= 100) {",
        "        printf(\"Pass\\n\");",
        "    }",
        "    // 正常終了を示す0を返す",
        "    return 0;",
        "}"
      ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "変数を初期化します。",
          null,
          "&&で「かつ」を表現します。",
          null,
          null,
          "ここを正しく入力してください。",
          "正常終了を示します。",
          "ここを正しく入力してください。"
        ],
      "candidates": {
        "operators": [
          "&&",
          "||",
          "!"
        ],
        "others": ["stdio.h", "main", "85", "0", "80", "// 正常終了を示す0を返す"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Pass\
"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "ぐるぐる回す for文",
      "description": "繰り返し処理を行う「for文」を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 11,
      "tutorialSlides": [
        {
          "title": "for文",
          "content": "# 繰り返し処理\\n\\nfor文で同じ処理を繰り返します。\\n\\n**コード例：**\\n```c\\nfor (int i = 0; i < 3; i++) {\\n    printf(\"%d\\n\", i);\\n}\\n```"
        }
      ],
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // iが0から2までループする\\n    for (int i = 0; i < 3; i++) {\\n        // iの値を表示する\\n        printf(\"%d\\n\", i);\\n    }\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // iが0から2までループする\\n    for (int i = ___; i < 3; i++) {\\n        // iの値を表示する\\n        printf(\"%d\\n\", i);\\n    ___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
        "// 標準入出力ライブラリを読み込む",
        "#include <stdio.h>",
        "// mainはプログラムのエントリーポイント",
        "int main() {",
        "    // iが0から2までループする",
        "    for (int i = 0; i < 3; i++) {",
        "        // iの値を表示する",
        "        printf(\"%d\\n\", i);",
        "    }",
        "    // 正常終了を示す0を返す",
        "    return 0;",
        "}"
      ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "forで繰り返し処理を開始します。",
          null,
          null,
          null,
          "ここを正しく入力してください。",
          "正常終了を示します。",
          "ここを正しく入力してください。"
        ],
      "candidates": {
        "keywords": [
          "for",
          "while",
          "do"
        ],
        "others": ["stdio.h", "main", "i", "0", "// 正常終了を示す0を返す"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "0\
1\
2\
"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "データをまとめましょう「構造体」",
      "description": "複数のデータをまとめる「構造体」を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 12,
      "tutorialSlides": [
        {
          "title": "構造体とは？",
          "content": "# 複数のデータをまとめる\\n\\n構造体は、異なる種類のデータをひとまとめにできます。\\n\\n**コード例：**\\n```c\\nstruct Point {\\n    int x;\\n    int y;\\n};\\n```"
        }
      ],
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// Point構造体を定義する\\nstruct Point {\\n    int x;\\n    int y;\\n};\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // Point型の変数pを作成する\\n    struct Point p;\\n    // p.xに10を代入する\\n    p.x = 10;\\n    // p.xの値を表示する\\n    printf(\"%d\\n\", p.x);\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// Point構造体を定義する\\nstruct ___ {\\n    int ___;\\n    int ___;\\n___\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // Point型の変数pを作成する\\n    struct Point ___;\\n    // p.xに10を代入する\\n    p.x = ___;\\n    // p.xの値を表示する\\n    printf(\"%d\\n\", p.x);\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
        "// 標準入出力ライブラリを読み込む",
        "#include <stdio.h>",
        "// Point構造体を定義する",
        "struct Point {",
        "    int x;",
        "    int y;",
        "};",
        "// mainはプログラムのエントリーポイント",
        "int main() {",
        "    // Point型の変数pを作成する",
        "    struct Point p;",
        "    // p.xに10を代入する",
        "    p.x = 10;",
        "    // p.xの値を表示する",
        "    printf(\"%d\\n\", p.x);",
        "    // 正常終了を示す0を返す",
        "    return 0;",
        "}"
      ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "構造体（Point）を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "構造体の変数を宣言します。",
          null,
          "メンバに値を代入します。",
          null,
          null,
          null,
          "正常終了を示します。",
          "ここを正しく入力してください。"
        ],
      "candidates": {
        "others": ["stdio.h", "main", "p", "10", "x", "0", "Point", "y", "};"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\
"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "自分だけの関数を作ろう",
      "description": "自分で関数を定義してみましょう。",
      "difficulty": "easy",
      "orderIndex": 13,
      "tutorialSlides": [
        {
          "title": "関数の定義",
          "content": "# 自分の関数を作る\\n\\n同じ処理を何度も使いたいときは、関数にまとめます。\\n\\n**コード例：**\\n```c\\nvoid greet() {\\n    printf(\"Hello!\\n\");\\n}\\n```"
        }
      ],
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// greet関数を定義する\\nvoid greet() {\\n    // Helloと表示する\\n    printf(\"Hello\\n\");\\n}\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // greet関数を呼び出す\\n    greet();\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// greet関数を定義する\\nvoid ___() {\\n    // Helloと表示する\\n    printf(\"Hello\\n\");\\n___\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // greet関数を呼び出す\\n    ___();\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
        "// 標準入出力ライブラリを読み込む",
        "#include <stdio.h>",
        "// greet関数を定義する",
        "void greet() {",
        "    // Helloと表示する",
        "    printf(\"Hello\\n\");",
        "}",
        "// mainはプログラムのエントリーポイント",
        "int main() {",
        "    // greet関数を呼び出す",
        "    greet();",
        "    // 正常終了を示す0を返す",
        "    return 0;",
        "}"
      ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "戻り値のない関数を定義します。",
          null,
          null,
          null,
          "ここを正しく入力してください。",
          "プログラムの開始点を定義します。",
          "ここを正しく入力してください。",
          "定義した関数を呼び出します。",
          "ここを正しく入力してください。",
          "正常終了を示します。",
          "ここを正しく入力してください。"
        ],
      "candidates": {
        "others": ["stdio.h", "greet", "0", "// mainはプログラムのエントリーポイント", "// greet関数を呼び出す", "// 正常終了を示す0を返す"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello\
"
        }
      ],
      "initialDisplayMode": "holey"
    }
  ]
};
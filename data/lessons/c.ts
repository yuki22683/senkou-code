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
          "image": "/illustrations/common/monitor.png",
          "content": "# すべての言語の「お父さん」\n\nC言語（シーげんご）は、今から50年以上前に作られたとても歴史（れきし）のあるプログラミング言語です。\n\n**身近な例え：**\nC言語は「プログラミング言語の家系図」でいうと、一番上のご先祖様のような存在です！\n\n今のスマホやパソコンを動かしている「OS（オーエス）」という、コンピュータの「脳みそ」のような大事な部分は、ほとんどこのC言語で作られています。\n\nまさに、コンピュータ界の「お父さん」のような存在です！"
        },
        {
          "title": "C言語の「きまり文句」",
          "image": "/illustrations/common/monitor.png",
          "content": "# 最初に書く「おまじない」\n\nC言語を動かすには、必ず書かなければいけない「お約束」があります。\n\n**1. `#include <stdio.h>`（インクルード・スタンダード・アイオー・エイチ）：**\n「画面に文字を出す道具」を用意する呪文（じゅもん）です。図書館から本を借りてくるようなイメージです！\n\n**2. `int main() { ... }`（イント・メイン）：**\n「ここからプログラムが始まりますよ！」という合図です。本の「第1章」のようなものです。\n\n**実際のコードを見てみましょう：**\n```c\n#include <stdio.h>\nint main() {\n    printf(\"C言語は楽しい！\\n\");\n    return 0;\n}\n```\n\n`printf`（プリントエフ）は「画面に文字を表示してね」という命令です。\n`return 0`（リターン・ゼロ）は「うまくいきました！」という報告です。\n\nこの形を覚えてしまいましょう！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    // 画面にメッセージを出す関数\n    printf(\"Hello, World!\\n\");\n    return 0;\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\n___\n// プログラムのエントリーポイントを定義する\n___\n    // printf関数でHello, World!を表示する\n    ___\n    // 正常終了を示す値0を返す\n    ___\n// 関数の終わり\n___",
      "correctLines": [
        "// 標準入出力ライブラリを読み込む",
        "#include <stdio.h>",
        "// プログラムのエントリーポイントを定義する",
        "int main() {",
        "    // printf関数でHello, World!を表示する",
        "    printf(\"Hello, World!\\n\");",
        "    // 正常終了を示す値0を返す",
        "    return 0;",
        "// 関数の終わり",
        "}"
      ],
      "lineHints": [
        null,
        "#include <stdio.h> で標準入出力を読み込みます。",
        null,
        "int main() { でプログラムの開始を宣言します。",
        null,
        "printf関数で文字列を表示します。",
        null,
        "return 0; で正常終了を返します。",
        null,
        "} で関数を閉じます。"
      ],
      "candidates": {
        "functions": [
          "printf"
        ],
        "strings": [
          "Hello, World!"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, World!"
        }
      ]
    },
    {
      "title": "数字を入れる「はこ」int",
      "description": "数字をしまっておく「はこ」を使ってみましょう。C言語では、はこに入れるものの種類（ラベル）を先に決める必要があります。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "変数（へんすう）とは？",
          "image": "/illustrations/common/box.png",
          "content": "# データを保存する「はこ」\n\nプログラミングでは、数字や文字をしまっておく「はこ」を作ることができます。\nこの「はこ」のことを **変数（へんすう）** と呼びます。\n\n**身近な例え：**\nおもちゃ箱に「ブロック入れ」「ぬいぐるみ入れ」と名前をつけるように、プログラムでも「はこ」に名前をつけて、中身が何かわかるようにしておきます！\n\n例えば、「点数」を入れておきたいなら `score` という名前の「はこ」を作ります。"
        },
        {
          "title": "ラベル（型）が必要です",
          "image": "/illustrations/common/box.png",
          "content": "# int（イント）ラベル\n\nC言語では、「はこ」を作るとき、「何を入れるか」を先に決めておく必要があります。これを **型（かた）** または **ラベル** と呼びます。\n\n**整数（せいすう）**（1, 2, 3 のような小数点のない数字）を入れたいときは、`int`（イント）というラベルを貼ります。\n\n**画面に表示するときの約束：**\n`%d` という記号を使います。これは「ここに数字（Decimal＝デシマル、10進数の意味）が入るよ！」という目印です。\n\n**実際のコードを見てみましょう：**\n```c\nint count = 10;  // 「count」という名前の「はこ」に10を入れる\nprintf(\"%d\\n\", count);  // countの中身を表示する\n```\n=> 10 と表示されます"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    // int（数字）ラベルのはこを作る\n    int x = 10;\n    // 中身を表示する\n    printf(\"%d\\n\", x);\n    return 0;\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\n___\n// プログラムのエントリーポイントを定義する\n___\n    // int型の変数xに10を代入する\n    ___\n    // xの値を%d形式で表示する\n    ___\n    // 正常終了を示す値0を返す\n    ___\n// 関数の終わり\n___",
      "correctLines": [
        "// 標準入出力ライブラリを読み込む",
        "#include <stdio.h>",
        "// プログラムのエントリーポイントを定義する",
        "int main() {",
        "    // int型の変数xに10を代入する",
        "    int x = 10;",
        "    // xの値を%d形式で表示する",
        "    printf(\"%d\\n\", x);",
        "    // 正常終了を示す値0を返す",
        "    return 0;",
        "// 関数の終わり",
        "}"
      ],
      "lineHints": [
        null,
        "#include <stdio.h> で標準入出力を読み込みます。",
        null,
        "int main() { でプログラムの開始を宣言します。",
        null,
        "int x = 10; で変数xに10を代入します。",
        null,
        "printf(\"%d\\n\", x); で変数xの値を表示します。",
        null,
        "return 0; で正常終了を返します。",
        null,
        "} で関数を閉じます。"
      ],
      "candidates": {},
      "testCases": [
        {
          "input": "",
          "expected_output": "10"
        }
      ]
    },
    {
      "title": "コンピュータで計算しましょう",
      "description": "C言語を使って、たし算をしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "算数とプログラミング",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 計算はコンピュータの得意技\n\nコンピュータの一番の得意なことは「正確（せいかく）で速い計算」です。\n\n**身近な例え：**\n人間が電卓（でんたく）を使って計算するより、コンピュータは何百倍も速く計算できます。しかも、どんなに長い時間計算しても疲（つか）れません！\n\nどんなに複雑（ふくざつ）な計算も、プログラミングで指示を出せば一瞬（いっしゅん）で解いてくれます。"
        },
        {
          "title": "計算の記号",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 算数と同じ記号を使います\n\nC言語でも、学校の算数と同じような記号を使って計算します。\n\n**演算子（えんざんし）の一覧：**\n- **+** : たし算（足す）\n- **-** : ひき算（引く）\n- **\\*** : かけ算（かける）※キーボードのアスタリスク\n- **/** : わり算（わる）※キーボードのスラッシュ\n\n**実際のコードを見てみましょう：**\n```c\nint x = 10;  // xに10を入れる\nint y = 20;  // yに20を入れる\n// x と y をたした答えを表示\nprintf(\"%d\\n\", x + y);\n```\n=> 30 と表示されます（10 + 20 = 30）"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    // はこに数字を入れる\n    int a = 5;\n    int b = 3;\n    // たし算した結果を表示する\n    printf(\"%d\\n\", a + b);\n    return 0;\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\n___\n// プログラムのエントリーポイントを定義する\n___\n    // int型の変数aに5を代入する\n    ___\n    // int型の変数bに3を代入する\n    ___\n    // a + b の結果を表示する\n    ___\n    // 正常終了を示す値0を返す\n    ___\n// 関数の終わり\n___",
      "correctLines": [
        "#include <stdio.h>",
        "int main() {",
        "    int a = 5;",
        "    int b = 3;",
        ["    printf(\" %d\\n\", a + b);", "    printf(\" %d\\n\", b + a);"],
        "    return 0;",
        ""
      ],
      "lineHints": [
        "",
        "",
        "a = 5 と入力しましょう。",
        "b = 3 と入力しましょう。",
        "たし算なので `+` を使います。",
        "",
        ""
      ],
      "candidates": {
        "operators": [
          "+"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "8"
        }
      ]
    },
    {
      "title": "剰余演算子（%）",
      "description": "割り算の「あまり」を求める「%」（パーセント）演算子を学びましょう。10を3で割ったあまりは1になります。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "あまりを求める",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 割り算の「あまり」を知りたい！\n\n算数で「10 ÷ 3 = 3 あまり 1」と習いましたよね。\n\n**身近な例え：**\n10個のクッキーを3人で分けると、1人3個ずつもらえて、1個あまります。この「あまりの1個」だけを知りたいときに使うのが `%`（パーセント）記号です。\n\n`%` を使うと、その **あまり** だけを計算してくれます。\nこれを専門用語で「剰余（じょうよ）」と呼びます。"
        },
        {
          "title": "% の使い方",
          "image": "/illustrations/common/robot_math.png",
          "content": "# あまりを計算してみよう\n\n**例1：10を3で割ったあまり**\n```c\nprintf(\"%d\\n\", 10 % 3);  // => 1\n```\n10 ÷ 3 は「3 あまり 1」なので、「1」が表示されます。\n\n**例2：8を2で割ったあまり**\n```c\nprintf(\"%d\\n\", 8 % 2);   // => 0\n```\n8 ÷ 2 は「4 あまり 0」なので、「0」になります。\n\n**ポイント：**\nあまりが0ということは、きれいに割り切れるということです！\n「偶数（ぐうすう）かどうか」を調べるときなどに便利です。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    // 10 を 3 で割ったあまりを出力する\n    printf(\"%d\\n\", 10 % 3);\n    return 0;\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\n___\n// プログラムのエントリーポイントを定義する\n___\n    // 10 % 3（10を3で割った余り）を表示する\n    ___\n    // 正常終了を示す値0を返す\n    ___\n// 関数の終わり\n___",
      "correctLines": [
        "#include <stdio.h>",
        "int main() {",
        "    printf(\" %d\\n\", 10 % 3);",
        "    return 0;",
        ""
      ],
      "lineHints": [
        null,
        null,
        "あまりを求める % 演算子を使います。",
        null,
        null
      ],
      "candidates": {
        "operators": ["%", "+", "-", "*", "/"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1"
        }
      ]
    },
    {
      "title": "累算代入演算子（+=、-=）",
      "description": "変数に値を足したり引いたりして、同じ変数に戻す便利な書き方を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "中身を増やしたいとき",
          "image": "/illustrations/common/box.png",
          "content": "# はこの中身をパワーアップ\n\n「今の点数に10点プラスしたい！」というとき、`+=`（プラスイコール）を使うと便利です。\n\n**身近な例え：**\n貯金箱に500円入っていて、そこに100円を足すようなイメージです。貯金箱の中身が600円になりますよね！\n\nこれは「今の数字に足して、そのまま保存する」という合体技です。\n\n**実際のコードを見てみましょう：**\n```c\nint x = 10;   // xに10を入れる\nx += 5;       // xに5を足して、xに保存（x = x + 5 と同じ意味）\nprintf(\"%d\\n\", x);  // => 15\n```\n\n`x = x + 5` と書くのと同じ意味ですが、`x += 5` の方が短くて楽に書けます！"
        },
        {
          "title": "-= も使える",
          "image": "/illustrations/common/box.png",
          "content": "# 引き算バージョン\n\n`-=`（マイナスイコール）を使えば、「今の数字から引いて保存」ができます。\n\n**身近な例え：**\nおこづかい1000円から300円のお菓子を買うと、残りは700円になりますよね！\n\n**実際のコードを見てみましょう：**\n```c\nint x = 10;   // xに10を入れる\nx -= 3;       // xから3を引いて、xに保存（x = x - 3 と同じ意味）\nprintf(\"%d\\n\", x);  // => 7\n```\n\n**他にもあるよ：**\n- `*=` : かけ算して保存\n- `/=` : わり算して保存"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    // scoreに50を入れる\n    int score = 50;\n    // 10点プラスする\n    score += 10;\n    // 結果を表示\n    printf(\"%d\\n\", score);\n    return 0;\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\n___\n// プログラムのエントリーポイントを定義する\n___\n    // int型の変数scoreに50を代入する\n    ___\n    // scoreに10を加算する（score += 10）\n    ___\n    // scoreの値を表示する\n    ___\n    // 正常終了を示す値0を返す\n    ___\n// 関数の終わり\n___",
      "correctLines": [
        "#include <stdio.h>",
        "int main() {",
        "    int score = 50;",
        "    score += 10;",
        "    printf(\" %d\\n\", score);",
        "    return 0;",
        ""
      ],
      "lineHints": [
        null,
        null,
        "50 と入力しましょう。",
        "+= を使って加算します。",
        null,
        null,
        null
      ],
      "candidates": {
        "operators": ["+=", "-=", "*=", "/="],
        "numbers": ["50", "10"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "60"
        }
      ]
    },
    {
      "title": "文章の中に「はこ」を入れましょう",
      "description": "printf を使って、文章の中に「はこ（変数）」の中身を表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "文章と変数をドッキング",
          "image": "/illustrations/common/fstring.png",
          "content": "# 変数の中身を流し込む\n\n文章の途中に、変数（はこ）の中身を表示したいときがありますよね。\n\n**身近な例え：**\n「○○さん、こんにちは！」の○○に名前を入れるように、文章の中の特定の場所に数字や文字を入れることができます。\n\nC言語では、あらかじめ「ここに数字が入りますよ」という目印（めじるし）を文章の中に置いておきます。この目印が `%d`（パーセント・ディー）です。"
        },
        {
          "title": "%d を使いましょう",
          "image": "/illustrations/common/fstring.png",
          "content": "# ここにデータが入るよ！\n\n`%d`（パーセント・ディー）と書いたところに、後ろに書いた変数の中身が入ります。\n\n**身近な例え：**\n「穴埋（あなう）め問題」と同じです！「今は（　）月です」の（　）に答えを入れるイメージです。\n\n**実際のコードを見てみましょう：**\n```c\nint month = 12;  // monthに12を入れる\nprintf(\"今は %d 月です\\n\", month);\n//      ↑ここに month の中身(12)が入る\n```\n=> 今は 12 月です\n\n**ポイント：**\n`%d` は整数（せいすう）を入れるときに使います。小数点のある数字には `%f` を使います。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    // ageに10を入れる\n    int age = 10;\n    // 文章の中に中身を表示する\n    printf(\"私は %d 歳です\\n\", age);\n    return 0;\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\n___\n// プログラムのエントリーポイントを定義する\n___\n    // int型の変数ageに10を代入する\n    ___\n    // 「私は○歳です」と表示（○にageの値）\n    ___\n    // 正常終了を示す値0を返す\n    ___\n// 関数の終わり\n___",
      "correctLines": [
        "#include <stdio.h>",
        "int main() {",
        "    int age = 10;",
        "    printf(\" 私は %d 歳です\\n\", age);",
        "    return 0;",
        ""
      ],
      "lineHints": [
        "",
        "",
        "age に 10 を入力します。",
        "はこの名前 age を指定します。",
        "",
        ""
      ],
      "candidates": {
        "variables": [
          "age"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "私は 10 歳です"
        }
      ]
    },
    {
      "title": "データをならべる「配列」",
      "description": "同じラベルのデータをまとめて並べておける「配列（はいれつ）」を使ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "配列（はいれつ）とは？",
          "image": "/illustrations/common/list.png",
          "content": "# データをまとめて整理整頓（せいりせいとん）\n\nたくさんのデータを順番に並べておきたいときに使うのが **配列（はいれつ）** です。\n\n**身近な例え：**\nロッカーが横に並んでいるイメージです！1番目のロッカー、2番目のロッカー...というように、順番に並んだ「はこ」の列です。\n\n「5教科のテストの点数」のように、関連（かんれん）する数字を一つの名前でまとめて管理（かんり）できます。"
        },
        {
          "title": "データの番号は 0 から！",
          "image": "/illustrations/common/list.png",
          "content": "# { } を使って作りましょう\n\n配列（はいれつ）を作るときは、`{ }` 波かっこの中にデータを並べます。\n配列の中身を取り出すときは、「何番目か」を `[ ]` 角かっこで指定します。\n\n**超重要ポイント！**\nプログラミングでは **最初のデータは「0番」** から数えます！\n1番目ではなく0番目からスタートです。\n\n**実際のコードを見てみましょう：**\n```c\nint scores[] = {100, 50};  // 100と50の2つのデータを持つ配列\nprintf(\"%d\\n\", scores[0]); // 0番目 = 100 が表示されます\nprintf(\"%d\\n\", scores[1]); // 1番目 = 50 が表示されます\n```\n\n**覚え方：**\n1番目のデータ → 番号は 0\n2番目のデータ → 番号は 1\n（番号 = 順番 - 1 と覚えましょう！）"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    int nums[] = {10, 20};\n    // 2番目（番号は1）を出す\n    printf(\"%d\\n\", nums[1]);\n    return 0;\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\n___\n// プログラムのエントリーポイントを定義する\n___\n    // int型配列numsに{10, 20}を代入する\n    ___\n    // nums[1]（2番目の要素）を表示する\n    ___\n    // 正常終了を示す値0を返す\n    ___\n// 関数の終わり\n___",
      "correctLines": [
        "#include <stdio.h>",
        "int main() {",
        "    int nums[] = {10, 20};",
        "    printf(\" %d\\n\", nums[1]);",
        "    return 0;",
        ""
      ],
      "lineHints": [
        "",
        "",
        "{10, 20} と入力しましょう。 { } を使うのがルールです。",
        "2番目のデータの番号は 1 です. `nums[1]` と入力してください。",
        "",
        ""
      ],
      "candidates": {
        "numbers": [
          "1"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "20"
        }
      ]
    },
    {
      "title": "「もし〜なら」で分ける if文",
      "description": "点数（score）が 80点より高いときだけ、メッセージを出すようにしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "条件分岐（じょうけんぶんき）とは？",
          "image": "/illustrations/common/if.png",
          "content": "# プログラムに判断（はんだん）させてみよう\n\n日常生活（にちじょうせいかつ）でも「もし〜なら」という判断をしていますよね。\n\n**身近な例え：**\n- 「もし雨が降ったら傘（かさ）をさす」\n- 「もし晴れたら外で遊ぶ」\n- 「もしテストで80点以上なら、ごほうびがもらえる」\n\nこんなふうに、状況（じょうきょう）によって動きを変えることを **条件分岐（じょうけんぶんき）** と呼びます。\n\nプログラムに「もし〜なら、これをしてね」と教えてあげましょう。"
        },
        {
          "title": "もし〜なら（if）",
          "image": "/illustrations/common/if.png",
          "content": "# if（イフ）の使い方\n\n`if`（イフ）は英語で「もし」という意味です。\n\nC言語では、`if (条件)` のあとに `{ }` 波かっこを書いて、その中に「条件が正しいときにやること」を書きます。\n\n**比較に使う記号：**\n- `>` : より大きい\n- `<` : より小さい\n- `>=` : 以上（いじょう）\n- `<=` : 以下（いか）\n- `==` : 等しい（等号が2つ！）\n\n**実際のコードを見てみましょう：**\n```c\nint temp = 35;  // 気温を35度とする\nif (temp > 30) {  // もし気温が30より大きければ\n    printf(\"暑い！\\n\");  // 「暑い！」と表示\n}\n```\n\n気温が30度より高いので、「暑い！」と表示されます。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    int score = 100;\n    if (score > 80) {\n        printf(\"Pass\\n\");\n    }\n    return 0;\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\n___\n// プログラムのエントリーポイントを定義する\n___\n    // int型の変数scoreに100を代入する\n    ___\n    // もしscoreが80より大きければ\n    ___\n        // Passと表示する\n        ___\n    // if文の終わり\n    ___\n    // 正常終了を示す値0を返す\n    ___\n// 関数の終わり\n___",
      "correctLines": [
        "#include <stdio.h>",
        "int main() {",
        "    int score = 100;",
        "    if (score > 80) {",
        "        printf(\"Pass\\n\");",
        "    }",
        "    return 0;",
        ""
      ],
      "lineHints": [
        "",
        "",
        "score = 100 と入力しましょう。",
        "比較するための記号 `>` を入力しましょう。",
        "printf(\"Pass\\n\"); と入力しましょう。",
        "さいごに } で閉じるのを忘れないでください。",
        "",
        ""
      ],
      "candidates": {
        "operators": [
          ">"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Pass"
        }
      ]
    },
    {
      "title": "ちがう場合は？ if-else文",
      "description": "「もし〜なら」のあとに、「そうじゃなければ」という別の動きも作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "それ以外の場合は？",
          "image": "/illustrations/common/if.png",
          "content": "# 2つの道を作る\n\n「もし〜なら」に当てはまらなかったときの動きも作ってみましょう。\n\n**身近な例え：**\n「もしテストで80点以上なら、ゲームができる。そうでなければ、勉強する。」\n\nこのように、条件に当てはまる場合と、当てはまらない場合の2つの道を作ることができます。\n\n**else（エルス）** を使うと、「そうじゃなければ、こっちをしてね」という指示が出せます。"
        },
        {
          "title": "そうじゃなければ（else）",
          "image": "/illustrations/common/if.png",
          "content": "# 2つのルート\n\n`else`（エルス）は英語で「そうでなければ」という意味です。\n\n条件にあてはまらなかったときの動きは `else { }` の中に書きます。\n\n**実際のコードを見てみましょう：**\n```c\nint hour = 15;  // 今は15時\nif (hour < 12) {  // もし12時より前なら\n    printf(\"午前\\n\");  // 「午前」と表示\n} else {  // そうでなければ（12時以降なら）\n    printf(\"午後\\n\");  // 「午後」と表示\n}\n```\n\n15時は12時以降なので、「午後」と表示されます。\n\n**ポイント：**\n`if` と `else` はセットで使うことで、「どちらか一方」を選べます。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    int x = 5;\n    if (x > 10) {\n        printf(\"Big\\n\");\n    } else {\n        printf(\"Small\\n\");\n    }\n    return 0;\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\n___\n// プログラムのエントリーポイントを定義する\n___\n    // int型の変数xに5を代入する\n    ___\n    // もしxが10より大きければ\n    ___\n        // Bigと表示する\n        ___\n    // それ以外の場合\n    ___\n        // Smallと表示する\n        ___\n    // if-else文の終わり\n    ___\n    // 正常終了を示す値0を返す\n    ___\n// 関数の終わり\n___",
      "correctLines": [
        "#include <stdio.h>",
        "int main() {",
        "    int x = 5;",
        "    if (x > 10) {",
        "        printf(\"Big\\n\");",
        "    } else {",
        "        printf(\"Small\\n\");",
        "    }",
        "    return 0;",
        ""
      ],
      "lineHints": [
        "",
        "",
        "x に 5 を入力します。",
        "if (x > 10) { と入力しましょう。",
        "Big と表示します。",
        "そうでなければ、を表す else { と入力しましょう。",
        "Small と表示します。",
        "なみかっこを閉じます。",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["else"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Small"
        }
      ]
    },
    {
      "title": "論理演算子（&&、||）",
      "description": "2つ以上の条件を組み合わせる「&&」と「||」を学びましょう。両方の条件を満たすか、どちらかを満たすかを判定できます。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "条件を組み合わせる",
          "image": "/illustrations/common/if.png",
          "content": "# もっと細かい条件で\n\n**身近な例え：**\n「映画を見に行くには、お金があって、かつ、時間もないとダメ」\n「遊園地に行くか、または、映画を見るか、どちらかに決めよう」\n\nこのように、2つの条件を組み合わせたいときがあります。\n\n- **&&（アンド）**: 「かつ」の意味。両方の条件を満たす必要がある\n- **||（オア）**: 「または」の意味。どちらか片方でもOK\n\nキーボードでは `&` は Shift + 6、`|` は Shift + \\ で入力できます。"
        },
        {
          "title": "&& と || の使い方",
          "image": "/illustrations/common/if.png",
          "content": "# 条件の合体技\n\n**&&（かつ）の例：**\n「10歳以上、かつ、20歳未満」→ 両方クリアしないとダメ\n```c\nint age = 15;  // 年齢は15歳\nif (age >= 10 && age < 20) {  // 10以上 かつ 20未満\n    printf(\"10代です\\n\");  // 両方クリアなので表示される\n}\n```\n\n**||（または）の例：**\n「土曜日、または、日曜日なら休み」→ どちらかでOK\n```c\nint day = 6;  // 6 = 土曜日\nif (day == 6 || day == 0) {  // 土曜(6) または 日曜(0)\n    printf(\"休みです\\n\");\n}\n```\n\n**ポイント：**\n`&&` は「両方とも○」のとき実行\n`||` は「どちらか○」のとき実行"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    // scoreに85を入れる\n    int score = 85;\n    // 80以上 かつ 100以下 ならメッセージを出す\n    if (score >= 80 && score <= 100) {\n        printf(\"Pass\\n\");\n    }\n    return 0;\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\n___\n// プログラムのエントリーポイントを定義する\n___\n    // int型の変数scoreに85を代入する\n    ___\n    // もしscoreが80以上かつ100以下なら\n    ___\n        // Passと表示する\n        ___\n    // if文の終わり\n    ___\n    // 正常終了を示す値0を返す\n    ___\n// 関数の終わり\n___",
      "correctLines": [
        "#include <stdio.h>",
        "int main() {",
        "    // scoreに85を入れる",
        "    int score = 85;",
        "    // 80以上 かつ 100以下 ならメッセージを出す",
        "    if (score >= 80 && score <= 100) {",
        "        // 結果を出力",
        "        printf(\"Pass\\n\");",
        "    }",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "85 と入力しましょう。",
        null,
        "両方の条件を満たすので && を使います。",
        null,
        "Pass と入力しましょう。",
        null,
        null,
        null
      ],
      "candidates": {
        "operators": ["&&", "||"],
        "numbers": ["85"],
        "strings": ["Pass"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Pass"
        }
      ]
    },
    {
      "title": "ぐるぐる回す for文",
      "description": "決められた回数だけ、処理を繰り返してみましょう。",
      "difficulty": "easy",
      "orderIndex": 11,
      "tutorialSlides": [
        {
          "title": "繰り返し（ループ）とは？",
          "image": "/illustrations/common/loop.png",
          "content": "# 面倒（めんどう）なことはコンピュータにおまかせ\n\n同じ作業を何度も繰り返すのが **ループ（繰り返し）** です。\n\n**身近な例え：**\n「『おはよう』を100回書いてください」と言われたら、人間は大変ですよね。\nでもコンピュータなら、文句も言わず一瞬（いっしゅん）で100回書いてくれます！\n\n100回どころか、1000回、10000回でも、疲（つか）れることなくやってくれます。"
        },
        {
          "title": "くりかえし（for）",
          "image": "/illustrations/common/loop.png",
          "content": "# for文の3つのきまり\n\n`for`（フォー）文は、「何回繰り返すか」を細かく指定できます。\n\n**書き方：**\n`for (スタート; 続ける条件; 1回ごとの処理)`\n\n**実際のコードを見てみましょう：**\n```c\nfor (int i = 0; i < 3; i++) {\n    printf(\"ヤッホー\\n\");\n}\n```\n\n**それぞれの意味：**\n1. `int i = 0` → カウンター「i」を0からスタート\n2. `i < 3` → iが3より小さい間、続ける\n3. `i++` → 1回終わるごとにiを1増やす\n\n**`++` について：**\n`++`（プラスプラス）は「インクリメント演算子（えんざんし）」といって、「1を足す」という意味です。\n`i++` は `i = i + 1` と同じ意味です。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nint main() {\n    for (int i = 0; i < 3; i++) {\n        printf(\"%d\\n\", i);\n    }\n    return 0;\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\n___\n// プログラムのエントリーポイントを定義する\n___\n    // iを0から3未満まで1ずつ増やしながら繰り返す\n    ___\n        // iの値を表示する\n        ___\n    // for文の終わり\n    ___\n    // 正常終了を示す値0を返す\n    ___\n// 関数の終わり\n___",
      "correctLines": [
        "#include <stdio.h>",
        "int main() {",
        "    for (int i = 0; i < 3; i++) {",
        "        printf(\" %d\\n\", i);",
        "    }",
        "    return 0;",
        ""
      ],
      "lineHints": [
        "",
        "",
        "i++ と入力して、番号を増やしていきます。",
        "今の番号 i を表示します。",
        "ループの終わりです。",
        "",
        ""
      ],
      "candidates": {
        "operators": ["i++"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "012"
        }
      ]
    },
    {
      "title": "データをまとめましょう「構造体」",
      "description": "いろいろな種類のデータを一つにまとめられる「構造体（こうぞうたい）」を使ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 12,
      "tutorialSlides": [
        {
          "title": "構造体（こうぞうたい）とは？",
          "image": "/illustrations/3d_advanced/class_template.png",
          "content": "# オリジナルの「はこセット」を作る\n\n今まで、数字を入れる「はこ」は1つのデータしか持てませんでした。\n\n**身近な例え：**\n友達のプロフィールカードを想像してください。1枚のカードに「名前」「年齢」「好きな食べ物」など、いろいろな情報がまとまっていますよね。\n\n**構造体（こうぞうたい）** を使うと、このように種類（しゅるい）の違うデータをひとまとめにして管理（かんり）できます。\n\n自分だけの新しいデータのセット（プロフィールカードのようなもの）を作ることができるのです！"
        },
        {
          "title": "struct（ストラクト）",
          "image": "/illustrations/3d_advanced/class_template.png",
          "content": "# 自分だけの型を作る\n\n`struct`（ストラクト）は英語で「構造」という意味です。\n\n`struct` という言葉を使うと、複数（ふくすう）の変数をまとめた新しい「はこ」の **設計図（せっけいず）** を作れます。\n\n**実際のコードを見てみましょう：**\n```c\n// 本の情報をまとめる設計図を作る\nstruct Book {\n    int price;  // 値段（ねだん）\n};\n\n// 設計図を使って実物の「本」を作る\nstruct Book b = {500};  // 500円の本\nprintf(\"%d\\n\", b.price);  // 本の値段を表示\n```\n=> 500 と表示されます\n\n**ポイント：**\n`b.price` のように、ドット `.` を使って中のデータにアクセスします。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nstruct Point {\n    int x;\n    int y;\n};\nint main() {\n    struct Point p = {10, 20};\n    printf(\"%d\\n\", p.x);\n    return 0;\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\n___\n// 構造体Pointを定義する\n___\n    // int型のメンバxを宣言する\n    ___\n    // int型のメンバyを宣言する\n    ___\n// 構造体定義の終わり\n___\n// プログラムのエントリーポイントを定義する\n___\n    // Point型の変数pを{10, 20}で初期化する\n    ___\n    // p.xの値を表示する\n    ___\n    // 正常終了を示す値0を返す\n    ___\n// 関数の終わり\n___",
      "correctLines": [
        "#include <stdio.h>",
        "struct Point {",
        "    int x;",
        "    int y;",
        "};",
        "int main() {",
        "    struct Point p = {10, 20};\n    printf(\" %d\\n\", p.x);",
        "    return 0;",
        ""
      ],
      "lineHints": [
        "",
        "新しい構造体 Point を定義します。",
        "数字のラベル x です。",
        "数字のラベル y です。",
        "構造体の定義の終了 ; を忘れずに。",
        "",
        "構造体変数を初期化します。",
        "p.x でアクセスします。",
        "",
        ""
      ],
      "candidates": {
        "strings": ["x"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10"
        }
      ]
    },
    {
      "title": "自分だけの関数を作ろう",
      "description": "一連の手順をまとめて、名前をつけた「関数（かんすう）」を作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 13,
      "tutorialSlides": [
        {
          "title": "関数（かんすう）とは？",
          "image": "/illustrations/common/function.png",
          "content": "# オリジナルの技を作ろう\n\n何度も使う手順をまとめて名前をつけたものを **関数（かんすう）** と呼びます。\n\n**身近な例え：**\n「朝の準備」という言葉を聞くだけで、「顔を洗う→歯を磨く→着替える」という一連の動作がわかりますよね。\n\n関数も同じです！複数の処理をまとめて名前をつけておけば、その名前を呼ぶだけで全部やってくれます。\n\n一度作れば、「アレやって！」と名前を呼ぶだけで何度でも実行できる、便利なショートカットのようなものです。"
        },
        {
          "title": "関数を定義しましょう",
          "image": "/illustrations/common/function.png",
          "content": "# 手順をまとめる\n\nやりたいことをひとまとめにして、名前をつけることができます。\n一度作っておけば、呼び出すだけでいつでも動かせます。\n\n**実際のコードを見てみましょう：**\n```c\n// 「aisatsu」という関数を作る（定義する）\nvoid aisatsu() {\n    printf(\"ヤッホー\\n\");\n}\n\n// mainの中で呼ぶ（使う）\naisatsu();  // これで「ヤッホー」と表示される\n```\n\n**ポイント：**\n- `void`（ボイド）は「何も返さない」という意味です\n- 関数名のあとに `()` 丸かっこをつけるのがルールです\n- `{ }` の中に、やりたい処理を書きます"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <stdio.h>\nvoid greet() {\n    printf(\"Hello\\n\");\n}\nint main() {\n    // 関数を実行する\n    greet();\n    return 0;\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\n___\n// void型のgreet関数を定義する\n___\n    // Helloと表示する\n    ___\n// greet関数の終わり\n___\n// プログラムのエントリーポイントを定義する\n___\n    // greet関数を呼び出す\n    ___\n    // 正常終了を示す値0を返す\n    ___\n// 関数の終わり\n___",
      "correctLines": [
        "#include <stdio.h>",
        "void greet() {",
        "    printf(\"Hello\\n\");",
        "}",
        "int main() {",
        "    greet();",
        "    return 0;",
        ""
      ],
      "lineHints": [
        "",
        "greet という名前の関数を定義します。",
        "メッセージを表示します。",
        "関数の終わりです。",
        "",
        "greet(); と入力して、関数を実行します。",
        "",
        ""
      ],
      "candidates": {
        "functions": ["greet"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello"
        }
      ]
    }
  ]
}
export const cppData = {
  "language": "cpp",
  "lessonId": "cpp-1",
  "lessonTitle": "C++ (シープラスプラス) に挑戦！",
  "lessonDescription": "C言語をもっとパワーアップさせた「C++（シープラスプラス）」のきほんを学びましょう。いろいろな機能を使って、自由にプログラムを作れるようになります。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "tutorialSlides": [
    { "title": "C++とは？", "content": "# パワフルで高速な言語\\n\\nC++はC言語を元にして便利な機能を追加した言語です。\\n\\n**どんなところで使われているの？**\\n- ゲーム（速さが命！）\\n- ブラウザ（Chrome等）\\n- 3DCGソフト\\n\\nスピードが求められる場所で大活躍！" },
    { "title": "std::coutで出力", "content": "# 画面に文字を出す\\n\\n```cpp\\n#include <iostream>\\nint main() {\\n    std::cout << \\\"こんにちは\\\" << std::endl;\\n    return 0;\\n}\\n```\\n\\n`<<`で文字を画面の方へ送るイメージです。\\n`std::endl`は改行です。" },
    { "title": "変数を使う", "content": "# int と string\\n\\n```cpp\\nint age = 20;\\nstd::string name = \\\"太郎\\\";\\nstd::cout << name << \\\"は\\\" << age << \\\"歳\\\" << std::endl;\\n```\\n\\nC言語と違い、`std::cout`で簡単に出力できます！" },
    { "title": "計算と演算子", "content": "# 四則演算\\n\\n```cpp\\nint a = 10, b = 3;\\nstd::cout << a + b << std::endl;  // 13\\nstd::cout << a % b << std::endl;  // 1（あまり）\\n```\\n\\n`+=`や`-=`も使えます。\\n```cpp\\nint x = 5;\\nx += 3;  // x = x + 3 と同じ\\n```" }
  ],
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "description": "プログラムの基本！画面にメッセージを表示する方法を学びます",
      "tutorialSlides": [
        {
          "title": "C++（シープラスプラス）とは？",
          "content": "# パワフルで高速な言語\\n\\nC++（シープラスプラス）は、C言語を元にしてさらに便利な機能を追加した言語です。\\n\\n**身近な例え：**\\nC言語が「普通の車」だとしたら、C++は「スーパーカー」のような存在です！速さはそのままに、もっと便利な機能がついています。\\n\\n**どんなところで使われているの？**\\n- ゲーム（速さが命！）\\n- ブラウザ（ChromeやFirefoxなど）\\n- 3DCGソフト\\n\\nなど、**スピードが求められる場所**で大活躍しています。"
        },
        {
          "title": "C++への入り口",
          "content": "# std::cout（シーアウト）を使おう\\n\\nC++で画面に文字を出すには、`std::cout`（スタンダード・シーアウト）を使います。\\n`cout` は「Character OUTput」（文字を出力）の略です。\\n\\n`<<` という矢印のような記号を使って、文字を画面の方へ送ります。\\n\\n**イメージ：**\\n画面 `<<` \"こんにちは\"\\n（文字が矢印の方向に流れていくイメージ！）\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\n#include <iostream>  // 入出力を使う準備\\nint main() {\\n    std::cout << \"C++最高！\" << std::endl;\\n    return 0;\\n}\\n```\\n\\n**用語解説：**\\n- `std::endl`（エンドエル）: 改行して次の行に進む\\n- `#include <iostream>`: 入出力機能を使えるようにする"
        }
      ],
      "correctCode": "// ライブラリを読み込む\\n#include <iostream>\\n// ブロックを開始\\nint main() {\\n    // こんにちは, C++! と入力\\n    std::cout << \\\"こんにちは, C++!\\\" << std::endl;\\n    // 0を返す\\n    return 0;\\n// ブロックを閉じる\\n}", "holeyCode": "// ライブラリを読み込む\\n___\\n// ブロックを開始\\n___ ___() {\\n    // こんにちは, C++! と入力\\n    ___::___ << ___ << ___::___;\\n    // 0を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// ライブラリを読み込む",
          "#include <iostream>",
          "// ブロックを開始",
          "int main() {",
          "    // こんにちは, C++! と入力",
          "    std::cout << \\\"こんにちは, C++!\\\" << std::endl;",
          "    // 0を返す",
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
          "strings": [
            "Hello, C++!"
          ],
          "others": ["main", "\"Hello,", "0", "}", "\"こんにちは,", "#include <iostream>", "int", "std", "cout", "endl", "return", "C++!\"", "!\" << std"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは, C++!\\n"
          }
        ]
      },
    {
      "title": "数字を入れる「はこ」",
      "description": "データを名前をつけて保存する「変数」の仕組みを理解します",
      "tutorialSlides": [
        {
          "title": "変数とは？",
          "content": "# データを保存する「はこ」\\n\\nプログラムの中で数字や文字に名前をつけて、あとで使いやすくするための仕組みが **変数** です。\\n\\n**身近な例え：**\\nおもちゃ箱に「レゴ入れ」「ぬいぐるみ入れ」とラベルを貼るように、プログラムでも「はこ」に名前をつけてデータをしまっておきます。\\n\\n例えば、年齢を覚えておきたいなら `age` という名前の「はこ」を作ります。"
        },
        {
          "title": "数字のラベル int",
          "content": "# 整数のラベル\\n\\n数字（1, 2, 3 のような整数）を入れたいときは、`int`（イント）というラベルを貼ります。\\n`int` は「Integer」（整数）の略です。\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\nint age = 20;  // 「age」という名前のはこに20を入れる\\nstd::cout << age << std::endl;  // ageの中身を表示\\n```\\n=> 20 と表示されます\\n\\n**C言語との違い：**\\nC言語では `printf(\"%d\", age)` と書いていましたが、C++では `std::cout << age` とシンプルに書けます！"
        }
      ],
      "correctCode": "#include <iostream>\\nint main() {\\n    // 10 と入力\\n    int x = 10;\\n    // x と入力\\n    std::cout << x << std::endl;\\n    return 0;\\n}", "holeyCode": "// ライブラリを読み込む\\n___\\n// ブロックを開始\\n___ ___() {\\n    // 10 と入力\\n    ___ ___ = ___;\\n    // x と入力\\n    ___::___ << ___ << ___::___;\\n    // 0を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "#include <iostream>",
          "int main() {",
          "    // 10 と入力",
          "    int x = 10;",
          "    // x と入力",
          "    std::cout << x << std::endl;",
          "    return 0;",
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
          ""
        ],
        "candidates": {
          "variables": [
            "x"
          ],
          "numbers": [
            "10"
          ],
          "others": ["10;", "main", "0", "}", "#include <iostream>", "int", "std", "cout", "endl", "return", "int main() {", "int x = 10;", "std::cout", "<<", "<< std::endl"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "コンピュータで計算しましょう",
      "description": "プログラムで数値を計算する方法を学びます",
      "tutorialSlides": [
        {
          "title": "計算はコンピュータにお任せ",
          "content": "# 高速な計算処理\\n\\nコンピュータは人間よりもずっと速く計算できます。\\nどんなに大きな数字でも、プログラミングで指示を出せば一瞬で解いてくれます。"
        },
        {
          "title": "計算の記号",
          "content": "# 矢印で送ろう\\n\\n`<<` で繋ぐことで、計算した結果をそのまま画面に出すことができます。\\n\\n**コード例：**\\n```cpp\\nint cookies = 10;\\nint friends = 2;\\n// クッキー ÷ 友達 の結果を画面へ！\\nstd::cout << cookies / friends << std::endl;\\n```\\n=> 5"
        }
      ],
      "correctCode": "#include <iostream>\\nint main() {\\n    int a = 5;\\n    int b = 3;\\n    // + でたし算\\n    std::cout << a + b << std::endl;\\n    return 0;\\n}", "holeyCode": "// ライブラリを読み込む\\n___\\n// ブロックを開始\\n___ ___() {\\n    // 変数を宣言\\n    ___ ___ = ___;\\n    // 変数を宣言\\n    ___ ___ = ___;\\n    // + でたし算\\n    ___::___ << ___ ___ ___ << ___::___;\\n    // 0を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "#include <iostream>",
          "int main() {",
          "    int a = 5;",
          "    int b = 3;",
          "    // + でたし算",
          "    std::cout << a + b << std::endl;",
          "    return 0;",
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
          ""
        ],
        "candidates": {
          "operators": [
            "+"
          ],
          "others": ["main", "5", "3", "endl", "0", "}", "#include <iostream>", "int", "std", "cout", "a", "b", "return", "int main() {", "int b = 3;", "std::cout", "<<", "+ b << std::endl"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "8\\n"
          }
        ]
      },
    {
      "title": "剰余演算子（%）",
      "description": "剰余演算子（%）の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "あまりを求める",
          "content": "# 割り算の「あまり」を知りたい！\\n\\n割り算をしたときに、割り切れなくて「あまり」が出ることがありますよね。\\n`%` という記号を使うと、その **あまり** だけを計算してくれます。\\nこれを「剰余」と呼びます。"
        },
        {
          "title": "% の使い方",
          "content": "# あまりを計算\\n\\n```cpp\\nstd::cout << 10 % 3 << std::endl;\\n```\\n\\n=> 1\\n10 ÷ 3 は 3 あまり 1 なので、「1」が表示されます。\\n\\n```cpp\\nstd::cout << 8 % 2 << std::endl;\\n```\\n\\n=> 0\\n8 ÷ 2 は 4 あまり 0 なので、「0」になります（割り切れるということです！）"
        }
      ],
      "correctCode": "#include <iostream>\\nint main() {\\n    // 10 を 3 で割ったあまりを出力する\\n    std::cout << 10 % 3 << std::endl;\\n    return 0;\\n}", "holeyCode": "// ライブラリを読み込む\\n___\\n// ブロックを開始\\n___ ___() {\\n    // 10 を 3 で割ったあまりを出力する\\n    ___::___ << ___ ___ ___ << ___::___;\\n    // 0を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "#include <iostream>",
          "int main() {",
          "    // 10 を 3 で割ったあまりを出力する",
          "    std::cout << 10 % 3 << std::endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
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
            "+",
            "-",
            "*",
            "/"
          ],
          "others": ["main", "10", "0", "}", "#include <iostream>", "int", "std", "cout", "endl", "3", "return", "int main() {", "std::cout << 10 % 3 << std::endl;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      },
    {
      "title": "累算代入演算子（+=、-=）",
      "description": "累算代入演算子（+=、-=）の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "中身を増やしたいとき",
          "content": "# はこの中身をパワーアップ\\n\\n「今の点数に10点プラスしたい！」というとき、`+=` を使うと便利です。\\nこれは「今の数字に足して、そのまま保存する」という合体技です。\\n\\n```cpp\\nint x = 10;\\nx += 5;  // x に 5 を足して保存\\nstd::cout << x << std::endl;\\n```\\n\\n=> 15"
        },
        {
          "title": "-= も使える",
          "content": "# 引き算バージョン\\n\\n`-=` を使えば、「今の数字から引いて保存」ができます。\\n\\n```cpp\\nint x = 10;\\nx -= 3;  // x から 3 を引いて保存\\nstd::cout << x << std::endl;\\n```\\n\\n=> 7"
        }
      ],
      "correctCode": "#include <iostream>\\nint main() {\\n    // scoreに50を入れる\\n    int score = 50;\\n    // 10点プラスする\\n    score += 10;\\n    // scoreを表示\\n    std::cout << score << std::endl;\\n    return 0;\\n}", "holeyCode": "// ライブラリを読み込む\\n___\\n// ブロックを開始\\n___ ___() {\\n    // scoreに50を入れる\\n    ___ ___ = ___;\\n    // 10点プラスする\\n    ___ ___ ___;\\n    // scoreを表示\\n    ___::___ << ___ << ___::___;\\n    // 0を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "#include <iostream>",
          "int main() {",
          "    // scoreに50を入れる",
          "    int score = 50;",
          "    // 10点プラスする",
          "    score += 10;",
          "    // scoreを表示",
          "    std::cout << score << std::endl;",
          "    return 0;",
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
            "+=",
            "-=",
            "*=",
            "/="
          ],
          "numbers": [
            "50",
            "10"
          ],
          "others": ["50;", "main", "score", "0", "}", "#include <iostream>", "int", "std", "cout", "endl", "return", "int main() {", "int score = 50;", "std::cout", "<<", "score << std::endl"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "60\\n"
          }
        ]
      },
    {
      "title": "文字と「はこ」を並べましょう",
      "description": "データを名前をつけて保存する「変数」の仕組みを理解します",
      "tutorialSlides": [
        {
          "title": "連結とは？",
          "content": "# 情報を組み合わせて表示する\\n\\n文章の途中に、変数の中身を流し込んで一つのメッセージにすることを **連結** と呼びます。\\nC++では `<<` を使って、電車のように情報を連結して画面へ送ります。"
        },
        {
          "title": "<< でつなげましょう",
          "content": "# ガチャンと連結！\\n\\n`<<` を何回も使うことで、文字やはこの中身をどんどん繋げることができます。\\n\\n**コード例：**\\n```cpp\\nint hour = 15;\\nstd::cout << \"今は \" << hour << \" 時です\" << std::endl;\\n```\\n=> 今は 15 時です"
        }
      ],
      "correctCode": "#include <iostream>\\nint main() {\\n    int age = 10;\\n    // age と入力\\n    std::cout << \"私は\" << age << \"歳です.\" << std::endl;\\n    return 0;\\n}", "holeyCode": "// ライブラリを読み込む\\n___\\n// ブロックを開始\\n___ ___() {\\n    // 変数を宣言\\n    ___ ___ = ___;\\n    // age と入力\\n    ___::___ << ___ << ___ << ___ << ___::___;\\n    // 0を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "#include <iostream>",
          "int main() {",
          "    int age = 10;",
          "    // age と入力",
          "    std::cout << \"私は\" << age << \"歳です.\" << std::endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "variables": [
            "age"
          ],
          "others": ["main", "10", "0", "}", "\"私は\"", "#include <iostream>", "int", "std", "cout", "endl", "return", "\"歳です.\"", "int main() {", "// age と入力", "0;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "私は10歳です.\\n"
          }
        ]
      },
    {
      "title": "自由に伸びる「はこ」vector",
      "description": "データを名前をつけて保存する「変数」の仕組みを理解します",
      "tutorialSlides": [
        {
          "title": "動的配列とは？",
          "content": "# 長さが変わる便利な列\\n\\nあとから中身を増やしたり減らしたりできる「はこ」の列を **動的配列** と呼びます。\\n\\n**身近な例え：**\\n普通の配列は「決まった数のロッカー」ですが、`vector` は「必要に応じて増やせるロッカー」のようなものです。\\n\\n「伸び縮みする魔法の配列」みたいなものです。\\nC++では `vector`（ベクター）という機能を使ってこれを作ります。"
        },
        {
          "title": "std::vector",
          "content": "# 書き方のルール\\n\\n`< >` の中に「何を入れるか」を指定します。\\n- `<int>`: 整数を入れる\\n- `<std::string>`: 文字列を入れる\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\n#include <vector>  // vectorを使う準備\\n\\n// 文字列を入れる vector を作る\\nstd::vector<std::string> items = {\"Apple\", \"Orange\"};\\nstd::cout << items[0] << std::endl;  // 0番目を表示\\n```\\n=> Apple と表示されます\\n\\n**ポイント：**\\n- 普通の配列と同じく、番号は0から始まります\\n- `items[0]` は1番目の要素「Apple」です"
        }
      ],
      "correctCode": "#include <iostream>\\n#include <vector>\\n#include <string>\\nint main() {\\n    // 果物配列（りんご、バナナ）をfruitsに代入\\n    std::vector<std::string> fruits = {\"りんご\", \"バナナ\"};\\n    // 1 と入力（2番目のデータはインデックス1）\\n    std::cout << fruits[1] << std::endl;\\n    return 0;\\n}", "holeyCode": "// ライブラリを読み込む\\n___\\n// ライブラリを読み込む\\n___\\n// ライブラリを読み込む\\n___\\n// ブロックを開始\\n___ ___() {\\n    // 果物配列（りんご、バナナ）をfruitsに代入\\n    ___::___<___::___> ___ = {\\\"___\\\", \\\"___\\\"};\\n    // 1 と入力（2番目のデータはインデックス1）\\n    ___::___ << ___[___] << ___::___;\\n    // 0を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "#include <iostream>",
          "#include <vector>",
          "#include <string>",
          "int main() {",
          "    // 果物配列（りんご、バナナ）をfruitsに代入",
          "    std::vector<std::string> fruits = {\"りんご\", \"バナナ\"};",
          "    // 1 と入力（2番目のデータはインデックス1）",
          "    std::cout << fruits[1] << std::endl;",
          "    return 0;",
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
          "numbers": [
            "1"
          ],
          "others": ["main", "りんご", "バナナ", "0", "}", "#include <iostream>", "#include <vector>", "#include <string>", "int", "std", "cout", "endl", "return", "vector", "string", "fruits", "int main() {", "std::vector<std::string> fruits = {\"りんご\", \"バナナ\"};", "std::cout << fruits[1] << std::endl;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "バナナ\\n"
          }
        ]
      },
    {
      "title": "「もし〜なら」で分けましょう",
      "description": "条件によって処理を分ける「条件分岐」を学びます",
      "tutorialSlides": [
        {
          "title": "条件分岐とは？",
          "content": "# プログラムに判断させてみよう\\n\\n「雨が降ったら傘をさす」「晴れたら外で遊ぶ」\\nこんなふうに、状況によって動きを変えることを **条件分岐** と呼びます。\\nプログラムに「もし〜なら、これをしてね」と教えてあげましょう。"
        },
        {
          "title": "if文",
          "content": "# ( ) と { } を使いましょう\\n\\nC++でも、`if (条件)` のあとに `{ }` を入力して、その中にやりたいことを入力します。\\n\\n**コード例：**\\n```cpp\\nint temp = 30;\\nif (temp > 25) {\\n    std::cout << \"暑いですね\" << std::endl;\\n}"
        }
      ],
      "correctCode": "#include <iostream>\\nint main() {\\n    // scoreに100を入れる\\n    int score = 100;\\n    // > で「より大きい」を比較\\n    if (score > 80) {\\n        // '完璧' と入力\\n        std::cout << \"完璧\" << std::endl;\\n    }\\n    return 0;\\n}", "holeyCode": "// ライブラリを読み込む\\n___\\n// ブロックを開始\\n___ ___() {\\n    // scoreに100を入れる\\n    ___ ___ = ___;\\n    // > で「より大きい」を比較\\n    ___ (___ ___ ___) {\\n        // '完璧' と入力\\n        ___::___ << ___ << ___::___;\\n    // ブロックを閉じる\\n    ___\\n    // 0を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "#include <iostream>",
          "int main() {",
          "    // scoreに100を入れる",
          "    int score = 100;",
          "    // > で「より大きい」を比較",
          "    if (score > 80) {",
          "        // '完璧' と入力",
          "        std::cout << \"完璧\" << std::endl;",
          "    }",
          "    return 0;",
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
          null
        ],
        "candidates": {
          "operators": [
            ">"
          ],
          "strings": [
            "完璧"
          ],
          "others": ["100;", "main", "100", "\"完璧\"", "}", "0", "#include <iostream>", "int", "std", "cout", "endl", "return", "if", "score", "80", "int main() {", "int score = 100;", "(score", "80) {", "std::cout << \"完璧\" << std::endl;", "rn 0;"]
        },
        "testCases": [
          {
             "input": "",
            "expected_output": "完璧\\n"
          }
        ]
      },
    {
      "title": "ちがう場合はどうしましょう？",
      "description": "ちがう場合はどうしましょう？の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "それ以外の場合は？",
          "content": "# else（エルス）の役割\\n\\n条件に当てはまらなかったときの別のルートを作るのが **else（エルス）** です。「もし〜なら」とセットで使うことで、プログラムのルートを2つに分けることができます。"
        },
                {
          "title": "elseブロック",
          "content": "# どちらかを選びます\\n\\n条件に当てはまらないときの動きは `else` を使って入力します。\\n\\n**コード例 ：**\\n```cpp\\nint age = 15;\\nif (age >= 20) {\\n    std::cout << \"大人\" << std::endl;\\n} else {\\n    std::cout << \"子供\" << std::endl;\\n}"
                }
      ],
      "correctCode": "#include <iostream>\\nint main() {\\n    // ageに10を入れる\\n    int age = 10;\\n    // 20以上かを比較する演算子\\n    if (age >= 20) {\\n        // 20歳以上のときのメッセージ（'大人'）\\n        std::cout << \"大人\" << std::endl;\\n    // elseで20歳未満の場合の処理\\n    } else {\\n        // それ以外のメッセージ（'未成年'）\\n        std::cout << \"未成年\" << std::endl;\\n    }\\n    return 0;\\n}", "holeyCode": "// ライブラリを読み込む\\n___\\n// ブロックを開始\\n___ ___() {\\n    // ageに10を入れる\\n    ___ ___ = ___;\\n    // 20以上かを比較する演算子\\n    ___ (___ ___ ___) {\\n        // 20歳以上のときのメッセージ（'大人'）\\n        ___::___ << ___ << ___::___;\\n    // elseで20歳未満の場合の処理\\n    } ___ {\\n        // それ以外のメッセージ（'未成年'）\\n        ___::___ << ___ << ___::___;\\n    // ブロックを閉じる\\n    ___\\n    // 0を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "#include <iostream>",
          "int main() {",
          "    // ageに10を入れる",
          "    int age = 10;",
          "    // 20以上かを比較する演算子",
          "    if (age >= 20) {",
          "        // 20歳以上のときのメッセージ（'大人'）",
          "        std::cout << \"大人\" << std::endl;",
          "    // elseで20歳未満の場合の処理",
          "    } else {",
          "        // それ以外のメッセージ（'未成年'）",
          "        std::cout << \"未成年\" << std::endl;",
          "    }",
          "    return 0;",
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
          null
        ],
        "candidates": {
          "keywords": [
            "else"
          ],
          "others": ["10;", ">=", "main", "10", "}", "0", "\"大人\"", "\"未成年\"", "#include <iostream>", "int", "std", "cout", "endl", "return", "if", "age", "20", "int main() {", "int age = 10;", "(age", "20) {", "std::cout << \"大人\" << std::endl;", "se {", "rn 0;"]
        },
        "testCases": [
          {
             "input": "",
            "expected_output": "未成年\\n"
          }
        ]
      },
    {
      "title": "論理演算子（&&、||）",
      "description": "複数の条件を組み合わせる方法を学びます",
      "tutorialSlides": [
        {
          "title": "条件を組み合わせる",
          "content": "# もっと細かい条件で\\n\\n「10歳以上、かつ、20歳未満」のように、2つの条件を両方クリアしているかチェックしたいときがあります。\\nそんなときは `&&` （アンド）を使います。\\n逆に「どちらか片方でもOK」なら `||` （オア）を使います。"
        },
        {
          "title": "&& と || の使い方",
          "content": "# 条件の合体技\\n\\n```cpp\\nint age = 15;\\nif (age >= 10 && age < 20) {\\n    std::cout << \"10代です\" << std::endl;\\n}\\n```\\n\\n`&&` は「かつ」、`||` は「または」の意味です。"
        }
      ],
      "correctCode": "#include <iostream>\\nint main() {\\n    // scoreに85を入れる\\n    int score = 85;\\n    // 80以上 かつ 100以下 ならメッセージを出す\\n    if (score >= 80 && score <= 100) {\\n        // 「合格」と出力\\n        std::cout << \"合格\" << std::endl;\\n    }\\n    return 0;\\n}", "holeyCode": "// ライブラリを読み込む\\n___\\n// ブロックを開始\\n___ ___() {\\n    // scoreに85を入れる\\n    ___ ___ = ___;\\n    // 80以上 かつ 100以下 ならメッセージを出す\\n    ___ (___ ___ ___ ___ ___ ___ ___) {\\n        // 「合格」と出力\\n        ___::___ << ___ << ___::___;\\n    // ブロックを閉じる\\n    ___\\n    // 0を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "#include <iostream>",
          "int main() {",
          "    // scoreに85を入れる",
          "    int score = 85;",
          "    // 80以上 かつ 100以下 ならメッセージを出す",
          "    if (score >= 80 && score <= 100) {",
          "        // 「合格」と出力",
          "        std::cout << \"合格\" << std::endl;",
          "    }",
          "    return 0;",
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
          null
        ],
        "candidates": {
          "operators": [
            "&&",
            "||"
          ],
          "numbers": [
            "85"
          ],
          "strings": [

          ],
          "others": ["85;", "main", "80", "}", "0", "\"合格\"", "#include <iostream>", "int", "std", "cout", "endl", "return", "if", "score", ">=", "<=", "100", "int main() {", "int score = 85;", "(score", "80 && score <= 100) {", "std::cout", "<<", "std::endl;", "rn 0;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "合格\\n"
          }
        ]
      },
    {
      "title": "中身を全部出してみましょう",
      "description": "中身を全部出してみましょうの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "繰り返し（ループ）とは？",
          "content": "# 自動で順番に処理する\\n\\n同じ作業を何度も繰り返すための仕組みが **ループ（繰り返し）** です。\\n\\n**身近な例え：**\\n学校で出席をとるとき、「田中さん」「鈴木さん」「佐藤さん」...と一人ずつ名前を呼びますよね。ループはこの「順番に全員をチェック」する作業を自動でやってくれます。\\n\\n配列の中身を一つずつ順番に全部チェックしたいときなどに非常に役立ちます。"
        },
        {
          "title": "範囲for文",
          "content": "# for (変数 : コンテナ)\\n\\nC++には **範囲for文（はんいフォーぶん）** という便利なループがあります。\\n「はこ（配列）」の中に入っているものを、最初から最後まで順番に取り出せます。\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\nstd::vector<std::string> fruits = {\"Apple\", \"Banana\"};\\n// fruits の中身を一つずつ f に入れて繰り返す\\nfor (std::string f : fruits) {\\n    std::cout << f << std::endl;\\n}\\n```\\n=> Apple と Banana が順番に表示されます\\n\\n**読み方：**\\n「fruits の中身を、一つずつ f に入れながら繰り返す」\\n\\n**ポイント：**\\nC言語の `for (int i = 0; i < 2; i++)` より、とても簡単に書けます！"
        }
      ],
      "correctCode": "#include <iostream>\\n#include <vector>\\nint main() {\\n    std::vector<int> nums = {1, 2, 3};\\n    // numsの各要素をnに代入して繰り返し\\n    for (int n : nums) {\\n        std::cout << n << std::endl;\\n    }\\n    return 0;\\n}", "holeyCode": "// ライブラリを読み込む\\n___\\n// ライブラリを読み込む\\n___\\n// ブロックを開始\\n___ ___() {\\n    // 値を代入\\n    ___::___<___> ___ = {___, ___, ___};\\n    // numsの各要素をnに代入して繰り返し\\n    ___ (___ ___ : ___) {\\n        // 文を実行\\n        ___::___ << ___ << ___::___;\\n    // ブロックを閉じる\\n    ___\\n    // 0を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "#include <iostream>",
          "#include <vector>",
          "int main() {",
          "    std::vector<int> nums = {1, 2, 3};",
          "    // numsの各要素をnに代入して繰り返し",
          "    for (int n : nums) {",
          "        std::cout << n << std::endl;",
          "    }",
          "    return 0;",
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
          "variables": [
            "nums"
          ],
          "others": ["main", "1", "n", "}", "0", "#include <iostream>", "#include <vector>", "int", "std", "cout", "endl", "return", "for", "vector", "2", "3", "std::vector<int> nums = {1, 2, 3};"]
        },
        "testCases": [
          {
             "input": "",
            "expected_output": "1\\n2\\n3\\n"
          }
        ]
      },
    {
      "title": "名前で探しましょう「じしょ」",
      "description": "名前で探しましょう「じしょ」の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "辞書とは？",
          "content": "# キーワードで検索！\\n\\n「名前」と「データ」をセットにして保存できるのが **辞書（map＝マップ）** です。\\n\\n**身近な例え：**\\n国語辞典を想像してください。「りんご」という言葉を調べると、その意味が出てきますよね。\\n\\n`map` も同じで、「キー（名前）」を指定すると、それに対応する「値（データ）」が取り出せます。\\n\\nキーワードを使って目的のデータをすぐに見つけられる、とても便利な仕組みです！"
        },
        {
          "title": "std::map",
          "content": "# キーと値のペア\\n\\n`map` では「キー（名前）」と「値（データ）」をセットで保存します。\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\n#include <map>\\n#include <string>\\n\\n// 「文字列」をキーに、「文字列」を値にする辞書\\nstd::map<std::string, std::string> colors;\\ncolors[\"りんご\"] = \"あか\";  // りんご→あか と登録\\nstd::cout << colors[\"りんご\"] << std::endl;\\n```\\n=> あか と表示されます\\n\\n**書き方のルール：**\\n`std::map<キーの型, 値の型>` のように、`< >` の中に2つの型を書きます。\\n\\n**ポイント：**\\n配列は「番号」でアクセスしますが、`map` は「名前（キー）」でアクセスします。"
        }
      ],
      "correctCode": "#include <iostream>\\n#include <map>\\n#include <string>\\nint main() {\\n    std::map<std::string, int> scores;\\n    // 'Math' と入力（キー名）\\n    scores[\"Math\"] = 90;\\n    // 'Math' と入力（同じキー名）\\n    std::cout << scores[\"Math\"] << std::endl;\\n    return 0;\\n}", "holeyCode": "// ライブラリを読み込む\\n___\\n// ライブラリを読み込む\\n___\\n// ライブラリを読み込む\\n___\\n// ブロックを開始\\n___ ___() {\\n    // 文を実行\\n    ___::___<___::___, ___> ___;\\n    // 'Math' と入力（キー名）\\n    ___[\\\"___\\\"] = ___;\\n    // 'Math' と入力（同じキー名）\\n    ___::___ << ___[\\\"___\\\"] << ___::___;\\n    // 0を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "#include <iostream>",
          "#include <map>",
          "#include <string>",
          "int main() {",
          "    std::map<std::string, int> scores;",
          "    // 'Math' と入力（キー名）",
          "    scores[\"Math\"] = 90;",
          "    // 'Math' と入力（同じキー名）",
          "    std::cout << scores[\"Math\"] << std::endl;",
          "    return 0;",
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
          null
        ],
        "candidates": {
          "strings": [
            "Math"
          ],
          "others": ["main", "scores", "0", "}", "#include <iostream>", "#include <map>", "#include <string>", "int", "std", "cout", "endl", "return", "map", "string", "90", "int main() {", "// 'Math' と入力（キー名）", "// 'Math' と入力（同じキー名）", "return 0;"]
        },
        "testCases": [
          {
             "input": "",
            "expected_output": "90\\n"
          }
        ]
      },
    {
      "title": "自分だけの関数を作りましょう",
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "関数とは？",
          "content": "# オリジナルの技を作ろう\\n\\n何度も使う手順をまとめて名前をつけたものを **関数** と呼びます。\\n\\n**身近な例え：**\\n「朝の準備」という言葉を聞くと、「起きる→顔を洗う→着替える→ご飯を食べる」という一連の動作を思い浮かべますよね。\\n\\n関数も同じです！「sayHello」と呼ぶだけで、中に書いた処理を全部やってくれます。\\n\\n一度作れば、「アレやって！」と名前を呼ぶだけで何度でも実行できる、便利なショートカットのようなものです。"
        },
        {
          "title": "手順をまとめる",
          "content": "# 関数の定義\\n\\nやりたいことをひとまとめにして、名前をつけることができます。\\n一度作っておけば、呼び出すだけでいつでも動かせます。\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\n// 「sayHello」という関数を作る（定義する）\\nvoid sayHello() {\\n    std::cout << \"ハロー！\" << std::endl;\\n}\\n\\n// mainの中で呼び出し（使う）\\nsayHello();  // これで「ハロー！」と表示される\\n```\\n\\n**用語解説：**\\n- `void`（ボイド）: 「何も返さない」という意味\\n- `()`: 関数名のあとに必ずつける丸かっこ\\n- `{}`: この中に実行したい処理を書く"
        }
      ],
      "correctCode": "#include <iostream>\\nvoid greet() {\\n    std::cout << \"こんにちは\" << std::endl;\\n}\\nint main() {\\n    // greet関数を呼び出す\\n    greet();\\n    return 0;\\n}", "holeyCode": "// ライブラリを読み込む\\n___\\n// ブロックを開始\\n___ ___() {\\n    // 文を実行\\n    ___::___ << ___ << ___::___;\\n// ブロックを閉じる\\n___\\n// ブロックを開始\\n___ ___() {\\n    // greet関数を呼び出す\\n    ___();\\n    // 0を返す\\n    ___ ___;\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "#include <iostream>",
          "void greet() {",
          "    std::cout << \"こんにちは\" << std::endl;",
          "}",
          "int main() {",
          "    // greet関数を呼び出す",
          "    greet();",
          "    return 0;",
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
          null
        ],
        "candidates": {
          "functions": [
            "greet"
          ],
          "others": ["}", "main", "0", "\"こんにちは\"", "#include <iostream>", "void", "int", "std", "cout", "endl", "return", "void greet() {", "// greet関数を呼び出す", "return 0;"]
        },
        "testCases": [
          {
             "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      }
  ]
};
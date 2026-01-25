export const cppData = {
  "language": "cpp",
  "lessonId": "cpp-1",
  "lessonTitle": "C++ (シープラスプラス) に挑戦！",
  "lessonDescription": "C言語をもっとパワーアップさせた「C++（シープラスプラス）」のきほんを学びましょう。いろいろな機能を使って、自由にプログラムを作れるようになります。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "description": "C++を使って画面にメッセージを出してみましょう。std::cout（シーアウト）という関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "C++（シープラスプラス）とは？",
          "image": "/illustrations/common/monitor.png",
          "content": "# パワフルで高速な言語（げんご）\n\nC++（シープラスプラス）は、C言語を元にしてさらに便利な機能を追加した言語です。\n\n**身近な例え：**\nC言語が「普通の車」だとしたら、C++は「スーパーカー」のような存在です！速さはそのままに、もっと便利な機能がついています。\n\n**どんなところで使われているの？**\n- ゲーム（速さが命！）\n- ブラウザ（ChromeやFirefoxなど）\n- 3DCGソフト\n\nなど、**スピードが求められる場所**で大活躍しています。"
        },
        {
          "title": "C++への入り口",
          "image": "/illustrations/common/monitor.png",
          "content": "# std::cout（シーアウト）を使おう\n\nC++で画面に文字を出すには、`std::cout`（スタンダード・シーアウト）を使います。\n`cout` は「Character OUTput」（文字を出力）の略です。\n\n`<<` という矢印のような記号を使って、文字を画面の方へ送ります。\n\n**イメージ：**\n画面 `<<` \"こんにちは\"\n（文字が矢印の方向に流れていくイメージ！）\n\n**実際のコードを見てみましょう：**\n```cpp\n#include <iostream>  // 入出力を使う準備\nint main() {\n    std::cout << \"C++最高！\" << std::endl;\n    return 0;\n}\n```\n\n**用語解説：**\n- `std::endl`（エンドエル）: 改行して次の行に進む\n- `#include <iostream>`: 入出力機能を使えるようにする"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    // 画面にメッセージを出す関数\n    std::cout << \"Hello, C++!\" << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    // Hello, C++! と入力\n    std::cout << \"___\" << std::endl;\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "int main() {",
        "    // Hello, C++! と入力",
        "    std::cout << \"Hello, C++!\" << std::endl;",
        "    return 0;",
        "}"
      ],
      "lineHints": ["標準入出力ストリームを読み込み、使用可能にします。", "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。", null, "標準出力ストリームに文字列を流し込み、表示します。", "プログラムが正常に終了したことを示す値（通常は0）を返します。", "メイン部分の終わりです。"],
      "candidates": { "strings": ["Hello, C++!"] },
      "testCases": [{ "input": "", "expected_output": "Hello, C++!\n" }]
    },
    {
      "title": "数字を入れる「はこ」",
      "description": "数字をしまっておく「はこ」を作って、中身を表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "変数（へんすう）とは？",
          "image": "/illustrations/common/box.png",
          "content": "# データを保存する「はこ」\n\nプログラムの中で数字や文字に名前をつけて、あとで使いやすくするための仕組みが **変数（へんすう）** です。\n\n**身近な例え：**\nおもちゃ箱に「レゴ入れ」「ぬいぐるみ入れ」とラベルを貼るように、プログラムでも「はこ」に名前をつけてデータをしまっておきます。\n\n例えば、年齢を覚えておきたいなら `age` という名前の「はこ」を作ります。"
        },
        {
          "title": "数字のラベル int",
          "image": "/illustrations/common/box.png",
          "content": "# 整数（せいすう）のラベル\n\n数字（1, 2, 3 のような整数）を入れたいときは、`int`（イント）というラベルを貼ります。\n`int` は「Integer」（整数）の略です。\n\n**実際のコードを見てみましょう：**\n```cpp\nint age = 20;  // 「age」という名前のはこに20を入れる\nstd::cout << age << std::endl;  // ageの中身を表示\n```\n=> 20 と表示されます\n\n**C言語との違い：**\nC言語では `printf(\"%d\", age)` と書いていましたが、C++では `std::cout << age` とシンプルに書けます！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    // int（数字）ラベルのはこを作る\n    int x = 10;\n    // 中身を表示する\n    std::cout << x << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    // 10 と入力\n    int x = ___ ;\n    // x と入力\n    std::cout << ___ << std::endl;\n    return 0;\n}",
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
      "lineHints": [null, null, null, "整数型の変数を宣言し、初期値を代入します。", null, "はこの名前 x を指定して、表示させます。", null, null],
      "candidates": { "variables": ["x"], "numbers": ["10"] },
      "testCases": [{ "input": "", "expected_output": "10\n" }]
    },
    {
      "title": "コンピュータで計算しましょう",
      "description": "C++を使って、たし算をしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "計算はコンピュータにお任せ",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 高速な計算処理\n\nコンピュータは人間よりもずっと速く計算できます。\nどんなに大きな数字でも、プログラミングで指示を出せば一瞬で解いてくれます。"
        },
        {
          "title": "計算の記号",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 矢印で送ろう\n\n`<<` で繋ぐことで、計算した結果をそのまま画面に出すことができます。\n\n**コード例：**\n```cpp\nint cookies = 10;\nint friends = 2;\n// クッキー ÷ 友達 の結果を画面へ！\nstd::cout << cookies / friends << std::endl;\n```\n=> 5"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    // はこに数字を入れる\n    int a = 5;\n    int b = 3;\n    // たし算した結果を表示する\n    std::cout << a + b << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    int a = 5;\n    int b = 3;\n    // + でたし算\n    std::cout << a ___ b << std::endl;\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "int main() {",
        "    int a = 5;",
        "    int b = 3;",
        "    // + でたし算",
        ["    std::cout << a + b << std::endl;", "    std::cout << b + a << std::endl;"],
        "    return 0;",
        "}"
      ],
      "lineHints": [null, null, null, null, null, "たし算なので `+` を使います。", null, null, null],
      "candidates": { "operators": ["+"] },
      "testCases": [{ "input": "", "expected_output": "8\n" }]
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
          "content": "# 割り算の「あまり」を知りたい！\n\n割り算をしたときに、割り切れなくて「あまり」が出ることがありますよね。\n`%` という記号を使うと、その **あまり** だけを計算してくれます。\nこれを「剰余（じょうよ）」と呼びます。"
        },
        {
          "title": "% の使い方",
          "image": "/illustrations/common/robot_math.png",
          "content": "# あまりを計算\n\n```cpp\nstd::cout << 10 % 3 << std::endl;  // => 1\n```\n10 ÷ 3 は 3 あまり 1 なので、「1」が表示されます。\n\n```cpp\nstd::cout << 8 % 2 << std::endl;   // => 0\n```\n8 ÷ 2 は 4 あまり 0 なので、「0」になります（割り切れるということです！）"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    // 10 を 3 で割ったあまりを出力する\n    std::cout << 10 % 3 << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    // 10 を 3 で割ったあまりを出力する\n    std::cout << 10 ___ 3 << std::endl;\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "int main() {",
        "    // 10 を 3 で割ったあまりを出力する",
        "    std::cout << 10 % 3 << std::endl;",
        "    return 0;",
        "}"
      ],
      "lineHints": [null, null, null, "あまりを求める % 演算子を使います。", null, null],
      "candidates": { "operators": ["%", "+", "-", "*", "/"] },
      "testCases": [{ "input": "", "expected_output": "1\n" }]
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
          "content": "# はこの中身をパワーアップ\n\n「今の点数に10点プラスしたい！」というとき、`+=` を使うと便利です。\nこれは「今の数字に足して、そのまま保存する」という合体技です。\n\n```cpp\nint x = 10;\nx += 5;  // x に 5 を足して保存\nstd::cout << x << std::endl;  // => 15\n```"
        },
        {
          "title": "-= も使える",
          "image": "/illustrations/common/box.png",
          "content": "# 引き算バージョン\n\n`-=` を使えば、「今の数字から引いて保存」ができます。\n\n```cpp\nint x = 10;\nx -= 3;  // x から 3 を引いて保存\nstd::cout << x << std::endl;  // => 7\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    // scoreに50を入れる\n    int score = 50;\n    // 10点プラスする\n    score += 10;\n    // 結果を表示\n    std::cout << score << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    // scoreに50を入れる\n    int score = ___ ;\n    // 10点プラスする\n    score ___ 10;\n    // 結果を表示\n    std::cout << score << std::endl;\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "int main() {",
        "    // scoreに50を入れる",
        "    int score = 50;",
        "    // 10点プラスする",
        "    score += 10;",
        "    // 結果を表示",
        "    std::cout << score << std::endl;",
        "    return 0;",
        "}"
      ],
      "lineHints": [null, null, null, "整数型の変数を宣言し、初期値を代入します。", null, "変数の値を計算して、その結果を同じ変数に再代入します。", null, null, null, null],
      "candidates": { "operators": ["+=", "-=", "*=", "/="], "numbers": ["50", "10"] },
      "testCases": [{ "input": "", "expected_output": "60\n" }]
    },
    {
      "title": "文字と「はこ」を並べましょう",
      "description": "複数の項目を組み合わせて、一つの文章として表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "連結（れんけつ）とは？",
          "image": "/illustrations/common/fstring.png",
          "content": "# 情報を組み合わせて表示する\n\n文章の途中に、変数（はこ）の中身を流し込んで一つのメッセージにすることを **連結** と呼びます。\nC++では `<<` を使って、電車のように情報を連結して画面へ送ります。"
        },
        {
          "title": "<< でつなげましょう",
          "image": "/illustrations/common/fstring.png",
          "content": "# ガチャンと連結！\n\n`<<` を何回も使うことで、文字やはこの中身をどんどん繋げることができます。\n\n**コード例：**\n```cpp\nint hour = 15;\nstd::cout << \"今は \" << hour << \" 時です\" << std::endl;\n```\n=> 今は 15 時です"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    // ageに10を入れる\n    int age = 10;\n    // 文字とはこを並べて表示する\n    std::cout << \"I am \" << age << \" years old.\" << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    int age = 10;\n    // age と入力\n    std::cout << \"I am \" << ___ << \" years old.\" << std::endl;\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "int main() {",
        "    int age = 10;",
        "    // age と入力",
        "    std::cout << \"I am \" << age << \" years old.\" << std::endl;",
        "    return 0;",
        "}"
      ],
      "lineHints": [null, null, "整数型の変数を宣言し、初期値を代入します。", null, "標準出力ストリームに文字列を流し込み、表示します。", null, null],
      "candidates": { "variables": ["age"] },
      "testCases": [{ "input": "", "expected_output": "I am 10 years old.\n" }]
    },
    {
      "title": "自由に伸びる「はこ」vector",
      "description": "vector（ベクター）という機能を使うと、データの数を自由に変えられる「便利な配列」が作れます。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "動的配列（どうてきはいれつ）とは？",
          "image": "/illustrations/common/list.png",
          "content": "# 長さが変わる便利な列\n\nあとから中身を増やしたり減らしたりできる「はこ」の列を **動的配列（どうてきはいれつ）** と呼びます。\n\n**身近な例え：**\n普通の配列は「決まった数のロッカー」ですが、`vector` は「必要に応じて増やせるロッカー」のようなものです。\n\n「伸び縮みする魔法（まほう）の配列」みたいなものです。\nC++では `vector`（ベクター）という機能を使ってこれを作ります。"
        },
        {
          "title": "std::vector",
          "image": "/illustrations/common/list.png",
          "content": "# 書き方のルール\n\n`< >` の中に「何を入れるか」を指定します。\n- `<int>`: 整数を入れる\n- `<std::string>`: 文字列を入れる\n\n**実際のコードを見てみましょう：**\n```cpp\n#include <vector>  // vectorを使う準備\n\n// 文字列を入れる vector を作る\nstd::vector<std::string> items = {\"Apple\", \"Orange\"};\nstd::cout << items[0] << std::endl;  // 0番目を表示\n```\n=> Apple と表示されます\n\n**ポイント：**\n- 普通の配列と同じく、番号は0から始まります\n- `items[0]` は1番目の要素「Apple」です"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <vector>\n#include <string>\nint main() {\n    // くだものの配列（vector）を作る\n    std::vector<std::string> fruits = {\"りんご\", \"バナナ\"};\n    // 2番目のデータを表示する\n    std::cout << fruits[1] << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\n#include <vector>\n#include <string>\nint main() {\n    std::vector<std::string> fruits = {\"りんご\", \"バナナ\"};\n    // 1 と入力（2番目の番号は1）\n    std::cout << fruits[___] << std::endl;\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "#include <vector>",
        "#include <string>",
        "int main() {",
        "    std::vector<std::string> fruits = {\"りんご\", \"バナナ\"};",
        "    // 1 と入力（2番目の番号は1）",
        "    std::cout << fruits[1] << std::endl;",
        "    return 0;",
        "}"
      ],
      "lineHints": [null, "可変長配列（ベクター）ライブラリを読み込み、使用可能にします。", "文字列クラスライブラリを読み込み、使用可能にします。", null, "{\"りんご\", \"バナナ\"} と入力して初期化します。", null, "2番目の番号は 1 です。", null, null],
      "candidates": { "numbers": ["1"] },
      "testCases": [{ "input": "", "expected_output": "バナナ\n" }]
    },
    {
      "title": "「もし〜なら」で分けましょう",
      "description": "点数によって表示するメッセージを変えてみましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "条件分岐（じょうけんぶんき）とは？",
          "image": "/illustrations/common/if.png",
          "content": "# プログラムに判断させてみよう\n\n「雨が降ったら傘をさす」「晴れたら外で遊ぶ」\nこんなふうに、状況によって動きを変えることを **条件分岐（じょうけんぶんき）** と呼びます。\nプログラムに「もし〜なら、これをしてね」と教えてあげましょう。"
        },
        {
          "title": "if文",
          "image": "/illustrations/common/if.png",
          "content": "# ( ) と { } を使いましょう\n\nC++でも、`if (条件)` のあとに `{ }` を入力して、その中にやりたいことを入力します。\n\n**コード例：**\n```cpp\nint temp = 30;\nif (temp > 25) {\n    std::cout << \"暑いですね\" << std::endl;\n}"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    // scoreに100を入れる\n    int score = 100;\n    // もし80より大きければ表示する\n    if (score > 80) {\n        std::cout << \"Perfect\" << std::endl;\n    }\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    // scoreに100を入れる\n    int score = ___ ;\n    // > で「より大きい」を比較\n    if (score ___ 80) {\n        // 'Perfect' と入力\n        std::cout << \"___\" << std::endl;\n    }\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "int main() {",
        "    // scoreに100を入れる",
        "    int score = 100;",
        "    // > で「より大きい」を比較",
        "    if (score > 80) {",
        "        // 'Perfect' と入力",
        "        std::cout << \"Perfect\" << std::endl;",
        "    }",
        "    return 0;",
        "}"
      ],
      "lineHints": [null, null, null, "整数型の変数を宣言し、初期値を代入します。", null, "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。", null, "標準出力ストリームに文字列を流し込み、表示します。", null, null, null],
      "candidates": { "operators": [">"], "strings": ["Perfect"] },
      "testCases": [{ "input": " ", "expected_output": "Perfect\n" }]
    },
    {
      "title": "ちがう場合はどうしましょう？",
      "description": "else（エルス）を使って、「そうでなければ」の動きを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "それ以外の場合は？",
          "image": "/illustrations/common/if.png",
          "content": "# else（エルス）の役割\n\n条件に当てはまらなかったときの別のルートを作るのが **else（エルス）** です。「もし〜なら」とセットで使うことで、プログラムのルートを2つに分けることができます。"
        },
                {
          "title": "elseブロック",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# どちらかを選びます\n\n条件に当てはまらないときの動きは `else` を使って入力します。\n\n**コード例 ：**\n```cpp\nint age = 15;\nif (age >= 20) {\n    std::cout << \"大人\" << std::endl;\n} else {\n    std::cout << \"子供\" << std::endl;\n}"
                }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    // ageに10を入れる\n    int age = 10;\n    // 20さい以上かどうかで分ける\n    if (age >= 20) {\n        std::cout << \"Adult\" << std::endl;\n    } else {\n        // それ以外の場合\n        std::cout << \"Minor\" << std::endl;\n    }\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    // ageに10を入れる\n    int age = ___ ;\n    // 20以上かを比較する演算子\n    if (age ___ 20) {\n        // 20歳以上のときのメッセージ（'Adult'）\n        std::cout << \"___\" << std::endl;\n    // else で「それ以外」\n    } ___ {\n        // それ以外のメッセージ（'Minor'）\n        std::cout << \"___\" << std::endl;\n    }\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "int main() {",
        "    // ageに10を入れる",
        "    int age = 10;",
        "    // 20以上かを比較する演算子",
        "    if (age >= 20) {",
        "        // 20歳以上のときのメッセージ（'Adult'）",
        "        std::cout << \"Adult\" << std::endl;",
        "    // else で「それ以外」",
        "    } else {",
        "        // それ以外のメッセージ（'Minor'）",
        "        std::cout << \"Minor\" << std::endl;",
        "    }",
        "    return 0;",
        "}"
      ],
      "lineHints": [null, null, null, "整数型の変数を宣言し、初期値を代入します。", null, "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。", null, "標準出力ストリームに文字列を流し込み、表示します。", null, "もし条件が満たされなかった場合に実行する処理を記述します。", null, "標準出力ストリームに文字列を流し込み、表示します。", null, null, null],
      "candidates": { "keywords": ["else"] },
      "testCases": [{ "input": " ", "expected_output": "Minor\n" }]
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
          "content": "# もっと細かい条件で\n\n「10歳以上、かつ、20歳未満」のように、2つの条件を両方クリアしているかチェックしたいときがあります。\nそんなときは `&&` （アンド）を使います。\n逆に「どちらか片方でもOK」なら `||` （オア）を使います。"
        },
        {
          "title": "&& と || の使い方",
          "image": "/illustrations/common/if.png",
          "content": "# 条件の合体技\n\n```cpp\nint age = 15;\nif (age >= 10 && age < 20) {\n    std::cout << \"10代です\" << std::endl;\n}\n```\n\n`&&` は「かつ」、`||` は「または」の意味です。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    // scoreに85を入れる\n    int score = 85;\n    // 80以上 かつ 100以下 ならメッセージを出す\n    if (score >= 80 && score <= 100) {\n        std::cout << \"Pass\" << std::endl;\n    }\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    // scoreに85を入れる\n    int score = ___ ;\n    // 80以上 かつ 100以下 ならメッセージを出す\n    if (score >= 80 ___ score <= 100) {\n        // 結果を出力\n        std::cout << \"___\" << std::endl;\n    }\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "int main() {",
        "    // scoreに85を入れる",
        "    int score = 85;",
        "    // 80以上 かつ 100以下 ならメッセージを出す",
        "    if (score >= 80 && score <= 100) {",
        "        // 結果を出力",
        "        std::cout << \"Pass\" << std::endl;",
        "    }",
        "    return 0;",
        "}"
      ],
      "lineHints": [null, null, null, "整数型の変数を宣言し、初期値を代入します。", null, "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。", null, "標準出力ストリームに文字列を流し込み、表示します。", null, null, null],
      "candidates": { "operators": ["&&", "||"], "numbers": ["85"], "strings": ["Pass"] },
      "testCases": [{ "input": "", "expected_output": "Pass\n" }]
    },
    {
      "title": "中身を全部出してみましょう",
      "description": "範囲for文という機能を使って、配列の中身を一つずつ順番に表示します。",
      "difficulty": "easy",
      "orderIndex": 11,
      "tutorialSlides": [
        {
          "title": "繰り返し（ループ）とは？",
          "image": "/illustrations/common/loop.png",
          "content": "# 自動で順番に処理する\n\n同じ作業を何度も繰り返すための仕組みが **ループ（繰り返し）** です。\n\n**身近な例え：**\n学校で出席をとるとき、「田中さん」「鈴木さん」「佐藤さん」...と一人ずつ名前を呼びますよね。ループはこの「順番に全員をチェック」する作業を自動でやってくれます。\n\n配列の中身を一つずつ順番に全部チェックしたいときなどに非常に役立ちます。"
        },
        {
          "title": "範囲for文",
          "image": "/illustrations/common/loop.png",
          "content": "# for (変数 : コンテナ)\n\nC++には **範囲for文（はんいフォーぶん）** という便利なループがあります。\n「はこ（配列）」の中に入っているものを、最初から最後まで順番に取り出せます。\n\n**実際のコードを見てみましょう：**\n```cpp\nstd::vector<std::string> fruits = {\"Apple\", \"Banana\"};\n// fruits の中身を一つずつ f に入れて繰り返す\nfor (std::string f : fruits) {\n    std::cout << f << std::endl;\n}\n```\n=> Apple と Banana が順番に表示されます\n\n**読み方：**\n「fruits の中身を、一つずつ f に入れながら繰り返す」\n\n**ポイント：**\nC言語の `for (int i = 0; i < 2; i++)` より、とても簡単に書けます！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <vector>\nint main() {\n    // 配列を作る\n    std::vector<int> nums = {1, 2, 3};\n    // 全部取り出すループ\n    for (int n : nums) {\n        std::cout << n << std::endl;\n    }\n    return 0;\n}",
      "holeyCode": "#include <iostream>\n#include <vector>\nint main() {\n    std::vector<int> nums = {1, 2, 3};\n    // nums で配列を指定\n    for (int n : ___ ) {\n        std::cout << n << std::endl;\n    }\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "#include <vector>",
        "int main() {",
        "    std::vector<int> nums = {1, 2, 3};",
        "    // nums で配列を指定",
        "    for (int n : nums) {",
        "        std::cout << n << std::endl;",
        "    }",
        "    return 0;",
        "}"
      ],
      "lineHints": [null, null, null, null, null, "指定された回数や範囲で、繰り返し処理（ループ）を行います。", null, null, null, null],
      "candidates": { "variables": ["nums"] },
      "testCases": [{ "input": " ", "expected_output": "1\n2\n3\n" }]
    },
    {
      "title": "名前で探しましょう「じしょ」",
      "description": "std::map（辞書）を使って、名前を指定してデータを取り出してみましょう。",
      "difficulty": "easy",
      "orderIndex": 12,
      "tutorialSlides": [
        {
          "title": "辞書（じしょ）とは？",
          "image": "/illustrations/common/dict.png",
          "content": "# キーワードで検索（けんさく）！\n\n「名前」と「データ」をセットにして保存できるのが **辞書（map＝マップ）** です。\n\n**身近な例え：**\n国語辞典（こくごじてん）を想像してください。「りんご」という言葉を調べると、その意味が出てきますよね。\n\n`map` も同じで、「キー（名前）」を指定すると、それに対応する「値（データ）」が取り出せます。\n\nキーワードを使って目的のデータをすぐに見つけられる、とても便利な仕組みです！"
        },
        {
          "title": "std::map",
          "image": "/illustrations/common/dict.png",
          "content": "# キーと値（あたい）のペア\n\n`map` では「キー（名前）」と「値（データ）」をセットで保存します。\n\n**実際のコードを見てみましょう：**\n```cpp\n#include <map>\n#include <string>\n\n// 「文字列」をキーに、「文字列」を値にする辞書\nstd::map<std::string, std::string> colors;\ncolors[\"りんご\"] = \"あか\";  // りんご→あか と登録\nstd::cout << colors[\"りんご\"] << std::endl;\n```\n=> あか と表示されます\n\n**書き方のルール：**\n`std::map<キーの型, 値の型>` のように、`< >` の中に2つの型を書きます。\n\n**ポイント：**\n配列は「番号」でアクセスしますが、`map` は「名前（キー）」でアクセスします。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <map>\n#include <string>\nint main() {\n    // 辞書のはこを作る\n    std::map<std::string, int> scores;\n    scores[\"Math\"] = 90;\n    // キーを指定して表示する\n    std::cout << scores[\"Math\"] << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\n#include <map>\n#include <string>\nint main() {\n    std::map<std::string, int> scores;\n    // 'Math' と入力（キー名）\n    scores[\"___\"] = 90;\n    // 'Math' と入力（同じキー名）\n    std::cout << scores[\"___\"] << std::endl;\n    return 0;\n}",
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
      "lineHints": [null, null, null, null, null, null, "名前（キー）として \"Math\" と入力します。", null, "同じく \"Math\" と入力してデータを取り出します。", null, null],
      "candidates": { "strings": ["Math"] },
      "testCases": [{ "input": " ", "expected_output": "90\n" }]
    },
    {
      "title": "自分だけの関数を作りましょう",
      "description": "一連の手順をまとめて、名前をつけた「関数（かんすう）」を作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 13,
      "tutorialSlides": [
        {
          "title": "関数（かんすう）とは？",
          "image": "/illustrations/common/function.png",
          "content": "# オリジナルの技を作ろう\n\n何度も使う手順をまとめて名前をつけたものを **関数（かんすう）** と呼びます。\n\n**身近な例え：**\n「朝の準備」という言葉を聞くと、「起きる→顔を洗う→着替える→ご飯を食べる」という一連の動作を思い浮かべますよね。\n\n関数も同じです！「sayHello」と呼ぶだけで、中に書いた処理を全部やってくれます。\n\n一度作れば、「アレやって！」と名前を呼ぶだけで何度でも実行できる、便利なショートカットのようなものです。"
        },
        {
          "title": "手順をまとめる",
          "image": "/illustrations/common/function.png",
          "content": "# 関数の定義（ていぎ）\n\nやりたいことをひとまとめにして、名前をつけることができます。\n一度作っておけば、呼び出すだけでいつでも動かせます。\n\n**実際のコードを見てみましょう：**\n```cpp\n// 「sayHello」という関数を作る（定義する）\nvoid sayHello() {\n    std::cout << \"ハロー！\" << std::endl;\n}\n\n// mainの中で呼び出し（使う）\nsayHello();  // これで「ハロー！」と表示される\n```\n\n**用語解説：**\n- `void`（ボイド）: 「何も返さない」という意味\n- `()`: 関数名のあとに必ずつける丸かっこ\n- `{}`: この中に実行したい処理を書く"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nvoid greet() {\n    std::cout << \"Hello\" << std::endl;\n}\nint main() {\n    // 関数を実行する\n    greet();\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nvoid greet() {\n    std::cout << \"Hello\" << std::endl;\n}\nint main() {\n    // greet で関数を呼び出す\n    ___();\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "void greet() {",
        "    std::cout << \"Hello\" << std::endl;",
        "}",
        "int main() {",
        "    // greet で関数を呼び出す",
        "    greet();",
        "    return 0;",
        "}"
      ],
      "lineHints": [null, "void型の値を返す関数（greet）を定義します。", null, "関数の終わりです。", null, null, "関数（greet）を呼び出して実行します。", null, null],
      "candidates": { "functions": ["greet"] },
      "testCases": [{ "input": " ", "expected_output": "Hello\n" }]
    }
  ]
};
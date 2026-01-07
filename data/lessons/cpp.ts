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
          "title": "C++とは？",
          "image": "/illustrations/common/monitor.png",
          "content": "# パワフルで高速な言葉\n\nC++は、C言語を元にしてさらに便利な機能を追加した言葉です。ゲームエンジンやブラウザなど、とても速い動きが求められるプログラムを作るのに最適です。"
        },
        {
          "title": "C++への入り口",
          "image": "/illustrations/common/monitor.png",
          "content": "# std::cout を使いましょう\n\nC++で画面に文字を出したいときは、`std::cout` という命令と `<<` という記号を使います。\n\n**コード例：**\n```cpp\n#include <iostream>\nint main() {\n    std::cout << \"C++最高！\" << std::endl;\n    return 0;\n}\n```\n=> C++最高！\n\n`std::endl` は改行（かいぎょう）を意味します。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    // 画面にメッセージを出す関数\n    std::cout << \"Hello, C++!\" << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    // 画面にメッセージを出す関数\n    std::cout << \"___\" << std::endl;\n    return 0;\n}",
      "correctLines": ["#include <iostream>", "int main() {", "    std::cout << \"Hello, C++!\" << std::endl;", "    return 0;", "}"],
      "lineHints": [
        "入出力の機能を使えるように準備します。",
        "ここからプログラムがスタートします、という合図です。",
        "std::cout と << を使って、文字を画面に出します。",
        "正常に終わったことを報告します。",
        "メイン部分の終わりです。"
      ],
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
          "content": "# データを保存する場所\n\nプログラムの中で数字や文字に名前をつけて、あとで使いやすくするための仕組みが **変数（へんすう）** です。"
        },
        {
          "title": "数字のラベル int",
          "image": "/illustrations/common/box.png",
          "content": "# 整数（せいすう）のラベル\n\n数字を入れたいときは、`int`（イント）というラベルを貼ります。\n\n**コード例：**\n```cpp\nint age = 20;\nstd::cout << age << std::endl;\n```\n=> 20"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    // int（数字）ラベルのはこを作る\n    int x = 10;\n    // 中身を表示する\n    std::cout << x << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    // int（数字）ラベルのはこを作る\n    int x = ___ ;\n    // 中身を表示する\n    std::cout << ___ << std::endl;\n    return 0;\n}",
      "correctLines": ["#include <iostream>", "int main() {", "    int x = 10;", "    std::cout << x << std::endl;", "    return 0;", "}"],
      "lineHints": [null, null, "x = 10 と入力しましょう。", "はこの名前 x を指定して、表示させます。"],
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
          "content": "# 高速な計算処理\n\nコンピュータは人間よりもずっと速く計算できます。プログラミングでは、算数と同じ記号を使って計算の指示を出します。"
        },
        {
          "title": "計算の記号",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 結果をそのまま出せます\n\n`<<` で繋ぐことで、計算した結果をそのまま画面に出すことができます。\n\n**コード例：**\n```cpp\nint cookies = 10;\nint friends = 2;\nstd::cout << cookies / friends << std::endl;\n```\n=> 5"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    // はこに数字を入れる\n    int a = 5;\n    int b = 3;\n    // たし算した結果を表示する\n    std::cout << a + b << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    // はこに数字を入れる\n    int a = 5;\n    int b = 3;\n    // たし算した結果を表示する\n    std::cout << a ___ b << std::endl;\n    return 0;\n}",
      "correctLines": ["#include <iostream>", "int main() {", "    int a = 5;", "    int b = 3;", "    std::cout << a + b << std::endl;", "    return 0;", "}"],
      "lineHints": [null, null, "a = 5 と入力しましょう。", "b = 3 と入力しましょう。", "たし算なので `+` を使います。"],
      "candidates": { "operators": ["+"] },
      "testCases": [{ "input": "", "expected_output": "8\n" }]
    },
    {
      "title": "文字と「はこ」を並べましょう",
      "description": "複数の項目を組み合わせて、一つの文章として表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "連結（れんけつ）とは？",
          "image": "/illustrations/common/fstring.png",
          "content": "# 情報を組み合わせて表示する\n\n文章の途中に、変数（はこ）の中身を流し込んで一つのメッセージにすることを **連結** と呼びます。C++では `<<` を使って情報を繋いでいきます。"
        },
        {
          "title": "<< でつなげましょう",
          "image": "/illustrations/common/fstring.png",
          "content": "# ストリーム出力\n\n`<<` を何回も使うことで、文字やはこの中身をどんどん並べていくことができます。\n\n**コード例：**\n```cpp\nint hour = 15;\nstd::cout << \"今は \" << hour << \" 時です\" << std::endl;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    // ageに10を入れる\n    int age = 10;\n    // 文字とはこを並べて表示する\n    std::cout << \"I am \" << age << \" years old.\" << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    // ageに10を入れる\n    int age = 10;\n    // 文字とはこを並べて表示する\n    std::cout << \"I am \" << ___ << \" years old.\" << std::endl;\n    return 0;\n}",
      "correctLines": ["#include <iostream>", "int main() {", "    int age = 10;", "    std::cout << \"I am \" << age << \" years old.\" << std::endl;", "    return 0;", "}"],
      "lineHints": [null, null, "age に 10 を入力します。", "はこの名前 age を指定します。"],
      "candidates": { "variables": ["age"] },
      "testCases": [{ "input": "", "expected_output": "I am 10 years old.\n" }]
    },
    {
      "title": "自由に伸びる「はこ」vector",
      "description": "vector（ベクター）という機能を使うと、データの数を自由に変えられる「便利な配列」が作れます。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "動的配列（どうてきはいれつ）とは？",
          "image": "/illustrations/common/list.png",
          "content": "# 長さが変わる便利な列\n\nあとから中身を増やしたり減らしたりできる「はこ」の列を **動的配列** と呼びます。C++では `vector` という機能を使ってこれを作ります。"
        },
        {
          "title": "std::vector",
          "image": "/illustrations/common/list.png",
          "content": "# 動的な配列\n\nあとからデータを増やしたり減らしたりできる、とても便利な配列です。使い方は普通の配列と同じく、0番から数えます。\n\n**コード例：**\n```cpp\n#include <vector>\nstd::vector<std::string> items = {\"Apple\", \"Orange\"};\nstd::cout << items[0] << std::endl;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <vector>\nint main() {\n    // 数字の配列（vector）を作る\n    std::vector<int> nums = {10, 20};\n    // 2番目のデータを表示する\n    std::cout << nums[1] << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\n#include <vector>\nint main() {\n    // 数字の配列（vector）を作る\n    std::vector<int> nums = {10, 20};\n    // 2番目のデータを表示する\n    std::cout << nums[___] << std::endl;\n    return 0;\n}",
      "correctLines": ["#include <iostream>", "#include <vector>", "int main() {", "    std::vector<int> nums = {10, 20};", "    std::cout << nums[1] << std::endl;", "    return 0;", "}"],
      "lineHints": [null, "vector を使うためにインクルードします。", null, "{10, 20} と入力して初期化します。", "2番目の番号は 1 です。"],
      "candidates": { "numbers": ["1"] },
      "testCases": [{ "input": "", "expected_output": "20\n" }]
    },
    {
      "title": "「もし〜なら」で分けましょう",
      "description": "点数によって表示するメッセージを変えてみましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "条件分岐（じょうけんぶんき）とは？",
          "image": "/illustrations/common/if.png",
          "content": "# プログラムに判断させる\n\n状況によって動きを変えることを **条件分岐** と呼びます。プログラムに賢い判断をさせてみましょう。"
        },
        {
          "title": "if文",
          "image": "/illustrations/common/if.png",
          "content": "# ( ) と { } を使いましょう\n\nC++でも、`if (条件)` のあとに `{ }` を入力して、その中にやりたいことを入力します。\n\n**コード例：**\n```cpp\nint temp = 30;\nif (temp > 25) {\n    std::cout << \"暑いですね\" << std::endl;\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    // scoreに100を入れる\n    int score = 100;\n    // もし80より大きければ表示する\n    if (score > 80) {\n        std::cout << \"Perfect\" << std::endl;\n    }\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    // scoreに100を入れる\n    int score = 100;\n    // もし80より大きければ表示する\n    if (score ___ 80) {\n        std::cout << \"___\" << std::endl;\n    }\n    return 0;\n}",
      "correctLines": ["#include <iostream>", "int main() {", "    int score = 100;", "    if (score > 80) {", "        std::cout << \"Perfect\" << std::endl;", "    }", "    return 0;", "}"],
      "lineHints": [null, null, "score = 100 と入力しましょう。", "比較するための記号 `>` を入力しましょう。", "Perfect と表示します。"],
      "candidates": { "operators": [">"], "strings": ["Perfect"] },
      "testCases": [{ "input": " ", "expected_output": "Perfect\n" }]
    },
    {
      "title": "ちがう場合はどうしましょう？",
      "description": "else（エルス）を使って、「そうでなければ」の動きを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "それ以外の場合は？",
          "image": "/illustrations/common/if.png",
          "content": "# else（エルス）の役割\n\n条件に当てはまらなかったときの別のルートを作るのが **else（エルス）** です。「もし〜なら」とセットで使うことで、プログラムのルートを2つに分けることができます。"
        },
                {
                  "title": "elseブロック",
                  "image": "/illustrations/common/if.png",
                  "content": "# どちらかを選びます\n\n条件に当てはまらないときの動きは `else` を使って入力します。\n\n**コード例 ：**\n```cpp\nint age = 15;\nif (age >= 20) {\n    std::cout << \"大人\" << std::endl;\n} else {\n    std::cout << \"子供\" << std::endl;\n}\n```"
                }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    // ageに10を入れる\n    int age = 10;\n    // 20さい以上かどうかで分ける\n    if (age >= 20) {\n        std::cout << \"Adult\" << std::endl;\n    } else {\n        // それ以外の場合\n        std::cout << \"Minor\" << std::endl;\n    }\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    // ageに10を入れる\n    int age = 10;\n    // 20さい以上かどうかで分ける\n    if (age >= 20) {\n        std::cout << \"Adult\" << std::endl;\n    } ___ {\n        // それ以外の場合\n        std::cout << \"Minor\" << std::endl;\n    }\n    return 0;\n}",
      "correctLines": ["#include <iostream>", "int main() {", "    int age = 10;", "    if (age >= 20) {", "        std::cout << \"Adult\" << std::endl;", "    } else {", "        std::cout << \"Minor\" << std::endl;", "    }", "    return 0;", "}"],
      "lineHints": [null, null, "age に 10 を入力します。", null, null, "そうでなければ、をあらわす `else` を入力しましょう。"],
      "candidates": { "keywords": ["else"] },
      "testCases": [{ "input": " ", "expected_output": "Minor\n" }]
    },
    {
      "title": "中身を全部出してみましょう",
      "description": "範囲for文という機能を使って、配列の中身を一つずつ順番に表示します。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "繰り返し（ループ）とは？",
          "image": "/illustrations/common/loop.png",
          "content": "# 自動で順番に処理する\n\n同じ作業を何度も繰り返すための仕組みが **ループ** です。配列の中身を一つずつ順番に全部チェックしたいときなどに非常に役立ちます。"
        },
        {
          "title": "範囲for文",
          "image": "/illustrations/common/loop.png",
          "content": "# for (変数 : コンテナ)\n\n「はこ（配列）」の中に入っているものを、最初から最後まで順番に取り出す便利なループです。\n\n**コード例：**\n```cpp\nstd::vector<std::string> fruits = {\"Apple\", \"Banana\"};\nfor (std::string f : fruits) {\n    std::cout << f << std::endl;\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <vector>\nint main() {\n    // 配列を作る\n    std::vector<int> nums = {1, 2, 3};\n    // 全部取り出すループ\n    for (int n : nums) {\n        std::cout << n << std::endl;\n    }\n    return 0;\n}",
      "holeyCode": "#include <iostream>\n#include <vector>\nint main() {\n    // 配列を作る\n    std::vector<int> nums = {1, 2, 3};\n    // 全部取り出すループ\n    for (int n : ___ ) {\n        std::cout << n << std::endl;\n    }\n    return 0;\n}",
      "correctLines": ["#include <iostream>", "#include <vector>", "int main() {", "    std::vector<int> nums = {1, 2, 3};", "    for (int n : nums) {", "        std::cout << n << std::endl;", "    }", "    return 0;", "}"],
      "lineHints": [null, null, null, null, "取り出ししたい対象の配列 nums を指定します。"],
      "candidates": { "variables": ["nums"] },
      "testCases": [{ "input": " ", "expected_output": "1\n2\n3\n" }]
    },
    {
      "title": "名前で探しましょう「じしょ」",
      "description": "std::map（マップ）を使って、名前を指定してデータを取り出してみましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "マップ（辞書）とは？",
          "image": "/illustrations/common/dict.png",
          "content": "# キーワードで検索できる仕組み\n\n「名前」と「データ」をセットにして保存できるのが **マップ** です。辞書を引くように、キーワードを使って目的のデータをすぐに見つけられます。"
        },
                {
                  "title": "std::map",
                  "image": "/illustrations/common/dict.png",
                  "content": "# キーとあたいのペア\n\n「名前」と「データ」をセットにして保存できます。辞書のように使うことができ ます。\n\n**コード例：**\n```cpp\n#include <map>\n#include <string>\nstd::map<std::string, std::string> colors;\ncolors[\"red\"] = \"あか\";\nstd::cout << colors[\"red\"] << std::endl;\n```"
                }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <map>\n#include <string>\nint main() {\n    // マップのはこを作る\n    std::map<std::string, int> scores;\n    scores[\"Math\"] = 90;\n    // キーを指定して表示する\n    std::cout << scores[\"Math\"] << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\n#include <map>\n#include <string>\nint main() {\n    // マップのはこを作る\n    std::map<std::string, int> scores;\n    scores[\"___\"] = 90;\n    // キーを指定して表示する\n    std::cout << scores[\"___\"] << std::endl;\n    return 0;\n}",
      "correctLines": ["#include <iostream>", "#include <map>", "#include <string>", "int main() {", "    std::map<std::string, int> scores;", "    scores[\"Math\"] = 90;", "    std::cout << scores[\"Math\"] << std::endl;", "    return 0;", "}"],
      "lineHints": [null, null, null, null, null, "名前（キー）として \"Math\" と入力します。", "同じく \"Math\" と入力してデータを取り出します。"],
      "candidates": { "strings": ["Math"] },
      "testCases": [{ "input": " ", "expected_output": "90\n" }]
    },
    {
      "title": "自分だけの関数を作りましょう",
      "description": "一連の手順をまとめて、名前をつけた「関数（かんすう）」を作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "関数（かんすう）とは？",
          "image": "/illustrations/common/function.png",
          "content": "# 処理のパッケージ化\n\nやりたいことをひとまとめにして、名前をつけることができます。呼び出すだけでいつでも動かせます。一度作れば名前を呼ぶだけで何度でも実行できる、便利なショートカットのようなものです。"
        },
                {
                  "title": "手順をまとめる",
                  "image": "/illustrations/common/function.png",
                  "content": "# 関数の定義\n\nやりたいことをひとまとめにして、名前をつけることができます。呼び出すだけでいつでも 動かせます。\n\n**コード例：**\n```cpp\nvoid sayHello() {\n    std::cout << \"ハロー！\" << std::endl;\n}\n\n// mainの中で呼び出し\nsayHello();\n```"
                }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nvoid greet() {\n    std::cout << \"Hello\" << std::endl;\n}\nint main() {\n    // 関数を実行する\n    greet();\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nvoid greet() {\n    std::cout << \"Hello\" << std::endl;\n}\nint main() {\n    // 関数を実行する\n    ___();\n    return 0;\n}",
      "correctLines": ["#include <iostream>", "void greet() {", "    std::cout << \"Hello\" << std::endl;", "}", "int main() {", "    greet();", "    return 0;", "}"],
      "lineHints": [null, "greet という名前の関数を定義します。", null, "関数の終わりです。", null, "greet(); と入力して、関数を実行します。"],
      "candidates": { "functions": ["greet"] },
      "testCases": [{ "input": " ", "expected_output": "Hello\n" }]
    }
  ]
};
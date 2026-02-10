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
      "correctCode": "#include <iostream>\\nint main() {\\n    // こんにちは, C++! と入力\\n    std::cout << \"こんにちは, C++!\" << std::endl;\\n    return 0;\\n}",
      "holeyCode": "___\\n___ ___() {\\n    // こんにちは, C++! と入力\\n    ___::___ << ___ << ___::___;\\n    ___ ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "int main() {",
          "    // こんにちは, C++! と入力",
          "    std::cout << \"こんにちは, C++!\" << std::endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ストリームを読み込み、使用可能にします。",
          "int型の戻り値を持つmain関数を定義します。",
          null,
          "std名前空間のcoutで文字列を出力し、endlで改行します。",
          "returnで0を返してプログラムの正常終了を示します。",
          "関数の終わりを示す閉じ括弧です。"
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
      "correctCode": "#include <iostream>\\nint main() {\\n    // 10 と入力\\n    int x = 10;\\n    // x と入力\\n    std::cout << x << std::endl;\\n    return 0;\\n}",
      "holeyCode": "___\\n___ ___() {\\n    // 10 と入力\\n    ___ ___ = ___;\\n    // x と入力\\n    ___::___ << ___ << ___::___;\\n    ___ ___;\\n___",
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
          "標準入出力ストリームを読み込みます。",
          "int型の戻り値を持つmain関数を定義します。",
          null,
          "int型の変数xを宣言し、10を代入します。",
          null,
          "std名前空間のcoutでxを出力し、endlで改行します。",
          "returnで0を返してプログラムの正常終了を示します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "variables": [
            "x"
          ],
          "numbers": [
            "10"
          ],
          "others": ["10;", "main", "0", "}", "#include <iostream>", "int", "std", "cout", "endl", "return"]
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
      "correctCode": "#include <iostream>\\nint main() {\\n    int a = 5;\\n    int b = 3;\\n    // + でたし算\\n    std::cout << a + b << std::endl;\\n    return 0;\\n}",
      "holeyCode": "___\\n___ ___() {\\n    ___ ___ = ___;\\n    ___ ___ = ___;\\n    // + でたし算\\n    ___::___ << ___ ___ ___ << ___::___;\\n    ___ ___;\\n___",
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
          "標準入出力ストリームを読み込みます。",
          "int型の戻り値を持つmain関数を定義します。",
          "int型の変数aを宣言し、5を代入します。",
          "int型の変数bを宣言し、3を代入します。",
          null,
          "std名前空間のcoutでa + bの結果を出力し、endlで改行します。",
          "returnで0を返してプログラムの正常終了を示します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "operators": [
            "+"
          ],
          "others": ["main", "5", "3", "endl", "0", "}", "#include <iostream>", "int", "std", "cout", "a", "b", "return"]
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
      "correctCode": "#include <iostream>\\nint main() {\\n    // 10 を 3 で割ったあまりを出力する\\n    std::cout << 10 % 3 << std::endl;\\n    return 0;\\n}",
      "holeyCode": "___\\n___ ___() {\\n    // 10 を 3 で割ったあまりを出力する\\n    ___::___ << ___ ___ ___ << ___::___;\\n    ___ ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "int main() {",
          "    // 10 を 3 で割ったあまりを出力する",
          "    std::cout << 10 % 3 << std::endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ストリームを読み込みます。",
          "int型の戻り値を持つmain関数を定義します。",
          null,
          "std名前空間のcoutで10 % 3の結果を出力し、endlで改行します。",
          "returnで0を返してプログラムの正常終了を示します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "operators": [
            "%",
            "+",
            "-",
            "*",
            "/"
          ],
          "others": ["main", "10", "0", "}", "#include <iostream>", "int", "std", "cout", "endl", "3", "return"]
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
      "correctCode": "#include <iostream>\\nint main() {\\n    // scoreに50を入れる\\n    int score = 50;\\n    // 10点プラスする\\n    score += 10;\\n    // scoreを表示\\n    std::cout << score << std::endl;\\n    return 0;\\n}",
      "holeyCode": "___\\n___ ___() {\\n    // scoreに50を入れる\\n    ___ ___ = ___;\\n    // 10点プラスする\\n    ___ ___ ___;\\n    // scoreを表示\\n    ___::___ << ___ << ___::___;\\n    ___ ___;\\n___",
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
          "標準入出力ストリームを読み込みます。",
          "int型の戻り値を持つmain関数を定義します。",
          null,
          "int型の変数scoreを宣言し、50を代入します。",
          null,
          "scoreに+=演算子で10を加算します。",
          null,
          "std名前空間のcoutでscoreを出力し、endlで改行します。",
          "returnで0を返してプログラムの正常終了を示します。",
          "関数の終わりを示す閉じ括弧です。"
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
          "others": ["50;", "main", "score", "0", "}", "#include <iostream>", "int", "std", "cout", "endl", "return"]
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
      "correctCode": "#include <iostream>\\nint main() {\\n    int age = 10;\\n    // age と入力\\n    std::cout << \"私は\" << age << \"歳です.\" << std::endl;\\n    return 0;\\n}",
      "holeyCode": "___\\n___ ___() {\\n    ___ ___ = ___;\\n    // age と入力\\n    ___::___ << ___ << ___ << ___ << ___::___;\\n    ___ ___;\\n___",
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
          "標準入出力ストリームを読み込みます。",
          "int型の戻り値を持つmain関数を定義します。",
          "int型の変数ageを宣言し、10を代入します。",
          null,
          "std名前空間のcoutで「私は」、age、「歳です.」を順に出力し、endlで改行します。",
          "returnで0を返してプログラムの正常終了を示します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "variables": [
            "age"
          ],
          "others": ["main", "10", "0", "}", "\"私は\"", "#include <iostream>", "int", "std", "cout", "endl", "return", "\"歳です.\""]
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
      "correctCode": "#include <iostream>\\n#include <vector>\\n#include <string>\\nint main() {\\n    // fruitsに{\"りんご\", \"バナナ\"}を代入\\n    std::vector<std::string> fruits = {\"りんご\", \"バナナ\"};\\n    // 1 と入力（2番目のデータはインデックス1）\\n    std::cout << fruits[1] << std::endl;\\n    return 0;\\n}",
      "holeyCode": "___\\n___\\n___\\n___ ___() {\\n    // fruitsに{\"りんご\", \"バナナ\"}を代入\\n    ___::___<___::___> ___ = {\"___\", \"___\"};\\n    // 1 と入力（2番目のデータはインデックス1）\\n    ___::___ << ___[___] << ___::___;\\n    ___ ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "#include <vector>",
          "#include <string>",
          "int main() {",
          "    // fruitsに{\"りんご\", \"バナナ\"}を代入",
          "    std::vector<std::string> fruits = {\"りんご\", \"バナナ\"};",
          "    // 1 と入力（2番目のデータはインデックス1）",
          "    std::cout << fruits[1] << std::endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ストリームを読み込みます。",
          "vectorコンテナを読み込みます。",
          "stringクラスを読み込みます。",
          "int型の戻り値を持つmain関数を定義します。",
          null,
          "std名前空間のvector<string>型の変数fruitsにりんごとバナナを代入します。",
          null,
          "std名前空間のcoutでfruits[1]を出力し、endlで改行します。",
          "returnで0を返してプログラムの正常終了を示します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "numbers": [
            "1"
          ],
          "others": ["main", "りんご", "バナナ", "0", "}", "#include <iostream>", "#include <vector>", "#include <string>", "int", "std", "cout", "endl", "return", "vector", "string", "fruits"]
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
      "correctCode": "#include <iostream>\\nint main() {\\n    // scoreに100を入れる\\n    int score = 100;\\n    // > で「より大きい」を比較\\n    if (score > 80) {\\n        // '完璧' と入力\\n        std::cout << \"完璧\" << std::endl;\\n    }\\n    return 0;\\n}",
      "holeyCode": "___\\n___ ___() {\\n    // scoreに100を入れる\\n    ___ ___ = ___;\\n    // > で「より大きい」を比較\\n    ___ (___ ___ ___) {\\n        // '完璧' と入力\\n        ___::___ << ___ << ___::___;\\n    ___\\n    ___ ___;\\n___",
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
          "標準入出力ストリームを読み込みます。",
          "int型の戻り値を持つmain関数を定義します。",
          null,
          "int型の変数scoreを宣言し、100を代入します。",
          null,
          "if文でscoreが80より大きいかを判定します。",
          null,
          "std名前空間のcoutで「完璧」を出力し、endlで改行します。",
          "ifブロックの終わりを示す閉じ括弧です。",
          "returnで0を返してプログラムの正常終了を示します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "operators": [
            ">"
          ],
          "strings": [
            "完璧"
          ],
          "others": ["100;", "main", "100", "\"完璧\"", "}", "0", "#include <iostream>", "int", "std", "cout", "endl", "return", "if", "score", "80"]
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
      "correctCode": "#include <iostream>\\nint main() {\\n    // ageに10を入れる\\n    int age = 10;\\n    // 20以上かを比較する演算子\\n    if (age >= 20) {\\n        // 20歳以上のときのメッセージ（'大人'）\\n        std::cout << \"大人\" << std::endl;\\n    // elseで20歳未満の場合の処理\\n    } else {\\n        // それ以外のメッセージ（'未成年'）\\n        std::cout << \"未成年\" << std::endl;\\n    }\\n    return 0;\\n}",
      "holeyCode": "___\\n___ ___() {\\n    // ageに10を入れる\\n    ___ ___ = ___;\\n    // 20以上かを比較する演算子\\n    ___ (___ ___ ___) {\\n        // 20歳以上のときのメッセージ（'大人'）\\n        ___::___ << ___ << ___::___;\\n    // elseで20歳未満の場合の処理\\n    } ___ {\\n        // それ以外のメッセージ（'未成年'）\\n        ___::___ << ___ << ___::___;\\n    ___\\n    ___ ___;\\n___",
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
          "標準入出力ストリームを読み込みます。",
          "int型の戻り値を持つmain関数を定義します。",
          null,
          "int型の変数ageを宣言し、10を代入します。",
          null,
          "if文でageが20以上かを>=演算子で判定します。",
          null,
          "std名前空間のcoutで「大人」を出力し、endlで改行します。",
          null,
          "elseで条件が満たされなかった場合の処理を開始します。",
          null,
          "std名前空間のcoutで「未成年」を出力し、endlで改行します。",
          "elseブロックの終わりを示す閉じ括弧です。",
          "returnで0を返してプログラムの正常終了を示します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "else"
          ],
          "others": ["10;", ">=", "main", "10", "}", "0", "\"大人\"", "\"未成年\"", "#include <iostream>", "int", "std", "cout", "endl", "return", "if", "age", "20"]
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
      "correctCode": "#include <iostream>\\nint main() {\\n    // scoreに85を入れる\\n    int score = 85;\\n    // 80以上 かつ 100以下 ならメッセージを出す\\n    if (score >= 80 && score <= 100) {\\n        // 「合格」と出力\\n        std::cout << \"合格\" << std::endl;\\n    }\\n    return 0;\\n}",
      "holeyCode": "___\\n___ ___() {\\n    // scoreに85を入れる\\n    ___ ___ = ___;\\n    // 80以上 かつ 100以下 ならメッセージを出す\\n    ___ (___ ___ ___ ___ ___ ___ ___) {\\n        // 「合格」と出力\\n        ___::___ << ___ << ___::___;\\n    ___\\n    ___ ___;\\n___",
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
          "標準入出力ストリームを読み込みます。",
          "int型の戻り値を持つmain関数を定義します。",
          null,
          "int型の変数scoreを宣言し、85を代入します。",
          null,
          "if文でscoreが80以上かつ(&&)100以下かを判定します。",
          null,
          "std名前空間のcoutで「合格」を出力し、endlで改行します。",
          "ifブロックの終わりを示す閉じ括弧です。",
          "returnで0を返してプログラムの正常終了を示します。",
          "関数の終わりを示す閉じ括弧です。"
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
          "others": ["85;", "main", "80", "}", "0", "\"合格\"", "#include <iostream>", "int", "std", "cout", "endl", "return", "if", "score", ">=", "<=", "100"]
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
      "correctCode": "#include <iostream>\\n#include <vector>\\nint main() {\\n    std::vector<int> nums = {1, 2, 3};\\n    // numsの各要素をnに代入して繰り返し\\n    for (int n : nums) {\\n        std::cout << n << std::endl;\\n    }\\n    return 0;\\n}",
      "holeyCode": "___\\n___\\n___ ___() {\\n    ___::___<___> ___ = {___, ___, ___};\\n    // numsの各要素をnに代入して繰り返し\\n    ___ (___ ___ : ___) {\\n        ___::___ << ___ << ___::___;\\n    ___\\n    ___ ___;\\n___",
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
          "標準入出力ストリームを読み込みます。",
          "vectorコンテナを読み込みます。",
          "int型の戻り値を持つmain関数を定義します。",
          "std名前空間のvector<int>型の変数numsに1, 2, 3を代入します。",
          null,
          "for文でint型の変数nにnumsの各要素を代入して繰り返します。",
          "std名前空間のcoutでnを出力し、endlで改行します。",
          "forブロックの終わりを示す閉じ括弧です。",
          "returnで0を返してプログラムの正常終了を示します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "variables": [
            "nums"
          ],
          "others": ["main", "1", "n", "}", "0", "#include <iostream>", "#include <vector>", "int", "std", "cout", "endl", "return", "for", "vector", "2", "3"]
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
      "correctCode": "#include <iostream>\\n#include <map>\\n#include <string>\\nint main() {\\n    std::map<std::string, int> scores;\\n    // 'Math' と入力（キー名）\\n    scores[\"Math\"] = 90;\\n    // 'Math' と入力（同じキー名）\\n    std::cout << scores[\"Math\"] << std::endl;\\n    return 0;\\n}",
      "holeyCode": "___\\n___\\n___\\n___ ___() {\\n    ___::___<___::___, ___> ___;\\n    // 'Math' と入力（キー名）\\n    ___[\"___\"] = ___;\\n    // 'Math' と入力（同じキー名）\\n    ___::___ << ___[\"___\"] << ___::___;\\n    ___ ___;\\n___",
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
          "標準入出力ストリームを読み込みます。",
          "mapコンテナを読み込みます。",
          "stringクラスを読み込みます。",
          "int型の戻り値を持つmain関数を定義します。",
          "std名前空間のmap<string, int>型の変数scoresを宣言します。",
          null,
          "scores辞書のキー「Math」に90を代入します。",
          null,
          "std名前空間のcoutでscores[\"Math\"]を出力し、endlで改行します。",
          "returnで0を返してプログラムの正常終了を示します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "strings": [
            "Math"
          ],
          "others": ["main", "scores", "0", "}", "#include <iostream>", "#include <map>", "#include <string>", "int", "std", "cout", "endl", "return", "map", "string", "90"]
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
      "correctCode": "#include <iostream>\\nvoid greet() {\\n    std::cout << \"こんにちは\" << std::endl;\\n}\\nint main() {\\n    // greet()を呼び出す\\n    greet();\\n    return 0;\\n}",
      "holeyCode": "___\\n___ ___() {\\n    ___::___ << ___ << ___::___;\\n___\\n___ ___() {\\n    // greet()を呼び出す\\n    ___();\\n    ___ ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "void greet() {",
          "    std::cout << \"こんにちは\" << std::endl;",
          "}",
          "int main() {",
          "    // greet()を呼び出す",
          "    greet();",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ストリームを読み込みます。",
          "void型の戻り値を持つgreet関数を定義します。",
          "std名前空間のcoutで「こんにちは」を出力し、endlで改行します。",
          "greet関数の終わりを示す閉じ括弧です。",
          "int型の戻り値を持つmain関数を定義します。",
          null,
          "greet関数を呼び出して実行します。",
          "returnで0を返してプログラムの正常終了を示します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "functions": [
            "greet"
          ],
          "others": ["}", "main", "0", "\"こんにちは\"", "#include <iostream>", "void", "int", "std", "cout", "endl", "return"]
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
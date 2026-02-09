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
      "correctCode": "#include <iostream>\\nint main() {\\n    // こんにちは, C++! と入力\\n    std::cout << \"こんにちは, C++!\" << std::endl;\\n    return 0;\\n}",
      "holeyCode": "___\\nint ___() {\\n    // こんにちは, C++! と入力\\n    std::cout << ___ << std::endl;\\n    return ___;\\n___",
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
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "標準出力ストリームに文字列を流し込み、表示します。",
          "プログラムが正常に終了したことを示す値（通常は0）を返します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "strings": [
            "Hello, C++!"
          ],
          "others": ["main", "\"Hello,", "0", "}", "\"こんにちは,", "#include <iostream>"]
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
      "holeyCode": "___\\nint ___() {\\n    // 10 と入力\\n    int x = ___;\\n    // x と入力\\n    std::cout << ___ << std::endl;\\n    return ___;\\n___",
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
          "この行を正しく入力してください。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "はこの名前 x を指定して、表示させます。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "x"
          ],
          "numbers": [
            "10"
          ],
          "others": ["10;", "main", "0", "}", "#include <iostream>", "#include <iostream>"]
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
      "holeyCode": "___\\nint ___() {\\n    int a = ___;\\n    int b = ___;\\n    // + でたし算\\n    std::cout << a + b << std::___;\\n    return ___;\\n___",
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
          "この行を正しく入力してください。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "整数型の変数を宣言し、初期値を代入します。",
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "たし算なので `+` を使います。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "+"
          ],
          "others": ["main", "5", "3", "endl", "0", "}", "#include <iostream>", "#include <iostream>"]
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
      "holeyCode": "___\\nint ___() {\\n    // 10 を 3 で割ったあまりを出力する\\n    std::cout << ___ % 3 << std::endl;\\n    return ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "int main() {",
          "    // 10 を 3 で割ったあまりを出力する",
          "    std::cout << 10 % 3 << std::endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "この行を正しく入力してください。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "あまりを求める % 演算子を使います。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "%",
            "+",
            "-",
            "*",
            "/"
          ],
          "others": ["main", "10", "0", "}", "#include <iostream>", "#include <iostream>"]
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
      "holeyCode": "___\\nint ___() {\\n    // scoreに50を入れる\\n    int score = ___;\\n    // 10点プラスする\\n    score += ___;\\n    // scoreを表示\\n    std::cout << ___ << std::endl;\\n    return ___;\\n___",
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
          "この行を正しく入力してください。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "変数scoreに10を加算します。",
          null,
          "標準出力ストリームに文字列を流し込み、表示します。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
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
          "others": ["50;", "main", "score", "0", "}", "#include <iostream>", "#include <iostream>"]
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
      "holeyCode": "___\\nint ___() {\\n    int age = ___;\\n    // age と入力\\n    std::cout << ___ << age << \"歳です.\" << std::endl;\\n    return ___;\\n___",
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
          "この行を正しく入力してください。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "標準出力ストリームに文字列を流し込み、表示します。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "age"
          ],
          "others": ["main", "10", "\"I", "0", "}", "\"私は\"", "#include <iostream>", "#include <iostream>"]
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
      "holeyCode": "___\\n___\\n___\\nint ___() {\\n    // fruitsに{\"りんご\", \"バナナ\"}を代入\\n    std::vector<std::string> fruits = {\"___\", \"___\"};\\n    // 1 と入力（2番目のデータはインデックス1）\\n    std::cout << fruits[___] << std::endl;\\n    return ___;\\n___",
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
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "りんごとバナナを文字列として配列に入れます。",
          null,
          "2番目のデータはインデックス1です。",
          "プログラムの正常終了を示す値0を返す。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "numbers": [
            "1"
          ],
          "others": ["main", "りんご", "バナナ", "0", "}", "#include <iostream>", "#include <vector>", "#include <string>", "#include <iostream>", "#include <vector>", "#include <string>"]
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
      "holeyCode": "___\\nint ___() {\\n    // scoreに100を入れる\\n    int score = ___;\\n    // > で「より大きい」を比較\\n    if (score ___ 80) {\\n        // '完璧' と入力\\n        std::cout << ___ << std::endl;\\n    ___\\n    return ___;\\n___",
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
          "この行を正しく入力してください。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "scoreが80より大きいかを判定します。",
          null,
          "標準出力ストリームに文字列を流し込み、表示します。",
          "ここを正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            ">"
          ],
          "strings": [
            "完璧"
          ],
          "others": ["100;", "main", "100", "\"完璧\"", "}", "0", "#include <iostream>", "#include <iostream>", "}"]
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
      "holeyCode": "___\\nint ___() {\\n    // ageに10を入れる\\n    int age = ___;\\n    // 20以上かを比較する演算子\\n    if (age ___ 20) {\\n        // 20歳以上のときのメッセージ（'大人'）\\n        std::cout << ___ << std::endl;\\n    // elseで20歳未満の場合の処理\\n    } ___ {\\n        // それ以外のメッセージ（'未成年'）\\n        std::cout << ___ << std::endl;\\n    ___\\n    return ___;\\n___",
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
          "この行を正しく入力してください。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "ageが20以上かを判定します。",
          null,
          "標準出力ストリームに文字列を流し込み、表示します。",
          null,
          "もし条件が満たされなかった場合に実行する処理を記述します。",
          null,
          "標準出力ストリームに文字列を流し込み、表示します。",
          "ここを正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "else"
          ],
          "others": ["10;", ">=", "main", "10", "\"Adult\"", "\"Minor\"", "}", "0", "\"大人\"", "\"未成年\"", "#include <iostream>", "#include <iostream>", "}"]
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
      "holeyCode": "___\\nint ___() {\\n    // scoreに85を入れる\\n    int score = ___;\\n    // 80以上 かつ 100以下 ならメッセージを出す\\n    if (score >= ___ && score <= 100) {\\n        // 「合格」と出力\\n        std::cout << ___ << std::endl;\\n    ___\\n    return ___;\\n___",
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
          "この行を正しく入力してください。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "scoreが80以上かつ100以下かを判定します。",
          null,
          "標準出力ストリームに文字列を流し込み、表示します。",
          "ここを正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
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
          "others": ["85;", "main", "80", "\"Pass\"", "}", "0", "\"合格\"", "#include <iostream>", "#include <iostream>", "}"]
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
      "holeyCode": "___\\n___\\nint ___() {\\n    std::vector<int> nums = {___, 2, 3};\\n    // numsの各要素をnに代入して繰り返し\\n    for (int ___ : nums) {\\n        std::cout << ___ << std::endl;\\n    ___\\n    return ___;\\n___",
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
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "複数の値をまとめて格納する配列を作成します。",
          null,
          "指定された回数や範囲で、繰り返し処理（ループ）を行います。",
          "変数の値を標準出力に出力します。",
          "ここを正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "nums"
          ],
          "others": ["nums) {", "main", "1", "n", "}", "0", "#include <iostream>", "#include <vector>", "#include <iostream>", "#include <vector>", "}"]
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
      "holeyCode": "___\\n___\\n___\\nint ___() {\\n    std::map<std::string, int> ___;\\n    // 'Math' と入力（キー名）\\n    ___[\"___\"] = 90;\\n    // 'Math' と入力（同じキー名）\\n    std::cout << scores[\"___\"] << std::endl;\\n    return ___;\\n___",
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
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "mapで文字列から整数への辞書を作成します。",
          null,
          "辞書に登録するキー名を指定します。",
          null,
          "辞書からキーを使って値を取り出します。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "strings": [
            "Math"
          ],
          "others": ["main", "scores", "0", "}", "#include <iostream>", "#include <map>", "#include <string>", "#include <iostream>", "#include <map>", "#include <string>"]
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
      "holeyCode": "___\\nvoid ___() {\\n    std::cout << ___ << std::endl;\\n___\\nint ___() {\\n    // greet()を呼び出す\\n    ___();\\n    return ___;\\n___",
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
          "この行を正しく入力してください。",
          "void型の値を返す関数（greet）を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "関数（greet）を呼び出して実行します。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "greet"
          ],
          "others": ["\"Hello\"", "}", "main", "0", "\"こんにちは\"", "#include <iostream>", "#include <iostream>", "}"]
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
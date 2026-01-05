export const cppData = {
  "language": "cpp",
  "lessonId": "cpp-1",
  "lessonTitle": "C++ I",
  "lessonDescription": "C言語の機能を拡張したC++の基本を学びます。cout、vector、stringクラスなどを習得しましょう。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "Hello Worldを出力しよう",
      "description": "C++で画面に文字を表示するには std::cout を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "iostream",
          "content": "# インクルード\n\n入出力を行うためのライブラリです。\n\n**コード例：**\n```cpp\n#include <iostream>\nint main() {\n    std::cout << \"Hello, C++!\" << std::endl;\n    return 0;\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    std::cout << \"Hello, C++!\" << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    std::cout << \"___\" << std::endl;\n    return 0;\n}",
      "correctLines": ["#include <iostream>", "int main() {", "    std::cout << \"Hello, C++!\" << std::endl;", "    return 0;", "}"],
      "lineHints": [null, null, "Hello, C++! を出力します。"],
      "candidates": { "strings": ["Hello, C++!"] },
      "testCases": [{ "input": "", "expected_output": "Hello, C++!\n" }]
    },
    {
      "title": "変数",
      "description": "変数を宣言して表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "変数の型",
          "content": "# int型\n\n整数を扱う変数を宣言します。\n\n**コード例：**\n```cpp\nint x = 10;\nstd::cout << x << std::endl;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    int x = 10;\n    std::cout << x << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    int x = ___ ;\n    std::cout << ___ << std::endl;\n    return 0;\n}",
      "correctLines": ["#include <iostream>", "int main() {", "    int x = 10;", "    std::cout << x << std::endl;", "    return 0;", "}"],
      "lineHints": [null, null, "x = 10; とします。", "x を出力します。"],
      "candidates": { "variables": ["x"], "numbers": ["10"] },
      "testCases": [{ "input": "", "expected_output": "10\n" }]
    },
    {
      "title": "計算",
      "description": "足し算を行いましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "計算",
          "content": "# 演算子\n\n`<<` で繋いで計算結果を出力できます。\n\n**コード例：**\n```cpp\nint a = 5;\nint b = 3;\nstd::cout << a + b << std::endl;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    int a = 5;\n    int b = 3;\n    std::cout << a + b << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    int a = 5;\n    int b = 3;\n    std::cout << a ___ b << std::endl;\n    return 0;\n}",
      "correctLines": ["#include <iostream>", "int main() {", "    int a = 5;", "    int b = 3;", "    std::cout << a + b << std::endl;", "    return 0;", "}"],
      "lineHints": [null, null, null, null, "a + b を出力します。"],
      "candidates": { "operators": ["+"] },
      "testCases": [{ "input": "", "expected_output": "8\n" }]
    },
    {
      "title": "文字列の出力",
      "description": "変数と文字列を組み合わせて出力しましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "ストリーム出力",
          "content": "# << 演算子\n\n複数の項目を `<<` で繋げて出力します。\n\n**コード例：**\n```cpp\nint age = 20;\nstd::cout << \"Age: \" << age << std::endl;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    int age = 20;\n    std::cout << \"I am \" << age << \" years old.\" << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    int age = 20;\n    std::cout << \"I am \" << ___ << \" years old.\" << std::endl;\n    return 0;\n}",
      "correctLines": ["#include <iostream>", "int main() {", "    int age = 20;", "    std::cout << \"I am \" << age << \" years old.\" << std::endl;", "    return 0;", "}"],
      "lineHints": [null, null, null, "age変数を出力します。"],
      "candidates": { "variables": ["age"] },
      "testCases": [{ "input": "", "expected_output": "I am 20 years old.\n" }]
    },
    {
      "title": "Vector (動的配列)",
      "description": "C++の標準ライブラリであるvectorを使いましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "std::vector",
          "content": "# 動的配列\n\n可変長の配列として使えます。インデックスは0から始まります。\n\n**コード例：**\n```cpp\n#include <vector>\nstd::vector<int> v = {10, 20};\nstd::cout << v[1] << std::endl; // 20 を表示\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <vector>\nint main() {\n    std::vector<int> nums = {10, 20};\n    std::cout << nums[1] << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\n#include <vector>\nint main() {\n    std::vector<int> nums = {10, 20};\n    std::cout << nums[___] << std::endl;\n    return 0;\n}",
      "correctLines": ["#include <iostream>", "#include <vector>", "int main() {", "    std::vector<int> nums = {10, 20};", "    std::cout << nums[1] << std::endl;", "    return 0;", "}"],
      "lineHints": [null, null, null, null, "インデックス1を指定します。"],
      "candidates": { "numbers": ["1"] },
      "testCases": [{ "input": "", "expected_output": "20\n" }]
    },
    {
      "title": "if文",
      "description": "条件分岐を行います。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if文",
          "content": "# if (条件)\n\n条件式を丸括弧 `( )` で囲みます。\n\n**コード例：**\n```cpp\nif (score > 80) {\n    std::cout << \"合格\" << std::endl;\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    int score = 100;\n    if (score > 80) {\n        std::cout << \"Perfect\" << std::endl;\n    }\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    int score = 100;\n    if (score ___ 80) {\n        std::cout << \"___\" << std::endl;\n    }\n    return 0;\n}",
      "correctLines": ["#include <iostream>", "int main() {", "    int score = 100;", "    if (score > 80) {", "        std::cout << \"Perfect\" << std::endl;", "    }", "    return 0;", "}"],
      "lineHints": [null, null, null, "比較演算子 > を使います。", "Perfect を出力します。"],
      "candidates": { "operators": [">"], "strings": ["Perfect"] },
      "testCases": [{ "input": "", "expected_output": "Perfect\n" }]
    },
    {
      "title": "if-else文",
      "description": "elseを使って分岐します。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "else",
          "content": "# elseブロック\n\n条件を満たさない場合の処理を書きます。\n\n**コード例：**\n```cpp\nif (age >= 20) {\n    std::cout << \"大人\" << std::endl;\n} else {\n    std::cout << \"子供\" << std::endl;\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    int age = 18;\n    if (age >= 20) {\n        std::cout << \"Adult\" << std::endl;\n    } else {\n        std::cout << \"Minor\" << std::endl;\n    }\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    int age = 18;\n    if (age >= 20) {\n        std::cout << \"Adult\" << std::endl;\n    } ___ {\n        std::cout << \"Minor\" << std::endl;\n    }\n    return 0;\n}",
      "correctLines": ["#include <iostream>", "int main() {", "    int age = 18;", "    if (age >= 20) {", "        std::cout << \"Adult\" << std::endl;", "    } else {", "        std::cout << \"Minor\" << std::endl;", "    }", "    return 0;", "}"],
      "lineHints": [null, null, null, null, null, "else を記述します。"],
      "candidates": { "keywords": ["else"] },
      "testCases": [{ "input": "", "expected_output": "Minor\n" }]
    },
    {
      "title": "範囲for文",
      "description": "範囲for文を使ってVectorの全要素を表示しましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "範囲for文",
          "content": "# for (変数 : コンテナ)\n\nC++11から導入された、要素を一つずつ取り出すループ構文です。\n\n**コード例：**\n```cpp\nstd::vector<int> nums = {1, 2, 3};\nfor (int n : nums) {\n    std::cout << n << std::endl;\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <vector>\nint main() {\n    std::vector<int> nums = {1, 2, 3};\n    for (int n : nums) {\n        std::cout << n << std::endl;\n    }\n    return 0;\n}",
      "holeyCode": "#include <iostream>\n#include <vector>\nint main() {\n    std::vector<int> nums = {1, 2, 3};\n    for (int n : nums) {\n        std::cout << n << std::endl;\n    }\n    return 0;\n}",
      "correctLines": ["#include <iostream>", "#include <vector>", "int main() {", "    std::vector<int> nums = {1, 2, 3};", "    for (int n : nums) {", "        std::cout << n << std::endl;", "    }", "    return 0;", "}"],
      "lineHints": [null, null, null, null, "nums 配列を指定します。"],
      "candidates": { "variables": ["nums"] },
      "testCases": [{ "input": "", "expected_output": "1\n2\n3\n" }]
    },
    {
      "title": "Map (連想配列)",
      "description": "std::mapを使ってキーと値のペアを扱います。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "std::map",
          "content": "# 連想配列\n\nキーを使って値を管理します。\n\n**コード例：**\n```cpp\n#include <map>\n#include <string>\nstd::map<std::string, int> scores;\nscores[\"Math\"] = 90;\nstd::cout << scores[\"Math\"] << std::endl;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <map>\n#include <string>\nint main() {\n    std::map<std::string, int> scores;\n    scores[\"Math\"] = 90;\n    std::cout << scores[\"Math\"] << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\n#include <map>\n#include <string>\nint main() {\n    std::map<std::string, int> scores;\n    scores[\"___\"] = 90;\n    std::cout << scores[\"___\"] << std::endl;\n    return 0;\n}",
      "correctLines": ["#include <iostream>", "#include <map>", "#include <string>", "int main() {", "    std::map<std::string, int> scores;", "    scores[\"Math\"] = 90;", "    std::cout << scores[\"Math\"] << std::endl;", "    return 0;", "}"],
      "lineHints": [null, null, null, null, null, "\"Math\"キーを使います。", "同じく\"Math\"キーを使います。"],
      "candidates": { "strings": ["Math"] },
      "testCases": [{ "input": "", "expected_output": "90\n" }]
    },
    {
      "title": "関数",
      "description": "関数を定義して呼び出します。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "関数",
          "content": "# 定義\n\n処理をひとまとめにします。\n\n**コード例：**\n```cpp\nvoid greet() {\n    std::cout << \"Hello\" << std::endl;\n}\n\n// main内で呼び出し\ngreet();\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nvoid greet() {\n    std::cout << \"Hello\" << std::endl;\n}\nint main() {\n    greet();\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nvoid greet() {\n    std::cout << \"Hello\" << std::endl;\n}\nint main() {\n    ___();\n    return 0;\n}",
      "correctLines": ["#include <iostream>", "void greet() {", "    std::cout << \"Hello\" << std::endl;", "}", "int main() {", "    greet();", "    return 0;", "}"],
      "lineHints": [null, null, null, null, null, "greet(); で呼び出します。"],
      "candidates": { "functions": ["greet"] },
      "testCases": [{ "input": "", "expected_output": "Hello\n" }]
    }
  ]
};

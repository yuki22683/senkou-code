export const cpp3Data = {
  "language": "cpp",
  "lessonId": "cpp-3",
  "lessonTitle": "C++ III - モダンC++",
  "lessonDescription": "モダンC++の機能を学びます。スマートポインタ、ムーブセマンティクス、STLアルゴリズムなどを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "exercises": [
    {
      "title": "auto で型推論",
      "description": "コンパイラに型を推論させましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "auto とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 型の自動推論\n\n**auto** を使うと、初期化子から型を推論できます。\n\n```cpp\nauto x = 42;        // int\nauto pi = 3.14;     // double\nauto name = \"Alice\"; // const char*\n```"
        },
        {
          "title": "イテレータで便利",
          "image": "/illustrations/3d/robot.png",
          "content": "# 長い型名を省略\n\n```cpp\nstd::vector<int> v = {1, 2, 3};\nfor (auto it = v.begin(); it != v.end(); ++it) {\n    std::cout << *it << std::endl;\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    auto x = 100;\n    auto y = 2.5;\n    cout << x * y << endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\n___\n\n___\n    // auto と入力して、型を自動で決めてね\n    ___\n    ___\n    ___\n    ___\n___",
      "correctLines": [
        
        
        "#include <iostream>",
        "using namespace std;",
        "",
        "int main() {",
        "    // auto と入力して、型を自動で決めてね",
        "    auto x = 100;",
        "    auto y = 2.5;",
        "    cout << x * y << endl;",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "auto で型を推論させます。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["auto", "var", "let"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "250\n"
        }
      ]
    },
    {
      "title": "範囲for文",
      "description": "コンテナの要素を簡単に走査しましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "範囲for文とは？",
          "image": "/illustrations/3d/loop.png",
          "content": "# シンプルなループ\n\nC++11の **範囲for文** で、コンテナを簡単に走査できます。\n\n```cpp\nvector<int> v = {1, 2, 3};\nfor (int x : v) {\n    cout << x << endl;\n}\n```"
        },
        {
          "title": "参照で受け取る",
          "image": "/illustrations/3d_advanced/pointer_arrow.png",
          "content": "# コピーを避ける\n\n```cpp\nfor (const auto& x : v) {\n    // 参照で受け取り（コピーなし）\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> nums = {10, 20, 30};\n    for (int n : nums) {\n        cout << n << endl;\n    }\n    return 0;\n}",
      "holeyCode": "#include <iostream>\n#include <vector>\n___\n\n___\n    ___\n    // : と入力して、順番に取り出しましょう\n    ___\n        ___\n    ___\n    ___\n___",
      "correctLines": [
        
        
        "#include <iostream>",
        "#include <vector>",
        "using namespace std;",
        "",
        "int main() {",
        "    vector<int> nums = {10, 20, 30};",
        "    // : と入力して、順番に取り出しましょう",
        "    for (int n : nums) {",
        "        cout << n << endl;",
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
        ": で範囲for文を使います。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "operators": [":", "in", "of"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n20\n30\n"
        }
      ]
    },
    {
      "title": "nullptr",
      "description": "型安全なヌルポインタを使いましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "nullptr とは？",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# 型安全なヌル\n\nC++11では **nullptr** を使います。NULLより型安全です。\n\n```cpp\nint* p = nullptr;\nif (p == nullptr) {\n    cout << \"null\" << endl;\n}\n```"
        },
        {
          "title": "NULL との違い",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# オーバーロード解決\n\n```cpp\nvoid f(int);\nvoid f(int*);\n\nf(NULL);    // どっち？あいまい\nf(nullptr); // f(int*) が呼ばれる\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int* p = nullptr;\n    if (p == nullptr) {\n        cout << \"null\" << endl;\n    }\n    return 0;\n}",
      "holeyCode": "#include <iostream>\\n___\\n\\n___\\n    // nullptr と入力して「空っぽ」にしましょう\\n    ___\\n    ___\\n        ___\\n    ___\\n    ___\\n___"null\" << endl;\n    }\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "using namespace std;",
        "",
        "int main() {",
        "    // nullptr と入力して「空っぽ」にしましょう",
        "    int* p = nullptr;",
        "    if (p == nullptr) {",
        "        cout << "null" << endl;",
        "    }",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "nullptr で型安全なヌルを表します。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["nullptr", "NULL", "0"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "null\n"
        }
      ]
    },
    {
      "title": "constexpr",
      "description": "コンパイル時定数を定義しましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "constexpr とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# コンパイル時計算\n\n**constexpr** は、コンパイル時に値を計算できることを示します。\n\n```cpp\nconstexpr int square(int x) {\n    return x * x;\n}\nconstexpr int val = square(5); // コンパイル時に25\n```"
        },
        {
          "title": "const との違い",
          "image": "/illustrations/3d/robot.png",
          "content": "# コンパイル時 vs 実行時\n\n```cpp\nconst int a = getValue();     // 実行時に決定可\nconstexpr int b = 10 * 10;    // コンパイル時に決定\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nusing namespace std;\n\nconstexpr int cube(int x) {\n    return x * x * x;\n}\n\nint main() {\n    constexpr int val = cube(3);\n    cout << val << endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\n___\n\n// constexpr と入力して、計算を先にしておいてね\n___\n    ___\n___\n\n___\n    ___\n    ___\n    ___\n___",
      "correctLines": [
        
        
        "#include <iostream>",
        "using namespace std;",
        "",
        "// constexpr と入力して、計算を先にしておいてね",
        "constexpr int cube(int x) {",
        "    return x * x * x;",
        "}",
        "",
        "int main() {",
        "    constexpr int val = cube(3);",
        "    cout << val << endl;",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "constexpr でコンパイル時計算を可能にします。",
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
        "keywords": ["constexpr", "const", "static"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "27\n"
        }
      ]
    },
    {
      "title": "初期化子リスト",
      "description": "{}を使った統一的な初期化を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "初期化子リストとは？",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# {} で初期化\n\nC++11では **{}** で統一的に初期化できます。\n\n```cpp\nvector<int> v = {1, 2, 3};\nmap<string, int> m = {{\"a\", 1}, {\"b\", 2}};\n```"
        },
        {
          "title": "縮小変換を防ぐ",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 型安全\n\n```cpp\nint x = 3.14;   // OK（警告のみ）\nint y{3.14};    // エラー！縮小変換\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> v{1, 2, 3, 4, 5};\n    for (int n : v) cout << n << \" \";\n    cout << endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\\n#include <vector>\\n___\\n\\n___\\n    // { と入力して、仲間をまとめてね\\n    ___\\n    ___\\n    ___\\n    ___\\n___" \";\n    cout << endl;\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "#include <vector>",
        "using namespace std;",
        "",
        "int main() {",
        "    // { と入力して、仲間をまとめてね",
        "    vector<int> v{1, 2, 3, 4, 5};",
        "    for (int n : v) cout << n << " ";",
        "    cout << endl;",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "{} で初期化します。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "operators": ["{", "(", "["]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1 2 3 4 5 \n"
        }
      ]
    },
    {
      "title": "shared_ptr",
      "description": "共有所有権のスマートポインタを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "shared_ptr とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 共有所有権\n\n**shared_ptr** は、複数の所有者で共有できるスマートポインタです。\n\n```cpp\nauto p1 = make_shared<int>(42);\nauto p2 = p1;  // 参照カウント増加\n// 両方がスコープを出ると自動解放\n```"
        },
        {
          "title": "make_shared",
          "image": "/illustrations/3d/robot.png",
          "content": "# 効率的な作成\n\n```cpp\n// 推奨\nauto p = make_shared<MyClass>(arg1, arg2);\n\n// 非推奨（2回アロケーション）\nshared_ptr<MyClass> p(new MyClass(arg1, arg2));\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <memory>\nusing namespace std;\n\nint main() {\n    auto p = make_shared<int>(100);\n    cout << *p << endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\n#include <memory>\n___\n\n___\n    // make_shared と入力して、みんなで使えるポインタを作ってね\n    ___\n    ___\n    ___\n___",
      "correctLines": [
        
        
        "#include <iostream>",
        "#include <memory>",
        "using namespace std;",
        "",
        "int main() {",
        "    // make_shared と入力して、みんなで使えるポインタを作ってね",
        "    auto p = make_shared<int>(100);",
        "    cout << *p << endl;",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "make_shared で共有ポインタを作成します。",
        null,
        null,
        null
      ],
      "candidates": {
        "functions": ["make_shared", "make_unique", "shared_ptr"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "100\n"
        }
      ]
    },
    {
      "title": "std::move",
      "description": "所有権を移動させましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "move とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 所有権の移動\n\n**std::move** は、左辺値を右辺値に変換し、ムーブを可能にします。\n\n```cpp\nstring s1 = \"Hello\";\nstring s2 = move(s1);  // s1 の内容を移動\n// s1 は空になる\n```"
        },
        {
          "title": "コピーより効率的",
          "image": "/illustrations/3d/robot.png",
          "content": "# パフォーマンス向上\n\n大きなオブジェクトをコピーする代わりに、内部データを移動できます。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <string>\n#include <utility>\nusing namespace std;\n\nint main() {\n    string s1 = \"Hello\";\n    string s2 = move(s1);\n    cout << s2 << endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\\n#include <string>\\n#include <utility>\\n___\\n\\n___\\n    ___\\n    // move と入力して、中身を移動しましょう\\n    ___\\n    ___\\n    ___\\n___"Hello\";\n    // ここに move と入力して、中身を移動してね\n    string s2 = ___(s1);\n    cout << s2 << endl;\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "#include <string>",
        "#include <utility>",
        "using namespace std;",
        "",
        "int main() {",
        "    string s1 = "Hello";",
        "    // move と入力して、中身を移動しましょう",
        "    string s2 = std::move(s1);",
        "    cout << s2 << endl;",
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
        "move で所有権を移動します。",
        null,
        null,
        null
      ],
      "candidates": {
        "functions": ["move", "forward", "swap"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello\n"
        }
      ]
    },
    {
      "title": "std::optional",
      "description": "値があるかもしれない型を表現しましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "optional とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 値の有無を表現\n\nC++17の **std::optional** は、値があるかもしれないことを表します。\n\n```cpp\noptional<int> find(vector<int>& v, int x) {\n    for (int n : v) if (n == x) return n;\n    return nullopt;\n}\n```"
        },
        {
          "title": "値の取得",
          "image": "/illustrations/3d/robot.png",
          "content": "# has_value と value\n\n```cpp\nauto result = find(v, 5);\nif (result.has_value()) {\n    cout << result.value() << endl;\n}\n// または\nif (result) {\n    cout << *result << endl;\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <optional>\nusing namespace std;\n\nint main() {\n    optional<int> opt = 42;\n    if (opt.has_value()) {\n        cout << opt.value() << endl;\n    }\n    return 0;\n}",
      "holeyCode": "#include <iostream>\n#include <optional>\n___\n\n___\n    ___\n    // has_value と入力して、中身があるか調べてね\n    ___\n        ___\n    ___\n    ___\n___",
      "correctLines": [
        
        
        "#include <iostream>",
        "#include <optional>",
        "using namespace std;",
        "",
        "int main() {",
        "    optional<int> opt = 42;",
        "    // has_value と入力して、中身があるか調べてね",
        "    if (opt.has_value()) {",
        "        cout << opt.value() << endl;",
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
        "has_value で値の有無をチェックします。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "methods": ["has_value", "empty", "valid"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "42\n"
        }
      ]
    },
    {
      "title": "std::array",
      "description": "固定長配列を安全に使いましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "array とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 固定長のコンテナ\n\n**std::array** は、C配列のラッパーで、サイズ情報を持ちます。\n\n```cpp\narray<int, 5> arr = {1, 2, 3, 4, 5};\ncout << arr.size() << endl;  // 5\n```"
        },
        {
          "title": "C配列との違い",
          "image": "/illustrations/3d/robot.png",
          "content": "# 安全性\n\n```cpp\n// サイズを取得できる\narr.size()\n\n// 範囲チェック\narr.at(10);  // 例外を投げる\narr[10];     // 未定義動作\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <array>\nusing namespace std;\n\nint main() {\n    array<int, 3> arr = {10, 20, 30};\n    for (int n : arr) cout << n << \" \";\n    cout << endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\\n#include <array>\\n___\\n\\n___\\n    // array と入力して、決まった長さの配列を作ってね\\n    ___\\n    ___\\n    ___\\n    ___\\n___" \";\n    cout << endl;\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "#include <array>",
        "using namespace std;",
        "",
        "int main() {",
        "    // array と入力して、決まった長さの配列を作ってね",
        "    std::array<int, 3> arr = {10, 20, 30};",
        "    for (int n : arr) cout << n << " ";",
        "    cout << endl;",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "array で固定長配列を使います。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "types": ["array", "vector", "list"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10 20 30 \n"
        }
      ]
    },
    {
      "title": "ラムダのキャプチャ",
      "description": "外部変数をキャプチャする方法を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "キャプチャとは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 外部変数へのアクセス\n\nラムダ式は **[]** で外部変数をキャプチャできます。\n\n```cpp\nint x = 10;\nauto f = [x]() { return x * 2; };  // コピーキャプチャ\nauto g = [&x]() { x++; };          // 参照キャプチャ\n```"
        },
        {
          "title": "キャプチャの種類",
          "image": "/illustrations/3d/robot.png",
          "content": "# 様々なキャプチャ\n\n```cpp\n[=]   // 全てをコピー\n[&]   // 全てを参照\n[x]   // x をコピー\n[&x]  // x を参照\n[=, &x] // 基本コピー、x は参照\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5;\n    auto f = [x]() { return x * x; };\n    cout << f() << endl;\n    return 0;\n}",
      "holeyCode": "___",
      "correctLines": [
        ""#include <iostream>",\n        "using namespace std;",\n        "",\n        "int main() {",\n        "    int x = 5;",\n        "    // x と入力して、外の変数を使えるようにしましょう",\n        "    auto f = [x"
      ]() { return x * x; };",
        "    cout << f() << endl;",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "[x] で x をコピーキャプチャします。",
        null,
        null,
        null
      ],
      "candidates": {
        "captures": ["x", "&x", "="]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "25\n"
        }
      ]
    }
  ]
}

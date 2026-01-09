export const cpp4Data = {
  "language": "cpp",
  "lessonId": "cpp-4",
  "lessonTitle": "C++ IV - STLアルゴリズムと高度な機能",
  "lessonDescription": "STLアルゴリズムとC++17以降の機能を学びます。効率的で表現力豊かなコードを書くスキルを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 4,
  "exercises": [
    {
      "title": "unique_ptr",
      "description": "排他的所有権のスマートポインタを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "unique_ptr とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 排他的所有権\n\n**unique_ptr** は、1つのオブジェクトを1つのポインタだけが所有します。\n\n```cpp\nauto p = make_unique<int>(42);\n// スコープを出ると自動解放\n```"
        },
        {
          "title": "コピー不可",
          "image": "/illustrations/3d/robot.png",
          "content": "# ムーブのみ可能\n\n```cpp\nauto p1 = make_unique<int>(10);\n// auto p2 = p1;  // エラー！\nauto p2 = move(p1);  // OK\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <memory>\nusing namespace std;\n\nint main() {\n    auto p = make_unique<int>(99);\n    cout << *p << endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\n#include <memory>\n___\n\n___\n    // make_unique と入力して、自分だけのポインタを作ってね\n    ___\n    ___\n    ___\n___",
      "correctLines": [
        
        
        "#include <iostream>",
        "#include <memory>",
        "using namespace std;",
        "",
        "int main() {",
        "    // make_unique と入力して、自分だけのポインタを作ってね",
        "    auto p = make_unique<int>(99);",
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
        "make_unique で排他的ポインタを作成します。",
        null,
        null,
        null
      ],
      "candidates": {
        "functions": ["make_unique", "make_shared", "unique_ptr"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "99\n"
        }
      ]
    },
    {
      "title": "std::variant",
      "description": "型安全な共用体を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "variant とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 型安全なunion\n\nC++17の **std::variant** は、複数の型のうち1つを保持できます。\n\n```cpp\nvariant<int, string> v;\nv = 42;      // int を保持\nv = \"hello\"; // string を保持\n```"
        },
        {
          "title": "値の取得",
          "image": "/illustrations/3d/robot.png",
          "content": "# get と holds_alternative\n\n```cpp\nif (holds_alternative<int>(v)) {\n    cout << get<int>(v) << endl;\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <variant>\nusing namespace std;\n\nint main() {\n    variant<int, double> v = 3.14;\n    cout << get<double>(v) << endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\n#include <variant>\n___\n\n___\n    ___\n    // get と入力して中身を取り出しましょう\n    ___\n    ___\n___",
      "correctLines": [
        
        
        "#include <iostream>",
        "#include <variant>",
        "using namespace std;",
        "",
        "int main() {",
        "    variant<int, double> v = 3.14;",
        "    // get と入力して中身を取り出しましょう",
        "    cout << get<double>(v) << endl;",
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
        "get<型> で値を取得します。",
        null,
        null
      ],
      "candidates": {
        "functions": ["get", "value", "extract"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "3.14\n"
        }
      ]
    },
    {
      "title": "構造化束縛",
      "description": "複数の値を一度に受け取りましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "構造化束縛とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 複数の値を分解\n\nC++17の **構造化束縛** で、複数の値を一度に取得できます。\n\n```cpp\npair<int, string> p = {1, \"hello\"};\nauto [num, str] = p;\ncout << num << \", \" << str << endl;\n```"
        },
        {
          "title": "mapのイテレーション",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# キーと値を同時に\n\n```cpp\nmap<string, int> m = {{\"a\", 1}, {\"b\", 2}};\nfor (auto [key, value] : m) {\n    cout << key << \": \" << value << endl;\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <tuple>\nusing namespace std;\n\nint main() {\n    tuple<int, double, string> t{1, 2.5, \"hi\"};\n    auto [a, b, c] = t;\n    cout << a << \" \" << b << \" \" << c << endl;\n    return 0;\n}",
      "holeyCode": "___\n___\n___\n___\n___\n___\n___"hi\"};\n    // auto と入力してバラバラにわけてね\n    ___ [a, b, c] = t;\n    cout << a << \" \" << b << \" \" << c << endl;\n    return 0;\n}",
      "correctLines": [
        ""#include <iostream>",\n        "#include <tuple>",\n        "using namespace std;",\n        "",\n        "int main() {",\n        "    tuple<int",
        "double",
        "string> t{1",
        "2.5",
        ""hi"};",\n        "    // auto と入力してバラバラにわけてね",\n        "    auto [a",
        "b",
        "c"
      ] = t;",
        "    cout << a << \" \" << b << \" \" << c << endl;",
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
        "auto で構造化束縛を使います。",
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
          "expected_output": "1 2.5 hi\n"
        }
      ]
    },
    {
      "title": "std::string_view",
      "description": "文字列の参照ビューを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "string_view とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 文字列への軽量ビュー\n\n**string_view** は、コピーなしで文字列を参照します。\n\n```cpp\nvoid print(string_view sv) {\n    cout << sv << endl;\n}\nprint(\"hello\");  // コピーなし\n```"
        },
        {
          "title": "メリット",
          "image": "/illustrations/3d/robot.png",
          "content": "# パフォーマンス向上\n\n```cpp\n// const string& より効率的\n// C文字列もstringも受け取れる\nstring s = \"world\";\nprint(s);      // OK\nprint(\"hello\"); // OK\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <string_view>\nusing namespace std;\n\nvoid greet(string_view name) {\n    cout << \"Hello, \" << name << endl;\n}\n\nint main() {\n    greet(\"World\");\n    return 0;\n}",
      "holeyCode": "#include <iostream>\\n#include <string_view>\\n___\n\\n// string_view と入力して文字列を受け取ってね\\n___\n___\n___\n___\n\\n___\n    ___\n    ___\n___"Hello, \" << name << endl;\n}\n\nint main() {\n    greet(\"World\");\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "#include <string_view>",
        "using namespace std;",
        "",
        "// string_view と入力して文字列を受け取ってね",
        "void greet(string_view name) {",
        ""    cout << "Hello",
        "" << name << endl;"",
        "}",
        "",
        "int main() {",
        "    greet("World");",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "string_view で文字列ビューを受け取ります。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "types": ["string_view", "string", "const char*"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, World\n"
        }
      ]
    },
    {
      "title": "std::transform",
      "description": "要素を変換するアルゴリズムを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "transform とは？",
          "image": "/illustrations/3d/loop.png",
          "content": "# 各要素に関数を適用\n\n**transform** は、範囲の各要素に関数を適用し、結果を格納します。\n\n```cpp\nvector<int> in = {1, 2, 3};\nvector<int> out(3);\ntransform(in.begin(), in.end(), out.begin(),\n          [](int x) { return x * 2; });\n```"
        },
        {
          "title": "使用例",
          "image": "/illustrations/3d/robot.png",
          "content": "# 文字列を大文字に\n\n```cpp\nstring s = \"hello\";\ntransform(s.begin(), s.end(), s.begin(), ::toupper);\n// s = \"HELLO\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3};\n    transform(v.begin(), v.end(), v.begin(), [](int x) { return x * 10; });\n    for (int n : v) cout << n << \" \";\n    cout << endl;\n    return 0;\n}",
      "holeyCode": "___\n___\n___\n___\n___\n___" \";\n    cout << endl;\n    return 0;\n}",
      "correctLines": [
        ""#include <iostream>",\n        "#include <vector>",\n        "#include <algorithm>",\n        "using namespace std;",\n        "",\n        "int main() {",\n        "    vector<int> v = {1",
        "2",
        "3};",\n        "    // transform と入力して、一気に変換しましょう",\n        "    transform(v.begin()",
        "v.end()",
        "v.begin()",
        "["
      ](int x) { return x * 10; });",
        "    for (int n : v) cout << n << \" \";",
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
        null,
        null,
        "transform で各要素を変換します。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "algorithms": ["transform", "for_each", "copy"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10 20 30 \n"
        }
      ]
    },
    {
      "title": "std::accumulate",
      "description": "要素を集約するアルゴリズムを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "accumulate とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 要素を畳み込み\n\n**accumulate** は、範囲の要素を初期値から順に集約します。\n\n```cpp\nvector<int> v = {1, 2, 3, 4, 5};\nint sum = accumulate(v.begin(), v.end(), 0);\n// sum = 15\n```"
        },
        {
          "title": "カスタム演算",
          "image": "/illustrations/3d/gear.png",
          "content": "# 演算を指定\n\n```cpp\n// 積を計算\nint product = accumulate(v.begin(), v.end(), 1,\n    [](int a, int b) { return a * b; });\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <vector>\n#include <numeric>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5};\n    int sum = accumulate(v.begin(), v.end(), 0);\n    cout << sum << endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\n#include <vector>\n#include <numeric>\n___\n\n___\n    ___\n    // accumulate と入力して、全部たしましょう\n    ___\n    ___\n    ___\n___",
      "correctLines": [
        
        
        "#include <iostream>",
        "#include <vector>",
        "#include <numeric>",
        "using namespace std;",
        "",
        "int main() {",
        "    vector<int> v = {1, 2, 3, 4, 5};",
        "    // accumulate と入力して、全部たしましょう",
        "    int sum = accumulate(v.begin(), v.end(), 0);",
        "    cout << sum << endl;",
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
        "accumulate で要素を集約します。",
        null,
        null,
        null
      ],
      "candidates": {
        "algorithms": ["accumulate", "reduce", "sum"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "15\n"
        }
      ]
    },
    {
      "title": "std::find_if",
      "description": "条件に合う要素を検索しましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "find_if とは？",
          "image": "/illustrations/3d/if.png",
          "content": "# 条件検索\n\n**find_if** は、条件を満たす最初の要素を見つけます。\n\n```cpp\nvector<int> v = {1, 3, 5, 6, 7};\nauto it = find_if(v.begin(), v.end(),\n    [](int x) { return x % 2 == 0; });\n// *it = 6\n```"
        },
        {
          "title": "見つからない場合",
          "image": "/illustrations/3d/robot.png",
          "content": "# end() との比較\n\n```cpp\nif (it != v.end()) {\n    cout << \"Found: \" << *it << endl;\n} else {\n    cout << \"Not found\" << endl;\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5};\n    auto it = find_if(v.begin(), v.end(), [](int x) { return x > 3; });\n    cout << *it << endl;\n    return 0;\n}",
      "holeyCode": "___\n___\n___\n___\n___\n___\n___",
      "correctLines": [
        ""#include <iostream>",\n        "#include <vector>",\n        "#include <algorithm>",\n        "using namespace std;",\n        "",\n        "int main() {",\n        "    vector<int> v = {1",
        "2",
        "3",
        "4",
        "5};",\n        "    // find_if と入力して、条件に合うものを探しましょう",\n        "    auto it = find_if(v.begin()",
        "v.end()",
        "["
      ](int x) { return x > 3; });",
        "    cout << *it << endl;",
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
        "find_if で条件に合う要素を検索します。",
        null,
        null,
        null
      ],
      "candidates": {
        "algorithms": ["find_if", "find", "search"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "4\n"
        }
      ]
    },
    {
      "title": "std::sort with lambda",
      "description": "カスタム比較でソートしましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "カスタムソート",
          "image": "/illustrations/3d/robot.png",
          "content": "# ラムダで比較\n\n**sort** にラムダを渡してカスタム順序でソートできます。\n\n```cpp\nvector<int> v = {3, 1, 4, 1, 5};\nsort(v.begin(), v.end(), [](int a, int b) {\n    return a > b;  // 降順\n});\n```"
        },
        {
          "title": "オブジェクトのソート",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# メンバで比較\n\n```cpp\nsort(people.begin(), people.end(),\n    [](const Person& a, const Person& b) {\n        return a.age < b.age;\n    });\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {3, 1, 4, 1, 5};\n    sort(v.begin(), v.end(), [](int a, int b) { return a > b; });\n    for (int n : v) cout << n << \" \";\n    cout << endl;\n    return 0;\n}",
      "holeyCode": "___\n___\n___\n___\n___\n___\n___" \";\n    cout << endl;\n    return 0;\n}",
      "correctLines": [
        ""#include <iostream>",\n        "#include <vector>",\n        "#include <algorithm>",\n        "using namespace std;",\n        "",\n        "int main() {",\n        "    vector<int> v = {3",
        "1",
        "4",
        "1",
        "5};",\n        "    // sort と入力して並べかえてね",\n        "    sort(v.begin()",
        "v.end()",
        "["
      ](int a, int b) { return a > b; });",
        "    for (int n : v) cout << n << \" \";",
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
        null,
        null,
        "sort でカスタム順序でソートします。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "algorithms": ["sort", "stable_sort", "partial_sort"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "5 4 3 1 1 \n"
        }
      ]
    },
    {
      "title": "try-catch 例外処理",
      "description": "例外をキャッチして処理しましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "例外処理",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# try-catch\n\nC++の例外処理は **try-catch** ブロックで行います。\n\n```cpp\ntry {\n    throw runtime_error(\"Error!\");\n} catch (const exception& e) {\n    cout << e.what() << endl;\n}\n```"
        },
        {
          "title": "標準例外",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# よく使う例外\n\n```cpp\nruntime_error  // 実行時エラー\nlogic_error    // 論理エラー\nout_of_range   // 範囲外アクセス\ninvalid_argument // 不正な引数\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nint main() {\n    try {\n        throw runtime_error(\"Oops!\");\n    } catch (const exception& e) {\n        cout << e.what() << endl;\n    }\n    return 0;\n}",
      "holeyCode": "#include <iostream>\\n#include <stdexcept>\\n___\n\\n___\n    ___\n        // throw と入力して例外を投げてね\\n        ___\n    ___\n        ___\n    ___\n    ___\n___"Oops!\");\n    } catch (const exception& e) {\n        cout << e.what() << endl;\n    }\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "#include <stdexcept>",
        "using namespace std;",
        "",
        "int main() {",
        "    try {",
        "        // throw と入力して例外を投げてね",
        "        throw runtime_error("Oops!");",
        "    } catch (const exception& e) {",
        "        cout << e.what() << endl;",
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
        "throw で例外を投げます。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["throw", "raise", "error"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Oops!\n"
        }
      ]
    },
    {
      "title": "noexcept 指定",
      "description": "例外を投げないことを宣言しましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "noexcept とは？",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# 例外を投げない保証\n\n**noexcept** は、関数が例外を投げないことを宣言します。\n\n```cpp\nvoid safe() noexcept {\n    // 例外を投げない処理\n}\n```"
        },
        {
          "title": "メリット",
          "image": "/illustrations/3d/robot.png",
          "content": "# 最適化とムーブ\n\n- コンパイラが最適化できる\n- ムーブコンストラクタに重要\n\n```cpp\nMyClass(MyClass&&) noexcept = default;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nusing namespace std;\n\nint add(int a, int b) noexcept {\n    return a + b;\n}\n\nint main() {\n    cout << add(10, 20) << endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\n___\n\n// noexcept と入力して、例外を投げないことを約束しましょう\n___\n    ___\n___\n\n___\n    ___\n    ___\n___",
      "correctLines": [
        
        
        "#include <iostream>",
        "using namespace std;",
        "",
        "// noexcept と入力して、例外を投げないことを約束しましょう",
        "int add(int a, int b) noexcept {",
        "    return a + b;",
        "}",
        "",
        "int main() {",
        "    cout << add(10, 20) << endl;",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "noexcept で例外を投げないことを宣言します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["noexcept", "nothrow", "safe"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "30\n"
        }
      ]
    }
  ]
}

export const cpp3Data = {
  "language": "cpp",
  "lessonId": "cpp-3",
  "lessonTitle": "C++ III - モダンC++",
  "lessonDescription": "モダンC++の機能を学びます。スマートポインタ、ムーブセマンティクス、STLアルゴリズムなどを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "tutorialSlides": [
    { "title": "autoで型推論", "content": "# コンパイラに型を任せる\\n\\n```cpp\\nauto x = 42;        // int型と自動判断\\nauto pi = 3.14;     // double型と自動判断\\nauto name = \\\"Alice\\\"; // const char*型\\n```\\n\\n型を書く手間が省けてコードがスッキリ！" },
    { "title": "範囲for文", "content": "# シンプルなループ\\n\\n```cpp\\nvector<int> v = {1, 2, 3};\\nfor (int x : v) {\\n    cout << x << endl;\\n}\\n```\\n\\n`:` は「〜の中から」という意味です。\\n`const auto&`で効率的に参照できます。" },
    { "title": "ラムダ式", "content": "# 簡潔な関数の書き方\\n\\n```cpp\\nauto add = [](int a, int b) { return a + b; };\\ncout << add(2, 3) << endl;  // 5\\n```\\n\\n`[]`の中にキャプチャ、`()`の中に引数を書きます。" },
    { "title": "スマートポインタ", "content": "# 自動でメモリ管理\\n\\n```cpp\\nauto p = make_unique<int>(42);\\ncout << *p << endl;  // 42\\n// スコープを出ると自動でメモリ解放！\\n```\\n\\n`unique_ptr`: 1人だけが所有\\n`shared_ptr`: 複数で共有" }
  ],
  "exercises": [
    {
      "title": "auto で型推論",
      "correctCode": "#include <iostream>\\nusing namespace std;\\n\\nint main() {\\n    // xに100を代入（auto型推論）\\n    auto x = 100;\\n    // yに2.5を代入（auto型推論）\\n    auto y = 2.5;\\n    cout << x * y << endl;\\n    return 0;\\n}",
      "holeyCode": "___\\n___ ___ ___;\\n___\\n___ ___() {\\n    // xに100を代入（auto型推論）\\n    ___ ___ = ___;\\n    // yに2.5を代入（auto型推論）\\n    ___ ___ = ___;\\n    ___ << ___ * ___ << ___;\\n    ___ ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "using namespace std;",
          "",
          "int main() {",
          "    // xに100を代入（auto型推論）",
          "    auto x = 100;",
          "    // yに2.5を代入（auto型推論）",
          "    auto y = 2.5;",
          "    cout << x * y << endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ストリームを読み込みます。",
          "usingで名前空間stdを利用可能にします。",
          null,
          "int main()でプログラムの開始点を定義します。",
          null,
          "auto xに100を代入します。",
          null,
          "auto yに2.5を代入します。",
          "x * yの計算結果をcoutで出力し、endlで改行します。",
          "return 0でプログラムの正常終了を示します。",
          "関数の閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "auto",
            "var",
            "let",
            "using",
            "namespace",
            "int",
            "return"
          ],
          "others": ["std", "main", "100", "2.5", "endl", "0", "}", "#include <iostream>", "x", "y", "cout"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "250\\n"
          }
        ]
      },
    {
      "title": "範囲for文",
      "correctCode": "#include <iostream>\\n#include <vector>\\nusing namespace std;\\n\\nint main() {\\n    // numsに{10, 20, 30}を代入\\n    vector<int> nums = {10, 20, 30};\\n    // : で範囲for文\\n    for (int n : nums) {\\n        cout << n << endl;\\n    }\\n    return 0;\\n}",
      "holeyCode": "___\\n___\\n___ ___ ___;\\n___\\n___ ___() {\\n    // numsに{10, 20, 30}を代入\\n    ___<___> ___ = {___, ___, ___};\\n    // : で範囲for文\\n    for (___ ___ : ___) {\\n        ___ << ___ << ___;\\n    ___\\n    ___ ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "#include <vector>",
          "using namespace std;",
          "",
          "int main() {",
          "    // numsに{10, 20, 30}を代入",
          "    vector<int> nums = {10, 20, 30};",
          "    // : で範囲for文",
          "    for (int n : nums) {",
          "        cout << n << endl;",
          "    }",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "iostreamヘッダを読み込みます。",
          "vectorヘッダを読み込みます。",
          "usingで名前空間stdを利用可能にします。",
          null,
          "int main()でプログラムの開始点を定義します。",
          null,
          "vector<int>型のnumsに{10, 20, 30}を代入します。",
          null,
          "int nでnumsの各要素を順に取り出します。",
          "coutでnを出力し、endlで改行します。",
          "forループの閉じ括弧です。",
          "return 0でプログラムの正常終了を示します。",
          "関数の閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "using",
            "namespace",
            "int",
            "for",
            "return"
          ],
          "others": ["vector", "std", "main", "10", "20", "30", "n", "endl", "}", "0", "#include <iostream>", "#include <vector>", "nums", "cout"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n20\\n30\\n"
          }
        ]
      },
    {
      "title": "nullptr",
      "correctCode": "#include <iostream>\\nusing namespace std;\\n\\nint main() {\\n    // pにnullptrを代入\\n    int* p = nullptr;\\n    // p == nullptrで比較\\n    if (p == nullptr) {\\n        cout << \"null\" << endl;\\n    }\\n    return 0;\\n}",
      "holeyCode": "___\\n___ ___ ___;\\n___\\n___ ___() {\\n    // pにnullptrを代入\\n    ___* ___ = ___;\\n    // p == nullptrで比較\\n    if (___ == ___) {\\n        ___ << \"___\" << ___;\\n    ___\\n    ___ ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "using namespace std;",
          "",
          "int main() {",
          "    // pにnullptrを代入",
          "    int* p = nullptr;",
          "    // p == nullptrで比較",
          "    if (p == nullptr) {",
          "        cout << \"null\" << endl;",
          "    }",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "iostreamヘッダを読み込みます。",
          "usingで名前空間stdを利用可能にします。",
          null,
          "int main()でプログラムの開始点を定義します。",
          null,
          "int*型のpにnullptrを代入します。",
          null,
          "pがnullptrと等しいか比較します。",
          "coutで\"null\"を出力し、endlで改行します。",
          "ifブロックの閉じ括弧です。",
          "return 0でプログラムの正常終了を示します。",
          "関数の閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "nullptr",
            "NULL",
            "using",
            "namespace",
            "int",
            "if",
            "return"
          ],
          "others": ["std", "main", "null", "}", "#include <iostream>", "cout", "p", "endl", "0"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "null\\n"
          }
        ]
      },
    {
      "title": "constexpr",
      "correctCode": "#include <iostream>\\nusing namespace std;\\n\\n// constexpr cube(int x)を定義\\nconstexpr int cube(int x) {\\n    return x * x * x;\\n}\\n\\nint main() {\\n    // valにcube(3)を代入（constexpr）\\n    constexpr int val = cube(3);\\n    cout << val << endl;\\n    return 0;\\n}",
      "holeyCode": "___\\n___ ___ ___;\\n___\\n// constexpr cube(int x)を定義\\n___ ___ ___(int ___) {\\n    ___ ___ * ___ * ___;\\n___\\n___\\n___ ___() {\\n    // valにcube(3)を代入（constexpr）\\n    ___ ___ ___ = ___(___);\\n    ___ << ___ << ___;\\n    ___ ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "using namespace std;",
          "",
          "// constexpr cube(int x)を定義",
          "constexpr int cube(int x) {",
          "    return x * x * x;",
          "}",
          "",
          "int main() {",
          "    // valにcube(3)を代入（constexpr）",
          "    constexpr int val = cube(3);",
          "    cout << val << endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "iostreamヘッダを読み込みます。",
          "usingで名前空間stdを利用可能にします。",
          null,
          null,
          "constexpr intでcube関数を定義し、引数xを受け取ります。",
          "return x * x * xで立方を計算して返します。",
          "関数の閉じ括弧です。",
          null,
          "int main()でプログラムの開始点を定義します。",
          null,
          "constexpr int valにcube(3)の結果を代入します。",
          "coutでvalを出力し、endlで改行します。",
          "return 0でプログラムの正常終了を示します。",
          "関数の閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "constexpr",
            "const",
            "static",
            "using",
            "namespace",
            "int",
            "return"
          ],
          "others": ["std", "x", "}", "main", "3", "endl", "0", "#include <iostream>", "cube", "val", "cout"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "27\\n"
          }
        ]
      },
    {
      "title": "初期化子リスト",
      "correctCode": "#include <iostream>\\n#include <vector>\\nusing namespace std;\\n\\nint main() {\\n    // { で初期化子リスト\\n    vector<int> v{1, 2, 3, 4, 5};\\n    // : で範囲for文\\n    for (int n : v) cout << n << \" \";\\n    cout << endl;\\n    return 0;\\n}",
      "holeyCode": "___\\n___\\n___ ___ ___;\\n___\\n___ ___() {\\n    // { で初期化子リスト\\n    ___<___> ___{___, ___, ___, ___, ___};\\n    // : で範囲for文\\n    for (___ ___ : ___) ___ << ___ << \" \";\\n    ___ << ___;\\n    ___ ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "#include <vector>",
          "using namespace std;",
          "",
          "int main() {",
          "    // { で初期化子リスト",
          "    vector<int> v{1, 2, 3, 4, 5};",
          "    // : で範囲for文",
          "    for (int n : v) cout << n << \" \";",
          "    cout << endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "iostreamヘッダを読み込みます。",
          "vectorヘッダを読み込みます。",
          "usingで名前空間stdを利用可能にします。",
          null,
          "int main()でプログラムの開始点を定義します。",
          null,
          "vector<int>型のvに{1, 2, 3, 4, 5}を初期化子リストで代入します。",
          null,
          "int nでvの各要素を順に取り出し、coutで出力します。",
          "coutでendlを出力して改行します。",
          "return 0でプログラムの正常終了を示します。",
          "関数の閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "using",
            "namespace",
            "int",
            "for",
            "return"
          ],
          "others": ["std", "main", "1", "2", "3", "4", "5", "n", "endl", "0", "}", "#include <iostream>", "#include <vector>", "vector", "v", "cout"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1 2 3 4 5 \\n"
          }
        ]
      },
    {
      "title": "shared_ptr",
      "correctCode": "#include <iostream>\\n#include <memory>\\nusing namespace std;\\n\\nint main() {\\n    // make_shared で共有ポインタを作成\\n    auto p = make_shared<int>(100);\\n    // *p で中身にアクセス\\n    cout << *p << endl;\\n    return 0;\\n}",
      "holeyCode": "___\\n___\\n___ ___ ___;\\n___\\n___ ___() {\\n    // make_shared で共有ポインタを作成\\n    ___ ___ = ___<___>(___);\\n    // *p で中身にアクセス\\n    ___ << *___ << ___;\\n    ___ ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "#include <memory>",
          "using namespace std;",
          "",
          "int main() {",
          "    // make_shared で共有ポインタを作成",
          "    auto p = make_shared<int>(100);",
          "    // *p で中身にアクセス",
          "    cout << *p << endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "iostreamヘッダを読み込みます。",
          "memoryヘッダを読み込みます。",
          "usingで名前空間stdを利用可能にします。",
          null,
          "int main()でプログラムの開始点を定義します。",
          null,
          "auto pにmake_shared<int>(100)を代入します。",
          null,
          "coutで*pの値を出力し、endlで改行します。",
          "return 0でプログラムの正常終了を示します。",
          "関数の閉じ括弧です。"
        ],
        "candidates": {
          "functions": [
            "make_shared",
            "make_unique",
            "shared_ptr"
          ],
          "keywords": [
            "auto",
            "using",
            "namespace",
            "int",
            "return"
          ],
          "others": ["std", "main", "100", "endl", "0", "}", "#include <iostream>", "#include <memory>", "p", "cout"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "100\\n"
          }
        ]
      },
    {
      "title": "std::move",
      "correctCode": "#include <iostream>\\n#include <string>\\n#include <utility>\\nusing namespace std;\\n\\nint main() {\\n    // s1に\"こんにちは\"を代入\\n    string s1 = \"こんにちは\";\\n    // move で所有権を移動\\n    string s2 = move(s1);\\n    cout << s2 << endl;\\n    return 0;\\n}",
      "holeyCode": "___\\n___\\n___\\n___ ___ ___;\\n___\\n___ ___() {\\n    // s1に\"こんにちは\"を代入\\n    ___ ___ = \"___\";\\n    // move で所有権を移動\\n    ___ ___ = ___(___);\\n    ___ << ___ << ___;\\n    ___ ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "#include <string>",
          "#include <utility>",
          "using namespace std;",
          "",
          "int main() {",
          "    // s1に\"こんにちは\"を代入",
          "    string s1 = \"こんにちは\";",
          "    // move で所有権を移動",
          "    string s2 = move(s1);",
          "    cout << s2 << endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "iostreamヘッダを読み込みます。",
          "stringヘッダを読み込みます。",
          "utilityヘッダを読み込みます。",
          "usingで名前空間stdを利用可能にします。",
          null,
          "int main()でプログラムの開始点を定義します。",
          null,
          "string s1に\"こんにちは\"を代入します。",
          null,
          "string s2にmove(s1)で所有権を移動します。",
          "coutでs2を出力し、endlで改行します。",
          "return 0でプログラムの正常終了を示します。",
          "関数の閉じ括弧です。"
        ],
        "candidates": {
          "functions": [
            "move",
            "forward",
            "swap"
          ],
          "keywords": [
            "using",
            "namespace",
            "int",
            "return"
          ],
          "others": ["string", "std", "main", "s1", "s2", "0", "}", "こんにちは", "#include <iostream>", "#include <string>", "#include <utility>", "cout", "endl"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      },
    {
      "title": "std::optional",
      "correctCode": "#include <iostream>\\n#include <optional>\\nusing namespace std;\\n\\nint main() {\\n    // optional で値を保持\\n    optional<int> opt = 42;\\n    // has_value で値の有無をチェック\\n    if (opt.has_value()) {\\n        cout << opt.value() << endl;\\n    }\\n    return 0;\\n}",
      "holeyCode": "___\\n___\\n___ ___ ___;\\n___\\n___ ___() {\\n    // optional で値を保持\\n    ___<___> ___ = ___;\\n    // has_value で値の有無をチェック\\n    if (___.___()) {\\n        ___ << ___.___() << ___;\\n    ___\\n    ___ ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "#include <optional>",
          "using namespace std;",
          "",
          "int main() {",
          "    // optional で値を保持",
          "    optional<int> opt = 42;",
          "    // has_value で値の有無をチェック",
          "    if (opt.has_value()) {",
          "        cout << opt.value() << endl;",
          "    }",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "iostreamヘッダを読み込みます。",
          "optionalヘッダを読み込みます。",
          "usingで名前空間stdを利用可能にします。",
          null,
          "int main()でプログラムの開始点を定義します。",
          null,
          "optional<int>型のoptに42を代入します。",
          null,
          "opt.has_value()で値の有無をチェックします。",
          "coutでopt.value()の値を出力し、endlで改行します。",
          "ifブロックの閉じ括弧です。",
          "return 0でプログラムの正常終了を示します。",
          "関数の閉じ括弧です。"
        ],
        "candidates": {
          "methods": [
            "has_value",
            "empty",
            "valid",
            "value"
          ],
          "keywords": [
            "using",
            "namespace",
            "int",
            "if",
            "return"
          ],
          "others": ["optional", "std", "main", "42", "endl", "}", "0", "#include <iostream>", "#include <optional>", "opt", "cout"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "42\\n"
          }
        ]
      },
    {
      "title": "std::array",
      "correctCode": "#include <iostream>\\n#include <array>\\nusing namespace std;\\n\\nint main() {\\n    // arrに{10, 20, 30}を代入\\n    array<int, 3> arr = {10, 20, 30};\\n    // : で範囲for文\\n    for (int n : arr) cout << n << \" \";\\n    cout << endl;\\n    return 0;\\n}",
      "holeyCode": "___\\n___\\n___ ___ ___;\\n___\\n___ ___() {\\n    // arrに{10, 20, 30}を代入\\n    ___<___, ___> ___ = {___, ___, ___};\\n    // : で範囲for文\\n    for (___ ___ : ___) ___ << ___ << \" \";\\n    ___ << ___;\\n    ___ ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "#include <array>",
          "using namespace std;",
          "",
          "int main() {",
          "    // arrに{10, 20, 30}を代入",
          "    array<int, 3> arr = {10, 20, 30};",
          "    // : で範囲for文",
          "    for (int n : arr) cout << n << \" \";",
          "    cout << endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "iostreamヘッダを読み込みます。",
          "arrayヘッダを読み込みます。",
          "usingで名前空間stdを利用可能にします。",
          null,
          "int main()でプログラムの開始点を定義します。",
          null,
          "array<int, 3>型のarrに{10, 20, 30}を代入します。",
          null,
          "int nでarrの各要素を順に取り出し、coutで出力します。",
          "coutでendlを出力して改行します。",
          "return 0でプログラムの正常終了を示します。",
          "関数の閉じ括弧です。"
        ],
        "candidates": {
          "types": [
            "array",
            "vector",
            "list"
          ],
          "keywords": [
            "using",
            "namespace",
            "int",
            "for",
            "return"
          ],
          "others": ["std", "main", "3", "10", "20", "30", "n", "endl", "0", "}", "#include <iostream>", "#include <array>", "arr", "cout"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10 20 30 \\n"
          }
        ]
      },
    {
      "title": "ラムダのキャプチャ",
      "correctCode": "#include <iostream>\\nusing namespace std;\\n\\nint main() {\\n    // xに5を代入\\n    int x = 5;\\n    // x でコピーキャプチャ\\n    auto f = [x]() { return x * x; };\\n    cout << f() << endl;\\n    return 0;\\n}",
      "holeyCode": "___\\n___ ___ ___;\\n___\\n___ ___() {\\n    // xに5を代入\\n    ___ ___ = ___;\\n    // x でコピーキャプチャ\\n    ___ ___ = [___]() { return ___ * ___; };\\n    ___ << ___() << ___;\\n    ___ ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "using namespace std;",
          "",
          "int main() {",
          "    // xに5を代入",
          "    int x = 5;",
          "    // x でコピーキャプチャ",
          "    auto f = [x]() { return x * x; };",
          "    cout << f() << endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "iostreamヘッダを読み込みます。",
          "usingで名前空間stdを利用可能にします。",
          null,
          "int main()でプログラムの開始点を定義します。",
          null,
          "int xに5を代入します。",
          null,
          "auto fに[x]でxをキャプチャしたラムダを代入します。",
          "coutでf()の結果を出力し、endlで改行します。",
          "return 0でプログラムの正常終了を示します。",
          "関数の閉じ括弧です。"
        ],
        "candidates": {
          "captures": [
            "x",
            "&x",
            "="
          ],
          "keywords": [
            "using",
            "namespace",
            "int",
            "auto",
            "return"
          ],
          "others": ["std", "main", "5", "endl", "0", "}", "#include <iostream>", "f", "cout"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "25\\n"
          }
        ]
      }
  ]
}

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
      "correctCode": "#include <iostream>\\nusing namespace std;\\n\\nint main() {\\n    // xに100を代入（auto型推論）\\n    auto x = 100;\\n    // yに2.5を代入（auto型推論）\\n    auto y = 2.5;\\n    cout << x * y << endl;\\n    return 0;\\n}",
      "holeyCode": "___\\nusing namespace ___;\\n___\\nint ___() {\\n    // xに100を代入（auto型推論）\\n    auto x = ___;\\n    // yに2.5を代入（auto型推論）\\n    auto y = ___.5;\\n    cout << x * y << ___;\\n    return ___;\\n___",
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
          "std名前空間を利用可能にします。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "autoキーワードで、コンパイラに型を推論させます。",
          null,
          "浮動小数点数（小数）も自動的に推論されます。",
          "計算結果を標準出力に表示します。",
          "プログラムの正常終了を示す値0を返します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "auto",
            "var",
            "let"
          ],
          "others": ["std", "main", "100", "2", "endl", "0", "}", "#include <iostream>", "#include <iostream>", ""]
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
      "holeyCode": "___\\n___\\nusing namespace ___;\\n___\\nint ___() {\\n    // numsに{10, 20, 30}を代入\\n    vector<int> nums = {___, 20, 30};\\n    // : で範囲for文\\n    for (int ___ : nums) {\\n        cout << n << ___;\\n    ___\\n    return ___;\\n___",
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
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "配列を複数の値で初期化する。",
          null,
          "繰り返し処理（ループ）を開始する。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            ":",
            "in",
            "of"
          ],
          "others": ["vector", "std", "main", "10", "n", "endl", "}", "0", "#include <iostream>", "#include <vector>", "#include <iostream>", "#include <vector>", "", "}"]
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
      "holeyCode": "___\\nusing namespace ___;\\n___\\nint ___() {\\n    // pにnullptrを代入\\n    int* p = ___;\\n    // p == nullptrで比較\\n    if (p == ___) {\\n        ___ << \"___\" << endl;\\n    ___\\n    return ___;\\n___",
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
          "この行を正しく入力してください。",
          "型安全なヌルポインタを表すキーワードです。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "nullptr",
            "NULL",
            "0"
          ],
          "others": ["std", "main", "null", "}", "#include <iostream>", "cout", "#include <iostream>", "", "}"]
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
      "holeyCode": "___\\nusing namespace ___;\\n___\\n// constexpr cube(int x)を定義\\nconstexpr int cube(int ___) {\\n    return ___ * x * x;\\n___\\n___\\nint ___() {\\n    // valにcube(3)を代入（constexpr）\\n    constexpr int val = cube(___);\\n    cout << val << ___;\\n    return ___;\\n___",
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
          "この行を正しく入力してください。",
          "コンパイル時に計算を行うためのキーワードです。",
          null,
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "constexpr",
            "const",
            "static"
          ],
          "others": ["std", "x", "}", "main", "3", "endl", "0", "#include <iostream>", "#include <iostream>", "", "}"]
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
      "holeyCode": "___\\n___\\nusing namespace ___;\\n___\\nint ___() {\\n    // { で初期化子リスト\\n    vector<int> v{___, 2, 3, 4, 5};\\n    // : で範囲for文\\n    for (int ___ : v) cout << n << \" \";\\n    cout << ___;\\n    return ___;\\n___",
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
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "配列を複数の値で初期化する。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "{",
            "(",
            "[",
            ":"
          ],
          "others": ["std", "main", "1", "n", "endl", "0", "}", "#include <iostream>", "#include <vector>", "#include <iostream>", "#include <vector>", ""]
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
      "holeyCode": "___\\n___\\nusing namespace ___;\\n___\\nint ___() {\\n    // make_shared で共有ポインタを作成\\n    auto p = make_shared<int>(___);\\n    // *p で中身にアクセス\\n    cout << *p << ___;\\n    return ___;\\n___",
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
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          "共有所有権のスマートポインタを作成する関数です。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "make_shared",
            "make_unique",
            "shared_ptr"
          ],
          "others": ["*", "std", "main", "100", "endl", "0", "}", "#include <iostream>", "#include <memory>", "#include <iostream>", "#include <memory>", ""]
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
      "holeyCode": "___\\n___\\n___\\nusing namespace ___;\\n___\\nint ___() {\\n    // s1に\"こんにちは\"を代入\\n    string s1 = \"___\";\\n    // move で所有権を移動\\n    string s___ = move(s1);\\n    cout << s___ << endl;\\n    return ___;\\n___",
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
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          "namespace std名前空間を利用可能にします。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "文字列型の変数を宣言し、文字列データを代入します。",
          null,
          "moveで所有権を移動します。",
          "ここを正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "move",
            "forward",
            "swap"
          ],
          "others": ["string", "std", "main", "2", "0", "}", "こんにちは", "#include <iostream>", "#include <string>", "#include <utility>", "#include <iostream>", "#include <string>", "#include <utility>", ""]
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
      "holeyCode": "___\\n___\\nusing namespace ___;\\n___\\nint ___() {\\n    // optional で値を保持\\n    optional<int> opt = ___;\\n    // has_value で値の有無をチェック\\n    if (opt.___()) {\\n        cout << opt.value() << ___;\\n    ___\\n    return ___;\\n___",
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
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          "値があるかもしれない状態を表現できる型です。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "has_value",
            "empty",
            "valid"
          ],
          "others": ["optional", "std", "main", "42", "endl", "}", "0", "#include <iostream>", "#include <optional>", "#include <iostream>", "#include <optional>", "", "}"]
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
      "holeyCode": "___\\n___\\nusing namespace ___;\\n___\\nint ___() {\\n    // arrに{10, 20, 30}を代入\\n    array<int, ___> arr = {10, 20, 30};\\n    // : で範囲for文\\n    for (int ___ : arr) cout << n << \" \";\\n    cout << ___;\\n    return ___;\\n___",
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
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "配列を複数の値で初期化する。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "types": [
            "array",
            "vector",
            "list"
          ],
          "operators": [
            ":"
          ],
          "others": ["std", "main", "3", "n", "endl", "0", "}", "#include <iostream>", "#include <array>", "#include <iostream>", "#include <array>", ""]
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
      "holeyCode": "___\\nusing namespace ___;\\n___\\nint ___() {\\n    // xに5を代入\\n    int x = ___;\\n    // x でコピーキャプチャ\\n    auto f = [___]() { return x * x; };\\n    cout << f() << ___;\\n    return ___;\\n___",
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
          "この行を正しく入力してください。",
          "namespace std名前空間を利用可能にします。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "xをコピーキャプチャしてラムダ式を作ります。",
          "ここを正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "captures": [
            "x",
            "&x",
            "="
          ],
          "others": ["int", "std", "main", "5", "endl", "0", "}", "#include <iostream>", "#include <iostream>", ""]
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

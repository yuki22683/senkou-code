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
      "correctCode": "#include <iostream>\\n#include <memory>\\nusing namespace std;\\n\\nint main() {\\n    // make_unique で排他的ポインタを作成\\n    auto p = make_unique<int>(99);\\n    // *p で中身にアクセス\\n    cout << *p << endl;\\n    return 0;\\n}",
      "holeyCode": "___\\n___\\nusing namespace ___;\\n___\\nint ___() {\\n    // make_unique で排他的ポインタを作成\\n    auto p = make_unique<int>(___);\\n    // *p で中身にアクセス\\n    cout << *p << ___;\\n    return ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "#include <memory>",
          "using namespace std;",
          "",
          "int main() {",
          "    // make_unique で排他的ポインタを作成",
          "    auto p = make_unique<int>(99);",
          "    // *p で中身にアクセス",
          "    cout << *p << endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          "排他的所有権のスマートポインタを作成する関数です。",
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
            "make_unique",
            "make_shared",
            "unique_ptr"
          ],
          "others": ["*", "std", "main", "99", "endl", "0", "}", "#include <iostream>", "#include <memory>", "#include <iostream>", "#include <memory>", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "99\\n"
          }
        ]
      },
    {
      "title": "std::variant",
      "correctCode": "#include <iostream>\\n#include <variant>\\nusing namespace std;\\n\\nint main() {\\n    // variant で複数型のうち1つを保持\\n    variant<int, double> v = 3.14;\\n    // get<型> で値を取得\\n    cout << get<double>(v) << endl;\\n    return 0;\\n}",
      "holeyCode": "___\\n___\\nusing namespace ___;\\n___\\nint ___() {\\n    // variant で複数型のうち1つを保持\\n    variant<int, double> v = ___.14;\\n    // get<型> で値を取得\\n    cout << get<double>(v) << ___;\\n    return ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "#include <variant>",
          "using namespace std;",
          "",
          "int main() {",
          "    // variant で複数型のうち1つを保持",
          "    variant<int, double> v = 3.14;",
          "    // get<型> で値を取得",
          "    cout << get<double>(v) << endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          "複数の型のうち1つを安全に保持できる型です。",
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
            "get",
            "value",
            "extract"
          ],
          "others": ["variant", "std", "main", "3", "endl", "0", "}", "#include <iostream>", "#include <variant>", "#include <iostream>", "#include <variant>", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "3.14\\n"
          }
        ]
      },
    {
      "title": "構造化束縛",
      "correctCode": "#include <iostream>\\n#include <tuple>\\nusing namespace std;\\n\\nint main() {\\n    // tにtuple{1, 2.5, \"hi\"}を代入\\n    tuple<int, double, string> t{1, 2.5, \"hi\"};\\n    // auto [a, b, c]でtを分解\\n    auto [a, b, c] = t;\\n    cout << a << \" \" << b << \" \" << c << endl;\\n    return 0;\\n}",
      "holeyCode": "___\\n___\\nusing namespace ___;\\n___\\nint ___() {\\n    // tにtuple{1, 2.5, \"hi\"}を代入\\n    tuple<int, double, string> t{1, 2.5, \"___\"};\\n    // auto [a, b, c]でtを分解\\n    auto [a, b, c] = ___;\\n    cout << a << \"___\" << b << \" \" << c << endl;\\n    return ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "#include <tuple>",
          "using namespace std;",
          "",
          "int main() {",
          "    // tにtuple{1, 2.5, \"hi\"}を代入",
          "    tuple<int, double, string> t{1, 2.5, \"hi\"};",
          "    // auto [a, b, c]でtを分解",
          "    auto [a, b, c] = t;",
          "    cout << a << \" \" << b << \" \" << c << endl;",
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
          "keywords": [
            "auto",
            "var",
            "let"
          ],
          "others": ["tuple", "std", "main", "hi", "t", "0", "}", "#include <iostream>", "#include <tuple>", "#include <iostream>", "#include <tuple>", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1 2.5 hi\\n"
          }
        ]
      },
    {
      "title": "std::string_view",
      "correctCode": "#include <iostream>\\n#include <string_view>\\nusing namespace std;\\n\\n// string_view で文字列ビューを受け取る\\nvoid greet(string_view name) {\\n    cout << \"こんにちは, \" << name << endl;\\n}\\n\\nint main() {\\n    // greet(\"World\")を呼び出す\\n    greet(\"世界\");\\n    return 0;\\n}",
      "holeyCode": "___\\n___\\nusing namespace ___;\\n___\\n// string_view で文字列ビューを受け取る\\nvoid greet(string_view ___) {\\n    ___ << \"___\" << name << endl;\\n___\\n___\\nint ___() {\\n    // greet(\"World\")を呼び出す\\n    greet(\"___\");\\n    return ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "#include <string_view>",
          "using namespace std;",
          "",
          "// string_view で文字列ビューを受け取る",
          "void greet(string_view name) {",
          "    cout << \"こんにちは, \" << name << endl;",
          "}",
          "",
          "int main() {",
          "    // greet(\"World\")を呼び出す",
          "    greet(\"世界\");",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ストリームを読み込みます。",
          "文字列ビュークラス string_view を使用可能にします。",
          "std名前空間を利用可能にします。",
          null,
          null,
          "void型の値を返す関数（greet）を定義します。",
          "名前を含めたメッセージを表示します。",
          "ここを正しく入力してください。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "関数を呼び出して「世界」という文字列ビューを渡します。",
          "プログラムの正常終了を示す値0を返します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "types": [
            "string_view",
            "string",
            "const char*"
          ],
          "others": ["greet", "std", "name", "Hello,", "}", "main", "World", "0", "こんにちは,", "世界", "#include <iostream>", "#include <string_view>", "cout", "#include <iostream>", "#include <string_view>", "", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは, 世界\\n"
          }
        ]
      },
    {
      "title": "std::transform",
      "correctCode": "#include <iostream>\\n#include <vector>\\n#include <algorithm>\\nusing namespace std;\\n\\nint main() {\\n    // vに{1, 2, 3}を代入\\n    vector<int> v = {1, 2, 3};\\n    // transform で各要素を変換\\n    transform(v.begin(), v.end(), v.begin(), [](int x) { return x * 10; });\\n    for (int n : v) cout << n << \" \";\\n    cout << endl;\\n    return 0;\\n}",
      "holeyCode": "___\\n___\\n___\\nusing namespace ___;\\n___\\nint ___() {\\n    // vに{1, 2, 3}を代入\\n    vector<int> v = {___, 2, 3};\\n    // transform で各要素を変換\\n    transform(v.begin(), v.end(), v.begin(), [](int x) { return x * ___; });\\n    for (int ___ : v) cout << n << \" \";\\n    cout << ___;\\n    return ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "#include <vector>",
          "#include <algorithm>",
          "using namespace std;",
          "",
          "int main() {",
          "    // vに{1, 2, 3}を代入",
          "    vector<int> v = {1, 2, 3};",
          "    // transform で各要素を変換",
          "    transform(v.begin(), v.end(), v.begin(), [](int x) { return x * 10; });",
          "    for (int n : v) cout << n << \" \";",
          "    cout << endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "この行を正しく入力してください。",
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
          "ここを正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "algorithms": [
            "transform",
            "for_each",
            "copy"
          ],
          "others": ["vector", "std", "main", "1", "10", "n", "endl", "0", "}", "#include <iostream>", "#include <vector>", "#include <algorithm>", "#include <iostream>", "#include <vector>", "#include <algorithm>", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10 20 30 \\n"
          }
        ]
      },
    {
      "title": "std::accumulate",
      "correctCode": "#include <iostream>\\n#include <vector>\\n#include <numeric>\\nusing namespace std;\\n\\nint main() {\\n    // vに{1, 2, 3, 4, 5}を代入\\n    vector<int> v = {1, 2, 3, 4, 5};\\n    // accumulate で要素を集約\\n    int sum = accumulate(v.begin(), v.end(), 0);\\n    cout << sum << endl;\\n    return 0;\\n}",
      "holeyCode": "___\\n___\\n___\\nusing namespace ___;\\n___\\nint ___() {\\n    // vに{1, 2, 3, 4, 5}を代入\\n    vector<int> v = {___, 2, 3, 4, 5};\\n    // accumulate で要素を集約\\n    int sum = accumulate(v.begin(), v.end(), ___);\\n    cout << sum << ___;\\n    return ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "#include <vector>",
          "#include <numeric>",
          "using namespace std;",
          "",
          "int main() {",
          "    // vに{1, 2, 3, 4, 5}を代入",
          "    vector<int> v = {1, 2, 3, 4, 5};",
          "    // accumulate で要素を集約",
          "    int sum = accumulate(v.begin(), v.end(), 0);",
          "    cout << sum << endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "この行を正しく入力してください。",
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
          "algorithms": [
            "accumulate",
            "reduce",
            "sum"
          ],
          "others": ["vector", "std", "main", "1", "0", "endl", "}", "#include <iostream>", "#include <vector>", "#include <numeric>", "#include <iostream>", "#include <vector>", "#include <numeric>", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "15\\n"
          }
        ]
      },
    {
      "title": "std::find_if",
      "correctCode": "#include <iostream>\\n#include <vector>\\n#include <algorithm>\\nusing namespace std;\\n\\nint main() {\\n    // vに{1, 2, 3, 4, 5}を代入\\n    vector<int> v = {1, 2, 3, 4, 5};\\n    // find_if で条件に合う要素を検索\\n    auto it = find_if(v.begin(), v.end(), [](int x) { return x > 3; });\\n    cout << *it << endl;\\n    return 0;\\n}",
      "holeyCode": "___\\n___\\n___\\nusing namespace ___;\\n___\\nint ___() {\\n    // vに{1, 2, 3, 4, 5}を代入\\n    vector<int> v = {___, 2, 3, 4, 5};\\n    // find_if で条件に合う要素を検索\\n    auto it = find_if(v.begin(), v.end(), [](int x) { return x > ___; });\\n    cout << *it << ___;\\n    return ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "#include <vector>",
          "#include <algorithm>",
          "using namespace std;",
          "",
          "int main() {",
          "    // vに{1, 2, 3, 4, 5}を代入",
          "    vector<int> v = {1, 2, 3, 4, 5};",
          "    // find_if で条件に合う要素を検索",
          "    auto it = find_if(v.begin(), v.end(), [](int x) { return x > 3; });",
          "    cout << *it << endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "この行を正しく入力してください。",
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
          "algorithms": [
            "find_if",
            "find",
            "search"
          ],
          "others": ["vector", "std", "main", "1", "3", "endl", "0", "}", "#include <iostream>", "#include <vector>", "#include <algorithm>", "#include <iostream>", "#include <vector>", "#include <algorithm>", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "4\\n"
          }
        ]
      },
    {
      "title": "std::sort with lambda",
      "correctCode": "#include <iostream>\\n#include <vector>\\n#include <algorithm>\\nusing namespace std;\\n\\nint main() {\\n    // vに{3, 1, 4, 1, 5}を代入\\n    vector<int> v = {3, 1, 4, 1, 5};\\n    // sort でソート\\n    sort(v.begin(), v.end(), [](int a, int b) { return a > b; });\\n    for (int n : v) cout << n << \" \";\\n    cout << endl;\\n    return 0;\\n}",
      "holeyCode": "___\\n___\\n___\\nusing namespace ___;\\n___\\nint ___() {\\n    // vに{3, 1, 4, 1, 5}を代入\\n    vector<int> v = {___, 1, 4, 1, 5};\\n    // sort でソート\\n    sort(v.begin(), v.end(), [](int a, int ___) { return a > b; });\\n    for (int ___ : v) cout << n << \" \";\\n    cout << ___;\\n    return ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "#include <vector>",
          "#include <algorithm>",
          "using namespace std;",
          "",
          "int main() {",
          "    // vに{3, 1, 4, 1, 5}を代入",
          "    vector<int> v = {3, 1, 4, 1, 5};",
          "    // sort でソート",
          "    sort(v.begin(), v.end(), [](int a, int b) { return a > b; });",
          "    for (int n : v) cout << n << \" \";",
          "    cout << endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "この行を正しく入力してください。",
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
          "ここを正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "algorithms": [
            "sort",
            "stable_sort",
            "partial_sort"
          ],
          "others": ["vector", "std", "main", "3", "b", "n", "endl", "0", "}", "#include <iostream>", "#include <vector>", "#include <algorithm>", "#include <iostream>", "#include <vector>", "#include <algorithm>", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "5 4 3 1 1 \\n"
          }
        ]
      },
    {
      "title": "try-catch 例外処理",
      "correctCode": "#include <iostream>\\n#include <stdexcept>\\nusing namespace std;\\n\\nint main() {\\n    try {\\n        // throw runtime_error(\"Oops!\")で例外を投げる\\n        throw runtime_error(\"Oops!\");\\n    // catch(const exception& e)で例外を捕まえる\\n    } catch (const exception& e) {\\n        cout << e.what() << endl;\\n    }\\n    return 0;\\n}",
      "holeyCode": "___\\n___\\nusing namespace ___;\\n___\\nint ___() {\\n    ___ {\\n        // throw runtime_error(\"Oops!\")で例外を投げる\\n        throw runtime_error(\"___\");\\n    // catch(const exception& e)で例外を捕まえる\\n    } catch (const exception& ___) {\\n        cout << e.what() << ___;\\n    ___\\n    return ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "#include <stdexcept>",
          "using namespace std;",
          "",
          "int main() {",
          "    try {",
          "        // throw runtime_error(\"Oops!\")で例外を投げる",
          "        throw runtime_error(\"Oops!\");",
          "    // catch(const exception& e)で例外を捕まえる",
          "    } catch (const exception& e) {",
          "        cout << e.what() << endl;",
          "    }",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          "例外オブジェクトを投げるキーワードです。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "例外が発生する可能性のある処理を開始する。",
          null,
          "ここを正しく入力してください。",
          null,
          "例外が発生した場合の処理を定義する。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "throw",
            "raise",
            "error"
          ],
          "others": ["catch", "std", "main", "try", "Oops!", "e", "endl", "}", "0", "#include <iostream>", "#include <stdexcept>", "#include <iostream>", "#include <stdexcept>", "", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Oops!\\n"
          }
        ]
      },
    {
      "title": "noexcept 指定",
      "correctCode": "#include <iostream>\\nusing namespace std;\\n\\n// add関数をnoexceptで宣言\\nint add(int a, int b) noexcept {\\n    // + で足し算\\n    return a + b;\\n}\\n\\nint main() {\\n    cout << add(10, 20) << endl;\\n    return 0;\\n}",
      "holeyCode": "___\\nusing namespace ___;\\n___\\n// add関数をnoexceptで宣言\\nint add(int a, int b) ___ {\\n    // + で足し算\\n    return a + ___;\\n___\\n___\\nint ___() {\\n    cout << add(___, 20) << endl;\\n    return ___;\\n___",
      "correctLines": [
          "#include <iostream>",
          "using namespace std;",
          "",
          "// add関数をnoexceptで宣言",
          "int add(int a, int b) noexcept {",
          "    // + で足し算",
          "    return a + b;",
          "}",
          "",
          "int main() {",
          "    cout << add(10, 20) << endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ストリームを読み込みます。",
          "std名前空間を利用可能にします。",
          null,
          null,
          "例外を投げないことを保証する noexcept を指定して関数を定義します。",
          null,
          "計算結果を返します。",
          "ここを正しく入力してください。",
          null,
          "プログラムの開始点を定義します。",
          "関数の戻り値を表示します。",
          "プログラムの正常終了を示す値0を返します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "noexcept",
            "nothrow",
            "safe"
          ],
          "others": ["+", "std", "b", "}", "main", "10", "0", "#include <iostream>", "#include <iostream>", "", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "30\\n"
          }
        ]
      }
  ]
}

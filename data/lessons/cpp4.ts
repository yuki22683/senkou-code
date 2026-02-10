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
      "holeyCode": "___\\n___\\n___ ___ ___;\\n___\\n___ ___() {\\n    // make_unique で排他的ポインタを作成\\n    ___ ___ = ___<___>(___);\\n    // *p で中身にアクセス\\n    ___ << ___ << ___;\\n    ___ ___;\\n___",
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
          "標準入出力ストリームを読み込みます。",
          "スマートポインタを使うためのヘッダを読み込みます。",
          "using namespace でstd名前空間を利用可能にします。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "make_uniqueで排他的所有権を持つスマートポインタを作成します。",
          null,
          "ポインタが指す値を出力します。",
          "プログラムの正常終了を示す値0を返します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "functions": [
            "make_unique",
            "make_shared",
            "unique_ptr"
          ],
          "others": ["using", "namespace", "std", "int", "main", "auto", "p", "int", "99", "cout", "*p", "endl", "return", "0", "}", "#include <iostream>", "#include <memory>"]
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
      "holeyCode": "___\\n___\\n___ ___ ___;\\n___\\n___ ___() {\\n    // variant で複数型のうち1つを保持\\n    ___<___, ___> ___ = ___;\\n    // get<型> で値を取得\\n    ___ << ___<___>(___) << ___;\\n    ___ ___;\\n___",
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
          "標準入出力ストリームを読み込みます。",
          "variantを使うためのヘッダを読み込みます。",
          "using namespace でstd名前空間を利用可能にします。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "variant型の変数vにdouble値を代入します。",
          null,
          "get関数でvariantから値を取り出して出力します。",
          "プログラムの正常終了を示す値0を返します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "functions": [
            "get",
            "value",
            "extract"
          ],
          "others": ["using", "namespace", "std", "int", "main", "variant", "double", "v", "3.14", "cout", "endl", "return", "0", "}", "#include <iostream>", "#include <variant>"]
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
      "holeyCode": "___\\n___\\n___ ___ ___;\\n___\\n___ ___() {\\n    // tにtuple{1, 2.5, \"hi\"}を代入\\n    ___<___, ___, ___> ___{___, ___, ___};\\n    // auto [a, b, c]でtを分解\\n    ___ [___, ___, ___] = ___;\\n    ___ << ___ << ___ << ___ << ___ << ___ << ___;\\n    ___ ___;\\n___",
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
          "標準入出力ストリームを読み込みます。",
          "tupleを使うためのヘッダを読み込みます。",
          "using namespace でstd名前空間を利用可能にします。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "tuple型の変数tに3つの値を代入します。",
          null,
          "構造化束縛でtupleを変数a, b, cに分解します。",
          "分解した値を空白区切りで出力します。",
          "プログラムの正常終了を示す値0を返します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "auto",
            "var",
            "let"
          ],
          "others": ["using", "namespace", "std", "int", "main", "tuple", "double", "string", "t", "1", "2.5", "\\\"hi\\\"", "a", "b", "c", "cout", "\\\" \\\"", "endl", "return", "0", "}", "#include <iostream>", "#include <tuple>", "\"", "<", "c << endl"]
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
      "correctCode": "#include <iostream>\\n#include <string_view>\\nusing namespace std;\\n\\n// string_view で文字列ビューを受け取る\\nvoid greet(string_view name) {\\n    cout << \"こんにちは, \" << name << endl;\\n}\\n\\nint main() {\\n    // greet(\"太郎\")を呼び出す\\n    greet(\"太郎\");\\n    return 0;\\n}",
      "holeyCode": "___\\n___\\n___ ___ ___;\\n___\\n// string_view で文字列ビューを受け取る\\n___ ___(___) {\\n    ___ << ___ << ___ << ___;\\n___\\n___\\n___ ___() {\\n    // greet(\"太郎\")を呼び出す\\n    ___(___);\\n    ___ ___;\\n___",
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
          "    // greet(\"太郎\")を呼び出す",
          "    greet(\"太郎\");",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ストリームを読み込みます。",
          "文字列ビュークラス string_view を使用可能にします。",
          "using namespace でstd名前空間を利用可能にします。",
          null,
          null,
          "string_viewを引数に取るgreet関数を定義します。",
          "あいさつメッセージと名前を出力します。",
          "関数の終わりを示す閉じ括弧です。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "greet関数を呼び出して文字列を渡します。",
          "プログラムの正常終了を示す値0を返します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "types": [
            "string_view",
            "string",
            "const char*"
          ],
          "others": ["using", "namespace", "std", "void", "greet", "string_view name", "cout", "\\\"こんにちは, \\\"", "name", "endl", "}", "int", "main", "\\\"太郎\\\"", "return", "0", "#include <iostream>", "#include <string_view>", "\"こんにちは,", "<", "e << endl"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは, 太郎\\n"
          }
        ]
      },
    {
      "title": "std::transform",
      "correctCode": "#include <iostream>\\n#include <vector>\\n#include <algorithm>\\nusing namespace std;\\n\\nint main() {\\n    // vに{1, 2, 3}を代入\\n    vector<int> v = {1, 2, 3};\\n    // transform で各要素を変換\\n    transform(v.begin(), v.end(), v.begin(), [](int x) { return x * 10; });\\n    for (int n : v) cout << n << \" \";\\n    cout << endl;\\n    return 0;\\n}",
      "holeyCode": "___\\n___\\n___\\n___ ___ ___;\\n___\\n___ ___() {\\n    // vに{1, 2, 3}を代入\\n    ___<___> ___ = {___, ___, ___};\\n    // transform で各要素を変換\\n    ___(___.___, ___.___, ___.___, [](___) { ___ ___ * ___; });\\n    for (___ : ___) ___ << ___ << ___;\\n    ___ << ___;\\n    ___ ___;\\n___",
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
          "標準入出力ストリームを読み込みます。",
          "vectorを使うためのヘッダを読み込みます。",
          "アルゴリズム関数を使うためのヘッダを読み込みます。",
          "using namespace でstd名前空間を利用可能にします。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "vector型の変数vに3つの値を代入します。",
          null,
          "transformで各要素を10倍に変換します。",
          "範囲forループで各要素を出力します。",
          "改行を出力します。",
          "プログラムの正常終了を示す値0を返します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "algorithms": [
            "transform",
            "for_each",
            "copy"
          ],
          "others": ["using", "namespace", "std", "int", "main", "vector", "v", "1", "2", "3", "begin()", "end()", "int x", "return", "x", "10", "int n", "cout", "n", "\\\" \\\"", "endl", "0", "}", "#include <iostream>", "#include <vector>", "#include <algorithm>", ": v"]
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
      "holeyCode": "___\\n___\\n___\\n___ ___ ___;\\n___\\n___ ___() {\\n    // vに{1, 2, 3, 4, 5}を代入\\n    ___<___> ___ = {___, ___, ___, ___, ___};\\n    // accumulate で要素を集約\\n    ___ ___ = ___(___.___, ___.___, ___);\\n    ___ << ___ << ___;\\n    ___ ___;\\n___",
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
          "標準入出力ストリームを読み込みます。",
          "vectorを使うためのヘッダを読み込みます。",
          "数値アルゴリズムを使うためのヘッダを読み込みます。",
          "using namespace でstd名前空間を利用可能にします。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "vector型の変数vに5つの値を代入します。",
          null,
          "accumulateで要素を初期値0から累積します。",
          "合計値を出力します。",
          "プログラムの正常終了を示す値0を返します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "algorithms": [
            "accumulate",
            "reduce",
            "sum"
          ],
          "others": ["using", "namespace", "std", "int", "main", "vector", "v", "1", "2", "3", "4", "5", "sum", "begin()", "end()", "0", "cout", "endl", "return", "}", "#include <iostream>", "#include <vector>", "#include <numeric>"]
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
      "holeyCode": "___\\n___\\n___\\n___ ___ ___;\\n___\\n___ ___() {\\n    // vに{1, 2, 3, 4, 5}を代入\\n    ___<___> ___ = {___, ___, ___, ___, ___};\\n    // find_if で条件に合う要素を検索\\n    ___ ___ = ___(___.___, ___.___, [](___) { ___ ___ > ___; });\\n    ___ << ___ << ___;\\n    ___ ___;\\n___",
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
          "標準入出力ストリームを読み込みます。",
          "vectorを使うためのヘッダを読み込みます。",
          "アルゴリズム関数を使うためのヘッダを読み込みます。",
          "using namespace でstd名前空間を利用可能にします。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "vector型の変数vに5つの値を代入します。",
          null,
          "find_ifで3より大きい最初の要素を検索します。",
          "見つかった要素を出力します。",
          "プログラムの正常終了を示す値0を返します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "algorithms": [
            "find_if",
            "find",
            "search"
          ],
          "others": ["using", "namespace", "std", "int", "main", "vector", "v", "1", "2", "3", "4", "5", "auto", "it", "begin()", "end()", "int x", "return", "x", "cout", "*it", "endl", "0", "}", "#include <iostream>", "#include <vector>", "#include <algorithm>"]
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
      "holeyCode": "___\\n___\\n___\\n___ ___ ___;\\n___\\n___ ___() {\\n    // vに{3, 1, 4, 1, 5}を代入\\n    ___<___> ___ = {___, ___, ___, ___, ___};\\n    // sort でソート\\n    ___(___.___, ___.___, [](___) { ___ ___ > ___; });\\n    for (___ : ___) ___ << ___ << ___;\\n    ___ << ___;\\n    ___ ___;\\n___",
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
          "標準入出力ストリームを読み込みます。",
          "vectorを使うためのヘッダを読み込みます。",
          "アルゴリズム関数を使うためのヘッダを読み込みます。",
          "using namespace でstd名前空間を利用可能にします。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "vector型の変数vに5つの値を代入します。",
          null,
          "sortで降順にソートします（a > bで比較）。",
          "範囲forループで各要素を出力します。",
          "改行を出力します。",
          "プログラムの正常終了を示す値0を返します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "algorithms": [
            "sort",
            "stable_sort",
            "partial_sort"
          ],
          "others": ["using", "namespace", "std", "int", "main", "vector", "v", "3", "1", "4", "5", "begin()", "end()", "int a, int b", "return", "a", "b", "int n", "cout", "n", "\\\" \\\"", "endl", "0", "}", "#include <iostream>", "#include <vector>", "#include <algorithm>", ": v"]
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
      "holeyCode": "___\\n___\\n___ ___ ___;\\n___\\n___ ___() {\\n    ___ {\\n        // throw runtime_error(\"Oops!\")で例外を投げる\\n        ___ ___(___);\\n    // catch(const exception& e)で例外を捕まえる\\n    } ___ (___) {\\n        ___ << ___.___ << ___;\\n    ___\\n    ___ ___;\\n___",
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
          "標準入出力ストリームを読み込みます。",
          "例外クラスを使うためのヘッダを読み込みます。",
          "using namespace でstd名前空間を利用可能にします。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "例外が発生する可能性のある処理を開始します。",
          null,
          "throwでruntime_error例外を投げます。",
          null,
          "catchで例外を捕捉します。",
          "例外メッセージを出力します。",
          "catchブロックの終わりを示す閉じ括弧です。",
          "プログラムの正常終了を示す値0を返します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "throw",
            "raise",
            "error"
          ],
          "others": ["using", "namespace", "std", "int", "main", "try", "runtime_error", "\\\"Oops!\\\"", "catch", "const exception& e", "cout", "e", "what()", "endl", "}", "return", "0", "#include <iostream>", "#include <stdexcept>"]
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
      "correctCode": "#include <iostream>\\nusing namespace std;\\n\\n// add関数をnoexceptで宣言\\nint add(int a, int b) noexcept {\\n    // + で足し算\\n    return a + b;\\n}\\n\\nint main() {\\n    // add関数を呼び出し（第1引数に10, 第2引数に20）\\n    cout << add(10, 20) << endl;\\n    return 0;\\n}",
      "holeyCode": "___\\n___ ___ ___;\\n___\\n// add関数をnoexceptで宣言\\n___ ___(___) ___ {\\n    // + で足し算\\n    ___ ___ + ___;\\n___\\n___\\n___ ___() {\\n    // add関数を呼び出し（第1引数に10, 第2引数に20）\\n    ___ << ___(___) << ___;\\n    ___ ___;\\n___",
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
          "    // add関数を呼び出し（第1引数に10, 第2引数に20）",
          "    cout << add(10, 20) << endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "標準入出力ストリームを読み込みます。",
          "using namespace でstd名前空間を利用可能にします。",
          null,
          null,
          "例外を投げないことを保証する noexcept を指定してadd関数を定義します。",
          null,
          "a + bの計算結果を返します。",
          "関数の終わりを示す閉じ括弧です。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "add関数を呼び出して結果を出力します。",
          "プログラムの正常終了を示す値0を返します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "noexcept",
            "nothrow",
            "safe"
          ],
          "others": ["using", "namespace", "std", "int", "add", "int a, int b", "return", "a", "b", "}", "main", "cout", "10, 20", "endl", "0", "#include <iostream>"]
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

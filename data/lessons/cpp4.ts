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
            "content": "# 排他的（はいたてき）所有権（しょゆうけん）のスマートポインタ\n\n**unique_ptr**（ユニークポインタ）は、「1人だけが持てる」スマートポインタです。\n\n**身近な例え：**\n映画のチケットのようなものです。1枚のチケットは1人しか持てません。他の人に渡したら、自分は映画を見られなくなります。\n\n**実際のコードを見てみましょう：**\n```cpp\nauto p = make_unique<int>(42);  // 42という値を持つ専用のポインタ\ncout << *p << endl;             // 42と表示される\n// ここでスコープを出ると、自動でメモリが解放される！\n```\n\n**メリット：**\n- `delete` を書き忘れてもメモリリークしない\n- 誰が所有者かが明確"
          },
          {
            "title": "コピー不可",
            "content": "# コピーはできない、移動（いどう）のみ\n\n`unique_ptr` は「1人だけ」が鉄則なので、コピーできません。\n\n**身近な例え：**\n映画のチケットをコピーしたら、同じ席に2人座ることになって困りますよね。だからコピーは禁止。でも「渡す」ことはできます。\n\n**実際のコードを見てみましょう：**\n```cpp\nauto p1 = make_unique<int>(10);  // p1 が所有者\n\n// auto p2 = p1;           // エラー！コピーは禁止\nauto p2 = move(p1);         // OK！p1 から p2 に渡す\n// p1 はもう使えない（空っぽ）\n// p2 が新しい所有者\n```\n\n**ポイント：**\n- コピー（複製）は禁止\n- ムーブ（移動）はOK\n- 移動後の元の変数は使わないこと"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <iostream>\n#include <memory>\nusing namespace std;\n\nint main() {\n    // make_unique で排他的ポインタを作成\n    auto p = make_unique<int>(99);\n    // *p で中身にアクセス\n    cout << *p << endl;\n    return 0;\n}",
        "holeyCode": "#include <iostream>\n#include <memory>\nusing namespace std;\n\nint main() {\n    // make_unique で排他的ポインタを作成\n    auto p = ___<int>(99);\n    // *p で中身にアクセス\n    cout << ___p << endl;\n    return 0;\n}",
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
          null,
          null,
          "排他的所有権のスマートポインタを作成する関数です。",
          "ポインタの中身を参照するための間接参照演算子です。",
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "functions": [
            "make_unique",
            "make_shared",
            "unique_ptr"
          ],
          "others": [
            "*"
          ]
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
            "content": "# 型安全（かたあんぜん）な「どれか1つ」型\n\n**std::variant**（バリアント）は、「いくつかの型のうち、どれか1つ」を安全に保持できます。\n\n**身近な例え：**\n自動販売機のボタンのようなものです。「コーラ」「お茶」「水」のボタンがあって、押せるのは1つだけ。variant は「int か string のどちらか1つ」を保持できます。\n\n**実際のコードを見てみましょう：**\n```cpp\nvariant<int, string> v;  // int か string のどちらかを入れられる箱\n\nv = 42;        // 今は int を保持中\nv = \"hello\";   // 今は string を保持中（int は消える）\n```\n\n**メリット：**\n今どの型が入っているかを追跡してくれるので安全！"
          },
          {
            "title": "値の取得",
            "content": "# 中身を取り出す方法\n\nvariant から値を取り出すには、「今何が入っているか」をチェックします。\n\n**身近な例え：**\n宝箱を開ける前に「中身は金貨？宝石？」と確認してから取り出すイメージです。\n\n**実際のコードを見てみましょう：**\n```cpp\nvariant<int, string> v = 42;\n\n// holds_alternative で「今 int が入っている？」と確認\nif (holds_alternative<int>(v)) {\n    cout << get<int>(v) << endl;  // get<int> で int として取り出す\n}\n\n// 間違った型で取り出そうとするとエラー！\n// get<string>(v);  // 今は int が入っているのでダメ\n```\n\n**ポイント：**\n- `holds_alternative<型>(v)`: その型が入っているか確認\n- `get<型>(v)`: その型として取り出す"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <iostream>\n#include <variant>\nusing namespace std;\n\nint main() {\n    // variant で複数型のうち1つを保持\n    variant<int, double> v = 3.14;\n    // get<型> で値を取得\n    cout << get<double>(v) << endl;\n    return 0;\n}",
        "holeyCode": "#include <iostream>\n#include <variant>\nusing namespace std;\n\nint main() {\n    // variant で複数型のうち1つを保持\n    ___<int, double> v = 3.14;\n    // get<型> で値を取得\n    cout << ___<double>(v) << endl;\n    return 0;\n}",
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
          null,
          null,
          "複数の型のうち1つを安全に保持できる型です。",
          "variantから指定した型の値を取り出す関数です。",
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "functions": [
            "get",
            "value",
            "extract"
          ],
          "others": [
            "variant"
          ]
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
            "content": "# 複数（ふくすう）の値を一度に受け取る\n\n**構造化束縛（こうぞうかそくばく）**は、まとまったデータを一度にバラバラの変数に分けて受け取る機能です。\n\n**身近な例え：**\nプレゼント袋から「お菓子」「おもちゃ」「カード」を一気に取り出して、それぞれ別の箱に入れるイメージです。\n\n**実際のコードを見てみましょう：**\n```cpp\npair<int, string> p = {1, \"hello\"};  // 数字と文字列のペア\n\n// 構造化束縛で一度に受け取る\nauto [num, str] = p;\n//    ↑    ↑\n//    1   \"hello\" がそれぞれ入る\n\ncout << num << \", \" << str << endl;  // 1, hello\n```\n\n**ポイント：**\n`auto [変数1, 変数2, ...] = データ;` の形で書きます。"
          },
          {
            "title": "mapのイテレーション",
            "content": "# map を便利（べんり）にループ\n\n構造化束縛は、map（辞書）をループするときにとても便利です。\n\n**身近な例え：**\n電話帳を見るとき、「名前」と「電話番号」を同時に読み取れるようなものです。\n\n**実際のコードを見てみましょう：**\n```cpp\nmap<string, int> m = {{\"りんご\", 100}, {\"バナナ\", 80}};\n\n// 昔の書き方（面倒...）\nfor (auto it = m.begin(); it != m.end(); ++it) {\n    cout << it->first << \": \" << it->second << endl;\n}\n\n// 構造化束縛を使った書き方（スッキリ！）\nfor (auto [key, value] : m) {\n    cout << key << \": \" << value << endl;\n}\n// りんご: 100\n// バナナ: 80\n```\n\nキー（key）と値（value）を別々の変数で受け取れます！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <iostream>\n#include <tuple>\nusing namespace std;\n\nint main() {\n    // tuple で複数の値をまとめる\n    tuple<int, double, string> t{1, 2.5, \"hi\"};\n    // auto で構造化束縛\n    auto [a, b, c] = t;\n    cout << a << \" \" << b << \" \" << c << endl;\n    return 0;\n}",
        "holeyCode": "#include <iostream>\n#include <tuple>\nusing namespace std;\n\nint main() {\n    // tuple で複数の値をまとめる\n    ___<int, double, string> t{1, 2.5, \"hi\"};\n    // auto で構造化束縛\n    ___ [a, b, c] = t;\n    cout << a << \" \" << b << \" \" << c << endl;\n    return 0;\n}",
        "correctLines": [
          "#include <iostream>",
          "#include <tuple>",
          "using namespace std;",
          "",
          "int main() {",
          "    // tuple で複数の値をまとめる",
          "    tuple<int, double, string> t{1, 2.5, \"hi\"};",
          "    // auto で構造化束縛",
          "    auto [a, b, c] = t;",
          "    cout << a << \" \" << b << \" \" << c << endl;",
          "    return 0;",
          "}"
        ],
        "lineHints": [
          null,
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          "型を自動推論して複数の変数に分解するキーワードです。",
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
          "keywords": [
            "auto",
            "var",
            "let"
          ],
          "others": [
            "tuple"
          ]
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
            "content": "# 文字列（もじれつ）への軽量（けいりょう）ビュー\n\n**string_view**（ストリングビュー）は、文字列を「コピーせずに見る」ための型です。\n\n**身近な例え：**\n図書館で本を「借りる」代わりに「その場で読む」ようなものです。本をコピーしないので速くて効率的！\n\n**実際のコードを見てみましょう：**\n```cpp\nvoid print(string_view sv) {  // 文字列をコピーせずに受け取る\n    cout << sv << endl;\n}\n\nprint(\"hello\");  // 文字列リテラルもOK\nstring s = \"world\";\nprint(s);        // string型もOK\n```\n\n**メリット：**\nどんな種類の文字列でも、コピーなしで受け取れます！"
          },
          {
            "title": "メリット",
            "content": "# なぜ string_view が便利なの？\n\nこれまでの書き方と比べてみましょう。\n\n**身近な例え：**\n写真を見せるとき、「実物の写真」でも「スマホの画面」でも、見る分には同じですよね。string_view は両方受け取れます。\n\n**実際のコードを見てみましょう：**\n```cpp\n// 方法1: string で受け取る（コピーが発生）\nvoid f1(string s);     // 毎回コピー = 遅い\n\n// 方法2: const string& で受け取る\nvoid f2(const string& s);  // \"hello\" を渡すと一時オブジェクトが作られる\n\n// 方法3: string_view で受け取る（オススメ！）\nvoid f3(string_view sv);   // コピーなし、どんな文字列もOK！\n\nstring s = \"world\";\nf3(s);        // string型 → OK\nf3(\"hello\");  // 文字列リテラル → OK\nf3(\"abc\");    // const char* → OK\n```\n\n関数の引数で「文字列を読むだけ」なら string_view が最適！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <iostream>\n#include <string_view>\nusing namespace std;\n\n// string_view で文字列ビューを受け取る\nvoid greet(string_view name) {\n    cout << \"Hello, \" << name << endl;\n}\n\nint main() {\n    // greet で関数を呼び出し\n    greet(\"World\");\n    return 0;\n}",
        "holeyCode": "#include <iostream>\n#include <string_view>\nusing namespace std;\n\n// string_view で文字列ビューを受け取る\nvoid greet(___ name) {\n    cout << \"Hello, \" << name << endl;\n}\n\nint main() {\n    // greet で関数を呼び出し\n    ___(\"World\");\n    return 0;\n}",
        "correctLines": [
          "#include <iostream>",
          "#include <string_view>",
          "using namespace std;",
          "",
          "// string_view で文字列ビューを受け取る",
          "void greet(string_view name) {",
          "    cout << \"Hello, \" << name << endl;",
          "}",
          "",
          "int main() {",
          "    // greet で関数を呼び出し",
          "    greet(\"World\");",
          "    return 0;",
          "}"
        ],
        "lineHints": [
          null,
          null,
          "void型の値を返す関数（greet）を定義します。",
          "定義した関数を呼び出します。",
          null,
          null,
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
          "types": [
            "string_view",
            "string",
            "const char*"
          ],
          "others": [
            "greet"
          ]
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
            "content": "# 全ての要素（ようそ）を変換（へんかん）する\n\n**transform**（トランスフォーム）は、配列の各要素に同じ処理を適用して、結果を別の場所に保存するアルゴリズムです。\n\n**身近な例え：**\n写真アプリで「全ての写真にフィルターをかける」ようなものです。1枚1枚手動でやらなくても、一括で処理できます。\n\n**実際のコードを見てみましょう：**\n```cpp\nvector<int> in = {1, 2, 3};    // 元の配列\nvector<int> out(3);             // 結果を入れる配列\n\n// 各要素を2倍にして out に保存\ntransform(in.begin(), in.end(), out.begin(),\n          [](int x) { return x * 2; });\n// out = {2, 4, 6}\n```\n\n引数: (開始, 終了, 出力先, 変換関数)"
          },
          {
            "title": "使用例",
            "content": "# 文字列を大文字（おおもじ）に変換\n\n`transform` は文字列の変換にも使えます。\n\n**身近な例え：**\n「hello」という文字を1文字ずつ大文字スタンプで押し直すイメージです。\n\n**実際のコードを見てみましょう：**\n```cpp\nstring s = \"hello\";\n\n// 各文字を大文字に変換（結果を同じ場所に上書き）\ntransform(s.begin(), s.end(), s.begin(), ::toupper);\n//        ↑開始    ↑終了    ↑出力先   ↑変換関数\n\ncout << s << endl;  // \"HELLO\"\n```\n\n**ポイント：**\n- 出力先を元の配列にすれば「上書き」できる\n- `::toupper` は「大文字に変換」する関数"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    // vector で配列を作成\n    vector<int> v = {1, 2, 3};\n    // transform で各要素を変換\n    transform(v.begin(), v.end(), v.begin(), [](int x) { return x * 10; });\n    for (int n : v) cout << n << \" \";\n    cout << endl;\n    return 0;\n}",
        "holeyCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    // vector で配列を作成\n    ___<int> v = {1, 2, 3};\n    // transform で各要素を変換\n    ___(v.begin(), v.end(), v.begin(), [](int x) { return x * 10; });\n    for (int n : v) cout << n << \" \";\n    cout << endl;\n    return 0;\n}",
        "correctLines": [
          "#include <iostream>",
          "#include <vector>",
          "#include <algorithm>",
          "using namespace std;",
          "",
          "int main() {",
          "    // vector で配列を作成",
          "    vector<int> v = {1, 2, 3};",
          "    // transform で各要素を変換",
          "    transform(v.begin(), v.end(), v.begin(), [](int x) { return x * 10; });",
          "    for (int n : v) cout << n << \" \";",
          "    cout << endl;",
          "    return 0;",
          "}"
        ],
        "lineHints": [
          null,
          null,
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          "各要素に関数を適用して変換するアルゴリズムです。",
          null,
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
          "algorithms": [
            "transform",
            "for_each",
            "copy"
          ],
          "others": [
            "vector"
          ]
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
            "content": "# 要素（ようそ）を全部まとめる\n\n**accumulate**（アキュムレート）は、配列の全要素を1つの値にまとめるアルゴリズムです。\n\n**身近な例え：**\n貯金箱に毎日お金を入れていって、最後に全部でいくらか数えるイメージです。「累計」や「合計」を計算できます。\n\n**実際のコードを見てみましょう：**\n```cpp\nvector<int> v = {1, 2, 3, 4, 5};\n\n// 全部足し算する（初期値は 0）\nint sum = accumulate(v.begin(), v.end(), 0);\n//                   ↑開始    ↑終了    ↑初期値\n\n// 0 + 1 + 2 + 3 + 4 + 5 = 15\ncout << sum << endl;  // 15\n```\n\n引数: (開始, 終了, 初期値)"
          },
          {
            "title": "カスタム演算",
            "content": "# 足し算以外の計算もできる\n\n4つ目の引数で「どうやってまとめるか」を指定できます。\n\n**身近な例え：**\n「全部足す」だけでなく「全部かける」「最大値を見つける」など、まとめ方を変えられます。\n\n**実際のコードを見てみましょう：**\n```cpp\nvector<int> v = {1, 2, 3, 4, 5};\n\n// 全部かけ算する（初期値は 1）\nint product = accumulate(v.begin(), v.end(), 1,\n    [](int a, int b) { return a * b; });\n// 1 * 1 * 2 * 3 * 4 * 5 = 120\ncout << product << endl;  // 120\n```\n\n**ポイント：**\n- 足し算の初期値は `0`（0 + 1 + 2 + ...）\n- かけ算の初期値は `1`（1 * 1 * 2 * ...）\n- ラムダ式で好きな計算ができる"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <iostream>\n#include <vector>\n#include <numeric>\nusing namespace std;\n\nint main() {\n    // vector で配列を作成\n    vector<int> v = {1, 2, 3, 4, 5};\n    // accumulate で要素を集約\n    int sum = accumulate(v.begin(), v.end(), 0);\n    cout << sum << endl;\n    return 0;\n}",
        "holeyCode": "#include <iostream>\n#include <vector>\n#include <numeric>\nusing namespace std;\n\nint main() {\n    // vector で配列を作成\n    ___<int> v = {1, 2, 3, 4, 5};\n    // accumulate で要素を集約\n    int sum = ___(v.begin(), v.end(), 0);\n    cout << sum << endl;\n    return 0;\n}",
        "correctLines": [
          "#include <iostream>",
          "#include <vector>",
          "#include <numeric>",
          "using namespace std;",
          "",
          "int main() {",
          "    // vector で配列を作成",
          "    vector<int> v = {1, 2, 3, 4, 5};",
          "    // accumulate で要素を集約",
          "    int sum = accumulate(v.begin(), v.end(), 0);",
          "    cout << sum << endl;",
          "    return 0;",
          "}"
        ],
        "lineHints": [
          null,
          null,
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          "要素を累積して1つの値にまとめるアルゴリズムです。",
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
          "algorithms": [
            "accumulate",
            "reduce",
            "sum"
          ],
          "others": [
            "vector"
          ]
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
            "content": "# 条件（じょうけん）に合うものを探す\n\n**find_if**（ファインドイフ）は、「条件に合う最初の要素」を見つけるアルゴリズムです。\n\n**身近な例え：**\n本棚から「赤い表紙の本」を探すとき、左から順番に見ていって最初に見つかったものを取り出すイメージです。\n\n**実際のコードを見てみましょう：**\n```cpp\nvector<int> v = {1, 3, 5, 6, 7};\n\n// 最初の偶数（2で割り切れる数）を探す\nauto it = find_if(v.begin(), v.end(),\n    [](int x) { return x % 2 == 0; });  // 条件：偶数か？\n\ncout << *it << endl;  // 6（最初に見つかった偶数）\n```\n\n返り値はイテレータ（位置を指すもの）なので、`*` をつけて中身を取り出します。"
          },
          {
            "title": "見つからない場合",
            "content": "# 見つからなかったらどうなる？\n\n条件に合う要素が1つもない場合、`end()` が返されます。\n\n**身近な例え：**\n本棚を全部見ても「赤い本」がなかったら、「本棚の外」を指して「なかったよ」と教えてくれます。\n\n**実際のコードを見てみましょう：**\n```cpp\nvector<int> v = {1, 3, 5, 7};  // 偶数がない！\n\nauto it = find_if(v.begin(), v.end(),\n    [](int x) { return x % 2 == 0; });\n\n// 見つかったかどうかをチェック\nif (it != v.end()) {\n    cout << \"Found: \" << *it << endl;\n} else {\n    cout << \"Not found\" << endl;  // これが表示される\n}\n```\n\n**重要：**\n必ず `end()` と比較してから使いましょう！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    // vector で配列を作成\n    vector<int> v = {1, 2, 3, 4, 5};\n    // find_if で条件に合う要素を検索\n    auto it = find_if(v.begin(), v.end(), [](int x) { return x > 3; });\n    cout << *it << endl;\n    return 0;\n}",
        "holeyCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    // vector で配列を作成\n    ___<int> v = {1, 2, 3, 4, 5};\n    // find_if で条件に合う要素を検索\n    auto it = ___(v.begin(), v.end(), [](int x) { return x > 3; });\n    cout << *it << endl;\n    return 0;\n}",
        "correctLines": [
          "#include <iostream>",
          "#include <vector>",
          "#include <algorithm>",
          "using namespace std;",
          "",
          "int main() {",
          "    // vector で配列を作成",
          "    vector<int> v = {1, 2, 3, 4, 5};",
          "    // find_if で条件に合う要素を検索",
          "    auto it = find_if(v.begin(), v.end(), [](int x) { return x > 3; });",
          "    cout << *it << endl;",
          "    return 0;",
          "}"
        ],
        "lineHints": [
          null,
          null,
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          "条件に合う最初の要素を検索するアルゴリズムです。",
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
          "algorithms": [
            "find_if",
            "find",
            "search"
          ],
          "others": [
            "vector"
          ]
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
            "content": "# 自分で並（なら）び順を決める\n\n**sort**（ソート）にラムダ式を渡すと、好きな順番で並べ替えができます。\n\n**身近な例え：**\nトランプを「数字の小さい順」に並べるか「大きい順」に並べるか、自分でルールを決められます。\n\n**実際のコードを見てみましょう：**\n```cpp\nvector<int> v = {3, 1, 4, 1, 5};\n\n// 降順（大きい順）にソート\nsort(v.begin(), v.end(), [](int a, int b) {\n    return a > b;  // a が b より大きいとき、a を前に置く\n});\n// 結果: {5, 4, 3, 1, 1}\n\n// 昇順（小さい順）にソート\nsort(v.begin(), v.end());  // デフォルトは昇順\n// 結果: {1, 1, 3, 4, 5}\n```\n\nラムダの返り値が `true` なら、左の要素を前に置きます。"
          },
          {
            "title": "オブジェクトのソート",
            "content": "# クラスのオブジェクトを並べ替え\n\n自分で作ったクラスのリストも、好きな基準でソートできます。\n\n**身近な例え：**\n名簿を「名前順」で並べるか「年齢順」で並べるか選べるようなものです。\n\n**実際のコードを見てみましょう：**\n```cpp\nstruct Person {\n    string name;\n    int age;\n};\n\nvector<Person> people = {\n    {\"太郎\", 25}, {\"花子\", 20}, {\"次郎\", 30}\n};\n\n// 年齢で並べ替え（若い順）\nsort(people.begin(), people.end(),\n    [](const Person& a, const Person& b) {\n        return a.age < b.age;  // 年齢が小さい方を前に\n    });\n// 結果: 花子(20), 太郎(25), 次郎(30)\n```\n\n`const Person&` で受け取ると、コピーせず効率的に比較できます。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    // vector で配列を作成\n    vector<int> v = {3, 1, 4, 1, 5};\n    // sort でソート\n    sort(v.begin(), v.end(), [](int a, int b) { return a > b; });\n    for (int n : v) cout << n << \" \";\n    cout << endl;\n    return 0;\n}",
        "holeyCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    // vector で配列を作成\n    ___<int> v = {3, 1, 4, 1, 5};\n    // sort でソート\n    ___(v.begin(), v.end(), [](int a, int b) { return a > b; });\n    for (int n : v) cout << n << \" \";\n    cout << endl;\n    return 0;\n}",
        "correctLines": [
          "#include <iostream>",
          "#include <vector>",
          "#include <algorithm>",
          "using namespace std;",
          "",
          "int main() {",
          "    // vector で配列を作成",
          "    vector<int> v = {3, 1, 4, 1, 5};",
          "    // sort でソート",
          "    sort(v.begin(), v.end(), [](int a, int b) { return a > b; });",
          "    for (int n : v) cout << n << \" \";",
          "    cout << endl;",
          "    return 0;",
          "}"
        ],
        "lineHints": [
          null,
          null,
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          "要素を並べ替えるアルゴリズムです。",
          null,
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
          "algorithms": [
            "sort",
            "stable_sort",
            "partial_sort"
          ],
          "others": [
            "vector"
          ]
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
            "content": "# try-catch でエラーを安全に処理（しょり）\n\n**例外処理（れいがいしょり）**は、プログラムでエラーが起きたときに安全に対処する仕組みです。\n\n**身近な例え：**\nサーカスの綱渡りで、落ちたときに備えて「セーフティネット」を張っておくようなものです。エラーが起きても、プログラムがクラッシュせずに済みます。\n\n**実際のコードを見てみましょう：**\n```cpp\ntry {                                // ここで危険な処理をする\n    throw runtime_error(\"Error!\");   // エラーを「投げる」\n} catch (const exception& e) {       // エラーを「捕まえる」\n    cout << e.what() << endl;        // エラーメッセージを表示\n}\n// プログラムは続行できる！\n```\n\n**用語解説：**\n- `throw`: エラーを投げる\n- `catch`: エラーを捕まえる\n- `e.what()`: エラーメッセージを取得"
          },
          {
            "title": "標準例外",
            "content": "# よく使う例外（れいがい）の種類\n\nC++には、よくあるエラーのための「例外クラス」が用意されています。\n\n**身近な例え：**\n病院の「症状別窓口」のようなものです。「風邪」「怪我」「健康診断」で窓口が違うように、エラーの種類で対応を変えられます。\n\n**よく使う例外一覧：**\n```cpp\nruntime_error     // 実行時エラー（一般的なエラー）\nlogic_error       // 論理エラー（プログラムのバグ）\nout_of_range      // 範囲外アクセス（配列の外を見ようとした）\ninvalid_argument  // 不正な引数（おかしな値が渡された）\n```\n\n**使い分けの例：**\n```cpp\nif (index >= array.size()) {\n    throw out_of_range(\"インデックスが範囲外です\");\n}\nif (age < 0) {\n    throw invalid_argument(\"年齢は0以上である必要があります\");\n}\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nint main() {\n    try {\n        // throw で例外を投げる\n        throw runtime_error(\"Oops!\");\n    // catch で例外を捕まえる\n    } catch (const exception& e) {\n        cout << e.what() << endl;\n    }\n    return 0;\n}",
        "holeyCode": "#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nint main() {\n    try {\n        // throw で例外を投げる\n        ___ runtime_error(\"Oops!\");\n    // catch で例外を捕まえる\n    } ___ (const exception& e) {\n        cout << e.what() << endl;\n    }\n    return 0;\n}",
        "correctLines": [
          "#include <iostream>",
          "#include <stdexcept>",
          "using namespace std;",
          "",
          "int main() {",
          "    try {",
          "        // throw で例外を投げる",
          "        throw runtime_error(\"Oops!\");",
          "    // catch で例外を捕まえる",
          "    } catch (const exception& e) {",
          "        cout << e.what() << endl;",
          "    }",
          "    return 0;",
          "}"
        ],
        "lineHints": [
          null,
          null,
          "例外オブジェクトを投げるキーワードです。",
          "エラー（例外）が発生した場合の処理を記述します。",
          null,
          null,
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
          "keywords": [
            "throw",
            "raise",
            "error"
          ],
          "others": [
            "catch"
          ]
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
            "content": "# 「例外を投げません」という約束\n\n**noexcept**（ノーエクセプト）は、「この関数は例外を投げません」と宣言するキーワードです。\n\n**身近な例え：**\n「この道は絶対に通行止めになりません」という保証のようなものです。安心して通れるので、より効率的な経路が選べます。\n\n**実際のコードを見てみましょう：**\n```cpp\n// 「例外を投げない」と約束する関数\nvoid safe() noexcept {\n    int x = 1 + 1;  // 絶対にエラーが起きない処理\n}\n\n// 例外を投げる可能性がある関数（noexcept なし）\nvoid risky() {\n    throw runtime_error(\"Error!\");  // エラーを投げるかも\n}\n```\n\n**ポイント：**\n`noexcept` をつけた関数内で例外を投げると、プログラムが強制終了します。"
          },
          {
            "title": "メリット",
            "content": "# noexcept をつけると何が良いの？\n\n`noexcept` には2つの大きなメリットがあります。\n\n**メリット1: プログラムが速くなる**\n```cpp\nint add(int a, int b) noexcept {\n    return a + b;\n}\n// コンパイラが「例外処理のコード」を省略できる → 速い！\n```\n\n**メリット2: ムーブが安全に使える**\n```cpp\nclass MyClass {\npublic:\n    // noexcept をつけると、vectorなどで効率的に使われる\n    MyClass(MyClass&&) noexcept = default;\n};\n```\n\n**身近な例え：**\nレストランで「この料理はアレルギー物質を含みません」と保証されていれば、安心して注文できますよね。`noexcept` も同じで、「エラーは起きません」と保証することで、周りのコードが安心して使えます。\n\n**使いどころ：**\n- 単純な計算（足し算、掛け算など）\n- ムーブコンストラクタ、ムーブ代入演算子"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "#include <iostream>\nusing namespace std;\n\n// noexcept で例外を投げないことを宣言\nint add(int a, int b) noexcept {\n    // + で足し算\n    return a + b;\n}\n\nint main() {\n    cout << add(10, 20) << endl;\n    return 0;\n}",
        "holeyCode": "#include <iostream>\nusing namespace std;\n\n// noexcept で例外を投げないことを宣言\nint add(int a, int b) ___ {\n    // + で足し算\n    return a ___ b;\n}\n\nint main() {\n    cout << add(10, 20) << endl;\n    return 0;\n}",
        "correctLines": [
          "#include <iostream>",
          "using namespace std;",
          "",
          "// noexcept で例外を投げないことを宣言",
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
          null,
          "int型の値を返す関数（add）を定義します。",
          "2つの数値を加算する演算子です。",
          null,
          null,
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
          "keywords": [
            "noexcept",
            "nothrow",
            "safe"
          ],
          "others": [
            "+"
          ]
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

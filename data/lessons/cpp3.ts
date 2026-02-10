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
      "description": "データの種類（型）について理解します",
      "tutorialSlides": [
        {
          "title": "auto とは？",
          "content": "# 型の自動推論\\n\\n**auto**（オート）を使うと、コンパイラ（プログラムを翻訳するソフト）が自動で型を判断してくれます。\\n\\n**身近な例え：**\\n「これはリンゴです」と言わなくても、見ればリンゴだとわかりますよね。`auto` は「見ればわかるでしょ？」とコンパイラに任せる書き方です。\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\nauto x = 42;        // 42は整数 → int型と自動判断\\nauto pi = 3.14;     // 3.14は小数 → double型と自動判断\\nauto name = \"Alice\"; // 文字列 → const char*型と自動判断\\n```\\n\\n**メリット：**\\n型を書く手間が省けて、コードがスッキリします！"
        },
        {
          "title": "イテレータで便利",
          "content": "# 長い型名を省略\\n\\n`auto` は、型名が長くて書くのが大変なときに特に便利です。\\n\\n**イテレータ**（配列の中を順番に見ていくための道具）は型名がとても長いです。\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\nstd::vector<int> v = {1, 2, 3};\\n\\n// auto がないと...\\nstd::vector<int>::iterator it = v.begin();  // 長い！\\n\\n// auto を使うと...\\nauto it = v.begin();  // スッキリ！\\n\\nfor (auto it = v.begin(); it != v.end(); ++it) {\\n    std::cout << *it << std::endl;\\n}\\n```\\n\\n**ポイント：**\\n型が複雑になるほど、`auto` の便利さがわかります！"
        }
      ],
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
      "description": "同じ処理を何度も実行する「繰り返し」を学びます",
      "tutorialSlides": [
        {
          "title": "範囲for文とは？",
          "content": "# シンプルなループ構文\\n\\nC++11の **範囲for文** を使うと、配列やベクターの中身を簡単に1つずつ取り出せます。\\n\\n**身近な例え：**\\nお菓子の箱から順番にお菓子を取り出すイメージです。「箱の中のお菓子を1つずつ取り出して食べる」のように、配列の中の値を1つずつ取り出して処理できます。\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\nvector<int> v = {1, 2, 3};  // 数字が入った箱を作る\\nfor (int x : v) {            // 箱から1つずつ取り出す\\n    cout << x << endl;       // 取り出した数字を表示\\n}\\n// 出力: 1, 2, 3 が順番に表示される\\n```\\n\\n**ポイント：**\\n`:` は「〜の中から」という意味だと覚えましょう！"
        },
        {
          "title": "参照で受け取る",
          "content": "# コピーを避ける書き方\\n\\n通常の範囲for文は、要素を「コピー」して取り出します。大きなデータだとコピーに時間がかかります。\\n\\n**身近な例え：**\\n本を読むとき、毎回コピーを取って読むより、本棚にある本をそのまま読む方が早いですよね。\\n\\n**参照で受け取る書き方：**\\n```cpp\\nfor (const auto& x : v) {\\n    // & をつけると「参照」で受け取る（コピーしない）\\n    // const をつけると「変更しない」という約束\\n    cout << x << endl;\\n}\\n```\\n\\n**使い分け：**\\n- `int x` : 小さいデータ（int, charなど）はコピーでOK\\n- `const auto& x` : 大きいデータ（string, vectorなど）は参照が効率的\\n\\n`auto` を使うと型を自動で判断してくれるので便利です！"
        }
      ],
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
      "description": "nullptrの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "nullptr とは？",
          "content": "# 型安全なヌル\\n\\n**nullptr**（ヌルポインタ）は、「どこも指していないポインタ」を表す特別な値です。\\n\\n**身近な例え：**\\n住所録に「住所なし」と書きたいとき、空欄にするより「なし」と明記した方が明確ですよね。`nullptr` は「このポインタはどこも指していません」と明示するための値です。\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\nint* p = nullptr;  // pはどこも指していない\\nif (p == nullptr) {\\n    cout << \"null\" << endl;  // nullと表示される\\n}\\n```\\n\\nC++11からは、古い `NULL` より `nullptr` を使うのが推奨されています。"
        },
        {
          "title": "NULL との違い",
          "content": "# なぜ nullptr の方が良いの？\\n\\n古い `NULL` は実は「0」という数字として扱われるため、問題が起きることがあります。\\n\\n**困る例：**\\n```cpp\\nvoid f(int);    // 整数を受け取る関数\\nvoid f(int*);   // ポインタを受け取る関数\\n\\nf(NULL);    // どっちの f() を呼ぶ？→ あいまい！\\nf(nullptr); // f(int*) が呼ばれる → 明確！\\n```\\n\\n**ポイント：**\\n- `NULL` は「0」という数字に見えることがある\\n- `nullptr` は「ポインタ専用のヌル」なので間違いが起きない\\n\\nモダンC++では、必ず `nullptr` を使いましょう！"
        }
      ],
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
      "description": "constexprの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "constexpr とは？",
          "content": "# コンパイル時計算\\n\\n**constexpr**（コンストエクスプレス）は、「コンパイル時に計算できる」ことを示すキーワードです。\\n\\n**身近な例え：**\\n料理のレシピで「小さじ2杯」と書くか「10ml」と書くかの違いです。どちらも同じ量ですが、「10ml」と最初から計算済みで書いておく方が効率的ですよね。\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\nconstexpr int square(int x) {\\n    return x * x;\\n}\\nconstexpr int val = square(5); // コンパイル時に25と計算済み！\\n```\\n\\nプログラムを実行する前に計算が終わっているので、実行が速くなります。"
        },
        {
          "title": "const との違い",
          "content": "# コンパイル時 vs 実行時\\n\\n`const` と `constexpr` は似ていますが、違いがあります。\\n\\n**比較：**\\n```cpp\\n// const: 実行時に決まってもOK\\nconst int a = getValue();     // 関数を呼んで決まる\\n\\n// constexpr: コンパイル時に決まっていないとダメ\\nconstexpr int b = 10 * 10;    // コンパイル時に100と計算済み\\n```\\n\\n**わかりやすく言うと：**\\n- `const`: 「一度決めたら変えない」（いつ決まるかは問わない）\\n- `constexpr`: 「プログラムを動かす前に決まっている」\\n\\n**メリット：**\\n`constexpr` を使うと、プログラムの実行が速くなり、配列のサイズ指定などにも使えます。"
        }
      ],
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
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
              {
                      "title": "初期化子リストとは",
                      "content": "# {}で初期化しよう\\n\\n波括弧{}で値をまとめて初期化できます。\\n\\n```cpp\\nvector<int> nums = {1, 2, 3};\\narray<int, 3> arr = {10, 20, 30};\\n```"
              },
              {
                      "title": "様々な初期化",
                      "content": "# いろいろな使い方\\n\\n```cpp\\n// 構造体\\nstruct Point { int x, y; };\\nPoint p = {3, 4};\\n\\n// 関数の引数\\nvoid f(vector<int> v);\\nf({1, 2, 3});\\n```"
              }
      ],
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
      "description": "shared_ptrの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "shared_ptr とは？",
          "content": "# 共有所有権のスマートポインタ\\n\\n**shared_ptr**（シェアードポインタ）は、「複数人で共有できる」スマートポインタです。\\n\\n**身近な例え：**\\n図書館の本のようなものです。本（データ）は1冊しかないけど、複数の人が「借りている」状態になれます。最後の1人が返却したときに、本棚に戻されます（メモリが解放される）。\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\nauto p1 = make_shared<int>(42);  // 本を借りる（1人目）\\nauto p2 = p1;                     // 同じ本を借りる（2人目）\\n// p1 を使い終わっても、p2 がまだ使っているので消えない\\n// p2 も使い終わると、自動で解放される\\n```\\n\\n**ポイント：**\\n`unique_ptr` は1人しか持てませんが、`shared_ptr` は複数人で持てます。"
        },
        {
          "title": "make_shared",
          "content": "# make_shared で効率的に作成\\n\\n`shared_ptr` を作るときは、`make_shared` 関数を使うのがオススメです。\\n\\n**身近な例え：**\\n「部品を買ってきて自分で組み立てる」より「完成品を買う」方が楽で効率的ですよね。\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\n// オススメの書き方\\nauto p = make_shared<int>(100);  // 100という値を持つ共有ポインタ\\n\\n// 非推奨の書き方（動くけど効率が悪い）\\nshared_ptr<int> p(new int(100));\\n```\\n\\n**なぜ make_shared が良いの？**\\n- メモリの確保が1回で済む（効率的）\\n- 例外安全（エラーが起きてもメモリリークしない）\\n- コードがスッキリする\\n\\n`make_shared<型>(初期値)` の形で覚えましょう！"
        }
      ],
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
      "description": "データをレジスタ間で移動する命令を学びます",
      "tutorialSlides": [
        {
          "title": "move とは？",
          "content": "# 所有権の移動\\n\\n**std::move**（ムーブ）は、データの「所有権」を別の変数に移す機能です。\\n\\n**身近な例え：**\\n引っ越しのようなものです。家具を「コピー」して新しい家に置くのではなく、元の家から「そのまま運び出す」ので速くて効率的。でも元の家は空っぽになります。\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\nstring s1 = \"Hello\";       // s1 に \"Hello\" が入っている\\nstring s2 = move(s1);      // s1 の中身を s2 に移動！\\n// s1 は空っぽになる\\n// s2 に \"Hello\" が入っている\\ncout << s2 << endl;        // \"Hello\" と表示される\\n```\\n\\n**ポイント：**\\n`move` した後の変数（s1）は使わないようにしましょう。"
        },
        {
          "title": "コピーより効率的",
          "content": "# なぜ move が速いの？\\n\\n大きなデータを扱うとき、`move` はコピーより圧倒的に速いです。\\n\\n**身近な例え：**\\n100冊の本を別の部屋に移したいとき：\\n- **コピー**: 1冊ずつコピー機でコピーして運ぶ（遅い！）\\n- **ムーブ**: 本棚ごと運ぶ（速い！）\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\nvector<int> v1(1000000);  // 100万個の要素を持つベクター\\n\\n// コピー（遅い）: 100万個の要素を全部コピー\\nvector<int> v2 = v1;\\n\\n// ムーブ（速い）: 内部のポインタだけ移動\\nvector<int> v3 = move(v1);\\n// v1 は空になる\\n```\\n\\n**使いどころ：**\\n- 大きなデータを関数に渡すとき\\n- 元のデータをもう使わないとき\\n- 効率を重視するとき"
        }
      ],
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
      "description": "std::optionalの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "optional とは？",
          "content": "# 「値があるかもしれない」を表す型\\n\\n**std::optional**（オプショナル）は、「値があるかもしれないし、ないかもしれない」という状態を安全に表現できる型です。\\n\\n**身近な例え：**\\nプレゼントの箱を想像してください。箱を開けたら「プレゼントが入っている」か「空っぽ」かのどちらかです。`optional` はこの「入っているかもしれない箱」を表します。\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\n// 数字を探す関数（見つかるかもしれないし、見つからないかも）\\noptional<int> find(vector<int>& v, int x) {\\n    for (int n : v) {\\n        if (n == x) return n;     // 見つかったら値を返す\\n    }\\n    return nullopt;               // 見つからなかったら「空」を返す\\n}\\n```\\n\\n**用語解説：**\\n- `nullopt`: 「値がない」ことを表す特別な値"
        },
        {
          "title": "値の取得",
          "content": "# 値を安全に取り出す方法\\n\\n`optional` の中身を取り出す前に、「値があるか」をチェックします。\\n\\n**身近な例え：**\\nプレゼントの箱を開ける前に、「中身が入っているか」確認してから開けるようなものです。\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\noptional<int> result = find(v, 5);\\n\\n// 方法1: has_value() でチェック\\nif (result.has_value()) {\\n    cout << result.value() << endl;  // 中身を取り出す\\n}\\n\\n// 方法2: if文で直接チェック（省略形）\\nif (result) {\\n    cout << *result << endl;  // * で中身を取り出す\\n}\\n```\\n\\n**注意：**\\n値がないのに `value()` を呼ぶとエラーになります。必ずチェックしてから使いましょう！"
        }
      ],
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
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "array とは？",
          "content": "# 固定長の安全な配列\\n\\n**std::array**（アレイ）は、サイズが固定された配列です。普通のC言語の配列より安全で便利な機能がついています。\\n\\n**身近な例え：**\\n「3つ入りの卵パック」のようなものです。最初から3個入りと決まっていて、後から変えられません。でも「何個入りか」を聞くことができます。\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\narray<int, 5> arr = {1, 2, 3, 4, 5};\\n//     ↑型  ↑サイズ（5個入り）\\n\\ncout << arr.size() << endl;  // 5（サイズを取得できる！）\\ncout << arr[0] << endl;      // 1（最初の要素）\\n```\\n\\n**ポイント：**\\n`<型, サイズ>` の形式で、サイズは最初に決めます。"
        },
        {
          "title": "C配列との違い",
          "content": "# std::array は安全\\n\\n普通の配列（C配列）と比べて、`std::array` は安全な機能がついています。\\n\\n**身近な例え：**\\n普通の配列は「存在しない場所」にアクセスしてもエラーを出してくれません（危険！）。`std::array` は「そこにはないよ！」と教えてくれます。\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\narray<int, 3> arr = {10, 20, 30};\\n\\n// サイズを聞ける（C配列にはない機能！）\\ncout << arr.size() << endl;  // 3\\n\\n// 安全なアクセス（at を使う）\\narr.at(1);   // OK: 20\\narr.at(10);  // エラー！「範囲外」と教えてくれる\\n\\n// 普通のアクセス（危険）\\narr[10];     // 動くけど何が起こるかわからない...\\n```\\n\\n**オススメ：**\\n- 安全性を重視するなら `at()` を使う\\n- 速度を重視するなら `[]` を使う"
        }
      ],
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
      "description": "名前のない簡潔な関数を作る方法を学びます",
      "tutorialSlides": [
        {
          "title": "キャプチャとは？",
          "content": "# ラムダ式で外の変数を使う方法\\n\\n**キャプチャ**とは、ラムダ式（その場で作る小さな関数）の中で「外にある変数」を使えるようにする機能です。\\n\\n**身近な例え：**\\nお弁当箱に「おかず」を詰めて持っていくイメージです。外にあるもの（変数）をラムダ式の中に「持ち込む」ことができます。\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\nint x = 10;  // 外にある変数\\n\\n// [x] で x をラムダの中に持ち込む（コピー）\\nauto f = [x]() { return x * 2; };  \\ncout << f() << endl;  // 20\\n\\n// [&x] で x を参照で持ち込む（元の変数を直接操作）\\nauto g = [&x]() { x++; };  \\ng();  // x が 11 になる\\n```\\n\\n**ポイント：**\\n`[]` の中に変数名を書くと、その変数を使えるようになります。"
        },
        {
          "title": "キャプチャの種類",
          "content": "# いろいろなキャプチャ方法\\n\\nキャプチャにはいくつかの書き方があります。\\n\\n**身近な例え：**\\n- コピーキャプチャ: 写真を撮って持っていく（元は変わらない）\\n- 参照キャプチャ: リモコンを持っていく（元を直接操作できる）\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\nint x = 1, y = 2, z = 3;\\n\\n[x]      // x だけコピーで持ち込む\\n[&x]     // x だけ参照で持ち込む\\n[=]      // 全部コピーで持ち込む\\n[&]      // 全部参照で持ち込む\\n[=, &x]  // 基本コピー、x だけ参照\\n[&, x]   // 基本参照、x だけコピー\\n```\\n\\n**使い分け：**\\n- 値を読むだけ → コピー `[x]`\\n- 値を変更したい → 参照 `[&x]`\\n- たくさんの変数を使う → `[=]` か `[&]`"
        }
      ],
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

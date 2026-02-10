export const cpp2Data = {
  "language": "cpp",
  "lessonId": "cpp-2",
  "lessonTitle": "C++ II - クラスとオブジェクト指向",
  "lessonDescription": "C++の真髄「クラス」を使ったオブジェクト指向プログラミングを学びます。継承、テンプレート、スマートポインタなど現代C++の機能を身につけましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "tutorialSlides": [
    { "title": "クラスとは？", "content": "# データと機能の設計図\\n\\n**クラス**は、データ（変数）と機能（関数）をひとまとめにした設計図です。\\n\\n```cpp\\nclass Dog {\\npublic:\\n    std::string name;\\n    void bark() { std::cout << \\\"ワン！\\\" << std::endl; }\\n};\\n\\nDog d;\\nd.name = \\\"ポチ\\\";\\nd.bark();\\n```" },
    { "title": "コンストラクタ", "content": "# オブジェクト作成時の初期化\\n\\n```cpp\\nclass Box {\\npublic:\\n    int size;\\n    Box(int s) {  // コンストラクタ\\n        size = s;\\n    }\\n};\\n\\nBox b(10);  // 作成と同時にsize=10で初期化\\n```\\n\\nクラス名と同じ名前の関数がコンストラクタです。" },
    { "title": "継承", "content": "# クラスを拡張する\\n\\n```cpp\\nclass Animal {\\npublic:\\n    void eat() { std::cout << \\\"食べる\\\" << std::endl; }\\n};\\n\\nclass Dog : public Animal {  // 継承\\npublic:\\n    void bark() { std::cout << \\\"ワン！\\\" << std::endl; }\\n};\\n```\\n\\n子クラスは親クラスの機能を引き継ぎます。" },
    { "title": "テンプレート", "content": "# 型を後から決める\\n\\n```cpp\\ntemplate<typename T>\\nT maximum(T a, T b) {\\n    return (a > b) ? a : b;\\n}\\n\\nmaximum<int>(3, 7);      // 7\\nmaximum<double>(2.5, 1.2); // 2.5\\n```\\n\\n同じコードで異なる型に対応できます！" }
  ],
  "exercises": [
    {
      "title": "クラスを作ろう",
      "description": "クラスを作ろうの仕組みを理解します",
      "tutorialSlides": [
        {
          "title": "クラスとは？",
          "content": "# データと機能の設計図\\n\\n**クラス**は、データ（変数）と機能（関数）をひとまとめにした「設計図」です。\\n\\n**身近な例え：**\\n「犬」の設計図を考えてみましょう。\\n- データ: 名前、年齢、毛の色\\n- 機能: 吠える、走る、食べる\\n\\nこの設計図（クラス）から、「ポチ」「タロウ」「ハチ」という実際の犬（オブジェクト）を作れます。\\n\\n設計図は1つでも、そこから何匹でも犬を作れるのがポイントです！"
        },
        {
          "title": "クラスの定義",
          "content": "# class キーワード\\n\\n`class`（クラス）を使ってクラスを定義します。\\n`public:`（パブリック）の下に、外から使える部分を書きます。\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\nclass Dog {       // Dogという設計図を作る\\npublic:           // ここから下は外から使える\\n    std::string name;  // 名前を入れる場所\\n};\\n\\n// 設計図から実際の犬を作る\\nDog d;            // dという犬を作成\\nd.name = \"Pochi\"; // 名前をつける\\n```\\n\\n**用語解説：**\\n- `public`: 公開という意味。外からアクセスできる\\n- `.`（ドット）: オブジェクトの中身にアクセスする記号"
        }
      ],
      "correctCode": "#include <iostream>\\n#include <string>\\n// Catクラスを定義\\nclass Cat {\\npublic:\\n    // nameをstring型で定義\\n    std::string name;\\n};\\nint main() {\\n    // cにCatオブジェクトを作成\\n    Cat c;\\n    c.name = \"タマ\";\\n    std::cout << c.name << std::endl;\\n    return 0;\\n}", "holeyCode": "#___ <___>\n#___ <___>\n// Catクラスを定義\nclass ___ {\n// ラベルを定義\n___:\n    // nameをstring型で定義\n    ___::___ ___;\n};\n// ブロックを開始\nint ___() {\n    // cにCatオブジェクトを作成\n    ___ ___;\n    // 値を代入\n    ___.___= \\\"___\\\";\n    // 文を実行\n    ___::___ << ___.___<< ___::___;\n    // 0を返す\n    return ___;\n}",
      "correctLines": [
          "#include <iostream>",
          "#include <string>",
          "// Catクラスを定義",
          "class Cat {",
          "// ラベルを定義",
          "public:",
          "    // nameをstring型で定義",
          "    std::string name;",
          "};",
          "// ブロックを開始",
          "int main() {",
          "    // cにCatオブジェクトを作成",
          "    Cat c;",
          "    // 値を代入",
          "    c.name = \\\"タマ\\\";",
          "    // 文を実行",
          "    std::cout << c.name << std::endl;",
          "    // 値を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "",
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "keywords": [
            "class"
          ],
          "others": ["string", "Cat", "public", "name", "};", "main", "c", "endl", "0", "}", "タマ", "#include <___>", "#include <___>", "};", "#include <iostream>", "#include <string>", "std", "cout"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "タマ\\n"
          }
        ]
      },
    {
      "title": "コンストラクタを使おう",
      "description": "コンストラクタについて学びます",
      "tutorialSlides": [
        {
          "title": "コンストラクタとは？",
          "content": "# 初期化の儀式\\n\\n**コンストラクタ**は、オブジェクトを作るときに自動的に呼ばれる特別な関数です。\\n\\n**身近な例え：**\\n新しいスマホを買ったとき、最初に「言語設定」「名前登録」などの初期設定をしますよね。コンストラクタは、オブジェクトが生まれたときに自動で行われる「初期設定」のようなものです。\\n\\nオブジェクトの初期値（さいしょの値）を設定するのに使います。"
        },
        {
          "title": "コンストラクタの書き方",
          "content": "# クラス名と同じ名前\\n\\nコンストラクタには特別なルールがあります：\\n1. **クラス名と同じ名前**にする\\n2. **戻り値の型を書かない**（voidも書かない）\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\nclass Box {\\npublic:\\n    int size;        // サイズを入れる場所\\n    Box(int s) {     // コンストラクタ（クラス名と同じ）\\n        size = s;    // 受け取った値で初期化\\n    }\\n};\\n\\nBox b(10);  // Boxを作ると同時にsize=10で初期化！\\n```\\n\\n**ポイント：**\\n`Box b(10)` と書くと、コンストラクタが自動で呼ばれ、size に 10 が入ります。"
        }
      ],
      "correctCode": "#include <iostream>\\nclass Counter {\\npublic:\\n    int count;\\n    // Counterコンストラクタを定義（引数: int c）\\n    Counter(int c) {\\n        // countにcを代入\\n        count = c;\\n    }\\n};\\nint main() {\\n    // cntにCounter(5)を作成\\n    Counter cnt(5);\\n    std::cout << cnt.count << std::endl;\\n    return 0;\\n}", "holeyCode": "#___ <___>\nclass ___ {\n// ラベルを定義\n___:\n    // 変数を宣言\n    int ___;\n    // Counterコンストラクタを定義（引数: int c）\n    ___(int ___) {\n        // countにcを代入\n        ___ = ___;\n    }\n};\n// ブロックを開始\nint ___() {\n    // cntにCounter(5)を作成\n    ___ ___(___);\n    // 文を実行\n    ___::___ << ___.___ << ___::___;\n    // 0を返す\n    return ___;\n}",
      "correctLines": [
          "#include <iostream>",
          "class Counter {",
          "// ラベルを定義",
          "public:",
          "    // 変数を宣言",
          "    int count;",
          "    // Counterコンストラクタを定義（引数: int c）",
          "    Counter(int c) {",
          "        // countにcを代入",
          "        count = c;",
          "    }",
          "};",
          "// ブロックを開始",
          "int main() {",
          "    // cntにCounter(5)を作成",
          "    Counter cnt(5);",
          "    // 文を実行",
          "    std::cout << cnt.count << std::endl;",
          "    // 値を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "",
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "functions": [
            "Counter"
          ],
          "others": ["count", "5", "public", "c", "}", "};", "main", "endl", "0", "#include <iostream>", "#include <iostream>", "}", "};", "cnt", "std", "cout"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "5\\n"
          }
        ]
      },
    {
      "title": "メンバ関数を作ろう",
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "メンバ関数とは？",
          "content": "# クラスに属する関数\\n\\n**メンバ関数** は、クラスの中で定義される関数です。そのクラスのデータを使った処理ができます。"
        },
        {
          "title": "メンバ関数の定義",
          "content": "# クラスの中に関数を書く\\n\\nクラス定義の中に関数を書くと、そのクラスのメンバ関数になります。\\n\\n**コード例：**\\n```cpp\\nclass Circle {\\npublic:\\n    int radius;\\n    int area() {\\n        return radius * radius * 3;\\n    }\\n};\\n```"
        }
      ],
      "correctCode": "#include <iostream>\\nclass Rect {\\npublic:\\n    int w;\\n    int h;\\n    int area() {\\n        // 幅と高さを掛けた面積を返す\\n        return w * h;\\n    }\\n};\\nint main() {\\n    // rにRectオブジェクトを作成\\n    Rect r;\\n    r.w = 3;\\n    r.h = 4;\\n    // 面積を計算して出力\\n    std::cout << r.area() << std::endl;\\n    return 0;\\n}", "holeyCode": "#___ <___>\nclass ___ {\n// ラベルを定義\n___:\n    // 変数を宣言\n    int ___;\n    // 変数を宣言\n    int ___;\n    // ブロックを開始\n    int ___() {\n        // 幅と高さを掛けた面積を返す\n        return ___ * ___;\n    }\n};\n// ブロックを開始\nint ___() {\n    // rにRectオブジェクトを作成\n    ___ ___;\n    // 値を代入\n    ___.___ = ___;\n    // 値を代入\n    ___.___ = ___;\n    // 面積を計算して出力\n    ___::___ << ___.___() << ___::___;\n    // 0を返す\n    return ___;\n}",
      "correctLines": [
          "#include <iostream>",
          "class Rect {",
          "// ラベルを定義",
          "public:",
          "    // 変数を宣言",
          "    int w;",
          "    // 変数を宣言",
          "    int h;",
          "    // ブロックを開始",
          "    int area() {",
          "        // 幅と高さを掛けた面積を返す",
          "        return w * h;",
          "    }",
          "};",
          "// ブロックを開始",
          "int main() {",
          "    // rにRectオブジェクトを作成",
          "    Rect r;",
          "    // 値を代入",
          "    r.w = 3;",
          "    // 値を代入",
          "    r.h = 4;",
          "    // 面積を計算して出力",
          "    std::cout << r.area() << std::endl;",
          "    // 値を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "",
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "operators": [
            "*"
          ],
          "others": ["Rect", "area", "public", "w", "h", "}", "};", "main", "r", "3", "4", "endl", "0", "#include <iostream>", "#include <iostream>", "}", "};", "std", "cout"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "12\\n"
          }
        ]
      },
    {
      "title": "参照を使おう",
      "description": "参照について学びます",
      "tutorialSlides": [
        {
          "title": "参照とは？",
          "content": "# 変数の別名\\n\\n**参照** は、既存の変数に別の名前をつける機能です。参照を通じて元の変数を操作できます。"
        },
        {
          "title": "参照の使い方",
          "content": "# & で参照を作る\\n\\n型名の後に `&` をつけると参照型になります。参照は宣言時に必ず初期化が必要です。\\n\\n**コード例：**\\n```cpp\\nint x = 10;\\nint& ref = x;  // ref は x の別名\\nref = 20;      // x も 20 になる\\n```"
        }
      ],
      "correctCode": "#include <iostream>\\nint main() {\\n    int num = 5;\\n    // & で参照を作る\\n    int& ref = num;\\n    // ref に 100 を代入\\n    ref = 100;\\n    std::cout << num << std::endl;\\n    return 0;\\n}", "holeyCode": "#___ <___>\nint ___() {\n    // 変数を宣言\n    int ___ = ___;\n    // & で参照を作る\n    int& ___ = ___;\n    // ref に 100 を代入\n    ___ = ___;\n    // 文を実行\n    ___::___ << ___ << ___::___;\n    // 0を返す\n    return ___;\n}",
      "correctLines": [
          "#include <iostream>",
          "int main() {",
          "    // 変数を宣言",
          "    int num = 5;",
          "    // & で参照を作る",
          "    int& ref = num;",
          "    // ref に 100 を代入",
          "    ref = 100;",
          "    // 文を実行",
          "    std::cout << num << std::endl;",
          "    // 値を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "",
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "operators": [
            "&"
          ],
          "others": ["100", "main", "5", "num", "0", "}", "#include <iostream>", "#include <iostream>", "ref", "std", "cout", "endl"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "100\\n"
          }
        ]
      },
    {
      "title": "継承を学ぼう",
      "description": "継承について学びます",
      "tutorialSlides": [
        {
          "title": "継承とは？",
          "content": "# クラスを拡張する\\n\\n**継承** を使うと、既存のクラス（親クラス）の機能を引き継いだ新しいクラス（子クラス）を作れます。\\n\\n**身近な例え：**\\n「動物」という親クラスがあるとします。\\n- 動物は「食べる」「寝る」ができる\\n\\n「犬」は動物の子クラスです。\\n- 犬は動物なので「食べる」「寝る」ができる（親から継承）\\n- さらに「吠える」という独自の機能を追加できる\\n\\n一から作り直さなくても、親の機能を受け継げるので、コードの再利用に便利です！"
        },
        {
          "title": "継承の書き方",
          "content": "# : public 親クラス\\n\\n子クラス名の後に `: public 親クラス名` と書きます。\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\n// 親クラス（動物）\\nclass Animal {\\npublic:\\n    void eat() { std::cout << \"eating\" << std::endl; }\\n};\\n\\n// 子クラス（犬）- Animalを継承\\nclass Dog : public Animal {\\n    // 何も書かなくても eat() が使える！\\n};\\n\\nDog d;\\nd.eat();  // \"eating\" と表示される（親から継承した機能）\\n```\\n\\n**ポイント：**\\n子クラスは、親クラスの `public` な機能を自動的に使えるようになります。"
        }
      ],
      "correctCode": "#include <iostream>\\nclass Vehicle {\\npublic:\\n    void move() {\\n        std::cout << \"移動中\" << std::endl;\\n    }\\n};\\n// CarクラスをVehicleから継承\\nclass Car : public Vehicle {\\n};\\nint main() {\\n    Car c;\\n    // 移動メソッドを呼び出す\\n    c.move();\\n    return 0;\\n}", "holeyCode": "#___ <___>\nclass ___ {\n// ラベルを定義\n___:\n    // ブロックを開始\n    void ___() {\n        // 文を実行\n        ___::___ << \\\"___\\\" << ___::___;\n    }\n};\n// CarクラスをVehicleから継承\nclass ___ : public ___ {\n};\n// ブロックを開始\nint ___() {\n    // 文を実行\n    ___ ___;\n    // 移動メソッドを呼び出す\n    ___.___();\n    // 0を返す\n    return ___;\n}",
      "correctLines": [
          "#include <iostream>",
          "class Vehicle {",
          "// ラベルを定義",
          "public:",
          "    // ブロックを開始",
          "    void move() {",
          "        // 文を実行",
          "        std::cout << \\\"移動中\\\" << std::endl;",
          "    }",
          "};",
          "// CarクラスをVehicleから継承",
          "class Car : public Vehicle {",
          "};",
          "// ブロックを開始",
          "int main() {",
          "    // 文を実行",
          "    Car c;",
          "    // 移動メソッドを呼び出す",
          "    c.move();",
          "    // 値を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "",
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "keywords": [
            "public"
          ],
          "others": ["move", "Vehicle", "\"moving\"", "}", "};", "Car", "main", "c", "0", "\"移動中\"", "#include <iostream>", "#include <iostream>", "}", "};", "std", "cout", "移動中", "endl"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "移動中\\n"
          }
        ]
      },
    {
      "title": "仮想関数でオーバーライド",
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "オーバーライドとは？",
          "content": "# 親の機能を上書き\\n\\n**オーバーライド** は、親クラスで定義された関数を子クラスで書き換える機能です。`virtual` キーワードを使います。"
        },
        {
          "title": "virtual と override",
          "content": "# 仮想関数の仕組み\\n\\n親クラスで `virtual` をつけた関数は、子クラスで `override` して上書きできます。\\n\\n**コード例：**\\n```cpp\\nclass Animal {\\npublic:\\n    virtual void speak() { std::cout << \"...\" << std::endl; }\\n};\\nclass Cat : public Animal {\\npublic:\\n    void speak() override { std::cout << \"meow\" << std::endl; }\\n};\\n```"
        }
      ],
      "correctCode": "#include <iostream>\\nclass Shape {\\npublic:\\n    // virtual draw()を定義\\n    virtual void draw() {\\n        std::cout << \"shape\" << std::endl;\\n    }\\n};\\nclass Circle : public Shape {\\npublic:\\n    // overrideでdraw()を上書き\\n    void draw() override {\\n        std::cout << \"circle\" << std::endl;\\n    }\\n};\\nint main() {\\n    Circle c;\\n    // 描画メソッドを呼び出す\\n    c.draw();\\n    return 0;\\n}", "holeyCode": "#___ <___>\nclass ___ {\n// ラベルを定義\n___:\n    // virtual draw()を定義\n    virtual void ___() {\n        // 文を実行\n        ___::___ << \\\"___\\\" << ___::___;\n    }\n};\n// Circleクラスを定義\nclass ___ : public ___ {\n// ラベルを定義\n___:\n    // overrideでdraw()を上書き\n    void ___() override {\n        // 文を実行\n        ___::___ << \\\"___\\\" << ___::___;\n    }\n};\n// ブロックを開始\nint ___() {\n    // 文を実行\n    ___ ___;\n    // 描画メソッドを呼び出す\n    ___.___();\n    // 0を返す\n    return ___;\n}",
      "correctLines": [
          "#include <iostream>",
          "class Shape {",
          "// ラベルを定義",
          "public:",
          "    // virtual draw()を定義",
          "    virtual void draw() {",
          "        // 文を実行",
          "        std::cout << \\\"shape\\\" << std::endl;",
          "    }",
          "};",
          "// クラスを定義",
          "class Circle : public Shape {",
          "// ラベルを定義",
          "public:",
          "    // overrideでdraw()を上書き",
          "    void draw() override {",
          "        // 文を実行",
          "        std::cout << \\\"circle\\\" << std::endl;",
          "    }",
          "};",
          "// ブロックを開始",
          "int main() {",
          "    // 文を実行",
          "    Circle c;",
          "    // 描画メソッドを呼び出す",
          "    c.draw();",
          "    // 値を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "",
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "keywords": [
            "virtual"
          ],
          "others": ["override", "draw", "Shape", "public", "\"shape\"", "}", "};", "Circle", "\"circle\"", "main", "c", "0", "#include <iostream>", "#include <iostream>", "}", "};", "std", "cout", "shape", "endl", "circle"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "circle\\n"
          }
        ]
      },
    {
      "title": "テンプレートを使おう",
      "description": "テンプレートについて学びます",
      "tutorialSlides": [
        {
          "title": "テンプレートとは？",
          "content": "# 汎用的なコード\\n\\n**テンプレート**を使うと、どんな型でも使える汎用的な関数やクラスが作れます。\\n\\n**身近な例え：**\\n「2つの数を足す」関数を作りたいとき、整数用、小数用...と別々に作るのは大変ですよね。\\n\\nテンプレートを使えば、**型を後から決められる**「万能な設計図」が作れます。\\n\\n1つのコードで、int でも double でも使える！これがテンプレートの力です。"
        },
        {
          "title": "関数テンプレート",
          "content": "# template<typename T>\\n\\n`template<typename T>`（テンプレート・タイプネーム・ティー）と書くと、`T` が「後から決まる型」を表します。\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\n// T はどんな型にもなれる\\ntemplate<typename T>\\nT add(T a, T b) {\\n    return a + b;\\n}\\n\\n// 使うとき、型が自動で決まる\\nadd(1, 2);       // T = int として動く\\nadd(1.5, 2.5);   // T = double として動く\\n```\\n\\n**ポイント：**\\n- `T` は「型のための変数」のようなもの\\n- 使われるときに、自動で適切な型に置き換わります\\n- 同じコードで、いろいろな型に対応できます！"
        }
      ],
      "correctCode": "#include <iostream>\\n// 型パラメータTを定義\\ntemplate<typename T>\\nT bigger(T a, T b) {\\n    if (a > b) return a;\\n    return b;\\n}\\nint main() {\\n    // bigger関数を呼び出し（第1引数に3, 第2引数に7）\\n    std::cout << bigger(3, 7) << std::endl;\\n    return 0;\\n}", "holeyCode": "#___ <___>\n// 型パラメータTを定義\ntemplate<typename ___>\n// ブロックを開始\n___ ___(___  ___, ___ ___) {\n    // 文を実行\n    if (___ > ___) return ___;\n    // bを返す\n    return ___;\n}\n// ブロックを開始\nint ___() {\n    // bigger関数を呼び出し（第1引数に3, 第2引数に7）\n    ___::___ << ___(___, ___) << ___::___;\n    // bを返す\n    return ___;\n}",
      "correctLines": [
          "#include <iostream>",
          "// 型パラメータTを定義",
          "template<typename T>",
          "// ブロックを開始",
          "T bigger(T a, T b) {",
          "    // 文を実行",
          "    if (a > b) return a;",
          "    // 値を返す",
          "    return b;",
          "}",
          "// ブロックを開始",
          "int main() {",
          "    // bigger関数を呼び出し（第1引数に3, 第2引数に7）",
          "    std::cout << bigger(3, 7) << std::endl;",
          "    // 値を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "variables": [
            "T"
          ],
          "others": ["bigger", "b", "a", "}", "main", "3", "7", "0", "#include <iostream>", "#include <iostream>", "}", "std", "cout", "endl"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "7\\n"
          }
        ]
      },
    {
      "title": "ラムダ式を使おう",
      "description": "名前のない簡潔な関数を作る方法を学びます",
      "tutorialSlides": [
              {
                      "title": "ラムダ式とは",
                      "content": "# 無名関数を作ろう\\n\\nラムダ式は名前のない関数です。\\n\\n```cpp\\nauto add = [](int a, int b) {\\n    return a + b;\\n};\\nint result = add(3, 5);  // 8\\n```"
              },
              {
                      "title": "ラムダ式の書き方",
                      "content": "# [キャプチャ](引数) { 処理 }\\n\\n```cpp\\n[](int x) { return x * 2; }\\n```\\n\\n- **[]** キャプチャ（外の変数を使う）\\n- **(引数)** 受け取る値\\n- **{ }** 実行する処理"
              }
      ],
      "correctCode": "#include <iostream>\\nint main() {\\n    // { でラムダ本体を開始\\n    auto square = [](int x) {\\n        return x * x;\\n    };\\n    // square(4) でラムダを呼び出し\\n    std::cout << square(4) << std::endl;\\n    return 0;\\n}", "holeyCode": "#___ <___>\nint ___() {\n    // { でラムダ本体を開始\n    auto ___ = [](int ___) {\n        // x * xを返す\n        return ___ * ___;\n    };\n    // square(4) でラムダを呼び出し\n    ___::___ << ___(___) << ___::___;\n    // 0を返す\n    return ___;\n}",
      "correctLines": [
          "#include <iostream>",
          "int main() {",
          "    // { でラムダ本体を開始",
          "    auto square = [](int x) {",
          "        // 値を返す",
          "        return x * x;",
          "    };",
          "    // square(4) でラムダを呼び出し",
          "    std::cout << square(4) << std::endl;",
          "    // 値を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "",
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "operators": [
            "{"
          ],
          "others": ["square", "main", "x", "};", "4", "0", "}", "#include <___>", "#include <___>", "#include <iostream>", "std", "cout", "endl"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "16\\n"
          }
        ]
      },
    {
      "title": "スマートポインタ unique_ptr",
      "description": "スマートポインタについて学びます",
      "tutorialSlides": [
        {
          "title": "スマートポインタとは？",
          "content": "# 安全なメモリ管理\\n\\n**スマートポインタ**は、使い終わったら自動的にメモリを解放してくれる便利なポインタです。\\n\\n**身近な例え：**\\n普通のポインタは「借りた本を自分で返さないといけない」状態です。返し忘れると大変！\\n\\nスマートポインタは「自動返却システム」がついた本のようなもの。使い終わったら勝手に返してくれます。\\n\\n**メモリリーク**（メモリの解放忘れ）を防ぐことができます。"
        },
        {
          "title": "unique_ptr の使い方",
          "content": "# std::make_unique\\n\\n`std::make_unique<型>()` でスマートポインタを作ります。\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\n#include <memory>  // スマートポインタを使う準備\\n\\n// 整数を入れるスマートポインタを作る\\nauto p = std::make_unique<int>(42);\\n\\n// 中身を見る（*をつける）\\nstd::cout << *p << std::endl; // 42\\n\\n// ここでブロックを抜けると、自動でメモリが解放される！\\n```\\n\\n**用語解説：**\\n- `unique_ptr`: 1つのポインタだけが所有する（独占）\\n- **スコープを抜ける**: `{ }` の外に出ること\\n- 自動解放なので、`delete` を書く必要がない！"
        }
      ],
      "correctCode": "#include <iostream>\\n#include <memory>\\nint main() {\\n    // make_unique でスマートポインタを作成\\n    auto ptr = std::make_unique<int>(100);\\n    // *ptr で中身にアクセス\\n    std::cout << *ptr << std::endl;\\n    return 0;\\n}", "holeyCode": "#___ <___>\n#___ <___>\nint ___() {\n    // make_unique でスマートポインタを作成\n    auto ___ = ___::___<int>(___);\n    // *ptr で中身にアクセス\n    ___::___ << *___ << ___::___;\n    // 0を返す\n    return ___;\n}",
      "correctLines": [
          "#include <iostream>",
          "#include <memory>",
          "int main() {",
          "    // make_unique でスマートポインタを作成",
          "    auto ptr = std::make_unique<int>(100);",
          "    // *ptr で中身にアクセス",
          "    std::cout << *ptr << std::endl;",
          "    // 値を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "",
          "",
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "functions": [
            "make_unique"
          ],
          "others": ["*", "main", "100", "endl", "0", "}", "#include <iostream>", "#include <iostream>", "ptr", "std", "cout"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "100\\n"
          }
        ]
      },
    {
      "title": "例外処理 try-catch",
      "description": "プログラムのエラーを適切に処理して、安全に動作させる方法を学びます",
      "tutorialSlides": [
        {
          "title": "例外処理とは？",
          "content": "# エラーに備える\\n\\n**例外処理** を使うと、プログラム実行中のエラーに対処できます。\\n\\n**身近な例え：**\\nサーカスの空中ブランコには、下に「安全ネット」がありますよね。万が一落ちても大丈夫なように。\\n\\n例外処理も同じです。プログラムで「万が一のエラー」が起きても、クラッシュせずに対処できる「安全ネット」を用意します。\\n\\nエラーが起きてもプログラムが止まらず、適切に対応できます！"
        },
        {
          "title": "try-catch の使い方",
          "content": "# throw で例外を投げる\\n\\n**基本の形：**\\n- `try { }`: エラーが起きるかもしれない処理\\n- `throw`: エラーを「投げる」\\n- `catch { }`: 投げられたエラーを「捕まえる」\\n\\n**実際のコードを見てみましょう：**\\n```cpp\\ntry {\\n    // エラーを投げる\\n    throw \"error!\";\\n} catch (const char* e) {\\n    // 投げられたエラーを捕まえて処理\\n    std::cout << e << std::endl;\\n}\\n```\\n=> \"error!\" と表示されます\\n\\n**ポイント：**\\n- `throw` でエラーを投げると、すぐに `catch` に移動します\\n- `catch` でエラーに対処した後、プログラムは続行できます"
        }
      ],
      "correctCode": "#include <iostream>\\nint main() {\\n    try {\\n        // throw 404で例外を投げる\\n        throw 404;\\n    // catch(int e)で例外を捕まえる\\n    } catch (int e) {\\n        std::cout << e << std::endl;\\n    }\\n    return 0;\\n}", "holeyCode": "#___ <___>\nint ___() {\n    // ブロックを開始\n    try ___\n        // throw 404で例外を投げる\n        throw ___;\n    // catch(int e)で例外を捕まえる\n    } catch (int ___) {\n        // 文を実行\n        ___::___ << ___ << ___::___;\n    }\n    // 0を返す\n    return ___;\n}",
      "correctLines": [
          "#include <iostream>",
          "int main() {",
          "    // ブロックを開始",
          "    try {",
          "        // throw 404で例外を投げる",
          "        throw 404;",
          "    // catch(int e)で例外を捕まえる",
          "    } catch (int e) {",
          "        // 文を実行",
          "        std::cout << e << std::endl;",
          "    }",
          "    // 値を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "",
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null
        ],
        "candidates": {
          "keywords": [
            "throw"
          ],
          "others": ["catch", "main", "try", "404", "e", "{", "}", "0", "#include <iostream>", "#include <iostream>", "}", "std", "cout", "endl"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "404\\n"
          }
        ]
      }
  ]
}

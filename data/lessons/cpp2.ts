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
      "correctCode": "#include <iostream>\\n#include <string>\\n// Catクラスを定義\\nclass Cat {\\npublic:\\n    // nameをstring型で定義\\n    std::string name;\\n};\\nint main() {\\n    // cにCatオブジェクトを作成\\n    Cat c;\\n    c.name = \"タマ\";\\n    std::cout << c.name << std::endl;\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\n#___ <___>\\n// Catクラスを定義\\nclass ___ {\\n___:\\n    // nameをstring型で定義\\n    ___::___ ___;\\n};\\nint ___() {\\n    // cにCatオブジェクトを作成\\n    ___ ___;\\n    ___.___= \\\"___\\\";\\n    ___::___ << ___.___<< ___::___;\\n    return ___;\\n}",
      "correctLines": [
          "#include <iostream>",
          "#include <string>",
          "// Catクラスを定義",
          "class Cat {",
          "public:",
          "    // nameをstring型で定義",
          "    std::string name;",
          "};",
          "int main() {",
          "    // cにCatオブジェクトを作成",
          "    Cat c;",
          "    c.name = \"タマ\";",
          "    std::cout << c.name << std::endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          "新しいクラス（Cat）を定義します。",
          "public: で公開部分を示します。",
          null,
          "メンバ変数を定義します。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "Cat型のオブジェクトを作ります。",
          "メンバにアクセスします。",
          "ここを正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
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
      "correctCode": "#include <iostream>\\nclass Counter {\\npublic:\\n    int count;\\n    // Counterコンストラクタを定義（引数: int c）\\n    Counter(int c) {\\n        // countにcを代入\\n        count = c;\\n    }\\n};\\nint main() {\\n    // cntにCounter(5)を作成\\n    Counter cnt(5);\\n    std::cout << cnt.count << std::endl;\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\nclass ___ {\\n___:\\n    int ___;\\n    // Counterコンストラクタを定義（引数: int c）\\n    ___(int ___) {\\n        // countにcを代入\\n        ___ = ___;\\n    }\\n};\\nint ___() {\\n    // cntにCounter(5)を作成\\n    ___ ___(___);\\n    ___::___ << ___.___ << ___::___;\\n    return ___;\\n}",
      "correctLines": [
          "#include <iostream>",
          "class Counter {",
          "public:",
          "    int count;",
          "    // Counterコンストラクタを定義（引数: int c）",
          "    Counter(int c) {",
          "        // countにcを代入",
          "        count = c;",
          "    }",
          "};",
          "int main() {",
          "    // cntにCounter(5)を作成",
          "    Counter cnt(5);",
          "    std::cout << cnt.count << std::endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "この行を正しく入力してください。",
          "新しいクラス（Counter）を定義します。",
          "ここを正しく入力してください。",
          "メンバ変数です。",
          null,
          "コンストラクタはクラス名と同じ Counter です。",
          null,
          "引数で受け取った値を設定します。",
          null,
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "Counter(5) でオブジェクトを作ります。",
          "ここを正しく入力してください。",
          "プログラムの正常終了を示す値0を返す。",
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
      "correctCode": "#include <iostream>\\nclass Rect {\\npublic:\\n    int w;\\n    int h;\\n    int area() {\\n        // 幅と高さを掛けた面積を返す\\n        return w * h;\\n    }\\n};\\nint main() {\\n    // rにRectオブジェクトを作成\\n    Rect r;\\n    r.w = 3;\\n    r.h = 4;\\n    // 面積を計算して出力\\n    std::cout << r.area() << std::endl;\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\nclass ___ {\\n___:\\n    int ___;\\n    int ___;\\n    int ___() {\\n        // 幅と高さを掛けた面積を返す\\n        return ___ * ___;\\n    }\\n};\\nint ___() {\\n    // rにRectオブジェクトを作成\\n    ___ ___;\\n    ___.___ = ___;\\n    ___.___ = ___;\\n    // 面積を計算して出力\\n    ___::___ << ___.___() << ___::___;\\n    return ___;\\n}",
      "correctLines": [
          "#include <iostream>",
          "class Rect {",
          "public:",
          "    int w;",
          "    int h;",
          "    int area() {",
          "        // 幅と高さを掛けた面積を返す",
          "        return w * h;",
          "    }",
          "};",
          "int main() {",
          "    // rにRectオブジェクトを作成",
          "    Rect r;",
          "    r.w = 3;",
          "    r.h = 4;",
          "    // 面積を計算して出力",
          "    std::cout << r.area() << std::endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "この行を正しく入力してください。",
          "新しいクラス（Rect）を定義します。",
          "ここを正しく入力してください。",
          "幅のメンバ変数です。",
          "高さのメンバ変数です。",
          "int型の値を返す関数（area）を定義します。",
          null,
          "* を使って掛け算します。",
          null,
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "Rectオブジェクトを作ります。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "r.area() でメンバ関数を呼びます。",
          "プログラムの正常終了を示す値0を返す。",
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
      "correctCode": "#include <iostream>\\nint main() {\\n    int num = 5;\\n    // & で参照を作る\\n    int& ref = num;\\n    // ref に 100 を代入\\n    ref = 100;\\n    std::cout << num << std::endl;\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\nint ___() {\\n    int ___ = ___;\\n    // & で参照を作る\\n    int& ___ = ___;\\n    // ref に 100 を代入\\n    ___ = ___;\\n    ___::___ << ___ << ___::___;\\n    return ___;\\n}",
      "correctLines": [
          "#include <iostream>",
          "int main() {",
          "    int num = 5;",
          "    // & で参照を作る",
          "    int& ref = num;",
          "    // ref に 100 を代入",
          "    ref = 100;",
          "    std::cout << num << std::endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "この行を正しく入力してください。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "& を使って参照を作ります。",
          null,
          "ref を変えると num も変わります。",
          "num が 100 になっています。",
          "プログラムの正常終了を示す値0を返す。",
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
      "correctCode": "#include <iostream>\\nclass Vehicle {\\npublic:\\n    void move() {\\n        std::cout << \"移動中\" << std::endl;\\n    }\\n};\\n// CarクラスをVehicleから継承\\nclass Car : public Vehicle {\\n};\\nint main() {\\n    Car c;\\n    // 移動メソッドを呼び出す\\n    c.move();\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\nclass ___ {\\n___:\\n    void ___() {\\n        ___::___ << \\\"___\\\" << ___::___;\\n    }\\n};\\n// CarクラスをVehicleから継承\\nclass ___ : public ___ {\\n};\\nint ___() {\\n    ___ ___;\\n    // 移動メソッドを呼び出す\\n    ___.___();\\n    return ___;\\n}",
      "correctLines": [
          "#include <iostream>",
          "class Vehicle {",
          "public:",
          "    void move() {",
          "        std::cout << \"移動中\" << std::endl;",
          "    }",
          "};",
          "// CarクラスをVehicleから継承",
          "class Car : public Vehicle {",
          "};",
          "int main() {",
          "    Car c;",
          "    // 移動メソッドを呼び出す",
          "    c.move();",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "この行を正しく入力してください。",
          "新しいクラス（Vehicle）を定義します。",
          "ここを正しく入力してください。",
          "void型の値を返す関数（move）を定義します。",
          "ここを正しく入力してください。",
          null,
          null,
          null,
          "新しいクラス（Car）をVehicleから継承します。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "Carオブジェクトを作ります。",
          null,
          "Car は move() を使えます。",
          "プログラムの正常終了を示す値0を返す。",
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
      "correctCode": "#include <iostream>\\nclass Shape {\\npublic:\\n    // virtual draw()を定義\\n    virtual void draw() {\\n        std::cout << \"shape\" << std::endl;\\n    }\\n};\\nclass Circle : public Shape {\\npublic:\\n    // overrideでdraw()を上書き\\n    void draw() override {\\n        std::cout << \"circle\" << std::endl;\\n    }\\n};\\nint main() {\\n    Circle c;\\n    // 描画メソッドを呼び出す\\n    c.draw();\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\nclass ___ {\\n___:\\n    // virtual draw()を定義\\n    virtual void ___() {\\n        ___::___ << \\\"___\\\" << ___::___;\\n    }\\n};\\nclass ___ : public ___ {\\n___:\\n    // overrideでdraw()を上書き\\n    void ___() override {\\n        ___::___ << \\\"___\\\" << ___::___;\\n    }\\n};\\nint ___() {\\n    ___ ___;\\n    // 描画メソッドを呼び出す\\n    ___.___();\\n    return ___;\\n}",
      "correctLines": [
          "#include <iostream>",
          "class Shape {",
          "public:",
          "    // virtual draw()を定義",
          "    virtual void draw() {",
          "        std::cout << \"shape\" << std::endl;",
          "    }",
          "};",
          "class Circle : public Shape {",
          "public:",
          "    // overrideでdraw()を上書き",
          "    void draw() override {",
          "        std::cout << \"circle\" << std::endl;",
          "    }",
          "};",
          "int main() {",
          "    Circle c;",
          "    // 描画メソッドを呼び出す",
          "    c.draw();",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "この行を正しく入力してください。",
          "新しいクラス（Shape）を定義します。",
          "ここを正しく入力してください。",
          null,
          "virtual をつけて仮想関数にします。",
          "ここを正しく入力してください。",
          null,
          null,
          "新しいクラス（Circle）を定義します。",
          "ここを正しく入力してください。",
          null,
          "override で親クラスの関数を上書きします。",
          "ここを正しく入力してください。",
          null,
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "Circleオブジェクトを作ります。",
          null,
          "Circle の draw が呼ばれます。",
          "プログラムの正常終了を示す値0を返す。",
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
      "correctCode": "#include <iostream>\\n// 型パラメータTを定義\\ntemplate<typename T>\\nT bigger(T a, T b) {\\n    if (a > b) return a;\\n    return b;\\n}\\nint main() {\\n    // bigger関数を呼び出し（第1引数に3, 第2引数に7）\\n    std::cout << bigger(3, 7) << std::endl;\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\n// 型パラメータTを定義\\ntemplate<typename ___>\\n___ ___(___  ___, ___ ___) {\\n    if (___ > ___) return ___;\\n    return ___;\\n}\\nint ___() {\\n    // bigger関数を呼び出し（第1引数に3, 第2引数に7）\\n    ___::___ << ___(___, ___) << ___::___;\\n    return ___;\\n}",
      "correctLines": [
          "#include <iostream>",
          "// 型パラメータTを定義",
          "template<typename T>",
          "T bigger(T a, T b) {",
          "    if (a > b) return a;",
          "    return b;",
          "}",
          "int main() {",
          "    // bigger関数を呼び出し（第1引数に3, 第2引数に7）",
          "    std::cout << bigger(3, 7) << std::endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "この行を正しく入力してください。",
          null,
          "T を型パラメータとして定義します。",
          "T型の引数を受け取り、T型を返します。",
          "大きい方を返します。",
          "変数の値を呼び出し元に返す（戻り値）。",
          null,
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "int型で呼び出されます。",
          "プログラムの正常終了を示す値0を返す。",
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
      "correctCode": "#include <iostream>\\nint main() {\\n    // { でラムダ本体を開始\\n    auto square = [](int x) {\\n        return x * x;\\n    };\\n    // square(4) でラムダを呼び出し\\n    std::cout << square(4) << std::endl;\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\nint ___() {\\n    // { でラムダ本体を開始\\n    auto ___ = [](int ___) {\\n        return ___ * ___;\\n    };\\n    // square(4) でラムダを呼び出し\\n    ___::___ << ___(___) << ___::___;\\n    return ___;\\n}",
      "correctLines": [
          "#include <iostream>",
          "int main() {",
          "    // { でラムダ本体を開始",
          "    auto square = [](int x) {",
          "        return x * x;",
          "    };",
          "    // square(4) でラムダを呼び出し",
          "    std::cout << square(4) << std::endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "この行を正しく入力してください。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "{ でラムダ式の本体を始めます。",
          "x の2乗を返します。",
          null,
          null,
          "square(4) で 16 が出力されます。",
          "プログラムの正常終了を示す値0を返す。",
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
      "correctCode": "#include <iostream>\\n#include <memory>\\nint main() {\\n    // make_unique でスマートポインタを作成\\n    auto ptr = std::make_unique<int>(100);\\n    // *ptr で中身にアクセス\\n    std::cout << *ptr << std::endl;\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\n#___ <___>\\nint ___() {\\n    // make_unique でスマートポインタを作成\\n    auto ___ = ___::___<int>(___);\\n    // *ptr で中身にアクセス\\n    ___::___ << *___ << ___::___;\\n    return ___;\\n}",
      "correctLines": [
          "#include <iostream>",
          "#include <memory>",
          "int main() {",
          "    // make_unique でスマートポインタを作成",
          "    auto ptr = std::make_unique<int>(100);",
          "    // *ptr で中身にアクセス",
          "    std::cout << *ptr << std::endl;",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "この行を正しく入力してください。",
          "memoryライブラリを読み込み、使用可能にします。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          null,
          "make_unique でスマートポインタを作ります。",
          null,
          "*ptr で中身にアクセスします。",
          "プログラムの正常終了を示す値0を返す。",
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
      "correctCode": "#include <iostream>\\nint main() {\\n    try {\\n        // throw 404で例外を投げる\\n        throw 404;\\n    // catch(int e)で例外を捕まえる\\n    } catch (int e) {\\n        std::cout << e << std::endl;\\n    }\\n    return 0;\\n}",
      "holeyCode": "#___ <___>\\nint ___() {\\n    try ___\\n        // throw 404で例外を投げる\\n        throw ___;\\n    // catch(int e)で例外を捕まえる\\n    } catch (int ___) {\\n        ___::___ << ___ << ___::___;\\n    }\\n    return ___;\\n}",
      "correctLines": [
          "#include <iostream>",
          "int main() {",
          "    try {",
          "        // throw 404で例外を投げる",
          "        throw 404;",
          "    // catch(int e)で例外を捕まえる",
          "    } catch (int e) {",
          "        std::cout << e << std::endl;",
          "    }",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          "この行を正しく入力してください。",
          "プログラムの実行開始地点（エントリーポイント）となる関数を定義します。",
          "例外が発生する可能性のあるコードブロックを開始します。",
          null,
          "throw で例外を投げます。",
          null,
          "エラー（例外）が発生した場合の処理を記述します。",
          "捕まえた値を表示します。",
          null,
          "プログラムの正常終了を示す値0を返す。",
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

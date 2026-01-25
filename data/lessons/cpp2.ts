export const cpp2Data = {
  "language": "cpp",
  "lessonId": "cpp-2",
  "lessonTitle": "C++ II - クラスとオブジェクト指向",
  "lessonDescription": "C++の真髄「クラス」を使ったオブジェクト指向プログラミングを学びます。継承、テンプレート、スマートポインタなど現代C++の機能を身につけましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "exercises": [
    {
      "title": "クラスを作ろう",
      "description": "データと機能をまとめた「クラス」を定義してみましょう。",
      "difficulty": "medium",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "クラスとは？",
          "image": "/illustrations/3d_advanced/class_blueprint.png",
          "content": "# データと機能の設計図（せっけいず）\n\n**クラス**は、データ（変数）と機能（関数）をひとまとめにした「設計図」です。\n\n**身近な例え：**\n「犬」の設計図を考えてみましょう。\n- データ: 名前、年齢、毛の色\n- 機能: 吠（ほ）える、走る、食べる\n\nこの設計図（クラス）から、「ポチ」「タロウ」「ハチ」という実際の犬（オブジェクト）を作れます。\n\n設計図は1つでも、そこから何匹でも犬を作れるのがポイントです！"
        },
        {
          "title": "クラスの定義",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# class キーワード\n\n`class`（クラス）を使ってクラスを定義（ていぎ）します。\n`public:`（パブリック）の下に、外から使える部分を書きます。\n\n**実際のコードを見てみましょう：**\n```cpp\nclass Dog {       // Dogという設計図を作る\npublic:           // ここから下は外から使える\n    std::string name;  // 名前を入れる場所\n};\n\n// 設計図から実際の犬を作る\nDog d;            // dという犬を作成\nd.name = \"Pochi\"; // 名前をつける\n```\n\n**用語解説：**\n- `public`: 公開（こうかい）という意味。外からアクセスできる\n- `.`（ドット）: オブジェクトの中身にアクセスする記号"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <string>\nclass Cat {\npublic:\n    std::string name;\n};\nint main() {\n    Cat c;\n    c.name = \"Tama\";\n    std::cout << c.name << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\n#include <string>\n// class でクラスを定義\n___ Cat {\npublic:\n    // string でメンバ変数を定義\n    std::___ name;\n};\nint main() {\n    // Cat でオブジェクトを作成\n    ___ c;\n    c.name = \"Tama\";\n    std::cout << c.name << std::endl;\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "#include <string>",
        "// class でクラスを定義",
        "class Cat {",
        "public:",
        "    // string でメンバ変数を定義",
        "    std::string name;",
        "};",
        "int main() {",
        "    // Cat でオブジェクトを作成",
        "    Cat c;",
        "    c.name = \"Tama\";",
        "    std::cout << c.name << std::endl;",
        "    return 0;",
        "}"
      ],
      "lineHints": [null, null, null, "新しいクラス（Cat）を定義します。", "public: で公開部分を示します。", null, "メンバ変数を定義します。", null, null, null, "Cat型のオブジェクトを作ります。", "メンバにアクセスします。", null, null, null],
      "candidates": {
        "keywords": ["class"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Tama\n"
        }
      ]
    },
    {
      "title": "コンストラクタを使おう",
      "description": "オブジェクトを作るときに自動的に呼ばれる「コンストラクタ」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "コンストラクタとは？",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# 初期化（しょきか）の儀式（ぎしき）\n\n**コンストラクタ**は、オブジェクトを作るときに自動的に呼ばれる特別な関数です。\n\n**身近な例え：**\n新しいスマホを買ったとき、最初に「言語設定」「名前登録」などの初期設定をしますよね。コンストラクタは、オブジェクトが生まれたときに自動で行われる「初期設定」のようなものです。\n\nオブジェクトの初期値（さいしょの値）を設定するのに使います。"
        },
        {
          "title": "コンストラクタの書き方",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# クラス名と同じ名前\n\nコンストラクタには特別なルールがあります：\n1. **クラス名と同じ名前**にする\n2. **戻り値の型を書かない**（voidも書かない）\n\n**実際のコードを見てみましょう：**\n```cpp\nclass Box {\npublic:\n    int size;        // サイズを入れる場所\n    Box(int s) {     // コンストラクタ（クラス名と同じ）\n        size = s;    // 受け取った値で初期化\n    }\n};\n\nBox b(10);  // Boxを作ると同時にsize=10で初期化！\n```\n\n**ポイント：**\n`Box b(10)` と書くと、コンストラクタが自動で呼ばれ、size に 10 が入ります。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nclass Counter {\npublic:\n    int count;\n    Counter(int c) {\n        count = c;\n    }\n};\nint main() {\n    Counter cnt(5);\n    std::cout << cnt.count << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nclass Counter {\npublic:\n    int count;\n    // Counter でコンストラクタを定義\n    ___(int c) {\n        // count に値を代入\n        ___ = c;\n    }\n};\nint main() {\n    // Counter(5) でオブジェクトを作成\n    Counter cnt(___);\n    std::cout << cnt.count << std::endl;\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "class Counter {",
        "public:",
        "    int count;",
        "    // Counter でコンストラクタを定義",
        "    Counter(int c) {",
        "        // count に値を代入",
        "        count = c;",
        "    }",
        "};",
        "int main() {",
        "    // Counter(5) でオブジェクトを作成",
        "    Counter cnt(5);",
        "    std::cout << cnt.count << std::endl;",
        "    return 0;",
        "}"
      ],
      "lineHints": [null, null, null, "メンバ変数です。", null, "コンストラクタはクラス名と同じ Counter です。", null, "引数で受け取った値を設定します。", null, null, null, null, "Counter(5) でオブジェクトを作ります。", null, null, null],
      "candidates": {
        "functions": ["Counter"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "5\n"
        }
      ]
    },
    {
      "title": "メンバ関数を作ろう",
      "description": "クラスの中に関数（メンバ関数）を作ってみましょう。",
      "difficulty": "medium",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "メンバ関数とは？",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# クラスに属する関数\n\n**メンバ関数** は、クラスの中で定義される関数です。そのクラスのデータを使った処理ができます。"
        },
        {
          "title": "メンバ関数の定義",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# クラスの中に関数を書く\n\nクラス定義の中に関数を書くと、そのクラスのメンバ関数になります。\n\n**コード例：**\n```cpp\nclass Circle {\npublic:\n    int radius;\n    int area() {\n        return radius * radius * 3;\n    }\n};\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nclass Rect {\npublic:\n    int w;\n    int h;\n    int area() {\n        return w * h;\n    }\n};\nint main() {\n    Rect r;\n    r.w = 3;\n    r.h = 4;\n    std::cout << r.area() << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nclass Rect {\npublic:\n    int w;\n    int h;\n    int area() {\n        // * で掛け算\n        return w ___ h;\n    }\n};\nint main() {\n    // Rect でオブジェクトを作成\n    ___ r;\n    r.w = 3;\n    r.h = 4;\n    // area() でメンバ関数を呼び出し\n    std::cout << r.___() << std::endl;\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "class Rect {",
        "public:",
        "    int w;",
        "    int h;",
        "    int area() {",
        "        // * で掛け算",
        "        return w * h;",
        "    }",
        "};",
        "int main() {",
        "    // Rect でオブジェクトを作成",
        "    Rect r;",
        "    r.w = 3;",
        "    r.h = 4;",
        "    // area() でメンバ関数を呼び出し",
        "    std::cout << r.area() << std::endl;",
        "    return 0;",
        "}"
      ],
      "lineHints": [null, null, null, "幅のメンバ変数です。", "高さのメンバ変数です。", "int型の値を返す関数（area）を定義します。", null, "* を使って掛け算します。", null, null, null, null, null, null, null, null, "r.area() でメンバ関数を呼びます。", null, null],
      "candidates": {
        "operators": ["*"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "12\n"
        }
      ]
    },
    {
      "title": "参照を使おう",
      "description": "変数の「別名」を作る参照（リファレンス）を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "参照とは？",
          "image": "/illustrations/3d_advanced/pointer_arrow.png",
          "content": "# 変数の別名\n\n**参照** は、既存の変数に別の名前をつける機能です。参照を通じて元の変数を操作できます。"
        },
        {
          "title": "参照の使い方",
          "image": "/illustrations/3d_advanced/pointer_arrow.png",
          "content": "# & で参照を作る\n\n型名の後に `&` をつけると参照型になります。参照は宣言時に必ず初期化が必要です。\n\n**コード例：**\n```cpp\nint x = 10;\nint& ref = x;  // ref は x の別名\nref = 20;      // x も 20 になる\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    int num = 5;\n    int& ref = num;\n    ref = 100;\n    std::cout << num << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    int num = 5;\n    // & で参照を作る\n    int___ ref = num;\n    // ref に 100 を代入\n    ref = ___;\n    std::cout << num << std::endl;\n    return 0;\n}",
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
      "lineHints": [null, null, "整数型の変数を宣言し、初期値を代入します。", null, "& を使って参照を作ります。", null, "ref を変えると num も変わります。", "num が 100 になっています。", null, null],
      "candidates": {
        "operators": ["&"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "100\n"
        }
      ]
    },
    {
      "title": "継承を学ぼう",
      "description": "既存のクラスを元に新しいクラスを作る「継承」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "継承（けいしょう）とは？",
          "image": "/illustrations/3d_advanced/inheritance.png",
          "content": "# クラスを拡張（かくちょう）する\n\n**継承（けいしょう）** を使うと、既存（きそん）のクラス（親クラス）の機能を引き継いだ新しいクラス（子クラス）を作れます。\n\n**身近な例え：**\n「動物」という親クラスがあるとします。\n- 動物は「食べる」「寝る」ができる\n\n「犬」は動物の子クラスです。\n- 犬は動物なので「食べる」「寝る」ができる（親から継承）\n- さらに「吠える」という独自の機能を追加できる\n\n一から作り直さなくても、親の機能を受け継げるので、コードの再利用（さいりよう）に便利です！"
        },
        {
          "title": "継承の書き方",
          "image": "/illustrations/3d_advanced/inheritance.png",
          "content": "# : public 親クラス\n\n子クラス名の後に `: public 親クラス名` と書きます。\n\n**実際のコードを見てみましょう：**\n```cpp\n// 親クラス（動物）\nclass Animal {\npublic:\n    void eat() { std::cout << \"eating\" << std::endl; }\n};\n\n// 子クラス（犬）- Animalを継承\nclass Dog : public Animal {\n    // 何も書かなくても eat() が使える！\n};\n\nDog d;\nd.eat();  // \"eating\" と表示される（親から継承した機能）\n```\n\n**ポイント：**\n子クラスは、親クラスの `public` な機能を自動的に使えるようになります。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nclass Vehicle {\npublic:\n    void move() {\n        std::cout << \"moving\" << std::endl;\n    }\n};\nclass Car : public Vehicle {\n};\nint main() {\n    Car c;\n    c.move();\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nclass Vehicle {\npublic:\n    void move() {\n        std::cout << \"moving\" << std::endl;\n    }\n};\n// public で継承\nclass Car : ___ Vehicle {\n};\nint main() {\n    Car c;\n    // move() でメンバ関数を呼び出し\n    c.___();\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "class Vehicle {",
        "public:",
        "    void move() {",
        "        std::cout << \"moving\" << std::endl;",
        "    }",
        "};",
        "// public で継承",
        "class Car : public Vehicle {",
        "};",
        "int main() {",
        "    Car c;",
        "    // move() でメンバ関数を呼び出し",
        "    c.move();",
        "    return 0;",
        "}"
      ],
      "lineHints": [null, "新しいクラス（Vehicle）を定義します。", null, "void型の値を返す関数（move）を定義します。", null, null, null, null, "新しいクラス（Car）を定義します。", null, null, null, null, "Car は move() を使えます。", null, null],
      "candidates": {
        "keywords": ["public"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "moving\n"
        }
      ]
    },
    {
      "title": "仮想関数でオーバーライド",
      "description": "親クラスの関数を子クラスで上書きする「オーバーライド」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "オーバーライドとは？",
          "image": "/illustrations/3d_advanced/inheritance.png",
          "content": "# 親の機能を上書き\n\n**オーバーライド** は、親クラスで定義された関数を子クラスで書き換える機能です。`virtual` キーワードを使います。"
        },
        {
          "title": "virtual と override",
          "image": "/illustrations/3d/virtual_override.png",
          "content": "# 仮想関数の仕組み\n\n親クラスで `virtual` をつけた関数は、子クラスで `override` して上書きできます。\n\n**コード例：**\n```cpp\nclass Animal {\npublic:\n    virtual void speak() { std::cout << \"...\" << std::endl; }\n};\nclass Cat : public Animal {\npublic:\n    void speak() override { std::cout << \"meow\" << std::endl; }\n};\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nclass Shape {\npublic:\n    virtual void draw() {\n        std::cout << \"shape\" << std::endl;\n    }\n};\nclass Circle : public Shape {\npublic:\n    void draw() override {\n        std::cout << \"circle\" << std::endl;\n    }\n};\nint main() {\n    Circle c;\n    c.draw();\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nclass Shape {\npublic:\n    // virtual で仮想関数を定義\n    ___ void draw() {\n        std::cout << \"shape\" << std::endl;\n    }\n};\nclass Circle : public Shape {\npublic:\n    // override で上書き\n    void draw() ___ {\n        std::cout << \"circle\" << std::endl;\n    }\n};\nint main() {\n    Circle c;\n    // draw() でメンバ関数を呼び出し\n    c.___();\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "class Shape {",
        "public:",
        "    // virtual で仮想関数を定義",
        "    virtual void draw() {",
        "        std::cout << \"shape\" << std::endl;",
        "    }",
        "};",
        "class Circle : public Shape {",
        "public:",
        "    // override で上書き",
        "    void draw() override {",
        "        std::cout << \"circle\" << std::endl;",
        "    }",
        "};",
        "int main() {",
        "    Circle c;",
        "    // draw() でメンバ関数を呼び出し",
        "    c.draw();",
        "    return 0;",
        "}"
      ],
      "lineHints": [null, null, null, null, "virtual をつけて仮想関数にします。", null, null, null, null, null, null, "void型の値を返す関数（draw）を定義します。", null, null, null, null, null, null, "Circle の draw が呼ばれます。", null, null],
      "candidates": {
        "keywords": ["virtual"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "circle\n"
        }
      ]
    },
    {
      "title": "テンプレートを使おう",
      "description": "型を後から決められる「テンプレート」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "テンプレートとは？",
          "image": "/illustrations/3d_advanced/generics_glass.png",
          "content": "# 汎用的（はんようてき）なコード\n\n**テンプレート**を使うと、どんな型（かた）でも使える汎用的な関数やクラスが作れます。\n\n**身近な例え：**\n「2つの数を足す」関数を作りたいとき、整数用、小数用...と別々に作るのは大変ですよね。\n\nテンプレートを使えば、**型を後から決められる**「万能な設計図」が作れます。\n\n1つのコードで、int でも double でも使える！これがテンプレートの力です。"
        },
        {
          "title": "関数テンプレート",
          "image": "/illustrations/3d_advanced/generics_glass.png",
          "content": "# template<typename T>\n\n`template<typename T>`（テンプレート・タイプネーム・ティー）と書くと、`T` が「後から決まる型」を表します。\n\n**実際のコードを見てみましょう：**\n```cpp\n// T はどんな型にもなれる\ntemplate<typename T>\nT add(T a, T b) {\n    return a + b;\n}\n\n// 使うとき、型が自動で決まる\nadd(1, 2);       // T = int として動く\nadd(1.5, 2.5);   // T = double として動く\n```\n\n**ポイント：**\n- `T` は「型のための変数」のようなもの\n- 使われるときに、自動で適切な型に置き換わります\n- 同じコードで、いろいろな型に対応できます！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\ntemplate<typename T>\nT bigger(T a, T b) {\n    if (a > b) return a;\n    return b;\n}\nint main() {\n    std::cout << bigger(3, 7) << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\n// T で型パラメータを定義\ntemplate<typename ___>\nT bigger(T a, T b) {\n    if (a > b) return a;\n    return b;\n}\nint main() {\n    // bigger で大きい方を取得\n    std::cout << ___(3, 7) << std::endl;\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "// T で型パラメータを定義",
        "template<typename T>",
        "T bigger(T a, T b) {",
        "    if (a > b) return a;",
        "    return b;",
        "}",
        "int main() {",
        "    // bigger で大きい方を取得",
        "    std::cout << bigger(3, 7) << std::endl;",
        "    return 0;",
        "}"
      ],
      "lineHints": [null, null, "T を型パラメータとして定義します。", "T型の引数を受け取り、T型を返します。", "大きい方を返します。", null, null, null, null, "int型で呼び出されます。", null, null],
      "candidates": {
        "variables": ["T"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "7\n"
        }
      ]
    },
    {
      "title": "ラムダ式を使おう",
      "description": "その場で小さな関数を作れる「ラムダ式」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "ラムダ式とは？",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# 無名関数（むめいかんすう）\n\n**ラムダ式（しき）** は、名前をつけずにその場で関数を作る方法です。\n\n**身近な例え：**\n普通の関数は「料理のレシピに名前をつけて保存」するようなものです。\nラムダ式は「その場でちょっと作るメモ書きレシピ」のようなもの。\n\n**いつ使うの？**\n- 一度しか使わない短い処理\n- 関数に渡す小さな処理\n\n短い処理を簡潔（かんけつ）に書けるのが魅力です！"
        },
        {
          "title": "ラムダ式の書き方",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# [ ] ( ) { }\n\nラムダ式は3つの部分でできています：\n- `[]`（キャプチャ）: 外の変数を使うかどうか\n- `()`（引数）: 関数に渡すデータ\n- `{}`（本体）: 実際の処理\n\n**実際のコードを見てみましょう：**\n```cpp\n// ラムダ式を変数 add に入れる\nauto add = [](int a, int b) {\n    return a + b;\n};\n\n// 普通の関数のように使える\nstd::cout << add(2, 3) << std::endl; // 5\n```\n\n**ポイント：**\n- `auto` で受け取る（型は自動で決まる）\n- `[]` から始まるのがラムダ式の目印"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    auto square = [](int x) {\n        return x * x;\n    };\n    std::cout << square(4) << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    // { でラムダ本体を開始\n    auto square = [](int x) ___\n        return x * x;\n    };\n    // square(4) でラムダを呼び出し\n    std::cout << ___(4) << std::endl;\n    return 0;\n}",
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
      "lineHints": [null, null, null, "{ でラムダ式の本体を始めます。", "x の2乗を返します。", null, null, "square(4) で 16 が出力されます。", null, null],
      "candidates": {
        "operators": ["{"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "16\n"
        }
      ]
    },
    {
      "title": "スマートポインタ unique_ptr",
      "description": "自動でメモリを解放してくれる「スマートポインタ」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "スマートポインタとは？",
          "image": "/illustrations/3d_advanced/pointer_arrow.png",
          "content": "# 安全なメモリ管理（かんり）\n\n**スマートポインタ**は、使い終わったら自動的にメモリを解放（かいほう）してくれる便利なポインタです。\n\n**身近な例え：**\n普通のポインタは「借りた本を自分で返さないといけない」状態です。返し忘れると大変！\n\nスマートポインタは「自動返却システム」がついた本のようなもの。使い終わったら勝手に返してくれます。\n\n**メモリリーク**（メモリの解放忘れ）を防ぐことができます。"
        },
        {
          "title": "unique_ptr の使い方",
          "image": "/illustrations/3d/smart_pointer.png",
          "content": "# std::make_unique\n\n`std::make_unique<型>()` でスマートポインタを作ります。\n\n**実際のコードを見てみましょう：**\n```cpp\n#include <memory>  // スマートポインタを使う準備\n\n// 整数を入れるスマートポインタを作る\nauto p = std::make_unique<int>(42);\n\n// 中身を見る（*をつける）\nstd::cout << *p << std::endl; // 42\n\n// ここでブロックを抜けると、自動でメモリが解放される！\n```\n\n**用語解説：**\n- `unique_ptr`: 1つのポインタだけが所有する（独占）\n- **スコープを抜ける**: `{ }` の外に出ること\n- 自動解放なので、`delete` を書く必要がない！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <memory>\nint main() {\n    auto ptr = std::make_unique<int>(100);\n    std::cout << *ptr << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\n#include <memory>\nint main() {\n    // make_unique でスマートポインタを作成\n    auto ptr = std::___<int>(100);\n    // *ptr で中身にアクセス\n    std::cout << ___ptr << std::endl;\n    return 0;\n}",
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
      "lineHints": [null, "memoryライブラリを読み込み、使用可能にします。", null, null, "make_unique でスマートポインタを作ります。", null, "*ptr で中身にアクセスします。", null, null],
      "candidates": {
        "functions": ["make_unique"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "100\n"
        }
      ]
    },
    {
      "title": "例外処理 try-catch",
      "description": "エラーが起きたときに対処する「例外処理」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "例外処理（れいがいしょり）とは？",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# エラーに備（そな）える\n\n**例外処理（れいがいしょり）** を使うと、プログラム実行中のエラーに対処（たいしょ）できます。\n\n**身近な例え：**\nサーカスの空中ブランコには、下に「安全ネット」がありますよね。万が一落ちても大丈夫なように。\n\n例外処理も同じです。プログラムで「万が一のエラー」が起きても、クラッシュせずに対処できる「安全ネット」を用意します。\n\nエラーが起きてもプログラムが止まらず、適切に対応できます！"
        },
        {
          "title": "try-catch の使い方",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# throw で例外を投げる\n\n**基本の形：**\n- `try { }`: エラーが起きるかもしれない処理\n- `throw`: エラーを「投げる」\n- `catch { }`: 投げられたエラーを「捕まえる」\n\n**実際のコードを見てみましょう：**\n```cpp\ntry {\n    // エラーを投げる\n    throw \"error!\";\n} catch (const char* e) {\n    // 投げられたエラーを捕まえて処理\n    std::cout << e << std::endl;\n}\n```\n=> \"error!\" と表示されます\n\n**ポイント：**\n- `throw` でエラーを投げると、すぐに `catch` に移動します\n- `catch` でエラーに対処した後、プログラムは続行できます"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    try {\n        throw 404;\n    } catch (int e) {\n        std::cout << e << std::endl;\n    }\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    try {\n        // throw で例外を投げる\n        ___ 404;\n    // catch で例外を捕まえる\n    } ___ (int e) {\n        std::cout << e << std::endl;\n    }\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "int main() {",
        "    try {",
        "        // throw で例外を投げる",
        "        throw 404;",
        "    // catch で例外を捕まえる",
        "    } catch (int e) {",
        "        std::cout << e << std::endl;",
        "    }",
        "    return 0;",
        "}"
      ],
      "lineHints": [null, null, "エラーが発生する可能性のある処理をここから記述します。", null, "throw で例外を投げます。", null, "エラー（例外）が発生した場合の処理を記述します。", "捕まえた値を表示します。", null, null, null],
      "candidates": {
        "keywords": ["throw"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "404\n"
        }
      ]
    }
  ]
}

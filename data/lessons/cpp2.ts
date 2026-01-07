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
          "image": "/illustrations/common/box.png",
          "content": "# データと機能の設計図\n\n**クラス** は、データ（変数）と機能（関数）をひとまとめにした「設計図」です。この設計図から実際のモノ（オブジェクト）を作ります。"
        },
        {
          "title": "クラスの定義",
          "image": "/illustrations/common/box.png",
          "content": "# class キーワード\n\n`class` を使ってクラスを定義します。`public:` の下に公開する部分を書きます。\n\n**コード例：**\n```cpp\nclass Dog {\npublic:\n    std::string name;\n};\n\nDog d;\nd.name = \"Pochi\";\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <string>\nclass Cat {\npublic:\n    std::string name;\n};\nint main() {\n    Cat c;\n    c.name = \"Tama\";\n    std::cout << c.name << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\n#include <string>\n___ Cat {\npublic:\n    std::string name;\n};\nint main() {\n    Cat c;\n    c.name = \"Tama\";\n    std::cout << c.name << std::endl;\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "#include <string>",
        "class Cat {",
        "public:",
        "    std::string name;",
        "};",
        "int main() {",
        "    Cat c;",
        "    c.name = \"Tama\";",
        "    std::cout << c.name << std::endl;",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        "",
        "",
        "class を使ってクラスを定義します。",
        "public: で公開部分を示します。",
        "メンバ変数を定義します。",
        "",
        "",
        "Cat型のオブジェクトを作ります。",
        "メンバにアクセスします。",
        "",
        "",
        ""
      ],
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
          "content": "# 初期化の儀式\n\n**コンストラクタ** は、オブジェクトを作るときに自動的に呼ばれる特別な関数です。初期値を設定するのに使います。"
        },
        {
          "title": "コンストラクタの書き方",
          "content": "# クラス名と同じ名前\n\nコンストラクタはクラス名と同じ名前で、戻り値の型を書きません。\n\n**コード例：**\n```cpp\nclass Box {\npublic:\n    int size;\n    Box(int s) {\n        size = s;\n    }\n};\nBox b(10); // size が 10 で初期化\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nclass Counter {\npublic:\n    int count;\n    Counter(int c) {\n        count = c;\n    }\n};\nint main() {\n    Counter cnt(5);\n    std::cout << cnt.count << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nclass Counter {\npublic:\n    int count;\n    ___(int c) {\n        count = c;\n    }\n};\nint main() {\n    Counter cnt(5);\n    std::cout << cnt.count << std::endl;\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "class Counter {",
        "public:",
        "    int count;",
        "    Counter(int c) {",
        "        count = c;",
        "    }",
        "};",
        "int main() {",
        "    Counter cnt(5);",
        "    std::cout << cnt.count << std::endl;",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        "",
        "",
        "",
        "メンバ変数です。",
        "コンストラクタはクラス名と同じ Counter です。",
        "引数で受け取った値を設定します。",
        "",
        "",
        "",
        "Counter(5) でオブジェクトを作ります。",
        "",
        "",
        ""
      ],
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
          "content": "# クラスに属する関数\n\n**メンバ関数** は、クラスの中で定義される関数です。そのクラスのデータを使った処理ができます。"
        },
        {
          "title": "メンバ関数の定義",
          "content": "# クラスの中に関数を書く\n\nクラス定義の中に関数を書くと、そのクラスのメンバ関数になります。\n\n**コード例：**\n```cpp\nclass Circle {\npublic:\n    int radius;\n    int area() {\n        return radius * radius * 3;\n    }\n};\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nclass Rect {\npublic:\n    int w;\n    int h;\n    int area() {\n        return w * h;\n    }\n};\nint main() {\n    Rect r;\n    r.w = 3;\n    r.h = 4;\n    std::cout << r.area() << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nclass Rect {\npublic:\n    int w;\n    int h;\n    int area() {\n        return w ___ h;\n    }\n};\nint main() {\n    Rect r;\n    r.w = 3;\n    r.h = 4;\n    std::cout << r.area() << std::endl;\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "class Rect {",
        "public:",
        "    int w;",
        "    int h;",
        "    int area() {",
        "        return w * h;",
        "    }",
        "};",
        "int main() {",
        "    Rect r;",
        "    r.w = 3;",
        "    r.h = 4;",
        "    std::cout << r.area() << std::endl;",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        "",
        "",
        "",
        "幅のメンバ変数です。",
        "高さのメンバ変数です。",
        "面積を計算する関数です。",
        "* を使って掛け算します。",
        "",
        "",
        "",
        "",
        "",
        "",
        "r.area() でメンバ関数を呼びます。",
        "",
        ""
      ],
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
          "image": "/illustrations/common/box.png",
          "content": "# 変数の別名\n\n**参照** は、既存の変数に別の名前をつける機能です。参照を通じて元の変数を操作できます。"
        },
        {
          "title": "参照の使い方",
          "image": "/illustrations/common/box.png",
          "content": "# & で参照を作る\n\n型名の後に `&` をつけると参照型になります。参照は宣言時に必ず初期化が必要です。\n\n**コード例：**\n```cpp\nint x = 10;\nint& ref = x;  // ref は x の別名\nref = 20;      // x も 20 になる\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    int num = 5;\n    int& ref = num;\n    ref = 100;\n    std::cout << num << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    int num = 5;\n    int___ ref = num;\n    ref = 100;\n    std::cout << num << std::endl;\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "int main() {",
        "    int num = 5;",
        "    int& ref = num;",
        "    ref = 100;",
        "    std::cout << num << std::endl;",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        "",
        "",
        "num に 5 を入れます。",
        "& を使って参照を作ります。",
        "ref を変えると num も変わります。",
        "num が 100 になっています。",
        "",
        ""
      ],
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
          "title": "継承とは？",
          "content": "# クラスを拡張する\n\n**継承** を使うと、既存のクラス（親クラス）の機能を引き継いだ新しいクラス（子クラス）を作れます。コードの再利用に便利です。"
        },
        {
          "title": "継承の書き方",
          "content": "# : public 親クラス\n\n子クラス名の後に `: public 親クラス名` と書きます。\n\n**コード例：**\n```cpp\nclass Animal {\npublic:\n    void eat() { std::cout << \"eating\" << std::endl; }\n};\nclass Dog : public Animal {\n};\n// Dog は eat() を使える\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nclass Vehicle {\npublic:\n    void move() {\n        std::cout << \"moving\" << std::endl;\n    }\n};\nclass Car : public Vehicle {\n};\nint main() {\n    Car c;\n    c.move();\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nclass Vehicle {\npublic:\n    void move() {\n        std::cout << \"moving\" << std::endl;\n    }\n};\nclass Car : ___ Vehicle {\n};\nint main() {\n    Car c;\n    c.move();\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "class Vehicle {",
        "public:",
        "    void move() {",
        "        std::cout << \"moving\" << std::endl;",
        "    }",
        "};",
        "class Car : public Vehicle {",
        "};",
        "int main() {",
        "    Car c;",
        "    c.move();",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        "",
        "親クラス Vehicle を定義します。",
        "",
        "move 関数を定義します。",
        "",
        "",
        "",
        "public を使って継承します。",
        "",
        "",
        "",
        "Car は move() を使えます。",
        "",
        ""
      ],
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
          "content": "# 親の機能を上書き\n\n**オーバーライド** は、親クラスで定義された関数を子クラスで書き換える機能です。`virtual` キーワードを使います。"
        },
        {
          "title": "virtual と override",
          "content": "# 仮想関数の仕組み\n\n親クラスで `virtual` をつけた関数は、子クラスで `override` して上書きできます。\n\n**コード例：**\n```cpp\nclass Animal {\npublic:\n    virtual void speak() { std::cout << \"...\" << std::endl; }\n};\nclass Cat : public Animal {\npublic:\n    void speak() override { std::cout << \"meow\" << std::endl; }\n};\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nclass Shape {\npublic:\n    virtual void draw() {\n        std::cout << \"shape\" << std::endl;\n    }\n};\nclass Circle : public Shape {\npublic:\n    void draw() override {\n        std::cout << \"circle\" << std::endl;\n    }\n};\nint main() {\n    Circle c;\n    c.draw();\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nclass Shape {\npublic:\n    ___ void draw() {\n        std::cout << \"shape\" << std::endl;\n    }\n};\nclass Circle : public Shape {\npublic:\n    void draw() override {\n        std::cout << \"circle\" << std::endl;\n    }\n};\nint main() {\n    Circle c;\n    c.draw();\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "class Shape {",
        "public:",
        "    virtual void draw() {",
        "        std::cout << \"shape\" << std::endl;",
        "    }",
        "};",
        "class Circle : public Shape {",
        "public:",
        "    void draw() override {",
        "        std::cout << \"circle\" << std::endl;",
        "    }",
        "};",
        "int main() {",
        "    Circle c;",
        "    c.draw();",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        "",
        "",
        "",
        "virtual をつけて仮想関数にします。",
        "",
        "",
        "",
        "",
        "",
        "override で上書きします。",
        "",
        "",
        "",
        "",
        "",
        "Circle の draw が呼ばれます。",
        "",
        ""
      ],
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
          "image": "/illustrations/common/box.png",
          "content": "# 汎用的なコード\n\n**テンプレート** を使うと、どんな型でも使える汎用的な関数やクラスが作れます。コードの再利用性が高まります。"
        },
        {
          "title": "関数テンプレート",
          "image": "/illustrations/common/box.png",
          "content": "# template<typename T>\n\n`template<typename T>` と書くと、T が任意の型を表します。\n\n**コード例：**\n```cpp\ntemplate<typename T>\nT add(T a, T b) {\n    return a + b;\n}\nadd(1, 2);     // int\nadd(1.5, 2.5); // double\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\ntemplate<typename T>\nT bigger(T a, T b) {\n    if (a > b) return a;\n    return b;\n}\nint main() {\n    std::cout << bigger(3, 7) << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\ntemplate<typename ___>\nT bigger(T a, T b) {\n    if (a > b) return a;\n    return b;\n}\nint main() {\n    std::cout << bigger(3, 7) << std::endl;\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "template<typename T>",
        "T bigger(T a, T b) {",
        "    if (a > b) return a;",
        "    return b;",
        "}",
        "int main() {",
        "    std::cout << bigger(3, 7) << std::endl;",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        "",
        "T を型パラメータとして定義します。",
        "T型の引数を受け取り、T型を返します。",
        "大きい方を返します。",
        "",
        "",
        "",
        "int型で呼び出されます。",
        "",
        ""
      ],
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
          "content": "# 無名関数\n\n**ラムダ式** は、名前をつけずにその場で関数を作る方法です。短い処理を簡潔に書けます。"
        },
        {
          "title": "ラムダ式の書き方",
          "content": "# [ ] ( ) { }\n\n`[]` はキャプチャ、`()` は引数、`{}` は処理本体です。\n\n**コード例：**\n```cpp\nauto add = [](int a, int b) {\n    return a + b;\n};\nstd::cout << add(2, 3) << std::endl; // 5\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    auto square = [](int x) {\n        return x * x;\n    };\n    std::cout << square(4) << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    auto square = [](int x) ___\n        return x * x;\n    };\n    std::cout << square(4) << std::endl;\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "int main() {",
        "    auto square = [](int x) {",
        "        return x * x;",
        "    };",
        "    std::cout << square(4) << std::endl;",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        "",
        "",
        "{ でラムダ式の本体を始めます。",
        "x の2乗を返します。",
        "",
        "square(4) で 16 が出力されます。",
        "",
        ""
      ],
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
          "image": "/illustrations/common/box.png",
          "content": "# 安全なメモリ管理\n\n**スマートポインタ** は、使い終わったら自動的にメモリを解放してくれる便利なポインタです。メモリリークを防ぎます。"
        },
        {
          "title": "unique_ptr の使い方",
          "image": "/illustrations/common/box.png",
          "content": "# std::make_unique\n\n`std::make_unique<型>()` でスマートポインタを作ります。スコープを抜けると自動で解放されます。\n\n**コード例：**\n```cpp\n#include <memory>\nauto p = std::make_unique<int>(42);\nstd::cout << *p << std::endl; // 42\n// 自動で解放される\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\n#include <memory>\nint main() {\n    auto ptr = std::make_unique<int>(100);\n    std::cout << *ptr << std::endl;\n    return 0;\n}",
      "holeyCode": "#include <iostream>\n#include <memory>\nint main() {\n    auto ptr = std::___<int>(100);\n    std::cout << *ptr << std::endl;\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "#include <memory>",
        "int main() {",
        "    auto ptr = std::make_unique<int>(100);",
        "    std::cout << *ptr << std::endl;",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        "",
        "memory ヘッダをインクルードします。",
        "",
        "make_unique でスマートポインタを作ります。",
        "*ptr で中身にアクセスします。",
        "",
        ""
      ],
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
          "title": "例外処理とは？",
          "image": "/illustrations/common/if.png",
          "content": "# エラーに備える\n\n**例外処理** を使うと、プログラム実行中のエラーに対処できます。エラーが起きてもプログラムがクラッシュしません。"
        },
        {
          "title": "try-catch の使い方",
          "image": "/illustrations/common/if.png",
          "content": "# throw で例外を投げる\n\n`try` ブロックで処理を実行し、エラーは `catch` で捕まえます。\n\n**コード例：**\n```cpp\ntry {\n    throw \"error!\";\n} catch (const char* e) {\n    std::cout << e << std::endl;\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#include <iostream>\nint main() {\n    try {\n        throw 404;\n    } catch (int e) {\n        std::cout << e << std::endl;\n    }\n    return 0;\n}",
      "holeyCode": "#include <iostream>\nint main() {\n    try {\n        ___ 404;\n    } catch (int e) {\n        std::cout << e << std::endl;\n    }\n    return 0;\n}",
      "correctLines": [
        "#include <iostream>",
        "int main() {",
        "    try {",
        "        throw 404;",
        "    } catch (int e) {",
        "        std::cout << e << std::endl;",
        "    }",
        "    return 0;",
        "}"
      ],
      "lineHints": [
        "",
        "",
        "try ブロックを開始します。",
        "throw で例外を投げます。",
        "catch で例外を捕まえます。",
        "捕まえた値を表示します。",
        "",
        "",
        ""
      ],
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

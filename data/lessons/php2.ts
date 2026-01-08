export const php2Data = {
  "language": "php",
  "lessonId": "php-2",
  "lessonTitle": "PHP II - クラスとデータベース",
  "lessonDescription": "PHPのオブジェクト指向プログラミングを学びます。クラス、継承、名前空間など現代的なPHPの書き方を身につけましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "exercises": [
    {
      "title": "クラスを定義しよう",
      "description": "オブジェクトの設計図「クラス」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "クラスとは？",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# オブジェクトの設計図\n\n**クラス** は、データ（プロパティ）と機能（メソッド）をまとめた設計図です。`class` キーワードで定義します。"
        },
        {
          "title": "クラスの定義",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# class キーワード\n\n`class 名前 { }` で定義します。`new` でインスタンスを作成します。\n\n**コード例：**\n```php\nclass Dog {\n    public $name;\n}\n$dog = new Dog();\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n// classでクラスを定義\nclass Cat {\n    public $name;\n}\n$cat = new Cat();\n$cat->name = 'Tama';\necho $cat->name;\n?>",
      "holeyCode": "<?php\n// ここに class と入力してクラスを作ってね\n___ Cat {\n    public $name;\n}\n$cat = new Cat();\n$cat->name = 'Tama';\necho $cat->name;\n?>",
      "correctLines": [
        "<?php",
        "class Cat {",
        "    public $name;",
        "}",
        "$cat = new Cat();",
        "$cat->name = 'Tama';",
        "echo $cat->name;",
        "?>"
      ],
      "lineHints": [
        "",
        "class でクラスを定義します。",
        "public で外からアクセスできます。",
        "",
        "new でインスタンスを作成します。",
        "-> でプロパティにアクセスします。",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["class"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Tama"
        }
      ]
    },
    {
      "title": "コンストラクタを使おう",
      "description": "オブジェクト作成時に自動で呼ばれる「コンストラクタ」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "コンストラクタとは？",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# 初期化の儀式\n\n**コンストラクタ** `__construct` は、オブジェクト作成時に自動的に呼ばれる特別なメソッドです。"
        },
        {
          "title": "__construct",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# 初期値を設定\n\n`__construct` で初期化処理を行います。\n\n**コード例：**\n```php\nclass Box {\n    public function __construct($size) {\n        $this->size = $size;\n    }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\nclass Counter {\n    public $count;\n    // __constructでコンストラクタを定義\n    public function __construct($c) {\n        $this->count = $c;\n    }\n}\n$cnt = new Counter(5);\necho $cnt->count;\n?>",
      "holeyCode": "<?php\nclass Counter {\n    public $count;\n    // ここに __construct と入力してね\n    public function ___($c) {\n        $this->count = $c;\n    }\n}\n$cnt = new Counter(5);\necho $cnt->count;\n?>",
      "correctLines": [
        "<?php",
        "class Counter {",
        "    public $count;",
        "    public function __construct($c) {",
        "        $this->count = $c;",
        "    }",
        "}",
        "$cnt = new Counter(5);",
        "echo $cnt->count;",
        "?>"
      ],
      "lineHints": [
        "",
        "",
        "",
        "__construct でコンストラクタを定義します。",
        "$this で自分自身を参照します。",
        "",
        "",
        "",
        "",
        ""
      ],
      "candidates": {
        "functions": ["__construct"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "5"
        }
      ]
    },
    {
      "title": "継承を学ぼう",
      "description": "既存のクラスを拡張する「継承」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "継承とは？",
          "image": "/illustrations/3d_advanced/inheritance.png",
          "content": "# クラスの拡張\n\n**継承** を使うと、親クラスの機能を引き継いだ子クラスを作れます。`extends` キーワードを使います。"
        },
        {
          "title": "extends で継承",
          "image": "/illustrations/3d_advanced/inheritance.png",
          "content": "# 親クラスを拡張\n\n子クラスは親クラスのメソッドを使えます。\n\n**コード例：**\n```php\nclass Animal {\n    public function eat() { echo 'eating'; }\n}\nclass Dog extends Animal { }\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\nclass Vehicle {\n    public function move() {\n        echo 'moving';\n    }\n}\n// extendsで継承\nclass Car extends Vehicle { }\n$car = new Car();\n$car->move();\n?>",
      "holeyCode": "<?php\nclass Vehicle {\n    public function move() {\n        echo 'moving';\n    }\n}\n// ここに extends と入力して継承してね\nclass Car ___ Vehicle { }\n$car = new Car();\n$car->move();\n?>",
      "correctLines": [
        "<?php",
        "class Vehicle {",
        "    public function move() {",
        "        echo 'moving';",
        "    }",
        "}",
        "class Car extends Vehicle { }",
        "$car = new Car();",
        "$car->move();",
        "?>"
      ],
      "lineHints": [
        "",
        "",
        "",
        "",
        "",
        "",
        "extends で継承します。",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["extends"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "moving"
        }
      ]
    },
    {
      "title": "インターフェースを使おう",
      "description": "メソッドの約束を定義する「インターフェース」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "インターフェースとは？",
          "image": "/illustrations/3d_advanced/interface_blueprint.png",
          "content": "# メソッドの約束\n\n**インターフェース** は、クラスが実装すべきメソッドを定義します。`interface` で定義し、`implements` で実装します。"
        },
        {
          "title": "interface と implements",
          "image": "/illustrations/3d_advanced/interface_blueprint.png",
          "content": "# 約束を守る\n\nインターフェースを実装したクラスは、そのメソッドを必ず定義する必要があります。\n\n**コード例：**\n```php\ninterface Greet {\n    public function hello();\n}\nclass Person implements Greet {\n    public function hello() { echo 'hi'; }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n// interfaceでインターフェースを定義\ninterface Runner {\n    public function run();\n}\nclass Robot implements Runner {\n    public function run() {\n        echo 'running';\n    }\n}\n$r = new Robot();\n$r->run();\n?>",
      "holeyCode": "<?php\n// ここに interface と入力してインターフェースを作ってね\n___ Runner {\n    public function run();\n}\nclass Robot implements Runner {\n    public function run() {\n        echo 'running';\n    }\n}\n$r = new Robot();\n$r->run();\n?>",
      "correctLines": [
        "<?php",
        "interface Runner {",
        "    public function run();",
        "}",
        "class Robot implements Runner {",
        "    public function run() {",
        "        echo 'running';",
        "    }",
        "}",
        "$r = new Robot();",
        "$r->run();",
        "?>"
      ],
      "lineHints": [
        "",
        "interface でインターフェースを定義します。",
        "",
        "",
        "implements で実装します。",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["interface"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "running"
        }
      ]
    },
    {
      "title": "配列の array_map",
      "description": "配列の各要素を変換する「array_map」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "array_map とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 各要素を変換\n\n**array_map** は、配列の各要素に関数を適用して新しい配列を作ります。"
        },
        {
          "title": "array_map の使い方",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# コールバック関数を渡す\n\n第1引数に関数、第2引数に配列を渡します。\n\n**コード例：**\n```php\n$nums = [1, 2, 3];\n$doubled = array_map(fn($n) => $n * 2, $nums);\n// [2, 4, 6]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n$nums = [1, 2, 3];\n// array_mapで各要素を変換\n$squared = array_map(fn($n) => $n * $n, $nums);\nprint_r($squared);\n?>",
      "holeyCode": "<?php\n$nums = [1, 2, 3];\n// ここに array_map と入力してね\n$squared = ___(fn($n) => $n * $n, $nums);\nprint_r($squared);\n?>",
      "correctLines": [
        "<?php",
        "$nums = [1, 2, 3];",
        "$squared = array_map(fn($n) => $n * $n, $nums);",
        "print_r($squared);",
        "?>"
      ],
      "lineHints": [
        "",
        "",
        "array_map で各要素を2乗します。",
        "",
        ""
      ],
      "candidates": {
        "functions": ["array_map"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Array\n(\n    [0] => 1\n    [1] => 4\n    [2] => 9\n)\n"
        }
      ]
    },
    {
      "title": "配列の array_filter",
      "description": "条件に合う要素だけを抽出する「array_filter」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "array_filter とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 条件でフィルタ\n\n**array_filter** は、条件を満たす要素だけを残した新しい配列を作ります。"
        },
        {
          "title": "array_filter の使い方",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 真を返す要素を残す\n\nコールバックが真を返す要素だけが残ります。\n\n**コード例：**\n```php\n$nums = [1, 2, 3, 4, 5];\n$big = array_filter($nums, fn($n) => $n > 3);\n// [4, 5]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n$nums = [1, 2, 3, 4, 5];\n// array_filterで条件に合う要素を抽出\n$result = array_filter($nums, fn($n) => $n >= 3);\nprint_r($result);\n?>",
      "holeyCode": "<?php\n$nums = [1, 2, 3, 4, 5];\n// ここに array_filter と入力してね\n$result = ___($nums, fn($n) => $n >= 3);\nprint_r($result);\n?>",
      "correctLines": [
        "<?php",
        "$nums = [1, 2, 3, 4, 5];",
        "$result = array_filter($nums, fn($n) => $n >= 3);",
        "print_r($result);",
        "?>"
      ],
      "lineHints": [
        "",
        "",
        "array_filter で 3 以上を抽出します。",
        "",
        ""
      ],
      "candidates": {
        "functions": ["array_filter"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Array\n(\n    [2] => 3\n    [3] => 4\n    [4] => 5\n)\n"
        }
      ]
    },
    {
      "title": "アロー関数を使おう",
      "description": "短く関数を書ける「アロー関数」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "アロー関数とは？",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# 短い無名関数\n\n**アロー関数** `fn() =>` は、無名関数を短く書く方法です。PHP 7.4 から使えます。"
        },
        {
          "title": "アロー関数の書き方",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# fn と =>\n\n`fn(引数) => 式` で定義します。自動で外の変数を捕捉します。\n\n**コード例：**\n```php\n$add = fn($a, $b) => $a + $b;\necho $add(2, 3); // 5\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n// fnでアロー関数を定義\n$triple = fn($n) => $n * 3;\necho $triple(7);\n?>",
      "holeyCode": "<?php\n// ここに fn と入力してアロー関数を作ってね\n$triple = ___($n) => $n * 3;\necho $triple(7);\n?>",
      "correctLines": [
        "<?php",
        "$triple = fn($n) => $n * 3;",
        "echo $triple(7);",
        "?>"
      ],
      "lineHints": [
        "",
        "fn でアロー関数を定義します。",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["fn"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "21"
        }
      ]
    },
    {
      "title": "例外処理 try-catch",
      "description": "エラーを捕まえる「例外処理」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "例外処理とは？",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# エラーに対処\n\n**例外処理** を使うと、エラーが起きてもプログラムを止めずに対処できます。"
        },
        {
          "title": "try-catch",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# 例外を捕まえる\n\n`try` ブロックでエラーが起きると、`catch` ブロックが実行されます。\n\n**コード例：**\n```php\ntry {\n    throw new Exception('error');\n} catch (Exception $e) {\n    echo 'caught';\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\ntry {\n    throw new Exception('oops');\n// catchで例外を捕捉\n} catch (Exception $e) {\n    echo 'caught';\n}\n?>",
      "holeyCode": "<?php\ntry {\n    throw new Exception('oops');\n// ここに catch と入力してエラーを捕まえてね\n} ___ (Exception $e) {\n    echo 'caught';\n}\n?>",
      "correctLines": [
        "<?php",
        "try {",
        "    throw new Exception('oops');",
        "} catch (Exception $e) {",
        "    echo 'caught';",
        "}",
        "?>"
      ],
      "lineHints": [
        "",
        "",
        "throw で例外を投げます。",
        "catch で例外を捕まえます。",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["catch"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "caught"
        }
      ]
    },
    {
      "title": "名前空間を使おう",
      "description": "クラスを整理する「名前空間」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "名前空間とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# クラスの整理\n\n**名前空間（namespace）** を使うと、クラスをグループ分けして名前の衝突を防げます。"
        },
        {
          "title": "namespace の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# namespace キーワード\n\nファイルの先頭で `namespace` を宣言します。\n\n**コード例：**\n```php\nnamespace App\\Models;\nclass User { }\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n// namespaceで名前空間を宣言\nnamespace App;\nclass Hello {\n    public function say() {\n        echo 'hello';\n    }\n}\n$h = new Hello();\n$h->say();\n?>",
      "holeyCode": "<?php\n// ここに namespace と入力してね\n___ App;\nclass Hello {\n    public function say() {\n        echo 'hello';\n    }\n}\n$h = new Hello();\n$h->say();\n?>",
      "correctLines": [
        "<?php",
        "namespace App;",
        "class Hello {",
        "    public function say() {",
        "        echo 'hello';",
        "    }",
        "}",
        "$h = new Hello();",
        "$h->say();",
        "?>"
      ],
      "lineHints": [
        "",
        "namespace で名前空間を宣言します。",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["namespace"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "hello"
        }
      ]
    },
    {
      "title": "Null合体演算子 ??",
      "description": "nullの場合のデフォルト値を設定する「??」演算子を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "Null合体演算子とは？",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# null のときの代替値\n\n**??** 演算子は、左側が `null` のときに右側の値を返します。デフォルト値の設定に便利です。"
        },
        {
          "title": "?? の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# シンプルな null チェック\n\n`$a ?? $b` は、$a が null なら $b を返します。\n\n**コード例：**\n```php\n$name = null;\necho $name ?? 'Guest'; // Guest\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n$value = null;\n// ??でnullの場合のデフォルト値を指定\necho $value ?? 'default';\n?>",
      "holeyCode": "<?php\n$value = null;\n// ここに ?? と入力してデフォルト値を決めてね\necho $value ___ 'default';\n?>",
      "correctLines": [
        "<?php",
        "$value = null;",
        "echo $value ?? 'default';",
        "?>"
      ],
      "lineHints": [
        "",
        "",
        "?? で null の場合のデフォルト値を指定します。",
        ""
      ],
      "candidates": {
        "operators": ["??"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "default"
        }
      ]
    }
  ]
}

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
      "correctCode": "<?php\\n// Catクラスを定義\\nclass Cat {\\n    // public $nameを定義\\n    public $name;\\n}\\n// $catにnew Cat()を代入\\n$cat = new Cat();\\n// $cat->nameに'タマ'を代入\\n$cat->name = 'タマ';\\n// $cat->nameを出力\\necho $cat->name;\\n?>",
      "holeyCode": "___\\n// Catクラスを定義\\nclass ___ {\\n    // public $nameを定義\\n    public $___;\\n___\\n// $catにnew Cat()を代入\\n$cat = new ___();\\n// $cat->nameに'タマ'を代入\\n$cat->name = '___';\\n// $cat->nameを出力\\necho ___->name;\\n___",
      "correctLines": [
          "<?php",
          "// Catクラスを定義",
          "class Cat {",
          "    // public $nameを定義",
          "    public $name;",
          "}",
          "// $catにnew Cat()を代入",
          "$cat = new Cat();",
          "// $cat->nameに'タマ'を代入",
          "$cat->name = 'タマ';",
          "// $cat->nameを出力",
          "echo $cat->name;",
          "?>"
        ],
      "lineHints": [
          "PHPスクリプトの開始を宣言する。",
          null,
          "新しいクラス（Cat）を定義します。",
          null,
          "public で外からアクセスできます。",
          "ここを正しく入力してください。",
          null,
          "new でインスタンスを作成します。",
          null,
          "-> でプロパティにアクセスします。",
          null,
          "変数の内容を展開して表示します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "class"
          ],
          "others": ["public", "new", "->", "echo", "<?php", "Cat", "name", "}", "Tama", "$cat", "?>", "タマ", "<?php", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "タマ"
          }
        ]
      },
    {
      "title": "コンストラクタを使おう",
      "correctCode": "<?php\\n// Counterクラスを定義\\nclass Counter {\\n    // public $countを定義\\n    public $count;\\n    // __construct($c)でコンストラクタを定義\\n    public function __construct($c) {\\n        // $this->countに$cを代入\\n        $this->count = $c;\\n    }\\n}\\n// $cntにnew Counter(5)を代入\\n$cnt = new Counter(5);\\n// $cnt->countを出力\\necho $cnt->count;\\n?>",
      "holeyCode": "___\\n// Counterクラスを定義\\nclass ___ {\\n    // public $countを定義\\n    public $___;\\n    // __construct($c)でコンストラクタを定義\\n    public function ___($c) {\\n        // $this->countに$cを代入\\n        $this->count = $___;\\n    ___\\n___\\n// $cntにnew Counter(5)を代入\\n$cnt = new Counter(___);\\n// $cnt->countを出力\\necho ___->count;\\n___",
      "correctLines": [
          "<?php",
          "// Counterクラスを定義",
          "class Counter {",
          "    // public $countを定義",
          "    public $count;",
          "    // __construct($c)でコンストラクタを定義",
          "    public function __construct($c) {",
          "        // $this->countに$cを代入",
          "        $this->count = $c;",
          "    }",
          "}",
          "// $cntにnew Counter(5)を代入",
          "$cnt = new Counter(5);",
          "// $cnt->countを出力",
          "echo $cnt->count;",
          "?>"
        ],
      "lineHints": [
          "__construct でコンストラクタを定義します。",
          null,
          "$this で自分自身を参照します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "変数の内容を展開して表示します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "__construct"
          ],
          "others": ["class", "public", "$this", "new", "echo", "<?php", "Counter", "count", "c", "}", "5", "$cnt", "?>", "<?php", "}"]
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
      "correctCode": "<?php\\n// Vehicleクラスを定義\\nclass Vehicle {\\n    // move()メソッドを定義\\n    public function move() {\\n        // '移動中'を出力\\n        echo '移動中';\\n    }\\n}\\n// CarがVehicleを継承\\nclass Car extends Vehicle { }\\n// $carにnew Car()を代入\\n$car = new Car();\\n// $car->move()を呼び出し\\n$car->move();\\n?>",
      "holeyCode": "___\\n// Vehicleクラスを定義\\nclass ___ {\\n    // move()メソッドを定義\\n    public function ___() {\\n        // '移動中'を出力\\n        echo '___';\\n    ___\\n___\\n// CarがVehicleを継承\\nclass ___ extends Vehicle { }\\n// $carにnew Car()を代入\\n$car = new ___();\\n// $car->move()を呼び出し\\n$car->___();\\n___",
      "correctLines": [
          "<?php",
          "// Vehicleクラスを定義",
          "class Vehicle {",
          "    // move()メソッドを定義",
          "    public function move() {",
          "        // '移動中'を出力",
          "        echo '移動中';",
          "    }",
          "}",
          "// CarがVehicleを継承",
          "class Car extends Vehicle { }",
          "// $carにnew Car()を代入",
          "$car = new Car();",
          "// $car->move()を呼び出し",
          "$car->move();",
          "?>"
        ],
      "lineHints": [
          "PHPスクリプトの開始を宣言する。",
          null,
          "新しいクラス（Car）を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "新しいクラス（Car）を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "extends"
          ],
          "others": ["class", "function", "echo", "new", "->", "<?php", "Vehicle", "move", "moving", "}", "Car", "?>", "移動中", "<?php", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "移動中"
          }
        ]
      },
    {
      "title": "インターフェースを使おう",
      "correctCode": "<?php\\n// Runnerインターフェースを定義\\ninterface Runner {\\n    // run()メソッドを宣言\\n    public function run();\\n}\\n// RobotがRunnerを実装\\nclass Robot implements Runner {\\n    // run()メソッドを実装\\n    public function run() {\\n        // '実行中'を出力\\n        echo '実行中';\\n    }\\n}\\n// $rにnew Robot()を代入\\n$r = new Robot();\\n// $r->run()を呼び出し\\n$r->run();\\n?>",
      "holeyCode": "___\\n// Runnerインターフェースを定義\\ninterface ___ {\\n    // run()メソッドを宣言\\n    public function ___();\\n___\\n// RobotがRunnerを実装\\nclass ___ implements Runner {\\n    // run()メソッドを実装\\n    public function ___() {\\n        // '実行中'を出力\\n        echo '___';\\n    ___\\n___\\n// $rにnew Robot()を代入\\n$r = new ___();\\n// $r->run()を呼び出し\\n$r->___();\\n___",
      "correctLines": [
          "<?php",
          "// Runnerインターフェースを定義",
          "interface Runner {",
          "    // run()メソッドを宣言",
          "    public function run();",
          "}",
          "// RobotがRunnerを実装",
          "class Robot implements Runner {",
          "    // run()メソッドを実装",
          "    public function run() {",
          "        // '実行中'を出力",
          "        echo '実行中';",
          "    }",
          "}",
          "// $rにnew Robot()を代入",
          "$r = new Robot();",
          "// $r->run()を呼び出し",
          "$r->run();",
          "?>"
        ],
      "lineHints": [
          "PHPスクリプトの開始を宣言する。",
          null,
          "interface でインターフェースを定義します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "新しいクラス（Robot）を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "interface"
          ],
          "others": ["function", "implements", "echo", "new", "->", "<?php", "Runner", "run", "}", "Robot", "running", "?>", "実行中", "<?php", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "実行中"
          }
        ]
      },
    {
      "title": "配列の array_map",
      "correctCode": "<?php\\n// 配列を定義（1, 2, 3）\\n$nums = [1, 2, 3];\\n// array_mapで各要素を変換\\n$squared = array_map(fn($n) => $n * $n, $nums);\\n// print_rで配列を出力\\nprint_r($squared);\\n?>",
      "holeyCode": "___\\n// 配列を定義（1, 2, 3）\\n$___ = [___];\\n// array_mapで各要素を変換\\n$squared = array_map(fn($n) => $n * $n, $___);\\n// print_rで配列を出力\\nprint_r($___);\\n___",
      "correctLines": [
          "<?php",
          "// 配列を定義（1, 2, 3）",
          "$nums = [1, 2, 3];",
          "// array_mapで各要素を変換",
          "$squared = array_map(fn($n) => $n * $n, $nums);",
          "// print_rで配列を出力",
          "print_r($squared);",
          "?>"
        ],
      "lineHints": [
          "array_map で各要素を2乗します。",
          null,
          "配列を複数の値で初期化する。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "array_map"
          ],
          "others": ["3", "print_r($squared);", "<?php", "nums", "1, 2, 3", "squared", "?>", "<?php"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Array\\n(\\n    [0] => 1\\n    [1] => 4\\n    [2] => 9\\n)\\n"
          }
        ]
      },
    {
      "title": "配列の array_filter",
      "correctCode": "<?php\\n// $numsに[1, 2, 3, 4, 5]を代入\\n$nums = [1, 2, 3, 4, 5];\\n// array_filterで3以上を抽出し$resultに代入\\n$result = array_filter($nums, fn($n) => $n >= 3);\\n// $resultをprint_rで出力\\nprint_r($result);\\n?>",
      "holeyCode": "___\\n// $numsに[1, 2, 3, 4, 5]を代入\\n$___ = [___];\\n// array_filterで3以上を抽出し$resultに代入\\n$result = array_filter($nums, fn($n) => $n >= ___);\\n// $resultをprint_rで出力\\nprint_r($___);\\n___",
      "correctLines": [
          "<?php",
          "// $numsに[1, 2, 3, 4, 5]を代入",
          "$nums = [1, 2, 3, 4, 5];",
          "// array_filterで3以上を抽出し$resultに代入",
          "$result = array_filter($nums, fn($n) => $n >= 3);",
          "// $resultをprint_rで出力",
          "print_r($result);",
          "?>"
        ],
      "lineHints": [
          "array_filter で 3 以上を抽出します。",
          null,
          "配列を複数の値で初期化する。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "array_filter"
          ],
          "others": ["5", "print_r", "<?php", "nums", "1, 2, 3, 4, 5", "3", "result", "?>", "<?php"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Array\\n(\\n    [2] => 3\\n    [3] => 4\\n    [4] => 5\\n)\\n"
          }
        ]
      },
    {
      "title": "アロー関数を使おう",
      "correctCode": "<?php\\n// nを3倍にする$triple関数を定義\\n$triple = fn($n) => $n * 3;\\n// echoで出力\\necho $triple(7);\\n?>",
      "holeyCode": "___\\n// nを3倍にする$triple関数を定義\\n$triple = fn($n) => $n * ___;\\n// echoで出力\\necho ___(7);\\n___",
      "correctLines": [
          "<?php",
          "// nを3倍にする$triple関数を定義",
          "$triple = fn($n) => $n * 3;",
          "// echoで出力",
          "echo $triple(7);",
          "?>"
        ],
      "lineHints": [
          "fn でアロー関数を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "変数の内容を展開して表示します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "fn"
          ],
          "others": ["echo", "<?php", "3", "$triple", "?>", "<?php"]
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
      "correctCode": "<?php\\n// tryで例外を発生させる可能性があるコードを囲む\\ntry {\\n    // throwで例外を投げる\\n    throw new Exception('おっと');\\n// catchで例外を捕捉\\n} catch (Exception $e) {\\n    // echoで出力\\n    echo 'キャッチ';\\n}\\n?>",
      "holeyCode": "___\\n// tryで例外を発生させる可能性があるコードを囲む\\n___ {\\n    // throwで例外を投げる\\n    throw new Exception('___');\\n// catchで例外を捕捉\\n} catch (Exception $___) {\\n    // echoで出力\\n    echo '___';\\n___\\n___",
      "correctLines": [
          "<?php",
          "// tryで例外を発生させる可能性があるコードを囲む",
          "try {",
          "    // throwで例外を投げる",
          "    throw new Exception('おっと');",
          "// catchで例外を捕捉",
          "} catch (Exception $e) {",
          "    // echoで出力",
          "    echo 'キャッチ';",
          "}",
          "?>"
        ],
      "lineHints": [
          "throw で例外を投げます。",
          null,
          "エラー（例外）が発生した場合の処理を記述します。",
          null,
          "ここを正しく入力してください。",
          null,
          "例外が発生した場合の処理を定義する。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "catch"
          ],
          "others": ["try", "throw", "echo", "<?php", "oops", "e", "caught", "}", "?>", "おっと", "キャッチ", "<?php", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "キャッチ"
          }
        ]
      },
    {
      "title": "名前空間を使おう",
      "correctCode": "<?php\\n// namespace Appを宣言\\nnamespace App;\\n// Helloクラスを定義\\nclass Hello {\\n    // say()メソッドを定義\\n    public function say() {\\n        // 'こんにちは'を出力\\n        echo 'こんにちは';\\n    }\\n}\\n// $hにnew Hello()を代入\\n$h = new Hello();\\n// $h->say()を呼び出し\\n$h->say();\\n?>",
      "holeyCode": "___\\n// namespace Appを宣言\\nnamespace ___;\\n// Helloクラスを定義\\nclass ___ {\\n    // say()メソッドを定義\\n    public function ___() {\\n        // 'こんにちは'を出力\\n        echo '___';\\n    ___\\n___\\n// $hにnew Hello()を代入\\n$h = new ___();\\n// $h->say()を呼び出し\\n$h->___();\\n___",
      "correctLines": [
          "<?php",
          "// namespace Appを宣言",
          "namespace App;",
          "// Helloクラスを定義",
          "class Hello {",
          "    // say()メソッドを定義",
          "    public function say() {",
          "        // 'こんにちは'を出力",
          "        echo 'こんにちは';",
          "    }",
          "}",
          "// $hにnew Hello()を代入",
          "$h = new Hello();",
          "// $h->say()を呼び出し",
          "$h->say();",
          "?>"
        ],
      "lineHints": [
          "namespace で名前空間を宣言します。",
          null,
          "ここを正しく入力してください。",
          null,
          "新しいクラス（Hello）を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "namespace"
          ],
          "others": ["class", "function", "echo", "new", "->", "<?php", "App", "Hello", "say", "hello", "}", "?>", "こんにちは", "<?php", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは"
          }
        ]
      },
    {
      "title": "Null合体演算子 ??",
      "correctCode": "<?php\\n// nullを代入\\n$value = null;\\n// ??でnullの場合のデフォルト値を指定\\necho $value ?? 'デフォルト';\\n?>",
      "holeyCode": "___\\n// nullを代入\\n$value = ___;\\n// ??でnullの場合のデフォルト値を指定\\necho ___ ?? 'デフォルト';\\n___",
      "correctLines": [
          "<?php",
          "// nullを代入",
          "$value = null;",
          "// ??でnullの場合のデフォルト値を指定",
          "echo $value ?? 'デフォルト';",
          "?>"
        ],
      "lineHints": [
          "PHPスクリプトの開始を宣言する。",
          null,
          "ここを正しく入力してください。",
          null,
          "変数の内容を展開して表示します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "??"
          ],
          "others": ["null", "<?php", "$value", "?>", "<?php"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "デフォルト"
          }
        ]
      }
  ]
}

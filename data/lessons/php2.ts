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
      "holeyCode": "___\\n// Catクラスを定義\\n___ ___ {\\n    // public $nameを定義\\n    ___ $___;\\n___\\n// $catにnew Cat()を代入\\n$___ = ___ ___();\\n// $cat->nameに'タマ'を代入\\n$___->___ = '___';\\n// $cat->nameを出力\\n___ $___->___;\\n___",
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
          "class キーワードでクラスを定義します。",
          null,
          "public で外からアクセスできるプロパティを定義します。",
          "クラスやメソッドの閉じ括弧 } です。",
          null,
          "new でインスタンスを作成し変数に代入します。",
          null,
          "-> でプロパティにアクセスして値を代入します。",
          null,
          "echo で変数の内容を出力します。",
          "PHPスクリプトの終了を宣言します。"
        ],
        "candidates": {
          "keywords": [
            "class", "public", "new", "echo"
          ],
          "others": ["<?php", "?>", "}", "Cat", "name", "cat", "タマ"]
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
      "holeyCode": "___\\n// Counterクラスを定義\\n___ ___ {\\n    // public $countを定義\\n    ___ $___;\\n    // __construct($c)でコンストラクタを定義\\n    ___ ___ ___($___) {\\n        // $this->countに$cを代入\\n        $___->___ = $___;\\n    ___\\n___\\n// $cntにnew Counter(5)を代入\\n$___ = ___ ___(___);\\n// $cnt->countを出力\\n___ $___->___;\\n___",
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
          "PHPスクリプトの開始を宣言する。",
          null,
          "class キーワードでクラスを定義します。",
          null,
          "public でプロパティを定義します。",
          null,
          "public function でメソッドを定義します。",
          null,
          "$this で自分自身のプロパティにアクセスします。",
          "クラスやメソッドの閉じ括弧 } です。",
          "クラスやメソッドの閉じ括弧 } です。",
          null,
          "new でインスタンスを作成し変数に代入します。",
          null,
          "echo で変数のプロパティを出力します。",
          "PHPスクリプトの終了を宣言します。"
        ],
        "candidates": {
          "keywords": [
            "class", "public", "function", "new", "echo"
          ],
          "others": ["<?php", "?>", "}", "Counter", "count", "c", "this", "cnt", "5", "__construct"]
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
      "holeyCode": "___\\n// Vehicleクラスを定義\\n___ ___ {\\n    // move()メソッドを定義\\n    ___ ___ ___() {\\n        // '移動中'を出力\\n        ___ '___';\\n    ___\\n___\\n// CarがVehicleを継承\\n___ ___ ___ ___ { }\\n// $carにnew Car()を代入\\n$___ = ___ ___();\\n// $car->move()を呼び出し\\n$___->___();\\n___",
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
          "class キーワードでクラスを定義します。",
          null,
          "public function でメソッドを定義します。",
          null,
          "echo で文字列を出力します。",
          "クラスやメソッドの閉じ括弧 } です。",
          "クラスやメソッドの閉じ括弧 } です。",
          null,
          "extends で親クラスを継承します。",
          null,
          "new でインスタンスを作成し変数に代入します。",
          null,
          "-> でメソッドを呼び出します。",
          "PHPスクリプトの終了を宣言します。"
        ],
        "candidates": {
          "keywords": [
            "class", "public", "function", "echo", "extends", "new"
          ],
          "others": ["<?php", "?>", "}", "Vehicle", "move", "Car", "car", "移動中"]
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
      "holeyCode": "___\\n// Runnerインターフェースを定義\\n___ ___ {\\n    // run()メソッドを宣言\\n    ___ ___ ___();\\n___\\n// RobotがRunnerを実装\\n___ ___ ___ ___ {\\n    // run()メソッドを実装\\n    ___ ___ ___() {\\n        // '実行中'を出力\\n        ___ '___';\\n    ___\\n___\\n// $rにnew Robot()を代入\\n$___ = ___ ___();\\n// $r->run()を呼び出し\\n$___->___();\\n___",
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
          "public function でメソッドを宣言します。",
          "クラスやメソッドの閉じ括弧 } です。",
          null,
          "class と implements でインターフェースを実装します。",
          null,
          "public function でメソッドを実装します。",
          null,
          "echo で文字列を出力します。",
          "クラスやメソッドの閉じ括弧 } です。",
          "クラスやメソッドの閉じ括弧 } です。",
          null,
          "new でインスタンスを作成し変数に代入します。",
          null,
          "-> でメソッドを呼び出します。",
          "PHPスクリプトの終了を宣言します。"
        ],
        "candidates": {
          "keywords": [
            "interface", "class", "public", "function", "implements", "echo", "new"
          ],
          "others": ["<?php", "?>", "}", "Runner", "run", "Robot", "r", "実行中"]
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
      "holeyCode": "___\\n// 配列を定義（1, 2, 3）\\n$___ = [___, ___, ___];\\n// array_mapで各要素を変換\\n$___ = ___(___(___) => $___ * $___, $___);\\n// print_rで配列を出力\\n___($___);\\n___",
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
          "PHPスクリプトの開始を宣言する。",
          null,
          "配列を数値で初期化します。",
          null,
          "array_map と fn でアロー関数を使って各要素を変換します。",
          null,
          "print_r で配列の内容を出力します。",
          "PHPスクリプトの終了を宣言します。"
        ],
        "candidates": {
          "keywords": [
            "fn"
          ],
          "others": ["<?php", "?>", "nums", "squared", "array_map", "print_r", "n", "$n", "1", "2", "3"]
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
      "holeyCode": "___\\n// $numsに[1, 2, 3, 4, 5]を代入\\n$___ = [___, ___, ___, ___, ___];\\n// array_filterで3以上を抽出し$resultに代入\\n$___ = ___($___, ___($___) => $___ >= ___);\\n// $resultをprint_rで出力\\n___($___);\\n___",
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
          "PHPスクリプトの開始を宣言する。",
          null,
          "配列を数値で初期化します。",
          null,
          "array_filter と fn でアロー関数を使って条件に合う要素を抽出します。",
          null,
          "print_r で配列の内容を出力します。",
          "PHPスクリプトの終了を宣言します。"
        ],
        "candidates": {
          "keywords": [
            "fn"
          ],
          "others": ["<?php", "?>", "nums", "result", "array_filter", "print_r", "n", "1", "2", "3", "4", "5"]
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
      "holeyCode": "___\\n// nを3倍にする$triple関数を定義\\n$___ = ___($___) => $___ * ___;\\n// echoで出力\\n___ $___(___);\\n___",
      "correctLines": [
          "<?php",
          "// nを3倍にする$triple関数を定義",
          "$triple = fn($n) => $n * 3;",
          "// echoで出力",
          "echo $triple(7);",
          "?>"
        ],
      "lineHints": [
          "PHPスクリプトの開始を宣言する。",
          null,
          "fn でアロー関数を定義します。",
          null,
          "echo で関数を呼び出して結果を出力します。",
          "PHPスクリプトの終了を宣言します。"
        ],
        "candidates": {
          "keywords": [
            "fn", "echo"
          ],
          "others": ["<?php", "?>", "triple", "n", "3", "7"]
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
      "holeyCode": "___\\n// tryで例外を発生させる可能性があるコードを囲む\\n___ {\\n    // throwで例外を投げる\\n    ___ ___ ___('___');\\n// catchで例外を捕捉\\n} ___ (___ $___) {\\n    // echoで出力\\n    ___ '___';\\n___\\n___",
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
          "PHPスクリプトの開始を宣言する。",
          null,
          "try でエラーが発生する可能性のあるコードを囲みます。",
          null,
          "throw new Exception で例外を投げます。",
          null,
          "catch で例外を捕捉します。",
          null,
          "echo で文字列を出力します。",
          "クラスやメソッドの閉じ括弧 } です。",
          "PHPスクリプトの終了を宣言します。"
        ],
        "candidates": {
          "keywords": [
            "try", "throw", "new", "catch", "echo"
          ],
          "others": ["<?php", "?>", "}", "Exception", "e", "おっと", "キャッチ"]
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
      "holeyCode": "___\\n// namespace Appを宣言\\n___ ___;\\n// Helloクラスを定義\\n___ ___ {\\n    // say()メソッドを定義\\n    ___ ___ ___() {\\n        // 'こんにちは'を出力\\n        ___ '___';\\n    ___\\n___\\n// $hにnew Hello()を代入\\n$___ = ___ ___();\\n// $h->say()を呼び出し\\n$___->___();\\n___",
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
          "PHPスクリプトの開始を宣言する。",
          null,
          "namespace で名前空間を宣言します。",
          null,
          "class キーワードでクラスを定義します。",
          null,
          "public function でメソッドを定義します。",
          null,
          "echo で文字列を出力します。",
          "クラスやメソッドの閉じ括弧 } です。",
          "クラスやメソッドの閉じ括弧 } です。",
          null,
          "new でインスタンスを作成し変数に代入します。",
          null,
          "-> でメソッドを呼び出します。",
          "PHPスクリプトの終了を宣言します。"
        ],
        "candidates": {
          "keywords": [
            "namespace", "class", "public", "function", "echo", "new"
          ],
          "others": ["<?php", "?>", "}", "App", "Hello", "say", "h", "こんにちは"]
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
      "holeyCode": "___\\n// nullを代入\\n$___ = ___;\\n// ??でnullの場合のデフォルト値を指定\\n___ $___ ___ '___';\\n___",
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
          "変数に null を代入します。",
          null,
          "echo と ?? 演算子でデフォルト値を指定して出力します。",
          "PHPスクリプトの終了を宣言します。"
        ],
        "candidates": {
          "keywords": [
            "echo"
          ],
          "operators": [
            "??"
          ],
          "others": ["<?php", "?>", "value", "null", "デフォルト"]
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

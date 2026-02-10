export const php2Data = {
  "language": "php",
  "lessonId": "php-2",
  "lessonTitle": "PHP II - クラスとデータベース",
  "lessonDescription": "PHPのオブジェクト指向プログラミングを学びます。クラス、継承、名前空間など現代的なPHPの書き方を身につけましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "tutorialSlides": [
    {
      "title": "クラスの定義",
      "content": "PHPでは `class` キーワードでクラスを定義します。\\n\\n```php\\nclass Cat {\\n    public $name;  // プロパティ\\n}\\n\\n$cat = new Cat();\\n$cat->name = 'タマ';\\necho $cat->name;\\n```\\n\\n=> タマ\\n\\n`->` でプロパティやメソッドにアクセスします。"
    },
    {
      "title": "コンストラクタ",
      "content": "`__construct` メソッドでインスタンス作成時の初期化を行います。\\n\\n```php\\nclass Counter {\\n    public $count;\\n    \\n    public function __construct($c) {\\n        $this->count = $c;\\n    }\\n}\\n\\n$cnt = new Counter(5);\\necho $cnt->count;\\n```\\n\\n=> 5\\n\\n`$this` は自分自身のインスタンスを指します。"
    },
    {
      "title": "継承",
      "content": "`extends` で親クラスを継承します。\\n\\n```php\\nclass Vehicle {\\n    public function move() {\\n        echo '移動中';\\n    }\\n}\\n\\nclass Car extends Vehicle { }\\n\\n$car = new Car();\\n$car->move();\\n```\\n\\n=> 移動中\\n\\n子クラスは親クラスのプロパティとメソッドを引き継ぎます。"
    },
    {
      "title": "インターフェース",
      "content": "`interface` でメソッドの契約を定義し、`implements` で実装します。\\n\\n```php\\ninterface Runner {\\n    public function run();\\n}\\n\\nclass Robot implements Runner {\\n    public function run() {\\n        echo '実行中';\\n    }\\n}\\n```\\n\\nインターフェースを実装するクラスは、定義されたメソッドを必ず持ちます。"
    },
    {
      "title": "配列関数（map/filter）",
      "content": "`array_map` と `array_filter` でコレクションを変換・抽出します。\\n\\n```php\\n$nums = [1, 2, 3, 4, 5];\\n\\n// 各要素を2乗\\n$squared = array_map(fn($n) => $n * $n, $nums);\\n// => [1, 4, 9, 16, 25]\\n\\n// 3以上を抽出\\n$big = array_filter($nums, fn($n) => $n >= 3);\\n// => [3, 4, 5]\\n```"
    },
    {
      "title": "名前空間とNull合体演算子",
      "content": "`namespace` でクラスを整理し、`??` でnullの場合のデフォルト値を指定します。\\n\\n```php\\nnamespace App;\\n\\nclass Hello {\\n    public function say() {\\n        echo 'こんにちは';\\n    }\\n}\\n\\n// Null合体演算子\\n$value = null;\\necho $value ?? 'デフォルト';\\n// => デフォルト\\n```"
    }
  ],
  "exercises": [
    {
      "title": "クラスを定義しよう",
      "description": "クラスを定義しようの仕組みを理解します",
      "tutorialSlides": [
        {
          "title": "クラスとは？",
          "content": "# オブジェクトの設計図\\n\\n**クラス** は、データ（プロパティ）と機能（メソッド）をまとめた **設計図** です。\\n\\n**身近な例：**\\n- たい焼き（やき）の「型」のようなもの\\n- 型（クラス）があれば、何個でも同じ形のたい焼き（オブジェクト）が作れる\\n\\n**クラスの役割：**\\n- どんなデータを持つか決める（名前、年齢など）\\n- どんな動きができるか決める（歩く、話すなど）"
        },
        {
          "title": "クラスの定義",
          "content": "# class キーワードで作る\\n\\n`class 名前 { }` で定義します。`new` でインスタンス（実体）を作成します。\\n\\n**コード例：**\\n```php\\nclass Dog {\\n    public $name;\\n}\\n$dog = new Dog();\\n```\\n\\n**何をしているの？**\\n1. `class Dog { }` → Dogという名前のクラスを作る\\n2. `public $name;` → nameというデータ（プロパティ）を持たせる\\n3. `new Dog()` → Dogクラスから実際のオブジェクトを作る\\n\\n**public とは？**\\n- 「外からアクセスできる」という意味\\n- プロパティやメソッドの前につける"
        }
      ],
      "correctCode": "// PHPコード開始タグ\\n<?php\\n// Catクラスを定義\\nclass Cat {\\n    // public $nameを定義\\n    public $name;\\n// ブロックを閉じる\\n}\\n// $catにnew Cat()を代入\\n$cat = new Cat();\\n// $cat->nameに'タマ'を代入\\n$cat->name = 'タマ';\\n// $cat->nameを出力\\necho $cat->name;\\n// PHPコード終了タグ\\n?>",
      "holeyCode": "// PHPコード開始タグ\\n___\\n// Catクラスを定義\\n___ ___ {\\n    // public $nameを定義\\n    ___ $___;\\n// ブロックを閉じる\\n___\\n// $catにnew Cat()を代入\\n$___ = ___ ___();\\n// $cat->nameに'タマ'を代入\\n$___->___ = '___';\\n// $cat->nameを出力\\n___ $___->___;\\n// PHPコード終了タグ\\n___",
      "correctLines": [
          "// PHPコード開始タグ",
          "<?php",
          "// Catクラスを定義",
          "class Cat {",
          "    // public $nameを定義",
          "    public $name;",
          "// ブロックを閉じる",
          "}",
          "// $catにnew Cat()を代入",
          "$cat = new Cat();",
          "// $cat->nameに'タマ'を代入",
          "$cat->name = 'タマ';",
          "// $cat->nameを出力",
          "echo $cat->name;",
          "// PHPコード終了タグ",
          "?>"
        ],
      "lineHints": [
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
          null,
          "",
          null,
          ""
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
      "description": "コンストラクタを使おうの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "コンストラクタとは？",
          "content": "# 初期化の儀式\\n\\n**コンストラクタ** `__construct` は、オブジェクトが作られたときに **自動的に呼ばれる** 特別なメソッドです。\\n\\n**身近な例：**\\n- ロボットの電源を入れたときの「起動音」\\n- 作られた瞬間に決まった動きをする\\n\\n**コンストラクタの役割：**\\n- オブジェクトを作ると同時に、最初の設定を行う\\n- 名前や初期値を渡して保存する"
        },
        {
          "title": "__construct の使い方",
          "content": "# 初期値を設定\\n\\n`__construct` で初期化処理を行います。\\n\\n**コード例：**\\n```php\\nclass Box {\\n    public function __construct($size) {\\n        $this->size = $size;\\n    }\\n}\\n$box = new Box(10);\\n```\\n\\n**何をしているの？**\\n1. `new Box(10)` → Boxオブジェクトを作成、10を渡す\\n2. `__construct($size)` が自動で呼ばれる（$sizeに10が入る）\\n3. `$this->size = $size` → オブジェクトのsizeプロパティに保存\\n\\n**$this とは？**\\n- 「自分自身」を指す特別な変数\\n- クラスの中で「自分のデータ」にアクセスするときに使う"
        }
      ],
      "correctCode": "<?php\\n// Counterクラスを定義\\nclass Counter {\\n    // public $countを定義\\n    public $count;\\n    // __construct($c)でコンストラクタを定義\\n    public function __construct($c) {\\n        // $this->countに$cを代入\\n        $this->count = $c;\\n    }\\n}\\n// $cntにnew Counter(5)を代入\\n$cnt = new Counter(5);\\n// $cnt->countを出力\\necho $cnt->count;\\n?>",
      "holeyCode": "// PHPコード開始タグ\\n___\\n// Counterクラスを定義\\n___ ___ {\\n    // public $countを定義\\n    ___ $___;\\n    // __construct($c)でコンストラクタを定義\\n    ___ ___ ___($___) {\\n        // $this->countに$cを代入\\n        $___->___ = $___;\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___\\n// $cntにnew Counter(5)を代入\\n$___ = ___ ___(___);\\n// $cnt->countを出力\\n___ $___->___;\\n// PHPコード終了タグ\\n___",
      "correctLines": [
          "// PHPコード開始タグ",
          "<?php",
          "// Counterクラスを定義",
          "class Counter {",
          "    // public $countを定義",
          "    public $count;",
          "    // __construct($c)でコンストラクタを定義",
          "    public function __construct($c) {",
          "        // $this->countに$cを代入",
          "        $this->count = $c;",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
          "}",
          "// $cntにnew Counter(5)を代入",
          "$cnt = new Counter(5);",
          "// $cnt->countを出力",
          "echo $cnt->count;",
          "// PHPコード終了タグ",
          "?>"
        ],
      "lineHints": [
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
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
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
      "description": "継承について学びます",
      "tutorialSlides": [
        {
          "title": "継承とは？",
          "content": "# クラスの拡張\\n\\n**継承** を使うと、親クラスの機能を引き継いだ子クラスを作れます。\\n\\n**身近な例：**\\n- 「動物」という親クラス（歩く、食べるができる）\\n- 「犬」という子クラス（動物の機能 + 吠えるができる）\\n- 「猫」という子クラス（動物の機能 + ニャーと鳴くができる）\\n\\n親の機能をそのまま使えて、さらに **新しい機能を追加** できます。"
        },
        {
          "title": "extends で継承",
          "content": "# 親クラスを拡張\\n\\n`extends`（エクステンズ）キーワードで親クラスを指定します。子クラスは親クラスのメソッドを使えます。\\n\\n**コード例：**\\n```php\\nclass Animal {\\n    public function eat() { echo 'eating'; }\\n}\\nclass Dog extends Animal { }\\n\\n$dog = new Dog();\\n$dog->eat();\\n```\\n\\n=> eating（親のメソッドが使える！）\\n\\n**何が起こるの？**\\n1. `Animal` クラスに `eat` メソッドがある\\n2. `Dog extends Animal` → DogはAnimalを継承\\n3. Dogは自分で `eat` を作らなくても、Animalの `eat` が使える\\n\\n**extends = 「拡張する」** という意味です。"
        }
      ],
      "correctCode": "<?php\\n// Vehicleクラスを定義\\nclass Vehicle {\\n    // move()メソッドを定義\\n    public function move() {\\n        // '移動中'を出力\\n        echo '移動中';\\n    }\\n}\\n// CarがVehicleを継承\\nclass Car extends Vehicle { }\\n// $carにnew Car()を代入\\n$car = new Car();\\n// $car->move()を呼び出し\\n$car->move();\\n?>",
      "holeyCode": "// PHPコード開始タグ\\n___\\n// Vehicleクラスを定義\\n___ ___ {\\n    // move()メソッドを定義\\n    ___ ___ ___() {\\n        // '移動中'を出力\\n        ___ '___';\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___\\n// CarがVehicleを継承\\n___ ___ ___ ___ { }\\n// $carにnew Car()を代入\\n$___ = ___ ___();\\n// $car->move()を呼び出し\\n$___->___();\\n// PHPコード終了タグ\\n___",
      "correctLines": [
          "// PHPコード開始タグ",
          "<?php",
          "// Vehicleクラスを定義",
          "class Vehicle {",
          "    // move()メソッドを定義",
          "    public function move() {",
          "        // '移動中'を出力",
          "        echo '移動中';",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
          "}",
          "// CarがVehicleを継承",
          "class Car extends Vehicle { }",
          "// $carにnew Car()を代入",
          "$car = new Car();",
          "// $car->move()を呼び出し",
          "$car->move();",
          "// PHPコード終了タグ",
          "?>"
        ],
      "lineHints": [
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
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
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
      "description": "インターフェースについて学びます",
      "tutorialSlides": [
        {
          "title": "インターフェースとは？",
          "content": "# メソッドの約束事\\n\\n**インターフェース** は、「このメソッドを必ず作ってね」という **約束** を決めるものです。\\n\\n**身近な例：**\\n- 「充電器」のインターフェース\\n- USB-Cの形なら、どのメーカーの充電器でも使える\\n- 「この形（メソッド）を持っていること」が約束\\n\\n**インターフェースの役割：**\\n- クラスに「このメソッドを必ず作れ」と指示する\\n- 違うクラスでも同じ使い方ができるようになる"
        },
        {
          "title": "interface と implements",
          "content": "# 約束を守る\\n\\n`interface`（インターフェース）で約束を定義し、`implements`（インプリメンツ）で「その約束を守ります」と宣言します。\\n\\n**コード例：**\\n```php\\ninterface Greet {\\n    public function hello();\\n}\\nclass Person implements Greet {\\n    public function hello() { echo 'hi'; }\\n}\\n```\\n\\n**何をしているの？**\\n1. `interface Greet` → 「helloメソッドを持つこと」という約束を作る\\n2. `class Person implements Greet` → Personは「Greetの約束を守る」と宣言\\n3. `public function hello()` → 約束通りhelloメソッドを作る（作らないとエラー！）\\n\\n**ポイント：**\\n- interface = 「約束」の定義\\n- implements = 「約束を守る」という宣言"
        }
      ],
      "correctCode": "<?php\\n// Runnerインターフェースを定義\\ninterface Runner {\\n    // run()メソッドを宣言\\n    public function run();\\n}\\n// RobotがRunnerを実装\\nclass Robot implements Runner {\\n    // run()メソッドを実装\\n    public function run() {\\n        // '実行中'を出力\\n        echo '実行中';\\n    }\\n}\\n// $rにnew Robot()を代入\\n$r = new Robot();\\n// $r->run()を呼び出し\\n$r->run();\\n?>",
      "holeyCode": "// PHPコード開始タグ\\n___\\n// Runnerインターフェースを定義\\n___ ___ {\\n    // run()メソッドを宣言\\n    ___ ___ ___();\\n// ブロックを閉じる\\n___\\n// RobotがRunnerを実装\\n___ ___ ___ ___ {\\n    // run()メソッドを実装\\n    ___ ___ ___() {\\n        // '実行中'を出力\\n        ___ '___';\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___\\n// $rにnew Robot()を代入\\n$___ = ___ ___();\\n// $r->run()を呼び出し\\n$___->___();\\n// PHPコード終了タグ\\n___",
      "correctLines": [
          "// PHPコード開始タグ",
          "<?php",
          "// Runnerインターフェースを定義",
          "interface Runner {",
          "    // run()メソッドを宣言",
          "    public function run();",
          "// ブロックを閉じる",
          "}",
          "// RobotがRunnerを実装",
          "class Robot implements Runner {",
          "    // run()メソッドを実装",
          "    public function run() {",
          "        // '実行中'を出力",
          "        echo '実行中';",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
          "}",
          "// $rにnew Robot()を代入",
          "$r = new Robot();",
          "// $r->run()を呼び出し",
          "$r->run();",
          "// PHPコード終了タグ",
          "?>"
        ],
      "lineHints": [
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
          ""
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
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "array_map とは？",
          "content": "# 各要素を変換\\n\\n**array_map**（アレイマップ）は、配列の **全ての要素に同じ処理をする** 関数です。\\n\\n**身近な例：**\\n- お菓子工場のベルトコンベア\\n- 流れてくるクッキーに、全部チョコをかける\\n- 入力: プレーンクッキー → 出力: チョコクッキー\\n\\n**array_mapの役割：**\\n- 配列の各要素を「変身」させる\\n- 元の配列は変えずに、新しい配列を作る"
        },
        {
          "title": "array_map の使い方",
          "content": "# コールバック関数を渡す\\n\\n`array_map(関数, 配列)` の形で使います。\\n\\n**コード例：**\\n```php\\n$nums = [1, 2, 3];\\n$doubled = array_map(fn($n) => $n * 2, $nums);\\n// [2, 4, 6]\\n```\\n\\n**何をしているの？**\\n1. `$nums = [1, 2, 3]` → 元の配列を用意\\n2. `fn($n) => $n * 2` → 「2倍にする」という処理を定義\\n3. `array_map(...)` → 各要素に処理を適用\\n4. 結果: [2, 4, 6] という新しい配列ができる\\n\\n**ポイント：**\\n- 第1引数: 処理する関数\\n- 第2引数: 処理したい配列\\n- 元の配列 `$nums` は変わらない"
        }
      ],
      "correctCode": "<?php\\n// 配列を定義（1, 2, 3）\\n$nums = [1, 2, 3];\\n// array_mapで各要素を変換\\n$squared = array_map(fn($n) => $n * $n, $nums);\\n// print_rで配列を出力\\nprint_r($squared);\\n?>",
      "holeyCode": "// PHPコード開始タグ\\n___\\n// 配列を定義（1, 2, 3）\\n$___ = [___, ___, ___];\\n// array_mapで各要素を変換\\n$___ = ___(___(___) => $___ * $___, $___);\\n// print_rで配列を出力\\n___($___);\\n// PHPコード終了タグ\\n___",
      "correctLines": [
          "// PHPコード開始タグ",
          "<?php",
          "// 配列を定義（1, 2, 3）",
          "$nums = [1, 2, 3];",
          "// array_mapで各要素を変換",
          "$squared = array_map(fn($n) => $n * $n, $nums);",
          "// print_rで配列を出力",
          "print_r($squared);",
          "// PHPコード終了タグ",
          "?>"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
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
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "array_filter とは？",
          "content": "# 条件でフィルタ（選別）\\n\\n**array_filter**（アレイフィルター）は、配列から **条件に合うものだけを選び出す** 関数です。\\n\\n**身近な例：**\\n- 果物の選別機械\\n- 「大きいリンゴだけ通す」というフィルター\\n- 小さいリンゴは通らない\\n\\n**array_filterの役割：**\\n- 条件に合う要素だけを残す\\n- 条件に合わない要素は捨てる"
        },
        {
          "title": "array_filter の使い方",
          "content": "# 真（true）を返す要素を残す\\n\\n`array_filter(配列, 条件の関数)` の形で使います。\\n\\n**コード例：**\\n```php\\n$nums = [1, 2, 3, 4, 5];\\n$big = array_filter($nums, fn($n) => $n > 3);\\n// [4, 5]\\n```\\n\\n**何をしているの？**\\n1. `$nums = [1, 2, 3, 4, 5]` → 元の配列を用意\\n2. `fn($n) => $n > 3` → 「3より大きい？」という条件\\n3. 各要素をチェック: 1→No, 2→No, 3→No, 4→Yes, 5→Yes\\n4. Yesだった要素だけ残る: [4, 5]\\n\\n**ポイント：**\\n- 第1引数: フィルタしたい配列\\n- 第2引数: 条件を判定する関数\\n- trueを返した要素だけが残る"
        }
      ],
      "correctCode": "<?php\\n// $numsに[1, 2, 3, 4, 5]を代入\\n$nums = [1, 2, 3, 4, 5];\\n// array_filterで3以上を抽出し$resultに代入\\n$result = array_filter($nums, fn($n) => $n >= 3);\\n// $resultをprint_rで出力\\nprint_r($result);\\n?>",
      "holeyCode": "// PHPコード開始タグ\\n___\\n// $numsに[1, 2, 3, 4, 5]を代入\\n$___ = [___, ___, ___, ___, ___];\\n// array_filterで3以上を抽出し$resultに代入\\n$___ = ___($___, ___($___) => $___ >= ___);\\n// $resultをprint_rで出力\\n___($___);\\n// PHPコード終了タグ\\n___",
      "correctLines": [
          "// PHPコード開始タグ",
          "<?php",
          "// $numsに[1, 2, 3, 4, 5]を代入",
          "$nums = [1, 2, 3, 4, 5];",
          "// array_filterで3以上を抽出し$resultに代入",
          "$result = array_filter($nums, fn($n) => $n >= 3);",
          "// $resultをprint_rで出力",
          "print_r($result);",
          "// PHPコード終了タグ",
          "?>"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
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
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "アロー関数とは？",
          "content": "# 短く書ける関数\\n\\n**アロー関数** `fn() =>` は、無名関数（名前のない関数）を **とても短く書く** 方法です。\\n\\n**身近な例：**\\n- メモ用紙に一言だけ書く感じ\\n- 「3倍にする」→ `fn($n) => $n * 3`\\n- 短くてスッキリ！\\n\\n**なぜ便利？**\\n- 1行で書けるから読みやすい\\n- array_map や array_filter と一緒に使うと便利"
        },
        {
          "title": "アロー関数の書き方",
          "content": "# fn と =>（矢印）\\n\\n`fn(引数) => 式` の形で書きます。矢印の右側が戻り値になります。\\n\\n**コード例：**\\n```php\\n$add = fn($a, $b) => $a + $b;\\necho $add(2, 3); // 5\\n```\\n\\n**何をしているの？**\\n1. `fn($a, $b)` → 引数を2つ受け取る\\n2. `=> $a + $b` → 2つを足した結果を返す\\n3. `$add(2, 3)` → 2と3を渡すと、5が返ってくる\\n\\n**普通の書き方との比較：**\\n```php\\n// 普通の書き方（長い）\\nfunction($n) { return $n * 3; }\\n\\n// アロー関数（短い）\\nfn($n) => $n * 3\\n```\\n\\n**ポイント：**\\n- `fn` = function の短縮形\\n- `=>` = 「矢印」で結果を指す\\n- `return` は書かなくてOK（自動で返される）"
        }
      ],
      "correctCode": "<?php\\n// nを3倍にする$triple関数を定義\\n$triple = fn($n) => $n * 3;\\n// echoで出力\\necho $triple(7);\\n?>",
      "holeyCode": "// PHPコード開始タグ\\n___\\n// nを3倍にする$triple関数を定義\\n$___ = ___($___) => $___ * ___;\\n// echoで出力\\n___ $___(___);\\n// PHPコード終了タグ\\n___",
      "correctLines": [
          "// PHPコード開始タグ",
          "<?php",
          "// nを3倍にする$triple関数を定義",
          "$triple = fn($n) => $n * 3;",
          "// echoで出力",
          "echo $triple(7);",
          "// PHPコード終了タグ",
          "?>"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
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
      "description": "プログラムのエラーを適切に処理して、安全に動作させる方法を学びます",
      "tutorialSlides": [
        {
          "title": "例外処理とは？",
          "content": "# エラーに対処する\\n\\n**例外処理** を使うと、エラーが起きても **プログラムを止めずに対処** できます。\\n\\n**身近な例：**\\n- サーカスの空中ブランコの下に張る「安全ネット」\\n- 落ちても（エラーが起きても）大丈夫\\n- ネットがあるから安心して挑戦できる\\n\\n**なぜ必要？**\\n- ファイルが見つからない\\n- ネットワークがつながらない\\n- 想定外のデータが来た\\n→ こんなとき、例外処理があれば安全に対処できる"
        },
        {
          "title": "try-catch（トライ・キャッチ）",
          "content": "# 例外を捕まえる\\n\\n`try`（トライ）ブロックでエラーが起きると、`catch`（キャッチ）ブロックが実行されます。\\n\\n**コード例：**\\n```php\\ntry {\\n    throw new Exception('error');\\n} catch (Exception $e) {\\n    echo 'caught';\\n}\\n```\\n\\n**何をしているの？**\\n1. `try { }` → 「この中でエラーが起きるかも」と囲む\\n2. `throw new Exception('error')` → わざとエラー（例外）を投げる\\n3. `catch (Exception $e)` → 投げられた例外をキャッチ\\n4. `echo 'caught'` → キャッチしたら、この処理を実行\\n\\n**ポイント：**\\n- try = 「試す」\\n- catch = 「捕まえる」\\n- throw = 「投げる」\\n- エラーが起きなければ、catchは実行されない"
        }
      ],
      "correctCode": "<?php\\n// tryで例外を発生させる可能性があるコードを囲む\\ntry {\\n    // throwで例外を投げる\\n    throw new Exception('おっと');\\n// catchで例外を捕捉\\n} catch (Exception $e) {\\n    // echoで出力\\n    echo 'キャッチ';\\n}\\n?>",
      "holeyCode": "// PHPコード開始タグ\\n___\\n// tryで例外を発生させる可能性があるコードを囲む\\n___ {\\n    // throwで例外を投げる\\n    ___ ___ ___('___');\\n// catchで例外を捕捉\\n} ___ (___ $___) {\\n    // echoで出力\\n    ___ '___';\\n// ブロックを閉じる\\n___\\n// PHPコード終了タグ\\n___",
      "correctLines": [
          "// PHPコード開始タグ",
          "<?php",
          "// tryで例外を発生させる可能性があるコードを囲む",
          "try {",
          "    // throwで例外を投げる",
          "    throw new Exception('おっと');",
          "// catchで例外を捕捉",
          "} catch (Exception $e) {",
          "    // echoで出力",
          "    echo 'キャッチ';",
          "// ブロックを閉じる",
          "}",
          "// PHPコード終了タグ",
          "?>"
        ],
      "lineHints": [
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
          null,
          ""
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
      "description": "名前空間（namespace）について学びます",
      "tutorialSlides": [
        {
          "title": "名前空間とは？",
          "content": "# クラスの整理棚\\n\\n**名前空間（namespace）** を使うと、クラスを **グループ分け** して名前の衝突を防げます。\\n\\n**身近な例：**\\n- 学校の「クラス分け」\\n- 「1年A組の田中さん」と「2年B組の田中さん」は別人\\n- 同じ名前でも、グループが違えば区別できる\\n\\n**なぜ必要？**\\n- 大きなプログラムには、たくさんのクラスがある\\n- 同じ名前のクラスがあっても、衝突しない\\n- 整理されて見つけやすくなる"
        },
        {
          "title": "namespace の使い方",
          "content": "# namespace キーワード\\n\\nファイルの先頭で `namespace`（ネームスペース）を宣言します。\\n\\n**コード例：**\\n```php\\nnamespace App\\Models;\\nclass User { }\\n```\\n\\n**何をしているの？**\\n1. `namespace App\\Models;` → 「App\\Models」というグループに所属\\n2. `class User { }` → このUserクラスは「App\\Models\\User」になる\\n\\n**別のファイルにも同じ名前があったら？**\\n```php\\n// ファイル1: App\\Models\\User\\n// ファイル2: App\\Admin\\User\\n// → 違うグループだから衝突しない！\\n```\\n\\n**ポイント：**\\n- `\\`（バックスラッシュ）でグループを区切る\\n- 「フォルダ」のような階層構造が作れる"
        }
      ],
      "correctCode": "<?php\\n// namespace Appを宣言\\nnamespace App;\\n// Helloクラスを定義\\nclass Hello {\\n    // say()メソッドを定義\\n    public function say() {\\n        // 'こんにちは'を出力\\n        echo 'こんにちは';\\n    }\\n}\\n// $hにnew Hello()を代入\\n$h = new Hello();\\n// $h->say()を呼び出し\\n$h->say();\\n?>",
      "holeyCode": "// PHPコード開始タグ\\n___\\n// namespace Appを宣言\\n___ ___;\\n// Helloクラスを定義\\n___ ___ {\\n    // say()メソッドを定義\\n    ___ ___ ___() {\\n        // 'こんにちは'を出力\\n        ___ '___';\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___\\n// $hにnew Hello()を代入\\n$___ = ___ ___();\\n// $h->say()を呼び出し\\n$___->___();\\n// PHPコード終了タグ\\n___",
      "correctLines": [
          "// PHPコード開始タグ",
          "<?php",
          "// namespace Appを宣言",
          "namespace App;",
          "// Helloクラスを定義",
          "class Hello {",
          "    // say()メソッドを定義",
          "    public function say() {",
          "        // 'こんにちは'を出力",
          "        echo 'こんにちは';",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
          "}",
          "// $hにnew Hello()を代入",
          "$h = new Hello();",
          "// $h->say()を呼び出し",
          "$h->say();",
          "// PHPコード終了タグ",
          "?>"
        ],
      "lineHints": [
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
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
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
      "description": "Null合体演算子 ??の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "Null合体演算子とは？",
          "content": "# null のときの代わり\\n\\n**??**（Null合体演算子）は、左側が `null`（ヌル＝空っぽ）のときに **右側の値を返す** 演算子です。\\n\\n**身近な例：**\\n- 「名前がなければ『ゲスト』と呼ぶ」\\n- 予備の計画を用意しておく\\n- Aがダメなら、Bを使う\\n\\n**なぜ便利？**\\n- ユーザーが名前を入力しなかったとき → デフォルト名を使う\\n- データがなかったとき → 初期値を使う"
        },
        {
          "title": "?? の使い方",
          "content": "# シンプルな null チェック\\n\\n`$a ?? $b` は、`$a` が null なら `$b` を返します。\\n\\n**コード例：**\\n```php\\n$name = null;\\necho $name ?? 'Guest'; // Guest\\n```\\n\\n**何をしているの？**\\n1. `$name = null` → $name は空っぽ\\n2. `$name ?? 'Guest'` → $name が null かチェック\\n3. null だったので → 'Guest' を返す\\n\\n**もし値があったら？**\\n```php\\n$name = 'Taro';\\necho $name ?? 'Guest'; // Taro（nullじゃないから$nameを使う）\\n```\\n\\n**ポイント：**\\n- `??` の左側が null → 右側を返す\\n- `??` の左側が null じゃない → 左側をそのまま返す\\n- デフォルト値の設定にとても便利"
        }
      ],
      "correctCode": "<?php\\n// nullを代入\\n$value = null;\\n// ??でnullの場合のデフォルト値を指定\\necho $value ?? 'デフォルト';\\n?>",
      "holeyCode": "// PHPコード開始タグ\\n___\\n// nullを代入\\n$___ = ___;\\n// ??でnullの場合のデフォルト値を指定\\n___ $___ ___ '___';\\n// PHPコード終了タグ\\n___",
      "correctLines": [
          "// PHPコード開始タグ",
          "<?php",
          "// nullを代入",
          "$value = null;",
          "// ??でnullの場合のデフォルト値を指定",
          "echo $value ?? 'デフォルト';",
          "// PHPコード終了タグ",
          "?>"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
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

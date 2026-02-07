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
            "content": "# オブジェクトの設計図（せっけいず）\\n\\n**クラス** は、データ（プロパティ）と機能（きのう）（メソッド）をまとめた **設計図** です。\\n\\n**身近（みぢか）な例（れい）：**\\n- たい焼き（やき）の「型（かた）」のようなもの\\n- 型（クラス）があれば、何個でも同じ形のたい焼き（オブジェクト）が作れる\\n\\n**クラスの役割（やくわり）：**\\n- どんなデータを持つか決める（名前、年齢など）\\n- どんな動きができるか決める（歩く、話すなど）"
          },
          {
            "title": "クラスの定義（ていぎ）",
            "content": "# class キーワードで作る\\n\\n`class 名前 { }` で定義します。`new` でインスタンス（実体）を作成します。\\n\\n**コード例：**\\n```php\\nclass Dog {\\n    public $name;\\n}\\n$dog = new Dog();\\n```\\n\\n**何をしているの？**\\n1. `class Dog { }` → Dogという名前のクラスを作る\\n2. `public $name;` → nameというデータ（プロパティ）を持たせる\\n3. `new Dog()` → Dogクラスから実際（じっさい）のオブジェクトを作る\\n\\n**public とは？**\\n- 「外からアクセスできる」という意味\\n- プロパティやメソッドの前につける"
          }
        ],
        "initialDisplayMode": "holey",
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
          "others": ["public", "new", "->", "echo", "<?php", "Cat", "name", "}", "Tama", "$cat", "?>", "タマ"]
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
        "description": "オブジェクト作成時に自動で呼ばれる「コンストラクタ」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 2,
        "tutorialSlides": [
          {
            "title": "コンストラクタとは？",
            "content": "# 初期化（しょきか）の儀式（ぎしき）\\n\\n**コンストラクタ** `__construct` は、オブジェクトが作られたときに **自動的（じどうてき）に呼ばれる** 特別なメソッドです。\\n\\n**身近（みぢか）な例（れい）：**\\n- ロボットの電源（でんげん）を入れたときの「起動音（きどうおん）」\\n- 作られた瞬間（しゅんかん）に決まった動きをする\\n\\n**コンストラクタの役割（やくわり）：**\\n- オブジェクトを作ると同時に、最初の設定（せってい）を行う\\n- 名前や初期値（しょきち）を渡して保存する"
          },
          {
            "title": "__construct の使い方",
            "content": "# 初期値（しょきち）を設定（せってい）\\n\\n`__construct` で初期化処理（しょきかしょり）を行います。\\n\\n**コード例：**\\n```php\\nclass Box {\\n    public function __construct($size) {\\n        $this->size = $size;\\n    }\\n}\\n$box = new Box(10);\\n```\\n\\n**何をしているの？**\\n1. `new Box(10)` → Boxオブジェクトを作成、10を渡す\\n2. `__construct($size)` が自動で呼ばれる（$sizeに10が入る）\\n3. `$this->size = $size` → オブジェクトのsizeプロパティに保存\\n\\n**$this とは？**\\n- 「自分自身（じぶんじしん）」を指（さ）す特別な変数\\n- クラスの中で「自分のデータ」にアクセスするときに使う"
          }
        ],
        "initialDisplayMode": "holey",
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
          "others": ["class", "public", "$this", "new", "echo", "<?php", "Counter", "count", "c", "}", "5", "$cnt", "?>"]
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
            "title": "継承（けいしょう）とは？",
            "content": "# クラスの拡張（かくちょう）\\n\\n**継承（けいしょう）** を使うと、親（おや）クラスの機能を引き継（つ）いだ子クラスを作れます。\\n\\n**身近（みぢか）な例（れい）：**\\n- 「動物（どうぶつ）」という親クラス（歩く、食べるができる）\\n- 「犬」という子クラス（動物の機能 + 吠（ほ）えるができる）\\n- 「猫」という子クラス（動物の機能 + ニャーと鳴（な）くができる）\\n\\n親の機能をそのまま使えて、さらに **新しい機能を追加（ついか）** できます。"
          },
          {
            "title": "extends で継承（けいしょう）",
            "content": "# 親クラスを拡張（かくちょう）\\n\\n`extends`（エクステンズ）キーワードで親クラスを指定（してい）します。子クラスは親クラスのメソッドを使えます。\\n\\n**コード例：**\\n```php\\nclass Animal {\\n    public function eat() { echo '食事中'; }\\n}\\nclass Dog extends Animal { }\\n\\n$dog = new Dog();\\n$dog->eat();  // => eating（親のメソッドが使える！）\\n```\\n\\n**何が起こるの？**\\n1. `Animal` クラスに `eat` メソッドがある\\n2. `Dog extends Animal` → DogはAnimalを継承\\n3. Dogは自分で `eat` を作らなくても、Animalの `eat` が使える\\n\\n**extends = 「拡張する」** という意味です。"
          }
        ],
        "initialDisplayMode": "holey",
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
          "others": ["class", "function", "echo", "new", "->", "<?php", "Vehicle", "move", "moving", "}", "Car", "?>", "移動中"]
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
        "description": "メソッドの約束を定義する「インターフェース」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "インターフェースとは？",
            "content": "# メソッドの約束（やくそく）事（ごと）\\n\\n**インターフェース** は、「このメソッドを必（かなら）ず作ってね」という **約束** を決めるものです。\\n\\n**身近（みぢか）な例（れい）：**\\n- 「充電器（じゅうでんき）」のインターフェース\\n- USB-Cの形なら、どのメーカーの充電器でも使える\\n- 「この形（メソッド）を持っていること」が約束\\n\\n**インターフェースの役割（やくわり）：**\\n- クラスに「このメソッドを必ず作れ」と指示（しじ）する\\n- 違（ちが）うクラスでも同じ使い方ができるようになる"
          },
          {
            "title": "interface と implements",
            "content": "# 約束（やくそく）を守（まも）る\\n\\n`interface`（インターフェース）で約束を定義（ていぎ）し、`implements`（インプリメンツ）で「その約束を守ります」と宣言（せんげん）します。\\n\\n**コード例：**\\n```php\\ninterface Greet {\\n    public function hello();\\n}\\nclass Person implements Greet {\\n    public function hello() { echo 'こんにちは'; }\\n}\\n```\\n\\n**何をしているの？**\\n1. `interface Greet` → 「helloメソッドを持つこと」という約束を作る\\n2. `class Person implements Greet` → Personは「Greetの約束を守る」と宣言\\n3. `public function hello()` → 約束通りhelloメソッドを作る（作らないとエラー！）\\n\\n**ポイント：**\\n- interface = 「約束」の定義\\n- implements = 「約束を守る」という宣言"
          }
        ],
        "initialDisplayMode": "holey",
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
          "others": ["function", "implements", "echo", "new", "->", "<?php", "Runner", "run", "}", "Robot", "running", "?>", "実行中"]
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
        "description": "配列の各要素を変換する「array_map」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "array_map とは？",
            "content": "# 各要素（ようそ）を変換（へんかん）\\n\\n**array_map**（アレイマップ）は、配列（はいれつ）の **全（すべ）ての要素に同じ処理（しょり）をする** 関数（かんすう）です。\\n\\n**身近（みぢか）な例（れい）：**\\n- お菓子（かし）工場（こうじょう）のベルトコンベア\\n- 流れてくるクッキーに、全部（ぜんぶ）チョコをかける\\n- 入力: プレーンクッキー → 出力: チョコクッキー\\n\\n**array_mapの役割（やくわり）：**\\n- 配列の各要素を「変身」させる\\n- 元の配列は変えずに、新しい配列を作る"
          },
          {
            "title": "array_map の使い方",
            "content": "# コールバック関数（かんすう）を渡（わた）す\\n\\n`array_map(関数, 配列)` の形で使います。\\n\\n**コード例：**\\n```php\\n$nums = [1, 2, 3];\\n$doubled = array_map(fn($n) => $n * 2, $nums);\\n// [2, 4, 6]\\n```\\n\\n**何をしているの？**\\n1. `$nums = [1, 2, 3]` → 元の配列を用意\\n2. `fn($n) => $n * 2` → 「2倍にする」という処理を定義\\n3. `array_map(...)` → 各要素に処理を適用（てきよう）\\n4. 結果: [2, 4, 6] という新しい配列ができる\\n\\n**ポイント：**\\n- 第1引数（ひきすう）: 処理する関数\\n- 第2引数: 処理したい配列\\n- 元の配列 `$nums` は変わらない"
          }
        ],
        "initialDisplayMode": "holey",
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
          "others": ["3", "print_r($squared);", "<?php", "nums", "1, 2, 3", "squared", "?>"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Array\
(\
    [0] => 1\
    [1] => 4\
    [2] => 9\
)\
"
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
            "content": "# 条件（じょうけん）でフィルタ（選別）\\n\\n**array_filter**（アレイフィルター）は、配列（はいれつ）から **条件に合うものだけを選（えら）び出す** 関数です。\\n\\n**身近（みぢか）な例（れい）：**\\n- 果物（くだもの）の選別（せんべつ）機械（きかい）\\n- 「大きいリンゴだけ通（とお）す」というフィルター\\n- 小さいリンゴは通らない\\n\\n**array_filterの役割（やくわり）：**\\n- 条件に合う要素だけを残す\\n- 条件に合わない要素は捨（す）てる"
          },
          {
            "title": "array_filter の使い方",
            "content": "# 真（true）を返す要素を残す\\n\\n`array_filter(配列, 条件の関数)` の形で使います。\\n\\n**コード例：**\\n```php\\n$nums = [1, 2, 3, 4, 5];\\n$big = array_filter($nums, fn($n) => $n > 3);\\n// [4, 5]\\n```\\n\\n**何をしているの？**\\n1. `$nums = [1, 2, 3, 4, 5]` → 元の配列を用意\\n2. `fn($n) => $n > 3` → 「3より大きい？」という条件\\n3. 各要素をチェック: 1→No, 2→No, 3→No, 4→Yes, 5→Yes\\n4. Yesだった要素だけ残る: [4, 5]\\n\\n**ポイント：**\\n- 第1引数: フィルタしたい配列\\n- 第2引数: 条件を判定（はんてい）する関数\\n- trueを返した要素だけが残る"
          }
        ],
        "initialDisplayMode": "holey",
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
          "others": ["5", "print_r", "<?php", "nums", "1, 2, 3, 4, 5", "3", "result", "?>"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Array\
(\
    [2] => 3\
    [3] => 4\
    [4] => 5\
)\
"
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
            "title": "アロー関数（かんすう）とは？",
            "content": "# 短（みじか）く書（か）ける関数\\n\\n**アロー関数** `fn() =>` は、無名（むめい）関数（名前のない関数）を **とても短く書く** 方法です。\\n\\n**身近（みぢか）な例（れい）：**\\n- メモ用紙（ようし）に一言（ひとこと）だけ書く感じ\\n- 「3倍にする」→ `fn($n) => $n * 3`\\n- 短くてスッキリ！\\n\\n**なぜ便利（べんり）？**\\n- 1行で書けるから読みやすい\\n- array_map や array_filter と一緒（いっしょ）に使うと便利"
          },
          {
            "title": "アロー関数の書き方",
            "content": "# fn と =>（矢印）\\n\\n`fn(引数) => 式` の形で書きます。矢印（やじるし）の右側が戻（もど）り値（ち）になります。\\n\\n**コード例：**\\n```php\\n$add = fn($a, $b) => $a + $b;\\necho $add(2, 3); // 5\\n```\\n\\n**何をしているの？**\\n1. `fn($a, $b)` → 引数（ひきすう）を2つ受け取る\\n2. `=> $a + $b` → 2つを足した結果を返す\\n3. `$add(2, 3)` → 2と3を渡すと、5が返ってくる\\n\\n**普通（ふつう）の書き方との比較（ひかく）：**\\n```php\\n// 普通の書き方（長い）\\nfunction($n) { return $n * 3; }\\n\\n// アロー関数（短い）\\nfn($n) => $n * 3\\n```\\n\\n**ポイント：**\\n- `fn` = function の短縮形（たんしゅくけい）\\n- `=>` = 「矢印」で結果を指す\\n- `return` は書かなくてOK（自動で返される）"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "<?php\\n// fnでアロー関数を定義\\n$triple = fn($n) => $n * 3;\\n// echoで出力\\necho $triple(7);\\n?>",
        "holeyCode": "___\\n// fnでアロー関数を定義\\n$triple = fn($n) => $n * ___;\\n// echoで出力\\necho ___(7);\\n___",
        "correctLines": [
          "<?php",
          "// fnでアロー関数を定義",
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
          "others": ["echo", "<?php", "3", "$triple", "?>"]
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
            "title": "例外処理（れいがいしょり）とは？",
            "content": "# エラーに対処（たいしょ）する\\n\\n**例外処理（れいがいしょり）** を使うと、エラーが起きても **プログラムを止めずに対処** できます。\\n\\n**身近（みぢか）な例（れい）：**\\n- サーカスの空中（くうちゅう）ブランコの下に張（は）る「安全（あんぜん）ネット」\\n- 落ちても（エラーが起きても）大丈夫（だいじょうぶ）\\n- ネットがあるから安心して挑戦（ちょうせん）できる\\n\\n**なぜ必要（ひつよう）？**\\n- ファイルが見つからない\\n- ネットワークがつながらない\\n- 想定外（そうていがい）のデータが来た\\n→ こんなとき、例外処理があれば安全に対処できる"
          },
          {
            "title": "try-catch（トライ・キャッチ）",
            "content": "# 例外（れいがい）を捕（つか）まえる\\n\\n`try`（トライ）ブロックでエラーが起きると、`catch`（キャッチ）ブロックが実行（じっこう）されます。\\n\\n**コード例：**\\n```php\\ntry {\\n    throw new Exception('エラー');\\n} catch (Exception $e) {\\n    echo 'キャッチ';\\n}\\n```\\n\\n**何をしているの？**\\n1. `try { }` → 「この中でエラーが起きるかも」と囲（かこ）む\\n2. `throw new Exception('エラー')` → わざとエラー（例外）を投げる\\n3. `catch (Exception $e)` → 投げられた例外をキャッチ\\n4. `echo 'キャッチ'` → キャッチしたら、この処理を実行\\n\\n**ポイント：**\\n- try = 「試（ため）す」\\n- catch = 「捕まえる」\\n- throw = 「投げる」\\n- エラーが起きなければ、catchは実行されない"
          }
        ],
        "initialDisplayMode": "holey",
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
          "others": ["try", "throw", "echo", "<?php", "oops", "e", "caught", "}", "?>", "おっと", "キャッチ"]
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
        "description": "クラスを整理する「名前空間」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 9,
        "tutorialSlides": [
          {
            "title": "名前空間（なまえくうかん）とは？",
            "content": "# クラスの整理棚（せいりだな）\\n\\n**名前空間（namespace）** を使うと、クラスを **グループ分け** して名前の衝突（しょうとつ）を防（ふせ）げます。\\n\\n**身近（みぢか）な例（れい）：**\\n- 学校の「クラス分け」\\n- 「1年A組の田中さん」と「2年B組の田中さん」は別人\\n- 同じ名前でも、グループが違（ちが）えば区別（くべつ）できる\\n\\n**なぜ必要（ひつよう）？**\\n- 大きなプログラムには、たくさんのクラスがある\\n- 同じ名前のクラスがあっても、衝突しない\\n- 整理されて見つけやすくなる"
          },
          {
            "title": "namespace の使い方",
            "content": "# namespace キーワード\\n\\nファイルの先頭（せんとう）で `namespace`（ネームスペース）を宣言（せんげん）します。\\n\\n**コード例：**\\n```php\\nnamespace App\\Models;\\nclass User { }\\n```\\n\\n**何をしているの？**\\n1. `namespace App\\Models;` → 「App\\Models」というグループに所属（しょぞく）\\n2. `class User { }` → このUserクラスは「App\\Models\\User」になる\\n\\n**別のファイルにも同じ名前があったら？**\\n```php\\n// ファイル1: App\\Models\\User\\n// ファイル2: App\\Admin\\User\\n// → 違うグループだから衝突しない！\\n```\\n\\n**ポイント：**\\n- `\\`（バックスラッシュ）でグループを区切（くぎ）る\\n- 「フォルダ」のような階層構造（かいそうこうぞう）が作れる"
          }
        ],
        "initialDisplayMode": "holey",
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
          "others": ["class", "function", "echo", "new", "->", "<?php", "App", "Hello", "say", "hello", "}", "?>", "こんにちは"]
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
        "description": "nullの場合のデフォルト値を設定する「??」演算子を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 10,
        "tutorialSlides": [
          {
            "title": "Null合体演算子（がったいえんざんし）とは？",
            "content": "# null のときの代（か）わり\\n\\n**??**（Null合体演算子）は、左側が `null`（ヌル＝空っぽ）のときに **右側の値を返す** 演算子です。\\n\\n**身近（みぢか）な例（れい）：**\\n- 「名前がなければ『ゲスト』と呼ぶ」\\n- 予備（よび）の計画（けいかく）を用意しておく\\n- Aがダメなら、Bを使う\\n\\n**なぜ便利（べんり）？**\\n- ユーザーが名前を入力しなかったとき → デフォルト名を使う\\n- データがなかったとき → 初期値（しょきち）を使う"
          },
          {
            "title": "?? の使い方",
            "content": "# シンプルな null チェック\\n\\n`$a ?? $b` は、`$a` が null なら `$b` を返します。\\n\\n**コード例：**\\n```php\\n$name = null;\\necho $name ?? 'ゲスト'; // ゲスト\\n```\\n\\n**何をしているの？**\\n1. `$name = null` → $name は空っぽ\\n2. `$name ?? 'ゲスト'` → $name が null かチェック\\n3. null だったので → 'ゲスト' を返す\\n\\n**もし値があったら？**\\n```php\\n$name = '太郎';\\necho $name ?? 'ゲスト'; // 太郎（nullじゃないから$nameを使う）\\n```\\n\\n**ポイント：**\\n- `??` の左側が null → 右側を返す\\n- `??` の左側が null じゃない → 左側をそのまま返す\\n- デフォルト値の設定（せってい）にとても便利"
          }
        ],
        "initialDisplayMode": "holey",
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
          "others": ["null", "<?php", "$value", "?>"]
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

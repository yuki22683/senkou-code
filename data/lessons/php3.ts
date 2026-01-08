export const php3Data = {
  "language": "php",
  "lessonId": "php-3",
  "lessonTitle": "PHP III - モダンPHPとクロージャ",
  "lessonDescription": "PHPの高度な機能を学びます。クロージャ、トレイト、ジェネレータなどモダンPHPの書き方を身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "exercises": [
    {
      "title": "クロージャ（無名関数）",
      "description": "PHPのクロージャを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "クロージャとは",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "クロージャ（無名関数）は名前を持たない関数です。\n\n```php\n$greet = function($name) {\n    return \"Hello, $name!\";\n};\necho $greet('Alice');\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// functionで無名関数を定義\n$doubler = function($x) {\n    // *で乗算\n    return $x * 2;\n};",
      "holeyCode": "// functionで無名関数を定義\n$doubler = ___($x) {\n    // *で乗算\n    return $x ___ 2;\n};",
      "correctLines": [
        { "lineNumber": 1, "content": "$doubler = function($x) {" },
        { "lineNumber": 2, "content": "    return $x * 2;" }
      ],
      "lineHints": [
        { "lineNumber": 1, "hint": "無名関数を定義するキーワード" },
        { "lineNumber": 2, "hint": "2倍にする演算子" }
      ],
      "candidates": {
        "1": ["function", "fn", "lambda", "closure"],
        "2": ["*", "+", "/", "**"]
      },
      "testCases": [
        { "input": "$doubler(5)", "expected_output": "10" }
      ]
    },
    {
      "title": "アロー関数",
      "description": "PHP 7.4で導入されたアロー関数を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "アロー関数とは",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "アロー関数はクロージャの簡潔な書き方です。\n\n```php\n$add = fn($a, $b) => $a + $b;\necho $add(3, 4);  // 7\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// fnでアロー関数、=>で式を記述\n$cube = fn($x) => $x ** 3;",
      "holeyCode": "// fnでアロー関数、=>で式を記述\n$cube = ___($x) ___ $x ** 3;",
      "correctLines": [
        { "lineNumber": 1, "content": "$cube = fn($x) => $x ** 3;" }
      ],
      "lineHints": [
        { "lineNumber": 1, "hint": "アロー関数のキーワードと記号" }
      ],
      "candidates": {
        "1": ["fn", "function", "lambda", "->"]
      },
      "testCases": [
        { "input": "$cube(3)", "expected_output": "27" }
      ]
    },
    {
      "title": "Null合体演算子",
      "description": "??演算子を使ったnullの処理を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "Null合体演算子とは",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "??演算子は左辺がnullの場合に右辺を返します。\n\n```php\n$name = null;\n$displayName = $name ?? 'Anonymous';\necho $displayName;  // Anonymous\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "$name = null;\n// ??でNull合体演算子\n$result = $name ?? 'Guest';",
      "holeyCode": "$name = null;\n// ??でNull合体演算子\n$result = $name ___ 'Guest';",
      "correctLines": [
        { "lineNumber": 2, "content": "$result = $name ?? 'Guest';" }
      ],
      "lineHints": [
        { "lineNumber": 2, "hint": "Null合体演算子" }
      ],
      "candidates": {
        "2": ["??", "?:", "||", "&&"]
      },
      "testCases": [
        { "input": "$result", "expected_output": "'Guest'" }
      ]
    },
    {
      "title": "スプレッド演算子",
      "description": "...演算子を使った配列の展開を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "スプレッド演算子とは",
          "image": "/illustrations/3d/gear.png",
          "content": "...演算子は配列を展開します。\n\n```php\n$arr1 = [1, 2];\n$arr2 = [3, 4];\n$merged = [...$arr1, ...$arr2];\n// [1, 2, 3, 4]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// ...で配列を展開\n$merged = [...[1, 2], ...[3, 4]];",
      "holeyCode": "// ...で配列を展開\n$merged = [___[1, 2], ___[3, 4]];",
      "correctLines": [
        { "lineNumber": 1, "content": "$merged = [...[1, 2], ...[3, 4]];" }
      ],
      "lineHints": [
        { "lineNumber": 1, "hint": "配列を展開する演算子" }
      ],
      "candidates": {
        "1": ["...", "**", "&&", "::"]
      },
      "testCases": [
        { "input": "$merged", "expected_output": "[1, 2, 3, 4]" }
      ]
    },
    {
      "title": "match式",
      "description": "PHP 8.0で導入されたmatch式を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "match式とは",
          "image": "/illustrations/3d/robot.png",
          "content": "match式はswitchの強力な代替です。\n\n```php\n$day = 1;\n$name = match($day) {\n    1 => 'Monday',\n    2 => 'Tuesday',\n    default => 'Other'\n};\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "$grade = 'A';\n// matchで式によるパターンマッチ\n$message = match($grade) {\n    'A' => 'Excellent',\n    'B' => 'Good',\n    // defaultでデフォルトケース\n    default => 'Try harder'\n};",
      "holeyCode": "$grade = 'A';\n// matchで式によるパターンマッチ\n$message = ___($grade) {\n    'A' => 'Excellent',\n    'B' => 'Good',\n    // defaultでデフォルトケース\n    ___ => 'Try harder'\n};",
      "correctLines": [
        { "lineNumber": 2, "content": "$message = match($grade) {" },
        { "lineNumber": 5, "content": "    default => 'Try harder'" }
      ],
      "lineHints": [
        { "lineNumber": 2, "hint": "switchの代替となる式" },
        { "lineNumber": 5, "hint": "デフォルトケースのキーワード" }
      ],
      "candidates": {
        "2": ["match", "switch", "case", "when"],
        "5": ["default", "else", "other", "_"]
      },
      "testCases": [
        { "input": "$message", "expected_output": "'Excellent'" }
      ]
    },
    {
      "title": "名前付き引数",
      "description": "PHP 8.0の名前付き引数を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "名前付き引数とは",
          "image": "/illustrations/3d/arguments.png",
          "content": "名前付き引数は引数名を指定して値を渡す機能です。\n\n```php\nfunction greet($name, $greeting) {\n    return \"$greeting, $name!\";\n}\necho greet(greeting: 'Hi', name: 'Alice');\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "function createUser($name, $age) {\n    return ['name' => $name, 'age' => $age];\n}\n// ageとnameで名前付き引数を指定\n$user = createUser(age: 30, name: 'Alice');",
      "holeyCode": "function createUser($name, $age) {\n    return ['name' => $name, 'age' => $age];\n}\n// ageとnameで名前付き引数を指定\n$user = createUser(___: 30, ___: 'Alice');",
      "correctLines": [
        { "lineNumber": 4, "content": "$user = createUser(age: 30, name: 'Alice');" }
      ],
      "lineHints": [
        { "lineNumber": 4, "hint": "年齢と名前の引数名" }
      ],
      "candidates": {
        "4": ["age", "name", "user", "value"]
      },
      "testCases": [
        { "input": "$user['name']", "expected_output": "'Alice'" }
      ]
    },
    {
      "title": "トレイト",
      "description": "コードの再利用を可能にするトレイトを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "トレイトとは",
          "image": "/illustrations/3d/robot.png",
          "content": "トレイトは複数のクラスでメソッドを共有する仕組みです。\n\n```php\ntrait Greetable {\n    public function greet() {\n        return 'Hello!';\n    }\n}\n\nclass Person {\n    use Greetable;\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// traitでトレイトを定義\ntrait HelloTrait {\n    public function sayHello() {\n        return 'Hello!';\n    }\n}\n\nclass Greeter {\n    // useでトレイトを使用\n    use HelloTrait;\n}",
      "holeyCode": "// traitでトレイトを定義\n___ HelloTrait {\n    public function sayHello() {\n        return 'Hello!';\n    }\n}\n\nclass Greeter {\n    // useでトレイトを使用\n    ___ HelloTrait;\n}",
      "correctLines": [
        { "lineNumber": 1, "content": "trait HelloTrait {" },
        { "lineNumber": 8, "content": "    use HelloTrait;" }
      ],
      "lineHints": [
        { "lineNumber": 1, "hint": "トレイトを定義するキーワード" },
        { "lineNumber": 8, "hint": "トレイトを使用するキーワード" }
      ],
      "candidates": {
        "1": ["trait", "interface", "abstract", "mixin"],
        "8": ["use", "include", "import", "extend"]
      },
      "testCases": [
        { "input": "(new Greeter())->sayHello()", "expected_output": "'Hello!'" }
      ]
    },
    {
      "title": "ジェネレータ",
      "description": "yieldを使ったジェネレータを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "ジェネレータとは",
          "image": "/illustrations/3d/robot.png",
          "content": "ジェネレータは値を一つずつ生成する関数です。\n\n```php\nfunction countTo($n) {\n    for ($i = 1; $i <= $n; $i++) {\n        yield $i;\n    }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "function rangeGen($n) {\n    for ($i = 1; $i <= $n; $i++) {\n        // yieldで値を一つずつ返す\n        yield $i;\n    }\n}",
      "holeyCode": "function rangeGen($n) {\n    for ($i = 1; $i <= $n; $i++) {\n        // yieldで値を一つずつ返す\n        ___ $i;\n    }\n}",
      "correctLines": [
        { "lineNumber": 3, "content": "        yield $i;" }
      ],
      "lineHints": [
        { "lineNumber": 3, "hint": "値を一つずつ返すキーワード" }
      ],
      "candidates": {
        "3": ["yield", "return", "emit", "output"]
      },
      "testCases": [
        { "input": "iterator_to_array(rangeGen(5))", "expected_output": "[1, 2, 3, 4, 5]" }
      ]
    },
    {
      "title": "配列の分割代入",
      "description": "配列から複数の変数に値を代入する方法を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "配列の分割代入とは",
          "image": "/illustrations/3d/robot.png",
          "content": "分割代入で配列の要素を複数の変数に代入できます。\n\n```php\n$arr = [1, 2, 3];\n[$a, $b, $c] = $arr;\necho $a;  // 1\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// name、age、cityに分割代入\n[$name, $age, $city] = ['Alice', 25, 'Tokyo'];",
      "holeyCode": "// name、age、cityに分割代入\n[$___, $___, $___] = ['Alice', 25, 'Tokyo'];",
      "correctLines": [
        { "lineNumber": 1, "content": "[$name, $age, $city] = ['Alice', 25, 'Tokyo'];" }
      ],
      "lineHints": [
        { "lineNumber": 1, "hint": "名前、年齢、都市の変数名" }
      ],
      "candidates": {
        "1": ["name", "age", "city", "value"]
      },
      "testCases": [
        { "input": "$name", "expected_output": "'Alice'" },
        { "input": "$age", "expected_output": "25" }
      ]
    },
    {
      "title": "コンストラクタプロパティ昇格",
      "description": "PHP 8.0のコンストラクタプロパティ昇格を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "プロパティ昇格とは",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "プロパティ昇格はコンストラクタでプロパティを簡潔に定義できます。\n\n```php\nclass Person {\n    public function __construct(\n        public string $name,\n        public int $age\n    ) {}\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Person {\n    public function __construct(\n        // publicでアクセス修飾子\n        public string $name,\n        // publicでアクセス修飾子\n        public int $age\n    ) {}\n}",
      "holeyCode": "class Person {\n    public function __construct(\n        // publicでアクセス修飾子\n        ___ string $name,\n        // publicでアクセス修飾子\n        ___ int $age\n    ) {}\n}",
      "correctLines": [
        { "lineNumber": 3, "content": "        public string $name," },
        { "lineNumber": 4, "content": "        public int $age" }
      ],
      "lineHints": [
        { "lineNumber": 3, "hint": "アクセス修飾子" },
        { "lineNumber": 4, "hint": "同じアクセス修飾子" }
      ],
      "candidates": {
        "3": ["public", "private", "protected", "readonly"],
        "4": ["public", "private", "protected", "readonly"]
      },
      "testCases": [
        { "input": "(new Person('Alice', 30))->name", "expected_output": "'Alice'" }
      ]
    }
  ]
};

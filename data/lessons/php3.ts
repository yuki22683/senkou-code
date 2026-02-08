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
      "correctCode": "// functionで無名関数を定義\\n$doubler = function($x) {\\n    // *で乗算\\n    return $x * 2;\\n};",
      "holeyCode": "// functionで無名関数を定義\\n$doubler = function($___) {\\n    // *で乗算\\n    return $x * ___;\\n___",
      "correctLines": [
          "// functionで無名関数を定義",
          "$doubler = function($x) {",
          "    // *で乗算",
          "    return $x * 2;",
          "};"
        ],
      "lineHints": [
          null,
          "無名関数を定義するキーワードです。",
          null,
          "2倍にする演算子です。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "function",
            "fn",
            "lambda",
            "closure"
          ],
          "operators": [
            "*",
            "+",
            "/",
            "**"
          ],
          "others": ["x", "2", "};"]
        },
        "testCases": [
          {
            "input": "$doubler(5)",
            "expected_output": "10"
          }
        ]
      },
    {
      "title": "アロー関数",
      "correctCode": "// fnでアロー関数、=>で式を記述\\n$cube = fn($x) => $x ** 3;",
      "holeyCode": "// fnでアロー関数、=>で式を記述\\n$cube = fn($x) => $x ** ___;",
      "correctLines": [
          "// fnでアロー関数、=>で式を記述",
          "$cube = fn($x) => $x ** 3;"
        ],
      "lineHints": [
          null,
          "アロー関数のキーワードと記号です。"
        ],
        "candidates": {
          "keywords": [
            "fn",
            "function",
            "lambda"
          ],
          "operators": [
            "=>",
            "->"
          ],
          "others": ["3"]
        },
        "testCases": [
          {
            "input": "$cube(3)",
            "expected_output": "27"
          }
        ]
      },
    {
      "title": "Null合体演算子",
      "correctCode": "// nullを代入\\n$name = null;\\n// ??でNull合体演算子\\n$result = $name ?? 'ゲスト';",
      "holeyCode": "// nullを代入\\n$name = ___;\\n// ??でNull合体演算子\\n$result = $name ?? '___';",
      "correctLines": [
          "// nullを代入",
          "$name = null;",
          "// ??でNull合体演算子",
          "$result = $name ?? 'ゲスト';"
        ],
      "lineHints": [
          null,
          "Null合体演算子です。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "null"
          ],
          "operators": [
            "??",
            "?:",
            "||",
            "&&"
          ],
          "others": ["Guest", "ゲスト"]
        },
        "testCases": [
          {
            "input": "$result",
            "expected_output": "ゲスト"
          }
        ]
      },
    {
      "title": "スプレッド演算子",
      "correctCode": "// ...で配列を展開\\n$merged = [...[1, 2], ...[3, 4]];",
      "holeyCode": "// ...で配列を展開\\n$___ = [___], ...[3, 4]];",
      "correctLines": [
          "// ...で配列を展開",
          "$merged = [...[1, 2], ...[3, 4]];"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。"
        ],
        "candidates": {
          "operators": [
            "...",
            "**",
            "&&",
            "::"
          ],
          "others": ["merged", "...[1, 2"]
        },
        "testCases": [
          {
            "input": "$merged",
            "expected_output": "Array\\n(\\n    [0] => 1\\n    [1] => 2\\n    [2] => 3\\n    [3] => 4\\n)\\n"
          }
        ]
      },
    {
      "title": "match式",
      "correctCode": "// $gradeに'A'を代入\\n$grade = 'A';\\n// match($grade)で$messageに結果を代入\\n$message = match($grade) {\\n    // 'A'なら'優秀'を返す\\n    'A' => '優秀',\\n    // 'B'なら'良い'を返す\\n    'B' => '良い',\\n    // それ以外なら'もっと頑張って'を返す\\n    default => 'もっと頑張って'\\n};",
      "holeyCode": "// $gradeに'A'を代入\\n$grade = '___';\\n// match($grade)で$messageに結果を代入\\n$message = match($___) {\\n    // 'A'なら'優秀'を返す\\n    'A' => '___',\\n    // 'B'なら'良い'を返す\\n    'B' => '___',\\n    // それ以外なら'もっと頑張って'を返す\\n    default => 'Try ___'\\n___",
      "correctLines": [
          "// $gradeに'A'を代入",
          "$grade = 'A';",
          "// match($grade)で$messageに結果を代入",
          "$message = match($grade) {",
          "    // 'A'なら'優秀'を返す",
          "    'A' => '優秀',",
          "    // 'B'なら'良い'を返す",
          "    'B' => '良い',",
          "    // それ以外なら'もっと頑張って'を返す",
          "    default => 'もっと頑張って'",
          "};"
        ],
      "lineHints": [
          null,
          "switchの代替となる式です。",
          null,
          "値をマッピングする演算子です。",
          null,
          "値をマッピングする演算子です。",
          null,
          "デフォルトケースのキーワードです。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "match",
            "switch",
            "case",
            "when",
            "default",
            "else"
          ],
          "strings": [
            "A"
          ],
          "operators": [
            "=>"
          ],
          "others": ["'A'", "grade", "Excellent", "Good", "harder", "};", "優秀", "良い", "張って"]
        },
        "testCases": [
          {
            "input": "$message",
            "expected_output": "優秀"
          }
        ]
      },
    {
      "title": "名前付き引数",
      "correctCode": "// functionで関数を定義\\nfunction createUser($name, $age) {\\n    // returnで連想配列を返す\\n    return ['名前' => $name, '年齢' => $age];\\n}\\n// age, nameの順で名前付き引数を指定\\n$user = createUser(age: 30, name: 'アリス');",
      "holeyCode": "// functionで関数を定義\\nfunction createUser($name, $___) {\\n    // returnで連想配列を返す\\n    return ['名前' => $name, '___' => $age];\\n___\\n// age, nameの順で名前付き引数を指定\\n$user = createUser(age: ___, name: 'アリス');",
      "correctLines": [
          "// functionで関数を定義",
          "function createUser($name, $age) {",
          "    // returnで連想配列を返す",
          "    return ['名前' => $name, '年齢' => $age];",
          "}",
          "// age, nameの順で名前付き引数を指定",
          "$user = createUser(age: 30, name: 'アリス');"
        ],
      "lineHints": [
          null,
          "年齢と名前の引数名を指定します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "function",
            "return"
          ],
          "variables": [
            "age",
            "name",
            "user",
            "value"
          ],
          "others": ["}", "30", "e,", "年齢", "}", "}", "}\\"]
        },
        "testCases": [
          {
            "input": "$user['名前']",
            "expected_output": "アリス"
          }
        ]
      },
    {
      "title": "トレイト",
      "correctCode": "// traitでトレイトを定義\\ntrait HelloTrait {\\n    // functionでメソッドを定義\\n    public function sayHello() {\\n        // 'こんにちは！'を返す\\n        return 'こんにちは！';\\n    }\\n}\\n// classでクラスを定義\\nclass Greeter {\\n    // useでトレイトを使用\\n    use HelloTrait;\\n}",
      "holeyCode": "// traitでトレイトを定義\\ntrait ___ {\\n    // functionでメソッドを定義\\n    public function ___() {\\n        // 'こんにちは！'を返す\\n        return '___!';\\n    ___\\n___\\n// classでクラスを定義\\nclass ___ {\\n    // useでトレイトを使用\\n    use ___;\\n___",
      "correctLines": [
          "// traitでトレイトを定義",
          "trait HelloTrait {",
          "    // functionでメソッドを定義",
          "    public function sayHello() {",
          "        // 'こんにちは！'を返す",
          "        return 'こんにちは！';",
          "    }",
          "}",
          "// classでクラスを定義",
          "class Greeter {",
          "    // useでトレイトを使用",
          "    use HelloTrait;",
          "}"
        ],
      "lineHints": [
          null,
          "トレイトを定義するキーワードです。",
          null,
          "トレイトを使用するキーワードです。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "新しいクラス（Greeter）を定義します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "trait",
            "interface",
            "abstract",
            "mixin",
            "use",
            "include",
            "import",
            "extend",
            "class",
            "function",
            "return"
          ],
          "others": ["HelloTrait", "sayHello", "Hello", "}", "Greeter", "こんにちは！';", "こんにちは！';", "}"]
        },
        "testCases": [
          {
            "input": "(new Greeter())->sayHello()",
            "expected_output": "こんにちは！"
          }
        ]
      },
    {
      "title": "ジェネレータ",
      "correctCode": "// functionで関数を定義\\nfunction rangeGen($n) {\\n    // forでループ\\n    for ($i = 1; $i <= $n; $i++) {\\n        // yieldで値を一つずつ返す\\n        yield $i;\\n    }\\n}",
      "holeyCode": "// functionで関数を定義\\nfunction rangeGen($___) {\\n    // forでループ\\n    for ($i = ___; $i <= $n; $i++) {\\n        // yieldで値を一つずつ返す\\n        yield $___;\\n    ___\\n___",
      "correctLines": [
          "// functionで関数を定義",
          "function rangeGen($n) {",
          "    // forでループ",
          "    for ($i = 1; $i <= $n; $i++) {",
          "        // yieldで値を一つずつ返す",
          "        yield $i;",
          "    }",
          "}"
        ],
      "lineHints": [
          null,
          "値を一つずつ返すキーワードです。",
          null,
          "繰り返し処理（ループ）を開始する。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "function",
            "for",
            "yield",
            "return",
            "emit",
            "output"
          ],
          "others": ["n", "1", "i", "}", "}"]
        },
        "testCases": [
          {
            "input": "iterator_to_array(rangeGen(5))",
            "expected_output": "Array\\n(\\n    [0] => 1\\n    [1] => 2\\n    [2] => 3\\n    [3] => 4\\n    [4] => 5\\n)\\n"
          }
        ]
      },
    {
      "title": "配列の分割代入",
      "correctCode": "// name、age、cityの順に分割代入\\n[$name, $age, $city] = ['アリス', 25, '東京'];",
      "holeyCode": "// name、age、cityの順に分割代入\\n[$name, $age, $city] = ['アリス', ___, '東京'];",
      "correctLines": [
          "// name、age、cityの順に分割代入",
          "[$name, $age, $city] = ['アリス', 25, '東京'];"
        ],
      "lineHints": [
          null,
          "名前、年齢、都市の変数名です。"
        ],
        "candidates": {
          "variables": [
            "name",
            "age",
            "city",
            "value"
          ],
          "others": ["25"]
        },
        "testCases": [
          {
            "input": "$name",
            "expected_output": "アリス"
          },
          {
            "input": "$age",
            "expected_output": "25"
          }
        ]
      },
    {
      "title": "コンストラクタプロパティ昇格",
      "correctCode": "// classでクラスを定義\\nclass Person {\\n    // __constructでコンストラクタを定義\\n    public function __construct(\\n        // publicでアクセス修飾子\\n        public string $name,\\n        // publicでアクセス修飾子\\n        public int $age\\n    ) {}\\n}",
      "holeyCode": "// classでクラスを定義\\nclass ___ {\\n    // __constructでコンストラクタを定義\\n    public function ___(\\n        // publicでアクセス修飾子\\n        public string $___,\\n        // publicでアクセス修飾子\\n        public int $___\\n    ___ {}\\n___",
      "correctLines": [
          "// classでクラスを定義",
          "class Person {",
          "    // __constructでコンストラクタを定義",
          "    public function __construct(",
          "        // publicでアクセス修飾子",
          "        public string $name,",
          "        // publicでアクセス修飾子",
          "        public int $age",
          "    ) {}",
          "}"
        ],
      "lineHints": [
          null,
          "アクセス修飾子です。",
          null,
          "同じアクセス修飾子です。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "class",
            "__construct",
            "public",
            "private",
            "protected",
            "readonly",
            "function"
          ],
          "others": ["Person", "name", "age", ")", "}", "age"]
        },
        "testCases": [
          {
            "input": "(new Person('アリス', 30))->name",
            "expected_output": "アリス"
          }
        ]
      }
  ]
};

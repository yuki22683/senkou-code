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
      "holeyCode": "// functionで無名関数を定義\\n$___ = ___(___) {\\n    // *で乗算\\n    return $___ ___ ___;\\n___",
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
          "関数定義の閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "function",
            "fn",
            "lambda",
            "closure",
            "return"
          ],
          "operators": [
            "*",
            "+",
            "/",
            "**"
          ],
          "others": ["doubler", "$x", "x", "2", "};"]
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
      "holeyCode": "// fnでアロー関数、=>で式を記述\\n$___ = ___(___) ___ $___ ___ ___;",
      "correctLines": [
          "// fnでアロー関数、=>で式を記述",
          "$cube = fn($x) => $x ** 3;"
        ],
      "lineHints": [
          null,
          "fnでアロー関数を定義し、=>で式を記述します。"
        ],
        "candidates": {
          "keywords": [
            "fn",
            "function",
            "lambda"
          ],
          "operators": [
            "=>",
            "->",
            "**",
            "*"
          ],
          "others": ["cube", "$x", "x", "3"]
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
      "holeyCode": "// nullを代入\\n$___ = ___;\\n// ??でNull合体演算子\\n$___ = $___ ___ '___';",
      "correctLines": [
          "// nullを代入",
          "$name = null;",
          "// ??でNull合体演算子",
          "$result = $name ?? 'ゲスト';"
        ],
      "lineHints": [
          null,
          "nullを代入する変数名です。",
          null,
          "??はNull合体演算子で、左辺がnullの場合に右辺を返します。"
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
          "others": ["name", "result", "ゲスト"]
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
      "holeyCode": "// ...で配列を展開\\n$___ = [___[___, ___], ___[___, ___]];",
      "correctLines": [
          "// ...で配列を展開",
          "$merged = [...[1, 2], ...[3, 4]];"
        ],
      "lineHints": [
          null,
          "...で配列を展開し、複数の配列を1つにマージします。"
        ],
        "candidates": {
          "operators": [
            "...",
            "**",
            "&&",
            "::"
          ],
          "others": ["merged", "1", "2", "3", "4"]
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
      "holeyCode": "// $gradeに'A'を代入\\n$___ = '___';\\n// match($grade)で$messageに結果を代入\\n$___ = ___(___) {\\n    // 'A'なら'優秀'を返す\\n    '___' ___ '___',\\n    // 'B'なら'良い'を返す\\n    '___' ___ '___',\\n    // それ以外なら'もっと頑張って'を返す\\n    ___ ___ '___'\\n___",
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
          "変数gradeに評定'A'を代入します。",
          null,
          "match式で$gradeの値に応じた結果を$messageに代入します。",
          null,
          "'A'の場合に'優秀'を返します。=>で値をマッピングします。",
          null,
          "'B'の場合に'良い'を返します。",
          null,
          "defaultはそれ以外の全てのケースにマッチします。",
          "match式の閉じ括弧です。"
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
          "operators": [
            "=>"
          ],
          "others": ["grade", "message", "$grade", "A", "B", "優秀", "良い", "もっと頑張って", "};"]
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
      "holeyCode": "// functionで関数を定義\\n___ ___(___) {\\n    // returnで連想配列を返す\\n    ___ ['___' ___ $___, '___' ___ $___];\\n___\\n// age, nameの順で名前付き引数を指定\\n$___ = ___(___: ___, ___: '___');",
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
          "functionで関数を定義し、$nameと$ageを引数に取ります。",
          null,
          "連想配列を返します。=>でキーと値を対応付けます。",
          "関数定義の閉じ括弧です。",
          null,
          "名前付き引数でage:とname:の順で関数を呼び出します。"
        ],
        "candidates": {
          "keywords": [
            "function",
            "return"
          ],
          "operators": [
            "=>"
          ],
          "others": ["createUser", "$name, $age", "名前", "name", "年齢", "age", "user", "30", "アリス", "}"]
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
      "holeyCode": "// traitでトレイトを定義\\n___ ___ {\\n    // functionでメソッドを定義\\n    ___ ___ ___() {\\n        // 'こんにちは！'を返す\\n        ___ '___';\\n    ___\\n___\\n// classでクラスを定義\\n___ ___ {\\n    // useでトレイトを使用\\n    ___ ___;\\n___",
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
          "traitでトレイトHelloTraitを定義します。",
          null,
          "publicアクセス修飾子でsayHelloメソッドを定義します。",
          null,
          "returnで'こんにちは！'を返します。",
          "メソッドの閉じ括弧です。",
          "トレイトの閉じ括弧です。",
          null,
          "classでGreeterクラスを定義します。",
          null,
          "useでHelloTraitトレイトを使用します。",
          "クラスの閉じ括弧です。"
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
            "return",
            "public",
            "private",
            "protected"
          ],
          "others": ["HelloTrait", "sayHello", "Greeter", "こんにちは！", "}", "}"]
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
      "holeyCode": "// functionで関数を定義\\n___ ___(___) {\\n    // forでループ\\n    ___ ($___ = ___; $___ ___ $___; $___++) {\\n        // yieldで値を一つずつ返す\\n        ___ $___;\\n    ___\\n___",
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
          "functionでrangeGen関数を定義し、$nを引数に取ります。",
          null,
          "forループで$iを1から$nまで繰り返します。",
          null,
          "yieldで$iを一つずつ返します。",
          "forループの閉じ括弧です。",
          "関数の閉じ括弧です。"
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
          "operators": [
            "<=",
            "<",
            ">=",
            ">"
          ],
          "others": ["rangeGen", "$n", "i", "n", "1", "}", "}"]
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
      "holeyCode": "// name、age、cityの順に分割代入\\n[$___, $___, $___] = ['___', ___, '___'];",
      "correctLines": [
          "// name、age、cityの順に分割代入",
          "[$name, $age, $city] = ['アリス', 25, '東京'];"
        ],
      "lineHints": [
          null,
          "左辺に$name, $age, $city、右辺に'アリス', 25, '東京'を配置します。"
        ],
        "candidates": {
          "variables": [
            "name",
            "age",
            "city",
            "value"
          ],
          "others": ["アリス", "25", "東京"]
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
      "holeyCode": "// classでクラスを定義\\n___ ___ {\\n    // __constructでコンストラクタを定義\\n    ___ ___ ___(\\n        // publicでアクセス修飾子\\n        ___ ___ $___,\\n        // publicでアクセス修飾子\\n        ___ ___ $___\\n    ) ___\\n___",
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
          "classでPersonクラスを定義します。",
          null,
          "publicでfunction __constructを定義します。",
          null,
          "public string型で$nameプロパティを昇格します。",
          null,
          "public int型で$ageプロパティを昇格します。",
          "コンストラクタの閉じ括弧と空のボディです。",
          "クラスの閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "class",
            "__construct",
            "public",
            "private",
            "protected",
            "readonly",
            "function",
            "string",
            "int"
          ],
          "others": ["Person", "name", "age", "{}", "}"]
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

export const phpData = {
  "language": "php",
  "lessonId": "php-1",
  "lessonTitle": "PHP I",
  "lessonDescription": "Webサーバーサイド開発で広く使われているPHPの基本を学びます。HTMLに埋め込みやすく、手軽に始められます。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "Hello Worldを出力しよう",
      "description": "PHPで画面に文字を表示するには echo を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "PHPタグ",
          "content": "# <?php ... ?>\n\nPHPのコードは `<?php` と `?>` の間に書きます。表示には `echo` を使います。\n\n**コード例：**\n```php\n<?php\n  echo \"Hello, PHP!\";\n?>\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  echo \"Hello, PHP!\";\n?>",
      "holeyCode": "<?php\n  echo \"___\";\n?>",
      "correctLines": ["<?php", "  echo \"Hello, PHP!\";", "?>"],
      "lineHints": [null, "Hello, PHP! を出力します。"],
      "candidates": { "strings": ["Hello, PHP!"] },
      "testCases": [{ "input": "", "expected_output": "Hello, PHP!\n" }]
    },
    {
      "title": "変数",
      "description": "変数を定義して出力しましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "変数",
          "content": "# $記号\n\nPHPの変数は必ず `$` から始まります。\n\n**コード例：**\n```php\n$name = \"PHP\";\necho $name;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  $x = 10;\n  echo $x;\n?>",
      "holeyCode": "<?php\n  $x = ___ ;\n  echo $___ ;\n?>",
      "correctLines": ["<?php", "  $x = 10;", "  echo $x;", "?>"],
      "lineHints": [null, "10を代入します。", "変数xを出力します。"],
      "candidates": { "variables": ["x"], "numbers": ["10"] },
      "testCases": [{ "input": "", "expected_output": "10" }]
    },
    {
      "title": "計算",
      "description": "計算を行いましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "演算",
          "content": "# 四則演算\n\n`+`, `-`, `*`, `/` などが使えます。\n\n**コード例：**\n```php\n$a = 5;\n$b = 3;\necho $a + $b;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  $a = 5;\n  $b = 3;\n  echo $a + $b;\n?>",
      "holeyCode": "<?php\n  $a = 5;\n  $b = 3;\n  echo $a ___ $b;\n?>",
      "correctLines": ["<?php", "  $a = 5;", "  $b = 3;", "  echo $a + $b;", "?>"],
      "lineHints": [null, null, null, "$a + $b を出力します。"],
      "candidates": { "operators": ["+"] },
      "testCases": [{ "input": "", "expected_output": "8" }]
    },
    {
      "title": "変数展開",
      "description": "ダブルクォートの中で変数を使って値を埋め込みましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "ダブルクォート",
          "content": "# 文字列内での展開\n\nダブルクォート `\"` で囲むと、中の変数がそのまま値に置き換わります。\n\n**コード例：**\n```php\n$age = 20;\necho \"年齢は $age です\";\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  $age = 20;\n  echo \"I am $age years old.\";\n?>",
      "holeyCode": "<?php\n  $age = 20;\n  echo \"I am $___ years old.\";\n?>",
      "correctLines": ["<?php", "  $age = 20;", "  echo \"I am $age years old.\";", "?>"],
      "lineHints": [null, null, "age変数を埋め込みます。"],
      "candidates": { "variables": ["age"] },
      "testCases": [{ "input": "", "expected_output": "I am 20 years old." }]
    },
    {
      "title": "配列",
      "description": "配列を作成して要素にアクセスしましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "配列",
          "content": "# [ ]\n\n複数のデータをまとめて扱います。インデックスは0から始まります。\n\n**コード例：**\n```php\n$colors = ['red', 'blue'];\necho $colors[1]; // blue を出力\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  $colors = ['red', 'blue'];\n  echo $colors[1];\n?>",
      "holeyCode": "<?php\n  $colors = ['red', 'blue'];\n  echo $colors[___];\n?>",
      "correctLines": ["<?php", "  $colors = ['red', 'blue'];", "  echo $colors[1];", "?>"],
      "lineHints": [null, null, "インデックス1を指定します。"],
      "candidates": { "numbers": ["1"] },
      "testCases": [{ "input": "", "expected_output": "blue" }]
    },
    {
      "title": "if文",
      "description": "条件分岐を行います。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if文",
          "content": "# 構文\n\n条件式を丸括弧 `( )` で囲みます。\n\n**コード例：**\n```php\nif ($score > 80) {\n    echo \"合格\";\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  $score = 100;\n  if ($score > 80) {\n    echo \"Excellent\";\n  }\n?>",
      "holeyCode": "<?php\n  $score = 100;\n  if ($score ___ 80) {\n    echo \"Excellent\";\n  }\n?>",
      "correctLines": ["<?php", "  $score = 100;", "  if ($score > 80) {", "    echo \"Excellent\";", "  }", "?>"],
      "lineHints": [null, null, "比較演算子 > を使います。", null, null],
      "candidates": { "operators": [">"] },
      "testCases": [{ "input": "", "expected_output": "Excellent" }]
    },
    {
      "title": "if-else文",
      "description": "elseを使って分岐します。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "else",
          "content": "# elseブロック\n\n条件に当てはまらない時の処理は `else` を使います。\n\n**コード例：**\n```php\nif ($age >= 20) {\n    echo \"大人\";\n} else {\n    echo \"子供\";\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  $age = 18;\n  if ($age >= 20) {\n    echo \"Adult\";\n  } else {\n    echo \"Minor\";\n  }\n?>",
      "holeyCode": "<?php\n  $age = 18;\n  if ($age >= 20) {\n    echo \"Adult\";\n  } ___ {\n    echo \"Minor\";\n  }\n?>",
      "correctLines": ["<?php", "  $age = 18;", "  if ($age >= 20) {", "    echo \"Adult\";", "  } else {", "    echo \"Minor\";", "  }", "?>"],
      "lineHints": [null, null, null, null, "else を記述します。"],
      "candidates": { "keywords": ["else"] },
      "testCases": [{ "input": "", "expected_output": "Minor" }]
    },
    {
      "title": "foreach文",
      "description": "foreachを使って配列を走査します。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "foreach",
          "content": "# 配列のループ\n\n`foreach ($配列 as $値)` の形式で、要素を一つずつ取り出します。\n\n**コード例：**\n```php\n$nums = [1, 2, 3];\nforeach ($nums as $n) {\n    echo $n;\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  $nums = [1, 2, 3];\n  foreach ($nums as $n) {\n    echo $n;\n  }\n?>",
      "holeyCode": "<?php\n  $nums = [1, 2, 3];\n  foreach ($nums ___ $n) {\n    echo $n;\n  }\n?>",
      "correctLines": ["<?php", "  $nums = [1, 2, 3];", "  foreach ($nums as $n) {", "    echo $n;", "  }", "?>"],
      "lineHints": [null, null, "as キーワードを使います。"],
      "candidates": { "keywords": ["as"] },
      "testCases": [{ "input": "", "expected_output": "123" }]
    },
    {
      "title": "連想配列",
      "description": "キーと値のペアを扱う連想配列を使いましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "連想配列",
          "content": "# => 矢印\n\n名前付きのキーでデータを管理します。\n\n**コード例：**\n```php\n$user = ['name' => 'Alice'];\necho $user['name']; // Alice を表示\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  $user = ['name' => 'Alice'];\n  echo $user['name'];\n?>",
      "holeyCode": "<?php\n  $user = ['name' => 'Alice'];\n  echo $user['___'];\n?>",
      "correctLines": ["<?php", "  $user = ['name' => 'Alice'];", "  echo $user['name'];", "?>"],
      "lineHints": [null, null, "キー 'name' を指定します。"],
      "candidates": { "strings": ["name"] },
      "testCases": [{ "input": "", "expected_output": "Alice" }]
    },
    {
      "title": "関数",
      "description": "関数を定義して呼び出します。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "関数定義",
          "content": "# function\n\n処理をまとめて名前を付けます。\n\n**コード例：**\n```php\nfunction greet() {\n    echo \"Hello\";\n}\n\ngreet(); // 呼び出し\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  function greet() {\n    echo \"Hello\";\n  }\n  greet();\n?>",
      "holeyCode": "<?php\n  function greet() {\n    echo \"Hello\";\n  }\n  ___();\n?>",
      "correctLines": ["<?php", "  function greet() {", "    echo \"Hello\";", "  }", "  greet();", "?>"],
      "lineHints": [null, null, null, null, "greet(); で呼び出します。"],
      "candidates": { "functions": ["greet"] },
      "testCases": [{ "input": "", "expected_output": "Hello" }]
    }
  ]
};

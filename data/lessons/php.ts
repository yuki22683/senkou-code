export const phpData = {
  "language": "php",
  "lessonId": "php-1",
  "lessonTitle": "PHP (ピーエイチピー) にちょうせん！",
  "lessonDescription": "Webサイトを作るのが得意な言葉「PHP（ピーエイチピー）」のきほんを学びましょう。HTMLという言葉と一緒に使われることが多いですよ。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面に文字を出してみましょう",
      "description": "PHPを使って画面に「こんにちは」と表示させてみましょう。echo（エコー）という関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "PHPの「おまじない」",
          "content": "# <?php ... ?>\n\nPHPのプログラムを入力するときは、`<?php` と `?>` の間に命令を入力するのがルールです。表示には `echo` を使いますよ。\n\n**入力するコードのヒント：**\n```php\n<?php\n  echo \"Hello, PHP!\";\n?>\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  // 画面にメッセージを出す関数\n  echo \"Hello, PHP!\";\n?>",
      "holeyCode": "<?php\n  // 画面にメッセージを出す関数\n  echo \"___\";\n?>",
      "correctLines": [
        "<?php",
        "  echo \"Hello, PHP!\";",
        "?>"
      ],
      "lineHints": [
        "PHPを始めるための合図です。",
        "echo を使って、そのあとの文字を画面に出します。",
        "PHPを終わるための合図です。"
      ],
      "candidates": {
        "functions": [
          "echo"
        ],
        "strings": [
          "Hello, PHP!"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, PHP!\n"
        }
      ]
    },
    {
      "title": "便利な「はこ」",
      "description": "数字をしまっておく「はこ（変数）」を使ってみましょう。PHPでは、はこに $（ドル記号）をつけます。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "$ から始めます",
          "content": "# $記号\n\nPHPでは、はこ（変数）の名前の前に必ず `$` をつける決まりがあります。\n\n**コード例：**\n```php\n$name = \"PHP\";\necho $name;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  $x = 10;\n  echo $x;\n?>",
      "holeyCode": "<?php\n  $x = ___ ;\n  echo $___ ;\n?>",
      "correctLines": [
        "<?php",
        "  $x = 10;",
        "  echo $x;",
        "?>"
      ],
      "lineHints": [
        null,
        "x という名前のはこに 10 を入力します。",
        "はこの名前 x を指定して、表示させます。",
        null
      ],
      "candidates": {
        "variables": [
          "x"
        ],
        "numbers": [
          "10"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10"
        }
      ]
    },
    {
      "title": "コンピュータで計算しましょう",
      "description": "PHPを使って、たし算をしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "計算の記号",
          "content": "# 算数と同じ記号を使います\n\nPHPでも、こんな記号を使って計算をします。\n\n- **+** : たし算\n- **-** : ひき算\n- **\\*** : かけ算\n- **/** : わり算"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  $a = 5;\n  $b = 3;\n  echo $a + $b;\n?>",
      "holeyCode": "<?php\n  $a = 5;\n  $b = 3;\n  echo $a ___ $b;\n?>",
      "correctLines": [
        "<?php",
        "  $a = 5;",
        "  $b = 3;",
        "  echo $a + $b;",
        "?>"
      ],
      "lineHints": [
        null,
        null,
        null,
        "たし算なので `+" を入力します。",
        null
      ],
      "candidates": {
        "operators": [
          "+"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "8"
        }
      ]
    },
    {
      "title": "文章の中に「はこ」を入れましょう",
      "description": "ダブルクォート（\"）の中に「はこ（変数）」を直接入れて、中身を表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "変数展開（へんすうてんかい）",
          "content": "# 文字列の中に入れるだけ\n\n`\" \"` で囲んだ文章の中に `$age` と入力するだけで、その中身を文章に入れられますよ。\n\n**コード例：**\n```php\n$age = 10;\necho \"私は $age 歳です\";\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  $age = 20;\n  echo \"I am $age years old.\";\n?>",
      "holeyCode": "<?php\n  $age = 20;\n  echo \"I am $___ years old.\";\n?>",
      "correctLines": [
        "<?php",
        "  $age = 20;",
        "  echo \"I am $age years old.\";",
        "?>"
      ],
      "lineHints": [
        null,
        "age に 20 を入力します。",
        "はこの名前 age を指定します。",
        null
      ],
      "candidates": {
        "variables": [
          "age"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "I am 20 years old."
        }
      ]
    },
    {
      "title": "データをならべる「配列」",
      "description": "たくさんのデータを一つの「長い はこ」にまとめて入れられる「配列（はいれつ）」を使ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "データの番号は 0 から！",
          "content": "# [ ]（しかくい かっこ）を使いましょう\n\n配列の中身を取り出すときは、何番目かを指定します。さいしょのデータは **「0番」** から数えるのがルールですよ。\n\n**コード例：**\n```php\n$colors = ['あか', 'あお'];\necho $colors[0]; // 「あか」が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  $colors = ['red', 'blue'];\n  echo $colors[1];\n?>",
      "holeyCode": "<?php\n  $colors = ['red', 'blue'];\n  echo $colors[___];\n?>",
      "correctLines": [
        "<?php",
        "  $colors = ['red', 'blue'];",
        "  echo $colors[1];",
        "?>"
      ],
      "lineHints": [
        null,
        "['red', 'blue'] と入力して配列を作ります。",
        "2番目のデータの番号は 1 です。 `$colors[1]` と入力してください。",
        null
      ],
      "candidates": {
        "numbers": [
          "1"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "blue"
        }
      ]
    },
    {
      "title": "「もし〜なら」で分けましょう",
      "description": "点数によって表示するメッセージを変えてみましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if文",
          "content": "# ( ) と { } を使いましょう\n\nPHPでは、`if (条件)` のあとに `{ }` を入力して、その中にやりたいことを入力します。\n\n**コード例：**\n```php\nif ($score > 80) {\n    echo \"合格！\";\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  $score = 100;\n  if ($score > 80) {\n    echo \"Excellent\";\n  }\n?>",
      "holeyCode": "<?php\n  $score = 100;\n  if ($score ___ 80) {\n    echo \"Excellent\";\n  }\n?>",
      "correctLines": [
        "<?php",
        "  $score = 100;",
        "  if ($score > 80) {",
        "    echo \"Excellent\";",
        "  }",
        "?>"
      ],
      "lineHints": [
        null,
        "score = 100 と入力しましょう。",
        "比較するための記号 `>" を入力しましょう。",
        "Excellent と表示します。",
        "さいごに } で閉じるのを忘れないでください。",
        null
      ],
      "candidates": {
        "operators": [
          ">
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Excellent"
        }
      ]
    },
    {
      "title": "ちがう場合はどうしましょう？",
      "description": "else（エルス）を使って、「そうでなければ」の動きを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "elseブロック",
          "content": "# 二つの動き\n\n条件に当てはまらないときの動きは `else` を使って入力します。\n\n**コード例：**\n```php\nif ($age >= 20) {\n    echo \"大人です\";\n} else {\n    echo \"子供です\";\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  $age = 18;\n  if ($age >= 20) {\n    echo \"Adult\";\n  } else {\n    echo \"Minor\";\n  }\n?>",
      "holeyCode": "<?php\n  $age = 18;\n  if ($age >= 20) {\n    echo \"Adult\";\n  } ___ {\n    echo \"Minor\";\n  }\n?>",
      "correctLines": [
        "<?php",
        "  $age = 18;",
        "  if ($age >= 20) {",
        "    echo \"Adult\";",
        "  } else {",
        "    echo \"Minor\";",
        "  }",
        "?>"
      ],
      "lineHints": [
        null,
        "age に 18 を入力します。",
        null,
        null,
        "そうでなければ、をあらわす `else` を入力しましょう。",
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": [
          "else"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Minor"
        }
      ]
    },
    {
      "title": "中身を全部出してみましょう",
      "description": "foreach（フォーイーチ）という機能を使って、配列の中身を一つずつ順番に表示します。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "foreachループ",
          "content": "# as を使いましょう\n\n`foreach ($配列 as $ラベル)` と入力すると、中身を一つずつ取り出して処理できます。PHPで一番よく使われるループですよ。\n\n**コード例：**\n```php\n$nums = [1, 2, 3];\nforeach ($nums as $n) {\n    echo $n;\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  $nums = [1, 2, 3];\n  foreach ($nums as $n) {\n    echo $n;\n  }\n?>",
      "holeyCode": "<?php\n  $nums = [1, 2, 3];\n  foreach ($nums ___ $n) {\n    echo $n;\n  }\n?>",
      "correctLines": [
        "<?php",
        "  $nums = [1, 2, 3];",
        "  foreach ($nums as $n) {",
        "    echo $n;",
        "  }",
        "?>"
      ],
      "lineHints": [
        null,
        "[1, 2, 3] という配列を作ります。",
        "「〜を〜として取り出す」をあらわす `as` キーワードを入力します。",
        "取り出したデータ $n を表示します。",
        null,
        null
      ],
      "candidates": {
        "keywords": [
          "as"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "123"
        }
      ]
    },
    {
      "title": "名前で探す「じしょ」",
      "description": "連想配列を使って、名前を指定してデータを取り出してみましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "連想配列（れんそうはいれつ）",
          "content": "# キー => あたい\n\n「名前」と「データ」をセットにして保存できます。矢印のような記号 `=>` を使うのがPHPの特徴ですよ。\n\n**コード例：**\n```php\n$user = ['name' => 'たろう'];\necho $user['name']; // 「たろう」が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  $user = ['name' => 'Alice'];\n  echo $user['name'];\n?>",
      "holeyCode": "<?php\n  $user = ['name' => 'Alice'];\n  echo $user['___'];\n?>",
      "correctLines": [
        "<?php",
        "  $user = ['name' => 'Alice'];",
        "  echo $user['name'];",
        "?>"
      ],
      "lineHints": [
        null,
        "名前（キー）とデータのセットを作ります。",
        "\"name\" という名前を指定してデータを取り出します。",
        null
      ],
      "candidates": {
        "strings": [
          "name"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Alice"
        }
      ]
    },
    {
      "title": "自分だけの関数を作りましょう",
      "description": "一連の手順をまとめて、名前をつけた「関数（かんすう）」を作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "手順をまとめる",
          "content": "# 関数の定義\n\nやりたいことをひとまとめにして、名前をつけることができます。呼び出すだけでいつでも動かせますよ。\n\n**コード例：**\n```php\nfunction aisatsu() {\n    echo \"こんにちは\";\n}\n\naisatsu(); // 呼び出し\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  function greet() {\n    echo \"Hello\";\n  }\n  greet();\n?>",
      "holeyCode": "<?php\n  function greet() {\n    echo \"Hello\";\n  }\n  ___();\n?>",
      "correctLines": [
        "<?php",
        "  function greet() {",
        "    echo \"Hello\";",
        "  }",
        "  greet();",
        "?>"
      ],
      "lineHints": [
        null,
        "greet という名前の関数を定義します。",
        "メッセージを表示します。",
        "関数の終わりです。",
        "greet(); と入力して、関数を実行します。",
        null
      ],
      "candidates": {
        "functions": [
          "greet"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello"
        }
      ]
    }
  ]
}
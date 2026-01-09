export const phpData = {
  "language": "php",
  "lessonId": "php-1",
  "lessonTitle": "PHP (ピーエイチピー) に挑戦！",
  "lessonDescription": "Webサイトを作るのが得意な言葉「PHP（ピーエイチピー）」のきほんを学びましょう。HTMLという言葉と一緒に使われることが多いです。",
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
          "title": "PHP（ピーエイチピー）とは？",
          "image": "/illustrations/common/monitor.png",
          "content": "# Webサイトを裏側で動かす言葉\n\nPHPは、Webサイトの「裏側」で活躍するプログラミング言語です。掲示板やSNSなど、中身が書き換わる動的なWebサイトを作るのに欠かせません。"
        },
        {
          "title": "PHPの「おまじない」",
          "image": "/illustrations/common/monitor.png",
          "content": "# <?php ... ?>\n\nPHPのプログラムを入力するときは、`<?php` と `?>` の間に命令を入力するのがルールです。表示には `echo` を使います。\n\n**コード例：**\n```php\n<?php\n  echo \"ヤッホー\";\n?>\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  // 画面にメッセージを出す関数\n  echo \"Hello, PHP!\";\n?>",
      "holeyCode": "___\\n___\\n___\\n___"Hello, PHP!\" と入力してね\n  echo \"___\";\n?>",
      "correctLines": [
        "<?php",
        ""  echo "Hello",
        "PHP!";"",
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
          "title": "変数（へんすう）とは？",
          "image": "/illustrations/common/box.png",
          "content": "# データを保存する場所\n\nプログラムの中で数字や文字に名前をつけて、あとで使いやすくするための仕組みが **変数（へんすう）** です。"
        },
        {
          "title": "$ から始めます",
          "image": "/illustrations/common/box.png",
          "content": "# $記号\n\nPHPでは、はこ（変数）の名前の前に必ず `$` をつける決まりがあります。\n\n**コード例：**\n```php\n$price = 100;\necho $price;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  // x というはこに 10 を入れる\n  $x = 10;\n  // 中身を表示する\n  echo $x;\n?>",
      "holeyCode": "___\n  ___\n  ___\n___",
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
          "title": "計算はコンピュータにお任せ",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 高速な計算処理\n\nコンピュータは人間よりもずっと速く計算できます。プログラミングでは、算数と同じ記号を使って計算の指示を出します。"
        },
        {
          "title": "計算の記号",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 算数と同じ記号を使います\n\nPHPでも、こんな記号を使って計算をします。\n\n- **+** : たし算\n- **-** : ひき算\n- **\*** : かけ算\n- **/** : わり算\n\n**コード例：**\n```php\n$a = 10;\n$b = 5;\necho $a - $b; // 5 が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  // はこに数字を入れる\n  $a = 5;\n  $b = 3;\n  // たし算した結果を表示する\n  echo $a + $b;\n?>",
      "holeyCode": "___\n  ___\n  ___\n  ___\n___",
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
        "たし算なので `+` を入力します。",
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
          "title": "変数展開（へんすうてんかい）とは？",
          "image": "/illustrations/common/fstring.png",
          "content": "# 文章の中に変数を入れる\n\n文章の途中に、変数（はこ）の中身を合体させたいときに使うのが **変数展開（へんすうてんかい）** です。PHPでは `\" \"`（ダブルクォート）を使います。"
        },
        {
          "title": "文字列の中に入れるだけ",
          "image": "/illustrations/common/fstring.png",
          "content": "# $ 記号\n\n`\" \"` で囲んだ文章の中に `$year` と入力するだけで、その中身を文章に入れられます。\n\n**コード例：**\n```php\n$weather = \"はれ\";\necho \"明日は $weather です\";\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  // ageに20を入れる\n  $age = 20;\n  // 文章の中に中身を表示する\n  echo \"I am $age years old.\";\n?>",
      "holeyCode": "___\\n  ___\\n  ___\\n___"I am $___ years old.\";\n?>",
      "correctLines": [
        "<?php",
        "  $age = 20;",
        "  echo "I am $age years old.";",
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
          "title": "配列（はいれつ）とは？",
          "image": "/illustrations/common/list.png",
          "content": "# データの行列\n\nたくさんのデータを順番に並べておきたいときに使うのが **配列（はいれつ）** です。順番に 0, 1, 2... と番号をつけて管理します。"
        },
        {
          "title": "データの番号は 0 から！",
          "image": "/illustrations/common/list.png",
          "content": "# [ ]（しかくい かっこ）を使いましょう\n\n配列の中身を取り出すときは、何番目かを指定します。さいしょのデータは **「0番」** から数えるのがルールです。\n\n**コード例：**\n```php\n$items = ['おにぎり', 'パン'];\necho $items[0]; // 「おにぎり」が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  // 配列を作る\n  $colors = ['red', 'blue'];\n  // 2番目のデータを表示する\n  echo $colors[1];\n?>",
      "holeyCode": "___\\n___",
      "correctLines": [
        ""<?php",\n        "  $colors = ['red'",
        "'blue'"
      ];",
        "  echo $colors[1];",
        "?>"
      ],
      "lineHints": [
        null,
        "['red', 'blue'] と入力して配列を作ります。",
        "2番目のデータの番号は 1 です。 ` $colors[1]` と入力してください。",
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
          "title": "条件分岐（じょうけんぶんき）とは？",
          "image": "/illustrations/common/if.png",
          "content": "# プログラムに判断させる\n\n状況によって動きを変えることを **条件分岐** と呼びます。プログラムに賢い判断をさせてみましょう。"
        },
        {
          "title": "if文",
          "image": "/illustrations/common/if.png",
          "content": "# ( ) と { } を使いましょう\n\nPHPでは、`if (条件)` のあとに `{ }` を入力して、その中にやりたいことを入力します。\n\n**コード例：**\n```php\nif ($score > 80) {\n    echo \"すごい！\";\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  $score = 100;\n  // >で大きいか比較\n  if ($score > 80) {\n    echo \"Excellent\";\n  }\n?>",
      "holeyCode": "___\\n  ___\\n  ___\\n    ___\\n  ___\\n___"Excellent\";\n  }\n?>",
      "correctLines": [
        "<?php",
        "  $score = 100;",
        "  if ($score > 80) {",
        "    echo "Excellent";",
        "  }",
        "?>"
      ],
      "lineHints": [
        null,
        "score = 100 と入力しましょう。",
        "比較するための記号 `>` を入力しましょう。",
        "Excellent と表示します。",
        "さいごに } で閉じるのを忘れないでください。",
        null
      ],
      "candidates": {
        "operators": [
          ">"
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
          "title": "それ以外の場合は？",
          "image": "/illustrations/common/if.png",
          "content": "# else（エルス）の役割\n\n条件に当てはまらなかったときの別のルートを作るのが **else（エルス）** です。「もし〜なら」とセットで使うことで、プログラムのルートを2つに分けることができます。"
        },
        {
          "title": "elseブロック",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# 二つの動き\n\n条件に当てはまらないときの動きは `else` を使って入力します。\n\n**コード例：**\n```php\nif ($price < 1000) {\n    echo \"安い\";\n} else {\n    echo \"高い\";\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  $age = 18;\n  if ($age >= 20) {\n    echo \"Adult\";\n  // elseで「そうでなければ」\n  } else {\n    echo \"Minor\";\n  }\n?>",
      "holeyCode": "___\\n  ___\\n  ___\\n    ___\\n  ___\\n    ___\\n  ___\\n___"Adult\";\n  // ここに else と入力してね\n  } ___ {\n    echo \"Minor\";\n  }\n?>",
      "correctLines": [
        "<?php",
        "  $age = 18;",
        "  if ($age >= 20) {",
        "    echo "Adult";",
        "  } else {",
        "    echo "Minor";",
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
          "title": "繰り返し（ループ）とは？",
          "image": "/illustrations/common/loop.png",
          "content": "# 自動で順番に処理する\n\n同じ作業を何度も繰り返すための仕組みが **ループ** です。配列の中身を一つずつ順番に全部チェックしたいときなどに非常に役立ちます。"
        },
        {
          "title": "foreachループ",
          "image": "/illustrations/common/loop.png",
          "content": "# as を使いましょう\n\n`foreach ( $配列 as $ラベル )` と入力すると、中身を一つずつ取り出して処理できます。PHPで一番よく使われるループです。\n\n**コード例：**\n```php\n$members = ['たろう', 'はなこ'];\nforeach ($members as $member) {\n    echo $member;\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  $nums = [1, 2, 3];\n  // asで各要素を取り出す\n  foreach ($nums as $n) {\n    echo $n;\n  }\n?>",
      "holeyCode": "___\\n___\\n___",
      "correctLines": [
        ""<?php",\n        "  $nums = [1",
        "2",
        "3"
      ];",
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
      "title": "名前で探しましょう「連想配列」",
      "description": "連想配列を使って、名前を指定してデータを取り出してみましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "辞書（連想配列）とは？",
          "image": "/illustrations/common/dict.png",
          "content": "# キーワードで検索できる仕組み\n\n「名前」と「データ」をセットにして保存できるのが **連想配列** です。辞書を引くように、キーワード（キー）を使って目的のデータをすぐに見つけられます。"
        },
        {
          "title": "連想配列（れんそうはいれつ）",
          "image": "/illustrations/common/dict.png",
          "content": "# キー => あたい\n\n「名前」と「データ」をセットにして保存できます。矢印のような記号 `=>` を使うのがPHPの特徴です。\n\n**コード例：**\n```php\n$book = ['title' => 'PHP入門'];\necho $book['title']; // 「PHP入門」が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  $user = ['name' => 'Alice'];\n  // nameでキーを指定してアクセス\n  echo $user['name'];\n?>",
      "holeyCode": "___",
      "correctLines": [
        ""<?php",\n        "  $user = ['name' => 'Alice'"
      ];",
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
          "title": "関数（かんすう）とは？",
          "image": "/illustrations/common/function.png",
          "content": "# 処理のパッケージ化\n\nやりたいことをひとまとめにして、名前をつけることができます。呼び出すだけでいつでも動かせます。一度作れば名前を呼ぶだけで何度でも実行できる、便利なショートカットのようなものです。"
        },
                {
                  "title": "手順をまとめる",
                  "image": "/illustrations/common/function.png",
                  "content": "# 関数の定義\n\nやりたいことをひとまとめにして、名前をつけることができます。呼び出すだけでいつでも 動かせます。\n\n**コード例：**\n```php\nfunction sayHello() {\n    echo \"ヤッホー！\";\n}\n\nsayHello(); // 呼び出し\n```"
                }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "<?php\n  function greet() {\n    echo \"Hello\";\n  }\n  // 関数を実行する\n  greet();\n?>",
      "holeyCode": "___\\n  ___\\n    ___\\n  ___\\n  ___\\n___"Hello\";\n  }\n  // ここに greet と入力して関数を動かしてね\n  ___();\n?>",
      "correctLines": [
        "<?php",
        "  function greet() {",
        "    echo "Hello";",
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
};

export const phpData = {
  "language": "php",
  "lessonId": "php-1",
  "lessonTitle": "PHP (ピーエイチピー) に挑戦！",
  "lessonDescription": "Webサイトを作るのが得意な言葉「PHP（ピーエイチピー）」のきほんを学びましょう。HTMLという言葉と一緒に使われることが多いです。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "tutorialSlides": [
    {
      "title": "PHPへようこそ！",
      "content": "**PHP（ピーエイチピー）** は、Webサイトを作るために生まれたプログラミング言語です。\\n\\nWordPressなど、世界中のたくさんのWebサイトで使われています。\\n\\nサーバーで動いて、HTMLを作り出します。"
    },
    {
      "title": "画面に文字を出す",
      "content": "PHPで画面に文字を出すには `echo` を使います。\\n\\n```php\\n<?php\\n  echo \\\"Hello, PHP!\\\";\\n?>\\n```\\n\\n`<?php` と `?>` の間にPHPのコードを書きます。"
    },
    {
      "title": "変数を使う",
      "content": "PHPの変数は `$` で始まります。\\n\\n```php\\n<?php\\n  $name = \\\"PHP\\\";\\n  $age = 10;\\n  echo $name;\\n  echo $age;\\n?>\\n```\\n\\n変数名の前に必ず `$` をつけましょう。"
    },
    {
      "title": "計算する",
      "content": "PHPでは数字を計算できます。\\n\\n```php\\n<?php\\n  $a = 5;\\n  $b = 3;\\n  echo $a + $b;  // 8\\n  echo 10 % 3;   // 1（あまり）\\n?>\\n```\\n\\n`//` から後ろはコメント（メモ）です。"
    },
    {
      "title": "条件分岐 if文",
      "content": "「もし〜なら」という条件で処理を分けられます。\\n\\n```php\\n<?php\\n  $score = 85;\\n  if ($score > 80) {\\n    echo \\\"すごい！\\\";\\n  } else {\\n    echo \\\"がんばろう\\\";\\n  }\\n?>\\n```"
    },
    {
      "title": "配列と連想配列",
      "content": "複数のデータをまとめて扱えます。\\n\\n**配列**:\\n```php\\n$fruits = ['りんご', 'バナナ'];\\necho $fruits[0];\\n```\\n\\n**連想配列**（辞書）:\\n```php\\n$user = ['名前' => 'アリス'];\\necho $user['名前'];\\n```"
    }
  ],
  "exercises": [
    {
      "title": "画面に文字を出してみましょう",
      "correctCode": "<?php\\n  // 画面にメッセージを出す関数\\n  echo \"Hello, PHP!\";\\n?>",
      "holeyCode": "___\\n  // 画面にメッセージを出す関数\\n  ___ \"___\";\\n___",
      "correctLines": [
          "<?php",
          "  // 画面にメッセージを出す関数",
          "  echo \"Hello, PHP!\";",
          "?>"
        ],
      "lineHints": [
          "PHPのコードがここから始まることを宣言します。",
          null,
          "文字列を標準出力に表示します。",
          "PHPを終わるための合図です。"
        ],
        "candidates": {
          "functions": [
            "echo"
          ],
          "strings": [
            "Hello, PHP!"
          ],
          "others": ["<?php", "?>"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello, PHP!"
          }
        ]
      },
    {
      "title": "便利な「はこ」",
      "correctCode": "<?php\\n  // x というはこに 10 を入れる\\n  $x = 10;\\n  // $x の中身を表示する\\n  echo $x;\\n?>",
      "holeyCode": "___\\n  // x というはこに 10 を入れる\\n  $___ = ___;\\n  // $x の中身を表示する\\n  ___ $___;\\n___",
      "correctLines": [
          "<?php",
          "  // x というはこに 10 を入れる",
          "  $x = 10;",
          "  // $x の中身を表示する",
          "  echo $x;",
          "?>"
        ],
      "lineHints": [
          "PHPスクリプトの開始を宣言する。",
          null,
          "変数に値を代入します。$記号で変数を表します。",
          null,
          "変数の内容を展開して表示します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "x"
          ],
          "numbers": [
            "10"
          ],
          "others": ["<?php", "echo", "?>"]
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
      "correctCode": "<?php\\n  // はこに数字を入れる\\n  $a = 5;\\n  $b = 3;\\n  // たし算した結果を表示する\\n  echo $a + $b;\\n?>",
      "holeyCode": "___\\n  // はこに数字を入れる\\n  $___ = ___;\\n  $___ = ___;\\n  // たし算した結果を表示する\\n  ___ ___ + $___;\\n___",
      "correctLines": [
          "<?php",
          "  // はこに数字を入れる",
          "  $a = 5;",
          "  $b = 3;",
          "  // たし算した結果を表示する",
          "  echo $a + $b;",
          "?>"
        ],
      "lineHints": [
          "PHPスクリプトの開始を宣言する。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "変数の内容を展開して表示します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "+"
          ],
          "others": ["<?php", "a", "5", "b", "3", "echo", "$a", "?>"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "8"
          }
        ]
      },
    {
      "title": "剰余演算子（%）",
      "correctCode": "<?php\\n  // 10 を 3 で割ったあまりを出力する\\n  echo 10 % 3;\\n?>",
      "holeyCode": "___\\n  // 10 を 3 で割ったあまりを出力する\\n  ___ ___ ___ ___;\\n___",
      "correctLines": [
          "<?php",
          "  // 10 を 3 で割ったあまりを出力する",
          "  echo 10 % 3;",
          "?>"
        ],
      "lineHints": [
          "あまりを求める % 演算子を使います。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "%",
            "+",
            "-",
            "*",
            "/"
          ],
          "others": ["<?php", "echo", "10", "3", "?>"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1"
          }
        ]
      },
    {
      "title": "累算代入演算子（+=、-=）",
      "correctCode": "<?php\\n  // scoreに50を入れる\\n  $score = 50;\\n  // 10点プラスする\\n  $score += 10;\\n  // score;を表示\\n  echo $score;\\n?>",
      "holeyCode": "___\\n  // scoreに50を入れる\\n  $___ = ___;\\n  // 10点プラスする\\n  $___ ___ ___;\\n  // score;を表示\\n  ___ $___;\\n___",
      "correctLines": [
          "<?php",
          "  // scoreに50を入れる",
          "  $score = 50;",
          "  // 10点プラスする",
          "  $score += 10;",
          "  // score;を表示",
          "  echo $score;",
          "?>"
        ],
      "lineHints": [
          "PHPスクリプトの開始を宣言する。",
          null,
          "変数の初期値を設定します。",
          null,
          "+= を使って加算します。",
          null,
          "変数の内容を展開して表示します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "+=",
            "-=",
            "*=",
            "/="
          ],
          "numbers": [
            "50",
            "10"
          ],
          "others": ["<?php", "score", "echo", "?>"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "60"
          }
        ]
      },
    {
      "title": "文章の中に「はこ」を入れましょう",
      "correctCode": "<?php\\n  // ageに20を入れる\\n  $age = 20;\\n  // $ageを文章に埋め込んで表示する\\n  echo \"I am $age years old.\";\\n?>",
      "holeyCode": "___\\n  // ageに20を入れる\\n  $___ = ___;\\n  // $ageを文章に埋め込んで表示する\\n  ___ \"___\";\\n___",
      "correctLines": [
          "<?php",
          "  // ageに20を入れる",
          "  $age = 20;",
          "  // $ageを文章に埋め込んで表示する",
          "  echo \"I am $age years old.\";",
          "?>"
        ],
      "lineHints": [
          "PHPスクリプトの開始を宣言する。",
          null,
          "年齢を格納する変数を宣言し、値を代入します。",
          null,
          "文字列を標準出力に表示します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "age"
          ],
          "strings": [
            "I am $age years old."
          ],
          "others": ["<?php", "20", "echo", "?>"]
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
      "correctCode": "<?php\\n  // 配列を作る\\n  $fruits = ['りんご', 'バナナ'];\\n  // 2番目のデータを表示する\\n  echo $fruits[1];\\n?>",
      "holeyCode": "___\\n  // 配列を作る\\n  $___ = [___];\\n  // 2番目のデータを表示する\\n  ___ $___[___];\\n___",
      "correctLines": [
          "<?php",
          "  // 配列を作る",
          "  $fruits = ['りんご', 'バナナ'];",
          "  // 2番目のデータを表示する",
          "  echo $fruits[1];",
          "?>"
        ],
      "lineHints": [
          "PHPスクリプトの開始を宣言する。",
          null,
          "['りんご', 'バナナ'] と入力して配列を作ります。",
          null,
          "変数の内容を展開して表示します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "numbers": [
            "1"
          ],
          "others": ["<?php", "fruits", "'りんご', 'バナナ'", "echo", "?>"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "バナナ"
          }
        ]
      },
    {
      "title": "「もし〜なら」で分けましょう",
      "correctCode": "<?php\\n  // scoreに100を入れる\\n  $score = 100;\\n  // >で大きいか比較\\n  if ($score > 80) {\\n    // メッセージ（'大変良い'）\\n    echo \"大変良い\";\\n  }\\n?>",
      "holeyCode": "___\\n  // scoreに100を入れる\\n  $___ = ___;\\n  // >で大きいか比較\\n  if ($___ ___ ___) ___\\n    // メッセージ（'大変良い'）\\n    ___ \"___\";\\n  ___\\n___",
      "correctLines": [
          "<?php",
          "  // scoreに100を入れる",
          "  $score = 100;",
          "  // >で大きいか比較",
          "  if ($score > 80) {",
          "    // メッセージ（'大変良い'）",
          "    echo \"大変良い\";",
          "  }",
          "?>"
        ],
      "lineHints": [
          "PHPスクリプトの開始を宣言する。",
          null,
          "変数に初期値を代入します。",
          null,
          "「より大きい」を表す比較演算子を使用します。",
          null,
          "文字列を標準出力に表示します。",
          "さいごに } で閉じるのを忘れないでください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            ">"
          ],
          "others": ["<?php", "score", "100", "80", "{", "echo", "大変良い", "}", "?>"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "大変良い"
          }
        ]
      },
    {
      "title": "ちがう場合はどうしましょう？",
      "correctCode": "<?php\\n  // ageに18を入れる\\n  $age = 18;\\n  // 20以上かを比較する演算子\\n  if ($age >= 20) {\\n    // 20歳以上のときのメッセージ（'大人'）\\n    echo \"大人\";\\n  // elseで「そうでなければ」\\n  } else {\\n    // それ以外のメッセージ（'未成年'）\\n    echo \"未成年\";\\n  }\\n?>",
      "holeyCode": "___\\n  // ageに18を入れる\\n  $___ = ___;\\n  // 20以上かを比較する演算子\\n  if ($___ ___ ___) ___\\n    // 20歳以上のときのメッセージ（'大人'）\\n    ___ \"___\";\\n  // elseで「そうでなければ」\\n  ___ ___ ___\\n    // それ以外のメッセージ（'未成年'）\\n    ___ \"___\";\\n  ___\\n___",
      "correctLines": [
          "<?php",
          "  // ageに18を入れる",
          "  $age = 18;",
          "  // 20以上かを比較する演算子",
          "  if ($age >= 20) {",
          "    // 20歳以上のときのメッセージ（'大人'）",
          "    echo \"大人\";",
          "  // elseで「そうでなければ」",
          "  } else {",
          "    // それ以外のメッセージ（'未成年'）",
          "    echo \"未成年\";",
          "  }",
          "?>"
        ],
      "lineHints": [
          "PHPスクリプトの開始を宣言する。",
          null,
          "年齢を格納する変数に値を代入します。",
          null,
          ">=演算子を使って比較します。",
          null,
          "文字列を標準出力に表示します。",
          null,
          "もし条件が満たされなかった場合に実行する処理を記述します。",
          null,
          "文字列を標準出力に表示します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "else"
          ],
          "operators": [
            ">="
          ],
          "others": ["<?php", "age", "18", "20", "{", "echo", "大人", "}", "未成年", "?>"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "未成年"
          }
        ]
      },
    {
      "title": "論理演算子（&&、||）",
      "correctCode": "<?php\\n  // scoreに85を入れる\\n  $score = 85;\\n  // 80以上 かつ 100以下 ならメッセージを出す\\n  if ($score >= 80 && $score <= 100) {\\n    // 合格と出力\\n    echo \"合格\";\\n  }\\n?>",
      "holeyCode": "___\\n  // scoreに85を入れる\\n  $___ = ___;\\n  // 80以上 かつ 100以下 ならメッセージを出す\\n  if ($___ ___ ___ ___ $___ ___ ___) ___\\n    // 合格と出力\\n    ___ \"___\";\\n  ___\\n___",
      "correctLines": [
          "<?php",
          "  // scoreに85を入れる",
          "  $score = 85;",
          "  // 80以上 かつ 100以下 ならメッセージを出す",
          "  if ($score >= 80 && $score <= 100) {",
          "    // 合格と出力",
          "    echo \"合格\";",
          "  }",
          "?>"
        ],
      "lineHints": [
          "PHPスクリプトの開始を宣言する。",
          null,
          "変数にテスト用の値を代入します。",
          null,
          "複数の条件がすべて満たされているか（論理積）を判定します。",
          null,
          "文字列を標準出力に表示します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "&&",
            "||",
            ">=",
            "<="
          ],
          "numbers": [
            "85",
            "80",
            "100"
          ],
          "strings": [
            "合格"
          ],
          "others": ["<?php", "score", "{", "echo", "}", "?>"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "合格"
          }
        ]
      },
    {
      "title": "中身を全部出してみましょう",
      "correctCode": "<?php\\n  $nums = [1, 2, 3];\\n  // asで各要素を取り出す\\n  foreach ($nums as $n) {\\n    echo $n;\\n  }\\n?>",
      "holeyCode": "___\\n  $___ = [___];\\n  // asで各要素を取り出す\\n  foreach ($___ ___ $___) ___\\n    ___ $___;\\n  ___\\n___",
      "correctLines": [
          "<?php",
          "  $nums = [1, 2, 3];",
          "  // asで各要素を取り出す",
          "  foreach ($nums as $n) {",
          "    echo $n;",
          "  }",
          "?>"
        ],
      "lineHints": [
          "PHPスクリプトの開始を宣言する。",
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "「〜を〜として取り出す」をあらわす `as` キーワードを入力します。",
          "変数の内容を展開して表示します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "as"
          ],
          "others": ["<?php", "nums", "1, 2, 3", "n", "{", "echo", "}", "?>"]
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
      "correctCode": "<?php\\n  $user = ['名前' => 'アリス'];\\n  // nameでキーを指定してアクセス\\n  echo $user['名前'];\\n?>",
      "holeyCode": "___\\n  $___ = [___];\\n  // nameでキーを指定してアクセス\\n  ___ $___['___'];\\n___",
      "correctLines": [
          "<?php",
          "  $user = ['名前' => 'アリス'];",
          "  // nameでキーを指定してアクセス",
          "  echo $user['名前'];",
          "?>"
        ],
      "lineHints": [
          "PHPスクリプトの開始を宣言する。",
          "名前（キー）とデータのセットを作ります。",
          null,
          "変数の内容を展開して表示します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "strings": [
            "名前"
          ],
          "others": ["<?php", "user", "'名前' => 'アリス'", "echo", "?>"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "アリス"
          }
        ]
      },
    {
      "title": "自分だけの関数を作りましょう",
      "correctCode": "<?php\\n  function greet() {\\n    echo \"こんにちは\";\\n  }\\n  // 関数を実行する\\n  greet();\\n?>",
      "holeyCode": "___\\n  function ___() ___\\n    ___ \"___\";\\n  ___\\n  // 関数を実行する\\n  ___();\\n___",
      "correctLines": [
          "<?php",
          "  function greet() {",
          "    echo \"こんにちは\";",
          "  }",
          "  // 関数を実行する",
          "  greet();",
          "?>"
        ],
      "lineHints": [
          "PHPスクリプトの開始を宣言する。",
          "greet という名前の関数を定義します。",
          "文字列を標準出力に表示します。",
          "ここを正しく入力してください。",
          null,
          "関数（greet）を呼び出して実行します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "greet"
          ],
          "strings": [
            "こんにちは"
          ],
          "others": ["<?php", "{", "echo", "}", "?>"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは"
          }
        ]
      }
  ]
};

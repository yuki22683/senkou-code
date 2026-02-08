export const csharpData = {
  "language": "csharp",
  "lessonId": "csharp-1",
  "lessonTitle": "C# (シーシャープ) に挑戦！",
  "lessonDescription": "Microsoftが開発した、多機能で強力な言葉「C#（シーシャープ）」のきほんを学びましょう。Unityを使ったゲーム作りにも欠かせない言葉です。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "correctCode": "using System;\\n\\nclass Program {\\n    static void Main() {\\n        // 画面にメッセージを出す関数\\n        Console.WriteLine(\"Hello, C#!\");\\n    }\\n}",
      "holeyCode": "using ___;\\n___\\nclass ___ {\\n    static void ___() {\\n        // 画面にメッセージを出す関数\\n        Console.___(\"Hello, C#!\");\\n    ___\\n___",
      "correctLines": [
          "using System;",
          "",
          "class Program {",
          "    static void Main() {",
          "        // 画面にメッセージを出す関数",
          "        Console.WriteLine(\"Hello, C#!\");",
          "    }",
          "}"
        ],
      "lineHints": [
          "文字列をコンソールに出力し、改行します。",
          null,
          "新しいクラス（Program）を定義します。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "Console.WriteLine"
          ],
          "strings": [
            "Hello, C#!"
          ],
          "others": ["System", "Program", "Main", "WriteLine", "}", "", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello, C#!\\n"
          }
        ]
      },
    {
      "title": "便利な「はこ」変数（へんすう）",
      "correctCode": "// nameというはこに \"CSharp\" を入れる\\nstring name = \"CSharp\";\\n// はこの中身を画面に出す\\nConsole.WriteLine(name);",
      "holeyCode": "// nameというはこに \"CSharp\" を入れる\\nstring name = \"___\";\\n// はこの中身を画面に出す\\nConsole.WriteLine(___);",
      "correctLines": [
          "// nameというはこに \"CSharp\" を入れる",
          "string name = \"CSharp\";",
          "// はこの中身を画面に出す",
          "Console.WriteLine(name);"
        ],
      "lineHints": [
          null,
          "文字列型の変数を宣言し、文字列データを代入します。",
          null,
          "変数名 name を入力します。"
        ],
        "candidates": {
          "types": [
            "string",
            "int"
          ],
          "variables": [
            "name"
          ],
          "strings": [
            "CSharp"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "CSharp\\n"
          }
        ]
      },
    {
      "title": "コンピュータで計算しましょう",
      "correctCode": "// xというはこに 10 を入れる\\nint x = 10;\\n// yというはこに 5 を入れる\\nint y = 5;\\n// x と y をたした答えを出す\\nConsole.WriteLine(x + y);",
      "holeyCode": "// xというはこに 10 を入れる\\nint x = ___;\\n// yというはこに 5 を入れる\\nint y = ___;\\n// x と y をたした答えを出す\\nConsole.___(x + y);",
      "correctLines": [
          "// xというはこに 10 を入れる",
          "int x = 10;",
          "// yというはこに 5 を入れる",
          "int y = 5;",
          "// x と y をたした答えを出す",
          "Console.WriteLine(x + y);"
        ],
      "lineHints": [
          null,
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "たし算なので + を使います。"
        ],
        "candidates": {
          "types": [
            "int",
            "string"
          ],
          "numbers": [
            "10",
            "5"
          ],
          "operators": [
            "+",
            "-",
            "*",
            "/"
          ],
          "others": ["10;", "5;", "WriteLine"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "15\\n"
          }
        ]
      },
    {
      "title": "剰余演算子（%）",
      "correctCode": "// 10 を 3 で割ったあまりを出力する\\nConsole.WriteLine(10 % 3);",
      "holeyCode": "// 10 を 3 で割ったあまりを出力する\\nConsole.___(10 % 3);",
      "correctLines": [
          "// 10 を 3 で割ったあまりを出力する",
          "Console.WriteLine(10 % 3);"
        ],
      "lineHints": [
          null,
          "あまりを求める `%` 演算子を使います。"
        ],
        "candidates": {
          "operators": [
            "%",
            "/",
            "*",
            "-"
          ],
          "others": ["WriteLine"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      },
    {
      "title": "累算代入演算子（+=、-=）",
      "correctCode": "// hp に 100 を入れる\\nint hp = 100;\\n// += で 20 を足す\\nhp += 20;\\n// -= で 50 を引く\\nhp -= 50;\\nConsole.WriteLine(hp);",
      "holeyCode": "// hp に 100 を入れる\\nint hp = ___;\\n// += で 20 を足す\\nhp += ___;\\n// -= で 50 を引く\\nhp -= ___;\\nConsole.WriteLine(___);",
      "correctLines": [
          "// hp に 100 を入れる",
          "int hp = 100;",
          "// += で 20 を足す",
          "hp += 20;",
          "// -= で 50 を引く",
          "hp -= 50;",
          "Console.WriteLine(hp);"
        ],
      "lineHints": [
          null,
          "変数hpを宣言し、100を設定します。",
          null,
          "変数hpに20を加算して再代入する。",
          null,
          "変数hpから50を減算して再代入する。",
          "変数の値をコンソールに出力し、改行します。"
        ],
        "candidates": {
          "operators": [
            "+=",
            "-=",
            "*=",
            "/="
          ],
          "others": ["100", "20", "50", "hp"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "70\\n"
          }
        ]
      },
    {
      "title": "文章の中に変数を入れましょう",
      "correctCode": "// ageというはこに 10 を入れる\\nint age = 10;\\n// 文字列補間を使ってメッセージを出す\\nConsole.WriteLine($\"私は{age}歳です\");",
      "holeyCode": "// ageというはこに 10 を入れる\\nint age = ___;\\n// 文字列補間を使ってメッセージを出す\\nConsole.___($\"私は{age}歳です\");",
      "correctLines": [
          "// ageというはこに 10 を入れる",
          "int age = 10;",
          "// 文字列補間を使ってメッセージを出す",
          "Console.WriteLine($\"私は{age}歳です\");"
        ],
      "lineHints": [
          null,
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "$ を先頭につけて、age を {} の中に入力します。"
        ],
        "candidates": {
          "variables": [
            "age"
          ],
          "numbers": [
            "10"
          ],
          "operators": [
            "$"
          ],
          "others": ["10;", "WriteLine"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "私は10歳です\\n"
          }
        ]
      },
    {
      "title": "たくさんのデータをまとめましょう「配列」",
      "correctCode": "// colorsに{\"赤\", \"青\", \"緑\"}を代入\\nstring[] colors = {\"赤\", \"青\", \"緑\"};\\n// 2番目のデータを出す\\nConsole.WriteLine(colors[1]);",
      "holeyCode": "// colorsに{\"赤\", \"青\", \"緑\"}を代入\\nstring[] colors = {\"___\", \"青\", \"緑\"};\\n// 2番目のデータを出す\\nConsole.___(colors[1]);",
      "correctLines": [
          "// colorsに{\"赤\", \"青\", \"緑\"}を代入",
          "string[] colors = {\"赤\", \"青\", \"緑\"};",
          "// 2番目のデータを出す",
          "Console.WriteLine(colors[1]);"
        ],
      "lineHints": [
          null,
          "赤、青、緑 の順で入力しましょう。",
          null,
          "2番目のデータのインデックスは 1 です。"
        ],
        "candidates": {
          "strings": [
            "赤",
            "青",
            "緑"
          ],
          "numbers": [
            "0",
            "1",
            "2"
          ],
          "others": ["WriteLine"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "青\\n"
          }
        ]
      },
    {
      "title": "「もし〜なら」で分ける if文",
      "correctCode": "// scoreに100を入れる\\nint score = 100;\\n// もし80より大きかったら\\nif (score > 80)\\n{\\n    // 「合格！」と表示する\\n    Console.WriteLine(\"合格！\");\\n}",
      "holeyCode": "// scoreに100を入れる\\nint score = ___;\\n// もし80より大きかったら\\nif (score ___ 80)\\n___\\n    // 「合格！」と表示する\\n    Console.___(\"合格！\");\\n___",
      "correctLines": [
          "// scoreに100を入れる",
          "int score = 100;",
          "// もし80より大きかったら",
          "if (score > 80)",
          "{",
          "    // 「合格！」と表示する",
          "    Console.WriteLine(\"合格！\");",
          "}"
        ],
      "lineHints": [
          null,
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          "文字列をコンソールに出力し、改行します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "if",
            "while"
          ],
          "numbers": [
            "100"
          ],
          "strings": [
            "合格！"
          ],
          "others": ["100;", ">", "{", "WriteLine", "}", "{"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "合格！\\n"
          }
        ]
      },
    {
      "title": "ちがう場合は？ if-else文",
      "correctCode": "// ageに10を入れる\\nint age = 10;\\n// 20歳以上かどうかで分ける\\nif (age >= 20)\\n{\\n    // 「大人」と出力\\n    Console.WriteLine(\"大人\");\\n}\\n// else でそれ以外の場合\\nelse\\n{\\n    // 「子供」と出力\\n    Console.WriteLine(\"子供\");\\n}",
      "holeyCode": "// ageに10を入れる\\nint age = ___;\\n// 20歳以上かどうかで分ける\\nif (age ___ 20)\\n___\\n    // 「大人」と出力\\n    Console.___(\"大人\");\\n___\\n// else でそれ以外の場合\\n___\\n___\\n    // 「子供」と出力\\n    Console.___(\"子供\");\\n___",
      "correctLines": [
          "// ageに10を入れる",
          "int age = 10;",
          "// 20歳以上かどうかで分ける",
          "if (age >= 20)",
          "{",
          "    // 「大人」と出力",
          "    Console.WriteLine(\"大人\");",
          "}",
          "// else でそれ以外の場合",
          "else",
          "{",
          "    // 「子供」と出力",
          "    Console.WriteLine(\"子供\");",
          "}"
        ],
      "lineHints": [
          null,
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "文字列をコンソールに出力し、改行します。",
          "もし条件が満たされなかった場合に実行する処理を記述します。",
          null,
          "文字列をコンソールに出力し、改行します。",
          "ここを正しく入力してください。",
          null,
          "条件が偽の場合の処理を定義する。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "else",
            "elif"
          ],
          "numbers": [
            "10"
          ],
          "strings": [
            "大人",
            "子供"
          ],
          "others": ["10;", ">=", "{", "WriteLine", "}", "{", "}", "else"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "子供\\n"
          }
        ]
      },
    {
      "title": "論理演算子（&&、||）",
      "correctCode": "// score と bonus を定義\\nint score = 80;\\nint bonus = 10;\\n// && で両方の条件をチェック\\nif (score >= 70 && bonus > 0)\\n{\\n    Console.WriteLine(\"ボーナスあり合格\");\\n}",
      "holeyCode": "// score と bonus を定義\\nint score = ___;\\nint bonus = ___;\\n// && で両方の条件をチェック\\nif (score >= ___ && bonus > 0)\\n___\\n    Console.___(\"ボーナスあり合格\");\\n___",
      "correctLines": [
          "// score と bonus を定義",
          "int score = 80;",
          "int bonus = 10;",
          "// && で両方の条件をチェック",
          "if (score >= 70 && bonus > 0)",
          "{",
          "    Console.WriteLine(\"ボーナスあり合格\");",
          "}"
        ],
      "lineHints": [
          null,
          "変数scoreを宣言し、80を設定します。",
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "&&",
            "||",
            "&",
            "|"
          ],
          "others": ["80", "10", "70", "{", "WriteLine", "}", "{"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ボーナスあり合格\\n"
          }
        ]
      },
    {
      "title": "ぐるぐる回す foreach",
      "correctCode": "// namesに{\"太郎\", \"花子\"}を代入\\nstring[] names = {\"太郎\", \"花子\"};\\n// 順番に取り出すループ\\nforeach (string name in names)\\n{\\n    // 取り出した名前を表示\\n    Console.WriteLine(name);\\n}",
      "holeyCode": "// namesに{\"太郎\", \"花子\"}を代入\\nstring[] names = {\"___\", \"花子\"};\\n// 順番に取り出すループ\\nforeach (string name in ___)\\n___\\n    // 取り出した名前を表示\\n    Console.WriteLine(___);\\n___",
      "correctLines": [
          "// namesに{\"太郎\", \"花子\"}を代入",
          "string[] names = {\"太郎\", \"花子\"};",
          "// 順番に取り出すループ",
          "foreach (string name in names)",
          "{",
          "    // 取り出した名前を表示",
          "    Console.WriteLine(name);",
          "}"
        ],
      "lineHints": [
          null,
          "太郎、花子 の順で入力しましょう。",
          null,
          "foreach を使います。",
          "変数名 name を入力します。",
          null,
          "変数の値をコンソールに出力し、改行します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "foreach",
            "for"
          ],
          "variables": [
            "name"
          ],
          "strings": [
            "太郎",
            "花子"
          ],
          "others": ["names", "{", "}", "{", "{", "{\\"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "太郎\\n花子\\n"
          }
        ]
      },
    {
      "title": "名前で探しましょう「Dictionary」",
      "correctCode": "// Dictionaryを作る\\nvar fruits = new Dictionary<string, string>();\\n// キーと値を追加\\nfruits[\"みかん\"] = \"オレンジ\";\\n// キーを指定して値を取り出す\\nConsole.WriteLine(fruits[\"みかん\"]);",
      "holeyCode": "// Dictionaryを作る\\nvar ___ = new Dictionary<string, string>();\\n// キーと値を追加\\n___[\"___\"] = \"オレンジ\";\\n// キーを指定して値を取り出す\\nConsole.___(fruits[\"みかん\"]);",
      "correctLines": [
          "// Dictionaryを作る",
          "var fruits = new Dictionary<string, string>();",
          "// キーと値を追加",
          "fruits[\"みかん\"] = \"オレンジ\";",
          "// キーを指定して値を取り出す",
          "Console.WriteLine(fruits[\"みかん\"]);"
        ],
      "lineHints": [
          null,
          "Dictionary を使います。",
          null,
          "キーは みかん、値は オレンジ です。",
          null,
          "キー みかん を入力します。"
        ],
        "candidates": {
          "types": [
            "Dictionary",
            "List"
          ],
          "strings": [
            "みかん",
            "オレンジ"
          ],
          "others": ["fruits", "WriteLine"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "オレンジ\\n"
          }
        ]
      },
    {
      "title": "自分だけの関数を作ろう「メソッド」",
      "correctCode": "// Greetというメソッドを定義\\nstatic void Greet()\\n{\\n    // こんにちは と表示\\n    Console.WriteLine(\"こんにちは\");\\n}\\n// メソッドを呼び出す\\nGreet();",
      "holeyCode": "// Greetというメソッドを定義\\nstatic void ___()\\n___\\n    // こんにちは と表示\\n    Console.___(\"こんにちは\");\\n___\\n// メソッドを呼び出す\\n___();",
      "correctLines": [
          "// Greetというメソッドを定義",
          "static void Greet()",
          "{",
          "    // こんにちは と表示",
          "    Console.WriteLine(\"こんにちは\");",
          "}",
          "// メソッドを呼び出す",
          "Greet();"
        ],
      "lineHints": [
          null,
          "戻り値がないので void を使います。",
          "文字列をコンソールに出力し、改行します。",
          null,
          "関数（Greet）を呼び出して実行します。",
          "ここを正しく入力してください。",
          null,
          "関数（Greet）を呼び出して実行する。"
        ],
        "candidates": {
          "keywords": [
            "void",
            "int"
          ],
          "methods": [
            "Greet"
          ],
          "strings": [
            "こんにちは"
          ],
          "others": ["{", "WriteLine", "}", "{", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      }
  ]
};
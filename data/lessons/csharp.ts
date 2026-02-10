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
      "holeyCode": "using ___;\\n___\\nclass ___ {\\n    static void ___() {\\n        // 画面にメッセージを出す関数\\n        ___.___(\"___\");\\n    ___\\n___",
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
          "System名前空間を読み込みます。",
          null,
          "Programという名前のクラスを定義します。",
          "Mainメソッドを定義します（プログラムのエントリーポイント）。",
          null,
          "ConsoleクラスのWriteLineメソッドで文字列を出力します。",
          "ブロックを閉じます。",
          "クラスのブロックを閉じます。"
        ],
        "candidates": {
          "functions": [
            "Console.WriteLine"
          ],
          "strings": [
            "Hello, C#!"
          ],
          "others": ["System", "Program", "Main", "WriteLine", "}", "Console", "Hello, C#!"]
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
      "holeyCode": "// nameというはこに \"CSharp\" を入れる\\n___ ___ = \"___\";\\n// はこの中身を画面に出す\\n___.___(___);",
      "correctLines": [
          "// nameというはこに \"CSharp\" を入れる",
          "string name = \"CSharp\";",
          "// はこの中身を画面に出す",
          "Console.WriteLine(name);"
        ],
      "lineHints": [
          null,
          "string型の変数nameに文字列\"CSharp\"を代入します。",
          null,
          "ConsoleクラスのWriteLineメソッドで変数nameの内容を出力します。"
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
          ],
          "others": ["Console", "WriteLine"]
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
      "holeyCode": "// xというはこに 10 を入れる\\n___ ___ = ___;\\n// yというはこに 5 を入れる\\n___ ___ = ___;\\n// x と y をたした答えを出す\\n___.___(__ ___ ___);",
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
          "int型の変数xに10を代入します。",
          null,
          "int型の変数yに5を代入します。",
          null,
          "Console.WriteLineでx + yの結果を出力します。"
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
          "others": ["Console", "WriteLine", "x", "y"]
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
      "holeyCode": "// 10 を 3 で割ったあまりを出力する\\n___.___(__ ___ ___);",
      "correctLines": [
          "// 10 を 3 で割ったあまりを出力する",
          "Console.WriteLine(10 % 3);"
        ],
      "lineHints": [
          null,
          "Console.WriteLineで10 % 3（あまり）を出力します。"
        ],
        "candidates": {
          "operators": [
            "%",
            "/",
            "*",
            "-"
          ],
          "others": ["Console", "WriteLine", "10", "3"]
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
      "holeyCode": "// hp に 100 を入れる\\n___ ___ = ___;\\n// += で 20 を足す\\n___ ___ ___;\\n// -= で 50 を引く\\n___ ___ ___;\\n___.___(___);",
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
          "int型の変数hpに100を代入します。",
          null,
          "hp += 20 で変数hpに20を加算します。",
          null,
          "hp -= 50 で変数hpから50を減算します。",
          "Console.WriteLineでhpの値を出力します。"
        ],
        "candidates": {
          "operators": [
            "+=",
            "-=",
            "*=",
            "/="
          ],
          "others": ["int", "hp", "100", "20", "50", "Console", "WriteLine"]
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
      "holeyCode": "// ageというはこに 10 を入れる\\n___ ___ = ___;\\n// 文字列補間を使ってメッセージを出す\\n___.___($\"私は{___}歳です\");",
      "correctLines": [
          "// ageというはこに 10 を入れる",
          "int age = 10;",
          "// 文字列補間を使ってメッセージを出す",
          "Console.WriteLine($\"私は{age}歳です\");"
        ],
      "lineHints": [
          null,
          "int型の変数ageに10を代入します。",
          null,
          "Console.WriteLineで$\"私は{age}歳です\"を出力します。"
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
          "others": ["int", "Console", "WriteLine"]
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
      "holeyCode": "// colorsに{\"赤\", \"青\", \"緑\"}を代入\\n___[] ___ = {\"___\", \"___\", \"___\"};\\n// 2番目のデータを出す\\n___.___(___[___]);",
      "correctLines": [
          "// colorsに{\"赤\", \"青\", \"緑\"}を代入",
          "string[] colors = {\"赤\", \"青\", \"緑\"};",
          "// 2番目のデータを出す",
          "Console.WriteLine(colors[1]);"
        ],
      "lineHints": [
          null,
          "string[]型の変数colorsに{\"赤\", \"青\", \"緑\"}を代入します。",
          null,
          "Console.WriteLineでcolors[1]（2番目の要素）を出力します。"
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
          "others": ["string", "colors", "Console", "WriteLine"]
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
      "holeyCode": "// scoreに100を入れる\\n___ ___ = ___;\\n// もし80より大きかったら\\nif (___ ___ ___)\\n___\\n    // 「合格！」と表示する\\n    ___.___(\"___\");\\n___",
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
          "int型の変数scoreに100を代入します。",
          null,
          "if文でscore > 80の条件を判定します。",
          "ブロックの開始です。",
          null,
          "Console.WriteLineで\"合格！\"を出力します。",
          "ブロックを閉じます。"
        ],
        "candidates": {
          "keywords": [
            "if",
            "while"
          ],
          "numbers": [
            "100",
            "80"
          ],
          "strings": [
            "合格！"
          ],
          "others": ["int", "score", ">", "{", "Console", "WriteLine", "}"]
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
      "holeyCode": "// ageに10を入れる\\n___ ___ = ___;\\n// 20歳以上かどうかで分ける\\nif (___ ___ ___)\\n___\\n    // 「大人」と出力\\n    ___.___(\"___\");\\n___\\n// else でそれ以外の場合\\n___\\n___\\n    // 「子供」と出力\\n    ___.___(\"___\");\\n___",
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
          "int型の変数ageに10を代入します。",
          null,
          "if文でage >= 20の条件を判定します。",
          "ブロックの開始です。",
          null,
          "Console.WriteLineで\"大人\"を出力します。",
          "ブロックを閉じます。",
          null,
          "条件が偽の場合の処理を定義します。",
          "ブロックの開始です。",
          null,
          "Console.WriteLineで\"子供\"を出力します。",
          "ブロックを閉じます。"
        ],
        "candidates": {
          "keywords": [
            "else",
            "elif"
          ],
          "numbers": [
            "10",
            "20"
          ],
          "strings": [
            "大人",
            "子供"
          ],
          "others": ["int", "age", ">=", "{", "Console", "WriteLine", "}", "else"]
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
      "holeyCode": "// score と bonus を定義\\n___ ___ = ___;\\n___ ___ = ___;\\n// && で両方の条件をチェック\\nif (___ ___ ___ ___ ___ ___ ___)\\n___\\n    ___.___(\"___\");\\n___",
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
          "int型の変数scoreに80を代入します。",
          "int型の変数bonusに10を代入します。",
          null,
          "if文でscore >= 70 && bonus > 0の条件を判定します。",
          "ブロックの開始です。",
          "Console.WriteLineで\"ボーナスあり合格\"を出力します。",
          "ブロックを閉じます。"
        ],
        "candidates": {
          "operators": [
            "&&",
            "||",
            ">=",
            ">"
          ],
          "others": ["int", "score", "bonus", "80", "10", "70", "0", "{", "Console", "WriteLine", "ボーナスあり合格", "}"]
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
      "holeyCode": "// namesに{\"太郎\", \"花子\"}を代入\\n___[] ___ = {\"___\", \"___\"};\\n// 順番に取り出すループ\\nforeach (___ ___ in ___)\\n___\\n    // 取り出した名前を表示\\n    ___.___(___);\\n___",
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
          "string[]型の変数namesに{\"太郎\", \"花子\"}を代入します。",
          null,
          "foreach文でnamesの各要素をstring型のnameに取り出します。",
          "ブロックの開始です。",
          null,
          "Console.WriteLineで変数nameを出力します。",
          "ブロックを閉じます。"
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
          "others": ["string", "names", "{", "Console", "WriteLine", "}"]
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
      "holeyCode": "// Dictionaryを作る\\n___ ___ = new ___<___, ___>();\\n// キーと値を追加\\n___[\"___\"] = \"___\";\\n// キーを指定して値を取り出す\\n___.___(___[\"___\"]);",
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
          "var型の変数fruitsにDictionary<string, string>を作成します。",
          null,
          "fruits[\"みかん\"]に\"オレンジ\"を代入します。",
          null,
          "Console.WriteLineでfruits[\"みかん\"]の値を出力します。"
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
          "others": ["var", "fruits", "string", "Console", "WriteLine"]
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
      "holeyCode": "// Greetというメソッドを定義\\nstatic void ___()\\n___\\n    // こんにちは と表示\\n    ___.___(\"___\");\\n___\\n// メソッドを呼び出す\\n___();",
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
          "static void Greet()でメソッドを定義します。",
          "ブロックの開始です。",
          null,
          "Console.WriteLineで\"こんにちは\"を出力します。",
          "ブロックを閉じます。",
          null,
          "Greet()でメソッドを呼び出します。"
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
          "others": ["{", "Console", "WriteLine", "}"]
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
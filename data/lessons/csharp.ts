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
      "description": "C#を使って画面にメッセージを出してみましょう。Console.WriteLine という関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "C#（シーシャープ）とは？",
          "image": "/illustrations/common/monitor.png",
          "content": "# 幅広く使われる万能な言葉\n\nC#は、デスクトップアプリからスマホアプリ、さらにはゲーム開発（Unity）まで、何でも作れる非常に強力な言葉です。ルールがしっかり決まっていて、大規模な開発に向いています。"
        },
        {
          "title": "画面に文字を出すには？",
          "image": "/illustrations/common/monitor.png",
          "content": "# Console.WriteLine\n\n画面に文字を出したいときは、`Console.WriteLine()` という命令を使います。最後には `;`（セミコロン）を忘れないようにしましょう。\n\n**コード例：**\n```csharp\nConsole.WriteLine(\"ヤッホー！\");\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 画面にメッセージを出す関数\nConsole.WriteLine(\"Hello, C#!\");",
      "holeyCode": "// 画面にメッセージを出す関数\nConsole.WriteLine(\"___\");",
      "correctLines": [
        "// 画面にメッセージを出す関数",
        "Console.WriteLine(\"Hello, C#!\");"
      ],
      "lineHints": [
        null,
        "Console.WriteLine を使って文字を出します。"
      ],
      "candidates": {
        "functions": ["Console.WriteLine"],
        "strings": ["Hello, C#!"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, C#!\n"
        }
      ]
    },
    {
      "title": "便利な「はこ」変数（へんすう）",
      "description": "データに名前をつけて保存できる「変数（へんすう）」を使ってみましょう。C#では型を指定して変数を作ります。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "変数（へんすう）とは？",
          "image": "/illustrations/common/box.png",
          "content": "# データを保存する「はこ」\n\nプログラムの中では、数字や文字をしまっておく「はこ」を作ることができます。これを **変数（へんすう）** と呼びます。"
        },
        {
          "title": "型を指定する",
          "image": "/illustrations/common/box.png",
          "content": "# stringで文字列を保存\n\nC#では、変数に入れるデータの種類（型）を最初に書きます。\n\n```csharp\nstring name = \"C#\";\nConsole.WriteLine(name);\n```\n=> C#"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// nameというはこに \"CSharp\" を入れる\nstring name = \"CSharp\";\n// はこの中身を画面に出す\nConsole.WriteLine(name);",
      "holeyCode": "// nameというはこに \"CSharp\" を入れる\n___ name = \"___\";\n// はこの中身を画面に出す\nConsole.WriteLine(___);",
      "correctLines": [
        "// nameというはこに \"CSharp\" を入れる",
        "string name = \"CSharp\";",
        "// はこの中身を画面に出す",
        "Console.WriteLine(name);"
      ],
      "lineHints": [
        null,
        "文字列型は string です。CSharp と入力しましょう。",
        null,
        "変数名 name を入力します。"
      ],
      "candidates": {
        "types": ["string", "int"],
        "variables": ["name"],
        "strings": ["CSharp"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "CSharp\n"
        }
      ]
    },
    {
      "title": "コンピュータで計算しましょう",
      "description": "C#を使って、たし算をしてみましょう。int型の変数を使って計算します。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "数値を扱う",
          "image": "/illustrations/common/robot_math.png",
          "content": "# int型で整数を保存\n\n整数を保存するには `int` 型を使います。\n\n```csharp\nint x = 10;\nint y = 5;\nConsole.WriteLine(x + y);  // => 15\n```"
        },
        {
          "title": "計算の記号",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 四則演算\n\n- **+** : たし算\n- **-** : ひき算\n- **\\*** : かけ算\n- **/** : わり算"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// xというはこに 10 を入れる\nint x = 10;\n// yというはこに 5 を入れる\nint y = 5;\n// x と y をたした答えを出す\nConsole.WriteLine(x + y);",
      "holeyCode": "// xというはこに 10 を入れる\n___ x = ___;\n// yというはこに 5 を入れる\n___ y = ___;\n// x と y をたした答えを出す\nConsole.WriteLine(x ___ y);",
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
        "整数型は int です。10 と入力しましょう。",
        null,
        "整数型は int です。5 と入力しましょう。",
        null,
        "たし算なので + を使います。"
      ],
      "candidates": {
        "types": ["int", "string"],
        "numbers": ["10", "5"],
        "operators": ["+", "-", "*", "/"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "15\n"
        }
      ]
    },
    {
      "title": "文章の中に変数を入れましょう",
      "description": "文字列補間（$記号）を使って、変数の値を文章の中に入れましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "文字列補間とは？",
          "image": "/illustrations/common/fstring.png",
          "content": "# 文章と変数を組み合わせる\n\n文字列の前に `$` をつけて、`{}` の中に変数名を入れます。\n\n```csharp\nint age = 10;\nConsole.WriteLine($\"私は{age}歳です\");\n```\n=> 私は10歳です"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// ageというはこに 10 を入れる\nint age = 10;\n// 文字列補間を使ってメッセージを出す\nConsole.WriteLine($\"私は{age}歳です\");",
      "holeyCode": "// ageというはこに 10 を入れる\nint age = ___;\n// 文字列補間を使ってメッセージを出す\nConsole.WriteLine(___\"私は{___}歳です\");",
      "correctLines": [
        "// ageというはこに 10 を入れる",
        "int age = 10;",
        "// 文字列補間を使ってメッセージを出す",
        "Console.WriteLine($\"私は{age}歳です\");"
      ],
      "lineHints": [
        null,
        "10 と入力しましょう。",
        null,
        "$ を先頭につけて、age を {} の中に入力します。"
      ],
      "candidates": {
        "variables": ["age"],
        "numbers": ["10"],
        "operators": ["$"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "私は10歳です\n"
        }
      ]
    },
    {
      "title": "たくさんのデータをまとめましょう「配列」",
      "description": "配列を使って、たくさんのデータを一つにまとめて管理しましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "配列とは？",
          "image": "/illustrations/common/list.png",
          "content": "# データの行列\n\nたくさんのデータを順番に並べておきたいときに使うのが **配列** です。\n\n```csharp\nstring[] fruits = {\"りんご\", \"バナナ\"};\n```"
        },
        {
          "title": "配列の番号は0から",
          "image": "/illustrations/common/list.png",
          "content": "# インデックス\n\n配列の最初の要素は0番目です。\n\n```csharp\nConsole.WriteLine(fruits[0]);  // => りんご\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// colorsという配列を作る\nstring[] colors = {\"赤\", \"青\", \"緑\"};\n// 2番目のデータを出す\nConsole.WriteLine(colors[1]);",
      "holeyCode": "// colorsという配列を作る\nstring[] colors = {\"___\", \"___\", \"___\"};\n// 2番目のデータを出す\nConsole.WriteLine(colors[___]);",
      "correctLines": [
        "// colorsという配列を作る",
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
        "strings": ["赤", "青", "緑"],
        "numbers": ["0", "1", "2"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "青\n"
        }
      ]
    },
    {
      "title": "「もし〜なら」で分ける if文",
      "description": "条件によって動きを変える if文を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "条件分岐とは？",
          "image": "/illustrations/common/if.png",
          "content": "# プログラムに判断をさせる\n\n状況によって動きを変えることを **条件分岐** と呼びます。"
        },
        {
          "title": "if の使い方",
          "image": "/illustrations/common/if.png",
          "content": "# もし〜なら\n\nC#では `if` のあとに条件を `()` で囲みます。\n\n```csharp\nif (score > 80)\n{\n    Console.WriteLine(\"合格！\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// scoreに100を入れる\nint score = 100;\n// もし80より大きかったら\nif (score > 80)\n{\n    // メッセージを表示する\n    Console.WriteLine(\"合格！\");\n}",
      "holeyCode": "// scoreに100を入れる\nint score = ___;\n// もし80より大きかったら\n___ (score > 80)\n{\n    // メッセージを表示する\n    Console.WriteLine(\"___\");\n}",
      "correctLines": [
        "// scoreに100を入れる",
        "int score = 100;",
        "// もし80より大きかったら",
        "if (score > 80)",
        "{",
        "    // メッセージを表示する",
        "    Console.WriteLine(\"合格！\");",
        "}"
      ],
      "lineHints": [
        null,
        "100 と入力しましょう。",
        null,
        "条件分岐のキーワード if を使います。",
        null,
        null,
        "合格！ と入力しましょう。",
        null
      ],
      "candidates": {
        "keywords": ["if", "while"],
        "numbers": ["100"],
        "strings": ["合格！"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "合格！\n"
        }
      ]
    },
    {
      "title": "ちがう場合は？ if-else文",
      "description": "「もし〜なら」のあとに、「そうじゃなければ」という別の動きも作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "else とは？",
          "image": "/illustrations/common/if.png",
          "content": "# それ以外の場合\n\n条件に当てはまらなかったときの動きを作るのが **else** です。"
        },
        {
          "title": "if-else の使い方",
          "image": "/illustrations/common/if.png",
          "content": "# 2つのルート\n\n```csharp\nint age = 10;\nif (age >= 20)\n{\n    Console.WriteLine(\"大人\");\n}\nelse\n{\n    Console.WriteLine(\"子供\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// ageに10を入れる\nint age = 10;\n// 20歳以上かどうかで分ける\nif (age >= 20)\n{\n    Console.WriteLine(\"大人\");\n}\nelse\n{\n    // それ以外の場合\n    Console.WriteLine(\"子供\");\n}",
      "holeyCode": "// ageに10を入れる\nint age = ___;\n// 20歳以上かどうかで分ける\nif (age >= 20)\n{\n    Console.WriteLine(\"___\");\n}\n___\n{\n    // それ以外の場合\n    Console.WriteLine(\"___\");\n}",
      "correctLines": [
        "// ageに10を入れる",
        "int age = 10;",
        "// 20歳以上かどうかで分ける",
        "if (age >= 20)",
        "{",
        "    Console.WriteLine(\"大人\");",
        "}",
        "else",
        "{",
        "    // それ以外の場合",
        "    Console.WriteLine(\"子供\");",
        "}"
      ],
      "lineHints": [
        null,
        "10 と入力しましょう。",
        null,
        null,
        null,
        "大人 と入力しましょう。",
        null,
        "else を入力しましょう。",
        null,
        null,
        "子供 と入力しましょう。",
        null
      ],
      "candidates": {
        "keywords": ["else", "elif"],
        "numbers": ["10"],
        "strings": ["大人", "子供"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "子供\n"
        }
      ]
    },
    {
      "title": "ぐるぐる回す foreach",
      "description": "配列の中身を一つずつ順番に取り出して処理する foreach を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "繰り返し処理",
          "image": "/illustrations/common/loop.png",
          "content": "# 同じ処理を何度も\n\n配列の中身を全部見たいときは **foreach** を使うと便利です。"
        },
        {
          "title": "foreach の使い方",
          "image": "/illustrations/common/loop.png",
          "content": "# 各要素を取り出す\n\n```csharp\nstring[] names = {\"太郎\", \"花子\"};\nforeach (string name in names)\n{\n    Console.WriteLine(name);\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 名前の配列を作る\nstring[] names = {\"太郎\", \"花子\"};\n// 順番に取り出すループ\nforeach (string name in names)\n{\n    // 取り出した名前を表示\n    Console.WriteLine(name);\n}",
      "holeyCode": "// 名前の配列を作る\nstring[] names = {\"___\", \"___\"};\n// 順番に取り出すループ\n___ (string name in names)\n{\n    // 取り出した名前を表示\n    Console.WriteLine(___);\n}",
      "correctLines": [
        "// 名前の配列を作る",
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
        null,
        null,
        "変数名 name を入力します。",
        null
      ],
      "candidates": {
        "keywords": ["foreach", "for"],
        "variables": ["name"],
        "strings": ["太郎", "花子"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "太郎\n花子\n"
        }
      ]
    },
    {
      "title": "名前で探しましょう「Dictionary」",
      "description": "Dictionaryを使うと、名前（キー）を指定してデータを取り出せます。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "Dictionaryとは？",
          "image": "/illustrations/common/dict.png",
          "content": "# キーと値のペア\n\nDictionaryは、キーワードとデータのセットです。\n\n```csharp\nvar dict = new Dictionary<string, string>();\ndict[\"りんご\"] = \"赤\";\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// Dictionaryを作る\nvar fruits = new Dictionary<string, string>();\n// キーと値を追加\nfruits[\"みかん\"] = \"オレンジ\";\n// キーを指定して値を取り出す\nConsole.WriteLine(fruits[\"みかん\"]);",
      "holeyCode": "// Dictionaryを作る\nvar fruits = new ___<string, string>();\n// キーと値を追加\nfruits[\"___\"] = \"___\";\n// キーを指定して値を取り出す\nConsole.WriteLine(fruits[\"___\"]);",
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
        "types": ["Dictionary", "List"],
        "strings": ["みかん", "オレンジ"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "オレンジ\n"
        }
      ]
    },
    {
      "title": "自分だけの関数を作ろう「メソッド」",
      "description": "自分だけのメソッド（関数）を作ってみましょう。static void で定義します。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "メソッドとは？",
          "image": "/illustrations/common/function.png",
          "content": "# 処理をまとめる\n\n一連の処理をひとまとめにして、名前をつけたものを **メソッド** と呼びます。"
        },
        {
          "title": "メソッドを定義",
          "image": "/illustrations/common/function.png",
          "content": "# static void で定義\n\n```csharp\nstatic void Greet()\n{\n    Console.WriteLine(\"こんにちは\");\n}\n\n// 呼び出し\nGreet();\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// Greetというメソッドを定義\nstatic void Greet()\n{\n    // こんにちは と表示\n    Console.WriteLine(\"こんにちは\");\n}\n// メソッドを呼び出す\nGreet();",
      "holeyCode": "// Greetというメソッドを定義\nstatic ___ Greet()\n{\n    // こんにちは と表示\n    Console.WriteLine(\"___\");\n}\n// メソッドを呼び出す\n___();",
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
        null,
        null,
        "こんにちは と入力しましょう。",
        null,
        null,
        "メソッド名 Greet を入力して呼び出します。"
      ],
      "candidates": {
        "keywords": ["void", "int"],
        "methods": ["Greet"],
        "strings": ["こんにちは"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "こんにちは\n"
        }
      ]
    }
  ]
};

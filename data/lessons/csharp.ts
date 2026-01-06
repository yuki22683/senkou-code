export const csharpData = {
  "language": "csharp",
  "lessonId": "csharp-1",
  "lessonTitle": "C# (シーシャープ) にちょうせん！",
  "lessonDescription": "Microsoft（マイクロソフト）が作った言葉「C#（シーシャープ）」のきほんを学びましょう。いろいろなアプリを作るための土台を身につけます。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "description": "C#を使って画面に文字を表示してみましょう。Console.WriteLine という関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "C#の決まり文句",
          "content": "# おまじないを入力しましょう\n\nC#でプログラムを入力するときは、必ず入力しなければいけない「決まり文句」があります。\n\n```csharp\npublic class Program {\n    public static void Main() {\n        // ここにやりたいことを入力します\n    }\n}\n```\n\n画面に文字を出したいときは、`System.Console.WriteLine()` という長い名前の関数を使います。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Program {\n    public static void Main() {\n        // 画面にメッセージを出す関数\n        System.Console.WriteLine(\"Hello, C#!\");\n    }\n}",
      "holeyCode": "public class Program {\n    public static void Main() {\n        // 画面にメッセージを出す関数\n        System.Console.WriteLine(\"___\");\n    }\n}",
      "correctLines": [
        "public class Program {",
        "    public static void Main() {",
        "        System.Console.WriteLine(\"Hello, C#!\");",
        "    }",
        "}"
      ],
      "lineHints": [
        "プログラムをまとめる「クラス」という名前です。",
        "ここからプログラムがスタートします、という合図ですよ。",
        "WriteLine 関数を使って、() の中の文字を画面に出します。",
        "スタート合図の終わりです。",
        "プログラム全体の終わりです。"
      ],
      "candidates": {
        "strings": [
          "Hello, C#!"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, C#!\n"
        }
      ]
    },
    {
      "title": "数字を入れる「はこ」",
      "description": "数字をしまっておく「はこ」を作って、中身を表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "数字のラベル int",
          "content": "# 整数（せいすう）のラベル\n\n数字を入れたいときは、`int`（イント）というラベルを貼ります。\n\n**コード例：**\n```csharp\nint x = 10;\nSystem.Console.WriteLine(x);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Program {\n    public static void Main() {\n        int x = 10;\n        System.Console.WriteLine(x);\n    }\n}",
      "holeyCode": "public class Program {\n    public static void Main() {\n        int x = ___ ;\n        System.Console.WriteLine(___);\n    }\n}",
      "correctLines": [
        "public class Program {",
        "    public static void Main() {",
        "        int x = 10;",
        "        System.Console.WriteLine(x);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "x = 10 と入力しましょう。",
        "はこの名前 x を指定して、表示させます。"
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
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "コンピュータで計算しましょう",
      "description": "C#を使って、たし算をしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "計算の記号",
          "content": "# 四則演算\n\nC#でも、算数と同じ記号を使って計算をします。\n\n- **+** : たし算\n- **-** : ひき算\n- **\\*** : かけ算\n- **/** : わり算"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Program {\n    public static void Main() {\n        int a = 5;\n        int b = 3;\n        // たし算した答えを出す\n        System.Console.WriteLine(a + b);\n    }\n}",
      "holeyCode": "public class Program {\n    public static void Main() {\n        int a = 5;\n        int b = 3;\n        System.Console.WriteLine(a ___ b);\n    }\n}",
      "correctLines": [
        "public class Program {",
        "    public static void Main() {",
        "        int a = 5;",
        "        int b = 3;",
        "        System.Console.WriteLine(a + b);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "a = 5 と入力しましょう。",
        "b = 3 と入力しましょう。",
        "たし算なので `+` を使います。"
      ],
      "candidates": {
        "operators": [
          "+"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "8\n"
        }
      ]
    },
    {
      "title": "文章の中に「はこ」を入れましょう",
      "description": "「文字列補間（ほかん）」という機能を使って、文章の中に「はこ（変数）」の中身を表示します。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "$（ダラー）を使いましょう",
          "content": "# 文字列補間\n\n`$\" \"`（ダラーとダブルクォーテーション）で囲むと、その中で `{း}` と入力するだけで、中身を文章に入れられますよ。\n\n**コード例：**\n```csharp\nint age = 10;\nSystem.Console.WriteLine($\"私は {age} 歳です\");\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Program {\n    public static void Main() {\n        int age = 10;\n        System.Console.WriteLine($\"I am {age} years old.\");\n    }\n}",
      "holeyCode": "public class Program {\n    public static void Main() {\n        int age = 10;\n        System.Console.WriteLine($\"I am {___} years old.\");\n    }\n}",
      "correctLines": [
        "public class Program {",
        "    public static void Main() {",
        "        int age = 10;",
        "        System.Console.WriteLine($\"I am {age} years old.\");",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "age に 10 を入力します。",
        "はこの名前 age を指定します。"
      ],
      "candidates": {
        "variables": [
          "age"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "I am 10 years old.\n"
        }
      ]
    },
    {
      "title": "データをならべる「配列」",
      "description": "同じラベルのデータをまとめて並べておける「配列（はいれつ）」を使ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "データの番号は 0 から！",
          "content": "# [ ]（しかくい かっこ）を使いましょう\n\n配列の中身を取り出すときは、何番目かを指定します。さいしょのデータは **「0番」** から数えるのがルールですよ。\n\n**コード例：**\n```csharp\nint[] nums = {10, 20};\nSystem.Console.WriteLine(nums[0]); // 10 が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Program {\n    public static void Main() {\n        int[] nums = {10, 20};\n        // 2番目（番号は1）を出す\n        System.Console.WriteLine(nums[1]);\n    }\n}",
      "holeyCode": "public class Program {\n    public static void Main() {\n        int[] nums = {10, 20};\n        System.Console.WriteLine(nums[___]);\n    }\n}",
      "correctLines": [
        "public class Program {",
        "    public static void Main() {",
        "        int[] nums = {10, 20};",
        "        System.Console.WriteLine(nums[1]);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "{10, 20} と入力しましょう。 { } を使うのがルールです。",
        "2番目のデータの番号は 1 です。 `nums[1]` と入力してください。"
      ],
      "candidates": {
        "numbers": [
          "1"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "20\n"
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
          "content": "# ( ) と { } を使いましょう\n\nC#でも、`if (条件)` のあとに `{ }` を入力して、その中にやりたいことを入力します。\n\n**コード例：**\n```csharp\nif (score > 80) {\n    System.Console.WriteLine(\"合格！\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Program {\n    public static void Main() {\n        int score = 100;\n        if (score > 80) {\n            System.Console.WriteLine(\"Excellent\");\n        }\n    }\n}",
      "holeyCode": "public class Program {\n    public static void Main() {\n        int score = 100;\n        if (score ___ 80) {\n            System.Console.WriteLine(\"___");\n        }\n    }\n}",
      "correctLines": [
        "public class Program {",
        "    public static void Main() {",
        "        int score = 100;",
        "        if (score > 80) {",
        "            System.Console.WriteLine(\"Excellent\");",
        "        }",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "score = 100 と入力しましょう。",
        "比較するための記号 `>` を入力しましょう。",
        "Excellent と表示します。"
      ],
      "candidates": {
        "operators": [
          ">
        ],
        "strings": [
          "Excellent"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Excellent\n"
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
          "content": "# どちらかを選びます\n\n条件に当てはまらないときの動きは `else` を使って入力します。\n\n**コード例：**\n```csharp\nif (age >= 20) {\n    System.Console.WriteLine(\"大人です\");\n} else {\n    System.Console.WriteLine(\"子供です\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Program {\n    public static void Main() {\n        int age = 18;\n        if (age >= 20) {\n            System.Console.WriteLine(\"Adult\");\n        } else {\n            System.Console.WriteLine(\"Minor\");\n        }\n    }\n}",
      "holeyCode": "public class Program {\n    public static void Main() {\n        int age = 18;\n        if (age >= 20) {\n            System.Console.WriteLine(\"Adult\");\n        } ___ {\n            System.Console.WriteLine(\"Minor\");\n        }\n    }\n}",
      "correctLines": [
        "public class Program {",
        "    public static void Main() {",
        "        int age = 18;",
        "        if (age >= 20) {",
        "            System.Console.WriteLine(\"Adult\");",
        "        } else {",
        "            System.Console.WriteLine(\"Minor\");",
        "        }",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "age に 18 を入力します。",
        null,
        null,
        "そうでなければ、をあらわす `else` を入力しましょう。"
      ],
      "candidates": {
        "keywords": [
          "else"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Minor\n"
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
          "content": "# 全部取り出しましょう\n\n「はこ（配列）」の中に入っているものを、最初から最後まで順番に取り出す便利なループです。\n\n**コード例：**\n```csharp\nint[] nums = {1, 2, 3};\nforeach (int n in nums) {\n    System.Console.WriteLine(n);\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Program {\n    public static void Main() {\n        int[] nums = {1, 2, 3};\n        // 全部取り出すループ\n        foreach (int n in nums) {\n            System.Console.WriteLine(n);\n        }\n    }\n}",
      "holeyCode": "public class Program {\n    public static void Main() {\n        int[] nums = {1, 2, 3};\n        foreach (int n ___ nums) {\n            System.Console.WriteLine(n);\n        }\n    }\n}",
      "correctLines": [
        "public class Program {",
        "    public static void Main() {",
        "        int[] nums = {1, 2, 3};",
        "        foreach (int n in nums) {",
        "            System.Console.WriteLine(n);",
        "        }",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "「〜の中で」をあらわす `in` キーワードを入力します。"
      ],
      "candidates": {
        "keywords": [
          "in"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n2\n3\n"
        }
      ]
    },
    {
      "title": "名前で探す「じしょ」",
      "description": "Dictionary（ディクショナリ）を使って、名前を指定してデータを取り出してみましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "Dictionary",
          "content": "# キーとあたいのペア\n\n「名前」と「データ」をセットにして保存できます。まさに辞書のように使うことができますよ。\n\n**コード例：**\n```csharp\nusing System.Collections.Generic;\nvar scores = new Dictionary<string, int>();\nscores[\"Math\"] = 90;\nSystem.Console.WriteLine(scores[\"Math\"]);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "using System.Collections.Generic;\npublic class Program {\n    public static void Main() {\n        var scores = new Dictionary<string, int>();\n        scores[\"Math\"] = 90;\n        System.Console.WriteLine(scores[\"Math\"]);\n    }\n}",
      "holeyCode": "using System.Collections.Generic;\npublic class Program {\n    public static void Main() {\n        var scores = new Dictionary<___, int>();\n        scores[\"Math\"] = 90;\n        System.Console.WriteLine(scores[\"___"]);\n    }\n}",
      "correctLines": [
        "using System.Collections.Generic;",
        "public class Program {",
        "    public static void Main() {",
        "        var scores = new Dictionary<string, int>();",
        "        scores[\"Math\"] = 90;",
        "        System.Console.WriteLine(scores[\"Math\"]);",
        "    }",
        "}"
      ],
      "lineHints": [
        "辞書機能を使えるように準備します。",
        null,
        null,
        "キーは string 型です。",
        null,
        "\"Math\" という名前を指定してデータを取り出します。"
      ],
      "candidates": {
        "strings": [
          "string",
          "Math"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "90\n"
        }
      ]
    },
    {
      "title": "自分だけの関数を作りましょう",
      "description": "一連の手順をまとめて、名前をつけた「関数（メソッド）」を作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "手順をまとめる",
          "content": "# メソッドの定義\n\nやりたいことをひとまとめにして、名前をつけることができます。呼び出すだけでいつでも動かせますよ。\n\n**コード例：**\n```csharp\npublic static void Greet() {\n    System.Console.WriteLine(\"こんにちは\");\n}\n\n// Mainの中で呼び出し\nGreet();\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Program {\n    public static void Greet() {\n        System.Console.WriteLine(\"Hello\");\n    }\n    public static void Main() {\n        Greet();\n    }\n}",
      "holeyCode": "public class Program {\n    public static void Greet() {\n        System.Console.WriteLine(\"Hello\");\n    }\n    public static void Main() {\n        ___();\n    }\n}",
      "correctLines": [
        "public class Program {",
        "    public static void Greet() {",
        "        System.Console.WriteLine(\"Hello\");",
        "    }",
        "    public static void Main() {",
        "        Greet();",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        "Greet という名前の関数（メソッド）を定義します。",
        null,
        "関数の終わりです。",
        null,
        "Greet(); と入力して、関数を実行します。"
      ],
      "candidates": {
        "functions": [
          "Greet"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello\n"
        }
      ]
    }
  ]
}
export const csharpData = {
  "language": "csharp",
  "lessonId": "csharp-1",
  "lessonTitle": "C# I",
  "lessonDescription": "Microsoftが開発した汎用プログラミング言語C#の基本を学びます。.NETの強力な機能を体験しましょう。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "Hello Worldを出力しよう",
      "description": "C#で画面に文字を表示するには Console.WriteLine を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "基本構造",
          "content": "# Class & Main\n\nC#では `class` の中に `Main` メソッドを記述します。\n\n**コード例：**\n```csharp\npublic class Program {\n    public static void Main() {\n        System.Console.WriteLine(\"Hello, C#!\");\n    }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Program {\n    public static void Main() {\n        System.Console.WriteLine(\"Hello, C#!\");\n    }\n}",
      "holeyCode": "public class Program {\n    public static void Main() {\n        System.Console.WriteLine(\"___\");\n    }\n}",
      "correctLines": [
        "public class Program {",
        "    public static void Main() {",
        "        System.Console.WriteLine(\"Hello, C#!\");",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "Hello, C#! を出力します。"
      ],
      "candidates": {
        "strings": [
          "Hello, C#! पुरु"
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
      "title": "変数",
      "description": "変数を宣言して値を代入しましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "変数の型",
          "content": "# 静的型付け\n\n変数を宣言するときに型を指定します。\n\n**コード例：**\n```csharp\nint x = 10;\nSystem.Console.WriteLine(x);\n```"
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
        "10を代入します。",
        "xを出力します。"
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
      "title": "計算",
      "description": "足し算を行いましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "演算",
          "content": "# 四則演算\n\n+, -, *, / などが使えます。\n\n**コード例：**\n```csharp\nint a = 5;\nint b = 3;\nSystem.Console.WriteLine(a + b);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Program {\n    public static void Main() {\n        int a = 5;\n        int b = 3;\n        System.Console.WriteLine(a + b);\n    }\n}",
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
        null,
        null,
        "a + b を出力します。"
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
      "title": "文字列補間",
      "description": "C#の強力な機能である文字列補間（String Interpolation）を使いましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "文字列補間",
          "content": "# $記号\n\n`$\"文字列{変数}\"` と書くことで、変数を埋め込めます。\n\n**コード例：**\n```csharp\nint age = 20;\nSystem.Console.WriteLine($\"年齢は {age} 歳です\");\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Program {\n    public static void Main() {\n        int age = 20;\n        System.Console.WriteLine($\"I am {age} years old.\");\n    }\n}",
      "holeyCode": "public class Program {\n    public static void Main() {\n        int age = 20;\n        System.Console.WriteLine($\"I am {___} years old.\");\n    }\n}",
      "correctLines": [
        "public class Program {",
        "    public static void Main() {",
        "        int age = 20;",
        "        System.Console.WriteLine($\"I am {age} years old.\");",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "age変数を埋め込みます。"
      ],
      "candidates": {
        "variables": [
          "age"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "I am 20 years old.\n"
        }
      ]
    },
    {
      "title": "配列",
      "description": "配列を作成して要素にアクセスしましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "配列",
          "content": "# 宣言と初期化\n\n同じ種類のデータをまとめて扱います。インデックスは0から始まります。\n\n**コード例：**\n```csharp\nint[] nums = {10, 20};\nSystem.Console.WriteLine(nums[1]); // 20 を出力\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Program {\n    public static void Main() {\n        int[] nums = {10, 20};\n        System.Console.WriteLine(nums[1]);\n    }\n}",
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
        null,
        "インデックス1を指定します。"
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
      "title": "if文",
      "description": "条件分岐を行います。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if文",
          "content": "# if (条件)\n\n条件式は丸括弧で囲み、その後ろに `{ }` で処理を書きます。\n\n**コード例：**\n```csharp\nif (score > 80) {\n    System.Console.WriteLine(\"合格\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Program {\n    public static void Main() {\n        int score = 100;\n        if (score > 80) {\n            System.Console.WriteLine(\"Excellent\");\n        }\n    }\n}",
      "holeyCode": "public class Program {\n    public static void Main() {\n        int score = 100;\n        if (score ___ 80) {\n            System.Console.WriteLine(\"___\");\n        }\n    }\n}",
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
        null,
        "比較演算子 > を使います。",
        "Excellent を出力します。"
      ],
      "candidates": {
        "operators": [
          ">"
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
      "title": "if-else文",
      "description": "elseを使って分岐させます。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "else",
          "content": "# elseブロック\n\n条件に当てはまらない場合の処理は `else` を使います。\n\n**コード例：**\n```csharp\nif (age >= 20) {\n    System.Console.WriteLine(\"大人\");\n} else {\n    System.Console.WriteLine(\"子供\");\n}\n```"
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
        null,
        null,
        null,
        "else を記述します。"
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
      "title": "foreach文",
      "description": "foreachを使って配列の要素を順番に取り出しましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "foreach",
          "content": "# ループ処理\n\n配列の全ての要素を一つずつ取り出すには `foreach` が便利です。\n\n**コード例：**\n```csharp\nint[] nums = {1, 2, 3};\nforeach (int n in nums) {\n    System.Console.WriteLine(n);\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Program {\n    public static void Main() {\n        int[] nums = {1, 2, 3};\n        foreach (int n in nums) {\n            System.Console.WriteLine(n);\n        }\n    }\n}",
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
        "in キーワードを使います。"
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
      "title": "Dictionary (辞書)",
      "description": "キーと値のペアを扱うDictionaryを使いましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "Dictionary",
          "content": "# 連想配列\n\nキー（名前）を使ってデータを管理します。\n\n**コード例：**\n```csharp\nusing System.Collections.Generic;\nvar scores = new Dictionary<string, int>();\nscores[\"Math\"] = 90;\nSystem.Console.WriteLine(scores[\"Math\"]);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "using System.Collections.Generic;\npublic class Program {\n    public static void Main() {\n        var scores = new Dictionary<string, int>();\n        scores[\"Math\"] = 90;\n        System.Console.WriteLine(scores[\"Math\"]);\n    }\n}",
      "holeyCode": "using System.Collections.Generic;\npublic class Program {\n    public static void Main() {\n        var scores = new Dictionary<___, int>();\n        scores[\"Math\"] = 90;\n        System.Console.WriteLine(scores[\"___\"]);\n    }\n}",
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
        null,
        null,
        null,
        "キーは string 型です。",
        null,
        "Math キーを指定します。"
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
      "title": "メソッド",
      "description": "メソッドを定義して呼び出します。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "メソッド定義",
          "content": "# 処理の共通化\n\n一連の処理に名前を付けて定義し、後で呼び出します。\n\n**コード例：**\n```csharp\npublic static void Greet() {\n    System.Console.WriteLine(\"Hello\");\n}\n\n// Mainの中で呼び出し\nGreet();\n```"
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
        null,
        null,
        null,
        null,
        "Greet(); で呼び出します。"
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

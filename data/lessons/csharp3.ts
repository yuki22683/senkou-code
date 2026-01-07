export const csharp3Data = {
  "language": "csharp",
  "lessonId": "csharp-3",
  "lessonTitle": "C# III - 非同期とLINQ応用",
  "lessonDescription": "C#の高度な機能を学びます。async/await、LINQ応用、パターンマッチングなどモダンC#を身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "exercises": [
    {
      "title": "async/await の基本",
      "description": "非同期処理を簡潔に書きましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "async/await とは？",
          "content": "# 非同期処理を同期的に書く\n\n**async/await** を使うと、非同期処理を同期的なコードのように書けます。\n\n```csharp\nasync Task<string> GetDataAsync() {\n    await Task.Delay(1000);\n    return \"Done!\";\n}\n```"
        },
        {
          "title": "Task を返す",
          "content": "# 戻り値の型\n\n```csharp\nasync Task DoWorkAsync()        // 戻り値なし\nasync Task<int> GetValueAsync() // int を返す\nasync void OnClick()            // イベントハンドラのみ\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "using System;\nusing System.Threading.Tasks;\n\nclass Program {\n    static async Task Main() {\n        var result = await GetMessageAsync();\n        Console.WriteLine(result);\n    }\n    \n    static async Task<string> GetMessageAsync() {\n        await Task.Delay(100);\n        return \"Hello Async!\";\n    }\n}",
      "holeyCode": "using System;\nusing System.Threading.Tasks;\n\nclass Program {\n    static async Task Main() {\n        var result = ___ GetMessageAsync();\n        Console.WriteLine(result);\n    }\n    \n    static async Task<string> GetMessageAsync() {\n        await Task.Delay(100);\n        return \"Hello Async!\";\n    }\n}",
      "correctLines": [
        "using System;",
        "using System.Threading.Tasks;",
        "",
        "class Program {",
        "    static async Task Main() {",
        "        var result = await GetMessageAsync();",
        "        Console.WriteLine(result);",
        "    }",
        "    ",
        "    static async Task<string> GetMessageAsync() {",
        "        await Task.Delay(100);",
        "        return \"Hello Async!\";",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "await で非同期処理の完了を待ちます。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["await", "async", "return"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello Async!\n"
        }
      ]
    },
    {
      "title": "LINQ OrderBy",
      "description": "要素をソートしましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "OrderBy とは？",
          "content": "# 並べ替え\n\n**OrderBy** は、指定したキーで昇順に並べ替えます。\n\n```csharp\nvar sorted = names.OrderBy(x => x.Length);\n```"
        },
        {
          "title": "降順ソート",
          "content": "# OrderByDescending\n\n```csharp\nvar desc = nums.OrderByDescending(x => x);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "using System;\nusing System.Linq;\n\nclass Program {\n    static void Main() {\n        var nums = new[] { 3, 1, 4, 1, 5 };\n        var sorted = nums.OrderBy(x => x);\n        Console.WriteLine(string.Join(\",\", sorted));\n    }\n}",
      "holeyCode": "using System;\nusing System.Linq;\n\nclass Program {\n    static void Main() {\n        var nums = new[] { 3, 1, 4, 1, 5 };\n        var sorted = nums.___(x => x);\n        Console.WriteLine(string.Join(\",\", sorted));\n    }\n}",
      "correctLines": [
        "using System;",
        "using System.Linq;",
        "",
        "class Program {",
        "    static void Main() {",
        "        var nums = new[] { 3, 1, 4, 1, 5 };",
        "        var sorted = nums.OrderBy(x => x);",
        "        Console.WriteLine(string.Join(\",\", sorted));",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        "OrderBy でソートします。",
        null,
        null,
        null
      ],
      "candidates": {
        "methods": ["OrderBy", "Sort", "Arrange"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1,1,3,4,5\n"
        }
      ]
    },
    {
      "title": "LINQ First と FirstOrDefault",
      "description": "最初の要素を取得しましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "First vs FirstOrDefault",
          "content": "# 最初の要素\n\n```csharp\nvar first = nums.First();  // 空なら例外\nvar firstOr = nums.FirstOrDefault();  // 空ならデフォルト値\n```"
        },
        {
          "title": "条件付き",
          "content": "# 条件を指定\n\n```csharp\nvar even = nums.First(x => x % 2 == 0);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "using System;\nusing System.Linq;\n\nclass Program {\n    static void Main() {\n        var nums = new int[] {};\n        var result = nums.FirstOrDefault();\n        Console.WriteLine(result);\n    }\n}",
      "holeyCode": "using System;\nusing System.Linq;\n\nclass Program {\n    static void Main() {\n        var nums = new int[] {};\n        var result = nums.___();\n        Console.WriteLine(result);\n    }\n}",
      "correctLines": [
        "using System;",
        "using System.Linq;",
        "",
        "class Program {",
        "    static void Main() {",
        "        var nums = new int[] {};",
        "        var result = nums.FirstOrDefault();",
        "        Console.WriteLine(result);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        "FirstOrDefault で空の場合はデフォルト値を返します。",
        null,
        null,
        null
      ],
      "candidates": {
        "methods": ["FirstOrDefault", "First", "Single"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "0\n"
        }
      ]
    },
    {
      "title": "LINQ Any と All",
      "description": "条件チェックを行いましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "Any とは？",
          "content": "# 1つでも条件を満たすか\n\n**Any** は、1つでも条件を満たす要素があれば true。\n\n```csharp\nbool hasNegative = nums.Any(x => x < 0);\n```"
        },
        {
          "title": "All とは？",
          "content": "# 全て条件を満たすか\n\n```csharp\nbool allPositive = nums.All(x => x > 0);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "using System;\nusing System.Linq;\n\nclass Program {\n    static void Main() {\n        var nums = new[] { 1, 2, 3, 4, 5 };\n        var allPositive = nums.All(x => x > 0);\n        Console.WriteLine(allPositive);\n    }\n}",
      "holeyCode": "using System;\nusing System.Linq;\n\nclass Program {\n    static void Main() {\n        var nums = new[] { 1, 2, 3, 4, 5 };\n        var allPositive = nums.___(x => x > 0);\n        Console.WriteLine(allPositive);\n    }\n}",
      "correctLines": [
        "using System;",
        "using System.Linq;",
        "",
        "class Program {",
        "    static void Main() {",
        "        var nums = new[] { 1, 2, 3, 4, 5 };",
        "        var allPositive = nums.All(x => x > 0);",
        "        Console.WriteLine(allPositive);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        "All で全ての要素が条件を満たすかチェックします。",
        null,
        null,
        null
      ],
      "candidates": {
        "methods": ["All", "Any", "Contains"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "True\n"
        }
      ]
    },
    {
      "title": "LINQ Sum と Average",
      "description": "合計と平均を計算しましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "Sum とは？",
          "content": "# 合計を計算\n\n**Sum** は、要素の合計を返します。\n\n```csharp\nvar total = nums.Sum();\nvar totalPrice = items.Sum(x => x.Price);\n```"
        },
        {
          "title": "Average",
          "content": "# 平均を計算\n\n```csharp\nvar avg = nums.Average();\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "using System;\nusing System.Linq;\n\nclass Program {\n    static void Main() {\n        var nums = new[] { 10, 20, 30 };\n        var total = nums.Sum();\n        Console.WriteLine(total);\n    }\n}",
      "holeyCode": "using System;\nusing System.Linq;\n\nclass Program {\n    static void Main() {\n        var nums = new[] { 10, 20, 30 };\n        var total = nums.___();\n        Console.WriteLine(total);\n    }\n}",
      "correctLines": [
        "using System;",
        "using System.Linq;",
        "",
        "class Program {",
        "    static void Main() {",
        "        var nums = new[] { 10, 20, 30 };",
        "        var total = nums.Sum();",
        "        Console.WriteLine(total);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        "Sum で合計を計算します。",
        null,
        null,
        null
      ],
      "candidates": {
        "methods": ["Sum", "Total", "Add"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "60\n"
        }
      ]
    },
    {
      "title": "switch式（パターンマッチ）",
      "description": "式としてのswitchを使いましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "switch式とは？",
          "content": "# 式として値を返す\n\nC# 8.0の **switch式** は、値を返す簡潔なswitch。\n\n```csharp\nvar result = value switch {\n    1 => \"one\",\n    2 => \"two\",\n    _ => \"other\"\n};\n```"
        },
        {
          "title": "パターンマッチング",
          "content": "# 型パターン\n\n```csharp\nvar msg = obj switch {\n    int i => $\"int: {i}\",\n    string s => $\"string: {s}\",\n    _ => \"unknown\"\n};\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "using System;\n\nclass Program {\n    static void Main() {\n        int n = 2;\n        var result = n switch {\n            1 => \"one\",\n            2 => \"two\",\n            _ => \"other\"\n        };\n        Console.WriteLine(result);\n    }\n}",
      "holeyCode": "using System;\n\nclass Program {\n    static void Main() {\n        int n = 2;\n        var result = n ___ {\n            1 => \"one\",\n            2 => \"two\",\n            _ => \"other\"\n        };\n        Console.WriteLine(result);\n    }\n}",
      "correctLines": [
        "using System;",
        "",
        "class Program {",
        "    static void Main() {",
        "        int n = 2;",
        "        var result = n switch {",
        "            1 => \"one\",",
        "            2 => \"two\",",
        "            _ => \"other\"",
        "        };",
        "        Console.WriteLine(result);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "switch式で値を返します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["switch", "match", "case"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "two\n"
        }
      ]
    },
    {
      "title": "Dictionary",
      "description": "キーと値のペアを管理しましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "Dictionary とは？",
          "content": "# キーと値のマップ\n\n**Dictionary** は、キーで値を検索できるコレクション。\n\n```csharp\nvar dict = new Dictionary<string, int> {\n    [\"apple\"] = 100,\n    [\"banana\"] = 80\n};\n```"
        },
        {
          "title": "値の取得",
          "content": "# TryGetValue\n\n```csharp\nif (dict.TryGetValue(\"apple\", out var price)) {\n    Console.WriteLine(price);\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "using System;\nusing System.Collections.Generic;\n\nclass Program {\n    static void Main() {\n        var dict = new Dictionary<string, int>();\n        dict[\"a\"] = 1;\n        dict[\"b\"] = 2;\n        Console.WriteLine(dict[\"a\"]);\n    }\n}",
      "holeyCode": "using System;\nusing System.Collections.Generic;\n\nclass Program {\n    static void Main() {\n        var dict = new ___<string, int>();\n        dict[\"a\"] = 1;\n        dict[\"b\"] = 2;\n        Console.WriteLine(dict[\"a\"]);\n    }\n}",
      "correctLines": [
        "using System;",
        "using System.Collections.Generic;",
        "",
        "class Program {",
        "    static void Main() {",
        "        var dict = new Dictionary<string, int>();",
        "        dict[\"a\"] = 1;",
        "        dict[\"b\"] = 2;",
        "        Console.WriteLine(dict[\"a\"]);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "Dictionary でキーと値のマップを作ります。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "types": ["Dictionary", "Map", "Hashtable"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n"
        }
      ]
    },
    {
      "title": "string interpolation",
      "description": "文字列補間で変数を埋め込みましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "文字列補間とは？",
          "content": "# $ で始める\n\n**$\"\"** で文字列内に変数を埋め込めます。\n\n```csharp\nvar name = \"Alice\";\nvar msg = $\"Hello, {name}!\";\n```"
        },
        {
          "title": "式も埋め込める",
          "content": "# 計算や呼び出し\n\n```csharp\n$\"Result: {1 + 2}\"      // Result: 3\n$\"Upper: {s.ToUpper()}\" // 式\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "using System;\n\nclass Program {\n    static void Main() {\n        var x = 10;\n        var y = 20;\n        Console.WriteLine($\"Sum: {x + y}\");\n    }\n}",
      "holeyCode": "using System;\n\nclass Program {\n    static void Main() {\n        var x = 10;\n        var y = 20;\n        Console.WriteLine(___\"Sum: {x + y}\");\n    }\n}",
      "correctLines": [
        "using System;",
        "",
        "class Program {",
        "    static void Main() {",
        "        var x = 10;",
        "        var y = 20;",
        "        Console.WriteLine($\"Sum: {x + y}\");",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        "$ で文字列補間を使います。",
        null,
        null
      ],
      "candidates": {
        "operators": ["$", "@", "#"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Sum: 30\n"
        }
      ]
    },
    {
      "title": "record 型",
      "description": "イミュータブルなデータ型を定義しましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "record とは？",
          "content": "# 値ベースの型\n\nC# 9.0の **record** は、値の等価性を持つ不変の型。\n\n```csharp\nrecord Person(string Name, int Age);\n\nvar p1 = new Person(\"Alice\", 25);\nvar p2 = new Person(\"Alice\", 25);\nConsole.WriteLine(p1 == p2);  // True\n```"
        },
        {
          "title": "with で複製",
          "content": "# 一部だけ変更\n\n```csharp\nvar p2 = p1 with { Age = 26 };\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "using System;\n\nrecord Point(int X, int Y);\n\nclass Program {\n    static void Main() {\n        var p = new Point(10, 20);\n        Console.WriteLine(p);\n    }\n}",
      "holeyCode": "using System;\n\n___ Point(int X, int Y);\n\nclass Program {\n    static void Main() {\n        var p = new Point(10, 20);\n        Console.WriteLine(p);\n    }\n}",
      "correctLines": [
        "using System;",
        "",
        "record Point(int X, int Y);",
        "",
        "class Program {",
        "    static void Main() {",
        "        var p = new Point(10, 20);",
        "        Console.WriteLine(p);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "record で値型を定義します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["record", "struct", "class"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Point { X = 10, Y = 20 }\n"
        }
      ]
    },
    {
      "title": "using で自動解放",
      "description": "リソースを自動的に解放しましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "using とは？",
          "content": "# 自動的にDispose\n\n**using** を使うと、スコープを出たときに自動的にDisposeが呼ばれます。\n\n```csharp\nusing var file = new StreamReader(\"file.txt\");\nvar content = file.ReadToEnd();\n// 自動的にDisposeされる\n```"
        },
        {
          "title": "旧式の書き方",
          "content": "# ブロック構文\n\n```csharp\nusing (var file = new StreamReader(\"file.txt\")) {\n    // ...\n}  // ここでDispose\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "using System;\nusing System.IO;\n\nclass Program {\n    static void Main() {\n        using var writer = new StringWriter();\n        writer.WriteLine(\"Hello\");\n        Console.WriteLine(writer.ToString().Trim());\n    }\n}",
      "holeyCode": "using System;\nusing System.IO;\n\nclass Program {\n    static void Main() {\n        ___ var writer = new StringWriter();\n        writer.WriteLine(\"Hello\");\n        Console.WriteLine(writer.ToString().Trim());\n    }\n}",
      "correctLines": [
        "using System;",
        "using System.IO;",
        "",
        "class Program {",
        "    static void Main() {",
        "        using var writer = new StringWriter();",
        "        writer.WriteLine(\"Hello\");",
        "        Console.WriteLine(writer.ToString().Trim());",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "using で自動的にDisposeします。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["using", "with", "try"]
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

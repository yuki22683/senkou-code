export const csharp4Data = {
  "language": "csharp",
  "lessonId": "csharp-4",
  "lessonTitle": "C# IV - ジェネリクスとデリゲート",
  "lessonDescription": "C#のジェネリクスとデリゲートを学びます。型安全で再利用可能なコードを書くスキルを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 4,
  "exercises": [
    {
      "title": "ジェネリッククラス",
      "description": "型パラメータを使ったクラスを作りましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "ジェネリクスとは？",
          "image": "/illustrations/3d_advanced/generics_glass.png",
          "content": "# 型を後から指定\n\n**ジェネリクス** で、型を後から指定できるクラスを作れます。\n\n```csharp\nclass Box<T> {\n    public T Value { get; set; }\n}\n\nvar intBox = new Box<int> { Value = 42 };\nvar strBox = new Box<string> { Value = \"Hello\" };\n```"
        },
        {
          "title": "型安全",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# コンパイル時チェック\n\n```csharp\nBox<int> box = new Box<int>();\nbox.Value = \"text\";  // コンパイルエラー！\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "using System;\n\nclass Container<T> {\n    public T Item { get; set; }\n}\n\nclass Program {\n    static void Main() {\n        var c = new Container<string> { Item = \"Hello\" };\n        Console.WriteLine(c.Item);\n    }\n}",
      "holeyCode": "using System;\n\n// <T>で型パラメータを定義\nclass Container___T___ {\n    public T Item { get; set; }\n}\n\nclass Program {\n    static void Main() {\n        var c = new Container<string> { Item = \"Hello\" };\n        Console.WriteLine(c.Item);\n    }\n}",
      "correctLines": [
        "using System;",
        "",
        "class Container<T> {",
        "    public T Item { get; set; }",
        "}",
        "",
        "class Program {",
        "    static void Main() {",
        "        var c = new Container<string> { Item = \"Hello\" };",
        "        Console.WriteLine(c.Item);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "<T> で型パラメータを定義します。",
        null,
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
        "symbols": ["<", ">"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello\n"
        }
      ]
    },
    {
      "title": "ジェネリック制約 where",
      "description": "型パラメータに制約を設けましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "where 制約",
          "image": "/illustrations/3d/robot.png",
          "content": "# 型の条件を指定\n\n**where** で型パラメータに制約を付けられます。\n\n```csharp\nclass Repo<T> where T : class, new() {\n    public T Create() => new T();\n}\n```"
        },
        {
          "title": "制約の種類",
          "image": "/illustrations/3d/robot.png",
          "content": "# よく使う制約\n\n```csharp\nwhere T : class      // 参照型\nwhere T : struct     // 値型\nwhere T : new()      // 引数なしコンストラクタ\nwhere T : IComparable // インターフェース\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "using System;\n\nclass Comparer<T> where T : IComparable<T> {\n    public int Compare(T a, T b) => a.CompareTo(b);\n}\n\nclass Program {\n    static void Main() {\n        var c = new Comparer<int>();\n        Console.WriteLine(c.Compare(5, 3));\n    }\n}",
      "holeyCode": "using System;\n\n// whereで型制約を指定\nclass Comparer<T> ___ T : IComparable<T> {\n    public int Compare(T a, T b) => a.CompareTo(b);\n}\n\nclass Program {\n    static void Main() {\n        var c = new Comparer<int>();\n        Console.WriteLine(c.Compare(5, 3));\n    }\n}",
      "correctLines": [
        "using System;",
        "",
        "class Comparer<T> where T : IComparable<T> {",
        "    public int Compare(T a, T b) => a.CompareTo(b);",
        "}",
        "",
        "class Program {",
        "    static void Main() {",
        "        var c = new Comparer<int>();",
        "        Console.WriteLine(c.Compare(5, 3));",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "where で型制約を指定します。",
        null,
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
        "keywords": ["where", "when", "if"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n"
        }
      ]
    },
    {
      "title": "デリゲートの基本",
      "description": "メソッドを参照するデリゲートを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "デリゲートとは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# メソッドの参照\n\n**デリゲート** は、メソッドを参照できる型です。\n\n```csharp\ndelegate int Operation(int a, int b);\n\nint Add(int a, int b) => a + b;\nOperation op = Add;\nint result = op(2, 3);  // 5\n```"
        },
        {
          "title": "組み込みデリゲート",
          "image": "/illustrations/3d/robot.png",
          "content": "# Func と Action\n\n```csharp\nFunc<int, int, int> add = (a, b) => a + b;\nAction<string> print = s => Console.WriteLine(s);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "using System;\n\nclass Program {\n    delegate int MathOp(int x);\n    \n    static int Double(int n) => n * 2;\n    \n    static void Main() {\n        MathOp op = Double;\n        Console.WriteLine(op(5));\n    }\n}",
      "holeyCode": "using System;\n\nclass Program {\n    // delegateでデリゲート型を定義\n    ___ int MathOp(int x);\n    \n    static int Double(int n) => n * 2;\n    \n    static void Main() {\n        MathOp op = Double;\n        Console.WriteLine(op(5));\n    }\n}",
      "correctLines": [
        "using System;",
        "",
        "class Program {",
        "    delegate int MathOp(int x);",
        "    ",
        "    static int Double(int n) => n * 2;",
        "    ",
        "    static void Main() {",
        "        MathOp op = Double;",
        "        Console.WriteLine(op(5));",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "delegate でデリゲート型を定義します。",
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
        "keywords": ["delegate", "event", "func"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "Func デリゲート",
      "description": "汎用のFunc<>デリゲートを使いましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "Func とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 戻り値ありのデリゲート\n\n**Func<>** は、戻り値を持つメソッドを参照します。\n\n```csharp\nFunc<int, int> square = x => x * x;\nFunc<int, int, int> add = (a, b) => a + b;\n```"
        },
        {
          "title": "最後が戻り値",
          "image": "/illustrations/3d/return.png",
          "content": "# 型パラメータの意味\n\n```csharp\nFunc<int>           // () => int\nFunc<int, string>   // (int) => string\nFunc<int, int, int> // (int, int) => int\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "using System;\n\nclass Program {\n    static void Main() {\n        Func<int, int> triple = x => x * 3;\n        Console.WriteLine(triple(7));\n    }\n}",
      "holeyCode": "using System;\n\nclass Program {\n    static void Main() {\n        // Funcで戻り値ありのデリゲート\n        ___<int, int> triple = x => x * 3;\n        Console.WriteLine(triple(7));\n    }\n}",
      "correctLines": [
        "using System;",
        "",
        "class Program {",
        "    static void Main() {",
        "        Func<int, int> triple = x => x * 3;",
        "        Console.WriteLine(triple(7));",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "Func で戻り値ありのデリゲートを定義します。",
        null,
        null,
        null
      ],
      "candidates": {
        "types": ["Func", "Action", "Predicate"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "21\n"
        }
      ]
    },
    {
      "title": "Action デリゲート",
      "description": "戻り値なしのActionデリゲートを使いましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "Action とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 戻り値なしのデリゲート\n\n**Action<>** は、戻り値を持たないメソッドを参照します。\n\n```csharp\nAction greet = () => Console.WriteLine(\"Hi\");\nAction<string> print = s => Console.WriteLine(s);\n```"
        },
        {
          "title": "void メソッド用",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# 戻り値がない場合\n\n```csharp\nAction<int, int> log = (a, b) => {\n    Console.WriteLine($\"{a} + {b}\");\n};\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "using System;\n\nclass Program {\n    static void Main() {\n        Action<string> greet = name => Console.WriteLine($\"Hello, {name}!\");\n        greet(\"World\");\n    }\n}",
      "holeyCode": "using System;\n\nclass Program {\n    static void Main() {\n        // Actionで戻り値なしのデリゲート\n        ___<string> greet = name => Console.WriteLine($\"Hello, {name}!\");\n        greet(\"World\");\n    }\n}",
      "correctLines": [
        "using System;",
        "",
        "class Program {",
        "    static void Main() {",
        "        Action<string> greet = name => Console.WriteLine($\"Hello, {name}!\");",
        "        greet(\"World\");",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "Action で戻り値なしのデリゲートを定義します。",
        null,
        null,
        null
      ],
      "candidates": {
        "types": ["Action", "Func", "Predicate"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, World!\n"
        }
      ]
    },
    {
      "title": "LINQ GroupBy",
      "description": "要素をグループ化しましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "GroupBy とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# グループ化\n\n**GroupBy** は、キーでグループ分けします。\n\n```csharp\nvar groups = people.GroupBy(p => p.City);\nforeach (var g in groups) {\n    Console.WriteLine($\"{g.Key}: {g.Count()}\");\n}\n```"
        },
        {
          "title": "IGrouping",
          "image": "/illustrations/3d/robot.png",
          "content": "# キーと要素\n\n```csharp\n// g.Key でグループのキー\n// g でグループの要素（IEnumerable）\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "using System;\nusing System.Linq;\n\nclass Program {\n    static void Main() {\n        var nums = new[] { 1, 2, 3, 4, 5, 6 };\n        var groups = nums.GroupBy(n => n % 2 == 0 ? \"even\" : \"odd\");\n        foreach (var g in groups) {\n            Console.WriteLine($\"{g.Key}: {g.Count()}\");\n        }\n    }\n}",
      "holeyCode": "using System;\nusing System.Linq;\n\nclass Program {\n    static void Main() {\n        var nums = new[] { 1, 2, 3, 4, 5, 6 };\n        // GroupByでグループ化\n        var groups = nums.___(n => n % 2 == 0 ? \"even\" : \"odd\");\n        foreach (var g in groups) {\n            Console.WriteLine($\"{g.Key}: {g.Count()}\");\n        }\n    }\n}",
      "correctLines": [
        "using System;",
        "using System.Linq;",
        "",
        "class Program {",
        "    static void Main() {",
        "        var nums = new[] { 1, 2, 3, 4, 5, 6 };",
        "        var groups = nums.GroupBy(n => n % 2 == 0 ? \"even\" : \"odd\");",
        "        foreach (var g in groups) {",
        "            Console.WriteLine($\"{g.Key}: {g.Count()}\");",
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
        null,
        "GroupBy でグループ化します。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "methods": ["GroupBy", "OrderBy", "SelectMany"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "odd: 3\neven: 3\n"
        }
      ]
    },
    {
      "title": "null条件演算子 ?.",
      "description": "nullチェックを簡潔に書きましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "?. とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# null安全なアクセス\n\n**?.** は、nullでなければアクセス、nullならnullを返します。\n\n```csharp\nstring? name = person?.Name;\nint? length = str?.Length;\n```"
        },
        {
          "title": "?? と組み合わせ",
          "image": "/illustrations/3d/robot.png",
          "content": "# デフォルト値\n\n```csharp\nstring name = person?.Name ?? \"Unknown\";\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "using System;\n\nclass Program {\n    static void Main() {\n        string? s = null;\n        int? len = s?.Length;\n        Console.WriteLine(len ?? 0);\n    }\n}",
      "holeyCode": "using System;\n\nclass Program {\n    static void Main() {\n        string? s = null;\n        // ?.でnull安全にアクセス\n        int? len = s___.Length;\n        Console.WriteLine(len ?? 0);\n    }\n}",
      "correctLines": [
        "using System;",
        "",
        "class Program {",
        "    static void Main() {",
        "        string? s = null;",
        "        int? len = s?.Length;",
        "        Console.WriteLine(len ?? 0);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "?. でnull安全にアクセスします。",
        null,
        null,
        null
      ],
      "candidates": {
        "operators": ["?.", "!.", "."]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "0\n"
        }
      ]
    },
    {
      "title": "null合体演算子 ??",
      "description": "nullの場合のデフォルト値を設定しましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "?? とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# nullならデフォルト\n\n**??** は、左側がnullなら右側を返します。\n\n```csharp\nstring name = inputName ?? \"Guest\";\n```"
        },
        {
          "title": "??= 代入",
          "image": "/illustrations/3d/robot.png",
          "content": "# nullの場合だけ代入\n\n```csharp\nname ??= \"Default\";  // nameがnullなら代入\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "using System;\n\nclass Program {\n    static void Main() {\n        string? value = null;\n        string result = value ?? \"default\";\n        Console.WriteLine(result);\n    }\n}",
      "holeyCode": "using System;\n\nclass Program {\n    static void Main() {\n        string? value = null;\n        // ??でnullの場合のデフォルト値\n        string result = value ___ \"default\";\n        Console.WriteLine(result);\n    }\n}",
      "correctLines": [
        "using System;",
        "",
        "class Program {",
        "    static void Main() {",
        "        string? value = null;",
        "        string result = value ?? \"default\";",
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
        "?? でデフォルト値を設定します。",
        null,
        null,
        null
      ],
      "candidates": {
        "operators": ["??", "?:", "||"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "default\n"
        }
      ]
    },
    {
      "title": "record 型",
      "description": "不変なデータクラスを簡潔に定義しましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "record とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 不変データ型\n\n**record** は、イミュータブルなデータ型を簡潔に定義します。\n\n```csharp\nrecord Person(string Name, int Age);\n\nvar p = new Person(\"Alice\", 30);\n```"
        },
        {
          "title": "with 式",
          "image": "/illustrations/3d/robot.png",
          "content": "# 一部を変更したコピー\n\n```csharp\nvar p2 = p with { Age = 31 };\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "using System;\n\nrecord Point(int X, int Y);\n\nclass Program {\n    static void Main() {\n        var p = new Point(3, 4);\n        Console.WriteLine(p);\n    }\n}",
      "holeyCode": "using System;\n\n// recordで不変データ型を定義\n___ Point(int X, int Y);\n\nclass Program {\n    static void Main() {\n        var p = new Point(3, 4);\n        Console.WriteLine(p);\n    }\n}",
      "correctLines": [
        "using System;",
        "",
        "record Point(int X, int Y);",
        "",
        "class Program {",
        "    static void Main() {",
        "        var p = new Point(3, 4);",
        "        Console.WriteLine(p);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "record で不変データ型を定義します。",
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
          "expected_output": "Point { X = 3, Y = 4 }\n"
        }
      ]
    },
    {
      "title": "init プロパティ",
      "description": "初期化専用のプロパティを定義しましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "init とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 初期化時のみ設定可能\n\n**init** アクセサは、オブジェクト初期化時のみ値を設定できます。\n\n```csharp\nclass Person {\n    public string Name { get; init; }\n}\n\nvar p = new Person { Name = \"Alice\" };\n// p.Name = \"Bob\";  // エラー！\n```"
        },
        {
          "title": "不変性の確保",
          "image": "/illustrations/3d/robot.png",
          "content": "# 作成後は読み取り専用\n\n```csharp\npublic int Id { get; init; }\npublic string Name { get; init; }\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "using System;\n\nclass Item {\n    public string Name { get; init; }\n}\n\nclass Program {\n    static void Main() {\n        var item = new Item { Name = \"Apple\" };\n        Console.WriteLine(item.Name);\n    }\n}",
      "holeyCode": "using System;\n\nclass Item {\n    // initで初期化専用プロパティ\n    public string Name { get; ___; }\n}\n\nclass Program {\n    static void Main() {\n        var item = new Item { Name = \"Apple\" };\n        Console.WriteLine(item.Name);\n    }\n}",
      "correctLines": [
        "using System;",
        "",
        "class Item {",
        "    public string Name { get; init; }",
        "}",
        "",
        "class Program {",
        "    static void Main() {",
        "        var item = new Item { Name = \"Apple\" };",
        "        Console.WriteLine(item.Name);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "init で初期化専用にします。",
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
        "keywords": ["init", "set", "private set"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Apple\n"
        }
      ]
    }
  ]
}

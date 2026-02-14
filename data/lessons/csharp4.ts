export const csharp4Data = {
  "language": "csharp",
  "lessonId": "csharp-4",
  "lessonTitle": "C# IV - ジェネリクスとデリゲート",
  "lessonDescription": "C#のジェネリクスとデリゲートを学びます。型安全で再利用可能なコードを書くスキルを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 4,
  "tutorialSlides": [
    {
      "title": "ジェネリッククラス",
      "content": "`<T>`で型をパラメータとして受け取るクラスを定義できます。\\n\\n```csharp\\nclass Container<T> {\\n    public T Item { get; set; }\\n}\\n\\nvar c = new Container<string> { Item = \"こんにちは\" };\\nConsole.WriteLine(c.Item);\\n```\\n\\n=> こんにちは"
    },
    {
      "title": "ジェネリック制約 where",
      "content": "`where`で型パラメータに制約を付けられます。\\n\\n```csharp\\nclass Comparer<T> where T : IComparable<T> {\\n    public int Compare(T a, T b) => a.CompareTo(b);\\n}\\n\\nvar c = new Comparer<int>();\\nConsole.WriteLine(c.Compare(5, 3));\\n```\\n\\n=> 1"
    },
    {
      "title": "デリゲート",
      "content": "`delegate`でメソッドを参照できる型を定義できます。\\n\\n```csharp\\ndelegate int MathOp(int x);\\n\\nint Double(int n) => n * 2;\\n\\nMathOp op = Double;\\nConsole.WriteLine(op(5));\\n```\\n\\n=> 10"
    },
    {
      "title": "Func と Action",
      "content": "`Func`は戻り値あり、`Action`は戻り値なしのデリゲートです。\\n\\n```csharp\\nFunc<int, int> triple = x => x * 3;\\nConsole.WriteLine(triple(7));\\n\\nAction<string> greet = name => Console.WriteLine($\"こんにちは, {name}!\");\\ngreet(\"太郎\");\\n```\\n\\n=> 21\\n\\n=> こんにちは, 太郎!"
    },
    {
      "title": "null条件演算子 ?. と ??",
      "content": "`?.`でnull安全アクセス、`??`でデフォルト値を設定できます。\\n\\n```csharp\\nstring? s = null;\\nint? len = s?.Length;  \\nConsole.WriteLine(len ?? 0);\\n\\nstring? value = null;\\nstring result = value ?? \"デフォルト\";\\n```\\n\\n=> null\\n\\n=> 0"
    },
    {
      "title": "record型と init",
      "content": "`record`でイミュータブルなデータ型、`init`で初期化時のみ設定可能なプロパティを定義できます。\\n\\n```csharp\\nrecord Point(int X, int Y);\\n\\nclass Item {\\n    public string Name { get; init; }\\n}\\n\\nvar item = new Item { Name = \"りんご\" };\\n```"
    }
  ],
  "exercises": [
    {
      "title": "ジェネリッククラス",
      "description": "ジェネリッククラスの仕組みを理解します",
      "tutorialSlides": [
        {
          "title": "ジェネリクスとは？",
          "content": "# 型を後から指定\\n\\n**ジェネリクス** で、型を後から指定できるクラスを作れます。\\n\\n```csharp\\nclass Box<T> {\\n    public T Value { get; set; }\\n}\\n\\nvar intBox = new Box<int> { Value = 42 };\\nvar strBox = new Box<string> { Value = \"Hello\" };\\n```"
        },
        {
          "title": "型安全",
          "content": "# コンパイル時チェック\\n\\n```csharp\\nBox<int> box = new Box<int>();\\nbox.Value = \"text\";  // コンパイルエラー！\\n```"
        }
      ],
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// 型パラメータを定義する記号\\nclass Container<T> {\\n    // プロパティを定義\\n    public T Item { get; set; }\\n// ブロックを閉じる\\n}\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // \"こんにちは\" を持つ Container インスタンスを作成\\n        var c = new Container<string> { Item = \"こんにちは\" };\\n        // cのItemプロパティを表示\\n        Console.WriteLine(c.Item);\\n    // ブロックを閉じる\\n    }\\n// ブロックを閉じる\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\n___ ___;\\n___\\n// 型パラメータを定義する記号\\n___ ___<___> {\\n    // プロパティを定義\\n    ___ ___ ___ { ___; ___; }\\n// ブロックを閉じる\\n___\\n___\\n// Programクラスを定義\\n___ ___ {\\n    // Mainメソッドを定義\\n    ___ ___ ___() {\\n        // \"こんにちは\" を持つ Container インスタンスを作成\\n        ___ ___ = ___ ___<___> { ___ = \"___\" };\\n        // cのItemプロパティを表示\\n        ___.___(___.___)___\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// usingでSystem名前空間をインポート",
          "using System;",
          "",
          "// 型パラメータを定義する記号",
          "class Container<T> {",
          "    // プロパティを定義",
          "    public T Item { get; set; }",
          "// ブロックを閉じる",
          "}",
          "",
          "// Programクラスを定義",
          "class Program {",
          "    // Mainメソッドを定義",
          "    static void Main() {",
          "        // \"こんにちは\" を持つ Container インスタンスを作成",
          "        var c = new Container<string> { Item = \"こんにちは\" };",
          "        // cのItemプロパティを表示",
          "        Console.WriteLine(c.Item);",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          null,
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "symbols": [
            "<",
            ">"
          ],
          "others": ["using", "System", "class", "Container", "T", "public", "Item", "get", "set", "Program", "static", "void", "Main", "var", "c", "new", "string", "こんにちは", "Console", "WriteLine", ";", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      },
    {
      "title": "ジェネリック制約 where",
      "description": "条件を指定してデータを絞り込む方法を学びます",
      "tutorialSlides": [
        {
          "title": "where 制約",
          "content": "# 型の条件を指定\\n\\n**where** で型パラメータに制約を付けられます。\\n\\n```csharp\\nclass Repo<T> where T : class, new() {\\n    public T Create() => new T();\\n}\\n```"
        },
        {
          "title": "制約の種類",
          "content": "# よく使う制約\\n\\n```csharp\\nwhere T : class      // 参照型\\nwhere T : struct     // 値型\\nwhere T : new()      // 引数なしコンストラクタ\\nwhere T : IComparable // インターフェース\\n```"
        }
      ],
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// 型パラメータに制約を付けるキーワード\\nclass Comparer<T> where T : IComparable<T> {\\n    // Compareメソッドを定義\\n    public int Compare(T a, T b) => a.CompareTo(b);\\n}\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // Comparerインスタンスを作成\\n        var c = new Comparer<int>();\\n        // 5と3を比較した結果を表示\\n        Console.WriteLine(c.Compare(5, 3));\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\n___ ___;\\n___\\n// 型パラメータに制約を付けるキーワード\\n___ ___<___> ___ ___ : ___<___> {\\n    // Compareメソッドを定義\\n    ___ ___ ___(T ___, T ___) => ___.___(___)___\\n// ブロックを閉じる\\n___\\n___\\n// Programクラスを定義\\n___ ___ {\\n    // Mainメソッドを定義\\n    ___ ___ ___() {\\n        // Comparerインスタンスを作成\\n        ___ ___ = ___ ___<___>()___\\n        // 5と3を比較した結果を表示\\n        ___.___(___.___(___,___))___\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// usingでSystem名前空間をインポート",
          "using System;",
          "",
          "// 型パラメータに制約を付けるキーワード",
          "class Comparer<T> where T : IComparable<T> {",
          "    // Compareメソッドを定義",
          "    public int Compare(T a, T b) => a.CompareTo(b);",
          "}",
          "",
          "// Programクラスを定義",
          "class Program {",
          "    // Mainメソッドを定義",
          "    static void Main() {",
          "        // Comparerインスタンスを作成",
          "        var c = new Comparer<int>();",
          "        // 5と3を比較した結果を表示",
          "        Console.WriteLine(c.Compare(5, 3));",
          "    }",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          null,
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "keywords": [
            "where",
            "when",
            "if"
          ],
          "others": ["using", "System", "class", "Comparer", "T", "IComparable", "public", "int", "Compare", "a", "b", "CompareTo", ";", "Program", "static", "void", "Main", "var", "c", "new", "Console", "WriteLine", "5", "3", "}", "", "// Programクラスを定義", "// Comparerインスタンスを作成", "//", "5と3を比較した結果を表示"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      },
    {
      "title": "デリゲートの基本",
      "description": "デリゲートについて学びます",
      "tutorialSlides": [
        {
          "title": "デリゲートとは？",
          "content": "# メソッドの参照\\n\\n**デリゲート** は、メソッドを参照できる型です。\\n\\n```csharp\\ndelegate int Operation(int a, int b);\\n\\nint Add(int a, int b) => a + b;\\nOperation op = Add;\\nint result = op(2, 3);  // 5\\n```"
        },
        {
          "title": "組み込みデリゲート",
          "content": "# Func と Action\\n\\n```csharp\\nFunc<int, int, int> add = (a, b) => a + b;\\nAction<string> print = s => Console.WriteLine(s);\\n```"
        }
      ],
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// Programクラスを定義\\nclass Program {\\n    // メソッドを参照できる型を定義するキーワード\\n    delegate int MathOp(int x);\\n    \\n    // Doubleメソッドを定義\\n    static int Double(int n) => n * 2;\\n    \\n    // Mainメソッドを定義\\n    static void Main() {\\n        // デリゲートにメソッドを代入\\n        MathOp op = Double;\\n        // op関数を引数5で呼び出して表示\\n        Console.WriteLine(op(5));\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\n___ ___;\\n___\\n// Programクラスを定義\\n___ ___ {\\n    // メソッドを参照できる型を定義するキーワード\\n    ___ ___ ___(___  ___);\\n    ___\\n    // Doubleメソッドを定義\\n    ___ ___ ___(___  ___) => ___ * ___;\\n    ___\\n    // Mainメソッドを定義\\n    ___ ___ ___() {\\n        // デリゲートにメソッドを代入\\n        ___ ___ = ___;\\n        // op関数を引数5で呼び出して表示\\n        ___.___(___(___)___\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// usingでSystem名前空間をインポート",
          "using System;",
          "",
          "// Programクラスを定義",
          "class Program {",
          "    // メソッドを参照できる型を定義するキーワード",
          "    delegate int MathOp(int x);",
          "    ",
          "    // Doubleメソッドを定義",
          "    static int Double(int n) => n * 2;",
          "    ",
          "    // Mainメソッドを定義",
          "    static void Main() {",
          "        // デリゲートにメソッドを代入",
          "        MathOp op = Double;",
          "        // op関数を引数5で呼び出して表示",
          "        Console.WriteLine(op(5));",
          "    }",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "delegate",
            "event",
            "func"
          ],
          "others": ["using", "System", "class", "Program", "int", "MathOp", "x", "static", "Double", "n", "2", "void", "Main", "op", "Console", "WriteLine", "5", ");", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "Func デリゲート",
      "description": "Func<>について学びます",
      "tutorialSlides": [
        {
          "title": "Func とは？",
          "content": "# 戻り値ありのデリゲート\\n\\n**Func<>** は、戻り値を持つメソッドを参照します。\\n\\n```csharp\\nFunc<int, int> square = x => x * x;\\nFunc<int, int, int> add = (a, b) => a + b;\\n```"
        },
        {
          "title": "最後が戻り値",
          "content": "# 型パラメータの意味\\n\\n```csharp\\nFunc<int>           // () => int\\nFunc<int, string>   // (int) => string\\nFunc<int, int, int> // (int, int) => int\\n```"
        }
      ],
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // 戻り値を持つ汎用デリゲート型\\n        Func<int, int> triple = x => x * 3;\\n        // triple関数を引数7で呼び出して表示\\n        Console.WriteLine(triple(7));\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\n___ ___;\\n___\\n// Programクラスを定義\\n___ ___ {\\n    // Mainメソッドを定義\\n    ___ ___ ___() {\\n        // 戻り値を持つ汎用デリゲート型\\n        ___<___, ___> ___ = ___ => ___ * ___;\\n        // triple関数を引数7で呼び出して表示\\n        ___.___(___(___)___\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// usingでSystem名前空間をインポート",
          "using System;",
          "",
          "// Programクラスを定義",
          "class Program {",
          "    // Mainメソッドを定義",
          "    static void Main() {",
          "        // 戻り値を持つ汎用デリゲート型",
          "        Func<int, int> triple = x => x * 3;",
          "        // triple関数を引数7で呼び出して表示",
          "        Console.WriteLine(triple(7));",
          "    }",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null
        ],
        "candidates": {
          "types": [
            "Func",
            "Action",
            "Predicate"
          ],
          "others": ["using", "System", "class", "Program", "static", "void", "Main", "int", "triple", "x", "3", "Console", "WriteLine", "7", ");", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "21\\n"
          }
        ]
      },
    {
      "title": "Action デリゲート",
      "description": "Action<>について学びます",
      "tutorialSlides": [
        {
          "title": "Action とは？",
          "content": "# 戻り値なしのデリゲート\\n\\n**Action<>** は、戻り値を持たないメソッドを参照します。\\n\\n```csharp\\nAction greet = () => Console.WriteLine(\"Hi\");\\nAction<string> print = s => Console.WriteLine(s);\\n```"
        },
        {
          "title": "void メソッド用",
          "content": "# 戻り値がない場合\\n\\n```csharp\\nAction<int, int> log = (a, b) => {\\n    Console.WriteLine($\"{a} + {b}\");\\n};\\n```"
        }
      ],
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // 戻り値を持たない汎用デリゲート型\\n        Action<string> greet = name => Console.WriteLine($\"こんにちは, {name}!\");\\n        // greet関数（引数\"太郎\"）を呼び出し\\n        greet(\"太郎\");\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\n___ ___;\\n___\\n// Programクラスを定義\\n___ ___ {\\n    // Mainメソッドを定義\\n    ___ ___ ___() {\\n        // 戻り値を持たない汎用デリゲート型\\n        ___<___> ___ = ___ => ___.___(___\"こんにちは, {___}!\");\\n        // greet関数（引数\"太郎\"）を呼び出し\\n        ___(\"___\")___\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// usingでSystem名前空間をインポート",
          "using System;",
          "",
          "// Programクラスを定義",
          "class Program {",
          "    // Mainメソッドを定義",
          "    static void Main() {",
          "        // 戻り値を持たない汎用デリゲート型",
          "        Action<string> greet = name => Console.WriteLine($\"こんにちは, {name}!\");",
          "        // greet関数（引数\"太郎\"）を呼び出し",
          "        greet(\"太郎\");",
          "    }",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "\\\"\\\"",
          null,
          null
        ],
        "candidates": {
          "types": [
            "Action",
            "Func",
            "Predicate"
          ],
          "others": ["using", "System", "class", "Program", "static", "void", "Main", "string", "greet", "name", "Console", "WriteLine", "$", "太郎", ";", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは, 太郎!\\n"
          }
        ]
      },
    {
      "title": "LINQ GroupBy",
      "description": "GroupByについて学びます",
      "tutorialSlides": [
        {
          "title": "GroupBy とは？",
          "content": "# グループ化\\n\\n**GroupBy** は、キーでグループ分けします。\\n\\n```csharp\\nvar groups = people.GroupBy(p => p.City);\\nforeach (var g in groups) {\\n    Console.WriteLine($\"{g.Key}: {g.Count()}\");\\n}\\n```"
        },
        {
          "title": "IGrouping",
          "content": "# キーと要素\\n\\n```csharp\\n// g.Key でグループのキー\\n// g でグループの要素（IEnumerable）\\n```"
        }
      ],
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n// usingでLinq名前空間をインポート\\nusing System.Linq;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // 数値配列（1〜6）をnumsに代入\\n        var nums = new[] { 1, 2, 3, 4, 5, 6 };\\n        // GroupByでnumsを偶奇でグループ分けしgroupsに代入\\n        var groups = nums.GroupBy(n => n % 2 == 0 ? \"even\" : \"odd\");\\n        // foreachでgroupsをループ\\n        foreach (var g in groups) {\\n            // グループのキーと要素数をWriteLineで出力\\n            Console.WriteLine($\"{g.Key}: {g.Count()}\");\\n        }\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\n___ ___;\\n// usingでLinq名前空間をインポート\\n___ ___.___ ___\\n___\\n// Programクラスを定義\\n___ ___ {\\n    // Mainメソッドを定義\\n    ___ ___ ___() {\\n        // 数値配列（1〜6）をnumsに代入\\n        ___ ___ = ___[] { ___, ___, ___, ___, ___, ___ };\\n        // GroupByでnumsを偶奇でグループ分けしgroupsに代入\\n        ___ ___ = ___.___(___ => ___ % ___ == ___ ? \"___\" : \"___\");\\n        // foreachでgroupsをループ\\n        ___ (var ___ ___ ___) {\\n            // グループのキーと要素数をWriteLineで出力\\n            ___.___(___\"{___.___}: {___.___(___}\");\\n        // ブロックを閉じる\\n        ___\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// usingでSystem名前空間をインポート",
          "using System;",
          "// usingでLinq名前空間をインポート",
          "using System.Linq;",
          "",
          "// Programクラスを定義",
          "class Program {",
          "    // Mainメソッドを定義",
          "    static void Main() {",
          "        // 数値配列（1〜6）をnumsに代入",
          "        var nums = new[] { 1, 2, 3, 4, 5, 6 };",
          "        // GroupByでnumsを偶奇でグループ分けしgroupsに代入",
          "        var groups = nums.GroupBy(n => n % 2 == 0 ? \"even\" : \"odd\");",
          "        // foreachでgroupsをループ",
          "        foreach (var g in groups) {",
          "            // グループのキーと要素数をWriteLineで出力",
          "            Console.WriteLine($\"{g.Key}: {g.Count()}\");",
          "        }",
          "    }",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          null
        ],
        "candidates": {
          "methods": [
            "GroupBy",
            "OrderBy",
            "SelectMany"
          ],
          "others": ["using", "System", "Linq", ";", "class", "Program", "static", "void", "Main", "var", "nums", "new", "1", "2", "3", "4", "5", "6", "groups", "0", "even", "odd", "foreach", "g", "in", "Console", "WriteLine", "$", "Key", "Count", ")", "}", "Linq;", "n"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "odd: 3\\neven: 3\\n"
          }
        ]
      },
    {
      "title": "null条件演算子 ?.",
      "description": "?.について学びます",
      "tutorialSlides": [
        {
          "title": "?. とは？",
          "content": "# null安全なアクセス\\n\\n**?.** は、nullでなければアクセス、nullならnullを返します。\\n\\n```csharp\\nstring? name = person?.Name;\\nint? length = str?.Length;\\n```"
        },
        {
          "title": "?? と組み合わせ",
          "content": "# デフォルト値\\n\\n```csharp\\nstring name = person?.Name ?? \"Unknown\";\\n```"
        }
      ],
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // sにnullを代入\\n        string? s = null;\\n        // nullでなければアクセスする演算子\\n        int? len = s?.Length;\\n        // null合体演算子でデフォルト値\\n        Console.WriteLine(len ?? 0);\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\n___ ___;\\n___\\n// Programクラスを定義\\n___ ___ {\\n    // Mainメソッドを定義\\n    ___ ___ ___() {\\n        // sにnullを代入\\n        ___? ___ = ___;\\n        // nullでなければアクセスする演算子\\n        ___? ___ = ___?.___;\\n        // null合体演算子でデフォルト値\\n        ___.___(___  ___ ___)___\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// usingでSystem名前空間をインポート",
          "using System;",
          "",
          "// Programクラスを定義",
          "class Program {",
          "    // Mainメソッドを定義",
          "    static void Main() {",
          "        // sにnullを代入",
          "        string? s = null;",
          "        // nullでなければアクセスする演算子",
          "        int? len = s?.Length;",
          "        // null合体演算子でデフォルト値",
          "        Console.WriteLine(len ?? 0);",
          "    }",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null
        ],
        "candidates": {
          "operators": [
            "?.",
            "!.",
            "."
          ],
          "others": ["using", "System", "class", "Program", "static", "void", "Main", "string", "s", "null", "int", "len", "Length", "Console", "WriteLine", "??", "0", ";", "}", "?"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "0\\n"
          }
        ]
      },
    {
      "title": "null合体演算子 ??",
      "description": "??について学びます",
      "tutorialSlides": [
        {
          "title": "?? とは？",
          "content": "# nullならデフォルト\\n\\n**??** は、左側がnullなら右側を返します。\\n\\n```csharp\\nstring name = inputName ?? \"Guest\";\\n```"
        },
        {
          "title": "??= 代入",
          "content": "# nullの場合だけ代入\\n\\n```csharp\\nname ??= \"Default\";  // nameがnullなら代入\\n```"
        }
      ],
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // valueにnullを代入\\n        string? value = null;\\n        // nullなら右側を返す演算子\\n        string result = value ?? \"デフォルト\";\\n        // resultを表示\\n        Console.WriteLine(result);\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\n___ ___;\\n___\\n// Programクラスを定義\\n___ ___ {\\n    // Mainメソッドを定義\\n    ___ ___ ___() {\\n        // valueにnullを代入\\n        ___? ___ = ___;\\n        // nullなら右側を返す演算子\\n        ___ ___ = ___ ___ \"___\";\\n        // resultを表示\\n        ___.___(___);\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// usingでSystem名前空間をインポート",
          "using System;",
          "",
          "// Programクラスを定義",
          "class Program {",
          "    // Mainメソッドを定義",
          "    static void Main() {",
          "        // valueにnullを代入",
          "        string? value = null;",
          "        // nullなら右側を返す演算子",
          "        string result = value ?? \"デフォルト\";",
          "        // resultを表示",
          "        Console.WriteLine(result);",
          "    }",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "\\\"\\\"",
          null,
          "",
          null,
          null
        ],
        "candidates": {
          "operators": [
            "??",
            "?:",
            "||"
          ],
          "others": ["using", "System", "class", "Program", "static", "void", "Main", "string", "value", "null", "result", "デフォルト", "Console", "WriteLine", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "デフォルト\\n"
          }
        ]
      },
    {
      "title": "record 型",
      "description": "データの種類（型）について理解します",
      "tutorialSlides": [
        {
          "title": "record とは？",
          "content": "# 不変データ型\\n\\n**record** は、イミュータブルなデータ型を簡潔に定義します。\\n\\n```csharp\\nrecord Person(string Name, int Age);\\n\\nvar p = new Person(\"Alice\", 30);\\n```"
        },
        {
          "title": "with 式",
          "content": "# 一部を変更したコピー\\n\\n```csharp\\nvar p2 = p with { Age = 31 };\\n```"
        }
      ],
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// イミュータブルなデータ型を定義するキーワード\\nrecord Point(int X, int Y);\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // Pointインスタンスを作成（X=3, Y=4）\\n        var p = new Point(3, 4);\\n        // pを表示\\n        Console.WriteLine(p);\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\n___ ___;\\n___\\n// イミュータブルなデータ型を定義するキーワード\\n___ ___(___  ___, ___  ___)___\\n___\\n// Programクラスを定義\\n___ ___ {\\n    // Mainメソッドを定義\\n    ___ ___ ___() {\\n        // Pointインスタンスを作成（X=3, Y=4）\\n        ___ ___ = ___ ___(___, ___);\\n        // pを表示\\n        ___.___(___);\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// usingでSystem名前空間をインポート",
          "using System;",
          "",
          "// イミュータブルなデータ型を定義するキーワード",
          "record Point(int X, int Y);",
          "",
          "// Programクラスを定義",
          "class Program {",
          "    // Mainメソッドを定義",
          "    static void Main() {",
          "        // Pointインスタンスを作成（X=3, Y=4）",
          "        var p = new Point(3, 4);",
          "        // pを表示",
          "        Console.WriteLine(p);",
          "    }",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "record",
            "struct",
            "class"
          ],
          "others": ["using", "System", "Point", "int", "X", "Y", ";", "Program", "static", "void", "Main", "var", "p", "new", "3", "4", "Console", "WriteLine", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Point { X = 3, Y = 4 }\\n"
          }
        ]
      },
    {
      "title": "init プロパティ",
      "description": "init プロパティの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "init とは？",
          "content": "# 初期化時のみ設定可能\\n\\n**init** アクセサは、オブジェクト初期化時のみ値を設定できます。\\n\\n```csharp\\nclass Person {\\n    public string Name { get; init; }\\n}\\n\\nvar p = new Person { Name = \"Alice\" };\\n// p.Name = \"Bob\";  // エラー！\\n```"
        },
        {
          "title": "不変性の確保",
          "content": "# 作成後は読み取り専用\\n\\n```csharp\\npublic int Id { get; init; }\\npublic string Name { get; init; }\\n```"
        }
      ],
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// Itemクラスを定義\\nclass Item {\\n    // 初期化時のみ値を設定できるアクセサ\\n    public string Name { get; init; }\\n}\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // \"りんご\" を持つ Item インスタンスを作成\\n        var item = new Item { Name = \"りんご\" };\\n        // itemのNameプロパティを表示\\n        Console.WriteLine(item.Name);\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\n___ ___;\\n___\\n// Itemクラスを定義\\n___ ___ {\\n    // 初期化時のみ値を設定できるアクセサ\\n    ___ ___ ___ { ___; ___; }\\n// ブロックを閉じる\\n___\\n___\\n// Programクラスを定義\\n___ ___ {\\n    // Mainメソッドを定義\\n    ___ ___ ___() {\\n        // \"りんご\" を持つ Item インスタンスを作成\\n        ___ ___ = ___ ___ { ___ = \"___\" };\\n        // itemのNameプロパティを表示\\n        ___.___(___.___)___\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// usingでSystem名前空間をインポート",
          "using System;",
          "",
          "// Itemクラスを定義",
          "class Item {",
          "    // 初期化時のみ値を設定できるアクセサ",
          "    public string Name { get; init; }",
          "}",
          "",
          "// Programクラスを定義",
          "class Program {",
          "    // Mainメソッドを定義",
          "    static void Main() {",
          "        // \"りんご\" を持つ Item インスタンスを作成",
          "        var item = new Item { Name = \"りんご\" };",
          "        // itemのNameプロパティを表示",
          "        Console.WriteLine(item.Name);",
          "    }",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          null,
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "keywords": [
            "init",
            "set",
            "private set"
          ],
          "others": ["using", "System", "class", "Item", "public", "string", "Name", "get", "Program", "static", "void", "Main", "var", "item", "new", "りんご", "Console", "WriteLine", ";", "}", "// Programクラスを定義", "// \"りんご\" を持つ Item インスタンスを作成", "//", "item.Nameを表示"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "りんご\\n"
          }
        ]
      }
  ]
}

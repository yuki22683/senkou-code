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
            "content": "# 型を後から指定\\n\\n**ジェネリクス** で、型を後から指定できるクラスを作れます。\\n\\n```csharp\\nclass Box<T> {\\n    public T Value { get; set; }\\n}\\n\\nvar intBox = new Box<int> { Value = 42 };\\nvar strBox = new Box<string> { Value = \"Hello\" };\\n```"
          },
          {
            "title": "型安全",
            "content": "# コンパイル時チェック\\n\\n```csharp\\nBox<int> box = new Box<int>();\\nbox.Value = \"text\";  // コンパイルエラー！\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// 型パラメータを定義する記号\\nclass Container<T> {\\n    // プロパティを定義\\n    public T Item { get; set; }\\n}\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // \"Hello\" を持つ Container インスタンスを作成\\n        var c = new Container<string> { Item = \"こんにちは\" };\\n        // c.Itemを表示\\n        Console.WriteLine(c.Item);\\n    }\\n}",
        "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n\\n// 型パラメータを定義する記号\\nclass ___<T> {\\n    // プロパティを定義\\n    public T Item { get; ___; }\\n___\\n\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static void ___() {\\n        // \"Hello\" を持つ Container インスタンスを作成\\n        var ___ = new Container<string> { Item = \"こんにちは\" };\\n        // c.Itemを表示\\n        Console.___(c.Item);\\n    ___\\n___",
        "correctLines": [
          "// usingでSystem名前空間をインポート",
          "using System;",
          "",
          "// 型パラメータを定義する記号",
          "class Container<T> {",
          "    // プロパティを定義",
          "    public T Item { get; set; }",
          "}",
          "",
          "// Programクラスを定義",
          "class Program {",
          "    // Mainメソッドを定義",
          "    static void Main() {",
          "        // \"Hello\" を持つ Container インスタンスを作成",
          "        var c = new Container<string> { Item = \"こんにちは\" };",
          "        // c.Itemを表示",
          "        Console.WriteLine(c.Item);",
          "    }",
          "}"
        ],
        "lineHints": [
                  null,
                  "基本クラスライブラリを利用可能にします。",
                  null,
                  null,
                  "getで値を取得できるようにします。",
                  null,
                  "新しいクラス（Program）を定義します。",
                  "Mainはプログラムの開始地点です。",
                  null,
                  null,
                  "WriteLineでItemの値を表示します。",
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
          "symbols": [
            "<",
            ">"
          ],
          "others": ["System", "get", "Program", "Main", "Hello", "WriteLine", "Container", "set", "}", "c"]
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
        "description": "型パラメータに制約を設けましょう。",
        "difficulty": "hard",
        "orderIndex": 2,
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
        "initialDisplayMode": "holey",
        "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// 型パラメータに制約を付けるキーワード\\nclass Comparer<T> where T : IComparable<T> {\\n    // Compareメソッドを定義\\n    public int Compare(T a, T b) => a.CompareTo(b);\\n}\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // Comparerインスタンスを作成\\n        var c = new Comparer<int>();\\n        // 比較結果を表示\\n        Console.WriteLine(c.Compare(5, 3));\\n    }\\n}",
        "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n\\n// 型パラメータに制約を付けるキーワード\\nclass ___<T> where T : IComparable<T> {\\n    // Compareメソッドを定義\\n    public int ___(T a, T b) => a.CompareTo(b);\\n___\\n\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static void ___() {\\n        // Comparerインスタンスを作成\\n        var ___ = new Comparer<int>();\\n        // 比較結果を表示\\n        Console.___(c.Compare(5, 3));\\n    ___\\n___",
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
                  "        // 比較結果を表示",
                  "        Console.WriteLine(c.Compare(5, 3));",
                  "    }",
                  "}"
        ],
        "lineHints": [
                  null,
                  "基本クラスライブラリを利用可能にします。",
                  null,
                  null,
                  "CompareToで2つの値を比較します。",
                  null,
                  "新しいクラス（Program）を定義します。",
                  "Mainはプログラムの開始地点です。",
                  null,
                  null,
                  "WriteLineで比較結果を表示します。",
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
          "keywords": [
            "where",
            "when",
            "if"
          ],
          "others": ["System", "CompareTo", "Program", "Main", "int", "WriteLine", "Comparer", "Compare", "}", "c"]
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
        "description": "メソッドを参照するデリゲートを学びましょう。",
        "difficulty": "hard",
        "orderIndex": 3,
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
        "initialDisplayMode": "holey",
        "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// Programクラスを定義\\nclass Program {\\n    // メソッドを参照できる型を定義するキーワード\\n    delegate int MathOp(int x);\\n    \\n    // Doubleメソッドを定義\\n    static int Double(int n) => n * 2;\\n    \\n    // Mainメソッドを定義\\n    static void Main() {\\n        // デリゲートにメソッドを代入\\n        MathOp op = Double;\\n        // op(5を表示\\n        Console.WriteLine(op(5));\\n    }\\n}",
        "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n\\n// Programクラスを定義\\nclass ___ {\\n    // メソッドを参照できる型を定義するキーワード\\n    delegate int MathOp(int ___);\\n    \\n    // Doubleメソッドを定義\\n    static int Double(int n) => n * ___;\\n    \\n    // Mainメソッドを定義\\n    static void ___() {\\n        // デリゲートにメソッドを代入\\n        MathOp op = ___;\\n        // op(5を表示\\n        Console.___(op(5));\\n    ___\\n___",
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
          "        // op(5を表示",
          "        Console.WriteLine(op(5));",
          "    }",
          "}"
        ],
        "lineHints": [
                  null,
                  "基本クラスライブラリを利用可能にします。",
                  null,
                  null,
                  "delegateでメソッドを参照できる型を定義します。",
                  null,
                  "2を掛けて結果を返します。",
                  null,
                  null,
                  "Doubleメソッドをデリゲートに代入します。",
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
          "keywords": [
            "delegate",
            "event",
            "func"
          ],
          "others": ["System", "Program", "2", "Main", "Double", "WriteLine", "x", "}"]
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
        "description": "汎用のFunc<>デリゲートを使いましょう。",
        "difficulty": "hard",
        "orderIndex": 4,
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
        "initialDisplayMode": "holey",
        "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // 戻り値を持つ汎用デリゲート型\\n        Func<int, int> triple = x => x * 3;\\n        // triple(7を表示\\n        Console.WriteLine(triple(7));\\n    }\\n}",
        "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static void ___() {\\n        // 戻り値を持つ汎用デリゲート型\\n        Func<int, int> triple = x => x * ___;\\n        // triple(7を表示\\n        Console.___(triple(7));\\n    ___\\n___",
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
          "        // triple(7を表示",
          "        Console.WriteLine(triple(7));",
          "    }",
          "}"
        ],
        "lineHints": [
                  null,
                  "基本クラスライブラリを利用可能にします。",
                  null,
                  null,
                  "Mainはプログラムの開始地点です。",
                  null,
                  "Funcで引数int、戻り値intの関数を定義します。",
                  null,
                  "WriteLineで計算結果（21）を表示します。",
                  null,
                  null,
                  null,
                  null
        ],
        "candidates": {
          "types": [
            "Func",
            "Action",
            "Predicate"
          ],
          "others": ["System", "Program", "Main", "WriteLine", "3", "}"]
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
        "description": "戻り値なしのActionデリゲートを使いましょう。",
        "difficulty": "hard",
        "orderIndex": 5,
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
        "initialDisplayMode": "holey",
        "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // 戻り値を持たない汎用デリゲート型\\n        Action<string> greet = name => Console.WriteLine($\"こんにちは, {name}!\");\\n        // 関数を呼び出し\\n        greet(\"世界\");\\n    }\\n}",
        "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static void ___() {\\n        // 戻り値を持たない汎用デリゲート型\\n        Action<string> greet = name => Console.___($\"こんにちは, {name}!\");\\n        // 関数を呼び出し\\n        greet(\"___\");\\n    ___\\n___",
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
                  "        // 関数を呼び出し",
                  "        greet(\"世界\");",
                  "    }",
                  "}"
        ],
        "lineHints": [
                  null,
                  "基本クラスライブラリを利用可能にします。",
                  null,
                  null,
                  "Mainはプログラムの開始地点です。",
                  null,
                  "Actionで戻り値なしの関数を定義します。",
                  null,
                  "Worldを引数としてgreetを呼び出します。",
                  null,
                  null,
                  null,
                  null
        ],
        "candidates": {
          "types": [
            "Action",
            "Func",
            "Predicate"
          ],
          "others": ["System", "Program", "Main", "World", "WriteLine", "}", "世界"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは, 世界!\\n"
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
            "content": "# グループ化\\n\\n**GroupBy** は、キーでグループ分けします。\\n\\n```csharp\\nvar groups = people.GroupBy(p => p.City);\\nforeach (var g in groups) {\\n    Console.WriteLine($\"{g.Key}: {g.Count()}\");\\n}\\n```"
          },
          {
            "title": "IGrouping",
            "content": "# キーと要素\\n\\n```csharp\\n// g.Key でグループのキー\\n// g でグループの要素（IEnumerable）\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n// usingでLinq名前空間をインポート\\nusing System.Linq;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // numsに{1, 2, 3, 4, 5, 6}を代入\\n        var nums = new[] { 1, 2, 3, 4, 5, 6 };\\n        // GroupByでnumsを偶奇でグループ分けしgroupsに代入\\n        var groups = nums.GroupBy(n => n % 2 == 0 ? \"even\" : \"odd\");\\n        // foreachでgroupsをループ\\n        foreach (var g in groups) {\\n            // g.Keyとg.Count()をWriteLineで出力\\n            Console.WriteLine($\"{g.Key}: {g.Count()}\");\\n        }\\n    }\\n}",
        "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n// usingでLinq名前空間をインポート\\nusing ___.Linq;\\n\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static void ___() {\\n        // numsに{1, 2, 3, 4, 5, 6}を代入\\n        var ___ = new[] { 1, 2, 3, 4, 5, 6 };\\n        // GroupByでnumsを偶奇でグループ分けしgroupsに代入\\n        var ___ = nums.GroupBy(n => n % 2 == 0 ? \"even\" : \"odd\");\\n        // foreachでgroupsをループ\\n        foreach (var g in ___) {\\n            // g.Keyとg.Count()をWriteLineで出力\\n            Console.___($\"{g.Key}: {g.Count()}\");\\n        ___\\n    ___\\n___",
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
          "        // numsに{1, 2, 3, 4, 5, 6}を代入",
          "        var nums = new[] { 1, 2, 3, 4, 5, 6 };",
          "        // GroupByでnumsを偶奇でグループ分けしgroupsに代入",
          "        var groups = nums.GroupBy(n => n % 2 == 0 ? \"even\" : \"odd\");",
          "        // foreachでgroupsをループ",
          "        foreach (var g in groups) {",
          "            // g.Keyとg.Count()をWriteLineで出力",
          "            Console.WriteLine($\"{g.Key}: {g.Count()}\");",
          "        }",
          "    }",
          "}"
        ],
        "lineHints": [
          null,
          "基本クラスライブラリを利用可能にします。",
          null,
          "System.Linq名前空間を利用可能にします。",
          null,
          null,
          "Mainはプログラムの開始地点です。",
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "GroupByで偶数(even)と奇数(odd)にグループ分けします。",
          null,
          "inキーワードでグループを反復します。",
          null,
          "Countで各グループの要素数を表示します。",
          null,
          null,
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
          "others": ["System", "Linq", "Program", "Main", "1", "in", "Count", "nums", "groups", "WriteLine", "}"]
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
        "description": "nullチェックを簡潔に書きましょう。",
        "difficulty": "hard",
        "orderIndex": 7,
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
        "initialDisplayMode": "holey",
        "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // sにnullを代入\\n        string? s = null;\\n        // nullでなければアクセスする演算子\\n        int? len = s?.Length;\\n        // null合体演算子でデフォルト値\\n        Console.WriteLine(len ?? 0);\\n    }\\n}",
        "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static void ___() {\\n        // sにnullを代入\\n        string? s = ___;\\n        // nullでなければアクセスする演算子\\n        int? len = s?.___;\\n        // null合体演算子でデフォルト値\\n        Console.___(len ?? 0);\\n    ___\\n___",
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
                  "基本クラスライブラリを利用可能にします。",
                  null,
                  null,
                  "Mainはプログラムの開始地点です。",
                  null,
                  "nullを代入してnull状態を作ります。",
                  null,
                  "?.でnullの場合もエラーにならずnullを返します。",
                  null,
                  "WriteLineで結果を表示します。",
                  null,
                  null,
                  null,
                  null
        ],
        "candidates": {
          "operators": [
            "?.",
            "!.",
            "."
          ],
          "others": ["System", "Program", "Main", "null", "?", "WriteLine", "Length", "}"]
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
        "description": "nullの場合のデフォルト値を設定しましょう。",
        "difficulty": "hard",
        "orderIndex": 8,
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
        "initialDisplayMode": "holey",
        "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // valueにnullを代入\\n        string? value = null;\\n        // nullなら右側を返す演算子\\n        string result = value ?? \"デフォルト\";\\n        // resultを表示\\n        Console.WriteLine(result);\\n    }\\n}",
        "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static void ___() {\\n        // valueにnullを代入\\n        string? value = ___;\\n        // nullなら右側を返す演算子\\n        string result = value ?? \"___\";\\n        // resultを表示\\n        Console.WriteLine(___);\\n    ___\\n___",
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
                  "基本クラスライブラリを利用可能にします。",
                  null,
                  null,
                  "Mainはプログラムの開始地点です。",
                  null,
                  "nullを代入してnull状態を作ります。",
                  null,
                  "??でnullの場合はdefaultを返します。",
                  null,
                  "WriteLineで結果を表示します。",
                  null,
                  null,
                  null,
                  null
        ],
        "candidates": {
          "operators": [
            "??",
            "?:",
            "||"
          ],
          "others": ["System", "Program", "Main", "null", "WriteLine", "default", "result", "}", "デフォルト"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "default\\n"
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
            "content": "# 不変データ型\\n\\n**record** は、イミュータブルなデータ型を簡潔に定義します。\\n\\n```csharp\\nrecord Person(string Name, int Age);\\n\\nvar p = new Person(\"Alice\", 30);\\n```"
          },
          {
            "title": "with 式",
            "content": "# 一部を変更したコピー\\n\\n```csharp\\nvar p2 = p with { Age = 31 };\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// イミュータブルなデータ型を定義するキーワード\\nrecord Point(int X, int Y);\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // Pointインスタンスを作成\\n        var p = new Point(3, 4);\\n        // pを表示\\n        Console.WriteLine(p);\\n    }\\n}",
        "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n\\n// イミュータブルなデータ型を定義するキーワード\\nrecord Point(int X, int ___);\\n\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static void ___() {\\n        // Pointインスタンスを作成\\n        var ___ = new Point(3, 4);\\n        // pを表示\\n        Console.WriteLine(___);\\n    ___\\n___",
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
          "        // Pointインスタンスを作成",
          "        var p = new Point(3, 4);",
          "        // pを表示",
          "        Console.WriteLine(p);",
          "    }",
          "}"
        ],
        "lineHints": [
                  null,
                  "基本クラスライブラリを利用可能にします。",
                  null,
                  null,
                  "新しいクラス（Program）を定義します。",
                  null,
                  null,
                  "Pointインスタンスを座標(3,4)で作成します。",
                  null,
                  "WriteLineでPoint情報を表示します。",
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
        ],
        "candidates": {
          "keywords": [
            "record",
            "struct",
            "class"
          ],
          "others": ["System", "Program", "Main", "Point", "WriteLine", "Y", "p", "}"]
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
        "description": "初期化専用のプロパティを定義しましょう。",
        "difficulty": "hard",
        "orderIndex": 10,
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
        "initialDisplayMode": "holey",
        "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// Itemクラスを定義\\nclass Item {\\n    // 初期化時のみ値を設定できるアクセサ\\n    public string Name { get; init; }\\n}\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // \"Apple\" を持つ Item インスタンスを作成\\n        var item = new Item { Name = \"りんご\" };\\n        // item.Nameを表示\\n        Console.WriteLine(item.Name);\\n    }\\n}",
        "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n\\n// Itemクラスを定義\\nclass ___ {\\n    // 初期化時のみ値を設定できるアクセサ\\n    public string Name { get; ___; }\\n___\\n\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static void ___() {\\n        // \"Apple\" を持つ Item インスタンスを作成\\n        var ___ = new Item { Name = \"りんご\" };\\n        // item.Nameを表示\\n        Console.___(item.Name);\\n    ___\\n___",
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
          "        // \"Apple\" を持つ Item インスタンスを作成",
          "        var item = new Item { Name = \"りんご\" };",
          "        // item.Nameを表示",
          "        Console.WriteLine(item.Name);",
          "    }",
          "}"
        ],
        "lineHints": [
                  null,
                  "基本クラスライブラリを利用可能にします。",
                  null,
                  null,
                  "initで初期化時のみ値を設定できるようにします。",
                  null,
                  "新しいクラス（Program）を定義します。",
                  "Mainはプログラムの開始地点です。",
                  null,
                  null,
                  "WriteLineでNameの値を表示します。",
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
          "keywords": [
            "init",
            "set",
            "private set"
          ],
          "others": ["System", "Item", "Program", "Main", "Apple", "WriteLine", "}", "item"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Apple\\n"
          }
        ]
      }
  ]
}

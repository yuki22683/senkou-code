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
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// 型パラメータを定義する記号\\nclass Container<T> {\\n    // プロパティを定義\\n    public T Item { get; set; }\\n}\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // \"こんにちは\" を持つ Container インスタンスを作成\\n        var c = new Container<string> { Item = \"こんにちは\" };\\n        // c.Itemを表示\\n        Console.WriteLine(c.Item);\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n___\\n// 型パラメータを定義する記号\\nclass ___<T> {\\n    // プロパティを定義\\n    public T Item { get; ___; }\\n___\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static void ___() {\\n        // \"こんにちは\" を持つ Container インスタンスを作成\\n        var ___ = new Container<string> { Item = \"こんにちは\" };\\n        // c.Itemを表示\\n        Console.___(c.Item);\\n    ___\\n___",
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
          "        // \"こんにちは\" を持つ Container インスタンスを作成",
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
          "型パラメータTを受け取るジェネリッククラスを定義します。",
          null,
          "getで値を取得できるようにします。",
          "ここを正しく入力してください。",
          null,
          null,
          "新しいクラス（Program）を定義します。",
          null,
          "Mainはプログラムの開始地点です。",
          null,
          "ここを正しく入力してください。",
          null,
          "WriteLineでItemの値を表示します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "symbols": [
            "<",
            ">"
          ],
          "others": ["System", "get", "Program", "Main", "Hello", "WriteLine", "Container", "set", "}", "c", "", "}"]
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
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// 型パラメータに制約を付けるキーワード\\nclass Comparer<T> where T : IComparable<T> {\\n    // Compareメソッドを定義\\n    public int Compare(T a, T b) => a.CompareTo(b);\\n}\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // Comparerインスタンスを作成\\n        var c = new Comparer<int>();\\n        // 比較結果を表示\\n        Console.WriteLine(c.Compare(5, 3));\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n___\\n// 型パラメータに制約を付けるキーワード\\nclass ___<T> where T : IComparable<T> {\\n    // Compareメソッドを定義\\n    public int ___(T a, T b) => a.CompareTo(b);\\n___\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static void ___() {\\n        // Comparerインスタンスを作成\\n        var ___ = new Comparer<int>();\\n        // 比較結果を表示\\n        Console.___(c.Compare(5, 3));\\n    ___\\n___",
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
          "whereで型制約を指定します。",
          null,
          "CompareToで2つの値を比較します。",
          "ここを正しく入力してください。",
          null,
          null,
          "新しいクラス（Program）を定義します。",
          null,
          "Mainはプログラムの開始地点です。",
          null,
          "ここを正しく入力してください。",
          null,
          "WriteLineで比較結果を表示します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "where",
            "when",
            "if"
          ],
          "others": ["System", "CompareTo", "Program", "Main", "int", "WriteLine", "Comparer", "Compare", "}", "c", "", "}"]
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
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// Programクラスを定義\\nclass Program {\\n    // メソッドを参照できる型を定義するキーワード\\n    delegate int MathOp(int x);\\n    \\n    // Doubleメソッドを定義\\n    static int Double(int n) => n * 2;\\n    \\n    // Mainメソッドを定義\\n    static void Main() {\\n        // デリゲートにメソッドを代入\\n        MathOp op = Double;\\n        // op(5を表示\\n        Console.WriteLine(op(5));\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // メソッドを参照できる型を定義するキーワード\\n    delegate int MathOp(int ___);\\n    ___\\n    // Doubleメソッドを定義\\n    static int Double(int n) => n * ___;\\n    ___\\n    // Mainメソッドを定義\\n    static void ___() {\\n        // デリゲートにメソッドを代入\\n        MathOp op = ___;\\n        // op(5を表示\\n        Console.___(op(5));\\n    ___\\n___",
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
          "新しいクラス（Program）を定義します。",
          null,
          "delegateでメソッドを参照できる型を定義します。",
          "この行を正しく入力してください。",
          null,
          "2を掛けて結果を返します。",
          "この行を正しく入力してください。",
          null,
          "Mainはプログラムの開始地点です。",
          null,
          "Doubleメソッドをデリゲートに代入します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "delegate",
            "event",
            "func"
          ],
          "others": ["System", "Program", "2", "Main", "Double", "WriteLine", "x", "}", "", "}"]
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
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // 戻り値を持つ汎用デリゲート型\\n        Func<int, int> triple = x => x * 3;\\n        // triple(7を表示\\n        Console.WriteLine(triple(7));\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static void ___() {\\n        // 戻り値を持つ汎用デリゲート型\\n        Func<int, int> triple = x => x * ___;\\n        // triple(7を表示\\n        Console.___(triple(7));\\n    ___\\n___",
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
          "新しいクラス（Program）を定義します。",
          null,
          "Mainはプログラムの開始地点です。",
          null,
          "Funcで引数int、戻り値intの関数を定義します。",
          null,
          "WriteLineで計算結果（21）を表示します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "types": [
            "Func",
            "Action",
            "Predicate"
          ],
          "others": ["System", "Program", "Main", "WriteLine", "3", "}", "", "}"]
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
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // 戻り値を持たない汎用デリゲート型\\n        Action<string> greet = name => Console.WriteLine($\"こんにちは, {name}!\");\\n        // 関数を呼び出し\\n        greet(\"世界\");\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static void ___() {\\n        // 戻り値を持たない汎用デリゲート型\\n        Action<string> greet = name => Console.___($\"こんにちは, {name}!\");\\n        // 関数を呼び出し\\n        greet(\"___\");\\n    ___\\n___",
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
          "新しいクラス（Program）を定義します。",
          null,
          "Mainはプログラムの開始地点です。",
          null,
          "Actionで戻り値なしの関数を定義します。",
          null,
          "Worldを引数としてgreetを呼び出します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "types": [
            "Action",
            "Func",
            "Predicate"
          ],
          "others": ["System", "Program", "Main", "World", "WriteLine", "}", "世界", "", "}"]
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
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n// usingでLinq名前空間をインポート\\nusing System.Linq;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // numsに{1, 2, 3, 4, 5, 6}を代入\\n        var nums = new[] { 1, 2, 3, 4, 5, 6 };\\n        // GroupByでnumsを偶奇でグループ分けしgroupsに代入\\n        var groups = nums.GroupBy(n => n % 2 == 0 ? \"even\" : \"odd\");\\n        // foreachでgroupsをループ\\n        foreach (var g in groups) {\\n            // g.Keyとg.Count()をWriteLineで出力\\n            Console.WriteLine($\"{g.Key}: {g.Count()}\");\\n        }\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n// usingでLinq名前空間をインポート\\nusing ___.Linq;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static void ___() {\\n        // numsに{1, 2, 3, 4, 5, 6}を代入\\n        var ___ = new[] { 1, 2, 3, 4, 5, 6 };\\n        // GroupByでnumsを偶奇でグループ分けしgroupsに代入\\n        var ___ = nums.GroupBy(n => n % 2 == 0 ? \"even\" : \"odd\");\\n        // foreachでgroupsをループ\\n        foreach (var g in ___) {\\n            // g.Keyとg.Count()をWriteLineで出力\\n            Console.___($\"{g.Key}: {g.Count()}\");\\n        ___\\n    ___\\n___",
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
          "新しいクラス（Program）を定義します。",
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
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "GroupBy",
            "OrderBy",
            "SelectMany"
          ],
          "others": ["System", "Linq", "Program", "Main", "1", "in", "Count", "nums", "groups", "WriteLine", "}", "", "}", "}", "}\\"]
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
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // sにnullを代入\\n        string? s = null;\\n        // nullでなければアクセスする演算子\\n        int? len = s?.Length;\\n        // null合体演算子でデフォルト値\\n        Console.WriteLine(len ?? 0);\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static void ___() {\\n        // sにnullを代入\\n        string? s = ___;\\n        // nullでなければアクセスする演算子\\n        int? len = s?.___;\\n        // null合体演算子でデフォルト値\\n        Console.___(len ?? 0);\\n    ___\\n___",
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
          "新しいクラス（Program）を定義します。",
          null,
          "Mainはプログラムの開始地点です。",
          null,
          "nullを代入してnull状態を作ります。",
          null,
          "?.でnullの場合もエラーにならずnullを返します。",
          null,
          "WriteLineで結果を表示します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "?.",
            "!.",
            "."
          ],
          "others": ["System", "Program", "Main", "null", "?", "WriteLine", "Length", "}", "", "}"]
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
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // valueにnullを代入\\n        string? value = null;\\n        // nullなら右側を返す演算子\\n        string result = value ?? \"デフォルト\";\\n        // resultを表示\\n        Console.WriteLine(result);\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static void ___() {\\n        // valueにnullを代入\\n        string? value = ___;\\n        // nullなら右側を返す演算子\\n        ___ result = value ?? \"___\";\\n        // resultを表示\\n        Console.WriteLine(___);\\n    ___\\n___",
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
          "新しいクラス（Program）を定義します。",
          null,
          "Mainはプログラムの開始地点です。",
          null,
          "nullを代入してnull状態を作ります。",
          null,
          "??でnullの場合はdefaultを返します。",
          null,
          "WriteLineで結果を表示します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "??",
            "?:",
            "||"
          ],
          "others": ["System", "Program", "Main", "null", "WriteLine", "default", "result", "}", "デフォルト", "string", "", "}"]
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
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// イミュータブルなデータ型を定義するキーワード\\nrecord Point(int X, int Y);\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // Pointインスタンスを作成\\n        var p = new Point(3, 4);\\n        // pを表示\\n        Console.WriteLine(p);\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n___\\n// イミュータブルなデータ型を定義するキーワード\\nrecord Point(int X, int ___);\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static void ___() {\\n        // Pointインスタンスを作成\\n        var ___ = new Point(3, 4);\\n        // pを表示\\n        Console.WriteLine(___);\\n    ___\\n___",
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
          "recordで不変なデータ型を定義します。",
          null,
          null,
          "新しいクラス（Program）を定義します。",
          null,
          "Mainはプログラムの開始地点です。",
          null,
          "Pointインスタンスを座標(3,4)で作成します。",
          null,
          "WriteLineでPoint情報を表示します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "record",
            "struct",
            "class"
          ],
          "others": ["System", "Program", "Main", "Point", "WriteLine", "Y", "p", "}", "", "}"]
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
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// Itemクラスを定義\\nclass Item {\\n    // 初期化時のみ値を設定できるアクセサ\\n    public string Name { get; init; }\\n}\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // \"Apple\" を持つ Item インスタンスを作成\\n        var item = new Item { Name = \"りんご\" };\\n        // item.Nameを表示\\n        Console.WriteLine(item.Name);\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n___\\n// Itemクラスを定義\\nclass ___ {\\n    // 初期化時のみ値を設定できるアクセサ\\n    public string Name { get; ___; }\\n___\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static void ___() {\\n        // \"Apple\" を持つ Item インスタンスを作成\\n        var ___ = new Item { Name = \"りんご\" };\\n        // item.Nameを表示\\n        Console.___(item.Name);\\n    ___\\n___",
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
          "Itemクラスを定義します。",
          null,
          "initで初期化時のみ値を設定できるようにします。",
          "ここを正しく入力してください。",
          null,
          null,
          "新しいクラス（Program）を定義します。",
          null,
          "Mainはプログラムの開始地点です。",
          null,
          "ここを正しく入力してください。",
          null,
          "WriteLineでNameの値を表示します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "init",
            "set",
            "private set"
          ],
          "others": ["System", "Item", "Program", "Main", "Apple", "WriteLine", "}", "item", "", "}"]
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

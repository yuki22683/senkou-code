export const csharp3Data = {
  "language": "csharp",
  "lessonId": "csharp-3",
  "lessonTitle": "C# III - 非同期とLINQ応用",
  "lessonDescription": "C#の高度な機能を学びます。async/await、LINQ応用、パターンマッチングなどモダンC#を身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "tutorialSlides": [
    {
      "title": "async/await で非同期処理",
      "content": "`async`/`await`で非同期処理を同期的に書けます。\\n\\n```csharp\\nasync Task<int> CalculateAsync(int n) {\\n    await Task.Delay(100);\\n    return n * n;\\n}\\n\\nvar result = await CalculateAsync(5);\\nConsole.WriteLine(result);  // => 25\\n```\\n\\n`await`で処理の完了を待ちます。"
    },
    {
      "title": "LINQ OrderBy / GroupBy",
      "content": "`OrderBy`でソート、`GroupBy`でグループ化できます。\\n\\n```csharp\\nvar nums = new[] { 3, 1, 4, 1, 5 };\\nvar sorted = nums.OrderBy(x => x);\\n// => 1, 1, 3, 4, 5\\n\\nvar groups = nums.GroupBy(n => n % 2 == 0 ? \"even\" : \"odd\");\\n```"
    },
    {
      "title": "LINQ First / Any / All / Sum",
      "content": "LINQには便利な集計メソッドがあります。\\n\\n```csharp\\nvar nums = new[] { 1, 2, 3, 4, 5 };\\n\\nnums.First();         // => 1\\nnums.Any(n => n > 3); // => true\\nnums.All(n => n > 0); // => true\\nnums.Sum();           // => 15\\n```"
    },
    {
      "title": "switch式（パターンマッチ）",
      "content": "`switch`式で値に応じた結果を返せます。\\n\\n```csharp\\nint n = 2;\\nvar result = n switch {\\n    1 => \"one\",\\n    2 => \"two\",\\n    _ => \"other\"\\n};\\nConsole.WriteLine(result);  // => two\\n```\\n\\n`_`はデフォルトケースです。"
    },
    {
      "title": "Dictionary",
      "content": "`Dictionary`でキーと値のペアを管理できます。\\n\\n```csharp\\nvar dict = new Dictionary<string, int>();\\ndict[\"a\"] = 1;\\ndict[\"b\"] = 2;\\nConsole.WriteLine(dict[\"a\"]);  // => 1\\n```"
    },
    {
      "title": "record型と文字列補間",
      "content": "`record`でイミュータブルなデータ型、`$`で文字列補間ができます。\\n\\n```csharp\\nrecord Point(int X, int Y);\\nvar p = new Point(10, 20);\\nConsole.WriteLine(p);  // => Point { X = 10, Y = 20 }\\n\\nvar x = 10;\\nConsole.WriteLine($\"Value: {x}\");  // => Value: 10\\n```"
    }
  ],
  "exercises": [
    {
      "title": "async/await の基本",
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n// usingでTasks名前空間をインポート\\nusing System.Threading.Tasks;\\n\\n// Programクラスを定義\\nclass Program {\\n    // async Taskでエントリーポイント\\n    static async Task Main() {\\n        // awaitで非同期処理を待機\\n        var result = await CalculateAsync(5);\\n        // resultを表示\\n        Console.WriteLine(result);\\n    }\\n    \\n    // 整数を返す非同期メソッドを定義\\n    static async Task<int> CalculateAsync(int n) {\\n        // 遅延を待機\\n        await Task.Delay(100);\\n        // nの2乗を返す\\n        return n * n;\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n// usingでTasks名前空間をインポート\\nusing ___.___.____;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // async Taskでエントリーポイント\\n    static ___ ___ ___() {\\n        // awaitで非同期処理を待機\\n        var ___ = ___ ___(___);\\n        // resultを表示\\n        ___.___(___);\\n    ___\\n    ___\\n    // 整数を返す非同期メソッドを定義\\n    static ___ ___<___> ___(int ___) {\\n        // 遅延を待機\\n        ___ ___.___(___)___\\n        // nの2乗を返す\\n        return ___ * ___;\\n    ___\\n___",
      "correctLines": [
          "// usingでSystem名前空間をインポート",
          "using System;",
          "// usingでTasks名前空間をインポート",
          "using System.Threading.Tasks;",
          "",
          "// Programクラスを定義",
          "class Program {",
          "    // async Taskでエントリーポイント",
          "    static async Task Main() {",
          "        // awaitで非同期処理を待機",
          "        var result = await CalculateAsync(5);",
          "        // resultを表示",
          "        Console.WriteLine(result);",
          "    }",
          "    ",
          "    // 整数を返す非同期メソッドを定義",
          "    static async Task<int> CalculateAsync(int n) {",
          "        // 遅延を待機",
          "        await Task.Delay(100);",
          "        // nの2乗を返す",
          "        return n * n;",
          "    }",
          "}"
        ],
      "lineHints": [
          null,
          "基本クラスライブラリを利用可能にします。",
          null,
          "System.Threading.Tasks名前空間を利用可能にします。",
          null,
          null,
          "新しいクラス（Program）を定義します。",
          null,
          "asyncで非同期メソッドを定義します。",
          null,
          "awaitで非同期処理の完了を待ちます。",
          null,
          "WriteLineで結果を表示します。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          "整数を返すのでTask<int>を使います。",
          null,
          "Delayで指定ミリ秒待機します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "await",
            "async",
            "return"
          ],
          "others": ["System", "Threading", "Tasks", "Program", "Task", "Main", "result", "CalculateAsync", "5", "Console", "WriteLine", "int", "n", "Delay", "100", ";", "}", "", "Tasks;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "25\\n"
          }
        ]
      },
    {
      "title": "LINQ OrderBy",
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n// usingでLinq名前空間をインポート\\nusing System.Linq;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // 3 を含む配列を定義\\n        var nums = new[] { 3, 1, 4, 1, 5 };\\n        // OrderByでソート\\n        var sorted = nums.OrderBy(x => x);\\n        // Joinで \",\" を区切り文字として結果を表示\\n        Console.WriteLine(string.Join(\",\", sorted));\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n// usingでLinq名前空間をインポート\\nusing ___.____;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static ___ ___() {\\n        // 3 を含む配列を定義\\n        var ___ = new[] { ___, ___, ___, ___, ___ };\\n        // OrderByでソート\\n        var ___ = ___.___(___ => ___);\\n        // Joinで \",\" を区切り文字として結果を表示\\n        ___.___(___.___(\"___\", ___));\\n    ___\\n___",
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
          "        // 3 を含む配列を定義",
          "        var nums = new[] { 3, 1, 4, 1, 5 };",
          "        // OrderByでソート",
          "        var sorted = nums.OrderBy(x => x);",
          "        // Joinで \",\" を区切り文字として結果を表示",
          "        Console.WriteLine(string.Join(\",\", sorted));",
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
          "OrderByで昇順にソートします。",
          null,
          "Joinで要素をカンマ区切りで連結して表示します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "OrderBy",
            "Sort",
            "Arrange"
          ],
          "others": ["System", "Linq", "Program", "void", "Main", "nums", "3", "1", "4", "5", "sorted", "x", "Console", "WriteLine", "string", "Join", ",", "}", "", "Linq;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1,1,3,4,5\\n"
          }
        ]
      },
    {
      "title": "LINQ First と FirstOrDefault",
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n// usingでLinq名前空間をインポート\\nusing System.Linq;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // 空の配列を定義\\n        var nums = new int[] {};\\n        // FirstOrDefaultで空の場合はデフォルト値\\n        var result = nums.FirstOrDefault();\\n        // resultを表示\\n        Console.WriteLine(result);\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n// usingでLinq名前空間をインポート\\nusing ___.____;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static ___ ___() {\\n        // 空の配列を定義\\n        var ___ = new ___[] {};\\n        // FirstOrDefaultで空の場合はデフォルト値\\n        var ___ = ___.___();\\n        // resultを表示\\n        ___.___(___);\\n    ___\\n___",
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
          "        // 空の配列を定義",
          "        var nums = new int[] {};",
          "        // FirstOrDefaultで空の場合はデフォルト値",
          "        var result = nums.FirstOrDefault();",
          "        // resultを表示",
          "        Console.WriteLine(result);",
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
          "intは整数型を表します。",
          null,
          "FirstOrDefaultは空の場合にデフォルト値（intなら0）を返します。",
          null,
          "WriteLineでresultを表示します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "FirstOrDefault",
            "First",
            "Single"
          ],
          "others": ["System", "Linq", "Program", "void", "Main", "nums", "int", "result", "Console", "WriteLine", "}", "", "Linq;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "0\\n"
          }
        ]
      },
    {
      "title": "LINQ Any と All",
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n// usingでLinq名前空間をインポート\\nusing System.Linq;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // 1 を含む配列を定義\\n        var nums = new[] { 1, 2, 3, 4, 5 };\\n        // Allで全要素が条件を満たすかチェック\\n        var allPositive = nums.All(x => x > 0);\\n        // allPositiveを表示\\n        Console.WriteLine(allPositive);\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n// usingでLinq名前空間をインポート\\nusing ___.____;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static ___ ___() {\\n        // 1 を含む配列を定義\\n        var ___ = new[] { ___, ___, ___, ___, ___ };\\n        // Allで全要素が条件を満たすかチェック\\n        var ___ = ___.___(___ => ___ > ___);\\n        // allPositiveを表示\\n        ___.___(___);\\n    ___\\n___",
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
          "        // 1 を含む配列を定義",
          "        var nums = new[] { 1, 2, 3, 4, 5 };",
          "        // Allで全要素が条件を満たすかチェック",
          "        var allPositive = nums.All(x => x > 0);",
          "        // allPositiveを表示",
          "        Console.WriteLine(allPositive);",
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
          "Allで全要素が0より大きいかチェックします。",
          null,
          "WriteLineでallPositive（True）を表示します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "All",
            "Any",
            "Contains"
          ],
          "others": ["System", "Linq", "Program", "void", "Main", "nums", "1", "2", "3", "4", "5", "allPositive", "x", "0", "Console", "WriteLine", "}", "", "Linq;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "True\\n"
          }
        ]
      },
    {
      "title": "LINQ Sum と Average",
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n// usingでLinq名前空間をインポート\\nusing System.Linq;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // 10 を含む配列を定義\\n        var nums = new[] { 10, 20, 30 };\\n        // Sumで合計を計算\\n        var total = nums.Sum();\\n        // totalを表示\\n        Console.WriteLine(total);\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n// usingでLinq名前空間をインポート\\nusing ___.____;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static ___ ___() {\\n        // 10 を含む配列を定義\\n        var ___ = new[] { ___, ___, ___ };\\n        // Sumで合計を計算\\n        var ___ = ___.___();\\n        // totalを表示\\n        ___.___(___);\\n    ___\\n___",
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
          "        // 10 を含む配列を定義",
          "        var nums = new[] { 10, 20, 30 };",
          "        // Sumで合計を計算",
          "        var total = nums.Sum();",
          "        // totalを表示",
          "        Console.WriteLine(total);",
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
          "Sumで全要素の合計を計算します。",
          null,
          "WriteLineでtotal（60）を表示します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "Sum",
            "Total",
            "Add"
          ],
          "others": ["System", "Linq", "Program", "void", "Main", "nums", "10", "20", "30", "total", "Console", "WriteLine", "}", "", "Linq;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "60\\n"
          }
        ]
      },
    {
      "title": "switch式（パターンマッチ）",
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // nを2で初期化\\n        int n = 2;\\n        // switchでnを分岐しresultに代入\\n        var result = n switch {\\n            // 1の場合\\n            1 => \"one\",\\n            // 2の場合\\n            2 => \"two\",\\n            // その他の場合\\n            _ => \"other\"\\n        };\\n        // resultをWriteLineで出力\\n        Console.WriteLine(result);\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static ___ ___() {\\n        // nを2で初期化\\n        ___ ___ = ___;\\n        // switchでnを分岐しresultに代入\\n        var ___ = ___ switch {\\n            // 1の場合\\n            ___ => \"___\",\\n            // 2の場合\\n            ___ => \"___\",\\n            // その他の場合\\n            ___ => \"___\"\\n        ___\\n        // resultをWriteLineで出力\\n        ___.___(___);\\n    ___\\n___",
      "correctLines": [
          "// usingでSystem名前空間をインポート",
          "using System;",
          "",
          "// Programクラスを定義",
          "class Program {",
          "    // Mainメソッドを定義",
          "    static void Main() {",
          "        // nを2で初期化",
          "        int n = 2;",
          "        // switchでnを分岐しresultに代入",
          "        var result = n switch {",
          "            // 1の場合",
          "            1 => \"one\",",
          "            // 2の場合",
          "            2 => \"two\",",
          "            // その他の場合",
          "            _ => \"other\"",
          "        };",
          "        // resultをWriteLineで出力",
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
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "switchキーワードで値に応じて分岐します。",
          null,
          "oneという文字列を返します。",
          null,
          "twoという文字列を返します。",
          null,
          "otherという文字列を返します。",
          "ここを正しく入力してください。",
          null,
          "変数の値をコンソールに出力し、改行します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "switch",
            "match",
            "case"
          ],
          "others": ["System", "Program", "void", "Main", "int", "n", "2", "result", "1", "one", "two", "_", "other", "};", "Console", "WriteLine", "}", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "two\\n"
          }
        ]
      },
    {
      "title": "Dictionary",
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n// usingでCollections.Generic名前空間をインポート\\nusing System.Collections.Generic;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // Dictionaryでキーと値の辞書\\n        var dict = new Dictionary<string, int>();\\n        // キー\"a\"に値を設定\\n        dict[\"a\"] = 1;\\n        // キー\"b\"に値を設定\\n        dict[\"b\"] = 2;\\n        // キー\"a\"の値を表示\\n        Console.WriteLine(dict[\"a\"]);\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n// usingでCollections.Generic名前空間をインポート\\nusing ___.___.____;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static ___ ___() {\\n        // Dictionaryでキーと値の辞書\\n        var ___ = new ___<___, ___>();\\n        // キー\"a\"に値を設定\\n        ___[\"___\"] = ___;\\n        // キー\"b\"に値を設定\\n        ___[\"___\"] = ___;\\n        // キー\"a\"の値を表示\\n        ___.___(___[\"___\"]);\\n    ___\\n___",
      "correctLines": [
          "// usingでSystem名前空間をインポート",
          "using System;",
          "// usingでCollections.Generic名前空間をインポート",
          "using System.Collections.Generic;",
          "",
          "// Programクラスを定義",
          "class Program {",
          "    // Mainメソッドを定義",
          "    static void Main() {",
          "        // Dictionaryでキーと値の辞書",
          "        var dict = new Dictionary<string, int>();",
          "        // キー\"a\"に値を設定",
          "        dict[\"a\"] = 1;",
          "        // キー\"b\"に値を設定",
          "        dict[\"b\"] = 2;",
          "        // キー\"a\"の値を表示",
          "        Console.WriteLine(dict[\"a\"]);",
          "    }",
          "}"
        ],
      "lineHints": [
          null,
          "基本クラスライブラリを利用可能にします。",
          null,
          "ジェネリックコレクションを利用可能にします。",
          null,
          null,
          "新しいクラス（Program）を定義します。",
          null,
          "Mainはプログラムの開始地点です。",
          null,
          "Dictionaryでキーと値のペアを管理します。",
          null,
          "キーaに値1を設定します。",
          null,
          "キーbに値2を設定します。",
          null,
          "WriteLineでキーaの値を表示します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "types": [
            "Dictionary",
            "Map",
            "Hashtable"
          ],
          "others": ["System", "Collections", "Generic", "Program", "void", "Main", "dict", "string", "int", "a", "1", "b", "2", "Console", "WriteLine", "}", "", "Generic;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      },
    {
      "title": "string interpolation",
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // 変数xを定義\\n        var x = 10;\\n        // 変数yを定義\\n        var y = 20;\\n        // $で文字列補間\\n        Console.WriteLine($\"Sum: {x + y}\");\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static ___ ___() {\\n        // 変数xを定義\\n        var ___ = ___;\\n        // 変数yを定義\\n        var ___ = ___;\\n        // $で文字列補間\\n        ___.___(___\"___: {___ + ___}\");\\n    ___\\n___",
      "correctLines": [
          "// usingでSystem名前空間をインポート",
          "using System;",
          "",
          "// Programクラスを定義",
          "class Program {",
          "    // Mainメソッドを定義",
          "    static void Main() {",
          "        // 変数xを定義",
          "        var x = 10;",
          "        // 変数yを定義",
          "        var y = 20;",
          "        // $で文字列補間",
          "        Console.WriteLine($\"Sum: {x + y}\");",
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
          "変数を宣言し、数値を代入します。",
          null,
          "変数を宣言し、数値を代入します。",
          null,
          "$で文字列補間を行い、{x+y}で計算結果を埋め込みます。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "$",
            "@",
            "#"
          ],
          "others": ["System", "Program", "void", "Main", "x", "10", "y", "20", "Console", "WriteLine", "Sum", "}", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Sum: 30\\n"
          }
        ]
      },
    {
      "title": "record 型",
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// recordで値型を定義\\nrecord Point(int X, int Y);\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // Pointインスタンスを作成\\n        var p = new Point(10, 20);\\n        // pを表示\\n        Console.WriteLine(p);\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n___\\n// recordで値型を定義\\n___ ___(int ___, int ___);\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static ___ ___() {\\n        // Pointインスタンスを作成\\n        var ___ = new ___(___, ___);\\n        // pを表示\\n        ___.___(___);\\n    ___\\n___",
      "correctLines": [
          "// usingでSystem名前空間をインポート",
          "using System;",
          "",
          "// recordで値型を定義",
          "record Point(int X, int Y);",
          "",
          "// Programクラスを定義",
          "class Program {",
          "    // Mainメソッドを定義",
          "    static void Main() {",
          "        // Pointインスタンスを作成",
          "        var p = new Point(10, 20);",
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
          "recordで値型を定義します。",
          null,
          null,
          "新しいクラス（Program）を定義します。",
          null,
          "Mainはプログラムの開始地点です。",
          null,
          "Pointインスタンスを座標(10,20)で作成します。",
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
          "others": ["System", "Program", "Main", "Point", "WriteLine", "Y", "p", "}", "", "}", "X", "void", "10", "20", "Console"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Point { X = 10, Y = 20 }\\n"
          }
        ]
      },
    {
      "title": "using で自動解放",
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n// usingでIO名前空間をインポート\\nusing System.IO;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // usingで自動解放\\n        using var writer = new StringWriter();\\n        // 文字列を書き込む\\n        writer.WriteLine(\"こんにちは\");\\n        // 書き込んだ内容を表示\\n        Console.WriteLine(writer.ToString().Trim());\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n// usingでIO名前空間をインポート\\nusing ___.____;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static ___ ___() {\\n        // usingで自動解放\\n        using ___ ___ = new ___();\\n        // 文字列を書き込む\\n        ___.___(\"___\");\\n        // 書き込んだ内容を表示\\n        ___.___(___.___().___());\\n    ___\\n___",
      "correctLines": [
          "// usingでSystem名前空間をインポート",
          "using System;",
          "// usingでIO名前空間をインポート",
          "using System.IO;",
          "",
          "// Programクラスを定義",
          "class Program {",
          "    // Mainメソッドを定義",
          "    static void Main() {",
          "        // usingで自動解放",
          "        using var writer = new StringWriter();",
          "        // 文字列を書き込む",
          "        writer.WriteLine(\"こんにちは\");",
          "        // 書き込んだ内容を表示",
          "        Console.WriteLine(writer.ToString().Trim());",
          "    }",
          "}"
        ],
      "lineHints": [
          null,
          "基本クラスライブラリを利用可能にします。",
          null,
          "System.IO名前空間を利用可能にします。",
          null,
          null,
          "新しいクラス（Program）を定義します。",
          null,
          "Mainはプログラムの開始地点です。",
          null,
          "usingで自動解放を設定します。",
          null,
          "WriteLineでHelloを書き込みます。",
          null,
          "Trimで前後の空白を除去して表示します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "using",
            "with",
            "try"
          ],
          "others": ["System", "IO", "Program", "void", "Main", "var", "writer", "StringWriter", "WriteLine", "こんにちは", "Console", "ToString", "Trim", "}", "", "IO;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      }
  ]
}

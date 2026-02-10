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
      "content": "`async`/`await`で非同期処理を同期的に書けます。\\n\\n```csharp\\nasync Task<int> CalculateAsync(int n) {\\n    await Task.Delay(100);\\n    return n * n;\\n}\\n\\nvar result = await CalculateAsync(5);\\nConsole.WriteLine(result);\\n```\\n\\n=> 25\\n\\n`await`で処理の完了を待ちます。"
    },
    {
      "title": "LINQ OrderBy / GroupBy",
      "content": "`OrderBy`でソート、`GroupBy`でグループ化できます。\\n\\n```csharp\\nvar nums = new[] { 3, 1, 4, 1, 5 };\\nvar sorted = nums.OrderBy(x => x);\\n// => 1, 1, 3, 4, 5\\n\\nvar groups = nums.GroupBy(n => n % 2 == 0 ? \"even\" : \"odd\");\\n```"
    },
    {
      "title": "LINQ First / Any / All / Sum",
      "content": "LINQには便利な集計メソッドがあります。\\n\\n```csharp\\nvar nums = new[] { 1, 2, 3, 4, 5 };\\n\\nnums.First();      \\nnums.Any(n => n > 3);\\nnums.All(n => n > 0);\\nnums.Sum();        \\n```\\n\\n=> 1\\n\\n=> true\\n\\n=> true\\n\\n=> 15"
    },
    {
      "title": "switch式（パターンマッチ）",
      "content": "`switch`式で値に応じた結果を返せます。\\n\\n```csharp\\nint n = 2;\\nvar result = n switch {\\n    1 => \"one\",\\n    2 => \"two\",\\n    _ => \"other\"\\n};\\nConsole.WriteLine(result);\\n```\\n\\n=> two\\n\\n`_`はデフォルトケースです。"
    },
    {
      "title": "Dictionary",
      "content": "`Dictionary`でキーと値のペアを管理できます。\\n\\n```csharp\\nvar dict = new Dictionary<string, int>();\\ndict[\"a\"] = 1;\\ndict[\"b\"] = 2;\\nConsole.WriteLine(dict[\"a\"]);\\n```\\n\\n=> 1"
    },
    {
      "title": "record型と文字列補間",
      "content": "`record`でイミュータブルなデータ型、`$`で文字列補間ができます。\\n\\n```csharp\\nrecord Point(int X, int Y);\\nvar p = new Point(10, 20);\\nConsole.WriteLine(p);\\n\\nvar x = 10;\\nConsole.WriteLine($\"Value: {x}\");\\n```\\n\\n=> Point { X = 10, Y = 20 }\\n\\n=> Value: 10"
    }
  ],
  "exercises": [
    {
      "title": "async/await の基本",
      "description": "非同期処理について学びます",
      "tutorialSlides": [
        {
          "title": "async/await（アシンク/アウェイト）とは？",
          "content": "# 非同期処理を簡単に書く\\n\\n**非同期処理**とは、時間がかかる処理を「待っている間に他のことをする」仕組みです。**async/await**を使うと、この非同期処理を普通のコードのように書けます。\\n\\n**身近な例え：**\\nレストランで料理を注文したとき、料理ができるまでスマホを見たり、おしゃべりしたりできますよね。ずっと立って待っている必要はありません。非同期処理も同じで、「待っている間に他の処理を進める」ことができます。\\n\\n**用語：**\\n- `async`（アシンク）: 「このメソッドは非同期です」という宣言\\n- `await`（アウェイト）: 「この処理が終わるまで待つ」という指示"
        },
        {
          "title": "Task（タスク）を返す",
          "content": "# 非同期メソッドの戻り値の型\\n\\n非同期メソッドは**Task**（タスク）という型を返します。Taskは「処理中」か「完了」かを表す「約束」のようなものです。\\n\\n**戻り値のパターン：**\\n```csharp\\n// 戻り値なし（voidの代わり）\\nasync Task DoWorkAsync()\\n\\n// 値を返す（Task<型>）\\nasync Task<int> GetValueAsync()\\n\\n// イベントハンドラ用（特殊）\\nasync void OnClick()\\n```\\n\\n**コード例：**\\n```csharp\\nasync Task<string> GetDataAsync() {\\n    await Task.Delay(1000);  // 1秒待つ\\n    return \"Done!\";          // 結果を返す\\n}\\n```\\n\\n**ポイント：**\\n- asyncメソッドの中でawaitを使う\\n- awaitで待っている間、他の処理が進められる"
        }
      ],
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n// usingでTasks名前空間をインポート\\nusing System.Threading.Tasks;\\n\\n// Programクラスを定義\\nclass Program {\\n    // async Taskでエントリーポイント\\n    static async Task Main() {\\n        // awaitで非同期処理を待機\\n        var result = await CalculateAsync(5);\\n        // resultを表示\\n        Console.WriteLine(result);\\n    // ブロックを閉じる\\n    }\\n    \\n    // 整数を返す非同期メソッドを定義\\n    static async Task<int> CalculateAsync(int n) {\\n        // 遅延を待機\\n        await Task.Delay(100);\\n        // nの2乗を返す\\n        return n * n;\\n    // ブロックを閉じる\\n    }\\n// ブロックを閉じる\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n// usingでTasks名前空間をインポート\\nusing ___.___.____;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // async Taskでエントリーポイント\\n    static ___ ___ ___() {\\n        // awaitで非同期処理を待機\\n        var ___ = ___ ___(___);\\n        // resultを表示\\n        ___.___(___);\\n    // ブロックを閉じる\\n    ___\\n    ___\\n    // 整数を返す非同期メソッドを定義\\n    static ___ ___<___> ___(int ___) {\\n        // 遅延を待機\\n        ___ ___.___(___)___\\n        // nの2乗を返す\\n        return ___ * ___;\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
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
          "    // ブロックを閉じる",
          "    }",
          "    ",
          "    // 整数を返す非同期メソッドを定義",
          "    static async Task<int> CalculateAsync(int n) {",
          "        // 遅延を待機",
          "        await Task.Delay(100);",
          "        // nの2乗を返す",
          "        return n * n;",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
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
          ""
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
      "description": "複数の条件を組み合わせる方法を学びます",
      "tutorialSlides": [
        {
          "title": "OrderBy（オーダーバイ）とは？",
          "content": "# データを並べ替える\\n\\n**OrderBy**（オーダーバイ）は、データを指定した基準（キー）で**昇順（しょうじゅん：小さい順）**に並べ替えます。\\n\\n**身近な例え：**\\nテストの点数を低い順に並べたり、名前をあいうえお順に並べたりするのと同じです。\\n\\n**コード例（文字の長さで並べ替え）：**\\n```csharp\\nvar sorted = names.OrderBy(x => x.Length);\\n```\\n\\n**解説：**\\n`x => x.Length` は「各要素の長さをキーにして並べ替える」という意味です。短い文字列から順に並びます。"
        },
        {
          "title": "降順ソート",
          "content": "# OrderByDescending（大きい順）\\n\\n**降順**は「大きい順」のことです。`OrderByDescending`（オーダーバイ・ディセンディング）を使います。\\n\\n**昇順と降順の違い：**\\n- `OrderBy` : 1, 2, 3, 4, 5（小さい順）\\n- `OrderByDescending` : 5, 4, 3, 2, 1（大きい順）\\n\\n**コード例：**\\n```csharp\\nvar nums = new[] { 3, 1, 4, 1, 5 };\\n\\n// 昇順（小さい順）\\nvar asc = nums.OrderBy(x => x);      // 1,1,3,4,5\\n\\n// 降順（大きい順）\\nvar desc = nums.OrderByDescending(x => x);  // 5,4,3,1,1\\n```"
        }
      ],
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n// usingでLinq名前空間をインポート\\nusing System.Linq;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // 3 を含む配列を定義\\n        var nums = new[] { 3, 1, 4, 1, 5 };\\n        // OrderByでソート\\n        var sorted = nums.OrderBy(x => x);\\n        // Joinで \",\" を区切り文字として結果を表示\\n        Console.WriteLine(string.Join(\",\", sorted));\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n// usingでLinq名前空間をインポート\\nusing ___.____;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static ___ ___() {\\n        // 3 を含む配列を定義\\n        var ___ = new[] { ___, ___, ___, ___, ___ };\\n        // OrderByでソート\\n        var ___ = ___.___(___ => ___);\\n        // Joinで \",\" を区切り文字として結果を表示\\n        ___.___(___.___(\"___\", ___));\\n    // ブロックを閉じる\n    ___\\n// ブロックを閉じる\n___",
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
          "        // Joinで \\\",\\\" を区切り文字として結果を表示",
          "        Console.WriteLine(string.Join(\\\",\\\", sorted));",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
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
          ""
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
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "First と FirstOrDefault の違い",
          "content": "# 最初の要素を取得する\\n\\nコレクションから最初の要素を取り出すには、**First**（ファースト）または**FirstOrDefault**（ファーストオアデフォルト）を使います。\\n\\n**2つの違い：**\\n- `First()` : 最初の要素を返す。空だとエラー！\\n- `FirstOrDefault()` : 最初の要素を返す。空なら「デフォルト値」を返す（エラーにならない）\\n\\n**コード例：**\\n```csharp\\nvar nums = new List<int>();  // 空のリスト\\n\\nvar first = nums.First();  // エラー発生！\\nvar firstOr = nums.FirstOrDefault();  // 0（intのデフォルト値）\\n```\\n\\n**身近な例え：**\\n「クラスで一番背が高い人は？」と聞いたとき、クラスに誰もいなければ答えられませんよね（First）。「いなければ『該当なし』と答える」のがFirstOrDefaultです。"
        },
        {
          "title": "条件付きで取得",
          "content": "# 条件を指定して最初の要素を取得\\n\\n`First()` や `FirstOrDefault()` には条件を指定することもできます。\\n\\n**コード例（最初の偶数を取得）：**\\n```csharp\\nvar nums = new[] { 1, 3, 4, 6, 7 };\\nvar even = nums.First(x => x % 2 == 0);  // 4\\n```\\n\\n**解説：**\\n1. `x => x % 2 == 0` は「2で割ったあまりが0（＝偶数）」という条件\\n2. 条件に合う最初の要素「4」が返される\\n\\n**デフォルト値の種類：**\\n- int : 0\\n- string : null\\n- bool : false"
        }
      ],
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n// usingでLinq名前空間をインポート\\nusing System.Linq;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // 空の配列を定義\\n        var nums = new int[] {};\\n        // FirstOrDefaultで空の場合はデフォルト値\\n        var result = nums.FirstOrDefault();\\n        // resultを表示\\n        Console.WriteLine(result);\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n// usingでLinq名前空間をインポート\\nusing ___.____;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static ___ ___() {\\n        // 空の配列を定義\\n        var ___ = new ___[] {};\\n        // FirstOrDefaultで空の場合はデフォルト値\\n        var ___ = ___.___();\\n        // resultを表示\\n        ___.___(___);\\n    // ブロックを閉じる\n    ___\\n// ブロックを閉じる\n___",
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
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
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
          ""
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
      "description": "LINQ Any と Allの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "Any（エニー）とは？",
          "content": "# 1つでも条件を満たすか確認する\\n\\n**Any**（エニー）は「1つでも条件を満たす要素があるか？」をチェックします。1つでもあればtrue、なければfalseを返します。\\n\\n**身近な例え：**\\n「クラスに風邪をひいている人は**いますか**？」という質問と同じです。1人でもいれば「はい（true）」、誰もいなければ「いいえ（false）」です。\\n\\n**コード例（マイナスの数があるか確認）：**\\n```csharp\\nvar nums = new[] { 1, -2, 3 };\\nbool hasNegative = nums.Any(x => x < 0);  // true\\n```\\n\\n-2 があるので true が返ります。"
        },
        {
          "title": "All（オール）とは？",
          "content": "# 全ての要素が条件を満たすか確認\\n\\n**All**（オール）は「**全ての**要素が条件を満たすか？」をチェックします。全部満たせばtrue、1つでも満たさなければfalseです。\\n\\n**身近な例え：**\\n「クラス**全員**が宿題を出しましたか？」という質問と同じです。全員出していれば「はい」、1人でも出していなければ「いいえ」です。\\n\\n**コード例（全部プラスの数か確認）：**\\n```csharp\\nvar nums = new[] { 1, 2, 3 };\\nbool allPositive = nums.All(x => x > 0);  // true\\n```\\n\\n**Any と All の違い：**\\n- Any : 1つでもOKなら true\\n- All : 全部OKなら true"
        }
      ],
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n// usingでLinq名前空間をインポート\\nusing System.Linq;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // 1 を含む配列を定義\\n        var nums = new[] { 1, 2, 3, 4, 5 };\\n        // Allで全要素が条件を満たすかチェック\\n        var allPositive = nums.All(x => x > 0);\\n        // allPositiveを表示\\n        Console.WriteLine(allPositive);\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n// usingでLinq名前空間をインポート\\nusing ___.____;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static ___ ___() {\\n        // 1 を含む配列を定義\\n        var ___ = new[] { ___, ___, ___, ___, ___ };\\n        // Allで全要素が条件を満たすかチェック\\n        var ___ = ___.___(___ => ___ > ___);\\n        // allPositiveを表示\\n        ___.___(___);\\n    // ブロックを閉じる\n    ___\\n// ブロックを閉じる\n___",
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
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
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
          ""
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
      "description": "LINQ Sum と Averageの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "Sum（サム）で合計を計算",
          "content": "# 全部足し合わせる\\n\\n**Sum**（サム）は、全ての要素を足し合わせた「合計」を返します。\\n\\n**身近な例え：**\\nテストの点数を全部足して合計点を出すのと同じです。\\n\\n**コード例：**\\n```csharp\\n// 数字の合計\\nvar nums = new[] { 10, 20, 30 };\\nvar total = nums.Sum();  // 60\\n\\n// オブジェクトの特定のプロパティの合計\\nvar totalPrice = items.Sum(x => x.Price);  // 全商品の価格合計\\n```\\n\\n**解説：**\\n- `nums.Sum()` : 配列の全要素を足す\\n- `items.Sum(x => x.Price)` : 各アイテムのPrice（価格）だけを足す"
        },
        {
          "title": "Average（アベレージ）で平均を計算",
          "content": "# 平均値を出す\\n\\n**Average**（アベレージ）は、全ての要素の「平均」を返します。\\n\\n**身近な例え：**\\nクラス全員のテストの点数を足して、人数で割って平均点を出すのと同じです。\\n\\n**コード例：**\\n```csharp\\nvar nums = new[] { 10, 20, 30 };\\nvar avg = nums.Average();  // 20.0\\n```\\n\\n**ポイント：**\\n- Averageの結果は小数（double型）で返される\\n- 空のコレクションでAverageを呼ぶとエラーになる\\n\\n**その他の集計メソッド：**\\n- `Sum()` : 合計\\n- `Average()` : 平均\\n- `Max()` : 最大値\\n- `Min()` : 最小値\\n- `Count()` : 要素数"
        }
      ],
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n// usingでLinq名前空間をインポート\\nusing System.Linq;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // 10 を含む配列を定義\\n        var nums = new[] { 10, 20, 30 };\\n        // Sumで合計を計算\\n        var total = nums.Sum();\\n        // totalを表示\\n        Console.WriteLine(total);\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n// usingでLinq名前空間をインポート\\nusing ___.____;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static ___ ___() {\\n        // 10 を含む配列を定義\\n        var ___ = new[] { ___, ___, ___ };\\n        // Sumで合計を計算\\n        var ___ = ___.___();\\n        // totalを表示\\n        ___.___(___);\\n    // ブロックを閉じる\n    ___\\n// ブロックを閉じる\n___",
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
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
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
          ""
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
      "description": "switch式について学びます",
      "tutorialSlides": [
        {
          "title": "switch式（スイッチしき）とは？",
          "content": "# 値を返す新しいswitch\\n\\nC# 8.0で追加された**switch式**は、従来のswitch文よりも短く書ける新しい書き方です。値を返すことができます。\\n\\n**身近な例え：**\\n「1番なら『one』、2番なら『two』、それ以外なら『other』と答える」という選択を、簡潔に書けます。\\n\\n**コード例：**\\n```csharp\\nvar result = value switch {\\n    1 => \"one\",\\n    2 => \"two\",\\n    _ => \"other\"  // _ は「それ以外全部」\\n};\\n```\\n\\n**解説：**\\n- `value switch { }` で「valueの値によって分岐」\\n- `1 => \"one\"` は「1なら\"one\"を返す」\\n- `_` は「どれにも当てはまらないとき」（ワイルドカード）"
        },
        {
          "title": "パターンマッチング",
          "content": "# 型によって分岐する\\n\\nswitch式では、値だけでなく**型**によっても分岐できます。これを「パターンマッチング」と呼びます。\\n\\n**コード例（型によって違うメッセージ）：**\\n```csharp\\nvar msg = obj switch {\\n    int i => $\"数字: {i}\",\\n    string s => $\"文字列: {s}\",\\n    _ => \"その他\"\\n};\\n```\\n\\n**解説：**\\n- `int i` : 「objがint型なら、その値をiとして使う」\\n- `string s` : 「objがstring型なら、その値をsとして使う」\\n- 型をチェックしながら、その値も取り出せる便利な機能！\\n\\n**ポイント：**\\nif文を何個も書くより、switch式で書いた方がスッキリします。"
        }
      ],
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // nを2で初期化\\n        int n = 2;\\n        // switchでnを分岐しresultに代入\\n        var result = n switch {\\n            // 1の場合\\n            1 => \"one\",\\n            // 2の場合\\n            2 => \"two\",\\n            // その他の場合\\n            _ => \"other\"\\n        };\\n        // resultをWriteLineで出力\\n        Console.WriteLine(result);\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static ___ ___() {\\n        // nを2で初期化\\n        ___ ___ = ___;\\n        // switchでnを分岐しresultに代入\\n        var ___ = ___ switch {\\n            // 1の場合\\n            ___ => \"___\",\\n            // 2の場合\\n            ___ => \"___\",\\n            // その他の場合\\n            ___ => \"___\"\\n        // ブロックを閉じる\n        ___\\n        // resultをWriteLineで出力\\n        ___.___(___);\\n    // ブロックを閉じる\n    ___\\n// ブロックを閉じる\n___",
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
          "            1 => \\\"one\\\",",
          "            // 2の場合",
          "            2 => \\\"two\\\",",
          "            // その他の場合",
          "            _ => \\\"other\\\"",
          "        // ブロックを閉じる",
          "        };",
          "        // resultをWriteLineで出力",
          "        Console.WriteLine(result);",
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
          "",
          null,
          "",
          null,
          ""
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
      "description": "キーと値のペアでデータを管理する方法を学びます",
      "tutorialSlides": [
        {
          "title": "Dictionary（ディクショナリー）の復習",
          "content": "# キーと値のペアを管理する\\n\\n**Dictionary**（ディクショナリー、辞書）は、キー（検索用の名前）と値（データ）をペアで管理するコレクションです。\\n\\n**身近な例え：**\\n電話帳のように、「名前」を探すと「電話番号」がわかる仕組みです。\\n\\n**初期化の書き方：**\\n```csharp\\n// 作成時に値を入れる方法\\nvar dict = new Dictionary<string, int> {\\n    [\"apple\"] = 100,   // りんご: 100円\\n    [\"banana\"] = 80    // バナナ: 80円\\n};\\n\\n// あとから追加する方法\\ndict[\"orange\"] = 120;  // みかん: 120円を追加\\n```"
        },
        {
          "title": "安全に値を取得する",
          "content": "# TryGetValue（トライゲットバリュー）\\n\\n存在しないキーでアクセスするとエラーになります。`TryGetValue` を使うと安全に取得できます。\\n\\n**コード例：**\\n```csharp\\n// 安全に値を取得\\nif (dict.TryGetValue(\"apple\", out var price)) {\\n    Console.WriteLine(price);  // あったら表示\\n} else {\\n    Console.WriteLine(\"見つかりません\");\\n}\\n```\\n\\n**解説：**\\n- `TryGetValue` は「キーがあればtrue、なければfalse」を返す\\n- `out var price` で、見つかった値を `price` に入れる\\n- エラーにならず、安全にキーの有無をチェックできる\\n\\n**ポイント：**\\n`dict[\"存在しないキー\"]` はエラー！`TryGetValue` なら安全。"
        }
      ],
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n// usingでCollections.Generic名前空間をインポート\\nusing System.Collections.Generic;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // Dictionaryでキーと値の辞書\\n        var dict = new Dictionary<string, int>();\\n        // キー\"a\"に値を設定\\n        dict[\"a\"] = 1;\\n        // キー\"b\"に値を設定\\n        dict[\"b\"] = 2;\\n        // キー\"a\"の値を表示\\n        Console.WriteLine(dict[\"a\"]);\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n// usingでCollections.Generic名前空間をインポート\\nusing ___.___.____;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static ___ ___() {\\n        // Dictionaryでキーと値の辞書\\n        var ___ = new ___<___, ___>();\\n        // キー\"a\"に値を設定\\n        ___[\"___\"] = ___;\\n        // キー\"b\"に値を設定\\n        ___[\"___\"] = ___;\\n        // キー\"a\"の値を表示\\n        ___.___(___[\"___\"]);\\n    // ブロックを閉じる\n    ___\\n// ブロックを閉じる\n___",
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
          "        // キー\\\"a\\\"に値を設定",
          "        dict[\\\"a\\\"] = 1;",
          "        // キー\\\"b\\\"に値を設定",
          "        dict[\\\"b\\\"] = 2;",
          "        // キー\\\"a\\\"の値を表示",
          "        Console.WriteLine(dict[\\\"a\\\"]);",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
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
          "",
          null,
          ""
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
      "description": "文字列補間について学びます",
      "tutorialSlides": [
        {
          "title": "文字列補間の復習",
          "content": "# $記号で変数を埋め込む\\n\\n**文字列補間**は、文字列の中に変数の値を埋め込む便利な機能です。`$`（ドルマーク）で始めて、`{}`の中に変数を書きます。\\n\\n**身近な例え：**\\n手紙のテンプレートで「○○様」の○○部分に名前を入れるようなものです。\\n\\n**コード例：**\\n```csharp\\nvar name = \"Alice\";\\nvar msg = $\"Hello, {name}!\";\\n// 結果: \"Hello, Alice!\"\\n```\\n\\n**解説：**\\n1. `$\"...\"` で「この文字列には変数を埋め込むよ」と宣言\\n2. `{name}` の部分が、変数nameの値「Alice」に置き換わる"
        },
        {
          "title": "式も埋め込める",
          "content": "# { } の中で計算もできる\\n\\n`{}` の中には、変数だけでなく**計算式**や**メソッド呼び出し**も書けます。\\n\\n**コード例：**\\n```csharp\\n// 計算式を埋め込む\\n$\"Result: {1 + 2}\"      // Result: 3\\n\\n// メソッドを呼び出す\\nvar s = \"hello\";\\n$\"Upper: {s.ToUpper()}\" // Upper: HELLO\\n\\n// 複数の変数を使う\\nvar x = 10;\\nvar y = 20;\\n$\"Sum: {x + y}\"         // Sum: 30\\n```\\n\\n**ポイント：**\\n- `{}` の中は何でも書ける（計算、メソッド呼び出し、条件式など）\\n- 複雑すぎる式は読みにくくなるので、適度に使おう"
        }
      ],
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // 変数xを定義\\n        var x = 10;\\n        // 変数yを定義\\n        var y = 20;\\n        // $で文字列補間\\n        Console.WriteLine($\"Sum: {x + y}\");\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static ___ ___() {\\n        // 変数xを定義\\n        var ___ = ___;\\n        // 変数yを定義\\n        var ___ = ___;\\n        // $で文字列補間\\n        ___.___(___\"___: {___ + ___}\");\\n    // ブロックを閉じる\n    ___\\n// ブロックを閉じる\n___",
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
          "        Console.WriteLine($\\\"Sum: {x + y}\\\");",
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
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
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
      "description": "データの種類（型）について理解します",
      "tutorialSlides": [
        {
          "title": "record（レコード）型とは？",
          "content": "# 値で比較できるデータ型\\n\\nC# 9.0で追加された**record**（レコード）は、データを簡潔に定義できる特別な型です。\\n\\n**classとの違い：**\\n- class : 同じ内容でも、別々に作ったら「違うもの」と判定される（参照で比較）\\n- record : 中身が同じなら「同じもの」と判定される（値で比較）\\n\\n**コード例：**\\n```csharp\\nrecord Person(string Name, int Age);\\n\\nvar p1 = new Person(\"Alice\", 25);\\nvar p2 = new Person(\"Alice\", 25);\\nConsole.WriteLine(p1 == p2);  // True！\\n```\\n\\n**身近な例え：**\\n「住所が同じなら同じ家」と判断するようなものです。別々に書いた住所でも、内容が同じなら「同じ」と見なします。"
        },
        {
          "title": "with（ウィズ）で一部だけ変更",
          "content": "# 元のデータを変えずにコピー\\n\\n`with` を使うと、一部のプロパティだけ変更した**新しいコピー**を作れます。元のデータは変わりません（イミュータブル：不変）。\\n\\n**コード例：**\\n```csharp\\nvar p1 = new Person(\"Alice\", 25);\\nvar p2 = p1 with { Age = 26 };  // 年齢だけ変更\\n\\n// p1 は (\"Alice\", 25) のまま\\n// p2 は (\"Alice\", 26)\\n```\\n\\n**解説：**\\n1. `p1 with { Age = 26 }` で「p1をコピーして、Ageだけ26に変える」\\n2. p1自体は変更されない（不変）\\n3. 新しいオブジェクト p2 が作られる\\n\\n**ポイント：**\\nrecordはデータを安全に扱いたいときに便利！うっかり変更してしまう心配がありません。"
        }
      ],
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n\\n// recordで値型を定義\\nrecord Point(int X, int Y);\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // Pointインスタンスを作成\\n        var p = new Point(10, 20);\\n        // pを表示\\n        Console.WriteLine(p);\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n___\\n// recordで値型を定義\\n___ ___(int ___, int ___);\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static ___ ___() {\\n        // Pointインスタンスを作成\\n        var ___ = new ___(___, ___);\\n        // pを表示\\n        ___.___(___);\\n    // ブロックを閉じる\n    ___\\n// ブロックを閉じる\n___",
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
          ""
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
      "description": "using で自動解放の仕組みと使い方を学びます",
      "tutorialSlides": [
              {
                      "title": "usingステートメントとは",
                      "content": "# リソースを自動で解放\\n\\nusingブロックを抜けると自動でDisposeが呼ばれます。\\n\\n```csharp\\nusing (var file = File.OpenRead(\"test.txt\"))\\n{\\n    // ファイルを読む\\n}  // 自動で閉じる\\n```"
              },
              {
                      "title": "using宣言",
                      "content": "# C# 8.0以降の書き方\\n\\n```csharp\\nusing var file = File.OpenRead(\"test.txt\");\\n// ファイルを使う\\n// スコープを抜けると自動解放\\n```\\n\\n波括弧なしで書けます！"
              }
      ],
      "correctCode": "// usingでSystem名前空間をインポート\\nusing System;\\n// usingでIO名前空間をインポート\\nusing System.IO;\\n\\n// Programクラスを定義\\nclass Program {\\n    // Mainメソッドを定義\\n    static void Main() {\\n        // usingで自動解放\\n        using var writer = new StringWriter();\\n        // 文字列を書き込む\\n        writer.WriteLine(\"こんにちは\");\\n        // 書き込んだ内容を表示\\n        Console.WriteLine(writer.ToString().Trim());\\n    }\\n}",
      "holeyCode": "// usingでSystem名前空間をインポート\\nusing ___;\\n// usingでIO名前空間をインポート\\nusing ___.____;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // Mainメソッドを定義\\n    static ___ ___() {\\n        // usingで自動解放\\n        using ___ ___ = new ___();\\n        // 文字列を書き込む\\n        ___.___(\"___\");\\n        // 書き込んだ内容を表示\\n        ___.___(___.___().___());\\n    // ブロックを閉じる\n    ___\\n// ブロックを閉じる\n___",
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
          "        writer.WriteLine(\\\"こんにちは\\\");",
          "        // 書き込んだ内容を表示",
          "        Console.WriteLine(writer.ToString().Trim());",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
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
          ""
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

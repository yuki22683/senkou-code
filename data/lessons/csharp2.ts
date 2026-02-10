export const csharp2Data = {
  "language": "csharp",
  "lessonId": "csharp-2",
  "lessonTitle": "C# II - オブジェクト指向とLINQ",
  "lessonDescription": "C#の強力な機能「継承」「インターフェース」「LINQ」を学びます。現代的なC#プログラミングの技法を身につけましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "exercises": [
    {
      "title": "クラスの継承",
      "correctCode": "// Vehicleクラスを定義\\nclass Vehicle {\\n    // Moveメソッドを定義\\n    public void Move() {\\n        // 画面に出力\\n        Console.WriteLine(\"移動中\");\\n    }\\n}\\n// :で継承\\nclass Car : Vehicle { }\\n\\n// Carインスタンスを作成\\nCar c = new Car();\\n// Moveメソッドを呼び出し\\nc.Move();",
      "holeyCode": "// Vehicleクラスを定義\\nclass ___ {\\n    // Moveメソッドを定義\\n    public void ___() {\\n        // 画面に出力\\n        ___.___(\"___\");\\n    ___\\n___\\n// :で継承\\nclass ___ : ___ { }\\n\\n// Carインスタンスを作成\\n___ ___ = new ___();\\n// Moveメソッドを呼び出し\\n___.___();",
      "correctLines": [
          "// Vehicleクラスを定義",
          "class Vehicle {",
          "    // Moveメソッドを定義",
          "    public void Move() {",
          "        // 画面に出力",
          "        Console.WriteLine(\"移動中\");",
          "    }",
          "}",
          "// :で継承",
          "class Car : Vehicle { }",
          "",
          "// Carインスタンスを作成",
          "Car c = new Car();",
          "// Moveメソッドを呼び出し",
          "c.Move();"
        ],
      "lineHints": [
          null,
          "Vehicleクラスを定義します。",
          null,
          "Moveメソッドを定義します。",
          null,
          "ConsoleクラスのWriteLineメソッドで出力します。",
          "閉じ括弧を入力してください。",
          "閉じ括弧を入力してください。",
          null,
          "CarクラスをVehicleを継承して定義します。",
          null,
          null,
          "Car型の変数cにnew Car()を代入します。",
          null,
          "変数cのMoveメソッドを呼び出します。"
        ],
        "candidates": {
          "operators": [
            ":"
          ],
          "others": ["Console", "WriteLine", "移動中", "}", "Car", "Vehicle", "c", "Move"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "移動中\\n"
          }
        ]
      },
    {
      "title": "メソッドのオーバーライド",
      "correctCode": "// Shapeクラスを定義\\nclass Shape {\\n    // virtualで仮想メソッド\\n    public virtual void Draw() {\\n        // 画面に出力\\n        Console.WriteLine(\"shape\");\\n    }\\n}\\n// Shapeを継承\\nclass Circle : Shape {\\n    // overrideで親メソッドを上書き\\n    public override void Draw() {\\n        // 画面に出力\\n        Console.WriteLine(\"circle\");\\n    }\\n}\\n\\n// Circleインスタンスを作成\\nCircle c = new Circle();\\n// Drawメソッドを呼び出し\\nc.Draw();",
      "holeyCode": "// Shapeクラスを定義\\nclass ___ {\\n    // virtualで仮想メソッド\\n    public virtual void ___() {\\n        // 画面に出力\\n        ___.___(\"___\");\\n    ___\\n___\\n// Shapeを継承\\nclass ___ : ___ {\\n    // overrideで親メソッドを上書き\\n    public override void ___() {\\n        // 画面に出力\\n        ___.___(\"___\");\\n    ___\\n___\\n\\n// Circleインスタンスを作成\\n___ ___ = new ___();\\n// Drawメソッドを呼び出し\\n___.___();",
      "correctLines": [
          "// Shapeクラスを定義",
          "class Shape {",
          "    // virtualで仮想メソッド",
          "    public virtual void Draw() {",
          "        // 画面に出力",
          "        Console.WriteLine(\"shape\");",
          "    }",
          "}",
          "// Shapeを継承",
          "class Circle : Shape {",
          "    // overrideで親メソッドを上書き",
          "    public override void Draw() {",
          "        // 画面に出力",
          "        Console.WriteLine(\"circle\");",
          "    }",
          "}",
          "",
          "// Circleインスタンスを作成",
          "Circle c = new Circle();",
          "// Drawメソッドを呼び出し",
          "c.Draw();"
        ],
      "lineHints": [
          null,
          "Shapeクラスを定義します。",
          null,
          "virtualでDrawメソッドを定義します。",
          null,
          "ConsoleクラスのWriteLineメソッドで出力します。",
          "閉じ括弧を入力してください。",
          "閉じ括弧を入力してください。",
          null,
          "CircleクラスをShapeを継承して定義します。",
          null,
          "overrideでDrawメソッドを上書きします。",
          null,
          "ConsoleクラスのWriteLineメソッドで出力します。",
          "閉じ括弧を入力してください。",
          "閉じ括弧を入力してください。",
          null,
          null,
          "Circle型の変数cにnew Circle()を代入します。",
          null,
          "変数cのDrawメソッドを呼び出します。"
        ],
        "candidates": {
          "keywords": [
            "override"
          ],
          "operators": [
            ":"
          ],
          "others": ["Console", "WriteLine", "shape", "circle", "Draw", "Shape", "}", "Circle", "c"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "circle\\n"
          }
        ]
      },
    {
      "title": "インターフェースを使おう",
      "correctCode": "// interfaceでインターフェースを定義\\ninterface IRunner {\\n    // Runメソッドを宣言\\n    void Run();\\n}\\n// IRunnerを実装\\nclass Robot : IRunner {\\n    // Runメソッドを実装\\n    public void Run() {\\n        // 画面に出力\\n        Console.WriteLine(\"running\");\\n    }\\n}\\n\\n// Robotインスタンスを作成\\nRobot r = new Robot();\\n// Runメソッドを呼び出し\\nr.Run();",
      "holeyCode": "// interfaceでインターフェースを定義\\ninterface ___ {\\n    // Runメソッドを宣言\\n    void ___();\\n___\\n// IRunnerを実装\\nclass ___ : ___ {\\n    // Runメソッドを実装\\n    public void ___() {\\n        // 画面に出力\\n        ___.___(\"___\");\\n    ___\\n___\\n\\n// Robotインスタンスを作成\\n___ ___ = new ___();\\n// Runメソッドを呼び出し\\n___.___();",
      "correctLines": [
          "// interfaceでインターフェースを定義",
          "interface IRunner {",
          "    // Runメソッドを宣言",
          "    void Run();",
          "}",
          "// IRunnerを実装",
          "class Robot : IRunner {",
          "    // Runメソッドを実装",
          "    public void Run() {",
          "        // 画面に出力",
          "        Console.WriteLine(\"running\");",
          "    }",
          "}",
          "",
          "// Robotインスタンスを作成",
          "Robot r = new Robot();",
          "// Runメソッドを呼び出し",
          "r.Run();"
        ],
      "lineHints": [
          null,
          "IRunnerインターフェースを定義します。",
          null,
          "Runメソッドを宣言します。",
          "閉じ括弧を入力してください。",
          null,
          "RobotクラスをIRunnerを実装して定義します。",
          null,
          "Runメソッドを実装します。",
          null,
          "ConsoleクラスのWriteLineメソッドで出力します。",
          "閉じ括弧を入力してください。",
          "閉じ括弧を入力してください。",
          null,
          null,
          "Robot型の変数rにnew Robot()を代入します。",
          null,
          "変数rのRunメソッドを呼び出します。"
        ],
        "candidates": {
          "keywords": [
            "interface"
          ],
          "operators": [
            ":"
          ],
          "others": ["Console", "WriteLine", "running", "Run", "IRunner", "}", "Robot", "r"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "running\\n"
          }
        ]
      },
    {
      "title": "プロパティを使おう",
      "correctCode": "// Itemクラスを定義\\nclass Item {\\n    // getで値を取得\\n    public int Price { get; set; }\\n}\\n\\n// Itemインスタンスを作成\\nItem item = new Item();\\n// Priceに値を設定\\nitem.Price = 500;\\n// Priceを表示\\nConsole.WriteLine(item.Price);",
      "holeyCode": "// Itemクラスを定義\\nclass ___ {\\n    // getで値を取得\\n    public int ___ { get; ___; }\\n___\\n\\n// Itemインスタンスを作成\\n___ ___ = new ___();\\n// Priceに値を設定\\n___.___ = ___;\\n// Priceを表示\\n___.___(___.___ );",
      "correctLines": [
          "// Itemクラスを定義",
          "class Item {",
          "    // getで値を取得",
          "    public int Price { get; set; }",
          "}",
          "",
          "// Itemインスタンスを作成",
          "Item item = new Item();",
          "// Priceに値を設定",
          "item.Price = 500;",
          "// Priceを表示",
          "Console.WriteLine(item.Price);"
        ],
      "lineHints": [
          null,
          "Itemクラスを定義します。",
          null,
          "Priceプロパティをget/setで定義します。",
          "閉じ括弧を入力してください。",
          null,
          null,
          "Item型の変数itemにnew Item()を代入します。",
          null,
          "itemのPriceプロパティに500を設定します。",
          null,
          "ConsoleクラスのWriteLineでitemのPriceを表示します。"
        ],
        "candidates": {
          "keywords": [
            "get"
          ],
          "others": ["Console", "WriteLine", "Price", "Item", "set", "}", "500", "item", "Price);"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "500\\n"
          }
        ]
      },
    {
      "title": "List<T> を使おう",
      "correctCode": "// int型のListを作成\\nList<int> nums = new List<int>();\\n// Addで要素を追加\\nnums.Add(10);\\n// 2つ目の要素も追加\\nnums.Add(20);\\n// インデックス1の要素を表示\\nConsole.WriteLine(nums[1]);",
      "holeyCode": "// int型のListを作成\\n___<___> ___ = new ___<___>();\\n// Addで要素を追加\\n___.___(___);\\n// 2つ目の要素も追加\\n___.___(___);\\n// インデックス1の要素を表示\\n___.___(___[___]);",
      "correctLines": [
          "// int型のListを作成",
          "List<int> nums = new List<int>();",
          "// Addで要素を追加",
          "nums.Add(10);",
          "// 2つ目の要素も追加",
          "nums.Add(20);",
          "// インデックス1の要素を表示",
          "Console.WriteLine(nums[1]);"
        ],
      "lineHints": [
          null,
          "List<int>でint型のリストを作成します。",
          null,
          "numsにAddメソッドで10を追加します。",
          null,
          "numsにAddメソッドで20を追加します。",
          null,
          "numsのインデックス1の要素（20）を表示します。"
        ],
        "candidates": {
          "functions": [
            "Add"
          ],
          "others": ["List", "int", "nums", "10", "20", "Console", "WriteLine", "1"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "20\\n"
          }
        ]
      },
    {
      "title": "LINQ - Where で絞り込み",
      "correctCode": "// int型のListを作成\\nList<int> nums = new List<int> {1, 5, 10, 15, 20};\\n// Whereで条件に合う要素を抽出\\nvar result = nums.Where(n => n >= 10);\\n// foreachでループ\\nforeach (var n in result) {\\n    // 画面に出力\\n    Console.WriteLine(n);\\n}",
      "holeyCode": "// int型のListを作成\\n___<___> ___ = new ___<___> {___, ___, ___, ___, ___};\\n// Whereで条件に合う要素を抽出\\nvar ___ = ___.___(___=> ___ >= ___);\\n// foreachでループ\\nforeach (var ___ in ___) {\\n    // 画面に出力\\n    ___.___(___);\\n___",
      "correctLines": [
          "// int型のListを作成",
          "List<int> nums = new List<int> {1, 5, 10, 15, 20};",
          "// Whereで条件に合う要素を抽出",
          "var result = nums.Where(n => n >= 10);",
          "// foreachでループ",
          "foreach (var n in result) {",
          "    // 画面に出力",
          "    Console.WriteLine(n);",
          "}"
        ],
      "lineHints": [
          null,
          "List<int>型のnumsに{1, 5, 10, 15, 20}を代入します。",
          null,
          "numsにWhereを適用し10以上の要素をresultに代入します。",
          null,
          "resultをnで反復します。",
          null,
          "ConsoleのWriteLineでnを表示します。",
          "閉じ括弧を入力してください。"
        ],
        "candidates": {
          "functions": [
            "Where"
          ],
          "others": ["List", "int", "nums", "1", "5", "10", "15", "20", "result", "n", "Console", "WriteLine", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n15\\n20\\n"
          }
        ]
      },
    {
      "title": "LINQ - Select で変換",
      "correctCode": "// int型のListを作成\\nList<int> nums = new List<int> {1, 2, 3};\\n// Selectで各要素を変換\\nvar squared = nums.Select(n => n * n);\\n// foreachでループ\\nforeach (var n in squared) {\\n    // 画面に出力\\n    Console.WriteLine(n);\\n}",
      "holeyCode": "// int型のListを作成\\n___<___> ___ = new ___<___> {___, ___, ___};\\n// Selectで各要素を変換\\nvar ___ = ___.___(___=> ___ * ___);\\n// foreachでループ\\nforeach (var ___ in ___) {\\n    // 画面に出力\\n    ___.___(___);\\n___",
      "correctLines": [
          "// int型のListを作成",
          "List<int> nums = new List<int> {1, 2, 3};",
          "// Selectで各要素を変換",
          "var squared = nums.Select(n => n * n);",
          "// foreachでループ",
          "foreach (var n in squared) {",
          "    // 画面に出力",
          "    Console.WriteLine(n);",
          "}"
        ],
      "lineHints": [
          null,
          "List<int>型のnumsに{1, 2, 3}を代入します。",
          null,
          "numsにSelectを適用し結果をsquaredに代入します。",
          null,
          "squaredをnで反復します。",
          null,
          "ConsoleのWriteLineでnを表示します。",
          "閉じ括弧を入力してください。"
        ],
        "candidates": {
          "functions": [
            "Select"
          ],
          "others": ["List", "int", "nums", "1", "2", "3", "squared", "n", "Console", "WriteLine", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n4\\n9\\n"
          }
        ]
      },
    {
      "title": "ラムダ式を使おう",
      "correctCode": "// =>でラムダ式を定義\\nFunc<int, int> triple = x => x * 3;\\n// tripleを呼び出して表示\\nConsole.WriteLine(triple(7));",
      "holeyCode": "// =>でラムダ式を定義\\n___<___, ___> ___ = ___ => ___ * ___;\\n// tripleを呼び出して表示\\n___.___(___( ___));",
      "correctLines": [
          "// =>でラムダ式を定義",
          "Func<int, int> triple = x => x * 3;",
          "// tripleを呼び出して表示",
          "Console.WriteLine(triple(7));"
        ],
      "lineHints": [
          null,
          "Func<int, int>でtripleラムダ式を定義します。",
          null,
          "ConsoleのWriteLineでtriple(7)を表示します。"
        ],
        "candidates": {
          "operators": [
            "=>"
          ],
          "others": ["Func", "int", "triple", "x", "3", "Console", "WriteLine", "7"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "21\\n"
          }
        ]
      },
    {
      "title": "例外処理 try-catch",
      "correctCode": "// tryで例外処理を開始\\ntry {\\n    // 例外を投げる\\n    throw new Exception(\"oops\");\\n// catchで例外を捕捉\\n} catch (Exception e) {\\n    // 画面に出力\\n    Console.WriteLine(\"caught\");\\n}",
      "holeyCode": "// tryで例外処理を開始\\n___ {\\n    // 例外を投げる\\n    ___ new ___(\"___\");\\n// catchで例外を捕捉\\n} ___ (___ ___) {\\n    // 画面に出力\\n    ___.___(\"___\");\\n___",
      "correctLines": [
          "// tryで例外処理を開始",
          "try {",
          "    // 例外を投げる",
          "    throw new Exception(\"oops\");",
          "// catchで例外を捕捉",
          "} catch (Exception e) {",
          "    // 画面に出力",
          "    Console.WriteLine(\"caught\");",
          "}"
        ],
      "lineHints": [
          null,
          "tryで例外処理を開始します。",
          null,
          "throwでExceptionを投げます。",
          null,
          "catchでException型の例外eを捕捉します。",
          null,
          "ConsoleのWriteLineで\"caught\"を出力します。",
          "閉じ括弧を入力してください。"
        ],
        "candidates": {
          "keywords": [
            "try",
            "throw",
            "catch"
          ],
          "others": ["Exception", "oops", "e", "Console", "WriteLine", "caught", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "caught\\n"
          }
        ]
      },
    {
      "title": "null条件演算子 ?.",
      "correctCode": "// 文字列を定義（\"こんにちは\"）\\nstring text = \"こんにちは\";\\n// ?.でnull安全にアクセス\\nint? length = text?.Length;\\n// 画面に出力\\nConsole.WriteLine(length);",
      "holeyCode": "// 文字列を定義（\"こんにちは\"）\\n___ ___ = \"___\";\\n// ?.でnull安全にアクセス\\nint? ___ = ___?.___;\\n// 画面に出力\\n___.___(___);",
      "correctLines": [
          "// 文字列を定義（\"こんにちは\"）",
          "string text = \"こんにちは\";",
          "// ?.でnull安全にアクセス",
          "int? length = text?.Length;",
          "// 画面に出力",
          "Console.WriteLine(length);"
        ],
      "lineHints": [
          null,
          "string型の変数textに\"こんにちは\"を代入します。",
          null,
          "textのLengthに?.でアクセスしlengthに代入します。",
          null,
          "ConsoleのWriteLineでlengthを表示します。"
        ],
        "candidates": {
          "operators": [
            "?."
          ],
          "others": ["string", "text", "こんにちは", "length", "Length", "Console", "WriteLine"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "5\\n"
          }
        ]
      }
  ]
}

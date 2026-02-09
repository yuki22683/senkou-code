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
      "holeyCode": "// Vehicleクラスを定義\\nclass ___ {\\n    // Moveメソッドを定義\\n    public void ___() {\\n        // 画面に出力\\n        Console.___(\"移動中\");\\n    ___\\n___\\n// :で継承\\nclass ___ : Vehicle { }\\n___\\n// Carインスタンスを作成\\n___ c = new Car();\\n// Moveメソッドを呼び出し\\nc.___();",
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
          "WriteLineで出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "CarクラスをVehicleを継承して定義します。",
          null,
          null,
          "Car型の変数cにnew Car()を代入します。",
          null,
          "Moveメソッドを呼び出します。"
        ],
        "candidates": {
          "operators": [
            ":"
          ],
          "others": ["class", "void", "moving", "new", "Move", "Vehicle", "WriteLine", "}", "Car", "}", ""]
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
      "holeyCode": "// Shapeクラスを定義\\nclass ___ {\\n    // virtualで仮想メソッド\\n    public virtual void ___() {\\n        // 画面に出力\\n        Console.___(\"shape\");\\n    ___\\n___\\n// Shapeを継承\\nclass ___ : Shape {\\n    // overrideで親メソッドを上書き\\n    public override void ___() {\\n        // 画面に出力\\n        Console.___(\"circle\");\\n    ___\\n___\\n___\\n// Circleインスタンスを作成\\n___ c = new Circle();\\n// Drawメソッドを呼び出し\\nc.___();",
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
          "WriteLineで出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "CircleクラスをShapeを継承して定義します。",
          null,
          "overrideでDrawメソッドを上書きします。",
          null,
          "WriteLineで出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          null,
          "Circle型の変数cにnew Circle()を代入します。",
          null,
          "Drawメソッドを呼び出します。"
        ],
        "candidates": {
          "keywords": [
            "override"
          ],
          "operators": [
            ":"
          ],
          "others": ["class", "virtual", "shape", "circle", "new", "Draw", "Shape", "WriteLine", "}", "Circle", "}", ""]
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
      "holeyCode": "// interfaceでインターフェースを定義\\ninterface ___ {\\n    // Runメソッドを宣言\\n    void ___();\\n___\\n// IRunnerを実装\\nclass ___ : IRunner {\\n    // Runメソッドを実装\\n    public void ___() {\\n        // 画面に出力\\n        Console.___(\"running\");\\n    ___\\n___\\n___\\n// Robotインスタンスを作成\\n___ r = new Robot();\\n// Runメソッドを呼び出し\\nr.___();",
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
          "ここを正しく入力してください。",
          null,
          "RobotクラスをIRunnerを実装して定義します。",
          null,
          "Runメソッドを実装します。",
          null,
          "WriteLineで出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          null,
          "Robot型の変数rにnew Robot()を代入します。",
          null,
          "Runメソッドを呼び出します。"
        ],
        "candidates": {
          "keywords": [
            "interface"
          ],
          "operators": [
            ":"
          ],
          "others": ["void", "running", "new", "Run", "IRunner", "}", "Robot", "WriteLine", "}", ""]
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
      "holeyCode": "// Itemクラスを定義\\nclass ___ {\\n    // getで値を取得\\n    public int Price { get; ___; }\\n___\\n___\\n// Itemインスタンスを作成\\n___ item = new Item();\\n// Priceに値を設定\\nitem.Price = ___;\\n// Priceを表示\\nConsole.___(item.Price);",
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
          "getで値の取得、setで値の設定ができます。",
          "ここを正しく入力してください。",
          null,
          null,
          "Item型の変数itemにnew Item()を代入します。",
          null,
          "Priceに500を設定します。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "get"
          ],
          "others": ["class", "new", "Price", "Item", "set", "}", "500", "WriteLine", "}", ""]
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
      "holeyCode": "// int型のListを作成\\nList<___> nums = new List<int>();\\n// Addで要素を追加\\nnums.Add(___);\\n// 2つ目の要素も追加\\nnums.Add(___);\\n// インデックス1の要素を表示\\nConsole.___(nums[1]);",
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
          "Listで動的な配列を作成します。",
          null,
          "Addメソッドで要素を追加します。",
          null,
          "Addメソッドで2つ目の要素を追加します。",
          null,
          "インデックス1（2番目）の要素20を表示します。"
        ],
        "candidates": {
          "functions": [
            "Add"
          ],
          "others": ["List", "1", "int", "10", "20", "WriteLine"]
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
      "holeyCode": "// int型のListを作成\\nList<int> nums = new List<int> {___, 5, 10, 15, 20};\\n// Whereで条件に合う要素を抽出\\nvar ___ = nums.Where(n => n >= 10);\\n// foreachでループ\\nforeach (var n in ___) {\\n    // 画面に出力\\n    Console.WriteLine(___);\\n___",
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
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "Whereで条件（10以上）に合う要素を抽出します。",
          null,
          "inキーワードでコレクションを反復します。",
          null,
          "WriteLineで各要素を表示します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "Where"
          ],
          "others": ["List", "in", "WriteLine", "1", "result", "n", "}"]
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
      "holeyCode": "// int型のListを作成\\nList<int> nums = new List<int> {___, 2, 3};\\n// Selectで各要素を変換\\nvar ___ = nums.Select(n => n * n);\\n// foreachでループ\\nforeach (var n in ___) {\\n    // 画面に出力\\n    Console.WriteLine(___);\\n___",
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
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "Selectで各要素を2乗に変換します。",
          null,
          "inキーワードでコレクションを反復します。",
          null,
          "WriteLineで各要素を表示します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "Select"
          ],
          "others": ["List", "in", "WriteLine", "1", "squared", "n", "}"]
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
      "holeyCode": "// =>でラムダ式を定義\\nFunc<int, int> triple = x => x * ___;\\n// tripleを呼び出して表示\\nConsole.___(triple(7));",
      "correctLines": [
          "// =>でラムダ式を定義",
          "Func<int, int> triple = x => x * 3;",
          "// tripleを呼び出して表示",
          "Console.WriteLine(triple(7));"
        ],
      "lineHints": [
          null,
          "=>（アロー演算子）でラムダ式を定義します。",
          null,
          "triple(7)は7*3=21を返します。"
        ],
        "candidates": {
          "operators": [
            "=>"
          ],
          "others": ["7", "3", "WriteLine"]
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
      "holeyCode": "// tryで例外処理を開始\\n___ {\\n    // 例外を投げる\\n    ___ new Exception(\"___\");\\n// catchで例外を捕捉\\n} ___ (Exception e) {\\n    // 画面に出力\\n    Console.___(\"caught\");\\n___",
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
          "エラーが発生する可能性のある処理をここから記述します。",
          null,
          "Exceptionは例外の型です。",
          null,
          "エラー（例外）が発生した場合の処理を記述します。",
          null,
          "文字列をコンソールに出力し、改行します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "try"
          ],
          "others": ["Exception(\"oops\");", "catch", "caught", "oops", "WriteLine", "}", "throw"]
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
      "holeyCode": "// 文字列を定義（\"こんにちは\"）\\nstring text = \"___\";\\n// ?.でnull安全にアクセス\\nint? length = text?.___;\\n// 画面に出力\\nConsole.WriteLine(___);",
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
          "文字列型の変数を宣言し、文字列データを代入します。",
          null,
          "?.でnullの場合もエラーにならず安全にアクセスします。",
          null,
          "文字列の長さ5が表示されます。"
        ],
        "candidates": {
          "operators": [
            "?."
          ],
          "others": ["WriteLine", "Length", "length", "こんにちは"]
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

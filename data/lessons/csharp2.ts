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
      "description": "既存のクラスを元に新しいクラスを作る「継承」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "継承とは？",
          "image": "/illustrations/3d_advanced/inheritance.png",
          "content": "# クラスを拡張する\n\n**継承** を使うと、既存のクラス（親クラス）の機能を引き継いだ新しいクラス（子クラス）を作れます。コードの再利用に便利です。"
        },
        {
          "title": "継承の書き方",
          "image": "/illustrations/3d_advanced/inheritance.png",
          "content": "# : で継承を表す\n\n子クラス名の後に `: 親クラス名` と書きます。\n\n**コード例：**\n```csharp\nclass Animal {\n    public void Eat() {\n        Console.WriteLine(\"eating\");\n    }\n}\nclass Dog : Animal { }\n// Dog は Eat() を使える\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Vehicle {\n    public void Move() {\n        Console.WriteLine(\"moving\");\n    }\n}\nclass Car : Vehicle { }\n\nCar c = new Car();\nc.Move();",
      "holeyCode": "class Vehicle {\n    public void Move() {\n        Console.WriteLine(\"moving\");\n    }\n}\n// :で継承\nclass Car ___ Vehicle { }\n\nCar c = new Car();\nc.Move();",
      "correctLines": [
        "class Vehicle {",
        "    public void Move() {",
        "        Console.WriteLine(\"moving\");",
        "    }",
        "}",
        "class Car : Vehicle { }",
        "",
        "Car c = new Car();",
        "c.Move();"
      ],
      "lineHints": [
        "親クラス Vehicle を定義します。",
        "Move メソッドを定義します。",
        "",
        "",
        "",
        ": を使って継承します。",
        "",
        "",
        "Car は Move() を使えます。"
      ],
      "candidates": {
        "operators": [":"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "moving\n"
        }
      ]
    },
    {
      "title": "メソッドのオーバーライド",
      "description": "親クラスのメソッドを子クラスで上書きする「オーバーライド」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "オーバーライドとは？",
          "image": "/illustrations/3d_advanced/inheritance.png",
          "content": "# 親の機能を上書き\n\n**オーバーライド** は、親クラスで定義されたメソッドを子クラスで書き換える機能です。`virtual` と `override` キーワードを使います。"
        },
        {
          "title": "virtual と override",
          "image": "/illustrations/3d/robot.png",
          "content": "# 仮想メソッドの仕組み\n\n親クラスで `virtual` をつけたメソッドは、子クラスで `override` して上書きできます。\n\n**コード例：**\n```csharp\nclass Animal {\n    public virtual void Speak() {\n        Console.WriteLine(\"...\");\n    }\n}\nclass Cat : Animal {\n    public override void Speak() {\n        Console.WriteLine(\"meow\");\n    }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Shape {\n    public virtual void Draw() {\n        Console.WriteLine(\"shape\");\n    }\n}\nclass Circle : Shape {\n    public override void Draw() {\n        Console.WriteLine(\"circle\");\n    }\n}\n\nCircle c = new Circle();\nc.Draw();",
      "holeyCode": "class Shape {\n    public virtual void Draw() {\n        Console.WriteLine(\"shape\");\n    }\n}\nclass Circle : Shape {\n    // overrideで親メソッドを上書き\n    public ___ void Draw() {\n        Console.WriteLine(\"circle\");\n    }\n}\n\nCircle c = new Circle();\nc.Draw();",
      "correctLines": [
        "class Shape {",
        "    public virtual void Draw() {",
        "        Console.WriteLine(\"shape\");",
        "    }",
        "}",
        "class Circle : Shape {",
        "    public override void Draw() {",
        "        Console.WriteLine(\"circle\");",
        "    }",
        "}",
        "",
        "Circle c = new Circle();",
        "c.Draw();"
      ],
      "lineHints": [
        "",
        "virtual で仮想メソッドにします。",
        "",
        "",
        "",
        "",
        "override で上書きします。",
        "",
        "",
        "",
        "",
        "",
        "Circle の Draw が呼ばれます。"
      ],
      "candidates": {
        "keywords": ["override"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "circle\n"
        }
      ]
    },
    {
      "title": "インターフェースを使おう",
      "description": "クラスが実装すべきメソッドを定義する「インターフェース」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "インターフェースとは？",
          "image": "/illustrations/3d_advanced/interface_blueprint.png",
          "content": "# 約束事を決める\n\n**インターフェース** は、クラスが実装すべきメソッドの「約束事」を定義します。複数のクラスに共通の機能を持たせたいときに便利です。"
        },
        {
          "title": "interface の使い方",
          "image": "/illustrations/3d_advanced/interface_blueprint.png",
          "content": "# interface キーワード\n\n`interface` で定義し、クラスで実装します。名前は I から始めるのが慣習です。\n\n**コード例：**\n```csharp\ninterface IGreeter {\n    void Greet();\n}\nclass Person : IGreeter {\n    public void Greet() {\n        Console.WriteLine(\"Hello!\");\n    }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "interface IRunner {\n    void Run();\n}\nclass Robot : IRunner {\n    public void Run() {\n        Console.WriteLine(\"running\");\n    }\n}\n\nRobot r = new Robot();\nr.Run();",
      "holeyCode": "// interfaceでインターフェースを定義\n___ IRunner {\n    void Run();\n}\nclass Robot : IRunner {\n    public void Run() {\n        Console.WriteLine(\"running\");\n    }\n}\n\nRobot r = new Robot();\nr.Run();",
      "correctLines": [
        "interface IRunner {",
        "    void Run();",
        "}",
        "class Robot : IRunner {",
        "    public void Run() {",
        "        Console.WriteLine(\"running\");",
        "    }",
        "}",
        "",
        "Robot r = new Robot();",
        "r.Run();"
      ],
      "lineHints": [
        "interface でインターフェースを定義します。",
        "Run メソッドの宣言です。",
        "",
        "IRunner を実装します。",
        "Run メソッドを実装します。",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["interface"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "running\n"
        }
      ]
    },
    {
      "title": "プロパティを使おう",
      "description": "値の取得・設定を制御できる「プロパティ」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "プロパティとは？",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# データへのアクセスを制御\n\n**プロパティ** は、フィールドへのアクセスを制御する仕組みです。`get` で取得、`set` で設定のロジックを書けます。"
        },
        {
          "title": "自動プロパティ",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# { get; set; }\n\n`{ get; set; }` と書くだけで、シンプルなプロパティが作れます。\n\n**コード例：**\n```csharp\nclass Person {\n    public string Name { get; set; }\n}\nPerson p = new Person();\np.Name = \"Taro\";\nConsole.WriteLine(p.Name);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Item {\n    public int Price { get; set; }\n}\n\nItem item = new Item();\nitem.Price = 500;\nConsole.WriteLine(item.Price);",
      "holeyCode": "class Item {\n    // getで値を取得\n    public int Price { ___; set; }\n}\n\nItem item = new Item();\nitem.Price = 500;\nConsole.WriteLine(item.Price);",
      "correctLines": [
        "class Item {",
        "    public int Price { get; set; }",
        "}",
        "",
        "Item item = new Item();",
        "item.Price = 500;",
        "Console.WriteLine(item.Price);"
      ],
      "lineHints": [
        "",
        "get で値を取得できるようにします。",
        "",
        "",
        "",
        "Price に 500 を設定します。",
        "Price の値を表示します。"
      ],
      "candidates": {
        "keywords": ["get"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "500\n"
        }
      ]
    },
    {
      "title": "List<T> を使おう",
      "description": "動的にサイズが変わるリスト「List<T>」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "List<T> とは？",
          "image": "/illustrations/3d_advanced/generics_glass.png",
          "content": "# 可変長のリスト\n\n**List<T>** は、要素を自由に追加・削除できる動的配列です。`<T>` には格納する型を指定します。"
        },
        {
          "title": "List の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# Add で追加\n\n`Add()` メソッドで要素を追加し、インデックスでアクセスします。\n\n**コード例：**\n```csharp\nList<string> fruits = new List<string>();\nfruits.Add(\"Apple\");\nfruits.Add(\"Banana\");\nConsole.WriteLine(fruits[0]); // Apple\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "List<int> nums = new List<int>();\nnums.Add(10);\nnums.Add(20);\nConsole.WriteLine(nums[1]);",
      "holeyCode": "List<int> nums = new List<int>();\n// Addで要素を追加\nnums.___(10);\nnums.___(20);\nConsole.WriteLine(nums[1]);",
      "correctLines": [
        "List<int> nums = new List<int>();",
        "nums.Add(10);",
        "nums.Add(20);",
        "Console.WriteLine(nums[1]);"
      ],
      "lineHints": [
        "int型のListを作成します。",
        "Add で要素を追加します。",
        "",
        "インデックス1の要素（20）を表示します。"
      ],
      "candidates": {
        "functions": ["Add"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "20\n"
        }
      ]
    },
    {
      "title": "LINQ - Where で絞り込み",
      "description": "条件に合う要素だけを抽出する「Where」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "LINQ とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# データ操作の強力なツール\n\n**LINQ** は、コレクションを簡単に操作できる機能です。SQL のようにデータを検索・変換できます。"
        },
        {
          "title": "Where でフィルタリング",
          "image": "/illustrations/3d/robot.png",
          "content": "# 条件に合う要素を抽出\n\n`Where()` を使って、条件を満たす要素だけを取り出せます。\n\n**コード例：**\n```csharp\nList<int> nums = new List<int> {1, 2, 3, 4, 5};\nvar big = nums.Where(n => n > 3);\nforeach (var n in big) {\n    Console.WriteLine(n); // 4, 5\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "List<int> nums = new List<int> {1, 5, 10, 15, 20};\nvar result = nums.Where(n => n >= 10);\nforeach (var n in result) {\n    Console.WriteLine(n);\n}",
      "holeyCode": "List<int> nums = new List<int> {1, 5, 10, 15, 20};\n// Whereで条件に合う要素を抽出\nvar result = nums.___(n => n >= 10);\nforeach (var n in result) {\n    Console.WriteLine(n);\n}",
      "correctLines": [
        "List<int> nums = new List<int> {1, 5, 10, 15, 20};",
        "var result = nums.Where(n => n >= 10);",
        "foreach (var n in result) {",
        "    Console.WriteLine(n);",
        "}"
      ],
      "lineHints": [
        "リストを作成します。",
        "Where で 10 以上の要素を抽出します。",
        "結果をループで表示します。",
        "",
        ""
      ],
      "candidates": {
        "functions": ["Where"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n15\n20\n"
        }
      ]
    },
    {
      "title": "LINQ - Select で変換",
      "description": "各要素を変換する「Select」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "Select とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 要素を変換する\n\n**Select** は、コレクションの各要素を別の形に変換します。JavaScript の `map` に似ています。"
        },
        {
          "title": "Select の使い方",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 各要素を加工\n\n`Select()` で各要素に処理を適用し、新しいコレクションを作ります。\n\n**コード例：**\n```csharp\nList<int> nums = new List<int> {1, 2, 3};\nvar doubled = nums.Select(n => n * 2);\n// 2, 4, 6\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "List<int> nums = new List<int> {1, 2, 3};\nvar squared = nums.Select(n => n * n);\nforeach (var n in squared) {\n    Console.WriteLine(n);\n}",
      "holeyCode": "List<int> nums = new List<int> {1, 2, 3};\n// Selectで各要素を変換\nvar squared = nums.___(n => n * n);\nforeach (var n in squared) {\n    Console.WriteLine(n);\n}",
      "correctLines": [
        "List<int> nums = new List<int> {1, 2, 3};",
        "var squared = nums.Select(n => n * n);",
        "foreach (var n in squared) {",
        "    Console.WriteLine(n);",
        "}"
      ],
      "lineHints": [
        "",
        "Select で各要素を2乗します。",
        "",
        "",
        ""
      ],
      "candidates": {
        "functions": ["Select"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n4\n9\n"
        }
      ]
    },
    {
      "title": "ラムダ式を使おう",
      "description": "短く関数を書ける「ラムダ式」を詳しく学びましょう。",
      "difficulty": "medium",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "ラムダ式とは？",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# 無名関数の簡潔な書き方\n\n**ラムダ式** は、名前のない関数を短く書く方法です。`=>` を使って引数と処理を結びます。"
        },
        {
          "title": "ラムダ式の書き方",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# (引数) => 処理\n\n引数が1つなら `()` を省略できます。\n\n**コード例：**\n```csharp\nFunc<int, int> square = x => x * x;\nConsole.WriteLine(square(5)); // 25\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "Func<int, int> triple = x => x * 3;\nConsole.WriteLine(triple(7));",
      "holeyCode": "// =>でラムダ式を定義\nFunc<int, int> triple = x ___ x * 3;\nConsole.WriteLine(triple(7));",
      "correctLines": [
        "Func<int, int> triple = x => x * 3;",
        "Console.WriteLine(triple(7));"
      ],
      "lineHints": [
        "=> でラムダ式を定義します。",
        "triple(7) は 21 を返します。"
      ],
      "candidates": {
        "operators": ["=>"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "21\n"
        }
      ]
    },
    {
      "title": "例外処理 try-catch",
      "description": "エラーが起きたときに対処する「例外処理」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "例外処理とは？",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# エラーに備える\n\n**例外処理** を使うと、プログラム実行中のエラーに対処できます。エラーが起きてもプログラムがクラッシュしません。"
        },
        {
          "title": "try-catch の使い方",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# try で試し、catch で捕まえる\n\n`try` ブロックで処理を実行し、エラーは `catch` で捕まえます。\n\n**コード例：**\n```csharp\ntry {\n    int x = int.Parse(\"abc\");\n} catch (Exception e) {\n    Console.WriteLine(\"Error!\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "try {\n    throw new Exception(\"oops\");\n} catch (Exception e) {\n    Console.WriteLine(\"caught\");\n}",
      "holeyCode": "// tryで例外処理を開始\n___ {\n    throw new Exception(\"oops\");\n} catch (Exception e) {\n    Console.WriteLine(\"caught\");\n}",
      "correctLines": [
        "try {",
        "    throw new Exception(\"oops\");",
        "} catch (Exception e) {",
        "    Console.WriteLine(\"caught\");",
        "}"
      ],
      "lineHints": [
        "try ブロックを開始します。",
        "例外を投げます。",
        "catch で例外を捕まえます。",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["try"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "caught\n"
        }
      ]
    },
    {
      "title": "null条件演算子 ?.",
      "description": "nullかもしれない値を安全に扱う「?.」演算子を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "null参照の問題",
          "image": "/illustrations/3d_advanced/pointer_arrow.png",
          "content": "# NullReferenceException を防ぐ\n\nオブジェクトが `null` のときにメンバにアクセスするとエラーになります。`?.` を使うと安全にアクセスできます。"
        },
        {
          "title": "?. の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# null なら null を返す\n\n`?.` は、左側が `null` なら `null` を返し、そうでなければメンバにアクセスします。\n\n**コード例：**\n```csharp\nstring name = null;\nint? len = name?.Length; // null\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "string text = \"Hello\";\nint? length = text?.Length;\nConsole.WriteLine(length);",
      "holeyCode": "string text = \"Hello\";\n// ?.でnull安全にアクセス\nint? length = text___Length;\nConsole.WriteLine(length);",
      "correctLines": [
        "string text = \"Hello\";",
        "int? length = text?.Length;",
        "Console.WriteLine(length);"
      ],
      "lineHints": [
        "",
        "?. で安全にアクセスします。",
        "5 が表示されます。"
      ],
      "candidates": {
        "operators": ["?."]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "5\n"
        }
      ]
    }
  ]
}

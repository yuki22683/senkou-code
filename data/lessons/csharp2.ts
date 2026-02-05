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
            "title": "継承（けいしょう）とは？",
            "content": "# クラスを拡張（かくちょう）する\\n\\n**継承（けいしょう）**を使うと、すでにあるクラスの機能を引き継いで、新しいクラスを作れます。\\n\\n**身近な例え：**\\n「乗り物」という設計図があって、そこから「車」「自転車」「バイク」を作ることを想像してください。どれも「動く」という共通の機能を持っていますが、それぞれ独自の特徴もあります。\\n\\n**用語：**\\n- **親クラス（おやくらす）**: 元になるクラス（「乗り物」のこと）\\n- **子クラス（こくらす）**: 親クラスを元に作る新しいクラス（「車」のこと）\\n\\n**メリット：**\\n- 同じコードを何度も書かなくていい\\n- 共通の機能を1か所で管理できる"
          },
          {
            "title": "継承の書き方",
            "content": "# コロン「:」で継承を表す\\n\\n子クラスを作るときは、クラス名の後に `: 親クラス名` と書きます。\\n\\n**コード例（動物クラスを継承）：**\\n```csharp\\n// 親クラス：動物\\nclass Animal {\\n    public void Eat() {\\n        Console.WriteLine(\"eating\");\\n    }\\n}\\n\\n// 子クラス：犬（Animalを継承）\\nclass Dog : Animal { }\\n```\\n\\n**解説：**\\n1. `Animal` クラスに `Eat()` メソッドを定義\\n2. `Dog : Animal` で「DogはAnimalを継承する」と宣言\\n3. Dog は何も書かなくても、自動的に `Eat()` が使える！\\n\\nこれが継承の力です。親クラスの機能を、子クラスがそのまま使えます。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// Vehicleクラスを定義\\nclass Vehicle {\\n    // Moveメソッドを定義\\n    public void Move() {\\n        // 画面に出力\\n        Console.WriteLine(\"移動中\");\\n    }\\n}\\n// :で継承\\nclass Car : Vehicle { }\\n\\n// Carインスタンスを作成\\nCar c = new Car();\\n// Moveメソッドを呼び出し\\nc.Move();",
        "holeyCode": "// Vehicleクラスを定義\\nclass ___ {\\n    // Moveメソッドを定義\\n    public void ___() {\\n        // 画面に出力\\n        Console.___(\"移動中\");\\n    ___\\n___\\n// :で継承\\nclass ___ : Vehicle { }\\n\\n// Carインスタンスを作成\\n___ c = new Car();\\n// Moveメソッドを呼び出し\\nc.___();",
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
          null,
          null,
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
          "others": ["class", "void", "moving", "new", "Move", "Vehicle", "WriteLine", "}", "Car"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "moving\\n"
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
            "content": "# 親の機能を上書きする\\n\\n**オーバーライド（override）**は、親クラスで定義されたメソッドを子クラスで「書き換える」機能です。\\n\\n**身近な例え：**\\n「動物」クラスには「鳴く」メソッドがあるとします。でも、犬は「ワン！」、猫は「ニャー」と、動物によって鳴き方は違いますよね。オーバーライドを使うと、子クラスごとに違う動きを定義できます。\\n\\n**使うキーワード：**\\n- `virtual`（バーチャル）: 親クラスで「上書きしてもいいよ」と許可する\\n- `override`（オーバーライド）: 子クラスで「上書きするよ」と宣言する"
          },
          {
            "title": "virtual と override",
            "content": "# 仮想メソッド（かそうメソッド）の仕組み\\n\\n親クラスで `virtual` をつけたメソッドは、子クラスで `override` して上書きできます。\\n\\n**コード例（動物の鳴き声を変える）：**\\n```csharp\\n// 親クラス\\nclass Animal {\\n    public virtual void Speak() {\\n        Console.WriteLine(\"...\");\\n    }\\n}\\n\\n// 子クラス：猫\\nclass Cat : Animal {\\n    public override void Speak() {\\n        Console.WriteLine(\"meow\");\\n    }\\n}\\n```\\n\\n**解説：**\\n1. 親の `Speak()` に `virtual` をつけて「上書きOK」にする\\n2. 子クラスで `override` をつけて、違う動きを定義する\\n3. Cat の `Speak()` を呼ぶと「meow」と表示される！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// Shapeクラスを定義\\nclass Shape {\\n    // virtualで仮想メソッド\\n    public virtual void Draw() {\\n        // 画面に出力\\n        Console.WriteLine(\"shape\");\\n    }\\n}\\n// Shapeを継承\\nclass Circle : Shape {\\n    // overrideで親メソッドを上書き\\n    public override void Draw() {\\n        // 画面に出力\\n        Console.WriteLine(\"circle\");\\n    }\\n}\\n\\n// Circleインスタンスを作成\\nCircle c = new Circle();\\n// Drawメソッドを呼び出し\\nc.Draw();",
        "holeyCode": "// Shapeクラスを定義\\nclass ___ {\\n    // virtualで仮想メソッド\\n    public virtual void ___() {\\n        // 画面に出力\\n        Console.___(\"shape\");\\n    ___\\n___\\n// Shapeを継承\\nclass ___ : Shape {\\n    // overrideで親メソッドを上書き\\n    public override void ___() {\\n        // 画面に出力\\n        Console.___(\"circle\");\\n    ___\\n___\\n\\n// Circleインスタンスを作成\\n___ c = new Circle();\\n// Drawメソッドを呼び出し\\nc.___();",
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
          null,
          null,
          null,
          "CircleクラスをShapeを継承して定義します。",
          null,
          "overrideでDrawメソッドを上書きします。",
          null,
          "WriteLineで出力します。",
          null,
          null,
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
          "others": ["class", "virtual", "shape", "circle", "new", "Draw", "Shape", "WriteLine", "}", "Circle"]
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
        "description": "クラスが実装すべきメソッドを定義する「インターフェース」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "インターフェースとは？",
            "content": "# 約束事（やくそくごと）を決める\\n\\n**インターフェース（interface）**は、クラスが「このメソッドを必ず持っていないとダメだよ」という約束事を定義します。\\n\\n**身近な例え：**\\nUSBポートを思い浮かべてください。どんなUSB機器も「差し込める」という共通のルールを守っています。インターフェースも同じで、「このメソッドを持っていること」というルールを決めます。\\n\\n**メリット：**\\n- 複数のクラスに同じ機能を持たせられる\\n- 「このインターフェースを持っている」＝「この機能が使える」と保証できる\\n- 違うクラスでも同じように扱える"
          },
          {
            "title": "interface の使い方",
            "content": "# interfaceキーワードで定義する\\n\\n`interface` で定義し、クラスで実装（じっそう：実際に中身を作る）します。\\n\\n**命名ルール：**\\n名前は `I`（アイ）から始めるのがC#のお約束です（例：IGreeter、IRunner）\\n\\n**コード例（あいさつインターフェース）：**\\n```csharp\\n// インターフェースを定義\\ninterface IGreeter {\\n    void Greet();  // 中身は書かない（約束だけ）\\n}\\n\\n// インターフェースを実装\\nclass Person : IGreeter {\\n    public void Greet() {\\n        Console.WriteLine(\"Hello!\");\\n    }\\n}\\n```\\n\\n**解説：**\\n1. `interface IGreeter` で「Greet()を持つこと」という約束を定義\\n2. `Person : IGreeter` で「Personはこの約束を守る」と宣言\\n3. Person は必ず `Greet()` を実装しないとエラーになる"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// interfaceでインターフェースを定義\\ninterface IRunner {\\n    // Runメソッドを宣言\\n    void Run();\\n}\\n// IRunnerを実装\\nclass Robot : IRunner {\\n    // Runメソッドを実装\\n    public void Run() {\\n        // 画面に出力\\n        Console.WriteLine(\"running\");\\n    }\\n}\\n\\n// Robotインスタンスを作成\\nRobot r = new Robot();\\n// Runメソッドを呼び出し\\nr.Run();",
        "holeyCode": "// interfaceでインターフェースを定義\\ninterface ___ {\\n    // Runメソッドを宣言\\n    void ___();\\n___\\n// IRunnerを実装\\nclass ___ : IRunner {\\n    // Runメソッドを実装\\n    public void ___() {\\n        // 画面に出力\\n        Console.___(\"running\");\\n    ___\\n___\\n\\n// Robotインスタンスを作成\\n___ r = new Robot();\\n// Runメソッドを呼び出し\\nr.___();",
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
          null,
          null,
          "RobotクラスをIRunnerを実装して定義します。",
          null,
          "Runメソッドを実装します。",
          null,
          "WriteLineで出力します。",
          null,
          null,
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
          "others": ["void", "running", "new", "Run", "IRunner", "}", "Robot", "WriteLine"]
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
        "description": "値の取得・設定を制御できる「プロパティ」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "プロパティとは？",
            "content": "# データへのアクセスを制御する\\n\\n**プロパティ**は、クラスのデータ（フィールド）へのアクセスを制御する仕組みです。\\n\\n**身近な例え：**\\n銀行口座を思い浮かべてください。お金を預けたり引き出したりするとき、直接金庫に触れるのではなく、窓口を通しますよね。プロパティも同じで、データに直接アクセスするのではなく、「窓口」を通してアクセスします。\\n\\n**2つの機能：**\\n- `get`（ゲット）: データを取得する（読み取る）\\n- `set`（セット）: データを設定する（書き込む）\\n\\nこれにより、不正な値が入るのを防いだり、値を変えるときに追加の処理をしたりできます。"
          },
          {
            "title": "自動プロパティ",
            "content": "# { get; set; } で簡単に作る\\n\\n`{ get; set; }` と書くだけで、シンプルなプロパティが作れます。これを「自動プロパティ」と呼びます。\\n\\n**コード例（名前を持つPersonクラス）：**\\n```csharp\\nclass Person {\\n    public string Name { get; set; }\\n}\\n\\nPerson p = new Person();\\np.Name = \"Taro\";           // set で値を設定\\nConsole.WriteLine(p.Name); // get で値を取得\\n```\\n=> Taro\\n\\n**解説：**\\n1. `string Name { get; set; }` で「名前」プロパティを定義\\n2. `p.Name = \"Taro\"` で値を設定（setが動く）\\n3. `p.Name` で値を取得（getが動く）\\n\\n**ポイント：**\\n変数のように使えるけど、実は裏でgetとsetが動いています！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// Itemクラスを定義\\nclass Item {\\n    // getで値を取得\\n    public int Price { get; set; }\\n}\\n\\n// Itemインスタンスを作成\\nItem item = new Item();\\n// Priceに値を設定\\nitem.Price = 500;\\n// Priceを表示\\nConsole.WriteLine(item.Price);",
        "holeyCode": "// Itemクラスを定義\\nclass ___ {\\n    // getで値を取得\\n    public int Price { get; ___; }\\n___\\n\\n// Itemインスタンスを作成\\n___ item = new Item();\\n// Priceに値を設定\\nitem.Price = ___;\\n// Priceを表示\\nConsole.___(item.Price);",
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
                  null,
                  null,
                  null,
                  "Item型の変数itemにnew Item()を代入します。",
                  null,
                  "Priceに500を設定します。",
                  null,
                  null
        ],
        "candidates": {
          "keywords": [
            "get"
          ],
          "others": ["class", "new", "Price", "Item", "set", "}", "500", "WriteLine"]
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
        "description": "動的にサイズが変わるリスト「List<T>」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "List<T>（リスト）とは？",
            "content": "# サイズが変わるリスト\\n\\n**List<T>**（リスト）は、要素を自由に追加したり削除したりできる「動的（どうてき）な配列」です。\\n\\n**配列との違い：**\\n- 配列：最初にサイズを決める、後から変更できない\\n- List：サイズを決めなくていい、自由に追加・削除できる\\n\\n**身近な例え：**\\n配列は「固定の棚」、Listは「伸び縮みする本棚」のようなものです。本が増えたら棚も伸びます！\\n\\n**<T>って何？：**\\n`<T>` には「何を入れるか」を指定します（ジェネリクスと呼びます）\\n- `List<string>` → 文字列のリスト\\n- `List<int>` → 数字のリスト"
          },
          {
            "title": "List の使い方",
            "content": "# Add（アッド）で要素を追加\\n\\n`Add()` メソッドで要素を追加し、配列と同じように `[番号]` でアクセスします。\\n\\n**コード例（くだものリストを作る）：**\\n```csharp\\n// 文字列のListを作る\\nList<string> fruits = new List<string>();\\n\\n// 要素を追加\\nfruits.Add(\"Apple\");   // 0番目\\nfruits.Add(\"Banana\");  // 1番目\\n\\n// アクセス\\nConsole.WriteLine(fruits[0]); // Apple\\nConsole.WriteLine(fruits[1]); // Banana\\n```\\n\\n**よく使うメソッド：**\\n- `Add(値)` : 末尾に追加\\n- `Remove(値)` : 値を削除\\n- `Count` : 要素数を取得"
          }
        ],
        "initialDisplayMode": "holey",
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
        "description": "条件に合う要素だけを抽出する「Where」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "LINQ（リンク）とは？",
            "content": "# データ操作の強力なツール\\n\\n**LINQ**（リンク、Language Integrated Query）は、コレクション（配列やList）を簡単に操作できる機能です。\\n\\n**身近な例え：**\\nスマホの連絡先アプリで「東京に住んでいる人だけ表示」「名前順に並べる」といった検索・絞り込みができますよね。LINQを使うと、プログラムでも同じようなことが簡単にできます！\\n\\n**LINQでできること：**\\n- Where : 条件で絞り込む\\n- Select : データを変換する\\n- OrderBy : 並べ替える\\n- Sum, Average : 合計・平均を計算"
          },
          {
            "title": "Where（ウェア）でフィルタリング",
            "content": "# 条件に合う要素だけを取り出す\\n\\n`Where()` を使って、条件を満たす要素だけを取り出せます。\\n\\n**コード例（3より大きい数だけ取り出す）：**\\n```csharp\\nList<int> nums = new List<int> {1, 2, 3, 4, 5};\\nvar big = nums.Where(n => n > 3);\\nforeach (var n in big) {\\n    Console.WriteLine(n); // 4, 5\\n}\\n```\\n\\n**解説：**\\n1. `nums.Where(n => n > 3)` で「3より大きい」という条件で絞り込み\\n2. `n => n > 3` はラムダ式（後で詳しく学びます）で、各要素をチェックする\\n3. 条件を満たす 4 と 5 だけが残る\\n\\n**`=>` って何？：**\\n「〜するもの」という意味で、`n => n > 3` は「nが3より大きいかチェックする」と読みます。"
          }
        ],
        "initialDisplayMode": "holey",
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
          null
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
        "description": "各要素を変換する「Select」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 7,
        "tutorialSlides": [
          {
            "title": "Select（セレクト）とは？",
            "content": "# 要素を変換する\\n\\n**Select**（セレクト）は、コレクションの各要素を別の形に変換します。\\n\\n**身近な例え：**\\n「全員の点数を10点ずつ加算する」「全員の名前の前に『さん』をつける」のように、リストの全員に同じ処理を適用したいときに使います。\\n\\n**Whereとの違い：**\\n- **Where** : 条件で絞り込む（数が減ることがある）\\n- **Select** : 全部の要素を変換する（数は変わらない）\\n\\n**他の言語では：**\\nJavaScriptの `map`、Pythonの `map` と同じ機能です。"
          },
          {
            "title": "Select の使い方",
            "content": "# 各要素を加工する\\n\\n`Select()` で各要素に処理を適用し、新しいコレクションを作ります。\\n\\n**コード例（すべての数を2倍にする）：**\\n```csharp\\nList<int> nums = new List<int> {1, 2, 3};\\nvar doubled = nums.Select(n => n * 2);\\n// 結果: 2, 4, 6\\n```\\n\\n**解説：**\\n1. `nums.Select(n => n * 2)` で「各要素を2倍にする」と指示\\n2. 1 → 2、2 → 4、3 → 6 と変換される\\n3. 元のnumsは変わらず、新しいコレクションが作られる\\n\\n**ポイント：**\\n元のデータは変わらない！変換した結果が新しく作られます。"
          }
        ],
        "initialDisplayMode": "holey",
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
          null
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
        "description": "短く関数を書ける「ラムダ式」を詳しく学びましょう。",
        "difficulty": "medium",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "ラムダ式（しき）とは？",
            "content": "# 名前のない関数を短く書く\\n\\n**ラムダ式**は、名前のない関数（無名関数：むめいかんすう）を短く書く方法です。`=>`（アロー演算子）を使って引数と処理を結びます。\\n\\n**身近な例え：**\\n普通のメソッドは「名前付きのレシピ」のようなもの。ラムダ式は「その場限りの簡単なメモ書きレシピ」のようなものです。\\n\\n**なぜ使う？：**\\n- LINQのWhere、Selectなどで使う\\n- 短い処理を簡潔に書ける\\n- 一度しか使わない処理に便利\\n\\n**読み方：**\\n`=>` は「〜を受け取って」「〜を返す」と読みます。"
          },
          {
            "title": "ラムダ式の書き方",
            "content": "# 基本の形：(引数) => 処理\\n\\n引数が1つなら `()` を省略できます。\\n\\n**コード例（数を2乗する関数）：**\\n```csharp\\n// ラムダ式で関数を定義\\nFunc<int, int> square = x => x * x;\\n\\n// 使う\\nConsole.WriteLine(square(5)); // 25\\n```\\n\\n**解説：**\\n1. `Func<int, int>` は「intを受け取ってintを返す関数」の型\\n2. `x => x * x` は「xを受け取って、x * x を返す」という意味\\n3. `square(5)` で5を渡すと、5 * 5 = 25 が返る\\n\\n**いろいろな書き方：**\\n- `x => x * 2` : xを2倍にする\\n- `(a, b) => a + b` : aとbを足す（引数が複数のとき）\\n- `() => \"Hello\"` : 引数なしで\"Hello\"を返す"
          }
        ],
        "initialDisplayMode": "holey",
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
        "description": "エラーが起きたときに対処する「例外処理」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 9,
        "tutorialSlides": [
          {
            "title": "例外処理（れいがいしょり）とは？",
            "content": "# エラーに備える\\n\\n**例外処理（れいがいしょり）**を使うと、プログラム実行中のエラーに対処できます。例外（エラー）が起きてもプログラムがクラッシュ（強制終了）しません。\\n\\n**身近な例え：**\\nサーカスの空中ブランコを思い浮かべてください。万が一落ちても、セーフティネットがあれば大丈夫ですよね。例外処理は、プログラムの「セーフティネット」のようなものです。\\n\\n**なぜ必要？：**\\n- ファイルが見つからない\\n- ネットワークがつながらない\\n- ユーザーが変な値を入力した\\n\\nこういう「予想外のこと」が起きても、プログラムを安全に動かし続けられます。"
          },
          {
            "title": "try-catch の使い方",
            "content": "# try で試し、catch で捕まえる\\n\\n`try`（トライ：試す）ブロックで処理を実行し、エラーは `catch`（キャッチ：捕まえる）で捕まえます。\\n\\n**コード例（数字に変換できないとき）：**\\n```csharp\\ntry {\\n    // \"abc\" は数字に変換できない！\\n    int x = int.Parse(\"abc\");\\n} catch (Exception e) {\\n    // エラーが起きたらここに来る\\n    Console.WriteLine(\"Error!\");\\n}\\n```\\n=> Error!\\n\\n**解説：**\\n1. `try { }` の中で「エラーが起きるかもしれない処理」を実行\\n2. エラーが起きたら、すぐに `catch { }` に移動\\n3. `catch` の中でエラーへの対処を書く\\n4. プログラムはクラッシュせずに続行できる"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// tryで例外処理を開始\\ntry {\\n    // 例外を投げる\\n    throw new Exception(\"oops\");\\n// catchで例外を捕捉\\n} catch (Exception e) {\\n    // 画面に出力\\n    Console.WriteLine(\"caught\");\\n}",
        "holeyCode": "// tryで例外処理を開始\\n___ {\\n    // 例外を投げる\\n    throw new Exception(\"___\");\\n// catchで例外を捕捉\\n} ___ (Exception e) {\\n    // 画面に出力\\n    Console.___(\"caught\");\\n___",
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
          null
        ],
        "candidates": {
          "keywords": [
            "try"
          ],
          "others": ["Exception(\"oops\");", "catch", "caught", "oops", "WriteLine", "}"]
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
        "description": "nullかもしれない値を安全に扱う「?.」演算子を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 10,
        "tutorialSlides": [
          {
            "title": "null参照（さんしょう）の問題",
            "content": "# NullReferenceException を防ぐ\\n\\n`null`（ヌル）は「何もない」という特別な値です。nullのオブジェクトのメンバ（プロパティやメソッド）にアクセスしようとすると、「NullReferenceException（ヌルリファレンスエクセプション）」というエラーが発生します。\\n\\n**身近な例え：**\\n「太郎さんの電話番号を教えて」と言われたとき、太郎さんがそもそも存在しなければ答えられませんよね。nullにアクセスするのは、存在しない人に質問するようなものです。\\n\\n**解決策：**\\n`?.`（null条件演算子）を使うと、nullかどうかを安全にチェックできます。"
          },
          {
            "title": "?. の使い方",
            "content": "# null なら null を返す\\n\\n`?.`（クエスチョンドット）は、左側が `null` なら `null` を返し、そうでなければメンバにアクセスします。\\n\\n**コード例（文字列の長さを安全に取得）：**\\n```csharp\\nstring name = null;\\nint? len = name?.Length; // null（エラーにならない！）\\n\\nstring name2 = \"Hello\";\\nint? len2 = name2?.Length; // 5\\n```\\n\\n**解説：**\\n1. `name` が null なので、普通に `.Length` を使うとエラー\\n2. `name?.Length` なら、nullのときはnullを返して終わり\\n3. エラーを起こさず安全に処理できる\\n\\n**ポイント：**\\n結果が null になる可能性があるので、`int?`（null許容型）で受け取ります。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// 文字列を定義（\"Hello\"）\\nstring text = \"こんにちは\";\\n// ?.でnull安全にアクセス\\nint? length = text?.Length;\\n// 画面に出力\\nConsole.WriteLine(length);",
        "holeyCode": "// 文字列を定義（\"Hello\"）\\nstring text = \"___\";\\n// ?.でnull安全にアクセス\\nint? length = text?.___;\\n// 画面に出力\\nConsole.WriteLine(___);",
        "correctLines": [
          "// 文字列を定義（\"Hello\"）",
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
          "others": ["Hello\";", "WriteLine", "Hello", "Length", "length", "こんにちは"]
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

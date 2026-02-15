export const javaData2 = {
  "language": "java",
  "lessonId": "java-2",
  "lessonTitle": "Java II - ステップアップ！",
  "lessonDescription": "Javaの基本をマスターしたら、オブジェクト指向プログラミングを深く学びましょう！クラスの継承、インターフェース、例外処理などを身につけます。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "tutorialSlides": [
    { "title": "継承とは？", "content": "# クラスを拡張する\\n\\n**継承**とは、すでにあるクラス（親クラス）の機能を引き継いで新しいクラス（子クラス）を作る仕組みです。\\n\\n`extends` キーワードを使います。\\n\\n```java\\nclass Animal {\\n    void eat() { System.out.println(\\\"食べる\\\"); }\\n}\\n\\nclass Dog extends Animal {\\n    void bark() { System.out.println(\\\"ワン！\\\"); }\\n}\\n```\\n\\n犬（Dog）は動物（Animal）なので「食べる」こともできます！" },
    { "title": "オーバーライド", "content": "# メソッドを上書きする\\n\\n**オーバーライド**は、親クラスのメソッドを子クラスで書き換えることです。\\n\\n`@Override` アノテーションを使います。\\n\\n```java\\nclass Cat extends Animal {\\n    @Override\\n    void sound() { System.out.println(\\\"ニャー\\\"); }\\n}\\n```\\n\\n動物ごとに違う動きを定義できます！" },
    { "title": "インターフェース", "content": "# 契約を定義する\\n\\n**インターフェース**は、クラスが持つべきメソッドの「約束事」を定義します。\\n\\n`implements` で約束を守ります。\\n\\n```java\\ninterface Drawable {\\n    void draw();\\n}\\n\\nclass Square implements Drawable {\\n    public void draw() {\\n        System.out.println(\\\"四角形\\\");\\n    }\\n}\\n```\\n\\n複数のインターフェースを実装できます！" },
    { "title": "抽象クラス", "content": "# 継承専用のクラス\\n\\n**抽象クラス**は `abstract` キーワードで定義し、直接インスタンス化できません。\\n\\n```java\\nabstract class Shape {\\n    abstract void draw();  // 中身は子クラスで実装\\n}\\n\\nclass Circle extends Shape {\\n    void draw() { System.out.println(\\\"円\\\"); }\\n}\\n```\\n\\n「形」という概念は抽象的で、具体的な形は子クラスで決めます。" }
  ],
  "exercises": [
    {
      "title": "クラスの継承",
      "description": "既存のクラスの機能を引き継いで、新しいクラスを作る方法を学びます",
      "tutorialSlides": [
        {
          "title": "継承とは？",
          "content": "# クラスを拡張する\\n\\n**継承** とは、すでにあるクラス（親クラス）の機能を引き継いで新しいクラス（子クラス）を作る仕組みです。\\n\\n**たとえ話：** 親から子へ「目の色」や「髪の色」が受け継がれるように、プログラムでも親クラスの機能が子クラスに受け継がれます。\\n\\n`extends`（エクステンズ＝拡張する）というキーワードを使います。\\n\\n```java\\nclass Animal {  // 親クラス（動物）\\n    void eat() { System.out.println(\"食べる\"); }\\n}\\n\\nclass Dog extends Animal {  // 子クラス（犬）はAnimalを継承\\n    void bark() { System.out.println(\"ワン！\"); }\\n}\\n```"
        },
        {
          "title": "親クラスの機能を使う",
          "content": "# 継承した機能\\n\\n子クラスは親クラスのメソッドをそのまま使えます。犬（Dog）は動物（Animal）なので、「食べる」ことができますね！\\n\\n**コード例：**\\n```java\\nDog dog = new Dog();  // 犬を作る\\ndog.eat();   // 親のメソッド → 「食べる」\\ndog.bark();  // 自分のメソッド → 「ワン！」\\n```\\n\\n**ポイント：** 子クラスは親の機能＋自分だけの機能を持てます。Dogは「食べる」も「ほえる」もできます！"
        }
      ],
      "correctCode": "// classでVehicleクラスを定義\\nclass Vehicle {\\n    // void moveでmoveメソッドを定義\\n    void move() {\\n        // printlnで'いどう'を出力\\n        System.out.println(\\\"いどう\\\");\\n    // moveメソッドを閉じる\\n    }\\n// Vehicleクラスを閉じる\\n}\\n\\n// extendsでCarクラスをVehicleから継承\\nclass Car extends Vehicle {\\n    // void honkでhonkメソッドを定義\\n    void honk() {\\n        // printlnで'プップー！'を出力\\n        System.out.println(\\\"プップー！\\\");\\n    // honkメソッドを閉じる\\n    }\\n// Carクラスを閉じる\\n}\\n\\n// classでMainクラスを定義\\nclass Main {\\n    // public static void mainでエントリーポイントを定義\\n    public static void main(String[] args) {\\n        // Car型のcにnew Car()を代入\\n        Car c = new Car();\\n        // cのmoveメソッドを呼び出す\\n        c.move();\\n    // mainメソッドを閉じる\\n    }\\n// Mainクラスを閉じる\\n}", "holeyCode": "// classでVehicleクラスを定義\\nclass ___ {\\n    // void moveでmoveメソッドを定義\\n    void ___() {\\n        // printlnで'いどう'を出力\\n        ___.___.___(___)___\\n    // moveメソッドを閉じる\\n    ___\\n// Vehicleクラスを閉じる\\n___\\n___\\n// extendsでCarクラスをVehicleから継承\\nclass ___ extends ___ {\\n    // void honkでhonkメソッドを定義\\n    void ___() {\\n        // printlnで'プップー！'を出力\\n        ___.___.___(___)___\\n    // honkメソッドを閉じる\\n    ___\\n// Carクラスを閉じる\\n___\\n___\\n// classでMainクラスを定義\\nclass ___ {\\n    // public static void mainでエントリーポイントを定義\\n    public static void ___(___[] ___) {\\n        // Car型のcにnew Car()を代入\\n        ___ ___ = new ___()___\\n        // cのmoveメソッドを呼び出す\\n        ___.___()___\\n    // mainメソッドを閉じる\\n    ___\\n// Mainクラスを閉じる\\n___",
      "correctLines": [
          "// classでVehicleクラスを定義",
          "class Vehicle {",
          "    // void moveでmoveメソッドを定義",
          "    void move() {",
          "        // printlnで'いどう'を出力",
          "        System.out.println(\\\"いどう\\\");",
          "    // moveメソッドを閉じる",
          "    }",
          "// Vehicleクラスを閉じる",
          "}",
          "",
          "// extendsでCarクラスをVehicleから継承",
          "class Car extends Vehicle {",
          "    // void honkでhonkメソッドを定義",
          "    void honk() {",
          "        // printlnで'プップー！'を出力",
          "        System.out.println(\\\"プップー！\\\");",
          "    // honkメソッドを閉じる",
          "    }",
          "// Carクラスを閉じる",
          "}",
          "",
          "// classでMainクラスを定義",
          "class Main {",
          "    // public static void mainでエントリーポイントを定義",
          "    public static void main(String[] args) {",
          "        // Car型のcにnew Car()を代入",
          "        Car c = new Car();",
          "        // cのmoveメソッドを呼び出す",
          "        c.move();",
          "    // mainメソッドを閉じる",
          "    }",
          "// Mainクラスを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "\\\"\\\"",
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
          "\\\"\\\"",
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
          ""
        ],
        "candidates": {
          "keywords": [
            "extends",
            "implements",
            "super",
            "this",
            "new",
            "void",
            "class",
            "public",
            "static"
          ],
          "others": ["Vehicle", "move", "System", "out", "println", "\"いどう\"", ";", "}", "Car", "honk", "\"プップー！\"", "Main", "main", "String", "args", "c", "()"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "いどう\\n"
          }
        ]
      },
    {
      "title": "メソッドのオーバーライド",
      "description": "オーバーライドについて学びます",
      "tutorialSlides": [
        {
          "title": "オーバーライドとは？",
          "content": "# メソッドを上書き（うわがき）\\n\\n**オーバーライド** とは、親クラスのメソッドを子クラスで書き換えることです。\\n\\n**たとえ話：** 動物は「音を出す」ことができますが、犬は「ワン！」、猫は「ニャー」と、動物の種類によって音が違いますよね。オーバーライドを使えば、子クラスごとに違う動きを定義できます。\\n\\n```java\\nclass Animal {\\n    void sound() { System.out.println(\"音\"); }\\n}\\n\\nclass Cat extends Animal {\\n    @Override  // ←「上書きするよ」という印\\n    void sound() { System.out.println(\"ニャー\"); }\\n}\\n```"
        },
        {
          "title": "@Override アノテーション",
          "content": "# 明示的に宣言\\n\\n`@Override`（アット・オーバーライド）は「このメソッドは親のメソッドを上書きしますよ」という印です。\\n\\n**アノテーション** とは、プログラムに追加情報を与える「ふせん」のようなものです。\\n\\n**なぜ使うの？**\\n- 間違いを防げます（スペルミスがあるとエラーで教えてくれる）\\n- コードが読みやすくなります\\n\\n```java\\nclass Cat extends Animal {\\n    @Override  // 「これは上書きです」と宣言\\n    void sound() {  // 親と同じメソッド名\\n        System.out.println(\"ニャー\");\\n    }\\n}\\n```"
        }
      ],
      "correctCode": "// classでShapeクラスを定義\\nclass Shape {\\n    // void drawでdrawメソッドを定義\\n    void draw() {\\n        // printlnで'けい'を出力\\n        System.out.println(\\\"けい\\\");\\n    // drawメソッドを閉じる\\n    }\\n// Shapeクラスを閉じる\\n}\\n\\n// extendsでCircleクラスをShapeから継承\\nclass Circle extends Shape {\\n    // @Overrideでメソッドを上書き宣言\\n    @Override\\n    // void drawでdrawメソッドをオーバーライド\\n    void draw() {\\n        // printlnで'まる'を出力\\n        System.out.println(\\\"まる\\\");\\n    // drawメソッドを閉じる\\n    }\\n// Circleクラスを閉じる\\n}\\n\\n// classでMainクラスを定義\\nclass Main {\\n    // public static void mainでエントリーポイントを定義\\n    public static void main(String[] args) {\\n        // Circle型のcにnew Circle()を代入\\n        Circle c = new Circle();\\n        // cのdrawメソッドを呼び出す\\n        c.draw();\\n    // mainメソッドを閉じる\\n    }\\n// Mainクラスを閉じる\\n}", "holeyCode": "// classでShapeクラスを定義\\nclass ___ {\\n    // void drawでdrawメソッドを定義\\n    void ___() {\\n        // printlnで'けい'を出力\\n        ___.___.___(___)___\\n    // drawメソッドを閉じる\\n    ___\\n// Shapeクラスを閉じる\\n___\\n___\\n// extendsでCircleクラスをShapeから継承\\nclass ___ extends ___ {\\n    // @Overrideでメソッドを上書き宣言\\n    @___\\n    // void drawでdrawメソッドをオーバーライド\\n    void ___() {\\n        // printlnで'まる'を出力\\n        ___.___.___(___)___\\n    // drawメソッドを閉じる\\n    ___\\n// Circleクラスを閉じる\\n___\\n___\\n// classでMainクラスを定義\\nclass ___ {\\n    // public static void mainでエントリーポイントを定義\\n    public static void ___(___[] ___) {\\n        // Circle型のcにnew Circle()を代入\\n        ___ ___ = new ___()___\\n        // cのdrawメソッドを呼び出す\\n        ___.___()___\\n    // mainメソッドを閉じる\\n    ___\\n// Mainクラスを閉じる\\n___",
      "correctLines": [
          "// classでShapeクラスを定義",
          "class Shape {",
          "    // void drawでdrawメソッドを定義",
          "    void draw() {",
          "        // printlnで'けい'を出力",
          "        System.out.println(\\\"けい\\\");",
          "    // drawメソッドを閉じる",
          "    }",
          "// Shapeクラスを閉じる",
          "}",
          "",
          "// extendsでCircleクラスをShapeから継承",
          "class Circle extends Shape {",
          "    // @Overrideでメソッドを上書き宣言",
          "    @Override",
          "    // void drawでdrawメソッドをオーバーライド",
          "    void draw() {",
          "        // printlnで'まる'を出力",
          "        System.out.println(\\\"まる\\\");",
          "    // drawメソッドを閉じる",
          "    }",
          "// Circleクラスを閉じる",
          "}",
          "",
          "// classでMainクラスを定義",
          "class Main {",
          "    // public static void mainでエントリーポイントを定義",
          "    public static void main(String[] args) {",
          "        // Circle型のcにnew Circle()を代入",
          "        Circle c = new Circle();",
          "        // cのdrawメソッドを呼び出す",
          "        c.draw();",
          "    // mainメソッドを閉じる",
          "    }",
          "// Mainクラスを閉じる",
          "}"
        ],
      "lineHints": [
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
            "extends",
            "class",
            "void",
            "new",
            "public",
            "static"
          ],
          "others": ["Shape", "draw", "System", "out", "println", "\"けい\"", ";", "}", "Circle", "Override", "\"まる\"", "Main", "main", "String", "args", "c", "()"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "まる\\n"
          }
        ]
      },
    {
      "title": "インターフェース",
      "description": "インターフェースについて学びます",
      "tutorialSlides": [
        {
          "title": "インターフェースとは？",
          "content": "# 契約を定義する\\n\\n**インターフェース** とは、クラスが持つべきメソッドの「約束事」を定義したものです。\\n\\n**たとえ話：** 「運転免許を持っている人は車を運転できる」という約束のようなものです。免許を持っている（implements）なら、運転できる（メソッドを持っている）ことが保証されます。\\n\\n`implements`（インプリメンツ＝実装する）で約束を守ります。\\n\\n```java\\ninterface Drawable {  // 「描ける」という約束\\n    void draw();  // このメソッドを持つこと！\\n}\\n\\nclass Square implements Drawable {  // 約束を守ります！\\n    public void draw() {  // 約束通りのメソッドを実装\\n        System.out.println(\"四角形\");\\n    }\\n}\\n```"
        },
        {
          "title": "複数のインターフェース",
          "content": "# 複数実装できる\\n\\nクラスは複数のインターフェースを実装できます。\\n\\n**たとえ話：** 一人の人が「運転免許」と「調理師免許」の両方を持てるように、クラスも複数の約束を守ることができます。\\n\\n```java\\ninterface A { void a(); }  // 約束A\\ninterface B { void b(); }  // 約束B\\n\\nclass C implements A, B {  // 両方の約束を守る\\n    public void a() { }  // 約束Aを実装\\n    public void b() { }  // 約束Bを実装\\n}\\n```\\n\\n**ポイント：** 継承（extends）は1つだけですが、インターフェース（implements）は何個でもOKです！"
        }
      ],
      "correctCode": "// interfaceでGreetingインターフェースを定義\\ninterface Greeting {\\n    // void sayHelloでメソッドを宣言\\n    void sayHello();\\n// Greetingインターフェースを閉じる\\n}\\n\\n// implementsでPersonクラスにGreetingを実装\\nclass Person implements Greeting {\\n    // public void sayHelloでsayHelloメソッドを実装\\n    public void sayHello() {\\n        // printlnで'こんにちは！'を出力\\n        System.out.println(\\\"こんにちは！\\\");\\n    // sayHelloメソッドを閉じる\\n    }\\n// Personクラスを閉じる\\n}\\n\\n// classでMainクラスを定義\\nclass Main {\\n    // public static void mainでエントリーポイントを定義\\n    public static void main(String[] args) {\\n        // Person型のpにnew Person()を代入\\n        Person p = new Person();\\n        // pのsayHelloメソッドを呼び出す\\n        p.sayHello();\\n    // mainメソッドを閉じる\\n    }\\n// Mainクラスを閉じる\\n}", "holeyCode": "// interfaceでGreetingインターフェースを定義\\ninterface ___ {\\n    // void sayHelloでメソッドを宣言\\n    void ___()___\\n// Greetingインターフェースを閉じる\\n___\\n___\\n// implementsでPersonクラスにGreetingを実装\\nclass ___ implements ___ {\\n    // public void sayHelloでsayHelloメソッドを実装\\n    public void ___() {\\n        // printlnで'こんにちは！'を出力\\n        ___.___.___(___)___\\n    // sayHelloメソッドを閉じる\\n    ___\\n// Personクラスを閉じる\\n___\\n___\\n// classでMainクラスを定義\\nclass ___ {\\n    // public static void mainでエントリーポイントを定義\\n    public static void ___(___[] ___) {\\n        // Person型のpにnew Person()を代入\\n        ___ ___ = new ___()___\\n        // pのsayHelloメソッドを呼び出す\\n        ___.___()___\\n    // mainメソッドを閉じる\\n    ___\\n// Mainクラスを閉じる\\n___",
      "correctLines": [
          "// interfaceでGreetingインターフェースを定義",
          "interface Greeting {",
          "    // void sayHelloでメソッドを宣言",
          "    void sayHello();",
          "// Greetingインターフェースを閉じる",
          "}",
          "",
          "// implementsでPersonクラスにGreetingを実装",
          "class Person implements Greeting {",
          "    // public void sayHelloでsayHelloメソッドを実装",
          "    public void sayHello() {",
          "        // printlnで'こんにちは！'を出力",
          "        System.out.println(\\\"こんにちは！\\\");",
          "    // sayHelloメソッドを閉じる",
          "    }",
          "// Personクラスを閉じる",
          "}",
          "",
          "// classでMainクラスを定義",
          "class Main {",
          "    // public static void mainでエントリーポイントを定義",
          "    public static void main(String[] args) {",
          "        // Person型のpにnew Person()を代入",
          "        Person p = new Person();",
          "        // pのsayHelloメソッドを呼び出す",
          "        p.sayHello();",
          "    // mainメソッドを閉じる",
          "    }",
          "// Mainクラスを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
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
            "implements",
            "extends",
            "interface",
            "abstract",
            "new",
            "void",
            "class",
            "public",
            "static"
          ],
          "others": ["Greeting", ";", "}", "Person", "sayHello", "System", "out", "println", "\"こんにちは！\"", "Main", "main", "String", "args", "p", "()"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは！\\n"
          }
        ]
      },
    {
      "title": "抽象クラス",
      "description": "抽象クラスの仕組みを理解します",
      "tutorialSlides": [
        {
          "title": "抽象クラスとは？",
          "content": "# 未完成の設計図\\n\\n**抽象クラス** は、`abstract`（アブストラクト＝抽象的な）をつけた「未完成のクラス」です。\\n\\n**たとえ話：** 「動物」は存在しますが、実際には「犬」「猫」「鳥」など具体的な動物がいますよね。「動物」自体を作ることはできないけど、「動物としての共通点」は定義できます。それが抽象クラスです。\\n\\n- 直接 new で作れない（実体がない）\\n- 子クラスで完成させる\\n\\n```java\\nabstract class Animal {  // 抽象クラス\\n    abstract void sound();  // 「音を出す」は未定義\\n    void sleep() { System.out.println(\"Zzz\"); }  // 「寝る」は定義済み\\n}\\n```"
        },
        {
          "title": "抽象メソッド",
          "content": "# 子クラスで実装必須\\n\\n**抽象メソッド** は中身のないメソッドです。子クラスで**必ず**実装しなければなりません。\\n\\n**たとえ話：** 「動物は音を出す」というルールだけ決めておいて、「どんな音か」は犬や猫に任せる、という感じです。\\n\\n```java\\nclass Dog extends Animal {\\n    void sound() {  // 必ず実装する！\\n        System.out.println(\"ワン！\");\\n    }\\n}\\n```\\n\\n**インターフェースとの違い：**\\n- インターフェース：全部が約束（実装なし）\\n- 抽象クラス：一部は完成、一部は約束"
        }
      ],
      "correctCode": "// abstract classでAnimal抽象クラスを定義\\nabstract class Animal {\\n    // abstract voidでspeak抽象メソッドを宣言\\n    abstract void speak();\\n// Animalクラスを閉じる\\n}\\n\\n// extendsでDogクラスをAnimalから継承\\nclass Dog extends Animal {\\n    // void speakでspeakメソッドを実装\\n    void speak() {\\n        // printlnで'ワン！'を出力\\n        System.out.println(\\\"ワン！\\\");\\n    // speakメソッドを閉じる\\n    }\\n// Dogクラスを閉じる\\n}\\n\\n// classでMainクラスを定義\\nclass Main {\\n    // public static void mainでエントリーポイントを定義\\n    public static void main(String[] args) {\\n        // Dog型のdにnew Dog()を代入\\n        Dog d = new Dog();\\n        // dのspeakメソッドを呼び出す\\n        d.speak();\\n    // mainメソッドを閉じる\\n    }\\n// Mainクラスを閉じる\\n}", "holeyCode": "// abstract classでAnimal抽象クラスを定義\\nabstract class ___ {\\n    // abstract voidでspeak抽象メソッドを宣言\\n    abstract void ___()___\\n// Animalクラスを閉じる\\n___\\n___\\n// extendsでDogクラスをAnimalから継承\\nclass ___ extends ___ {\\n    // void speakでspeakメソッドを実装\\n    void ___() {\\n        // printlnで'ワン！'を出力\\n        ___.___.___(___)___\\n    // speakメソッドを閉じる\\n    ___\\n// Dogクラスを閉じる\\n___\\n___\\n// classでMainクラスを定義\\nclass ___ {\\n    // public static void mainでエントリーポイントを定義\\n    public static void ___(___[] ___) {\\n        // Dog型のdにnew Dog()を代入\\n        ___ ___ = new ___()___\\n        // dのspeakメソッドを呼び出す\\n        ___.___()___\\n    // mainメソッドを閉じる\\n    ___\\n// Mainクラスを閉じる\\n___",
      "correctLines": [
          "// abstract classでAnimal抽象クラスを定義",
          "abstract class Animal {",
          "    // abstract voidでspeak抽象メソッドを宣言",
          "    abstract void speak();",
          "// Animalクラスを閉じる",
          "}",
          "",
          "// extendsでDogクラスをAnimalから継承",
          "class Dog extends Animal {",
          "    // void speakでspeakメソッドを実装",
          "    void speak() {",
          "        // printlnで'ワン！'を出力",
          "        System.out.println(\\\"ワン！\\\");",
          "    // speakメソッドを閉じる",
          "    }",
          "// Dogクラスを閉じる",
          "}",
          "",
          "// classでMainクラスを定義",
          "class Main {",
          "    // public static void mainでエントリーポイントを定義",
          "    public static void main(String[] args) {",
          "        // Dog型のdにnew Dog()を代入",
          "        Dog d = new Dog();",
          "        // dのspeakメソッドを呼び出す",
          "        d.speak();",
          "    // mainメソッドを閉じる",
          "    }",
          "// Mainクラスを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
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
            "abstract",
            "interface",
            "virtual",
            "static",
            "new",
            "void",
            "class",
            "extends",
            "public"
          ],
          "others": ["Animal", ";", "}", "Dog", "speak", "System", "out", "println", "\"ワン！\"", "Main", "main", "String", "args", "d", "()"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ワン！\\n"
          }
        ]
      },
    {
      "title": "例外処理（try-catch）",
      "description": "プログラムのエラーを適切に処理して、安全に動作させる方法を学びます",
      "tutorialSlides": [
        {
          "title": "例外とは？",
          "content": "# プログラムの問題\\n\\n**例外** とは、プログラム実行中に起きる「予期しない問題」のことです。\\n\\n**たとえ話：** 料理中に「砂糖がない！」と気づくようなものです。レシピ通りに進められなくなりますよね。\\n\\n```java\\nint[] arr = {1, 2, 3};  // 3つしかデータがない\\nSystem.out.println(arr[10]);  // 10番目？そんなのない！→例外！\\n```\\n\\n例外が起きるとプログラムが止まってしまいます。でも、対処法があります！"
        },
        {
          "title": "try-catchで対処",
          "content": "# エラーをキャッチ\\n\\n**try-catch**（トライ・キャッチ）を使うと、例外をキャッチ（捕まえる）して対処できます。\\n\\n**たとえ話：** サーカスの網のように、落ちてきた（例外が起きた）ときに受け止めてくれます。\\n\\n```java\\ntry {  // 「試してみる」ブロック\\n    int result = 10 / 0;  // 0で割ると例外！\\n} catch (Exception e) {  // 「捕まえる」ブロック\\n    System.out.println(\"エラー発生\");  // 対処する\\n}\\n```\\n\\n**ポイント：** try の中で問題が起きたら、catch の中が実行されます"
        }
      ],
      "correctCode": "// classでMainクラスを定義\\nclass Main {\\n    // public static void mainでエントリーポイントを定義\\n    public static void main(String[] args) {\\n        // tryで例外発生時の処理を開始\\n        try {\\n            // int型のxにparseIntで'あいう'を整数変換（失敗する）\\n            int x = Integer.parseInt(\\\"あいう\\\");\\n        // catchでException型のeを受け取る\\n        } catch (Exception e) {\\n            // printlnで'エラー'を出力\\n            System.out.println(\\\"エラー\\\");\\n        // try-catchブロックを閉じる\\n        }\\n    // mainメソッドを閉じる\\n    }\\n// Mainクラスを閉じる\\n}", "holeyCode": "// classでMainクラスを定義\\nclass ___ {\\n    // public static void mainでエントリーポイントを定義\\n    public static void ___(___[] ___) {\\n        // tryで例外発生時の処理を開始\\n        try ___\\n            // int型のxにparseIntで'あいう'を整数変換（失敗する）\\n            ___ ___ = ___.___(___)___\\n        // catchでException型のeを受け取る\\n        ___ catch (___ ___) {\\n            // printlnで'エラー'を出力\\n            ___.___.___(___)___\\n        // try-catchブロックを閉じる\\n        ___\\n    // mainメソッドを閉じる\\n    ___\\n// Mainクラスを閉じる\\n___",
      "correctLines": [
          "// classでMainクラスを定義",
          "class Main {",
          "    // public static void mainでエントリーポイントを定義",
          "    public static void main(String[] args) {",
          "        // tryで例外発生時の処理を開始",
          "        try {",
          "            // int型のxにparseIntで'あいう'を整数変換（失敗する）",
          "            int x = Integer.parseInt(\\\"あいう\\\");",
          "        // catchでException型のeを受け取る",
          "        } catch (Exception e) {",
          "            // printlnで'エラー'を出力",
          "            System.out.println(\\\"エラー\\\");",
          "        // try-catchブロックを閉じる",
          "        }",
          "    // mainメソッドを閉じる",
          "    }",
          "// Mainクラスを閉じる",
          "}"
        ],
      "lineHints": [
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
            "try",
            "catch",
            "throw",
            "finally",
            "int",
            "public",
            "static",
            "void",
            "class"
          ],
          "others": ["Main", "main", "String", "args", "{", "x", "Integer", "parseInt", "\"あいう\"", ";", "}", "Exception", "e", "System", "out", "println", "\"エラー\"", "blic", "int x = Integer.parseInt(\"あいう\");", "System.out.println(\"エラー\");"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "エラー\\n"
          }
        ]
      },
    {
      "title": "finally ブロック",
      "description": "finally ブロックの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "finally（ファイナリー）とは？",
          "content": "# 必ず実行される\\n\\n`finally`（ファイナリー＝最後に）ブロックは、例外が起きても起きなくても**必ず**実行されます。\\n\\n**たとえ話：** 料理が成功しても失敗しても、最後は必ずキッチンを片付けますよね。それが finally です。\\n\\n```java\\ntry {\\n    // 処理（うまくいくかも、失敗するかも）\\n} catch (Exception e) {\\n    // エラー処理（失敗したときだけ）\\n} finally {\\n    // 必ず実行（成功でも失敗でも）\\n}\\n```"
        },
        {
          "title": "リソースの解放に",
          "content": "# 後片付け処理\\n\\nファイルを閉じる、接続を切断するなどの後片付けに使います。\\n\\n**たとえ話：** 本を読み終わったら本棚に戻す、電気を使ったら消す、というように「終わったら必ずやること」を書きます。\\n\\n```java\\ntry {\\n    // ファイルを開いて操作する\\n} finally {\\n    // ファイルを閉じる（必ず実行）\\n    System.out.println(\"Clean up\");\\n}\\n```\\n\\n**ポイント：** finally があれば、エラーが起きても後片付けを忘れません！"
        }
      ],
      "correctCode": "// classでMainクラスを定義\\nclass Main {\\n    // public static void mainでエントリーポイントを定義\\n    public static void main(String[] args) {\\n        // tryで処理を開始\\n        try {\\n            // printlnで'しっこう'を出力\\n            System.out.println(\\\"しっこう\\\");\\n        // catchでException型のeを受け取る\\n        } catch (Exception e) {\\n            // printlnで'エラー'を出力\\n            System.out.println(\\\"エラー\\\");\\n        // finallyで必ず実行する処理\\n        } finally {\\n            // printlnで'おわり'を出力\\n            System.out.println(\\\"おわり\\\");\\n        // try-catch-finallyブロックを閉じる\\n        }\\n    // mainメソッドを閉じる\\n    }\\n// Mainクラスを閉じる\\n}", "holeyCode": "// classでMainクラスを定義\\nclass ___ {\\n    // public static void mainでエントリーポイントを定義\\n    public static void ___(___[] ___) {\\n        // tryで処理を開始\\n        try ___\\n            // printlnで'しっこう'を出力\\n            ___.___.___(___)___\\n        // catchでException型のeを受け取る\\n        ___ catch (___ ___) {\\n            // printlnで'エラー'を出力\\n            ___.___.___(___)___\\n        // finallyで必ず実行する処理\\n        ___ finally ___\\n            // printlnで'おわり'を出力\\n            ___.___.___(___)___\\n        // try-catch-finallyブロックを閉じる\\n        ___\\n    // mainメソッドを閉じる\\n    ___\\n// Mainクラスを閉じる\\n___",
      "correctLines": [
          "// classでMainクラスを定義",
          "class Main {",
          "    // public static void mainでエントリーポイントを定義",
          "    public static void main(String[] args) {",
          "        // tryで処理を開始",
          "        try {",
          "            // printlnで'しっこう'を出力",
          "            System.out.println(\\\"しっこう\\\");",
          "        // catchでException型のeを受け取る",
          "        } catch (Exception e) {",
          "            // printlnで'エラー'を出力",
          "            System.out.println(\\\"エラー\\\");",
          "        // finallyで必ず実行する処理",
          "        } finally {",
          "            // printlnで'おわり'を出力",
          "            System.out.println(\\\"おわり\\\");",
          "        // try-catch-finallyブロックを閉じる",
          "        }",
          "    // mainメソッドを閉じる",
          "    }",
          "// Mainクラスを閉じる",
          "}"
        ],
      "lineHints": [
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
            "finally",
            "final",
            "finish",
            "end",
            "try",
            "catch",
            "public",
            "static",
            "void",
            "class"
          ],
          "others": ["Main", "main", "String", "args", "{", "}", "System", "out", "println", "\"しっこう\"", ";", "Exception", "e", "\"エラー\"", "\"おわり\""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "しっこう\\nおわり\\n"
          }
        ]
      },
    {
      "title": "ArrayList",
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "ArrayList（アレイリスト）とは？",
          "content": "# 可変長の配列\\n\\n**ArrayList** は、サイズを自由に変えられるリストです。\\n\\n**たとえ話：** 普通の配列は「固定サイズの本棚」で、本の数が決まっています。でもArrayListは「伸び縮みする本棚」で、本を増やしたり減らしたりできます！\\n\\n```java\\nimport java.util.ArrayList;  // 道具を準備\\n\\nArrayList<String> list = new ArrayList<>();  // リストを作る\\nlist.add(\"Apple\");   // リンゴを追加\\nlist.add(\"Banana\");  // バナナを追加\\n// 好きなだけ追加できる！\\n```"
        },
        {
          "title": "基本操作",
          "content": "# 追加・取得・削除\\n\\nArrayListでよく使うメソッドを覚えましょう！\\n\\n```java\\nArrayList<Integer> nums = new ArrayList<>();\\nnums.add(10);       // 追加 → [10]\\nnums.add(20);       // 追加 → [10, 20]\\nnums.get(0);        // 取得 → 10（0番目を取り出す）\\nnums.remove(0);     // 削除 → [20]（0番目を消す）\\nnums.size();        // サイズ → 1（今何個あるか）\\n```\\n\\n**覚え方：**\\n- `add`（アド）= 追加する\\n- `get`（ゲット）= 取得する\\n- `remove`（リムーブ）= 削除する\\n- `size`（サイズ）= 大きさ"
        }
      ],
      "correctCode": "// importでjava.util.ArrayListを読み込む\\nimport java.util.ArrayList;\\n\\n// classでMainクラスを定義\\nclass Main {\\n    // public static void mainでエントリーポイントを定義\\n    public static void main(String[] args) {\\n        // ArrayList<String>型のitemsをnewで作成\\n        ArrayList<String> items = new ArrayList<>();\\n        // addで'あ'を追加\\n        items.add(\\\"あ\\\");\\n        // addで'い'を追加\\n        items.add(\\\"い\\\");\\n        // printlnでgetを使い最初の要素（あ）を出力\\n        System.out.println(items.get(0));\\n    // mainメソッドを閉じる\\n    }\\n// Mainクラスを閉じる\\n}", "holeyCode": "// importでjava.util.ArrayListを読み込む\\nimport ___.___.___\\n___\\n// classでMainクラスを定義\\nclass ___ {\\n    // public static void mainでエントリーポイントを定義\\n    public static void ___(___[] ___) {\\n        // ArrayList<String>型のitemsをnewで作成\\n        ___<___> ___ = new ___<>()___\\n        // addで'あ'を追加\\n        ___.___(___)___\\n        // addで'い'を追加\\n        ___.___(___)___\\n        // printlnでgetを使い最初の要素（あ）を出力\\n        ___.___.___(___.___(___)___\\n    // mainメソッドを閉じる\\n    ___\\n// Mainクラスを閉じる\\n___",
      "correctLines": [
          "// importでjava.util.ArrayListを読み込む",
          "import java.util.ArrayList;",
          "",
          "// classでMainクラスを定義",
          "class Main {",
          "    // public static void mainでエントリーポイントを定義",
          "    public static void main(String[] args) {",
          "        // ArrayList<String>型のitemsをnewで作成",
          "        ArrayList<String> items = new ArrayList<>();",
          "        // addで'あ'を追加",
          "        items.add(\\\"あ\\\");",
          "        // addで'い'を追加",
          "        items.add(\\\"い\\\");",
          "        // printlnでgetを使い最初の要素（あ）を出力",
          "        System.out.println(items.get(0));",
          "    // mainメソッドを閉じる",
          "    }",
          "// Mainクラスを閉じる",
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
          ""
        ],
        "candidates": {
          "keywords": [
            "import",
            "new",
            "class",
            "public",
            "static",
            "void"
          ],
          "others": ["java", "util", "ArrayList;", "Main", "main", "String", "args", "ArrayList", "items", ";", "add", "\"あ\"", "\"い\"", "System", "out", "println", "get", "0", "))", "}", ");"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "あ\\n"
          }
        ]
      },
    {
      "title": "拡張for文（for-each）",
      "description": "同じ処理を何度も実行する「繰り返し」を学びます",
      "tutorialSlides": [
        {
          "title": "拡張for文（かくちょうフォーぶん）とは？",
          "content": "# 簡単な繰り返し\\n\\n**拡張for文** を使うと、配列やリストの全部の要素を簡単に処理できます。\\n\\n**たとえ話：** 「このカゴの中の果物を**全部**洗ってください」というように、「全部を順番に処理する」ときに使います。\\n\\n```java\\nint[] nums = {1, 2, 3};\\nfor (int n : nums) {  // 「numsの中の各nについて」\\n    System.out.println(n);  // 1, 2, 3 が順番に表示される\\n}\\n```\\n\\n**読み方：** `:`（コロン）は「〜の中から」と読みましょう"
        },
        {
          "title": "ArrayListでも使える",
          "content": "# コレクションを処理\\n\\n拡張for文は ArrayList（アレイリスト）でも同じように使えます！\\n\\n```java\\nArrayList<String> items = new ArrayList<>();\\nitems.add(\"A\");\\nitems.add(\"B\");\\n\\nfor (String item : items) {  // itemsの中の各itemについて\\n    System.out.println(item);  // A, B が順番に表示\\n}\\n```\\n\\n**ポイント：** 配列でもArrayListでも、書き方は同じです。便利ですね！"
        }
      ],
      "correctCode": "// classでMainクラスを定義\\nclass Main {\\n    // public static void mainでエントリーポイントを定義\\n    public static void main(String[] args) {\\n        // String[]型のcolorsに色配列（あか、あお、みどり）を代入\\n        String[] colors = {\\\"あか\\\", \\\"あお\\\", \\\"みどり\\\"};\\n        // 拡張forでcolorsから各cを取り出す\\n        for (String c : colors) {\\n            // printlnでcを出力\\n            System.out.println(c);\\n        // forブロックを閉じる\\n        }\\n    // mainメソッドを閉じる\\n    }\\n// Mainクラスを閉じる\\n}", "holeyCode": "// classでMainクラスを定義\\nclass ___ {\\n    // public static void mainでエントリーポイントを定義\\n    public static void ___(___[] ___) {\\n        // String[]型のcolorsに色配列（あか、あお、みどり）を代入\\n        ___[] ___ = {___, ___, ___}___\\n        // 拡張forでcolorsから各cを取り出す\\n        for (___ ___ : ___) {\\n            // printlnでcを出力\\n            ___.___.___(___)___\\n        // forブロックを閉じる\\n        ___\\n    // mainメソッドを閉じる\\n    ___\\n// Mainクラスを閉じる\\n___",
      "correctLines": [
          "// classでMainクラスを定義",
          "class Main {",
          "    // public static void mainでエントリーポイントを定義",
          "    public static void main(String[] args) {",
          "        // String[]型のcolorsに色配列（あか、あお、みどり）を代入",
          "        String[] colors = {\\\"あか\\\", \\\"あお\\\", \\\"みどり\\\"};",
          "        // 拡張forでcolorsから各cを取り出す",
          "        for (String c : colors) {",
          "            // printlnでcを出力",
          "            System.out.println(c);",
          "        // forブロックを閉じる",
          "        }",
          "    // mainメソッドを閉じる",
          "    }",
          "// Mainクラスを閉じる",
          "}"
        ],
      "lineHints": [
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
            "for",
            "class",
            "public",
            "static",
            "void"
          ],
          "others": ["Main", "main", "String", "args", "colors", "\"あか\"", "\"あお\"", "\"みどり\"", ";", "c", "System", "out", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "あか\\nあお\\nみどり\\n"
          }
        ]
      },
    {
      "title": "staticメソッド",
      "description": "staticメソッドの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "static（スタティック）とは？",
          "content": "# クラスに属するメソッド\\n\\n**static**（スタティック＝静的な）メソッドは、インスタンス（実体）を作らなくても呼び出せるメソッドです。\\n\\n**たとえ話：** 普通のメソッドは「犬を飼ってから、その犬にお座りさせる」イメージ。staticメソッドは「犬を飼わなくても使える共通の技」のようなものです。\\n\\n```java\\nclass Math {\\n    static int add(int a, int b) {  // staticメソッド\\n        return a + b;\\n    }\\n}\\n\\nMath.add(3, 5);  // newしなくても呼べる！→ 8\\n```"
        },
        {
          "title": "staticの特徴",
          "content": "# ユーティリティに便利\\n\\n**ユーティリティ**（便利ツール）をまとめるのに使います。みんなで共有する道具箱のようなものです。\\n\\n```java\\nclass Utils {\\n    static String upper(String s) {  // 大文字に変換\\n        return s.toUpperCase();\\n    }\\n}\\n\\nUtils.upper(\"hello\");  // \"HELLO\"\\n```\\n\\n**いつ使う？**\\n- 計算だけするメソッド（足し算、引き算など）\\n- 文字列を変換するメソッド\\n- 共通で使う便利機能"
        }
      ],
      "correctCode": "// classでCalculatorクラスを定義\\nclass Calculator {\\n    // static int multiplyでstaticメソッドを定義（引数int a, int b）\\n    static int multiply(int a, int b) {\\n        // returnでaとbの積を返す\\n        return a * b;\\n    // multiplyメソッドを閉じる\\n    }\\n// Calculatorクラスを閉じる\\n}\\n\\n// classでMainクラスを定義\\nclass Main {\\n    // public static void mainでエントリーポイントを定義\\n    public static void main(String[] args) {\\n        // int型のresultにmultiply（引数4と5）の結果を代入\\n        int result = Calculator.multiply(4, 5);\\n        // printlnでresult（20）を出力\\n        System.out.println(result);\\n    // mainメソッドを閉じる\\n    }\\n// Mainクラスを閉じる\\n}", "holeyCode": "// classでCalculatorクラスを定義\\nclass ___ {\\n    // static int multiplyでstaticメソッドを定義（引数int a, int b）\\n    static ___ ___(int ___, int ___) {\\n        // returnでaとbの積を返す\\n        return ___ * ___\\n    // multiplyメソッドを閉じる\\n    ___\\n// Calculatorクラスを閉じる\\n___\\n___\\n// classでMainクラスを定義\\nclass ___ {\\n    // public static void mainでエントリーポイントを定義\\n    public static void ___(___[] ___) {\\n        // int型のresultにmultiply（引数4と5）の結果を代入\\n        ___ ___ = ___.___(___, ___)___\\n        // printlnでresult（20）を出力\\n        ___.___.___(___)___\\n    // mainメソッドを閉じる\\n    ___\\n// Mainクラスを閉じる\\n___",
      "correctLines": [
          "// classでCalculatorクラスを定義",
          "class Calculator {",
          "    // static int multiplyでstaticメソッドを定義（引数int a, int b）",
          "    static int multiply(int a, int b) {",
          "        // returnでaとbの積を返す",
          "        return a * b;",
          "    // multiplyメソッドを閉じる",
          "    }",
          "// Calculatorクラスを閉じる",
          "}",
          "",
          "// classでMainクラスを定義",
          "class Main {",
          "    // public static void mainでエントリーポイントを定義",
          "    public static void main(String[] args) {",
          "        // int型のresultにmultiply（引数4と5）の結果を代入",
          "        int result = Calculator.multiply(4, 5);",
          "        // printlnでresult（20）を出力",
          "        System.out.println(result);",
          "    // mainメソッドを閉じる",
          "    }",
          "// Mainクラスを閉じる",
          "}"
        ],
      "lineHints": [
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
            "static",
            "public",
            "private",
            "final",
            "return",
            "class",
            "void",
            "int"
          ],
          "others": ["Calculator", "multiply", "a", "b", ";", "}", "Main", "main", "String", "args", "result", "4", "5", "System", "out", "println", "b;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "20\\n"
          }
        ]
      },
    {
      "title": "アクセス修飾子",
      "description": "アクセス修飾子について学びます",
      "tutorialSlides": [
        {
          "title": "アクセス修飾子とは？",
          "content": "# 公開範囲を制御\\n\\n**アクセス修飾子** は、「誰がこのデータを見れるか」を決めるキーワードです。\\n\\n**たとえ話：** 日記帳には「自分だけの秘密」があって、友達には見せませんよね。プログラムでも「見せていい情報」と「秘密にしたい情報」を分けられます。\\n\\n- `public`（パブリック）: 誰でもアクセスOK\\n- `private`（プライベート）: 自分のクラスだけ\\n- `protected`（プロテクテッド）: 子クラスもOK\\n\\n```java\\nclass User {\\n    public String name;   // 誰でも見れる\\n    private int id;       // 秘密！\\n}\\n```"
        },
        {
          "title": "カプセル化",
          "content": "# データを守る\\n\\n**カプセル化** とは、大事なデータを `private` で隠して、メソッド経由でアクセスする方法です。\\n\\n**たとえ話：** 銀行口座の残高は直接変更できません。必ず「入金」「出金」という手続き（メソッド）を通しますよね。それがカプセル化です。\\n\\n```java\\nclass User {\\n    private String name;  // 直接触れないようにする\\n    \\n    public String getName() {  // 取得用のメソッド\\n        return name;\\n    }\\n}\\n```\\n\\n**メリット：** データを勝手に変更されるのを防げます"
        }
      ],
      "correctCode": "// classでItemクラスを定義\\nclass Item {\\n    // private int priceでpriceフィールドを隠蔽\\n    private int price;\\n\\n    // public Itemでコンストラクタを定義（引数int p）\\n    public Item(int p) {\\n        // priceにpを代入\\n        price = p;\\n    // コンストラクタを閉じる\\n    }\\n\\n    // public int getPriceでゲッターを定義\\n    public int getPrice() {\\n        // returnでpriceを返す\\n        return price;\\n    // getPriceメソッドを閉じる\\n    }\\n// Itemクラスを閉じる\\n}\\n\\n// classでMainクラスを定義\\nclass Main {\\n    // public static void mainでエントリーポイントを定義\\n    public static void main(String[] args) {\\n        // Item型のitemにnew Item(100)を代入\\n        Item item = new Item(100);\\n        // printlnでgetPriceの結果（100）を出力\\n        System.out.println(item.getPrice());\\n    // mainメソッドを閉じる\\n    }\\n// Mainクラスを閉じる\\n}", "holeyCode": "// classでItemクラスを定義\\nclass ___ {\\n    // private int priceでpriceフィールドを隠蔽\\n    private ___ ___\\n___\\n    // public Itemでコンストラクタを定義（引数int p）\\n    public ___(int ___) {\\n        // priceにpを代入\\n        ___ = ___\\n    // コンストラクタを閉じる\\n    ___\\n___\\n    // public int getPriceでゲッターを定義\\n    public ___ ___() {\\n        // returnでpriceを返す\\n        return ___\\n    // getPriceメソッドを閉じる\\n    ___\\n// Itemクラスを閉じる\\n___\\n___\\n// classでMainクラスを定義\\nclass ___ {\\n    // public static void mainでエントリーポイントを定義\\n    public static void ___(___[] ___) {\\n        // Item型のitemにnew Item(100)を代入\\n        ___ ___ = new ___(___)___\\n        // printlnでgetPriceの結果（100）を出力\\n        ___.___.___(___.___())___\\n    // mainメソッドを閉じる\\n    ___\\n// Mainクラスを閉じる\\n___",
      "correctLines": [
          "// classでItemクラスを定義",
          "class Item {",
          "    // private int priceでpriceフィールドを隠蔽",
          "    private int price;",
          "",
          "    // public Itemでコンストラクタを定義（引数int p）",
          "    public Item(int p) {",
          "        // priceにpを代入",
          "        price = p;",
          "    // コンストラクタを閉じる",
          "    }",
          "",
          "    // public int getPriceでゲッターを定義",
          "    public int getPrice() {",
          "        // returnでpriceを返す",
          "        return price;",
          "    // getPriceメソッドを閉じる",
          "    }",
          "// Itemクラスを閉じる",
          "}",
          "",
          "// classでMainクラスを定義",
          "class Main {",
          "    // public static void mainでエントリーポイントを定義",
          "    public static void main(String[] args) {",
          "        // Item型のitemにnew Item(100)を代入",
          "        Item item = new Item(100);",
          "        // printlnでgetPriceの結果（100）を出力",
          "        System.out.println(item.getPrice());",
          "    // mainメソッドを閉じる",
          "    }",
          "// Mainクラスを閉じる",
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
            "private",
            "public",
            "protected",
            "static",
            "return",
            "new",
            "class",
            "void",
            "int"
          ],
          "others": ["Item", "price", ";", "p", "}", "getPrice", "Main", "main", "String", "args", "item", "100", "System", "out", "println", "price;", "p;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "100\\n"
          }
        ]
      }
  ]
};

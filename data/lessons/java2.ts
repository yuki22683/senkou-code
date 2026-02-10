export const javaData2 = {
  "language": "java",
  "lessonId": "java-2",
  "lessonTitle": "Java II - ステップアップ！",
  "lessonDescription": "Javaの基本をマスターしたら、オブジェクト指向プログラミングを深く学びましょう！クラスの継承、インターフェース、例外処理などを身につけます。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "tutorialSlides": [
    { "title": "継承（けいしょう）とは？", "content": "# クラスを拡張する\\n\\n**継承**とは、すでにあるクラス（親クラス）の機能を引き継いで新しいクラス（子クラス）を作る仕組みです。\\n\\n`extends` キーワードを使います。\\n\\n```java\\nclass Animal {\\n    void eat() { System.out.println(\\\"食べる\\\"); }\\n}\\n\\nclass Dog extends Animal {\\n    void bark() { System.out.println(\\\"ワン！\\\"); }\\n}\\n```\\n\\n犬（Dog）は動物（Animal）なので「食べる」こともできます！" },
    { "title": "オーバーライド", "content": "# メソッドを上書きする\\n\\n**オーバーライド**は、親クラスのメソッドを子クラスで書き換えることです。\\n\\n`@Override` アノテーションを使います。\\n\\n```java\\nclass Cat extends Animal {\\n    @Override\\n    void sound() { System.out.println(\\\"ニャー\\\"); }\\n}\\n```\\n\\n動物ごとに違う動きを定義できます！" },
    { "title": "インターフェース", "content": "# 契約を定義する\\n\\n**インターフェース**は、クラスが持つべきメソッドの「約束事」を定義します。\\n\\n`implements` で約束を守ります。\\n\\n```java\\ninterface Drawable {\\n    void draw();\\n}\\n\\nclass Square implements Drawable {\\n    public void draw() {\\n        System.out.println(\\\"四角形\\\");\\n    }\\n}\\n```\\n\\n複数のインターフェースを実装できます！" },
    { "title": "抽象クラス", "content": "# 継承専用のクラス\\n\\n**抽象クラス**は `abstract` キーワードで定義し、直接インスタンス化できません。\\n\\n```java\\nabstract class Shape {\\n    abstract void draw();  // 中身は子クラスで実装\\n}\\n\\nclass Circle extends Shape {\\n    void draw() { System.out.println(\\\"円\\\"); }\\n}\\n```\\n\\n「形」という概念は抽象的で、具体的な形は子クラスで決めます。" }
  ],
  "exercises": [
    {
      "title": "クラスの継承",
      "correctCode": "class Vehicle {\\n    void move() {\\n        System.out.println(\"Moving\");\\n    }\\n}\\n\\n// CarクラスをVehicleを継承して定義\\nclass Car extends Vehicle {\\n    void honk() {\\n        System.out.println(\"Beep!\");\\n    }\\n}\\n\\nclass Main {\\n    public static void main(String[] args) {\\n        // cにnew Car()を代入\\n        Car c = new Car();\\n        // move メソッドを呼び出す\\n        c.move();\\n    }\\n}",
      "holeyCode": "class ___ {\\n    void ___() {\\n        ___.___.___(___)___\\n    ___\\n___\\n___\\n// CarクラスをVehicleを継承して定義\\nclass ___ extends ___ {\\n    void ___() {\\n        ___.___.___(___)___\\n    ___\\n___\\n___\\nclass ___ {\\n    public static void ___(___[] ___) {\\n        // cにnew Car()を代入\\n        ___ ___ = new ___()___\\n        // move メソッドを呼び出す\\n        ___.___()___\\n    ___\\n___",
      "correctLines": [
          "class Vehicle {",
          "    void move() {",
          "        System.out.println(\"Moving\");",
          "    }",
          "}",
          "",
          "// CarクラスをVehicleを継承して定義",
          "class Car extends Vehicle {",
          "    void honk() {",
          "        System.out.println(\"Beep!\");",
          "    }",
          "}",
          "",
          "class Main {",
          "    public static void main(String[] args) {",
          "        // cにnew Car()を代入",
          "        Car c = new Car();",
          "        // move メソッドを呼び出す",
          "        c.move();",
          "    }",
          "}"
        ],
      "lineHints": [
          "Vehicleクラスを定義します。",
          "moveメソッドを定義します。",
          "System.out.printlnで\"Moving\"を出力します。",
          "moveメソッドのブロックを閉じます。",
          "Vehicleクラスのブロックを閉じます。",
          null,
          null,
          "CarクラスをVehicleを継承して定義します。",
          "honkメソッドを定義します。",
          "System.out.printlnで\"Beep!\"を出力します。",
          "honkメソッドのブロックを閉じます。",
          "Carクラスのブロックを閉じます。",
          null,
          "Mainクラスを定義します。",
          "main関数を定義します。argsはString配列です。",
          null,
          "Car型の変数cを宣言し、new Car()を代入します。",
          null,
          "cのmoveメソッドを呼び出します。",
          "mainメソッドのブロックを閉じます。",
          "Mainクラスのブロックを閉じます。"
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
          "others": ["Vehicle", "move", "System", "out", "println", "\"Moving\"", ";", "}", "Car", "honk", "\"Beep!\"", "Main", "main", "String", "args", "c", "()"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Moving\\n"
          }
        ]
      },
    {
      "title": "メソッドのオーバーライド",
      "correctCode": "class Shape {\\n    void draw() {\\n        System.out.println(\"Shape\");\\n    }\\n}\\n\\nclass Circle extends Shape {\\n    // @Override でメソッドを上書き宣言する\\n    @Override\\n    void draw() {\\n        System.out.println(\"Circle\");\\n    }\\n}\\n\\nclass Main {\\n    public static void main(String[] args) {\\n        // cにnew Circle()を代入\\n        Circle c = new Circle();\\n        // draw メソッドを呼び出す\\n        c.draw();\\n    }\\n}",
      "holeyCode": "class ___ {\\n    void ___() {\\n        ___.___.___(___)___\\n    ___\\n___\\n___\\nclass ___ extends ___ {\\n    // @Override でメソッドを上書き宣言する\\n    @___\\n    void ___() {\\n        ___.___.___(___)___\\n    ___\\n___\\n___\\nclass ___ {\\n    public static void ___(___[] ___) {\\n        // cにnew Circle()を代入\\n        ___ ___ = new ___()___\\n        // draw メソッドを呼び出す\\n        ___.___()___\\n    ___\\n___",
      "correctLines": [
          "class Shape {",
          "    void draw() {",
          "        System.out.println(\"Shape\");",
          "    }",
          "}",
          "",
          "class Circle extends Shape {",
          "    // @Override でメソッドを上書き宣言する",
          "    @Override",
          "    void draw() {",
          "        System.out.println(\"Circle\");",
          "    }",
          "}",
          "",
          "class Main {",
          "    public static void main(String[] args) {",
          "        // cにnew Circle()を代入",
          "        Circle c = new Circle();",
          "        // draw メソッドを呼び出す",
          "        c.draw();",
          "    }",
          "}"
        ],
      "lineHints": [
          "Shapeクラスを定義します。",
          "drawメソッドを定義します。",
          "System.out.printlnで\"Shape\"を出力します。",
          "drawメソッドのブロックを閉じます。",
          "Shapeクラスのブロックを閉じます。",
          null,
          "CircleクラスをShapeを継承して定義します。",
          null,
          "@Overrideアノテーションを使います。",
          "drawメソッドをオーバーライドします。",
          "System.out.printlnで\"Circle\"を出力します。",
          "drawメソッドのブロックを閉じます。",
          "Circleクラスのブロックを閉じます。",
          null,
          "Mainクラスを定義します。",
          "main関数を定義します。argsはString配列です。",
          null,
          "Circle型の変数cにnew Circle()を代入します。",
          null,
          "cのdrawメソッドを呼び出します。",
          "mainメソッドのブロックを閉じます。",
          "Mainクラスのブロックを閉じます。"
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
          "others": ["Shape", "draw", "System", "out", "println", "\"Shape\"", ";", "}", "Circle", "Override", "\"Circle\"", "Main", "main", "String", "args", "c", "()"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Circle\\n"
          }
        ]
      },
    {
      "title": "インターフェース",
      "correctCode": "interface Greeting {\\n    void sayHello();\\n}\\n\\n// PersonクラスをGreetingインターフェースを実装して定義\\nclass Person implements Greeting {\\n    public void sayHello() {\\n        System.out.println(\"こんにちは！\");\\n    }\\n}\\n\\nclass Main {\\n    public static void main(String[] args) {\\n        // pにnew Person()を代入\\n        Person p = new Person();\\n        // sayHello メソッドを呼び出す\\n        p.sayHello();\\n    }\\n}",
      "holeyCode": "interface ___ {\\n    void ___()___\\n___\\n___\\n// PersonクラスをGreetingインターフェースを実装して定義\\nclass ___ implements ___ {\\n    public void ___() {\\n        ___.___.___(___)___\\n    ___\\n___\\n___\\nclass ___ {\\n    public static void ___(___[] ___) {\\n        // pにnew Person()を代入\\n        ___ ___ = new ___()___\\n        // sayHello メソッドを呼び出す\\n        ___.___()___\\n    ___\\n___",
      "correctLines": [
          "interface Greeting {",
          "    void sayHello();",
          "}",
          "",
          "// PersonクラスをGreetingインターフェースを実装して定義",
          "class Person implements Greeting {",
          "    public void sayHello() {",
          "        System.out.println(\"こんにちは！\");",
          "    }",
          "}",
          "",
          "class Main {",
          "    public static void main(String[] args) {",
          "        // pにnew Person()を代入",
          "        Person p = new Person();",
          "        // sayHello メソッドを呼び出す",
          "        p.sayHello();",
          "    }",
          "}"
        ],
      "lineHints": [
          "Greetingインターフェースを定義します。",
          "sayHelloメソッドを宣言します。",
          "Greetingインターフェースのブロックを閉じます。",
          null,
          null,
          "PersonクラスをGreetingインターフェースを実装して定義します。",
          "sayHelloメソッドを実装します。",
          "System.out.printlnで\"こんにちは！\"を出力します。",
          "sayHelloメソッドのブロックを閉じます。",
          "Personクラスのブロックを閉じます。",
          null,
          "Mainクラスを定義します。",
          "main関数を定義します。argsはString配列です。",
          null,
          "Person型の変数pにnew Person()を代入します。",
          null,
          "pのsayHelloメソッドを呼び出します。",
          "mainメソッドのブロックを閉じます。",
          "Mainクラスのブロックを閉じます。"
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
      "correctCode": "// 抽象クラスAnimalを定義\\nabstract class Animal {\\n    abstract void speak();\\n}\\n\\nclass Dog extends Animal {\\n    void speak() {\\n        System.out.println(\"ワン！\");\\n    }\\n}\\n\\nclass Main {\\n    public static void main(String[] args) {\\n        // dにnew Dog()を代入\\n        Dog d = new Dog();\\n        // speak メソッドを呼び出す\\n        d.speak();\\n    }\\n}",
      "holeyCode": "// 抽象クラスAnimalを定義\\nabstract class ___ {\\n    abstract void ___()___\\n___\\n___\\nclass ___ extends ___ {\\n    void ___() {\\n        ___.___.___(___)___\\n    ___\\n___\\n___\\nclass ___ {\\n    public static void ___(___[] ___) {\\n        // dにnew Dog()を代入\\n        ___ ___ = new ___()___\\n        // speak メソッドを呼び出す\\n        ___.___()___\\n    ___\\n___",
      "correctLines": [
          "// 抽象クラスAnimalを定義",
          "abstract class Animal {",
          "    abstract void speak();",
          "}",
          "",
          "class Dog extends Animal {",
          "    void speak() {",
          "        System.out.println(\"ワン！\");",
          "    }",
          "}",
          "",
          "class Main {",
          "    public static void main(String[] args) {",
          "        // dにnew Dog()を代入",
          "        Dog d = new Dog();",
          "        // speak メソッドを呼び出す",
          "        d.speak();",
          "    }",
          "}"
        ],
      "lineHints": [
          null,
          "abstract classでAnimalを定義します。",
          "abstract voidで抽象メソッドspeakを宣言します。",
          "Animalクラスのブロックを閉じます。",
          null,
          "DogクラスをAnimalを継承して定義します。",
          "speakメソッドを実装します。",
          "System.out.printlnで\"ワン！\"を出力します。",
          "speakメソッドのブロックを閉じます。",
          "Dogクラスのブロックを閉じます。",
          null,
          "Mainクラスを定義します。",
          "main関数を定義します。argsはString配列です。",
          null,
          "Dog型の変数dにnew Dog()を代入します。",
          null,
          "dのspeakメソッドを呼び出します。",
          "mainメソッドのブロックを閉じます。",
          "Mainクラスのブロックを閉じます。"
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
      "correctCode": "class Main {\\n    public static void main(String[] args) {\\n        // tryで例外をキャッチする準備\\n        try {\\n            // parseInt で文字列を整数に変換する\\n            int x = Integer.parseInt(\"あいう\");\\n        } catch (Exception e) {\\n            System.out.println(\"エラー\");\\n        }\\n    }\\n}",
      "holeyCode": "class ___ {\\n    public static void ___(___[] ___) {\\n        // tryで例外をキャッチする準備\\n        try ___\\n            // parseInt で文字列を整数に変換する\\n            ___ ___ = ___.___(___)___\\n        ___ catch (___ ___) {\\n            ___.___.___(___)___\\n        ___\\n    ___\\n___",
      "correctLines": [
          "class Main {",
          "    public static void main(String[] args) {",
          "        // tryで例外をキャッチする準備",
          "        try {",
          "            // parseInt で文字列を整数に変換する",
          "            int x = Integer.parseInt(\"あいう\");",
          "        } catch (Exception e) {",
          "            System.out.println(\"エラー\");",
          "        }",
          "    }",
          "}"
        ],
      "lineHints": [
          "Mainクラスを定義します。",
          "main関数を定義します。argsはString配列です。",
          null,
          "tryキーワードの後に開き波括弧を書きます。",
          null,
          "int型のxにInteger.parseInt(\"あいう\")を代入します。",
          "tryブロックを閉じてcatchブロックを開始します。",
          "System.out.printlnで\"エラー\"を出力します。",
          "catchブロックを閉じます。",
          "mainメソッドのブロックを閉じます。",
          "Mainクラスのブロックを閉じます。"
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
          "others": ["Main", "main", "String", "args", "{", "x", "Integer", "parseInt", "\"あいう\"", ";", "}", "Exception", "e", "System", "out", "println", "\"エラー\""]
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
      "correctCode": "class Main {\\n    public static void main(String[] args) {\\n        try {\\n            // println で出力する\\n            System.out.println(\"Try\");\\n        } catch (Exception e) {\\n            System.out.println(\"Catch\");\\n        // finally で必ず実行する\\n        } finally {\\n            System.out.println(\"Finally\");\\n        }\\n    }\\n}",
      "holeyCode": "class ___ {\\n    public static void ___(___[] ___) {\\n        try ___\\n            // println で出力する\\n            ___.___.___(___)___\\n        ___ catch (___ ___) {\\n            ___.___.___(___)___\\n        // finally で必ず実行する\\n        ___ finally ___\\n            ___.___.___(___)___\\n        ___\\n    ___\\n___",
      "correctLines": [
          "class Main {",
          "    public static void main(String[] args) {",
          "        try {",
          "            // println で出力する",
          "            System.out.println(\"Try\");",
          "        } catch (Exception e) {",
          "            System.out.println(\"Catch\");",
          "        // finally で必ず実行する",
          "        } finally {",
          "            System.out.println(\"Finally\");",
          "        }",
          "    }",
          "}"
        ],
      "lineHints": [
          "Mainクラスを定義します。",
          "main関数を定義します。argsはString配列です。",
          "tryキーワードの後に開き波括弧を書きます。",
          null,
          "System.out.printlnで\"Try\"を出力します。",
          "tryブロックを閉じてcatchブロックを開始します。",
          "System.out.printlnで\"Catch\"を出力します。",
          null,
          "catchブロックを閉じてfinallyブロックを開始します。",
          "System.out.printlnで\"Finally\"を出力します。",
          "finallyブロックを閉じます。",
          "mainメソッドのブロックを閉じます。",
          "Mainクラスのブロックを閉じます。"
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
          "others": ["Main", "main", "String", "args", "{", "}", "System", "out", "println", "\"Try\"", ";", "Exception", "e", "\"Catch\"", "\"Finally\""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Try\\nFinally\\n"
          }
        ]
      },
    {
      "title": "ArrayList",
      "correctCode": "import java.util.ArrayList;\\n\\nclass Main {\\n    public static void main(String[] args) {\\n        // itemsにnew ArrayList<>()を代入\\n        ArrayList<String> items = new ArrayList<>();\\n        // add で要素を追加する\\n        items.add(\"A\");\\n        // add で要素を追加する\\n        items.add(\"B\");\\n        // get で要素を取得する\\n        System.out.println(items.get(0));\\n    }\\n}",
      "holeyCode": "import ___.___.___\\n___\\nclass ___ {\\n    public static void ___(___[] ___) {\\n        // itemsにnew ArrayList<>()を代入\\n        ___<___> ___ = new ___<>()___\\n        // add で要素を追加する\\n        ___.___(___)___\\n        // add で要素を追加する\\n        ___.___(___)___\\n        // get で要素を取得する\\n        ___.___.___(___.___(___)___\\n    ___\\n___",
      "correctLines": [
          "import java.util.ArrayList;",
          "",
          "class Main {",
          "    public static void main(String[] args) {",
          "        // itemsにnew ArrayList<>()を代入",
          "        ArrayList<String> items = new ArrayList<>();",
          "        // add で要素を追加する",
          "        items.add(\"A\");",
          "        // add で要素を追加する",
          "        items.add(\"B\");",
          "        // get で要素を取得する",
          "        System.out.println(items.get(0));",
          "    }",
          "}"
        ],
      "lineHints": [
          "java.util.ArrayListをインポートします。",
          null,
          "Mainクラスを定義します。",
          "main関数を定義します。argsはString配列です。",
          null,
          "ArrayList<String>型のitemsにnew ArrayList<>()を代入します。",
          null,
          "itemsのaddメソッドで\"A\"を追加します。",
          null,
          "itemsのaddメソッドで\"B\"を追加します。",
          null,
          "items.get(0)で要素を取得し、printlnで出力します。",
          "mainメソッドのブロックを閉じます。",
          "Mainクラスのブロックを閉じます。"
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
          "others": ["java", "util", "ArrayList;", "Main", "main", "String", "args", "ArrayList", "items", ";", "add", "\"A\"", "\"B\"", "System", "out", "println", "get", "0", "))", "}", ");"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "A\\n"
          }
        ]
      },
    {
      "title": "拡張for文（for-each）",
      "correctCode": "class Main {\\n    public static void main(String[] args) {\\n        // colorsに{\"R\", \"G\", \"B\"}を代入\\n        String[] colors = {\"R\", \"G\", \"B\"};\\n        // for-eachでcolorsから順番にcに取り出す\\n        for (String c : colors) {\\n            // cをprintlnで出力\\n            System.out.println(c);\\n        }\\n    }\\n}",
      "holeyCode": "class ___ {\\n    public static void ___(___[] ___) {\\n        // colorsに{\"R\", \"G\", \"B\"}を代入\\n        ___[] ___ = {___, ___, ___}___\\n        // for-eachでcolorsから順番にcに取り出す\\n        for (___ ___ : ___) {\\n            // cをprintlnで出力\\n            ___.___.___(___)___\\n        ___\\n    ___\\n___",
      "correctLines": [
          "class Main {",
          "    public static void main(String[] args) {",
          "        // colorsに{\"R\", \"G\", \"B\"}を代入",
          "        String[] colors = {\"R\", \"G\", \"B\"};",
          "        // for-eachでcolorsから順番にcに取り出す",
          "        for (String c : colors) {",
          "            // cをprintlnで出力",
          "            System.out.println(c);",
          "        }",
          "    }",
          "}"
        ],
      "lineHints": [
          "Mainクラスを定義します。",
          "main関数を定義します。argsはString配列です。",
          null,
          "String配列colorsに\"R\", \"G\", \"B\"を代入します。",
          null,
          "for-eachでString型のcにcolorsの要素を順番に取り出します。",
          null,
          "System.out.printlnでcを出力します。",
          "forループのブロックを閉じます。",
          "mainメソッドのブロックを閉じます。",
          "Mainクラスのブロックを閉じます。"
        ],
        "candidates": {
          "keywords": [
            "for",
            "class",
            "public",
            "static",
            "void"
          ],
          "others": ["Main", "main", "String", "args", "colors", "\"R\"", "\"G\"", "\"B\"", ";", "c", "System", "out", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "R\\nG\\nB\\n"
          }
        ]
      },
    {
      "title": "staticメソッド",
      "correctCode": "class Calculator {\\n    // static multiply()を定義\\n    static int multiply(int a, int b) {\\n        // a * b を返す\\n        return a * b;\\n    }\\n}\\n\\nclass Main {\\n    public static void main(String[] args) {\\n        // multiply関数を呼び出し（第1引数に4, 第2引数に5）\\n        int result = Calculator.multiply(4, 5);\\n        // println で出力する\\n        System.out.println(result);\\n    }\\n}",
      "holeyCode": "class ___ {\\n    // static multiply()を定義\\n    static ___ ___(int ___, int ___) {\\n        // a * b を返す\\n        return ___ * ___\\n    ___\\n___\\n___\\nclass ___ {\\n    public static void ___(___[] ___) {\\n        // multiply関数を呼び出し（第1引数に4, 第2引数に5）\\n        ___ ___ = ___.___(___, ___)___\\n        // println で出力する\\n        ___.___.___(___)___\\n    ___\\n___",
      "correctLines": [
          "class Calculator {",
          "    // static multiply()を定義",
          "    static int multiply(int a, int b) {",
          "        // a * b を返す",
          "        return a * b;",
          "    }",
          "}",
          "",
          "class Main {",
          "    public static void main(String[] args) {",
          "        // multiply関数を呼び出し（第1引数に4, 第2引数に5）",
          "        int result = Calculator.multiply(4, 5);",
          "        // println で出力する",
          "        System.out.println(result);",
          "    }",
          "}"
        ],
      "lineHints": [
          "Calculatorクラスを定義します。",
          null,
          "static intでmultiplyメソッドを定義します。引数aとbはint型です。",
          null,
          "a * bの結果を返します。",
          "multiplyメソッドのブロックを閉じます。",
          "Calculatorクラスのブロックを閉じます。",
          null,
          "Mainクラスを定義します。",
          "main関数を定義します。argsはString配列です。",
          null,
          "int型のresultにCalculator.multiply(4, 5)を代入します。",
          null,
          "System.out.printlnでresultを出力します。",
          "mainメソッドのブロックを閉じます。",
          "Mainクラスのブロックを閉じます。"
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
      "correctCode": "class Item {\\n    // private でフィールドを隠蔽する\\n    private int price;\\n    \\n    public Item(int p) {\\n        // price に値を代入する\\n        price = p;\\n    }\\n    \\n    public int getPrice() {\\n        // priceを返す\\n        return price;\\n    }\\n}\\n\\nclass Main {\\n    public static void main(String[] args) {\\n        // itemにnew Item(100)を代入\\n        Item item = new Item(100);\\n        // getPrice メソッドを呼び出す\\n        System.out.println(item.getPrice());\\n    }\\n}",
      "holeyCode": "class ___ {\\n    // private でフィールドを隠蔽する\\n    private ___ ___\\n    ___\\n    public ___(int ___) {\\n        // price に値を代入する\\n        ___ = ___\\n    ___\\n    ___\\n    public ___ ___() {\\n        // priceを返す\\n        return ___\\n    ___\\n___\\n___\\nclass ___ {\\n    public static void ___(___[] ___) {\\n        // itemにnew Item(100)を代入\\n        ___ ___ = new ___(___)___\\n        // getPrice メソッドを呼び出す\\n        ___.___.___(___.___())___\\n    ___\\n___",
      "correctLines": [
          "class Item {",
          "    // private でフィールドを隠蔽する",
          "    private int price;",
          "    ",
          "    public Item(int p) {",
          "        // price に値を代入する",
          "        price = p;",
          "    }",
          "    ",
          "    public int getPrice() {",
          "        // priceを返す",
          "        return price;",
          "    }",
          "}",
          "",
          "class Main {",
          "    public static void main(String[] args) {",
          "        // itemにnew Item(100)を代入",
          "        Item item = new Item(100);",
          "        // getPrice メソッドを呼び出す",
          "        System.out.println(item.getPrice());",
          "    }",
          "}"
        ],
      "lineHints": [
          "Itemクラスを定義します。",
          null,
          "private intでpriceフィールドを定義します。",
          "コードの可読性のための空白行です。",
          "public Item()コンストラクタを定義します。引数pはint型です。",
          null,
          "priceにpを代入します。",
          "コンストラクタのブロックを閉じます。",
          "コードの可読性のための空白行です。",
          "public intでgetPriceメソッドを定義します。",
          null,
          "priceを返します。",
          "getPriceメソッドのブロックを閉じます。",
          "Itemクラスのブロックを閉じます。",
          null,
          "Mainクラスを定義します。",
          "main関数を定義します。argsはString配列です。",
          null,
          "Item型のitemにnew Item(100)を代入します。",
          null,
          "item.getPrice()を呼び出してprintlnで出力します。",
          "mainメソッドのブロックを閉じます。",
          "Mainクラスのブロックを閉じます。"
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
          "others": ["Item", "price", ";", "", "p", "}", "getPrice", "Main", "main", "String", "args", "item", "100", "System", "out", "println", "price;", "p;"]
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

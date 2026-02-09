export const javaData2 = {
  "language": "java",
  "lessonId": "java-2",
  "lessonTitle": "Java II - ステップアップ！",
  "lessonDescription": "Javaの基本をマスターしたら、オブジェクト指向プログラミングを深く学びましょう！クラスの継承、インターフェース、例外処理などを身につけます。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "exercises": [
    {
      "title": "クラスの継承",
      "correctCode": "class Vehicle {\\n    void move() {\\n        System.out.println(\"Moving\");\\n    }\\n}\\n\\n// CarクラスをVehicleを継承して定義\\nclass Car extends Vehicle {\\n    void honk() {\\n        System.out.println(\"Beep!\");\\n    }\\n}\\n\\nclass Main {\\n    public static void main(String[] args) {\\n        // cにnew Car()を代入\\n        Car c = new Car();\\n        // move メソッドを呼び出す\\n        c.move();\\n    }\\n}",
      "holeyCode": "class ___ {\\n    void ___() {\\n        System.out.___(\"Moving\");\\n    ___\\n___\\n___\\n// CarクラスをVehicleを継承して定義\\nclass ___ extends Vehicle {\\n    void ___() {\\n        System.out.___(\"Beep!\");\\n    ___\\n___\\n___\\nclass ___ {\\n    public static void ___\\(String[] args) {\\n        // cにnew Car()を代入\\n        ___ c = new Car();\\n        // move メソッドを呼び出す\\n        c.___();\\n    ___\\n___",
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
          "printlnで出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          null,
          "CarクラスをVehicleを継承して定義します。",
          "honkメソッドを定義します。",
          "printlnで出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "Mainクラスを定義します。",
          "main関数を定義します。",
          null,
          "Car型の変数cを宣言し、new Car()を代入します。",
          null,
          "moveメソッドを呼び出します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "extends",
            "implements",
            "super",
            "this",
            "new",
            "move"
          ],
          "others": ["Vehicle", "println", "}", "Car", "honk", "Main", "main(String[] args) {", "}"]
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
      "holeyCode": "class ___ {\\n    void ___() {\\n        System.out.___(\"Shape\");\\n    ___\\n___\\n___\\nclass ___ extends Shape {\\n    // @Override でメソッドを上書き宣言する\\n    @___\\n    void ___() {\\n        System.out.___(\"Circle\");\\n    ___\\n___\\n___\\nclass ___ {\\n    public static void ___\\(String[] args) {\\n        // cにnew Circle()を代入\\n        ___ c = new Circle();\\n        // draw メソッドを呼び出す\\n        c.___();\\n    ___\\n___",
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
          "printlnで出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "CircleクラスをShapeを継承して定義します。",
          null,
          "@Overrideアノテーションを使います。",
          "drawメソッドをオーバーライドします。",
          "printlnで出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "Mainクラスを定義します。",
          "main関数を定義します。",
          null,
          "Circle型の変数cにnew Circle()を代入します。",
          null,
          "drawメソッドを呼び出します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "@Override",
            "@override",
            "override",
            "@Overwrite",
            "new",
            "draw"
          ],
          "others": ["Shape", "println", "}", "Circle", "Override", "Main", "main(String[] args) {", "}", "", "Override\\"]
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
      "holeyCode": "interface ___ {\\n    void ___();\\n___\\n___\\n// PersonクラスをGreetingインターフェースを実装して定義\\nclass ___ implements Greeting {\\n    public void ___() {\\n        System.out.___(\"こんにちは！\");\\n    ___\\n___\\n___\\nclass ___ {\\n    public static void ___\\(String[] args) {\\n        // pにnew Person()を代入\\n        ___ p = new Person();\\n        // sayHello メソッドを呼び出す\\n        p.___();\\n    ___\\n___",
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
          "ここを正しく入力してください。",
          null,
          null,
          "PersonクラスをGreetingインターフェースを実装して定義します。",
          "sayHelloメソッドを実装します。",
          "printlnで出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "Mainクラスを定義します。",
          "main関数を定義します。",
          null,
          "Person型の変数pにnew Person()を代入します。",
          null,
          "sayHelloメソッドを呼び出します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "implements",
            "extends",
            "interface",
            "abstract",
            "new",
            "sayHello"
          ],
          "others": ["Greeting", "}", "Person", "println", "Main", "main(String[] args) {", "}"]
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
      "holeyCode": "// 抽象クラスAnimalを定義\\nabstract class ___ {\\n    abstract void ___();\\n___\\n___\\nclass ___ extends Animal {\\n    void ___() {\\n        System.out.___(\"ワン！\");\\n    ___\\n___\\n___\\nclass ___ {\\n    public static void ___\\(String[] args) {\\n        // dにnew Dog()を代入\\n        ___ d = new Dog();\\n        // speak メソッドを呼び出す\\n        d.___();\\n    ___\\n___",
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
          "ここを正しく入力してください。",
          null,
          "DogクラスをAnimalを継承して定義します。",
          "speakメソッドを実装します。",
          "printlnで出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "Mainクラスを定義します。",
          "main関数を定義します。",
          null,
          "Dog型の変数dにnew Dog()を代入します。",
          null,
          "speakメソッドを呼び出します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "abstract",
            "interface",
            "virtual",
            "static",
            "new",
            "speak"
          ],
          "others": ["Animal", "}", "Dog", "println", "Main", "main(String[] args) {", "}"]
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
      "holeyCode": "class ___ {\\n    public static void ___\\(String[] args) {\\n        // tryで例外をキャッチする準備\\n        ___ {\\n            // parseInt で文字列を整数に変換する\\n            ___ x = Integer.parseInt(\"___\");\\n        } ___ (Exception e) {\\n            System.out.___(\"エラー\");\\n        ___\\n    ___\\n___",
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
          "エラーが発生する可能性のある処理をここから記述します。",
          "`parseInt` メソッドを使います。",
          null,
          "例外が発生する可能性のある処理を開始する。",
          null,
          "ここを正しく入力してください。",
          "例外が発生した場合の処理を定義する。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "try",
            "catch",
            "throw",
            "finally",
            "parseInt"
          ],
          "others": ["Main", "main(String[] args) {", "あいう", "println", "}", "int", "}\\"]
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
      "holeyCode": "class ___ {\\n    public static void ___\\(String[] args) {\\n        ___ {\\n            // println で出力する\\n            System.out.___(\"Try\");\\n        } ___ (Exception e) {\\n            System.out.___(\"Catch\");\\n        // finally で必ず実行する\\n        } ___ {\\n            System.out.___(\"Finally\");\\n        ___\\n    ___\\n___",
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
          "文字列をコンソールに出力し、改行します。",
          "エラーの有無に関わらず、最後に必ず実行する処理を記述します。",
          "例外が発生する可能性のある処理を開始する。",
          null,
          "ここを正しく入力してください。",
          "例外が発生した場合の処理を定義する。",
          "ここを正しく入力してください。",
          null,
          "例外の有無に関わらず必ず実行する処理を定義する。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "finally",
            "final",
            "finish",
            "end",
            "println"
          ],
          "others": ["Main", "main(String[] args) {", "try", "catch", "}", "}\\"]
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
      "holeyCode": "import java.util.___ ;\\n___\\nclass ___ {\\n    public static void ___\\(String[] args) {\\n        // itemsにnew ArrayList<>()を代入\\n        ___<String> items = new ArrayList<>();\\n        // add で要素を追加する\\n        ___.add(\"___\");\\n        // add で要素を追加する\\n        items.add(\"___\");\\n        // get で要素を取得する\\n        System.out.___(items.get(0));\\n    ___\\n___",
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
          "main関数を定義します。",
          null,
          "ArrayList<String>型のitemsにnew ArrayList<>()を代入します。",
          null,
          "addメソッドで\\\"A\\\"を追加します。",
          null,
          "addメソッドで\\\"B\\\"を追加します。",
          null,
          "getメソッドで要素を取得し、printlnで出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "add",
            "push",
            "append",
            "insert",
            "new",
            "get"
          ],
          "others": ["ArrayList;", "Main", "main(String[] args) {", "ArrayList", "A", "B", "println", "}", "items", "ArrayList;", "", "}\\"]
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
      "holeyCode": "class ___ {\\n    public static void ___\\(String[] args) {\\n        // colorsに{\"R\", \"G\", \"B\"}を代入\\n        String[] colors = {___};\\n        // for-eachでcolorsから順番にcに取り出す\\n        for (String ___ : colors) {\\n            // cをprintlnで出力\\n            System.out.___(c);\\n        ___\\n    ___\\n___",
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
          "新しいクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "配列の最初の要素です。インデックス0で参照されます。",
          null,
          "指定された回数や範囲で、繰り返し処理（ループ）を行います。",
          null,
          "変数の値をコンソールに出力し、改行します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            ":",
            "in",
            "of",
            "->",
            "R",
            "println"
          ],
          "others": ["Main", "main(String[] args) {", "\"R\", \"G\", \"B\"", "c", "}", "}\\"]
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
      "correctCode": "class Calculator {\\n    // static multiply()を定義\\n    static int multiply(int a, int b) {\\n        // a * b を返す\\n        return a * b;\\n    }\\n}\\n\\nclass Main {\\n    public static void main(String[] args) {\\n        // multiply メソッドを呼び出す\\n        int result = Calculator.multiply(4, 5);\\n        // println で出力する\\n        System.out.println(result);\\n    }\\n}",
      "holeyCode": "class ___ {\\n    // static multiply()を定義\\n    static int multiply(int a, int ___) {\\n        // a * b を返す\\n        return a * ___;\\n    ___\\n___\\n___\\nclass ___ {\\n    public static void ___\\(String[] args) {\\n        // multiply メソッドを呼び出す\\n        int result = Calculator.multiply(___, 5);\\n        // println で出力する\\n        System.out.___(result);\\n    ___\\n___",
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
          "        // multiply メソッドを呼び出す",
          "        int result = Calculator.multiply(4, 5);",
          "        // println で出力する",
          "        System.out.println(result);",
          "    }",
          "}"
        ],
      "lineHints": [
          "Calculatorクラスを定義します。",
          null,
          "static intでmultiplyメソッドを定義します。引数bを入力します。",
          null,
          "a * bの結果を返します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "Mainクラスを定義します。",
          "main関数を定義します。",
          null,
          "Calculator.multiplyメソッドを呼び出します。引数に4を入力します。",
          null,
          "printlnで出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "static",
            "public",
            "private",
            "final",
            "return",
            "multiply",
            "println"
          ],
          "others": ["Calculator", "b", "}", "Main", "main(String[] args) {", "4", "}"]
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
      "holeyCode": "class ___ {\\n    // private でフィールドを隠蔽する\\n    private int ___;\\n    ___\\n    public ___(int p) {\\n        // price に値を代入する\\n        price = ___;\\n    ___\\n    ___\\n    public int ___() {\\n        // priceを返す\\n        return ___;\\n    ___\\n___\\n___\\nclass ___ {\\n    public static void ___\\(String[] args) {\\n        // itemにnew Item(100)を代入\\n        Item item = new Item(___);\\n        // getPrice メソッドを呼び出す\\n        System.out.___(item.getPrice());\\n    ___\\n___",
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
          "この行を正しく入力してください。",
          "public Item()コンストラクタを定義します。",
          null,
          "price = pでフィールドに値を代入します。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。",
          "public intでgetPriceメソッドを定義します。",
          null,
          "priceを返します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "Mainクラスを定義します。",
          "main関数を定義します。",
          null,
          "Item型のitemにnew Item(100)を代入します。",
          null,
          "getPriceメソッドを呼び出してprintlnで出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "private",
            "public",
            "protected",
            "static",
            "price",
            "return",
            "new",
            "getPrice"
          ],
          "others": ["Item", "p", "}", "Main", "main(String[] args) {", "100", "println", "", "}\\"]
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

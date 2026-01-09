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
      "description": "既存のクラスを拡張して新しいクラスを作る「継承」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "継承とは？",
          "image": "/illustrations/3d_advanced/inheritance.png",
          "content": "# クラスを拡張する\n\n`extends` を使って、既存のクラスの機能を受け継いだ新しいクラスを作れます。\n\n```java\nclass Animal {\n    void eat() {\n        System.out.println(\"食べる\");\n    }\n}\n\nclass Dog extends Animal {\n    void bark() {\n        System.out.println(\"ワン！\");\n    }\n}\n```"
        },
        {
          "title": "親クラスの機能を使う",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# 継承した機能\n\n子クラスは親クラスのメソッドを使えます。\n\n```java\nDog dog = new Dog();\ndog.eat();   // 親のメソッド\ndog.bark();  // 自分のメソッド\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Vehicle {\n    void move() {\n        System.out.println(\"Moving\");\n    }\n}\n\n// extends で Vehicle を継承する\nclass Car extends Vehicle {\n    void honk() {\n        System.out.println(\"Beep!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Car c = new Car();\n        c.move();\n    }\n}",
      "holeyCode": "class Vehicle {\n    void move() {\n        System.out.println(\"Moving\");\n    }\n}\n\n// extends で Vehicle を継承する\nclass Car ___ Vehicle {\n    void honk() {\n        System.out.println(\"Beep!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Car c = new Car();\n        c.move();\n    }\n}",
      "correctLines": [
        "class Vehicle {",
        "    void move() {",
        "        System.out.println(\"Moving\");",
        "    }",
        "}",
        "",
        "// extends で Vehicle を継承する",
        "class Car extends Vehicle {",
        "    void honk() {",
        "        System.out.println(\"Beep!\");",
        "    }",
        "}",
        "",
        "class Main {",
        "    public static void main(String[] args) {",
        "        Car c = new Car();",
        "        c.move();",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "`extends` キーワードを使います。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["extends", "implements", "super", "this"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Moving\n"
        }
      ]
    },
    {
      "title": "メソッドのオーバーライド",
      "description": "親クラスのメソッドを子クラスで書き換える「オーバーライド」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "オーバーライドとは？",
          "image": "/illustrations/3d_advanced/inheritance.png",
          "content": "# メソッドを上書き\n\n親クラスのメソッドを子クラスで再定義できます。\n\n```java\nclass Animal {\n    void sound() {\n        System.out.println(\"音\");\n    }\n}\n\nclass Cat extends Animal {\n    @Override\n    void sound() {\n        System.out.println(\"ニャー\");\n    }\n}\n```"
        },
        {
          "title": "@Override アノテーション",
          "image": "/illustrations/3d/robot.png",
          "content": "# 明示的に宣言\n\n`@Override` をつけると、間違いを防げます。\n\n```java\nclass Cat extends Animal {\n    @Override\n    void sound() {  // 親と同じ名前\n        System.out.println(\"ニャー\");\n    }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Shape {\n    void draw() {\n        System.out.println(\"Shape\");\n    }\n}\n\nclass Circle extends Shape {\n    // @Override でメソッドを上書き宣言する\n    @Override\n    void draw() {\n        System.out.println(\"Circle\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Circle c = new Circle();\n        c.draw();\n    }\n}",
      "holeyCode": "class Shape {\n    void draw() {\n        System.out.println(\"Shape\");\n    }\n}\n\nclass Circle extends Shape {\n    // @Override でメソッドを上書き宣言する\n    ___\n    void draw() {\n        System.out.println(\"Circle\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Circle c = new Circle();\n        c.draw();\n    }\n}",
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
        "        Circle c = new Circle();",
        "        c.draw();",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "`@Override` アノテーションを使います。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["@Override", "@override", "override", "@Overwrite"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Circle\n"
        }
      ]
    },
    {
      "title": "インターフェース",
      "description": "クラスが実装すべきメソッドを定義する「インターフェース」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "インターフェースとは？",
          "image": "/illustrations/3d_advanced/interface_blueprint.png",
          "content": "# 契約を定義する\n\n`interface` でクラスが実装すべきメソッドを宣言します。\n\n```java\ninterface Drawable {\n    void draw();\n}\n\nclass Square implements Drawable {\n    public void draw() {\n        System.out.println(\"四角形\");\n    }\n}\n```"
        },
        {
          "title": "複数のインターフェース",
          "image": "/illustrations/3d_advanced/interface_blueprint.png",
          "content": "# 複数実装できる\n\nクラスは複数のインターフェースを実装できます。\n\n```java\ninterface A { void a(); }\ninterface B { void b(); }\n\nclass C implements A, B {\n    public void a() { }\n    public void b() { }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "interface Greeting {\n    void sayHello();\n}\n\n// implements でインターフェースを実装する\nclass Person implements Greeting {\n    public void sayHello() {\n        System.out.println(\"Hello!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Person p = new Person();\n        p.sayHello();\n    }\n}",
      "holeyCode": "interface Greeting {\n    void sayHello();\n}\n\n// implements でインターフェースを実装する\nclass Person ___ Greeting {\n    public void sayHello() {\n        System.out.println(\"Hello!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Person p = new Person();\n        p.sayHello();\n    }\n}",
      "correctLines": [
        "interface Greeting {",
        "    void sayHello();",
        "}",
        "",
        "// implements でインターフェースを実装する",
        "class Person implements Greeting {",
        "    public void sayHello() {",
        "        System.out.println(\"Hello!\");",
        "    }",
        "}",
        "",
        "class Main {",
        "    public static void main(String[] args) {",
        "        Person p = new Person();",
        "        p.sayHello();",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "`implements` キーワードを使います。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["implements", "extends", "interface", "abstract"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello!\n"
        }
      ]
    },
    {
      "title": "抽象クラス",
      "description": "直接インスタンス化できない「抽象クラス」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "抽象クラスとは？",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# 未完成の設計図\n\n`abstract` をつけると、インスタンス化できないクラスになります。\n\n```java\nabstract class Animal {\n    abstract void sound();\n    \n    void sleep() {\n        System.out.println(\"Zzz\");\n    }\n}\n```"
        },
        {
          "title": "抽象メソッド",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# 子クラスで実装必須\n\n抽象メソッドは、子クラスで必ず実装が必要です。\n\n```java\nclass Dog extends Animal {\n    void sound() {\n        System.out.println(\"ワン！\");\n    }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// abstract で抽象クラスを定義する\nabstract class Animal {\n    abstract void speak();\n}\n\nclass Dog extends Animal {\n    void speak() {\n        System.out.println(\"Woof!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Dog d = new Dog();\n        d.speak();\n    }\n}",
      "holeyCode": "// abstract で抽象クラスを定義する\n___ class Animal {\n    abstract void speak();\n}\n\nclass Dog extends Animal {\n    void speak() {\n        System.out.println(\"Woof!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Dog d = new Dog();\n        d.speak();\n    }\n}",
      "correctLines": [
        "// abstract で抽象クラスを定義する",
        "abstract class Animal {",
        "    abstract void speak();",
        "}",
        "",
        "class Dog extends Animal {",
        "    void speak() {",
        "        System.out.println(\"Woof!\");",
        "    }",
        "}",
        "",
        "class Main {",
        "    public static void main(String[] args) {",
        "        Dog d = new Dog();",
        "        d.speak();",
        "    }",
        "}"
      ],
      "lineHints": [
        "`abstract` キーワードを使います。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["abstract", "interface", "virtual", "static"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Woof!\n"
        }
      ]
    },
    {
      "title": "例外処理（try-catch）",
      "description": "エラーが発生したときに対処する「例外処理」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "例外とは？",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# プログラムの問題\n\n実行中に問題が起きると「例外」がスローされます。\n\n```java\nint[] arr = {1, 2, 3};\nSystem.out.println(arr[10]);  // 例外！\n```"
        },
        {
          "title": "try-catchで対処",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# エラーをキャッチ\n\n`try` 内でエラーが起きたら、`catch` で処理します。\n\n```java\ntry {\n    int result = 10 / 0;\n} catch (Exception e) {\n    System.out.println(\"エラー発生\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Main {\n    public static void main(String[] args) {\n        // try で例外が起きる可能性のある処理を囲む\n        try {\n            int x = Integer.parseInt(\"abc\");\n        } catch (Exception e) {\n            System.out.println(\"Error\");\n        }\n    }\n}",
      "holeyCode": "class Main {\n    public static void main(String[] args) {\n        // try で例外が起きる可能性のある処理を囲む\n        ___ {\n            int x = Integer.parseInt(\"abc\");\n        } catch (Exception e) {\n            System.out.println(\"Error\");\n        }\n    }\n}",
      "correctLines": [
        "class Main {",
        "    public static void main(String[] args) {",
        "        // try で例外が起きる可能性のある処理を囲む",
        "        try {",
        "            int x = Integer.parseInt(\"abc\");",
        "        } catch (Exception e) {",
        "            System.out.println(\"Error\");",
        "        }",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "`try` キーワードを使います。",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["try", "catch", "throw", "finally"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Error\n"
        }
      ]
    },
    {
      "title": "finally ブロック",
      "description": "例外の有無に関わらず必ず実行される「finally」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "finallyとは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 必ず実行される\n\n`finally` ブロックは、例外が起きても起きなくても必ず実行されます。\n\n```java\ntry {\n    // 処理\n} catch (Exception e) {\n    // エラー処理\n} finally {\n    // 必ず実行\n}\n```"
        },
        {
          "title": "リソースの解放に",
          "image": "/illustrations/3d/robot.png",
          "content": "# 後片付け処理\n\nファイルを閉じる、接続を切断するなどの後処理に使います。\n\n```java\ntry {\n    // ファイル操作\n} finally {\n    // ファイルを閉じる\n    System.out.println(\"Clean up\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Main {\n    public static void main(String[] args) {\n        try {\n            System.out.println(\"Try\");\n        } catch (Exception e) {\n            System.out.println(\"Catch\");\n        // finally で必ず実行する\n        } finally {\n            System.out.println(\"Finally\");\n        }\n    }\n}",
      "holeyCode": "class Main {\n    public static void main(String[] args) {\n        try {\n            System.out.println(\"Try\");\n        } catch (Exception e) {\n            System.out.println(\"Catch\");\n        // finally で必ず実行する\n        } ___ {\n            System.out.println(\"Finally\");\n        }\n    }\n}",
      "correctLines": [
        "class Main {",
        "    public static void main(String[] args) {",
        "        try {",
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
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "`finally` キーワードを使います。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["finally", "final", "finish", "end"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Try\nFinally\n"
        }
      ]
    },
    {
      "title": "ArrayList",
      "description": "可変長のリスト「ArrayList」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "ArrayListとは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 可変長の配列\n\n`ArrayList` はサイズを動的に変更できるリストです。\n\n```java\nimport java.util.ArrayList;\n\nArrayList<String> list = new ArrayList<>();\nlist.add(\"Apple\");\nlist.add(\"Banana\");\n```"
        },
        {
          "title": "基本操作",
          "image": "/illustrations/3d/robot.png",
          "content": "# 追加・取得・削除\n\n```java\nArrayList<Integer> nums = new ArrayList<>();\nnums.add(10);       // 追加\nnums.get(0);        // 取得 -> 10\nnums.remove(0);     // 削除\nnums.size();        // サイズ\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.ArrayList;\n\nclass Main {\n    public static void main(String[] args) {\n        ArrayList<String> items = new ArrayList<>();\n        // add で要素を追加する\n        items.add(\"A\");\n        items.add(\"B\");\n        System.out.println(items.get(0));\n    }\n}",
      "holeyCode": "import java.util.ArrayList;\n\nclass Main {\n    public static void main(String[] args) {\n        ArrayList<String> items = new ArrayList<>();\n        // add で要素を追加する\n        items.___(\"A\");\n        items.add(\"B\");\n        System.out.println(items.get(0));\n    }\n}",
      "correctLines": [
        "import java.util.ArrayList;",
        "",
        "class Main {",
        "    public static void main(String[] args) {",
        "        ArrayList<String> items = new ArrayList<>();",
        "        // add で要素を追加する",
        "        items.add(\"A\");",
        "        items.add(\"B\");",
        "        System.out.println(items.get(0));",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        "`add` メソッドで要素を追加します。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "functions": ["add", "push", "append", "insert"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "A\n"
        }
      ]
    },
    {
      "title": "拡張for文（for-each）",
      "description": "コレクションを簡単に繰り返す「拡張for文」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "拡張for文とは？",
          "image": "/illustrations/3d/loop.png",
          "content": "# 簡単な繰り返し\n\n配列やリストの全要素を簡単に処理できます。\n\n```java\nint[] nums = {1, 2, 3};\nfor (int n : nums) {\n    System.out.println(n);\n}\n```"
        },
        {
          "title": "ArrayListでも使える",
          "image": "/illustrations/3d/robot.png",
          "content": "# コレクションを処理\n\n```java\nArrayList<String> items = new ArrayList<>();\nitems.add(\"A\");\nitems.add(\"B\");\n\nfor (String item : items) {\n    System.out.println(item);\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Main {\n    public static void main(String[] args) {\n        String[] colors = {\"R\", \"G\", \"B\"};\n        // : で配列から順番に取り出す\n        for (String c : colors) {\n            System.out.println(c);\n        }\n    }\n}",
      "holeyCode": "class Main {\n    public static void main(String[] args) {\n        String[] colors = {\"R\", \"G\", \"B\"};\n        // : で配列から順番に取り出す\n        for (String c ___ colors) {\n            System.out.println(c);\n        }\n    }\n}",
      "correctLines": [
        "class Main {",
        "    public static void main(String[] args) {",
        "        String[] colors = {\"R\", \"G\", \"B\"};",
        "        // : で配列から順番に取り出す",
        "        for (String c : colors) {",
        "            System.out.println(c);",
        "        }",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "拡張for文は `:` を使います。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "operators": [":", "in", "of", "->"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "R\nG\nB\n"
        }
      ]
    },
    {
      "title": "staticメソッド",
      "description": "インスタンスなしで呼べる「staticメソッド」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "staticとは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# クラスに属するメソッド\n\n`static` メソッドはインスタンスを作らずに呼べます。\n\n```java\nclass Math {\n    static int add(int a, int b) {\n        return a + b;\n    }\n}\n\nMath.add(3, 5);  // 8\n```"
        },
        {
          "title": "staticの特徴",
          "image": "/illustrations/3d/robot.png",
          "content": "# ユーティリティに便利\n\n共通の処理をまとめるのに使います。\n\n```java\nclass Utils {\n    static String upper(String s) {\n        return s.toUpperCase();\n    }\n}\n\nUtils.upper(\"hello\");  // \"HELLO\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Calculator {\n    // static でクラスメソッドを定義する\n    static int multiply(int a, int b) {\n        return a * b;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        int result = Calculator.multiply(4, 5);\n        System.out.println(result);\n    }\n}",
      "holeyCode": "class Calculator {\n    // static でクラスメソッドを定義する\n    ___ int multiply(int a, int b) {\n        return a * b;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        int result = Calculator.multiply(4, 5);\n        System.out.println(result);\n    }\n}",
      "correctLines": [
        "class Calculator {",
        "    // static でクラスメソッドを定義する",
        "    static int multiply(int a, int b) {",
        "        return a * b;",
        "    }",
        "}",
        "",
        "class Main {",
        "    public static void main(String[] args) {",
        "        int result = Calculator.multiply(4, 5);",
        "        System.out.println(result);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "`static` キーワードを使います。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["static", "public", "private", "final"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "20\n"
        }
      ]
    },
    {
      "title": "アクセス修飾子",
      "description": "メンバーの公開範囲を制御する「アクセス修飾子」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "アクセス修飾子とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 公開範囲を制御\n\n- `public`: どこからでもアクセス可能\n- `private`: 同じクラス内のみ\n- `protected`: 同じパッケージと子クラス\n\n```java\nclass User {\n    public String name;\n    private int id;\n}\n```"
        },
        {
          "title": "カプセル化",
          "image": "/illustrations/3d/robot.png",
          "content": "# データを守る\n\n`private` で隠して、メソッドでアクセスします。\n\n```java\nclass User {\n    private String name;\n    \n    public String getName() {\n        return name;\n    }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Item {\n    // private でフィールドを隠蔽する\n    private int price;\n    \n    public Item(int p) {\n        price = p;\n    }\n    \n    public int getPrice() {\n        return price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Item item = new Item(100);\n        System.out.println(item.getPrice());\n    }\n}",
      "holeyCode": "class Item {\n    // private でフィールドを隠蔽する\n    ___ int price;\n    \n    public Item(int p) {\n        price = p;\n    }\n    \n    public int getPrice() {\n        return price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Item item = new Item(100);\n        System.out.println(item.getPrice());\n    }\n}",
      "correctLines": [
        "class Item {",
        "    // private でフィールドを隠蔽する",
        "    private int price;",
        "    ",
        "    public Item(int p) {",
        "        price = p;",
        "    }",
        "    ",
        "    public int getPrice() {",
        "        return price;",
        "    }",
        "}",
        "",
        "class Main {",
        "    public static void main(String[] args) {",
        "        Item item = new Item(100);",
        "        System.out.println(item.getPrice());",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "`private` で外部からのアクセスを禁止します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["private", "public", "protected", "static"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "100\n"
        }
      ]
    }
  ]
};

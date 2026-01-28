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
            "title": "継承（けいしょう）とは？",
            "content": "# クラスを拡張（かくちょう）する\n\n**継承（けいしょう）** とは、すでにあるクラス（親クラス）の機能（きのう）を引き継いで新しいクラス（子クラス）を作る仕組みです。\n\n**たとえ話：** 親から子へ「目の色」や「髪の色」が受け継がれるように、プログラムでも親クラスの機能が子クラスに受け継がれます。\n\n`extends`（エクステンズ＝拡張する）というキーワードを使います。\n\n```java\nclass Animal {  // 親クラス（動物）\n    void eat() { System.out.println(\"食べる\"); }\n}\n\nclass Dog extends Animal {  // 子クラス（犬）はAnimalを継承\n    void bark() { System.out.println(\"ワン！\"); }\n}\n```"
          },
          {
            "title": "親クラスの機能を使う",
            "content": "# 継承した機能\n\n子クラスは親クラスのメソッドをそのまま使えます。犬（Dog）は動物（Animal）なので、「食べる」ことができますね！\n\n**コード例：**\n```java\nDog dog = new Dog();  // 犬を作る\ndog.eat();   // 親のメソッド → 「食べる」\ndog.bark();  // 自分のメソッド → 「ワン！」\n```\n\n**ポイント：** 子クラスは親の機能＋自分だけの機能を持てます。Dogは「食べる」も「ほえる」もできます！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "class Vehicle {\n    void move() {\n        System.out.println(\"Moving\");\n    }\n}\n\n// extends で Vehicle を継承する\nclass Car extends Vehicle {\n    void honk() {\n        System.out.println(\"Beep!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        // new でインスタンスを作成する\n        Car c = new Car();\n        // move メソッドを呼び出す\n        c.move();\n    }\n}",
        "holeyCode": "class Vehicle {\n    void move() {\n        System.out.println(\"Moving\");\n    }\n}\n\n// extends で Vehicle を継承する\nclass Car ___ Vehicle {\n    void honk() {\n        System.out.println(\"Beep!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        // new でインスタンスを作成する\n        Car c = ___ Car();\n        // move メソッドを呼び出す\n        c.___();\n    }\n}",
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
          "        // new でインスタンスを作成する",
          "        Car c = new Car();",
          "        // move メソッドを呼び出す",
          "        c.move();",
          "    }",
          "}"
        ],
        "lineHints": [
          "新しいクラス（Car）を定義します。",
          "`new` でインスタンスを作成します。",
          "`move` メソッドを呼び出します。",
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
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "extends",
            "implements",
            "super",
            "this",
            "new",
            "move"
          ]
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
            "content": "# メソッドを上書き（うわがき）\n\n**オーバーライド** とは、親クラスのメソッドを子クラスで書き換えることです。\n\n**たとえ話：** 動物は「音を出す」ことができますが、犬は「ワン！」、猫は「ニャー」と、動物の種類によって音が違いますよね。オーバーライドを使えば、子クラスごとに違う動きを定義できます。\n\n```java\nclass Animal {\n    void sound() { System.out.println(\"音\"); }\n}\n\nclass Cat extends Animal {\n    @Override  // ←「上書きするよ」という印\n    void sound() { System.out.println(\"ニャー\"); }\n}\n```"
          },
          {
            "title": "@Override アノテーション",
            "content": "# 明示的（めいじてき）に宣言\n\n`@Override`（アット・オーバーライド）は「このメソッドは親のメソッドを上書きしますよ」という印（しるし）です。\n\n**アノテーション** とは、プログラムに追加情報を与える「ふせん」のようなものです。\n\n**なぜ使うの？**\n- 間違いを防げます（スペルミスがあるとエラーで教えてくれる）\n- コードが読みやすくなります\n\n```java\nclass Cat extends Animal {\n    @Override  // 「これは上書きです」と宣言\n    void sound() {  // 親と同じメソッド名\n        System.out.println(\"ニャー\");\n    }\n}\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "class Shape {\n    void draw() {\n        System.out.println(\"Shape\");\n    }\n}\n\nclass Circle extends Shape {\n    // @Override でメソッドを上書き宣言する\n    @Override\n    void draw() {\n        System.out.println(\"Circle\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        // new でインスタンスを作成する\n        Circle c = new Circle();\n        // draw メソッドを呼び出す\n        c.draw();\n    }\n}",
        "holeyCode": "class Shape {\n    void draw() {\n        System.out.println(\"Shape\");\n    }\n}\n\nclass Circle extends Shape {\n    // @Override でメソッドを上書き宣言する\n    ___\n    void draw() {\n        System.out.println(\"Circle\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        // new でインスタンスを作成する\n        Circle c = ___ Circle();\n        // draw メソッドを呼び出す\n        c.___();\n    }\n}",
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
          "        // new でインスタンスを作成する",
          "        Circle c = new Circle();",
          "        // draw メソッドを呼び出す",
          "        c.draw();",
          "    }",
          "}"
        ],
        "lineHints": [
          "`@Override` アノテーションを使います。",
          "`new` でインスタンスを作成します。",
          "`draw` メソッドを呼び出します。",
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
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "@Override",
            "@override",
            "override",
            "@Overwrite",
            "new",
            "draw"
          ]
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
            "content": "# 契約（けいやく）を定義する\n\n**インターフェース** とは、クラスが持つべきメソッドの「約束事（やくそくごと）」を定義したものです。\n\n**たとえ話：** 「運転免許を持っている人は車を運転できる」という約束のようなものです。免許を持っている（implements）なら、運転できる（メソッドを持っている）ことが保証されます。\n\n`implements`（インプリメンツ＝実装する）で約束を守ります。\n\n```java\ninterface Drawable {  // 「描ける」という約束\n    void draw();  // このメソッドを持つこと！\n}\n\nclass Square implements Drawable {  // 約束を守ります！\n    public void draw() {  // 約束通りのメソッドを実装\n        System.out.println(\"四角形\");\n    }\n}\n```"
          },
          {
            "title": "複数のインターフェース",
            "content": "# 複数実装（じっそう）できる\n\nクラスは複数のインターフェースを実装できます。\n\n**たとえ話：** 一人の人が「運転免許」と「調理師免許」の両方を持てるように、クラスも複数の約束を守ることができます。\n\n```java\ninterface A { void a(); }  // 約束A\ninterface B { void b(); }  // 約束B\n\nclass C implements A, B {  // 両方の約束を守る\n    public void a() { }  // 約束Aを実装\n    public void b() { }  // 約束Bを実装\n}\n```\n\n**ポイント：** 継承（extends）は1つだけですが、インターフェース（implements）は何個でもOKです！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "interface Greeting {\n    void sayHello();\n}\n\n// implements でインターフェースを実装する\nclass Person implements Greeting {\n    public void sayHello() {\n        System.out.println(\"Hello!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        // new でインスタンスを作成する\n        Person p = new Person();\n        // sayHello メソッドを呼び出す\n        p.sayHello();\n    }\n}",
        "holeyCode": "interface Greeting {\n    void sayHello();\n}\n\n// implements でインターフェースを実装する\nclass Person ___ Greeting {\n    public void sayHello() {\n        System.out.println(\"Hello!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        // new でインスタンスを作成する\n        Person p = ___ Person();\n        // sayHello メソッドを呼び出す\n        p.___();\n    }\n}",
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
          "        // new でインスタンスを作成する",
          "        Person p = new Person();",
          "        // sayHello メソッドを呼び出す",
          "        p.sayHello();",
          "    }",
          "}"
        ],
        "lineHints": [
          "新しいクラス（Person）を定義します。",
          "`new` でインスタンスを作成します。",
          "`sayHello` メソッドを呼び出します。",
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
          "keywords": [
            "implements",
            "extends",
            "interface",
            "abstract",
            "new",
            "sayHello"
          ]
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
            "title": "抽象（ちゅうしょう）クラスとは？",
            "content": "# 未完成の設計図（せっけいず）\n\n**抽象クラス** は、`abstract`（アブストラクト＝抽象的な）をつけた「未完成のクラス」です。\n\n**たとえ話：** 「動物」は存在しますが、実際には「犬」「猫」「鳥」など具体的な動物がいますよね。「動物」自体を作ることはできないけど、「動物としての共通点」は定義できます。それが抽象クラスです。\n\n- 直接 new で作れない（実体がない）\n- 子クラスで完成させる\n\n```java\nabstract class Animal {  // 抽象クラス\n    abstract void sound();  // 「音を出す」は未定義\n    void sleep() { System.out.println(\"Zzz\"); }  // 「寝る」は定義済み\n}\n```"
          },
          {
            "title": "抽象メソッド",
            "content": "# 子クラスで実装必須（ひっす）\n\n**抽象メソッド** は中身のないメソッドです。子クラスで**必ず**実装しなければなりません。\n\n**たとえ話：** 「動物は音を出す」というルールだけ決めておいて、「どんな音か」は犬や猫に任せる、という感じです。\n\n```java\nclass Dog extends Animal {\n    void sound() {  // 必ず実装する！\n        System.out.println(\"ワン！\");\n    }\n}\n```\n\n**インターフェースとの違い：**\n- インターフェース：全部が約束（実装なし）\n- 抽象クラス：一部は完成、一部は約束"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// abstract で抽象クラスを定義する\nabstract class Animal {\n    abstract void speak();\n}\n\nclass Dog extends Animal {\n    void speak() {\n        System.out.println(\"Woof!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        // new でインスタンスを作成する\n        Dog d = new Dog();\n        // speak メソッドを呼び出す\n        d.speak();\n    }\n}",
        "holeyCode": "// abstract で抽象クラスを定義する\n___ class Animal {\n    abstract void speak();\n}\n\nclass Dog extends Animal {\n    void speak() {\n        System.out.println(\"Woof!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        // new でインスタンスを作成する\n        Dog d = ___ Dog();\n        // speak メソッドを呼び出す\n        d.___();\n    }\n}",
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
          "        // new でインスタンスを作成する",
          "        Dog d = new Dog();",
          "        // speak メソッドを呼び出す",
          "        d.speak();",
          "    }",
          "}"
        ],
        "lineHints": [
          null,
          "`abstract` キーワードを使います。",
          "`new` でインスタンスを作成します。",
          "`speak` メソッドを呼び出します。",
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
          "keywords": [
            "abstract",
            "interface",
            "virtual",
            "static",
            "new",
            "speak"
          ]
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
            "title": "例外（れいがい）とは？",
            "content": "# プログラムの問題\n\n**例外（れいがい）** とは、プログラム実行中に起きる「予期しない問題」のことです。\n\n**たとえ話：** 料理中に「砂糖がない！」と気づくようなものです。レシピ通りに進められなくなりますよね。\n\n```java\nint[] arr = {1, 2, 3};  // 3つしかデータがない\nSystem.out.println(arr[10]);  // 10番目？そんなのない！→例外！\n```\n\n例外が起きるとプログラムが止まってしまいます。でも、対処法があります！"
          },
          {
            "title": "try-catchで対処",
            "content": "# エラーをキャッチ\n\n**try-catch**（トライ・キャッチ）を使うと、例外をキャッチ（捕まえる）して対処できます。\n\n**たとえ話：** サーカスの網のように、落ちてきた（例外が起きた）ときに受け止めてくれます。\n\n```java\ntry {  // 「試してみる」ブロック\n    int result = 10 / 0;  // 0で割ると例外！\n} catch (Exception e) {  // 「捕まえる」ブロック\n    System.out.println(\"エラー発生\");  // 対処する\n}\n```\n\n**ポイント：** try の中で問題が起きたら、catch の中が実行されます"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "class Main {\n    public static void main(String[] args) {\n        // try で例外が起きる可能性のある処理を囲む\n        try {\n            // parseInt で文字列を整数に変換する\n            int x = Integer.parseInt(\"abc\");\n        } catch (Exception e) {\n            System.out.println(\"Error\");\n        }\n    }\n}",
        "holeyCode": "class Main {\n    public static void main(String[] args) {\n        // try で例外が起きる可能性のある処理を囲む\n        ___ {\n            // parseInt で文字列を整数に変換する\n            int x = Integer.___(\"abc\");\n        } catch (Exception e) {\n            System.out.println(\"Error\");\n        }\n    }\n}",
        "correctLines": [
          "class Main {",
          "    public static void main(String[] args) {",
          "        // try で例外が起きる可能性のある処理を囲む",
          "        try {",
          "            // parseInt で文字列を整数に変換する",
          "            int x = Integer.parseInt(\"abc\");",
          "        } catch (Exception e) {",
          "            System.out.println(\"Error\");",
          "        }",
          "    }",
          "}"
        ],
        "lineHints": [
          "エラーが発生する可能性のある処理をここから記述します。",
          "`parseInt` メソッドを使います。",
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
          "keywords": [
            "try",
            "catch",
            "throw",
            "finally",
            "parseInt"
          ]
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
            "title": "finally（ファイナリー）とは？",
            "content": "# 必ず実行される\n\n`finally`（ファイナリー＝最後に）ブロックは、例外が起きても起きなくても**必ず**実行されます。\n\n**たとえ話：** 料理が成功しても失敗しても、最後は必ずキッチンを片付けますよね。それが finally です。\n\n```java\ntry {\n    // 処理（うまくいくかも、失敗するかも）\n} catch (Exception e) {\n    // エラー処理（失敗したときだけ）\n} finally {\n    // 必ず実行（成功でも失敗でも）\n}\n```"
          },
          {
            "title": "リソースの解放に",
            "content": "# 後片付け処理\n\nファイルを閉じる、接続（せつぞく）を切断（せつだん）するなどの後片付けに使います。\n\n**たとえ話：** 本を読み終わったら本棚に戻す、電気を使ったら消す、というように「終わったら必ずやること」を書きます。\n\n```java\ntry {\n    // ファイルを開いて操作する\n} finally {\n    // ファイルを閉じる（必ず実行）\n    System.out.println(\"Clean up\");\n}\n```\n\n**ポイント：** finally があれば、エラーが起きても後片付けを忘れません！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "class Main {\n    public static void main(String[] args) {\n        try {\n            // println で出力する\n            System.out.println(\"Try\");\n        } catch (Exception e) {\n            System.out.println(\"Catch\");\n        // finally で必ず実行する\n        } finally {\n            System.out.println(\"Finally\");\n        }\n    }\n}",
        "holeyCode": "class Main {\n    public static void main(String[] args) {\n        try {\n            // println で出力する\n            System.out.___(\"Try\");\n        } catch (Exception e) {\n            System.out.println(\"Catch\");\n        // finally で必ず実行する\n        } ___ {\n            System.out.println(\"Finally\");\n        }\n    }\n}",
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
          "keywords": [
            "finally",
            "final",
            "finish",
            "end",
            "println"
          ]
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
            "title": "ArrayList（アレイリスト）とは？",
            "content": "# 可変長（かへんちょう）の配列\n\n**ArrayList** は、サイズを自由に変えられるリストです。\n\n**たとえ話：** 普通の配列は「固定サイズの本棚」で、本の数が決まっています。でもArrayListは「伸び縮みする本棚」で、本を増やしたり減らしたりできます！\n\n```java\nimport java.util.ArrayList;  // 道具を準備\n\nArrayList<String> list = new ArrayList<>();  // リストを作る\nlist.add(\"Apple\");   // リンゴを追加\nlist.add(\"Banana\");  // バナナを追加\n// 好きなだけ追加できる！\n```"
          },
          {
            "title": "基本操作（きほんそうさ）",
            "content": "# 追加・取得・削除\n\nArrayListでよく使うメソッドを覚えましょう！\n\n```java\nArrayList<Integer> nums = new ArrayList<>();\nnums.add(10);       // 追加 → [10]\nnums.add(20);       // 追加 → [10, 20]\nnums.get(0);        // 取得 → 10（0番目を取り出す）\nnums.remove(0);     // 削除 → [20]（0番目を消す）\nnums.size();        // サイズ → 1（今何個あるか）\n```\n\n**覚え方：**\n- `add`（アド）= 追加する\n- `get`（ゲット）= 取得する\n- `remove`（リムーブ）= 削除する\n- `size`（サイズ）= 大きさ"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "import java.util.ArrayList;\n\nclass Main {\n    public static void main(String[] args) {\n        // new でArrayListを作成する\n        ArrayList<String> items = new ArrayList<>();\n        // add で要素を追加する\n        items.add(\"A\");\n        // add で要素を追加する\n        items.add(\"B\");\n        // get で要素を取得する\n        System.out.println(items.get(0));\n    }\n}",
        "holeyCode": "import java.util.ArrayList;\n\nclass Main {\n    public static void main(String[] args) {\n        // new でArrayListを作成する\n        ArrayList<String> items = ___ ArrayList<>();\n        // add で要素を追加する\n        items.___(\"A\");\n        // add で要素を追加する\n        items.___(\"B\");\n        // get で要素を取得する\n        System.out.println(items.___(0));\n    }\n}",
        "correctLines": [
          "import java.util.ArrayList;",
          "",
          "class Main {",
          "    public static void main(String[] args) {",
          "        // new でArrayListを作成する",
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
          "`new` でインスタンスを作成します。",
          "`add` メソッドで要素を追加します。",
          "`add` メソッドで要素を追加します。",
          "`get` メソッドで要素を取得します。",
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
          "functions": [
            "add",
            "push",
            "append",
            "insert",
            "new",
            "get"
          ]
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
            "title": "拡張for文（かくちょうフォーぶん）とは？",
            "content": "# 簡単な繰り返し\n\n**拡張for文** を使うと、配列やリストの全部の要素を簡単に処理できます。\n\n**たとえ話：** 「このカゴの中の果物を**全部**洗ってください」というように、「全部を順番に処理する」ときに使います。\n\n```java\nint[] nums = {1, 2, 3};\nfor (int n : nums) {  // 「numsの中の各nについて」\n    System.out.println(n);  // 1, 2, 3 が順番に表示される\n}\n```\n\n**読み方：** `:`（コロン）は「〜の中から」と読みましょう"
          },
          {
            "title": "ArrayListでも使える",
            "content": "# コレクションを処理\n\n拡張for文は ArrayList（アレイリスト）でも同じように使えます！\n\n```java\nArrayList<String> items = new ArrayList<>();\nitems.add(\"A\");\nitems.add(\"B\");\n\nfor (String item : items) {  // itemsの中の各itemについて\n    System.out.println(item);  // A, B が順番に表示\n}\n```\n\n**ポイント：** 配列でもArrayListでも、書き方は同じです。便利ですね！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "class Main {\n    public static void main(String[] args) {\n        // 配列を初期化する\n        String[] colors = {\"R\", \"G\", \"B\"};\n        // : で配列から順番に取り出す\n        for (String c : colors) {\n            // println で出力する\n            System.out.println(c);\n        }\n    }\n}",
        "holeyCode": "class Main {\n    public static void main(String[] args) {\n        // 配列を初期化する\n        String[] colors = {\"___\", \"G\", \"B\"};\n        // : で配列から順番に取り出す\n        for (String c ___ colors) {\n            // println で出力する\n            System.out.___(c);\n        }\n    }\n}",
        "correctLines": [
          "class Main {",
          "    public static void main(String[] args) {",
          "        // 配列を初期化する",
          "        String[] colors = {\"R\", \"G\", \"B\"};",
          "        // : で配列から順番に取り出す",
          "        for (String c : colors) {",
          "            // println で出力する",
          "            System.out.println(c);",
          "        }",
          "    }",
          "}"
        ],
        "lineHints": [
          "配列の最初の要素を入力します。",
          "指定された回数や範囲で、繰り返し処理（ループ）を行います。",
          null,
          "変数の値をコンソールに出力し、改行します。",
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "operators": [
            ":",
            "in",
            "of",
            "->",
            "R",
            "println"
          ]
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
            "title": "static（スタティック）とは？",
            "content": "# クラスに属するメソッド\n\n**static**（スタティック＝静的な）メソッドは、インスタンス（実体）を作らなくても呼び出せるメソッドです。\n\n**たとえ話：** 普通のメソッドは「犬を飼ってから、その犬にお座りさせる」イメージ。staticメソッドは「犬を飼わなくても使える共通の技」のようなものです。\n\n```java\nclass Math {\n    static int add(int a, int b) {  // staticメソッド\n        return a + b;\n    }\n}\n\nMath.add(3, 5);  // newしなくても呼べる！→ 8\n```"
          },
          {
            "title": "staticの特徴（とくちょう）",
            "content": "# ユーティリティに便利\n\n**ユーティリティ**（便利ツール）をまとめるのに使います。みんなで共有する道具箱のようなものです。\n\n```java\nclass Utils {\n    static String upper(String s) {  // 大文字に変換\n        return s.toUpperCase();\n    }\n}\n\nUtils.upper(\"hello\");  // \"HELLO\"\n```\n\n**いつ使う？**\n- 計算だけするメソッド（足し算、引き算など）\n- 文字列を変換するメソッド\n- 共通で使う便利機能"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "class Calculator {\n    // static でクラスメソッドを定義する\n    static int multiply(int a, int b) {\n        // return で値を返す\n        return a * b;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        // multiply メソッドを呼び出す\n        int result = Calculator.multiply(4, 5);\n        // println で出力する\n        System.out.println(result);\n    }\n}",
        "holeyCode": "class Calculator {\n    // static でクラスメソッドを定義する\n    ___ int multiply(int a, int b) {\n        // return で値を返す\n        ___ a * b;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        // multiply メソッドを呼び出す\n        int result = Calculator.___(4, 5);\n        // println で出力する\n        System.out.___(result);\n    }\n}",
        "correctLines": [
          "class Calculator {",
          "    // static でクラスメソッドを定義する",
          "    static int multiply(int a, int b) {",
          "        // return で値を返す",
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
          "`static` キーワードを使います。",
          null,
          "`return` で値を返します。",
          null,
          "`multiply` メソッドを呼び出します。",
          "変数の値をコンソールに出力し、改行します。",
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
          "keywords": [
            "static",
            "public",
            "private",
            "final",
            "return",
            "multiply",
            "println"
          ]
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
            "title": "アクセス修飾子（しゅうしょくし）とは？",
            "content": "# 公開範囲（こうかいはんい）を制御\n\n**アクセス修飾子** は、「誰がこのデータを見れるか」を決めるキーワードです。\n\n**たとえ話：** 日記帳には「自分だけの秘密」があって、友達には見せませんよね。プログラムでも「見せていい情報」と「秘密にしたい情報」を分けられます。\n\n- `public`（パブリック）: 誰でもアクセスOK\n- `private`（プライベート）: 自分のクラスだけ\n- `protected`（プロテクテッド）: 子クラスもOK\n\n```java\nclass User {\n    public String name;   // 誰でも見れる\n    private int id;       // 秘密！\n}\n```"
          },
          {
            "title": "カプセル化（かぷせるか）",
            "content": "# データを守る\n\n**カプセル化** とは、大事なデータを `private` で隠して、メソッド経由でアクセスする方法です。\n\n**たとえ話：** 銀行口座の残高は直接変更できません。必ず「入金」「出金」という手続き（メソッド）を通しますよね。それがカプセル化です。\n\n```java\nclass User {\n    private String name;  // 直接触れないようにする\n    \n    public String getName() {  // 取得用のメソッド\n        return name;\n    }\n}\n```\n\n**メリット：** データを勝手に変更されるのを防げます"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "class Item {\n    // private でフィールドを隠蔽する\n    private int price;\n    \n    public Item(int p) {\n        // price に値を代入する\n        price = p;\n    }\n    \n    public int getPrice() {\n        // return で値を返す\n        return price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        // new でインスタンスを作成する\n        Item item = new Item(100);\n        // getPrice メソッドを呼び出す\n        System.out.println(item.getPrice());\n    }\n}",
        "holeyCode": "class Item {\n    // private でフィールドを隠蔽する\n    ___ int price;\n    \n    public Item(int p) {\n        // price に値を代入する\n        ___ = p;\n    }\n    \n    public int getPrice() {\n        // return で値を返す\n        ___ price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        // new でインスタンスを作成する\n        Item item = ___ Item(100);\n        // getPrice メソッドを呼び出す\n        System.out.println(item.___());\n    }\n}",
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
          "        // return で値を返す",
          "        return price;",
          "    }",
          "}",
          "",
          "class Main {",
          "    public static void main(String[] args) {",
          "        // new でインスタンスを作成する",
          "        Item item = new Item(100);",
          "        // getPrice メソッドを呼び出す",
          "        System.out.println(item.getPrice());",
          "    }",
          "}"
        ],
        "lineHints": [
          "`private` で外部からのアクセスを禁止します。",
          null,
          "`price` に値を代入します。",
          "変数の値を呼び出し元に返します（戻り値）。",
          "`new` でインスタンスを作成します。",
          null,
          "`getPrice` メソッドを呼び出します。",
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
          "keywords": [
            "private",
            "public",
            "protected",
            "static",
            "price",
            "return",
            "new",
            "getPrice"
          ]
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

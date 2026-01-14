export const javaData4 = {
  "language": "java",
  "lessonId": "java-4",
  "lessonTitle": "Java IV - ジェネリクスとコレクション",
  "lessonDescription": "Javaのジェネリクスとコレクションの高度な使い方を学びます。型安全なコードを書くための重要な概念を身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 4,
  "exercises": [
    {
      "title": "ジェネリクスの基本",
      "description": "型パラメータを使った汎用的なクラスを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "ジェネリクスとは？",
          "image": "/illustrations/3d_advanced/generics_glass.png",
          "content": "# 型を後から指定\n\n**ジェネリクス** は、クラスやメソッドの「型」を後から指定できる機能です。\n\n**たとえ話：** 「何でも入る箱」を作っておいて、使うときに「この箱は文字列専用」「この箱は数字専用」と決められます。\n\n```java\n// T は「型の入れ物」（後で決める）\nclass Box<T> {\n    private T value;  // T型の値を保存\n    public void set(T v) { value = v; }\n    public T get() { return value; }\n}\n```\n\n`<T>` は「型パラメータ」と呼ばれ、後で String や Integer に置き換えます"
        },
        {
          "title": "使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# 型を指定して使う\n\n使うときに `<>` の中に具体的な型を書きます。\n\n**文字列用の箱**\n```java\nBox<String> box = new Box<>();  // String専用の箱\nbox.set(\"Hello\");  // 文字列を入れる\nString s = box.get();  // 文字列で取り出せる（キャスト不要！）\n```\n\n**数字用の箱**\n```java\nBox<Integer> numBox = new Box<>();  // Integer専用の箱\nnumBox.set(42);  // 数字を入れる\n```\n\n**メリット：** 間違った型を入れようとするとエラーで教えてくれます"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\n\n// <T> で型パラメータを定義する\nclass Box<T> {\n    private T value;\n    public void set(T v) { value = v; }\n    public T get() { return value; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // new でインスタンスを作成する\n        Box<String> box = new Box<>();\n        // set で値を設定する\n        box.set(\"Java\");\n        // get で値を取得して出力する\n        System.out.println(box.get());\n    }\n}",
      "holeyCode": "import java.util.*;\n\n// <T> で型パラメータを定義する\nclass Box___T___ {\n    private T value;\n    public void set(T v) { value = v; }\n    public T get() { return value; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // new でインスタンスを作成する\n        Box<String> box = ___ Box<>();\n        // set で値を設定する\n        box.___(\"Java\");\n        // get で値を取得して出力する\n        System.out.println(box.___());\n    }\n}",
      "correctLines": [
        "import java.util.*;",
        "",
        "class Box<T> {",
        "    private T value;",
        "    public void set(T v) { value = v; }",
        "    public T get() { return value; }",
        "}",
        "",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        Box<String> box = new Box<>();",
        "        box.set(\"Java\");",
        "        System.out.println(box.get());",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "<T> で型パラメータを定義します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "`new` でインスタンスを作成します。",
        null,
        "`set` で値を設定します。",
        null,
        "`get` で値を取得します。",
        null,
        null
      ],
      "candidates": {
        "operators": ["<", ">", "new", "set", "get"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Java\n"
        }
      ]
    },
    {
      "title": "境界型パラメータ",
      "description": "型パラメータに制約を設ける方法を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "extends で制約（せいやく）",
          "image": "/illustrations/3d_advanced/inheritance.png",
          "content": "# 特定の型のサブタイプに限定\n\n**extends** を使うと、「このジェネリクスには〇〇の仲間だけ入れられます」という制限をつけられます。\n\n**たとえ話：** 「動物園の檻」には動物しか入れられないように、「Number（数字）の箱」には数字系の型しか入れられません。\n\n```java\n// T は Number か、その子クラスだけOK\nclass NumBox<T extends Number> {\n    private T value;\n    public double doubleValue() {\n        return value.doubleValue();  // Numberのメソッドが使える！\n    }\n}\n```"
        },
        {
          "title": "メリット",
          "image": "/illustrations/3d/gear.png",
          "content": "# 型固有（かたこゆう）のメソッドが使える\n\n制限をつけると、その型のメソッドが使えるようになります。\n\n**OKな例**\n```java\nNumBox<Integer> box = new NumBox<>();\n// OK: Integer は Number の仲間\n```\n\n**NGな例**\n```java\nNumBox<String> box2; \n// コンパイルエラー！Stringは数字じゃない\n```\n\n**メリット：**\n- 間違った型を入れるのを防げる\n- Number系のメソッド（doubleValue など）が使える"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// extends で型の上限を Number に制限する\nclass Calculator<T extends Number> {\n    private T value;\n    public Calculator(T v) { value = v; }\n    public double getDouble() { return value.doubleValue(); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // new でインスタンスを作成する\n        Calculator<Integer> calc = new Calculator<>(42);\n        // getDouble メソッドを呼び出す\n        System.out.println(calc.getDouble());\n    }\n}",
      "holeyCode": "// extends で型の上限を Number に制限する\nclass Calculator<T ___ Number> {\n    private T value;\n    public Calculator(T v) { value = v; }\n    public double getDouble() { return value.doubleValue(); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // new でインスタンスを作成する\n        Calculator<Integer> calc = ___ Calculator<>(42);\n        // getDouble メソッドを呼び出す\n        System.out.println(calc.___());\n    }\n}",
      "correctLines": [
        "class Calculator<T extends Number> {",
        "    private T value;",
        "    public Calculator(T v) { value = v; }",
        "    public double getDouble() { return value.doubleValue(); }",
        "}",
        "",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        Calculator<Integer> calc = new Calculator<>(42);",
        "        System.out.println(calc.getDouble());",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        "`extends` で型の上限を指定します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "`new` でインスタンスを作成します。",
        null,
        "`getDouble` メソッドを呼び出します。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["extends", "implements", "super", "new", "getDouble"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "42.0\n"
        }
      ]
    },
    {
      "title": "ワイルドカード",
      "description": "不明な型を表すワイルドカードを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "? ワイルドカードとは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 不明な型を表す\n\n**?**（クエスチョンマーク）は「どんな型でもOK」を表す特別な記号です。これを **ワイルドカード** と呼びます。\n\n**たとえ話：** トランプのジョーカーのように、どんなカードの代わりにもなれます。\n\n```java\n// どんな型のリストも受け取れるメソッド\npublic void printList(List<?> list) {\n    for (Object o : list) {\n        System.out.println(o);\n    }\n}\n```\n\nこのメソッドは `List<String>` でも `List<Integer>` でも受け取れます！"
        },
        {
          "title": "境界付きワイルドカード",
          "image": "/illustrations/3d/gear.png",
          "content": "# 上限・下限の指定\n\nワイルドカードにも制限をつけられます。\n\n**上限（じょうげん）を指定：extends**\n```java\nList<? extends Number>  // Numberか、その子クラス\n// Integer, Double などはOK、StringはNG\n```\n\n**下限（かげん）を指定：super**\n```java\nList<? super Integer>  // Integerか、その親クラス\n// Integer, Number, Object などがOK\n```\n\n**覚え方：**\n- extends → 「〜以下」（Numberから下）\n- super → 「〜以上」（Integerから上）"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\n\npublic class Main {\n    // ? で任意の型を表すワイルドカード\n    public static void printAll(List<?> list) {\n        for (Object item : list) {\n            // println で出力する\n            System.out.println(item);\n        }\n    }\n    public static void main(String[] args) {\n        // asList でリストを作成する\n        List<String> names = Arrays.asList(\"A\", \"B\");\n        // printAll メソッドを呼び出す\n        printAll(names);\n    }\n}",
      "holeyCode": "import java.util.*;\n\npublic class Main {\n    // ? で任意の型を表すワイルドカード\n    public static void printAll(List<___> list) {\n        for (Object item : list) {\n            // println で出力する\n            System.out.___(item);\n        }\n    }\n    public static void main(String[] args) {\n        // asList でリストを作成する\n        List<String> names = Arrays.___(\"A\", \"B\");\n        // printAll メソッドを呼び出す\n        ___(names);\n    }\n}",
      "correctLines": [
        "import java.util.*;",
        "",
        "public class Main {",
        "    public static void printAll(List<?> list) {",
        "        for (Object item : list) {",
        "            System.out.println(item);",
        "        }",
        "    }",
        "    public static void main(String[] args) {",
        "        List<String> names = Arrays.asList(\"A\", \"B\");",
        "        printAll(names);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "`?` で任意の型を表します。",
        null,
        null,
        "`println` で出力します。",
        null,
        null,
        null,
        "`asList` でリストを作成します。",
        null,
        "`printAll` メソッドを呼び出します。",
        null,
        null
      ],
      "candidates": {
        "symbols": ["?", "*", "T", "println", "asList", "printAll"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "A\nB\n"
        }
      ]
    },
    {
      "title": "Map の基本操作",
      "description": "キーと値のペアを扱うMapを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "Map（マップ）とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# キーと値の対応（たいおう）\n\n**Map**（マップ＝対応表）は、「キー（名前）」と「値（データ）」のペアを保存できるデータ構造です。\n\n**たとえ話：** 電話帳のようなものです。「名前」で検索すると「電話番号」が分かりますよね。それがMapです。\n\n```java\nMap<String, Integer> ages = new HashMap<>();  // 電話帳を作る\nages.put(\"Alice\", 25);  // Aliceの年齢は25\nages.put(\"Bob\", 30);    // Bobの年齢は30\n\nint age = ages.get(\"Alice\"); // Aliceで検索→25が返る\n```"
        },
        {
          "title": "便利なメソッド",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# よく使うメソッド\n\nMapにはたくさん便利なメソッドがあります。\n\n**キーがあるかチェック**\n```java\nages.containsKey(\"Alice\"); // true（Aliceはいる）\n```\n\n**なければデフォルト値を使う**\n```java\nages.getOrDefault(\"Carol\", 0); // Carolがいないので0を返す\n```\n\n**全部のキー・値を取得**\n```java\nages.keySet(); // [Alice, Bob]（全ての名前）\nages.values(); // [25, 30]（全ての年齢）\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // new で HashMap を作成する\n        Map<String, Integer> scores = new HashMap<>();\n        // put でキーと値を追加する\n        scores.put(\"Math\", 90);\n        // put でキーと値を追加する\n        scores.put(\"English\", 85);\n        // get で値を取得する\n        System.out.println(scores.get(\"Math\"));\n    }\n}",
      "holeyCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // new で HashMap を作成する\n        Map<String, Integer> scores = ___ HashMap<>();\n        // put でキーと値を追加する\n        scores.___(\"Math\", 90);\n        // put でキーと値を追加する\n        scores.___(\"English\", 85);\n        // get で値を取得する\n        System.out.println(scores.___(\"Math\"));\n    }\n}",
      "correctLines": [
        "import java.util.*;",
        "",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        Map<String, Integer> scores = new HashMap<>();",
        "        scores.put(\"Math\", 90);",
        "        scores.put(\"English\", 85);",
        "        System.out.println(scores.get(\"Math\"));",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "`new` で HashMap を作成します。",
        null,
        "`put` でキーと値を追加します。",
        null,
        "`put` でキーと値を追加します。",
        null,
        "`get` で値を取得します。",
        null,
        null
      ],
      "candidates": {
        "methods": ["put", "set", "add", "new", "get"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "90\n"
        }
      ]
    },
    {
      "title": "Map のイテレーション",
      "description": "Mapの全要素を走査する方法を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "entrySet（エントリーセット）",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# キーと値のセットを取得\n\n**entrySet** を使うと、Mapの全てのペア（キーと値のセット）を順番に取り出せます。\n\n**たとえ話：** 電話帳の全ページをめくりながら、「名前と電話番号」を一組ずつ読み上げるイメージです。\n\n```java\nfor (Map.Entry<String, Integer> e : map.entrySet()) {\n    // getKey()でキー、getValue()で値を取得\n    System.out.println(e.getKey() + \": \" + e.getValue());\n}\n// Alice: 25\n// Bob: 30\n```"
        },
        {
          "title": "forEach メソッド",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# Java 8以降の書き方\n\nもっと短く書けるforEachメソッドもあります。ラムダ式と組み合わせて使います。\n\n```java\nmap.forEach((key, value) -> {\n    System.out.println(key + \": \" + value);\n});\n```\n\n**何をしているの？**\n- 「keyとvalueを受け取って、それを表示する」という処理を全ペアに対して実行します\n\n**どちらを使う？**\n- entrySet：古いJavaでも動く\n- forEach：短くて読みやすい（Java 8以降）"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // new で HashMap を作成する\n        Map<String, Integer> map = new HashMap<>();\n        // put でキーと値を追加する\n        map.put(\"A\", 1);\n        // put でキーと値を追加する\n        map.put(\"B\", 2);\n        // entrySet でエントリを取得する\n        for (Map.Entry<String, Integer> e : map.entrySet()) {\n            // getKey でキーを取得する\n            System.out.println(e.getKey());\n        }\n    }\n}",
      "holeyCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // new で HashMap を作成する\n        Map<String, Integer> map = ___ HashMap<>();\n        // put でキーと値を追加する\n        map.___(\"A\", 1);\n        // put でキーと値を追加する\n        map.___(\"B\", 2);\n        // entrySet でエントリを取得する\n        for (Map.Entry<String, Integer> e : map.___()) {\n            // getKey でキーを取得する\n            System.out.println(e.___());\n        }\n    }\n}",
      "correctLines": [
        "import java.util.*;",
        "",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        Map<String, Integer> map = new HashMap<>();",
        "        map.put(\"A\", 1);",
        "        map.put(\"B\", 2);",
        "        for (Map.Entry<String, Integer> e : map.entrySet()) {",
        "            System.out.println(e.getKey());",
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
        "`new` で HashMap を作成します。",
        null,
        "`put` でキーと値を追加します。",
        null,
        "`put` でキーと値を追加します。",
        null,
        "`entrySet` でエントリを取得します。",
        null,
        "`getKey` でキーを取得します。",
        null,
        null
      ],
      "candidates": {
        "methods": ["entrySet", "keySet", "values", "new", "put", "getKey"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "A\nB\n"
        }
      ]
    },
    {
      "title": "Comparator",
      "description": "カスタムの比較ロジックを定義しましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "Comparator（コンパレーター）とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 比較のルールを定義\n\n**Comparator**（コンパレーター＝比較する人）は、「どうやって並べ替えるか」のルールを決めるものです。\n\n**たとえ話：** 本を並べるとき、「タイトル順」「著者順」「出版年順」など、いろんな並べ方がありますよね。Comparatorで「どの基準で並べるか」を指定します。\n\n```java\nList<String> list = Arrays.asList(\"bb\", \"a\", \"ccc\");\nlist.sort(Comparator.comparing(String::length));\n// 結果: [a, bb, ccc] - 文字列の長さ順に！\n```"
        },
        {
          "title": "便利なメソッド",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# Comparatorの作成方法\n\nいろいろな比較方法を簡単に作れます。\n\n**自然順序（しぜんじゅんじょ）**\n```java\nComparator.naturalOrder()  // あいうえお順、数字なら小さい順\n```\n\n**逆順（ぎゃくじゅん）**\n```java\nComparator.reverseOrder()  // 自然順序の逆\n```\n\n**特定の値で比較**\n```java\nComparator.comparing(Person::getName)  // 名前で比較\nComparator.comparing(Person::getAge)   // 年齢で比較\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // new と asList でリストを作成する\n        List<String> words = new ArrayList<>(Arrays.asList(\"cat\", \"a\", \"elephant\"));\n        // comparing でプロパティを基準に比較する\n        words.sort(Comparator.comparing(String::length));\n        // println で出力する\n        System.out.println(words);\n    }\n}",
      "holeyCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // new と asList でリストを作成する\n        List<String> words = ___ ArrayList<>(Arrays.___(\"cat\", \"a\", \"elephant\"));\n        // comparing でプロパティを基準に比較する\n        words.sort(Comparator.___(String::length));\n        // println で出力する\n        System.out.___(words);\n    }\n}",
      "correctLines": [
        "import java.util.*;",
        "",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        List<String> words = new ArrayList<>(Arrays.asList(\"cat\", \"a\", \"elephant\"));",
        "        words.sort(Comparator.comparing(String::length));",
        "        System.out.println(words);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "`new` と `asList` でリストを作成します。",
        null,
        "`comparing` でプロパティを基準に比較します。",
        null,
        "`println` で出力します。",
        null,
        null
      ],
      "candidates": {
        "methods": ["comparing", "compare", "compareTo", "new", "asList", "println"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[a, cat, elephant]\n"
        }
      ]
    },
    {
      "title": "Comparable の実装",
      "description": "自然順序を定義するComparableを実装しましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "Comparable（コンパラブル）とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 自然順序（しぜんじゅんじょ）の定義\n\n**Comparable**（コンパラブル＝比較可能な）を実装すると、オブジェクトに「自然な並び順」を定義できます。\n\n**たとえ話：** 数字には「1<2<3」という自然な順番があるように、自分で作ったクラスにも「この順番で並べてね」と教えられます。\n\n```java\nclass Person implements Comparable<Person> {\n    String name;\n    public int compareTo(Person other) {\n        // 名前のあいうえお順で比較\n        return this.name.compareTo(other.name);\n    }\n}\n```"
        },
        {
          "title": "compareTo のルール",
          "image": "/illustrations/3d/gear.png",
          "content": "# 戻り値（もどりち）の意味\n\n`compareTo` メソッドは、比較結果を数字で返します。\n\n**ルール：**\n- `this < other` → マイナスの数を返す（自分が先）\n- `this == other` → 0を返す（同じ順番）\n- `this > other` → プラスの数を返す（相手が先）\n\n**例：年齢で比較する場合**\n```java\nreturn this.age - other.age;\n// 25 - 30 = -5 （マイナス→自分が先）\n// 30 - 30 = 0  （0→同じ）\n// 35 - 30 = 5  （プラス→相手が先）\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\n\n// Comparable を実装して自然順序を定義する\nclass Score implements Comparable<Score> {\n    int value;\n    Score(int v) { value = v; }\n    public int compareTo(Score other) {\n        // return で比較結果を返す\n        return this.value - other.value;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // asList でリストを作成する\n        List<Score> scores = Arrays.asList(new Score(80), new Score(60));\n        // sort でソートする\n        Collections.sort(scores);\n        // get で要素を取得する\n        System.out.println(scores.get(0).value);\n    }\n}",
      "holeyCode": "import java.util.*;\n\n// Comparable を実装して自然順序を定義する\nclass Score implements ___<Score> {\n    int value;\n    Score(int v) { value = v; }\n    public int compareTo(Score other) {\n        // return で比較結果を返す\n        ___ this.value - other.value;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // asList でリストを作成する\n        List<Score> scores = Arrays.___(new Score(80), new Score(60));\n        // sort でソートする\n        Collections.___(scores);\n        // get で要素を取得する\n        System.out.println(scores.___(0).value);\n    }\n}",
      "correctLines": [
        "import java.util.*;",
        "",
        "class Score implements Comparable<Score> {",
        "    int value;",
        "    Score(int v) { value = v; }",
        "    public int compareTo(Score other) {",
        "        return this.value - other.value;",
        "    }",
        "}",
        "",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        List<Score> scores = Arrays.asList(new Score(80), new Score(60));",
        "        Collections.sort(scores);",
        "        System.out.println(scores.get(0).value);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "`Comparable` を実装して自然順序を定義します。",
        null,
        null,
        null,
        null,
        "`return` で比較結果を返します。",
        null,
        null,
        null,
        null,
        "`asList` でリストを作成します。",
        null,
        "`sort` でソートします。",
        null,
        "`get` で要素を取得します。",
        null,
        null
      ],
      "candidates": {
        "interfaces": ["Comparable", "Comparator", "Sortable", "return", "asList", "sort", "get"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "60\n"
        }
      ]
    },
    {
      "title": "Enum の定義",
      "description": "列挙型Enumを定義して使いましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "Enum（イーナム）とは？",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 固定の値の集合（しゅうごう）\n\n**Enum**（イーナム＝列挙型・れっきょがた）は、「決まった選択肢」を定義するものです。\n\n**たとえ話：** 信号機の色は「赤・黄・青」の3つだけですよね。それ以外はありません。Enumはこのように「限られた選択肢」を表します。\n\n```java\nenum Color {  // 色の選択肢を定義\n    RED, GREEN, BLUE  // 赤、緑、青の3つだけ\n}\n\nColor c = Color.RED;  // 赤を選択\n```"
        },
        {
          "title": "Enum のメリット",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 型安全（かたあんぜん）で明確\n\nEnumを使うと、間違った値を入れることができなくなります。\n\n**switch文で使える**\n```java\nswitch (color) {\n    case RED: System.out.println(\"赤\"); break;\n    case GREEN: System.out.println(\"緑\"); break;\n    case BLUE: System.out.println(\"青\"); break;\n}\n```\n\n**全ての値を取得**\n```java\nColor.values()  // [RED, GREEN, BLUE]\n```\n\n**メリット：** 「PURPRE」のようなタイプミスがあるとエラーになるので、間違いを防げます！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// enum で列挙型を定義する\nenum Day {\n    MON, TUE, WED, THU, FRI, SAT, SUN\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // Day.MON で列挙値を取得する\n        Day today = Day.MON;\n        // println で出力する\n        System.out.println(today);\n    }\n}",
      "holeyCode": "// enum で列挙型を定義する\n___ Day {\n    MON, TUE, WED, THU, FRI, SAT, SUN\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // Day.MON で列挙値を取得する\n        Day today = Day.___;\n        // println で出力する\n        System.out.___(today);\n    }\n}",
      "correctLines": [
        "enum Day {",
        "    MON, TUE, WED, THU, FRI, SAT, SUN",
        "}",
        "",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        Day today = Day.MON;",
        "        System.out.println(today);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        "`enum` で列挙型を定義します。",
        null,
        null,
        null,
        null,
        null,
        "`MON` で列挙値を取得します。",
        null,
        "`println` で出力します。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["enum", "class", "interface", "MON", "println"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "MON\n"
        }
      ]
    },
    {
      "title": "Queue の使い方",
      "description": "先入れ先出しのキューを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "Queue（キュー）とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 先入れ先出し（FIFO：ファイフォー）\n\n**Queue**（キュー＝待ち行列）は、「最初に入れたものが最初に出る」データ構造です。\n\n**たとえ話：** 遊園地のアトラクションの行列のようなものです。先に並んだ人が先に乗れますよね。これを**FIFO**（First In, First Out＝先入れ先出し）と言います。\n\n```java\nQueue<String> queue = new LinkedList<>();  // 行列を作る\nqueue.offer(\"A\");  // Aが並ぶ\nqueue.offer(\"B\");  // Bが並ぶ\nqueue.poll();      // Aが出る（先に並んだから）\n```"
        },
        {
          "title": "主なメソッド",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# よく使うメソッド\n\n**offer（オファー）：列に追加**\n```java\noffer(e)  // 列の最後に並ぶ\n```\n\n**poll（ポール）：先頭を取り出す**\n```java\npoll()    // 列の先頭から出る（空ならnull）\n```\n\n**peek（ピーク）：先頭を見る（出ない）**\n```java\npeek()    // 次は誰？と確認するだけ（列からは出ない）\n```\n\n**覚え方：** 行列に並ぶ(offer)→出る(poll)→確認する(peek)"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // new で LinkedList を作成する\n        Queue<String> queue = new LinkedList<>();\n        // offer でキューに要素を追加する\n        queue.offer(\"First\");\n        // offer でキューに要素を追加する\n        queue.offer(\"Second\");\n        // poll で要素を取り出す\n        System.out.println(queue.poll());\n    }\n}",
      "holeyCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // new で LinkedList を作成する\n        Queue<String> queue = ___ LinkedList<>();\n        // offer でキューに要素を追加する\n        queue.___(\"First\");\n        // offer でキューに要素を追加する\n        queue.___(\"Second\");\n        // poll で要素を取り出す\n        System.out.println(queue.___());\n    }\n}",
      "correctLines": [
        "import java.util.*;",
        "",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        Queue<String> queue = new LinkedList<>();",
        "        queue.offer(\"First\");",
        "        queue.offer(\"Second\");",
        "        System.out.println(queue.poll());",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "`new` で LinkedList を作成します。",
        null,
        "`offer` でキューに要素を追加します。",
        null,
        "`offer` でキューに要素を追加します。",
        null,
        "`poll` で要素を取り出します。",
        null,
        null
      ],
      "candidates": {
        "methods": ["offer", "add", "push", "new", "poll"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "First\n"
        }
      ]
    },
    {
      "title": "Deque の使い方",
      "description": "両端キューDequeを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "Deque（デック）とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 両端（りょうたん）から操作できるキュー\n\n**Deque**（デック＝Double-Ended Queue）は、先頭からも末尾からも追加・削除ができるキューです。\n\n**たとえ話：** 両開きドアのある電車のようなものです。前からも後ろからも乗り降りできます！\n\n```java\nDeque<String> deque = new ArrayDeque<>();  // 両開きキューを作る\ndeque.addFirst(\"A\");  // 先頭に追加\ndeque.addLast(\"B\");   // 末尾に追加\n```"
        },
        {
          "title": "スタックとしても使える",
          "image": "/illustrations/3d/gear.png",
          "content": "# 後入れ先出し（LIFO：ライフォー）\n\nDequeは**スタック**としても使えます。「最後に入れたものが最初に出る」構造です。\n\n**たとえ話：** お皿を積み重ねたイメージです。最後に置いたお皿が一番上にあるので、最初に取れますよね。\n\n```java\nDeque<Integer> stack = new ArrayDeque<>();\nstack.push(1);  // 1を積む\nstack.push(2);  // 2を積む（1の上に）\nstack.pop();    // 2を取り出す（一番上だから）\n```\n\n**覚え方：**\n- Queue（キュー）→ FIFO（先入れ先出し）：行列\n- Stack（スタック）→ LIFO（後入れ先出し）：積み重ね"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // new で ArrayDeque を作成する\n        Deque<Integer> stack = new ArrayDeque<>();\n        // push でスタックに積む\n        stack.push(10);\n        // push でスタックに積む\n        stack.push(20);\n        // pop でスタックから取り出す\n        System.out.println(stack.pop());\n    }\n}",
      "holeyCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // new で ArrayDeque を作成する\n        Deque<Integer> stack = ___ ArrayDeque<>();\n        // push でスタックに積む\n        stack.___(10);\n        // push でスタックに積む\n        stack.___(20);\n        // pop でスタックから取り出す\n        System.out.println(stack.___());\n    }\n}",
      "correctLines": [
        "import java.util.*;",
        "",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        Deque<Integer> stack = new ArrayDeque<>();",
        "        stack.push(10);",
        "        stack.push(20);",
        "        System.out.println(stack.pop());",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "`new` で ArrayDeque を作成します。",
        null,
        "`push` でスタックに積みます。",
        null,
        "`push` でスタックに積みます。",
        null,
        "`pop` でスタックから取り出します。",
        null,
        null
      ],
      "candidates": {
        "methods": ["push", "add", "offer", "new", "pop"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "20\n"
        }
      ]
    }
  ]
}

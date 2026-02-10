export const javaData4 = {
  "language": "java",
  "lessonId": "java-4",
  "lessonTitle": "Java IV - ジェネリクスとコレクション",
  "lessonDescription": "Javaのジェネリクスとコレクションの高度な使い方を学びます。型安全なコードを書くための重要な概念を身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 4,
  "tutorialSlides": [
    { "title": "ジェネリクスとは？", "content": "# 型を後から指定\\n\\n**ジェネリクス**は、クラスやメソッドの「型」を後から指定できる機能です。\\n\\n```java\\nclass Box<T> {\\n    private T value;\\n    public void set(T v) { value = v; }\\n    public T get() { return value; }\\n}\\n```\\n\\n`<T>` は型パラメータで、使うときに具体的な型に置き換えます。" },
    { "title": "ジェネリクスの使い方", "content": "# 型を指定して使う\\n\\n```java\\nBox<String> box = new Box<>();\\nbox.set(\\\"Hello\\\");\\nString s = box.get();  // キャスト不要！\\n\\nBox<Integer> numBox = new Box<>();\\nnumBox.set(42);\\n```\\n\\n間違った型を入れようとするとエラーで教えてくれます。" },
    { "title": "境界型パラメータ", "content": "# extends で型を制限\\n\\n```java\\nclass Calculator<T extends Number> {\\n    private T value;\\n    public double getDouble() {\\n        return value.doubleValue();\\n    }\\n}\\n```\\n\\n`T extends Number` で「Numberの仲間だけ」に制限できます。Numberのメソッドが使えるようになります。" },
    { "title": "ワイルドカード", "content": "# ? で不明な型を表す\\n\\n```java\\npublic void printList(List<?> list) {\\n    for (Object o : list) {\\n        System.out.println(o);\\n    }\\n}\\n```\\n\\n**境界付きワイルドカード**\\n- `? extends Number` → Numberか、その子クラス\\n- `? super Integer` → Integerか、その親クラス" },
    { "title": "Map の操作", "content": "# キーと値のペア\\n\\n```java\\nMap<String, Integer> map = new HashMap<>();\\nmap.put(\\\"apple\\\", 100);\\nmap.put(\\\"banana\\\", 80);\\n\\nSystem.out.println(map.get(\\\"apple\\\"));\\n\\n// 全エントリを処理\\nmap.forEach((k, v) -> System.out.println(k + \\\": \\\" + v));\\n```\\n\\n=> 100" }
  ],
  "exercises": [
    {
      "title": "ジェネリクスの基本",
      "description": "ジェネリクスについて学びます",
      "tutorialSlides": [
        {
          "title": "ジェネリクスとは？",
          "content": "# 型を後から指定\\n\\n**ジェネリクス** は、クラスやメソッドの「型」を後から指定できる機能です。\\n\\n**たとえ話：** 「何でも入る箱」を作っておいて、使うときに「この箱は文字列専用」「この箱は数字専用」と決められます。\\n\\n```java\\n// T は「型の入れ物」（後で決める）\\nclass Box<T> {\\n    private T value;  // T型の値を保存\\n    public void set(T v) { value = v; }\\n    public T get() { return value; }\\n}\\n```\\n\\n`<T>` は「型パラメータ」と呼ばれ、後で String や Integer に置き換えます"
        },
        {
          "title": "使い方",
          "content": "# 型を指定して使う\\n\\n使うときに `<>` の中に具体的な型を書きます。\\n\\n**文字列用の箱**\\n```java\\nBox<String> box = new Box<>();  // String専用の箱\\nbox.set(\"Hello\");  // 文字列を入れる\\nString s = box.get();  // 文字列で取り出せる（キャスト不要！）\\n```\\n\\n**数字用の箱**\\n```java\\nBox<Integer> numBox = new Box<>();  // Integer専用の箱\\nnumBox.set(42);  // 数字を入れる\\n```\\n\\n**メリット：** 間違った型を入れようとするとエラーで教えてくれます"
        }
      ],
      "correctCode": "// ライブラリを読み込む\\nimport java.util.*;\\n\\n// <T> で型パラメータを定義する\\nclass Box<T> {\\n    // 文を実行\\n    private T value;\\n    // 値を代入\\n    public void set(T v) { value = v; }\\n    // ゲッターを定義\\n    public T get() { return value; }\\n// ブロックを閉じる\\n}\\n\\n// Mainクラスを定義\\npublic class Main {\\n    // メソッドを定義\\n    public static void main(String[] args) {\\n        // boxにnew Box<>()を代入\\n        Box<String> box = new Box<>();\\n        // set で値を設定する\\n        box.set(\"Java\");\\n        // get で値を取得して出力する\\n        System.out.println(box.get());\\n    // ブロックを閉じる\\n    }\\n// ブロックを閉じる\\n}",
      "holeyCode": "// ライブラリを読み込む\\nimport ___.___.___\\n___\\n// <T> で型パラメータを定義する\\nclass ___<___> {\\n    // 文を実行\\n    private ___ ___;\\n    // 値を代入\\n    public void ___(___  ___) { ___ = ___; }\\n    // ゲッターを定義\\n    public ___ ___() { return ___; }\\n// ブロックを閉じる\\n___\\n___\\n// Mainクラスを定義\\npublic class ___ {\\n    // メソッドを定義\\n    public static void ___(___[] ___) {\\n        // boxにnew Box<>()を代入\\n        ___<___> ___ = new ___<>();\\n        // set で値を設定する\\n        ___.___(\"___\");\\n        // get で値を取得して出力する\\n        ___.___.___(___.___());\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// ライブラリを読み込む",
          "import java.util.*;",
          "",
          "// <T> で型パラメータを定義する",
          "class Box<T> {",
          "    // 文を実行",
          "    private T value;",
          "    // 値を代入",
          "    public void set(T v) { value = v; }",
          "    // ゲッターを定義",
          "    public T get() { return value; }",
          "// ブロックを閉じる",
          "}",
          "",
          "// Mainクラスを定義",
          "public class Main {",
          "    // メソッドを定義",
          "    public static void main(String[] args) {",
          "        // boxにnew Box<>()を代入",
          "        Box<String> box = new Box<>();",
          "        // set で値を設定する",
          "        box.set(\\\"Java\\\");",
          "        // get で値を取得して出力する",
          "        System.out.println(box.get());",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
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
          null,
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "\\\"\\\"",
          null,
          "",
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [],
          "others": ["java", "util", "*", "Box", "T", "value", "set", "v", "get", "}", "", "Main", "main", "String", "args", "new", "box", "Java", "System", "out", "println", "*;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Java\\n"
          }
        ]
      },
    {
      "title": "境界型パラメータ",
      "description": "データの種類（型）について理解します",
      "tutorialSlides": [
        {
          "title": "extends で制約",
          "content": "# 特定の型のサブタイプに限定\\n\\n**extends** を使うと、「このジェネリクスには〇〇の仲間だけ入れられます」という制限をつけられます。\\n\\n**たとえ話：** 「動物園の檻」には動物しか入れられないように、「Number（数字）の箱」には数字系の型しか入れられません。\\n\\n```java\\n// T は Number か、その子クラスだけOK\\nclass NumBox<T extends Number> {\\n    private T value;\\n    public double doubleValue() {\\n        return value.doubleValue();  // Numberのメソッドが使える！\\n    }\\n}\\n```"
        },
        {
          "title": "メリット",
          "content": "# 型固有のメソッドが使える\\n\\n制限をつけると、その型のメソッドが使えるようになります。\\n\\n**OKな例**\\n```java\\nNumBox<Integer> box = new NumBox<>();\\n// OK: Integer は Number の仲間\\n```\\n\\n**NGな例**\\n```java\\nNumBox<String> box2; \\n// コンパイルエラー！Stringは数字じゃない\\n```\\n\\n**メリット：**\\n- 間違った型を入れるのを防げる\\n- Number系のメソッド（doubleValue など）が使える"
        }
      ],
      "correctCode": "// extends で型の上限を Number に制限する\\nclass Calculator<T extends Number> {\\n    private T value;\\n    public Calculator(T v) { value = v; }\\n    public double getDouble() { return value.doubleValue(); }\\n}\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // calcにnew Calculator<>(42)を代入\\n        Calculator<Integer> calc = new Calculator<>(42);\\n        // getDouble メソッドを呼び出す\\n        System.out.println(calc.getDouble());\\n    }\\n}",
      "holeyCode": "// extends で型の上限を Number に制限する\\nclass ___<___ extends ___> {\\n    // 文を実行\\n    private ___ ___;\\n    // 値を代入\\n    public ___(___ ___) { ___ = ___; }\\n    // ゲッターを定義\\n    public ___ ___() { return ___.___(___; }\\n// ブロックを閉じる\\n___\\n___\\n// クラスを定義\\npublic class ___ {\\n    // メソッドを定義\\n    public static void ___(___[] ___) {\\n        // calcにnew Calculator<>(42)を代入\\n        ___<___> ___ = new ___<>(___);\\n        // getDouble メソッドを呼び出す\\n        ___.___.___(___.___());\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// extends で型の上限を Number に制限する",
          "class Calculator<T extends Number> {",
          "    // 文を実行",
          "    private T value;",
          "    // 値を代入",
          "    public Calculator(T v) { value = v; }",
          "    // ゲッターを定義",
          "    public double getDouble() { return value.doubleValue(); }",
          "// ブロックを閉じる",
          "}",
          "",
          "// クラスを定義",
          "public class Main {",
          "    // メソッドを定義",
          "    public static void main(String[] args) {",
          "        // calcにnew Calculator<>(42)を代入",
          "        Calculator<Integer> calc = new Calculator<>(42);",
          "        // getDouble メソッドを呼び出す",
          "        System.out.println(calc.getDouble());",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
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
          null,
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
          null,
          null
        ],
        "candidates": {
          "keywords": [],
          "others": ["Calculator", "T", "Number", "value", "v", "double", "getDouble", "doubleValue", ")", "}", "", "Main", "main", "String", "args", "Integer", "calc", "new", "42", "System", "out", "println"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "42.0\\n"
          }
        ]
      },
    {
      "title": "ワイルドカード",
      "description": "ワイルドカードの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "? ワイルドカードとは？",
          "content": "# 不明な型を表す\\n\\n**?**（クエスチョンマーク）は「どんな型でもOK」を表す特別な記号です。これを **ワイルドカード** と呼びます。\\n\\n**たとえ話：** トランプのジョーカーのように、どんなカードの代わりにもなれます。\\n\\n```java\\n// どんな型のリストも受け取れるメソッド\\npublic void printList(List<?> list) {\\n    for (Object o : list) {\\n        System.out.println(o);\\n    }\\n}\\n```\\n\\nこのメソッドは `List<String>` でも `List<Integer>` でも受け取れます！"
        },
        {
          "title": "境界付きワイルドカード",
          "content": "# 上限・下限の指定\\n\\nワイルドカードにも制限をつけられます。\\n\\n**上限を指定：extends**\\n```java\\nList<? extends Number>  // Numberか、その子クラス\\n// Integer, Double などはOK、StringはNG\\n```\\n\\n**下限を指定：super**\\n```java\\nList<? super Integer>  // Integerか、その親クラス\\n// Integer, Number, Object などがOK\\n```\\n\\n**覚え方：**\\n- extends → 「〜以下」（Numberから下）\\n- super → 「〜以上」（Integerから上）"
        }
      ],
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    // ? で任意の型を表すワイルドカード\\n    public static void printAll(List<?> list) {\\n        for (Object item : list) {\\n            // println で出力する\\n            System.out.println(item);\\n        }\\n    }\\n    public static void main(String[] args) {\\n        // namesに[\"A\", \"B\"]を代入\\n        List<String> names = Arrays.asList(\"A\", \"B\");\\n        // printAll メソッドを呼び出す\\n        printAll(names);\\n    }\\n}",
      "holeyCode": "// ライブラリを読み込む\\nimport ___.___.___\\n___\\n// クラスを定義\\npublic class ___ {\\n    // ? で任意の型を表すワイルドカード\\n    public static void ___(___<___> ___) {\\n        // forループ\\n        for (___ ___ : ___) {\\n            // println で出力する\\n            ___.___.___(___)\\n        // ブロックを閉じる\\n        ___\\n    // ブロックを閉じる\\n    ___\\n    // メソッドを定義\\n    public static void ___(___[] ___) {\\n        // namesに[\"A\", \"B\"]を代入\\n        ___<___> ___ = ___.___(\"___\", \"___\");\\n        // printAll メソッドを呼び出す\\n        ___(___);\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// ライブラリを読み込む",
          "import java.util.*;",
          "",
          "// クラスを定義",
          "public class Main {",
          "    // ? で任意の型を表すワイルドカード",
          "    public static void printAll(List<?> list) {",
          "        // forループ",
          "        for (Object item : list) {",
          "            // println で出力する",
          "            System.out.println(item);",
          "        // ブロックを閉じる",
          "        }",
          "    // ブロックを閉じる",
          "    }",
          "    // メソッドを定義",
          "    public static void main(String[] args) {",
          "        // namesに[\\\"A\\\", \\\"B\\\"]を代入",
          "        List<String> names = Arrays.asList(\\\"A\\\", \\\"B\\\");",
          "        // printAll メソッドを呼び出す",
          "        printAll(names);",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
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
          null,
          null,
          null,
          null,
          "",
          null,
          "\\\"\\\"\\\"\\\"",
          null,
          "",
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [],
          "others": ["java", "util", "*", "Main", "printAll", "List", "?", "list", "Object", "item", "System", "out", "println", ";", "}", "", "main", "String", "args", "names", "Arrays", "asList", "A", "B", "*;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "A\\nB\\n"
          }
        ]
      },
    {
      "title": "Map の基本操作",
      "description": "配列の全要素に同じ処理を適用する方法を学びます",
      "tutorialSlides": [
        {
          "title": "Map（マップ）とは？",
          "content": "# キーと値の対応\\n\\n**Map**（マップ＝対応表）は、「キー（名前）」と「値（データ）」のペアを保存できるデータ構造です。\\n\\n**たとえ話：** 電話帳のようなものです。「名前」で検索すると「電話番号」が分かりますよね。それがMapです。\\n\\n```java\\nMap<String, Integer> ages = new HashMap<>();  // 電話帳を作る\\nages.put(\"Alice\", 25);  // Aliceの年齢は25\\nages.put(\"Bob\", 30);    // Bobの年齢は30\\n\\nint age = ages.get(\"Alice\"); // Aliceで検索→25が返る\\n```"
        },
        {
          "title": "便利なメソッド",
          "content": "# よく使うメソッド\\n\\nMapにはたくさん便利なメソッドがあります。\\n\\n**キーがあるかチェック**\\n```java\\nages.containsKey(\"Alice\"); // true（Aliceはいる）\\n```\\n\\n**なければデフォルト値を使う**\\n```java\\nages.getOrDefault(\"Carol\", 0); // Carolがいないので0を返す\\n```\\n\\n**全部のキー・値を取得**\\n```java\\nages.keySet(); // [Alice, Bob]（全ての名前）\\nages.values(); // [25, 30]（全ての年齢）\\n```"
        }
      ],
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // scoresにnew HashMap<>()を代入\\n        Map<String, Integer> scores = new HashMap<>();\\n        // put でキーと値を追加する\\n        scores.put(\"Math\", 90);\\n        // put でキーと値を追加する\\n        scores.put(\"English\", 85);\\n        // get で値を取得する\\n        System.out.println(scores.get(\"Math\"));\\n    }\\n}",
      "holeyCode": "// ライブラリを読み込む\\nimport ___.___.___\\n___\\n// クラスを定義\\npublic class ___ {\\n    // メソッドを定義\\n    public static void ___(___[] ___) {\\n        // scoresにnew HashMap<>()を代入\\n        ___<___, ___> ___ = new ___<>();\\n        // put でキーと値を追加する\\n        ___.___(\"___\", ___);\\n        // put でキーと値を追加する\\n        ___.___(\"___\", ___);\\n        // get で値を取得する\\n        ___.___.___(___.___( \"___\"));\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// ライブラリを読み込む",
          "import java.util.*;",
          "",
          "// クラスを定義",
          "public class Main {",
          "    // メソッドを定義",
          "    public static void main(String[] args) {",
          "        // scoresにnew HashMap<>()を代入",
          "        Map<String, Integer> scores = new HashMap<>();",
          "        // put でキーと値を追加する",
          "        scores.put(\\\"Math\\\", 90);",
          "        // put でキーと値を追加する",
          "        scores.put(\\\"English\\\", 85);",
          "        // get で値を取得する",
          "        System.out.println(scores.get(\\\"Math\\\"));",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
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
          "\\\"\\\"",
          null,
          "\\\"\\\"",
          null,
          "\\\"\\\"",
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [],
          "others": ["java", "util", "*", "Main", "main", "String", "args", "Map", "Integer", "scores", "new", "HashMap", "put", "Math", "90", "English", "85", "System", "out", "println", "get", "}", "", "*;", "get(\"Math\"));", "ath"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "90\\n"
          }
        ]
      },
    {
      "title": "Map のイテレーション",
      "description": "配列の全要素に同じ処理を適用する方法を学びます",
      "tutorialSlides": [
        {
          "title": "entrySet（エントリーセット）",
          "content": "# キーと値のセットを取得\\n\\n**entrySet** を使うと、Mapの全てのペア（キーと値のセット）を順番に取り出せます。\\n\\n**たとえ話：** 電話帳の全ページをめくりながら、「名前と電話番号」を一組ずつ読み上げるイメージです。\\n\\n```java\\nfor (Map.Entry<String, Integer> e : map.entrySet()) {\\n    // getKey()でキー、getValue()で値を取得\\n    System.out.println(e.getKey() + \": \" + e.getValue());\\n}\\n// Alice: 25\\n// Bob: 30\\n```"
        },
        {
          "title": "forEach メソッド",
          "content": "# Java 8以降の書き方\\n\\nもっと短く書けるforEachメソッドもあります。ラムダ式と組み合わせて使います。\\n\\n```java\\nmap.forEach((key, value) -> {\\n    System.out.println(key + \": \" + value);\\n});\\n```\\n\\n**何をしているの？**\\n- 「keyとvalueを受け取って、それを表示する」という処理を全ペアに対して実行します\\n\\n**どちらを使う？**\\n- entrySet：古いJavaでも動く\\n- forEach：短くて読みやすい（Java 8以降）"
        }
      ],
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // mapにnew HashMap<>()を代入\\n        Map<String, Integer> map = new HashMap<>();\\n        // put でキーと値を追加する\\n        map.put(\"A\", 1);\\n        // put でキーと値を追加する\\n        map.put(\"B\", 2);\\n        // entrySet でエントリを取得する\\n        for (Map.Entry<String, Integer> e : map.entrySet()) {\\n            // getKey でキーを取得する\\n            System.out.println(e.getKey());\\n        }\\n    }\\n}",
      "holeyCode": "// ライブラリを読み込む\\nimport ___.___.___\\n___\\n// クラスを定義\\npublic class ___ {\\n    // メソッドを定義\\n    public static void ___(___[] ___) {\\n        // mapにnew HashMap<>()を代入\\n        ___<___, ___> ___ = new ___<>();\\n        // put でキーと値を追加する\\n        ___.___(\"___\", ___);\\n        // put でキーと値を追加する\\n        ___.___(\"___\", ___);\\n        // entrySet でエントリを取得する\\n        for (___.___ <___, ___> ___ : ___.___()) {\\n            // getKey でキーを取得する\\n            ___.___.___(___.___());\\n        // ブロックを閉じる\\n        ___\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// ライブラリを読み込む",
          "import java.util.*;",
          "",
          "// クラスを定義",
          "public class Main {",
          "    // メソッドを定義",
          "    public static void main(String[] args) {",
          "        // mapにnew HashMap<>()を代入",
          "        Map<String, Integer> map = new HashMap<>();",
          "        // put でキーと値を追加する",
          "        map.put(\\\"A\\\", 1);",
          "        // put でキーと値を追加する",
          "        map.put(\\\"B\\\", 2);",
          "        // entrySet でエントリを取得する",
          "        for (Map.Entry<String, Integer> e : map.entrySet()) {",
          "            // getKey でキーを取得する",
          "            System.out.println(e.getKey());",
          "        // ブロックを閉じる",
          "        }",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
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
          "\\\"\\\"",
          null,
          "\\\"\\\"",
          null,
          "",
          null,
          "",
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [],
          "others": ["java", "util", "*", "Main", "main", "String", "args", "Map", "Integer", "map", "new", "HashMap", "put", "A", "1", "B", "2", "Entry", "e", "entrySet", "System", "out", "println", "getKey", "}", "", "*;", "Entry<String,", "nteger> e : map.entrySet()) {"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "A\\nB\\n"
          }
        ]
      },
    {
      "title": "Comparator",
      "description": "複数の条件を組み合わせる方法を学びます",
      "tutorialSlides": [
        {
          "title": "Comparator（コンパレーター）とは？",
          "content": "# 比較のルールを定義\\n\\n**Comparator**（コンパレーター＝比較する人）は、「どうやって並べ替えるか」のルールを決めるものです。\\n\\n**たとえ話：** 本を並べるとき、「タイトル順」「著者順」「出版年順」など、いろんな並べ方がありますよね。Comparatorで「どの基準で並べるか」を指定します。\\n\\n```java\\nList<String> list = Arrays.asList(\"bb\", \"a\", \"ccc\");\\nlist.sort(Comparator.comparing(String::length));\\n// 結果: [a, bb, ccc] - 文字列の長さ順に！\\n```"
        },
        {
          "title": "便利なメソッド",
          "content": "# Comparatorの作成方法\\n\\nいろいろな比較方法を簡単に作れます。\\n\\n**自然順序**\\n```java\\nComparator.naturalOrder()  // あいうえお順、数字なら小さい順\\n```\\n\\n**逆順**\\n```java\\nComparator.reverseOrder()  // 自然順序の逆\\n```\\n\\n**特定の値で比較**\\n```java\\nComparator.comparing(Person::getName)  // 名前で比較\\nComparator.comparing(Person::getAge)   // 年齢で比較\\n```"
        }
      ],
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // wordsに[\"猫\", \"a\", \"elephant\"]を代入\\n        List<String> words = new ArrayList<>(Arrays.asList(\"猫\", \"a\", \"elephant\"));\\n        // comparing でプロパティを基準に比較する\\n        words.sort(Comparator.comparing(String::length));\\n        // println で出力する\\n        System.out.println(words);\\n    }\\n}",
      "holeyCode": "// ライブラリを読み込む\\nimport ___.___.___\\n___\\n// クラスを定義\\npublic class ___ {\\n    // メソッドを定義\\n    public static void ___(___[] ___) {\\n        // wordsに[\"猫\", \"a\", \"elephant\"]を代入\\n        ___<___> ___ = new ___<>(___.___(\"___\", \"___\", \"___\"));\\n        // comparing でプロパティを基準に比較する\\n        ___.___(___.___(___::___));\\n        // println で出力する\\n        ___.___.___(___)\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// ライブラリを読み込む",
          "import java.util.*;",
          "",
          "// クラスを定義",
          "public class Main {",
          "    // メソッドを定義",
          "    public static void main(String[] args) {",
          "        // wordsに[\\\"猫\\\", \\\"a\\\", \\\"elephant\\\"]を代入",
          "        List<String> words = new ArrayList<>(Arrays.asList(\\\"猫\\\", \\\"a\\\", \\\"elephant\\\"));",
          "        // comparing でプロパティを基準に比較する",
          "        words.sort(Comparator.comparing(String::length));",
          "        // println で出力する",
          "        System.out.println(words);",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
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
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [],
          "others": ["java", "util", "*", "Main", "main", "String", "args", "List", "words", "new", "ArrayList", "Arrays", "asList", "猫", "a", "elephant", "sort", "Comparator", "comparing", "length", "System", "out", "println", ";", "}", "", "*;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[猫, a, elephant]\\n"
          }
        ]
      },
    {
      "title": "Comparable の実装",
      "description": "Comparable の実装の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "Comparable（コンパラブル）とは？",
          "content": "# 自然順序の定義\\n\\n**Comparable**（コンパラブル＝比較可能な）を実装すると、オブジェクトに「自然な並び順」を定義できます。\\n\\n**たとえ話：** 数字には「1<2<3」という自然な順番があるように、自分で作ったクラスにも「この順番で並べてね」と教えられます。\\n\\n```java\\nclass Person implements Comparable<Person> {\\n    String name;\\n    public int compareTo(Person other) {\\n        // 名前のあいうえお順で比較\\n        return this.name.compareTo(other.name);\\n    }\\n}\\n```"
        },
        {
          "title": "compareTo のルール",
          "content": "# 戻り値の意味\\n\\n`compareTo` メソッドは、比較結果を数字で返します。\\n\\n**ルール：**\\n- `this < other` → マイナスの数を返す（自分が先）\\n- `this == other` → 0を返す（同じ順番）\\n- `this > other` → プラスの数を返す（相手が先）\\n\\n**例：年齢で比較する場合**\\n```java\\nreturn this.age - other.age;\\n// 25 - 30 = -5 （マイナス→自分が先）\\n// 30 - 30 = 0  （0→同じ）\\n// 35 - 30 = 5  （プラス→相手が先）\\n```"
        }
      ],
      "correctCode": "import java.util.*;\\n\\n// Comparable を実装して自然順序を定義する\\nclass Score implements Comparable<Score> {\\n    int value;\\n    Score(int v) { value = v; }\\n    public int compareTo(Score other) {\\n        // 自分と相手のスコアを比較してソート順を決める\\n        return this.value - other.value;\\n    }\\n}\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // scoresに[Score(80), Score(60)]を代入\\n        List<Score> scores = Arrays.asList(new Score(80), new Score(60));\\n        // sort でソートする\\n        Collections.sort(scores);\\n        // get で要素を取得する\\n        System.out.println(scores.get(0).value);\\n    }\\n}",
      "holeyCode": "// ライブラリを読み込む\\nimport ___.___.___\\n___\\n// Comparable を実装して自然順序を定義する\\nclass ___ implements ___<___> {\\n    // 変数を宣言\\n    ___ ___;\\n    // 値を代入\\n    ___(___ ___) { ___ = ___; }\\n    // メソッドを定義\\n    public ___ ___(___ ___) {\\n        // 自分と相手のスコアを比較してソート順を決める\\n        return this.___ - ___.___;\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___\\n___\\n// クラスを定義\\npublic class ___ {\\n    // メソッドを定義\\n    public static void ___(___[] ___) {\\n        // scoresに[Score(80), Score(60)]を代入\\n        ___<___> ___ = ___.___(new ___(___), new ___(___));\\n        // sort でソートする\\n        ___.___(___);\\n        // get で要素を取得する\\n        ___.___.___(___.___(___).___)\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// ライブラリを読み込む",
          "import java.util.*;",
          "",
          "// Comparable を実装して自然順序を定義する",
          "class Score implements Comparable<Score> {",
          "    // 変数を宣言",
          "    int value;",
          "    // 値を代入",
          "    Score(int v) { value = v; }",
          "    // メソッドを定義",
          "    public int compareTo(Score other) {",
          "        // 自分と相手のスコアを比較してソート順を決める",
          "        return this.value - other.value;",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
          "}",
          "",
          "// クラスを定義",
          "public class Main {",
          "    // メソッドを定義",
          "    public static void main(String[] args) {",
          "        // scoresに[Score(80), Score(60)]を代入",
          "        List<Score> scores = Arrays.asList(new Score(80), new Score(60));",
          "        // sort でソートする",
          "        Collections.sort(scores);",
          "        // get で要素を取得する",
          "        System.out.println(scores.get(0).value);",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
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
          null,
          null,
          null,
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
          null,
          null
        ],
        "candidates": {
          "keywords": [],
          "others": ["java", "util", "*", "Score", "Comparable", "int", "value", "v", "compareTo", "other", "this", "}", "", "Main", "main", "String", "args", "List", "scores", "Arrays", "asList", "new", "80", "60", "Collections", "sort", "System", "out", "println", "get", "0", ";", "*;", "ther"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "60\\n"
          }
        ]
      },
    {
      "title": "Enum の定義",
      "description": "Enum の定義の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "Enum（イーナム）とは？",
          "content": "# 固定の値の集合\\n\\n**Enum**（イーナム＝列挙型・れっきょがた）は、「決まった選択肢」を定義するものです。\\n\\n**たとえ話：** 信号機の色は「赤・黄・青」の3つだけですよね。それ以外はありません。Enumはこのように「限られた選択肢」を表します。\\n\\n```java\\nenum Color {  // 色の選択肢を定義\\n    RED, GREEN, BLUE  // 赤、緑、青の3つだけ\\n}\\n\\nColor c = Color.RED;  // 赤を選択\\n```"
        },
        {
          "title": "Enum のメリット",
          "content": "# 型安全で明確\\n\\nEnumを使うと、間違った値を入れることができなくなります。\\n\\n**switch文で使える**\\n```java\\nswitch (color) {\\n    case RED: System.out.println(\"赤\"); break;\\n    case GREEN: System.out.println(\"緑\"); break;\\n    case BLUE: System.out.println(\"青\"); break;\\n}\\n```\\n\\n**全ての値を取得**\\n```java\\nColor.values()  // [RED, GREEN, BLUE]\\n```\\n\\n**メリット：** 「PURPRE」のようなタイプミスがあるとエラーになるので、間違いを防げます！"
        }
      ],
      "correctCode": "// Day列挙型を定義\\nenum Day {\\n    MON, TUE, WED, THU, FRI, SAT, SUN\\n}\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // Day.MON で列挙値を取得する\\n        Day today = Day.MON;\\n        // println で出力する\\n        System.out.println(today);\\n    }\\n}",
      "holeyCode": "// Day列挙型を定義\\nenum ___ {\\n    // 曜日の列挙値\\n    ___, ___, ___, ___, ___, ___, ___\\n// ブロックを閉じる\\n___\\n___\\n// クラスを定義\\npublic class ___ {\\n    // メソッドを定義\\n    public static void ___(___[] ___) {\\n        // Day.MON で列挙値を取得する\\n        ___ ___ = ___.___;\\n        // println で出力する\\n        ___.___.___(___)\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// Day列挙型を定義",
          "enum Day {",
          "    // 曜日の列挙値",
          "    MON, TUE, WED, THU, FRI, SAT, SUN",
          "// ブロックを閉じる",
          "}",
          "",
          "// クラスを定義",
          "public class Main {",
          "    // メソッドを定義",
          "    public static void main(String[] args) {",
          "        // Day.MON で列挙値を取得する",
          "        Day today = Day.MON;",
          "        // println で出力する",
          "        System.out.println(today);",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          null,
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
          null,
          null
        ],
        "candidates": {
          "keywords": [],
          "others": ["Day", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN", "}", "", "Main", "main", "String", "args", "today", "System", "out", "println", ";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "MON\\n"
          }
        ]
      },
    {
      "title": "Queue の使い方",
      "description": "Queue の使い方の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "Queue（キュー）とは？",
          "content": "# 先入れ先出し（FIFO：ファイフォー）\\n\\n**Queue**（キュー＝待ち行列）は、「最初に入れたものが最初に出る」データ構造です。\\n\\n**たとえ話：** 遊園地のアトラクションの行列のようなものです。先に並んだ人が先に乗れますよね。これを**FIFO**（First In, First Out＝先入れ先出し）と言います。\\n\\n```java\\nQueue<String> queue = new LinkedList<>();  // 行列を作る\\nqueue.offer(\"A\");  // Aが並ぶ\\nqueue.offer(\"B\");  // Bが並ぶ\\nqueue.poll();      // Aが出る（先に並んだから）\\n```"
        },
        {
          "title": "主なメソッド",
          "content": "# よく使うメソッド\\n\\n**offer（オファー）：列に追加**\\n```java\\noffer(e)  // 列の最後に並ぶ\\n```\\n\\n**poll（ポール）：先頭を取り出す**\\n```java\\npoll()    // 列の先頭から出る（空ならnull）\\n```\\n\\n**peek（ピーク）：先頭を見る（出ない）**\\n```java\\npeek()    // 次は誰？と確認するだけ（列からは出ない）\\n```\\n\\n**覚え方：** 行列に並ぶ(offer)→出る(poll)→確認する(peek)"
        }
      ],
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // queueにnew LinkedList<>()を代入\\n        Queue<String> queue = new LinkedList<>();\\n        // offer でキューに要素を追加する\\n        queue.offer(\"First\");\\n        // offer でキューに要素を追加する\\n        queue.offer(\"Second\");\\n        // poll で要素を取り出す\\n        System.out.println(queue.poll());\\n    }\\n}",
      "holeyCode": "// ライブラリを読み込む\\nimport ___.___.___\\n___\\n// クラスを定義\\npublic class ___ {\\n    // メソッドを定義\\n    public static void ___(___[] ___) {\\n        // queueにnew LinkedList<>()を代入\\n        ___<___> ___ = new ___<>();\\n        // offer でキューに要素を追加する\\n        ___.___(\"___\");\\n        // offer でキューに要素を追加する\\n        ___.___(\"___\");\\n        // poll で要素を取り出す\\n        ___.___.___(___.___());\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// ライブラリを読み込む",
          "import java.util.*;",
          "",
          "// クラスを定義",
          "public class Main {",
          "    // メソッドを定義",
          "    public static void main(String[] args) {",
          "        // queueにnew LinkedList<>()を代入",
          "        Queue<String> queue = new LinkedList<>();",
          "        // offer でキューに要素を追加する",
          "        queue.offer(\\\"First\\\");",
          "        // offer でキューに要素を追加する",
          "        queue.offer(\\\"Second\\\");",
          "        // poll で要素を取り出す",
          "        System.out.println(queue.poll());",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
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
          "\\\"\\\"",
          null,
          "\\\"\\\"",
          null,
          "",
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [],
          "others": ["java", "util", "*", "Main", "main", "String", "args", "Queue", "queue", "new", "LinkedList", "offer", "First", "Second", "System", "out", "println", "poll", "}", "", "*;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "First\\n"
          }
        ]
      },
    {
      "title": "Deque の使い方",
      "description": "Deque の使い方の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "Deque（デック）とは？",
          "content": "# 両端から操作できるキュー\\n\\n**Deque**（デック＝Double-Ended Queue）は、先頭からも末尾からも追加・削除ができるキューです。\\n\\n**たとえ話：** 両開きドアのある電車のようなものです。前からも後ろからも乗り降りできます！\\n\\n```java\\nDeque<String> deque = new ArrayDeque<>();  // 両開きキューを作る\\ndeque.addFirst(\"A\");  // 先頭に追加\\ndeque.addLast(\"B\");   // 末尾に追加\\n```"
        },
        {
          "title": "スタックとしても使える",
          "content": "# 後入れ先出し（LIFO：ライフォー）\\n\\nDequeは**スタック**としても使えます。「最後に入れたものが最初に出る」構造です。\\n\\n**たとえ話：** お皿を積み重ねたイメージです。最後に置いたお皿が一番上にあるので、最初に取れますよね。\\n\\n```java\\nDeque<Integer> stack = new ArrayDeque<>();\\nstack.push(1);  // 1を積む\\nstack.push(2);  // 2を積む（1の上に）\\nstack.pop();    // 2を取り出す（一番上だから）\\n```\\n\\n**覚え方：**\\n- Queue（キュー）→ FIFO（先入れ先出し）：行列\\n- Stack（スタック）→ LIFO（後入れ先出し）：積み重ね"
        }
      ],
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // stackにnew ArrayDeque<>()を代入\\n        Deque<Integer> stack = new ArrayDeque<>();\\n        // push でスタックに積む\\n        stack.push(10);\\n        // push でスタックに積む\\n        stack.push(20);\\n        // pop でスタックから取り出す\\n        System.out.println(stack.pop());\\n    }\\n}",
      "holeyCode": "// ライブラリを読み込む\\nimport ___.___.___\\n___\\n// クラスを定義\\npublic class ___ {\\n    // メソッドを定義\\n    public static void ___(___[] ___) {\\n        // stackにnew ArrayDeque<>()を代入\\n        ___<___> ___ = new ___<>();\\n        // push でスタックに積む\\n        ___.___(___);\\n        // push でスタックに積む\\n        ___.___(___);\\n        // pop でスタックから取り出す\\n        ___.___.___(___.___());\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// ライブラリを読み込む",
          "import java.util.*;",
          "",
          "// クラスを定義",
          "public class Main {",
          "    // メソッドを定義",
          "    public static void main(String[] args) {",
          "        // stackにnew ArrayDeque<>()を代入",
          "        Deque<Integer> stack = new ArrayDeque<>();",
          "        // push でスタックに積む",
          "        stack.push(10);",
          "        // push でスタックに積む",
          "        stack.push(20);",
          "        // pop でスタックから取り出す",
          "        System.out.println(stack.pop());",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
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
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [],
          "others": ["java", "util", "*", "Main", "main", "String", "args", "Deque", "Integer", "stack", "new", "ArrayDeque", "push", "10", "20", "System", "out", "println", "pop", "}", "", "*;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "20\\n"
          }
        ]
      }
  ]
}

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
            "content": "# 型を後から指定\\n\\n**ジェネリクス** は、クラスやメソッドの「型」を後から指定できる機能です。\\n\\n**たとえ話：** 「何でも入る箱」を作っておいて、使うときに「この箱は文字列専用」「この箱は数字専用」と決められます。\\n\\n```java\\n// T は「型の入れ物」（後で決める）\\nclass Box<T> {\\n    private T value;  // T型の値を保存\\n    public void set(T v) { value = v; }\\n    public T get() { return value; }\\n}\\n```\\n\\n`<T>` は「型パラメータ」と呼ばれ、後で String や Integer に置き換えます"
          },
          {
            "title": "使い方",
            "content": "# 型を指定して使う\\n\\n使うときに `<>` の中に具体的な型を書きます。\\n\\n**文字列用の箱**\\n```java\\nBox<String> box = new Box<>();  // String専用の箱\\nbox.set(\"Hello\");  // 文字列を入れる\\nString s = box.get();  // 文字列で取り出せる（キャスト不要！）\\n```\\n\\n**数字用の箱**\\n```java\\nBox<Integer> numBox = new Box<>();  // Integer専用の箱\\nnumBox.set(42);  // 数字を入れる\\n```\\n\\n**メリット：** 間違った型を入れようとするとエラーで教えてくれます"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "import java.util.*;\\n\\n// <T> で型パラメータを定義する\\nclass Box<T> {\\n    private T value;\\n    public void set(T v) { value = v; }\\n    public T get() { return value; }\\n}\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // boxにnew Box<>()を代入\\n        Box<String> box = new Box<>();\\n        // set で値を設定する\\n        box.set(\"Java\");\\n        // get で値を取得して出力する\\n        System.out.println(box.get());\\n    }\\n}",
        "holeyCode": "import java.util.___\\n\\n// <T> で型パラメータを定義する\\nclass ___<T> {\\n    private T ___;\\n    public void ___(T v) { value = v; }\\n    public T ___() { return value; }\\n___\\n\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // boxにnew Box<>()を代入\\n        ___<String> box = new Box<>();\\n        // set で値を設定する\\n        box.set(\"___\");\\n        // get で値を取得して出力する\\n        System.out.___(box.get());\\n    ___\\n___",
        "correctLines": [
          "import java.util.*;",
          "",
          "// <T> で型パラメータを定義する",
          "class Box<T> {",
          "    private T value;",
          "    public void set(T v) { value = v; }",
          "    public T get() { return value; }",
          "}",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // boxにnew Box<>()を代入",
          "        Box<String> box = new Box<>();",
          "        // set で値を設定する",
          "        box.set(\"Java\");",
          "        // get で値を取得して出力する",
          "        System.out.println(box.get());",
          "    }",
          "}"
        ],
        "lineHints": [
          "新しいクラス（Box）を定義します。",
          null,
          null,
          "`set` で値を設定します。",
          "`get` で値を取得します。",
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
          "operators": [
            "<",
            ">",
            "new",
            "set",
            "get"
          ],
          "others": ["*;", "Box", "value", "}", "Main", "main(String[] args) {", "Java", "println"]
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
        "description": "型パラメータに制約を設ける方法を学びましょう。",
        "difficulty": "hard",
        "orderIndex": 2,
        "tutorialSlides": [
          {
            "title": "extends で制約（せいやく）",
            "content": "# 特定の型のサブタイプに限定\\n\\n**extends** を使うと、「このジェネリクスには〇〇の仲間だけ入れられます」という制限をつけられます。\\n\\n**たとえ話：** 「動物園の檻」には動物しか入れられないように、「Number（数字）の箱」には数字系の型しか入れられません。\\n\\n```java\\n// T は Number か、その子クラスだけOK\\nclass NumBox<T extends Number> {\\n    private T value;\\n    public double doubleValue() {\\n        return value.doubleValue();  // Numberのメソッドが使える！\\n    }\\n}\\n```"
          },
          {
            "title": "メリット",
            "content": "# 型固有（かたこゆう）のメソッドが使える\\n\\n制限をつけると、その型のメソッドが使えるようになります。\\n\\n**OKな例**\\n```java\\nNumBox<Integer> box = new NumBox<>();\\n// OK: Integer は Number の仲間\\n```\\n\\n**NGな例**\\n```java\\nNumBox<String> box2; \\n// コンパイルエラー！Stringは数字じゃない\\n```\\n\\n**メリット：**\\n- 間違った型を入れるのを防げる\\n- Number系のメソッド（doubleValue など）が使える"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// extends で型の上限を Number に制限する\\nclass Calculator<T extends Number> {\\n    private T value;\\n    public Calculator(T v) { value = v; }\\n    public double getDouble() { return value.doubleValue(); }\\n}\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // calcにnew Calculator<>(42)を代入\\n        Calculator<Integer> calc = new Calculator<>(42);\\n        // getDouble メソッドを呼び出す\\n        System.out.println(calc.getDouble());\\n    }\\n}",
        "holeyCode": "// extends で型の上限を Number に制限する\\nclass ___<T extends Number> {\\n    private T ___;\\n    public ___(T v) { value = v; }\\n    public double ___() { return value.doubleValue(); }\\n___\\n\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // calcにnew Calculator<>(42)を代入\\n        Calculator<Integer> calc = new Calculator<>(___);\\n        // getDouble メソッドを呼び出す\\n        System.out.___(calc.getDouble());\\n    ___\\n___",
        "correctLines": [
          "// extends で型の上限を Number に制限する",
          "class Calculator<T extends Number> {",
          "    private T value;",
          "    public Calculator(T v) { value = v; }",
          "    public double getDouble() { return value.doubleValue(); }",
          "}",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // calcにnew Calculator<>(42)を代入",
          "        Calculator<Integer> calc = new Calculator<>(42);",
          "        // getDouble メソッドを呼び出す",
          "        System.out.println(calc.getDouble());",
          "    }",
          "}"
        ],
        "lineHints": [
          null,
          "新しいクラス（Calculator）を定義します。",
          null,
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
          "keywords": [
            "extends",
            "implements",
            "super",
            "new",
            "getDouble"
          ],
          "others": ["Calculator", "value", "}", "Main", "main(String[] args) {", "42", "println"]
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
        "description": "不明な型を表すワイルドカードを学びましょう。",
        "difficulty": "hard",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "? ワイルドカードとは？",
            "content": "# 不明な型を表す\\n\\n**?**（クエスチョンマーク）は「どんな型でもOK」を表す特別な記号です。これを **ワイルドカード** と呼びます。\\n\\n**たとえ話：** トランプのジョーカーのように、どんなカードの代わりにもなれます。\\n\\n```java\\n// どんな型のリストも受け取れるメソッド\\npublic void printList(List<?> list) {\\n    for (Object o : list) {\\n        System.out.println(o);\\n    }\\n}\\n```\\n\\nこのメソッドは `List<String>` でも `List<Integer>` でも受け取れます！"
          },
          {
            "title": "境界付きワイルドカード",
            "content": "# 上限・下限の指定\\n\\nワイルドカードにも制限をつけられます。\\n\\n**上限（じょうげん）を指定：extends**\\n```java\\nList<? extends Number>  // Numberか、その子クラス\\n// Integer, Double などはOK、StringはNG\\n```\\n\\n**下限（かげん）を指定：super**\\n```java\\nList<? super Integer>  // Integerか、その親クラス\\n// Integer, Number, Object などがOK\\n```\\n\\n**覚え方：**\\n- extends → 「〜以下」（Numberから下）\\n- super → 「〜以上」（Integerから上）"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    // ? で任意の型を表すワイルドカード\\n    public static void printAll(List<?> list) {\\n        for (Object item : list) {\\n            // println で出力する\\n            System.out.println(item);\\n        }\\n    }\\n    public static void main(String[] args) {\\n        // namesに[\"A\", \"B\"]を代入\\n        List<String> names = Arrays.asList(\"A\", \"B\");\\n        // printAll メソッドを呼び出す\\n        printAll(names);\\n    }\\n}",
        "holeyCode": "import java.util.___\\n\\npublic class ___ {\\n    // ? で任意の型を表すワイルドカード\\n    public static void printAll(List<?> ___) {\\n        for (Object ___ : list) {\\n            // println で出力する\\n            System.out.___(item);\\n        ___\\n    ___\\n    public static void ___\\(String[] args) {\\n        // namesに[\"A\", \"B\"]を代入\\n        List<String> names = Arrays.asList(\"___\", \"B\");\\n        // printAll メソッドを呼び出す\\n        printAll(___);\\n    ___\\n___",
        "correctLines": [
          "import java.util.*;",
          "",
          "public class Main {",
          "    // ? で任意の型を表すワイルドカード",
          "    public static void printAll(List<?> list) {",
          "        for (Object item : list) {",
          "            // println で出力する",
          "            System.out.println(item);",
          "        }",
          "    }",
          "    public static void main(String[] args) {",
          "        // namesに[\"A\", \"B\"]を代入",
          "        List<String> names = Arrays.asList(\"A\", \"B\");",
          "        // printAll メソッドを呼び出す",
          "        printAll(names);",
          "    }",
          "}"
        ],
        "lineHints": [
          "`?` で任意の型を表します。",
          null,
          "配列の初期値を`Arrays.asList()`で渡します。",
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
          "`printAll` メソッドを呼び出します。",
          null,
          null
        ],
        "candidates": {
          "symbols": [
            "?",
            "*",
            "T",
            "println",
            "asList",
            "printAll"
          ],
          "others": ["*;", "Main", "list", "item", "}", "main(String[] args) {", "A", "names"]
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
        "description": "キーと値のペアを扱うMapを学びましょう。",
        "difficulty": "hard",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "Map（マップ）とは？",
            "content": "# キーと値の対応（たいおう）\\n\\n**Map**（マップ＝対応表）は、「キー（名前）」と「値（データ）」のペアを保存できるデータ構造です。\\n\\n**たとえ話：** 電話帳のようなものです。「名前」で検索すると「電話番号」が分かりますよね。それがMapです。\\n\\n```java\\nMap<String, Integer> ages = new HashMap<>();  // 電話帳を作る\\nages.put(\"Alice\", 25);  // Aliceの年齢は25\\nages.put(\"Bob\", 30);    // Bobの年齢は30\\n\\nint age = ages.get(\"Alice\"); // Aliceで検索→25が返る\\n```"
          },
          {
            "title": "便利なメソッド",
            "content": "# よく使うメソッド\\n\\nMapにはたくさん便利なメソッドがあります。\\n\\n**キーがあるかチェック**\\n```java\\nages.containsKey(\"Alice\"); // true（Aliceはいる）\\n```\\n\\n**なければデフォルト値を使う**\\n```java\\nages.getOrDefault(\"Carol\", 0); // Carolがいないので0を返す\\n```\\n\\n**全部のキー・値を取得**\\n```java\\nages.keySet(); // [Alice, Bob]（全ての名前）\\nages.values(); // [25, 30]（全ての年齢）\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // scoresにnew HashMap<>()を代入\\n        Map<String, Integer> scores = new HashMap<>();\\n        // put でキーと値を追加する\\n        scores.put(\"Math\", 90);\\n        // put でキーと値を追加する\\n        scores.put(\"English\", 85);\\n        // get で値を取得する\\n        System.out.println(scores.get(\"Math\"));\\n    }\\n}",
        "holeyCode": "import java.util.___\\n\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // scoresにnew HashMap<>()を代入\\n        Map<String, Integer> scores = new ___<>();\\n        // put でキーと値を追加する\\n        scores.put(\"___\", 90);\\n        // put でキーと値を追加する\\n        scores.put(\"___\", 85);\\n        // get で値を取得する\\n        System.out.___(scores.get(\"Math\"));\\n    ___\\n___",
        "correctLines": [
          "import java.util.*;",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // scoresにnew HashMap<>()を代入",
          "        Map<String, Integer> scores = new HashMap<>();",
          "        // put でキーと値を追加する",
          "        scores.put(\"Math\", 90);",
          "        // put でキーと値を追加する",
          "        scores.put(\"English\", 85);",
          "        // get で値を取得する",
          "        System.out.println(scores.get(\"Math\"));",
          "    }",
          "}"
        ],
        "lineHints": [
          "`new` で HashMap を作成します。",
          null,
          "`put` でキーと値を追加します。",
          "`get` で値を取得します。",
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
          "methods": [
            "put",
            "set",
            "add",
            "new",
            "get"
          ],
          "others": ["*;", "Main", "main(String[] args) {", "HashMap", "Math", "English", "println", "}"]
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
        "description": "Mapの全要素を走査する方法を学びましょう。",
        "difficulty": "hard",
        "orderIndex": 5,
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
        "initialDisplayMode": "holey",
        "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // mapにnew HashMap<>()を代入\\n        Map<String, Integer> map = new HashMap<>();\\n        // put でキーと値を追加する\\n        map.put(\"A\", 1);\\n        // put でキーと値を追加する\\n        map.put(\"B\", 2);\\n        // entrySet でエントリを取得する\\n        for (Map.Entry<String, Integer> e : map.entrySet()) {\\n            // getKey でキーを取得する\\n            System.out.println(e.getKey());\\n        }\\n    }\\n}",
        "holeyCode": "import java.util.___\\n\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // mapにnew HashMap<>()を代入\\n        Map<String, Integer> map = new ___<>();\\n        // put でキーと値を追加する\\n        map.put(\"___\", 1);\\n        // put でキーと値を追加する\\n        map.put(\"___\", 2);\\n        // entrySet でエントリを取得する\\n        for (Map.Entry<String, Integer> e : map.___()) {\\n            // getKey でキーを取得する\\n            System.out.___(e.getKey());\\n        ___\\n    ___\\n___",
        "correctLines": [
          "import java.util.*;",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // mapにnew HashMap<>()を代入",
          "        Map<String, Integer> map = new HashMap<>();",
          "        // put でキーと値を追加する",
          "        map.put(\"A\", 1);",
          "        // put でキーと値を追加する",
          "        map.put(\"B\", 2);",
          "        // entrySet でエントリを取得する",
          "        for (Map.Entry<String, Integer> e : map.entrySet()) {",
          "            // getKey でキーを取得する",
          "            System.out.println(e.getKey());",
          "        }",
          "    }",
          "}"
        ],
        "lineHints": [
          "`new` で HashMap を作成します。",
          null,
          "`put` でキーと値を追加します。",
          "指定された回数や範囲で、繰り返し処理（ループ）を行います。",
          null,
          "`getKey` でキーを取得します。",
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
          "methods": [
            "entrySet",
            "keySet",
            "values",
            "new",
            "put",
            "getKey"
          ],
          "others": ["*;", "Main", "main(String[] args) {", "HashMap", "A", "B", "println", "}"]
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
        "description": "カスタムの比較ロジックを定義しましょう。",
        "difficulty": "hard",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "Comparator（コンパレーター）とは？",
            "content": "# 比較のルールを定義\\n\\n**Comparator**（コンパレーター＝比較する人）は、「どうやって並べ替えるか」のルールを決めるものです。\\n\\n**たとえ話：** 本を並べるとき、「タイトル順」「著者順」「出版年順」など、いろんな並べ方がありますよね。Comparatorで「どの基準で並べるか」を指定します。\\n\\n```java\\nList<String> list = Arrays.asList(\"bb\", \"a\", \"ccc\");\\nlist.sort(Comparator.comparing(String::length));\\n// 結果: [a, bb, ccc] - 文字列の長さ順に！\\n```"
          },
          {
            "title": "便利なメソッド",
            "content": "# Comparatorの作成方法\\n\\nいろいろな比較方法を簡単に作れます。\\n\\n**自然順序（しぜんじゅんじょ）**\\n```java\\nComparator.naturalOrder()  // あいうえお順、数字なら小さい順\\n```\\n\\n**逆順（ぎゃくじゅん）**\\n```java\\nComparator.reverseOrder()  // 自然順序の逆\\n```\\n\\n**特定の値で比較**\\n```java\\nComparator.comparing(Person::getName)  // 名前で比較\\nComparator.comparing(Person::getAge)   // 年齢で比較\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // wordsに[\"cat\", \"a\", \"elephant\"]を代入\\n        List<String> words = new ArrayList<>(Arrays.asList(\"猫\", \"a\", \"elephant\"));\\n        // comparing でプロパティを基準に比較する\\n        words.sort(Comparator.comparing(String::length));\\n        // println で出力する\\n        System.out.println(words);\\n    }\\n}",
        "holeyCode": "import java.util.___\\n\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // wordsに[\"cat\", \"a\", \"elephant\"]を代入\\n        List<String> words = new ArrayList<>(Arrays.asList(\"___\", \"a\", \"elephant\"));\\n        // comparing でプロパティを基準に比較する\\n        words.sort(Comparator.comparing(String::___));\\n        // println で出力する\\n        System.out.___(words);\\n    ___\\n___",
        "correctLines": [
          "import java.util.*;",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // wordsに[\"cat\", \"a\", \"elephant\"]を代入",
          "        List<String> words = new ArrayList<>(Arrays.asList(\"cat\", \"a\", \"elephant\"));",
          "        // comparing でプロパティを基準に比較する",
          "        words.sort(Comparator.comparing(String::length));",
          "        // println で出力する",
          "        System.out.println(words);",
          "    }",
          "}"
        ],
        "lineHints": [
          "`new ArrayList<>(Arrays.asList(...))`でリストを作成します。",
          null,
          "変数の値をコンソールに出力し、改行します。",
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
          "methods": [
            "comparing",
            "compare",
            "compareTo",
            "new",
            "asList",
            "println"
          ],
          "others": ["*;", "Main", "main(String[] args) {", "cat", "length", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[a, cat, elephant]\\n"
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
            "content": "# 自然順序（しぜんじゅんじょ）の定義\\n\\n**Comparable**（コンパラブル＝比較可能な）を実装すると、オブジェクトに「自然な並び順」を定義できます。\\n\\n**たとえ話：** 数字には「1<2<3」という自然な順番があるように、自分で作ったクラスにも「この順番で並べてね」と教えられます。\\n\\n```java\\nclass Person implements Comparable<Person> {\\n    String name;\\n    public int compareTo(Person other) {\\n        // 名前のあいうえお順で比較\\n        return this.name.compareTo(other.name);\\n    }\\n}\\n```"
          },
          {
            "title": "compareTo のルール",
            "content": "# 戻り値（もどりち）の意味\\n\\n`compareTo` メソッドは、比較結果を数字で返します。\\n\\n**ルール：**\\n- `this < other` → マイナスの数を返す（自分が先）\\n- `this == other` → 0を返す（同じ順番）\\n- `this > other` → プラスの数を返す（相手が先）\\n\\n**例：年齢で比較する場合**\\n```java\\nreturn this.age - other.age;\\n// 25 - 30 = -5 （マイナス→自分が先）\\n// 30 - 30 = 0  （0→同じ）\\n// 35 - 30 = 5  （プラス→相手が先）\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "import java.util.*;\\n\\n// Comparable を実装して自然順序を定義する\\nclass Score implements Comparable<Score> {\\n    int value;\\n    Score(int v) { value = v; }\\n    public int compareTo(Score other) {\\n        // return で比較結果を返す\\n        return this.value - other.value;\\n    }\\n}\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // scoresに[Score(80), Score(60)]を代入\\n        List<Score> scores = Arrays.asList(new Score(80), new Score(60));\\n        // sort でソートする\\n        Collections.sort(scores);\\n        // get で要素を取得する\\n        System.out.println(scores.get(0).value);\\n    }\\n}",
        "holeyCode": "import java.util.___\\n\\n// Comparable を実装して自然順序を定義する\\nclass ___ implements Comparable<Score> {\\n    int ___;\\n    ___(int v) { value = v; }\\n    public int ___(Score other) {\\n        // return で比較結果を返す\\n        return this.___ - other.value;\\n    ___\\n___\\n\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // scoresに[Score(80), Score(60)]を代入\\n        List<Score> scores = Arrays.asList(new Score(___), new Score(60));\\n        // sort でソートする\\n        Collections.sort(___);\\n        // get で要素を取得する\\n        System.out.___(scores.get(0).value);\\n    ___\\n___",
        "correctLines": [
          "import java.util.*;",
          "",
          "// Comparable を実装して自然順序を定義する",
          "class Score implements Comparable<Score> {",
          "    int value;",
          "    Score(int v) { value = v; }",
          "    public int compareTo(Score other) {",
          "        // return で比較結果を返す",
          "        return this.value - other.value;",
          "    }",
          "}",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // scoresに[Score(80), Score(60)]を代入",
          "        List<Score> scores = Arrays.asList(new Score(80), new Score(60));",
          "        // sort でソートする",
          "        Collections.sort(scores);",
          "        // get で要素を取得する",
          "        System.out.println(scores.get(0).value);",
          "    }",
          "}"
        ],
        "lineHints": [
          "新しいクラス（Score）を定義します。",
          null,
          null,
          "配列の初期値を`Arrays.asList()`で渡します。",
          "`sort` でソートします。",
          "`get` で要素を取得します。",
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
          "interfaces": [
            "Comparable",
            "Comparator",
            "Sortable",
            "return",
            "asList",
            "sort",
            "get"
          ],
          "others": ["*;", "Score", "value", "compareTo", "}", "Main", "main(String[] args) {", "80", "scores", "println"]
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
        "description": "列挙型Enumを定義して使いましょう。",
        "difficulty": "hard",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "Enum（イーナム）とは？",
            "content": "# 固定の値の集合（しゅうごう）\\n\\n**Enum**（イーナム＝列挙型・れっきょがた）は、「決まった選択肢」を定義するものです。\\n\\n**たとえ話：** 信号機の色は「赤・黄・青」の3つだけですよね。それ以外はありません。Enumはこのように「限られた選択肢」を表します。\\n\\n```java\\nenum Color {  // 色の選択肢を定義\\n    RED, GREEN, BLUE  // 赤、緑、青の3つだけ\\n}\\n\\nColor c = Color.RED;  // 赤を選択\\n```"
          },
          {
            "title": "Enum のメリット",
            "content": "# 型安全（かたあんぜん）で明確\\n\\nEnumを使うと、間違った値を入れることができなくなります。\\n\\n**switch文で使える**\\n```java\\nswitch (color) {\\n    case RED: System.out.println(\"赤\"); break;\\n    case GREEN: System.out.println(\"緑\"); break;\\n    case BLUE: System.out.println(\"青\"); break;\\n}\\n```\\n\\n**全ての値を取得**\\n```java\\nColor.values()  // [RED, GREEN, BLUE]\\n```\\n\\n**メリット：** 「PURPRE」のようなタイプミスがあるとエラーになるので、間違いを防げます！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// Day列挙型を定義\\nenum Day {\\n    MON, TUE, WED, THU, FRI, SAT, SUN\\n}\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // Day.MON で列挙値を取得する\\n        Day today = Day.MON;\\n        // println で出力する\\n        System.out.println(today);\\n    }\\n}",
        "holeyCode": "// Day列挙型を定義\\nenum ___ {\\n    ___\\n___\\n\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // Day.MON で列挙値を取得する\\n        Day today = Day.___;\\n        // println で出力する\\n        System.out.___(today);\\n    ___\\n___",
        "correctLines": [
          "// Day列挙型を定義",
          "enum Day {",
          "    MON, TUE, WED, THU, FRI, SAT, SUN",
          "}",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // Day.MON で列挙値を取得する",
          "        Day today = Day.MON;",
          "        // println で出力する",
          "        System.out.println(today);",
          "    }",
          "}"
        ],
        "lineHints": [
          null,
          "`enum` で列挙型を定義します。",
          "`MON` で列挙値を取得します。",
          "変数の値をコンソールに出力し、改行します。",
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
            "enum",
            "class",
            "interface",
            "MON",
            "println"
          ],
          "others": ["Day", "MON, TUE, WED, THU, FRI, SAT, SUN", "}", "Main", "main(String[] args) {"]
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
        "description": "先入れ先出しのキューを学びましょう。",
        "difficulty": "hard",
        "orderIndex": 9,
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
        "initialDisplayMode": "holey",
        "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // queueにnew LinkedList<>()を代入\\n        Queue<String> queue = new LinkedList<>();\\n        // offer でキューに要素を追加する\\n        queue.offer(\"First\");\\n        // offer でキューに要素を追加する\\n        queue.offer(\"Second\");\\n        // poll で要素を取り出す\\n        System.out.println(queue.poll());\\n    }\\n}",
        "holeyCode": "import java.util.___\\n\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // queueにnew LinkedList<>()を代入\\n        Queue<String> queue = new ___<>();\\n        // offer でキューに要素を追加する\\n        queue.offer(\"___\");\\n        // offer でキューに要素を追加する\\n        queue.offer(\"___\");\\n        // poll で要素を取り出す\\n        System.out.___(queue.poll());\\n    ___\\n___",
        "correctLines": [
          "import java.util.*;",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // queueにnew LinkedList<>()を代入",
          "        Queue<String> queue = new LinkedList<>();",
          "        // offer でキューに要素を追加する",
          "        queue.offer(\"First\");",
          "        // offer でキューに要素を追加する",
          "        queue.offer(\"Second\");",
          "        // poll で要素を取り出す",
          "        System.out.println(queue.poll());",
          "    }",
          "}"
        ],
        "lineHints": [
          "`new` で LinkedList を作成します。",
          null,
          "`offer` でキューに要素を追加します。",
          "`poll` で要素を取り出します。",
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
          "methods": [
            "offer",
            "add",
            "push",
            "new",
            "poll"
          ],
          "others": ["*;", "Main", "main(String[] args) {", "LinkedList", "First", "Second", "println", "}"]
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
        "description": "両端キューDequeを学びましょう。",
        "difficulty": "hard",
        "orderIndex": 10,
        "tutorialSlides": [
          {
            "title": "Deque（デック）とは？",
            "content": "# 両端（りょうたん）から操作できるキュー\\n\\n**Deque**（デック＝Double-Ended Queue）は、先頭からも末尾からも追加・削除ができるキューです。\\n\\n**たとえ話：** 両開きドアのある電車のようなものです。前からも後ろからも乗り降りできます！\\n\\n```java\\nDeque<String> deque = new ArrayDeque<>();  // 両開きキューを作る\\ndeque.addFirst(\"A\");  // 先頭に追加\\ndeque.addLast(\"B\");   // 末尾に追加\\n```"
          },
          {
            "title": "スタックとしても使える",
            "content": "# 後入れ先出し（LIFO：ライフォー）\\n\\nDequeは**スタック**としても使えます。「最後に入れたものが最初に出る」構造です。\\n\\n**たとえ話：** お皿を積み重ねたイメージです。最後に置いたお皿が一番上にあるので、最初に取れますよね。\\n\\n```java\\nDeque<Integer> stack = new ArrayDeque<>();\\nstack.push(1);  // 1を積む\\nstack.push(2);  // 2を積む（1の上に）\\nstack.pop();    // 2を取り出す（一番上だから）\\n```\\n\\n**覚え方：**\\n- Queue（キュー）→ FIFO（先入れ先出し）：行列\\n- Stack（スタック）→ LIFO（後入れ先出し）：積み重ね"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // stackにnew ArrayDeque<>()を代入\\n        Deque<Integer> stack = new ArrayDeque<>();\\n        // push でスタックに積む\\n        stack.push(10);\\n        // push でスタックに積む\\n        stack.push(20);\\n        // pop でスタックから取り出す\\n        System.out.println(stack.pop());\\n    }\\n}",
        "holeyCode": "import java.util.___\\n\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // stackにnew ArrayDeque<>()を代入\\n        Deque<Integer> stack = new ___<>();\\n        // push でスタックに積む\\n        stack.push(___);\\n        // push でスタックに積む\\n        stack.push(___);\\n        // pop でスタックから取り出す\\n        System.out.___(stack.pop());\\n    ___\\n___",
        "correctLines": [
          "import java.util.*;",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // stackにnew ArrayDeque<>()を代入",
          "        Deque<Integer> stack = new ArrayDeque<>();",
          "        // push でスタックに積む",
          "        stack.push(10);",
          "        // push でスタックに積む",
          "        stack.push(20);",
          "        // pop でスタックから取り出す",
          "        System.out.println(stack.pop());",
          "    }",
          "}"
        ],
        "lineHints": [
          "`new` で ArrayDeque を作成します。",
          null,
          "`push` でスタックに積みます。",
          "`pop` でスタックから取り出します。",
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
          "methods": [
            "push",
            "add",
            "offer",
            "new",
            "pop"
          ],
          "others": ["*;", "Main", "main(String[] args) {", "ArrayDeque", "10", "20", "println", "}"]
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

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
    { "title": "Map の操作", "content": "# キーと値のペア\\n\\n```java\\nMap<String, Integer> map = new HashMap<>();\\nmap.put(\\\"apple\\\", 100);\\nmap.put(\\\"banana\\\", 80);\\n\\nSystem.out.println(map.get(\\\"apple\\\"));  // => 100\\n\\n// 全エントリを処理\\nmap.forEach((k, v) -> System.out.println(k + \\\": \\\" + v));\\n```" }
  ],
  "exercises": [
    {
      "title": "ジェネリクスの基本",
      "correctCode": "import java.util.*;\\n\\n// <T> で型パラメータを定義する\\nclass Box<T> {\\n    private T value;\\n    public void set(T v) { value = v; }\\n    public T get() { return value; }\\n}\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // boxにnew Box<>()を代入\\n        Box<String> box = new Box<>();\\n        // set で値を設定する\\n        box.set(\"Java\");\\n        // get で値を取得して出力する\\n        System.out.println(box.get());\\n    }\\n}",
      "holeyCode": "import ___.___.___\\n___\\n// <T> で型パラメータを定義する\\nclass ___<___> {\\n    private ___ ___;\\n    public void ___(___  ___) { ___ = ___; }\\n    public ___ ___() { return ___; }\\n___\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) {\\n        // boxにnew Box<>()を代入\\n        ___<___> ___ = new ___<>();\\n        // set で値を設定する\\n        ___.___(\"___\");\\n        // get で値を取得して出力する\\n        ___.___.___(___.___());\\n    ___\\n___",
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
          "java.util.* をインポートします。",
          null,
          null,
          "Box クラスを型パラメータ T で定義します。",
          "T 型のフィールド value を定義します。",
          "T 型の引数 v を受け取る set メソッドを定義します。",
          "T 型を返す get メソッドを定義します。",
          null,
          null,
          "Main クラスを定義します。",
          "main メソッドを String[] args で定義します。",
          null,
          "Box<String> 型の box を new Box<>() で初期化します。",
          null,
          "box.set(\"Java\") を呼び出します。",
          null,
          "System.out.println(box.get()) を呼び出します。",
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
      "correctCode": "// extends で型の上限を Number に制限する\\nclass Calculator<T extends Number> {\\n    private T value;\\n    public Calculator(T v) { value = v; }\\n    public double getDouble() { return value.doubleValue(); }\\n}\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // calcにnew Calculator<>(42)を代入\\n        Calculator<Integer> calc = new Calculator<>(42);\\n        // getDouble メソッドを呼び出す\\n        System.out.println(calc.getDouble());\\n    }\\n}",
      "holeyCode": "// extends で型の上限を Number に制限する\\nclass ___<___ extends ___> {\\n    private ___ ___;\\n    public ___(___ ___) { ___ = ___; }\\n    public ___ ___() { return ___.___(___; }\\n___\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) {\\n        // calcにnew Calculator<>(42)を代入\\n        ___<___> ___ = new ___<>(___);\\n        // getDouble メソッドを呼び出す\\n        ___.___.___(___.___());\\n    ___\\n___",
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
          "Calculator クラスを T extends Number で定義します。",
          "T 型のフィールド value を定義します。",
          "T 型の引数 v を受け取るコンストラクタを定義します。",
          "double 型を返す getDouble メソッドで value.doubleValue() を呼び出します。",
          null,
          null,
          "Main クラスを定義します。",
          "main メソッドを String[] args で定義します。",
          null,
          "Calculator<Integer> 型の calc を new Calculator<>(42) で初期化します。",
          null,
          "System.out.println(calc.getDouble()) を呼び出します。",
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    // ? で任意の型を表すワイルドカード\\n    public static void printAll(List<?> list) {\\n        for (Object item : list) {\\n            // println で出力する\\n            System.out.println(item);\\n        }\\n    }\\n    public static void main(String[] args) {\\n        // namesに[\"A\", \"B\"]を代入\\n        List<String> names = Arrays.asList(\"A\", \"B\");\\n        // printAll メソッドを呼び出す\\n        printAll(names);\\n    }\\n}",
      "holeyCode": "import ___.___.___\\n___\\npublic class ___ {\\n    // ? で任意の型を表すワイルドカード\\n    public static void ___(___<___> ___) {\\n        for (___ ___ : ___) {\\n            // println で出力する\\n            ___.___.___(___)\\n        ___\\n    ___\\n    public static void ___(___[] ___) {\\n        // namesに[\"A\", \"B\"]を代入\\n        ___<___> ___ = ___.___(\"___\", \"___\");\\n        // printAll メソッドを呼び出す\\n        ___(___);\\n    ___\\n___",
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
          "java.util.* をインポートします。",
          null,
          "Main クラスを定義します。",
          null,
          "printAll メソッドで List<?> list を引数に取ります。",
          "Object item を list からループします。",
          null,
          "System.out.println(item) を呼び出します。",
          null,
          null,
          "main メソッドを String[] args で定義します。",
          null,
          "List<String> names を Arrays.asList(\"A\", \"B\") で初期化します。",
          null,
          "printAll(names) を呼び出します。",
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // scoresにnew HashMap<>()を代入\\n        Map<String, Integer> scores = new HashMap<>();\\n        // put でキーと値を追加する\\n        scores.put(\"Math\", 90);\\n        // put でキーと値を追加する\\n        scores.put(\"English\", 85);\\n        // get で値を取得する\\n        System.out.println(scores.get(\"Math\"));\\n    }\\n}",
      "holeyCode": "import ___.___.___\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) {\\n        // scoresにnew HashMap<>()を代入\\n        ___<___, ___> ___ = new ___<>();\\n        // put でキーと値を追加する\\n        ___.___(\"___\", ___);\\n        // put でキーと値を追加する\\n        ___.___(\"___\", ___);\\n        // get で値を取得する\\n        ___.___.___(___.___( \"___\"));\\n    ___\\n___",
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
          "java.util.* をインポートします。",
          null,
          "Main クラスを定義します。",
          "main メソッドを String[] args で定義します。",
          null,
          "Map<String, Integer> scores を new HashMap<>() で初期化します。",
          null,
          "scores.put(\"Math\", 90) を呼び出します。",
          null,
          "scores.put(\"English\", 85) を呼び出します。",
          null,
          "System.out.println(scores.get(\"Math\")) を呼び出します。",
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // mapにnew HashMap<>()を代入\\n        Map<String, Integer> map = new HashMap<>();\\n        // put でキーと値を追加する\\n        map.put(\"A\", 1);\\n        // put でキーと値を追加する\\n        map.put(\"B\", 2);\\n        // entrySet でエントリを取得する\\n        for (Map.Entry<String, Integer> e : map.entrySet()) {\\n            // getKey でキーを取得する\\n            System.out.println(e.getKey());\\n        }\\n    }\\n}",
      "holeyCode": "import ___.___.___\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) {\\n        // mapにnew HashMap<>()を代入\\n        ___<___, ___> ___ = new ___<>();\\n        // put でキーと値を追加する\\n        ___.___(\"___\", ___);\\n        // put でキーと値を追加する\\n        ___.___(\"___\", ___);\\n        // entrySet でエントリを取得する\\n        for (___.___ <___, ___> ___ : ___.___()) {\\n            // getKey でキーを取得する\\n            ___.___.___(___.___());\\n        ___\\n    ___\\n___",
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
          "java.util.* をインポートします。",
          null,
          "Main クラスを定義します。",
          "main メソッドを String[] args で定義します。",
          null,
          "Map<String, Integer> map を new HashMap<>() で初期化します。",
          null,
          "map.put(\"A\", 1) を呼び出します。",
          null,
          "map.put(\"B\", 2) を呼び出します。",
          null,
          "Map.Entry<String, Integer> e で map.entrySet() をループします。",
          null,
          "System.out.println(e.getKey()) を呼び出します。",
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // wordsに[\"猫\", \"a\", \"elephant\"]を代入\\n        List<String> words = new ArrayList<>(Arrays.asList(\"猫\", \"a\", \"elephant\"));\\n        // comparing でプロパティを基準に比較する\\n        words.sort(Comparator.comparing(String::length));\\n        // println で出力する\\n        System.out.println(words);\\n    }\\n}",
      "holeyCode": "import ___.___.___\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) {\\n        // wordsに[\"猫\", \"a\", \"elephant\"]を代入\\n        ___<___> ___ = new ___<>(___.___(\"___\", \"___\", \"___\"));\\n        // comparing でプロパティを基準に比較する\\n        ___.___(___.___(___::___));\\n        // println で出力する\\n        ___.___.___(___)\\n    ___\\n___",
      "correctLines": [
          "import java.util.*;",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // wordsに[\"猫\", \"a\", \"elephant\"]を代入",
          "        List<String> words = new ArrayList<>(Arrays.asList(\"猫\", \"a\", \"elephant\"));",
          "        // comparing でプロパティを基準に比較する",
          "        words.sort(Comparator.comparing(String::length));",
          "        // println で出力する",
          "        System.out.println(words);",
          "    }",
          "}"
        ],
      "lineHints": [
          "java.util.* をインポートします。",
          null,
          "Main クラスを定義します。",
          "main メソッドを String[] args で定義します。",
          null,
          "List<String> words を new ArrayList<>(Arrays.asList(...)) で初期化します。",
          null,
          "words.sort(Comparator.comparing(String::length)) を呼び出します。",
          null,
          "System.out.println(words) を呼び出します。",
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
      "correctCode": "import java.util.*;\\n\\n// Comparable を実装して自然順序を定義する\\nclass Score implements Comparable<Score> {\\n    int value;\\n    Score(int v) { value = v; }\\n    public int compareTo(Score other) {\\n        // return で比較結果を返す\\n        return this.value - other.value;\\n    }\\n}\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // scoresに[Score(80), Score(60)]を代入\\n        List<Score> scores = Arrays.asList(new Score(80), new Score(60));\\n        // sort でソートする\\n        Collections.sort(scores);\\n        // get で要素を取得する\\n        System.out.println(scores.get(0).value);\\n    }\\n}",
      "holeyCode": "import ___.___.___\\n___\\n// Comparable を実装して自然順序を定義する\\nclass ___ implements ___<___> {\\n    ___ ___;\\n    ___(___ ___) { ___ = ___; }\\n    public ___ ___(___ ___) {\\n        // return で比較結果を返す\\n        return this.___ - ___.___;\\n    ___\\n___\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) {\\n        // scoresに[Score(80), Score(60)]を代入\\n        ___<___> ___ = ___.___(new ___(___), new ___(___));\\n        // sort でソートする\\n        ___.___(___);\\n        // get で要素を取得する\\n        ___.___.___(___.___(___).___)\\n    ___\\n___",
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
          "java.util.* をインポートします。",
          null,
          null,
          "Score クラスを Comparable<Score> で実装します。",
          "int 型のフィールド value を定義します。",
          "Score コンストラクタを int v で定義します。",
          "int を返す compareTo メソッドを Score other で定義します。",
          null,
          "this.value - other.value を返します。",
          null,
          null,
          null,
          "Main クラスを定義します。",
          "main メソッドを String[] args で定義します。",
          null,
          "List<Score> scores を Arrays.asList(new Score(80), new Score(60)) で初期化します。",
          null,
          "Collections.sort(scores) を呼び出します。",
          null,
          "System.out.println(scores.get(0).value) を呼び出します。",
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
      "correctCode": "// Day列挙型を定義\\nenum Day {\\n    MON, TUE, WED, THU, FRI, SAT, SUN\\n}\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // Day.MON で列挙値を取得する\\n        Day today = Day.MON;\\n        // println で出力する\\n        System.out.println(today);\\n    }\\n}",
      "holeyCode": "// Day列挙型を定義\\nenum ___ {\\n    ___, ___, ___, ___, ___, ___, ___\\n___\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) {\\n        // Day.MON で列挙値を取得する\\n        ___ ___ = ___.___;\\n        // println で出力する\\n        ___.___.___(___)\\n    ___\\n___",
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
          "Day 列挙型を定義します。",
          "MON, TUE, WED, THU, FRI, SAT, SUN の各定数を定義します。",
          null,
          null,
          "Main クラスを定義します。",
          "main メソッドを String[] args で定義します。",
          null,
          "Day today を Day.MON で初期化します。",
          null,
          "System.out.println(today) を呼び出します。",
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // queueにnew LinkedList<>()を代入\\n        Queue<String> queue = new LinkedList<>();\\n        // offer でキューに要素を追加する\\n        queue.offer(\"First\");\\n        // offer でキューに要素を追加する\\n        queue.offer(\"Second\");\\n        // poll で要素を取り出す\\n        System.out.println(queue.poll());\\n    }\\n}",
      "holeyCode": "import ___.___.___\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) {\\n        // queueにnew LinkedList<>()を代入\\n        ___<___> ___ = new ___<>();\\n        // offer でキューに要素を追加する\\n        ___.___(\"___\");\\n        // offer でキューに要素を追加する\\n        ___.___(\"___\");\\n        // poll で要素を取り出す\\n        ___.___.___(___.___());\\n    ___\\n___",
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
          "java.util.* をインポートします。",
          null,
          "Main クラスを定義します。",
          "main メソッドを String[] args で定義します。",
          null,
          "Queue<String> queue を new LinkedList<>() で初期化します。",
          null,
          "queue.offer(\"First\") を呼び出します。",
          null,
          "queue.offer(\"Second\") を呼び出します。",
          null,
          "System.out.println(queue.poll()) を呼び出します。",
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // stackにnew ArrayDeque<>()を代入\\n        Deque<Integer> stack = new ArrayDeque<>();\\n        // push でスタックに積む\\n        stack.push(10);\\n        // push でスタックに積む\\n        stack.push(20);\\n        // pop でスタックから取り出す\\n        System.out.println(stack.pop());\\n    }\\n}",
      "holeyCode": "import ___.___.___\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) {\\n        // stackにnew ArrayDeque<>()を代入\\n        ___<___> ___ = new ___<>();\\n        // push でスタックに積む\\n        ___.___(___);\\n        // push でスタックに積む\\n        ___.___(___);\\n        // pop でスタックから取り出す\\n        ___.___.___(___.___());\\n    ___\\n___",
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
          "java.util.* をインポートします。",
          null,
          "Main クラスを定義します。",
          "main メソッドを String[] args で定義します。",
          null,
          "Deque<Integer> stack を new ArrayDeque<>() で初期化します。",
          null,
          "stack.push(10) を呼び出します。",
          null,
          "stack.push(20) を呼び出します。",
          null,
          "System.out.println(stack.pop()) を呼び出します。",
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

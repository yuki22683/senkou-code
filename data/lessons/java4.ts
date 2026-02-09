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
      "correctCode": "import java.util.*;\\n\\n// <T> で型パラメータを定義する\\nclass Box<T> {\\n    private T value;\\n    public void set(T v) { value = v; }\\n    public T get() { return value; }\\n}\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // boxにnew Box<>()を代入\\n        Box<String> box = new Box<>();\\n        // set で値を設定する\\n        box.set(\"Java\");\\n        // get で値を取得して出力する\\n        System.out.println(box.get());\\n    }\\n}",
      "holeyCode": "import java.util.___\\n___\\n// <T> で型パラメータを定義する\\nclass ___<T> {\\n    private T ___;\\n    public void ___(T v) { value = v; }\\n    public T ___() { return value; }\\n___\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // boxにnew Box<>()を代入\\n        ___<String> box = new Box<>();\\n        // set で値を設定する\\n        ___.set(\"___\");\\n        // get で値を取得して出力する\\n        System.out.___(box.get());\\n    ___\\n___",
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
          "Javaユーティリティライブラリをインポートします。",
          null,
          null,
          "新しいクラス（Box）を定義します。",
          "ここを正しく入力してください。",
          "`set` で値を設定します。",
          "`get` で値を取得します。",
          "ここを正しく入力してください。",
          null,
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "<",
            ">",
            "new",
            "set",
            "get"
          ],
          "others": ["*;", "Box", "value", "}", "Main", "main(String[] args) {", "Java", "println", "box", "*;", "", "}\\"]
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
      "holeyCode": "// extends で型の上限を Number に制限する\\nclass ___<T extends Number> {\\n    private T ___;\\n    public ___(T v) { value = v; }\\n    public double ___() { return value.doubleValue(); }\\n___\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // calcにnew Calculator<>(42)を代入\\n        Calculator<Integer> calc = new Calculator<>(___);\\n        // getDouble メソッドを呼び出す\\n        System.out.___(calc.getDouble());\\n    ___\\n___",
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
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "`new` でインスタンスを作成します。",
          null,
          "`getDouble` メソッドを呼び出します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "extends",
            "implements",
            "super",
            "new",
            "getDouble"
          ],
          "others": ["Calculator", "value", "}", "Main", "main(String[] args) {", "42", "println", "}"]
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
      "holeyCode": "import java.util.___\\n___\\npublic class ___ {\\n    // ? で任意の型を表すワイルドカード\\n    public static void printAll(List<?> ___) {\\n        for (Object ___ : list) {\\n            // println で出力する\\n            System.out.___(item);\\n        ___\\n    ___\\n    public static void ___\\(String[] args) {\\n        // namesに[\"A\", \"B\"]を代入\\n        List<String> names = Arrays.asList(\"___\", \"B\");\\n        // printAll メソッドを呼び出す\\n        printAll(___);\\n    ___\\n___",
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
          "Javaユーティリティライブラリをインポートします。",
          null,
          "外部からアクセス可能なクラス（Main）を定義します。",
          null,
          "`?` で任意の型を表します。",
          "繰り返し処理（ループ）を開始する。",
          null,
          "変数の値をコンソールに出力し、改行します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "配列の初期値を`Arrays.asList()`で渡します。",
          null,
          "`printAll` メソッドを呼び出します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
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
          "others": ["*;", "Main", "list", "item", "}", "main(String[] args) {", "A", "names", "*;", "", "}\\"]
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
      "holeyCode": "import java.util.___\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // scoresにnew HashMap<>()を代入\\n        Map<String, Integer> scores = new ___<>();\\n        // put でキーと値を追加する\\n        ___.put(\"___\", 90);\\n        // put でキーと値を追加する\\n        scores.put(\"___\", 85);\\n        // get で値を取得する\\n        System.out.___(scores.get(\"Math\"));\\n    ___\\n___",
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
          "Javaユーティリティライブラリをインポートします。",
          null,
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "`new` で HashMap を作成します。",
          null,
          "`put` でキーと値を追加します。",
          null,
          "ここを正しく入力してください。",
          null,
          "`get` で値を取得します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "put",
            "set",
            "add",
            "new",
            "get"
          ],
          "others": ["*;", "Main", "main(String[] args) {", "HashMap", "Math", "English", "println", "}", "scores", "*;", "", "}\\"]
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
      "holeyCode": "import java.util.___\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // mapにnew HashMap<>()を代入\\n        Map<String, Integer> map = new ___<>();\\n        // put でキーと値を追加する\\n        ___.put(\"___\", 1);\\n        // put でキーと値を追加する\\n        map.put(\"___\", 2);\\n        // entrySet でエントリを取得する\\n        for (Map.Entry<String, Integer> e : map.___()) {\\n            // getKey でキーを取得する\\n            System.out.___(e.getKey());\\n        ___\\n    ___\\n___",
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
          "Javaユーティリティライブラリをインポートします。",
          null,
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "`new` で HashMap を作成します。",
          null,
          "`put` でキーと値を追加します。",
          null,
          "ここを正しく入力してください。",
          null,
          "指定された回数や範囲で、繰り返し処理（ループ）を行います。",
          null,
          "`getKey` でキーを取得します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
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
          "others": ["*;", "Main", "main(String[] args) {", "HashMap", "A", "B", "println", "}", "map", "*;", "", "}\\"]
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
      "holeyCode": "import java.util.___\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // wordsに[\"猫\", \"a\", \"elephant\"]を代入\\n        List<String> words = new ArrayList<>(Arrays.asList(\"___\", \"a\", \"elephant\"));\\n        // comparing でプロパティを基準に比較する\\n        words.sort(Comparator.comparing(String::___));\\n        // println で出力する\\n        System.out.___(words);\\n    ___\\n___",
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
          "Javaユーティリティライブラリをインポートします。",
          null,
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "`new ArrayList<>(Arrays.asList(...))`でリストを作成します。",
          null,
          "ここを正しく入力してください。",
          null,
          "変数の値をコンソールに出力し、改行します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
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
          "others": ["*;", "Main", "main(String[] args) {", "length", "}", "猫", "*;", "", "}\\"]
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
      "holeyCode": "import java.util.___\\n___\\n// Comparable を実装して自然順序を定義する\\nclass ___ implements Comparable<Score> {\\n    int ___;\\n    ___(int v) { value = v; }\\n    public int ___(Score other) {\\n        // return で比較結果を返す\\n        return this.___ - other.value;\\n    ___\\n___\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // scoresに[Score(80), Score(60)]を代入\\n        List<Score> scores = Arrays.asList(new Score(___), new Score(60));\\n        // sort でソートする\\n        Collections.sort(___);\\n        // get で要素を取得する\\n        System.out.___(scores.get(0).value);\\n    ___\\n___",
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
          "Javaユーティリティライブラリをインポートします。",
          null,
          null,
          "新しいクラス（Score）を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "配列の初期値を`Arrays.asList()`で渡します。",
          null,
          "`sort` でソートします。",
          null,
          "`get` で要素を取得します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
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
          "others": ["*;", "Score", "value", "compareTo", "}", "Main", "main(String[] args) {", "80", "scores", "println", "*;", "", "}\\"]
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
      "holeyCode": "// Day列挙型を定義\\nenum ___ {\\n    ___\\n___\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // Day.MON で列挙値を取得する\\n        Day today = Day.___;\\n        // println で出力する\\n        System.out.___(today);\\n    ___\\n___",
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
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "変数の値をコンソールに出力し、改行します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "enum",
            "class",
            "interface",
            "MON",
            "println"
          ],
          "others": ["Day", "MON, TUE, WED, THU, FRI, SAT, SUN", "}", "Main", "main(String[] args) {", "MON, TUE, WED, THU, FRI, SAT, SUN", "}"]
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
      "holeyCode": "import java.util.___\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // queueにnew LinkedList<>()を代入\\n        Queue<String> queue = new ___<>();\\n        // offer でキューに要素を追加する\\n        ___.offer(\"___\");\\n        // offer でキューに要素を追加する\\n        queue.offer(\"___\");\\n        // poll で要素を取り出す\\n        System.out.___(queue.poll());\\n    ___\\n___",
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
          "Javaユーティリティライブラリをインポートします。",
          null,
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "`new` で LinkedList を作成します。",
          null,
          "`offer` でキューに要素を追加します。",
          null,
          "ここを正しく入力してください。",
          null,
          "`poll` で要素を取り出します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "offer",
            "add",
            "push",
            "new",
            "poll"
          ],
          "others": ["*;", "Main", "main(String[] args) {", "LinkedList", "First", "Second", "println", "}", "queue", "*;", "", "}\\"]
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
      "holeyCode": "import java.util.___\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // stackにnew ArrayDeque<>()を代入\\n        Deque<Integer> stack = new ___<>();\\n        // push でスタックに積む\\n        stack.push(___);\\n        // push でスタックに積む\\n        stack.push(___);\\n        // pop でスタックから取り出す\\n        System.out.___(stack.pop());\\n    ___\\n___",
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
          "Javaユーティリティライブラリをインポートします。",
          null,
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "`new` で ArrayDeque を作成します。",
          null,
          "`push` でスタックに積みます。",
          null,
          "ここを正しく入力してください。",
          null,
          "`pop` でスタックから取り出します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "push",
            "add",
            "offer",
            "new",
            "pop"
          ],
          "others": ["*;", "Main", "main(String[] args) {", "ArrayDeque", "10", "20", "println", "}", "*;", "", "}\\"]
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

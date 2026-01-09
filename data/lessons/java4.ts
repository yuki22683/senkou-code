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
          "content": "# 型を後から指定\n\n**ジェネリクス** は、クラスやメソッドの型を後から指定できる機能です。\n\n```java\n// 型パラメータ T を使用\nclass Box<T> {\n    private T value;\n    public void set(T v) { value = v; }\n    public T get() { return value; }\n}\n```"
        },
        {
          "title": "使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# 型を指定して使う\n\n```java\nBox<String> box = new Box<>();\nbox.set(\"Hello\");\nString s = box.get(); // キャスト不要\n\nBox<Integer> numBox = new Box<>();\nnumBox.set(42);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\n\nclass Box<T> {\n    private T value;\n    public void set(T v) { value = v; }\n    public T get() { return value; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Box<String> box = new Box<>();\n        box.set(\"Java\");\n        System.out.println(box.get());\n    }\n}",
      "holeyCode": "___"Java\");\n        System.out.println(box.get());\n    }\n}",
      "correctLines": [
        ""import java.util.*;",\n        "",\n        "// < と > を入力して型を包んでね",\n        "class Box<T> {",\n        "    private T value;",\n        "    public void set(T v) { value = v; }",\n        "    public T get() { return value; }",\n        "}",\n        "",\n        "public class Main {",\n        "    public static void main(String["
      ] args) {",
        "        Box<String> box = new Box<>();",
        "        box.set(\"Java\");",
        "        System.out.println(box.get());",
        "    }",
        "}"
      ],
      "lineHints": [
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
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "operators": ["<", ">"]
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
          "title": "extends で制約",
          "image": "/illustrations/3d_advanced/inheritance.png",
          "content": "# 特定の型のサブタイプに限定\n\n**extends** を使うと、型パラメータに制約を設けられます。\n\n```java\n// Number のサブクラスのみ\nclass NumBox<T extends Number> {\n    private T value;\n    public double doubleValue() {\n        return value.doubleValue();\n    }\n}\n```"
        },
        {
          "title": "メリット",
          "image": "/illustrations/3d/robot.png",
          "content": "# 型固有のメソッドが使える\n\n```java\nNumBox<Integer> box = new NumBox<>();\n// OK: Integer は Number のサブクラス\n\nNumBox<String> box2; \n// コンパイルエラー！\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Calculator<T extends Number> {\n    private T value;\n    public Calculator(T v) { value = v; }\n    public double getDouble() { return value.doubleValue(); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Calculator<Integer> calc = new Calculator<>(42);\n        System.out.println(calc.getDouble());\n    }\n}",
      "holeyCode": "___",
      "correctLines": [
        ""// extends と入力して、Number（数字）の仲間だけにしましょう",\n        "class Calculator<T extends Number> {",\n        "    private T value;",\n        "    public Calculator(T v) { value = v; }",\n        "    public double getDouble() { return value.doubleValue(); }",\n        "}",\n        "",\n        "public class Main {",\n        "    public static void main(String["
      ] args) {",
        "        Calculator<Integer> calc = new Calculator<>(42);",
        "        System.out.println(calc.getDouble());",
        "    }",
        "}"
      ],
      "lineHints": [
        "extends で型の上限を指定します。",
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
        "keywords": ["extends", "implements", "super"]
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
          "title": "? ワイルドカード",
          "image": "/illustrations/3d/robot.png",
          "content": "# 不明な型を表す\n\n**?** は任意の型を表すワイルドカードです。\n\n```java\n// どんな型のリストも受け取れる\npublic void printList(List<?> list) {\n    for (Object o : list) {\n        System.out.println(o);\n    }\n}\n```"
        },
        {
          "title": "境界付きワイルドカード",
          "image": "/illustrations/3d/robot.png",
          "content": "# 上限・下限の指定\n\n```java\n// Number以下の型 (上限)\nList<? extends Number>\n\n// Integer以上の型 (下限)\nList<? super Integer>\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\n\npublic class Main {\n    public static void printAll(List<?> list) {\n        for (Object item : list) {\n            System.out.println(item);\n        }\n    }\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList(\"A\", \"B\");\n        printAll(names);\n    }\n}",
      "holeyCode": "___"A\", \"B\");\n        printAll(names);\n    }\n}",
      "correctLines": [
        ""import java.util.*;",\n        "",\n        "public class Main {",\n        "    // ? と入力して、どんな型でもいいよって教えてね",\n        "    public static void printAll(List<?> list) {",\n        "        for (Object item : list) {",\n        "            System.out.println(item);",\n        "        }",\n        "    }",\n        "    public static void main(String["
      ] args) {",
        "        List<String> names = Arrays.asList(\"A\", \"B\");",
        "        printAll(names);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "? で任意の型を表します。",
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
        "symbols": ["?", "*", "T"]
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
          "title": "Map とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# キーと値の対応\n\n**Map** は、キーと値のペアを格納するデータ構造です。\n\n```java\nMap<String, Integer> ages = new HashMap<>();\nages.put(\"Alice\", 25);\nages.put(\"Bob\", 30);\n\nint age = ages.get(\"Alice\"); // 25\n```"
        },
        {
          "title": "便利なメソッド",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# よく使うメソッド\n\n```java\nages.containsKey(\"Alice\"); // true\nages.getOrDefault(\"Carol\", 0); // 0\nages.keySet(); // [Alice, Bob]\nages.values(); // [25, 30]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Map<String, Integer> scores = new HashMap<>();\n        scores.put(\"Math\", 90);\n        scores.put(\"English\", 85);\n        System.out.println(scores.get(\"Math\"));\n    }\n}",
      "holeyCode": "___"Math\", 90);\n        scores.put(\"English\", 85);\n        System.out.println(scores.get(\"Math\"));\n    }\n}",
      "correctLines": [
        ""import java.util.*;",\n        "",\n        "public class Main {",\n        "    public static void main(String["
      ] args) {",
        "        Map<String, Integer> scores = new HashMap<>();",
        "        // ここに put と入力してデータを追加してね",
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
        "put でキーと値を追加します。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "methods": ["put", "set", "add"]
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
          "title": "entrySet",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# キーと値のセットを取得\n\n**entrySet** でキーと値のペアを取得できます。\n\n```java\nfor (Map.Entry<String, Integer> e : map.entrySet()) {\n    System.out.println(e.getKey() + \": \" + e.getValue());\n}\n```"
        },
        {
          "title": "forEach メソッド",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# Java 8以降の書き方\n\n```java\nmap.forEach((key, value) -> {\n    System.out.println(key + \": \" + value);\n});\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Map<String, Integer> map = new HashMap<>();\n        map.put(\"A\", 1);\n        map.put(\"B\", 2);\n        for (Map.Entry<String, Integer> e : map.entrySet()) {\n            System.out.println(e.getKey());\n        }\n    }\n}",
      "holeyCode": "___"A\", 1);\n        map.put(\"B\", 2);\n        // ここに entrySet と入力してペアを取り出してね\n        for (Map.Entry<String, Integer> e : map.___()) {\n            System.out.println(e.getKey());\n        }\n    }\n}",
      "correctLines": [
        ""import java.util.*;",\n        "",\n        "public class Main {",\n        "    public static void main(String["
      ] args) {",
        "        Map<String, Integer> map = new HashMap<>();",
        "        map.put(\"A\", 1);",
        "        map.put(\"B\", 2);",
        "        // ここに entrySet と入力してペアを取り出してね",
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
        null,
        null,
        "entrySet でエントリを取得します。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "methods": ["entrySet", "keySet", "values"]
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
          "title": "Comparator とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 比較のルールを定義\n\n**Comparator** は、オブジェクトの比較方法を定義するインターフェースです。\n\n```java\nList<String> list = Arrays.asList(\"bb\", \"a\", \"ccc\");\nlist.sort(Comparator.comparing(String::length));\n// [a, bb, ccc] - 長さ順\n```"
        },
        {
          "title": "便利なメソッド",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# Comparatorの作成方法\n\n```java\n// 自然順序\nComparator.naturalOrder()\n\n// 逆順\nComparator.reverseOrder()\n\n// プロパティで比較\nComparator.comparing(Person::getName)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> words = new ArrayList<>(Arrays.asList(\"cat\", \"a\", \"elephant\"));\n        words.sort(Comparator.comparing(String::length));\n        System.out.println(words);\n    }\n}",
      "holeyCode": "___"cat\", \"a\", \"elephant\"));\n        // ここに comparing と入力して、比べるルールを決めてね\n        words.sort(Comparator.___(String::length));\n        System.out.println(words);\n    }\n}",
      "correctLines": [
        ""import java.util.*;",\n        "",\n        "public class Main {",\n        "    public static void main(String["
      ] args) {",
        "        List<String> words = new ArrayList<>(Arrays.asList(\"cat\", \"a\", \"elephant\"));",
        "        // ここに comparing と入力して、比べるルールを決めてね",
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
        "comparing でプロパティを基準に比較します。",
        null,
        null,
        null
      ],
      "candidates": {
        "methods": ["comparing", "compare", "compareTo"]
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
          "title": "Comparable とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 自然順序の定義\n\n**Comparable** を実装すると、オブジェクトに自然な順序を定義できます。\n\n```java\nclass Person implements Comparable<Person> {\n    String name;\n    public int compareTo(Person other) {\n        return this.name.compareTo(other.name);\n    }\n}\n```"
        },
        {
          "title": "compareTo のルール",
          "image": "/illustrations/3d/robot.png",
          "content": "# 戻り値の意味\n\n```java\n// this < other → 負の数\n// this == other → 0\n// this > other → 正の数\n\nreturn this.age - other.age;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\n\nclass Score implements Comparable<Score> {\n    int value;\n    Score(int v) { value = v; }\n    public int compareTo(Score other) {\n        return this.value - other.value;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Score> scores = Arrays.asList(new Score(80), new Score(60));\n        Collections.sort(scores);\n        System.out.println(scores.get(0).value);\n    }\n}",
      "holeyCode": "___",
      "correctLines": [
        ""import java.util.*;",\n        "",\n        "// Comparable と入力して、比べられるようにしましょう",\n        "class Score implements Comparable<Score> {",\n        "    int value;",\n        "    Score(int v) { value = v; }",\n        "    public int compareTo(Score other) {",\n        "        return this.value - other.value;",\n        "    }",\n        "}",\n        "",\n        "public class Main {",\n        "    public static void main(String["
      ] args) {",
        "        List<Score> scores = Arrays.asList(new Score(80), new Score(60));",
        "        Collections.sort(scores);",
        "        System.out.println(scores.get(0).value);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "Comparable を実装して自然順序を定義します。",
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
        "interfaces": ["Comparable", "Comparator", "Sortable"]
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
          "title": "Enum とは？",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 固定の値の集合\n\n**Enum** は、固定された値の集合を定義します。\n\n```java\nenum Color {\n    RED, GREEN, BLUE\n}\n\nColor c = Color.RED;\n```"
        },
        {
          "title": "Enum のメリット",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 型安全で明確\n\n```java\n// switch文で使える\nswitch (color) {\n    case RED: System.out.println(\"赤\");\n    case GREEN: System.out.println(\"緑\");\n}\n\n// 全値を取得\nColor.values()\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "enum Day {\n    MON, TUE, WED, THU, FRI, SAT, SUN\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Day today = Day.MON;\n        System.out.println(today);\n    }\n}",
      "holeyCode": "___\\n___\\n___\\n___\\n___\\n___\\n___",
      "correctLines": [
        ""// enum と入力して、種類を並べてね",\n        "enum Day {",\n        "    MON",
        "TUE",
        "WED",
        "THU",
        "FRI",
        "SAT",
        "SUN",\n        "}",\n        "",\n        "public class Main {",\n        "    public static void main(String["
      ] args) {",
        "        Day today = Day.MON;",
        "        System.out.println(today);",
        "    }",
        "}"
      ],
      "lineHints": [
        "enum で列挙型を定義します。",
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
        "keywords": ["enum", "class", "interface"]
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
          "title": "Queue とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 先入れ先出し（FIFO）\n\n**Queue** は、最初に追加した要素が最初に取り出されるデータ構造です。\n\n```java\nQueue<String> queue = new LinkedList<>();\nqueue.offer(\"A\"); // 追加\nqueue.offer(\"B\");\nqueue.poll();     // A を取り出し\n```"
        },
        {
          "title": "メソッド",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# 主なメソッド\n\n```java\noffer(e)  // 要素を追加\npoll()    // 先頭を取り出し（空ならnull）\npeek()    // 先頭を見る（削除しない）\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Queue<String> queue = new LinkedList<>();\n        queue.offer(\"First\");\n        queue.offer(\"Second\");\n        System.out.println(queue.poll());\n    }\n}",
      "holeyCode": "___"First\");\n        queue.offer(\"Second\");\n        System.out.println(queue.poll());\n    }\n}",
      "correctLines": [
        ""import java.util.*;",\n        "",\n        "public class Main {",\n        "    public static void main(String["
      ] args) {",
        "        Queue<String> queue = new LinkedList<>();",
        "        // ここに offer と入力して順番待ちの列に入れてね",
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
        "offer でキューに要素を追加します。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "methods": ["offer", "add", "push"]
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
          "title": "Deque とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 両端から操作できるキュー\n\n**Deque** は、先頭と末尾の両方から追加・削除ができます。\n\n```java\nDeque<String> deque = new ArrayDeque<>();\ndeque.addFirst(\"A\");\ndeque.addLast(\"B\");\n```"
        },
        {
          "title": "スタックとしても使える",
          "image": "/illustrations/3d/robot.png",
          "content": "# 後入れ先出し（LIFO）\n\n```java\nDeque<Integer> stack = new ArrayDeque<>();\nstack.push(1);  // 先頭に追加\nstack.push(2);\nstack.pop();    // 2 を取り出し\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Deque<Integer> stack = new ArrayDeque<>();\n        stack.push(10);\n        stack.push(20);\n        System.out.println(stack.pop());\n    }\n}",
      "holeyCode": "___",
      "correctLines": [
        ""import java.util.*;",\n        "",\n        "public class Main {",\n        "    public static void main(String["
      ] args) {",
        "        Deque<Integer> stack = new ArrayDeque<>();",
        "        stack.push(10);",
        "        // ここに push と入力して、上に積んでね",
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
        null,
        "push でスタックに積みます。",
        null,
        null,
        null
      ],
      "candidates": {
        "methods": ["push", "add", "offer"]
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

export const javaData3 = {
  "language": "java",
  "lessonId": "java-3",
  "lessonTitle": "Java III - Stream APIとラムダ",
  "lessonDescription": "Java 8以降の機能を学びます。Stream API、ラムダ式、Optionalなど、モダンなJavaを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "tutorialSlides": [
    { "title": "ラムダ式とは？", "content": "# 簡潔な関数の書き方\\n\\n**ラムダ式**は、匿名関数を簡潔に書ける構文です。\\n\\n```java\\n// 従来の書き方\\nRunnable r = new Runnable() {\\n    public void run() { System.out.println(\\\"Hi\\\"); }\\n};\\n\\n// ラムダ式\\nRunnable r = () -> System.out.println(\\\"Hi\\\");\\n```\\n\\n`->` で引数と処理を区切ります。" },
    { "title": "ラムダ式の構文", "content": "# (引数) -> 処理\\n\\n```java\\n// 引数なし\\n() -> System.out.println(\\\"Hello\\\")\\n\\n// 引数1つ（カッコ省略可）\\nx -> x * 2\\n\\n// 引数複数\\n(a, b) -> a + b\\n```" },
    { "title": "Stream API", "content": "# データの流れを処理\\n\\n**Stream**はコレクションの要素を順番に処理するAPIです。\\n\\n```java\\nList<String> list = Arrays.asList(\\\"a\\\", \\\"b\\\", \\\"c\\\");\\nlist.stream()\\n    .forEach(System.out::println);\\n```\\n\\n`.stream()` でStreamを作成し、`.forEach()` で各要素を処理します。" },
    { "title": "map と filter", "content": "# 変換と絞り込み\\n\\n**map**: 各要素を変換\\n```java\\nnums.stream()\\n    .map(n -> n * 2)\\n    .forEach(System.out::println);\\n```\\n\\n**filter**: 条件に合う要素だけ残す\\n```java\\nnums.stream()\\n    .filter(n -> n > 2)\\n    .forEach(System.out::println);\\n```" },
    { "title": "Optional", "content": "# nullを安全に扱う\\n\\n**Optional**はnullの可能性がある値を安全に扱うためのクラスです。\\n\\n```java\\nOptional<String> opt = Optional.of(\\\"Hello\\\");\\nopt.ifPresent(System.out::println);\\n\\nOptional<String> empty = Optional.empty();\\nSystem.out.println(empty.orElse(\\\"デフォルト\\\"));\\n```\\n\\n=> Hello\\n\\nNullPointerExceptionを防げます！" }
  ],
  "exercises": [
    {
      "title": "ラムダ式の基本",
      "description": "名前のない簡潔な関数を作る方法を学びます",
      "tutorialSlides": [
        {
          "title": "ラムダ式とは？",
          "content": "# 簡潔な関数の書き方\\n\\n**ラムダ式** は、匿名関数を簡潔に書ける構文です。\\n\\n```java\\n// 従来の書き方\\nRunnable r = new Runnable() {\\n    public void run() { System.out.println(\"Hi\"); }\\n};\\n\\n// ラムダ式\\nRunnable r = () -> System.out.println(\"Hi\");\\n```"
        },
        {
          "title": "構文",
          "content": "# (引数) -> 処理\\n\\n```java\\n// 引数なし\\n() -> System.out.println(\"Hello\")\\n\\n// 引数1つ（カッコ省略可）\\nx -> x * 2\\n\\n// 引数複数\\n(a, b) -> a + b\\n```"
        }
      ],
      "correctCode": "// importでjava.util.function.Functionを読み込む\\nimport java.util.function.Function;\\n\\n// public classでMainクラスを定義\\npublic class Main {\\n    // public static void mainでエントリーポイントを定義\\n    public static void main(String[] args) {\\n        // Function型のsquareにラムダ式（xの2乗）を代入\\n        Function<Integer, Integer> square = x -> x * x;\\n        // printlnでsquareに5を適用した結果（25）を出力\\n        System.out.println(square.apply(5));\\n    // mainメソッドを閉じる\\n    }\\n// Mainクラスを閉じる\\n}", "holeyCode": "// importでjava.util.function.Functionを読み込む\\nimport ___.___.___.___.;\\n___\\n// public classでMainクラスを定義\\npublic class ___ {\\n    // public static void mainでエントリーポイントを定義\\n    public static void ___(___[] ___) {\\n        // Function型のsquareにラムダ式（xの2乗）を代入\\n        ___<___, ___> ___ = ___ ___ ___ * ___;\\n        // printlnでsquareに5を適用した結果（25）を出力\\n        ___.___.___(___.___(___)___\\n    // mainメソッドを閉じる\\n    ___\\n// Mainクラスを閉じる\\n___",
      "correctLines": [
          "// importでjava.util.function.Functionを読み込む",
          "import java.util.function.Function;",
          "",
          "// public classでMainクラスを定義",
          "public class Main {",
          "    // public static void mainでエントリーポイントを定義",
          "    public static void main(String[] args) {",
          "        // Function型のsquareにラムダ式（xの2乗）を代入",
          "        Function<Integer, Integer> square = x -> x * x;",
          "        // printlnでsquareに5を適用した結果（25）を出力",
          "        System.out.println(square.apply(5));",
          "    // mainメソッドを閉じる",
          "    }",
          "// Mainクラスを閉じる",
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
          ""
        ],
        "candidates": {
          "operators": [
            "->",
            "=>",
            "::",
            "."
          ],
          "others": ["java", "util", "function", "Function", "Main", "main", "String", "args", "Integer", "square", "x", "System", "out", "println", "apply", "5", ");", "}", "", "Function;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "25\\n"
          }
        ]
      },
    {
      "title": "Stream の作成",
      "description": "Streamについて学びます",
      "tutorialSlides": [
        {
          "title": "Stream とは？",
          "content": "# データの流れを処理\\n\\n**Stream** は、コレクションの要素を順番に処理するためのAPIです。\\n\\n```java\\nList<String> list = Arrays.asList(\"a\", \"b\", \"c\");\\nStream<String> stream = list.stream();\\n```"
        },
        {
          "title": "Stream の作り方",
          "content": "# いろいろな作成方法\\n\\n```java\\n// コレクションから\\nlist.stream()\\n\\n// 配列から\\nArrays.stream(array)\\n\\n// 値から直接\\nStream.of(1, 2, 3)\\n```"
        }
      ],
      "correctCode": "// importでjava.util.*を読み込む\\nimport java.util.*;\\n// importでjava.util.stream.*を読み込む\\nimport java.util.stream.*;\\n\\n// public classでMainクラスを定義\\npublic class Main {\\n    // public static void mainでエントリーポイントを定義\\n    public static void main(String[] args) {\\n        // List型のnumsに数値リスト（1、2、3）を代入\\n        List<Integer> nums = Arrays.asList(1, 2, 3);\\n        // streamでStream作成しforEachで各要素を出力\\n        nums.stream().forEach(System.out::println);\\n    // mainメソッドを閉じる\\n    }\\n// Mainクラスを閉じる\\n}", "holeyCode": "// importでjava.util.*を読み込む\\nimport ___.___.___\\n// importでjava.util.stream.*を読み込む\\nimport ___.___.___.___\\n___\\n// public classでMainクラスを定義\\npublic class ___ {\\n    // public static void mainでエントリーポイントを定義\\n    public static void ___(___[] ___) {\\n        // List型のnumsに数値リスト（1、2、3）を代入\\n        ___<___> ___ = ___.___(___,___, ___);\\n        // streamでStream作成しforEachで各要素を出力\\n        ___.___().___(___._________);\\n    // mainメソッドを閉じる\\n    ___\\n// Mainクラスを閉じる\\n___",
      "correctLines": [
          "// importでjava.util.*を読み込む",
          "import java.util.*;",
          "// importでjava.util.stream.*を読み込む",
          "import java.util.stream.*;",
          "",
          "// public classでMainクラスを定義",
          "public class Main {",
          "    // public static void mainでエントリーポイントを定義",
          "    public static void main(String[] args) {",
          "        // List型のnumsに数値リスト（1、2、3）を代入",
          "        List<Integer> nums = Arrays.asList(1, 2, 3);",
          "        // streamでStream作成しforEachで各要素を出力",
          "        nums.stream().forEach(System.out::println);",
          "    // mainメソッドを閉じる",
          "    }",
          "// Mainクラスを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
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
          ""
        ],
        "candidates": {
          "methods": [
            "stream",
            "forEach",
            "asList"
          ],
          "others": ["java", "util", "*;", "stream", "Main", "main", "String", "args", "List", "Integer", "nums", "Arrays", "1", "2", "3", "System", "out", "::", "println", "}", "", "out::println", "stream.*;", "class Main {", "public static void main(String[] args) {", "Integer>", "orEach", "System.out::println);"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n2\\n3\\n"
          }
        ]
      },
    {
      "title": "map で変換",
      "description": "配列の全要素に同じ処理を適用する方法を学びます",
      "tutorialSlides": [
        {
          "title": "map とは？",
          "content": "# 要素を変換\\n\\n**map** は、各要素に関数を適用して変換します。\\n\\n```java\\nList<Integer> nums = Arrays.asList(1, 2, 3);\\nnums.stream()\\n    .map(n -> n * 2)\\n    .forEach(System.out::println);\\n// 2, 4, 6\\n```"
        },
        {
          "title": "型の変換も可能",
          "content": "# 異なる型に変換\\n\\n```java\\nList<String> names = Arrays.asList(\"a\", \"bb\", \"ccc\");\\nnames.stream()\\n     .map(String::length)\\n     .forEach(System.out::println);\\n// 1, 2, 3\\n```"
        }
      ],
      "correctCode": "// importでjava.util.*を読み込む\\nimport java.util.*;\\n\\n// public classでMainクラスを定義\\npublic class Main {\\n    // public static void mainでエントリーポイントを定義\\n    public static void main(String[] args) {\\n        // List型のnumsに数値リスト（1、2、3）を代入\\n        List<Integer> nums = Arrays.asList(1, 2, 3);\\n        // streamでnumsからStreamを作成\\n        nums.stream()\\n            // mapで各要素nを10倍に変換\\n            .map(n -> n * 10)\\n            // forEachで各要素を出力\\n            .forEach(System.out::println);\\n    // mainメソッドを閉じる\\n    }\\n// Mainクラスを閉じる\\n}", "holeyCode": "// importでjava.util.*を読み込む\\nimport ___.___.___\\n___\\n// public classでMainクラスを定義\\npublic class ___ {\\n    // public static void mainでエントリーポイントを定義\\n    public static void ___(___[] ___) {\\n        // List型のnumsに数値リスト（1、2、3）を代入\\n        ___<___> ___ = ___.___(___,___, ___);\\n        // streamでnumsからStreamを作成\\n        ___.___()\\n            // mapで各要素nを10倍に変換\\n            .___(___ ___ ___ * ___)\\n            // forEachで各要素を出力\\n            .___(___.___________);\\n    // mainメソッドを閉じる\\n    ___\\n// Mainクラスを閉じる\\n___",
      "correctLines": [
          "// importでjava.util.*を読み込む",
          "import java.util.*;",
          "",
          "// public classでMainクラスを定義",
          "public class Main {",
          "    // public static void mainでエントリーポイントを定義",
          "    public static void main(String[] args) {",
          "        // List型のnumsに数値リスト（1、2、3）を代入",
          "        List<Integer> nums = Arrays.asList(1, 2, 3);",
          "        // streamでnumsからStreamを作成",
          "        nums.stream()",
          "            // mapで各要素nを10倍に変換",
          "            .map(n -> n * 10)",
          "            // forEachで各要素を出力",
          "            .forEach(System.out::println);",
          "    // mainメソッドを閉じる",
          "    }",
          "// Mainクラスを閉じる",
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
          "",
          null,
          ""
        ],
        "candidates": {
          "methods": [
            "map",
            "filter",
            "flatMap",
            "asList",
            "stream",
            "forEach"
          ],
          "others": ["java", "util", "*;", "Main", "main", "String", "args", "List", "Integer", "nums", "Arrays", "1", "2", "3", "n", "->", "*", "10", "System", "out", "::", "println", "}", "", "out::println);", "public class Main {", "msに[1,", ".map(n -> n * 10)", "リスト（1,", ")でストリームを作成", "// 各要素を10倍にするmap"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n20\\n30\\n"
          }
        ]
      },
    {
      "title": "filter で絞り込み",
      "description": "条件に合う要素だけを抽出する方法を学びます",
      "tutorialSlides": [
        {
          "title": "filter とは？",
          "content": "# 条件で絞り込み\\n\\n**filter** は、条件を満たす要素だけを通します。\\n\\n```java\\nList<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);\\nnums.stream()\\n    .filter(n -> n % 2 == 0)\\n    .forEach(System.out::println);\\n// 2, 4\\n```"
        },
        {
          "title": "複数条件",
          "content": "# filterを連結\\n\\n```java\\nnums.stream()\\n    .filter(n -> n > 1)\\n    .filter(n -> n < 5)\\n    .forEach(System.out::println);\\n// 2, 3, 4\\n```"
        }
      ],
      "correctCode": "// importでjava.util.*を読み込む\\nimport java.util.*;\\n\\n// public classでMainクラスを定義\\npublic class Main {\\n    // public static void mainでエントリーポイントを定義\\n    public static void main(String[] args) {\\n        // List型のnumsに数値リスト（1〜5）を代入\\n        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);\\n        // streamでnumsからStreamを作成\\n        nums.stream()\\n            // filterでnが2より大きい要素だけを残す\\n            .filter(n -> n > 2)\\n            // forEachで各要素を出力\\n            .forEach(System.out::println);\\n    // mainメソッドを閉じる\\n    }\\n// Mainクラスを閉じる\\n}", "holeyCode": "// importでjava.util.*を読み込む\\nimport ___.___.___\\n___\\n// public classでMainクラスを定義\\npublic class ___ {\\n    // public static void mainでエントリーポイントを定義\\n    public static void ___(___[] ___) {\\n        // List型のnumsに数値リスト（1〜5）を代入\\n        ___<___> ___ = ___.___(___,___, ___,___, ___);\\n        // streamでnumsからStreamを作成\\n        ___.___()\\n            // filterでnが2より大きい要素だけを残す\\n            .___(___ ___ ___ > ___)\\n            // forEachで各要素を出力\\n            .___(___.___________);\\n    // mainメソッドを閉じる\\n    ___\\n// Mainクラスを閉じる\\n___",
      "correctLines": [
          "// importでjava.util.*を読み込む",
          "import java.util.*;",
          "",
          "// public classでMainクラスを定義",
          "public class Main {",
          "    // public static void mainでエントリーポイントを定義",
          "    public static void main(String[] args) {",
          "        // List型のnumsに数値リスト（1〜5）を代入",
          "        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);",
          "        // streamでnumsからStreamを作成",
          "        nums.stream()",
          "            // filterでnが2より大きい要素だけを残す",
          "            .filter(n -> n > 2)",
          "            // forEachで各要素を出力",
          "            .forEach(System.out::println);",
          "    // mainメソッドを閉じる",
          "    }",
          "// Mainクラスを閉じる",
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
          "",
          null,
          ""
        ],
        "candidates": {
          "methods": [
            "filter",
            "map",
            "reduce",
            "asList",
            "stream",
            "forEach"
          ],
          "others": ["java", "util", "*;", "Main", "main", "String", "args", "List", "Integer", "nums", "Arrays", "1", "2", "3", "4", "5", "n", "->", ">", "System", "out", "::", "println", "}", "", "out::println);", "public class Main {", "msに[1,", ".filter(n -> n > 2)", "リスト（1〜5）をnumsに代入"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "3\\n4\\n5\\n"
          }
        ]
      },
    {
      "title": "collect でリストに変換",
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "collect とは？",
          "content": "# Streamをコレクションに\\n\\n**collect** は、Streamの結果をリストなどに変換します。\\n\\n```java\\nList<Integer> result = nums.stream()\\n    .filter(n -> n > 0)\\n    .collect(Collectors.toList());\\n```"
        },
        {
          "title": "様々なコレクタ",
          "content": "# Collectorsのメソッド\\n\\n```java\\n// リストに\\nCollectors.toList()\\n\\n// セットに\\nCollectors.toSet()\\n\\n// 文字列結合\\nCollectors.joining(\", \")\\n```"
        }
      ],
      "correctCode": "// importでjava.util.*を読み込む\\nimport java.util.*;\\n// importでjava.util.stream.*を読み込む\\nimport java.util.stream.*;\\n\\n// public classでMainクラスを定義\\npublic class Main {\\n    // public static void mainでエントリーポイントを定義\\n    public static void main(String[] args) {\\n        // List型のnumsに数値リスト（1、2、3）を代入\\n        List<Integer> nums = Arrays.asList(1, 2, 3);\\n        // List型のdoubledにStream処理結果を代入\\n        List<Integer> doubled = nums.stream()\\n            // mapで各要素nを2倍に変換\\n            .map(n -> n * 2)\\n            // collectでStreamをリストに変換\\n            .collect(Collectors.toList());\\n        // printlnでdoubledを出力\\n        System.out.println(doubled);\\n    // mainメソッドを閉じる\\n    }\\n// Mainクラスを閉じる\\n}", "holeyCode": "// importでjava.util.*を読み込む\\nimport ___.___.___\\n// importでjava.util.stream.*を読み込む\\nimport ___.___.___.___\\n___\\n// public classでMainクラスを定義\\npublic class ___ {\\n    // public static void mainでエントリーポイントを定義\\n    public static void ___(___[] ___) {\\n        // List型のnumsに数値リスト（1、2、3）を代入\\n        ___<___> ___ = ___.___(___,___, ___);\\n        // List型のdoubledにStream処理結果を代入\\n        ___<___> ___ = ___.___()\\n            // mapで各要素nを2倍に変換\\n            .___(___ ___ ___ * ___)\\n            // collectでStreamをリストに変換\\n            .___(___.___(___\\n        // printlnでdoubledを出力\\n        ___.___.___(___)___\\n    // mainメソッドを閉じる\\n    ___\\n// Mainクラスを閉じる\\n___",
      "correctLines": [
          "// importでjava.util.*を読み込む",
          "import java.util.*;",
          "// importでjava.util.stream.*を読み込む",
          "import java.util.stream.*;",
          "",
          "// public classでMainクラスを定義",
          "public class Main {",
          "    // public static void mainでエントリーポイントを定義",
          "    public static void main(String[] args) {",
          "        // List型のnumsに数値リスト（1、2、3）を代入",
          "        List<Integer> nums = Arrays.asList(1, 2, 3);",
          "        // List型のdoubledにStream処理結果を代入",
          "        List<Integer> doubled = nums.stream()",
          "            // mapで各要素nを2倍に変換",
          "            .map(n -> n * 2)",
          "            // collectでStreamをリストに変換",
          "            .collect(Collectors.toList());",
          "        // printlnでdoubledを出力",
          "        System.out.println(doubled);",
          "    // mainメソッドを閉じる",
          "    }",
          "// Mainクラスを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
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
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "methods": [
            "collect",
            "asList",
            "stream",
            "map",
            "toList",
            "println"
          ],
          "others": ["java", "util", "*;", "stream", "Main", "main", "String", "args", "List", "Integer", "nums", "Arrays", "1", "2", "3", "doubled", "n", "->", "*", "Collectors", "));", "System", "out", ";", "}", "", "stream.*;", "class Main {", "public static void main(String[] args) {", "Integer>", "* 2)", ".collect(Collectors.toList());", "System.out.println(doubled);"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[2, 4, 6]\\n"
          }
        ]
      },
    {
      "title": "reduce で集約",
      "description": "配列の要素を集約して1つの値にする方法を学びます",
      "tutorialSlides": [
        {
          "title": "reduce とは？",
          "content": "# 要素を1つに集約\\n\\n**reduce** は、全要素を1つの値にまとめます。\\n\\n```java\\nint sum = nums.stream()\\n    .reduce(0, (a, b) -> a + b);\\n// 初期値0から始めて全部足す\\n```"
        },
        {
          "title": "様々な集約",
          "content": "# 合計、最大値など\\n\\n```java\\n// 合計\\n.reduce(0, Integer::sum)\\n\\n// 積\\n.reduce(1, (a, b) -> a * b)\\n```"
        }
      ],
      "correctCode": "// importでjava.util.*を読み込む\\nimport java.util.*;\\n\\n// public classでMainクラスを定義\\npublic class Main {\\n    // public static void mainでエントリーポイントを定義\\n    public static void main(String[] args) {\\n        // List型のnumsに数値リスト（1〜4）を代入\\n        List<Integer> nums = Arrays.asList(1, 2, 3, 4);\\n        // int型のproductにStream処理結果を代入\\n        int product = nums.stream()\\n            // reduceで初期値1から全要素を掛け算\\n            .reduce(1, (a, b) -> a * b);\\n        // printlnでproductを出力\\n        System.out.println(product);\\n    // mainメソッドを閉じる\\n    }\\n// Mainクラスを閉じる\\n}", "holeyCode": "// importでjava.util.*を読み込む\\nimport ___.___.___\\n___\\n// public classでMainクラスを定義\\npublic class ___ {\\n    // public static void mainでエントリーポイントを定義\\n    public static void ___(___[] ___) {\\n        // List型のnumsに数値リスト（1〜4）を代入\\n        ___<___> ___ = ___.___(___,___, ___,___);\\n        // int型のproductにStream処理結果を代入\\n        ___ ___ = ___.___()\\n            // reduceで初期値1から全要素を掛け算\\n            .___(___,(___, ___) ___ ___ * ___);\\n        // printlnでproductを出力\\n        ___.___.___(___)___\\n    // mainメソッドを閉じる\\n    ___\\n// Mainクラスを閉じる\\n___",
      "correctLines": [
          "// importでjava.util.*を読み込む",
          "import java.util.*;",
          "",
          "// public classでMainクラスを定義",
          "public class Main {",
          "    // public static void mainでエントリーポイントを定義",
          "    public static void main(String[] args) {",
          "        // List型のnumsに数値リスト（1〜4）を代入",
          "        List<Integer> nums = Arrays.asList(1, 2, 3, 4);",
          "        // int型のproductにStream処理結果を代入",
          "        int product = nums.stream()",
          "            // reduceで初期値1から全要素を掛け算",
          "            .reduce(1, (a, b) -> a * b);",
          "        // printlnでproductを出力",
          "        System.out.println(product);",
          "    // mainメソッドを閉じる",
          "    }",
          "// Mainクラスを閉じる",
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
          "",
          null,
          ""
        ],
        "candidates": {
          "methods": [
            "reduce",
            "collect",
            "count",
            "asList",
            "stream",
            "println"
          ],
          "others": ["java", "util", "*;", "Main", "main", "String", "args", "List", "Integer", "nums", "Arrays", "1", "2", "3", "4", "int", "product", "a", "b", "->", "*", "System", "out", ";", "}", "", "(a", "public class Main {", "msに[1,", "ums.stream", ")", ".reduce(1, (a, b) -> a * b);", "System.out.println(product);", "リスト（1〜4）をnumsに代入"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "24\\n"
          }
        ]
      },
    {
      "title": "Optional の基本",
      "description": "Optionalについて学びます",
      "tutorialSlides": [
        {
          "title": "Optional とは？",
          "content": "# 値があるかもしれない容器\\n\\n**Optional** は、値が存在するかもしれないことを表す型です。\\n\\n```java\\nOptional<String> name = Optional.of(\"Alice\");\\nOptional<String> empty = Optional.empty();\\n```"
        },
        {
          "title": "値の取得",
          "content": "# 安全に値を取り出す\\n\\n```java\\nOptional<String> opt = Optional.of(\"Hello\");\\n\\n// 値があれば取得、なければデフォルト\\nString s = opt.orElse(\"default\");\\n\\n// 値があれば処理\\nopt.ifPresent(System.out::println);\\n```"
        }
      ],
      "correctCode": "// importでjava.util.*を読み込む\\nimport java.util.*;\\n\\n// public classでMainクラスを定義\\npublic class Main {\\n    // public static void mainでエントリーポイントを定義\\n    public static void main(String[] args) {\\n        // Optional.ofで「こんにちは」を持つOptionalを作成\\n        Optional<String> opt = Optional.of(\"こんにちは\");\\n        // orElseでデフォルト値を指定して値を取得\\n        String value = opt.orElse(\"デフォルト\");\\n        // printlnでvalueを出力\\n        System.out.println(value);\\n    // mainメソッドを閉じる\\n    }\\n// Mainクラスを閉じる\\n}", "holeyCode": "// importでjava.util.*を読み込む\\nimport ___.___.___\\n___\\n// public classでMainクラスを定義\\npublic class ___ {\\n    // public static void mainでエントリーポイントを定義\\n    public static void ___(___[] ___) {\\n        // Optional.ofで「こんにちは」を持つOptionalを作成\\n        ___<___> ___ = ___.___(\\\"___\\\");\\n        // orElseでデフォルト値を指定して値を取得\\n        ___ ___ = ___.___\\\"___\\\");\\n        // printlnでvalueを出力\\n        ___.___.___(___)___\\n    // mainメソッドを閉じる\\n    ___\\n// Mainクラスを閉じる\\n___",
      "correctLines": [
          "// importでjava.util.*を読み込む",
          "import java.util.*;",
          "",
          "// public classでMainクラスを定義",
          "public class Main {",
          "    // public static void mainでエントリーポイントを定義",
          "    public static void main(String[] args) {",
          "        // Optional.ofで「こんにちは」を持つOptionalを作成",
          "        Optional<String> opt = Optional.of(\"こんにちは\");",
          "        // orElseでデフォルト値を指定して値を取得",
          "        String value = opt.orElse(\"デフォルト\");",
          "        // printlnでvalueを出力",
          "        System.out.println(value);",
          "    // mainメソッドを閉じる",
          "    }",
          "// Mainクラスを閉じる",
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
          ""
        ],
        "candidates": {
          "methods": [
            "of",
            "empty",
            "ofNullable",
            "orElse(",
            "println"
          ],
          "others": ["java", "util", "*;", "Main", "main", "String", "args", "Optional", "opt", "こんにちは", "value", "デフォルト", "System", "out", ";", "}", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      },
    {
      "title": "メソッド参照",
      "description": "::について学びます",
      "tutorialSlides": [
        {
          "title": "メソッド参照とは？",
          "content": "# 既存メソッドをラムダとして使う\\n\\n**::** を使うと、既存のメソッドを参照できます。\\n\\n```java\\n// ラムダ式\\nx -> System.out.println(x)\\n\\n// メソッド参照\\nSystem.out::println\\n```"
        },
        {
          "title": "様々なメソッド参照",
          "content": "# 4つのパターン\\n\\n```java\\n// スタティックメソッド\\nInteger::parseInt\\n\\n// インスタンスメソッド（特定のオブジェクト）\\nSystem.out::println\\n\\n// インスタンスメソッド（任意のオブジェクト）\\nString::length\\n\\n// コンストラクタ\\nArrayList::new\\n```"
        }
      ],
      "correctCode": "// importでjava.util.*を読み込む\\nimport java.util.*;\\n\\n// public classでMainクラスを定義\\npublic class Main {\\n    // public static void mainでエントリーポイントを定義\\n    public static void main(String[] args) {\\n        // List型のnamesに名前リスト（アリス、ボブ）を代入\\n        List<String> names = Arrays.asList(\"アリス\", \"ボブ\");\\n        // forEachで::を使いprintlnメソッドを参照\\n        names.forEach(System.out::println);\\n    // mainメソッドを閉じる\\n    }\\n// Mainクラスを閉じる\\n}", "holeyCode": "// importでjava.util.*を読み込む\\nimport ___.___.___\\n___\\n// public classでMainクラスを定義\\npublic class ___ {\\n    // public static void mainでエントリーポイントを定義\\n    public static void ___(___[] ___) {\\n        // List型のnamesに名前リスト（アリス、ボブ）を代入\\n        ___<___> ___ = ___.___(\\\"___\\\", \\\"___\\\");\\n        // forEachで::を使いprintlnメソッドを参照\\n        ___.___(___._________);\\n    // mainメソッドを閉じる\\n    ___\\n// Mainクラスを閉じる\\n___",
      "correctLines": [
          "// importでjava.util.*を読み込む",
          "import java.util.*;",
          "",
          "// public classでMainクラスを定義",
          "public class Main {",
          "    // public static void mainでエントリーポイントを定義",
          "    public static void main(String[] args) {",
          "        // List型のnamesに名前リスト（アリス、ボブ）を代入",
          "        List<String> names = Arrays.asList(\"アリス\", \"ボブ\");",
          "        // forEachで::を使いprintlnメソッドを参照",
          "        names.forEach(System.out::println);",
          "    // mainメソッドを閉じる",
          "    }",
          "// Mainクラスを閉じる",
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
          ""
        ],
        "candidates": {
          "operators": [
            "::",
            "->",
            "."
          ],
          "others": ["java", "util", "*;", "Main", "main", "String", "args", "List", "names", "Arrays", "asList", "アリス", "ボブ", "forEach", "System", "out", "println", "}", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "アリス\\nボブ\\n"
          }
        ]
      },
    {
      "title": "sorted でソート",
      "description": "複数の条件を組み合わせる方法を学びます",
      "tutorialSlides": [
        {
          "title": "sorted とは？",
          "content": "# 要素を並べ替え\\n\\n**sorted** は、要素を自然順序でソートします。\\n\\n```java\\nList<Integer> nums = Arrays.asList(3, 1, 2);\\nnums.stream()\\n    .sorted()\\n    .forEach(System.out::println);\\n// 1, 2, 3\\n```"
        },
        {
          "title": "カスタムソート",
          "content": "# Comparator を指定\\n\\n```java\\n// 逆順\\n.sorted(Comparator.reverseOrder())\\n\\n// 長さでソート\\n.sorted(Comparator.comparing(String::length))\\n```"
        }
      ],
      "correctCode": "// importでjava.util.*を読み込む\\nimport java.util.*;\\n\\n// public classでMainクラスを定義\\npublic class Main {\\n    // public static void mainでエントリーポイントを定義\\n    public static void main(String[] args) {\\n        // List型のnumsに数値リスト（5、2、8、1）を代入\\n        List<Integer> nums = Arrays.asList(5, 2, 8, 1);\\n        // streamでnumsからStreamを作成\\n        nums.stream()\\n            // sortedで要素を昇順に並べ替え\\n            .sorted()\\n            // forEachで各要素を出力\\n            .forEach(System.out::println);\\n    // mainメソッドを閉じる\\n    }\\n// Mainクラスを閉じる\\n}", "holeyCode": "// importでjava.util.*を読み込む\\nimport ___.___.___\\n___\\n// public classでMainクラスを定義\\npublic class ___ {\\n    // public static void mainでエントリーポイントを定義\\n    public static void ___(___[] ___) {\\n        // List型のnumsに数値リスト（5、2、8、1）を代入\\n        ___<___> ___ = ___.___(___,___, ___,___);\\n        // streamでnumsからStreamを作成\\n        ___.___()\\n            // sortedで要素を昇順に並べ替え\\n            .___()\\n            // forEachで各要素を出力\\n            .___(___.___________);\\n    // mainメソッドを閉じる\\n    ___\\n// Mainクラスを閉じる\\n___",
      "correctLines": [
          "// importでjava.util.*を読み込む",
          "import java.util.*;",
          "",
          "// public classでMainクラスを定義",
          "public class Main {",
          "    // public static void mainでエントリーポイントを定義",
          "    public static void main(String[] args) {",
          "        // List型のnumsに数値リスト（5、2、8、1）を代入",
          "        List<Integer> nums = Arrays.asList(5, 2, 8, 1);",
          "        // streamでnumsからStreamを作成",
          "        nums.stream()",
          "            // sortedで要素を昇順に並べ替え",
          "            .sorted()",
          "            // forEachで各要素を出力",
          "            .forEach(System.out::println);",
          "    // mainメソッドを閉じる",
          "    }",
          "// Mainクラスを閉じる",
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
          "",
          null,
          ""
        ],
        "candidates": {
          "methods": [
            "sorted",
            "reversed",
            "ordered",
            "asList",
            "stream",
            "forEach"
          ],
          "others": ["java", "util", "*;", "Main", "main", "String", "args", "List", "Integer", "nums", "Arrays", "5", "2", "8", "1", "System", "out", "::", "println", "}", "", "out::println);", "public class Main {", "msに[5,", ".sorted()", "リスト（5,"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n2\\n5\\n8\\n"
          }
        ]
      },
    {
      "title": "distinct で重複除去",
      "description": "distinctについて学びます",
      "tutorialSlides": [
        {
          "title": "distinct とは？",
          "content": "# 重複を除去\\n\\n**distinct** は、重複した要素を取り除きます。\\n\\n```java\\nList<Integer> nums = Arrays.asList(1, 2, 2, 3, 3, 3);\\nnums.stream()\\n    .distinct()\\n    .forEach(System.out::println);\\n// 1, 2, 3\\n```"
        },
        {
          "title": "他のメソッドと組み合わせ",
          "content": "# 効率的な処理\\n\\n```java\\nnums.stream()\\n    .filter(n -> n > 0)\\n    .distinct()\\n    .sorted()\\n    .collect(Collectors.toList());\\n```"
        }
      ],
      "correctCode": "// importでjava.util.*を読み込む\\nimport java.util.*;\\n\\n// public classでMainクラスを定義\\npublic class Main {\\n    // public static void mainでエントリーポイントを定義\\n    public static void main(String[] args) {\\n        // List型のnumsに重複数値リスト（1、1、2、2、3）を代入\\n        List<Integer> nums = Arrays.asList(1, 1, 2, 2, 3);\\n        // streamでnumsからStreamを作成\\n        nums.stream()\\n            // distinctで重複要素を除去\\n            .distinct()\\n            // forEachで各要素を出力\\n            .forEach(System.out::println);\\n    // mainメソッドを閉じる\\n    }\\n// Mainクラスを閉じる\\n}", "holeyCode": "// importでjava.util.*を読み込む\\nimport ___.___.___\\n___\\n// public classでMainクラスを定義\\npublic class ___ {\\n    // public static void mainでエントリーポイントを定義\\n    public static void ___(___[] ___) {\\n        // List型のnumsに重複数値リスト（1、1、2、2、3）を代入\\n        ___<___> ___ = ___.___(___,___,___,___,___);\\n        // streamでnumsからStreamを作成\\n        ___.___()\\n            // distinctで重複要素を除去\\n            .___()\\n            // forEachで各要素を出力\\n            .___(___.___________);\\n    // mainメソッドを閉じる\\n    ___\\n// Mainクラスを閉じる\\n___",
      "correctLines": [
          "// importでjava.util.*を読み込む",
          "import java.util.*;",
          "",
          "// public classでMainクラスを定義",
          "public class Main {",
          "    // public static void mainでエントリーポイントを定義",
          "    public static void main(String[] args) {",
          "        // List型のnumsに重複数値リスト（1、1、2、2、3）を代入",
          "        List<Integer> nums = Arrays.asList(1, 1, 2, 2, 3);",
          "        // streamでnumsからStreamを作成",
          "        nums.stream()",
          "            // distinctで重複要素を除去",
          "            .distinct()",
          "            // forEachで各要素を出力",
          "            .forEach(System.out::println);",
          "    // mainメソッドを閉じる",
          "    }",
          "// Mainクラスを閉じる",
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
          "",
          null,
          ""
        ],
        "candidates": {
          "methods": [
            "distinct",
            "unique",
            "dedupe",
            "asList",
            "stream",
            "forEach"
          ],
          "others": ["java", "util", "*;", "Main", "main", "String", "args", "List", "Integer", "nums", "Arrays", "1", "2", "3", "System", "out", "::", "println", "}", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n2\\n3\\n"
          }
        ]
      }
  ]
}

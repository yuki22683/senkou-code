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
      "correctCode": "// ライブラリを読み込む\\nimport java.util.function.Function;\\n\\n// Mainクラスを定義\\npublic class Main {\\n    // メソッドを定義\\n    public static void main(String[] args) {\\n        // ラムダ式で引数と本体を区切る演算子\\n        Function<Integer, Integer> square = x -> x * x;\\n        // apply でラムダ式を実行する\\n        System.out.println(square.apply(5));\\n    // ブロックを閉じる\\n    }\\n// ブロックを閉じる\\n}",
      "holeyCode": "// ライブラリを読み込む\\nimport ___.___.___.___.;\\n___\\n// Mainクラスを定義\\npublic class ___ {\\n    // メソッドを定義\\n    public static void ___(___[] ___) {\\n        // ラムダ式で引数と本体を区切る演算子\\n        ___<___, ___> ___ = ___ ___ ___ * ___;\\n        // apply でラムダ式を実行する\\n        ___.___.___(___.___(___)___\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// ライブラリを読み込む",
          "import java.util.function.Function;",
          "",
          "// Mainクラスを定義",
          "public class Main {",
          "    // メソッドを定義",
          "    public static void main(String[] args) {",
          "        // ラムダ式で引数と本体を区切る演算子",
          "        Function<Integer, Integer> square = x -> x * x;",
          "        // apply でラムダ式を実行する",
          "        System.out.println(square.apply(5));",
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
      "correctCode": "import java.util.*;\\nimport java.util.stream.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // numsに[1, 2, 3]を代入\\n        List<Integer> nums = Arrays.asList(1, 2, 3);\\n        // コレクションからStreamを作成するメソッド\\n        nums.stream().forEach(System.out::println);\\n    }\\n}",
      "holeyCode": "// ライブラリを読み込む\\nimport ___.___.___\\n// ライブラリを読み込む\\nimport ___.___.___.___\\n___\\n// クラスを定義\\npublic class ___ {\\n    // メソッドを定義\\n    public static void ___(___[] ___) {\\n        // numsに[1, 2, 3]を代入\\n        ___<___> ___ = ___.___(___,___, ___);\\n        // コレクションからStreamを作成するメソッド\\n        ___.___().___(___._________);\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// ライブラリを読み込む",
          "import java.util.*;",
          "// ライブラリを読み込む",
          "import java.util.stream.*;",
          "",
          "// クラスを定義",
          "public class Main {",
          "    // メソッドを定義",
          "    public static void main(String[] args) {",
          "        // numsに[1, 2, 3]を代入",
          "        List<Integer> nums = Arrays.asList(1, 2, 3);",
          "        // コレクションからStreamを作成するメソッド",
          "        nums.stream().forEach(System.out::println);",
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
          "others": ["java", "util", "*;", "stream", "Main", "main", "String", "args", "List", "Integer", "nums", "Arrays", "1", "2", "3", "System", "out", "::", "println", "}", "", "out::println"]
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // numsに[1, 2, 3]を代入\\n        List<Integer> nums = Arrays.asList(1, 2, 3);\\n        nums.stream()\\n            // 各要素を変換するメソッド\\n            .map(n -> n * 10)\\n            .forEach(System.out::println);\\n    }\\n}",
      "holeyCode": "// ライブラリを読み込む\\nimport ___.___.___\\n___\\n// クラスを定義\\npublic class ___ {\\n    // メソッドを定義\\n    public static void ___(___[] ___) {\\n        // numsに[1, 2, 3]を代入\\n        ___<___> ___ = ___.___(___,___, ___);\\n        // メソッドを呼び出す\\n        ___.___()\\n            // 各要素を変換するメソッド\\n            .___(___ ___ ___ * ___)\\n            // 出力\\n            .___(___.___________);\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// ライブラリを読み込む",
          "import java.util.*;",
          "",
          "// クラスを定義",
          "public class Main {",
          "    // メソッドを定義",
          "    public static void main(String[] args) {",
          "        // numsに[1, 2, 3]を代入",
          "        List<Integer> nums = Arrays.asList(1, 2, 3);",
          "        // メソッドを呼び出す",
          "        nums.stream()",
          "            // 各要素を変換するメソッド",
          "            .map(n -> n * 10)",
          "            // 出力",
          "            .forEach(System.out::println);",
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
          "others": ["java", "util", "*;", "Main", "main", "String", "args", "List", "Integer", "nums", "Arrays", "1", "2", "3", "n", "->", "*", "10", "System", "out", "::", "println", "}", "", "out::println);"]
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // numsに[1, 2, 3, 4, 5]を代入\\n        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);\\n        nums.stream()\\n            // 条件に合う要素だけを残すメソッド\\n            .filter(n -> n > 2)\\n            .forEach(System.out::println);\\n    }\\n}",
      "holeyCode": "// ライブラリを読み込む\\nimport ___.___.___\\n___\\n// クラスを定義\\npublic class ___ {\\n    // メソッドを定義\\n    public static void ___(___[] ___) {\\n        // numsに[1, 2, 3, 4, 5]を代入\\n        ___<___> ___ = ___.___(___,___, ___,___, ___);\\n        // メソッドを呼び出す\\n        ___.___()\\n            // 条件に合う要素だけを残すメソッド\\n            .___(___ ___ ___ > ___)\\n            // 出力\\n            .___(___.___________);\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// ライブラリを読み込む",
          "import java.util.*;",
          "",
          "// クラスを定義",
          "public class Main {",
          "    // メソッドを定義",
          "    public static void main(String[] args) {",
          "        // numsに[1, 2, 3, 4, 5]を代入",
          "        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);",
          "        // メソッドを呼び出す",
          "        nums.stream()",
          "            // 条件に合う要素だけを残すメソッド",
          "            .filter(n -> n > 2)",
          "            // 出力",
          "            .forEach(System.out::println);",
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
          "others": ["java", "util", "*;", "Main", "main", "String", "args", "List", "Integer", "nums", "Arrays", "1", "2", "3", "4", "5", "n", "->", ">", "System", "out", "::", "println", "}", "", "out::println);"]
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
      "correctCode": "import java.util.*;\\nimport java.util.stream.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // numsに[1, 2, 3]を代入\\n        List<Integer> nums = Arrays.asList(1, 2, 3);\\n        List<Integer> doubled = nums.stream()\\n            .map(n -> n * 2)\\n            // Streamをコレクションに変換するメソッドとユーティリティクラス\\n            .collect(Collectors.toList());\\n        // println で出力する\\n        System.out.println(doubled);\\n    }\\n}",
      "holeyCode": "// ライブラリを読み込む\\nimport ___.___.___\\n// ライブラリを読み込む\\nimport ___.___.___.___\\n___\\n// クラスを定義\\npublic class ___ {\\n    // メソッドを定義\\n    public static void ___(___[] ___) {\\n        // numsに[1, 2, 3]を代入\\n        ___<___> ___ = ___.___(___,___, ___);\\n        // 値を代入\\n        ___<___> ___ = ___.___()\\n            // パターンマッチの分岐\\n            .___(___ ___ ___ * ___)\\n            // Streamをコレクションに変換するメソッドとユーティリティクラス\\n            .___(___.___(___\\n        // println で出力する\\n        ___.___.___(___)___\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// ライブラリを読み込む",
          "import java.util.*;",
          "// ライブラリを読み込む",
          "import java.util.stream.*;",
          "",
          "// クラスを定義",
          "public class Main {",
          "    // メソッドを定義",
          "    public static void main(String[] args) {",
          "        // numsに[1, 2, 3]を代入",
          "        List<Integer> nums = Arrays.asList(1, 2, 3);",
          "        // 値を代入",
          "        List<Integer> doubled = nums.stream()",
          "            // パターンマッチの分岐",
          "            .map(n -> n * 2)",
          "            // Streamをコレクションに変換するメソッドとユーティリティクラス",
          "            .collect(Collectors.toList());",
          "        // println で出力する",
          "        System.out.println(doubled);",
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
          "others": ["java", "util", "*;", "stream", "Main", "main", "String", "args", "List", "Integer", "nums", "Arrays", "1", "2", "3", "doubled", "n", "->", "*", "Collectors", "));", "System", "out", ";", "}", ""]
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // numsに[1, 2, 3, 4]を代入\\n        List<Integer> nums = Arrays.asList(1, 2, 3, 4);\\n        int product = nums.stream()\\n            // 全要素を1つの値にまとめるメソッド\\n            .reduce(1, (a, b) -> a * b);\\n        // println で出力する\\n        System.out.println(product);\\n    }\\n}",
      "holeyCode": "// ライブラリを読み込む\\nimport ___.___.___\\n___\\n// クラスを定義\\npublic class ___ {\\n    // メソッドを定義\\n    public static void ___(___[] ___) {\\n        // numsに[1, 2, 3, 4]を代入\\n        ___<___> ___ = ___.___(___,___, ___,___);\\n        // 変数を宣言\\n        ___ ___ = ___.___()\\n            // 全要素を1つの値にまとめるメソッド\\n            .___(___,(___, ___) ___ ___ * ___);\\n        // println で出力する\\n        ___.___.___(___)___\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// ライブラリを読み込む",
          "import java.util.*;",
          "",
          "// クラスを定義",
          "public class Main {",
          "    // メソッドを定義",
          "    public static void main(String[] args) {",
          "        // numsに[1, 2, 3, 4]を代入",
          "        List<Integer> nums = Arrays.asList(1, 2, 3, 4);",
          "        // 変数を宣言",
          "        int product = nums.stream()",
          "            // 全要素を1つの値にまとめるメソッド",
          "            .reduce(1, (a, b) -> a * b);",
          "        // println で出力する",
          "        System.out.println(product);",
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
          "others": ["java", "util", "*;", "Main", "main", "String", "args", "List", "Integer", "nums", "Arrays", "1", "2", "3", "4", "int", "product", "a", "b", "->", "*", "System", "out", ";", "}", "", "(a"]
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // 値を持つOptionalを作成するメソッド\\n        Optional<String> opt = Optional.of(\"こんにちは\");\\n        // orElse でデフォルト値を指定して取得する\\n        String value = opt.orElse(\"デフォルト\");\\n        // println で出力する\\n        System.out.println(value);\\n    }\\n}",
      "holeyCode": "// ライブラリを読み込む\\nimport ___.___.___\\n___\\n// クラスを定義\\npublic class ___ {\\n    // メソッドを定義\\n    public static void ___(___[] ___) {\\n        // 値を持つOptionalを作成するメソッド\\n        ___<___> ___ = ___.___(\"___\");\\n        // orElse でデフォルト値を指定して取得する\\n        ___ ___ = ___.___\\\"___\");\\n        // println で出力する\\n        ___.___.___(___)___\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// ライブラリを読み込む",
          "import java.util.*;",
          "",
          "// クラスを定義",
          "public class Main {",
          "    // メソッドを定義",
          "    public static void main(String[] args) {",
          "        // 値を持つOptionalを作成するメソッド",
          "        Optional<String> opt = Optional.of(\\\"こんにちは\\\");",
          "        // orElse でデフォルト値を指定して取得する",
          "        String value = opt.orElse(\\\"デフォルト\\\");",
          "        // println で出力する",
          "        System.out.println(value);",
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
          "\\\"\\\"",
          null,
          "\\\"\\\"",
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // namesに[\"アリス\", \"ボブ\"]を代入\\n        List<String> names = Arrays.asList(\"アリス\", \"ボブ\");\\n        // メソッド参照を表す演算子\\n        names.forEach(System.out::println);\\n    }\\n}",
      "holeyCode": "// ライブラリを読み込む\\nimport ___.___.___\\n___\\n// クラスを定義\\npublic class ___ {\\n    // メソッドを定義\\n    public static void ___(___[] ___) {\\n        // namesに[\"アリス\", \"ボブ\"]を代入\\n        ___<___> ___ = ___.___(\"___\", \"___\");\\n        // メソッド参照を表す演算子\\n        ___.___(___._________);\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// ライブラリを読み込む",
          "import java.util.*;",
          "",
          "// クラスを定義",
          "public class Main {",
          "    // メソッドを定義",
          "    public static void main(String[] args) {",
          "        // namesに[\\\"アリス\\\", \\\"ボブ\\\"]を代入",
          "        List<String> names = Arrays.asList(\\\"アリス\\\", \\\"ボブ\\\");",
          "        // メソッド参照を表す演算子",
          "        names.forEach(System.out::println);",
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
          "\\\"\\\"\\\"\\\"",
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
          "others": ["java", "util", "*;", "Main", "main", "String", "args", "List", "names", "Arrays", "asList", "アリス", "ボブ", "forEach", "System", "out", "println", "}", "", "out::println"]
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // numsに[5, 2, 8, 1]を代入\\n        List<Integer> nums = Arrays.asList(5, 2, 8, 1);\\n        nums.stream()\\n            // 要素を昇順に並べ替えるメソッド\\n            .sorted()\\n            .forEach(System.out::println);\\n    }\\n}",
      "holeyCode": "// ライブラリを読み込む\\nimport ___.___.___\\n___\\n// クラスを定義\\npublic class ___ {\\n    // メソッドを定義\\n    public static void ___(___[] ___) {\\n        // numsに[5, 2, 8, 1]を代入\\n        ___<___> ___ = ___.___(___,___, ___,___);\\n        // メソッドを呼び出す\\n        ___.___()\\n            // 要素を昇順に並べ替えるメソッド\\n            .___()\\n            // 出力\\n            .___(___.___________);\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// ライブラリを読み込む",
          "import java.util.*;",
          "",
          "// クラスを定義",
          "public class Main {",
          "    // メソッドを定義",
          "    public static void main(String[] args) {",
          "        // numsに[5, 2, 8, 1]を代入",
          "        List<Integer> nums = Arrays.asList(5, 2, 8, 1);",
          "        // メソッドを呼び出す",
          "        nums.stream()",
          "            // 要素を昇順に並べ替えるメソッド",
          "            .sorted()",
          "            // 出力",
          "            .forEach(System.out::println);",
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
          "others": ["java", "util", "*;", "Main", "main", "String", "args", "List", "Integer", "nums", "Arrays", "5", "2", "8", "1", "System", "out", "::", "println", "}", "", "out::println);"]
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // numsに[1, 1, 2, 2, 3]を代入\\n        List<Integer> nums = Arrays.asList(1, 1, 2, 2, 3);\\n        nums.stream()\\n            // 重複した要素を取り除くメソッド\\n            .distinct()\\n            .forEach(System.out::println);\\n    }\\n}",
      "holeyCode": "// ライブラリを読み込む\\nimport ___.___.___\\n___\\n// クラスを定義\\npublic class ___ {\\n    // メソッドを定義\\n    public static void ___(___[] ___) {\\n        // numsに[1, 1, 2, 2, 3]を代入\\n        ___<___> ___ = ___.___(___,___,___,___,___);\\n        // メソッドを呼び出す\\n        ___.___()\\n            // 重複した要素を取り除くメソッド\\n            .___()\\n            // 出力\\n            .___(___.___________);\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// ライブラリを読み込む",
          "import java.util.*;",
          "",
          "// クラスを定義",
          "public class Main {",
          "    // メソッドを定義",
          "    public static void main(String[] args) {",
          "        // numsに[1, 1, 2, 2, 3]を代入",
          "        List<Integer> nums = Arrays.asList(1, 1, 2, 2, 3);",
          "        // メソッドを呼び出す",
          "        nums.stream()",
          "            // 重複した要素を取り除くメソッド",
          "            .distinct()",
          "            // 出力",
          "            .forEach(System.out::println);",
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
          "others": ["java", "util", "*;", "Main", "main", "String", "args", "List", "Integer", "nums", "Arrays", "1", "2", "3", "System", "out", "::", "println", "}", "", "out::println);"]
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

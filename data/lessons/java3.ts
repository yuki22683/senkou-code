export const javaData3 = {
  "language": "java",
  "lessonId": "java-3",
  "lessonTitle": "Java III - Stream APIとラムダ",
  "lessonDescription": "Java 8以降の機能を学びます。Stream API、ラムダ式、Optionalなど、モダンなJavaを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "exercises": [
    {
      "title": "ラムダ式の基本",
      "description": "簡潔に関数を書けるラムダ式を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "ラムダ式とは？",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# 簡潔な関数の書き方\n\n**ラムダ式** は、匿名関数を簡潔に書ける構文です。\n\n```java\n// 従来の書き方\nRunnable r = new Runnable() {\n    public void run() { System.out.println(\"Hi\"); }\n};\n\n// ラムダ式\nRunnable r = () -> System.out.println(\"Hi\");\n```"
        },
        {
          "title": "構文",
          "image": "/illustrations/3d/gear.png",
          "content": "# (引数) -> 処理\n\n```java\n// 引数なし\n() -> System.out.println(\"Hello\")\n\n// 引数1つ（カッコ省略可）\nx -> x * 2\n\n// 引数複数\n(a, b) -> a + b\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.function.Function;\n\npublic class Main {\n    public static void main(String[] args) {\n        // ラムダ式で引数と本体を区切る演算子\n        Function<Integer, Integer> square = x -> x * x;\n        // apply でラムダ式を実行する\n        System.out.println(square.apply(5));\n    }\n}",
      "holeyCode": "import java.util.function.Function;\n\npublic class Main {\n    public static void main(String[] args) {\n        // ラムダ式で引数と本体を区切る演算子\n        Function<Integer, Integer> square = x ___ x * x;\n        // apply でラムダ式を実行する\n        System.out.println(square.___(5));\n    }\n}",
      "correctLines": [
        "import java.util.function.Function;",
        "",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        Function<Integer, Integer> square = x -> x * x;",
        "        System.out.println(square.apply(5));",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "-> でラムダ式を定義します。",
        null,
        "`apply` でラムダ式を実行します。",
        null,
        null
      ],
      "candidates": {
        "operators": ["->", "=>", "::", "apply"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "25\n"
        }
      ]
    },
    {
      "title": "Stream の作成",
      "description": "コレクションからStreamを作成しましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "Stream とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# データの流れを処理\n\n**Stream** は、コレクションの要素を順番に処理するためのAPIです。\n\n```java\nList<String> list = Arrays.asList(\"a\", \"b\", \"c\");\nStream<String> stream = list.stream();\n```"
        },
        {
          "title": "Stream の作り方",
          "image": "/illustrations/3d/gear.png",
          "content": "# いろいろな作成方法\n\n```java\n// コレクションから\nlist.stream()\n\n// 配列から\nArrays.stream(array)\n\n// 値から直接\nStream.of(1, 2, 3)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // asList でリストを作成する\n        List<Integer> nums = Arrays.asList(1, 2, 3);\n        // コレクションからStreamを作成するメソッド\n        nums.stream().forEach(System.out::println);\n    }\n}",
      "holeyCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // asList でリストを作成する\n        List<Integer> nums = Arrays.___(1, 2, 3);\n        // コレクションからStreamを作成するメソッド\n        nums.___().forEach(System.out::println);\n    }\n}",
      "correctLines": [
        "import java.util.*;",
        "import java.util.stream.*;",
        "",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        List<Integer> nums = Arrays.asList(1, 2, 3);",
        "        nums.stream().forEach(System.out::println);",
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
        "`asList` でリストを作成します。",
        null,
        "`stream` でStreamを作成します。",
        null,
        null
      ],
      "candidates": {
        "methods": ["stream", "iterator", "toArray", "asList"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n2\n3\n"
        }
      ]
    },
    {
      "title": "map で変換",
      "description": "Streamの各要素を変換するmapを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "map とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 要素を変換\n\n**map** は、各要素に関数を適用して変換します。\n\n```java\nList<Integer> nums = Arrays.asList(1, 2, 3);\nnums.stream()\n    .map(n -> n * 2)\n    .forEach(System.out::println);\n// 2, 4, 6\n```"
        },
        {
          "title": "型の変換も可能",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 異なる型に変換\n\n```java\nList<String> names = Arrays.asList(\"a\", \"bb\", \"ccc\");\nnames.stream()\n     .map(String::length)\n     .forEach(System.out::println);\n// 1, 2, 3\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // asList でリストを作成する\n        List<Integer> nums = Arrays.asList(1, 2, 3);\n        nums.stream()\n            // 各要素を変換するメソッド\n            .map(n -> n * 10)\n            .forEach(System.out::println);\n    }\n}",
      "holeyCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // asList でリストを作成する\n        List<Integer> nums = Arrays.___(1, 2, 3);\n        nums.stream()\n            // 各要素を変換するメソッド\n            .___(n -> n * 10)\n            .forEach(System.out::println);\n    }\n}",
      "correctLines": [
        "import java.util.*;",
        "",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        List<Integer> nums = Arrays.asList(1, 2, 3);",
        "        nums.stream()",
        "            .map(n -> n * 10)",
        "            .forEach(System.out::println);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "`asList` でリストを作成します。",
        null,
        null,
        "`map` で各要素を変換します。",
        null,
        null,
        null
      ],
      "candidates": {
        "methods": ["map", "filter", "flatMap", "asList"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n20\n30\n"
        }
      ]
    },
    {
      "title": "filter で絞り込み",
      "description": "条件に合う要素だけを取り出すfilterを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "filter とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 条件で絞り込み\n\n**filter** は、条件を満たす要素だけを通します。\n\n```java\nList<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);\nnums.stream()\n    .filter(n -> n % 2 == 0)\n    .forEach(System.out::println);\n// 2, 4\n```"
        },
        {
          "title": "複数条件",
          "image": "/illustrations/3d/if.png",
          "content": "# filterを連結\n\n```java\nnums.stream()\n    .filter(n -> n > 1)\n    .filter(n -> n < 5)\n    .forEach(System.out::println);\n// 2, 3, 4\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // asList でリストを作成する\n        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);\n        nums.stream()\n            // 条件に合う要素だけを残すメソッド\n            .filter(n -> n > 2)\n            .forEach(System.out::println);\n    }\n}",
      "holeyCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // asList でリストを作成する\n        List<Integer> nums = Arrays.___(1, 2, 3, 4, 5);\n        nums.stream()\n            // 条件に合う要素だけを残すメソッド\n            .___(n -> n > 2)\n            .forEach(System.out::println);\n    }\n}",
      "correctLines": [
        "import java.util.*;",
        "",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);",
        "        nums.stream()",
        "            .filter(n -> n > 2)",
        "            .forEach(System.out::println);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "`asList` でリストを作成します。",
        null,
        null,
        "`filter` で条件に合う要素を絞り込みます。",
        null,
        null,
        null
      ],
      "candidates": {
        "methods": ["filter", "map", "reduce", "asList"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "3\n4\n5\n"
        }
      ]
    },
    {
      "title": "collect でリストに変換",
      "description": "Streamの結果をリストに変換しましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "collect とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# Streamをコレクションに\n\n**collect** は、Streamの結果をリストなどに変換します。\n\n```java\nList<Integer> result = nums.stream()\n    .filter(n -> n > 0)\n    .collect(Collectors.toList());\n```"
        },
        {
          "title": "様々なコレクタ",
          "image": "/illustrations/3d/gear.png",
          "content": "# Collectorsのメソッド\n\n```java\n// リストに\nCollectors.toList()\n\n// セットに\nCollectors.toSet()\n\n// 文字列結合\nCollectors.joining(\", \")\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // asList でリストを作成する\n        List<Integer> nums = Arrays.asList(1, 2, 3);\n        List<Integer> doubled = nums.stream()\n            .map(n -> n * 2)\n            // Streamをコレクションに変換するメソッドとユーティリティクラス\n            .collect(Collectors.toList());\n        // println で出力する\n        System.out.println(doubled);\n    }\n}",
      "holeyCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // asList でリストを作成する\n        List<Integer> nums = Arrays.___(1, 2, 3);\n        List<Integer> doubled = nums.stream()\n            .map(n -> n * 2)\n            // Streamをコレクションに変換するメソッドとユーティリティクラス\n            .___(___.toList());\n        // println で出力する\n        System.out.___(doubled);\n    }\n}",
      "correctLines": [
        "import java.util.*;",
        "import java.util.stream.*;",
        "",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        List<Integer> nums = Arrays.asList(1, 2, 3);",
        "        List<Integer> doubled = nums.stream()",
        "            .map(n -> n * 2)",
        "            .collect(Collectors.toList());",
        "        System.out.println(doubled);",
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
        "`asList` でリストを作成します。",
        null,
        null,
        null,
        "`collect` と `Collectors` でリストに変換します。",
        null,
        "`println` メソッドを使います。",
        null,
        null
      ],
      "candidates": {
        "methods": ["collect", "Collectors", "asList", "println"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[2, 4, 6]\n"
        }
      ]
    },
    {
      "title": "reduce で集約",
      "description": "要素を1つの値にまとめるreduceを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "reduce とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 要素を1つに集約\n\n**reduce** は、全要素を1つの値にまとめます。\n\n```java\nint sum = nums.stream()\n    .reduce(0, (a, b) -> a + b);\n// 初期値0から始めて全部足す\n```"
        },
        {
          "title": "様々な集約",
          "image": "/illustrations/3d/gear.png",
          "content": "# 合計、最大値など\n\n```java\n// 合計\n.reduce(0, Integer::sum)\n\n// 積\n.reduce(1, (a, b) -> a * b)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // asList でリストを作成する\n        List<Integer> nums = Arrays.asList(1, 2, 3, 4);\n        int product = nums.stream()\n            // 全要素を1つの値にまとめるメソッド\n            .reduce(1, (a, b) -> a * b);\n        // println で出力する\n        System.out.println(product);\n    }\n}",
      "holeyCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // asList でリストを作成する\n        List<Integer> nums = Arrays.___(1, 2, 3, 4);\n        int product = nums.stream()\n            // 全要素を1つの値にまとめるメソッド\n            .___(1, (a, b) -> a * b);\n        // println で出力する\n        System.out.___(product);\n    }\n}",
      "correctLines": [
        "import java.util.*;",
        "",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        List<Integer> nums = Arrays.asList(1, 2, 3, 4);",
        "        int product = nums.stream()",
        "            .reduce(1, (a, b) -> a * b);",
        "        System.out.println(product);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "`asList` でリストを作成します。",
        null,
        null,
        "`reduce` で要素を1つに集約します。",
        null,
        "`println` メソッドを使います。",
        null,
        null
      ],
      "candidates": {
        "methods": ["reduce", "collect", "count", "asList", "println"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "24\n"
        }
      ]
    },
    {
      "title": "Optional の基本",
      "description": "nullを安全に扱うOptionalを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "Optional とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 値があるかもしれない容器\n\n**Optional** は、値が存在するかもしれないことを表す型です。\n\n```java\nOptional<String> name = Optional.of(\"Alice\");\nOptional<String> empty = Optional.empty();\n```"
        },
        {
          "title": "値の取得",
          "image": "/illustrations/3d/gear.png",
          "content": "# 安全に値を取り出す\n\n```java\nOptional<String> opt = Optional.of(\"Hello\");\n\n// 値があれば取得、なければデフォルト\nString s = opt.orElse(\"default\");\n\n// 値があれば処理\nopt.ifPresent(System.out::println);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // 値を持つOptionalを作成するメソッド\n        Optional<String> opt = Optional.of(\"Hello\");\n        // orElse でデフォルト値を指定して取得する\n        String value = opt.orElse(\"default\");\n        // println で出力する\n        System.out.println(value);\n    }\n}",
      "holeyCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // 値を持つOptionalを作成するメソッド\n        Optional<String> opt = Optional.___(\"Hello\");\n        // orElse でデフォルト値を指定して取得する\n        String value = opt.___(\"default\");\n        // println で出力する\n        System.out.___(value);\n    }\n}",
      "correctLines": [
        "import java.util.*;",
        "",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        Optional<String> opt = Optional.of(\"Hello\");",
        "        String value = opt.orElse(\"default\");",
        "        System.out.println(value);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "`of` で値を持つOptionalを作成します。",
        null,
        "`orElse` でデフォルト値を指定して取得します。",
        null,
        "`println` メソッドを使います。",
        null,
        null
      ],
      "candidates": {
        "methods": ["of", "empty", "ofNullable", "orElse", "println"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello\n"
        }
      ]
    },
    {
      "title": "メソッド参照",
      "description": "既存メソッドを参照する :: を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "メソッド参照とは？",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# 既存メソッドをラムダとして使う\n\n**::** を使うと、既存のメソッドを参照できます。\n\n```java\n// ラムダ式\nx -> System.out.println(x)\n\n// メソッド参照\nSystem.out::println\n```"
        },
        {
          "title": "様々なメソッド参照",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# 4つのパターン\n\n```java\n// スタティックメソッド\nInteger::parseInt\n\n// インスタンスメソッド（特定のオブジェクト）\nSystem.out::println\n\n// インスタンスメソッド（任意のオブジェクト）\nString::length\n\n// コンストラクタ\nArrayList::new\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // asList でリストを作成する\n        List<String> names = Arrays.asList(\"Alice\", \"Bob\");\n        // メソッド参照を表す演算子\n        names.forEach(System.out::println);\n    }\n}",
      "holeyCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // asList でリストを作成する\n        List<String> names = Arrays.___(\"Alice\", \"Bob\");\n        // メソッド参照を表す演算子\n        names.forEach(System.out___println);\n    }\n}",
      "correctLines": [
        "import java.util.*;",
        "",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        List<String> names = Arrays.asList(\"Alice\", \"Bob\");",
        "        names.forEach(System.out::println);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "`asList` でリストを作成します。",
        null,
        ":: でメソッド参照を使います。",
        null,
        null
      ],
      "candidates": {
        "operators": ["::", "->", ".", "asList"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Alice\nBob\n"
        }
      ]
    },
    {
      "title": "sorted でソート",
      "description": "Streamの要素をソートしましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "sorted とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 要素を並べ替え\n\n**sorted** は、要素を自然順序でソートします。\n\n```java\nList<Integer> nums = Arrays.asList(3, 1, 2);\nnums.stream()\n    .sorted()\n    .forEach(System.out::println);\n// 1, 2, 3\n```"
        },
        {
          "title": "カスタムソート",
          "image": "/illustrations/3d/gear.png",
          "content": "# Comparator を指定\n\n```java\n// 逆順\n.sorted(Comparator.reverseOrder())\n\n// 長さでソート\n.sorted(Comparator.comparing(String::length))\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // asList でリストを作成する\n        List<Integer> nums = Arrays.asList(5, 2, 8, 1);\n        nums.stream()\n            // 要素を昇順に並べ替えるメソッド\n            .sorted()\n            .forEach(System.out::println);\n    }\n}",
      "holeyCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // asList でリストを作成する\n        List<Integer> nums = Arrays.___(5, 2, 8, 1);\n        nums.stream()\n            // 要素を昇順に並べ替えるメソッド\n            .___()\n            .forEach(System.out::println);\n    }\n}",
      "correctLines": [
        "import java.util.*;",
        "",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        List<Integer> nums = Arrays.asList(5, 2, 8, 1);",
        "        nums.stream()",
        "            .sorted()",
        "            .forEach(System.out::println);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "`asList` でリストを作成します。",
        null,
        null,
        "`sorted` でソートします。",
        null,
        null,
        null
      ],
      "candidates": {
        "methods": ["sorted", "reversed", "ordered", "asList"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n2\n5\n8\n"
        }
      ]
    },
    {
      "title": "distinct で重複除去",
      "description": "重複した要素を取り除きましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "distinct とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 重複を除去\n\n**distinct** は、重複した要素を取り除きます。\n\n```java\nList<Integer> nums = Arrays.asList(1, 2, 2, 3, 3, 3);\nnums.stream()\n    .distinct()\n    .forEach(System.out::println);\n// 1, 2, 3\n```"
        },
        {
          "title": "他のメソッドと組み合わせ",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# 効率的な処理\n\n```java\nnums.stream()\n    .filter(n -> n > 0)\n    .distinct()\n    .sorted()\n    .collect(Collectors.toList());\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // asList でリストを作成する\n        List<Integer> nums = Arrays.asList(1, 1, 2, 2, 3);\n        nums.stream()\n            // 重複した要素を取り除くメソッド\n            .distinct()\n            .forEach(System.out::println);\n    }\n}",
      "holeyCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // asList でリストを作成する\n        List<Integer> nums = Arrays.___(1, 1, 2, 2, 3);\n        nums.stream()\n            // 重複した要素を取り除くメソッド\n            .___()\n            .forEach(System.out::println);\n    }\n}",
      "correctLines": [
        "import java.util.*;",
        "",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        List<Integer> nums = Arrays.asList(1, 1, 2, 2, 3);",
        "        nums.stream()",
        "            .distinct()",
        "            .forEach(System.out::println);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "`asList` でリストを作成します。",
        null,
        null,
        "`distinct` で重複を除去します。",
        null,
        null,
        null
      ],
      "candidates": {
        "methods": ["distinct", "unique", "dedupe", "asList"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n2\n3\n"
        }
      ]
    }
  ]
}

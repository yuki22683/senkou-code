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
      "correctCode": "import java.util.function.Function;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // ラムダ式で引数と本体を区切る演算子\\n        Function<Integer, Integer> square = x -> x * x;\\n        // apply でラムダ式を実行する\\n        System.out.println(square.apply(5));\\n    }\\n}",
      "holeyCode": "import java.util.function.___ ;\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // ラムダ式で引数と本体を区切る演算子\\n        Function<Integer, Integer> square = ___ -> x * x;\\n        // apply でラムダ式を実行する\\n        System.out.___(square.apply(5));\\n    ___\\n___",
      "correctLines": [
          "import java.util.function.Function;",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // ラムダ式で引数と本体を区切る演算子",
          "        Function<Integer, Integer> square = x -> x * x;",
          "        // apply でラムダ式を実行する",
          "        System.out.println(square.apply(5));",
          "    }",
          "}"
        ],
      "lineHints": [
          "-> でラムダ式を定義します。",
          null,
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "->",
            "=>",
            "::",
            "apply"
          ],
          "others": ["Function;", "Main", "main(String[] args) {", "x", "println", "}", "Function;", "", "}\\"]
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
      "correctCode": "import java.util.*;\\nimport java.util.stream.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // numsに[1, 2, 3]を代入\\n        List<Integer> nums = Arrays.asList(1, 2, 3);\\n        // コレクションからStreamを作成するメソッド\\n        nums.stream().forEach(System.out::println);\\n    }\\n}",
      "holeyCode": "import java.util.___\\nimport java.util.stream.___\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // numsに[1, 2, 3]を代入\\n        List<Integer> nums = Arrays.asList(___, 2, 3);\\n        // コレクションからStreamを作成するメソッド\\n        nums.stream().forEach(___);\\n    ___\\n___",
      "correctLines": [
          "import java.util.*;",
          "import java.util.stream.*;",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // numsに[1, 2, 3]を代入",
          "        List<Integer> nums = Arrays.asList(1, 2, 3);",
          "        // コレクションからStreamを作成するメソッド",
          "        nums.stream().forEach(System.out::println);",
          "    }",
          "}"
        ],
      "lineHints": [
          "配列の初期値（1, 2, 3など）を`Arrays.asList()`で渡します。",
          "`stream` でStreamを作成します。",
          null,
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "stream",
            "iterator",
            "toArray",
            "asList"
          ],
          "others": ["*;", "Main", "main(String[] args) {", "1", "System.out::println", "}", "*;", "", "}\\"]
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // numsに[1, 2, 3]を代入\\n        List<Integer> nums = Arrays.asList(1, 2, 3);\\n        nums.stream()\\n            // 各要素を変換するメソッド\\n            .map(n -> n * 10)\\n            .forEach(System.out::println);\\n    }\\n}",
      "holeyCode": "import java.util.___\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // numsに[1, 2, 3]を代入\\n        List<Integer> nums = Arrays.asList(___, 2, 3);\\n        nums.___()\\n            // 各要素を変換するメソッド\\n            .map(n -> ___)\\n            .forEach(___);\\n    ___\\n___",
      "correctLines": [
          "import java.util.*;",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // numsに[1, 2, 3]を代入",
          "        List<Integer> nums = Arrays.asList(1, 2, 3);",
          "        nums.stream()",
          "            // 各要素を変換するメソッド",
          "            .map(n -> n * 10)",
          "            .forEach(System.out::println);",
          "    }",
          "}"
        ],
      "lineHints": [
          "配列の初期値（1, 2, 3など）を`Arrays.asList()`で渡します。",
          null,
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "map",
            "filter",
            "flatMap",
            "asList"
          ],
          "others": ["*;", "Main", "main(String[] args) {", "1", "stream", "n * 10", "System.out::println", "}", "*;", "", "}\\"]
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // numsに[1, 2, 3, 4, 5]を代入\\n        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);\\n        nums.stream()\\n            // 条件に合う要素だけを残すメソッド\\n            .filter(n -> n > 2)\\n            .forEach(System.out::println);\\n    }\\n}",
      "holeyCode": "import java.util.___\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // numsに[1, 2, 3, 4, 5]を代入\\n        List<Integer> nums = Arrays.asList(___, 2, 3, 4, 5);\\n        nums.___()\\n            // 条件に合う要素だけを残すメソッド\\n            .filter(n -> n > ___)\\n            .forEach(___);\\n    ___\\n___",
      "correctLines": [
          "import java.util.*;",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // numsに[1, 2, 3, 4, 5]を代入",
          "        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);",
          "        nums.stream()",
          "            // 条件に合う要素だけを残すメソッド",
          "            .filter(n -> n > 2)",
          "            .forEach(System.out::println);",
          "    }",
          "}"
        ],
      "lineHints": [
          "配列の初期値（1, 2, 3など）を`Arrays.asList()`で渡します。",
          null,
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "filter",
            "map",
            "reduce",
            "asList"
          ],
          "others": ["*;", "Main", "main(String[] args) {", "1", "stream", "2", "System.out::println", "}", "*;", "", "}\\"]
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
      "correctCode": "import java.util.*;\\nimport java.util.stream.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // numsに[1, 2, 3]を代入\\n        List<Integer> nums = Arrays.asList(1, 2, 3);\\n        List<Integer> doubled = nums.stream()\\n            .map(n -> n * 2)\\n            // Streamをコレクションに変換するメソッドとユーティリティクラス\\n            .collect(Collectors.toList());\\n        // println で出力する\\n        System.out.println(doubled);\\n    }\\n}",
      "holeyCode": "import java.util.___\\nimport java.util.stream.___\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // numsに[1, 2, 3]を代入\\n        List<Integer> nums = Arrays.asList(___, 2, 3);\\n        List<Integer> doubled = nums.___()\\n            .map(n -> ___)\\n            // Streamをコレクションに変換するメソッドとユーティリティクラス\\n            .collect(Collectors.___());\\n        // println で出力する\\n        System.out.___(doubled);\\n    ___\\n___",
      "correctLines": [
          "import java.util.*;",
          "import java.util.stream.*;",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // numsに[1, 2, 3]を代入",
          "        List<Integer> nums = Arrays.asList(1, 2, 3);",
          "        List<Integer> doubled = nums.stream()",
          "            .map(n -> n * 2)",
          "            // Streamをコレクションに変換するメソッドとユーティリティクラス",
          "            .collect(Collectors.toList());",
          "        // println で出力する",
          "        System.out.println(doubled);",
          "    }",
          "}"
        ],
      "lineHints": [
          "配列の初期値（1, 2, 3など）を`Arrays.asList()`で渡します。",
          "`collect` と `Collectors` でリストに変換します。",
          null,
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "変数の値をコンソールに出力し、改行します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "collect",
            "Collectors",
            "asList",
            "println"
          ],
          "others": ["*;", "Main", "main(String[] args) {", "1", "stream", "n * 2", "toList", "}", "*;", "", "}\\"]
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // numsに[1, 2, 3, 4]を代入\\n        List<Integer> nums = Arrays.asList(1, 2, 3, 4);\\n        int product = nums.stream()\\n            // 全要素を1つの値にまとめるメソッド\\n            .reduce(1, (a, b) -> a * b);\\n        // println で出力する\\n        System.out.println(product);\\n    }\\n}",
      "holeyCode": "import java.util.___\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // numsに[1, 2, 3, 4]を代入\\n        List<Integer> nums = Arrays.asList(___, 2, 3, 4);\\n        int product = nums.___()\\n            // 全要素を1つの値にまとめるメソッド\\n            .reduce(___, (a, b) -> a * b);\\n        // println で出力する\\n        System.out.___(product);\\n    ___\\n___",
      "correctLines": [
          "import java.util.*;",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // numsに[1, 2, 3, 4]を代入",
          "        List<Integer> nums = Arrays.asList(1, 2, 3, 4);",
          "        int product = nums.stream()",
          "            // 全要素を1つの値にまとめるメソッド",
          "            .reduce(1, (a, b) -> a * b);",
          "        // println で出力する",
          "        System.out.println(product);",
          "    }",
          "}"
        ],
      "lineHints": [
          "配列の初期値（1, 2, 3など）を`Arrays.asList()`で渡します。",
          null,
          "変数の値をコンソールに出力し、改行します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "変数の値をコンソールに出力し、改行します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "reduce",
            "collect",
            "count",
            "asList",
            "println"
          ],
          "others": ["*;", "Main", "main(String[] args) {", "1", "stream", "}", "*;", "", "}\\"]
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // 値を持つOptionalを作成するメソッド\\n        Optional<String> opt = Optional.of(\"こんにちは\");\\n        // orElse でデフォルト値を指定して取得する\\n        String value = opt.orElse(\"デフォルト\");\\n        // println で出力する\\n        System.out.println(value);\\n    }\\n}",
      "holeyCode": "import java.util.___\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // 値を持つOptionalを作成するメソッド\\n        ___<String> opt = Optional.of(\"___\");\\n        // orElse でデフォルト値を指定して取得する\\n        String value = opt.orElse(\"___\");\\n        // println で出力する\\n        System.out.___(value);\\n    ___\\n___",
      "correctLines": [
          "import java.util.*;",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // 値を持つOptionalを作成するメソッド",
          "        Optional<String> opt = Optional.of(\"こんにちは\");",
          "        // orElse でデフォルト値を指定して取得する",
          "        String value = opt.orElse(\"デフォルト\");",
          "        // println で出力する",
          "        System.out.println(value);",
          "    }",
          "}"
        ],
      "lineHints": [
          "`of` で値を持つOptionalを作成します。",
          null,
          "変数の値をコンソールに出力し、改行します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "変数の値をコンソールに出力し、改行します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "of",
            "empty",
            "ofNullable",
            "orElse",
            "println"
          ],
          "others": ["*;", "Main", "main(String[] args) {", "こんにちは", "デフォルト", "}", "Optional", "*;", "", "}\\"]
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // namesに[\"アリス\", \"ボブ\"]を代入\\n        List<String> names = Arrays.asList(\"アリス\", \"ボブ\");\\n        // メソッド参照を表す演算子\\n        names.forEach(System.out::println);\\n    }\\n}",
      "holeyCode": "import java.util.___\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // namesに[\"アリス\", \"ボブ\"]を代入\\n        List<String> names = Arrays.asList(\"___\", \"ボブ\");\\n        // メソッド参照を表す演算子\\n        names.forEach(___);\\n    ___\\n___",
      "correctLines": [
          "import java.util.*;",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // namesに[\"アリス\", \"ボブ\"]を代入",
          "        List<String> names = Arrays.asList(\"アリス\", \"ボブ\");",
          "        // メソッド参照を表す演算子",
          "        names.forEach(System.out::println);",
          "    }",
          "}"
        ],
      "lineHints": [
          "配列の初期値（1, 2, 3など）を`Arrays.asList()`で渡します。",
          null,
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "::",
            "->",
            ".",
            "asList"
          ],
          "others": ["*;", "Main", "main(String[] args) {", "アリス", "System.out::println", "}", "*;", "", "}\\"]
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // numsに[5, 2, 8, 1]を代入\\n        List<Integer> nums = Arrays.asList(5, 2, 8, 1);\\n        nums.stream()\\n            // 要素を昇順に並べ替えるメソッド\\n            .sorted()\\n            .forEach(System.out::println);\\n    }\\n}",
      "holeyCode": "import java.util.___\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // numsに[5, 2, 8, 1]を代入\\n        List<Integer> nums = Arrays.asList(___, 2, 8, 1);\\n        nums.___()\\n            // 要素を昇順に並べ替えるメソッド\\n            .___()\\n            .forEach(___);\\n    ___\\n___",
      "correctLines": [
          "import java.util.*;",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // numsに[5, 2, 8, 1]を代入",
          "        List<Integer> nums = Arrays.asList(5, 2, 8, 1);",
          "        nums.stream()",
          "            // 要素を昇順に並べ替えるメソッド",
          "            .sorted()",
          "            .forEach(System.out::println);",
          "    }",
          "}"
        ],
      "lineHints": [
          "配列の初期値（1, 2, 3など）を`Arrays.asList()`で渡します。",
          null,
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "sorted",
            "reversed",
            "ordered",
            "asList"
          ],
          "others": ["*;", "Main", "main(String[] args) {", "5", "stream", "System.out::println", "}", "*;", "", "}\\"]
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // numsに[1, 1, 2, 2, 3]を代入\\n        List<Integer> nums = Arrays.asList(1, 1, 2, 2, 3);\\n        nums.stream()\\n            // 重複した要素を取り除くメソッド\\n            .distinct()\\n            .forEach(System.out::println);\\n    }\\n}",
      "holeyCode": "import java.util.___\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // numsに[1, 1, 2, 2, 3]を代入\\n        List<Integer> nums = Arrays.asList(___, 1, 2, 2, 3);\\n        nums.___()\\n            // 重複した要素を取り除くメソッド\\n            .___()\\n            .forEach(___);\\n    ___\\n___",
      "correctLines": [
          "import java.util.*;",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // numsに[1, 1, 2, 2, 3]を代入",
          "        List<Integer> nums = Arrays.asList(1, 1, 2, 2, 3);",
          "        nums.stream()",
          "            // 重複した要素を取り除くメソッド",
          "            .distinct()",
          "            .forEach(System.out::println);",
          "    }",
          "}"
        ],
      "lineHints": [
          "配列の初期値（1, 2, 3など）を`Arrays.asList()`で渡します。",
          null,
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "distinct",
            "unique",
            "dedupe",
            "asList"
          ],
          "others": ["*;", "Main", "main(String[] args) {", "1", "stream", "System.out::println", "}", "*;", "", "}\\"]
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

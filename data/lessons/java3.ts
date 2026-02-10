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
      "holeyCode": "import ___.___.___.___.;\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) {\\n        // ラムダ式で引数と本体を区切る演算子\\n        ___<___, ___> ___ = ___ ___ ___ * ___;\\n        // apply でラムダ式を実行する\\n        ___.___.___(___.___(___)___\\n    ___\\n___",
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
          "java.util.function パッケージから Function クラスをインポートします。",
          null,
          "Main クラスを定義します。",
          "main メソッド（String[] args）を定義します。",
          null,
          "Function<Integer, Integer> 型の変数 square に、x -> x * x のラムダ式を代入します。",
          null,
          "System.out.println で square.apply(5) の結果を出力します。",
          "中括弧でメソッドを閉じます。",
          "中括弧でクラスを閉じます。"
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
      "correctCode": "import java.util.*;\\nimport java.util.stream.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // numsに[1, 2, 3]を代入\\n        List<Integer> nums = Arrays.asList(1, 2, 3);\\n        // コレクションからStreamを作成するメソッド\\n        nums.stream().forEach(System.out::println);\\n    }\\n}",
      "holeyCode": "import ___.___.___\\nimport ___.___.___.___\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) {\\n        // numsに[1, 2, 3]を代入\\n        ___<___> ___ = ___.___(___,___, ___);\\n        // コレクションからStreamを作成するメソッド\\n        ___.___().___(___._________);\\n    ___\\n___",
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
          "java.util パッケージからワイルドカード(*;)でインポートします。",
          "java.util.stream パッケージからワイルドカード(*;)でインポートします。",
          null,
          "Main クラスを定義します。",
          "main メソッド（String[] args）を定義します。",
          null,
          "List<Integer> 型の変数 nums に Arrays.asList(1, 2, 3) を代入します。",
          null,
          "nums.stream().forEach(System.out::println) で各要素を出力します。",
          "中括弧でメソッドを閉じます。",
          "中括弧でクラスを閉じます。"
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // numsに[1, 2, 3]を代入\\n        List<Integer> nums = Arrays.asList(1, 2, 3);\\n        nums.stream()\\n            // 各要素を変換するメソッド\\n            .map(n -> n * 10)\\n            .forEach(System.out::println);\\n    }\\n}",
      "holeyCode": "import ___.___.___\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) {\\n        // numsに[1, 2, 3]を代入\\n        ___<___> ___ = ___.___(___,___, ___);\\n        ___.___()\\n            // 各要素を変換するメソッド\\n            .___(___ ___ ___ * ___)\\n            .___(___.___________);\\n    ___\\n___",
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
          "java.util パッケージからワイルドカード(*;)でインポートします。",
          null,
          "Main クラスを定義します。",
          "main メソッド（String[] args）を定義します。",
          null,
          "List<Integer> 型の変数 nums に Arrays.asList(1, 2, 3) を代入します。",
          "nums.stream() でStreamを作成します。",
          null,
          ".map(n -> n * 10) で各要素を10倍に変換します。",
          ".forEach(System.out::println) で各要素を出力します。",
          "中括弧でメソッドを閉じます。",
          "中括弧でクラスを閉じます。"
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // numsに[1, 2, 3, 4, 5]を代入\\n        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);\\n        nums.stream()\\n            // 条件に合う要素だけを残すメソッド\\n            .filter(n -> n > 2)\\n            .forEach(System.out::println);\\n    }\\n}",
      "holeyCode": "import ___.___.___\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) {\\n        // numsに[1, 2, 3, 4, 5]を代入\\n        ___<___> ___ = ___.___(___,___, ___,___, ___);\\n        ___.___()\\n            // 条件に合う要素だけを残すメソッド\\n            .___(___ ___ ___ > ___)\\n            .___(___.___________);\\n    ___\\n___",
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
          "java.util パッケージからワイルドカード(*;)でインポートします。",
          null,
          "Main クラスを定義します。",
          "main メソッド（String[] args）を定義します。",
          null,
          "List<Integer> 型の変数 nums に Arrays.asList(1, 2, 3, 4, 5) を代入します。",
          "nums.stream() でStreamを作成します。",
          null,
          ".filter(n -> n > 2) で2より大きい要素だけを残します。",
          ".forEach(System.out::println) で各要素を出力します。",
          "中括弧でメソッドを閉じます。",
          "中括弧でクラスを閉じます。"
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
      "correctCode": "import java.util.*;\\nimport java.util.stream.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // numsに[1, 2, 3]を代入\\n        List<Integer> nums = Arrays.asList(1, 2, 3);\\n        List<Integer> doubled = nums.stream()\\n            .map(n -> n * 2)\\n            // Streamをコレクションに変換するメソッドとユーティリティクラス\\n            .collect(Collectors.toList());\\n        // println で出力する\\n        System.out.println(doubled);\\n    }\\n}",
      "holeyCode": "import ___.___.___\\nimport ___.___.___.___\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) {\\n        // numsに[1, 2, 3]を代入\\n        ___<___> ___ = ___.___(___,___, ___);\\n        ___<___> ___ = ___.___()\\n            .___(___ ___ ___ * ___)\\n            // Streamをコレクションに変換するメソッドとユーティリティクラス\\n            .___(___.___(___\\n        // println で出力する\\n        ___.___.___(___)___\\n    ___\\n___",
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
          "java.util パッケージからワイルドカード(*;)でインポートします。",
          "java.util.stream パッケージからワイルドカード(*;)でインポートします。",
          null,
          "Main クラスを定義します。",
          "main メソッド（String[] args）を定義します。",
          null,
          "List<Integer> 型の変数 nums に Arrays.asList(1, 2, 3) を代入します。",
          "List<Integer> 型の変数 doubled に nums.stream() を代入します。",
          ".map(n -> n * 2) で各要素を2倍に変換します。",
          null,
          ".collect(Collectors.toList()) でリストに変換します。",
          null,
          "System.out.println(doubled) で doubled を出力します。",
          "中括弧でメソッドを閉じます。",
          "中括弧でクラスを閉じます。"
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // numsに[1, 2, 3, 4]を代入\\n        List<Integer> nums = Arrays.asList(1, 2, 3, 4);\\n        int product = nums.stream()\\n            // 全要素を1つの値にまとめるメソッド\\n            .reduce(1, (a, b) -> a * b);\\n        // println で出力する\\n        System.out.println(product);\\n    }\\n}",
      "holeyCode": "import ___.___.___\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) {\\n        // numsに[1, 2, 3, 4]を代入\\n        ___<___> ___ = ___.___(___,___, ___,___);\\n        ___ ___ = ___.___()\\n            // 全要素を1つの値にまとめるメソッド\\n            .___(___,(___, ___) ___ ___ * ___);\\n        // println で出力する\\n        ___.___.___(___)___\\n    ___\\n___",
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
          "java.util パッケージからワイルドカード(*;)でインポートします。",
          null,
          "Main クラスを定義します。",
          "main メソッド（String[] args）を定義します。",
          null,
          "List<Integer> 型の変数 nums に Arrays.asList(1, 2, 3, 4) を代入します。",
          "int 型の変数 product に nums.stream() を代入します。",
          null,
          ".reduce(1, (a, b) -> a * b) で全要素の積を計算します。",
          null,
          "System.out.println(product) で product を出力します。",
          "中括弧でメソッドを閉じます。",
          "中括弧でクラスを閉じます。"
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // 値を持つOptionalを作成するメソッド\\n        Optional<String> opt = Optional.of(\"こんにちは\");\\n        // orElse でデフォルト値を指定して取得する\\n        String value = opt.orElse(\"デフォルト\");\\n        // println で出力する\\n        System.out.println(value);\\n    }\\n}",
      "holeyCode": "import ___.___.___\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) {\\n        // 値を持つOptionalを作成するメソッド\\n        ___<___> ___ = ___.___(\"___\");\\n        // orElse でデフォルト値を指定して取得する\\n        ___ ___ = ___.___\\\"___\");\\n        // println で出力する\\n        ___.___.___(___)___\\n    ___\\n___",
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
          "java.util パッケージからワイルドカード(*;)でインポートします。",
          null,
          "Main クラスを定義します。",
          "main メソッド（String[] args）を定義します。",
          null,
          "Optional<String> 型の変数 opt に Optional.of(\"こんにちは\") を代入します。",
          null,
          "String 型の変数 value に opt.orElse(\"デフォルト\") を代入します。",
          null,
          "System.out.println(value) で value を出力します。",
          "中括弧でメソッドを閉じます。",
          "中括弧でクラスを閉じます。"
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // namesに[\"アリス\", \"ボブ\"]を代入\\n        List<String> names = Arrays.asList(\"アリス\", \"ボブ\");\\n        // メソッド参照を表す演算子\\n        names.forEach(System.out::println);\\n    }\\n}",
      "holeyCode": "import ___.___.___\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) {\\n        // namesに[\"アリス\", \"ボブ\"]を代入\\n        ___<___> ___ = ___.___(\"___\", \"___\");\\n        // メソッド参照を表す演算子\\n        ___.___(___._________);\\n    ___\\n___",
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
          "java.util パッケージからワイルドカード(*;)でインポートします。",
          null,
          "Main クラスを定義します。",
          "main メソッド（String[] args）を定義します。",
          null,
          "List<String> 型の変数 names に Arrays.asList(\"アリス\", \"ボブ\") を代入します。",
          null,
          "names.forEach(System.out::println) で各要素を出力します。",
          "中括弧でメソッドを閉じます。",
          "中括弧でクラスを閉じます。"
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // numsに[5, 2, 8, 1]を代入\\n        List<Integer> nums = Arrays.asList(5, 2, 8, 1);\\n        nums.stream()\\n            // 要素を昇順に並べ替えるメソッド\\n            .sorted()\\n            .forEach(System.out::println);\\n    }\\n}",
      "holeyCode": "import ___.___.___\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) {\\n        // numsに[5, 2, 8, 1]を代入\\n        ___<___> ___ = ___.___(___,___, ___,___);\\n        ___.___()\\n            // 要素を昇順に並べ替えるメソッド\\n            .___()\\n            .___(___.___________);\\n    ___\\n___",
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
          "java.util パッケージからワイルドカード(*;)でインポートします。",
          null,
          "Main クラスを定義します。",
          "main メソッド（String[] args）を定義します。",
          null,
          "List<Integer> 型の変数 nums に Arrays.asList(5, 2, 8, 1) を代入します。",
          "nums.stream() でStreamを作成します。",
          null,
          ".sorted() で要素を昇順に並べ替えます。",
          ".forEach(System.out::println) で各要素を出力します。",
          "中括弧でメソッドを閉じます。",
          "中括弧でクラスを閉じます。"
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
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // numsに[1, 1, 2, 2, 3]を代入\\n        List<Integer> nums = Arrays.asList(1, 1, 2, 2, 3);\\n        nums.stream()\\n            // 重複した要素を取り除くメソッド\\n            .distinct()\\n            .forEach(System.out::println);\\n    }\\n}",
      "holeyCode": "import ___.___.___\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) {\\n        // numsに[1, 1, 2, 2, 3]を代入\\n        ___<___> ___ = ___.___(___,___,___,___,___);\\n        ___.___()\\n            // 重複した要素を取り除くメソッド\\n            .___()\\n            .___(___.___________);\\n    ___\\n___",
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
          "java.util パッケージからワイルドカード(*;)でインポートします。",
          null,
          "Main クラスを定義します。",
          "main メソッド（String[] args）を定義します。",
          null,
          "List<Integer> 型の変数 nums に Arrays.asList(1, 1, 2, 2, 3) を代入します。",
          "nums.stream() でStreamを作成します。",
          null,
          ".distinct() で重複した要素を取り除きます。",
          ".forEach(System.out::println) で各要素を出力します。",
          "中括弧でメソッドを閉じます。",
          "中括弧でクラスを閉じます。"
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

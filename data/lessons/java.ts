export const javaData = {
  "language": "java",
  "lessonId": "java-1",
  "lessonTitle": "Java I",
  "lessonDescription": "堅牢なオブジェクト指向言語Javaの基本を学びます。クラス、メインメソッド、標準出力などを習得しましょう。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "Hello Worldを出力しよう",
      "description": "Javaの標準的な出力メソッドを使い、画面に文字を表示しましょう。Hello, Java!と表示するプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Javaの基本",
          "content": "# Class & Main\n\nJavaではすべてのコードを `class` の中に書き、`main` メソッドから実行が始まります。\n\n**コード例：**\n```java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        // 出力\n        System.out.println(\"Hello, Java!\");\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        // 出力\n        System.out.println(\"___\");\n    }\n}",
      "correctLines": ["public class Main {", "    public static void main(String[] args) {", "        // 出力", "        System.out.println(\"Hello, Java!\");", "    }", "}"],
      "lineHints": ["クラス定義です。", "エントリーポイントとなるmainメソッドです。", null, "System.out.println を使用して表示します。", "メソッドの閉じ括弧です。", "クラスの閉じ括弧です。"],
      "candidates": { "functions": ["System.out.println"], "strings": ["Hello, Java!"] },
      "testCases": [{ "input": "", "expected_output": "Hello, Java!\n" }]
    },
    {
      "title": "変数とデータ型",
      "description": "変数を宣言し、値を代入して表示しましょう。String型の変数 name を使います。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "変数の宣言",
          "content": "# 型 変数名 = 値;\n\nJavaは静的型付け言語なので、変数の宣言時に型を指定する必要があります。\n文字列は `String` (Sは大文字)です。\n\n**コード例：**\n```java\nString name = \"Java\";\nSystem.out.println(name);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        // String変数を定義\n        String name = \"Java\";\n        System.out.println(name);\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        // String変数を定義\n        String name = \"___\";\n        System.out.println(___);\n    }\n}",
      "correctLines": ["public class Main {", "    public static void main(String[] args) {", "        // String変数を定義", "        String name = \"Java\";", "        System.out.println(name);", "    }", "}"],
      "lineHints": ["クラス定義です。", "mainメソッドです。", null, "String name = \"Java\"; と代入します。", "変数名 name を出力します。", "メソッド終了", "クラス終了"],
      "candidates": { "variables": ["name"], "functions": ["System.out.println"], "strings": ["Java"] },
      "testCases": [{ "input": "", "expected_output": "Java\n" }]
    },
    {
      "title": "数値の計算",
      "description": "int型（整数）の変数を使って計算を行いましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "整数の型",
          "content": "# int型\n\n整数を扱うには `int` 型を使います。\n\n**コード例：**\n```java\nint x = 10;\nint y = 5;\nSystem.out.println(x + y);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        int y = 5;\n        System.out.println(x + y);\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        int x = ___ ;\n        int y = ___ ;\n        System.out.println(x ___ y);\n    }\n}",
      "correctLines": ["public class Main {", "    public static void main(String[] args) {", "        int x = 10;", "        int y = 5;", "        System.out.println(x + y);", "    }", "}"],
      "lineHints": [null, null, "10を代入します。", "5を代入します。", "足し算には + を使います。", null, null],
      "candidates": { "variables": ["x", "y"], "operators": ["+"], "numbers": ["10", "5"] },
      "testCases": [{ "input": "", "expected_output": "15\n" }]
    },
    {
      "title": "文字列の結合",
      "description": "プラス演算子を使って、文字列と変数を結合して表示しましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "文字列結合",
          "content": "# + 演算子\n\nJavaでは `+` を使って文字列同士や、文字列と数値をくっつけることができます。\n\n**コード例：**\n```java\nint age = 20;\nSystem.out.println(\"年齢は\" + age + \"歳です\");\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        int age = 20;\n        System.out.println(\"私は\" + age + \"歳です\");\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        int age = 20;\n        System.out.println(\"私は\" + ___ + \"歳です\");\n    }\n}",
      "correctLines": ["public class Main {", "    public static void main(String[] args) {", "        int age = 20;", "        System.out.println(\"私は\" + age + \"歳です\");", "    }", "}"],
      "lineHints": [null, null, "年齢変数を定義します。", "+ age + のように変数を挟んで結合します。", null, null],
      "candidates": { "variables": ["age"], "operators": ["+"] },
      "testCases": [{ "input": "", "expected_output": "私は20歳です\n" }]
    },
    {
      "title": "配列",
      "description": "配列を作成し、指定した要素を表示しましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "配列の宣言",
          "content": "# 型[] 変数名\n\n複数のデータをまとめて管理するには配列を使います。\n\n**コード例：**\n```java\nString[] colors = {\"red\", \"blue\"};\nSystem.out.println(colors[1]); // \"blue\" を表示\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        String[] colors = {\"red\", \"blue\"};\n        System.out.println(colors[1]);\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        String[] colors = {___, ___};\n        System.out.println(colors[___]);\n    }\n}",
      "correctLines": ["public class Main {", "    public static void main(String[] args) {", "        String[] colors = {\"red\", \"blue\"};", "        System.out.println(colors[1]);", "    }", "}"],
      "lineHints": [null, null, "{\"red\", \"blue\"} と記述して初期化します。", "インデックス1を指定します（0始まり）。", null, null],
      "candidates": { "variables": ["colors"], "strings": ["\"red\"", "\"blue\""], "numbers": ["1"] },
      "testCases": [{ "input": "", "expected_output": "blue\n" }]
    },
    {
      "title": "if文",
      "description": "条件分岐を使って、条件を満たす場合のみメッセージを表示しましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if文",
          "content": "# if (条件)\n\n条件式を丸括弧 `( )` で囲みます。\n\n**コード例：**\n```java\nif (score > 80) {\n    System.out.println(\"合格！\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        int score = 100;\n        if (score > 80) {\n            System.out.println(\"満点です！\");\n        }\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        int score = 100;\n        if (score ___ 80) {\n            System.out.println(\"___\");\n        }\n    }\n}",
      "correctLines": ["public class Main {", "    public static void main(String[] args) {", "        int score = 100;", "        if (score > 80) {", "            System.out.println(\"満点です！\");", "        }", "    }", "}"],
      "lineHints": [null, null, null, "score > 80 と記述します。", "満点です！ を出力します。", "ifブロック終了", null, null],
      "candidates": { "operators": [">"] , "strings": ["満点です！"] },
      "testCases": [{ "input": "", "expected_output": "満点です！\n" }]
    },
    {
      "title": "if-else文",
      "description": "条件に応じて処理を分岐させましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "else",
          "content": "# elseブロック\n\n条件に当てはまらない時の処理は `else` を使います。\n\n**コード例：**\n```java\nif (age >= 20) {\n    System.out.println(\"大人\");\n} else {\n    System.out.println(\"未成年\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        int age = 18;\n        if (age >= 20) {\n            System.out.println(\"大人\");\n        } else {\n            System.out.println(\"未成年\");\n        }\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        int age = 18;\n        if (age >= 20) {\n            System.out.println(\"大人\");\n        } ___ {\n            System.out.println(\"___\");\n        }\n    }\n}",
      "correctLines": ["public class Main {", "    public static void main(String[] args) {", "        int age = 18;", "        if (age >= 20) {", "            System.out.println(\"大人\");", "        } else {", "            System.out.println(\"未成年\");", "        }", "    }", "}"],
      "lineHints": [null, null, "年齢を設定します。", "条件式 age >= 20 を記述します。", "大人と表示します。", "else を記述します。", "未成年 を出力します。", "elseブロック終了", null, null],
      "candidates": { "keywords": ["else"], "strings": ["未成年"] },
      "testCases": [{ "input": "", "expected_output": "未成年\n" }]
    },
    {
      "title": "拡張for文",
      "description": "配列の要素を順番に取り出して表示しましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "拡張for文",
          "content": "# for (型 変数 : 配列)\n\n配列の全要素をループする便利な書き方です。\n\n**コード例：**\n```java\nString[] names = {\"Alice\", \"Bob\"};\nfor (String name : names) {\n    System.out.println(name);\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        String[] names = {\"Alice\", \"Bob\"};\n        for (String name : names) {\n            System.out.println(name);\n        }\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        String[] names = {\"Alice\", \"Bob\"};\n        for (String ___ : ___) {\n            System.out.println(name);\n        }\n    }\n}",
      "correctLines": ["public class Main {", "    public static void main(String[] args) {", "        String[] names = {\"Alice\", \"Bob\"};", "        for (String name : names) {", "            System.out.println(name);", "        }", "    }", "}"],
      "lineHints": [null, null, "配列を定義します。", "for (String name : names) と記述します。", "名前を出力します。", "ループ終了", null, null],
      "candidates": { "variables": ["name", "names"] },
      "testCases": [{ "input": "", "expected_output": "Alice\nBob\n" }]
    },
    {
      "title": "HashMap (辞書)",
      "description": "キーと値のペアでデータを管理するHashMapを使いましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "HashMap",
          "content": "# インポートが必要\n\nキー（名前）を使ってデータを取り出すには `HashMap` を使います。\n\n**コード例：**\n```java\nimport java.util.HashMap;\n\nHashMap<String, String> user = new HashMap<>();\nuser.put(\"name\", \"Alice\");\nSystem.out.println(user.get(\"name\")); // \"Alice\" を表示\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, String> user = new HashMap<>();\n        user.put(\"name\", \"Alice\");\n        System.out.println(user.get(\"name\"));\n    }\n}",
      "holeyCode": "import java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, String> user = new ___<>();\n        user.___(\"name\", \"Alice\");\n        System.out.println(user.___(\"name\"));\n    }\n}",
      "correctLines": ["import java.util.HashMap;", "public class Main {", "    public static void main(String[] args) {", "        HashMap<String, String> user = new HashMap<>();", "        user.put(\"name\", \"Alice\");", "        System.out.println(user.get(\"name\"));", "    }", "}"],
      "lineHints": ["HashMapをインポートします。", null, null, "new HashMap<>(); とします。", "put メソッドで追加します。", "get メソッドで取得します。", null, null],
      "candidates": { "functions": ["put", "get"], "strings": ["HashMap"] },
      "testCases": [{ "input": "", "expected_output": "Alice\n" }]
    },
    {
      "title": "メソッドの定義と呼び出し",
      "description": "独自のメソッドを作成し、mainメソッドから呼び出しましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "staticメソッド",
          "content": "# メソッドの定義\n\n処理をまとめて名前を付け、呼び出せるようにします。\n\n**コード例：**\n```java\npublic static void greet() {\n    System.out.println(\"Hello\");\n}\n\n// mainメソッド内で呼び出す\ngreet();\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void greet() {\n        System.out.println(\"Good morning\");\n    }\n    public static void main(String[] args) {\n        greet();\n    }\n}",
      "holeyCode": "public class Main {\n    public static void ___() {\n        System.out.println(\"Good morning\");\n    }\n    public static void main(String[] args) {\n        ___();\n    }\n}",
      "correctLines": ["public class Main {", "    public static void greet() {", "        System.out.println(\"Good morning\");", "    }", "    public static void main(String[] args) {", "        greet();", "    }", "}"],
      "lineHints": [null, "greet() という名前で定義します。", "メッセージを表示します。", "メソッド終了", null, "greet(); で呼び出します。", "mainメソッド終了", "クラス終了"],
      "candidates": { "functions": ["greet"] },
      "testCases": [{ "input": "", "expected_output": "Good morning\n" }]
    }
  ]
};
export const javaData = {
  "language": "java",
  "lessonId": "java-1",
  "lessonTitle": "Java (ジャバ) にちょうせん！",
  "lessonDescription": "きっちりしたルールが特徴の言葉「Java（ジャバ）」のきほんを学びましょう。コンピュータに正しい手順で指示（しじ）を出す方法を身につけます。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "description": "Javaを使って画面に「こんにちは」と表示させてみましょう。Javaを動かすには、いくつかの「決まり文句」が必要です。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Java（ジャバ）とは？",
          "content": "# 銀行やスマホアプリでも使われる言葉です\n\nJava（ジャバ）は、世界中で大きなシステムやアプリを作るのに使われている、とても「きっちりした」プログラミング言語です。\nルールが厳しいですが、そのぶん間違いを見つけやすいのが良いところですよ！"
        },
        {
          "title": "Javaを動かす「決まり文句」",
          "content": "# おまじないの言葉\n\nJavaでプログラムを入力するときは、必ず入力しなければいけない「決まり文句」があります。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        // ここにやりたいことを入力します\n    }\n}\n```\n\n画面に文字を出すときは、`System.out.println()` という長い名前の関数（メソッド）を使います。"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\n`System.out.println()` を使って、画面に `Hello, Java!` と表示させてみましょう。\n\n**入力するコードのヒント：**\n```java\nSystem.out.println(\"Hello, Java!\");\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        // 画面にメッセージを出す関数\n        System.out.println(\"Hello, Java!\");\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        // 画面にメッセージを出す関数\n        System.out.println(\"___");\n    }\n}",
      "correctLines": [
        "public class Main {",
        "    public static void main(String[] args) {",
        "        // 画面にメッセージを出す関数",
        "        System.out.println(\"Hello, Java!\");",
        "    }",
        "}"
      ],
      "lineHints": [
        "Javaのプログラムをまとめる「クラス」という名前です。",
        "ここからプログラムがスタートします、という合図です。",
        null,
        "System.out.println を使って、() の中の文字を画面に出します。",
        "ここまでがスタートの合図の終わりです。",
        "ここまでがプログラム全体の終わりです。"
      ],
      "candidates": {
        "functions": [
          "System.out.println"
        ],
        "strings": [
          "Hello, Java!"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, Java!\n"
        }
      ]
    },
    {
      "title": "文字を入れる「はこ」String",
      "description": "文字をしまっておく「はこ」を作ってみましょう。Javaでは、はこに入れるものの種類（ラベル）を先に決める必要があります。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "ラベル（型）が必要です",
          "content": "# String（ストリング）ラベル\n\nJavaでは、はこ（変数）を作るときに「何を入れるか」のラベルを貼るルールがあります。\n文字を入れたいときは、`String`（Sは大文字！）というラベルを使います。\n\n**コード例：**\n```java\nString name = \"Java\";\nSystem.out.println(name);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        // String（文字）ラベルを貼ったはこを作る\n        String name = \"Java\";\n        System.out.println(name);\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        // String（文字）ラベルを貼ったはこを作る\n        String name = \"___";\n        System.out.println(___);\n    }\n}",
      "correctLines": [
        "public class Main {",
        "    public static void main(String[] args) {",
        "        // String（文字）ラベルを貼ったはこを作る",
        "        String name = \"Java\";",
        "        System.out.println(name);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "String name = \"Java\"; と入力します。最後に ; （セミコロン）を忘れないでください！",
        "はこの名前 name を入力すると中身が表示されますよ。",
        null,
        null
      ],
      "candidates": {
        "variables": [
          "name"
        ],
        "functions": [
          "System.out.println"
        ],
        "strings": [
          "Java"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Java\n"
        }
      ]
    },
    {
      "title": "数字を入れる「はこ」int",
      "description": "数字を入れるための「int（イント）ラベル」を使って、計算をしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "数字のラベル",
          "content": "# int（イント）型\n\n整数（せいすう）をしまっておきたいときは、`int` というラベルを使います。\n\n**コード例：**\n```java\nint x = 10;\nint y = 5;\nSystem.out.println(x + y);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        // int（数字）ラベルのはこを作る\n        int x = 10;\n        int y = 5;\n        // たし算した答えを出す\n        System.out.println(x + y);\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        int x = ___ ;\n        int y = ___ ;\n        System.out.println(x ___ y);\n    }\n}",
      "correctLines": [
        "public class Main {",
        "    public static void main(String[] args) {",
        "        int x = 10;",
        "        int y = 5;",
        "        System.out.println(x + y);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "x = 10 と入力しましょう。",
        "y = 5 と入力しましょう。",
        "たし算なので `+` を使います。",
        null,
        null
      ],
      "candidates": {
        "variables": [
          "x",
          "y"
        ],
        "operators": [
          "+"
        ],
        "numbers": [
          "10",
          "5"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "15\n"
        }
      ]
    },
    {
      "title": "文字と「はこ」をくっつけましょう",
      "description": "プラス（+）を使って、文字と「はこ（変数）」をくっつけて表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "プラスでつなげましょう",
          "content": "# + 演算子\n\nJavaでは `+` を使うと、文字と数字をガチャンとくっつけて一つの文章にできますよ。\n\n**コード例：**\n```java\nint age = 10;\nSystem.out.println(\"私は\" + age + \"歳です\");\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        int age = 10;\n        System.out.println(\"私は\" + age + \"歳です\");\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        int age = 10;\n        System.out.println(\"私は\" + ___ + \"歳です\");\n    }\n}",
      "correctLines": [
        "public class Main {",
        "    public static void main(String[] args) {",
        "        int age = 10;",
        "        System.out.println(\"私は\" + age + \"歳です\");",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "age に 10 を入れます。",
        "\"私は\" + age + \"歳です\" と入力して、文字とはこをくっつけます。",
        null,
        null
      ],
      "candidates": {
        "variables": [
          "age"
        ],
        "operators": [
          "+"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "私は10歳です\n"
        }
      ]
    },
    {
      "title": "データをならべる「配列」",
      "description": "同じラベルのデータをまとめて並べておける「配列（はいれつ）」を使ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "データの番号は 0 から！",
          "content": "# { } を使って作りましょう\n\n配列の中身を取り出すときは、何番目かを指定します。さいしょのデータは **「0番」** から数えるのがルールですよ。\n\n**コード例：**\n```java\nString[] colors = {\"あか\", \"あお\"};\nSystem.out.println(colors[0]); // \"あか\" が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        // 文字の配列を作る\n        String[] colors = {\"あか\", \"あお\"};\n        // 2番目（番号は1）を出す\n        System.out.println(colors[1]);\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        String[] colors = {___, ___};\n        System.out.println(colors[___]);\n    }\n}",
      "correctLines": [
        "public class Main {",
        "    public static void main(String[] args) {",
        "        String[] colors = {\"あか\", \"あお\"};",
        "        System.out.println(colors[1]);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "{\"あか\", \"あお\"} と入力しましょう。 { } を使うのがルールです。",
        "2番目のデータの番号は 1 です。 `colors[1]` と入力してください。",
        null,
        null
      ],
      "candidates": {
        "variables": [
          "colors"
        ],
        "strings": [
          "\"あか\"",
          "\"あお\""
        ],
        "numbers": [
          "1"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "あお\n"
        }
      ]
    },
    {
      "title": "「もし〜なら」で分ける if文",
      "description": "点数（score）が 80点より高いときだけ、メッセージを出すようにしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "もし〜なら（if）",
          "content": "# ( ) と { } を使いましょう\n\nJavaでは、`if (条件)` のあとに `{ }` を入力して、その中にやりたいことを入力しますよ。\n\n**コード例：**\n```java\nif (score > 80) {\n    System.out.println(\"すごい！\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        int score = 100;\n        if (score > 80) {\n            System.out.println(\"ごうかく！\");\n        }\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        int score = 100;\n        if (score ___ 80) {\n            System.out.println(\"___");\n        }\n    }\n}",
      "correctLines": [
        "public class Main {",
        "    public static void main(String[] args) {",
        "        int score = 100;",
        "        if (score > 80) {",
        "            System.out.println(\"ごうかく！\");",
        "        }",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "score > 80 と入力しましょう。",
        "System.out.println(\"ごうかく！\"); と入力しましょう。",
        "さいごに } で閉じるのを忘れないでください。",
        null,
        null
      ],
      "candidates": {
        "operators": [
          ">
        ],
        "strings": [
          "ごうかく！"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "ごうかく！\n"
        }
      ]
    },
    {
      "title": "ちがう場合は？ if-else文",
      "description": "「もし〜なら」のあとに、「そうじゃなければ」という別の動きも作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "そうじゃなければ（else）",
          "content": "# else の使い方\n\n条件にあてはまらなかったときの動きは `else` を使って入力します。\n\n**コード例：**\n```java\nif (age >= 20) {\n    System.out.println(\"おとな\");\n} else {\n    System.out.println(\"こども\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        int age = 10;\n        if (age >= 20) {\n            System.out.println(\"おとな\");\n        } else {\n            System.out.println(\"こども\");\n        }\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        int age = 10;\n        if (age >= 20) {\n            System.out.println(\"おとな\");\n        } ___ {\n            System.out.println(\"___");\n        }\n    }\n}",
      "correctLines": [
        "public class Main {",
        "    public static void main(String[] args) {",
        "        int age = 10;",
        "        if (age >= 20) {",
        "            System.out.println(\"おとな\");",
        "} else {",
        "            System.out.println(\"こども\");",
        "        }",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "age に 10 を入れます。",
        "if (age >= 20) { と入力しましょう。",
        "大人と表示します。",
        "そうでなければ、を表す else { と入力しましょう。",
        "System.out.println(\"こども\"); と入力しましょう。",
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": [
          "else"
        ],
        "strings": [
          "こども"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "こども\n"
        }
      ]
    },
    {
      "title": "順番に取り出す「拡張for文」",
      "description": "配列に入っているたくさんのデータを、一つずつ順番に表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "くりかえし（拡張for）",
          "content": "# for (型 変数 : 配列)\n\n配列の中身を順番に取り出して何かをしたいときに使います。 `:`（コロン）を使うのがJavaの面白いところです。\n\n**コード例：**\n```java\nString[] names = {\"たろう\", \"はなこ\"};\nfor (String name : names) {\n    System.out.println(name);\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        String[] names = {\"たろう\", \"はなこ\"};\n        // 順番に取り出すループ\n        for (String name : names) {\n            System.out.println(name);\n        }\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        String[] names = {\"たろう\", \"はなこ\"};\n        for (String ___ : ___) {\n            System.out.println(name);\n        }\n    }\n}",
      "correctLines": [
        "public class Main {",
        "    public static void main(String[] args) {",
        "        String[] names = {\"たろう\", \"はなこ\"};",
        "        for (String name : names) {",
        "            System.out.println(name);",
        "        }",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "配列を定義します。",
        "for (String name : names) と入力します。",
        "取り出した名前を出力します。",
        "ループ終了",
        null,
        null
      ],
      "candidates": {
        "variables": [
          "name",
          "names"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "たろう\nはなこ\n"
        }
      ]
    },
    {
      "title": "名前で探す「HashMap」",
      "description": "名前（キー）を指定してデータを取り出せる「HashMap（ハッシュマップ）」を使ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "HashMap（ハッシュマップ）",
          "content": "# キーとあたいのペア\n\n「名前」と「データ」をセットにして保存できます。使うときは、さいしょに `import`（インポート）という準備が必要ですよ。\n\n**コード例：**\n```java\nimport java.util.HashMap;\n\nHashMap<String, String> user = new HashMap<>();\nuser.put(\"name\", \"たろう\");\nSystem.out.println(user.get(\"name\")); // 「たろう」が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, String> user = new HashMap<>();\n        // データを追加する\n        user.put(\"name\", \"たろう\");\n        // データを取り出す\n        System.out.println(user.get(\"name\"));\n    }\n}",
      "holeyCode": "import java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, String> user = new ___<>();\n        user.___(\"name\", \"たろう\");\n        System.out.println(user.___(\"name\"));\n    }\n}",
      "correctLines": [
        "import java.util.HashMap;",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        HashMap<String, String> user = new HashMap<>();",
        "        user.put(\"name\", \"たろう\");",
        "        System.out.println(user.get(\"name\"));",
        "    }",
        "}"
      ],
      "lineHints": [
        "HashMapを使えるように準備します。",
        null,
        null,
        "new HashMap<>(); で新しくはこを作ります。",
        "put（プット）でデータを入れます。",
        "get（ゲット）でデータを取り出します。",
        null,
        null
      ],
      "candidates": {
        "functions": [
          "put",
          "get"
        ],
        "strings": [
          "HashMap"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "たろう\n"
        }
      ]
    },
    {
      "title": "自分だけの関数を作ろう「メソッド」",
      "description": "自分だけの新しい関数（メソッド）を作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "関数（メソッド）を定義する",
          "content": "# メソッドの定義\n\nやりたいことをひとまとめにして、名前を付けることができます。Javaでは `public static void 名前() { ... }` のように入力しますよ。\n\n**コード例：**\n```java\npublic static void aisatsu() {\n    System.out.println(\"こんにちは\");\n}\n\n// 使うときは\naisatsu();\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    // greet というメソッド\n    public static void greet() {\n        System.out.println(\"こんにちは\");\n    }\n    public static void main(String[] args) {\n        // メソッドを動かす\n        greet();\n    }\n}",
      "holeyCode": "public class Main {\n    public static void ___() {\n        System.out.println(\"こんにちは\");\n    }\n    public static void main(String[] args) {\n        ___();\n    }\n}",
      "correctLines": [
        "public class Main {",
        "    public static void greet() {",
        "        System.out.println(\"こんにちは\");",
        "    }",
        "    public static void main(String[] args) {",
        "        greet();",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        "public static void greet() { と入力して、メソッドを定義します。",
        "System.out.println(\"こんにちは\"); と入力しましょう。",
        "メソッドの終わりです。",
        null,
        "greet(); と入力して、メソッドを実行します。",
        "mainの終わりです。",
        "クラスの終わりです。"
      ],
      "candidates": {
        "functions": [
          "greet"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "こんにちは\n"
        }
      ]
    }
  ]
}

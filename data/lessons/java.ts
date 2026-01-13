export const javaData = {
  "language": "java",
  "lessonId": "java-1",
  "lessonTitle": "Java (ジャバ) に挑戦！",
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
          "image": "/illustrations/common/monitor.png",
          "content": "# 世界中で使われる「きっちりした」言葉\n\nJavaは、銀行のシステムやスマートフォンのアプリなど、間違いが許されない大切な場所でたくさん使われています。ルールが少し厳しいですが、その分、安全なプログラムを作ることができます。"
        },
        {
          "title": "Javaを動かす「決まり文句」",
          "image": "/illustrations/common/monitor.png",
          "content": "# おまじないの言葉\n\nJavaでプログラムを入力するときは、必ず入力しなければいけない「決まり文句」があります。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        // ここにやりたいことを入力します\n    }\n}\n\n```\n\n画面に文字を出しましょうときは、`System.out.println()` という名前の関数（メソッド）を使います。例えば：\n\n```java\nSystem.out.println(\"Javaプログラミング！\");\n```\n=> Javaプログラミング！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        // Hello, Java! と出力する\n        System.out.println(\"Hello, Java!\");\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        // Hello, Java! と出力する\n        System.out.println(\"___\");\n    }\n}",
      "correctLines": [
        "public class Main {",
        "    public static void main(String[] args) {",
        "        // Hello, Java! と出力する",
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
          "title": "変数（へんすう）とは？",
          "image": "/illustrations/common/box.png",
          "content": "# データを保存する仕組み\n\nプログラムの中では、数字や文字をしまっておく「はこ」を作ることができます。これを **変数（へんすう）** と呼びます。中身が何かわかるように名前をつけてあげましょう！"
        },
        {
          "title": "ラベル（型）が必要です",
          "content": "# String（ストリング）ラベル\n\nJavaでは、はこ（変数）を作るときに「何を入れるか」のラベルを貼るルールがあります。文字を入れたいたいときは、`String`（Sは大文字！）というラベルを使います。\n\n**コード例：**\n```java\nString animal = \"いぬ\";\nSystem.out.println(animal);\n```\n=> いぬ"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        // 文字列 Java を代入する\n        String name = \"Java\";\n        // 変数 name を出力する\n        System.out.println(name);\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        // 文字列 Java を代入する\n        String name = \"___\" ;\n        // 変数 name を出力する\n        System.out.println(___);\n    }\n}",
      "correctLines": [
        "public class Main {",
        "    public static void main(String[] args) {",
        "        // 文字列 Java を代入する",
        "        String name = \"Java\";",
        "        // 変数 name を出力する",
        "        System.out.println(name);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "String name = \"Java\"; と入力します。最後に ; （セミコロン）を忘れないでください！",
        "はこの名前 name を入力すると中身が表示されます。",
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
          "title": "数値型（すうちがた）とは？",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 数字を扱うためのラベル\n\n整数（せいすう）を扱うときに使うのが **int** ラベルです。足し算や引き算などの計算をしたいときは、このラベルを使って「はこ」を作ります。"
        },
        {
          "title": "数字のラベル",
          "image": "/illustrations/common/robot_math.png",
          "content": "# int（イント）型\n\n整数をしまっておきたいときは、`int` というラベルを使います。\n\n**コード例：**\n```java\nint base = 100;\nint bonus = 50;\nSystem.out.println(base + bonus);\n```\n=> 150"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        // x に 10 を代入する\n        int x = 10;\n        // y に 5 を代入する\n        int y = 5;\n        // + でたし算した答えを出す\n        System.out.println(x + y);\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        // x に 10 を代入する\n        int x = ___ ;\n        // y に 5 を代入する\n        int y = ___ ;\n        // + でたし算した答えを出す\n        System.out.println(x ___ y);\n    }\n}",
      "correctLines": [
        "public class Main {",
        "    public static void main(String[] args) {",
        "        // x に 10 を代入する",
        "        int x = 10;",
        "        // y に 5 を代入する",
        "        int y = 5;",
        "        // + でたし算した答えを出す",
        ["        System.out.println(x + y);", "        System.out.println(y + x);"],
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "x = 10 と入力しましょう。",
        "y = 5 と入力しましょう。",
        null,
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
          "title": "連結（れんけつ）とは？",
          "image": "/illustrations/common/fstring.png",
          "content": "# 複数の情報を合体させる\n\n文章の途中に、変数（はこ）の中身を流し込んで一つのメッセージにすることを **連結** と呼びます。状況に合わせて変わる便利な文章を作れます。"
        },
        {
          "title": "プラスでつなげましょう",
          "image": "/illustrations/common/fstring.png",
          "content": "# + 演算子\n\nJavaでは `+` を使うと、文字と数字をガチャンとくっつけて一つの文章にできます。\n\n**コード例：**\n```java\nString weather = \"はれ\";\nSystem.out.println(\"明日は\" + weather + \"です\");\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        // age というはこに 10 を入れる\n        int age = 10;\n        // 変数 age をくっつけて表示する\n        System.out.println(\"私は\" + age + \"歳です\");\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        // age というはこに 10 を入れる\n        int age = ___;\n        // 変数 age をくっつけて表示する\n        System.out.println(\"私は\" + ___ + \"歳です\");\n    }\n}",
      "correctLines": [
        "public class Main {",
        "    public static void main(String[] args) {",
        "        // age というはこに 10 を入れる",
        "        int age = 10;",
        "        // 変数 age をくっつけて表示する",
        "        System.out.println(\"私は\" + age + \"歳です\");",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "age に 10 を入れます。",
        null,
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
          "title": "配列（はいれつ）とは？",
          "image": "/illustrations/common/list.png",
          "content": "# データの行列\n\nたくさんのデータを順番に並べておきたいときに使うのが **配列** です。例えば、クラスの全員の名前や、買い物リストなどを一つの変数にまとめて管理できます。"
        },
        {
          "title": "データの番号は 0 から！",
          "image": "/illustrations/common/list.png",
          "content": "# { } を使って作りましょう\n\n配列の中身を取り出すときは、何番目かを指定します。さいしょのデータは **「0番」** から数えるのがルールです。\n\n**コード例：**\n```java\nString[] items = {\"おにぎり\", \"パン\"};\nSystem.out.println(items[0]); // \"おにぎり\" が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        // \"あか\", \"あお\" の順で配列を作る\n        String[] colors = {\"あか\", \"あお\"};\n        // 添字 1 で2番目を出す\n        System.out.println(colors[1]);\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        // \"あか\", \"あお\" の順で配列を作る\n        String[] colors = {___, ___};\n        // 添字 1 で2番目を出す\n        System.out.println(colors[___]);\n    }\n}",
      "correctLines": [
        "public class Main {",
        "    public static void main(String[] args) {",
        "        // \"あか\", \"あお\" の順で配列を作る",
        "        String[] colors = {\"あか\", \"あお\"};",
        "        // 添字 1 で2番目を出す",
        "        System.out.println(colors[1]);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "{\"あか\", \"あお\"} と入力しましょう。 { } を使うのがルールです。",
        null,
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
          "title": "条件分岐（じょうけんぶんき）とは？",
          "image": "/illustrations/common/if.png",
          "content": "# プログラムに判断をさせる\n\n「晴れたら外で遊ぶ」「雨なら家で本を読む」のように、状況によって動きを変えることを **条件分岐** と呼びます。プログラムに賢い判断をさせてみましょう。"
        },
        {
          "title": "もし〜なら（if）",
          "image": "/illustrations/common/if.png",
          "content": "# ( ) と { } を使いましょう\n\nJavaでは、`if (条件)` のあとに `{ }` を入力して、その中にやりたいことを入力します。\n\n**コード例：**\n```java\nint price = 1200;\nif (price > 1000) {\n    System.out.println(\"ちょっと高いかも？\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        // score に 100 を入れる\n        int score = 100;\n        // > で80より大きいか比較する\n        if (score > 80) {\n            // ごうかく！ と表示する\n            System.out.println(\"ごうかく！\");\n        }\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        // score に 100 を入れる\n        int score = ___;\n        // > で80より大きいか比較する\n        if (score ___ 80) {\n            // ごうかく！ と表示する\n            System.out.println(\"___\");\n        }\n    }\n}",
      "correctLines": [
        "public class Main {",
        "    public static void main(String[] args) {",
        "        // score に 100 を入れる",
        "        int score = 100;",
        "        // > で80より大きいか比較する",
        "        if (score > 80) {",
        "            // ごうかく！ と表示する",
        "            System.out.println(\"ごうかく！\");",
        "        }",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "score = 100 と入力しましょう。",
        null,
        "score > 80 と入力しましょう。",
        null,
        "System.out.println(\"ごうかく！\"); と入力しましょう。",
        "さいごに } で閉じるのを忘れないでください。",
        null,
        null
      ],
      "candidates": {
        "operators": [
          ">"
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
          "title": "それ以外の場合は？",
          "image": "/illustrations/common/if.png",
          "content": "# else（エルス）の役割\n\n「もし〜なら」に当てはまらなかったときの動きを作るのが **else（エルス）** です。「合格でなければ不合格と出す」のように、プログラムのルートを2つに分けることができます。"
        },
        {
          "title": "そうじゃなければ（else）",
          "image": "/illustrations/common/if.png",
          "content": "# 2つのルート\n\n条件にあてはまらなかったときの動きは `else` を使って入力します。\n\n**コード例：**\n```java\nint hour = 15;\nif (hour < 12) {\n    System.out.println(\"午前中\");\n} else {\n    System.out.println(\"お昼すぎ\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        // age に 10 を入れる\n        int age = 10;\n        // 20さい以上かどうかで分ける\n        if (age >= 20) {\n            System.out.println(\"おとな\");\n        // else でそれ以外の場合\n        } else {\n            // こども と表示する\n            System.out.println(\"こども\");\n        }\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        // age に 10 を入れる\n        int age = ___;\n        // 20以上かを比較する演算子\n        if (age ___ 20) {\n            // 20歳以上のときのメッセージ（'おとな'）\n            System.out.println(\"___\");\n        // else でそれ以外の場合\n        } ___ {\n            // こども と表示する\n            System.out.println(\"___\");\n        }\n    }\n}",
      "correctLines": [
        "public class Main {",
        "    public static void main(String[] args) {",
        "        // age に 10 を入れる",
        "        int age = 10;",
        "        // 20さい以上かどうかで分ける",
        "        if (age >= 20) {",
        "            System.out.println(\"おとな\");",
        "        // else でそれ以外の場合",
        "        } else {",
        "            // こども と表示する",
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
        null,
        "System.out.println(\"こども\"); と入力しましょう。",
        null,
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
          "title": "繰り返し（ループ）とは？",
          "image": "/illustrations/common/loop.png",
          "content": "# 自動で順番に処理する\n\n同じ作業を何度も繰り返すための仕組みが **ループ** です。配列の中身を一つずつ順番に全部チェックしたいときなどに非常に役立ちます。"
        },
        {
          "title": "くりかえし（拡張for）",
          "image": "/illustrations/common/loop.png",
          "content": "# for (型 変数 : 配列)\n\n配列の中身を順番に取り出して何かをしたいときに使います。 `:`（コロン）を使うのがJavaの面白いところです。\n\n**コード例：**\n```java\nString[] names = {\"たろう\", \"はなこ\"};\nfor (String name : names) {\n    System.out.println(name);\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        // 配列を作る\n        String[] names = {\"たろう\", \"はなこ\"};\n        // 変数 name で配列 names を順番に取り出す\n        for (String name : names) {\n            System.out.println(name);\n        }\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        // 配列を作る\n        String[] names = {\"たろう\", \"はなこ\"};\n        // 変数 name で配列 names を順番に取り出す\n        for (String ___ : ___) {\n            System.out.println(name);\n        }\n    }\n}",
      "correctLines": [
        "public class Main {",
        "    public static void main(String[] args) {",
        "        // 配列を作る",
        "        String[] names = {\"たろう\", \"はなこ\"};",
        "        // 変数 name で配列 names を順番に取り出す",
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
        null,
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
      "title": "名前で探しましょう「HashMap」",
      "description": "名前（キー）を指定してデータを取り出せる「HashMap（辞書）」を使ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "辞書とは？",
          "image": "/illustrations/common/dict.png",
          "content": "# キーワードで検索できる仕組み\n\n「名前」と「電話番号」のように、関連する2つの情報をセットにして保存できるのが **辞書** です。キーワードを使って目的のデータをすぐに見つけられます。"
        },
        {
          "title": "HashMap（辞書）",
          "image": "/illustrations/common/dict.png",
          "content": "# キーとあたいのペア\n\n「名前」と「データ」をセットにして保存できます。\n\n- `import`：外部の機能を使う準備\n- `new`：新しいオブジェクト（実体）を作る\n- `<String, String>`：キーと値の型を指定\n\n```java\nimport java.util.HashMap;\nHashMap<String, String> colors = new HashMap<>();\ncolors.put(\"りんご\", \"あか\");\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        // new HashMap で作る\n        HashMap<String, String> user = new HashMap<>();\n        // put でデータを追加する\n        user.put(\"name\", \"たろう\");\n        // get でデータを取り出す\n        System.out.println(user.get(\"name\"));\n    }\n}",
      "holeyCode": "import java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        // new HashMap で作る\n        HashMap<String, String> user = new ___<>();\n        // put でデータを追加する\n        user.___(\"name\", \"たろう\");\n        // get でデータを取り出す\n        System.out.println(user.___(\"name\"));\n    }\n}",
      "correctLines": [
        "import java.util.HashMap;",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        // new HashMap で作る",
        "        HashMap<String, String> user = new HashMap<>();",
        "        // put でデータを追加する",
        "        user.put(\"name\", \"たろう\");",
        "        // get でデータを取り出す",
        "        System.out.println(user.get(\"name\"));",
        "    }",
        "}"
      ],
      "lineHints": [
        "HashMapを使えるように準備します。",
        null,
        null,
        null,
        "new HashMap<>(); で新しくはこを作ります。",
        null,
        "put（プット）でデータを入れます。",
        null,
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
          "title": "メソッド（関数）とは？",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# 処理のパッケージ化\n\nやりたいことをひとまとめにして、名前をつけたものを **メソッド** と呼びます。一度作っておけば、どこからでも呼び出せる便利なショートカットのようなものです。"
        },
        {
          "title": "関数（メソッド）を定義する",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# メソッドの定義\n\nやりたいことをひとまとめにして、名前を付けることができます。Javaでは `public static void 名前() { ... }` のように入力します。\n\n**コード例：**\n```java\npublic static void sayHello() {\n    System.out.println(\"ヤッホー！\");\n}\n\nsayHello();\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    // greet というメソッドを定義する\n    public static void greet() {\n        System.out.println(\"こんにちは\");\n    }\n    public static void main(String[] args) {\n        // greet メソッドを呼び出す\n        greet();\n    }\n}",
      "holeyCode": "public class Main {\n    // greet というメソッドを定義する\n    public static void ___() {\n        System.out.println(\"こんにちは\");\n    }\n    public static void main(String[] args) {\n        // greet メソッドを呼び出す\n        ___();\n    }\n}",
      "correctLines": [
        "public class Main {",
        "    // greet というメソッドを定義する",
        "    public static void greet() {",
        "        System.out.println(\"こんにちは\");",
        "    }",
        "    public static void main(String[] args) {",
        "        // greet メソッドを呼び出す",
        "        greet();",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "public static void greet() { と入力して、メソッドを定義します。",
        "System.out.println(\"こんにちは\"); と入力しましょう。",
        "メソッドの終わりです。",
        null,
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

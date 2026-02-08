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
      "correctCode": "public class Main {\\n    public static void main(String[] args) {\\n        // Hello, Java! と出力する\\n        System.out.println(\"Hello, Java!\");\\n    }\\n}",
      "holeyCode": "public class ___ {\\n    public static void ___\\(String[] args) {\\n        // Hello, Java! と出力する\\n        System.out.___(\"Hello, Java!\");\\n    ___\\n___",
      "correctLines": [
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // Hello, Java! と出力する",
          "        System.out.println(\"Hello, Java!\");",
          "    }",
          "}"
        ],
      "lineHints": [
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "文字列をコンソールに出力し、改行します。",
          "ここまでがスタートの合図の終わりです。",
          "ここまでがプログラム全体の終わりです。"
        ],
        "candidates": {
          "functions": [
            "System.out.println"
          ],
          "strings": [
            "Hello, Java!"
          ],
          "others": ["Main", "main(String[] args) {", "println", "}", "}\\"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello, Java!\\n"
          }
        ]
      },
    {
      "title": "文字を入れる「はこ」String",
      "correctCode": "public class Main {\\n    public static void main(String[] args) {\\n        // 文字列 Java を代入する\\n        String name = \"Java\";\\n        // 変数 name を出力する\\n        System.out.println(name);\\n    }\\n}",
      "holeyCode": "public class ___ {\\n    public static void ___\\(String[] args) {\\n        // 文字列 Java を代入する\\n        ___ name = \"___\";\\n        // 変数 name を出力する\\n        System.out.___(name);\\n    ___\\n___",
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
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "文字列型の変数を宣言し、文字列データを代入します。",
          null,
          "変数の値をコンソールに出力し、改行します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
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
          ],
          "others": ["Java\";", "Main", "main(String[] args) {", "println", "}", "String", "}\\"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Java\\n"
          }
        ]
      },
    {
      "title": "数字を入れる「はこ」int",
      "correctCode": "public class Main {\\n    public static void main(String[] args) {\\n        // x に 10 を代入する\\n        int x = 10;\\n        // y に 3 を代入する\\n        int y = 3;\\n        // - でひき算した答えを出す\\n        System.out.println(x - y);\\n    }\\n}",
      "holeyCode": "public class ___ {\\n    public static void ___\\(String[] args) {\\n        // x に 10 を代入する\\n        int x = ___;\\n        // y に 3 を代入する\\n        int y = ___;\\n        // - でひき算した答えを出す\\n        System.out.___(x - y);\\n    ___\\n___",
      "correctLines": [
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // x に 10 を代入する",
          "        int x = 10;",
          "        // y に 3 を代入する",
          "        int y = 3;",
          "        // - でひき算した答えを出す",
          "        System.out.println(x - y);",
          "    }",
          "}"
        ],
      "lineHints": [
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "ひき算なので `-` を使います。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "x",
            "y"
          ],
          "operators": [
            "-"
          ],
          "numbers": [
            "10",
            "3"
          ],
          "others": ["10;", "3;", "Main", "main(String[] args) {", "println", "}", "}\\"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "7\\n"
          }
        ]
      },
    {
      "title": "剰余演算子（%）",
      "correctCode": "public class Main {\\n    public static void main(String[] args) {\\n        // 10 を 3 で割ったあまりを出力する\\n        System.out.println(10 % 3);\\n    }\\n}",
      "holeyCode": "public class ___ {\\n    public static void ___\\(String[] args) {\\n        // 10 を 3 で割ったあまりを出力する\\n        System.out.___(10 % 3);\\n    ___\\n___",
      "correctLines": [
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // 10 を 3 で割ったあまりを出力する",
          "        System.out.println(10 % 3);",
          "    }",
          "}"
        ],
      "lineHints": [
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "あまりを求める `%` 演算子を使います。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "%",
            "/",
            "*",
            "-"
          ],
          "others": ["Main", "main(String[] args) {", "println", "}", "}\\"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      },
    {
      "title": "累算代入演算子（+=、-=）",
      "correctCode": "public class Main {\\n    public static void main(String[] args) {\\n        // hp に 100 を入れる\\n        int hp = 100;\\n        // += で 20 を足す\\n        hp += 20;\\n        // -= で 50 を引く\\n        hp -= 50;\\n        System.out.println(hp);\\n    }\\n}",
      "holeyCode": "public class ___ {\\n    public static void ___\\(String[] args) {\\n        // hp に 100 を入れる\\n        int hp = ___;\\n        // += で 20 を足す\\n        hp += ___;\\n        // -= で 50 を引く\\n        hp -= ___;\\n        System.out.___(hp);\\n    ___\\n___",
      "correctLines": [
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // hp に 100 を入れる",
          "        int hp = 100;",
          "        // += で 20 を足す",
          "        hp += 20;",
          "        // -= で 50 を引く",
          "        hp -= 50;",
          "        System.out.println(hp);",
          "    }",
          "}"
        ],
      "lineHints": [
          "Mainクラスを定義します。",
          "main関数を定義します。",
          null,
          "hpに100を代入します。",
          null,
          "hpに20を加算します。",
          null,
          "hpから50を減算します。",
          "printlnで出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "+=",
            "-=",
            "*=",
            "/="
          ],
          "others": ["Main", "main(String[] args) {", "100", "20", "50", "println", "}", "}\\"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "70\\n"
          }
        ]
      },
    {
      "title": "文字と「はこ」をくっつけましょう",
      "correctCode": "public class Main {\\n    public static void main(String[] args) {\\n        // age というはこに 10 を入れる\\n        int age = 10;\\n        // 変数 age をくっつけて表示する\\n        System.out.println(\"私は\" + age + \"歳です\");\\n    }\\n}",
      "holeyCode": "public class ___ {\\n    public static void ___\\(String[] args) {\\n        // age というはこに 10 を入れる\\n        int age = ___;\\n        // 変数 age をくっつけて表示する\\n        System.out.___(\"私は\" + age + \"歳です\");\\n    ___\\n___",
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
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "文字列をコンソールに出力し、改行します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "age"
          ],
          "operators": [
            "+"
          ],
          "others": ["10;", "Main", "main(String[] args) {", "10", "println", "}", "}\\"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "私は10歳です\\n"
          }
        ]
      },
    {
      "title": "データをならべる「配列」",
      "correctCode": "public class Main {\\n    public static void main(String[] args) {\\n        // \"あか\", \"あお\" の順で配列を作る\\n        String[] colors = {\"あか\", \"あお\"};\\n        // 添字 1 で2番目を出す\\n        System.out.println(colors[1]);\\n    }\\n}",
      "holeyCode": "public class ___ {\\n    public static void ___\\(String[] args) {\\n        // \"あか\", \"あお\" の順で配列を作る\\n        String[] colors = {___};\\n        // 添字 1 で2番目を出す\\n        System.out.___(colors[1]);\\n    ___\\n___",
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
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "} と入力しましょう。 { } を使うのがルールです。",
          null,
          "2番目のデータはインデックス1です。 `colors[1]` と入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
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
          ],
          "others": ["Main", "main(String[] args) {", "\"あか\", \"あお\"", "println", "}", "}\\"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "あお\\n"
          }
        ]
      },
    {
      "title": "「もし〜なら」で分ける if文",
      "correctCode": "public class Main {\\n    public static void main(String[] args) {\\n        // score に 100 を入れる\\n        int score = 100;\\n        // > で80より大きいか比較する\\n        if (score > 80) {\\n            // ごうかく！ と表示する\\n            System.out.println(\"ごうかく！\");\\n        }\\n    }\\n}",
      "holeyCode": "public class ___ {\\n    public static void ___\\(String[] args) {\\n        // score に 100 を入れる\\n        int score = ___;\\n        // > で80より大きいか比較する\\n        if (score ___ 80) {\\n            // ごうかく！ と表示する\\n            System.out.___(\"ごうかく！\");\\n        ___\\n    ___\\n___",
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
          "Mainクラスを定義します。",
          "main関数を定義します。",
          null,
          "scoreに100を代入します。",
          null,
          "scoreが80より大きいかを判定します。",
          null,
          "printlnで出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            ">"
          ],
          "strings": [
            "ごうかく！"
          ],
          "others": ["100;", "Main", "main(String[] args) {", "100", "println", "}", "}\\"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ごうかく！\\n"
          }
        ]
      },
    {
      "title": "ちがう場合は？ if-else文",
      "correctCode": "public class Main {\\n    public static void main(String[] args) {\\n        // age に 10 を入れる\\n        int age = 10;\\n        // 20以上かを比較する演算子\\n        if (age >= 20) {\\n            // 20歳以上のときのメッセージ（'おとな'）\\n            System.out.println(\"おとな\");\\n        // else でそれ以外の場合\\n        } else {\\n            // こども と表示する\\n            System.out.println(\"こども\");\\n        }\\n    }\\n}",
      "holeyCode": "public class ___ {\\n    public static void ___\\(String[] args) {\\n        // age に 10 を入れる\\n        int age = ___;\\n        // 20以上かを比較する演算子\\n        if (age ___ 20) {\\n            // 20歳以上のときのメッセージ（'おとな'）\\n            System.out.___(\"おとな\");\\n        // else でそれ以外の場合\\n        } ___ {\\n            // こども と表示する\\n            System.out.___(\"こども\");\\n        ___\\n    ___\\n___",
      "correctLines": [
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // age に 10 を入れる",
          "        int age = 10;",
          "        // 20以上かを比較する演算子",
          "        if (age >= 20) {",
          "            // 20歳以上のときのメッセージ（'おとな'）",
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
          "Mainクラスを定義します。",
          "main関数を定義します。",
          null,
          "ageに10を代入します。",
          null,
          "ageが20以上かを判定します。",
          null,
          "printlnで出力します。",
          null,
          "elseで条件不成立時の処理を記述します。",
          null,
          "printlnで出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "else"
          ],
          "strings": [
            "こども"
          ],
          "others": ["10;", ">=", "おとな", "Main", "main(String[] args) {", "10", "println", "}", "}\\"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こども\\n"
          }
        ]
      },
    {
      "title": "論理演算子（&&、||）",
      "correctCode": "public class Main {\\n    public static void main(String[] args) {\\n        // score と bonus を定義する\\n        int score = 80;\\n        int bonus = 10;\\n        // && で両方の条件をチェックする\\n        if (score >= 70 && bonus > 0) {\\n            System.out.println(\"ボーナスあり合格\");\\n        }\\n    }\\n}",
      "holeyCode": "public class ___ {\\n    public static void ___\\(String[] args) {\\n        // score と bonus を定義する\\n        int score = ___;\\n        int bonus = ___;\\n        // && で両方の条件をチェックする\\n        if (score >= ___ && bonus > 0) {\\n            System.out.___(\"ボーナスあり合格\");\\n        ___\\n    ___\\n___",
      "correctLines": [
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // score と bonus を定義する",
          "        int score = 80;",
          "        int bonus = 10;",
          "        // && で両方の条件をチェックする",
          "        if (score >= 70 && bonus > 0) {",
          "            System.out.println(\"ボーナスあり合格\");",
          "        }",
          "    }",
          "}"
        ],
      "lineHints": [
          "Mainクラスを定義します。",
          "main関数を定義します。",
          null,
          "scoreに80を代入します。",
          "bonusに10を代入します。",
          null,
          "scoreが70以上かつbonusが0より大きいかを判定します。",
          "printlnで出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "&&",
            "||",
            "&",
            "|"
          ],
          "others": ["Main", "main(String[] args) {", "80", "10", "70", "println", "}", "}\\"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ボーナスあり合格\\n"
          }
        ]
      },
    {
      "title": "順番に取り出す「拡張for文」",
      "correctCode": "public class Main {\\n    public static void main(String[] args) {\\n        // 配列を作る\\n        String[] names = {\"たろう\", \"はなこ\"};\\n        // 変数 name で配列 names を順番に取り出す\\n        for (String name : names) {\\n            System.out.println(name);\\n        }\\n    }\\n}",
      "holeyCode": "public class ___ {\\n    public static void ___\\(String[] args) {\\n        // 配列を作る\\n        String[] names = {___};\\n        // 変数 name で配列 names を順番に取り出す\\n        for (String ___ : names) {\\n            System.out.___(name);\\n        ___\\n    ___\\n___",
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
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "繰り返し処理（ループ）を開始する。",
          "変数の値をコンソールに出力し、改行します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "name",
            "names"
          ],
          "others": ["Main", "main(String[] args) {", "\"たろう\", \"はなこ\"", "println", "}", "}\\"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "たろう\\nはなこ\\n"
          }
        ]
      },
    {
      "title": "名前で探しましょう「HashMap」",
      "correctCode": "import java.util.HashMap;\\npublic class Main {\\n    public static void main(String[] args) {\\n        // new HashMap で作る\\n        HashMap<String, String> user = new HashMap<>();\\n        // put でデータを追加する\\n        user.put(\"name\", \"たろう\");\\n        // get でデータを取り出す\\n        System.out.println(user.get(\"name\"));\\n    }\\n}",
      "holeyCode": "import java.util.___ ;\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // new HashMap で作る\\n        ___<String, String> user = new HashMap<>();\\n        // put でデータを追加する\\n        ___.put(\"___\", \"たろう\");\\n        // get でデータを取り出す\\n        System.out.___(user.get(\"name\"));\\n    ___\\n___",
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
          "HashMapクラスをインポートします。",
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "new HashMap<>(); で新しくはこを作ります。",
          null,
          "put（プット）でデータを入れます。",
          null,
          "get（ゲット）でデータを取り出します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "put",
            "get"
          ],
          "strings": [
            "HashMap"
          ],
          "others": ["HashMap;", "Main", "main(String[] args) {", "name", "println", "}", "user", "HashMap;", "}\\"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "たろう\\n"
          }
        ]
      },
    {
      "title": "自分だけの関数を作ろう「メソッド」",
      "correctCode": "public class Main {\\n    // greet というメソッドを定義する\\n    public static void greet() {\\n        System.out.println(\"こんにちは\");\\n    }\\n    public static void main(String[] args) {\\n        // greet メソッドを呼び出す\\n        greet();\\n    }\\n}",
      "holeyCode": "public class ___ {\\n    // greet というメソッドを定義する\\n    public static void ___() {\\n        System.out.___(\"こんにちは\");\\n    ___\\n    public static void ___\\(String[] args) {\\n        // greet メソッドを呼び出す\\n        ___();\\n    ___\\n___",
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
          "外部からアクセス可能なクラス（Main）を定義します。",
          null,
          "ここを正しく入力してください。",
          "printlnで文字列をコンソールに出力します。",
          "ここを正しく入力してください。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "関数（greet）を呼び出して実行します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "greet"
          ],
          "others": ["Main", "println", "}", "main(String[] args) {", "}\\"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      }
  ]
}
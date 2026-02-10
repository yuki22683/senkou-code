export const javaData = {
  "language": "java",
  "lessonId": "java-1",
  "lessonTitle": "Java (ジャバ) に挑戦！",
  "lessonDescription": "きっちりしたルールが特徴の言葉「Java（ジャバ）」のきほんを学びましょう。コンピュータに正しい手順で指示（しじ）を出す方法を身につけます。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "tutorialSlides": [
    { "title": "Java（ジャバ）とは？", "content": "# 世界中で使われる「きっちりした」言語\\n\\nJava（ジャバ）は、銀行やAndroidアプリなどで使われている信頼性の高いプログラミング言語です。\\n\\n**たとえ話：** Javaは「厳格な先生」のようなもの。ルールは厳しいけれど、そのおかげで間違いの少ない安全なプログラムを作れます。" },
    { "title": "Javaを動かす「お約束」", "content": "# 最初に書く「おまじない」\\n\\nJavaでプログラムを書くときは、必ず書かなければいけない「お約束」があります。\\n\\n```java\\npublic class Main {\\n    public static void main(String[] args) {\\n        // ここにやりたいことを書くよ！\\n    }\\n}\\n```\\n\\n- `public class Main` → プログラムに名前をつける\\n- `public static void main` → 「ここからスタート！」の合図" },
    { "title": "画面に文字を出す", "content": "# System.out.println\\n\\n画面に文字を出したいときは `System.out.println()` を使います。\\n\\n```java\\nSystem.out.println(\"こんにちは\");\\n```\\n**実行結果：** こんにちは\\n\\n長い名前ですが、これがJavaの流儀です！" },
    { "title": "変数（はこ）を作る", "content": "# String と int\\n\\nデータを保存する「はこ」を作れます。\\n\\n**文字用のはこ：String**\\n```java\\nString name = \\\"太郎\\\";\\n```\\n\\n**数字用のはこ：int**\\n```java\\nint score = 100;\\n```\\n\\nJavaでは「何を入れるか」を先に決める必要があります。" },
    { "title": "計算してみよう", "content": "# 四則演算\\n\\n`int` のはこに入れた数字は計算できます。\\n\\n```java\\nint apple = 100;\\nint orange = 50;\\nSystem.out.println(apple + orange);\\n```\\n**実行結果：** 150\\n\\n`%` を使うと「あまり」も計算できます。\\n\\n```java\\nSystem.out.println(10 % 3);  // => 1（あまり）\\n```" }
  ],
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "correctCode": "public class Main {\\n    public static void main(String[] args) {\\n        // Hello, Java! と出力する\\n        System.out.println(\"Hello, Java!\");\\n    }\\n}",
      "holeyCode": "public class ___ {\\n    public static void ___(___[] ___) {\\n        // Hello, Java! と出力する\\n        ___.___.___(___)___\\n    ___\\n___",
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
          "mainメソッドを定義します。String[]型の引数argsを受け取ります。",
          null,
          "Systemクラスのoutオブジェクトのprintlnメソッドで文字列を出力します。",
          "ここまでがスタートの合図の終わりです。",
          "ここまでがプログラム全体の終わりです。"
        ],
        "candidates": {
          "functions": [
            "println"
          ],
          "strings": [
            "\"Hello, Java!\""
          ],
          "others": ["Main", "main", "String", "args", "System", "out", ";", "}", "}\\"]
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
      "holeyCode": "public class ___ {\\n    public static void ___(___[] ___) {\\n        // 文字列 Java を代入する\\n        ___ ___ = ___;\\n        // 変数 name を出力する\\n        ___.___.___(___);\\n    ___\\n___",
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
          "mainメソッドを定義します。String[]型の引数argsを受け取ります。",
          null,
          "String型の変数nameに文字列\"Java\"を代入します。",
          null,
          "Systemクラスのoutオブジェクトのprintlnメソッドで変数nameを出力します。",
          "ここまでがスタートの合図の終わりです。",
          "ここまでがプログラム全体の終わりです。"
        ],
        "candidates": {
          "variables": [
            "name"
          ],
          "functions": [
            "println"
          ],
          "strings": [
            "\"Java\""
          ],
          "others": ["Main", "main", "String", "args", "System", "out", ";", "}", "}\\"]
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
      "holeyCode": "public class ___ {\\n    public static void ___(___[] ___) {\\n        // x に 10 を代入する\\n        ___ ___ = ___;\\n        // y に 3 を代入する\\n        ___ ___ = ___;\\n        // - でひき算した答えを出す\\n        ___.___.___(___ ___ ___);\\n    ___\\n___",
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
          "mainメソッドを定義します。String[]型の引数argsを受け取ります。",
          null,
          "int型の変数xに10を代入します。",
          null,
          "int型の変数yに3を代入します。",
          null,
          "Systemクラスのoutオブジェクトのprintlnメソッドで引き算の結果を出力します。演算子は-です。",
          "ここまでがスタートの合図の終わりです。",
          "ここまでがプログラム全体の終わりです。"
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
          "others": ["Main", "main", "String", "args", "int", "System", "out", "println", "}", "}\\"]
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
      "holeyCode": "public class ___ {\\n    public static void ___(___[] ___) {\\n        // 10 を 3 で割ったあまりを出力する\\n        ___.___.___(___ ___ ___);\\n    ___\\n___",
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
          "mainメソッドを定義します。String[]型の引数argsを受け取ります。",
          null,
          "Systemクラスのoutオブジェクトのprintlnメソッドで10%3の結果を出力します。",
          "ここまでがスタートの合図の終わりです。",
          "ここまでがプログラム全体の終わりです。"
        ],
        "candidates": {
          "operators": [
            "%",
            "/",
            "*",
            "-"
          ],
          "numbers": [
            "10",
            "3"
          ],
          "others": ["Main", "main", "String", "args", "System", "out", "println", "}", "}\\"]
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
      "holeyCode": "public class ___ {\\n    public static void ___(___[] ___) {\\n        // hp に 100 を入れる\\n        ___ ___ = ___;\\n        // += で 20 を足す\\n        ___ ___ ___;\\n        // -= で 50 を引く\\n        ___ ___ ___;\\n        ___.___.___(___)___\\n    ___\\n___",
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
          "mainメソッドを定義します。String[]型の引数argsを受け取ります。",
          null,
          "int型の変数hpに100を代入します。",
          null,
          "hpに20を加算します。変数名、演算子+=、数値の順です。",
          null,
          "hpから50を減算します。変数名、演算子-=、数値の順です。",
          "Systemクラスのoutオブジェクトのprintlnメソッドで変数hpを出力します。",
          "ここまでがスタートの合図の終わりです。",
          "ここまでがプログラム全体の終わりです。"
        ],
        "candidates": {
          "operators": [
            "+=",
            "-=",
            "*=",
            "/="
          ],
          "variables": [
            "hp"
          ],
          "numbers": [
            "100",
            "20",
            "50"
          ],
          "others": ["Main", "main", "String", "args", "int", "System", "out", "println", ";", "}", "}\\"]
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
      "holeyCode": "public class ___ {\\n    public static void ___(___[] ___) {\\n        // age というはこに 10 を入れる\\n        ___ ___ = ___;\\n        // 変数 age をくっつけて表示する\\n        ___.___.___(___ ___ ___ ___ ___);\\n    ___\\n___",
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
          "mainメソッドを定義します。String[]型の引数argsを受け取ります。",
          null,
          "int型の変数ageに10を代入します。",
          null,
          "Systemクラスのoutオブジェクトのprintlnメソッドで文字列を連結して出力します。+で連結します。",
          "ここまでがスタートの合図の終わりです。",
          "ここまでがプログラム全体の終わりです。"
        ],
        "candidates": {
          "variables": [
            "age"
          ],
          "operators": [
            "+"
          ],
          "strings": [
            "\"私は\"",
            "\"歳です\""
          ],
          "numbers": [
            "10"
          ],
          "others": ["Main", "main", "String", "args", "int", "System", "out", "println", ")", ";", "}", "}\\"]
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
      "holeyCode": "public class ___ {\\n    public static void ___(___[] ___) {\\n        // \"あか\", \"あお\" の順で配列を作る\\n        ___[] ___ = {___, ___};\\n        // 添字 1 で2番目を出す\\n        ___.___.___(___[___]);\\n    ___\\n___",
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
          "mainメソッドを定義します。String[]型の引数argsを受け取ります。",
          null,
          "String[]型の配列colorsに\"あか\"と\"あお\"を代入します。",
          null,
          "Systemクラスのoutオブジェクトのprintlnメソッドで配列の2番目（インデックス1）を出力します。",
          "ここまでがスタートの合図の終わりです。",
          "ここまでがプログラム全体の終わりです。"
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
          "others": ["Main", "main", "String", "args", "System", "out", "println", "}", "}\\"]
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
      "holeyCode": "public class ___ {\\n    public static void ___(___[] ___) {\\n        // score に 100 を入れる\\n        ___ ___ = ___;\\n        // > で80より大きいか比較する\\n        if (___ ___ ___) {\\n            // ごうかく！ と表示する\\n            ___.___.___(___);\\n        ___\\n    ___\\n___",
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
          "mainメソッドを定義します。String[]型の引数argsを受け取ります。",
          null,
          "int型の変数scoreに100を代入します。",
          null,
          "scoreが80より大きいかを判定します。変数名、演算子>、数値の順です。",
          null,
          "Systemクラスのoutオブジェクトのprintlnメソッドで文字列を出力します。",
          "ここまでがスタートの合図の終わりです。",
          "ここまでがスタートの合図の終わりです。",
          "ここまでがプログラム全体の終わりです。"
        ],
        "candidates": {
          "operators": [
            ">"
          ],
          "variables": [
            "score"
          ],
          "strings": [
            "\"ごうかく！\""
          ],
          "numbers": [
            "100",
            "80"
          ],
          "others": ["Main", "main", "String", "args", "int", "System", "out", "println", "}", "}\\"]
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
      "holeyCode": "public class ___ {\\n    public static void ___(___[] ___) {\\n        // age に 10 を入れる\\n        ___ ___ = ___;\\n        // 20以上かを比較する演算子\\n        if (___ ___ ___) {\\n            // 20歳以上のときのメッセージ（'おとな'）\\n            ___.___.___(___);\\n        // else でそれ以外の場合\\n        ___ else ___\\n            // こども と表示する\\n            ___.___.___(___);\\n        ___\\n    ___\\n___",
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
          "mainメソッドを定義します。String[]型の引数argsを受け取ります。",
          null,
          "int型の変数ageに10を代入します。",
          null,
          "ageが20以上かを判定します。変数名、演算子>=、数値の順です。",
          null,
          "Systemクラスのoutオブジェクトのprintlnメソッドで\"おとな\"を出力します。",
          null,
          "elseキーワードでif条件が偽の場合の処理を開始します。閉じ波括弧}と開き波括弧{で囲みます。",
          null,
          "Systemクラスのoutオブジェクトのprintlnメソッドで\"こども\"を出力します。",
          "ここまでがスタートの合図の終わりです。",
          "ここまでがスタートの合図の終わりです。",
          "ここまでがプログラム全体の終わりです。"
        ],
        "candidates": {
          "keywords": [
            "else"
          ],
          "variables": [
            "age"
          ],
          "strings": [
            "\"おとな\"",
            "\"こども\""
          ],
          "numbers": [
            "10",
            "20"
          ],
          "operators": [
            ">="
          ],
          "others": ["Main", "main", "String", "args", "int", "System", "out", "println", "}", "{", "}\\"]
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
      "holeyCode": "public class ___ {\\n    public static void ___(___[] ___) {\\n        // score と bonus を定義する\\n        ___ ___ = ___;\\n        ___ ___ = ___;\\n        // && で両方の条件をチェックする\\n        if (___ >= ___ ___ ___ > ___) {\\n            ___.___.___(___);\\n        ___\\n    ___\\n___",
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
          "mainメソッドを定義します。String[]型の引数argsを受け取ります。",
          null,
          "int型の変数scoreに80を代入します。",
          "int型の変数bonusに10を代入します。",
          null,
          "scoreが70以上かつbonusが0より大きいかを判定します。論理演算子&&を使います。",
          "Systemクラスのoutオブジェクトのprintlnメソッドで文字列を出力します。",
          "ここまでがスタートの合図の終わりです。",
          "ここまでがスタートの合図の終わりです。",
          "ここまでがプログラム全体の終わりです。"
        ],
        "candidates": {
          "operators": [
            "&&",
            "||",
            "&",
            "|"
          ],
          "variables": [
            "score",
            "bonus"
          ],
          "numbers": [
            "80",
            "10",
            "70",
            "0"
          ],
          "strings": [
            "\"ボーナスあり合格\""
          ],
          "others": ["Main", "main", "String", "args", "int", "System", "out", "println", "}", "}\\"]
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
      "holeyCode": "public class ___ {\\n    public static void ___(___[] ___) {\\n        // 配列を作る\\n        ___[] ___ = {___, ___};\\n        // 変数 name で配列 names を順番に取り出す\\n        for (___ ___ : ___) {\\n            ___.___.___(___);\\n        ___\\n    ___\\n___",
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
          "mainメソッドを定義します。String[]型の引数argsを受け取ります。",
          null,
          "String[]型の配列namesに\"たろう\"と\"はなこ\"を代入します。",
          null,
          "拡張for文でString型の変数nameに配列namesの要素を順番に代入します。",
          "Systemクラスのoutオブジェクトのprintlnメソッドで変数nameを出力します。",
          "ここまでがスタートの合図の終わりです。",
          "ここまでがスタートの合図の終わりです。",
          "ここまでがプログラム全体の終わりです。"
        ],
        "candidates": {
          "variables": [
            "name",
            "names"
          ],
          "strings": [
            "\"たろう\"",
            "\"はなこ\""
          ],
          "others": ["Main", "main", "String", "args", "System", "out", "println", "}", "}\\"]
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
      "holeyCode": "import ___.___.___;\\npublic class ___ {\\n    public static void ___(___[] ___) {\\n        // new HashMap で作る\\n        ___<___, ___> ___ = new ___<>();\\n        // put でデータを追加する\\n        ___.___(___, ___);\\n        // get でデータを取り出す\\n        ___.___.___(___.___(___)___\\n    ___\\n___",
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
          "java.util.HashMapをインポートします。パッケージ名、クラス名を入力します。",
          "外部からアクセス可能なクラス（Main）を定義します。",
          "mainメソッドを定義します。String[]型の引数argsを受け取ります。",
          null,
          "HashMap<String, String>型の変数userにnew HashMap<>()を代入します。",
          null,
          "userオブジェクトのputメソッドで\"name\"キーに\"たろう\"を追加します。",
          null,
          "Systemクラスのoutオブジェクトのprintlnメソッドでuserのgetメソッドを使って値を出力します。",
          "ここまでがスタートの合図の終わりです。",
          "ここまでがプログラム全体の終わりです。"
        ],
        "candidates": {
          "functions": [
            "put",
            "get"
          ],
          "strings": [
            "\"name\"",
            "\"たろう\""
          ],
          "others": ["java", "util", "HashMap", ";", "Main", "main", "String", "args", "user", "System", "out", "println", ")", ");", "new", "}", "}\\"]
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
      "holeyCode": "public class ___ {\\n    // greet というメソッドを定義する\\n    public static void ___() {\\n        ___.___.___(___)___\\n    ___\\n    public static void ___(___[] ___) {\\n        // greet メソッドを呼び出す\\n        ___();\\n    ___\\n___",
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
          "greetという名前のメソッドを定義します。",
          "Systemクラスのoutオブジェクトのprintlnメソッドで\"こんにちは\"を出力します。",
          "ここまでがメソッドの終わりです。",
          "mainメソッドを定義します。String[]型の引数argsを受け取ります。",
          null,
          "greetメソッドを呼び出して実行します。",
          "ここまでがスタートの合図の終わりです。",
          "ここまでがプログラム全体の終わりです。"
        ],
        "candidates": {
          "functions": [
            "greet",
            "println"
          ],
          "strings": [
            "\"こんにちは\""
          ],
          "others": ["Main", "main", "String", "args", "System", "out", ";", "}", "}\\"]
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
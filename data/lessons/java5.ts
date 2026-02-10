export const javaData5 = {
  "language": "java",
  "lessonId": "java-5",
  "lessonTitle": "Java V - 例外処理とファイルI/O",
  "lessonDescription": "Javaの例外処理とファイル入出力を学びます。堅牢なプログラムを書くための必須スキルを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 5,
  "tutorialSlides": [
    { "title": "例外とは？", "content": "# プログラムの異常事態\\n\\n**例外**は、プログラム実行中に発生する「予期しない問題」です。\\n\\n```java\\nint[] arr = {1, 2, 3};\\narr[10];  // 10番目？そんなのない！\\n// → ArrayIndexOutOfBoundsException\\n```\\n\\n例外が起きると、そのままではプログラムが止まってしまいます。" },
    { "title": "try-catch", "content": "# 例外をキャッチする\\n\\n**try-catch**で例外を捕まえて対処できます。\\n\\n```java\\ntry {\\n    int x = 10 / 0;  // 0で割る→例外！\\n} catch (ArithmeticException e) {\\n    System.out.println(\\\"エラー!\\\");\\n}\\n```\\n\\ntryの中で例外が起きたら、catchの中が実行されます。" },
    { "title": "finally", "content": "# 必ず実行される処理\\n\\n**finally**ブロックは、例外が起きても起きなくても必ず実行されます。\\n\\n```java\\ntry {\\n    // 処理\\n} catch (Exception e) {\\n    // 例外処理\\n} finally {\\n    // 必ず実行される（後片付け）\\n}\\n```\\n\\nファイルを閉じるなどのクリーンアップ処理に使います。" },
    { "title": "throws 宣言", "content": "# 例外を呼び出し元に伝える\\n\\n**throws**は「このメソッドは例外を投げるかも」と宣言します。\\n\\n```java\\npublic void readFile() throws IOException {\\n    // ファイル読み込み処理\\n}\\n```\\n\\n呼び出し側は「キャッチする」か「さらに上に投げる」かを選びます。" },
    { "title": "カスタム例外", "content": "# 独自の例外を作る\\n\\nExceptionを継承して、オリジナルの例外を作れます。\\n\\n```java\\nclass MyException extends Exception {\\n    public MyException(String msg) {\\n        super(msg);\\n    }\\n}\\n\\n// 使い方\\nif (age < 0) {\\n    throw new MyException(\\\"年齢は正の数です\\\");\\n}\\n```" }
  ],
  "exercises": [
    {
      "title": "try-catch の基本",
      "description": "エラーを適切に処理する方法を学びます",
      "tutorialSlides": [
        {
          "title": "例外（れいがい）とは？",
          "content": "# プログラムの異常事態（いじょうじたい）\\n\\n**例外** は、プログラム実行中に発生する「予期しない問題」です。\\n\\n**たとえ話：** 料理中に「お皿が割れた！」というようなアクシデントです。レシピ通りには進められなくなりますよね。\\n\\n```java\\nint[] arr = {1, 2, 3};  // 3つのデータ\\narr[10];  // 10番目？そんなのない！\\n// → ArrayIndexOutOfBoundsException（配列の範囲外エラー）\\n```\\n\\n例外が起きると、そのままではプログラムが止まってしまいます。"
        },
        {
          "title": "try-catch（トライ・キャッチ）",
          "content": "# 例外をキャッチ\\n\\n**try-catch** を使うと、例外をキャッチ（捕まえて）対処できます。\\n\\n**たとえ話：** サーカスの安全ネットのように、落ちても（エラーが起きても）受け止めてくれます。\\n\\n```java\\ntry {  // 「試す」ブロック\\n    int x = 10 / 0;  // 0で割る→例外！\\n} catch (ArithmeticException e) {  // 「捕まえる」ブロック\\n    System.out.println(\"エラー!\");  // 対処する\\n}\\n```\\n\\n**ポイント：** tryの中で例外が起きたら、catchの中が実行されます"
        }
      ],
      "correctCode": "public class Main {\\n    public static void main(String[] args) {\\n        // tryで例外をキャッチする準備\\n        try {\\n            // 0で割ると例外が発生する\\n            int result = 10 / 0;\\n        } catch (ArithmeticException e) {\\n            // println でエラーメッセージを出力する\\n            System.out.println(\"エラー\");\\n        }\\n    }\\n}",
      "holeyCode": "public class ___ {\\n    public static void ___(___[] ___) {\\n        // tryで例外をキャッチする準備\\n        ___ {\\n            // 0で割ると例外が発生する\\n            int ___ = ___ / ___;\\n        } ___ (___ ___) {\\n            // println でエラーメッセージを出力する\\n            ___.___.___(___)___\\n        ___\\n    ___\\n___",
      "correctLines": [
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // tryで例外をキャッチする準備",
          "        try {",
          "            // 0で割ると例外が発生する",
          "            int result = 10 / 0;",
          "        } catch (ArithmeticException e) {",
          "            // println でエラーメッセージを出力する",
          "            System.out.println(\"エラー\");",
          "        }",
          "    }",
          "}"
        ],
      "lineHints": [
          "Mainクラスを定義します。",
          "main メソッドを定義します。String配列argsを引数に取ります。",
          null,
          "tryブロックで例外が発生する可能性のある処理を囲みます。",
          null,
          "int型の変数resultに10 / 0の結果を代入します。",
          "catchでArithmeticException型の例外eをキャッチします。",
          null,
          "System.out.printlnで\"エラー\"を出力し、;で終わります。",
          "閉じ括弧}でcatchブロックを終了します。",
          "閉じ括弧}でmainメソッドを終了します。",
          "閉じ括弧}でクラスを終了します。"
        ],
        "candidates": {
          "keywords": [
            "try",
            "catch",
            "int"
          ],
          "others": ["Main", "main", "String", "args", "result", "10", "0", "ArithmeticException", "e", "System", "out", "println", "\"エラー\"", ";", "}", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "エラー\\n"
          }
        ]
      },
    {
      "title": "finally ブロック",
      "description": "finally ブロックの使い方を学びます",
      "tutorialSlides": [
        {
          "title": "finally（ファイナリー）とは？",
          "content": "# 必ず実行される処理\\n\\n**finally**（ファイナリー＝最後に）ブロックは、例外が起きても起きなくても**必ず**実行されます。\\n\\n**たとえ話：** 料理が成功しても失敗しても、最後は必ずキッチンを片付けますよね。それがfinallyです。\\n\\n```java\\ntry {\\n    // 処理（成功するかも、失敗するかも）\\n} catch (Exception e) {\\n    // 例外処理（失敗したときだけ）\\n} finally {\\n    // 必ず実行される（成功でも失敗でも！）\\n}\\n```"
        },
        {
          "title": "リソースの解放（かいほう）",
          "content": "# クリーンアップ処理に使う\\n\\nファイルを開いたら閉じる、接続（せつぞく）を切るなど、「後片付け」をfinallyに書きます。\\n\\n**たとえ話：** 本を読み終わったら本棚に戻す、電気を使ったら消す、ということを忘れずにできます。\\n\\n```java\\nFileReader reader = null;\\ntry {\\n    reader = new FileReader(\"file.txt\");\\n    // ファイルを読む処理\\n} finally {\\n    if (reader != null) reader.close();  // 必ず閉じる！\\n}\\n```\\n\\n**メリット：** エラーが起きても後片付けを忘れません"
        }
      ],
      "correctCode": "public class Main {\\n    public static void main(String[] args) {\\n        try {\\n            // println で出力する\\n            System.out.println(\"Try\");\\n        } catch (Exception e) {\\n            System.out.println(\"Catch\");\\n        // finally で必ず実行する\\n        } finally {\\n            // println で出力する\\n            System.out.println(\"Finally\");\\n        }\\n    }\\n}",
      "holeyCode": "public class ___ {\\n    public static void ___(___[] ___) {\\n        ___ {\\n            // println で出力する\\n            ___.___.___(___)___\\n        } ___ (___ ___) {\\n            ___.___.___(___)___\\n        // finally で必ず実行する\\n        } ___ {\\n            // println で出力する\\n            ___.___.___(___)___\\n        ___\\n    ___\\n___",
      "correctLines": [
          "public class Main {",
          "    public static void main(String[] args) {",
          "        try {",
          "            // println で出力する",
          "            System.out.println(\"Try\");",
          "        } catch (Exception e) {",
          "            System.out.println(\"Catch\");",
          "        // finally で必ず実行する",
          "        } finally {",
          "            // println で出力する",
          "            System.out.println(\"Finally\");",
          "        }",
          "    }",
          "}"
        ],
      "lineHints": [
          "Mainクラスを定義します。",
          "mainメソッドを定義します。String配列argsを引数に取ります。",
          "tryブロックで例外が発生する可能性のある処理を囲みます。",
          null,
          "System.out.printlnで\"Try\"を出力し、;で終わります。",
          "catchでException型の例外eをキャッチします。",
          "System.out.printlnで\"Catch\"を出力し、;で終わります。",
          null,
          "finallyブロックは必ず実行される処理を記述します。",
          null,
          "System.out.printlnで\"Finally\"を出力し、;で終わります。",
          "閉じ括弧}でfinallyブロックを終了します。",
          "閉じ括弧}でmainメソッドを終了します。",
          "閉じ括弧}でクラスを終了します。"
        ],
        "candidates": {
          "keywords": [
            "try",
            "catch",
            "finally"
          ],
          "others": ["Main", "main", "String", "args", "System", "out", "println", "\"Try\"", ";", "Exception", "e", "\"Catch\"", "\"Finally\"", "}", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Try\\nFinally\\n"
          }
        ]
      },
    {
      "title": "throws 宣言",
      "description": "throws 宣言の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "throws（スローズ）とは？",
          "content": "# 例外を呼び出し元に伝える\\n\\n**throws**（スローズ＝投げる）は、「このメソッドは例外を投げるかもしれません」と宣言（せんげん）するキーワードです。\\n\\n**たとえ話：** 「このボールは爆発するかもしれないので、受け取る人は気をつけてね」と注意書きをつけるようなものです。\\n\\n```java\\npublic void readFile() throws IOException {\\n    // ファイル読み込み処理\\n    // IOException（入出力エラー）が起きる可能性あり！\\n}\\n```"
        },
        {
          "title": "呼び出し側の責任（せきにん）",
          "content": "# キャッチか再スロー（投げ渡し）\\n\\nthrowsがついたメソッドを呼ぶ側は、「キャッチする」か「さらに上に投げる」かを選びます。\\n\\n**方法1：自分でキャッチする**\\n```java\\ntry {\\n    readFile();  // 例外が起きるかも\\n} catch (IOException e) {\\n    // 自分で対処する\\n}\\n```\\n\\n**方法2：さらに上に投げる**\\n```java\\npublic void caller() throws IOException {\\n    readFile();  // 自分は対処せず、呼び出し元に任せる\\n}\\n```\\n\\n**たとえ話：** 問題が起きたら「自分で解決する」か「上司に報告する」かの選択です"
        }
      ],
      "correctCode": "import java.io.*;\\n\\npublic class Main {\\n    // riskyMethod()をthrows Exceptionで宣言\\n    public static void riskyMethod() throws Exception {\\n        // throw new Exception(\"Error!\")で例外をスロー\\n        throw new Exception(\"エラー！\");\\n    }\\n    public static void main(String[] args) {\\n        try {\\n            // riskyMethod を呼び出す\\n            riskyMethod();\\n        } catch (Exception e) {\\n            // println で出力する\\n            System.out.println(\"Caught\");\\n        }\\n    }\\n}",
      "holeyCode": "import ___.___.___\\n___\\npublic class ___ {\\n    // riskyMethod()をthrows Exceptionで宣言\\n    public static void ___() throws ___ {\\n        // throw new Exception(\"Error!\")で例外をスロー\\n        throw new ___(___);\\n    ___\\n    public static void ___(___[] ___) {\\n        ___ {\\n            // riskyMethod を呼び出す\\n            ___()___\\n        } ___ (___ ___) {\\n            // println で出力する\\n            ___.___.___(___)___\\n        ___\\n    ___\\n___",
      "correctLines": [
          "import java.io.*;",
          "",
          "public class Main {",
          "    // riskyMethod()をthrows Exceptionで宣言",
          "    public static void riskyMethod() throws Exception {",
          "        // throw new Exception(\"Error!\")で例外をスロー",
          "        throw new Exception(\"エラー！\");",
          "    }",
          "    public static void main(String[] args) {",
          "        try {",
          "            // riskyMethod を呼び出す",
          "            riskyMethod();",
          "        } catch (Exception e) {",
          "            // println で出力する",
          "            System.out.println(\"Caught\");",
          "        }",
          "    }",
          "}"
        ],
      "lineHints": [
          "java.io.*をインポートします。",
          null,
          "Mainクラスを定義します。",
          null,
          "riskyMethodメソッドをthrows Exceptionで宣言します。",
          null,
          "throw newでException(\"エラー！\")をスローします。",
          "閉じ括弧}でriskyMethodを終了します。",
          "mainメソッドを定義します。String配列argsを引数に取ります。",
          "tryブロックで例外が発生する可能性のある処理を囲みます。",
          null,
          "riskyMethod()を呼び出し、;で終わります。",
          "catchでException型の例外eをキャッチします。",
          null,
          "System.out.printlnで\"Caught\"を出力し、;で終わります。",
          "閉じ括弧}でcatchブロックを終了します。",
          "閉じ括弧}でmainメソッドを終了します。",
          "閉じ括弧}でクラスを終了します。"
        ],
        "candidates": {
          "keywords": [
            "throw",
            "throws",
            "try",
            "catch",
            "new"
          ],
          "others": ["java", "io", "*;", "", "Main", "riskyMethod", "Exception", "\"エラー！\"", "}", "main", "String", "args", ";", "e", "System", "out", "println", "\"Caught\""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Caught\\n"
          }
        ]
      },
    {
      "title": "カスタム例外",
      "description": "エラーを適切に処理する方法を学びます",
      "tutorialSlides": [
        {
          "title": "カスタム例外（れいがい）",
          "content": "# 独自（どくじ）の例外を定義\\n\\n**Exception** を継承（けいしょう）して、自分だけのオリジナル例外を作れます。\\n\\n**たとえ話：** 標準の例外は「一般的なエラー」ですが、カスタム例外は「このアプリ専用のエラー」です。「年齢がマイナスはおかしい！」という特別なエラーを作れます。\\n\\n```java\\nclass MyException extends Exception {  // Exceptionを継承\\n    public MyException(String msg) {\\n        super(msg);  // 親クラスにメッセージを渡す\\n    }\\n}\\n```"
        },
        {
          "title": "使い方",
          "content": "# throw（スロー）で投げる\\n\\n`throw`（スロー＝投げる）を使って、自分で例外を発生させられます。\\n\\n**コード例：** 年齢がマイナスならエラーにする\\n```java\\nif (age < 0) {\\n    throw new MyException(\"年齢は正の数です\");\\n}\\n```\\n\\n**何が起きる？**\\n1. 年齢が0より小さいかチェック\\n2. 小さければ例外を「投げる」\\n3. どこかでcatchされるまで上に伝わる\\n\\n**注意：** throw は「投げる」、throws は「投げるかもしれないと宣言」で違います"
        }
      ],
      "correctCode": "// extends で Exception を継承する\\nclass InvalidAgeException extends Exception {\\n    public InvalidAgeException(String msg) {\\n        // super で親クラスのコンストラクタを呼び出す\\n        super(msg);\\n    }\\n}\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        try {\\n            // throw new InvalidAgeException(\"Invalid\")で例外をスロー\\n            throw new InvalidAgeException(\"Invalid\");\\n        } catch (InvalidAgeException e) {\\n            // getMessage でメッセージを取得する\\n            System.out.println(e.getMessage());\\n        }\\n    }\\n}",
      "holeyCode": "// extends で Exception を継承する\\nclass ___ extends ___ {\\n    public ___(___  ___) {\\n        // super で親クラスのコンストラクタを呼び出す\\n        ___(___);\\n    ___\\n___\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) {\\n        ___ {\\n            // throw new InvalidAgeException(\"Invalid\")で例外をスロー\\n            throw new ___(___);\\n        } ___ (___ ___) {\\n            // getMessage でメッセージを取得する\\n            ___.___.___(___.___());\\n        ___\\n    ___\\n___",
      "correctLines": [
          "// extends で Exception を継承する",
          "class InvalidAgeException extends Exception {",
          "    public InvalidAgeException(String msg) {",
          "        // super で親クラスのコンストラクタを呼び出す",
          "        super(msg);",
          "    }",
          "}",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        try {",
          "            // throw new InvalidAgeException(\"Invalid\")で例外をスロー",
          "            throw new InvalidAgeException(\"Invalid\");",
          "        } catch (InvalidAgeException e) {",
          "            // getMessage でメッセージを取得する",
          "            System.out.println(e.getMessage());",
          "        }",
          "    }",
          "}"
        ],
      "lineHints": [
          null,
          "InvalidAgeExceptionクラスをExceptionを継承して定義します。",
          "InvalidAgeExceptionコンストラクタをString型のmsg引数で定義します。",
          null,
          "super(msg)で親クラスのコンストラクタを呼び出します。",
          "閉じ括弧}でコンストラクタを終了します。",
          "閉じ括弧}でInvalidAgeExceptionクラスを終了します。",
          null,
          "Mainクラスを定義します。",
          "mainメソッドを定義します。String配列argsを引数に取ります。",
          "tryブロックで例外が発生する可能性のある処理を囲みます。",
          null,
          "throw newでInvalidAgeException(\"Invalid\")をスローします。",
          "catchでInvalidAgeException型の例外eをキャッチします。",
          null,
          "System.out.printlnでe.getMessage()を出力します。",
          "閉じ括弧}でcatchブロックを終了します。",
          "閉じ括弧}でmainメソッドを終了します。",
          "閉じ括弧}でクラスを終了します。"
        ],
        "candidates": {
          "keywords": [
            "class",
            "extends",
            "throw",
            "try",
            "catch",
            "new"
          ],
          "others": ["InvalidAgeException", "Exception", "String", "msg", "super", "}", "", "Main", "main", "args", "\"Invalid\"", "e", "System", "out", "println", "getMessage", "sg"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Invalid\\n"
          }
        ]
      },
    {
      "title": "try-with-resources",
      "description": "エラーを適切に処理する方法を学びます",
      "tutorialSlides": [
        {
          "title": "自動リソース管理（かんり）",
          "content": "# try-with-resources（トライ・ウィズ・リソーシズ）\\n\\nJava 7以降、リソース（ファイルなど）を自動で閉じてくれる便利な書き方ができます。\\n\\n**たとえ話：** 図書館で本を借りると、返却期限が来たら自動で返却される仕組みのようなものです。\\n\\n```java\\ntry (FileReader reader = new FileReader(\"file.txt\")) {\\n    // reader を使う処理\\n}  // ここで自動で close() が呼ばれる！\\n```\\n\\n`()`（カッコ）の中でリソースを宣言するのがポイントです"
        },
        {
          "title": "メリット",
          "content": "# finally が不要\\n\\n従来は finally で手動で閉じる必要がありましたが、try-with-resources なら自動です。\\n\\n**従来の書き方（長い）**\\n```java\\nFileReader r = null;\\ntry {\\n    r = new FileReader(\"file.txt\");\\n} finally {\\n    if (r != null) r.close();  // 手動で閉じる\\n}\\n```\\n\\n**try-with-resources（短い！）**\\n```java\\ntry (FileReader r = new FileReader(\"file.txt\")) {\\n    // 処理\\n}  // 自動で閉じる！\\n```\\n\\n**メリット：** 閉じ忘れがなくなり、コードもシンプルに！"
        }
      ],
      "correctCode": "import java.io.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // ( でリソースを宣言する try-with-resources\\n        try (StringReader reader = new StringReader(\"こんにちは\")) {\\n            // read で1文字読み込む\\n            System.out.println((char) reader.read());\\n        } catch (IOException e) {\\n            // printStackTrace でスタックトレースを出力する\\n            e.printStackTrace();\\n        }\\n    }\\n}",
      "holeyCode": "import ___.___.___\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) {\\n        // ( でリソースを宣言する try-with-resources\\n        ___ (___ ___ = new ___(___)) {\\n            // read で1文字読み込む\\n            ___.___.___((___)  ___.___());\\n        } ___ (___ ___) {\\n            // printStackTrace でスタックトレースを出力する\\n            ___.___();\\n        ___\\n    ___\\n___",
      "correctLines": [
          "import java.io.*;",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // ( でリソースを宣言する try-with-resources",
          "        try (StringReader reader = new StringReader(\"こんにちは\")) {",
          "            // read で1文字読み込む",
          "            System.out.println((char) reader.read());",
          "        } catch (IOException e) {",
          "            // printStackTrace でスタックトレースを出力する",
          "            e.printStackTrace();",
          "        }",
          "    }",
          "}"
        ],
      "lineHints": [
          "java.io.*をインポートします。",
          null,
          "Mainクラスを定義します。",
          "mainメソッドを定義します。String配列argsを引数に取ります。",
          null,
          "try (StringReader reader = new StringReader(\"こんにちは\"))でリソースを宣言します。",
          null,
          "System.out.printlnで(char) reader.read()を出力します。",
          "catchでIOException型の例外eをキャッチします。",
          null,
          "e.printStackTrace()でスタックトレースを出力します。",
          "閉じ括弧}でcatchブロックを終了します。",
          "閉じ括弧}でmainメソッドを終了します。",
          "閉じ括弧}でクラスを終了します。"
        ],
        "candidates": {
          "keywords": [
            "try",
            "catch",
            "new"
          ],
          "others": ["java", "io", "*;", "", "Main", "main", "String", "args", "StringReader", "reader", "\"こんにちは\"", "System", "out", "println", "char", "read", "IOException", "e", "printStackTrace", "}", "eader"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こ\\n"
          }
        ]
      },
    {
      "title": "BufferedReader でファイル読み込み",
      "description": "ユーザーからの入力を受け取る方法を学びます",
      "tutorialSlides": [
        {
          "title": "BufferedReader（バッファードリーダー）",
          "content": "# バッファ付き読み込み\\n\\n**BufferedReader** は効率的（こうりつてき）にテキストを読み込むためのクラスです。\\n\\n**たとえ話：** 本を読むとき、1文字ずつ読むより、1行ずつ読む方が速いですよね。BufferedReaderは「1行ずつ」まとめて読めます。\\n\\n```java\\nBufferedReader br = new BufferedReader(\\n    new FileReader(\"file.txt\")  // ファイルを読む準備\\n);\\nString line = br.readLine();  // 1行読み込む\\n```"
        },
        {
          "title": "全行（ぜんぎょう）読み込み",
          "content": "# ループで読み込み\\n\\nファイルの全部の行を読みたいときは、whileループを使います。\\n\\n```java\\nString line;\\nwhile ((line = br.readLine()) != null) {  // 読めなくなるまで\\n    System.out.println(line);  // 1行ずつ表示\\n}\\n```\\n\\n**何が起きている？**\\n1. `readLine()` で1行読む\\n2. 読めたら表示して、次の行へ\\n3. 読めなくなったら（null）ループ終了\\n\\n**ポイント：** readLine() は行がなくなると null を返します"
        }
      ],
      "correctCode": "import java.io.*;\\n\\npublic class Main {\\n    public static void main(String[] args) throws IOException {\\n        String content = \"Line1\\nLine2\";\\n        // brにnew BufferedReader(new StringReader(content))を代入\\n        BufferedReader br = new BufferedReader(new StringReader(content));\\n        // readLine で1行ずつ読み込む\\n        String line = br.readLine();\\n        // println で出力する\\n        System.out.println(line);\\n        // close でリソースを閉じる\\n        br.close();\\n    }\\n}",
      "holeyCode": "import ___.___.___\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) throws ___ {\\n        ___ ___ = ___\\n___;\\n        // brにnew BufferedReader(new StringReader(content))を代入\\n        ___ ___ = new ___(new ___(___));\\n        // readLine で1行ずつ読み込む\\n        ___ ___ = ___.___();\\n        // println で出力する\\n        ___.___.___(___)___\\n        // close でリソースを閉じる\\n        ___.___()___\\n    ___\\n___",
      "correctLines": [
          "import java.io.*;",
          "",
          "public class Main {",
          "    public static void main(String[] args) throws IOException {",
          "        String content = \"Line1",
          "Line2\";",
          "        // brにnew BufferedReader(new StringReader(content))を代入",
          "        BufferedReader br = new BufferedReader(new StringReader(content));",
          "        // readLine で1行ずつ読み込む",
          "        String line = br.readLine();",
          "        // println で出力する",
          "        System.out.println(line);",
          "        // close でリソースを閉じる",
          "        br.close();",
          "    }",
          "}"
        ],
      "lineHints": [
          "java.io.*をインポートします。",
          null,
          "Mainクラスを定義します。",
          "mainメソッドを定義します。throws IOExceptionで例外をスローします。",
          "String contentに\"Line1を代入します。",
          "Line2\";で文字列を終了します。",
          null,
          "BufferedReader brにnew BufferedReader(new StringReader(content))を代入します。",
          null,
          "String lineにbr.readLine()の結果を代入します。",
          null,
          "System.out.printlnでlineを出力し、;で終わります。",
          null,
          "br.close()でリソースを閉じ、;で終わります。",
          "閉じ括弧}でmainメソッドを終了します。",
          "閉じ括弧}でクラスを終了します。"
        ],
        "candidates": {
          "keywords": [
            "throws",
            "new"
          ],
          "others": ["java", "io", "*;", "", "Main", "main", "String", "args", "IOException", "content", "\"Line1", "Line2\"", "BufferedReader", "br", "StringReader", "line", "readLine", "System", "out", "println", ";", "close", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Line1\\n"
          }
        ]
      },
    {
      "title": "BufferedWriter でファイル書き込み",
      "description": "ファイルにデータを書き込む方法を学びます",
      "tutorialSlides": [
        {
          "title": "BufferedWriter（バッファードライター）",
          "content": "# バッファ付き書き込み\\n\\n**BufferedWriter** は効率的にテキストを書き込むためのクラスです。\\n\\n**たとえ話：** 手紙を書くとき、1文字書くたびにポストに入れるより、書き終わってからまとめて送る方が効率的ですよね。BufferedWriterは「まとめて書く」ことで高速になります。\\n\\n```java\\nBufferedWriter bw = new BufferedWriter(\\n    new FileWriter(\"file.txt\")  // ファイルに書く準備\\n);\\nbw.write(\"Hello\");  // 文字列を書く\\nbw.close();         // 閉じる（忘れずに！）\\n```"
        },
        {
          "title": "newLine（ニューライン）で改行",
          "content": "# 改行（かいぎょう）を追加\\n\\n`newLine()`を使うと、改行（次の行に移る）を追加できます。\\n\\n```java\\nbw.write(\"Line1\");  // 1行目を書く\\nbw.newLine();       // 改行！\\nbw.write(\"Line2\");  // 2行目を書く\\n```\\n\\n**結果のファイル：**\\n```\\nLine1\\nLine2\\n```\\n\\n**ポイント：** write() だけでは改行されません。改行したいときは newLine() を使いましょう"
        }
      ],
      "correctCode": "import java.io.*;\\n\\npublic class Main {\\n    public static void main(String[] args) throws IOException {\\n        // swにnew StringWriter()を代入\\n        StringWriter sw = new StringWriter();\\n        // bwにnew BufferedWriter(sw)を代入\\n        BufferedWriter bw = new BufferedWriter(sw);\\n        // write で文字列を書き込む\\n        bw.write(\"こんにちは\");\\n        // flush でバッファをフラッシュする\\n        bw.flush();\\n        // toString で文字列に変換する\\n        System.out.println(sw.toString());\\n    }\\n}",
      "holeyCode": "import ___.___.___\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) throws ___ {\\n        // swにnew StringWriter()を代入\\n        ___ ___ = new ___()___\\n        // bwにnew BufferedWriter(sw)を代入\\n        ___ ___ = new ___(___);\\n        // write で文字列を書き込む\\n        ___.___(___)___\\n        // flush でバッファをフラッシュする\\n        ___.___()___\\n        // toString で文字列に変換する\\n        ___.___.___(___.___());\\n    ___\\n___",
      "correctLines": [
          "import java.io.*;",
          "",
          "public class Main {",
          "    public static void main(String[] args) throws IOException {",
          "        // swにnew StringWriter()を代入",
          "        StringWriter sw = new StringWriter();",
          "        // bwにnew BufferedWriter(sw)を代入",
          "        BufferedWriter bw = new BufferedWriter(sw);",
          "        // write で文字列を書き込む",
          "        bw.write(\"こんにちは\");",
          "        // flush でバッファをフラッシュする",
          "        bw.flush();",
          "        // toString で文字列に変換する",
          "        System.out.println(sw.toString());",
          "    }",
          "}"
        ],
      "lineHints": [
          "java.io.*をインポートします。",
          null,
          "Mainクラスを定義します。",
          "mainメソッドを定義します。throws IOExceptionで例外をスローします。",
          null,
          "StringWriter swにnew StringWriter()を代入し、;で終わります。",
          null,
          "BufferedWriter bwにnew BufferedWriter(sw)を代入します。",
          null,
          "bw.writeで\"こんにちは\"を書き込み、;で終わります。",
          null,
          "bw.flush()でバッファをフラッシュし、;で終わります。",
          null,
          "System.out.printlnでsw.toString()を出力します。",
          "閉じ括弧}でmainメソッドを終了します。",
          "閉じ括弧}でクラスを終了します。"
        ],
        "candidates": {
          "keywords": [
            "throws",
            "new"
          ],
          "others": ["java", "io", "*;", "", "Main", "main", "String", "args", "IOException", "StringWriter", "sw", ";", "BufferedWriter", "bw", "write", "\"こんにちは\"", "flush", "System", "out", "println", "toString", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      },
    {
      "title": "Scanner での入力",
      "description": "ユーザーからの入力を受け取る方法を学びます",
      "tutorialSlides": [
        {
          "title": "Scanner（スキャナー）とは？",
          "content": "# テキストのパース（解析）\\n\\n**Scanner**（スキャナー＝読み取り機）は、テキストを単語や数字に分けて読み込みます。\\n\\n**たとえ話：** 文章を「スキャン」して、必要な情報を取り出すイメージです。「10 20 30」という文字列から、10、20、30という数字を取り出せます。\\n\\n```java\\nScanner sc = new Scanner(\"10 20 30\");  // 文字列をスキャン\\nint a = sc.nextInt();  // 最初の数字 → 10\\nint b = sc.nextInt();  // 次の数字 → 20\\n```"
        },
        {
          "title": "様々な読み込み方法",
          "content": "# 便利なメソッド\\n\\n読み込みたいデータの種類によって、使うメソッドが違います。\\n\\n**数字を読む**\\n```java\\nnextInt()    // 整数（1, 2, 3 など）\\nnextDouble() // 小数（1.5, 3.14 など）\\n```\\n\\n**文字を読む**\\n```java\\nnext()       // 単語1つ（空白で区切り）\\nnextLine()   // 1行まるごと\\n```\\n\\n**まだ読めるかチェック**\\n```java\\nhasNext()    // 次のデータがあるか？\\n```\\n\\n**覚え方：** next〇〇 で「次の〇〇を読む」です"
        }
      ],
      "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // scにnew Scanner(\"42 こんにちは\")を代入\\n        Scanner sc = new Scanner(\"42 こんにちは\");\\n        // nextInt で整数を読み込む\\n        int num = sc.nextInt();\\n        // next で文字列を読み込む\\n        String word = sc.next();\\n        // println で出力する\\n        System.out.println(num + \" \" + word);\\n    }\\n}",
      "holeyCode": "import ___.___.___\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) {\\n        // scにnew Scanner(\"42 こんにちは\")を代入\\n        ___ ___ = new ___(___);\\n        // nextInt で整数を読み込む\\n        int ___ = ___.___();\\n        // next で文字列を読み込む\\n        ___ ___ = ___.___();\\n        // println で出力する\\n        ___.___.___(___ + ___ + ___);\\n    ___\\n___",
      "correctLines": [
          "import java.util.*;",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // scにnew Scanner(\"42 こんにちは\")を代入",
          "        Scanner sc = new Scanner(\"42 こんにちは\");",
          "        // nextInt で整数を読み込む",
          "        int num = sc.nextInt();",
          "        // next で文字列を読み込む",
          "        String word = sc.next();",
          "        // println で出力する",
          "        System.out.println(num + \" \" + word);",
          "    }",
          "}"
        ],
      "lineHints": [
          "java.util.*をインポートします。",
          null,
          "Mainクラスを定義します。",
          "mainメソッドを定義します。String配列argsを引数に取ります。",
          null,
          "Scanner scにnew Scanner(\"42 こんにちは\")を代入します。",
          null,
          "int numにsc.nextInt()の結果を代入します。",
          null,
          "String wordにsc.next()の結果を代入します。",
          null,
          "System.out.printlnでnum + \" \" + wordを出力します。",
          "閉じ括弧}でmainメソッドを終了します。",
          "閉じ括弧}でクラスを終了します。"
        ],
        "candidates": {
          "keywords": [
            "new",
            "int"
          ],
          "others": ["java", "util", "*;", "", "Main", "main", "String", "args", "Scanner", "sc", "\"42 こんにちは\"", "num", "nextInt", "word", "next", "System", "out", "println", "\" \"", "}", "\"", "+ word"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "42 こんにちは\\n"
          }
        ]
      },
    {
      "title": "Files.readAllLines",
      "description": "ファイルからデータを読み込む方法を学びます",
      "tutorialSlides": [
        {
          "title": "NIO2 API（エヌアイオーツー）",
          "content": "# モダンなファイル操作（そうさ）\\n\\nJava 7以降の **Files**（ファイルズ）クラスは、ファイル操作を簡単にする便利なメソッドを提供します。\\n\\n**たとえ話：** 従来のファイル操作は「手動でドアを開け閉め」するイメージでしたが、NIO2は「自動ドア」のように楽に操作できます。\\n\\n```java\\nPath path = Paths.get(\"file.txt\");  // ファイルのパス（場所）を指定\\nList<String> lines = Files.readAllLines(path);  // 全行を一気に読む！\\n```"
        },
        {
          "title": "便利なメソッド",
          "content": "# Files クラスのメソッド\\n\\nFilesクラスには便利なメソッドがたくさんあります。\\n\\n**読み込み**\\n```java\\nFiles.readAllLines(path)  // 全行をリストで取得\\nFiles.readString(path)    // 全内容を文字列で取得\\n```\\n\\n**書き込み**\\n```java\\nFiles.write(path, lines)  // リストの内容を書き込み\\n```\\n\\n**チェック**\\n```java\\nFiles.exists(path)        // ファイルがあるか確認\\n```\\n\\n**メリット：** 1行で読み書きできて、とても便利！"
        }
      ],
      "correctCode": "import java.nio.file.*;\\nimport java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) throws Exception {\\n        // pathにPaths.get(\".\")を代入\\n        Path path = Paths.get(\".\");\\n        // exists でファイルの存在を確認する\\n        boolean exists = Files.exists(path);\\n        // println で出力する\\n        System.out.println(exists);\\n    }\\n}",
      "holeyCode": "import ___.___.___.___.___\\nimport ___.___.___\\n___\\npublic class ___ {\\n    public static void ___(___[] ___) throws ___ {\\n        // pathにPaths.get(\".\")を代入\\n        ___ ___ = ___.___(___)___\\n        // exists でファイルの存在を確認する\\n        ___ ___ = ___.___(___);\\n        // println で出力する\\n        ___.___.___(___)___\\n    ___\\n___",
      "correctLines": [
          "import java.nio.file.*;",
          "import java.util.*;",
          "",
          "public class Main {",
          "    public static void main(String[] args) throws Exception {",
          "        // pathにPaths.get(\".\")を代入",
          "        Path path = Paths.get(\".\");",
          "        // exists でファイルの存在を確認する",
          "        boolean exists = Files.exists(path);",
          "        // println で出力する",
          "        System.out.println(exists);",
          "    }",
          "}"
        ],
      "lineHints": [
          "java.nio.file.*をインポートします。",
          "java.util.*をインポートします。",
          null,
          "Mainクラスを定義します。",
          "mainメソッドを定義します。throws Exceptionで例外をスローします。",
          null,
          "Path pathにPaths.get(\".\")を代入し、;で終わります。",
          null,
          "boolean existsにFiles.exists(path)を代入します。",
          null,
          "System.out.printlnでexistsを出力し、;で終わります。",
          "閉じ括弧}でmainメソッドを終了します。",
          "閉じ括弧}でクラスを終了します。"
        ],
        "candidates": {
          "keywords": [
            "throws"
          ],
          "others": ["java", "nio", "file", "*;", "util", "", "Main", "main", "String", "args", "Exception", "Path", "path", "Paths", "get", "\".\"", ";", "boolean", "exists", "Files", "System", "out", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "true\\n"
          }
        ]
      },
    {
      "title": "複数例外のキャッチ",
      "description": "エラーを適切に処理する方法を学びます",
      "tutorialSlides": [
        {
          "title": "マルチキャッチ",
          "content": "# 複数（ふくすう）の例外をまとめて\\n\\nJava 7以降、**|**（パイプ記号）を使って複数の例外をまとめてキャッチできます。\\n\\n**たとえ話：** 「りんごかみかんが落ちてきたら拾う」のように、複数の種類をまとめて対処できます。\\n\\n```java\\ntry {\\n    // 処理\\n} catch (IOException | SQLException e) {  // どちらかが起きたら\\n    // 両方の例外を同じように処理\\n}\\n```\\n\\n同じ処理をする例外は、まとめて書くとスッキリします！"
        },
        {
          "title": "個別（こべつ）にキャッチ",
          "content": "# 順番にキャッチ\\n\\n例外の種類ごとに違う処理をしたい場合は、catchを複数書きます。\\n\\n```java\\ntry {\\n    // 処理\\n} catch (FileNotFoundException e) {\\n    // ファイルがない場合の処理\\n} catch (IOException e) {\\n    // その他の入出力エラーの処理\\n}\\n```\\n\\n**大事なルール：** 具体的な例外を先に、一般的な例外を後に書きます。\\n\\n**なぜ？** 先に一般的なものを書くと、具体的なものまでキャッチされてしまい、区別できなくなるからです"
        }
      ],
      "correctCode": "public class Main {\\n    public static void main(String[] args) {\\n        try {\\n            // null を代入する\\n            String s = null;\\n            // length メソッドを呼び出す\\n            s.length();\\n        // | で複数の例外をまとめてキャッチする\\n        } catch (NullPointerException | ArrayIndexOutOfBoundsException e) {\\n            // println で出力する\\n            System.out.println(\"Caught\");\\n        }\\n    }\\n}",
      "holeyCode": "public class ___ {\\n    public static void ___(___[] ___) {\\n        ___ {\\n            // null を代入する\\n            ___ ___ = ___;\\n            // length メソッドを呼び出す\\n            ___.___()___\\n        // | で複数の例外をまとめてキャッチする\\n        } ___ (___ ___ ___ ___) {\\n            // println で出力する\\n            ___.___.___(___)___\\n        ___\\n    ___\\n___",
      "correctLines": [
          "public class Main {",
          "    public static void main(String[] args) {",
          "        try {",
          "            // null を代入する",
          "            String s = null;",
          "            // length メソッドを呼び出す",
          "            s.length();",
          "        // | で複数の例外をまとめてキャッチする",
          "        } catch (NullPointerException | ArrayIndexOutOfBoundsException e) {",
          "            // println で出力する",
          "            System.out.println(\"Caught\");",
          "        }",
          "    }",
          "}"
        ],
      "lineHints": [
          "Mainクラスを定義します。",
          "mainメソッドを定義します。String配列argsを引数に取ります。",
          "tryブロックで例外が発生する可能性のある処理を囲みます。",
          null,
          "String sにnullを代入します。",
          null,
          "s.length()を呼び出し、;で終わります。",
          null,
          "catchで NullPointerException | ArrayIndexOutOfBoundsException型の例外eをキャッチします。",
          null,
          "System.out.printlnで\"Caught\"を出力し、;で終わります。",
          "閉じ括弧}でcatchブロックを終了します。",
          "閉じ括弧}でmainメソッドを終了します。",
          "閉じ括弧}でクラスを終了します。"
        ],
        "candidates": {
          "keywords": [
            "try",
            "catch",
            "null"
          ],
          "others": ["Main", "main", "String", "args", "s", "length", ";", "NullPointerException", "|", "ArrayIndexOutOfBoundsException", "e", "System", "out", "println", "\"Caught\"", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Caught\\n"
          }
        ]
      }
  ]
}

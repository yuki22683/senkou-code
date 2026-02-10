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

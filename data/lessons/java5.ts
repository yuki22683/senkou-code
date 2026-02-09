export const javaData5 = {
  "language": "java",
  "lessonId": "java-5",
  "lessonTitle": "Java V - 例外処理とファイルI/O",
  "lessonDescription": "Javaの例外処理とファイル入出力を学びます。堅牢なプログラムを書くための必須スキルを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 5,
  "exercises": [
    {
      "title": "try-catch の基本",
      "correctCode": "public class Main {\\n    public static void main(String[] args) {\\n        // tryで例外をキャッチする準備\\n        try {\\n            // 0で割ると例外が発生する\\n            int result = 10 / 0;\\n        } catch (ArithmeticException e) {\\n            // println でエラーメッセージを出力する\\n            System.out.println(\"エラー\");\\n        }\\n    }\\n}",
      "holeyCode": "public class ___ {\\n    public static void ___\\(String[] args) {\\n        // tryで例外をキャッチする準備\\n        ___ {\\n            // 0で割ると例外が発生する\\n            int result = ___ / 0;\\n        } ___ (ArithmeticException e) {\\n            // println でエラーメッセージを出力する\\n            System.out.___(\"エラー\");\\n        ___\\n    ___\\n___",
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
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "エラーが発生する可能性のある処理をここから記述します。",
          null,
          "整数型の変数を宣言し、初期値を代入します。",
          "例外が発生した場合の処理を定義する。",
          null,
          "文字列をコンソールに出力し、改行します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "try",
            "catch",
            "throw",
            "0",
            "println"
          ],
          "others": ["Main", "main(String[] args) {", "10", "}", "}\\"]
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
      "holeyCode": "public class ___ {\\n    public static void ___\\(String[] args) {\\n        ___ {\\n            // println で出力する\\n            System.out.___(\"Try\");\\n        } ___ (Exception e) {\\n            System.out.___(\"Catch\");\\n        // finally で必ず実行する\\n        } ___ {\\n            // println で出力する\\n            System.out.___(\"Finally\");\\n        ___\\n    ___\\n___",
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
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          "例外が発生する可能性のある処理を開始する。",
          null,
          "文字列をコンソールに出力し、改行します。",
          "例外が発生した場合の処理を定義する。",
          "ここを正しく入力してください。",
          null,
          "エラーの有無に関わらず、最後に必ず実行する処理を記述します。",
          null,
          "文字列をコンソールに出力し、改行します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "finally",
            "catch",
            "end",
            "println"
          ],
          "others": ["Main", "main(String[] args) {", "try", "}", "}\\"]
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
      "holeyCode": "import java.io.___\\n___\\npublic class ___ {\\n    // riskyMethod()をthrows Exceptionで宣言\\n    public static void riskyMethod() throws ___ {\\n        // throw new Exception(\"Error!\")で例外をスロー\\n        throw new Exception(\"___\");\\n    ___\\n    public static void ___\\(String[] args) {\\n        ___ {\\n            // riskyMethod を呼び出す\\n            ___();\\n        } ___ (Exception e) {\\n            // println で出力する\\n            System.out.___(\"Caught\");\\n        ___\\n    ___\\n___",
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
          "外部からアクセス可能なクラス（Main）を定義します。",
          null,
          "`throws` で例外をスローすることを宣言します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          "例外が発生する可能性のある処理を開始する。",
          null,
          "関数（riskyMethod）を呼び出して実行します。",
          "例外が発生した場合の処理を定義する。",
          null,
          "文字列をコンソールに出力し、改行します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "throws",
            "throw",
            "catch",
            "riskyMethod",
            "println"
          ],
          "others": ["*;", "Main", "Exception", "Error!", "}", "main(String[] args) {", "try", "エラー！", "*;", "", "}\\"]
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
      "holeyCode": "// extends で Exception を継承する\\nclass ___ extends Exception {\\n    public ___(String msg) {\\n        // super で親クラスのコンストラクタを呼び出す\\n        super(___);\\n    ___\\n___\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        ___ {\\n            // throw new InvalidAgeException(\"Invalid\")で例外をスロー\\n            throw new InvalidAgeException(\"___\");\\n        } ___ (InvalidAgeException e) {\\n            // getMessage でメッセージを取得する\\n            System.out.___(e.getMessage());\\n        ___\\n    ___\\n___",
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
          "新しいクラス（InvalidAgeException）を定義します。",
          "`super` で親クラスのコンストラクタを呼び出します。",
          null,
          "`throw` で例外をスローします。",
          "`getMessage` でメッセージを取得します。",
          "ここを正しく入力してください。",
          null,
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          "例外が発生する可能性のある処理を開始する。",
          null,
          "ここを正しく入力してください。",
          "例外が発生した場合の処理を定義する。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "extends",
            "implements",
            "throws",
            "super",
            "throw",
            "getMessage"
          ],
          "others": ["InvalidAgeException", "msg", "}", "Main", "main(String[] args) {", "try", "Invalid", "catch", "println", "}"]
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
      "holeyCode": "import java.io.___\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // ( でリソースを宣言する try-with-resources\\n        ___ (StringReader reader = new StringReader(\"___\")) {\\n            // read で1文字読み込む\\n            System.out.___((char) reader.read());\\n        } ___ (IOException e) {\\n            // printStackTrace でスタックトレースを出力する\\n            e.___();\\n        ___\\n    ___\\n___",
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
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "`(` でリソースを宣言します。",
          null,
          "ここを正しく入力してください。",
          "例外が発生した場合の処理を定義する。",
          null,
          "`printStackTrace` でスタックトレースを出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "symbols": [
            "(",
            "{",
            "[",
            "read",
            "printStackTrace"
          ],
          "others": ["(StringReader reader = new StringReader(\"こんにちは\")) {", "*;", "Main", "main(String[] args) {", "こんにちは", "println", "catch", "}", "try", "*;", "", "}\\"]
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
      "holeyCode": "import java.io.___\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) throws IOException {\\n        ___\\n___\\n        // brにnew BufferedReader(new StringReader(content))を代入\\n        BufferedReader br = new BufferedReader(new StringReader(___));\\n        // readLine で1行ずつ読み込む\\n        String line = br.___();\\n        // println で出力する\\n        System.out.___(line);\\n        // close でリソースを閉じる\\n        br.___();\\n    ___\\n___",
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
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          "`new` で BufferedReader を作成します。",
          null,
          "ここを正しく入力してください。",
          null,
          "変数の値をコンソールに出力し、改行します。",
          null,
          "`close` でリソースを閉じます。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "readLine",
            "read",
            "readline",
            "new",
            "println",
            "close"
          ],
          "others": ["*;", "Main", "main(String[] args) throws IOException {", "content", "}", "String content = \"Line1", "Line2\";", "*;", "", "String content = \"Line1", "Line2\";", "}\\"]
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
      "holeyCode": "import java.io.___\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) throws IOException {\\n        // swにnew StringWriter()を代入\\n        ___ sw = new StringWriter();\\n        // bwにnew BufferedWriter(sw)を代入\\n        BufferedWriter bw = new BufferedWriter(___);\\n        // write で文字列を書き込む\\n        ___.write(\"___\");\\n        // flush でバッファをフラッシュする\\n        bw.___();\\n        // toString で文字列に変換する\\n        System.out.___(sw.toString());\\n    ___\\n___",
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
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "`new` で StringWriter を作成します。",
          null,
          "ここを正しく入力してください。",
          null,
          "`write` で文字列を書き込みます。",
          null,
          "`flush` でバッファをフラッシュします。",
          null,
          "`toString` で文字列に変換します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "write",
            "print",
            "append",
            "new",
            "flush",
            "toString"
          ],
          "others": ["*;", "Main", "main(String[] args) throws IOException {", "StringWriter", "sw", "こんにちは", "println", "}", "bw", "*;", "", "}\\"]
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
      "holeyCode": "import java.util.___\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // scにnew Scanner(\"42 こんにちは\")を代入\\n        Scanner sc = new Scanner(\"___\");\\n        // nextInt で整数を読み込む\\n        int num = sc.___();\\n        // next で文字列を読み込む\\n        String word = sc.___();\\n        // println で出力する\\n        System.out.___(num + \" \" + word);\\n    ___\\n___",
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
          "Javaユーティリティライブラリをインポートします。",
          null,
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "`new` で Scanner を作成します。",
          null,
          "ここを正しく入力してください。",
          null,
          "`next` で文字列を読み込みます。",
          null,
          "`println` で出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "nextInt",
            "readInt",
            "getInt",
            "new",
            "next",
            "println"
          ],
          "others": ["*;", "Main", "main(String[] args) {", "42 こんにちは", "}", "*;", "", "}\\"]
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
      "holeyCode": "import java.nio.file.___\\nimport java.util.___\\n___\\npublic class ___ {\\n    public static void ___\\(String[] args) throws Exception {\\n        // pathにPaths.get(\".\")を代入\\n        Path path = Paths.get(\"___\");\\n        // exists でファイルの存在を確認する\\n        boolean exists = Files.exists(___);\\n        // println で出力する\\n        System.out.___(exists);\\n    ___\\n___",
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
          "Javaユーティリティライブラリをインポートします。",
          null,
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          null,
          "`get` でパスを作成します。",
          null,
          "`exists` でファイルの存在を確認します。",
          null,
          "変数の値をコンソールに出力し、改行します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "get",
            "of",
            "create",
            "exists",
            "println"
          ],
          "others": ["*;", "Main", "main(String[] args) throws Exception {", ".", "path", "}", "*;", "", "}\\"]
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
      "holeyCode": "public class ___ {\\n    public static void ___\\(String[] args) {\\n        ___ {\\n            // null を代入する\\n            String s = ___;\\n            // length メソッドを呼び出す\\n            s.___();\\n        // | で複数の例外をまとめてキャッチする\\n        } catch (NullPointerException | ArrayIndexOutOfBoundsException ___) {\\n            // println で出力する\\n            System.out.___(\"Caught\");\\n        ___\\n    ___\\n___",
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
          "外部からアクセス可能なクラス（Main）を定義します。",
          "Javaプログラムの実行開始地点（メインメソッド）を定義します。",
          "例外が発生する可能性のある処理を開始する。",
          null,
          "`null` を代入します。",
          null,
          "`length` メソッドを呼び出します。",
          null,
          "エラー（例外）が発生した場合の処理を記述します。",
          null,
          "文字列をコンソールに出力し、改行します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "symbols": [
            "|",
            "&",
            ",",
            "null",
            "length",
            "println"
          ],
          "others": ["Main", "main(String[] args) {", "try", "e", "}", "}\\"]
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

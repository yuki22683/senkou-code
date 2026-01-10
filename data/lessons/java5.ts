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
      "description": "例外をキャッチして処理する方法を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "例外とは？",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# プログラムの異常事態\n\n**例外** は、プログラム実行中に発生するエラーです。\n\n```java\nint[] arr = {1, 2, 3};\narr[10]; // ArrayIndexOutOfBoundsException\n```"
        },
        {
          "title": "try-catch",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# 例外をキャッチ\n\n```java\ntry {\n    // 例外が起きるかもしれない処理\n    int x = 10 / 0;\n} catch (ArithmeticException e) {\n    // 例外発生時の処理\n    System.out.println(\"エラー!\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int result = 10 / 0;\n        } catch (ArithmeticException e) {\n            System.out.println(\"Error\");\n        }\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        // try で例外が起きる可能性のある処理を囲む\n        ___ {\n            // 0で割ると例外が発生する\n            int result = 10 / ___;\n        } catch (ArithmeticException e) {\n            // println でエラーメッセージを出力する\n            System.out.___(\"Error\");\n        }\n    }\n}",
      "correctLines": [
        "public class Main {",
        "    public static void main(String[] args) {",
        "        try {",
        "            int result = 10 / 0;",
        "        } catch (ArithmeticException e) {",
        "            System.out.println(\"Error\");",
        "        }",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "`try` で例外が起きる可能性のある処理を囲みます。",
        null,
        "`0` で割ると例外が発生します。",
        null,
        null,
        "`println` でエラーメッセージを出力します。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["try", "catch", "throw", "0", "println"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Error\n"
        }
      ]
    },
    {
      "title": "finally ブロック",
      "description": "必ず実行されるfinallyを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "finally とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 必ず実行される処理\n\n**finally** ブロックは、例外の有無にかかわらず必ず実行されます。\n\n```java\ntry {\n    // 処理\n} catch (Exception e) {\n    // 例外処理\n} finally {\n    // 必ず実行される\n}\n```"
        },
        {
          "title": "リソースの解放",
          "image": "/illustrations/3d/robot.png",
          "content": "# クリーンアップ処理に使う\n\n```java\nFileReader reader = null;\ntry {\n    reader = new FileReader(\"file.txt\");\n    // 読み込み処理\n} finally {\n    if (reader != null) reader.close();\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        try {\n            System.out.println(\"Try\");\n        } catch (Exception e) {\n            System.out.println(\"Catch\");\n        } finally {\n            System.out.println(\"Finally\");\n        }\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        try {\n            // println で出力する\n            System.out.___(\"Try\");\n        } catch (Exception e) {\n            System.out.println(\"Catch\");\n        // finally で必ず実行する\n        } ___ {\n            // println で出力する\n            System.out.___(\"Finally\");\n        }\n    }\n}",
      "correctLines": [
        "public class Main {",
        "    public static void main(String[] args) {",
        "        try {",
        "            System.out.println(\"Try\");",
        "        } catch (Exception e) {",
        "            System.out.println(\"Catch\");",
        "        } finally {",
        "            System.out.println(\"Finally\");",
        "        }",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "`println` で出力します。",
        null,
        null,
        null,
        "`finally` は必ず実行されます。",
        null,
        "`println` で出力します。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["finally", "catch", "end", "println"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Try\nFinally\n"
        }
      ]
    },
    {
      "title": "throws 宣言",
      "description": "メソッドが例外をスローすることを宣言しましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "throws とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 例外を呼び出し元に伝える\n\n**throws** は、メソッドが例外を投げる可能性があることを宣言します。\n\n```java\npublic void readFile() throws IOException {\n    // ファイル読み込み処理\n    // IOExceptionが起きる可能性\n}\n```"
        },
        {
          "title": "呼び出し側の責任",
          "image": "/illustrations/3d/robot.png",
          "content": "# キャッチか再スロー\n\n```java\n// キャッチする\ntry {\n    readFile();\n} catch (IOException e) {\n    // 処理\n}\n\n// または再スローする\npublic void caller() throws IOException {\n    readFile();\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.io.*;\n\npublic class Main {\n    public static void riskyMethod() throws Exception {\n        throw new Exception(\"Error!\");\n    }\n    public static void main(String[] args) {\n        try {\n            riskyMethod();\n        } catch (Exception e) {\n            System.out.println(\"Caught\");\n        }\n    }\n}",
      "holeyCode": "import java.io.*;\n\npublic class Main {\n    // throws で例外をスローすることを宣言する\n    public static void riskyMethod() ___ Exception {\n        // throw で例外をスローする\n        ___ new Exception(\"Error!\");\n    }\n    public static void main(String[] args) {\n        try {\n            // riskyMethod を呼び出す\n            ___();\n        } catch (Exception e) {\n            // println で出力する\n            System.out.___(\"Caught\");\n        }\n    }\n}",
      "correctLines": [
        "import java.io.*;",
        "",
        "public class Main {",
        "    public static void riskyMethod() throws Exception {",
        "        throw new Exception(\"Error!\");",
        "    }",
        "    public static void main(String[] args) {",
        "        try {",
        "            riskyMethod();",
        "        } catch (Exception e) {",
        "            System.out.println(\"Caught\");",
        "        }",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "`throws` で例外をスローすることを宣言します。",
        null,
        "`throw` で例外をスローします。",
        null,
        null,
        null,
        null,
        "`riskyMethod` を呼び出します。",
        null,
        null,
        "`println` で出力します。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["throws", "throw", "catch", "riskyMethod", "println"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Caught\n"
        }
      ]
    },
    {
      "title": "カスタム例外",
      "description": "独自の例外クラスを作成しましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "カスタム例外",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# 独自の例外を定義\n\n**Exception** を継承して独自の例外を作れます。\n\n```java\nclass MyException extends Exception {\n    public MyException(String msg) {\n        super(msg);\n    }\n}\n```"
        },
        {
          "title": "使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# throw で投げる\n\n```java\nif (age < 0) {\n    throw new MyException(\"年齢は正の数です\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class InvalidAgeException extends Exception {\n    public InvalidAgeException(String msg) {\n        super(msg);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            throw new InvalidAgeException(\"Invalid\");\n        } catch (InvalidAgeException e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}",
      "holeyCode": "// extends で Exception を継承する\nclass InvalidAgeException ___ Exception {\n    public InvalidAgeException(String msg) {\n        // super で親クラスのコンストラクタを呼び出す\n        ___(msg);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            // throw で例外をスローする\n            ___ new InvalidAgeException(\"Invalid\");\n        } catch (InvalidAgeException e) {\n            // getMessage でメッセージを取得する\n            System.out.println(e.___());\n        }\n    }\n}",
      "correctLines": [
        "class InvalidAgeException extends Exception {",
        "    public InvalidAgeException(String msg) {",
        "        super(msg);",
        "    }",
        "}",
        "",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        try {",
        "            throw new InvalidAgeException(\"Invalid\");",
        "        } catch (InvalidAgeException e) {",
        "            System.out.println(e.getMessage());",
        "        }",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        "`extends` で Exception を継承します。",
        null,
        null,
        "`super` で親クラスのコンストラクタを呼び出します。",
        null,
        null,
        null,
        null,
        null,
        null,
        "`throw` で例外をスローします。",
        null,
        null,
        "`getMessage` でメッセージを取得します。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["extends", "implements", "throws", "super", "throw", "getMessage"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Invalid\n"
        }
      ]
    },
    {
      "title": "try-with-resources",
      "description": "リソースを自動でクローズする構文を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "自動リソース管理",
          "image": "/illustrations/3d/robot.png",
          "content": "# try-with-resources\n\nJava 7以降、リソースを自動でクローズできます。\n\n```java\ntry (FileReader reader = new FileReader(\"file.txt\")) {\n    // reader を使う処理\n} // 自動で close() が呼ばれる\n```"
        },
        {
          "title": "メリット",
          "image": "/illustrations/3d/robot.png",
          "content": "# finallyが不要\n\n```java\n// 従来の書き方\nFileReader r = null;\ntry {\n    r = new FileReader(\"file.txt\");\n} finally {\n    if (r != null) r.close();\n}\n\n// try-with-resources\ntry (FileReader r = new FileReader(\"file.txt\")) {\n    // シンプル！\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.io.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        try (StringReader reader = new StringReader(\"Hello\")) {\n            System.out.println((char) reader.read());\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}",
      "holeyCode": "import java.io.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // ( でリソースを宣言する try-with-resources\n        try ___ StringReader reader = new StringReader(\"Hello\")) {\n            // read で1文字読み込む\n            System.out.println((char) reader.___());\n        } catch (IOException e) {\n            // printStackTrace でスタックトレースを出力する\n            e.___();\n        }\n    }\n}",
      "correctLines": [
        "import java.io.*;",
        "",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        try (StringReader reader = new StringReader(\"Hello\")) {",
        "            System.out.println((char) reader.read());",
        "        } catch (IOException e) {",
        "            e.printStackTrace();",
        "        }",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "`(` でリソースを宣言します。",
        null,
        "`read` で1文字読み込みます。",
        null,
        null,
        "`printStackTrace` でスタックトレースを出力します。",
        null,
        null
      ],
      "candidates": {
        "symbols": ["(", "{", "[", "read", "printStackTrace"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "H\n"
        }
      ]
    },
    {
      "title": "BufferedReader でファイル読み込み",
      "description": "ファイルを効率的に読み込む方法を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "BufferedReader",
          "image": "/illustrations/3d/robot.png",
          "content": "# バッファ付き読み込み\n\n**BufferedReader** は効率的にテキストを読み込みます。\n\n```java\nBufferedReader br = new BufferedReader(\n    new FileReader(\"file.txt\")\n);\nString line = br.readLine();\n```"
        },
        {
          "title": "全行読み込み",
          "image": "/illustrations/3d/robot.png",
          "content": "# ループで読み込み\n\n```java\nString line;\nwhile ((line = br.readLine()) != null) {\n    System.out.println(line);\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.io.*;\n\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        String content = \"Line1\\nLine2\";\n        BufferedReader br = new BufferedReader(new StringReader(content));\n        String line = br.readLine();\n        System.out.println(line);\n        br.close();\n    }\n}",
      "holeyCode": "import java.io.*;\n\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        String content = \"Line1\\nLine2\";\n        // new で BufferedReader を作成する\n        BufferedReader br = ___ BufferedReader(new StringReader(content));\n        // readLine で1行ずつ読み込む\n        String line = br.___();\n        // println で出力する\n        System.out.___(line);\n        // close でリソースを閉じる\n        br.___();\n    }\n}",
      "correctLines": [
        "import java.io.*;",
        "",
        "public class Main {",
        "    public static void main(String[] args) throws IOException {",
        "        String content = \"Line1\\nLine2\";",
        "        BufferedReader br = new BufferedReader(new StringReader(content));",
        "        String line = br.readLine();",
        "        System.out.println(line);",
        "        br.close();",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        "`new` で BufferedReader を作成します。",
        null,
        "`readLine` で1行ずつ読み込みます。",
        null,
        "`println` で出力します。",
        null,
        "`close` でリソースを閉じます。",
        null,
        null
      ],
      "candidates": {
        "methods": ["readLine", "read", "readline", "new", "println", "close"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Line1\n"
        }
      ]
    },
    {
      "title": "BufferedWriter でファイル書き込み",
      "description": "ファイルに効率的に書き込む方法を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "BufferedWriter",
          "image": "/illustrations/3d/robot.png",
          "content": "# バッファ付き書き込み\n\n**BufferedWriter** は効率的にテキストを書き込みます。\n\n```java\nBufferedWriter bw = new BufferedWriter(\n    new FileWriter(\"file.txt\")\n);\nbw.write(\"Hello\");\nbw.newLine();\nbw.close();\n```"
        },
        {
          "title": "newLine()",
          "image": "/illustrations/3d/robot.png",
          "content": "# 改行を追加\n\n```java\nbw.write(\"Line1\");\nbw.newLine();  // 改行\nbw.write(\"Line2\");\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.io.*;\n\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        StringWriter sw = new StringWriter();\n        BufferedWriter bw = new BufferedWriter(sw);\n        bw.write(\"Hello\");\n        bw.flush();\n        System.out.println(sw.toString());\n    }\n}",
      "holeyCode": "import java.io.*;\n\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        // new で StringWriter を作成する\n        StringWriter sw = ___ StringWriter();\n        // new で BufferedWriter を作成する\n        BufferedWriter bw = ___ BufferedWriter(sw);\n        // write で文字列を書き込む\n        bw.___(\"Hello\");\n        // flush でバッファをフラッシュする\n        bw.___();\n        // toString で文字列に変換する\n        System.out.println(sw.___());\n    }\n}",
      "correctLines": [
        "import java.io.*;",
        "",
        "public class Main {",
        "    public static void main(String[] args) throws IOException {",
        "        StringWriter sw = new StringWriter();",
        "        BufferedWriter bw = new BufferedWriter(sw);",
        "        bw.write(\"Hello\");",
        "        bw.flush();",
        "        System.out.println(sw.toString());",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "`new` で StringWriter を作成します。",
        null,
        "`new` で BufferedWriter を作成します。",
        null,
        "`write` で文字列を書き込みます。",
        null,
        "`flush` でバッファをフラッシュします。",
        null,
        "`toString` で文字列に変換します。",
        null,
        null
      ],
      "candidates": {
        "methods": ["write", "print", "append", "new", "flush", "toString"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello\n"
        }
      ]
    },
    {
      "title": "Scanner での入力",
      "description": "テキストをパースするScannerを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "Scanner とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# テキストのパース\n\n**Scanner** は、テキストをトークンに分割して読み込みます。\n\n```java\nScanner sc = new Scanner(\"10 20 30\");\nint a = sc.nextInt(); // 10\nint b = sc.nextInt(); // 20\n```"
        },
        {
          "title": "様々な読み込み",
          "image": "/illustrations/3d/robot.png",
          "content": "# メソッド\n\n```java\nnextInt()    // 整数\nnextDouble() // 小数\nnext()       // 単語（空白区切り）\nnextLine()   // 1行\nhasNext()    // 次があるか\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(\"42 Hello\");\n        int num = sc.nextInt();\n        String word = sc.next();\n        System.out.println(num + \" \" + word);\n    }\n}",
      "holeyCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // new で Scanner を作成する\n        Scanner sc = ___ Scanner(\"42 Hello\");\n        // nextInt で整数を読み込む\n        int num = sc.___();\n        // next で文字列を読み込む\n        String word = sc.___();\n        // println で出力する\n        System.out.___(num + \" \" + word);\n    }\n}",
      "correctLines": [
        "import java.util.*;",
        "",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        Scanner sc = new Scanner(\"42 Hello\");",
        "        int num = sc.nextInt();",
        "        String word = sc.next();",
        "        System.out.println(num + \" \" + word);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "`new` で Scanner を作成します。",
        null,
        "`nextInt` で整数を読み込みます。",
        null,
        "`next` で文字列を読み込みます。",
        null,
        "`println` で出力します。",
        null,
        null
      ],
      "candidates": {
        "methods": ["nextInt", "readInt", "getInt", "new", "next", "println"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "42 Hello\n"
        }
      ]
    },
    {
      "title": "Files.readAllLines",
      "description": "NIO2を使ったファイル読み込みを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "NIO2 API",
          "image": "/illustrations/3d/robot.png",
          "content": "# モダンなファイル操作\n\nJava 7以降の **Files** クラスは便利なメソッドを提供します。\n\n```java\nPath path = Paths.get(\"file.txt\");\nList<String> lines = Files.readAllLines(path);\n```"
        },
        {
          "title": "便利なメソッド",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# Files クラスのメソッド\n\n```java\nFiles.readAllLines(path)  // 全行読み込み\nFiles.readString(path)    // 文字列として\nFiles.write(path, lines)  // 書き込み\nFiles.exists(path)        // 存在確認\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import java.nio.file.*;\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        Path path = Paths.get(\".\");\n        boolean exists = Files.exists(path);\n        System.out.println(exists);\n    }\n}",
      "holeyCode": "import java.nio.file.*;\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // get でパスを作成する\n        Path path = Paths.___(\".\");\n        // exists でファイルの存在を確認する\n        boolean exists = Files.___(path);\n        // println で出力する\n        System.out.___(exists);\n    }\n}",
      "correctLines": [
        "import java.nio.file.*;",
        "import java.util.*;",
        "",
        "public class Main {",
        "    public static void main(String[] args) throws Exception {",
        "        Path path = Paths.get(\".\");",
        "        boolean exists = Files.exists(path);",
        "        System.out.println(exists);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        "`get` でパスを作成します。",
        null,
        "`exists` でファイルの存在を確認します。",
        null,
        "`println` で出力します。",
        null,
        null
      ],
      "candidates": {
        "methods": ["get", "of", "create", "exists", "println"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "true\n"
        }
      ]
    },
    {
      "title": "複数例外のキャッチ",
      "description": "複数の例外を1つのcatchで処理しましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "マルチキャッチ",
          "image": "/illustrations/3d/robot.png",
          "content": "# 複数の例外をまとめて\n\nJava 7以降、**|** で複数の例外をまとめてキャッチできます。\n\n```java\ntry {\n    // 処理\n} catch (IOException | SQLException e) {\n    // 両方の例外を処理\n}\n```"
        },
        {
          "title": "個別にキャッチ",
          "image": "/illustrations/3d/robot.png",
          "content": "# 順番にキャッチ\n\n```java\ntry {\n    // 処理\n} catch (FileNotFoundException e) {\n    // より具体的な例外を先に\n} catch (IOException e) {\n    // 一般的な例外を後に\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "public class Main {\n    public static void main(String[] args) {\n        try {\n            String s = null;\n            s.length();\n        } catch (NullPointerException | ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"Caught\");\n        }\n    }\n}",
      "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        try {\n            // null を代入する\n            String s = ___;\n            // length メソッドを呼び出す\n            s.___();\n        // | で複数の例外をまとめてキャッチする\n        } catch (NullPointerException ___ ArrayIndexOutOfBoundsException e) {\n            // println で出力する\n            System.out.___(\"Caught\");\n        }\n    }\n}",
      "correctLines": [
        "public class Main {",
        "    public static void main(String[] args) {",
        "        try {",
        "            String s = null;",
        "            s.length();",
        "        } catch (NullPointerException | ArrayIndexOutOfBoundsException e) {",
        "            System.out.println(\"Caught\");",
        "        }",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "| で複数の例外をまとめてキャッチします。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "symbols": ["|", "&", ","]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Caught\n"
        }
      ]
    }
  ]
}

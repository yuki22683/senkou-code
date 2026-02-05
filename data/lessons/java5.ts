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
            "title": "例外（れいがい）とは？",
            "content": "# プログラムの異常事態（いじょうじたい）\\n\\n**例外** は、プログラム実行中に発生する「予期しない問題」です。\\n\\n**たとえ話：** 料理中に「お皿が割れた！」というようなアクシデントです。レシピ通りには進められなくなりますよね。\\n\\n```java\\nint[] arr = {1, 2, 3};  // 3つのデータ\\narr[10];  // 10番目？そんなのない！\\n// → ArrayIndexOutOfBoundsException（配列の範囲外エラー）\\n```\\n\\n例外が起きると、そのままではプログラムが止まってしまいます。"
          },
          {
            "title": "try-catch（トライ・キャッチ）",
            "content": "# 例外をキャッチ\\n\\n**try-catch** を使うと、例外をキャッチ（捕まえて）対処できます。\\n\\n**たとえ話：** サーカスの安全ネットのように、落ちても（エラーが起きても）受け止めてくれます。\\n\\n```java\\ntry {  // 「試す」ブロック\\n    int x = 10 / 0;  // 0で割る→例外！\\n} catch (ArithmeticException e) {  // 「捕まえる」ブロック\\n    System.out.println(\"エラー!\");  // 対処する\\n}\\n```\\n\\n**ポイント：** tryの中で例外が起きたら、catchの中が実行されます"
          }
        ],
        "initialDisplayMode": "holey",
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
          "            System.out.println(\"Error\");",
          "        }",
          "    }",
          "}"
        ],
        "lineHints": [
          "エラーが発生する可能性のある処理をここから記述します。",
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "文字列をコンソールに出力し、改行します。",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "try",
            "catch",
            "throw",
            "0",
            "println"
          ],
          "others": ["Main", "main(String[] args) {", "10", "}"]
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
        "description": "必ず実行されるfinallyを学びましょう。",
        "difficulty": "hard",
        "orderIndex": 2,
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
        "initialDisplayMode": "holey",
        "correctCode": "public class Main {\\n    public static void main(String[] args) {\\n        try {\\n            // println で出力する\\n            System.out.println(\"Try\");\\n        } catch (Exception e) {\\n            System.out.println(\"猫ch\");\\n        // finally で必ず実行する\\n        } finally {\\n            // println で出力する\\n            System.out.println(\"Finally\");\\n        }\\n    }\\n}",
        "holeyCode": "public class ___ {\\n    public static void ___\\(String[] args) {\\n        ___ {\\n            // println で出力する\\n            System.out.___(\"Try\");\\n        } ___ (Exception e) {\\n            System.out.___(\"猫ch\");\\n        // finally で必ず実行する\\n        } ___ {\\n            // println で出力する\\n            System.out.___(\"Finally\");\\n        ___\\n    ___\\n___",
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
          "文字列をコンソールに出力し、改行します。",
          "エラーの有無に関わらず、最後に必ず実行する処理を記述します。",
          "文字列をコンソールに出力し、改行します。",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "finally",
            "catch",
            "end",
            "println"
          ],
          "others": ["Main", "main(String[] args) {", "try", "}"]
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
        "description": "メソッドが例外をスローすることを宣言しましょう。",
        "difficulty": "hard",
        "orderIndex": 3,
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
        "initialDisplayMode": "holey",
        "correctCode": "import java.io.*;\\n\\npublic class Main {\\n    // riskyMethod()をthrows Exceptionで宣言\\n    public static void riskyMethod() throws Exception {\\n        // throw new Exception(\"Error!\")で例外をスロー\\n        throw new Exception(\"エラー！\");\\n    }\\n    public static void main(String[] args) {\\n        try {\\n            // riskyMethod を呼び出す\\n            riskyMethod();\\n        } catch (Exception e) {\\n            // println で出力する\\n            System.out.println(\"Caught\");\\n        }\\n    }\\n}",
        "holeyCode": "import java.io.___\\n\\npublic class ___ {\\n    // riskyMethod()をthrows Exceptionで宣言\\n    public static void riskyMethod() throws ___ {\\n        // throw new Exception(\"Error!\")で例外をスロー\\n        throw new Exception(\"___\");\\n    ___\\n    public static void ___\\(String[] args) {\\n        ___ {\\n            // riskyMethod を呼び出す\\n            ___();\\n        } ___ (Exception e) {\\n            // println で出力する\\n            System.out.___(\"Caught\");\\n        ___\\n    ___\\n___",
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
          "`throws` で例外をスローすることを宣言します。",
          null,
          "関数（riskyMethod）を呼び出して実行します。",
          null,
          "文字列をコンソールに出力し、改行します。",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "throws",
            "throw",
            "catch",
            "riskyMethod",
            "println"
          ],
          "others": ["*;", "Main", "Exception", "Error!", "}", "main(String[] args) {", "try", "エラー！"]
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
        "description": "独自の例外クラスを作成しましょう。",
        "difficulty": "hard",
        "orderIndex": 4,
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
        "initialDisplayMode": "holey",
        "correctCode": "// extends で Exception を継承する\\nclass InvalidAgeException extends Exception {\\n    public InvalidAgeException(String msg) {\\n        // super で親クラスのコンストラクタを呼び出す\\n        super(msg);\\n    }\\n}\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        try {\\n            // throw new InvalidAgeException(\"Invalid\")で例外をスロー\\n            throw new InvalidAgeException(\"Invalid\");\\n        } catch (InvalidAgeException e) {\\n            // getMessage でメッセージを取得する\\n            System.out.println(e.getMessage());\\n        }\\n    }\\n}",
        "holeyCode": "// extends で Exception を継承する\\nclass ___ extends Exception {\\n    public ___(String msg) {\\n        // super で親クラスのコンストラクタを呼び出す\\n        super(___);\\n    ___\\n___\\n\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        ___ {\\n            // throw new InvalidAgeException(\"Invalid\")で例外をスロー\\n            throw new InvalidAgeException(\"___\");\\n        } ___ (InvalidAgeException e) {\\n            // getMessage でメッセージを取得する\\n            System.out.___(e.getMessage());\\n        ___\\n    ___\\n___",
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
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
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
          "others": ["InvalidAgeException", "msg", "}", "Main", "main(String[] args) {", "try", "Invalid", "catch", "println"]
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
        "description": "リソースを自動でクローズする構文を学びましょう。",
        "difficulty": "hard",
        "orderIndex": 5,
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
        "initialDisplayMode": "holey",
        "correctCode": "import java.io.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // ( でリソースを宣言する try-with-resources\\n        try (StringReader reader = new StringReader(\"こんにちは\")) {\\n            // read で1文字読み込む\\n            System.out.println((char) reader.read());\\n        } catch (IOException e) {\\n            // printStackTrace でスタックトレースを出力する\\n            e.printStackTrace();\\n        }\\n    }\\n}",
        "holeyCode": "import java.io.___\\n\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // ( でリソースを宣言する try-with-resources\\n        try (StringReader reader = new StringReader(\"___\")) {\\n            // read で1文字読み込む\\n            System.out.___((char) reader.read());\\n        } ___ (IOException e) {\\n            // printStackTrace でスタックトレースを出力する\\n            e.___();\\n        ___\\n    ___\\n___",
        "correctLines": [
          "import java.io.*;",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // ( でリソースを宣言する try-with-resources",
          "        try (StringReader reader = new StringReader(\"Hello\")) {",
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
          "`(` でリソースを宣言します。",
          null,
          "`printStackTrace` でスタックトレースを出力します。",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "symbols": [
            "(",
            "{",
            "[",
            "read",
            "printStackTrace"
          ],
          "others": ["(StringReader reader = new StringReader(\"Hello\")) {", "*;", "Main", "main(String[] args) {", "Hello", "println", "catch", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "H\\n"
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
            "title": "BufferedReader（バッファードリーダー）",
            "content": "# バッファ付き読み込み\\n\\n**BufferedReader** は効率的（こうりつてき）にテキストを読み込むためのクラスです。\\n\\n**たとえ話：** 本を読むとき、1文字ずつ読むより、1行ずつ読む方が速いですよね。BufferedReaderは「1行ずつ」まとめて読めます。\\n\\n```java\\nBufferedReader br = new BufferedReader(\\n    new FileReader(\"file.txt\")  // ファイルを読む準備\\n);\\nString line = br.readLine();  // 1行読み込む\\n```"
          },
          {
            "title": "全行（ぜんぎょう）読み込み",
            "content": "# ループで読み込み\\n\\nファイルの全部の行を読みたいときは、whileループを使います。\\n\\n```java\\nString line;\\nwhile ((line = br.readLine()) != null) {  // 読めなくなるまで\\n    System.out.println(line);  // 1行ずつ表示\\n}\\n```\\n\\n**何が起きている？**\\n1. `readLine()` で1行読む\\n2. 読めたら表示して、次の行へ\\n3. 読めなくなったら（null）ループ終了\\n\\n**ポイント：** readLine() は行がなくなると null を返します"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "import java.io.*;\\n\\npublic class Main {\\n    public static void main(String[] args) throws IOException {\\n        String content = \"Line1\\nLine2\";\\n        // brにnew BufferedReader(new StringReader(content))を代入\\n        BufferedReader br = new BufferedReader(new StringReader(content));\\n        // readLine で1行ずつ読み込む\\n        String line = br.readLine();\\n        // println で出力する\\n        System.out.println(line);\\n        // close でリソースを閉じる\\n        br.close();\\n    }\\n}",
        "holeyCode": "import java.io.___\\n\\npublic class ___ {\\n    public static void ___\\(String[] args) throws IOException {\\n        String content = \"Line1\\nLine2\";\\n        // brにnew BufferedReader(new StringReader(content))を代入\\n        BufferedReader br = new BufferedReader(new StringReader(___));\\n        // readLine で1行ずつ読み込む\\n        String line = br.___();\\n        // println で出力する\\n        System.out.___(line);\\n        // close でリソースを閉じる\\n        br.___();\\n    ___\\n___",
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
          "`new` で BufferedReader を作成します。",
          null,
          "変数の値をコンソールに出力し、改行します。",
          "`close` でリソースを閉じます。",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
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
          "others": ["*;", "Main", "main(String[] args) throws IOException {", "content", "}"]
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
        "description": "ファイルに効率的に書き込む方法を学びましょう。",
        "difficulty": "hard",
        "orderIndex": 7,
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
        "initialDisplayMode": "holey",
        "correctCode": "import java.io.*;\\n\\npublic class Main {\\n    public static void main(String[] args) throws IOException {\\n        // swにnew StringWriter()を代入\\n        StringWriter sw = new StringWriter();\\n        // bwにnew BufferedWriter(sw)を代入\\n        BufferedWriter bw = new BufferedWriter(sw);\\n        // write で文字列を書き込む\\n        bw.write(\"こんにちは\");\\n        // flush でバッファをフラッシュする\\n        bw.flush();\\n        // toString で文字列に変換する\\n        System.out.println(sw.toString());\\n    }\\n}",
        "holeyCode": "import java.io.___\\n\\npublic class ___ {\\n    public static void ___\\(String[] args) throws IOException {\\n        // swにnew StringWriter()を代入\\n        ___ sw = new StringWriter();\\n        // bwにnew BufferedWriter(sw)を代入\\n        BufferedWriter bw = new BufferedWriter(___);\\n        // write で文字列を書き込む\\n        bw.write(\"___\");\\n        // flush でバッファをフラッシュする\\n        bw.___();\\n        // toString で文字列に変換する\\n        System.out.___(sw.toString());\\n    ___\\n___",
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
          "        bw.write(\"Hello\");",
          "        // flush でバッファをフラッシュする",
          "        bw.flush();",
          "        // toString で文字列に変換する",
          "        System.out.println(sw.toString());",
          "    }",
          "}"
        ],
        "lineHints": [
          "`new` で StringWriter を作成します。",
          null,
          "`write` で文字列を書き込みます。",
          "`flush` でバッファをフラッシュします。",
          null,
          "`toString` で文字列に変換します。",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
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
          "others": ["*;", "Main", "main(String[] args) throws IOException {", "StringWriter", "sw", "Hello", "println", "}"]
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
        "description": "テキストをパースするScannerを学びましょう。",
        "difficulty": "hard",
        "orderIndex": 8,
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
        "initialDisplayMode": "holey",
        "correctCode": "import java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // scにnew Scanner(\"42 Hello\")を代入\\n        Scanner sc = new Scanner(\"42 こんにちは\");\\n        // nextInt で整数を読み込む\\n        int num = sc.nextInt();\\n        // next で文字列を読み込む\\n        String word = sc.next();\\n        // println で出力する\\n        System.out.println(num + \" \" + word);\\n    }\\n}",
        "holeyCode": "import java.util.___\\n\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // scにnew Scanner(\"42 Hello\")を代入\\n        Scanner sc = new Scanner(\"___\");\\n        // nextInt で整数を読み込む\\n        int num = sc.___();\\n        // next で文字列を読み込む\\n        String word = sc.___();\\n        // println で出力する\\n        System.out.___(num + \" \" + word);\\n    ___\\n___",
        "correctLines": [
          "import java.util.*;",
          "",
          "public class Main {",
          "    public static void main(String[] args) {",
          "        // scにnew Scanner(\"42 Hello\")を代入",
          "        Scanner sc = new Scanner(\"42 Hello\");",
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
          "`new` で Scanner を作成します。",
          null,
          "`next` で文字列を読み込みます。",
          "`println` で出力します。",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
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
          "others": ["*;", "Main", "main(String[] args) {", "42 Hello", "}"]
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
        "description": "NIO2を使ったファイル読み込みを学びましょう。",
        "difficulty": "hard",
        "orderIndex": 9,
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
        "initialDisplayMode": "holey",
        "correctCode": "import java.nio.file.*;\\nimport java.util.*;\\n\\npublic class Main {\\n    public static void main(String[] args) throws Exception {\\n        // pathにPaths.get(\".\")を代入\\n        Path path = Paths.get(\".\");\\n        // exists でファイルの存在を確認する\\n        boolean exists = Files.exists(path);\\n        // println で出力する\\n        System.out.println(exists);\\n    }\\n}",
        "holeyCode": "import java.nio.file.___\\nimport java.util.___\\n\\npublic class ___ {\\n    public static void ___\\(String[] args) throws Exception {\\n        // pathにPaths.get(\".\")を代入\\n        Path path = Paths.get(\"___\");\\n        // exists でファイルの存在を確認する\\n        boolean exists = Files.exists(___);\\n        // println で出力する\\n        System.out.___(exists);\\n    ___\\n___",
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
          "`get` でパスを作成します。",
          "`exists` でファイルの存在を確認します。",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "methods": [
            "get",
            "of",
            "create",
            "exists",
            "println"
          ],
          "others": ["*;", "Main", "main(String[] args) throws Exception {", ".", "path", "}"]
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
        "description": "複数の例外を1つのcatchで処理しましょう。",
        "difficulty": "hard",
        "orderIndex": 10,
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
        "initialDisplayMode": "holey",
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
          null,
          null,
          null,
          null,
          "`null` を代入します。",
          null,
          "`length` メソッドを呼び出します。",
          null,
          "エラー（例外）が発生した場合の処理を記述します。",
          null,
          "文字列をコンソールに出力し、改行します。",
          null,
          null,
          null
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
          "others": ["Main", "main(String[] args) {", "try", "e", "}"]
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

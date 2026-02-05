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
            "content": "# 世界中で使われているパワフルな言語\\n\\n**Java（ジャバ）** は、銀行のシステムや、Androidスマホのアプリ、マインクラフト（PC版）など、とても大きなシステムからゲームまで幅広く使われている言葉です。\\n\\n**身近な例え：**\\nJavaは「一度書けば、どこでも動く」のが特徴です。どんな環境でもしっかり動く、頼れるリーダーのような存在です！"
          },
          {
            "title": "Javaを動かす「お約束」",
            "content": "# 最初に書く「おまじない」\\n\\nJavaでプログラムを書くときは、必ず書かなければいけない「お約束」があります。\\n\\n**たとえ話：** 手紙を書くときに「拝啓（はいけい）」から始めるように、Javaにも決まった書き出しがあるんです。\\n\\n```java\\npublic class Main {\\n    public static void main(String[] args) {\\n        // ここにやりたいことを書くよ！\\n    }\\n}\\n```\\n\\n**何をしているの？**\\n- `public class Main` → プログラムに「Main」という名前をつけています\\n- `public static void main` → 「ここからスタート！」という合図です\\n\\n画面に文字を出したいときは、`System.out.println(\"出したい文字\");` と書きます。長いですね！でも、これがJavaの流儀（りゅうぎ）なんです。"
          }
        ],
        "initialDisplayMode": "holey",
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
          "others": ["Main", "main(String[] args) {", "println", "}"]
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
        "description": "文字をしまっておく「はこ」を作ってみましょう。Javaでは、はこに入れるものの種類（ラベル）を先に決める必要があります。",
        "difficulty": "easy",
        "orderIndex": 2,
        "tutorialSlides": [
          {
            "title": "変数（へんすう）とは？",
            "content": "# データを保存する「はこ」\\n\\nプログラムの中では、数字や文字をしまっておく「はこ」を作ることができます。これを **変数（へんすう）** と呼びます。\\n\\n**たとえ話：** 変数は「名前のついた引き出し」のようなものです。「おかしの引き出し」「おもちゃの引き出し」のように、中身がわかる名前をつけてあげましょう！"
          },
          {
            "title": "はこに「ラベル」を貼ろう",
            "content": "# String（ストリング）ラベル\\n\\nJavaでは、はこを作るときに「このはこには何を入れますか？」と聞かれます。\\n\\n**たとえ話：** おもちゃ箱には「おもちゃ」、本棚には「本」と書いてあるように、Javaの変数にも「何を入れるか」を教えてあげる必要があります。\\n\\n「文字を入れたい！」というときは、`String`（ストリング＝文字列という意味）というラベルを使います。**Sが大文字** なので気をつけてくださいね！\\n\\n**コード例：** 下のコードが何をしているか見てみましょう\\n```java\\nString animal = \"いぬ\";  // 「animal」という名前の箱に「いぬ」を入れる\\nSystem.out.println(animal);  // 箱の中身を画面に出す\\n```\\n=> いぬ"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "public class Main {\\n    public static void main(String[] args) {\\n        // 文字列 Java を代入する\\n        String name = \"Java\";\\n        // 変数 name を出力する\\n        System.out.println(name);\\n    }\\n}",
        "holeyCode": "public class ___ {\\n    public static void ___\\(String[] args) {\\n        // 文字列 Java を代入する\\n        String name = \"___\";\\n        // 変数 name を出力する\\n        System.out.___(name);\\n    ___\\n___",
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
          "文字列型の変数を宣言し、文字列データを代入します。",
          "変数の値をコンソールに出力し、改行します。",
          null,
          null,
          null,
          null,
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
          ],
          "others": ["Java\";", "Main", "main(String[] args) {", "println", "}"]
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
        "description": "数字を入れるための「int（イント）ラベル」を使って、計算をしてみましょう。",
        "difficulty": "easy",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "数字用のラベル",
            "content": "# int（イント）ラベル\\n\\n数字（整数＝せいすう：小数点のない数字のこと）を扱いたいときは、**int**（イント）というラベルを使います。\\n\\n**覚え方：** int は「integer（インテジャー＝整数）」の略です。\\n\\n**使い分けのルール：**\\n- 文字を入れたい → `String`\\n- 数字を入れたい → `int`\\n\\nこの使い分けがJavaの大事なルールです！"
          },
          {
            "title": "計算してみよう",
            "content": "# 計算もできます\\n\\n`int` のはこに入れた数字は、たし算やひき算ができます。コンピュータは計算がとっても得意なんです！\\n\\n**コード例：** りんごとみかんの値段を足してみましょう\\n```java\\nint apple = 100;   // りんごは100円\\nint orange = 50;   // みかんは50円\\nSystem.out.println(apple + orange);  // 合計を表示\\n```\\n=> 150\\n\\n`+` を使うと、変数どうしを足し算できます。"
          }
        ],
        "initialDisplayMode": "holey",
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
          "整数型の変数を宣言し、初期値を代入します。",
          "整数型の変数を宣言し、初期値を代入します。",
          null,
          "ひき算なので `-` を使います。",
          null,
          null,
          null,
          null,
          null,
          null
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
          "others": ["10;", "3;", "Main", "main(String[] args) {", "println", "}"]
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
        "description": "割り算の「あまり」を求める「%」（パーセント）演算子を学びましょう。",
        "difficulty": "easy",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "あまりを求める",
            "content": "# 割り算の「あまり」を知りたい！\\n\\n割り算をしたときに、割り切れなくて「あまり」が出ることがありますよね。\\n\\n**たとえ話：** 10個のあめを3人で分けると、1人3個ずつで、1個あまります。この「あまり」を計算してくれるのが `%`（パーセント）記号です。\\n\\nこの計算を「剰余（じょうよ）」と呼びます。難しい言葉ですが、「あまりを求める計算」と覚えておけばOKです！"
          },
          {
            "title": "% の使い方",
            "content": "# あまりを計算してみよう\\n\\n**例1：あまりが出る場合**\\n```java\\nSystem.out.println(10 % 3);  // 結果: 1\\n```\\n10 ÷ 3 = 3 あまり **1** なので、「1」が表示されます。\\n\\n**例2：割り切れる場合**\\n```java\\nSystem.out.println(8 % 2);   // 結果: 0\\n```\\n8 ÷ 2 = 4 あまり **0** なので、「0」になります。\\n\\n**ポイント：** あまりが0なら「割り切れる」ということです！偶数（ぐうすう）かどうかの判定などに使えます。"
          }
        ],
        "initialDisplayMode": "holey",
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
          "あまりを求める `%` 演算子を使います。",
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "operators": [
            "%",
            "/",
            "*",
            "-"
          ],
          "others": ["Main", "main(String[] args) {", "println", "}"]
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
        "description": "変数の値を手軽に増やしたり減らしたりする「+=」「-=」を学びましょう。",
        "difficulty": "easy",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "中身を増やしたいとき",
            "content": "# はこの中身をパワーアップ\\n\\n**たとえ話：** ゲームで「今の点数に10点プラスしたい！」というとき、`+=` を使うととっても便利です。\\n\\nこれは「今の数字に足して、そのまま保存する」という合体技（がったいわざ）です。\\n\\n**コード例：**\\n```java\\nint score = 100;   // 最初は100点\\nscore += 10;       // 10点プラス！\\n// score は 110 になる\\n```\\n\\n**書き方の意味：**\\n`score += 10` は `score = score + 10` と同じ意味です。短くて便利ですね！"
          },
          {
            "title": "-= も使える",
            "content": "# 引き算バージョン\\n\\n`-=` を使えば、「今の数字から引いて保存」ができます。\\n\\n**たとえ話：** ゲームでダメージを受けてHP（体力）が減るときに使えます！\\n\\n**コード例：**\\n```java\\nint hp = 100;   // 最初のHP（体力）は100\\nhp -= 30;       // 30のダメージを受けた！\\n// hp は 70 になる\\n```\\n\\n**ほかにも：**\\n- `*=` → かけ算して保存\\n- `/=` → 割り算して保存"
          }
        ],
        "initialDisplayMode": "holey",
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
          "変数の値を計算して、その結果を同じ変数に再代入します。",
          "変数の値を計算して、その結果を同じ変数に再代入します。",
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
          "operators": [
            "+=",
            "-=",
            "*=",
            "/="
          ],
          "others": ["Main", "main(String[] args) {", "100", "20", "50", "println", "}"]
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
        "description": "プラス（+）を使って、文字と「はこ（変数）」をくっつけて表示してみましょう。",
        "difficulty": "easy",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "連結（れんけつ）とは？",
            "content": "# 複数の情報を合体させる\\n\\n「私は〇〇歳です」の「〇〇」のところに、変数（はこ）の中身を入れたいことがありますよね。\\n\\n**たとえ話：** パズルのピースをつなげるように、文字と変数を `+` でくっつけることができます。\\n\\nこれを **連結（れんけつ）** と呼びます。「つなげる」という意味です。"
          },
          {
            "title": "プラスでつなげましょう",
            "content": "# ガチャンと合体！\\n\\n文字と文字、文字と数字を `+` でつなぐと、ひとつの長い文章になります。\\n\\n**コード例：** 天気を表示してみましょう\\n```java\\nString weather = \"はれ\";  // 天気を変数に入れる\\nSystem.out.println(\"明日は\" + weather + \"です\");  // つなげて表示\\n```\\n=> 明日ははれです\\n\\n**何が起きているの？**\\n1. 「明日は」という文字\\n2. weatherの中身「はれ」\\n3. 「です」という文字\\n\\nこの3つが `+` でつながって「明日ははれです」になります！"
          }
        ],
        "initialDisplayMode": "holey",
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
          "整数型の変数を宣言し、初期値を代入します。",
          "文字列をコンソールに出力し、改行します。",
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "variables": [
            "age"
          ],
          "operators": [
            "+"
          ],
          "others": ["10;", "Main", "main(String[] args) {", "10", "println", "}"]
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
        "description": "同じラベルのデータをまとめて並べておける「配列（はいれつ）」を使ってみましょう。",
        "difficulty": "easy",
        "orderIndex": 7,
        "tutorialSlides": [
          {
            "title": "配列（はいれつ）とは？",
            "content": "# データをまとめて整理整頓\\n\\nたくさんのデータを順番に並べておきたいときに使うのが **配列（はいれつ）** です。\\n\\n**たとえ話：** 配列は「ロッカー」のようなものです。1番のロッカー、2番のロッカー...というように、番号のついた場所にデータをしまっておけます。\\n\\n「買い物リスト」や「クラスの名簿（めいぼ）」のように、関連するものを一つの変数にまとめて管理（かんり）できます。"
          },
          {
            "title": "データの番号は 0 から！",
            "content": "# { } を使って作りましょう\\n\\n`String[]` のように、ラベルの後ろに `[]`（角カッコ）をつけると配列になります。\\n\\n**大事なルール：** 配列の番号は **0番から** 始まります！1番からではないので注意してね。\\n\\n**コード例：**\\n```java\\nString[] items = {\"おにぎり\", \"パン\"};\\n//                  0番目      1番目\\nSystem.out.println(items[0]); // \"おにぎり\" が表示されます\\nSystem.out.println(items[1]); // \"パン\" が表示されます\\n```\\n\\n**覚え方：** コンピュータは0から数えるのが好きなんです！"
          }
        ],
        "initialDisplayMode": "holey",
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
          "{\"あか\", \"あお\"} と入力しましょう。 { } を使うのがルールです。",
          "2番目のデータはインデックス1です。 `colors[1]` と入力してください。",
          null,
          null,
          null,
          null,
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
          ],
          "others": ["Main", "main(String[] args) {", "\"あか\", \"あお\"", "println", "}"]
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
        "description": "点数（score）が 80点より高いときだけ、メッセージを出すようにしてみましょう。",
        "difficulty": "easy",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "条件分岐（じょうけんぶんき）とは？",
            "content": "# プログラムに判断させてみよう\\n\\n「もし雨が降ったら傘をさす」「もし晴れたら外で遊ぶ」\\n\\nこんなふうに、状況（じょうきょう）によって動きを変えることを **条件分岐（じょうけんぶんき）** と呼びます。\\n\\n**たとえ話：** 条件分岐は「分かれ道」のようなものです。「テストで80点以上なら合格、そうでなければ不合格」のように、条件によって進む道が変わります。\\n\\nプログラムに「もし〜なら、これをしてね」と教えてあげましょう！"
          },
          {
            "title": "もし〜なら（if）",
            "content": "# if（イフ）の使い方\\n\\n`if` は英語で「もし」という意味です。Javaでは、`if (条件)` のあとに `{ }` を書いて、その中にやりたいことを書きます。\\n\\n**コード例：** 値段が1000円より高いかチェックしてみよう\\n```java\\nint price = 1200;  // 値段は1200円\\nif (price > 1000) {  // もし1000円より高いなら...\\n    System.out.println(\"ちょっと高いかも？\");\\n}\\n```\\n\\n**ポイント：**\\n- `>` は「より大きい」という意味\\n- 条件が正しいときだけ `{ }` の中が実行されます"
          }
        ],
        "initialDisplayMode": "holey",
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
          "整数型の変数を宣言し、初期値を代入します。",
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          null,
          "文字列をコンソールに出力し、改行します。",
          null,
          "さいごに } で閉じるのを忘れないでください。",
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "operators": [
            ">"
          ],
          "strings": [
            "ごうかく！"
          ],
          "others": ["100;", "Main", "main(String[] args) {", "100", "println", "}"]
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
        "description": "「もし〜なら」のあとに、「そうじゃなければ」という別の動きも作ってみましょう。",
        "difficulty": "easy",
        "orderIndex": 9,
        "tutorialSlides": [
          {
            "title": "それ以外の場合は？",
            "content": "# 2つの道を作る\\n\\n「もし〜なら」に当てはまらなかったときの動きも作ってみましょう。\\n\\n**たとえ話：** 「もし晴れなら外で遊ぶ、**そうでなければ**家でゲーム」のように、条件に当てはまらない場合の行動も決めておきたいですよね。\\n\\n**else（エルス）** を使うと、「そうじゃなければ、こっちをしてね」という指示が出せます。elseは英語で「そうでなければ」という意味です。"
          },
          {
            "title": "そうじゃなければ（else）",
            "content": "# 2つのルート\\n\\n条件にあてはまらなかったときの動きは `else` を使って書きます。\\n\\n**コード例：** 今は午前中かな？お昼すぎかな？\\n```java\\nint hour = 15;  // 今は15時\\nif (hour < 12) {  // もし12時より前なら...\\n    System.out.println(\"午前中\");\\n} else {  // そうでなければ...\\n    System.out.println(\"お昼すぎ\");\\n}\\n```\\n=> お昼すぎ\\n\\n**ポイント：**\\n- 15時は12時より前ではないので、`else` の中が実行されます\\n- `<` は「より小さい」という意味です"
          }
        ],
        "initialDisplayMode": "holey",
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
          "整数型の変数を宣言し、初期値を代入します。",
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          null,
          "「おとな」と表示します。",
          null,
          "`else` で「そうでなければ」を表します。",
          null,
          "「こども」と表示します。",
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
            "else"
          ],
          "strings": [
            "こども"
          ],
          "others": ["10;", ">=", "おとな", "Main", "main(String[] args) {", "10", "println", "}"]
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
        "description": "複数の条件を組み合わせる「&&（かつ）」と「||（または）」を学びましょう。",
        "difficulty": "easy",
        "orderIndex": 10,
        "tutorialSlides": [
          {
            "title": "条件を組み合わせる",
            "content": "# もっと細かい条件で\\n\\n「10歳以上、**かつ**、20歳未満」のように、2つの条件を**両方**クリアしているかチェックしたいときがあります。\\n\\n**たとえ話：** 遊園地で「身長120cm以上**かつ**10歳以上なら乗れる」というルールがあるように、複数の条件を組み合わせたいことがありますよね。\\n\\n- 両方満たす必要がある → `&&`（アンド＝かつ）\\n- どちらか片方でもOK → `||`（オア＝または）"
          },
          {
            "title": "&&（かつ）と ||（または）",
            "content": "# 使い分け\\n\\n**例1：両方の条件を満たす（かつ）**\\n```java\\n// 点数80点以上、かつ、出席率90%以上なら...\\nif (score >= 80 && attendance >= 90) {\\n    System.out.println(\"優秀！\");\\n}\\n```\\n\\n**例2：どちらかを満たす（または）**\\n```java\\n// 土曜日、または、日曜日なら...\\nif (day == \"土曜日\" || day == \"日曜日\") {\\n    System.out.println(\"お休み\");\\n}\\n```\\n\\n**覚え方：**\\n- `&&` → 「**かつ**」両方必要\\n- `||` → 「**または**」どちらか1つでOK"
          }
        ],
        "initialDisplayMode": "holey",
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
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
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
          "operators": [
            "&&",
            "||",
            "&",
            "|"
          ],
          "others": ["Main", "main(String[] args) {", "80", "10", "70", "println", "}"]
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
        "description": "配列に入っているたくさんのデータを、一つずつ順番に表示してみましょう。",
        "difficulty": "easy",
        "orderIndex": 11,
        "tutorialSlides": [
          {
            "title": "繰り返し（ループ）とは？",
            "content": "# 面倒なことはコンピュータにおまかせ\\n\\n同じ作業を何度も繰り返すための仕組みが **ループ（繰り返し）** です。\\n\\n**たとえ話：** クラス全員の名前を呼ぶとき、「たろうくん」「はなこさん」「けんたくん」...と一人ずつ名前を書くのは大変ですよね。ループを使えば「全員の名前を順番に呼ぶ」と1回書くだけでOKです！\\n\\n配列の中身を一つずつ順番に全部チェックしたいときに非常に役立ちます。"
          },
          {
            "title": "くりかえし（拡張for）",
            "content": "# 全部まとめて取り出す\\n\\n配列の中身を最初から最後まで順番に取り出すときは、**拡張for文（かくちょうフォーぶん）** が便利です。\\n\\n`:`（コロン）を使うのがJavaの面白いところです。「〜の中から」という意味だと思ってください。\\n\\n**コード例：**\\n```java\\nString[] names = {\"たろう\", \"はなこ\"};\\nfor (String name : names) {  // namesの中から順番に取り出してnameに入れる\\n    System.out.println(name);  // 取り出した名前を表示\\n}\\n```\\n=> たろう\\n=> はなこ\\n\\n**読み方：** 「namesの中の各nameについて」"
          }
        ],
        "initialDisplayMode": "holey",
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
          "variables": [
            "name",
            "names"
          ],
          "others": ["Main", "main(String[] args) {", "\"たろう\", \"はなこ\"", "println", "}"]
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
        "description": "名前（キー）を指定してデータを取り出せる「HashMap（辞書）」を使ってみましょう。",
        "difficulty": "easy",
        "orderIndex": 12,
        "tutorialSlides": [
          {
            "title": "辞書（じしょ）とは？",
            "content": "# キーワードで検索！\\n\\n**たとえ話：** 国語辞典で「りんご」を調べると「赤い果物」と出てくるように、「言葉」と「その意味」をセットにして保存できるのが **HashMap（ハッシュマップ）** です。\\n\\nJavaでは「辞書」のことを HashMap と呼びます。\\n\\n**使える場面：**\\n- 「名前」と「電話番号」のペア\\n- 「商品名」と「値段」のペア\\n- 「英単語」と「日本語訳」のペア"
          },
          {
            "title": "HashMapの使い方",
            "content": "# ちょっと準備が大変かも？\\n\\nJavaで辞書を使うのは少し準備が必要です。3ステップで覚えましょう！\\n\\n**ステップ1：** `import` で道具箱から出してくる\\n**ステップ2：** `new` で新しく作る\\n**ステップ3：** `put`（プット）で中身を入れる\\n\\n**コード例：**\\n```java\\nimport java.util.HashMap;  // ステップ1：道具を準備\\nHashMap<String, String> colors = new HashMap<>();  // ステップ2：辞書を作る\\ncolors.put(\"りんご\", \"あか\");  // ステップ3：データを入れる\\nSystem.out.println(colors.get(\"りんご\"));  // getで取り出す\\n```\\n=> あか"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "import java.util.HashMap;\\npublic class Main {\\n    public static void main(String[] args) {\\n        // new HashMap で作る\\n        HashMap<String, String> user = new HashMap<>();\\n        // put でデータを追加する\\n        user.put(\"name\", \"たろう\");\\n        // get でデータを取り出す\\n        System.out.println(user.get(\"name\"));\\n    }\\n}",
        "holeyCode": "import java.util.___ ;\\npublic class ___ {\\n    public static void ___\\(String[] args) {\\n        // new HashMap で作る\\n        ___<String, String> user = new HashMap<>();\\n        // put でデータを追加する\\n        user.put(\"___\", \"たろう\");\\n        // get でデータを取り出す\\n        System.out.___(user.get(\"name\"));\\n    ___\\n___",
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
          "new HashMap<>(); で新しくはこを作ります。",
          "put（プット）でデータを入れます。",
          null,
          "get（ゲット）でデータを取り出します。",
          null,
          null,
          null,
          null,
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
          ],
          "others": ["HashMap;", "Main", "main(String[] args) {", "name", "println", "}"]
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
        "description": "自分だけの新しい関数（メソッド）を作ってみましょう。",
        "difficulty": "easy",
        "orderIndex": 13,
        "tutorialSlides": [
          {
            "title": "メソッド（関数）とは？",
            "content": "# オリジナルの技を作ろう\\n\\nよく使う処理をひとまとめにして、名前をつけることができます。これを **メソッド（関数・かんすう）** と呼びます。\\n\\n**たとえ話：** メソッドは「必殺技（ひっさつわざ）」のようなものです。「かめはめ波」と叫べば同じ技が出るように、メソッドも名前を呼べば同じ処理が実行されます。\\n\\n一度作っておけば、何度でも呼び出して使えます！"
          },
          {
            "title": "メソッドを定義する",
            "content": "# 作り方\\n\\nJavaでメソッドを作るときは、`public static void`（パブリック・スタティック・ボイド）という呪文（じゅもん）を使います。今は「おまじない」だと思ってそのまま書きましょう！\\n\\n**コード例：** あいさつするメソッドを作ってみよう\\n```java\\n// メソッドを作る（定義する）\\npublic static void aisatsu() {\\n    System.out.println(\"こんにちは！\");\\n}\\n\\n// メソッドを使う（呼び出す）\\naisatsu();  // 「こんにちは！」と表示される\\n```\\n\\n**ポイント：**\\n- メソッド名のあとに `()` をつけて呼び出します\\n- 同じメソッドを何回でも呼び出せます"
          }
        ],
        "initialDisplayMode": "holey",
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
          "public static void greet() { と入力して、メソッドを定義します。",
          null,
          "文字列をコンソールに出力し、改行します。",
          "メソッドの終わりです。",
          "関数（greet）を呼び出して実行します。",
          "mainの終わりです。",
          null,
          "クラスの終わりです。",
          null,
          null
        ],
        "candidates": {
          "functions": [
            "greet"
          ],
          "others": ["Main", "println", "}", "main(String[] args) {"]
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
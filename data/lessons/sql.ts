export const sqlData = {
  "language": "sql",
  "lessonId": "sql-1",
  "lessonTitle": "SQL (エスキューエル) に挑戦！",
  "lessonDescription": "たくさんのデータがしまってある「倉庫（そうこ）」から、ほしいデータを取り出すための言葉「SQL（エスキューエル）」のきほんを学びましょう。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
        "title": "画面に文字を出してみましょう",
        "description": "SQLを使って、画面に「こんにちは」と表示させてみましょう。SELECT（セレクト）というキーワードを使います。",
        "difficulty": "easy",
        "orderIndex": 1,
        "tutorialSlides": [
          {
            "title": "SQL（エスキューエル）とは？",
            "content": "# データの倉庫から取り出す言葉\\\\n\\\\nSQLは、データベースという「情報の倉庫」に対して、「このデータをください！」と命令するための言葉です。Webアプリやスマホアプリの裏側で、情報を探すときに必ず使われます。"
          },
          {
            "title": "ほしいデータを選ぶ SELECT",
            "content": "# SELECT（セレクト）\\\\n\\\\n「これを選んでください！」とお願いするときは `SELECT` と入力します。ただの文字を表示させたいときもこれを使います。\\\\n\\\\n```sql\\\\nSELECT '表示したい文字';\\\\n```"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標\\\\n\\\\n`SELECT` を使って `'Hello, World!'` と表示させてみましょう。さいごに `;`（セミコロン）を入力するのがルールです。\\\\n\\\\n**入力するコードのヒント：**\\\\n```sql\\\\nSELECT 'Hello, World!';\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- SELECTでデータを取得\\\nSELECT 'Hello, World!';",
        "holeyCode": "-- SELECTでデータを取得\\\nSELECT 'こんにちは, ___!';",
        "correctLines": [
          "-- SELECTでデータを取得",
          "SELECT 'Hello, World!';"
        ],
        "lineHints": [
          null,
          "やりかたは「SELECT」です。"
        ],
        "candidates": {
          "functions": [
            "SELECT"
          ],
          "strings": [
            "'Hello, World!'"
          ],
          "others": ["World", "界！';"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello, World!\\\\n"
          }
        ]
      },
    {
        "title": "データに名前をつけましょう",
        "description": "ASを使ってデータに別名（べつめい）をつけてみましょう。表示されるときに、わかりやすい名前がつきます。",
        "difficulty": "easy",
        "orderIndex": 2,
        "tutorialSlides": [
          {
            "title": "AS（アズ）で名前をつける",
            "content": "# 別名（べつめい）をつける AS\\\\n\\\\nデータに別の名前をつけたいときは `AS`（アズ＝「〜として」という意味）を使います。これを「エイリアス」（あだ名のようなもの）と呼びます。\\\\n\\\\n**たとえば：** 本名が「田中太郎」でも、友達からは「タロちゃん」と呼ばれるように、データにもわかりやすい名前をつけられます。"
          },
          {
            "title": "AS の使い方",
            "content": "# 名前をつける書き方\\\\n\\\\n`SELECT` のあとに値を書いて、`AS` のあとに名前を書きます。\\\\n\\\\n**コード例：**\\\\n```sql\\\\nSELECT '値' AS 名前;\\\\n```\\\\n\\\\n**このコードは何をしているの？**\\\\n- `'値'` という文字を選んで（SELECT）\\\\n- `名前` というあだ名をつける（AS）"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標\\\\n\\\\n`'こんにちは'` という文字に `greeting`（グリーティング＝あいさつ）という名前をつけて表示してみましょう。\\\\n\\\\n**入力するコードのヒント：**\\\\n```sql\\\\nSELECT 'こんにちは' AS greeting;\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- 文字にgreetingという名前をつける\\\nSELECT '7こんにちはSELECT 'こんにちは' AS greeting;' AS greeting;",
        "holeyCode": "-- 文字にgreetingという名前をつける\\\nSELECT '7こんにちはSELECT 'こんにちは' AS ___;' AS ___;",
        "correctLines": [
          "-- 文字にgreetingという名前をつける",
          "SELECT '7こんにちはSELECT 'こんにちは' AS greeting;' AS greeting;"
        ],
        "lineHints": [
          null,
          "別名をつけるキーワードを入力しましょう。"
        ],
        "candidates": {
          "keywords": [
            "AS"
          ],
          "variables": [
            "greeting",
            "message"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\\\n"
          }
        ]
      },
    {
        "title": "数字を足し算しましょう",
        "description": "SQLで計算もできます。数字を足し算して結果を表示してみましょう。",
        "difficulty": "easy",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "計算をしよう",
            "content": "# 数字の計算\\\\n\\\\nSQLでは、電卓（でんたく）のように計算ができます。文字と違って、数字にはクォート `' '` をつけません。\\\\n\\\\n**使える計算記号：**\\\\n- `+` たし算\\\\n- `-` ひき算\\\\n- `*` かけ算\\\\n- `/` わり算"
          },
          {
            "title": "計算の例",
            "content": "# たし算の書き方\\\\n\\\\n**コード例：**\\\\n```sql\\\\nSELECT 10 + 5;\\\\n```\\\\n\\\\n**このコードは何をしているの？**\\\\n- `10` と `5` をたし算して\\\\n- 結果の `15` が表示されます"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標\\\\n\\\\n`100` と `50` を足し算して、結果に `total`（トータル＝合計）という名前をつけて表示しましょう。\\\\n\\\\n**入力するコードのヒント：**\\\\n```sql\\\\nSELECT 100 + 50 AS total;\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- 100と50を足し算する\\\\nSELECT 100 + 50 AS total;",
        "holeyCode": "-- 100と50を足し算する\\\\nSELECT ___ + 50 AS total;",
        "correctLines": [
          "-- 100と50を足し算する",
          "SELECT 100 + 50 AS total;"
        ],
        "lineHints": [
          null,
          "足し算の記号を入力しましょう。"
        ],
        "candidates": {
          "operators": [
            "+",
            "-",
            "*",
            "/"
          ],
          "others": ["100"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "150\\\\n"
          }
        ]
      },
    {
        "title": "いくつもの値を表示しましょう",
        "description": "カンマで区切って、いくつもの値を同時に表示できます。",
        "difficulty": "easy",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "カンマで区切る",
            "content": "# 複数（ふくすう）の値を選ぶ\\\\n\\\\nいくつもの値を一度に表示したいときは、カンマ `,` で区切ります。\\\\n\\\\n**たとえば：** 買い物リストで「りんご、みかん、バナナ」と書くように、SQLでも `,` で区切ります。"
          },
          {
            "title": "複数の値を選ぶ例",
            "content": "# 書き方\\\\n\\\\n**コード例：**\\\\n```sql\\\\nSELECT '太郎', 10;\\\\n```\\\\n\\\\n**このコードは何をしているの？**\\\\n- `'太郎'` という名前と\\\\n- `10` という数字を\\\\n- 一度に2つ表示します"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標\\\\n\\\\n名前 `'Taro'` と年齢 `10` を、それぞれ `name`（名前）と `age`（年齢）という名前をつけて表示しましょう。\\\\n\\\\n**入力するコードのヒント：**\\\\n```sql\\\\nSELECT 'Taro' AS name, 10 AS age;\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- 名前と年齢を表示\\\nSELECT '太郎' AS name, 10 AS age;",
        "holeyCode": "-- 名前と年齢を表示\\\nSELECT '太郎' AS name, ___ AS age;",
        "correctLines": [
          "-- 名前と年齢を表示",
          "SELECT '太郎' AS name, 10 AS age;"
        ],
        "lineHints": [
          null,
          "複数の値を区切る記号を入力しましょう。"
        ],
        "candidates": {
          "punctuation": [
            ",",
            ";",
            ":"
          ],
          "others": ["10"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Taro|10\\\\n"
          }
        ]
      },
    {
        "title": "条件で絞り込みましょう",
        "description": "WHERE（ホエア）を使って、条件に合うデータだけを選びましょう。",
        "difficulty": "easy",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "WHERE（ホエア）で絞り込む",
            "content": "# 条件（じょうけん）を指定する\\\\n\\\\n「〜なものだけ選んで！」と条件をつけたいときは `WHERE`（ホエア＝「どこで」という意味）を使います。\\\\n\\\\n**たとえば：** 本棚から「赤い表紙の本だけ」を探すように、条件を指定してデータを絞り込めます。"
          },
          {
            "title": "WHERE の使い方",
            "content": "# 条件の書き方\\\\n\\\\n**比較（ひかく）の記号：**\\\\n- `>` より大きい\\\\n- `<` より小さい\\\\n- `=` 等しい\\\\n- `>=` 以上\\\\n- `<=` 以下\\\\n\\\\n**コード例：**\\\\n```sql\\\\nSELECT 1 WHERE 15 > 10;\\\\n```\\\\n\\\\n**このコードは何をしているの？**\\\\n- `15 > 10`（15は10より大きいか？）が正しければ\\\\n- `1`（「はい」の意味）を表示します"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標\\\\n\\\\n数字が `10` より大きいかどうかをチェックして、その結果を表示してみましょう。`SELECT 1` で「はい」という意味になります。\\\\n\\\\n**入力するコードのヒント：**\\\\n```sql\\\\nSELECT 1 WHERE 15 > 10;\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- 10より大きいかチェック\\\\nSELECT 1 WHERE 15 > 10;",
        "holeyCode": "-- 10より大きいかチェック\\\\nSELECT ___ WHERE 15 > 10;",
        "correctLines": [
          "-- 10より大きいかチェック",
          "SELECT 1 WHERE 15 > 10;"
        ],
        "lineHints": [
          null,
          "条件をつけるキーワードを入力しましょう。"
        ],
        "candidates": {
          "keywords": [
            "WHERE",
            "FROM",
            "AND"
          ],
          "others": ["1"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\\\n"
          }
        ]
      },
    {
        "title": "文字をつなげましょう",
        "description": "||（パイプ2つ）を使って、文字と文字をつなげてみましょう。",
        "difficulty": "easy",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "文字の連結（れんけつ）",
            "content": "# 文字をつなげる\\\\n\\\\n2つの文字をくっつけたいときは `||`（パイプ2つ）を使います。\\\\n\\\\n**たとえば：** 「おはよう」と「ございます」をつなげて「おはようございます」を作るイメージです。"
          },
          {
            "title": "連結の例",
            "content": "# 書き方\\\\n\\\\n**コード例：**\\\\n```sql\\\\nSELECT 'Hello, ' || 'World!';\\\\n```\\\\n\\\\n**このコードは何をしているの？**\\\\n- `'Hello, '` と `'World!'` をくっつけて\\\\n- `Hello, World!` と表示します"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標\\\\n\\\\n`'SQL'` と `'は楽しい！'` をつなげて表示しましょう。\\\\n\\\\n**入力するコードのヒント：**\\\\n```sql\\\\nSELECT 'SQL' || 'は楽しい！';\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- 文字をつなげる\\\nSELECT 'SQL' || '16は楽しい！SELECT 'SQL' || 'は楽しい！';';",
        "holeyCode": "-- 文字をつなげる\\\nSELECT '___' || '16は楽しい！SELECT '___' || 'は楽しい！';';",
        "correctLines": [
          "-- 文字をつなげる",
          "SELECT 'SQL' || '16は楽しい！SELECT 'SQL' || 'は楽しい！';';"
        ],
        "lineHints": [
          null,
          "文字をつなげる記号を入力しましょう。"
        ],
        "candidates": {
          "operators": [
            "||",
            "+",
            "&"
          ],
          "others": ["SQL"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "SQLは楽しい！\\\\n"
          }
        ]
      },
    {
        "title": "大きい順に並べ替えましょう",
        "description": "ORDER BY（オーダーバイ）を使って、データを並べ替えましょう。",
        "difficulty": "easy",
        "orderIndex": 7,
        "tutorialSlides": [
          {
            "title": "ORDER BY（オーダーバイ）で並べ替え",
            "content": "# データの並べ替え\\\\n\\\\nデータを順番に並べたいときは `ORDER BY`（オーダーバイ＝「〜で並べる」）を使います。\\\\n\\\\n**たとえば：** テストの点数を高い順に並べたり、名前をあいうえお順に並べたりできます。"
          },
          {
            "title": "並び順の指定",
            "content": "# ASC と DESC\\\\n\\\\n- `ASC`（アスク＝昇順）: 小さい順（1, 2, 3...）\\\\n- `DESC`（デスク＝降順）: 大きい順（3, 2, 1...）\\\\n\\\\n**コード例：**\\\\n```sql\\\\nSELECT 1 AS num ORDER BY num DESC;\\\\n```\\\\n\\\\n**このコードは何をしているの？**\\\\n- `num` という名前で `1` を選んで\\\\n- `DESC`（大きい順）で並べます"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標\\\\n\\\\n数字の `1` を選んで、降順（大きい順）で並べてみましょう。\\\\n\\\\n**入力するコードのヒント：**\\\\n```sql\\\\nSELECT 1 AS num ORDER BY num DESC;\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- 降順で並べる\\\\nSELECT 1 AS num ORDER BY num DESC;",
        "holeyCode": "-- 降順で並べる\\\\nSELECT ___ AS num ORDER BY num DESC;",
        "correctLines": [
          "-- 降順で並べる",
          "SELECT 1 AS num ORDER BY num DESC;"
        ],
        "lineHints": [
          null,
          "並べ替えのキーワードを入力しましょう。"
        ],
        "candidates": {
          "keywords": [
            "ORDER",
            "BY",
            "GROUP",
            "HAVING"
          ],
          "others": ["1"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\\\n"
          }
        ]
      },
    {
        "title": "条件を組み合わせましょう",
        "description": "ANDやORを使って、複数の条件を組み合わせてみましょう。",
        "difficulty": "easy",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "AND と OR",
            "content": "# 条件を組み合わせる\\\\n\\\\n複数の条件を組み合わせるときに使います。\\\\n\\\\n- `AND`（アンド＝「そして」）: 両方の条件を満たすもの\\\\n- `OR`（オア＝「または」）: どちらかの条件を満たすもの\\\\n\\\\n**たとえば：**\\\\n- 「りんご AND 赤い」→ 赤いりんご\\\\n- 「りんご OR みかん」→ りんごかみかん"
          },
          {
            "title": "AND の例",
            "content": "# 両方を満たす条件\\\\n\\\\n**コード例：**\\\\n```sql\\\\nSELECT 1 WHERE 10 > 5 AND 20 > 15;\\\\n```\\\\n\\\\n**このコードは何をしているの？**\\\\n- `10 > 5`（10は5より大きいか？）→ はい\\\\n- `20 > 15`（20は15より大きいか？）→ はい\\\\n- 両方が「はい」なので `1` を表示"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標\\\\n\\\\n`10 > 5` と `20 > 10` の両方が正しいかチェックしましょう。\\\\n\\\\n**入力するコードのヒント：**\\\\n```sql\\\\nSELECT 1 WHERE 10 > 5 AND 20 > 10;\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- 両方の条件をチェック\\\\nSELECT 1 WHERE 10 > 5 AND 20 > 10;",
        "holeyCode": "-- 両方の条件をチェック\\\\nSELECT ___ WHERE 10 > 5 AND 20 > 10;",
        "correctLines": [
          "-- 両方の条件をチェック",
          "SELECT 1 WHERE 10 > 5 AND 20 > 10;"
        ],
        "lineHints": [
          null,
          "「両方とも」という意味のキーワードを入力しましょう。"
        ],
        "candidates": {
          "keywords": [
            "AND",
            "OR",
            "NOT"
          ],
          "others": ["1"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\\\n"
          }
        ]
      },
    {
        "title": "CASEで条件分岐しましょう",
        "description": "CASE文を使って、条件によって違う値を返してみましょう。",
        "difficulty": "medium",
        "orderIndex": 9,
        "tutorialSlides": [
          {
            "title": "CASE文（ケースぶん）とは？",
            "content": "# 条件によって変える\\\\n\\\\n`CASE`（ケース＝「場合」）を使うと、「もし〜なら〇〇、そうでなければ△△」という処理ができます。\\\\n\\\\n**たとえば：** テストの点数で「80点以上なら合格、それ以外は不合格」のように、条件で結果を変えられます。"
          },
          {
            "title": "CASE文の書き方",
            "content": "# 構造（こうぞう）を覚えよう\\\\n\\\\n```sql\\\\nSELECT CASE WHEN 条件 THEN '結果1' ELSE '結果2' END;\\\\n```\\\\n\\\\n**各部分の意味：**\\\\n- `CASE` : 「場合分けを始めます」\\\\n- `WHEN 条件` : 「〜のとき」\\\\n- `THEN '結果1'` : 「こうする」\\\\n- `ELSE '結果2'` : 「そうでなければこうする」\\\\n- `END` : 「場合分けを終わります」"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標\\\\n\\\\n`10 > 5` が正しければ `'大きい'`、そうでなければ `'小さい'` と表示しましょう。\\\\n\\\\n**入力するコードのヒント：**\\\\n```sql\\\\nSELECT CASE WHEN 10 > 5 THEN '大きい' ELSE '小さい' END;\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- 条件分岐\\\nSELECT CASE WHEN 10 > 5 THEN '29大きいSELECT CASE WHEN 10 > 5 THEN '大きい' ELSE '75小さいSELECT CASE WHEN 10 > 5 THEN '29大きいSELECT CASE WHEN 10 > 5 THEN '大きい' ELSE '小さい' END;' ELSE '小さい' END;' END;' ELSE '92小さいSELECT CASE WHEN 10 > 5 THEN '29大きいSELECT CASE WHEN 10 > 5 THEN '大きい' ELSE '小さい' END;' ELSE '小さい' END;' END;",
        "holeyCode": "-- 条件分岐\\\nSELECT CASE WHEN ___ > 5 THEN '30大きいSELECT CASE WHEN ___ > 5 THEN '大きい' ELSE '77小さいSELECT CASE WHEN ___ > 5 THEN '30大きいSELECT CASE WHEN ___ > 5 THEN '大きい' ELSE '小さい' END;' ELSE '小さい' END;' END;' ELSE '94小さいSELECT CASE WHEN ___ > 5 THEN '30大きいSELECT CASE WHEN ___ > 5 THEN '大きい' ELSE '小さい' END;' ELSE '小さい' END;' END;",
        "correctLines": [
          "-- 条件分岐",
          "SELECT CASE WHEN 10 > 5 THEN '29大きいSELECT CASE WHEN 10 > 5 THEN '大きい' ELSE '75小さいSELECT CASE WHEN 10 > 5 THEN '29大きいSELECT CASE WHEN 10 > 5 THEN '大きい' ELSE '小さい' END;' ELSE '小さい' END;' END;' ELSE '92小さいSELECT CASE WHEN 10 > 5 THEN '29大きいSELECT CASE WHEN 10 > 5 THEN '大きい' ELSE '小さい' END;' ELSE '小さい' END;' END;"
        ],
        "lineHints": [
          null,
          "CASE、THEN、ENDを入力しましょう。"
        ],
        "candidates": {
          "keywords": [
            "CASE",
            "THEN",
            "END",
            "WHEN",
            "ELSE"
          ],
          "others": ["10"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "大きい\\\\n"
          }
        ]
      },
    {
        "title": "NULLをチェックしましょう",
        "description": "IS NULLを使って、データが空かどうかをチェックしましょう。",
        "difficulty": "medium",
        "orderIndex": 10,
        "tutorialSlides": [
          {
            "title": "NULL（ヌル）とは？",
            "content": "# 空っぽの値\\\\n\\\\n`NULL`（ヌル）は「何もない」「わからない」という特別な値です。\\\\n\\\\n**たとえば：** 電話番号の欄が空白のとき、「電話番号がない」のではなく「まだわからない」という状態を表します。空っぽの箱のようなものです。"
          },
          {
            "title": "IS NULL の使い方",
            "content": "# NULLのチェック方法\\\\n\\\\n注意！ `= NULL` ではなく `IS NULL` を使います。\\\\n\\\\n**コード例：**\\\\n```sql\\\\nSELECT 1 WHERE NULL IS NULL;\\\\n```\\\\n\\\\n**なぜ = ではダメなの？**\\\\n- NULLは「わからない」という意味なので\\\\n- 「わからない = わからない」は「わからない」になってしまいます"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標\\\\n\\\\n`NULL` がNULLかどうかをチェックして、NULLなら `1`、そうでなければ `0` を返しましょう。\\\\n\\\\n**入力するコードのヒント：**\\\\n```sql\\\\nSELECT CASE WHEN NULL IS NULL THEN 1 ELSE 0 END;\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- NULLチェック\\\\nSELECT CASE WHEN NULL IS NULL THEN 1 ELSE 0 END;",
        "holeyCode": "-- NULLチェック\\\\nSELECT CASE WHEN NULL IS NULL THEN ___ ELSE 0 END;",
        "correctLines": [
          "-- NULLチェック",
          "SELECT CASE WHEN NULL IS NULL THEN 1 ELSE 0 END;"
        ],
        "lineHints": [
          null,
          "NULLかどうかをチェックするキーワードを入力しましょう。"
        ],
        "candidates": {
          "keywords": [
            "IS",
            "NULL",
            "NOT",
            "LIKE"
          ],
          "others": ["1"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\\\n"
          }
        ]
      }
  ]
};

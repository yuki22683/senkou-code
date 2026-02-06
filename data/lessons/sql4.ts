export const sql4Data = {
  "language": "sql",
  "lessonId": "sql-4",
  "lessonTitle": "SQL IV - CTEとウィンドウ関数",
  "lessonDescription": "SQLの高度な分析機能を学びます。CTE、ウィンドウ関数、データ操作など、実務で使える技術を身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 4,
  "exercises": [
    {
        "title": "CTE（WITH句）",
        "description": "名前付きサブクエリで可読性を高めましょう。",
        "difficulty": "hard",
        "orderIndex": 1,
        "tutorialSlides": [
          {
            "title": "CTE（シーティーイー）とは？",
            "content": "# 共通テーブル式（きょうつうテーブルしき）\\n\\n**CTE**（Common Table Expression）は、`WITH` 句を使って名前付きのサブクエリを定義する機能です。\\n\\n**たとえば：** 複雑な計算結果に名前をつけて、後で何度も使いたいときに便利です。レシピの「下ごしらえ」のようなものです。"
          },
          {
            "title": "CTE の使い方",
            "content": "# WITH 名前 AS (クエリ)\\n\\n**コード例：**\\n```sql\\nWITH high_sales AS (\\n  SELECT * FROM orders WHERE total > 1000\\n)\\nSELECT * FROM high_sales;\\n```\\n\\n**このコードは何をしているの？**\\n1. `high_sales` という名前で「1000円以上の注文」を定義\\n2. その結果を取得"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- WITHでCTEを定義\\nWITH nums AS (\\n  -- データを作成\\n  SELECT 1 AS n UNION SELECT 2 UNION SELECT 3\\n)\\n-- CTEからデータを取得\\nSELECT * FROM nums;",
        "holeyCode": "-- WITHでCTEを定義\\nWITH nums ___ (\\n  -- データを作成\\n  SELECT ___ AS n UNION SELECT 2 UNION SELECT 3\\n___\\n-- CTEからデータを取得\\nSELECT * FROM ___;",
        "correctLines": [
          "-- WITHでCTEを定義",
          "WITH nums AS (",
          "  -- データを作成",
          "  SELECT 1 AS n UNION SELECT 2 UNION SELECT 3",
          ")",
          "-- CTEからデータを取得",
          "SELECT * FROM nums;"
        ],
        "lineHints": [
          null,
          "WITH でCTEを定義します。",
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "WITH",
            "AS",
            "FROM"
          ],
          "others": ["SELECT", "1", ")", "nums"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\
2\
3\
"
          }
        ]
      },
    {
        "title": "ROW_NUMBER()",
        "description": "行に連番を振りましょう。",
        "difficulty": "hard",
        "orderIndex": 2,
        "tutorialSlides": [
          {
            "title": "ROW_NUMBER（ロウナンバー）とは？",
            "content": "# 行番号を付ける\\n\\n**ROW_NUMBER()**（ロウナンバー＝「行番号」）は、各行に1から始まる連番を振るウィンドウ関数（かんすう）です。\\n\\n**たとえば：** クラスで成績順に1位、2位、3位...と番号をつけるイメージです。"
          },
          {
            "title": "ROW_NUMBER の使い方",
            "content": "# OVER (ORDER BY ...) で順番を指定\\n\\n**コード例：**\\n```sql\\nSELECT name,\\n       ROW_NUMBER() OVER (ORDER BY score DESC) AS rank\\nFROM students;\\n```\\n\\n**このコードは何をしているの？**\\n- scoreの高い順に並べて\\n- 1から順番に番号（rank）を振ります"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- SELECTで列を取得\\nSELECT\\n  -- 値の列\\n  val,\\n  -- ROW_NUMBERで連番を振る\\n  ROW_NUMBER() OVER (ORDER BY val) AS rn\\n-- データソースを指定\\nFROM (SELECT 'A' AS val UNION SELECT 'B' UNION SELECT 'C');",
        "holeyCode": "-- SELECTで列を取得\\n___\\n  -- 値の列\\n  ___,\\n  -- ROW_NUMBERで連番を振る\\n  ROW_NUMBER() OVER (ORDER BY val) AS ___\\n-- データソースを指定\\nFROM (SELECT 'A' AS val UNION SELECT 'B' UNION SELECT '___');",
        "correctLines": [
          "-- SELECTで列を取得",
          "SELECT",
          "  -- 値の列",
          "  val,",
          "  -- ROW_NUMBERで連番を振る",
          "  ROW_NUMBER() OVER (ORDER BY val) AS rn",
          "-- データソースを指定",
          "FROM (SELECT 'A' AS val UNION SELECT 'B' UNION SELECT 'C');"
        ],
        "lineHints": [
          null,
          "ROW_NUMBER で連番を振ります。",
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "functions": [
            "ROW_NUMBER",
            "RANK",
            "DENSE_RANK"
          ],
          "others": ["SELECT", "val", "FROM", "rn", "C"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "A|1\
B|2\
C|3\
"
          }
        ]
      },
    {
        "title": "RANK()",
        "description": "同順位を考慮したランキングを作りましょう。",
        "difficulty": "hard",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "RANK（ランク）とは？",
            "content": "# 同順位（どうじゅんい）を許容\\n\\n**RANK()**（ランク＝「順位」）は、同じ値に同じ順位を付けます。次の順位は飛ばされます。\\n\\n**たとえば：** 90点が2人いたら両方1位、次の80点の人は3位になります（2位は飛ばされる）。"
          },
          {
            "title": "RANK と DENSE_RANK の違い",
            "content": "# 順位の付け方の違い\\n\\n点数が 90, 90, 80 のとき：\\n\\n- **RANK()** → 1, 1, 3（順位を飛ばす）\\n- **DENSE_RANK()** → 1, 1, 2（順位を飛ばさない）\\n\\n**DENSE_RANK**（デンスランク＝「詰めた順位」）は、順位を飛ばしません。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- SELECTで列を取得\\nSELECT\\n  -- 値の列\\n  val,\\n  -- RANKで順位を付ける\\n  RANK() OVER (ORDER BY val) AS rnk\\n-- データソースを指定\\nFROM (SELECT 1 AS val UNION ALL SELECT 1 UNION ALL SELECT 2);",
        "holeyCode": "-- SELECTで列を取得\\n___\\n  -- 値の列\\n  ___,\\n  -- RANKで順位を付ける\\n  RANK() OVER (ORDER BY val) AS ___\\n-- データソースを指定\\nFROM (SELECT ___ AS val UNION ALL SELECT 1 UNION ALL SELECT 2);",
        "correctLines": [
          "-- SELECTで列を取得",
          "SELECT",
          "  -- 値の列",
          "  val,",
          "  -- RANKで順位を付ける",
          "  RANK() OVER (ORDER BY val) AS rnk",
          "-- データソースを指定",
          "FROM (SELECT 1 AS val UNION ALL SELECT 1 UNION ALL SELECT 2);"
        ],
        "lineHints": [
          null,
          "RANK で順位を付けます。",
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "functions": [
            "RANK",
            "ROW_NUMBER",
            "DENSE_RANK"
          ],
          "others": ["SELECT", "val", "FROM", "rnk", "1"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1|1\
1|1\
2|3\
"
          }
        ]
      },
    {
        "title": "SUM() OVER",
        "description": "累積合計を計算しましょう。",
        "difficulty": "hard",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "SUM() OVER とは？",
            "content": "# 累積合計（るいせきごうけい）を計算\\n\\n**SUM() OVER** は、行ごとに「ここまでの合計」を計算できます。普通のSUMは全体で1つの値になりますが、OVER を使うと各行に値が残ります。\\n\\n**たとえば：** 毎日の売上を足していって「今日までの売上合計」を出すイメージです。"
          },
          {
            "title": "SUM() OVER の使い方",
            "content": "# OVER (ORDER BY ...) で順番を指定\\n\\n**コード例：**\\n```sql\\nSELECT date, amount,\\n       SUM(amount) OVER (ORDER BY date) AS running_total\\nFROM sales;\\n```\\n\\n**このコードは何をしているの？**\\n- 日付順に並べて\\n- その日までの累積合計を計算"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- SELECTで列を取得\\nSELECT\\n  -- 値の列\\n  val,\\n  -- SUMで累積合計を計算\\n  SUM(val) OVER (ORDER BY val) AS running\\n-- データソースを指定\\nFROM (SELECT 1 AS val UNION ALL SELECT 2 UNION ALL SELECT 3);",
        "holeyCode": "-- SELECTで列を取得\\n___\\n  -- 値の列\\n  ___,\\n  -- SUMで累積合計を計算\\n  SUM(val) OVER (ORDER BY val) AS ___\\n-- データソースを指定\\nFROM (SELECT ___ AS val UNION ALL SELECT 2 UNION ALL SELECT 3);",
        "correctLines": [
          "-- SELECTで列を取得",
          "SELECT",
          "  -- 値の列",
          "  val,",
          "  -- SUMで累積合計を計算",
          "  SUM(val) OVER (ORDER BY val) AS running",
          "-- データソースを指定",
          "FROM (SELECT 1 AS val UNION ALL SELECT 2 UNION ALL SELECT 3);"
        ],
        "lineHints": [
          null,
          "SUM で累積合計を計算します。",
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "functions": [
            "SUM",
            "AVG",
            "COUNT"
          ],
          "others": ["SELECT", "val", "FROM", "running", "1"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1|1\
2|3\
3|6\
"
          }
        ]
      },
    {
        "title": "CASE WHEN",
        "description": "条件分岐で値を変換しましょう。",
        "difficulty": "hard",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "CASE WHEN とは？",
            "content": "# 条件分岐\\n\\n**CASE WHEN** で条件に応じた値を返します。\\n\\n```sql\\nSELECT name,\\n  CASE\\n    WHEN score >= 90 THEN 'A'\\n    WHEN score >= 80 THEN 'B'\\n    ELSE 'C'\\n  END AS grade\\nFROM students;\\n```"
          },
          {
            "title": "シンプルCASE",
            "content": "# 等価比較\\n\\n```sql\\nCASE status\\n  WHEN 1 THEN 'アクティブ'\\n  WHEN 0 THEN '非アクティブ'\\nEND\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- SELECTで取得\\nSELECT\\n  -- CASEで条件分岐\\n  CASE WHEN 1 > 0 THEN 'はい' ELSE 'いいえ' END AS result;",
        "holeyCode": "-- SELECTで取得\\n___\\n  -- CASEで条件分岐\\n  CASE WHEN ___ > 0 THEN 'はい' ELSE 'いいえ' END AS result;",
        "correctLines": [
          "-- SELECTで取得",
          "SELECT",
          "  -- CASEで条件分岐",
          "  CASE WHEN 1 > 0 THEN 'はい' ELSE 'いいえ' END AS result;"
        ],
        "lineHints": [
          null,
          "CASE で条件分岐します。",
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "CASE",
            "IF",
            "SWITCH"
          ],
          "others": ["SELECT", "1"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "はい\
"
          }
        ]
      },
    {
        "title": "COALESCE",
        "description": "NULLを別の値に置換しましょう。",
        "difficulty": "hard",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "COALESCE とは？",
            "content": "# 最初の非NULLを返す\\n\\n**COALESCE** は、引数の中で最初のNULLでない値を返します。\\n\\n```sql\\nSELECT COALESCE(nickname, name, '匿名') AS display_name\\nFROM users;\\n```"
          },
          {
            "title": "デフォルト値",
            "content": "# NULLの代わりに\\n\\n```sql\\nSELECT COALESCE(phone, 'N/A') FROM contacts;\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- COALESCEで最初の非NULLを返す\\nSELECT COALESCE(NULL, NULL, 'デフォルト') AS val;",
        "holeyCode": "-- COALESCEで最初の非NULLを返す\\nSELECT COALESCE(NULL, NULL, 'デフォルト') AS ___;",
        "correctLines": [
          "-- COALESCEで最初の非NULLを返す",
          "SELECT COALESCE(NULL, NULL, 'デフォルト') AS val;"
        ],
        "lineHints": [
          null,
          "COALESCE で最初の非NULLを返します。"
        ],
        "candidates": {
          "functions": [
            "COALESCE",
            "IFNULL",
            "NVL"
          ],
          "others": ["val"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "デフォルト\
"
          }
        ]
      },
    {
        "title": "INSERT 文",
        "description": "テーブルにデータを挿入しましょう。",
        "difficulty": "hard",
        "orderIndex": 7,
        "tutorialSlides": [
          {
            "title": "INSERT（インサート）とは？",
            "content": "# 行を追加\\n\\n**INSERT**（インサート＝「挿入する」）でテーブルに新しいデータを追加します。\\n\\n**たとえば：** 新しいユーザーが登録したとき、名簿に名前を追加するようなイメージです。"
          },
          {
            "title": "INSERT の使い方",
            "content": "# INSERT INTO テーブル VALUES (値)\\n\\n**コード例：**\\n```sql\\nINSERT INTO users (name, email)\\nVALUES ('アリス', 'alice@example.com');\\n```\\n\\n**このコードは何をしているの？**\\n- usersテーブルに\\n- 名前がアリス、メールがalice@example.comの人を追加"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- CREATE TABLEでテーブルを作成\\nCREATE TABLE test(x TEXT);\\n-- INSERTでデータを挿入\\nINSERT INTO test VALUES ('こんにちは');\\n-- SELECTでデータを取得\\nSELECT * FROM test;",
        "holeyCode": "-- CREATE TABLEでテーブルを作成\\nCREATE TABLE test(x ___);\\n-- INSERTでデータを挿入\\nINSERT INTO test VALUES ('___');\\n-- SELECTでデータを取得\\nSELECT * FROM ___;",
        "correctLines": [
          "-- CREATE TABLEでテーブルを作成",
          "CREATE TABLE test(x TEXT);",
          "-- INSERTでデータを挿入",
          "INSERT INTO test VALUES ('こんにちは');",
          "-- SELECTでデータを取得",
          "SELECT * FROM test;"
        ],
        "lineHints": [
          null,
          "INSERT でデータを挿入します。",
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "INSERT",
            "ADD",
            "PUT"
          ],
          "others": ["CREATE", "SELECT", "TEXT", "hello", "test", "こんにちは"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\
"
          }
        ]
      },
    {
        "title": "UPDATE 文",
        "description": "既存のデータを更新しましょう。",
        "difficulty": "hard",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "UPDATE（アップデート）とは？",
            "content": "# 行を更新（こうしん）\\n\\n**UPDATE**（アップデート＝「更新する」）で既存のデータを変更します。\\n\\n**たとえば：** 引っ越ししたユーザーの住所を新しいものに書き換えるようなイメージです。"
          },
          {
            "title": "UPDATE の使い方と注意点",
            "content": "# WHERE を忘れずに！\\n\\n**コード例：**\\n```sql\\nUPDATE users\\nSET email = 'new@example.com'\\nWHERE id = 1;\\n```\\n\\n**注意！** WHEREを書かないと全部のデータが変更されてしまいます！必ず条件をつけましょう。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- CREATE TABLEでテーブルを作成\\nCREATE TABLE test(x TEXT);\\n-- INSERTでデータを挿入\\nINSERT INTO test VALUES ('古い');\\n-- UPDATEでデータを更新\\nUPDATE test SET x = '新しい';\\n-- SELECTでデータを取得\\nSELECT * FROM test;",
        "holeyCode": "-- CREATE TABLEでテーブルを作成\\nCREATE TABLE test(x ___);\\n-- INSERTでデータを挿入\\nINSERT INTO test VALUES ('___');\\n-- UPDATEでデータを更新\\nUPDATE test SET x = '___';\\n-- SELECTでデータを取得\\nSELECT * FROM ___;",
        "correctLines": [
          "-- CREATE TABLEでテーブルを作成",
          "CREATE TABLE test(x TEXT);",
          "-- INSERTでデータを挿入",
          "INSERT INTO test VALUES ('古い');",
          "-- UPDATEでデータを更新",
          "UPDATE test SET x = '新しい';",
          "-- SELECTでデータを取得",
          "SELECT * FROM test;"
        ],
        "lineHints": [
          null,
          "UPDATE でデータを更新します。",
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "UPDATE",
            "MODIFY",
            "CHANGE"
          ],
          "others": ["CREATE", "INSERT", "SELECT", "TEXT", "old", "new", "test", "古い", "新しい"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "新しい\
"
          }
        ]
      },
    {
        "title": "DELETE 文",
        "description": "データを削除しましょう。",
        "difficulty": "hard",
        "orderIndex": 9,
        "tutorialSlides": [
          {
            "title": "DELETE（デリート）とは？",
            "content": "# 行を削除（さくじょ）\\n\\n**DELETE**（デリート＝「削除する」）でテーブルからデータを消します。\\n\\n**たとえば：** 退会したユーザーのデータを名簿から消すようなイメージです。"
          },
          {
            "title": "DELETE の使い方と注意点",
            "content": "# WHERE を忘れずに！\\n\\n**コード例：**\\n```sql\\nDELETE FROM users WHERE id = 1;\\n```\\n\\n**注意！** WHEREを書かないと全部のデータが消えてしまいます！UPDATEと同じく、必ず条件をつけましょう。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- CREATE TABLEでテーブルを作成\\nCREATE TABLE test(x INT);\\n-- INSERTでデータを挿入\\nINSERT INTO test VALUES (1), (2), (3);\\n-- DELETEでデータを削除\\nDELETE FROM test WHERE x = 2;\\n-- SELECTでデータを取得\\nSELECT * FROM test;",
        "holeyCode": "-- CREATE TABLEでテーブルを作成\\nCREATE TABLE test(x ___);\\n-- INSERTでデータを挿入\\nINSERT INTO test VALUES (___), (2), (3);\\n-- DELETEでデータを削除\\nDELETE FROM test WHERE x = ___;\\n-- SELECTでデータを取得\\nSELECT * FROM ___;",
        "correctLines": [
          "-- CREATE TABLEでテーブルを作成",
          "CREATE TABLE test(x INT);",
          "-- INSERTでデータを挿入",
          "INSERT INTO test VALUES (1), (2), (3);",
          "-- DELETEでデータを削除",
          "DELETE FROM test WHERE x = 2;",
          "-- SELECTでデータを取得",
          "SELECT * FROM test;"
        ],
        "lineHints": [
          null,
          "DELETE でデータを削除します。",
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "DELETE",
            "REMOVE",
            "DROP"
          ],
          "others": ["CREATE", "INSERT", "SELECT", "INT", "1", "2", "test"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\
3\
"
          }
        ]
      },
    {
        "title": "GROUP_CONCAT",
        "description": "グループの値を結合しましょう。",
        "difficulty": "hard",
        "orderIndex": 10,
        "tutorialSlides": [
          {
            "title": "GROUP_CONCAT とは？",
            "content": "# 値を文字列結合\\n\\n**GROUP_CONCAT** で、グループ内の値を1つの文字列に結合します。\\n\\n```sql\\nSELECT category, GROUP_CONCAT(name, ', ')\\nFROM products\\nGROUP BY category;\\n```"
          },
          {
            "title": "区切り文字",
            "content": "# デフォルトはカンマ\\n\\n```sql\\nGROUP_CONCAT(name, '-')  -- ハイフン区切り\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- SELECT GROUP_CONCAT と入力して値を結合\\nSELECT GROUP_CONCAT(val, '-') FROM",
        "holeyCode": "-- SELECT GROUP_CONCAT と入力して値を結合\\nSELECT GROUP_CONCAT(val, '-') ___",
        "correctLines": [
          "-- SELECT GROUP_CONCAT と入力して値を結合",
          "SELECT GROUP_CONCAT(val, '-') FROM"
        ],
        "lineHints": [
          null,
          "GROUP_CONCAT で値を結合します。"
        ],
        "candidates": {
          "functions": [
            "GROUP_CONCAT",
            "STRING_AGG",
            "CONCAT"
          ],
          "others": ["SELECT", "GROUP_CONCAT(val, '-') FROM", "FROM"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "A-B-C\
"
          }
        ]
      }
  ]
}

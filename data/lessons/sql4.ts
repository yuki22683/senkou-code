export const sql4Data = {
  "language": "sql",
  "lessonId": "sql-4",
  "lessonTitle": "SQL IV - CTEとウィンドウ関数",
  "lessonDescription": "SQLの高度な分析機能を学びます。CTE、ウィンドウ関数、データ操作など、実務で使える技術を身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 4,
  "tutorialSlides": [
    {
      "title": "CTE（共通テーブル式）",
      "content": "`WITH` 句で一時的なテーブルを定義できます。\\n\\n```sql\\nWITH high_scores AS (\\n  SELECT * FROM students WHERE score >= 80\\n)\\nSELECT * FROM high_scores;\\n```\\n\\n複雑なクエリを読みやすく分割できます。\\n\\n複数のCTEをカンマで区切って定義することも可能です。"
    },
    {
      "title": "ウィンドウ関数（ROW_NUMBER）",
      "content": "`ROW_NUMBER()` で行に連番を振ります。\\n\\n```sql\\nSELECT name, score,\\n  ROW_NUMBER() OVER (ORDER BY score DESC) AS rank\\nFROM students;\\n\\n-- 結果例:\\n-- 田中 | 95 | 1\\n-- 鈴木 | 88 | 2\\n-- 佐藤 | 85 | 3\\n```\\n\\n`OVER (ORDER BY ...)` で順序を指定します。"
    },
    {
      "title": "RANK と DENSE_RANK",
      "content": "同じ値に同じ順位を付ける関数です。\\n\\n```sql\\n-- RANK: 同順位後にギャップあり\\n-- 1, 1, 3, 4 ...\\n\\n-- DENSE_RANK: ギャップなし\\n-- 1, 1, 2, 3 ...\\n\\nSELECT score,\\n  RANK() OVER (ORDER BY score DESC) AS rnk,\\n  DENSE_RANK() OVER (ORDER BY score DESC) AS dense_rnk\\nFROM students;\\n```"
    },
    {
      "title": "累積計算（SUM OVER）",
      "content": "`SUM() OVER` で累積合計を計算します。\\n\\n```sql\\nSELECT date, amount,\\n  SUM(amount) OVER (ORDER BY date) AS running_total\\nFROM sales;\\n\\n-- 結果例:\\n-- 2024-01-01 | 100 | 100\\n-- 2024-01-02 | 200 | 300\\n-- 2024-01-03 | 150 | 450\\n```\\n\\n`AVG`, `COUNT`, `MAX`, `MIN` も同様に使えます。"
    },
    {
      "title": "データ操作（INSERT/UPDATE/DELETE）",
      "content": "データを追加・更新・削除する文です。\\n\\n```sql\\n-- 挿入\\nINSERT INTO users (name, age) VALUES ('太郎', 25);\\n\\n-- 更新\\nUPDATE users SET age = 26 WHERE name = '太郎';\\n\\n-- 削除\\nDELETE FROM users WHERE age < 18;\\n```\\n\\n`WHERE` を忘れると全行に影響するので注意！"
    },
    {
      "title": "GROUP_CONCAT / COALESCE",
      "content": "便利な関数を紹介します。\\n\\n```sql\\n-- GROUP_CONCAT: 値を連結\\nSELECT GROUP_CONCAT(name, ', ') FROM users;\\n-- => '太郎, 花子, 次郎'\\n\\n-- COALESCE: 最初の非NULLを返す\\nSELECT COALESCE(nickname, name) FROM users;\\n```\\n\\n`GROUP_CONCAT` はSQLiteやMySQLで使用可能です。"
    }
  ],
  "exercises": [
    {
      "title": "CTE（WITH句）",
      "correctCode": "-- WITHでCTEを定義\\nWITH nums AS (\\n  -- データを作成\\n  SELECT 1 AS n UNION SELECT 2 UNION SELECT 3\\n)\\n-- CTEからデータを取得\\nSELECT * FROM nums;",
      "holeyCode": "-- WITHでCTEを定義\\nWITH ___ AS (\\n  -- データを作成\\n  SELECT ___ AS ___ UNION SELECT ___ UNION SELECT ___\\n___\\n-- CTEからデータを取得\\nSELECT ___ FROM ___;",
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
          "CTEに名前を付けてASで定義を開始します。",
          null,
          "UNION で複数の値を結合して仮想テーブルを作成します。",
          "CTEの定義を閉じる括弧です。",
          null,
          "定義したCTEから全ての列を取得します。"
        ],
        "candidates": {
          "keywords": [
            "WITH",
            "AS",
            "FROM"
          ],
          "others": ["nums", "1", "n", "2", "3", ")", "*"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n2\\n3\\n"
          }
        ]
      },
    {
      "title": "ROW_NUMBER()",
      "correctCode": "-- SELECTで列を取得\\nSELECT\\n  -- 値の列\\n  val,\\n  -- ROW_NUMBERで連番を振る\\n  ROW_NUMBER() OVER (ORDER BY val) AS rn\\n-- データソースを指定\\nFROM (SELECT 'A' AS val UNION SELECT 'B' UNION SELECT 'C');",
      "holeyCode": "-- SELECTで列を取得\\n___\\n  -- 値の列\\n  ___,\\n  -- ROW_NUMBERで連番を振る\\n  ___() OVER (ORDER BY ___) AS ___\\n-- データソースを指定\\nFROM (SELECT '___' AS ___ UNION SELECT '___' UNION SELECT '___');",
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
          "データを取得するためのキーワードです。",
          null,
          "取得する列名を指定します。",
          null,
          "行に連番を振るウィンドウ関数を使います。",
          null,
          "サブクエリで値と列名を定義します。"
        ],
        "candidates": {
          "functions": [
            "ROW_NUMBER",
            "RANK",
            "DENSE_RANK"
          ],
          "others": ["SELECT", "val", "rn", "A", "B", "C"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "A|1\\nB|2\\nC|3\\n"
          }
        ]
      },
    {
      "title": "RANK()",
      "correctCode": "-- SELECTで列を取得\\nSELECT\\n  -- 値の列\\n  val,\\n  -- RANKで順位を付ける\\n  RANK() OVER (ORDER BY val) AS rnk\\n-- データソースを指定\\nFROM (SELECT 1 AS val UNION ALL SELECT 1 UNION ALL SELECT 2);",
      "holeyCode": "-- SELECTで列を取得\\n___\\n  -- 値の列\\n  ___,\\n  -- RANKで順位を付ける\\n  ___() OVER (ORDER BY ___) AS ___\\n-- データソースを指定\\nFROM (SELECT ___ AS ___ UNION ALL SELECT ___ UNION ALL SELECT ___);",
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
          "データを取得するためのキーワードです。",
          null,
          "取得する列名を指定します。",
          null,
          "同じ値には同じ順位を付けるウィンドウ関数です。",
          null,
          "サブクエリで重複を含む値を定義します。"
        ],
        "candidates": {
          "functions": [
            "RANK",
            "ROW_NUMBER",
            "DENSE_RANK"
          ],
          "others": ["SELECT", "val", "rnk", "1", "2"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1|1\\n1|1\\n2|3\\n"
          }
        ]
      },
    {
      "title": "SUM() OVER",
      "correctCode": "-- SELECTで列を取得\\nSELECT\\n  -- 値の列\\n  val,\\n  -- SUMで累積合計を計算\\n  SUM(val) OVER (ORDER BY val) AS running\\n-- データソースを指定\\nFROM (SELECT 1 AS val UNION ALL SELECT 2 UNION ALL SELECT 3);",
      "holeyCode": "-- SELECTで列を取得\\n___\\n  -- 値の列\\n  ___,\\n  -- SUMで累積合計を計算\\n  ___(___) OVER (ORDER BY ___) AS ___\\n-- データソースを指定\\nFROM (SELECT ___ AS ___ UNION ALL SELECT ___ UNION ALL SELECT ___);",
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
          "データを取得するためのキーワードです。",
          null,
          "取得する列名を指定します。",
          null,
          "累積合計を計算する集約関数をOVER句と組み合わせます。",
          null,
          "サブクエリで連続した値を定義します。"
        ],
        "candidates": {
          "functions": [
            "SUM",
            "AVG",
            "COUNT"
          ],
          "others": ["SELECT", "val", "running", "1", "2", "3"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1|1\\n2|3\\n3|6\\n"
          }
        ]
      },
    {
      "title": "CASE WHEN",
      "correctCode": "-- SELECTで取得\\nSELECT\\n  -- CASEで条件分岐\\n  CASE WHEN 1 > 0 THEN 'はい' ELSE 'いいえ' END AS result;",
      "holeyCode": "-- SELECTで取得\\n___\\n  -- CASEで条件分岐\\n  ___ WHEN ___ > ___ THEN '___' ELSE '___' END AS ___;",
      "correctLines": [
          "-- SELECTで取得",
          "SELECT",
          "  -- CASEで条件分岐",
          "  CASE WHEN 1 > 0 THEN 'はい' ELSE 'いいえ' END AS result;"
        ],
      "lineHints": [
          null,
          "データを取得するためのキーワードです。",
          null,
          "条件分岐で値に応じて異なる結果を返します。"
        ],
        "candidates": {
          "keywords": [
            "CASE",
            "IF",
            "SWITCH"
          ],
          "others": ["SELECT", "1", "0", "はい", "いいえ", "result"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "はい\\n"
          }
        ]
      },
    {
      "title": "COALESCE",
      "correctCode": "-- COALESCEで最初の非NULLを返す\\nSELECT COALESCE(NULL, NULL, 'デフォルト') AS val;",
      "holeyCode": "-- COALESCEで最初の非NULLを返す\\nSELECT ___(NULL, NULL, '___') AS ___;",
      "correctLines": [
          "-- COALESCEで最初の非NULLを返す",
          "SELECT COALESCE(NULL, NULL, 'デフォルト') AS val;"
        ],
      "lineHints": [
          null,
          "複数の値から最初のNULLでない値を返す関数です。"
        ],
        "candidates": {
          "functions": [
            "COALESCE",
            "IFNULL",
            "NVL"
          ],
          "others": ["デフォルト", "val"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "デフォルト\\n"
          }
        ]
      },
    {
      "title": "INSERT 文",
      "correctCode": "-- CREATE TABLEでテーブルを作成\\nCREATE TABLE test(x TEXT);\\n-- INSERTでデータを挿入\\nINSERT INTO test VALUES ('こんにちは');\\n-- SELECTでデータを取得\\nSELECT * FROM test;",
      "holeyCode": "-- CREATE TABLEでテーブルを作成\\nCREATE TABLE ___(___ ___);\\n-- INSERTでデータを挿入\\n___ INTO ___ VALUES ('___');\\n-- SELECTでデータを取得\\nSELECT ___ FROM ___;",
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
          "テーブルの構造を定義します（名前、列、型）。",
          null,
          "テーブルにデータを追加するDML文です。",
          null,
          "挿入したデータを確認するためテーブルから取得します。"
        ],
        "candidates": {
          "keywords": [
            "INSERT",
            "ADD",
            "PUT"
          ],
          "others": ["test", "x", "TEXT", "こんにちは", "*"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      },
    {
      "title": "UPDATE 文",
      "correctCode": "-- CREATE TABLEでテーブルを作成\\nCREATE TABLE test(x TEXT);\\n-- INSERTでデータを挿入\\nINSERT INTO test VALUES ('古い');\\n-- UPDATEでデータを更新\\nUPDATE test SET x = '新しい';\\n-- SELECTでデータを取得\\nSELECT * FROM test;",
      "holeyCode": "-- CREATE TABLEでテーブルを作成\\nCREATE TABLE ___(___ ___);\\n-- INSERTでデータを挿入\\nINSERT INTO ___ VALUES ('___');\\n-- UPDATEでデータを更新\\n___ ___ SET ___ = '___';\\n-- SELECTでデータを取得\\nSELECT ___ FROM ___;",
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
          "テーブルの構造を定義します（名前、列、型）。",
          null,
          "初期データをテーブルに追加します。",
          null,
          "既存のデータを変更するDML文です。",
          null,
          "更新されたデータを確認するためテーブルから取得します。"
        ],
        "candidates": {
          "keywords": [
            "UPDATE",
            "MODIFY",
            "CHANGE"
          ],
          "others": ["test", "x", "TEXT", "古い", "新しい", "*"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "新しい\\n"
          }
        ]
      },
    {
      "title": "DELETE 文",
      "correctCode": "-- CREATE TABLEでテーブルを作成\\nCREATE TABLE test(x INT);\\n-- INSERTでデータを挿入\\nINSERT INTO test VALUES (1), (2), (3);\\n-- DELETEでデータを削除\\nDELETE FROM test WHERE x = 2;\\n-- SELECTでデータを取得\\nSELECT * FROM test;",
      "holeyCode": "-- CREATE TABLEでテーブルを作成\\nCREATE TABLE ___(___ ___);\\n-- INSERTでデータを挿入\\nINSERT INTO ___ VALUES (___), (___), (___);\\n-- DELETEでデータを削除\\n___ FROM ___ WHERE ___ = ___;\\n-- SELECTでデータを取得\\nSELECT ___ FROM ___;",
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
          "テーブルの構造を定義します（名前、列、型）。",
          null,
          "複数のデータをまとめてテーブルに追加します。",
          null,
          "条件に一致するデータを削除するDML文です。",
          null,
          "削除後のデータを確認するためテーブルから取得します。"
        ],
        "candidates": {
          "keywords": [
            "DELETE",
            "REMOVE",
            "DROP"
          ],
          "others": ["test", "x", "INT", "1", "2", "3", "*"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n3\\n"
          }
        ]
      },
    {
      "title": "GROUP_CONCAT",
      "correctCode": "-- SELECT GROUP_CONCAT と入力して値を結合\\nSELECT GROUP_CONCAT(val, '-') FROM (SELECT 'A' AS val UNION SELECT 'B' UNION SELECT 'C');",
      "holeyCode": "-- SELECT GROUP_CONCAT と入力して値を結合\\nSELECT ___(___, '___') FROM (SELECT '___' AS ___ UNION SELECT '___' UNION SELECT '___');",
      "correctLines": [
          "-- SELECT GROUP_CONCAT と入力して値を結合",
          "SELECT GROUP_CONCAT(val, '-') FROM (SELECT 'A' AS val UNION SELECT 'B' UNION SELECT 'C');"
        ],
      "lineHints": [
          null,
          "複数の値を区切り文字で連結する集約関数です。"
        ],
        "candidates": {
          "functions": [
            "GROUP_CONCAT",
            "STRING_AGG",
            "CONCAT"
          ],
          "others": ["val", "-", "A", "B", "C"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "A-B-C\\n"
          }
        ]
      }
  ]
}

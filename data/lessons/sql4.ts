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
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "WITH",
            "AS",
            "FROM"
          ],
          "others": ["SELECT", "1", ")", "nums", ")"]
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
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "ROW_NUMBER",
            "RANK",
            "DENSE_RANK"
          ],
          "others": ["SELECT", "val", "FROM", "rn", "C", "SELECT", "rn"]
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
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "RANK",
            "ROW_NUMBER",
            "DENSE_RANK"
          ],
          "others": ["SELECT", "val", "FROM", "rnk", "1", "SELECT", "rnk"]
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
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "SUM",
            "AVG",
            "COUNT"
          ],
          "others": ["SELECT", "val", "FROM", "running", "1", "SELECT", "running"]
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
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "CASE",
            "IF",
            "SWITCH"
          ],
          "others": ["SELECT", "1", "SELECT"]
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
            "expected_output": "デフォルト\\n"
          }
        ]
      },
    {
      "title": "INSERT 文",
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
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
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
            "expected_output": "こんにちは\\n"
          }
        ]
      },
    {
      "title": "UPDATE 文",
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
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
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
            "expected_output": "新しい\\n"
          }
        ]
      },
    {
      "title": "DELETE 文",
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
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
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
            "expected_output": "1\\n3\\n"
          }
        ]
      },
    {
      "title": "GROUP_CONCAT",
      "correctCode": "-- SELECT GROUP_CONCAT と入力して値を結合\\nSELECT GROUP_CONCAT(val, '-') FROM (SELECT 'A' AS val UNION SELECT 'B' UNION SELECT 'C');",
      "holeyCode": "-- SELECT GROUP_CONCAT と入力して値を結合\\nSELECT GROUP_CONCAT(val, '-') ___ (SELECT 'A' AS val UNION SELECT 'B' UNION SELECT '___');",
      "correctLines": [
          "-- SELECT GROUP_CONCAT と入力して値を結合",
          "SELECT GROUP_CONCAT(val, '-') FROM (SELECT 'A' AS val UNION SELECT 'B' UNION SELECT 'C');"
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
          "others": ["SELECT", "FROM", "C"]
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

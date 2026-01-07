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
          "title": "CTE とは？",
          "content": "# 共通テーブル式\n\n**WITH** 句で名前付きサブクエリを定義できます。\n\n```sql\nWITH high_sales AS (\n  SELECT * FROM orders WHERE total > 1000\n)\nSELECT * FROM high_sales;\n```"
        },
        {
          "title": "複数のCTE",
          "content": "# カンマで区切る\n\n```sql\nWITH\n  cte1 AS (SELECT ...),\n  cte2 AS (SELECT ...)\nSELECT * FROM cte1 JOIN cte2;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "WITH nums AS (\n  SELECT 1 AS n UNION SELECT 2 UNION SELECT 3\n)\nSELECT * FROM nums;",
      "holeyCode": "___ nums AS (\n  SELECT 1 AS n UNION SELECT 2 UNION SELECT 3\n)\nSELECT * FROM nums;",
      "correctLines": [
        "WITH nums AS (",
        "  SELECT 1 AS n UNION SELECT 2 UNION SELECT 3",
        ")",
        "SELECT * FROM nums;"
      ],
      "lineHints": [
        "WITH でCTEを定義します。",
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["WITH", "AS", "FROM"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n2\n3\n"
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
          "title": "ROW_NUMBER とは？",
          "content": "# 行番号を付ける\n\n**ROW_NUMBER()** は、各行に一意の番号を振ります。\n\n```sql\nSELECT name,\n       ROW_NUMBER() OVER (ORDER BY score DESC) AS rank\nFROM students;\n```"
        },
        {
          "title": "PARTITION BY",
          "content": "# グループごとに番号\n\n```sql\nROW_NUMBER() OVER (\n  PARTITION BY department\n  ORDER BY salary DESC\n)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT\n  val,\n  ROW_NUMBER() OVER (ORDER BY val) AS rn\nFROM (SELECT 'A' AS val UNION SELECT 'B' UNION SELECT 'C');",
      "holeyCode": "SELECT\n  val,\n  ___() OVER (ORDER BY val) AS rn\nFROM (SELECT 'A' AS val UNION SELECT 'B' UNION SELECT 'C');",
      "correctLines": [
        "SELECT",
        "  val,",
        "  ROW_NUMBER() OVER (ORDER BY val) AS rn",
        "FROM (SELECT 'A' AS val UNION SELECT 'B' UNION SELECT 'C');"
      ],
      "lineHints": [
        null,
        null,
        "ROW_NUMBER で連番を振ります。",
        null
      ],
      "candidates": {
        "functions": ["ROW_NUMBER", "RANK", "DENSE_RANK"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "A|1\nB|2\nC|3\n"
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
          "title": "RANK とは？",
          "content": "# 同順位を許容\n\n**RANK()** は、同じ値に同じ順位を付け、次の順位を飛ばします。\n\n```sql\n-- 90, 90, 80 → 1, 1, 3\nRANK() OVER (ORDER BY score DESC)\n```"
        },
        {
          "title": "DENSE_RANK",
          "content": "# 順位を飛ばさない\n\n```sql\n-- 90, 90, 80 → 1, 1, 2\nDENSE_RANK() OVER (ORDER BY score DESC)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT\n  val,\n  RANK() OVER (ORDER BY val) AS rnk\nFROM (SELECT 1 AS val UNION ALL SELECT 1 UNION ALL SELECT 2);",
      "holeyCode": "SELECT\n  val,\n  ___() OVER (ORDER BY val) AS rnk\nFROM (SELECT 1 AS val UNION ALL SELECT 1 UNION ALL SELECT 2);",
      "correctLines": [
        "SELECT",
        "  val,",
        "  RANK() OVER (ORDER BY val) AS rnk",
        "FROM (SELECT 1 AS val UNION ALL SELECT 1 UNION ALL SELECT 2);"
      ],
      "lineHints": [
        null,
        null,
        "RANK で順位を付けます。",
        null
      ],
      "candidates": {
        "functions": ["RANK", "ROW_NUMBER", "DENSE_RANK"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1|1\n1|1\n2|3\n"
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
          "title": "ウィンドウ集計",
          "content": "# グループ化せずに集計\n\n**SUM() OVER** で、行ごとに累積合計を計算できます。\n\n```sql\nSELECT date, amount,\n       SUM(amount) OVER (ORDER BY date) AS running_total\nFROM sales;\n```"
        },
        {
          "title": "ウィンドウフレーム",
          "content": "# 範囲を指定\n\n```sql\nSUM(amount) OVER (\n  ORDER BY date\n  ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW\n)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT\n  val,\n  SUM(val) OVER (ORDER BY val) AS running\nFROM (SELECT 1 AS val UNION ALL SELECT 2 UNION ALL SELECT 3);",
      "holeyCode": "SELECT\n  val,\n  ___(val) OVER (ORDER BY val) AS running\nFROM (SELECT 1 AS val UNION ALL SELECT 2 UNION ALL SELECT 3);",
      "correctLines": [
        "SELECT",
        "  val,",
        "  SUM(val) OVER (ORDER BY val) AS running",
        "FROM (SELECT 1 AS val UNION ALL SELECT 2 UNION ALL SELECT 3);"
      ],
      "lineHints": [
        null,
        null,
        "SUM で累積合計を計算します。",
        null
      ],
      "candidates": {
        "functions": ["SUM", "AVG", "COUNT"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1|1\n2|3\n3|6\n"
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
          "content": "# 条件分岐\n\n**CASE WHEN** で条件に応じた値を返します。\n\n```sql\nSELECT name,\n  CASE\n    WHEN score >= 90 THEN 'A'\n    WHEN score >= 80 THEN 'B'\n    ELSE 'C'\n  END AS grade\nFROM students;\n```"
        },
        {
          "title": "シンプルCASE",
          "content": "# 等価比較\n\n```sql\nCASE status\n  WHEN 1 THEN 'Active'\n  WHEN 0 THEN 'Inactive'\nEND\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT\n  CASE WHEN 1 > 0 THEN 'yes' ELSE 'no' END AS result;",
      "holeyCode": "SELECT\n  ___ WHEN 1 > 0 THEN 'yes' ELSE 'no' END AS result;",
      "correctLines": [
        "SELECT",
        "  CASE WHEN 1 > 0 THEN 'yes' ELSE 'no' END AS result;"
      ],
      "lineHints": [
        null,
        "CASE で条件分岐します。"
      ],
      "candidates": {
        "keywords": ["CASE", "IF", "SWITCH"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "yes\n"
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
          "content": "# 最初の非NULLを返す\n\n**COALESCE** は、引数の中で最初のNULLでない値を返します。\n\n```sql\nSELECT COALESCE(nickname, name, 'Anonymous') AS display_name\nFROM users;\n```"
        },
        {
          "title": "デフォルト値",
          "content": "# NULLの代わりに\n\n```sql\nSELECT COALESCE(phone, 'N/A') FROM contacts;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT COALESCE(NULL, NULL, 'default') AS val;",
      "holeyCode": "SELECT ___(NULL, NULL, 'default') AS val;",
      "correctLines": [
        "SELECT COALESCE(NULL, NULL, 'default') AS val;"
      ],
      "lineHints": [
        "COALESCE で最初の非NULLを返します。"
      ],
      "candidates": {
        "functions": ["COALESCE", "IFNULL", "NVL"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "default\n"
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
          "title": "INSERT とは？",
          "content": "# 行を追加\n\n**INSERT** でテーブルに新しい行を追加します。\n\n```sql\nINSERT INTO users (name, email)\nVALUES ('Alice', 'alice@example.com');\n```"
        },
        {
          "title": "複数行挿入",
          "content": "# VALUES を複数\n\n```sql\nINSERT INTO users (name)\nVALUES ('Alice'), ('Bob'), ('Carol');\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "CREATE TABLE test(x TEXT);\nINSERT INTO test VALUES ('hello');\nSELECT * FROM test;",
      "holeyCode": "CREATE TABLE test(x TEXT);\n___ INTO test VALUES ('hello');\nSELECT * FROM test;",
      "correctLines": [
        "CREATE TABLE test(x TEXT);",
        "INSERT INTO test VALUES ('hello');",
        "SELECT * FROM test;"
      ],
      "lineHints": [
        null,
        "INSERT でデータを挿入します。",
        null
      ],
      "candidates": {
        "keywords": ["INSERT", "ADD", "PUT"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "hello\n"
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
          "title": "UPDATE とは？",
          "content": "# 行を更新\n\n**UPDATE** で既存の行を変更します。\n\n```sql\nUPDATE users\nSET email = 'new@example.com'\nWHERE id = 1;\n```"
        },
        {
          "title": "WHERE を忘れずに",
          "content": "# 全行更新に注意\n\n```sql\n-- WHEREがないと全行更新！\nUPDATE users SET status = 'inactive';\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "CREATE TABLE test(x TEXT);\nINSERT INTO test VALUES ('old');\nUPDATE test SET x = 'new';\nSELECT * FROM test;",
      "holeyCode": "CREATE TABLE test(x TEXT);\nINSERT INTO test VALUES ('old');\n___ test SET x = 'new';\nSELECT * FROM test;",
      "correctLines": [
        "CREATE TABLE test(x TEXT);",
        "INSERT INTO test VALUES ('old');",
        "UPDATE test SET x = 'new';",
        "SELECT * FROM test;"
      ],
      "lineHints": [
        null,
        null,
        "UPDATE でデータを更新します。",
        null
      ],
      "candidates": {
        "keywords": ["UPDATE", "MODIFY", "CHANGE"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "new\n"
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
          "title": "DELETE とは？",
          "content": "# 行を削除\n\n**DELETE** でテーブルから行を削除します。\n\n```sql\nDELETE FROM users WHERE id = 1;\n```"
        },
        {
          "title": "全件削除",
          "content": "# TRUNCATE との違い\n\n```sql\n-- 全行削除（ログあり）\nDELETE FROM users;\n\n-- 全行削除（高速）\nTRUNCATE TABLE users;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "CREATE TABLE test(x INT);\nINSERT INTO test VALUES (1), (2), (3);\nDELETE FROM test WHERE x = 2;\nSELECT * FROM test;",
      "holeyCode": "CREATE TABLE test(x INT);\nINSERT INTO test VALUES (1), (2), (3);\n___ FROM test WHERE x = 2;\nSELECT * FROM test;",
      "correctLines": [
        "CREATE TABLE test(x INT);",
        "INSERT INTO test VALUES (1), (2), (3);",
        "DELETE FROM test WHERE x = 2;",
        "SELECT * FROM test;"
      ],
      "lineHints": [
        null,
        null,
        "DELETE でデータを削除します。",
        null
      ],
      "candidates": {
        "keywords": ["DELETE", "REMOVE", "DROP"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n3\n"
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
          "content": "# 値を文字列結合\n\n**GROUP_CONCAT** で、グループ内の値を1つの文字列に結合します。\n\n```sql\nSELECT category, GROUP_CONCAT(name, ', ')\nFROM products\nGROUP BY category;\n```"
        },
        {
          "title": "区切り文字",
          "content": "# デフォルトはカンマ\n\n```sql\nGROUP_CONCAT(name, '-')  -- ハイフン区切り\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT GROUP_CONCAT(val, '-') FROM\n  (SELECT 'A' AS val UNION SELECT 'B' UNION SELECT 'C');",
      "holeyCode": "SELECT ___(val, '-') FROM\n  (SELECT 'A' AS val UNION SELECT 'B' UNION SELECT 'C');",
      "correctLines": [
        "SELECT GROUP_CONCAT(val, '-') FROM",
        "  (SELECT 'A' AS val UNION SELECT 'B' UNION SELECT 'C');"
      ],
      "lineHints": [
        "GROUP_CONCAT で値を結合します。",
        null
      ],
      "candidates": {
        "functions": ["GROUP_CONCAT", "STRING_AGG", "CONCAT"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "A-B-C\n"
        }
      ]
    }
  ]
}

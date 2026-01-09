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
          "image": "/illustrations/3d/robot.png",
          "content": "# 共通テーブル式\n\n**WITH** 句で名前付きサブクエリを定義できます。\n\n```sql\nWITH high_sales AS (\n  SELECT * FROM orders WHERE total > 1000\n)\nSELECT * FROM high_sales;\n```"
        },
        {
          "title": "複数のCTE",
          "image": "/illustrations/3d/robot.png",
          "content": "# カンマで区切る\n\n```sql\nWITH\n  cte1 AS (SELECT ...),\n  cte2 AS (SELECT ...)\nSELECT * FROM cte1 JOIN cte2;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- WITHでCTEを定義\nWITH nums AS (\n  SELECT 1 AS n UNION SELECT 2 UNION SELECT 3\n)\nSELECT * FROM nums;",
      "holeyCode": "// WITH と入力して、クエリに名前をつけてね\n___\n  ___\n___\n___",
      "correctLines": [
        
        
        "// WITH と入力して、クエリに名前をつけてね",
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 行番号を付ける\n\n**ROW_NUMBER()** は、各行に一意の番号を振ります。\n\n```sql\nSELECT name,\n       ROW_NUMBER() OVER (ORDER BY score DESC) AS rank\nFROM students;\n```"
        },
        {
          "title": "PARTITION BY",
          "image": "/illustrations/3d/robot.png",
          "content": "# グループごとに番号\n\n```sql\nROW_NUMBER() OVER (\n  PARTITION BY department\n  ORDER BY salary DESC\n)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT\n  val,\n  -- ROW_NUMBERで連番を振る\n  ROW_NUMBER() OVER (ORDER BY val) AS rn\nFROM (SELECT 'A' AS val UNION SELECT 'B' UNION SELECT 'C');",
      "holeyCode": "___\n  ___\n  // ROW_NUMBER と入力して番号を振ってね\n  ___\n___",
      "correctLines": [
        
        
        "SELECT",
        "  val,",
        "  // ROW_NUMBER と入力して番号を振ってね",
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 同順位を許容\n\n**RANK()** は、同じ値に同じ順位を付け、次の順位を飛ばします。\n\n```sql\n-- 90, 90, 80 → 1, 1, 3\nRANK() OVER (ORDER BY score DESC)\n```"
        },
        {
          "title": "DENSE_RANK",
          "image": "/illustrations/3d/robot.png",
          "content": "# 順位を飛ばさない\n\n```sql\n-- 90, 90, 80 → 1, 1, 2\nDENSE_RANK() OVER (ORDER BY score DESC)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT\n  val,\n  -- RANKで順位を付ける\n  RANK() OVER (ORDER BY val) AS rnk\nFROM (SELECT 1 AS val UNION ALL SELECT 1 UNION ALL SELECT 2);",
      "holeyCode": "___\n  ___\n  // RANK と入力して順位を付けてね\n  ___\n___",
      "correctLines": [
        
        
        "SELECT",
        "  val,",
        "  // RANK と入力して順位を付けてね",
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
          "image": "/illustrations/3d/robot.png",
          "content": "# グループ化せずに集計\n\n**SUM() OVER** で、行ごとに累積合計を計算できます。\n\n```sql\nSELECT date, amount,\n       SUM(amount) OVER (ORDER BY date) AS running_total\nFROM sales;\n```"
        },
        {
          "title": "ウィンドウフレーム",
          "image": "/illustrations/3d/robot.png",
          "content": "# 範囲を指定\n\n```sql\nSUM(amount) OVER (\n  ORDER BY date\n  ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW\n)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT\n  val,\n  -- SUMで累積合計を計算\n  SUM(val) OVER (ORDER BY val) AS running\nFROM (SELECT 1 AS val UNION ALL SELECT 2 UNION ALL SELECT 3);",
      "holeyCode": "___\n  ___\n  // SUM と入力して少しずつ足していってね\n  ___\n___",
      "correctLines": [
        
        
        "SELECT",
        "  val,",
        "  // SUM と入力して少しずつ足していってね",
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
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 条件分岐\n\n**CASE WHEN** で条件に応じた値を返します。\n\n```sql\nSELECT name,\n  CASE\n    WHEN score >= 90 THEN 'A'\n    WHEN score >= 80 THEN 'B'\n    ELSE 'C'\n  END AS grade\nFROM students;\n```"
        },
        {
          "title": "シンプルCASE",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 等価比較\n\n```sql\nCASE status\n  WHEN 1 THEN 'Active'\n  WHEN 0 THEN 'Inactive'\nEND\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT\n  -- CASEで条件分岐\n  CASE WHEN 1 > 0 THEN 'yes' ELSE 'no' END AS result;",
      "holeyCode": "___\n  // CASE と入力して、条件でわけてね\n  ___",
      "correctLines": [
        
        
        "SELECT",
        "  // CASE と入力して、条件でわけてね",
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 最初の非NULLを返す\n\n**COALESCE** は、引数の中で最初のNULLでない値を返します。\n\n```sql\nSELECT COALESCE(nickname, name, 'Anonymous') AS display_name\nFROM users;\n```"
        },
        {
          "title": "デフォルト値",
          "image": "/illustrations/3d/robot.png",
          "content": "# NULLの代わりに\n\n```sql\nSELECT COALESCE(phone, 'N/A') FROM contacts;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- COALESCEで最初の非NULLを返す\nSELECT COALESCE(NULL, NULL, 'default') AS val;",
      "holeyCode": "___",
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 行を追加\n\n**INSERT** でテーブルに新しい行を追加します。\n\n```sql\nINSERT INTO users (name, email)\nVALUES ('Alice', 'alice@example.com');\n```"
        },
        {
          "title": "複数行挿入",
          "image": "/illustrations/3d/robot.png",
          "content": "# VALUES を複数\n\n```sql\nINSERT INTO users (name)\nVALUES ('Alice'), ('Bob'), ('Carol');\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "CREATE TABLE test(x TEXT);\n-- INSERTでデータを挿入\nINSERT INTO test VALUES ('hello');\nSELECT * FROM test;",
      "holeyCode": "___\n// INSERT と入力して、データをいれてね\n___\n___",
      "correctLines": [
        
        
        "CREATE TABLE test(x TEXT);",
        "// INSERT と入力して、データをいれてね",
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 行を更新\n\n**UPDATE** で既存の行を変更します。\n\n```sql\nUPDATE users\nSET email = 'new@example.com'\nWHERE id = 1;\n```"
        },
        {
          "title": "WHERE を忘れずに",
          "image": "/illustrations/3d/robot.png",
          "content": "# 全行更新に注意\n\n```sql\n-- WHEREがないと全行更新！\nUPDATE users SET status = 'inactive';\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "CREATE TABLE test(x TEXT);\nINSERT INTO test VALUES ('old');\n-- UPDATEでデータを更新\nUPDATE test SET x = 'new';\nSELECT * FROM test;",
      "holeyCode": "___\n___\n// UPDATE と入力して、データを書きかえてね\n___\n___",
      "correctLines": [
        
        
        "CREATE TABLE test(x TEXT);",
        "INSERT INTO test VALUES ('old');",
        "// UPDATE と入力して、データを書きかえてね",
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 行を削除\n\n**DELETE** でテーブルから行を削除します。\n\n```sql\nDELETE FROM users WHERE id = 1;\n```"
        },
        {
          "title": "全件削除",
          "image": "/illustrations/3d/robot.png",
          "content": "# TRUNCATE との違い\n\n```sql\n-- 全行削除（ログあり）\nDELETE FROM users;\n\n-- 全行削除（高速）\nTRUNCATE TABLE users;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "CREATE TABLE test(x INT);\nINSERT INTO test VALUES (1), (2), (3);\n-- DELETEでデータを削除\nDELETE FROM test WHERE x = 2;\nSELECT * FROM test;",
      "holeyCode": "___\n___\n// DELETE と入力して、データを消しましょう\n___\n___",
      "correctLines": [
        
        
        "CREATE TABLE test(x INT);",
        "INSERT INTO test VALUES (1), (2), (3);",
        "// DELETE と入力して、データを消しましょう",
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 値を文字列結合\n\n**GROUP_CONCAT** で、グループ内の値を1つの文字列に結合します。\n\n```sql\nSELECT category, GROUP_CONCAT(name, ', ')\nFROM products\nGROUP BY category;\n```"
        },
        {
          "title": "区切り文字",
          "image": "/illustrations/3d/robot.png",
          "content": "# デフォルトはカンマ\n\n```sql\nGROUP_CONCAT(name, '-')  -- ハイフン区切り\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- GROUP_CONCATで値を結合\nSELECT GROUP_CONCAT(val, '-') FROM\n  (SELECT 'A' AS val UNION SELECT 'B' UNION SELECT 'C');",
      "holeyCode": "// GROUP_CONCAT と入力して、文字をつなげてね\n___\n  ___",
      "correctLines": [
        
        
        "// GROUP_CONCAT と入力して、文字をつなげてね",
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

export const sql2Data = {
  "language": "sql",
  "lessonId": "sql-2",
  "lessonTitle": "SQL II - テーブル操作とJOIN",
  "lessonDescription": "SQLの実践的な機能を学びます。複数テーブルの結合、集計関数、グループ化などデータベース操作の基本を身につけましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "exercises": [
    {
      "title": "WHERE で絞り込み",
      "correctCode": "-- WHEREで条件を指定\\nSELECT '見つかった' WHERE 10 > 5;",
      "holeyCode": "-- WHEREで条件を指定\\nSELECT '見つかった' WHERE ___ > 5;",
      "correctLines": [
          "-- WHEREで条件を指定",
          "SELECT '見つかった' WHERE 10 > 5;"
        ],
      "lineHints": [
          null,
          "WHERE で条件を指定します。"
        ],
        "candidates": {
          "keywords": [
            "WHERE"
          ],
          "others": ["10"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "見つかった\\n"
          }
        ]
      },
    {
      "title": "ORDER BY で並べ替え",
      "correctCode": "-- SELECT文でデータを作成\\nSELECT 1 AS num UNION SELECT 3 UNION SELECT 2\\n-- ORDERで並べ替え\\nORDER BY num;",
      "holeyCode": "-- SELECT文でデータを作成\\nSELECT ___ AS num UNION SELECT 3 UNION SELECT 2\\n-- ORDERで並べ替え\\nORDER BY ___;",
      "correctLines": [
          "-- SELECT文でデータを作成",
          "SELECT 1 AS num UNION SELECT 3 UNION SELECT 2",
          "-- ORDERで並べ替え",
          "ORDER BY num;"
        ],
      "lineHints": [
          null,
          "ORDER BY で並べ替えます。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "ORDER"
          ],
          "others": ["SELECT", "1", "num"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n2\\n3\\n"
          }
        ]
      },
    {
      "title": "LIMIT で件数制限",
      "correctCode": "-- SELECT文でデータを作成\\nSELECT 1 UNION SELECT 2 UNION SELECT 3\\n-- LIMITで件数制限\\nLIMIT 2;",
      "holeyCode": "-- SELECT文でデータを作成\\nSELECT ___ UNION SELECT 2 UNION SELECT 3\\n-- LIMITで件数制限\\nLIMIT ___;",
      "correctLines": [
          "-- SELECT文でデータを作成",
          "SELECT 1 UNION SELECT 2 UNION SELECT 3",
          "-- LIMITで件数制限",
          "LIMIT 2;"
        ],
      "lineHints": [
          null,
          "LIMIT で件数を制限します。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "LIMIT"
          ],
          "others": ["SELECT", "1", "2"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n2\\n"
          }
        ]
      },
    {
      "title": "COUNT で件数を数える",
      "correctCode": "-- COUNTで行数を数える\\nSELECT COUNT(*) FROM (SELECT 1 UNION SELECT 2 UNION SELECT 3);",
      "holeyCode": "-- COUNTで行数を数える\\nSELECT COUNT(*) FROM (SELECT ___ UNION SELECT 2 UNION SELECT 3);",
      "correctLines": [
          "-- COUNTで行数を数える",
          "SELECT COUNT(*) FROM (SELECT 1 UNION SELECT 2 UNION SELECT 3);"
        ],
      "lineHints": [
          null,
          "COUNT で行数を数えます。"
        ],
        "candidates": {
          "functions": [
            "COUNT"
          ],
          "others": ["1"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "3\\n"
          }
        ]
      },
    {
      "title": "SUM で合計を計算",
      "correctCode": "-- SUMで合計を計算\\nSELECT SUM(n) FROM (SELECT 1 AS n UNION SELECT 2 UNION SELECT 3);",
      "holeyCode": "-- SUMで合計を計算\\nSELECT SUM(n) FROM (SELECT ___ AS n UNION SELECT 2 UNION SELECT 3);",
      "correctLines": [
          "-- SUMで合計を計算",
          "SELECT SUM(n) FROM (SELECT 1 AS n UNION SELECT 2 UNION SELECT 3);"
        ],
      "lineHints": [
          null,
          "SUM で合計を計算します。"
        ],
        "candidates": {
          "functions": [
            "SUM"
          ],
          "others": ["1"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "6\\n"
          }
        ]
      },
    {
      "title": "AVG で平均を計算",
      "correctCode": "-- AVGで平均を計算\\nSELECT AVG(n) FROM (SELECT 10 AS n UNION SELECT 20 UNION SELECT 30);",
      "holeyCode": "-- AVGで平均を計算\\nSELECT AVG(n) FROM (SELECT ___ AS n UNION SELECT 20 UNION SELECT 30);",
      "correctLines": [
          "-- AVGで平均を計算",
          "SELECT AVG(n) FROM (SELECT 10 AS n UNION SELECT 20 UNION SELECT 30);"
        ],
      "lineHints": [
          null,
          "AVG で平均を計算します。"
        ],
        "candidates": {
          "functions": [
            "AVG"
          ],
          "others": ["10"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "20.0\\n"
          }
        ]
      },
    {
      "title": "GROUP BY でグループ化",
      "correctCode": "-- SELECT文でデータを取得\\nSELECT category, COUNT(*) FROM (\\n  -- カテゴリを定義\\n  SELECT 'A' AS category UNION ALL\\n  -- データを追加\\n  SELECT 'A' UNION ALL SELECT 'B'\\n-- GROUPでグループ化\\n) GROUP BY category;",
      "holeyCode": "-- SELECT文でデータを取得\\nSELECT category, COUNT(*) ___ (\\n  -- カテゴリを定義\\n  SELECT 'A' AS category UNION ___\\n  -- データを追加\\n  SELECT 'A' UNION ALL SELECT '___'\\n-- GROUPでグループ化\\n) GROUP BY ___;",
      "correctLines": [
          "-- SELECT文でデータを取得",
          "SELECT category, COUNT(*) FROM (",
          "  -- カテゴリを定義",
          "  SELECT 'A' AS category UNION ALL",
          "  -- データを追加",
          "  SELECT 'A' UNION ALL SELECT 'B'",
          "-- GROUPでグループ化",
          ") GROUP BY category;"
        ],
      "lineHints": [
          null,
          "GROUP BY でグループ化します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "GROUP"
          ],
          "others": ["SELECT", "FROM", "ALL", "B", "category", "ALL"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "A|2\\nB|1\\n"
          }
        ]
      },
    {
      "title": "HAVING でグループを絞り込み",
      "correctCode": "-- SELECT文でデータを取得\\nSELECT category, COUNT(*) AS cnt FROM (\\n  -- カテゴリを定義\\n  SELECT 'A' AS category UNION ALL\\n  -- データを追加\\n  SELECT 'A' UNION ALL SELECT 'B'\\n-- HAVINGでグループを絞り込み\\n) GROUP BY category HAVING cnt > 1;",
      "holeyCode": "-- SELECT文でデータを取得\\nSELECT category, COUNT(*) AS cnt ___ (\\n  -- カテゴリを定義\\n  SELECT 'A' AS category UNION ___\\n  -- データを追加\\n  SELECT 'A' UNION ALL SELECT '___'\\n-- HAVINGでグループを絞り込み\\n) GROUP BY category HAVING cnt > ___;",
      "correctLines": [
          "-- SELECT文でデータを取得",
          "SELECT category, COUNT(*) AS cnt FROM (",
          "  -- カテゴリを定義",
          "  SELECT 'A' AS category UNION ALL",
          "  -- データを追加",
          "  SELECT 'A' UNION ALL SELECT 'B'",
          "-- HAVINGでグループを絞り込み",
          ") GROUP BY category HAVING cnt > 1;"
        ],
      "lineHints": [
          null,
          "HAVING でグループを絞り込みます。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "HAVING"
          ],
          "others": ["SELECT", "FROM", "ALL", "B", "1", "ALL"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "A|2\\n"
          }
        ]
      },
    {
      "title": "CASE で条件分岐",
      "correctCode": "-- SELECT CASE と入力して条件分岐\\nSELECT CASE\\n  -- 条件を指定\\n  WHEN 85 >= 80 THEN '合格'\\n  -- それ以外の場合\\n  ELSE '失敗'\\n-- ENDで終了\\nEND;",
      "holeyCode": "-- SELECT CASE と入力して条件分岐\\nSELECT ___\\n  -- 条件を指定\\n  WHEN ___ >= 80 THEN '合格'\\n  -- それ以外の場合\\n  ELSE '___'\\n-- ENDで終了\\n___;",
      "correctLines": [
          "-- SELECT CASE と入力して条件分岐",
          "SELECT CASE",
          "  -- 条件を指定",
          "  WHEN 85 >= 80 THEN '合格'",
          "  -- それ以外の場合",
          "  ELSE '失敗'",
          "-- ENDで終了",
          "END;"
        ],
      "lineHints": [
          null,
          "CASE で条件分岐を始めます。",
          null,
          "WHEN で条件を指定します。",
          null,
          "ELSE でそれ以外の場合を指定します。",
          null,
          "END で終了します。"
        ],
        "candidates": {
          "keywords": [
            "CASE"
          ],
          "others": ["SELECT", "WHEN", "ELSE", "END", "85", "fail", "失敗", "CASE"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "合格\\n"
          }
        ]
      },
    {
      "title": "COALESCE でNULL処理",
      "correctCode": "-- COALESCEでNULL処理\\nSELECT COALESCE(NULL, 'デフォルト');",
      "holeyCode": "-- COALESCEでNULL処理\\nSELECT COALESCE(NULL, '___');",
      "correctLines": [
          "-- COALESCEでNULL処理",
          "SELECT COALESCE(NULL, 'デフォルト');"
        ],
      "lineHints": [
          null,
          "COALESCE でNULLの代替値を指定します。"
        ],
        "candidates": {
          "functions": [
            "COALESCE"
          ],
          "others": ["default", "デフォルト"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "デフォルト\\n"
          }
        ]
      }
  ]
}

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
      "holeyCode": "-- WHEREで条件を指定\\n___ '___' ___ ___ > ___;",
      "correctLines": [
          "-- WHEREで条件を指定",
          "SELECT '見つかった' WHERE 10 > 5;"
        ],
      "lineHints": [
          null,
          "SELECT文でWHERE句による条件指定を行います。10 > 5の比較です。"
        ],
        "candidates": {
          "keywords": [
            "SELECT", "WHERE"
          ],
          "others": ["見つかった", "10", "5"]
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
      "holeyCode": "-- SELECT文でデータを作成\\n___ ___ AS ___ ___ ___ ___ ___ ___ ___\\n-- ORDERで並べ替え\\n___ BY ___;",
      "correctLines": [
          "-- SELECT文でデータを作成",
          "SELECT 1 AS num UNION SELECT 3 UNION SELECT 2",
          "-- ORDERで並べ替え",
          "ORDER BY num;"
        ],
      "lineHints": [
          null,
          "SELECT 1 AS num UNION SELECT 3 UNION SELECT 2 でデータを作成します。",
          null,
          "ORDER BY numで昇順に並べ替えます。"
        ],
        "candidates": {
          "keywords": [
            "SELECT", "UNION", "ORDER"
          ],
          "others": ["1", "num", "3", "2"]
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
      "holeyCode": "-- SELECT文でデータを作成\\n___ ___ ___ ___ ___ ___ ___ ___\\n-- LIMITで件数制限\\n___ ___;",
      "correctLines": [
          "-- SELECT文でデータを作成",
          "SELECT 1 UNION SELECT 2 UNION SELECT 3",
          "-- LIMITで件数制限",
          "LIMIT 2;"
        ],
      "lineHints": [
          null,
          "SELECT 1 UNION SELECT 2 UNION SELECT 3 でデータを作成します。",
          null,
          "LIMIT 2で2件に制限します。"
        ],
        "candidates": {
          "keywords": [
            "SELECT", "UNION", "LIMIT"
          ],
          "others": ["1", "2", "3"]
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
      "holeyCode": "-- COUNTで行数を数える\\n___ ___(*) ___ (___ ___ ___ ___ ___ ___ ___ ___);",
      "correctLines": [
          "-- COUNTで行数を数える",
          "SELECT COUNT(*) FROM (SELECT 1 UNION SELECT 2 UNION SELECT 3);"
        ],
      "lineHints": [
          null,
          "SELECT COUNT(*) FROM (SELECT 1 UNION SELECT 2 UNION SELECT 3)で3行の件数を数えます。"
        ],
        "candidates": {
          "keywords": [
            "SELECT", "UNION", "FROM"
          ],
          "functions": [
            "COUNT"
          ],
          "others": ["1", "2", "3"]
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
      "holeyCode": "-- SUMで合計を計算\\n___ ___(___) ___ (___ ___ AS ___ ___ ___ ___ ___ ___ ___);",
      "correctLines": [
          "-- SUMで合計を計算",
          "SELECT SUM(n) FROM (SELECT 1 AS n UNION SELECT 2 UNION SELECT 3);"
        ],
      "lineHints": [
          null,
          "SELECT SUM(n) FROM (SELECT 1 AS n UNION SELECT 2 UNION SELECT 3)で合計6を計算します。"
        ],
        "candidates": {
          "keywords": [
            "SELECT", "UNION", "FROM"
          ],
          "functions": [
            "SUM"
          ],
          "others": ["n", "1", "2", "3"]
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
      "holeyCode": "-- AVGで平均を計算\\n___ ___(___) ___ (___ ___ AS ___ ___ ___ ___ ___ ___ ___);",
      "correctLines": [
          "-- AVGで平均を計算",
          "SELECT AVG(n) FROM (SELECT 10 AS n UNION SELECT 20 UNION SELECT 30);"
        ],
      "lineHints": [
          null,
          "SELECT AVG(n) FROM (SELECT 10 AS n UNION SELECT 20 UNION SELECT 30)で平均20.0を計算します。"
        ],
        "candidates": {
          "keywords": [
            "SELECT", "UNION", "FROM"
          ],
          "functions": [
            "AVG"
          ],
          "others": ["n", "10", "20", "30"]
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
      "holeyCode": "-- SELECT文でデータを取得\\n___ ___, ___(*) ___ (\\n  -- カテゴリを定義\\n  ___ '___' AS ___ ___ ___\\n  -- データを追加\\n  ___ '___' ___ ___ ___ '___'\\n-- GROUPでグループ化\\n) ___ BY ___;",
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
          "SELECT category, COUNT(*) FROM (でサブクエリからグループ集計を開始します。",
          null,
          "SELECT 'A' AS category UNION ALLで最初のカテゴリAを定義します。",
          null,
          "SELECT 'A' UNION ALL SELECT 'B'でA,Bのデータを追加します。",
          null,
          ") GROUP BY categoryでカテゴリ別にグループ化します。"
        ],
        "candidates": {
          "keywords": [
            "SELECT", "UNION", "FROM", "GROUP", "ALL"
          ],
          "functions": [
            "COUNT"
          ],
          "others": ["category", "A", "B"]
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
      "holeyCode": "-- SELECT文でデータを取得\\n___ ___, ___(*) AS ___ ___ (\\n  -- カテゴリを定義\\n  ___ '___' AS ___ ___ ___\\n  -- データを追加\\n  ___ '___' ___ ___ ___ '___'\\n-- HAVINGでグループを絞り込み\\n) ___ BY ___ ___ ___ > ___;",
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
          "SELECT category, COUNT(*) AS cnt FROM (でサブクエリからグループ集計を開始します。",
          null,
          "SELECT 'A' AS category UNION ALLで最初のカテゴリAを定義します。",
          null,
          "SELECT 'A' UNION ALL SELECT 'B'でA,Bのデータを追加します。",
          null,
          ") GROUP BY category HAVING cnt > 1で件数1以上のグループのみ抽出します。"
        ],
        "candidates": {
          "keywords": [
            "SELECT", "UNION", "FROM", "GROUP", "ALL", "HAVING"
          ],
          "functions": [
            "COUNT"
          ],
          "others": ["category", "cnt", "A", "B", "1"]
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
      "holeyCode": "-- SELECT CASE と入力して条件分岐\\n___ ___\\n  -- 条件を指定\\n  ___ ___ >= ___ ___ '___'\\n  -- それ以外の場合\\n  ___ '___'\\n-- ENDで終了\\n___;",
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
          "SELECT CASEで条件分岐を始めます。",
          null,
          "WHEN 85 >= 80 THEN '合格'で85が80以上なら合格を返します。",
          null,
          "ELSE '失敗'で条件に合わない場合は失敗を返します。",
          null,
          "END;でCASE文を終了します。"
        ],
        "candidates": {
          "keywords": [
            "SELECT", "CASE", "WHEN", "THEN", "ELSE", "END"
          ],
          "others": ["85", "80", "合格", "失敗"]
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
      "holeyCode": "-- COALESCEでNULL処理\\n___ ___(___, '___');",
      "correctLines": [
          "-- COALESCEでNULL処理",
          "SELECT COALESCE(NULL, 'デフォルト');"
        ],
      "lineHints": [
          null,
          "SELECT COALESCE(NULL, 'デフォルト')でNULLの場合にデフォルト値を返します。"
        ],
        "candidates": {
          "keywords": [
            "SELECT", "NULL"
          ],
          "functions": [
            "COALESCE"
          ],
          "others": ["デフォルト"]
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

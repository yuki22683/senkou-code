export const sql3Data = {
  "language": "sql",
  "lessonId": "sql-3",
  "lessonTitle": "SQL III - サブクエリと高度な操作",
  "lessonDescription": "SQLの高度な機能を学びます。サブクエリ、ウィンドウ関数、CTEなど、複雑なデータ操作を身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "exercises": [
    {
      "title": "サブクエリ（WHERE内）",
      "correctCode": "-- SELECTでサブクエリを作成\\nSELECT '見つかった' WHERE 5 > (SELECT 3);",
      "holeyCode": "-- SELECTでサブクエリを作成\\nSELECT '見つかった' WHERE ___ > (SELECT 3);",
      "correctLines": [
          "-- SELECTでサブクエリを作成",
          "SELECT '見つかった' WHERE 5 > (SELECT 3);"
        ],
      "lineHints": [
          null,
          "SELECT でサブクエリを作ります。"
        ],
        "candidates": {
          "keywords": [
            "SELECT",
            "FROM",
            "WHERE"
          ],
          "others": ["5"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "見つかった\\n"
          }
        ]
      },
    {
      "title": "EXISTS で存在チェック",
      "correctCode": "-- EXISTSで存在チェック\\nSELECT 'データあり' WHERE EXISTS (SELECT 1);",
      "holeyCode": "-- EXISTSで存在チェック\\nSELECT 'データあり' WHERE EXISTS (SELECT ___);",
      "correctLines": [
          "-- EXISTSで存在チェック",
          "SELECT 'データあり' WHERE EXISTS (SELECT 1);"
        ],
      "lineHints": [
          null,
          "EXISTS で存在をチェックします。"
        ],
        "candidates": {
          "keywords": [
            "EXISTS",
            "IN",
            "ANY"
          ],
          "others": ["1"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "データあり\\n"
          }
        ]
      },
    {
      "title": "UNION で結合",
      "correctCode": "-- UNIONで結果を結合\\nSELECT 'A' UNION SELECT 'B' UNION SELECT 'C';",
      "holeyCode": "-- UNIONで結果を結合\\nSELECT 'A' UNION SELECT 'B' UNION SELECT '___';",
      "correctLines": [
          "-- UNIONで結果を結合",
          "SELECT 'A' UNION SELECT 'B' UNION SELECT 'C';"
        ],
      "lineHints": [
          null,
          "UNION で結果を結合します。"
        ],
        "candidates": {
          "keywords": [
            "UNION",
            "JOIN",
            "MERGE"
          ],
          "others": ["C"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "A\\nB\\nC\\n"
          }
        ]
      },
    {
      "title": "INNER JOIN",
      "correctCode": "-- SELECTで列を取得\\nSELECT a.x, b.y FROM\\n  -- テーブルaを作成\\n  (SELECT 1 AS id, 'A' AS x) a\\n  -- INNERで内部結合\\n  INNER JOIN\\n  -- テーブルbを作成\\n  (SELECT 1 AS id, 'B' AS y) b\\n  -- 結合条件を指定\\n  ON a.id = b.id;",
      "holeyCode": "-- SELECTで列を取得\\nSELECT a.x, b.y ___\\n  -- テーブルaを作成\\n  (SELECT ___ AS id, 'A' AS x) a\\n  -- INNERで内部結合\\n  INNER ___\\n  -- テーブルbを作成\\n  (SELECT ___ AS id, 'B' AS y) b\\n  -- 結合条件を指定\\n  ON a.___ = b.id;",
      "correctLines": [
          "-- SELECTで列を取得",
          "SELECT a.x, b.y FROM",
          "  -- テーブルaを作成",
          "  (SELECT 1 AS id, 'A' AS x) a",
          "  -- INNERで内部結合",
          "  INNER JOIN",
          "  -- テーブルbを作成",
          "  (SELECT 1 AS id, 'B' AS y) b",
          "  -- 結合条件を指定",
          "  ON a.id = b.id;"
        ],
      "lineHints": [
          null,
          "INNER JOIN で内部結合します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "INNER",
            "LEFT",
            "RIGHT"
          ],
          "others": ["SELECT", "ON", "FROM", "1", "JOIN", "id", "FROM", "JOIN"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "A|B\\n"
          }
        ]
      },
    {
      "title": "LEFT JOIN",
      "correctCode": "-- SELECTで列を取得\\nSELECT a.x, b.y FROM\\n  -- テーブルaを作成\\n  (SELECT 1 AS id, 'A' AS x) a\\n  -- LEFTで左外部結合\\n  LEFT JOIN\\n  -- テーブルbを作成\\n  (SELECT 2 AS id, 'B' AS y) b\\n  -- 結合条件を指定\\n  ON a.id = b.id;",
      "holeyCode": "-- SELECTで列を取得\\nSELECT a.x, b.y ___\\n  -- テーブルaを作成\\n  (SELECT ___ AS id, 'A' AS x) a\\n  -- LEFTで左外部結合\\n  LEFT ___\\n  -- テーブルbを作成\\n  (SELECT ___ AS id, 'B' AS y) b\\n  -- 結合条件を指定\\n  ON a.___ = b.id;",
      "correctLines": [
          "-- SELECTで列を取得",
          "SELECT a.x, b.y FROM",
          "  -- テーブルaを作成",
          "  (SELECT 1 AS id, 'A' AS x) a",
          "  -- LEFTで左外部結合",
          "  LEFT JOIN",
          "  -- テーブルbを作成",
          "  (SELECT 2 AS id, 'B' AS y) b",
          "  -- 結合条件を指定",
          "  ON a.id = b.id;"
        ],
      "lineHints": [
          null,
          "LEFT JOIN で左外部結合します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "LEFT",
            "RIGHT",
            "INNER"
          ],
          "others": ["SELECT", "ON", "FROM", "1", "JOIN", "2", "id", "FROM", "JOIN"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "A|\\n"
          }
        ]
      },
    {
      "title": "MAX と MIN",
      "correctCode": "-- MAXで最大値を取得\\nSELECT MAX(n) FROM (SELECT 5 AS n UNION SELECT 10 UNION SELECT 3);",
      "holeyCode": "-- MAXで最大値を取得\\nSELECT MAX(n) FROM (SELECT ___ AS n UNION SELECT 10 UNION SELECT 3);",
      "correctLines": [
          "-- MAXで最大値を取得",
          "SELECT MAX(n) FROM (SELECT 5 AS n UNION SELECT 10 UNION SELECT 3);"
        ],
      "lineHints": [
          null,
          "MAX で最大値を取得します。"
        ],
        "candidates": {
          "functions": [
            "MAX",
            "MIN",
            "AVG"
          ],
          "others": ["5"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "DISTINCT で重複除去",
      "correctCode": "-- SELECT DISTINCT と入力して重複除去\\nSELECT DISTINCT n FROM (\\n  -- データを作成\\n  SELECT 1 AS n UNION ALL\\n  -- 重複データを追加\\n  SELECT 1 UNION ALL\\n  -- 異なるデータを追加\\n  SELECT 2\\n);",
      "holeyCode": "-- SELECT DISTINCT と入力して重複除去\\nSELECT DISTINCT n ___ (\\n  -- データを作成\\n  SELECT ___ AS n UNION ALL\\n  -- 重複データを追加\\n  SELECT ___ UNION ALL\\n  -- 異なるデータを追加\\n  SELECT ___\\n___",
      "correctLines": [
          "-- SELECT DISTINCT と入力して重複除去",
          "SELECT DISTINCT n FROM (",
          "  -- データを作成",
          "  SELECT 1 AS n UNION ALL",
          "  -- 重複データを追加",
          "  SELECT 1 UNION ALL",
          "  -- 異なるデータを追加",
          "  SELECT 2",
          ");"
        ],
      "lineHints": [
          null,
          "DISTINCT で重複を除去します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "DISTINCT",
            "UNIQUE",
            "ALL"
          ],
          "others": ["SELECT", "FROM", "1", "2", ");", "2"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n2\\n"
          }
        ]
      },
    {
      "title": "LIKE でパターン検索",
      "correctCode": "-- LIKEでパターン検索\\nSELECT '一致' WHERE 'こんにちは' LIKE 'こ%';",
      "holeyCode": "-- LIKEでパターン検索\\nSELECT '一致' WHERE 'こんにちは' LIKE '___';",
      "correctLines": [
          "-- LIKEでパターン検索",
          "SELECT '一致' WHERE 'こんにちは' LIKE 'こ%';"
        ],
      "lineHints": [
          null,
          "LIKE でパターンマッチします。"
        ],
        "candidates": {
          "keywords": [
            "LIKE",
            "MATCH",
            "REGEX"
          ],
          "others": ["こ%"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "一致\\n"
          }
        ]
      },
    {
      "title": "BETWEEN で範囲指定",
      "correctCode": "-- BETWEENで範囲指定\\nSELECT '範囲内' WHERE 5 BETWEEN 1 AND 10;",
      "holeyCode": "-- BETWEENで範囲指定\\nSELECT '範囲内' WHERE ___ BETWEEN 1 AND 10;",
      "correctLines": [
          "-- BETWEENで範囲指定",
          "SELECT '範囲内' WHERE 5 BETWEEN 1 AND 10;"
        ],
      "lineHints": [
          null,
          "BETWEEN で範囲を指定します。"
        ],
        "candidates": {
          "keywords": [
            "BETWEEN",
            "FROM",
            "IN"
          ],
          "others": ["5"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "範囲内\\n"
          }
        ]
      },
    {
      "title": "IN で複数値マッチ",
      "correctCode": "-- INで複数値マッチ\\nSELECT '見つかった' WHERE 'B' IN ('A', 'B', 'C');",
      "holeyCode": "-- INで複数値マッチ\\nSELECT '見つかった' WHERE 'B' IN ('A', 'B', '___');",
      "correctLines": [
          "-- INで複数値マッチ",
          "SELECT '見つかった' WHERE 'B' IN ('A', 'B', 'C');"
        ],
      "lineHints": [
          null,
          "IN でリスト内の値を検索します。"
        ],
        "candidates": {
          "keywords": [
            "IN",
            "ANY",
            "SOME"
          ],
          "others": ["C"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "見つかった\\n"
          }
        ]
      }
  ]
}

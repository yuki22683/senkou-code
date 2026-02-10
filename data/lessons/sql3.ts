export const sql3Data = {
  "language": "sql",
  "lessonId": "sql-3",
  "lessonTitle": "SQL III - サブクエリと高度な操作",
  "lessonDescription": "SQLの高度な機能を学びます。サブクエリ、ウィンドウ関数、CTEなど、複雑なデータ操作を身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "tutorialSlides": [
    {
      "title": "サブクエリ",
      "content": "クエリの中にクエリを書けます。\\n\\n```sql\\n-- WHERE内で使用\\nSELECT * FROM users\\nWHERE age > (SELECT AVG(age) FROM users);\\n\\n-- FROM内で使用\\nSELECT * FROM (\\n  SELECT name, score * 1.1 AS adjusted\\n  FROM students\\n) AS t;\\n```\\n\\nサブクエリは括弧 `()` で囲みます。"
    },
    {
      "title": "EXISTS と IN",
      "content": "`EXISTS` で存在チェック、`IN` で複数値マッチを行います。\\n\\n```sql\\n-- EXISTS: 結果が存在するか\\nSELECT * FROM users u\\nWHERE EXISTS (SELECT 1 FROM orders WHERE user_id = u.id);\\n\\n-- IN: リスト内に含まれるか\\nSELECT * FROM users\\nWHERE status IN ('active', 'pending');\\n```"
    },
    {
      "title": "UNION",
      "content": "`UNION` で複数のSELECT結果を縦に結合します。\\n\\n```sql\\nSELECT name FROM employees\\nUNION\\nSELECT name FROM customers;\\n```\\n\\n`UNION`: 重複を除去\\n`UNION ALL`: 重複も含める（高速）\\n\\n列の数と型が一致している必要があります。"
    },
    {
      "title": "JOIN（結合）",
      "content": "複数のテーブルを結合します。\\n\\n```sql\\n-- INNER JOIN: 両方にある行\\nSELECT * FROM orders o\\nINNER JOIN users u ON o.user_id = u.id;\\n\\n-- LEFT JOIN: 左テーブルの全行\\nSELECT * FROM users u\\nLEFT JOIN orders o ON u.id = o.user_id;\\n```\\n\\n`ON` で結合条件を指定します。"
    },
    {
      "title": "LIKE と BETWEEN",
      "content": "パターン検索と範囲検索ができます。\\n\\n```sql\\n-- LIKE: パターン検索\\nSELECT * FROM users\\nWHERE name LIKE '田%';  -- 田で始まる\\n\\n-- BETWEEN: 範囲検索\\nSELECT * FROM products\\nWHERE price BETWEEN 1000 AND 5000;\\n```\\n\\n`%` は任意の文字列、`_` は任意の1文字にマッチします。"
    },
    {
      "title": "DISTINCT",
      "content": "`DISTINCT` で重複を除去します。\\n\\n```sql\\n-- 重複除去\\nSELECT DISTINCT category FROM products;\\n\\n-- 複数列の組み合わせで重複除去\\nSELECT DISTINCT category, brand FROM products;\\n```\\n\\n全ての列の値が同じ行が重複と見なされます。"
    }
  ],
  "exercises": [
    {
      "title": "サブクエリ（WHERE内）",
      "correctCode": "-- SELECTでサブクエリを作成\\nSELECT '見つかった' WHERE 5 > (SELECT 3);",
      "holeyCode": "-- SELECTでサブクエリを作成\\n___ '___' WHERE ___ > (___ ___);",
      "correctLines": [
          "-- SELECTでサブクエリを作成",
          "SELECT '見つかった' WHERE 5 > (SELECT 3);"
        ],
      "lineHints": [
          null,
          "SELECTで値を返し、WHEREでサブクエリと比較します。"
        ],
        "candidates": {
          "keywords": [
            "SELECT",
            "FROM",
            "WHERE"
          ],
          "others": ["見つかった", "5", "3"]
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
      "holeyCode": "-- EXISTSで存在チェック\\n___ '___' WHERE ___ (___ ___);",
      "correctLines": [
          "-- EXISTSで存在チェック",
          "SELECT 'データあり' WHERE EXISTS (SELECT 1);"
        ],
      "lineHints": [
          null,
          "EXISTSでサブクエリの結果が存在するかチェックします。"
        ],
        "candidates": {
          "keywords": [
            "SELECT",
            "EXISTS",
            "WHERE"
          ],
          "others": ["データあり", "1"]
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
      "holeyCode": "-- UNIONで結果を結合\\n___ '___' ___ ___ '___' ___ ___ '___';",
      "correctLines": [
          "-- UNIONで結果を結合",
          "SELECT 'A' UNION SELECT 'B' UNION SELECT 'C';"
        ],
      "lineHints": [
          null,
          "UNIONで複数のSELECT結果を縦に結合します。"
        ],
        "candidates": {
          "keywords": [
            "SELECT",
            "UNION"
          ],
          "others": ["A", "B", "C"]
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
      "holeyCode": "-- SELECTで列を取得\\n___ ___.___,  ___.___ ___\\n  -- テーブルaを作成\\n  (___ ___ AS ___, '___' AS ___) ___\\n  -- INNERで内部結合\\n  ___ ___\\n  -- テーブルbを作成\\n  (___ ___ AS ___, '___' AS ___) ___\\n  -- 結合条件を指定\\n  ___ ___.___ = ___.___;",
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
          "SELECTで取得する列をエイリアス.列名で指定します。",
          null,
          "サブクエリで値に別名を付けてテーブルとして使います。",
          null,
          "INNER JOINで両テーブルに存在する行を結合します。",
          null,
          "サブクエリで値に別名を付けてテーブルとして使います。",
          null,
          "ONで結合条件（idが一致する行）を指定します。"
        ],
        "candidates": {
          "keywords": [
            "SELECT",
            "FROM",
            "AS",
            "INNER",
            "JOIN",
            "ON"
          ],
          "others": ["a", "b", "x", "y", "id", "1", "A", "B"]
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
      "holeyCode": "-- SELECTで列を取得\\n___ ___.___,  ___.___ ___\\n  -- テーブルaを作成\\n  (___ ___ AS ___, '___' AS ___) ___\\n  -- LEFTで左外部結合\\n  ___ ___\\n  -- テーブルbを作成\\n  (___ ___ AS ___, '___' AS ___) ___\\n  -- 結合条件を指定\\n  ___ ___.___ = ___.___;",
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
          "SELECTで取得する列をエイリアス.列名で指定します。",
          null,
          "サブクエリで値に別名を付けてテーブルとして使います。",
          null,
          "LEFT JOINで左テーブルの全行と右テーブルのマッチ行を結合します。",
          null,
          "サブクエリで値に別名を付けてテーブルとして使います。",
          null,
          "ONで結合条件（idが一致する行）を指定します。"
        ],
        "candidates": {
          "keywords": [
            "SELECT",
            "FROM",
            "AS",
            "LEFT",
            "JOIN",
            "ON"
          ],
          "others": ["a", "b", "x", "y", "id", "1", "2", "A", "B"]
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
      "holeyCode": "-- MAXで最大値を取得\\n___ ___(___) ___ (___ ___ AS ___ ___ ___ ___ ___ ___ ___);",
      "correctLines": [
          "-- MAXで最大値を取得",
          "SELECT MAX(n) FROM (SELECT 5 AS n UNION SELECT 10 UNION SELECT 3);"
        ],
      "lineHints": [
          null,
          "MAXで列nの最大値を取得し、UNIONでデータを結合します。"
        ],
        "candidates": {
          "keywords": [
            "SELECT",
            "FROM",
            "AS",
            "UNION"
          ],
          "functions": [
            "MAX",
            "MIN",
            "AVG"
          ],
          "others": ["n", "5", "10", "3"]
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
      "holeyCode": "-- SELECT DISTINCT と入力して重複除去\\n___ ___ ___ ___ (\\n  -- データを作成\\n  ___ ___ AS ___ ___ ___\\n  -- 重複データを追加\\n  ___ ___ ___ ___\\n  -- 異なるデータを追加\\n  ___ ___\\n___",
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
          "DISTINCTで重複を除去し、FROMでサブクエリを指定します。",
          null,
          "SELECTで値を選択し、UNION ALLで結合します。",
          null,
          "SELECTで同じ値を追加（重複）します。",
          null,
          "SELECTで異なる値を追加します。",
          "サブクエリの閉じ括弧とセミコロンです。"
        ],
        "candidates": {
          "keywords": [
            "SELECT",
            "DISTINCT",
            "FROM",
            "AS",
            "UNION",
            "ALL"
          ],
          "others": ["n", "1", "2", ");"]
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
      "holeyCode": "-- LIKEでパターン検索\\n___ '___' WHERE '___' ___ '___';",
      "correctLines": [
          "-- LIKEでパターン検索",
          "SELECT '一致' WHERE 'こんにちは' LIKE 'こ%';"
        ],
      "lineHints": [
          null,
          "LIKEで文字列がパターンに一致するか検索します。%は任意の文字列を表します。"
        ],
        "candidates": {
          "keywords": [
            "SELECT",
            "WHERE",
            "LIKE"
          ],
          "others": ["一致", "こんにちは", "こ%"]
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
      "holeyCode": "-- BETWEENで範囲指定\\n___ '___' WHERE ___ ___ ___ ___ ___;",
      "correctLines": [
          "-- BETWEENで範囲指定",
          "SELECT '範囲内' WHERE 5 BETWEEN 1 AND 10;"
        ],
      "lineHints": [
          null,
          "BETWEENで値が範囲内にあるかチェックします。BETWEEN 最小 AND 最大の形式です。"
        ],
        "candidates": {
          "keywords": [
            "SELECT",
            "WHERE",
            "BETWEEN",
            "AND"
          ],
          "others": ["範囲内", "5", "1", "10"]
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
      "holeyCode": "-- INで複数値マッチ\\n___ '___' WHERE '___' ___ ('___', '___', '___');",
      "correctLines": [
          "-- INで複数値マッチ",
          "SELECT '見つかった' WHERE 'B' IN ('A', 'B', 'C');"
        ],
      "lineHints": [
          null,
          "INでリスト内に値があるかチェックします。"
        ],
        "candidates": {
          "keywords": [
            "SELECT",
            "WHERE",
            "IN"
          ],
          "others": ["見つかった", "A", "B", "C"]
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

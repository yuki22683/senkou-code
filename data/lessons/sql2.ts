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
      "description": "条件を指定してデータを絞り込む「WHERE」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "WHERE とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 条件でフィルタ\n\n**WHERE** は、指定した条件に合うデータだけを取得します。"
        },
        {
          "title": "WHERE の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# SELECT ... WHERE 条件\n\n`=`, `>`, `<` などの比較演算子が使えます。\n\n**コード例：**\n```sql\nSELECT * FROM users\nWHERE age > 20;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- WHEREで条件を指定\nSELECT 'found' WHERE 10 > 5;",
      "holeyCode": "-- WHEREで条件を指定\nSELECT 'found' ___ 10 > 5;",
      "correctLines": [
        "SELECT 'found' WHERE 10 > 5;"
      ],
      "lineHints": [
        "WHERE で条件を指定します。"
      ],
      "candidates": {
        "keywords": ["WHERE"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "found\n"
        }
      ]
    },
    {
      "title": "ORDER BY で並べ替え",
      "description": "結果を順番に並べ替える「ORDER BY」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "ORDER BY とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 結果を並べ替え\n\n**ORDER BY** は、指定した列で結果を並べ替えます。ASC（昇順）、DESC（降順）を指定できます。"
        },
        {
          "title": "ORDER BY の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# SELECT ... ORDER BY 列 [ASC|DESC]\n\nデフォルトは昇順です。\n\n**コード例：**\n```sql\nSELECT * FROM users\nORDER BY age DESC;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT 1 AS num UNION SELECT 3 UNION SELECT 2\n-- ORDERで並べ替え\nORDER BY num;",
      "holeyCode": "-- SELECT文でデータを作成\n___ 1 AS num UNION SELECT 3 UNION SELECT 2\n-- ORDERで並べ替え\n___ BY num;",
      "correctLines": [
        "SELECT 1 AS num UNION SELECT 3 UNION SELECT 2",
        "ORDER BY num;"
      ],
      "lineHints": [
        "",
        "ORDER BY で並べ替えます。"
      ],
      "candidates": {
        "keywords": ["ORDER"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n2\n3\n"
        }
      ]
    },
    {
      "title": "LIMIT で件数制限",
      "description": "取得する行数を制限する「LIMIT」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "LIMIT とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 取得行数を制限\n\n**LIMIT** は、取得する行数を制限します。大量データの一部だけを見たいときに便利です。"
        },
        {
          "title": "LIMIT の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# SELECT ... LIMIT n\n\n最初の n 行だけを取得します。\n\n**コード例：**\n```sql\nSELECT * FROM users\nLIMIT 10;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT 1 UNION SELECT 2 UNION SELECT 3\n-- LIMITで件数制限\nLIMIT 2;",
      "holeyCode": "-- SELECT文でデータを作成\n___ 1 UNION SELECT 2 UNION SELECT 3\n-- LIMITで件数制限\n___ 2;",
      "correctLines": [
        "SELECT 1 UNION SELECT 2 UNION SELECT 3",
        "LIMIT 2;"
      ],
      "lineHints": [
        "",
        "LIMIT で件数を制限します。"
      ],
      "candidates": {
        "keywords": ["LIMIT"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n2\n"
        }
      ]
    },
    {
      "title": "COUNT で件数を数える",
      "description": "行数を数える「COUNT」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "COUNT とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 行数を数える\n\n**COUNT** は、条件に合う行の数を返す集計関数です。"
        },
        {
          "title": "COUNT の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# COUNT(*) または COUNT(列)\n\n`*` はすべての行、列名を指定するとNULL以外を数えます。\n\n**コード例：**\n```sql\nSELECT COUNT(*) FROM users;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- COUNTで行数を数える\nSELECT COUNT(*) FROM (SELECT 1 UNION SELECT 2 UNION SELECT 3);",
      "holeyCode": "-- COUNTで行数を数える\nSELECT ___(*) FROM (SELECT 1 UNION SELECT 2 UNION SELECT 3);",
      "correctLines": [
        "SELECT COUNT(*) FROM (SELECT 1 UNION SELECT 2 UNION SELECT 3);"
      ],
      "lineHints": [
        "COUNT で行数を数えます。"
      ],
      "candidates": {
        "functions": ["COUNT"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "3\n"
        }
      ]
    },
    {
      "title": "SUM で合計を計算",
      "description": "数値の合計を計算する「SUM」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "SUM とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 合計を計算\n\n**SUM** は、指定した列の値の合計を返す集計関数です。"
        },
        {
          "title": "SUM の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# SUM(列)\n\n数値列の合計を計算します。\n\n**コード例：**\n```sql\nSELECT SUM(price) FROM products;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- SUMで合計を計算\nSELECT SUM(n) FROM (SELECT 1 AS n UNION SELECT 2 UNION SELECT 3);",
      "holeyCode": "-- SUMで合計を計算\nSELECT ___(n) FROM (SELECT 1 AS n UNION SELECT 2 UNION SELECT 3);",
      "correctLines": [
        "SELECT SUM(n) FROM (SELECT 1 AS n UNION SELECT 2 UNION SELECT 3);"
      ],
      "lineHints": [
        "SUM で合計を計算します。"
      ],
      "candidates": {
        "functions": ["SUM"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "6\n"
        }
      ]
    },
    {
      "title": "AVG で平均を計算",
      "description": "数値の平均を計算する「AVG」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "AVG とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 平均を計算\n\n**AVG** は、指定した列の値の平均を返す集計関数です。"
        },
        {
          "title": "AVG の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# AVG(列)\n\n数値列の平均を計算します。\n\n**コード例：**\n```sql\nSELECT AVG(score) FROM exams;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- AVGで平均を計算\nSELECT AVG(n) FROM (SELECT 10 AS n UNION SELECT 20 UNION SELECT 30);",
      "holeyCode": "-- AVGで平均を計算\nSELECT ___(n) FROM (SELECT 10 AS n UNION SELECT 20 UNION SELECT 30);",
      "correctLines": [
        "SELECT AVG(n) FROM (SELECT 10 AS n UNION SELECT 20 UNION SELECT 30);"
      ],
      "lineHints": [
        "AVG で平均を計算します。"
      ],
      "candidates": {
        "functions": ["AVG"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "20.0\n"
        }
      ]
    },
    {
      "title": "GROUP BY でグループ化",
      "description": "データをグループ化して集計する「GROUP BY」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "GROUP BY とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# グループごとに集計\n\n**GROUP BY** は、指定した列の値が同じ行をグループ化し、集計関数と組み合わせて使います。"
        },
        {
          "title": "GROUP BY の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# SELECT 列, 集計 ... GROUP BY 列\n\nグループごとに集計結果を得られます。\n\n**コード例：**\n```sql\nSELECT category, COUNT(*)\nFROM products\nGROUP BY category;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT category, COUNT(*) FROM (\n  SELECT 'A' AS category UNION ALL\n  SELECT 'A' UNION ALL SELECT 'B'\n-- GROUPでグループ化\n) GROUP BY category;",
      "holeyCode": "-- SELECT文でデータを取得\n___ category, COUNT(*) FROM (\n  -- カテゴリを定義\n  ___ 'A' AS category UNION ALL\n  -- データを追加\n  ___ 'A' UNION ALL SELECT 'B'\n-- GROUPでグループ化\n) ___ BY category;",
      "correctLines": [
        "SELECT category, COUNT(*) FROM (",
        "  SELECT 'A' AS category UNION ALL",
        "  SELECT 'A' UNION ALL SELECT 'B'",
        ") GROUP BY category;"
      ],
      "lineHints": [
        "",
        "",
        "",
        "GROUP BY でグループ化します。"
      ],
      "candidates": {
        "keywords": ["GROUP"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "A|2\nB|1\n"
        }
      ]
    },
    {
      "title": "HAVING でグループを絞り込み",
      "description": "グループ化した結果を絞り込む「HAVING」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "HAVING とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# グループに条件を付ける\n\n**HAVING** は、GROUP BY の結果に対して条件を指定します。WHERE はグループ化前、HAVING はグループ化後に適用されます。"
        },
        {
          "title": "HAVING の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# GROUP BY ... HAVING 条件\n\n集計関数の結果で絞り込めます。\n\n**コード例：**\n```sql\nSELECT category, COUNT(*)\nFROM products\nGROUP BY category\nHAVING COUNT(*) > 5;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT category, COUNT(*) AS cnt FROM (\n  SELECT 'A' AS category UNION ALL\n  SELECT 'A' UNION ALL SELECT 'B'\n-- HAVINGでグループを絞り込み\n) GROUP BY category HAVING cnt > 1;",
      "holeyCode": "-- SELECT文でデータを取得\n___ category, COUNT(*) AS cnt FROM (\n  -- カテゴリを定義\n  ___ 'A' AS category UNION ALL\n  -- データを追加\n  ___ 'A' UNION ALL SELECT 'B'\n-- HAVINGでグループを絞り込み\n) GROUP BY category ___ cnt > 1;",
      "correctLines": [
        "SELECT category, COUNT(*) AS cnt FROM (",
        "  SELECT 'A' AS category UNION ALL",
        "  SELECT 'A' UNION ALL SELECT 'B'",
        ") GROUP BY category HAVING cnt > 1;"
      ],
      "lineHints": [
        "",
        "",
        "",
        "HAVING でグループを絞り込みます。"
      ],
      "candidates": {
        "keywords": ["HAVING"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "A|2\n"
        }
      ]
    },
    {
      "title": "CASE で条件分岐",
      "description": "条件によって値を変える「CASE」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "CASE とは？",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 条件で値を変える\n\n**CASE** は、条件によって異なる値を返す式です。if-else のようなものです。"
        },
        {
          "title": "CASE の使い方",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# CASE WHEN 条件 THEN 値 END\n\n複数の条件を書けます。\n\n**コード例：**\n```sql\nSELECT CASE\n  WHEN score >= 80 THEN 'A'\n  WHEN score >= 60 THEN 'B'\n  ELSE 'C'\nEND FROM scores;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- CASEで条件分岐\nSELECT CASE\n  WHEN 85 >= 80 THEN 'pass'\n  ELSE 'fail'\nEND;",
      "holeyCode": "-- SELECT CASE と入力して条件分岐\n___ ___\n  -- 条件を指定\n  ___ 85 >= 80 THEN 'pass'\n  -- それ以外の場合\n  ___ 'fail'\n___;",
      "correctLines": [
        "SELECT CASE",
        "  WHEN 85 >= 80 THEN 'pass'",
        "  ELSE 'fail'",
        "END;"
      ],
      "lineHints": [
        "CASE で条件分岐を始めます。",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["CASE"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "pass\n"
        }
      ]
    },
    {
      "title": "COALESCE でNULL処理",
      "description": "NULLを別の値に置き換える「COALESCE」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "COALESCE とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# NULLの代替値\n\n**COALESCE** は、引数の中で最初のNULLでない値を返します。NULLのデフォルト値を設定できます。"
        },
        {
          "title": "COALESCE の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# COALESCE(値1, 値2, ...)\n\n左から順に評価し、最初のNULLでない値を返します。\n\n**コード例：**\n```sql\nSELECT COALESCE(name, 'Unknown')\nFROM users;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- COALESCEでNULL処理\nSELECT COALESCE(NULL, 'default');",
      "holeyCode": "-- COALESCEでNULL処理\nSELECT ___(NULL, 'default');",
      "correctLines": [
        "SELECT COALESCE(NULL, 'default');"
      ],
      "lineHints": [
        "COALESCE でNULLの代替値を指定します。"
      ],
      "candidates": {
        "functions": ["COALESCE"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "default\n"
        }
      ]
    }
  ]
}

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
      "description": "WHERE句の中でクエリを使いましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "サブクエリとは？",
          "content": "# クエリの中のクエリ\n\n**サブクエリ** は、別のクエリの中に入れ子になったSELECT文です。\n\n```sql\nSELECT * FROM users\nWHERE age > (SELECT AVG(age) FROM users);\n```"
        },
        {
          "title": "IN を使ったサブクエリ",
          "content": "# 複数の値とマッチ\n\n```sql\nSELECT * FROM products\nWHERE category_id IN (\n  SELECT id FROM categories WHERE name = 'Electronics'\n);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT 'found' WHERE 5 > (SELECT 3);",
      "holeyCode": "SELECT 'found' WHERE 5 > (___ 3);",
      "correctLines": [
        "SELECT 'found' WHERE 5 > (SELECT 3);"
      ],
      "lineHints": [
        "SELECT でサブクエリを作ります。"
      ],
      "candidates": {
        "keywords": ["SELECT", "FROM", "WHERE"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "found\n"
        }
      ]
    },
    {
      "title": "EXISTS で存在チェック",
      "description": "サブクエリの結果が存在するかチェックしましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "EXISTS とは？",
          "content": "# 行が存在するか\n\n**EXISTS** は、サブクエリが1行以上返すかをチェックします。\n\n```sql\nSELECT * FROM users u\nWHERE EXISTS (\n  SELECT 1 FROM orders o WHERE o.user_id = u.id\n);\n```"
        },
        {
          "title": "NOT EXISTS",
          "content": "# 存在しない場合\n\n```sql\nSELECT * FROM users u\nWHERE NOT EXISTS (\n  SELECT 1 FROM orders o WHERE o.user_id = u.id\n);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT 'has data' WHERE EXISTS (SELECT 1);",
      "holeyCode": "SELECT 'has data' WHERE ___ (SELECT 1);",
      "correctLines": [
        "SELECT 'has data' WHERE EXISTS (SELECT 1);"
      ],
      "lineHints": [
        "EXISTS で存在をチェックします。"
      ],
      "candidates": {
        "keywords": ["EXISTS", "IN", "ANY"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "has data\n"
        }
      ]
    },
    {
      "title": "UNION で結合",
      "description": "複数のSELECTの結果を結合しましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "UNION とは？",
          "content": "# 結果を縦に結合\n\n**UNION** は、複数のSELECTの結果を1つに結合します（重複除去）。\n\n```sql\nSELECT name FROM customers\nUNION\nSELECT name FROM suppliers;\n```"
        },
        {
          "title": "UNION ALL",
          "content": "# 重複を残す\n\n```sql\nSELECT name FROM table1\nUNION ALL\nSELECT name FROM table2;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT 'A' UNION SELECT 'B' UNION SELECT 'C';",
      "holeyCode": "SELECT 'A' ___ SELECT 'B' UNION SELECT 'C';",
      "correctLines": [
        "SELECT 'A' UNION SELECT 'B' UNION SELECT 'C';"
      ],
      "lineHints": [
        "UNION で結果を結合します。"
      ],
      "candidates": {
        "keywords": ["UNION", "JOIN", "MERGE"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "A\nB\nC\n"
        }
      ]
    },
    {
      "title": "INNER JOIN",
      "description": "2つのテーブルを内部結合しましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "INNER JOIN とは？",
          "content": "# マッチする行だけ結合\n\n**INNER JOIN** は、両方のテーブルにマッチする行だけを返します。\n\n```sql\nSELECT u.name, o.total\nFROM users u\nINNER JOIN orders o ON u.id = o.user_id;\n```"
        },
        {
          "title": "ON で条件指定",
          "content": "# 結合条件\n\n```sql\n-- 複数条件も可能\nFROM a\nINNER JOIN b ON a.id = b.a_id AND a.type = b.type\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT a.x, b.y FROM\n  (SELECT 1 AS id, 'A' AS x) a\n  INNER JOIN\n  (SELECT 1 AS id, 'B' AS y) b\n  ON a.id = b.id;",
      "holeyCode": "SELECT a.x, b.y FROM\n  (SELECT 1 AS id, 'A' AS x) a\n  ___ JOIN\n  (SELECT 1 AS id, 'B' AS y) b\n  ON a.id = b.id;",
      "correctLines": [
        "SELECT a.x, b.y FROM",
        "  (SELECT 1 AS id, 'A' AS x) a",
        "  INNER JOIN",
        "  (SELECT 1 AS id, 'B' AS y) b",
        "  ON a.id = b.id;"
      ],
      "lineHints": [
        null,
        null,
        "INNER JOIN で内部結合します。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["INNER", "LEFT", "RIGHT"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "A|B\n"
        }
      ]
    },
    {
      "title": "LEFT JOIN",
      "description": "左側テーブルを基準に結合しましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "LEFT JOIN とは？",
          "content": "# 左テーブルの全行を返す\n\n**LEFT JOIN** は、左のテーブルの全行を返し、マッチしない場合はNULLになります。\n\n```sql\nSELECT u.name, o.total\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id;\n```"
        },
        {
          "title": "NULLの扱い",
          "content": "# マッチしない場合\n\n```sql\n-- 注文がないユーザーも表示\n-- o.total は NULL になる\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT a.x, b.y FROM\n  (SELECT 1 AS id, 'A' AS x) a\n  LEFT JOIN\n  (SELECT 2 AS id, 'B' AS y) b\n  ON a.id = b.id;",
      "holeyCode": "SELECT a.x, b.y FROM\n  (SELECT 1 AS id, 'A' AS x) a\n  ___ JOIN\n  (SELECT 2 AS id, 'B' AS y) b\n  ON a.id = b.id;",
      "correctLines": [
        "SELECT a.x, b.y FROM",
        "  (SELECT 1 AS id, 'A' AS x) a",
        "  LEFT JOIN",
        "  (SELECT 2 AS id, 'B' AS y) b",
        "  ON a.id = b.id;"
      ],
      "lineHints": [
        null,
        null,
        "LEFT JOIN で左外部結合します。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["LEFT", "RIGHT", "INNER"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "A|\n"
        }
      ]
    },
    {
      "title": "MAX と MIN",
      "description": "最大値と最小値を取得しましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "MAX / MIN とは？",
          "content": "# 最大・最小を取得\n\n**MAX** は最大値、**MIN** は最小値を返します。\n\n```sql\nSELECT MAX(price), MIN(price) FROM products;\n```"
        },
        {
          "title": "GROUP BY との組み合わせ",
          "content": "# カテゴリごとの最大値\n\n```sql\nSELECT category, MAX(price)\nFROM products\nGROUP BY category;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT MAX(n) FROM (SELECT 5 AS n UNION SELECT 10 UNION SELECT 3);",
      "holeyCode": "SELECT ___(n) FROM (SELECT 5 AS n UNION SELECT 10 UNION SELECT 3);",
      "correctLines": [
        "SELECT MAX(n) FROM (SELECT 5 AS n UNION SELECT 10 UNION SELECT 3);"
      ],
      "lineHints": [
        "MAX で最大値を取得します。"
      ],
      "candidates": {
        "functions": ["MAX", "MIN", "AVG"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "DISTINCT で重複除去",
      "description": "重複した行を除去しましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "DISTINCT とは？",
          "content": "# 重複を除去\n\n**DISTINCT** は、重複した行を1つにまとめます。\n\n```sql\nSELECT DISTINCT category FROM products;\n```"
        },
        {
          "title": "複数列での DISTINCT",
          "content": "# 組み合わせで重複判定\n\n```sql\nSELECT DISTINCT category, brand FROM products;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT DISTINCT n FROM (\n  SELECT 1 AS n UNION ALL\n  SELECT 1 UNION ALL\n  SELECT 2\n);",
      "holeyCode": "SELECT ___ n FROM (\n  SELECT 1 AS n UNION ALL\n  SELECT 1 UNION ALL\n  SELECT 2\n);",
      "correctLines": [
        "SELECT DISTINCT n FROM (",
        "  SELECT 1 AS n UNION ALL",
        "  SELECT 1 UNION ALL",
        "  SELECT 2",
        ");"
      ],
      "lineHints": [
        "DISTINCT で重複を除去します。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["DISTINCT", "UNIQUE", "ALL"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n2\n"
        }
      ]
    },
    {
      "title": "LIKE でパターン検索",
      "description": "文字列のパターンマッチを行いましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "LIKE とは？",
          "content": "# パターンマッチ\n\n**LIKE** は、ワイルドカードを使ったパターン検索ができます。\n\n```sql\n-- % : 任意の文字列\n-- _ : 任意の1文字\nSELECT * FROM users WHERE name LIKE 'A%';\n```"
        },
        {
          "title": "ワイルドカード",
          "content": "# 使用例\n\n```sql\n'A%'    -- Aで始まる\n'%son'  -- sonで終わる\n'%ab%'  -- abを含む\n'_ob'   -- 3文字でobで終わる\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT 'matched' WHERE 'Hello' LIKE 'H%';",
      "holeyCode": "SELECT 'matched' WHERE 'Hello' ___ 'H%';",
      "correctLines": [
        "SELECT 'matched' WHERE 'Hello' LIKE 'H%';"
      ],
      "lineHints": [
        "LIKE でパターンマッチします。"
      ],
      "candidates": {
        "keywords": ["LIKE", "MATCH", "REGEX"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "matched\n"
        }
      ]
    },
    {
      "title": "BETWEEN で範囲指定",
      "description": "値の範囲を指定して検索しましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "BETWEEN とは？",
          "content": "# 範囲内の値を検索\n\n**BETWEEN** は、指定した範囲内の値を検索します（両端を含む）。\n\n```sql\nSELECT * FROM products\nWHERE price BETWEEN 100 AND 500;\n```"
        },
        {
          "title": "NOT BETWEEN",
          "content": "# 範囲外を検索\n\n```sql\nSELECT * FROM products\nWHERE price NOT BETWEEN 100 AND 500;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT 'in range' WHERE 5 BETWEEN 1 AND 10;",
      "holeyCode": "SELECT 'in range' WHERE 5 ___ 1 AND 10;",
      "correctLines": [
        "SELECT 'in range' WHERE 5 BETWEEN 1 AND 10;"
      ],
      "lineHints": [
        "BETWEEN で範囲を指定します。"
      ],
      "candidates": {
        "keywords": ["BETWEEN", "FROM", "IN"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "in range\n"
        }
      ]
    },
    {
      "title": "IN で複数値マッチ",
      "description": "複数の値のいずれかにマッチするか検索しましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "IN とは？",
          "content": "# リスト内の値にマッチ\n\n**IN** は、指定したリストの値のいずれかにマッチするか確認します。\n\n```sql\nSELECT * FROM users\nWHERE status IN ('active', 'pending');\n```"
        },
        {
          "title": "NOT IN",
          "content": "# リスト外の値\n\n```sql\nSELECT * FROM users\nWHERE status NOT IN ('deleted', 'banned');\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT 'found' WHERE 'B' IN ('A', 'B', 'C');",
      "holeyCode": "SELECT 'found' WHERE 'B' ___ ('A', 'B', 'C');",
      "correctLines": [
        "SELECT 'found' WHERE 'B' IN ('A', 'B', 'C');"
      ],
      "lineHints": [
        "IN でリスト内の値を検索します。"
      ],
      "candidates": {
        "keywords": ["IN", "ANY", "SOME"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "found\n"
        }
      ]
    }
  ]
}

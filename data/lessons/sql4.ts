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
          "title": "CTE（シーティーイー）とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 共通テーブル式（きょうつうテーブルしき）\n\n**CTE**（Common Table Expression）は、`WITH` 句を使って名前付きのサブクエリを定義する機能です。\n\n**たとえば：** 複雑な計算結果に名前をつけて、後で何度も使いたいときに便利です。レシピの「下ごしらえ」のようなものです。"
        },
        {
          "title": "CTE の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# WITH 名前 AS (クエリ)\n\n**コード例：**\n```sql\nWITH high_sales AS (\n  SELECT * FROM orders WHERE total > 1000\n)\nSELECT * FROM high_sales;\n```\n\n**このコードは何をしているの？**\n1. `high_sales` という名前で「1000円以上の注文」を定義\n2. その結果を取得"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- WITHでCTEを定義\nWITH nums AS (\n  SELECT 1 AS n UNION SELECT 2 UNION SELECT 3\n)\nSELECT * FROM nums;",
      "holeyCode": "-- WITHでCTEを定義\n___ nums AS (\n  -- データを作成\n  ___ 1 AS n UNION SELECT 2 UNION SELECT 3\n)\n-- CTEからデータを取得\n___ * FROM nums;",
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
          "title": "ROW_NUMBER（ロウナンバー）とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 行番号を付ける\n\n**ROW_NUMBER()**（ロウナンバー＝「行番号」）は、各行に1から始まる連番を振るウィンドウ関数（かんすう）です。\n\n**たとえば：** クラスで成績順に1位、2位、3位...と番号をつけるイメージです。"
        },
        {
          "title": "ROW_NUMBER の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# OVER (ORDER BY ...) で順番を指定\n\n**コード例：**\n```sql\nSELECT name,\n       ROW_NUMBER() OVER (ORDER BY score DESC) AS rank\nFROM students;\n```\n\n**このコードは何をしているの？**\n- scoreの高い順に並べて\n- 1から順番に番号（rank）を振ります"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT\n  val,\n  -- ROW_NUMBERで連番を振る\n  ROW_NUMBER() OVER (ORDER BY val) AS rn\nFROM (SELECT 'A' AS val UNION SELECT 'B' UNION SELECT 'C');",
      "holeyCode": "-- SELECTで列を取得\n___\n  -- 値の列\n  ___,\n  -- ROW_NUMBERで連番を振る\n  ___() OVER (ORDER BY val) AS rn\n-- データソースを指定\n___ (SELECT 'A' AS val UNION SELECT 'B' UNION SELECT 'C');",
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
          "title": "RANK（ランク）とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 同順位（どうじゅんい）を許容\n\n**RANK()**（ランク＝「順位」）は、同じ値に同じ順位を付けます。次の順位は飛ばされます。\n\n**たとえば：** 90点が2人いたら両方1位、次の80点の人は3位になります（2位は飛ばされる）。"
        },
        {
          "title": "RANK と DENSE_RANK の違い",
          "image": "/illustrations/3d/gear.png",
          "content": "# 順位の付け方の違い\n\n点数が 90, 90, 80 のとき：\n\n- **RANK()** → 1, 1, 3（順位を飛ばす）\n- **DENSE_RANK()** → 1, 1, 2（順位を飛ばさない）\n\n**DENSE_RANK**（デンスランク＝「詰めた順位」）は、順位を飛ばしません。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT\n  val,\n  -- RANKで順位を付ける\n  RANK() OVER (ORDER BY val) AS rnk\nFROM (SELECT 1 AS val UNION ALL SELECT 1 UNION ALL SELECT 2);",
      "holeyCode": "-- SELECTで列を取得\n___\n  -- 値の列\n  ___,\n  -- RANKで順位を付ける\n  ___() OVER (ORDER BY val) AS rnk\n-- データソースを指定\n___ (SELECT 1 AS val UNION ALL SELECT 1 UNION ALL SELECT 2);",
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
          "title": "SUM() OVER とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 累積合計（るいせきごうけい）を計算\n\n**SUM() OVER** は、行ごとに「ここまでの合計」を計算できます。普通のSUMは全体で1つの値になりますが、OVER を使うと各行に値が残ります。\n\n**たとえば：** 毎日の売上を足していって「今日までの売上合計」を出すイメージです。"
        },
        {
          "title": "SUM() OVER の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# OVER (ORDER BY ...) で順番を指定\n\n**コード例：**\n```sql\nSELECT date, amount,\n       SUM(amount) OVER (ORDER BY date) AS running_total\nFROM sales;\n```\n\n**このコードは何をしているの？**\n- 日付順に並べて\n- その日までの累積合計を計算"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT\n  val,\n  -- SUMで累積合計を計算\n  SUM(val) OVER (ORDER BY val) AS running\nFROM (SELECT 1 AS val UNION ALL SELECT 2 UNION ALL SELECT 3);",
      "holeyCode": "-- SELECTで列を取得\n___\n  -- 値の列\n  ___,\n  -- SUMで累積合計を計算\n  ___(val) OVER (ORDER BY val) AS running\n-- データソースを指定\n___ (SELECT 1 AS val UNION ALL SELECT 2 UNION ALL SELECT 3);",
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
      "holeyCode": "-- SELECTで取得\n___\n  -- CASEで条件分岐\n  ___ WHEN 1 > 0 THEN 'yes' ELSE 'no' END AS result;",
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
          "image": "/illustrations/3d/gear.png",
          "content": "# 最初の非NULLを返す\n\n**COALESCE** は、引数の中で最初のNULLでない値を返します。\n\n```sql\nSELECT COALESCE(nickname, name, 'Anonymous') AS display_name\nFROM users;\n```"
        },
        {
          "title": "デフォルト値",
          "image": "/illustrations/3d/gear.png",
          "content": "# NULLの代わりに\n\n```sql\nSELECT COALESCE(phone, 'N/A') FROM contacts;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- COALESCEで最初の非NULLを返す\nSELECT COALESCE(NULL, NULL, 'default') AS val;",
      "holeyCode": "-- COALESCEで最初の非NULLを返す\nSELECT ___(NULL, NULL, 'default') AS val;",
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
          "title": "INSERT（インサート）とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 行を追加\n\n**INSERT**（インサート＝「挿入する」）でテーブルに新しいデータを追加します。\n\n**たとえば：** 新しいユーザーが登録したとき、名簿に名前を追加するようなイメージです。"
        },
        {
          "title": "INSERT の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# INSERT INTO テーブル VALUES (値)\n\n**コード例：**\n```sql\nINSERT INTO users (name, email)\nVALUES ('Alice', 'alice@example.com');\n```\n\n**このコードは何をしているの？**\n- usersテーブルに\n- 名前がAlice、メールがalice@example.comの人を追加"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "CREATE TABLE test(x TEXT);\n-- INSERTでデータを挿入\nINSERT INTO test VALUES ('hello');\nSELECT * FROM test;",
      "holeyCode": "-- CREATE TABLEでテーブルを作成\n___ TABLE test(x TEXT);\n-- INSERTでデータを挿入\n___ INTO test VALUES ('hello');\n-- SELECTでデータを取得\n___ * FROM test;",
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
          "title": "UPDATE（アップデート）とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 行を更新（こうしん）\n\n**UPDATE**（アップデート＝「更新する」）で既存のデータを変更します。\n\n**たとえば：** 引っ越ししたユーザーの住所を新しいものに書き換えるようなイメージです。"
        },
        {
          "title": "UPDATE の使い方と注意点",
          "image": "/illustrations/3d/gear.png",
          "content": "# WHERE を忘れずに！\n\n**コード例：**\n```sql\nUPDATE users\nSET email = 'new@example.com'\nWHERE id = 1;\n```\n\n**注意！** WHEREを書かないと全部のデータが変更されてしまいます！必ず条件をつけましょう。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "CREATE TABLE test(x TEXT);\nINSERT INTO test VALUES ('old');\n-- UPDATEでデータを更新\nUPDATE test SET x = 'new';\nSELECT * FROM test;",
      "holeyCode": "-- CREATE TABLEでテーブルを作成\n___ TABLE test(x TEXT);\n-- INSERTでデータを挿入\n___ INTO test VALUES ('old');\n-- UPDATEでデータを更新\n___ test SET x = 'new';\n-- SELECTでデータを取得\n___ * FROM test;",
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
          "title": "DELETE（デリート）とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 行を削除（さくじょ）\n\n**DELETE**（デリート＝「削除する」）でテーブルからデータを消します。\n\n**たとえば：** 退会したユーザーのデータを名簿から消すようなイメージです。"
        },
        {
          "title": "DELETE の使い方と注意点",
          "image": "/illustrations/3d/gear.png",
          "content": "# WHERE を忘れずに！\n\n**コード例：**\n```sql\nDELETE FROM users WHERE id = 1;\n```\n\n**注意！** WHEREを書かないと全部のデータが消えてしまいます！UPDATEと同じく、必ず条件をつけましょう。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "CREATE TABLE test(x INT);\nINSERT INTO test VALUES (1), (2), (3);\n-- DELETEでデータを削除\nDELETE FROM test WHERE x = 2;\nSELECT * FROM test;",
      "holeyCode": "-- CREATE TABLEでテーブルを作成\n___ TABLE test(x INT);\n-- INSERTでデータを挿入\n___ INTO test VALUES (1), (2), (3);\n-- DELETEでデータを削除\n___ FROM test WHERE x = 2;\n-- SELECTでデータを取得\n___ * FROM test;",
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
          "image": "/illustrations/3d/gear.png",
          "content": "# 値を文字列結合\n\n**GROUP_CONCAT** で、グループ内の値を1つの文字列に結合します。\n\n```sql\nSELECT category, GROUP_CONCAT(name, ', ')\nFROM products\nGROUP BY category;\n```"
        },
        {
          "title": "区切り文字",
          "image": "/illustrations/3d/gear.png",
          "content": "# デフォルトはカンマ\n\n```sql\nGROUP_CONCAT(name, '-')  -- ハイフン区切り\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- GROUP_CONCATで値を結合\nSELECT GROUP_CONCAT(val, '-') FROM\n  (SELECT 'A' AS val UNION SELECT 'B' UNION SELECT 'C');",
      "holeyCode": "-- SELECT GROUP_CONCAT と入力して値を結合\n___ ___(val, '-') FROM (___ 'A' AS val UNION SELECT 'B' UNION SELECT 'C');",
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

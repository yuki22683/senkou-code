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
            "title": "WHERE（ホエア）とは？",
            "content": "# 条件でフィルタ（絞り込み）\\n\\n**WHERE**（ホエア＝「どこ」という意味）は、指定した条件に合うデータだけを取得します。\\n\\n**たとえば：** 本棚から「赤い表紙の本だけ」を探すように、条件を指定してデータを絞り込めます。"
          },
          {
            "title": "WHERE の使い方",
            "content": "# SELECT ... WHERE 条件\\n\\n比較演算子（ひかくえんざんし）が使えます：\\n- `=` 等しい\\n- `>` より大きい\\n- `<` より小さい\\n- `>=` 以上\\n- `<=` 以下\\n\\n**コード例：**\\n```sql\\nSELECT * FROM users\\nWHERE age > 20;\\n```\\n\\n**このコードは何をしているの？**\\n- usersテーブルから\\n- age（年齢）が20より大きい人だけを選びます"
          }
        ],
        "initialDisplayMode": "holey",
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
            "expected_output": "found\
"
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
            "title": "ORDER BY（オーダーバイ）とは？",
            "content": "# 結果を並べ替え\\n\\n**ORDER BY**（オーダーバイ＝「〜で並べる」）は、指定した列（カラム）で結果を並べ替えます。\\n\\n**たとえば：** クラスの名簿を「あいうえお順」や「身長順」に並べ替えるようなイメージです。"
          },
          {
            "title": "昇順と降順",
            "content": "# ASC と DESC\\n\\n- `ASC`（アセンディング＝昇順）: 小さい順（1,2,3...）\\n- `DESC`（デセンディング＝降順）: 大きい順（3,2,1...）\\n\\n何も書かないとASC（昇順）になります。"
          },
          {
            "title": "ORDER BY の使い方",
            "content": "# SELECT ... ORDER BY 列 [ASC|DESC]\\n\\n**コード例：**\\n```sql\\nSELECT * FROM users\\nORDER BY age DESC;\\n```\\n\\n**このコードは何をしているの？**\\n- usersテーブルの全員を\\n- age（年齢）の大きい順に並べ替えます"
          }
        ],
        "initialDisplayMode": "holey",
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
          null
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
            "expected_output": "1\
2\
3\
"
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
            "title": "LIMIT（リミット）とは？",
            "content": "# 取得行数を制限（せいげん）\\n\\n**LIMIT**（リミット＝「制限」）は、取得する行数を制限します。\\n\\n**たとえば：** 100人の名簿から「最初の10人だけ見たい」というときに使います。大量のデータを全部見ると時間がかかるので、一部だけ取り出すのに便利です。"
          },
          {
            "title": "LIMIT の使い方",
            "content": "# SELECT ... LIMIT n\\n\\n最初の n 行だけを取得します。\\n\\n**コード例：**\\n```sql\\nSELECT * FROM users\\nLIMIT 10;\\n```\\n\\n**このコードは何をしているの？**\\n- usersテーブルから\\n- 最初の10行だけを取り出します"
          }
        ],
        "initialDisplayMode": "holey",
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
          null
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
            "expected_output": "1\
2\
"
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
            "title": "COUNT（カウント）とは？",
            "content": "# 行数を数える\\n\\n**COUNT**（カウント＝「数える」）は、条件に合う行の数を返す集計関数（しゅうけいかんすう）です。\\n\\n**たとえば：** クラスの人数を数えたり、特定の条件を満たす人が何人いるかを調べるのに使います。"
          },
          {
            "title": "COUNT の使い方",
            "content": "# COUNT(*) または COUNT(列)\\n\\n- `COUNT(*)` : すべての行を数える\\n- `COUNT(列名)` : その列がNULL（空っぽ）でない行を数える\\n\\n**コード例：**\\n```sql\\nSELECT COUNT(*) FROM users;\\n```\\n\\n**このコードは何をしているの？**\\n- usersテーブルの\\n- 全員の人数を数えます"
          }
        ],
        "initialDisplayMode": "holey",
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
            "expected_output": "3\
"
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
            "title": "SUM（サム）とは？",
            "content": "# 合計を計算\\n\\n**SUM**（サム＝「合計」）は、指定した列の値の合計を返す集計関数（しゅうけいかんすう）です。\\n\\n**たとえば：** お店の売上を全部足して「今月の売上合計」を出すようなイメージです。"
          },
          {
            "title": "SUM の使い方",
            "content": "# SUM(列)\\n\\n数値の列（カラム）の合計を計算します。\\n\\n**コード例：**\\n```sql\\nSELECT SUM(price) FROM products;\\n```\\n\\n**このコードは何をしているの？**\\n- productsテーブルの\\n- price（価格）列の値を全部足します"
          }
        ],
        "initialDisplayMode": "holey",
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
            "expected_output": "6\
"
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
            "title": "AVG（アベレージ）とは？",
            "content": "# 平均を計算\\n\\n**AVG**（アベレージ＝「平均」）は、指定した列の値の平均を返す集計関数（しゅうけいかんすう）です。\\n\\n**たとえば：** テストの点数を全員分足して、人数で割った「平均点」を出すようなイメージです。"
          },
          {
            "title": "AVG の使い方",
            "content": "# AVG(列)\\n\\n数値の列（カラム）の平均を計算します。\\n\\n**コード例：**\\n```sql\\nSELECT AVG(score) FROM exams;\\n```\\n\\n**このコードは何をしているの？**\\n- examsテーブルの\\n- score（点数）の平均値を計算します"
          }
        ],
        "initialDisplayMode": "holey",
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
            "expected_output": "20.0\
"
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
            "title": "GROUP BY（グループバイ）とは？",
            "content": "# グループごとに集計（しゅうけい）\\n\\n**GROUP BY**（グループバイ＝「〜でグループ化」）は、同じ値を持つデータをまとめます。\\n\\n**たとえば：** クラスの生徒を「男子」「女子」に分けて、それぞれの人数を数えるようなイメージです。"
          },
          {
            "title": "GROUP BY の使い方",
            "content": "# SELECT 列, 集計 ... GROUP BY 列\\n\\nグループごとに集計結果（合計、平均、件数など）を得られます。\\n\\n**コード例：**\\n```sql\\nSELECT category, COUNT(*)\\nFROM products\\nGROUP BY category;\\n```\\n\\n**このコードは何をしているの？**\\n- productsテーブルを\\n- category（カテゴリ）ごとにまとめて\\n- それぞれの商品数を数えます"
          }
        ],
        "initialDisplayMode": "holey",
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
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "GROUP"
          ],
          "others": ["SELECT", "FROM", "ALL", "B", "category"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "A|2\
B|1\
"
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
            "title": "HAVING（ハビング）とは？",
            "content": "# グループに条件を付ける\\n\\n**HAVING**（ハビング＝「持っている」）は、GROUP BY の結果に対して条件を指定します。\\n\\n**WHEREとの違い：**\\n- `WHERE` : グループ化する**前**に絞り込む\\n- `HAVING` : グループ化した**後**に絞り込む"
          },
          {
            "title": "HAVING の使い方",
            "content": "# GROUP BY ... HAVING 条件\\n\\n集計した結果（合計、件数など）で絞り込めます。\\n\\n**コード例：**\\n```sql\\nSELECT category, COUNT(*)\\nFROM products\\nGROUP BY category\\nHAVING COUNT(*) > 5;\\n```\\n\\n**このコードは何をしているの？**\\n- カテゴリごとにグループ化した後\\n- 5件より多いカテゴリだけを表示します"
          }
        ],
        "initialDisplayMode": "holey",
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
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "HAVING"
          ],
          "others": ["SELECT", "FROM", "ALL", "B", "1"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "A|2\
"
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
            "title": "CASE（ケース）とは？",
            "content": "# 条件で値を変える\\n\\n**CASE**（ケース＝「場合」）は、条件によって異なる値を返す式です。\\n\\n**たとえば：** テストの点数で「80点以上ならA、60点以上ならB、それ以外はC」のように、条件で結果を変えられます。プログラミングの if-else と同じ考え方です。"
          },
          {
            "title": "CASE の書き方",
            "content": "# CASE WHEN 条件 THEN 値 END\\n\\n複数の条件を順番に書けます。\\n\\n**各部分の意味：**\\n- `CASE` : 「場合分けを始めます」\\n- `WHEN 条件 THEN 値` : 「〜のとき、〇〇を返す」\\n- `ELSE 値` : 「どれにも当てはまらなければ〇〇」\\n- `END` : 「場合分けを終わります」"
          },
          {
            "title": "CASE の例",
            "content": "**コード例：**\\n```sql\\nSELECT CASE\\n  WHEN score >= 80 THEN 'A'\\n  WHEN score >= 60 THEN 'B'\\n  ELSE 'C'\\nEND FROM scores;\\n```\\n\\n**このコードは何をしているの？**\\n- 80点以上 → 'A'を返す\\n- 60点以上 → 'B'を返す\\n- それ以外 → 'C'を返す"
          }
        ],
        "initialDisplayMode": "holey",
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
          "others": ["SELECT", "WHEN", "ELSE", "END", "85", "fail", "失敗"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "pass\
"
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
            "title": "COALESCE（コアレス）とは？",
            "content": "# NULLの代替値（だいたいち）\\n\\n**COALESCE**（コアレス＝「合体する」）は、引数の中で最初のNULLでない値を返します。\\n\\n**たとえば：** 電話番号が空っぽ（NULL）の人には「未登録」と表示したい場合などに使います。空っぽのときの「代わりの値」を指定できます。"
          },
          {
            "title": "COALESCE の使い方",
            "content": "# COALESCE(値1, 値2, ...)\\n\\n左から順にチェックして、最初のNULLでない値を返します。\\n\\n**コード例：**\\n```sql\\nSELECT COALESCE(name, '不明')\\nFROM users;\\n```\\n\\n**このコードは何をしているの？**\\n- nameがNULLでなければnameを返す\\n- nameがNULLなら'不明'を返す"
          }
        ],
        "initialDisplayMode": "holey",
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
            "expected_output": "default\
"
          }
        ]
      }
  ]
}

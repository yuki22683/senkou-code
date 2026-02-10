export const sql2Data = {
  "language": "sql",
  "lessonId": "sql-2",
  "lessonTitle": "SQL II - テーブル操作とJOIN",
  "lessonDescription": "SQLの実践的な機能を学びます。複数テーブルの結合、集計関数、グループ化などデータベース操作の基本を身につけましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "tutorialSlides": [
    {
      "title": "WHERE による絞り込み",
      "content": "`WHERE` 句で条件を指定して行を絞り込みます。\\n\\n```sql\\nSELECT * FROM users\\nWHERE age >= 20;\\n\\nSELECT * FROM products\\nWHERE price > 1000 AND category = '電子機器';\\n```\\n\\n比較演算子: `=`, `<>`, `>`, `<`, `>=`, `<=`\\n論理演算子: `AND`, `OR`, `NOT`"
    },
    {
      "title": "ORDER BY と LIMIT",
      "content": "`ORDER BY` で並べ替え、`LIMIT` で件数を制限します。\\n\\n```sql\\n-- 昇順（デフォルト）\\nSELECT * FROM users ORDER BY age;\\n\\n-- 降順\\nSELECT * FROM users ORDER BY age DESC;\\n\\n-- 上位3件のみ\\nSELECT * FROM users ORDER BY score DESC LIMIT 3;\\n```"
    },
    {
      "title": "集計関数",
      "content": "データを集計する関数が用意されています。\\n\\n```sql\\n-- 件数\\nSELECT COUNT(*) FROM users;\\n\\n-- 合計・平均・最大・最小\\nSELECT SUM(price) FROM orders;\\nSELECT AVG(score) FROM students;\\nSELECT MAX(age), MIN(age) FROM users;\\n```\\n\\n`COUNT(*)` は全行、`COUNT(列名)` はNULLを除いた行数です。"
    },
    {
      "title": "GROUP BY",
      "content": "`GROUP BY` でグループ化して集計します。\\n\\n```sql\\nSELECT category, COUNT(*) AS cnt\\nFROM products\\nGROUP BY category;\\n\\n-- 結果例:\\n-- 電子機器 | 15\\n-- 食品     | 8\\n```\\n\\n`HAVING` でグループ化後の条件を指定します。\\n\\n```sql\\nGROUP BY category HAVING COUNT(*) > 10;\\n```"
    },
    {
      "title": "CASE 式",
      "content": "`CASE` で条件分岐ができます。\\n\\n```sql\\nSELECT name,\\n  CASE\\n    WHEN score >= 80 THEN '合格'\\n    WHEN score >= 60 THEN '再試験'\\n    ELSE '不合格'\\n  END AS result\\nFROM students;\\n```\\n\\n結果を列として出力できます。"
    },
    {
      "title": "NULL 処理",
      "content": "`COALESCE` でNULLを別の値に置き換えます。\\n\\n```sql\\nSELECT COALESCE(nickname, name) FROM users;\\n-- nicknameがNULLならnameを使う\\n\\nSELECT COALESCE(NULL, NULL, 'デフォルト');\\n-- => 'デフォルト'\\n```\\n\\n最初の非NULL値を返します。"
    }
  ],
  "exercises": [
    {
      "title": "WHERE で絞り込み",
      "description": "条件を指定してデータを絞り込む方法を学びます",
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
      "description": "複数の条件を組み合わせる方法を学びます",
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
      "description": "LIMIT で件数制限の仕組みと使い方を学びます",
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
      "description": "COUNT で件数を数えるの仕組みと使い方を学びます",
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
      "description": "プログラムで数値を計算する方法を学びます",
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
      "description": "プログラムで数値を計算する方法を学びます",
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
      "description": "GROUP BY でグループ化の仕組みと使い方を学びます",
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
      "description": "HAVING でグループを絞り込みの仕組みと使い方を学びます",
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
      "description": "条件によって処理を分ける「条件分岐」を学びます",
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
      "description": "COALESCE でNULL処理の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "COALESCE（コアレス）とは？",
          "content": "# NULLの代替値（だいたいち）\\n\\n**COALESCE**（コアレス＝「合体する」）は、引数の中で最初のNULLでない値を返します。\\n\\n**たとえば：** 電話番号が空っぽ（NULL）の人には「未登録」と表示したい場合などに使います。空っぽのときの「代わりの値」を指定できます。"
        },
        {
          "title": "COALESCE の使い方",
          "content": "# COALESCE(値1, 値2, ...)\\n\\n左から順にチェックして、最初のNULLでない値を返します。\\n\\n**コード例：**\\n```sql\\nSELECT COALESCE(name, 'Unknown')\\nFROM users;\\n```\\n\\n**このコードは何をしているの？**\\n- nameがNULLでなければnameを返す\\n- nameがNULLなら'Unknown'を返す"
        }
      ],
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

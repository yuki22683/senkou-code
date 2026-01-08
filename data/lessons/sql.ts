export const sqlData = {
  "language": "sql",
  "lessonId": "sql-1",
  "lessonTitle": "SQL (エスキューエル) に挑戦！",
  "lessonDescription": "たくさんのデータがしまってある「倉庫（そうこ）」から、ほしいデータを取り出すための言葉「SQL（エスキューエル）」のきほんを学びましょう。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面に文字を出してみましょう",
      "description": "SQLを使って、画面に「こんにちは」と表示させてみましょう。SELECT（セレクト）というキーワードを使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "SQL（エスキューエル）とは？",
          "image": "/illustrations/common/monitor.png",
          "content": "# データの倉庫から取り出す言葉\n\nSQLは、データベースという「情報の倉庫」に対して、「このデータをください！」と命令するための言葉です。Webアプリやスマホアプリの裏側で、情報を探すときに必ず使われます。"
        },
        {
          "title": "ほしいデータを選ぶ SELECT",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# SELECT（セレクト）\n\n「これを選んでください！」とお願いするときは `SELECT` と入力します。ただの文字を表示させたいときもこれを使います。\n\n```sql\nSELECT '表示したい文字';\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\n`SELECT` を使って `'Hello, World!'` と表示させてみましょう。さいごに `;`（セミコロン）を入力するのがルールです。\n\n**入力するコードのヒント：**\n```sql\nSELECT 'Hello, World!';\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- SELECTでデータを取得\nSELECT 'Hello, World!';",
      "holeyCode": "-- SELECTでデータを取得\n___ 'Hello, World!';",
      "correctLines": [
        "-- 'Hello, World!'を表示",
        "SELECT 'Hello, World!';"
      ],
      "lineHints": [
        "ここはメモ（コメント）です。",
        "やりかたは「SELECT」です。"
      ],
      "candidates": {
        "functions": [
          "SELECT"
        ],
        "strings": [
          "'Hello, World!'"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, World!\n"
        }
      ]
    }
  ]
};
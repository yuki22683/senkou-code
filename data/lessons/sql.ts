export const sqlData = {
  "language": "sql",
  "lessonId": "sql-1",
  "lessonTitle": "SQL I",
  "lessonDescription": "データベースを操作するための言語SQLの基礎を学びます。データの取得、条件指定、並び替えなどの基本的な操作を習得しましょう。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "Hello World",
      "description": "SQLで文字列を表示してみましょう。SELECT文を使って'Hello, World!'という文字を取得（表示）します。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "データの取得",
          "content": "# SELECT文\n\nデータベースからデータを取り出すには `SELECT` を使います。\n単純な文字列を表示する場合も `SELECT` を使用します。\n\n```sql\nSELECT '表示したい文字';\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n`SELECT` を使って `'Hello, World!'` と出力してみましょう。\n末尾のセミコロン `;` も忘れずに。\n\n**コード例：**\n```sql\nSELECT 'Hello, World!';\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- 'Hello, World!'を表示\nSELECT 'Hello, World!';",
      "holeyCode": "-- 'Hello, World!'を表示\n___ 'Hello, World!';",
      "correctLines": ["-- 'Hello, World!'を表示", "SELECT 'Hello, World!';"],
      "lineHints": [
        null,
        "命令は「SELECT」です。"
      ],
      "candidates": {
        "functions": ["SELECT"],
        "strings": ["'Hello, World!'"]
      },
      "testCases": [{ "input": "", "expected_output": "Hello, World!\n" }]
    },
    {
      "title": "全てのカラムを取得",
      "description": "usersテーブルから全てのデータを取得してみましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "テーブルからの取得",
          "content": "# FROM句\n\nどこのテーブルからデータを取るかを `FROM` で指定します。\n全てのカラム（列）を取得するにはアスタリスク `*` を使います。\n\n```sql\nSELECT * FROM テーブル名;\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n`users` テーブルから全てのデータを取得しましょう。\n\n**コード例：**\n```sql\nSELECT * FROM users;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- usersテーブルの全データを取得\nSELECT * FROM users;",
      "holeyCode": "-- usersテーブルの全データを取得\nSELECT ___ FROM ___;",
      "correctLines": ["-- usersテーブルの全データを取得", "SELECT * FROM users;"],
      "lineHints": [
        null,
        "全カラム指定は * 、テーブル指定は FROM users です。"
      ],
      "candidates": {
        "functions": ["SELECT", "FROM"],
        "variables": ["*", "users"]
      },
      "testCases": [{ "input": "", "expected_output": "id|name|age\n1|Alice|25\n2|Bob|30\n" }]
    },
    {
      "title": "条件を指定して取得",
      "description": "usersテーブルから、年齢(age)が20以上のユーザーの名前(name)を取得してみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "条件指定",
          "content": "# WHERE句\n\n特定の条件に合うデータだけを取得するには `WHERE` を使います。\n\n```sql\nSELECT カラム名 FROM テーブル名 WHERE 条件;\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n`users` テーブルから `age` が `20` 以上のデータの `name` を取得しましょう。\n\n**コード例：**\n```sql\nSELECT name FROM users WHERE age >= 20;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- ageが20以上のユーザーのnameを取得\nSELECT name FROM users WHERE age >= 20;",
      "holeyCode": "-- ageが20以上のユーザーのnameを取得\nSELECT ___ FROM users ___ age >= 20;",
      "correctLines": ["-- ageが20以上のユーザーのnameを取得", "SELECT name FROM users WHERE age >= 20;"],
      "lineHints": [
        null,
        "取得するのは name 、条件指定は WHERE です。"
      ],
      "candidates": {
        "functions": ["SELECT", "FROM", "WHERE"],
        "variables": ["name", "users", "age"],
        "operators": [">="],
        "numbers": ["20"]
      },
      "testCases": [{ "input": "", "expected_output": "Alice\nBob\n" }]
    }
  ]
};

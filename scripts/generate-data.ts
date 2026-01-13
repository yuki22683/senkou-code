import fs from 'fs';

// バッククォートを安全に扱うための定数
const BQ = "`";

const data = [
  {
    "language": "python",
    "lessonId": "python-1",
    "lessonTitle": "Python I",
    "lessonDescription": "Pythonの基本的な文法を学びます。変数、リスト、条件分岐、ループ、関数など、プログラミングの根幹となる概念を習得しましょう。",
    "lessonDifficulty": "easy",
    "lessonOrder": 1,
    "exercises": [
      {
        "title": "Hello Worldを出力しよう",
        "description": "Pythonプログラミングの第一歩として、画面に「Hello, World!」という文字を表示させる方法を学びましょう。print関数を使ってHello, World!と出力するプログラムを作りましょう。",
        "difficulty": "easy",
        "orderIndex": 1,
        "tutorialSlides": [
          { "title": "Pythonへようこそ！", "content": "Pythonは読みやすく書きやすいことが特徴の言語です。" },
          { "title": "文字を出力する", "content": "print() 命令を使って括弧の中身を表示します。" }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 「Hello, World!」と出力\nprint('Hello, World!')",
        "holeyCode": "# 「Hello, World!」と出力\nprint('___')",
        "correctLines": ["# 「Hello, World!」と出力", "print('Hello, World!')"],
        "lineHints": [null, "print命令を使い、文字列を引用符で囲みます。"],
        "candidates": { "functions": ["print"], "strings": ["Hello, World!"] },
        "testCases": [{ "input": "", "expected_output": "Hello, World!\n" }]
      },
      {
        "title": "関数の定義と呼び出し",
        "description": "処理を一つにまとめる「関数」を作りましょう。挨拶を表示する関数 greet を定義し、中身で「Good morning」と表示させ、最後にその関数を呼び出して実行するプログラムを作りましょう。",
        "difficulty": "easy",
        "orderIndex": 10,
        "tutorialSlides": [
          { "title": "関数の定義", "content": "def 関数名(): で定義し、インデントを下げて処理を書きます。" }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 関数greetを定義\ndef greet():\n    print('Good morning')\n# 関数を呼び出す\ngreet()",
        "holeyCode": "# 関数greetを定義\ndef ___():\n    print('___')\n# 関数を呼び出す\n___()",
        "correctLines": ["# 関数greetを定義", "def greet():", "    print('Good morning')", "# 関数を呼び出す", "greet()"],
        "lineHints": [null, "def greet(): と記述して関数を定義します。", "インデントを下げて print('Good morning') と書きます。", null, "greet() と書いて関数を実行します。"],
        "candidates": { "functions": ["greet", "print"], "strings": ["Good morning"] },
        "testCases": [{ "input": "", "expected_output": "Good morning\n" }]
      }
    ]
  },
  {
    "language": "javascript",
    "lessonId": "javascript-1",
    "lessonTitle": "JavaScript I",
    "lessonDescription": "Web開発の必須言語JavaScriptの基本を学びます。",
    "lessonDifficulty": "easy",
    "lessonOrder": 1,
    "exercises": [
      {
        "title": "Hello Worldを出力しよう",
        "description": "ブラウザのコンソールに文字を表示しましょう。console.logを使って Hello, JavaScript! と出力するプログラムを作りましょう。",
        "difficulty": "easy",
        "orderIndex": 1,
        "tutorialSlides": [
          { "title": "JavaScriptの出力", "content": "console.log() を使って文字を表示します。" }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// 「Hello, JavaScript!」と出力\nconsole.log('Hello, JavaScript!');",
        "holeyCode": "// 「Hello, JavaScript!」と出力\nconsole.log('___');",
        "correctLines": ["// 「Hello, JavaScript!」と出力", "console.log('Hello, JavaScript!');"],
        "lineHints": [null, "console.log を使い、最後はセミコロン(;)で締めます。"],
        "candidates": { "functions": ["console.log"], "strings": ["Hello, JavaScript!"] },
        "testCases": [{ "input": "", "expected_output": "Hello, JavaScript!\n" }]
      },
      {
        "title": "テンプレートリテラル",
        "description": "文章の中に変数を埋め込みましょう。定数 age に 20 を代入し、バッククォートの文字列の中で ${age} を使って「私は20歳です」と表示するプログラムを作りましょう。",
        "difficulty": "easy",
        "orderIndex": 4,
        "tutorialSlides": [
          { "title": "埋め込み構文", "content": "バッククォートで囲み、${変数名} で埋め込みます。" }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "const age = 20;\n// 埋め込み出力\nconsole.log(`私は${age}歳です`);",
        "holeyCode": "const age = ___ ;\n// 埋め込み出力\nconsole.log(`私は${___}歳です`);",
        "correctLines": ["const age = 20;", "// 埋め込み出力", "console.log(`私は${age}歳です`);"],
        "lineHints": ["age = 20; と代入します。", null, "`${age}` を使って文字列を組み立てます。"],
        "candidates": { "variables": ["age"], "functions": ["console.log"], "numbers": ["20"] },
        "testCases": [{ "input": "", "expected_output": "私は20歳です\n" }]
      }
    ]
  },
  {
    "language": "typescript",
    "lessonId": "typescript-1",
    "lessonTitle": "TypeScript I",
    "lessonDescription": "TypeScriptの基礎を学びます。型定義の基本をマスターしましょう。",
    "lessonDifficulty": "easy",
    "lessonOrder": 1,
    "exercises": [
      {
        "title": "型を指定した変数宣言",
        "description": "変数に型を付けて安全に宣言しましょう。string型の変数 message に文字列 'Hello TS' を代入して表示するプログラムを作りましょう。",
        "difficulty": "easy",
        "orderIndex": 1,
        "tutorialSlides": [
          { "title": "型定義", "content": "変数名の後に : string のように型を書きます。" }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "const message: string = 'Hello TS';\nconsole.log(message);",
        "holeyCode": "const message: ___ = '___';\nconsole.log(___);",
        "correctLines": ["const message: string = 'Hello TS';", "console.log(message);"],
        "lineHints": ["型に string を指定し、値を代入します。", "変数を出力します。"],
        "candidates": { "variables": ["message"], "functions": ["console.log"], "strings": ["string", "Hello TS"] },
        "testCases": [{ "input": "", "expected_output": "Hello TS\n" }]
      }
    ]
  },
  {
    "language": "java",
    "lessonId": "java-1",
    "lessonTitle": "Java I",
    "lessonDescription": "Javaの基本を学びます。クラスとメソッドの構造を習得しましょう。",
    "lessonDifficulty": "easy",
    "lessonOrder": 1,
    "exercises": [
      {
        "title": "Hello Worldを出力しよう",
        "description": "Javaの標準出力メソッドを使いましょう。System.out.println を使って Hello, Java! と表示するプログラムを作りましょう。",
        "difficulty": "easy",
        "orderIndex": 1,
        "tutorialSlides": [
          { "title": "Javaの基本", "content": "public class Main { ... } の中にコードを書きます。" }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "holeyCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"___\");\n    }\n}",
        "correctLines": ["public class Main {", "    public static void main(String[] args) {", "        System.out.println(\"Hello, Java!\");", "    }", "}"],
        "lineHints": [null, null, "System.out.println を使用します。"],
        "candidates": { "functions": ["System.out.println"], "strings": ["Hello, Java!"] },
        "testCases": [{ "input": "", "expected_output": "Hello, Java!\n" }]
      }
    ]
  }
];

fs.writeFileSync('data/sample-exercises.json', JSON.stringify(data, null, 2));
console.log('Successfully generated data/sample-exercises.json');
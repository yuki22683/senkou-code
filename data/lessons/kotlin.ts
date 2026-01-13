export const kotlinData = {
  "language": "kotlin",
  "lessonId": "kotlin-1",
  "lessonTitle": "Kotlin (コトリン) に挑戦！",
  "lessonDescription": "Android（アンドロイド）スマホのアプリ作りなどで大人気の言葉「Kotlin（コトリン）」のきほんを学びましょう。新しくて使いやすい機能がたくさんあります。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "description": "Kotlinを使って画面に「こんにちは」と表示させてみましょう。println（プリント・ライン）という関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Kotlin（コトリン）とは？",
          "image": "/illustrations/common/monitor.png",
          "content": "# Androidアプリ開発の主役\n\nKotlinは、Javaという言葉をベースに、より短く安全に書けるように改良されたモダンなプログラミング言語です。Googleも「Androidアプリ開発の推奨言語」として選んでいる、今注目の言葉です。"
        },
        {
          "title": "画面に文字を出すには？",
          "image": "/illustrations/common/monitor.png",
          "content": "# println（プリント・ライン）\n\n画面に文字を出したいときは、`println()` という命令を使います。文字は `\" \"`（ダブルクォート）で囲んで入力しましょう。プログラミングの基本です！"
        },
        {
          "title": "println を使いましょう",
          "image": "/illustrations/common/monitor.png",
          "content": "# メッセージを表示します\n\n画面に文字を出して改行（かいぎょう）したいときは、`println()` という名前の関数を使います。カッコの中に表示したいものを入力しましょう。\n\n```kotlin\nprintln(\\\"Hello, World!\\\")\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\n`println()` を使って `Hello, World!` と表示させてみましょう。\n\n**入力するコードのヒント：**\n```kotlin\nprintln(\\\"Hello, World!\\\")\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// Hello, World!と出力する関数\nprintln(\"Hello, World!\")",
      "holeyCode": "// println で出力する\n___(\"Hello, World!\")",
      "correctLines": [
        "// Hello, World!と出力する関数",
        "println(\"Hello, World!\")"
      ],
      "lineHints": [
        null,
        "関数は println です。 L ではなく 小文字の l（エル）です。"
      ],
      "candidates": {
        "functions": [
          "println"
        ],
        "strings": [
          "\"Hello, World!\""
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, World!\n"
        }
      ]
    },
    {
      "title": "たくさんのデータをまとめましょう「リスト」",
      "description": "「リスト」を使うと、たくさんのデータを一つの「長い はこ」にまとめて入れられます。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "リストとは？",
          "image": "/illustrations/common/list.png",
          "content": "# データの行列\n\nたくさんのデータを順番に並べておきたいときに使うのが **リスト** です。買い物リストなどを一つの変数にまとめて管理できます。"
        },
        {
          "title": "リストの番号は「0」から！",
          "image": "/illustrations/common/list.png",
          "content": "# 番号で指定しましょう\n\nリストの中身を取り出すときは、何番目かを指定します。プログラミングでは、**さいしょのデータは「0番」** と数えるルールなのです。\n\n```kotlin\nval fruits = listOf(\"りんご\", \"バナナ\", \"みかん\")\nprintln(fruits[0])\n```\n=> りんご"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// colors というリストを作る（'あか', 'あお'の順）\nval colors = listOf(\"あか\", \"あお\")\n// 2番目のデータ（1番）を出す\nprintln(colors[1])",
      "holeyCode": "// colors というリストを作る（'あか', 'あお'の順）\nval colors = listOf(\"___\", \"___\")\n// 2番目のデータ（1番）を出す\nprintln(colors[___])",
      "correctLines": [
        "// colors というリストを作る（'あか', 'あお'の順）",
        "val colors = listOf(\"あか\", \"あお\")",
        "// 2番目のデータ（1番）を出す",
        "println(colors[1])"
      ],
      "lineHints": [
        null,
        "listOf(\"あか\", \"あお\") と入力しましょう。",
        null,
        "2番目のデータの番号は 1 です。 `colors[1]` と入力してください。"
      ],
      "candidates": {
        "variables": [
          "colors"
        ],
        "functions": [
          "println",
          "listOf"
        ],
        "strings": [
          "あか",
          "あお"
        ],
        "numbers": [
          "1"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "あお\n"
        }
      ]
    },
    {
      "title": "名前で引き出す「辞書」",
      "description": "「辞書」を使うと、名前をつけてデータを保存し、その名前で取り出せます。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "辞書とは？",
          "image": "/illustrations/common/dict.png",
          "content": "# キーとあたいのペア\n\n「名前」と「データ」をセットにして保存できます。辞書のように使うことができます。\n\n**コード例：**\n```kotlin\nval fruits = mapOf(\"りんご\" to \"あか\", \"バナナ\" to \"きいろ\")\nprintln(fruits[\"りんご\"])\n```"
        },
        {
          "title": "辞書の使い方",
          "image": "/illustrations/common/dict.png",
          "content": "# [ ] で取り出しましょう\n\n辞書から値を取り出すには `[キー]` を使います。\n\n```kotlin\nval fruits = mapOf(\"りんご\" to \"あか\")\nprintln(fruits[\"りんご\"])\n```\n=> あか"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 辞書を作る（キーは'みかん'、値は'オレンジ'）\nval colors = mapOf(\"みかん\" to \"オレンジ\")\n// 中身を出す\nprintln(colors[\"みかん\"])",
      "holeyCode": "// 辞書を作る（キーは'みかん'、値は'オレンジ'）\nval colors = mapOf(\"___\" to \"___\")\n// 中身を出す\nprintln(colors[\"___\"])",
      "correctLines": [
        "// 辞書を作る（キーは'みかん'、値は'オレンジ'）",
        "val colors = mapOf(\"みかん\" to \"オレンジ\")",
        "// 中身を出す",
        "println(colors[\"みかん\"])"
      ],
      "lineHints": [
        null,
        "mapOf(\"みかん\" to \"オレンジ\") と入力しましょう。",
        null,
        "colors[\"みかん\"] と入力しましょう。"
      ],
      "candidates": {
        "variables": [
          "colors"
        ],
        "functions": [
          "println",
          "mapOf"
        ],
        "strings": [
          "みかん",
          "オレンジ"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "オレンジ\n"
        }
      ]
    }
  ]
};
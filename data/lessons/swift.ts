export const swiftData = {
  "language": "swift",
  "lessonId": "swift-1",
  "lessonTitle": "Swift (スウィフト) に挑戦！",
  "lessonDescription": "iPhone（アイフォーン）のアプリ作りなどで使われる言葉「Swift（スウィフト）」のきほんを学びましょう。きれいで分かりやすいプログラムを作れるようになります。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "description": "Swiftを使って画面に「こんにちは」と表示させてみましょう。print（プリント）という関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Swift（スウィフト）とは？",
          "image": "/illustrations/common/monitor.png",
          "content": "# Apple製品を支える言葉\n\nSwiftは、Appleが開発した、iPhoneやMacのアプリを作るためのプログラミング言語です。動作がとても速く、書いたコードが読みやすいことが大きな特徴です。"
        },
        {
          "title": "画面に文字を出すには？",
          "image": "/illustrations/common/monitor.png",
          "content": "# print（プリント）\n\n画面に文字を出したいときは、`print()` という命令を使います。文字は `\" \"`（ダブルクォート）で囲んで入力しましょう。プログラミングの基本です！"
        },
        {
          "title": "print を使いましょう",
          "image": "/illustrations/common/monitor.png",
          "content": "# メッセージを表示します\n\n画面に文字を出したいときは、`print()` という名前の関数を使います。カッコの中に表示したいものを入力しましょう。\n\n```swift\nprint(\"表示したい文字\")\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\n`print()` を使って `Hello, World!` と表示させてみましょう。\n\n**入力するコードのヒント：**\n```swift\nprint(\"Hello, World!\")\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// Hello, World!と出力する関数\nprint(\"Hello, World!\")",
      "holeyCode": "// Hello, World!と出力する関数\n___(\"Hello, World!\")",
      "correctLines": [
        "// Hello, World!と出力する関数",
        "print(\"Hello, World!\")"
      ],
      "lineHints": [
        null,
        "画面に出す関数は `print` です。"
      ],
      "candidates": {
        "functions": [
          "print"
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
      "title": "たくさんのデータをまとめましょう「配列」",
      "description": "「配列（はいれつ）」を使うと、たくさんのデータを一つの「長い はこ」にまとめて入れられます。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "配列（はいれつ）とは？",
          "image": "/illustrations/common/list.png",
          "content": "# データの行列\n\nたくさんのデータを順番に並べておきたいときに使うのが **配列（はいれつ）** です。買い物リストなどを一つの変数にまとめて管理できます。"
        },
        {
          "title": "配列の番号は「0」から！",
          "image": "/illustrations/common/list.png",
          "content": "# 番号で指定しましょう\n\n配列の中身を取り出すときは、何番目かを指定します。プログラミングでは、**さいしょのデータは「0番」** と数えるルールなのです。\n\n```swift\nlet fruits = [\"りんご\", \"バナナ\", \"みかん\"]\nprint(fruits[0])\n```\n=> りんご"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// colors という配列を作る（'あか', 'あお'の順）\nlet colors = [\"あか\", \"あお\"]\n// 2番目のデータ（1番）を出す\nprint(colors[1])",
      "holeyCode": "// colors という配列を作る（'あか', 'あお'の順）\nlet colors = [\"___\", \"___\"]\n// 2番目のデータ（1番）を出す\nprint(colors[___])",
      "correctLines": [
        "// colors という配列を作る（'あか', 'あお'の順）",
        "let colors = [\"あか\", \"あお\"]",
        "// 2番目のデータ（1番）を出す",
        "print(colors[1])"
      ],
      "lineHints": [
        null,
        "[\"あか\", \"あお\"] と入力しましょう。",
        null,
        "2番目のデータの番号は 1 です。 `colors[1]` と入力してください。"
      ],
      "candidates": {
        "variables": [
          "colors"
        ],
        "functions": [
          "print"
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
      "description": "「辞書（じしょ）」を使うと、名前をつけてデータを保存し、その名前で取り出せます。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "辞書（じしょ）とは？",
          "image": "/illustrations/common/dict.png",
          "content": "# キーとあたいのペア\n\n「名前」と「データ」をセットにして保存できます。辞書のように使うことができます。\n\n**コード例：**\n```swift\nlet fruits = [\"りんご\": \"あか\", \"バナナ\": \"きいろ\"]\nprint(fruits[\"りんご\"]!)\n```"
        },
        {
          "title": "辞書の使い方",
          "image": "/illustrations/common/dict.png",
          "content": "# [ ] で取り出しましょう\n\n辞書から値を取り出すには `[キー]` を使います。末尾の `!` は「値が必ずある」ことを示す記号です。\n\n```swift\nlet fruits = [\"りんご\": \"あか\"]\nprint(fruits[\"りんご\"]!)\n```\n=> あか"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 辞書を作る（キーは'みかん'、値は'オレンジ'）\nlet colors = [\"みかん\": \"オレンジ\"]\n// 中身を出す\nprint(colors[\"みかん\"]!)",
      "holeyCode": "// 辞書を作る（キーは'みかん'、値は'オレンジ'）\nlet colors = [\"___\": \"___\"]\n// 中身を出す\nprint(colors[\"___\"]!)",
      "correctLines": [
        "// 辞書を作る（キーは'みかん'、値は'オレンジ'）",
        "let colors = [\"みかん\": \"オレンジ\"]",
        "// 中身を出す",
        "print(colors[\"みかん\"]!)"
      ],
      "lineHints": [
        null,
        "[\"みかん\": \"オレンジ\"] と入力しましょう。",
        null,
        "colors[\"みかん\"]! と入力しましょう。"
      ],
      "candidates": {
        "variables": [
          "colors"
        ],
        "functions": [
          "print"
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
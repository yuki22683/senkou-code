export const pythonData3 = {
  "language": "python",
  "lessonId": "python-3",
  "lessonTitle": "Python III - 上級テクニック",
  "lessonDescription": "Pythonの高度な機能を学びます。ラムダ式、ジェネレータ、デコレータなど、プロ級のテクニックを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "exercises": [
    {
      "title": "ラムダ式（無名関数）",
      "description": "名前のない小さな関数「ラムダ式」を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "ラムダ式とは？",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# 1行で書ける関数\n\n**lambda** を使うと、名前のない小さな関数を1行で書けます。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# ラムダ式で2乗を計算\nsquare = lambda x: x ** 2\nprint(square(5))",
      "holeyCode": "# ラムダ式を使って、変数 square に代入しましょう\n___\n# 変数 square を使って 5 の2乗を表示しましょう\n___",
      "correctLines": [
        "# ラムダ式を使って、変数 square に代入しましょう",
        "square = lambda x: x ** 2",
        "# 変数 square を使って 5 の2乗を表示しましょう",
        "print(square(5))"
      ],
      "lineHints": [
        null,
        "lambda キーワードを使います。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["lambda"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "25\n"
        }
      ]
    },
    {
      "title": "enumerate で番号付きループ",
      "description": "ループで要素と一緒にインデックスを取得しましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "enumerate とは？",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# インデックスと要素を同時に取得\n\n**enumerate** を使うと、ループで番号（インデックス）と要素を同時に取得できます。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 番号付きでリストを表示\ncolors = ['red', 'green', 'blue']\n# enumerateでインデックスと要素を取得\nfor i, color in enumerate(colors):\n    print(f'{i}: {color}')",
      "holeyCode": "# リスト colors を定義しましょう\n___
# enumerate を使ってインデックス i と要素 color を取り出すループを作りましょう\n___
    # f-string を使って表示しましょう\n    ___",
      "correctLines": [
        "# リスト colors を定義しましょう",
        "colors = ['red', 'green', 'blue']",
        "# enumerate を使ってインデックス i と要素 color を取り出すループを作りましょう",
        "for i, color in enumerate(colors):",
        "    # f-string を使って表示しましょう",
        "    print(f'{i}: {color}')"
      ],
      "lineHints": [
        null,
        null,
        null,
        "enumerate(colors) を使います。",
        null
      ],
      "candidates": {
        "functions": ["enumerate"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "0: red\n1: green\n2: blue\n"
        }
      ]
    }
  ]
}
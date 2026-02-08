export const cData = {
  "language": "c",
  "lessonId": "c-1",
  "lessonTitle": "C (シー) 言語に挑戦！",
  "lessonDescription": "たくさんのプログラミング言語のもとになった「C（シー）言語」のきほんを学びましょう。コンピュータに正しい手順で指示を出す方法を身につけます。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面に文字を出してみましょう",
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // Hello, World!を表示する\\n    printf(\"Hello, World!\\n\");\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // Hello, World!を表示する\\n    ___(\"Hello, World!\\n___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
          "// 標準入出力ライブラリを読み込む",
          "#include <stdio.h>",
          "// mainはプログラムのエントリーポイント",
          "int main() {",
          "    // Hello, World!を表示する",
          "    printf(\"Hello, World!",
          "\");",
          "    // 正常終了を示す0を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
      "candidates": {
        "functions": [
          "printf"
        ],
        "strings": [
          "Hello, World!"
        ],
        "others": ["stdio.h", "main", "0", "\");", "}"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, World!\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "数字を入れる「はこ」int",
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // xに10を代入する\\n    int x = 10;\\n    // xの値を表示する\\n    printf(\"%d\\n\", x);\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // xに10を代入する\\n    int x = ___;\\n    // xの値を表示する\\n    ___(\"%d\\n___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
          "// 標準入出力ライブラリを読み込む",
          "#include <stdio.h>",
          "// mainはプログラムのエントリーポイント",
          "int main() {",
          "    // xに10を代入する",
          "    int x = 10;",
          "    // xの値を表示する",
          "    printf(\"%d",
          "\", x);",
          "    // 正常終了を示す0を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "整数型の変数を宣言します。",
          null,
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
      "candidates": {
        "others": ["stdio.h", "main", "10", "x", "0", "printf", " x);", "}", " x);", "\", x);"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "コンピュータで計算しましょう",
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // aに10を代入する\\n    int a = 10;\\n    // bに3を代入する\\n    int b = 3;\\n    // a - bの結果を表示する\\n    printf(\"%d\\n\", a - b);\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // aに10を代入する\\n    int a = ___;\\n    // bに3を代入する\\n    int b = ___;\\n    // a - bの結果を表示する\\n    ___(\"%d\\n___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
          "// 標準入出力ライブラリを読み込む",
          "#include <stdio.h>",
          "// mainはプログラムのエントリーポイント",
          "int main() {",
          "    // aに10を代入する",
          "    int a = 10;",
          "    // bに3を代入する",
          "    int b = 3;",
          "    // a - bの結果を表示する",
          "    printf(\"%d",
          "\", a - b);",
          "    // 正常終了を示す0を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "変数aに10を代入します。",
          null,
          "変数bに3を代入します。",
          null,
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
      "candidates": {
        "operators": [
          "-",
          "+",
          "*",
          "/"
        ],
        "others": ["stdio.h", "main", "10", "3", "0", "printf", " a - b);", "}", " a - b);", "\", a - b);"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "7\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "剰余演算子（%）",
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // 10 % 3の結果を表示する\\n    printf(\"%d\\n\", 10 % 3);\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // 10 % 3の結果を表示する\\n    ___(\"%d\\n___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
          "// 標準入出力ライブラリを読み込む",
          "#include <stdio.h>",
          "// mainはプログラムのエントリーポイント",
          "int main() {",
          "    // 10 % 3の結果を表示する",
          "    printf(\"%d",
          "\", 10 % 3);",
          "    // 正常終了を示す0を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
      "candidates": {
        "operators": [
          "%",
          "/",
          "*",
          "+"
        ],
        "others": ["stdio.h", "main", "0", "printf", " 10 % 3);", "}", " 10 % 3);", "\", 10 % 3);"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "累算代入演算子（+=、-=）",
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // scoreに80を代入する\\n    int score = 80;\\n    // scoreに10を加算する\\n    score += 10;\\n    // scoreの値を表示する\\n    printf(\"%d\\n\", score);\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // scoreに80を代入する\\n    int score = ___;\\n    // scoreに10を加算する\\n    score += ___;\\n    // scoreの値を表示する\\n    ___(\"%d\\n___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
          "// 標準入出力ライブラリを読み込む",
          "#include <stdio.h>",
          "// mainはプログラムのエントリーポイント",
          "int main() {",
          "    // scoreに80を代入する",
          "    int score = 80;",
          "    // scoreに10を加算する",
          "    score += 10;",
          "    // scoreの値を表示する",
          "    printf(\"%d",
          "\", score);",
          "    // 正常終了を示す0を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "変数を初期化します。",
          null,
          "累算代入演算子で加算します。",
          null,
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
      "candidates": {
        "operators": [
          "+=",
          "-=",
          "*=",
          "/="
        ],
        "others": ["stdio.h", "main", "80", "score", "0", "10", "printf", " score);", "}", " score);", "\", score);"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "90\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "文章の中に「はこ」を入れましょう",
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // ageに12を代入する\\n    int age = 12;\\n    // 「私は12歳です」と表示する\\n    printf(\"私は %d 歳です\\n\", age);\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // ageに12を代入する\\n    int age = ___;\\n    // 「私は12歳です」と表示する\\n    ___(\"私は %d 歳です\\n___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
          "// 標準入出力ライブラリを読み込む",
          "#include <stdio.h>",
          "// mainはプログラムのエントリーポイント",
          "int main() {",
          "    // ageに12を代入する",
          "    int age = 12;",
          "    // 「私は12歳です」と表示する",
          "    printf(\"私は %d 歳です",
          "\", age);",
          "    // 正常終了を示す0を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "変数を初期化します。",
          null,
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
      "candidates": {
        "others": ["stdio.h", "main", "12", "age", "0", "printf", " age);", "}", " age);", "\", age);"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "私は 12 歳です\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "データをならべる「配列」",
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // 配列numsを初期化する\\n    int nums[3] = {10, 20, 30};\\n    // nums[1]を表示する（インデックス1は20）\\n    printf(\"%d\\n\", nums[1]);\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // 配列numsを初期化する\\n    int nums[___] = {10, 20, 30};\\n    // nums[1]を表示する（インデックス1は20）\\n    ___(\"%d\\n___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
          "// 標準入出力ライブラリを読み込む",
          "#include <stdio.h>",
          "// mainはプログラムのエントリーポイント",
          "int main() {",
          "    // 配列numsを初期化する",
          "    int nums[3] = {10, 20, 30};",
          "    // nums[1]を表示する（インデックス1は20）",
          "    printf(\"%d",
          "\", nums[1]);",
          "    // 正常終了を示す0を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "配列を宣言して初期化します。",
          null,
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
      "candidates": {
        "numbers": [
          "0",
          "1",
          "2"
        ],
        "others": ["stdio.h", "main", "3", "printf", " nums[1]);", "}", "\", nums[1]);", "\", nums[1]);"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "20\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "「もし〜なら」で分ける if文",
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // scoreに85を代入する\\n    int score = 85;\\n    // scoreが80以上ならPassと表示する\\n    if (score >= 80) {\\n        printf(\"Pass\\n\");\\n    }\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // scoreに85を代入する\\n    int score = ___;\\n    // scoreが80以上ならPassと表示する\\n    if (score ___ 80) {\\n        ___(\"Pass\\n___\\n    ___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
          "// 標準入出力ライブラリを読み込む",
          "#include <stdio.h>",
          "// mainはプログラムのエントリーポイント",
          "int main() {",
          "    // scoreに85を代入する",
          "    int score = 85;",
          "    // scoreが80以上ならPassと表示する",
          "    if (score >= 80) {",
          "        printf(\"Pass",
          "\");",
          "    }",
          "    // 正常終了を示す0を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "変数を初期化します。",
          null,
          "条件分岐を開始します。",
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
      "candidates": {
        "keywords": [
          "if",
          "else",
          "while"
        ],
        "others": ["stdio.h", "main", "85", "0", ">=", "// 正常終了を示す0を返す", "printf", "\");", "}", "}"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Pass\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "ちがう場合は？ if-else文",
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // xに10を代入する\\n    int x = 10;\\n    // xが5より大きいか判定する\\n    if (x > 5) {\\n        printf(\"Big\\n\");\\n    } else {\\n        printf(\"Small\\n\");\\n    }\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n___\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // xに10を代入する\\n    int x = ___;\\n    // xが5より大きいか判定する\\n    if (x ___ 5) {\\n        ___(\"Big\\n___\\n    } ___ {\\n        ___(\"Small\\n___\\n    ___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
          "// 標準入出力ライブラリを読み込む",
          "#include <stdio.h>",
          "// mainはプログラムのエントリーポイント",
          "int main() {",
          "    // xに10を代入する",
          "    int x = 10;",
          "    // xが5より大きいか判定する",
          "    if (x > 5) {",
          "        printf(\"Big",
          "\");",
          "    } else {",
          "        printf(\"Small",
          "\");",
          "    }",
          "    // 正常終了を示す0を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "変数を初期化します。",
          null,
          "条件分岐を開始します。",
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "正常終了を示します。",
          null,
          "プログラムの正常終了を示す0を返します。",
          "この行を正しく入力してください。"
        ],
      "candidates": {
        "keywords": [
          "else",
          "if",
          "elif"
        ],
        "others": ["stdio.h", "main", "10", "0", ">", "return 0;", "printf", "#include <stdio.h>", "\");", "}", "}"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Big\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "論理演算子（&&、||）",
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // scoreに85を代入する\\n    int score = 85;\\n    // scoreが80以上かつ100以下ならPassと表示する\\n    if (score >= 80 && score <= 100) {\\n        printf(\"Pass\\n\");\\n    }\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // scoreに85を代入する\\n    int score = ___;\\n    // scoreが80以上かつ100以下ならPassと表示する\\n    if (score >= ___ && score <= 100) {\\n        ___(\"Pass\\n___\\n    ___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
          "// 標準入出力ライブラリを読み込む",
          "#include <stdio.h>",
          "// mainはプログラムのエントリーポイント",
          "int main() {",
          "    // scoreに85を代入する",
          "    int score = 85;",
          "    // scoreが80以上かつ100以下ならPassと表示する",
          "    if (score >= 80 && score <= 100) {",
          "        printf(\"Pass",
          "\");",
          "    }",
          "    // 正常終了を示す0を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "変数を初期化します。",
          null,
          "&&で「かつ」を表現します。",
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
      "candidates": {
        "operators": [
          "&&",
          "||",
          "!"
        ],
        "others": ["stdio.h", "main", "85", "0", "80", "// 正常終了を示す0を返す", "printf", "\");", "}", "}"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Pass\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "ぐるぐる回す for文",
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // iが0から2までループする\\n    for (int i = 0; i < 3; i++) {\\n        // iの値を表示する\\n        printf(\"%d\\n\", i);\\n    }\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // iが0から2までループする\\n    for (int i = ___; i < 3; i++) {\\n        // iの値を表示する\\n        ___(\"%d\\n___\\n    ___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
          "// 標準入出力ライブラリを読み込む",
          "#include <stdio.h>",
          "// mainはプログラムのエントリーポイント",
          "int main() {",
          "    // iが0から2までループする",
          "    for (int i = 0; i < 3; i++) {",
          "        // iの値を表示する",
          "        printf(\"%d",
          "\", i);",
          "    }",
          "    // 正常終了を示す0を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "forで繰り返し処理を開始します。",
          null,
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
      "candidates": {
        "keywords": [
          "for",
          "while",
          "do"
        ],
        "others": ["stdio.h", "main", "i", "0", "// 正常終了を示す0を返す", "printf", " i);", "}", "}", " i);", "\", i);"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "0\\n1\\n2\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "データをまとめましょう「構造体」",
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// Point構造体を定義する\\nstruct Point {\\n    int x;\\n    int y;\\n};\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // Point型の変数pを作成する\\n    struct Point p;\\n    // p.xに10を代入する\\n    p.x = 10;\\n    // p.xの値を表示する\\n    printf(\"%d\\n\", p.x);\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// Point構造体を定義する\\nstruct ___ {\\n    int ___;\\n    int ___;\\n___\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // Point型の変数pを作成する\\n    struct Point ___;\\n    // p.xに10を代入する\\n    p.x = ___;\\n    // p.xの値を表示する\\n    ___(\"%d\\n___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
          "// 標準入出力ライブラリを読み込む",
          "#include <stdio.h>",
          "// Point構造体を定義する",
          "struct Point {",
          "    int x;",
          "    int y;",
          "};",
          "// mainはプログラムのエントリーポイント",
          "int main() {",
          "    // Point型の変数pを作成する",
          "    struct Point p;",
          "    // p.xに10を代入する",
          "    p.x = 10;",
          "    // p.xの値を表示する",
          "    printf(\"%d",
          "\", p.x);",
          "    // 正常終了を示す0を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "構造体（Point）を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "プログラムの開始点を定義します。",
          null,
          "構造体の変数を宣言します。",
          null,
          "メンバに値を代入します。",
          null,
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
      "candidates": {
        "others": ["stdio.h", "main", "p", "10", "x", "0", "Point", "y", "};", "printf", "};", " p.x);", "}", " p.x);", "\", p.x);"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "自分だけの関数を作ろう",
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// greet関数を定義する\\nvoid greet() {\\n    // Helloと表示する\\n    printf(\"Hello\\n\");\\n}\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // greet関数を呼び出す\\n    greet();\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#include <___>\\n// greet関数を定義する\\nvoid ___() {\\n    // Helloと表示する\\n    ___(\"Hello\\n___\\n___\\n// mainはプログラムのエントリーポイント\\nint ___() {\\n    // greet関数を呼び出す\\n    ___();\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
          "// 標準入出力ライブラリを読み込む",
          "#include <stdio.h>",
          "// greet関数を定義する",
          "void greet() {",
          "    // Helloと表示する",
          "    printf(\"Hello",
          "\");",
          "}",
          "// mainはプログラムのエントリーポイント",
          "int main() {",
          "    // greet関数を呼び出す",
          "    greet();",
          "    // 正常終了を示す0を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          null,
          "標準入出力ライブラリを読み込みます。",
          null,
          "戻り値のない関数を定義します。",
          null,
          "printf関数で結果を表示します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
      "candidates": {
        "others": ["stdio.h", "greet", "0", "// mainはプログラムのエントリーポイント", "// greet関数を呼び出す", "// 正常終了を示す0を返す", "printf", "\");", "}", "main", "}"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello\\n"
        }
      ],
      "initialDisplayMode": "holey"
    }
  ]
};
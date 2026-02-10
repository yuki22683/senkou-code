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
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#___ <___>\\n// mainはプログラムのエントリーポイント\\n___ ___() {\\n    // Hello, World!を表示する\\n    ___(\"___\\n___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
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
          "#includeでヘッダファイルを読み込みます。",
          null,
          "int型を返すmain関数を定義します。",
          null,
          "printf関数で文字列を表示します。",
          "文字列の終端と関数呼び出しの閉じ括弧です。",
          null,
          "0を返して正常終了を示します。",
          "関数ブロックを閉じます。"
        ],
      "candidates": {
        "functions": [
          "printf"
        ],
        "strings": [
          "Hello, World!"
        ],
        "others": ["stdio.h", "main", "0", "\");", "}", "include", "int"]
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
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#___ <___>\\n// mainはプログラムのエントリーポイント\\n___ ___() {\\n    // xに10を代入する\\n    ___ ___ = ___;\\n    // xの値を表示する\\n    ___(\"___\\n___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
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
          "#includeでヘッダファイルを読み込みます。",
          null,
          "int型を返すmain関数を定義します。",
          null,
          "int型の変数xに10を代入します。",
          null,
          "printf関数で変数xの値を表示します。",
          "フォーマット文字列の終端と変数xを渡します。",
          null,
          "0を返して正常終了を示します。",
          "関数ブロックを閉じます。"
        ],
      "candidates": {
        "others": ["stdio.h", "main", "10", "x", "0", "printf", "\", x);", "}", "include", "int", "%d"]
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
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#___ <___>\\n// mainはプログラムのエントリーポイント\\n___ ___() {\\n    // aに10を代入する\\n    ___ ___ = ___;\\n    // bに3を代入する\\n    ___ ___ = ___;\\n    // a - bの結果を表示する\\n    ___(\"___\\n___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
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
          "#includeでヘッダファイルを読み込みます。",
          null,
          "int型を返すmain関数を定義します。",
          null,
          "int型の変数aに10を代入します。",
          null,
          "int型の変数bに3を代入します。",
          null,
          "printf関数でa - bの計算結果を表示します。",
          "フォーマット文字列の終端とa - bを渡します。",
          null,
          "0を返して正常終了を示します。",
          "関数ブロックを閉じます。"
        ],
      "candidates": {
        "operators": [
          "-",
          "+",
          "*",
          "/"
        ],
        "others": ["stdio.h", "main", "10", "3", "0", "printf", "\", a - b);", "}", "include", "int", "a", "b", "%d"]
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
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#___ <___>\\n// mainはプログラムのエントリーポイント\\n___ ___() {\\n    // 10 % 3の結果を表示する\\n    ___(\"___\\n___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
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
          "#includeでヘッダファイルを読み込みます。",
          null,
          "int型を返すmain関数を定義します。",
          null,
          "printf関数で10 % 3の結果を表示します。",
          "フォーマット文字列の終端と10 % 3を渡します。",
          null,
          "0を返して正常終了を示します。",
          "関数ブロックを閉じます。"
        ],
      "candidates": {
        "operators": [
          "%",
          "/",
          "*",
          "+"
        ],
        "others": ["stdio.h", "main", "0", "printf", "\", 10 % 3);", "}", "include", "int", "%d"]
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
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#___ <___>\\n// mainはプログラムのエントリーポイント\\n___ ___() {\\n    // scoreに80を代入する\\n    ___ ___ = ___;\\n    // scoreに10を加算する\\n    ___ ___ ___;\\n    // scoreの値を表示する\\n    ___(\"___\\n___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
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
          "#includeでヘッダファイルを読み込みます。",
          null,
          "int型を返すmain関数を定義します。",
          null,
          "int型の変数scoreに80を代入します。",
          null,
          "scoreに+=で10を加算します。",
          null,
          "printf関数でscoreの値を表示します。",
          "フォーマット文字列の終端とscoreを渡します。",
          null,
          "0を返して正常終了を示します。",
          "関数ブロックを閉じます。"
        ],
      "candidates": {
        "operators": [
          "+=",
          "-=",
          "*=",
          "/="
        ],
        "others": ["stdio.h", "main", "80", "score", "0", "10", "printf", "\", score);", "}", "include", "int", "%d"]
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
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#___ <___>\\n// mainはプログラムのエントリーポイント\\n___ ___() {\\n    // ageに12を代入する\\n    ___ ___ = ___;\\n    // 「私は12歳です」と表示する\\n    ___(\"___\\n___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
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
          "#includeでヘッダファイルを読み込みます。",
          null,
          "int型を返すmain関数を定義します。",
          null,
          "int型の変数ageに12を代入します。",
          null,
          "printf関数で私は %d 歳ですのフォーマットで表示します。",
          "フォーマット文字列の終端とageを渡します。",
          null,
          "0を返して正常終了を示します。",
          "関数ブロックを閉じます。"
        ],
      "candidates": {
        "others": ["stdio.h", "main", "12", "age", "0", "printf", "\", age);", "}", "include", "int", "私は %d 歳です"]
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
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#___ <___>\\n// mainはプログラムのエントリーポイント\\n___ ___() {\\n    // 配列numsを初期化する\\n    ___ ___[___] = {___, ___, ___};\\n    // nums[1]を表示する（インデックス1は20）\\n    ___(\"___\\n___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
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
          "#includeでヘッダファイルを読み込みます。",
          null,
          "int型を返すmain関数を定義します。",
          null,
          "int型配列numsを{10, 20, 30}で初期化します。",
          null,
          "printf関数でnums[1]の値を表示します。",
          "フォーマット文字列の終端とnums[1]を渡します。",
          null,
          "0を返して正常終了を示します。",
          "関数ブロックを閉じます。"
        ],
      "candidates": {
        "numbers": [
          "0",
          "1",
          "2"
        ],
        "others": ["stdio.h", "main", "3", "printf", "\", nums[1]);", "}", "include", "int", "nums", "10", "20", "30", "%d"]
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
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // scoreに85を代入する\\n    int score = 85;\\n    // scoreが80以上なら合格と表示する\\n    if (score >= 80) {\\n        printf(\"合格\\n\");\\n    }\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#___ <___>\\n// mainはプログラムのエントリーポイント\\n___ ___() {\\n    // scoreに85を代入する\\n    ___ ___ = ___;\\n    // scoreが80以上なら合格と表示する\\n    if (___ ___ ___) {\\n        ___(\"___\\n___\\n    ___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
          "// 標準入出力ライブラリを読み込む",
          "#include <stdio.h>",
          "// mainはプログラムのエントリーポイント",
          "int main() {",
          "    // scoreに85を代入する",
          "    int score = 85;",
          "    // scoreが80以上なら合格と表示する",
          "    if (score >= 80) {",
          "        printf(\"合格",
          "\");",
          "    }",
          "    // 正常終了を示す0を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          null,
          "#includeでヘッダファイルを読み込みます。",
          null,
          "int型を返すmain関数を定義します。",
          null,
          "int型の変数scoreに85を代入します。",
          null,
          "score >= 80の条件をif文で判定します。",
          "printf関数で合格と表示します。",
          "文字列の終端と関数呼び出しの閉じ括弧です。",
          "ifブロックを閉じます。",
          null,
          "0を返して正常終了を示します。",
          "関数ブロックを閉じます。"
        ],
      "candidates": {
        "keywords": [
          "if",
          "else",
          "while"
        ],
        "others": ["stdio.h", "main", "85", "0", ">=", "printf", "\");", "}", "include", "int", "score", "80", "合格"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "合格\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "ちがう場合は？ if-else文",
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // xに10を代入する\\n    int x = 10;\\n    // xが5より大きいか判定する\\n    if (x > 5) {\\n        printf(\"大きい\\n\");\\n    } else {\\n        printf(\"小さい\\n\");\\n    }\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#___ <___>\\n// mainはプログラムのエントリーポイント\\n___ ___() {\\n    // xに10を代入する\\n    ___ ___ = ___;\\n    // xが5より大きいか判定する\\n    if (___ ___ ___) {\\n        ___(\"___\\n___\\n    ___ else ___\\n        ___(\"___\\n___\\n    ___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
          "// 標準入出力ライブラリを読み込む",
          "#include <stdio.h>",
          "// mainはプログラムのエントリーポイント",
          "int main() {",
          "    // xに10を代入する",
          "    int x = 10;",
          "    // xが5より大きいか判定する",
          "    if (x > 5) {",
          "        printf(\"大きい",
          "\");",
          "    } else {",
          "        printf(\"小さい",
          "\");",
          "    }",
          "    // 正常終了を示す0を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          null,
          "#includeでヘッダファイルを読み込みます。",
          null,
          "int型を返すmain関数を定義します。",
          null,
          "int型の変数xに10を代入します。",
          null,
          "x > 5の条件をif文で判定します。",
          "printf関数で大きいと表示します。",
          "文字列の終端と関数呼び出しの閉じ括弧です。",
          "ifブロックを閉じ、elseブロックを開始します。",
          "printf関数で小さいと表示します。",
          "文字列の終端と関数呼び出しの閉じ括弧です。",
          "if-elseブロックを閉じます。",
          null,
          "0を返して正常終了を示します。",
          "関数ブロックを閉じます。"
        ],
      "candidates": {
        "keywords": [
          "else",
          "if",
          "elif"
        ],
        "others": ["stdio.h", "main", "10", "0", ">", "printf", "\");", "}", "{", "include", "int", "x", "5", "大きい", "小さい"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "大きい\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "論理演算子（&&、||）",
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // scoreに85を代入する\\n    int score = 85;\\n    // scoreが80以上かつ100以下なら合格と表示する\\n    if (score >= 80 && score <= 100) {\\n        printf(\"合格\\n\");\\n    }\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#___ <___>\\n// mainはプログラムのエントリーポイント\\n___ ___() {\\n    // scoreに85を代入する\\n    ___ ___ = ___;\\n    // scoreが80以上かつ100以下なら合格と表示する\\n    if (___ >= ___ && ___ <= ___) {\\n        ___(\"___\\n___\\n    ___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
      "correctLines": [
          "// 標準入出力ライブラリを読み込む",
          "#include <stdio.h>",
          "// mainはプログラムのエントリーポイント",
          "int main() {",
          "    // scoreに85を代入する",
          "    int score = 85;",
          "    // scoreが80以上かつ100以下なら合格と表示する",
          "    if (score >= 80 && score <= 100) {",
          "        printf(\"合格",
          "\");",
          "    }",
          "    // 正常終了を示す0を返す",
          "    return 0;",
          "}"
        ],
      "lineHints": [
          null,
          "#includeでヘッダファイルを読み込みます。",
          null,
          "int型を返すmain関数を定義します。",
          null,
          "int型の変数scoreに85を代入します。",
          null,
          "score >= 80 && score <= 100の条件を判定します。",
          "printf関数で合格と表示します。",
          "文字列の終端と関数呼び出しの閉じ括弧です。",
          "ifブロックを閉じます。",
          null,
          "0を返して正常終了を示します。",
          "関数ブロックを閉じます。"
        ],
      "candidates": {
        "operators": [
          "&&",
          "||",
          "!"
        ],
        "others": ["stdio.h", "main", "85", "0", "80", "100", "printf", "\");", "}", "include", "int", "score", "合格"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "合格\\n"
        }
      ],
      "initialDisplayMode": "holey"
    },
    {
      "title": "ぐるぐる回す for文",
      "correctCode": "// 標準入出力ライブラリを読み込む\\n#include <stdio.h>\\n// mainはプログラムのエントリーポイント\\nint main() {\\n    // iが0から2までループする\\n    for (int i = 0; i < 3; i++) {\\n        // iの値を表示する\\n        printf(\"%d\\n\", i);\\n    }\\n    // 正常終了を示す0を返す\\n    return 0;\\n}",
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#___ <___>\\n// mainはプログラムのエントリーポイント\\n___ ___() {\\n    // iが0から2までループする\\n    for (___ ___ = ___; ___ < ___; ___++) {\\n        // iの値を表示する\\n        ___(\"___\\n___\\n    ___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
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
          "#includeでヘッダファイルを読み込みます。",
          null,
          "int型を返すmain関数を定義します。",
          null,
          "for文でi=0から3未満までループします。",
          null,
          "printf関数でiの値を表示します。",
          "フォーマット文字列の終端とiを渡します。",
          "forブロックを閉じます。",
          null,
          "0を返して正常終了を示します。",
          "関数ブロックを閉じます。"
        ],
      "candidates": {
        "keywords": [
          "for",
          "while",
          "do"
        ],
        "others": ["stdio.h", "main", "i", "0", "3", "printf", "\", i);", "}", "include", "int", "%d"]
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
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#___ <___>\\n// Point構造体を定義する\\nstruct ___ {\\n    ___ ___;\\n    ___ ___;\\n___\\n// mainはプログラムのエントリーポイント\\n___ ___() {\\n    // Point型の変数pを作成する\\n    struct ___ ___;\\n    // p.xに10を代入する\\n    ___.___= ___;\\n    // p.xの値を表示する\\n    ___(\"___\\n___\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
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
          "#includeでヘッダファイルを読み込みます。",
          null,
          "struct Pointで構造体を定義開始します。",
          "int型のメンバxを宣言します。",
          "int型のメンバyを宣言します。",
          "構造体定義を閉じます。",
          null,
          "int型を返すmain関数を定義します。",
          null,
          "struct Point型の変数pを宣言します。",
          null,
          "p.xに10を代入します。",
          null,
          "printf関数でp.xの値を表示します。",
          "フォーマット文字列の終端とp.xを渡します。",
          null,
          "0を返して正常終了を示します。",
          "関数ブロックを閉じます。"
        ],
      "candidates": {
        "others": ["stdio.h", "main", "p", "10", "x", "0", "Point", "y", "};", "printf", "\", p.x);", "}", "include", "int", "%d"]
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
      "holeyCode": "// 標準入出力ライブラリを読み込む\\n#___ <___>\\n// greet関数を定義する\\n___ ___() {\\n    // Helloと表示する\\n    ___(\"___\\n___\\n___\\n// mainはプログラムのエントリーポイント\\n___ ___() {\\n    // greet関数を呼び出す\\n    ___();\\n    // 正常終了を示す0を返す\\n    return ___;\\n___",
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
          "#includeでヘッダファイルを読み込みます。",
          null,
          "void型のgreet関数を定義します。",
          null,
          "printf関数でHelloと表示します。",
          "文字列の終端と関数呼び出しの閉じ括弧です。",
          "greet関数のブロックを閉じます。",
          null,
          "int型を返すmain関数を定義します。",
          null,
          "greet関数を呼び出します。",
          null,
          "0を返して正常終了を示します。",
          "関数ブロックを閉じます。"
        ],
      "candidates": {
        "others": ["stdio.h", "greet", "0", "printf", "\");", "}", "main", "include", "int", "void", "Hello"]
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
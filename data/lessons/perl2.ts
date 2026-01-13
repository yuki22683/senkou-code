export const perl2Data = {
  "language": "perl",
  "lessonId": "perl-2",
  "lessonTitle": "Perl II - 正規表現とリファレンス",
  "lessonDescription": "Perlの最強機能「正規表現」とデータ構造を学びます。テキスト処理の達人になりましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "exercises": [
    {
      "title": "正規表現でマッチング",
      "description": "文字列がパターンに合うか調べる「正規表現」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "正規表現とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# パターンマッチング\n\n**正規表現** は、文字列のパターンを表す特殊な記法です。Perlは正規表現が最も得意な言語の一つです。"
        },
        {
          "title": "マッチ演算子 =~",
          "image": "/illustrations/3d/gear.png",
          "content": "# /パターン/ でマッチ\n\n`=~` でマッチングし、`/ /` の中にパターンを書きます。\n\n**コード例：**\n```perl\nif ($text =~ /hello/) {\n    print \"found\\n\";\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "my $text = \"hello world\";\n# =~でパターンマッチング\nif ($text =~ /world/) {\n    print \"found\\n\";\n}",
      "holeyCode": "# 変数に文字列を代入\nmy $text = ___;\n# =~でパターンマッチング\nif ($text ___ /world/) {\n    # printで出力\n    ___ \"found\\n\";\n}",
      "correctLines": [
        "my $text = \"hello world\";",
        "if ($text =~ /world/) {",
        "    print \"found\\n\";",
        "}"
      ],
      "lineHints": [
        "",
        "=~ でパターンマッチングします。",
        "",
        ""
      ],
      "candidates": {
        "operators": ["=~"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "found\n"
        }
      ]
    },
    {
      "title": "正規表現で置換",
      "description": "文字列を別の文字列に置き換える「置換」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "置換とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 文字列の書き換え\n\n**s/// 演算子** を使うと、パターンに合った部分を別の文字列に置き換えられます。"
        },
        {
          "title": "s/パターン/置換/",
          "image": "/illustrations/3d/gear.png",
          "content": "# 置換の書き方\n\n`s/古い/新しい/` で置換します。\n\n**コード例：**\n```perl\nmy $text = \"hello\";\n$text =~ s/hello/hi/;\nprint $text; # hi\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "my $text = \"cat\";\n# sで置換\n$text =~ s/cat/dog/;\nprint \"$text\\n\";",
      "holeyCode": "# 変数に文字列を代入\nmy $text = ___;\n# sで置換\n$text =~ ___/cat/dog/;\n# printで出力\n___ \"$text\\n\";",
      "correctLines": [
        "my $text = \"cat\";",
        "$text =~ s/cat/dog/;",
        "print \"$text\\n\";"
      ],
      "lineHints": [
        "",
        "s で置換します。",
        ""
      ],
      "candidates": {
        "keywords": ["s"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "dog\n"
        }
      ]
    },
    {
      "title": "配列を使おう",
      "description": "複数のデータを格納する「配列」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "配列とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# データのリスト\n\n**配列** は、複数の値を順番に格納するデータ構造です。`@` で始まる名前を使います。"
        },
        {
          "title": "配列の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# @array と $array[n]\n\n配列全体は `@array`、個別の要素は `$array[番号]` でアクセスします。\n\n**コード例：**\n```perl\nmy @nums = (1, 2, 3);\nprint $nums[0]; # 1\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# @で配列を宣言\nmy @fruits = (\"apple\", \"banana\");\nprint $fruits[1] . \"\\n\";",
      "holeyCode": "# @で配列を宣言\nmy ___fruits = (\"apple\", \"banana\");\n# printで出力\n___ $fruits[1] . \"\\n\";",
      "correctLines": [
        "my @fruits = (\"apple\", \"banana\");",
        "print $fruits[1] . \"\\n\";"
      ],
      "lineHints": [
        "@ で配列を宣言します。",
        ""
      ],
      "candidates": {
        "operators": ["@"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "banana\n"
        }
      ]
    },
    {
      "title": "ハッシュを使おう",
      "description": "キーと値のペアを格納する「ハッシュ」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "ハッシュとは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# キーと値のペア\n\n**ハッシュ** は、キーと値を組み合わせて格納するデータ構造です。`%` で始まる名前を使います。"
        },
        {
          "title": "ハッシュの使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# %hash と $hash{key}\n\nハッシュ全体は `%hash`、個別の値は `$hash{キー}` でアクセスします。\n\n**コード例：**\n```perl\nmy %person = (\"name\" => \"Taro\");\nprint $person{\"name\"}; # Taro\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# %でハッシュを宣言\nmy %scores = (\"math\" => 90);\nprint $scores{\"math\"} . \"\\n\";",
      "holeyCode": "# %でハッシュを宣言\nmy ___scores = (\"math\" => 90);\n# printで出力\n___ $scores{\"math\"} . \"\\n\";",
      "correctLines": [
        "my %scores = (\"math\" => 90);",
        "print $scores{\"math\"} . \"\\n\";"
      ],
      "lineHints": [
        "% でハッシュを宣言します。",
        ""
      ],
      "candidates": {
        "operators": ["%"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "90\n"
        }
      ]
    },
    {
      "title": "foreach でループ",
      "description": "配列の各要素を処理する「foreach」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "foreach とは？",
          "image": "/illustrations/3d/loop.png",
          "content": "# 配列を順番に処理\n\n**foreach** は、配列の各要素を順番に処理するループです。"
        },
        {
          "title": "foreach の使い方",
          "image": "/illustrations/3d/loop.png",
          "content": "# foreach $item (@array)\n\n各要素が順番に $item に入ります。\n\n**コード例：**\n```perl\nforeach my $n (@nums) {\n    print \"$n\\n\";\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 配列を宣言（1, 2, 3）\nmy @nums = (1, 2, 3);\n# foreachで各要素を処理\nforeach my $n (@nums) {\n    print \"$n\\n\";\n}",
      "holeyCode": "# 配列を宣言（1, 2, 3）\nmy @nums = (1, 2, ___);\n# foreachで各要素を処理\n___ my $n (@nums) {\n    # printで出力\n    ___ \"$n\\n\";\n}",
      "correctLines": [
        "my @nums = (1, 2, 3);",
        "foreach my $n (@nums) {",
        "    print \"$n\\n\";",
        "}"
      ],
      "lineHints": [
        "",
        "foreach で各要素を処理します。",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["foreach"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n2\n3\n"
        }
      ]
    },
    {
      "title": "サブルーチンを作ろう",
      "description": "処理をまとめる「サブルーチン」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "サブルーチンとは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 関数のこと\n\nPerlでは関数を **サブルーチン** と呼びます。`sub` で定義します。"
        },
        {
          "title": "sub の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# 引数は @_\n\n引数は `@_` に入ります。`shift` で一つずつ取り出せます。\n\n**コード例：**\n```perl\nsub greet {\n    my $name = shift;\n    print \"Hello, $name\\n\";\n}\ngreet(\"Taro\");\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# subでサブルーチンを定義\nsub double {\n    my $n = shift;\n    return $n * 2;\n}\nprint double(5) . \"\\n\";",
      "holeyCode": "# subでサブルーチンを定義\n___ double {\n    # shiftで引数を取得\n    my $n = ___;\n    # returnで戻り値を返す\n    ___ $n * 2;\n}\n# printで出力\n___ double(5) . \"\\n\";",
      "correctLines": [
        "sub double {",
        "    my $n = shift;",
        "    return $n * 2;",
        "}",
        "print double(5) . \"\\n\";"
      ],
      "lineHints": [
        "sub でサブルーチンを定義します。",
        "shift で引数を取り出します。",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["sub"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "リファレンスを学ぼう",
      "description": "変数への「参照」を作る「リファレンス」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "リファレンスとは？",
          "image": "/illustrations/3d_advanced/pointer_arrow.png",
          "content": "# 変数へのポインタ\n\n**リファレンス** は、変数のアドレスを指す値です。`\\` で作成し、`->` でアクセスします。"
        },
        {
          "title": "リファレンスの使い方",
          "image": "/illustrations/3d_advanced/pointer_arrow.png",
          "content": "# \\ で作成、-> でアクセス\n\n配列やハッシュのリファレンスを作れます。\n\n**コード例：**\n```perl\nmy @arr = (1, 2, 3);\nmy $ref = \\@arr;\nprint $ref->[0]; # 1\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 配列を宣言（10, 20）\nmy @nums = (10, 20);\n# \\でリファレンスを作成\nmy $ref = \\@nums;\nprint $ref->[1] . \"\\n\";",
      "holeyCode": "# 配列を宣言（10, 20）\nmy @nums = (10, ___);\n# \\でリファレンスを作成\nmy $ref = ___@nums;\n# printで出力\n___ $ref->[1] . \"\\n\";",
      "correctLines": [
        "my @nums = (10, 20);",
        "my $ref = \\@nums;",
        "print $ref->[1] . \"\\n\";"
      ],
      "lineHints": [
        "",
        "\\ でリファレンスを作ります。",
        ""
      ],
      "candidates": {
        "operators": ["\\"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "20\n"
        }
      ]
    },
    {
      "title": "無名配列リファレンス",
      "description": "その場で配列を作る「無名配列」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "無名配列とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# [ ] で直接作る\n\n**[ ]** を使うと、名前のない配列のリファレンスを直接作れます。"
        },
        {
          "title": "[ ] の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# 配列リファレンスを返す\n\n`[ ]` は配列リファレンスを返します。\n\n**コード例：**\n```perl\nmy $ref = [1, 2, 3];\nprint $ref->[0]; # 1\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# [で無名配列を作成\nmy $ref = [5, 10, 15];\nprint $ref->[2] . \"\\n\";",
      "holeyCode": "# [で無名配列を作成\nmy $ref = ___5, 10, 15];\n# printで出力\n___ $ref->[2] . \"\\n\";",
      "correctLines": [
        "my $ref = [5, 10, 15];",
        "print $ref->[2] . \"\\n\";"
      ],
      "lineHints": [
        "[ で無名配列を作ります。",
        ""
      ],
      "candidates": {
        "operators": ["["]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "15\n"
        }
      ]
    },
    {
      "title": "map で変換",
      "description": "配列の各要素を変換する「map」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "map とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 各要素を変換\n\n**map** は、配列の各要素にブロックを適用して新しいリストを作ります。"
        },
        {
          "title": "map の使い方",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# map { } @array\n\n`$_` が各要素を表します。\n\n**コード例：**\n```perl\nmy @doubled = map { $_ * 2 } (1, 2, 3);\n# (2, 4, 6)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 配列を宣言（1, 2, 3）\nmy @nums = (1, 2, 3);\n# mapで各要素を変換\nmy @squared = map { $_ * $_ } @nums;\nprint \"@squared\\n\";",
      "holeyCode": "# 配列を宣言（1, 2, 3）\nmy @nums = (1, 2, ___);\n# mapで各要素を変換\nmy @squared = ___ { $_ * $_ } @nums;\n# printで出力\n___ \"@squared\\n\";",
      "correctLines": [
        "my @nums = (1, 2, 3);",
        "my @squared = map { $_ * $_ } @nums;",
        "print \"@squared\\n\";"
      ],
      "lineHints": [
        "",
        "map で各要素を変換します。",
        ""
      ],
      "candidates": {
        "functions": ["map"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1 4 9\n"
        }
      ]
    },
    {
      "title": "grep でフィルタ",
      "description": "条件に合う要素だけを抽出する「grep」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "grep とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 条件でフィルタ\n\n**grep** は、条件を満たす要素だけを残した新しいリストを作ります。"
        },
        {
          "title": "grep の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# grep { } @array\n\n`$_` が各要素を表し、真を返す要素だけが残ります。\n\n**コード例：**\n```perl\nmy @big = grep { $_ > 3 } (1, 2, 3, 4, 5);\n# (4, 5)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 配列を宣言（1, 2, 3, 4, 5）\nmy @nums = (1, 2, 3, 4, 5);\n# grepで条件に合う要素を抽出\nmy @result = grep { $_ >= 3 } @nums;\nprint \"@result\\n\";",
      "holeyCode": "# 配列を宣言（1, 2, 3, 4, 5）\nmy @nums = (1, 2, 3, 4, ___);\n# grepで条件に合う要素を抽出\nmy @result = ___ { $_ >= 3 } @nums;\n# printで出力\n___ \"@result\\n\";",
      "correctLines": [
        "my @nums = (1, 2, 3, 4, 5);",
        "my @result = grep { $_ >= 3 } @nums;",
        "print \"@result\\n\";"
      ],
      "lineHints": [
        "",
        "grep で条件に合う要素を抽出します。",
        ""
      ],
      "candidates": {
        "functions": ["grep"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "3 4 5\n"
        }
      ]
    }
  ]
}

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
          "image": "/illustrations/3d/robot.png",
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
      "holeyCode": "___\\n// =~ と入力して、パターンに合っているか調べてね\\n___\\n    ___\\n___"hello world\";\n// ここに =~ と入力して、パターンに合っているか調べてね\nif ($text ___ /world/) {\n    print \"found\\n\";\n}",
      "correctLines": [
        "my $text = "hello world";",
        "// =~ と入力して、パターンに合っているか調べてね",
        "if ($text =~ /world/) {",
        "    print "found\\\n";",
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 文字列の書き換え\n\n**s/// 演算子** を使うと、パターンに合った部分を別の文字列に置き換えられます。"
        },
        {
          "title": "s/パターン/置換/",
          "image": "/illustrations/3d/robot.png",
          "content": "# 置換の書き方\n\n`s/古い/新しい/` で置換します。\n\n**コード例：**\n```perl\nmy $text = \"hello\";\n$text =~ s/hello/hi/;\nprint $text; # hi\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "my $text = \"cat\";\n# sで置換\n$text =~ s/cat/dog/;\nprint \"$text\\n\";",
      "holeyCode": "___\\n// s と入力して、文字を置きかえてね\\n___\\n___"cat\";\n// ここに s と入力して、文字を置きかえてね\n$text =~ ___/cat/dog/;\nprint \"$text\\n\";",
      "correctLines": [
        "my $text = "cat";",
        "// s と入力して、文字を置きかえてね",
        "$text =~ s/cat/dog/;",
        "print "$text\\\n";"
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
          "image": "/illustrations/3d/robot.png",
          "content": "# データのリスト\n\n**配列** は、複数の値を順番に格納するデータ構造です。`@` で始まる名前を使います。"
        },
        {
          "title": "配列の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# @array と $array[n]\n\n配列全体は `@array`、個別の要素は `$array[番号]` でアクセスします。\n\n**コード例：**\n```perl\nmy @nums = (1, 2, 3);\nprint $nums[0]; # 1\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# @で配列を宣言\nmy @fruits = (\"apple\", \"banana\");\nprint $fruits[1] . \"\\n\";",
      "holeyCode": "// @ を入力して、配列（ならんだ はこ）を作ってね\",
        \"my @fruits = (\"apple\\\\n___"apple\", \"banana\");\nprint $fruits[1] . \"\\n\";",
      "correctLines": [
        "// @ を入力して、配列（ならんだ はこ）を作ってね",\n        "my @fruits = ("apple\\",
        ""banana");",\n        "print $fruits[1"
      ] . \"\\n\";"
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
          "image": "/illustrations/3d/robot.png",
          "content": "# キーと値のペア\n\n**ハッシュ** は、キーと値を組み合わせて格納するデータ構造です。`%` で始まる名前を使います。"
        },
        {
          "title": "ハッシュの使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# %hash と $hash{key}\n\nハッシュ全体は `%hash`、個別の値は `$hash{キー}` でアクセスします。\n\n**コード例：**\n```perl\nmy %person = (\"name\" => \"Taro\");\nprint $person{\"name\"}; # Taro\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# %でハッシュを宣言\nmy %scores = (\"math\" => 90);\nprint $scores{\"math\"} . \"\\n\";",
      "holeyCode": "// % を入力して、ハッシュ（じしょ）を作ってね\\n___\\n___"math\" => 90);\nprint $scores{\"math\"} . \"\\n\";",
      "correctLines": [
        "// % を入力して、ハッシュ（じしょ）を作ってね",
        "my %scores = ("math" => 90);",
        "print $scores{"math"} . "\\\n";"
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
      "correctCode": "my @nums = (1, 2, 3);\n# foreachで各要素を処理\nforeach my $n (@nums) {\n    print \"$n\\n\";\n}",
      "holeyCode": "___\\n// foreach と入力して、順番に取り出しましょう\\n___\\n    ___\\n___"$n\\n\";\n}",
      "correctLines": [
        "my @nums = (1, 2, 3);",
        "// foreach と入力して、順番に取り出しましょう",
        "foreach my $n (@nums) {",
        "    print "$n\\\n";",
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
          "image": "/illustrations/3d/robot.png",
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
      "holeyCode": "// sub と入力して、サブルーチン（関数）を作ってね\\n___\\n    ___\\n    ___\\n___\\n___"\\n\";",
      "correctLines": [
        "// sub と入力して、サブルーチン（関数）を作ってね",
        "sub double {",
        "    my $n = shift;",
        "    return $n * 2;",
        "}",
        "print double(5) . "\\\n";"
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
      "correctCode": "my @nums = (10, 20);\n# \\でリファレンスを作成\nmy $ref = \\@nums;\nprint $ref->[1] . \"\\n\";",
      "holeyCode": "___\\n___"\\n\";",
      "correctLines": [
        ""my @nums = (10",
        "20);",\n        "// \\ を入力して、住所（リファレンス）を教えてね",\n        "my $ref = \\@nums;",\n        "print $ref->[1"
      ] . \"\\n\";"
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
          "image": "/illustrations/3d/robot.png",
          "content": "# [ ] で直接作る\n\n**[ ]** を使うと、名前のない配列のリファレンスを直接作れます。"
        },
        {
          "title": "[ ] の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# 配列リファレンスを返す\n\n`[ ]` は配列リファレンスを返します。\n\n**コード例：**\n```perl\nmy $ref = [1, 2, 3];\nprint $ref->[0]; # 1\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# [で無名配列を作成\nmy $ref = [5, 10, 15];\nprint $ref->[2] . \"\\n\";",
      "holeyCode": "___\\n___\\n___"\\n\";",
      "correctLines": [
        ""// [ を入力して、名前のない配列を作ってね",\n        "my $ref = [5",
        "10",
        "15"
      ];",
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
      "correctCode": "my @nums = (1, 2, 3);\n# mapで各要素を変換\nmy @squared = map { $_ * $_ } @nums;\nprint \"@squared\\n\";",
      "holeyCode": "___\\n// map と入力して、各要素を変換しましょう\\n___\\n___"@squared\\n\";",
      "correctLines": [
        "my @nums = (1, 2, 3);",
        "// map と入力して、各要素を変換しましょう",
        "my @squared = map { $_ * $_ } @nums;",
        "print "@squared\\\n";"
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 条件でフィルタ\n\n**grep** は、条件を満たす要素だけを残した新しいリストを作ります。"
        },
        {
          "title": "grep の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# grep { } @array\n\n`$_` が各要素を表し、真を返す要素だけが残ります。\n\n**コード例：**\n```perl\nmy @big = grep { $_ > 3 } (1, 2, 3, 4, 5);\n# (4, 5)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "my @nums = (1, 2, 3, 4, 5);\n# grepで条件に合う要素を抽出\nmy @result = grep { $_ >= 3 } @nums;\nprint \"@result\\n\";",
      "holeyCode": "___\\n// grep と入力して、条件に合うものを探しましょう\\n___\\n___"@result\\n\";",
      "correctLines": [
        "my @nums = (1, 2, 3, 4, 5);",
        "// grep と入力して、条件に合うものを探しましょう",
        "my @result = grep { $_ >= 3 } @nums;",
        "print "@result\\\n";"
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

export const perl3Data = {
  "language": "perl",
  "lessonId": "perl-3",
  "lessonTitle": "Perl III - ファイル処理と高度な機能",
  "lessonDescription": "Perlのファイル処理と高度な機能を学びます。実践的なスクリプトを作りましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 3,
  "exercises": [
    {
      "title": "ファイルを開こう",
      "description": "「open」を使ってファイルを開きましょう。",
      "difficulty": "medium",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "open とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# ファイルを開く\n\n**open** 関数を使ってファイルを開きます。ファイルハンドルを使ってデータを読み書きします。"
        },
        {
          "title": "open の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# open(FH, モード, ファイル)\n\nモードには `<`（読み込み）、`>`（書き込み）、`>>`（追記）があります。\n\n**コード例：**\n```perl\nopen(my $fh, \"<\", \"file.txt\");\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# openでファイルを開く\nopen(my $fh, \">\", \"/tmp/test.txt\") or die;\nprint $fh \"hello\\n\";\nclose($fh);\nprint \"written\\n\";",
      "holeyCode": "# openでファイルを開く\n___(my $fh, \">\", \"/tmp/test.txt\") or die;\nprint $fh \"hello\\n\";\nclose($fh);\nprint \"written\\n\";",
      "correctLines": [
        "open(my $fh, \">\", \"/tmp/test.txt\") or die;",
        "print $fh \"hello\\n\";",
        "close($fh);",
        "print \"written\\n\";"
      ],
      "lineHints": [
        "open でファイルを開きます。",
        null,
        null,
        null
      ],
      "candidates": {
        "functions": ["open", "fopen", "file", "read"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "written\n"
        }
      ]
    },
    {
      "title": "ファイルを閉じよう",
      "description": "「close」を使ってファイルを閉じましょう。",
      "difficulty": "medium",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "close とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# ファイルを閉じる\n\n**close** 関数でファイルハンドルを閉じます。リソースを解放するために重要です。"
        },
        {
          "title": "close の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# close(ファイルハンドル)\n\n使い終わったファイルは必ず閉じましょう。\n\n**コード例：**\n```perl\nclose($fh);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "open(my $fh, \">\", \"/tmp/test2.txt\") or die;\nprint $fh \"data\\n\";\n# closeでファイルを閉じる\nclose($fh);\nprint \"closed\\n\";",
      "holeyCode": "open(my $fh, \">\", \"/tmp/test2.txt\") or die;\nprint $fh \"data\\n\";\n# closeでファイルを閉じる\n___($fh);\nprint \"closed\\n\";",
      "correctLines": [
        "open(my $fh, \">\", \"/tmp/test2.txt\") or die;",
        "print $fh \"data\\n\";",
        "close($fh);",
        "print \"closed\\n\";"
      ],
      "lineHints": [
        null,
        null,
        "close でファイルを閉じます。",
        null
      ],
      "candidates": {
        "functions": ["close", "fclose", "end", "shut"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "closed\n"
        }
      ]
    },
    {
      "title": "chomp で改行を除去",
      "description": "「chomp」を使って文字列末尾の改行を除去しましょう。",
      "difficulty": "medium",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "chomp とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 改行を除去\n\n**chomp** は、文字列の末尾にある改行文字を除去します。ファイル読み込み時によく使います。"
        },
        {
          "title": "chomp の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# chomp($変数)\n\n変数の内容を直接変更します。\n\n**コード例：**\n```perl\nmy $line = \"hello\\n\";\nchomp($line);\nprint $line; # hello\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "my $text = \"hello\\n\";\n# chompで改行を除去\nchomp($text);\nprint \"[$text]\\n\";",
      "holeyCode": "my $text = \"hello\\n\";\n# chompで改行を除去\n___($text);\nprint \"[$text]\\n\";",
      "correctLines": [
        "my $text = \"hello\\n\";",
        "chomp($text);",
        "print \"[$text]\\n\";"
      ],
      "lineHints": [
        null,
        "chomp で改行を除去します。",
        null
      ],
      "candidates": {
        "functions": ["chomp", "chop", "trim", "strip"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[hello]\n"
        }
      ]
    },
    {
      "title": "split で文字列を分割",
      "description": "「split」を使って文字列を分割しましょう。",
      "difficulty": "medium",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "split とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 文字列を分割\n\n**split** は、パターンで文字列を分割してリストを返します。"
        },
        {
          "title": "split の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# split(/パターン/, 文字列)\n\n区切り文字で分割します。\n\n**コード例：**\n```perl\nmy @parts = split(/,/, \"a,b,c\");\nprint $parts[1]; # b\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "my $data = \"apple:banana:cherry\";\n# splitで分割\nmy @fruits = split(/:/, $data);\nprint $fruits[1] . \"\\n\";",
      "holeyCode": "my $data = \"apple:banana:cherry\";\n# splitで分割\nmy @fruits = ___(/:/, $data);\nprint $fruits[1] . \"\\n\";",
      "correctLines": [
        "my $data = \"apple:banana:cherry\";",
        "my @fruits = split(/:/, $data);",
        "print $fruits[1] . \"\\n\";"
      ],
      "lineHints": [
        null,
        "split で分割します。",
        null
      ],
      "candidates": {
        "functions": ["split", "explode", "divide", "cut"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "banana\n"
        }
      ]
    },
    {
      "title": "join で配列を結合",
      "description": "「join」を使って配列を文字列に結合しましょう。",
      "difficulty": "medium",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "join とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 配列を結合\n\n**join** は、区切り文字を使って配列の要素を一つの文字列に結合します。"
        },
        {
          "title": "join の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# join(区切り, @配列)\n\n区切り文字で要素をつなぎます。\n\n**コード例：**\n```perl\nmy @arr = (\"a\", \"b\", \"c\");\nmy $str = join(\"-\", @arr);\nprint $str; # a-b-c\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "my @words = (\"Hello\", \"World\");\n# joinで結合\nmy $sentence = join(\" \", @words);\nprint \"$sentence\\n\";",
      "holeyCode": "my @words = (\"Hello\", \"World\");\n# joinで結合\nmy $sentence = ___(\" \", @words);\nprint \"$sentence\\n\";",
      "correctLines": [
        "my @words = (\"Hello\", \"World\");",
        "my $sentence = join(\" \", @words);",
        "print \"$sentence\\n\";"
      ],
      "lineHints": [
        null,
        "join で結合します。",
        null
      ],
      "candidates": {
        "functions": ["join", "implode", "concat", "merge"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello World\n"
        }
      ]
    },
    {
      "title": "push で配列に追加",
      "description": "「push」を使って配列の末尾に要素を追加しましょう。",
      "difficulty": "medium",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "push とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 配列に追加\n\n**push** は、配列の末尾に要素を追加します。"
        },
        {
          "title": "push の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# push(@配列, 値)\n\n一度に複数の値も追加できます。\n\n**コード例：**\n```perl\nmy @arr = (1, 2);\npush(@arr, 3);\nprint $arr[2]; # 3\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "my @nums = (1, 2);\n# pushで追加\npush(@nums, 3);\nprint \"@nums\\n\";",
      "holeyCode": "my @nums = (1, 2);\n# pushで追加\n___(@nums, 3);\nprint \"@nums\\n\";",
      "correctLines": [
        "my @nums = (1, 2);",
        "push(@nums, 3);",
        "print \"@nums\\n\";"
      ],
      "lineHints": [
        null,
        "push で追加します。",
        null
      ],
      "candidates": {
        "functions": ["push", "append", "add", "insert"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1 2 3\n"
        }
      ]
    },
    {
      "title": "pop で配列から取り出す",
      "description": "「pop」を使って配列の末尾から要素を取り出しましょう。",
      "difficulty": "medium",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "pop とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 末尾から取り出す\n\n**pop** は、配列の末尾から要素を取り出して返します。配列は短くなります。"
        },
        {
          "title": "pop の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# pop(@配列)\n\n末尾の要素を取り出します。\n\n**コード例：**\n```perl\nmy @arr = (1, 2, 3);\nmy $last = pop(@arr);\nprint $last; # 3\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "my @nums = (10, 20, 30);\n# popで取り出す\nmy $last = pop(@nums);\nprint \"$last\\n\";",
      "holeyCode": "my @nums = (10, 20, 30);\n# popで取り出す\nmy $last = ___(@nums);\nprint \"$last\\n\";",
      "correctLines": [
        "my @nums = (10, 20, 30);",
        "my $last = pop(@nums);",
        "print \"$last\\n\";"
      ],
      "lineHints": [
        null,
        "pop で取り出します。",
        null
      ],
      "candidates": {
        "functions": ["pop", "remove", "take", "get"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "30\n"
        }
      ]
    },
    {
      "title": "sort で配列を並べ替え",
      "description": "「sort」を使って配列を並べ替えましょう。",
      "difficulty": "medium",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "sort とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 配列を並べ替え\n\n**sort** は、配列の要素を並べ替えた新しいリストを返します。"
        },
        {
          "title": "sort の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# sort @配列\n\nデフォルトは文字列順です。数値順にするには比較関数を使います。\n\n**コード例：**\n```perl\nmy @sorted = sort @arr;\nmy @nums = sort { $a <=> $b } @nums;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "my @words = (\"banana\", \"apple\", \"cherry\");\n# sortで並べ替え\nmy @sorted = sort @words;\nprint \"$sorted[0]\\n\";",
      "holeyCode": "my @words = (\"banana\", \"apple\", \"cherry\");\n# sortで並べ替え\nmy @sorted = ___ @words;\nprint \"$sorted[0]\\n\";",
      "correctLines": [
        "my @words = (\"banana\", \"apple\", \"cherry\");",
        "my @sorted = sort @words;",
        "print \"$sorted[0]\\n\";"
      ],
      "lineHints": [
        null,
        "sort で並べ替えます。",
        null
      ],
      "candidates": {
        "functions": ["sort", "order", "arrange", "rank"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "apple\n"
        }
      ]
    },
    {
      "title": "reverse で配列を逆順に",
      "description": "「reverse」を使って配列を逆順にしましょう。",
      "difficulty": "medium",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "reverse とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 配列を逆順に\n\n**reverse** は、配列の要素を逆順にした新しいリストを返します。"
        },
        {
          "title": "reverse の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# reverse @配列\n\n文字列にも使えます。\n\n**コード例：**\n```perl\nmy @rev = reverse @arr;\nmy $str = reverse \"hello\"; # olleh\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "my @nums = (1, 2, 3);\n# reverseで逆順に\nmy @rev = reverse @nums;\nprint \"@rev\\n\";",
      "holeyCode": "my @nums = (1, 2, 3);\n# reverseで逆順に\nmy @rev = ___ @nums;\nprint \"@rev\\n\";",
      "correctLines": [
        "my @nums = (1, 2, 3);",
        "my @rev = reverse @nums;",
        "print \"@rev\\n\";"
      ],
      "lineHints": [
        null,
        "reverse で逆順にします。",
        null
      ],
      "candidates": {
        "functions": ["reverse", "flip", "invert", "back"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "3 2 1\n"
        }
      ]
    },
    {
      "title": "length で文字列の長さ",
      "description": "「length」を使って文字列の長さを取得しましょう。",
      "difficulty": "medium",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "length とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 文字列の長さ\n\n**length** は、文字列の長さを返します。"
        },
        {
          "title": "length の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# length(文字列)\n\n文字数を返します。\n\n**コード例：**\n```perl\nmy $len = length(\"hello\");\nprint $len; # 5\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "my $text = \"Perl\";\n# lengthで長さを取得\nmy $len = length($text);\nprint \"$len\\n\";",
      "holeyCode": "my $text = \"Perl\";\n# lengthで長さを取得\nmy $len = ___($text);\nprint \"$len\\n\";",
      "correctLines": [
        "my $text = \"Perl\";",
        "my $len = length($text);",
        "print \"$len\\n\";"
      ],
      "lineHints": [
        null,
        "length で長さを取得します。",
        null
      ],
      "candidates": {
        "functions": ["length", "len", "size", "count"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "4\n"
        }
      ]
    }
  ]
};

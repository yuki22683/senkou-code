export const bash3Data = {
  "language": "bash",
  "lessonId": "bash-3",
  "lessonTitle": "Bash III - ファイルとパイプライン",
  "lessonDescription": "Bashの真髄「パイプライン」とファイル処理を学びます。コマンドを組み合わせて強力なスクリプトを作りましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 3,
  "tutorialSlides": [
    {
      "title": "パイプ |",
      "content": "**パイプ** `|` は、コマンドの出力を次のコマンドの入力に渡します。\\n\\n```bash\\necho \"hello world\" | wc -w  # 2（単語数）\\necho \"hello\" | tr 'a-z' 'A-Z'  # HELLO\\n```\\n\\nパイプは何個でもつなげられます。"
    },
    {
      "title": "リダイレクト > と >>",
      "content": "コマンドの結果をファイルに保存します。\\n\\n- `>` : 上書き（新規作成）\\n- `>>` : 追記\\n\\n```bash\\necho \"hello\" > file.txt   # 上書き\\necho \"world\" >> file.txt  # 追記\\n```"
    },
    {
      "title": "入力リダイレクト <",
      "content": "ファイルの内容をコマンドの入力として渡します。\\n\\n```bash\\nwc -l < file.txt  # 行数をカウント\\n```\\n\\n`<` でファイルから読み込みます。"
    },
    {
      "title": "エラー出力 2>",
      "content": "通常の出力は `1`、エラー出力は `2` です。\\n\\n```bash\\nls /nonexistent 2> /dev/null\\n# エラーを /dev/null に捨てる\\n```\\n\\n`/dev/null` は「ゴミ箱」のようなものです。"
    },
    {
      "title": "ファイルテスト -f",
      "content": "`-f` でファイルが存在するか確認できます。\\n\\n```bash\\nif [ -f /etc/passwd ]; then\\n    echo \"存在します\"\\nfi\\n```\\n\\n他にも `-d`（ディレクトリ）、`-e`（存在）などがあります。"
    },
    {
      "title": "xargs コマンド",
      "content": "`xargs` はパイプからの入力を引数に変換します。\\n\\n```bash\\necho \"Hello\" | xargs echo \"Message:\"\\n# Message: Hello\\n```\\n\\n入力を次のコマンドの引数として渡せます。"
    }
  ],
  "exercises": [
    {
      "title": "パイプでコマンドをつなぐ",
      "description": "パイプ（|）で複数のコマンドを連携させる方法を学びます",
      "tutorialSlides": [
        {
          "title": "パイプとは？",
          "content": "# コマンドをつなぐ「管（くだ）」\\n\\n**パイプ**（Pipe＝パイプ＝「管」）の記号 `|` は、あるコマンドの出力を次のコマンドの入力に渡します。\\n\\n**たとえば：** 水道管で水が流れるように、データが左のコマンドから右のコマンドへ流れていきます。\\n\\n工場のベルトコンベアで、製品が次の工程に渡されるイメージです。"
        },
        {
          "title": "パイプの使い方",
          "content": "# コマンド1 | コマンド2\\n\\n左のコマンドの出力が、右のコマンドの入力になります。\\n\\n**このコードは何をしているの？**\\n```bash\\necho \"hello\" | tr 'a-z' 'A-Z'\\n# HELLO\\n```\\n\\n**解説：**\\n1. `echo \"hello\"` で \"hello\" を出力\\n2. `|` でその出力を次に渡す\\n3. `tr 'a-z' 'A-Z'` で小文字→大文字に変換\\n4. 結果は \"HELLO\"\\n\\n**ポイント：** パイプは何個でもつなげられます！"
        }
      ],
      "correctCode": "# echoの出力をwcコマンドに渡す\\necho \"Hello World\" | wc -w",
      "holeyCode": "# echoの出力をwcコマンドに渡す\\n___ \"___ ___\" ___ ___ ___",
      "correctLines": [
          "# echoの出力をwcコマンドに渡す",
          "echo \"Hello World\" | wc -w"
        ],
      "lineHints": [
          null,
          "パイプ|でコマンドの出力を次のコマンドに渡します。wcの-wオプションで単語数を数えます。"
        ],
        "candidates": {
          "operators": [
            "|"
          ],
          "others": ["echo", "Hello", "World", "wc", "-w"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "2\\n"
          }
        ]
      },
    {
      "title": "ファイルにリダイレクト",
      "description": "ファイルを扱う方法を学びます",
      "tutorialSlides": [
        {
          "title": "リダイレクトとは？",
          "content": "# 出力の行き先を変える\\n\\n**リダイレクト**（Redirect＝リダイレクト＝「方向を変える」）は、コマンドの出力を画面ではなくファイルに保存する機能です。\\n\\n**たとえば：** 普通は水道の蛇口をひねると水が流しに落ちますが、ホースをつなげばバケツに水をためられます。リダイレクトはその「ホース」のようなものです。\\n\\n`>` 記号を使います。"
        },
        {
          "title": "> と >> の違い",
          "content": "# 上書き vs 追記\\n\\n| 記号 | 意味 | 動作 |\\n|------|------|------|\\n| `>` | 上書き | ファイルを新しく作り直す |\\n| `>>` | 追記 | ファイルの末尾に追加する |\\n\\n**このコードは何をしているの？**\\n```bash\\necho \"hello\" > file.txt\\necho \"world\" >> file.txt\\n```\\n\\n**解説：**\\n1. `> file.txt` で file.txt を作成し、\"hello\" を書き込む\\n2. `>> file.txt` で file.txt の末尾に \"world\" を追加\\n3. 結果：ファイルには \"hello\" と \"world\" の2行\\n\\n**注意：** `>` は既存の内容を消してしまうので気をつけて！"
        }
      ],
      "correctCode": "# echoの結果をファイルout.txtに保存\\necho \"テスト\" > /tmp/out.txt && cat /tmp/out.txt",
      "holeyCode": "# echoの結果をファイルout.txtに保存\\n___ \"___\" ___ ___ ___ ___ ___",
      "correctLines": [
          "# echoの結果をファイルout.txtに保存",
          "echo \"テスト\" > /tmp/out.txt && cat /tmp/out.txt"
        ],
      "lineHints": [
          null,
          ">でファイルに出力を書き込み、&&で次のコマンドを実行します。"
        ],
        "candidates": {
          "operators": [
            ">",
            "&&"
          ],
          "others": ["echo", "テスト", "/tmp/out.txt", "&&", "cat"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "テスト\\n"
          }
        ]
      },
    {
      "title": "ファイルから読み込む",
      "description": "ファイルを開いてデータを読み込む方法を学びます",
      "tutorialSlides": [
        {
          "title": "入力リダイレクトとは？",
          "content": "# ファイルから入力を受け取る\\n\\n**入力リダイレクト**（`<`）は、ファイルの内容をコマンドに渡す機能です。\\n\\n**たとえば：** キーボードで入力する代わりに、メモに書いてある内容を読み上げてもらうようなイメージです。\\n\\n`>` が出力の行き先を変えるのに対し、`<` は入力の元を変えます。"
        },
        {
          "title": "< の使い方",
          "content": "# コマンド < ファイル\\n\\nファイルの内容が、コマンドの「標準入力」として渡されます。\\n\\n**このコードは何をしているの？**\\n```bash\\nwc -l < file.txt\\n```\\n\\n**解説：**\\n1. `wc -l` は行数を数えるコマンド\\n2. `< file.txt` で file.txt の内容を渡す\\n3. ファイルの行数が表示される\\n\\n**リダイレクトの向き：**\\n- `>` → 出力をファイルへ（右向き）\\n- `<` → ファイルから入力（左向き）"
        }
      ],
      "correctCode": "# in.txtを作成してから読み込む\\necho \"line1\" > /tmp/in.txt\\nwc -l < /tmp/in.txt",
      "holeyCode": "# in.txtを作成してから読み込む\\n___ \"___\" ___ ___\\n___ ___ ___ ___",
      "correctLines": [
          "# in.txtを作成してから読み込む",
          "echo \"line1\" > /tmp/in.txt",
          "wc -l < /tmp/in.txt"
        ],
      "lineHints": [
          null,
          ">でファイルに出力を書き込みます。",
          "<でファイルから入力を読み込みます。-lで行数を数えます。"
        ],
        "candidates": {
          "operators": [
            "<",
            ">"
          ],
          "others": ["echo", "line1", "/tmp/in.txt", "wc", "-l", "<"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      },
    {
      "title": "エラー出力をリダイレクト",
      "description": "標準エラー出力をファイルにリダイレクトする方法を学びます",
      "tutorialSlides": [
        {
          "title": "標準エラー出力とは？",
          "content": "# エラーメッセージ専用の出口\\n\\nコンピュータには出力が2種類あります：\\n\\n| 番号 | 名前 | 用途 |\\n|------|------|------|\\n| 1 | 標準出力（stdout） | 通常の結果 |\\n| 2 | 標準エラー出力（stderr） | エラーメッセージ |\\n\\n**たとえば：** 学校の放送室に2つのスピーカーがあって、1つは通常連絡用、もう1つは緊急放送用、みたいなイメージです。\\n\\nエラーを別の場所に送りたいときは `2>` を使います。"
        },
        {
          "title": "2> の使い方",
          "content": "# 2> でエラーだけリダイレクト\\n\\n**このコードは何をしているの？**\\n```bash\\nls /nonexistent 2> error.txt\\n```\\n\\n**解説：**\\n1. `ls /nonexistent` は存在しないファイルを表示しようとする\\n2. エラーが発生する（「そんなファイルはない！」）\\n3. `2>` でエラーメッセージだけを error.txt に保存\\n\\n**便利な使い方：**\\n```bash\\nコマンド 2> /dev/null\\n```\\n`/dev/null` は「ゴミ箱」のような特別な場所。エラーを捨てて見えなくできます。"
        }
      ],
      "correctCode": "# エラーをnullに捨てて成否を判定\\nls /nonexistent 2> /dev/null && echo \"ok\" || echo \"エラー\"",
      "holeyCode": "# エラーをnullに捨てて成否を判定\\n___ ___ ___> ___ ___ ___ \"___\" ___ ___ \"___\"",
      "correctLines": [
          "# エラーをnullに捨てて成否を判定",
          "ls /nonexistent 2> /dev/null && echo \"ok\" || echo \"エラー\""
        ],
      "lineHints": [
          null,
          "2>でエラー出力をリダイレクト、&&は成功時、||は失敗時に実行されます。"
        ],
        "candidates": {
          "numbers": [
            "2"
          ],
          "others": ["ls", "/nonexistent", "/dev/null", "&&", "echo", "ok", "||", "エラー"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "エラー\\n"
          }
        ]
      },
    {
      "title": "テストでファイルを確認",
      "description": "ファイルを扱う方法を学びます",
      "tutorialSlides": [
        {
          "title": "ファイルテストとは？",
          "content": "# ファイルの状態を調べる\\n\\nBashでは **ファイルテスト** を使って、ファイルが存在するか、どんな種類かを確認できます。\\n\\n**たとえば：** 冷蔵庫を開ける前に「牛乳ある？」と確認するように、ファイルを操作する前に「このファイルある？」と確認できます。\\n\\n`[ ]` の中にテストオプションを書きます。"
        },
        {
          "title": "主なテストオプション",
          "content": "# -f, -d, -e の違い\\n\\n| オプション | 意味 | チェック内容 |\\n|------------|------|------------|\\n| `-e` | exists（存在） | ファイルが存在するか |\\n| `-f` | file（ファイル） | 通常のファイルか |\\n| `-d` | directory（ディレクトリ） | フォルダか |\\n| `-r` | readable（読める） | 読み取り権限があるか |\\n\\n**このコードは何をしているの？**\\n```bash\\nif [ -f file.txt ]; then\\n    echo \"exists\"\\nfi\\n```\\n\\n**解説：** file.txt が「通常のファイル」として存在すれば \"exists\" と表示します。"
        }
      ],
      "correctCode": "# -fでファイルが存在するか確認\\nif [ -f /etc/passwd ]; then\\n    # 「存在します」と表示\\n    echo \"存在します\"\\nfi",
      "holeyCode": "# -fでファイルが存在するか確認\\nif [ ___ ___ ]; then\\n    # 「存在します」と表示\\n    ___ \"___\"\\nfi",
      "correctLines": [
          "# -fでファイルが存在するか確認",
          "if [ -f /etc/passwd ]; then",
          "    # 「存在します」と表示",
          "    echo \"存在します\"",
          "fi"
        ],
      "lineHints": [
          null,
          "-fでファイルの存在を確認します。条件が真ならthen以降を実行します。",
          null,
          "条件が真のときに実行される出力処理です。",
          null
        ],
        "candidates": {
          "operators": [
            "-f"
          ],
          "others": ["echo", "存在します", "-f", "/etc/passwd"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "存在します\\n"
          }
        ]
      },
    {
      "title": "xargs でコマンドに渡す",
      "description": "xargsで標準入力をコマンドの引数として渡す方法を学びます",
      "tutorialSlides": [
        {
          "title": "xargs とは？",
          "content": "# 入力を引数に変換するツール\\n\\n**xargs**（エックスアーグス＝「引数に変換」）は、パイプで受け取ったデータを、コマンドの引数として渡すツールです。\\n\\n**たとえば：** 友達から「りんご、みかん、バナナを買ってきて」とメモをもらったら、お店で「りんごください」「みかんください」「バナナください」と注文しますよね。xargs はこの「メモの内容を注文に変える」役割をします。"
        },
        {
          "title": "xargs の使い方",
          "content": "# パイプ | xargs コマンド\\n\\n**このコードは何をしているの？**\\n```bash\\necho \"file1 file2\" | xargs ls\\n```\\n\\n**解説：**\\n1. `echo \"file1 file2\"` で \"file1 file2\" を出力\\n2. `|` でパイプに渡す\\n3. `xargs ls` が受け取って `ls file1 file2` として実行\\n\\n**パイプとの違い：**\\n- `|` だけ → データを「入力」として渡す\\n- `| xargs` → データを「引数」として渡す\\n\\nコマンドによっては引数でしか受け取れないものがあるので、xargs が必要になります。"
        }
      ],
      "correctCode": "# 出力を引数に変換してxargsに渡す\\necho \"Hello\" | xargs echo \"Message:\"",
      "holeyCode": "# 出力を引数に変換してxargsに渡す\\n___ \"___\" ___ ___ ___ \"___\"",
      "correctLines": [
          "# 出力を引数に変換してxargsに渡す",
          "echo \"Hello\" | xargs echo \"Message:\""
        ],
      "lineHints": [
          null,
          "xargsはパイプからの入力を引数としてコマンドに渡します。"
        ],
        "candidates": {
          "commands": [
            "xargs"
          ],
          "others": ["echo", "Hello", "|", "Message:"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Message: Hello\\n"
          }
        ]
      },
    {
      "title": "sed で置換",
      "description": "sedコマンドで文字列を置換する方法を学びます",
      "tutorialSlides": [
        {
          "title": "sed とは？",
          "content": "# テキストを自動で書き換えるツール\\n\\n**sed**（セド＝Stream Editor＝ストリームエディタ）は、テキストを流れるように処理して書き換えるコマンドです。\\n\\n**たとえば：** 作文で「りんご」を全部「みかん」に書き換えたいとき、1つずつ消して書き直すのは大変ですよね。sed は自動で全部書き換えてくれます。\\n\\n特に「置換」（ちかん＝文字を入れ替えること）でよく使います。"
        },
        {
          "title": "sed で置換する",
          "content": "# s/古い/新しい/ の書き方\\n\\n`s` は substitute（サブスティチュート＝置換する）の略です。\\n\\n**このコードは何をしているの？**\\n```bash\\necho \"hello\" | sed 's/hello/hi/'\\n```\\n\\n**解説：**\\n1. `echo \"hello\"` で \"hello\" を出力\\n2. `|` でパイプに渡す\\n3. `sed 's/hello/hi/'` で \"hello\" を \"hi\" に置き換え\\n4. 結果は \"hi\"\\n\\n**全部置換するには：** 最後に `g` をつける\\n```bash\\nsed 's/a/b/g'  # 全ての a を b に\\n```"
        }
      ],
      "correctCode": "# 文字列をsedで置換\\necho \"りんご\" | sed 's/りんご/バナナ/'",
      "holeyCode": "# 文字列をsedで置換\\n___ \"___\" ___ ___ 's/___/___/'",
      "correctLines": [
          "# 文字列をsedで置換",
          "echo \"りんご\" | sed 's/りんご/バナナ/'"
        ],
      "lineHints": [
          null,
          "sedの's/検索/置換/'で文字列を置き換えます。"
        ],
        "candidates": {
          "commands": [
            "sed"
          ],
          "others": ["echo", "りんご", "|", "バナナ"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "バナナ\\n"
          }
        ]
      },
    {
      "title": "awk でフィールドを抽出",
      "description": "awkコマンドで特定の列（フィールド）を抽出する方法を学びます",
      "tutorialSlides": [
        {
          "title": "awk とは？",
          "content": "# テキストを区切って取り出すツール\\n\\n**awk**（オーク）は、テキストをスペースなどで区切って、欲しい部分だけ取り出せる強力なコマンドです。\\n\\n**たとえば：** 「りんご 100円 赤」という文字列から「100円」だけ取り出したいとき、awk を使えば簡単にできます。\\n\\n各区切りを **フィールド**（Field＝項目）と呼びます。"
        },
        {
          "title": "awk でフィールドを取り出す",
          "content": "# $1, $2, $3 でフィールド番号\\n\\n| 変数 | 意味 |\\n|------|------|\\n| `$1` | 1番目のフィールド |\\n| `$2` | 2番目のフィールド |\\n| `$0` | 行全体 |\\n\\n**このコードは何をしているの？**\\n```bash\\necho \"a b c\" | awk '{print $2}'\\n# b\\n```\\n\\n**解説：**\\n1. \"a b c\" がスペースで3つに区切られる\\n2. `$1`=\"a\", `$2`=\"b\", `$3`=\"c\"\\n3. `{print $2}` で2番目の \"b\" だけ表示\\n\\n**ポイント：** デフォルトはスペース区切り。CSVなどは `-F,` でカンマ区切りに変更できます。"
        }
      ],
      "correctCode": "# スペース区切りの2番目を表示\\necho \"A 100 B\" | awk '{print $2}'",
      "holeyCode": "# スペース区切りの2番目を表示\\n___ \"___\" ___ ___ '{___ $___}'",
      "correctLines": [
          "# スペース区切りの2番目を表示",
          "echo \"A 100 B\" | awk '{print $2}'"
        ],
      "lineHints": [
          null,
          "awkはフィールドを抽出します。$2は2番目のフィールドを指します。"
        ],
        "candidates": {
          "commands": [
            "awk"
          ],
          "others": ["echo", "A 100 B", "|", "print", "2"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "100\\n"
          }
        ]
      },
    {
      "title": "sort で並べ替え",
      "description": "複数の条件を組み合わせる方法を学びます",
      "tutorialSlides": [
        {
          "title": "sort とは？",
          "content": "# 行を順番に並べ替える\\n\\n**sort**（ソート＝「並べ替える」）は、テキストの各行をアルファベット順や数字順に並べ替えるコマンドです。\\n\\n**たとえば：** トランプのカードをばらばらに置いて、小さい順に並べ直すようなイメージです。\\n\\nデータを整理したいときに便利です。"
        },
        {
          "title": "sort のオプション",
          "content": "# 並べ替え方を指定する\\n\\n| オプション | 意味 | 動作 |\\n|------------|------|------|\\n| （なし） | デフォルト | アルファベット順（辞書順） |\\n| `-n` | numeric | 数値として並べ替え |\\n| `-r` | reverse | 逆順（大きい順） |\\n\\n**このコードは何をしているの？**\\n```bash\\necho -e \"3\\n1\\n2\" | sort -n\\n```\\n\\n**解説：**\\n1. `echo -e \"3\\n1\\n2\"` で3行（3, 1, 2）を出力\\n2. `sort -n` で数値として並べ替え\\n3. 結果は 1, 2, 3 の順\\n\\n**注意：** `-n` がないと \"10\" が \"2\" より前に来てしまいます（文字として比較するため）。"
        }
      ],
      "correctCode": "# 複数行出力を並べ替える\\necho -e \"b\\na\\nc\" | sort",
      "holeyCode": "# 複数行出力を並べ替える\\n___ ___ \"___\\n___\\n___\" ___ ___",
      "correctLines": [
          "# 複数行出力を並べ替える",
          "echo -e \"b",
          "a",
          "c\" | sort"
        ],
      "lineHints": [
          null,
          "-eオプションでエスケープシーケンス（\\n等）を有効にします。",
          "\\nで改行された次の文字です。",
          "sortコマンドで行をアルファベット順に並べ替えます。"
        ],
        "candidates": {
          "commands": [
            "sort"
          ],
          "others": ["echo", "-e", "b", "a", "c", "|"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "a\\nb\\nc\\n"
          }
        ]
      },
    {
      "title": "uniq で重複を除去",
      "description": "uniq で重複を除去の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "uniq とは？",
          "content": "# 重複を取り除く\\n\\n**uniq**（ユニーク＝「唯一の」）は、連続する同じ行を1つにまとめるコマンドです。\\n\\n**たとえば：** 「りんご、りんご、みかん、みかん、みかん」を「りんご、みかん」だけにするイメージです。\\n\\n**重要：** uniq は「連続する」重複だけを消します。なので、先に `sort` で並べ替えてから使うのが基本です。"
        },
        {
          "title": "sort | uniq の組み合わせ",
          "content": "# 並べ替えてから重複除去\\n\\n**このコードは何をしているの？**\\n```bash\\necho -e \"a\\nb\\na\" | sort | uniq\\n```\\n\\n**解説：**\\n1. \"a\", \"b\", \"a\" の3行がある\\n2. `sort` で並べ替え → \"a\", \"a\", \"b\"\\n3. `uniq` で連続する重複を除去 → \"a\", \"b\"\\n\\n**sort なしだとどうなる？**\\n```bash\\necho -e \"a\\nb\\na\" | uniq\\n# a, b, a のまま！（連続してないから消えない）\\n```\\n\\n**便利なオプション：**\\n- `-c` で重複回数を表示\\n- `-d` で重複した行だけ表示"
        }
      ],
      "correctCode": "# 重複をuniqで取り除く\\necho -e \"a\\na\\nb\" | uniq",
      "holeyCode": "# 重複をuniqで取り除く\\n___ ___ \"___\\n___\\n___\" ___ ___",
      "correctLines": [
          "# 重複をuniqで取り除く",
          "echo -e \"a",
          "a",
          "b\" | uniq"
        ],
      "lineHints": [
          null,
          "-eオプションでエスケープシーケンスを有効にします。",
          "\\nで改行された次の文字です。",
          "uniqコマンドで連続する重複行を1つにまとめます。"
        ],
        "candidates": {
          "commands": [
            "uniq"
          ],
          "others": ["echo", "-e", "a", "b", "|"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "a\\nb\\n"
          }
        ]
      }
  ]
};
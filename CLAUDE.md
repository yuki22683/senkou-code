# CLAUDE.md - プロジェクトルール

## 修正ミス発生時のルール

修正ミスが発生した場合は、必ず以下を行うこと：

1. **再発防止策をこのファイルに記述する**
2. 同じミスを二度と繰り返さない

---

## 再発防止策

### 1. git checkout 実行時の注意
- `git checkout -- data/lessons/*.ts` を実行すると、以前適用した修正（虫食い化、コメント追加など）が全て消える
- git checkout 後は必ず以下のスクリプトを再実行すること：
  1. `node scripts/fix-empty-line-hints.mjs` - 空行のhints修正
  2. `node scripts/fix-non-holey-hints.mjs` - 非holey行のhints修正
  3. `node scripts/add-hint-comments.mjs` - コメント追加
  4. `node scripts/fix-vague-output-comments.mjs` - 曖昧なコメント修正
  5. `node scripts/sync-comments-to-holey.mjs` - holeyCodeにコメント同期（コメント整合性修正）
  6. `node scripts/fix-correctlines-comments.mjs` - correctLinesのコメント修正
  7. `node scripts/translate-string-literals.mjs` - 文字列リテラルを英語化
  8. `node scripts/fix-candidates-correct.mjs` - 選択肢不足を自動修正（ルール#34参照）
- index.tsのケーシング修正（Java3→java3, C2→c2など）も再適用が必要
- **注意**：`fix-holey-v2.mjs` は使用禁止（ルール#24参照）

### 2. bashファイルのechoクォート
- `echo "___"` の閉じクォートは必ずエスケープする: `echo \"___\"`
- 修正後は `grep 'echo \\"___"[^\\]'` で未修正箇所がないか確認

### 3. 虫食い行の上のコメント
- 全ての虫食い行（`___`を含む行）の上には、その行が何をするかを説明するコメントが必要
- 例：
  - `// 標準入出力ライブラリを読み込む` → `#include <___>`
  - `// プログラムのエントリーポイント（実行開始地点）を定義する` → `int ___()`
  - `// プログラムの正常終了を示す値0を返す` → `return ___;`

### 4. 指示されていない変更をしない
- 修正対象以外のコードを勝手に変更しない
- 虫食い化されている箇所を元に戻さない
- 画像パスなど既存の設定を勝手に変更しない

### 5. lineHintsの書き方
- **絶対にやってはいけないこと**：
  - `"○○と入力します"` `"○○と入力しましょう"` など答えをそのまま書くだけのヒント → 意味がない
  - 問題があるからといって安易に `null` にする → ヒントがなくなる
- **正しいヒントの書き方**：
  - その行が「何をするのか」「なぜその値を入れるのか」を説明する
  - 学習者が理解を深められる具体的な説明にする
- 良い例：
  - `"条件型で「TがUに当てはまるなら」を表すキーワードです。"`
  - `"「かつ」を表す論理演算子を使って両方の条件を満たすかチェックします。"`
  - `"Promiseの中身の型を推論して取り出すキーワードです。"`
  - `"number[]は配列なので結果はtrueになります。"`
- 悪い例：
  - `"extends と入力します。"` → 答えを言っているだけ
  - `"true と入力します。"` → 答えを言っているだけ
  - `null` → ヒントを放棄している

### 6. 修正後のDB反映
- レッスンファイル（`data/lessons/*.ts`）を修正した後は、必ず `npm run seed:db` を実行して変更をデータベースに反映させること。

### 7. 正規表現のエスケープと構文確認
- 正規表現（特に `replace` やスクリプト内）を記述する際は、文字クラス `[]` 内の `]` や `-` などの記号を正しくエスケープすること。修正後は必ずビルドが通るか、構文エラーがないかを確認すること。

### 8. 言語仕様に基づいた判定ロジック
- スペースの任意・必須判定などのコード正規化ロジックを修正する際は、一律の正規表現で処理せず、各プログラミング言語の仕様（キーワード、識別子、演算子の区別）を考慮すること。C言語の関数呼び出しのように、スペースが許容されない箇所を誤って任意扱いにしないよう注意すること。

### 9. 画像アセットの濫用禁止
- 同一のイラストを全レッスンを通して 40〜50回以上使い回すことを禁止する。
- `blueprint.png` や `gear.png` のような汎用画像に逃げず、説明内容（キーワード）に合致する専門イラストを生成・適用すること。
- コミット前に必ず画像使用頻度を分析し、特定の画像に偏りがないか確認すること。

### 10. 大規模置換時の構文安全性の確保
- 複数のレッスンファイルに対して一括置換を行う際、単純な文字列分割（`split`）や広範な正規表現を使用すると、JSON オブジェクトの構造（`{` や `}`）を破壊する恐れがある。
- 必ず置換対象のフィールド（例：`"image": ...`）をピンポイントで狙う正規表現を使用し、置換後は `npm run seed:db` 等で構文が有効であることを自動確認すること。

### 11. 配列インデックスの用語統一
- 配列やリストの要素位置を説明する際、「N番目のデータ（M番）」のような混乱を招く表現を禁止する。
- 必ず「**インデックス**」という用語を使用すること。
- **禁止表現**：
  - `2番目のデータ（1番）` → 「番目」と「番」が混在して混乱する
  - `2番目のデータ（番号は1）`
  - `N番目の番号は M です`
- **正しい表現**：
  - `2番目のデータ（インデックス1）`
  - `2番目のデータはインデックス1です`
- 解説スライドで「0番から数える」というルール説明は許可（教育目的）。

### 12. コメントは次の行を一意に特定できる内容にする
- 虫食い行の上のコメントは、次の行に何を入力すべきか一意に特定できる具体的な内容にすること。
- **禁止表現**：
  - `# メッセージを表示する` → 何を表示するか不明
  - `# 値を出力` → 何の値か不明
  - `# 処理を実行` → 何の処理か不明
  - `# 値を1つずつ返す` → 何の値か不明（`# i * 2（偶数）を返す` のように具体的に）
  - `# 値を返す` → 何の値か不明（`# nを返す` のように変数名を含める）
  - `# 値を配列に入れて返す` → 何の値か不明（`# valueを配列に入れて返す` のように）
  - `// 結果を返す` → 何の結果か不明（`// "Hello Async!"を返す` のように具体的に）
  - `// 値を持つ〜を作成` → 何の値か不明（`// 「Hello」を持つOptionalを作成` のように）
  - **`# 結果を表示`** → 何の結果か不明（`# scoreを表示` のように変数名を含める）
  - **`// 結果を表示`** → 何の結果か不明（`// remainderを表示` のように変数名を含める）
  - **`# 関数を定義`** → 何の関数か不明（`# add関数を定義` のように関数名を含める）
  - **`// 関数を定義`** → 何の関数か不明（`// check関数を定義` のように関数名を含める）
  - **`// クラスを定義`** → 何のクラスか不明（`// Calculatorクラスを定義` のようにクラス名を含める）
  - **`# 〜を属性に保存`** → 何を何に（`# self.nameにnameを代入` のように具体的に）
  - **`# 〜で初期化するメソッドを定義`** → 何のメソッドか（`# __init__メソッド（引数: self, name）` のように）
  - **`# 〜の数を返す`** → 何を返すか（`# len(self.members)を返す` のように）
- **正しい表現**：
  - `# 「ごうかく！」と表示する` → 具体的な文字列がわかる
  - `# 「Hi, 名前!」の形式で表示` → フォーマットがわかる
  - `# scoreが80より大きいか判定` → 条件がわかる
  - `// 'Async works!'を返す` → 返す値が明確
  - `// 「Hello」を持つOptionalを作成する` → 持つ値が明確
  - **`# scoreを表示`** → 変数名が明確
  - **`// add関数を定義`** → 関数名が明確
  - **`// Calculatorクラスを定義`** → クラス名が明確
- **チェックスクリプト**：`node scripts/check-vague-comments.mjs` で曖昧なコメントを検出
- **修正スクリプト**：
  - `node scripts/fix-vague-output-comments.mjs` → correctCodeの曖昧なコメントを自動修正
  - `node scripts/sync-comments-to-holey.mjs` → correctCodeのコメントをholeyCodeに同期
  - `node scripts/fix-correctlines-comments.mjs` → correctLinesの曖昧なコメントを修正

### 13. 構文ハイライトの判定順序
- `lib/syntax-highlight.ts` の `getTokenStyle()` では、**コメント判定を文字列判定より前**に配置すること。
- 理由：コメントが `# => 'ell'` のようにクォートで終わる場合、文字列判定（`endsWithQuote`）でマッチしてしまい、コメントが文字列色で表示されてしまうため。
- 正しい判定順序：
  1. コメント（`#`, `//`, `/*`, `--`, `{-`, `;` で始まる）
  2. 文字列プレフィックス（f, r, b など）
  3. 補間ブラケット（`{`, `}`, `${`）
  4. 文字列（クォートで始まる/終わる）

### 14. レッスンファイルのimportケーシング
- `data/lessons/index.ts` でレッスンファイルをimportする際、ファイル名は**すべて小文字**で記述すること。
- **禁止**：`import { javaData3 } from './Java3';`
- **正しい**：`import { javaData3 } from './java3';`
- Windowsはファイル名の大文字小文字を区別しないが、Linux/macOSでは区別するため、ビルドエラーや本番環境でのエラーの原因になる。

### 15. holeyCodeの全コード行に虫食い（___）を含める
- `holeyCode` フィールドの**すべてのコード行**には必ず `___` を含めること。
- コメント行と空行のみ例外。構造的な行（`{`, `}`, `end`等）も虫食いにする。
- レッスンファイルを修正した後は必ず `node scripts/check-holey-v3.ts` を実行して整合性を確認すること。
- **禁止**：`package main` `import "fmt"` `using System;` など、虫食いのないコード行
- **正しい**：`package ___` `import "___"` `using ___;`
- **注意**：`fix-holey-v2.mjs` は使用禁止（ルール#24参照）

### 16. エスケープシーケンスの置換順序
- レッスンファイルの文字列をデコードする際、置換の順序が重要。
- **必ず `\\\\` を最初に置換してから `\\n` を置換すること。**
- **間違い**：`.replace(/\\n/g, '\n').replace(/\\\\/g, '\\')`
  - `\\n` (backslash-backslash-n) を処理すると、`\\n` → `\` + newline となり、余分な `\` が残る
- **正解**：`.replace(/\\\\/g, '\\').replace(/\\n/g, '\n')`
  - 先に `\\` → `\` に変換し、その後 `\n` → newline に変換

### 17. スライド/ページ切り替え時のスクロールリセット
- ページ内でスライドやコンテンツを切り替えるナビゲーション（前へ/次へボタン、ドットインジケーター等）を実装する際は、必ず切り替え時に `window.scrollTo(0, 0)` でスクロール位置をトップにリセットすること。
- 実装方法：状態変数（例：`currentSlide`）の変更を `useEffect` で監視し、変更時にスクロールリセットを実行する。
- **対象**：ページ全体のコンテンツが切り替わるスライドナビゲーション
- **対象外**：パネル内のタブ切り替え（コンソール/サンプル等）はページ全体のスクロールに影響しないため不要

### 18. correctCode / holeyCode / correctLines のコメント整合性
- `correctCode`、`holeyCode`、`correctLines` の3つのフィールドで**コメントは完全に一致**させること。
- correctCodeで具体的な値を含むコメント（例：`// "Hello Async!"を返す`）を書いた場合、holeyCodeとcorrectLinesでも同一のコメントにする。
- **禁止パターン**：
  - correctCode: `// 'Async works!'を返す` → holeyCode/correctLines: `// return で値を返す`（曖昧化）
  - correctCode: `// 「Hello」を持つOptionalを作成` → holeyCode/correctLines: `// 値を持つOptionalを作成`（曖昧化）
- **理由**：holeyCodeのコメントが曖昧だと、ユーザーが `___` に何を入力すべきか特定できない
- **修正方法**：コメントを修正する際は `correctCode`、`holeyCode`、`correctLines` の3箇所を必ず同時に更新する

### 19. 解説スライドと演習コードの差別化
- `tutorialSlides`のコード例と`correctCode`の演習コードは、**異なるシナリオ**で同じ概念を使わせること。
- **禁止**：変数名や値を変えただけでほぼ同じ構造
  - 解説: `class Point` で `x, y` を比較 → 演習: `class Vector` で `x, y` を比較
  - 解説: `Person(name)` → 演習: `Robot(name)`（属性が同じ）
- **正しい**：異なるシナリオで概念を応用させる
  - 解説: `class Point` で座標比較 → 演習: `class Book` でタイトル・著者比較
  - 解説: `Person(name)` → 演習: `Product(id, name, price)`（属性構成が異なる）
- **理由**：解説を見てそのままコピーできると学習効果がない。異なるシナリオで応用させることで理解が深まる。
- **特に注意が必要な演習**：
  - 特殊メソッド（`__eq__`, `__str__`, `toString()`, `equals()`等）
  - クラス定義の基本演習
  - デザインパターンの演習
- **チェックスクリプト**：`node scripts/check-tutorial-exercise-similarity.mjs` で類似性をチェックできる

### 20. 計算演習における演算子の差別化
- 四則演算（`+`, `-`, `*`, `/`）を教える演習では、**チュートリアルと演習で異なる演算子**を使うこと。
- **禁止**：チュートリアルと演習が同じ演算子
  - 解説: `a + b`（足し算）→ 演習: `x + y`（足し算）→ 同じ演算子なのでNG
  - 解説: `a * b`（掛け算）→ 演習: `x * y`（掛け算）→ 同じ演算子なのでNG
- **正しい**：チュートリアルと演習で異なる演算子
  - 解説: `a + b`（足し算）→ 演習: `x - y`（引き算）→ 異なる演算子でOK
  - 解説: `cookies / friends`（割り算）→ 演習: `x + y`（足し算）→ 異なる演算子でOK
- **理由**：同じ演算子だと解説をそのままコピーして変数名だけ変えれば解けてしまい、学習効果がない。
- **例外**：
  - Assembly言語の`add`/`sub`/`mul`/`div`命令は、その命令自体を教えているため同じ命令を使うのはOK
  - 演算子一覧を表示するだけで具体的なコード例がないチュートリアルはOK
- **確認コマンド**：`node scripts/check-tutorial-exercise-similarity.mjs`

### 21. 空行のlineHintsはnullにする
- `correctLines` で空行（`""`）に対応する `lineHints` の要素は必ず `null` にすること。
- **理由**：空行にはユーザーが入力する箇所がないため、ヒントは不要。
- **禁止**：空行に対して `"何かを入力します"` などのヒントを設定する
- **修正スクリプト**：`node scripts/fix-empty-line-hints.mjs`

### 22. holeyCodeに___がない行のlineHintsはnullにする
- `holeyCode` の行に `___` が含まれていない場合、その行の `lineHints` は `null` にすること。
- **理由**：`___` がない行はユーザーが入力する箇所がないため、ヒントがあっても意味がない。
- **対象**：閉じ括弧 `}`、構造的な行、コメント行など
- **修正スクリプト**：`node scripts/fix-non-holey-hints.mjs`

### 23. holeyCode内のコメントに___を含めない
- `holeyCode` のコメント行には `___` を含めないこと。コメントは `correctCode` と完全に一致させる。
- **禁止**：`# ___を入力`、`// ___で処理`
- **正しい**：`# 10を入力`、`// mapで処理`（correctCodeと同じ）
- **理由**：コメントはユーザーへのヒントであり、穴埋め対象ではない。コメントに `___` があると混乱を招く。
- **修正スクリプト**：`node scripts/fix-comment-consistency.mjs`

### 24. fix-holey-v2.mjsの使用禁止
- `scripts/fix-holey-v2.mjs` は**使用禁止**。このスクリプトにはバグがあり、holeyCodeを破損させる（無限に複製される）。
- git checkout後の再適用には、個別の修正スクリプトを使用すること：
  - `node scripts/fix-empty-line-hints.mjs`
  - `node scripts/fix-non-holey-hints.mjs`
  - `node scripts/fix-comment-consistency.mjs`

### 25. レッスン修正後の必須チェック項目
- レッスンファイルを修正した後は、以下の全チェックを実行して0件/問題なしを確認すること：
  1. `node scripts/check-holey-v3.ts` → 0件
  2. `node scripts/check-comment-consistency-v2.mjs` → 不整合なし
  3. `node scripts/check-vague-comments.mjs` → 曖昧なコメントなし
  4. `node scripts/check-tutorial-exercise-similarity.mjs` → 問題なし
  5. `node scripts/verify-translation.mjs` → 文字列リテラル内の日本語0件
  6. `node scripts/check-candidates-final.mjs` → 0件（ルール#33参照）
  7. `npm run seed:db` → 成功
  8. **【手動確認】** tutorialSlidesで新しい専門用語を使う際、説明前に使っていないか確認（ルール#27参照）
     - 特に「○○や△△が自動で作られます」のような羅列パターンに注意
     - 確認コマンド: `grep -E "が自動で作られ|が自動的に" data/lessons/*.ts`
- **チェックが失敗した場合の修正方法**：
  - check-holey-v3.ts → `fix-empty-line-hints.mjs` と `fix-non-holey-hints.mjs` を実行
  - check-comment-consistency-v2.mjs → `sync-comments-to-holey.mjs` を実行（correctCodeのコメントをholeyCodeに同期）
  - check-vague-comments.mjs → `fix-vague-output-comments.mjs` → `sync-comments-to-holey.mjs` → `fix-correctlines-comments.mjs` を順に実行
  - check-tutorial-exercise-similarity.mjs → 手動で演習のシナリオを変更（ルール#19, #20参照）
  - verify-translation.mjs → `translate-string-literals.mjs` を実行（ルール#26参照）
  - check-candidates-final.mjs → `fix-candidates-correct.mjs` を実行（ルール#33参照）

### 26. コード内の文字列リテラルは英語、コメントは日本語
- `correctCode`、`holeyCode`、`correctLines` 内のコードにおいて：
  - **文字列リテラル**（`'...'` や `"..."`）の中身は**英語**にする
  - **コメント**（`#`、`//`、`--` 等で始まる行）は**日本語**のまま維持
- **禁止**：
  - `print('ごうかく！')` → 文字列が日本語
  - `console.log('結果を表示')` → 文字列が日本語
  - `// Display the score` → コメントが英語
- **正しい**：
  - `print('Pass!')` → 文字列が英語
  - `console.log('Display result')` → 文字列が英語
  - `// scoreを表示` → コメントが日本語
- **理由**：
  - 文字列リテラルはプログラムの出力として表示されるため、英語が望ましい
  - コメントは学習者への説明であり、日本語の方が理解しやすい
- **検証スクリプト**：`node scripts/verify-translation.mjs`
  - 日本語コメント数が表示される（これは正常）
  - 「文字列リテラル内の日本語: 0件」になることを確認
- **修正スクリプト**：`node scripts/translate-string-literals.mjs`
  - 新しい日本語文字列がある場合は、スクリプト内の `translations` マップに追加してから実行

### 27. 新しい用語は説明してから使う
- 解説スライド（`tutorialSlides`）で新しい専門用語を使う際は、**必ずその意味を説明してから使う**こと。
- **禁止パターン**：
  - 冒頭で「`__init__` や `__repr__` が自動で作られます！」のように、まだ説明していない用語を羅列する
  - 「○○と△△と□□ができます」のように、未説明の用語を複数並べる
- **正しいパターン**：
  - 冒頭では抽象的に説明し、詳細セクションで各用語を初めて紹介する際に意味を説明する
  - 例：「面倒なメソッドが自動で作られます」（冒頭）→「`__repr__`: 表示用メソッド」（後半）
- **確認方法**：
  - その用語がこの演習より前の演習（orderIndex が小さい演習）で説明されているか確認
  - 説明されていない場合は、その演習内で初めて使う箇所で意味を説明する
- **理由**：説明なしに専門用語を使うと、学習者は「何それ？」となり混乱する。新しい概念は必ず説明してから使うべき。

### 28. ユーザーにとって無意味な表現を避ける
- 解説スライドやコメントに、**学習者にとって無意味・無関係な情報を含めない**こと。
- **禁止表現**：
  - `（前回学習済み）` → 学習者は自分が何を学んだか覚えている。わざわざ書く必要なし
  - `（開発者向けの〜）` → 初学者に「開発者向け」と言っても意味不明
  - `（デバッグや開発用に〜）` → 初学者にデバッグの文脈は不要
  - `（システムプログラミングで使用）` → 学習段階で知る必要なし
  - `デバッグ用コンソール` → 単に「コンソール」でよい
- **正しい表現**：
  - 機能を簡潔に説明するだけでよい
  - 例：`__repr__`: 表示用メソッド
- **理由**：学習者の目的は「その機能を使えるようになること」。使用場面や対象者の情報は学習の邪魔になる。

### 29. 括弧内にコード例を配置しない
- 解説スライドで機能を説明する際、**括弧内にコード例を入れない**こと。見づらくなる。
- **禁止**：`__repr__`: 表示用メソッド（`Point(x=3, y=4)` のように表示）
- **正しい**：`__repr__`: 表示用メソッド
- コード例が必要な場合は、別の行やコードブロックで示す。

### 30. 完了済み演習の進捗ステータスを上書きしない
- `user_progress`テーブルにステータスを保存する際、**既にcompletedの演習は上書きしない**こと。
- **問題のあるコード**：
  ```javascript
  await supabase.from("user_progress").upsert({
    status: "hint_used",  // completedを上書きしてしまう！
    ...
  });
  ```
- **正しいコード**：
  ```javascript
  const { data: existingProgress } = await supabase
    .from("user_progress")
    .select("status")
    .eq("user_id", user.id)
    .eq("exercise_id", exerciseId)
    .single();

  if (existingProgress?.status !== "completed") {
    await supabase.from("user_progress").upsert({
      status: "hint_used",
      ...
    });
  }
  ```
- **理由**：完了済み演習を再度開いて途中でやめた場合、ステータスが上書きされると次の演習がロックされてしまう。

### 31. 2行連続のコメント禁止
- `correctCode`、`holeyCode`、`correctLines`において、**コメント行が2行連続することを禁止**する。
- **禁止**：
  ```python
  # 親クラス
  # class でクラスを定義
  class Animal:
  ```
- **正しい**：
  ```python
  # 親クラスAnimalをclassで定義
  class Animal:
  ```
- **理由**：コメントはその直下のコード行を説明するもの。2行連続すると、どのコメントがどのコードを説明しているか不明確になる。
- **チェックコマンド**：
  ```bash
  node -e "
  const fs = require('fs');
  const path = require('path');
  function isComment(line) {
    const trimmed = line.trim();
    if (trimmed.startsWith('# ') || trimmed === '#') return true;
    if (trimmed.startsWith('//')) return true;
    return false;
  }
  const dir = 'data/lessons';
  fs.readdirSync(dir).filter(f => f.endsWith('.ts')).forEach(file => {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    const regex = /\"correctLines\":\s*\[([\s\S]*?)\]/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      const lines = match[1].split(',').map(l => l.trim().replace(/^\"|\"$/g, ''));
      for (let i = 0; i < lines.length - 1; i++) {
        if (isComment(lines[i]) && isComment(lines[i+1])) {
          console.log(file + ': ' + lines[i].substring(0, 50));
        }
      }
    }
  });
  "
  ```

### 32. 演習コードの構文チェック必須
- 演習を追加・修正した後は、**必ず構文チェックを実行**してコードが正しいことを確認すること。
- **チェックスクリプト**: `node scripts/check-python-syntax.mjs`（Python用）
- **問題のあるコード例**:
  ```python
  print('10Pass!    print('Pass!')')  # 壊れた文字列
  colors = ['10redcolors = ['red', 'blue']']  # 壊れたリスト
  ```
- **理由**: translate-string-literals.mjsなどのスクリプトが誤った変換を行うと、コードが壊れて演習が動作しなくなる。
- **対象言語**: 各言語用の構文チェックスクリプトを使用するか、手動でコードをコピーして実行確認する。

### 33. candidatesにはholeyCodeの全ての穴を埋める選択肢を含める
- `candidates` フィールドの `keywords` と `others` には、**holeyCodeの全ての `___` を埋めるのに必要な選択肢**を必ず含めること。
- **問題のある例**：
  - holeyCode に `___` が6個あるのに、candidatesに5個しか選択肢がない → 1つの穴が埋められない
  - holeyCode に `json_str` を入力する穴があるのに、candidatesに `json_str` がない
- **正しい例**：
  - holeyCodeの `___` の数 ≤ candidatesの選択肢の合計数
  - 全ての答えが candidates に含まれている
- **チェックスクリプト**: `node scripts/check-candidates-final.mjs`
- **修正スクリプト**: `node scripts/fix-candidates-correct.mjs`（自動で不足している選択肢を `others` に追加）
- **理由**: 選択肢に答えがないと、ユーザーは正解を入力できない。

### 34. 翻訳スクリプト実行後は選択肢チェック必須
- `translate-string-literals.mjs` を実行した後は、**必ず `check-candidates-final.mjs` を実行**すること。
- **理由**: 翻訳により文字列リテラルが変わると、その新しい文字列がcandidatesに含まれていない場合がある。
- **例**:
  - 翻訳前: `'こんにちは'` → candidates に `'こんにちは'` がある
  - 翻訳後: `'Hello'` → candidates に `'Hello'` がない → 選択肢不足
- **修正手順**:
  1. `node scripts/translate-string-literals.mjs` を実行
  2. `node scripts/check-candidates-final.mjs` を実行
  3. 問題があれば `node scripts/fix-candidates-correct.mjs` を実行
  4. `npx tsc --noEmit` で構文チェック
  5. `npm run seed:db` でDB反映

### 35. 演習を削除したらDBからも削除する
- レッスンファイルから演習を削除しても、**`seed:db`はDBから演習を削除しない**（追加/更新のみ）。
- 演習を削除した場合は、**必ずDBからも手動で削除**すること。
- **削除スクリプト**: `npx ts-node scripts/delete-exercise.ts "演習タイトル"`
- **例**:
  ```bash
  # "with文（コンテキストマネージャ）" という演習を削除
  npx ts-node scripts/delete-exercise.ts "with文（コンテキストマネージャ）"
  ```
- **確認方法**: UIでレッスン一覧を開き、削除した演習が表示されていないことを確認
- **理由**: seed:dbはupsert（存在すれば更新、なければ挿入）のみ行うため、ファイルから削除してもDBには残り続ける

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
  - **`# リストを定義`** → 何のリストか不明（`# numbersに[1, 2, 3, 4, 5]を代入` のように）
  - **`# 辞書データを定義`** → 何の辞書か不明（`# dataにlanguage='Python', level='advanced'の辞書を代入` のように）
  - **`# 文字列を定義`** → 何の文字列か不明（`# textに'hello world'を代入` のように）
  - **`# 配列を定義`** → 何の配列か不明（`# colorsに['赤', '青', '緑']を代入` のように）
  - **`# 変数を定義`** → 何の変数か不明（`# scoreに100を代入` のように）
  - **`# 配列を作成`** / **`// 配列を作成`** → 同上
  - **`# リストを作成`** / **`# 辞書を作成`** / **`# ハッシュを作成`** → 同上
  - **`# 〜という配列を作る`** → 何を入れるか不明（`# colorsに['赤', '青']を代入` のように）
  - **`# 変数を表示`** → 何の変数か不明（`# scoreを表示` のように変数名を含める）
  - **`// nameという名前のはこを作る`** → 何を代入するか不明（`// nameに'JavaScript'を代入` のように）
  - **`// 〜ラベルを貼ったはこを作る`** → 何を代入するか不明（`// userに{ name: 'たろう' }を代入` のように）
  - **`// vector で配列を作成`** → 何を入れるか不明（`// numsに{10, 20, 30}を代入` のように）
  - **`// int で変数を宣言`** → 何の値か不明（`// xに5を代入` のように）
  - **`// asList でリストを作成する`** → 何を入れるか不明（`// numsに[1, 2, 3]を代入` のように）
  - **`// null許容型の変数を定義`** → 何の変数か不明（`// sにnullを代入` のように）
  - **`// 新しい型の変数を宣言`** → 何の値か不明（`// ageに25を代入` のように）
  - **`// 〜 でオブジェクトを作成`** → 何を代入するか不明（`// cに新しいCatを代入` のように）
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
  5. 文字列リテラルが日本語になっているか目視確認（例外: Hello World, 言語名, 技術用語）
  6. `node scripts/check-candidates-final.mjs` → 0件（ルール#33参照）
  7. `npm run seed:db` → 成功
  8. **【手動確認】** tutorialSlidesで新しい専門用語を使う際、説明前に使っていないか確認（ルール#27参照）
     - 特に「○○や△△が自動で作られます」のような羅列パターンに注意
     - 確認コマンド: `grep -E "が自動で作られ|が自動的に" data/lessons/*.ts`
  9. **【手動確認】** 正規表現を使う演習では、パターンの解説がチュートリアルにあるか確認（ルール#43参照）
     - 確認コマンド: `grep -l "正規表現" data/lessons/*.ts`
  10. **【手動確認】** MobileCodeEditor.tsxのトークン分解を修正した場合、演習画面で全ての入力に必要なトークン（クォート、括弧等）が選択肢に表示されるか確認（ルール#41参照）
  11. **【手動確認】** 演習を追加・修正した場合、`expected_output`を確認（ルール#46参照）
     - 空チェック: `grep -n '"expected_output": ""' data/lessons/*.ts | grep -v assembly`
     - 形式チェック: 同じ言語の既存ファイル（例: php.ts, php2.ts）の配列出力形式と比較
     - 特にPHP配列は `Array\n(\n    [0] => 1\n...)\n` 形式であること
  12. `node scripts/check-escape-sequences.mjs` → 全てのエスケープシーケンスが正しい（ルール#51参照）
  13. `node scripts/check-lesson-file.mjs` → エラー0件（包括チェック: 日本語変数参照、expected_output文字列一致等）
  14. **【手動確認】** チュートリアルの出力例が入力と同じ言語か確認（ルール#54参照）
     - 確認コマンド: `grep -E "アリス.*Alice|ボブ.*Bob|太郎.*Taro|りんご.*apple" data/lessons/*.ts`
     - 日本語入力→英語出力のパターンは全て修正が必要
- **チェックが失敗した場合の修正方法**：
  - check-holey-v3.ts → `fix-empty-line-hints.mjs` と `fix-non-holey-hints.mjs` を実行
  - check-comment-consistency-v2.mjs → `sync-comments-to-holey.mjs` を実行（correctCodeのコメントをholeyCodeに同期）
  - check-vague-comments.mjs → `fix-vague-output-comments.mjs` → `sync-comments-to-holey.mjs` → `fix-correctlines-comments.mjs` を順に実行
  - check-tutorial-exercise-similarity.mjs → 手動で演習のシナリオを変更（ルール#19, #20参照）
  - 英語文字列が残っている → `translate-to-japanese.mjs` を実行（ルール#26参照）
  - check-candidates-final.mjs → `fix-candidates-correct.mjs` を実行（ルール#33参照）
  - expected_output空/形式不正 → 同じ言語の既存ファイルの形式を確認し手動修正（ルール#46参照）
  - check-escape-sequences.mjs → `fix-escape-normalize.mjs` を実行（ルール#51参照）
  - check-lesson-file.mjs（日本語変数参照）→ 手動で英語変数名に修正（ルール#52参照）
  - check-lesson-file.mjs（expected_output文字列）→ `fix-output-mismatch-v2.mjs` を実行（ルール#53参照）

### 26. コード内の文字列リテラルは日本語、コメントも日本語
- `correctCode`、`holeyCode`、`correctLines` 内のコードにおいて：
  - **文字列リテラル**（`'...'` や `"..."`）の中身は**日本語**にする
  - **コメント**（`#`、`//`、`--` 等で始まる行）も**日本語**で記述
  - **コメント内の文字列参照**も日本語にする（例：`// nameに'太郎'を設定`）
- **例外（英語のまま維持）**：
  - `'Hello, World!'` - プログラミングの決まり文句
  - プログラミング言語名（Python, JavaScript, Ruby等）
  - 技術用語（localhost, Math, TypeScript等）
- **禁止**：
  - `print('Pass!')` → 文字列が英語（`print('合格！')` にする）
  - `console.log('Adult')` → 文字列が英語（`console.log('大人')` にする）
  - `// nameに'Taro'を設定` → コメント内の参照が英語（`// nameに'太郎'を設定` にする）
- **正しい**：
  - `print('合格！')` → 文字列が日本語
  - `console.log('大人')` → 文字列が日本語
  - `// nameに'太郎'を設定` → コメント内の参照も日本語
- **理由**：
  - 日本語学習者向けのため、文字列も日本語の方が理解しやすい
  - コメントと文字列の両方が日本語で統一されていると混乱が少ない
- **修正スクリプト**：`node scripts/translate-to-japanese.mjs`
  - 英語文字列を日本語に変換する

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

### 35. 演習を削除したらDBからも削除し、即座にコミットする
- レッスンファイルから演習を削除しても、**`seed:db`はDBから演習を削除しない**（追加/更新のみ）。
- 演習を削除した場合は、以下の手順を**必ず全て実行**すること：
  1. レッスンファイルから演習を削除
  2. DBから演習を削除: `npx ts-node scripts/delete-exercise.ts "演習タイトル"`
  3. **即座にgit commit** ← これを忘れるとgit checkoutで元に戻る！
  4. UIで削除されていることを確認
- **例**:
  ```bash
  # 1. ファイルから演習を削除（手動編集）
  # 2. DBから削除
  npx ts-node scripts/delete-exercise.ts "with文（コンテキストマネージャ）"
  # 3. 即座にコミット
  git add data/lessons/python3.ts && git commit -m "fix: with文演習を削除"
  ```
- **重要**: コミットしないとgit checkoutやスクリプト実行で元に戻り、seed:dbで演習が再追加される
- **理由**: seed:dbはupsert（存在すれば更新、なければ挿入）のみ行うため、ファイルから削除してもDBには残り続ける

### 36. holeyCode内のJSON/文字列の一部を___にしない
- holeyCodeで穴埋め（`___`）を作る際、**JSON文字列や複合文字列の一部だけを___にしない**こと。
- **禁止パターン**:
  - `json_str = '{"___": "value"}'` → JSONのキー名だけが穴埋め
  - `url = 'https://___/api'` → URLの一部だけが穴埋め
- **正しいパターン**:
  - `json_str = ___` → 文字列全体を穴埋め
  - `data = json.___(json_str)` → メソッド名を穴埋め
  - `name = '___'` → 文字列リテラル全体が穴埋め（OK）
- **理由**: 文字列内部の`___`はフロントエンドのパース処理を壊し、選択肢が正しく表示されなくなる
- **発見方法**: UIで選択肢が `{`, `}`, `=` などの記号だけになっていたら、この問題を疑う

### 37. 一括変換スクリプトの実行後は必ず構文チェック
- `translate-string-literals.mjs` などの一括変換スクリプトを実行した後は、**必ず以下を確認**すること：
  1. `npx tsc --noEmit` → 構文エラーなし
  2. `npm run seed:db` → 成功
  3. **UIで数件の演習を実際に開いて確認** → 選択肢が正しく表示されるか
- **問題が発生した場合**: `git checkout <commit> -- data/lessons/<file>.ts` で復元
- **理由**: 一括変換スクリプトがholeyCodeを壊すバグがあると、多数のファイルが破損する

### 38. 「完了」と宣言する前に全チェックを実行する
- レッスン修正タスクを「完了」「100%完了」と宣言する前に、**必ずルール#25の全7項目を実行し、全てパスすることを確認**すること。
- **禁止**：
  - 一部のチェックだけ実行して「完了」と言う
  - チェックを実行せずに「修正しました」と言う
  - エラーが出ているのに「問題なし」と報告する
- **必須手順**：
  1. 全7項目のチェックコマンドを実行
  2. 各チェックの結果（0件/成功）を明示的に表示
  3. 全てパスしてから「完了」と宣言
- **理由**: 前回「修正完了」と言いながら実際には多数の問題が残っていた。チェックを飛ばすと同じミスを繰り返す

### 39. candidatesフィールドはフロントエンドで使用されない
- `candidates` フィールドはデータベースに保存されるが、**フロントエンドでは使用されていない**。
- 選択肢（ボタン）は `correctLines` から自動的にトークナイズして生成される。
- **結果**: `candidates` を編集しても選択肢は変わらない。選択肢を変えたい場合は `correctLines` を変更するか、フロントエンド（MobileCodeEditor.tsx）のトークナイズロジックを修正する。
- **注意**: 将来的に `candidates` を使うように変更される可能性があるため、正しい値を設定しておくことは推奨。

### 40. JSON文字列は自動的にトークン分解される
- `correctLines` に含まれるJSON文字列（例: `'{"name": "Python"}'`）は、MobileCodeEditor.tsx で自動的に個別のトークンに分解される。
- **分解例**: `'{"name": "Python"}'` → `'`, `{`, `"name"`, `:`, `"Python"`, `}`, `'`
- **対象パターン**:
  - シングルクォート: `'{"...}'`
  - ダブルクォート: `"{'...}"`
  - バッククォート（Go言語等）: `` `{"...}` ``
- **理由**: JSON文字列を1つの選択肢として表示すると長すぎて選びにくい。個別のトークンに分解することで、学習者がJSON構文を理解しながら組み立てられる。

### 41. トークン境界はexpandTokensWithBoundariesで統一する
- MobileCodeEditor.tsx内で**トークン境界を計算するすべての場所**は、`expandTokensWithBoundaries` 関数を使用すること。
- **対象箇所**:
  1. 選択肢（サジェスト）の抽出
  2. 削除操作（Backspace/Delete）
  3. カーソル移動（左右キー）
  4. クリック時のカーソルスナップ
- **禁止**: 上記の箇所で `tokenize()` を直接使用すること
- **理由**: トークン境界が一致しないと、選択肢で選べる単位と削除/移動の単位が異なり、ユーザーが混乱する。例えば、選択肢では `'` が1つのボタンなのに、削除すると `'{"name"'` が一度に消えるなど。
- **トークン分解の確認事項**（選択肢不足を防ぐ）:
  - クォート（`'`, `"`, `` ` ``）は内容と分離して別トークンにする
  - 補間ブラケット（`{`, `}`）は別トークンにする
  - JSON構文記号（`:`, `,`, `[`, `]`）は別トークンにする
  - **テスト方法**: 実際の演習画面で全ての入力に必要なトークンが選択肢に表示されるか確認

### 42. translate-string-literals.mjsの使用制限
- `scripts/translate-string-literals.mjs` は**1回のみ実行**すること。複数回実行すると再帰的な置換が発生し、データが破損する。
- **スクリプト内蔵の安全チェック**:
  1. 実行前に破損パターンを検出 → 検出時は即座に中断
  2. 日本語文字列が少ない場合 → 5秒の警告表示（Ctrl+Cで中断可能）
- **発生する破損パターン**: `names = ['9Taronames = ['Taro', '32Hanakonames = ...` のように、文字列リテラル内に同じ代入文が再帰的にネストされる。
- **手動確認コマンド**: `grep -E "\d{2}[a-zA-Z]+[a-zA-Z]+ = " data/lessons/*.ts`
- **破損が発生した場合の対処**: 手動でcorrectCode、holeyCode、correctLinesを修正する。correctLinesは比較的破損が軽微なことが多いので参考にできる。

### 43. 正規表現チュートリアルにはパターン解説を含める
- 正規表現を扱う `tutorialSlides` では、コード例で使用するパターンの意味を必ず解説すること。
- **解説すべき内容**:
  - 文字クラス: `\d`（数字）, `\w`（英数字）, `\s`（空白）, `\.`（ドット）
  - 量指定子: `+`（1回以上）, `{3}`（ちょうど3回）, `{3,4}`（3〜4回）
  - フラグ: `i`（大文字小文字無視）, `g`（全検索）
  - パターン全体が何を表しているか
- **禁止**: コード例だけを示して、パターンの説明がない
- **正しい例**:
  ```
  **パターン `\w+@\w+\.\w+` の意味：**
  - `\w+` = 英数字が1文字以上
  - `@` = @マークそのまま
  - `\.` = ドット文字（.）
  ```
- **対象言語**: Python, JavaScript, Perl など正規表現を扱う全ての言語
- **確認コマンド**: `grep -l "正規表現" data/lessons/*.ts` で対象ファイルを特定
- **演習で使用するパターンもチェック**: チュートリアルで説明していないパターンを演習で使わない

### 44. 動的コンテンツを含むgridレイアウトではmax-contentを使用
- 可変長テキストを含むボタンやセルをgridで配置する際、`minmax(0, 1fr)`は使用禁止。
- **禁止**: `gridAutoColumns: "minmax(0, 1fr)"` → テキストが切れる
- **正しい**: `gridAutoColumns: "minmax(max-content, 1fr)"` → テキスト幅を確保しつつ均等配分
- **理由**: `minmax(0, 1fr)`は最小幅0を許容するため、長いテキストがオーバーフローして切れる。
- **コンテナのoverflow**: 親コンテナは`overflow-hidden`ではなく`overflow-x-auto`にして、横スクロールを許可する。
- **子要素のoverflow-hidden禁止**: `max-content`を使用する場合、子要素に`overflow-hidden`は不要（テキストが切れる原因になる）。

### 45. 文字列リテラルのトークン化ではクォートを分離する
- `expandTokensWithBoundaries`で文字列リテラルを処理する際、クォート（`'`, `"`, `` ` ``）は内容と分離して別トークンにすること。
- **理由**: クォートが内容と一体化していると、選択肢ボタンにクォートが表示されず、ユーザーが入力できない。
- **正しい分解**: `'Hello'` → `'`, `Hello`, `'`（3トークン）
- **対象**: 通常の文字列リテラル、JSON文字列、補間文字列すべて

### 46. expected_outputはコードの実際の出力と一致させる
- `testCases`の`expected_output`は、`correctCode`を実行した際の**実際の出力**と完全に一致させること。
- **禁止**: `expected_output: ""`（出力があるコードに対して空を設定）
- **例外**: Assembly言語（assembly.ts, assembly2.ts, assembly3.ts）は、レジスタ/メモリ操作を行う低レベル言語であり標準出力を生成しないため、空のexpected_outputは許容される
- **確認方法**:
  1. 同じ言語の既存ファイルの出力形式を確認する
  2. 可能であれば実際にコードを実行して出力を確認する
- **言語ごとの配列出力形式**（必ず既存ファイルに合わせる）:
  - JavaScript: `[ 3, 6, 9 ]\\n`（括弧内にスペース、改行あり）
  - Python: `[2, 4, 6, 8, 10]\\n`（スペースなし、改行あり）
  - PHP: `Array\\n(\\n    [0] => 1\\n...)\\n`（print_r形式）
  - Ruby: `[1, 1]`（改行なし）
- **確認コマンド**: `grep -n '"expected_output": ""' data/lessons/*.ts | grep -v assembly`
- **よくあるミス**:
  - 正規表現演習で出力を空にしてしまう
  - 文字列置換の結果を置換前の値にしてしまう
  - 関数の戻り値をexpected_outputに設定し忘れる（PHP/Rubyなど）
  - 言語ごとの出力形式の違いを無視する（特に配列）
- **発見時の対応**: 正しい出力に修正し、`npm run seed:db`を実行

### 47. Pythonのf-stringプレフィックス検出は`f`を含むもののみ
- f-string（補間文字列）として扱うプレフィックスは**`f`を含むもののみ**。
- **f-stringとして扱う**: `f`, `fr`, `rf`, `F`, `FR`, `RF`
- **f-stringとして扱わない**: `r`, `b`, `u`, `br`, `rb`（補間なし）
- **正しい実装**: `/^[fFrRbBuU]+$/.test(prevToken) && prevToken.toLowerCase().includes('f')`
- **禁止**: `/^[fFrRbBuU]+$/`のみでチェック → `r`、`b`等も補間ありと誤判定
- **参考**: `syntax-highlight.ts`の`splitStringInterpolation`関数が正しい実装例

### 48. たとえ話は説明対象の核心的な特徴を含める
- tutorialSlidesの「たとえ話」は、説明対象の**プログラミング上の動作・特徴**を正確に反映させること。
- **禁止パターン**:
  - 「〜のようなもの。〜が作られます。」だけで終わる → 核心が伝わらない
  - 抽象的すぎて、具体的な動作を想像できない
- **悪い例**:
  - `defaultdict`の説明: 「出席簿のようなもの。名前が書いてなくても、自動で新しい欄が作られます。」
    - 問題: 「デフォルト値が設定される」という核心がない
- **良い例**:
  - `defaultdict`の説明: 「ゲームのスコアボード。新しいプレイヤーが参加すると、自動で「0点」からスタートできます。」
    - OK: 「0点」というデフォルト値の概念が明確
- **チェックポイント**:
  1. たとえ話を読んで、プログラミング上の動作を正確に想像できるか？
  2. 説明対象の「核心的な特徴」（デフォルト値、自動変換、遅延評価など）が含まれているか？
  3. 単に「〜が作られる」「〜ができる」だけで終わっていないか？

### 49. ページ遷移時にユーザーの進捗状態を保持する
- ページ間を遷移する機能を実装する際、**ユーザーの進捗に関わる状態**はsessionStorageなどに保存し、戻ってきたときに復元すること。
- **保存すべき状態の例**:
  - 演習の完了状態（`showNextButton`, `isCompleted`）
  - ユーザーが入力したコード
  - ヒント使用状態
- **問題のあるパターン**:
  - コンポーネントのローカルstate（`useState`）だけで状態を管理 → 再マウント時にリセットされる
  - ページ遷移時にコードだけ保存し、完了状態を保存しない
- **正しいパターン**:
  ```typescript
  // 遷移前に保存
  sessionStorage.setItem(`exercise_temp_code_${id}`, code);
  sessionStorage.setItem(`exercise_temp_completed_${id}`, isCompleted ? "true" : "false");

  // 読み込み時に復元
  const savedCode = sessionStorage.getItem(`exercise_temp_code_${id}`);
  const savedCompleted = sessionStorage.getItem(`exercise_temp_completed_${id}`) === "true";
  ```
- **確認方法**: ページ遷移後に戻ってきて、遷移前と同じ表示になるかテストする

### 50. レッスンデータのエスケープシーケンスはDB保存時に解除する
- レッスンファイル（`data/lessons/*.ts`）の文字列フィールドには `\\n` がリテラル文字列として含まれている。
- **seed-database.ts** で以下の全フィールドの `\\n` を実際の改行 `\n` に変換してからDBに保存すること：
  - `tutorial_slides[].content` - `processTutorialSlides()` 関数
  - `correct_code` - `unescapeNewlines()` 関数
  - `holey_code` - `unescapeNewlines()` 関数
  - `starter_code` - `unescapeNewlines()` 関数
  - `correct_lines[]` - `processStringArray()` 関数
- **フロントエンド** でも防御的に `.replace(/\\n/g, '\n')` で変換すること（既存データ対策）:
  - `tutorial/page.tsx` - ReactMarkdownに渡す前に変換
- **問題の症状**: 解説スライドでタイトルだけ表示され本文が消える、コードが1行で表示される
- **原因**: `\\n` がリテラル文字列のまま処理されると、改行として認識されない
- **修正後の確認**: `npm run seed:db` を実行してDBを更新し、ブラウザで正しく表示されることを確認

### 51. 一括変換スクリプトでのエスケープ破損を防ぐ
- レッスンファイルの `correctCode`、`holeyCode`、`correctLines`、`tutorialSlides[].content` 内の改行エスケープを正しく保持すること。
- **ファイル内の正しいバイト列**: `5c 5c 6e`（バックスラッシュ2つ + n） → TypeScript文字列として `\n` を表現
- **破損したバイト列**:
  - `5c 6e`（バックスラッシュ1つ + n） → 実際の改行に解釈されてしまう
  - `5c 5c 5c 6e`（バックスラッシュ3つ + n） → 余分なバックスラッシュが残る
  - `5c 5c 5c 5c 5c 5c 6e`（バックスラッシュ6つ + n） → 過剰エスケープ
- **問題の症状**:
  - 解説スライドでコードブロックが閉じない（` ``` ` 以降もコードとして表示される）
  - 「**だいじなルール：**」などのテキストがコードブロック内に表示される
  - コードが1行で表示される（改行がない）
- **原因**: 一括変換スクリプトがエスケープシーケンスを誤って変換（シェルエスケープの問題、置換順序のバグ等）
- **使用禁止スクリプト**:
  - `translate-to-japanese.mjs.DEPRECATED` - デコード処理にバグがあり、エスケープを破損させる
  - `normalize-escapes.mjs.DEPRECATED` - `'\\n'`が1バックスラッシュになるバグ
  - `fix-escaping.mjs`（削除済み）- 「4バックスラッシュが正しい」という誤った前提
- **チェックスクリプト**: `node scripts/check-escape-sequences.mjs`（全ファイルのエスケープを検証）
- **修正スクリプト**: `node scripts/fix-escape-normalize.mjs`（全てのバックスラッシュ+n を正しい2バックスラッシュ+n に正規化）
- **予防策**: 一括変換スクリプトでは以下を守ること：
  1. JSON文字列の `\\n` を実際の改行に変換しない
  2. シェルコマンド（`node -e "..."`）内でバックスラッシュを扱う際はエスケープに注意（ファイルベースのスクリプトを使用推奨）

### 52. テンプレート文字列内の変数名は英語にする
- `correctCode`、`holeyCode`、`correctLines` 内のテンプレート文字列（補間文字列）で使用する変数名は**英語**にすること。
- **禁止パターン**:
  - JavaScript/TypeScript: `${名前}` → `${name}` にする
  - Ruby/Elixir: `#{名前}` → `#{name}` にする
  - C#/Python f-string: `{年齢}` → `{age}` にする
  - Bash: `${名前s[@]}` → `${names[@]}` にする
- **理由**: 日本語変数名は実際のプログラミングでは使用されず、学習者が誤った習慣を身につける。また、一部の言語では日本語変数名がサポートされていない。
- **チェックスクリプト**: `node scripts/check-lesson-file.mjs`（日本語変数参照チェック項目）
- **確認コマンド**: `grep -E '\$\{[ぁ-んァ-ン一-龥]+\}|#\{[ぁ-んァ-ン一-龥]+\}|\{[ぁ-んァ-ン一-龥]+\}' data/lessons/*.ts`

### 53. expected_outputはcorrectCodeの出力言語と一致させる
- `expected_output` の文字列は、`correctCode` で出力される文字列と**同じ言語**（日本語/英語）にすること。
- **禁止パターン**:
  - correctCode: `print('こんにちは')` → expected_output: `Hello` （不一致）
  - correctCode: `puts '合格'` → expected_output: `Pass` （不一致）
  - correctCode: `console.log('ニャー')` → expected_output: `Meow` （不一致）
- **正しいパターン**:
  - correctCode: `print('こんにちは')` → expected_output: `こんにちは`
  - correctCode: `puts '合格'` → expected_output: `合格`
  - correctCode: `console.log('ニャー')` → expected_output: `ニャー`
- **チェックスクリプト**: `node scripts/check-lesson-file.mjs`（expected_output文字列チェック項目）
- **修正スクリプト**: `node scripts/fix-output-mismatch-v2.mjs`
- **よくある不一致パターン**:
  - `こんにちは` ↔ `Hello`
  - `世界` ↔ `World`
  - `合格` ↔ `Pass`
  - `大人` ↔ `Adult`
  - `子供` ↔ `Child`
  - `ニャー` ↔ `Meow`
  - `エラー` ↔ `Error`

### 54. チュートリアルの出力例は入力と同じ言語にする
- `tutorialSlides` のコード例で日本語の値を入力している場合、**出力例も日本語**にすること。
- **禁止パターン**:
  - 入力: `greet('アリス', 'ボブ')` → 出力: `=> Alice` `=> Bob` （日本語入力→英語出力）
  - 入力: `colors['りんご']` → 出力: `=> red` （日本語キー→英語値）
  - 入力: `{ name: 'アリス' }` → 出力: `Alice` （日本語値→英語出力）
- **正しいパターン**:
  - 入力: `greet('アリス', 'ボブ')` → 出力: `=> アリス` `=> ボブ`
  - 入力: `colors['りんご']` → 出力: `=> あか`
  - 入力: `{ name: 'アリス' }` → 出力: `アリス`
- **確認コマンド**: `grep -E "アリス.*Alice|ボブ.*Bob|りんご.*apple" data/lessons/*.ts`
- **理由**: 入力と出力で言語が異なると、学習者が混乱する。コードが何を出力するか予測できなくなる。
  3. JavaScriptで改行を表す文字列を書く際は `'\\\\n'`（4バックスラッシュ）を使用すること。`'\\n'`は1バックスラッシュ+nになり不正
  4. **重要**: レッスンファイルを修正する**全てのスクリプト実行後**に `node scripts/check-escape-sequences.mjs` を実行
  5. `npm run seed:db` と**UIで解説スライドを確認**する
- **注意**: `.worktrees/`内のファイルは別ブランチなので、メインブランチからは修正しない

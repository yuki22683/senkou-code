# Project Rules (プロジェクトルール)

## 修正ミス発生時のルール (Ironclad Rules)

1.  **再発防止策の徹底 (Mandatory Recurrence Prevention):**
    修正ミスや実装ミスが発生した場合は、必ず**再発防止策 (Recurrence Prevention Measures)** をこのファイルに追記すること。これは継続的な改善 och プロジェクトの安定性を確保するための絶対的なルールである。
2.  **同じミスを繰り返さない:**
    策定した再発防止策を遵守し、同じ過ちを二度と繰り返さないこと。

---

## 再発防止策 (Recurrence Prevention Measures)

### 1. git checkout 実行時の注意
- `git checkout -- data/lessons/*.ts` を実行すると、以前適用した修正（虫食い化、コメント追加など）が全て消える
- git checkout 後は必ず以下のスクリプトを再実行すること：
  1. `node scripts/fix-empty-line-hints.mjs` - 空行のhints修正
  2. `node scripts/fix-non-holey-hints.mjs` - 非holey行のhints修正
  3. `node scripts/add-hint-comments.mjs` - コメント追加
  4. `node scripts/fix-vague-output-comments.mjs` - 曖昧なコメント修正
  5. `node scripts/sync-comments-to-holey.mjs` - holeyCodeにコメント同期（コメント整合性修正）
  6. `node scripts/fix-correctlines-comments.mjs` - correctLinesのコメント修正
  7. `node scripts/fix-candidates-correct.mjs` - 選択肢不足を自動修正（ルール#34参照）
  8. `node scripts/check-linehints-giveaway.mjs` - 答えをそのまま教えるヒントがないかチェック（ルール#5参照）
- **注意**：`translate-string-literals.mjs` は使用禁止（ルール#55参照）
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
  - `"プログラムのエントリーポイントを定義するラベルです。"`
  - `"OSにシステムコールを実行させる命令です。"`
- 悪い例：
  - `"extends と入力します。"` → 答えを言っているだけ
  - `"true と入力します。"` → 答えを言っているだけ
  - `"変数名 a を入力します。"` → 答えを言っているだけ
  - `"syscall を入力します。"` → 答えを言っているだけ
  - `null` → ヒントを放棄している
- **チェックスクリプト**: `node scripts/check-linehints-giveaway.mjs`
- **修正後は必ずチェックを実行**して0件であることを確認すること

### 6. 修正後のDB反映
- レッスンファイル（`data/lessons/*.ts`）を修正した後は、必ず `npm run seed:db` を実行して変更をデータベースに反映させること。

### 7. 正規表現のエスケープと構文確認
- 正規表現（特に `replace` やスクリプト内）を記述する際は、文字クラス `[]` 内の `]` や `-` などの記号を正しくエスケープすること。修正後は必ずビルドが通るか、構文エラーがないかを確認すること。

### 8. 言語仕様に基づいた判定ロジック
- スペースの任意・必須判定などのコード正規化ロジックを修正する際は、一律の正規表現で処理せず、各プログラミング言語の仕様（キーワード、識別子、演算子の区別）を考慮すること。C言語の関数呼び出しのように、スペースが許容されない箇所を誤って任意扱いにしないよう注意すること。

### 9. 大規模置換時の構文安全性の確保
- 複数のレッスンファイルに対して一括置換を行う際、単純な文字列分割（`split`）や広範な正規表現を使用すると、JSON オブジェクトの構造（`{` や `}`）を破壊する恐れがある。
- 置換後は `npm run seed:db` 等で構文が有効であることを自動確認すること。

### 10. 配列インデックスの用語統一
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

### 11. コメントは次の行を一意に特定できる内容にする
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
  - **`// => でアロー関数を定義`** → 何の関数か不明（`// xの2乗を返すsquare関数を定義` のように）
  - **`// -> で引数と処理を区切る`** → 何の関数か不明（`// nを2倍にするdouble関数を定義` のように）
  - **`// fn でアロー関数を定義`** → 何の関数か不明（`// nを3倍にする$triple関数を定義` のように）
  - **`# 関数を呼び出し（第1引数に小さい方, 第2引数に大きい方）`** → 実際の値が不明（`# add関数を呼び出し（第1引数に10, 第2引数に20）` のように具体的な値を書く）
  - **`// 〜を作成（xに小さい方, yに大きい方）`** → 実際の値が不明（`// Pointを作成（xに3, yに4）` のように具体的な値を書く）
  - **相対的な表現の禁止**: `小さい方`, `大きい方`, `短い方`, `長い方`, `古い方`, `新しい方` などの相対的表現は使用禁止。必ず実際の値（数値、文字列、変数名）を記述すること。
  - **`# カンマで区切って複数の値を返す`** → 順番が不明（`# x+1, x*2の順で返す` のように順番を明記）
  - **`// return で複数の値を返す`** → 順番が不明（`// a, bの順で返す` のように順番を明記）
  - **複数の戻り値を返す行のコメント**: `return a, b` のように複数の値を返す行では、必ず `# a, bの順で返す` のように戻り値の順序を明記すること。
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

### 12. 構文ハイライトの判定順序
- `lib/syntax-highlight.ts` の `getTokenStyle()` では、**コメント判定を文字列判定より前**に配置すること。
- 理由：コメントが `# => 'ell'` のようにクォートで終わる場合、文字列判定（`endsWithQuote`）でマッチしてしまい、コメントが文字列色で表示されてしまうため。
- 正しい判定順序：
  1. コメント（`#`, `//`, `/*`, `--`, `{-`, `;` で始まる）
  2. 文字列プレフィックス（f, r, b など）
  3. 補間ブラケット（`{`, `}`, `${`）
  4. 文字列（クォートで始まる/終わる）

### 13. レッスンファイルのimportケーシング
- `data/lessons/index.ts` でレッスンファイルをimportする際、ファイル名は**すべて小文字**で記述すること。
- **禁止**：`import { javaData3 } from './Java3';`
- **正しい**：`import { javaData3 } from './java3';`
- Windowsはファイル名の大文字小文字を区別しないが、Linux/macOSでは区別するため、ビルドエラーや本番環境でのエラーの原因になる。

### 14. holeyCodeの全コード行に虫食い（___）を含める
- `holeyCode` フィールドの**すべてのコード行**には必ず `___` を含めること。
- コメント行と空行のみ例外. 構造的な行（`{`, `}`, `end`等）も虫食いにする。
- レッスンファイルを修正した後は必ず `node scripts/check-holey-v3.ts` を実行して整合性を確認すること。
- **禁止**：`package main` `import "fmt"` `using System;` など、虫食いのないコード行
- **正しい**：`package ___` `import "___"` `using ___;`
- **注意**：`fix-holey-v2.mjs` は使用禁止（ルール#24参照）

### 15. エスケープシーケンスの置換順序
- レッスンファイルの文字列をデコードする際、置換の順序が重要。
- **必ず `\\\\` を最初に置換してから `\\n` を置換すること。**
- **間違い**：`.replace(/\\n/g, '\n').replace(/\\\\/g, '\\')`
  - `\\n` (backslash-backslash-n) を処理すると、`\\n` → `\` + newline となり、余分な `\` が残る
- **正解**：`.replace(/\\\\/g, '\\').replace(/\\n/g, '\n')`
  - 先に `\\` → `\` に変換し、その後 `\n` → newline に変換

### 16. スライド/ページ切り替え時のスクロールリセット
- ページ内でスライドやコンテンツを切り替えるナビゲーション（前へ/次へボタン、ドットインジケーター等）を実装する際は、必ず切り替え時に `window.scrollTo(0, 0)` でスクロール位置をトップにリセットすること。
- 実装方法：状態変数（例：`currentSlide`）の変更を `useEffect` で監視し、変更時にスクロールリセットを実行する。
- **対象**：ページ全体のコンテンツが切り替わるスライドナビゲーション
- **対象外**：パネル内のタブ切り替え（コンソール/サンプル等）はページ全体のスクロールに影響しないため不要

### 17. correctCode / holeyCode / correctLines のコメント整合性
- `correctCode`、`holeyCode`、`correctLines` の3つのフィールドで**コメントは完全に一致**させること。
- correctCodeで具体的な値を含むコメント（例：`// "Hello Async!"を返す`）を書いた場合、holeyCodeとcorrectLinesでも同一のコメントにする。
- **禁止パターン**：
  - correctCode: `// 'Async works!'を返す` → holeyCode/correctLines: `// return で値を返す`（曖昧化）
  - correctCode: `// 「Hello」を持つOptionalを作成` → holeyCode/correctLines: `// 値を持つOptionalを作成`（曖昧化）
- **理由**：holeyCodeのコメントが曖昧だと、ユーザーが `___` に何を入力すべきか特定できない
- **修正方法**：コメントを修正する際は `correctCode`、`holeyCode`、`correctLines` の3箇所を必ず同時に更新する

### 18. 解説スライドと演習コードの差別化
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

### 19. 計算演習における演算子の差別化
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

### 20. 空行のlineHintsはnullにする
- `correctLines` で空行（`""`）に対応する `lineHints` の要素は必ず `null` にすること。
- **理由**：空行にはユーザーが入力する箇所がないため、ヒントは不要。
- **禁止**：空行に対して `"何かを入力します"` などのヒントを設定する
- **修正スクリプト**：`node scripts/fix-empty-line-hints.mjs`

### 21. holeyCodeに___がない行のlineHintsはnullにする
- `holeyCode` の行に `___` が含まれていない場合、その行の `lineHints` は `null` にすること。
- **理由**：`___` がない行はユーザーが入力する箇所がないため、ヒントがあっても意味がない。
- **対象**：閉じ括弧 `}`、構造的な行、コメント行など
- **修正スクリプト**：`node scripts/fix-non-holey-hints.mjs`

### 22. holeyCode内のコメントに___を含めない
- `holeyCode` のコメント行には `___` を含めないこと。コメントは `correctCode` と完全に一致させる。
- **禁止**：`# ___を入力`、`// ___で処理`
- **正しい**：`# 10を入力`、`// mapで処理`（correctCodeと同じ）
- **理由**：コメントはユーザーへのヒントであり、穴埋め対象ではない。コメントに `___` があると混乱を招く。
- **修正スクリプト**：`node scripts/fix-comment-consistency.mjs`

### 23. fix-holey-v2.mjsの使用禁止
- `scripts/fix-holey-v2.mjs` は**使用禁止**。このスクリプトにはバグがあり、holeyCodeを破損させる（無限に複製される）。
- git checkout後の再適用には、個別の修正スクリプトを使用すること：
  - `node scripts/fix-empty-line-hints.mjs`
  - `node scripts/fix-non-holey-hints.mjs`
  - `node scripts/fix-comment-consistency.mjs`

### 24. レッスン修正後の必須チェック項目
- レッスンファイルを修正した後は、以下の全チェックを実行して0件/問題なしを確認すること：
  1. `node scripts/check-holey-v4.mjs` → 0件
  2. `node scripts/check-comment-consistency-v3.mjs` → 不整合なし
  3. `node scripts/check-vague-comments.mjs` → 曖昧なコメントなし
  4. `node scripts/check-tutorial-exercise-similarity.mjs` → 問題なし
  5. 英語文字列チェック → 0件（ルール#25参照）
     - コマンド: `grep -rn '"Pass"\|"Great\|"woof\|"meow\|"Big"\|"Small"\|"up"\|"down"\|"even"\|"odd"\|"Bonus' data/lessons/*.ts | grep -v 'すごい\|合格\|ボーナス\|ワン\|ニャー\|大きい\|小さい\|上\|下\|偶数\|奇数\|不合格\|even?\|"others":\|"functions":'`
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
  13. `node scripts/check-lesson-file.mjs` → エラー0件（tutorialSlides消失はエラーレベル - ルール#82参照）
  14. **【手動確認】** チュートリアルの出力例が入力と同じ言語か確認（ルール#54参照）
     - 確認コマンド: `grep -E "アリス.*Alice|ボブ.*Bob|太郎.*Taro|りんご.*apple" data/lessons/*.ts`
     - 日本語入力→英語出力のパターンは全て修正が必要
  15. `node scripts/check-code-output-consistency.mjs` → コード・出力整合性チェック（ルール#56-58参照）
     - 正規表現`\w+`と日本語の組み合わせ検出
     - コメントとコードの言語不一致検出
     - expected_outputとコード出力の言語不一致検出
  16. `node scripts/check-linehints-consistency.mjs` → lineHints整合性チェック
     - lineHints配列長とcorrectLines配列長の一致
     - holeyCodeに`___`がない行にヒントがないこと
     - コメント行でない行に「コメントです」ヒントがないこと
  17. `node scripts/check-linehints-content-v2.mjs` → lineHints内容チェック（ルール#59参照）
     - 「メソッドを呼び出し」ヒントが実際のメソッド呼び出し行にあること
     - 「インスタンスを作成」ヒントが実際のインスタンス作成行にあること
     - 「条件式評価」ヒントが実際のif文行にあること
  18. `node scripts/check-linehints-giveaway.mjs` → 答え漏れチェック（ルール#5参照）
     - 「〜を入力します」「〜と入力しましょう」パターンがないこと
- **チェックが失敗した場合の修正方法**：
  - check-holey-v4.mjs → `fix-empty-line-hints.mjs` と `fix-non-holey-hints.mjs` を実行
  - check-comment-consistency-v3.mjs → `sync-comments-to-holey.mjs` を実行（correctCodeのコメントをholeyCodeに同期）
  - check-vague-comments.mjs → `fix-vague-output-comments.mjs` → `sync-comments-to-holey.mjs` → `fix-correctlines-comments.mjs` を順に実行
  - check-tutorial-exercise-similarity.mjs → 手動で演習のシナリオを変更（ルール#19, #20参照）
  - 英語文字列が残っている → `translate-to-japanese.mjs` を実行（ルール#26参照）
  - check-candidates-final.mjs → `fix-candidates-correct.mjs` を実行（ルール#33参照）
  - expected_output空/形式不正 → 同じ言語の既存ファイルの形式を確認し手動修正（ルール#46参照）
  - check-escape-sequences.mjs → `fix-escape-normalize.mjs` を実行（ルール#51参照）
  - check-lesson-file.mjs（日本語変数参照）→ 手動で英語変数名に修正（ルール#52参照）
  - check-lesson-file.mjs（expected_output文字列）→ `fix-output-mismatch-v2.mjs` を実行（ルール#53参照）
  - check-code-output-consistency.mjs → コメントを手動修正、または expected_output をコード出力に合わせて修正（ルール#56-58参照）
  - check-linehints-consistency.mjs → 配列長不一致は手動修正、hint_on_non_holey_lineは`fix-non-holey-hints.mjs`を実行
  - check-linehints-content-v2.mjs → 手動で該当行に合ったヒントに修正（ルール#59参照）
  - check-linehints-giveaway.mjs → 手動で概念的な説明に修正（ルール#5参照）
  - correctCode/correctLinesに`___`が含まれている → 手動で正しい値に修正（ルール#74参照）
  18. `grep -l '"correctCode".*___' data/lessons/*.ts` → correctCodeに___がないこと（ルール#74参照）

### 25. コード内の文字列リテラルは日本語、コメントも日本語
- `correctCode`、`holeyCode`、`correctLines` 内のコードにおいて：
  - **文字列リテラル**（`'...'` や `"..."`）の中身は**日本語**にする
  - **コメント**（`#`、`//`、`--` 等で始まる行）も**日本語**で記述
  - **コメント内の文字列参照**も日本語にする（例：`// nameに'太郎'を設定`）
- **例外（英語のまま維持）**：
  - `'Hello, World!'`、`'hello world'`、`'hello'` + `' world'` - プログラミングの決まり文句（**絶対に日本語に翻訳しない**）
  - プログラミング言語名（Python, JavaScript, Ruby等）
  - 技術用語（localhost, Math, TypeScript等）
- **重要: "hello world" の翻訳禁止**：
  - 「hello world」は万国共通のプログラミング用語であり、`"こんにちは 世界"` や `"こんにちは"` + `" 世界"` に翻訳してはならない
  - 変形パターン（`"hello"` + `" world"`、`push_str(" world")`等）も全て英語のまま維持
  - このルールはあらゆるレッスンファイルに適用される
- **禁止**：
  - `print('Pass!')` → 文字列が英語（`print('合格！')` にする）
  - `console.log('Adult')` → 文字列が英語（`console.log('大人')` にする）
  - `// nameに'Taro'を設定` → コメント内の参照が英語（`// nameに'太郎'を設定` にする）
- **よく見落とされる英語文字列（必ず日本語化）**：
  - `"Great!"` → `"すごい！"`
  - `"Pass"` / `"Fail"` → `"合格"` / `"不合格"`
  - `"Bonus Pass"` → `"ボーナス合格！"`
  - `"Big"` / `"Small"` → `"大きい"` / `"小さい"`
  - `"up"` / `"down"` → `"上"` / `"下"`
  - `"even"` / `"odd"` → `"偶数"` / `"奇数"`
  - `"woof"` / `"meow"` → `"ワン！"` / `"ニャー"`
  - `"division by zero"` → `"ゼロ除算エラー"`
  - `"Computing..."` / `"Loading..."` → `"計算中..."` / `"読み込み中..."`
  - `"Tama"` → `"タマ"` (candidates内の人名も日本語表記)
- **チェックコマンド**：
  ```bash
  grep -rn '"Pass"\|"Great\|"woof\|"meow\|"Big"\|"Small"\|"up"\|"down"\|"even"\|"odd"\|"Bonus' data/lessons/*.ts | grep -v 'すごい\|合格\|ボーナス\|ワン\|ニャー\|大きい\|小さい\|上\|下\|偶数\|奇数\|不合格\|even?\|"others":\|"functions":'
  ```
  - 出力が0件であることを確認する
  - **許容**: candidates内のメソッド名・型名（meow, Fail等）は識別子なので英語のまま
- **正しい**：
  - `print('合格！')` → 文字列が日本語
  - `console.log('大人')` → 文字列が日本語
  - `// nameに'太郎'を設定` → コメント内の参照も日本語
- **理由**：
  - 日本語学習者向けのため、文字列も日本語の方が理解しやすい
  - コメントと文字列の両方が日本語で統一されていると混乱が少ない
- **修正スクリプト**：`node scripts/translate-to-japanese.mjs`
  - 英語文字列を日本語に変換する

### 26. 新しい用語は説明してから使う
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

### 27. ユーザーにとって無意味な表現を避ける
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

### 28. 括弧内にコード例を配置しない
- 解説スライドで機能を説明する際、**括弧内にコード例を入れない**こと。見づらくなる。
- **禁止**：`__repr__`: 表示用メソッド（`Point(x=3, y=4)` のように表示）
- **正しい**：`__repr__`: 表示用メソッド
- コード例が必要な場合は、別の行やコードブロックで示す。

### 29. 完了済み演習の進捗ステータスを上書きしない
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
    .from("user_progress").select("status").eq("user_id", user.id).eq("exercise_id", exerciseId).single();

  if (existingProgress?.status !== "completed") {
    await supabase.from("user_progress").upsert({ status: "hint_used", ... });
  }
  ```
- **理由**：完了済み演習を再度開いて途中でやめた場合、ステータスが上書きされると次の演習がロックされてしまう。

### 30. 2行連続のコメント禁止
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
  const fs = require('fs'); const path = require('path');
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

### 31. 演習コードの構文チェック必須
- 演習を追加・修正した後は、**必ず構文チェックを実行**してコードが正しいことを確認すること。
- **チェックスクリプト**: `node scripts/check-python-syntax.mjs`（Python用）
- **問題のあるコード例**:
  ```python
  print('10Pass!    print('Pass!')')  # 壊れた文字列
  colors = ['10redcolors = ['red', 'blue']']  # 壊れたリスト
  ```
- **理由**: translate-string-literals.mjsなどのスクリプトが誤った変換を行うと、コードが壊れて演習が動作しなくなる。
- **対象言語**: 各言語用の構文チェックスクリプトを使用するか、手動でコードをコピーして実行確認する。

### 32. candidatesにはholeyCodeの全ての穴を埋める選択肢を含める
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

### 33. 翻訳スクリプト実行後は選択肢チェック必須
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

### 34. 演習を削除したらDBからも削除し、即座にコミットする
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

### 35. holeyCode内のJSON/文字列の一部を___にしない
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

### 36. 一括変換スクリプトの実行後は必ず構文チェック
- `translate-string-literals.mjs` などの一括変換スクリプトを実行した後は、**必ず以下を確認**すること：
  1. `npx tsc --noEmit` → 構文エラーなし
  2. `npm run seed:db` → 成功
  3. **UIで数件の演習を実際に開いて確認** → 選択肢が正しく表示されるか
- **問題が発生した場合**: `git checkout <commit> -- data/lessons/<file>.ts` で復元
- **理由**: 一括変換スクリプトがholeyCodeを壊すバグがあると、多数のファイルが破損する

### 37. 「完了」と宣言する前に全チェックを実行する
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

### 38. candidatesフィールドはフロントエンドで使用されない
- `candidates` フィールドはデータベースに保存されるが、**フロントエンドでは使用されていない**。
- 選択肢（ボタン）は `correctLines` から自動的にトークナイズして生成される。
- **結果**: `candidates` を編集しても選択肢は変わらない。選択肢を変えたい場合は `correctLines` を変更するか、フロントエンド（MobileCodeEditor.tsx）のトークナイズロジックを修正する。
- **注意**: 将来的に `candidates` を使うように変更される可能性があるため、正しい値を設定しておくことは推奨。

### 39. JSON文字列は自動的にトークン分解される
- `correctLines` に含まれるJSON文字列（例: `'{"name": "Python"}'`）は、MobileCodeEditor.tsx で自動的に個別のトークンに分解される。
- **分解例**: `'{"name": "Python"}'` → `'`, `{`, `"name"`, `:`, `"Python"`, `}`, `'`
- **対象パターン**:
  - シングルクォート: `'{"...}'`
  - ダブルクォート: `"{'...}"`
  - バッククォート（Go言語等）: `` `{"...}` ``
- **理由**: JSON文字列を1つの選択肢として表示すると長すぎて選びにくい。個別のトークンに分解することで、学習者がJSON構文を理解しながら組み立てられる。

### 40. トークン境界はexpandTokensWithBoundariesで統一する
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

### 41. translate-string-literals.mjsの使用制限
- `scripts/translate-string-literals.mjs` は**1回のみ実行**すること。複数回実行すると再帰的な置換が発生し、データが破損する。
- **スクリプト内蔵の安全チェック**:
  1. 実行前に破損パターンを検出 → 検出時は即座に中断
  2. 日本語文字列が少ない場合 → 5秒の警告表示（Ctrl+Cで中断可能）
- **発生する破損パターン**: `names = ['9Taronames = ['Taro', '32Hanakonames = ...` のように、文字列リテラル内に同じ代入文が再帰的にネストされる。
- **手動確認コマンド**: `grep -E "\d{2}[a-zA-Z]+[a-zA-Z]+ = " data/lessons/*.ts`
- **破損が発生した場合の対処**: 手動でcorrectCode、holeyCode、correctLinesを修正する。correctLinesは比較的破損が軽微なことが多いので参考にできる。

### 42. 正規表現チュートリアルにはパターン解説を含める
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

### 43. 動的コンテンツを含むgridレイアウトではmax-contentを使用
- 可変長テキストを含むボタンやセルをgridで配置する際、`minmax(0, 1fr)`は使用禁止。
- **禁止**: `gridAutoColumns: "minmax(0, 1fr)"` → テキストが切れる
- **正しい**: `gridAutoColumns: "minmax(max-content, 1fr)"` → テキスト幅を確保しつつ均等配分
- **理由**: `minmax(0, 1fr)`は最小幅0を許容するため、長いテキストがオーバーフローして切れる。
- **コンテナのoverflow**: 親コンテナは`overflow-hidden`ではなく`overflow-x-auto`にして、横スクロールを許可する。
- **子要素のoverflow-hidden禁止**: `max-content`を使用する場合、子要素に`overflow-hidden`は不要（テキストが切れる原因になる）。

### 44. 文字列リテラルのトークン化ではクォートを分離する
- `expandTokensWithBoundaries`で文字列リテラルを処理する際、クォート（`'`, `"`, `` ` ``）は内容と分離して別トークンにすること。
- **理由**: クォートが内容と一体化していると、選択肢ボタンにクォートが表示されず、ユーザーが入力できない。
- **正しい分解**: `'Hello'` → `'`, `Hello`, `'`（3トークン）
- **対象**: 通常の文字列リテラル、JSON文字列、補間文字列すべて

### 45. expected_outputはコードの実際の出力と一致させる
- `testCases`の`expected_output`は、`correctCode`を実行した際の**実際の出力**と完全に一致させること。
- **禁止**: `expected_output: ""`（出力があるコードに対して空を設定）
- **例外**: Assembly言語（assembly.ts, assembly2.ts, assembly3.ts）は、レジスタ/メモリ操作を行う低レベル言語であり標準出力を生成しないため、空のexpected_outputは許容される
- **確認方法**:
  1. 同じ言語の既存ファイルの出力形式を確認する
  2. 可能であれば実際にコードを実行して出力を確認する
- **言語ごとの出力形式**（必ず既存ファイルに合わせる）:
  - C言語: `printf("%d\n", x)` → `"42\\n"`（printfのフォーマット文字列に`\n`があれば`\\n`必須）
  - JavaScript: `[ 3, 6, 9 ]\\n`（括弧内にスペース、改行あり）
  - Python: `[2, 4, 6, 8, 10]\\n`（スペースなし、改行あり）
  - PHP: `echo $x;` → 改行なし、`Array\\n(\\n    [0] => 1\\n...)\\n`（print_r形式）
  - Ruby: `[1, 1]`（改行なし）
- **確認コマンド**: `grep -n '"expected_output": ""' data/lessons/*.ts | grep -v assembly`
- **よくあるミス**:
  - C言語の`printf("%d\n", x)`で`\\n`を付け忘れる（printfのフォーマットに`\n`があれば必ず`\\n`を含める）
  - 正規表現演習で出力を空にしてしまう
  - 文字列置換の結果を置換前の値にしてしまう
  - 関数の戻り値をexpected_outputに設定し忘れる（PHP/Rubyなど）
  - 言語ごとの出力形式の違いを無視する（特に配列）
- **発見時の対応**: 正しい出力に修正し、`npm run seed:db`を実行

### 46. Pythonのf-stringプレフィックス検出は`f`を含むもののみ
- f-string（補間文字列）として扱うプレフィックスは**`f`を含むもののみ**。
- **f-stringとして扱う**: `f`, `fr`, `rf`, `F`, `FR`, `RF`
- **f-stringとして扱わない**: `r`, `b`, `u`, `br`, `rb`（補間なし）
- **正しい実装**: `/^[fFrRbBuU]+$/.test(prevToken) && prevToken.toLowerCase().includes('f')`
- **禁止**: `/^[fFrRbBuU]+$/`のみでチェック → `r`、`b`等も補間ありと誤判定
- **参考**: `syntax-highlight.ts`の`splitStringInterpolation`関数が正しい実装例

### 47. たとえ話は説明対象の核心的な特徴を含める
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

### 48. ページ遷移時にユーザーの進捗状態を保持する
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

### 49. レッスンデータのエスケープシーケンスはDB保存時に解除する
- レッスンファイル（`data/lessons/*.ts`）の文字列フィールドには `\\n` がリテラル文字列として含まれている。
- **seed-database.ts** で以下の全フィールドの `\\n` を実際の改行 `\n` に変換してからDBに保存すること：
  - `tutorial_slides[].content` - `processTutorialSlides()` 関数
  - `correct_code` - `unescapeNewlines()` 関数
  - `holey_code` - `unescapeNewlines()` 関数
  - `starter_code` - `unescapeNewlines()` 関数
  - `correct_lines[]` - `processStringArray()` 関数
  - `expected_output` - `unescapeNewlines()` 関数
  - `test_input` - `unescapeNewlines()` 関数
- **フロントエンド** でも防御的に `.replace(/\\n/g, '\n')` で変換すること（既存データ対策）:
  - `tutorial/page.tsx` - ReactMarkdownに渡す前に変換
- **問題の症状**: 解説スライドでタイトルだけ表示され本文が消える、コードが1行で表示される
- **原因**: `\\n` がリテラル文字列のまま処理されると、改行として認識されない
- **修正後の確認**: `npm run seed:db` を実行してDBを更新し、ブラウザで正しく表示されることを確認

### 50. 一括変換スクリプトでのエスケープ破損を防ぐ
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

### 51. テンプレート文字列内の変数名は英語にする
- `correctCode`、`holeyCode`、`correctLines` 内のテンプレート文字列（補間文字列）で使用する変数名は**英語**にすること。
- **禁止パターン**:
  - JavaScript/TypeScript: `${名前}` → `${name}` にする
  - Ruby/Elixir: `#{名前}` → `#{name}` にする
  - C#/Python f-string: `{年齢}` → `{age}` にする
  - Bash: `${名前s[@]}` → `${names[@]}` にする
- **理由**: 日本語変数名は実際のプログラミングでは使用されず、学習者が誤った習慣を身につける。また、一部の言語では日本語変数名がサポートされていない。
- **チェックスクリプト**: `node scripts/check-lesson-file.mjs`（日本語変数参照チェック項目）
- **確認コマンド**: `grep -E '\$\{[ぁ-んァ-ン一-龥]+\}|#\{[ぁ-んァ-ン一-龥]+\}|\{[ぁ-んァ-ン一-龥]+\}' data/lessons/*.ts`

### 52. expected_outputはcorrectCodeの出力言語と一致させる
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
  - `太郎` ↔ `Taro`
  - `花子` ↔ `Hanako`
  - `秘密` ↔ `secret`
  - `パスワード` ↔ `password`
  - `処理中` ↔ `Processing`
  - `クリーンアップ完了` ↔ `Cleanup done`
  - `トヨタ` ↔ `Toyota`
  - `Pythonガイド` ↔ `Python Guide`

### 53. チュートリアルの出力例は入力と同じ言語にする
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

### 54. translate-string-literals.mjsの使用禁止（データ破損バグ）
- `scripts/translate-string-literals.mjs` は**使用禁止**。このスクリプトにはバグがあり、文字列を再帰的にネストさせてデータを破損させる。
- **破損パターン**:
  - 正常: `"合格！"`
  - 破損: `"22合格！    Console.WriteLine(\"合格！\");\");"`
  - 数字 + 元の文字列 + コードの重複が発生
- **破損を検出するコマンド**: `grep -E '"[0-9]{2}[a-zA-Zぁ-んァ-ン一-龯]' data/lessons/*.ts`
  - `"10代です"`、`"20代です"` などは正常（日本語として意味がある）
  - `"22合格！..."` のように数字の後にコードが続くのは破損
- **破損が発生した場合の修復方法**:
  1. クリーンなコミット（破損前）を特定: `git log --oneline data/lessons/<file>.ts`
  2. `git show <commit>:data/lessons/<file>.ts > data/lessons/<file>.ts` で復元
  3. `npm run seed:db` で検証
- **影響を受けたファイル（修復済み）**: csharp.ts, java.ts, kotlin.ts, swift.ts, javascript.ts, javascript2.ts, perl.ts, php.ts, python2.ts, rust.ts, go4.ts

### 55. 正規表現 `\w+` は日本語にマッチしない
- 正規表現パターン `\w`、`\w+`、`\W` は**ASCIIの英数字とアンダースコアのみ**にマッチする。日本語文字（ひらがな、カタカナ、漢字）にはマッチしない。
- **禁止パターン**:
  - `\w+` で日本語メールアドレスをマッチさせようとする
  - `text = 'メール@テスト.com'` に `/\w+@\w+\.\w+/` を使う → マッチしない
  - `text = 'テスト@例.com'` に `\w+` を使う → マッチしない
- **正しいパターン**:
  - ASCII文字列を使用: `text = 'email@test.com'`
  - または Unicode 対応パターンを使用（言語依存）
- **影響を受ける言語**: Python, JavaScript, Perl, Ruby, PHP など全ての言語
- **演習作成時のルール**: 正規表現演習では、パターンに合うASCII文字列を使用すること。日本語文字列を使う場合は `\w+` ではなく明示的な文字クラス（`[あ-んア-ン一-龯]+`）を使用すること。
- **確認コマンド**: `grep -E '\\\\w\+.*日本語|日本語.*\\\\w\+|メール.*\\\\w|テスト.*\\\\w' data/lessons/*.ts`

### 56. 正規表現は大文字小文字を区別する（デフォルト）
- 正規表現はデフォルトで**大文字小文字を区別する（case-sensitive）**。
- **禁止パターン**:
  - `/world/` で "Hello World" をマッチさせようとする（Wが大文字なのでマッチしない）
  - `'Hello World'` に `/hello/` を使う → マッチしない
- **正しいパターン**:
  - 大文字小文字を無視するフラグを使用: `/world/i`（JavaScript, Perl）
  - または正確なケースを使用: `/World/`
- **演習作成時のルール**:
  1. テスト文字列のケースとパターンのケースを一致させる
  2. または `i` フラグ（case-insensitive）を明示的に使用する
- **確認方法**: コードを実行して expected_output と一致するか確認する

### 57. コメントとコードの内容を一致させる
- コード内のコメントは、**実際のコードの動作と一致**させること。
- **禁止パターン**:
  - コメント: `// test() で 'test@example.com' をテスト` → 実際のコード: `test('テスト@例.com')`
  - コメント: `# catをdogに置換` → 実際のコード: `text = "猫"`（置換対象が存在しない）
- **正しいパターン**:
  - コメント: `// test() で 'test@example.com' をテスト` → 実際のコード: `test('test@example.com')`
  - コメント: `# catをdogに置換` → 実際のコード: `text = "cat"`
- **チェック方法**:
  1. コメントに書かれている値・文字列がコードにも存在するか確認
  2. コードを実行して expected_output と一致するか確認
- **理由**: コメントとコードが矛盾すると、学習者は混乱し、コードの動作を誤解する

### 58. lineHintsは対象行のコード内容と一致させる
- `lineHints` の各要素は、対応する `correctLines` の行の内容と**一致した説明**にすること。
- **禁止パターン**:
  - 初期化行（`let x = 0;`）に対して「累算代入」「条件式を評価」の説明
  - 関数定義行（`fn main() {`）に対して「条件式を評価」の説明
  - forループ行（`for i = 1, 10 do`）に対して「if文」の説明
  - メソッド定義行（`void move() {`）に対して「メソッドを呼び出します」の説明
  - メソッド定義行（`void draw() {`）に対して「new でインスタンスを作成」の説明
  - 継承行（`class Cat extends Animal`）に対して「インスタンスを作成」の説明
  - 出力文行（`console.log('ニャー！')`）に対して「メソッドを呼び出します」の説明
- **正しいパターン**:
  - 初期化行: 「変数xを宣言し、0を設定します。」
  - 関数定義行: 「fn main()でメイン関数を定義します。」
  - 累算代入行（`x += 5;`）: 「変数xに5を加算します。」
  - if文行: 「条件式を評価し、真の場合にブロックを実行します。」
  - メソッド呼び出し行（`c.move();`）: 「moveメソッドを呼び出します。」
  - インスタンス作成行（`Car c = new Car();`）: 「Car型の変数cにnew Car()を代入します。」
  - 継承行: 「extendsでAnimalを継承します。」
- **チェックスクリプト**: `node scripts/check-linehints-content-v2.mjs`
- **検出パターン**:
  1. 「〜メソッドを呼び出します」が`.methodName(`または`:methodName(`のない行にある
  2. 「インスタンスを作成」が`new `/`Type{}`/`Type { ... }`のない行にある
  3. 「extendsで〜を継承」が`extends`のない行にある
  4. 「累算代入」が`+=`/`-=`/`*=`/`/=`のない行にある
  5. 「条件式を評価」が`if`のない行にある
- **言語固有のインスタンス作成構文**:
  - Java/C#/JavaScript: `new Type()`
  - Go: `Type{}` （構造体リテラル）
  - Rust: `Type { field: value }` （構造体リテラル）
- **言語固有のメソッド呼び出し構文**:
  - 一般: `.methodName()`
  - Lua: `:methodName()` （コロン記法）
- **理由**: ヒントがコードと合っていないと、学習者が混乱し、誤った理解を招く

### 59. JavaScriptでリテラルの`\n`にマッチする正規表現
- JavaScriptの正規表現で**リテラルのバックスラッシュ+n**（文字コード92, 110）にマッチさせる場合、`/\\n/g`は**使用禁止**。
- **禁止**: `/\\n/g` → これは改行文字（char code 10）にマッチする
- **正しい**: `/\\\\n/g` → これがリテラルのバックスラッシュ+nにマッチする
- **理由**: JavaScriptソースコード内での解釈:
  - `/\\n/g` → パターン `\n` → 改行文字にマッチ
  - `/\\\\n/g` → パターン `\\n` → バックスラッシュ+nにマッチ
- **代替方法**: `String.fromCharCode(92, 110)` で区切り文字を作成し、`split`/`join`を使う
  ```javascript
  const backslashN = String.fromCharCode(92, 110);
  const result = str.split(backslashN).join('\n');
  ```
- **対象箇所**:
  - チェックスクリプト（check-holey-v4.mjs等）
  - フロントエンドのエスケープ解除処理
- **確認方法**: パターンの`.source`プロパティで確認
  ```javascript
  console.log(/\\n/.source);   // → "\n" (改行)
  console.log(/\\\\n/.source); // → "\\n" (バックスラッシュ+n)
  ```

### 60. rebuild-correctlines-v2.mjsの使用禁止
- `scripts/rebuild-correctlines-v2.mjs` は**使用禁止**。このスクリプトにはバグがあり、correctLinesとlineHints配列を破損させる。
- **破損パターン**:
  - 配列の途中で `]を代入",` のような不正な閉じ括弧が発生
  - 同じ行が重複して挿入される
  - lineHintsの要素数がcorrectLinesと合わなくなる
- **correctLines不整合の正しい修正方法**:
  1. `node scripts/check-holey-v4.mjs` で `correctLines_content_mismatch` を検出
  2. 各ファイルを手動で開き、correctCodeの内容とcorrectLinesを比較
  3. correctLinesをcorrectCodeに合わせて個別に修正
  4. candidates/othersも同じ文字列で更新
  5. expected_outputも必要に応じて更新
  6. `npm run seed:db` で検証

### 61. TypeScriptインポート後の\nはリテラル文字列
- TypeScriptファイルを動的インポート（`import()`）した後も、文字列内の `\\n` は**リテラルのバックスラッシュ+n（2文字）のまま**である。
- **誤解しやすい点**: `\\n` が実際の改行文字に変換されると思いがちだが、変換されない
- **正しい分割方法**:
  ```javascript
  const backslashN = String.fromCharCode(92, 110);
  const lines = ex.holeyCode.split(backslashN);
  ```
- **誤った分割方法**:
  ```javascript
  const lines = ex.holeyCode.split('\n');  // 改行文字で分割 → 分割されない
  ```
- **対象スクリプト**: check-linehints-consistency.mjs, check-holey-v4.mjs, count-linehints-mismatch.mjs

### 62. 文字列内の\nによる分割ずれへの対処
- `correctCode`や`holeyCode`内の文字列リテラル（例: `printf("%s\n", msg)`）に`\n`が含まれる場合、`\n`で分割すると行数が増えてしまう。
- **症状**: holeyLinesの行数がcorrectLinesより多くなる
- **対処法**（check-linehints-consistency.mjs）:
  ```javascript
  if (holeyLines.length !== correctLines.length) {
    // 文字列内の\nが原因で行数が異なる場合はスキップ
    continue;
  }
  ```
- **根本的な解決策**: 現状では完全な解決策がないため、行数不一致の場合はチェックをスキップしている
- **影響を受けるファイル**: C言語のprintf、各種言語の文字列リテラル内の改行

### 63. トークン化で日本語を連続したトークンとして扱う
- `lib/syntax-highlight.ts` の `tokenize` 関数でトークン化の正規表現を修正する際は、**日本語（ひらがな、カタカナ、漢字）を連続したトークンとして認識**すること。
- **禁止**: `[^\s\w]` のみでマッチ → 日本語が1文字ずつ分割される
- **正しい**: `[ぁ-んァ-ヶー一-龯々〆]+` パターンを追加 → 日本語が連続したトークンになる
- **症状**: 日本語が1文字ずつ分割され、シンタックスハイライトの色がバラバラになる
  - 例: 「関数名」→「関」（黄色）「数」（白）「名」（白）
- **正しい表示**: 「関数名」が1つのトークンとして統一された色で表示される
- **対象ファイル**: `lib/syntax-highlight.ts` の `tokenize` 関数内の正規表現

### 64. チュートリアルのリセットポリシー
- 解説スライド（Tutorial Slides）は、ナビゲーションされた際に**常に1ページ目から開始**しなければならない。
- **禁止**: `localStorage` やその他の永続化メカニズムを使用して、最後に表示したスライドのインデックスを保存・復元すること。これは演習間で切り替えた際にユーザーを混乱させるUXの原因となる。

### 65. ツールの衛生管理 (Tool Hygiene)
- `scripts/` ディレクトリに、複数のバージョンのスクリプト（例: `v1`, `v2`, `v3`）を放置しないこと。
- 陳腐化・破損したスクリプトは、将来の誤用を防ぐために削除する。常に最新の検証済みバージョンのみを使用すること。

### 66. 堅牢なJSONパース (Robust JSON Parsing)
- レッスンデータ（TSファイル内のJSON風構造）をパースまたは修正するスクリプトを書く際、`\[([\s\S]*?)\]` のような**単純な正規表現を使用して配列の中身を抽出してはならない**。
- **理由**: 文字列内に `]` が含まれている場合（例: `pattern = "[a-z]"`）、正規表現が途中でマッチ終了してしまい、パースに失敗する。
- **対策**: ブラケットのネストをカウントするロジックや、`extractObject` 関数のような堅牢なパース技術を使用して、ネストされた構造や文字列リテラルを正しく処理すること。

### 67. 答えをそのまま教えないポリシー (Zero Giveaway Policy)
- **ボイラープレート（定型コード）であっても、虫食い（`___`）のない行を提供してはならない**。
- **目的**: ユーザーがプログラムの構造全体を理解し、自身の指でタイプすることを保証するため。
- **禁止**: `correctCode` をそのままコピーして、一部だけを隠す手抜き作成。
- **必須**: すべてのコード行（コメント・空行除く）に `___` を含めること。

### 68. 置換ツール失敗時のエスケープ戦略
- `replace` ツールがエスケープ文字（`\\n` や `\"`）の解釈違いで失敗し続ける場合は、深追いせず `write_file` でファイル全体を上書きすること。
- 時間の浪費を防ぎ、確実に意図した通りのコードを保存するため。

### 69. lineHints と虫食いの整合性エラーへの対処
- `check-holey-v5.ts` が「虫食いがない」と警告を出す行がコメント行である場合、その行に対応する `lineHints` の要素が `null` ではなく文字列（ヒント）になっていないか確認すること。
- コメント行や空行のヒントは必ず `null` に設定し、チェックスクリプトの誤検知を防ぐこと。

### 70. 文字列置換時のエスケープ考慮
- `correctLines` や `candidates` などの文字列を置換する際は、エスケープされたクォート（`\"`）が含まれる可能性を常に考慮すること。
- **推奨正規表現**: `"(?:[^"\\]|\\.)*"` を使用して、文字列リテラルを安全にキャプチャすること。単なる `".*?"` ではエスケープされたクォートでマッチが終了してしまう。

### 71. expected_output の改行形式
- `expected_output` 内にリテラルの改行（TSファイル上での実際の改行）を含めてはならない。必ず `\\n`（2つのバックスラッシュ + n）を使用すること。
- リテラル改行が混入すると、スクリプトでのパースや比較が困難になり、データ不整合の原因となる。

### 72. 特殊構文の虫食い徹底
- ポインタ演算（`*ptr = 99;`）やパターンマッチング（`1 => ...`）などの特殊な構文であっても、ボイラープレートとして穴のない行を提供してはならない。
- 必ず `*___ = ___;` や `___ => ...` のように、ユーザーがタイピングする必要がある箇所を設けること。

### 73. バックスラッシュのエスケープレベル
- スクリプトでバックスラッシュを扱う際は、ファイル上の表現、JSメモリ上の表現、正規表現エンジンでの表現の3レベルを意識すること。
- ファイル上の `\\`（2つ）はメモリ上で `\`（1つ）となり、それを正規表現でマッチさせるには JSリテラルで `\\\\`（4つ）必要になる。この計算を誤ると、意図しない置換や破損を招く。

### 74. correctCode/correctLinesに___を含めない
- `correctCode` と `correctLines` は正解のコードであり、穴埋め記号 `___` を含めてはならない。
- **禁止パターン**:
  - `correctCode: "case x do\\n  ___ -> \"one\""` → 正解コードに`___`が含まれている
  - `correctLines: ["  ___ -> \"one\""]` → 正解コードに`___`が含まれている
- **正しいパターン**:
  - `correctCode: "case x do\\n  1 -> \"one\""` → 具体的な値が入っている
  - `correctLines: ["  1 -> \"one\""]` → 具体的な値が入っている
- **よく発生する言語/構文**:
  - Elixir/Kotlin/C#: switch/case/when式の分岐パターン（`1 -> "one"`）
  - Haskell: ガード式（`| x > 0 = "positive"`）、Either型（`Left "error"`）
  - Elixir: アトム（`:ok`, `:error`）を使うパターンマッチ
- **チェックコマンド**: `grep -l '"correctCode".*___' data/lessons/*.ts`
- **理由**: correctCode/correctLinesはユーザーが入力すべき正解であり、`___`が含まれていると正解が不明確になる

### 75. candidates.othersはコードと同じ言語の文字列を使用する
- `candidates.others` 配列に含める文字列は、`correctCode`/`correctLines` で実際に使用されている文字列と**同じ言語（日本語/英語）**にすること。
- **禁止パターン**:
  - コード: `print('こんにちは')` → candidates.others: `["Hello", ...]` （英語が混在）
  - コード: `name = 'りんご'` → candidates.others: `["Apple", ...]` （英語が混在）
- **正しいパターン**:
  - コード: `print('こんにちは')` → candidates.others: `["こんにちは", ...]`
  - コード: `name = 'りんご'` → candidates.others: `["りんご", ...]`
- **例外（英語のまま維持）**:
  - クラス名・メソッド名として使用: `class Hello`、`HelloTrait`、`sayHello()`
  - プログラミングの決まり文句: `['hello', 'world']`（ルール#25参照）
  - コードで実際に英語を使用している場合（expected_outputも英語で一致）
- **チェック方法**:
  1. `grep -n '"others":.*"Hello"' data/lessons/*.ts` で英語文字列を検出
  2. 該当ファイルの `expected_output` を確認し、コードの出力言語と一致するか確認
- **理由**: candidatesはフロントエンドで使用されていないが（ルール#38参照）、将来使用される可能性があり、データの整合性を保つため

### 76. JavaScriptのtypeof演算子は英語文字列を返す
- JavaScriptの `typeof` 演算子は、以下の**英語文字列のみ**を返す。日本語化してはならない。
  - `'number'`、`'string'`、`'boolean'`、`'object'`、`'undefined'`、`'function'`、`'symbol'`、`'bigint'`
- **禁止パターン**:
  - `typeof x === '数値'` → `'数値'` はtypeofが返す値ではない
  - `typeof x === '文字列'` → `'文字列'` はtypeofが返す値ではない
- **正しいパターン**:
  - `typeof x === 'number'`
  - `typeof x === 'string'`
- **対象言語**: JavaScript, TypeScript
- **チェックコマンド**: `grep -n "typeof.*===.*'[ぁ-んァ-ン一-龥]" data/lessons/*.ts`
- **理由**: typeofの戻り値は言語仕様で定められており、日本語にするとコードが動作しない

### 77. TypeScriptのユーティリティ型はプロパティ名と一致させる
- `Pick<T, K>`、`Omit<T, K>`、`keyof` 等のユーティリティ型で指定するプロパティ名は、**実際のinterface/typeで定義されているプロパティ名**と一致させること。
- **禁止パターン**:
  - `interface Product { name: string; }` → `Pick<Product, '名前'>` （プロパティ名が不一致）
  - `interface User { secret: string; }` → `Omit<User, '秘密'>` （プロパティ名が不一致）
- **正しいパターン**:
  - `interface Product { name: string; }` → `Pick<Product, 'name'>`
  - `interface User { secret: string; }` → `Omit<User, 'secret'>`
- **チェックコマンド**: Pick/Omitの引数とinterfaceのプロパティ名が一致するか手動確認
- **理由**: プロパティ名が一致しないとTypeScriptのコンパイルエラーになる

### 78. 複数引数の関数呼び出しは全引数を虫食いにし、コメントで値の特徴を示唆する
- 関数呼び出しやコンストラクタで**複数の引数がある場合、全ての引数を虫食い（`___`）にする**こと（ルール#67との整合性）。
- コメントで**どの値がどの引数に入るか特徴で示唆**する（具体的な値は書かない。ルール#5との整合性）。
- **禁止パターン（一部だけ虫食い）**:
  - `Rectangle(___, 5)` → 5がそのまま残っている
  - `add(___, 20)` → 20がそのまま残っている
- **禁止パターン（コメントに具体的な値）**:
  - `# Rectangle(幅=4, 高さ=5)のインスタンスを作成` → 4と5が答え
  - `# add(a=10, b=20)を呼び出し` → 10と20が答え
- **禁止パターン（コメントが曖昧 - どの値がどこに入るかわからない）**:
  - `# Rectangleを作成（第1引数=幅, 第2引数=高さ）` → 4と5のどちらが幅か不明
  - `# add関数を呼び出し（第1引数, 第2引数）` → 10と20のどちらが第1引数か不明
- **正しいパターン（値の特徴で示唆）**:
  - 数値の大小: `# Rectangleを作成（幅に小さい方, 高さに大きい方）` → 4が幅、5が高さ
  - 数値の大小: `# add関数を呼び出し（第1引数に小さい方, 第2引数に大きい方）` → 10が第1、20が第2
  - 型の違い: `# Studentを作成（名前に文字列, 学年に数値）` → '太郎'が名前、3が学年
  - 文字列の長さ: `# Bookを作成（タイトルに長い文字列, 著者に短い文字列）`
- **チェック方法**: `grep -n "holeyCode" data/lessons/*.ts | grep -oE '[a-zA-Z_]+\([^)]*___, [0-9]+\)|[a-zA-Z_]+\([0-9]+, ___\)'` で一部だけ虫食いのパターンを検出
- **修正時の注意**: holeyCodeを修正したら、candidatesにも新たに虫食いにした値を追加すること
- **理由**: 一部だけ虫食いだと、ユーザーが「その値は入力不要」と誤解する。全引数を虫食いにしてコメントで値の特徴を示唆することで、答えを教えずに順番を一意に特定できる

### 79. コード行の全要素を虫食いにする
- holeyCodeの各コード行において、**全てのコード要素**（キーワード、関数名、変数名、リテラル等）を `___` にすること。
- **禁止パターン（一部だけ虫食い）**:
  - `go say("___")` → `go` と `say` が虫食いなし
  - `time.Sleep(___ * time.Millisecond)` → `time.Sleep` と `Millisecond` が虫食いなし
  - `fmt.Println(___)` → `fmt.Println` が虫食いなし
- **正しいパターン（全要素が虫食い）**:
  - `___ ___("___")` → 全て虫食い
  - `___.___(___ * ___.___)` → 全て虫食い
  - `___.___(___)`  → 全て虫食い
- **例外**:
  - コメント行（`#`, `//`, `--` 等で始まる行）
  - 空行
  - 構造的な括弧のみの行（`{`, `}`, `(`, `)` 等）は虫食い不要だが、キーワードと組み合わせる場合は虫食い（例: `___ {` ではなく `___:` や `___ ___() ___`）
- **理由**: 一部だけ虫食いだと、ユーザーは虫食いでない部分を「入力不要」と誤解し、実際にコードを書くときに何を書けばよいかわからなくなる

### 80. 関数定義と関数コールの配色を区別する
- `lib/syntax-highlight.ts` において、**関数定義**と**関数コール**の配色を区別すること。
- **関数定義**（`def foo`, `function foo`, `fn foo` 等）: `functionDef` 色（黄色）
- **関数コール**（`foo()`, `bar(x)` 等）: `variable` 色（前景色/白）= 変数と同じ
- **禁止**: 関数コールに `functionDef` 色を適用すること
- **理由**: 関数コールは変数参照と同様の「使用」であり、定義とは異なる。定義は黄色で目立たせ、使用箇所は通常の前景色にすることで視認性が向上する

### 81. tutorialSlidesは演習で使う概念を事前に解説する
- `tutorialSlides` には、**その演習で使用する主要な概念**を解説するスライドを含めること。
- **禁止パターン**:
  - 演習タイトル「リスト内包表記」があるのに、tutorialSlidesにリスト内包表記の解説がない
  - 演習で「ジェネレータ」を使うのに、tutorialSlidesにジェネレータの解説がない
  - 演習で「デコレータ」を使うのに、tutorialSlidesにデコレータの解説がない
- **確認方法**: 演習タイトルに含まれるキーワードが、tutorialSlidesのいずれかのtitleまたはcontentに含まれているか確認
- **理由**: 解説なしに演習をさせると、学習者は何をすべきかわからず、ただ答えを当てずっぽうで入力することになる。事前に概念を解説することで、理解に基づいた学習ができる

### 82. レッスンファイル大規模書き換え時のtutorialSlides保持
- レッスンファイル（`data/lessons/*.ts`）を大規模に書き換える際は、**tutorialSlidesフィールドを必ず保持**すること。
- **根本原因（2026年1月発生）**: コミット34533deで「全言語教材の系統的破損修復」を行った際、ファイル全体を書き換えてtutorialSlidesが脱落し、66/76ファイルでtutorialSlidesが消失した。
- **必須チェック**:
  1. 書き換え前: `grep -c "tutorialSlides" data/lessons/<file>.ts` でtutorialSlidesの存在を確認
  2. 書き換え後: 同じコマンドで数が減っていないことを確認
  3. `node scripts/check-lesson-file.mjs` → tutorialSlides消失は**エラー**として検出される（警告ではない）
- **スクリプトでファイル全体を書き換える場合**:
  - 元のtutorialSlidesを抽出して保持してから書き換える
  - または、tutorialSlides部分は変更対象から除外する
- **手動で修正する場合**:
  - tutorialSlidesセクションは編集対象外として明示的に避ける
  - 修正後に`grep "tutorialSlides"`で存在確認
- **tutorialSlidesが消失した場合の復元方法**:
  1. `git log --oneline data/lessons/<file>.ts` でtutorialSlidesが存在したコミットを特定
  2. `git show <commit>:data/lessons/<file>.ts` で内容を確認
  3. tutorialSlides部分のみ抽出して現在のファイルに追加（ファイル全体をcheckoutしない）
- **チェックスクリプト**: `node scripts/check-lesson-file.mjs`（tutorialSlides消失は**エラー**レベルで検出）
- **理由**: tutorialSlidesは学習者にとって重要な解説コンテンツであり、消失すると学習体験が大幅に低下する

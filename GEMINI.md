# Gemini CLI Helper

## Ironclad Rules (掟)

1.  **Mandatory Recurrence Prevention:** From now on, whenever a fix error or implementation mistake occurs, the specific **Recurrence Prevention Measures (再発防止策)** must be updated or appended to this document (`GEMINI.md`). This is a non-negotiable rule to ensure continuous improvement and project stability.

## Image Generation

You can use the `imagefx` command to generate images using Google's ImageFX.

### Usage

```bash
imagefx --cookie "<COOKIE_VALUE>" --prompt "<PROMPT>" --count <NUMBER> --dir "<OUTPUT_DIRECTORY>" --ratio <ASPECT_RATIO>
```

### Parameters

- `--cookie`: The session cookie for ImageFX authentication.
- `--prompt`: The text description of the image you want to generate.
- `--count`: The number of images to generate (default: 1).
- `--dir`: The directory where the generated images will be saved.
- `--ratio`: The aspect ratio of the image. Common values: `IMAGE_ASPECT_RATIO_SQUARE`.

### Example

```bash
imagefx --cookie "your_cookie_here" \
  --prompt "A cute robot learning to code, 3D style" \
  --count 1 \
  --dir "public/illustrations" \
  --ratio IMAGE_ASPECT_RATIO_SQUARE
```

## Exercise Code Guidelines

When creating or modifying exercise content in `data/lessons/*.ts`, strictly follow these rules:

1.  **All Exercise Code Must Be "Holey":** Every single line of code in the `holeyCode` field (including boilerplate like `#include`, `int main() {`, `return 0;`, etc.) **must** contain at least one hole represented by `___` (three underscores).
2.  **Specific Comments Above Every Code Line:** Every line containing code (and thus a hole) **must** be immediately preceded by a comment line.
    -   This comment must provide specific, unique instructions on what the user should type into the hole.
    -   The instruction should be clear enough that there is only one correct answer.
3.  **Synchronization of Fields:** When modifying `holeyCode`, you **must** update `correctCode` and `correctLines` to include exactly the same comments and filled-in holes. Failure to do this will break the validation logic.

### Example

**Bad (Boilerplate not holey):**
```c
#include <stdio.h>
int main() {
    // Hello, World! と入力
    printf("___
");
    return 0;
}
```

**Good (100% Holey with comments):**
```c
// stdio.h をインクルード
#include <___>
// main 関数を定義
int ___() {
    // Hello, World! と入力
    printf("___\\n");
    // 0 を返して終了
    return ___
// main 関数の終わり
}
```

## Recurrence Prevention Measures (再発防止策)



To prevent the recurrence of incomplete or non-functional exercises, the following steps must be taken before any commit:



1.  **Strict Audit:** Use an audit script (e.g., `scripts/audit-lessons.ts`) to verify that:

    -   Every non-empty, non-comment line in `holeyCode` has `___`.

    -   Every line with `___` is preceded by a comment line.

    -   **All images referenced in `tutorialSlides` exist in the `public` directory.**

2.  **Field Synchronization Verification:** Double-check that `correctCode` and `correctLines` are identical in structure (including all comments and newlines) to `holeyCode`, with the `___` replaced by the correct values.

3.  **Database Seeding:** Always run `npm run seed:db` after making changes to lesson data and verify that it completes without errors.

4.  **Zero Giveaway Policy:** No "boilerplate" or "obvious" lines should ever be provided without holes. The goal is to ensure the user understands and types every part of the program structure.

5.  **Tutorial Reset Policy:** Explanation slides (tutorials) must **always** start from the first page when navigated to. Never use `localStorage` or other persistence mechanisms to restore the last viewed slide index, as this creates a confusing UX when switching between exercises.

6.  **Abstract Hints:** Comments and hints should explain the "what" and "why" (concept/purpose), not the "how" (specific syntax/answer), unless absolutely necessary. Avoid instructions like "Type X" or hints that contain the exact code to be typed.

7.  **Database Seeding:** After any modification to lesson files (`data/lessons/*.ts`), you must run `npm run seed:db` to apply the changes to the database.

8.  **Regex Safety:** When using regular expressions in code (especially in `replace` tools or script logic), ensure special characters like `]`, `-`, and `\` are correctly escaped within character classes `[]`. Always verify the code's syntactical correctness after modification.

9.  **Language-Aware Normalization:** Code normalization must respect the specific syntax and conventions of each programming language. For example, in C-style languages, distinguish between "keywords" (where spaces after them may be optional) and "identifiers/functions" (where spacing rules may be strict). Do not apply generic, language-agnostic space-stripping logic that could break these rules.

10. **Image Asset Integrity:** Before any commit involving lesson data changes, run `npm run audit:lessons` to ensure all referenced illustrations exist. If an image is missing, do not use a non-existent path; instead, generate the asset or use a valid fallback illustration.

11. **Image Diversity Policy (滥用防止):** No single illustration should be used more than 40-50 times across the entire lesson set. Use content-specific keywords to map unique images to each concept. Avoid generic placeholders like `gear.png` or `blueprint.png` for multiple distinct topics.

12. **Syntax-Safe Modification Policy:** When performing mass replacements in `.ts` lesson files, never use naive string splitting or global regex that can break object boundaries (e.g., deleting braces). Always target specific fields (like `"image": ...`) and verify the result with a syntax parser or database seeding test before committing.


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
  1. `node scripts/fix-holey-v2.mjs` - 虫食い化
  2. `node scripts/add-hint-comments.mjs` - コメント追加
- index.tsのケーシング修正（Java3→java3, C2→c2など）も再適用が必要

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

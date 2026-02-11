// correctLinesの「// メソッドを定義」を具体的なメソッド名に修正するスクリプト（安全版）
// 文字列の単純置換のみを行い、構造を壊さない
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;

// 置換パターンのリスト [検索文字列, 置換文字列] (LF使用、実行時にCRLFに変換)
const patterns = [
  // Java: public static void main
  ['"    // メソッドを定義",\n          "    public static void main(String[] args) {"',
   '"    // mainメソッドを定義",\n          "    public static void main(String[] args) {"'],

  // Java: public static void main (without brace on same line)
  ['"    // メソッドを定義",\n          "    public static void main(String[] args)"',
   '"    // mainメソッドを定義",\n          "    public static void main(String[] args)"'],

  // Java: main with throws IOException
  ['"    // メソッドを定義",\n          "    public static void main(String[] args) throws IOException {"',
   '"    // mainメソッドを定義",\n          "    public static void main(String[] args) throws IOException {"'],

  // Java: main with throws Exception
  ['"    // メソッドを定義",\n          "    public static void main(String[] args) throws Exception {"',
   '"    // mainメソッドを定義",\n          "    public static void main(String[] args) throws Exception {"'],

  // C#: static void Main (without args)
  ['"    // メソッドを定義",\n          "    static void Main() {"',
   '"    // Mainメソッドを定義",\n          "    static void Main() {"'],

  // C#: static void Main (with args)
  ['"    // メソッドを定義",\n          "    static void Main(string[] args)"',
   '"    // Mainメソッドを定義",\n          "    static void Main(string[] args)"'],

  // Java: sayHello method
  ['"    // メソッドを定義",\n          "    public void sayHello() {"',
   '"    // sayHelloメソッドを定義",\n          "    public void sayHello() {"'],

  // Java: Item constructor
  ['"    // メソッドを定義",\n          "    public Item(int p) {"',
   '"    // Itemコンストラクタを定義",\n          "    public Item(int p) {"'],

  // Java: compareTo method
  ['"    // メソッドを定義",\n          "    public int compareTo(Score other) {"',
   '"    // compareToメソッドを定義",\n          "    public int compareTo(Score other) {"'],
];

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let fileChanged = false;

  // ファイルがCRLFかLFか検出
  const hasCRLF = content.includes('\r\n');

  for (let [pattern, replacement] of patterns) {
    // ファイルがCRLFの場合、パターンもCRLFに変換
    if (hasCRLF) {
      pattern = pattern.replace(/\n/g, '\r\n');
      replacement = replacement.replace(/\n/g, '\r\n');
    }

    if (content.includes(pattern)) {
      const before = content;
      content = content.split(pattern).join(replacement);
      if (content !== before) {
        // 置換された回数をカウント（パターンが何回出現したか）
        let count = 0;
        let pos = 0;
        while ((pos = before.indexOf(pattern, pos)) !== -1) {
          count++;
          pos += pattern.length;
        }
        totalFixed += count;
        fileChanged = true;
      }
    }
  }

  if (fileChanged) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed: ${file}`);
  }
}

console.log(`\n合計 ${totalFixed} 件の「// メソッドを定義」を修正しました。`);

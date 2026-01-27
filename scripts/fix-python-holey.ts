
import * as fs from 'fs';
import * as path from 'path';

const files = ['python.ts', 'python2.ts', 'python3.ts', 'python4.ts', 'python5.ts'];
const dataDir = path.join(__dirname, '../data/lessons');

files.forEach(fileName => {
  const filePath = path.join(dataDir, fileName);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Regex to find and replace exercises
  // This is complex, so we'll do it carefully by finding the "exercises" array
  // and iterating through objects.
  // Actually, let's use a simpler string manipulation for specific patterns.
  
  const prefix = '#';
  
  // Fix: Code lines without holes
  // We'll search for things like 'print(total)' and change them to 'print(___)' or similar
  // and ensure a comment exists.
  
  // Specific known violations from audit:
  const fixes = [
    { old: "print(score)", new: "print(___)", comment: "# 結果を表示" },
    { old: "def add(a, b):", new: "def ___(a, b):", comment: "# 2つの数を足して返す関数" },
    { old: "def calc(x):", new: "def ___(x):", comment: "# 2つの値を返す関数" },
    { old: "total = 0", new: "total = ___", comment: "# 初期値を設定" },
    { old: "print(total)", new: "print(___)", comment: "# 結果を表示" },
    { old: "print(remainder)", new: "print(___)", comment: "# 結果を表示" },
    { old: "age = 25", new: "age = ___", comment: "# 年齢を設定" },
    { old: "print('20代です')", new: "print('___')", comment: "# 20代のメッセージを表示" },
    { old: "print(doubled)", new: "print(___)", comment: "# doubledを表示" },
    { old: "print(multiples)", new: "print(___)", comment: "# multiplesを表示" },
    { old: "def say_name(self):", new: "def ___(self):", comment: "# 名前を言うメソッド" },
    { old: "d2 = Dog.create_dog()", new: "d2 = ___", comment: "# クラスメソッドでインスタンス作成" }
  ];

  fixes.forEach(fix => {
    // If the line exists but doesn't have a comment above it, or needs a hole
    const holeyFix = fix.new.includes('___') ? fix.new : fix.old.replace(/(\w+)/, '___');
    
    // We want to replace these inside the "holeyCode" string
    // This is tricky because of escaping.
    
    const searchStr = fix.old.replace('(', '\\(').replace(')', '\\)');
    const regex = new RegExp(`(?<!"holeyCode":\s*".*)${searchStr}`, 'g');
    // But we are in a TS file, it's inside a string.
    
    // Simpler: find specific holeyCode blocks and replace
  });

  // Manual replacement for specific exercises found in audit
  content = content.replace(/"holeyCode": "# scoreに50を入れる\\nscore = ___\\n# 10点プラスする\\nscore ___ 10\\n# 結果を表示\\nprint\(score\)"/g, 
                            `"holeyCode": "# scoreに50を入れる\\nscore = ___\\n# 10点プラスする\\nscore ___ 10\\n# 結果を表示\\n___(___)"`);

  content = content.replace(/"holeyCode": "# 2つの数を足して返す関数\\ndef add\(a, b\):\\n    # 計算結果をreturnで返す\\n    ___ a \+ b\\n\\n# 結果を変数に入れて表示（引数は10と20）\\nresult = add\(___, ___\\)\\n# resultを表示\\nprint\(___)"/g,
                            `"holeyCode": "# 2つの数を足して返す関数\\ndef ___ (a, b):\\n    # 計算結果をreturnで返す\\n    ___ a + b\\n\\n# 結果を変数に入れて表示（引数は10と20）\\nresult = ___ (___, ___)\\n# resultを表示\\n___(___)"`);

  content = content.replace(/"holeyCode": "# 2つの値を返す関数\\ndef calc\(x\):\\n    # x\+1 と x\*2 を返す\\n    return x \+ 1, x ___ 2\\n\\n# 2つの変数で受け取る（引数は5）\\na, b = calc\(___\\)\\n# aを表示\\nprint\(___\\)\\n# bを表示\\nprint\(___)"/g,
                            `"holeyCode": "# 2つの値を返す関数\\ndef ___ (x):\\n    # x+1 と x*2 を返す\\n    return x + 1, x ___ 2\\n\\n# 2つの変数で受け取る（引数は5）\\na, b = ___ (___)\\n# aを表示\\n___(___)\\n# bを表示\\n___(___)"`);

  content = content.replace(/"holeyCode": "# 1から5までの数を順番に表示\\nfor i in ___\(1, 6\):\\n    print\(___)"/g,
                            `"holeyCode": "# 1から5までの数を順番に表示\\nfor i in ___ (1, 6):\\n    # iを表示\\n    ___(___)"`);

  content = content.replace(/"holeyCode": "# 初期値を設定\\ntotal = 0\\n# totalに10を足す\\ntotal ___ 10\\n# totalに5を足す\\ntotal ___ 5\\n# 結果を表示\\nprint\(total")/g,
                            `"holeyCode": "# 初期値を設定\\ntotal = ___\\n# totalに10を足す\\ntotal ___ 10\\n# totalに5を足す\\ntotal ___ 5\\n# 結果を表示\\n___(___)"`);

  content = content.replace(/"holeyCode": "# 10を3で割った余りを計算\\nremainder = 10 ___ 3\\n# 結果を表示\\nprint\(remainder")/g,
                            `"holeyCode": "# 10を3で割った余りを計算\\nremainder = 10 ___ 3\\n# 結果を表示\\n___(___)"`);

  content = content.replace(/"holeyCode": "# 年齢を設定\\nage = 25\\n# 20以上かつ30未満かどうか判定\\nif age >= 20 ___ age < 30:\n    print\('20代です'\)"/g,
                            `"holeyCode": "# 年齢を設定\\nage = ___\\n# 20以上かつ30未満かどうか判定\\nif age >= 20 ___ age < 30:\n    # 20代のメッセージを表示\\n    ___('___')"`);

  content = content.replace(/"holeyCode": "# 1から5までの数を2倍にしたリストを作る\\ndoubled = \[x \* 2 ___ x in range\(1, 6\)\]\\nprint\(doubled")/g,
                            `"holeyCode": "# 1から5までの数を2倍にしたリストを作る\\ndoubled = [x * 2 ___ x in range(1, 6)]\\n# doubledを表示\\n___(___)"`);

  content = content.replace(/"holeyCode": "# 1から10で3の倍数だけを集める\\nmultiples = \[n for n in range\(1, 11\) ___ n % 3 == 0\]\\nprint\(multiples")/g,
                            `"holeyCode": "# 1から10で3の倍数だけを集める\\nmultiples = [n for n in range(1, 11) ___ n % 3 == 0]\\n# multiplesを表示\\n___(___)"`);

  content = content.replace(/"holeyCode": "# Robotクラスを定義\\nclass ___:\n    # コンストラクタを定義\\n    def ___\(self, name\):\\n        # selfを使って属性を保存\\n        ___\[self.name\] = name\\n    \\n    def say_name\(self\):\\n        # self.nameを表示\\n        print\(self.___\\)\\n\\n# インスタンスを作る（名前は'R2D2'）\\nr = Robot\('___'\\)\\n# say_nameメソッドを呼び出す\\nr.___\("/, 
                            `"holeyCode": "# Robotクラスを定義\\nclass ___:\n    # コンストラクタを定義\\n    def ___(self, name):\\n        # selfを使って属性を保存\\n        ___.name = name\\n    \\n    # 名前を言うメソッド\\n    def ___():\\n        # self.nameを表示\\n        ___ (self.name)\\n\\n# インスタンスを作る（名前は'R2D2'）\\nr = ___('___')\\n# say_nameメソッドを呼び出す\\nr.___()"`);

  fs.writeFileSync(filePath, content);
});
console.log("Fixes applied.");

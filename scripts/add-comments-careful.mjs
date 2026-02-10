import fs from 'fs';
import path from 'path';

const backslashN = String.fromCharCode(92, 110);
const dir = 'data/lessons';

function isComment(line) {
  const t = line.trim();
  return t.startsWith('//') || t.startsWith('#') || t.startsWith('--') || t.startsWith(';') || t.startsWith('/*') || t.startsWith('*') || t.startsWith('{-') || t.startsWith('-}');
}

function getCommentPrefix(file) {
  if (file.includes('python') || file.includes('ruby') || file.includes('perl') || file.includes('elixir')) return '# ';
  if (file.includes('sql') || file.includes('haskell') || file.includes('lua')) return '-- ';
  if (file.includes('assembly')) return '; ';
  return '// ';
}

function generateComment(correctLine, hint, prefix) {
  if (hint && typeof hint === 'string') {
    return prefix + hint;
  }

  const trimmed = (correctLine || '').trim();

  // Skip empty lines
  if (trimmed === '') return null;

  // Closing braces
  if (trimmed === '}' || trimmed === '};' || trimmed === '},' || trimmed === '},') return `${prefix}ブロックを閉じる`;
  if (trimmed === ')' || trimmed === ');') return `${prefix}関数呼び出しを閉じる`;
  if (trimmed === 'end' || trimmed === 'end)' || trimmed === 'end,') return `${prefix}ブロックを終了`;

  // PHP tags
  if (trimmed === '<?php') return `${prefix}PHPコード開始タグ`;
  if (trimmed === '?>') return `${prefix}PHPコード終了タグ`;

  // Assembly
  if (trimmed.startsWith('global ')) return `${prefix}グローバルシンボルを宣言`;
  if (trimmed.match(/^\w+:$/)) return `${prefix}ラベルを定義`;
  if (trimmed.startsWith('section ')) return `${prefix}セクションを定義`;

  // Quoted imports (Go)
  if (trimmed.match(/^\\*"[^"]+\\*"$/)) return `${prefix}パッケージをインポート`;
  if ((trimmed.includes('fmt') || trimmed.includes('sync') || trimmed.includes('time')) && trimmed.includes('"')) return `${prefix}パッケージをインポート`;

  // Slice expressions
  if (trimmed.match(/^&\w+\[/)) return `${prefix}スライスを取得`;

  // Getter methods
  if (trimmed.match(/public \w+ get\w*\(\)/)) return `${prefix}ゲッターを定義`;

  // Increment/decrement
  if (trimmed.match(/^\w+\+\+$/) || trimmed.match(/^\w+--$/)) return `${prefix}変数を更新`;

  // Go short variable declaration
  if (trimmed.includes(' := ')) return `${prefix}変数を宣言`;

  // PHP array access
  if (trimmed.match(/^\$\w+\[/)) return `${prefix}配列にアクセス`;

  // Opening braces
  if (trimmed.endsWith('{')) {
    if (trimmed.startsWith('fn ')) return `${prefix}関数を定義`;
    if (trimmed.startsWith('impl ')) return `${prefix}実装ブロックを開始`;
    if (trimmed.startsWith('struct ')) return `${prefix}構造体を定義`;
    if (trimmed.startsWith('trait ')) return `${prefix}トレイトを定義`;
    if (trimmed.startsWith('if ') || trimmed.startsWith('if(')) return `${prefix}条件分岐`;
    if (trimmed.startsWith('else ') || trimmed === 'else {' || trimmed === '} else {') return `${prefix}else分岐`;
    if (trimmed.startsWith('for ') || trimmed.startsWith('for(')) return `${prefix}forループ`;
    if (trimmed.startsWith('while ') || trimmed.startsWith('while(')) return `${prefix}whileループ`;
    if (trimmed.startsWith('match ')) return `${prefix}パターンマッチ`;
    if (trimmed.startsWith('func ')) return `${prefix}関数を定義`;
    if (trimmed.startsWith('class ')) return `${prefix}クラスを定義`;
    if (trimmed.startsWith('interface ')) return `${prefix}インターフェースを定義`;
    if (trimmed.startsWith('public ') || trimmed.startsWith('private ') || trimmed.startsWith('protected ') || trimmed.startsWith('static ')) {
      if (trimmed.includes(' class ')) return `${prefix}クラスを定義`;
      return `${prefix}メソッドを定義`;
    }
    if (trimmed.startsWith('switch ') || trimmed.startsWith('switch(')) return `${prefix}switch文`;
    if (trimmed.startsWith('case ')) return `${prefix}caseブロック`;
    if (trimmed.startsWith('default:') || trimmed === 'default {') return `${prefix}defaultブロック`;
    if (trimmed.startsWith('go ') || trimmed.startsWith('defer ')) return `${prefix}ゴルーチン/defer`;
    return `${prefix}ブロックを開始`;
  }

  // Return statements
  if (trimmed.startsWith('return ') || trimmed === 'return;' || trimmed === 'return') return `${prefix}値を返す`;

  // Variable declarations
  if (trimmed.startsWith('let ') || trimmed.startsWith('var ') || trimmed.startsWith('const ')) return `${prefix}変数を宣言`;
  if (trimmed.startsWith('int ') || trimmed.startsWith('float ') || trimmed.startsWith('double ') || trimmed.startsWith('char ') || trimmed.startsWith('string ')) return `${prefix}変数を宣言`;

  // Print statements
  if (trimmed.includes('print') || trimmed.includes('println') || trimmed.includes('printf') || trimmed.includes('fmt.Print') || trimmed.includes('Console.Write') || trimmed.includes('echo ')) return `${prefix}出力`;

  // Import/include/use
  if (trimmed.startsWith('#include') || trimmed.startsWith('import ') || trimmed.startsWith('use ') || trimmed.startsWith('using ')) return `${prefix}ライブラリを読み込む`;
  if (trimmed === 'import (' || trimmed === 'import(') return `${prefix}インポートブロック`;

  // Package/module/namespace
  if (trimmed.startsWith('package ') || trimmed.startsWith('mod ') || trimmed.startsWith('namespace ')) return `${prefix}モジュールを宣言`;

  // Method calls
  if (trimmed.match(/^\w+\.\w+\(/)) return `${prefix}メソッドを呼び出す`;

  // Assignments
  if (trimmed.includes(' = ') && !trimmed.includes('==')) return `${prefix}値を代入`;

  // Arrow patterns
  if (trimmed.includes('=>') || trimmed.includes('->')) return `${prefix}パターンマッチの分岐`;

  // Generic statements
  if (trimmed.endsWith(';')) return `${prefix}文を実行`;

  // Lock/Unlock, WaitGroup
  if (trimmed.includes('.Lock()') || trimmed.includes('.Unlock()')) return `${prefix}排他制御`;
  if (trimmed.includes('.Add(') || trimmed.includes('.Done()') || trimmed.includes('.Wait()')) return `${prefix}WaitGroup操作`;

  return null;
}

let totalFixed = 0;

fs.readdirSync(dir).filter(f => f.endsWith('.ts')).forEach(file => {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const prefix = getCommentPrefix(file);

  // Extract exercises array
  const exercisesMatch = content.match(/"exercises":\s*\[/);
  if (!exercisesMatch) return;

  // For each exercise, we need to update holeyCode, correctLines, and lineHints
  // This is complex, so let's process each exercise separately

  // Find all exercises by looking for holeyCode patterns
  const holeyCodeRegex = /"holeyCode":\s*"/g;
  let match;
  let newContent = content;
  let offset = 0;

  while ((match = holeyCodeRegex.exec(content)) !== null) {
    // Skip if there's been significant content change
    if (offset > 1000) break;

    // For now, just report what we find
    // A more sophisticated approach would be needed for actual fixes
  }
});

console.log('Script analysis complete. For actual fixes, manual editing or more sophisticated scripts are needed.');

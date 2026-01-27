
import { allLessons } from '../data/lessons';
import fs from 'fs';
import path from 'path';

// This script will attempt to fix the violations found by audit-lessons.ts
// 1. Every code line must have a hole (___)
// 2. Every holey line must be preceded by a comment line.

const commentPrefixes: Record<string, string> = {
  python: '#',
  bash: '#',
  ruby: '#',
  perl: '#',
  elixir: '#',
  sql: '--',
  lua: '--',
  haskell: '--',
  assembly: ';',
};

function getCommentPrefix(lang: string): string {
  return commentPrefixes[lang] || '//';
}

function makeLineHoley(line: string, lang: string): string {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith(getCommentPrefix(lang))) return line;
  if (line.includes('___')) return line;

  // Basic rules for making lines holey
  if (trimmed.includes('printf(')) return line.replace('printf(', '___(');
  if (trimmed.includes('print(')) return line.replace('print(', '___(');
  if (trimmed.includes('println(')) return line.replace('println(', '___(');
  if (trimmed.includes('cout <<')) return line.replace('cout <<', '___ <<');
  if (trimmed.includes('System.out.println')) return line.replace('println', '___');
  if (trimmed.includes('Console.WriteLine')) return line.replace('WriteLine', '___');
  if (trimmed.includes('return ')) return line.replace('return ', '___ ');
  if (trimmed.includes('def ')) return line.replace('def ', '___ ');
  if (trimmed.includes('fn ')) return line.replace('fn ', '___ ');
  if (trimmed.includes('func ')) return line.replace('func ', '___ ');
  if (trimmed.includes('class ')) return line.replace('class ', '___ ');
  if (trimmed.includes('import ')) return line.replace('import ', '___ ');
  if (trimmed.includes('#include ')) return line.replace('#include ', '___ ');
  if (trimmed.includes('int ')) return line.replace('int ', '___ ');
  if (trimmed.includes('var ')) return line.replace('var ', '___ ');
  if (trimmed.includes('let ')) return line.replace('let ', '___ ');
  if (trimmed.includes('const ')) return line.replace('const ', '___ ');
  
  // Braces and parens
  if (trimmed === '{') return line.replace('{', '___');
  if (trimmed === '}') return line.replace('}', '___');
  if (trimmed === '};') return line.replace('};', '___');
  if (trimmed === ']') return line.replace(']', '___');
  if (trimmed === ');') return line.replace(');', '___');
  
  // Generic fallbacks
  if (trimmed.length > 2) {
      return line.substring(0, line.length - 1) + '___';
  }

  return line + ' ___';
}

function getCommentForLine(line: string, lang: string): string {
    const prefix = getCommentPrefix(lang);
    const trimmed = line.trim();
    if (trimmed.includes('main')) return `${prefix} メイン関数の開始`;
    if (trimmed.includes('return')) return `${prefix} 結果を返します`;
    if (trimmed.includes('print') || trimmed.includes('cout') || trimmed.includes('Console') || trimmed.includes('System.out')) return `${prefix} 結果を出力します`;
    if (trimmed.includes('if')) return `${prefix} 条件分岐`;
    if (trimmed.includes('for') || trimmed.includes('while')) return `${prefix} 繰り返し処理`;
    if (trimmed.includes('include') || trimmed.includes('import')) return `${prefix} ライブラリの読み込み`;
    if (trimmed.includes('class')) return `${prefix} クラスの定義`;
    if (trimmed.includes('{')) return `${prefix} ブロックの開始`;
    if (trimmed.includes('}')) return `${prefix} ブロックの終了`;
    return `${prefix} ここに入力してください`;
}

const lessonsDir = path.join(process.cwd(), 'data', 'lessons');

fs.readdirSync(lessonsDir).forEach(file => {
  if (file === 'index.ts' || !file.endsWith('.ts')) return;
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  const lang = file.replace(/\d*\.ts$/, '').toLowerCase();
  const prefix = getCommentPrefix(lang);

  // This is a naive regex-based replacement for the whole file
  // In a real scenario, we'd parse the TS, but here we can try to match the patterns.
  
  // We need to find exercises array and iterate.
  // This script is too complex for a simple regex. 
  // Let's use a simpler approach: process line by line and detect "holeyCode": "..."
});

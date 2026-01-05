export interface Language {
  id: string;
  name: string;
  judge0Id: number;
  extension: string;
  icon: string;
  description: string;
}

export const LANGUAGES: Language[] = [
  {
    id: 'python',
    name: 'Python',
    judge0Id: 71,
    extension: '.py',
    icon: '/icons/python.svg',
    description: '初心者向けスクリプト言語',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    judge0Id: 63,
    extension: '.js',
    icon: '/icons/javascript.svg',
    description: 'Web開発の基本言語',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    judge0Id: 74,
    extension: '.ts',
    icon: '/icons/typescript.svg',
    description: '型安全なモダンJavaScript',
  },
  {
    id: 'java',
    name: 'Java',
    judge0Id: 62,
    extension: '.java',
    icon: '/icons/java.svg',
    description: '企業システムで広く使われる言語',
  },
  {
    id: 'c',
    name: 'C',
    judge0Id: 48,
    extension: '.c',
    icon: '/icons/c.svg',
    description: 'すべての言語の基礎となるシステム言語',
  },
  {
    id: 'cpp',
    name: 'C++',
    judge0Id: 52,
    extension: '.cpp',
    icon: '/icons/cpp.svg',
    description: '高性能なシステム開発言語',
  },
  {
    id: 'csharp',
    name: 'C#',
    judge0Id: 51,
    extension: '.cs',
    icon: '/icons/csharp.svg',
    description: '.NET フレームワークの主要言語',
  },
  {
    id: 'go',
    name: 'Go',
    judge0Id: 60,
    extension: '.go',
    icon: '/icons/go.svg',
    description: 'Googleが開発したモダン言語',
  },
  {
    id: 'rust',
    name: 'Rust',
    judge0Id: 73,
    extension: '.rs',
    icon: '/icons/rust.svg',
    description: '安全で高速なシステムプログラミング言語',
  },
  {
    id: 'ruby',
    name: 'Ruby',
    judge0Id: 72,
    extension: '.rb',
    icon: '/icons/ruby.svg',
    description: '書きやすさを重視したスクリプト言語',
  },
  {
    id: 'php',
    name: 'PHP',
    judge0Id: 68,
    extension: '.php',
    icon: '/icons/php.svg',
    description: 'Web開発で人気のサーバーサイド言語',
  },
  {
    id: 'bash',
    name: 'Bash',
    judge0Id: 46,
    extension: '.sh',
    icon: '/icons/bash.svg',
    description: 'インフラ管理・自動化の必須スキル',
  },
  {
    id: 'haskell',
    name: 'Haskell',
    judge0Id: 61,
    extension: '.hs',
    icon: '/icons/haskell.svg',
    description: '純粋関数型プログラミング言語',
  },
  {
    id: 'elixir',
    name: 'Elixir',
    judge0Id: 57,
    extension: '.ex',
    icon: '/icons/elixir.svg',
    description: '並列処理に強いモダン関数型言語',
  },
  {
    id: 'lua',
    name: 'Lua',
    judge0Id: 64,
    extension: '.lua',
    icon: '/icons/lua.svg',
    description: 'ゲーム開発で人気の軽量スクリプト言語',
  },
  {
    id: 'assembly',
    name: 'Assembly',
    judge0Id: 45,
    extension: '.asm',
    icon: '/icons/assembly.svg',
    description: '低レイヤーへの理解を深める機械語',
  },
  {
    id: 'sql',
    name: 'SQL',
    judge0Id: 82,
    extension: '.sql',
    icon: '/icons/sql.svg',
    description: 'データベース操作の標準言語',
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    judge0Id: 78,
    extension: '.kt',
    icon: '/icons/kotlin.svg',
    description: 'Android開発の標準言語',
  },
  {
    id: 'swift',
    name: 'Swift',
    judge0Id: 83,
    extension: '.swift',
    icon: '/icons/swift.svg',
    description: 'iOS/macOS開発の標準言語',
  },
  {
    id: 'perl',
    name: 'Perl',
    judge0Id: 85,
    extension: '.pl',
    icon: '/icons/perl.svg',
    description: 'テキスト処理に強力なスクリプト言語',
  },
];

export function getLanguageById(id: string): Language | undefined {
  return LANGUAGES.find((lang) => lang.id === id);
}

export function getLanguageByJudge0Id(judge0Id: number): Language | undefined {
  return LANGUAGES.find((lang) => lang.judge0Id === judge0Id);
}

export const LANGUAGE_COLORS: Record<string, string> = {
  python: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
  javascript: 'bg-yellow-50 hover:bg-yellow-100 border-yellow-200',
  typescript: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
  java: 'bg-red-50 hover:bg-red-100 border-red-200',
  c: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
  cpp: 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200',
  csharp: 'bg-purple-50 hover:bg-purple-100 border-purple-200',
  go: 'bg-cyan-50 hover:bg-cyan-100 border-cyan-200',
  rust: 'bg-orange-50 hover:bg-orange-100 border-orange-200',
  ruby: 'bg-pink-50 hover:bg-pink-100 border-pink-200',
  php: 'bg-violet-50 hover:bg-violet-100 border-violet-200',
  bash: 'bg-gray-100 hover:bg-gray-200 border-gray-300',
  haskell: 'bg-purple-50 hover:bg-purple-100 border-purple-200',
  elixir: 'bg-violet-50 hover:bg-violet-100 border-violet-200',
  lua: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
  assembly: 'bg-zinc-100 hover:bg-zinc-200 border-zinc-300',
  sql: 'bg-slate-50 hover:bg-slate-100 border-slate-200',
  kotlin: 'bg-purple-50 hover:bg-purple-100 border-purple-200',
  swift: 'bg-orange-50 hover:bg-orange-100 border-orange-200',
  perl: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
};

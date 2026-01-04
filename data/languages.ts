export interface Language {
  id: string;
  name: string;
  judge0Id: number;
  extension: string;
  icon: string;
  description: string;
  color: string;
}

export const LANGUAGES: Language[] = [
  {
    id: 'python',
    name: 'Python',
    judge0Id: 71,
    extension: '.py',
    icon: '/icons/python.svg',
    description: '初心者向けスクリプト言語',
    color: 'bg-blue-100 hover:bg-blue-200',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    judge0Id: 63,
    extension: '.js',
    icon: '/icons/javascript.svg',
    description: 'Web開発の基本言語',
    color: 'bg-yellow-100 hover:bg-yellow-200',
  },
  {
    id: 'java',
    name: 'Java',
    judge0Id: 62,
    extension: '.java',
    icon: '/icons/java.svg',
    description: '企業システムで広く使われる言語',
    color: 'bg-red-100 hover:bg-red-200',
  },
  {
    id: 'cpp',
    name: 'C++',
    judge0Id: 54,
    extension: '.cpp',
    icon: '/icons/cpp.svg',
    description: '高性能なシステム開発言語',
    color: 'bg-indigo-100 hover:bg-indigo-200',
  },
  {
    id: 'csharp',
    name: 'C#',
    judge0Id: 51,
    extension: '.cs',
    icon: '/icons/csharp.svg',
    description: '.NET フレームワークの主要言語',
    color: 'bg-purple-100 hover:bg-purple-200',
  },
  {
    id: 'go',
    name: 'Go',
    judge0Id: 60,
    extension: '.go',
    icon: '/icons/go.svg',
    description: 'Googleが開発したモダン言語',
    color: 'bg-cyan-100 hover:bg-cyan-200',
  },
  {
    id: 'rust',
    name: 'Rust',
    judge0Id: 73,
    extension: '.rs',
    icon: '/icons/rust.svg',
    description: '安全で高速なシステムプログラミング言語',
    color: 'bg-orange-100 hover:bg-orange-200',
  },
  {
    id: 'ruby',
    name: 'Ruby',
    judge0Id: 72,
    extension: '.rb',
    icon: '/icons/ruby.svg',
    description: '書きやすさを重視したスクリプト言語',
    color: 'bg-pink-100 hover:bg-pink-200',
  },
  {
    id: 'php',
    name: 'PHP',
    judge0Id: 68,
    extension: '.php',
    icon: '/icons/php.svg',
    description: 'Web開発で人気のサーバーサイド言語',
    color: 'bg-violet-100 hover:bg-violet-200',
  },
];

export function getLanguageById(id: string): Language | undefined {
  return LANGUAGES.find((lang) => lang.id === id);
}

export function getLanguageByJudge0Id(judge0Id: number): Language | undefined {
  return LANGUAGES.find((lang) => lang.judge0Id === judge0Id);
}

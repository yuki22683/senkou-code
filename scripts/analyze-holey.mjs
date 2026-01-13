import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const lessonsDir = path.join(__dirname, '..', 'data', 'lessons');

const COMMENT_PREFIX = {
  python: '#', javascript: '//', typescript: '//', java: '//', c: '//', cpp: '//',
  csharp: '//', go: '//', rust: '//', ruby: '#', php: '//', bash: '#',
  haskell: '--', elixir: '#', lua: '--', assembly: ';', sql: '--',
  kotlin: '//', swift: '//', perl: '#'
};

let issues = [];

const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

for (const file of files) {
  try {
    const content = fs.readFileSync(path.join(lessonsDir, file), 'utf-8');
    const match = content.match(/export\s+const\s+\w+Data\s*=\s*(\{[\s\S]*\});?\s*$/);
    if (!match) continue;
    const data = eval('(' + match[1] + ')');
    const lang = data.language;
    const prefix = COMMENT_PREFIX[lang] || '#';

    (data.exercises || []).forEach((ex, ei) => {
      if (!ex.holeyCode) return;
      const lines = ex.holeyCode.split('\n');
      lines.forEach((line, li) => {
        if (line.includes('___')) {
          const prevLine = li > 0 ? lines[li-1] : '';
          const trimmed = prevLine.trim();
          const isComment = trimmed.startsWith('#') || trimmed.startsWith('//') ||
                            trimmed.startsWith('--') || trimmed.startsWith(';') ||
                            trimmed.startsWith('/*');
          if (!isComment) {
            issues.push({ file, exercise: ei + 1, line: li, code: line.substring(0, 60), prevLine: prevLine.substring(0, 40) });
          }
        }
      });
    });
  } catch (e) {
    console.error(`Error processing ${file}:`, e.message);
  }
}

console.log('Issues found:', issues.length);
issues.forEach((i, idx) => console.log(`${idx+1}. ${i.file} E${i.exercise} L${i.line}: "${i.code}" (prev: "${i.prevLine}")`));

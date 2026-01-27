import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const lessonsDir = path.join(__dirname, '..', 'data', 'lessons');

const commentPrefix = {
  python: '#', javascript: '//', typescript: '//', java: '//',
  c: '//', cpp: '//', csharp: '//', go: '//', rust: '//',
  swift: '//', kotlin: '//', bash: '#', ruby: '#', perl: '#',
  php: '//', sql: '--', lua: '--', haskell: '--', elixir: '#',
  assembly: ';',
};

function getComment(lang) {
  return (commentPrefix[lang] || '//') + ' この行を完成させましょう';
}

function isComment(line, lang) {
  const t = line.trim();
  const p = commentPrefix[lang] || '//';
  return t === '' || t.startsWith(p);
}

function hasHole(line) {
  return line.includes('___') && line.trim() !== '';
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const lang = path.basename(filePath, '.ts').replace(/\d+$/, '');
  const comment = getComment(lang);
  let totalChanges = 0;

  // holeyCode を処理
  const holeyPattern = /"holeyCode":\s*"/g;
  let match;
  let newContent = '';
  let lastEnd = 0;

  while ((match = holeyPattern.exec(content)) !== null) {
    const start = match.index + match[0].length;
    // 文字列の終端を見つける
    let i = start;
    while (i < content.length) {
      if (content[i] === '\\' && i + 1 < content.length) {
        i += 2;
      } else if (content[i] === '"') {
        break;
      } else {
        i++;
      }
    }
    const end = i;
    const holeyCode = content.substring(start, end);
    
    // \n で分割して処理
    const lines = holeyCode.split('\\n');
    const newLines = [];
    let changes = 0;
    
    for (let j = 0; j < lines.length; j++) {
      const line = lines[j];
      const prevLine = newLines.length > 0 ? newLines[newLines.length - 1] : null;
      
      if (hasHole(line) && !isComment(line, lang)) {
        if (prevLine === null || !isComment(prevLine, lang)) {
          const indent = (line.match(/^(\s*)/) || ['', ''])[1];
          newLines.push(indent + comment);
          changes++;
        }
      }
      newLines.push(line);
    }
    
    if (changes > 0) {
      newContent += content.substring(lastEnd, start);
      newContent += newLines.join('\\n');
      lastEnd = end;
      totalChanges += changes;
    }
  }
  
  if (totalChanges > 0) {
    newContent += content.substring(lastEnd);
    fs.writeFileSync(filePath, newContent, 'utf-8');
  }
  
  return totalChanges;
}

const files = fs.readdirSync(lessonsDir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts');

let total = 0;
for (const file of files) {
  const changes = processFile(path.join(lessonsDir, file));
  if (changes > 0) {
    console.log(`${file}: ${changes}件`);
    total += changes;
  }
}
console.log(`\n合計: ${total}件`);

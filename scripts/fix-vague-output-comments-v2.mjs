import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const backslashN = String.fromCharCode(92, 110);
const backslash = String.fromCharCode(92);

function extractVarName(nextLine) {
  let m;
  
  m = nextLine.match(/(?:printf|fprintf)\s*\([^,]+,\s*(?:"[^"]*"|'[^']*'),?\s*(\w+)/);
  if (m) return m[1];
  
  m = nextLine.match(/println!\s*\([^,]+,\s*(\w+)/);
  if (m) return m[1];
  
  m = nextLine.match(/fmt\.Print\w*\s*\((?:[^,]+,\s*)*(\w+)\s*\)/);
  if (m) return m[1];
  
  m = nextLine.match(/System\.out\.println\s*\(([^)]+)\)/);
  if (m) return m[1].trim();
  
  m = nextLine.match(/Console\.WriteLine\s*\(([^)]+)\)/);
  if (m) return m[1].trim();
  
  m = nextLine.match(/console\.log\s*\(([^)]+)\)/);
  if (m) return m[1].trim();
  
  m = nextLine.match(/print(?:ln)?\s*\(([^)]+)\)/);
  if (m) return m[1].trim();
  
  m = nextLine.match(/echo\s+(\$?\w+)/);
  if (m) return m[1];
  
  return null;
}

fs.readdirSync(dir).filter(f => f.endsWith('.ts')).forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let count = 0;

  // Fix correctLines
  content = content.replace(/"correctLines":\s*\[([^\]]*)\]/g, (match, arrayContent) => {
    const items = [];
    let current = '';
    let inString = false;
    let escapeNext = false;

    for (const c of arrayContent) {
      if (escapeNext) { current += c; escapeNext = false; continue; }
      if (c === backslash) { current += c; escapeNext = true; continue; }
      if (c === '"') {
        if (inString) { items.push(current); current = ''; inString = false; }
        else { inString = true; }
      } else if (inString) { current += c; }
    }

    let changed = false;
    for (let i = 0; i < items.length - 1; i++) {
      const line = items[i].trim();
      const nextLine = items[i + 1];

      if (line === '// 出力' || line === '# 出力') {
        const varName = extractVarName(nextLine);
        if (varName && !varName.includes('"') && varName.length < 30) {
          const indent = items[i].match(/^(\s*)/)[1];
          const prefix = line.includes('//') ? '//' : '#';
          items[i] = indent + prefix + ' ' + varName + 'を出力';
          changed = true;
          count++;
        }
      }
    }

    if (changed) {
      modified = true;
      return '"correctLines": [\n          ' + items.map(i => '"' + i + '"').join(',\n          ') + '\n        ]';
    }
    return match;
  });

  // Fix correctCode
  content = content.replace(/"correctCode":\s*"([^"]*(?:\\"[^"]*)*)"/g, (match, code) => {
    const lines = code.split(backslashN);
    let changed = false;

    for (let i = 0; i < lines.length - 1; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      const nextLine = lines[i + 1];

      if (trimmed === '// 出力' || trimmed === '# 出力') {
        const varName = extractVarName(nextLine);
        if (varName && !varName.includes('"') && varName.length < 30) {
          const indent = line.match(/^(\s*)/)[1];
          const prefix = trimmed.startsWith('//') ? '//' : '#';
          lines[i] = indent + prefix + ' ' + varName + 'を出力';
          changed = true;
        }
      }
    }

    if (changed) {
      modified = true;
      return '"correctCode": "' + lines.join(backslashN) + '"';
    }
    return match;
  });

  // Fix holeyCode - sync with correctCode
  content = content.replace(/"holeyCode":\s*"([^"]*(?:\\"[^"]*)*)"/g, (match, code) => {
    const lines = code.split(backslashN);
    let changed = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      if (trimmed === '// 出力' || trimmed === '# 出力') {
        // Keep as-is for now since we need corresponding correctCode info
      }
    }

    return match;
  });

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(file + ': Fixed ' + count + ' vague output comments');
  }
});

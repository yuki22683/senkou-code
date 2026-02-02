// 「結果を出力」「値を出力」「値を返す」などの曖昧なコメントを具体的に修正
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

function fixVagueComments(code) {
  const lines = code.split('\n');
  const result = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    const nextLine = lines[i + 1] || '';

    // 「// 結果を出力」パターン
    if (line.trim() === '// 結果を出力') {
      // 次の行から具体的な変数名を抽出
      const match = nextLine.match(/console\.log\(([^)]+)\)/);
      if (match) {
        const varName = match[1].trim();
        const indent = line.match(/^(\s*)/)[1];
        line = `${indent}// ${varName} を出力`;
      }
    }

    // 「// 値を出力」パターン
    if (line.trim() === '// 値を出力') {
      const match = nextLine.match(/print\(([^)]+)\)|println\(([^)]+)\)|console\.log\(([^)]+)\)/);
      if (match) {
        const varName = (match[1] || match[2] || match[3]).trim();
        const indent = line.match(/^(\s*)/)[1];
        line = `${indent}// ${varName} を出力`;
      }
    }

    // 「# 結果を出力」パターン
    if (line.trim() === '# 結果を出力' || line.trim() === '-- 結果を出力') {
      const commentChar = line.trim().startsWith('#') ? '#' : '--';
      const match = nextLine.match(/print\(([^)]+)\)|puts?\s+(.+)/);
      if (match) {
        const varName = (match[1] || match[2]).trim();
        const indent = line.match(/^(\s*)/)[1];
        line = `${indent}${commentChar} ${varName} を出力`;
      }
    }

    // 「// return で値を返す」「-- returnで値を返す」パターン
    if (/\/\/\s*return\s*で値を返す/.test(line) || /--\s*returnで値を返す/.test(line)) {
      const match = nextLine.match(/return\s+(.+);?/);
      if (match) {
        const returnValue = match[1].trim().replace(/;$/, '');
        const indent = line.match(/^(\s*)/)[1];
        const commentChar = line.includes('--') ? '--' : '//';
        line = `${indent}${commentChar} ${returnValue} を返す`;
      }
    }

    result.push(line);
  }

  return result.join('\n');
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // correctCode、holeyCode、correctLines 内のコメントを修正
  ['correctCode', 'holeyCode'].forEach(field => {
    const regex = new RegExp(`("${field}":\\s*")((?:[^"\\\\]|\\\\.)*)(")`,'g');
    content = content.replace(regex, (match, prefix, code, suffix) => {
      const decoded = code.replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
      const fixed = fixVagueComments(decoded);
      if (fixed !== decoded) {
        modified = true;
        const encoded = fixed.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/"/g, '\\"');
        return prefix + encoded + suffix;
      }
      return match;
    });
  });

  // correctLines の配列も修正
  const linesRegex = /("correctLines":\s*\[)([\s\S]*?)(\])/g;
  content = content.replace(linesRegex, (match, prefix, arrayContent, suffix) => {
    try {
      const lines = JSON.parse(`[${arrayContent}]`);
      let changed = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const nextLine = lines[i + 1] || '';

        if (line.trim() === '// 結果を出力') {
          const consoleMatch = nextLine.match(/console\.log\(([^)]+)\)/);
          if (consoleMatch) {
            const indent = line.match(/^(\s*)/)[1];
            lines[i] = `${indent}// ${consoleMatch[1].trim()} を出力`;
            changed = true;
          }
        }
      }

      if (changed) {
        modified = true;
        return prefix + '\n          ' + lines.map(l => JSON.stringify(l)).join(',\n          ') + '\n        ' + suffix;
      }
    } catch (e) {
      // ignore parse errors
    }
    return match;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  return false;
}

const files = fs.readdirSync(lessonsDir).filter(f =>
  f.endsWith('.ts') && f !== 'index.ts'
);

let fixedCount = 0;
for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  if (processFile(filePath)) {
    console.log('Fixed:', file);
    fixedCount++;
  }
}

console.log(`\nTotal: ${fixedCount} files fixed`);

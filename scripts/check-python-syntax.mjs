import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.startsWith('python') && f.endsWith('.ts'));

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const regex = /"correctCode":\s*"((?:[^"\\]|\\.)*)"/g;
  let match;
  let exerciseNum = 0;
  while ((match = regex.exec(content)) !== null) {
    exerciseNum++;
    const code = match[1]
      .replace(/\\n/g, '\n')
      .replace(/\\t/g, '\t')
      .replace(/\\"/g, '"')
      .replace(/\\\\/g, '\\');

    const tmpFile = 'tmp_check.py';
    fs.writeFileSync(tmpFile, code);
    try {
      execSync('python -m py_compile ' + tmpFile, { stdio: 'pipe' });
    } catch (e) {
      console.log(`${file} exercise ${exerciseNum}: SYNTAX ERROR`);
      console.log(code.substring(0, 300));
      console.log('---');
    }
  }
}

try { fs.unlinkSync('tmp_check.py'); } catch {}
console.log('Done');

import fs from 'fs';
import path from 'path';

const dir = './data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

let totalFixed = 0;

for (const file of files) {
  const fp = path.join(dir, file);
  let content = fs.readFileSync(fp, 'utf8');
  
  // Use a string replace that works with the raw content on disk
  // We need to find "System.out.println("Beep!");" and change it to "System.out.println(\"Beep!\");"
  // Note: On disk, the outer quotes are ", and the inner should be \
  
  const searchStr = '"System.out.println("Beep!");"';
  const replaceStr = '"System.out.println(\"Beep!\" );"';
  
  if (content.includes(searchStr)) {
    const fixedContent = content.split(searchStr).join(replaceStr);
    fs.writeFileSync(fp, fixedContent);
    console.log(`${file}: Fixed Java println quotes in candidates.`);
    totalFixed++;
  }
}

console.log(`
Total fixed: ${totalFixed}`);

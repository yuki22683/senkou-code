
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts'));

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(/"holeyCode":\s*"(.*?)"/gs, (match, code) => {
    const lines = code.split('\\n');
    const newLines = lines.map(line => {
      if (line.includes('___')) {
        const indentMatch = line.match(/^(\s*)/);
        const indent = indentMatch ? indentMatch[0] : "";
        return indent + '___';
      }
      return line;
    });
    return `"holeyCode": "${newLines.join('\\n')}"`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Blanked all holeyCode lines.");

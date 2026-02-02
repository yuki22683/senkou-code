import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const lessonsDir = path.join(__dirname, '..', 'data', 'lessons');

const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts'));

for (const file of files) {
    const filePath = path.join(lessonsDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;

    // Fixed string replacements
    content = content.replace(/printf\(\" %d \"\]/g, 'printf(\" %d \", age)');
    content = content.replace(/printf\(\"私は %d 歳です\"/g, 'printf(\"私は %d 歳です\", age)');
    content = content.replace(/printf\(\"Small\"/g, 'printf(\"Small\\n\")');
    content = content.replace(/open\(filename\", \'r\'")/g, 'open(filename, \'r\')');
    content = content.replace(/f.write\(\'Hello\", Python!\'")/g, 'f.write(\'Hello, Python!\')');
    
    // Fix [ "[1", 2, 3]"
    content = content.split('[ "[1", 2, 3]').join('["[1, 2, 3]"');
    content = content.split('[ "[1, 2, 3, 4, 5]').join('["[1, 2, 3, 4, 5]"');
    content = content.split('[ "[\'a\', \'b\', \'c\'"]').join('["[\'a\', \'b\', \'c\'"]');
    content = content.split('[ "[\'red\', \'green\', \'blue\'"]').join('["[\'red\', \'green\', \'blue\'"]');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Fixed broken arrays in ${file}`);
    }
}


import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

files.forEach(f => {
    let content = fs.readFileSync(path.join(dir, f), 'utf-8');
    let changed = false;
    
    // Find "others": [ ... ]
    const othersRegex = /"others":\s*\[([\s\S]*?)\]/g;
    content = content.replace(othersRegex, (match, arrContent) => {
        // Split by comma
        const items = arrContent.split(',');
        const newItems = items.map(item => {
            let trimmed = item.trim();
            if (!trimmed) return item;
            
            // If it starts with " but doesn't end with "
            if (trimmed.startsWith('"') && !trimmed.endsWith('"')) {
                changed = true;
                return ' "' + trimmed.substring(1).replace(/"/g, '\\"') + '"';
            }
            return item;
        });
        return `"others": [${newItems.join(',')}]`;
    });
    
    if (changed) {
        fs.writeFileSync(path.join(dir, f), content, 'utf-8');
        console.log(`Fixed strings in ${f}`);
    }
});

import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

files.forEach(f => {
    const p = path.join(dir, f);
    const c = fs.readFileSync(p, 'utf8');
    
    // Check for \n (5c 6e) not preceded by \ (5c)
    // We want to find cases where it is literal characters \ and n, but not escaped \\ and n
    
    const lines = c.split('\n');
    lines.forEach((l, i) => {
        // Regex: matches \n followed by " or '
        // We look for literal \n in the file.
        // In the string c, literal \n is \ and n.
        // So we match \n using \\n
        // We want to exclude \\n (escaped backslash)
        
        const matches = l.matchAll(/([^\\]|^)\\n(?=["'])/g);
        for (const match of matches) {
            console.log(`[TARGET] ${f}:${i+1}: ${l.trim().substring(0, 100)}`);
        }
    });
});
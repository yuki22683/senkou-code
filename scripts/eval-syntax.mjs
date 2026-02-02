import fs from 'fs';
import path from 'path';

const dir = 'data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

files.forEach(f => {
    const content = fs.readFileSync(path.join(dir, f), 'utf-8');
    // Remove export and other TS bits to make it semi-evaluable
    const jsContent = content
        .replace(/export const \w+ =/g, 'const x =')
        .replace(/: \w+<.*?>/g, '')
        .replace(/: \w+/g, '');
        
    try {
        // This is a bit dangerous but we're just checking syntax in a controlled way
        // Wrapping in a function to avoid global pollution
        new Function(jsContent);
    } catch (e) {
        console.log(`Syntax Error in ${f}: ${e.message}`);
        // Find line number if possible
        const lines = jsContent.split('\n');
        // Let's try to locate where it might be
    }
});

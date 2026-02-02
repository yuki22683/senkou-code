import fs from 'fs';
import path from 'path';

const lessonsDir = 'data/lessons';
const publicDir = 'public';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let missingCount = 0;

console.log('Checking for missing images...');

files.forEach(f => {
  const content = fs.readFileSync(path.join(lessonsDir, f), 'utf-8');
  // Match absolute paths starting with /illustrations/ or just illustrations/
  // The lessons usually have "image": "/illustrations/"
  const matches = content.match(/["'](\/illustrations\/[^"']+)["']/g);
  
  if (matches) {
    matches.forEach(m => {
      // Remove quotes
      const imagePathRaw = m.replace(/['"]/g, '');
      // Remove leading slash for path.join
      const relativePath = imagePathRaw.startsWith('/') ? imagePathRaw.substring(1) : imagePathRaw;
      const fullPath = path.join(process.cwd(), publicDir, relativePath);

      if (!fs.existsSync(fullPath)) {
        console.log(`[MISSING] ${f}: ${imagePathRaw}`);
        missingCount++;
      }
    });
  }
});

console.log(`
Check complete. ${missingCount} missing images found.`);

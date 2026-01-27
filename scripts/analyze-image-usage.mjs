import fs from 'fs';
import path from 'path';

const lessonsDir = 'data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
const counts = {};

files.forEach(f => {
  const content = fs.readFileSync(path.join(lessonsDir, f), 'utf-8');
  // Match "/illustrations/..." paths
  const matches = content.match(/\/illustrations\/[a-zA-Z0-9_\/\-\.]+\.(png|jpg|jpeg|svg)/g);
  if (matches) {
    matches.forEach(m => {
      counts[m] = (counts[m] || 0) + 1;
    });
  }
});

const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
console.log('Image Usage Statistics:');
console.log(JSON.stringify(sorted, null, 2));

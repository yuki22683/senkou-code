import fs from 'fs';

const content = fs.readFileSync('./data/lessons/c2.ts', 'utf-8');

// Use the same regex as check script
const exerciseBlockRegex = /\{\s*"title":\s*"([^"]+)"[\s\S]*?"correctCode":\s*"((?:[^"\\]|\\.)*)"\s*,\s*"holeyCode":\s*"((?:[^"\\]|\\.)*)"\s*,/g;

let match;
while ((match = exerciseBlockRegex.exec(content)) !== null) {
    if (match[1] === '関数に引数を渡す') {
        console.log('=== Exercise: 関数に引数を渡す ===');

        // Raw captured strings
        console.log('\nRaw correctCode (first 150 chars):');
        console.log(JSON.stringify(match[2].substring(0, 150)));

        console.log('\nRaw holeyCode (first 150 chars):');
        console.log(JSON.stringify(match[3].substring(0, 150)));

        // After processing like check script
        const correctCode = match[2].replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\"/g, '"');
        const holeyCode = match[3].replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\"/g, '"');

        console.log('\nProcessed correctCode lines:');
        correctCode.split('\n').forEach((l, i) => console.log(i + ':', JSON.stringify(l)));

        console.log('\nProcessed holeyCode lines:');
        holeyCode.split('\n').forEach((l, i) => console.log(i + ':', JSON.stringify(l)));

        break;
    }
}

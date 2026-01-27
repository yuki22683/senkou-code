import fs from 'fs';
import path from 'path';

const lessonsDir = 'data/lessons';
const files = fs.readdirSync(lessonsDir)
    .filter(file => file.endsWith('.ts'))
    .map(file => path.join(lessonsDir, file));

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // より柔軟な正規表現での置換
    // "___ で始まり、次に \n か " (閉じ引用符) が来ないまま行が終わっているパターンを探す
    // 文字列リテラル内なので、実際には \"___" の形式
    const jsonStringFieldRegex = /"(correctCode|holeyCode)"\s*:\s*"((?:[^"\\]|\\.)*)"/g;
    
    const newContent = content.replace(jsonStringFieldRegex, (match, field, val) => {
        // val は JS 文字列としての値
        // \"___ で終わっている、あるいは \"___ の後に \n があるが閉じ引用符がない
        // 例: ... \"___ \n ...
        
        let valChanged = false;
        // 1. 行末の \"___ を \"___\" に修正
        // 文字列の中の \"___ を探し、直後に \" がないものを置換
        const fixedVal = val.replace(/\\"___(?![\\""])/g, (m) => {
            valChanged = true;
            return '\\"___\\"';
        });
        
        if (valChanged) {
            changed = true;
            return `"${field}": "${fixedVal}"`;
        }
        return match;
    });

    if (changed) {
        console.log(`Fixing ${file}`);
        fs.writeFileSync(file, newContent, 'utf8');
    }
}
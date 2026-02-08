import { readFileSync, writeFileSync } from 'fs';
import { globSync } from 'glob';
import * as path from 'path';

function fixHoleyCode(filePath: string): boolean {
    const content = readFileSync(filePath, 'utf8');
    let updatedContent = content;
    let changed = false;

    // 正規表現でexercises配列を抽出
    const exercisesRegex = /("exercises":\s*\[[\s\S]*?\])/;
    const exercisesMatch = updatedContent.match(exercisesRegex);

    if (!exercisesMatch) {
        // console.warn(`No exercises array found in ${filePath}`);
        return false;
    }

    // JSON.parseで安全にパースするため、exercisesContentを一時的に配列形式に修正
    // 取得したexercisesMatch[1]は文字列なので、"exercises": を取り除き、配列としてパース
    let exercisesArrayString = exercisesMatch[1].replace(/"exercises":\s*/, '');
    let exercises: any[];
    try {
        exercises = JSON.parse(exercisesArrayString);
    } catch (e) {
        console.error(`Failed to parse exercises in ${filePath}: ${e}`);
        return false;
    }

    const updatedExercises = exercises.map((exercise: any) => {
        let updatedExercise = { ...exercise };
        if (updatedExercise.holeyCode) {
            const lines = updatedExercise.holeyCode.split('
');
            const updatedLines = lines.map((line: string) => {
                const trimmedLine = line.trim();
                // コメント行の判定: C/C++形式 (//, /*), Python/Ruby形式 (#), Bash形式 (#), Lua形式 (--)
                // SQL形式 (--, #)
                const isComment = trimmedLine.startsWith('//') || trimmedLine.startsWith('/*') || trimmedLine.startsWith('#') || trimmedLine.startsWith('--');
                
                // コメント行、空行、またはすでに___を含む行は変更しない
                if (isComment || trimmedLine === '' || line.includes('___')) {
                    return line;
                }
                // コード行で___を含まない場合、___に置換
                if (trimmedLine !== '') {
                    changed = true;
                    // 元のインデントを保持する
                    const indent = line.match(/^\s*/)?.[0] || '';
                    return indent + '___';
                }
                return line;
            });
            updatedExercise.holeyCode = updatedLines.join('
');
        }
        return updatedExercise;
    });

    if (changed) {
        const newExercisesArrayString = JSON.stringify(updatedExercises, null, 2);
        const newExercisesContent = `"exercises": ${newExercisesArrayString}`;
        
        // 元のcontentからexercises部分だけを置換
        updatedContent = updatedContent.replace(exercisesMatch[1], newExercisesContent);
        writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`Fixed holeyCode in ${filePath}`);
        return true;
    }
    return false;
}

const lessonFiles = globSync('data/lessons/**/*.ts');
let totalFixed = 0;

lessonFiles.forEach(file => {
    if (fixHoleyCode(file)) {
        totalFixed++;
    }
});

console.log(`
--- Summary ---`);
console.log(`Total files processed: ${lessonFiles.length}`);
console.log(`Total files with fixed holeyCode: ${totalFixed}`);


import fs from 'fs';
import path from 'path';

const file = 'data/lessons/c.ts';
let content = fs.readFileSync(file, 'utf-8');

// The broken part in c.ts looks like:
//         }
//       ]
//     },
//     {
//       "title": "隰ｨｰ陝干定怦･郢ｧ蠕鯉ｽ狗ｸｲ蠕後邵ｺ阮咏ｵ柤t",
//       "description": "...",
//       "difficulty": "easy",
//       "orderIndex": 2,
//       "tutorialSlides": [
//         {
//           "title": "螟画焚・医∈繧薙☆縺・ｼ峨→縺ｯ・・,
//           "image": "/illustrations/common/database_table_3d.png",
//           "content": "..."
//         },
//         {
//           ,
//         "others": ["int main() {", "int x = 10;", "printf(\"%d\"]
//       "title": "繝ｩ繝吶Ν・亥梛・峨′蠢・ｦ√〒縺・,

// It seems there's a block like `{ , "others": [...] "title": "..." }` injected wrongly.

// We'll target the broken "others" block that precedes a "title"
const regex = /\{\s*,\s*"others":\s*\[([\s\S]*?)\]\s*"title":/g;
if (regex.test(content)) {
    content = content.replace(regex, (match, othersContent) => {
        // We probably just want to get rid of this whole corrupted insertion and keep the "title" part
        return '"title":';
    });
    fs.writeFileSync(file, content, 'utf-8');
    console.log("Fixed corrupted insertion in c.ts");
} else {
    console.log("Could not find corrupted insertion in c.ts with regex");
}

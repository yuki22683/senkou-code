import fs from 'fs';
const f = 'data/lessons/elixir3.ts';
let c = fs.readFileSync(f, 'utf8');
// 問題の箇所を直接置換
c = c.replace('name: "___"', 'name: \"___\"');
c = c.replace('name: \"___\", email: \"\"', 'name: \"___\", email: \"\"');
fs.writeFileSync(f, c);
console.log('Fixed elixir3.ts');

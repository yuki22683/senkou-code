import fs from 'fs';
import path from 'path';

const filePath = 'data/lessons/python.ts';
const content = fs.readFileSync(filePath, 'utf-8');

const exercisesStartIdx = content.indexOf('"exercises": [');
const rest = content.substring(exercisesStartIdx + 14);
let depth = 1, arrayEndIdx = -1, i = 0;
while (i < rest.length && depth > 0) {
  if (rest[i] === '"') {
    i++;
    while (i < rest.length) {
      if (rest[i] === '\\' && i + 1 < rest.length) i += 2;
      else if (rest[i] === '"') break;
      else i++;
    }
  } else if (rest[i] === '[') depth++;
  else if (rest[i] === ']') { depth--; if (depth === 0) { arrayEndIdx = i; break; } }
  i++;
}
const exercisesArrayStr = rest.substring(0, arrayEndIdx);
const exerciseStrings: string[] = [];
let currentDepth = 0, currentStart = -1;
i = 0;
while (i < exercisesArrayStr.length) {
  if (exercisesArrayStr[i] === '"') {
    i++;
    while (i < exercisesArrayStr.length) {
      if (exercisesArrayStr[i] === '\\' && i + 1 < exercisesArrayStr.length) i += 2;
      else if (exercisesArrayStr[i] === '"') break;
      else i++;
    }
  } else if (exercisesArrayStr[i] === '{') {
    if (currentDepth === 0) currentStart = i;
    currentDepth++;
  } else if (exercisesArrayStr[i] === '}') {
    currentDepth--;
    if (currentDepth === 0) exerciseStrings.push(exercisesArrayStr.substring(currentStart, i + 1));
  }
  i++;
}

if (exerciseStrings.length > 8) {
    const exStr = exerciseStrings[8]; // Exercise 9
    console.log("Exercise 9 string snippet:", exStr.substring(0, 100));
    const holeyMatch = exStr.match(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/);
    const correctCodeMatch = exStr.match(/"correctCode":\s*"((?:[^"\\]|\\.)*)"/);
    console.log("HoleyMatch found:", !!holeyMatch);
    console.log("CorrectCodeMatch found:", !!correctCodeMatch);
    if (holeyMatch) console.log("HoleyCode length:", holeyMatch[1].length);
    else console.log("holeyCode field index:", exStr.indexOf('"holeyCode":'));
}
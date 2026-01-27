const s = String.raw`int x = 42;\nprintf(\"%d\\n\", x);\nreturn 0;`;
console.log('Original:', s);
// Regex to match \n literal NOT preceded by \
const regex = /(?<!\\)\\n/g;
const lines = s.split(regex);
console.log('Split lines:', lines);
console.log('Count:', lines.length);

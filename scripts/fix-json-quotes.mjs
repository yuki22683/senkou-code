// JSON内の壊れたクォートを修正するスクリプト
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  const original = content;

  // Fix specific known patterns that break JSON
  const replacements = [
    // CSharp patterns
    ['Set name box to "CSharp"', "Set name box to 'CSharp'"],
    ['Create array with "red", "blue"', "Create array with 'red', 'blue'"],
    ['Print in "Hi, name!" format', "Print in 'Hi, name!' format"],
    ['Define string ("Hello")', "Define string 'Hello'"],
    ['using "," delimiter', "using ',' as delimiter"],
    ['Set host to "localhost", port to 8080', "Set host to 'localhost', port to 8080"],
    ['String to split "hello,world"', "String to split 'hello,world'"],
    ['struct with name "Bob", email "bob@example.com"', "Create struct (name: Bob, email: bob@example.com)"],
    ['Create struct with name "Bob", email "bob@example.com"', "Create struct (name: Bob, email: bob@example.com)"],
    ['Create struct with name "Book", price 1000', "Create struct (name: Book, price: 1000)"],
    ['struct with name "Book", price 1000', "Create struct (name: Book, price: 1000)"],
    ['slice with "a"', "slice with 'a'"],
    ['key "a"', "key 'a'"],
    ['key "b"', "key 'b'"],
    ['for key "a"', "for key 'a'"],
    ['for key "b"', "for key 'b'"],
    ['value for key "a"', "value for key 'a'"],
    ['value for key "b"', "value for key 'b'"],
    ['Set value for key "a"', "Set value for key 'a'"],
    ['Set value for key "b"', "Set value for key 'b'"],
    ['Print value of key "a"', "Print value of key 'a'"],
    // JavaScript patterns
    ["Create object (name: 'Taro')", "Create object {name: 'Taro'}"],
    ['Create object with x=10, y=20', 'Create object (x=10, y=20)'],
    // Python patterns
    ["Set name to 'Python'", "Set name to 'Python'"],
    ["Set name to 'Ruby'", "Set name to 'Ruby'"],
    // General patterns
    ["Message ('Excellent')", "Message 'Excellent'"],
    ["Message ('adult')", "Message 'adult'"],
    ["Message ('Error')", "Message 'Error'"],
    ["Message ('Great')", "Message 'Great'"],
    ["Message ('Meow!')", "Message 'Meow!'"],
    ["Message ('pass')", "Message 'pass'"],
    ['Set age to "10"', 'Set age to 10'],
    // More patterns that might cause issues
    ['container with "Hello"', "container with 'Hello'"],
    ['Container instance with "Hello"', "Container instance with 'Hello'"],
    ['Item instance with "Apple"', "Item instance with 'Apple'"],
    ['struct with "Apple"', "struct with 'Apple'"],
    ['JSON string with "Banana"', "JSON string with 'Banana'"],
    ['string "hello,world"', "string 'hello,world'"],
    ["Initialize slice with 'a', "b", "c"", "Initialize slice with 'a', 'b', 'c'"],
    ['with "a", "b", "c"', "with 'a', 'b', 'c'"],

  ];

  for (const [from, to] of replacements) {
    content = content.split(from).join(to);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${file}`);
    totalFixed++;
  }
}

console.log(`\nTotal files fixed: ${totalFixed}`);
// Additional patterns added dynamically

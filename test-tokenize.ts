import { tokenize } from './lib/syntax-highlight';

const tests: [string, string][] = [
  ['dataclass', 'python'],
  ['@dataclass', 'python'],
  ['selfwidth', 'python'],
  ['isinstance', 'python'],
  ['classmethod', 'python'],
  ['subprocess', 'python'],
  ['foreach', 'csharp'],
  ['interface', 'typescript'],
];

for (const [text, lang] of tests) {
  const tokens = tokenize(text, lang);
  console.log(lang + ': ' + text + ' -> ' + JSON.stringify(tokens));
}

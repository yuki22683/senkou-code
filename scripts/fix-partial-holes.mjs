import fs from 'fs';
import path from 'path';

// Keywords that should NOT be replaced with ___
const KEYWORDS = new Set([
  // Python
  'self', 'in', 'for', 'if', 'else', 'def', 'class', 'return', 'try', 'except',
  'with', 'as', 'from', 'import', 'and', 'or', 'not', 'is', 'None', 'True', 'False',
  'lambda', 'yield', 'async', 'await', 'pass', 'break', 'continue', 'elif', 'while',
  'raise', 'finally', 'global', 'nonlocal', 'assert', 'del',
  // JavaScript/TypeScript
  'let', 'const', 'var', 'function', 'new', 'this', 'typeof', 'instanceof',
  'throw', 'catch', 'null', 'undefined', 'true', 'false', 'void', 'delete',
  'switch', 'case', 'default', 'of', 'extends', 'implements', 'interface',
  'type', 'enum', 'abstract', 'static', 'public', 'private', 'protected',
  'readonly', 'export', 'super', 'get', 'set', 'infer', 'keyof', 'never',
  // Go
  'func', 'package', 'import', 'go', 'chan', 'select', 'range', 'defer',
  'fallthrough', 'struct', 'map', 'interface', 'type', '_',
  // Rust
  'fn', 'let', 'mut', 'pub', 'use', 'mod', 'impl', 'struct', 'enum', 'trait',
  'where', 'match', 'loop', 'move', 'ref', 'dyn', 'unsafe', 'extern', 'crate',
  // C/C++
  'int', 'void', 'char', 'float', 'double', 'long', 'short', 'unsigned', 'signed',
  'const', 'static', 'extern', 'register', 'volatile', 'inline', 'virtual',
  'override', 'template', 'typename', 'namespace', 'using', 'auto', 'sizeof',
  'typedef', 'struct', 'union', 'enum', 'class', 'public', 'private', 'protected',
  // Java/Kotlin
  'public', 'private', 'protected', 'static', 'final', 'abstract', 'native',
  'synchronized', 'transient', 'volatile', 'strictfp', 'extends', 'implements',
  'interface', 'class', 'enum', 'throws', 'super', 'this', 'new', 'instanceof',
  'val', 'var', 'fun', 'object', 'companion', 'data', 'sealed', 'inner', 'open',
  'by', 'lateinit', 'reified', 'inline', 'crossinline', 'noinline', 'to', 'it',
  // Swift
  'func', 'let', 'var', 'class', 'struct', 'enum', 'protocol', 'extension',
  'init', 'deinit', 'subscript', 'typealias', 'associatedtype', 'where',
  'inout', 'throws', 'rethrows', 'guard', 'defer', 'repeat', 'weak', 'unowned',
  'lazy', 'final', 'required', 'convenience', 'dynamic', 'optional', 'override',
  'mutating', 'nonmutating', 'some', 'any',
  // Ruby
  'def', 'end', 'class', 'module', 'do', 'begin', 'rescue', 'ensure', 'raise',
  'yield', 'return', 'break', 'next', 'redo', 'retry', 'self', 'super', 'nil',
  'true', 'false', 'and', 'or', 'not', 'unless', 'until', 'when', 'case',
  'then', 'elsif', 'alias', 'defined', 'BEGIN', 'END', '__FILE__', '__LINE__',
  // PHP
  'echo', 'print', 'function', 'class', 'interface', 'trait', 'extends',
  'implements', 'public', 'private', 'protected', 'static', 'final', 'abstract',
  'const', 'global', 'return', 'throw', 'try', 'catch', 'finally', 'new',
  'clone', 'instanceof', 'use', 'namespace', 'as', 'insteadof', 'self',
  'parent', 'static', 'yield', 'from',
  // Lua
  'function', 'end', 'local', 'return', 'do', 'then', 'else', 'elseif',
  'nil', 'true', 'false', 'and', 'or', 'not', 'repeat', 'until', 'goto',
  // SQL
  'SELECT', 'FROM', 'WHERE', 'INSERT', 'INTO', 'VALUES', 'UPDATE', 'SET',
  'DELETE', 'CREATE', 'TABLE', 'DROP', 'ALTER', 'INDEX', 'JOIN', 'LEFT',
  'RIGHT', 'INNER', 'OUTER', 'ON', 'AND', 'OR', 'NOT', 'NULL', 'IS', 'IN',
  'LIKE', 'BETWEEN', 'ORDER', 'BY', 'ASC', 'DESC', 'GROUP', 'HAVING',
  'DISTINCT', 'AS', 'UNION', 'ALL', 'LIMIT', 'OFFSET', 'CASE', 'WHEN',
  'THEN', 'ELSE', 'END', 'EXISTS', 'COUNT', 'SUM', 'AVG', 'MAX', 'MIN',
  'OVER', 'PARTITION', 'ROW_NUMBER', 'RANK', 'DENSE_RANK', 'NTILE',
  // Haskell
  'module', 'where', 'import', 'qualified', 'as', 'hiding', 'data', 'type',
  'newtype', 'class', 'instance', 'deriving', 'let', 'in', 'case', 'of',
  'if', 'then', 'else', 'do', 'return', 'where',
  // Elixir
  'def', 'defp', 'defmodule', 'defstruct', 'defprotocol', 'defimpl', 'do', 'end', 'fn', 'case', 'cond', 'if', 'else',
  'unless', 'when', 'with', 'for', 'receive', 'after', 'try', 'catch', 'rescue',
  'raise', 'throw', 'import', 'require', 'alias', 'use',
  // C#
  'using', 'namespace', 'class', 'struct', 'interface', 'enum', 'delegate',
  'event', 'public', 'private', 'protected', 'internal', 'static', 'readonly',
  'const', 'volatile', 'virtual', 'override', 'abstract', 'sealed', 'partial',
  'new', 'this', 'base', 'typeof', 'sizeof', 'is', 'as', 'ref', 'out', 'in',
  'params', 'get', 'set', 'add', 'remove', 'value', 'var', 'dynamic', 'async',
  'await', 'yield', 'return', 'throw', 'try', 'catch', 'finally', 'lock',
  'checked', 'unchecked', 'fixed', 'unsafe', 'stackalloc', 'nameof', '__',
  // Generic type parameters
  'T', 'TResult', 'TKey', 'TValue', 'TSource', 'TElement',
  // Perl
  'my', 'our', 'local', 'sub', 'return', 'use', 'require', 'package', 'BEGIN',
  'END', 'if', 'elsif', 'else', 'unless', 'while', 'until', 'for', 'foreach',
  'do', 'last', 'next', 'redo', 'goto', 'die', 'warn', 'print', 'say', 'open',
  'close', 'read', 'write', 'chomp', 'chop', 'split', 'join', 'push', 'pop',
  'shift', 'unshift', 'sort', 'reverse', 'map', 'grep', 'defined', 'undef',
  'ref', 'bless', 'tie', 'untie', 'tied', 'scalar', 'wantarray',
  's', 'm', 'tr', 'y', 'q', 'qq', 'qw', 'qx', 'qr',
  // Bash
  'if', 'then', 'else', 'elif', 'fi', 'case', 'esac', 'for', 'while', 'until',
  'do', 'done', 'in', 'function', 'return', 'exit', 'break', 'continue',
  'local', 'readonly', 'declare', 'typeset', 'export', 'unset', 'shift',
  'set', 'eval', 'exec', 'source', 'true', 'false', 'echo', 'printf', 'read',
  'test', 'let', 'expr',
]);

// F-string prefix (Python) - should not be treated as identifier
const FSTRING_PREFIXES = new Set(['f', 'F', 'r', 'R', 'b', 'B', 'u', 'U', 'fr', 'Fr', 'fR', 'FR', 'rf', 'rF', 'Rf', 'RF', 'br', 'Br', 'bR', 'BR', 'rb', 'rB', 'Rb', 'RB']);

const backslashN = String.fromCharCode(92, 110);

function findIssuesInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath);

  const issues = [];

  const exerciseMatches = content.matchAll(/"title":\s*"([^"]+)"[\s\S]*?"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g);

  for (const match of exerciseMatches) {
    const title = match[1];
    const holeyCode = match[2];
    const lines = holeyCode.split(backslashN);

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      // Skip empty lines and comments
      if (trimmed === '' || trimmed.startsWith('#') || trimmed.startsWith('//') ||
          trimmed.startsWith('--') || trimmed.startsWith(';') ||
          trimmed.startsWith('/*') || trimmed.startsWith('*')) continue;

      // Check if line has ___ but also has non-keyword identifiers
      if (trimmed.includes('___')) {
        // Remove ___, strings, and punctuation
        let cleaned = trimmed
          .replace(/___/g, ' ')
          .replace(/\\"/g, ' ')  // escaped quotes
          .replace(/'[^']*'/g, ' ')  // single-quoted strings
          .replace(/"[^"]*"/g, ' ')  // double-quoted strings
          .replace(/`[^`]*`/g, ' ')  // backtick strings
          .replace(/[{}()\[\]:;,.<>+\-*/%=!&|^~@#$?\\]/g, ' ');

        const ids = cleaned.match(/[a-zA-Z_][a-zA-Z0-9_]*/g) || [];
        const nonKeywordIds = ids.filter(id =>
          !KEYWORDS.has(id) &&
          !KEYWORDS.has(id.toLowerCase()) &&
          !FSTRING_PREFIXES.has(id)
        );

        if (nonKeywordIds.length > 0) {
          issues.push({
            title,
            lineNum: i,
            line: trimmed.substring(0, 70),
            identifiers: nonKeywordIds
          });
        }
      }
    }
  }

  return issues;
}

// Main
const lessonsDir = './data/lessons';
const files = fs.readdirSync(lessonsDir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts')
  .sort();

let totalIssues = 0;
const fileIssues = {};

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  const issues = findIssuesInFile(filePath);

  if (issues.length > 0) {
    fileIssues[file] = issues;
    totalIssues += issues.length;
  }
}

console.log('=== 一部だけ虫食いの行（キーワード除外） ===\n');

for (const [file, issues] of Object.entries(fileIssues).sort((a, b) => b[1].length - a[1].length)) {
  console.log(`\n${file}: ${issues.length} 件`);
  for (const issue of issues.slice(0, 5)) {
    console.log(`  [${issue.title}] L${issue.lineNum}: ${issue.identifiers.join(', ')}`);
  }
  if (issues.length > 5) {
    console.log(`  ... 他 ${issues.length - 5} 件`);
  }
}

console.log(`\n\n合計: ${totalIssues} 件`);

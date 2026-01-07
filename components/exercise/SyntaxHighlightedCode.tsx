"use client";

import React from "react";
import { cn } from "@/lib/utils";

// VS Code Dark+ Colors (approximate) - Consistent with MobileCodeEditor
const COLORS = {
  background: "#1E1E1E",
  foreground: "#D4D4D4",
  keyword: "#569CD6", // Blue
  string: "#CE9178",  // Orange
  number: "#B5CEA8",  // Light Green
  comment: "#6A9955", // Green
  functionDef: "#DCDCAA", // Yellow
  decorator: "#DCDCAA", // Yellow
  builtIn: "#569CD6", // Blue
  variable: "#9CDCFE", // Light Blue
  bracket: "#FFD700", // Yellow
};

const LANGUAGE_CONFIG: Record<string, { keywords: Set<string>, builtins: Set<string>, commentPrefix: string }> = {
  python: {
    keywords: new Set(["def", "class", "return", "import", "from", "if", "elif", "else", "for", "while", "with", "as", "try", "except", "finally", "pass", "break", "continue", "lambda", "global", "nonlocal", "yield", "raise", "assert", "del", "async", "await", "f", "F"]),
    builtins: new Set(["print", "len", "range", "int", "str", "list", "dict", "set", "tuple", "bool", "True", "False", "None", "super", "open", "type", "id", "input"]),
    commentPrefix: "#",
  },
  javascript: {
    keywords: new Set(["function", "const", "let", "var", "if", "else", "for", "while", "do", "switch", "case", "break", "continue", "return", "import", "export", "from", "default", "class", "extends", "super", "this", "new", "try", "catch", "finally", "throw", "async", "await", "yield", "type", "interface", "enum"]),
    builtins: new Set(["console", "Math", "parseInt", "parseFloat", "JSON", "Promise", "Object", "Array", "String", "Number", "Boolean", "true", "false", "null", "undefined"]),
    commentPrefix: "//",
  },
  typescript: {
    keywords: new Set(["function", "const", "let", "var", "if", "else", "for", "while", "do", "switch", "case", "break", "continue", "return", "import", "export", "from", "default", "class", "extends", "super", "this", "new", "try", "catch", "finally", "throw", "async", "await", "yield", "type", "interface", "enum", "readonly", "public", "private", "protected", "abstract", "static", "namespace", "module"]),
    builtins: new Set(["console", "Math", "parseInt", "parseFloat", "JSON", "Promise", "Object", "Array", "String", "Number", "Boolean", "true", "false", "null", "undefined", "string", "number", "boolean", "any", "void", "never", "unknown"]),
    commentPrefix: "//",
  },
  java: {
    keywords: new Set(["public", "private", "protected", "static", "final", "class", "interface", "extends", "implements", "package", "import", "new", "this", "super", "if", "else", "for", "while", "do", "switch", "case", "break", "continue", "return", "try", "catch", "finally", "throw", "throws", "synchronized", "volatile", "transient", "native", "strictfp", "enum", "void"]),
    builtins: new Set(["String", "System", "Math", "Integer", "Long", "Double", "Float", "Boolean", "Byte", "Short", "Character", "Object", "true", "false", "null", "int", "long", "double", "float", "boolean", "byte", "short", "char"]),
    commentPrefix: "//",
  },
  c: {
    keywords: new Set(["if", "else", "for", "while", "do", "switch", "case", "break", "continue", "return", "struct", "enum", "union", "typedef", "sizeof", "static", "extern", "register", "volatile", "const", "auto", "void", "goto"]),
    builtins: new Set(["int", "long", "short", "char", "float", "double", "printf", "scanf", "malloc", "free", "NULL"]),
    commentPrefix: "//",
  },
  cpp: {
    keywords: new Set(["if", "else", "for", "while", "do", "switch", "case", "break", "continue", "return", "struct", "enum", "union", "typedef", "sizeof", "static", "extern", "volatile", "const", "auto", "void", "public", "private", "protected", "class", "template", "typename", "using", "namespace", "inline", "virtual", "override", "final", "constexpr", "new", "delete", "try", "catch", "throw", "noexcept", "decltype"]),
    builtins: new Set(["int", "long", "short", "char", "float", "double", "bool", "std", "cout", "cin", "endl", "vector", "string", "map", "set", "true", "false", "NULL"]),
    commentPrefix: "//",
  },
  csharp: {
    keywords: new Set(["public", "private", "protected", "static", "class", "interface", "struct", "enum", "if", "else", "for", "foreach", "while", "do", "switch", "case", "break", "continue", "return", "try", "catch", "finally", "throw", "new", "this", "base", "using", "namespace", "var", "partial", "async", "await", "yield", "lock", "delegate", "event", "readonly", "override", "virtual", "abstract", "in", "out", "ref"]),
    builtins: new Set(["Console", "Math", "String", "Int32", "Int64", "Double", "Single", "Boolean", "Object", "true", "false", "null", "int", "long", "double", "float", "bool", "string", "void"]),
    commentPrefix: "//",
  },
  go: {
    keywords: new Set(["package", "import", "func", "var", "const", "type", "struct", "interface", "if", "else", "for", "range", "switch", "case", "default", "select", "chan", "go", "defer", "return", "break", "continue", "goto", "fallthrough"]),
    builtins: new Set(["fmt", "Println", "Printf", "Print", "len", "cap", "append", "copy", "close", "panic", "recover", "make", "new", "bool", "string", "int", "float64", "true", "false", "nil"]),
    commentPrefix: "//",
  },
  rust: {
    keywords: new Set(["fn", "let", "mut", "const", "static", "if", "else", "for", "while", "loop", "match", "return", "break", "continue", "use", "mod", "pub", "crate", "self", "trait", "impl", "struct", "enum", "type", "where", "unsafe", "async", "await", "dyn", "ref", "move", "box", "as", "in"]),
    builtins: new Set(["println", "vec", "String", "Option", "Result", "Some", "None", "Ok", "Err", "bool", "char", "i32", "i64", "u32", "u64", "f32", "f64", "true", "false"]),
    commentPrefix: "//",
  },
  ruby: {
    keywords: new Set(["def", "class", "module", "if", "else", "elsif", "unless", "while", "until", "for", "in", "do", "end", "begin", "rescue", "ensure", "next", "break", "return", "yield", "self", "alias", "undef", "defined?", "super"]),
    builtins: new Set(["puts", "print", "gets", "require", "include", "nil", "true", "false", "Array", "Hash", "String", "Integer", "Float"]),
    commentPrefix: "#",
  },
  php: {
    keywords: new Set(["function", "class", "interface", "trait", "extends", "implements", "public", "private", "protected", "static", "final", "abstract", "const", "if", "else", "elseif", "foreach", "as", "while", "do", "switch", "case", "break", "continue", "return", "try", "catch", "finally", "throw", "new", "clone", "instanceof", "global", "namespace", "use", "var"]),
    builtins: new Set(["echo", "print", "list", "array", "include", "require", "isset", "empty", "null", "true", "false", "bool", "int", "string", "float"]),
    commentPrefix: "//",
  },
  bash: {
    keywords: new Set(["if", "then", "else", "elif", "fi", "for", "in", "do", "done", "while", "until", "case", "esac", "function", "select", "time", "[[", "]]", "declare", "export", "local", "readonly", "set", "unset", "shift", "trap", "exec", "eval", "source", "alias", "unalias"]),
    builtins: new Set(["echo", "printf", "read", "cd", "pwd", "ls", "grep", "cat", "true", "false"]),
    commentPrefix: "#",
  },
  haskell: {
    keywords: new Set(["module", "import", "where", "let", "in", "do", "if", "then", "else", "case", "of", "data", "type", "newtype", "class", "instance", "deriving", "default", "infix", "infixl", "infixr", "foreign", "forall"]),
    builtins: new Set(["putStrLn", "print", "show", "read", "fst", "snd", "Int", "Integer", "Float", "Double", "Bool", "String", "Char", "Maybe", "Just", "Nothing", "Right", "Left", "IO", "return"]),
    commentPrefix: "--",
  },
  elixir: {
    keywords: new Set(["def", "defmodule", "defp", "defmacro", "if", "else", "unless", "case", "cond", "with", "do", "end", "fn", "quote", "unquote", "receive", "after", "try", "catch", "rescue", "alias", "import", "require", "use"]),
    builtins: new Set(["IO", "puts", "inspect", "Enum", "Map", "List", "String", "Integer", "Float", "Atom", "nil", "true", "false"]),
    commentPrefix: "#",
  },
  lua: {
    keywords: new Set(["and", "break", "do", "else", "elseif", "end", "false", "for", "function", "goto", "if", "in", "local", "nil", "not", "or", "repeat", "return", "then", "true", "until", "while"]),
    builtins: new Set(["print", "pairs", "ipairs", "table", "string", "math", "io", "os", "debug", "assert", "error", "type", "tonumber", "tostring"]),
    commentPrefix: "--",
  },
  assembly: {
    keywords: new Set(["section", "global", "extern", "default", "mov", "add", "sub", "mul", "div", "jmp", "je", "jne", "jl", "jle", "jg", "jge", "call", "ret", "push", "pop", "inc", "dec", "cmp", "test", "and", "or", "xor", "not", "syscall"]),
    builtins: new Set(["db", "dw", "dd", "dq", "resb", "resw", "resd", "resq", "rax", "rbx", "rcx", "rdx", "rsi", "rdi", "rbp", "rsp", "r8", "r9", "r10", "r11", "r12", "r13", "r14", "r15", "eax", "ebx", "ecx", "edx", "esi", "edi", "ebp", "esp"]),
    commentPrefix: ";",
  },
  sql: {
    keywords: new Set(["SELECT", "FROM", "WHERE", "INSERT", "UPDATE", "DELETE", "CREATE", "DROP", "TABLE", "VALUES", "AND", "OR", "NOT", "NULL", "JOIN", "ON", "GROUP", "BY", "ORDER", "LIMIT", "AS", "INTO", "DISTINCT", "PRIMARY", "KEY", "FOREIGN", "REFERENCES"]),
    builtins: new Set(["COUNT", "SUM", "AVG", "MAX", "MIN", "UPPER", "LOWER", "COALESCE", "CONCAT"]),
    commentPrefix: "--",
  },
  kotlin: {
    keywords: new Set(["fun", "val", "var", "class", "object", "interface", "if", "else", "when", "for", "while", "do", "return", "break", "continue", "package", "import", "super", "this", "null", "true", "false", "try", "catch", "finally", "throw", "is", "in", "as", "typealias", "companion", "init", "constructor"]),
    builtins: new Set(["println", "print", "Array", "List", "Map", "Set", "Int", "String", "Boolean", "Double", "Float", "Long", "Short", "Byte", "Char"]),
    commentPrefix: "//",
  },
  swift: {
    keywords: new Set(["func", "var", "let", "if", "else", "switch", "case", "default", "for", "while", "repeat", "return", "break", "continue", "class", "struct", "enum", "extension", "protocol", "init", "deinit", "import", "guard", "defer", "in", "do", "try", "catch", "throw", "throws", "public", "private", "fileprivate", "internal", "open", "static", "self", "super", "true", "false", "nil"]),
    builtins: new Set(["print", "Array", "Dictionary", "Set", "String", "Int", "Double", "Float", "Bool", "Optional"]),
    commentPrefix: "//",
  },
  perl: {
    keywords: new Set(["my", "our", "local", "sub", "if", "unless", "while", "until", "foreach", "for", "do", "next", "last", "redo", "goto", "return", "package", "use", "require", "else", "elsif"]),
    builtins: new Set(["print", "say", "chomp", "split", "join", "map", "grep", "sort", "length", "push", "pop", "shift", "unshift", "keys", "values", "defined", "undef"]),
    commentPrefix: "#",
  },
};

interface SyntaxHighlightedCodeProps {
  code: string;
  language: string;
  className?: string;
}

export function SyntaxHighlightedCode({
  code,
  language,
  className,
}: SyntaxHighlightedCodeProps) {
  const config = LANGUAGE_CONFIG[language] || LANGUAGE_CONFIG.javascript;

  const tokenize = (text: string): string[] => {
    // Escape special characters for regex
    const commentPrefix = config.commentPrefix.replace(/[.*+?^${}()|[\\]/g, '\\$&');
    
    // Build the regex based on language features
    let commentPattern = `${commentPrefix}[^\\n]*`;
    if (['javascript', 'typescript', 'java', 'c', 'cpp', 'csharp', 'go', 'rust', 'php', 'kotlin', 'swift'].includes(language)) {
      commentPattern = '(?:\\/\\/[^\\n]*|\\/\\*.*?\\*\\/)';
    } else if (language === 'lua' || language === 'sql') {
      commentPattern = '(?:--\[\[.*?\]\]|--[^\\n]*)';
    } else if (language === 'haskell') {
      commentPattern = '(?:\\{-.*?-\\}|--[^\\n]*)';
    }

    let stringPattern = '[fFrb]*"[^"\\\\\n]*(?:\\\\.[^"\\\\\n]*)*"|[fFrb]*\'[^\'\\\\\n]*(?:\\\\.[^\'\\\\\n]*)*\'';
    if (language === 'javascript' || language === 'typescript' || language === 'go') {
      stringPattern += '|`[^`\\\\\n]*(?:\\\\.[^`\\\\\n]*)*`';
    }
    if (language === 'python') {
      stringPattern += '|[fFrb]*"""[^"\\\\]*(?:\\\\.[^"\\\\]*)*"""|[fFrb]*\'\'\'[^\'\\\\]*(?:\\\\.[^\'\\\\]*)*\'\'\'';
    }

    const regex = new RegExp(`(${stringPattern}|${commentPattern}|@[a-zA-Z0-9_]+|[a-zA-Z_][a-zA-Z0-9_]*|\\d+|\\s+|[^\\s\\w])`, 'g');
    const initialTokens = text.split(regex).filter(Boolean);

    const processedTokens: string[] = [];
    initialTokens.forEach(token => {
      // Python F-string
      if (language === 'python') {
        const fstringMatch = token.match(/^([fF])(["']|"{3}|'{3})(.*)(\2)$/s);
        if (fstringMatch) {
          const [_, prefix, quote, content, closingQuote] = fstringMatch;
          processedTokens.push(prefix);
          processedTokens.push(quote);
          const parts = content.split(/(\{.*?\})/g);
          parts.forEach(part => {
            if (part.startsWith('{') && part.endsWith('}')) {
              processedTokens.push('{');
              processedTokens.push(part.slice(1, -1));
              processedTokens.push('}');
            } else if (part) {
              processedTokens.push(part + '\u200B');
            }
          });
          processedTokens.push(closingQuote);
          return;
        }
      }

      // JS/TS Template Literals
      if (language === 'javascript' || language === 'typescript') {
        if (token.startsWith('`') && token.endsWith('`') && token.length > 1) {
          processedTokens.push('`');
          const content = token.slice(1, -1);
          const parts = content.split(/(\\\$\\{.*?\")/g);
          parts.forEach(part => {
            if (part.startsWith('${') && part.endsWith('}')) {
              processedTokens.push('${');
              processedTokens.push(part.slice(2, -1));
              processedTokens.push('}');
            } else if (part) {
              processedTokens.push(part + '\u200B');
            }
          });
          processedTokens.push('`');
          return;
        }
      }

      // Ruby Interpolation
      if (language === 'ruby') {
        if (token.startsWith('"') && token.endsWith('"') && token.length > 1) {
          processedTokens.push('"');
          const content = token.slice(1, -1);
          const parts = content.split(/(\\#\{.*?\})/g);
          parts.forEach(part => {
            if (part.startsWith('#{') && part.endsWith('}')) {
              processedTokens.push('#{');
              processedTokens.push(part.slice(2, -1));
              processedTokens.push('}');
            } else if (part) {
              processedTokens.push(part + '\u200B');
            }
          });
          processedTokens.push('"');
          return;
        }
      }

      // PHP Interpolation
      if (language === 'php') {
        if (token.startsWith('"') && token.endsWith('"') && token.length > 1) {
          processedTokens.push('"');
          const content = token.slice(1, -1);
          const parts = content.split(/(\{\$|\\$ .[a-zA-Z0-9_]*)/g);
          parts.forEach(part => {
            if (part.startsWith('{$') && part.endsWith('}')) {
              processedTokens.push('{$');
              processedTokens.push(part.slice(2, -1));
              processedTokens.push('}');
            } else if (part.startsWith('$')) {
              processedTokens.push(part);
            } else if (part) {
              processedTokens.push(part + '\u200B');
            }
          });
          processedTokens.push('"');
          return;
        }
      }

      // Swift Interpolation
      if (language === 'swift') {
        if (token.startsWith('"') && token.endsWith('"') && token.length > 1) {
          processedTokens.push('"');
          const content = token.slice(1, -1);
          const parts = content.split(/(\\\(.*?\")/g);
          parts.forEach(part => {
            if (part.startsWith('\\(') && part.endsWith(')')) {
              processedTokens.push('\\(');
              processedTokens.push(part.slice(2, -1));
              processedTokens.push(')');
            } else if (part) {
              processedTokens.push(part + '\u200B');
            }
          });
          processedTokens.push('"');
          return;
        }
      }

      // Kotlin Interpolation
      if (language === 'kotlin') {
        if (token.startsWith('"') && token.endsWith('"') && token.length > 1) {
          processedTokens.push('"');
          const content = token.slice(1, -1);
          const parts = content.split(/(\\\$\\{.*?\}|\\$ .[a-zA-Z0-9_]*)/g);
          parts.forEach(part => {
            if (part.startsWith('${') && part.endsWith('}')) {
              processedTokens.push('${');
              processedTokens.push(part.slice(2, -1));
              processedTokens.push('}');
            } else if (part.startsWith('$')) {
              processedTokens.push(part);
            } else if (part) {
              processedTokens.push(part + '\u200B');
            }
          });
          processedTokens.push('"');
          return;
        }
      }

      processedTokens.push(token);
    });
    return processedTokens;
  };

  const getTokenStyle = (token: string, prevToken?: string) => {
    if (!token) return {};

    // F-string / Template literal content marker
    if (token.endsWith('\u200B')) return { color: COLORS.string };

    // String
    if (token.startsWith("\"") || token.startsWith("'" ) || token.startsWith("`")) return { color: COLORS.string };
    
    // Comment
    const isComment = token.startsWith(config.commentPrefix) || token.startsWith("//") || token.startsWith("/*") || token.startsWith("--") || token.startsWith("{- ") || token.startsWith(";");
    if (isComment) return { color: COLORS.comment };
    
    // Decorator
    if (token.startsWith("@")) return { color: COLORS.decorator };

    // Number
    if (/^\\d+$/.test(token)) return { color: COLORS.number };

    // Keywords & Built-ins
    if (config.keywords.has(token)) return { color: COLORS.keyword };
    if (config.builtins.has(token)) return { color: COLORS.builtIn };

    // Brackets (including f-string braces, JS template ${ }, Ruby #{ }, Swift \( ), Kotlin ${ })
    if (/[(){}\[\]]/.test(token) || token === '${' || token === '#{' || token === '{$' || token === '\(') return { color: "#FFD700" }; // Yellow for brackets

    // Function Definition (prev token was 'def' or 'function')
    const isFuncDefKeyword = prevToken === "def" || prevToken === "function" || prevToken === "fn" || prevToken === "func";
    if (prevToken && isFuncDefKeyword) {
      return { color: COLORS.functionDef };
    }

    // Identifiers (variables like 'age', or PHP/Kotlin variables starting with $)
    if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(token) || (language === 'php' && token.startsWith('$')) || (language === 'kotlin' && token.startsWith('$'))) return { color: COLORS.variable };

    // Default Foreground / Operators / Punctuation
    if (/[.,]/.test(token)) return { color: COLORS.foreground };
    if (/[=+\-*\/%&|^<>]/.test(token)) return { color: COLORS.foreground };

    return { color: COLORS.foreground };
  };

  const lines = code.split('\n');

  return (
    <div
      className={cn(
        "font-mono text-sm leading-6 p-4 rounded-lg overflow-x-auto",
        className
      )}
      style={{ backgroundColor: COLORS.background, color: COLORS.foreground }}
    >
      {lines.map((line, i) => {
        const tokens = tokenize(line);
        let lastNonWhitespace = "";
        return (
          <div key={i} className="min-h-[1.5rem] whitespace-pre">
            {tokens.map((token, j) => {
              const style = getTokenStyle(token, lastNonWhitespace);
              if (token.trim()) lastNonWhitespace = token;
              return (
                <span key={j} style={style}>
                  {token.replace(/\u200B/g, "")}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
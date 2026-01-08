"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Delete, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileCodeEditorProps {
  initialCode: string;
  correctCode?: string;
  language: string;
  onChange?: (value: string) => void;
  onRun?: (code: string) => void;
  onCursorChange?: (line: number, col: number) => void;
  readOnly?: boolean;
}

// VS Code Dark+ Colors (approximate)
const COLORS = {
  background: "#1E1E1E",
  foreground: "#D4D4D4",
  caret: "#D4D4D4",
  lineNumberForeground: "#858585",
  gutterBackground: "#1E1E1E",
  selection: "#264F78",
  keyword: "#569CD6", // Blue
  string: "#CE9178",  // Orange
  number: "#B5CEA8",  // Light Green
  comment: "#6A9955", // Green
  functionDef: "#DCDCAA", // Yellow
  decorator: "#DCDCAA", // Yellow
  builtIn: "#569CD6", // Blue (User requested Blue for print)
  panelBackground: "#252526",
  buttonBackground: "#333333",
  buttonBorder: "#454545",
  buttonText: "#CCCCCC",
  matchedBrace: "#D4D4D4",
  error: "#F44336",
};

// Language configurations for syntax highlighting
const LANGUAGE_CONFIG: Record<string, { keywords: Set<string>, builtins: Set<string>, commentPrefix: string }> = {
  python: {
    keywords: new Set(["def", "class", "return", "import", "from", "if", "elif", "else", "for", "while", "with", "as", "try", "except", "finally", "pass", "break", "continue", "lambda", "global", "nonlocal", "yield", "raise", "assert", "del", "async", "await"]),
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

// コードの正規化: インデントと必要なスペース（単語間）を維持し、記号周りの不要なスペースを削除
const normalizeCode = (str: string) => {
  if (!str) return "";
  // 1. 先頭の空白（インデント）を保持
  const leadingMatch = str.match(/^(\s*)/);
  const leading = leadingMatch ? leadingMatch[0] : "";
  const content = str.slice(leading.length).trim();

  // 2. 内部の正規化
  let normalized = content
    .replace(/\s+/g, " ") // 連続する空白を1つに
    .replace(/\s*([()\[\]{}:.,=+*/%&|^<>!])\s*/g, "$1"); // 記号周りの空白を削除

  return leading + normalized;
};

export function MobileCodeEditor({
  initialCode,
  correctCode = "",
  language,
  onChange,
  onRun,
  onCursorChange,
  readOnly = false,
}: MobileCodeEditorProps) {
  const config = LANGUAGE_CONFIG[language] || LANGUAGE_CONFIG.javascript;

  // 各行の最小カラム位置（インデントの長さ）を計算
  const minCols = React.useMemo(() => {
    return initialCode.split("\n").map(line => {
      const match = line.match(/^(\s*)/);
      return match ? match[0].length : 0;
    });
  }, [initialCode]);

  const [lines, setLines] = useState<string[]>(() => {
    return initialCode.split("\n").map((line, i) => {
      if (line.includes("___")) {
        // インデント部分だけを抽出して残す
        const match = line.match(/^(\s*)/);
        return match ? match[0] : "";
      }
      return line;
    });
  });
  
  const [cursor, setCursor] = useState(() => {
    const initLines = initialCode.split("\n").map(line => {
      if (line.includes("___")) {
        const match = line.match(/^(\s*)/);
        return match ? match[0] : "";
      }
      return line;
    });
    if (!correctCode) return { line: 0, col: 0 };
    
    const correctLines = correctCode.split("\n");
    for (let i = 0; i < initLines.length; i++) {
      if (initLines[i] !== correctLines[i]) {
        // 最初の虫食い行のインデントの直後にカーソルを置く
        return { line: i, col: minCols[i] };
      }
    }
    return { line: 0, col: 0 };
  });

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Tokenize line for highlighting and processing
  const tokenize = (text: string): string[] => {
    const commentPrefix = config.commentPrefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Build the regex based on language features
    let commentPattern = `${commentPrefix}[^\\n]*`;
    if (language === 'javascript' || language === 'typescript' || language === 'java' || language === 'c' || language === 'cpp' || language === 'csharp' || language === 'go' || language === 'rust' || language === 'php' || language === 'kotlin' || language === 'swift') {
      commentPattern = `(?:\\/\\/[^\\n]*|\\/\\*.*?\\*\\/)`;
    } else if (language === 'lua' || language === 'sql') {
      commentPattern = `(?:--\\[\\[.*?\\]\\]|--[^\\n]*)`;
    } else if (language === 'haskell') {
      commentPattern = `(?:\\{-.*?-\\}|--[^\\n]*)`;
    }

    let stringPattern = `"[^"\\\\\\n]*(?:\\\\.[^"\\\\\\n]*)*"|'[^'\\\\\\n]*(?:\\\\.[^'\\\\\\n]*)*'`;
    if (language === 'javascript' || language === 'typescript' || language === 'go') {
      stringPattern += "|`[^`\\\\\\n]*(?:\\\\.[^`\\\\\\n]*)*`";
    }
    if (language === 'python') {
      stringPattern += `|"{3}[^"\\\\]*(?:\\\\.[^"\\\\]*)*"{3}|'{3}[^'\\\\]*(?:\\\\.[^'\\\\]*)*'{3}`;
    }

    // **を単一トークンとして認識（*argsや**kwargs用）
    const regex = new RegExp(`(${stringPattern}|${commentPattern}|@[a-zA-Z0-9_]+|[a-zA-Z_][a-zA-Z0-9_]*|\\d+|\\s+|\\*\\*|[^\\s\\w])`, 'g');
    return text.split(regex).filter(Boolean);
  };

  // Determine color for a token based on context (previous token)
  const getTokenStyle = (token: string, prevToken?: string) => {
    if (!token) return {};

    // String
    if (token.startsWith("\"") || token.startsWith("'") || token.startsWith("`")) return { color: COLORS.string };
    
    // Comment
    const isComment = token.startsWith(config.commentPrefix) || token.startsWith("//") || token.startsWith("/*") || token.startsWith("--") || token.startsWith("{-") || token.startsWith(";");
    if (isComment) return { color: COLORS.comment };
    
    // Decorator
    if (token.startsWith("@")) return { color: COLORS.decorator };

    // Number
    if (/^\d+$/.test(token)) return { color: COLORS.number };

    // Keywords & Built-ins
    if (config.keywords.has(token)) return { color: COLORS.keyword };
    if (config.builtins.has(token)) return { color: COLORS.builtIn };

    // Function Definition (prev token was 'def' or 'function')
    const isFuncDefKeyword = prevToken === "def" || prevToken === "function" || prevToken === "fn" || prevToken === "func";
    if (prevToken && isFuncDefKeyword) {
      return { color: COLORS.functionDef };
    }

    // Default Foreground / Operators / Punctuation
    if (/[(){}\[\]]/.test(token)) return { color: "#FFD700" }; // Yellow for brackets
    if (/[.,]/.test(token)) return { color: COLORS.foreground };
    if (/[=+\-*\/\%&|^<>!]/.test(token)) return { color: COLORS.foreground };

    return { color: COLORS.foreground };
  };

  useEffect(() => {
    if (!correctCode) return;

    const correctLines = correctCode.split("\n");
    const targetLine = correctLines[cursor.line] || "";
    // 選択肢から除外する記号（ただし*は*args/**kwargs用に残す）
    const keypadItems = new Set(['=', '+', '-', '/', '%', '(', ')']);

    if (targetLine.trim()) {
      const tokens = tokenize(targetLine);
      const expandedTokens: string[] = [];

      for (const token of tokens) {
        // f-string/テンプレートリテラル内の{...}や${...}や#{...}から変数名を抽出し、文字列部分も選択肢に追加
        // Python: f'{...}', JavaScript/TypeScript: `${...}`, Ruby/Elixir: "#{...}"
        const isStringWithInterpolation =
          ((token.startsWith('"') || token.startsWith("'")) && (token.includes('{') || token.includes('#{'))) ||
          (token.startsWith('`') && token.includes('${'));

        if (isStringWithInterpolation) {
          // 文字列内の{...}や${...}や#{...}パターンを抽出
          const fstringMatches = token.matchAll(/[#$]?\{([^}]+)\}/g);
          for (const match of fstringMatches) {
            const innerContent = match[1];
            // 内部のドット記法やメソッド呼び出しも分割（例: s.name -> s, name）
            const parts = innerContent.split(/[.\[\]()]+/).filter(p => p.trim() && /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(p));
            expandedTokens.push(...parts);
          }
          // 中括弧を選択肢に追加（f-string/テンプレートリテラル用）
          expandedTokens.push('{', '}');
          // f-string/テンプレートリテラル内の文字列部分も選択肢に追加（{...}や${...}や#{...}を除いた部分）
          const stringParts = token.replace(/[#$]?\{[^}]+\}/g, '').replace(/^['"`]|['"`]$/g, '');
          if (stringParts.trim()) {
            // カンマや記号で分割して個別に追加
            const textParts = stringParts.split(/([,!?.:;])/);
            for (const part of textParts) {
              if (part.trim()) {
                expandedTokens.push(part.trim());
              }
            }
          }
        } else {
          expandedTokens.push(token);
        }
      }

      const filtered = expandedTokens.filter(t => t.trim().length > 0 && !keypadItems.has(t));
      const unique = Array.from(new Set(filtered));
      const shuffled = [...unique].sort(() => Math.random() - 0.5);
      setSuggestions(shuffled);
    } else {
      setSuggestions([]);
    }
  }, [cursor.line, correctCode]);

  useEffect(() => {
    const newCode = lines.join("\n");
    onChange?.(newCode);
  }, [lines, onChange]);

  const handleInsert = (text: string) => {
    const currentLine = lines[cursor.line] || "";
    const before = currentLine.slice(0, cursor.col);
    const after = currentLine.slice(cursor.col);
    const newLineContent = before + text + after;

    let nextLine = cursor.line;
    let nextCol = cursor.col + text.length;

    if (correctCode) {
      const correctLines = correctCode.split("\n");
      const targetLine = correctLines[cursor.line] || "";

      // 正規化した内容で比較
      if (normalizeCode(newLineContent) === normalizeCode(targetLine)) {
        // Line completed!
        
        // Check if full code is correct (including this new line)
        const newFullLines = lines.map((l, i) => i === cursor.line ? newLineContent : l);
        const newFullCode = newFullLines.join("\n");
        
        const normalizedFullLines = newFullLines.map(l => normalizeCode(l)).join("\n");
        const normalizedCorrectFullLines = correctLines.map(l => normalizeCode(l)).join("\n");

        if (normalizedFullLines.trim() === normalizedCorrectFullLines.trim()) {
          onRun?.(newFullCode);
        } else {
          let next = cursor.line + 1;
          while (next < lines.length) {
             const currentVal = lines[next];
             const correctVal = correctLines[next];
             if (normalizeCode(currentVal) !== normalizeCode(correctVal)) {
                 break;
             }
             next++;
          }
          if (next < lines.length) {
              nextLine = next;
              nextCol = minCols[next]; // 次の行のインデントの直後に移動
          }
        }
      }
    }

    setLines((prev) => {
      const newLines = [...prev];
      newLines[cursor.line] = newLineContent;
      return newLines;
    });
    setCursor({ line: nextLine, col: nextCol });
  };

  const handleDelete = () => {
    // インデント位置より後ろにカーソルがある場合のみ削除を許可
    if (cursor.col > minCols[cursor.line]) {
      const currentLine = lines[cursor.line] || "";
      const textBefore = currentLine.slice(0, cursor.col);
      const textAfter = currentLine.slice(cursor.col);
      let deleteCount = 1;

      // 1. Check for complete string literal at the end (e.g. 'Python' or "Hello")
      const stringMatch = textBefore.match(/(['"])[^'"]+\1$/);
      
      if (stringMatch) {
        deleteCount = stringMatch[0].length;
      } else {
        // 2. Check for trailing whitespace
        const trailingSpace = textBefore.match(/\s+$/);
        if (trailingSpace) {
          deleteCount = trailingSpace[0].length;
        } else {
          // 3. Check for trailing word (alphanumeric + underscore)
          const trailingWord = textBefore.match(/[a-zA-Z0-9_]+$/);
          if (trailingWord) {
            deleteCount = trailingWord[0].length;
          } else {
            // 4. Fallback to 1 character
            deleteCount = 1;
          }
        }
      }

      // インデントを越えて削除しないように調整
      const newCol = Math.max(minCols[cursor.line], cursor.col - deleteCount);
      const actualDeleteCount = cursor.col - newCol;

      setLines((prev) => {
        const newLines = [...prev];
        const lineContent = newLines[cursor.line] || "";
        const before = lineContent.slice(0, cursor.col - actualDeleteCount);
        newLines[cursor.line] = before + textAfter;
        return newLines;
      });
      setCursor((prev) => ({ ...prev, col: newCol }));
    } else if (cursor.line > 0) {
      // 前の行へ戻る（インデント位置まで）
      // ... 既存のロジックを微調整
      setCursor((prev) => {
        const prevLineIdx = prev.line - 1;
        return {
          line: prevLineIdx,
          col: lines[prevLineIdx].length,
        };
      });
    }
  };

  const moveCursor = (direction: "left" | "right") => {
    if (direction === "left") {
      if (cursor.col > minCols[cursor.line]) {
        setCursor((prev) => ({ ...prev, col: prev.col - 1 }));
      } else if (cursor.line > 0) {
        setCursor((prev) => ({
          line: prev.line - 1,
          col: lines[prev.line - 1].length,
        }));
      }
    } else {
      if (cursor.col < lines[cursor.line].length) {
        setCursor((prev) => ({ ...prev, col: prev.col + 1 }));
      } else if (cursor.line < lines.length - 1) {
        setCursor((prev) => ({ line: prev.line + 1, col: minCols[prev.line + 1] }));
      }
    }
  };

  useEffect(() => {
    const activeLineEl = containerRef.current?.querySelector(`[data-line="${cursor.line}"]`);
    if (activeLineEl) {
      activeLineEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
    // カーソル位置の変更を通知
    onCursorChange?.(cursor.line, cursor.col);
  }, [cursor.line, cursor.col, onCursorChange]);

  const renderLineContent = (line: string, lineIndex: number) => {
    const tokens = tokenize(line);
    const result: JSX.Element[] = [];
    
    const renderTokens = (tokenList: string[], insertCursorAt?: number) => {
      let currentLen = 0;
      let lastNonWhitespace = "";
      let cursorRendered = false;

      tokenList.forEach((token, i) => {
        const nextLen = currentLen + token.length;
        const style = getTokenStyle(token, lastNonWhitespace);
        if (token.trim()) lastNonWhitespace = token;

        if (insertCursorAt !== undefined && !cursorRendered && insertCursorAt >= currentLen && insertCursorAt < nextLen) {
            const splitIndex = insertCursorAt - currentLen;
            const before = token.slice(0, splitIndex);
            const after = token.slice(splitIndex);
            
            if (before) result.push(<span key={`${i}-b`} style={style}>{before}</span>);
            result.push(<span key="cursor" className="inline-block w-[2px] h-[1.2em] bg-blue-500 align-middle animate-pulse -mb-1"></span>);
            if (after) result.push(<span key={`${i}-a`} style={style}>{after}</span>);
            
            cursorRendered = true;
        } else {
            result.push(<span key={i} style={style}>{token}</span>);
        }
        currentLen = nextLen;
      });

      if (insertCursorAt !== undefined && !cursorRendered) {
         result.push(<span key="cursor-end" className="inline-block w-[2px] h-[1.2em] bg-blue-500 align-middle animate-pulse -mb-1"></span>);
      }
    };

    if (lineIndex !== cursor.line) {
        if (tokens.length === 0) return <span className="invisible">A</span>;
        renderTokens(tokens);
    } else {
        if (line.length === 0) {
            return <span key="empty-cursor" className="inline-block w-[2px] h-[1.2em] bg-blue-500 align-middle animate-pulse -mb-1"></span>;
        }
        renderTokens(tokens, cursor.col);
    }

    return result;
  };

  return (
    <div className="flex flex-col h-full overflow-hidden" style={{ backgroundColor: COLORS.background, color: COLORS.foreground }}>
      <div
        ref={containerRef}
        className="overflow-y-scroll overflow-x-hidden p-2 sm:p-4 font-mono text-sm leading-6 flex-1 min-h-[400px] lg:min-h-0"
        style={{ scrollbarWidth: 'thin', scrollbarColor: `${COLORS.buttonBorder} ${COLORS.gutterBackground}` }}
        onClick={() => {}}
      >
        {lines.map((line, lineIndex) => {
          const targetLine = correctCode ? correctCode.split("\n")[lineIndex] || "" : "";
          const trimmedTarget = targetLine.trim();
          const isComment = trimmedTarget.startsWith("//") || 
                           trimmedTarget.startsWith("#") || 
                           trimmedTarget.startsWith("/*") || 
                           trimmedTarget.startsWith("*");
          
          // この行が元々虫食い（___）を含んでいたかどうかを判定
          // 判定には加工前の initialCode を使用する
          const originalLines = initialCode.split("\n");
          const isHoley = originalLines[lineIndex]?.includes("___");
          
          // チェックマークを表示する条件：
          // 1. 元々虫食い行である
          // 2. 現在の入力内容が（正規化して）正解と一致している
          const showCheckmark = isHoley && targetLine && normalizeCode(line) === normalizeCode(targetLine);

          return (
            <div
              key={lineIndex}
              data-line={lineIndex}
              className={cn(
                "flex relative min-h-[1.5rem]",
                lineIndex === cursor.line ? "bg-[#323232]" : "",
                // 現在の行で虫食い行の場合のみクリック可能
                isComment || !isHoley || lineIndex !== cursor.line ? "cursor-default" : "cursor-text"
              )}
              onClick={(e) => {
                e.stopPropagation();
                // コメント行と完成済みの行、および現在の行以外はクリック不可
                if (!isComment && isHoley && lineIndex === cursor.line) {
                  // クリック位置からカラム位置を計算
                  const target = e.currentTarget;
                  const textContent = target.querySelector('.whitespace-pre') as HTMLElement;
                  if (textContent) {
                    const rect = textContent.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    // 文字幅を計算（モノスペースフォントなので均等）
                    const computedStyle = window.getComputedStyle(textContent);
                    const fontSize = parseFloat(computedStyle.fontSize);
                    const charWidth = fontSize * 0.6; // モノスペースフォントの文字幅は約0.6em
                    const clickedCol = Math.floor(clickX / charWidth);
                    // 有効な範囲にクランプ（インデント位置〜行末）
                    const col = Math.max(minCols[lineIndex], Math.min(clickedCol, line.length));
                    setCursor({ line: lineIndex, col });
                  } else {
                    setCursor({ line: lineIndex, col: Math.max(minCols[lineIndex], line.length) });
                  }
                }
              }}
            >
              <div 
                className="w-8 mr-4 flex items-center justify-end shrink-0 select-none"
                style={{ backgroundColor: COLORS.gutterBackground, color: COLORS.lineNumberForeground }}
              >
                {showCheckmark ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <span style={{ color: COLORS.lineNumberForeground }}>{lineIndex + 1}</span>
                )}
              </div>

              <div className="whitespace-pre flex-1 relative">
                {renderLineContent(line, lineIndex)}
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="border-t p-1 sm:p-2 flex-shrink-0"
        style={{
          backgroundColor: COLORS.background,
          borderColor: COLORS.buttonBorder
        }}
      >
        <div className="flex flex-col gap-1 sm:gap-2 mb-2 w-full max-h-[160px] overflow-y-auto scrollbar-hide p-1">
          {(() => {
            if (suggestions.length === 0) {
              return (
                <div className="flex justify-center items-center min-h-[36px]">
                  <span className="text-xs px-2 py-1.5 sm:px-2 sm:py-2" style={{ color: COLORS.comment }}>ヒントはありません</span>
                </div>
              );
            }

            // flex-wrapで自動的に折り返し、ボタンは内容に合わせたサイズに
            return (
              <div className="flex flex-wrap w-full gap-1 sm:gap-2">
                {suggestions.map((token, idx) => (
                  <button
                    key={`${token}-${idx}`}
                    onClick={() => handleInsert(token)}
                    style={{
                      backgroundColor: COLORS.buttonBackground,
                      borderColor: COLORS.buttonBorder,
                      ...getTokenStyle(token)
                    }}
                    className="flex-shrink-0 px-2 py-1.5 sm:px-3 sm:py-2 rounded font-mono font-bold border active:scale-95 transition-transform text-xs sm:text-lg lg:text-2xl whitespace-nowrap"
                  >
                    {token}
                  </button>
                ))}
              </div>
            );
          })()}
        </div>

        <div className="flex flex-col gap-1 sm:gap-2 mb-2">
          {(() => {
            const keypadItems = ['=', '+', '-', '/', '*', '%', '(', ')', "'"];
            const count = keypadItems.length;
            // 9個の場合、2行に分けてバランスを取る（5+4）
            const numRows = count > 6 ? 2 : 1;
            const itemsPerRow = Math.ceil(count / numRows);
            const rows = [];
            for (let i = 0; i < count; i += itemsPerRow) {
              rows.push(keypadItems.slice(i, i + itemsPerRow));
            }

            return rows.map((row, rowIdx) => (
              <div key={rowIdx} className="flex w-full gap-1 sm:gap-2">
                {row.map((char) => (
                  <button
                    key={char}
                    onClick={() => handleInsert(char)}
                    style={{
                      backgroundColor: COLORS.buttonBackground,
                      borderColor: COLORS.buttonBorder,
                      ...getTokenStyle(char)
                    }}
                    className="flex-auto px-3 py-1.5 sm:px-4 sm:py-2 rounded font-mono font-bold border active:scale-95 transition-transform text-xs sm:text-lg lg:text-2xl truncate"
                  >
                    {char}
                  </button>
                ))}
              </div>
            ));
          })()}
        </div>

        <div className="grid grid-cols-4 gap-1 sm:gap-2 min-h-[36px]">
          <Button
            variant="secondary"
            style={{ backgroundColor: COLORS.buttonBackground, color: COLORS.buttonText, borderColor: COLORS.buttonBorder }}
            className="h-9 sm:h-12 border text-sm sm:text-lg lg:text-2xl"
            onClick={() => moveCursor("left")}
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </Button>
          <Button
            variant="secondary"
            style={{ backgroundColor: COLORS.buttonBackground, color: COLORS.buttonText, borderColor: COLORS.buttonBorder }}
            className="h-9 sm:h-12 border text-sm sm:text-lg lg:text-2xl"
            onClick={() => moveCursor("right")}
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </Button>
          <Button
            variant="secondary"
            style={{ backgroundColor: COLORS.buttonBackground, color: COLORS.buttonText, borderColor: COLORS.buttonBorder }}
            className="h-9 sm:h-12 border text-sm sm:text-lg lg:text-2xl"
            onClick={() => handleInsert(" ")}
          >
            <div className="border px-1 py-0.5 sm:px-2 rounded text-[11px] sm:text-sm lg:text-lg" style={{ borderColor: COLORS.foreground }}>Space</div>
          </Button>
          <Button
            variant="destructive"
            style={{ borderColor: COLORS.buttonBorder }}
            className="h-9 sm:h-12 bg-red-900/50 hover:bg-red-900/80 text-white border text-sm sm:text-lg lg:text-2xl"
            onClick={handleDelete}
            disabled={cursor.line === 0 && cursor.col <= minCols[0]}
          >
            <Delete className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}

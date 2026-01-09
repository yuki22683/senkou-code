// 共通シンタックスハイライト定義
// 全てのコード表示コンポーネントで使用

// VS Code Dark+ Colors (approximate)
export const SYNTAX_COLORS = {
  background: "#1E1E1E",
  foreground: "#D4D4D4",
  keyword: "#569CD6",      // Blue
  string: "#CE9178",       // Orange
  number: "#B5CEA8",       // Light Green
  comment: "#6A9955",      // Green
  functionDef: "#DCDCAA",  // Yellow
  decorator: "#DCDCAA",    // Yellow
  builtIn: "#569CD6",      // Blue
  variable: "#9CDCFE",     // Light Blue
  bracket: "#FFD700",      // Yellow
  // UI関連
  lineNumberForeground: "#858585",
  gutterBackground: "#1E1E1E",
  selection: "#264F78",
  panelBackground: "#252526",
  buttonBackground: "#333333",
  buttonBorder: "#454545",
  buttonText: "#CCCCCC",
  error: "#F44336",
};

// 言語設定
export const LANGUAGE_CONFIG: Record<string, { keywords: Set<string>, builtins: Set<string>, commentPrefix: string }> = {
  python: {
    // True, False, None are technically keywords in Python 3, but kept in builtins for coloring consistency
    keywords: new Set(["def", "class", "return", "import", "from", "if", "elif", "else", "for", "in", "while", "with", "as", "try", "except", "finally", "pass", "break", "continue", "lambda", "global", "nonlocal", "yield", "raise", "assert", "del", "async", "await", "and", "or", "not", "is"]),
    builtins: new Set(["print", "len", "range", "int", "str", "list", "dict", "set", "tuple", "bool", "True", "False", "None", "super", "open", "type", "id", "input"]),
    commentPrefix: "#",
  },
  javascript: {
    keywords: new Set(["function", "const", "let", "var", "if", "else", "for", "while", "do", "switch", "case", "break", "continue", "return", "import", "export", "from", "default", "class", "extends", "super", "this", "new", "try", "catch", "finally", "throw", "async", "await", "yield", "typeof", "instanceof", "in", "of", "delete", "void", "debugger"]),
    builtins: new Set(["console", "Math", "parseInt", "parseFloat", "JSON", "Promise", "Object", "Array", "String", "Number", "Boolean", "true", "false", "null", "undefined"]),
    commentPrefix: "//",
  },
  typescript: {
    keywords: new Set(["function", "const", "let", "var", "if", "else", "for", "while", "do", "switch", "case", "break", "continue", "return", "import", "export", "from", "default", "class", "extends", "super", "this", "new", "try", "catch", "finally", "throw", "async", "await", "yield", "type", "interface", "enum", "readonly", "public", "private", "protected", "abstract", "static", "namespace", "module", "declare", "implements", "as", "is", "keyof", "infer", "typeof", "instanceof", "in", "of", "delete", "void", "debugger"]),
    builtins: new Set(["console", "Math", "parseInt", "parseFloat", "JSON", "Promise", "Object", "Array", "String", "Number", "Boolean", "true", "false", "null", "undefined", "string", "number", "boolean", "any", "void", "never", "unknown"]),
    commentPrefix: "//",
  },
  java: {
    keywords: new Set(["public", "private", "protected", "static", "final", "class", "interface", "extends", "implements", "package", "import", "new", "this", "super", "if", "else", "for", "while", "do", "switch", "case", "break", "continue", "return", "try", "catch", "finally", "throw", "throws", "synchronized", "volatile", "transient", "native", "strictfp", "enum", "void", "abstract", "default", "instanceof", "assert"]),
    builtins: new Set(["String", "System", "Math", "Integer", "Long", "Double", "Float", "Boolean", "Byte", "Short", "Character", "Object", "true", "false", "null", "int", "long", "double", "float", "boolean", "byte", "short", "char"]),
    commentPrefix: "//",
  },
  c: {
    keywords: new Set(["if", "else", "for", "while", "do", "switch", "case", "break", "continue", "return", "struct", "enum", "union", "typedef", "sizeof", "static", "extern", "register", "volatile", "const", "auto", "void", "goto", "inline", "restrict", "default"]),
    builtins: new Set(["int", "long", "short", "char", "float", "double", "printf", "scanf", "malloc", "free", "NULL", "size_t"]),
    commentPrefix: "//",
  },
  cpp: {
    keywords: new Set(["if", "else", "for", "while", "do", "switch", "case", "break", "continue", "return", "struct", "enum", "union", "typedef", "sizeof", "static", "extern", "volatile", "const", "auto", "void", "public", "private", "protected", "class", "template", "typename", "using", "namespace", "inline", "virtual", "override", "final", "constexpr", "new", "delete", "try", "catch", "throw", "noexcept", "decltype", "mutable", "explicit", "friend", "operator", "this", "default", "nullptr", "static_cast", "dynamic_cast", "const_cast", "reinterpret_cast", "register"]),
    builtins: new Set(["int", "long", "short", "char", "float", "double", "bool", "std", "cout", "cin", "endl", "vector", "string", "map", "set", "true", "false", "NULL", "size_t"]),
    commentPrefix: "//",
  },
  csharp: {
    keywords: new Set(["public", "private", "protected", "internal", "static", "class", "interface", "struct", "enum", "if", "else", "for", "foreach", "while", "do", "switch", "case", "break", "continue", "return", "try", "catch", "finally", "throw", "new", "this", "base", "using", "namespace", "var", "partial", "async", "await", "yield", "lock", "delegate", "event", "readonly", "override", "virtual", "abstract", "sealed", "in", "out", "ref", "params", "default", "typeof", "sizeof", "checked", "unchecked", "fixed", "unsafe", "is", "as", "const", "extern", "implicit", "explicit", "operator", "where", "get", "set", "value"]),
    builtins: new Set(["Console", "Math", "String", "Int32", "Int64", "Double", "Single", "Boolean", "Object", "true", "false", "null", "int", "long", "double", "float", "bool", "string", "void", "decimal", "byte", "char", "short", "uint", "ulong", "ushort", "sbyte", "object", "dynamic"]),
    commentPrefix: "//",
  },
  go: {
    keywords: new Set(["package", "import", "func", "var", "const", "type", "struct", "interface", "if", "else", "for", "range", "switch", "case", "default", "select", "chan", "go", "defer", "return", "break", "continue", "goto", "fallthrough", "map"]),
    builtins: new Set(["fmt", "Println", "Printf", "Print", "len", "cap", "append", "copy", "close", "panic", "recover", "make", "new", "bool", "string", "int", "float64", "true", "false", "nil", "error", "byte", "rune", "int8", "int16", "int32", "int64", "uint", "uint8", "uint16", "uint32", "uint64", "float32", "complex64", "complex128"]),
    commentPrefix: "//",
  },
  rust: {
    keywords: new Set(["fn", "let", "mut", "const", "static", "if", "else", "for", "while", "loop", "match", "return", "break", "continue", "use", "mod", "pub", "crate", "self", "Self", "trait", "impl", "struct", "enum", "type", "where", "unsafe", "async", "await", "dyn", "ref", "move", "box", "as", "in", "extern", "super"]),
    builtins: new Set(["println", "vec", "String", "Option", "Result", "Some", "None", "Ok", "Err", "bool", "char", "i8", "i16", "i32", "i64", "i128", "isize", "u8", "u16", "u32", "u64", "u128", "usize", "f32", "f64", "true", "false", "str", "Vec", "Box", "Rc", "Arc", "Cell", "RefCell"]),
    commentPrefix: "//",
  },
  ruby: {
    keywords: new Set(["def", "class", "module", "if", "else", "elsif", "unless", "case", "when", "while", "until", "for", "in", "do", "end", "begin", "rescue", "ensure", "raise", "next", "break", "return", "yield", "self", "alias", "undef", "defined?", "super", "then", "redo", "retry", "and", "or", "not", "lambda", "proc", "attr_reader", "attr_writer", "attr_accessor", "private", "protected", "public"]),
    builtins: new Set(["puts", "print", "gets", "require", "require_relative", "include", "extend", "nil", "true", "false", "Array", "Hash", "String", "Integer", "Float", "Symbol", "Range", "Regexp", "Time", "File", "IO"]),
    commentPrefix: "#",
  },
  php: {
    keywords: new Set(["function", "class", "interface", "trait", "extends", "implements", "public", "private", "protected", "static", "final", "abstract", "const", "if", "else", "elseif", "foreach", "as", "while", "do", "switch", "case", "break", "continue", "return", "try", "catch", "finally", "throw", "new", "clone", "instanceof", "global", "namespace", "use", "var", "match", "fn", "declare", "goto", "default", "yield", "insteadof"]),
    builtins: new Set(["echo", "print", "list", "array", "include", "include_once", "require", "require_once", "isset", "empty", "unset", "null", "true", "false", "bool", "int", "string", "float", "mixed", "void", "object", "callable", "iterable", "self", "parent"]),
    commentPrefix: "//",
  },
  bash: {
    keywords: new Set(["if", "then", "else", "elif", "fi", "for", "in", "do", "done", "while", "until", "case", "esac", "function", "select", "time", "[[", "]]", "declare", "export", "local", "readonly", "set", "unset", "shift", "trap", "exec", "eval", "source", "alias", "unalias", "return", "exit", "break", "continue"]),
    builtins: new Set(["echo", "printf", "read", "cd", "pwd", "ls", "grep", "cat", "true", "false", "test", "expr", "let", "getopts"]),
    commentPrefix: "#",
  },
  haskell: {
    keywords: new Set(["module", "import", "where", "let", "in", "do", "if", "then", "else", "case", "of", "data", "type", "newtype", "class", "instance", "deriving", "default", "infix", "infixl", "infixr", "foreign", "forall", "qualified", "as", "hiding"]),
    builtins: new Set(["putStrLn", "print", "show", "read", "fst", "snd", "Int", "Integer", "Float", "Double", "Bool", "String", "Char", "Maybe", "Just", "Nothing", "Either", "Right", "Left", "IO", "return", "True", "False", "map", "filter", "foldl", "foldr", "head", "tail", "null", "length"]),
    commentPrefix: "--",
  },
  elixir: {
    keywords: new Set(["def", "defmodule", "defp", "defmacro", "defmacrop", "defstruct", "defprotocol", "defimpl", "if", "else", "unless", "case", "cond", "with", "do", "end", "fn", "quote", "unquote", "unquote_splicing", "receive", "after", "try", "catch", "rescue", "raise", "throw", "alias", "import", "require", "use", "when", "and", "or", "not", "in"]),
    builtins: new Set(["IO", "puts", "inspect", "Enum", "Map", "List", "String", "Integer", "Float", "Atom", "nil", "true", "false", "Kernel", "Agent", "Task", "GenServer", "Supervisor"]),
    commentPrefix: "#",
  },
  lua: {
    keywords: new Set(["and", "break", "do", "else", "elseif", "end", "false", "for", "function", "goto", "if", "in", "local", "nil", "not", "or", "repeat", "return", "then", "true", "until", "while"]),
    builtins: new Set(["print", "pairs", "ipairs", "table", "string", "math", "io", "os", "debug", "assert", "error", "type", "tonumber", "tostring", "require", "pcall", "xpcall", "setmetatable", "getmetatable", "rawget", "rawset", "next", "select", "collectgarbage", "coroutine"]),
    commentPrefix: "--",
  },
  assembly: {
    keywords: new Set(["section", "global", "extern", "default", "mov", "add", "sub", "mul", "div", "imul", "idiv", "jmp", "je", "jne", "jz", "jnz", "jl", "jle", "jg", "jge", "ja", "jae", "jb", "jbe", "call", "ret", "push", "pop", "inc", "dec", "cmp", "test", "and", "or", "xor", "not", "shl", "shr", "sal", "sar", "rol", "ror", "lea", "nop", "syscall", "int", "iret", "loop", "loope", "loopne"]),
    builtins: new Set(["db", "dw", "dd", "dq", "resb", "resw", "resd", "resq", "rax", "rbx", "rcx", "rdx", "rsi", "rdi", "rbp", "rsp", "r8", "r9", "r10", "r11", "r12", "r13", "r14", "r15", "eax", "ebx", "ecx", "edx", "esi", "edi", "ebp", "esp", "ax", "bx", "cx", "dx", "al", "ah", "bl", "bh", "cl", "ch", "dl", "dh", "cs", "ds", "es", "fs", "gs", "ss"]),
    commentPrefix: ";",
  },
  sql: {
    keywords: new Set(["SELECT", "FROM", "WHERE", "INSERT", "UPDATE", "DELETE", "CREATE", "DROP", "ALTER", "TABLE", "INDEX", "VIEW", "VALUES", "AND", "OR", "NOT", "NULL", "IS", "IN", "LIKE", "BETWEEN", "JOIN", "INNER", "LEFT", "RIGHT", "FULL", "OUTER", "CROSS", "ON", "GROUP", "BY", "HAVING", "ORDER", "ASC", "DESC", "LIMIT", "OFFSET", "AS", "INTO", "DISTINCT", "UNIQUE", "PRIMARY", "KEY", "FOREIGN", "REFERENCES", "CONSTRAINT", "DEFAULT", "CHECK", "SET", "CASE", "WHEN", "THEN", "ELSE", "END", "UNION", "ALL", "EXISTS", "TRUNCATE", "BEGIN", "COMMIT", "ROLLBACK", "TRANSACTION"]),
    builtins: new Set(["COUNT", "SUM", "AVG", "MAX", "MIN", "UPPER", "LOWER", "COALESCE", "CONCAT", "SUBSTRING", "LENGTH", "TRIM", "CAST", "CONVERT", "NOW", "DATE", "TIME", "DATETIME", "YEAR", "MONTH", "DAY", "ROUND", "FLOOR", "CEIL", "ABS", "IFNULL", "NULLIF", "ROW_NUMBER", "RANK", "DENSE_RANK"]),
    commentPrefix: "--",
  },
  kotlin: {
    keywords: new Set(["fun", "val", "var", "class", "object", "interface", "if", "else", "when", "for", "while", "do", "return", "break", "continue", "package", "import", "super", "this", "null", "true", "false", "try", "catch", "finally", "throw", "is", "in", "as", "typealias", "companion", "init", "constructor", "open", "data", "sealed", "inline", "noinline", "crossinline", "infix", "operator", "by", "suspend", "abstract", "final", "override", "private", "public", "internal", "protected", "lateinit", "const", "vararg", "out", "reified", "annotation", "enum", "inner", "tailrec", "external", "expect", "actual"]),
    builtins: new Set(["println", "print", "readLine", "Array", "List", "MutableList", "Map", "MutableMap", "Set", "MutableSet", "Int", "String", "Boolean", "Double", "Float", "Long", "Short", "Byte", "Char", "Unit", "Any", "Nothing", "Pair", "Triple", "listOf", "mutableListOf", "mapOf", "mutableMapOf", "setOf", "mutableSetOf", "arrayOf", "intArrayOf", "to", "lazy", "also", "apply", "let", "run", "with", "takeIf", "takeUnless"]),
    commentPrefix: "//",
  },
  swift: {
    keywords: new Set(["func", "var", "let", "if", "else", "switch", "case", "default", "for", "while", "repeat", "return", "break", "continue", "fallthrough", "class", "struct", "enum", "extension", "protocol", "init", "deinit", "import", "guard", "defer", "in", "do", "try", "catch", "throw", "throws", "rethrows", "public", "private", "fileprivate", "internal", "open", "static", "self", "Self", "super", "true", "false", "nil", "where", "associatedtype", "typealias", "subscript", "mutating", "nonmutating", "indirect", "required", "convenience", "final", "weak", "unowned", "lazy", "override", "dynamic", "inout", "some", "any", "async", "await", "actor", "nonisolated", "isolated", "get", "set", "willSet", "didSet", "infix", "prefix", "postfix", "operator", "precedencegroup", "as", "is"]),
    builtins: new Set(["print", "debugPrint", "Array", "Dictionary", "Set", "String", "Int", "Double", "Float", "Bool", "Optional", "Result", "Error", "Codable", "Equatable", "Hashable", "Comparable", "CustomStringConvertible", "OptionSet", "Sequence", "Collection", "IteratorProtocol", "Range", "ClosedRange", "Void", "Never", "Any", "AnyObject", "Type"]),
    commentPrefix: "//",
  },
  perl: {
    keywords: new Set(["my", "our", "local", "state", "sub", "if", "unless", "while", "until", "foreach", "for", "do", "next", "last", "redo", "goto", "return", "package", "use", "no", "require", "else", "elsif", "given", "when", "default", "BEGIN", "END", "CHECK", "INIT", "UNITCHECK", "and", "or", "not", "xor", "eq", "ne", "lt", "gt", "le", "ge", "cmp"]),
    builtins: new Set(["print", "say", "chomp", "chop", "split", "join", "map", "grep", "sort", "reverse", "length", "substr", "index", "rindex", "push", "pop", "shift", "unshift", "splice", "keys", "values", "each", "exists", "delete", "defined", "undef", "ref", "bless", "tie", "untie", "open", "close", "read", "write", "seek", "tell", "eof", "binmode", "die", "warn", "exit", "eval", "exec", "system", "qw", "wantarray", "caller", "scalar", "chr", "ord", "hex", "oct", "sprintf", "printf", "pack", "unpack", "localtime", "gmtime", "time", "sleep"]),
    commentPrefix: "#",
  },
};

// String prefixes (Python f-string, r-string, etc.)
export const STRING_PREFIXES = new Set([
  'f', 'r', 'b', 'u', 'fr', 'rf', 'br', 'rb',  // Python (lowercase)
  'F', 'R', 'B', 'U', 'FR', 'RF', 'BR', 'RB',  // Python (uppercase)
]);

// 言語設定を取得
export function getLanguageConfig(language: string) {
  return LANGUAGE_CONFIG[language] || LANGUAGE_CONFIG.javascript;
}

// 文字列内の補間を分割（f-string, template literal等）
function splitStringInterpolation(stringToken: string, language: string, prevToken?: string): string[] {
  // Python f-string: f"..." or f'...'
  const isPythonFString = language === 'python' &&
    prevToken && STRING_PREFIXES.has(prevToken) && prevToken.toLowerCase().includes('f');

  // JavaScript/TypeScript template literal: `...`
  const isTemplateLiteral = ['javascript', 'typescript'].includes(language) &&
    stringToken.startsWith('`');

  if (!isPythonFString && !isTemplateLiteral) {
    return [stringToken];
  }

  const results: string[] = [];
  let current = '';
  let i = 0;
  let braceDepth = 0;

  while (i < stringToken.length) {
    const char = stringToken[i];

    // Python f-string: {expr} or {{escaped}}
    if (isPythonFString && char === '{' && braceDepth === 0) {
      // Check for escaped brace {{
      if (stringToken[i + 1] === '{') {
        current += '{{';
        i += 2;
        continue;
      }
      // Start of interpolation
      if (current) results.push(current);
      results.push('{');
      current = '';
      braceDepth = 1;
      i++;
      continue;
    }

    // JavaScript template literal: ${expr}
    if (isTemplateLiteral && char === '$' && stringToken[i + 1] === '{' && braceDepth === 0) {
      if (current) results.push(current);
      results.push('${');
      current = '';
      braceDepth = 1;
      i += 2;
      continue;
    }

    // Inside interpolation
    if (braceDepth > 0) {
      if (char === '{') {
        braceDepth++;
        current += char;
      } else if (char === '}') {
        braceDepth--;
        if (braceDepth === 0) {
          // End of interpolation - push expression content and closing brace
          if (current) results.push(current);
          results.push('}');
          current = '';
        } else {
          current += char;
        }
      } else {
        current += char;
      }
      i++;
      continue;
    }

    // Escaped brace in Python f-string
    if (isPythonFString && char === '}' && stringToken[i + 1] === '}') {
      current += '}}';
      i += 2;
      continue;
    }

    current += char;
    i++;
  }

  if (current) results.push(current);
  return results;
}

// トークン化
export function tokenize(text: string, language: string): string[] {
  const config = getLanguageConfig(language);
  const commentPrefix = config.commentPrefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // コメントパターン
  let commentPattern = `${commentPrefix}[^\\n]*`;
  if (['javascript', 'typescript', 'java', 'c', 'cpp', 'csharp', 'go', 'rust', 'php', 'kotlin', 'swift'].includes(language)) {
    commentPattern = `(?:\\/\\/[^\\n]*|\\/\\*.*?\\*\\/)`;
  } else if (language === 'lua' || language === 'sql') {
    commentPattern = `(?:--\\[\\[.*?\\]\\]|--[^\\n]*)`;
  } else if (language === 'haskell') {
    commentPattern = `(?:\\{-.*?-\\}|--[^\\n]*)`;
  }

  // 文字列パターン
  let stringPattern = `"[^"\\\\\\n]*(?:\\\\.[^"\\\\\\n]*)*"|'[^'\\\\\\n]*(?:\\\\.[^'\\\\\\n]*)*'`;
  if (['javascript', 'typescript', 'go'].includes(language)) {
    stringPattern += "|`[^`\\\\]*(?:\\\\.[^`\\\\]*)*`";
  }
  if (language === 'python') {
    stringPattern += `|"{3}[^"\\\\]*(?:\\\\.[^"\\\\]*)*"{3}|'{3}[^'\\\\]*(?:\\\\.[^'\\\\]*)*'{3}`;
  }

  // **を単一トークンとして認識（*argsや**kwargs用）
  const regex = new RegExp(`(${stringPattern}|${commentPattern}|@[a-zA-Z0-9_]+|[a-zA-Z_][a-zA-Z0-9_]*|\\d+|\\s+|\\*\\*|[^\\s\\w])`, 'g');
  const rawTokens = text.split(regex).filter(Boolean);

  // 文字列補間を分割
  const tokens: string[] = [];
  for (let i = 0; i < rawTokens.length; i++) {
    const token = rawTokens[i];
    const prevToken = i > 0 ? rawTokens[i - 1] : undefined;

    // 文字列トークンの場合、補間を分割
    if (token.startsWith('"') || token.startsWith("'") || token.startsWith('`')) {
      const splitTokens = splitStringInterpolation(token, language, prevToken);
      tokens.push(...splitTokens);
    } else {
      tokens.push(token);
    }
  }

  return tokens;
}

// トークンのスタイルを取得
export function getTokenStyle(
  token: string,
  language: string,
  prevToken?: string,
  nextToken?: string
): { color: string } {
  if (!token) return { color: SYNTAX_COLORS.foreground };

  const config = getLanguageConfig(language);

  // String prefixes (f, r, b, etc.) - keyword color when followed by quote
  if (STRING_PREFIXES.has(token) && nextToken && (nextToken.startsWith("\"") || nextToken.startsWith("'") || nextToken.startsWith("`"))) {
    return { color: SYNTAX_COLORS.keyword };
  }

  // Interpolation brackets: { } ${ in f-strings and template literals
  // These are split out from strings and should be bracket color
  if (token === '{' || token === '}' || token === '${') {
    return { color: SYNTAX_COLORS.bracket };
  }

  // String (including partial strings from interpolation split)
  // Full string: starts and ends with quote
  // Partial string from f-string/template literal: starts OR ends with quote
  const startsWithQuote = token.startsWith("\"") || token.startsWith("'") || token.startsWith("`");
  const endsWithQuote = token.endsWith("\"") || token.endsWith("'") || token.endsWith("`");
  if (startsWithQuote || endsWithQuote) {
    return { color: SYNTAX_COLORS.string };
  }

  // Middle string parts between interpolations (e.g., ", you are " in f"Hello {name}, you are {age}")
  // These don't start/end with quotes but are still string content
  const prevIsClosingBrace = prevToken === '}';
  const nextIsOpeningBrace = nextToken === '{' || nextToken === '${';
  if (prevIsClosingBrace && nextIsOpeningBrace) {
    return { color: SYNTAX_COLORS.string };
  }

  // Comment
  const isComment = token.startsWith(config.commentPrefix) ||
                    token.startsWith("//") ||
                    token.startsWith("/*") ||
                    token.startsWith("--") ||
                    token.startsWith("{-") ||
                    token.startsWith(";");
  if (isComment) return { color: SYNTAX_COLORS.comment };

  // Decorator
  if (token.startsWith("@")) return { color: SYNTAX_COLORS.decorator };

  // Number
  if (/^\d+$/.test(token)) return { color: SYNTAX_COLORS.number };

  // Keywords & Built-ins
  if (config.keywords.has(token)) return { color: SYNTAX_COLORS.keyword };
  if (config.builtins.has(token)) return { color: SYNTAX_COLORS.builtIn };

  // Other Brackets (not interpolation related)
  if (/^[()[\]]$/.test(token) || token === '#{' || token === '{$' || token === '\\(') {
    return { color: SYNTAX_COLORS.bracket };
  }

  // Function/Class Definition (prev token was 'def', 'function', 'class', etc.)
  const isDefKeyword = prevToken === "def" || prevToken === "function" || prevToken === "fn" || prevToken === "func" ||
                       prevToken === "fun" ||  // Kotlin
                       prevToken === "sub" ||  // Perl
                       prevToken === "defp" || prevToken === "defmodule" || prevToken === "defmacro" ||  // Elixir
                       prevToken === "class" || prevToken === "interface" || prevToken === "struct" ||
                       prevToken === "enum" || prevToken === "trait" || prevToken === "type" ||
                       prevToken === "object" ||  // Kotlin object
                       prevToken === "data" || prevToken === "newtype";  // Haskell
  if (prevToken && isDefKeyword) {
    return { color: SYNTAX_COLORS.functionDef };
  }

  // Function/Constructor Call (identifier followed by '(')
  // Use same color as function definition for consistency
  if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(token) && nextToken === '(') {
    return { color: SYNTAX_COLORS.functionDef };
  }

  // Type annotation (PascalCase identifier after ':', '->', or ')')
  // Class/type names should be same color as their definition
  // Only apply to PascalCase names to avoid coloring dict values
  // ')' is for Go return types: func foo() MyType
  if (/^[A-Z][a-zA-Z0-9_]*$/.test(token) && (prevToken === ':' || prevToken === '->' || prevToken === ')')) {
    return { color: SYNTAX_COLORS.functionDef };
  }

  // Identifiers (variables)
  if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(token) ||
      (language === 'php' && token.startsWith('$')) ||
      (language === 'kotlin' && token.startsWith('$'))) {
    return { color: SYNTAX_COLORS.variable };
  }

  // Default
  return { color: SYNTAX_COLORS.foreground };
}

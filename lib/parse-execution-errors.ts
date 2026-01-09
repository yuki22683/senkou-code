/**
 * コード実行エラーのパース・整形ユーティリティ
 * 各言語のエラーメッセージからファイル名、行番号、エラータイプを抽出
 */

export interface ParsedError {
  type: "compile" | "runtime" | "timeout" | "unknown";
  message: string;
  file?: string;
  line?: number;
  column?: number;
  stackTrace?: string;
  formattedMessage: string;
}

// 言語別のエラーパターン
const ERROR_PATTERNS = {
  // Python: File "main.py", line 5, in <module>
  python: {
    file: /File\s+"([^"]+)",\s+line\s+(\d+)(?:,\s+in\s+(\S+))?/,
    traceback: /Traceback \(most recent call last\):/,
    syntaxError: /SyntaxError:/,
    indentError: /IndentationError:/,
    nameError: /NameError:/,
    typeError: /TypeError:/,
    valueError: /ValueError:/,
    indexError: /IndexError:/,
    keyError: /KeyError:/,
  },
  // JavaScript/Node.js: at Object.<anonymous> (/path/file.js:10:5)
  javascript: {
    file: /(?:at\s+)?(?:\S+\s+\()?([^\s:()]+):(\d+):(\d+)\)?/,
    syntaxError: /SyntaxError:/,
    referenceError: /ReferenceError:/,
    typeError: /TypeError:/,
    rangeError: /RangeError:/,
  },
  // C/C++: main.c:5:10: error: expected ';'
  cpp: {
    file: /([^\s:]+\.(?:cpp|c|cc|cxx|h|hpp)):(\d+):(\d+)?:?\s*(?:error|warning)?:?\s*(.+)?/i,
    error: /error:/i,
    warning: /warning:/i,
  },
  // Java: Exception in thread "main" java.lang.Error at Main.java:10
  java: {
    file: /at\s+[\w.$]+\(([^:]+):(\d+)\)/,
    exception: /Exception in thread/,
    error: /Error:/,
  },
};

// スタックトレースのマーカー
const STACK_TRACE_MARKERS = [
  "Traceback (most recent call last):",
  "    at ",
  "Exception in thread",
  "Stack trace:",
  "Call stack:",
];

/**
 * エラーメッセージをパースして構造化されたエラー情報を返す
 */
export function parseExecutionError(
  stderr: string,
  compileOutput: string | null,
  language: string,
  sourceCode: string
): ParsedError {
  const isCompileError = !!compileOutput;
  const errorText = compileOutput || stderr;

  if (!errorText) {
    return {
      type: "unknown",
      message: "",
      formattedMessage: "",
    };
  }

  // タイムアウトエラーの検出
  if (
    errorText.includes("timeout") ||
    errorText.includes("Time Limit Exceeded") ||
    errorText.includes("タイムアウト")
  ) {
    return {
      type: "timeout",
      message: "実行時間が制限を超えました",
      formattedMessage: "実行時間が制限を超えました。無限ループがないか確認してください。",
    };
  }

  // 言語を正規化
  const normalizedLang = normalizeLanguage(language);
  const totalLines = sourceCode.trimEnd().split("\n").length;

  // 言語別のパース
  let parsed: ParsedError;
  switch (normalizedLang) {
    case "python":
      parsed = parsePythonError(errorText, totalLines);
      break;
    case "javascript":
      parsed = parseJavaScriptError(errorText, totalLines);
      break;
    case "cpp":
    case "c":
      parsed = parseCppError(errorText, totalLines);
      break;
    case "java":
      parsed = parseJavaError(errorText, totalLines);
      break;
    default:
      parsed = parseGenericError(errorText, totalLines);
  }

  // コンパイルエラーの場合はタイプを上書き
  if (isCompileError && parsed.type !== "timeout") {
    parsed.type = "compile";
  }

  return parsed;
}

/**
 * 言語名を正規化
 */
function normalizeLanguage(language: string): string {
  const langMap: Record<string, string> = {
    python: "python",
    python3: "python",
    py: "python",
    javascript: "javascript",
    js: "javascript",
    node: "javascript",
    nodejs: "javascript",
    "c++": "cpp",
    cpp: "cpp",
    c: "c",
    java: "java",
  };
  return langMap[language.toLowerCase()] || language.toLowerCase();
}

/**
 * Pythonエラーのパース
 */
function parsePythonError(errorText: string, totalLines: number): ParsedError {
  const patterns = ERROR_PATTERNS.python;
  const lines = errorText.split("\n");

  let file: string | undefined;
  let line: number | undefined;
  let stackTrace: string | undefined;
  let message = "";

  // Tracebackがあるか確認
  const hasTraceback = patterns.traceback.test(errorText);
  if (hasTraceback) {
    const tracebackIndex = errorText.indexOf("Traceback (most recent call last):");
    stackTrace = errorText.substring(tracebackIndex);
  }

  // ファイルと行番号を抽出
  const fileMatches = errorText.matchAll(new RegExp(patterns.file, "g"));
  const allMatches = Array.from(fileMatches);
  if (allMatches.length > 0) {
    const lastMatch = allMatches[allMatches.length - 1];
    file = lastMatch[1];
    line = parseInt(lastMatch[2], 10);
    // 行番号がソースコードの行数を超えている場合は最終行に調整
    if (line > totalLines) {
      line = totalLines;
    }
  }

  // エラーメッセージを抽出（最後のエラー行）
  for (let i = lines.length - 1; i >= 0; i--) {
    const trimmedLine = lines[i].trim();
    if (
      trimmedLine &&
      trimmedLine !== "^" &&
      !trimmedLine.startsWith('File "') &&
      !/^line \d+$/.test(trimmedLine) &&
      !trimmedLine.includes("Traceback (most recent call last):")
    ) {
      message = trimmedLine;
      break;
    }
  }

  // エラータイプを判定
  const isSyntaxError =
    patterns.syntaxError.test(errorText) || patterns.indentError.test(errorText);

  return {
    type: isSyntaxError ? "compile" : "runtime",
    message,
    file,
    line,
    stackTrace,
    formattedMessage: formatErrorMessage(message, line),
  };
}

/**
 * JavaScriptエラーのパース
 */
function parseJavaScriptError(errorText: string, totalLines: number): ParsedError {
  const patterns = ERROR_PATTERNS.javascript;
  const lines = errorText.split("\n");

  let file: string | undefined;
  let line: number | undefined;
  let column: number | undefined;
  let stackTrace: string | undefined;
  let message = "";

  // スタックトレースを抽出
  const atIndex = errorText.indexOf("    at ");
  if (atIndex !== -1) {
    stackTrace = errorText.substring(atIndex);
  }

  // ファイルと行番号を抽出
  const fileMatch = errorText.match(patterns.file);
  if (fileMatch) {
    file = fileMatch[1];
    line = parseInt(fileMatch[2], 10);
    column = fileMatch[3] ? parseInt(fileMatch[3], 10) : undefined;
    if (line > totalLines) {
      line = totalLines;
    }
  }

  // エラーメッセージを抽出（最初の行が多い）
  for (const l of lines) {
    const trimmed = l.trim();
    if (
      trimmed &&
      !trimmed.startsWith("at ") &&
      (patterns.syntaxError.test(trimmed) ||
        patterns.referenceError.test(trimmed) ||
        patterns.typeError.test(trimmed) ||
        patterns.rangeError.test(trimmed))
    ) {
      message = trimmed;
      break;
    }
  }

  if (!message && lines.length > 0) {
    message = lines[0].trim();
  }

  const isSyntaxError = patterns.syntaxError.test(errorText);

  return {
    type: isSyntaxError ? "compile" : "runtime",
    message,
    file,
    line,
    column,
    stackTrace,
    formattedMessage: formatErrorMessage(message, line, column),
  };
}

/**
 * C/C++エラーのパース
 */
function parseCppError(errorText: string, totalLines: number): ParsedError {
  const patterns = ERROR_PATTERNS.cpp;
  const lines = errorText.split("\n");

  let file: string | undefined;
  let line: number | undefined;
  let column: number | undefined;
  let message = "";

  // ファイルと行番号を抽出
  const fileMatch = errorText.match(patterns.file);
  if (fileMatch) {
    file = fileMatch[1];
    line = parseInt(fileMatch[2], 10);
    column = fileMatch[3] ? parseInt(fileMatch[3], 10) : undefined;
    if (line > totalLines) {
      line = totalLines;
    }
    if (fileMatch[4]) {
      message = fileMatch[4].trim();
    }
  }

  // メッセージがなければ最初のerror行を探す
  if (!message) {
    for (const l of lines) {
      if (patterns.error.test(l)) {
        const errorPart = l.split(/error:/i)[1];
        if (errorPart) {
          message = errorPart.trim();
          break;
        }
      }
    }
  }

  if (!message && lines.length > 0) {
    message = lines[0].trim();
  }

  return {
    type: "compile",
    message,
    file,
    line,
    column,
    formattedMessage: formatErrorMessage(message, line, column),
  };
}

/**
 * Javaエラーのパース
 */
function parseJavaError(errorText: string, totalLines: number): ParsedError {
  const patterns = ERROR_PATTERNS.java;
  const lines = errorText.split("\n");

  let file: string | undefined;
  let line: number | undefined;
  let stackTrace: string | undefined;
  let message = "";

  // スタックトレースを抽出
  const exceptionIndex = errorText.indexOf("Exception in thread");
  if (exceptionIndex !== -1) {
    stackTrace = errorText.substring(exceptionIndex);
  }

  // ファイルと行番号を抽出
  const fileMatch = errorText.match(patterns.file);
  if (fileMatch) {
    file = fileMatch[1];
    line = parseInt(fileMatch[2], 10);
    if (line > totalLines) {
      line = totalLines;
    }
  }

  // エラーメッセージを抽出
  for (const l of lines) {
    const trimmed = l.trim();
    if (trimmed && !trimmed.startsWith("at ") && trimmed.includes(":")) {
      message = trimmed;
      break;
    }
  }

  if (!message && lines.length > 0) {
    message = lines[0].trim();
  }

  const isCompileError =
    errorText.includes("error:") && !errorText.includes("Exception");

  return {
    type: isCompileError ? "compile" : "runtime",
    message,
    file,
    line,
    stackTrace,
    formattedMessage: formatErrorMessage(message, line),
  };
}

/**
 * 汎用エラーのパース
 */
function parseGenericError(errorText: string, totalLines: number): ParsedError {
  const lines = errorText.split("\n");

  // 行番号を探す
  let line: number | undefined;
  const lineMatch = errorText.match(/line\s+(\d+)/i);
  if (lineMatch) {
    line = parseInt(lineMatch[1], 10);
    if (line > totalLines) {
      line = totalLines;
    }
  }

  // メッセージは最後の非空行
  let message = "";
  for (let i = lines.length - 1; i >= 0; i--) {
    const trimmed = lines[i].trim();
    if (trimmed && trimmed !== "^") {
      message = trimmed;
      break;
    }
  }

  return {
    type: "runtime",
    message,
    line,
    formattedMessage: formatErrorMessage(message, line),
  };
}

/**
 * エラーメッセージを整形
 */
function formatErrorMessage(
  message: string,
  line?: number,
  column?: number
): string {
  let formatted = "";

  if (line) {
    formatted += `${line}行目`;
    if (column) {
      formatted += `${column}列目`;
    }
    formatted += ": ";
  }

  formatted += message;

  return formatted;
}

/**
 * スタックトレースを読みやすく整形
 */
export function formatStackTrace(stackTrace: string): string {
  const lines = stackTrace.split("\n");
  const formatted: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Pythonのスタックトレース
    if (trimmed.startsWith('File "')) {
      formatted.push("  " + trimmed);
    }
    // JavaScriptのスタックトレース
    else if (trimmed.startsWith("at ")) {
      formatted.push("  " + trimmed);
    }
    // その他
    else {
      formatted.push(trimmed);
    }
  }

  return formatted.join("\n");
}

/**
 * エラータイプに応じた日本語ラベルを取得
 */
export function getErrorTypeLabel(type: ParsedError["type"]): string {
  switch (type) {
    case "compile":
      return "コンパイルエラー";
    case "runtime":
      return "実行時エラー";
    case "timeout":
      return "タイムアウト";
    default:
      return "エラー";
  }
}

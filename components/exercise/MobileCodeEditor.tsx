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
  readOnly?: boolean;
}

// PyCharm Darcula Colors
const COLORS = {
  background: "#2B2B2B",
  foreground: "#A9B7C6",
  caret: "#BBBBBB",
  lineNumberForeground: "#606366",
  gutterBackground: "#313335",
  selection: "#214283",
  keyword: "#CC7832", // Orange
  string: "#6A8759",  // Green
  number: "#6897BB",  // Blue
  comment: "#B0B0B0", // Light Gray
  functionDef: "#FFC66D", // Yellow-ish
  decorator: "#BBB529", // Yellow-Green
  builtIn: "#CC7832", // Orange
  panelBackground: "#3C3F41",
  buttonBackground: "#3C3F41",
  buttonBorder: "#606366",
  buttonText: "#A9B7C6",
  matchedBrace: "#606366",
  error: "#BC3F3C",
};

const KEYWORDS = new Set([
  "def", "class", "return", "import", "from", "if", "else", "elif", "for", "while", 
  "try", "except", "finally", "with", "as", "pass", "break", "continue", "lambda", 
  "global", "nonlocal", "yield", "raise", "assert", "del", "async", "await",
  "function", "const", "let", "var", "public", "private", "protected", "void", 
  "int", "string", "bool", "true", "false", "null", "undefined", "interface", "extends"
]);

const BUILTINS = new Set([
  "print", "len", "range", "int", "str", "list", "dict", "set", "tuple", "bool", 
  "super", "open", "type", "id", "input", "console", "Math", "parseInt", "parseFloat"
]);

export function MobileCodeEditor({
  initialCode,
  correctCode = "",
  language,
  onChange,
  onRun,
  readOnly = false,
}: MobileCodeEditorProps) {
  const [lines, setLines] = useState<string[]>(() => {
    return initialCode.split("\n").map(line => 
      line.includes("___") ? "" : line
    );
  });
  
  const [cursor, setCursor] = useState(() => {
    const initLines = initialCode.split("\n").map(line => 
      line.includes("___") ? "" : line
    );
    if (!correctCode) return { line: 0, col: 0 };
    
    const correctLines = correctCode.split("\n");
    for (let i = 0; i < initLines.length; i++) {
      if (initLines[i] !== correctLines[i]) {
        return { line: i, col: 0 };
      }
    }
    return { line: 0, col: 0 };
  });

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Tokenize line for highlighting and processing
  const tokenize = (text: string): string[] => {
    // Regex to capture strings, comments, decorators, words, numbers, whitespace, symbols
    const regex = /("[^"\\]*(?:\\.[^"\\]*)*"|'[^']*'|#[^\n]*|\/\/[^\n]*|\/\*.*?\*\/|@[a-zA-Z0-9_]+|[a-zA-Z_][a-zA-Z0-9_]*|\d+|\s+|[^\s\w])/g;
    return text.match(regex) || [];
  };

  // Determine color for a token based on context (previous token)
  const getTokenStyle = (token: string, prevToken?: string) => {
    if (!token) return {};

    // String
    if (token.startsWith("\"") || token.startsWith("'")) return { color: COLORS.string };
    
    // Comment
    if (token.startsWith("#") || token.startsWith("//") || token.startsWith("/*")) return { color: COLORS.comment };
    
    // Decorator
    if (token.startsWith("@")) return { color: COLORS.decorator };

    // Number
    if (/^\d+$/.test(token)) return { color: COLORS.number };

    // Keywords & Built-ins
    if (KEYWORDS.has(token)) return { color: COLORS.keyword };
    if (BUILTINS.has(token)) return { color: COLORS.builtIn };

    // Function Definition (prev token was 'def' or 'function')
    if (prevToken && (prevToken === "def" || prevToken === "function")) {
      return { color: COLORS.functionDef };
    }

    // Default Foreground / Operators / Punctuation
    if (/[(){}\[\].,]/.test(token)) return { color: COLORS.foreground };
    if (/[=+\-*\/\%&|^<>!]/.test(token)) return { color: COLORS.foreground };

    return { color: COLORS.foreground };
  };

  useEffect(() => {
    if (!correctCode) return;
    
    const correctLines = correctCode.split("\n");
    const targetLine = correctLines[cursor.line] || "";
    
    if (targetLine.trim()) {
      const tokens = tokenize(targetLine);
      const filtered = tokens.filter(t => t.trim().length > 0);
      const shuffled = [...filtered].sort(() => Math.random() - 0.5);
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

      if (newLineContent.replace(/\s+/g, "") === targetLine.replace(/\s+/g, "")) {
        const newFullCode = lines.map((l, i) => i === cursor.line ? newLineContent : l).join("\n");
        if (newFullCode.replace(/\s+/g, "") === correctCode.replace(/\s+/g, "")) {
          onRun?.(newFullCode);
        } else {
          let next = cursor.line + 1;
          while (next < lines.length) {
             const currentVal = lines[next];
             const correctVal = correctLines[next];
             if (currentVal.replace(/\s+/g, "") !== correctVal.replace(/\s+/g, "")) {
                 break;
             }
             next++;
          }
          if (next < lines.length) {
              nextLine = next;
              nextCol = 0;
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
    if (cursor.col > 0) {
      const currentLine = lines[cursor.line] || "";
      const textBefore = currentLine.slice(0, cursor.col);
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
          }
        }
      }

      setLines((prev) => {
        const newLines = [...prev];
        const lineContent = newLines[cursor.line] || "";
        const before = lineContent.slice(0, cursor.col - deleteCount);
        const after = lineContent.slice(cursor.col);
        newLines[cursor.line] = before + after;
        return newLines;
      });
      setCursor((prev) => ({ ...prev, col: Math.max(0, prev.col - deleteCount) }));
    } else if (cursor.line > 0) {
      setLines((prev) => {
        const newLines = [...prev];
        const currentLine = newLines[cursor.line];
        const prevLine = newLines[cursor.line - 1];
        newLines[cursor.line - 1] = prevLine + currentLine;
        newLines.splice(cursor.line, 1);
        return newLines;
      });
      setCursor((prev) => ({
        line: prev.line - 1,
        col: lines[prev.line - 1].length,
      }));
    }
  };

  const moveCursor = (direction: "left" | "right") => {
    if (direction === "left") {
      if (cursor.col > 0) {
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
        setCursor((prev) => ({ line: prev.line + 1, col: 0 }));
      }
    }
  };

  useEffect(() => {
    const activeLineEl = containerRef.current?.querySelector(`[data-line="${cursor.line}"]`);
    if (activeLineEl) {
      activeLineEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [cursor.line]);

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
          const isCorrect = !isComment && targetLine && line.replace(/\s+/g, "") === targetLine.replace(/\s+/g, "");

          return (
            <div
              key={lineIndex}
              data-line={lineIndex}
              className={cn(
                "flex relative min-h-[1.5rem]",
                lineIndex === cursor.line ? "bg-[#323232]" : "",
                isComment ? "cursor-default" : "cursor-text"
              )}
              onClick={(e) => {
                e.stopPropagation();
                if (!isComment) {
                  setCursor({ line: lineIndex, col: line.length });
                }
              }}
            >
              <div 
                className="w-8 mr-4 flex items-center justify-end shrink-0 select-none"
                style={{ backgroundColor: COLORS.gutterBackground, color: COLORS.lineNumberForeground }}
              >
                {isCorrect ? (
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
        <div className="flex overflow-x-auto gap-1 sm:gap-2 mb-2 scrollbar-hide justify-center items-center min-h-[36px]">
          {suggestions.map((token, idx) => (
            <button
              key={`${token}-${idx}`}
              onClick={() => handleInsert(token)}
              style={{
                backgroundColor: COLORS.buttonBackground,
                borderColor: COLORS.buttonBorder,
                ...getTokenStyle(token)
              }}
              className="px-2 py-1.5 sm:px-3 sm:py-2 rounded font-mono font-bold whitespace-nowrap border active:scale-95 transition-transform text-xs sm:text-lg lg:text-2xl"
            >
              {token}
            </button>
          ))}
          {suggestions.length === 0 && (
            <span className="text-xs px-2 py-1.5 sm:px-2 sm:py-2" style={{ color: COLORS.comment }}>ヒントはありません</span>
          )}
        </div>

        <div className="grid grid-cols-6 sm:grid-cols-9 lg:grid-cols-18 gap-1 sm:gap-2 mb-2 place-items-center min-h-[32px]">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '=', '+', '-', '/', '*', '%', '(', ')', "'"].map((char) => (
            <button
              key={char}
              onClick={() => handleInsert(char)}
              style={{
                backgroundColor: COLORS.buttonBackground,
                borderColor: COLORS.buttonBorder,
                ...getTokenStyle(char)
              }}
              className="px-1.5 py-1.5 sm:px-2 sm:py-2 lg:px-3 lg:py-2 rounded font-mono font-bold whitespace-nowrap border active:scale-95 transition-transform w-full text-xs sm:text-lg lg:text-2xl"
            >
              {char}
            </button>
          ))}
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
            disabled={!lines[cursor.line] || lines[cursor.line].length === 0}
          >
            <Delete className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}

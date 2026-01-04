"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Delete, CornerDownLeft, Space } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileCodeEditorProps {
  initialCode: string;
  correctCode?: string;
  language: string;
  onChange?: (value: string) => void;
  onRun?: (code: string) => void;
  readOnly?: boolean;
}

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
    // Initialize cursor at the first incomplete line
    const initLines = initialCode.split("\n").map(line => 
      line.includes("___") ? "" : line
    );
    if (!correctCode) return { line: 0, col: 0 };
    
    const correctLines = correctCode.split("\n");
    for (let i = 0; i < initLines.length; i++) {
      // If line doesn't match correct line (e.g. it was holey and cleared), start here.
      // Already correct lines (comments) are skipped.
      if (initLines[i] !== correctLines[i]) {
        return { line: i, col: 0 };
      }
    }
    return { line: 0, col: 0 };
  });

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update suggestions when cursor line changes
  useEffect(() => {
    if (!correctCode) return;
    
    const correctLines = correctCode.split("\n");
    // Get the corresponding line from correctCode (or empty if out of bounds)
    const targetLine = correctLines[cursor.line] || "";
    
    if (targetLine.trim()) {
      // Tokenize the correct line
      const tokens = tokenize(targetLine);
      // Shuffle tokens
      const shuffled = [...tokens].sort(() => Math.random() - 0.5);
      setSuggestions(shuffled);
    } else {
      setSuggestions([]);
    }
  }, [cursor.line, correctCode]);

  // Handle changes and notify parent
  useEffect(() => {
    const newCode = lines.join("\n");
    onChange?.(newCode);
  }, [lines, onChange]);

  // Helper to tokenize code line
  const tokenize = (text: string): string[] => {
    // Split by words, strings, numbers, or symbols
    // This regex matches:
    // 1. Strings: "..." or '...'
    // 2. Words: alphanumeric + underscore
    // 3. Symbols: non-whitespace, non-word
    const regex = /("[^"]*"|'[^']*'|[a-zA-Z0-9_]+|[^\s\w])/g;
    return text.match(regex) || [];
  };

  const handleInsert = (text: string) => {
    // Calculate new line content
    const currentLine = lines[cursor.line] || "";
    const before = currentLine.slice(0, cursor.col);
    const after = currentLine.slice(cursor.col);
    const newLineContent = before + text + after;

    let nextLine = cursor.line;
    let nextCol = cursor.col + text.length;

    // Check if line is correct
    if (correctCode) {
      const correctLines = correctCode.split("\n");
      const targetLine = correctLines[cursor.line] || "";

      // If matches
      if (newLineContent === targetLine) {
        // Line completed!
        
        // Check if full code is correct (including this new line)
        const newFullCode = lines.map((l, i) => i === cursor.line ? newLineContent : l).join("\n");
        if (newFullCode.trim() === correctCode.trim()) {
          onRun?.(newFullCode);
        } else {
          // Move to next incomplete line
          let next = cursor.line + 1;
          while (next < lines.length) {
             const currentVal = lines[next];
             const correctVal = correctLines[next];
             if (currentVal !== correctVal) {
                 break;
             }
             next++;
          }
          if (next < lines.length) {
              nextLine = next;
              nextCol = 0; // Start of next line
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
      // Delete char before cursor in current line
      setLines((prev) => {
        const newLines = [...prev];
        const currentLine = newLines[cursor.line];
        const before = currentLine.slice(0, cursor.col - 1);
        const after = currentLine.slice(cursor.col);
        newLines[cursor.line] = before + after;
        return newLines;
      });
      setCursor((prev) => ({ ...prev, col: prev.col - 1 }));
    } else if (cursor.line > 0) {
      // Merge with previous line (only if allowed? Progate style usually restricts this, but let's allow basic backspace)
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

  // Scroll active line into view
  useEffect(() => {
    const activeLineEl = containerRef.current?.querySelector(`[data-line="${cursor.line}"]`);
    if (activeLineEl) {
      activeLineEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [cursor.line]);

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] text-white">
      {/* Code Display Area */}
      <div 
        ref={containerRef}
        className="flex-1 overflow-y-auto p-4 font-mono text-sm leading-6"
        onClick={() => {
          // Simple tap on background moves focus to end of code? 
          // Or strictly handle tap on lines. 
          // For now, let's just focus on the visible cursor logic.
        }}
      >
        {lines.map((line, lineIndex) => (
          <div
            key={lineIndex}
            data-line={lineIndex}
            className={cn(
              "flex relative min-h-[1.5rem]",
              lineIndex === cursor.line ? "bg-[#2d2d2d]" : ""
            )}
            onClick={(e) => {
              e.stopPropagation();
              // Calculate rough col based on click? 
              // Simplification: Select end of line on click for now
              // or just select the line.
              setCursor({ line: lineIndex, col: line.length });
            }}
          >
            {/* Line Number */}
            <span className="w-8 text-gray-500 text-right mr-4 select-none shrink-0">
              {lineIndex + 1}
            </span>

            {/* Line Content */}
            <div className="whitespace-pre flex-1 relative">
              {lineIndex === cursor.line ? (
                <>
                  <span>{line.slice(0, cursor.col)}</span>
                  <span className="inline-block w-[2px] h-[1.2em] bg-blue-500 align-middle animate-pulse -mb-1"></span>
                  <span>{line.slice(cursor.col)}</span>
                </>
              ) : (
                <span>{line || " "}</span> // Empty line needs height
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Control Panel */}
      <div className="bg-[#252526] border-t border-[#3e3e42] p-2 shrink-0">
        {/* Suggestions Row */}
        <div className="flex overflow-x-auto gap-2 mb-2 pb-2 scrollbar-hide">
          {suggestions.map((token, idx) => (
            <button
              key={`${token}-${idx}`}
              onClick={() => handleInsert(token)}
              className="px-3 py-2 bg-[#3c3c3c] hover:bg-[#4c4c4c] rounded text-sm font-mono whitespace-nowrap border border-[#505050] active:scale-95 transition-transform"
            >
              {token}
            </button>
          ))}
          {suggestions.length === 0 && (
            <span className="text-gray-500 text-xs px-2 py-2">ヒントはありません</span>
          )}
        </div>

        {/* Fixed Controls Row */}
        <div className="grid grid-cols-4 gap-2">
          <Button
            variant="secondary"
            className="h-12 bg-[#3c3c3c] hover:bg-[#4c4c4c] text-white border-0"
            onClick={() => moveCursor("left")}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="secondary"
            className="h-12 bg-[#3c3c3c] hover:bg-[#4c4c4c] text-white border-0"
            onClick={() => moveCursor("right")}
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            variant="secondary"
            className="h-12 bg-[#3c3c3c] hover:bg-[#4c4c4c] text-white border-0"
            onClick={() => handleInsert(" ")}
          >
            <div className="text-xs border border-gray-400 px-2 py-0.5 rounded">Space</div>
          </Button>
          <Button
            variant="destructive"
            className="h-12 bg-red-900/50 hover:bg-red-900/80 text-white border-0"
            onClick={handleDelete}
          >
            <Delete className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

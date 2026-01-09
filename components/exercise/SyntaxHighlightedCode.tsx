"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { SYNTAX_COLORS, tokenize, getTokenStyle } from "@/lib/syntax-highlight";

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
  const lines = code.split('\n');

  return (
    <div
      className={cn(
        "font-mono text-sm leading-6 p-4 rounded-lg overflow-x-auto",
        className
      )}
      style={{ backgroundColor: SYNTAX_COLORS.background, color: SYNTAX_COLORS.foreground }}
    >
      {lines.map((line, i) => {
        const tokens = tokenize(line, language);
        let lastNonWhitespace = "";

        // スペースを可視化するヘルパー関数
        const renderToken = (token: string, key: number, style: React.CSSProperties) => {
          // スペースのみのトークンの場合、ドットで表示
          if (token === ' ') {
            return <span key={key} style={{ ...style, color: 'rgba(255,255,255,0.25)' }}>·</span>;
          }
          if (/^\s+$/.test(token)) {
            // 複数スペースの場合、各スペースをドットに
            return <span key={key} style={{ ...style, color: 'rgba(255,255,255,0.25)' }}>{token.replace(/ /g, '·')}</span>;
          }
          return <span key={key} style={style}>{token}</span>;
        };

        return (
          <div key={i} className="min-h-[1.5rem] whitespace-pre">
            {tokens.map((token, j) => {
              // Find next non-whitespace token for string prefix detection
              let nextToken: string | undefined;
              for (let k = j + 1; k < tokens.length; k++) {
                if (tokens[k].trim()) {
                  nextToken = tokens[k];
                  break;
                }
              }
              const style = getTokenStyle(token, language, lastNonWhitespace, nextToken);
              if (token.trim()) lastNonWhitespace = token;
              return renderToken(token, j, style);
            })}
          </div>
        );
      })}
    </div>
  );
}

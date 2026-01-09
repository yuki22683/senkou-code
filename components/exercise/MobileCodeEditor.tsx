"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Delete, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { SYNTAX_COLORS, tokenize, getTokenStyle, getLanguageConfig } from "@/lib/syntax-highlight";

interface MobileCodeEditorProps {
  initialCode: string;
  correctCode?: string;
  language: string;
  onChange?: (value: string) => void;
  onRun?: (code: string) => void;
  onCursorChange?: (line: number, col: number) => void;
  readOnly?: boolean;
}

// コードの正規化: スペースのルールを厳密に適用
// 1. スペースNG: 関数呼び出し `func(`, 括弧内部 `( x )`, 配列アクセス `arr[`
// 2. スペース任意: 演算子周り, コロン, カンマ, キーワード+括弧
// 3. スペース必須: 単語間 `for i in`
const normalizeCode = (str: string, language: string) => {
  if (!str) return "";

  // 1. コメントを除去
  const config = getLanguageConfig(language);
  const commentPrefix = config.commentPrefix;
  const keywords = config.keywords;

  const linesWithoutComments = str.split("\n").map(line => {
    const commentIndex = line.indexOf(commentPrefix);
    if (commentIndex !== -1) {
      return line.slice(0, commentIndex);
    }
    return line;
  });

  const contentWithoutComments = linesWithoutComments.join("\n");

  // 2. 先頭の空白（インデント）を保持
  const leadingMatch = contentWithoutComments.match(/^(\s*)/);
  const leading = leadingMatch ? leadingMatch[0] : "";
  const content = contentWithoutComments.slice(leading.length).trim();

  // 3. 正規化
  let normalized = content;

  // 連続する空白を1つに（単語間のスペースを保持）
  normalized = normalized.replace(/\s+/g, " ");

  // === スペース任意: キーワードと(の間 ===
  // if ( -> if(, for ( -> for( など（キーワード後のスペースはどちらでもOK）
  if (keywords.size > 0) {
    const keywordArray = Array.from(keywords);
    // 正規表現の特殊文字をエスケープ
    const escapedKeywords = keywordArray.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const keywordPattern = escapedKeywords.join('|');
    const keywordParenRegex = new RegExp(`\\b(${keywordPattern})\\s+\\(`, 'g');
    normalized = normalized.replace(keywordParenRegex, '$1(');
  }

  // === スペース任意: 演算子の周り ===
  // 複数文字の演算子を先に処理
  normalized = normalized.replace(/\s*(==|!=|<=|>=|<>|->|=>|&&|\|\||\+=|-=|\*=|\/=|%=|&=|\|=|\^=|<<|>>)\s*/g, "$1");
  // 単一文字の演算子
  normalized = normalized.replace(/\s*([=+\-*/%<>&|^!])\s*/g, "$1");

  // === スペース任意: コロン、カンマ、ドットの周り ===
  normalized = normalized.replace(/\s*:\s*/g, ":");
  normalized = normalized.replace(/\s*,\s*/g, ",");
  normalized = normalized.replace(/\s*\.\s*/g, ".");

  // === スペースNG: 括弧周りはそのまま保持 ===
  // 関数呼び出し: identifier( の間のスペースは正規化しない（スペースあると不正解）
  // 括弧内部: ( の直後、) の直前のスペースも正規化しない（スペースあると不正解）
  // 配列: [ ] も同様
  // → これらは何もしないことで、スペースがあれば不一致になる

  // === 引用符の正規化 ===
  normalized = normalized.replace(/['"]/g, '"');

  return leading + normalized;
};

// 編集対象の行かどうかを判定するヘルパー関数
// 条件: 虫食い（___）がある行、またはコメントの次の行
const isEditableLine = (lines: string[], index: number, commentPrefix: string): boolean => {
  const line = lines[index] || "";
  // 虫食い行
  if (line.includes("___")) return true;
  // コメントの次の行
  if (index > 0) {
    const prevLine = lines[index - 1] || "";
    if (prevLine.trim().startsWith(commentPrefix)) return true;
  }
  return false;
};

// 初期表示用の行を生成するヘルパー関数
const getInitialDisplayLine = (lines: string[], index: number, commentPrefix: string): string => {
  const line = lines[index] || "";
  // コメントの次の行はインデントだけ残す
  if (index > 0) {
    const prevLine = lines[index - 1] || "";
    if (prevLine.trim().startsWith(commentPrefix)) {
      const match = line.match(/^(\s*)/);
      return match ? match[0] : "";
    }
  }
  // 虫食い行はインデントだけ残す
  if (line.includes("___")) {
    const match = line.match(/^(\s*)/);
    return match ? match[0] : "";
  }
  return line;
};

export function MobileCodeEditor({
  initialCode,
  correctCode = "",
  language,
  onChange,
  onRun,
  onCursorChange,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  readOnly = false,
}: MobileCodeEditorProps) {
  const config = getLanguageConfig(language);
  const commentPrefix = config.commentPrefix;

  // 各行の最小カラム位置（インデントの長さ）を計算
  const minCols = React.useMemo(() => {
    const originalLines = initialCode.split("\n");
    return originalLines.map((line) => {
      const match = line.match(/^(\s*)/);
      return match ? match[0].length : 0;
    });
  }, [initialCode]);

  const [lines, setLines] = useState<string[]>(() => {
    const cfg = getLanguageConfig(language);
    const originalLines = initialCode.split("\n");
    return originalLines.map((_, index) => getInitialDisplayLine(originalLines, index, cfg.commentPrefix));
  });

  const [cursor, setCursor] = useState(() => {
    const cfg = getLanguageConfig(language);
    const originalLines = initialCode.split("\n");

    // 最初の編集対象行を探す
    for (let i = 0; i < originalLines.length; i++) {
      if (isEditableLine(originalLines, i, cfg.commentPrefix)) {
        // インデントの直後にカーソルを置く
        const col = originalLines[i].match(/^(\s*)/)?.[0].length || 0;
        return { line: i, col };
      }
    }

    // 編集対象がない場合は、正解と異なる最初の行を探す（フォールバック）
    if (!correctCode) return { line: 0, col: 0 };

    const correctLines = correctCode.split("\n");
    const initLines = originalLines.map((_, index) => getInitialDisplayLine(originalLines, index, cfg.commentPrefix));
    for (let i = 0; i < initLines.length; i++) {
      if (normalizeCode(initLines[i], language) !== normalizeCode(correctLines[i], language)) {
        const col = originalLines[i].match(/^(\s*)/)?.[0].length || 0;
        return { line: i, col };
      }
    }
    return { line: 0, col: 0 };
  });

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [clickedButtonIdx, setClickedButtonIdx] = useState<number | null>(null);
  const [clickedControlBtn, setClickedControlBtn] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!correctCode) return;

    const correctLines = correctCode.split("\n");
    const originalLines = initialCode.split("\n");
    const holeyLine = originalLines[cursor.line] || "";

    // holeyCodeとcorrectCodeの行数が異なる場合があるため、
    // holeyLineのパターンにマッチするcorrectCode行を探す
    let targetLine = "";

    if (holeyLine.includes("___")) {
      // ___で分割して固定部分を取得
      const parts = holeyLine.split("___").map(p => p.trim()).filter(p => p.length > 0);

      // 全ての固定部分を正しい順序で含むcorrectCode行を探す
      // 同じパターンの行が複数ある場合は、cursor.lineに近い行を優先
      const candidates: { line: string; index: number }[] = [];
      for (let i = 0; i < correctLines.length; i++) {
        const correctLine = correctLines[i];
        // 各パーツが順番通りに現れるかチェック
        let pos = 0;
        let allPartsInOrder = true;
        for (const part of parts) {
          const foundPos = correctLine.indexOf(part, pos);
          if (foundPos === -1) {
            allPartsInOrder = false;
            break;
          }
          pos = foundPos + part.length;
        }
        if (allPartsInOrder) {
          candidates.push({ line: correctLine, index: i });
        }
      }

      // 候補がある場合、cursor.lineに最も近い行を選択
      if (candidates.length > 0) {
        candidates.sort((a, b) =>
          Math.abs(a.index - cursor.line) - Math.abs(b.index - cursor.line)
        );
        targetLine = candidates[0].line;
      }
    }

    // マッチしなかった場合はインデックスで取得（フォールバック）
    if (!targetLine) {
      targetLine = correctLines[cursor.line] || "";
    }

    if (targetLine.trim()) {
      const tokens = tokenize(targetLine, language);
      const expandedTokens: string[] = [];

      for (const token of tokens) {
        // f-string/テンプレートリテラル内の{...}や${...}や#{...}から変数名を抽出し、文字列部分も選択肢に追加
        // Python: f'{...}', JavaScript/TypeScript: `${...}`, Ruby/Elixir: "#{...}"
        const isStringWithInterpolation =
          ((token.startsWith('"') || token.startsWith("'")) && (token.includes('{') || token.includes('#{'))) ||
          (token.startsWith('`') && token.includes('${'));

        if (isStringWithInterpolation) {
          // 文字列内の{...}や${...}や#{...}パターンを抽出して個別に候補に追加
          // また、それらの前後の文字列も個別に候補に追加する

          // 分割用の正規表現
          const splitRegex = /([#$]?\{[^}]+\})/g;
          const parts = token.split(splitRegex);

          for (const part of parts) {
            if (part.match(splitRegex)) {
              // 中身を抽出 (例: {age} -> age)
              const innerMatch = part.match(/[#$]?\{([^}]+)\}/);
              if (innerMatch) {
                const innerContent = innerMatch[1];
                const subParts = innerContent.split(/[.\[\]()]+/).filter(p => p.trim() && /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(p));
                expandedTokens.push(...subParts);
              }
              expandedTokens.push('{', '}');
            } else {
              // 文字列部分 (例: "私は)
              const stringPart = part.replace(/^['"`]|['"`]$/g, '');
              if (stringPart) {
                // さらに記号などで細かく分ける
                const textParts = stringPart.split(/([,!?.:;])/);
                for (const tp of textParts) {
                  if (tp.trim()) {
                    expandedTokens.push(tp.trim());
                  }
                }
              }
            }
          }
        } else {
          expandedTokens.push(token);
        }
      }

      const filtered = expandedTokens.filter(t => t.trim().length > 0);
      const unique = Array.from(new Set(filtered));
      const shuffled = [...unique].sort(() => Math.random() - 0.5);
      setSuggestions(shuffled);
    } else {
      setSuggestions([]);
    }
  }, [cursor.line, correctCode, initialCode, language]);

  // 行が変わったときにクリック状態をリセット
  useEffect(() => {
    setClickedButtonIdx(null);
  }, [cursor.line]);

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
      if (normalizeCode(newLineContent, language) === normalizeCode(targetLine, language)) {
        // Line completed!

        // Check if full code is correct (including this new line)
        const newFullLines = lines.map((l, i) => i === cursor.line ? newLineContent : l);
        const newFullCode = newFullLines.join("\n");

        const normalizedFullLines = newFullLines.map(l => normalizeCode(l, language)).join("\n");
        const normalizedCorrectFullLines = correctLines.map(l => normalizeCode(l, language)).join("\n");

        if (normalizedFullLines.trim() === normalizedCorrectFullLines.trim()) {
          onRun?.(newFullCode);
        } else {
          // 次の未完成の編集対象行を探す
          const originalLines = initialCode.split("\n");
          let next = cursor.line + 1;
          while (next < lines.length) {
             // 編集対象行でない場合はスキップ
             if (!isEditableLine(originalLines, next, commentPrefix)) {
               next++;
               continue;
             }

             // 編集対象行で、まだ正解と一致していない場合はここに移動
             const currentVal = lines[next];
             const correctVal = correctLines[next];
             if (normalizeCode(currentVal, language) !== normalizeCode(correctVal, language)) {
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

      // 削除後の行内容を計算
      const newLineContent = currentLine.slice(0, cursor.col - actualDeleteCount) + textAfter;

      let nextLine = cursor.line;
      let nextCol = newCol;

      // 正解判定ロジック（handleInsertと同様）
      if (correctCode) {
        const correctLines = correctCode.split("\n");
        const targetLine = correctLines[cursor.line] || "";

        // 正規化した内容で比較
        if (normalizeCode(newLineContent, language) === normalizeCode(targetLine, language)) {
          // Line completed!

          // Check if full code is correct (including this new line)
          const newFullLines = lines.map((l, i) => i === cursor.line ? newLineContent : l);
          const newFullCode = newFullLines.join("\n");

          const normalizedFullLines = newFullLines.map(l => normalizeCode(l, language)).join("\n");
          const normalizedCorrectFullLines = correctLines.map(l => normalizeCode(l, language)).join("\n");

          if (normalizedFullLines.trim() === normalizedCorrectFullLines.trim()) {
            onRun?.(newFullCode);
          } else {
            // 次の未完成の編集対象行を探す
            const originalLines = initialCode.split("\n");
            let next = cursor.line + 1;
            while (next < lines.length) {
               // 編集対象行でない場合はスキップ
               if (!isEditableLine(originalLines, next, commentPrefix)) {
                 next++;
                 continue;
               }

               // 編集対象行で、まだ正解と一致していない場合はここに移動
               const currentVal = lines[next];
               const correctVal = correctLines[next];
               if (normalizeCode(currentVal, language) !== normalizeCode(correctVal, language)) {
                   break;
               }
               next++;
            }
            if (next < lines.length) {
                nextLine = next;
                nextCol = minCols[next];
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
    } else if (cursor.line > 0) {
      // 編集対象行で何も入力されていない場合は、前の行に戻らないようにする
      const originalLines = initialCode.split("\n");
      const isEditable = isEditableLine(originalLines, cursor.line, commentPrefix);
      const currentLineIsEmpty = lines[cursor.line].length <= minCols[cursor.line];

      if (isEditable && currentLineIsEmpty) {
        // 何もしない（前の行に戻らない）
        return;
      }

      // 前の行へ戻る（インデント位置まで）
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
    const line = lines[cursor.line];
    const tokens = tokenize(line, language);

    // トークン境界を計算
    const boundaries: number[] = [0];
    let pos = 0;
    for (const token of tokens) {
      pos += token.length;
      boundaries.push(pos);
    }

    if (direction === "left") {
      // 現在の行内でのみ移動（前の行には移動しない）
      if (cursor.col > minCols[cursor.line]) {
        // 現在位置より左にある最も近い境界を探す
        let newCol = minCols[cursor.line];
        for (const boundary of boundaries) {
          if (boundary < cursor.col && boundary >= minCols[cursor.line]) {
            newCol = boundary;
          }
        }
        setCursor((prev) => ({ ...prev, col: newCol }));
      }
    } else {
      // 現在の行内でのみ移動（次の行には移動しない）
      if (cursor.col < line.length) {
        // 現在位置より右にある最も近い境界を探す
        let newCol = line.length;
        for (const boundary of boundaries) {
          if (boundary > cursor.col) {
            newCol = boundary;
            break;
          }
        }
        setCursor((prev) => ({ ...prev, col: newCol }));
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
    const tokens = tokenize(line, language);
    const result: JSX.Element[] = [];

    const renderTokens = (tokenList: string[], insertCursorAt?: number) => {
      let currentLen = 0;
      let lastNonWhitespace = "";
      let cursorRendered = false;

      tokenList.forEach((token, i) => {
        const nextLen = currentLen + token.length;
        // Find next non-whitespace token for string prefix detection
        let nextToken: string | undefined;
        for (let j = i + 1; j < tokenList.length; j++) {
          if (tokenList[j].trim()) {
            nextToken = tokenList[j];
            break;
          }
        }
        const style = getTokenStyle(token, language, lastNonWhitespace, nextToken);
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
    <div className="flex flex-col h-full overflow-hidden" style={{ backgroundColor: SYNTAX_COLORS.background, color: SYNTAX_COLORS.foreground }}>
      <div
        ref={containerRef}
        className="overflow-y-scroll overflow-x-auto p-0 sm:p-4 font-mono text-sm leading-6 flex-1 min-h-[400px] lg:min-h-0"
        style={{ scrollbarWidth: 'thin', scrollbarColor: `${SYNTAX_COLORS.buttonBorder} ${SYNTAX_COLORS.gutterBackground}` }}
        onClick={() => {}}
      >
        {lines.map((line, lineIndex) => {
          const targetLine = correctCode ? correctCode.split("\n")[lineIndex] || "" : "";
          const trimmedTarget = targetLine.trim();
          const isComment = trimmedTarget.startsWith("//") ||
                           trimmedTarget.startsWith("#") ||
                           trimmedTarget.startsWith("/*") ||
                           trimmedTarget.startsWith("*");

          // この行が編集対象かどうかを判定（虫食い行またはコメントの次の行）
          // 判定には加工前の initialCode を使用する
          const originalLines = initialCode.split("\n");
          const isEditable = isEditableLine(originalLines, lineIndex, commentPrefix);

          // チェックマークを表示する条件：
          // 1. 編集対象行である
          // 2. 現在の入力内容が（正規化して）正解と一致している
          const showCheckmark = isEditable && targetLine && normalizeCode(line, language) === normalizeCode(targetLine, language);

          return (
            <div
              key={lineIndex}
              data-line={lineIndex}
              className={cn(
                "flex relative min-h-[1.5rem] min-w-max",
                lineIndex === cursor.line ? "bg-[#323232]" : "",
                // 現在の行で編集対象行の場合のみクリック可能
                isComment || !isEditable || lineIndex !== cursor.line ? "cursor-default" : "cursor-text"
              )}
              onClick={(e) => {
                e.stopPropagation();
                // コメント行と完成済みの行、および現在の行以外はクリック不可
                if (!isComment && isEditable && lineIndex === cursor.line) {
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

                    // トークン境界にスナップ（単語の途中にカーソルを置けないようにする）
                    const tokens = tokenize(line, language);
                    let pos = 0;
                    const boundaries: number[] = [0]; // 各トークンの境界位置を記録

                    for (const token of tokens) {
                      pos += token.length;
                      boundaries.push(pos);
                    }

                    // クリック位置に最も近い境界を見つける
                    let nearestBoundary = 0;
                    let minDistance = Math.abs(clickedCol - boundaries[0]);

                    for (const boundary of boundaries) {
                      const distance = Math.abs(clickedCol - boundary);
                      if (distance < minDistance) {
                        minDistance = distance;
                        nearestBoundary = boundary;
                      }
                    }

                    // 有効な範囲にクランプ（インデント位置〜行末）
                    const col = Math.max(minCols[lineIndex], Math.min(nearestBoundary, line.length));
                    setCursor({ line: lineIndex, col });
                  } else {
                    setCursor({ line: lineIndex, col: Math.max(minCols[lineIndex], line.length) });
                  }
                }
              }}
            >
              <div
                className="w-6 sm:w-8 mr-2 sm:mr-4 flex items-center justify-end shrink-0 select-none"
                style={{ backgroundColor: SYNTAX_COLORS.gutterBackground, color: SYNTAX_COLORS.lineNumberForeground }}
              >
                {showCheckmark ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <span style={{ color: SYNTAX_COLORS.lineNumberForeground }}>{lineIndex + 1}</span>
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
          backgroundColor: SYNTAX_COLORS.background,
          borderColor: SYNTAX_COLORS.buttonBorder
        }}
      >
        <div className="flex flex-col gap-1 sm:gap-2 mb-2 w-full max-h-[180px] sm:max-h-[160px] overflow-y-auto scrollbar-hide p-1">
          {(() => {
            if (suggestions.length === 0) {
              return (
                <div className="flex justify-center items-center min-h-[36px]">
                  <span className="text-sm sm:text-xs px-2 py-1.5" style={{ color: SYNTAX_COLORS.comment }}>ヒントはありません</span>
                </div>
              );
            }

            // 選択肢を均等に複数行に配分
            const count = suggestions.length;
            const maxPerRow = 6; // 1行あたりの最大数
            const numRows = Math.ceil(count / maxPerRow);
            const itemsPerRow = Math.ceil(count / numRows);

            const rows: string[][] = [];
            for (let i = 0; i < count; i += itemsPerRow) {
              rows.push(suggestions.slice(i, i + itemsPerRow));
            }

            return (
              <div className="flex flex-col gap-1 sm:gap-2 w-full">
                {rows.map((row, rowIdx) => (
                  <div key={rowIdx} className="flex w-full gap-1 sm:gap-2 justify-center">
                    {row.map((token, colIdx) => {
                      const idx = rowIdx * itemsPerRow + colIdx;
                      return (
                        <button
                          key={`${token}-${idx}`}
                          onClick={() => {
                            setClickedButtonIdx(idx);
                            setTimeout(() => setClickedButtonIdx(null), 500);
                            handleInsert(token);
                          }}
                          style={{
                            backgroundColor: clickedButtonIdx === idx ? '#4a9eff' : SYNTAX_COLORS.buttonBackground,
                            borderColor: SYNTAX_COLORS.buttonBorder,
                            color: SYNTAX_COLORS.foreground,
                            transition: 'background-color 0.15s ease-out'
                          }}
                          className="h-10 sm:h-14 px-4 sm:px-5 rounded font-mono font-bold border active:scale-95 text-base sm:text-xl lg:text-2xl whitespace-nowrap text-center"
                        >
                          {token}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            );
          })()}
        </div>

        <div className="grid grid-cols-4 gap-1 sm:gap-2 min-h-[36px]">
          <Button
            variant="secondary"
            style={{
              backgroundColor: clickedControlBtn === 'left' ? '#4a9eff' : SYNTAX_COLORS.buttonBackground,
              color: SYNTAX_COLORS.buttonText,
              borderColor: SYNTAX_COLORS.buttonBorder,
              transition: 'background-color 0.15s ease-out'
            }}
            className="h-9 sm:h-12 border text-sm sm:text-lg lg:text-2xl"
            onClick={() => {
              setClickedControlBtn('left');
              setTimeout(() => setClickedControlBtn(null), 500);
              moveCursor("left");
            }}
            disabled={cursor.col <= minCols[cursor.line]}
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </Button>
          <Button
            variant="secondary"
            style={{
              backgroundColor: clickedControlBtn === 'right' ? '#4a9eff' : SYNTAX_COLORS.buttonBackground,
              color: SYNTAX_COLORS.buttonText,
              borderColor: SYNTAX_COLORS.buttonBorder,
              transition: 'background-color 0.15s ease-out'
            }}
            className="h-9 sm:h-12 border text-sm sm:text-lg lg:text-2xl"
            onClick={() => {
              setClickedControlBtn('right');
              setTimeout(() => setClickedControlBtn(null), 500);
              moveCursor("right");
            }}
            disabled={cursor.col >= lines[cursor.line].length}
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </Button>
          <Button
            variant="secondary"
            style={{
              backgroundColor: clickedControlBtn === 'space' ? '#4a9eff' : SYNTAX_COLORS.buttonBackground,
              color: SYNTAX_COLORS.buttonText,
              borderColor: SYNTAX_COLORS.buttonBorder,
              transition: 'background-color 0.15s ease-out'
            }}
            className="h-9 sm:h-12 border text-sm sm:text-lg lg:text-2xl"
            onClick={() => {
              setClickedControlBtn('space');
              setTimeout(() => setClickedControlBtn(null), 500);
              handleInsert(" ");
            }}
          >
            <div className="border px-1 py-0.5 sm:px-2 rounded text-[11px] sm:text-sm lg:text-lg" style={{ borderColor: SYNTAX_COLORS.foreground }}>Space</div>
          </Button>
          <Button
            variant="destructive"
            style={{
              backgroundColor: clickedControlBtn === 'delete' ? '#ff6b6b' : undefined,
              borderColor: SYNTAX_COLORS.buttonBorder,
              transition: 'background-color 0.15s ease-out'
            }}
            className="h-9 sm:h-12 bg-red-900/50 hover:bg-red-900/80 text-white border text-sm sm:text-lg lg:text-2xl"
            onClick={() => {
              setClickedControlBtn('delete');
              setTimeout(() => setClickedControlBtn(null), 500);
              handleDelete();
            }}
            disabled={cursor.col <= minCols[cursor.line]}
          >
            <Delete className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}

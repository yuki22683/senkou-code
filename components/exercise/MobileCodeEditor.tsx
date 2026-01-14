"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Delete, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { SYNTAX_COLORS, tokenize, getTokenStyle, getLanguageConfig } from "@/lib/syntax-highlight";

interface MobileCodeEditorProps {
  initialCode: string;
  correctLines?: (string | string[])[];  // Each line can have multiple correct answers
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

// Helper function to check if a line matches any correct answer
const matchesCorrectLine = (
  userLine: string,
  correctLine: string | string[],
  language: string
): boolean => {
  const normalizedUser = normalizeCode(userLine, language);
  if (Array.isArray(correctLine)) {
    return correctLine.some(answer => normalizeCode(answer, language) === normalizedUser);
  }
  return normalizeCode(correctLine, language) === normalizedUser;
};

// Helper function to get the first correct answer for display/suggestions
const getFirstCorrectAnswer = (correctLine: string | string[]): string => {
  return Array.isArray(correctLine) ? correctLine[0] : correctLine;
};

export function MobileCodeEditor({
  initialCode,
  correctLines = [],
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
    // 虫食い（___）が含まれている場合は初期表示用に処理、そうでなければそのまま使用（復元コード）
    const hasHoley = originalLines.some(line => line.includes("___"));
    if (hasHoley) {
      return originalLines.map((_, index) => getInitialDisplayLine(originalLines, index, cfg.commentPrefix));
    }
    return originalLines;
  });

  const [cursor, setCursor] = useState(() => {
    const cfg = getLanguageConfig(language);
    const originalLines = initialCode.split("\n");
    const hasHoley = originalLines.some(line => line.includes("___"));

    if (hasHoley) {
      // 虫食いコードの場合：最初の編集対象行を探す
      for (let i = 0; i < originalLines.length; i++) {
        if (isEditableLine(originalLines, i, cfg.commentPrefix)) {
          // インデントの直後にカーソルを置く
          const col = originalLines[i].match(/^(\s*)/)?.[0].length || 0;
          return { line: i, col };
        }
      }
    } else {
      // 復元コードの場合：最初の未完成行（正解と異なる行）を探す
      if (correctLines && correctLines.length > 0) {
        for (let i = 0; i < originalLines.length; i++) {
          const correctLine = correctLines[i];
          if (correctLine && !matchesCorrectLine(originalLines[i], correctLine, language)) {
            // その行の末尾にカーソルを置く
            return { line: i, col: originalLines[i].length };
          }
        }
      }
    }

    // フォールバック
    if (!correctLines || correctLines.length === 0) return { line: 0, col: 0 };

    const initLines = hasHoley
      ? originalLines.map((_, index) => getInitialDisplayLine(originalLines, index, cfg.commentPrefix))
      : originalLines;
    for (let i = 0; i < initLines.length; i++) {
      const correctLine = correctLines[i];
      if (correctLine && !matchesCorrectLine(initLines[i], correctLine, language)) {
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
  const suggestionsContainerRef = useRef<HTMLDivElement>(null);
  const [suggestionsContainerWidth, setSuggestionsContainerWidth] = useState<number>(0);
  const [suggestionsContainerMaxHeight, setSuggestionsContainerMaxHeight] = useState<number>(180);
  const [baseFontSize, setBaseFontSize] = useState<number>(14);

  // 選択肢コンテナの幅とベースフォントサイズを監視
  useEffect(() => {
    const container = suggestionsContainerRef.current;

    const updateSizes = () => {
      if (container) {
        setSuggestionsContainerWidth(container.clientWidth);
      }
      // 画面サイズに応じたコンテナの最大高さ
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 640) {
          setSuggestionsContainerMaxHeight(160); // sm
        } else {
          setSuggestionsContainerMaxHeight(180); // default
        }
      }
      // 画面サイズに応じたベースフォントサイズ
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1024) {
          setBaseFontSize(24); // lg
        } else if (window.innerWidth >= 640) {
          setBaseFontSize(18); // sm
        } else {
          setBaseFontSize(14); // default
        }
      }
    };

    updateSizes();

    window.addEventListener('resize', updateSizes);
    const resizeObserver = container ? new ResizeObserver(updateSizes) : null;
    if (container && resizeObserver) {
      resizeObserver.observe(container);
    }

    return () => {
      window.removeEventListener('resize', updateSizes);
      resizeObserver?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!correctLines || correctLines.length === 0) return;

    const originalLines = initialCode.split("\n");
    const holeyLine = originalLines[cursor.line] || "";

    // holeyCodeとcorrectLinesの行数が異なる場合があるため、
    // holeyLineのパターンにマッチする行を探す
    let targetLine = "";

    if (holeyLine.includes("___")) {
      // ___で分割して固定部分を取得
      const parts = holeyLine.split("___").map(p => p.trim()).filter(p => p.length > 0);

      // 全ての固定部分を正しい順序で含む行を探す
      // 同じパターンの行が複数ある場合は、cursor.lineに近い行を優先
      const candidates: { line: string; index: number }[] = [];
      for (let i = 0; i < correctLines.length; i++) {
        const correctLine = getFirstCorrectAnswer(correctLines[i]);
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
      const correctLine = correctLines[cursor.line];
      targetLine = correctLine ? getFirstCorrectAnswer(correctLine) : "";
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
  }, [cursor.line, correctLines, initialCode, language]);

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

    if (correctLines && correctLines.length > 0) {
      const targetLine = correctLines[cursor.line];

      // 正規化した内容で比較（複数正解対応）
      if (targetLine && matchesCorrectLine(newLineContent, targetLine, language)) {
        // Line completed!

        // Check if full code is correct (including this new line)
        const newFullLines = lines.map((l, i) => i === cursor.line ? newLineContent : l);
        const newFullCode = newFullLines.join("\n");

        // 全行が正解と一致しているか確認
        const allLinesCorrect = newFullLines.every((line, i) => {
          const correctLine = correctLines[i];
          // correctLineがundefinedの場合はその行をスキップ（正解とみなす）
          if (correctLine === undefined) return true;
          return matchesCorrectLine(line, correctLine, language);
        });

        if (allLinesCorrect) {
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
             if (correctVal && !matchesCorrectLine(currentVal, correctVal, language)) {
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

      // 1. まず末尾の文字列リテラルをチェック (e.g. 'Python' or "Hello")
      const stringMatch = textBefore.match(/(['"])[^'"]+\1$/);
      if (stringMatch) {
        deleteCount = stringMatch[0].length;
      } else {
        // 2. 末尾の空白をチェック
        const trailingSpace = textBefore.match(/\s+$/);
        if (trailingSpace) {
          deleteCount = trailingSpace[0].length;
        } else {
          // 3. 末尾の英数字列から既知の単語（キーワード/組み込み関数）を探す
          const trailingIdentifier = textBefore.match(/[a-zA-Z_][a-zA-Z0-9_]*$/);
          if (trailingIdentifier) {
            const identifier = trailingIdentifier[0];
            const keywords = config.keywords;
            const builtins = config.builtins;
            const knownWords = [...keywords, ...builtins];

            // 末尾から既知の単語を探す（最長マッチ）
            let foundLength = 0;
            for (const word of knownWords) {
              if (identifier.endsWith(word) && word.length > foundLength) {
                foundLength = word.length;
              }
            }

            if (foundLength > 0) {
              // 既知の単語が見つかった（末尾）
              deleteCount = foundLength;
            } else {
              // 先頭から既知の単語を探す（最長マッチ）
              // 例: selfwidth → self + width なので width だけ削除
              let prefixLength = 0;
              for (const word of knownWords) {
                if (identifier.startsWith(word) && word.length > prefixLength) {
                  prefixLength = word.length;
                }
              }

              if (prefixLength > 0 && prefixLength < identifier.length) {
                // 既知の単語の後ろの部分を削除
                deleteCount = identifier.length - prefixLength;
              } else {
                // 既知の単語がない場合は、トークナイザーで境界を探す
                const tokens = tokenize(currentLine, language);
                const boundaries: number[] = [0];
                let pos = 0;
                for (const token of tokens) {
                  pos += token.length;
                  boundaries.push(pos);
                }

                let prevBoundary = 0;
                for (const boundary of boundaries) {
                  if (boundary < cursor.col) {
                    prevBoundary = boundary;
                  } else {
                    break;
                  }
                }

                const targetCol = Math.max(prevBoundary, minCols[cursor.line]);
                deleteCount = cursor.col - targetCol;
              }
            }
          } else {
            // 4. その他の文字は1文字ずつ削除
            deleteCount = 1;
          }
        }
      }

      // 削除するものがない場合は1文字削除（フォールバック）
      if (deleteCount <= 0) {
        deleteCount = 1;
      }

      // インデントを越えて削除しないように調整
      const newCol = Math.max(minCols[cursor.line], cursor.col - deleteCount);
      const actualDeleteCount = cursor.col - newCol;

      // 削除後の行内容を計算
      const newLineContent = currentLine.slice(0, cursor.col - actualDeleteCount) + textAfter;

      let nextLine = cursor.line;
      let nextCol = newCol;

      // 正解判定ロジック（handleInsertと同様、複数正解対応）
      if (correctLines && correctLines.length > 0) {
        const targetLine = correctLines[cursor.line];

        // 正規化した内容で比較（複数正解対応）
        if (targetLine && matchesCorrectLine(newLineContent, targetLine, language)) {
          // Line completed!

          // Check if full code is correct (including this new line)
          const newFullLines = lines.map((l, i) => i === cursor.line ? newLineContent : l);
          const newFullCode = newFullLines.join("\n");

          // 全行が正解と一致しているか確認
          const allLinesCorrect = newFullLines.every((line, i) => {
            const correctLine = correctLines[i];
            // correctLineがundefinedの場合はその行をスキップ（正解とみなす）
            if (correctLine === undefined) return true;
            return matchesCorrectLine(line, correctLine, language);
          });

          if (allLinesCorrect) {
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
               if (correctVal && !matchesCorrectLine(currentVal, correctVal, language)) {
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

      // スペースを可視化するヘルパー関数
      const renderToken = (token: string, key: string | number, style: React.CSSProperties) => {
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

            if (before) result.push(renderToken(before, `${i}-b`, style));
            result.push(<span key="cursor" className="inline-block w-[2px] h-[1.2em] bg-blue-500 align-middle animate-pulse -mb-1"></span>);
            if (after) result.push(renderToken(after, `${i}-a`, style));

            cursorRendered = true;
        } else {
            result.push(renderToken(token, i, style));
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
        className="overflow-y-scroll overflow-x-auto p-0 sm:p-4 font-mono text-sm leading-6 flex-1 max-h-[50vh] sm:max-h-none min-h-0 sm:min-h-[400px] lg:min-h-0"
        style={{ scrollbarWidth: 'thin', scrollbarColor: `${SYNTAX_COLORS.buttonBorder} ${SYNTAX_COLORS.gutterBackground}` }}
        onClick={() => {}}
      >
        {lines.map((line, lineIndex) => {
          const correctLine = correctLines && correctLines[lineIndex];
          const targetLine = correctLine ? getFirstCorrectAnswer(correctLine) : "";
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
          // 2. 現在の入力内容が（正規化して）正解のいずれかと一致している
          const showCheckmark = isEditable && correctLine && matchesCorrectLine(line, correctLine, language);

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
        <div
          ref={suggestionsContainerRef}
          className="flex flex-col gap-1 sm:gap-2 mb-2 w-full max-h-[180px] sm:max-h-[160px] overflow-hidden p-1"
        >
          {(() => {
            if (suggestions.length === 0) {
              return (
                <div className="flex justify-center items-center min-h-[36px]">
                  <span className="text-sm sm:text-xs px-2 py-1.5" style={{ color: SYNTAX_COLORS.comment }}>ヒントはありません</span>
                </div>
              );
            }

            // 選択肢をできるだけ均等な数で複数行に配分
            const count = suggestions.length;
            const maxPerRow = 4;
            const numRows = Math.ceil(count / maxPerRow);

            const rows: string[][] = [];
            let startIndex = 0;

            for (let i = 0; i < numRows; i++) {
              // 残りのアイテムを残りの行数で割って、現在の行の個数を決定
              // これにより、余りが各行に分散され、行ごとの個数差が1以内になる
              // 例: 13個, 3行 -> 5, 4, 4
              const itemsForThisRow = Math.ceil((count - startIndex) / (numRows - i));
              const endIndex = startIndex + itemsForThisRow;
              rows.push(suggestions.slice(startIndex, endIndex));
              startIndex = endIndex;
            }

            // 行ごとにフォントサイズを計算（コンテナ幅を超えないように）
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
            const isPC = typeof window !== 'undefined' && window.innerWidth >= 1024;
            const calculateRowFontSize = (tokens: string[]): number => {
              if (suggestionsContainerWidth <= 0) return baseFontSize;

              const gapBetweenButtons = isMobile ? 4 : 8; // gap-1 sm:gap-2
              const containerPadding = 8; // p-1 = 4px * 2
              const margin = isMobile ? 16 : 48; // スマホ/PCではマージンを小さく
              const availableWidth = suggestionsContainerWidth - containerPadding - margin;
              const totalGaps = (tokens.length - 1) * gapBetweenButtons;
              const availableForButtons = availableWidth - totalGaps;

              // 各ボタンの最小幅を計算（フォントサイズ * 文字数 * 係数 + パディング）
              const charWidthFactor = 0.75; // モノスペースフォントの文字幅係数
              const buttonPadding = 4; // ボタンのパディング（px-0 + border）

              const estimateRowWidth = (fontSize: number) => {
                return tokens.reduce((sum, t) => sum + t.length * fontSize * charWidthFactor + buttonPadding, 0);
              };

              // 利用可能な幅に収まる最大フォントサイズを計算
              let currentFontSize = 24; // 開始サイズ
              const minFontSize = 8;

              // 幅が収まるまでフォントサイズを縮小
              while (estimateRowWidth(currentFontSize) > availableForButtons && currentFontSize > minFontSize) {
                currentFontSize--;
              }

              return currentFontSize;
            };

            // 行の高さを計算（コンテナの高さに収まるように）
            const containerPadding = 8; // p-1 = 4px * 2
            const rowGap = isMobile ? 4 : 8; // gap-1 sm:gap-2
            const availableHeight = suggestionsContainerMaxHeight - containerPadding;
            const totalRowGaps = (numRows - 1) * rowGap;
            const availableForRows = availableHeight - totalRowGaps;
            const baseRowHeight = isMobile ? 36 : 48; // h-9 sm:h-12
            const calculatedRowHeight = Math.min(baseRowHeight, Math.floor(availableForRows / numRows));
            const rowHeight = Math.max(20, calculatedRowHeight); // 最小20px

            return (
              <div className={`flex flex-col w-full items-center ${isMobile ? 'gap-1' : 'gap-1 sm:gap-2'}`}>
                {rows.map((row, rowIdx) => {
                  const widthBasedFontSize = calculateRowFontSize(row);
                  // ボタンの高さに基づくフォントサイズ（高さの60%程度）
                  const heightBasedFontSize = Math.floor(rowHeight * 0.6);
                  // 幅と高さの両方に収まるフォントサイズを選択
                  const fontSize = Math.min(widthBasedFontSize, heightBasedFontSize);
                  const isScaled = fontSize < baseFontSize;
                  // PC表示ではスマホと同じくテキストに合わせた幅を使用
                  const useMaxContent = isPC || !isScaled;

                  return (
                    <div
                      key={rowIdx}
                      className={`grid grid-flow-col w-full ${isMobile ? 'gap-1' : 'gap-1 sm:gap-2'}`}
                      style={{ gridAutoColumns: useMaxContent ? "minmax(max-content, 1fr)" : "minmax(0, 1fr)" }}
                    >
                      {row.map((token) => {
                        const idx = suggestions.indexOf(token);
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
                              transition: 'background-color 0.15s ease-out',
                              fontSize: `${fontSize}px`,
                              height: `${rowHeight}px`
                            }}
                            className="w-full rounded font-mono font-bold border active:scale-95 whitespace-nowrap overflow-hidden px-0 py-0 leading-none flex items-center justify-center"
                          >
                            {token}
                          </button>
                        );
                      })}
                    </div>
                  );
                })}
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

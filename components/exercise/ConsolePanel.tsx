"use client";

import React, { useRef, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Terminal, FileText, RefreshCw, AlertTriangle, XCircle, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ParsedError } from "@/lib/parse-execution-errors";

interface ConsolePanelProps {
  output: string;
  error: string;
  isLoading: boolean;
  correctOutput?: string;
  correctError?: string;
  isCorrectLoading?: boolean;
  activeTab?: string;
  onTabChange?: (value: string) => void;
  onRetry?: () => void;
  parsedError?: ParsedError | null;
  correctParsedError?: ParsedError | null;
  showNextButton?: boolean;
  nextButtonLabel?: string;
  onNextClick?: () => void;
}

// ネットワークエラーかどうかを判定
function isNetworkError(errorMessage: string): boolean {
  const networkErrorPatterns = [
    "タイムアウト",
    "接続できません",
    "ネットワーク",
    "サーバー",
    "再試行",
    "timeout",
    "network",
    "connection",
  ];
  return networkErrorPatterns.some((pattern) =>
    errorMessage.toLowerCase().includes(pattern.toLowerCase())
  );
}

// エラータイプに応じたアイコンを取得
function getErrorIcon(type: ParsedError["type"]) {
  switch (type) {
    case "compile":
      return <AlertTriangle className="w-4 h-4" />;
    case "runtime":
      return <XCircle className="w-4 h-4" />;
    case "timeout":
      return <Clock className="w-4 h-4" />;
    default:
      return <XCircle className="w-4 h-4" />;
  }
}

// エラータイプに応じた日本語ラベルを取得
function getErrorTypeLabel(type: ParsedError["type"]): string {
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

// エラータイプに応じたスタイルクラスを取得
function getErrorStyles(type: ParsedError["type"]) {
  switch (type) {
    case "compile":
      return {
        bg: "bg-yellow-50",
        border: "border-yellow-300",
        header: "bg-yellow-100 text-yellow-800",
        text: "text-yellow-900",
      };
    case "timeout":
      return {
        bg: "bg-orange-50",
        border: "border-orange-300",
        header: "bg-orange-100 text-orange-800",
        text: "text-orange-900",
      };
    default:
      return {
        bg: "bg-red-50",
        border: "border-red-300",
        header: "bg-red-100 text-red-800",
        text: "text-red-900",
      };
  }
}

// エラー表示コンポーネント
function ErrorDisplay({
  error,
  parsedError,
  onRetry,
}: {
  error: string;
  parsedError?: ParsedError | null;
  onRetry?: () => void;
}) {
  const [showStackTrace, setShowStackTrace] = useState(false);

  // parsedErrorがあれば使用、なければ従来の表示
  if (!parsedError) {
    return (
      <div className="bg-red-50 border border-red-200 rounded p-3">
        <pre className="text-red-600 whitespace-pre-wrap break-words">{error}</pre>
        {onRetry && isNetworkError(error) && (
          <Button
            onClick={onRetry}
            variant="outline"
            size="sm"
            className="mt-3"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            再試行
          </Button>
        )}
      </div>
    );
  }

  const styles = getErrorStyles(parsedError.type);

  return (
    <div className={`${styles.bg} border ${styles.border} rounded overflow-hidden`}>
      {/* エラーヘッダー */}
      <div className={`${styles.header} px-3 py-2 flex items-center gap-2`}>
        {getErrorIcon(parsedError.type)}
        <span className="font-semibold text-sm">{getErrorTypeLabel(parsedError.type)}</span>
        {parsedError.line && (
          <span className="text-xs opacity-80">
            {parsedError.line}行目
            {parsedError.column && `${parsedError.column}列目`}
          </span>
        )}
      </div>

      {/* エラーメッセージ */}
      <div className="p-3">
        <pre className={`${styles.text} whitespace-pre-wrap break-words text-sm`}>
          {parsedError.message || error}
        </pre>

        {/* スタックトレース（折りたたみ） */}
        {parsedError.stackTrace && (
          <div className="mt-3 border-t border-gray-200 pt-2">
            <button
              onClick={() => setShowStackTrace(!showStackTrace)}
              className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-800"
            >
              {showStackTrace ? (
                <ChevronUp className="w-3 h-3" />
              ) : (
                <ChevronDown className="w-3 h-3" />
              )}
              詳細を{showStackTrace ? "閉じる" : "表示"}
            </button>
            {showStackTrace && (
              <pre className="mt-2 text-xs text-gray-600 whitespace-pre-wrap break-words bg-gray-100 p-2 rounded">
                {parsedError.stackTrace}
              </pre>
            )}
          </div>
        )}

        {/* ネットワークエラー時の再試行ボタン */}
        {onRetry && (parsedError.type === "timeout" || isNetworkError(error)) && (
          <Button
            onClick={onRetry}
            variant="outline"
            size="sm"
            className="mt-3"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            再試行
          </Button>
        )}
      </div>
    </div>
  );
}

export function ConsolePanel({
  output,
  error,
  isLoading,
  correctOutput = "",
  correctError = "",
  isCorrectLoading = false,
  activeTab = "console",
  onTabChange,
  onRetry,
  parsedError,
  correctParsedError,
  showNextButton = false,
  nextButtonLabel = "次の演習へ",
  onNextClick,
}: ConsolePanelProps) {
  const consoleContentRef = useRef<HTMLDivElement>(null);
  const examplesContentRef = useRef<HTMLDivElement>(null);

  // コンソール出力が変わったら最下部にスクロール
  useEffect(() => {
    if (consoleContentRef.current && (output || error)) {
      consoleContentRef.current.scrollTop = consoleContentRef.current.scrollHeight;
    }
  }, [output, error]);

  // 見本出力が変わったら最下部にスクロール
  useEffect(() => {
    if (examplesContentRef.current && (correctOutput || correctError)) {
      examplesContentRef.current.scrollTop = examplesContentRef.current.scrollHeight;
    }
  }, [correctOutput, correctError]);

  return (
    <div className="h-full flex flex-col max-h-full">
      <Tabs 
        value={activeTab} 
        onValueChange={onTabChange}
        className="h-full flex flex-col max-h-full"
      >
        <TabsList className="w-full justify-start rounded-none border-b bg-gray-50 flex-shrink-0">
          <TabsTrigger value="console" className="flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            コンソール
          </TabsTrigger>
          <TabsTrigger value="examples" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            見本
          </TabsTrigger>
          {showNextButton && onNextClick && (
            <Button
              onClick={onNextClick}
              size="sm"
              className="ml-auto h-8 text-sm"
            >
              {nextButtonLabel}
            </Button>
          )}
        </TabsList>

        <TabsContent ref={consoleContentRef} value="console" className="flex-1 min-h-0 overflow-auto p-4 mt-0 bg-gray-50">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-gray-600">実行中...</span>
            </div>
          ) : (
            <div className="font-mono text-sm space-y-4">
              {error ? (
                <ErrorDisplay error={error} parsedError={parsedError} onRetry={onRetry} />
              ) : output ? (
                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <div className="text-green-700 font-semibold mb-2">出力</div>
                  <pre className="text-gray-800 whitespace-pre-wrap break-words">{output}</pre>
                </div>
              ) : (
                <div className="text-gray-500 text-center py-8">
                  全ての行が正解になると、ここに実行結果が表示されます
                </div>
              )}
            </div>
          )}
        </TabsContent>

        <TabsContent ref={examplesContentRef} value="examples" className="flex-1 min-h-0 overflow-auto p-4 mt-0 bg-gray-50">
          {isCorrectLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-gray-600">実行中...</span>
            </div>
          ) : (
            <div className="font-mono text-sm space-y-4">
              {correctError ? (
                <ErrorDisplay error={correctError} parsedError={correctParsedError} />
              ) : correctOutput ? (
                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <div className="text-green-700 font-semibold mb-2">見本</div>
                  <pre className="text-gray-800 whitespace-pre-wrap break-words">{correctOutput}</pre>
                </div>
              ) : (
                <div className="text-gray-500 text-center py-8 leading-relaxed">
                  正解コードの実行結果を表示しています...
                </div>
              )}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

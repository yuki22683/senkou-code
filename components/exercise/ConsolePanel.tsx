"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Terminal, FileText } from "lucide-react";

interface ConsolePanelProps {
  output: string;
  error: string;
  isLoading: boolean;
  correctOutput?: string;
  correctError?: string;
  isCorrectLoading?: boolean;
  activeTab?: string;
  onTabChange?: (value: string) => void;
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
}: ConsolePanelProps) {
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
        </TabsList>

        <TabsContent value="console" className="flex-1 min-h-0 overflow-auto p-4 mt-0 bg-gray-50">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-gray-600">実行中...</span>
            </div>
          ) : (
            <div className="font-mono text-sm space-y-4">
              {error ? (
                <div className="bg-red-50 border border-red-200 rounded p-3">
                  <pre className="text-red-600 whitespace-pre-wrap">{error}</pre>
                </div>
              ) : output ? (
                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <div className="text-green-700 font-semibold mb-2">出力</div>
                  <pre className="text-gray-800 whitespace-pre-wrap">{output}</pre>
                </div>
              ) : (
                <div className="text-gray-500 text-center py-8">
                  コードを実行すると、ここに結果が表示されます
                </div>
              )}
            </div>
          )}
        </TabsContent>

        <TabsContent value="examples" className="flex-1 min-h-0 overflow-auto p-4 mt-0 bg-gray-50">
          {isCorrectLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-gray-600">実行中...</span>
            </div>
          ) : (
            <div className="font-mono text-sm space-y-4">
              {correctError ? (
                <div className="bg-red-50 border border-red-200 rounded p-3">
                  <pre className="text-red-600 whitespace-pre-wrap">{correctError}</pre>
                </div>
              ) : correctOutput ? (
                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <div className="text-green-700 font-semibold mb-2">お手本出力</div>
                  <pre className="text-gray-800 whitespace-pre-wrap">{correctOutput}</pre>
                </div>
              ) : (
                <div className="text-gray-500 text-center py-8 leading-relaxed">
                  実行すると、ここに正解の結果が表示されます
                </div>
              )}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

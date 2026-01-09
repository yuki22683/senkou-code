"use client";

import React, { useState } from "react";
import Editor from "@monaco-editor/react";

interface CodeEditorProps {
  initialCode: string;
  language: string;
  onChange?: (value: string | undefined) => void;
  readOnly?: boolean;
}

export function CodeEditor({
  initialCode,
  language,
  onChange,
  readOnly = false,
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || "");
    onChange?.(value);
  };

  // 言語IDをMonacoの言語名にマッピング
  const getMonacoLanguage = (lang: string) => {
    const languageMap: Record<string, string> = {
      python: "python",
      javascript: "javascript",
      java: "java",
      cpp: "cpp",
      csharp: "csharp",
      go: "go",
      rust: "rust",
      ruby: "ruby",
      php: "php",
      sql: "sql",
      kotlin: "kotlin",
      swift: "swift",
      perl: "perl",
    };
    return languageMap[lang] || "plaintext";
  };

  return (
    <div className="h-full w-full overflow-hidden">
      <Editor
        height="100%"
        language={getMonacoLanguage(language)}
        value={code}
        onChange={handleEditorChange}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          scrollBeyondLastLine: false,
          automaticLayout: true,
          readOnly,
          tabSize: 2,
          renderWhitespace: "all",
        }}
      />
    </div>
  );
}

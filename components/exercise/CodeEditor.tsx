"use client";

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import type { Monaco } from "@monaco-editor/react";

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

  const handleEditorWillMount = (monaco: Monaco) => {
    monaco.editor.defineTheme("darcula", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "keyword", foreground: "CC7832" },
        { token: "string", foreground: "6A8759" },
        { token: "number", foreground: "6897BB" },
        { token: "comment", foreground: "D0D0D0" },
        { token: "type", foreground: "D0D0D0" },
        { token: "class", foreground: "FFC66D" },
        { token: "function", foreground: "FFC66D" },
        { token: "variable", foreground: "D0D0D0" },
      ],
      colors: {
        "editor.background": "#2B2B2B",
        "editor.foreground": "#D0D0D0",
        "editorLineNumber.foreground": "#606366",
        "editor.selectionBackground": "#214283",
        "editor.lineHighlightBackground": "#323232",
        "editorCursor.foreground": "#BBBBBB",
        "editorWhitespace.foreground": "#404040",
      },
    });
  };

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
        beforeMount={handleEditorWillMount}
        theme="darcula"
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

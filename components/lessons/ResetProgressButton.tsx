"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RotateCcw, AlertTriangle, Loader2 } from "lucide-react";

interface ResetProgressButtonProps {
  language?: string;
  languageName?: string;
  lessonId?: string;
  lessonTitle?: string;
}

export function ResetProgressButton({
  language,
  languageName,
  lessonId,
  lessonTitle,
}: ResetProgressButtonProps) {
  const router = useRouter();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const isLessonReset = !!lessonId;
  const targetName = isLessonReset ? lessonTitle : languageName;
  const targetType = isLessonReset ? "このレッスン" : "全レッスン";

  async function handleReset() {
    setIsResetting(true);
    try {
      const response = await fetch("/api/progress/reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(isLessonReset ? { lessonId } : { language }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "リセットに失敗しました");
      }

      setShowConfirmDialog(false);
      router.refresh();
    } catch (error: unknown) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const anyError = error as any;
      console.error("Reset error:", anyError);
      alert(anyError.message || "リセットに失敗しました");
    } finally {
      setIsResetting(false);
    }
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setShowConfirmDialog(true)}
        className="text-orange-600 border-orange-300 hover:bg-orange-50 hover:text-orange-700"
      >
        <RotateCcw className="w-4 h-4 mr-2" />
        最初からやり直す
      </Button>

      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-orange-600">
              <AlertTriangle className="w-5 h-5" />
              進捗をリセットしますか？
            </DialogTitle>
            <DialogDescription className="pt-2">
              <strong>{targetName}</strong> の{targetType}の進捗がリセットされます。
              この操作は取り消せません。
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() => setShowConfirmDialog(false)}
              disabled={isResetting}
            >
              キャンセル
            </Button>
            <Button
              variant="destructive"
              onClick={handleReset}
              disabled={isResetting}
            >
              {isResetting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  リセット中...
                </>
              ) : (
                "リセットする"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

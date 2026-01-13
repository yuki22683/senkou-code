"use client";

import { useEffect, useState } from "react";
import { CelebrationMessage, CelebrationType } from "@/lib/celebrations/messages";
import { Zap } from "lucide-react";

interface CelebrationOverlayProps {
  isOpen: boolean;
  type: CelebrationType;
  message: CelebrationMessage;
  onClose: () => void;
  autoDismissDelay?: number;
  earnedXp?: number;
}

// ランダムなRGB色を生成（暗めの色で透明度付き）
function generateRandomColor(opacity: number = 0.85): string {
  // 暗めの色にするため、各成分を0-180の範囲に制限
  const r = Math.floor(Math.random() * 180);
  const g = Math.floor(Math.random() * 180);
  const b = Math.floor(Math.random() * 180);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

// ランダムなグラデーション背景を生成
function generateRandomGradient(type: CelebrationType): string {
  const opacity = type === "language" ? 0.9 : type === "lesson" ? 0.85 : 0.8;
  const color1 = generateRandomColor(opacity);
  const color2 = generateRandomColor(opacity);
  const color3 = generateRandomColor(opacity);
  return `linear-gradient(to bottom right, ${color1}, ${color2}, ${color3})`;
}

function getStyles(type: CelebrationType) {
  switch (type) {
    case "language":
      return {
        title: "text-4xl sm:text-5xl text-amber-300",
      };
    case "lesson":
      return {
        title: "text-3xl sm:text-4xl text-blue-300",
      };
    case "exercise":
    default:
      return {
        title: "text-2xl sm:text-3xl text-green-300",
      };
  }
}

export function CelebrationOverlay({
  isOpen,
  type,
  message,
  onClose,
  autoDismissDelay = 3000,
  earnedXp = 0,
}: CelebrationOverlayProps) {
  // isOpenがtrueになるたびに新しいランダムグラデーションを生成
  const [backgroundGradient, setBackgroundGradient] = useState<string>("");

  useEffect(() => {
    if (isOpen) {
      setBackgroundGradient(generateRandomGradient(type));
    }
  }, [isOpen, type]);

  useEffect(() => {
    if (!isOpen || !autoDismissDelay) return;

    const timeout = setTimeout(onClose, autoDismissDelay);
    return () => clearTimeout(timeout);
  }, [isOpen, autoDismissDelay, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const styles = getStyles(type);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 flex items-center justify-center"
      style={{ zIndex: 10000, background: backgroundGradient }}
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center justify-center max-w-lg w-full mx-4 p-8 sm:p-12 rounded-2xl border-2 bg-white/95 backdrop-blur-sm animate-celebration-bounce-in shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={`font-bold text-center mb-3 ${styles.title}`}>
          {message.japanese}
        </h2>
        <p className="text-lg text-gray-600 text-center">
          {message.english}
        </p>
        {earnedXp > 0 && (
          <div className="mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300 rounded-full">
            <Zap className="w-5 h-5 text-yellow-600" />
            <span className="text-lg font-bold text-yellow-700">+{earnedXp} XP</span>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
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

function getStyles(type: CelebrationType) {
  switch (type) {
    case "language":
      return {
        overlay: "bg-gradient-to-br from-purple-900/90 via-pink-900/90 to-amber-900/90",
        title: "text-4xl sm:text-5xl text-amber-300",
      };
    case "lesson":
      return {
        overlay: "bg-gradient-to-br from-blue-900/85 via-indigo-900/85 to-purple-900/85",
        title: "text-3xl sm:text-4xl text-blue-300",
      };
    case "exercise":
    default:
      return {
        overlay: "bg-black/75",
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
      className={`fixed inset-0 flex items-center justify-center ${styles.overlay}`}
      style={{ zIndex: 10000 }}
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

"use client";

import { useEffect, useState, useMemo } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  shape: "square" | "circle";
}

const COLORS = [
  "#FFD700",
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFEAA7",
  "#DDA0DD",
  "#FF69B4",
  "#00CED1",
  "#32CD32",
];

interface ConfettiProps {
  isActive: boolean;
  particleCount?: number;
  duration?: number;
  onComplete?: () => void;
}

export function Confetti({
  isActive,
  particleCount = 50,
  duration = 3000,
  onComplete,
}: ConfettiProps) {
  const [visible, setVisible] = useState(false);

  const pieces = useMemo<ConfettiPiece[]>(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 8 + Math.random() * 8,
      shape: Math.random() > 0.5 ? "circle" : "square",
    }));
  }, [particleCount]);

  useEffect(() => {
    if (isActive) {
      setVisible(true);

      const timeout = setTimeout(() => {
        setVisible(false);
        if (onComplete) {
          onComplete();
        }
      }, duration);

      return () => clearTimeout(timeout);
    } else {
      setVisible(false);
    }
  }, [isActive, duration, onComplete]);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 99999 }}
      aria-hidden="true"
    >
      {pieces.map((piece) => (
        <div
          key={piece.id}
          style={{
            position: "absolute",
            left: `${piece.left}%`,
            top: -20,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            borderRadius: piece.shape === "circle" ? "50%" : 0,
            animation: `confetti-fall ${piece.duration}s ease-out ${piece.delay}s forwards`,
          }}
        />
      ))}
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

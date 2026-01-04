"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/LoginButton";

export function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              閃光コード
            </span>
          </Link>

          <nav className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/">ホーム</Link>
            </Button>
            <LoginButton />
          </nav>
        </div>
      </div>
    </header>
  );
}

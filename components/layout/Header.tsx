"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/LoginButton";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-8 h-8 transition-transform group-hover:rotate-12">
              <Image 
                src="/illustrations/decorations/logo_spark.png" 
                alt="Logo Spark" 
                fill 
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              閃光コード
            </span>
          </Link>

          <nav className="flex items-center space-x-4">
            <LoginButton />
          </nav>
        </div>
      </div>
    </header>
  );
}

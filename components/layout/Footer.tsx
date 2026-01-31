"use client";

import { NavigationLink } from "./NavigationLink";

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-sm text-muted-foreground">
          <p className="mb-3">© 2025 令和プログラミング. All rights reserved.</p>
          <div className="flex justify-center items-center gap-6">
            <NavigationLink href="/privacy" className="hover:text-primary">
              プライバシーポリシー
            </NavigationLink>
            <NavigationLink href="/terms" className="hover:text-primary">
              利用規約
            </NavigationLink>
            <NavigationLink href="/contact" className="hover:text-primary">
              お問い合わせ
            </NavigationLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

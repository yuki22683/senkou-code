"use client";

import { LoginButton } from "@/components/auth/LoginButton";
import { UserXpDisplay } from "@/components/auth/UserXpDisplay";
import Image from "next/image";
import { Trophy, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { NavigationLink } from "./NavigationLink";

export function Header() {
  const [isAdmin, setIsAdmin] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const { data, error } = await supabase
            .from('users')
            .select('is_admin')
            .eq('id', user.id)
            .single();
          if (!error && data) {
            setIsAdmin(data.is_admin || false);
          }
        } else {
          setIsAdmin(false);
        }
      } catch (err) {
        console.error('Admin check error:', err);
        setIsAdmin(false);
      }
    };

    checkAdmin();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      checkAdmin();
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4">
        <div className="flex items-center justify-between">
          <NavigationLink href="/" className="flex items-center group">
            <Image
              src="/icons/logo_long.png"
              alt="令和プログラミング"
              width={300}
              height={60}
              className="h-7 sm:h-14 lg:h-16 w-auto object-contain"
            />
          </NavigationLink>

          <nav className="flex items-center space-x-2 sm:space-x-4">
            {isAdmin && (
              <NavigationLink
                href="/admin"
                className="flex items-center gap-1 px-2 sm:px-3 py-1.5 text-sm text-amber-600 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors"
              >
                <Shield className="w-4 h-4" />
                <span className="hidden sm:inline">管理者</span>
              </NavigationLink>
            )}
            <NavigationLink
              href="/ranking"
              className="flex items-center gap-1 px-2 sm:px-3 py-1.5 text-sm text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
            >
              <Trophy className="w-4 h-4" />
              <span className="hidden sm:inline">ランキング</span>
            </NavigationLink>
            <UserXpDisplay />
            <LoginButton />
          </nav>
        </div>
      </div>
    </header>
  );
}

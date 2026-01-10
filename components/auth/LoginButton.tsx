"use client";

import { Button } from "@/components/ui/button";
import { useAuth, signInWithGoogle, signOut } from "@/hooks/useAuth";
import { LogIn, LogOut, RefreshCw } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LoginButton() {
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (loading) {
    return (
      <Button variant="outline" disabled>
        読み込み中...
      </Button>
    );
  }

  if (!user) {
    return (
      <Button onClick={() => signInWithGoogle()}>
        <LogIn className="w-4 h-4 sm:mr-2" />
        <span className="hidden sm:inline">Googleでログイン</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center sm:space-x-2">
          {user.user_metadata.avatar_url ? (
            <img
              src={user.user_metadata.avatar_url}
              alt="Profile"
              className="w-6 h-6 rounded-full"
            />
          ) : (
            <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs">
              {(user.user_metadata.full_name || user.email || '?')[0].toUpperCase()}
            </div>
          )}
          <span className="hidden sm:inline">{user.user_metadata.full_name || user.email}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>マイアカウント</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-sm text-muted-foreground">
          {user.email}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => signInWithGoogle()}
          className="cursor-pointer"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          アカウントを切り替える
        </DropdownMenuItem>
        {isHomePage && (
          <DropdownMenuItem
            onClick={() => signOut()}
            className="text-red-600 cursor-pointer"
          >
            <LogOut className="w-4 h-4 mr-2" />
            ログアウト
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

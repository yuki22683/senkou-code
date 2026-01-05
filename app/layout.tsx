import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AffiliateLinkProvider } from "@/components/layout/AffiliateLinkProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "閃光コード - プログラミング学習プラットフォーム",
  description: "完全無料で楽しく学ぶプログラミング演習アプリ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <AffiliateLinkProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AffiliateLinkProvider>
      </body>
    </html>
  );
}

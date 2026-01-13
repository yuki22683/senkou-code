"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

export type AmazonAdType = 'book' | 'furusato' | 'ranking' | 'timesale';

interface AmazonAdCardProps {
  type: AmazonAdType;
}

const adConfig: Record<AmazonAdType, { href: string; src: string; title: string }> = {
  book: {
    href: "https://amzn.to/3YHTkdu",
    src: "/Amazon/Amazon_book.png",
    title: "Amazon 本"
  },
  furusato: {
    href: "https://amzn.to/4qnIOEo",
    src: "/Amazon/Amazon_furusato.png",
    title: "Amazon ふるさと納税"
  },
  ranking: {
    href: "https://amzn.to/45hogFa",
    src: "/Amazon/Amazon_ranking.png",
    title: "Amazon ランキング"
  },
  timesale: {
    href: "https://amzn.to/3Y7mhiZ",
    src: "/Amazon/Amazon_timesale.png",
    title: "Amazon タイムセール"
  }
};

export function AmazonAdCard({ type }: AmazonAdCardProps) {
  const ad = adConfig[type];

  return (
    <a href={ad.href} target="_blank" rel="nofollow sponsored noopener" className="block h-full">
      <Card className="transition-all hover:shadow-lg hover:scale-105 cursor-pointer border-2 h-full bg-white border-orange-100 overflow-hidden relative group">
        <div className="relative w-full h-full min-h-[100px] sm:min-h-[133px] md:min-h-[200px]">
          <Image 
            src={ad.src} 
            alt={ad.title}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm z-10">
            PR
          </div>
        </div>
      </Card>
    </a>
  );
}

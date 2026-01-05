"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Language, LANGUAGE_COLORS } from "@/data/languages";
import Image from "next/image";

interface LanguageCardProps {
  language: Language;
}

export function LanguageCard({ language }: LanguageCardProps) {
  const colorClass = LANGUAGE_COLORS[language.id] || 'bg-gray-50 hover:bg-gray-100 border-gray-200';

  return (
    <Link href={`/lessons/${language.id}`}>
      <Card className={`transition-all hover:shadow-lg hover:scale-105 cursor-pointer border-2 h-full ${colorClass}`}>
        <CardHeader className="p-3 sm:p-6">
          <div className="flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16 mb-2 sm:mb-4 rounded-full bg-white shadow-md overflow-hidden p-2 sm:p-3">
            <div className="relative w-full h-full">
              <Image 
                src={language.icon} 
                alt={language.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <CardTitle className="text-sm sm:text-xl font-bold">{language.name}</CardTitle>
          <CardDescription className="text-gray-700 text-[10px] sm:text-sm line-clamp-2 sm:line-clamp-none">
            {language.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 sm:p-6 pt-0 sm:pt-0">
          <div className="flex items-center justify-between text-[10px] sm:text-sm text-gray-600">
            <span>{language.extension}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

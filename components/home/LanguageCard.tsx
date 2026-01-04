"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Language } from "@/data/languages";
import { Code2 } from "lucide-react";

interface LanguageCardProps {
  language: Language;
}

export function LanguageCard({ language }: LanguageCardProps) {
  return (
    <Link href={`/lessons/${language.id}`}>
      <Card className={`transition-all hover:shadow-lg hover:scale-105 cursor-pointer ${language.color}`}>
        <CardHeader>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white shadow-md">
            <Code2 className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-xl">{language.name}</CardTitle>
          <CardDescription className="text-gray-700">
            {language.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>拡張子: {language.extension}</span>
            <span className="px-2 py-1 bg-white rounded text-xs font-mono">
              ID: {language.judge0Id}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

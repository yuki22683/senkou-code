import * as fs from 'fs';
import * as path from 'path';

// Helper to add hole and comment to a line
function transformLine(line: string, instruction: string, correctValue: string): { holey: string, correct: string } {
  if (line.includes('___')) {
    return {
      holey: `// ${instruction}\n${line}`,
      correct: `// ${instruction}\n${line.replace('___', correctValue)}`
    };
  }
  // If no hole, make one
  // Simplified: just replace first meaningful part
  const holey = `// ${instruction}\n${line.replace(correctValue, '___')}`;
  const correct = `// ${instruction}\n${line}`;
  return { holey, correct };
}

// More specific replacement function for holeyCode
function makeHoley(code: string): string {
  const lines = code.split('\n');
  const newLines: string[] = [];
  
  lines.forEach(line => {
    const trimmed = line.trim();
    if (!trimmed) {
      newLines.push(line);
      return;
    }
    if (trimmed.startsWith('//')) {
      newLines.push(line);
      return;
    }
    
    // If line doesn't have a hole, add one and a comment
    if (!line.includes('___')) {
      if (trimmed.startsWith('#include <stdio.h>')) {
        newLines.push('// stdio.h をインクルード');
        newLines.push(line.replace('stdio.h', '___'));
      } else if (trimmed.startsWith('#include <stdlib.h>')) {
        newLines.push('// stdlib.h をインクルード');
        newLines.push(line.replace('stdlib.h', '___'));
      } else if (trimmed.startsWith('#include <string.h>')) {
        newLines.push('// string.h をインクルード');
        newLines.push(line.replace('string.h', '___'));
      } else if (trimmed.startsWith('#include <stdarg.h>')) {
        newLines.push('// stdarg.h をインクルード');
        newLines.push(line.replace('stdarg.h', '___'));
      } else if (trimmed === 'int main() {') {
        newLines.push('// main 関数を定義');
        newLines.push('int ___() {');
      } else if (trimmed === 'return 0;') {
        newLines.push('// 0 を返して終了');
        newLines.push('return ___;');
      } else if (trimmed === '}') {
        newLines.push('// ブロックの終わり');
        newLines.push('___'); // Replace } with ___ 
      } else if (trimmed.startsWith('printf(')) {
        newLines.push('// メッセージを表示');
        newLines.push(line.replace('printf', '___'));
      } else {
        // Fallback: make the whole line holey
        newLines.push('// コードを入力');
        newLines.push('___');
      }
    } else {
      // Line already has hole, but does it have a comment?
      // (This script is intended to be run on files that were already partially fixed)
      newLines.push(line);
    }
  });
  
  return newLines.join('\n');
}

// Actually, I should just rewrite the files based on correctCode to be safe.
// I will create a script that takes correctCode and generates a perfect holeyCode.

function generateStrictHoley(correctCode: string): string {
  const lines = correctCode.split('\n');
  const result: string[] = [];
  
  lines.forEach(line => {
    const trimmed = line.trim();
    if (!trimmed) {
      result.push(line);
      return;
    }
    if (trimmed.startsWith('//')) {
      // Keep existing comments but ensure they are followed by holey code
      result.push(line);
      return;
    }
    
    // Map of common lines to instructions and holey versions
    if (trimmed.startsWith('#include <')) {
      const header = trimmed.match(/<([^>]+)>/)?.[1] || 'stdio.h';
      result.push(`// ${header} をインクルード`);
      result.push(line.replace(header, '___'));
    } else if (trimmed === 'int main() {') {
      result.push('// main 関数を定義');
      result.push('int ___() {');
    } else if (trimmed === 'return 0;') {
      result.push('// 0 を返して終了');
      result.push('return ___;');
    } else if (trimmed === '}') {
      result.push('// ブロックの終わり');
      result.push(line.replace('}', '___'));
    } else if (trimmed.startsWith('int ') && trimmed.includes('=') && !trimmed.includes('(')) {
      const parts = trimmed.split('=');
      const varName = parts[0].replace('int ', '').trim();
      const val = parts[1].replace(';', '').trim();
      result.push(`// ${varName} に ${val} を入れる`);
      result.push(line.replace(val, '___'));
    } else if (trimmed.startsWith('printf(')) {
      result.push('// メッセージを表示');
      result.push(line.replace('printf', '___'));
    } else {
      // Default: make it holey and add generic comment if missing
      result.push('// プログラムを書く');
      result.push('___');
    }
  });
  return result.join('\n');
}

// I'll stop here and use a more surgical approach for the actual files.
// Direct string replacement for known boilerplate is safer for existing logic.

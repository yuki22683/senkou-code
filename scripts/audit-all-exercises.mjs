import fs from 'fs';
import path from 'path';

const dir = './data/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

const sep = String.fromCharCode(92) + 'n';
const PLACEHOLDER = '\x00ESC\x00';
const doubleSep = String.fromCharCode(92) + String.fromCharCode(92) + 'n';

// Comment prefixes by language
const commentPrefixes = {
  'c': '//', 'cpp': '//', 'csharp': '//', 'java': '//', 'javascript': '//',
  'typescript': '//', 'go': '//', 'rust': '//', 'kotlin': '//', 'swift': '//',
  'php': '//', 'python': '#', 'ruby': '#', 'perl': '#', 'bash': '#',
  'lua': '--', 'haskell': '--', 'elixir': '#', 'sql': '--', 'assembly': ';'
};

let totalIssues = 0;
const issues = [];

for (const file of files) {
  const fp = path.join(dir, file);
  const content = fs.readFileSync(fp, 'utf8');
  const lang = file.replace(/[0-9]*\.ts$/, '');
  const prefix = commentPrefixes[lang] || '//';

  // Find all holeyCode
  const holeyCodePattern = /"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;
  let match;
  let exerciseIdx = 0;

  while ((match = holeyCodePattern.exec(content)) !== null) {
    exerciseIdx++;
    const holeyCode = match[1];

    // Protect escaped newlines
    const protectedCode = holeyCode.split(doubleSep).join(PLACEHOLDER);
    const lines = protectedCode.split(sep).map(l => l.split(PLACEHOLDER).join(doubleSep));

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      // Skip empty lines
      if (!trimmed) continue;

      // Skip comment lines
      const isComment = trimmed.startsWith('//') || trimmed.startsWith('#') ||
                        trimmed.startsWith('--') || trimmed.startsWith(';');
      if (isComment) continue;

      // Check if this code line contains ___
      if (!trimmed.includes('___')) {
        // This is a code line without ___ - might be an issue
        // Some lines are legitimately not holey (like closing braces)
        const isClosingBrace = /^[}\])\s;]*$/.test(trimmed);
        const isOpeningBrace = /^[\[{(]\s*$/.test(trimmed);
        const isBlank = trimmed === '';

        if (!isClosingBrace && !isOpeningBrace && !isBlank) {
          // Check if it's a simple structural element
          const isStructural = /^(public:|private:|protected:|else|else:|elif .+:|except.*:|finally:|default:|case .+:)/.test(trimmed);
          if (!isStructural) {
            issues.push({
              file,
              exercise: exerciseIdx,
              line: i + 1,
              issue: 'NO_HOLEY',
              content: trimmed.substring(0, 60)
            });
            totalIssues++;
          }
        }
      } else {
        // This line has ___ - check if previous line is a comment
        if (i === 0) {
          issues.push({
            file,
            exercise: exerciseIdx,
            line: i + 1,
            issue: 'NO_COMMENT_ABOVE',
            content: trimmed.substring(0, 60)
          });
          totalIssues++;
        } else {
          const prevLine = lines[i - 1].trim();
          const prevIsComment = prevLine.startsWith('//') || prevLine.startsWith('#') ||
                                prevLine.startsWith('--') || prevLine.startsWith(';');
          if (!prevIsComment) {
            issues.push({
              file,
              exercise: exerciseIdx,
              line: i + 1,
              issue: 'NO_COMMENT_ABOVE',
              content: trimmed.substring(0, 60)
            });
            totalIssues++;
          }
        }
      }
    }
  }
}

console.log('=== 監査結果 ===\n');

if (issues.length === 0) {
  console.log('問題なし！全ての演習が正しく設定されています。');
} else {
  // Group by file
  const byFile = {};
  for (const issue of issues) {
    if (!byFile[issue.file]) byFile[issue.file] = [];
    byFile[issue.file].push(issue);
  }

  for (const [file, fileIssues] of Object.entries(byFile)) {
    console.log(`\n${file}:`);
    for (const issue of fileIssues) {
      const type = issue.issue === 'NO_HOLEY' ? '虫食いなし' : 'コメントなし';
      console.log(`  E${issue.exercise} L${issue.line}: [${type}] ${issue.content}`);
    }
  }

  console.log(`\n合計: ${totalIssues}件の問題`);
}

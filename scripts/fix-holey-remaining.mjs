import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const lessonsDir = path.join(__dirname, '..', 'data', 'lessons');

// 追加の虫食いパターン
function makeHoleyAdditional(line, language) {
  // 既に虫食いなら何もしない
  if (line.includes('___')) return line;

  const trimmed = line.trim();

  // return 0; -> return ___;
  if (/^return\s+\d+;$/.test(trimmed)) {
    return line.replace(/return\s+\d+/, 'return ___');
  }

  // func main() { -> func ___() {
  if (/^func\s+\w+\(\)\s*\{$/.test(trimmed)) {
    return line.replace(/func\s+(\w+)\(\)/, 'func ___()');
  }

  // int main() { -> int ___() {
  if (/^int\s+main\(\)\s*\{$/.test(trimmed)) {
    return line.replace(/int\s+main\(\)/, 'int ___()');
  }

  // public static void main(String[] args) { -> public static void ___(String[] args) {
  if (/public\s+static\s+void\s+main\(String\[\]\s+args\)\s*\{/.test(trimmed)) {
    return line.replace(/main\(String\[\]/, '___(String[]');
  }

  // void honk() { -> void ___() {
  if (/^\s*void\s+\w+\(\)\s*\{$/.test(line)) {
    return line.replace(/void\s+(\w+)\(\)/, 'void ___()');
  }

  // class Main { -> class ___ {
  if (/^class\s+\w+\s*\{$/.test(trimmed)) {
    return line.replace(/class\s+(\w+)/, 'class ___');
  }

  // class Circle extends Shape { -> class ___ extends Shape {
  if (/^class\s+\w+\s+extends\s+\w+\s*\{$/.test(trimmed)) {
    return line.replace(/class\s+(\w+)\s+extends/, 'class ___ extends');
  }

  // アセンブリ: section .xxx -> section .___
  if (/^section\s+\.\w+$/.test(trimmed)) {
    return line.replace(/section\s+\.(\w+)/, 'section .___');
  }

  // アセンブリ: global _start -> global ___
  if (/^global\s+\w+$/.test(trimmed)) {
    return line.replace(/global\s+(\w+)/, 'global ___');
  }

  // アセンブリ: _start: -> ___:
  if (/^_?\w+:$/.test(trimmed)) {
    return line.replace(/^(\s*)(_?\w+):/, '$1___:');
  }

  // アセンブリ: mov rax, 1 -> mov ___, ___
  if (/^\s*mov\s+\w+,\s*\w+$/.test(line)) {
    return line.replace(/mov\s+(\w+),\s*(\w+)/, 'mov ___, ___');
  }

  // アセンブリ: xor rdi, rdi -> xor ___, ___
  if (/^\s*xor\s+\w+,\s*\w+$/.test(line)) {
    return line.replace(/xor\s+(\w+),\s*(\w+)/, 'xor ___, ___');
  }

  // アセンブリ: syscall -> ___
  if (/^\s*syscall$/.test(line)) {
    return line.replace('syscall', '___');
  }

  // PHP: ?> -> ___
  if (trimmed === '?>') {
    return line.replace('?>', '___');
  }

  // bash: fi -> ___
  if (trimmed === 'fi') {
    return line.replace('fi', '___');
  }

  // Go import: "fmt" -> "___"
  if (/^\s*"(fmt|time|os|strconv)"$/.test(line)) {
    return line.replace(/"(\w+)"/, '"___"');
  }

  // for (String name : names) { -> for (String ___ : names) {
  if (/for\s*\(\s*\w+\s+\w+\s*:\s*\w+\s*\)\s*\{/.test(trimmed)) {
    return line.replace(/for\s*\(\s*(\w+)\s+(\w+)\s*:\s*(\w+)\s*\)/, 'for ($1 ___ : $3)');
  }

  // System.out.println(...); -> System.out.___(...)
  if (/System\.out\.println\(/.test(line)) {
    return line.replace(/System\.out\.println\(/, 'System.out.___(');
  }

  // fmt.Println(...) -> fmt.___(...)
  if (/fmt\.Println\(/.test(line)) {
    return line.replace(/fmt\.Println\(/, 'fmt.___(');
  }

  // fmt.Printf(...) -> fmt.___(...)
  if (/fmt\.Printf\(/.test(line)) {
    return line.replace(/fmt\.Printf\(/, 'fmt.___(');
  }

  // println!(...) -> ___!(...)
  if (/println!\(/.test(line)) {
    return line.replace(/println!\(/, '___!(');
  }

  // print(...) (Lua/Perl) -> ___(...)
  if (/^(\s*)print\(/.test(line)) {
    return line.replace(/^(\s*)print\(/, '$1___(');
  }

  // } catch (Exception e) { -> } ___ (Exception e) {
  if (/\}\s*catch\s*\(\s*Exception\s+\w+\s*\)\s*\{/.test(line)) {
    return line.replace(/catch\s*\(/, '___ (');
  }

  // Rust: let x = ... -> let ___ = ...
  if (/^\s*let\s+\w+\s*=/.test(line) && !/^\s*let\s+_/.test(line) && !line.includes('mut')) {
    return line.replace(/let\s+(\w+)\s*=/, 'let ___ =');
  }

  // Rust: let mut x = ... -> let mut ___ = ...
  if (/^\s*let\s+mut\s+\w+\s*=/.test(line)) {
    return line.replace(/let\s+mut\s+(\w+)\s*=/, 'let mut ___ =');
  }

  // Go: := 代入
  if (/^\s*\w+\s*:=/.test(line) && !line.includes('___')) {
    return line.replace(/^(\s*)(\w+)\s*:=/, '$1___ :=');
  }

  return line;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const language = path.basename(filePath, '.ts').replace(/\d+$/, '');

  let changes = 0;

  // holeyCode ブロックを処理
  const holeyCodePattern = /("holeyCode":\s*")([^"]*(?:\.[^"]*)*)(")/g;

  content = content.replace(holeyCodePattern, (match, prefix, holeyCode, suffix) => {
    const lines = holeyCode.split('\n');
    let modified = false;

    const newLines = lines.map((line) => {
      const newLine = makeHoleyAdditional(line, language);
      if (newLine !== line) {
        modified = true;
        changes++;
      }
      return newLine;
    });

    if (modified) {
      return prefix + newLines.join('\n') + suffix;
    }
    return match;
  });

  if (changes > 0) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }

  return changes;
}

// メイン処理
const files = fs.readdirSync(lessonsDir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalChanges = 0;
const changedFiles = [];

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  const changes = processFile(filePath);
  if (changes > 0) {
    console.log(`${file}: ${changes}件修正`);
    changedFiles.push(file);
    totalChanges += changes;
  }
}

console.log(`\n合計: ${totalChanges}件を修正 (${changedFiles.length}ファイル)`);

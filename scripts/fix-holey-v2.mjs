import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const lessonsDir = path.join(__dirname, '..', 'data', 'lessons');

// エスケープされた文字列の終端を見つける
function findStringEnd(content, startIdx) {
  let i = startIdx;
  while (i < content.length) {
    if (content[i] === '\\' && i + 1 < content.length) {
      i += 2; // エスケープシーケンスをスキップ
    } else if (content[i] === '"') {
      return i;
    } else {
      i++;
    }
  }
  return -1;
}

// 追加の虫食いパターン
function makeHoley(line, language) {
  const originalLine = line;
  // if (line.includes('___')) return line;

  const trimmed = line.trim();
  if (trimmed === '') return line;

  // Log what we are processing
  if (trimmed.includes('printf')) {
      console.log(`DEBUG: processing printf line: [${line}]`);
  }
  
  // (existing rules...)
  // ... (rules)

  // 空行やコメントはスキップ
  if (trimmed === '') return line;
  if (trimmed.startsWith(';') && language === 'assembly') return line;
  if (trimmed.startsWith('//')) return line;
  if (trimmed.startsWith('#') && ['python', 'ruby', 'bash', 'perl'].includes(language)) return line;
  if (trimmed.startsWith('--') && ['sql', 'lua', 'haskell'].includes(language)) return line;

  // 構造的な行（ブレースのみ）
  if (trimmed === '{') return line.replace('{', '___');
  if (trimmed === '}') return line.replace('}', '___');
  if (trimmed === '};') return line.replace('};', '___');
  if (trimmed === ');') return line.replace(');', '___');
  if (trimmed === ']') return line.replace(']', '___');
  if (trimmed === '],') return line.replace('],', '___,');

  // public class Main { -> public class ___ {
  if (/public\s+class\s+\w+\s*\{/.test(trimmed)) {
    return line.replace(/class\s+(\w+)\s*\{/, 'class ___ {');
  }

  // import java.util.*; -> import java.util.___;
  if (/^import\s+java\.\w+\./.test(trimmed)) {
    return line.replace(/\.\*;/, '.___').replace(/\.(\w+);$/, '.___ ;');
  }

  // package main -> package ___
  if (/^package\s+\w+$/.test(trimmed)) {
    return line.replace(/package\s+(\w+)/, 'package ___');
  }

  // Go: import "fmt" -> import "___"
  if (/^import\s+\\?"/.test(trimmed)) {
    return line.replace(/import\s+\\?"(\w+)\\?"/, 'import \\"___\\"');
  }

  // Go: import ( -> import ___
  if (/^import\s+\($/.test(trimmed)) {
    return line.replace(/import\s+\(/, 'import ___');
  }

  // <?php -> ___
  if (trimmed === '<?php') {
    return line.replace('<?php', '___');
  }

  // #include <xxx> -> #include <___>
  if (/^#include\s+<\w+/.test(trimmed)) {
    return line.replace(/<(\w+)(\.h)?>/, '<___>');
  }

  // Java stream: .forEach(System.out::println); -> .forEach(___);
  if (/\.forEach\(System\.out::println\)/.test(trimmed)) {
    return line.replace(/\.forEach\(System\.out::println\)/, '.forEach(___)');
  }

  // Java stream: nums.stream() -> nums.___()
  if (/\w+\.stream\(\)$/.test(trimmed)) {
    return line.replace(/\.stream\(\)/, '.___()');
  }

  // Rust: use std::xxx; -> use std::___;
  if (/^use\s+std::/.test(trimmed)) {
    return line.replace(/use\s+std::(\w+)::(\w+)/, 'use std::___::___').replace(/use\s+std::(\w+);/, 'use std::___;');
  }

  // Rust: struct Xxx; -> struct ___;
  if (/^struct\s+\w+;$/.test(trimmed)) {
    return line.replace(/struct\s+(\w+);/, 'struct ___;');
  }

  // Rust: struct Xxx { -> struct ___ {
  if (/^struct\s+\w+\s*\{$/.test(trimmed)) {
    return line.replace(/struct\s+(\w+)\s*\{/, 'struct ___ {');
  }

  // Rust: impl Xxx for Yyy { -> impl ___ for ___ {
  if (/^impl\s+\w+\s+for\s+\w+\s*\{/.test(trimmed)) {
    return line.replace(/impl\s+(\w+)\s+for\s+(\w+)\s*\{/, 'impl ___ for ___ {');
  }

  // Ruby/Lua: end -> ___
  if (trimmed === 'end' && ['ruby', 'lua', 'elixir'].includes(language)) {
    return line.replace('end', '___');
  }

  // Lua: local ok, msg = pcall(...) -> local ___, ___ = pcall(...)
  if (/^local\s+\w+,\s*\w+\s*=\s*pcall/.test(trimmed)) {
    return line.replace(/local\s+(\w+),\s*(\w+)\s*=/, 'local ___, ___ =');
  }

  // TS: interface Xxx { -> interface ___ {
  if (/^interface\s+\w+\s*\{/.test(trimmed)) {
    return line.replace(/interface\s+(\w+)\s*\{/, 'interface ___ {');
  }

  // Java: private T value; -> private T ___;
  if (/^\s*private\s+\w+\s+\w+;$/.test(line)) {
    return line.replace(/private\s+(\w+)\s+(\w+);/, 'private $1 ___;');
  }

  // Perl: my $xxx = "..."; -> my $___ = "...";
  if (/^my\s+\$\w+\s*=/.test(trimmed)) {
    return line.replace(/my\s+\$(\w+)\s*=/, 'my $___ =');
  }

  // Perl: my @xxx = (...); -> my @___ = (...);
  if (/^my\s+@\w+\s*=/.test(trimmed)) {
    return line.replace(/my\s+@(\w+)\s*=/, 'my @___ =');
  }

  // Perl: open(my $fh, ...) -> ___(my $fh, ...)
  if (/^open\(my\s+\$/.test(trimmed)) {
    return line.replace(/^open\(/, '___\\(');
  }

  // Bash: names=("Alice" "Bob") -> names=("___" "___")
  if (/^\w+=\(\\?"/.test(trimmed) && language === 'bash') {
    return line.replace(/=\(\\?"([^"]+)\\?"\s+\\?"([^"]+)\\?"\)/, '=(\\"___\\" \\"___\\")');
  }

  // Assembly: cmp xxx, yyy -> cmp ___, ___
  if (/^\s*cmp\s+\w+,\s*\d+$/.test(line)) {
    return line.replace(/cmp\s+(\w+),\s*(\d+)/, 'cmp ___, ___');
  }

  // Assembly: jmp/jnz/je xxx -> jmp/jnz/je ___
  if (/^\s*(jmp|jnz|jz|je|jne|jg|jl|jge|jle)\s+\w+$/.test(line)) {
    return line.replace(/(jmp|jnz|jz|je|jne|jg|jl|jge|jle)\s+(\w+)/, '$1 ___');
  }

  // Assembly: push xxx -> push ___
  if (/^\s*push\s+\d+$/.test(line)) {
    return line.replace(/push\s+\d+/, 'push ___');
  }

  // Assembly: pop xxx -> pop ___
  if (/^\s*pop\s+\w+$/.test(line)) {
    return line.replace(/pop\s+(\w+)/, 'pop ___');
  }
  
  // return 0; -> return ___;
  if (/^return\s+\d+;?$/.test(trimmed)) {
    return line.replace(/return\s+\d+/, 'return ___');
  }
  
  // Go/Rust: func/fn xxx() { -> func/fn ___() {
  if (/^(func|fn)\s+\w+\s*\([^)]*\)\s*(\{|->)?/.test(trimmed)) {
    return line.replace(/(func|fn)\s+(\w+)\s*\(/, '$1 ___ (');
  }
  
  // int main() { -> int ___() {
  if (/^int\s+main\s*\(\s*\)\s*\{?$/.test(trimmed)) {
    return line.replace(/main\s*\(\)/, '___()');
  }
  
  // public static void main(String[] args) {
  if (/public\s+static\s+void\s+main\s*\(/.test(trimmed)) {
    return line.replace(/main\s*\(/, '___\\(');
  }
  
  // void xxx() { -> void ___() {
  if (/^\s*void\s+\w+\s*\(\s*\)\s*\{?$/.test(line)) {
    return line.replace(/void\s+(\w+)\s*\(\)/, 'void ___()');
  }
  
  // class Xxx { -> class ___ {
  if (/^class\s+\w+/.test(trimmed)) {
    return line.replace(/class\s+(\w+)/, 'class ___');
  }
  
  // アセンブリ: section .xxx -> section .___
  if (/^section\s+\.\w+$/.test(trimmed)) {
    return line.replace(/section\s+\.(\w+)/, 'section .___');
  }
  
  // アセンブリ: global xxx -> global ___
  if (/^global\s+\w+$/.test(trimmed)) {
    return line.replace(/global\s+(\w+)/, 'global ___');
  }
  
  // アセンブリ: _start: -> ___:
  if (/^_?\w+:$/.test(trimmed)) {
    return line.replace(/^(\s*)(_?\w+):/, '$1___:');
  }
  
  // アセンブリ: mov xxx, yyy -> mov ___, ___
  if (/^\s*mov\s+\w+,\s*\w+$/.test(line)) {
    return line.replace(/mov\s+(\w+),\s*(\w+)/, 'mov ___, ___');
  }
  
  // アセンブリ: xor xxx, yyy -> xor ___, ___
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
  
  // bash: fi/done/esac -> ___
  if (['fi', 'done', 'esac'].includes(trimmed)) {
    return line.replace(trimmed, '___');
  }
  
  // Go import: "fmt" -> "___"
  if (/^\s*\\?"(fmt|time|os|strconv)\\?"$/.test(line)) {
    return line.replace(/\\?"(\w+)\\?"/, '\\"___\\"');
  }
  
  // for (Type var : collection) { -> for (Type ___ : collection) {
  if (/for\s*\(\s*\w+\s+\w+\s*:\s*\w+\s*\)/.test(line)) {
    return line.replace(/for\s*\(\s*(\w+)\s+(\w+)\s*:\s*(\w+)\s*\)/, 'for ($1 ___ : $3)');
  }
  
  // System.out.println -> System.out.___
  if (/System\.out\.println\(/.test(line)) {
    return line.replace(/println\(/, '___(');
  }
  
  // fmt.Println/Printf -> fmt.___
  if (/fmt\.(Println|Printf)\(/.test(line)) {
    return line.replace(/(Println|Printf)\(/, '___(');
  }
  
  // println!/print! -> ___!
  if (/println!\(/.test(line)) {
    return line.replace(/println!\(/, '___!(');
  }
  
  // print(... -> ___(
  if (/^(\s*)print\(/.test(line) && ['lua', 'python'].includes(language)) {
    return line.replace(/print\(/, '___(');
  }
  
  // } catch (Exception e) {
  if (/\}\s*catch\s*\(\s*\w+\s+\w+\s*\)\s*\{/.test(line)) {
    return line.replace(/catch\s*\(/, '___ (');
  }
  
  // } finally {
  if (/\}\s*finally\s*\{/.test(line)) {
    return line.replace(/finally/, '___');
  }
  
  // let/const/var xxx = -> let/const/var ___ =
  if (/^\s*(let|const|var)\s+\w+\s*=/.test(line) && !line.includes('mut')) {
    return line.replace(/(let|const|var)\s+(\w+)\s*=/, '$1 ___ =');
  }
  
  // let mut xxx = -> let mut ___ =
  if (/^\s*let\s+mut\s+\w+\s*=/.test(line)) {
    return line.replace(/let\s+mut\s+(\w+)\s*=/, 'let mut ___ =');
  }
  
  // Go: xxx := -> ___ :=
  if (/^\s*\w+\s*:=/.test(line)) {
    return line.replace(/^(\s*)(\w+)\s*:=/, '$1___ :=');
  }
  
  // echo $xxx -> echo ___
  if (/^\s*echo\s+\$\w+/.test(line)) {
    return line.replace(/echo\s+\$\w+/, 'echo ___');
  }
  
  // match xxx {  -> match ___ {
  if (/^\s*match\s+\w+\s*\{/.test(line)) {
    return line.replace(/match\s+(\w+)\s*\{/, 'match ___ {');
  }
  
  // Ok(xxx) -> Ok(___)
  if (/Ok\(\w+\)/.test(line) && !line.includes('___')) {
    return line.replace(/Ok\((\w+)\)/, 'Ok(___)');
  }
  
  // Err(xxx) -> Err(___)
  if (/Err\(\w+\)/.test(line) && !line.includes('___')) {
    return line.replace(/Err\((\w+)\)/, 'Err(___)');
  }

  // Perl: print "..." -> ___ "..."
  if (/^\s*print\s+\\?"/.test(line) && language === 'perl') {
    return line.replace(/print\s+(\\?")/, '___ $1');
  }

  // Perl: print $fh "..." -> print $fh ___
  if (/^\s*print\s+\$\w+\s+\\?"/.test(line) && language === 'perl') {
    return line.replace(/print\s+(\$\w+)\s+(\\?")/, 'print $1 ___');
  }

  // Perl: print $xxx . "..." -> ___ $xxx . "..."
  if (/^\s*print\s+\$/.test(line) && language === 'perl') {
    return line.replace(/print\s+(\$)/, '___ $1');
  }

  // Perl: welcome(); -> ___();
  if (/^\s*\w+\(\);$/.test(line.trim()) && language === 'perl') {
    return line.replace(/(\w+)\(\)/, '___()');
  }

  // Perl: close($fh); -> ___($fh);
  if (/^\s*close\(\$\w+\);$/.test(line) && language === 'perl') {
    return line.replace(/close\(/, '___(');
  }

  // Lua: end) -> ___)
  if (trimmed === 'end)' && language === 'lua') {
    return line.replace('end)', '___)');
  }

  // Lua: local xxx = "..." -> local ___ = "..."
  if (/^\s*local\s+\w+\s*=/.test(line) && language === 'lua') {
    return line.replace(/local\s+(\w+)\s*=/, 'local ___ =');
  }

  // Rust: xxx_yyy(args) -> ___(args) (関数呼び出し)
  if (/^\s*\w+\([^)]*\);?$/.test(line) && ['rust'].includes(language)) {
    return line.replace(/^(\s*)(\w+)\(/, '$1___(');
  }

  // Rust: match xxx(args) { -> match ___(args) {
  if (/^\s*match\s+\w+\([^)]*\)\s*\{/.test(line)) {
    return line.replace(/match\s+(\w+)\(/, 'match ___(');
  }

  // Bash: a=5 -> a=___
  if (/^\w+=\d+$/.test(trimmed) && language === 'bash') {
    return line.replace(/=\d+/, '=___');
  }

  // Bash: greet() { -> ___() {
  if (/^\w+\(\)\s*\{$/.test(trimmed) && language === 'bash') {
    return line.replace(/^(\s*)(\w+)\(\)/, '$1___()');
  }

  // Bash: echo "..." -> echo "___"
  if (/^\s*echo\s+\\?"/.test(line) && language === 'bash') {
    return line.replace(/echo\s+(\\?")([^"]*)(\\?")/, 'echo $1___$3');
  }

  // C#: using System; -> using ___;
  if (/^\s*using\s+\w+/.test(line) && language === 'csharp') {
    return line.replace(/using\s+(\w+)/, 'using ___');
  }

  // C#: static void Main() -> static void ___()
  if (/static\s+void\s+Main\s*\(/.test(line) && language === 'csharp') {
    return line.replace(/Main\s*\(/, '___(');
  }

  // C#/Java/JS/TS/Kotlin: int x = N; -> int x = ___;
  if (/^\s*(int|val|var|let|const)\s+\w+\s*=\s*\d+/.test(line) && !line.includes('___')) {
    return line.replace(/=\s*\d+/, '= ___');
  }

  // Console.WriteLine(x); -> Console.WriteLine(___);
  if (/Console\.WriteLine\(\w+\)/.test(line) && !line.includes('___')) {
    return line.replace(/WriteLine\((\w+)\)/, 'WriteLine(___)');
  }

  // console.log(x); -> console.log(___);
  if (/console\.log\(\w+\)/.test(line) && !line.includes('___')) {
    return line.replace(/log\((\w+)\)/, 'log(___)');
  }

  // println(x) -> println(___) (Kotlin/Scala)
  if (/^\s*println\(\w+\)$/.test(line) && !line.includes('___')) {
    return line.replace(/println\((\w+)\)/, 'println(___)');
  }

  // Ruby: puts x -> puts ___
  if (/^\s*puts\s+\w+$/.test(line) && language === 'ruby') {
    return line.replace(/puts\s+(\w+)/, 'puts ___');
  }

  // Ruby: end -> ___
  if (trimmed === 'end' && language === 'ruby') {
    return line.replace('end', '___');
  }

  // Swift: print(x) -> print(___)
  if (/^\s*print\(\w+\)$/.test(line) && language === 'swift') {
    return line.replace(/print\((\w+)\)/, 'print(___)');
  }

  // Python: def func(args): -> def ___(args):
  if (/^\s*def\s+\w+\s*\(/.test(line) && language === 'python' && !line.includes('___')) {
    return line.replace(/def\s+(\w+)\s*\(/, 'def ___(');
  }

  // Python: total = 0 -> total = ___
  if (/^\s*\w+\s*=\s*\d+$/.test(line) && language === 'python' && !line.includes('___')) {
    return line.replace(/=\s*\d+/, '= ___');
  }

  // JS: bark() { -> ___() {
  if (/^\s*\w+\s*\(\)\s*\{$/.test(line) && ['javascript', 'typescript'].includes(language)) {
    return line.replace(/^(\s*)(\w+)\s*\(\)/, '$1___()');
  }

  // JS arrow: x => x - 3 -> x => x ___ 3
  if (/^\s*\w+\s*=>\s*\w+\s*[-+*/]\s*\d+/.test(line) && !line.includes('___')) {
    return line.replace(/([-+*/])\s*\d+/, '___ $1 ___');
  }

  // return (x) => { -> return (___) => {
  if (/return\s*\(\w+\)\s*=>/.test(line) && !line.includes('___')) {
    return line.replace(/\((\w+)\)\s*=>/, '(___) =>');
  }

  // Kotlin: val x = N -> val ___ = N
  if (/^\s*val\s+\w+\s*=\s*\d+$/.test(line) && language === 'kotlin' && !line.includes('___')) {
    return line.replace(/val\s+(\w+)\s*=/, 'val ___ =');
  }

  // Console.WriteLine("...") -> Console.___("...")
  if (/Console\.WriteLine\(/.test(line) && !line.includes('___')) {
    return line.replace(/WriteLine\(/, '___(');
  }

  // console.log('...') or console.log(`...`) -> console.___(...)
  if (/console\.log\(/.test(line) && !line.includes('___')) {
    return line.replace(/log\(/, '___(');
  }

  // println("...") -> ___("...")
  if (/^\s*println\(/.test(line) && !line.includes('___')) {
    return line.replace(/println\(/, '___(');
  }

  // greet('...'); or showDate(); -> ___('...');
  if (/^\s*\w+\([^)]*\);?$/.test(line) && !line.includes('___') && ['javascript', 'typescript'].includes(language)) {
    return line.replace(/^(\s*)(\w+)\(/, '$1___(');
  }

  // Rust: xxx.yyy(args); -> xxx.___(args);
  if (/\.\w+\([^)]*\);?$/.test(line) && language === 'rust') {
    return line.replace(/\.(\w+)\(/, '.___(');
  }

  // Rust: &s[..1] -> &s[___]
  if (/&\w+\[\.\.\d+\]/.test(line) && language === 'rust') {
    return line.replace(/\[\.\.\d+\]/, '[___]');
  }

  // Rust: } else { -> } ___ {
  if (/\}\s*else\s*\{/.test(line) && language === 'rust') {
    return line.replace(/else/, '___');
  }

  // Rust: Ok(a / b) -> Ok(___)
  if (/Ok\([^)]+\)/.test(line) && !line.includes('___')) {
    return line.replace(/Ok\([^)]+\)/, 'Ok(___)');
  }

  // C: printf("%d\\n", score); -> printf("%d\\n", ___);
  if (/printf\([^,]+,\s*\w+\);?$/.test(line) && !line.includes('___')) {
    return line.replace(/,\s*(\w+)\);?$/, ', ___);');
  }

  // C: printf("Hello\\n"); -> printf("___");
  if (/printf\(\\?"[^"]*\\?"\);?$/.test(line) && !line.includes('___')) {
    return line.replace(/printf\(\\?"[^"]*\\?"\)/, 'printf(\\"___\\")');
  }

  // C: printf(\"%d\\n\", score); with escaped quotes -> printf(\"%d\\n\", ___);
  if (/printf\(\\\\?\\?"[^"]*\\\\?\\?",\s*\w+\);?$/.test(line) && !line.includes('___')) {
    return line.replace(/,\s*(\w+)\);?$/, ', ___);');
  }

  // C: printf(\"Hello\\n\"); with escaped quotes -> printf(\"___\");
  if (/printf\(\\\\?\\?"[^"]*\\\\n[^"]*\\\\?\\?"\);?$/.test(line) && !line.includes('___')) {
    return line.replace(/printf\((\\\\?\\?"[^"]*\\\\?\\?")\)/, 'printf(\\"___\\")');
  }

  // C: int nums[] = {10, 20}; -> int nums[] = {___};
  if (/\w+\[\]\s*=\s*\{[^}]+\}/.test(line) && !line.includes('___')) {
    return line.replace(/=\s*\{[^}]+\}/, '= {___}');
  }

  // C++: std::cout << xxx << std::endl; -> std::cout << ___ << std::endl;
  if (/std::cout\s*<<\s*\w+\s*<</.test(line) && !line.includes('___')) {
    return line.replace(/<<\s*(\w+)\s*<</, '<< ___ <<');
  }

  // C++: std::cout << "..." << std::endl; -> std::cout << ___ << std::endl;
  if (/std::cout\s*<<\s*\\?"/.test(line) && !line.includes('___')) {
    return line.replace(/<<\s*(\\?"[^"]*\\?")\s*<</, '<< ___ <<');
  }

  // if (xxx >= yyy) -> if (xxx ___ yyy)
  if (/if\s*\(\s*\w+\s*(>=|<=|>|<|==|!=)\s*\d+\s*\)/.test(line) && !line.includes('___')) {
    return line.replace(/(>=|<=|>|<|==|!=)\s*\d+/, '___ $1 ___');
  }

  // Python/Ruby: if xxx >= yyy (no parens)
  if (/^if\s+\w+\s*(>=|<=|>|<|==|!=)\s*\d+/.test(trimmed) && !line.includes('___')) {
    return line.replace(/(>=|<=|>|<|==|!=)\s*\d+/, '___ $1 ___');
  }

  // void sayHello(); -> void ___();
  if (/^\s*void\s+\w+\s*\(\);?$/.test(line) && !line.includes('___')) {
    return line.replace(/void\s+(\w+)\s*\(\)/, 'void ___()');
  }

  // abstract void speak(); -> abstract void ___();
  if (/abstract\s+void\s+\w+\s*\(\)/.test(line) && !line.includes('___')) {
    return line.replace(/void\s+(\w+)\s*\(\)/, 'void ___()');
  }

  // public void xxx() { -> public void ___() {
  if (/public\s+void\s+\w+\s*\(/.test(line) && !line.includes('___')) {
    return line.replace(/void\s+(\w+)\s*\(/, 'void ___(');
  }

  // public int xxx() { -> public int ___() {
  if (/public\s+int\s+\w+\s*\(/.test(line) && !line.includes('___')) {
    return line.replace(/int\s+(\w+)\s*\(/, 'int ___(');
  }

  // public T get() -> public T ___()
  if (/public\s+\w+\s+\w+\s*\(/.test(line) && !line.includes('___')) {
    return line.replace(/public\s+(\w+)\s+(\w+)\s*\(/, 'public $1 ___(');
  }

  // try { -> ___ {
  if (/^\s*try\s*\{$/.test(line) && !line.includes('___')) {
    return line.replace(/try\s*\{/, '___ {');
  }

  // .map(n -> n * 2) -> .map(n -> ___)
  if (/\.map\([^)]*->[^)]*\)/.test(line) && !line.includes('___')) {
    return line.replace(/\.map\((\w+)\s*->\s*([^)]+)\)/, '.map($1 -> ___)');
  }

  // Rust struct field: name: Type, -> name: ___,
  if (/^\s*\w+:\s*\w+,?$/.test(line) && ['rust'].includes(language) && !line.includes('___')) {
    return line.replace(/:\s*(\w+)(,?)$/, ': ___$2');
  }

  // Rust: let x: Option<i32> = None; -> let x: ___ = ___;
  if (/let\s+\w+:\s*\w+<[^>]+>\s*=/.test(line) && !line.includes('___')) {
    return line.replace(/:\s*(\w+<[^>]+>)\s*=\s*(\w+)/, ': ___ = ___');
  }

  // Rust: let s: &str = "..." -> let s: ___ = ___
  if (/let\s+\w+:\s*&?\w+\s*=/.test(line) && language === 'rust' && !line.includes('___')) {
    return line.replace(/:\s*(&?\w+)\s*=/, ': ___ =');
  }

  // PHP: $a = 5; -> $___ = ___;
  if (/^\s*\$\w+\s*=\s*\d+;$/.test(line) && language === 'php' && !line.includes('___')) {
    return line.replace(/\$(\w+)\s*=\s*(\d+)/, '$___ = ___');
  }

  // PHP: $nums = [1, 2, 3]; -> $___ = [___];
  if (/^\s*\$\w+\s*=\s*\[/.test(line) && language === 'php' && !line.includes('___')) {
    return line.replace(/\$(\w+)\s*=\s*\[[^\]]*\]/, '$___ = [___]');
  }

  // PHP inside class: function greet() { -> function ___() {
  if (/^\s*function\s+\w+\s*\(\)\s*\{/.test(line) && language === 'php' && !line.includes('___')) {
    return line.replace(/function\s+(\w+)\s*\(\)/, 'function ___()');
  }

  // Lua: for i = 1, 10 do -> for i = ___, ___ do
  if (/for\s+\w+\s*=\s*\d+,\s*\d+\s+do/.test(line) && language === 'lua' && !line.includes('___')) {
    return line.replace(/=\s*\d+,\s*\d+\s+do/, '= ___, ___ do');
  }

  // Lua: return N + M -> return ___ + ___
  if (/return\s+\d+\s*[+\-*/]\s*\d+/.test(line) && !line.includes('___')) {
    return line.replace(/return\s+\d+\s*([+\-*/])\s*\d+/, 'return ___ $1 ___');
  }

  // Lua/Python: print("...") -> ___("...")
  if (/^\s*print\(\\?"/.test(line) && ['lua', 'python'].includes(language) && !line.includes('___')) {
    return line.replace(/print\(/, '___(');
  }

  // PHP/Bash: echo "..."; -> ___ "...";
  if (/^\s*echo\s+\\?"/.test(line) && ['php', 'bash'].includes(language) && !line.includes('___')) {
    return line.replace(/echo\s+(\\?")/, '___ $1');
  }

  // Rust: if n % 2 != 0 { -> if n % 2 ___ 0 {
  if (/if\s+\w+\s*%\s*\d+\s*(!=|==)\s*\d+\s*\{/.test(line) && !line.includes('___')) {
    return line.replace(/(!=|==)\s*\d+/, '___ $1 ___');
  }

  // Rust: if b == 0 { -> if b ___ 0 {
  if (/if\s+\w+\s*(==|!=)\s*\d+\s*\{/.test(line) && !line.includes('___')) {
    return line.replace(/(==|!=)\s*\d+/, '___ $1 ___');
  }

  // Rust: for x in doubles(3) { -> for x in ___(___) {
  if (/for\s+\w+\s+in\s+\w+\(\d+\)\s*\{/.test(line) && !line.includes('___')) {
    return line.replace(/in\s+(\w+)\((\d+)\)/, 'in ___(___)')
  }

  // Rust: self.xxx * self.yyy -> self.___ * self.___
  if (/self\.\w+\s*\*\s*self\.\w+/.test(line) && !line.includes('___')) {
    return line.replace(/self\.(\w+)\s*\*\s*self\.(\w+)/, 'self.___ * self.___');
  }

  // Rust: Err("...".to_string()) -> Err(___)
  if (/Err\([^)]+\)/.test(line) && !line.includes('___')) {
    return line.replace(/Err\([^)]+\)/, 'Err(___)');
  }

  // Rust: String::from("...") -> String::___("...")
  if (/String::from\(/.test(line) && !line.includes('___')) {
    return line.replace(/String::from\(/, 'String::___(');
  }

  // Rust enum: Up, Down, -> ___,
  if (/^\s*\w+,$/.test(line) && language === 'rust' && !line.includes('___')) {
    return line.replace(/^(\s*)\w+,$/, '$1___,');
  }

  // Java enum values: MON, TUE, ... -> ___
  if (/^\s*\w+(,\s*\w+)+$/.test(line) && language === 'java' && !line.includes('___')) {
    return line.replace(/^(\s*)\w+(,\s*\w+)+/, '$1___');
  }

  // Java: int value; -> int ___;
  if (/^\s*(int|String|double|boolean|long|float)\s+\w+;$/.test(line) && !line.includes('___')) {
    return line.replace(/(int|String|double|boolean|long|float)\s+(\w+);/, '$1 ___;');
  }

  // Score(int v) { value = v; } -> ___(int v) { value = v; }
  if (/^\s*\w+\(\w+\s+\w+\)\s*\{/.test(line) && language === 'java' && !line.includes('___')) {
    return line.replace(/^(\s*)(\w+)\((\w+\s+\w+)\)/, '$1___($3)');
  }

  // public Item(int p) { -> public ___(int p) {
  if (/public\s+\w+\(\w+\s+\w+\)\s*\{/.test(line) && !line.includes('___')) {
    return line.replace(/public\s+(\w+)\(/, 'public ___(');
  }

  // public Calculator(T v) { value = v; } -> public ___(T v) { value = v; }
  if (/public\s+\w+\(\w+\s+\w+\)\s*\{[^}]*\}/.test(line) && !line.includes('___')) {
    return line.replace(/public\s+(\w+)\(/, 'public ___(');
  }

  // Perl: if ($num >= 10) { -> if ($num ___ 10) {
  if (/if\s*\(\s*\$\w+\s*(>=|<=|>|<|==|!=)\s*\d+\s*\)\s*\{/.test(line) && !line.includes('___')) {
    return line.replace(/(>=|<=|>|<|==|!=)\s*(\d+)/, '___ $1 ___');
  }

  // Swift: print("...") -> ___("...")
  if (/^\s*print\(\\?"[^"]*\\?"\)$/.test(line) && language === 'swift' && !line.includes('___')) {
    return line.replace(/print\(/, '___(');
  }

  // Java: String[] names = {"xx", "yy"}; -> String[] names = {___};
  if (/String\[\]\s+\w+\s*=\s*\{/.test(line) && !line.includes('___')) {
    return line.replace(/=\s*\{[^}]+\}/, '= {___}');
  }

  // --- 最終手段：どこも虫食いになっていない場合 ---
  if (!line.includes('___')) {
    // 文字列がある場合は中身だけを虫食いに（クォートは外に残す）
    // バックスラッシュでエスケープされたクォート \" にも対応
    if (line.includes('"')) {
      // 最短一致でクォートに囲まれた部分を探し、中身だけを ___ に置換
      // 前後のクォート（エスケープの有無問わず）をキャプチャして保持
      return line.replace(/(\\*")(.+?)(\\*")/, '$1___$3');
    }
    // 数値がある場合は数値を虫食いに
    if (/\d+/.test(line)) {
      return line.replace(/\d+/, '___');
    }
    // 単語がある場合は最後の単語を虫食いに
    if (/\w+/.test(trimmed)) {
      const words = trimmed.match(/\w+/g);
      const lastWord = words[words.length - 1];
      if (lastWord.length >= 1) {
        return line.replace(new RegExp('\\b' + lastWord + '\\b'), '___');
      }
    }
    // 記号を虫食いに
    if (/[;{}()\[\]]/.test(trimmed)) {
      return line.replace(/[;{}()\[\]]/, '___');
    }
    // それでもダメなら末尾に付ける（最終防衛ライン）
    return line + ' ___';
  }

  return line;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const language = path.basename(filePath, '.ts').replace(/\d+$/, '');
  
  let changes = 0;
  // find exercises and sync holeyCode with holey-fied correctCode
  // Regex to find each exercise object accurately
  const exercisePattern = /\{[^\{\}]*"correctCode":\s*"((?:[^"\\]|\\.)*)"\s*,\s*"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;
  
  const newContent = content.replace(exercisePattern, (match, correct, holey) => {
    // Correct contains the raw code but with \n and \" escaped.
    // We want to unescape it, process it, then re-escape it.
    
    // Unescape for processing
    const rawCorrect = correct.replace(/\\n/g, '\n').replace(/\\"/g, '"');
    const lines = rawCorrect.split(/\r?\n/);
    const newHoleyLines = lines.map(line => makeHoley(line, language));
    const rawHoley = newHoleyLines.join('\n');
    
    // Re-escape for .ts file (JSON-like string)
    // We want the result to be like: "correctCode": "...", "holeyCode": "..."
    // JSON.stringify will give us "..." including the surrounding quotes.
    const escapedHoley = JSON.stringify(rawHoley).slice(1, -1);
    
    if (escapedHoley !== holey) {
      changes++;
      // We must preserve the original correct code string as is
      return match.replace(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/, `"holeyCode": "${escapedHoley}"`);
    }
    return match;
  });

  if (changes > 0) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
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

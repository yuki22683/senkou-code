import fs from "fs";
import path from "path";
const dir = "data/lessons";
fs.readdirSync(dir).forEach(f => {
  if (!f.endsWith(".ts") || f === "index.ts") return;
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, "utf-8");
  const exStart = content.indexOf("\"exercises\": [");
  if (exStart === -1) return;
  const header = content.substring(0, exStart + 14);
  const rest = content.substring(exStart + 14);
  let depth = 1, arrayEnd = -1, i = 0;
  while (i < rest.length && depth > 0) {
    if (rest[i] === "\"") { i++; while (i < rest.length) { if (rest[i] === "\\" && i + 1 < rest.length) i += 2; else if (rest[i] === "\"") break; else i++; } }
    else if (rest[i] === "[") depth++;
    else if (rest[i] === "]") { depth--; if (depth === 0) arrayEnd = i; }
    i++;
  }
  if (arrayEnd === -1) return;
  const arrayStr = rest.substring(0, arrayEnd);
  const footer = rest.substring(arrayEnd);
  const exStrings = [];
  let curDepth = 0, curStart = -1;
  i = 0;
  while (i < arrayStr.length) {
    if (arrayStr[i] === "\"") { i++; while (i < arrayStr.length) { if (arrayStr[i] === "\\" && i + 1 < arrayStr.length) i += 2; else if (arrayStr[i] === "\"") break; else i++; } }
    else if (arrayStr[i] === "{") { if (curDepth === 0) curStart = i; curDepth++; }
    else if (arrayStr[i] === "}") { curDepth--; if (curDepth === 0) exStrings.push(arrayStr.substring(curStart, i + 1)); }
    i++;
  }
  let modified = false;
  const fixedExs = exStrings.map(s => {
    try {
      const ex = eval("(" + s + ")");
      const hLines = (ex.holeyCode || "").split(/\\n|\n/);
      const cLines = (ex.correctCode || "").split(/\\n|\n/);
      const cCodeOnly = cLines.filter(l => l.trim() && !/^\s*(\/\/|#|--|;)/.test(l));
      const newCorrect = [];
      const needed = new Set();
      let cIdx = 0;
      hLines.forEach(h => {
        const trimmed = h.trim();
        if (/^\s*(\/\/|#|--|;)/.test(trimmed) || !trimmed) newCorrect.push(h);
        else {
          let filled = (cIdx < cCodeOnly.length) ? cCodeOnly[cIdx++] : h.replace(/___/g, "???");
          newCorrect.push(filled);
          if (h.includes("___")) {
            const parts = h.split("___");
            let pos = 0;
            for (let j = 0; j < parts.length - 1; j++) {
              let si = filled.indexOf(parts[j], pos);
              if (si === -1) break;
              si += parts[j].length;
              let ei = parts[j+1] ? filled.indexOf(parts[j+1], si) : filled.length;
              if (ei === -1) ei = filled.length;
              const v = filled.substring(si, ei).trim();
              if (v && !["{","}","(",")","[","]",";",":",","].includes(v)) needed.add(v);
              pos = ei;
            }
          }
        }
      });
      if (!ex.candidates) ex.candidates = {};
      const current = new Set();
      Object.values(ex.candidates).forEach(arr => arr.forEach(v => current.add(String(v))));
      const missing = Array.from(needed).filter(n => !current.has(n));
      if (missing.length > 0) {
        if (!ex.candidates.others) ex.candidates.others = [];
        missing.forEach(m => { if (!ex.candidates.others.includes(m)) ex.candidates.others.push(m); });
      }
      ex.correctLines = newCorrect;
      const oldHints = ex.lineHints || [];
      const newHints = [];
      let hi = 0;
      hLines.forEach(h => {
        if (/^\s*(\/\/|#|--|;)/.test(h)) newHints.push(null);
        else {
          while (hi < oldHints.length && oldHints[hi] === null) hi++;
          newHints.push(hi < oldHints.length ? oldHints[hi++] : null);
        }
      });
      ex.lineHints = newHints;
      ex.correctCode = newCorrect.join((ex.holeyCode.includes("\\n") ? "\\n" : "\n"));
      modified = true;
      return JSON.stringify(ex, null, 2).split("\n").map((l, i) => i === 0 ? l : "      " + l).join("\n");
    } catch (e) { return s; }
  });
  if (modified) {
    let res = "", last = 0;
    exStrings.forEach((old, j) => {
      const idx = arrayStr.indexOf(old, last);
      res += arrayStr.substring(last, idx) + fixedExs[j];
      last = idx + old.length;
    });
    fs.writeFileSync(p, header + res + arrayStr.substring(last) + footer, "utf-8");
    console.log("Rebuilt " + f);
  }
});

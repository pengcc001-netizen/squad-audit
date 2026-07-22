const fs = require('fs');

function fixFile(filePath) {
  let c = fs.readFileSync(filePath, 'utf8');
  const before = c.length;

  // Replace // comments that would swallow the rest of the line
  // Pattern: // ... ---------- ... ----------   CODE
  // Replace with: /* ... ---------- ... ---------- */   CODE

  // Match: // ---------- INTRO ----------   if
  //        // ---------- QUIZ ----------   if
  //        // ---------- RESULT ----------   if
  //        // Defensive fallback ...
  c = c.replace(/\/\/ -+ (\w+) -+   /g, '/* ---------- $1 ---------- */   ');
  c = c.replace(/\/\/ Defensive fallback .*?  return/g, '/* Defensive fallback */   return');

  // Also check for other // comments that might swallow code
  // Common patterns: // Comment   code
  // Replace // with /* */ for any line-internal comments
  // But be careful not to replace // inside strings or URLs (https://)
  // Strategy: only replace // that are preceded by ; or { or } or space and followed by space-letter
  c = c.replace(/([;{}])\s+\/\/ ([A-Z][\w\s]+?)\s+([a-z{])/g, '$1 /* $2 */ $3');

  // Fix any remaining // comments that have code after them on the same "line"
  // Pattern: // text   <code>
  // But skip https://
  let changed = true;
  while (changed) {
    changed = false;
    const match = c.match(/([^p:])\/\/ ([^/\n]{5,60}?)\s{2,}([a-z(<{])/);
    if (match && !match[0].includes('https://')) {
      const idx = match.index + match[1].length;
      c = c.substring(0, idx) + '/* ' + match[2] + ' */' + c.substring(idx + match[2].length + 4);
      changed = true;
    }
  }

  fs.writeFileSync(filePath, c, 'utf8');
  console.log(`${filePath}: ${before} -> ${c.length} chars`);
}

const files = fs.readdirSync('src/pages').filter(f => f.endsWith('.tsx'));
files.forEach(f => fixFile('src/pages/' + f));
console.log('Done');

const fs = require('fs');
const c = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Track backtick positions, accounting for being inside strings
let state = 'code';
let backticks = [];
let inString = false, stringChar = '';
let braceDepth = 0;

for (let i = 0; i < c.length; i++) {
  const ch = c[i];
  const next = c[i + 1] || '';
  const prev = c[i - 1] || '';

  if (state === 'code') {
    if (!inString) {
      if (ch === '"') { inString = true; stringChar = '"'; continue; }
      if (ch === "'") { inString = true; stringChar = "'"; continue; }
      if (ch === '`') { backticks.push({pos: i, type: 'open'}); continue; }
      if (ch === '/' && next === '/') {
        // Skip to end of line (but there are no newlines in single-line file, skip to next ;)
        while (i < c.length && c[i] !== ';' && c[i] !== '{' && c[i] !== '}') i++;
        i--;
        continue;
      }
    } else {
      if (ch === stringChar && prev !== '\\') { inString = false; continue; }
    }
  }
}

console.log('Backticks found:', backticks.length);
backticks.forEach((b, i) => {
  const ctx = c.substring(Math.max(0, b.pos - 20), Math.min(c.length, b.pos + 20));
  console.log(`  #${i + 1} pos=${b.pos}: ${JSON.stringify(ctx)}`);
});

// Check if even number
console.log('\nBacktick count:', backticks.length, backticks.length % 2 === 0 ? 'EVEN (balanced)' : 'ODD (unbalanced!)');

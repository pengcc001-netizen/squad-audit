// Fix double-encoded UTF-8 characters (UTF-8 → GBK → UTF-8) in squad-audit page files
// The corruption: arrow/symbol chars had their UTF-8 bytes decoded as GBK, consuming following bytes

const fs = require('fs');
const path = require('path');

const dir = 'src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

// Replacement rules: match corrupted pattern, replace with correct characters
const rules = [
  // 路 (U+8DEF) = GBK decode of · (C2 B7) → middle dot
  { from: '\u8DEF', to: '\u00B7' },

  // 鈫? (U+922B + U+003F) = → ← ↻ with consumed < or space
  // Context: before / (closing tag) → →<
  { from: '\u922B\u003F/', to: '\u2192</' },  // → + <
  // Context: before Previous → ← (left arrow + space)
  { from: '\u922B\u003FPrevious', to: '\u2190 Previous' },
  // Context: before Retake → ↻ (circular arrow + space)
  { from: '\u922B\u003FRetake', to: '\u21BB Retake' },

  // 鈫扐 (U+922B + U+6250) = → + consumed A → →A
  { from: '\u922B\u6250', to: '\u2192A' },

  // 鈻? (U+923B + U+003F) = ▸ with consumed <
  { from: '\u923B\u003F/', to: '\u25B8</' },  // ▸ + <

  // 鈭? (U+922D + U+003F) = − with consumed <
  { from: '\u922D\u003F/', to: '\u2212</' },  // − + <

  // 鈥? (U+9225 + U+003F) = — with consumed space/char
  // Context: before lowercase letter or { → — (em dash + space was consumed)
  { from: '\u9225\u003F', to: '\u2014 ' },  // — + space (the ? consumed the space or next byte)

  // 鈥擲 (U+9225 + U+64F2) = — + consumed S → —S
  { from: '\u9225\u64F2', to: '\u2014S' },
];

let totalFixes = 0;
files.forEach(f => {
  const fp = path.join(dir, f);
  let content = fs.readFileSync(fp, 'utf8');
  let fixCount = 0;

  rules.forEach(rule => {
    let idx = 0;
    while ((idx = content.indexOf(rule.from, idx)) !== -1) {
      content = content.substring(0, idx) + rule.to + content.substring(idx + rule.from.length);
      fixCount++;
      idx += rule.to.length;
    }
  });

  if (fixCount > 0) {
    fs.writeFileSync(fp, content, 'utf8');
    console.log(`${f}: ${fixCount} fixes applied`);
    totalFixes += fixCount;
  }
});

console.log(`\nTotal: ${totalFixes} fixes across ${files.length} files`);

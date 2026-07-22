const fs = require('fs');
const ts = require('./node_modules/typescript');
const c = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const markers = [];
let idx = 0;
while ((idx = c.indexOf('// ----------', idx)) !== -1) { markers.push(idx); idx += 14; }

// INTRO section: from markers[0] to markers[1]
// Full test: everything from start to markers[1] + return null; }
const prefix = c.substring(0, markers[1]);

// Binary search: progressively shorten the INTRO JSX content
// Find key positions within the INTRO section
const ifStart = prefix.indexOf('if (phase === "intro")');
const returnStart = prefix.indexOf('return (', ifStart);
const divStart = prefix.indexOf('<div className="fade-in">', returnStart);
const helmetClose = prefix.indexOf('</Helmet>', divStart);
const heroComment = prefix.indexOf('{/* Hero */}', helmetClose);
const section1End = prefix.indexOf('</section>', heroComment);
const statsComment = prefix.indexOf('{/* Stats bar */}', section1End);
const section2End = prefix.indexOf('</section>', statsComment);
const howComment = prefix.indexOf('{/* How it works */}', section2End);
const section3End = prefix.indexOf('</section>', howComment);
const featuredComment = prefix.indexOf('{/* Featured roles */}', section3End);
const section4End = prefix.indexOf('</section>', featuredComment);

const positions = {
  ifStart, returnStart, divStart, helmetClose,
  heroComment, section1End, statsComment, section2End,
  howComment, section3End, featuredComment, section4End,
};

console.log('Key positions:', positions);

// Test at each checkpoint
Object.entries(positions).forEach(([name, pos]) => {
  if (pos < 0) return;
  const test = prefix.substring(0, pos) + '   return null; }';
  const sf = ts.createSourceFile('t.tsx', test, ts.ScriptTarget.ES2022, true, ts.ScriptKind.TSX);
  const diags = sf.parseDiagnostics || [];
  console.log(`At ${name} (${pos}): ${diags.length} diags`);
  if (diags.length > 0) {
    const d = diags[0];
    const p = sf.getLineAndCharacterOfPosition(d.start);
    console.log(`  L${p.line+1} C${p.character+1}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`);
  }
});

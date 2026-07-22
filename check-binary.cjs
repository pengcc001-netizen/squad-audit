const fs = require('fs');
const ts = require('./node_modules/typescript');
const c = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Binary search: find the minimal prefix that causes the error
const funcStart = c.indexOf('export default function Home()');
const markers = [];
let idx = 0;
while ((idx = c.indexOf('// ----------', idx)) !== -1) { markers.push(idx); idx += 14; }
const introEnd = markers[1]; // start of QUIZ section

// Test progressively shorter versions of the INTRO section
const introContent = c.substring(funcStart, introEnd);

// Try removing the JSON-LD script block
const scriptStart = introContent.indexOf('<script type="application/ld+json">');
const scriptEnd = introContent.indexOf('</script>');
if (scriptStart >= 0 && scriptEnd >= 0) {
  const noScript = introContent.substring(0, scriptStart) + '<script type="application/ld+json"></script>' + introContent.substring(scriptEnd + 9);
  const test = noScript + '   return null; }';
  const sf = ts.createSourceFile('test.tsx', test, ts.ScriptTarget.ES2022, true, ts.ScriptKind.TSX);
  const diags = sf.parseDiagnostics || [];
  console.log('Without JSON-LD script content:', diags.length, 'diagnostics');
  diags.forEach(d => {
    const pos = sf.getLineAndCharacterOfPosition(d.start);
    console.log(`  L${pos.line+1} C${pos.character+1}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`);
  });
}

// Try with just the Helmet section (no sections after)
const helmetEnd = introContent.indexOf('</Helmet>');
if (helmetEnd >= 0) {
  const test = introContent.substring(0, helmetEnd + 9) + '   return null; }';
  const sf = ts.createSourceFile('test.tsx', test, ts.ScriptTarget.ES2022, true, ts.ScriptKind.TSX);
  const diags = sf.parseDiagnostics || [];
  console.log('\nJust Helmet (+ return null; }):', diags.length, 'diagnostics');
  diags.forEach(d => {
    const pos = sf.getLineAndCharacterOfPosition(d.start);
    console.log(`  L${pos.line+1} C${pos.character+1}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`);
    console.log(`  Context: ${JSON.stringify(test.substring(Math.max(0, d.start - 30), d.start + 30))}`);
  });
}

// Try with just the function declaration (no if blocks)
const ifStart = introContent.indexOf('if (phase === "intro")');
if (ifStart >= 0) {
  const test = introContent.substring(0, ifStart) + '   return null; }';
  const sf = ts.createSourceFile('test.tsx', test, ts.ScriptTarget.ES2022, true, ts.ScriptKind.TSX);
  const diags = sf.parseDiagnostics || [];
  console.log('\nJust function + hooks (+ return null; }):', diags.length, 'diagnostics');
  diags.forEach(d => {
    const pos = sf.getLineAndCharacterOfPosition(d.start);
    console.log(`  L${pos.line+1} C${pos.character+1}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`);
  });
}

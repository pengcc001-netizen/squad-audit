const fs = require('fs');
const ts = require('./node_modules/typescript');
const c = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Find positions of each section marker
const markers = [];
let idx = 0;
while ((idx = c.indexOf('// ----------', idx)) !== -1) {
  markers.push(idx);
  idx += 14;
}

console.log('Markers at:', markers);

// Test: keep sections[0] (function + hooks), skip section 1 (INTRO), keep rest
if (markers.length >= 2) {
  // Remove content from markers[0] to markers[1] (the INTRO section)
  const test = c.substring(0, markers[0]) + c.substring(markers[1]);
  const sf = ts.createSourceFile('test.tsx', test, ts.ScriptTarget.ES2022, true, ts.ScriptKind.TSX);
  const diags = sf.parseDiagnostics || [];
  console.log('Without INTRO section:', diags.length, 'diagnostics');
  diags.forEach(d => {
    const pos = sf.getLineAndCharacterOfPosition(d.start);
    console.log(`  L${pos.line+1} C${pos.character+1}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`);
  });
}

// Test: keep sections[0] + INTRO only (up to markers[1])
if (markers.length >= 2) {
  const test = c.substring(0, markers[1]) + '   return null; }';
  const sf = ts.createSourceFile('test.tsx', test, ts.ScriptTarget.ES2022, true, ts.ScriptKind.TSX);
  const diags = sf.parseDiagnostics || [];
  console.log('\nWith just INTRO section (+ return null; }):', diags.length, 'diagnostics');
  diags.forEach(d => {
    const pos = sf.getLineAndCharacterOfPosition(d.start);
    console.log(`  L${pos.line+1} C${pos.character+1}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`);
    console.log(`  Context: ${JSON.stringify(test.substring(Math.max(0, d.start - 30), d.start + 30))}`);
  });
}

// Test: keep sections[0] + INTRO + QUIZ (up to markers[2])
if (markers.length >= 3) {
  const test = c.substring(0, markers[2]) + '   return null; }';
  const sf = ts.createSourceFile('test.tsx', test, ts.ScriptTarget.ES2022, true, ts.ScriptKind.TSX);
  const diags = sf.parseDiagnostics || [];
  console.log('\nWith INTRO+QUIZ sections (+ return null; }):', diags.length, 'diagnostics');
  diags.forEach(d => {
    const pos = sf.getLineAndCharacterOfPosition(d.start);
    console.log(`  L${pos.line+1} C${pos.character+1}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`);
    console.log(`  Context: ${JSON.stringify(test.substring(Math.max(0, d.start - 30), d.start + 30))}`);
  });
}

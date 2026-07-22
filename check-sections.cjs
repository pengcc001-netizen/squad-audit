const fs = require('fs');
const ts = require('./node_modules/typescript');
const c = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Extract each if block and test individually
const sections = c.split('// ----------');
console.log('Sections:', sections.length);

// Test the full file minus each section to find which section causes the error
for (let i = 1; i < sections.length; i++) {
  const test = sections[0] + sections.slice(i+1).join('// ----------');
  const sf = ts.createSourceFile('test.tsx', test, ts.ScriptTarget.ES2022, true, ts.ScriptKind.TSX);
  const diags = sf.parseDiagnostics || [];
  console.log(`Without section ${i}: ${diags.length} diagnostics`);
  if (diags.length > 0) {
    const d = diags[0];
    const pos = sf.getLineAndCharacterOfPosition(d.start);
    console.log(`  L${pos.line+1} C${pos.character+1}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`);
  }
}

// Also test each section individually
console.log('\n--- Individual sections ---');
for (let i = 1; i < sections.length; i++) {
  const section = sections[i];
  const test = 'function test() {' + section + '}';
  const sf = ts.createSourceFile('test.tsx', test, ts.ScriptTarget.ES2022, true, ts.ScriptKind.TSX);
  const diags = sf.parseDiagnostics || [];
  const sectionName = section.substring(0, 30).trim();
  console.log(`Section ${i} (${sectionName}...): ${diags.length} diagnostics`);
  if (diags.length > 0) {
    const d = diags[0];
    const pos = sf.getLineAndCharacterOfPosition(d.start);
    console.log(`  L${pos.line+1} C${pos.character+1}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`);
  }
}

const ts = require('./node_modules/typescript');
const fs = require('fs');
const c = fs.readFileSync('src/pages/Home.tsx', 'utf8');
const sf = ts.createSourceFile('Home.tsx', c, ts.ScriptTarget.ES2022, true, ts.ScriptKind.TSX);

// Get all top-level statements
console.log('=== Top-level statements ===');
sf.statements.forEach((stmt, i) => {
  const start = stmt.getStart ? stmt.getStart() : stmt.pos;
  const end = stmt.getEnd ? stmt.getEnd() : stmt.end;
  const pos = sf.getLineAndCharacterOfPosition(start);
  console.log(`#${i}: ${ts.SyntaxKind[stmt.kind]} at col ${pos.character + 1} (end col ${sf.getLineAndCharacterOfPosition(end).character + 1})`);
  // Show first 80 chars
  const text = c.substring(start, Math.min(start + 80, c.length));
  console.log(`    ${JSON.stringify(text)}`);
});

// Check if the last statement is complete
const lastStmt = sf.statements[sf.statements.length - 1];
if (lastStmt) {
  const end = lastStmt.getEnd ? lastStmt.getEnd() : lastStmt.end;
  console.log(`\nLast statement ends at position ${end} (file length: ${c.length})`);
  console.log(`Remaining content: ${JSON.stringify(c.substring(end))}`);
}

// Check for missing closing tokens
const diags = sf.parseDiagnostics || [];
console.log(`\n=== Parse diagnostics (${diags.length}) ===`);
diags.forEach(d => {
  const pos = sf.getLineAndCharacterOfPosition(d.start);
  console.log(`L${pos.line + 1} C${pos.character + 1}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`);
  console.log(`  Context: ${JSON.stringify(c.substring(Math.max(0, d.start - 50), Math.min(c.length, d.start + 50)))}`);
});

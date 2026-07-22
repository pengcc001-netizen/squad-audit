const fs = require('fs');
const ts = require('./node_modules/typescript');
const c = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const funcStart = c.indexOf('export default function Home()');
const markers = [];
let idx = 0;
while ((idx = c.indexOf('// ----------', idx)) !== -1) { markers.push(idx); idx += 14; }
const hooksSection = c.substring(funcStart, markers[0]);

// Full hooks section + return null; }
const test1 = hooksSection + '   return null; }';
console.log('Test 1 (full hooks + return null; }):');
const sf1 = ts.createSourceFile('t.tsx', test1, ts.ScriptTarget.ES2022, true, ts.ScriptKind.TSX);
const d1 = sf1.parseDiagnostics || [];
console.log('  ', d1.length, 'diags');
d1.forEach(d => {
  const pos = sf1.getLineAndCharacterOfPosition(d.start);
  console.log(`  L${pos.line+1} C${pos.character+1}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`);
  console.log('  At:', JSON.stringify(test1.substring(Math.max(0, d.start - 10), d.start + 20)));
});

// Now test with handleAnswer removed
const haStart = hooksSection.indexOf('const handleAnswer');
const haEnd = hooksSection.indexOf('};', haStart) + 2;
const test2 = hooksSection.substring(0, haStart) + hooksSection.substring(haEnd) + '   return null; }';
console.log('\nTest 2 (no handleAnswer):');
const sf2 = ts.createSourceFile('t.tsx', test2, ts.ScriptTarget.ES2022, true, ts.ScriptKind.TSX);
const d2 = sf2.parseDiagnostics || [];
console.log('  ', d2.length, 'diags');

// Test with just handleAnswer (no resetQuiz)
const rqStart = hooksSection.indexOf('const resetQuiz');
const test3 = hooksSection.substring(0, rqStart) + '   return null; }';
console.log('\nTest 3 (handleAnswer, no resetQuiz):');
const sf3 = ts.createSourceFile('t.tsx', test3, ts.ScriptTarget.ES2022, true, ts.ScriptKind.TSX);
const d3 = sf3.parseDiagnostics || [];
console.log('  ', d3.length, 'diags');
d3.forEach(d => {
  const pos = sf3.getLineAndCharacterOfPosition(d.start);
  console.log(`  L${pos.line+1} C${pos.character+1}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`);
});

// Print the exact content of handleAnswer
console.log('\n--- handleAnswer content ---');
console.log(JSON.stringify(hooksSection.substring(haStart, haEnd)));

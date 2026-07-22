const fs = require('fs');
const ts = require('./node_modules/typescript');
const c = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const funcStart = c.indexOf('export default function Home()');
const markers = [];
let idx = 0;
while ((idx = c.indexOf('// ----------', idx)) !== -1) { markers.push(idx); idx += 14; }
const introContent = c.substring(funcStart, markers[0]);

// Just function + hooks, add return null; }
const test = introContent + '   return null; }';
console.log('Test length:', test.length);
console.log('Content at col 760:', JSON.stringify(test.substring(755, 780)));

// Now test removing the handleAnswer function
const haStart = test.indexOf('const handleAnswer');
const haEnd = test.indexOf('};', haStart);
const test2 = test.substring(0, haStart) + test.substring(haEnd + 2);
console.log('\nWithout handleAnswer:');
const sf2 = ts.createSourceFile('test.tsx', test2, ts.ScriptTarget.ES2022, true, ts.ScriptKind.TSX);
const d2 = sf2.parseDiagnostics || [];
console.log(d2.length, 'diagnostics');
d2.forEach(d => {
  const pos = sf2.getLineAndCharacterOfPosition(d.start);
  console.log(`  L${pos.line+1} C${pos.character+1}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`);
});

// Test removing just the if/else inside handleAnswer
const ifStart2 = test.indexOf('if (currentQ');
const ifEnd2 = test.indexOf('} else {', ifStart2);
const elseEnd2 = test.indexOf('    }', ifEnd2 + 8);
console.log('\nif position:', ifStart2, 'else position:', ifEnd2, 'else end position:', elseEnd2);

// Test: replace the handleAnswer if/else with a simple statement
const test3 = test.substring(0, ifStart2) + 'setCurrentQ(currentQ + 1);' + test.substring(elseEnd2 + 5);
console.log('\nWith simplified handleAnswer:');
const sf3 = ts.createSourceFile('test.tsx', test3, ts.ScriptTarget.ES2022, true, ts.ScriptKind.TSX);
const d3 = sf3.parseDiagnostics || [];
console.log(d3.length, 'diagnostics');
d3.forEach(d => {
  const pos = sf3.getLineAndCharacterOfPosition(d.start);
  console.log(`  L${pos.line+1} C${pos.character+1}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`);
});

// Test: just the function declaration + first 2 hooks
const test4 = 'export default function Home() {   const [phase, setPhase] = useState<Phase>("intro");   const [currentQ, setCurrentQ] = useState(0);   return null; }';
console.log('\nMinimal function + 2 hooks:');
const sf4 = ts.createSourceFile('test.tsx', test4, ts.ScriptTarget.ES2022, true, ts.ScriptKind.TSX);
const d4 = sf4.parseDiagnostics || [];
console.log(d4.length, 'diagnostics');
d4.forEach(d => {
  const pos = sf4.getLineAndCharacterOfPosition(d.start);
  console.log(`  L${pos.line+1} C${pos.character+1}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`);
});

// Test: add the third hook with generic
const test5 = test4.replace('   return null; }', '   const [answers, setAnswers] = useState<number[]>([]);   return null; }');
console.log('\nWith useState<number[]>([]):');
const sf5 = ts.createSourceFile('test.tsx', test5, ts.ScriptTarget.ES2022, true, ts.ScriptKind.TSX);
const d5 = sf5.parseDiagnostics || [];
console.log(d5.length, 'diagnostics');
d5.forEach(d => {
  const pos = sf5.getLineAndCharacterOfPosition(d.start);
  console.log(`  L${pos.line+1} C${pos.character+1}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`);
});

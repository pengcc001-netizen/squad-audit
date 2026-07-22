const ts = require('./node_modules/typescript');

// Test 1: if with < comparison in tsx
const test1 = 'function f() { if (a < b.length - 1) { c(); } else { d(); } return null; }';
const sf1 = ts.createSourceFile('test.tsx', test1, ts.ScriptTarget.ES2022, true, ts.ScriptKind.TSX);
const d1 = sf1.parseDiagnostics || [];
console.log('Test 1 (if a < b):', d1.length, 'diags');
d1.forEach(d => console.log('  ', ts.flattenDiagnosticMessageText(d.messageText, '\n')));

// Test 2: with template literal
const test2 = 'function f() { if (a < b.length - 1) { c(); } else { const e = encodeResult([]); window.history.replaceState(null, "", `/r/${e}`); } return null; }';
const sf2 = ts.createSourceFile('test.tsx', test2, ts.ScriptTarget.ES2022, true, ts.ScriptKind.TSX);
const d2 = sf2.parseDiagnostics || [];
console.log('Test 2 (with template):', d2.length, 'diags');
d2.forEach(d => console.log('  ', ts.flattenDiagnosticMessageText(d.messageText, '\n')));

// Test 3: the actual handleAnswer function
const test3 = 'const handleAnswer = (optionIndex: number) => {     const newAnswers = [...answers, optionIndex];     setAnswers(newAnswers);     if (currentQ < quizQuestions.length - 1) {       setCurrentQ(currentQ + 1);     } else {       const encoded = encodeResult(newAnswers);       window.history.replaceState(null, "", `/r/${encoded}`);       setPhase("result");     }   }; function Home() { return null; }';
const sf3 = ts.createSourceFile('test.tsx', test3, ts.ScriptTarget.ES2022, true, ts.ScriptKind.TSX);
const d3 = sf3.parseDiagnostics || [];
console.log('Test 3 (actual handleAnswer):', d3.length, 'diags');
d3.forEach(d => {
  const pos = sf3.getLineAndCharacterOfPosition(d.start);
  console.log(`  L${pos.line+1} C${pos.character+1}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`);
  console.log('  Context:', JSON.stringify(test3.substring(Math.max(0, d.start - 20), d.start + 20)));
});

// Test 4: replace < with >
const test4 = test3.replace('currentQ < quizQuestions', 'currentQ > quizQuestions');
const sf4 = ts.createSourceFile('test.tsx', test4, ts.ScriptTarget.ES2022, true, ts.ScriptKind.TSX);
const d4 = sf4.parseDiagnostics || [];
console.log('Test 4 (> instead of <):', d4.length, 'diags');
d4.forEach(d => console.log('  ', ts.flattenDiagnosticMessageText(d.messageText, '\n')));

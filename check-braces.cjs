const fs = require('fs');
const c = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Track parser state to find where brace counting goes wrong
let state = 'code'; // code, string_single, string_double, template, jsx_text, jsx_attr
let braceDepth = 0;
let jsxExprBraces = [];
let issues = [];

for (let i = 0; i < c.length; i++) {
  const ch = c[i];
  const next = c[i + 1] || '';
  const prev = c[i - 1] || '';

  if (state === 'code') {
    if (ch === '"' && prev !== '\\') state = 'string_double';
    else if (ch === "'" && prev !== '\\') state = 'string_single';
    else if (ch === '`') state = 'template';
    else if (ch === '{') braceDepth++;
    else if (ch === '}') braceDepth--;
    else if (ch === '<' && /[a-zA-Z\/]/.test(next)) {
      // Entering JSX
      state = 'jsx_attr';
    }
  } else if (state === 'string_double') {
    if (ch === '"' && prev !== '\\') state = 'code';
  } else if (state === 'string_single') {
    if (ch === "'" && prev !== '\\') state = 'code';
  } else if (state === 'template') {
    if (ch === '`' && prev !== '\\') state = 'code';
    else if (ch === '$' && next === '{') {
      jsxExprBraces.push(braceDepth);
      braceDepth++;
      i++; // skip {
      state = 'code';
    }
  } else if (state === 'jsx_attr') {
    if (ch === '>') state = 'jsx_text';
    else if (ch === '"' ) { /* skip string in attrs */ }
    else if (ch === '{') {
      jsxExprBraces.push(braceDepth);
      braceDepth++;
    } else if (ch === '}') {
      braceDepth--;
    }
  } else if (state === 'jsx_text') {
    if (ch === '<' && next === '/') {
      // closing tag
      state = 'jsx_attr';
    } else if (ch === '<' && /[a-zA-Z]/.test(next)) {
      // opening tag
      state = 'jsx_attr';
    } else if (ch === '{') {
      jsxExprBraces.push(braceDepth);
      braceDepth++;
      state = 'code';
    } else if (ch === '}') {
      braceDepth--;
      if (jsxExprBraces.length > 0) jsxExprBraces.pop();
    }
  }
}

console.log('Final state:', state);
console.log('Final braceDepth:', braceDepth);
console.log('jsxExprBraces remaining:', jsxExprBraces.length);
console.log('In string:', state.startsWith('string') || state === 'template');

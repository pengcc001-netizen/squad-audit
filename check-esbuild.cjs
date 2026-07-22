const fs = require('fs');
const c = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Use esbuild to transform (same as Vite)
const esbuild = require('./node_modules/esbuild');

try {
  const result = esbuild.transformSync(c, {
    loader: 'tsx',
    target: 'es2022',
    jsx: 'automatic',
  });
  console.log('esbuild: SUCCESS, output length:', result.code.length);
} catch (e) {
  console.log('esbuild: ERROR');
  if (e.errors) {
    e.errors.forEach(err => {
      console.log(`  ${err.text}`);
      if (err.location) {
        console.log(`  Line ${err.location.line}, Col ${err.location.column}`);
        console.log(`  Context: ${err.location.lineText ? err.location.lineText.substring(0, 100) : 'N/A'}`);
      }
    });
  } else {
    console.log('  ', e.message);
  }
}

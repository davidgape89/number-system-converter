const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/number-system-converter/runtime.js',
        './dist/number-system-converter/polyfills.js',
        './dist/number-system-converter/scripts.js',
        './dist/number-system-converter/main.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/number-system-converter.js');
    
})()
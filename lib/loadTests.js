const glob = require('glob');
const isFunction = require('./isFunction');

function loadTests(spooning, patterns)
{
    const loaded = new Set();

    // Load files matching any provided pattern
    patterns.forEach((pattern) => glob.sync(pattern, {realpath: true}).forEach((file) => {

        // Skip if already loaded
        if(loaded.has(file)) { return; }

        // Mark loaded
        loaded.add(file);

        // Load
        const init = require(file);

        // If the loaded file exports a function, call it
        isFunction(init) &&  init(spooning);
    }));

    return loaded;
}

module.exports = loadTests;
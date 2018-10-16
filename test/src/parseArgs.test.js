const {strictEqual, deepEqual} = require('assert');
const {testSync} = require('spooning');
const {parseArgs} = require('../..');

testSync('parseArgs should respect supportsColor', () => {

    // style defaults to true
    const options = parseArgs([], false);
    strictEqual(options.style, false);
});

testSync('parseArgs should respect supportsColor (explicit)', () => {

    const options = parseArgs(['--style'], false);
    strictEqual(options.style, false);
});

testSync('parseArgs should respect --no-style', () => {

    const options = parseArgs(['--no-style'], true);
    strictEqual(options.style, false);
});

testSync('parseArgs should handle crazy param order', () => {

    const options = parseArgs(['--no-style', 'A.ok.test.js', '--bail', 'B.ok.test.js', '--debug' ], true);
    deepEqual(options, {style: false, bail: true, debug: true, _: ['A.ok.test.js', 'B.ok.test.js']});
});
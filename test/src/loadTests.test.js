const {strictEqual} = require('assert');
const {it, testSync, TestQueue} = require('spooning');
const {loadTests} = require('../..');
const ee = require('../common/ee');
const once = require('../common/once');

it('loadTests should call function exported by test definition file', (callback) => {

    const testQueue = new TestQueue();
    const done = once(callback);

    ee.on('init', () => done());

    loadTests(testQueue, ['./test/fixtures/B.ok.test.js', './test/fixtures/C.ok.test.js']);

    done(new Error('init was not called'));
});

testSync('loadTests should skip duplicate paths', () => {

    const testQueue = new TestQueue();
    const loaded = loadTests(testQueue, ['./test/fixtures/A.ok.test.js', './test/fixtures/A.ok.test.js']);

    strictEqual(loaded.size, 1);
});

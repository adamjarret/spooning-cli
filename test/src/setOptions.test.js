const {strictEqual} = require('assert');
const {testSync, TestQueue, Reporter, Tap} = require('spooning');
const {setOptions} = require('../..');

testSync('setOptions should set all options', () => {

    const testQueue = new TestQueue(new Reporter(new Tap()));
    testQueue.Tap = Tap;

    setOptions(testQueue, {bail: true, debug: true, concurrency: 4, style: true});

    strictEqual(testQueue.bail, true, 'bail not set');
    strictEqual(testQueue.reporter.tap.debug, true, 'debug not set');
    strictEqual(testQueue.q.concurrency, 4, 'concurrency not set');
    strictEqual(testQueue.reporter.tap.style.Reset, '\x1b[0m', 'style not set');
});

testSync('setOptions should set all options (style: false)', () => {

    const testQueue = new TestQueue(new Reporter(new Tap()));
    testQueue.Tap = Tap;

    setOptions(testQueue, {bail: true, debug: true, concurrency: 4, style: false});

    strictEqual(testQueue.bail, true, 'bail not set');
    strictEqual(testQueue.reporter.tap.debug, true, 'debug not set');
    strictEqual(testQueue.q.concurrency, 4, 'concurrency not set');
    strictEqual(testQueue.reporter.tap.style.Reset, '', 'style not set');
});

const {deepEqual} = require('assert');
const {it, TestQueue, Reporter, Tap, UnexpectedOutputError} = require('spooning');
const {CLI} = require('../..');
const once = require('../common/once');

it('CLI should show usage if no file paths were provided', (callback) => {

    const done = once(callback);

    const testQueue = new TestQueue(new Reporter(new Tap()));
    testQueue.Tap = Tap;

    testQueue.process = {
        stderr: {
            write: (s) => {
                const expected = '\nspoon [options] \'./test/**/*.test.js\'';
                const error = new UnexpectedOutputError(s.substr(0, expected.length), expected);
                done(error.actual === error.expected ? null : error);
            }
        },
        exit: (code) => {
            done(new Error(`exited with code: ${code}`));
        }
    };

    CLI(testQueue);

});

it('CLI should handle thrown errors', (callback) => {

    const done = once(callback);

    const testQueue = new TestQueue(new Reporter(new Tap()));
    testQueue.Tap = Tap;

    testQueue.process = {
        stderr: {
            write: (s) => {
                const expected = '# An error was thrown while attempting to run the tests';
                const error = new UnexpectedOutputError(s.substr(0, expected.length), expected);
                done(error.actual === error.expected ? null : error);
            }
        },
        exit: (code) => {
            done(new Error(`exited with code: ${code}`));
        }
    };

    CLI(testQueue, {_: ['./test/fixtures/D.test.js']});

});

it('CLI run tests', (callback) => {

    const done = once(callback);

    const testQueue = new TestQueue();
    testQueue.Tap = Tap;

    testQueue.on('runEnd', (info) => {
        try {
            deepEqual(info, {total: 3, passed: 3, exitCode: 0});
            done();
        }
        catch (e) {
            done(e);
        }
    });

    testQueue.process = {
        exit: (code) => {
            done(code === 0 ? null : new Error(`exited with code: ${code}`));
        }
    };

    CLI(testQueue, {_: ['./test/fixtures/*.ok.test.js']});

});
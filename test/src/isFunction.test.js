const {ok} = require('assert');
const {testSync} = require('spooning');
const {isFunction} = require('../..');

testSync('isFunction identifies any type of function', () => {
    ok(isFunction(() => {}), 'arrow function');
    ok(isFunction(function string() {}), 'function');
});

testSync('isFunction has no false positives', () => {
    ok(!isFunction(undefined), 'undefined');
    ok(!isFunction(null), 'null');
    ok(!isFunction(0), 'number');
    ok(!isFunction('string'), 'literal');
    ok(!isFunction(String(0)), 'typecast');
    // noinspection JSPrimitiveTypeWrapperUsage
    ok(!isFunction(new String(0)), 'instance');
    ok(!isFunction({}), 'object');
    ok(!isFunction(/./), 'regex literal');
    ok(!isFunction(new RegExp('.')), 'regex instance');
    ok(!isFunction(new Date()), 'date instance');
});

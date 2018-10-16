#!/usr/bin/env node

const spooning = require('spooning');
const supportsColor = require('supports-color');
const {parseArgs, setOptions} = require('..');

setOptions(spooning, parseArgs(process.argv.slice(2), supportsColor.stdout));

require('./src');

spooning.run(spooning.exit);

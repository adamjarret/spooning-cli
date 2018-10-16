#!/usr/bin/env node

const spooning = require('spooning');
const supportsColor = require('supports-color');
const {parseArgs, CLI} = require('..');

CLI(spooning, parseArgs(process.argv.slice(2), supportsColor.stdout));

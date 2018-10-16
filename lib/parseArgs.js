const minimist = require('minimist');

function parseArgs(argv, supportsColor)
{
    const options = minimist(argv, parseArgs.minimistOptions);

    if(!supportsColor) {
        options.style = false;
    }

    return options;
}

parseArgs.minimistOptions = {
    boolean: ['bail', 'debug', 'style'],
    default: {style: true},
    alias: {concurrency: 'c'}
};

module.exports = parseArgs;
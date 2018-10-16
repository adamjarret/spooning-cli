const loadTests = require('./loadTests');
const setOptions = require('./setOptions');
const usage = require('./usage');

function CLI(spooning, options = {})
{
    const {run, exit, reporter: {tap}, process} = spooning;

    try {
        const {_: patterns} = setOptions(spooning, options);

        if(!patterns || !patterns.length) {
            process.stderr.write(usage  + tap.EOL);
            process.exit(1);
        }

        loadTests(spooning, patterns);

        run(exit);
    }
    catch (e) {
        const message = `An error was thrown while attempting to run the tests.\n${e.stack}`;
        process.stderr.write(tap.renderDiagnostic(message) + tap.EOL);
        process.exit(1);
    }
}

module.exports = CLI;

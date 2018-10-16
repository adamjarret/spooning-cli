function setOptions(spooning, options)
{
    const {setBail, setConcurrency, reporter, Tap} = spooning;

    setBail(options.bail);

    setConcurrency(options.concurrency);

    if (reporter && reporter.tap) {

        reporter.tap.setDebug(options.debug);

        if (options.style) {
            reporter.tap.setStyle(Tap.Styles.Unicode);
        }
    }

    return options;
}

module.exports = setOptions;
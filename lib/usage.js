module.exports = `
spoon [options] './test/**/*.test.js'

  --bail                # exit after first test failure
  --concurrency|-c N    # run tests in parallel, limit N (default: 1)
  --debug               # include stack trace in error output
  --no-style            # force plain style
`;
# spooning-cli

[![Package Version](https://img.shields.io/npm/v/spooning-cli.svg)](https://npmjs.com/package/spooning-cli)
[![Build Status](https://img.shields.io/travis/adamjarret/spooning-cli.svg)](https://travis-ci.org/adamjarret/spooning-cli)
[![Coverage Status](https://img.shields.io/codecov/c/github/adamjarret/spooning-cli.svg)](https://codecov.io/gh/adamjarret/spooning-cli)
[![Dependencies](https://img.shields.io/david/adamjarret/spooning-cli.svg)](https://david-dm.org/adamjarret/spooning-cli)
[![Dev Dependencies](https://img.shields.io/david/dev/adamjarret/spooning-cli.svg)](https://david-dm.org/adamjarret/spooning-cli?type=dev)
[![Greenkeeper](https://badges.greenkeeper.io/adamjarret/spooning-cli.svg)](https://greenkeeper.io/)

Run tests defined with [spooning][spooning].

__Sample Output__

<img src="https://adamjarret.github.io/spooning/img/ss-unicode.jpeg" alt="Styled Output" width="264" height="160" />

## Install

	npm install -D spooning spooning-cli
	
Requires node 6 or later. `spooning-cli` requires `spooning` as a peer dependency. 

## Usage

    spoon [options] './test/**/*.test.js'
    
      --bail                # exit after first test failure
      --concurrency|-c N    # run tests in parallel, limit N (default: 1)
      --debug               # include stack trace in error output
      --no-style            # force plain style

__Command Example__

    spoon --debug -c 10 './test/**/*.test.js'

If using glob features like `**` (aka globstar), remember to put the pattern in quotes.

Specify multiple patterns to include files matched by any pattern.

Colors are enabled automatically if the environment supports them unless the `--no-style` flag is specified.

__Test Definition Examples__

Test definition files may call `require('spooning')` and define tests in their root scope
or export a synchronous function that accepts a `spooning` parameter and defines tests when run.

    const {it} = require('spooning');
    
    it('Should pass', (callback) => {
        callback();
    });

    it('Should fail', (callback) => {
        callback(new Error('failed'));
    });

or

    module.exports = ({it}) => {
    
        it('Should pass', (callback) => {
            callback();
        });

        it('Should fail', (callback) => {
            callback(new Error('failed'));
        });
    };

Note: If spooning-cli is installed globally (not recommended) test definition files _MUST_ export a function
and use the spooning instance passed to the function.
If spooning-cli is installed as a project dependency, tests _may_ export a function but it is optional.
    	
## Development

Clone the repository and run `npm install` in the project root.	

### Run Tests

    npm test
    
The `test` script accepts the same arguments as the `spoon` command. 

    npm test -- --debug

### Generate Coverage Reports

    npm run cover
    
Occasionally, the text based report will show values less than 100% but not identify any offending line numbers.
Use the `npm run cover-html` command to output a more detailed html-based coverage report to the
__.coverage__ directory.

## Built With

__Dependencies__

- [glob][glob] — match files by glob pattern
- [minimist][minimist] — parse command line arguments
- [supports-color][supports-color] — determine if colors are supported by the environment

__Dev Dependencies__

- [eslint][eslint] — enforce consistent code style
- [nyc][nyc] — generate test coverage reports
- [spooning][spooning] — run unit tests
	
## Contributing

Fork the repo and submit a pull request.
Contributions must have 100% test coverage and adhere to the code style enforced by eslint. 

## Versioning

[SemVer][semVer] is used for versioning.
For the versions available, see the [tags on this repository][tags]. 

## Releasing

1. Examine what will be included in the npm bundle:

        npm run pack
        
    The `npm run pack` command requires npm version 6.4.1 or later (because it uses the `--dry-run` flag).
    For older versions of npm, run `tar -tvf "$(npm pack)"` to list the contents of the generated tarball.

2. Bump the version number in __package.json__ and create a git tag:

        npm version patch

    The [`npm version`][npmVersion] command accepts a [SemVer][semVer] argument:
     `<newversion>|major|minor|patch` (where `<newversion>` is a standard version number, ex. 1.0.0).

3. Publish a new version:

        npm publish
        git push origin master --tags

## Author

[Adam Jarret](https://atj.me)

## License

This project is licensed under the _MIT License_.
See the [LICENSE.txt][license] file for details.

<div align="center"><br><br>🥄</div>

[supports-color]: https://www.npmjs.com/package/supports-color

[minimist]: https://www.npmjs.com/package/minimist

[glob]: https://www.npmjs.com/package/glob

[semVer]: https://semver.org/

[npmVersion]: https://docs.npmjs.com/cli/version

[eslint]: https://eslint.org

[nyc]: https://istanbul.js.org/

[spooning]: https://adamjarret.github.io/spooning/

[tags]: https://github.com/adamjarret/spooning-cli/tags

[license]: https://github.com/adamjarret/spooning-cli/blob/master/LICENSE.txt

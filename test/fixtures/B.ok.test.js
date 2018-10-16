const ee = require('../common/ee');

module.exports = ({testSync}) => {

    ee.emit('init', 'B');

    testSync('Should pass B (emit)', () => {});

};

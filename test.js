const assert = require('assert');
const Library = require('./index');
const { common, Logger } = require('./utils');

assert(Object.keys(common).length >= 8);
assert(typeof(Logger) == 'function');

const main = () => {
    const lib = new Library();
    lib.print();
};

main();
const Logger = require('./utils/logger');

const logger = new Logger(__filename);

module.exports = class Library {
    constructor() {
        logger.debug();
    }

    print() {
        logger.debug(this);
    }

};
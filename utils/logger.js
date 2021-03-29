/* eslint-disable no-console */
const path = require('path');
const { LOG_LEVEL } = require('../constants');

const { parentFuncName, getLocalDateTime, isLocalDevelopment } = require('./common');

const isDev = isLocalDevelopment();

const LOG_LEVEL_MAP = {
    EXTRA: -1,
    TRACE: 0,
    DEBUG: 1,
    INFO: 2,
    WARN: 3,
    ERROR: 4,
    FATAL: 5,
};

const DEV_ONLY = ['EXTRA', 'TRACE'];

module.exports = class Logger {
    constructor(prepend, basename = true) {

        if (!prepend) {
            throw new Error('You must specify the log prepend! Preferably, it should be the file that is calling the Logger class.');
        }

        if (basename) {
            try {
                prepend = path.normalize(prepend);
                prepend = prepend.replace(`${path.sep}index.js`, '');
                prepend = path.basename(prepend);
            } catch (error) { }
        }

        if (!console.warn) {
            console.warn = console.log;
        }

        if (!console.error) {
            console.error = console.log;
        }

        this.build = (level) => {
            const a = [];

            a.push(`[${getLocalDateTime()}]`);
            a.push(`[${level}]`);

            if (prepend && prepend !== 'index.js') {
                a.push(`[${prepend}]`);
            }
            return a;
        };

        this.extra = () => { };
        this.trace = () => { };
        this.debug = () => { };
        this.info = () => { };
        this.warn = () => { };
        this.error = () => { };
        this.fatal = () => { };

        Object
            .keys(LOG_LEVEL_MAP)
            .forEach((level) => {

                // validate env LOG_LEVEL
                if (LOG_LEVEL_MAP[LOG_LEVEL] > LOG_LEVEL_MAP[level] || (!isDev && DEV_ONLY.indexOf(level) >= 0)) {
                    return;
                }

                this[level.toLowerCase()] = (...x) => {
                    const params = [...this.build(level), `[${parentFuncName()}]`, ...x];
                    if (level === 'TRACE') {
                        console.trace(...params);
                    } else {
                        console.log(...params);
                    }
                };

            });
    }
};

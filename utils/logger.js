/* eslint-disable no-console */
const path = require('path');

const { parentFuncName, getLocalDateTime, isLocalDevelopment } = require('./common');

const isDev = isLocalDevelopment();

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
            const a = [`[${getLocalDateTime()}]`, `[${level}]`];
            if (prepend && prepend !== 'index.js') {
                a.push(`[${prepend}]`);
            }
            return a;
        };

        this.trace = (...x) => {
            if (isDev) {
                console.log(...this.build('TRACE'), `[${parentFuncName()}]`, ...x);
                console.trace();
            }
        };

        this.extra = (...x) => {
            if (isDev) {
                console.log(...this.build('EXTRA'), `[${parentFuncName()}]`, ...x);
            }
        };

        this.debug = (...x) => {
            console.log(...this.build('DEBUG'), `[${parentFuncName()}]`, ...x);
        };

        this.info = (...x) => {
            console.log(...this.build('INFO'), `[${parentFuncName()}]`, ...x);
        };

        this.warn = (...x) => {
            console.warn(...this.build('WARN'), `[${parentFuncName()}]`, ...x);
        };

        this.error = (...x) => {
            console.error(...this.build('ERROR'), `[${parentFuncName()}]`, ...x);
        };

        this.fatal = (...x) => {
            console.error(...this.build('FATAL'), `[${parentFuncName()}]`, ...x);
        };
    }
};

# KrashidBuilt Common JS Library

## How to add this to your project?
```
$ yarn add @KrashidBuilt/common@github:https://github.com/krashidbuilt/common-js-library.git

$ # add dev dependencies for linters
$ yarn add -D babel-eslint eslint eslint-plugin-prefer-arrow
```

## How to update your version of this library?
```
$ yarn upgrade @KrashidBuilt/common
```


## How to use the common linter?
Create a file like this at `./.eslintrc.js`
```
module.exports = require('@KrashidBuilt/common/linters/node');
```

## How to use the common logger?
Instantiate the logger with a prepend, i prefer to use the `__filename` global variable.
```
const Logger = require('@KrashidBuilt/common/utils/logger');
const logger = new Logger(__filename);
```

## Logging best practices?
Each function should have at least an EXTRA level log with a print statement.  
These logs will be silenced in staging/production, so they're primarily for development purposes
```
const Logger = require('@KrashidBuilt/common/utils/logger');
const logger = new Logger(__filename);

const exampleFn = (a, b, c) => {
    logger.extra({a, b, c});
}

exampleFn(1, 2, 3);
```
This should print something like this
```
[1/13/2021 4:24:55 PM] [EXTRA] [example.js] [exampleFn();] { a: 1, b: 2, c: 3 }
```
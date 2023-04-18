const { REACT_APP_DISABLE_ESLINT = false } = process.env;

module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es2021': true
    },
    'parserOptions': {
        'parser': '@babel/eslint-parser',
        'requireConfigFile': false,
        'ecmaVersion': 2021,
        'sourceType': 'module',
        'allowImportExportEverywhere': true,
        'ecmaFeatures': {
            'jsx': true,
            'modules': true
        }
    },
    'extends': REACT_APP_DISABLE_ESLINT ? [] : [
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:json/recommended',
    ],
    'plugins': REACT_APP_DISABLE_ESLINT ? [] : [
        'prefer-arrow'
    ],

    'settings': REACT_APP_DISABLE_ESLINT ? {} : {
        'react': {
            // "createClass": "createReactClass", // Regex for Component Factory to use,
            // default to "createReactClass"
            // "pragma": "React",  // Pragma to use, default to "React"
            // "fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
            'version': 'detect', // React version. "detect" automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            // default to latest and warns if missing
            // It will default to "detect" in the future
            // "flowVersion": "0.53" // Flow version
        },
        // "propWrapperFunctions": [
        //     // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
        //     "forbidExtraProps",
        //     { "property": "freeze", "object": "Object" },
        //     { "property": "myFavoriteWrapper" }
        // ],
        // "linkComponents": [
        //     // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
        //     "Hyperlink",
        //     { "name": "Link", "linkAttribute": "to" }
        // ]
    },

    'rules': REACT_APP_DISABLE_ESLINT ? {} : {
        'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 0 }],
        'no-console': 'error',
        'lines-between-class-members': [
            'error',
            'always'
        ],
        'padding-line-between-statements': [
            'error',
            {
                'blankLine': 'always',
                'prev': 'directive',
                'next': '*'
            },
            {
                'blankLine': 'any',
                'prev': 'directive',
                'next': 'directive'
            }
        ],
        'array-bracket-spacing': [
            'error',
            'never'
        ],
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'prefer-arrow/prefer-arrow-functions': [
            'error',
            {
                'disallowPrototype': true,
                'singleReturnOnly': false,
                'classPropertiesAllowed': false
            }
        ],
        'prefer-arrow-callback': [
            'error',
            {
                'allowNamedFunctions': true
            }
        ],
        'func-style': [
            'error',
            'expression',
            {
                'allowArrowFunctions': true
            }
        ],
        'arrow-parens': [
            'error',
            'always'
        ],
        'strict': [
            'error',
            'global'
        ],
        'require-await': 'error',
        'keyword-spacing': 'error',
        'space-before-blocks': 'error',
        'spaced-comment': [
            'error',
            'always',
            {
                'markers': [
                    '/'
                ]
            }
        ],
        'arrow-body-style': [
            'error',
            'as-needed'
        ],
        'function-paren-newline': [
            'error',
            'never'
        ],
        'function-call-argument-newline': [
            'error',
            'never'
        ],
        'no-const-assign': 'warn',
        'no-undef': 'error',
        'no-unused-vars': 'error',
        'no-use-before-define': [
            'error',
            {
                'functions': false
            }
        ],
        'quotes': [
            2,
            'single'
        ],
        'space-before-function-paren': [
            'error',
            {
                'anonymous': 'never',
                'named': 'never',
                'asyncArrow': 'always'
            }
        ],
        'comma-dangle': [
            'error',
            'only-multiline'
        ],
        'no-empty': [
            'error',
            {
                'allowEmptyCatch': true
            }
        ],
        'no-magic-numbers': [
            'off',
            {
                'ignoreArrayIndexes': true
            }
        ],
        'no-extra-parens': [
            'error',
            'all',
            {
                'nestedBinaryExpressions': false,
                'ignoreJSX': 'all'
            }
        ],
        'no-alert': 'error',
        'prefer-destructuring': [
            'error',
            {
                'object': true,
                'array': false
            }
        ],
        'curly': 'error',
        'brace-style': [
            'error',
            '1tbs'
        ],
        'no-this-before-super': 'warn',
        'no-continue': 'off',
        'no-unreachable': 'error',
        'constructor-super': 'warn',
        'valid-typeof': 'warn',
        'semi': [
            'error',
            'always'
        ],
        'no-extra-semi': 'error',
        'indent': [
            'warn',
            4,
            {
                'SwitchCase': 1
            }
        ]
    }
};

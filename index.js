
'use strict';

module.exports = {

    env: {
        es2021: true
    },

    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module'
    },

    plugins: [
        '@typescript-eslint'
    ],

    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'google'
    ],

    rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'brace-style': [2, 'stroustrup', { 'allowSingleLine': false }],
        'max-len': ['error', { 'code': 120 }],
        'object-curly-spacing': ['error','always'],
        'require-jsdoc': 'off'
    }

};


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
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'google'
    ],

    rules: {

        'brace-style': [2, 'stroustrup', { 'allowSingleLine': false }],
        'max-len': ['error', { 'code': 120 }],
        'object-curly-spacing': ['error','always'],
        'require-jsdoc': 'off',
        'no-unused-vars': 'off',
        'new-cap': 'off',

        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {'argsIgnorePattern': '^_'}],

        'react-hooks/exhaustive-deps': 'off'
    }

};

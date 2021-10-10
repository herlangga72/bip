module.exports = {
    parser: '@typescript-eslint/parser', // add the TypeScript parser

    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 3,
        sourceType: 'script',
    },
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    plugins: [
        'svelte3',
        '@typescript-eslint', // add the TypeScript plugin
    ],
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3',
        },
    ],
    rules: {
        // ...
    },
    settings: {
        'svelte3/typescript': () => require('typescript'),
    },
};

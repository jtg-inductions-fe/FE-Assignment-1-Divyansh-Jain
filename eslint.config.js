import js from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default [
    /*
    Rules from `js.configs.recommended` are included by default. For a full list of these rules,
    please refer to the ESLint recommended configuration:
    https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js}
    */
    js.configs.recommended,
    eslintPluginPrettier,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                myCustomGlobal: 'readonly',
            },
        },
        rules: {
            indent: ['error', 4],
            'no-unused-vars': 'warn',
            camelcase: ['warn'],
            'no-console': ['warn'],
        },
    },
];

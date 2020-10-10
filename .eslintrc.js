module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint'
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        "no-constant-condition": ["error", { "checkLoops": false }],
        "@typescript-eslint/no-empty-function": ["error", { "allow": ["functions","methods"] }],
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/no-var-requires":"off",
        '@typescript-eslint/no-this-alias': [
            'error',
            {
                allowedNames: ['_this'],
            },
        ],
    }
};

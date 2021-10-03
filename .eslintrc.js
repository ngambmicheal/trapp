module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "eslint-plugin-import",
        "@typescript-eslint"
    ],
    rules: {
        'comma-dangle': ['error', 'never'],
        'eol-last': 2,
        'indent': ['error', 2, { "SwitchCase": 1 }],
        'newline-before-return': 2,
        'object-curly-spacing': 2,
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'space-infix-ops': 2,
        'keyword-spacing': 2
    }
}

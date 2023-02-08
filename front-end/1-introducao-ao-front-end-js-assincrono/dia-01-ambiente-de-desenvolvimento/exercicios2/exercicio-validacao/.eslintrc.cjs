module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ' @trybe/eslint-config-frontend ',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};

module.exports = {
  'extends': ['eslint:recommended'],
  'plugins': [
    '@typescript-eslint',
    'no-autofix',
  ],
  'overrides': [
    {
      'files': ['*.test.ts', '**/__mocks__'],
      'plugins': ['jest'],
      'extends': ['plugin:jest/recommended'],
    },
  ],
  'parser': '@typescript-eslint/parser',
  'rules': {
    'eqeqeq': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-var': 'warn',
    'no-autofix/prefer-const': 'warn',
  },
};

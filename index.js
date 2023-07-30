module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint', 'no-autofix'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: true,
    },
  },
  overrides: [
    {
      files: ['*.test.ts', '**/__mocks__'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
    },
  ],
  rules: {
    eqeqeq: 'warn',
    'import/no-named-as-default-member': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-var': 'warn',
    'no-autofix/prefer-const': 'warn',
    quotes: ['warn', 'single', { allowTemplateLiterals: false }],
    'require-await': ['warn'],
  },
};

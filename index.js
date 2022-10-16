module.exports = {
  'plugins': [
    '@typescript-eslint',
    'no-autofix',
  ],
  'overrides': [
    {
      'files': ['*.test.ts'],
      'plugins': ['jest'],
      'extends': ['plugin:jest/recommended'],
    },
  ],
  'parser': '@typescript-eslint/parser',
  'rules': {
    'arrow-spacing': 'warn',
    'comma-dangle': ['warn', 'always-multiline'],
    'comma-spacing': 'off',
    'eqeqeq': 'warn',
    '@typescript-eslint/comma-spacing': 'warn',
    // https://github.com/typescript-eslint/typescript-eslint/issues/1852
    'indent': ['warn', 2, { ignoredNodes: ['VariableDeclaration[declarations.length=0]'] }],
    'key-spacing': 'warn',
    'no-multi-spaces': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-var': 'warn',
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['warn', 'always'],
    'no-autofix/prefer-const': 'warn',
    'quotes': ['warn', 'single', { avoidEscape: true }],
    'semi': ['warn', 'always', { omitLastInOneLineBlock: true }],
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': 'warn',
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'warn',
    '@typescript-eslint/member-delimiter-style': 'warn',
    '@typescript-eslint/type-annotation-spacing': 'warn',
  },
};

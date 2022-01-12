module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'testing-library', 'jest-dom'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    semi: [1, 'never'],
    'no-undef': 0,
    'no-console': [
      2,
      {
        allow: ['warn', 'error'],
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      },
    ],
    'jsx-a11y/no-onchange': 0,
    'react/display-name': 0,
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    'react/no-unescaped-entities': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
      },
    ],
  },
}

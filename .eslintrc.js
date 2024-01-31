module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // For linting TypeScript files
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.eslint.json', 'packages/*/.tsconfig.json'],
        ecmaFeatures: {
          jsx: true, // Allows for the parsing of JSX
        },
      },
      rules: {
        'no-undef': 0,
        'no-any': 0,
      },
    },
  ],
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/explicit-function-return-type': 0, // Consider using explicit annotations for object literals and function return types even when they can be inferred.
    'no-empty': 'warn',
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
        semi: true,
      },
    ],
  },
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  ignorePatterns: ['packages/*/src/**/*.test.tsx', 'packages/*/src/**/*.stories.tsx'],
};

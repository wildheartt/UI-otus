import js from '@eslint/js';
import react from 'eslint-plugin-react';
import storybook from 'eslint-plugin-storybook';

export default [
  js.configs.recommended,
  {
    plugins: {
      react,
      storybook,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...storybook.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    ignores: ['node_modules', 'dist', 'storybook-static'],
  },
];

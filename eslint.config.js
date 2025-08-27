import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import pluginQuery from '@tanstack/eslint-plugin-query'
import unusedImports from 'eslint-plugin-unused-imports'
import reactPlugin from 'eslint-plugin-react'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist', 'eslint.config.js']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      ...pluginQuery.configs['flat/recommended'],
      eslintConfigPrettier
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,

      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
      import: importPlugin,
      prettier: prettier
    },
    rules: {
      'prettier/prettier': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'import/no-duplicates': 'error',
      'import/no-unresolved': 'error',
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: false,
          reservedFirst: true
        }
      ],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],
      'import/order': [
        'warn',
        {
          'newlines-between': 'always',
          groups: [
            'builtin',
            'external',
            'object',
            'type',
            'internal',
            'parent',
            'sibling',
            'index'
          ]
        }
      ]
    }
  }
])

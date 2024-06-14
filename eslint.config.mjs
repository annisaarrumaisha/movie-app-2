import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin' // Pastikan menggunakan `@typescript-eslint/eslint-plugin`
import tsParser from '@typescript-eslint/parser' // Tambahkan parser TypeScript
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import prettierConfig from 'eslint-config-prettier' // Tambahkan eslint-config-prettier
import prettierPlugin from 'eslint-plugin-prettier' // Tambahkan eslint-plugin-prettier

export default [
  {
    files: ['**/*.ts', '**/*.tsx'], // Menambahkan TypeScript file patterns
    languageOptions: {
      parser: tsParser, // Menambahkan parser TypeScript
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json', // Menambahkan `project` untuk TypeScript
      },
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.jsx', '**/*.tsx'], // Menambahkan JSX/TSX file patterns
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  pluginReactConfig,
  prettierConfig, // Menambahkan eslint-config-prettier untuk menonaktifkan aturan yang bertentangan
  prettierPlugin.configs.recommended, // Menambahkan eslint-plugin-prettier dan aturannya
]

import { defineConfig } from 'eslint-define-config'

export default defineConfig([
  {
    files: ['*.astro'],
    parser: 'astro-eslint-parser',
    parserOptions: {
      extraFileExtensions: ['.astro']
    },
    plugins: {
      astro: import('eslint-plugin-astro')
    },
    extends: ['plugin:astro/recommended']
  },
  {
    files: ['*.ts', '*.tsx'],
    parser: '@typescript-eslint/parser',
    plugins: {
      '@typescript-eslint/parser': import('@typescript-eslint/parser')
    },
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:astro/recommended'
    ]
  }
])

module.exports = {
    root: true,
    env: { browser: true, es2021: true },
    parser: '@typescript-eslint/parser',
    plugins: ['vue', '@typescript-eslint'],
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier'
    ],
    rules: { /* your overrides */ }
  }
  
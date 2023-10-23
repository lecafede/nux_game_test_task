module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  rules: {
    'no-tabs': 0,
    'no-trailing-spaces': ['error', { skipBlankLines: true, ignoreComments: true }],
    'vue/no-unused-vars': 'error',
    'vue/html-self-closing': 'off',
    'vue/multi-word-component-names': 'off',
  },
  env: {
    node: true, // This enables Node.js global variables
    browser: true, // If your code also runs in a browser environment
  },
}

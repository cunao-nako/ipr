module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'vue/multi-word-component-names': 'off',
  },
};

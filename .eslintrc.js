module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true,
  },
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};

'use strict';

module.exports = {
  extends: [
    'eslint-config-mindflash',
    './rules/best-practices',
    './rules/ecma-script6',
    './rules/imports',
    './rules/node',
    './rules/possible-errors',
    './rules/strict-mode',
    './rules/stylistic-issues',
    './rules/variables',
  ].map(require.resolve),
  env: {
    amd: false,
    browser: true,
    node: false,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourcetype: 'script'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json']
      }
    }
  },
  plugins: ['import']
};


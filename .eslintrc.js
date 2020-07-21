module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "space-before-function-paren": ["error", {
      "anonymous": "always", //匿名函数表达式
      "named": "never", //命名函数表达式
      "asyncArrow": "always" //异步箭头函数表达式
    }],
  }
}

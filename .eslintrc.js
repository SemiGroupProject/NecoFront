module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'eslint:recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': [
      'error',
      // 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
      // https://prettier.io/docs/en/options.html
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        endOfLine: 'auto',
        trailingComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid'
      }
    ],
    // 0 = off, 1 = warn, 2 = error
    'nuxt/no-this-in-fetch-data': 1,
    'no-undef': 1,
    'vue/no-mutating-props': 1,
    'vue/no-use-v-if-with-v-for': 1,
    camelcase: 0,
    'no-unreachable': 1,
    eqeqeq: 1,
    'vue/require-v-for-key': 1,
    'no-useless-escape': 0,
    'no-unused-vars': 1,
    'no-console': process.env.NODE_ENV === 'production' ? 'warning' : 'off',
    'vue/no-side-effects-in-computed-properties': 1,
    'no-lonely-if': 1
  }
};

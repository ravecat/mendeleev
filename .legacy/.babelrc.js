module.exports = {
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    [
      'babel-plugin-styled-components',
      {
        displayName: process.env.NODE_ENV === 'development'
      }
    ]
  ]
}

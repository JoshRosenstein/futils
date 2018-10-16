module.exports = function babelConfig (api){
  api.cache(true)
  return{
    presets: [
      ['@babel/preset-env', {
        modules: false
      }],
      '@babel/preset-react',
      '@babel/preset-flow'
    ],
    "retainLines": true,
    env: {
      test: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-flow'
        ],
        "retainLines": true
      },
      docz: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-flow'
        ]
      },
    }
  }}
 
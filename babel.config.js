module.exports = api => {
  const isTest = api.env('test')

  api.cache(() => JSON.stringify({isTest}))

  if (!isTest) {
    return {}
  }

  return {
    compact: false,
    plugins: [
      '@babel/plugin-proposal-class-properties',
      [
        'transform-module-imports',
        {
          'typed-is': {
            transform: 'typed-is/lib/${member}',
            preventFullImport: true,
          },
        },
      ],
    ],
    presets: [
      '@babel/preset-typescript',
      ['@babel/preset-env', {targets: {node: true}}],
    ],
  }
}

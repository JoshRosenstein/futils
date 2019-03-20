module.exports = {
  json: './out.json',
  // readme: 'none',
  includes: './src/*.ts',
  exclude: [
    'node_modules',
    'lib',
    'type-definitions',
    '**/typeTest',
    '**/*.test.ts',
    '**/*.spec.ts',
  ],

  //mode: 'file',
  excludeExternals: true,
  excludeNotExported: true,
  excludePrivate: true,
}

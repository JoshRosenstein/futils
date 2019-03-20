'use strict'

module.exports = api => {
  const isTest = api.env('test')

  api.cache(() => JSON.stringify({isTest}))

  const presets = ['@babel/react', '@babel/typescript']
  const plugins = []

  if (isTest) {
    presets.push(['@babel/env', {targets: {node: true}}])
  } else {
    // plugins.push([
    //   ('transform-module-imports',
    //   {
    //     'typed-is': {
    //       // eslint-disable-next-line no-template-curly-in-string
    //       transform: 'typed-is/lib/${member}',
    //       preventFullImport: true,
    //     },
    //   }),
    // ])
  }

  return {presets, plugins}
}

// module.exports = api => {
//   const isTest = api.env('test')

//   api.cache(() => JSON.stringify({isTest}))

//   if (!isTest) {
//     return {}
//   }

//   return {
//     compact: false,
//     plugins: [
//       '@babel/plugin-proposal-class-properties',
//       [
//         'transform-module-imports',
//         {
//           'typed-is': {
//             transform: 'typed-is/lib/${member}',
//             preventFullImport: true,
//           },
//         },
//       ],
//     ],
//     presets: [
//       '@babel/preset-typescript',
//       ['@babel/preset-env', {targets: {node: true}}],
//     ],
//   }
// }

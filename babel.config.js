const presets = [
  '@babel/preset-env',
  '@babel/preset-react',
  '@babel/preset-flow',
]
const resolver = [
  'module-resolver',
  {
    alias: {
      '^types$': './types',
    },
    cwd: 'packagejson',
  },
]
const assign = Object.assign

const esPresents = assign(presets, [
  [
    '@babel/preset-env',
    {
      modules: false,
    },
  ],
])

module.exports = function babelConfig(api) {
  api.cache(true)
  return {
    presets: esPresents,
    plugins: [resolver],
    retainLines: true,
    env: {
      test: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-flow',
        ],
        retainLines: true,
      },
      cjs: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-flow',
        ],
        retainLines: false,
        comments: false,
        plugins: [
          [
            '@babel/transform-modules-commonjs',
            {noInterop: true, strict: true},
          ],
        ],
      },
      es: {
        presets: esPresents,
        retainLines: false,
        comments: false,
      },
      docz: {
        presets: presets,
      },
    },
  }
}

// module.exports = function babelConfig(api) {
//   api.cache(true)
//   return {
//     presets: [
//       [
//         '@babel/preset-env',
//         {
//           modules: false,
//         },
//       ],
//       '@babel/preset-react',
//       '@babel/preset-flow',
//     ],
//     plugins: [
//       [
//         'module-resolver',
//         {
//           alias: {
//             '^types$': './types',
//           },
//           cwd: 'packagejson',
//         },
//       ],
//     ],
//     retainLines: true,
//     env: {
//       test: {
//         presets: [
//           '@babel/preset-env',
//           '@babel/preset-react',
//           '@babel/preset-flow',
//         ],
//         retainLines: true,
//       },
//       docz: {
//         presets: [
//           '@babel/preset-env',
//           '@babel/preset-react',
//           '@babel/preset-flow',
//         ],
//       },
//     },
//   }
// }

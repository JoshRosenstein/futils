import babel from 'rollup-plugin-babel'
import {uglify} from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import cleanup from 'rollup-plugin-cleanup'
import filesize from 'rollup-plugin-filesize'
import pkg from './package.json'


const bconfig={
  babelrc: false,
  exclude: 'node_modules/**',
  'presets': [
    ['env',{'targets': {
      'browsers': ['Firefox ESR']},
    'modules': false,loose:true
    }
    ],'minify','react','stage-0'
  ],
  'plugins': ['external-helpers']
}
const attachMin=str=>str.replace('.js','.min.js')
const ensureArray = maybeArr => Array.isArray(maybeArr) ? maybeArr : [maybeArr]
const createConfig = (opts) => {
  opts = opts || {}
  const browser = opts.browser || false
  const external = opts.external
  const output = ensureArray(opts.output)

  return {
    input: 'src/index.js',
    output: output.map(format => Object.assign({}, format, {
      name: 'futils',
      sourcemap: false
    })),
    external,
    plugins: [
      resolve({
        jsnext: true,
        main: true,
        browser: true
      }),
      commonjs(),
      babel(),
      cleanup(),
      filesize()
    ],
  }
}

const createUglyConfig = (opts) => {
  opts = opts || {}
  const browser = opts.browser || false
  const external = opts.external
  const output = ensureArray(opts.output)

  return {
    input: 'src/index.js',
    output: output.map(format => Object.assign({}, format, {
      name: 'futils',
      sourcemap: true
    })),
    external,
    plugins: [
      resolve(),
      commonjs(),
      babel(),
      uglify(),
      filesize()
    ],
  }
}

const createESConfig = (opts) => {
  opts = opts || {}
  const browser = opts.browser || false
  const external = opts.external
  const output = ensureArray(opts.output)

  return {
    input: 'src/index.js',
    output: output.map(format => Object.assign({}, format, {
      name: 'futils',
      sourcemap: true
    })),
    external,
    plugins: [
      babel(bconfig),
      filesize()
    ],
  }
}

const configs = [
  /* node ESM/CJS builds */
  createESConfig({
    output: [
      { format: 'es', file: pkg.module },
    ],
  })
]
const configs2 = [
  /* node ESM/CJS builds */
  createConfig({
    output: [
      { format: 'es', file: pkg.module },
      { format: 'cjs', file: pkg.main }
    ],
  }),
  /* browser ESM/CJS builds (for bundlers) */
  createConfig({
    browser: true,
    output: [
      { format: 'es', file: pkg.browser[pkg.module] },
      { format: 'cjs', file: pkg.browser[pkg.main] }
    ],
  }),
  /* UMD with bundled dependencies, ready for browsers */
  createConfig({
    browser: true,
    external: [],
    output: { format: 'umd', file: pkg.unpkg },
  }),

  // // UGLIFY
  createUglyConfig({
    output: [
  	{ format: 'cjs', file: attachMin(pkg.main) }
    ],
  }),
  createUglyConfig({
    browser: true,
    output: [
      { format: 'cjs', file: attachMin(pkg.browser[pkg.main]) }
    ],
  }),
  createUglyConfig({
    browser: true,
    external: [],
    output: { format: 'umd', file: attachMin(pkg.unpkg) },
  }),
]

export default configs

// const BasePlugins = [
//   resolve({
//     jsnext: true,
//     main: true,
//     browser: true
//   }),
//   commonjs({
//     include: 'node_modules/**',
//     extensions: ['.js']
//   }),
//   babel(),
//   replace({
//     exclude: 'node_modules/**',
//     ENV: JSON.stringify(process.env.NODE_ENV || 'development')
//   }),
// ]
//
//
// const minBase ={
//       treeshake: true,
//       plugins: [...BasePlugins,
//         uglify(),
//         filesize()
//       ]
// }
//
// const base ={
//       treeshake: true,
//       plugins: [...BasePlugins,
//         cleanup(),
//         filesize()
//       ]
// }
//
// export default [{
//   input: './src/index.js',
// ...minBase,
//   output: {
//     file: 'dist/futils.min.js',
//     format: 'umd',
//     name: 'futils'
//   }
// }, {
//   input: './src/index.js',
// ...base,
//   output: {
//     file: 'dist/futils.js',
//     format: 'umd',
//     name: 'futils'
//   }
// },
// {
//   input: './src/index_.js',
// ...minBase,
//   output: {
//     file: 'dist/futils_.min.js',
//     format: 'umd',
//     name: 'futils_'
//   }
// }, {
//   input: './src/index_.js',
// ...base,
//   output: {
//     file: 'dist/futils_.js',
//     format: 'umd',
//     name: 'futils_'
//   }
// }
//
// ]


// const plugins = [
//   resolve({
//     jsnext: true,
//     main: true,
//     browser: true
//   }),
//   commonjs({
//     include: 'node_modules/**',
//     extensions: ['.js']
//   }),
//   babel({
//     babelrc: false,
//     presets: [
//       [
//         'env',
//         {
//           targets: {
//             browsers: ['last 2 versions', 'ie >= 9']
//           },
//           modules: false
//         }
//       ],
//       'stage-0'
//     ],
//     exclude: 'node_modules/**',
//     runtimeHelpers: true
//   }),
//   replace({
//     exclude: 'node_modules/**',
//     ENV: JSON.stringify(process.env.NODE_ENV || 'development')
//   }),
//   uglify(),
//   filesize()
//
// ]
// const external = pkg.dependencies
//
// const configBase = {
//   input: 'src/index.js',
//   output: [
//     { file: pkg.module, format: 'es', sourcemap: false },
//     { file: pkg.main, format: 'cjs', sourcemap: false },
//     { file: pkg.browser, format: 'umd', name: pkg.moduleName, sourcemap: false }
//   ],
//   plugins
// }

// const UMDBase = {
//   input: 'src/index.js',
//   external,
//   output: [
//     {
//       file: pkg.browser,
//       format: 'umd',
//       name: pkg.moduleName
//     }
//   ],
//
//   plugins
// }

// export default configBase

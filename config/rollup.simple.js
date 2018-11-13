import cleanup from 'rollup-plugin-cleanup'
import filesize from 'rollup-plugin-filesize'
import pkg from '../package.json'
import babel from 'rollup-plugin-babel'
import {terser} from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

const ensureArray = maybeArr =>
  Array.isArray(maybeArr) ? maybeArr : [maybeArr]
const removeMin = str => str.replace('.min.js', '.js')

const deafultBabel = (additions = {}) => ({
  babelrc: false,
  runtimeHelpers: true,
  include: '**/*.js',
  exclude: 'node_modules/**',
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {node: 'current'},
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    // [
    //   'module-resolver',
    //   {
    //     alias: {
    //       '^types$': './types',
    //     },
    //     cwd: 'packagejson',
    //   },
    // ],
  ],
  ...additions,
})

const terserConfig = {
  compress: {
    pure_getters: true,
    unsafe: true,
    unsafe_comps: true,
    warnings: false,
  },
}

const outputs = [
  {
    format: 'umd',
    name: 'F',
    file: pkg.unpkg,
    plugins: [terser(terserConfig)],
    exports: 'named',
  },
  {
    format: 'cjs',
    plugins: [terser(terserConfig)],
    file: 'dist/index.min.js',
    exports: 'named',
  },
  {
    format: 'cjs',
    interop: false,
    plugins: [cleanup()],
    file: 'dist/index.js',
    exports: 'named',
  },
  {
    format: 'es',
    interop: false,
    plugins: [cleanup()],
    file: 'dist/index.es.js',
    exports: 'named',
  },
]

const outputs2 = {
  //external: false,
  input: 'src/index.js',
  treeshake: true,
  plugins: [resolve(), commonjs(), babel(), filesize()],
  output: [
    {
      file: 'dist/futils.umd.js',
      format: 'umd',
      name: 'R',
    },
  ],
}
const outputs3 = {
  external: false,
  input: 'src/index.js',
  treeshake: true,
  plugins: [resolve(), commonjs(), babel(), terser(terserConfig), filesize()],
  output: [
    {
      file: 'dist/futils.umd.min.js',
      format: 'umd',
      name: 'R',
    },
  ],
}
export default [
  // browser-friendly UMD build
  {
    input: 'es/index.js',
    output: {
      name: 'futils',
      file: 'dist/futils.umd.js',
      format: 'umd',
    },
    plugins: [resolve(), commonjs(), babel(), terser(terserConfig), filesize()],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'es/index.js',
    external: ['typed-is'],
    output: [
      {file: 'dist/futils.js', format: 'cjs'},
      {file: 'dist/futils.es.js', format: 'es'},
    ],
    plugins: [babel(), filesize()],
  },
]
//export default [outputs2, outputs3]

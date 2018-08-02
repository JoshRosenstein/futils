
import cleanup from 'rollup-plugin-cleanup'
import filesize from 'rollup-plugin-filesize'
import pkg from '../package.json'
import babel from 'rollup-plugin-babel'
import {terser} from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'

const ensureArray = maybeArr => Array.isArray(maybeArr)
  ? maybeArr
  : [maybeArr]
const removeMin = str => str.replace('.min.js', '.js')

const deafultBabel=(additions = {}) => ({
  babelrc: false,
  runtimeHelpers: true ,
  include: '**/*.js',
  exclude: 'node_modules/**',
  'presets': ["react","stage-0",
    [
      'env', {
        useBuiltIns: false,
        modules: false ,
        targets: {
          node: 6
        },
         exclude: ['transform-regenerator', 'transform-async-to-generator'],
      }
    ],
  ],
  'plugins': [
    'external-helpers', 'annotate-pure-calls'
  ],
  ...additions
})


const terserConfig={
  compress: {
    pure_getters: true,
    unsafe: true,
    unsafe_comps: true,
    warnings: false
  }}


const outputs = [
  {
    format: 'umd',
    name: 'F',
    file: removeMin(pkg.unpkg),
    plugins: [terser(terserConfig)]
  }, {
    format: 'cjs',
    interop:false,
    plugins: [terser(terserConfig)],
    file: 'dist/index.min.js',
  },
  {
    format: 'cjs',
      interop:false,
    plugins: [cleanup()],
    file: 'dist/index.js',
  },
  {
    format: 'es',
      interop:false,
    plugins: [cleanup()],
    file: 'dist/index.es.js',
  },
  {
    format: 'es',
      interop:false,
    plugins: [terser()],
    file: 'dist/index.es.min.js',
  }
]


export default outputs.map(({ fileExt, plugins = [],babelc={},...output }) => ({
  input: 'src/index.js',
output,
  plugins: [
    babel(deafultBabel(babelc)), ...plugins, filesize()]
}))

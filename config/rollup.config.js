import babel from 'rollup-plugin-babel'
import {uglify} from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import cleanup from 'rollup-plugin-cleanup'
import filesize from 'rollup-plugin-filesize'

import pkg from '../package.json'


export default [{
  input: './src/index.js',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs({
      include: 'node_modules/**',
      extensions: ['.js']
    }),
    babel(),
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    uglify(),
    filesize()
  ],
  output: {
    file: 'dist/futils.min.js',
    format: 'umd',
    name: 'futils'
  }
}, {
  input: './src/index.js',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs({
      include: 'node_modules/**',
      extensions: ['.js']
    }),
    babel(),
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    cleanup(),
    filesize()
  ],
  output: {
    file: 'dist/futils.js',
    format: 'umd',
    name: 'futils'
  }
}]


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

//export default configBase

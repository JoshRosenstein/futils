import babel from 'rollup-plugin-babel'
import cleanup from 'rollup-plugin-cleanup'
import filesize from 'rollup-plugin-filesize'
import { uglify } from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve';

export default [{
  input: './src/index.js',
  plugins: [
    resolve(),
    babel(),
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
    resolve(),
    babel(),
    cleanup(),
    filesize()
  ],
  output: {
    file: 'dist/futils.js',
    format: 'umd',
    name: 'futils'
  }
}]
